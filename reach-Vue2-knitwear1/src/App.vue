<template>
  <div id="app">
    <!--Rounded Mplus 1c font-->
    <link
      href="https://fonts.googleapis.com/css?family=M PLUS Rounded 1c"
      rel="stylesheet"
    />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
    />

    <div id="container">
      <nav class="navbar navbar-expand-lg navbar- static-top">
        <img
          src="Logo.png"
          width="115px"
          height="30px"
          ALT="Uknity-logo"
          ALIGN="CENTER"
        />
        <ul>
          <li style="font-weight: Medium"><a href="#">Home</a></li>
          <li style="font-weight: Medium">
            <a href="#">Wallet</a>
            <!-- Drop menu -->
          </li>

          <li style="font-weight: Medium"><a href="#">Shop</a></li>
          <li style="font-weight: Medium"><a href="#">Cart</a></li>
          <li style="font-weight: Medium">
            <a href="#">Role</a>

            <ul>
              <!-- 2nd drop -->
              <li style="font-weight: Medium"><a href="#">Customer</a></li>
              <li style="font-weight: Medium"><a href="#">Designer</a></li>
              <li style="font-weight: Medium"><a href="#">Transporter</a></li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>

    <H1 style="color: #ff809e; font-family: Satisfy Regular; margin-top: 5%"
      >Uknity</H1
    >
    <H2 style="font-weight: bold; color: #4961cb"
      >Hello!<br />Which one are you?</H2
    >

    <!-- cards -->
    <main class="page-content">
      <div class="d_card">
        <div class="content">
          <h2 class="heading" style="color: #4961cb">Customer</h2>
          <p class="data-content">
            <button
              @click="customer()"
              class="custom-btn btn-1"
              style="color: #4961cb"
            >
              <span>Select</span>
            </button>
          </p>
        </div>
      </div>
      <div class="d_card">
        <div class="content">
          <h2 class="heading" style="color: #4961cb">Designer</h2>
          <p class="data-content">
            <button
              @click="designer()"
              class="custom-btn btn-1"
              style="color: #4961cb"
            >
              <span>Select</span>
            </button>
          </p>
        </div>
      </div>
      <div class="d_card">
        <div class="content">
          <h2 class="heading" style="color: #4961cb">Transporter</h2>
          <p class="data-content">
            <button
              @click="transporter()"
              class="custom-btn btn-1"
              style="color: #4961cb"
            >
              <span>Select</span>
            </button>
          </p>
        </div>
      </div>
    </main>

    <!-- Designer -->
    <div v-if="role == 0">
      <H2 style="color: #4961cb; margin-top: 5%">Designer</H2><BR />
      <img src="kit.png" alt="Designer" /><BR />

      <!-- Wallet -->
      <div class="container">
        <div
          class="container"
          style="
            background-color: white;
            border: 2px solid #4961cb;
            margin-top: 5%;
          "
        >
          <div class="row" style="background-color: #4961cb">
            <aside
              style="
                width: 60%;
                margin: auto;
                font-size: 16px;
                color: white;
                font-weight: bold;
                padding-top: 1%;
                padding-bottom: 1%;
              "
            >
              Your Wallet
            </aside>
          </div>
          <div class="row">
            <div class="col-sm-6" style="border-right: 1px solid #ffd3d3">
              <p><strong>Address:</strong></p>
              <br />
              <p style="text-align: left">{{ addr }}</p>
            </div>

            <hr />

            <div class="col-sm-3" style="border-right: 1px solid #ffd3d3">
              <p><strong>Balance:</strong></p>
              <p>{{ bal }}</p>
            </div>

            <div class="col-sm-3">
              <p><strong>balAtomic:</strong></p>
              <p>{{ balAtomic }}</p>
            </div>

            <div
              class="col-sm-12"
              style="padding-left: 52%; padding-bottom: 0.8%"
            >
              <button class="button blue" @click="updateBalance()">
                Update
              </button>
            </div>
          </div>
        </div>
      </div>

      <BR /><BR />
      <button class="button1" @click="createContract()">Deploy</button
      ><BR /> (Copy below to Customer and Transport)<BR />
      <h3>{{ ctcInfoStr }}</h3>

      <!--Your Design-->
      <div
        class="container"
        style="background-color: #4961cb; margin-top: 10%; padding-bottom: 5%"
      >
        <H1 style="color: white; padding-top: 4%; font-weight: bold"
          >Your Design</H1
        >
        <div v-if="contractCreated">
          <div class="container mt-5">
            <div class="row">
              <div class="box" style="margin-left: 5%">
                <div class="imageBox">
                  <img
                    src="https://i.postimg.cc/g0Z5xdVn/item-A.png"
                    alt="Item_A"
                  />
                </div>

                <div class="contentBox">
                  <H4
                    class="tittle"
                    style="text-decoration: underline; font-weight: bold"
                    >Item A</H4
                  >
                  <a style="margin-top: -5%"
                    >Price: {{ sellPrice }}<br />
                    Transport Fee:{{ transPrice }}
                  </a>
                  <div
                    class="row"
                    style="
                      border-style: solid;
                      border-width: 0.5px;
                      background-color: white;
                    "
                  ></div>
                </div>
              </div>
              <div class="box" style="margin-left: 5%">
                <div class="imageBox">
                  <img
                    src="https://i.postimg.cc/MT0FYDrw/item-B.png"
                    alt="Item_B"
                  />
                </div>
                <div class="contentBox">
                  <H4
                    class="tittle"
                    style="text-decoration: underline; font-weight: bold"
                    >Item B</H4
                  >
                  <a style="margin-top: -5%"
                    >Price:{{sellPrice}}<br />
                    Transport Fee:{{ transPrice }}
                  </a>
                </div>
              </div>
              <div class="box" style="margin-left: 5%">
                <div class="imageBox">
                  <img
                    src="https://i.postimg.cc/43VLJPGc/item-C.png"
                    alt="Item_C"
                  />
                </div>
                <div class="contentBox">
                  <H4
                    class="tittle"
                    style="text-decoration: underline; font-weight: bold"
                    >Item C</H4
                  >
                  <a style="margin-top: -5%"
                    >Price:{{sellPrice}}<br />
                    Transport Fee:{{ transPrice }}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <BR />

      <!-- Incoming Order -->
      <div class="container">
        <table style="background-color: white">
          <tr>
            <th colspan="4" th class="white">Incoming Order</th>
          </tr>
          <BR />
          <BR />
          <div v-if="paymentDone">
            <h3>Order #1</h3>
            <BR />
            <tr>
              <td>
                A customer has made a pending payment of {{ sellPrice }} for
                Item A
                <!-- Do you accept this order? -->
              </td>
              <!-- <td> -->
              <!-- ////////////////////////////////////////////////////////////////// -->
              <!-- <button @click="yesnoacceptOrder(true) " class="button1">Yes</button>
              <button @click="yesnoacceptOrder(false) " class="button2">No</button> -->
              <!-- </td> -->
            </tr>
          </div>

          <BR />
        </table>
      </div>
    </div>

    <!--customer page-->
    <div v-else-if="role == 1">
      <BR /><BR />
      <div class="container" style="background-color: #fff5e1">
        <H1 style="color: #4961cb; font-weight: bold">Customer</H1>
        <img src="C-icon.png" alt="Customer-icon" width="92px" height="93px" />
        <!--wallet box-->
        <div class="container" style="background-color: white; margin-top: 5%">
          <div class="row" style="background-color: #4961cb">
            <aside
              style="
                width: 60%;
                margin: auto;
                font-size: 25px;
                color: white;
                font-weight: bold;
                padding-top: 1%;
                padding-bottom: 1%;
              "
            >
              Your Wallet
            </aside>
          </div>
          <div class="row">
            <div class="col-sm-6" style="border-right: 1px solid #ffd3d3">
              <p><strong>Adress:</strong></p>
              <br />
              <p style="text-align: left">{{ addr }}</p>
            </div>
            <hr />
            <div
              class="col-sm-3 text-align-left"
              style="border-right: 1px solid #ffd3d3"
            >
              <p><strong>Balance:</strong></p>
              <p>{{ bal }}</p>
            </div>
            <div class="col-sm-3 text-align-left">
              <p><strong>balAtomic:</strong></p>
              <p>{{ balAtomic }}</p>
            </div>
            <div class="col-sm-12" style="padding-left: 52%">
              <button
                @click="updateBalance()"
                class="custom-btn btn-2"
                style="color: #4961cb"
              >
                <span>Update</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-5">
        <input v-model="ctcStr" placeholder="paste contract here" />
        <button class="button1" @click="attachContract1()">Attach</button>
      </div>

      <!--Shop-->
      <div
        class="container"
        style="background-color: #4961cb; margin-top: 10%; padding-bottom: 5%"
      >
        <H1 style="color: white; padding-top: 4%; font-weight: bold">Shop</H1>
        <div v-if="sellPrice > 0">
          <div class="container mt-5">
            <div class="row">
              <div class="box" style="margin-left: 5%">
                <div class="imageBox">
                  <img
                    src="https://i.postimg.cc/g0Z5xdVn/item-A.png"
                    alt="Item_A"
                  />
                </div>
                <div class="contentBox">
                  <H4
                    class="tittle"
                    style="text-decoration: underline; font-weight: bold"
                    >Item A</H4
                  >
                  <a style="margin-top: -5%"
                    >Price: {{ sellPrice }} <br />
                    TransportFee: {{ transPrice }} 0.1
                  </a>

                  <button
                    @click="yesnoPurchase(true)"
                    class="custom-btn btn-2"
                    style="color: #4961cb; margin-top: 25%"
                  >
                    <span>Order</span>
                  </button>
                </div>
              </div>
              <div class="box" style="margin-left: 5%">
                <div class="imageBox">
                  <img
                    src="https://i.postimg.cc/MT0FYDrw/item-B.png"
                    alt="Item_B"
                  />
                </div>
                <div class="contentBox">
                  <H4
                    class="tittle"
                    style="text-decoration: underline; font-weight: bold"
                    >Item B</H4
                  >
                  <a style="margin-top: -5%">Price: {{ sellPrice }} <br />
                    TransportFee: {{ transPrice }} 0.1</a>
                  <button
                    class="custom-btn btn-2"
                    style="color: #4961cb; margin-top: 25%"
                  >
                    <span>Order</span>
                  </button>
                </div>
              </div>
              <div class="box" style="margin-left: 5%">
                <div class="imageBox">
                  <img
                    src="https://i.postimg.cc/43VLJPGc/item-C.png"
                    alt="Item_C"
                  />
                </div>
                <div class="contentBox">
                  <H4
                    class="tittle"
                    style="text-decoration: underline; font-weight: bold"
                    >Item C</H4
                  >
                                    <a style="margin-top: -5%">Price: {{ sellPrice }} <br />
                    TransportFee: {{ transPrice }} 0.1</a>
                  <button
                    class="custom-btn btn-2"
                    style="color: #4961cb; margin-top: 25%"
                  >
                    <span>Order</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!--Your Contract-->
      <div
        class="container"
        style="background-color: #fff5e1; margin-bottom: 8%"
      >
        <H1 style="color: #4961cb; padding-top: 5%; font-weight: bold"
          >Your Contract</H1
        >
        <div v-if="paymentDone">
          <h5 style="margin-bottom: 2%">
            You have requested a purchase for Item A {{ sellPrice }}
          </h5>
          <h5>Your order number:</h5>
          <h3 style="color: #ff809e; margin-bottom: 5%; font-weight: bold">
            Order #1
          </h3>
          <!-- <button @click="yesnoPurchase(true) " class="button1">YES</button> -->
          <!-- <button @click="yesnoPurchase(false)" class="button2">Cancel</button> -->

          <BR /><BR />
          <div v-if="pickupDone">
            Order received?
            <button @click="yesnoDelivery(true)" class="button1">YES</button>
            <button @click="yesnoDelivery(false)" class="button2">NO</button>
          </div>
        </div>
        <h5 style="margin-bottom: 2%">Track the progress of your item(d).</h5>
        <i class="arrow down"></i><br />
        <i class="arrow down"></i><br />
        <i class="arrow down"></i>
      </div>
    </div>

    <!-- transporter -->
    <div v-else-if="role == 2">
      <H1 style="color: #4961cb; margin-top: 5%; font-weight: bold"
        >Transporter</H1
      >
      <BR />
      <img src="delivery.png" alt="Transport" style="margin-bottom: 5%" />
      <BR />

      <!-- Wallet -->
      <div class="container">
        <div
          class="container"
          style="background-color: white;border: 2px solid #4961CB margin-top: 5%"
        >
          <div class="row" style="background-color: #4961cb">
            <aside
              style="
                width: 60%;
                margin: auto;
                font-size: 16px;
                color: white;
                font-weight: bold;
                padding-top: 1%;
                padding-bottom: 1%;
              "
            >
              Your Wallet
            </aside>
          </div>
          <div class="row">
            <div class="col-sm-6" style="border-right: 1px solid #ffd3d3">
              <p><strong>Address:</strong></p>
              <br />
              <p style="text-align: left">{{ addr }}</p>
            </div>
            <hr />
            <div class="col-sm-3" style="border-right: 1px solid #ffd3d3">
              <p><strong>Balance:</strong></p>
              <p>{{ bal }}</p>
            </div>
            <div class="col-sm-3">
              <p><strong>balAtomic:</strong></p>
              <p>{{ balAtomic }}</p>
            </div>
            <div
              class="col-sm-12"
              style="padding-left: 52%; padding-bottom: 0.8%"
            >
              <button class="button blue" @click="updateBalance()">
                Update
              </button>
            </div>
          </div>
        </div>
      </div>
      <BR /> <BR />
      <input v-model="ctcStr" placeholder="paste contract here" />
      <button class="button1" @click="attachContract2()">Attach</button>

      <BR /> <BR />
      <!-- Incoming order -->
      <div class="container">
        <table style="background-color: white">
          <tr>
            <th colspan="4" th class="white">Incoming Order</th>
          </tr>
          <BR />
          <tr>
            <td class="center"></td>
          </tr>
          <BR />
          <div v-if="paymentDone">
            <h3>Order #1</h3>
            <BR />
            <tr>
              <td>
                Uknity is requesting a delivery for Order #1 for a total of
                {{ transPrice }}. <br />
                Do you accept this order?
              </td>
              <td>
                <button @click="yesnoTransport(true)" class="button1">
                  Yes
                </button>
                <button @click="yesnoTransport(false)" class="button2">
                  No
                </button>
              </td>
            </tr>
          </div>
          <hr />

          <BR />
        </table>
      </div>

      <BR />

      <BR />
    </div>
    <BR />

    <footer>
      <!-- --Tracking-- -->
      <BR />
      <h1 class="white">Tracking</h1>
      <div class="container">
        <table style="background-color: white">
          <tr>
            <th colspan="4" th class="white">Steps</th>
          </tr>

          <BR />
          <!-- <div v-show="orderDone">
          <p>{{ orderMsg }}</p>
          </div>
          <div v-show="ordersuccess">
          <p>{{ orderMsg }}</p>
          </div> -->
          <div v-show="paymentDone">
            <!-- <p>{{ acceptorderMsg }}</p> -->
            <p>{{ paymentMsg }}</p>
          </div>

          <div v-show="pickupDone">
            <hr
              style="
                height: 0.5px;
                border-width: 0;
                color: #4961cb;
                background-color: #4961cb;
              "
            />
            <p>{{ pickupMsg }}</p>
            <hr
              style="
                height: 0.5px;
                border-width: 0;
                color: #4961cb;
                background-color: #4961cb;
              "
            />
            <p>{{ deliveringMsg }}</p>
          </div>

          <div v-show="deliveryDone">
            <hr
              style="
                height: 0.5px;
                border-width: 0;
                color: #4961cb;
                background-color: #4961cb;
              "
            />
            <p>{{ deliveryMsg }}</p>
          </div>
          <BR />
        </table>
      </div>
    </footer>
  </div>
</template>

<script>
// xstate stuff
//import { Machine, assign } from "xstate"

import { Machine, assign, interpret } from "xstate";
//import { interpret } from "xstate-vue2"

const increment = (context) => context.count + 1;
const decrement = (context) => context.count - 1;

const reachMachine = Machine({
  predictableActionArguments: true,
  id: "reach",
  initial: "appInit",
  context: {
    count: 0,
  },
  states: {
    appInit: {
      on: {
        DEPLOY: {
          target: "step",
        },
      },
    },
    step: {
      on: {
        ONLY: {
          action: assign({ count: increment }),
          target: "localStep",
        },
        EACH: {
          action: assign({ count: decrement }),
          target: "localStep",
        },
        PUBLISH: {
          target: "consensus",
        },
        PAY: {
          target: "consensus",
        },
      },
    },
    localStep: {
      on: {
        ONLY: {
          action: assign({ count: increment }),
          target: "step",
        },
        EACH: {
          action: assign({ count: decrement }),
          target: "step",
        },
      },
    },
    consensus: {
      on: {
        COMMIT: {
          target: "step",
        },
        ONLY: {
          target: "localStep",
        },
        EACH: {
          target: "localStep",
        },
      },
    },
  },
});

import * as backend from "../build/index.main.mjs";
import { loadStdlib } from "@reach-sh/stdlib";
//const stdlib = loadStdlib(process.env);

// Run in cmdline with
// REACH_CONNECTOR_MODE=ALGO-Live
// ../reach devnet
const stdlib = loadStdlib("ALGO");
stdlib.setProviderByName("TestNet");

console.log(`The consensus network is ${stdlib.connector}.`);

const suStr = stdlib.standardUnit;
console.log("Unit is ", suStr);
const toAU = (su) => stdlib.parseCurrency(su);
const toSU = (au) => stdlib.formatCurrency(au, 4);

// Defined all interact as global for backend calls, later convert them to Vue methods
let commonInteract = {};
let customerInteract = {};
let designerInteract = {};
let transportInteract = {};

// Setup secret seed here, loaded in .env.local
const secret = process.env.VUE_APP_SECRET1;
const secret2 = process.env.VUE_APP_SECRET2;
const secret3 = process.env.VUE_APP_SECRET3;

export default {
  name: "App",
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
      deliveringMsg: undefined,
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
    increment() {
      console.log("increment", this.context.count);
      this.context.count++;
    },
    decrement() {
      console.log("decrement", this.context.count);
      this.context.count--;
    },

    // Create a Vue methods for every commonInteract methods
    commonFunctions() {
      commonInteract = {
        transportCancellation: () => {
          console.log(`The job was refused.`);
        },
        customerCancellation: () => {
          console.log(`The customer cancelled the order.`);
        },
        reportPayment: (payment, purchaseTime) => {
          this.reportPayment(payment, purchaseTime);
        },
        reportAcceptDelivery: () => {
          this.reportAcceptDelivery();
        },
        reportRejectDelivery: () => {
          console.log(`The transporter have rejected the delivery, exiting...`);
        },
        reportOrderReceived: () => {
          this.reportOrderReceived();
        },
      };
    },

    reportOrderReceived() {
      this.send("EACH");
      this.deliveryDone = true;
      this.deliveryMsg = `Customer had received product in well condition.`;
      console.log(`Customer had received product`);
      this.updateBalance();
    },

    reportAcceptDelivery() {
      this.send("EACH");
      this.pickupDone = true;
      this.pickupMsg = `The transporter have accepted the delivery.`;
      this.deliveringMsg = `Product is out of deliver.`;
      console.log(`The transporter have accepted the delivery.`);
    },

    reportPayment(payment, purchaseTime) {
      let result = new Date(parseInt(purchaseTime));

      this.send("EACH");
      this.paymentDone = true;
      this.paymentMsg =
        "The customer have made payment of " +
        toSU(payment) +
        " to the contract at " +
        result;
      console.log(
        "The customer have made payment of " +
          toSU(payment) +
          " to the contract"
      );
    },

    async createContract() {
      // Change state to deploy
      this.send("DEPLOY");

      // create the contract here
      // https://docs.reach.sh/frontend/#ref-frontends-js-ctc
      console.log("Creating contract...");

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
        sellPrice: toAU(1.3),
        transPrice: toAU(0.1),
        getProduct: async (sellPrice, transPrice) => {
          this.sellPrice = toSU(sellPrice);
          this.transPrice = toSU(transPrice);
          console.log(
            "*** from backend getProduct",
            this.sellPrice,
            this.transPrice
          );
          // Change state to consensus at the end
          this.send("PUBLISH");
        },
      };

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

    async attachContract1() {
      // change state to deployed/attached
      this.send("DEPLOY");

      this.ctc = await this.acc.contract(backend, JSON.parse(this.ctcStr));
      this.updateBalance();
      await this.ctc.p.Customer(customerInteract);
      await this.updateBalance();

      console.log("Contract attached: ", this.ctcStr);
    },

    async yesnoPurchase(res) {
      console.log("yesnoPurchase: ", res);
      this.purchaseResult = res;
    },

    async getPurchaseResult() {
      // return ONLY if not undefined
      if (this.purchaseResult !== undefined) {
        this.send("PUBLISH");
        return this.purchaseResult;
      }
    },

    async yesnoDelivery(res) {
      console.log("yesnoDelivery: ", res);
      this.deliveryResult = res;
    },

    async getDeliveryResult() {
      // return ONLY if not undefined
      if (this.deliveryResult !== undefined) {
        this.send("PUBLISH");
        return this.deliveryResult;
      }
    },

    async customer() {
      this.commonFunctions();
      customerInteract = {
        ...commonInteract,
        confirmPurchase: async (sellPrice) => {
          this.sellPrice = toSU(sellPrice);
          console.log("*** from backend confirmPurchase: ", this.sellPrice);
          // change to localStep
          this.send("ONLY");
          console.log("purchaseResult: ", this.purchaseResult);
          await this.waitUntil(() => this.purchaseResult !== undefined);
          this.purchaseTime = Date.now();
          console.log("purchaseTime: ", this.purchaseTime);
          return await this.purchaseTime;
        },
        ackDelivery: async () => {
          console.log("*** from backend ackDelivery");
          this.send("ONLY");
          // Add some delays after button is clicked
          //await new Promise(r =>setTimeout(r,5000));
          await this.waitUntil(() => this.deliveryResult !== undefined);
          return await this.getDeliveryResult();
        },
      };
      console.log("Customer: ", customerInteract);

      try {
        // Set role, create account
        this.role = 1;

        this.acc = await stdlib.newAccountFromMnemonic(secret2);

        this.addr = stdlib.formatAddress(this.acc.getAddress());
        this.balAtomic = await stdlib.balanceOf(this.acc);
        this.bal = String(stdlib.formatCurrency(this.balAtomic, 4));
      } catch (err) {
        console.log(err);
      }
    },

    async attachContract2() {
      // change state to deployed/attached
      this.send("DEPLOY");

      // receive the json string {"type":"BigNumber","hex":"0x3b"}
      // attach to the designer contract above
      // https://docs.reach.sh/frontend/#ref-frontends-js-ctc

      this.ctc = await this.acc.contract(backend, JSON.parse(this.ctcStr));
      console.log("Contract attached: ", this.ctcStr);
      console.log("ctc: ", this.ctc);
      this.updateBalance();
      await this.ctc.p.Transport(transportInteract);
      await this.updateBalance();
    },

    async yesnoTransport(res) {
      console.log("yesnoTransport: ", res);
      this.transportResult = res;
    },

    async getTransportResult() {
      // return ONLY if not undefined
      if (this.transportResult !== undefined) {
        this.send("PUBLISH");
        return this.transportResult;
      }
    },

    // Transporter
    async transporter() {
      this.commonFunctions();
      transportInteract = {
        ...commonInteract,
        confirmDelivery: async (transPrice) => {
          this.transPrice = toSU(transPrice);
          console.log("*** from backend confirmDeliver", this.transPrice);
          // change to localStep
          this.send("ONLY");
          console.log("transportResult: ", this.transportResult);
          await this.waitUntil(() => this.transportResult !== undefined);
          return await this.getTransportResult();
        },
      };
      console.log("Transport: ", transportInteract);

      try {
        this.role = 2;

        this.acc = await stdlib.newAccountFromMnemonic(secret3);
        this.addr = stdlib.formatAddress(this.acc.getAddress());
      } catch (err) {
        console.log(err);
      }
    },

    ///////////////////////////
    // Common helper functions
    ///////////////////////////

    async updateBalance() {
      try {
        this.balAtomic = await stdlib.balanceOf(this.acc);
        this.bal = String(stdlib.formatCurrency(this.balAtomic, 4));
        this.addr = stdlib.formatAddress(this.acc.getAddress());
        this.balAtomic = await stdlib.balanceOf(this.acc);
        this.bal = String(stdlib.formatCurrency(this.balAtomic, 4));
      } catch (err) {
        console.log(err);
      }
    },

    waitUntil(condition) {
      return new Promise((resolve) => {
        let interval = setInterval(() => {
          if (!condition()) {
            return;
          }
          clearInterval(interval);
          resolve();
        }, 100);
      });
    },

    ///////////////////////////
    // Common helper functions
    ///////////////////////////
  },
  computed: {},
  mounted() {},
};
</script>

<style>
#app {
  font-family: "M PLUS Rounded 1c";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background: #fff5e1;
  text-align: center;
  color: black;
  word-wrap: break-word !important;
}

#wizard {
  width: 1024px;
}

text-align:left {
  text-align: left;
}

.content {
  width: 1024px;
}

.navigation-buttons {
  display: flex;
  justify-content: space-between;
}

#container {
  margin: 0 auto;
}

nav {
  background-color: #4961cb;
  min-height: 50px;
}

nav ul {
  padding: 0;
  margin: 0;
  list-style: none;
  position: relative;
}

nav ul li {
  display: inline-block;
  background-color: #4961cb;
}

nav a {
  display: block;
  padding: 0 10px;
  color: #fff;
  font-size: 20px;
  line-height: 60px;
  text-decoration: none;
}

nav a:hover {
  background-color: #8fa6f9;
}

nav ul ul {
  display: none;
  position: absolute;
  top: 60px;
}

nav ul li:hover > ul {
  display: inherit;
}

nav ul ul li {
  width: 170px;
  float: none;
  display: list-item;
  position: relative;
}

:root {
  --d: 700ms;
  --e: cubic-bezier(0.19, 1, 0.22, 1);
}

* {
  box-sizing: border-box;
}

html,
body {
  height: 100%;
}

body {
  display: grid;
  place-items: center;
}

.dd_heading {
  text-align: center;
  font-family: roboto thin;
}

.page-content {
  display: grid;
  grid-gap: 1rem;
  padding: 3rem;
  max-width: 1024px;
  margin: 0 auto;
  font-family: var(--font-sans);
}
@media (min-width: 600px) {
  .page-content {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (min-width: 800px) {
  .page-content {
    grid-template-columns: repeat(3, 1fr);
  }
}

.d_card {
  position: relative;
  display: -webkit-box;
  display: flex;
  -webkit-box-align: end;
  align-items: flex-end;
  overflow: hidden;
  padding: 1rem;
  width: 100%;
  text-align: center;
  color: whitesmoke;
  background-color: whitesmoke;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1), 0 2px 2px rgba(0, 0, 0, 0.1),
    0 4px 4px rgba(0, 0, 0, 0.1), 0 8px 8px rgba(0, 0, 0, 0.1),
    0 16px 16px rgba(0, 0, 0, 0.1);
  border-radius: 30px;
}
@media (min-width: 185px) {
  .d_card {
    height: 250px;
  }
}
.d_card:before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 110%;
  background-size: cover;
  background-position: 0 0;
  -webkit-transition: -webkit-transform calc(var(--d) * 1.5) var(--e);
  transition: -webkit-transform calc(var(--d) * 1.5) var(--e);
  transition: transform calc(var(--d) * 1.5) var(--e);
  transition: transform calc(var(--d) * 1.5) var(--e),
    -webkit-transform calc(var(--d) * 1.5) var(--e);
  pointer-events: none;
}
.d_card:after {
  content: "";
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 200%;
  pointer-events: none;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
  -webkit-transition: -webkit-transform calc(var(--d) * 2) var(--e);
  transition: -webkit-transform calc(var(--d) * 2) var(--e);
  transition: transform calc(var(--d) * 2) var(--e);
  transition: transform calc(var(--d) * 2) var(--e),
    -webkit-transform calc(var(--d) * 2) var(--e);
}
.d_card:nth-child(1):before {
  background-image: url(https://i.postimg.cc/SNgQJQFs/C.png);
}
.d_card:nth-child(2):before {
  background-image: url(https://i.postimg.cc/hGTqbcwV/D.png);
}
.d_card:nth-child(3):before {
  background-image: url(https://i.postimg.cc/bJgW3JRS/T.png);
}

.content {
  position: relative;
  display: -webkit-box;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
  width: 100%;
  padding: 1rem;
  -webkit-transition: -webkit-transform var(--d) var(--e);
  transition: -webkit-transform var(--d) var(--e);
  transition: transform var(--d) var(--e);
  transition: transform var(--d) var(--e), -webkit-transform var(--d) var(--e);
  z-index: 1;
}
.content > * + * {
  margin-top: 1rem;
}

.heading {
  font-size: 1.3rem;
  font-weight: bold;
  line-height: 1.2;
}

.data-content {
  font-family: var(--font-serif);
  font-size: 1.125rem;
  font-style: italic;
  line-height: 1.35;
}

@media (hover: hover) and (min-width: 600px) {
  .d_card:after {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }

  .content {
    -webkit-transform: translateY(calc(100% - 4.5rem));
    transform: translateY(calc(100% - 4.5rem));
  }
  .content > *:not(.heading) {
    opacity: 0;
    -webkit-transform: translateY(1rem);
    transform: translateY(1rem);
    -webkit-transition: opacity var(--d) var(--e),
      -webkit-transform var(--d) var(--e);
    transition: opacity var(--d) var(--e), -webkit-transform var(--d) var(--e);
    transition: transform var(--d) var(--e), opacity var(--d) var(--e);
    transition: transform var(--d) var(--e), opacity var(--d) var(--e),
      -webkit-transform var(--d) var(--e);
  }

  .d_card:hover,
  .d_card:focus-within {
    -webkit-box-align: center;
    align-items: center;
  }
  .d_card:hover:before,
  .d_card:focus-within:before {
    -webkit-transform: translateY(-4%);
    transform: translateY(-4%);
  }
  .d_card:hover:after,
  .d_card:focus-within:after {
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
  }
  .d_card:hover .content,
  .d_card:focus-within .content {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
  .d_card:hover .content > *:not(.heading),
  .d_card:focus-within .content > *:not(.heading) {
    opacity: 1;
    -webkit-transform: translateY(0);
    transform: translateY(0);
    -webkit-transition-delay: calc(var(--d) / 8);
    transition-delay: calc(var(--d) / 8);
  }

  .d_card:focus-within:before,
  .d_card:focus-within:after,
  .d_card:focus-within .content,
  .d_card:focus-within .content > *:not(.heading) {
    -webkit-transition-duration: 0s;
    transition-duration: 0s;
  }
}

.btn-1 {
  background: white;
  width: 130px;
  height: 40px;
  line-height: 42px;
  padding: 0;
  border: none;
  border-radius: 30px;
}
.btn-1 span {
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
}

.btn-1:before {
  height: 0%;
  width: 2px;
}
.btn-1:after {
  width: 0%;
  height: 2px;
}
.btn-1:hover {
  background: #4961cb;
  box-shadow: none;
}
.btn-1:hover:before {
  height: 100%;
}
.btn-1:hover:after {
  width: 100%;
}
.btn-1 span:hover {
  color: white;
}

.btn-1 span:before {
  width: 2px;
  height: 0%;
}
.btn-1 span:after {
  width: 0%;
  height: 2px;
}
.btn-1 span:hover:before {
  height: 100%;
}
.btn-1 span:hover:after {
  width: 100%;
}

.btn-2 {
  background: white;
  width: 130px;
  height: 40px;
  line-height: 42px;
  padding: 0;
  border: bold;
  border-color: #4961cb;
  border-radius: 30px;
}
.btn-2 span {
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
}

.btn-2:before {
  height: 0%;
  width: 2px;
}
.btn-2:after {
  width: 0%;
  height: 2px;
}
.btn-2:hover {
  background: #4961cb;
  box-shadow: none;
}
.btn-2:hover:before {
  height: 100%;
}
.btn-2:hover:after {
  width: 100%;
}
.btn-2 span:hover {
  color: white;
}

.btn-2 span:before {
  width: 2px;
  height: 0%;
}
.btn-2 span:after {
  width: 0%;
  height: 2px;
}
.btn-2 span:hover:before {
  height: 100%;
}
.btn-2 span:hover:after {
  width: 100%;
}

.box {
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
}

.imageBox {
  width: 100%;
  height: 500px;
  border-radius: 50px;
  overflow: hidden;
}

.contentBox {
  position: absolute;
  display: flex;
  background: none;
  padding: 20px;
  box-sizing: border-box;
  flex-direction: column;
  align-items: center;
  bottom: 0px;
  cursor: pointer;
  text-align: center;
  height: 230px;
  overflow: hidden;
}

.arrow {
  border: solid #4961cb;
  border-width: 0 6px 6px 0;
  display: inline-block;
  padding: 3px;
  height: 5vw;
  width: 5vw;
}

.down {
  transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
}

.rice {
  color: #fff5e1;
}

.pink {
  color: #ff809e;
}

.white {
  color: #ffffff;
}

table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

th {
  background-color: #4961cb;
  border: 1px #4961cb;
  text-align: middle;
  padding: 10px;
}

td {
  text-align: left;
  padding: 5px 0 0 2%;
}

tr {
  background-color: white;
}

.center {
  text-align: center;
}

.button {
  border-color: #4961cb;
  padding: 2px 30px;
  text-align: center;
  cursor: pointer;
  border-radius: 20px;
}

.blue {
  border-color: #4961cb;
  color: black;
}

.blue:hover {
  background: #4961cb;
  color: white;
}

.btn-text-left {
  text-align: left;
}

.button1 {
  background-color: #ff809e;
  color: white;
  border: #ff809e;
  padding: 2px 30px;
  text-align: center;
  cursor: pointer;
  border-radius: 20px;
}

.button2 {
  background-color: white;
  color: #ff809e;
  border-color: #ff809e;
  padding: 2px 30px;
  text-align: center;
  cursor: pointer;
  border-radius: 20px;
}

.b3 {
  border-color: white;
  color: black;
}

.b3:hover {
  background: white;
  color: black;
}

.btn-text-left {
  text-align: left;
}
.arrow2 {
  border: solid #4961cb;

  border-width: 0 10px 10px 0;

  display: inline-block;

  padding: 3px;

  height: 2vw;

  width: 2vw;
}

.left {
  transform: rotate(135deg);

  -webkit-transform: rotate(135deg);
}

.Product-box {
  height: 580px;

  width: 850px;

  margin: 50px auto;

  border-radius: 30px 30px 30px 30px;

  background-color: #fff5e1;

  /* VIA CSS MATIC https://goo.gl/cIbnS */
}
.product-img {
  float: left;

  margin-left: 5%;

  margin-top: 5%;

  height: 265px;

  width: 265px;
}

.product-img img {
  border-radius: 30px 30px 30px 30px;
}

.product-info {
  float: left;

  height: 265px;

  width: 400px;

  margin: 5% 0 0 5%;

  border-radius: 0 7px 10px 7px;

  background-color: none;

  text-align: left;
}

.product-text {
  height: 300px;

  width: 500px;
}

.product-text p {
  height: 200px;

  color: black;

  font-size: 15px;

  overflow: hidden;
}

footer {
  background-color: #4961cb;
  padding: 3px 0 5% 0;
}

/* div{
  background-color: white;
} */

#container {
  margin: 0 auto;
}
</style>
