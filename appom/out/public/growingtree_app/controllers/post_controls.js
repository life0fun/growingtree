// Compiled by ClojureScript 0.0-2173
goog.provide('growingtree_app.controllers.post_controls');
goog.require('cljs.core');
goog.require('growingtree_app.utils');
goog.require('growingtree_app.useful');
goog.require('cljs.core.async');
goog.require('growingtree_app.api.mock');
goog.require('growingtree_app.routes');
goog.require('growingtree_app.routes');
goog.require('growingtree_app.commands');
goog.require('cljs.core.async');
goog.require('growingtree_app.api.mock');
goog.require('growingtree_app.useful');
goog.require('growingtree_app.ui');
goog.require('growingtree_app.useful');
goog.require('clojure.string');
goog.require('growingtree_app.api.cljsajax');
goog.require('growingtree_app.commands');
goog.require('growingtree_app.ui');
goog.require('clojure.string');
goog.require('growingtree_app.utils');
goog.require('growingtree_app.utils');
goog.require('dommy.core');
goog.require('cljs.core.async');
goog.require('growingtree_app.api.cljsajax');
goog.require('dommy.core');
growingtree_app.controllers.post_controls.local_only_commands = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/mute","/unmute"], null);
growingtree_app.controllers.post_controls.sendable_message_QMARK_ = (function sendable_message_QMARK_(message){var vec__11544 = clojure.string.split.call(null,message,/ |\n/);var command = cljs.core.nth.call(null,vec__11544,0,null);var _ = cljs.core.nthnext.call(null,vec__11544,1);if(cljs.core.truth_((function (){var or__3443__auto__ = cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([command], true),growingtree_app.controllers.post_controls.local_only_commands);if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{return cljs.core.empty_QMARK_.call(null,message);
}
})()))
{return false;
} else
{return true;
}
});
growingtree_app.controllers.post_controls.post_control_event_BANG_ = (function (){var method_table__4301__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__4302__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__4303__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__4304__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__4305__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("post-control-event!",(function (target,msg_type,msg_data,previous_state,current_state){return msg_type;
}),new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__4305__auto__,method_table__4301__auto__,prefer_table__4302__auto__,method_cache__4303__auto__,cached_hierarchy__4304__auto__));
})();
cljs.core._add_method.call(null,growingtree_app.controllers.post_controls.post_control_event_BANG_,new cljs.core.Keyword(null,"default","default",2558708147),(function (target,msg_type,msg_data,previous_state,current_state){return console.log(cljs.core.pr_str.call(null,"default post-control for: ",msg_type));
}));
cljs.core._add_method.call(null,growingtree_app.controllers.post_controls.post_control_event_BANG_,new cljs.core.Keyword(null,"all-things","all-things",1148589667),(function (target,msg_type,nav_path,previous_state,current_state){console.log(cljs.core.pr_str.call(null,"post-control-event! all-things nav-path ",nav_path));
growingtree_app.utils.set_window_href_BANG_.call(null,growingtree_app.routes.v1_thing_nodes.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"thing-type","thing-type",843056171),cljs.core.name.call(null,cljs.core.get_in.call(null,nav_path,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"body","body",1016933652),1,2], null)))], null)));
return growingtree_app.api.cljsajax.cljs_ajax.call(null,new cljs.core.Keyword(null,"request-things","request-things",2196329909),nav_path,cljs.core.get_in.call(null,current_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"comms","comms",1108747865),new cljs.core.Keyword(null,"api","api",1014001036)], null)),nav_path);
}));
cljs.core._add_method.call(null,growingtree_app.controllers.post_controls.post_control_event_BANG_,new cljs.core.Keyword(null,"filter-things","filter-things",3353236652),(function (target,msg_type,nav_path,previous_state,current_state){console.log(cljs.core.pr_str.call(null,"post-control-event! filter-things nav-path ",nav_path));
growingtree_app.utils.set_window_href_BANG_.call(null,growingtree_app.routes.v1_thing_nodes.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"thing-type","thing-type",843056171),cljs.core.name.call(null,cljs.core.get_in.call(null,nav_path,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"body","body",1016933652),1,2], null)))], null)));
return growingtree_app.api.cljsajax.cljs_ajax.call(null,new cljs.core.Keyword(null,"request-things","request-things",2196329909),nav_path,cljs.core.get_in.call(null,current_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"comms","comms",1108747865),new cljs.core.Keyword(null,"api","api",1014001036)], null)),nav_path);
}));
cljs.core._add_method.call(null,growingtree_app.controllers.post_controls.post_control_event_BANG_,new cljs.core.Keyword(null,"add-thing","add-thing",4221519924),(function (target,msg_type,nav_path,previous_state,current_state){cljs.core.print.call(null,"post-control-event! add-thing nav-path :",nav_path);
growingtree_app.utils.set_window_href_BANG_.call(null,growingtree_app.routes.v1_thing_nodes.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"thing-type","thing-type",843056171),cljs.core.name.call(null,cljs.core.get.call(null,nav_path,new cljs.core.Keyword(null,"add-thing","add-thing",4221519924)))], null)));
return growingtree_app.api.cljsajax.cljs_ajax.call(null,new cljs.core.Keyword(null,"add-thing","add-thing",4221519924),nav_path,cljs.core.get_in.call(null,current_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"comms","comms",1108747865),new cljs.core.Keyword(null,"api","api",1014001036)], null)),cljs.core.get.call(null,nav_path,new cljs.core.Keyword(null,"details","details",2571625908)));
}));
cljs.core._add_method.call(null,growingtree_app.controllers.post_controls.post_control_event_BANG_,new cljs.core.Keyword(null,"current-user-mentioned","current-user-mentioned",1125795533),(function (target,message,args,previous_state,current_state){return growingtree_app.utils.mprint.call(null,"notify current user they were mentioned");
}));
cljs.core._add_method.call(null,growingtree_app.controllers.post_controls.post_control_event_BANG_,new cljs.core.Keyword(null,"playlist-entry-played","playlist-entry-played",1677366299),(function (target,message,p__11546,previous_state,current_state){var vec__11547 = p__11546;var order = cljs.core.nth.call(null,vec__11547,0,null);var channel_id = cljs.core.nth.call(null,vec__11547,1,null);var controls_ch = cljs.core.get_in.call(null,current_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"comms","comms",1108747865),new cljs.core.Keyword(null,"controls","controls",4741937704)], null));var playlist = cljs.core.get_in.call(null,current_state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"channels","channels",2446530370),channel_id,new cljs.core.Keyword(null,"player","player",4323118675),new cljs.core.Keyword(null,"playlist","playlist",2893378884)], null));var entry = growingtree_app.useful.ffilter.call(null,((function (controls_ch,playlist){
return (function (p1__11545_SHARP_){return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"order","order",1119910592).cljs$core$IFn$_invoke$arity$1(p1__11545_SHARP_),order);
});})(controls_ch,playlist))
,cljs.core.get_in.call(null,current_state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"channels","channels",2446530370),channel_id,new cljs.core.Keyword(null,"player","player",4323118675),new cljs.core.Keyword(null,"playlist","playlist",2893378884)], null)));return cljs.core.async.put_BANG_.call(null,controls_ch,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"audio-player-source-updated","audio-player-source-updated",2679762480),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"src","src",1014018390).cljs$core$IFn$_invoke$arity$1(entry),channel_id], null)], null));
}));
cljs.core._add_method.call(null,growingtree_app.controllers.post_controls.post_control_event_BANG_,new cljs.core.Keyword(null,"audio-player-source-updated","audio-player-source-updated",2679762480),(function (target,message,p__11548,previous_state,current_state){var vec__11549 = p__11548;var src = cljs.core.nth.call(null,vec__11549,0,null);var channel_id = cljs.core.nth.call(null,vec__11549,1,null);if((cljs.core._EQ_.call(null,channel_id,new cljs.core.Keyword(null,"selected-channel","selected-channel",2473753411).cljs$core$IFn$_invoke$arity$1(current_state))) && (cljs.core._EQ_.call(null,cljs.core.get_in.call(null,current_state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"channels","channels",2446530370),new cljs.core.Keyword(null,"selected-channel","selected-channel",2473753411).cljs$core$IFn$_invoke$arity$1(current_state),new cljs.core.Keyword(null,"player","player",4323118675),new cljs.core.Keyword(null,"state","state",1123661827)], null)),new cljs.core.Keyword(null,"playing","playing",520340384))))
{var player = dommy.template.__GT_node_like.call(null,target).querySelector(dommy.core.selector.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str(".audio-player.audio-"),cljs.core.str(channel_id)].join('')], null)));return setTimeout((function (){return player.play();
}),35);
} else
{return null;
}
}));
cljs.core._add_method.call(null,growingtree_app.controllers.post_controls.post_control_event_BANG_,new cljs.core.Keyword(null,"user-message-submitted","user-message-submitted",1304334501),(function (target,message,args,previous_state,current_state){var channel = cljs.core.get_in.call(null,current_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"channels","channels",2446530370),new cljs.core.Keyword(null,"selected-channel","selected-channel",2473753411).cljs$core$IFn$_invoke$arity$1(current_state)], null));var user_message = cljs.core.get_in.call(null,previous_state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",2448535445),new cljs.core.Keyword(null,"forms","forms",1111523233),new cljs.core.Keyword(null,"user-message","user-message",2253309815),new cljs.core.Keyword(null,"value","value",1125876963)], null));var content = cljs.core.get_in.call(null,previous_state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",2448535445),new cljs.core.Keyword(null,"forms","forms",1111523233),new cljs.core.Keyword(null,"user-message","user-message",2253309815),new cljs.core.Keyword(null,"value","value",1125876963)], null));var user = cljs.core.get_in.call(null,current_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"users","users",1125482874),new cljs.core.Keyword(null,"current-user-email","current-user-email",4091392864).cljs$core$IFn$_invoke$arity$1(current_state)], null));var channel__$1 = cljs.core.get_in.call(null,current_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"channels","channels",2446530370),new cljs.core.Keyword(null,"selected-channel","selected-channel",2473753411).cljs$core$IFn$_invoke$arity$1(current_state)], null));var api_key = new cljs.core.Keyword(null,"api-key","api-key",4507296670).cljs$core$IFn$_invoke$arity$1(user);var activity = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"content","content",1965434859),content,new cljs.core.Keyword(null,"author","author",3902543101),new cljs.core.Keyword(null,"email","email",1110523662).cljs$core$IFn$_invoke$arity$1(user),new cljs.core.Keyword(null,"created_at","created_at",2383584348),(new Date()),new cljs.core.Keyword(null,"channel-id","channel-id",3378014615),new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(channel__$1)], null);var temp__4092__auto___11550 = dommy.template.__GT_node_like.call(null,target).querySelector(dommy.core.selector.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".chat-input",".chat-input",1495609141)], null)));if(cljs.core.truth_(temp__4092__auto___11550))
{var input_11551 = temp__4092__auto___11550;dommy.core.set_value_BANG_.call(null,input_11551,"");
} else
{}
setTimeout((function (){return growingtree_app.ui.scroll_to_latest_message_when_appropriate_BANG_.call(null,target,new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(channel__$1));
}),35);
growingtree_app.commands.handle_maybe_command.call(null,target,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"content","content",1965434859),user_message,new cljs.core.Keyword(null,"channel-id","channel-id",3378014615),new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(channel__$1)], null),current_state);
if(growingtree_app.controllers.post_controls.sendable_message_QMARK_.call(null,user_message))
{return growingtree_app.api.mock.send_user_message_BANG_.call(null,api_key,activity);
} else
{return null;
}
}));
cljs.core._add_method.call(null,growingtree_app.controllers.post_controls.post_control_event_BANG_,new cljs.core.Keyword(null,"audio-player-started","audio-player-started",1807969246),(function (target,message,channel_id,previous_state,current_state){var player = dommy.template.__GT_node_like.call(null,target).querySelector(dommy.core.selector.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str(".audio-player.audio-"),cljs.core.str(channel_id)].join('')], null)));return setTimeout((function (){return player.play();
}),35);
}));
cljs.core._add_method.call(null,growingtree_app.controllers.post_controls.post_control_event_BANG_,new cljs.core.Keyword(null,"audio-player-stopped","audio-player-stopped",1820835114),(function (target,message,channel_id,previous_state,current_state){var player = dommy.template.__GT_node_like.call(null,target).querySelector(dommy.core.selector.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str(".audio-player.audio-"),cljs.core.str(channel_id)].join('')], null)));return setTimeout((function (){return player.pause();
}),35);
}));
cljs.core._add_method.call(null,growingtree_app.controllers.post_controls.post_control_event_BANG_,new cljs.core.Keyword(null,"audio-player-muted","audio-player-muted",4718730120),(function (target,message,args,previous_state,current_state){var players = dommy.utils.__GT_Array.call(null,dommy.template.__GT_node_like.call(null,target).getElementsByClassName("audio-player"));return setTimeout((function (){var seq__11552 = cljs.core.seq.call(null,players);var chunk__11553 = null;var count__11554 = 0;var i__11555 = 0;while(true){
if((i__11555 < count__11554))
{var player = cljs.core._nth.call(null,chunk__11553,i__11555);player.muted = true;
{
var G__11556 = seq__11552;
var G__11557 = chunk__11553;
var G__11558 = count__11554;
var G__11559 = (i__11555 + 1);
seq__11552 = G__11556;
chunk__11553 = G__11557;
count__11554 = G__11558;
i__11555 = G__11559;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__11552);if(temp__4092__auto__)
{var seq__11552__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11552__$1))
{var c__4191__auto__ = cljs.core.chunk_first.call(null,seq__11552__$1);{
var G__11560 = cljs.core.chunk_rest.call(null,seq__11552__$1);
var G__11561 = c__4191__auto__;
var G__11562 = cljs.core.count.call(null,c__4191__auto__);
var G__11563 = 0;
seq__11552 = G__11560;
chunk__11553 = G__11561;
count__11554 = G__11562;
i__11555 = G__11563;
continue;
}
} else
{var player = cljs.core.first.call(null,seq__11552__$1);player.muted = true;
{
var G__11564 = cljs.core.next.call(null,seq__11552__$1);
var G__11565 = null;
var G__11566 = 0;
var G__11567 = 0;
seq__11552 = G__11564;
chunk__11553 = G__11565;
count__11554 = G__11566;
i__11555 = G__11567;
continue;
}
}
} else
{return null;
}
}
break;
}
}),35);
}));
cljs.core._add_method.call(null,growingtree_app.controllers.post_controls.post_control_event_BANG_,new cljs.core.Keyword(null,"audio-player-unmuted","audio-player-unmuted",3422373327),(function (target,message,args,previous_state,current_state){var players = dommy.utils.__GT_Array.call(null,dommy.template.__GT_node_like.call(null,target).getElementsByClassName("audio-player"));return setTimeout((function (){var seq__11568 = cljs.core.seq.call(null,players);var chunk__11569 = null;var count__11570 = 0;var i__11571 = 0;while(true){
if((i__11571 < count__11570))
{var player = cljs.core._nth.call(null,chunk__11569,i__11571);player.muted = false;
{
var G__11572 = seq__11568;
var G__11573 = chunk__11569;
var G__11574 = count__11570;
var G__11575 = (i__11571 + 1);
seq__11568 = G__11572;
chunk__11569 = G__11573;
count__11570 = G__11574;
i__11571 = G__11575;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__11568);if(temp__4092__auto__)
{var seq__11568__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11568__$1))
{var c__4191__auto__ = cljs.core.chunk_first.call(null,seq__11568__$1);{
var G__11576 = cljs.core.chunk_rest.call(null,seq__11568__$1);
var G__11577 = c__4191__auto__;
var G__11578 = cljs.core.count.call(null,c__4191__auto__);
var G__11579 = 0;
seq__11568 = G__11576;
chunk__11569 = G__11577;
count__11570 = G__11578;
i__11571 = G__11579;
continue;
}
} else
{var player = cljs.core.first.call(null,seq__11568__$1);player.muted = false;
{
var G__11580 = cljs.core.next.call(null,seq__11568__$1);
var G__11581 = null;
var G__11582 = 0;
var G__11583 = 0;
seq__11568 = G__11580;
chunk__11569 = G__11581;
count__11570 = G__11582;
i__11571 = G__11583;
continue;
}
}
} else
{return null;
}
}
break;
}
}),35);
}));
cljs.core._add_method.call(null,growingtree_app.controllers.post_controls.post_control_event_BANG_,new cljs.core.Keyword(null,"current-user-mentioned","current-user-mentioned",1125795533),(function (target,message,p__11584,previous_state,current_state){var vec__11585 = p__11584;var activity = cljs.core.nth.call(null,vec__11585,0,null);var url = cljs.core.nth.call(null,vec__11585,1,null);var player = dommy.template.__GT_node_like.call(null,target).querySelector(dommy.core.selector.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str(".audio-player.sfx.audio-"),cljs.core.str(new cljs.core.Keyword(null,"channel-id","channel-id",3378014615).cljs$core$IFn$_invoke$arity$1(activity))].join('')], null)));return setTimeout((function (){return player.play();
}),35);
}));
cljs.core._add_method.call(null,growingtree_app.controllers.post_controls.post_control_event_BANG_,new cljs.core.Keyword(null,"user-logged-out","user-logged-out",2519482167),(function (target,message,p__11586,previous_state,current_state){var vec__11587 = p__11586;var activity = cljs.core.nth.call(null,vec__11587,0,null);var url = cljs.core.nth.call(null,vec__11587,1,null);return growingtree_app.utils.mprint.call(null,"Log the user out somehow");
}));
cljs.core._add_method.call(null,growingtree_app.controllers.post_controls.post_control_event_BANG_,new cljs.core.Keyword(null,"search-field-focused","search-field-focused",1194736049),(function (target,message,p__11588,previous_state,current_state){var vec__11589 = p__11588;var activity = cljs.core.nth.call(null,vec__11589,0,null);var url = cljs.core.nth.call(null,vec__11589,1,null);var temp__4092__auto__ = document.querySelector(dommy.core.selector.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [target,new cljs.core.Keyword(null,"input.query","input.query",3940929814)], null)));if(cljs.core.truth_(temp__4092__auto__))
{var search_field = temp__4092__auto__;return window.setTimeout((function (){return search_field.value = cljs.core.get_in.call(null,current_state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",2448535445),new cljs.core.Keyword(null,"forms","forms",1111523233),new cljs.core.Keyword(null,"search","search",4402534682),new cljs.core.Keyword(null,"value","value",1125876963)], null));
}),20);
} else
{return null;
}
}));
cljs.core._add_method.call(null,growingtree_app.controllers.post_controls.post_control_event_BANG_,new cljs.core.Keyword(null,"search-focus-key-pressed","search-focus-key-pressed",1169113036),(function (target,message,args,previous_state,current_state){var temp__4092__auto__ = document.querySelector(dommy.core.selector.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [target,new cljs.core.Keyword(null,"input.query","input.query",3940929814)], null)));if(cljs.core.truth_(temp__4092__auto__))
{var search_field = temp__4092__auto__;return search_field.focus();
} else
{return null;
}
}));
cljs.core._add_method.call(null,growingtree_app.controllers.post_controls.post_control_event_BANG_,new cljs.core.Keyword(null,"search-form-blur-key-pressed","search-form-blur-key-pressed",2923548996),(function (target,message,args,previous_state,current_state){var temp__4092__auto__ = document.querySelector(dommy.core.selector.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [target,new cljs.core.Keyword(null,"textarea.chat-input","textarea.chat-input",3263729595)], null)));if(cljs.core.truth_(temp__4092__auto__))
{var message_field = temp__4092__auto__;return message_field.focus();
} else
{return null;
}
}));
cljs.core._add_method.call(null,growingtree_app.controllers.post_controls.post_control_event_BANG_,new cljs.core.Keyword(null,"user-message-blur-key-pressed","user-message-blur-key-pressed",3460583048),(function (target,message,args,previous_state,current_state){var temp__4092__auto__ = document.querySelector(dommy.core.selector.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [target,new cljs.core.Keyword(null,"input.query","input.query",3940929814)], null)));if(cljs.core.truth_(temp__4092__auto__))
{var search_field = temp__4092__auto__;return search_field.focus();
} else
{return null;
}
}));
cljs.core._add_method.call(null,growingtree_app.controllers.post_controls.post_control_event_BANG_,new cljs.core.Keyword(null,"channel-destroyed","channel-destroyed",3892625729),(function (target,message,channel_id,previous_state,current_state){return growingtree_app.api.mock.destroy_channel_BANG_.call(null,cljs.core.get_in.call(null,current_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"comms","comms",1108747865),new cljs.core.Keyword(null,"api","api",1014001036)], null)),channel_id);
}));
cljs.core._add_method.call(null,growingtree_app.controllers.post_controls.post_control_event_BANG_,new cljs.core.Keyword(null,"state-restored","state-restored",2236662980),(function (target,message,channel_id,previous_state,current_state){if(cljs.core.empty_QMARK_.call(null,localStorage.getItem("growingtree-app-state")))
{return cljs.core.print.call(null,"No data available to load from localStorage");
} else
{return null;
}
}));
cljs.core._add_method.call(null,growingtree_app.controllers.post_controls.post_control_event_BANG_,new cljs.core.Keyword(null,"state-persisted","state-persisted",2957998761),(function (target,message,channel_id,previous_state,current_state){return localStorage.setItem("growingtree-app-state",cljs.core.pr_str.call(null,cljs.core.dissoc.call(null,current_state,new cljs.core.Keyword(null,"comms","comms",1108747865))));
}));
cljs.core._add_method.call(null,growingtree_app.controllers.post_controls.post_control_event_BANG_,new cljs.core.Keyword(null,"window-resized","window-resized",3784490181),(function (target,message,channel_id,previous_state,current_state){return null;
}));

//# sourceMappingURL=post_controls.js.map