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
var c__6188__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6189__auto__ = (function (){var switch__6118__auto__ = (function (state_11694){var state_val_11695 = (state_11694[1]);if((state_val_11695 === 1))
{var state_11694__$1 = state_11694;var statearr_11696_11740 = state_11694__$1;(statearr_11696_11740[2] = null);
(statearr_11696_11740[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11695 === 2))
{var state_11694__$1 = state_11694;if(true)
{var statearr_11697_11741 = state_11694__$1;(statearr_11697_11741[1] = 4);
} else
{var statearr_11698_11742 = state_11694__$1;(statearr_11698_11742[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11695 === 3))
{var inst_11692 = (state_11694[2]);var state_11694__$1 = state_11694;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11694__$1,inst_11692);
} else
{if((state_val_11695 === 4))
{var inst_11621 = (state_11694[7]);var inst_11622 = (state_11694[8]);var inst_11623 = (state_11694[9]);var inst_11621__$1 = new cljs.core.Keyword(null,"controls","controls",4741937704).cljs$core$IFn$_invoke$arity$1(comms);var inst_11622__$1 = new cljs.core.Keyword(null,"api","api",1014001036).cljs$core$IFn$_invoke$arity$1(comms);var inst_11623__$1 = cljs.core.async.timeout.call(null,30000);var inst_11624 = [inst_11621__$1,inst_11622__$1,inst_11623__$1];var inst_11625 = (new cljs.core.PersistentVector(null,3,5,cljs.core.PersistentVector.EMPTY_NODE,inst_11624,null));var state_11694__$1 = (function (){var statearr_11699 = state_11694;(statearr_11699[7] = inst_11621__$1);
(statearr_11699[8] = inst_11622__$1);
(statearr_11699[9] = inst_11623__$1);
return statearr_11699;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_11694__$1,7,inst_11625);
} else
{if((state_val_11695 === 5))
{var state_11694__$1 = state_11694;var statearr_11700_11743 = state_11694__$1;(statearr_11700_11743[2] = null);
(statearr_11700_11743[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11695 === 6))
{var inst_11690 = (state_11694[2]);var state_11694__$1 = state_11694;var statearr_11701_11744 = state_11694__$1;(statearr_11701_11744[2] = inst_11690);
(statearr_11701_11744[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11695 === 7))
{var inst_11627 = (state_11694[10]);var inst_11629 = (state_11694[11]);var inst_11621 = (state_11694[7]);var inst_11627__$1 = (state_11694[2]);var inst_11628 = cljs.core.nth.call(null,inst_11627__$1,0,null);var inst_11629__$1 = cljs.core.nth.call(null,inst_11627__$1,1,null);var inst_11630 = cljs.core._EQ_.call(null,inst_11629__$1,inst_11621);var state_11694__$1 = (function (){var statearr_11702 = state_11694;(statearr_11702[12] = inst_11628);
(statearr_11702[10] = inst_11627__$1);
(statearr_11702[11] = inst_11629__$1);
return statearr_11702;
})();if(inst_11630)
{var statearr_11703_11745 = state_11694__$1;(statearr_11703_11745[1] = 8);
} else
{var statearr_11704_11746 = state_11694__$1;(statearr_11704_11746[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11695 === 8))
{var inst_11627 = (state_11694[10]);var inst_11633 = cljs.core.nth.call(null,inst_11627,0,null);var state_11694__$1 = (function (){var statearr_11705 = state_11694;(statearr_11705[13] = inst_11633);
return statearr_11705;
})();if(cljs.core.truth_(growingtree_app.utils.logging_enabled_QMARK_))
{var statearr_11706_11747 = state_11694__$1;(statearr_11706_11747[1] = 11);
} else
{var statearr_11707_11748 = state_11694__$1;(statearr_11707_11748[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11695 === 9))
{var inst_11629 = (state_11694[11]);var inst_11622 = (state_11694[8]);var inst_11650 = cljs.core._EQ_.call(null,inst_11629,inst_11622);var state_11694__$1 = state_11694;if(inst_11650)
{var statearr_11708_11749 = state_11694__$1;(statearr_11708_11749[1] = 14);
} else
{var statearr_11709_11750 = state_11694__$1;(statearr_11709_11750[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11695 === 10))
{var inst_11686 = (state_11694[2]);var state_11694__$1 = (function (){var statearr_11710 = state_11694;(statearr_11710[14] = inst_11686);
return statearr_11710;
})();var statearr_11711_11751 = state_11694__$1;(statearr_11711_11751[2] = null);
(statearr_11711_11751[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11695 === 11))
{var inst_11633 = (state_11694[13]);var inst_11635 = cljs.core.pr_str.call(null,inst_11633);var inst_11636 = growingtree_app.utils.mprint.call(null,"Controls Verbose: ",inst_11635);var state_11694__$1 = state_11694;var statearr_11712_11752 = state_11694__$1;(statearr_11712_11752[2] = inst_11636);
(statearr_11712_11752[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11695 === 12))
{var state_11694__$1 = state_11694;var statearr_11713_11753 = state_11694__$1;(statearr_11713_11753[2] = null);
(statearr_11713_11753[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11695 === 13))
{var inst_11633 = (state_11694[13]);var inst_11639 = (state_11694[2]);var inst_11640 = cljs.core.deref.call(null,state);var inst_11641 = cljs.core.first.call(null,inst_11633);var inst_11642 = cljs.core.last.call(null,inst_11633);var inst_11643 = cljs.core.pr_str.call(null,inst_11641,inst_11642);var inst_11644 = console.log("controls chan event: ",inst_11643);var inst_11645 = cljs.core.partial.call(null,growingtree_app.controllers.controls.control_event,target,inst_11641,inst_11642);var inst_11646 = cljs.core.swap_BANG_.call(null,state,inst_11645);var inst_11647 = cljs.core.deref.call(null,state);var inst_11648 = growingtree_app.controllers.post_controls.post_control_event_BANG_.call(null,target,inst_11641,inst_11642,inst_11640,inst_11647);var state_11694__$1 = (function (){var statearr_11714 = state_11694;(statearr_11714[15] = inst_11639);
(statearr_11714[16] = inst_11644);
(statearr_11714[17] = inst_11646);
return statearr_11714;
})();var statearr_11715_11754 = state_11694__$1;(statearr_11715_11754[2] = inst_11648);
(statearr_11715_11754[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11695 === 14))
{var inst_11627 = (state_11694[10]);var inst_11653 = cljs.core.nth.call(null,inst_11627,0,null);var state_11694__$1 = (function (){var statearr_11716 = state_11694;(statearr_11716[18] = inst_11653);
return statearr_11716;
})();if(cljs.core.truth_(growingtree_app.utils.logging_enabled_QMARK_))
{var statearr_11717_11755 = state_11694__$1;(statearr_11717_11755[1] = 17);
} else
{var statearr_11718_11756 = state_11694__$1;(statearr_11718_11756[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11695 === 15))
{var inst_11629 = (state_11694[11]);var inst_11623 = (state_11694[9]);var inst_11670 = cljs.core._EQ_.call(null,inst_11629,inst_11623);var state_11694__$1 = state_11694;if(inst_11670)
{var statearr_11719_11757 = state_11694__$1;(statearr_11719_11757[1] = 20);
} else
{var statearr_11720_11758 = state_11694__$1;(statearr_11720_11758[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11695 === 16))
{var inst_11684 = (state_11694[2]);var state_11694__$1 = state_11694;var statearr_11721_11759 = state_11694__$1;(statearr_11721_11759[2] = inst_11684);
(statearr_11721_11759[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11695 === 17))
{var inst_11653 = (state_11694[18]);var inst_11655 = cljs.core.pr_str.call(null,inst_11653);var inst_11656 = growingtree_app.utils.mprint.call(null,"API Verbose: ",inst_11655);var state_11694__$1 = state_11694;var statearr_11722_11760 = state_11694__$1;(statearr_11722_11760[2] = inst_11656);
(statearr_11722_11760[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11695 === 18))
{var state_11694__$1 = state_11694;var statearr_11723_11761 = state_11694__$1;(statearr_11723_11761[2] = null);
(statearr_11723_11761[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11695 === 19))
{var inst_11653 = (state_11694[18]);var inst_11659 = (state_11694[2]);var inst_11660 = cljs.core.deref.call(null,state);var inst_11661 = cljs.core.first.call(null,inst_11653);var inst_11662 = cljs.core.last.call(null,inst_11653);var inst_11663 = new cljs.core.Keyword(null,"things-vec","things-vec",905584254).cljs$core$IFn$_invoke$arity$1(inst_11662);var inst_11664 = growingtree_app.core.update_history_BANG_.call(null,history,new cljs.core.Keyword(null,"api","api",1014001036),inst_11653);var inst_11665 = cljs.core.partial.call(null,growingtree_app.controllers.api.api_event,target,inst_11661,inst_11662);var inst_11666 = cljs.core.swap_BANG_.call(null,state,inst_11665);var inst_11667 = cljs.core.deref.call(null,state);var inst_11668 = growingtree_app.controllers.post_api.post_api_event_BANG_.call(null,target,inst_11661,inst_11662,inst_11660,inst_11667);var state_11694__$1 = (function (){var statearr_11724 = state_11694;(statearr_11724[19] = inst_11664);
(statearr_11724[20] = inst_11663);
(statearr_11724[21] = inst_11659);
(statearr_11724[22] = inst_11666);
return statearr_11724;
})();var statearr_11725_11762 = state_11694__$1;(statearr_11725_11762[2] = inst_11668);
(statearr_11725_11762[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11695 === 20))
{var inst_11672 = cljs.core.deref.call(null,history);var inst_11673 = cljs.core.pr_str.call(null,inst_11672);var inst_11674 = growingtree_app.utils.mprint.call(null,inst_11673);var state_11694__$1 = state_11694;var statearr_11726_11763 = state_11694__$1;(statearr_11726_11763[2] = inst_11674);
(statearr_11726_11763[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11695 === 21))
{var inst_11629 = (state_11694[11]);var inst_11676 = cljs.core._EQ_.call(null,inst_11629,new cljs.core.Keyword(null,"default","default",2558708147));var state_11694__$1 = state_11694;if(inst_11676)
{var statearr_11727_11764 = state_11694__$1;(statearr_11727_11764[1] = 23);
} else
{var statearr_11728_11765 = state_11694__$1;(statearr_11728_11765[1] = 24);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11695 === 22))
{var inst_11682 = (state_11694[2]);var state_11694__$1 = state_11694;var statearr_11729_11766 = state_11694__$1;(statearr_11729_11766[2] = inst_11682);
(statearr_11729_11766[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11695 === 23))
{var inst_11628 = (state_11694[12]);var state_11694__$1 = state_11694;var statearr_11730_11767 = state_11694__$1;(statearr_11730_11767[2] = inst_11628);
(statearr_11730_11767[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11695 === 24))
{var state_11694__$1 = state_11694;var statearr_11731_11768 = state_11694__$1;(statearr_11731_11768[2] = null);
(statearr_11731_11768[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11695 === 25))
{var inst_11680 = (state_11694[2]);var state_11694__$1 = state_11694;var statearr_11732_11769 = state_11694__$1;(statearr_11732_11769[2] = inst_11680);
(statearr_11732_11769[1] = 22);
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
var state_machine__6119__auto____0 = (function (){var statearr_11736 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11736[0] = state_machine__6119__auto__);
(statearr_11736[1] = 1);
return statearr_11736;
});
var state_machine__6119__auto____1 = (function (state_11694){while(true){
var ret_value__6120__auto__ = (function (){try{while(true){
var result__6121__auto__ = switch__6118__auto__.call(null,state_11694);if(cljs.core.keyword_identical_QMARK_.call(null,result__6121__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6121__auto__;
}
break;
}
}catch (e11737){if((e11737 instanceof Object))
{var ex__6122__auto__ = e11737;var statearr_11738_11770 = state_11694;(statearr_11738_11770[5] = ex__6122__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11694);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11737;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6120__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11771 = state_11694;
state_11694 = G__11771;
continue;
}
} else
{return ret_value__6120__auto__;
}
break;
}
});
state_machine__6119__auto__ = function(state_11694){
switch(arguments.length){
case 0:
return state_machine__6119__auto____0.call(this);
case 1:
return state_machine__6119__auto____1.call(this,state_11694);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6119__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6119__auto____0;
state_machine__6119__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6119__auto____1;
return state_machine__6119__auto__;
})()
;})(switch__6118__auto__))
})();var state__6190__auto__ = (function (){var statearr_11739 = f__6189__auto__.call(null);(statearr_11739[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6188__auto__);
return statearr_11739;
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
var seq__11776 = cljs.core.seq.call(null,channels);var chunk__11777 = null;var count__11778 = 0;var i__11779 = 0;while(true){
if((i__11779 < count__11778))
{var channel = cljs.core._nth.call(null,chunk__11777,i__11779);growingtree_app.api.kandan.subscribe_BANG_.call(null,kandan_client,[cljs.core.str("/channels/"),cljs.core.str(channel)].join(''),new cljs.core.Keyword(null,"api","api",1014001036).cljs$core$IFn$_invoke$arity$1(comms));
{
var G__11780 = seq__11776;
var G__11781 = chunk__11777;
var G__11782 = count__11778;
var G__11783 = (i__11779 + 1);
seq__11776 = G__11780;
chunk__11777 = G__11781;
count__11778 = G__11782;
i__11779 = G__11783;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__11776);if(temp__4092__auto__)
{var seq__11776__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11776__$1))
{var c__4191__auto__ = cljs.core.chunk_first.call(null,seq__11776__$1);{
var G__11784 = cljs.core.chunk_rest.call(null,seq__11776__$1);
var G__11785 = c__4191__auto__;
var G__11786 = cljs.core.count.call(null,c__4191__auto__);
var G__11787 = 0;
seq__11776 = G__11784;
chunk__11777 = G__11785;
count__11778 = G__11786;
i__11779 = G__11787;
continue;
}
} else
{var channel = cljs.core.first.call(null,seq__11776__$1);growingtree_app.api.kandan.subscribe_BANG_.call(null,kandan_client,[cljs.core.str("/channels/"),cljs.core.str(channel)].join(''),new cljs.core.Keyword(null,"api","api",1014001036).cljs$core$IFn$_invoke$arity$1(comms));
{
var G__11788 = cljs.core.next.call(null,seq__11776__$1);
var G__11789 = null;
var G__11790 = 0;
var G__11791 = 0;
seq__11776 = G__11788;
chunk__11777 = G__11789;
count__11778 = G__11790;
i__11779 = G__11791;
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