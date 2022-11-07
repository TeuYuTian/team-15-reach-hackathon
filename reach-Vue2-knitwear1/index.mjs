import {loadStdlib} from '@reach-sh/stdlib';
import * as backend from './build/index.main.mjs';
import { ask } from '@reach-sh/stdlib';

const stdlib = loadStdlib(process.env);
console.log(`The consensus network is ${stdlib.connector}.`);

if (process.argv.length < 3 || ['d', 'c', 't'].includes(process.argv[2]) == false) {
  console.log('Usage: reach run index [d|c|t]');
  process.exit(0);
}
const role = process.argv[2];

const suStr = stdlib.standardUnit;
 
// The standard unit is ALGO, we deal with this unit
// The atomic unit is μALGO, blockchain delas with this unit
const toAU = (su) => stdlib.parseCurrency(su);
const toSU = (au) => stdlib.formatCurrency(au, 4);
const iBalance = toAU(1000);
const showBalance = async (acc) => console.log(`Your balance is ${toSU(await stdlib.balanceOf(acc))} ${suStr}.`);

// All common functions shared by all defined here
const commonInteract = {
    // //accept order -- YES
    // reportOrderAccepted: () => { console.log(`The designer accepted the order.`); },
    // //accept order -- NO
    // reportOrderRejected: () => { console.log(`The designer rejected the order, exiting...`); },
  transpotCancellation: () => { console.log(`The job was refused.`); },
  customerCancellation: () => { console.log(`The customer cancelled the order.`); },
  reportPayment: (payment) => { console.log(`The customer have made payment of ${toSU(payment)} ${suStr} to the contract`) },
  reportAcceptDelivery: () => { console.log(`The transporter have accepted the delivery.`) },
  reportRejectDelivery: () => { console.log(`The transporter have rejected the delivery, exiting...`) },
  reportOrderReceived: () => { console.log(`The order have been delivered, exiting...`) },
};

console.log(`Your role is ${role}`);

// Designer
if (role === 'd') {
    const designerInteract = {
    ...commonInteract,
    // All functions and variables are created here but called from backend 
    sellPrice: toAU(5),
    transPrice: toAU(2),

    getProduct: async (sellPrice, transPrice) => {
      console.log(`Your selling price is ${toSU(sellPrice)} ${suStr}.`);
      console.log(`Your transpot price is ${toSU(transPrice)} ${suStr}.`);
      console.log(`Contract info: ${JSON.stringify(await ctc.getInfo())}`);
      } 
    }

    // create new test account with 1000 ALGO
    const acc = await stdlib.newTestAccount(iBalance);
    await showBalance(acc);

    // First participant deploy contract
    const ctc = acc.contract(backend);

    // designer interaction
    await ctc.p.Designer(designerInteract);
    await showBalance(acc);
    
  } else if ( role === 'c') {
    const customerInteract = {
      ...commonInteract,

      //  C.only() => const willBuy = declassify( interact.confirmPurchase(sellPrice) )
      confirmPurchase: async (sellPrice) => await ask.ask( `Do you want to purchase this for ${toSU(sellPrice)} ${suStr}?`, ask.yesno ),
      ackDelivery: async () => await ask.ask( `Confirm order received ?`, ask.yesno ),
    }

    const acc = await stdlib.newTestAccount(iBalance);
    const info = await ask.ask('Paste contract info:', (d) => JSON.parse(d));

    // Other participants, attached the contract from designer
    const ctc = acc.contract(backend, info);
    await showBalance(acc);

    // customer interaction
    await ctc.p.Customer(customerInteract);
    await showBalance(acc);

  } else if ( role === 't' ) {
    const transpotInteract = {
      ...commonInteract,
      confirmDelivery: async (transPrice) => ask.ask( `Do you want to deliver this for ${toSU(transPrice)} ${suStr}?`, ask.yesno ),
    }

  const acc = await stdlib.newTestAccount(iBalance);
  const info = await ask.ask('Paste contract info:', (d) => JSON.parse(d));

  // Other participants, attached the contract from designer
  const ctc = acc.contract(backend, info);
  await showBalance(acc);

  // transport interaction
  await ctc.p.Transpot(transpotInteract);
  await showBalance(acc);

  }
  
  ask.done();

