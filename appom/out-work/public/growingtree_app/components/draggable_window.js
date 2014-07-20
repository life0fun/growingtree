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
growingtree_app.components.draggable_window.draggable_window = (function draggable_window(data,owner,opts){if(typeof growingtree_app.components.draggable_window.t11167 !== 'undefined')
{} else
{
/**
* @constructor
*/
growingtree_app.components.draggable_window.t11167 = (function (opts,owner,data,draggable_window,meta11168){
this.opts = opts;
this.owner = owner;
this.data = data;
this.draggable_window = draggable_window;
this.meta11168 = meta11168;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
growingtree_app.components.draggable_window.t11167.cljs$lang$type = true;
growingtree_app.components.draggable_window.t11167.cljs$lang$ctorStr = "growingtree-app.components.draggable-window/t11167";
growingtree_app.components.draggable_window.t11167.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"growingtree-app.components.draggable-window/t11167");
});
growingtree_app.components.draggable_window.t11167.prototype.om$core$IRender$ = true;
growingtree_app.components.draggable_window.t11167.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return sablono.interpreter.interpret.call(null,(function (){var map__11170 = self__.data;var map__11170__$1 = ((cljs.core.seq_QMARK_.call(null,map__11170))?cljs.core.apply.call(null,cljs.core.hash_map,map__11170):map__11170);var window = cljs.core.get.call(null,map__11170__$1,new cljs.core.Keyword(null,"window","window",4521119586));var name = cljs.core.get.call(null,map__11170__$1,new cljs.core.Keyword(null,"name","name",1017277949));var comm = cljs.core.get.call(null,map__11170__$1,new cljs.core.Keyword(null,"comm","comm",1016963710));return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.draggable-window","div.draggable-window",2251704159),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",1123684643),(function (){var temp__4092__auto__ = new cljs.core.Keyword(null,"position","position",1761709211).cljs$core$IFn$_invoke$arity$1(window);if(cljs.core.truth_(temp__4092__auto__))
{var pos = temp__4092__auto__;return {"left": cljs.core.first.call(null,pos), "top": cljs.core.last.call(null,pos), "position": "fixed"};
} else
{return null;
}
})()], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row.modal-header","div.row.modal-header",3055554672),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-lg-12","div.col-lg-12",4751944571),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",1123684643),cljs.core.clj__GT_js.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"background-color","background-color",1619226998),(cljs.core.truth_(new cljs.core.Keyword(null,"dragging?","dragging?",709673026).cljs$core$IFn$_invoke$arity$1(window))?"#050":"#500"),new cljs.core.Keyword(null,"color","color",1108746965),"white",new cljs.core.Keyword(null,"text-align","text-align",1760136663),"center"], null))),new cljs.core.Keyword(null,"onMouseDown","onMouseDown",1569008442),(function (p1__11076_SHARP_){cljs.core.reset_BANG_.call(null,growingtree_app.components.draggable_window.local_dragging_QMARK_,true);
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"draggable","draggable",709423359),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"grabbed","grabbed",1293824551),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),name,new cljs.core.Keyword(null,"position","position",1761709211),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__11076_SHARP_.clientX,p1__11076_SHARP_.clientY], null)], null)], null)], null));
})], null)),new cljs.core.Keyword(null,"title","title",1124275658).cljs$core$IFn$_invoke$arity$1(self__.data)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",2686478959),om.core.build.call(null,new cljs.core.Keyword(null,"content-com","content-com",623589791).cljs$core$IFn$_invoke$arity$1(self__.data),new cljs.core.Keyword(null,"content-data","content-data",1799074800).cljs$core$IFn$_invoke$arity$1(self__.data),new cljs.core.Keyword(null,"content-opts","content-opts",1799416934).cljs$core$IFn$_invoke$arity$1(self__.data))], null)], null);
})());
});
growingtree_app.components.draggable_window.t11167.prototype.om$core$IWillMount$ = true;
growingtree_app.components.draggable_window.t11167.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var mouse_move_chan = cljs.core.async.map.call(null,(function (e){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e.clientX,e.clientY], null);
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [growingtree_app.components.draggable_window.listen.call(null,window,"mousemove")], null));var mouse_up_chan = cljs.core.async.map.call(null,((function (mouse_move_chan){
return (function (e){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e.clientX,e.clientY], null);
});})(mouse_move_chan))
,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [growingtree_app.components.draggable_window.listen.call(null,window,"mouseup")], null));var comm = new cljs.core.Keyword(null,"comm","comm",1016963710).cljs$core$IFn$_invoke$arity$1(self__.data);var name = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.data);var c__6188__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6189__auto__ = (function (){var switch__6118__auto__ = (function (state_11227){var state_val_11228 = (state_11227[1]);if((state_val_11228 === 1))
{var state_11227__$1 = state_11227;var statearr_11229_11257 = state_11227__$1;(statearr_11229_11257[2] = null);
(statearr_11229_11257[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11228 === 2))
{var state_11227__$1 = state_11227;if(true)
{var statearr_11230_11258 = state_11227__$1;(statearr_11230_11258[1] = 4);
} else
{var statearr_11231_11259 = state_11227__$1;(statearr_11231_11259[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11228 === 3))
{var inst_11225 = (state_11227[2]);var state_11227__$1 = state_11227;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11227__$1,inst_11225);
} else
{if((state_val_11228 === 4))
{var inst_11178 = [mouse_move_chan,mouse_up_chan];var inst_11179 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_11178,null));var state_11227__$1 = state_11227;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_11227__$1,7,inst_11179);
} else
{if((state_val_11228 === 5))
{var state_11227__$1 = state_11227;var statearr_11232_11260 = state_11227__$1;(statearr_11232_11260[2] = null);
(statearr_11232_11260[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11228 === 6))
{var inst_11223 = (state_11227[2]);var state_11227__$1 = state_11227;var statearr_11233_11261 = state_11227__$1;(statearr_11233_11261[2] = inst_11223);
(statearr_11233_11261[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11228 === 7))
{var inst_11181 = (state_11227[7]);var inst_11183 = (state_11227[8]);var inst_11181__$1 = (state_11227[2]);var inst_11182 = cljs.core.nth.call(null,inst_11181__$1,0,null);var inst_11183__$1 = cljs.core.nth.call(null,inst_11181__$1,1,null);var inst_11184 = cljs.core._EQ_.call(null,inst_11183__$1,mouse_move_chan);var state_11227__$1 = (function (){var statearr_11234 = state_11227;(statearr_11234[7] = inst_11181__$1);
(statearr_11234[8] = inst_11183__$1);
(statearr_11234[9] = inst_11182);
return statearr_11234;
})();if(inst_11184)
{var statearr_11235_11262 = state_11227__$1;(statearr_11235_11262[1] = 8);
} else
{var statearr_11236_11263 = state_11227__$1;(statearr_11236_11263[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11228 === 8))
{var inst_11181 = (state_11227[7]);var inst_11187 = cljs.core.nth.call(null,inst_11181,0,null);var inst_11188 = [new cljs.core.Keyword(null,"name","name",1017277949),new cljs.core.Keyword(null,"position","position",1761709211)];var inst_11189 = [name,inst_11187];var inst_11190 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_11188,inst_11189);var inst_11191 = [new cljs.core.Keyword(null,"mouse-moved","mouse-moved",753447677),inst_11190];var inst_11192 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_11191,null));var inst_11193 = [new cljs.core.Keyword(null,"draggable","draggable",709423359),inst_11192];var inst_11194 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_11193,null));var inst_11195 = cljs.core.async.put_BANG_.call(null,comm,inst_11194);var state_11227__$1 = state_11227;var statearr_11237_11264 = state_11227__$1;(statearr_11237_11264[2] = inst_11195);
(statearr_11237_11264[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11228 === 9))
{var inst_11183 = (state_11227[8]);var inst_11197 = cljs.core._EQ_.call(null,inst_11183,mouse_up_chan);var state_11227__$1 = state_11227;if(inst_11197)
{var statearr_11238_11265 = state_11227__$1;(statearr_11238_11265[1] = 11);
} else
{var statearr_11239_11266 = state_11227__$1;(statearr_11239_11266[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11228 === 10))
{var inst_11219 = (state_11227[2]);var state_11227__$1 = (function (){var statearr_11240 = state_11227;(statearr_11240[10] = inst_11219);
return statearr_11240;
})();var statearr_11241_11267 = state_11227__$1;(statearr_11241_11267[2] = null);
(statearr_11241_11267[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11228 === 11))
{var inst_11181 = (state_11227[7]);var inst_11200 = cljs.core.nth.call(null,inst_11181,0,null);var inst_11201 = [new cljs.core.Keyword(null,"name","name",1017277949),new cljs.core.Keyword(null,"position","position",1761709211)];var inst_11202 = [name,inst_11200];var inst_11203 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_11201,inst_11202);var inst_11204 = [new cljs.core.Keyword(null,"released","released",4757572783),inst_11203];var inst_11205 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_11204,null));var inst_11206 = [new cljs.core.Keyword(null,"draggable","draggable",709423359),inst_11205];var inst_11207 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_11206,null));var inst_11208 = cljs.core.async.put_BANG_.call(null,comm,inst_11207);var inst_11209 = cljs.core.reset_BANG_.call(null,growingtree_app.components.draggable_window.local_dragging_QMARK_,false);var state_11227__$1 = (function (){var statearr_11242 = state_11227;(statearr_11242[11] = inst_11208);
return statearr_11242;
})();var statearr_11243_11268 = state_11227__$1;(statearr_11243_11268[2] = inst_11209);
(statearr_11243_11268[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11228 === 12))
{var inst_11183 = (state_11227[8]);var inst_11211 = cljs.core._EQ_.call(null,inst_11183,new cljs.core.Keyword(null,"default","default",2558708147));var state_11227__$1 = state_11227;if(inst_11211)
{var statearr_11244_11269 = state_11227__$1;(statearr_11244_11269[1] = 14);
} else
{var statearr_11245_11270 = state_11227__$1;(statearr_11245_11270[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11228 === 13))
{var inst_11217 = (state_11227[2]);var state_11227__$1 = state_11227;var statearr_11246_11271 = state_11227__$1;(statearr_11246_11271[2] = inst_11217);
(statearr_11246_11271[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11228 === 14))
{var inst_11182 = (state_11227[9]);var state_11227__$1 = state_11227;var statearr_11247_11272 = state_11227__$1;(statearr_11247_11272[2] = inst_11182);
(statearr_11247_11272[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11228 === 15))
{var state_11227__$1 = state_11227;var statearr_11248_11273 = state_11227__$1;(statearr_11248_11273[2] = null);
(statearr_11248_11273[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11228 === 16))
{var inst_11215 = (state_11227[2]);var state_11227__$1 = state_11227;var statearr_11249_11274 = state_11227__$1;(statearr_11249_11274[2] = inst_11215);
(statearr_11249_11274[1] = 13);
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
var state_machine__6119__auto____0 = (function (){var statearr_11253 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11253[0] = state_machine__6119__auto__);
(statearr_11253[1] = 1);
return statearr_11253;
});
var state_machine__6119__auto____1 = (function (state_11227){while(true){
var ret_value__6120__auto__ = (function (){try{while(true){
var result__6121__auto__ = switch__6118__auto__.call(null,state_11227);if(cljs.core.keyword_identical_QMARK_.call(null,result__6121__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6121__auto__;
}
break;
}
}catch (e11254){if((e11254 instanceof Object))
{var ex__6122__auto__ = e11254;var statearr_11255_11275 = state_11227;(statearr_11255_11275[5] = ex__6122__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11227);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11254;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6120__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11276 = state_11227;
state_11227 = G__11276;
continue;
}
} else
{return ret_value__6120__auto__;
}
break;
}
});
state_machine__6119__auto__ = function(state_11227){
switch(arguments.length){
case 0:
return state_machine__6119__auto____0.call(this);
case 1:
return state_machine__6119__auto____1.call(this,state_11227);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6119__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6119__auto____0;
state_machine__6119__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6119__auto____1;
return state_machine__6119__auto__;
})()
;})(switch__6118__auto__))
})();var state__6190__auto__ = (function (){var statearr_11256 = f__6189__auto__.call(null);(statearr_11256[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6188__auto__);
return statearr_11256;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6190__auto__);
}));
return c__6188__auto__;
});
growingtree_app.components.draggable_window.t11167.prototype.om$core$IDisplayName$ = true;
growingtree_app.components.draggable_window.t11167.prototype.om$core$IDisplayName$display_name$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var or__3443__auto__ = new cljs.core.Keyword(null,"react-name","react-name",4800236939).cljs$core$IFn$_invoke$arity$1(self__.opts);if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{return "DraggableWindow";
}
});
growingtree_app.components.draggable_window.t11167.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11169){var self__ = this;
var _11169__$1 = this;return self__.meta11168;
});
growingtree_app.components.draggable_window.t11167.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11169,meta11168__$1){var self__ = this;
var _11169__$1 = this;return (new growingtree_app.components.draggable_window.t11167(self__.opts,self__.owner,self__.data,self__.draggable_window,meta11168__$1));
});
growingtree_app.components.draggable_window.__GT_t11167 = (function __GT_t11167(opts__$1,owner__$1,data__$1,draggable_window__$1,meta11168){return (new growingtree_app.components.draggable_window.t11167(opts__$1,owner__$1,data__$1,draggable_window__$1,meta11168));
});
}
return (new growingtree_app.components.draggable_window.t11167(opts,owner,data,draggable_window,null));
});

//# sourceMappingURL=draggable_window.js.map