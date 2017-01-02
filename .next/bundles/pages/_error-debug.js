module.exports=webpackJsonp([0],{0:function(e,r,t){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(r,"__esModule",{value:!0});var a=t(1),o=n(a),l=t(27),f=n(l),s=t(28),u=n(s),i=t(32),c=n(i),d=t(79),g=n(d),p=t(87),m=n(p),y=t(88),b=n(y),h=t(89),v=n(h),k=t(90),w=n(k),x=function(e){function r(){return(0,f.default)(this,r),(0,c.default)(this,(r.__proto__||(0,o.default)(r)).apply(this,arguments))}return(0,g.default)(r,e),(0,u.default)(r,[{key:"render",value:function(){var e=this.props,r=e.name,t=e.message,n=e.stack,a=e.path;return m.default.createElement("div",{className:_.errorDebug},m.default.createElement(v.default,null,m.default.createElement("style",{dangerouslySetInnerHTML:{__html:"\n          body {\n            background: #a6004c;\n            margin: 0;\n          }\n        "}})),a?m.default.createElement("div",{className:_.heading},"Error in ",a):null,"ModuleBuildError"===r?m.default.createElement("pre",{className:_.message,dangerouslySetInnerHTML:{__html:(0,b.default)(E(t))}}):m.default.createElement("pre",{className:_.message},n))}}],[{key:"getInitialProps",value:function(e){var r=e.err,t=r.name,n=r.message,a=r.stack,o=r.module;return{name:t,message:n,stack:a,path:o?o.rawRequest:null}}}]),r}(m.default.Component);r.default=x;var E=function(e){return e.replace(/</g,"&lt;").replace(/>/g,"&gt;")},_={body:(0,w.default)({background:"#a6004c",margin:0}),errorDebug:(0,w.default)({height:"100vh",padding:"16px",boxSizing:"border-box",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}),message:(0,w.default)({fontFamily:'"SF Mono", "Roboto Mono", "Fira Mono", menlo-regular, monospace',fontSize:"10px",color:"#fbe7f1",margin:0,whiteSpace:"pre-wrap",wordWrap:"break-word"}),heading:(0,w.default)({fontFamily:'-apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", "Fira Sans", Avenir, "Helvetica Neue", "Lucida Grande", sans-serif',fontSize:"13px",fontWeight:"bold",color:"#ff84bf",marginBottom:"20px"})};b.default.setColors({reset:["fff","a6004c"],darkgrey:"e54590",yellow:"ee8cbb",green:"f2a2c7",magenta:"fbe7f1",blue:"fff",cyan:"ef8bb9",red:"fff"})},88:function(e,r){"use strict";function t(e){if(!a.test(e))return e;var r=[],t=e.replace(/\033\[(\d+)*m/g,function(e,t){var n=f[t];if(n)return~r.indexOf(t)?(r.pop(),"</span>"):(r.push(t),"<"===n[0]?n:'<span style="'+n+';">');var a=s[t];return a?(r.pop(),a):""}),n=r.length;return n>0&&(t+=Array(n+1).join("</span>")),t}function n(e){f[0]="font-weight:normal;opacity:1;color:#"+e.reset[0]+";background:#"+e.reset[1],f[7]="color:#"+e.reset[1]+";background:#"+e.reset[0],f[90]="color:#"+e.darkgrey;for(var r in l){var t=l[r],n=e[t]||"000";f[r]="color:#"+n,r=parseInt(r),f[(r+10).toString()]="background:#"+n}}e.exports=t;var a=/(?:(?:\u001b\[)|\u009b)(?:(?:[0-9]{1,3})?(?:(?:;[0-9]{0,3})*)?[A-M|f-m])|\u001b[A-M]/,o={reset:["fff","000"],black:"000",red:"ff0000",green:"209805",yellow:"e8bf03",blue:"0000ff",magenta:"ff00ff",cyan:"00ffee",lightgrey:"f0f0f0",darkgrey:"888"},l={30:"black",31:"red",32:"green",33:"yellow",34:"blue",35:"magenta",36:"cyan",37:"lightgrey"},f={1:"font-weight:bold",2:"opacity:0.8",3:"<i>",4:"<u>",8:"display:none",9:"<del>"},s={23:"</i>",24:"</u>",29:"</del>"};[0,21,22,27,28,39,49].forEach(function(e){s[e]="</span>"}),t.setColors=function(e){if("object"!=typeof e)throw new Error("`colors` parameter must be an Object.");var r={};for(var t in o){var a=e.hasOwnProperty(t)?e[t]:null;if(a){if("reset"===t){if("string"==typeof a&&(a=[a]),!Array.isArray(a)||0===a.length||a.some(function(e){return"string"!=typeof e}))throw new Error("The value of `"+t+"` property must be an Array and each item could only be a hex string, e.g.: FF0000");var l=o[t];a[0]||(a[0]=l[0]),1!==a.length&&a[1]||(a=[a[0]],a.push(l[1])),a=a.slice(0,2)}else if("string"!=typeof a)throw new Error("The value of `"+t+"` property must be a hex string, e.g.: FF0000");r[t]=a}else r[t]=o[t]}n(r)},t.reset=function(){n(o)},t.tags={},Object.defineProperty?(Object.defineProperty(t.tags,"open",{get:function(){return f}}),Object.defineProperty(t.tags,"close",{get:function(){return s}})):(t.tags.open=f,t.tags.close=s),t.reset()},89:function(e,r){e.exports=require("next/head")},90:function(e,r){e.exports=require("next/css")}});