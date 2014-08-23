// Compiled by ClojureScript 0.0-2277
goog.provide('growingtree_app.components.navbar');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('sablono.core');
goog.require('cljs.core.async');
goog.require('growingtree_app.routes');
goog.require('cljs.core.async');
goog.require('growingtree_app.mock_data');
goog.require('sablono.core');
goog.require('growingtree_app.utils');
goog.require('om.core');
goog.require('growingtree_app.mock_data');
goog.require('om.core');
goog.require('growingtree_app.routes');
goog.require('growingtree_app.utils');
growingtree_app.components.navbar.thing_nav = (function thing_nav(comm,thing_listing){var type = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(thing_listing);var nav_path = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"all-things","all-things",1825895767),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"all","all",892129742),(0),type], null)], null),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"author","author",2111686192),"rich-dad"], null)], null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.protected","li.protected",-1934045401),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.nav-channel","div.nav-channel",157445526),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.show_channel","a.show_channel",1350918284),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),type,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (type,nav_path){
return (function (){return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"all-things","all-things",1825895767),nav_path], null));
});})(type,nav_path))
,new cljs.core.Keyword(null,"class","class",-2030961996),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,type))+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(new cljs.core.Keyword(null,"selected","selected",574897764).cljs$core$IFn$_invoke$arity$1(thing_listing))?" active":null)))], null),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(thing_listing)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.fa.fa-plus-square","i.fa.fa-plus-square",1192301467),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){var newthing_path = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[type,cljs.core.keyword.call(null,("add-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,type))))],null));var newthing_data = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"newthing-form","newthing-form",-676457503),newthing_path], null),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pid","pid",1018387698),null], null)], null);return ((function (newthing_path,newthing_data,type,nav_path){
return (function (){return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"newthing-form","newthing-form",-676457503),newthing_data], null));
});
;})(newthing_path,newthing_data,type,nav_path))
})()], null)], null),(cljs.core.truth_(new cljs.core.Keyword(null,"loading","loading",-737050189).cljs$core$IFn$_invoke$arity$1(thing_listing))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.icon-spinner.icon-spin","i.icon-spinner.icon-spin",2121569380)], null):null)], null)], null);
});
growingtree_app.components.navbar.navbar = (function navbar(data,owner,opts){if(typeof growingtree_app.components.navbar.t11667 !== 'undefined')
{} else
{
/**
* @constructor
*/
growingtree_app.components.navbar.t11667 = (function (opts,owner,data,navbar,meta11668){
this.opts = opts;
this.owner = owner;
this.data = data;
this.navbar = navbar;
this.meta11668 = meta11668;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
growingtree_app.components.navbar.t11667.cljs$lang$type = true;
growingtree_app.components.navbar.t11667.cljs$lang$ctorStr = "growingtree-app.components.navbar/t11667";
growingtree_app.components.navbar.t11667.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"growingtree-app.components.navbar/t11667");
});
growingtree_app.components.navbar.t11667.prototype.om$core$IRender$ = true;
growingtree_app.components.navbar.t11667.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return sablono.interpreter.interpret.call(null,(function (){var comm = cljs.core.get_in.call(null,self__.opts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"comms","comms",460172477),new cljs.core.Keyword(null,"controls","controls",1340701452)], null));var settings = new cljs.core.Keyword(null,"settings","settings",1556144875).cljs$core$IFn$_invoke$arity$1(self__.data);return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nav.nav","nav.nav",-223269137),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(cljs.core.get_in.call(null,settings,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"forms","forms",2045992350),new cljs.core.Keyword(null,"search","search",1564939822),new cljs.core.Keyword(null,"focused","focused",1851572115)], null)))?"search-focus":null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form.search","form.search",871394056),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"action","action",-811238024),"/search",new cljs.core.Keyword(null,"method","method",55703592),"get",new cljs.core.Keyword(null,"on-submit","on-submit",1227871159),cljs.core.constantly.call(null,false)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.query","input.query",1777106866),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"query",new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"on-focus","on-focus",-13737624),((function (comm,settings,this$__$1){
return (function (){return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"search-form-focused","search-form-focused",-1652397576)], null));
});})(comm,settings,this$__$1))
,new cljs.core.Keyword(null,"on-blur","on-blur",814300747),((function (comm,settings,this$__$1){
return (function (){return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"search-form-blurred","search-form-blurred",1104978531)], null));
});})(comm,settings,this$__$1))
,new cljs.core.Keyword(null,"on-key-up","on-key-up",884441808),((function (comm,settings,this$__$1){
return (function (p1__11663_SHARP_){return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"search-form-updated","search-form-updated",-868859534),p1__11663_SHARP_.target.value], null));
});})(comm,settings,this$__$1))
], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.submit","input.submit",994744641),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"Search",new cljs.core.Keyword(null,"type","type",1174270348),"submit"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.nav-ul","ul.nav-ul",-335371231),cljs.core.map.call(null,cljs.core.partial.call(null,growingtree_app.components.navbar.thing_nav,comm),cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"order","order",-1254677256),cljs.core.vals.call(null,new cljs.core.Keyword(null,"things","things",1255021880).cljs$core$IFn$_invoke$arity$1(self__.data))))], null)], null);
})());
});
growingtree_app.components.navbar.t11667.prototype.om$core$IDisplayName$ = true;
growingtree_app.components.navbar.t11667.prototype.om$core$IDisplayName$display_name$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var or__3543__auto__ = new cljs.core.Keyword(null,"react-name","react-name",-834049397).cljs$core$IFn$_invoke$arity$1(self__.opts);if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return "Navbar";
}
});
growingtree_app.components.navbar.t11667.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11669){var self__ = this;
var _11669__$1 = this;return self__.meta11668;
});
growingtree_app.components.navbar.t11667.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11669,meta11668__$1){var self__ = this;
var _11669__$1 = this;return (new growingtree_app.components.navbar.t11667(self__.opts,self__.owner,self__.data,self__.navbar,meta11668__$1));
});
growingtree_app.components.navbar.__GT_t11667 = (function __GT_t11667(opts__$1,owner__$1,data__$1,navbar__$1,meta11668){return (new growingtree_app.components.navbar.t11667(opts__$1,owner__$1,data__$1,navbar__$1,meta11668));
});
}
return (new growingtree_app.components.navbar.t11667(opts,owner,data,navbar,null));
});

//# sourceMappingURL=navbar.js.map