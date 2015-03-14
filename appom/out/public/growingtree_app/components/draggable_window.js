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
if(typeof growingtree_app.components.draggable_window.t22282 !== 'undefined'){
} else {

/**
* @constructor
*/
growingtree_app.components.draggable_window.t22282 = (function (opts,owner,data,draggable_window,meta22283){
this.opts = opts;
this.owner = owner;
this.data = data;
this.draggable_window = draggable_window;
this.meta22283 = meta22283;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
growingtree_app.components.draggable_window.t22282.prototype.om$core$IRender$ = true;

growingtree_app.components.draggable_window.t22282.prototype.om$core$IRender$render$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return sablono.interpreter.interpret.call(null,(function (){var map__22285 = self__.data;
var map__22285__$1 = ((cljs.core.seq_QMARK_.call(null,map__22285))?cljs.core.apply.call(null,cljs.core.hash_map,map__22285):map__22285);
var window = cljs.core.get.call(null,map__22285__$1,new cljs.core.Keyword(null,"window","window",724519534));
var name = cljs.core.get.call(null,map__22285__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var comm = cljs.core.get.call(null,map__22285__$1,new cljs.core.Keyword(null,"comm","comm",-1689770614));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.draggable-window","div.draggable-window",541943472),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),(function (){var temp__4406__auto__ = new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(window);
if(cljs.core.truth_(temp__4406__auto__)){
var pos = temp__4406__auto__;
return {"left": cljs.core.first.call(null,pos), "top": cljs.core.last.call(null,pos), "position": "fixed"};
} else {
return null;
}
})()], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row.modal-header","div.row.modal-header",-1280805367),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-lg-12","div.col-lg-12",1588800498),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.clj__GT_js.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"background-color","background-color",570434026),(cljs.core.truth_(new cljs.core.Keyword(null,"dragging?","dragging?",-995941410).cljs$core$IFn$_invoke$arity$1(window))?"#050":"#500"),new cljs.core.Keyword(null,"color","color",1011675173),"white",new cljs.core.Keyword(null,"text-align","text-align",1786091845),"center"], null))),new cljs.core.Keyword(null,"onMouseDown","onMouseDown",-1496366516),((function (map__22285,map__22285__$1,window,name,comm,___$1){
return (function (p1__22186_SHARP_){
cljs.core.reset_BANG_.call(null,growingtree_app.components.draggable_window.local_dragging_QMARK_,true);

return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"draggable","draggable",1676206163),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"grabbed","grabbed",-1247636222),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),name,new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__22186_SHARP_.clientX,p1__22186_SHARP_.clientY], null)], null)], null)], null));
});})(map__22285,map__22285__$1,window,name,comm,___$1))
], null)),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(self__.data)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),om.core.build.call(null,new cljs.core.Keyword(null,"content-com","content-com",808014035).cljs$core$IFn$_invoke$arity$1(self__.data),new cljs.core.Keyword(null,"content-data","content-data",1183622660).cljs$core$IFn$_invoke$arity$1(self__.data),new cljs.core.Keyword(null,"content-opts","content-opts",-409462686).cljs$core$IFn$_invoke$arity$1(self__.data))], null)], null);
})());
});

growingtree_app.components.draggable_window.t22282.prototype.om$core$IWillMount$ = true;

growingtree_app.components.draggable_window.t22282.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){
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
var c__6715__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6715__auto__,mouse_move_chan,mouse_up_chan,comm,name,___$1){
return (function (){
var f__6716__auto__ = (function (){var switch__6659__auto__ = ((function (c__6715__auto__,mouse_move_chan,mouse_up_chan,comm,name,___$1){
return (function (state_22347){
var state_val_22348 = (state_22347[(1)]);
if((state_val_22348 === (7))){
var inst_22297 = (state_22347[(7)]);
var inst_22299 = (state_22347[(8)]);
var inst_22297__$1 = (state_22347[(2)]);
var inst_22298 = cljs.core.nth.call(null,inst_22297__$1,(0),null);
var inst_22299__$1 = cljs.core.nth.call(null,inst_22297__$1,(1),null);
var inst_22300 = cljs.core._EQ_.call(null,inst_22299__$1,mouse_move_chan);
var state_22347__$1 = (function (){var statearr_22349 = state_22347;
(statearr_22349[(7)] = inst_22297__$1);

(statearr_22349[(8)] = inst_22299__$1);

(statearr_22349[(9)] = inst_22298);

return statearr_22349;
})();
if(inst_22300){
var statearr_22350_22377 = state_22347__$1;
(statearr_22350_22377[(1)] = (8));

} else {
var statearr_22351_22378 = state_22347__$1;
(statearr_22351_22378[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22348 === (1))){
var state_22347__$1 = state_22347;
var statearr_22352_22379 = state_22347__$1;
(statearr_22352_22379[(2)] = null);

(statearr_22352_22379[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22348 === (4))){
var inst_22293 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_22294 = [mouse_move_chan,mouse_up_chan];
var inst_22295 = (new cljs.core.PersistentVector(null,2,(5),inst_22293,inst_22294,null));
var state_22347__$1 = state_22347;
return cljs.core.async.ioc_alts_BANG_.call(null,state_22347__$1,(7),inst_22295);
} else {
if((state_val_22348 === (15))){
var state_22347__$1 = state_22347;
var statearr_22353_22380 = state_22347__$1;
(statearr_22353_22380[(2)] = null);

(statearr_22353_22380[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22348 === (13))){
var inst_22337 = (state_22347[(2)]);
var state_22347__$1 = state_22347;
var statearr_22354_22381 = state_22347__$1;
(statearr_22354_22381[(2)] = inst_22337);

(statearr_22354_22381[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22348 === (6))){
var inst_22343 = (state_22347[(2)]);
var state_22347__$1 = state_22347;
var statearr_22355_22382 = state_22347__$1;
(statearr_22355_22382[(2)] = inst_22343);

(statearr_22355_22382[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22348 === (3))){
var inst_22345 = (state_22347[(2)]);
var state_22347__$1 = state_22347;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22347__$1,inst_22345);
} else {
if((state_val_22348 === (12))){
var inst_22299 = (state_22347[(8)]);
var inst_22331 = cljs.core._EQ_.call(null,inst_22299,new cljs.core.Keyword(null,"default","default",-1987822328));
var state_22347__$1 = state_22347;
if(inst_22331){
var statearr_22356_22383 = state_22347__$1;
(statearr_22356_22383[(1)] = (14));

} else {
var statearr_22357_22384 = state_22347__$1;
(statearr_22357_22384[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22348 === (2))){
var state_22347__$1 = state_22347;
var statearr_22358_22385 = state_22347__$1;
(statearr_22358_22385[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22348 === (11))){
var inst_22297 = (state_22347[(7)]);
var inst_22318 = cljs.core.nth.call(null,inst_22297,(0),null);
var inst_22319 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_22320 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_22321 = [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"position","position",-2011731912)];
var inst_22322 = [name,inst_22318];
var inst_22323 = cljs.core.PersistentHashMap.fromArrays(inst_22321,inst_22322);
var inst_22324 = [new cljs.core.Keyword(null,"released","released",381037203),inst_22323];
var inst_22325 = (new cljs.core.PersistentVector(null,2,(5),inst_22320,inst_22324,null));
var inst_22326 = [new cljs.core.Keyword(null,"draggable","draggable",1676206163),inst_22325];
var inst_22327 = (new cljs.core.PersistentVector(null,2,(5),inst_22319,inst_22326,null));
var inst_22328 = cljs.core.async.put_BANG_.call(null,comm,inst_22327);
var inst_22329 = cljs.core.reset_BANG_.call(null,growingtree_app.components.draggable_window.local_dragging_QMARK_,false);
var state_22347__$1 = (function (){var statearr_22360 = state_22347;
(statearr_22360[(10)] = inst_22328);

return statearr_22360;
})();
var statearr_22361_22386 = state_22347__$1;
(statearr_22361_22386[(2)] = inst_22329);

(statearr_22361_22386[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22348 === (9))){
var inst_22299 = (state_22347[(8)]);
var inst_22315 = cljs.core._EQ_.call(null,inst_22299,mouse_up_chan);
var state_22347__$1 = state_22347;
if(inst_22315){
var statearr_22362_22387 = state_22347__$1;
(statearr_22362_22387[(1)] = (11));

} else {
var statearr_22363_22388 = state_22347__$1;
(statearr_22363_22388[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22348 === (5))){
var state_22347__$1 = state_22347;
var statearr_22364_22389 = state_22347__$1;
(statearr_22364_22389[(2)] = null);

(statearr_22364_22389[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22348 === (14))){
var inst_22298 = (state_22347[(9)]);
var state_22347__$1 = state_22347;
var statearr_22365_22390 = state_22347__$1;
(statearr_22365_22390[(2)] = inst_22298);

(statearr_22365_22390[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22348 === (16))){
var inst_22335 = (state_22347[(2)]);
var state_22347__$1 = state_22347;
var statearr_22366_22391 = state_22347__$1;
(statearr_22366_22391[(2)] = inst_22335);

(statearr_22366_22391[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22348 === (10))){
var inst_22339 = (state_22347[(2)]);
var state_22347__$1 = (function (){var statearr_22367 = state_22347;
(statearr_22367[(11)] = inst_22339);

return statearr_22367;
})();
var statearr_22368_22392 = state_22347__$1;
(statearr_22368_22392[(2)] = null);

(statearr_22368_22392[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22348 === (8))){
var inst_22297 = (state_22347[(7)]);
var inst_22303 = cljs.core.nth.call(null,inst_22297,(0),null);
var inst_22304 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_22305 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_22306 = [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"position","position",-2011731912)];
var inst_22307 = [name,inst_22303];
var inst_22308 = cljs.core.PersistentHashMap.fromArrays(inst_22306,inst_22307);
var inst_22309 = [new cljs.core.Keyword(null,"mouse-moved","mouse-moved",-1918152310),inst_22308];
var inst_22310 = (new cljs.core.PersistentVector(null,2,(5),inst_22305,inst_22309,null));
var inst_22311 = [new cljs.core.Keyword(null,"draggable","draggable",1676206163),inst_22310];
var inst_22312 = (new cljs.core.PersistentVector(null,2,(5),inst_22304,inst_22311,null));
var inst_22313 = cljs.core.async.put_BANG_.call(null,comm,inst_22312);
var state_22347__$1 = state_22347;
var statearr_22369_22393 = state_22347__$1;
(statearr_22369_22393[(2)] = inst_22313);

(statearr_22369_22393[(1)] = (10));


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
});})(c__6715__auto__,mouse_move_chan,mouse_up_chan,comm,name,___$1))
;
return ((function (switch__6659__auto__,c__6715__auto__,mouse_move_chan,mouse_up_chan,comm,name,___$1){
return (function() {
var state_machine__6660__auto__ = null;
var state_machine__6660__auto____0 = (function (){
var statearr_22373 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22373[(0)] = state_machine__6660__auto__);

(statearr_22373[(1)] = (1));

return statearr_22373;
});
var state_machine__6660__auto____1 = (function (state_22347){
while(true){
var ret_value__6661__auto__ = (function (){try{while(true){
var result__6662__auto__ = switch__6659__auto__.call(null,state_22347);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6662__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6662__auto__;
}
break;
}
}catch (e22374){if((e22374 instanceof Object)){
var ex__6663__auto__ = e22374;
var statearr_22375_22394 = state_22347;
(statearr_22375_22394[(5)] = ex__6663__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22347);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22374;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6661__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22395 = state_22347;
state_22347 = G__22395;
continue;
} else {
return ret_value__6661__auto__;
}
break;
}
});
state_machine__6660__auto__ = function(state_22347){
switch(arguments.length){
case 0:
return state_machine__6660__auto____0.call(this);
case 1:
return state_machine__6660__auto____1.call(this,state_22347);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6660__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6660__auto____0;
state_machine__6660__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6660__auto____1;
return state_machine__6660__auto__;
})()
;})(switch__6659__auto__,c__6715__auto__,mouse_move_chan,mouse_up_chan,comm,name,___$1))
})();
var state__6717__auto__ = (function (){var statearr_22376 = f__6716__auto__.call(null);
(statearr_22376[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6715__auto__);

return statearr_22376;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6717__auto__);
});})(c__6715__auto__,mouse_move_chan,mouse_up_chan,comm,name,___$1))
);

return c__6715__auto__;
});

growingtree_app.components.draggable_window.t22282.prototype.om$core$IDisplayName$ = true;

growingtree_app.components.draggable_window.t22282.prototype.om$core$IDisplayName$display_name$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var or__3807__auto__ = new cljs.core.Keyword(null,"react-name","react-name",-834049397).cljs$core$IFn$_invoke$arity$1(self__.opts);
if(cljs.core.truth_(or__3807__auto__)){
return or__3807__auto__;
} else {
return "DraggableWindow";
}
});

growingtree_app.components.draggable_window.t22282.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22284){
var self__ = this;
var _22284__$1 = this;
return self__.meta22283;
});

growingtree_app.components.draggable_window.t22282.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22284,meta22283__$1){
var self__ = this;
var _22284__$1 = this;
return (new growingtree_app.components.draggable_window.t22282(self__.opts,self__.owner,self__.data,self__.draggable_window,meta22283__$1));
});

growingtree_app.components.draggable_window.t22282.cljs$lang$type = true;

growingtree_app.components.draggable_window.t22282.cljs$lang$ctorStr = "growingtree-app.components.draggable-window/t22282";

growingtree_app.components.draggable_window.t22282.cljs$lang$ctorPrWriter = (function (this__4394__auto__,writer__4395__auto__,opt__4396__auto__){
return cljs.core._write.call(null,writer__4395__auto__,"growingtree-app.components.draggable-window/t22282");
});

growingtree_app.components.draggable_window.__GT_t22282 = (function __GT_t22282(opts__$1,owner__$1,data__$1,draggable_window__$1,meta22283){
return (new growingtree_app.components.draggable_window.t22282(opts__$1,owner__$1,data__$1,draggable_window__$1,meta22283));
});

}

return (new growingtree_app.components.draggable_window.t22282(opts,owner,data,draggable_window,cljs.core.PersistentArrayMap.EMPTY));
});

//# sourceMappingURL=draggable_window.js.map