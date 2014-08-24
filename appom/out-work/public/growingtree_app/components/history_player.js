// Compiled by ClojureScript 0.0-2277
goog.provide('growingtree_app.components.history_player');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('sablono.core');
goog.require('goog.events.EventType');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('sablono.core');
goog.require('goog.events');
goog.require('growingtree_app.utils');
goog.require('clojure.string');
goog.require('om.core');
goog.require('om.core');
goog.require('growingtree_app.utils');
goog.require('clojure.string');
goog.require('goog.events');
growingtree_app.components.history_player.local_dragging_QMARK_ = cljs.core.atom.call(null,false);
growingtree_app.components.history_player.listen = (function listen(el,type){var out = cljs.core.async.chan.call(null);goog.events.listen(el,type,((function (out){
return (function (p1__11736_SHARP_){if(cljs.core.truth_(cljs.core.deref.call(null,growingtree_app.components.history_player.local_dragging_QMARK_)))
{p1__11736_SHARP_.preventDefault();
} else
{}
return cljs.core.async.put_BANG_.call(null,out,p1__11736_SHARP_);
});})(out))
);
return out;
});
growingtree_app.components.history_player.player_step = (function (){var method_table__4409__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__4410__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__4411__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__4412__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__4413__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("player-step",((function (method_table__4409__auto__,prefer_table__4410__auto__,method_cache__4411__auto__,cached_hierarchy__4412__auto__,hierarchy__4413__auto__){
return (function (format_version,active_step_number,step_number,step){return format_version;
});})(method_table__4409__auto__,prefer_table__4410__auto__,method_cache__4411__auto__,cached_hierarchy__4412__auto__,hierarchy__4413__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4413__auto__,method_table__4409__auto__,prefer_table__4410__auto__,method_cache__4411__auto__,cached_hierarchy__4412__auto__));
})();
cljs.core._add_method.call(null,growingtree_app.components.history_player.player_step,(1),(function (format_version,active_step_number,comm,step_number,step){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.replay-step","div.replay-step",-11028116),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,active_step_number,step_number))?"active":null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"step-selected","step-selected",1680713876),step_number], null));
}),new cljs.core.Keyword(null,"style","style",-496642736),{"cursor": "pointer"}], null),cljs.core.pr_str.call(null,step)], null);
}));
growingtree_app.components.history_player.playlist_entry = (function playlist_entry(comm,replay_number,replay){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.playlist-entry","div.playlist-entry",-2115370722),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"replay-selected","replay-selected",-624639511),replay_number], null));
}),new cljs.core.Keyword(null,"style","style",-496642736),{"cursor": "pointer"}], null),(function (){var or__3543__auto__ = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(replay);if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return "No name for recording";
}
})()], null);
});
growingtree_app.components.history_player.player = (function player(app,owner,opts){if(typeof growingtree_app.components.history_player.t11818 !== 'undefined')
{} else
{
/**
* @constructor
*/
growingtree_app.components.history_player.t11818 = (function (opts,owner,app,player,meta11819){
this.opts = opts;
this.owner = owner;
this.app = app;
this.player = player;
this.meta11819 = meta11819;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
growingtree_app.components.history_player.t11818.cljs$lang$type = true;
growingtree_app.components.history_player.t11818.cljs$lang$ctorStr = "growingtree-app.components.history-player/t11818";
growingtree_app.components.history_player.t11818.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"growingtree-app.components.history-player/t11818");
});
growingtree_app.components.history_player.t11818.prototype.om$core$IRender$ = true;
growingtree_app.components.history_player.t11818.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return sablono.interpreter.interpret.call(null,(function (){var comm = cljs.core.get_in.call(null,self__.app,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player-comms","player-comms",1620357071),new cljs.core.Keyword(null,"player-control","player-control",-255472555)], null));var drag_comm = cljs.core.get_in.call(null,self__.app,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player-comms","player-comms",1620357071),new cljs.core.Keyword(null,"player-drag","player-drag",-831984703)], null));var replays = cljs.core.get_in.call(null,self__.app,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"replays","replays",1696271113),new cljs.core.Keyword(null,"replay-list","replay-list",1451976532)], null));var queued_replay = cljs.core.get_in.call(null,self__.app,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"replays","replays",1696271113),new cljs.core.Keyword(null,"queued-replay","queued-replay",416789727)], null));var map__11821 = queued_replay;var map__11821__$1 = ((cljs.core.seq_QMARK_.call(null,map__11821))?cljs.core.apply.call(null,cljs.core.hash_map,map__11821):map__11821);var active_step = cljs.core.get.call(null,map__11821__$1,new cljs.core.Keyword(null,"active-step","active-step",1698284288));var history = cljs.core.get.call(null,map__11821__$1,new cljs.core.Keyword(null,"history","history",-247395220));var format_version = cljs.core.get.call(null,map__11821__$1,new cljs.core.Keyword(null,"format_version","format_version",1415666110));return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.history-player","div.history-player",-957274163),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),(function (){var temp__4126__auto__ = cljs.core.get_in.call(null,self__.app,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"position","position",-2011731912)], null));if(cljs.core.truth_(temp__4126__auto__))
{var pos = temp__4126__auto__;return {"left": cljs.core.first.call(null,pos), "top": cljs.core.last.call(null,pos), "position": "fixed"};
} else
{return null;
}
})()], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row.modal-header","div.row.modal-header",-1280805367),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-lg-12","div.col-lg-12",1588800498),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.clj__GT_js.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"background-color","background-color",570434026),(cljs.core.truth_(cljs.core.get_in.call(null,self__.app,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"dragging?","dragging?",-995941410)], null)))?"#050":"#500"),new cljs.core.Keyword(null,"color","color",1011675173),"white",new cljs.core.Keyword(null,"text-align","text-align",1786091845),"center"], null))),new cljs.core.Keyword(null,"onMouseDown","onMouseDown",-1496366516),((function (comm,drag_comm,replays,queued_replay,map__11821,map__11821__$1,active_step,history,format_version,___$1){
return (function (p1__11737_SHARP_){cljs.core.reset_BANG_.call(null,growingtree_app.components.history_player.local_dragging_QMARK_,true);
return cljs.core.async.put_BANG_.call(null,drag_comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"history-player-grabbed","history-player-grabbed",-1494565014),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__11737_SHARP_.clientX,p1__11737_SHARP_.clientY], null)], null));
});})(comm,drag_comm,replays,queued_replay,map__11821,map__11821__$1,active_step,history,format_version,___$1))
], null)),"[History Player]"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-lg-4","div.col-lg-4",-519713955),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(self__.app),new cljs.core.Keyword(null,"playing","playing",70013335)))?((function (comm,drag_comm,replays,queued_replay,map__11821,map__11821__$1,active_step,history,format_version,___$1){
return (function (){return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player-stopped","player-stopped",-93544455)], null));
});})(comm,drag_comm,replays,queued_replay,map__11821,map__11821__$1,active_step,history,format_version,___$1))
:((function (comm,drag_comm,replays,queued_replay,map__11821,map__11821__$1,active_step,history,format_version,___$1){
return (function (){return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player-started","player-started",-1643686711)], null));
});})(comm,drag_comm,replays,queued_replay,map__11821,map__11821__$1,active_step,history,format_version,___$1))
)], null),((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(self__.app),new cljs.core.Keyword(null,"playing","playing",70013335)))?cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY," Pause"),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.fa.fa-pause","i.fa.fa-pause",1311418083)], null)):cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY," Play"),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.fa.fa-play","i.fa.fa-play",-880976511)], null)))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-lg-4","div.col-lg-4",-519713955),(cljs.core.truth_(queued_replay)?("Recording format v"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(format_version)+", recorded on "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"created_at","created_at",1484050750).cljs$core$IFn$_invoke$arity$1(queued_replay))):("No recording loaded"))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-lg-4.col-md-4.col-sm-8.col-xs-8","div.col-lg-4.col-md-4.col-sm-8.col-xs-8",360077484),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.playlist-entries","div.playlist-entries",-1509123018),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),"Replays"], null),cljs.core.map.call(null,cljs.core.partial.call(null,growingtree_app.components.history_player.playlist_entry,comm),cljs.core.range.call(null),replays)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-lg-8.col-md-8.col-sm-8.col-xs-8","div.col-lg-8.col-md-8.col-sm-8.col-xs-8",-1064550350),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.playlist-steps","div.playlist-steps",952035406),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),"Steps"], null),cljs.core.map.call(null,cljs.core.partial.call(null,growingtree_app.components.history_player.player_step,format_version,active_step,comm),cljs.core.range.call(null),history)], null)], null)], null)], null);
})());
});
growingtree_app.components.history_player.t11818.prototype.om$core$IWillMount$ = true;
growingtree_app.components.history_player.t11818.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var mouse_move_chan = cljs.core.async.map.call(null,((function (___$1){
return (function (e){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e.clientX,e.clientY], null);
});})(___$1))
,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [growingtree_app.components.history_player.listen.call(null,window,"mousemove")], null));var mouse_up_chan = cljs.core.async.map.call(null,((function (mouse_move_chan,___$1){
return (function (e){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e.clientX,e.clientY], null);
});})(mouse_move_chan,___$1))
,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [growingtree_app.components.history_player.listen.call(null,window,"mouseup")], null));var comm = cljs.core.get_in.call(null,self__.app,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player-comms","player-comms",1620357071),new cljs.core.Keyword(null,"player-drag","player-drag",-831984703)], null));var c__6345__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6345__auto__,mouse_move_chan,mouse_up_chan,comm,___$1){
return (function (){var f__6346__auto__ = (function (){var switch__6280__auto__ = ((function (c__6345__auto__,mouse_move_chan,mouse_up_chan,comm,___$1){
return (function (state_11868){var state_val_11869 = (state_11868[(1)]);if((state_val_11869 === (7)))
{var inst_11834 = (state_11868[(7)]);var inst_11832 = (state_11868[(8)]);var inst_11832__$1 = (state_11868[(2)]);var inst_11833 = cljs.core.nth.call(null,inst_11832__$1,(0),null);var inst_11834__$1 = cljs.core.nth.call(null,inst_11832__$1,(1),null);var inst_11835 = cljs.core._EQ_.call(null,inst_11834__$1,mouse_move_chan);var state_11868__$1 = (function (){var statearr_11870 = state_11868;(statearr_11870[(7)] = inst_11834__$1);
(statearr_11870[(8)] = inst_11832__$1);
(statearr_11870[(9)] = inst_11833);
return statearr_11870;
})();if(inst_11835)
{var statearr_11871_11898 = state_11868__$1;(statearr_11871_11898[(1)] = (8));
} else
{var statearr_11872_11899 = state_11868__$1;(statearr_11872_11899[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11869 === (1)))
{var state_11868__$1 = state_11868;var statearr_11873_11900 = state_11868__$1;(statearr_11873_11900[(2)] = null);
(statearr_11873_11900[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11869 === (4)))
{var inst_11829 = [mouse_move_chan,mouse_up_chan];var inst_11830 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_11829,null));var state_11868__$1 = state_11868;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_11868__$1,(7),inst_11830);
} else
{if((state_val_11869 === (15)))
{var state_11868__$1 = state_11868;var statearr_11874_11901 = state_11868__$1;(statearr_11874_11901[(2)] = null);
(statearr_11874_11901[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11869 === (13)))
{var inst_11858 = (state_11868[(2)]);var state_11868__$1 = state_11868;var statearr_11875_11902 = state_11868__$1;(statearr_11875_11902[(2)] = inst_11858);
(statearr_11875_11902[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11869 === (6)))
{var inst_11864 = (state_11868[(2)]);var state_11868__$1 = state_11868;var statearr_11876_11903 = state_11868__$1;(statearr_11876_11903[(2)] = inst_11864);
(statearr_11876_11903[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11869 === (3)))
{var inst_11866 = (state_11868[(2)]);var state_11868__$1 = state_11868;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11868__$1,inst_11866);
} else
{if((state_val_11869 === (12)))
{var inst_11834 = (state_11868[(7)]);var inst_11852 = cljs.core._EQ_.call(null,inst_11834,new cljs.core.Keyword(null,"default","default",-1987822328));var state_11868__$1 = state_11868;if(inst_11852)
{var statearr_11877_11904 = state_11868__$1;(statearr_11877_11904[(1)] = (14));
} else
{var statearr_11878_11905 = state_11868__$1;(statearr_11878_11905[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11869 === (2)))
{var state_11868__$1 = state_11868;if(true)
{var statearr_11879_11906 = state_11868__$1;(statearr_11879_11906[(1)] = (4));
} else
{var statearr_11880_11907 = state_11868__$1;(statearr_11880_11907[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11869 === (11)))
{var inst_11832 = (state_11868[(8)]);var inst_11846 = cljs.core.nth.call(null,inst_11832,(0),null);var inst_11847 = [new cljs.core.Keyword(null,"history-player-released","history-player-released",-2051982612),inst_11846];var inst_11848 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_11847,null));var inst_11849 = cljs.core.async.put_BANG_.call(null,comm,inst_11848);var inst_11850 = cljs.core.reset_BANG_.call(null,growingtree_app.components.history_player.local_dragging_QMARK_,false);var state_11868__$1 = (function (){var statearr_11881 = state_11868;(statearr_11881[(10)] = inst_11849);
return statearr_11881;
})();var statearr_11882_11908 = state_11868__$1;(statearr_11882_11908[(2)] = inst_11850);
(statearr_11882_11908[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11869 === (9)))
{var inst_11834 = (state_11868[(7)]);var inst_11843 = cljs.core._EQ_.call(null,inst_11834,mouse_up_chan);var state_11868__$1 = state_11868;if(inst_11843)
{var statearr_11883_11909 = state_11868__$1;(statearr_11883_11909[(1)] = (11));
} else
{var statearr_11884_11910 = state_11868__$1;(statearr_11884_11910[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11869 === (5)))
{var state_11868__$1 = state_11868;var statearr_11885_11911 = state_11868__$1;(statearr_11885_11911[(2)] = null);
(statearr_11885_11911[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11869 === (14)))
{var inst_11833 = (state_11868[(9)]);var state_11868__$1 = state_11868;var statearr_11886_11912 = state_11868__$1;(statearr_11886_11912[(2)] = inst_11833);
(statearr_11886_11912[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11869 === (16)))
{var inst_11856 = (state_11868[(2)]);var state_11868__$1 = state_11868;var statearr_11887_11913 = state_11868__$1;(statearr_11887_11913[(2)] = inst_11856);
(statearr_11887_11913[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11869 === (10)))
{var inst_11860 = (state_11868[(2)]);var state_11868__$1 = (function (){var statearr_11888 = state_11868;(statearr_11888[(11)] = inst_11860);
return statearr_11888;
})();var statearr_11889_11914 = state_11868__$1;(statearr_11889_11914[(2)] = null);
(statearr_11889_11914[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11869 === (8)))
{var inst_11832 = (state_11868[(8)]);var inst_11838 = cljs.core.nth.call(null,inst_11832,(0),null);var inst_11839 = [new cljs.core.Keyword(null,"mouse-moved","mouse-moved",-1918152310),inst_11838];var inst_11840 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_11839,null));var inst_11841 = cljs.core.async.put_BANG_.call(null,comm,inst_11840);var state_11868__$1 = state_11868;var statearr_11890_11915 = state_11868__$1;(statearr_11890_11915[(2)] = inst_11841);
(statearr_11890_11915[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6345__auto__,mouse_move_chan,mouse_up_chan,comm,___$1))
;return ((function (switch__6280__auto__,c__6345__auto__,mouse_move_chan,mouse_up_chan,comm,___$1){
return (function() {
var state_machine__6281__auto__ = null;
var state_machine__6281__auto____0 = (function (){var statearr_11894 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11894[(0)] = state_machine__6281__auto__);
(statearr_11894[(1)] = (1));
return statearr_11894;
});
var state_machine__6281__auto____1 = (function (state_11868){while(true){
var ret_value__6282__auto__ = (function (){try{while(true){
var result__6283__auto__ = switch__6280__auto__.call(null,state_11868);if(cljs.core.keyword_identical_QMARK_.call(null,result__6283__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6283__auto__;
}
break;
}
}catch (e11895){if((e11895 instanceof Object))
{var ex__6284__auto__ = e11895;var statearr_11896_11916 = state_11868;(statearr_11896_11916[(5)] = ex__6284__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11868);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e11895;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6282__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11917 = state_11868;
state_11868 = G__11917;
continue;
}
} else
{return ret_value__6282__auto__;
}
break;
}
});
state_machine__6281__auto__ = function(state_11868){
switch(arguments.length){
case 0:
return state_machine__6281__auto____0.call(this);
case 1:
return state_machine__6281__auto____1.call(this,state_11868);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6281__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6281__auto____0;
state_machine__6281__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6281__auto____1;
return state_machine__6281__auto__;
})()
;})(switch__6280__auto__,c__6345__auto__,mouse_move_chan,mouse_up_chan,comm,___$1))
})();var state__6347__auto__ = (function (){var statearr_11897 = f__6346__auto__.call(null);(statearr_11897[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6345__auto__);
return statearr_11897;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6347__auto__);
});})(c__6345__auto__,mouse_move_chan,mouse_up_chan,comm,___$1))
);
return c__6345__auto__;
});
growingtree_app.components.history_player.t11818.prototype.om$core$IDisplayName$ = true;
growingtree_app.components.history_player.t11818.prototype.om$core$IDisplayName$display_name$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var or__3543__auto__ = new cljs.core.Keyword(null,"react-name","react-name",-834049397).cljs$core$IFn$_invoke$arity$1(self__.opts);if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return "HistoryPlayer";
}
});
growingtree_app.components.history_player.t11818.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11820){var self__ = this;
var _11820__$1 = this;return self__.meta11819;
});
growingtree_app.components.history_player.t11818.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11820,meta11819__$1){var self__ = this;
var _11820__$1 = this;return (new growingtree_app.components.history_player.t11818(self__.opts,self__.owner,self__.app,self__.player,meta11819__$1));
});
growingtree_app.components.history_player.__GT_t11818 = (function __GT_t11818(opts__$1,owner__$1,app__$1,player__$1,meta11819){return (new growingtree_app.components.history_player.t11818(opts__$1,owner__$1,app__$1,player__$1,meta11819));
});
}
return (new growingtree_app.components.history_player.t11818(opts,owner,app,player,null));
});

//# sourceMappingURL=history_player.js.map