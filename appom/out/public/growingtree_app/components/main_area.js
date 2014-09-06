// Compiled by ClojureScript 0.0-2277
goog.provide('growingtree_app.components.main_area');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('growingtree_app.plugins');
goog.require('om.dom');
goog.require('sablono.core');
goog.require('growingtree_app.components.newthing_form');
goog.require('cljs.core.async');
goog.require('dommy.core');
goog.require('om.dom');
goog.require('cljs.core.async');
goog.require('growingtree_app.components.entity_view');
goog.require('growingtree_app.components.entity_view');
goog.require('growingtree_app.datetime');
goog.require('sablono.core');
goog.require('growingtree_app.datetime');
goog.require('growingtree_app.utils');
goog.require('clojure.string');
goog.require('om.core');
goog.require('dommy.core');
goog.require('om.core');
goog.require('growingtree_app.utils');
goog.require('growingtree_app.components.newthing_form');
goog.require('clojure.string');
goog.require('growingtree_app.plugins');
growingtree_app.components.main_area.delimiter_re = / /;
growingtree_app.components.main_area.main_area = (function main_area(p__11667,owner,opts){var map__11672 = p__11667;var map__11672__$1 = ((cljs.core.seq_QMARK_.call(null,map__11672))?cljs.core.apply.call(null,cljs.core.hash_map,map__11672):map__11672);var search_filter = cljs.core.get.call(null,map__11672__$1,new cljs.core.Keyword(null,"search-filter","search-filter",274098807));var channel = cljs.core.get.call(null,map__11672__$1,new cljs.core.Keyword(null,"channel","channel",734187692));var nav_path = cljs.core.get.call(null,map__11672__$1,new cljs.core.Keyword(null,"nav-path","nav-path",-444531376));var app = cljs.core.get.call(null,map__11672__$1,new cljs.core.Keyword(null,"app","app",-560961707));if(typeof growingtree_app.components.main_area.t11673 !== 'undefined')
{} else
{
/**
* @constructor
*/
growingtree_app.components.main_area.t11673 = (function (app,nav_path,channel,search_filter,map__11672,opts,owner,p__11667,main_area,meta11674){
this.app = app;
this.nav_path = nav_path;
this.channel = channel;
this.search_filter = search_filter;
this.map__11672 = map__11672;
this.opts = opts;
this.owner = owner;
this.p__11667 = p__11667;
this.main_area = main_area;
this.meta11674 = meta11674;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
growingtree_app.components.main_area.t11673.cljs$lang$type = true;
growingtree_app.components.main_area.t11673.cljs$lang$ctorStr = "growingtree-app.components.main-area/t11673";
growingtree_app.components.main_area.t11673.cljs$lang$ctorPrWriter = ((function (map__11672,map__11672__$1,search_filter,channel,nav_path,app){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"growingtree-app.components.main-area/t11673");
});})(map__11672,map__11672__$1,search_filter,channel,nav_path,app))
;
growingtree_app.components.main_area.t11673.prototype.om$core$IRender$ = true;
growingtree_app.components.main_area.t11673.prototype.om$core$IRender$render$arity$1 = ((function (map__11672,map__11672__$1,search_filter,channel,nav_path,app){
return (function (this$){var self__ = this;
var this$__$1 = this;return growingtree_app.components.main_area.main_html.call(null,self__.app,self__.nav_path,self__.search_filter,self__.opts);
});})(map__11672,map__11672__$1,search_filter,channel,nav_path,app))
;
growingtree_app.components.main_area.t11673.prototype.om$core$IDisplayName$ = true;
growingtree_app.components.main_area.t11673.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (map__11672,map__11672__$1,search_filter,channel,nav_path,app){
return (function (_){var self__ = this;
var ___$1 = this;return "MainArea";
});})(map__11672,map__11672__$1,search_filter,channel,nav_path,app))
;
growingtree_app.components.main_area.t11673.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__11672,map__11672__$1,search_filter,channel,nav_path,app){
return (function (_11675){var self__ = this;
var _11675__$1 = this;return self__.meta11674;
});})(map__11672,map__11672__$1,search_filter,channel,nav_path,app))
;
growingtree_app.components.main_area.t11673.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__11672,map__11672__$1,search_filter,channel,nav_path,app){
return (function (_11675,meta11674__$1){var self__ = this;
var _11675__$1 = this;return (new growingtree_app.components.main_area.t11673(self__.app,self__.nav_path,self__.channel,self__.search_filter,self__.map__11672,self__.opts,self__.owner,self__.p__11667,self__.main_area,meta11674__$1));
});})(map__11672,map__11672__$1,search_filter,channel,nav_path,app))
;
growingtree_app.components.main_area.__GT_t11673 = ((function (map__11672,map__11672__$1,search_filter,channel,nav_path,app){
return (function __GT_t11673(app__$1,nav_path__$1,channel__$1,search_filter__$1,map__11672__$2,opts__$1,owner__$1,p__11667__$1,main_area__$1,meta11674){return (new growingtree_app.components.main_area.t11673(app__$1,nav_path__$1,channel__$1,search_filter__$1,map__11672__$2,opts__$1,owner__$1,p__11667__$1,main_area__$1,meta11674));
});})(map__11672,map__11672__$1,search_filter,channel,nav_path,app))
;
}
return (new growingtree_app.components.main_area.t11673(app,nav_path,channel,search_filter,map__11672__$1,opts,owner,p__11667,main_area,null));
});
growingtree_app.components.main_area.main_html = (function main_html(app,nav_path,search_filter,opts){return sablono.interpreter.interpret.call(null,(function (){var comm = cljs.core.get_in.call(null,opts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"comms","comms",460172477),new cljs.core.Keyword(null,"controls","controls",1340701452)], null));return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"article.main-area","article.main-area",1213372530),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"header.header","header.header",1073294241),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.nav-toggle.button.left","a.nav-toggle.button.left",-1305771191),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (comm){
return (function (){return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"left-sidebar-toggled","left-sidebar-toggled",888056217)], null));
});})(comm))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.fa.fa-comments","i.fa.fa-comments",1110987117)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.sidebar-toggle.button.right","a.sidebar-toggle.button.right",127383111),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (comm){
return (function (){return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"right-sidebar-toggled","right-sidebar-toggled",925883782)], null));
});})(comm))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.fa.fa-bars","i.fa.fa-bars",-1114139547)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.logo","a.logo",-1973083755),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"on-click","on-click",1632826543),cljs.core.constantly.call(null,false)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"src","src",-1651076051),"logo_app.png",new cljs.core.Keyword(null,"height","height",1025178622),"35",new cljs.core.Keyword(null,"title","title",636505583),"growingtree-app"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#content","div#content",-850771127),growingtree_app.components.main_area.main_content.call(null,app,nav_path,search_filter,opts)], null)], null);
})());
});
growingtree_app.components.main_area.main_content = (function (){var method_table__4409__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__4410__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__4411__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__4412__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__4413__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("main-content",((function (method_table__4409__auto__,prefer_table__4410__auto__,method_cache__4411__auto__,cached_hierarchy__4412__auto__,hierarchy__4413__auto__){
return (function (app,nav_path,search_filter,opts){if(cljs.core.truth_(new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(nav_path)))
{return cljs.core.first.call(null,new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(nav_path));
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{return new cljs.core.Keyword(null,"default","default",-1987822328);
} else
{return null;
}
}
});})(method_table__4409__auto__,prefer_table__4410__auto__,method_cache__4411__auto__,cached_hierarchy__4412__auto__,hierarchy__4413__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4413__auto__,method_table__4409__auto__,prefer_table__4410__auto__,method_cache__4411__auto__,cached_hierarchy__4412__auto__));
})();
cljs.core._add_method.call(null,growingtree_app.components.main_area.main_content,new cljs.core.Keyword(null,"default","default",-1987822328),(function (app,nav_path,search_filter,opts){return console.log(cljs.core.pr_str.call(null,"main content nav-path body slot no query filter. do nothing ",nav_path));
}));
cljs.core._add_method.call(null,growingtree_app.components.main_area.main_content,new cljs.core.Keyword(null,"all-things","all-things",1825895767),(function (app,nav_path,search_filter,opts){console.log(cljs.core.pr_str.call(null,"main content nav-path body :all-things ",nav_path));
var thing_type = cljs.core.get_in.call(null,nav_path,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"body","body",-2049205669),(1),(2)], null));return growingtree_app.components.main_area.list_things.call(null,app,thing_type,nav_path,search_filter,opts);
}));
cljs.core._add_method.call(null,growingtree_app.components.main_area.main_content,new cljs.core.Keyword(null,"filter-things","filter-things",-1018039660),(function (app,nav_path,search_filter,opts){var comm = cljs.core.get_in.call(null,app,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"comms","comms",460172477),new cljs.core.Keyword(null,"controls","controls",1340701452)], null));var thing_type = cljs.core.get_in.call(null,nav_path,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"body","body",-2049205669),(1),(2)], null));var add_thing = cljs.core.keyword.call(null,("add-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,thing_type))));var join_thing = cljs.core.keyword.call(null,("join-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,thing_type))));var topview = cljs.core.get_in.call(null,app,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"top","top",-1856271961)], null));var pid = cljs.core.get_in.call(null,nav_path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"pid","pid",1018387698)], null));var override = (function (){var G__11676 = cljs.core.PersistentArrayMap.EMPTY;var G__11676__$1 = (cljs.core.truth_(pid)?cljs.core.merge.call(null,G__11676,growingtree_app.components.entity_view.actionkey_class.call(null,pid,thing_type,"hide")):G__11676);var G__11676__$2 = (cljs.core.truth_(pid)?cljs.core.merge.call(null,G__11676__$1,growingtree_app.components.entity_view.actionkey_class.call(null,pid,add_thing," ")):G__11676__$1);var G__11676__$3 = (cljs.core.truth_(pid)?cljs.core.merge.call(null,G__11676__$2,growingtree_app.components.entity_view.actionkey_class.call(null,pid,join_thing," ")):G__11676__$2);return G__11676__$3;
})();console.log("main-content showing filter-things ",cljs.core.pr_str.call(null,pid,thing_type));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(cljs.core.truth_(pid)?growingtree_app.components.main_area.thing_entry.call(null,app,topview,override):null),(cljs.core.truth_(pid)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr","hr",1377740067),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),(4)], null)], null):null),growingtree_app.components.main_area.add_thing_forms.call(null,app,nav_path,search_filter,opts),growingtree_app.components.main_area.list_things.call(null,app,thing_type,nav_path,search_filter,opts)], null);
}));
cljs.core._add_method.call(null,growingtree_app.components.main_area.main_content,new cljs.core.Keyword(null,"newthing-form","newthing-form",-676457503),(function (app,nav_path,search_filter){var comm = cljs.core.get_in.call(null,app,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"comms","comms",460172477),new cljs.core.Keyword(null,"controls","controls",1340701452)], null));var thing_type = cljs.core.get_in.call(null,nav_path,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"body","body",-2049205669),(1),(1)], null));var title = cljs.core.get_in.call(null,app,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"title","title",636505583)], null));var pid = cljs.core.get_in.call(null,nav_path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"pid","pid",1018387698)], null));var override = (cljs.core.truth_(pid)?growingtree_app.components.entity_view.actionkey_class.call(null,pid,thing_type,"hide"):cljs.core.PersistentArrayMap.EMPTY);console.log("main-content newthing-form with pid ",pid,cljs.core.pr_str.call(null,thing_type,override));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(cljs.core.truth_(pid)?growingtree_app.components.main_area.thing_entry.call(null,app,title,override):null),(cljs.core.truth_(pid)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr","hr",1377740067),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),(4)], null)], null):null),growingtree_app.components.newthing_form.add_form.call(null,thing_type,comm,nav_path)], null);
}));
cljs.core._add_method.call(null,growingtree_app.components.main_area.main_content,new cljs.core.Keyword(null,"refresh","refresh",1947415525),(function (app,nav_path,search_filter,opts){var comm = cljs.core.get_in.call(null,app,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"comms","comms",460172477),new cljs.core.Keyword(null,"controls","controls",1340701452)], null));var last_nav_path = cljs.core.last.call(null,cljs.core.drop_last.call(null,cljs.core.get_in.call(null,app,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nav-path","nav-path",-444531376)], null))));var msg_type = cljs.core.get_in.call(null,last_nav_path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"body","body",-2049205669),(0)], null));var thing_type = cljs.core.get.call(null,nav_path,new cljs.core.Keyword(null,"add-thing","add-thing",321362583));var error = cljs.core.get_in.call(null,cljs.core.get_in.call(null,app,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"status-text","status-text",-1834235478)], null));var error__$1 = cljs.core.get_in.call(null,app,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null));console.log(cljs.core.pr_str.call(null,"main content add-thing trigger refresh ",last_nav_path,nav_path));
if(cljs.core.not.call(null,error__$1))
{return growingtree_app.components.main_area.main_content.call(null,app,last_nav_path,search_filter,opts);
} else
{console.log(cljs.core.pr_str.call(null,"add-thing error ",msg_type,last_nav_path,error__$1));
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"refresh","refresh",1947415525),last_nav_path], null));
}
}));
growingtree_app.components.main_area.list_things = (function list_things(app,thing_type,nav_path,search_filter,opts){console.log(cljs.core.pr_str.call(null,"main content listing things  ",thing_type," nav-path ",nav_path));
var comm = cljs.core.get_in.call(null,opts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"comms","comms",460172477),new cljs.core.Keyword(null,"controls","controls",1340701452)], null));var things_vec = cljs.core.get_in.call(null,app,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"body","body",-2049205669)], null));var re_filter = (cljs.core.truth_(search_filter)?(new RegExp(search_filter,"ig")):null);var filtered_things = (cljs.core.truth_(re_filter)?cljs.core.filter.call(null,((function (comm,things_vec,re_filter){
return (function (p1__11677_SHARP_){return new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(p1__11677_SHARP_).match(re_filter);
});})(comm,things_vec,re_filter))
,things_vec):things_vec);var things = cljs.core.map.call(null,((function (comm,things_vec,re_filter,filtered_things){
return (function (p1__11678_SHARP_){var author = cljs.core.get_in.call(null,opts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"users","users",-713552705),new cljs.core.Keyword(null,"author","author",2111686192).cljs$core$IFn$_invoke$arity$1(p1__11678_SHARP_)], null));return growingtree_app.components.main_area.thing_entry.call(null,app,p1__11678_SHARP_,cljs.core.PersistentArrayMap.EMPTY);
});})(comm,things_vec,re_filter,filtered_things))
,filtered_things);return cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.paginated-activities","div.paginated-activities",1377091438),things], null));
});
growingtree_app.components.main_area.thing_entry = (function thing_entry(app,thing_data,override){var thing_type = growingtree_app.utils.thing_ident.call(null,thing_data);return growingtree_app.components.entity_view.thing_entry.call(null,app,thing_type,thing_data,override);
});
growingtree_app.components.main_area.add_thing_forms = (function add_thing_forms(app,nav_path,search_filter,opts){var comm = cljs.core.get_in.call(null,app,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"comms","comms",460172477),new cljs.core.Keyword(null,"controls","controls",1340701452)], null));var thing_type = cljs.core.get_in.call(null,nav_path,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"body","body",-2049205669),(1),(2)], null));var topview = cljs.core.get_in.call(null,app,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"top","top",-1856271961)], null));var pid = cljs.core.get_in.call(null,nav_path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"pid","pid",1018387698)], null));if(cljs.core.truth_((dommy.utils.__GT_Array.call(null,document.getElementsByClassName("add-child-form"))[(0)])))
{dommy.core.add_class_BANG_.call(null,(dommy.utils.__GT_Array.call(null,document.getElementsByClassName("add-child-form"))[(0)]),"hide");
} else
{}
if(cljs.core.truth_((dommy.utils.__GT_Array.call(null,document.getElementsByClassName("add-lecture-form"))[(0)])))
{dommy.core.add_class_BANG_.call(null,(dommy.utils.__GT_Array.call(null,document.getElementsByClassName("add-lecture-form"))[(0)]),"hide");
} else
{}
if(cljs.core.truth_((dommy.utils.__GT_Array.call(null,document.getElementsByClassName("add-question-form"))[(0)])))
{dommy.core.add_class_BANG_.call(null,(dommy.utils.__GT_Array.call(null,document.getElementsByClassName("add-question-form"))[(0)]),"hide");
} else
{}
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.forms","div.forms",-1775535839),growingtree_app.components.newthing_form.add_form.call(null,new cljs.core.Keyword(null,"add-child","add-child",1455054133),comm,nav_path),growingtree_app.components.newthing_form.add_form.call(null,new cljs.core.Keyword(null,"add-lecture","add-lecture",-70422632),comm,nav_path),growingtree_app.components.newthing_form.add_form.call(null,new cljs.core.Keyword(null,"add-question","add-question",1475121863),comm,nav_path)], null);
});
growingtree_app.components.main_area.chatbox = (function chatbox(comm,opts){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.chatbox","div.chatbox",688344411),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea.chat-input","textarea.chat-input",-1856842913),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-focus","on-focus",-13737624),(function (){return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-message-focused","user-message-focused",311890539)], null));
}),new cljs.core.Keyword(null,"on-blur","on-blur",814300747),(function (){return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-message-blurred","user-message-blurred",-1490430673)], null));
}),new cljs.core.Keyword(null,"on-key-up","on-key-up",884441808),(function (p1__11679_SHARP_){if(cljs.core._EQ_.call(null,p1__11679_SHARP_.which,(13)))
{return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-message-submitted","user-message-submitted",-877574457)], null));
} else
{return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-message-updated","user-message-updated",49302425),p1__11679_SHARP_.target.value], null));
}
})], null),(cljs.core.truth_(new cljs.core.Keyword(null,"input-focused?","input-focused?",445310096).cljs$core$IFn$_invoke$arity$1(opts))?null:new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"input-value","input-value",-1719954369).cljs$core$IFn$_invoke$arity$1(opts)], null)))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.post","button.post",-1828589430),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-message-submitted","user-message-submitted",-877574457)], null));
})], null),"Post"], null)], null);
});

//# sourceMappingURL=main_area.js.map