// Compiled by ClojureScript 0.0-2173
goog.provide('growingtree_app.components.key_queue');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('cljs.core.async');
goog.require('sablono.core');
goog.require('cljs.core.async');
goog.require('sablono.core');
goog.require('om.core');
goog.require('om.core');
goog.require('clojure.string');
goog.require('growingtree_app.utils');
goog.require('growingtree_app.utils');
goog.require('dommy.core');
goog.require('cljs.core.async');
goog.require('dommy.core');
/**
* map from a character code (read from events with event.which)
* to a string representation of it.
* Only need to add 'special' things here.
*/
growingtree_app.components.key_queue.code__GT_key = cljs.core.PersistentHashMap.fromArrays([37,38,39,40,13,46,186,27,191],["left","up","right","down","enter","del",";","esc","slash"]);
/**
* Given a keydown event, return the modifier keys that were being held.
*/
growingtree_app.components.key_queue.event_modifiers = (function event_modifiers(e){return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.filter.call(null,cljs.core.identity,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(e.shiftKey)?"shift":null),(cljs.core.truth_(e.altKey)?"alt":null),(cljs.core.truth_(e.ctrlKey)?"ctrl":null),(cljs.core.truth_(e.metaKey)?"meta":null)], null)));
});
/**
* A vector of the modifier keys that we use to compare against to make
* sure that we don't report things like pressing the shift key as independent events.
* This may not be desirable behavior, depending on the use case, but it works for
* what I need.
*/
growingtree_app.components.key_queue.mod_keys = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [String.fromCharCode(16),String.fromCharCode(17),String.fromCharCode(18)], null);
/**
* Given an event, return a string like 'up' or 'shift+l' or 'ctrl+;'
* describing the key that was pressed.
* This fn will never return just 'shift' or any other lone modifier key.
*/
growingtree_app.components.key_queue.event__GT_key = (function event__GT_key(event){var mods = growingtree_app.components.key_queue.event_modifiers.call(null,event);var which = event.which;var key = (function (){var or__3443__auto__ = growingtree_app.components.key_queue.code__GT_key.call(null,which);if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{return String.fromCharCode(which).toLowerCase();
}
})();if(cljs.core.truth_((function (){var and__3431__auto__ = key;if(cljs.core.truth_(and__3431__auto__))
{return (!(cljs.core.empty_QMARK_.call(null,key))) && (cljs.core.not.call(null,cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([key], true),growingtree_app.components.key_queue.mod_keys)));
} else
{return and__3431__auto__;
}
})()))
{return clojure.string.join.call(null,"+",cljs.core.conj.call(null,mods,key));
} else
{return null;
}
});
growingtree_app.components.key_queue.log_keystroke = (function log_keystroke(e){growingtree_app.utils.log.call(null,"key event",e);
return e;
});
growingtree_app.components.key_queue.start_key_queue = (function start_key_queue(key_ch){return dommy.core.listen_BANG_.call(null,document,new cljs.core.Keyword(null,"keydown","keydown",4493897459),(function (p1__11459_SHARP_){var temp__4092__auto__ = growingtree_app.components.key_queue.event__GT_key.call(null,p1__11459_SHARP_);if(cljs.core.truth_(temp__4092__auto__))
{var k = temp__4092__auto__;return cljs.core.async.put_BANG_.call(null,key_ch,k);
} else
{return null;
}
}));
});
growingtree_app.components.key_queue.global_key_ch = cljs.core.async.chan.call(null,cljs.core.async.sliding_buffer.call(null,1000));
growingtree_app.components.key_queue.start_key_queue.call(null,growingtree_app.components.key_queue.global_key_ch);
growingtree_app.components.key_queue.key_mult = cljs.core.async.mult.call(null,growingtree_app.components.key_queue.global_key_ch);
growingtree_app.components.key_queue.combo_match_QMARK_ = (function combo_match_QMARK_(keys,combo){var tail_keys = cljs.core.take_while.call(null,cljs.core.seq,cljs.core.iterate.call(null,cljs.core.rest,keys));return cljs.core.some.call(null,cljs.core.partial.call(null,cljs.core._EQ_,combo),tail_keys);
});
growingtree_app.components.key_queue.combos_match_QMARK_ = (function combos_match_QMARK_(combo_or_combos,keys){var combos = ((cljs.core.coll_QMARK_.call(null,combo_or_combos))?combo_or_combos:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [combo_or_combos], null));var combos__$1 = cljs.core.map.call(null,((function (combos){
return (function (p1__11460_SHARP_){return clojure.string.split.call(null,p1__11460_SHARP_,/ /);
});})(combos))
,combos);return cljs.core.some.call(null,cljs.core.partial.call(null,growingtree_app.components.key_queue.combo_match_QMARK_,keys),combos__$1);
});
/**
* Given a keymap for the component and the most recent series of keys
* that were pressed (not the codes, but strings like 'shift+r' and
* stuff) return a handler fn associated with a key combo in the keys
* list or nil.
*/
growingtree_app.components.key_queue.match_keys = (function match_keys(keymap,keys){return cljs.core.first.call(null,cljs.core.keep.call(null,(function (p__11463){var vec__11464 = p__11463;var c = cljs.core.nth.call(null,vec__11464,0,null);var f = cljs.core.nth.call(null,vec__11464,1,null);if(cljs.core.truth_(growingtree_app.components.key_queue.combos_match_QMARK_.call(null,c,keys)))
{return f;
} else
{return null;
}
}),keymap));
});
growingtree_app.components.key_queue.KeyboardHandler = (function KeyboardHandler(app,owner,p__11465,opts){var map__11551 = p__11465;var map__11551__$1 = ((cljs.core.seq_QMARK_.call(null,map__11551))?cljs.core.apply.call(null,cljs.core.hash_map,map__11551):map__11551);var error_ch = cljs.core.get.call(null,map__11551__$1,new cljs.core.Keyword(null,"error-ch","error-ch",2409970108));var keymap = cljs.core.get.call(null,map__11551__$1,new cljs.core.Keyword(null,"keymap","keymap",4174211599));var ch = cljs.core.async.chan.call(null);if(typeof growingtree_app.components.key_queue.t11552 !== 'undefined')
{} else
{
/**
* @constructor
*/
growingtree_app.components.key_queue.t11552 = (function (ch,keymap,error_ch,map__11551,opts,p__11465,owner,app,KeyboardHandler,meta11553){
this.ch = ch;
this.keymap = keymap;
this.error_ch = error_ch;
this.map__11551 = map__11551;
this.opts = opts;
this.p__11465 = p__11465;
this.owner = owner;
this.app = app;
this.KeyboardHandler = KeyboardHandler;
this.meta11553 = meta11553;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
growingtree_app.components.key_queue.t11552.cljs$lang$type = true;
growingtree_app.components.key_queue.t11552.cljs$lang$ctorStr = "growingtree-app.components.key-queue/t11552";
growingtree_app.components.key_queue.t11552.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"growingtree-app.components.key-queue/t11552");
});
growingtree_app.components.key_queue.t11552.prototype.om$core$IRender$ = true;
growingtree_app.components.key_queue.t11552.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.span({"className": "hidden"});
});
growingtree_app.components.key_queue.t11552.prototype.om$core$IWillUnmount$ = true;
growingtree_app.components.key_queue.t11552.prototype.om$core$IWillUnmount$will_unmount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.untap.call(null,growingtree_app.components.key_queue.key_mult,self__.ch);
});
growingtree_app.components.key_queue.t11552.prototype.om$core$IDidMount$ = true;
growingtree_app.components.key_queue.t11552.prototype.om$core$IDidMount$did_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.tap.call(null,growingtree_app.components.key_queue.key_mult,self__.ch);
var c__6188__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6189__auto__ = (function (){var switch__6118__auto__ = (function (state_11603){var state_val_11604 = (state_11603[1]);if((state_val_11604 === 1))
{var inst_11557 = cljs.core.PersistentVector.EMPTY;var inst_11558 = null;var state_11603__$1 = (function (){var statearr_11605 = state_11603;(statearr_11605[7] = inst_11557);
(statearr_11605[8] = inst_11558);
return statearr_11605;
})();var statearr_11606_11636 = state_11603__$1;(statearr_11606_11636[2] = null);
(statearr_11606_11636[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11604 === 2))
{var inst_11558 = (state_11603[8]);var state_11603__$1 = state_11603;if(cljs.core.truth_(inst_11558))
{var statearr_11607_11637 = state_11603__$1;(statearr_11607_11637[1] = 4);
} else
{var statearr_11608_11638 = state_11603__$1;(statearr_11608_11638[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11604 === 3))
{var inst_11601 = (state_11603[2]);var state_11603__$1 = state_11603;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11603__$1,inst_11601);
} else
{if((state_val_11604 === 4))
{var inst_11558 = (state_11603[8]);var state_11603__$1 = state_11603;var statearr_11609_11639 = state_11603__$1;(statearr_11609_11639[2] = inst_11558);
(statearr_11609_11639[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11604 === 5))
{var inst_11563 = cljs.core.async.chan.call(null);var state_11603__$1 = state_11603;var statearr_11610_11640 = state_11603__$1;(statearr_11610_11640[2] = inst_11563);
(statearr_11610_11640[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11604 === 6))
{var inst_11565 = (state_11603[2]);var inst_11566 = [self__.ch,inst_11565];var inst_11567 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_11566,null));var state_11603__$1 = state_11603;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_11603__$1,7,inst_11567);
} else
{if((state_val_11604 === 7))
{var inst_11569 = (state_11603[2]);var inst_11570 = cljs.core.nth.call(null,inst_11569,0,null);var inst_11571 = cljs.core.nth.call(null,inst_11569,1,null);var inst_11572 = cljs.core._EQ_.call(null,inst_11571,self__.ch);var state_11603__$1 = (function (){var statearr_11611 = state_11603;(statearr_11611[9] = inst_11570);
return statearr_11611;
})();if(inst_11572)
{var statearr_11612_11641 = state_11603__$1;(statearr_11612_11641[1] = 8);
} else
{var statearr_11613_11642 = state_11603__$1;(statearr_11613_11642[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11604 === 8))
{var inst_11570 = (state_11603[9]);var inst_11576 = (state_11603[10]);var inst_11574 = (state_11603[11]);var inst_11557 = (state_11603[7]);var inst_11574__$1 = cljs.core.conj.call(null,inst_11557,inst_11570);var inst_11575 = cljs.core.deref.call(null,self__.keymap);var inst_11576__$1 = growingtree_app.components.key_queue.match_keys.call(null,inst_11575,inst_11574__$1);var state_11603__$1 = (function (){var statearr_11614 = state_11603;(statearr_11614[10] = inst_11576__$1);
(statearr_11614[11] = inst_11574__$1);
return statearr_11614;
})();if(cljs.core.truth_(inst_11576__$1))
{var statearr_11615_11643 = state_11603__$1;(statearr_11615_11643[1] = 11);
} else
{var statearr_11616_11644 = state_11603__$1;(statearr_11616_11644[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11604 === 9))
{var inst_11557 = cljs.core.PersistentVector.EMPTY;var inst_11558 = null;var state_11603__$1 = (function (){var statearr_11617 = state_11603;(statearr_11617[7] = inst_11557);
(statearr_11617[8] = inst_11558);
return statearr_11617;
})();var statearr_11618_11645 = state_11603__$1;(statearr_11618_11645[2] = null);
(statearr_11618_11645[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11604 === 10))
{var inst_11599 = (state_11603[2]);var state_11603__$1 = state_11603;var statearr_11619_11646 = state_11603__$1;(statearr_11619_11646[2] = inst_11599);
(statearr_11619_11646[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11604 === 11))
{var state_11603__$1 = state_11603;var statearr_11620_11647 = state_11603__$1;(statearr_11620_11647[2] = null);
(statearr_11620_11647[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11604 === 12))
{var inst_11574 = (state_11603[11]);var inst_11592 = cljs.core.async.timeout.call(null,1000);var inst_11557 = inst_11574;var inst_11558 = inst_11592;var state_11603__$1 = (function (){var statearr_11621 = state_11603;(statearr_11621[7] = inst_11557);
(statearr_11621[8] = inst_11558);
return statearr_11621;
})();var statearr_11622_11648 = state_11603__$1;(statearr_11622_11648[2] = null);
(statearr_11622_11648[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11604 === 13))
{var inst_11595 = (state_11603[2]);var state_11603__$1 = state_11603;var statearr_11623_11649 = state_11603__$1;(statearr_11623_11649[2] = inst_11595);
(statearr_11623_11649[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11604 === 14))
{var inst_11589 = (state_11603[2]);var inst_11557 = cljs.core.PersistentVector.EMPTY;var inst_11558 = null;var state_11603__$1 = (function (){var statearr_11624 = state_11603;(statearr_11624[7] = inst_11557);
(statearr_11624[8] = inst_11558);
(statearr_11624[12] = inst_11589);
return statearr_11624;
})();var statearr_11625_11650 = state_11603__$1;(statearr_11625_11650[2] = null);
(statearr_11625_11650[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11604 === 15))
{var inst_11570 = (state_11603[9]);var inst_11576 = (state_11603[10]);var inst_11578 = (state_11603[2]);var inst_11579 = growingtree_app.utils.log_pr.call(null,"Error calling",inst_11576,"with key event",inst_11570,":");var inst_11580 = growingtree_app.utils.stack_trace.call(null,inst_11578);var inst_11581 = [new cljs.core.Keyword(null,"keyboard-handler-error","keyboard-handler-error",1374918097),inst_11578];var inst_11582 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_11581,null));var inst_11583 = cljs.core.async.put_BANG_.call(null,self__.error_ch,inst_11582);var state_11603__$1 = (function (){var statearr_11626 = state_11603;(statearr_11626[13] = inst_11579);
(statearr_11626[14] = inst_11580);
return statearr_11626;
})();var statearr_11627_11651 = state_11603__$1;(statearr_11627_11651[2] = inst_11583);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11603__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11604 === 16))
{var inst_11570 = (state_11603[9]);var inst_11576 = (state_11603[10]);var ___$2 = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_11603,15,Object,null,14);var inst_11587 = inst_11576.call(null,inst_11570);var state_11603__$1 = state_11603;var statearr_11628_11652 = state_11603__$1;(statearr_11628_11652[2] = inst_11587);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11603__$1);
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
var state_machine__6119__auto____0 = (function (){var statearr_11632 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11632[0] = state_machine__6119__auto__);
(statearr_11632[1] = 1);
return statearr_11632;
});
var state_machine__6119__auto____1 = (function (state_11603){while(true){
var ret_value__6120__auto__ = (function (){try{while(true){
var result__6121__auto__ = switch__6118__auto__.call(null,state_11603);if(cljs.core.keyword_identical_QMARK_.call(null,result__6121__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6121__auto__;
}
break;
}
}catch (e11633){if((e11633 instanceof Object))
{var ex__6122__auto__ = e11633;var statearr_11634_11653 = state_11603;(statearr_11634_11653[5] = ex__6122__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11603);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11633;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6120__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11654 = state_11603;
state_11603 = G__11654;
continue;
}
} else
{return ret_value__6120__auto__;
}
break;
}
});
state_machine__6119__auto__ = function(state_11603){
switch(arguments.length){
case 0:
return state_machine__6119__auto____0.call(this);
case 1:
return state_machine__6119__auto____1.call(this,state_11603);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6119__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6119__auto____0;
state_machine__6119__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6119__auto____1;
return state_machine__6119__auto__;
})()
;})(switch__6118__auto__))
})();var state__6190__auto__ = (function (){var statearr_11635 = f__6189__auto__.call(null);(statearr_11635[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6188__auto__);
return statearr_11635;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6190__auto__);
}));
return c__6188__auto__;
});
growingtree_app.components.key_queue.t11552.prototype.om$core$IDisplayName$ = true;
growingtree_app.components.key_queue.t11552.prototype.om$core$IDisplayName$display_name$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var or__3443__auto__ = new cljs.core.Keyword(null,"react-name","react-name",4800236939).cljs$core$IFn$_invoke$arity$1(self__.opts);if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{return "KeyboardHandler";
}
});
growingtree_app.components.key_queue.t11552.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11554){var self__ = this;
var _11554__$1 = this;return self__.meta11553;
});
growingtree_app.components.key_queue.t11552.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11554,meta11553__$1){var self__ = this;
var _11554__$1 = this;return (new growingtree_app.components.key_queue.t11552(self__.ch,self__.keymap,self__.error_ch,self__.map__11551,self__.opts,self__.p__11465,self__.owner,self__.app,self__.KeyboardHandler,meta11553__$1));
});
growingtree_app.components.key_queue.__GT_t11552 = (function __GT_t11552(ch__$1,keymap__$1,error_ch__$1,map__11551__$2,opts__$1,p__11465__$1,owner__$1,app__$1,KeyboardHandler__$1,meta11553){return (new growingtree_app.components.key_queue.t11552(ch__$1,keymap__$1,error_ch__$1,map__11551__$2,opts__$1,p__11465__$1,owner__$1,app__$1,KeyboardHandler__$1,meta11553));
});
}
return (new growingtree_app.components.key_queue.t11552(ch,keymap,error_ch,map__11551__$1,opts,p__11465,owner,app,KeyboardHandler,null));
});

//# sourceMappingURL=key_queue.js.map