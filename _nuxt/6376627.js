(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{199:function(t,e,n){t.exports=n.p+"img/m1.3c88b07.png"},213:function(t,e,n){"use strict";n.r(e);var o={data:function(){return{H1Gonf:null,H2Gonf:null,H3Gonf:null,H4Gonf:null,H1Degonf:null,H2Degonf:null,H3Degonf:null,H4Degonf:null}},watch:{H1Gonf:function(t){localStorage.H1Gonf=t},H2Gonf:function(t){localStorage.H2Gonf=t},H3Gonf:function(t){localStorage.H3Gonf=t},H4Gonf:function(t){localStorage.H4Gonf=t}},mounted:function(){localStorage.H1Degonf&&(this.H1Degonf=localStorage.H1Degonf),localStorage.H2Degonf&&(this.H2Degonf=localStorage.H2Degonf),localStorage.H3Degonf&&(this.H3Degonf=localStorage.H3Degonf),localStorage.H4Degonf&&(this.H4Degonf=localStorage.H4Degonf),localStorage.H1Gonf&&(this.H1Gonf=localStorage.H1Gonf),localStorage.H2Gonf&&(this.H2Gonf=localStorage.H2Gonf),localStorage.H3Gonf&&(this.H3Gonf=localStorage.H3Gonf),localStorage.H4Gonf&&(this.H4Gonf=localStorage.H4Gonf)},computed:{deltaH1:function(){return this.H1Gonf-this.H1Degonf},deltaH2:function(){return this.H2Gonf-this.H2Degonf},deltaH3:function(){return this.H3Gonf-this.H3Degonf},deltaH4:function(){return this.H4Gonf-this.H4Degonf},valAtH1:function(){return parseInt(this.H1Degonf)+35},valAtH2:function(){return parseInt(this.H2Degonf)+35},valAtH3:function(){return parseInt(this.H3Degonf)+35},valAtH4:function(){return parseInt(this.H4Degonf)+35},P1P4avreg:function(){return this.P1Degonf+this.P4Degonf},P2P3avreg:function(){return this.P2Degonf+this.P3Degonf},deltaPavreg:function(){return this.P1P4avreg-this.P2P3avreg},P1P4apreg:function(){return this.P1Gonf+this.P4Gonf},P2P3apreg:function(){return this.P2Gonf+this.P3Gonf},deltaPapreg:function(){return this.P1P4apreg-this.P2P3apreg},moyenneGauche:function(){return(this.H1Gonf+this.H3Gonf)/2},moyenneDroite:function(){return(this.H2Gonf+this.H4Gonf)/2},finalMoyenneGauche:function(){return(this.H1Final+this.H3Final)/2},finalMoyenneDroite:function(){return(this.H2Final+this.H4Final)/2}}},r=n(29),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("div",{staticClass:"p-10 py-8 w-full"},[o("h2",{staticClass:"text-center text-gray-600 font-bold text-3xl p-10"},[t._v("\n          Réglage Hauteurs\n        ")]),t._v(" "),o("div",{staticClass:"shadow overflow-hidden rounded border-b border-gray-200 font-bold"},[o("table",{staticClass:"min-w-full bg-white"},[t._m(0),t._v(" "),o("tbody",{staticClass:"text-gray-700"},[o("tr",[o("td",{staticClass:"w-1/3 text-center py-3 px-4"},[t._v("\n                 H1: "),o("input",{directives:[{name:"model",rawName:"v-model.number",value:t.H1Gonf,expression:"H1Gonf",modifiers:{number:!0}}],staticClass:"w-1/4 text-center font-bold",domProps:{value:t.H1Gonf},on:{input:function(e){e.target.composing||(t.H1Gonf=t._n(e.target.value))},blur:function(e){return t.$forceUpdate()}}})]),t._v(" "),t.deltaH1>38||t.deltaH1<32?o("td",{staticClass:"text-red-500 font-bold text-center py-3 px-4"},[t._v("\n                  "+t._s(t.deltaH1)+"\n                ")]):o("td",{staticClass:"text-green-600 font-bold text-center py-3 px-4"},[t._v("\n                  "+t._s(t.deltaH1)+"\n                ")]),t._v(" "),o("td",{staticClass:"text-center font-black py-3 px-4"},[t._v("\n                  "+t._s(t.valAtH1)+" mm\n                ")])]),t._v(" "),o("tr",{staticClass:"bg-gray-100"},[o("td",{staticClass:"w-1/3 text-center py-3 px-4"},[t._v("\n                 H2: "),o("input",{directives:[{name:"model",rawName:"v-model.number",value:t.H2Gonf,expression:"H2Gonf",modifiers:{number:!0}}],staticClass:"w-1/4 text-center font-bold",domProps:{value:t.H2Gonf},on:{input:function(e){e.target.composing||(t.H2Gonf=t._n(e.target.value))},blur:function(e){return t.$forceUpdate()}}})]),t._v(" "),t.deltaH2>38||t.deltaH2<32?o("td",{staticClass:"text-red-500 font-bold text-center py-3 px-4"},[t._v("\n                  "+t._s(t.deltaH2)+"\n                ")]):o("td",{staticClass:"text-green-600 font-bold text-center py-3 px-4"},[t._v("\n                  "+t._s(t.deltaH2)+"\n                ")]),t._v(" "),o("td",{staticClass:"text-center font-black py-3 px-4"},[t._v("\n                  "+t._s(t.valAtH2)+" mm\n                ")])]),t._v(" "),o("tr",[o("td",{staticClass:"w-1/3 text-center py-3 px-4"},[t._v("\n                 H3: "),o("input",{directives:[{name:"model",rawName:"v-model.number",value:t.H3Gonf,expression:"H3Gonf",modifiers:{number:!0}}],staticClass:"w-1/4 text-center font-bold",domProps:{value:t.H3Gonf},on:{input:function(e){e.target.composing||(t.H3Gonf=t._n(e.target.value))},blur:function(e){return t.$forceUpdate()}}})]),t._v(" "),t.deltaH3>38||t.deltaH3<32?o("td",{staticClass:"text-red-500 font-bold text-center py-3 px-4"},[t._v("\n                  "+t._s(t.deltaH3)+"\n                ")]):o("td",{staticClass:"text-green-600 font-bold text-center py-3 px-4"},[t._v("\n                  "+t._s(t.deltaH3)+"\n                ")]),t._v(" "),o("td",{staticClass:"text-center font-black py-3 px-4"},[t._v("\n                  "+t._s(t.valAtH3)+" mm\n                ")])]),t._v(" "),o("tr",{staticClass:"bg-gray-100"},[o("td",{staticClass:"w-1/3 text-center py-3 px-4"},[t._v("\n                H4:  "),o("input",{directives:[{name:"model",rawName:"v-model.number",value:t.H4Gonf,expression:"H4Gonf",modifiers:{number:!0}}],staticClass:"w-1/4 text-center font-bold",domProps:{value:t.H4Gonf},on:{input:function(e){e.target.composing||(t.H4Gonf=t._n(e.target.value))},blur:function(e){return t.$forceUpdate()}}})]),t._v(" "),t.deltaH4>38||t.deltaH4<32?o("td",{staticClass:"text-red-500 font-bold text-center py-3 px-4"},[t._v("\n                  "+t._s(t.deltaH4)+"\n                ")]):o("td",{staticClass:"text-green-600 font-bold text-center py-3 px-4"},[t._v("\n                  "+t._s(t.deltaH4)+"\n                ")]),t._v(" "),o("td",{staticClass:"text-center font-black py-3 px-4"},[t._v("\n                  "+t._s(t.valAtH4)+" mm\n                ")])])])])])]),t._v(" "),t.deltaH4>38||t.deltaH4<32?o("div",{staticClass:"mb-10"},[o("p",{staticClass:"text-center text-red-500 text-2xl"},[t._v("Delta Hauteurs non conforme!")])]):o("div",{staticClass:"mb-10"},[o("p",{staticClass:"text-center text-green-500 text-2xl"},[t._v("Delta Hauteurs conforme!")])]),t._v(" "),o("div",{staticClass:"flex text-3xl font-black text-gray-600"},[o("div",{staticClass:"flex flex-col justify-around mx-auto"},[o("div",[t._v("\n            H1:\n            "),o("input",{directives:[{name:"model",rawName:"v-model.number",value:t.H1Gonf,expression:"H1Gonf",modifiers:{number:!0}}],staticClass:"text-center w-20 rounded bg-blue-700 text-white font-bold",attrs:{type:"number",min:"0",max:"999"},domProps:{value:t.H1Gonf},on:{input:function(e){e.target.composing||(t.H1Gonf=t._n(e.target.value))},blur:function(e){return t.$forceUpdate()}}})]),t._v(" "),o("div",[t._v("\n            H3:\n            "),o("input",{directives:[{name:"model",rawName:"v-model.number",value:t.H3Gonf,expression:"H3Gonf",modifiers:{number:!0}}],staticClass:"text-center w-20 rounded bg-blue-700 text-white font-bold",attrs:{type:"number",min:"0",max:"999"},domProps:{value:t.H3Gonf},on:{input:function(e){e.target.composing||(t.H3Gonf=t._n(e.target.value))},blur:function(e){return t.$forceUpdate()}}})])]),t._v(" "),o("img",{staticClass:"mx-auto",attrs:{src:n(199),alt:""}}),t._v(" "),o("div",{staticClass:"flex flex-col justify-around mx-auto"},[o("div",[t._v("\n            H2:\n            "),o("input",{directives:[{name:"model",rawName:"v-model.number",value:t.H2Gonf,expression:"H2Gonf",modifiers:{number:!0}}],staticClass:"text-center w-20 rounded bg-blue-700 text-white font-bold",attrs:{type:"number",min:"0",max:"999"},domProps:{value:t.H2Gonf},on:{input:function(e){e.target.composing||(t.H2Gonf=t._n(e.target.value))},blur:function(e){return t.$forceUpdate()}}})]),t._v(" "),o("div",[t._v("\n            H4:\n            "),o("input",{directives:[{name:"model",rawName:"v-model.number",value:t.H4Gonf,expression:"H4Gonf",modifiers:{number:!0}}],staticClass:"text-center w-20 rounded bg-blue-700 text-white font-bold",attrs:{id:"test",type:"number",min:"0",max:"999"},domProps:{value:t.H4Gonf},on:{input:function(e){e.target.composing||(t.H4Gonf=t._n(e.target.value))},blur:function(e){return t.$forceUpdate()}}})])])]),t._v(" "),o("div",{staticClass:"p-10"},[o("nuxt-link",{attrs:{to:"/Pressions"}},[o("button",{staticClass:"block mx-auto px-6 py-2 text-lg font-black leading-6 text-center text-white uppercase transition bg-blue-700 rounded shadow ripple hover:shadow-lg hover:bg-blue-800 focus:outline-none"},[t._v("\n          Contrôle des pressions\n        ")])])],1)])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("thead",{staticClass:"bg-blue-700 text-white"},[n("tr",[n("th",{staticClass:"w-1/3 text-center py-3 px-4 uppercase"},[t._v("\n                  Hauteurs gonflées\n                ")]),t._v(" "),n("th",{staticClass:"text-center py-3 px-4 uppercase"},[t._v("\n                  Delta D (35 +- 3mm)\n                ")]),t._v(" "),n("th",{staticClass:"text-center py-3 px-4 uppercase"},[t._v("\n                  Valeurs à atteindre\n                ")])])])}],!1,null,null,null);e.default=component.exports}}]);