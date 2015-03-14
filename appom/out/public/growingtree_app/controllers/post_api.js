// Compiled by ClojureScript 0.0-2850 {}
goog.provide('growingtree_app.controllers.post_api');
goog.require('cljs.core');
goog.require('growingtree_app.ui');
goog.require('cljs.core.async');
goog.require('growingtree_app.commands');
goog.require('growingtree_app.useful');
goog.require('growingtree_app.utils');
goog.require('clojure.string');
growingtree_app.controllers.post_api.notify_if_mentioned_BANG_ = (function notify_if_mentioned_BANG_(activity,state){
var current_user = cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"users","users",-713552705),new cljs.core.Keyword(null,"current-user-email","current-user-email",-1030852599).cljs$core$IFn$_invoke$arity$1(state)], null));
var comm = cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"comms","comms",460172477),new cljs.core.Keyword(null,"controls","controls",1340701452)], null));
if(cljs.core.truth_((function (){var and__3795__auto__ = cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"email","email",1415816706).cljs$core$IFn$_invoke$arity$1(current_user),new cljs.core.Keyword(null,"author","author",2111686192).cljs$core$IFn$_invoke$arity$1(activity));
if(and__3795__auto__){
return growingtree_app.useful.ffilter.call(null,((function (and__3795__auto__,current_user,comm){
return (function (piece){
var vec__22751 = cljs.core.re_find.call(null,/(.*)@(\w+)(.*)/,piece);
var _ = cljs.core.nth.call(null,vec__22751,(0),null);
var pre = cljs.core.nth.call(null,vec__22751,(1),null);
var username = cljs.core.nth.call(null,vec__22751,(2),null);
var post = cljs.core.nth.call(null,vec__22751,(3),null);
return cljs.core._EQ_.call(null,username,new cljs.core.Keyword(null,"username","username",1605666410).cljs$core$IFn$_invoke$arity$1(current_user));
});})(and__3795__auto__,current_user,comm))
,clojure.string.split.call(null,new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(activity),/ /));
} else {
return and__3795__auto__;
}
})())){
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-user-mentioned","current-user-mentioned",134481480),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [activity,"/assets/audio/threetone-alert.wav"], null)], null));
} else {
return null;
}
});
growingtree_app.controllers.post_api.post_api_event_BANG_ = (function (){var method_table__4704__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4705__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4706__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4707__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4708__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"growingtree-app.controllers.post-api","post-api-event!"),((function (method_table__4704__auto__,prefer_table__4705__auto__,method_cache__4706__auto__,cached_hierarchy__4707__auto__,hierarchy__4708__auto__){
return (function (target,message,previous_state,current_state){
return message;
});})(method_table__4704__auto__,prefer_table__4705__auto__,method_cache__4706__auto__,cached_hierarchy__4707__auto__,hierarchy__4708__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4708__auto__,method_table__4704__auto__,prefer_table__4705__auto__,method_cache__4706__auto__,cached_hierarchy__4707__auto__));
})();
cljs.core._add_method.call(null,growingtree_app.controllers.post_api.post_api_event_BANG_,new cljs.core.Keyword(null,"default","default",-1987822328),(function (target,message,previous_state,current_state){
return growingtree_app.utils.mprint.call(null,"No post-api handler for: ",message);
}));
cljs.core._add_method.call(null,growingtree_app.controllers.post_api.post_api_event_BANG_,new cljs.core.Keyword(null,"channel-activity-received","channel-activity-received",303694233),(function (target,message,activity,previous_state,current_state){
growingtree_app.commands.handle_maybe_command.call(null,target,activity,current_state);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"channel-id","channel-id",138191095).cljs$core$IFn$_invoke$arity$1(activity),new cljs.core.Keyword(null,"selected-channel","selected-channel",-366010130).cljs$core$IFn$_invoke$arity$1(current_state))){
setTimeout((function (){
return growingtree_app.ui.scroll_to_latest_message_when_appropriate_BANG_.call(null,target,new cljs.core.Keyword(null,"channel-id","channel-id",138191095).cljs$core$IFn$_invoke$arity$1(activity));
}),(35));

if(cljs.core.truth_((function (){var or__3807__auto__ = new cljs.core.Keyword(null,"live?","live?",-1539352230).cljs$core$IFn$_invoke$arity$1(activity);
if(cljs.core.truth_(or__3807__auto__)){
return or__3807__auto__;
} else {
return true;
}
})())){
return growingtree_app.controllers.post_api.notify_if_mentioned_BANG_.call(null,activity,current_state);
} else {
return null;
}
} else {
return null;
}
}));

//# sourceMappingURL=post_api.js.map