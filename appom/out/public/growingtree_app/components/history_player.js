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
return (function (p1__21582_SHARP_){
if(cljs.core.truth_(cljs.core.deref.call(null,growingtree_app.components.history_player.local_dragging_QMARK_))){
p1__21582_SHARP_.preventDefault();
} else {
}

return cljs.core.async.put_BANG_.call(null,out,p1__21582_SHARP_);
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
if(typeof growingtree_app.components.history_player.t21667 !== 'undefined'){
} else {

/**
* @constructor
*/
growingtree_app.components.history_player.t21667 = (function (opts,owner,app,player,meta21668){
this.opts = opts;
this.owner = owner;
this.app = app;
this.player = player;
this.meta21668 = meta21668;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
growingtree_app.components.history_player.t21667.prototype.om$core$IRender$ = true;

growingtree_app.components.history_player.t21667.prototype.om$core$IRender$render$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return sablono.interpreter.interpret.call(null,(function (){var comm = cljs.core.get_in.call(null,self__.app,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player-comms","player-comms",1620357071),new cljs.core.Keyword(null,"player-control","player-control",-255472555)], null));
var drag_comm = cljs.core.get_in.call(null,self__.app,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player-comms","player-comms",1620357071),new cljs.core.Keyword(null,"player-drag","player-drag",-831984703)], null));
var replays = cljs.core.get_in.call(null,self__.app,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"replays","replays",1696271113),new cljs.core.Keyword(null,"replay-list","replay-list",1451976532)], null));
var queued_replay = cljs.core.get_in.call(null,self__.app,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"replays","replays",1696271113),new cljs.core.Keyword(null,"queued-replay","queued-replay",416789727)], null));
var map__21670 = queued_replay;
var map__21670__$1 = ((cljs.core.seq_QMARK_.call(null,map__21670))?cljs.core.apply.call(null,cljs.core.hash_map,map__21670):map__21670);
var active_step = cljs.core.get.call(null,map__21670__$1,new cljs.core.Keyword(null,"active-step","active-step",1698284288));
var history = cljs.core.get.call(null,map__21670__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var format_version = cljs.core.get.call(null,map__21670__$1,new cljs.core.Keyword(null,"format_version","format_version",1415666110));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.history-player","div.history-player",-957274163),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),(function (){var temp__4126__auto__ = cljs.core.get_in.call(null,self__.app,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"position","position",-2011731912)], null));
if(cljs.core.truth_(temp__4126__auto__)){
var pos = temp__4126__auto__;
return {"left": cljs.core.first.call(null,pos), "top": cljs.core.last.call(null,pos), "position": "fixed"};
} else {
return null;
}
})()], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row.modal-header","div.row.modal-header",-1280805367),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-lg-12","div.col-lg-12",1588800498),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.clj__GT_js.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"background-color","background-color",570434026),(cljs.core.truth_(cljs.core.get_in.call(null,self__.app,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"dragging?","dragging?",-995941410)], null)))?"#050":"#500"),new cljs.core.Keyword(null,"color","color",1011675173),"white",new cljs.core.Keyword(null,"text-align","text-align",1786091845),"center"], null))),new cljs.core.Keyword(null,"onMouseDown","onMouseDown",-1496366516),((function (comm,drag_comm,replays,queued_replay,map__21670,map__21670__$1,active_step,history,format_version,___$1){
return (function (p1__21583_SHARP_){
cljs.core.reset_BANG_.call(null,growingtree_app.components.history_player.local_dragging_QMARK_,true);

return cljs.core.async.put_BANG_.call(null,drag_comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"history-player-grabbed","history-player-grabbed",-1494565014),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__21583_SHARP_.clientX,p1__21583_SHARP_.clientY], null)], null));
});})(comm,drag_comm,replays,queued_replay,map__21670,map__21670__$1,active_step,history,format_version,___$1))
], null)),"[History Player]"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-lg-4","div.col-lg-4",-519713955),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(self__.app),new cljs.core.Keyword(null,"playing","playing",70013335)))?((function (comm,drag_comm,replays,queued_replay,map__21670,map__21670__$1,active_step,history,format_version,___$1){
return (function (){
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player-stopped","player-stopped",-93544455)], null));
});})(comm,drag_comm,replays,queued_replay,map__21670,map__21670__$1,active_step,history,format_version,___$1))
:((function (comm,drag_comm,replays,queued_replay,map__21670,map__21670__$1,active_step,history,format_version,___$1){
return (function (){
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player-started","player-started",-1643686711)], null));
});})(comm,drag_comm,replays,queued_replay,map__21670,map__21670__$1,active_step,history,format_version,___$1))
)], null),((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(self__.app),new cljs.core.Keyword(null,"playing","playing",70013335)))?cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY," Pause"),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.fa.fa-pause","i.fa.fa-pause",1311418083)], null)):cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY," Play"),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.fa.fa-play","i.fa.fa-play",-880976511)], null)))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-lg-4","div.col-lg-4",-519713955),(cljs.core.truth_(queued_replay)?[cljs.core.str("Recording format v"),cljs.core.str(format_version),cljs.core.str(", recorded on "),cljs.core.str(new cljs.core.Keyword(null,"created_at","created_at",1484050750).cljs$core$IFn$_invoke$arity$1(queued_replay))].join(''):[cljs.core.str("No recording loaded")].join(''))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-lg-4.col-md-4.col-sm-8.col-xs-8","div.col-lg-4.col-md-4.col-sm-8.col-xs-8",360077484),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.playlist-entries","div.playlist-entries",-1509123018),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),"Replays"], null),cljs.core.map.call(null,cljs.core.partial.call(null,growingtree_app.components.history_player.playlist_entry,comm),cljs.core.range.call(null),replays)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-lg-8.col-md-8.col-sm-8.col-xs-8","div.col-lg-8.col-md-8.col-sm-8.col-xs-8",-1064550350),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.playlist-steps","div.playlist-steps",952035406),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),"Steps"], null),cljs.core.map.call(null,cljs.core.partial.call(null,growingtree_app.components.history_player.player_step,format_version,active_step,comm),cljs.core.range.call(null),history)], null)], null)], null)], null);
})());
});

growingtree_app.components.history_player.t21667.prototype.om$core$IWillMount$ = true;

growingtree_app.components.history_player.t21667.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){
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
var c__6704__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6704__auto__,mouse_move_chan,mouse_up_chan,comm,___$1){
return (function (){
var f__6705__auto__ = (function (){var switch__6639__auto__ = ((function (c__6704__auto__,mouse_move_chan,mouse_up_chan,comm,___$1){
return (function (state_21720){
var state_val_21721 = (state_21720[(1)]);
if((state_val_21721 === (7))){
var inst_21684 = (state_21720[(7)]);
var inst_21682 = (state_21720[(8)]);
var inst_21682__$1 = (state_21720[(2)]);
var inst_21683 = cljs.core.nth.call(null,inst_21682__$1,(0),null);
var inst_21684__$1 = cljs.core.nth.call(null,inst_21682__$1,(1),null);
var inst_21685 = cljs.core._EQ_.call(null,inst_21684__$1,mouse_move_chan);
var state_21720__$1 = (function (){var statearr_21722 = state_21720;
(statearr_21722[(9)] = inst_21683);

(statearr_21722[(7)] = inst_21684__$1);

(statearr_21722[(8)] = inst_21682__$1);

return statearr_21722;
})();
if(inst_21685){
var statearr_21723_21750 = state_21720__$1;
(statearr_21723_21750[(1)] = (8));

} else {
var statearr_21724_21751 = state_21720__$1;
(statearr_21724_21751[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21721 === (1))){
var state_21720__$1 = state_21720;
var statearr_21725_21752 = state_21720__$1;
(statearr_21725_21752[(2)] = null);

(statearr_21725_21752[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21721 === (4))){
var inst_21678 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_21679 = [mouse_move_chan,mouse_up_chan];
var inst_21680 = (new cljs.core.PersistentVector(null,2,(5),inst_21678,inst_21679,null));
var state_21720__$1 = state_21720;
return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_21720__$1,(7),inst_21680);
} else {
if((state_val_21721 === (15))){
var state_21720__$1 = state_21720;
var statearr_21726_21753 = state_21720__$1;
(statearr_21726_21753[(2)] = null);

(statearr_21726_21753[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21721 === (13))){
var inst_21710 = (state_21720[(2)]);
var state_21720__$1 = state_21720;
var statearr_21727_21754 = state_21720__$1;
(statearr_21727_21754[(2)] = inst_21710);

(statearr_21727_21754[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21721 === (6))){
var inst_21716 = (state_21720[(2)]);
var state_21720__$1 = state_21720;
var statearr_21728_21755 = state_21720__$1;
(statearr_21728_21755[(2)] = inst_21716);

(statearr_21728_21755[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21721 === (3))){
var inst_21718 = (state_21720[(2)]);
var state_21720__$1 = state_21720;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21720__$1,inst_21718);
} else {
if((state_val_21721 === (12))){
var inst_21684 = (state_21720[(7)]);
var inst_21704 = cljs.core._EQ_.call(null,inst_21684,new cljs.core.Keyword(null,"default","default",-1987822328));
var state_21720__$1 = state_21720;
if(inst_21704){
var statearr_21729_21756 = state_21720__$1;
(statearr_21729_21756[(1)] = (14));

} else {
var statearr_21730_21757 = state_21720__$1;
(statearr_21730_21757[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21721 === (2))){
var state_21720__$1 = state_21720;
var statearr_21731_21758 = state_21720__$1;
(statearr_21731_21758[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21721 === (11))){
var inst_21682 = (state_21720[(8)]);
var inst_21697 = cljs.core.nth.call(null,inst_21682,(0),null);
var inst_21698 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_21699 = [new cljs.core.Keyword(null,"history-player-released","history-player-released",-2051982612),inst_21697];
var inst_21700 = (new cljs.core.PersistentVector(null,2,(5),inst_21698,inst_21699,null));
var inst_21701 = cljs.core.async.put_BANG_.call(null,comm,inst_21700);
var inst_21702 = cljs.core.reset_BANG_.call(null,growingtree_app.components.history_player.local_dragging_QMARK_,false);
var state_21720__$1 = (function (){var statearr_21733 = state_21720;
(statearr_21733[(10)] = inst_21701);

return statearr_21733;
})();
var statearr_21734_21759 = state_21720__$1;
(statearr_21734_21759[(2)] = inst_21702);

(statearr_21734_21759[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21721 === (9))){
var inst_21684 = (state_21720[(7)]);
var inst_21694 = cljs.core._EQ_.call(null,inst_21684,mouse_up_chan);
var state_21720__$1 = state_21720;
if(inst_21694){
var statearr_21735_21760 = state_21720__$1;
(statearr_21735_21760[(1)] = (11));

} else {
var statearr_21736_21761 = state_21720__$1;
(statearr_21736_21761[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21721 === (5))){
var state_21720__$1 = state_21720;
var statearr_21737_21762 = state_21720__$1;
(statearr_21737_21762[(2)] = null);

(statearr_21737_21762[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21721 === (14))){
var inst_21683 = (state_21720[(9)]);
var state_21720__$1 = state_21720;
var statearr_21738_21763 = state_21720__$1;
(statearr_21738_21763[(2)] = inst_21683);

(statearr_21738_21763[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21721 === (16))){
var inst_21708 = (state_21720[(2)]);
var state_21720__$1 = state_21720;
var statearr_21739_21764 = state_21720__$1;
(statearr_21739_21764[(2)] = inst_21708);

(statearr_21739_21764[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21721 === (10))){
var inst_21712 = (state_21720[(2)]);
var state_21720__$1 = (function (){var statearr_21740 = state_21720;
(statearr_21740[(11)] = inst_21712);

return statearr_21740;
})();
var statearr_21741_21765 = state_21720__$1;
(statearr_21741_21765[(2)] = null);

(statearr_21741_21765[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21721 === (8))){
var inst_21682 = (state_21720[(8)]);
var inst_21688 = cljs.core.nth.call(null,inst_21682,(0),null);
var inst_21689 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_21690 = [new cljs.core.Keyword(null,"mouse-moved","mouse-moved",-1918152310),inst_21688];
var inst_21691 = (new cljs.core.PersistentVector(null,2,(5),inst_21689,inst_21690,null));
var inst_21692 = cljs.core.async.put_BANG_.call(null,comm,inst_21691);
var state_21720__$1 = state_21720;
var statearr_21742_21766 = state_21720__$1;
(statearr_21742_21766[(2)] = inst_21692);

(statearr_21742_21766[(1)] = (10));


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
});})(c__6704__auto__,mouse_move_chan,mouse_up_chan,comm,___$1))
;
return ((function (switch__6639__auto__,c__6704__auto__,mouse_move_chan,mouse_up_chan,comm,___$1){
return (function() {
var state_machine__6640__auto__ = null;
var state_machine__6640__auto____0 = (function (){
var statearr_21746 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21746[(0)] = state_machine__6640__auto__);

(statearr_21746[(1)] = (1));

return statearr_21746;
});
var state_machine__6640__auto____1 = (function (state_21720){
while(true){
var ret_value__6641__auto__ = (function (){try{while(true){
var result__6642__auto__ = switch__6639__auto__.call(null,state_21720);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6642__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6642__auto__;
}
break;
}
}catch (e21747){if((e21747 instanceof Object)){
var ex__6643__auto__ = e21747;
var statearr_21748_21767 = state_21720;
(statearr_21748_21767[(5)] = ex__6643__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21720);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21747;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6641__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21768 = state_21720;
state_21720 = G__21768;
continue;
} else {
return ret_value__6641__auto__;
}
break;
}
});
state_machine__6640__auto__ = function(state_21720){
switch(arguments.length){
case 0:
return state_machine__6640__auto____0.call(this);
case 1:
return state_machine__6640__auto____1.call(this,state_21720);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6640__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6640__auto____0;
state_machine__6640__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6640__auto____1;
return state_machine__6640__auto__;
})()
;})(switch__6639__auto__,c__6704__auto__,mouse_move_chan,mouse_up_chan,comm,___$1))
})();
var state__6706__auto__ = (function (){var statearr_21749 = f__6705__auto__.call(null);
(statearr_21749[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6704__auto__);

return statearr_21749;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6706__auto__);
});})(c__6704__auto__,mouse_move_chan,mouse_up_chan,comm,___$1))
);

return c__6704__auto__;
});

growingtree_app.components.history_player.t21667.prototype.om$core$IDisplayName$ = true;

growingtree_app.components.history_player.t21667.prototype.om$core$IDisplayName$display_name$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var or__3807__auto__ = new cljs.core.Keyword(null,"react-name","react-name",-834049397).cljs$core$IFn$_invoke$arity$1(self__.opts);
if(cljs.core.truth_(or__3807__auto__)){
return or__3807__auto__;
} else {
return "HistoryPlayer";
}
});

growingtree_app.components.history_player.t21667.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21669){
var self__ = this;
var _21669__$1 = this;
return self__.meta21668;
});

growingtree_app.components.history_player.t21667.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21669,meta21668__$1){
var self__ = this;
var _21669__$1 = this;
return (new growingtree_app.components.history_player.t21667(self__.opts,self__.owner,self__.app,self__.player,meta21668__$1));
});

growingtree_app.components.history_player.t21667.cljs$lang$type = true;

growingtree_app.components.history_player.t21667.cljs$lang$ctorStr = "growingtree-app.components.history-player/t21667";

growingtree_app.components.history_player.t21667.cljs$lang$ctorPrWriter = (function (this__4394__auto__,writer__4395__auto__,opt__4396__auto__){
return cljs.core._write.call(null,writer__4395__auto__,"growingtree-app.components.history-player/t21667");
});

growingtree_app.components.history_player.__GT_t21667 = (function __GT_t21667(opts__$1,owner__$1,app__$1,player__$1,meta21668){
return (new growingtree_app.components.history_player.t21667(opts__$1,owner__$1,app__$1,player__$1,meta21668));
});

}

return (new growingtree_app.components.history_player.t21667(opts,owner,app,player,cljs.core.PersistentArrayMap.EMPTY));
});

//# sourceMappingURL=history_player.js.map