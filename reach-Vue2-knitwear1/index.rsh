'reach 0.1';

// Setup common functions
const commonInteract = {
  transportCancellation: Fun([], Null),
  customerCancellation: Fun([], Null),
  reportOrderReceived: Fun([], Null),
  reportPayment: Fun([UInt, UInt],Null),
  reportAcceptDelivery: Fun([], Null),
  reportRejectDelivery:Fun([], Null)
  // reportOrderAccepted: Fun([], Null),
  // reportOrderRejected: Fun([], Null),
};

// functions related to designer
const designerInteract = {
  ...commonInteract,
  sellPrice: UInt,
  transPrice: UInt,
  getProduct: Fun([UInt, UInt], Null),
  //to show different product price
  // getProduct: Fun([],Tuple(UInt,UInt,UInt,UInt)),
  // acceptOrder: Fun([UInt], UInt),
};

// functions related to customer
const customerInteract = {
  ...commonInteract,
  confirmPurchase: Fun([UInt], UInt),
  ackDelivery: Fun([], Bool),
  // selectProduct: Fun ([UInt],UInt),
  // showProduct: Fun([UInt,UInt,UInt,UInt],Null),
  // orderPrice: Fun([],UInt),
};

// functions related to transport
const transportInteract = {
  ...commonInteract,
  confirmDelivery: Fun([UInt], Bool),
};


export const main = Reach.App(() => {
  // Setup all participants
  const D = Participant('Designer', designerInteract);
  const C = Participant('Customer', customerInteract);
  const T = Participant('Transport', transportInteract);
  init();

  //1. designer set product price, transport price , then publish
  D.only(() => { 
    const sellPrice = declassify(interact.sellPrice ); 
    const transPrice = declassify(interact.transPrice ); 
  });
  D.publish(sellPrice, transPrice);

  // Call the frontend function ( interact.funcName ) getProduct(sellPrice, transPrice)
  D.interact.getProduct(sellPrice, transPrice);
  commit();

//2. customer attach contract, make payment
  C.only(() => {     
    const purchasetime = declassify( interact.confirmPurchase(sellPrice) ); 
  });
  // Send result of willBuy to smart contract for participants to use
  C.publish(purchasetime);

  // if answer, no , send notice and exit
  if (purchasetime == 0) {
    commit();
    each([D,C, T], () => interact.customerCancellation());
    exit();
  } else {
    // if answer yes, customer pay to contract and send reportPayment to every participants
    commit();
    C.pay(sellPrice);
    each([D, C, T], () => interact.reportPayment(sellPrice, purchasetime));
    commit();
  }

  //OR 
  //2. customer attach contract, send the product to frontend (productReady)
  // C.only(()=> {
  //   declassify(interact.showProduct(priceA,priceB,priceC,transPrice)) ; 
  // //3. customer select product and place order
  //   const {orderPrice} = declassify (interact.selectProduct());
  //   C.publish(orderPrice);
  //     commit();
  // });

//   //4. Designer receive order, choose accept order or not
// D.only(() => {     
//   const agreeordertime = declassify( interact.acceptOrder(orderPrice) ); 
// });
// //5. Send result of order success to smart contract for all participants
// D.publish(agreeordertime);

// // if answer is no , send notice and exit
// if (agreeordertime == 0) {
//   commit();
//   each([C, D, T], () => interact.reportOrderRejected());
//   exit();
// } else {
//   // if answer is yes, customer pay to contract and send orderAccepted to every participants
//   commit();
//   each([C, D, T], () => interact.reportOrderAccepted());
//   C.pay(orderPrice);
//   each([C, D, T], () => interact.reportPayment(orderPrice, agreeordertime));
//   commit();
// }


  //....Order success
  //6. Pass control to Transport, asking to accept delivery with transPrice
  T.only(() => { 
    const willDeliver = declassify( interact.confirmDelivery(transPrice) ); 
  });

  // Send result of willDeliver to smart contract for participants to use
  T.publish(willDeliver);

  // if answer no, transfer fund from smart contract back to Customer and exit
  // Cannot leave any extra funds in smart contract before exit
  if ( !willDeliver ) {
    transfer(sellPrice).to(C);
    commit();
    each([D,C,T], () => declassify( interact.reportRejectDelivery()) );
    exit();
  } else {
    // Send accept delivery report to all and Customer pays transPrice to contract
    commit();
    each([D,C,T], () => declassify( interact.reportAcceptDelivery()) );

    C.pay(transPrice);
    commit();
  }

  // Final step, ask Customer to acknowledge delivery order
  C.only(() => { 
    const delivered = declassify( interact.ackDelivery() ); 
  });

  C.publish(delivered)

  // Customer does not ack delivery, return funds to Customer and exit, this is a simplified version 
  // In actual situation, T will confirm delivery with proof instead of C or use an oracle
  if ( !delivered ) {
    transfer(transPrice).to(C);
    transfer(sellPrice).to(C);
    commit();
    exit();
  } else {
    // Customer ack the delivery, transfer payment to D & T, contract ends
    each([D,C,T], () => declassify( interact.reportOrderReceived() ));
    transfer(transPrice).to(T);
    transfer(sellPrice).to(D);
    commit();
  }

  exit();
  });




