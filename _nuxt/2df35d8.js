(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{469:function(e,t,o){e.exports=o.p+"img/icon.ef289af.png"},730:function(e,t,o){"use strict";o.r(t);var r={data:function(){return{serie:"",numero:"",nom:"",picked:"",cote:""}},watch:{serie:function(e){localStorage.serie=e},picked:function(e){localStorage.picked=e},nom:function(e){localStorage.nom=e},numero:function(e){localStorage.numero=e},cote:function(e){localStorage.cote=e}},mounted:function(){localStorage.clear()},methods:{vider:function(){"X 73500"===this.serie&&(localStorage.removeItem("picked"),localStorage.removeItem("cote")),"remorque"===this.picked&&localStorage.removeItem("cote")}}},n=o(22),component=Object(n.a)(r,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"p-6 sm:p-10 text-center"},[r("div",[r("img",{staticClass:"mx-auto w-1/2 mt:8 sm:mt-16",attrs:{src:o(469),alt:""}}),e._v(" "),r("h1",{staticClass:"title text-4xl sm:text-6xl font-bold text-gray-800 mt-5"},[e._v("\n      Réglage Suspension\n    ")]),e._v(" "),r("label",{staticClass:"flex items-baseline w-1/2 mx-auto mt-6"},[r("select",{directives:[{name:"model",rawName:"v-model",value:e.serie,expression:"serie"}],staticClass:"form-select block mx-auto mt-1 bg-gray-200 text-md sm:text-3xl font-bold text-gray-800 text-center",on:{change:function(t){var o=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.serie=t.target.multiple?o:o[0]}}},[r("option",{attrs:{disabled:"",value:""}},[e._v("Série")]),e._v(" "),r("option",[e._v("Z 21500")]),e._v(" "),r("option",[e._v("X 72500")]),e._v(" "),r("option",[e._v("X 73500")])])]),e._v(" "),r("transition",{attrs:{name:"page",mode:"out-in"}},["Z 21500"===e.serie||"X 72500"===e.serie?r("p",{key:"1",staticClass:"font-bold text-sm sm:text-xl mt-6 w-2/3 sm:w-1/2 mx-auto text-gray-800 border-4 border-light-blue-500 p-3"},[e._v("\n        Document à appliquer:"),r("br"),e._v("\n        VR5 504 - Fascicule 13\n      ")]):"X 73500"===e.serie?r("p",{key:"2",staticClass:"font-bold text-sm sm:text-xl mt-6 w-2/3 sm:w-1/2 mx-auto text-gray-800 border-4 border-light-blue-500 p-3"},[e._v("\n        Document à appliquer:"),r("br"),e._v("\n        VR5 504 - Fascicule 16\n      ")]):e._e()]),e._v(" "),r("div",{staticClass:"bg-gray-800 rounded-2xl p-8 mt-16"},[r("div",{staticClass:"mb-8 text-xl md:text-2xl text-white text-center font-bold"},[r("span",{staticClass:"text-white mr-3"},[e._v("Réalisé par: ")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.nom,expression:"nom"}],staticClass:"form-input mt-1 w-2/3 bg-white text-xl md:text-2xl text-gray-800 font-bold text-center",domProps:{value:e.nom},on:{input:function(t){t.target.composing||(e.nom=t.target.value)}}})]),e._v(" "),r("div",{staticClass:"mt-3 text-xl md:text-2xl text-center font-bold"},[r("span",{staticClass:"text-white mr-3"},[e._v("Numéro d'engin: ")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.numero,expression:"numero"}],staticClass:"form-input mt-1 w-2/3 sm:w-1/3 bg-white text-xl md:text-2xl text-gray-800 font-bold text-center",domProps:{value:e.numero},on:{input:function(t){t.target.composing||(e.numero=t.target.value)}}})]),e._v(" "),r("transition",{attrs:{name:"fade"}},["X 72500"===e.serie||"Z 21500"===e.serie?r("div",{staticClass:"flex justify-center text-xl md:text-2xl font-bold mt-10"},[r("div",{staticClass:"flex items-center mb-2 mr-4 p-6"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.picked,expression:"picked"}],staticClass:"form-radio h-6 w-6",attrs:{id:"motrice",type:"radio",name:"radio",value:"motrice"},domProps:{checked:e._q(e.picked,"motrice")},on:{change:function(t){e.picked="motrice"}}}),e._v(" "),r("label",{staticClass:"inline-flex items-center",attrs:{for:"motrice"}},[r("span",{staticClass:"ml-3 text-xl md:text-2xl text-white"},[e._v("Motrice")])])]),e._v(" "),r("div",{staticClass:"flex items-center mb-2 p-6"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.picked,expression:"picked"}],staticClass:"form-radio h-6 w-6",attrs:{id:"remorque",type:"radio",name:"radio",value:"remorque"},domProps:{checked:e._q(e.picked,"remorque")},on:{change:function(t){e.picked="remorque"}}}),e._v(" "),r("label",{staticClass:"ml-3 text-2xl text-white",attrs:{for:"remorque"}},[e._v("Remorque")])])]):e._e()]),e._v(" "),r("transition",{attrs:{name:"fade"}},["motrice"===e.picked&&"X 73500"!==e.serie?r("div",{staticClass:"flex flex-col justify-center items-center text-xl font-bold"},[r("div",{staticClass:"flex items-center mb-5"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.cote,expression:"cote"}],staticClass:"form-radio h-6 w-6",attrs:{id:"M1",type:"radio",name:"radi",value:"M1"},domProps:{checked:e._q(e.cote,"M1")},on:{change:function(t){e.cote="M1"}}}),e._v(" "),r("label",{staticClass:"inline-flex items-center",attrs:{for:"M1"}},[r("span",{staticClass:"ml-3 ttext-xl md:text-2xl text-white"},[e._v("Motrice 1")])])]),e._v(" "),r("div",{staticClass:"flex items-center"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.cote,expression:"cote"}],staticClass:"form-radio h-6 w-6",attrs:{id:"M2",type:"radio",name:"radi",value:"M2"},domProps:{checked:e._q(e.cote,"M2")},on:{change:function(t){e.cote="M2"}}}),e._v(" "),r("label",{staticClass:"ml-3 text-xl md:text-2xl text-white",attrs:{for:"M2"}},[e._v("Motrice 2")])])]):e._e()])],1),e._v(" "),r("transition",{attrs:{name:"fade"}},[("motrice"===e.picked||"remorque"===e.picked||"X 73500"===e.serie)&&e.nom.length>1&&e.numero.length>4?r("div",{staticClass:"mt-20"},[r("nuxt-link",{attrs:{to:"/Checkbox"}},[r("button",{staticClass:"block w-2/3 mx-auto px-6 py-2 sm:text-lg font-black leading-6 text-center text-white uppercase transition bg-blue-700 rounded shadow ripple hover:shadow-lg hover:bg-blue-800 focus:outline-none",on:{click:e.vider}},[e._v("\n            Commencer le réglage\n          ")])])],1):e._e()])],1)])}),[],!1,null,null,null);t.default=component.exports}}]);