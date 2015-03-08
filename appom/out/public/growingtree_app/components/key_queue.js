// Compiled by ClojureScript 0.0-2850 {}
goog.provide('growingtree_app.components.key_queue');
goog.require('cljs.core');
goog.require('sablono.core');
goog.require('cljs.core.async');
goog.require('dommy.core');
goog.require('growingtree_app.utils');
goog.require('om.core');
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
growingtree_app.components.key_queue.event_modifiers = (function event_modifiers(e){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.filter.call(null,cljs.core.identity,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(e.shiftKey)?"shift":null),(cljs.core.truth_(e.altKey)?"alt":null),(cljs.core.truth_(e.ctrlKey)?"ctrl":null),(cljs.core.truth_(e.metaKey)?"meta":null)], null)));
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
growingtree_app.components.key_queue.event__GT_key = (function event__GT_key(event){
var mods = growingtree_app.components.key_queue.event_modifiers.call(null,event);
var which = event.which;
var key = (function (){var or__3807__auto__ = growingtree_app.components.key_queue.code__GT_key.call(null,which);
if(cljs.core.truth_(or__3807__auto__)){
return or__3807__auto__;
} else {
return String.fromCharCode(which).toLowerCase();
}
})();
if(cljs.core.truth_((function (){var and__3795__auto__ = key;
if(cljs.core.truth_(and__3795__auto__)){
return (!(cljs.core.empty_QMARK_.call(null,key))) && (cljs.core.not.call(null,cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([key], true),growingtree_app.components.key_queue.mod_keys)));
} else {
return and__3795__auto__;
}
})())){
return clojure.string.join.call(null,"+",cljs.core.conj.call(null,mods,key));
} else {
return null;
}
});
growingtree_app.components.key_queue.log_keystroke = (function log_keystroke(e){
growingtree_app.utils.log.call(null,"key event",e);

return e;
});
growingtree_app.components.key_queue.start_key_queue = (function start_key_queue(key_ch){
return dommy.core.listen_BANG_.call(null,document,new cljs.core.Keyword(null,"keydown","keydown",-629268186),(function (p1__21771_SHARP_){
var temp__4126__auto__ = growingtree_app.components.key_queue.event__GT_key.call(null,p1__21771_SHARP_);
if(cljs.core.truth_(temp__4126__auto__)){
var k = temp__4126__auto__;
return cljs.core.async.put_BANG_.call(null,key_ch,k);
} else {
return null;
}
}));
});
growingtree_app.components.key_queue.global_key_ch = cljs.core.async.chan.call(null,cljs.core.async.sliding_buffer.call(null,(1000)));
growingtree_app.components.key_queue.start_key_queue.call(null,growingtree_app.components.key_queue.global_key_ch);
growingtree_app.components.key_queue.key_mult = cljs.core.async.mult.call(null,growingtree_app.components.key_queue.global_key_ch);
growingtree_app.components.key_queue.combo_match_QMARK_ = (function combo_match_QMARK_(keys,combo){
var tail_keys = cljs.core.take_while.call(null,cljs.core.seq,cljs.core.iterate.call(null,cljs.core.rest,keys));
return cljs.core.some.call(null,cljs.core.partial.call(null,cljs.core._EQ_,combo),tail_keys);
});
growingtree_app.components.key_queue.combos_match_QMARK_ = (function combos_match_QMARK_(combo_or_combos,keys){
var combos = ((cljs.core.coll_QMARK_.call(null,combo_or_combos))?combo_or_combos:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [combo_or_combos], null));
var combos__$1 = cljs.core.map.call(null,((function (combos){
return (function (p1__21772_SHARP_){
return clojure.string.split.call(null,p1__21772_SHARP_,/ /);
});})(combos))
,combos);
return cljs.core.some.call(null,cljs.core.partial.call(null,growingtree_app.components.key_queue.combo_match_QMARK_,keys),combos__$1);
});
/**
* Given a keymap for the component and the most recent series of keys
* that were pressed (not the codes, but strings like 'shift+r' and
* stuff) return a handler fn associated with a key combo in the keys
* list or nil.
*/
growingtree_app.components.key_queue.match_keys = (function match_keys(keymap,keys){
return cljs.core.first.call(null,cljs.core.keep.call(null,(function (p__21775){
var vec__21776 = p__21775;
var c = cljs.core.nth.call(null,vec__21776,(0),null);
var f = cljs.core.nth.call(null,vec__21776,(1),null);
if(cljs.core.truth_(growingtree_app.components.key_queue.combos_match_QMARK_.call(null,c,keys))){
return f;
} else {
return null;
}
}),keymap));
});
growingtree_app.components.key_queue.KeyboardHandler = (function KeyboardHandler(app,owner,p__21777,opts){
var map__21868 = p__21777;
var map__21868__$1 = ((cljs.core.seq_QMARK_.call(null,map__21868))?cljs.core.apply.call(null,cljs.core.hash_map,map__21868):map__21868);
var error_ch = cljs.core.get.call(null,map__21868__$1,new cljs.core.Keyword(null,"error-ch","error-ch",-1177587736));
var keymap = cljs.core.get.call(null,map__21868__$1,new cljs.core.Keyword(null,"keymap","keymap",-499605268));
var ch = cljs.core.async.chan.call(null);
if(typeof growingtree_app.components.key_queue.t21869 !== 'undefined'){
} else {

/**
* @constructor
*/
growingtree_app.components.key_queue.t21869 = (function (ch,keymap,error_ch,map__21868,opts,p__21777,owner,app,KeyboardHandler,meta21870){
this.ch = ch;
this.keymap = keymap;
this.error_ch = error_ch;
this.map__21868 = map__21868;
this.opts = opts;
this.p__21777 = p__21777;
this.owner = owner;
this.app = app;
this.KeyboardHandler = KeyboardHandler;
this.meta21870 = meta21870;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
growingtree_app.components.key_queue.t21869.prototype.om$core$IRender$ = true;

growingtree_app.components.key_queue.t21869.prototype.om$core$IRender$render$arity$1 = ((function (ch,map__21868,map__21868__$1,error_ch,keymap){
return (function (_){
var self__ = this;
var ___$1 = this;
return React.DOM.span({"className": "hidden"});
});})(ch,map__21868,map__21868__$1,error_ch,keymap))
;

growingtree_app.components.key_queue.t21869.prototype.om$core$IWillUnmount$ = true;

growingtree_app.components.key_queue.t21869.prototype.om$core$IWillUnmount$will_unmount$arity$1 = ((function (ch,map__21868,map__21868__$1,error_ch,keymap){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.untap.call(null,growingtree_app.components.key_queue.key_mult,self__.ch);
});})(ch,map__21868,map__21868__$1,error_ch,keymap))
;

growingtree_app.components.key_queue.t21869.prototype.om$core$IDidMount$ = true;

growingtree_app.components.key_queue.t21869.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (ch,map__21868,map__21868__$1,error_ch,keymap){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.tap.call(null,growingtree_app.components.key_queue.key_mult,self__.ch);

var c__6704__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6704__auto__,___$1,ch,map__21868,map__21868__$1,error_ch,keymap){
return (function (){
var f__6705__auto__ = (function (){var switch__6639__auto__ = ((function (c__6704__auto__,___$1,ch,map__21868,map__21868__$1,error_ch,keymap){
return (function (state_21925){
var state_val_21926 = (state_21925[(1)]);
if((state_val_21926 === (7))){
var inst_21888 = (state_21925[(2)]);
var inst_21889 = cljs.core.nth.call(null,inst_21888,(0),null);
var inst_21890 = cljs.core.nth.call(null,inst_21888,(1),null);
var inst_21891 = cljs.core._EQ_.call(null,inst_21890,self__.ch);
var state_21925__$1 = (function (){var statearr_21927 = state_21925;
(statearr_21927[(7)] = inst_21889);

return statearr_21927;
})();
if(inst_21891){
var statearr_21928_21958 = state_21925__$1;
(statearr_21928_21958[(1)] = (8));

} else {
var statearr_21929_21959 = state_21925__$1;
(statearr_21929_21959[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21926 === (1))){
var inst_21874 = cljs.core.PersistentVector.EMPTY;
var inst_21875 = inst_21874;
var inst_21876 = null;
var state_21925__$1 = (function (){var statearr_21930 = state_21925;
(statearr_21930[(8)] = inst_21876);

(statearr_21930[(9)] = inst_21875);

return statearr_21930;
})();
var statearr_21931_21960 = state_21925__$1;
(statearr_21931_21960[(2)] = null);

(statearr_21931_21960[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21926 === (4))){
var inst_21876 = (state_21925[(8)]);
var state_21925__$1 = state_21925;
var statearr_21932_21961 = state_21925__$1;
(statearr_21932_21961[(2)] = inst_21876);

(statearr_21932_21961[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21926 === (15))){
var inst_21889 = (state_21925[(7)]);
var inst_21895 = (state_21925[(10)]);
var inst_21897 = (state_21925[(2)]);
var inst_21898 = growingtree_app.utils.log_pr.call(null,"Error calling",inst_21895,"with key event",inst_21889,":");
var inst_21899 = growingtree_app.utils.stack_trace.call(null,inst_21897);
var inst_21900 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_21901 = [new cljs.core.Keyword(null,"keyboard-handler-error","keyboard-handler-error",-1252762102),inst_21897];
var inst_21902 = (new cljs.core.PersistentVector(null,2,(5),inst_21900,inst_21901,null));
var inst_21903 = cljs.core.async.put_BANG_.call(null,self__.error_ch,inst_21902);
var state_21925__$1 = (function (){var statearr_21933 = state_21925;
(statearr_21933[(11)] = inst_21898);

(statearr_21933[(12)] = inst_21899);

return statearr_21933;
})();
var statearr_21934_21962 = state_21925__$1;
(statearr_21934_21962[(2)] = inst_21903);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21925__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21926 === (13))){
var inst_21916 = (state_21925[(2)]);
var state_21925__$1 = state_21925;
var statearr_21935_21963 = state_21925__$1;
(statearr_21935_21963[(2)] = inst_21916);

(statearr_21935_21963[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21926 === (6))){
var inst_21883 = (state_21925[(2)]);
var inst_21884 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_21885 = [self__.ch,inst_21883];
var inst_21886 = (new cljs.core.PersistentVector(null,2,(5),inst_21884,inst_21885,null));
var state_21925__$1 = state_21925;
return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_21925__$1,(7),inst_21886);
} else {
if((state_val_21926 === (3))){
var inst_21923 = (state_21925[(2)]);
var state_21925__$1 = state_21925;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21925__$1,inst_21923);
} else {
if((state_val_21926 === (12))){
var inst_21893 = (state_21925[(13)]);
var inst_21913 = cljs.core.async.timeout.call(null,(1000));
var inst_21875 = inst_21893;
var inst_21876 = inst_21913;
var state_21925__$1 = (function (){var statearr_21936 = state_21925;
(statearr_21936[(8)] = inst_21876);

(statearr_21936[(9)] = inst_21875);

return statearr_21936;
})();
var statearr_21937_21964 = state_21925__$1;
(statearr_21937_21964[(2)] = null);

(statearr_21937_21964[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21926 === (2))){
var inst_21876 = (state_21925[(8)]);
var state_21925__$1 = state_21925;
if(cljs.core.truth_(inst_21876)){
var statearr_21938_21965 = state_21925__$1;
(statearr_21938_21965[(1)] = (4));

} else {
var statearr_21939_21966 = state_21925__$1;
(statearr_21939_21966[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21926 === (11))){
var state_21925__$1 = state_21925;
var statearr_21940_21967 = state_21925__$1;
(statearr_21940_21967[(2)] = null);

(statearr_21940_21967[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21926 === (9))){
var inst_21918 = cljs.core.PersistentVector.EMPTY;
var inst_21875 = inst_21918;
var inst_21876 = null;
var state_21925__$1 = (function (){var statearr_21941 = state_21925;
(statearr_21941[(8)] = inst_21876);

(statearr_21941[(9)] = inst_21875);

return statearr_21941;
})();
var statearr_21942_21968 = state_21925__$1;
(statearr_21942_21968[(2)] = null);

(statearr_21942_21968[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21926 === (5))){
var inst_21881 = cljs.core.async.chan.call(null);
var state_21925__$1 = state_21925;
var statearr_21943_21969 = state_21925__$1;
(statearr_21943_21969[(2)] = inst_21881);

(statearr_21943_21969[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21926 === (14))){
var inst_21909 = (state_21925[(2)]);
var inst_21910 = cljs.core.PersistentVector.EMPTY;
var inst_21875 = inst_21910;
var inst_21876 = null;
var state_21925__$1 = (function (){var statearr_21944 = state_21925;
(statearr_21944[(14)] = inst_21909);

(statearr_21944[(8)] = inst_21876);

(statearr_21944[(9)] = inst_21875);

return statearr_21944;
})();
var statearr_21945_21970 = state_21925__$1;
(statearr_21945_21970[(2)] = null);

(statearr_21945_21970[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21926 === (16))){
var inst_21889 = (state_21925[(7)]);
var inst_21895 = (state_21925[(10)]);
var ___$2 = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_21925,(15),Object,null,(14));
var inst_21907 = inst_21895.call(null,inst_21889);
var state_21925__$1 = state_21925;
var statearr_21946_21971 = state_21925__$1;
(statearr_21946_21971[(2)] = inst_21907);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21925__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21926 === (10))){
var inst_21921 = (state_21925[(2)]);
var state_21925__$1 = state_21925;
var statearr_21947_21972 = state_21925__$1;
(statearr_21947_21972[(2)] = inst_21921);

(statearr_21947_21972[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21926 === (8))){
var inst_21893 = (state_21925[(13)]);
var inst_21875 = (state_21925[(9)]);
var inst_21889 = (state_21925[(7)]);
var inst_21895 = (state_21925[(10)]);
var inst_21893__$1 = cljs.core.conj.call(null,inst_21875,inst_21889);
var inst_21894 = cljs.core.deref.call(null,self__.keymap);
var inst_21895__$1 = growingtree_app.components.key_queue.match_keys.call(null,inst_21894,inst_21893__$1);
var state_21925__$1 = (function (){var statearr_21948 = state_21925;
(statearr_21948[(13)] = inst_21893__$1);

(statearr_21948[(10)] = inst_21895__$1);

return statearr_21948;
})();
if(cljs.core.truth_(inst_21895__$1)){
var statearr_21949_21973 = state_21925__$1;
(statearr_21949_21973[(1)] = (11));

} else {
var statearr_21950_21974 = state_21925__$1;
(statearr_21950_21974[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});})(c__6704__auto__,___$1,ch,map__21868,map__21868__$1,error_ch,keymap))
;
return ((function (switch__6639__auto__,c__6704__auto__,___$1,ch,map__21868,map__21868__$1,error_ch,keymap){
return (function() {
var state_machine__6640__auto__ = null;
var state_machine__6640__auto____0 = (function (){
var statearr_21954 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21954[(0)] = state_machine__6640__auto__);

(statearr_21954[(1)] = (1));

return statearr_21954;
});
var state_machine__6640__auto____1 = (function (state_21925){
while(true){
var ret_value__6641__auto__ = (function (){try{while(true){
var result__6642__auto__ = switch__6639__auto__.call(null,state_21925);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6642__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6642__auto__;
}
break;
}
}catch (e21955){if((e21955 instanceof Object)){
var ex__6643__auto__ = e21955;
var statearr_21956_21975 = state_21925;
(statearr_21956_21975[(5)] = ex__6643__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21925);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21955;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6641__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21976 = state_21925;
state_21925 = G__21976;
continue;
} else {
return ret_value__6641__auto__;
}
break;
}
});
state_machine__6640__auto__ = function(state_21925){
switch(arguments.length){
case 0:
return state_machine__6640__auto____0.call(this);
case 1:
return state_machine__6640__auto____1.call(this,state_21925);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6640__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6640__auto____0;
state_machine__6640__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6640__auto____1;
return state_machine__6640__auto__;
})()
;})(switch__6639__auto__,c__6704__auto__,___$1,ch,map__21868,map__21868__$1,error_ch,keymap))
})();
var state__6706__auto__ = (function (){var statearr_21957 = f__6705__auto__.call(null);
(statearr_21957[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6704__auto__);

return statearr_21957;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6706__auto__);
});})(c__6704__auto__,___$1,ch,map__21868,map__21868__$1,error_ch,keymap))
);

return c__6704__auto__;
});})(ch,map__21868,map__21868__$1,error_ch,keymap))
;

growingtree_app.components.key_queue.t21869.prototype.om$core$IDisplayName$ = true;

growingtree_app.components.key_queue.t21869.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (ch,map__21868,map__21868__$1,error_ch,keymap){
return (function (_){
var self__ = this;
var ___$1 = this;
var or__3807__auto__ = new cljs.core.Keyword(null,"react-name","react-name",-834049397).cljs$core$IFn$_invoke$arity$1(self__.opts);
if(cljs.core.truth_(or__3807__auto__)){
return or__3807__auto__;
} else {
return "KeyboardHandler";
}
});})(ch,map__21868,map__21868__$1,error_ch,keymap))
;

growingtree_app.components.key_queue.t21869.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (ch,map__21868,map__21868__$1,error_ch,keymap){
return (function (_21871){
var self__ = this;
var _21871__$1 = this;
return self__.meta21870;
});})(ch,map__21868,map__21868__$1,error_ch,keymap))
;

growingtree_app.components.key_queue.t21869.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (ch,map__21868,map__21868__$1,error_ch,keymap){
return (function (_21871,meta21870__$1){
var self__ = this;
var _21871__$1 = this;
return (new growingtree_app.components.key_queue.t21869(self__.ch,self__.keymap,self__.error_ch,self__.map__21868,self__.opts,self__.p__21777,self__.owner,self__.app,self__.KeyboardHandler,meta21870__$1));
});})(ch,map__21868,map__21868__$1,error_ch,keymap))
;

growingtree_app.components.key_queue.t21869.cljs$lang$type = true;

growingtree_app.components.key_queue.t21869.cljs$lang$ctorStr = "growingtree-app.components.key-queue/t21869";

growingtree_app.components.key_queue.t21869.cljs$lang$ctorPrWriter = ((function (ch,map__21868,map__21868__$1,error_ch,keymap){
return (function (this__4394__auto__,writer__4395__auto__,opt__4396__auto__){
return cljs.core._write.call(null,writer__4395__auto__,"growingtree-app.components.key-queue/t21869");
});})(ch,map__21868,map__21868__$1,error_ch,keymap))
;

growingtree_app.components.key_queue.__GT_t21869 = ((function (ch,map__21868,map__21868__$1,error_ch,keymap){
return (function __GT_t21869(ch__$1,keymap__$1,error_ch__$1,map__21868__$2,opts__$1,p__21777__$1,owner__$1,app__$1,KeyboardHandler__$1,meta21870){
return (new growingtree_app.components.key_queue.t21869(ch__$1,keymap__$1,error_ch__$1,map__21868__$2,opts__$1,p__21777__$1,owner__$1,app__$1,KeyboardHandler__$1,meta21870));
});})(ch,map__21868,map__21868__$1,error_ch,keymap))
;

}

return (new growingtree_app.components.key_queue.t21869(ch,keymap,error_ch,map__21868__$1,opts,p__21777,owner,app,KeyboardHandler,cljs.core.PersistentArrayMap.EMPTY));
});

//# sourceMappingURL=key_queue.js.map