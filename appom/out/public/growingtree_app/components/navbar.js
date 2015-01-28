// Compiled by ClojureScript 0.0-2277
goog.provide('growingtree_app.components.navbar');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('sablono.core');
goog.require('cljs.core.async');
goog.require('growingtree_app.routes');
goog.require('dommy.core');
goog.require('cljs.core.async');
goog.require('growingtree_app.mock_data');
goog.require('sablono.core');
goog.require('growingtree_app.utils');
goog.require('om.core');
goog.require('dommy.core');
goog.require('growingtree_app.mock_data');
goog.require('om.core');
goog.require('growingtree_app.routes');
goog.require('growingtree_app.utils');
growingtree_app.components.navbar.thing_nav = (function thing_nav(comm,login_user,thing_listing){var type = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(thing_listing);var user_name = new cljs.core.Keyword("person","title","person/title",1791817084).cljs$core$IFn$_invoke$arity$1(login_user);var login_id = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(login_user);var options = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pid","pid",1018387698),login_id], null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.protected","li.protected",-1934045401),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.nav-channel","div.nav-channel",157445526),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.show_channel","a.show_channel",1350918284),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),type,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (type,user_name,login_id,options){
return (function (){return cljs.core.async.put_BANG_.call(null,comm,growingtree_app.mock_data.all_things_msg_nav_path.call(null,type,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pid","pid",1018387698),login_id], null)));
});})(type,user_name,login_id,options))
,new cljs.core.Keyword(null,"class","class",-2030961996),("js-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,type))+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(new cljs.core.Keyword(null,"selected","selected",574897764).cljs$core$IFn$_invoke$arity$1(thing_listing))?" active":null)))], null),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(thing_listing)], null),(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([type], true),growingtree_app.mock_data.root_add_type))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.fa.fa-plus-square","i.fa.fa-plus-square",1192301467),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (type,user_name,login_id,options){
return (function (){return cljs.core.async.put_BANG_.call(null,comm,growingtree_app.mock_data.newthing_form_msg_nav_path.call(null,type,options));
});})(type,user_name,login_id,options))
], null)], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.fa.fa-square","i.fa.fa-square",-1307287996)], null)),(cljs.core.truth_(new cljs.core.Keyword(null,"loading","loading",-737050189).cljs$core$IFn$_invoke$arity$1(thing_listing))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.icon-spinner.icon-spin","i.icon-spinner.icon-spin",2121569380)], null):null)], null)], null);
});
growingtree_app.components.navbar.my_thing_nav = (function my_thing_nav(comm,login_user,thing_listing){var thing_type = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(thing_listing);var user_name = new cljs.core.Keyword("person","title","person/title",1791817084).cljs$core$IFn$_invoke$arity$1(login_user);var user_type = new cljs.core.Keyword("person","type","person/type",-1703713807).cljs$core$IFn$_invoke$arity$1(login_user);var login_id = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(login_user);var options = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pid","pid",1018387698),login_id], null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.protected","li.protected",-1934045401),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.nav-channel","div.nav-channel",157445526),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.show_channel","a.show_channel",1350918284),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.type,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (thing_type,user_name,user_type,login_id,options){
return (function (){return cljs.core.async.put_BANG_.call(null,comm,growingtree_app.mock_data.filter_things_msg_nav_path.call(null,user_type,login_id,thing_type,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pid","pid",1018387698),login_id], null)));
});})(thing_type,user_name,user_type,login_id,options))
,new cljs.core.Keyword(null,"class","class",-2030961996),("js-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,thing_type))+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(new cljs.core.Keyword(null,"selected","selected",574897764).cljs$core$IFn$_invoke$arity$1(thing_listing))?" active":null)))], null),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(thing_listing)], null),(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([cljs.core.type], true),growingtree_app.mock_data.root_add_type))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.fa.fa-plus-square","i.fa.fa-plus-square",1192301467),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (thing_type,user_name,user_type,login_id,options){
return (function (){return cljs.core.async.put_BANG_.call(null,comm,growingtree_app.mock_data.newthing_form_msg_nav_path.call(null,thing_type,options));
});})(thing_type,user_name,user_type,login_id,options))
], null)], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.fa.fa-square","i.fa.fa-square",-1307287996)], null)),(cljs.core.truth_(new cljs.core.Keyword(null,"loading","loading",-737050189).cljs$core$IFn$_invoke$arity$1(thing_listing))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.icon-spinner.icon-spin","i.icon-spinner.icon-spin",2121569380)], null):null)], null)], null);
});
growingtree_app.components.navbar.navbar = (function navbar(state,owner,opts){if(typeof growingtree_app.components.navbar.t11829 !== 'undefined')
{} else
{
/**
* @constructor
*/
growingtree_app.components.navbar.t11829 = (function (opts,owner,state,navbar,meta11830){
this.opts = opts;
this.owner = owner;
this.state = state;
this.navbar = navbar;
this.meta11830 = meta11830;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
growingtree_app.components.navbar.t11829.cljs$lang$type = true;
growingtree_app.components.navbar.t11829.cljs$lang$ctorStr = "growingtree-app.components.navbar/t11829";
growingtree_app.components.navbar.t11829.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"growingtree-app.components.navbar/t11829");
});
growingtree_app.components.navbar.t11829.prototype.om$core$IRender$ = true;
growingtree_app.components.navbar.t11829.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;var comm = cljs.core.get_in.call(null,self__.opts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"comms","comms",460172477),new cljs.core.Keyword(null,"controls","controls",1340701452)], null));var settings = new cljs.core.Keyword(null,"settings","settings",1556144875).cljs$core$IFn$_invoke$arity$1(self__.state);var login_user = growingtree_app.utils.get_login_user.call(null,self__.state);var search_box = "search-box";var search_box_div = document.querySelector(dommy.core.selector.call(null,("#"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(search_box))));var things = cljs.core.vals.call(null,new cljs.core.Keyword(null,"things","things",1255021880).cljs$core$IFn$_invoke$arity$1(self__.state));var my_things = cljs.core.vals.call(null,new cljs.core.Keyword(null,"my-things","my-things",276171552).cljs$core$IFn$_invoke$arity$1(self__.state));console.log(cljs.core.pr_str.call(null,"my-things ",my_things));
return React.DOM.nav({"className": sablono.util.join_classes.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["nav",(cljs.core.truth_(cljs.core.get_in.call(null,settings,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"forms","forms",2045992350),new cljs.core.Keyword(null,"search","search",1564939822),new cljs.core.Keyword(null,"focused","focused",1851572115)], null)))?"search-focus":null)], null))},React.DOM.form({"className": "search", "action": "/search", "method": "get", "onSubmit": cljs.core.constantly.call(null,false)},sablono.interpreter.input.call(null,{"className": "query", "id": search_box, "name": "query", "type": "text"}),sablono.interpreter.input.call(null,{"className": "submit", "value": "Search", "type": "submit", "onClick": ((function (comm,settings,login_user,search_box,search_box_div,things,my_things,this$__$1){
return (function (_){var search_key = dommy.core.value.call(null,search_box_div);return cljs.core.async.put_BANG_.call(null,comm,growingtree_app.mock_data.search_msg_nav_path.call(null,new cljs.core.Keyword(null,"all-things","all-things",1825895767),search_key));
});})(comm,settings,login_user,search_box,search_box_div,things,my_things,this$__$1))
})),(function (){var attrs11832 = cljs.core.map.call(null,cljs.core.partial.call(null,growingtree_app.components.navbar.thing_nav,comm,login_user),cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"order","order",-1254677256),things));if(cljs.core.map_QMARK_.call(null,attrs11832))
{return React.DOM.ul(sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["nav-ul"], null)], null),attrs11832)),null);
} else
{return React.DOM.ul({"className": "nav-ul"},sablono.interpreter.interpret.call(null,attrs11832));
}
})(),(function (){var attrs11833 = cljs.core.map.call(null,cljs.core.partial.call(null,growingtree_app.components.navbar.my_thing_nav,comm,login_user),cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"order","order",-1254677256),my_things));if(cljs.core.map_QMARK_.call(null,attrs11833))
{return React.DOM.ul(sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["nav-ul","my-nav"], null)], null),attrs11833)),null);
} else
{return React.DOM.ul({"className": "nav-ul my-nav"},sablono.interpreter.interpret.call(null,attrs11833));
}
})());
});
growingtree_app.components.navbar.t11829.prototype.om$core$IDisplayName$ = true;
growingtree_app.components.navbar.t11829.prototype.om$core$IDisplayName$display_name$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var or__3543__auto__ = new cljs.core.Keyword(null,"react-name","react-name",-834049397).cljs$core$IFn$_invoke$arity$1(self__.opts);if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return "Navbar";
}
});
growingtree_app.components.navbar.t11829.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11831){var self__ = this;
var _11831__$1 = this;return self__.meta11830;
});
growingtree_app.components.navbar.t11829.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11831,meta11830__$1){var self__ = this;
var _11831__$1 = this;return (new growingtree_app.components.navbar.t11829(self__.opts,self__.owner,self__.state,self__.navbar,meta11830__$1));
});
growingtree_app.components.navbar.__GT_t11829 = (function __GT_t11829(opts__$1,owner__$1,state__$1,navbar__$1,meta11830){return (new growingtree_app.components.navbar.t11829(opts__$1,owner__$1,state__$1,navbar__$1,meta11830));
});
}
return (new growingtree_app.components.navbar.t11829(opts,owner,state,navbar,null));
});

//# sourceMappingURL=navbar.js.map