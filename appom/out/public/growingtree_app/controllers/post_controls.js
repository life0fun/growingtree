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
growingtree_app.controllers.post_controls.sendable_message_QMARK_ = (function sendable_message_QMARK_(message){var vec__11761 = clojure.string.split.call(null,message,/ |\n/);var command = cljs.core.nth.call(null,vec__11761,0,null);var _ = cljs.core.nthnext.call(null,vec__11761,1);if(cljs.core.truth_((function (){var or__3443__auto__ = cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([command], true),growingtree_app.controllers.post_controls.local_only_commands);if(cljs.core.truth_(or__3443__auto__))
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
growingtree_app.controllers.post_controls.post_control_event_BANG_ = (function (){var method_table__4301__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__4302__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__4303__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__4304__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__4305__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("post-control-event!",(function (target,message,args,previous_state,current_state){return message;
}),new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__4305__auto__,method_table__4301__auto__,prefer_table__4302__auto__,method_cache__4303__auto__,cached_hierarchy__4304__auto__));
})();
cljs.core._add_method.call(null,growingtree_app.controllers.post_controls.post_control_event_BANG_,new cljs.core.Keyword(null,"default","default",2558708147),(function (target,message,args,previous_state,current_state){return console.log("default post-control for: ",cljs.core.pr_str.call(null,message));
}));
cljs.core._add_method.call(null,growingtree_app.controllers.post_controls.post_control_event_BANG_,new cljs.core.Keyword(null,"tab-selected","tab-selected",4274020677),(function (target,message,nav_path,previous_state,current_state){cljs.core.print.call(null,"post-control-event! tab-selected nav-path ",nav_path);
growingtree_app.utils.set_window_href_BANG_.call(null,growingtree_app.routes.v1_thing_nodes.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"thing-type","thing-type",843056171),cljs.core.name.call(null,cljs.core.last.call(null,new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(nav_path)))], null)));
return growingtree_app.api.cljsajax.cljs_ajax.call(null,new cljs.core.Keyword(null,"request-things","request-things",2196329909),nav_path,cljs.core.get_in.call(null,current_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"comms","comms",1108747865),new cljs.core.Keyword(null,"api","api",1014001036)], null)),nav_path);
}));
cljs.core._add_method.call(null,growingtree_app.controllers.post_controls.post_control_event_BANG_,new cljs.core.Keyword(null,"create-thing","create-thing",1461485647),(function (target,message,nav_path,previous_state,current_state){cljs.core.print.call(null,"post-control-event! create-thing ",nav_path);
growingtree_app.utils.set_window_href_BANG_.call(null,growingtree_app.routes.v1_thing_nodes.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"thing-type","thing-type",843056171),cljs.core.name.call(null,cljs.core.first.call(null,nav_path))], null)));
return growingtree_app.api.cljsajax.cljs_ajax.call(null,new cljs.core.Keyword(null,"add-thing","add-thing",4221519924),nav_path,cljs.core.get_in.call(null,current_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"comms","comms",1108747865),new cljs.core.Keyword(null,"api","api",1014001036)], null)),cljs.core.last.call(null,nav_path));
}));
cljs.core._add_method.call(null,growingtree_app.controllers.post_controls.post_control_event_BANG_,new cljs.core.Keyword(null,"current-user-mentioned","current-user-mentioned",1125795533),(function (target,message,args,previous_state,current_state){return growingtree_app.utils.mprint.call(null,"notify current user they were mentioned");
}));
cljs.core._add_method.call(null,growingtree_app.controllers.post_controls.post_control_event_BANG_,new cljs.core.Keyword(null,"playlist-entry-played","playlist-entry-played",1677366299),(function (target,message,p__11763,previous_state,current_state){var vec__11764 = p__11763;var order = cljs.core.nth.call(null,vec__11764,0,null);var channel_id = cljs.core.nth.call(null,vec__11764,1,null);var controls_ch = cljs.core.get_in.call(null,current_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"comms","comms",1108747865),new cljs.core.Keyword(null,"controls","controls",4741937704)], null));var playlist = cljs.core.get_in.call(null,current_state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"channels","channels",2446530370),channel_id,new cljs.core.Keyword(null,"player","player",4323118675),new cljs.core.Keyword(null,"playlist","playlist",2893378884)], null));var entry = growingtree_app.useful.ffilter.call(null,((function (controls_ch,playlist){
return (function (p1__11762_SHARP_){return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"order","order",1119910592).cljs$core$IFn$_invoke$arity$1(p1__11762_SHARP_),order);
});})(controls_ch,playlist))
,cljs.core.get_in.call(null,current_state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"channels","channels",2446530370),channel_id,new cljs.core.Keyword(null,"player","player",4323118675),new cljs.core.Keyword(null,"playlist","playlist",2893378884)], null)));return cljs.core.async.put_BANG_.call(null,controls_ch,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"audio-player-source-updated","audio-player-source-updated",2679762480),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"src","src",1014018390).cljs$core$IFn$_invoke$arity$1(entry),channel_id], null)], null));
}));
cljs.core._add_method.call(null,growingtree_app.controllers.post_controls.post_control_event_BANG_,new cljs.core.Keyword(null,"audio-player-source-updated","audio-player-source-updated",2679762480),(function (target,message,p__11765,previous_state,current_state){var vec__11766 = p__11765;var src = cljs.core.nth.call(null,vec__11766,0,null);var channel_id = cljs.core.nth.call(null,vec__11766,1,null);if((cljs.core._EQ_.call(null,channel_id,new cljs.core.Keyword(null,"selected-channel","selected-channel",2473753411).cljs$core$IFn$_invoke$arity$1(current_state))) && (cljs.core._EQ_.call(null,cljs.core.get_in.call(null,current_state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"channels","channels",2446530370),new cljs.core.Keyword(null,"selected-channel","selected-channel",2473753411).cljs$core$IFn$_invoke$arity$1(current_state),new cljs.core.Keyword(null,"player","player",4323118675),new cljs.core.Keyword(null,"state","state",1123661827)], null)),new cljs.core.Keyword(null,"playing","playing",520340384))))
{var player = dommy.template.__GT_node_like.call(null,target).querySelector(dommy.core.selector.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str(".audio-player.audio-"),cljs.core.str(channel_id)].join('')], null)));return setTimeout((function (){return player.play();
}),35);
} else
{return null;
}
}));
cljs.core._add_method.call(null,growingtree_app.controllers.post_controls.post_control_event_BANG_,new cljs.core.Keyword(null,"user-message-submitted","user-message-submitted",1304334501),(function (target,message,args,previous_state,current_state){var channel = cljs.core.get_in.call(null,current_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"channels","channels",2446530370),new cljs.core.Keyword(null,"selected-channel","selected-channel",2473753411).cljs$core$IFn$_invoke$arity$1(current_state)], null));var user_message = cljs.core.get_in.call(null,previous_state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",2448535445),new cljs.core.Keyword(null,"forms","forms",1111523233),new cljs.core.Keyword(null,"user-message","user-message",2253309815),new cljs.core.Keyword(null,"value","value",1125876963)], null));var content = cljs.core.get_in.call(null,previous_state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",2448535445),new cljs.core.Keyword(null,"forms","forms",1111523233),new cljs.core.Keyword(null,"user-message","user-message",2253309815),new cljs.core.Keyword(null,"value","value",1125876963)], null));var user = cljs.core.get_in.call(null,current_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"users","users",1125482874),new cljs.core.Keyword(null,"current-user-email","current-user-email",4091392864).cljs$core$IFn$_invoke$arity$1(current_state)], null));var channel__$1 = cljs.core.get_in.call(null,current_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"channels","channels",2446530370),new cljs.core.Keyword(null,"selected-channel","selected-channel",2473753411).cljs$core$IFn$_invoke$arity$1(current_state)], null));var api_key = new cljs.core.Keyword(null,"api-key","api-key",4507296670).cljs$core$IFn$_invoke$arity$1(user);var activity = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"content","content",1965434859),content,new cljs.core.Keyword(null,"author","author",3902543101),new cljs.core.Keyword(null,"email","email",1110523662).cljs$core$IFn$_invoke$arity$1(user),new cljs.core.Keyword(null,"created_at","created_at",2383584348),(new Date()),new cljs.core.Keyword(null,"channel-id","channel-id",3378014615),new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(channel__$1)], null);var temp__4092__auto___11767 = dommy.template.__GT_node_like.call(null,target).querySelector(dommy.core.selector.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".chat-input",".chat-input",1495609141)], null)));if(cljs.core.truth_(temp__4092__auto___11767))
{var input_11768 = temp__4092__auto___11767;dommy.core.set_value_BANG_.call(null,input_11768,"");
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
cljs.core._add_method.call(null,growingtree_app.controllers.post_controls.post_control_event_BANG_,new cljs.core.Keyword(null,"audio-player-muted","audio-player-muted",4718730120),(function (target,message,args,previous_state,current_state){var players = dommy.utils.__GT_Array.call(null,dommy.template.__GT_node_like.call(null,target).getElementsByClassName("audio-player"));return setTimeout((function (){var seq__11769 = cljs.core.seq.call(null,players);var chunk__11770 = null;var count__11771 = 0;var i__11772 = 0;while(true){
if((i__11772 < count__11771))
{var player = cljs.core._nth.call(null,chunk__11770,i__11772);player.muted = true;
{
var G__11773 = seq__11769;
var G__11774 = chunk__11770;
var G__11775 = count__11771;
var G__11776 = (i__11772 + 1);
seq__11769 = G__11773;
chunk__11770 = G__11774;
count__11771 = G__11775;
i__11772 = G__11776;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__11769);if(temp__4092__auto__)
{var seq__11769__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11769__$1))
{var c__4191__auto__ = cljs.core.chunk_first.call(null,seq__11769__$1);{
var G__11777 = cljs.core.chunk_rest.call(null,seq__11769__$1);
var G__11778 = c__4191__auto__;
var G__11779 = cljs.core.count.call(null,c__4191__auto__);
var G__11780 = 0;
seq__11769 = G__11777;
chunk__11770 = G__11778;
count__11771 = G__11779;
i__11772 = G__11780;
continue;
}
} else
{var player = cljs.core.first.call(null,seq__11769__$1);player.muted = true;
{
var G__11781 = cljs.core.next.call(null,seq__11769__$1);
var G__11782 = null;
var G__11783 = 0;
var G__11784 = 0;
seq__11769 = G__11781;
chunk__11770 = G__11782;
count__11771 = G__11783;
i__11772 = G__11784;
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
cljs.core._add_method.call(null,growingtree_app.controllers.post_controls.post_control_event_BANG_,new cljs.core.Keyword(null,"audio-player-unmuted","audio-player-unmuted",3422373327),(function (target,message,args,previous_state,current_state){var players = dommy.utils.__GT_Array.call(null,dommy.template.__GT_node_like.call(null,target).getElementsByClassName("audio-player"));return setTimeout((function (){var seq__11785 = cljs.core.seq.call(null,players);var chunk__11786 = null;var count__11787 = 0;var i__11788 = 0;while(true){
if((i__11788 < count__11787))
{var player = cljs.core._nth.call(null,chunk__11786,i__11788);player.muted = false;
{
var G__11789 = seq__11785;
var G__11790 = chunk__11786;
var G__11791 = count__11787;
var G__11792 = (i__11788 + 1);
seq__11785 = G__11789;
chunk__11786 = G__11790;
count__11787 = G__11791;
i__11788 = G__11792;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__11785);if(temp__4092__auto__)
{var seq__11785__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11785__$1))
{var c__4191__auto__ = cljs.core.chunk_first.call(null,seq__11785__$1);{
var G__11793 = cljs.core.chunk_rest.call(null,seq__11785__$1);
var G__11794 = c__4191__auto__;
var G__11795 = cljs.core.count.call(null,c__4191__auto__);
var G__11796 = 0;
seq__11785 = G__11793;
chunk__11786 = G__11794;
count__11787 = G__11795;
i__11788 = G__11796;
continue;
}
} else
{var player = cljs.core.first.call(null,seq__11785__$1);player.muted = false;
{
var G__11797 = cljs.core.next.call(null,seq__11785__$1);
var G__11798 = null;
var G__11799 = 0;
var G__11800 = 0;
seq__11785 = G__11797;
chunk__11786 = G__11798;
count__11787 = G__11799;
i__11788 = G__11800;
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
cljs.core._add_method.call(null,growingtree_app.controllers.post_controls.post_control_event_BANG_,new cljs.core.Keyword(null,"current-user-mentioned","current-user-mentioned",1125795533),(function (target,message,p__11801,previous_state,current_state){var vec__11802 = p__11801;var activity = cljs.core.nth.call(null,vec__11802,0,null);var url = cljs.core.nth.call(null,vec__11802,1,null);var player = dommy.template.__GT_node_like.call(null,target).querySelector(dommy.core.selector.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str(".audio-player.sfx.audio-"),cljs.core.str(new cljs.core.Keyword(null,"channel-id","channel-id",3378014615).cljs$core$IFn$_invoke$arity$1(activity))].join('')], null)));return setTimeout((function (){return player.play();
}),35);
}));
cljs.core._add_method.call(null,growingtree_app.controllers.post_controls.post_control_event_BANG_,new cljs.core.Keyword(null,"user-logged-out","user-logged-out",2519482167),(function (target,message,p__11803,previous_state,current_state){var vec__11804 = p__11803;var activity = cljs.core.nth.call(null,vec__11804,0,null);var url = cljs.core.nth.call(null,vec__11804,1,null);return growingtree_app.utils.mprint.call(null,"Log the user out somehow");
}));
cljs.core._add_method.call(null,growingtree_app.controllers.post_controls.post_control_event_BANG_,new cljs.core.Keyword(null,"search-field-focused","search-field-focused",1194736049),(function (target,message,p__11805,previous_state,current_state){var vec__11806 = p__11805;var activity = cljs.core.nth.call(null,vec__11806,0,null);var url = cljs.core.nth.call(null,vec__11806,1,null);var temp__4092__auto__ = document.querySelector(dommy.core.selector.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [target,new cljs.core.Keyword(null,"input.query","input.query",3940929814)], null)));if(cljs.core.truth_(temp__4092__auto__))
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