(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{199:function(e,t,n){e.exports=n.p+"img/m1.3c88b07.png"},200:function(e,t,n){e.exports=n.p+"img/remorque.540d7d5.png"},212:function(e,t,n){"use strict";n.r(t);var o={data:function(){return{P1Degonf:null,P2Degonf:null,P3Degonf:null,P4Degonf:null,P1Gonf:null,P2Gonf:null,P3Gonf:null,P4Gonf:null,picked:""}},watch:{P1Degonf:function(e){localStorage.P1Degonf=e},P2Degonf:function(e){localStorage.P2Degonf=e},P3Degonf:function(e){localStorage.P3Degonf=e},P4Degonf:function(e){localStorage.P4Degonf=e}},mounted:function(){localStorage.picked&&(this.picked=localStorage.picked)},methods:{vider:function(){localStorage.removeItem("P1Gonf"),localStorage.removeItem("P2Gonf"),localStorage.removeItem("P3Gonf"),localStorage.removeItem("P4Gonf")}}},r=n(29),component=Object(r.a)(o,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"flex flex-col justify-center items-center min-h-screen p-10"},[o("div",{staticClass:"p-10 py-8 w-full text-gray-600 text-3xl font-black"},[o("h2",{staticClass:"text-center font-bold text-3xl mb-5"},[e._v("\n      Contrôle des pressions\n    ")]),e._v(" "),o("div",{staticClass:"flex"},[o("div",{staticClass:"flex flex-col justify-around mx-auto"},[o("div",[e._v("\n          P1:\n          "),o("input",{directives:[{name:"model",rawName:"v-model.number",value:e.P1Degonf,expression:"P1Degonf",modifiers:{number:!0}}],staticClass:"text-center w-20 rounded bg-blue-700 text-white font-bold",attrs:{type:"number",min:"0",max:"999"},domProps:{value:e.P1Degonf},on:{input:function(t){t.target.composing||(e.P1Degonf=e._n(t.target.value))},blur:function(t){return e.$forceUpdate()}}})]),e._v(" "),o("div",[e._v("\n          P3:\n          "),o("input",{directives:[{name:"model",rawName:"v-model.number",value:e.P3Degonf,expression:"P3Degonf",modifiers:{number:!0}}],staticClass:"text-center w-20 rounded bg-blue-700 text-white font-bold",attrs:{type:"number",min:"0",max:"999"},domProps:{value:e.P3Degonf},on:{input:function(t){t.target.composing||(e.P3Degonf=e._n(t.target.value))},blur:function(t){return e.$forceUpdate()}}})])]),e._v(" "),"motrice"===e.picked?o("img",{staticClass:"mx-auto",attrs:{src:n(199),alt:""}}):"remorque"===e.picked?o("img",{staticClass:"mx-auto",attrs:{src:n(200),alt:""}}):e._e(),e._v(" "),o("div",{staticClass:"flex flex-col justify-around mx-auto"},[o("div",[e._v("\n          P2:\n          "),o("input",{directives:[{name:"model",rawName:"v-model.number",value:e.P2Degonf,expression:"P2Degonf",modifiers:{number:!0}}],staticClass:"text-center w-20 rounded bg-blue-700 text-white font-bold",attrs:{type:"number",min:"0",max:"999"},domProps:{value:e.P2Degonf},on:{input:function(t){t.target.composing||(e.P2Degonf=e._n(t.target.value))},blur:function(t){return e.$forceUpdate()}}})]),e._v(" "),o("div",[e._v("\n          P4:\n          "),o("input",{directives:[{name:"model",rawName:"v-model.number",value:e.P4Degonf,expression:"P4Degonf",modifiers:{number:!0}}],staticClass:"text-center w-20 rounded bg-blue-700 text-white font-bold",attrs:{id:"test",type:"number",min:"0",max:"999"},domProps:{value:e.P4Degonf},on:{input:function(t){t.target.composing||(e.P4Degonf=e._n(t.target.value))},blur:function(t){return e.$forceUpdate()}}})])])])]),e._v(" "),e.P1Degonf>.1&&e.P2Degonf>.1&&e.P3Degonf>.1&&e.P4Degonf>.1?o("div",{staticClass:"p-10"},[o("nuxt-link",{attrs:{to:"/TableauPressions"}},[o("button",{staticClass:"block mx-auto px-6 py-2 text-lg font-black leading-6 text-center text-white uppercase transition bg-blue-700 rounded shadow ripple hover:shadow-lg hover:bg-blue-800 focus:outline-none",on:{click:e.vider}},[e._v("\n        Valider Pressions\n      ")])])],1):e._e()])}),[],!1,null,null,null);t.default=component.exports}}]);