// Automatically generated with Reach 0.1.12 (796d7fb3)
/* eslint-disable */
export const _version = '0.1.12';
export const _versionHash = '0.1.12 (796d7fb3)';
export const _backendVersion = 25;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1, ctc1],
      3: [ctc0, ctc1, ctc1, ctc0],
      4: [ctc0, ctc1, ctc1, ctc0],
      5: [ctc0, ctc1, ctc1, ctc0, ctc0],
      6: [ctc0, ctc1, ctc1, ctc0, ctc0]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
    };
  };
export async function Customer(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Customer expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Customer expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Null;
  const ctc2 = stdlib.T_Bool;
  const ctc3 = stdlib.T_Address;
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 2,
    funcNum: 0,
    out_tys: [ctc0, ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v167, v168], secs: v170, time: v169, didSend: v29, from: v166 } = txn1;
  ;
  const v174 = stdlib.protect(ctc0, await interact.confirmPurchase(v167), {
    at: './index.rsh:58:62:application',
    fs: ['at ./index.rsh:57:9:application call to [unknown function] (defined at: ./index.rsh:57:13:function exp)'],
    msg: 'confirmPurchase',
    who: 'Customer'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v166, v167, v168, v174],
    evt_cnt: 1,
    funcNum: 1,
    lct: v169,
    onlyIf: true,
    out_tys: [ctc0],
    pay: [stdlib.checkedBigNumberify('./index.rsh:62:5:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v176], secs: v178, time: v177, didSend: v42, from: v175 } = txn2;
      
      ;
      const v179 = stdlib.eq(v176, stdlib.checkedBigNumberify('./index.rsh:65:23:decimal', stdlib.UInt_max, '0'));
      if (v179) {
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        }
      else {
        sim_r.isHalt = false;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc0, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v176], secs: v178, time: v177, didSend: v42, from: v175 } = txn2;
  ;
  const v179 = stdlib.eq(v176, stdlib.checkedBigNumberify('./index.rsh:65:23:decimal', stdlib.UInt_max, '0'));
  if (v179) {
    stdlib.protect(ctc1, await interact.customerCancellation(), {
      at: './index.rsh:67:52:application',
      fs: ['at ./index.rsh:67:9:application call to [unknown function] (defined at: ./index.rsh:67:23:function exp)'],
      msg: 'customerCancellation',
      who: 'Customer'
      });
    
    return;
    }
  else {
    const txn3 = await (ctc.sendrecv({
      args: [v166, v167, v168, v175],
      evt_cnt: 0,
      funcNum: 2,
      lct: v177,
      onlyIf: true,
      out_tys: [],
      pay: [v167, []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v187, time: v186, didSend: v61, from: v185 } = txn3;
        
        sim_r.txns.push({
          amt: v167,
          kind: 'to',
          tok: undefined /* Nothing */
          });
        
        sim_r.isHalt = false;
        
        return sim_r;
        }),
      soloSend: true,
      timeoutAt: undefined /* mto */,
      tys: [ctc3, ctc0, ctc0, ctc3],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v187, time: v186, didSend: v61, from: v185 } = txn3;
    ;
    const v190 = stdlib.addressEq(v175, v185);
    stdlib.assert(v190, {
      at: './index.rsh:72:7:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Customer'
      });
    stdlib.protect(ctc1, await interact.reportPayment(v167, v176), {
      at: './index.rsh:73:49:application',
      fs: ['at ./index.rsh:73:9:application call to [unknown function] (defined at: ./index.rsh:73:24:function exp)'],
      msg: 'reportPayment',
      who: 'Customer'
      });
    
    const txn4 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 3,
      out_tys: [ctc2],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v198], secs: v200, time: v199, didSend: v79, from: v197 } = txn4;
    ;
    if (v198) {
      stdlib.protect(ctc1, await interact.reportAcceptDelivery(), {
        at: './index.rsh:95:66:application',
        fs: ['at ./index.rsh:95:9:application call to [unknown function] (defined at: ./index.rsh:95:22:function exp)'],
        msg: 'reportAcceptDelivery',
        who: 'Customer'
        });
      
      const txn5 = await (ctc.sendrecv({
        args: [v166, v167, v168, v175, v197],
        evt_cnt: 0,
        funcNum: 4,
        lct: v199,
        onlyIf: true,
        out_tys: [],
        pay: [v168, []],
        sim_p: (async (txn5) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [], secs: v216, time: v215, didSend: v112, from: v214 } = txn5;
          
          sim_r.txns.push({
            amt: v168,
            kind: 'to',
            tok: undefined /* Nothing */
            });
          sim_r.isHalt = false;
          
          return sim_r;
          }),
        soloSend: true,
        timeoutAt: undefined /* mto */,
        tys: [ctc3, ctc0, ctc0, ctc3, ctc3],
        waitIfNotPresent: false
        }));
      const {data: [], secs: v216, time: v215, didSend: v112, from: v214 } = txn5;
      ;
      const v219 = stdlib.addressEq(v175, v214);
      stdlib.assert(v219, {
        at: './index.rsh:97:7:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Customer'
        });
      const v222 = stdlib.protect(ctc2, await interact.ackDelivery(), {
        at: './index.rsh:103:55:application',
        fs: ['at ./index.rsh:102:9:application call to [unknown function] (defined at: ./index.rsh:102:13:function exp)'],
        msg: 'ackDelivery',
        who: 'Customer'
        });
      
      const txn6 = await (ctc.sendrecv({
        args: [v166, v167, v168, v175, v197, v222],
        evt_cnt: 1,
        funcNum: 5,
        lct: v215,
        onlyIf: true,
        out_tys: [ctc2],
        pay: [stdlib.checkedBigNumberify('./index.rsh:106:5:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn6) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [v224], secs: v226, time: v225, didSend: v122, from: v223 } = txn6;
          
          ;
          if (v224) {
            
            sim_r.txns.push({
              kind: 'from',
              to: v197,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'from',
              to: v166,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }
          else {
            sim_r.txns.push({
              kind: 'from',
              to: v175,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'from',
              to: v175,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }
          return sim_r;
          }),
        soloSend: true,
        timeoutAt: undefined /* mto */,
        tys: [ctc3, ctc0, ctc0, ctc3, ctc3, ctc2],
        waitIfNotPresent: false
        }));
      const {data: [v224], secs: v226, time: v225, didSend: v122, from: v223 } = txn6;
      ;
      const v227 = stdlib.addressEq(v175, v223);
      stdlib.assert(v227, {
        at: './index.rsh:106:5:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Customer'
        });
      if (v224) {
        stdlib.protect(ctc1, await interact.reportOrderReceived(), {
          at: './index.rsh:117:65:application',
          fs: ['at ./index.rsh:117:9:application call to [unknown function] (defined at: ./index.rsh:117:22:function exp)'],
          msg: 'reportOrderReceived',
          who: 'Customer'
          });
        
        ;
        ;
        return;
        }
      else {
        ;
        ;
        return;
        }
      
      
      
      }
    else {
      ;
      stdlib.protect(ctc1, await interact.reportRejectDelivery(), {
        at: './index.rsh:90:66:application',
        fs: ['at ./index.rsh:90:9:application call to [unknown function] (defined at: ./index.rsh:90:22:function exp)'],
        msg: 'reportRejectDelivery',
        who: 'Customer'
        });
      
      return;
      }
    
    
    
    }
  
  
  
  };
export async function Designer(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Designer expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Designer expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Null;
  const ctc2 = stdlib.T_Bool;
  
  
  const v162 = stdlib.protect(ctc0, interact.sellPrice, 'for Designer\'s interact field sellPrice');
  const v163 = stdlib.protect(ctc0, interact.transPrice, 'for Designer\'s interact field transPrice');
  
  const txn1 = await (ctc.sendrecv({
    args: [v162, v163],
    evt_cnt: 2,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:50:5:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc0, ctc0],
    pay: [stdlib.checkedBigNumberify('./index.rsh:50:5:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v167, v168], secs: v170, time: v169, didSend: v29, from: v166 } = txn1;
      
      ;
      
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v167, v168], secs: v170, time: v169, didSend: v29, from: v166 } = txn1;
  ;
  stdlib.protect(ctc1, await interact.getProduct(v167, v168), {
    at: './index.rsh:53:26:application',
    fs: ['at ./index.rsh:53:26:application call to [unknown function] (defined at: ./index.rsh:53:26:function exp)', 'at ./index.rsh:53:26:application call to "liftedInteract" (defined at: ./index.rsh:53:26:application)'],
    msg: 'getProduct',
    who: 'Designer'
    });
  
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 1,
    out_tys: [ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v176], secs: v178, time: v177, didSend: v42, from: v175 } = txn2;
  ;
  const v179 = stdlib.eq(v176, stdlib.checkedBigNumberify('./index.rsh:65:23:decimal', stdlib.UInt_max, '0'));
  if (v179) {
    stdlib.protect(ctc1, await interact.customerCancellation(), {
      at: './index.rsh:67:52:application',
      fs: ['at ./index.rsh:67:9:application call to [unknown function] (defined at: ./index.rsh:67:23:function exp)'],
      msg: 'customerCancellation',
      who: 'Designer'
      });
    
    return;
    }
  else {
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 0,
      funcNum: 2,
      out_tys: [],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [], secs: v187, time: v186, didSend: v61, from: v185 } = txn3;
    ;
    const v190 = stdlib.addressEq(v175, v185);
    stdlib.assert(v190, {
      at: './index.rsh:72:7:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Designer'
      });
    stdlib.protect(ctc1, await interact.reportPayment(v167, v176), {
      at: './index.rsh:73:49:application',
      fs: ['at ./index.rsh:73:9:application call to [unknown function] (defined at: ./index.rsh:73:24:function exp)'],
      msg: 'reportPayment',
      who: 'Designer'
      });
    
    const txn4 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 3,
      out_tys: [ctc2],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v198], secs: v200, time: v199, didSend: v79, from: v197 } = txn4;
    ;
    if (v198) {
      stdlib.protect(ctc1, await interact.reportAcceptDelivery(), {
        at: './index.rsh:95:66:application',
        fs: ['at ./index.rsh:95:9:application call to [unknown function] (defined at: ./index.rsh:95:22:function exp)'],
        msg: 'reportAcceptDelivery',
        who: 'Designer'
        });
      
      const txn5 = await (ctc.recv({
        didSend: false,
        evt_cnt: 0,
        funcNum: 4,
        out_tys: [],
        timeoutAt: undefined /* mto */,
        waitIfNotPresent: false
        }));
      const {data: [], secs: v216, time: v215, didSend: v112, from: v214 } = txn5;
      ;
      const v219 = stdlib.addressEq(v175, v214);
      stdlib.assert(v219, {
        at: './index.rsh:97:7:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Designer'
        });
      const txn6 = await (ctc.recv({
        didSend: false,
        evt_cnt: 1,
        funcNum: 5,
        out_tys: [ctc2],
        timeoutAt: undefined /* mto */,
        waitIfNotPresent: false
        }));
      const {data: [v224], secs: v226, time: v225, didSend: v122, from: v223 } = txn6;
      ;
      const v227 = stdlib.addressEq(v175, v223);
      stdlib.assert(v227, {
        at: './index.rsh:106:5:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Designer'
        });
      if (v224) {
        stdlib.protect(ctc1, await interact.reportOrderReceived(), {
          at: './index.rsh:117:65:application',
          fs: ['at ./index.rsh:117:9:application call to [unknown function] (defined at: ./index.rsh:117:22:function exp)'],
          msg: 'reportOrderReceived',
          who: 'Designer'
          });
        
        ;
        ;
        return;
        }
      else {
        ;
        ;
        return;
        }
      
      
      
      }
    else {
      ;
      stdlib.protect(ctc1, await interact.reportRejectDelivery(), {
        at: './index.rsh:90:66:application',
        fs: ['at ./index.rsh:90:9:application call to [unknown function] (defined at: ./index.rsh:90:22:function exp)'],
        msg: 'reportRejectDelivery',
        who: 'Designer'
        });
      
      return;
      }
    
    
    
    }
  
  
  
  };
export async function Transport(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Transport expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Transport expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Null;
  const ctc2 = stdlib.T_Bool;
  const ctc3 = stdlib.T_Address;
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 2,
    funcNum: 0,
    out_tys: [ctc0, ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v167, v168], secs: v170, time: v169, didSend: v29, from: v166 } = txn1;
  ;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 1,
    out_tys: [ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v176], secs: v178, time: v177, didSend: v42, from: v175 } = txn2;
  ;
  const v179 = stdlib.eq(v176, stdlib.checkedBigNumberify('./index.rsh:65:23:decimal', stdlib.UInt_max, '0'));
  if (v179) {
    stdlib.protect(ctc1, await interact.customerCancellation(), {
      at: './index.rsh:67:52:application',
      fs: ['at ./index.rsh:67:9:application call to [unknown function] (defined at: ./index.rsh:67:23:function exp)'],
      msg: 'customerCancellation',
      who: 'Transport'
      });
    
    return;
    }
  else {
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 0,
      funcNum: 2,
      out_tys: [],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [], secs: v187, time: v186, didSend: v61, from: v185 } = txn3;
    ;
    const v190 = stdlib.addressEq(v175, v185);
    stdlib.assert(v190, {
      at: './index.rsh:72:7:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Transport'
      });
    stdlib.protect(ctc1, await interact.reportPayment(v167, v176), {
      at: './index.rsh:73:49:application',
      fs: ['at ./index.rsh:73:9:application call to [unknown function] (defined at: ./index.rsh:73:24:function exp)'],
      msg: 'reportPayment',
      who: 'Transport'
      });
    
    const v196 = stdlib.protect(ctc2, await interact.confirmDelivery(v168), {
      at: './index.rsh:79:61:application',
      fs: ['at ./index.rsh:78:9:application call to [unknown function] (defined at: ./index.rsh:78:13:function exp)'],
      msg: 'confirmDelivery',
      who: 'Transport'
      });
    
    const txn4 = await (ctc.sendrecv({
      args: [v166, v167, v168, v175, v196],
      evt_cnt: 1,
      funcNum: 3,
      lct: v186,
      onlyIf: true,
      out_tys: [ctc2],
      pay: [stdlib.checkedBigNumberify('./index.rsh:83:5:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn4) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [v198], secs: v200, time: v199, didSend: v79, from: v197 } = txn4;
        
        ;
        if (v198) {
          sim_r.isHalt = false;
          }
        else {
          sim_r.txns.push({
            kind: 'from',
            to: v175,
            tok: undefined /* Nothing */
            });
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined /* Nothing */
            })
          sim_r.isHalt = true;
          }
        return sim_r;
        }),
      soloSend: true,
      timeoutAt: undefined /* mto */,
      tys: [ctc3, ctc0, ctc0, ctc3, ctc2],
      waitIfNotPresent: false
      }));
    const {data: [v198], secs: v200, time: v199, didSend: v79, from: v197 } = txn4;
    ;
    if (v198) {
      stdlib.protect(ctc1, await interact.reportAcceptDelivery(), {
        at: './index.rsh:95:66:application',
        fs: ['at ./index.rsh:95:9:application call to [unknown function] (defined at: ./index.rsh:95:22:function exp)'],
        msg: 'reportAcceptDelivery',
        who: 'Transport'
        });
      
      const txn5 = await (ctc.recv({
        didSend: false,
        evt_cnt: 0,
        funcNum: 4,
        out_tys: [],
        timeoutAt: undefined /* mto */,
        waitIfNotPresent: false
        }));
      const {data: [], secs: v216, time: v215, didSend: v112, from: v214 } = txn5;
      ;
      const v219 = stdlib.addressEq(v175, v214);
      stdlib.assert(v219, {
        at: './index.rsh:97:7:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Transport'
        });
      const txn6 = await (ctc.recv({
        didSend: false,
        evt_cnt: 1,
        funcNum: 5,
        out_tys: [ctc2],
        timeoutAt: undefined /* mto */,
        waitIfNotPresent: false
        }));
      const {data: [v224], secs: v226, time: v225, didSend: v122, from: v223 } = txn6;
      ;
      const v227 = stdlib.addressEq(v175, v223);
      stdlib.assert(v227, {
        at: './index.rsh:106:5:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Transport'
        });
      if (v224) {
        stdlib.protect(ctc1, await interact.reportOrderReceived(), {
          at: './index.rsh:117:65:application',
          fs: ['at ./index.rsh:117:9:application call to [unknown function] (defined at: ./index.rsh:117:22:function exp)'],
          msg: 'reportOrderReceived',
          who: 'Transport'
          });
        
        ;
        ;
        return;
        }
      else {
        ;
        ;
        return;
        }
      
      
      
      }
    else {
      ;
      stdlib.protect(ctc1, await interact.reportRejectDelivery(), {
        at: './index.rsh:90:66:application',
        fs: ['at ./index.rsh:90:9:application call to [unknown function] (defined at: ./index.rsh:90:22:function exp)'],
        msg: 'reportRejectDelivery',
        who: 'Transport'
        });
      
      return;
      }
    
    
    
    }
  
  
  
  };
const _ALGO = {
  ABI: {
    impure: [],
    pure: [],
    sigs: []
    },
  appApproval: `ByAKAAEFICgDBAgGAiYCAQAAIjUAMRhBAxspZEkiWzUBIQdbNQI2GgAXSUEAByI1BCM1BgA2GgIXNQQ2GgM2GgEXSSEFDEABgUkhBgxAAQBJJAxAAJQkEkQhCDQBEkQ0BEkiEkw0AhIRRChkSTUDSUklWzX/IQRbNf5XMCA1/Uk1BRc1/IAEsKWIUDT8FlEHCFCwNP0xABJENPxBACmxIrIBNP6yCCOyEDQDV1AgsgezsSKyATT/sggjshA0A1cAILIHs0ICH7EisgE0/rIII7IQNP2yB7OxIrIBNP+yCCOyEDT9sgezQgH8SCQ0ARJENARJIhJMNAISEUQoZEk1A0lKSVcAIDX/JVs1/iEEWzX9VzAgNfxXUCA1+4AEkSc087A0/YgCLDT8MQASRDT/NP4WUDT9FlA0/FA0+1AoSwFXAHBnSCEINQEyBjUCQgGxSCEGNAESRDQESSISTDQCEhFEKGRJNQNJSlcAIDX/JVs1/iEEWzX9VzAgNfxJNQUXNfuABGWxA100+xZRBwhQsDT7QQAiNP80/hZQNP0WUDT8UDEAUChLAVcAcGdIJDUBMgY1AkIBSrEisgE0/rIII7IQNPyyB7NCARxJIwxAAMZJIQkMQABeSCEFNAESRDQESSISTDQCEhFEKGRJNQNJSlcAIDX/JVs1/iEEWzX9VzAgNfyABEGxQE2wNP6IAUQ0/DEAEkQ0/zT+FlA0/RZQNPxQKEsBVwBQZ0ghBjUBMgY1AkIAzEgjNAESRDQESSISTDQCEhFEKGRJNQNJSVcAIDX/JVs1/iEEWzX9STUFFzX8gATVFRkUNPwWULA0/CISQQADQgBwNP80/hZQNP0WUDEAUChLAVcAUGdIIQU1ATIGNQJCAGtIgaCNBogAtSI0ARJENARJIhJMNAISEURJNQVJIls1/yEHWzX+gASs0R/DNP8WUDT+FlCwMQA0/xZQNP4WUChLAVcAMGdIIzUBMgY1AkIAGzEZJBJEsSKyASKyCCOyEDIJsgkyCrIHs0IABTEZIhJEKTQBFjQCFlBnNAZBAAqABBUffHU0B1CwNABJIwgyBBJEMRYSRCNDMRkiEkRC/98iMTQSRCEJMTUSRCIxNhJEIjE3EkQiNQEiNQJC/640AElKIwg1ADgHMgoSRDgQIxJEOAgSRIk=`,
  appClear: `Bw==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 1,
  stateSize: 112,
  unsupported: [],
  version: 11,
  warnings: []
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v167",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v168",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v167",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v168",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v176",
                "type": "uint256"
              }
            ],
            "internalType": "struct T4",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e1",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e2",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v198",
                "type": "bool"
              }
            ],
            "internalType": "struct T9",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T10",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e3",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e4",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v224",
                "type": "bool"
              }
            ],
            "internalType": "struct T11",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T12",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e5",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v176",
                "type": "uint256"
              }
            ],
            "internalType": "struct T4",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m2",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v198",
                "type": "bool"
              }
            ],
            "internalType": "struct T9",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T10",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m3",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m4",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v224",
                "type": "bool"
              }
            ],
            "internalType": "struct T11",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T12",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m5",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x6080604052604051620012ac380380620012ac83398101604081905262000026916200022e565b6000805543600355604080513381528251602080830191909152808401518051838501520151606082015290517fa736757a943474ef5983bb0422ab3a1e64bcd39e99635f4430c7765118231f959181900360800190a16200008b3415600762000127565b620000b9604051806060016040528060006001600160a01b0316815260200160008152602001600081525090565b338082526020838101805151828501908152905182015160408086019182526001600081905543905580518085019590955291518483015251606080850191909152815180850390910181526080909301905281516200011e92600292019062000151565b505050620002cb565b816200014d5760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b8280546200015f906200028e565b90600052602060002090601f016020900481019282620001835760008555620001ce565b82601f106200019e57805160ff1916838001178555620001ce565b82800160010185558215620001ce579182015b82811115620001ce578251825591602001919060010190620001b1565b50620001dc929150620001e0565b5090565b5b80821115620001dc5760008155600101620001e1565b604080519081016001600160401b03811182821017156200022857634e487b7160e01b600052604160045260246000fd5b60405290565b600081830360608112156200024257600080fd5b6200024c620001f7565b835181526040601f19830112156200026357600080fd5b6200026d620001f7565b60208581015182526040909501518582015293810193909352509092915050565b600181811c90821680620002a357607f821691505b60208210811415620002c557634e487b7160e01b600052602260045260246000fd5b50919050565b610fd180620002db6000396000f3fe6080604052600436106100795760003560e01c8063a7661d541161004b578063a7661d54146100e1578063ab53f2c6146100f4578063ad9fa3d814610117578063e2186a081461012a57005b80631e93b0f1146100825780637eea518c146100a657806383230757146100b9578063873779a1146100ce57005b3661008057005b005b34801561008e57600080fd5b506003545b6040519081526020015b60405180910390f35b6100806100b4366004610c3e565b61013d565b3480156100c557600080fd5b50600154610093565b6100806100dc366004610c3e565b6102ed565b6100806100ef366004610c3e565b610477565b34801561010057600080fd5b5061010961061e565b60405161009d929190610c61565b610080610125366004610c3e565b6106bb565b610080610138366004610c3e565b610918565b61014d600360005414600d610af1565b6101678135158061016057506001548235145b600e610af1565b60008080556002805461017990610cbe565b80601f01602080910402602001604051908101604052809291908181526020018280546101a590610cbe565b80156101f25780601f106101c7576101008083540402835291602001916101f2565b820191906000526020600020905b8154815290600101906020018083116101d557829003601f168201915b505050505080602001905181019061020a9190610d0f565b90507f919263be6d51bec670ce110fb6a7df03fe323e3de4dade5355bccc6a4b06d950338360405161023d929190610d9c565b60405180910390a161025681602001513414600b610af1565b6060810151610271906001600160a01b03163314600c610af1565b610279610b16565b81516001600160a01b03908116825260208084015181840152604080850151818501526060808601519093169284019290925260046000554360015590516102c391839101610dd1565b604051602081830303815290604052600290805190602001906102e7929190610b50565b50505050565b6102fd6001600054146009610af1565b6103178135158061031057506001548235145b600a610af1565b60008080556002805461032990610cbe565b80601f016020809104026020016040519081016040528092919081815260200182805461035590610cbe565b80156103a25780601f10610377576101008083540402835291602001916103a2565b820191906000526020600020905b81548152906001019060200180831161038557829003601f168201915b50505050508060200190518101906103ba9190610e08565b6040805133815284356020808301919091528501358183015290519192507f3957da95a08a7316b724c4fe20ec058158ff5f626860362a6b6aafcb999f7225919081900360600190a161040f34156008610af1565b6020820135610432576000808055600181905561042e90600290610bd4565b5050565b61043a610b16565b81516001600160a01b031681526020808301518183015260408084015181840152336060840152600360005543600155516102c391839101610dd1565b6104876005600054146014610af1565b6104a18135158061049a57506001548235145b6015610af1565b6000808055600280546104b390610cbe565b80601f01602080910402602001604051908101604052809291908181526020018280546104df90610cbe565b801561052c5780601f106105015761010080835404028352916020019161052c565b820191906000526020600020905b81548152906001019060200180831161050f57829003601f168201915b50505050508060200190518101906105449190610e77565b90507faa99e317c364fb804a6b7e67b51beee98735c62eb3df9d8182015e63bb1907223383604051610577929190610d9c565b60405180910390a1610590816040015134146012610af1565b60608101516105ab906001600160a01b031633146013610af1565b6040805160a08101825260008082526020808301828152838501838152606080860185815260808088018781528a516001600160a01b039081168a528b8801519096528a8a015190945291890151841690528701519091169052600690915543600155915190916102c391839101610f05565b60006060600054600280805461063390610cbe565b80601f016020809104026020016040519081016040528092919081815260200182805461065f90610cbe565b80156106ac5780601f10610681576101008083540402835291602001916106ac565b820191906000526020600020905b81548152906001019060200180831161068f57829003601f168201915b50505050509050915091509091565b6106cb6006600054146018610af1565b6106e5813515806106de57506001548235145b6019610af1565b6000808055600280546106f790610cbe565b80601f016020809104026020016040519081016040528092919081815260200182805461072390610cbe565b80156107705780601f1061074557610100808354040283529160200191610770565b820191906000526020600020905b81548152906001019060200180831161075357829003601f168201915b50505050508060200190518101906107889190610e77565b90507f663356c9bc60432e38c96f881aa1e2828a9a5648f65169c66c8c7722e9c2136533836040516107bb929190610f63565b60405180910390a16107cf34156016610af1565b60608101516107ea906001600160a01b031633146017610af1565b6107fa6040830160208401610f80565b156108955780608001516001600160a01b03166108fc82604001519081150290604051600060405180830381858888f19350505050158015610840573d6000803e3d6000fd5b50805160208201516040516001600160a01b039092169181156108fc0291906000818181858888f1935050505015801561087e573d6000803e3d6000fd5b506000808055600181905561042e90600290610bd4565b80606001516001600160a01b03166108fc82604001519081150290604051600060405180830381858888f193505050501580156108d6573d6000803e3d6000fd5b5080606001516001600160a01b03166108fc82602001519081150290604051600060405180830381858888f1935050505015801561087e573d6000803e3d6000fd5b6109286004600054146010610af1565b6109428135158061093b57506001548235145b6011610af1565b60008080556002805461095490610cbe565b80601f016020809104026020016040519081016040528092919081815260200182805461098090610cbe565b80156109cd5780601f106109a2576101008083540402835291602001916109cd565b820191906000526020600020905b8154815290600101906020018083116109b057829003601f168201915b50505050508060200190518101906109e59190610d0f565b90507fa5a264ad7bcb9788928e7795891942e9811712d8346314f9c3672363842f4e353383604051610a18929190610f63565b60405180910390a1610a2c3415600f610af1565b610a3c6040830160208401610f80565b15610ab0576040805160a0810182526000808252602080830182815283850183815260608086018581526080870186815289516001600160a01b0390811689528a8701519095528989015190935290880151909216909152339052600590915543600155915190916102c391839101610f05565b80606001516001600160a01b03166108fc82602001519081150290604051600060405180830381858888f1935050505015801561087e573d6000803e3d6000fd5b8161042e5760405163100960cb60e01b81526004810182905260240160405180910390fd5b604051806080016040528060006001600160a01b03168152602001600081526020016000815260200160006001600160a01b031681525090565b828054610b5c90610cbe565b90600052602060002090601f016020900481019282610b7e5760008555610bc4565b82601f10610b9757805160ff1916838001178555610bc4565b82800160010185558215610bc4579182015b82811115610bc4578251825591602001919060010190610ba9565b50610bd0929150610c11565b5090565b508054610be090610cbe565b6000825580601f10610bf0575050565b601f016020900490600052602060002090810190610c0e9190610c11565b50565b5b80821115610bd05760008155600101610c12565b600060408284031215610c3857600080fd5b50919050565b600060408284031215610c5057600080fd5b610c5a8383610c26565b9392505050565b82815260006020604081840152835180604085015260005b81811015610c9557858101830151858201606001528201610c79565b81811115610ca7576000606083870101525b50601f01601f191692909201606001949350505050565b600181811c90821680610cd257607f821691505b60208210811415610c3857634e487b7160e01b600052602260045260246000fd5b80516001600160a01b0381168114610d0a57600080fd5b919050565b600060808284031215610d2157600080fd5b6040516080810181811067ffffffffffffffff82111715610d5257634e487b7160e01b600052604160045260246000fd5b604052610d5e83610cf3565b81526020830151602082015260408301516040820152610d8060608401610cf3565b60608201529392505050565b80358015158114610d0a57600080fd5b6001600160a01b038316815281356020808301919091526060820190610dc3908401610d8c565b151560408301529392505050565b81516001600160a01b0390811682526020808401519083015260408084015190830152606092830151169181019190915260800190565b600060608284031215610e1a57600080fd5b6040516060810181811067ffffffffffffffff82111715610e4b57634e487b7160e01b600052604160045260246000fd5b604052610e5783610cf3565b815260208301516020820152604083015160408201528091505092915050565b600060a08284031215610e8957600080fd5b60405160a0810181811067ffffffffffffffff82111715610eba57634e487b7160e01b600052604160045260246000fd5b604052610ec683610cf3565b81526020830151602082015260408301516040820152610ee860608401610cf3565b6060820152610ef960808401610cf3565b60808201529392505050565b81516001600160a01b0390811682526020808401519083015260408084015190830152606080840151821690830152608092830151169181019190915260a00190565b80358252610f5860208201610d8c565b151560208301525050565b6001600160a01b038316815260608101610c5a6020830184610f48565b600060208284031215610f9257600080fd5b610c5a82610d8c56fea26469706673582212208c48e2016fc35f367d1b181f3494c781a33f134721b18b30b29b4fb453b572eb64736f6c634300080c0033`,
  BytecodeLen: 4780,
  Which: `oD`,
  version: 8,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:54:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: './index.rsh:66:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:71:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:74:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './index.rsh:94:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  6: {
    at: './index.rsh:98:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  7: {
    at: './index.rsh:120:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  8: {
    at: './index.rsh:113:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  9: {
    at: './index.rsh:89:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Customer": Customer,
  "Designer": Designer,
  "Transport": Transport
  };
export const _APIs = {
  };
