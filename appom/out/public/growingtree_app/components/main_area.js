// Compiled by ClojureScript 0.0-2173
goog.provide('growingtree_app.components.main_area');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('growingtree_app.plugins');
goog.require('growingtree_app.components.entity_view');
goog.require('sablono.core');
goog.require('cljs.core.async');
goog.require('growingtree_app.components.entity_view');
goog.require('sablono.core');
goog.require('om.dom');
goog.require('om.core');
goog.require('clojure.string');
goog.require('growingtree_app.datetime');
goog.require('om.core');
goog.require('growingtree_app.plugins');
goog.require('growingtree_app.components.newthing_form');
goog.require('growingtree_app.components.newthing_form');
goog.require('clojure.string');
goog.require('growingtree_app.utils');
goog.require('growingtree_app.utils');
goog.require('om.dom');
goog.require('dommy.core');
goog.require('cljs.core.async');
goog.require('growingtree_app.datetime');
goog.require('dommy.core');
growingtree_app.components.main_area.delimiter_re = / /;
growingtree_app.components.main_area.main_area = (function main_area(p__11234,owner,opts){var map__11239 = p__11234;var map__11239__$1 = ((cljs.core.seq_QMARK_.call(null,map__11239))?cljs.core.apply.call(null,cljs.core.hash_map,map__11239):map__11239);var search_filter = cljs.core.get.call(null,map__11239__$1,new cljs.core.Keyword(null,"search-filter","search-filter",674207407));var channel = cljs.core.get.call(null,map__11239__$1,new cljs.core.Keyword(null,"channel","channel",1752854645));var nav_path_things = cljs.core.get.call(null,map__11239__$1,new cljs.core.Keyword(null,"nav-path-things","nav-path-things",3876793781));var nav_path = cljs.core.get.call(null,map__11239__$1,new cljs.core.Keyword(null,"nav-path","nav-path",3061255681));if(typeof growingtree_app.components.main_area.t11240 !== 'undefined')
{} else
{
/**
* @constructor
*/
growingtree_app.components.main_area.t11240 = (function (nav_path,nav_path_things,channel,search_filter,map__11239,opts,owner,p__11234,main_area,meta11241){
this.nav_path = nav_path;
this.nav_path_things = nav_path_things;
this.channel = channel;
this.search_filter = search_filter;
this.map__11239 = map__11239;
this.opts = opts;
this.owner = owner;
this.p__11234 = p__11234;
this.main_area = main_area;
this.meta11241 = meta11241;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
growingtree_app.components.main_area.t11240.cljs$lang$type = true;
growingtree_app.components.main_area.t11240.cljs$lang$ctorStr = "growingtree-app.components.main-area/t11240";
growingtree_app.components.main_area.t11240.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"growingtree-app.components.main-area/t11240");
});
growingtree_app.components.main_area.t11240.prototype.om$core$IRender$ = true;
growingtree_app.components.main_area.t11240.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return sablono.interpreter.interpret.call(null,(function (){var comm = cljs.core.get_in.call(null,self__.opts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"comms","comms",1108747865),new cljs.core.Keyword(null,"controls","controls",4741937704)], null));console.log("rendering main-area ",cljs.core.pr_str.call(null,self__.nav_path)," ",cljs.core.pr_str.call(null,self__.nav_path_things));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"article.main-area","article.main-area",2825875611),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"header.header","header.header",4226879616),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.nav-toggle.button.left","a.nav-toggle.button.left",3678030386),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",1017115293),"#",new cljs.core.Keyword(null,"on-click","on-click",1416542092),(function (){return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"left-sidebar-toggled","left-sidebar-toggled",1753163723)], null));
})], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.fa.fa-comments","i.fa.fa-comments",1974601130)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.sidebar-toggle.button.right","a.sidebar-toggle.button.right",3925274670),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",1017115293),"#",new cljs.core.Keyword(null,"on-click","on-click",1416542092),(function (){return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"right-sidebar-toggled","right-sidebar-toggled",1915715552)], null));
})], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.fa.fa-bars","i.fa.fa-bars",4545900662)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.logo","a.logo",3836741258),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",1017115293),"#",new cljs.core.Keyword(null,"on-click","on-click",1416542092),cljs.core.constantly.call(null,false)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1014008629),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"src","src",1014018390),"logo_app.png",new cljs.core.Keyword(null,"height","height",4087841945),"35",new cljs.core.Keyword(null,"title","title",1124275658),"growingtree-app"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container","div.container",4254619350),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#content","div#content",1542434297),growingtree_app.components.main_area.main_content.call(null,self__.nav_path,self__.nav_path_things,self__.search_filter,self__.opts)], null)], null)], null);
})());
});
growingtree_app.components.main_area.t11240.prototype.om$core$IDisplayName$ = true;
growingtree_app.components.main_area.t11240.prototype.om$core$IDisplayName$display_name$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return "MainArea";
});
growingtree_app.components.main_area.t11240.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11242){var self__ = this;
var _11242__$1 = this;return self__.meta11241;
});
growingtree_app.components.main_area.t11240.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11242,meta11241__$1){var self__ = this;
var _11242__$1 = this;return (new growingtree_app.components.main_area.t11240(self__.nav_path,self__.nav_path_things,self__.channel,self__.search_filter,self__.map__11239,self__.opts,self__.owner,self__.p__11234,self__.main_area,meta11241__$1));
});
growingtree_app.components.main_area.__GT_t11240 = (function __GT_t11240(nav_path__$1,nav_path_things__$1,channel__$1,search_filter__$1,map__11239__$2,opts__$1,owner__$1,p__11234__$1,main_area__$1,meta11241){return (new growingtree_app.components.main_area.t11240(nav_path__$1,nav_path_things__$1,channel__$1,search_filter__$1,map__11239__$2,opts__$1,owner__$1,p__11234__$1,main_area__$1,meta11241));
});
}
return (new growingtree_app.components.main_area.t11240(nav_path,nav_path_things,channel,search_filter,map__11239__$1,opts,owner,p__11234,main_area,null));
});
growingtree_app.components.main_area.main_content = (function (){var method_table__4301__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__4302__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__4303__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__4304__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__4305__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("main-content",(function (nav_path,things,search_filter,opts){return cljs.core.first.call(null,new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(nav_path));
}),new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__4305__auto__,method_table__4301__auto__,prefer_table__4302__auto__,method_cache__4303__auto__,cached_hierarchy__4304__auto__));
})();
cljs.core._add_method.call(null,growingtree_app.components.main_area.main_content,new cljs.core.Keyword(null,"add-thing","add-thing",4221519924),(function (nav_path,things,search_filter,opts){console.log("main content add-thing form ",cljs.core.pr_str.call(null,nav_path));
var comm = cljs.core.get_in.call(null,opts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"comms","comms",1108747865),new cljs.core.Keyword(null,"controls","controls",4741937704)], null));var thing_type = cljs.core.last.call(null,new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(nav_path));return growingtree_app.components.newthing_form.add_form.call(null,thing_type,comm);
}));
cljs.core._add_method.call(null,growingtree_app.components.main_area.main_content,new cljs.core.Keyword(null,"create-thing","create-thing",1461485647),(function (nav_path,things,search_filter,opts){console.log("main content submit create-thing ",cljs.core.pr_str.call(null,nav_path));
return growingtree_app.components.main_area.things_list.call(null,new cljs.core.Keyword(null,"parent","parent",4313447452),things,search_filter,opts);
}));
cljs.core._add_method.call(null,growingtree_app.components.main_area.main_content,new cljs.core.Keyword(null,"default","default",2558708147),(function (nav_path,things,search_filter,opts){console.log("main content default thing listing ",cljs.core.pr_str.call(null,nav_path));
var thing_type = cljs.core.last.call(null,new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(nav_path));return growingtree_app.components.main_area.things_list.call(null,thing_type,things,search_filter,opts);
}));
growingtree_app.components.main_area.things_list = (function things_list(thing_type,things,search_filter,opts){var things_vec = things;var re_filter = (cljs.core.truth_(search_filter)?(new RegExp(search_filter,"ig")):null);var filtered_things = (cljs.core.truth_(re_filter)?cljs.core.filter.call(null,((function (things_vec,re_filter){
return (function (p1__11243_SHARP_){return new cljs.core.Keyword(null,"content","content",1965434859).cljs$core$IFn$_invoke$arity$1(p1__11243_SHARP_).match(re_filter);
});})(things_vec,re_filter))
,things_vec):things_vec);var thing_listing = cljs.core.map.call(null,((function (things_vec,re_filter,filtered_things){
return (function (p1__11244_SHARP_){var author = cljs.core.get_in.call(null,opts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"users","users",1125482874),new cljs.core.Keyword(null,"author","author",3902543101).cljs$core$IFn$_invoke$arity$1(p1__11244_SHARP_)], null));return growingtree_app.components.main_area.thing_entry.call(null,new cljs.core.Keyword(null,"current-user-email","current-user-email",4091392864).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"users","users",1125482874).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"settings","settings",2448535445).cljs$core$IFn$_invoke$arity$1(opts),author,p1__11244_SHARP_);
});})(things_vec,re_filter,filtered_things))
,filtered_things);return cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.paginated-activities","div.paginated-activities",3824313244),thing_listing], null));
});
growingtree_app.components.main_area.thing_entry = (function thing_entry(current_user_email,users,settings,author,thing_data){console.log("thing-entry ",cljs.core.pr_str.call(null,thing_data),cljs.core.pr_str.call(null,growingtree_app.utils.thing_ident.call(null,thing_data)));
var thing_type = growingtree_app.utils.thing_ident.call(null,thing_data);return growingtree_app.components.entity_view.thing_entry.call(null,thing_type,thing_data);
});
growingtree_app.components.main_area.thing_content = (function thing_content(current_user_email,users,settings,author,activity){var content = growingtree_app.plugins.hex_embed.call(null,growingtree_app.plugins.rgb_embed.call(null,growingtree_app.plugins.links.call(null,growingtree_app.plugins.slash_play.call(null,growingtree_app.plugins.slash_me.call(null,growingtree_app.plugins.mentions.call(null,growingtree_app.plugins.pastie.call(null,clojure.string.split.call(null,new cljs.core.Keyword(null,"content","content",1965434859).cljs$core$IFn$_invoke$arity$1(activity),growingtree_app.components.main_area.delimiter_re)),current_user_email,users,settings,author),current_user_email,users)))));return cljs.core.interpose.call(null," ",content);
});
growingtree_app.components.main_area.chatbox = (function chatbox(comm,opts){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.chatbox","div.chatbox",3321066120),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea.chat-input","textarea.chat-input",3263729595),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-focus","on-focus",1419396828),(function (){return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-message-focused","user-message-focused",3790954785)], null));
}),new cljs.core.Keyword(null,"on-blur","on-blur",3936357127),(function (){return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-message-blurred","user-message-blurred",4466552948)], null));
}),new cljs.core.Keyword(null,"on-key-up","on-key-up",833769449),(function (p1__11245_SHARP_){if(cljs.core._EQ_.call(null,p1__11245_SHARP_.which,13))
{return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-message-submitted","user-message-submitted",1304334501)], null));
} else
{return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-message-updated","user-message-updated",4247565925),p1__11245_SHARP_.target.value], null));
}
})], null),(cljs.core.truth_(new cljs.core.Keyword(null,"input-focused?","input-focused?",2338465213).cljs$core$IFn$_invoke$arity$1(opts))?null:new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",1125876963),new cljs.core.Keyword(null,"input-value","input-value",3916329248).cljs$core$IFn$_invoke$arity$1(opts)], null)))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.post","button.post",3504098638),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1416542092),(function (){return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-message-submitted","user-message-submitted",1304334501)], null));
})], null),"Post"], null)], null);
});

//# sourceMappingURL=main_area.js.map