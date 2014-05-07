// Compiled by ClojureScript 0.0-2173
goog.provide('growingtree_app.components.main_area');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('growingtree_app.plugins');
goog.require('sablono.core');
goog.require('cljs.core.async');
goog.require('sablono.core');
goog.require('om.dom');
goog.require('om.core');
goog.require('clojure.string');
goog.require('growingtree_app.datetime');
goog.require('om.core');
goog.require('growingtree_app.plugins');
goog.require('clojure.string');
goog.require('growingtree_app.utils');
goog.require('growingtree_app.utils');
goog.require('om.dom');
goog.require('cljs.core.async');
goog.require('growingtree_app.datetime');
growingtree_app.components.main_area.delimiter_re = / /;
growingtree_app.components.main_area.thing_content = (function thing_content(current_user_email,users,settings,author,activity){var content = growingtree_app.plugins.hex_embed.call(null,growingtree_app.plugins.rgb_embed.call(null,growingtree_app.plugins.links.call(null,growingtree_app.plugins.slash_play.call(null,growingtree_app.plugins.slash_me.call(null,growingtree_app.plugins.mentions.call(null,growingtree_app.plugins.pastie.call(null,clojure.string.split.call(null,new cljs.core.Keyword(null,"content","content",1965434859).cljs$core$IFn$_invoke$arity$1(activity),growingtree_app.components.main_area.delimiter_re)),current_user_email,users,settings,author),current_user_email,users)))));return cljs.core.interpose.call(null," ",content);
});
growingtree_app.components.main_area.thing_entry = (function thing_entry(current_user_email,users,settings,author,activity){return cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.thing.link","div.thing.link",2376401385),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",1013907597),[cljs.core.str("activity-"),cljs.core.str(new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(activity))].join(''),new cljs.core.Keyword(null,"class","class",1108647146),((cljs.core._EQ_.call(null,current_user_email,new cljs.core.Keyword(null,"email","email",1110523662).cljs$core$IFn$_invoke$arity$1(author)))?"current_user":null),new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"created_at","created_at",2383584348).cljs$core$IFn$_invoke$arity$1(activity)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.posted_at","span.posted_at",1306140929),[cljs.core.str(growingtree_app.datetime.time_ago.call(null,new cljs.core.Keyword(null,"created_at","created_at",2383584348).cljs$core$IFn$_invoke$arity$1(activity))),cljs.core.str(" ago")].join('')], null),growingtree_app.utils.gravatar_for.call(null,new cljs.core.Keyword(null,"email","email",1110523662).cljs$core$IFn$_invoke$arity$1(author)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.readable","div.readable",1511467039),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.user","span.user",4620099425),(function (){var or__3443__auto__ = new cljs.core.Keyword(null,"full-name","full-name",3585519227).cljs$core$IFn$_invoke$arity$1(author);if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{return new cljs.core.Keyword(null,"email","email",1110523662).cljs$core$IFn$_invoke$arity$1(author);
}
})()], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.content","span.content",4256384327),growingtree_app.components.main_area.thing_content.call(null,current_user_email,users,settings,author,activity)], null)], null),cljs.core.map.call(null,(function (media){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.media-entry","div.media-entry",4138135262),media], null);
}),cljs.core.remove.call(null,cljs.core.string_QMARK_,growingtree_app.plugins.vimeo_embed.call(null,growingtree_app.plugins.youtube_embed.call(null,growingtree_app.plugins.image_embed.call(null,clojure.string.split.call(null,new cljs.core.Keyword(null,"content","content",1965434859).cljs$core$IFn$_invoke$arity$1(activity),growingtree_app.components.main_area.delimiter_re))))))], null));
});
growingtree_app.components.main_area.chatbox = (function chatbox(comm,opts){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.chatbox","div.chatbox",3321066120),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea.chat-input","textarea.chat-input",3263729595),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-focus","on-focus",1419396828),(function (){return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-message-focused","user-message-focused",3790954785)], null));
}),new cljs.core.Keyword(null,"on-blur","on-blur",3936357127),(function (){return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-message-blurred","user-message-blurred",4466552948)], null));
}),new cljs.core.Keyword(null,"on-key-up","on-key-up",833769449),(function (p1__11129_SHARP_){if(cljs.core._EQ_.call(null,p1__11129_SHARP_.which,13))
{return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-message-submitted","user-message-submitted",1304334501)], null));
} else
{return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-message-updated","user-message-updated",4247565925),p1__11129_SHARP_.target.value], null));
}
})], null),(cljs.core.truth_(new cljs.core.Keyword(null,"input-focused?","input-focused?",2338465213).cljs$core$IFn$_invoke$arity$1(opts))?null:new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",1125876963),new cljs.core.Keyword(null,"input-value","input-value",3916329248).cljs$core$IFn$_invoke$arity$1(opts)], null)))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.post","button.post",3504098638),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1416542092),(function (){return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-message-submitted","user-message-submitted",1304334501)], null));
})], null),"Post"], null)], null);
});
growingtree_app.components.main_area.things_list = (function things_list(filtered_things,opts){return cljs.core.map.call(null,(function (p1__11130_SHARP_){var author = cljs.core.get_in.call(null,opts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"users","users",1125482874),new cljs.core.Keyword(null,"author","author",3902543101).cljs$core$IFn$_invoke$arity$1(p1__11130_SHARP_)], null));return growingtree_app.components.main_area.thing_entry.call(null,new cljs.core.Keyword(null,"current-user-email","current-user-email",4091392864).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"users","users",1125482874).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"settings","settings",2448535445).cljs$core$IFn$_invoke$arity$1(opts),author,p1__11130_SHARP_);
}),filtered_things);
});
growingtree_app.components.main_area.main_area = (function main_area(p__11132,owner,opts){var map__11137 = p__11132;var map__11137__$1 = ((cljs.core.seq_QMARK_.call(null,map__11137))?cljs.core.apply.call(null,cljs.core.hash_map,map__11137):map__11137);var search_filter = cljs.core.get.call(null,map__11137__$1,new cljs.core.Keyword(null,"search-filter","search-filter",674207407));var channel = cljs.core.get.call(null,map__11137__$1,new cljs.core.Keyword(null,"channel","channel",1752854645));if(typeof growingtree_app.components.main_area.t11138 !== 'undefined')
{} else
{
/**
* @constructor
*/
growingtree_app.components.main_area.t11138 = (function (channel,search_filter,map__11137,opts,owner,p__11132,main_area,meta11139){
this.channel = channel;
this.search_filter = search_filter;
this.map__11137 = map__11137;
this.opts = opts;
this.owner = owner;
this.p__11132 = p__11132;
this.main_area = main_area;
this.meta11139 = meta11139;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
growingtree_app.components.main_area.t11138.cljs$lang$type = true;
growingtree_app.components.main_area.t11138.cljs$lang$ctorStr = "growingtree-app.components.main-area/t11138";
growingtree_app.components.main_area.t11138.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"growingtree-app.components.main-area/t11138");
});
growingtree_app.components.main_area.t11138.prototype.om$core$IRender$ = true;
growingtree_app.components.main_area.t11138.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return sablono.interpreter.interpret.call(null,(function (){var comm = cljs.core.get_in.call(null,self__.opts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"comms","comms",1108747865),new cljs.core.Keyword(null,"controls","controls",4741937704)], null));var re_filter = (cljs.core.truth_(self__.search_filter)?(new RegExp(self__.search_filter,"ig")):null);var activities = new cljs.core.Keyword(null,"activities","activities",3062509407).cljs$core$IFn$_invoke$arity$1(self__.channel);var filtered_things = (cljs.core.truth_(re_filter)?cljs.core.filter.call(null,((function (comm,re_filter,activities){
return (function (p1__11131_SHARP_){return new cljs.core.Keyword(null,"content","content",1965434859).cljs$core$IFn$_invoke$arity$1(p1__11131_SHARP_).match(re_filter);
});})(comm,re_filter,activities))
,activities):activities);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"article.main-area","article.main-area",2825875611),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"header.header","header.header",4226879616),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.nav-toggle.button.left","a.nav-toggle.button.left",3678030386),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",1017115293),"#",new cljs.core.Keyword(null,"on-click","on-click",1416542092),(function (){return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"left-sidebar-toggled","left-sidebar-toggled",1753163723)], null));
})], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.icon-comments","i.icon-comments",3985629045)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.sidebar-toggle.button.right","a.sidebar-toggle.button.right",3925274670),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",1017115293),"#",new cljs.core.Keyword(null,"on-click","on-click",1416542092),(function (){return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"right-sidebar-toggled","right-sidebar-toggled",1915715552)], null));
})], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.icon-reorder","i.icon-reorder",2638596222)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.logo","a.logo",3836741258),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",1017115293),"#/",new cljs.core.Keyword(null,"on-click","on-click",1416542092),cljs.core.constantly.call(null,false)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1014008629),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"src","src",1014018390),"/assets/images/logo.png",new cljs.core.Keyword(null,"alt","alt",1014000923),"growingtree-app",new cljs.core.Keyword(null,"title","title",1124275658),"growingtree-app"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container","div.container",4254619350),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.content","div.content",3533478798),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.paginated-activities","div.paginated-activities",3824313244),growingtree_app.components.main_area.things_list.call(null,filtered_things,self__.opts)], null),growingtree_app.components.main_area.chatbox.call(null,comm,self__.opts)], null)], null)], null);
})());
});
growingtree_app.components.main_area.t11138.prototype.om$core$IDisplayName$ = true;
growingtree_app.components.main_area.t11138.prototype.om$core$IDisplayName$display_name$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return "MainArea";
});
growingtree_app.components.main_area.t11138.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11140){var self__ = this;
var _11140__$1 = this;return self__.meta11139;
});
growingtree_app.components.main_area.t11138.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11140,meta11139__$1){var self__ = this;
var _11140__$1 = this;return (new growingtree_app.components.main_area.t11138(self__.channel,self__.search_filter,self__.map__11137,self__.opts,self__.owner,self__.p__11132,self__.main_area,meta11139__$1));
});
growingtree_app.components.main_area.__GT_t11138 = (function __GT_t11138(channel__$1,search_filter__$1,map__11137__$2,opts__$1,owner__$1,p__11132__$1,main_area__$1,meta11139){return (new growingtree_app.components.main_area.t11138(channel__$1,search_filter__$1,map__11137__$2,opts__$1,owner__$1,p__11132__$1,main_area__$1,meta11139));
});
}
return (new growingtree_app.components.main_area.t11138(channel,search_filter,map__11137__$1,opts,owner,p__11132,main_area,null));
});

//# sourceMappingURL=main_area.js.map