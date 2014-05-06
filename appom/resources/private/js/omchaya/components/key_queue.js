// Compiled by ClojureScript 0.0-2173
goog.provide('omchaya.components.key_queue');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('cljs.core.async');
goog.require('omchaya.utils');
goog.require('sablono.core');
goog.require('cljs.core.async');
goog.require('sablono.core');
goog.require('om.core');
goog.require('om.core');
goog.require('clojure.string');
goog.require('omchaya.utils');
goog.require('dommy.core');
goog.require('cljs.core.async');
goog.require('dommy.core');
/**
* map from a character code (read from events with event.which)
* to a string representation of it.
* Only need to add 'special' things here.
*/
omchaya.components.key_queue.code__GT_key = cljs.core.PersistentHashMap.fromArrays([37,38,39,40,13,46,186,27,191],["left","up","right","down","enter","del",";","esc","slash"]);
/**
* Given a keydown event, return the modifier keys that were being held.
*/
omchaya.components.key_queue.event_modifiers = (function event_modifiers(e){return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.filter.call(null,cljs.core.identity,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(e.shiftKey)?"shift":null),(cljs.core.truth_(e.altKey)?"alt":null),(cljs.core.truth_(e.ctrlKey)?"ctrl":null),(cljs.core.truth_(e.metaKey)?"meta":null)], null)));
});
/**
* A vector of the modifier keys that we use to compare against to make
* sure that we don't report things like pressing the shift key as independent events.
* This may not be desirable behavior, depending on the use case, but it works for
* what I need.
*/
omchaya.components.key_queue.mod_keys = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [String.fromCharCode(16),String.fromCharCode(17),String.fromCharCode(18)], null);
/**
* Given an event, return a string like 'up' or 'shift+l' or 'ctrl+;'
* describing the key that was pressed.
* This fn will never return just 'shift' or any other lone modifier key.
*/
omchaya.components.key_queue.event__GT_key = (function event__GT_key(event){var mods = omchaya.components.key_queue.event_modifiers.call(null,event);var which = event.which;var key = (function (){var or__3443__auto__ = omchaya.components.key_queue.code__GT_key.call(null,which);if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{return String.fromCharCode(which).toLowerCase();
}
})();if(cljs.core.truth_((function (){var and__3431__auto__ = key;if(cljs.core.truth_(and__3431__auto__))
{return (!(cljs.core.empty_QMARK_.call(null,key))) && (cljs.core.not.call(null,cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([key], true),omchaya.components.key_queue.mod_keys)));
} else
{return and__3431__auto__;
}
})()))
{return clojure.string.join.call(null,"+",cljs.core.conj.call(null,mods,key));
} else
{return null;
}
});
omchaya.components.key_queue.log_keystroke = (function log_keystroke(e){omchaya.utils.log.call(null,"key event",e);
return e;
});
omchaya.components.key_queue.start_key_queue = (function start_key_queue(key_ch){return dommy.core.listen_BANG_.call(null,document,new cljs.core.Keyword(null,"keydown","keydown",4493897459),(function (p1__22413_SHARP_){var temp__4092__auto__ = omchaya.components.key_queue.event__GT_key.call(null,p1__22413_SHARP_);if(cljs.core.truth_(temp__4092__auto__))
{var k = temp__4092__auto__;return cljs.core.async.put_BANG_.call(null,key_ch,k);
} else
{return null;
}
}));
});
omchaya.components.key_queue.global_key_ch = cljs.core.async.chan.call(null,cljs.core.async.sliding_buffer.call(null,1000));
omchaya.components.key_queue.start_key_queue.call(null,omchaya.components.key_queue.global_key_ch);
omchaya.components.key_queue.key_mult = cljs.core.async.mult.call(null,omchaya.components.key_queue.global_key_ch);
omchaya.components.key_queue.combo_match_QMARK_ = (function combo_match_QMARK_(keys,combo){var tail_keys = cljs.core.take_while.call(null,cljs.core.seq,cljs.core.iterate.call(null,cljs.core.rest,keys));return cljs.core.some.call(null,cljs.core.partial.call(null,cljs.core._EQ_,combo),tail_keys);
});
omchaya.components.key_queue.combos_match_QMARK_ = (function combos_match_QMARK_(combo_or_combos,keys){var combos = ((cljs.core.coll_QMARK_.call(null,combo_or_combos))?combo_or_combos:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [combo_or_combos], null));var combos__$1 = cljs.core.map.call(null,((function (combos){
return (function (p1__22414_SHARP_){return clojure.string.split.call(null,p1__22414_SHARP_,/ /);
});})(combos))
,combos);return cljs.core.some.call(null,cljs.core.partial.call(null,omchaya.components.key_queue.combo_match_QMARK_,keys),combos__$1);
});
/**
* Given a keymap for the component and the most recent series of keys
* that were pressed (not the codes, but strings like 'shift+r' and
* stuff) return a handler fn associated with a key combo in the keys
* list or nil.
*/
omchaya.components.key_queue.match_keys = (function match_keys(keymap,keys){return cljs.core.first.call(null,cljs.core.keep.call(null,(function (p__22417){var vec__22418 = p__22417;var c = cljs.core.nth.call(null,vec__22418,0,null);var f = cljs.core.nth.call(null,vec__22418,1,null);if(cljs.core.truth_(omchaya.components.key_queue.combos_match_QMARK_.call(null,c,keys)))
{return f;
} else
{return null;
}
}),keymap));
});
omchaya.components.key_queue.KeyboardHandler = (function KeyboardHandler(app,owner,p__22419,opts){var map__22505 = p__22419;var map__22505__$1 = ((cljs.core.seq_QMARK_.call(null,map__22505))?cljs.core.apply.call(null,cljs.core.hash_map,map__22505):map__22505);var error_ch = cljs.core.get.call(null,map__22505__$1,new cljs.core.Keyword(null,"error-ch","error-ch",2409970108));var keymap = cljs.core.get.call(null,map__22505__$1,new cljs.core.Keyword(null,"keymap","keymap",4174211599));var ch = cljs.core.async.chan.call(null);if(typeof omchaya.components.key_queue.t22506 !== 'undefined')
{} else
{
/**
* @constructor
*/
omchaya.components.key_queue.t22506 = (function (ch,keymap,error_ch,map__22505,opts,p__22419,owner,app,KeyboardHandler,meta22507){
this.ch = ch;
this.keymap = keymap;
this.error_ch = error_ch;
this.map__22505 = map__22505;
this.opts = opts;
this.p__22419 = p__22419;
this.owner = owner;
this.app = app;
this.KeyboardHandler = KeyboardHandler;
this.meta22507 = meta22507;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
omchaya.components.key_queue.t22506.cljs$lang$type = true;
omchaya.components.key_queue.t22506.cljs$lang$ctorStr = "omchaya.components.key-queue/t22506";
omchaya.components.key_queue.t22506.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"omchaya.components.key-queue/t22506");
});
omchaya.components.key_queue.t22506.prototype.om$core$IRender$ = true;
omchaya.components.key_queue.t22506.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.span({"className": "hidden"});
});
omchaya.components.key_queue.t22506.prototype.om$core$IWillUnmount$ = true;
omchaya.components.key_queue.t22506.prototype.om$core$IWillUnmount$will_unmount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.untap.call(null,omchaya.components.key_queue.key_mult,self__.ch);
});
omchaya.components.key_queue.t22506.prototype.om$core$IDidMount$ = true;
omchaya.components.key_queue.t22506.prototype.om$core$IDidMount$did_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.tap.call(null,omchaya.components.key_queue.key_mult,self__.ch);
var c__6068__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6069__auto__ = (function (){var switch__5998__auto__ = (function (state_22557){var state_val_22558 = (state_22557[1]);if((state_val_22558 === 1))
{var inst_22511 = cljs.core.PersistentVector.EMPTY;var inst_22512 = null;var state_22557__$1 = (function (){var statearr_22559 = state_22557;(statearr_22559[7] = inst_22511);
(statearr_22559[8] = inst_22512);
return statearr_22559;
})();var statearr_22560_22590 = state_22557__$1;(statearr_22560_22590[2] = null);
(statearr_22560_22590[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22558 === 2))
{var inst_22512 = (state_22557[8]);var state_22557__$1 = state_22557;if(cljs.core.truth_(inst_22512))
{var statearr_22561_22591 = state_22557__$1;(statearr_22561_22591[1] = 4);
} else
{var statearr_22562_22592 = state_22557__$1;(statearr_22562_22592[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22558 === 3))
{var inst_22555 = (state_22557[2]);var state_22557__$1 = state_22557;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22557__$1,inst_22555);
} else
{if((state_val_22558 === 4))
{var inst_22512 = (state_22557[8]);var state_22557__$1 = state_22557;var statearr_22563_22593 = state_22557__$1;(statearr_22563_22593[2] = inst_22512);
(statearr_22563_22593[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22558 === 5))
{var inst_22517 = cljs.core.async.chan.call(null);var state_22557__$1 = state_22557;var statearr_22564_22594 = state_22557__$1;(statearr_22564_22594[2] = inst_22517);
(statearr_22564_22594[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22558 === 6))
{var inst_22519 = (state_22557[2]);var inst_22520 = [self__.ch,inst_22519];var inst_22521 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_22520,null));var state_22557__$1 = state_22557;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_22557__$1,7,inst_22521);
} else
{if((state_val_22558 === 7))
{var inst_22523 = (state_22557[2]);var inst_22524 = cljs.core.nth.call(null,inst_22523,0,null);var inst_22525 = cljs.core.nth.call(null,inst_22523,1,null);var inst_22526 = cljs.core._EQ_.call(null,inst_22525,self__.ch);var state_22557__$1 = (function (){var statearr_22565 = state_22557;(statearr_22565[9] = inst_22524);
return statearr_22565;
})();if(inst_22526)
{var statearr_22566_22595 = state_22557__$1;(statearr_22566_22595[1] = 8);
} else
{var statearr_22567_22596 = state_22557__$1;(statearr_22567_22596[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22558 === 8))
{var inst_22528 = (state_22557[10]);var inst_22530 = (state_22557[11]);var inst_22524 = (state_22557[9]);var inst_22511 = (state_22557[7]);var inst_22528__$1 = cljs.core.conj.call(null,inst_22511,inst_22524);var inst_22529 = cljs.core.deref.call(null,self__.keymap);var inst_22530__$1 = omchaya.components.key_queue.match_keys.call(null,inst_22529,inst_22528__$1);var state_22557__$1 = (function (){var statearr_22568 = state_22557;(statearr_22568[10] = inst_22528__$1);
(statearr_22568[11] = inst_22530__$1);
return statearr_22568;
})();if(cljs.core.truth_(inst_22530__$1))
{var statearr_22569_22597 = state_22557__$1;(statearr_22569_22597[1] = 11);
} else
{var statearr_22570_22598 = state_22557__$1;(statearr_22570_22598[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22558 === 9))
{var inst_22511 = cljs.core.PersistentVector.EMPTY;var inst_22512 = null;var state_22557__$1 = (function (){var statearr_22571 = state_22557;(statearr_22571[7] = inst_22511);
(statearr_22571[8] = inst_22512);
return statearr_22571;
})();var statearr_22572_22599 = state_22557__$1;(statearr_22572_22599[2] = null);
(statearr_22572_22599[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22558 === 10))
{var inst_22553 = (state_22557[2]);var state_22557__$1 = state_22557;var statearr_22573_22600 = state_22557__$1;(statearr_22573_22600[2] = inst_22553);
(statearr_22573_22600[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22558 === 11))
{var state_22557__$1 = state_22557;var statearr_22574_22601 = state_22557__$1;(statearr_22574_22601[2] = null);
(statearr_22574_22601[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22558 === 12))
{var inst_22528 = (state_22557[10]);var inst_22546 = cljs.core.async.timeout.call(null,1000);var inst_22511 = inst_22528;var inst_22512 = inst_22546;var state_22557__$1 = (function (){var statearr_22575 = state_22557;(statearr_22575[7] = inst_22511);
(statearr_22575[8] = inst_22512);
return statearr_22575;
})();var statearr_22576_22602 = state_22557__$1;(statearr_22576_22602[2] = null);
(statearr_22576_22602[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22558 === 13))
{var inst_22549 = (state_22557[2]);var state_22557__$1 = state_22557;var statearr_22577_22603 = state_22557__$1;(statearr_22577_22603[2] = inst_22549);
(statearr_22577_22603[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22558 === 14))
{var inst_22543 = (state_22557[2]);var inst_22511 = cljs.core.PersistentVector.EMPTY;var inst_22512 = null;var state_22557__$1 = (function (){var statearr_22578 = state_22557;(statearr_22578[12] = inst_22543);
(statearr_22578[7] = inst_22511);
(statearr_22578[8] = inst_22512);
return statearr_22578;
})();var statearr_22579_22604 = state_22557__$1;(statearr_22579_22604[2] = null);
(statearr_22579_22604[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22558 === 15))
{var inst_22530 = (state_22557[11]);var inst_22524 = (state_22557[9]);var inst_22532 = (state_22557[2]);var inst_22533 = omchaya.utils.log_pr.call(null,"Error calling",inst_22530,"with key event",inst_22524,":");var inst_22534 = omchaya.utils.stack_trace.call(null,inst_22532);var inst_22535 = [new cljs.core.Keyword(null,"keyboard-handler-error","keyboard-handler-error",1374918097),inst_22532];var inst_22536 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_22535,null));var inst_22537 = cljs.core.async.put_BANG_.call(null,self__.error_ch,inst_22536);var state_22557__$1 = (function (){var statearr_22580 = state_22557;(statearr_22580[13] = inst_22533);
(statearr_22580[14] = inst_22534);
return statearr_22580;
})();var statearr_22581_22605 = state_22557__$1;(statearr_22581_22605[2] = inst_22537);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22557__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22558 === 16))
{var inst_22530 = (state_22557[11]);var inst_22524 = (state_22557[9]);var ___$2 = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_22557,15,Object,null,14);var inst_22541 = inst_22530.call(null,inst_22524);var state_22557__$1 = state_22557;var statearr_22582_22606 = state_22557__$1;(statearr_22582_22606[2] = inst_22541);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22557__$1);
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
var state_machine__5999__auto____0 = (function (){var statearr_22586 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_22586[0] = state_machine__5999__auto__);
(statearr_22586[1] = 1);
return statearr_22586;
});
var state_machine__5999__auto____1 = (function (state_22557){while(true){
var ret_value__6000__auto__ = (function (){try{while(true){
var result__6001__auto__ = switch__5998__auto__.call(null,state_22557);if(cljs.core.keyword_identical_QMARK_.call(null,result__6001__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6001__auto__;
}
break;
}
}catch (e22587){if((e22587 instanceof Object))
{var ex__6002__auto__ = e22587;var statearr_22588_22607 = state_22557;(statearr_22588_22607[5] = ex__6002__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22557);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e22587;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6000__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__22608 = state_22557;
state_22557 = G__22608;
continue;
}
} else
{return ret_value__6000__auto__;
}
break;
}
});
state_machine__5999__auto__ = function(state_22557){
switch(arguments.length){
case 0:
return state_machine__5999__auto____0.call(this);
case 1:
return state_machine__5999__auto____1.call(this,state_22557);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5999__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5999__auto____0;
state_machine__5999__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5999__auto____1;
return state_machine__5999__auto__;
})()
;})(switch__5998__auto__))
})();var state__6070__auto__ = (function (){var statearr_22589 = f__6069__auto__.call(null);(statearr_22589[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6068__auto__);
return statearr_22589;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6070__auto__);
}));
return c__6068__auto__;
});
omchaya.components.key_queue.t22506.prototype.om$core$IDisplayName$ = true;
omchaya.components.key_queue.t22506.prototype.om$core$IDisplayName$display_name$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var or__3443__auto__ = new cljs.core.Keyword(null,"react-name","react-name",4800236939).cljs$core$IFn$_invoke$arity$1(self__.opts);if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{return "KeyboardHandler";
}
});
omchaya.components.key_queue.t22506.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22508){var self__ = this;
var _22508__$1 = this;return self__.meta22507;
});
omchaya.components.key_queue.t22506.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22508,meta22507__$1){var self__ = this;
var _22508__$1 = this;return (new omchaya.components.key_queue.t22506(self__.ch,self__.keymap,self__.error_ch,self__.map__22505,self__.opts,self__.p__22419,self__.owner,self__.app,self__.KeyboardHandler,meta22507__$1));
});
omchaya.components.key_queue.__GT_t22506 = (function __GT_t22506(ch__$1,keymap__$1,error_ch__$1,map__22505__$2,opts__$1,p__22419__$1,owner__$1,app__$1,KeyboardHandler__$1,meta22507){return (new omchaya.components.key_queue.t22506(ch__$1,keymap__$1,error_ch__$1,map__22505__$2,opts__$1,p__22419__$1,owner__$1,app__$1,KeyboardHandler__$1,meta22507));
});
}
return (new omchaya.components.key_queue.t22506(ch,keymap,error_ch,map__22505__$1,opts,p__22419,owner,app,KeyboardHandler,null));
});
