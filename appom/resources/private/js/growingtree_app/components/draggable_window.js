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
growingtree_app.components.draggable_window.draggable_window = (function draggable_window(data,owner,opts){if(typeof growingtree_app.components.draggable_window.t11082 !== 'undefined')
{} else
{
/**
* @constructor
*/
growingtree_app.components.draggable_window.t11082 = (function (opts,owner,data,draggable_window,meta11083){
this.opts = opts;
this.owner = owner;
this.data = data;
this.draggable_window = draggable_window;
this.meta11083 = meta11083;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
growingtree_app.components.draggable_window.t11082.cljs$lang$type = true;
growingtree_app.components.draggable_window.t11082.cljs$lang$ctorStr = "growingtree-app.components.draggable-window/t11082";
growingtree_app.components.draggable_window.t11082.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"growingtree-app.components.draggable-window/t11082");
});
growingtree_app.components.draggable_window.t11082.prototype.om$core$IRender$ = true;
growingtree_app.components.draggable_window.t11082.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return sablono.interpreter.interpret.call(null,(function (){var map__11085 = self__.data;var map__11085__$1 = ((cljs.core.seq_QMARK_.call(null,map__11085))?cljs.core.apply.call(null,cljs.core.hash_map,map__11085):map__11085);var window = cljs.core.get.call(null,map__11085__$1,new cljs.core.Keyword(null,"window","window",4521119586));var name = cljs.core.get.call(null,map__11085__$1,new cljs.core.Keyword(null,"name","name",1017277949));var comm = cljs.core.get.call(null,map__11085__$1,new cljs.core.Keyword(null,"comm","comm",1016963710));return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.draggable-window","div.draggable-window",2251704159),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",1123684643),(function (){var temp__4092__auto__ = new cljs.core.Keyword(null,"position","position",1761709211).cljs$core$IFn$_invoke$arity$1(window);if(cljs.core.truth_(temp__4092__auto__))
{var pos = temp__4092__auto__;return {"left": cljs.core.first.call(null,pos), "top": cljs.core.last.call(null,pos), "position": "fixed"};
} else
{return null;
}
})()], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row.modal-header","div.row.modal-header",3055554672),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-lg-12","div.col-lg-12",4751944571),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",1123684643),cljs.core.clj__GT_js.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"background-color","background-color",1619226998),(cljs.core.truth_(new cljs.core.Keyword(null,"dragging?","dragging?",709673026).cljs$core$IFn$_invoke$arity$1(window))?"#050":"#500"),new cljs.core.Keyword(null,"color","color",1108746965),"white",new cljs.core.Keyword(null,"text-align","text-align",1760136663),"center"], null))),new cljs.core.Keyword(null,"onMouseDown","onMouseDown",1569008442),(function (p1__10991_SHARP_){cljs.core.reset_BANG_.call(null,growingtree_app.components.draggable_window.local_dragging_QMARK_,true);
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"draggable","draggable",709423359),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"grabbed","grabbed",1293824551),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),name,new cljs.core.Keyword(null,"position","position",1761709211),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__10991_SHARP_.clientX,p1__10991_SHARP_.clientY], null)], null)], null)], null));
})], null)),new cljs.core.Keyword(null,"title","title",1124275658).cljs$core$IFn$_invoke$arity$1(self__.data)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",2686478959),om.core.build.call(null,new cljs.core.Keyword(null,"content-com","content-com",623589791).cljs$core$IFn$_invoke$arity$1(self__.data),new cljs.core.Keyword(null,"content-data","content-data",1799074800).cljs$core$IFn$_invoke$arity$1(self__.data),new cljs.core.Keyword(null,"content-opts","content-opts",1799416934).cljs$core$IFn$_invoke$arity$1(self__.data))], null)], null);
})());
});
growingtree_app.components.draggable_window.t11082.prototype.om$core$IWillMount$ = true;
growingtree_app.components.draggable_window.t11082.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var mouse_move_chan = cljs.core.async.map.call(null,(function (e){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e.clientX,e.clientY], null);
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [growingtree_app.components.draggable_window.listen.call(null,window,"mousemove")], null));var mouse_up_chan = cljs.core.async.map.call(null,((function (mouse_move_chan){
return (function (e){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e.clientX,e.clientY], null);
});})(mouse_move_chan))
,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [growingtree_app.components.draggable_window.listen.call(null,window,"mouseup")], null));var comm = new cljs.core.Keyword(null,"comm","comm",1016963710).cljs$core$IFn$_invoke$arity$1(self__.data);var name = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.data);var c__6068__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6069__auto__ = (function (){var switch__5998__auto__ = (function (state_11142){var state_val_11143 = (state_11142[1]);if((state_val_11143 === 1))
{var state_11142__$1 = state_11142;var statearr_11144_11172 = state_11142__$1;(statearr_11144_11172[2] = null);
(statearr_11144_11172[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11143 === 2))
{var state_11142__$1 = state_11142;if(true)
{var statearr_11145_11173 = state_11142__$1;(statearr_11145_11173[1] = 4);
} else
{var statearr_11146_11174 = state_11142__$1;(statearr_11146_11174[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11143 === 3))
{var inst_11140 = (state_11142[2]);var state_11142__$1 = state_11142;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11142__$1,inst_11140);
} else
{if((state_val_11143 === 4))
{var inst_11093 = [mouse_move_chan,mouse_up_chan];var inst_11094 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_11093,null));var state_11142__$1 = state_11142;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_11142__$1,7,inst_11094);
} else
{if((state_val_11143 === 5))
{var state_11142__$1 = state_11142;var statearr_11147_11175 = state_11142__$1;(statearr_11147_11175[2] = null);
(statearr_11147_11175[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11143 === 6))
{var inst_11138 = (state_11142[2]);var state_11142__$1 = state_11142;var statearr_11148_11176 = state_11142__$1;(statearr_11148_11176[2] = inst_11138);
(statearr_11148_11176[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11143 === 7))
{var inst_11098 = (state_11142[7]);var inst_11096 = (state_11142[8]);var inst_11096__$1 = (state_11142[2]);var inst_11097 = cljs.core.nth.call(null,inst_11096__$1,0,null);var inst_11098__$1 = cljs.core.nth.call(null,inst_11096__$1,1,null);var inst_11099 = cljs.core._EQ_.call(null,inst_11098__$1,mouse_move_chan);var state_11142__$1 = (function (){var statearr_11149 = state_11142;(statearr_11149[7] = inst_11098__$1);
(statearr_11149[8] = inst_11096__$1);
(statearr_11149[9] = inst_11097);
return statearr_11149;
})();if(inst_11099)
{var statearr_11150_11177 = state_11142__$1;(statearr_11150_11177[1] = 8);
} else
{var statearr_11151_11178 = state_11142__$1;(statearr_11151_11178[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11143 === 8))
{var inst_11096 = (state_11142[8]);var inst_11102 = cljs.core.nth.call(null,inst_11096,0,null);var inst_11103 = [new cljs.core.Keyword(null,"name","name",1017277949),new cljs.core.Keyword(null,"position","position",1761709211)];var inst_11104 = [name,inst_11102];var inst_11105 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_11103,inst_11104);var inst_11106 = [new cljs.core.Keyword(null,"mouse-moved","mouse-moved",753447677),inst_11105];var inst_11107 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_11106,null));var inst_11108 = [new cljs.core.Keyword(null,"draggable","draggable",709423359),inst_11107];var inst_11109 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_11108,null));var inst_11110 = cljs.core.async.put_BANG_.call(null,comm,inst_11109);var state_11142__$1 = state_11142;var statearr_11152_11179 = state_11142__$1;(statearr_11152_11179[2] = inst_11110);
(statearr_11152_11179[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11143 === 9))
{var inst_11098 = (state_11142[7]);var inst_11112 = cljs.core._EQ_.call(null,inst_11098,mouse_up_chan);var state_11142__$1 = state_11142;if(inst_11112)
{var statearr_11153_11180 = state_11142__$1;(statearr_11153_11180[1] = 11);
} else
{var statearr_11154_11181 = state_11142__$1;(statearr_11154_11181[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11143 === 10))
{var inst_11134 = (state_11142[2]);var state_11142__$1 = (function (){var statearr_11155 = state_11142;(statearr_11155[10] = inst_11134);
return statearr_11155;
})();var statearr_11156_11182 = state_11142__$1;(statearr_11156_11182[2] = null);
(statearr_11156_11182[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11143 === 11))
{var inst_11096 = (state_11142[8]);var inst_11115 = cljs.core.nth.call(null,inst_11096,0,null);var inst_11116 = [new cljs.core.Keyword(null,"name","name",1017277949),new cljs.core.Keyword(null,"position","position",1761709211)];var inst_11117 = [name,inst_11115];var inst_11118 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_11116,inst_11117);var inst_11119 = [new cljs.core.Keyword(null,"released","released",4757572783),inst_11118];var inst_11120 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_11119,null));var inst_11121 = [new cljs.core.Keyword(null,"draggable","draggable",709423359),inst_11120];var inst_11122 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_11121,null));var inst_11123 = cljs.core.async.put_BANG_.call(null,comm,inst_11122);var inst_11124 = cljs.core.reset_BANG_.call(null,growingtree_app.components.draggable_window.local_dragging_QMARK_,false);var state_11142__$1 = (function (){var statearr_11157 = state_11142;(statearr_11157[11] = inst_11123);
return statearr_11157;
})();var statearr_11158_11183 = state_11142__$1;(statearr_11158_11183[2] = inst_11124);
(statearr_11158_11183[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11143 === 12))
{var inst_11098 = (state_11142[7]);var inst_11126 = cljs.core._EQ_.call(null,inst_11098,new cljs.core.Keyword(null,"default","default",2558708147));var state_11142__$1 = state_11142;if(inst_11126)
{var statearr_11159_11184 = state_11142__$1;(statearr_11159_11184[1] = 14);
} else
{var statearr_11160_11185 = state_11142__$1;(statearr_11160_11185[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11143 === 13))
{var inst_11132 = (state_11142[2]);var state_11142__$1 = state_11142;var statearr_11161_11186 = state_11142__$1;(statearr_11161_11186[2] = inst_11132);
(statearr_11161_11186[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11143 === 14))
{var inst_11097 = (state_11142[9]);var state_11142__$1 = state_11142;var statearr_11162_11187 = state_11142__$1;(statearr_11162_11187[2] = inst_11097);
(statearr_11162_11187[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11143 === 15))
{var state_11142__$1 = state_11142;var statearr_11163_11188 = state_11142__$1;(statearr_11163_11188[2] = null);
(statearr_11163_11188[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11143 === 16))
{var inst_11130 = (state_11142[2]);var state_11142__$1 = state_11142;var statearr_11164_11189 = state_11142__$1;(statearr_11164_11189[2] = inst_11130);
(statearr_11164_11189[1] = 13);
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
var state_machine__5999__auto____0 = (function (){var statearr_11168 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11168[0] = state_machine__5999__auto__);
(statearr_11168[1] = 1);
return statearr_11168;
});
var state_machine__5999__auto____1 = (function (state_11142){while(true){
var ret_value__6000__auto__ = (function (){try{while(true){
var result__6001__auto__ = switch__5998__auto__.call(null,state_11142);if(cljs.core.keyword_identical_QMARK_.call(null,result__6001__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6001__auto__;
}
break;
}
}catch (e11169){if((e11169 instanceof Object))
{var ex__6002__auto__ = e11169;var statearr_11170_11190 = state_11142;(statearr_11170_11190[5] = ex__6002__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11142);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11169;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6000__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11191 = state_11142;
state_11142 = G__11191;
continue;
}
} else
{return ret_value__6000__auto__;
}
break;
}
});
state_machine__5999__auto__ = function(state_11142){
switch(arguments.length){
case 0:
return state_machine__5999__auto____0.call(this);
case 1:
return state_machine__5999__auto____1.call(this,state_11142);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5999__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5999__auto____0;
state_machine__5999__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5999__auto____1;
return state_machine__5999__auto__;
})()
;})(switch__5998__auto__))
})();var state__6070__auto__ = (function (){var statearr_11171 = f__6069__auto__.call(null);(statearr_11171[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6068__auto__);
return statearr_11171;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6070__auto__);
}));
return c__6068__auto__;
});
growingtree_app.components.draggable_window.t11082.prototype.om$core$IDisplayName$ = true;
growingtree_app.components.draggable_window.t11082.prototype.om$core$IDisplayName$display_name$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var or__3443__auto__ = new cljs.core.Keyword(null,"react-name","react-name",4800236939).cljs$core$IFn$_invoke$arity$1(self__.opts);if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{return "DraggableWindow";
}
});
growingtree_app.components.draggable_window.t11082.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11084){var self__ = this;
var _11084__$1 = this;return self__.meta11083;
});
growingtree_app.components.draggable_window.t11082.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11084,meta11083__$1){var self__ = this;
var _11084__$1 = this;return (new growingtree_app.components.draggable_window.t11082(self__.opts,self__.owner,self__.data,self__.draggable_window,meta11083__$1));
});
growingtree_app.components.draggable_window.__GT_t11082 = (function __GT_t11082(opts__$1,owner__$1,data__$1,draggable_window__$1,meta11083){return (new growingtree_app.components.draggable_window.t11082(opts__$1,owner__$1,data__$1,draggable_window__$1,meta11083));
});
}
return (new growingtree_app.components.draggable_window.t11082(opts,owner,data,draggable_window,null));
});
