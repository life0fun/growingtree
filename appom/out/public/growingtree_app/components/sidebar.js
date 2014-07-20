// Compiled by ClojureScript 0.0-2173
goog.provide('growingtree_app.components.sidebar');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('sablono.core');
goog.require('cljs.core.async');
goog.require('goog.string');
goog.require('sablono.core');
goog.require('om.core');
goog.require('clojure.string');
goog.require('om.core');
goog.require('clojure.string');
goog.require('growingtree_app.utils');
goog.require('growingtree_app.utils');
goog.require('cljs.core.async');
goog.require('goog.string');
growingtree_app.components.sidebar.people_entry = (function people_entry(comm,person){return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.user","li.user",1132196110),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",1124275658),(function (){var or__3443__auto__ = new cljs.core.Keyword(null,"full-name","full-name",3585519227).cljs$core$IFn$_invoke$arity$1(person);if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = new cljs.core.Keyword(null,"username","username",748190792).cljs$core$IFn$_invoke$arity$1(person);if(cljs.core.truth_(or__3443__auto____$1))
{return or__3443__auto____$1;
} else
{return new cljs.core.Keyword(null,"email","email",1110523662).cljs$core$IFn$_invoke$arity$1(person);
}
}
})(),new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"email","email",1110523662).cljs$core$IFn$_invoke$arity$1(person)], null),growingtree_app.utils.gravatar_for.call(null,new cljs.core.Keyword(null,"email","email",1110523662).cljs$core$IFn$_invoke$arity$1(person)),(function (){var or__3443__auto__ = new cljs.core.Keyword(null,"full-name","full-name",3585519227).cljs$core$IFn$_invoke$arity$1(person);if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{return new cljs.core.Keyword(null,"username","username",748190792).cljs$core$IFn$_invoke$arity$1(person);
}
})()], null);
});
growingtree_app.components.sidebar.people_widget = (function people_widget(p__11901,owner,opts){var map__11906 = p__11901;var map__11906__$1 = ((cljs.core.seq_QMARK_.call(null,map__11906))?cljs.core.apply.call(null,cljs.core.hash_map,map__11906):map__11906);var data = map__11906__$1;var search_filter = cljs.core.get.call(null,map__11906__$1,new cljs.core.Keyword(null,"search-filter","search-filter",674207407));var channel_users_emails = cljs.core.get.call(null,map__11906__$1,new cljs.core.Keyword(null,"channel-users-emails","channel-users-emails",2413740984));if(typeof growingtree_app.components.sidebar.t11907 !== 'undefined')
{} else
{
/**
* @constructor
*/
growingtree_app.components.sidebar.t11907 = (function (channel_users_emails,search_filter,data,map__11906,opts,owner,p__11901,people_widget,meta11908){
this.channel_users_emails = channel_users_emails;
this.search_filter = search_filter;
this.data = data;
this.map__11906 = map__11906;
this.opts = opts;
this.owner = owner;
this.p__11901 = p__11901;
this.people_widget = people_widget;
this.meta11908 = meta11908;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
growingtree_app.components.sidebar.t11907.cljs$lang$type = true;
growingtree_app.components.sidebar.t11907.cljs$lang$ctorStr = "growingtree-app.components.sidebar/t11907";
growingtree_app.components.sidebar.t11907.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"growingtree-app.components.sidebar/t11907");
});
growingtree_app.components.sidebar.t11907.prototype.om$core$IRender$ = true;
growingtree_app.components.sidebar.t11907.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return sablono.interpreter.interpret.call(null,(function (){var comm = cljs.core.get_in.call(null,self__.opts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"comms","comms",1108747865),new cljs.core.Keyword(null,"controls","controls",4741937704)], null));var re_filter = (cljs.core.truth_(self__.search_filter)?(new RegExp(self__.search_filter,"ig")):null);var channel_users = cljs.core.vals.call(null,cljs.core.select_keys.call(null,new cljs.core.Keyword(null,"users","users",1125482874).cljs$core$IFn$_invoke$arity$1(self__.opts),self__.channel_users_emails));var fil_users = (cljs.core.truth_(re_filter)?cljs.core.filter.call(null,((function (comm,re_filter,channel_users){
return (function (p1__11900_SHARP_){var or__3443__auto__ = new cljs.core.Keyword(null,"full-name","full-name",3585519227).cljs$core$IFn$_invoke$arity$1(p1__11900_SHARP_).match(re_filter);if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = new cljs.core.Keyword(null,"email","email",1110523662).cljs$core$IFn$_invoke$arity$1(p1__11900_SHARP_).match(re_filter);if(cljs.core.truth_(or__3443__auto____$1))
{return or__3443__auto____$1;
} else
{return new cljs.core.Keyword(null,"username","username",748190792).cljs$core$IFn$_invoke$arity$1(p1__11900_SHARP_).match(re_filter);
}
}
});})(comm,re_filter,channel_users))
,channel_users):channel_users);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.user_list","ul.user_list",2324064621),cljs.core.map.call(null,cljs.core.partial.call(null,growingtree_app.components.sidebar.people_entry,comm),fil_users)], null);
})());
});
growingtree_app.components.sidebar.t11907.prototype.om$core$IDisplayName$ = true;
growingtree_app.components.sidebar.t11907.prototype.om$core$IDisplayName$display_name$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var or__3443__auto__ = new cljs.core.Keyword(null,"react-name","react-name",4800236939).cljs$core$IFn$_invoke$arity$1(self__.opts);if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{return "PeopleWidget";
}
});
growingtree_app.components.sidebar.t11907.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11909){var self__ = this;
var _11909__$1 = this;return self__.meta11908;
});
growingtree_app.components.sidebar.t11907.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11909,meta11908__$1){var self__ = this;
var _11909__$1 = this;return (new growingtree_app.components.sidebar.t11907(self__.channel_users_emails,self__.search_filter,self__.data,self__.map__11906,self__.opts,self__.owner,self__.p__11901,self__.people_widget,meta11908__$1));
});
growingtree_app.components.sidebar.__GT_t11907 = (function __GT_t11907(channel_users_emails__$1,search_filter__$1,data__$1,map__11906__$2,opts__$1,owner__$1,p__11901__$1,people_widget__$1,meta11908){return (new growingtree_app.components.sidebar.t11907(channel_users_emails__$1,search_filter__$1,data__$1,map__11906__$2,opts__$1,owner__$1,p__11901__$1,people_widget__$1,meta11908));
});
}
return (new growingtree_app.components.sidebar.t11907(channel_users_emails,search_filter,data,map__11906__$1,opts,owner,p__11901,people_widget,null));
});
growingtree_app.components.sidebar.current_user = (function current_user(comm,user){return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.user-menu-toggle","a.user-menu-toggle",1726759391),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",1017115293),"#",new cljs.core.Keyword(null,"on-click","on-click",1416542092),cljs.core.comp.call(null,cljs.core.constantly.call(null,false),(function (){return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-menu-toggled","user-menu-toggled",567658326)], null));
}))], null),growingtree_app.utils.gravatar_for.call(null,new cljs.core.Keyword(null,"email","email",1110523662).cljs$core$IFn$_invoke$arity$1(user)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.icon-angle.button.right","i.icon-angle.button.right",4652336220),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",1123684643),{"height": "inherit"}], null)], null),new cljs.core.Keyword(null,"full-name","full-name",3585519227).cljs$core$IFn$_invoke$arity$1(user)], null);
});
growingtree_app.components.sidebar.media_name = (function media_name(src){return goog.string.urlDecode(cljs.core.first.call(null,clojure.string.split.call(null,cljs.core.last.call(null,clojure.string.split.call(null,src,/\//)),/\?/)));
});
growingtree_app.components.sidebar.playlist_entry = (function playlist_entry(comm,opts,entry){var src = new cljs.core.Keyword(null,"src","src",1014018390).cljs$core$IFn$_invoke$arity$1(entry);var order = new cljs.core.Keyword(null,"order","order",1119910592).cljs$core$IFn$_invoke$arity$1(entry);var name = growingtree_app.components.sidebar.media_name.call(null,src);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.user","li.user",1132196110),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",1124275658),src,new cljs.core.Keyword(null,"key","key",1014010321),[cljs.core.str(new cljs.core.Keyword(null,"order","order",1119910592).cljs$core$IFn$_invoke$arity$1(entry)),cljs.core.str(src)].join('')], null),((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"order","order",1119910592).cljs$core$IFn$_invoke$arity$1(entry),cljs.core.get_in.call(null,opts,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"channels","channels",2446530370),new cljs.core.Keyword(null,"selected-channel","selected-channel",2473753411).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"player","player",4323118675),new cljs.core.Keyword(null,"playing-order","playing-order",3298952289)], null))))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",1123684643),{"background-color": "#ccc"}], null):null)),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",1013904339),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",1123684643),{"cursor": "pointer"},new cljs.core.Keyword(null,"on-click","on-click",1416542092),cljs.core.comp.call(null,cljs.core.constantly.call(null,false),(function (){return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"playlist-entry-played","playlist-entry-played",1677366299),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [order,new cljs.core.Keyword(null,"selected-channel","selected-channel",2473753411).cljs$core$IFn$_invoke$arity$1(opts)], null)], null));
}))], null),new cljs.core.Keyword(null,"order","order",1119910592).cljs$core$IFn$_invoke$arity$1(entry),". ",name], null)], null);
});
growingtree_app.components.sidebar.playlist_widget = (function playlist_widget(p__11911,owner,opts){var map__11916 = p__11911;var map__11916__$1 = ((cljs.core.seq_QMARK_.call(null,map__11916))?cljs.core.apply.call(null,cljs.core.hash_map,map__11916):map__11916);var search_filter = cljs.core.get.call(null,map__11916__$1,new cljs.core.Keyword(null,"search-filter","search-filter",674207407));var player = cljs.core.get.call(null,map__11916__$1,new cljs.core.Keyword(null,"player","player",4323118675));if(typeof growingtree_app.components.sidebar.t11917 !== 'undefined')
{} else
{
/**
* @constructor
*/
growingtree_app.components.sidebar.t11917 = (function (player,search_filter,map__11916,opts,owner,p__11911,playlist_widget,meta11918){
this.player = player;
this.search_filter = search_filter;
this.map__11916 = map__11916;
this.opts = opts;
this.owner = owner;
this.p__11911 = p__11911;
this.playlist_widget = playlist_widget;
this.meta11918 = meta11918;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
growingtree_app.components.sidebar.t11917.cljs$lang$type = true;
growingtree_app.components.sidebar.t11917.cljs$lang$ctorStr = "growingtree-app.components.sidebar/t11917";
growingtree_app.components.sidebar.t11917.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"growingtree-app.components.sidebar/t11917");
});
growingtree_app.components.sidebar.t11917.prototype.om$core$IRender$ = true;
growingtree_app.components.sidebar.t11917.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return sablono.interpreter.interpret.call(null,(function (){var comm = cljs.core.get_in.call(null,self__.opts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"comms","comms",1108747865),new cljs.core.Keyword(null,"controls","controls",4741937704)], null));var re_filter = (cljs.core.truth_(self__.search_filter)?(new RegExp(self__.search_filter,"ig")):null);var fil_playlist = (cljs.core.truth_(re_filter)?cljs.core.filter.call(null,((function (comm,re_filter){
return (function (p1__11910_SHARP_){return growingtree_app.components.sidebar.media_name.call(null,new cljs.core.Keyword(null,"src","src",1014018390).cljs$core$IFn$_invoke$arity$1(p1__11910_SHARP_)).match(re_filter);
});})(comm,re_filter))
,new cljs.core.Keyword(null,"playlist","playlist",2893378884).cljs$core$IFn$_invoke$arity$1(self__.player)):new cljs.core.Keyword(null,"playlist","playlist",2893378884).cljs$core$IFn$_invoke$arity$1(self__.player));return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.user_list","ul.user_list",2324064621),cljs.core.map.call(null,cljs.core.partial.call(null,growingtree_app.components.sidebar.playlist_entry,comm,self__.opts),cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"order","order",1119910592),fil_playlist))], null)], null);
})());
});
growingtree_app.components.sidebar.t11917.prototype.om$core$IDisplayName$ = true;
growingtree_app.components.sidebar.t11917.prototype.om$core$IDisplayName$display_name$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var or__3443__auto__ = new cljs.core.Keyword(null,"react-name","react-name",4800236939).cljs$core$IFn$_invoke$arity$1(self__.opts);if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{return "PlaylistWidget";
}
});
growingtree_app.components.sidebar.t11917.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11919){var self__ = this;
var _11919__$1 = this;return self__.meta11918;
});
growingtree_app.components.sidebar.t11917.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11919,meta11918__$1){var self__ = this;
var _11919__$1 = this;return (new growingtree_app.components.sidebar.t11917(self__.player,self__.search_filter,self__.map__11916,self__.opts,self__.owner,self__.p__11911,self__.playlist_widget,meta11918__$1));
});
growingtree_app.components.sidebar.__GT_t11917 = (function __GT_t11917(player__$1,search_filter__$1,map__11916__$2,opts__$1,owner__$1,p__11911__$1,playlist_widget__$1,meta11918){return (new growingtree_app.components.sidebar.t11917(player__$1,search_filter__$1,map__11916__$2,opts__$1,owner__$1,p__11911__$1,playlist_widget__$1,meta11918));
});
}
return (new growingtree_app.components.sidebar.t11917(player,search_filter,map__11916__$1,opts,owner,p__11911,playlist_widget,null));
});
growingtree_app.components.sidebar.playlist_action_widget = (function playlist_action_widget(p__11920,owner,opts){var map__11923 = p__11920;var map__11923__$1 = ((cljs.core.seq_QMARK_.call(null,map__11923))?cljs.core.apply.call(null,cljs.core.hash_map,map__11923):map__11923);var player = cljs.core.get.call(null,map__11923__$1,new cljs.core.Keyword(null,"player","player",4323118675));var comm = cljs.core.get_in.call(null,opts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"comms","comms",1108747865),new cljs.core.Keyword(null,"controls","controls",4741937704)], null));var attrs11924 = ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"state","state",1123661827).cljs$core$IFn$_invoke$arity$1(player),new cljs.core.Keyword(null,"playing","playing",520340384)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.fa.fa-pause","i.fa.fa-pause",3144543140),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",1123684643),{"cursor": "pointer"},new cljs.core.Keyword(null,"on-click","on-click",1416542092),(function (){return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"audio-player-stopped","audio-player-stopped",1820835114),new cljs.core.Keyword(null,"selected-channel","selected-channel",2473753411).cljs$core$IFn$_invoke$arity$1(opts)], null));
})], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.fa.fa-play","i.fa.fa-play",4546327786),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",1123684643),{"cursor": "pointer"},new cljs.core.Keyword(null,"on-click","on-click",1416542092),(function (){return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"audio-player-started","audio-player-started",1807969246),new cljs.core.Keyword(null,"selected-channel","selected-channel",2473753411).cljs$core$IFn$_invoke$arity$1(opts)], null));
})], null)], null));if(cljs.core.map_QMARK_.call(null,attrs11924))
{return React.DOM.div(sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["dropzone"], null)], null),attrs11924)),null);
} else
{return React.DOM.div({"className": "dropzone"},sablono.interpreter.interpret.call(null,attrs11924));
}
});
growingtree_app.components.sidebar.icon_map = new cljs.core.PersistentArrayMap(null, 3, ["png","img","jpg","img","jpeg","img"], null);
growingtree_app.components.sidebar.media_entry = (function media_entry(comm,media){var extension = cljs.core.last.call(null,clojure.string.split.call(null,cljs.core.first.call(null,clojure.string.split.call(null,new cljs.core.Keyword(null,"src","src",1014018390).cljs$core$IFn$_invoke$arity$1(media),/\?/)),/\./));return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.file_item","li.file_item",602318903),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"src","src",1014018390).cljs$core$IFn$_invoke$arity$1(media)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",1013904339),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"href","href",1017115293),"#",new cljs.core.Keyword(null,"on-click","on-click",1416542092),cljs.core.constantly.call(null,false),new cljs.core.Keyword(null,"target","target",4427965699),"_blank"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1014008629),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",1014018390),[cljs.core.str("/images/"),cljs.core.str(cljs.core.get.call(null,growingtree_app.components.sidebar.icon_map,extension,"file")),cljs.core.str("_icon.png")].join('')], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(media)], null)], null)], null);
});
growingtree_app.components.sidebar.media_widget = (function media_widget(p__11926,owner,opts){var map__11931 = p__11926;var map__11931__$1 = ((cljs.core.seq_QMARK_.call(null,map__11931))?cljs.core.apply.call(null,cljs.core.hash_map,map__11931):map__11931);var search_filter = cljs.core.get.call(null,map__11931__$1,new cljs.core.Keyword(null,"search-filter","search-filter",674207407));var media = cljs.core.get.call(null,map__11931__$1,new cljs.core.Keyword(null,"media","media",1117676374));var channel_id = cljs.core.get.call(null,map__11931__$1,new cljs.core.Keyword(null,"channel-id","channel-id",3378014615));if(typeof growingtree_app.components.sidebar.t11932 !== 'undefined')
{} else
{
/**
* @constructor
*/
growingtree_app.components.sidebar.t11932 = (function (channel_id,media,search_filter,map__11931,opts,owner,p__11926,media_widget,meta11933){
this.channel_id = channel_id;
this.media = media;
this.search_filter = search_filter;
this.map__11931 = map__11931;
this.opts = opts;
this.owner = owner;
this.p__11926 = p__11926;
this.media_widget = media_widget;
this.meta11933 = meta11933;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
growingtree_app.components.sidebar.t11932.cljs$lang$type = true;
growingtree_app.components.sidebar.t11932.cljs$lang$ctorStr = "growingtree-app.components.sidebar/t11932";
growingtree_app.components.sidebar.t11932.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"growingtree-app.components.sidebar/t11932");
});
growingtree_app.components.sidebar.t11932.prototype.om$core$IRender$ = true;
growingtree_app.components.sidebar.t11932.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return sablono.interpreter.interpret.call(null,(function (){var comm = new cljs.core.Keyword(null,"comm","comm",1016963710).cljs$core$IFn$_invoke$arity$1(self__.opts);var re_filter = (cljs.core.truth_(self__.search_filter)?(new RegExp(self__.search_filter,"ig")):null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.file_list","ul.file_list",668255836),cljs.core.map.call(null,cljs.core.partial.call(null,growingtree_app.components.sidebar.media_entry,comm),(cljs.core.truth_(re_filter)?cljs.core.filter.call(null,(function (p1__11925_SHARP_){return new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(p1__11925_SHARP_).match(re_filter);
}),self__.media):self__.media))], null);
})());
});
growingtree_app.components.sidebar.t11932.prototype.om$core$IDisplayName$ = true;
growingtree_app.components.sidebar.t11932.prototype.om$core$IDisplayName$display_name$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var or__3443__auto__ = new cljs.core.Keyword(null,"react-name","react-name",4800236939).cljs$core$IFn$_invoke$arity$1(self__.opts);if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{return "MediaWidget";
}
});
growingtree_app.components.sidebar.t11932.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11934){var self__ = this;
var _11934__$1 = this;return self__.meta11933;
});
growingtree_app.components.sidebar.t11932.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11934,meta11933__$1){var self__ = this;
var _11934__$1 = this;return (new growingtree_app.components.sidebar.t11932(self__.channel_id,self__.media,self__.search_filter,self__.map__11931,self__.opts,self__.owner,self__.p__11926,self__.media_widget,meta11933__$1));
});
growingtree_app.components.sidebar.__GT_t11932 = (function __GT_t11932(channel_id__$1,media__$1,search_filter__$1,map__11931__$2,opts__$1,owner__$1,p__11926__$1,media_widget__$1,meta11933){return (new growingtree_app.components.sidebar.t11932(channel_id__$1,media__$1,search_filter__$1,map__11931__$2,opts__$1,owner__$1,p__11926__$1,media_widget__$1,meta11933));
});
}
return (new growingtree_app.components.sidebar.t11932(channel_id,media,search_filter,map__11931__$1,opts,owner,p__11926,media_widget,null));
});
growingtree_app.components.sidebar.media_action_widget = (function media_action_widget(p__11935,owner,opts){var map__11943 = p__11935;var map__11943__$1 = ((cljs.core.seq_QMARK_.call(null,map__11943))?cljs.core.apply.call(null,cljs.core.hash_map,map__11943):map__11943);var channel_id = cljs.core.get.call(null,map__11943__$1,new cljs.core.Keyword(null,"channel-id","channel-id",3378014615));return React.DOM.form({"id": "file_upload", "method": "post", "html": "{:multipart=>true}", "data-remote": "true", "action": [cljs.core.str("/channels/"),cljs.core.str(channel_id),cljs.core.str("/attachments.json")].join(''), "acceptCharset": "UTF-8"},React.DOM.div({"style": cljs.core.clj__GT_js.call(null,{"display": "inline", "padding": "0", "margin": "0"})},sablono.interpreter.input.call(null,{"value": "\u2713", "type": "hidden", "name": "utf8"}),sablono.interpreter.input.call(null,{"value": "bpuDvAt5w97Cp4khpWE25tcTsD2vFEFpKwsIAG0m8fw=", "type": "hidden", "name": "authenticity_token"})),sablono.interpreter.input.call(null,{"id": "channel_id_1", "type": "hidden", "name": [cljs.core.str("channel_id["),cljs.core.str(channel_id),cljs.core.str("]")].join('')}),sablono.interpreter.input.call(null,{"id": "file", "type": "file", "name": "file"}),React.DOM.div({"className": "dropzone"},"Drop file here to upload"));
});
growingtree_app.components.sidebar.widget = (function widget(data,owner,opts){if(typeof growingtree_app.components.sidebar.t11953 !== 'undefined')
{} else
{
/**
* @constructor
*/
growingtree_app.components.sidebar.t11953 = (function (opts,owner,data,widget,meta11954){
this.opts = opts;
this.owner = owner;
this.data = data;
this.widget = widget;
this.meta11954 = meta11954;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
growingtree_app.components.sidebar.t11953.cljs$lang$type = true;
growingtree_app.components.sidebar.t11953.cljs$lang$ctorStr = "growingtree-app.components.sidebar/t11953";
growingtree_app.components.sidebar.t11953.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"growingtree-app.components.sidebar/t11953");
});
growingtree_app.components.sidebar.t11953.prototype.om$core$IRender$ = true;
growingtree_app.components.sidebar.t11953.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return sablono.interpreter.interpret.call(null,(function (){var comm = new cljs.core.Keyword(null,"comm","comm",1016963710).cljs$core$IFn$_invoke$arity$1(self__.opts);return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.widget","div.widget",2908838323),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h5.widget-header.unselectable","h5.widget-header.unselectable",3530192282),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1014008629),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",1014018390),new cljs.core.Keyword(null,"icon","icon",1017130987).cljs$core$IFn$_invoke$arity$1(self__.opts)], null)], null),new cljs.core.Keyword(null,"title","title",1124275658).cljs$core$IFn$_invoke$arity$1(self__.opts)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.widget-content","div.widget-content",4299661407),om.core.build.call(null,new cljs.core.Keyword(null,"content-comp","content-comp",1799058261).cljs$core$IFn$_invoke$arity$1(self__.opts),new cljs.core.Keyword(null,"content-data","content-data",1799074800).cljs$core$IFn$_invoke$arity$1(self__.data),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.Keyword(null,"content-opts","content-opts",1799416934).cljs$core$IFn$_invoke$arity$1(self__.data)], null))], null),(cljs.core.truth_(new cljs.core.Keyword(null,"action-comp","action-comp",2550970296).cljs$core$IFn$_invoke$arity$1(self__.opts))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.widget-action-bar","div.widget-action-bar",1992202874),om.core.build.call(null,new cljs.core.Keyword(null,"action-comp","action-comp",2550970296).cljs$core$IFn$_invoke$arity$1(self__.opts),new cljs.core.Keyword(null,"action-data","action-data",2550986835).cljs$core$IFn$_invoke$arity$1(self__.data),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.Keyword(null,"action-opts","action-opts",2551328969).cljs$core$IFn$_invoke$arity$1(self__.data)], null))], null):null)], null);
})());
});
growingtree_app.components.sidebar.t11953.prototype.om$core$IDisplayName$ = true;
growingtree_app.components.sidebar.t11953.prototype.om$core$IDisplayName$display_name$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var or__3443__auto__ = new cljs.core.Keyword(null,"react-name","react-name",4800236939).cljs$core$IFn$_invoke$arity$1(self__.opts);if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{return "Widget";
}
});
growingtree_app.components.sidebar.t11953.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11955){var self__ = this;
var _11955__$1 = this;return self__.meta11954;
});
growingtree_app.components.sidebar.t11953.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11955,meta11954__$1){var self__ = this;
var _11955__$1 = this;return (new growingtree_app.components.sidebar.t11953(self__.opts,self__.owner,self__.data,self__.widget,meta11954__$1));
});
growingtree_app.components.sidebar.__GT_t11953 = (function __GT_t11953(opts__$1,owner__$1,data__$1,widget__$1,meta11954){return (new growingtree_app.components.sidebar.t11953(opts__$1,owner__$1,data__$1,widget__$1,meta11954));
});
}
return (new growingtree_app.components.sidebar.t11953(opts,owner,data,widget,null));
});
growingtree_app.components.sidebar.sidebar = (function sidebar(data,owner,opts){if(typeof growingtree_app.components.sidebar.t11959 !== 'undefined')
{} else
{
/**
* @constructor
*/
growingtree_app.components.sidebar.t11959 = (function (opts,owner,data,sidebar,meta11960){
this.opts = opts;
this.owner = owner;
this.data = data;
this.sidebar = sidebar;
this.meta11960 = meta11960;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
growingtree_app.components.sidebar.t11959.cljs$lang$type = true;
growingtree_app.components.sidebar.t11959.cljs$lang$ctorStr = "growingtree-app.components.sidebar/t11959";
growingtree_app.components.sidebar.t11959.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"growingtree-app.components.sidebar/t11959");
});
growingtree_app.components.sidebar.t11959.prototype.om$core$IRender$ = true;
growingtree_app.components.sidebar.t11959.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return sablono.interpreter.interpret.call(null,(function (){var comm = cljs.core.get_in.call(null,self__.opts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"comms","comms",1108747865),new cljs.core.Keyword(null,"controls","controls",4741937704)], null));var channel = new cljs.core.Keyword(null,"channel","channel",1752854645).cljs$core$IFn$_invoke$arity$1(self__.data);var settings = new cljs.core.Keyword(null,"settings","settings",2448535445).cljs$core$IFn$_invoke$arity$1(self__.data);var search_filter = new cljs.core.Keyword(null,"search-filter","search-filter",674207407).cljs$core$IFn$_invoke$arity$1(self__.data);console.log("rendering sidebar with selected channel ",new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(channel));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"aside.sidebar","aside.sidebar",891231256),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.header.user-header","div.header.user-header",807252189),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),(cljs.core.truth_(cljs.core.get_in.call(null,settings,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"menus","menus",1117686374),new cljs.core.Keyword(null,"user-menu","user-menu",1307043219),new cljs.core.Keyword(null,"open","open",1017321916)], null)))?"open-menu":null)], null),growingtree_app.components.sidebar.current_user.call(null,comm,cljs.core.get_in.call(null,self__.opts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"users","users",1125482874),new cljs.core.Keyword(null,"current-user-email","current-user-email",4091392864).cljs$core$IFn$_invoke$arity$1(self__.opts)], null))),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.user-menu","ul.user-menu",2277914364),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",1013904339),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",1017115293),"#",new cljs.core.Keyword(null,"on-click","on-click",1416542092),(function (){return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings-opened","settings-opened",2980449477)], null));
})], null),"Edit Account"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",1013904339),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"rel","rel",1014017035),"nofollow",new cljs.core.Keyword(null,"href","href",1017115293),"#",new cljs.core.Keyword(null,"on-click","on-click",1416542092),(function (){return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-logged-out","user-logged-out",2519482167)], null));
})], null),"Logout"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",1013904339),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",1017115293),"#",new cljs.core.Keyword(null,"on-click","on-click",1416542092),(function (){return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"help-opened","help-opened",703585255)], null));
})], null),"Help"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",1013904339),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",1017115293),"#",new cljs.core.Keyword(null,"on-click","on-click",1416542092),(function (){return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"about-opened","about-opened",4155398683)], null));
})], null),"About growingtree-app"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.widgets","div.widgets",3922286020),om.core.build.call(null,growingtree_app.components.sidebar.widget,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"content-data","content-data",1799074800),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"channel-users-emails","channel-users-emails",2413740984),new cljs.core.Keyword(null,"users","users",1125482874).cljs$core$IFn$_invoke$arity$1(channel),new cljs.core.Keyword(null,"search-filter","search-filter",674207407),search_filter], null),new cljs.core.Keyword(null,"content-opts","content-opts",1799416934),self__.opts], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",1124275658),"People",new cljs.core.Keyword(null,"icon","icon",1017130987),"images/people_icon.png",new cljs.core.Keyword(null,"content-comp","content-comp",1799058261),growingtree_app.components.sidebar.people_widget], null)], null)),om.core.build.call(null,growingtree_app.components.sidebar.widget,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"content-data","content-data",1799074800),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"player","player",4323118675),new cljs.core.Keyword(null,"player","player",4323118675).cljs$core$IFn$_invoke$arity$1(channel),new cljs.core.Keyword(null,"search-filter","search-filter",674207407),search_filter], null),new cljs.core.Keyword(null,"content-opts","content-opts",1799416934),self__.opts,new cljs.core.Keyword(null,"action-data","action-data",2550986835),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"player","player",4323118675),new cljs.core.Keyword(null,"player","player",4323118675).cljs$core$IFn$_invoke$arity$1(channel)], null),new cljs.core.Keyword(null,"action-opts","action-opts",2551328969),self__.opts], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"title","title",1124275658),"Playlist",new cljs.core.Keyword(null,"icon","icon",1017130987),"images/video_icon.png",new cljs.core.Keyword(null,"content-comp","content-comp",1799058261),growingtree_app.components.sidebar.playlist_widget,new cljs.core.Keyword(null,"action-comp","action-comp",2550970296),growingtree_app.components.sidebar.playlist_action_widget], null)], null)),om.core.build.call(null,growingtree_app.components.sidebar.widget,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"content-data","content-data",1799074800),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"search-filter","search-filter",674207407),search_filter,new cljs.core.Keyword(null,"media","media",1117676374),new cljs.core.Keyword(null,"media","media",1117676374).cljs$core$IFn$_invoke$arity$1(channel),new cljs.core.Keyword(null,"channel-id","channel-id",3378014615),new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(channel)], null),new cljs.core.Keyword(null,"content-opts","content-opts",1799416934),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"comm","comm",1016963710),comm], null),new cljs.core.Keyword(null,"action-data","action-data",2550986835),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"channel-id","channel-id",3378014615),new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(channel)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"title","title",1124275658),"My Media",new cljs.core.Keyword(null,"icon","icon",1017130987),"images/media_icon.png",new cljs.core.Keyword(null,"content-comp","content-comp",1799058261),growingtree_app.components.sidebar.media_widget,new cljs.core.Keyword(null,"action-comp","action-comp",2550970296),growingtree_app.components.sidebar.media_action_widget], null)], null))], null)], null);
})());
});
growingtree_app.components.sidebar.t11959.prototype.om$core$IDisplayName$ = true;
growingtree_app.components.sidebar.t11959.prototype.om$core$IDisplayName$display_name$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var or__3443__auto__ = new cljs.core.Keyword(null,"react-name","react-name",4800236939).cljs$core$IFn$_invoke$arity$1(self__.opts);if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{return "Sidebar";
}
});
growingtree_app.components.sidebar.t11959.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11961){var self__ = this;
var _11961__$1 = this;return self__.meta11960;
});
growingtree_app.components.sidebar.t11959.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11961,meta11960__$1){var self__ = this;
var _11961__$1 = this;return (new growingtree_app.components.sidebar.t11959(self__.opts,self__.owner,self__.data,self__.sidebar,meta11960__$1));
});
growingtree_app.components.sidebar.__GT_t11959 = (function __GT_t11959(opts__$1,owner__$1,data__$1,sidebar__$1,meta11960){return (new growingtree_app.components.sidebar.t11959(opts__$1,owner__$1,data__$1,sidebar__$1,meta11960));
});
}
return (new growingtree_app.components.sidebar.t11959(opts,owner,data,sidebar,null));
});

//# sourceMappingURL=sidebar.js.map