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
growingtree_app.components.draggable_window.draggable_window = (function draggable_window(data,owner,opts){if(typeof growingtree_app.components.draggable_window.t11074 !== 'undefined')
{} else
{
/**
* @constructor
*/
growingtree_app.components.draggable_window.t11074 = (function (opts,owner,data,draggable_window,meta11075){
this.opts = opts;
this.owner = owner;
this.data = data;
this.draggable_window = draggable_window;
this.meta11075 = meta11075;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
growingtree_app.components.draggable_window.t11074.cljs$lang$type = true;
growingtree_app.components.draggable_window.t11074.cljs$lang$ctorStr = "growingtree-app.components.draggable-window/t11074";
growingtree_app.components.draggable_window.t11074.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"growingtree-app.components.draggable-window/t11074");
});
growingtree_app.components.draggable_window.t11074.prototype.om$core$IRender$ = true;
growingtree_app.components.draggable_window.t11074.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return sablono.interpreter.interpret.call(null,(function (){var map__11077 = self__.data;var map__11077__$1 = ((cljs.core.seq_QMARK_.call(null,map__11077))?cljs.core.apply.call(null,cljs.core.hash_map,map__11077):map__11077);var window = cljs.core.get.call(null,map__11077__$1,new cljs.core.Keyword(null,"window","window",4521119586));var name = cljs.core.get.call(null,map__11077__$1,new cljs.core.Keyword(null,"name","name",1017277949));var comm = cljs.core.get.call(null,map__11077__$1,new cljs.core.Keyword(null,"comm","comm",1016963710));return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.draggable-window","div.draggable-window",2251704159),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",1123684643),(function (){var temp__4092__auto__ = new cljs.core.Keyword(null,"position","position",1761709211).cljs$core$IFn$_invoke$arity$1(window);if(cljs.core.truth_(temp__4092__auto__))
{var pos = temp__4092__auto__;return {"left": cljs.core.first.call(null,pos), "top": cljs.core.last.call(null,pos), "position": "fixed"};
} else
{return null;
}
})()], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row.modal-header","div.row.modal-header",3055554672),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-lg-12","div.col-lg-12",4751944571),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",1123684643),cljs.core.clj__GT_js.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"background-color","background-color",1619226998),(cljs.core.truth_(new cljs.core.Keyword(null,"dragging?","dragging?",709673026).cljs$core$IFn$_invoke$arity$1(window))?"#050":"#500"),new cljs.core.Keyword(null,"color","color",1108746965),"white",new cljs.core.Keyword(null,"text-align","text-align",1760136663),"center"], null))),new cljs.core.Keyword(null,"onMouseDown","onMouseDown",1569008442),(function (p1__10983_SHARP_){cljs.core.reset_BANG_.call(null,growingtree_app.components.draggable_window.local_dragging_QMARK_,true);
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"draggable","draggable",709423359),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"grabbed","grabbed",1293824551),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),name,new cljs.core.Keyword(null,"position","position",1761709211),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__10983_SHARP_.clientX,p1__10983_SHARP_.clientY], null)], null)], null)], null));
})], null)),new cljs.core.Keyword(null,"title","title",1124275658).cljs$core$IFn$_invoke$arity$1(self__.data)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",2686478959),om.core.build.call(null,new cljs.core.Keyword(null,"content-com","content-com",623589791).cljs$core$IFn$_invoke$arity$1(self__.data),new cljs.core.Keyword(null,"content-data","content-data",1799074800).cljs$core$IFn$_invoke$arity$1(self__.data),new cljs.core.Keyword(null,"content-opts","content-opts",1799416934).cljs$core$IFn$_invoke$arity$1(self__.data))], null)], null);
})());
});
growingtree_app.components.draggable_window.t11074.prototype.om$core$IWillMount$ = true;
growingtree_app.components.draggable_window.t11074.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var mouse_move_chan = cljs.core.async.map.call(null,(function (e){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e.clientX,e.clientY], null);
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [growingtree_app.components.draggable_window.listen.call(null,window,"mousemove")], null));var mouse_up_chan = cljs.core.async.map.call(null,((function (mouse_move_chan){
return (function (e){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e.clientX,e.clientY], null);
});})(mouse_move_chan))
,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [growingtree_app.components.draggable_window.listen.call(null,window,"mouseup")], null));var comm = new cljs.core.Keyword(null,"comm","comm",1016963710).cljs$core$IFn$_invoke$arity$1(self__.data);var name = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.data);var c__6068__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6069__auto__ = (function (){var switch__5998__auto__ = (function (state_11134){var state_val_11135 = (state_11134[1]);if((state_val_11135 === 1))
{var state_11134__$1 = state_11134;var statearr_11136_11164 = state_11134__$1;(statearr_11136_11164[2] = null);
(statearr_11136_11164[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11135 === 2))
{var state_11134__$1 = state_11134;if(true)
{var statearr_11137_11165 = state_11134__$1;(statearr_11137_11165[1] = 4);
} else
{var statearr_11138_11166 = state_11134__$1;(statearr_11138_11166[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11135 === 3))
{var inst_11132 = (state_11134[2]);var state_11134__$1 = state_11134;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11134__$1,inst_11132);
} else
{if((state_val_11135 === 4))
{var inst_11085 = [mouse_move_chan,mouse_up_chan];var inst_11086 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_11085,null));var state_11134__$1 = state_11134;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_11134__$1,7,inst_11086);
} else
{if((state_val_11135 === 5))
{var state_11134__$1 = state_11134;var statearr_11139_11167 = state_11134__$1;(statearr_11139_11167[2] = null);
(statearr_11139_11167[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11135 === 6))
{var inst_11130 = (state_11134[2]);var state_11134__$1 = state_11134;var statearr_11140_11168 = state_11134__$1;(statearr_11140_11168[2] = inst_11130);
(statearr_11140_11168[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11135 === 7))
{var inst_11088 = (state_11134[7]);var inst_11090 = (state_11134[8]);var inst_11088__$1 = (state_11134[2]);var inst_11089 = cljs.core.nth.call(null,inst_11088__$1,0,null);var inst_11090__$1 = cljs.core.nth.call(null,inst_11088__$1,1,null);var inst_11091 = cljs.core._EQ_.call(null,inst_11090__$1,mouse_move_chan);var state_11134__$1 = (function (){var statearr_11141 = state_11134;(statearr_11141[9] = inst_11089);
(statearr_11141[7] = inst_11088__$1);
(statearr_11141[8] = inst_11090__$1);
return statearr_11141;
})();if(inst_11091)
{var statearr_11142_11169 = state_11134__$1;(statearr_11142_11169[1] = 8);
} else
{var statearr_11143_11170 = state_11134__$1;(statearr_11143_11170[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11135 === 8))
{var inst_11088 = (state_11134[7]);var inst_11094 = cljs.core.nth.call(null,inst_11088,0,null);var inst_11095 = [new cljs.core.Keyword(null,"name","name",1017277949),new cljs.core.Keyword(null,"position","position",1761709211)];var inst_11096 = [name,inst_11094];var inst_11097 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_11095,inst_11096);var inst_11098 = [new cljs.core.Keyword(null,"mouse-moved","mouse-moved",753447677),inst_11097];var inst_11099 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_11098,null));var inst_11100 = [new cljs.core.Keyword(null,"draggable","draggable",709423359),inst_11099];var inst_11101 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_11100,null));var inst_11102 = cljs.core.async.put_BANG_.call(null,comm,inst_11101);var state_11134__$1 = state_11134;var statearr_11144_11171 = state_11134__$1;(statearr_11144_11171[2] = inst_11102);
(statearr_11144_11171[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11135 === 9))
{var inst_11090 = (state_11134[8]);var inst_11104 = cljs.core._EQ_.call(null,inst_11090,mouse_up_chan);var state_11134__$1 = state_11134;if(inst_11104)
{var statearr_11145_11172 = state_11134__$1;(statearr_11145_11172[1] = 11);
} else
{var statearr_11146_11173 = state_11134__$1;(statearr_11146_11173[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11135 === 10))
{var inst_11126 = (state_11134[2]);var state_11134__$1 = (function (){var statearr_11147 = state_11134;(statearr_11147[10] = inst_11126);
return statearr_11147;
})();var statearr_11148_11174 = state_11134__$1;(statearr_11148_11174[2] = null);
(statearr_11148_11174[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11135 === 11))
{var inst_11088 = (state_11134[7]);var inst_11107 = cljs.core.nth.call(null,inst_11088,0,null);var inst_11108 = [new cljs.core.Keyword(null,"name","name",1017277949),new cljs.core.Keyword(null,"position","position",1761709211)];var inst_11109 = [name,inst_11107];var inst_11110 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_11108,inst_11109);var inst_11111 = [new cljs.core.Keyword(null,"released","released",4757572783),inst_11110];var inst_11112 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_11111,null));var inst_11113 = [new cljs.core.Keyword(null,"draggable","draggable",709423359),inst_11112];var inst_11114 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_11113,null));var inst_11115 = cljs.core.async.put_BANG_.call(null,comm,inst_11114);var inst_11116 = cljs.core.reset_BANG_.call(null,growingtree_app.components.draggable_window.local_dragging_QMARK_,false);var state_11134__$1 = (function (){var statearr_11149 = state_11134;(statearr_11149[11] = inst_11115);
return statearr_11149;
})();var statearr_11150_11175 = state_11134__$1;(statearr_11150_11175[2] = inst_11116);
(statearr_11150_11175[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11135 === 12))
{var inst_11090 = (state_11134[8]);var inst_11118 = cljs.core._EQ_.call(null,inst_11090,new cljs.core.Keyword(null,"default","default",2558708147));var state_11134__$1 = state_11134;if(inst_11118)
{var statearr_11151_11176 = state_11134__$1;(statearr_11151_11176[1] = 14);
} else
{var statearr_11152_11177 = state_11134__$1;(statearr_11152_11177[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11135 === 13))
{var inst_11124 = (state_11134[2]);var state_11134__$1 = state_11134;var statearr_11153_11178 = state_11134__$1;(statearr_11153_11178[2] = inst_11124);
(statearr_11153_11178[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11135 === 14))
{var inst_11089 = (state_11134[9]);var state_11134__$1 = state_11134;var statearr_11154_11179 = state_11134__$1;(statearr_11154_11179[2] = inst_11089);
(statearr_11154_11179[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11135 === 15))
{var state_11134__$1 = state_11134;var statearr_11155_11180 = state_11134__$1;(statearr_11155_11180[2] = null);
(statearr_11155_11180[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11135 === 16))
{var inst_11122 = (state_11134[2]);var state_11134__$1 = state_11134;var statearr_11156_11181 = state_11134__$1;(statearr_11156_11181[2] = inst_11122);
(statearr_11156_11181[1] = 13);
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
var state_machine__5999__auto____0 = (function (){var statearr_11160 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11160[0] = state_machine__5999__auto__);
(statearr_11160[1] = 1);
return statearr_11160;
});
var state_machine__5999__auto____1 = (function (state_11134){while(true){
var ret_value__6000__auto__ = (function (){try{while(true){
var result__6001__auto__ = switch__5998__auto__.call(null,state_11134);if(cljs.core.keyword_identical_QMARK_.call(null,result__6001__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6001__auto__;
}
break;
}
}catch (e11161){if((e11161 instanceof Object))
{var ex__6002__auto__ = e11161;var statearr_11162_11182 = state_11134;(statearr_11162_11182[5] = ex__6002__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11134);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11161;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6000__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11183 = state_11134;
state_11134 = G__11183;
continue;
}
} else
{return ret_value__6000__auto__;
}
break;
}
});
state_machine__5999__auto__ = function(state_11134){
switch(arguments.length){
case 0:
return state_machine__5999__auto____0.call(this);
case 1:
return state_machine__5999__auto____1.call(this,state_11134);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5999__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5999__auto____0;
state_machine__5999__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5999__auto____1;
return state_machine__5999__auto__;
})()
;})(switch__5998__auto__))
})();var state__6070__auto__ = (function (){var statearr_11163 = f__6069__auto__.call(null);(statearr_11163[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6068__auto__);
return statearr_11163;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6070__auto__);
}));
return c__6068__auto__;
});
growingtree_app.components.draggable_window.t11074.prototype.om$core$IDisplayName$ = true;
growingtree_app.components.draggable_window.t11074.prototype.om$core$IDisplayName$display_name$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var or__3443__auto__ = new cljs.core.Keyword(null,"react-name","react-name",4800236939).cljs$core$IFn$_invoke$arity$1(self__.opts);if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{return "DraggableWindow";
}
});
growingtree_app.components.draggable_window.t11074.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11076){var self__ = this;
var _11076__$1 = this;return self__.meta11075;
});
growingtree_app.components.draggable_window.t11074.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11076,meta11075__$1){var self__ = this;
var _11076__$1 = this;return (new growingtree_app.components.draggable_window.t11074(self__.opts,self__.owner,self__.data,self__.draggable_window,meta11075__$1));
});
growingtree_app.components.draggable_window.__GT_t11074 = (function __GT_t11074(opts__$1,owner__$1,data__$1,draggable_window__$1,meta11075){return (new growingtree_app.components.draggable_window.t11074(opts__$1,owner__$1,data__$1,draggable_window__$1,meta11075));
});
}
return (new growingtree_app.components.draggable_window.t11074(opts,owner,data,draggable_window,null));
});

//# sourceMappingURL=draggable_window.js.map