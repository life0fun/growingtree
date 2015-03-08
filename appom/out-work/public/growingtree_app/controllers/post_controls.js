// Compiled by ClojureScript 0.0-2277
goog.provide('growingtree_app.controllers.post_controls');
goog.require('cljs.core');
goog.require('growingtree_app.useful');
goog.require('growingtree_app.utils');
goog.require('cljs.core.async');
goog.require('growingtree_app.ui');
goog.require('cljs.core.async');
goog.require('growingtree_app.routes');
goog.require('dommy.core');
goog.require('growingtree_app.commands');
goog.require('growingtree_app.ui');
goog.require('growingtree_app.api.mock');
goog.require('cljs.core.async');
goog.require('growingtree_app.useful');
goog.require('growingtree_app.utils');
goog.require('clojure.string');
goog.require('dommy.core');
goog.require('growingtree_app.routes');
goog.require('growingtree_app.commands');
goog.require('growingtree_app.utils');
goog.require('growingtree_app.useful');
goog.require('clojure.string');
goog.require('growingtree_app.api.cljsajax');
goog.require('growingtree_app.api.mock');
goog.require('growingtree_app.api.cljsajax');
growingtree_app.controllers.post_controls.local_only_commands = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/mute","/unmute"], null);
growingtree_app.controllers.post_controls.sendable_message_QMARK_ = (function sendable_message_QMARK_(message){var vec__11763 = clojure.string.split.call(null,message,/ |\n/);var command = cljs.core.nth.call(null,vec__11763,(0),null);var _ = cljs.core.nthnext.call(null,vec__11763,(1));if(cljs.core.truth_((function (){var or__3543__auto__ = cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([command], true),growingtree_app.controllers.post_controls.local_only_commands);if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return cljs.core.empty_QMARK_.call(null,message);
}
})()))
{return false;
} else
{return true;
}
});
growingtree_app.controllers.post_controls.post_control_event_BANG_ = (function (){var method_table__4409__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__4410__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__4411__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__4412__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__4413__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("post-control-event!",((function (method_table__4409__auto__,prefer_table__4410__auto__,method_cache__4411__auto__,cached_hierarchy__4412__auto__,hierarchy__4413__auto__){
return (function (target,msg_type,msg_data,previous_state,current_state){return msg_type;
});})(method_table__4409__auto__,prefer_table__4410__auto__,method_cache__4411__auto__,cached_hierarchy__4412__auto__,hierarchy__4413__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4413__auto__,method_table__4409__auto__,prefer_table__4410__auto__,method_cache__4411__auto__,cached_hierarchy__4412__auto__));
})();
cljs.core._add_method.call(null,growingtree_app.controllers.post_controls.post_control_event_BANG_,new cljs.core.Keyword(null,"default","default",-1987822328),(function (target,msg_type,msg_data,previous_state,current_state){return console.log(cljs.core.pr_str.call(null,"default post-control for: ",msg_type));
}));
cljs.core._add_method.call(null,growingtree_app.controllers.post_controls.post_control_event_BANG_,new cljs.core.Keyword(null,"login","login",55217519),(function (target,msg_type,nav_path,previous_state,current_state){console.log(cljs.core.pr_str.call(null,"post ajax :login nav-path ",nav_path));
growingtree_app.utils.set_window_href_BANG_.call(null,growingtree_app.routes.v1_all_things.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"thing-type","thing-type",15521235),cljs.core.name.call(null,cljs.core.get_in.call(null,nav_path,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"body","body",-2049205669),(1),(2)], null)))], null)));
return growingtree_app.api.cljsajax.cljs_ajax.call(null,new cljs.core.Keyword(null,"signup-login","signup-login",1709842465),nav_path,cljs.core.get_in.call(null,current_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"comms","comms",460172477),new cljs.core.Keyword(null,"api","api",-899839580)], null)),nav_path);
}));
cljs.core._add_method.call(null,growingtree_app.controllers.post_controls.post_control_event_BANG_,new cljs.core.Keyword(null,"all-things","all-things",1825895767),(function (target,msg_type,nav_path,previous_state,current_state){console.log(cljs.core.pr_str.call(null,"post ajax :all-things nav-path ",nav_path));
growingtree_app.utils.set_window_href_BANG_.call(null,growingtree_app.routes.v1_all_things.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"thing-type","thing-type",15521235),cljs.core.name.call(null,cljs.core.get_in.call(null,nav_path,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"body","body",-2049205669),(1),(2)], null)))], null)));
return growingtree_app.api.cljsajax.cljs_ajax.call(null,new cljs.core.Keyword(null,"request-things","request-things",1463811177),nav_path,cljs.core.get_in.call(null,current_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"comms","comms",460172477),new cljs.core.Keyword(null,"api","api",-899839580)], null)),nav_path);
}));
cljs.core._add_method.call(null,growingtree_app.controllers.post_controls.post_control_event_BANG_,new cljs.core.Keyword(null,"filter-things","filter-things",-1018039660),(function (target,msg_type,nav_path,previous_state,current_state){console.log(cljs.core.pr_str.call(null,"post ajax filter-things nav-path ",nav_path));
growingtree_app.utils.set_window_href_BANG_.call(null,growingtree_app.routes.v1_filter_things.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"parent","parent",-878878779),cljs.core.name.call(null,cljs.core.get_in.call(null,nav_path,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"body","body",-2049205669),(1),(0)], null))),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.get_in.call(null,nav_path,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"body","body",-2049205669),(1),(1)], null)),new cljs.core.Keyword(null,"filtered","filtered",-437499761),cljs.core.name.call(null,cljs.core.get_in.call(null,nav_path,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"body","body",-2049205669),(1),(2)], null)))], null)));
return growingtree_app.api.cljsajax.cljs_ajax.call(null,new cljs.core.Keyword(null,"request-things","request-things",1463811177),nav_path,cljs.core.get_in.call(null,current_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"comms","comms",460172477),new cljs.core.Keyword(null,"api","api",-899839580)], null)),nav_path);
}));
cljs.core._add_method.call(null,growingtree_app.controllers.post_controls.post_control_event_BANG_,new cljs.core.Keyword(null,"search-things","search-things",150817957),(function (target,msg_type,nav_path,previous_state,current_state){console.log(cljs.core.pr_str.call(null,"post ajax search-thing nav-path ",nav_path));
growingtree_app.utils.set_window_href_BANG_.call(null,growingtree_app.routes.v1_all_things.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"thing-type","thing-type",15521235),cljs.core.name.call(null,cljs.core.get_in.call(null,nav_path,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"body","body",-2049205669),(1),(0)], null))),new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.get_in.call(null,nav_path,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"body","body",-2049205669),(1),(1)], null))], null)));
return growingtree_app.api.cljsajax.cljs_ajax.call(null,new cljs.core.Keyword(null,"search-things","search-things",150817957),nav_path,cljs.core.get_in.call(null,current_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"comms","comms",460172477),new cljs.core.Keyword(null,"api","api",-899839580)], null)),nav_path);
}));
cljs.core._add_method.call(null,growingtree_app.controllers.post_controls.post_control_event_BANG_,new cljs.core.Keyword(null,"add-thing","add-thing",321362583),(function (target,msg_type,nav_path,previous_state,current_state){console.log(cljs.core.pr_str.call(null,"post ajax add-thing nav-path ",nav_path));
growingtree_app.utils.set_window_href_BANG_.call(null,growingtree_app.routes.v1_all_things.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"thing-type","thing-type",15521235),cljs.core.name.call(null,cljs.core.get.call(null,nav_path,new cljs.core.Keyword(null,"add-thing","add-thing",321362583)))], null)));
return growingtree_app.api.cljsajax.cljs_ajax.call(null,new cljs.core.Keyword(null,"add-thing","add-thing",321362583),nav_path,cljs.core.get_in.call(null,current_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"comms","comms",460172477),new cljs.core.Keyword(null,"api","api",-899839580)], null)),cljs.core.get.call(null,nav_path,new cljs.core.Keyword(null,"data","data",-232669377)));
}));
cljs.core._add_method.call(null,growingtree_app.controllers.post_controls.post_control_event_BANG_,new cljs.core.Keyword(null,"current-user-mentioned","current-user-mentioned",134481480),(function (target,message,args,previous_state,current_state){return growingtree_app.utils.mprint.call(null,"notify current user they were mentioned");
}));
cljs.core._add_method.call(null,growingtree_app.controllers.post_controls.post_control_event_BANG_,new cljs.core.Keyword(null,"playlist-entry-played","playlist-entry-played",1138783655),(function (target,message,p__11765,previous_state,current_state){var vec__11766 = p__11765;var order = cljs.core.nth.call(null,vec__11766,(0),null);var channel_id = cljs.core.nth.call(null,vec__11766,(1),null);var controls_ch = cljs.core.get_in.call(null,current_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"comms","comms",460172477),new cljs.core.Keyword(null,"controls","controls",1340701452)], null));var playlist = cljs.core.get_in.call(null,current_state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"channels","channels",1132759174),channel_id,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"playlist","playlist",1952276871)], null));var entry = growingtree_app.useful.ffilter.call(null,((function (controls_ch,playlist,vec__11766,order,channel_id){
return (function (p1__11764_SHARP_){return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"order","order",-1254677256).cljs$core$IFn$_invoke$arity$1(p1__11764_SHARP_),order);
});})(controls_ch,playlist,vec__11766,order,channel_id))
,cljs.core.get_in.call(null,current_state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"channels","channels",1132759174),channel_id,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"playlist","playlist",1952276871)], null)));return cljs.core.async.put_BANG_.call(null,controls_ch,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"audio-player-source-updated","audio-player-source-updated",-983718025),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"src","src",-1651076051).cljs$core$IFn$_invoke$arity$1(entry),channel_id], null)], null));
}));
cljs.core._add_method.call(null,growingtree_app.controllers.post_controls.post_control_event_BANG_,new cljs.core.Keyword(null,"audio-player-source-updated","audio-player-source-updated",-983718025),(function (target,message,p__11767,previous_state,current_state){var vec__11768 = p__11767;var src = cljs.core.nth.call(null,vec__11768,(0),null);var channel_id = cljs.core.nth.call(null,vec__11768,(1),null);if((cljs.core._EQ_.call(null,channel_id,new cljs.core.Keyword(null,"selected-channel","selected-channel",-366010130).cljs$core$IFn$_invoke$arity$1(current_state))) && (cljs.core._EQ_.call(null,cljs.core.get_in.call(null,current_state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"channels","channels",1132759174),new cljs.core.Keyword(null,"selected-channel","selected-channel",-366010130).cljs$core$IFn$_invoke$arity$1(current_state),new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"state","state",-1988618099)], null)),new cljs.core.Keyword(null,"playing","playing",70013335))))
{var player = dommy.template.__GT_node_like.call(null,target).querySelector(dommy.core.selector.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(".audio-player.audio-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(channel_id))], null)));return setTimeout(((function (player,vec__11768,src,channel_id){
return (function (){return player.play();
});})(player,vec__11768,src,channel_id))
,(35));
} else
{return null;
}
}));
cljs.core._add_method.call(null,growingtree_app.controllers.post_controls.post_control_event_BANG_,new cljs.core.Keyword(null,"user-message-submitted","user-message-submitted",-877574457),(function (target,message,args,previous_state,current_state){var channel = cljs.core.get_in.call(null,current_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"channels","channels",1132759174),new cljs.core.Keyword(null,"selected-channel","selected-channel",-366010130).cljs$core$IFn$_invoke$arity$1(current_state)], null));var user_message = cljs.core.get_in.call(null,previous_state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"forms","forms",2045992350),new cljs.core.Keyword(null,"user-message","user-message",889829115),new cljs.core.Keyword(null,"value","value",305978217)], null));var content = cljs.core.get_in.call(null,previous_state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"forms","forms",2045992350),new cljs.core.Keyword(null,"user-message","user-message",889829115),new cljs.core.Keyword(null,"value","value",305978217)], null));var user = cljs.core.get_in.call(null,current_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"users","users",-713552705),new cljs.core.Keyword(null,"current-user-email","current-user-email",-1030852599).cljs$core$IFn$_invoke$arity$1(current_state)], null));var channel__$1 = cljs.core.get_in.call(null,current_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"channels","channels",1132759174),new cljs.core.Keyword(null,"selected-channel","selected-channel",-366010130).cljs$core$IFn$_invoke$arity$1(current_state)], null));var api_key = new cljs.core.Keyword(null,"api-key","api-key",1037904031).cljs$core$IFn$_invoke$arity$1(user);var activity = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"content","content",15833224),content,new cljs.core.Keyword(null,"author","author",2111686192),new cljs.core.Keyword(null,"email","email",1415816706).cljs$core$IFn$_invoke$arity$1(user),new cljs.core.Keyword(null,"created_at","created_at",1484050750),(new Date()),new cljs.core.Keyword(null,"channel-id","channel-id",138191095),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(channel__$1)], null);var temp__4126__auto___11769 = dommy.template.__GT_node_like.call(null,target).querySelector(dommy.core.selector.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".chat-input",".chat-input",1342148154)], null)));if(cljs.core.truth_(temp__4126__auto___11769))
{var input_11770 = temp__4126__auto___11769;dommy.core.set_value_BANG_.call(null,input_11770,"");
} else
{}
setTimeout(((function (channel,user_message,content,user,channel__$1,api_key,activity){
return (function (){return growingtree_app.ui.scroll_to_latest_message_when_appropriate_BANG_.call(null,target,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(channel__$1));
});})(channel,user_message,content,user,channel__$1,api_key,activity))
,(35));
growingtree_app.commands.handle_maybe_command.call(null,target,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"content","content",15833224),user_message,new cljs.core.Keyword(null,"channel-id","channel-id",138191095),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(channel__$1)], null),current_state);
if(growingtree_app.controllers.post_controls.sendable_message_QMARK_.call(null,user_message))
{return growingtree_app.api.mock.send_user_message_BANG_.call(null,api_key,activity);
} else
{return null;
}
}));
cljs.core._add_method.call(null,growingtree_app.controllers.post_controls.post_control_event_BANG_,new cljs.core.Keyword(null,"audio-player-started","audio-player-started",-1739082677),(function (target,message,channel_id,previous_state,current_state){var player = dommy.template.__GT_node_like.call(null,target).querySelector(dommy.core.selector.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(".audio-player.audio-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(channel_id))], null)));return setTimeout(((function (player){
return (function (){return player.play();
});})(player))
,(35));
}));
cljs.core._add_method.call(null,growingtree_app.controllers.post_controls.post_control_event_BANG_,new cljs.core.Keyword(null,"audio-player-stopped","audio-player-stopped",170014150),(function (target,message,channel_id,previous_state,current_state){var player = dommy.template.__GT_node_like.call(null,target).querySelector(dommy.core.selector.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(".audio-player.audio-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(channel_id))], null)));return setTimeout(((function (player){
return (function (){return player.pause();
});})(player))
,(35));
}));
cljs.core._add_method.call(null,growingtree_app.controllers.post_controls.post_control_event_BANG_,new cljs.core.Keyword(null,"audio-player-muted","audio-player-muted",-131538835),(function (target,message,args,previous_state,current_state){var players = dommy.utils.__GT_Array.call(null,dommy.template.__GT_node_like.call(null,target).getElementsByClassName("audio-player"));return setTimeout(((function (players){
return (function (){var seq__11771 = cljs.core.seq.call(null,players);var chunk__11772 = null;var count__11773 = (0);var i__11774 = (0);while(true){
if((i__11774 < count__11773))
{var player = cljs.core._nth.call(null,chunk__11772,i__11774);player.muted = true;
{
var G__11775 = seq__11771;
var G__11776 = chunk__11772;
var G__11777 = count__11773;
var G__11778 = (i__11774 + (1));
seq__11771 = G__11775;
chunk__11772 = G__11776;
count__11773 = G__11777;
i__11774 = G__11778;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__11771);if(temp__4126__auto__)
{var seq__11771__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11771__$1))
{var c__4299__auto__ = cljs.core.chunk_first.call(null,seq__11771__$1);{
var G__11779 = cljs.core.chunk_rest.call(null,seq__11771__$1);
var G__11780 = c__4299__auto__;
var G__11781 = cljs.core.count.call(null,c__4299__auto__);
var G__11782 = (0);
seq__11771 = G__11779;
chunk__11772 = G__11780;
count__11773 = G__11781;
i__11774 = G__11782;
continue;
}
} else
{var player = cljs.core.first.call(null,seq__11771__$1);player.muted = true;
{
var G__11783 = cljs.core.next.call(null,seq__11771__$1);
var G__11784 = null;
var G__11785 = (0);
var G__11786 = (0);
seq__11771 = G__11783;
chunk__11772 = G__11784;
count__11773 = G__11785;
i__11774 = G__11786;
continue;
}
}
} else
{return null;
}
}
break;
}
});})(players))
,(35));
}));
cljs.core._add_method.call(null,growingtree_app.controllers.post_controls.post_control_event_BANG_,new cljs.core.Keyword(null,"audio-player-unmuted","audio-player-unmuted",710141160),(function (target,message,args,previous_state,current_state){var players = dommy.utils.__GT_Array.call(null,dommy.template.__GT_node_like.call(null,target).getElementsByClassName("audio-player"));return setTimeout(((function (players){
return (function (){var seq__11787 = cljs.core.seq.call(null,players);var chunk__11788 = null;var count__11789 = (0);var i__11790 = (0);while(true){
if((i__11790 < count__11789))
{var player = cljs.core._nth.call(null,chunk__11788,i__11790);player.muted = false;
{
var G__11791 = seq__11787;
var G__11792 = chunk__11788;
var G__11793 = count__11789;
var G__11794 = (i__11790 + (1));
seq__11787 = G__11791;
chunk__11788 = G__11792;
count__11789 = G__11793;
i__11790 = G__11794;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__11787);if(temp__4126__auto__)
{var seq__11787__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11787__$1))
{var c__4299__auto__ = cljs.core.chunk_first.call(null,seq__11787__$1);{
var G__11795 = cljs.core.chunk_rest.call(null,seq__11787__$1);
var G__11796 = c__4299__auto__;
var G__11797 = cljs.core.count.call(null,c__4299__auto__);
var G__11798 = (0);
seq__11787 = G__11795;
chunk__11788 = G__11796;
count__11789 = G__11797;
i__11790 = G__11798;
continue;
}
} else
{var player = cljs.core.first.call(null,seq__11787__$1);player.muted = false;
{
var G__11799 = cljs.core.next.call(null,seq__11787__$1);
var G__11800 = null;
var G__11801 = (0);
var G__11802 = (0);
seq__11787 = G__11799;
chunk__11788 = G__11800;
count__11789 = G__11801;
i__11790 = G__11802;
continue;
}
}
} else
{return null;
}
}
break;
}
});})(players))
,(35));
}));
cljs.core._add_method.call(null,growingtree_app.controllers.post_controls.post_control_event_BANG_,new cljs.core.Keyword(null,"current-user-mentioned","current-user-mentioned",134481480),(function (target,message,p__11803,previous_state,current_state){var vec__11804 = p__11803;var activity = cljs.core.nth.call(null,vec__11804,(0),null);var url = cljs.core.nth.call(null,vec__11804,(1),null);var player = dommy.template.__GT_node_like.call(null,target).querySelector(dommy.core.selector.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(".audio-player.sfx.audio-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"channel-id","channel-id",138191095).cljs$core$IFn$_invoke$arity$1(activity)))], null)));return setTimeout(((function (player,vec__11804,activity,url){
return (function (){return player.play();
});})(player,vec__11804,activity,url))
,(35));
}));
cljs.core._add_method.call(null,growingtree_app.controllers.post_controls.post_control_event_BANG_,new cljs.core.Keyword(null,"user-logged-out","user-logged-out",-1569726039),(function (target,message,p__11805,previous_state,current_state){var vec__11806 = p__11805;var activity = cljs.core.nth.call(null,vec__11806,(0),null);var url = cljs.core.nth.call(null,vec__11806,(1),null);return growingtree_app.utils.mprint.call(null,"Log the user out somehow");
}));
cljs.core._add_method.call(null,growingtree_app.controllers.post_controls.post_control_event_BANG_,new cljs.core.Keyword(null,"search-field-focused","search-field-focused",1388495290),(function (target,message,p__11807,previous_state,current_state){var vec__11808 = p__11807;var activity = cljs.core.nth.call(null,vec__11808,(0),null);var url = cljs.core.nth.call(null,vec__11808,(1),null);var temp__4126__auto__ = document.querySelector(dommy.core.selector.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [target,new cljs.core.Keyword(null,"input.query","input.query",1777106866)], null)));if(cljs.core.truth_(temp__4126__auto__))
{var search_field = temp__4126__auto__;return window.setTimeout(((function (search_field,temp__4126__auto__,vec__11808,activity,url){
return (function (){return search_field.value = cljs.core.get_in.call(null,current_state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"forms","forms",2045992350),new cljs.core.Keyword(null,"search","search",1564939822),new cljs.core.Keyword(null,"value","value",305978217)], null));
});})(search_field,temp__4126__auto__,vec__11808,activity,url))
,(20));
} else
{return null;
}
}));
cljs.core._add_method.call(null,growingtree_app.controllers.post_controls.post_control_event_BANG_,new cljs.core.Keyword(null,"search-focus-key-pressed","search-focus-key-pressed",-469625493),(function (target,message,args,previous_state,current_state){var temp__4126__auto__ = document.querySelector(dommy.core.selector.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [target,new cljs.core.Keyword(null,"input.query","input.query",1777106866)], null)));if(cljs.core.truth_(temp__4126__auto__))
{var search_field = temp__4126__auto__;return search_field.focus();
} else
{return null;
}
}));
cljs.core._add_method.call(null,growingtree_app.controllers.post_controls.post_control_event_BANG_,new cljs.core.Keyword(null,"search-form-blur-key-pressed","search-form-blur-key-pressed",-312801117),(function (target,message,args,previous_state,current_state){var temp__4126__auto__ = document.querySelector(dommy.core.selector.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [target,new cljs.core.Keyword(null,"textarea.chat-input","textarea.chat-input",-1856842913)], null)));if(cljs.core.truth_(temp__4126__auto__))
{var message_field = temp__4126__auto__;return message_field.focus();
} else
{return null;
}
}));
cljs.core._add_method.call(null,growingtree_app.controllers.post_controls.post_control_event_BANG_,new cljs.core.Keyword(null,"user-message-blur-key-pressed","user-message-blur-key-pressed",1797856612),(function (target,message,args,previous_state,current_state){var temp__4126__auto__ = document.querySelector(dommy.core.selector.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [target,new cljs.core.Keyword(null,"input.query","input.query",1777106866)], null)));if(cljs.core.truth_(temp__4126__auto__))
{var search_field = temp__4126__auto__;return search_field.focus();
} else
{return null;
}
}));
cljs.core._add_method.call(null,growingtree_app.controllers.post_controls.post_control_event_BANG_,new cljs.core.Keyword(null,"channel-destroyed","channel-destroyed",-199507832),(function (target,message,channel_id,previous_state,current_state){return growingtree_app.api.mock.destroy_channel_BANG_.call(null,cljs.core.get_in.call(null,current_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"comms","comms",460172477),new cljs.core.Keyword(null,"api","api",-899839580)], null)),channel_id);
}));
cljs.core._add_method.call(null,growingtree_app.controllers.post_controls.post_control_event_BANG_,new cljs.core.Keyword(null,"state-restored","state-restored",450621293),(function (target,message,channel_id,previous_state,current_state){if(cljs.core.empty_QMARK_.call(null,localStorage.getItem("growingtree-app-state")))
{return cljs.core.print.call(null,"No data available to load from localStorage");
} else
{return null;
}
}));
cljs.core._add_method.call(null,growingtree_app.controllers.post_controls.post_control_event_BANG_,new cljs.core.Keyword(null,"state-persisted","state-persisted",1492039349),(function (target,message,channel_id,previous_state,current_state){return localStorage.setItem("growingtree-app-state",cljs.core.pr_str.call(null,cljs.core.dissoc.call(null,current_state,new cljs.core.Keyword(null,"comms","comms",460172477))));
}));
cljs.core._add_method.call(null,growingtree_app.controllers.post_controls.post_control_event_BANG_,new cljs.core.Keyword(null,"window-resized","window-resized",-729423083),(function (target,message,channel_id,previous_state,current_state){return null;
}));

//# sourceMappingURL=post_controls.js.map