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
var c__6188__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6189__auto__ = (function (){var switch__6118__auto__ = (function (state_11616){var state_val_11617 = (state_11616[1]);if((state_val_11617 === 1))
{var state_11616__$1 = state_11616;var statearr_11618_11662 = state_11616__$1;(statearr_11618_11662[2] = null);
(statearr_11618_11662[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11617 === 2))
{var state_11616__$1 = state_11616;if(true)
{var statearr_11619_11663 = state_11616__$1;(statearr_11619_11663[1] = 4);
} else
{var statearr_11620_11664 = state_11616__$1;(statearr_11620_11664[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11617 === 3))
{var inst_11614 = (state_11616[2]);var state_11616__$1 = state_11616;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11616__$1,inst_11614);
} else
{if((state_val_11617 === 4))
{var inst_11543 = (state_11616[7]);var inst_11544 = (state_11616[8]);var inst_11545 = (state_11616[9]);var inst_11543__$1 = new cljs.core.Keyword(null,"controls","controls",4741937704).cljs$core$IFn$_invoke$arity$1(comms);var inst_11544__$1 = new cljs.core.Keyword(null,"api","api",1014001036).cljs$core$IFn$_invoke$arity$1(comms);var inst_11545__$1 = cljs.core.async.timeout.call(null,30000);var inst_11546 = [inst_11543__$1,inst_11544__$1,inst_11545__$1];var inst_11547 = (new cljs.core.PersistentVector(null,3,5,cljs.core.PersistentVector.EMPTY_NODE,inst_11546,null));var state_11616__$1 = (function (){var statearr_11621 = state_11616;(statearr_11621[7] = inst_11543__$1);
(statearr_11621[8] = inst_11544__$1);
(statearr_11621[9] = inst_11545__$1);
return statearr_11621;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_11616__$1,7,inst_11547);
} else
{if((state_val_11617 === 5))
{var state_11616__$1 = state_11616;var statearr_11622_11665 = state_11616__$1;(statearr_11622_11665[2] = null);
(statearr_11622_11665[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11617 === 6))
{var inst_11612 = (state_11616[2]);var state_11616__$1 = state_11616;var statearr_11623_11666 = state_11616__$1;(statearr_11623_11666[2] = inst_11612);
(statearr_11623_11666[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11617 === 7))
{var inst_11549 = (state_11616[10]);var inst_11543 = (state_11616[7]);var inst_11551 = (state_11616[11]);var inst_11549__$1 = (state_11616[2]);var inst_11550 = cljs.core.nth.call(null,inst_11549__$1,0,null);var inst_11551__$1 = cljs.core.nth.call(null,inst_11549__$1,1,null);var inst_11552 = cljs.core._EQ_.call(null,inst_11551__$1,inst_11543);var state_11616__$1 = (function (){var statearr_11624 = state_11616;(statearr_11624[10] = inst_11549__$1);
(statearr_11624[12] = inst_11550);
(statearr_11624[11] = inst_11551__$1);
return statearr_11624;
})();if(inst_11552)
{var statearr_11625_11667 = state_11616__$1;(statearr_11625_11667[1] = 8);
} else
{var statearr_11626_11668 = state_11616__$1;(statearr_11626_11668[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11617 === 8))
{var inst_11549 = (state_11616[10]);var inst_11555 = cljs.core.nth.call(null,inst_11549,0,null);var state_11616__$1 = (function (){var statearr_11627 = state_11616;(statearr_11627[13] = inst_11555);
return statearr_11627;
})();if(cljs.core.truth_(growingtree_app.utils.logging_enabled_QMARK_))
{var statearr_11628_11669 = state_11616__$1;(statearr_11628_11669[1] = 11);
} else
{var statearr_11629_11670 = state_11616__$1;(statearr_11629_11670[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11617 === 9))
{var inst_11544 = (state_11616[8]);var inst_11551 = (state_11616[11]);var inst_11572 = cljs.core._EQ_.call(null,inst_11551,inst_11544);var state_11616__$1 = state_11616;if(inst_11572)
{var statearr_11630_11671 = state_11616__$1;(statearr_11630_11671[1] = 14);
} else
{var statearr_11631_11672 = state_11616__$1;(statearr_11631_11672[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11617 === 10))
{var inst_11608 = (state_11616[2]);var state_11616__$1 = (function (){var statearr_11632 = state_11616;(statearr_11632[14] = inst_11608);
return statearr_11632;
})();var statearr_11633_11673 = state_11616__$1;(statearr_11633_11673[2] = null);
(statearr_11633_11673[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11617 === 11))
{var inst_11555 = (state_11616[13]);var inst_11557 = cljs.core.pr_str.call(null,inst_11555);var inst_11558 = growingtree_app.utils.mprint.call(null,"Controls Verbose: ",inst_11557);var state_11616__$1 = state_11616;var statearr_11634_11674 = state_11616__$1;(statearr_11634_11674[2] = inst_11558);
(statearr_11634_11674[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11617 === 12))
{var state_11616__$1 = state_11616;var statearr_11635_11675 = state_11616__$1;(statearr_11635_11675[2] = null);
(statearr_11635_11675[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11617 === 13))
{var inst_11555 = (state_11616[13]);var inst_11561 = (state_11616[2]);var inst_11562 = cljs.core.deref.call(null,state);var inst_11563 = cljs.core.first.call(null,inst_11555);var inst_11564 = cljs.core.last.call(null,inst_11555);var inst_11565 = cljs.core.pr_str.call(null,inst_11563);var inst_11566 = console.log("controls chan event: ",inst_11565,inst_11564);var inst_11567 = cljs.core.partial.call(null,growingtree_app.controllers.controls.control_event,target,inst_11563,inst_11564);var inst_11568 = cljs.core.swap_BANG_.call(null,state,inst_11567);var inst_11569 = cljs.core.deref.call(null,state);var inst_11570 = growingtree_app.controllers.post_controls.post_control_event_BANG_.call(null,target,inst_11563,inst_11564,inst_11562,inst_11569);var state_11616__$1 = (function (){var statearr_11636 = state_11616;(statearr_11636[15] = inst_11566);
(statearr_11636[16] = inst_11568);
(statearr_11636[17] = inst_11561);
return statearr_11636;
})();var statearr_11637_11676 = state_11616__$1;(statearr_11637_11676[2] = inst_11570);
(statearr_11637_11676[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11617 === 14))
{var inst_11549 = (state_11616[10]);var inst_11575 = cljs.core.nth.call(null,inst_11549,0,null);var state_11616__$1 = (function (){var statearr_11638 = state_11616;(statearr_11638[18] = inst_11575);
return statearr_11638;
})();if(cljs.core.truth_(growingtree_app.utils.logging_enabled_QMARK_))
{var statearr_11639_11677 = state_11616__$1;(statearr_11639_11677[1] = 17);
} else
{var statearr_11640_11678 = state_11616__$1;(statearr_11640_11678[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11617 === 15))
{var inst_11545 = (state_11616[9]);var inst_11551 = (state_11616[11]);var inst_11592 = cljs.core._EQ_.call(null,inst_11551,inst_11545);var state_11616__$1 = state_11616;if(inst_11592)
{var statearr_11641_11679 = state_11616__$1;(statearr_11641_11679[1] = 20);
} else
{var statearr_11642_11680 = state_11616__$1;(statearr_11642_11680[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11617 === 16))
{var inst_11606 = (state_11616[2]);var state_11616__$1 = state_11616;var statearr_11643_11681 = state_11616__$1;(statearr_11643_11681[2] = inst_11606);
(statearr_11643_11681[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11617 === 17))
{var inst_11575 = (state_11616[18]);var inst_11577 = cljs.core.pr_str.call(null,inst_11575);var inst_11578 = growingtree_app.utils.mprint.call(null,"API Verbose: ",inst_11577);var state_11616__$1 = state_11616;var statearr_11644_11682 = state_11616__$1;(statearr_11644_11682[2] = inst_11578);
(statearr_11644_11682[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11617 === 18))
{var state_11616__$1 = state_11616;var statearr_11645_11683 = state_11616__$1;(statearr_11645_11683[2] = null);
(statearr_11645_11683[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11617 === 19))
{var inst_11575 = (state_11616[18]);var inst_11581 = (state_11616[2]);var inst_11582 = cljs.core.deref.call(null,state);var inst_11583 = cljs.core.first.call(null,inst_11575);var inst_11584 = cljs.core.last.call(null,inst_11575);var inst_11585 = new cljs.core.Keyword(null,"things-vec","things-vec",905584254).cljs$core$IFn$_invoke$arity$1(inst_11584);var inst_11586 = growingtree_app.core.update_history_BANG_.call(null,history,new cljs.core.Keyword(null,"api","api",1014001036),inst_11575);var inst_11587 = cljs.core.partial.call(null,growingtree_app.controllers.api.api_event,target,inst_11583,inst_11584);var inst_11588 = cljs.core.swap_BANG_.call(null,state,inst_11587);var inst_11589 = cljs.core.deref.call(null,state);var inst_11590 = growingtree_app.controllers.post_api.post_api_event_BANG_.call(null,target,inst_11583,inst_11584,inst_11582,inst_11589);var state_11616__$1 = (function (){var statearr_11646 = state_11616;(statearr_11646[19] = inst_11586);
(statearr_11646[20] = inst_11585);
(statearr_11646[21] = inst_11581);
(statearr_11646[22] = inst_11588);
return statearr_11646;
})();var statearr_11647_11684 = state_11616__$1;(statearr_11647_11684[2] = inst_11590);
(statearr_11647_11684[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11617 === 20))
{var inst_11594 = cljs.core.deref.call(null,history);var inst_11595 = cljs.core.pr_str.call(null,inst_11594);var inst_11596 = growingtree_app.utils.mprint.call(null,inst_11595);var state_11616__$1 = state_11616;var statearr_11648_11685 = state_11616__$1;(statearr_11648_11685[2] = inst_11596);
(statearr_11648_11685[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11617 === 21))
{var inst_11551 = (state_11616[11]);var inst_11598 = cljs.core._EQ_.call(null,inst_11551,new cljs.core.Keyword(null,"default","default",2558708147));var state_11616__$1 = state_11616;if(inst_11598)
{var statearr_11649_11686 = state_11616__$1;(statearr_11649_11686[1] = 23);
} else
{var statearr_11650_11687 = state_11616__$1;(statearr_11650_11687[1] = 24);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11617 === 22))
{var inst_11604 = (state_11616[2]);var state_11616__$1 = state_11616;var statearr_11651_11688 = state_11616__$1;(statearr_11651_11688[2] = inst_11604);
(statearr_11651_11688[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11617 === 23))
{var inst_11550 = (state_11616[12]);var state_11616__$1 = state_11616;var statearr_11652_11689 = state_11616__$1;(statearr_11652_11689[2] = inst_11550);
(statearr_11652_11689[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11617 === 24))
{var state_11616__$1 = state_11616;var statearr_11653_11690 = state_11616__$1;(statearr_11653_11690[2] = null);
(statearr_11653_11690[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11617 === 25))
{var inst_11602 = (state_11616[2]);var state_11616__$1 = state_11616;var statearr_11654_11691 = state_11616__$1;(statearr_11654_11691[2] = inst_11602);
(statearr_11654_11691[1] = 22);
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
var state_machine__6119__auto____0 = (function (){var statearr_11658 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11658[0] = state_machine__6119__auto__);
(statearr_11658[1] = 1);
return statearr_11658;
});
var state_machine__6119__auto____1 = (function (state_11616){while(true){
var ret_value__6120__auto__ = (function (){try{while(true){
var result__6121__auto__ = switch__6118__auto__.call(null,state_11616);if(cljs.core.keyword_identical_QMARK_.call(null,result__6121__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6121__auto__;
}
break;
}
}catch (e11659){if((e11659 instanceof Object))
{var ex__6122__auto__ = e11659;var statearr_11660_11692 = state_11616;(statearr_11660_11692[5] = ex__6122__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11616);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11659;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6120__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11693 = state_11616;
state_11616 = G__11693;
continue;
}
} else
{return ret_value__6120__auto__;
}
break;
}
});
state_machine__6119__auto__ = function(state_11616){
switch(arguments.length){
case 0:
return state_machine__6119__auto____0.call(this);
case 1:
return state_machine__6119__auto____1.call(this,state_11616);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6119__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6119__auto____0;
state_machine__6119__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6119__auto____1;
return state_machine__6119__auto__;
})()
;})(switch__6118__auto__))
})();var state__6190__auto__ = (function (){var statearr_11661 = f__6189__auto__.call(null);(statearr_11661[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6188__auto__);
return statearr_11661;
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
var seq__11698 = cljs.core.seq.call(null,channels);var chunk__11699 = null;var count__11700 = 0;var i__11701 = 0;while(true){
if((i__11701 < count__11700))
{var channel = cljs.core._nth.call(null,chunk__11699,i__11701);growingtree_app.api.kandan.subscribe_BANG_.call(null,kandan_client,[cljs.core.str("/channels/"),cljs.core.str(channel)].join(''),new cljs.core.Keyword(null,"api","api",1014001036).cljs$core$IFn$_invoke$arity$1(comms));
{
var G__11702 = seq__11698;
var G__11703 = chunk__11699;
var G__11704 = count__11700;
var G__11705 = (i__11701 + 1);
seq__11698 = G__11702;
chunk__11699 = G__11703;
count__11700 = G__11704;
i__11701 = G__11705;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__11698);if(temp__4092__auto__)
{var seq__11698__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11698__$1))
{var c__4191__auto__ = cljs.core.chunk_first.call(null,seq__11698__$1);{
var G__11706 = cljs.core.chunk_rest.call(null,seq__11698__$1);
var G__11707 = c__4191__auto__;
var G__11708 = cljs.core.count.call(null,c__4191__auto__);
var G__11709 = 0;
seq__11698 = G__11706;
chunk__11699 = G__11707;
count__11700 = G__11708;
i__11701 = G__11709;
continue;
}
} else
{var channel = cljs.core.first.call(null,seq__11698__$1);growingtree_app.api.kandan.subscribe_BANG_.call(null,kandan_client,[cljs.core.str("/channels/"),cljs.core.str(channel)].join(''),new cljs.core.Keyword(null,"api","api",1014001036).cljs$core$IFn$_invoke$arity$1(comms));
{
var G__11710 = cljs.core.next.call(null,seq__11698__$1);
var G__11711 = null;
var G__11712 = 0;
var G__11713 = 0;
seq__11698 = G__11710;
chunk__11699 = G__11711;
count__11700 = G__11712;
i__11701 = G__11713;
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
