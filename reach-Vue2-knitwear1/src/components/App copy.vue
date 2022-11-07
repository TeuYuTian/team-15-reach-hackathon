<template>
  <div id="app">

  <H1>Reach BUY SEND SELL</H1>

  current state: <c>{{state.value}}</c><BR/>

    <H3>Choose your role:</H3>
    <c-button variant="success" @click="designer()"> Designer</c-button>
    <c-button variant="primary" @click="customer()"> Customer</c-button>
    <c-button variant="warning" @click="transport()">Transport</c-button>
    <BR/>
  
  <HR/>

  <div v-if="role==0">
  <h3>Designer</h3>

  <div v-show="state.matches('appInit')">
    <c-button variant="danger" @click="createContract()">Click to Deploy Contract</c-button><BR/>
  </div>

    contract: (Copy below to Customer and Transport)<BR/> 
    <h3>{{ ctcInfoStr }}</h3><BR /><BR />

    sell Price : {{ sellPrice}} <BR/>
    transport Price : {{ transPrice}} <BR/>

  </div>

  <div v-else-if="role==1">
  <h3>Customer</h3>

  <input v-model="ctcStr" placeholder="paste contract here"> <button @click="attachContract1()">Attach Contract</button>
  
    <BR/><BR/>

    <div v-if="sellPrice>0">
    Do you want to purchase this for {{sellPrice}} ? 
    <button @click="yesnoPurchase(true)">YES</button>
    <button @click="yesnoPurchase(false)">NO</button>

    <BR/><BR/>  
    <div v-if="pickupDone">
      Confirm order delivery ? 
      <button @click="yesnoDelivery(true)">YES</button>
      <button @click="yesnoDelivery(false)">NO</button>
    </div>
  </div>

  </div>

<div v-else-if="role==2">
  <h3>Transporter</h3>

    <input v-model="ctcStr" placeholder="paste contract here"> <button @click="attachContract2()">Attach Contract</button>
  
    <BR/> <BR/> 
    <div v-if="paymentDone">
    Do you want to deliver this for {{transPrice}} ? 
    <button @click="yesnoTransport(true)">YES</button>
    <button @click="yesnoTransport(false)">NO</button>
    </div>
</div>

  <BR/>
  <div v-if="paymentDone">
   {{ paymentMsg }}
   </div>

 <BR/>
  <div v-if="pickupDone">
   {{ pickupMsg }}
   </div>

 <BR/>
  <div v-if="deliveryDone">
   {{ deliveryMsg }}
   </div>
  <HR/>
  addr: {{ addr}} <BR/>
  bal: {{ bal }} <BR/>
  balAtomic: {{ balAtomic }}<BR/>


  <button @click="updateBalance()">updateBalance</button>

  </div>
</template>

<script>

// xstate stuff
//import { Machine, assign } from "xstate"

import { Machine, assign, interpret } from "xstate"
//import { interpret } from "xstate-vue2"

const increment = (context) => context.count + 1;
const decrement = (context) => context.count - 1;

const reachMachine = Machine({
  predictableActionArguments: true,
  id: "reach",
  initial : "appInit",
  context: {
    count:0
  },
  states: {
    appInit: {
      on: { 
        DEPLOY: {
          target: "step"
        }
      }
    },
    step: {
      on: {
        ONLY: {
          action: assign( {count:increment} ), 
          target: "localStep",
        },
        EACH: {
          action: assign({count:decrement}), 
          target: "localStep"
          },
        PUBLISH: {
          target: "consensus"
          },
        PAY: {
          target: "consensus"
          }
        }
    },
    localStep: {
      on: {
        ONLY: {
          action: assign({count:increment}), 
          target: "step"
        },
        EACH: {
          action: assign({count:decrement}),
          target: "step"
        }
      }
    },
    consensus: {
      on: {
        COMMIT: {
          target: "step"
        },
        ONLY: {
          target: "localStep"
        },
        EACH: {
          target: "localStep"
        },
      }
    }
  }
})
   

import * as backend from '../build/index.main.mjs';
import { loadStdlib } from '@reach-sh/stdlib';
//const stdlib = loadStdlib(process.env);

// Run in cmdline with 
// REACH_CONNECTOR_MODE=ALGO-Live
// ../reach devnet
const stdlib = loadStdlib("ALGO");
stdlib.setProviderByName("TestNet")

console.log(`The consensus network is ${stdlib.connector}.`);

const suStr = stdlib.standardUnit;
console.log("Unit is ", suStr)
const toAU = (su) => stdlib.parseCurrency(su);
const toSU = (au) => stdlib.formatCurrency(au, 4);

// Defined all interact as global for backend calls, later convert them to Vue methods
let commonInteract = { };
let customerInteract = { };
let designerInteract = { };
let transportInteract= { };

// Setup secret seed here, loaded in .env.local
const secret = process.env.VUE_APP_SECRET1
const secret2 = process.env.VUE_APP_SECRET2
const secret3 = process.env.VUE_APP_SECRET3

export default {
  name: 'App',
  created() {
      // Start service on component creation
      this.reachService
        .onTransition((state) => {
          // Update the current state component data property with the next state
          this.state = state;
          // Update the context component data property with the updated context
          this.context = state.context;
        })
        .start();
    },
  components: {
    //WizardSteps
  },
  data: () => {
    return {
      reachService: interpret(reachMachine),
      state: reachMachine.initialState,
      context: reachMachine.context,
      role: 0,
      acc: undefined,
      addr: undefined,
      balAtomic: undefined,
      bal: undefined,
      ctc: undefined,
      ctcInfoStr: undefined,
      sellPrice: undefined,
      transPrice: undefined,
      ctcStr: undefined,
      contractCreated: false,
      purchaseResult: undefined,
      transportResult: undefined,
      deliveryResult: undefined,
      paymentDone: undefined,
      paymentMsg: undefined,
      pickupDone: undefined,
      pickupMsg: undefined,
      deliveryDone: undefined,
      deliveryMsg: undefined,
      purchaseTime: undefined,
    };
  },
   methods: {

      // xstate send in Vue format
      send(event) {
        this.reachService.send(event);
      },
      increment( ) {
          console.log("increment", this.context.count)
          this.context.count++
      },
      decrement() {
        console.log("decrement", this.context.count)
        this.context.count--
      },

      // Create a Vue methods for every commonInteract methods
      commonFunctions() {
        commonInteract = {
            transportCancellation: () => { console.log(`The job was refused.`); },
            customerCancellation: () => { console.log(`The customer cancelled the order.`); },
            reportPayment: (payment, purchaseTime) => { this.reportPayment(payment, purchaseTime); },
            reportAcceptDelivery: () => { this.reportAcceptDelivery() },
            reportRejectDelivery: () => { console.log(`The transporter have rejected the delivery, exiting...`) },
            reportOrderReceived: () => { this.reportOrderReceived()  },
          }
      },

      reportOrderReceived() {
        this.send('EACH')
        this.deliveryDone = true;
        this.deliveryMsg = `The order have been delivered, exiting...`;
        console.log(`The order have been delivered, exiting...`)
        this.updateBalance();
      },

      reportAcceptDelivery() {
        this.send('EACH')
        this.pickupDone = true;
        this.pickupMsg = `The transporter have accepted the delivery.`;
        console.log(`The transporter have accepted the delivery.`)
      },

      reportPayment(payment, purchaseTime) {
        let result = new Date(parseInt(purchaseTime))

        this.send('EACH')
        this.paymentDone = true;
        this.paymentMsg = 'The customer have made payment of ' + toSU(payment) + 
                            ' to the contract at ' + result;
        console.log('The customer have made payment of ' + toSU(payment) + ' to the contract');
      },

      async createContract() {

            // Change state to deploy
            this.send('DEPLOY')

            // create the contract here
            // https://docs.reach.sh/frontend/#ref-frontends-js-ctc
            console.log("Creating contract...")

            this.ctc = await this.acc.contract(backend);
            this.ctc.p.Designer(designerInteract);

            const info = await this.ctc.getInfo();
            this.ctcInfoStr = JSON.stringify(info);
            console.log("this.ctcInfoStr: ", this.ctcInfoStr);

            this.contractCreated = true;
            await this.updateBalance();

      },

    // 0 - designer, 1 - customer, 2 - transport
    //////////////////////////// Designer methods
    async designer() {
      this.commonFunctions();
      designerInteract = {
             ...commonInteract,
              sellPrice: toAU(1.2),
              transPrice: toAU(0.05),
              getProduct: async (sellPrice, transPrice) => {
                  this.sellPrice =  toSU(sellPrice);
                  this.transPrice = toSU(transPrice);
                  console.log("*** from backend getProduct", this.sellPrice , this.transPrice);
                  // Change state to consensus at the end 
                  this.send('PUBLISH');
              }
      }

      try {
          // Set role, create account, 
          this.role = 0;
          // Change from devnet to testnet
          //this.acc = await stdlib.newTestAccount(stdlib.parseCurrency(1000));

          // addr : 5ZDLNBE6FEDZRYB4N6CULTUJPOHY3FQ7FOBTEURF2D26DXHXNEIUZ6MKO4
          this.acc = await stdlib.newAccountFromMnemonic(secret);

          //console.log("this.acc: ", this.acc)

          this.addr = stdlib.formatAddress(this.acc.getAddress());

          this.balAtomic = await stdlib.balanceOf(this.acc);
          this.bal = String(stdlib.formatCurrency(this.balAtomic, 4));
            
      } catch (err) {
        console.log(err);
      }
    },
    
    //////////////////////////// Customer
    ///////////////////////////
    // Common helper functions
    ///////////////////////////

    async updateBalance() {
      try {
        this.balAtomic = await stdlib.balanceOf(this.acc);
        this.bal = String(stdlib.formatCurrency(this.balAtomic, 4));
      } catch (err) {
        console.log(err);
      }
    },

    waitUntil (condition) {
    return new Promise((resolve) => {
        let interval = setInterval(() => {
            if (!condition()) {
                return
            }
            clearInterval(interval)
            resolve()
        }, 100)
      })
    },

    ///////////////////////////
    // Common helper functions
    ///////////////////////////

  },
  computed: {
  },
  mounted() {
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#wizard {
  width: 1024px;
}
.content {
  width: 1024px;
}
.navigation-buttons {
  display: flex;
  justify-content: space-between;
}
</style>
