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
var c__6188__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6189__auto__ = (function (){var switch__6118__auto__ = (function (state_11689){var state_val_11690 = (state_11689[1]);if((state_val_11690 === 1))
{var state_11689__$1 = state_11689;var statearr_11691_11735 = state_11689__$1;(statearr_11691_11735[2] = null);
(statearr_11691_11735[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11690 === 2))
{var state_11689__$1 = state_11689;if(true)
{var statearr_11692_11736 = state_11689__$1;(statearr_11692_11736[1] = 4);
} else
{var statearr_11693_11737 = state_11689__$1;(statearr_11693_11737[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11690 === 3))
{var inst_11687 = (state_11689[2]);var state_11689__$1 = state_11689;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11689__$1,inst_11687);
} else
{if((state_val_11690 === 4))
{var inst_11617 = (state_11689[7]);var inst_11616 = (state_11689[8]);var inst_11618 = (state_11689[9]);var inst_11616__$1 = new cljs.core.Keyword(null,"controls","controls",4741937704).cljs$core$IFn$_invoke$arity$1(comms);var inst_11617__$1 = new cljs.core.Keyword(null,"api","api",1014001036).cljs$core$IFn$_invoke$arity$1(comms);var inst_11618__$1 = cljs.core.async.timeout.call(null,30000);var inst_11619 = [inst_11616__$1,inst_11617__$1,inst_11618__$1];var inst_11620 = (new cljs.core.PersistentVector(null,3,5,cljs.core.PersistentVector.EMPTY_NODE,inst_11619,null));var state_11689__$1 = (function (){var statearr_11694 = state_11689;(statearr_11694[7] = inst_11617__$1);
(statearr_11694[8] = inst_11616__$1);
(statearr_11694[9] = inst_11618__$1);
return statearr_11694;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_11689__$1,7,inst_11620);
} else
{if((state_val_11690 === 5))
{var state_11689__$1 = state_11689;var statearr_11695_11738 = state_11689__$1;(statearr_11695_11738[2] = null);
(statearr_11695_11738[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11690 === 6))
{var inst_11685 = (state_11689[2]);var state_11689__$1 = state_11689;var statearr_11696_11739 = state_11689__$1;(statearr_11696_11739[2] = inst_11685);
(statearr_11696_11739[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11690 === 7))
{var inst_11616 = (state_11689[8]);var inst_11622 = (state_11689[10]);var inst_11624 = (state_11689[11]);var inst_11622__$1 = (state_11689[2]);var inst_11623 = cljs.core.nth.call(null,inst_11622__$1,0,null);var inst_11624__$1 = cljs.core.nth.call(null,inst_11622__$1,1,null);var inst_11625 = cljs.core._EQ_.call(null,inst_11624__$1,inst_11616);var state_11689__$1 = (function (){var statearr_11697 = state_11689;(statearr_11697[10] = inst_11622__$1);
(statearr_11697[12] = inst_11623);
(statearr_11697[11] = inst_11624__$1);
return statearr_11697;
})();if(inst_11625)
{var statearr_11698_11740 = state_11689__$1;(statearr_11698_11740[1] = 8);
} else
{var statearr_11699_11741 = state_11689__$1;(statearr_11699_11741[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11690 === 8))
{var inst_11622 = (state_11689[10]);var inst_11628 = cljs.core.nth.call(null,inst_11622,0,null);var state_11689__$1 = (function (){var statearr_11700 = state_11689;(statearr_11700[13] = inst_11628);
return statearr_11700;
})();if(cljs.core.truth_(growingtree_app.utils.logging_enabled_QMARK_))
{var statearr_11701_11742 = state_11689__$1;(statearr_11701_11742[1] = 11);
} else
{var statearr_11702_11743 = state_11689__$1;(statearr_11702_11743[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11690 === 9))
{var inst_11617 = (state_11689[7]);var inst_11624 = (state_11689[11]);var inst_11645 = cljs.core._EQ_.call(null,inst_11624,inst_11617);var state_11689__$1 = state_11689;if(inst_11645)
{var statearr_11703_11744 = state_11689__$1;(statearr_11703_11744[1] = 14);
} else
{var statearr_11704_11745 = state_11689__$1;(statearr_11704_11745[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11690 === 10))
{var inst_11681 = (state_11689[2]);var state_11689__$1 = (function (){var statearr_11705 = state_11689;(statearr_11705[14] = inst_11681);
return statearr_11705;
})();var statearr_11706_11746 = state_11689__$1;(statearr_11706_11746[2] = null);
(statearr_11706_11746[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11690 === 11))
{var inst_11628 = (state_11689[13]);var inst_11630 = cljs.core.pr_str.call(null,inst_11628);var inst_11631 = growingtree_app.utils.mprint.call(null,"Controls Verbose: ",inst_11630);var state_11689__$1 = state_11689;var statearr_11707_11747 = state_11689__$1;(statearr_11707_11747[2] = inst_11631);
(statearr_11707_11747[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11690 === 12))
{var state_11689__$1 = state_11689;var statearr_11708_11748 = state_11689__$1;(statearr_11708_11748[2] = null);
(statearr_11708_11748[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11690 === 13))
{var inst_11628 = (state_11689[13]);var inst_11634 = (state_11689[2]);var inst_11635 = cljs.core.deref.call(null,state);var inst_11636 = cljs.core.first.call(null,inst_11628);var inst_11637 = cljs.core.last.call(null,inst_11628);var inst_11638 = cljs.core.pr_str.call(null,inst_11636,inst_11637);var inst_11639 = console.log("controls chan event: ",inst_11638);var inst_11640 = cljs.core.partial.call(null,growingtree_app.controllers.controls.control_event,target,inst_11636,inst_11637);var inst_11641 = cljs.core.swap_BANG_.call(null,state,inst_11640);var inst_11642 = cljs.core.deref.call(null,state);var inst_11643 = growingtree_app.controllers.post_controls.post_control_event_BANG_.call(null,target,inst_11636,inst_11637,inst_11635,inst_11642);var state_11689__$1 = (function (){var statearr_11709 = state_11689;(statearr_11709[15] = inst_11639);
(statearr_11709[16] = inst_11641);
(statearr_11709[17] = inst_11634);
return statearr_11709;
})();var statearr_11710_11749 = state_11689__$1;(statearr_11710_11749[2] = inst_11643);
(statearr_11710_11749[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11690 === 14))
{var inst_11622 = (state_11689[10]);var inst_11648 = cljs.core.nth.call(null,inst_11622,0,null);var state_11689__$1 = (function (){var statearr_11711 = state_11689;(statearr_11711[18] = inst_11648);
return statearr_11711;
})();if(cljs.core.truth_(growingtree_app.utils.logging_enabled_QMARK_))
{var statearr_11712_11750 = state_11689__$1;(statearr_11712_11750[1] = 17);
} else
{var statearr_11713_11751 = state_11689__$1;(statearr_11713_11751[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11690 === 15))
{var inst_11618 = (state_11689[9]);var inst_11624 = (state_11689[11]);var inst_11665 = cljs.core._EQ_.call(null,inst_11624,inst_11618);var state_11689__$1 = state_11689;if(inst_11665)
{var statearr_11714_11752 = state_11689__$1;(statearr_11714_11752[1] = 20);
} else
{var statearr_11715_11753 = state_11689__$1;(statearr_11715_11753[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11690 === 16))
{var inst_11679 = (state_11689[2]);var state_11689__$1 = state_11689;var statearr_11716_11754 = state_11689__$1;(statearr_11716_11754[2] = inst_11679);
(statearr_11716_11754[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11690 === 17))
{var inst_11648 = (state_11689[18]);var inst_11650 = cljs.core.pr_str.call(null,inst_11648);var inst_11651 = growingtree_app.utils.mprint.call(null,"API Verbose: ",inst_11650);var state_11689__$1 = state_11689;var statearr_11717_11755 = state_11689__$1;(statearr_11717_11755[2] = inst_11651);
(statearr_11717_11755[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11690 === 18))
{var state_11689__$1 = state_11689;var statearr_11718_11756 = state_11689__$1;(statearr_11718_11756[2] = null);
(statearr_11718_11756[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11690 === 19))
{var inst_11648 = (state_11689[18]);var inst_11654 = (state_11689[2]);var inst_11655 = cljs.core.deref.call(null,state);var inst_11656 = cljs.core.first.call(null,inst_11648);var inst_11657 = cljs.core.last.call(null,inst_11648);var inst_11658 = new cljs.core.Keyword(null,"things-vec","things-vec",905584254).cljs$core$IFn$_invoke$arity$1(inst_11657);var inst_11659 = growingtree_app.core.update_history_BANG_.call(null,history,new cljs.core.Keyword(null,"api","api",1014001036),inst_11648);var inst_11660 = cljs.core.partial.call(null,growingtree_app.controllers.api.api_event,target,inst_11656,inst_11657);var inst_11661 = cljs.core.swap_BANG_.call(null,state,inst_11660);var inst_11662 = cljs.core.deref.call(null,state);var inst_11663 = growingtree_app.controllers.post_api.post_api_event_BANG_.call(null,target,inst_11656,inst_11657,inst_11655,inst_11662);var state_11689__$1 = (function (){var statearr_11719 = state_11689;(statearr_11719[19] = inst_11654);
(statearr_11719[20] = inst_11661);
(statearr_11719[21] = inst_11659);
(statearr_11719[22] = inst_11658);
return statearr_11719;
})();var statearr_11720_11757 = state_11689__$1;(statearr_11720_11757[2] = inst_11663);
(statearr_11720_11757[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11690 === 20))
{var inst_11667 = cljs.core.deref.call(null,history);var inst_11668 = cljs.core.pr_str.call(null,inst_11667);var inst_11669 = growingtree_app.utils.mprint.call(null,inst_11668);var state_11689__$1 = state_11689;var statearr_11721_11758 = state_11689__$1;(statearr_11721_11758[2] = inst_11669);
(statearr_11721_11758[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11690 === 21))
{var inst_11624 = (state_11689[11]);var inst_11671 = cljs.core._EQ_.call(null,inst_11624,new cljs.core.Keyword(null,"default","default",2558708147));var state_11689__$1 = state_11689;if(inst_11671)
{var statearr_11722_11759 = state_11689__$1;(statearr_11722_11759[1] = 23);
} else
{var statearr_11723_11760 = state_11689__$1;(statearr_11723_11760[1] = 24);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11690 === 22))
{var inst_11677 = (state_11689[2]);var state_11689__$1 = state_11689;var statearr_11724_11761 = state_11689__$1;(statearr_11724_11761[2] = inst_11677);
(statearr_11724_11761[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11690 === 23))
{var inst_11623 = (state_11689[12]);var state_11689__$1 = state_11689;var statearr_11725_11762 = state_11689__$1;(statearr_11725_11762[2] = inst_11623);
(statearr_11725_11762[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11690 === 24))
{var state_11689__$1 = state_11689;var statearr_11726_11763 = state_11689__$1;(statearr_11726_11763[2] = null);
(statearr_11726_11763[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11690 === 25))
{var inst_11675 = (state_11689[2]);var state_11689__$1 = state_11689;var statearr_11727_11764 = state_11689__$1;(statearr_11727_11764[2] = inst_11675);
(statearr_11727_11764[1] = 22);
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
var state_machine__6119__auto____0 = (function (){var statearr_11731 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11731[0] = state_machine__6119__auto__);
(statearr_11731[1] = 1);
return statearr_11731;
});
var state_machine__6119__auto____1 = (function (state_11689){while(true){
var ret_value__6120__auto__ = (function (){try{while(true){
var result__6121__auto__ = switch__6118__auto__.call(null,state_11689);if(cljs.core.keyword_identical_QMARK_.call(null,result__6121__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6121__auto__;
}
break;
}
}catch (e11732){if((e11732 instanceof Object))
{var ex__6122__auto__ = e11732;var statearr_11733_11765 = state_11689;(statearr_11733_11765[5] = ex__6122__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11689);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11732;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6120__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11766 = state_11689;
state_11689 = G__11766;
continue;
}
} else
{return ret_value__6120__auto__;
}
break;
}
});
state_machine__6119__auto__ = function(state_11689){
switch(arguments.length){
case 0:
return state_machine__6119__auto____0.call(this);
case 1:
return state_machine__6119__auto____1.call(this,state_11689);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6119__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6119__auto____0;
state_machine__6119__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6119__auto____1;
return state_machine__6119__auto__;
})()
;})(switch__6118__auto__))
})();var state__6190__auto__ = (function (){var statearr_11734 = f__6189__auto__.call(null);(statearr_11734[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6188__auto__);
return statearr_11734;
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
var seq__11771 = cljs.core.seq.call(null,channels);var chunk__11772 = null;var count__11773 = 0;var i__11774 = 0;while(true){
if((i__11774 < count__11773))
{var channel = cljs.core._nth.call(null,chunk__11772,i__11774);growingtree_app.api.kandan.subscribe_BANG_.call(null,kandan_client,[cljs.core.str("/channels/"),cljs.core.str(channel)].join(''),new cljs.core.Keyword(null,"api","api",1014001036).cljs$core$IFn$_invoke$arity$1(comms));
{
var G__11775 = seq__11771;
var G__11776 = chunk__11772;
var G__11777 = count__11773;
var G__11778 = (i__11774 + 1);
seq__11771 = G__11775;
chunk__11772 = G__11776;
count__11773 = G__11777;
i__11774 = G__11778;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__11771);if(temp__4092__auto__)
{var seq__11771__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11771__$1))
{var c__4191__auto__ = cljs.core.chunk_first.call(null,seq__11771__$1);{
var G__11779 = cljs.core.chunk_rest.call(null,seq__11771__$1);
var G__11780 = c__4191__auto__;
var G__11781 = cljs.core.count.call(null,c__4191__auto__);
var G__11782 = 0;
seq__11771 = G__11779;
chunk__11772 = G__11780;
count__11773 = G__11781;
i__11774 = G__11782;
continue;
}
} else
{var channel = cljs.core.first.call(null,seq__11771__$1);growingtree_app.api.kandan.subscribe_BANG_.call(null,kandan_client,[cljs.core.str("/channels/"),cljs.core.str(channel)].join(''),new cljs.core.Keyword(null,"api","api",1014001036).cljs$core$IFn$_invoke$arity$1(comms));
{
var G__11783 = cljs.core.next.call(null,seq__11771__$1);
var G__11784 = null;
var G__11785 = 0;
var G__11786 = 0;
seq__11771 = G__11783;
chunk__11772 = G__11784;
count__11773 = G__11785;
i__11774 = G__11786;
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