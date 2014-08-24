// Compiled by ClojureScript 0.0-2277
goog.provide('growingtree_app.components.draggable_window');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('sablono.core');
goog.require('goog.events.EventType');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('sablono.core');
goog.require('goog.events');
goog.require('growingtree_app.utils');
goog.require('clojure.string');
goog.require('om.core');
goog.require('om.core');
goog.require('growingtree_app.utils');
goog.require('clojure.string');
goog.require('goog.events');
growingtree_app.components.draggable_window.local_dragging_QMARK_ = cljs.core.atom.call(null,false);
growingtree_app.components.draggable_window.listen = (function listen(el,type){var out = cljs.core.async.chan.call(null);goog.events.listen(el,type,((function (out){
return (function (event){if(cljs.core.truth_(cljs.core.deref.call(null,growingtree_app.components.draggable_window.local_dragging_QMARK_)))
{event.preventDefault();
} else
{}
return cljs.core.async.put_BANG_.call(null,out,event);
});})(out))
);
return out;
});
growingtree_app.components.draggable_window.draggable_window = (function draggable_window(data,owner,opts){if(typeof growingtree_app.components.draggable_window.t11605 !== 'undefined')
{} else
{
/**
* @constructor
*/
growingtree_app.components.draggable_window.t11605 = (function (opts,owner,data,draggable_window,meta11606){
this.opts = opts;
this.owner = owner;
this.data = data;
this.draggable_window = draggable_window;
this.meta11606 = meta11606;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
growingtree_app.components.draggable_window.t11605.cljs$lang$type = true;
growingtree_app.components.draggable_window.t11605.cljs$lang$ctorStr = "growingtree-app.components.draggable-window/t11605";
growingtree_app.components.draggable_window.t11605.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"growingtree-app.components.draggable-window/t11605");
});
growingtree_app.components.draggable_window.t11605.prototype.om$core$IRender$ = true;
growingtree_app.components.draggable_window.t11605.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return sablono.interpreter.interpret.call(null,(function (){var map__11608 = self__.data;var map__11608__$1 = ((cljs.core.seq_QMARK_.call(null,map__11608))?cljs.core.apply.call(null,cljs.core.hash_map,map__11608):map__11608);var window = cljs.core.get.call(null,map__11608__$1,new cljs.core.Keyword(null,"window","window",724519534));var name = cljs.core.get.call(null,map__11608__$1,new cljs.core.Keyword(null,"name","name",1843675177));var comm = cljs.core.get.call(null,map__11608__$1,new cljs.core.Keyword(null,"comm","comm",-1689770614));return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.draggable-window","div.draggable-window",541943472),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),(function (){var temp__4126__auto__ = new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(window);if(cljs.core.truth_(temp__4126__auto__))
{var pos = temp__4126__auto__;return {"left": cljs.core.first.call(null,pos), "top": cljs.core.last.call(null,pos), "position": "fixed"};
} else
{return null;
}
})()], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row.modal-header","div.row.modal-header",-1280805367),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-lg-12","div.col-lg-12",1588800498),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.clj__GT_js.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"background-color","background-color",570434026),(cljs.core.truth_(new cljs.core.Keyword(null,"dragging?","dragging?",-995941410).cljs$core$IFn$_invoke$arity$1(window))?"#050":"#500"),new cljs.core.Keyword(null,"color","color",1011675173),"white",new cljs.core.Keyword(null,"text-align","text-align",1786091845),"center"], null))),new cljs.core.Keyword(null,"onMouseDown","onMouseDown",-1496366516),((function (map__11608,map__11608__$1,window,name,comm,___$1){
return (function (p1__11514_SHARP_){cljs.core.reset_BANG_.call(null,growingtree_app.components.draggable_window.local_dragging_QMARK_,true);
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"draggable","draggable",1676206163),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"grabbed","grabbed",-1247636222),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),name,new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__11514_SHARP_.clientX,p1__11514_SHARP_.clientY], null)], null)], null)], null));
});})(map__11608,map__11608__$1,window,name,comm,___$1))
], null)),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(self__.data)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),om.core.build.call(null,new cljs.core.Keyword(null,"content-com","content-com",808014035).cljs$core$IFn$_invoke$arity$1(self__.data),new cljs.core.Keyword(null,"content-data","content-data",1183622660).cljs$core$IFn$_invoke$arity$1(self__.data),new cljs.core.Keyword(null,"content-opts","content-opts",-409462686).cljs$core$IFn$_invoke$arity$1(self__.data))], null)], null);
})());
});
growingtree_app.components.draggable_window.t11605.prototype.om$core$IWillMount$ = true;
growingtree_app.components.draggable_window.t11605.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var mouse_move_chan = cljs.core.async.map.call(null,((function (___$1){
return (function (e){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e.clientX,e.clientY], null);
});})(___$1))
,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [growingtree_app.components.draggable_window.listen.call(null,window,"mousemove")], null));var mouse_up_chan = cljs.core.async.map.call(null,((function (mouse_move_chan,___$1){
return (function (e){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e.clientX,e.clientY], null);
});})(mouse_move_chan,___$1))
,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [growingtree_app.components.draggable_window.listen.call(null,window,"mouseup")], null));var comm = new cljs.core.Keyword(null,"comm","comm",-1689770614).cljs$core$IFn$_invoke$arity$1(self__.data);var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(self__.data);var c__6345__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6345__auto__,mouse_move_chan,mouse_up_chan,comm,name,___$1){
return (function (){var f__6346__auto__ = (function (){var switch__6280__auto__ = ((function (c__6345__auto__,mouse_move_chan,mouse_up_chan,comm,name,___$1){
return (function (state_11665){var state_val_11666 = (state_11665[(1)]);if((state_val_11666 === (7)))
{var inst_11619 = (state_11665[(7)]);var inst_11621 = (state_11665[(8)]);var inst_11619__$1 = (state_11665[(2)]);var inst_11620 = cljs.core.nth.call(null,inst_11619__$1,(0),null);var inst_11621__$1 = cljs.core.nth.call(null,inst_11619__$1,(1),null);var inst_11622 = cljs.core._EQ_.call(null,inst_11621__$1,mouse_move_chan);var state_11665__$1 = (function (){var statearr_11667 = state_11665;(statearr_11667[(7)] = inst_11619__$1);
(statearr_11667[(9)] = inst_11620);
(statearr_11667[(8)] = inst_11621__$1);
return statearr_11667;
})();if(inst_11622)
{var statearr_11668_11695 = state_11665__$1;(statearr_11668_11695[(1)] = (8));
} else
{var statearr_11669_11696 = state_11665__$1;(statearr_11669_11696[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11666 === (1)))
{var state_11665__$1 = state_11665;var statearr_11670_11697 = state_11665__$1;(statearr_11670_11697[(2)] = null);
(statearr_11670_11697[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11666 === (4)))
{var inst_11616 = [mouse_move_chan,mouse_up_chan];var inst_11617 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_11616,null));var state_11665__$1 = state_11665;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_11665__$1,(7),inst_11617);
} else
{if((state_val_11666 === (15)))
{var state_11665__$1 = state_11665;var statearr_11671_11698 = state_11665__$1;(statearr_11671_11698[(2)] = null);
(statearr_11671_11698[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11666 === (13)))
{var inst_11655 = (state_11665[(2)]);var state_11665__$1 = state_11665;var statearr_11672_11699 = state_11665__$1;(statearr_11672_11699[(2)] = inst_11655);
(statearr_11672_11699[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11666 === (6)))
{var inst_11661 = (state_11665[(2)]);var state_11665__$1 = state_11665;var statearr_11673_11700 = state_11665__$1;(statearr_11673_11700[(2)] = inst_11661);
(statearr_11673_11700[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11666 === (3)))
{var inst_11663 = (state_11665[(2)]);var state_11665__$1 = state_11665;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11665__$1,inst_11663);
} else
{if((state_val_11666 === (12)))
{var inst_11621 = (state_11665[(8)]);var inst_11649 = cljs.core._EQ_.call(null,inst_11621,new cljs.core.Keyword(null,"default","default",-1987822328));var state_11665__$1 = state_11665;if(inst_11649)
{var statearr_11674_11701 = state_11665__$1;(statearr_11674_11701[(1)] = (14));
} else
{var statearr_11675_11702 = state_11665__$1;(statearr_11675_11702[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11666 === (2)))
{var state_11665__$1 = state_11665;if(true)
{var statearr_11676_11703 = state_11665__$1;(statearr_11676_11703[(1)] = (4));
} else
{var statearr_11677_11704 = state_11665__$1;(statearr_11677_11704[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11666 === (11)))
{var inst_11619 = (state_11665[(7)]);var inst_11638 = cljs.core.nth.call(null,inst_11619,(0),null);var inst_11639 = [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"position","position",-2011731912)];var inst_11640 = [name,inst_11638];var inst_11641 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_11639,inst_11640);var inst_11642 = [new cljs.core.Keyword(null,"released","released",381037203),inst_11641];var inst_11643 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_11642,null));var inst_11644 = [new cljs.core.Keyword(null,"draggable","draggable",1676206163),inst_11643];var inst_11645 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_11644,null));var inst_11646 = cljs.core.async.put_BANG_.call(null,comm,inst_11645);var inst_11647 = cljs.core.reset_BANG_.call(null,growingtree_app.components.draggable_window.local_dragging_QMARK_,false);var state_11665__$1 = (function (){var statearr_11678 = state_11665;(statearr_11678[(10)] = inst_11646);
return statearr_11678;
})();var statearr_11679_11705 = state_11665__$1;(statearr_11679_11705[(2)] = inst_11647);
(statearr_11679_11705[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11666 === (9)))
{var inst_11621 = (state_11665[(8)]);var inst_11635 = cljs.core._EQ_.call(null,inst_11621,mouse_up_chan);var state_11665__$1 = state_11665;if(inst_11635)
{var statearr_11680_11706 = state_11665__$1;(statearr_11680_11706[(1)] = (11));
} else
{var statearr_11681_11707 = state_11665__$1;(statearr_11681_11707[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11666 === (5)))
{var state_11665__$1 = state_11665;var statearr_11682_11708 = state_11665__$1;(statearr_11682_11708[(2)] = null);
(statearr_11682_11708[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11666 === (14)))
{var inst_11620 = (state_11665[(9)]);var state_11665__$1 = state_11665;var statearr_11683_11709 = state_11665__$1;(statearr_11683_11709[(2)] = inst_11620);
(statearr_11683_11709[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11666 === (16)))
{var inst_11653 = (state_11665[(2)]);var state_11665__$1 = state_11665;var statearr_11684_11710 = state_11665__$1;(statearr_11684_11710[(2)] = inst_11653);
(statearr_11684_11710[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11666 === (10)))
{var inst_11657 = (state_11665[(2)]);var state_11665__$1 = (function (){var statearr_11685 = state_11665;(statearr_11685[(11)] = inst_11657);
return statearr_11685;
})();var statearr_11686_11711 = state_11665__$1;(statearr_11686_11711[(2)] = null);
(statearr_11686_11711[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11666 === (8)))
{var inst_11619 = (state_11665[(7)]);var inst_11625 = cljs.core.nth.call(null,inst_11619,(0),null);var inst_11626 = [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"position","position",-2011731912)];var inst_11627 = [name,inst_11625];var inst_11628 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_11626,inst_11627);var inst_11629 = [new cljs.core.Keyword(null,"mouse-moved","mouse-moved",-1918152310),inst_11628];var inst_11630 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_11629,null));var inst_11631 = [new cljs.core.Keyword(null,"draggable","draggable",1676206163),inst_11630];var inst_11632 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_11631,null));var inst_11633 = cljs.core.async.put_BANG_.call(null,comm,inst_11632);var state_11665__$1 = state_11665;var statearr_11687_11712 = state_11665__$1;(statearr_11687_11712[(2)] = inst_11633);
(statearr_11687_11712[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__6345__auto__,mouse_move_chan,mouse_up_chan,comm,name,___$1))
;return ((function (switch__6280__auto__,c__6345__auto__,mouse_move_chan,mouse_up_chan,comm,name,___$1){
return (function() {
var state_machine__6281__auto__ = null;
var state_machine__6281__auto____0 = (function (){var statearr_11691 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11691[(0)] = state_machine__6281__auto__);
(statearr_11691[(1)] = (1));
return statearr_11691;
});
var state_machine__6281__auto____1 = (function (state_11665){while(true){
var ret_value__6282__auto__ = (function (){try{while(true){
var result__6283__auto__ = switch__6280__auto__.call(null,state_11665);if(cljs.core.keyword_identical_QMARK_.call(null,result__6283__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6283__auto__;
}
break;
}
}catch (e11692){if((e11692 instanceof Object))
{var ex__6284__auto__ = e11692;var statearr_11693_11713 = state_11665;(statearr_11693_11713[(5)] = ex__6284__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11665);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e11692;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6282__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11714 = state_11665;
state_11665 = G__11714;
continue;
}
} else
{return ret_value__6282__auto__;
}
break;
}
});
state_machine__6281__auto__ = function(state_11665){
switch(arguments.length){
case 0:
return state_machine__6281__auto____0.call(this);
case 1:
return state_machine__6281__auto____1.call(this,state_11665);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6281__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6281__auto____0;
state_machine__6281__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6281__auto____1;
return state_machine__6281__auto__;
})()
;})(switch__6280__auto__,c__6345__auto__,mouse_move_chan,mouse_up_chan,comm,name,___$1))
})();var state__6347__auto__ = (function (){var statearr_11694 = f__6346__auto__.call(null);(statearr_11694[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6345__auto__);
return statearr_11694;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6347__auto__);
});})(c__6345__auto__,mouse_move_chan,mouse_up_chan,comm,name,___$1))
);
return c__6345__auto__;
});
growingtree_app.components.draggable_window.t11605.prototype.om$core$IDisplayName$ = true;
growingtree_app.components.draggable_window.t11605.prototype.om$core$IDisplayName$display_name$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var or__3543__auto__ = new cljs.core.Keyword(null,"react-name","react-name",-834049397).cljs$core$IFn$_invoke$arity$1(self__.opts);if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return "DraggableWindow";
}
});
growingtree_app.components.draggable_window.t11605.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11607){var self__ = this;
var _11607__$1 = this;return self__.meta11606;
});
growingtree_app.components.draggable_window.t11605.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11607,meta11606__$1){var self__ = this;
var _11607__$1 = this;return (new growingtree_app.components.draggable_window.t11605(self__.opts,self__.owner,self__.data,self__.draggable_window,meta11606__$1));
});
growingtree_app.components.draggable_window.__GT_t11605 = (function __GT_t11605(opts__$1,owner__$1,data__$1,draggable_window__$1,meta11606){return (new growingtree_app.components.draggable_window.t11605(opts__$1,owner__$1,data__$1,draggable_window__$1,meta11606));
});
}
return (new growingtree_app.components.draggable_window.t11605(opts,owner,data,draggable_window,null));
});

//# sourceMappingURL=draggable_window.js.map