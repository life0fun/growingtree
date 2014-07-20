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
growingtree_app.components.history_player.listen = (function listen(el,type){var out = cljs.core.async.chan.call(null);goog.events.listen(el,type,(function (p1__11492_SHARP_){if(cljs.core.truth_(cljs.core.deref.call(null,growingtree_app.components.history_player.local_dragging_QMARK_)))
{p1__11492_SHARP_.preventDefault();
} else
{}
return cljs.core.async.put_BANG_.call(null,out,p1__11492_SHARP_);
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
growingtree_app.components.history_player.player = (function player(app,owner,opts){if(typeof growingtree_app.components.history_player.t11574 !== 'undefined')
{} else
{
/**
* @constructor
*/
growingtree_app.components.history_player.t11574 = (function (opts,owner,app,player,meta11575){
this.opts = opts;
this.owner = owner;
this.app = app;
this.player = player;
this.meta11575 = meta11575;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
growingtree_app.components.history_player.t11574.cljs$lang$type = true;
growingtree_app.components.history_player.t11574.cljs$lang$ctorStr = "growingtree-app.components.history-player/t11574";
growingtree_app.components.history_player.t11574.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"growingtree-app.components.history-player/t11574");
});
growingtree_app.components.history_player.t11574.prototype.om$core$IRender$ = true;
growingtree_app.components.history_player.t11574.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return sablono.interpreter.interpret.call(null,(function (){var comm = cljs.core.get_in.call(null,self__.app,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player-comms","player-comms",3952961645),new cljs.core.Keyword(null,"player-control","player-control",3655689699)], null));var drag_comm = cljs.core.get_in.call(null,self__.app,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player-comms","player-comms",3952961645),new cljs.core.Keyword(null,"player-drag","player-drag",1524386834)], null));var replays = cljs.core.get_in.call(null,self__.app,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"replays","replays",2108401886),new cljs.core.Keyword(null,"replay-list","replay-list",2022921782)], null));var queued_replay = cljs.core.get_in.call(null,self__.app,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"replays","replays",2108401886),new cljs.core.Keyword(null,"queued-replay","queued-replay",2482676979)], null));var map__11577 = queued_replay;var map__11577__$1 = ((cljs.core.seq_QMARK_.call(null,map__11577))?cljs.core.apply.call(null,cljs.core.hash_map,map__11577):map__11577);var active_step = cljs.core.get.call(null,map__11577__$1,new cljs.core.Keyword(null,"active-step","active-step",4211347621));var history = cljs.core.get.call(null,map__11577__$1,new cljs.core.Keyword(null,"history","history",1940838406));var format_version = cljs.core.get.call(null,map__11577__$1,new cljs.core.Keyword(null,"format_version","format_version",3631466498));return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.history-player","div.history-player",3648865449),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",1123684643),(function (){var temp__4092__auto__ = cljs.core.get_in.call(null,self__.app,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",4323118675),new cljs.core.Keyword(null,"position","position",1761709211)], null));if(cljs.core.truth_(temp__4092__auto__))
{var pos = temp__4092__auto__;return {"left": cljs.core.first.call(null,pos), "top": cljs.core.last.call(null,pos), "position": "fixed"};
} else
{return null;
}
})()], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row.modal-header","div.row.modal-header",3055554672),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-lg-12","div.col-lg-12",4751944571),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",1123684643),cljs.core.clj__GT_js.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"background-color","background-color",1619226998),(cljs.core.truth_(cljs.core.get_in.call(null,self__.app,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",4323118675),new cljs.core.Keyword(null,"dragging?","dragging?",709673026)], null)))?"#050":"#500"),new cljs.core.Keyword(null,"color","color",1108746965),"white",new cljs.core.Keyword(null,"text-align","text-align",1760136663),"center"], null))),new cljs.core.Keyword(null,"onMouseDown","onMouseDown",1569008442),(function (p1__11493_SHARP_){cljs.core.reset_BANG_.call(null,growingtree_app.components.history_player.local_dragging_QMARK_,true);
return cljs.core.async.put_BANG_.call(null,drag_comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"history-player-grabbed","history-player-grabbed",1379847572),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__11493_SHARP_.clientX,p1__11493_SHARP_.clientY], null)], null));
})], null)),"[History Player]"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",2686478959),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-lg-4","div.col-lg-4",1688675518),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",3931183780),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1416542092),((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"state","state",1123661827).cljs$core$IFn$_invoke$arity$1(self__.app),new cljs.core.Keyword(null,"playing","playing",520340384)))?(function (){return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player-stopped","player-stopped",819827283)], null));
}):(function (){return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player-started","player-started",806961415)], null));
}))], null),((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"state","state",1123661827).cljs$core$IFn$_invoke$arity$1(self__.app),new cljs.core.Keyword(null,"playing","playing",520340384)))?cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY," Pause"),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.fa.fa-pause","i.fa.fa-pause",3144543140)], null)):cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY," Play"),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.fa.fa-play","i.fa.fa-play",4546327786)], null)))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-lg-4","div.col-lg-4",1688675518),(cljs.core.truth_(queued_replay)?[cljs.core.str("Recording format v"),cljs.core.str(format_version),cljs.core.str(", recorded on "),cljs.core.str(new cljs.core.Keyword(null,"created_at","created_at",2383584348).cljs$core$IFn$_invoke$arity$1(queued_replay))].join(''):[cljs.core.str("No recording loaded")].join(''))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",2686478959),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-lg-4.col-md-4.col-sm-8.col-xs-8","div.col-lg-4.col-md-4.col-sm-8.col-xs-8",4362351264),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.playlist-entries","div.playlist-entries",907861700),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",1013907518),"Replays"], null),cljs.core.map.call(null,cljs.core.partial.call(null,growingtree_app.components.history_player.playlist_entry,comm),cljs.core.range.call(null),replays)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-lg-8.col-md-8.col-sm-8.col-xs-8","div.col-lg-8.col-md-8.col-sm-8.col-xs-8",4260484896),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.playlist-steps","div.playlist-steps",3377722843),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",1013907518),"Steps"], null),cljs.core.map.call(null,cljs.core.partial.call(null,growingtree_app.components.history_player.player_step,format_version,active_step,comm),cljs.core.range.call(null),history)], null)], null)], null)], null);
})());
});
growingtree_app.components.history_player.t11574.prototype.om$core$IWillMount$ = true;
growingtree_app.components.history_player.t11574.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var mouse_move_chan = cljs.core.async.map.call(null,(function (e){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e.clientX,e.clientY], null);
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [growingtree_app.components.history_player.listen.call(null,window,"mousemove")], null));var mouse_up_chan = cljs.core.async.map.call(null,((function (mouse_move_chan){
return (function (e){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e.clientX,e.clientY], null);
});})(mouse_move_chan))
,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [growingtree_app.components.history_player.listen.call(null,window,"mouseup")], null));var comm = cljs.core.get_in.call(null,self__.app,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player-comms","player-comms",3952961645),new cljs.core.Keyword(null,"player-drag","player-drag",1524386834)], null));var c__6188__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6189__auto__ = (function (){var switch__6118__auto__ = (function (state_11624){var state_val_11625 = (state_11624[1]);if((state_val_11625 === 1))
{var state_11624__$1 = state_11624;var statearr_11626_11654 = state_11624__$1;(statearr_11626_11654[2] = null);
(statearr_11626_11654[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11625 === 2))
{var state_11624__$1 = state_11624;if(true)
{var statearr_11627_11655 = state_11624__$1;(statearr_11627_11655[1] = 4);
} else
{var statearr_11628_11656 = state_11624__$1;(statearr_11628_11656[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11625 === 3))
{var inst_11622 = (state_11624[2]);var state_11624__$1 = state_11624;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11624__$1,inst_11622);
} else
{if((state_val_11625 === 4))
{var inst_11585 = [mouse_move_chan,mouse_up_chan];var inst_11586 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_11585,null));var state_11624__$1 = state_11624;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_11624__$1,7,inst_11586);
} else
{if((state_val_11625 === 5))
{var state_11624__$1 = state_11624;var statearr_11629_11657 = state_11624__$1;(statearr_11629_11657[2] = null);
(statearr_11629_11657[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11625 === 6))
{var inst_11620 = (state_11624[2]);var state_11624__$1 = state_11624;var statearr_11630_11658 = state_11624__$1;(statearr_11630_11658[2] = inst_11620);
(statearr_11630_11658[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11625 === 7))
{var inst_11590 = (state_11624[7]);var inst_11588 = (state_11624[8]);var inst_11588__$1 = (state_11624[2]);var inst_11589 = cljs.core.nth.call(null,inst_11588__$1,0,null);var inst_11590__$1 = cljs.core.nth.call(null,inst_11588__$1,1,null);var inst_11591 = cljs.core._EQ_.call(null,inst_11590__$1,mouse_move_chan);var state_11624__$1 = (function (){var statearr_11631 = state_11624;(statearr_11631[7] = inst_11590__$1);
(statearr_11631[8] = inst_11588__$1);
(statearr_11631[9] = inst_11589);
return statearr_11631;
})();if(inst_11591)
{var statearr_11632_11659 = state_11624__$1;(statearr_11632_11659[1] = 8);
} else
{var statearr_11633_11660 = state_11624__$1;(statearr_11633_11660[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11625 === 8))
{var inst_11588 = (state_11624[8]);var inst_11594 = cljs.core.nth.call(null,inst_11588,0,null);var inst_11595 = [new cljs.core.Keyword(null,"mouse-moved","mouse-moved",753447677),inst_11594];var inst_11596 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_11595,null));var inst_11597 = cljs.core.async.put_BANG_.call(null,comm,inst_11596);var state_11624__$1 = state_11624;var statearr_11634_11661 = state_11624__$1;(statearr_11634_11661[2] = inst_11597);
(statearr_11634_11661[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11625 === 9))
{var inst_11590 = (state_11624[7]);var inst_11599 = cljs.core._EQ_.call(null,inst_11590,mouse_up_chan);var state_11624__$1 = state_11624;if(inst_11599)
{var statearr_11635_11662 = state_11624__$1;(statearr_11635_11662[1] = 11);
} else
{var statearr_11636_11663 = state_11624__$1;(statearr_11636_11663[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11625 === 10))
{var inst_11616 = (state_11624[2]);var state_11624__$1 = (function (){var statearr_11637 = state_11624;(statearr_11637[10] = inst_11616);
return statearr_11637;
})();var statearr_11638_11664 = state_11624__$1;(statearr_11638_11664[2] = null);
(statearr_11638_11664[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11625 === 11))
{var inst_11588 = (state_11624[8]);var inst_11602 = cljs.core.nth.call(null,inst_11588,0,null);var inst_11603 = [new cljs.core.Keyword(null,"history-player-released","history-player-released",3129319138),inst_11602];var inst_11604 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_11603,null));var inst_11605 = cljs.core.async.put_BANG_.call(null,comm,inst_11604);var inst_11606 = cljs.core.reset_BANG_.call(null,growingtree_app.components.history_player.local_dragging_QMARK_,false);var state_11624__$1 = (function (){var statearr_11639 = state_11624;(statearr_11639[11] = inst_11605);
return statearr_11639;
})();var statearr_11640_11665 = state_11624__$1;(statearr_11640_11665[2] = inst_11606);
(statearr_11640_11665[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11625 === 12))
{var inst_11590 = (state_11624[7]);var inst_11608 = cljs.core._EQ_.call(null,inst_11590,new cljs.core.Keyword(null,"default","default",2558708147));var state_11624__$1 = state_11624;if(inst_11608)
{var statearr_11641_11666 = state_11624__$1;(statearr_11641_11666[1] = 14);
} else
{var statearr_11642_11667 = state_11624__$1;(statearr_11642_11667[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11625 === 13))
{var inst_11614 = (state_11624[2]);var state_11624__$1 = state_11624;var statearr_11643_11668 = state_11624__$1;(statearr_11643_11668[2] = inst_11614);
(statearr_11643_11668[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11625 === 14))
{var inst_11589 = (state_11624[9]);var state_11624__$1 = state_11624;var statearr_11644_11669 = state_11624__$1;(statearr_11644_11669[2] = inst_11589);
(statearr_11644_11669[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11625 === 15))
{var state_11624__$1 = state_11624;var statearr_11645_11670 = state_11624__$1;(statearr_11645_11670[2] = null);
(statearr_11645_11670[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11625 === 16))
{var inst_11612 = (state_11624[2]);var state_11624__$1 = state_11624;var statearr_11646_11671 = state_11624__$1;(statearr_11646_11671[2] = inst_11612);
(statearr_11646_11671[1] = 13);
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
});return ((function (switch__6118__auto__){
return (function() {
var state_machine__6119__auto__ = null;
var state_machine__6119__auto____0 = (function (){var statearr_11650 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11650[0] = state_machine__6119__auto__);
(statearr_11650[1] = 1);
return statearr_11650;
});
var state_machine__6119__auto____1 = (function (state_11624){while(true){
var ret_value__6120__auto__ = (function (){try{while(true){
var result__6121__auto__ = switch__6118__auto__.call(null,state_11624);if(cljs.core.keyword_identical_QMARK_.call(null,result__6121__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6121__auto__;
}
break;
}
}catch (e11651){if((e11651 instanceof Object))
{var ex__6122__auto__ = e11651;var statearr_11652_11672 = state_11624;(statearr_11652_11672[5] = ex__6122__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11624);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11651;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6120__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11673 = state_11624;
state_11624 = G__11673;
continue;
}
} else
{return ret_value__6120__auto__;
}
break;
}
});
state_machine__6119__auto__ = function(state_11624){
switch(arguments.length){
case 0:
return state_machine__6119__auto____0.call(this);
case 1:
return state_machine__6119__auto____1.call(this,state_11624);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6119__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6119__auto____0;
state_machine__6119__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6119__auto____1;
return state_machine__6119__auto__;
})()
;})(switch__6118__auto__))
})();var state__6190__auto__ = (function (){var statearr_11653 = f__6189__auto__.call(null);(statearr_11653[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6188__auto__);
return statearr_11653;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6190__auto__);
}));
return c__6188__auto__;
});
growingtree_app.components.history_player.t11574.prototype.om$core$IDisplayName$ = true;
growingtree_app.components.history_player.t11574.prototype.om$core$IDisplayName$display_name$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var or__3443__auto__ = new cljs.core.Keyword(null,"react-name","react-name",4800236939).cljs$core$IFn$_invoke$arity$1(self__.opts);if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{return "HistoryPlayer";
}
});
growingtree_app.components.history_player.t11574.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11576){var self__ = this;
var _11576__$1 = this;return self__.meta11575;
});
growingtree_app.components.history_player.t11574.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11576,meta11575__$1){var self__ = this;
var _11576__$1 = this;return (new growingtree_app.components.history_player.t11574(self__.opts,self__.owner,self__.app,self__.player,meta11575__$1));
});
growingtree_app.components.history_player.__GT_t11574 = (function __GT_t11574(opts__$1,owner__$1,app__$1,player__$1,meta11575){return (new growingtree_app.components.history_player.t11574(opts__$1,owner__$1,app__$1,player__$1,meta11575));
});
}
return (new growingtree_app.components.history_player.t11574(opts,owner,app,player,null));
});

//# sourceMappingURL=history_player.js.map