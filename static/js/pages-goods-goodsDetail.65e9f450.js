(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-goods-goodsDetail"],{"3c53":function(t,e,i){var a=i("692f");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("15c685c2",a,!0,{sourceMap:!1,shadowMode:!1})},"52f9":function(t,e,i){"use strict";var a;i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return s})),i.d(e,"a",(function(){return a}));var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return void 0!==t.Detail.id?a("v-uni-view",[a("v-uni-view",{staticClass:"fixed-banner",style:{"background-color":-1===t.status?"transparent":1===t.status?"#3B414D":"#F52C1F"}}),a("v-uni-view",{staticClass:"status-text"},[t._v(t._s(t.StatusText[t.Detail.status_copy]))]),a("v-uni-view",{staticClass:"addtime"},[t._v("上传时间："+t._s(t.Detail.createtime))]),a("v-uni-view",{staticClass:"content"},[a("v-uni-view",{staticClass:"title"},[t._v("商品信息")]),a("v-uni-view",{staticClass:"cell"},[a("v-uni-view",{staticClass:"label-name"},[t._v("商品类别")]),a("v-uni-view",{staticClass:"value"},[t._v(t._s(t.Detail.type_name))])],1),a("v-uni-view",{staticClass:"cell"},[a("v-uni-view",{staticClass:"label-name"},[t._v("特产地区")]),a("v-uni-view",{staticClass:"value"},[t._v(t._s(t.Detail.city))])],1),a("v-uni-view",{staticClass:"line"}),a("v-uni-view",{staticClass:"cell"},[a("v-uni-view",{staticClass:"label-name"},[t._v("商品名称")]),a("v-uni-view",{staticClass:"value"},[t._v(t._s(t.Detail.name))])],1),a("v-uni-view",{staticClass:"cell"},[a("v-uni-view",{staticClass:"label-name"},[t._v("供货价")]),a("v-uni-view",{staticClass:"value price"},[t._v("￥"+t._s(t.Detail.price))])],1),a("v-uni-view",{staticClass:"line"}),a("v-uni-view",{staticClass:"media-cell"},[a("v-uni-view",{staticClass:"label-name"},[t._v("封面图片")]),a("v-uni-image",{staticClass:"media-poster",attrs:{src:t.Detail.image,mode:""},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.previewImg(t.Detail.image)}}})],1),a("v-uni-view",{staticClass:"media-cell"},[a("v-uni-view",{staticClass:"label-name"},[t._v("商品视频")]),a("v-uni-view",{staticClass:"video-case"},[a("v-uni-image",{staticClass:"play-circle absolute_level_auto",attrs:{src:i("5678"),mode:""},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goPreviewVideo(t.Detail.vediofile)}}}),a("v-uni-video",{staticClass:"media-poster",attrs:{src:t.Detail.vediofile,"show-center-play-btn":!1,controls:!1},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goPreviewVideo(t.Detail.vediofile)}}})],1)],1)],1),2===t.status?a("v-uni-view",{staticClass:"bo_text"},[a("v-uni-view",{staticClass:"label-name"},[t._v("驳回理由")]),a("v-uni-view",{staticClass:"text"},[t._v(t._s(t.Detail.bo_text))])],1):t._e(),1===t.status||2===t.status?a("v-uni-view",[a("v-uni-view",{staticClass:"safe-bottom",staticStyle:{height:"100rpx"}}),a("v-uni-view",{staticClass:"safe-bottom da-fc fixed-bottom"},[2===t.status?a("v-uni-view",{staticClass:"edit-btn",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goAddPage()}}},[t._v("重新编辑")]):t._e(),1===t.status?a("v-uni-view",{staticClass:"delete-btn",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.supplierGoodsDel()}}},[t._v("删除商品")]):t._e()],1)],1):t._e()],1):t._e()},s=[]},5678:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAB7ElEQVRYR82XgTFEMRCG/6uADlABOqACOkAFqAAVoAJUwFVAB04F6IAOzPfm7U3uTXLZvOTmZMa8mZNk//1399/sRGtekxH29yQd9ee2++9X/51KmpXc6QWAoXNJx5LMaMoOYF4k3UsyYElMOQCbveHrEq+CvZwDyE/q/DIAUP0giW/NIiRnqdCkABxIepYEAy0WDBzGQMQA4PFrQ+PmQBTEEAAeY7yW9hRrhAMm5jkxBEDSXLXgfMkdN5LmSR0CoLw+HcafJL1JupO04dg/3IL3+1aiIQAupNZzy84QrsdAlHLnwv9Tmhf8EAJANLYctwzDhjgBpIQNbO2EAEi6d4fxIWg7AhvE1cOgnSEMM/OmJPmWiRf6ARseJi/Jo9YA8M7LRlcNBgDUJxUhiB3NsUo1na4TQFcJqwoBYtaVWU6QWgMgCemguTcDuBaSsEUZ3hJTZx6xbaEM+aFGiPC6pHV/G0u1UoxhlLB0RaXY24woWWtGJV4byN++3XfvxX/Vjk3F8G63lFPn/g9JVEryQcI9VAQgSrqbxz7UY3xhbkg1ltYgosZTrdW8AQQJVxsOaEcfohOTZzBBUse8E/GaVxZ/owaTMK6UKECo+VyvR2QYzTBcPZrFkovQkExoQDic4iXJu5Lh1JPlo/b8AV7vYCErCUPDAAAAAElFTkSuQmCC"},"692f":function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,".fixed-bottom[data-v-4c9f2ac4]{z-index:3;position:fixed;bottom:0;left:0;width:100%;justify-content:flex-end;background-color:#fff;height:%?100?%;text-align:center}.fixed-bottom .edit-btn[data-v-4c9f2ac4]{line-height:%?70?%;width:%?183?%;height:%?70?%;background:#f52c1f;border-radius:%?35?%;color:#fff;margin-right:%?30?%}.fixed-bottom .delete-btn[data-v-4c9f2ac4]{line-height:%?66?%;width:%?179?%;height:%?66?%;border-radius:%?35?%;border:%?2?% solid #999;color:#999;margin-right:%?30?%}.bo_text[data-v-4c9f2ac4]{position:relative;z-index:2;margin:%?34?% %?30?% 0;background-color:#fff;border-radius:%?10?%;padding:0 %?28?% %?40?%}.bo_text .label-name[data-v-4c9f2ac4]{font-size:%?28?%;line-height:%?90?%;font-weight:700}.bo_text .text[data-v-4c9f2ac4]{font-size:%?26?%;line-height:%?38?%}.content[data-v-4c9f2ac4]{position:relative;z-index:2;margin:%?34?% %?30?% 0;background-color:#fff;border-radius:%?10?%;padding:0 %?38?% %?20?% %?28?%;line-height:%?36?%;font-size:%?28?%}.content .media-cell[data-v-4c9f2ac4]{padding-top:%?20?%}.content .media-cell .label-name[data-v-4c9f2ac4]{margin-bottom:%?24?%}.content .media-poster[data-v-4c9f2ac4]{width:%?160?%;height:%?160?%;border-radius:%?10?%}.content .video-case[data-v-4c9f2ac4]{position:relative;font-size:0;width:%?160?%}.content .video-case .play-circle[data-v-4c9f2ac4]{width:%?38?%;height:%?38?%;opacity:.6;top:%?62?%;z-index:1}.content .title[data-v-4c9f2ac4]{font-size:%?28?%;font-weight:700;line-height:%?30?%;padding:%?33?% 0 %?22?% 0}.content .cell[data-v-4c9f2ac4]{display:flex;justify-content:space-between;padding:%?16?% 0}.content .value[data-v-4c9f2ac4]{width:%?450?%;text-align:right;font-size:%?28?%}.content .line[data-v-4c9f2ac4]{margin:%?16?% 0;height:1px;background:#f5f5f5}.status-text[data-v-4c9f2ac4]{margin-left:%?32?%;font-size:%?36?%;font-weight:700;color:#fff;position:relative;z-index:2;line-height:1;padding-top:%?42?%}.addtime[data-v-4c9f2ac4]{margin-top:%?22?%;line-height:1;margin-left:%?32?%;font-size:%?26?%;font-weight:700;color:#eee;position:relative;z-index:2}.fixed-banner[data-v-4c9f2ac4]{position:fixed;top:0;left:0;width:100%;height:%?240?%;z-index:0}uni-page-body[data-v-4c9f2ac4]{background:#f9f9f9;padding-bottom:%?120?%}body.?%PAGE?%[data-v-4c9f2ac4]{background:#f9f9f9}",""]),t.exports=e},"958b":function(t,e,i){"use strict";var a;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{StatusText:{0:"审核中",1:"经营中",2:"已驳回"},status:-1,Detail:{}}},onLoad:function(t){var e=t.id;a=e,this.getDetail()},onShow:function(){},methods:{goAddPage:function(){var t=this;this.$once("hook:onShow",(function(){!0===t.$store.state.goodsList_is_change&&t.getDetail()})),this.$mUtils.pushto("addgoods",{title:"编辑商品",id:this.Detail.id})},goPreviewVideo:function(t){this.$mUtils.pushto("previewVideo",{url:encodeURIComponent(t)})},previewImg:function(t){uni.previewImage({urls:[t]})},supplierGoodsDel:function(){var t=this;this.fnIng||uni.showModal({title:"是否删除该商品",content:"删除后，无法恢复",success:function(e){var i=e.confirm;i&&(t.fnIng=!0,t.$api.supplierGoodsDel({id:a,mmsg:"删除中"}).then((function(){t.status=0,t.$mUtils.whereBack((function(){t.$store.commit("set_data",{goodsList_is_change:!0})}))})).catch((function(){t.fnIng=!1})))}})},getDetail:function(){var t=this;this.$api.supplierGoodsDetail({mmsg:"加载中",id:a}).then((function(e){t.status=e.status_copy,t.Detail=e}))}}};e.default=n},"96ec":function(t,e,i){"use strict";i.r(e);var a=i("958b"),n=i.n(a);for(var s in a)"default"!==s&&function(t){i.d(e,t,(function(){return a[t]}))}(s);e["default"]=n.a},af99:function(t,e,i){"use strict";var a=i("3c53"),n=i.n(a);n.a},fe77:function(t,e,i){"use strict";i.r(e);var a=i("52f9"),n=i("96ec");for(var s in n)"default"!==s&&function(t){i.d(e,t,(function(){return n[t]}))}(s);i("af99");var o,c=i("f0c5"),l=Object(c["a"])(n["default"],a["b"],a["c"],!1,null,"4c9f2ac4",null,!1,a["a"],o);e["default"]=l.exports}}]);