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
goog.require('growingtree_app.controllers.post_controls');
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
goog.require('growingtree_app.mock_data');
goog.require('clojure.string');
goog.require('growingtree_app.utils');
goog.require('growingtree_app.controllers.controls');
goog.require('growingtree_app.utils');
goog.require('om.dom');
goog.require('growingtree_app.controllers.post_api');
goog.require('growingtree_app.controllers.controls');
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
var c__6188__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6189__auto__ = (function (){var switch__6118__auto__ = (function (state_11497){var state_val_11498 = (state_11497[1]);if((state_val_11498 === 1))
{var state_11497__$1 = state_11497;var statearr_11499_11543 = state_11497__$1;(statearr_11499_11543[2] = null);
(statearr_11499_11543[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11498 === 2))
{var state_11497__$1 = state_11497;if(true)
{var statearr_11500_11544 = state_11497__$1;(statearr_11500_11544[1] = 4);
} else
{var statearr_11501_11545 = state_11497__$1;(statearr_11501_11545[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11498 === 3))
{var inst_11495 = (state_11497[2]);var state_11497__$1 = state_11497;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11497__$1,inst_11495);
} else
{if((state_val_11498 === 4))
{var inst_11424 = (state_11497[7]);var inst_11425 = (state_11497[8]);var inst_11426 = (state_11497[9]);var inst_11424__$1 = new cljs.core.Keyword(null,"controls","controls",4741937704).cljs$core$IFn$_invoke$arity$1(comms);var inst_11425__$1 = new cljs.core.Keyword(null,"api","api",1014001036).cljs$core$IFn$_invoke$arity$1(comms);var inst_11426__$1 = cljs.core.async.timeout.call(null,30000);var inst_11427 = [inst_11424__$1,inst_11425__$1,inst_11426__$1];var inst_11428 = (new cljs.core.PersistentVector(null,3,5,cljs.core.PersistentVector.EMPTY_NODE,inst_11427,null));var state_11497__$1 = (function (){var statearr_11502 = state_11497;(statearr_11502[7] = inst_11424__$1);
(statearr_11502[8] = inst_11425__$1);
(statearr_11502[9] = inst_11426__$1);
return statearr_11502;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_11497__$1,7,inst_11428);
} else
{if((state_val_11498 === 5))
{var state_11497__$1 = state_11497;var statearr_11503_11546 = state_11497__$1;(statearr_11503_11546[2] = null);
(statearr_11503_11546[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11498 === 6))
{var inst_11493 = (state_11497[2]);var state_11497__$1 = state_11497;var statearr_11504_11547 = state_11497__$1;(statearr_11504_11547[2] = inst_11493);
(statearr_11504_11547[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11498 === 7))
{var inst_11424 = (state_11497[7]);var inst_11432 = (state_11497[10]);var inst_11430 = (state_11497[11]);var inst_11430__$1 = (state_11497[2]);var inst_11431 = cljs.core.nth.call(null,inst_11430__$1,0,null);var inst_11432__$1 = cljs.core.nth.call(null,inst_11430__$1,1,null);var inst_11433 = cljs.core._EQ_.call(null,inst_11432__$1,inst_11424);var state_11497__$1 = (function (){var statearr_11505 = state_11497;(statearr_11505[10] = inst_11432__$1);
(statearr_11505[12] = inst_11431);
(statearr_11505[11] = inst_11430__$1);
return statearr_11505;
})();if(inst_11433)
{var statearr_11506_11548 = state_11497__$1;(statearr_11506_11548[1] = 8);
} else
{var statearr_11507_11549 = state_11497__$1;(statearr_11507_11549[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11498 === 8))
{var inst_11430 = (state_11497[11]);var inst_11436 = cljs.core.nth.call(null,inst_11430,0,null);var state_11497__$1 = (function (){var statearr_11508 = state_11497;(statearr_11508[13] = inst_11436);
return statearr_11508;
})();if(cljs.core.truth_(growingtree_app.utils.logging_enabled_QMARK_))
{var statearr_11509_11550 = state_11497__$1;(statearr_11509_11550[1] = 11);
} else
{var statearr_11510_11551 = state_11497__$1;(statearr_11510_11551[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11498 === 9))
{var inst_11432 = (state_11497[10]);var inst_11425 = (state_11497[8]);var inst_11453 = cljs.core._EQ_.call(null,inst_11432,inst_11425);var state_11497__$1 = state_11497;if(inst_11453)
{var statearr_11511_11552 = state_11497__$1;(statearr_11511_11552[1] = 14);
} else
{var statearr_11512_11553 = state_11497__$1;(statearr_11512_11553[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11498 === 10))
{var inst_11489 = (state_11497[2]);var state_11497__$1 = (function (){var statearr_11513 = state_11497;(statearr_11513[14] = inst_11489);
return statearr_11513;
})();var statearr_11514_11554 = state_11497__$1;(statearr_11514_11554[2] = null);
(statearr_11514_11554[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11498 === 11))
{var inst_11436 = (state_11497[13]);var inst_11438 = cljs.core.pr_str.call(null,inst_11436);var inst_11439 = growingtree_app.utils.mprint.call(null,"Controls Verbose: ",inst_11438);var state_11497__$1 = state_11497;var statearr_11515_11555 = state_11497__$1;(statearr_11515_11555[2] = inst_11439);
(statearr_11515_11555[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11498 === 12))
{var state_11497__$1 = state_11497;var statearr_11516_11556 = state_11497__$1;(statearr_11516_11556[2] = null);
(statearr_11516_11556[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11498 === 13))
{var inst_11436 = (state_11497[13]);var inst_11442 = (state_11497[2]);var inst_11443 = cljs.core.deref.call(null,state);var inst_11444 = cljs.core.first.call(null,inst_11436);var inst_11445 = cljs.core.last.call(null,inst_11436);var inst_11446 = cljs.core.pr_str.call(null,inst_11444);var inst_11447 = console.log("controls chan event: ",inst_11446,inst_11445);var inst_11448 = cljs.core.partial.call(null,growingtree_app.controllers.controls.control_event,target,inst_11444,inst_11445);var inst_11449 = cljs.core.swap_BANG_.call(null,state,inst_11448);var inst_11450 = cljs.core.deref.call(null,state);var inst_11451 = growingtree_app.controllers.post_controls.post_control_event_BANG_.call(null,target,inst_11444,inst_11445,inst_11443,inst_11450);var state_11497__$1 = (function (){var statearr_11517 = state_11497;(statearr_11517[15] = inst_11447);
(statearr_11517[16] = inst_11449);
(statearr_11517[17] = inst_11442);
return statearr_11517;
})();var statearr_11518_11557 = state_11497__$1;(statearr_11518_11557[2] = inst_11451);
(statearr_11518_11557[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11498 === 14))
{var inst_11430 = (state_11497[11]);var inst_11456 = cljs.core.nth.call(null,inst_11430,0,null);var state_11497__$1 = (function (){var statearr_11519 = state_11497;(statearr_11519[18] = inst_11456);
return statearr_11519;
})();if(cljs.core.truth_(growingtree_app.utils.logging_enabled_QMARK_))
{var statearr_11520_11558 = state_11497__$1;(statearr_11520_11558[1] = 17);
} else
{var statearr_11521_11559 = state_11497__$1;(statearr_11521_11559[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11498 === 15))
{var inst_11432 = (state_11497[10]);var inst_11426 = (state_11497[9]);var inst_11473 = cljs.core._EQ_.call(null,inst_11432,inst_11426);var state_11497__$1 = state_11497;if(inst_11473)
{var statearr_11522_11560 = state_11497__$1;(statearr_11522_11560[1] = 20);
} else
{var statearr_11523_11561 = state_11497__$1;(statearr_11523_11561[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11498 === 16))
{var inst_11487 = (state_11497[2]);var state_11497__$1 = state_11497;var statearr_11524_11562 = state_11497__$1;(statearr_11524_11562[2] = inst_11487);
(statearr_11524_11562[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11498 === 17))
{var inst_11456 = (state_11497[18]);var inst_11458 = cljs.core.pr_str.call(null,inst_11456);var inst_11459 = growingtree_app.utils.mprint.call(null,"API Verbose: ",inst_11458);var state_11497__$1 = state_11497;var statearr_11525_11563 = state_11497__$1;(statearr_11525_11563[2] = inst_11459);
(statearr_11525_11563[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11498 === 18))
{var state_11497__$1 = state_11497;var statearr_11526_11564 = state_11497__$1;(statearr_11526_11564[2] = null);
(statearr_11526_11564[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11498 === 19))
{var inst_11456 = (state_11497[18]);var inst_11462 = (state_11497[2]);var inst_11463 = cljs.core.deref.call(null,state);var inst_11464 = cljs.core.first.call(null,inst_11456);var inst_11465 = cljs.core.last.call(null,inst_11456);var inst_11466 = new cljs.core.Keyword(null,"things-vec","things-vec",905584254).cljs$core$IFn$_invoke$arity$1(inst_11465);var inst_11467 = growingtree_app.core.update_history_BANG_.call(null,history,new cljs.core.Keyword(null,"api","api",1014001036),inst_11456);var inst_11468 = cljs.core.partial.call(null,growingtree_app.controllers.api.api_event,target,inst_11464,inst_11465);var inst_11469 = cljs.core.swap_BANG_.call(null,state,inst_11468);var inst_11470 = cljs.core.deref.call(null,state);var inst_11471 = growingtree_app.controllers.post_api.post_api_event_BANG_.call(null,target,inst_11464,inst_11465,inst_11463,inst_11470);var state_11497__$1 = (function (){var statearr_11527 = state_11497;(statearr_11527[19] = inst_11466);
(statearr_11527[20] = inst_11462);
(statearr_11527[21] = inst_11467);
(statearr_11527[22] = inst_11469);
return statearr_11527;
})();var statearr_11528_11565 = state_11497__$1;(statearr_11528_11565[2] = inst_11471);
(statearr_11528_11565[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11498 === 20))
{var inst_11475 = cljs.core.deref.call(null,history);var inst_11476 = cljs.core.pr_str.call(null,inst_11475);var inst_11477 = growingtree_app.utils.mprint.call(null,inst_11476);var state_11497__$1 = state_11497;var statearr_11529_11566 = state_11497__$1;(statearr_11529_11566[2] = inst_11477);
(statearr_11529_11566[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11498 === 21))
{var inst_11432 = (state_11497[10]);var inst_11479 = cljs.core._EQ_.call(null,inst_11432,new cljs.core.Keyword(null,"default","default",2558708147));var state_11497__$1 = state_11497;if(inst_11479)
{var statearr_11530_11567 = state_11497__$1;(statearr_11530_11567[1] = 23);
} else
{var statearr_11531_11568 = state_11497__$1;(statearr_11531_11568[1] = 24);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11498 === 22))
{var inst_11485 = (state_11497[2]);var state_11497__$1 = state_11497;var statearr_11532_11569 = state_11497__$1;(statearr_11532_11569[2] = inst_11485);
(statearr_11532_11569[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11498 === 23))
{var inst_11431 = (state_11497[12]);var state_11497__$1 = state_11497;var statearr_11533_11570 = state_11497__$1;(statearr_11533_11570[2] = inst_11431);
(statearr_11533_11570[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11498 === 24))
{var state_11497__$1 = state_11497;var statearr_11534_11571 = state_11497__$1;(statearr_11534_11571[2] = null);
(statearr_11534_11571[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11498 === 25))
{var inst_11483 = (state_11497[2]);var state_11497__$1 = state_11497;var statearr_11535_11572 = state_11497__$1;(statearr_11535_11572[2] = inst_11483);
(statearr_11535_11572[1] = 22);
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
var state_machine__6119__auto____0 = (function (){var statearr_11539 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11539[0] = state_machine__6119__auto__);
(statearr_11539[1] = 1);
return statearr_11539;
});
var state_machine__6119__auto____1 = (function (state_11497){while(true){
var ret_value__6120__auto__ = (function (){try{while(true){
var result__6121__auto__ = switch__6118__auto__.call(null,state_11497);if(cljs.core.keyword_identical_QMARK_.call(null,result__6121__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6121__auto__;
}
break;
}
}catch (e11540){if((e11540 instanceof Object))
{var ex__6122__auto__ = e11540;var statearr_11541_11573 = state_11497;(statearr_11541_11573[5] = ex__6122__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11497);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11540;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6120__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11574 = state_11497;
state_11497 = G__11574;
continue;
}
} else
{return ret_value__6120__auto__;
}
break;
}
});
state_machine__6119__auto__ = function(state_11497){
switch(arguments.length){
case 0:
return state_machine__6119__auto____0.call(this);
case 1:
return state_machine__6119__auto____1.call(this,state_11497);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6119__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6119__auto____0;
state_machine__6119__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6119__auto____1;
return state_machine__6119__auto__;
})()
;})(switch__6118__auto__))
})();var state__6190__auto__ = (function (){var statearr_11542 = f__6189__auto__.call(null);(statearr_11542[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6188__auto__);
return statearr_11542;
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
var seq__11579 = cljs.core.seq.call(null,channels);var chunk__11580 = null;var count__11581 = 0;var i__11582 = 0;while(true){
if((i__11582 < count__11581))
{var channel = cljs.core._nth.call(null,chunk__11580,i__11582);growingtree_app.api.kandan.subscribe_BANG_.call(null,kandan_client,[cljs.core.str("/channels/"),cljs.core.str(channel)].join(''),new cljs.core.Keyword(null,"api","api",1014001036).cljs$core$IFn$_invoke$arity$1(comms));
{
var G__11583 = seq__11579;
var G__11584 = chunk__11580;
var G__11585 = count__11581;
var G__11586 = (i__11582 + 1);
seq__11579 = G__11583;
chunk__11580 = G__11584;
count__11581 = G__11585;
i__11582 = G__11586;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__11579);if(temp__4092__auto__)
{var seq__11579__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11579__$1))
{var c__4191__auto__ = cljs.core.chunk_first.call(null,seq__11579__$1);{
var G__11587 = cljs.core.chunk_rest.call(null,seq__11579__$1);
var G__11588 = c__4191__auto__;
var G__11589 = cljs.core.count.call(null,c__4191__auto__);
var G__11590 = 0;
seq__11579 = G__11587;
chunk__11580 = G__11588;
count__11581 = G__11589;
i__11582 = G__11590;
continue;
}
} else
{var channel = cljs.core.first.call(null,seq__11579__$1);growingtree_app.api.kandan.subscribe_BANG_.call(null,kandan_client,[cljs.core.str("/channels/"),cljs.core.str(channel)].join(''),new cljs.core.Keyword(null,"api","api",1014001036).cljs$core$IFn$_invoke$arity$1(comms));
{
var G__11591 = cljs.core.next.call(null,seq__11579__$1);
var G__11592 = null;
var G__11593 = 0;
var G__11594 = 0;
seq__11579 = G__11591;
chunk__11580 = G__11592;
count__11581 = G__11593;
i__11582 = G__11594;
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