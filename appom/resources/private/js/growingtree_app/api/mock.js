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
growingtree_app.api.mock.random_message = (function random_message(api_ch,channel){return cljs.core.async.put_BANG_.call(null,api_ch,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"channel-activity-received","channel-activity-received",3517943815),growingtree_app.mock_data.random_message.call(null,channel,true)], null));
});
growingtree_app.api.mock.send_user_message_BANG_ = (function send_user_message_BANG_(api_key,message){return growingtree_app.utils.mprint.call(null,"Send a message to the server");
});
growingtree_app.api.mock.destroy_channel_BANG_ = (function destroy_channel_BANG_(api_ch,channel_id){var c__6068__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6069__auto__ = (function (){var switch__5998__auto__ = (function (state_8907){var state_val_8908 = (state_8907[1]);if((state_val_8908 === 2))
{var inst_8902 = (state_8907[2]);var inst_8903 = [new cljs.core.Keyword(null,"channel-remotely-destroyed","channel-remotely-destroyed",2144502171),channel_id];var inst_8904 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_8903,null));var inst_8905 = cljs.core.async.put_BANG_.call(null,api_ch,inst_8904);var state_8907__$1 = (function (){var statearr_8909 = state_8907;(statearr_8909[7] = inst_8902);
return statearr_8909;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8907__$1,inst_8905);
} else
{if((state_val_8908 === 1))
{var inst_8900 = cljs.core.async.timeout.call(null,2500);var state_8907__$1 = state_8907;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8907__$1,2,inst_8900);
} else
{return null;
}
}
});return ((function (switch__5998__auto__){
return (function() {
var state_machine__5999__auto__ = null;
var state_machine__5999__auto____0 = (function (){var statearr_8913 = [null,null,null,null,null,null,null,null];(statearr_8913[0] = state_machine__5999__auto__);
(statearr_8913[1] = 1);
return statearr_8913;
});
var state_machine__5999__auto____1 = (function (state_8907){while(true){
var ret_value__6000__auto__ = (function (){try{while(true){
var result__6001__auto__ = switch__5998__auto__.call(null,state_8907);if(cljs.core.keyword_identical_QMARK_.call(null,result__6001__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6001__auto__;
}
break;
}
}catch (e8914){if((e8914 instanceof Object))
{var ex__6002__auto__ = e8914;var statearr_8915_8917 = state_8907;(statearr_8915_8917[5] = ex__6002__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8907);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e8914;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6000__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__8918 = state_8907;
state_8907 = G__8918;
continue;
}
} else
{return ret_value__6000__auto__;
}
break;
}
});
state_machine__5999__auto__ = function(state_8907){
switch(arguments.length){
case 0:
return state_machine__5999__auto____0.call(this);
case 1:
return state_machine__5999__auto____1.call(this,state_8907);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5999__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5999__auto____0;
state_machine__5999__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5999__auto____1;
return state_machine__5999__auto__;
})()
;})(switch__5998__auto__))
})();var state__6070__auto__ = (function (){var statearr_8916 = f__6069__auto__.call(null);(statearr_8916[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6068__auto__);
return statearr_8916;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6070__auto__);
}));
return c__6068__auto__;
});
