// Compiled by ClojureScript 0.0-2277
goog.provide('growingtree_app.components.key_queue');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('cljs.core.async');
goog.require('sablono.core');
goog.require('cljs.core.async');
goog.require('dommy.core');
goog.require('cljs.core.async');
goog.require('sablono.core');
goog.require('growingtree_app.utils');
goog.require('om.core');
goog.require('dommy.core');
goog.require('om.core');
goog.require('growingtree_app.utils');
goog.require('clojure.string');
/**
* map from a character code (read from events with event.which)
* to a string representation of it.
* Only need to add 'special' things here.
*/
growingtree_app.components.key_queue.code__GT_key = cljs.core.PersistentHashMap.fromArrays([(186),(27),(39),(46),(40),(13),(191),(38),(37)],[";","esc","right","del","down","enter","slash","up","left"]);
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
growingtree_app.components.key_queue.mod_keys = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [String.fromCharCode((16)),String.fromCharCode((17)),String.fromCharCode((18))], null);
/**
* Given an event, return a string like 'up' or 'shift+l' or 'ctrl+;'
* describing the key that was pressed.
* This fn will never return just 'shift' or any other lone modifier key.
*/
growingtree_app.components.key_queue.event__GT_key = (function event__GT_key(event){var mods = growingtree_app.components.key_queue.event_modifiers.call(null,event);var which = event.which;var key = (function (){var or__3543__auto__ = growingtree_app.components.key_queue.code__GT_key.call(null,which);if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return String.fromCharCode(which).toLowerCase();
}
})();if(cljs.core.truth_((function (){var and__3531__auto__ = key;if(cljs.core.truth_(and__3531__auto__))
{return (!(cljs.core.empty_QMARK_.call(null,key))) && (cljs.core.not.call(null,cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([key], true),growingtree_app.components.key_queue.mod_keys)));
} else
{return and__3531__auto__;
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
growingtree_app.components.key_queue.start_key_queue = (function start_key_queue(key_ch){return dommy.core.listen_BANG_.call(null,document,new cljs.core.Keyword(null,"keydown","keydown",-629268186),(function (p1__11918_SHARP_){var temp__4126__auto__ = growingtree_app.components.key_queue.event__GT_key.call(null,p1__11918_SHARP_);if(cljs.core.truth_(temp__4126__auto__))
{var k = temp__4126__auto__;return cljs.core.async.put_BANG_.call(null,key_ch,k);
} else
{return null;
}
}));
});
growingtree_app.components.key_queue.global_key_ch = cljs.core.async.chan.call(null,cljs.core.async.sliding_buffer.call(null,(1000)));
growingtree_app.components.key_queue.start_key_queue.call(null,growingtree_app.components.key_queue.global_key_ch);
growingtree_app.components.key_queue.key_mult = cljs.core.async.mult.call(null,growingtree_app.components.key_queue.global_key_ch);
growingtree_app.components.key_queue.combo_match_QMARK_ = (function combo_match_QMARK_(keys,combo){var tail_keys = cljs.core.take_while.call(null,cljs.core.seq,cljs.core.iterate.call(null,cljs.core.rest,keys));return cljs.core.some.call(null,cljs.core.partial.call(null,cljs.core._EQ_,combo),tail_keys);
});
growingtree_app.components.key_queue.combos_match_QMARK_ = (function combos_match_QMARK_(combo_or_combos,keys){var combos = ((cljs.core.coll_QMARK_.call(null,combo_or_combos))?combo_or_combos:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [combo_or_combos], null));var combos__$1 = cljs.core.map.call(null,((function (combos){
return (function (p1__11919_SHARP_){return clojure.string.split.call(null,p1__11919_SHARP_,/ /);
});})(combos))
,combos);return cljs.core.some.call(null,cljs.core.partial.call(null,growingtree_app.components.key_queue.combo_match_QMARK_,keys),combos__$1);
});
/**
* Given a keymap for the component and the most recent series of keys
* that were pressed (not the codes, but strings like 'shift+r' and
* stuff) return a handler fn associated with a key combo in the keys
* list or nil.
*/
growingtree_app.components.key_queue.match_keys = (function match_keys(keymap,keys){return cljs.core.first.call(null,cljs.core.keep.call(null,(function (p__11922){var vec__11923 = p__11922;var c = cljs.core.nth.call(null,vec__11923,(0),null);var f = cljs.core.nth.call(null,vec__11923,(1),null);if(cljs.core.truth_(growingtree_app.components.key_queue.combos_match_QMARK_.call(null,c,keys)))
{return f;
} else
{return null;
}
}),keymap));
});
growingtree_app.components.key_queue.KeyboardHandler = (function KeyboardHandler(app,owner,p__11924,opts){var map__12010 = p__11924;var map__12010__$1 = ((cljs.core.seq_QMARK_.call(null,map__12010))?cljs.core.apply.call(null,cljs.core.hash_map,map__12010):map__12010);var error_ch = cljs.core.get.call(null,map__12010__$1,new cljs.core.Keyword(null,"error-ch","error-ch",-1177587736));var keymap = cljs.core.get.call(null,map__12010__$1,new cljs.core.Keyword(null,"keymap","keymap",-499605268));var ch = cljs.core.async.chan.call(null);if(typeof growingtree_app.components.key_queue.t12011 !== 'undefined')
{} else
{
/**
* @constructor
*/
growingtree_app.components.key_queue.t12011 = (function (ch,keymap,error_ch,map__12010,opts,p__11924,owner,app,KeyboardHandler,meta12012){
this.ch = ch;
this.keymap = keymap;
this.error_ch = error_ch;
this.map__12010 = map__12010;
this.opts = opts;
this.p__11924 = p__11924;
this.owner = owner;
this.app = app;
this.KeyboardHandler = KeyboardHandler;
this.meta12012 = meta12012;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
growingtree_app.components.key_queue.t12011.cljs$lang$type = true;
growingtree_app.components.key_queue.t12011.cljs$lang$ctorStr = "growingtree-app.components.key-queue/t12011";
growingtree_app.components.key_queue.t12011.cljs$lang$ctorPrWriter = ((function (ch,map__12010,map__12010__$1,error_ch,keymap){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"growingtree-app.components.key-queue/t12011");
});})(ch,map__12010,map__12010__$1,error_ch,keymap))
;
growingtree_app.components.key_queue.t12011.prototype.om$core$IRender$ = true;
growingtree_app.components.key_queue.t12011.prototype.om$core$IRender$render$arity$1 = ((function (ch,map__12010,map__12010__$1,error_ch,keymap){
return (function (_){var self__ = this;
var ___$1 = this;return React.DOM.span({"className": "hidden"});
});})(ch,map__12010,map__12010__$1,error_ch,keymap))
;
growingtree_app.components.key_queue.t12011.prototype.om$core$IWillUnmount$ = true;
growingtree_app.components.key_queue.t12011.prototype.om$core$IWillUnmount$will_unmount$arity$1 = ((function (ch,map__12010,map__12010__$1,error_ch,keymap){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.untap.call(null,growingtree_app.components.key_queue.key_mult,self__.ch);
});})(ch,map__12010,map__12010__$1,error_ch,keymap))
;
growingtree_app.components.key_queue.t12011.prototype.om$core$IDidMount$ = true;
growingtree_app.components.key_queue.t12011.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (ch,map__12010,map__12010__$1,error_ch,keymap){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.tap.call(null,growingtree_app.components.key_queue.key_mult,self__.ch);
var c__6345__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6345__auto__,___$1,ch,map__12010,map__12010__$1,error_ch,keymap){
return (function (){var f__6346__auto__ = (function (){var switch__6280__auto__ = ((function (c__6345__auto__,___$1,ch,map__12010,map__12010__$1,error_ch,keymap){
return (function (state_12062){var state_val_12063 = (state_12062[(1)]);if((state_val_12063 === (7)))
{var inst_12028 = (state_12062[(2)]);var inst_12029 = cljs.core.nth.call(null,inst_12028,(0),null);var inst_12030 = cljs.core.nth.call(null,inst_12028,(1),null);var inst_12031 = cljs.core._EQ_.call(null,inst_12030,self__.ch);var state_12062__$1 = (function (){var statearr_12064 = state_12062;(statearr_12064[(7)] = inst_12029);
return statearr_12064;
})();if(inst_12031)
{var statearr_12065_12095 = state_12062__$1;(statearr_12065_12095[(1)] = (8));
} else
{var statearr_12066_12096 = state_12062__$1;(statearr_12066_12096[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12063 === (1)))
{var inst_12016 = cljs.core.PersistentVector.EMPTY;var inst_12017 = null;var state_12062__$1 = (function (){var statearr_12067 = state_12062;(statearr_12067[(8)] = inst_12016);
(statearr_12067[(9)] = inst_12017);
return statearr_12067;
})();var statearr_12068_12097 = state_12062__$1;(statearr_12068_12097[(2)] = null);
(statearr_12068_12097[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12063 === (4)))
{var inst_12017 = (state_12062[(9)]);var state_12062__$1 = state_12062;var statearr_12069_12098 = state_12062__$1;(statearr_12069_12098[(2)] = inst_12017);
(statearr_12069_12098[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12063 === (15)))
{var inst_12035 = (state_12062[(10)]);var inst_12029 = (state_12062[(7)]);var inst_12037 = (state_12062[(2)]);var inst_12038 = growingtree_app.utils.log_pr.call(null,"Error calling",inst_12035,"with key event",inst_12029,":");var inst_12039 = growingtree_app.utils.stack_trace.call(null,inst_12037);var inst_12040 = [new cljs.core.Keyword(null,"keyboard-handler-error","keyboard-handler-error",-1252762102),inst_12037];var inst_12041 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_12040,null));var inst_12042 = cljs.core.async.put_BANG_.call(null,self__.error_ch,inst_12041);var state_12062__$1 = (function (){var statearr_12070 = state_12062;(statearr_12070[(11)] = inst_12038);
(statearr_12070[(12)] = inst_12039);
return statearr_12070;
})();var statearr_12071_12099 = state_12062__$1;(statearr_12071_12099[(2)] = inst_12042);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12062__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12063 === (13)))
{var inst_12054 = (state_12062[(2)]);var state_12062__$1 = state_12062;var statearr_12072_12100 = state_12062__$1;(statearr_12072_12100[(2)] = inst_12054);
(statearr_12072_12100[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12063 === (6)))
{var inst_12024 = (state_12062[(2)]);var inst_12025 = [self__.ch,inst_12024];var inst_12026 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_12025,null));var state_12062__$1 = state_12062;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_12062__$1,(7),inst_12026);
} else
{if((state_val_12063 === (3)))
{var inst_12060 = (state_12062[(2)]);var state_12062__$1 = state_12062;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12062__$1,inst_12060);
} else
{if((state_val_12063 === (12)))
{var inst_12033 = (state_12062[(13)]);var inst_12051 = cljs.core.async.timeout.call(null,(1000));var inst_12016 = inst_12033;var inst_12017 = inst_12051;var state_12062__$1 = (function (){var statearr_12073 = state_12062;(statearr_12073[(8)] = inst_12016);
(statearr_12073[(9)] = inst_12017);
return statearr_12073;
})();var statearr_12074_12101 = state_12062__$1;(statearr_12074_12101[(2)] = null);
(statearr_12074_12101[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12063 === (2)))
{var inst_12017 = (state_12062[(9)]);var state_12062__$1 = state_12062;if(cljs.core.truth_(inst_12017))
{var statearr_12075_12102 = state_12062__$1;(statearr_12075_12102[(1)] = (4));
} else
{var statearr_12076_12103 = state_12062__$1;(statearr_12076_12103[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12063 === (11)))
{var state_12062__$1 = state_12062;var statearr_12077_12104 = state_12062__$1;(statearr_12077_12104[(2)] = null);
(statearr_12077_12104[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12063 === (9)))
{var inst_12016 = cljs.core.PersistentVector.EMPTY;var inst_12017 = null;var state_12062__$1 = (function (){var statearr_12078 = state_12062;(statearr_12078[(8)] = inst_12016);
(statearr_12078[(9)] = inst_12017);
return statearr_12078;
})();var statearr_12079_12105 = state_12062__$1;(statearr_12079_12105[(2)] = null);
(statearr_12079_12105[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12063 === (5)))
{var inst_12022 = cljs.core.async.chan.call(null);var state_12062__$1 = state_12062;var statearr_12080_12106 = state_12062__$1;(statearr_12080_12106[(2)] = inst_12022);
(statearr_12080_12106[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12063 === (14)))
{var inst_12048 = (state_12062[(2)]);var inst_12016 = cljs.core.PersistentVector.EMPTY;var inst_12017 = null;var state_12062__$1 = (function (){var statearr_12081 = state_12062;(statearr_12081[(8)] = inst_12016);
(statearr_12081[(9)] = inst_12017);
(statearr_12081[(14)] = inst_12048);
return statearr_12081;
})();var statearr_12082_12107 = state_12062__$1;(statearr_12082_12107[(2)] = null);
(statearr_12082_12107[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12063 === (16)))
{var inst_12035 = (state_12062[(10)]);var inst_12029 = (state_12062[(7)]);var ___$2 = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_12062,(15),Object,null,(14));var inst_12046 = inst_12035.call(null,inst_12029);var state_12062__$1 = state_12062;var statearr_12083_12108 = state_12062__$1;(statearr_12083_12108[(2)] = inst_12046);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12062__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12063 === (10)))
{var inst_12058 = (state_12062[(2)]);var state_12062__$1 = state_12062;var statearr_12084_12109 = state_12062__$1;(statearr_12084_12109[(2)] = inst_12058);
(statearr_12084_12109[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12063 === (8)))
{var inst_12033 = (state_12062[(13)]);var inst_12035 = (state_12062[(10)]);var inst_12016 = (state_12062[(8)]);var inst_12029 = (state_12062[(7)]);var inst_12033__$1 = cljs.core.conj.call(null,inst_12016,inst_12029);var inst_12034 = cljs.core.deref.call(null,self__.keymap);var inst_12035__$1 = growingtree_app.components.key_queue.match_keys.call(null,inst_12034,inst_12033__$1);var state_12062__$1 = (function (){var statearr_12085 = state_12062;(statearr_12085[(13)] = inst_12033__$1);
(statearr_12085[(10)] = inst_12035__$1);
return statearr_12085;
})();if(cljs.core.truth_(inst_12035__$1))
{var statearr_12086_12110 = state_12062__$1;(statearr_12086_12110[(1)] = (11));
} else
{var statearr_12087_12111 = state_12062__$1;(statearr_12087_12111[(1)] = (12));
}
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
});})(c__6345__auto__,___$1,ch,map__12010,map__12010__$1,error_ch,keymap))
;return ((function (switch__6280__auto__,c__6345__auto__,___$1,ch,map__12010,map__12010__$1,error_ch,keymap){
return (function() {
var state_machine__6281__auto__ = null;
var state_machine__6281__auto____0 = (function (){var statearr_12091 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12091[(0)] = state_machine__6281__auto__);
(statearr_12091[(1)] = (1));
return statearr_12091;
});
var state_machine__6281__auto____1 = (function (state_12062){while(true){
var ret_value__6282__auto__ = (function (){try{while(true){
var result__6283__auto__ = switch__6280__auto__.call(null,state_12062);if(cljs.core.keyword_identical_QMARK_.call(null,result__6283__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6283__auto__;
}
break;
}
}catch (e12092){if((e12092 instanceof Object))
{var ex__6284__auto__ = e12092;var statearr_12093_12112 = state_12062;(statearr_12093_12112[(5)] = ex__6284__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12062);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e12092;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6282__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12113 = state_12062;
state_12062 = G__12113;
continue;
}
} else
{return ret_value__6282__auto__;
}
break;
}
});
state_machine__6281__auto__ = function(state_12062){
switch(arguments.length){
case 0:
return state_machine__6281__auto____0.call(this);
case 1:
return state_machine__6281__auto____1.call(this,state_12062);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6281__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6281__auto____0;
state_machine__6281__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6281__auto____1;
return state_machine__6281__auto__;
})()
;})(switch__6280__auto__,c__6345__auto__,___$1,ch,map__12010,map__12010__$1,error_ch,keymap))
})();var state__6347__auto__ = (function (){var statearr_12094 = f__6346__auto__.call(null);(statearr_12094[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6345__auto__);
return statearr_12094;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6347__auto__);
});})(c__6345__auto__,___$1,ch,map__12010,map__12010__$1,error_ch,keymap))
);
return c__6345__auto__;
});})(ch,map__12010,map__12010__$1,error_ch,keymap))
;
growingtree_app.components.key_queue.t12011.prototype.om$core$IDisplayName$ = true;
growingtree_app.components.key_queue.t12011.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (ch,map__12010,map__12010__$1,error_ch,keymap){
return (function (_){var self__ = this;
var ___$1 = this;var or__3543__auto__ = new cljs.core.Keyword(null,"react-name","react-name",-834049397).cljs$core$IFn$_invoke$arity$1(self__.opts);if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return "KeyboardHandler";
}
});})(ch,map__12010,map__12010__$1,error_ch,keymap))
;
growingtree_app.components.key_queue.t12011.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (ch,map__12010,map__12010__$1,error_ch,keymap){
return (function (_12013){var self__ = this;
var _12013__$1 = this;return self__.meta12012;
});})(ch,map__12010,map__12010__$1,error_ch,keymap))
;
growingtree_app.components.key_queue.t12011.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (ch,map__12010,map__12010__$1,error_ch,keymap){
return (function (_12013,meta12012__$1){var self__ = this;
var _12013__$1 = this;return (new growingtree_app.components.key_queue.t12011(self__.ch,self__.keymap,self__.error_ch,self__.map__12010,self__.opts,self__.p__11924,self__.owner,self__.app,self__.KeyboardHandler,meta12012__$1));
});})(ch,map__12010,map__12010__$1,error_ch,keymap))
;
growingtree_app.components.key_queue.__GT_t12011 = ((function (ch,map__12010,map__12010__$1,error_ch,keymap){
return (function __GT_t12011(ch__$1,keymap__$1,error_ch__$1,map__12010__$2,opts__$1,p__11924__$1,owner__$1,app__$1,KeyboardHandler__$1,meta12012){return (new growingtree_app.components.key_queue.t12011(ch__$1,keymap__$1,error_ch__$1,map__12010__$2,opts__$1,p__11924__$1,owner__$1,app__$1,KeyboardHandler__$1,meta12012));
});})(ch,map__12010,map__12010__$1,error_ch,keymap))
;
}
return (new growingtree_app.components.key_queue.t12011(ch,keymap,error_ch,map__12010__$1,opts,p__11924,owner,app,KeyboardHandler,null));
});

//# sourceMappingURL=key_queue.js.map