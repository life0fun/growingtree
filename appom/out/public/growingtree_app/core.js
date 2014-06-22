// Compiled by ClojureScript 0.0-2173
goog.provide('growingtree_app.core');
goog.require('cljs.core');
goog.require('growingtree_app.utils');
goog.require('growingtree_app.useful');
goog.require('cljs.core.async');
goog.require('growingtree_app.controllers.api');
goog.require('growingtree_app.api.mock');
goog.require('growingtree_app.components.app');
goog.require('growingtree_app.components.app');
goog.require('growingtree_app.routes');
goog.require('growingtree_app.routes');
goog.require('growingtree_app.controllers.api');
goog.require('cljs.core.async');
goog.require('growingtree_app.api.mock');
goog.require('growingtree_app.useful');
goog.require('growingtree_app.mock_data');
goog.require('growingtree_app.useful');
goog.require('om.dom');
goog.require('om.core');
goog.require('clojure.string');
goog.require('growingtree_app.controllers.post_api');
goog.require('growingtree_app.datetime');
goog.require('om.core');
goog.require('growingtree_app.controllers.controls');
goog.require('growingtree_app.mock_data');
goog.require('clojure.string');
goog.require('growingtree_app.utils');
goog.require('growingtree_app.controllers.controls');
goog.require('growingtree_app.utils');
goog.require('om.dom');
goog.require('growingtree_app.controllers.post_api');
goog.require('growingtree_app.controllers.post_controls');
goog.require('dommy.core');
goog.require('cljs.core.async');
goog.require('growingtree_app.datetime');
goog.require('growingtree_app.api.kandan');
goog.require('growingtree_app.api.kandan');
goog.require('growingtree_app.controllers.post_controls');
goog.require('dommy.core');
cljs.core.enable_console_print_BANG_.call(null);
growingtree_app.core.controls_ch = cljs.core.async.chan.call(null);
growingtree_app.core.api_ch = cljs.core.async.chan.call(null);
growingtree_app.core.app_state = cljs.core.atom.call(null,growingtree_app.mock_data.initial_state.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"controls","controls",4741937704),growingtree_app.core.controls_ch,new cljs.core.Keyword(null,"api","api",1014001036),growingtree_app.core.api_ch], null)));
growingtree_app.core.history = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
growingtree_app.core.filtered_message_QMARK_ = (function filtered_message_QMARK_(message){return cljs.core.get.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"credit-card-updated","credit-card-updated",2872375492),null], null), null),message);
});
growingtree_app.core.update_history_BANG_ = (function update_history_BANG_(history,channel,message){var m = cljs.core.first.call(null,message);var record = (cljs.core.truth_(growingtree_app.core.filtered_message_QMARK_.call(null,m))?m:message);return cljs.core.swap_BANG_.call(null,history,cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [channel,record], null));
});
growingtree_app.core.main = (function main(target,state){var comms = new cljs.core.Keyword(null,"comms","comms",1108747865).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state));var history = (function (){var or__3443__auto__ = growingtree_app.core.history;if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{return cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
})();growingtree_app.routes.define_routes_BANG_.call(null,state,document.getElementById("history-container"));
om.core.root.call(null,growingtree_app.components.app.app,state,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",4427965699),target,new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"comms","comms",1108747865),comms], null)], null));
var c__6188__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6189__auto__ = (function (){var switch__6118__auto__ = (function (state_11499){var state_val_11500 = (state_11499[1]);if((state_val_11500 === 1))
{var state_11499__$1 = state_11499;var statearr_11501_11545 = state_11499__$1;(statearr_11501_11545[2] = null);
(statearr_11501_11545[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11500 === 2))
{var state_11499__$1 = state_11499;if(true)
{var statearr_11502_11546 = state_11499__$1;(statearr_11502_11546[1] = 4);
} else
{var statearr_11503_11547 = state_11499__$1;(statearr_11503_11547[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11500 === 3))
{var inst_11497 = (state_11499[2]);var state_11499__$1 = state_11499;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11499__$1,inst_11497);
} else
{if((state_val_11500 === 4))
{var inst_11428 = (state_11499[7]);var inst_11427 = (state_11499[8]);var inst_11426 = (state_11499[9]);var inst_11426__$1 = new cljs.core.Keyword(null,"controls","controls",4741937704).cljs$core$IFn$_invoke$arity$1(comms);var inst_11427__$1 = new cljs.core.Keyword(null,"api","api",1014001036).cljs$core$IFn$_invoke$arity$1(comms);var inst_11428__$1 = cljs.core.async.timeout.call(null,30000);var inst_11429 = [inst_11426__$1,inst_11427__$1,inst_11428__$1];var inst_11430 = (new cljs.core.PersistentVector(null,3,5,cljs.core.PersistentVector.EMPTY_NODE,inst_11429,null));var state_11499__$1 = (function (){var statearr_11504 = state_11499;(statearr_11504[7] = inst_11428__$1);
(statearr_11504[8] = inst_11427__$1);
(statearr_11504[9] = inst_11426__$1);
return statearr_11504;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_11499__$1,7,inst_11430);
} else
{if((state_val_11500 === 5))
{var state_11499__$1 = state_11499;var statearr_11505_11548 = state_11499__$1;(statearr_11505_11548[2] = null);
(statearr_11505_11548[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11500 === 6))
{var inst_11495 = (state_11499[2]);var state_11499__$1 = state_11499;var statearr_11506_11549 = state_11499__$1;(statearr_11506_11549[2] = inst_11495);
(statearr_11506_11549[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11500 === 7))
{var inst_11434 = (state_11499[10]);var inst_11432 = (state_11499[11]);var inst_11426 = (state_11499[9]);var inst_11432__$1 = (state_11499[2]);var inst_11433 = cljs.core.nth.call(null,inst_11432__$1,0,null);var inst_11434__$1 = cljs.core.nth.call(null,inst_11432__$1,1,null);var inst_11435 = cljs.core._EQ_.call(null,inst_11434__$1,inst_11426);var state_11499__$1 = (function (){var statearr_11507 = state_11499;(statearr_11507[10] = inst_11434__$1);
(statearr_11507[12] = inst_11433);
(statearr_11507[11] = inst_11432__$1);
return statearr_11507;
})();if(inst_11435)
{var statearr_11508_11550 = state_11499__$1;(statearr_11508_11550[1] = 8);
} else
{var statearr_11509_11551 = state_11499__$1;(statearr_11509_11551[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11500 === 8))
{var inst_11432 = (state_11499[11]);var inst_11438 = cljs.core.nth.call(null,inst_11432,0,null);var state_11499__$1 = (function (){var statearr_11510 = state_11499;(statearr_11510[13] = inst_11438);
return statearr_11510;
})();if(cljs.core.truth_(growingtree_app.utils.logging_enabled_QMARK_))
{var statearr_11511_11552 = state_11499__$1;(statearr_11511_11552[1] = 11);
} else
{var statearr_11512_11553 = state_11499__$1;(statearr_11512_11553[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11500 === 9))
{var inst_11427 = (state_11499[8]);var inst_11434 = (state_11499[10]);var inst_11455 = cljs.core._EQ_.call(null,inst_11434,inst_11427);var state_11499__$1 = state_11499;if(inst_11455)
{var statearr_11513_11554 = state_11499__$1;(statearr_11513_11554[1] = 14);
} else
{var statearr_11514_11555 = state_11499__$1;(statearr_11514_11555[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11500 === 10))
{var inst_11491 = (state_11499[2]);var state_11499__$1 = (function (){var statearr_11515 = state_11499;(statearr_11515[14] = inst_11491);
return statearr_11515;
})();var statearr_11516_11556 = state_11499__$1;(statearr_11516_11556[2] = null);
(statearr_11516_11556[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11500 === 11))
{var inst_11438 = (state_11499[13]);var inst_11440 = cljs.core.pr_str.call(null,inst_11438);var inst_11441 = growingtree_app.utils.mprint.call(null,"Controls Verbose: ",inst_11440);var state_11499__$1 = state_11499;var statearr_11517_11557 = state_11499__$1;(statearr_11517_11557[2] = inst_11441);
(statearr_11517_11557[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11500 === 12))
{var state_11499__$1 = state_11499;var statearr_11518_11558 = state_11499__$1;(statearr_11518_11558[2] = null);
(statearr_11518_11558[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11500 === 13))
{var inst_11438 = (state_11499[13]);var inst_11444 = (state_11499[2]);var inst_11445 = cljs.core.deref.call(null,state);var inst_11446 = cljs.core.first.call(null,inst_11438);var inst_11447 = cljs.core.last.call(null,inst_11438);var inst_11448 = cljs.core.pr_str.call(null,inst_11446,inst_11447);var inst_11449 = console.log("controls chan event: ",inst_11448);var inst_11450 = cljs.core.partial.call(null,growingtree_app.controllers.controls.control_event,target,inst_11446,inst_11447);var inst_11451 = cljs.core.swap_BANG_.call(null,state,inst_11450);var inst_11452 = cljs.core.deref.call(null,state);var inst_11453 = growingtree_app.controllers.post_controls.post_control_event_BANG_.call(null,target,inst_11446,inst_11447,inst_11445,inst_11452);var state_11499__$1 = (function (){var statearr_11519 = state_11499;(statearr_11519[15] = inst_11451);
(statearr_11519[16] = inst_11449);
(statearr_11519[17] = inst_11444);
return statearr_11519;
})();var statearr_11520_11559 = state_11499__$1;(statearr_11520_11559[2] = inst_11453);
(statearr_11520_11559[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11500 === 14))
{var inst_11432 = (state_11499[11]);var inst_11458 = cljs.core.nth.call(null,inst_11432,0,null);var state_11499__$1 = (function (){var statearr_11521 = state_11499;(statearr_11521[18] = inst_11458);
return statearr_11521;
})();if(cljs.core.truth_(growingtree_app.utils.logging_enabled_QMARK_))
{var statearr_11522_11560 = state_11499__$1;(statearr_11522_11560[1] = 17);
} else
{var statearr_11523_11561 = state_11499__$1;(statearr_11523_11561[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11500 === 15))
{var inst_11428 = (state_11499[7]);var inst_11434 = (state_11499[10]);var inst_11475 = cljs.core._EQ_.call(null,inst_11434,inst_11428);var state_11499__$1 = state_11499;if(inst_11475)
{var statearr_11524_11562 = state_11499__$1;(statearr_11524_11562[1] = 20);
} else
{var statearr_11525_11563 = state_11499__$1;(statearr_11525_11563[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11500 === 16))
{var inst_11489 = (state_11499[2]);var state_11499__$1 = state_11499;var statearr_11526_11564 = state_11499__$1;(statearr_11526_11564[2] = inst_11489);
(statearr_11526_11564[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11500 === 17))
{var inst_11458 = (state_11499[18]);var inst_11460 = cljs.core.pr_str.call(null,inst_11458);var inst_11461 = growingtree_app.utils.mprint.call(null,"API Verbose: ",inst_11460);var state_11499__$1 = state_11499;var statearr_11527_11565 = state_11499__$1;(statearr_11527_11565[2] = inst_11461);
(statearr_11527_11565[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11500 === 18))
{var state_11499__$1 = state_11499;var statearr_11528_11566 = state_11499__$1;(statearr_11528_11566[2] = null);
(statearr_11528_11566[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11500 === 19))
{var inst_11458 = (state_11499[18]);var inst_11464 = (state_11499[2]);var inst_11465 = cljs.core.deref.call(null,state);var inst_11466 = cljs.core.first.call(null,inst_11458);var inst_11467 = cljs.core.last.call(null,inst_11458);var inst_11468 = new cljs.core.Keyword(null,"things-vec","things-vec",905584254).cljs$core$IFn$_invoke$arity$1(inst_11467);var inst_11469 = growingtree_app.core.update_history_BANG_.call(null,history,new cljs.core.Keyword(null,"api","api",1014001036),inst_11458);var inst_11470 = cljs.core.partial.call(null,growingtree_app.controllers.api.api_event,target,inst_11466,inst_11467);var inst_11471 = cljs.core.swap_BANG_.call(null,state,inst_11470);var inst_11472 = cljs.core.deref.call(null,state);var inst_11473 = growingtree_app.controllers.post_api.post_api_event_BANG_.call(null,target,inst_11466,inst_11467,inst_11465,inst_11472);var state_11499__$1 = (function (){var statearr_11529 = state_11499;(statearr_11529[19] = inst_11464);
(statearr_11529[20] = inst_11471);
(statearr_11529[21] = inst_11468);
(statearr_11529[22] = inst_11469);
return statearr_11529;
})();var statearr_11530_11567 = state_11499__$1;(statearr_11530_11567[2] = inst_11473);
(statearr_11530_11567[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11500 === 20))
{var inst_11477 = cljs.core.deref.call(null,history);var inst_11478 = cljs.core.pr_str.call(null,inst_11477);var inst_11479 = growingtree_app.utils.mprint.call(null,inst_11478);var state_11499__$1 = state_11499;var statearr_11531_11568 = state_11499__$1;(statearr_11531_11568[2] = inst_11479);
(statearr_11531_11568[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11500 === 21))
{var inst_11434 = (state_11499[10]);var inst_11481 = cljs.core._EQ_.call(null,inst_11434,new cljs.core.Keyword(null,"default","default",2558708147));var state_11499__$1 = state_11499;if(inst_11481)
{var statearr_11532_11569 = state_11499__$1;(statearr_11532_11569[1] = 23);
} else
{var statearr_11533_11570 = state_11499__$1;(statearr_11533_11570[1] = 24);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11500 === 22))
{var inst_11487 = (state_11499[2]);var state_11499__$1 = state_11499;var statearr_11534_11571 = state_11499__$1;(statearr_11534_11571[2] = inst_11487);
(statearr_11534_11571[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11500 === 23))
{var inst_11433 = (state_11499[12]);var state_11499__$1 = state_11499;var statearr_11535_11572 = state_11499__$1;(statearr_11535_11572[2] = inst_11433);
(statearr_11535_11572[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11500 === 24))
{var state_11499__$1 = state_11499;var statearr_11536_11573 = state_11499__$1;(statearr_11536_11573[2] = null);
(statearr_11536_11573[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11500 === 25))
{var inst_11485 = (state_11499[2]);var state_11499__$1 = state_11499;var statearr_11537_11574 = state_11499__$1;(statearr_11537_11574[2] = inst_11485);
(statearr_11537_11574[1] = 22);
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
}
}
}
}
}
}
}
}
}
});return ((function (switch__6118__auto__){
return (function() {
var state_machine__6119__auto__ = null;
var state_machine__6119__auto____0 = (function (){var statearr_11541 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11541[0] = state_machine__6119__auto__);
(statearr_11541[1] = 1);
return statearr_11541;
});
var state_machine__6119__auto____1 = (function (state_11499){while(true){
var ret_value__6120__auto__ = (function (){try{while(true){
var result__6121__auto__ = switch__6118__auto__.call(null,state_11499);if(cljs.core.keyword_identical_QMARK_.call(null,result__6121__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6121__auto__;
}
break;
}
}catch (e11542){if((e11542 instanceof Object))
{var ex__6122__auto__ = e11542;var statearr_11543_11575 = state_11499;(statearr_11543_11575[5] = ex__6122__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11499);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11542;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6120__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11576 = state_11499;
state_11499 = G__11576;
continue;
}
} else
{return ret_value__6120__auto__;
}
break;
}
});
state_machine__6119__auto__ = function(state_11499){
switch(arguments.length){
case 0:
return state_machine__6119__auto____0.call(this);
case 1:
return state_machine__6119__auto____1.call(this,state_11499);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6119__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6119__auto____0;
state_machine__6119__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6119__auto____1;
return state_machine__6119__auto__;
})()
;})(switch__6118__auto__))
})();var state__6190__auto__ = (function (){var statearr_11544 = f__6189__auto__.call(null);(statearr_11544[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6188__auto__);
return statearr_11544;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6190__auto__);
}));
return c__6188__auto__;
});
growingtree_app.core.setup_BANG_ = (function setup_BANG_(){var comms = new cljs.core.Keyword(null,"comms","comms",1108747865).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,growingtree_app.core.app_state));growingtree_app.core.main.call(null,document.getElementById("app"),growingtree_app.core.app_state);
if(cljs.core.truth_(new cljs.core.Keyword(null,"restore-state?","restore-state?",3703635295).cljs$core$IFn$_invoke$arity$1(growingtree_app.utils.initial_query_map)))
{cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"controls","controls",4741937704).cljs$core$IFn$_invoke$arity$1(comms),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-restored","state-restored",2236662980)], null));
} else
{}
if(cljs.core.truth_(new cljs.core.Keyword(null,"kandan-client?","kandan-client?",915311154).cljs$core$IFn$_invoke$arity$1(growingtree_app.utils.initial_query_map)))
{var api_key = new cljs.core.Keyword(null,"kandan-api-key","kandan-api-key",3548116106).cljs$core$IFn$_invoke$arity$1(growingtree_app.utils.initial_query_map);var kandan_client = growingtree_app.api.kandan.make_client.call(null,api_key,"http://localhost:3000/remote/faye");var channels = new cljs.core.Keyword(null,"kandan-channels","kandan-channels",2776703958).cljs$core$IFn$_invoke$arity$1(growingtree_app.utils.initial_query_map);cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"controls","controls",4741937704).cljs$core$IFn$_invoke$arity$1(comms),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"api-key-updated","api-key-updated",756464524),api_key], null));
var seq__11581 = cljs.core.seq.call(null,channels);var chunk__11582 = null;var count__11583 = 0;var i__11584 = 0;while(true){
if((i__11584 < count__11583))
{var channel = cljs.core._nth.call(null,chunk__11582,i__11584);growingtree_app.api.kandan.subscribe_BANG_.call(null,kandan_client,[cljs.core.str("/channels/"),cljs.core.str(channel)].join(''),new cljs.core.Keyword(null,"api","api",1014001036).cljs$core$IFn$_invoke$arity$1(comms));
{
var G__11585 = seq__11581;
var G__11586 = chunk__11582;
var G__11587 = count__11583;
var G__11588 = (i__11584 + 1);
seq__11581 = G__11585;
chunk__11582 = G__11586;
count__11583 = G__11587;
i__11584 = G__11588;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__11581);if(temp__4092__auto__)
{var seq__11581__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11581__$1))
{var c__4191__auto__ = cljs.core.chunk_first.call(null,seq__11581__$1);{
var G__11589 = cljs.core.chunk_rest.call(null,seq__11581__$1);
var G__11590 = c__4191__auto__;
var G__11591 = cljs.core.count.call(null,c__4191__auto__);
var G__11592 = 0;
seq__11581 = G__11589;
chunk__11582 = G__11590;
count__11583 = G__11591;
i__11584 = G__11592;
continue;
}
} else
{var channel = cljs.core.first.call(null,seq__11581__$1);growingtree_app.api.kandan.subscribe_BANG_.call(null,kandan_client,[cljs.core.str("/channels/"),cljs.core.str(channel)].join(''),new cljs.core.Keyword(null,"api","api",1014001036).cljs$core$IFn$_invoke$arity$1(comms));
{
var G__11593 = cljs.core.next.call(null,seq__11581__$1);
var G__11594 = null;
var G__11595 = 0;
var G__11596 = 0;
seq__11581 = G__11593;
chunk__11582 = G__11594;
count__11583 = G__11595;
i__11584 = G__11596;
continue;
}
}
} else
{return null;
}
}
break;
}
} else
{return null;
}
});
window.onload = growingtree_app.core.setup_BANG_;
growingtree_app.core.send_async_message = (function send_async_message(ch_name,message,data){return cljs.core.async.put_BANG_.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,growingtree_app.core.app_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"comms","comms",1108747865),cljs.core.keyword.call(null,ch_name)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,message),cljs.core.js__GT_clj.call(null,data,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",4191781672),true)], null));
});
goog.exportSymbol('growingtree_app.core.send_async_message', growingtree_app.core.send_async_message);
growingtree_app.core.remove_channel_BANG_ = (function remove_channel_BANG_(channel_id){return cljs.core.async.put_BANG_.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,growingtree_app.core.app_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"comms","comms",1108747865),new cljs.core.Keyword(null,"controls","controls",4741937704)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"channel-remotely-destroyed","channel-remotely-destroyed",2144502171),channel_id], null));
});
goog.exportSymbol('growingtree_app.core.remove_channel_BANG_', growingtree_app.core.remove_channel_BANG_);

//# sourceMappingURL=core.js.map