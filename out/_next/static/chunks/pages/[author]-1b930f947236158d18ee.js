(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[446],{84110:function(e){e.exports=function(){"use strict";return function(e,t,n){e=e||{};var i=t.prototype,o={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function r(e,t,n,o){return i.fromToBase(e,t,n,o)}n.en.relativeTime=o,i.fromToBase=function(t,i,r,a,s){for(var u,l,d,f=r.$locale().relativeTime||o,c=e.thresholds||[{l:"s",r:44,d:"second"},{l:"m",r:89},{l:"mm",r:44,d:"minute"},{l:"h",r:89},{l:"hh",r:21,d:"hour"},{l:"d",r:35},{l:"dd",r:25,d:"day"},{l:"M",r:45},{l:"MM",r:10,d:"month"},{l:"y",r:17},{l:"yy",d:"year"}],p=c.length,y=0;y<p;y+=1){var h=c[y];h.d&&(u=a?n(t).diff(r,h.d,!0):r.diff(t,h.d,!0));var v=(e.rounding||Math.round)(Math.abs(u));if(d=u>0,v<=h.r||!h.r){v<=1&&y>0&&(h=c[y-1]);var m=f[h.l];s&&(v=s(""+v)),l="string"==typeof m?m.replace("%d",v):m(v,i,h.l,d);break}}if(i)return l;var P=d?f.future:f.past;return"function"==typeof P?P(l):P.replace("%s",l)},i.to=function(e,t){return r(e,t,this,!0)},i.from=function(e,t){return r(e,t,this)};var a=function(e){return e.$u?n.utc():n()};i.toNow=function(e){return this.to(a(this),e)},i.fromNow=function(e){return this.from(a(this),e)}}}()},97076:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return S}});var i=n(9669),o=n.n(i),r=n(11163),a=n(67294),s=n(2804),u=n(63569),l=n(45051),d=n(43196),f=n(87893),c=n(25675),p=n(83789),y=n(47320),h=n(60590),v=n.n(h),m=n(27484),P=n.n(m),_=n(84110),b=n.n(_),g=n(85893);P().extend(b()),P()().format();var w=function(e){var t=e.post,n=(0,a.useState)([]),i=n[0],o=n[1],r=(0,a.useState)(""),s=r[0],u=r[1],l=(0,a.useState)(null),d=l[0],f=l[1],c=(0,a.useState)(null),h=c[0],m=c[1],P=(0,a.useState)(!1),_=P[0],b=P[1];return(0,a.useEffect)((function(){v().api.getContent(t.author,t.permlink,(function(e,t){e&&console.log(e),f(t)}))}),[]),(0,a.useEffect)((function(){if(d){var e=JSON.parse(d.json_metadata);m(e)}}),[d]),(0,a.useEffect)((function(){var e=h;if(e)if(e.app.includes("3speak")){b(!0);var t="https://ipfs.io/ipfs/"+e.video.info.ipfs,n="https://ipfs.io/ipfs/"+e.video.info.ipfsThumbnail;n&&t&&o((function(e){return[].concat((0,p.Z)(e),[{file:t,image:n}])}))}else{var i;"https"!==(i=e.image&&Array.isArray(e.image)?e.image[0]:"string"==typeof e.image?e.image:e.Hash360&&(e.Hash360,1)?"https://ipfs.io/ipfs/".concat(e.Hash360):"https://www.dlux.io/img/dlux-sdk.png").substr(0,5)&&(i="https://www.dlux.io/img/dlux-sdk.png"),u(i)}}),[h]),h&&(0,g.jsxs)("div",{className:"border-2 text-white p-3 rounded-xl h-full border-gray-800 bg-gray-600 w-full flex flex-col items-center justify-center",children:[_?(0,g.jsx)("div",{className:"w-full flex justify-center",children:(0,g.jsx)(y.Z,{className:"rounded-xl w-4/5",playerId:"my-unique-id",playerScript:"https://cdn.jwplayer.com/libraries/HT7Dts3H.js",playlist:i})}):(0,g.jsx)("div",{className:"flex justify-center w-full max-h-72",children:(0,g.jsx)("img",{src:s,className:"w-4/5",alt:"appPhoto"})}),(0,g.jsx)("h1",{className:"text-center text-xl my-2 max-w-md font-bold",children:d.root_title})]})},S=function(){var e=new f.Client(["https://api.hive.blog","https://api.hivekings.com","https://anyx.io","https://api.openhive.network"]),t=(0,r.useRouter)().query.author,n=(0,a.useState)(""),i=n[0],p=n[1],y=(0,a.useState)([]),h=y[0],v=y[1],m=(0,a.useState)(null),P=m[0],_=m[1],b=(0,a.useState)(""),S=b[0],j=b[1],x=(0,s.sJ)(u.H3);return(0,a.useEffect)((function(){t&&"@"===t.substr(0,1)?p(t.substr(1,t.length)):p(t)}),[t]),(0,a.useEffect)((function(){if(i){o().get("".concat(x,"api/pfp/").concat(i)).then((function(e){var t=e.data;j(t.result[0])}));var t={tag:i,limit:10};e.database.getDiscussions("blog",t).then((function(e){v(e)})),e.database.getAccounts([i]).then((function(e){e[0]&&(console.log(JSON.parse(e[0].posting_json_metadata).profile),_(JSON.parse(e[0].posting_json_metadata).profile))}))}}),[i]),(0,a.useEffect)((function(){if(S){var e,t,n=null===(e=S.pfp)||void 0===e?void 0:e.split(":"),i=null===(t=S.set)||void 0===t?void 0:t.s;S.pfp!==l.$8&&n&&i&&(0,d.sv)({script:i,uid:n})}}),[S]),(0,g.jsxs)("div",{className:"flex flex-col text-white my-10 mx-10",children:[(0,g.jsx)("div",{className:"flex flex-col items-center w-full",children:(0,g.jsxs)("div",{className:"relative overflow-hidden border-2 text-white p-5 rounded-xl border-gray-800 ".concat(null!==P&&void 0!==P&&P.cover_image?"bg-black":"bg-gray-600"," flex flex-col items-start w-full"),children:[(0,g.jsxs)("div",{className:"flex flex-col items-center justify-center z-10",children:[(0,g.jsx)("div",{className:"w-52 flex justify-center",id:"account-picture",children:(0,g.jsx)(c.default,{height:120,width:120,src:l.$8,alt:"profile"})}),(0,g.jsx)("h1",{className:"text-2xl mt-2",children:t})]}),P&&P.cover_image&&(0,g.jsx)("img",{className:"absolute top-0 left-0 z-0 w-full pb-1 opacity-40",src:P.cover_image,width:120,height:120,alt:"coverPhoto"})]})}),(0,g.jsxs)("div",{className:"text-center",children:[(0,g.jsx)("h1",{className:"my-3 font-bold text-xl",children:"BLOG"}),(0,g.jsx)("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-5 w-full my-4",children:h.map((function(e){return(0,g.jsx)(w,{post:e},e.permlink)}))})]})]})}},18977:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/[author]",function(){return n(97076)}])},42804:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=d(n(34171)),o=d(n(96359)),r=d(n(99569)),a=d(n(98886)),s=d(n(78454)),u=d(n(56565)),l=d(n(84515));function d(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){return{onAdPlay:i.default.bind(e),onBeforePlay:o.default.bind(e),onFullScreen:r.default.bind(e),onMute:a.default.bind(e),onPlay:s.default.bind(e),onTime:u.default.bind(e),onVideoLoad:l.default.bind(e)}}},34171:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){this.state.adHasPlayed?this.props.onAdResume(e):(this.props.onAdPlay(e),this.setState({adHasPlayed:!0}))}},96359:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n=t.getPlaylistItem();this.state.hasPlayed||this.state.adHasPlayed||"function"!==typeof this.props.generatePrerollUrl||t.playAd(this.props.generatePrerollUrl(n))}},99569:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){e.fullscreen?this.props.onEnterFullScreen(e):this.props.onExitFullScreen(e)}},98886:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){e.mute?this.props.onMute(e):this.props.onUnmute(e)}},78454:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){"autostart"===e.playReason?(this.setState({hasPlayed:!0}),this.props.onAutoStart(e)):!this.state.hasPlayed||"buffering"!==e.oldstate&&"paused"!==e.oldstate?(this.props.onPlay(e),this.setState({hasPlayed:!0})):this.props.onResume(e)}},56565:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=this.state.hasFired,n=e.position,i=e.duration,o=!1;this.props.onTime(e),!t.threeSeconds&&n>3&&(this.props.onThreeSeconds(),t.threeSeconds=!0,o=!0),!t.tenSeconds&&n>10&&(this.props.onTenSeconds(),t.tenSeconds=!0,o=!0),!t.thirtySeconds&&n>30&&(this.props.onThirtySeconds(),t.thirtySeconds=!0,o=!0),!t.twentyFivePercent&&n/i*100>25&&(this.props.onTwentyFivePercent(),t.twentyFivePercent=!0,o=!0),!t.fiftyPercent&&n/i*100>50&&(this.props.onFiftyPercent(),t.fiftyPercent=!0,o=!0),!t.seventyFivePercent&&n/i*100>75&&(this.props.onSeventyFivePercent(),t.seventyFivePercent=!0,o=!0),!t.ninetyFivePercent&&n/i*100>95&&(this.props.onNinetyFivePercent(),t.ninetyFivePercent=!0,o=!0),o&&this.setState({hasFired:t})}},84515:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){this.setState({hasFired:{}}),this.props.onVideoLoad(e)}},19090:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){},i={aspectRatio:"inherit",file:"",isAutoPlay:void 0,isMuted:void 0,onAdPlay:n,onAdResume:n,onAdSkipped:n,onAdComplete:n,onEnterFullScreen:n,onExitFullScreen:n,onMute:n,onUnmute:n,onAutoStart:n,onResume:n,onPlay:n,onClose:n,onReady:n,onError:n,onAdPause:n,onPause:n,onVideoLoad:n,onOneHundredPercent:n,onThreeSeconds:n,onTenSeconds:n,onThirtySeconds:n,onTwentyFivePercent:n,onFiftyPercent:n,onSeventyFivePercent:n,onNinetyFivePercent:n,onTime:n,onBuffer:n,onBufferChange:n,playlist:"",useMultiplePlayerScripts:!1};t.default=i},53817:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n=e.onload||function(){};return function(){n(),t()}}},4080:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=function(e){var t;if("on"===e.slice(0,2)){var n=e.slice(2),i=(t=n,Array.isArray(t)?t:Array.from(t)),o=i[0],r=i.slice(1);return""+o.toLowerCase()+r.join("")}return null}},87890:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e};t.default=function(e){var t=e.aspectRatio,i=e.customProps,o=void 0===i?{}:i,r=e.file,a=e.generatePrerollUrl,s=e.image,u=e.isAutoPlay,l=e.isMuted,d=e.licenseKey,f=e.playlist,c=!!a,p={};return d&&(p.key=d),f?p.playlist=f:r&&(p.file=r),t&&"inherit"!==t&&(p.aspectratio=t),c&&(p.advertising={client:"googima",admessage:"Ad \u2014 xxs left",autoplayadsmuted:!0}),"undefined"!==typeof u&&(p.autostart=!!u),"undefined"!==typeof l&&(p.mute=!!l),s&&(p.image=s),n(p,o)}},7512:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i,o=n(4080),r=(i=o)&&i.__esModule?i:{default:i};t.default=function(e){var t=e.component,n=e.player,i=e.playerOpts;n.setup(i);var o={};Object.keys(t.props).forEach((function(e){var n=(0,r.default)(e);n&&(o[n]=t.props[e])})),o.adPlay=t.eventHandlers.onAdPlay,o.beforeComplete=t.props.onOneHundredPercent,o.beforePlay=function(e){t.eventHandlers.onBeforePlay(e,n)},o.fullscreen=t.eventHandlers.onFullScreen,o.mute=t.eventHandlers.onMute,o.play=t.eventHandlers.onPlay,o.playlistItem=t.eventHandlers.onVideoLoad,o.time=t.eventHandlers.onTime,Object.keys(o).forEach((function(e){n.on(e,o[e])}))}},12876:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.context,n=e.onLoadCallback,i=e.scriptSrc,o=e.uniqueScriptId,r=t.createElement("script");r.id=o,r.src=i,r.onload=n,t.head.appendChild(r)}},40648:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n=t.jwplayer&&t.jwplayer(e);n&&n.remove()}},57668:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=function(e){var t=e.context,n=e.playerId,i=t.__JW_PLAYER_CONFIGS__=t.__JW_PLAYER_CONFIGS__||{},o=i[n];o?t.jwplayer.defaults=o:i[n]=t.jwplayer.defaults}},84606:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i,o=n(45697),r=(i=o)&&i.__esModule?i:{default:i};var a={aspectRatio:r.default.oneOf(["inherit","1:1","16:9"]),className:r.default.string,customProps:r.default.object,file:r.default.string,generatePrerollUrl:r.default.func,image:r.default.string,isAutoPlay:r.default.bool,isMuted:r.default.bool,licenseKey:r.default.string,onAdPause:r.default.func,onAdPlay:r.default.func,onAdResume:r.default.func,onAdSkipped:r.default.func,onAdComplete:r.default.func,onAutoStart:r.default.func,onEnterFullScreen:r.default.func,onError:r.default.func,onExitFullScreen:r.default.func,onFiftyPercent:r.default.func,onMute:r.default.func,onNinetyFivePercent:r.default.func,onOneHundredPercent:r.default.func,onPause:r.default.func,onPlay:r.default.func,onReady:r.default.func,onResume:r.default.func,onSeventyFivePercent:r.default.func,onTenSeconds:r.default.func,onThirtySeconds:r.default.func,onThreeSeconds:r.default.func,onTwentyFivePercent:r.default.func,onUnmute:r.default.func,onVideoLoad:r.default.func,onBuffer:r.default.func,onBufferChange:r.default.func,playerId:r.default.string.isRequired,playerScript:r.default.string.isRequired,playlist:r.default.oneOfType([r.default.string,r.default.array]),useMultiplePlayerScripts:r.default.bool};t.default=a},47320:function(e,t,n){"use strict";var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),o=n(67294),r=v(o),a=v(n(69590)),s=v(n(42804)),u=v(n(53817)),l=v(n(87890)),d=v(n(7512)),f=v(n(12876)),c=v(n(40648)),p=v(n(57668)),y=v(n(19090)),h=v(n(84606));function v(e){return e&&e.__esModule?e:{default:e}}var m=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={adHasPlayed:!1,hasPlayed:!1,hasFired:{}},n.eventHandlers=(0,s.default)(n),n.uniqueScriptId="jw-player-script",e.useMultiplePlayerScripts&&(n.uniqueScriptId+="-"+e.playerId),n.videoRef=null,n._initialize=n._initialize.bind(n),n._setVideoRef=n._setVideoRef.bind(n),n}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),i(t,[{key:"componentDidMount",value:function(){var e=!!window.jwplayer,t=document.getElementById(this.uniqueScriptId),n=this.props.useMultiplePlayerScripts;n||!e?n&&t?this._initialize():t?t.onload=(0,u.default)(t,this._initialize):(0,f.default)({context:document,onLoadCallback:this._initialize,scriptSrc:this.props.playerScript,uniqueScriptId:this.uniqueScriptId}):this._initialize()}},{key:"shouldComponentUpdate",value:function(e){var t=this.props.file!==e.file,n=!(0,a.default)(this.props.playlist,e.playlist);return t||n}},{key:"componentDidUpdate",value:function(){window.jwplayer&&window.jwplayer(this.videoRef)&&this._initialize()}},{key:"componentWillUnmount",value:function(){(0,c.default)(this.videoRef,window)}},{key:"_initialize",value:function(){var e=this.props,t=e.playerId;e.useMultiplePlayerScripts&&(0,p.default)({context:window,playerId:t});var n=window.jwplayer(this.videoRef);if(n){var i=(0,l.default)(this.props);(0,d.default)({component:this,player:n,playerOpts:i})}}},{key:"_setVideoRef",value:function(e){this.videoRef=e}},{key:"render",value:function(){return r.default.createElement("div",{className:this.props.className},r.default.createElement("div",{id:this.props.playerId,ref:this._setVideoRef}))}}]),t}(o.Component);m.defaultProps=y.default,m.displayName="ReactJWPlayer",m.propTypes=h.default,t.Z=m}},function(e){e.O(0,[720,774,888,179],(function(){return t=18977,e(e.s=t);var t}));var t=e.O();_N_E=t}]);