(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[747],{10937:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return x}});var i=n(83789),o=n(80318),r=n(67294),a=n(11163),s=n(60590),l=n.n(s),u=n(87893),c=n(43196),d=n(2804),f=n(63569),p=n(89583),h=n(60155),y=n(85893),m=function(e){var t=e.comment,n=(0,d.sJ)(f.KL),i=(0,r.useState)(!1),o=i[0],s=i[1],l=(0,r.useState)(""),u=l[0],m=l[1],v=(0,r.useState)("#000"),x=v[0],b=v[1];(0,r.useEffect)((function(){console.log(t);var e=document.getElementById("comment-body-".concat(t.id));e&&(e.innerHTML=t.body)}),[]);return(0,y.jsxs)("div",{className:"text-white bg-gray-600 p-4 rounded-xl border-2 border-gray-800",children:[(0,y.jsx)("h1",{onClick:function(){return a.default.push("/@".concat(t.author))},className:"text-xl font-semibold mb-2 hover:text-blue-200 cursor-pointer",children:t.author}),(0,y.jsxs)("div",{className:"text-white mx-1 whitespace-pre-wrap break-words",children:[(0,y.jsx)("h1",{id:"comment-body-".concat(t.id)}),(0,y.jsxs)("div",{className:"w-auto",children:[(0,y.jsx)("div",{className:"flex",children:(0,y.jsxs)("div",{onClick:function(){return s(!o)},className:"hover:bg-gray-700 px-2 py-1 my-1 rounded-xl cursor-pointer flex items-center gap-2",children:[(0,y.jsx)(p.Bjt,{size:20,color:"#fff",className:"my-3"}),"(",t.replies.length,")"]})}),o&&(0,y.jsxs)("div",{className:"relative flex w-1/2",children:[(0,y.jsx)("input",{type:"text",className:"text-black w-full outline-none p-2 rounded-xl my-2",placeholder:"Write a reply",onChange:function(e){return m(e.target.value)}}),(0,y.jsx)(h.yhK,{color:x,size:25,onMouseEnter:function(){return b("#dcdcdc")},onMouseLeave:function(){return b("#000")},onClick:function(){(0,c.Hi)({author:n.name,body:u,parent_author:t.author,parent_permlink:t.permlink,permlink:"re-previous-".concat(t.author,"-").concat(t.permlink)})},className:"absolute right-4 top-4 cursor-pointer"})]})]})]}),t.replies.map((function(e){var n=document.getElementById("comment-body-".concat(t.id,"-replie-").concat(e.id));return n&&(n.innerHTML=e.body),(0,y.jsxs)("div",{className:"mx-3",children:[(0,y.jsx)("a",{target:"_blank",href:"https://peakd.com/@".concat(e.author),children:(0,y.jsx)("h1",{className:"text-xl font-semibold text-white hover:text-blue-200 cursor-pointer",children:e.author})}),(0,y.jsx)("h1",{id:"comment-body-".concat(t.id,"-replie-").concat(e.id),className:"text-white mx-2"})]})}))]})},v=n(47320),x=function(){var e,t=new u.Client(["https://api.hive.blog","https://api.hivekings.com","https://anyx.io","https://api.openhive.network"]),n=(0,r.useState)(0),s=n[0],x=n[1],b=(0,r.useState)(""),j=b[0],_=b[1],g=(0,r.useState)([]),P=g[0],w=g[1],S=(0,r.useState)(null),N=S[0],k=S[1],O=(0,r.useState)(!1),M=O[0],E=O[1],C=(0,r.useState)("#000"),F=C[0],A=C[1],R=(0,r.useState)(!1),H=R[0],T=R[1],I=(0,r.useState)(!1),L=I[0],z=I[1],U=(0,r.useState)(""),B=U[0],q=U[1],J=(0,r.useState)(!1),V=J[0],D=J[1],K=(0,r.useState)(""),W=K[0],Z=K[1],X=(0,r.useState)([]),G=X[0],Y=X[1],$=(0,d.FV)(f.D2),Q=(0,o.Z)($,2),ee=(Q[0],Q[1]),te=(0,r.useState)(null),ne=te[0],ie=te[1],oe=(0,d.FV)(f.Lf),re=(0,o.Z)(oe,2),ae=re[0],se=re[1],le=(0,a.useRouter)(),ue=(0,d.sJ)(f.KL),ce=le.query,de=ce.permlink,fe=ce.author;(0,r.useEffect)((function(){if(V){document.title="DLUX | ".concat(ne.title);var e=ne.json_metadata,t=JSON.parse(e).vrHash,n=JSON.parse(e).scrolling,i=location.href.split("?")[1],o=document.createElement("iframe");o.id="theIframe",o.setAttribute("scrolling",n||"yes"),o.width="100%",o.height="100%",o.setAttribute("allowfullscreen","true"),o.setAttribute("allow","gyroscope; accelerometer; microphone; camera"),o.src="".concat(ae,"ipfs/").concat(t,"?").concat(i),document.getElementById("iframe-app")&&document.getElementById("iframe-app").appendChild(o)}}),[V]);var pe=function(){(0,c.Ns)(ue.name,W,de,s).then((function(e){e&&e.success&&ee((function(t){return[].concat((0,i.Z)(t),[e])}))}))};(0,r.useEffect)((function(){if(fe||le.push("/"),fe&&"@"===fe.substr(0,1)){if("https://anywhere.ipfs.dlux.io/"===ae){var e=fe.substr(1,fe.length).replace(".","-");se("https://".concat(e,".ipfs.dlux.io/"))}Z(fe.substr(1,fe.length))}}),[]);return(0,r.useEffect)((function(){""!==W&&(l().api.getContent(W,de,(function(e,t){e&&console.log(e),k(JSON.parse(t.json_metadata)),ie(t)})),t.database.call("get_content_replies",[W,de]).then((function(e){Y(e)})))}),[W]),(0,r.useEffect)((function(){if(N)if(N.app.includes("3speak")){E(!0);var e="https://ipfs.io/ipfs/"+N.video.info.ipfs,t="https://ipfs.io/ipfs/"+N.video.info.ipfsThumbnail;t&&e&&w((function(n){return[].concat((0,i.Z)(n),[{file:e,image:t}])}))}else{var n;(n=N.image&&Array.isArray(N.image)?N.image[0]:"string"==typeof N.image?N.image:N.Hash360&&(N.Hash360,1)?"https://ipfs.io/ipfs/".concat(N.Hash360):"https://www.dlux.io/img/dlux-sdk.png")&&"https"!==n.substr(0,5)&&(n="https://www.dlux.io/img/dlux-sdk.png"),q(n)}}),[N]),V?(0,y.jsxs)("div",{className:"w-full h-screen fixed top-0 left-0 bg-black text-white text-2xl font-bold bg-opacity-70",children:[(0,y.jsxs)("div",{className:"flex px-10 justify-between w-full bg-blue-500",children:[(0,y.jsx)("span",{className:"hover:text-gray-500 cursor-pointer",onClick:function(){document.querySelectorAll("iframe").forEach((function(e){return e.remove()})),D(!1)},children:"DLUX"}),(0,y.jsx)("span",{children:null===ne||void 0===ne?void 0:ne.title})]}),(0,y.jsx)("div",{className:"w-full h-full",id:"iframe-app"})]}):ne&&(0,y.jsx)("div",{className:"w-full mx-auto max-w-3xl",children:(0,y.jsxs)("div",{className:"flex justify-evenly flex-col w-full mt-10",children:[M?(0,y.jsx)("div",{className:"w-full flex justify-center my-2",children:(0,y.jsx)(v.Z,{className:"rounded-xl w-4/5",playerId:"my-unique-id",playerScript:"https://cdn.jwplayer.com/libraries/HT7Dts3H.js",playlist:P})}):(0,y.jsx)("div",{className:"flex justify-center w-full my-2",children:(0,y.jsx)("img",{src:B,className:"w-4/5",alt:"appPhoto"})}),JSON.parse(ne.json_metadata).vrHash&&(0,y.jsx)("button",{className:"mx-auto px-4 py-2 rounded-lg border-2 text-white bg-blue-500 border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-700",onClick:function(){return D(!0)},children:"Run app"}),(0,y.jsxs)("div",{className:"p-5",children:[(0,y.jsx)("h1",{className:"text-white text-3xl",children:null===ne||void 0===ne?void 0:ne.title}),(0,y.jsx)("h1",{className:"text-white text-center sm:mx-3 sm:text-left text-lg",children:null===(e=JSON.parse(ne.json_metadata))||void 0===e?void 0:e.description}),(0,y.jsxs)("div",{className:"flex items-center w-full my-5 mx-2 gap-2",children:[H?(0,y.jsxs)("div",{onClick:pe,className:"flex text-white mx-1 gap-2 rounded-xl px-2 py-1 bg-green-500 cursor-pointer",children:[(0,y.jsx)(p.$0H,{size:25,color:"#fff"}),s/100,"%"]}):(0,y.jsx)("div",{className:"px-2 py-1 cursor-pointer",children:(0,y.jsx)(p.$0H,{size:25,color:"#fff",onClick:function(){z(!1),T(!0)}})}),L?(0,y.jsxs)("div",{onClick:pe,className:"flex text-white mx-1 gap-2 rounded-xl px-2 py-1 bg-red-500 cursor-pointer",children:[(0,y.jsx)(p.c0u,{size:25,color:"#fff"}),s/100,"%"]}):(0,y.jsx)("div",{className:"px-2 py-1 cursor-pointer",children:(0,y.jsx)(p.c0u,{size:25,color:"#fff",onClick:function(){T(!1),z(!0)}})}),(0,y.jsxs)("h1",{className:"text-white text-xl cursor-pointer",onClick:function(){T(!1),z(!1)},children:["(",ne.active_votes.length,")"]})]}),(0,y.jsxs)("div",{className:"w-full",children:[H&&(0,y.jsx)("input",{className:"my-2 w-full",onChange:function(e){return x(+e.target.value)},type:"range",min:"0",max:"10000",value:"0"}),L&&(0,y.jsx)("input",{className:"my-2 w-full",onChange:function(e){return x(+e.target.value)},type:"range",min:"0",max:"10000",value:"0"})]}),(0,y.jsxs)("div",{className:"my-2",children:[(0,y.jsx)("h1",{className:"text-white border-b-2 border-white pb-1 text-2xl",children:"Comments"}),(0,y.jsxs)("div",{className:"relative flex",children:[(0,y.jsx)("input",{type:"text",className:"w-full outline-none p-2 rounded-xl my-2",placeholder:"Write a comment",onChange:function(e){return _(e.target.value)}}),(0,y.jsx)(h.yhK,{color:F,size:25,onMouseEnter:function(){return A("#dcdcdc")},onMouseLeave:function(){return A("#000")},onClick:function(){(0,c.UI)({author:ue.name,title:"",body:j,parent_author:W,parent_permlink:de,permlink:"re-previous-".concat(W,"-").concat(de),json_metadata:JSON.stringify({tags:["hiveio"]})}),_("")},className:"absolute right-4 top-4 cursor-pointer"})]}),(0,y.jsx)("div",{className:"flex flex-col justify-center gap-3 my-3",children:G.map((function(e){return(0,y.jsx)(m,{comment:e},e.id)}))})]})]})]})})}},71425:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/[author]/[permlink]",function(){return n(10937)}])},42804:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=c(n(34171)),o=c(n(96359)),r=c(n(99569)),a=c(n(98886)),s=c(n(78454)),l=c(n(56565)),u=c(n(84515));function c(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){return{onAdPlay:i.default.bind(e),onBeforePlay:o.default.bind(e),onFullScreen:r.default.bind(e),onMute:a.default.bind(e),onPlay:s.default.bind(e),onTime:l.default.bind(e),onVideoLoad:u.default.bind(e)}}},34171:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){this.state.adHasPlayed?this.props.onAdResume(e):(this.props.onAdPlay(e),this.setState({adHasPlayed:!0}))}},96359:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n=t.getPlaylistItem();this.state.hasPlayed||this.state.adHasPlayed||"function"!==typeof this.props.generatePrerollUrl||t.playAd(this.props.generatePrerollUrl(n))}},99569:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){e.fullscreen?this.props.onEnterFullScreen(e):this.props.onExitFullScreen(e)}},98886:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){e.mute?this.props.onMute(e):this.props.onUnmute(e)}},78454:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){"autostart"===e.playReason?(this.setState({hasPlayed:!0}),this.props.onAutoStart(e)):!this.state.hasPlayed||"buffering"!==e.oldstate&&"paused"!==e.oldstate?(this.props.onPlay(e),this.setState({hasPlayed:!0})):this.props.onResume(e)}},56565:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=this.state.hasFired,n=e.position,i=e.duration,o=!1;this.props.onTime(e),!t.threeSeconds&&n>3&&(this.props.onThreeSeconds(),t.threeSeconds=!0,o=!0),!t.tenSeconds&&n>10&&(this.props.onTenSeconds(),t.tenSeconds=!0,o=!0),!t.thirtySeconds&&n>30&&(this.props.onThirtySeconds(),t.thirtySeconds=!0,o=!0),!t.twentyFivePercent&&n/i*100>25&&(this.props.onTwentyFivePercent(),t.twentyFivePercent=!0,o=!0),!t.fiftyPercent&&n/i*100>50&&(this.props.onFiftyPercent(),t.fiftyPercent=!0,o=!0),!t.seventyFivePercent&&n/i*100>75&&(this.props.onSeventyFivePercent(),t.seventyFivePercent=!0,o=!0),!t.ninetyFivePercent&&n/i*100>95&&(this.props.onNinetyFivePercent(),t.ninetyFivePercent=!0,o=!0),o&&this.setState({hasFired:t})}},84515:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){this.setState({hasFired:{}}),this.props.onVideoLoad(e)}},19090:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){},i={aspectRatio:"inherit",file:"",isAutoPlay:void 0,isMuted:void 0,onAdPlay:n,onAdResume:n,onAdSkipped:n,onAdComplete:n,onEnterFullScreen:n,onExitFullScreen:n,onMute:n,onUnmute:n,onAutoStart:n,onResume:n,onPlay:n,onClose:n,onReady:n,onError:n,onAdPause:n,onPause:n,onVideoLoad:n,onOneHundredPercent:n,onThreeSeconds:n,onTenSeconds:n,onThirtySeconds:n,onTwentyFivePercent:n,onFiftyPercent:n,onSeventyFivePercent:n,onNinetyFivePercent:n,onTime:n,onBuffer:n,onBufferChange:n,playlist:"",useMultiplePlayerScripts:!1};t.default=i},53817:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n=e.onload||function(){};return function(){n(),t()}}},4080:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=function(e){var t;if("on"===e.slice(0,2)){var n=e.slice(2),i=(t=n,Array.isArray(t)?t:Array.from(t)),o=i[0],r=i.slice(1);return""+o.toLowerCase()+r.join("")}return null}},87890:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e};t.default=function(e){var t=e.aspectRatio,i=e.customProps,o=void 0===i?{}:i,r=e.file,a=e.generatePrerollUrl,s=e.image,l=e.isAutoPlay,u=e.isMuted,c=e.licenseKey,d=e.playlist,f=!!a,p={};return c&&(p.key=c),d?p.playlist=d:r&&(p.file=r),t&&"inherit"!==t&&(p.aspectratio=t),f&&(p.advertising={client:"googima",admessage:"Ad \u2014 xxs left",autoplayadsmuted:!0}),"undefined"!==typeof l&&(p.autostart=!!l),"undefined"!==typeof u&&(p.mute=!!u),s&&(p.image=s),n(p,o)}},7512:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i,o=n(4080),r=(i=o)&&i.__esModule?i:{default:i};t.default=function(e){var t=e.component,n=e.player,i=e.playerOpts;n.setup(i);var o={};Object.keys(t.props).forEach((function(e){var n=(0,r.default)(e);n&&(o[n]=t.props[e])})),o.adPlay=t.eventHandlers.onAdPlay,o.beforeComplete=t.props.onOneHundredPercent,o.beforePlay=function(e){t.eventHandlers.onBeforePlay(e,n)},o.fullscreen=t.eventHandlers.onFullScreen,o.mute=t.eventHandlers.onMute,o.play=t.eventHandlers.onPlay,o.playlistItem=t.eventHandlers.onVideoLoad,o.time=t.eventHandlers.onTime,Object.keys(o).forEach((function(e){n.on(e,o[e])}))}},12876:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.context,n=e.onLoadCallback,i=e.scriptSrc,o=e.uniqueScriptId,r=t.createElement("script");r.id=o,r.src=i,r.onload=n,t.head.appendChild(r)}},40648:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n=t.jwplayer&&t.jwplayer(e);n&&n.remove()}},57668:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=function(e){var t=e.context,n=e.playerId,i=t.__JW_PLAYER_CONFIGS__=t.__JW_PLAYER_CONFIGS__||{},o=i[n];o?t.jwplayer.defaults=o:i[n]=t.jwplayer.defaults}},84606:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i,o=n(45697),r=(i=o)&&i.__esModule?i:{default:i};var a={aspectRatio:r.default.oneOf(["inherit","1:1","16:9"]),className:r.default.string,customProps:r.default.object,file:r.default.string,generatePrerollUrl:r.default.func,image:r.default.string,isAutoPlay:r.default.bool,isMuted:r.default.bool,licenseKey:r.default.string,onAdPause:r.default.func,onAdPlay:r.default.func,onAdResume:r.default.func,onAdSkipped:r.default.func,onAdComplete:r.default.func,onAutoStart:r.default.func,onEnterFullScreen:r.default.func,onError:r.default.func,onExitFullScreen:r.default.func,onFiftyPercent:r.default.func,onMute:r.default.func,onNinetyFivePercent:r.default.func,onOneHundredPercent:r.default.func,onPause:r.default.func,onPlay:r.default.func,onReady:r.default.func,onResume:r.default.func,onSeventyFivePercent:r.default.func,onTenSeconds:r.default.func,onThirtySeconds:r.default.func,onThreeSeconds:r.default.func,onTwentyFivePercent:r.default.func,onUnmute:r.default.func,onVideoLoad:r.default.func,onBuffer:r.default.func,onBufferChange:r.default.func,playerId:r.default.string.isRequired,playerScript:r.default.string.isRequired,playlist:r.default.oneOfType([r.default.string,r.default.array]),useMultiplePlayerScripts:r.default.bool};t.default=a},47320:function(e,t,n){"use strict";var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),o=n(67294),r=m(o),a=m(n(69590)),s=m(n(42804)),l=m(n(53817)),u=m(n(87890)),c=m(n(7512)),d=m(n(12876)),f=m(n(40648)),p=m(n(57668)),h=m(n(19090)),y=m(n(84606));function m(e){return e&&e.__esModule?e:{default:e}}var v=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={adHasPlayed:!1,hasPlayed:!1,hasFired:{}},n.eventHandlers=(0,s.default)(n),n.uniqueScriptId="jw-player-script",e.useMultiplePlayerScripts&&(n.uniqueScriptId+="-"+e.playerId),n.videoRef=null,n._initialize=n._initialize.bind(n),n._setVideoRef=n._setVideoRef.bind(n),n}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),i(t,[{key:"componentDidMount",value:function(){var e=!!window.jwplayer,t=document.getElementById(this.uniqueScriptId),n=this.props.useMultiplePlayerScripts;n||!e?n&&t?this._initialize():t?t.onload=(0,l.default)(t,this._initialize):(0,d.default)({context:document,onLoadCallback:this._initialize,scriptSrc:this.props.playerScript,uniqueScriptId:this.uniqueScriptId}):this._initialize()}},{key:"shouldComponentUpdate",value:function(e){var t=this.props.file!==e.file,n=!(0,a.default)(this.props.playlist,e.playlist);return t||n}},{key:"componentDidUpdate",value:function(){window.jwplayer&&window.jwplayer(this.videoRef)&&this._initialize()}},{key:"componentWillUnmount",value:function(){(0,f.default)(this.videoRef,window)}},{key:"_initialize",value:function(){var e=this.props,t=e.playerId;e.useMultiplePlayerScripts&&(0,p.default)({context:window,playerId:t});var n=window.jwplayer(this.videoRef);if(n){var i=(0,u.default)(this.props);(0,c.default)({component:this,player:n,playerOpts:i})}}},{key:"_setVideoRef",value:function(e){this.videoRef=e}},{key:"render",value:function(){return r.default.createElement("div",{className:this.props.className},r.default.createElement("div",{id:this.props.playerId,ref:this._setVideoRef}))}}]),t}(o.Component);v.defaultProps=h.default,v.displayName="ReactJWPlayer",v.propTypes=y.default,t.Z=v}},function(e){e.O(0,[720,260,774,888,179],(function(){return t=71425,e(e.s=t);var t}));var t=e.O();_N_E=t}]);