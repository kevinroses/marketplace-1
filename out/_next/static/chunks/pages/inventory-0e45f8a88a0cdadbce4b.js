(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[157],{52962:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{H:function(){return TokenCard}});var _Users_noclue_ps_Desktop_Programavimas_Workspaces_marketplace_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__(83789),_Users_noclue_ps_Desktop_Programavimas_Workspaces_marketplace_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__(30266),_Users_noclue_ps_Desktop_Programavimas_Workspaces_marketplace_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__(80318),_Users_noclue_ps_Desktop_Programavimas_Workspaces_marketplace_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(809),_Users_noclue_ps_Desktop_Programavimas_Workspaces_marketplace_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_Users_noclue_ps_Desktop_Programavimas_Workspaces_marketplace_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(67294),react_icons_im__WEBPACK_IMPORTED_MODULE_15__=__webpack_require__(53990),react_icons_fa__WEBPACK_IMPORTED_MODULE_14__=__webpack_require__(89583),_utils__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(43196),_Modals_AirdropForm__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(50708),axios__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(9669),axios__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__),_Modals_AuctionForm__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(23504),_Modals_SellForm__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(18851),___WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(35328),recoil__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(2804),_atoms__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(63569),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__(85893),TokenCard=function TokenCard(_ref){var token=_ref.token,set=token.set,script=token.script,qty=token.qty,uid=token.uid,_useState=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]),colors=_useState[0],setColors=_useState[1],_useState2=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(!1),isSelling=_useState2[0],setIsSelling=_useState2[1],_useState3=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(!1),auction=_useState3[0],setAuction=_useState3[1],_useState4=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(!1),airdrop=_useState4[0],setAirdrop=_useState4[1],_useState5=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(!1),isTransfering=_useState5[0],setIsTransfering=_useState5[1],id="_"+Math.random().toString(36).substr(2,9),_useState6=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("=="),randomUID=_useState6[0],setRandomUID=_useState6[1],_useState7=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(!1),isFlipped=_useState7[0],setIsFlipped=_useState7[1],_useRecoilState=(0,recoil__WEBPACK_IMPORTED_MODULE_8__.FV)(_atoms__WEBPACK_IMPORTED_MODULE_9__.D2),_useRecoilState2=(0,_Users_noclue_ps_Desktop_Programavimas_Workspaces_marketplace_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_11__.Z)(_useRecoilState,2),_broadcasts=_useRecoilState2[0],setBroadcasts=_useRecoilState2[1],user=(0,recoil__WEBPACK_IMPORTED_MODULE_8__.sJ)(_atoms__WEBPACK_IMPORTED_MODULE_9__.KL),prefix=(0,recoil__WEBPACK_IMPORTED_MODULE_8__.sJ)(_atoms__WEBPACK_IMPORTED_MODULE_9__.uo),apiLink=(0,recoil__WEBPACK_IMPORTED_MODULE_8__.sJ)(_atoms__WEBPACK_IMPORTED_MODULE_9__.H3),randomUIDGen=function(e){var t=Math.round(Math.random()*(e.max-(e.min||0))),s=(0,_utils__WEBPACK_IMPORTED_MODULE_2__.s3)(t);setRandomUID(s)},handleOpen=function(){var e=(0,_Users_noclue_ps_Desktop_Programavimas_Workspaces_marketplace_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_12__.Z)(_Users_noclue_ps_Desktop_Programavimas_Workspaces_marketplace_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark((function e(){return _Users_noclue_ps_Desktop_Programavimas_Workspaces_marketplace_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:(0,_utils__WEBPACK_IMPORTED_MODULE_2__._y)(user.name,set,prefix).then((function(e){e&&e.success&&setBroadcasts((function(t){return[].concat((0,_Users_noclue_ps_Desktop_Programavimas_Workspaces_marketplace_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_13__.Z)(t),[e])}))}));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)((function(){axios__WEBPACK_IMPORTED_MODULE_4___default().get("".concat(apiLink,"api/set/").concat(set)).then((function(e){var t=e.data;setInterval((function(){randomUIDGen(t.set)}),1e3)}))}),[]),(0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)((function(){axios__WEBPACK_IMPORTED_MODULE_4___default().get("https://ipfs.io/ipfs/".concat(script,"?").concat(randomUID)).then((function(_ref4){var data=_ref4.data,code="(//".concat(data,'\n)("').concat(randomUID,'")'),SVG=eval(code);document.getElementById("image-".concat(set,"-").concat(id))&&(document.getElementById("image-".concat(set,"-").concat(id)).innerHTML=SVG.HTML)}))}),[randomUID]),(0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)((function(){axios__WEBPACK_IMPORTED_MODULE_4___default().get("https://ipfs.io/ipfs/".concat(script,"?").concat(randomUID)).then((function(_ref5){var data=_ref5.data,code="(//".concat(data,'\n)("').concat(randomUID,'")'),SVG=eval(code);setColors([SVG.set.Color1,SVG.set.Color2])}))}),[]),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div",{className:"border shadow-xl h-auto border-transparent bg-gray-700 rounded-xl  text-white relative",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("h1",{className:"text-center w-full rounded-t-xl font-black py-2 text-xl",style:{background:"linear-gradient(to bottom,  ".concat(colors[0]," 0%,").concat(colors[1]," 100%)")},children:set}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("div",{className:"py-5",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div",{className:"relative",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("div",{className:"z-30 bg-gray-700 absolute top-0 w-full h-full bg-opacity-70 flex justify-center items-center",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(react_icons_fa__WEBPACK_IMPORTED_MODULE_14__.g_g,{size:60,color:"#fff"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("div",{id:"image-".concat(set,"-").concat(id),className:"w-1/2 mx-auto"})]})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div",{className:"px-5 py-4 w-full flex justify-between items-center z-50",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("p",{children:["Qty: ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("strong",{children:token.qty})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("button",{className:"px-6 py-2 rounded-xl flex items-center gap-2",style:{backgroundColor:colors[1]},onClick:function(){return setIsFlipped(!0)},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(react_icons_im__WEBPACK_IMPORTED_MODULE_15__.OJV,{size:20,color:"#fff"})})]}),isFlipped&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div",{className:"z-40 absolute top-0 left-0 h-full w-full bg-gray-700 bg-opacity-50 rounded-xl flex justify-center items-center translate-y-1/2",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div",{className:"grid grid-cols-1 gap-5",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("button",{onClick:handleOpen,className:"bg-gray-700 px-2 rounded-lg border-2 text-purple-500 bg-transparent border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-700",children:"Open"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("button",{onClick:function(){return setIsTransfering(!0)},className:"bg-gray-700 px-2 rounded-lg border-2 text-green-500 bg-transparent border-green-500 focus:outline-none focus:ring-2 focus:ring-green-700",children:"Give"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("button",{onClick:function(){return setIsSelling(!0)},className:"bg-gray-700 px-2 rounded-lg border-2 text-yellow-500 bg-transparent border-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-700",children:"List for sale"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("button",{onClick:function(){return setAuction(!0)},className:"bg-gray-700 rounded-lg border-2 text-blue-500 bg-transparent border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-700",children:"Auction"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("button",{onClick:function(){return setAirdrop(!0)},className:"bg-gray-700 rounded-lg border-2 text-red-500 bg-transparent border-red-500 focus:outline-none focus:ring-2 focus:ring-red-700",children:"Airdrop"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("button",{className:"absolute top-0 left-0 p-3",onClick:function(){return setIsFlipped(!1)},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(react_icons_im__WEBPACK_IMPORTED_MODULE_15__.sQZ,{color:"#fff"})})]}),isTransfering&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(___WEBPACK_IMPORTED_MODULE_7__.oQ,{set:set,handleClose:function(){return setIsTransfering(!1)}}),airdrop&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_Modals_AirdropForm__WEBPACK_IMPORTED_MODULE_3__.E,{set:set,handleClose:function(){return setAirdrop(!1)}}),auction&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_Modals_AuctionForm__WEBPACK_IMPORTED_MODULE_5__.f,{kind:"ft",uid:uid,set:set,handleClose:function(){return setAuction(!1)}}),isSelling&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_Modals_SellForm__WEBPACK_IMPORTED_MODULE_6__.M,{availible:qty,set:set,handleClose:function(){return setIsSelling(!1)}})]})}},50708:function(e,t,s){"use strict";s.d(t,{E:function(){return x}});var r=s(83789),a=s(80318),n=s(94649),_=s(67294),l=s(53990),i=s(86733),o=s(2804),c=s(63569),d=s(43196),u=s(85893),x=function(e){var t=e.handleClose,s=e.set,x=(0,o.sJ)(c.uo),m=(0,o.sJ)(c.KL),h=(0,o.FV)(c.D2),p=(0,a.Z)(h,2),f=(p[0],p[1]),E=(0,_.useState)(),g=E[0],j=E[1];return(0,_.useEffect)((function(){g&&(0,d.fz)(m.name,g,x).then((function(e){e&&e.success&&f((function(t){return[].concat((0,r.Z)(t),[e])}))}))}),[g]),(0,u.jsx)("div",{className:"fixed top-0 left-0 flex justify-center items-center h-screen w-screen bg-gray-700 bg-opacity-50 z-50",children:(0,u.jsxs)("div",{className:"p-8 bg-gray-700 rounded-xl border-4 border-gray-800 relative",children:[(0,u.jsx)("button",{className:"m-2 absolute top-0 right-0",children:(0,u.jsx)(l.sQZ,{size:15,color:"#fff",opacity:100,onClick:t})}),(0,u.jsx)("h1",{className:"text-center text-white text-2xl",children:"Airdrop NFT"}),(0,u.jsx)(n.J9,{initialValues:{to:""},validate:function(e){var t={};return e.to||(t.to="Required"),t},onSubmit:function(e,r){var a=e.to,n=r.setSubmitting;j({to:a.split(" "),set:s}),n(!1),t()},children:function(e){var t=e.values,s=e.errors,r=e.touched,a=e.handleChange,n=e.handleBlur,_=e.handleSubmit;return(0,u.jsx)("form",{onSubmit:_,children:(0,u.jsxs)("div",{className:"flex flex-col justify-center gap-5 text-white",children:[(0,u.jsx)(i.y,{name:"to",errors:s.to,handleBlur:n,handleChange:a,touched:r.to,value:t.to}),(0,u.jsx)("p",{children:'example - "name another_name"'}),(0,u.jsx)("button",{type:"submit",className:"rounded-lg border border-white py-1 w-2/3 px-2 bg-gray-500 focus:ring-4 mx-auto focus:outline-none focus:ring-gray-700",children:"Airdrop"})]})})}})]})})}},35671:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return A}});var r=s(67294),a=s(2804),n=s(63569),_=s(35328),l=s(9669),i=s.n(l),o=s(11163),c=s(52962),d=s(37039),u=s(85893),x=function(){var e=(0,r.useState)([]),t=e[0],s=e[1],_=(0,a.sJ)(n.KL),l=(0,a.sJ)(n.H3),x=(0,a.sJ)(n.eY),m=(0,d.$G)().t,h=(0,o.useRouter)();return(0,r.useEffect)((function(){if("inventory"===x||""===x)if(_){var e=_.name;i().get("".concat(l,"api/nfts/").concat(e)).then((function(e){s(e.data.mint_tokens)}))}else h.push("/")}),[x]),(0,u.jsxs)("div",{className:"mx-10",children:[0===t.length&&(0,u.jsx)("div",{className:"w-full flex justify-center items-center",children:(0,u.jsx)("h1",{className:"text-white text-xl w-full text-center",children:m("noFT")})}),(0,u.jsx)("div",{className:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 w-4/5 gap-4",children:t.map((function(e){return(0,u.jsx)("div",{children:(0,u.jsx)(c.H,{token:e},"_"+Math.random().toString(36).substr(2,9))},e.set)}))})]})},m=s(65523),h=function(e){var t=e.currency,s=e.balance;return(0,u.jsxs)("div",{className:"bg-gray-700 px-5 py-3 text-white  rounded-xl border-2 border-gray-800",children:[(0,u.jsxs)("div",{className:"flex items-center justify-between",children:["DLUX"===t&&(0,u.jsx)("img",{src:"https://www.dlux.io/img/dlux-hive-logo-alpha.svg",width:45,height:45,alt:"logo"}),"HIVE"===t&&(0,u.jsx)("img",{src:"https://cryptologos.cc/logos/hive-blockchain-hive-logo.png",width:45,height:45,alt:"logo"}),(0,u.jsx)("h1",{className:"text-xl mr-3",children:t})]}),(0,u.jsx)("h1",{className:"w-full text-center font-bold",children:"HIVE"===t?s:(s/1e3).toFixed(2)})]})},p=function(e){(0,m.Z)(e);var t=(0,r.useState)(0),s=t[0],_=t[1],l=(0,r.useState)(0),o=l[0],c=l[1],x=(0,a.sJ)(n.KL),p=(0,a.sJ)(n.H3),f=(0,d.$G)().t;return(0,r.useEffect)((function(){c(parseFloat(x.balance.split(" ")[0])),i().get("".concat(p,"@").concat(x.name)).then((function(e){var t=e.data;return _(parseFloat(t.balance))}))}),[x]),(0,u.jsxs)("div",{className:"w-full",children:[(0,u.jsx)("h1",{className:"text-white text-xl mx-10 my-2",children:f("balances")}),(0,u.jsxs)("div",{className:"grid grid-cols-1 sm:grid-cols-5 gap-5 px-10",children:[(0,u.jsx)(h,{currency:"DLUX",balance:s}),(0,u.jsx)(h,{currency:"HIVE",balance:o})]})]})},f=s(80318),E=function(){var e=(0,o.useRouter)(),t=(0,d.$G)().t,s=(0,a.sJ)(n.KL),l=(0,a.sJ)(n.H3),c=(0,r.useState)(),x=c[0],m=c[1],h=(0,a.sJ)(n.eY),p=(0,a.FV)(n.dL),E=(0,f.Z)(p,2),g=E[0],j=E[1];(0,r.useEffect)((function(){if("inventory"===h||""===h)if(s){var t=s.name;i().get("".concat(l,"api/nfts/").concat(t)).then((function(e){j(e.data.result)}))}else e.push("/")}),[h]),(0,r.useEffect)((function(){g.length&&m(g[0])}),[g]);return(0,u.jsxs)("div",{className:"flex h-auto flex-col gap-8 sm:flex-row",children:[(0,u.jsxs)("div",{className:"w-full",children:[0===g.length&&(0,u.jsx)("h1",{className:"text-white text-xl text-center",children:t("noNFT")}),(0,u.jsx)("div",{className:"grid grid-cols-1 grid-row-auto sm:grid-cols-2 xl:grid-cols-4 w-4/5 gap-4 mx-auto sm:mx-10",children:g.map((function(t){return(0,u.jsx)(_.$M,{nft:t,onClick:function(){!function(t){e.push("#details"),m(t)}(t)}},"".concat(t.set,"_").concat(t.uid))}))})]}),x&&(0,u.jsx)("div",{id:"details",className:"w-full mx-auto sm:mx-10",children:(0,u.jsx)(_.vq,{nft:x})})]})},g=s(43196),j=function(e){var t=e.type,s=e.coin,_=(0,r.useState)("limit"),l=_[0],i=_[1],o=(0,r.useState)(0),c=o[0],x=o[1],m=(0,r.useState)(0),h=m[0],p=m[1],f=(0,a.sJ)(n.KL),E=(0,a.sJ)(n.uo),j=(0,a.sJ)(n.db),b=(0,d.$G)().t;return(0,u.jsxs)("div",{className:"flex flex-col flex-grow bg-gray-700 border-2 border-gray-800 p-3 rounded-md",children:[(0,u.jsxs)("div",{className:"text-white text-xl flex gap-3",children:[(0,u.jsx)("h1",{className:"sell"===t?"text-red-500":"text-green-500",children:b(t)}),(0,u.jsx)("h1",{children:"DLUX"})]}),(0,u.jsxs)("div",{className:"flex flex-col sm:flex-row items-center  mr-5 justify-between mt-2 text-white font-light",children:[(0,u.jsx)("h1",{children:b("orderType")}),(0,u.jsxs)("div",{className:"flex justify-center",children:[(0,u.jsx)("button",{onClick:function(){return i("limit")},className:"p-2 ".concat("limit"===l&&"bg-gray-900"," rounded-l-full bg-gray-800 text-white transition-all"),children:b("limit")}),(0,u.jsx)("button",{onClick:function(){return i("market")},className:"p-2 ".concat("market"===l&&"bg-gray-900"," rounded-r-full bg-gray-800 text-white transition-all"),children:b("market")})]})]}),(0,u.jsxs)("div",{className:"flex text-white gap-3 flex-col mr-3 mt-5",children:["limit"===l&&(0,u.jsxs)("div",{className:"flex flex-col sm:flex-row sm:items-center sm:justify-between",children:[(0,u.jsxs)("div",{className:"flex flex-col mr-5",children:[(0,u.jsx)("h1",{children:b("qty")}),(0,u.jsx)("h1",{className:"font-light text-sm",children:"DLUX"})]}),(0,u.jsx)("input",{step:.001,className:"rounded-xl outline-none px-3 py-1 bg-gray-500 text-white",type:"number",value:c,onChange:function(e){return x(+e.target.value)}})]}),"market"===l&&"sell"===t&&(0,u.jsxs)("div",{className:"flex flex-col sm:flex-row sm:items-center sm:justify-between",children:[(0,u.jsxs)("div",{className:"flex flex-col mr-5",children:[(0,u.jsx)("h1",{children:b("qty")}),(0,u.jsx)("h1",{className:"font-light text-sm",children:"DLUX"})]}),(0,u.jsx)("input",{step:.001,className:"rounded-xl outline-none px-3 py-1 bg-gray-500 text-white",type:"number",value:c,onChange:function(e){return x(+e.target.value)}})]}),"limit"===l&&"sell"===t&&(0,u.jsxs)("div",{className:"flex flex-col sm:flex-row sm:items-center sm:justify-between",children:[(0,u.jsxs)("div",{className:"flex flex-col mr-5",children:[(0,u.jsx)("h1",{children:b("total")}),(0,u.jsx)("h1",{className:"font-light text-sm",children:s})]}),(0,u.jsx)("input",{step:.001,className:"rounded-xl outline-none px-3 py-1 bg-gray-500 text-white",type:"number",value:h,onChange:function(e){return p(+e.target.value)}})]}),"buy"===t&&(0,u.jsxs)("div",{className:"flex flex-col sm:flex-row sm:items-center sm:justify-between",children:[(0,u.jsxs)("div",{className:"flex flex-col mr-5",children:[(0,u.jsx)("h1",{children:b("total")}),(0,u.jsx)("h1",{className:"font-light text-sm",children:s})]}),(0,u.jsx)("input",{step:.001,className:"rounded-xl outline-none px-3 py-1 bg-gray-500 text-white",type:"number",value:h,onChange:function(e){return p(+e.target.value)}})]})]}),(0,u.jsx)("div",{className:"flex justify-end",children:(0,u.jsx)("button",{onClick:function(){"sell"===t&&"market"===l?(0,g.SN)({dlux:1e3*c,hive:0},f.name,E):"sell"===t&&"limit"===l?"HIVE"===s?(0,g.SN)({dlux:1e3*c,hive:1e3*h},f.name,E):(0,g.SN)({dlux:1e3*c,hbd:1e3*h},f.name,E):"buy"===t&&"market"===l?(0,g.u4)({coin:s,amount:1e3*h,buyData:{hours:720}},f.name,j):"buy"===t&&"limit"===l&&(0,g.u4)({coin:s,amount:1e3*h,buyData:{rate:parseFloat((h/c).toFixed(6)),hours:720}},f.name,j)},className:"".concat("sell"===t?"bg-red-500 focus:ring-red-600":"bg-green-500 focus:ring-green-600"," text-white mx-4 mt-5 px-4 py-2 rounded-xl focus:ring-2 "),children:b(t)})})]})},b=s(30266),D=s(809),v=s.n(D),M=function(e){var t=e.coin,s=(0,r.useState)({dollars:0,dlux:0}),_=s[0],l=s[1],o=(0,r.useState)({dollars:0,dlux:0}),c=o[0],x=o[1],m=(0,r.useState)({dollars:0,dlux:0}),h=m[0],p=m[1],E=(0,r.useState)({dollars:0,dlux:0}),g=E[0],j=E[1],D=(0,a.FV)(n.n6),M=(0,f.Z)(D,2),y=M[0],P=M[1],O=(0,r.useState)(),k=O[0],C=O[1],I=(0,d.$G)().t,U=(0,a.sJ)(n.H3);return(0,r.useEffect)((function(){var e=0,s=0;(function(){var t=(0,b.Z)(v().mark((function t(){var r,a,n,_;return v().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i().get("https://api.coingecko.com/api/v3/coins/hive",{headers:{accept:"application/json"}});case 2:return r=t.sent,a=r.data,t.next=6,i().get("https://api.coingecko.com/api/v3/coins/hive_dollar",{headers:{accept:"application/json"}});case 6:n=t.sent,_=n.data,e=a.market_data.current_price.usd,s=_.market_data.current_price.usd;case 10:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()(),t&&i().get("".concat(U,"dex")).then((function(r){var a=r.data;C(a),"HIVE"===t?(a.markets.hive.sells.length&&a.markets.hive.buys.length?(l({dlux:parseFloat(a.markets.hive.buys[0].rate),dollars:parseFloat((parseFloat(a.markets.hive.tick)*e*a.markets.hive.buys[0].rate).toFixed(2))}),x({dlux:parseFloat(a.markets.hive.sells[0].rate),dollars:parseFloat((parseFloat(a.markets.hive.tick)*e*a.markets.hive.sells[0].rate).toFixed(2))})):(l({dlux:0,dollars:0}),x({dlux:0,dollars:0})),j({dlux:a.stats.HiveVWMA.rate,dollars:parseFloat((+a.stats.HiveVWMA.rate*+a.markets.hive.tick).toFixed(2))}),p({dlux:a.markets.hive.tick,dollars:parseFloat((parseFloat(a.markets.hive.tick)*e).toFixed(2))})):"HBD"===t&&(a.markets.hbd.sells.length&&a.markets.hbd.buys.length?(l({dlux:a.markets.hbd.sells[0].rate,dollars:parseFloat((parseFloat(a.markets.hbd.tick)*s*a.markets.hbd.sells[0].rate).toFixed(2))}),x({dlux:a.markets.hbd.buys[0].rate,dollars:parseFloat((parseFloat(a.markets.hbd.tick)*s*a.markets.hbd.sells[0].rate).toFixed(2))})):(l({dlux:0,dollars:0}),x({dlux:0,dollars:0})),j({dlux:a.stats.HbdVWMA.rate,dollars:parseFloat((+a.stats.HbdVWMA.rate*+a.markets.hbd.tick).toFixed(2))}),p({dlux:a.markets.hbd.tick,dollars:parseFloat((parseFloat(a.markets.hbd.tick)*e).toFixed(2))}))}))}),[t]),(0,r.useEffect)((function(){k&&P("HIVE"===t?{dlux:y.dlux,dollars:(parseFloat(y.dlux)*k.markets.hive.tick).toFixed(2)}:{dlux:y.dlux,dollars:(parseFloat(y.dlux)*k.markets.hbd.tick).toFixed(2)})}),[t]),(0,u.jsxs)("div",{className:"grid grid-cols-2 sm:grid-cols-5 gap-3 text-white text-xl",children:[(0,u.jsxs)("div",{className:"mx-3 flex flex-col justify-center items-center gap-3",children:[(0,u.jsx)("h1",{className:"px-5 py-2 bg-gray-500 rounded-xl",children:I("bid")}),(0,u.jsxs)("div",{className:"flex flex-col justify-center items-center text-md",children:[(0,u.jsx)("h1",{children:_.dlux}),(0,u.jsxs)("h1",{children:["$",_.dollars]})]})]}),(0,u.jsxs)("div",{className:"mx-3 flex flex-col justify-center items-center gap-3",children:[(0,u.jsx)("h1",{className:"px-5 py-2 bg-gray-500 rounded-xl",children:I("ask")}),(0,u.jsxs)("div",{className:"flex flex-col justify-center items-center text-md",children:[(0,u.jsx)("h1",{children:c.dlux}),(0,u.jsxs)("h1",{children:["$",c.dollars]})]})]}),(0,u.jsxs)("div",{className:"mx-3 flex flex-col justify-center items-center gap-3",children:[(0,u.jsx)("h1",{className:"px-5 py-2 bg-gray-500 rounded-xl",children:I("last")}),(0,u.jsxs)("div",{className:"flex flex-col justify-center items-center text-md",children:[(0,u.jsx)("h1",{children:h.dlux}),(0,u.jsxs)("h1",{children:["$",h.dollars]})]})]}),(0,u.jsxs)("div",{className:"mx-3 flex flex-col justify-center items-center gap-3",children:[(0,u.jsx)("h1",{className:"px-5 py-2 bg-gray-500 rounded-xl",children:"VWMA"}),(0,u.jsxs)("div",{className:"flex flex-col justify-center items-center text-md",children:[(0,u.jsx)("h1",{children:g.dlux}),(0,u.jsxs)("h1",{children:["$",g.dollars]})]})]}),(0,u.jsxs)("div",{className:"mx-3 flex flex-col justify-center items-center gap-3",children:[(0,u.jsx)("h1",{className:"px-5 py-2 bg-gray-500 rounded-xl",children:I("hourVolume")}),(0,u.jsxs)("div",{className:"flex flex-col justify-center items-center text-md",children:[(0,u.jsx)("h1",{children:y.dlux}),(0,u.jsxs)("h1",{children:["$",y.dollars]})]})]})]})},y=function(e){var t=e.order,s=e.i,a=e.orders,n=(0,r.useState)("HIVE"),_=n[0],l=n[1],i=(0,r.useState)("buy"),o=(i[0],i[1]),c=(0,r.useState)(""),d=c[0],x=c[1];return(0,r.useEffect)((function(){o(t.type.split(":")[1]),l(t.type.split(":")[0]);var e=0,r=t.type.split(":")[0];a.forEach((function(t,a){a<=s&&(e+="hive"===r?parseFloat(parseFloat((+t.hivenai.amount/Math.pow(10,t.hivenai.precision)).toString()).toFixed(t.hivenai.precision)):parseFloat(parseFloat((+t.hbdnai.amount/Math.pow(10,t.hbdnai.precision)).toString()).toFixed(t.hbdnai.precision)))})),x(e.toFixed(2))}),[]),(0,u.jsxs)("div",{className:"".concat(s%2===0?"bg-gray-500":""," grid grid-cols-4 gap-5 my-1 px-2 py-1"),children:[(0,u.jsx)("h1",{children:d}),(0,u.jsx)("h1",{children:"hive"===_?parseFloat(parseFloat((+t.hivenai.amount/Math.pow(10,t.hivenai.precision)).toString()).toFixed(t.hivenai.precision)).toFixed(2):parseFloat(parseFloat((+t.hbdnai.amount/Math.pow(10,t.hbdnai.precision)).toString()).toFixed(t.hbdnai.precision)).toFixed(2)}),(0,u.jsx)("h1",{children:parseFloat(parseFloat((+t.amountnai.amount/Math.pow(10,t.amountnai.precision)).toString()).toFixed(t.amountnai.precision)).toFixed(2)}),(0,u.jsx)("h1",{children:parseFloat(t.rate).toFixed(2)})]})},P=function(e){var t=e.type,s=e.coin,_=(0,r.useState)([]),l=_[0],o=_[1],c=(0,a.sJ)(n.H3),x=(0,d.$G)().t;return(0,r.useEffect)((function(){i().get("".concat(c,"dex")).then((function(e){var r=e.data.markets;"HIVE"===s&&"buy"===t?o(r.hive.buys.length<=1?r.hive.buys.sort((function(e,t){return parseFloat(e.rate)<parseFloat(t.rate)?-1:1})):r.hive.buys.sort((function(e,t){return parseFloat(e.rate)>parseFloat(t.rate)?-1:1}))):"HBD"===s&&"buy"===t?o(r.hbd.buys.length<=1?r.hbd.buys.sort((function(e,t){return parseFloat(e.rate)<parseFloat(t.rate)?-1:1})):r.hbd.buys.sort((function(e,t){return parseFloat(e.rate)>parseFloat(t.rate)?-1:1}))):"HIVE"===s&&"sell"===t?o((r.hive.sells.length,r.hive.sells.sort((function(e,t){return parseFloat(e.rate)<parseFloat(t.rate)?-1:1})))):"HBD"===s&&"sell"===t&&o(r.hbd.sells.length<=1?r.hbd.sells.sort((function(e,t){return parseFloat(e.rate)<parseFloat(t.rate)?-1:1})):r.hbd.sell.sort((function(e,t){return parseFloat(e.rate)<parseFloat(t.rate)?-1:1})))}))}),[s]),(0,u.jsxs)("div",{className:"text-white text-xl w-full",children:[(0,u.jsxs)("div",{className:"flex gap-3",children:[(0,u.jsx)("h1",{className:"sell"===t?"text-red-500":"text-green-500",children:x(t)}),(0,u.jsx)("h1",{children:x("orders")})]}),(0,u.jsxs)("div",{className:"grid grid-cols-4 gap-5 mt-3",children:[(0,u.jsx)("h1",{children:x("total").toUpperCase()}),(0,u.jsx)("h1",{children:s}),(0,u.jsx)("h1",{children:"DLUX"}),(0,u.jsx)("h1",{children:x("sell"===t?"ask":"bid").toUpperCase()})]}),(0,u.jsx)("div",{className:"mt-2",children:l&&l.map((function(e,t){return(0,u.jsx)(y,{i:t,order:e,orders:l})}))})]})},O=s(85518),k=function(e){var t=e.transaction,s=e.i,a=e.transactions,n=(0,r.useState)(""),_=n[0],l=n[1];return(0,r.useEffect)((function(){var e=0;a.forEach((function(t,r){r<=s&&(e+=+t.price)})),l(e.toFixed(2))}),[]),(0,u.jsxs)("div",{className:"".concat(s%2===0?"bg-gray-500":""," text-xl px-2 py-1 grid grid-cols-4 sm:grid-cols-5"),children:[!O.tq&&(0,u.jsx)("h1",{className:"w-2/3",children:new Date(t.trade_timestamp).toUTCString()}),(0,u.jsx)("h1",{className:"buy"===t.type?"text-green-500":"text-red-500",children:t.type.toUpperCase()}),(0,u.jsx)("h1",{children:parseFloat(t.base_volume).toFixed(2)}),(0,u.jsx)("h1",{children:parseFloat(t.price).toFixed(2)}),(0,u.jsx)("h1",{children:parseFloat(_).toFixed(2)})]})},C=function(e){var t=e.coin,s=(0,r.useState)("HIVE_DLUX"),_=s[0],l=s[1],o=(0,r.useState)([]),c=o[0],x=o[1],m=(0,a.sJ)(n.H3),h=(0,d.$G)().t;return(0,r.useEffect)((function(){i().get("".concat(m,"api/pairs")).then((function(e){var s=e.data;l("HIVE"===t?s[0].ticker_id:s[1].ticker_id)}))}),[]),(0,r.useEffect)((function(){_&&i().get("".concat(m,"api/historical/").concat(_,"?depth=200")).then((function(e){var t=e.data,s=t.buy.concat(t.sell).sort((function(e,t){return t.trade_timestamp-e.trade_timestamp}));x(s)}))}),[_]),(0,u.jsxs)("div",{className:"flex flex-col text-white",children:[(0,u.jsx)("h1",{className:"text-xl",children:h("tradeHistory")}),(0,u.jsxs)("div",{className:"grid mt-2 mb-1 text-xl grid-cols-4 sm:grid-cols-5",children:[!O.tq&&(0,u.jsx)("h1",{children:h("date").toUpperCase()}),(0,u.jsx)("h1",{children:h("type").toUpperCase()}),(0,u.jsx)("h1",{children:"DLUX"}),(0,u.jsx)("h1",{children:"HIVE"}),(0,u.jsx)("h1",{children:h("total").toUpperCase()})]}),c.map((function(e,t){return(0,u.jsx)(k,{transaction:e,transactions:c,i:t})}))]})},I=s(5152),U=function(e){var t=e.coin,_=(0,a.sJ)(n.H3),l=(0,r.useState)(),o=l[0],c=l[1],d=(0,I.default)((function(){return Promise.all([s.e(279),s.e(229)]).then(s.bind(s,47229))}),{loadableGenerated:{webpack:function(){return[47229]},modules:["../components/DEX/DEXChart.tsx -> react-apexcharts"]}});return(0,r.useEffect)((function(){i().get("".concat(_,"dex")).then((function(e){var s=e.data;c("HIVE"===t?(0,g.IR)(s.markets.hive.days):(0,g.IR)(s.markets.hbd.days))}))}),[t]),o?(0,u.jsx)("div",{style:{height:"50vh"},children:(0,u.jsx)(d,{height:"100%",series:o.series,type:"candlestick",options:{chart:{type:"candlestick",height:"100%",foreColor:"white"},title:{text:"".concat(t,"/DLUX"),align:"left"},xaxis:{type:"datetime"},yaxis:{tooltip:{enabled:!0}}}})}):(0,u.jsx)("div",{className:"text-center text-white text-xl",children:"Loading charts..."})},N=function(){var e=(0,r.useState)("HIVE"),t=e[0],s=e[1],_=(0,a.FV)(n.db),l=(0,f.Z)(_,2),o=(l[0],l[1]),c=(0,a.sJ)(n.H3);return(0,r.useEffect)((function(){i().get("".concat(c,"api/protocol")).then((function(e){var t=e.data;o(t.multisig)}))}),[]),(0,u.jsx)("div",{className:"flex w-full justify-center",children:(0,u.jsxs)("div",{className:"flex flex-col  justify-center items-center gap-9",children:[(0,u.jsxs)("div",{className:"flex justify-center",children:[(0,u.jsx)("button",{onClick:function(){return s("HIVE")},className:"p-2 ".concat("HIVE"===t&&"bg-gray-800"," rounded-l-full bg-gray-700 text-white transition-all"),children:"HIVE"}),(0,u.jsx)("button",{onClick:function(){return s("HBD")},className:"p-2 ".concat("HBD"===t&&"bg-gray-800"," rounded-r-full bg-gray-700 text-white transition-all"),children:"HBD"})]}),(0,u.jsxs)("div",{className:"flex flex-col sm:mx-10 bg-gray-600 mb-3 border-2 rounded-xl border-gray-800 p-5 justify-center",children:[(0,u.jsx)("div",{className:"flex flex-wrap justify-center",children:(0,u.jsx)(M,{coin:t})}),!O.tq&&(0,u.jsx)("div",{className:"my-3",children:(0,u.jsx)(U,{coin:t})}),(0,u.jsxs)("div",{className:"flex flex-col my-5 gap-2 xl:flex-row xl:justify-between xl:gap-10",children:[(0,u.jsx)(j,{coin:t,type:"buy"}),(0,u.jsx)(j,{coin:t,type:"sell"})]}),(0,u.jsxs)("div",{className:"flex flex-col gap-2 xl:flex-row xl:gap-10 w-full mb-4",children:[(0,u.jsx)(P,{coin:t,type:"buy"}),(0,u.jsx)(P,{coin:t,type:"sell"})]}),(0,u.jsx)("div",{className:"mt-5",children:(0,u.jsx)(C,{coin:t})})]})]})})},w=s(76467),L=function(){var e=(0,a.sJ)(n.KL),t=(0,a.sJ)(n.c9);return(0,u.jsxs)("div",{children:[(0,u.jsx)("title",{children:e?"Inv-".concat(e.name):"Inventory"}),e&&(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(_.LP,{}),(0,u.jsxs)("div",{className:"",children:["mint"===t&&(0,u.jsx)(x,{}),"nft"===t&&(0,u.jsx)(E,{}),"tokens"===t&&(0,u.jsx)(p,{}),"dex"===t&&(0,u.jsx)(w.default,{children:(0,u.jsx)(N,{})})]})]})]})},A=(0,I.default)((function(){return Promise.resolve(L)}),{ssr:!1})},59415:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/inventory",function(){return s(35671)}])}},function(e){e.O(0,[774,33,888,179],(function(){return t=59415,e(e.s=t);var t}));var t=e.O();_N_E=t}]);