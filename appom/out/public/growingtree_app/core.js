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
var c__6188__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6189__auto__ = (function (){var switch__6118__auto__ = (function (state_11540){var state_val_11541 = (state_11540[1]);if((state_val_11541 === 1))
{var state_11540__$1 = state_11540;var statearr_11542_11586 = state_11540__$1;(statearr_11542_11586[2] = null);
(statearr_11542_11586[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11541 === 2))
{var state_11540__$1 = state_11540;if(true)
{var statearr_11543_11587 = state_11540__$1;(statearr_11543_11587[1] = 4);
} else
{var statearr_11544_11588 = state_11540__$1;(statearr_11544_11588[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11541 === 3))
{var inst_11538 = (state_11540[2]);var state_11540__$1 = state_11540;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11540__$1,inst_11538);
} else
{if((state_val_11541 === 4))
{var inst_11467 = (state_11540[7]);var inst_11468 = (state_11540[8]);var inst_11469 = (state_11540[9]);var inst_11467__$1 = new cljs.core.Keyword(null,"controls","controls",4741937704).cljs$core$IFn$_invoke$arity$1(comms);var inst_11468__$1 = new cljs.core.Keyword(null,"api","api",1014001036).cljs$core$IFn$_invoke$arity$1(comms);var inst_11469__$1 = cljs.core.async.timeout.call(null,30000);var inst_11470 = [inst_11467__$1,inst_11468__$1,inst_11469__$1];var inst_11471 = (new cljs.core.PersistentVector(null,3,5,cljs.core.PersistentVector.EMPTY_NODE,inst_11470,null));var state_11540__$1 = (function (){var statearr_11545 = state_11540;(statearr_11545[7] = inst_11467__$1);
(statearr_11545[8] = inst_11468__$1);
(statearr_11545[9] = inst_11469__$1);
return statearr_11545;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_11540__$1,7,inst_11471);
} else
{if((state_val_11541 === 5))
{var state_11540__$1 = state_11540;var statearr_11546_11589 = state_11540__$1;(statearr_11546_11589[2] = null);
(statearr_11546_11589[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11541 === 6))
{var inst_11536 = (state_11540[2]);var state_11540__$1 = state_11540;var statearr_11547_11590 = state_11540__$1;(statearr_11547_11590[2] = inst_11536);
(statearr_11547_11590[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11541 === 7))
{var inst_11473 = (state_11540[10]);var inst_11467 = (state_11540[7]);var inst_11475 = (state_11540[11]);var inst_11473__$1 = (state_11540[2]);var inst_11474 = cljs.core.nth.call(null,inst_11473__$1,0,null);var inst_11475__$1 = cljs.core.nth.call(null,inst_11473__$1,1,null);var inst_11476 = cljs.core._EQ_.call(null,inst_11475__$1,inst_11467);var state_11540__$1 = (function (){var statearr_11548 = state_11540;(statearr_11548[10] = inst_11473__$1);
(statearr_11548[11] = inst_11475__$1);
(statearr_11548[12] = inst_11474);
return statearr_11548;
})();if(inst_11476)
{var statearr_11549_11591 = state_11540__$1;(statearr_11549_11591[1] = 8);
} else
{var statearr_11550_11592 = state_11540__$1;(statearr_11550_11592[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11541 === 8))
{var inst_11473 = (state_11540[10]);var inst_11479 = (state_11540[13]);var inst_11479__$1 = cljs.core.nth.call(null,inst_11473,0,null);var inst_11480 = cljs.core.pr_str.call(null,inst_11479__$1);var inst_11481 = cljs.core.print.call(null,"controls chan event: ",inst_11480);var state_11540__$1 = (function (){var statearr_11551 = state_11540;(statearr_11551[13] = inst_11479__$1);
(statearr_11551[14] = inst_11481);
return statearr_11551;
})();if(cljs.core.truth_(growingtree_app.utils.logging_enabled_QMARK_))
{var statearr_11552_11593 = state_11540__$1;(statearr_11552_11593[1] = 11);
} else
{var statearr_11553_11594 = state_11540__$1;(statearr_11553_11594[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11541 === 9))
{var inst_11468 = (state_11540[8]);var inst_11475 = (state_11540[11]);var inst_11496 = cljs.core._EQ_.call(null,inst_11475,inst_11468);var state_11540__$1 = state_11540;if(inst_11496)
{var statearr_11554_11595 = state_11540__$1;(statearr_11554_11595[1] = 14);
} else
{var statearr_11555_11596 = state_11540__$1;(statearr_11555_11596[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11541 === 10))
{var inst_11532 = (state_11540[2]);var state_11540__$1 = (function (){var statearr_11556 = state_11540;(statearr_11556[15] = inst_11532);
return statearr_11556;
})();var statearr_11557_11597 = state_11540__$1;(statearr_11557_11597[2] = null);
(statearr_11557_11597[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11541 === 11))
{var inst_11479 = (state_11540[13]);var inst_11483 = cljs.core.pr_str.call(null,inst_11479);var inst_11484 = growingtree_app.utils.mprint.call(null,"Controls Verbose: ",inst_11483);var state_11540__$1 = state_11540;var statearr_11558_11598 = state_11540__$1;(statearr_11558_11598[2] = inst_11484);
(statearr_11558_11598[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11541 === 12))
{var state_11540__$1 = state_11540;var statearr_11559_11599 = state_11540__$1;(statearr_11559_11599[2] = null);
(statearr_11559_11599[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11541 === 13))
{var inst_11479 = (state_11540[13]);var inst_11487 = (state_11540[2]);var inst_11488 = cljs.core.deref.call(null,state);var inst_11489 = cljs.core.first.call(null,inst_11479);var inst_11490 = cljs.core.last.call(null,inst_11479);var inst_11491 = cljs.core.partial.call(null,growingtree_app.controllers.controls.control_event,target,inst_11489,inst_11490);var inst_11492 = cljs.core.swap_BANG_.call(null,state,inst_11491);var inst_11493 = cljs.core.deref.call(null,state);var inst_11494 = growingtree_app.controllers.post_controls.post_control_event_BANG_.call(null,target,inst_11489,inst_11490,inst_11488,inst_11493);var state_11540__$1 = (function (){var statearr_11560 = state_11540;(statearr_11560[16] = inst_11492);
(statearr_11560[17] = inst_11487);
return statearr_11560;
})();var statearr_11561_11600 = state_11540__$1;(statearr_11561_11600[2] = inst_11494);
(statearr_11561_11600[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11541 === 14))
{var inst_11473 = (state_11540[10]);var inst_11499 = cljs.core.nth.call(null,inst_11473,0,null);var state_11540__$1 = (function (){var statearr_11562 = state_11540;(statearr_11562[18] = inst_11499);
return statearr_11562;
})();if(cljs.core.truth_(growingtree_app.utils.logging_enabled_QMARK_))
{var statearr_11563_11601 = state_11540__$1;(statearr_11563_11601[1] = 17);
} else
{var statearr_11564_11602 = state_11540__$1;(statearr_11564_11602[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11541 === 15))
{var inst_11469 = (state_11540[9]);var inst_11475 = (state_11540[11]);var inst_11516 = cljs.core._EQ_.call(null,inst_11475,inst_11469);var state_11540__$1 = state_11540;if(inst_11516)
{var statearr_11565_11603 = state_11540__$1;(statearr_11565_11603[1] = 20);
} else
{var statearr_11566_11604 = state_11540__$1;(statearr_11566_11604[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11541 === 16))
{var inst_11530 = (state_11540[2]);var state_11540__$1 = state_11540;var statearr_11567_11605 = state_11540__$1;(statearr_11567_11605[2] = inst_11530);
(statearr_11567_11605[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11541 === 17))
{var inst_11499 = (state_11540[18]);var inst_11501 = cljs.core.pr_str.call(null,inst_11499);var inst_11502 = growingtree_app.utils.mprint.call(null,"API Verbose: ",inst_11501);var state_11540__$1 = state_11540;var statearr_11568_11606 = state_11540__$1;(statearr_11568_11606[2] = inst_11502);
(statearr_11568_11606[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11541 === 18))
{var state_11540__$1 = state_11540;var statearr_11569_11607 = state_11540__$1;(statearr_11569_11607[2] = null);
(statearr_11569_11607[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11541 === 19))
{var inst_11499 = (state_11540[18]);var inst_11505 = (state_11540[2]);var inst_11506 = cljs.core.deref.call(null,state);var inst_11507 = cljs.core.first.call(null,inst_11499);var inst_11508 = cljs.core.last.call(null,inst_11499);var inst_11509 = new cljs.core.Keyword(null,"things-vec","things-vec",905584254).cljs$core$IFn$_invoke$arity$1(inst_11508);var inst_11510 = growingtree_app.core.update_history_BANG_.call(null,history,new cljs.core.Keyword(null,"api","api",1014001036),inst_11499);var inst_11511 = cljs.core.partial.call(null,growingtree_app.controllers.api.api_event,target,inst_11507,inst_11508);var inst_11512 = cljs.core.swap_BANG_.call(null,state,inst_11511);var inst_11513 = cljs.core.deref.call(null,state);var inst_11514 = growingtree_app.controllers.post_api.post_api_event_BANG_.call(null,target,inst_11507,inst_11508,inst_11506,inst_11513);var state_11540__$1 = (function (){var statearr_11570 = state_11540;(statearr_11570[19] = inst_11505);
(statearr_11570[20] = inst_11509);
(statearr_11570[21] = inst_11512);
(statearr_11570[22] = inst_11510);
return statearr_11570;
})();var statearr_11571_11608 = state_11540__$1;(statearr_11571_11608[2] = inst_11514);
(statearr_11571_11608[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11541 === 20))
{var inst_11518 = cljs.core.deref.call(null,history);var inst_11519 = cljs.core.pr_str.call(null,inst_11518);var inst_11520 = growingtree_app.utils.mprint.call(null,inst_11519);var state_11540__$1 = state_11540;var statearr_11572_11609 = state_11540__$1;(statearr_11572_11609[2] = inst_11520);
(statearr_11572_11609[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11541 === 21))
{var inst_11475 = (state_11540[11]);var inst_11522 = cljs.core._EQ_.call(null,inst_11475,new cljs.core.Keyword(null,"default","default",2558708147));var state_11540__$1 = state_11540;if(inst_11522)
{var statearr_11573_11610 = state_11540__$1;(statearr_11573_11610[1] = 23);
} else
{var statearr_11574_11611 = state_11540__$1;(statearr_11574_11611[1] = 24);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11541 === 22))
{var inst_11528 = (state_11540[2]);var state_11540__$1 = state_11540;var statearr_11575_11612 = state_11540__$1;(statearr_11575_11612[2] = inst_11528);
(statearr_11575_11612[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11541 === 23))
{var inst_11474 = (state_11540[12]);var state_11540__$1 = state_11540;var statearr_11576_11613 = state_11540__$1;(statearr_11576_11613[2] = inst_11474);
(statearr_11576_11613[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11541 === 24))
{var state_11540__$1 = state_11540;var statearr_11577_11614 = state_11540__$1;(statearr_11577_11614[2] = null);
(statearr_11577_11614[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11541 === 25))
{var inst_11526 = (state_11540[2]);var state_11540__$1 = state_11540;var statearr_11578_11615 = state_11540__$1;(statearr_11578_11615[2] = inst_11526);
(statearr_11578_11615[1] = 22);
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
var state_machine__6119__auto____0 = (function (){var statearr_11582 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11582[0] = state_machine__6119__auto__);
(statearr_11582[1] = 1);
return statearr_11582;
});
var state_machine__6119__auto____1 = (function (state_11540){while(true){
var ret_value__6120__auto__ = (function (){try{while(true){
var result__6121__auto__ = switch__6118__auto__.call(null,state_11540);if(cljs.core.keyword_identical_QMARK_.call(null,result__6121__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6121__auto__;
}
break;
}
}catch (e11583){if((e11583 instanceof Object))
{var ex__6122__auto__ = e11583;var statearr_11584_11616 = state_11540;(statearr_11584_11616[5] = ex__6122__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11540);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11583;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6120__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11617 = state_11540;
state_11540 = G__11617;
continue;
}
} else
{return ret_value__6120__auto__;
}
break;
}
});
state_machine__6119__auto__ = function(state_11540){
switch(arguments.length){
case 0:
return state_machine__6119__auto____0.call(this);
case 1:
return state_machine__6119__auto____1.call(this,state_11540);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6119__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6119__auto____0;
state_machine__6119__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6119__auto____1;
return state_machine__6119__auto__;
})()
;})(switch__6118__auto__))
})();var state__6190__auto__ = (function (){var statearr_11585 = f__6189__auto__.call(null);(statearr_11585[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6188__auto__);
return statearr_11585;
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
var seq__11622 = cljs.core.seq.call(null,channels);var chunk__11623 = null;var count__11624 = 0;var i__11625 = 0;while(true){
if((i__11625 < count__11624))
{var channel = cljs.core._nth.call(null,chunk__11623,i__11625);growingtree_app.api.kandan.subscribe_BANG_.call(null,kandan_client,[cljs.core.str("/channels/"),cljs.core.str(channel)].join(''),new cljs.core.Keyword(null,"api","api",1014001036).cljs$core$IFn$_invoke$arity$1(comms));
{
var G__11626 = seq__11622;
var G__11627 = chunk__11623;
var G__11628 = count__11624;
var G__11629 = (i__11625 + 1);
seq__11622 = G__11626;
chunk__11623 = G__11627;
count__11624 = G__11628;
i__11625 = G__11629;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__11622);if(temp__4092__auto__)
{var seq__11622__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11622__$1))
{var c__4191__auto__ = cljs.core.chunk_first.call(null,seq__11622__$1);{
var G__11630 = cljs.core.chunk_rest.call(null,seq__11622__$1);
var G__11631 = c__4191__auto__;
var G__11632 = cljs.core.count.call(null,c__4191__auto__);
var G__11633 = 0;
seq__11622 = G__11630;
chunk__11623 = G__11631;
count__11624 = G__11632;
i__11625 = G__11633;
continue;
}
} else
{var channel = cljs.core.first.call(null,seq__11622__$1);growingtree_app.api.kandan.subscribe_BANG_.call(null,kandan_client,[cljs.core.str("/channels/"),cljs.core.str(channel)].join(''),new cljs.core.Keyword(null,"api","api",1014001036).cljs$core$IFn$_invoke$arity$1(comms));
{
var G__11634 = cljs.core.next.call(null,seq__11622__$1);
var G__11635 = null;
var G__11636 = 0;
var G__11637 = 0;
seq__11622 = G__11634;
chunk__11623 = G__11635;
count__11624 = G__11636;
i__11625 = G__11637;
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