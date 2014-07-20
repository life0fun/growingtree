// Compiled by ClojureScript 0.0-2173
goog.provide('growingtree_app.components.navbar');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('growingtree_app.routes');
goog.require('growingtree_app.routes');
goog.require('sablono.core');
goog.require('cljs.core.async');
goog.require('sablono.core');
goog.require('om.core');
goog.require('om.core');
goog.require('growingtree_app.utils');
goog.require('growingtree_app.utils');
goog.require('cljs.core.async');
growingtree_app.components.navbar.thing_nav = (function thing_nav(comm,thing_listing){var type = new cljs.core.Keyword(null,"type","type",1017479852).cljs$core$IFn$_invoke$arity$1(thing_listing);console.log("li tab thing-nav type ",cljs.core.pr_str.call(null,type)," title ",new cljs.core.Keyword(null,"title","title",1124275658).cljs$core$IFn$_invoke$arity$1(thing_listing));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.protected","li.protected",1310377967),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",1014010321),type,new cljs.core.Keyword(null,"on-click","on-click",1416542092),(function (){return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"all-things","all-things",1148589667),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"body","body",1016933652),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"all-things","all-things",1148589667),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"all","all",1014000915),0,type], null)], null)], null)], null));
}),new cljs.core.Keyword(null,"class","class",1108647146),[cljs.core.str(cljs.core.name.call(null,type)),cljs.core.str((cljs.core.truth_(new cljs.core.Keyword(null,"selected","selected",2205476365).cljs$core$IFn$_invoke$arity$1(thing_listing))?" active":null))].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.show_channel","a.show_channel",788280736),new cljs.core.Keyword(null,"title","title",1124275658).cljs$core$IFn$_invoke$arity$1(thing_listing),(cljs.core.truth_(new cljs.core.Keyword(null,"loading","loading",1350554798).cljs$core$IFn$_invoke$arity$1(thing_listing))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.icon-spinner.icon-spin","i.icon-spinner.icon-spin",2369388996)], null):null)], null)], null);
});
growingtree_app.components.navbar.navbar = (function navbar(data,owner,opts){if(typeof growingtree_app.components.navbar.t11427 !== 'undefined')
{} else
{
/**
* @constructor
*/
growingtree_app.components.navbar.t11427 = (function (opts,owner,data,navbar,meta11428){
this.opts = opts;
this.owner = owner;
this.data = data;
this.navbar = navbar;
this.meta11428 = meta11428;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
growingtree_app.components.navbar.t11427.cljs$lang$type = true;
growingtree_app.components.navbar.t11427.cljs$lang$ctorStr = "growingtree-app.components.navbar/t11427";
growingtree_app.components.navbar.t11427.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"growingtree-app.components.navbar/t11427");
});
growingtree_app.components.navbar.t11427.prototype.om$core$IRender$ = true;
growingtree_app.components.navbar.t11427.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return sablono.interpreter.interpret.call(null,(function (){var comm = cljs.core.get_in.call(null,self__.opts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"comms","comms",1108747865),new cljs.core.Keyword(null,"controls","controls",4741937704)], null));var settings = new cljs.core.Keyword(null,"settings","settings",2448535445).cljs$core$IFn$_invoke$arity$1(self__.data);return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nav.nav","nav.nav",2742543690),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),(cljs.core.truth_(cljs.core.get_in.call(null,settings,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"forms","forms",1111523233),new cljs.core.Keyword(null,"search","search",4402534682),new cljs.core.Keyword(null,"focused","focused",4617830121)], null)))?"search-focus":null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form.search","form.search",4430810500),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"action","action",3885920680),"/search",new cljs.core.Keyword(null,"method","method",4231316563),"get",new cljs.core.Keyword(null,"on-submit","on-submit",1076954936),cljs.core.constantly.call(null,false)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.query","input.query",3940929814),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1017277949),"query",new cljs.core.Keyword(null,"type","type",1017479852),"text",new cljs.core.Keyword(null,"on-focus","on-focus",1419396828),(function (){return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"search-form-focused","search-form-focused",1124244197)], null));
}),new cljs.core.Keyword(null,"on-blur","on-blur",3936357127),(function (){return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"search-form-blurred","search-form-blurred",1799842360)], null));
}),new cljs.core.Keyword(null,"on-key-up","on-key-up",833769449),(function (p1__11423_SHARP_){return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"search-form-updated","search-form-updated",1580855337),p1__11423_SHARP_.target.value], null));
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.submit","input.submit",1614547502),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",1125876963),"Search",new cljs.core.Keyword(null,"type","type",1017479852),"submit"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.nav-ul","ul.nav-ul",4652898858),cljs.core.map.call(null,cljs.core.partial.call(null,growingtree_app.components.navbar.thing_nav,comm),cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"order","order",1119910592),cljs.core.vals.call(null,new cljs.core.Keyword(null,"things","things",4434169015).cljs$core$IFn$_invoke$arity$1(self__.data)))),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",1014010321),"new-tab"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a#newthing-form","a#newthing-form",3680597683),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",1017115293),"#",new cljs.core.Keyword(null,"on-click","on-click",1416542092),(function (){var newthing_data = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"body","body",1016933652),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"child","child",1108535438),new cljs.core.Keyword(null,"add-parent","add-parent",1545021128)], null),new cljs.core.Keyword(null,"data","data",1016980252),cljs.core.PersistentArrayMap.EMPTY], null);var newthing_data__$1 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"body","body",1016933652),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"newthing-form","newthing-form",3991642965),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"course","course",3954299789),new cljs.core.Keyword(null,"add-course","add-course",1185873465)], null)], null),new cljs.core.Keyword(null,"data","data",1016980252),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pid","pid",1014015229),null], null)], null);return (function (){return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"newthing-form","newthing-form",3991642965),newthing_data__$1], null));
});
})()], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",4416891401)," + "], null)], null)], null)], null)], null);
})());
});
growingtree_app.components.navbar.t11427.prototype.om$core$IDisplayName$ = true;
growingtree_app.components.navbar.t11427.prototype.om$core$IDisplayName$display_name$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var or__3443__auto__ = new cljs.core.Keyword(null,"react-name","react-name",4800236939).cljs$core$IFn$_invoke$arity$1(self__.opts);if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{return "Navbar";
}
});
growingtree_app.components.navbar.t11427.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11429){var self__ = this;
var _11429__$1 = this;return self__.meta11428;
});
growingtree_app.components.navbar.t11427.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11429,meta11428__$1){var self__ = this;
var _11429__$1 = this;return (new growingtree_app.components.navbar.t11427(self__.opts,self__.owner,self__.data,self__.navbar,meta11428__$1));
});
growingtree_app.components.navbar.__GT_t11427 = (function __GT_t11427(opts__$1,owner__$1,data__$1,navbar__$1,meta11428){return (new growingtree_app.components.navbar.t11427(opts__$1,owner__$1,data__$1,navbar__$1,meta11428));
});
}
return (new growingtree_app.components.navbar.t11427(opts,owner,data,navbar,null));
});

//# sourceMappingURL=navbar.js.map