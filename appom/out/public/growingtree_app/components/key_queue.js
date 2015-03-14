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
return dommy.core.listen_BANG_.call(null,document,new cljs.core.Keyword(null,"keydown","keydown",-629268186),(function (p1__22682_SHARP_){
var temp__4406__auto__ = growingtree_app.components.key_queue.event__GT_key.call(null,p1__22682_SHARP_);
if(cljs.core.truth_(temp__4406__auto__)){
var k = temp__4406__auto__;
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
return (function (p1__22683_SHARP_){
return clojure.string.split.call(null,p1__22683_SHARP_,/ /);
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
return cljs.core.first.call(null,cljs.core.keep.call(null,(function (p__22686){
var vec__22687 = p__22686;
var c = cljs.core.nth.call(null,vec__22687,(0),null);
var f = cljs.core.nth.call(null,vec__22687,(1),null);
if(cljs.core.truth_(growingtree_app.components.key_queue.combos_match_QMARK_.call(null,c,keys))){
return f;
} else {
return null;
}
}),keymap));
});
growingtree_app.components.key_queue.KeyboardHandler = (function KeyboardHandler(app,owner,p__22688,opts){
var map__22779 = p__22688;
var map__22779__$1 = ((cljs.core.seq_QMARK_.call(null,map__22779))?cljs.core.apply.call(null,cljs.core.hash_map,map__22779):map__22779);
var error_ch = cljs.core.get.call(null,map__22779__$1,new cljs.core.Keyword(null,"error-ch","error-ch",-1177587736));
var keymap = cljs.core.get.call(null,map__22779__$1,new cljs.core.Keyword(null,"keymap","keymap",-499605268));
var ch = cljs.core.async.chan.call(null);
if(typeof growingtree_app.components.key_queue.t22780 !== 'undefined'){
} else {

/**
* @constructor
*/
growingtree_app.components.key_queue.t22780 = (function (ch,keymap,error_ch,map__22779,opts,p__22688,owner,app,KeyboardHandler,meta22781){
this.ch = ch;
this.keymap = keymap;
this.error_ch = error_ch;
this.map__22779 = map__22779;
this.opts = opts;
this.p__22688 = p__22688;
this.owner = owner;
this.app = app;
this.KeyboardHandler = KeyboardHandler;
this.meta22781 = meta22781;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
growingtree_app.components.key_queue.t22780.prototype.om$core$IRender$ = true;

growingtree_app.components.key_queue.t22780.prototype.om$core$IRender$render$arity$1 = ((function (ch,map__22779,map__22779__$1,error_ch,keymap){
return (function (_){
var self__ = this;
var ___$1 = this;
return React.DOM.span({"className": "hidden"});
});})(ch,map__22779,map__22779__$1,error_ch,keymap))
;

growingtree_app.components.key_queue.t22780.prototype.om$core$IWillUnmount$ = true;

growingtree_app.components.key_queue.t22780.prototype.om$core$IWillUnmount$will_unmount$arity$1 = ((function (ch,map__22779,map__22779__$1,error_ch,keymap){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.untap.call(null,growingtree_app.components.key_queue.key_mult,self__.ch);
});})(ch,map__22779,map__22779__$1,error_ch,keymap))
;

growingtree_app.components.key_queue.t22780.prototype.om$core$IDidMount$ = true;

growingtree_app.components.key_queue.t22780.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (ch,map__22779,map__22779__$1,error_ch,keymap){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.tap.call(null,growingtree_app.components.key_queue.key_mult,self__.ch);

var c__6715__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6715__auto__,___$1,ch,map__22779,map__22779__$1,error_ch,keymap){
return (function (){
var f__6716__auto__ = (function (){var switch__6659__auto__ = ((function (c__6715__auto__,___$1,ch,map__22779,map__22779__$1,error_ch,keymap){
return (function (state_22836){
var state_val_22837 = (state_22836[(1)]);
if((state_val_22837 === (7))){
var inst_22799 = (state_22836[(2)]);
var inst_22800 = cljs.core.nth.call(null,inst_22799,(0),null);
var inst_22801 = cljs.core.nth.call(null,inst_22799,(1),null);
var inst_22802 = cljs.core._EQ_.call(null,inst_22801,self__.ch);
var state_22836__$1 = (function (){var statearr_22838 = state_22836;
(statearr_22838[(7)] = inst_22800);

return statearr_22838;
})();
if(inst_22802){
var statearr_22839_22869 = state_22836__$1;
(statearr_22839_22869[(1)] = (8));

} else {
var statearr_22840_22870 = state_22836__$1;
(statearr_22840_22870[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22837 === (1))){
var inst_22785 = cljs.core.PersistentVector.EMPTY;
var inst_22786 = inst_22785;
var inst_22787 = null;
var state_22836__$1 = (function (){var statearr_22841 = state_22836;
(statearr_22841[(8)] = inst_22786);

(statearr_22841[(9)] = inst_22787);

return statearr_22841;
})();
var statearr_22842_22871 = state_22836__$1;
(statearr_22842_22871[(2)] = null);

(statearr_22842_22871[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22837 === (4))){
var inst_22787 = (state_22836[(9)]);
var state_22836__$1 = state_22836;
var statearr_22843_22872 = state_22836__$1;
(statearr_22843_22872[(2)] = inst_22787);

(statearr_22843_22872[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22837 === (15))){
var inst_22806 = (state_22836[(10)]);
var inst_22800 = (state_22836[(7)]);
var inst_22808 = (state_22836[(2)]);
var inst_22809 = growingtree_app.utils.log_pr.call(null,"Error calling",inst_22806,"with key event",inst_22800,":");
var inst_22810 = growingtree_app.utils.stack_trace.call(null,inst_22808);
var inst_22811 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_22812 = [new cljs.core.Keyword(null,"keyboard-handler-error","keyboard-handler-error",-1252762102),inst_22808];
var inst_22813 = (new cljs.core.PersistentVector(null,2,(5),inst_22811,inst_22812,null));
var inst_22814 = cljs.core.async.put_BANG_.call(null,self__.error_ch,inst_22813);
var state_22836__$1 = (function (){var statearr_22844 = state_22836;
(statearr_22844[(11)] = inst_22809);

(statearr_22844[(12)] = inst_22810);

return statearr_22844;
})();
var statearr_22845_22873 = state_22836__$1;
(statearr_22845_22873[(2)] = inst_22814);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22836__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22837 === (13))){
var inst_22827 = (state_22836[(2)]);
var state_22836__$1 = state_22836;
var statearr_22846_22874 = state_22836__$1;
(statearr_22846_22874[(2)] = inst_22827);

(statearr_22846_22874[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22837 === (6))){
var inst_22794 = (state_22836[(2)]);
var inst_22795 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_22796 = [self__.ch,inst_22794];
var inst_22797 = (new cljs.core.PersistentVector(null,2,(5),inst_22795,inst_22796,null));
var state_22836__$1 = state_22836;
return cljs.core.async.ioc_alts_BANG_.call(null,state_22836__$1,(7),inst_22797);
} else {
if((state_val_22837 === (3))){
var inst_22834 = (state_22836[(2)]);
var state_22836__$1 = state_22836;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22836__$1,inst_22834);
} else {
if((state_val_22837 === (12))){
var inst_22804 = (state_22836[(13)]);
var inst_22824 = cljs.core.async.timeout.call(null,(1000));
var inst_22786 = inst_22804;
var inst_22787 = inst_22824;
var state_22836__$1 = (function (){var statearr_22847 = state_22836;
(statearr_22847[(8)] = inst_22786);

(statearr_22847[(9)] = inst_22787);

return statearr_22847;
})();
var statearr_22848_22875 = state_22836__$1;
(statearr_22848_22875[(2)] = null);

(statearr_22848_22875[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22837 === (2))){
var inst_22787 = (state_22836[(9)]);
var state_22836__$1 = state_22836;
if(cljs.core.truth_(inst_22787)){
var statearr_22849_22876 = state_22836__$1;
(statearr_22849_22876[(1)] = (4));

} else {
var statearr_22850_22877 = state_22836__$1;
(statearr_22850_22877[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22837 === (11))){
var state_22836__$1 = state_22836;
var statearr_22851_22878 = state_22836__$1;
(statearr_22851_22878[(2)] = null);

(statearr_22851_22878[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22837 === (9))){
var inst_22829 = cljs.core.PersistentVector.EMPTY;
var inst_22786 = inst_22829;
var inst_22787 = null;
var state_22836__$1 = (function (){var statearr_22852 = state_22836;
(statearr_22852[(8)] = inst_22786);

(statearr_22852[(9)] = inst_22787);

return statearr_22852;
})();
var statearr_22853_22879 = state_22836__$1;
(statearr_22853_22879[(2)] = null);

(statearr_22853_22879[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22837 === (5))){
var inst_22792 = cljs.core.async.chan.call(null);
var state_22836__$1 = state_22836;
var statearr_22854_22880 = state_22836__$1;
(statearr_22854_22880[(2)] = inst_22792);

(statearr_22854_22880[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22837 === (14))){
var inst_22820 = (state_22836[(2)]);
var inst_22821 = cljs.core.PersistentVector.EMPTY;
var inst_22786 = inst_22821;
var inst_22787 = null;
var state_22836__$1 = (function (){var statearr_22855 = state_22836;
(statearr_22855[(8)] = inst_22786);

(statearr_22855[(9)] = inst_22787);

(statearr_22855[(14)] = inst_22820);

return statearr_22855;
})();
var statearr_22856_22881 = state_22836__$1;
(statearr_22856_22881[(2)] = null);

(statearr_22856_22881[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22837 === (16))){
var inst_22806 = (state_22836[(10)]);
var inst_22800 = (state_22836[(7)]);
var ___$2 = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_22836,(15),Object,null,(14));
var inst_22818 = inst_22806.call(null,inst_22800);
var state_22836__$1 = state_22836;
var statearr_22857_22882 = state_22836__$1;
(statearr_22857_22882[(2)] = inst_22818);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22836__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22837 === (10))){
var inst_22832 = (state_22836[(2)]);
var state_22836__$1 = state_22836;
var statearr_22858_22883 = state_22836__$1;
(statearr_22858_22883[(2)] = inst_22832);

(statearr_22858_22883[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22837 === (8))){
var inst_22804 = (state_22836[(13)]);
var inst_22786 = (state_22836[(8)]);
var inst_22806 = (state_22836[(10)]);
var inst_22800 = (state_22836[(7)]);
var inst_22804__$1 = cljs.core.conj.call(null,inst_22786,inst_22800);
var inst_22805 = cljs.core.deref.call(null,self__.keymap);
var inst_22806__$1 = growingtree_app.components.key_queue.match_keys.call(null,inst_22805,inst_22804__$1);
var state_22836__$1 = (function (){var statearr_22859 = state_22836;
(statearr_22859[(13)] = inst_22804__$1);

(statearr_22859[(10)] = inst_22806__$1);

return statearr_22859;
})();
if(cljs.core.truth_(inst_22806__$1)){
var statearr_22860_22884 = state_22836__$1;
(statearr_22860_22884[(1)] = (11));

} else {
var statearr_22861_22885 = state_22836__$1;
(statearr_22861_22885[(1)] = (12));

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
});})(c__6715__auto__,___$1,ch,map__22779,map__22779__$1,error_ch,keymap))
;
return ((function (switch__6659__auto__,c__6715__auto__,___$1,ch,map__22779,map__22779__$1,error_ch,keymap){
return (function() {
var state_machine__6660__auto__ = null;
var state_machine__6660__auto____0 = (function (){
var statearr_22865 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22865[(0)] = state_machine__6660__auto__);

(statearr_22865[(1)] = (1));

return statearr_22865;
});
var state_machine__6660__auto____1 = (function (state_22836){
while(true){
var ret_value__6661__auto__ = (function (){try{while(true){
var result__6662__auto__ = switch__6659__auto__.call(null,state_22836);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6662__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6662__auto__;
}
break;
}
}catch (e22866){if((e22866 instanceof Object)){
var ex__6663__auto__ = e22866;
var statearr_22867_22886 = state_22836;
(statearr_22867_22886[(5)] = ex__6663__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22836);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22866;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6661__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22887 = state_22836;
state_22836 = G__22887;
continue;
} else {
return ret_value__6661__auto__;
}
break;
}
});
state_machine__6660__auto__ = function(state_22836){
switch(arguments.length){
case 0:
return state_machine__6660__auto____0.call(this);
case 1:
return state_machine__6660__auto____1.call(this,state_22836);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6660__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6660__auto____0;
state_machine__6660__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6660__auto____1;
return state_machine__6660__auto__;
})()
;})(switch__6659__auto__,c__6715__auto__,___$1,ch,map__22779,map__22779__$1,error_ch,keymap))
})();
var state__6717__auto__ = (function (){var statearr_22868 = f__6716__auto__.call(null);
(statearr_22868[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6715__auto__);

return statearr_22868;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6717__auto__);
});})(c__6715__auto__,___$1,ch,map__22779,map__22779__$1,error_ch,keymap))
);

return c__6715__auto__;
});})(ch,map__22779,map__22779__$1,error_ch,keymap))
;

growingtree_app.components.key_queue.t22780.prototype.om$core$IDisplayName$ = true;

growingtree_app.components.key_queue.t22780.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (ch,map__22779,map__22779__$1,error_ch,keymap){
return (function (_){
var self__ = this;
var ___$1 = this;
var or__3807__auto__ = new cljs.core.Keyword(null,"react-name","react-name",-834049397).cljs$core$IFn$_invoke$arity$1(self__.opts);
if(cljs.core.truth_(or__3807__auto__)){
return or__3807__auto__;
} else {
return "KeyboardHandler";
}
});})(ch,map__22779,map__22779__$1,error_ch,keymap))
;

growingtree_app.components.key_queue.t22780.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (ch,map__22779,map__22779__$1,error_ch,keymap){
return (function (_22782){
var self__ = this;
var _22782__$1 = this;
return self__.meta22781;
});})(ch,map__22779,map__22779__$1,error_ch,keymap))
;

growingtree_app.components.key_queue.t22780.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (ch,map__22779,map__22779__$1,error_ch,keymap){
return (function (_22782,meta22781__$1){
var self__ = this;
var _22782__$1 = this;
return (new growingtree_app.components.key_queue.t22780(self__.ch,self__.keymap,self__.error_ch,self__.map__22779,self__.opts,self__.p__22688,self__.owner,self__.app,self__.KeyboardHandler,meta22781__$1));
});})(ch,map__22779,map__22779__$1,error_ch,keymap))
;

growingtree_app.components.key_queue.t22780.cljs$lang$type = true;

growingtree_app.components.key_queue.t22780.cljs$lang$ctorStr = "growingtree-app.components.key-queue/t22780";

growingtree_app.components.key_queue.t22780.cljs$lang$ctorPrWriter = ((function (ch,map__22779,map__22779__$1,error_ch,keymap){
return (function (this__4394__auto__,writer__4395__auto__,opt__4396__auto__){
return cljs.core._write.call(null,writer__4395__auto__,"growingtree-app.components.key-queue/t22780");
});})(ch,map__22779,map__22779__$1,error_ch,keymap))
;

growingtree_app.components.key_queue.__GT_t22780 = ((function (ch,map__22779,map__22779__$1,error_ch,keymap){
return (function __GT_t22780(ch__$1,keymap__$1,error_ch__$1,map__22779__$2,opts__$1,p__22688__$1,owner__$1,app__$1,KeyboardHandler__$1,meta22781){
return (new growingtree_app.components.key_queue.t22780(ch__$1,keymap__$1,error_ch__$1,map__22779__$2,opts__$1,p__22688__$1,owner__$1,app__$1,KeyboardHandler__$1,meta22781));
});})(ch,map__22779,map__22779__$1,error_ch,keymap))
;

}

return (new growingtree_app.components.key_queue.t22780(ch,keymap,error_ch,map__22779__$1,opts,p__22688,owner,app,KeyboardHandler,cljs.core.PersistentArrayMap.EMPTY));
});

//# sourceMappingURL=key_queue.js.map