// Compiled by ClojureScript 0.0-2173
goog.provide('growingtree_app.components.history_player');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('sablono.core');
goog.require('cljs.core.async');
goog.require('goog.events');
goog.require('sablono.core');
goog.require('om.core');
goog.require('clojure.string');
goog.require('om.core');
goog.require('clojure.string');
goog.require('growingtree_app.utils');
goog.require('growingtree_app.utils');
goog.require('goog.events.EventType');
goog.require('cljs.core.async');
goog.require('goog.events');
growingtree_app.components.history_player.local_dragging_QMARK_ = cljs.core.atom.call(null,false);
growingtree_app.components.history_player.listen = (function listen(el,type){var out = cljs.core.async.chan.call(null);goog.events.listen(el,type,(function (p1__11184_SHARP_){if(cljs.core.truth_(cljs.core.deref.call(null,growingtree_app.components.history_player.local_dragging_QMARK_)))
{p1__11184_SHARP_.preventDefault();
} else
{}
return cljs.core.async.put_BANG_.call(null,out,p1__11184_SHARP_);
}));
return out;
});
growingtree_app.components.history_player.player_step = (function (){var method_table__4301__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__4302__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__4303__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__4304__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__4305__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("player-step",(function (format_version,active_step_number,step_number,step){return format_version;
}),new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__4305__auto__,method_table__4301__auto__,prefer_table__4302__auto__,method_cache__4303__auto__,cached_hierarchy__4304__auto__));
})();
cljs.core._add_method.call(null,growingtree_app.components.history_player.player_step,1,(function (format_version,active_step_number,comm,step_number,step){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.replay-step","div.replay-step",2291439239),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",1108647146),((cljs.core._EQ_.call(null,active_step_number,step_number))?"active":null),new cljs.core.Keyword(null,"on-click","on-click",1416542092),(function (){return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"step-selected","step-selected",3543353326),step_number], null));
}),new cljs.core.Keyword(null,"style","style",1123684643),{"cursor": "pointer"}], null),cljs.core.pr_str.call(null,step)], null);
}));
growingtree_app.components.history_player.playlist_entry = (function playlist_entry(comm,replay_number,replay){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.playlist-entry","div.playlist-entry",3364629286),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1416542092),(function (){return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"replay-selected","replay-selected",760550707),replay_number], null));
}),new cljs.core.Keyword(null,"style","style",1123684643),{"cursor": "pointer"}], null),(function (){var or__3443__auto__ = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(replay);if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{return "No name for recording";
}
})()], null);
});
growingtree_app.components.history_player.player = (function player(app,owner,opts){if(typeof growingtree_app.components.history_player.t11266 !== 'undefined')
{} else
{
/**
* @constructor
*/
growingtree_app.components.history_player.t11266 = (function (opts,owner,app,player,meta11267){
this.opts = opts;
this.owner = owner;
this.app = app;
this.player = player;
this.meta11267 = meta11267;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
growingtree_app.components.history_player.t11266.cljs$lang$type = true;
growingtree_app.components.history_player.t11266.cljs$lang$ctorStr = "growingtree-app.components.history-player/t11266";
growingtree_app.components.history_player.t11266.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"growingtree-app.components.history-player/t11266");
});
growingtree_app.components.history_player.t11266.prototype.om$core$IRender$ = true;
growingtree_app.components.history_player.t11266.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return sablono.interpreter.interpret.call(null,(function (){var comm = cljs.core.get_in.call(null,self__.app,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player-comms","player-comms",3952961645),new cljs.core.Keyword(null,"player-control","player-control",3655689699)], null));var drag_comm = cljs.core.get_in.call(null,self__.app,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player-comms","player-comms",3952961645),new cljs.core.Keyword(null,"player-drag","player-drag",1524386834)], null));var replays = cljs.core.get_in.call(null,self__.app,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"replays","replays",2108401886),new cljs.core.Keyword(null,"replay-list","replay-list",2022921782)], null));var queued_replay = cljs.core.get_in.call(null,self__.app,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"replays","replays",2108401886),new cljs.core.Keyword(null,"queued-replay","queued-replay",2482676979)], null));var map__11269 = queued_replay;var map__11269__$1 = ((cljs.core.seq_QMARK_.call(null,map__11269))?cljs.core.apply.call(null,cljs.core.hash_map,map__11269):map__11269);var active_step = cljs.core.get.call(null,map__11269__$1,new cljs.core.Keyword(null,"active-step","active-step",4211347621));var history = cljs.core.get.call(null,map__11269__$1,new cljs.core.Keyword(null,"history","history",1940838406));var format_version = cljs.core.get.call(null,map__11269__$1,new cljs.core.Keyword(null,"format_version","format_version",3631466498));return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.history-player","div.history-player",3648865449),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",1123684643),(function (){var temp__4092__auto__ = cljs.core.get_in.call(null,self__.app,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",4323118675),new cljs.core.Keyword(null,"position","position",1761709211)], null));if(cljs.core.truth_(temp__4092__auto__))
{var pos = temp__4092__auto__;return {"left": cljs.core.first.call(null,pos), "top": cljs.core.last.call(null,pos), "position": "fixed"};
} else
{return null;
}
})()], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row.modal-header","div.row.modal-header",3055554672),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-lg-12","div.col-lg-12",4751944571),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",1123684643),cljs.core.clj__GT_js.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"background-color","background-color",1619226998),(cljs.core.truth_(cljs.core.get_in.call(null,self__.app,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",4323118675),new cljs.core.Keyword(null,"dragging?","dragging?",709673026)], null)))?"#050":"#500"),new cljs.core.Keyword(null,"color","color",1108746965),"white",new cljs.core.Keyword(null,"text-align","text-align",1760136663),"center"], null))),new cljs.core.Keyword(null,"onMouseDown","onMouseDown",1569008442),(function (p1__11185_SHARP_){cljs.core.reset_BANG_.call(null,growingtree_app.components.history_player.local_dragging_QMARK_,true);
return cljs.core.async.put_BANG_.call(null,drag_comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"history-player-grabbed","history-player-grabbed",1379847572),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__11185_SHARP_.clientX,p1__11185_SHARP_.clientY], null)], null));
})], null)),"[History Player]"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",2686478959),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-lg-4","div.col-lg-4",1688675518),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",3931183780),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1416542092),((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"state","state",1123661827).cljs$core$IFn$_invoke$arity$1(self__.app),new cljs.core.Keyword(null,"playing","playing",520340384)))?(function (){return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player-stopped","player-stopped",819827283)], null));
}):(function (){return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player-started","player-started",806961415)], null));
}))], null),((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"state","state",1123661827).cljs$core$IFn$_invoke$arity$1(self__.app),new cljs.core.Keyword(null,"playing","playing",520340384)))?cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY," Pause"),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.fa.fa-pause","i.fa.fa-pause",3144543140)], null)):cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY," Play"),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.fa.fa-play","i.fa.fa-play",4546327786)], null)))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-lg-4","div.col-lg-4",1688675518),(cljs.core.truth_(queued_replay)?[cljs.core.str("Recording format v"),cljs.core.str(format_version),cljs.core.str(", recorded on "),cljs.core.str(new cljs.core.Keyword(null,"created_at","created_at",2383584348).cljs$core$IFn$_invoke$arity$1(queued_replay))].join(''):[cljs.core.str("No recording loaded")].join(''))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",2686478959),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-lg-4.col-md-4.col-sm-8.col-xs-8","div.col-lg-4.col-md-4.col-sm-8.col-xs-8",4362351264),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.playlist-entries","div.playlist-entries",907861700),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",1013907518),"Replays"], null),cljs.core.map.call(null,cljs.core.partial.call(null,growingtree_app.components.history_player.playlist_entry,comm),cljs.core.range.call(null),replays)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-lg-8.col-md-8.col-sm-8.col-xs-8","div.col-lg-8.col-md-8.col-sm-8.col-xs-8",4260484896),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.playlist-steps","div.playlist-steps",3377722843),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",1013907518),"Steps"], null),cljs.core.map.call(null,cljs.core.partial.call(null,growingtree_app.components.history_player.player_step,format_version,active_step,comm),cljs.core.range.call(null),history)], null)], null)], null)], null);
})());
});
growingtree_app.components.history_player.t11266.prototype.om$core$IWillMount$ = true;
growingtree_app.components.history_player.t11266.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var mouse_move_chan = cljs.core.async.map.call(null,(function (e){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e.clientX,e.clientY], null);
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [growingtree_app.components.history_player.listen.call(null,window,"mousemove")], null));var mouse_up_chan = cljs.core.async.map.call(null,((function (mouse_move_chan){
return (function (e){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e.clientX,e.clientY], null);
});})(mouse_move_chan))
,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [growingtree_app.components.history_player.listen.call(null,window,"mouseup")], null));var comm = cljs.core.get_in.call(null,self__.app,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player-comms","player-comms",3952961645),new cljs.core.Keyword(null,"player-drag","player-drag",1524386834)], null));var c__6068__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6069__auto__ = (function (){var switch__5998__auto__ = (function (state_11316){var state_val_11317 = (state_11316[1]);if((state_val_11317 === 1))
{var state_11316__$1 = state_11316;var statearr_11318_11346 = state_11316__$1;(statearr_11318_11346[2] = null);
(statearr_11318_11346[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11317 === 2))
{var state_11316__$1 = state_11316;if(true)
{var statearr_11319_11347 = state_11316__$1;(statearr_11319_11347[1] = 4);
} else
{var statearr_11320_11348 = state_11316__$1;(statearr_11320_11348[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11317 === 3))
{var inst_11314 = (state_11316[2]);var state_11316__$1 = state_11316;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11316__$1,inst_11314);
} else
{if((state_val_11317 === 4))
{var inst_11277 = [mouse_move_chan,mouse_up_chan];var inst_11278 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_11277,null));var state_11316__$1 = state_11316;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_11316__$1,7,inst_11278);
} else
{if((state_val_11317 === 5))
{var state_11316__$1 = state_11316;var statearr_11321_11349 = state_11316__$1;(statearr_11321_11349[2] = null);
(statearr_11321_11349[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11317 === 6))
{var inst_11312 = (state_11316[2]);var state_11316__$1 = state_11316;var statearr_11322_11350 = state_11316__$1;(statearr_11322_11350[2] = inst_11312);
(statearr_11322_11350[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11317 === 7))
{var inst_11280 = (state_11316[7]);var inst_11282 = (state_11316[8]);var inst_11280__$1 = (state_11316[2]);var inst_11281 = cljs.core.nth.call(null,inst_11280__$1,0,null);var inst_11282__$1 = cljs.core.nth.call(null,inst_11280__$1,1,null);var inst_11283 = cljs.core._EQ_.call(null,inst_11282__$1,mouse_move_chan);var state_11316__$1 = (function (){var statearr_11323 = state_11316;(statearr_11323[7] = inst_11280__$1);
(statearr_11323[8] = inst_11282__$1);
(statearr_11323[9] = inst_11281);
return statearr_11323;
})();if(inst_11283)
{var statearr_11324_11351 = state_11316__$1;(statearr_11324_11351[1] = 8);
} else
{var statearr_11325_11352 = state_11316__$1;(statearr_11325_11352[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11317 === 8))
{var inst_11280 = (state_11316[7]);var inst_11286 = cljs.core.nth.call(null,inst_11280,0,null);var inst_11287 = [new cljs.core.Keyword(null,"mouse-moved","mouse-moved",753447677),inst_11286];var inst_11288 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_11287,null));var inst_11289 = cljs.core.async.put_BANG_.call(null,comm,inst_11288);var state_11316__$1 = state_11316;var statearr_11326_11353 = state_11316__$1;(statearr_11326_11353[2] = inst_11289);
(statearr_11326_11353[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11317 === 9))
{var inst_11282 = (state_11316[8]);var inst_11291 = cljs.core._EQ_.call(null,inst_11282,mouse_up_chan);var state_11316__$1 = state_11316;if(inst_11291)
{var statearr_11327_11354 = state_11316__$1;(statearr_11327_11354[1] = 11);
} else
{var statearr_11328_11355 = state_11316__$1;(statearr_11328_11355[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11317 === 10))
{var inst_11308 = (state_11316[2]);var state_11316__$1 = (function (){var statearr_11329 = state_11316;(statearr_11329[10] = inst_11308);
return statearr_11329;
})();var statearr_11330_11356 = state_11316__$1;(statearr_11330_11356[2] = null);
(statearr_11330_11356[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11317 === 11))
{var inst_11280 = (state_11316[7]);var inst_11294 = cljs.core.nth.call(null,inst_11280,0,null);var inst_11295 = [new cljs.core.Keyword(null,"history-player-released","history-player-released",3129319138),inst_11294];var inst_11296 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_11295,null));var inst_11297 = cljs.core.async.put_BANG_.call(null,comm,inst_11296);var inst_11298 = cljs.core.reset_BANG_.call(null,growingtree_app.components.history_player.local_dragging_QMARK_,false);var state_11316__$1 = (function (){var statearr_11331 = state_11316;(statearr_11331[11] = inst_11297);
return statearr_11331;
})();var statearr_11332_11357 = state_11316__$1;(statearr_11332_11357[2] = inst_11298);
(statearr_11332_11357[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11317 === 12))
{var inst_11282 = (state_11316[8]);var inst_11300 = cljs.core._EQ_.call(null,inst_11282,new cljs.core.Keyword(null,"default","default",2558708147));var state_11316__$1 = state_11316;if(inst_11300)
{var statearr_11333_11358 = state_11316__$1;(statearr_11333_11358[1] = 14);
} else
{var statearr_11334_11359 = state_11316__$1;(statearr_11334_11359[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11317 === 13))
{var inst_11306 = (state_11316[2]);var state_11316__$1 = state_11316;var statearr_11335_11360 = state_11316__$1;(statearr_11335_11360[2] = inst_11306);
(statearr_11335_11360[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11317 === 14))
{var inst_11281 = (state_11316[9]);var state_11316__$1 = state_11316;var statearr_11336_11361 = state_11316__$1;(statearr_11336_11361[2] = inst_11281);
(statearr_11336_11361[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11317 === 15))
{var state_11316__$1 = state_11316;var statearr_11337_11362 = state_11316__$1;(statearr_11337_11362[2] = null);
(statearr_11337_11362[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11317 === 16))
{var inst_11304 = (state_11316[2]);var state_11316__$1 = state_11316;var statearr_11338_11363 = state_11316__$1;(statearr_11338_11363[2] = inst_11304);
(statearr_11338_11363[1] = 13);
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
var state_machine__5999__auto____0 = (function (){var statearr_11342 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11342[0] = state_machine__5999__auto__);
(statearr_11342[1] = 1);
return statearr_11342;
});
var state_machine__5999__auto____1 = (function (state_11316){while(true){
var ret_value__6000__auto__ = (function (){try{while(true){
var result__6001__auto__ = switch__5998__auto__.call(null,state_11316);if(cljs.core.keyword_identical_QMARK_.call(null,result__6001__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6001__auto__;
}
break;
}
}catch (e11343){if((e11343 instanceof Object))
{var ex__6002__auto__ = e11343;var statearr_11344_11364 = state_11316;(statearr_11344_11364[5] = ex__6002__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11316);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11343;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6000__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11365 = state_11316;
state_11316 = G__11365;
continue;
}
} else
{return ret_value__6000__auto__;
}
break;
}
});
state_machine__5999__auto__ = function(state_11316){
switch(arguments.length){
case 0:
return state_machine__5999__auto____0.call(this);
case 1:
return state_machine__5999__auto____1.call(this,state_11316);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5999__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5999__auto____0;
state_machine__5999__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5999__auto____1;
return state_machine__5999__auto__;
})()
;})(switch__5998__auto__))
})();var state__6070__auto__ = (function (){var statearr_11345 = f__6069__auto__.call(null);(statearr_11345[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6068__auto__);
return statearr_11345;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6070__auto__);
}));
return c__6068__auto__;
});
growingtree_app.components.history_player.t11266.prototype.om$core$IDisplayName$ = true;
growingtree_app.components.history_player.t11266.prototype.om$core$IDisplayName$display_name$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var or__3443__auto__ = new cljs.core.Keyword(null,"react-name","react-name",4800236939).cljs$core$IFn$_invoke$arity$1(self__.opts);if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{return "HistoryPlayer";
}
});
growingtree_app.components.history_player.t11266.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11268){var self__ = this;
var _11268__$1 = this;return self__.meta11267;
});
growingtree_app.components.history_player.t11266.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11268,meta11267__$1){var self__ = this;
var _11268__$1 = this;return (new growingtree_app.components.history_player.t11266(self__.opts,self__.owner,self__.app,self__.player,meta11267__$1));
});
growingtree_app.components.history_player.__GT_t11266 = (function __GT_t11266(opts__$1,owner__$1,app__$1,player__$1,meta11267){return (new growingtree_app.components.history_player.t11266(opts__$1,owner__$1,app__$1,player__$1,meta11267));
});
}
return (new growingtree_app.components.history_player.t11266(opts,owner,app,player,null));
});

//# sourceMappingURL=history_player.js.map