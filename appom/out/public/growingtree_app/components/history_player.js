// Compiled by ClojureScript 0.0-2850 {}
goog.provide('growingtree_app.components.history_player');
goog.require('cljs.core');
goog.require('sablono.core');
goog.require('goog.events.EventType');
goog.require('cljs.core.async');
goog.require('goog.events');
goog.require('growingtree_app.utils');
goog.require('clojure.string');
goog.require('om.core');
growingtree_app.components.history_player.local_dragging_QMARK_ = cljs.core.atom.call(null,false);
growingtree_app.components.history_player.listen = (function listen(el,type){
var out = cljs.core.async.chan.call(null);
goog.events.listen(el,type,((function (out){
return (function (p1__22493_SHARP_){
if(cljs.core.truth_(cljs.core.deref.call(null,growingtree_app.components.history_player.local_dragging_QMARK_))){
p1__22493_SHARP_.preventDefault();
} else {
}

return cljs.core.async.put_BANG_.call(null,out,p1__22493_SHARP_);
});})(out))
);

return out;
});
growingtree_app.components.history_player.player_step = (function (){var method_table__4704__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4705__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4706__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4707__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4708__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"growingtree-app.components.history-player","player-step"),((function (method_table__4704__auto__,prefer_table__4705__auto__,method_cache__4706__auto__,cached_hierarchy__4707__auto__,hierarchy__4708__auto__){
return (function (format_version,active_step_number,step_number,step){
return format_version;
});})(method_table__4704__auto__,prefer_table__4705__auto__,method_cache__4706__auto__,cached_hierarchy__4707__auto__,hierarchy__4708__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4708__auto__,method_table__4704__auto__,prefer_table__4705__auto__,method_cache__4706__auto__,cached_hierarchy__4707__auto__));
})();
cljs.core._add_method.call(null,growingtree_app.components.history_player.player_step,(1),(function (format_version,active_step_number,comm,step_number,step){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.replay-step","div.replay-step",-11028116),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,active_step_number,step_number))?"active":null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"step-selected","step-selected",1680713876),step_number], null));
}),new cljs.core.Keyword(null,"style","style",-496642736),{"cursor": "pointer"}], null),cljs.core.pr_str.call(null,step)], null);
}));
growingtree_app.components.history_player.playlist_entry = (function playlist_entry(comm,replay_number,replay){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.playlist-entry","div.playlist-entry",-2115370722),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"replay-selected","replay-selected",-624639511),replay_number], null));
}),new cljs.core.Keyword(null,"style","style",-496642736),{"cursor": "pointer"}], null),(function (){var or__3807__auto__ = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(replay);
if(cljs.core.truth_(or__3807__auto__)){
return or__3807__auto__;
} else {
return "No name for recording";
}
})()], null);
});
growingtree_app.components.history_player.player = (function player(app,owner,opts){
if(typeof growingtree_app.components.history_player.t22578 !== 'undefined'){
} else {

/**
* @constructor
*/
growingtree_app.components.history_player.t22578 = (function (opts,owner,app,player,meta22579){
this.opts = opts;
this.owner = owner;
this.app = app;
this.player = player;
this.meta22579 = meta22579;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
growingtree_app.components.history_player.t22578.prototype.om$core$IRender$ = true;

growingtree_app.components.history_player.t22578.prototype.om$core$IRender$render$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return sablono.interpreter.interpret.call(null,(function (){var comm = cljs.core.get_in.call(null,self__.app,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player-comms","player-comms",1620357071),new cljs.core.Keyword(null,"player-control","player-control",-255472555)], null));
var drag_comm = cljs.core.get_in.call(null,self__.app,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player-comms","player-comms",1620357071),new cljs.core.Keyword(null,"player-drag","player-drag",-831984703)], null));
var replays = cljs.core.get_in.call(null,self__.app,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"replays","replays",1696271113),new cljs.core.Keyword(null,"replay-list","replay-list",1451976532)], null));
var queued_replay = cljs.core.get_in.call(null,self__.app,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"replays","replays",1696271113),new cljs.core.Keyword(null,"queued-replay","queued-replay",416789727)], null));
var map__22581 = queued_replay;
var map__22581__$1 = ((cljs.core.seq_QMARK_.call(null,map__22581))?cljs.core.apply.call(null,cljs.core.hash_map,map__22581):map__22581);
var active_step = cljs.core.get.call(null,map__22581__$1,new cljs.core.Keyword(null,"active-step","active-step",1698284288));
var history = cljs.core.get.call(null,map__22581__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var format_version = cljs.core.get.call(null,map__22581__$1,new cljs.core.Keyword(null,"format_version","format_version",1415666110));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.history-player","div.history-player",-957274163),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),(function (){var temp__4406__auto__ = cljs.core.get_in.call(null,self__.app,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"position","position",-2011731912)], null));
if(cljs.core.truth_(temp__4406__auto__)){
var pos = temp__4406__auto__;
return {"left": cljs.core.first.call(null,pos), "top": cljs.core.last.call(null,pos), "position": "fixed"};
} else {
return null;
}
})()], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row.modal-header","div.row.modal-header",-1280805367),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-lg-12","div.col-lg-12",1588800498),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.clj__GT_js.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"background-color","background-color",570434026),(cljs.core.truth_(cljs.core.get_in.call(null,self__.app,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"dragging?","dragging?",-995941410)], null)))?"#050":"#500"),new cljs.core.Keyword(null,"color","color",1011675173),"white",new cljs.core.Keyword(null,"text-align","text-align",1786091845),"center"], null))),new cljs.core.Keyword(null,"onMouseDown","onMouseDown",-1496366516),((function (comm,drag_comm,replays,queued_replay,map__22581,map__22581__$1,active_step,history,format_version,___$1){
return (function (p1__22494_SHARP_){
cljs.core.reset_BANG_.call(null,growingtree_app.components.history_player.local_dragging_QMARK_,true);

return cljs.core.async.put_BANG_.call(null,drag_comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"history-player-grabbed","history-player-grabbed",-1494565014),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__22494_SHARP_.clientX,p1__22494_SHARP_.clientY], null)], null));
});})(comm,drag_comm,replays,queued_replay,map__22581,map__22581__$1,active_step,history,format_version,___$1))
], null)),"[History Player]"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-lg-4","div.col-lg-4",-519713955),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(self__.app),new cljs.core.Keyword(null,"playing","playing",70013335)))?((function (comm,drag_comm,replays,queued_replay,map__22581,map__22581__$1,active_step,history,format_version,___$1){
return (function (){
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player-stopped","player-stopped",-93544455)], null));
});})(comm,drag_comm,replays,queued_replay,map__22581,map__22581__$1,active_step,history,format_version,___$1))
:((function (comm,drag_comm,replays,queued_replay,map__22581,map__22581__$1,active_step,history,format_version,___$1){
return (function (){
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player-started","player-started",-1643686711)], null));
});})(comm,drag_comm,replays,queued_replay,map__22581,map__22581__$1,active_step,history,format_version,___$1))
)], null),((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(self__.app),new cljs.core.Keyword(null,"playing","playing",70013335)))?cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY," Pause"),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.fa.fa-pause","i.fa.fa-pause",1311418083)], null)):cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY," Play"),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.fa.fa-play","i.fa.fa-play",-880976511)], null)))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-lg-4","div.col-lg-4",-519713955),(cljs.core.truth_(queued_replay)?[cljs.core.str("Recording format v"),cljs.core.str(format_version),cljs.core.str(", recorded on "),cljs.core.str(new cljs.core.Keyword(null,"created_at","created_at",1484050750).cljs$core$IFn$_invoke$arity$1(queued_replay))].join(''):[cljs.core.str("No recording loaded")].join(''))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-lg-4.col-md-4.col-sm-8.col-xs-8","div.col-lg-4.col-md-4.col-sm-8.col-xs-8",360077484),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.playlist-entries","div.playlist-entries",-1509123018),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),"Replays"], null),cljs.core.map.call(null,cljs.core.partial.call(null,growingtree_app.components.history_player.playlist_entry,comm),cljs.core.range.call(null),replays)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-lg-8.col-md-8.col-sm-8.col-xs-8","div.col-lg-8.col-md-8.col-sm-8.col-xs-8",-1064550350),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.playlist-steps","div.playlist-steps",952035406),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),"Steps"], null),cljs.core.map.call(null,cljs.core.partial.call(null,growingtree_app.components.history_player.player_step,format_version,active_step,comm),cljs.core.range.call(null),history)], null)], null)], null)], null);
})());
});

growingtree_app.components.history_player.t22578.prototype.om$core$IWillMount$ = true;

growingtree_app.components.history_player.t22578.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var mouse_move_chan = cljs.core.async.map.call(null,((function (___$1){
return (function (e){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e.clientX,e.clientY], null);
});})(___$1))
,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [growingtree_app.components.history_player.listen.call(null,window,"mousemove")], null));
var mouse_up_chan = cljs.core.async.map.call(null,((function (mouse_move_chan,___$1){
return (function (e){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e.clientX,e.clientY], null);
});})(mouse_move_chan,___$1))
,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [growingtree_app.components.history_player.listen.call(null,window,"mouseup")], null));
var comm = cljs.core.get_in.call(null,self__.app,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player-comms","player-comms",1620357071),new cljs.core.Keyword(null,"player-drag","player-drag",-831984703)], null));
var c__6715__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6715__auto__,mouse_move_chan,mouse_up_chan,comm,___$1){
return (function (){
var f__6716__auto__ = (function (){var switch__6659__auto__ = ((function (c__6715__auto__,mouse_move_chan,mouse_up_chan,comm,___$1){
return (function (state_22631){
var state_val_22632 = (state_22631[(1)]);
if((state_val_22632 === (7))){
var inst_22593 = (state_22631[(7)]);
var inst_22595 = (state_22631[(8)]);
var inst_22593__$1 = (state_22631[(2)]);
var inst_22594 = cljs.core.nth.call(null,inst_22593__$1,(0),null);
var inst_22595__$1 = cljs.core.nth.call(null,inst_22593__$1,(1),null);
var inst_22596 = cljs.core._EQ_.call(null,inst_22595__$1,mouse_move_chan);
var state_22631__$1 = (function (){var statearr_22633 = state_22631;
(statearr_22633[(7)] = inst_22593__$1);

(statearr_22633[(8)] = inst_22595__$1);

(statearr_22633[(9)] = inst_22594);

return statearr_22633;
})();
if(inst_22596){
var statearr_22634_22661 = state_22631__$1;
(statearr_22634_22661[(1)] = (8));

} else {
var statearr_22635_22662 = state_22631__$1;
(statearr_22635_22662[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22632 === (1))){
var state_22631__$1 = state_22631;
var statearr_22636_22663 = state_22631__$1;
(statearr_22636_22663[(2)] = null);

(statearr_22636_22663[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22632 === (4))){
var inst_22589 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_22590 = [mouse_move_chan,mouse_up_chan];
var inst_22591 = (new cljs.core.PersistentVector(null,2,(5),inst_22589,inst_22590,null));
var state_22631__$1 = state_22631;
return cljs.core.async.ioc_alts_BANG_.call(null,state_22631__$1,(7),inst_22591);
} else {
if((state_val_22632 === (15))){
var state_22631__$1 = state_22631;
var statearr_22637_22664 = state_22631__$1;
(statearr_22637_22664[(2)] = null);

(statearr_22637_22664[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22632 === (13))){
var inst_22621 = (state_22631[(2)]);
var state_22631__$1 = state_22631;
var statearr_22638_22665 = state_22631__$1;
(statearr_22638_22665[(2)] = inst_22621);

(statearr_22638_22665[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22632 === (6))){
var inst_22627 = (state_22631[(2)]);
var state_22631__$1 = state_22631;
var statearr_22639_22666 = state_22631__$1;
(statearr_22639_22666[(2)] = inst_22627);

(statearr_22639_22666[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22632 === (3))){
var inst_22629 = (state_22631[(2)]);
var state_22631__$1 = state_22631;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22631__$1,inst_22629);
} else {
if((state_val_22632 === (12))){
var inst_22595 = (state_22631[(8)]);
var inst_22615 = cljs.core._EQ_.call(null,inst_22595,new cljs.core.Keyword(null,"default","default",-1987822328));
var state_22631__$1 = state_22631;
if(inst_22615){
var statearr_22640_22667 = state_22631__$1;
(statearr_22640_22667[(1)] = (14));

} else {
var statearr_22641_22668 = state_22631__$1;
(statearr_22641_22668[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22632 === (2))){
var state_22631__$1 = state_22631;
var statearr_22642_22669 = state_22631__$1;
(statearr_22642_22669[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22632 === (11))){
var inst_22593 = (state_22631[(7)]);
var inst_22608 = cljs.core.nth.call(null,inst_22593,(0),null);
var inst_22609 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_22610 = [new cljs.core.Keyword(null,"history-player-released","history-player-released",-2051982612),inst_22608];
var inst_22611 = (new cljs.core.PersistentVector(null,2,(5),inst_22609,inst_22610,null));
var inst_22612 = cljs.core.async.put_BANG_.call(null,comm,inst_22611);
var inst_22613 = cljs.core.reset_BANG_.call(null,growingtree_app.components.history_player.local_dragging_QMARK_,false);
var state_22631__$1 = (function (){var statearr_22644 = state_22631;
(statearr_22644[(10)] = inst_22612);

return statearr_22644;
})();
var statearr_22645_22670 = state_22631__$1;
(statearr_22645_22670[(2)] = inst_22613);

(statearr_22645_22670[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22632 === (9))){
var inst_22595 = (state_22631[(8)]);
var inst_22605 = cljs.core._EQ_.call(null,inst_22595,mouse_up_chan);
var state_22631__$1 = state_22631;
if(inst_22605){
var statearr_22646_22671 = state_22631__$1;
(statearr_22646_22671[(1)] = (11));

} else {
var statearr_22647_22672 = state_22631__$1;
(statearr_22647_22672[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22632 === (5))){
var state_22631__$1 = state_22631;
var statearr_22648_22673 = state_22631__$1;
(statearr_22648_22673[(2)] = null);

(statearr_22648_22673[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22632 === (14))){
var inst_22594 = (state_22631[(9)]);
var state_22631__$1 = state_22631;
var statearr_22649_22674 = state_22631__$1;
(statearr_22649_22674[(2)] = inst_22594);

(statearr_22649_22674[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22632 === (16))){
var inst_22619 = (state_22631[(2)]);
var state_22631__$1 = state_22631;
var statearr_22650_22675 = state_22631__$1;
(statearr_22650_22675[(2)] = inst_22619);

(statearr_22650_22675[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22632 === (10))){
var inst_22623 = (state_22631[(2)]);
var state_22631__$1 = (function (){var statearr_22651 = state_22631;
(statearr_22651[(11)] = inst_22623);

return statearr_22651;
})();
var statearr_22652_22676 = state_22631__$1;
(statearr_22652_22676[(2)] = null);

(statearr_22652_22676[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22632 === (8))){
var inst_22593 = (state_22631[(7)]);
var inst_22599 = cljs.core.nth.call(null,inst_22593,(0),null);
var inst_22600 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_22601 = [new cljs.core.Keyword(null,"mouse-moved","mouse-moved",-1918152310),inst_22599];
var inst_22602 = (new cljs.core.PersistentVector(null,2,(5),inst_22600,inst_22601,null));
var inst_22603 = cljs.core.async.put_BANG_.call(null,comm,inst_22602);
var state_22631__$1 = state_22631;
var statearr_22653_22677 = state_22631__$1;
(statearr_22653_22677[(2)] = inst_22603);

(statearr_22653_22677[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});})(c__6715__auto__,mouse_move_chan,mouse_up_chan,comm,___$1))
;
return ((function (switch__6659__auto__,c__6715__auto__,mouse_move_chan,mouse_up_chan,comm,___$1){
return (function() {
var state_machine__6660__auto__ = null;
var state_machine__6660__auto____0 = (function (){
var statearr_22657 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22657[(0)] = state_machine__6660__auto__);

(statearr_22657[(1)] = (1));

return statearr_22657;
});
var state_machine__6660__auto____1 = (function (state_22631){
while(true){
var ret_value__6661__auto__ = (function (){try{while(true){
var result__6662__auto__ = switch__6659__auto__.call(null,state_22631);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6662__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6662__auto__;
}
break;
}
}catch (e22658){if((e22658 instanceof Object)){
var ex__6663__auto__ = e22658;
var statearr_22659_22678 = state_22631;
(statearr_22659_22678[(5)] = ex__6663__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22631);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22658;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6661__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22679 = state_22631;
state_22631 = G__22679;
continue;
} else {
return ret_value__6661__auto__;
}
break;
}
});
state_machine__6660__auto__ = function(state_22631){
switch(arguments.length){
case 0:
return state_machine__6660__auto____0.call(this);
case 1:
return state_machine__6660__auto____1.call(this,state_22631);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6660__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6660__auto____0;
state_machine__6660__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6660__auto____1;
return state_machine__6660__auto__;
})()
;})(switch__6659__auto__,c__6715__auto__,mouse_move_chan,mouse_up_chan,comm,___$1))
})();
var state__6717__auto__ = (function (){var statearr_22660 = f__6716__auto__.call(null);
(statearr_22660[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6715__auto__);

return statearr_22660;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6717__auto__);
});})(c__6715__auto__,mouse_move_chan,mouse_up_chan,comm,___$1))
);

return c__6715__auto__;
});

growingtree_app.components.history_player.t22578.prototype.om$core$IDisplayName$ = true;

growingtree_app.components.history_player.t22578.prototype.om$core$IDisplayName$display_name$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var or__3807__auto__ = new cljs.core.Keyword(null,"react-name","react-name",-834049397).cljs$core$IFn$_invoke$arity$1(self__.opts);
if(cljs.core.truth_(or__3807__auto__)){
return or__3807__auto__;
} else {
return "HistoryPlayer";
}
});

growingtree_app.components.history_player.t22578.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22580){
var self__ = this;
var _22580__$1 = this;
return self__.meta22579;
});

growingtree_app.components.history_player.t22578.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22580,meta22579__$1){
var self__ = this;
var _22580__$1 = this;
return (new growingtree_app.components.history_player.t22578(self__.opts,self__.owner,self__.app,self__.player,meta22579__$1));
});

growingtree_app.components.history_player.t22578.cljs$lang$type = true;

growingtree_app.components.history_player.t22578.cljs$lang$ctorStr = "growingtree-app.components.history-player/t22578";

growingtree_app.components.history_player.t22578.cljs$lang$ctorPrWriter = (function (this__4394__auto__,writer__4395__auto__,opt__4396__auto__){
return cljs.core._write.call(null,writer__4395__auto__,"growingtree-app.components.history-player/t22578");
});

growingtree_app.components.history_player.__GT_t22578 = (function __GT_t22578(opts__$1,owner__$1,app__$1,player__$1,meta22579){
return (new growingtree_app.components.history_player.t22578(opts__$1,owner__$1,app__$1,player__$1,meta22579));
});

}

return (new growingtree_app.components.history_player.t22578(opts,owner,app,player,cljs.core.PersistentArrayMap.EMPTY));
});

//# sourceMappingURL=history_player.js.map