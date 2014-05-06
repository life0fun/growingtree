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
growingtree_app.components.key_queue.start_key_queue = (function start_key_queue(key_ch){return dommy.core.listen_BANG_.call(null,document,new cljs.core.Keyword(null,"keydown","keydown",4493897459),(function (p1__11374_SHARP_){var temp__4092__auto__ = growingtree_app.components.key_queue.event__GT_key.call(null,p1__11374_SHARP_);if(cljs.core.truth_(temp__4092__auto__))
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
return (function (p1__11375_SHARP_){return clojure.string.split.call(null,p1__11375_SHARP_,/ /);
});})(combos))
,combos);return cljs.core.some.call(null,cljs.core.partial.call(null,growingtree_app.components.key_queue.combo_match_QMARK_,keys),combos__$1);
});
/**
* Given a keymap for the component and the most recent series of keys
* that were pressed (not the codes, but strings like 'shift+r' and
* stuff) return a handler fn associated with a key combo in the keys
* list or nil.
*/
growingtree_app.components.key_queue.match_keys = (function match_keys(keymap,keys){return cljs.core.first.call(null,cljs.core.keep.call(null,(function (p__11378){var vec__11379 = p__11378;var c = cljs.core.nth.call(null,vec__11379,0,null);var f = cljs.core.nth.call(null,vec__11379,1,null);if(cljs.core.truth_(growingtree_app.components.key_queue.combos_match_QMARK_.call(null,c,keys)))
{return f;
} else
{return null;
}
}),keymap));
});
growingtree_app.components.key_queue.KeyboardHandler = (function KeyboardHandler(app,owner,p__11380,opts){var map__11466 = p__11380;var map__11466__$1 = ((cljs.core.seq_QMARK_.call(null,map__11466))?cljs.core.apply.call(null,cljs.core.hash_map,map__11466):map__11466);var error_ch = cljs.core.get.call(null,map__11466__$1,new cljs.core.Keyword(null,"error-ch","error-ch",2409970108));var keymap = cljs.core.get.call(null,map__11466__$1,new cljs.core.Keyword(null,"keymap","keymap",4174211599));var ch = cljs.core.async.chan.call(null);if(typeof growingtree_app.components.key_queue.t11467 !== 'undefined')
{} else
{
/**
* @constructor
*/
growingtree_app.components.key_queue.t11467 = (function (ch,keymap,error_ch,map__11466,opts,p__11380,owner,app,KeyboardHandler,meta11468){
this.ch = ch;
this.keymap = keymap;
this.error_ch = error_ch;
this.map__11466 = map__11466;
this.opts = opts;
this.p__11380 = p__11380;
this.owner = owner;
this.app = app;
this.KeyboardHandler = KeyboardHandler;
this.meta11468 = meta11468;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
growingtree_app.components.key_queue.t11467.cljs$lang$type = true;
growingtree_app.components.key_queue.t11467.cljs$lang$ctorStr = "growingtree-app.components.key-queue/t11467";
growingtree_app.components.key_queue.t11467.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"growingtree-app.components.key-queue/t11467");
});
growingtree_app.components.key_queue.t11467.prototype.om$core$IRender$ = true;
growingtree_app.components.key_queue.t11467.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.span({"className": "hidden"});
});
growingtree_app.components.key_queue.t11467.prototype.om$core$IWillUnmount$ = true;
growingtree_app.components.key_queue.t11467.prototype.om$core$IWillUnmount$will_unmount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.untap.call(null,growingtree_app.components.key_queue.key_mult,self__.ch);
});
growingtree_app.components.key_queue.t11467.prototype.om$core$IDidMount$ = true;
growingtree_app.components.key_queue.t11467.prototype.om$core$IDidMount$did_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.tap.call(null,growingtree_app.components.key_queue.key_mult,self__.ch);
var c__6068__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6069__auto__ = (function (){var switch__5998__auto__ = (function (state_11518){var state_val_11519 = (state_11518[1]);if((state_val_11519 === 1))
{var inst_11472 = cljs.core.PersistentVector.EMPTY;var inst_11473 = null;var state_11518__$1 = (function (){var statearr_11520 = state_11518;(statearr_11520[7] = inst_11472);
(statearr_11520[8] = inst_11473);
return statearr_11520;
})();var statearr_11521_11551 = state_11518__$1;(statearr_11521_11551[2] = null);
(statearr_11521_11551[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11519 === 2))
{var inst_11473 = (state_11518[8]);var state_11518__$1 = state_11518;if(cljs.core.truth_(inst_11473))
{var statearr_11522_11552 = state_11518__$1;(statearr_11522_11552[1] = 4);
} else
{var statearr_11523_11553 = state_11518__$1;(statearr_11523_11553[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11519 === 3))
{var inst_11516 = (state_11518[2]);var state_11518__$1 = state_11518;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11518__$1,inst_11516);
} else
{if((state_val_11519 === 4))
{var inst_11473 = (state_11518[8]);var state_11518__$1 = state_11518;var statearr_11524_11554 = state_11518__$1;(statearr_11524_11554[2] = inst_11473);
(statearr_11524_11554[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11519 === 5))
{var inst_11478 = cljs.core.async.chan.call(null);var state_11518__$1 = state_11518;var statearr_11525_11555 = state_11518__$1;(statearr_11525_11555[2] = inst_11478);
(statearr_11525_11555[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11519 === 6))
{var inst_11480 = (state_11518[2]);var inst_11481 = [self__.ch,inst_11480];var inst_11482 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_11481,null));var state_11518__$1 = state_11518;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_11518__$1,7,inst_11482);
} else
{if((state_val_11519 === 7))
{var inst_11484 = (state_11518[2]);var inst_11485 = cljs.core.nth.call(null,inst_11484,0,null);var inst_11486 = cljs.core.nth.call(null,inst_11484,1,null);var inst_11487 = cljs.core._EQ_.call(null,inst_11486,self__.ch);var state_11518__$1 = (function (){var statearr_11526 = state_11518;(statearr_11526[9] = inst_11485);
return statearr_11526;
})();if(inst_11487)
{var statearr_11527_11556 = state_11518__$1;(statearr_11527_11556[1] = 8);
} else
{var statearr_11528_11557 = state_11518__$1;(statearr_11528_11557[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11519 === 8))
{var inst_11491 = (state_11518[10]);var inst_11489 = (state_11518[11]);var inst_11472 = (state_11518[7]);var inst_11485 = (state_11518[9]);var inst_11489__$1 = cljs.core.conj.call(null,inst_11472,inst_11485);var inst_11490 = cljs.core.deref.call(null,self__.keymap);var inst_11491__$1 = growingtree_app.components.key_queue.match_keys.call(null,inst_11490,inst_11489__$1);var state_11518__$1 = (function (){var statearr_11529 = state_11518;(statearr_11529[10] = inst_11491__$1);
(statearr_11529[11] = inst_11489__$1);
return statearr_11529;
})();if(cljs.core.truth_(inst_11491__$1))
{var statearr_11530_11558 = state_11518__$1;(statearr_11530_11558[1] = 11);
} else
{var statearr_11531_11559 = state_11518__$1;(statearr_11531_11559[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11519 === 9))
{var inst_11472 = cljs.core.PersistentVector.EMPTY;var inst_11473 = null;var state_11518__$1 = (function (){var statearr_11532 = state_11518;(statearr_11532[7] = inst_11472);
(statearr_11532[8] = inst_11473);
return statearr_11532;
})();var statearr_11533_11560 = state_11518__$1;(statearr_11533_11560[2] = null);
(statearr_11533_11560[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11519 === 10))
{var inst_11514 = (state_11518[2]);var state_11518__$1 = state_11518;var statearr_11534_11561 = state_11518__$1;(statearr_11534_11561[2] = inst_11514);
(statearr_11534_11561[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11519 === 11))
{var state_11518__$1 = state_11518;var statearr_11535_11562 = state_11518__$1;(statearr_11535_11562[2] = null);
(statearr_11535_11562[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11519 === 12))
{var inst_11489 = (state_11518[11]);var inst_11507 = cljs.core.async.timeout.call(null,1000);var inst_11472 = inst_11489;var inst_11473 = inst_11507;var state_11518__$1 = (function (){var statearr_11536 = state_11518;(statearr_11536[7] = inst_11472);
(statearr_11536[8] = inst_11473);
return statearr_11536;
})();var statearr_11537_11563 = state_11518__$1;(statearr_11537_11563[2] = null);
(statearr_11537_11563[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11519 === 13))
{var inst_11510 = (state_11518[2]);var state_11518__$1 = state_11518;var statearr_11538_11564 = state_11518__$1;(statearr_11538_11564[2] = inst_11510);
(statearr_11538_11564[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11519 === 14))
{var inst_11504 = (state_11518[2]);var inst_11472 = cljs.core.PersistentVector.EMPTY;var inst_11473 = null;var state_11518__$1 = (function (){var statearr_11539 = state_11518;(statearr_11539[12] = inst_11504);
(statearr_11539[7] = inst_11472);
(statearr_11539[8] = inst_11473);
return statearr_11539;
})();var statearr_11540_11565 = state_11518__$1;(statearr_11540_11565[2] = null);
(statearr_11540_11565[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11519 === 15))
{var inst_11491 = (state_11518[10]);var inst_11485 = (state_11518[9]);var inst_11493 = (state_11518[2]);var inst_11494 = growingtree_app.utils.log_pr.call(null,"Error calling",inst_11491,"with key event",inst_11485,":");var inst_11495 = growingtree_app.utils.stack_trace.call(null,inst_11493);var inst_11496 = [new cljs.core.Keyword(null,"keyboard-handler-error","keyboard-handler-error",1374918097),inst_11493];var inst_11497 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_11496,null));var inst_11498 = cljs.core.async.put_BANG_.call(null,self__.error_ch,inst_11497);var state_11518__$1 = (function (){var statearr_11541 = state_11518;(statearr_11541[13] = inst_11494);
(statearr_11541[14] = inst_11495);
return statearr_11541;
})();var statearr_11542_11566 = state_11518__$1;(statearr_11542_11566[2] = inst_11498);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11518__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11519 === 16))
{var inst_11491 = (state_11518[10]);var inst_11485 = (state_11518[9]);var ___$2 = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_11518,15,Object,null,14);var inst_11502 = inst_11491.call(null,inst_11485);var state_11518__$1 = state_11518;var statearr_11543_11567 = state_11518__$1;(statearr_11543_11567[2] = inst_11502);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11518__$1);
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
var state_machine__5999__auto____0 = (function (){var statearr_11547 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11547[0] = state_machine__5999__auto__);
(statearr_11547[1] = 1);
return statearr_11547;
});
var state_machine__5999__auto____1 = (function (state_11518){while(true){
var ret_value__6000__auto__ = (function (){try{while(true){
var result__6001__auto__ = switch__5998__auto__.call(null,state_11518);if(cljs.core.keyword_identical_QMARK_.call(null,result__6001__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6001__auto__;
}
break;
}
}catch (e11548){if((e11548 instanceof Object))
{var ex__6002__auto__ = e11548;var statearr_11549_11568 = state_11518;(statearr_11549_11568[5] = ex__6002__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11518);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11548;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6000__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11569 = state_11518;
state_11518 = G__11569;
continue;
}
} else
{return ret_value__6000__auto__;
}
break;
}
});
state_machine__5999__auto__ = function(state_11518){
switch(arguments.length){
case 0:
return state_machine__5999__auto____0.call(this);
case 1:
return state_machine__5999__auto____1.call(this,state_11518);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5999__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5999__auto____0;
state_machine__5999__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5999__auto____1;
return state_machine__5999__auto__;
})()
;})(switch__5998__auto__))
})();var state__6070__auto__ = (function (){var statearr_11550 = f__6069__auto__.call(null);(statearr_11550[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6068__auto__);
return statearr_11550;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6070__auto__);
}));
return c__6068__auto__;
});
growingtree_app.components.key_queue.t11467.prototype.om$core$IDisplayName$ = true;
growingtree_app.components.key_queue.t11467.prototype.om$core$IDisplayName$display_name$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var or__3443__auto__ = new cljs.core.Keyword(null,"react-name","react-name",4800236939).cljs$core$IFn$_invoke$arity$1(self__.opts);if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{return "KeyboardHandler";
}
});
growingtree_app.components.key_queue.t11467.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11469){var self__ = this;
var _11469__$1 = this;return self__.meta11468;
});
growingtree_app.components.key_queue.t11467.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11469,meta11468__$1){var self__ = this;
var _11469__$1 = this;return (new growingtree_app.components.key_queue.t11467(self__.ch,self__.keymap,self__.error_ch,self__.map__11466,self__.opts,self__.p__11380,self__.owner,self__.app,self__.KeyboardHandler,meta11468__$1));
});
growingtree_app.components.key_queue.__GT_t11467 = (function __GT_t11467(ch__$1,keymap__$1,error_ch__$1,map__11466__$2,opts__$1,p__11380__$1,owner__$1,app__$1,KeyboardHandler__$1,meta11468){return (new growingtree_app.components.key_queue.t11467(ch__$1,keymap__$1,error_ch__$1,map__11466__$2,opts__$1,p__11380__$1,owner__$1,app__$1,KeyboardHandler__$1,meta11468));
});
}
return (new growingtree_app.components.key_queue.t11467(ch,keymap,error_ch,map__11466__$1,opts,p__11380,owner,app,KeyboardHandler,null));
});
