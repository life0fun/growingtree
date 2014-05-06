// Compiled by ClojureScript 0.0-2173
goog.provide('omchaya.components.draggable_window');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('omchaya.utils');
goog.require('sablono.core');
goog.require('cljs.core.async');
goog.require('goog.events');
goog.require('sablono.core');
goog.require('om.core');
goog.require('clojure.string');
goog.require('om.core');
goog.require('clojure.string');
goog.require('omchaya.utils');
goog.require('goog.events.EventType');
goog.require('cljs.core.async');
goog.require('goog.events');
omchaya.components.draggable_window.local_dragging_QMARK_ = cljs.core.atom.call(null,false);
omchaya.components.draggable_window.listen = (function listen(el,type){var out = cljs.core.async.chan.call(null);goog.events.listen(el,type,(function (event){if(cljs.core.truth_(cljs.core.deref.call(null,omchaya.components.draggable_window.local_dragging_QMARK_)))
{event.preventDefault();
} else
{}
return cljs.core.async.put_BANG_.call(null,out,event);
}));
return out;
});
omchaya.components.draggable_window.draggable_window = (function draggable_window(data,owner,opts){if(typeof omchaya.components.draggable_window.t22121 !== 'undefined')
{} else
{
/**
* @constructor
*/
omchaya.components.draggable_window.t22121 = (function (opts,owner,data,draggable_window,meta22122){
this.opts = opts;
this.owner = owner;
this.data = data;
this.draggable_window = draggable_window;
this.meta22122 = meta22122;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
omchaya.components.draggable_window.t22121.cljs$lang$type = true;
omchaya.components.draggable_window.t22121.cljs$lang$ctorStr = "omchaya.components.draggable-window/t22121";
omchaya.components.draggable_window.t22121.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"omchaya.components.draggable-window/t22121");
});
omchaya.components.draggable_window.t22121.prototype.om$core$IRender$ = true;
omchaya.components.draggable_window.t22121.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return sablono.interpreter.interpret.call(null,(function (){var map__22124 = self__.data;var map__22124__$1 = ((cljs.core.seq_QMARK_.call(null,map__22124))?cljs.core.apply.call(null,cljs.core.hash_map,map__22124):map__22124);var window = cljs.core.get.call(null,map__22124__$1,new cljs.core.Keyword(null,"window","window",4521119586));var name = cljs.core.get.call(null,map__22124__$1,new cljs.core.Keyword(null,"name","name",1017277949));var comm = cljs.core.get.call(null,map__22124__$1,new cljs.core.Keyword(null,"comm","comm",1016963710));return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.draggable-window","div.draggable-window",2251704159),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",1123684643),(function (){var temp__4092__auto__ = new cljs.core.Keyword(null,"position","position",1761709211).cljs$core$IFn$_invoke$arity$1(window);if(cljs.core.truth_(temp__4092__auto__))
{var pos = temp__4092__auto__;return {"left": cljs.core.first.call(null,pos), "top": cljs.core.last.call(null,pos), "position": "fixed"};
} else
{return null;
}
})()], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row.modal-header","div.row.modal-header",3055554672),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-lg-12","div.col-lg-12",4751944571),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",1123684643),cljs.core.clj__GT_js.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"background-color","background-color",1619226998),(cljs.core.truth_(new cljs.core.Keyword(null,"dragging?","dragging?",709673026).cljs$core$IFn$_invoke$arity$1(window))?"#050":"#500"),new cljs.core.Keyword(null,"color","color",1108746965),"white",new cljs.core.Keyword(null,"text-align","text-align",1760136663),"center"], null))),new cljs.core.Keyword(null,"onMouseDown","onMouseDown",1569008442),(function (p1__22030_SHARP_){cljs.core.reset_BANG_.call(null,omchaya.components.draggable_window.local_dragging_QMARK_,true);
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"draggable","draggable",709423359),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"grabbed","grabbed",1293824551),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),name,new cljs.core.Keyword(null,"position","position",1761709211),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__22030_SHARP_.clientX,p1__22030_SHARP_.clientY], null)], null)], null)], null));
})], null)),new cljs.core.Keyword(null,"title","title",1124275658).cljs$core$IFn$_invoke$arity$1(self__.data)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",2686478959),om.core.build.call(null,new cljs.core.Keyword(null,"content-com","content-com",623589791).cljs$core$IFn$_invoke$arity$1(self__.data),new cljs.core.Keyword(null,"content-data","content-data",1799074800).cljs$core$IFn$_invoke$arity$1(self__.data),new cljs.core.Keyword(null,"content-opts","content-opts",1799416934).cljs$core$IFn$_invoke$arity$1(self__.data))], null)], null);
})());
});
omchaya.components.draggable_window.t22121.prototype.om$core$IWillMount$ = true;
omchaya.components.draggable_window.t22121.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var mouse_move_chan = cljs.core.async.map.call(null,(function (e){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e.clientX,e.clientY], null);
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [omchaya.components.draggable_window.listen.call(null,window,"mousemove")], null));var mouse_up_chan = cljs.core.async.map.call(null,((function (mouse_move_chan){
return (function (e){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e.clientX,e.clientY], null);
});})(mouse_move_chan))
,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [omchaya.components.draggable_window.listen.call(null,window,"mouseup")], null));var comm = new cljs.core.Keyword(null,"comm","comm",1016963710).cljs$core$IFn$_invoke$arity$1(self__.data);var name = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.data);var c__6068__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6069__auto__ = (function (){var switch__5998__auto__ = (function (state_22181){var state_val_22182 = (state_22181[1]);if((state_val_22182 === 1))
{var state_22181__$1 = state_22181;var statearr_22183_22211 = state_22181__$1;(statearr_22183_22211[2] = null);
(statearr_22183_22211[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22182 === 2))
{var state_22181__$1 = state_22181;if(true)
{var statearr_22184_22212 = state_22181__$1;(statearr_22184_22212[1] = 4);
} else
{var statearr_22185_22213 = state_22181__$1;(statearr_22185_22213[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22182 === 3))
{var inst_22179 = (state_22181[2]);var state_22181__$1 = state_22181;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22181__$1,inst_22179);
} else
{if((state_val_22182 === 4))
{var inst_22132 = [mouse_move_chan,mouse_up_chan];var inst_22133 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_22132,null));var state_22181__$1 = state_22181;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_22181__$1,7,inst_22133);
} else
{if((state_val_22182 === 5))
{var state_22181__$1 = state_22181;var statearr_22186_22214 = state_22181__$1;(statearr_22186_22214[2] = null);
(statearr_22186_22214[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22182 === 6))
{var inst_22177 = (state_22181[2]);var state_22181__$1 = state_22181;var statearr_22187_22215 = state_22181__$1;(statearr_22187_22215[2] = inst_22177);
(statearr_22187_22215[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22182 === 7))
{var inst_22137 = (state_22181[7]);var inst_22135 = (state_22181[8]);var inst_22135__$1 = (state_22181[2]);var inst_22136 = cljs.core.nth.call(null,inst_22135__$1,0,null);var inst_22137__$1 = cljs.core.nth.call(null,inst_22135__$1,1,null);var inst_22138 = cljs.core._EQ_.call(null,inst_22137__$1,mouse_move_chan);var state_22181__$1 = (function (){var statearr_22188 = state_22181;(statearr_22188[7] = inst_22137__$1);
(statearr_22188[9] = inst_22136);
(statearr_22188[8] = inst_22135__$1);
return statearr_22188;
})();if(inst_22138)
{var statearr_22189_22216 = state_22181__$1;(statearr_22189_22216[1] = 8);
} else
{var statearr_22190_22217 = state_22181__$1;(statearr_22190_22217[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22182 === 8))
{var inst_22135 = (state_22181[8]);var inst_22141 = cljs.core.nth.call(null,inst_22135,0,null);var inst_22142 = [new cljs.core.Keyword(null,"name","name",1017277949),new cljs.core.Keyword(null,"position","position",1761709211)];var inst_22143 = [name,inst_22141];var inst_22144 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_22142,inst_22143);var inst_22145 = [new cljs.core.Keyword(null,"mouse-moved","mouse-moved",753447677),inst_22144];var inst_22146 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_22145,null));var inst_22147 = [new cljs.core.Keyword(null,"draggable","draggable",709423359),inst_22146];var inst_22148 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_22147,null));var inst_22149 = cljs.core.async.put_BANG_.call(null,comm,inst_22148);var state_22181__$1 = state_22181;var statearr_22191_22218 = state_22181__$1;(statearr_22191_22218[2] = inst_22149);
(statearr_22191_22218[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22182 === 9))
{var inst_22137 = (state_22181[7]);var inst_22151 = cljs.core._EQ_.call(null,inst_22137,mouse_up_chan);var state_22181__$1 = state_22181;if(inst_22151)
{var statearr_22192_22219 = state_22181__$1;(statearr_22192_22219[1] = 11);
} else
{var statearr_22193_22220 = state_22181__$1;(statearr_22193_22220[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22182 === 10))
{var inst_22173 = (state_22181[2]);var state_22181__$1 = (function (){var statearr_22194 = state_22181;(statearr_22194[10] = inst_22173);
return statearr_22194;
})();var statearr_22195_22221 = state_22181__$1;(statearr_22195_22221[2] = null);
(statearr_22195_22221[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22182 === 11))
{var inst_22135 = (state_22181[8]);var inst_22154 = cljs.core.nth.call(null,inst_22135,0,null);var inst_22155 = [new cljs.core.Keyword(null,"name","name",1017277949),new cljs.core.Keyword(null,"position","position",1761709211)];var inst_22156 = [name,inst_22154];var inst_22157 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_22155,inst_22156);var inst_22158 = [new cljs.core.Keyword(null,"released","released",4757572783),inst_22157];var inst_22159 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_22158,null));var inst_22160 = [new cljs.core.Keyword(null,"draggable","draggable",709423359),inst_22159];var inst_22161 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_22160,null));var inst_22162 = cljs.core.async.put_BANG_.call(null,comm,inst_22161);var inst_22163 = cljs.core.reset_BANG_.call(null,omchaya.components.draggable_window.local_dragging_QMARK_,false);var state_22181__$1 = (function (){var statearr_22196 = state_22181;(statearr_22196[11] = inst_22162);
return statearr_22196;
})();var statearr_22197_22222 = state_22181__$1;(statearr_22197_22222[2] = inst_22163);
(statearr_22197_22222[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22182 === 12))
{var inst_22137 = (state_22181[7]);var inst_22165 = cljs.core._EQ_.call(null,inst_22137,new cljs.core.Keyword(null,"default","default",2558708147));var state_22181__$1 = state_22181;if(inst_22165)
{var statearr_22198_22223 = state_22181__$1;(statearr_22198_22223[1] = 14);
} else
{var statearr_22199_22224 = state_22181__$1;(statearr_22199_22224[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22182 === 13))
{var inst_22171 = (state_22181[2]);var state_22181__$1 = state_22181;var statearr_22200_22225 = state_22181__$1;(statearr_22200_22225[2] = inst_22171);
(statearr_22200_22225[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22182 === 14))
{var inst_22136 = (state_22181[9]);var state_22181__$1 = state_22181;var statearr_22201_22226 = state_22181__$1;(statearr_22201_22226[2] = inst_22136);
(statearr_22201_22226[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22182 === 15))
{var state_22181__$1 = state_22181;var statearr_22202_22227 = state_22181__$1;(statearr_22202_22227[2] = null);
(statearr_22202_22227[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22182 === 16))
{var inst_22169 = (state_22181[2]);var state_22181__$1 = state_22181;var statearr_22203_22228 = state_22181__$1;(statearr_22203_22228[2] = inst_22169);
(statearr_22203_22228[1] = 13);
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
var state_machine__5999__auto____0 = (function (){var statearr_22207 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_22207[0] = state_machine__5999__auto__);
(statearr_22207[1] = 1);
return statearr_22207;
});
var state_machine__5999__auto____1 = (function (state_22181){while(true){
var ret_value__6000__auto__ = (function (){try{while(true){
var result__6001__auto__ = switch__5998__auto__.call(null,state_22181);if(cljs.core.keyword_identical_QMARK_.call(null,result__6001__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6001__auto__;
}
break;
}
}catch (e22208){if((e22208 instanceof Object))
{var ex__6002__auto__ = e22208;var statearr_22209_22229 = state_22181;(statearr_22209_22229[5] = ex__6002__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22181);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e22208;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6000__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__22230 = state_22181;
state_22181 = G__22230;
continue;
}
} else
{return ret_value__6000__auto__;
}
break;
}
});
state_machine__5999__auto__ = function(state_22181){
switch(arguments.length){
case 0:
return state_machine__5999__auto____0.call(this);
case 1:
return state_machine__5999__auto____1.call(this,state_22181);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5999__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5999__auto____0;
state_machine__5999__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5999__auto____1;
return state_machine__5999__auto__;
})()
;})(switch__5998__auto__))
})();var state__6070__auto__ = (function (){var statearr_22210 = f__6069__auto__.call(null);(statearr_22210[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6068__auto__);
return statearr_22210;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6070__auto__);
}));
return c__6068__auto__;
});
omchaya.components.draggable_window.t22121.prototype.om$core$IDisplayName$ = true;
omchaya.components.draggable_window.t22121.prototype.om$core$IDisplayName$display_name$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var or__3443__auto__ = new cljs.core.Keyword(null,"react-name","react-name",4800236939).cljs$core$IFn$_invoke$arity$1(self__.opts);if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{return "DraggableWindow";
}
});
omchaya.components.draggable_window.t22121.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22123){var self__ = this;
var _22123__$1 = this;return self__.meta22122;
});
omchaya.components.draggable_window.t22121.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22123,meta22122__$1){var self__ = this;
var _22123__$1 = this;return (new omchaya.components.draggable_window.t22121(self__.opts,self__.owner,self__.data,self__.draggable_window,meta22122__$1));
});
omchaya.components.draggable_window.__GT_t22121 = (function __GT_t22121(opts__$1,owner__$1,data__$1,draggable_window__$1,meta22122){return (new omchaya.components.draggable_window.t22121(opts__$1,owner__$1,data__$1,draggable_window__$1,meta22122));
});
}
return (new omchaya.components.draggable_window.t22121(opts,owner,data,draggable_window,null));
});
