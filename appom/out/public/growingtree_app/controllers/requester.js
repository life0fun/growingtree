// Compiled by ClojureScript 0.0-2850 {}
goog.provide('growingtree_app.controllers.requester');
goog.require('cljs.core');
goog.require('growingtree_app.ui');
goog.require('cljs.core.async');
goog.require('growingtree_app.routes');
goog.require('dommy.core');
goog.require('growingtree_app.commands');
goog.require('growingtree_app.api.mock');
goog.require('growingtree_app.useful');
goog.require('growingtree_app.utils');
goog.require('clojure.string');
goog.require('growingtree_app.api.cljsajax');
growingtree_app.controllers.requester.local_only_commands = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/mute","/unmute"], null);
growingtree_app.controllers.requester.sendable_message_QMARK_ = (function sendable_message_QMARK_(message){
var vec__21922 = clojure.string.split.call(null,message,/ |\n/);
var command = cljs.core.nth.call(null,vec__21922,(0),null);
var _ = cljs.core.nthnext.call(null,vec__21922,(1));
if(cljs.core.truth_((function (){var or__3807__auto__ = cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([command], true),growingtree_app.controllers.requester.local_only_commands);
if(cljs.core.truth_(or__3807__auto__)){
return or__3807__auto__;
} else {
return cljs.core.empty_QMARK_.call(null,message);
}
})())){
return false;
} else {
return true;
}
});
growingtree_app.controllers.requester.request = (function (){var method_table__4704__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4705__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4706__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4707__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4708__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"growingtree-app.controllers.requester","request"),((function (method_table__4704__auto__,prefer_table__4705__auto__,method_cache__4706__auto__,cached_hierarchy__4707__auto__,hierarchy__4708__auto__){
return (function (target,msg_type,msg_data,previous_state,current_state){
return msg_type;
});})(method_table__4704__auto__,prefer_table__4705__auto__,method_cache__4706__auto__,cached_hierarchy__4707__auto__,hierarchy__4708__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4708__auto__,method_table__4704__auto__,prefer_table__4705__auto__,method_cache__4706__auto__,cached_hierarchy__4707__auto__));
})();
cljs.core._add_method.call(null,growingtree_app.controllers.requester.request,new cljs.core.Keyword(null,"default","default",-1987822328),(function (target,msg_type,msg_data,previous_state,current_state){
return console.log(cljs.core.pr_str.call(null,"request default msg-type for: ",msg_type));
}));
cljs.core._add_method.call(null,growingtree_app.controllers.requester.request,new cljs.core.Keyword(null,"login","login",55217519),(function (target,msg_type,nav_path,previous_state,current_state){
console.log(cljs.core.pr_str.call(null,"post ajax :login nav-path ",nav_path));

growingtree_app.routes.set_window_href_BANG_.call(null,"login",growingtree_app.routes.v1_all_things_route.call(null,nav_path));

return growingtree_app.api.cljsajax.cljs_ajax.call(null,new cljs.core.Keyword(null,"signup-login","signup-login",1709842465),nav_path,cljs.core.get_in.call(null,current_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"comms","comms",460172477),new cljs.core.Keyword(null,"api","api",-899839580)], null)),nav_path);
}));
cljs.core._add_method.call(null,growingtree_app.controllers.requester.request,new cljs.core.Keyword(null,"signup","signup",1961016747),(function (target,msg_type,nav_path,previous_state,current_state){
console.log(cljs.core.pr_str.call(null,"post ajax :signup nav-path ",nav_path));

growingtree_app.routes.set_window_href_BANG_.call(null,"signup",growingtree_app.routes.v1_all_things_route.call(null,nav_path));

return growingtree_app.api.cljsajax.cljs_ajax.call(null,new cljs.core.Keyword(null,"signup-login","signup-login",1709842465),nav_path,cljs.core.get_in.call(null,current_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"comms","comms",460172477),new cljs.core.Keyword(null,"api","api",-899839580)], null)),nav_path);
}));
cljs.core._add_method.call(null,growingtree_app.controllers.requester.request,new cljs.core.Keyword(null,"all-things","all-things",1825895767),(function (target,msg_type,nav_path,previous_state,current_state){
console.log(cljs.core.pr_str.call(null,"post ajax :all-things nav-path ",nav_path));

growingtree_app.routes.set_window_href_BANG_.call(null,"signup",growingtree_app.routes.v1_all_things_route.call(null,nav_path));

return growingtree_app.api.cljsajax.cljs_ajax.call(null,new cljs.core.Keyword(null,"request-things","request-things",1463811177),nav_path,cljs.core.get_in.call(null,current_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"comms","comms",460172477),new cljs.core.Keyword(null,"api","api",-899839580)], null)),nav_path);
}));
cljs.core._add_method.call(null,growingtree_app.controllers.requester.request,new cljs.core.Keyword(null,"filter-things","filter-things",-1018039660),(function (target,msg_type,nav_path,previous_state,current_state){
console.log(cljs.core.pr_str.call(null,"post ajax filter-things nav-path ",nav_path));

growingtree_app.routes.set_window_href_BANG_.call(null,"filter",growingtree_app.routes.v1_filter_things_route.call(null,nav_path));

return growingtree_app.api.cljsajax.cljs_ajax.call(null,new cljs.core.Keyword(null,"request-things","request-things",1463811177),nav_path,cljs.core.get_in.call(null,current_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"comms","comms",460172477),new cljs.core.Keyword(null,"api","api",-899839580)], null)),nav_path);
}));
cljs.core._add_method.call(null,growingtree_app.controllers.requester.request,new cljs.core.Keyword(null,"message-things","message-things",-908841858),(function (target,msg_type,nav_path,previous_state,current_state){
console.log(cljs.core.pr_str.call(null,"post ajax message-things nav-path ",nav_path));

growingtree_app.routes.set_window_href_BANG_.call(null,"message",growingtree_app.routes.v1_filter_things_route.call(null,nav_path));

return growingtree_app.api.cljsajax.cljs_ajax.call(null,new cljs.core.Keyword(null,"request-things","request-things",1463811177),nav_path,cljs.core.get_in.call(null,current_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"comms","comms",460172477),new cljs.core.Keyword(null,"api","api",-899839580)], null)),nav_path);
}));
cljs.core._add_method.call(null,growingtree_app.controllers.requester.request,new cljs.core.Keyword(null,"search-things","search-things",150817957),(function (target,msg_type,nav_path,previous_state,current_state){
console.log(cljs.core.pr_str.call(null,"post ajax search-thing nav-path ",nav_path));

growingtree_app.routes.set_window_href_BANG_.call(null,"search",growingtree_app.routes.v1_all_things.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"thing-type","thing-type",15521235),cljs.core.name.call(null,cljs.core.get_in.call(null,nav_path,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"body","body",-2049205669),(1),(0)], null))),new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.get_in.call(null,nav_path,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"body","body",-2049205669),(1),(1)], null))], null)));

return growingtree_app.api.cljsajax.cljs_ajax.call(null,new cljs.core.Keyword(null,"search-things","search-things",150817957),nav_path,cljs.core.get_in.call(null,current_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"comms","comms",460172477),new cljs.core.Keyword(null,"api","api",-899839580)], null)),nav_path);
}));
cljs.core._add_method.call(null,growingtree_app.controllers.requester.request,new cljs.core.Keyword(null,"add-thing","add-thing",321362583),(function (target,msg_type,nav_path,previous_state,current_state){
console.log(cljs.core.pr_str.call(null,"post ajax add-thing nav-path ",nav_path));

growingtree_app.routes.set_window_href_BANG_.call(null,"add",growingtree_app.routes.v1_all_things.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"thing-type","thing-type",15521235),cljs.core.name.call(null,cljs.core.get.call(null,nav_path,new cljs.core.Keyword(null,"add-thing","add-thing",321362583)))], null)));

return growingtree_app.api.cljsajax.cljs_ajax.call(null,new cljs.core.Keyword(null,"add-thing","add-thing",321362583),nav_path,cljs.core.get_in.call(null,current_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"comms","comms",460172477),new cljs.core.Keyword(null,"api","api",-899839580)], null)),cljs.core.get.call(null,nav_path,new cljs.core.Keyword(null,"data","data",-232669377)));
}));
cljs.core._add_method.call(null,growingtree_app.controllers.requester.request,new cljs.core.Keyword(null,"user-logged-out","user-logged-out",-1569726039),(function (target,message,nav_path,previous_state,current_state){
return console.log(cljs.core.pr_str.call(null,"Log the user out somehow"));
}));
cljs.core._add_method.call(null,growingtree_app.controllers.requester.request,new cljs.core.Keyword(null,"current-user-mentioned","current-user-mentioned",134481480),(function (target,message,args,previous_state,current_state){
return growingtree_app.utils.mprint.call(null,"notify current user they were mentioned");
}));
cljs.core._add_method.call(null,growingtree_app.controllers.requester.request,new cljs.core.Keyword(null,"playlist-entry-played","playlist-entry-played",1138783655),(function (target,message,p__21924,previous_state,current_state){
var vec__21925 = p__21924;
var order = cljs.core.nth.call(null,vec__21925,(0),null);
var channel_id = cljs.core.nth.call(null,vec__21925,(1),null);
var controls_ch = cljs.core.get_in.call(null,current_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"comms","comms",460172477),new cljs.core.Keyword(null,"controls","controls",1340701452)], null));
var playlist = cljs.core.get_in.call(null,current_state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"channels","channels",1132759174),channel_id,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"playlist","playlist",1952276871)], null));
var entry = growingtree_app.useful.ffilter.call(null,((function (controls_ch,playlist,vec__21925,order,channel_id){
return (function (p1__21923_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"order","order",-1254677256).cljs$core$IFn$_invoke$arity$1(p1__21923_SHARP_),order);
});})(controls_ch,playlist,vec__21925,order,channel_id))
,cljs.core.get_in.call(null,current_state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"channels","channels",1132759174),channel_id,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"playlist","playlist",1952276871)], null)));
return cljs.core.async.put_BANG_.call(null,controls_ch,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"audio-player-source-updated","audio-player-source-updated",-983718025),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"src","src",-1651076051).cljs$core$IFn$_invoke$arity$1(entry),channel_id], null)], null));
}));
cljs.core._add_method.call(null,growingtree_app.controllers.requester.request,new cljs.core.Keyword(null,"audio-player-source-updated","audio-player-source-updated",-983718025),(function (target,message,p__21926,previous_state,current_state){
var vec__21927 = p__21926;
var src = cljs.core.nth.call(null,vec__21927,(0),null);
var channel_id = cljs.core.nth.call(null,vec__21927,(1),null);
if((cljs.core._EQ_.call(null,channel_id,new cljs.core.Keyword(null,"selected-channel","selected-channel",-366010130).cljs$core$IFn$_invoke$arity$1(current_state))) && (cljs.core._EQ_.call(null,cljs.core.get_in.call(null,current_state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"channels","channels",1132759174),new cljs.core.Keyword(null,"selected-channel","selected-channel",-366010130).cljs$core$IFn$_invoke$arity$1(current_state),new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"state","state",-1988618099)], null)),new cljs.core.Keyword(null,"playing","playing",70013335)))){
var player = dommy.template.__GT_node_like.call(null,target).querySelector(dommy.core.selector.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str(".audio-player.audio-"),cljs.core.str(channel_id)].join('')], null)));
return setTimeout(((function (player,vec__21927,src,channel_id){
return (function (){
return player.play();
});})(player,vec__21927,src,channel_id))
,(35));
} else {
return null;
}
}));
cljs.core._add_method.call(null,growingtree_app.controllers.requester.request,new cljs.core.Keyword(null,"user-message-submitted","user-message-submitted",-877574457),(function (target,message,args,previous_state,current_state){
var channel = cljs.core.get_in.call(null,current_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"channels","channels",1132759174),new cljs.core.Keyword(null,"selected-channel","selected-channel",-366010130).cljs$core$IFn$_invoke$arity$1(current_state)], null));
var user_message = cljs.core.get_in.call(null,previous_state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"forms","forms",2045992350),new cljs.core.Keyword(null,"user-message","user-message",889829115),new cljs.core.Keyword(null,"value","value",305978217)], null));
var content = cljs.core.get_in.call(null,previous_state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"forms","forms",2045992350),new cljs.core.Keyword(null,"user-message","user-message",889829115),new cljs.core.Keyword(null,"value","value",305978217)], null));
var user = cljs.core.get_in.call(null,current_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"users","users",-713552705),new cljs.core.Keyword(null,"current-user-email","current-user-email",-1030852599).cljs$core$IFn$_invoke$arity$1(current_state)], null));
var channel__$1 = cljs.core.get_in.call(null,current_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"channels","channels",1132759174),new cljs.core.Keyword(null,"selected-channel","selected-channel",-366010130).cljs$core$IFn$_invoke$arity$1(current_state)], null));
var api_key = new cljs.core.Keyword(null,"api-key","api-key",1037904031).cljs$core$IFn$_invoke$arity$1(user);
var activity = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"content","content",15833224),content,new cljs.core.Keyword(null,"author","author",2111686192),new cljs.core.Keyword(null,"email","email",1415816706).cljs$core$IFn$_invoke$arity$1(user),new cljs.core.Keyword(null,"created_at","created_at",1484050750),(new Date()),new cljs.core.Keyword(null,"channel-id","channel-id",138191095),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(channel__$1)], null);
var temp__4126__auto___21928 = dommy.template.__GT_node_like.call(null,target).querySelector(dommy.core.selector.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".chat-input",".chat-input",1342148154)], null)));
if(cljs.core.truth_(temp__4126__auto___21928)){
var input_21929 = temp__4126__auto___21928;
dommy.core.set_value_BANG_.call(null,input_21929,"");
} else {
}

setTimeout(((function (channel,user_message,content,user,channel__$1,api_key,activity){
return (function (){
return growingtree_app.ui.scroll_to_latest_message_when_appropriate_BANG_.call(null,target,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(channel__$1));
});})(channel,user_message,content,user,channel__$1,api_key,activity))
,(35));

growingtree_app.commands.handle_maybe_command.call(null,target,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"content","content",15833224),user_message,new cljs.core.Keyword(null,"channel-id","channel-id",138191095),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(channel__$1)], null),current_state);

if(growingtree_app.controllers.requester.sendable_message_QMARK_.call(null,user_message)){
return growingtree_app.api.mock.send_user_message_BANG_.call(null,api_key,activity);
} else {
return null;
}
}));
cljs.core._add_method.call(null,growingtree_app.controllers.requester.request,new cljs.core.Keyword(null,"audio-player-started","audio-player-started",-1739082677),(function (target,message,channel_id,previous_state,current_state){
var player = dommy.template.__GT_node_like.call(null,target).querySelector(dommy.core.selector.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str(".audio-player.audio-"),cljs.core.str(channel_id)].join('')], null)));
return setTimeout(((function (player){
return (function (){
return player.play();
});})(player))
,(35));
}));
cljs.core._add_method.call(null,growingtree_app.controllers.requester.request,new cljs.core.Keyword(null,"audio-player-stopped","audio-player-stopped",170014150),(function (target,message,channel_id,previous_state,current_state){
var player = dommy.template.__GT_node_like.call(null,target).querySelector(dommy.core.selector.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str(".audio-player.audio-"),cljs.core.str(channel_id)].join('')], null)));
return setTimeout(((function (player){
return (function (){
return player.pause();
});})(player))
,(35));
}));
cljs.core._add_method.call(null,growingtree_app.controllers.requester.request,new cljs.core.Keyword(null,"audio-player-muted","audio-player-muted",-131538835),(function (target,message,args,previous_state,current_state){
var players = dommy.utils.__GT_Array.call(null,dommy.template.__GT_node_like.call(null,target).getElementsByClassName("audio-player"));
return setTimeout(((function (players){
return (function (){
var seq__21930 = cljs.core.seq.call(null,players);
var chunk__21931 = null;
var count__21932 = (0);
var i__21933 = (0);
while(true){
if((i__21933 < count__21932)){
var player = cljs.core._nth.call(null,chunk__21931,i__21933);
player.muted = true;

var G__21934 = seq__21930;
var G__21935 = chunk__21931;
var G__21936 = count__21932;
var G__21937 = (i__21933 + (1));
seq__21930 = G__21934;
chunk__21931 = G__21935;
count__21932 = G__21936;
i__21933 = G__21937;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__21930);
if(temp__4126__auto__){
var seq__21930__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21930__$1)){
var c__4594__auto__ = cljs.core.chunk_first.call(null,seq__21930__$1);
var G__21938 = cljs.core.chunk_rest.call(null,seq__21930__$1);
var G__21939 = c__4594__auto__;
var G__21940 = cljs.core.count.call(null,c__4594__auto__);
var G__21941 = (0);
seq__21930 = G__21938;
chunk__21931 = G__21939;
count__21932 = G__21940;
i__21933 = G__21941;
continue;
} else {
var player = cljs.core.first.call(null,seq__21930__$1);
player.muted = true;

var G__21942 = cljs.core.next.call(null,seq__21930__$1);
var G__21943 = null;
var G__21944 = (0);
var G__21945 = (0);
seq__21930 = G__21942;
chunk__21931 = G__21943;
count__21932 = G__21944;
i__21933 = G__21945;
continue;
}
} else {
return null;
}
}
break;
}
});})(players))
,(35));
}));
cljs.core._add_method.call(null,growingtree_app.controllers.requester.request,new cljs.core.Keyword(null,"audio-player-unmuted","audio-player-unmuted",710141160),(function (target,message,args,previous_state,current_state){
var players = dommy.utils.__GT_Array.call(null,dommy.template.__GT_node_like.call(null,target).getElementsByClassName("audio-player"));
return setTimeout(((function (players){
return (function (){
var seq__21946 = cljs.core.seq.call(null,players);
var chunk__21947 = null;
var count__21948 = (0);
var i__21949 = (0);
while(true){
if((i__21949 < count__21948)){
var player = cljs.core._nth.call(null,chunk__21947,i__21949);
player.muted = false;

var G__21950 = seq__21946;
var G__21951 = chunk__21947;
var G__21952 = count__21948;
var G__21953 = (i__21949 + (1));
seq__21946 = G__21950;
chunk__21947 = G__21951;
count__21948 = G__21952;
i__21949 = G__21953;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__21946);
if(temp__4126__auto__){
var seq__21946__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21946__$1)){
var c__4594__auto__ = cljs.core.chunk_first.call(null,seq__21946__$1);
var G__21954 = cljs.core.chunk_rest.call(null,seq__21946__$1);
var G__21955 = c__4594__auto__;
var G__21956 = cljs.core.count.call(null,c__4594__auto__);
var G__21957 = (0);
seq__21946 = G__21954;
chunk__21947 = G__21955;
count__21948 = G__21956;
i__21949 = G__21957;
continue;
} else {
var player = cljs.core.first.call(null,seq__21946__$1);
player.muted = false;

var G__21958 = cljs.core.next.call(null,seq__21946__$1);
var G__21959 = null;
var G__21960 = (0);
var G__21961 = (0);
seq__21946 = G__21958;
chunk__21947 = G__21959;
count__21948 = G__21960;
i__21949 = G__21961;
continue;
}
} else {
return null;
}
}
break;
}
});})(players))
,(35));
}));
cljs.core._add_method.call(null,growingtree_app.controllers.requester.request,new cljs.core.Keyword(null,"current-user-mentioned","current-user-mentioned",134481480),(function (target,message,p__21962,previous_state,current_state){
var vec__21963 = p__21962;
var activity = cljs.core.nth.call(null,vec__21963,(0),null);
var url = cljs.core.nth.call(null,vec__21963,(1),null);
var player = dommy.template.__GT_node_like.call(null,target).querySelector(dommy.core.selector.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str(".audio-player.sfx.audio-"),cljs.core.str(new cljs.core.Keyword(null,"channel-id","channel-id",138191095).cljs$core$IFn$_invoke$arity$1(activity))].join('')], null)));
return setTimeout(((function (player,vec__21963,activity,url){
return (function (){
return player.play();
});})(player,vec__21963,activity,url))
,(35));
}));
cljs.core._add_method.call(null,growingtree_app.controllers.requester.request,new cljs.core.Keyword(null,"search-field-focused","search-field-focused",1388495290),(function (target,message,p__21964,previous_state,current_state){
var vec__21965 = p__21964;
var activity = cljs.core.nth.call(null,vec__21965,(0),null);
var url = cljs.core.nth.call(null,vec__21965,(1),null);
var temp__4126__auto__ = document.querySelector(dommy.core.selector.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [target,new cljs.core.Keyword(null,"input.query","input.query",1777106866)], null)));
if(cljs.core.truth_(temp__4126__auto__)){
var search_field = temp__4126__auto__;
return window.setTimeout(((function (search_field,temp__4126__auto__,vec__21965,activity,url){
return (function (){
return search_field.value = cljs.core.get_in.call(null,current_state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"forms","forms",2045992350),new cljs.core.Keyword(null,"search","search",1564939822),new cljs.core.Keyword(null,"value","value",305978217)], null));
});})(search_field,temp__4126__auto__,vec__21965,activity,url))
,(20));
} else {
return null;
}
}));
cljs.core._add_method.call(null,growingtree_app.controllers.requester.request,new cljs.core.Keyword(null,"search-focus-key-pressed","search-focus-key-pressed",-469625493),(function (target,message,args,previous_state,current_state){
var temp__4126__auto__ = document.querySelector(dommy.core.selector.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [target,new cljs.core.Keyword(null,"input.query","input.query",1777106866)], null)));
if(cljs.core.truth_(temp__4126__auto__)){
var search_field = temp__4126__auto__;
return search_field.focus();
} else {
return null;
}
}));
cljs.core._add_method.call(null,growingtree_app.controllers.requester.request,new cljs.core.Keyword(null,"search-form-blur-key-pressed","search-form-blur-key-pressed",-312801117),(function (target,message,args,previous_state,current_state){
var temp__4126__auto__ = document.querySelector(dommy.core.selector.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [target,new cljs.core.Keyword(null,"textarea.chat-input","textarea.chat-input",-1856842913)], null)));
if(cljs.core.truth_(temp__4126__auto__)){
var message_field = temp__4126__auto__;
return message_field.focus();
} else {
return null;
}
}));
cljs.core._add_method.call(null,growingtree_app.controllers.requester.request,new cljs.core.Keyword(null,"user-message-blur-key-pressed","user-message-blur-key-pressed",1797856612),(function (target,message,args,previous_state,current_state){
var temp__4126__auto__ = document.querySelector(dommy.core.selector.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [target,new cljs.core.Keyword(null,"input.query","input.query",1777106866)], null)));
if(cljs.core.truth_(temp__4126__auto__)){
var search_field = temp__4126__auto__;
return search_field.focus();
} else {
return null;
}
}));
cljs.core._add_method.call(null,growingtree_app.controllers.requester.request,new cljs.core.Keyword(null,"channel-destroyed","channel-destroyed",-199507832),(function (target,message,channel_id,previous_state,current_state){
return growingtree_app.api.mock.destroy_channel_BANG_.call(null,cljs.core.get_in.call(null,current_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"comms","comms",460172477),new cljs.core.Keyword(null,"api","api",-899839580)], null)),channel_id);
}));
cljs.core._add_method.call(null,growingtree_app.controllers.requester.request,new cljs.core.Keyword(null,"state-restored","state-restored",450621293),(function (target,message,channel_id,previous_state,current_state){
if(cljs.core.empty_QMARK_.call(null,localStorage.getItem("growingtree-app-state"))){
return cljs.core.print.call(null,"No data available to load from localStorage");
} else {
return null;
}
}));
cljs.core._add_method.call(null,growingtree_app.controllers.requester.request,new cljs.core.Keyword(null,"state-persisted","state-persisted",1492039349),(function (target,message,channel_id,previous_state,current_state){
return localStorage.setItem("growingtree-app-state",cljs.core.pr_str.call(null,cljs.core.dissoc.call(null,current_state,new cljs.core.Keyword(null,"comms","comms",460172477))));
}));
cljs.core._add_method.call(null,growingtree_app.controllers.requester.request,new cljs.core.Keyword(null,"window-resized","window-resized",-729423083),(function (target,message,channel_id,previous_state,current_state){
return null;
}));

//# sourceMappingURL=requester.js.map