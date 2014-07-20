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
growingtree_app.components.key_queue.start_key_queue = (function start_key_queue(key_ch){return dommy.core.listen_BANG_.call(null,document,new cljs.core.Keyword(null,"keydown","keydown",4493897459),(function (p1__11674_SHARP_){var temp__4092__auto__ = growingtree_app.components.key_queue.event__GT_key.call(null,p1__11674_SHARP_);if(cljs.core.truth_(temp__4092__auto__))
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
return (function (p1__11675_SHARP_){return clojure.string.split.call(null,p1__11675_SHARP_,/ /);
});})(combos))
,combos);return cljs.core.some.call(null,cljs.core.partial.call(null,growingtree_app.components.key_queue.combo_match_QMARK_,keys),combos__$1);
});
/**
* Given a keymap for the component and the most recent series of keys
* that were pressed (not the codes, but strings like 'shift+r' and
* stuff) return a handler fn associated with a key combo in the keys
* list or nil.
*/
growingtree_app.components.key_queue.match_keys = (function match_keys(keymap,keys){return cljs.core.first.call(null,cljs.core.keep.call(null,(function (p__11678){var vec__11679 = p__11678;var c = cljs.core.nth.call(null,vec__11679,0,null);var f = cljs.core.nth.call(null,vec__11679,1,null);if(cljs.core.truth_(growingtree_app.components.key_queue.combos_match_QMARK_.call(null,c,keys)))
{return f;
} else
{return null;
}
}),keymap));
});
growingtree_app.components.key_queue.KeyboardHandler = (function KeyboardHandler(app,owner,p__11680,opts){var map__11766 = p__11680;var map__11766__$1 = ((cljs.core.seq_QMARK_.call(null,map__11766))?cljs.core.apply.call(null,cljs.core.hash_map,map__11766):map__11766);var error_ch = cljs.core.get.call(null,map__11766__$1,new cljs.core.Keyword(null,"error-ch","error-ch",2409970108));var keymap = cljs.core.get.call(null,map__11766__$1,new cljs.core.Keyword(null,"keymap","keymap",4174211599));var ch = cljs.core.async.chan.call(null);if(typeof growingtree_app.components.key_queue.t11767 !== 'undefined')
{} else
{
/**
* @constructor
*/
growingtree_app.components.key_queue.t11767 = (function (ch,keymap,error_ch,map__11766,opts,p__11680,owner,app,KeyboardHandler,meta11768){
this.ch = ch;
this.keymap = keymap;
this.error_ch = error_ch;
this.map__11766 = map__11766;
this.opts = opts;
this.p__11680 = p__11680;
this.owner = owner;
this.app = app;
this.KeyboardHandler = KeyboardHandler;
this.meta11768 = meta11768;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
growingtree_app.components.key_queue.t11767.cljs$lang$type = true;
growingtree_app.components.key_queue.t11767.cljs$lang$ctorStr = "growingtree-app.components.key-queue/t11767";
growingtree_app.components.key_queue.t11767.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"growingtree-app.components.key-queue/t11767");
});
growingtree_app.components.key_queue.t11767.prototype.om$core$IRender$ = true;
growingtree_app.components.key_queue.t11767.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.span({"className": "hidden"});
});
growingtree_app.components.key_queue.t11767.prototype.om$core$IWillUnmount$ = true;
growingtree_app.components.key_queue.t11767.prototype.om$core$IWillUnmount$will_unmount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.untap.call(null,growingtree_app.components.key_queue.key_mult,self__.ch);
});
growingtree_app.components.key_queue.t11767.prototype.om$core$IDidMount$ = true;
growingtree_app.components.key_queue.t11767.prototype.om$core$IDidMount$did_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.tap.call(null,growingtree_app.components.key_queue.key_mult,self__.ch);
var c__6188__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6189__auto__ = (function (){var switch__6118__auto__ = (function (state_11818){var state_val_11819 = (state_11818[1]);if((state_val_11819 === 1))
{var inst_11772 = cljs.core.PersistentVector.EMPTY;var inst_11773 = null;var state_11818__$1 = (function (){var statearr_11820 = state_11818;(statearr_11820[7] = inst_11773);
(statearr_11820[8] = inst_11772);
return statearr_11820;
})();var statearr_11821_11851 = state_11818__$1;(statearr_11821_11851[2] = null);
(statearr_11821_11851[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11819 === 2))
{var inst_11773 = (state_11818[7]);var state_11818__$1 = state_11818;if(cljs.core.truth_(inst_11773))
{var statearr_11822_11852 = state_11818__$1;(statearr_11822_11852[1] = 4);
} else
{var statearr_11823_11853 = state_11818__$1;(statearr_11823_11853[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11819 === 3))
{var inst_11816 = (state_11818[2]);var state_11818__$1 = state_11818;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11818__$1,inst_11816);
} else
{if((state_val_11819 === 4))
{var inst_11773 = (state_11818[7]);var state_11818__$1 = state_11818;var statearr_11824_11854 = state_11818__$1;(statearr_11824_11854[2] = inst_11773);
(statearr_11824_11854[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11819 === 5))
{var inst_11778 = cljs.core.async.chan.call(null);var state_11818__$1 = state_11818;var statearr_11825_11855 = state_11818__$1;(statearr_11825_11855[2] = inst_11778);
(statearr_11825_11855[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11819 === 6))
{var inst_11780 = (state_11818[2]);var inst_11781 = [self__.ch,inst_11780];var inst_11782 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_11781,null));var state_11818__$1 = state_11818;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_11818__$1,7,inst_11782);
} else
{if((state_val_11819 === 7))
{var inst_11784 = (state_11818[2]);var inst_11785 = cljs.core.nth.call(null,inst_11784,0,null);var inst_11786 = cljs.core.nth.call(null,inst_11784,1,null);var inst_11787 = cljs.core._EQ_.call(null,inst_11786,self__.ch);var state_11818__$1 = (function (){var statearr_11826 = state_11818;(statearr_11826[9] = inst_11785);
return statearr_11826;
})();if(inst_11787)
{var statearr_11827_11856 = state_11818__$1;(statearr_11827_11856[1] = 8);
} else
{var statearr_11828_11857 = state_11818__$1;(statearr_11828_11857[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11819 === 8))
{var inst_11785 = (state_11818[9]);var inst_11772 = (state_11818[8]);var inst_11791 = (state_11818[10]);var inst_11789 = (state_11818[11]);var inst_11789__$1 = cljs.core.conj.call(null,inst_11772,inst_11785);var inst_11790 = cljs.core.deref.call(null,self__.keymap);var inst_11791__$1 = growingtree_app.components.key_queue.match_keys.call(null,inst_11790,inst_11789__$1);var state_11818__$1 = (function (){var statearr_11829 = state_11818;(statearr_11829[10] = inst_11791__$1);
(statearr_11829[11] = inst_11789__$1);
return statearr_11829;
})();if(cljs.core.truth_(inst_11791__$1))
{var statearr_11830_11858 = state_11818__$1;(statearr_11830_11858[1] = 11);
} else
{var statearr_11831_11859 = state_11818__$1;(statearr_11831_11859[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11819 === 9))
{var inst_11772 = cljs.core.PersistentVector.EMPTY;var inst_11773 = null;var state_11818__$1 = (function (){var statearr_11832 = state_11818;(statearr_11832[7] = inst_11773);
(statearr_11832[8] = inst_11772);
return statearr_11832;
})();var statearr_11833_11860 = state_11818__$1;(statearr_11833_11860[2] = null);
(statearr_11833_11860[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11819 === 10))
{var inst_11814 = (state_11818[2]);var state_11818__$1 = state_11818;var statearr_11834_11861 = state_11818__$1;(statearr_11834_11861[2] = inst_11814);
(statearr_11834_11861[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11819 === 11))
{var state_11818__$1 = state_11818;var statearr_11835_11862 = state_11818__$1;(statearr_11835_11862[2] = null);
(statearr_11835_11862[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11819 === 12))
{var inst_11789 = (state_11818[11]);var inst_11807 = cljs.core.async.timeout.call(null,1000);var inst_11772 = inst_11789;var inst_11773 = inst_11807;var state_11818__$1 = (function (){var statearr_11836 = state_11818;(statearr_11836[7] = inst_11773);
(statearr_11836[8] = inst_11772);
return statearr_11836;
})();var statearr_11837_11863 = state_11818__$1;(statearr_11837_11863[2] = null);
(statearr_11837_11863[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11819 === 13))
{var inst_11810 = (state_11818[2]);var state_11818__$1 = state_11818;var statearr_11838_11864 = state_11818__$1;(statearr_11838_11864[2] = inst_11810);
(statearr_11838_11864[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11819 === 14))
{var inst_11804 = (state_11818[2]);var inst_11772 = cljs.core.PersistentVector.EMPTY;var inst_11773 = null;var state_11818__$1 = (function (){var statearr_11839 = state_11818;(statearr_11839[7] = inst_11773);
(statearr_11839[8] = inst_11772);
(statearr_11839[12] = inst_11804);
return statearr_11839;
})();var statearr_11840_11865 = state_11818__$1;(statearr_11840_11865[2] = null);
(statearr_11840_11865[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11819 === 15))
{var inst_11785 = (state_11818[9]);var inst_11791 = (state_11818[10]);var inst_11793 = (state_11818[2]);var inst_11794 = growingtree_app.utils.log_pr.call(null,"Error calling",inst_11791,"with key event",inst_11785,":");var inst_11795 = growingtree_app.utils.stack_trace.call(null,inst_11793);var inst_11796 = [new cljs.core.Keyword(null,"keyboard-handler-error","keyboard-handler-error",1374918097),inst_11793];var inst_11797 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_11796,null));var inst_11798 = cljs.core.async.put_BANG_.call(null,self__.error_ch,inst_11797);var state_11818__$1 = (function (){var statearr_11841 = state_11818;(statearr_11841[13] = inst_11795);
(statearr_11841[14] = inst_11794);
return statearr_11841;
})();var statearr_11842_11866 = state_11818__$1;(statearr_11842_11866[2] = inst_11798);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11818__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11819 === 16))
{var inst_11785 = (state_11818[9]);var inst_11791 = (state_11818[10]);var ___$2 = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_11818,15,Object,null,14);var inst_11802 = inst_11791.call(null,inst_11785);var state_11818__$1 = state_11818;var statearr_11843_11867 = state_11818__$1;(statearr_11843_11867[2] = inst_11802);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11818__$1);
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
var state_machine__6119__auto____0 = (function (){var statearr_11847 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11847[0] = state_machine__6119__auto__);
(statearr_11847[1] = 1);
return statearr_11847;
});
var state_machine__6119__auto____1 = (function (state_11818){while(true){
var ret_value__6120__auto__ = (function (){try{while(true){
var result__6121__auto__ = switch__6118__auto__.call(null,state_11818);if(cljs.core.keyword_identical_QMARK_.call(null,result__6121__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6121__auto__;
}
break;
}
}catch (e11848){if((e11848 instanceof Object))
{var ex__6122__auto__ = e11848;var statearr_11849_11868 = state_11818;(statearr_11849_11868[5] = ex__6122__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11818);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11848;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6120__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11869 = state_11818;
state_11818 = G__11869;
continue;
}
} else
{return ret_value__6120__auto__;
}
break;
}
});
state_machine__6119__auto__ = function(state_11818){
switch(arguments.length){
case 0:
return state_machine__6119__auto____0.call(this);
case 1:
return state_machine__6119__auto____1.call(this,state_11818);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6119__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6119__auto____0;
state_machine__6119__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6119__auto____1;
return state_machine__6119__auto__;
})()
;})(switch__6118__auto__))
})();var state__6190__auto__ = (function (){var statearr_11850 = f__6189__auto__.call(null);(statearr_11850[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6188__auto__);
return statearr_11850;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6190__auto__);
}));
return c__6188__auto__;
});
growingtree_app.components.key_queue.t11767.prototype.om$core$IDisplayName$ = true;
growingtree_app.components.key_queue.t11767.prototype.om$core$IDisplayName$display_name$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var or__3443__auto__ = new cljs.core.Keyword(null,"react-name","react-name",4800236939).cljs$core$IFn$_invoke$arity$1(self__.opts);if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{return "KeyboardHandler";
}
});
growingtree_app.components.key_queue.t11767.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11769){var self__ = this;
var _11769__$1 = this;return self__.meta11768;
});
growingtree_app.components.key_queue.t11767.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11769,meta11768__$1){var self__ = this;
var _11769__$1 = this;return (new growingtree_app.components.key_queue.t11767(self__.ch,self__.keymap,self__.error_ch,self__.map__11766,self__.opts,self__.p__11680,self__.owner,self__.app,self__.KeyboardHandler,meta11768__$1));
});
growingtree_app.components.key_queue.__GT_t11767 = (function __GT_t11767(ch__$1,keymap__$1,error_ch__$1,map__11766__$2,opts__$1,p__11680__$1,owner__$1,app__$1,KeyboardHandler__$1,meta11768){return (new growingtree_app.components.key_queue.t11767(ch__$1,keymap__$1,error_ch__$1,map__11766__$2,opts__$1,p__11680__$1,owner__$1,app__$1,KeyboardHandler__$1,meta11768));
});
}
return (new growingtree_app.components.key_queue.t11767(ch,keymap,error_ch,map__11766__$1,opts,p__11680,owner,app,KeyboardHandler,null));
});

//# sourceMappingURL=key_queue.js.map