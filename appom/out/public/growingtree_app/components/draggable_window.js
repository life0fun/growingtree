// Compiled by ClojureScript 0.0-2173
goog.provide('growingtree_app.components.draggable_window');
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
growingtree_app.components.draggable_window.local_dragging_QMARK_ = cljs.core.atom.call(null,false);
growingtree_app.components.draggable_window.listen = (function listen(el,type){var out = cljs.core.async.chan.call(null);goog.events.listen(el,type,(function (event){if(cljs.core.truth_(cljs.core.deref.call(null,growingtree_app.components.draggable_window.local_dragging_QMARK_)))
{event.preventDefault();
} else
{}
return cljs.core.async.put_BANG_.call(null,out,event);
}));
return out;
});
growingtree_app.components.draggable_window.draggable_window = (function draggable_window(data,owner,opts){if(typeof growingtree_app.components.draggable_window.t11364 !== 'undefined')
{} else
{
/**
* @constructor
*/
growingtree_app.components.draggable_window.t11364 = (function (opts,owner,data,draggable_window,meta11365){
this.opts = opts;
this.owner = owner;
this.data = data;
this.draggable_window = draggable_window;
this.meta11365 = meta11365;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
growingtree_app.components.draggable_window.t11364.cljs$lang$type = true;
growingtree_app.components.draggable_window.t11364.cljs$lang$ctorStr = "growingtree-app.components.draggable-window/t11364";
growingtree_app.components.draggable_window.t11364.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"growingtree-app.components.draggable-window/t11364");
});
growingtree_app.components.draggable_window.t11364.prototype.om$core$IRender$ = true;
growingtree_app.components.draggable_window.t11364.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return sablono.interpreter.interpret.call(null,(function (){var map__11367 = self__.data;var map__11367__$1 = ((cljs.core.seq_QMARK_.call(null,map__11367))?cljs.core.apply.call(null,cljs.core.hash_map,map__11367):map__11367);var window = cljs.core.get.call(null,map__11367__$1,new cljs.core.Keyword(null,"window","window",4521119586));var name = cljs.core.get.call(null,map__11367__$1,new cljs.core.Keyword(null,"name","name",1017277949));var comm = cljs.core.get.call(null,map__11367__$1,new cljs.core.Keyword(null,"comm","comm",1016963710));return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.draggable-window","div.draggable-window",2251704159),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",1123684643),(function (){var temp__4092__auto__ = new cljs.core.Keyword(null,"position","position",1761709211).cljs$core$IFn$_invoke$arity$1(window);if(cljs.core.truth_(temp__4092__auto__))
{var pos = temp__4092__auto__;return {"left": cljs.core.first.call(null,pos), "top": cljs.core.last.call(null,pos), "position": "fixed"};
} else
{return null;
}
})()], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row.modal-header","div.row.modal-header",3055554672),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-lg-12","div.col-lg-12",4751944571),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",1123684643),cljs.core.clj__GT_js.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"background-color","background-color",1619226998),(cljs.core.truth_(new cljs.core.Keyword(null,"dragging?","dragging?",709673026).cljs$core$IFn$_invoke$arity$1(window))?"#050":"#500"),new cljs.core.Keyword(null,"color","color",1108746965),"white",new cljs.core.Keyword(null,"text-align","text-align",1760136663),"center"], null))),new cljs.core.Keyword(null,"onMouseDown","onMouseDown",1569008442),(function (p1__11273_SHARP_){cljs.core.reset_BANG_.call(null,growingtree_app.components.draggable_window.local_dragging_QMARK_,true);
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"draggable","draggable",709423359),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"grabbed","grabbed",1293824551),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),name,new cljs.core.Keyword(null,"position","position",1761709211),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__11273_SHARP_.clientX,p1__11273_SHARP_.clientY], null)], null)], null)], null));
})], null)),new cljs.core.Keyword(null,"title","title",1124275658).cljs$core$IFn$_invoke$arity$1(self__.data)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",2686478959),om.core.build.call(null,new cljs.core.Keyword(null,"content-com","content-com",623589791).cljs$core$IFn$_invoke$arity$1(self__.data),new cljs.core.Keyword(null,"content-data","content-data",1799074800).cljs$core$IFn$_invoke$arity$1(self__.data),new cljs.core.Keyword(null,"content-opts","content-opts",1799416934).cljs$core$IFn$_invoke$arity$1(self__.data))], null)], null);
})());
});
growingtree_app.components.draggable_window.t11364.prototype.om$core$IWillMount$ = true;
growingtree_app.components.draggable_window.t11364.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var mouse_move_chan = cljs.core.async.map.call(null,(function (e){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e.clientX,e.clientY], null);
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [growingtree_app.components.draggable_window.listen.call(null,window,"mousemove")], null));var mouse_up_chan = cljs.core.async.map.call(null,((function (mouse_move_chan){
return (function (e){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e.clientX,e.clientY], null);
});})(mouse_move_chan))
,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [growingtree_app.components.draggable_window.listen.call(null,window,"mouseup")], null));var comm = new cljs.core.Keyword(null,"comm","comm",1016963710).cljs$core$IFn$_invoke$arity$1(self__.data);var name = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.data);var c__6188__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6189__auto__ = (function (){var switch__6118__auto__ = (function (state_11424){var state_val_11425 = (state_11424[1]);if((state_val_11425 === 1))
{var state_11424__$1 = state_11424;var statearr_11426_11454 = state_11424__$1;(statearr_11426_11454[2] = null);
(statearr_11426_11454[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11425 === 2))
{var state_11424__$1 = state_11424;if(true)
{var statearr_11427_11455 = state_11424__$1;(statearr_11427_11455[1] = 4);
} else
{var statearr_11428_11456 = state_11424__$1;(statearr_11428_11456[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11425 === 3))
{var inst_11422 = (state_11424[2]);var state_11424__$1 = state_11424;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11424__$1,inst_11422);
} else
{if((state_val_11425 === 4))
{var inst_11375 = [mouse_move_chan,mouse_up_chan];var inst_11376 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_11375,null));var state_11424__$1 = state_11424;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_11424__$1,7,inst_11376);
} else
{if((state_val_11425 === 5))
{var state_11424__$1 = state_11424;var statearr_11429_11457 = state_11424__$1;(statearr_11429_11457[2] = null);
(statearr_11429_11457[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11425 === 6))
{var inst_11420 = (state_11424[2]);var state_11424__$1 = state_11424;var statearr_11430_11458 = state_11424__$1;(statearr_11430_11458[2] = inst_11420);
(statearr_11430_11458[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11425 === 7))
{var inst_11378 = (state_11424[7]);var inst_11380 = (state_11424[8]);var inst_11378__$1 = (state_11424[2]);var inst_11379 = cljs.core.nth.call(null,inst_11378__$1,0,null);var inst_11380__$1 = cljs.core.nth.call(null,inst_11378__$1,1,null);var inst_11381 = cljs.core._EQ_.call(null,inst_11380__$1,mouse_move_chan);var state_11424__$1 = (function (){var statearr_11431 = state_11424;(statearr_11431[9] = inst_11379);
(statearr_11431[7] = inst_11378__$1);
(statearr_11431[8] = inst_11380__$1);
return statearr_11431;
})();if(inst_11381)
{var statearr_11432_11459 = state_11424__$1;(statearr_11432_11459[1] = 8);
} else
{var statearr_11433_11460 = state_11424__$1;(statearr_11433_11460[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11425 === 8))
{var inst_11378 = (state_11424[7]);var inst_11384 = cljs.core.nth.call(null,inst_11378,0,null);var inst_11385 = [new cljs.core.Keyword(null,"name","name",1017277949),new cljs.core.Keyword(null,"position","position",1761709211)];var inst_11386 = [name,inst_11384];var inst_11387 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_11385,inst_11386);var inst_11388 = [new cljs.core.Keyword(null,"mouse-moved","mouse-moved",753447677),inst_11387];var inst_11389 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_11388,null));var inst_11390 = [new cljs.core.Keyword(null,"draggable","draggable",709423359),inst_11389];var inst_11391 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_11390,null));var inst_11392 = cljs.core.async.put_BANG_.call(null,comm,inst_11391);var state_11424__$1 = state_11424;var statearr_11434_11461 = state_11424__$1;(statearr_11434_11461[2] = inst_11392);
(statearr_11434_11461[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11425 === 9))
{var inst_11380 = (state_11424[8]);var inst_11394 = cljs.core._EQ_.call(null,inst_11380,mouse_up_chan);var state_11424__$1 = state_11424;if(inst_11394)
{var statearr_11435_11462 = state_11424__$1;(statearr_11435_11462[1] = 11);
} else
{var statearr_11436_11463 = state_11424__$1;(statearr_11436_11463[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11425 === 10))
{var inst_11416 = (state_11424[2]);var state_11424__$1 = (function (){var statearr_11437 = state_11424;(statearr_11437[10] = inst_11416);
return statearr_11437;
})();var statearr_11438_11464 = state_11424__$1;(statearr_11438_11464[2] = null);
(statearr_11438_11464[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11425 === 11))
{var inst_11378 = (state_11424[7]);var inst_11397 = cljs.core.nth.call(null,inst_11378,0,null);var inst_11398 = [new cljs.core.Keyword(null,"name","name",1017277949),new cljs.core.Keyword(null,"position","position",1761709211)];var inst_11399 = [name,inst_11397];var inst_11400 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_11398,inst_11399);var inst_11401 = [new cljs.core.Keyword(null,"released","released",4757572783),inst_11400];var inst_11402 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_11401,null));var inst_11403 = [new cljs.core.Keyword(null,"draggable","draggable",709423359),inst_11402];var inst_11404 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_11403,null));var inst_11405 = cljs.core.async.put_BANG_.call(null,comm,inst_11404);var inst_11406 = cljs.core.reset_BANG_.call(null,growingtree_app.components.draggable_window.local_dragging_QMARK_,false);var state_11424__$1 = (function (){var statearr_11439 = state_11424;(statearr_11439[11] = inst_11405);
return statearr_11439;
})();var statearr_11440_11465 = state_11424__$1;(statearr_11440_11465[2] = inst_11406);
(statearr_11440_11465[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11425 === 12))
{var inst_11380 = (state_11424[8]);var inst_11408 = cljs.core._EQ_.call(null,inst_11380,new cljs.core.Keyword(null,"default","default",2558708147));var state_11424__$1 = state_11424;if(inst_11408)
{var statearr_11441_11466 = state_11424__$1;(statearr_11441_11466[1] = 14);
} else
{var statearr_11442_11467 = state_11424__$1;(statearr_11442_11467[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11425 === 13))
{var inst_11414 = (state_11424[2]);var state_11424__$1 = state_11424;var statearr_11443_11468 = state_11424__$1;(statearr_11443_11468[2] = inst_11414);
(statearr_11443_11468[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11425 === 14))
{var inst_11379 = (state_11424[9]);var state_11424__$1 = state_11424;var statearr_11444_11469 = state_11424__$1;(statearr_11444_11469[2] = inst_11379);
(statearr_11444_11469[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11425 === 15))
{var state_11424__$1 = state_11424;var statearr_11445_11470 = state_11424__$1;(statearr_11445_11470[2] = null);
(statearr_11445_11470[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11425 === 16))
{var inst_11412 = (state_11424[2]);var state_11424__$1 = state_11424;var statearr_11446_11471 = state_11424__$1;(statearr_11446_11471[2] = inst_11412);
(statearr_11446_11471[1] = 13);
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
var state_machine__6119__auto____0 = (function (){var statearr_11450 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11450[0] = state_machine__6119__auto__);
(statearr_11450[1] = 1);
return statearr_11450;
});
var state_machine__6119__auto____1 = (function (state_11424){while(true){
var ret_value__6120__auto__ = (function (){try{while(true){
var result__6121__auto__ = switch__6118__auto__.call(null,state_11424);if(cljs.core.keyword_identical_QMARK_.call(null,result__6121__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6121__auto__;
}
break;
}
}catch (e11451){if((e11451 instanceof Object))
{var ex__6122__auto__ = e11451;var statearr_11452_11472 = state_11424;(statearr_11452_11472[5] = ex__6122__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11424);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11451;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6120__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11473 = state_11424;
state_11424 = G__11473;
continue;
}
} else
{return ret_value__6120__auto__;
}
break;
}
});
state_machine__6119__auto__ = function(state_11424){
switch(arguments.length){
case 0:
return state_machine__6119__auto____0.call(this);
case 1:
return state_machine__6119__auto____1.call(this,state_11424);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6119__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6119__auto____0;
state_machine__6119__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6119__auto____1;
return state_machine__6119__auto__;
})()
;})(switch__6118__auto__))
})();var state__6190__auto__ = (function (){var statearr_11453 = f__6189__auto__.call(null);(statearr_11453[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6188__auto__);
return statearr_11453;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6190__auto__);
}));
return c__6188__auto__;
});
growingtree_app.components.draggable_window.t11364.prototype.om$core$IDisplayName$ = true;
growingtree_app.components.draggable_window.t11364.prototype.om$core$IDisplayName$display_name$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var or__3443__auto__ = new cljs.core.Keyword(null,"react-name","react-name",4800236939).cljs$core$IFn$_invoke$arity$1(self__.opts);if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{return "DraggableWindow";
}
});
growingtree_app.components.draggable_window.t11364.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11366){var self__ = this;
var _11366__$1 = this;return self__.meta11365;
});
growingtree_app.components.draggable_window.t11364.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11366,meta11365__$1){var self__ = this;
var _11366__$1 = this;return (new growingtree_app.components.draggable_window.t11364(self__.opts,self__.owner,self__.data,self__.draggable_window,meta11365__$1));
});
growingtree_app.components.draggable_window.__GT_t11364 = (function __GT_t11364(opts__$1,owner__$1,data__$1,draggable_window__$1,meta11365){return (new growingtree_app.components.draggable_window.t11364(opts__$1,owner__$1,data__$1,draggable_window__$1,meta11365));
});
}
return (new growingtree_app.components.draggable_window.t11364(opts,owner,data,draggable_window,null));
});

//# sourceMappingURL=draggable_window.js.map