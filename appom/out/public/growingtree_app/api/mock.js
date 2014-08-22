// Compiled by ClojureScript 0.0-2277
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
growingtree_app.api.mock.random_message = (function random_message(api_ch,channel){return cljs.core.async.put_BANG_.call(null,api_ch,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"channel-activity-received","channel-activity-received",303694233),growingtree_app.mock_data.random_thing.call(null,channel,true)], null));
});
growingtree_app.api.mock.send_user_message_BANG_ = (function send_user_message_BANG_(api_key,message){return growingtree_app.utils.mprint.call(null,"Send a message to the server");
});
growingtree_app.api.mock.destroy_channel_BANG_ = (function destroy_channel_BANG_(api_ch,channel_id){var c__6345__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6345__auto__){
return (function (){var f__6346__auto__ = (function (){var switch__6280__auto__ = ((function (c__6345__auto__){
return (function (state_9383){var state_val_9384 = (state_9383[(1)]);if((state_val_9384 === (2)))
{var inst_9378 = (state_9383[(2)]);var inst_9379 = [new cljs.core.Keyword(null,"channel-remotely-destroyed","channel-remotely-destroyed",-727239593),channel_id];var inst_9380 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_9379,null));var inst_9381 = cljs.core.async.put_BANG_.call(null,api_ch,inst_9380);var state_9383__$1 = (function (){var statearr_9385 = state_9383;(statearr_9385[(7)] = inst_9378);
return statearr_9385;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9383__$1,inst_9381);
} else
{if((state_val_9384 === (1)))
{var inst_9376 = cljs.core.async.timeout.call(null,(2500));var state_9383__$1 = state_9383;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9383__$1,(2),inst_9376);
} else
{return null;
}
}
});})(c__6345__auto__))
;return ((function (switch__6280__auto__,c__6345__auto__){
return (function() {
var state_machine__6281__auto__ = null;
var state_machine__6281__auto____0 = (function (){var statearr_9389 = [null,null,null,null,null,null,null,null];(statearr_9389[(0)] = state_machine__6281__auto__);
(statearr_9389[(1)] = (1));
return statearr_9389;
});
var state_machine__6281__auto____1 = (function (state_9383){while(true){
var ret_value__6282__auto__ = (function (){try{while(true){
var result__6283__auto__ = switch__6280__auto__.call(null,state_9383);if(cljs.core.keyword_identical_QMARK_.call(null,result__6283__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6283__auto__;
}
break;
}
}catch (e9390){if((e9390 instanceof Object))
{var ex__6284__auto__ = e9390;var statearr_9391_9393 = state_9383;(statearr_9391_9393[(5)] = ex__6284__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9383);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e9390;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6282__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__9394 = state_9383;
state_9383 = G__9394;
continue;
}
} else
{return ret_value__6282__auto__;
}
break;
}
});
state_machine__6281__auto__ = function(state_9383){
switch(arguments.length){
case 0:
return state_machine__6281__auto____0.call(this);
case 1:
return state_machine__6281__auto____1.call(this,state_9383);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6281__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6281__auto____0;
state_machine__6281__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6281__auto____1;
return state_machine__6281__auto__;
})()
;})(switch__6280__auto__,c__6345__auto__))
})();var state__6347__auto__ = (function (){var statearr_9392 = f__6346__auto__.call(null);(statearr_9392[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6345__auto__);
return statearr_9392;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6347__auto__);
});})(c__6345__auto__))
);
return c__6345__auto__;
});

//# sourceMappingURL=mock.js.map