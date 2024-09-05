/*! For license information please see tool.js.LICENSE.txt */
(()=>{var t,e={268:(t,e,r)=>{Nova.booting((function(t){Nova.inertia("NovaTwoFactor.Register",r(639).Z),Nova.inertia("NovaTwoFactor.Settings",r(370).Z),Nova.inertia("NovaTwoFactor.Prompt",r(179).Z),Nova.inertia("NovaTwoFactor.Clear",r(969).Z)}))},762:()=>{},744:(t,e)=>{"use strict";e.Z=(t,e)=>{const r=t.__vccOpts||t;for(const[t,o]of e)r[t]=o;return r}},969:(t,e,r)=>{"use strict";r.d(e,{Z:()=>f});var o=r(311),n={class:"p-4"},a={class:"mb-3"},i={class:"mb-6"},c={class:"block mb-2",for:"password"};function s(t){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},s(t)}function l(){l=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},n=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",i=o.toStringTag||"@@toStringTag";function c(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(t){c=function(t,e,r){return t[e]=r}}function u(t,e,r,o){var n=e&&e.prototype instanceof p?e:p,a=Object.create(n.prototype),i=new E(o||[]);return a._invoke=function(t,e,r){var o="suspendedStart";return function(n,a){if("executing"===o)throw new Error("Generator is already running");if("completed"===o){if("throw"===n)throw a;return C()}for(r.method=n,r.arg=a;;){var i=r.delegate;if(i){var c=N(i,r);if(c){if(c===f)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===o)throw o="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);o="executing";var s=d(t,e,r);if("normal"===s.type){if(o=r.done?"completed":"suspendedYield",s.arg===f)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(o="completed",r.method="throw",r.arg=s.arg)}}}(t,r,i),a}function d(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=u;var f={};function p(){}function h(){}function m(){}var v={};c(v,n,(function(){return this}));var w=Object.getPrototypeOf,g=w&&w(w(k([])));g&&g!==e&&r.call(g,n)&&(v=g);var y=m.prototype=p.prototype=Object.create(v);function b(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function x(t,e){function o(n,a,i,c){var l=d(t[n],t,a);if("throw"!==l.type){var u=l.arg,f=u.value;return f&&"object"==s(f)&&r.call(f,"__await")?e.resolve(f.__await).then((function(t){o("next",t,i,c)}),(function(t){o("throw",t,i,c)})):e.resolve(f).then((function(t){u.value=t,i(u)}),(function(t){return o("throw",t,i,c)}))}c(l.arg)}var n;this._invoke=function(t,r){function a(){return new e((function(e,n){o(t,r,e,n)}))}return n=n?n.then(a,a):a()}}function N(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,N(t,e),"throw"===e.method))return f;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return f}var o=d(r,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,f;var n=o.arg;return n?n.done?(e[t.resultName]=n.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,f):n:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,f)}function _(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function V(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function E(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(_,this),this.reset(!0)}function k(t){if(t){var e=t[n];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function e(){for(;++o<t.length;)if(r.call(t,o))return e.value=t[o],e.done=!1,e;return e.value=void 0,e.done=!0,e};return a.next=a}}return{next:C}}function C(){return{value:void 0,done:!0}}return h.prototype=m,c(y,"constructor",m),c(m,"constructor",h),h.displayName=c(m,i,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===h||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,c(t,i,"GeneratorFunction")),t.prototype=Object.create(y),t},t.awrap=function(t){return{__await:t}},b(x.prototype),c(x.prototype,a,(function(){return this})),t.AsyncIterator=x,t.async=function(e,r,o,n,a){void 0===a&&(a=Promise);var i=new x(u(e,r,o,n),a);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},b(y),c(y,i,"Generator"),c(y,n,(function(){return this})),c(y,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var o=e.pop();if(o in t)return r.value=o,r.done=!1,r}return r.done=!0,r}},t.values=k,E.prototype={constructor:E,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(V),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function o(r,o){return i.type="throw",i.arg=t,e.next=r,o&&(e.method="next",e.arg=void 0),!!o}for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n],i=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var c=r.call(a,"catchLoc"),s=r.call(a,"finallyLoc");if(c&&s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var o=this.tryEntries.length-1;o>=0;--o){var n=this.tryEntries[o];if(n.tryLoc<=this.prev&&r.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var a=n;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,f):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),f},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),V(r),f}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var o=r.completion;if("throw"===o.type){var n=o.arg;V(r)}return n}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:k(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),f}},t}function u(t,e,r,o,n,a,i){try{var c=t[a](i),s=c.value}catch(t){return void r(t)}c.done?e(s):Promise.resolve(s).then(o,n)}const d={data:function(){return{form:Nova.form({password:null})}},mounted:function(){var t=this;this.$nextTick((function(){return t.$refs.password.focus()}))},methods:{auth:function(){var t,e=this;return(t=l().mark((function t(){var r,o;return l().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.form.post("/nova-vendor/nova-two-factor/clear");case 2:r=t.sent,o=r.message,Nova.success(o),Nova.visit("/nova-two-factor");case 6:case"end":return t.stop()}}),t)})),function(){var e=this,r=arguments;return new Promise((function(o,n){var a=t.apply(e,r);function i(t){u(a,o,n,i,c,"next",t)}function c(t){u(a,o,n,i,c,"throw",t)}i(void 0)}))})()}}};const f=(0,r(744).Z)(d,[["render",function(t,e,r,s,l,u){var d=(0,o.resolveComponent)("heading"),f=(0,o.resolveComponent)("HelpText"),p=(0,o.resolveComponent)("DefaultButton"),h=(0,o.resolveComponent)("Card"),m=(0,o.resolveComponent)("LoadingView");return(0,o.openBlock)(),(0,o.createBlock)(m,{loading:!1},{default:(0,o.withCtx)((function(){return[(0,o.createVNode)(d,{class:"mb-6"},{default:(0,o.withCtx)((function(){return[(0,o.createTextVNode)((0,o.toDisplayString)(t.__("Two factor auth (Google 2FA)")),1)]})),_:1}),(0,o.createVNode)(h,null,{default:(0,o.withCtx)((function(){return[(0,o.createElementVNode)("div",n,[(0,o.createElementVNode)("p",a,(0,o.toDisplayString)(t.__("By clearing these settings you can re-register Two FA on your device")),1),(0,o.createElementVNode)("form",{onSubmit:e[1]||(e[1]=(0,o.withModifiers)((function(t){return u.auth()}),["prevent"])),class:"max-w-[25rem]"},[(0,o.createElementVNode)("div",i,[(0,o.createElementVNode)("label",c,(0,o.toDisplayString)(t.__("Enter your password")),1),(0,o.withDirectives)((0,o.createElementVNode)("input",{"onUpdate:modelValue":e[0]||(e[0]=function(t){return l.form.password=t}),class:"form-control form-input form-input-bordered w-full",id:"password",type:"password",name:"password",ref:"password",autofocus:"",required:""},null,512),[[o.vModelText,l.form.password]]),l.form.errors.has("password")?((0,o.openBlock)(),(0,o.createBlock)(f,{key:0,class:"mt-2 text-red-500"},{default:(0,o.withCtx)((function(){return[(0,o.createTextVNode)((0,o.toDisplayString)(l.form.errors.first("password")),1)]})),_:1})):(0,o.createCommentVNode)("",!0)]),(0,o.createVNode)(p,{class:"flex justify-center",type:"submit"},{default:(0,o.withCtx)((function(){return[(0,o.createElementVNode)("span",null,(0,o.toDisplayString)(t.__("Clear")),1)]})),_:1})],32)])]})),_:1})]})),_:1})}]])},179:(t,e,r)=>{"use strict";r.d(e,{Z:()=>s});var o=r(311),n={class:"text-2xl text-center font-normal mb-6 text-90"},a={class:"mb-6"},i={class:"block mb-2",for:"otp"};const c={props:["referer"],data:function(){return{otp:"",error:null}},mounted:function(){var t=this;this.$nextTick((function(){return t.$refs.otp.focus()}))},methods:{auth:function(){var t=this,e=this;Nova.request().post("/nova-vendor/nova-two-factor/validatePrompt",{one_time_password:this.otp}).then((function(t){window.location.href=e.referer})).catch((function(e){t.error=e.response.data.message}))},autoSubmit:function(){6===this.otp.length&&this.auth()}}};const s=(0,r(744).Z)(c,[["render",function(t,e,r,c,s,l){var u=(0,o.resolveComponent)("DividerLine"),d=(0,o.resolveComponent)("HelpText"),f=(0,o.resolveComponent)("DefaultButton");return(0,o.openBlock)(),(0,o.createElementBlock)("div",null,[(0,o.createElementVNode)("form",{onSubmit:e[2]||(e[2]=(0,o.withModifiers)((function(t){return l.auth()}),["prevent"])),class:"bg-white dark:bg-gray-800 shadow rounded-lg p-8 max-w-[25rem] mx-auto"},[(0,o.createElementVNode)("h2",n,(0,o.toDisplayString)(t.__("Two factor authentication")),1),(0,o.createVNode)(u),(0,o.createElementVNode)("div",a,[(0,o.createElementVNode)("label",i,(0,o.toDisplayString)(t.__("One time password")),1),(0,o.withDirectives)((0,o.createElementVNode)("input",{"onUpdate:modelValue":e[0]||(e[0]=function(t){return s.otp=t}),onKeyup:e[1]||(e[1]=function(t){return l.autoSubmit()}),class:"form-control form-input form-input-bordered w-full",maxLength:"6",id:"otp",type:"text",name:"otp",ref:"otp",autofocus:"",required:""},null,544),[[o.vModelText,s.otp]]),s.error?((0,o.openBlock)(),(0,o.createBlock)(d,{key:0,class:"mt-2 text-red-500"},{default:(0,o.withCtx)((function(){return[(0,o.createTextVNode)((0,o.toDisplayString)(s.error),1)]})),_:1})):(0,o.createCommentVNode)("",!0)]),(0,o.createVNode)(f,{class:"w-full flex justify-center",type:"submit"},{default:(0,o.withCtx)((function(){return[(0,o.createElementVNode)("span",null,(0,o.toDisplayString)(t.__("Authenticate")),1)]})),_:1})],32)])}]])},639:(t,e,r)=>{"use strict";r.d(e,{Z:()=>x});var o=r(311),n={class:"tw-grid tw-grid-cols-1 tw-gap-4 p-4"},a={class:""},i={class:"tw-my-2 tw-text-xl"},c={class:"tw-mb-3"},s={class:"tw-bg-gray-100 dark:bg-gray-700 tw-text-gray-800 dark:text-gray-200 tw-text-xs tw-font-semibold tw-mr-2 tw-px-2.5 tw-py-0.5 tw-rounded"},l={class:"no-print tw-my-4 tw-text-md"},u={class:"tw-mb-4 tw-border-dashed tw-border-2 tw-border-light-blue dark:border-gray-500 tw-p-4 tw-rounded-lg tw-text-center tw-bg-gray-50 dark:bg-gray-700"},d={class:"tw-text-xl tw-text-black dark:text-white"},f={class:"tw-flex tw-justify-center tw-items-center"},p=["src"],h=["innerHTML"],m={class:"tw-bg-gray-100 dark:bg-gray-700 tw-text-gray-800 dark:text-gray-200 tw-text-xs tw-font-semibold tw-mr-2 tw-px-2.5 tw-py-0.5 tw-rounded"},v={class:"tw-my-4 tw-text-md"},w=(0,o.createElementVNode)("br",null,null,-1),g=["placeholder"],y=(0,o.createElementVNode)("br",null,null,-1);const b={props:["status","qr_url","recovery","svg"],data:function(){return{form:{},loading:!1}},methods:{confirmOtp:function(){Nova.request().post("/nova-vendor/nova-two-factor/confirm",this.form).then((function(t){Nova.success(t.data.message),Nova.visit(t.data.url)})).catch((function(t){Nova.error(t.response.data.message)}))},autoSubmit:function(){6===this.form.otp.length&&this.confirmOtp()},downloadAsText:function(t,e){var r=document.createElement("a");r.setAttribute("href","data:text/plain;charset=utf-8,"+encodeURIComponent(e)),r.setAttribute("download",t),r.style.display="none",document.body.appendChild(r),r.click(),document.body.removeChild(r)}},computed:{}};const x=(0,r(744).Z)(b,[["render",function(t,e,r,b,x,N){var _=(0,o.resolveComponent)("heading"),V=(0,o.resolveComponent)("DefaultButton"),E=(0,o.resolveComponent)("LoadingCard"),k=(0,o.resolveComponent)("LoadingView");return(0,o.openBlock)(),(0,o.createBlock)(k,{loading:x.loading},{default:(0,o.withCtx)((function(){return[(0,o.createVNode)(_,{class:"mb-6"},{default:(0,o.withCtx)((function(){return[(0,o.createTextVNode)((0,o.toDisplayString)(t.__("Two factor auth (Google 2FA)")),1)]})),_:1}),(0,o.createVNode)(E,{loading:x.loading},{default:(0,o.withCtx)((function(){return[(0,o.createElementVNode)("div",n,[(0,o.createElementVNode)("div",a,[(0,o.createElementVNode)("p",null,(0,o.toDisplayString)(t.__("Two factor authentication (2FA) strengthens access security by requiring two methods (also referred to as factors) to verify your identity. Two factor authentication protects against phishing, social engineering and password brute force attacks and secures your logins from attackers exploiting weak or stolen credentials.")),1),(0,o.createElementVNode)("h3",i,(0,o.toDisplayString)(t.__("Recovery codes")),1),(0,o.createElementVNode)("p",c,(0,o.toDisplayString)(t.__("Recovery code are used to access your account in the event you cannot receive two-factor authentication codes.")),1),(0,o.createElementVNode)("span",s,(0,o.toDisplayString)(t.__("Step 01")),1),(0,o.createElementVNode)("p",l,(0,o.toDisplayString)(t.__("Download, print or copy your recovery code before continuing two-factor authentication setup.")),1),(0,o.createElementVNode)("div",u,[(0,o.createElementVNode)("h2",d,(0,o.toDisplayString)(r.recovery),1),(0,o.createElementVNode)("a",{class:"tw-text-blue-700 dark:text-white",onClick:e[0]||(e[0]=(0,o.withModifiers)((function(t){return N.downloadAsText("recover_code.txt",r.recovery)}),["prevent"])),href:"#"},(0,o.toDisplayString)(t.__("Download")),1),(0,o.createElementVNode)("div",f,[(0,o.createElementVNode)("div",null,[r.svg?((0,o.openBlock)(),(0,o.createElementBlock)("div",{key:1,innerHTML:r.qr_url},null,8,h)):((0,o.openBlock)(),(0,o.createElementBlock)("img",{key:0,width:"250",height:"250",src:r.qr_url,alt:"qr_code",class:"tw-shadow-md tw-p-5 tw-rounded-lg"},null,8,p))])])]),(0,o.createElementVNode)("span",m,(0,o.toDisplayString)(t.__("Step 02")),1),(0,o.createElementVNode)("div",v,[(0,o.createTextVNode)((0,o.toDisplayString)(t.__("Scan this QR code using Google authenticator to setup & enter OTP to activate 2FA"))+" ",1),w,(0,o.withDirectives)((0,o.createElementVNode)("input",{"onUpdate:modelValue":e[1]||(e[1]=function(t){return x.form.otp=t}),onKeyup:e[2]||(e[2]=function(t){return N.autoSubmit()}),placeholder:t.__("Enter OTP here"),type:"text",class:"form-control form-input form-input-bordered tw-my-4"},null,40,g),[[o.vModelText,x.form.otp]]),y,(0,o.createVNode)(V,{disabled:x.loading,onClick:N.confirmOtp,class:"btn btn-default btn-primary"},{default:(0,o.withCtx)((function(){return[(0,o.createTextVNode)((0,o.toDisplayString)(t.__("Activate 2FA")),1)]})),_:1},8,["disabled","onClick"])])])])]})),_:1},8,["loading"])]})),_:1},8,["loading"])}]])},370:(t,e,r)=>{"use strict";r.d(e,{Z:()=>p});var o=r(311),n={class:"tw-grid tw-grid-cols-1 tw-gap-4 p-4"},a={class:""},i={class:"mb-4 text-slate-900 dark:text-slate-400"},c={class:"tw-flex tw-items-center tw-mb-4"},s={for:"op-enable",class:"tw-block tw-ml-2 tw-text-sm tw-font-medium dark:text-slate"},l={class:"tw-flex tw-items-center tw-mb-4"},u={for:"op-disable",class:"tw-block tw-ml-2 tw-text-sm tw-font-medium dark:text-slate"},d=(0,o.createElementVNode)("br",null,null,-1);const f={props:["enabled"],data:function(){return{loading:!1,status:this.enabled}},mounted:function(){},methods:{toggle:function(){Nova.request().post("/nova-vendor/nova-two-factor/toggle",{status:this.status}).then((function(t){Nova.success(t.data.message)}))},resolveNovaPath:function(t){return Nova.url(t)}},computed:{}};const p=(0,r(744).Z)(f,[["render",function(t,e,r,f,p,h){var m=(0,o.resolveComponent)("heading"),v=(0,o.resolveComponent)("DefaultButton"),w=(0,o.resolveComponent)("Link"),g=(0,o.resolveComponent)("LoadingCard"),y=(0,o.resolveComponent)("LoadingView");return(0,o.openBlock)(),(0,o.createBlock)(y,{loading:p.loading},{default:(0,o.withCtx)((function(){return[(0,o.createVNode)(m,{class:"mb-6"},{default:(0,o.withCtx)((function(){return[(0,o.createTextVNode)((0,o.toDisplayString)(t.__("Two factor auth (Google 2FA)")),1)]})),_:1}),(0,o.createVNode)(g,{loading:p.loading},{default:(0,o.withCtx)((function(){return[(0,o.createElementVNode)("div",n,[(0,o.createElementVNode)("div",a,[(0,o.createElementVNode)("div",null,[(0,o.createElementVNode)("p",i,(0,o.toDisplayString)(t.__("Update your two factor security settings")),1),(0,o.createElementVNode)("div",c,[(0,o.withDirectives)((0,o.createElementVNode)("input",{"onUpdate:modelValue":e[0]||(e[0]=function(t){return p.status=t}),value:!0,id:"op-enable",type:"radio",class:"tw-w-4 tw-h-4 tw-border-gray-300 tw-focus:ring-2 tw-focus:ring-blue-300"},null,512),[[o.vModelRadio,p.status]]),(0,o.createElementVNode)("label",s,(0,o.toDisplayString)(t.__("Enable")),1)]),(0,o.createElementVNode)("div",l,[(0,o.withDirectives)((0,o.createElementVNode)("input",{"onUpdate:modelValue":e[1]||(e[1]=function(t){return p.status=t}),value:!1,id:"op-disable",type:"radio",class:"tw-w-4 tw-h-4 tw-border-gray-300 tw-focus:ring-2 tw-focus:ring-blue-300"},null,512),[[o.vModelRadio,p.status]]),(0,o.createElementVNode)("label",u,(0,o.toDisplayString)(t.__("Disable")),1)]),d,(0,o.createVNode)(v,{onClick:h.toggle},{default:(0,o.withCtx)((function(){return[(0,o.createTextVNode)((0,o.toDisplayString)(t.__("Update Settings")),1)]})),_:1},8,["onClick"]),(0,o.createVNode)(w,{class:"ml-3",as:"button",href:h.resolveNovaPath("/nova-two-factor/clear")},{default:(0,o.withCtx)((function(){return[(0,o.createTextVNode)((0,o.toDisplayString)(t.__("Clear settings")),1)]})),_:1},8,["href"])])])])]})),_:1},8,["loading"])]})),_:1},8,["loading"])}]])},311:t=>{"use strict";t.exports=Vue}},r={};function o(t){var n=r[t];if(void 0!==n)return n.exports;var a=r[t]={exports:{}};return e[t](a,a.exports,o),a.exports}o.m=e,t=[],o.O=(e,r,n,a)=>{if(!r){var i=1/0;for(u=0;u<t.length;u++){for(var[r,n,a]=t[u],c=!0,s=0;s<r.length;s++)(!1&a||i>=a)&&Object.keys(o.O).every((t=>o.O[t](r[s])))?r.splice(s--,1):(c=!1,a<i&&(i=a));if(c){t.splice(u--,1);var l=n();void 0!==l&&(e=l)}}return e}a=a||0;for(var u=t.length;u>0&&t[u-1][2]>a;u--)t[u]=t[u-1];t[u]=[r,n,a]},o.d=(t,e)=>{for(var r in e)o.o(e,r)&&!o.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},o.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{var t={103:0,990:0};o.O.j=e=>0===t[e];var e=(e,r)=>{var n,a,[i,c,s]=r,l=0;if(i.some((e=>0!==t[e]))){for(n in c)o.o(c,n)&&(o.m[n]=c[n]);if(s)var u=s(o)}for(e&&e(r);l<i.length;l++)a=i[l],o.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return o.O(u)},r=self.webpackChunkvisanduma_nova_two_factor=self.webpackChunkvisanduma_nova_two_factor||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))})(),o.O(void 0,[990],(()=>o(268)));var n=o.O(void 0,[990],(()=>o(762)));n=o.O(n)})();