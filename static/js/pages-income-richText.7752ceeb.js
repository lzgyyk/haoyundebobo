(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-income-richText"],{"4c5a":function(t,n,e){"use strict";e("ac1f"),e("5319"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i={data:function(){return{richText_content:""}},onLoad:function(t){var n=this,e=t.title,i=t.id,r=t.url,c=t.type;this.$api[r]({mmsg:"加载中",id:i,type:c}).then((function(t){n.richText_content=t.content.replace(/<\s?img(.*?)src=['|"](.*?)['|"](.*?)>/g,"<img style='width:100%;display:block' src='$2' />")})),uni.setNavigationBarTitle({title:e})},methods:{}};n.default=i},"707e":function(t,n,e){"use strict";e.r(n);var i=e("9b25"),r=e("d011");for(var c in r)"default"!==c&&function(t){e.d(n,t,(function(){return r[t]}))}(c);var u,a=e("f0c5"),o=Object(a["a"])(r["default"],i["b"],i["c"],!1,null,"48a923d9",null,!1,i["a"],u);n["default"]=o.exports},"9b25":function(t,n,e){"use strict";var i;e.d(n,"b",(function(){return r})),e.d(n,"c",(function(){return c})),e.d(n,"a",(function(){return i}));var r=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",[e("v-uni-rich-text",{attrs:{nodes:t.richText_content}})],1)},c=[]},d011:function(t,n,e){"use strict";e.r(n);var i=e("4c5a"),r=e.n(i);for(var c in i)"default"!==c&&function(t){e.d(n,t,(function(){return i[t]}))}(c);n["default"]=r.a}}]);