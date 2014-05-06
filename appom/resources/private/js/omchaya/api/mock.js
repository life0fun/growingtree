// Compiled by ClojureScript 0.0-2173
goog.provide('omchaya.api.mock');
goog.require('cljs.core');
goog.require('omchaya.utils');
goog.require('cljs.core.async');
goog.require('omchaya.utils');
goog.require('omchaya.utils');
goog.require('omchaya.mock_data');
goog.require('omchaya.mock_data');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
omchaya.api.mock.random_message = (function random_message(api_ch,channel){return cljs.core.async.put_BANG_.call(null,api_ch,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"channel-activity-received","channel-activity-received",3517943815),omchaya.mock_data.random_message.call(null,channel,true)], null));
});
omchaya.api.mock.send_user_message_BANG_ = (function send_user_message_BANG_(api_key,message){return omchaya.utils.mprint.call(null,"Send a message to the server");
});
omchaya.api.mock.destroy_channel_BANG_ = (function destroy_channel_BANG_(api_ch,channel_id){var c__6068__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6069__auto__ = (function (){var switch__5998__auto__ = (function (state_21134){var state_val_21135 = (state_21134[1]);if((state_val_21135 === 2))
{var inst_21129 = (state_21134[2]);var inst_21130 = [new cljs.core.Keyword(null,"channel-remotely-destroyed","channel-remotely-destroyed",2144502171),channel_id];var inst_21131 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_21130,null));var inst_21132 = cljs.core.async.put_BANG_.call(null,api_ch,inst_21131);var state_21134__$1 = (function (){var statearr_21136 = state_21134;(statearr_21136[7] = inst_21129);
return statearr_21136;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21134__$1,inst_21132);
} else
{if((state_val_21135 === 1))
{var inst_21127 = cljs.core.async.timeout.call(null,2500);var state_21134__$1 = state_21134;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21134__$1,2,inst_21127);
} else
{return null;
}
}
});return ((function (switch__5998__auto__){
return (function() {
var state_machine__5999__auto__ = null;
var state_machine__5999__auto____0 = (function (){var statearr_21140 = [null,null,null,null,null,null,null,null];(statearr_21140[0] = state_machine__5999__auto__);
(statearr_21140[1] = 1);
return statearr_21140;
});
var state_machine__5999__auto____1 = (function (state_21134){while(true){
var ret_value__6000__auto__ = (function (){try{while(true){
var result__6001__auto__ = switch__5998__auto__.call(null,state_21134);if(cljs.core.keyword_identical_QMARK_.call(null,result__6001__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6001__auto__;
}
break;
}
}catch (e21141){if((e21141 instanceof Object))
{var ex__6002__auto__ = e21141;var statearr_21142_21144 = state_21134;(statearr_21142_21144[5] = ex__6002__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21134);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e21141;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6000__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__21145 = state_21134;
state_21134 = G__21145;
continue;
}
} else
{return ret_value__6000__auto__;
}
break;
}
});
state_machine__5999__auto__ = function(state_21134){
switch(arguments.length){
case 0:
return state_machine__5999__auto____0.call(this);
case 1:
return state_machine__5999__auto____1.call(this,state_21134);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5999__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5999__auto____0;
state_machine__5999__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5999__auto____1;
return state_machine__5999__auto__;
})()
;})(switch__5998__auto__))
})();var state__6070__auto__ = (function (){var statearr_21143 = f__6069__auto__.call(null);(statearr_21143[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6068__auto__);
return statearr_21143;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6070__auto__);
}));
return c__6068__auto__;
});
