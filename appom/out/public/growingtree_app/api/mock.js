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
var c__6704__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6704__auto__){
return (function (){
var f__6705__auto__ = (function (){var switch__6639__auto__ = ((function (c__6704__auto__){
return (function (state_34256){
var state_val_34257 = (state_34256[(1)]);
if((state_val_34257 === (2))){
var inst_34250 = (state_34256[(2)]);
var inst_34251 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_34252 = [new cljs.core.Keyword(null,"channel-remotely-destroyed","channel-remotely-destroyed",-727239593),channel_id];
var inst_34253 = (new cljs.core.PersistentVector(null,2,(5),inst_34251,inst_34252,null));
var inst_34254 = cljs.core.async.put_BANG_.call(null,api_ch,inst_34253);
var state_34256__$1 = (function (){var statearr_34258 = state_34256;
(statearr_34258[(7)] = inst_34250);

return statearr_34258;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34256__$1,inst_34254);
} else {
if((state_val_34257 === (1))){
var inst_34248 = cljs.core.async.timeout.call(null,(2500));
var state_34256__$1 = state_34256;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34256__$1,(2),inst_34248);
} else {
return null;
}
}
});})(c__6704__auto__))
;
return ((function (switch__6639__auto__,c__6704__auto__){
return (function() {
var state_machine__6640__auto__ = null;
var state_machine__6640__auto____0 = (function (){
var statearr_34262 = [null,null,null,null,null,null,null,null];
(statearr_34262[(0)] = state_machine__6640__auto__);

(statearr_34262[(1)] = (1));

return statearr_34262;
});
var state_machine__6640__auto____1 = (function (state_34256){
while(true){
var ret_value__6641__auto__ = (function (){try{while(true){
var result__6642__auto__ = switch__6639__auto__.call(null,state_34256);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6642__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6642__auto__;
}
break;
}
}catch (e34263){if((e34263 instanceof Object)){
var ex__6643__auto__ = e34263;
var statearr_34264_34266 = state_34256;
(statearr_34264_34266[(5)] = ex__6643__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34256);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34263;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6641__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34267 = state_34256;
state_34256 = G__34267;
continue;
} else {
return ret_value__6641__auto__;
}
break;
}
});
state_machine__6640__auto__ = function(state_34256){
switch(arguments.length){
case 0:
return state_machine__6640__auto____0.call(this);
case 1:
return state_machine__6640__auto____1.call(this,state_34256);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6640__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6640__auto____0;
state_machine__6640__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6640__auto____1;
return state_machine__6640__auto__;
})()
;})(switch__6639__auto__,c__6704__auto__))
})();
var state__6706__auto__ = (function (){var statearr_34265 = f__6705__auto__.call(null);
(statearr_34265[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6704__auto__);

return statearr_34265;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6706__auto__);
});})(c__6704__auto__))
);

return c__6704__auto__;
});

//# sourceMappingURL=mock.js.map