// Compiled by ClojureScript 0.0-2850 {}
goog.provide('growingtree_app.api.mock');
goog.require('cljs.core');
goog.require('growingtree_app.utils');
goog.require('growingtree_app.mock_data');
goog.require('cljs.core.async');
growingtree_app.api.mock.random_message = (function random_message(api_ch,channel){
return cljs.core.async.put_BANG_.call(null,api_ch,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"channel-activity-received","channel-activity-received",303694233),growingtree_app.mock_data.random_thing.call(null,channel,true)], null));
});
growingtree_app.api.mock.send_user_message_BANG_ = (function send_user_message_BANG_(api_key,message){
return growingtree_app.utils.mprint.call(null,"Send a message to the server");
});
growingtree_app.api.mock.destroy_channel_BANG_ = (function destroy_channel_BANG_(api_ch,channel_id){
var c__6715__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6715__auto__){
return (function (){
var f__6716__auto__ = (function (){var switch__6659__auto__ = ((function (c__6715__auto__){
return (function (state_19862){
var state_val_19863 = (state_19862[(1)]);
if((state_val_19863 === (2))){
var inst_19856 = (state_19862[(2)]);
var inst_19857 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_19858 = [new cljs.core.Keyword(null,"channel-remotely-destroyed","channel-remotely-destroyed",-727239593),channel_id];
var inst_19859 = (new cljs.core.PersistentVector(null,2,(5),inst_19857,inst_19858,null));
var inst_19860 = cljs.core.async.put_BANG_.call(null,api_ch,inst_19859);
var state_19862__$1 = (function (){var statearr_19864 = state_19862;
(statearr_19864[(7)] = inst_19856);

return statearr_19864;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19862__$1,inst_19860);
} else {
if((state_val_19863 === (1))){
var inst_19854 = cljs.core.async.timeout.call(null,(2500));
var state_19862__$1 = state_19862;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19862__$1,(2),inst_19854);
} else {
return null;
}
}
});})(c__6715__auto__))
;
return ((function (switch__6659__auto__,c__6715__auto__){
return (function() {
var state_machine__6660__auto__ = null;
var state_machine__6660__auto____0 = (function (){
var statearr_19868 = [null,null,null,null,null,null,null,null];
(statearr_19868[(0)] = state_machine__6660__auto__);

(statearr_19868[(1)] = (1));

return statearr_19868;
});
var state_machine__6660__auto____1 = (function (state_19862){
while(true){
var ret_value__6661__auto__ = (function (){try{while(true){
var result__6662__auto__ = switch__6659__auto__.call(null,state_19862);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6662__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6662__auto__;
}
break;
}
}catch (e19869){if((e19869 instanceof Object)){
var ex__6663__auto__ = e19869;
var statearr_19870_19872 = state_19862;
(statearr_19870_19872[(5)] = ex__6663__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19862);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19869;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6661__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19873 = state_19862;
state_19862 = G__19873;
continue;
} else {
return ret_value__6661__auto__;
}
break;
}
});
state_machine__6660__auto__ = function(state_19862){
switch(arguments.length){
case 0:
return state_machine__6660__auto____0.call(this);
case 1:
return state_machine__6660__auto____1.call(this,state_19862);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6660__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6660__auto____0;
state_machine__6660__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6660__auto____1;
return state_machine__6660__auto__;
})()
;})(switch__6659__auto__,c__6715__auto__))
})();
var state__6717__auto__ = (function (){var statearr_19871 = f__6716__auto__.call(null);
(statearr_19871[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6715__auto__);

return statearr_19871;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6717__auto__);
});})(c__6715__auto__))
);

return c__6715__auto__;
});

//# sourceMappingURL=mock.js.map