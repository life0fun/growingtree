// Compiled by ClojureScript 0.0-2173
goog.provide('omchaya.components.history_player');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('omchaya.utils');
goog.require('sablono.core');
goog.require('cljs.core.async');
goog.require('goog.events');
goog.require('sablono.core');
goog.require('om.core');
goog.require('clojure.string');
goog.require('om.core');
goog.require('clojure.string');
goog.require('omchaya.utils');
goog.require('goog.events.EventType');
goog.require('cljs.core.async');
goog.require('goog.events');
omchaya.components.history_player.local_dragging_QMARK_ = cljs.core.atom.call(null,false);
omchaya.components.history_player.listen = (function listen(el,type){var out = cljs.core.async.chan.call(null);goog.events.listen(el,type,(function (p1__22231_SHARP_){if(cljs.core.truth_(cljs.core.deref.call(null,omchaya.components.history_player.local_dragging_QMARK_)))
{p1__22231_SHARP_.preventDefault();
} else
{}
return cljs.core.async.put_BANG_.call(null,out,p1__22231_SHARP_);
}));
return out;
});
omchaya.components.history_player.player_step = (function (){var method_table__4301__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__4302__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__4303__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__4304__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__4305__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("player-step",(function (format_version,active_step_number,step_number,step){return format_version;
}),new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__4305__auto__,method_table__4301__auto__,prefer_table__4302__auto__,method_cache__4303__auto__,cached_hierarchy__4304__auto__));
})();
cljs.core._add_method.call(null,omchaya.components.history_player.player_step,1,(function (format_version,active_step_number,comm,step_number,step){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.replay-step","div.replay-step",2291439239),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",1108647146),((cljs.core._EQ_.call(null,active_step_number,step_number))?"active":null),new cljs.core.Keyword(null,"on-click","on-click",1416542092),(function (){return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"step-selected","step-selected",3543353326),step_number], null));
}),new cljs.core.Keyword(null,"style","style",1123684643),{"cursor": "pointer"}], null),cljs.core.pr_str.call(null,step)], null);
}));
omchaya.components.history_player.playlist_entry = (function playlist_entry(comm,replay_number,replay){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.playlist-entry","div.playlist-entry",3364629286),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1416542092),(function (){return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"replay-selected","replay-selected",760550707),replay_number], null));
}),new cljs.core.Keyword(null,"style","style",1123684643),{"cursor": "pointer"}], null),(function (){var or__3443__auto__ = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(replay);if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{return "No name for recording";
}
})()], null);
});
omchaya.components.history_player.player = (function player(app,owner,opts){if(typeof omchaya.components.history_player.t22313 !== 'undefined')
{} else
{
/**
* @constructor
*/
omchaya.components.history_player.t22313 = (function (opts,owner,app,player,meta22314){
this.opts = opts;
this.owner = owner;
this.app = app;
this.player = player;
this.meta22314 = meta22314;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
omchaya.components.history_player.t22313.cljs$lang$type = true;
omchaya.components.history_player.t22313.cljs$lang$ctorStr = "omchaya.components.history-player/t22313";
omchaya.components.history_player.t22313.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"omchaya.components.history-player/t22313");
});
omchaya.components.history_player.t22313.prototype.om$core$IRender$ = true;
omchaya.components.history_player.t22313.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return sablono.interpreter.interpret.call(null,(function (){var comm = cljs.core.get_in.call(null,self__.app,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player-comms","player-comms",3952961645),new cljs.core.Keyword(null,"player-control","player-control",3655689699)], null));var drag_comm = cljs.core.get_in.call(null,self__.app,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player-comms","player-comms",3952961645),new cljs.core.Keyword(null,"player-drag","player-drag",1524386834)], null));var replays = cljs.core.get_in.call(null,self__.app,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"replays","replays",2108401886),new cljs.core.Keyword(null,"replay-list","replay-list",2022921782)], null));var queued_replay = cljs.core.get_in.call(null,self__.app,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"replays","replays",2108401886),new cljs.core.Keyword(null,"queued-replay","queued-replay",2482676979)], null));var map__22316 = queued_replay;var map__22316__$1 = ((cljs.core.seq_QMARK_.call(null,map__22316))?cljs.core.apply.call(null,cljs.core.hash_map,map__22316):map__22316);var active_step = cljs.core.get.call(null,map__22316__$1,new cljs.core.Keyword(null,"active-step","active-step",4211347621));var history = cljs.core.get.call(null,map__22316__$1,new cljs.core.Keyword(null,"history","history",1940838406));var format_version = cljs.core.get.call(null,map__22316__$1,new cljs.core.Keyword(null,"format_version","format_version",3631466498));return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.history-player","div.history-player",3648865449),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",1123684643),(function (){var temp__4092__auto__ = cljs.core.get_in.call(null,self__.app,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",4323118675),new cljs.core.Keyword(null,"position","position",1761709211)], null));if(cljs.core.truth_(temp__4092__auto__))
{var pos = temp__4092__auto__;return {"left": cljs.core.first.call(null,pos), "top": cljs.core.last.call(null,pos), "position": "fixed"};
} else
{return null;
}
})()], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row.modal-header","div.row.modal-header",3055554672),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-lg-12","div.col-lg-12",4751944571),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",1123684643),cljs.core.clj__GT_js.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"background-color","background-color",1619226998),(cljs.core.truth_(cljs.core.get_in.call(null,self__.app,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",4323118675),new cljs.core.Keyword(null,"dragging?","dragging?",709673026)], null)))?"#050":"#500"),new cljs.core.Keyword(null,"color","color",1108746965),"white",new cljs.core.Keyword(null,"text-align","text-align",1760136663),"center"], null))),new cljs.core.Keyword(null,"onMouseDown","onMouseDown",1569008442),(function (p1__22232_SHARP_){cljs.core.reset_BANG_.call(null,omchaya.components.history_player.local_dragging_QMARK_,true);
return cljs.core.async.put_BANG_.call(null,drag_comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"history-player-grabbed","history-player-grabbed",1379847572),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__22232_SHARP_.clientX,p1__22232_SHARP_.clientY], null)], null));
})], null)),"[History Player]"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",2686478959),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-lg-4","div.col-lg-4",1688675518),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",3931183780),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1416542092),((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"state","state",1123661827).cljs$core$IFn$_invoke$arity$1(self__.app),new cljs.core.Keyword(null,"playing","playing",520340384)))?(function (){return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player-stopped","player-stopped",819827283)], null));
}):(function (){return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player-started","player-started",806961415)], null));
}))], null),((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"state","state",1123661827).cljs$core$IFn$_invoke$arity$1(self__.app),new cljs.core.Keyword(null,"playing","playing",520340384)))?cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY," Pause"),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.fa.fa-pause","i.fa.fa-pause",3144543140)], null)):cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY," Play"),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.fa.fa-play","i.fa.fa-play",4546327786)], null)))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-lg-4","div.col-lg-4",1688675518),(cljs.core.truth_(queued_replay)?[cljs.core.str("Recording format v"),cljs.core.str(format_version),cljs.core.str(", recorded on "),cljs.core.str(new cljs.core.Keyword(null,"created_at","created_at",2383584348).cljs$core$IFn$_invoke$arity$1(queued_replay))].join(''):[cljs.core.str("No recording loaded")].join(''))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",2686478959),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-lg-4.col-md-4.col-sm-8.col-xs-8","div.col-lg-4.col-md-4.col-sm-8.col-xs-8",4362351264),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.playlist-entries","div.playlist-entries",907861700),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",1013907518),"Replays"], null),cljs.core.map.call(null,cljs.core.partial.call(null,omchaya.components.history_player.playlist_entry,comm),cljs.core.range.call(null),replays)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-lg-8.col-md-8.col-sm-8.col-xs-8","div.col-lg-8.col-md-8.col-sm-8.col-xs-8",4260484896),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.playlist-steps","div.playlist-steps",3377722843),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",1013907518),"Steps"], null),cljs.core.map.call(null,cljs.core.partial.call(null,omchaya.components.history_player.player_step,format_version,active_step,comm),cljs.core.range.call(null),history)], null)], null)], null)], null);
})());
});
omchaya.components.history_player.t22313.prototype.om$core$IWillMount$ = true;
omchaya.components.history_player.t22313.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var mouse_move_chan = cljs.core.async.map.call(null,(function (e){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e.clientX,e.clientY], null);
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [omchaya.components.history_player.listen.call(null,window,"mousemove")], null));var mouse_up_chan = cljs.core.async.map.call(null,((function (mouse_move_chan){
return (function (e){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e.clientX,e.clientY], null);
});})(mouse_move_chan))
,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [omchaya.components.history_player.listen.call(null,window,"mouseup")], null));var comm = cljs.core.get_in.call(null,self__.app,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player-comms","player-comms",3952961645),new cljs.core.Keyword(null,"player-drag","player-drag",1524386834)], null));var c__6068__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6069__auto__ = (function (){var switch__5998__auto__ = (function (state_22363){var state_val_22364 = (state_22363[1]);if((state_val_22364 === 1))
{var state_22363__$1 = state_22363;var statearr_22365_22393 = state_22363__$1;(statearr_22365_22393[2] = null);
(statearr_22365_22393[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22364 === 2))
{var state_22363__$1 = state_22363;if(true)
{var statearr_22366_22394 = state_22363__$1;(statearr_22366_22394[1] = 4);
} else
{var statearr_22367_22395 = state_22363__$1;(statearr_22367_22395[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22364 === 3))
{var inst_22361 = (state_22363[2]);var state_22363__$1 = state_22363;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22363__$1,inst_22361);
} else
{if((state_val_22364 === 4))
{var inst_22324 = [mouse_move_chan,mouse_up_chan];var inst_22325 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_22324,null));var state_22363__$1 = state_22363;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_22363__$1,7,inst_22325);
} else
{if((state_val_22364 === 5))
{var state_22363__$1 = state_22363;var statearr_22368_22396 = state_22363__$1;(statearr_22368_22396[2] = null);
(statearr_22368_22396[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22364 === 6))
{var inst_22359 = (state_22363[2]);var state_22363__$1 = state_22363;var statearr_22369_22397 = state_22363__$1;(statearr_22369_22397[2] = inst_22359);
(statearr_22369_22397[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22364 === 7))
{var inst_22329 = (state_22363[7]);var inst_22327 = (state_22363[8]);var inst_22327__$1 = (state_22363[2]);var inst_22328 = cljs.core.nth.call(null,inst_22327__$1,0,null);var inst_22329__$1 = cljs.core.nth.call(null,inst_22327__$1,1,null);var inst_22330 = cljs.core._EQ_.call(null,inst_22329__$1,mouse_move_chan);var state_22363__$1 = (function (){var statearr_22370 = state_22363;(statearr_22370[7] = inst_22329__$1);
(statearr_22370[9] = inst_22328);
(statearr_22370[8] = inst_22327__$1);
return statearr_22370;
})();if(inst_22330)
{var statearr_22371_22398 = state_22363__$1;(statearr_22371_22398[1] = 8);
} else
{var statearr_22372_22399 = state_22363__$1;(statearr_22372_22399[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22364 === 8))
{var inst_22327 = (state_22363[8]);var inst_22333 = cljs.core.nth.call(null,inst_22327,0,null);var inst_22334 = [new cljs.core.Keyword(null,"mouse-moved","mouse-moved",753447677),inst_22333];var inst_22335 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_22334,null));var inst_22336 = cljs.core.async.put_BANG_.call(null,comm,inst_22335);var state_22363__$1 = state_22363;var statearr_22373_22400 = state_22363__$1;(statearr_22373_22400[2] = inst_22336);
(statearr_22373_22400[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22364 === 9))
{var inst_22329 = (state_22363[7]);var inst_22338 = cljs.core._EQ_.call(null,inst_22329,mouse_up_chan);var state_22363__$1 = state_22363;if(inst_22338)
{var statearr_22374_22401 = state_22363__$1;(statearr_22374_22401[1] = 11);
} else
{var statearr_22375_22402 = state_22363__$1;(statearr_22375_22402[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22364 === 10))
{var inst_22355 = (state_22363[2]);var state_22363__$1 = (function (){var statearr_22376 = state_22363;(statearr_22376[10] = inst_22355);
return statearr_22376;
})();var statearr_22377_22403 = state_22363__$1;(statearr_22377_22403[2] = null);
(statearr_22377_22403[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22364 === 11))
{var inst_22327 = (state_22363[8]);var inst_22341 = cljs.core.nth.call(null,inst_22327,0,null);var inst_22342 = [new cljs.core.Keyword(null,"history-player-released","history-player-released",3129319138),inst_22341];var inst_22343 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_22342,null));var inst_22344 = cljs.core.async.put_BANG_.call(null,comm,inst_22343);var inst_22345 = cljs.core.reset_BANG_.call(null,omchaya.components.history_player.local_dragging_QMARK_,false);var state_22363__$1 = (function (){var statearr_22378 = state_22363;(statearr_22378[11] = inst_22344);
return statearr_22378;
})();var statearr_22379_22404 = state_22363__$1;(statearr_22379_22404[2] = inst_22345);
(statearr_22379_22404[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22364 === 12))
{var inst_22329 = (state_22363[7]);var inst_22347 = cljs.core._EQ_.call(null,inst_22329,new cljs.core.Keyword(null,"default","default",2558708147));var state_22363__$1 = state_22363;if(inst_22347)
{var statearr_22380_22405 = state_22363__$1;(statearr_22380_22405[1] = 14);
} else
{var statearr_22381_22406 = state_22363__$1;(statearr_22381_22406[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22364 === 13))
{var inst_22353 = (state_22363[2]);var state_22363__$1 = state_22363;var statearr_22382_22407 = state_22363__$1;(statearr_22382_22407[2] = inst_22353);
(statearr_22382_22407[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22364 === 14))
{var inst_22328 = (state_22363[9]);var state_22363__$1 = state_22363;var statearr_22383_22408 = state_22363__$1;(statearr_22383_22408[2] = inst_22328);
(statearr_22383_22408[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22364 === 15))
{var state_22363__$1 = state_22363;var statearr_22384_22409 = state_22363__$1;(statearr_22384_22409[2] = null);
(statearr_22384_22409[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22364 === 16))
{var inst_22351 = (state_22363[2]);var state_22363__$1 = state_22363;var statearr_22385_22410 = state_22363__$1;(statearr_22385_22410[2] = inst_22351);
(statearr_22385_22410[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
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
});return ((function (switch__5998__auto__){
return (function() {
var state_machine__5999__auto__ = null;
var state_machine__5999__auto____0 = (function (){var statearr_22389 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_22389[0] = state_machine__5999__auto__);
(statearr_22389[1] = 1);
return statearr_22389;
});
var state_machine__5999__auto____1 = (function (state_22363){while(true){
var ret_value__6000__auto__ = (function (){try{while(true){
var result__6001__auto__ = switch__5998__auto__.call(null,state_22363);if(cljs.core.keyword_identical_QMARK_.call(null,result__6001__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6001__auto__;
}
break;
}
}catch (e22390){if((e22390 instanceof Object))
{var ex__6002__auto__ = e22390;var statearr_22391_22411 = state_22363;(statearr_22391_22411[5] = ex__6002__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22363);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e22390;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6000__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__22412 = state_22363;
state_22363 = G__22412;
continue;
}
} else
{return ret_value__6000__auto__;
}
break;
}
});
state_machine__5999__auto__ = function(state_22363){
switch(arguments.length){
case 0:
return state_machine__5999__auto____0.call(this);
case 1:
return state_machine__5999__auto____1.call(this,state_22363);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5999__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5999__auto____0;
state_machine__5999__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5999__auto____1;
return state_machine__5999__auto__;
})()
;})(switch__5998__auto__))
})();var state__6070__auto__ = (function (){var statearr_22392 = f__6069__auto__.call(null);(statearr_22392[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6068__auto__);
return statearr_22392;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6070__auto__);
}));
return c__6068__auto__;
});
omchaya.components.history_player.t22313.prototype.om$core$IDisplayName$ = true;
omchaya.components.history_player.t22313.prototype.om$core$IDisplayName$display_name$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var or__3443__auto__ = new cljs.core.Keyword(null,"react-name","react-name",4800236939).cljs$core$IFn$_invoke$arity$1(self__.opts);if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{return "HistoryPlayer";
}
});
omchaya.components.history_player.t22313.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22315){var self__ = this;
var _22315__$1 = this;return self__.meta22314;
});
omchaya.components.history_player.t22313.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22315,meta22314__$1){var self__ = this;
var _22315__$1 = this;return (new omchaya.components.history_player.t22313(self__.opts,self__.owner,self__.app,self__.player,meta22314__$1));
});
omchaya.components.history_player.__GT_t22313 = (function __GT_t22313(opts__$1,owner__$1,app__$1,player__$1,meta22314){return (new omchaya.components.history_player.t22313(opts__$1,owner__$1,app__$1,player__$1,meta22314));
});
}
return (new omchaya.components.history_player.t22313(opts,owner,app,player,null));
});
