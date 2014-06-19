// Compiled by ClojureScript 0.0-2173
goog.provide('growingtree_app.api.mock');
goog.require('cljs.core');
goog.require('growingtree_app.utils');
goog.require('cljs.core.async');
goog.require('growingtree_app.utils');
goog.require('growingtree_app.utils');
goog.require('growingtree_app.mock_data');
goog.require('growingtree_app.mock_data');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
growingtree_app.api.mock.random_message = (function random_message(api_ch,channel){return cljs.core.async.put_BANG_.call(null,api_ch,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"channel-activity-received","channel-activity-received",3517943815),growingtree_app.mock_data.random_thing.call(null,channel,true)], null));
});
growingtree_app.api.mock.send_user_message_BANG_ = (function send_user_message_BANG_(api_key,message){return growingtree_app.utils.mprint.call(null,"Send a message to the server");
});
growingtree_app.api.mock.destroy_channel_BANG_ = (function destroy_channel_BANG_(api_ch,channel_id){var c__6188__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6189__auto__ = (function (){var switch__6118__auto__ = (function (state_9031){var state_val_9032 = (state_9031[1]);if((state_val_9032 === 2))
{var inst_9026 = (state_9031[2]);var inst_9027 = [new cljs.core.Keyword(null,"channel-remotely-destroyed","channel-remotely-destroyed",2144502171),channel_id];var inst_9028 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_9027,null));var inst_9029 = cljs.core.async.put_BANG_.call(null,api_ch,inst_9028);var state_9031__$1 = (function (){var statearr_9033 = state_9031;(statearr_9033[7] = inst_9026);
return statearr_9033;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9031__$1,inst_9029);
} else
{if((state_val_9032 === 1))
{var inst_9024 = cljs.core.async.timeout.call(null,2500);var state_9031__$1 = state_9031;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9031__$1,2,inst_9024);
} else
{return null;
}
}
});return ((function (switch__6118__auto__){
return (function() {
var state_machine__6119__auto__ = null;
var state_machine__6119__auto____0 = (function (){var statearr_9037 = [null,null,null,null,null,null,null,null];(statearr_9037[0] = state_machine__6119__auto__);
(statearr_9037[1] = 1);
return statearr_9037;
});
var state_machine__6119__auto____1 = (function (state_9031){while(true){
var ret_value__6120__auto__ = (function (){try{while(true){
var result__6121__auto__ = switch__6118__auto__.call(null,state_9031);if(cljs.core.keyword_identical_QMARK_.call(null,result__6121__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6121__auto__;
}
break;
}
}catch (e9038){if((e9038 instanceof Object))
{var ex__6122__auto__ = e9038;var statearr_9039_9041 = state_9031;(statearr_9039_9041[5] = ex__6122__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9031);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9038;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6120__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__9042 = state_9031;
state_9031 = G__9042;
continue;
}
} else
{return ret_value__6120__auto__;
}
break;
}
});
state_machine__6119__auto__ = function(state_9031){
switch(arguments.length){
case 0:
return state_machine__6119__auto____0.call(this);
case 1:
return state_machine__6119__auto____1.call(this,state_9031);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6119__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6119__auto____0;
state_machine__6119__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6119__auto____1;
return state_machine__6119__auto__;
})()
;})(switch__6118__auto__))
})();var state__6190__auto__ = (function (){var statearr_9040 = f__6189__auto__.call(null);(statearr_9040[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6188__auto__);
return statearr_9040;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6190__auto__);
}));
return c__6188__auto__;
});
