// Compiled by ClojureScript 0.0-2850 {}
goog.provide('growingtree_app.commands');
goog.require('cljs.core');
goog.require('om.dom');
goog.require('growingtree_app.components.app');
goog.require('cljs.core.async');
goog.require('dommy.core');
goog.require('growingtree_app.api.mock');
goog.require('growingtree_app.mock_data');
goog.require('growingtree_app.datetime');
goog.require('growingtree_app.useful');
goog.require('growingtree_app.utils');
goog.require('clojure.string');
goog.require('om.core');
growingtree_app.commands.handle_maybe_command = (function (){var method_table__4704__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4705__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4706__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4707__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4708__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"growingtree-app.commands","handle-maybe-command"),((function (method_table__4704__auto__,prefer_table__4705__auto__,method_cache__4706__auto__,cached_hierarchy__4707__auto__,hierarchy__4708__auto__){
return (function (target,activity,state){
return cljs.core.first.call(null,clojure.string.split.call(null,new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(activity),/ |\n/));
});})(method_table__4704__auto__,prefer_table__4705__auto__,method_cache__4706__auto__,cached_hierarchy__4707__auto__,hierarchy__4708__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4708__auto__,method_table__4704__auto__,prefer_table__4705__auto__,method_cache__4706__auto__,cached_hierarchy__4707__auto__));
})();
cljs.core._add_method.call(null,growingtree_app.commands.handle_maybe_command,new cljs.core.Keyword(null,"default","default",-1987822328),(function (target,activity,state){
return growingtree_app.utils.mprint.call(null,"No command for ",cljs.core.pr_str.call(null,activity));
}));
cljs.core._add_method.call(null,growingtree_app.commands.handle_maybe_command,"/play",(function (target,activity,state){
var controls_ch = cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"comms","comms",460172477),new cljs.core.Keyword(null,"controls","controls",1340701452)], null));
var temp__4406__auto___22697 = (function (){var or__3807__auto__ = (function (){var G__22696 = new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(activity);
var G__22696__$1 = (((G__22696 == null))?null:clojure.string.split.call(null,G__22696,/ /));
var G__22696__$2 = (((G__22696__$1 == null))?null:cljs.core.second.call(null,G__22696__$1));
var G__22696__$3 = (((G__22696__$2 == null))?null:cljs.core.first.call(null,cljs.core.re_find.call(null,/http.*\.(mp3|mp4|ogg|wav)/,G__22696__$2)));
return G__22696__$3;
})();
if(cljs.core.truth_(or__3807__auto__)){
return or__3807__auto__;
} else {
var x = new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(activity);
var x__$1 = clojure.string.split.call(null,x,/ /);
var x__$2 = cljs.core.second.call(null,x__$1);
var x__$3 = cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([x__$2], true),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ding","alert"], null));
var x__$4 = cljs.core.get.call(null,new cljs.core.PersistentArrayMap(null, 2, ["ding","/assets/audio/ding.wav","alert","/assets/audio/threetone-alert.wav"], null),x__$3);
return x__$4;
}
})();
if(cljs.core.truth_(temp__4406__auto___22697)){
var url_22698 = temp__4406__auto___22697;
cljs.core.async.put_BANG_.call(null,controls_ch,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"audio-player-source-updated","audio-player-source-updated",-983718025),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [url_22698,new cljs.core.Keyword(null,"selected-channel","selected-channel",-366010130).cljs$core$IFn$_invoke$arity$1(state)], null)], null));
} else {
}

return cljs.core.async.put_BANG_.call(null,controls_ch,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"audio-player-started","audio-player-started",-1739082677),new cljs.core.Keyword(null,"channel-id","channel-id",138191095).cljs$core$IFn$_invoke$arity$1(activity)], null));
}));
cljs.core._add_method.call(null,growingtree_app.commands.handle_maybe_command,"/stop",(function (target,activity,state){
var controls_ch = cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"comms","comms",460172477),new cljs.core.Keyword(null,"controls","controls",1340701452)], null));
return cljs.core.async.put_BANG_.call(null,controls_ch,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"audio-player-stopped","audio-player-stopped",170014150),new cljs.core.Keyword(null,"channel-id","channel-id",138191095).cljs$core$IFn$_invoke$arity$1(activity)], null));
}));
cljs.core._add_method.call(null,growingtree_app.commands.handle_maybe_command,"/pause",(function (target,activity,state){
var controls_ch = cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"comms","comms",460172477),new cljs.core.Keyword(null,"controls","controls",1340701452)], null));
return cljs.core.async.put_BANG_.call(null,controls_ch,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"audio-player-stopped","audio-player-stopped",170014150),new cljs.core.Keyword(null,"channel-id","channel-id",138191095).cljs$core$IFn$_invoke$arity$1(activity)], null));
}));
cljs.core._add_method.call(null,growingtree_app.commands.handle_maybe_command,"/queue",(function (target,activity,state){
var controls_ch = cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"comms","comms",460172477),new cljs.core.Keyword(null,"controls","controls",1340701452)], null));
var temp__4406__auto__ = cljs.core.first.call(null,cljs.core.re_find.call(null,/http.*\.(mp3|mp4|ogg|wav)/,cljs.core.second.call(null,clojure.string.split.call(null,new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(activity),/ |\n/))));
if(cljs.core.truth_(temp__4406__auto__)){
var url = temp__4406__auto__;
return cljs.core.async.put_BANG_.call(null,controls_ch,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"playlist-entry-queued","playlist-entry-queued",-1071587042),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"channel-id","channel-id",138191095).cljs$core$IFn$_invoke$arity$1(activity),url], null)], null));
} else {
return null;
}
}));
cljs.core._add_method.call(null,growingtree_app.commands.handle_maybe_command,"/mute",(function (target,activity,state){
var controls_ch = cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"comms","comms",460172477),new cljs.core.Keyword(null,"controls","controls",1340701452)], null));
return cljs.core.async.put_BANG_.call(null,controls_ch,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"audio-player-muted","audio-player-muted",-131538835)], null));
}));
cljs.core._add_method.call(null,growingtree_app.commands.handle_maybe_command,"/unmute",(function (target,activity,state){
var controls_ch = cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"comms","comms",460172477),new cljs.core.Keyword(null,"controls","controls",1340701452)], null));
return cljs.core.async.put_BANG_.call(null,controls_ch,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"audio-player-unmuted","audio-player-unmuted",710141160)], null));
}));

//# sourceMappingURL=commands.js.map