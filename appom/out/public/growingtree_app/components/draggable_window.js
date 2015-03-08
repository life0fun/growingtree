// Compiled by ClojureScript 0.0-2850 {}
goog.provide('growingtree_app.components.draggable_window');
goog.require('cljs.core');
goog.require('sablono.core');
goog.require('goog.events.EventType');
goog.require('cljs.core.async');
goog.require('goog.events');
goog.require('growingtree_app.utils');
goog.require('clojure.string');
goog.require('om.core');
growingtree_app.components.draggable_window.local_dragging_QMARK_ = cljs.core.atom.call(null,false);
growingtree_app.components.draggable_window.listen = (function listen(el,type){
var out = cljs.core.async.chan.call(null);
goog.events.listen(el,type,((function (out){
return (function (event){
if(cljs.core.truth_(cljs.core.deref.call(null,growingtree_app.components.draggable_window.local_dragging_QMARK_))){
event.preventDefault();
} else {
}

return cljs.core.async.put_BANG_.call(null,out,event);
});})(out))
);

return out;
});
growingtree_app.components.draggable_window.draggable_window = (function draggable_window(data,owner,opts){
if(typeof growingtree_app.components.draggable_window.t21371 !== 'undefined'){
} else {

/**
* @constructor
*/
growingtree_app.components.draggable_window.t21371 = (function (opts,owner,data,draggable_window,meta21372){
this.opts = opts;
this.owner = owner;
this.data = data;
this.draggable_window = draggable_window;
this.meta21372 = meta21372;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
growingtree_app.components.draggable_window.t21371.prototype.om$core$IRender$ = true;

growingtree_app.components.draggable_window.t21371.prototype.om$core$IRender$render$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return sablono.interpreter.interpret.call(null,(function (){var map__21374 = self__.data;
var map__21374__$1 = ((cljs.core.seq_QMARK_.call(null,map__21374))?cljs.core.apply.call(null,cljs.core.hash_map,map__21374):map__21374);
var window = cljs.core.get.call(null,map__21374__$1,new cljs.core.Keyword(null,"window","window",724519534));
var name = cljs.core.get.call(null,map__21374__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var comm = cljs.core.get.call(null,map__21374__$1,new cljs.core.Keyword(null,"comm","comm",-1689770614));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.draggable-window","div.draggable-window",541943472),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),(function (){var temp__4126__auto__ = new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(window);
if(cljs.core.truth_(temp__4126__auto__)){
var pos = temp__4126__auto__;
return {"left": cljs.core.first.call(null,pos), "top": cljs.core.last.call(null,pos), "position": "fixed"};
} else {
return null;
}
})()], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row.modal-header","div.row.modal-header",-1280805367),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-lg-12","div.col-lg-12",1588800498),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.clj__GT_js.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"background-color","background-color",570434026),(cljs.core.truth_(new cljs.core.Keyword(null,"dragging?","dragging?",-995941410).cljs$core$IFn$_invoke$arity$1(window))?"#050":"#500"),new cljs.core.Keyword(null,"color","color",1011675173),"white",new cljs.core.Keyword(null,"text-align","text-align",1786091845),"center"], null))),new cljs.core.Keyword(null,"onMouseDown","onMouseDown",-1496366516),((function (map__21374,map__21374__$1,window,name,comm,___$1){
return (function (p1__21275_SHARP_){
cljs.core.reset_BANG_.call(null,growingtree_app.components.draggable_window.local_dragging_QMARK_,true);

return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"draggable","draggable",1676206163),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"grabbed","grabbed",-1247636222),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),name,new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__21275_SHARP_.clientX,p1__21275_SHARP_.clientY], null)], null)], null)], null));
});})(map__21374,map__21374__$1,window,name,comm,___$1))
], null)),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(self__.data)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),om.core.build.call(null,new cljs.core.Keyword(null,"content-com","content-com",808014035).cljs$core$IFn$_invoke$arity$1(self__.data),new cljs.core.Keyword(null,"content-data","content-data",1183622660).cljs$core$IFn$_invoke$arity$1(self__.data),new cljs.core.Keyword(null,"content-opts","content-opts",-409462686).cljs$core$IFn$_invoke$arity$1(self__.data))], null)], null);
})());
});

growingtree_app.components.draggable_window.t21371.prototype.om$core$IWillMount$ = true;

growingtree_app.components.draggable_window.t21371.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var mouse_move_chan = cljs.core.async.map.call(null,((function (___$1){
return (function (e){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e.clientX,e.clientY], null);
});})(___$1))
,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [growingtree_app.components.draggable_window.listen.call(null,window,"mousemove")], null));
var mouse_up_chan = cljs.core.async.map.call(null,((function (mouse_move_chan,___$1){
return (function (e){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e.clientX,e.clientY], null);
});})(mouse_move_chan,___$1))
,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [growingtree_app.components.draggable_window.listen.call(null,window,"mouseup")], null));
var comm = new cljs.core.Keyword(null,"comm","comm",-1689770614).cljs$core$IFn$_invoke$arity$1(self__.data);
var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(self__.data);
var c__6704__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6704__auto__,mouse_move_chan,mouse_up_chan,comm,name,___$1){
return (function (){
var f__6705__auto__ = (function (){var switch__6639__auto__ = ((function (c__6704__auto__,mouse_move_chan,mouse_up_chan,comm,name,___$1){
return (function (state_21436){
var state_val_21437 = (state_21436[(1)]);
if((state_val_21437 === (7))){
var inst_21386 = (state_21436[(7)]);
var inst_21388 = (state_21436[(8)]);
var inst_21386__$1 = (state_21436[(2)]);
var inst_21387 = cljs.core.nth.call(null,inst_21386__$1,(0),null);
var inst_21388__$1 = cljs.core.nth.call(null,inst_21386__$1,(1),null);
var inst_21389 = cljs.core._EQ_.call(null,inst_21388__$1,mouse_move_chan);
var state_21436__$1 = (function (){var statearr_21438 = state_21436;
(statearr_21438[(7)] = inst_21386__$1);

(statearr_21438[(8)] = inst_21388__$1);

(statearr_21438[(9)] = inst_21387);

return statearr_21438;
})();
if(inst_21389){
var statearr_21439_21466 = state_21436__$1;
(statearr_21439_21466[(1)] = (8));

} else {
var statearr_21440_21467 = state_21436__$1;
(statearr_21440_21467[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21437 === (1))){
var state_21436__$1 = state_21436;
var statearr_21441_21468 = state_21436__$1;
(statearr_21441_21468[(2)] = null);

(statearr_21441_21468[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21437 === (4))){
var inst_21382 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_21383 = [mouse_move_chan,mouse_up_chan];
var inst_21384 = (new cljs.core.PersistentVector(null,2,(5),inst_21382,inst_21383,null));
var state_21436__$1 = state_21436;
return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_21436__$1,(7),inst_21384);
} else {
if((state_val_21437 === (15))){
var state_21436__$1 = state_21436;
var statearr_21442_21469 = state_21436__$1;
(statearr_21442_21469[(2)] = null);

(statearr_21442_21469[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21437 === (13))){
var inst_21426 = (state_21436[(2)]);
var state_21436__$1 = state_21436;
var statearr_21443_21470 = state_21436__$1;
(statearr_21443_21470[(2)] = inst_21426);

(statearr_21443_21470[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21437 === (6))){
var inst_21432 = (state_21436[(2)]);
var state_21436__$1 = state_21436;
var statearr_21444_21471 = state_21436__$1;
(statearr_21444_21471[(2)] = inst_21432);

(statearr_21444_21471[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21437 === (3))){
var inst_21434 = (state_21436[(2)]);
var state_21436__$1 = state_21436;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21436__$1,inst_21434);
} else {
if((state_val_21437 === (12))){
var inst_21388 = (state_21436[(8)]);
var inst_21420 = cljs.core._EQ_.call(null,inst_21388,new cljs.core.Keyword(null,"default","default",-1987822328));
var state_21436__$1 = state_21436;
if(inst_21420){
var statearr_21445_21472 = state_21436__$1;
(statearr_21445_21472[(1)] = (14));

} else {
var statearr_21446_21473 = state_21436__$1;
(statearr_21446_21473[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21437 === (2))){
var state_21436__$1 = state_21436;
var statearr_21447_21474 = state_21436__$1;
(statearr_21447_21474[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21437 === (11))){
var inst_21386 = (state_21436[(7)]);
var inst_21407 = cljs.core.nth.call(null,inst_21386,(0),null);
var inst_21408 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_21409 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_21410 = [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"position","position",-2011731912)];
var inst_21411 = [name,inst_21407];
var inst_21412 = cljs.core.PersistentHashMap.fromArrays(inst_21410,inst_21411);
var inst_21413 = [new cljs.core.Keyword(null,"released","released",381037203),inst_21412];
var inst_21414 = (new cljs.core.PersistentVector(null,2,(5),inst_21409,inst_21413,null));
var inst_21415 = [new cljs.core.Keyword(null,"draggable","draggable",1676206163),inst_21414];
var inst_21416 = (new cljs.core.PersistentVector(null,2,(5),inst_21408,inst_21415,null));
var inst_21417 = cljs.core.async.put_BANG_.call(null,comm,inst_21416);
var inst_21418 = cljs.core.reset_BANG_.call(null,growingtree_app.components.draggable_window.local_dragging_QMARK_,false);
var state_21436__$1 = (function (){var statearr_21449 = state_21436;
(statearr_21449[(10)] = inst_21417);

return statearr_21449;
})();
var statearr_21450_21475 = state_21436__$1;
(statearr_21450_21475[(2)] = inst_21418);

(statearr_21450_21475[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21437 === (9))){
var inst_21388 = (state_21436[(8)]);
var inst_21404 = cljs.core._EQ_.call(null,inst_21388,mouse_up_chan);
var state_21436__$1 = state_21436;
if(inst_21404){
var statearr_21451_21476 = state_21436__$1;
(statearr_21451_21476[(1)] = (11));

} else {
var statearr_21452_21477 = state_21436__$1;
(statearr_21452_21477[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21437 === (5))){
var state_21436__$1 = state_21436;
var statearr_21453_21478 = state_21436__$1;
(statearr_21453_21478[(2)] = null);

(statearr_21453_21478[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21437 === (14))){
var inst_21387 = (state_21436[(9)]);
var state_21436__$1 = state_21436;
var statearr_21454_21479 = state_21436__$1;
(statearr_21454_21479[(2)] = inst_21387);

(statearr_21454_21479[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21437 === (16))){
var inst_21424 = (state_21436[(2)]);
var state_21436__$1 = state_21436;
var statearr_21455_21480 = state_21436__$1;
(statearr_21455_21480[(2)] = inst_21424);

(statearr_21455_21480[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21437 === (10))){
var inst_21428 = (state_21436[(2)]);
var state_21436__$1 = (function (){var statearr_21456 = state_21436;
(statearr_21456[(11)] = inst_21428);

return statearr_21456;
})();
var statearr_21457_21481 = state_21436__$1;
(statearr_21457_21481[(2)] = null);

(statearr_21457_21481[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21437 === (8))){
var inst_21386 = (state_21436[(7)]);
var inst_21392 = cljs.core.nth.call(null,inst_21386,(0),null);
var inst_21393 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_21394 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_21395 = [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"position","position",-2011731912)];
var inst_21396 = [name,inst_21392];
var inst_21397 = cljs.core.PersistentHashMap.fromArrays(inst_21395,inst_21396);
var inst_21398 = [new cljs.core.Keyword(null,"mouse-moved","mouse-moved",-1918152310),inst_21397];
var inst_21399 = (new cljs.core.PersistentVector(null,2,(5),inst_21394,inst_21398,null));
var inst_21400 = [new cljs.core.Keyword(null,"draggable","draggable",1676206163),inst_21399];
var inst_21401 = (new cljs.core.PersistentVector(null,2,(5),inst_21393,inst_21400,null));
var inst_21402 = cljs.core.async.put_BANG_.call(null,comm,inst_21401);
var state_21436__$1 = state_21436;
var statearr_21458_21482 = state_21436__$1;
(statearr_21458_21482[(2)] = inst_21402);

(statearr_21458_21482[(1)] = (10));


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
});})(c__6704__auto__,mouse_move_chan,mouse_up_chan,comm,name,___$1))
;
return ((function (switch__6639__auto__,c__6704__auto__,mouse_move_chan,mouse_up_chan,comm,name,___$1){
return (function() {
var state_machine__6640__auto__ = null;
var state_machine__6640__auto____0 = (function (){
var statearr_21462 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21462[(0)] = state_machine__6640__auto__);

(statearr_21462[(1)] = (1));

return statearr_21462;
});
var state_machine__6640__auto____1 = (function (state_21436){
while(true){
var ret_value__6641__auto__ = (function (){try{while(true){
var result__6642__auto__ = switch__6639__auto__.call(null,state_21436);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6642__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6642__auto__;
}
break;
}
}catch (e21463){if((e21463 instanceof Object)){
var ex__6643__auto__ = e21463;
var statearr_21464_21483 = state_21436;
(statearr_21464_21483[(5)] = ex__6643__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21436);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21463;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6641__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21484 = state_21436;
state_21436 = G__21484;
continue;
} else {
return ret_value__6641__auto__;
}
break;
}
});
state_machine__6640__auto__ = function(state_21436){
switch(arguments.length){
case 0:
return state_machine__6640__auto____0.call(this);
case 1:
return state_machine__6640__auto____1.call(this,state_21436);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6640__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6640__auto____0;
state_machine__6640__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6640__auto____1;
return state_machine__6640__auto__;
})()
;})(switch__6639__auto__,c__6704__auto__,mouse_move_chan,mouse_up_chan,comm,name,___$1))
})();
var state__6706__auto__ = (function (){var statearr_21465 = f__6705__auto__.call(null);
(statearr_21465[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6704__auto__);

return statearr_21465;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6706__auto__);
});})(c__6704__auto__,mouse_move_chan,mouse_up_chan,comm,name,___$1))
);

return c__6704__auto__;
});

growingtree_app.components.draggable_window.t21371.prototype.om$core$IDisplayName$ = true;

growingtree_app.components.draggable_window.t21371.prototype.om$core$IDisplayName$display_name$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var or__3807__auto__ = new cljs.core.Keyword(null,"react-name","react-name",-834049397).cljs$core$IFn$_invoke$arity$1(self__.opts);
if(cljs.core.truth_(or__3807__auto__)){
return or__3807__auto__;
} else {
return "DraggableWindow";
}
});

growingtree_app.components.draggable_window.t21371.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21373){
var self__ = this;
var _21373__$1 = this;
return self__.meta21372;
});

growingtree_app.components.draggable_window.t21371.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21373,meta21372__$1){
var self__ = this;
var _21373__$1 = this;
return (new growingtree_app.components.draggable_window.t21371(self__.opts,self__.owner,self__.data,self__.draggable_window,meta21372__$1));
});

growingtree_app.components.draggable_window.t21371.cljs$lang$type = true;

growingtree_app.components.draggable_window.t21371.cljs$lang$ctorStr = "growingtree-app.components.draggable-window/t21371";

growingtree_app.components.draggable_window.t21371.cljs$lang$ctorPrWriter = (function (this__4394__auto__,writer__4395__auto__,opt__4396__auto__){
return cljs.core._write.call(null,writer__4395__auto__,"growingtree-app.components.draggable-window/t21371");
});

growingtree_app.components.draggable_window.__GT_t21371 = (function __GT_t21371(opts__$1,owner__$1,data__$1,draggable_window__$1,meta21372){
return (new growingtree_app.components.draggable_window.t21371(opts__$1,owner__$1,data__$1,draggable_window__$1,meta21372));
});

}

return (new growingtree_app.components.draggable_window.t21371(opts,owner,data,draggable_window,cljs.core.PersistentArrayMap.EMPTY));
});

//# sourceMappingURL=draggable_window.js.map