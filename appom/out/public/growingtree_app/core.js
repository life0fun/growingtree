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
var c__6188__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6189__auto__ = (function (){var switch__6118__auto__ = (function (state_11673){var state_val_11674 = (state_11673[1]);if((state_val_11674 === 1))
{var state_11673__$1 = state_11673;var statearr_11675_11719 = state_11673__$1;(statearr_11675_11719[2] = null);
(statearr_11675_11719[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11674 === 2))
{var state_11673__$1 = state_11673;if(true)
{var statearr_11676_11720 = state_11673__$1;(statearr_11676_11720[1] = 4);
} else
{var statearr_11677_11721 = state_11673__$1;(statearr_11677_11721[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11674 === 3))
{var inst_11671 = (state_11673[2]);var state_11673__$1 = state_11673;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11673__$1,inst_11671);
} else
{if((state_val_11674 === 4))
{var inst_11600 = (state_11673[7]);var inst_11601 = (state_11673[8]);var inst_11602 = (state_11673[9]);var inst_11600__$1 = new cljs.core.Keyword(null,"controls","controls",4741937704).cljs$core$IFn$_invoke$arity$1(comms);var inst_11601__$1 = new cljs.core.Keyword(null,"api","api",1014001036).cljs$core$IFn$_invoke$arity$1(comms);var inst_11602__$1 = cljs.core.async.timeout.call(null,30000);var inst_11603 = [inst_11600__$1,inst_11601__$1,inst_11602__$1];var inst_11604 = (new cljs.core.PersistentVector(null,3,5,cljs.core.PersistentVector.EMPTY_NODE,inst_11603,null));var state_11673__$1 = (function (){var statearr_11678 = state_11673;(statearr_11678[7] = inst_11600__$1);
(statearr_11678[8] = inst_11601__$1);
(statearr_11678[9] = inst_11602__$1);
return statearr_11678;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_11673__$1,7,inst_11604);
} else
{if((state_val_11674 === 5))
{var state_11673__$1 = state_11673;var statearr_11679_11722 = state_11673__$1;(statearr_11679_11722[2] = null);
(statearr_11679_11722[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11674 === 6))
{var inst_11669 = (state_11673[2]);var state_11673__$1 = state_11673;var statearr_11680_11723 = state_11673__$1;(statearr_11680_11723[2] = inst_11669);
(statearr_11680_11723[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11674 === 7))
{var inst_11600 = (state_11673[7]);var inst_11606 = (state_11673[10]);var inst_11608 = (state_11673[11]);var inst_11606__$1 = (state_11673[2]);var inst_11607 = cljs.core.nth.call(null,inst_11606__$1,0,null);var inst_11608__$1 = cljs.core.nth.call(null,inst_11606__$1,1,null);var inst_11609 = cljs.core._EQ_.call(null,inst_11608__$1,inst_11600);var state_11673__$1 = (function (){var statearr_11681 = state_11673;(statearr_11681[10] = inst_11606__$1);
(statearr_11681[12] = inst_11607);
(statearr_11681[11] = inst_11608__$1);
return statearr_11681;
})();if(inst_11609)
{var statearr_11682_11724 = state_11673__$1;(statearr_11682_11724[1] = 8);
} else
{var statearr_11683_11725 = state_11673__$1;(statearr_11683_11725[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11674 === 8))
{var inst_11606 = (state_11673[10]);var inst_11612 = cljs.core.nth.call(null,inst_11606,0,null);var state_11673__$1 = (function (){var statearr_11684 = state_11673;(statearr_11684[13] = inst_11612);
return statearr_11684;
})();if(cljs.core.truth_(growingtree_app.utils.logging_enabled_QMARK_))
{var statearr_11685_11726 = state_11673__$1;(statearr_11685_11726[1] = 11);
} else
{var statearr_11686_11727 = state_11673__$1;(statearr_11686_11727[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11674 === 9))
{var inst_11601 = (state_11673[8]);var inst_11608 = (state_11673[11]);var inst_11629 = cljs.core._EQ_.call(null,inst_11608,inst_11601);var state_11673__$1 = state_11673;if(inst_11629)
{var statearr_11687_11728 = state_11673__$1;(statearr_11687_11728[1] = 14);
} else
{var statearr_11688_11729 = state_11673__$1;(statearr_11688_11729[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11674 === 10))
{var inst_11665 = (state_11673[2]);var state_11673__$1 = (function (){var statearr_11689 = state_11673;(statearr_11689[14] = inst_11665);
return statearr_11689;
})();var statearr_11690_11730 = state_11673__$1;(statearr_11690_11730[2] = null);
(statearr_11690_11730[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11674 === 11))
{var inst_11612 = (state_11673[13]);var inst_11614 = cljs.core.pr_str.call(null,inst_11612);var inst_11615 = growingtree_app.utils.mprint.call(null,"Controls Verbose: ",inst_11614);var state_11673__$1 = state_11673;var statearr_11691_11731 = state_11673__$1;(statearr_11691_11731[2] = inst_11615);
(statearr_11691_11731[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11674 === 12))
{var state_11673__$1 = state_11673;var statearr_11692_11732 = state_11673__$1;(statearr_11692_11732[2] = null);
(statearr_11692_11732[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11674 === 13))
{var inst_11612 = (state_11673[13]);var inst_11618 = (state_11673[2]);var inst_11619 = cljs.core.deref.call(null,state);var inst_11620 = cljs.core.first.call(null,inst_11612);var inst_11621 = cljs.core.last.call(null,inst_11612);var inst_11622 = cljs.core.pr_str.call(null,inst_11620,inst_11621);var inst_11623 = console.log("controls chan event: ",inst_11622);var inst_11624 = cljs.core.partial.call(null,growingtree_app.controllers.controls.control_event,target,inst_11620,inst_11621);var inst_11625 = cljs.core.swap_BANG_.call(null,state,inst_11624);var inst_11626 = cljs.core.deref.call(null,state);var inst_11627 = growingtree_app.controllers.post_controls.post_control_event_BANG_.call(null,target,inst_11620,inst_11621,inst_11619,inst_11626);var state_11673__$1 = (function (){var statearr_11693 = state_11673;(statearr_11693[15] = inst_11625);
(statearr_11693[16] = inst_11618);
(statearr_11693[17] = inst_11623);
return statearr_11693;
})();var statearr_11694_11733 = state_11673__$1;(statearr_11694_11733[2] = inst_11627);
(statearr_11694_11733[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11674 === 14))
{var inst_11606 = (state_11673[10]);var inst_11632 = cljs.core.nth.call(null,inst_11606,0,null);var state_11673__$1 = (function (){var statearr_11695 = state_11673;(statearr_11695[18] = inst_11632);
return statearr_11695;
})();if(cljs.core.truth_(growingtree_app.utils.logging_enabled_QMARK_))
{var statearr_11696_11734 = state_11673__$1;(statearr_11696_11734[1] = 17);
} else
{var statearr_11697_11735 = state_11673__$1;(statearr_11697_11735[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11674 === 15))
{var inst_11602 = (state_11673[9]);var inst_11608 = (state_11673[11]);var inst_11649 = cljs.core._EQ_.call(null,inst_11608,inst_11602);var state_11673__$1 = state_11673;if(inst_11649)
{var statearr_11698_11736 = state_11673__$1;(statearr_11698_11736[1] = 20);
} else
{var statearr_11699_11737 = state_11673__$1;(statearr_11699_11737[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11674 === 16))
{var inst_11663 = (state_11673[2]);var state_11673__$1 = state_11673;var statearr_11700_11738 = state_11673__$1;(statearr_11700_11738[2] = inst_11663);
(statearr_11700_11738[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11674 === 17))
{var inst_11632 = (state_11673[18]);var inst_11634 = cljs.core.pr_str.call(null,inst_11632);var inst_11635 = growingtree_app.utils.mprint.call(null,"API Verbose: ",inst_11634);var state_11673__$1 = state_11673;var statearr_11701_11739 = state_11673__$1;(statearr_11701_11739[2] = inst_11635);
(statearr_11701_11739[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11674 === 18))
{var state_11673__$1 = state_11673;var statearr_11702_11740 = state_11673__$1;(statearr_11702_11740[2] = null);
(statearr_11702_11740[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11674 === 19))
{var inst_11632 = (state_11673[18]);var inst_11638 = (state_11673[2]);var inst_11639 = cljs.core.deref.call(null,state);var inst_11640 = cljs.core.first.call(null,inst_11632);var inst_11641 = cljs.core.last.call(null,inst_11632);var inst_11642 = new cljs.core.Keyword(null,"things-vec","things-vec",905584254).cljs$core$IFn$_invoke$arity$1(inst_11641);var inst_11643 = growingtree_app.core.update_history_BANG_.call(null,history,new cljs.core.Keyword(null,"api","api",1014001036),inst_11632);var inst_11644 = cljs.core.partial.call(null,growingtree_app.controllers.api.api_event,target,inst_11640,inst_11641);var inst_11645 = cljs.core.swap_BANG_.call(null,state,inst_11644);var inst_11646 = cljs.core.deref.call(null,state);var inst_11647 = growingtree_app.controllers.post_api.post_api_event_BANG_.call(null,target,inst_11640,inst_11641,inst_11639,inst_11646);var state_11673__$1 = (function (){var statearr_11703 = state_11673;(statearr_11703[19] = inst_11638);
(statearr_11703[20] = inst_11643);
(statearr_11703[21] = inst_11645);
(statearr_11703[22] = inst_11642);
return statearr_11703;
})();var statearr_11704_11741 = state_11673__$1;(statearr_11704_11741[2] = inst_11647);
(statearr_11704_11741[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11674 === 20))
{var inst_11651 = cljs.core.deref.call(null,history);var inst_11652 = cljs.core.pr_str.call(null,inst_11651);var inst_11653 = growingtree_app.utils.mprint.call(null,inst_11652);var state_11673__$1 = state_11673;var statearr_11705_11742 = state_11673__$1;(statearr_11705_11742[2] = inst_11653);
(statearr_11705_11742[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11674 === 21))
{var inst_11608 = (state_11673[11]);var inst_11655 = cljs.core._EQ_.call(null,inst_11608,new cljs.core.Keyword(null,"default","default",2558708147));var state_11673__$1 = state_11673;if(inst_11655)
{var statearr_11706_11743 = state_11673__$1;(statearr_11706_11743[1] = 23);
} else
{var statearr_11707_11744 = state_11673__$1;(statearr_11707_11744[1] = 24);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11674 === 22))
{var inst_11661 = (state_11673[2]);var state_11673__$1 = state_11673;var statearr_11708_11745 = state_11673__$1;(statearr_11708_11745[2] = inst_11661);
(statearr_11708_11745[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11674 === 23))
{var inst_11607 = (state_11673[12]);var state_11673__$1 = state_11673;var statearr_11709_11746 = state_11673__$1;(statearr_11709_11746[2] = inst_11607);
(statearr_11709_11746[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11674 === 24))
{var state_11673__$1 = state_11673;var statearr_11710_11747 = state_11673__$1;(statearr_11710_11747[2] = null);
(statearr_11710_11747[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11674 === 25))
{var inst_11659 = (state_11673[2]);var state_11673__$1 = state_11673;var statearr_11711_11748 = state_11673__$1;(statearr_11711_11748[2] = inst_11659);
(statearr_11711_11748[1] = 22);
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
var state_machine__6119__auto____0 = (function (){var statearr_11715 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11715[0] = state_machine__6119__auto__);
(statearr_11715[1] = 1);
return statearr_11715;
});
var state_machine__6119__auto____1 = (function (state_11673){while(true){
var ret_value__6120__auto__ = (function (){try{while(true){
var result__6121__auto__ = switch__6118__auto__.call(null,state_11673);if(cljs.core.keyword_identical_QMARK_.call(null,result__6121__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6121__auto__;
}
break;
}
}catch (e11716){if((e11716 instanceof Object))
{var ex__6122__auto__ = e11716;var statearr_11717_11749 = state_11673;(statearr_11717_11749[5] = ex__6122__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11673);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11716;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6120__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11750 = state_11673;
state_11673 = G__11750;
continue;
}
} else
{return ret_value__6120__auto__;
}
break;
}
});
state_machine__6119__auto__ = function(state_11673){
switch(arguments.length){
case 0:
return state_machine__6119__auto____0.call(this);
case 1:
return state_machine__6119__auto____1.call(this,state_11673);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6119__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6119__auto____0;
state_machine__6119__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6119__auto____1;
return state_machine__6119__auto__;
})()
;})(switch__6118__auto__))
})();var state__6190__auto__ = (function (){var statearr_11718 = f__6189__auto__.call(null);(statearr_11718[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6188__auto__);
return statearr_11718;
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
var seq__11755 = cljs.core.seq.call(null,channels);var chunk__11756 = null;var count__11757 = 0;var i__11758 = 0;while(true){
if((i__11758 < count__11757))
{var channel = cljs.core._nth.call(null,chunk__11756,i__11758);growingtree_app.api.kandan.subscribe_BANG_.call(null,kandan_client,[cljs.core.str("/channels/"),cljs.core.str(channel)].join(''),new cljs.core.Keyword(null,"api","api",1014001036).cljs$core$IFn$_invoke$arity$1(comms));
{
var G__11759 = seq__11755;
var G__11760 = chunk__11756;
var G__11761 = count__11757;
var G__11762 = (i__11758 + 1);
seq__11755 = G__11759;
chunk__11756 = G__11760;
count__11757 = G__11761;
i__11758 = G__11762;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__11755);if(temp__4092__auto__)
{var seq__11755__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11755__$1))
{var c__4191__auto__ = cljs.core.chunk_first.call(null,seq__11755__$1);{
var G__11763 = cljs.core.chunk_rest.call(null,seq__11755__$1);
var G__11764 = c__4191__auto__;
var G__11765 = cljs.core.count.call(null,c__4191__auto__);
var G__11766 = 0;
seq__11755 = G__11763;
chunk__11756 = G__11764;
count__11757 = G__11765;
i__11758 = G__11766;
continue;
}
} else
{var channel = cljs.core.first.call(null,seq__11755__$1);growingtree_app.api.kandan.subscribe_BANG_.call(null,kandan_client,[cljs.core.str("/channels/"),cljs.core.str(channel)].join(''),new cljs.core.Keyword(null,"api","api",1014001036).cljs$core$IFn$_invoke$arity$1(comms));
{
var G__11767 = cljs.core.next.call(null,seq__11755__$1);
var G__11768 = null;
var G__11769 = 0;
var G__11770 = 0;
seq__11755 = G__11767;
chunk__11756 = G__11768;
count__11757 = G__11769;
i__11758 = G__11770;
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