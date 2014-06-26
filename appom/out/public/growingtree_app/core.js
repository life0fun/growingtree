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
var c__6188__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6189__auto__ = (function (){var switch__6118__auto__ = (function (state_11706){var state_val_11707 = (state_11706[1]);if((state_val_11707 === 1))
{var state_11706__$1 = state_11706;var statearr_11708_11752 = state_11706__$1;(statearr_11708_11752[2] = null);
(statearr_11708_11752[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11707 === 2))
{var state_11706__$1 = state_11706;if(true)
{var statearr_11709_11753 = state_11706__$1;(statearr_11709_11753[1] = 4);
} else
{var statearr_11710_11754 = state_11706__$1;(statearr_11710_11754[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11707 === 3))
{var inst_11704 = (state_11706[2]);var state_11706__$1 = state_11706;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11706__$1,inst_11704);
} else
{if((state_val_11707 === 4))
{var inst_11633 = (state_11706[7]);var inst_11634 = (state_11706[8]);var inst_11635 = (state_11706[9]);var inst_11633__$1 = new cljs.core.Keyword(null,"controls","controls",4741937704).cljs$core$IFn$_invoke$arity$1(comms);var inst_11634__$1 = new cljs.core.Keyword(null,"api","api",1014001036).cljs$core$IFn$_invoke$arity$1(comms);var inst_11635__$1 = cljs.core.async.timeout.call(null,30000);var inst_11636 = [inst_11633__$1,inst_11634__$1,inst_11635__$1];var inst_11637 = (new cljs.core.PersistentVector(null,3,5,cljs.core.PersistentVector.EMPTY_NODE,inst_11636,null));var state_11706__$1 = (function (){var statearr_11711 = state_11706;(statearr_11711[7] = inst_11633__$1);
(statearr_11711[8] = inst_11634__$1);
(statearr_11711[9] = inst_11635__$1);
return statearr_11711;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_11706__$1,7,inst_11637);
} else
{if((state_val_11707 === 5))
{var state_11706__$1 = state_11706;var statearr_11712_11755 = state_11706__$1;(statearr_11712_11755[2] = null);
(statearr_11712_11755[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11707 === 6))
{var inst_11702 = (state_11706[2]);var state_11706__$1 = state_11706;var statearr_11713_11756 = state_11706__$1;(statearr_11713_11756[2] = inst_11702);
(statearr_11713_11756[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11707 === 7))
{var inst_11639 = (state_11706[10]);var inst_11633 = (state_11706[7]);var inst_11641 = (state_11706[11]);var inst_11639__$1 = (state_11706[2]);var inst_11640 = cljs.core.nth.call(null,inst_11639__$1,0,null);var inst_11641__$1 = cljs.core.nth.call(null,inst_11639__$1,1,null);var inst_11642 = cljs.core._EQ_.call(null,inst_11641__$1,inst_11633);var state_11706__$1 = (function (){var statearr_11714 = state_11706;(statearr_11714[10] = inst_11639__$1);
(statearr_11714[11] = inst_11641__$1);
(statearr_11714[12] = inst_11640);
return statearr_11714;
})();if(inst_11642)
{var statearr_11715_11757 = state_11706__$1;(statearr_11715_11757[1] = 8);
} else
{var statearr_11716_11758 = state_11706__$1;(statearr_11716_11758[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11707 === 8))
{var inst_11639 = (state_11706[10]);var inst_11645 = cljs.core.nth.call(null,inst_11639,0,null);var state_11706__$1 = (function (){var statearr_11717 = state_11706;(statearr_11717[13] = inst_11645);
return statearr_11717;
})();if(cljs.core.truth_(growingtree_app.utils.logging_enabled_QMARK_))
{var statearr_11718_11759 = state_11706__$1;(statearr_11718_11759[1] = 11);
} else
{var statearr_11719_11760 = state_11706__$1;(statearr_11719_11760[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11707 === 9))
{var inst_11641 = (state_11706[11]);var inst_11634 = (state_11706[8]);var inst_11662 = cljs.core._EQ_.call(null,inst_11641,inst_11634);var state_11706__$1 = state_11706;if(inst_11662)
{var statearr_11720_11761 = state_11706__$1;(statearr_11720_11761[1] = 14);
} else
{var statearr_11721_11762 = state_11706__$1;(statearr_11721_11762[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11707 === 10))
{var inst_11698 = (state_11706[2]);var state_11706__$1 = (function (){var statearr_11722 = state_11706;(statearr_11722[14] = inst_11698);
return statearr_11722;
})();var statearr_11723_11763 = state_11706__$1;(statearr_11723_11763[2] = null);
(statearr_11723_11763[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11707 === 11))
{var inst_11645 = (state_11706[13]);var inst_11647 = cljs.core.pr_str.call(null,inst_11645);var inst_11648 = growingtree_app.utils.mprint.call(null,"Controls Verbose: ",inst_11647);var state_11706__$1 = state_11706;var statearr_11724_11764 = state_11706__$1;(statearr_11724_11764[2] = inst_11648);
(statearr_11724_11764[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11707 === 12))
{var state_11706__$1 = state_11706;var statearr_11725_11765 = state_11706__$1;(statearr_11725_11765[2] = null);
(statearr_11725_11765[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11707 === 13))
{var inst_11645 = (state_11706[13]);var inst_11651 = (state_11706[2]);var inst_11652 = cljs.core.deref.call(null,state);var inst_11653 = cljs.core.first.call(null,inst_11645);var inst_11654 = cljs.core.last.call(null,inst_11645);var inst_11655 = cljs.core.pr_str.call(null,inst_11653,inst_11654);var inst_11656 = console.log("controls chan event: ",inst_11655);var inst_11657 = cljs.core.partial.call(null,growingtree_app.controllers.controls.control_event,target,inst_11653,inst_11654);var inst_11658 = cljs.core.swap_BANG_.call(null,state,inst_11657);var inst_11659 = cljs.core.deref.call(null,state);var inst_11660 = growingtree_app.controllers.post_controls.post_control_event_BANG_.call(null,target,inst_11653,inst_11654,inst_11652,inst_11659);var state_11706__$1 = (function (){var statearr_11726 = state_11706;(statearr_11726[15] = inst_11656);
(statearr_11726[16] = inst_11651);
(statearr_11726[17] = inst_11658);
return statearr_11726;
})();var statearr_11727_11766 = state_11706__$1;(statearr_11727_11766[2] = inst_11660);
(statearr_11727_11766[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11707 === 14))
{var inst_11639 = (state_11706[10]);var inst_11665 = cljs.core.nth.call(null,inst_11639,0,null);var state_11706__$1 = (function (){var statearr_11728 = state_11706;(statearr_11728[18] = inst_11665);
return statearr_11728;
})();if(cljs.core.truth_(growingtree_app.utils.logging_enabled_QMARK_))
{var statearr_11729_11767 = state_11706__$1;(statearr_11729_11767[1] = 17);
} else
{var statearr_11730_11768 = state_11706__$1;(statearr_11730_11768[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11707 === 15))
{var inst_11641 = (state_11706[11]);var inst_11635 = (state_11706[9]);var inst_11682 = cljs.core._EQ_.call(null,inst_11641,inst_11635);var state_11706__$1 = state_11706;if(inst_11682)
{var statearr_11731_11769 = state_11706__$1;(statearr_11731_11769[1] = 20);
} else
{var statearr_11732_11770 = state_11706__$1;(statearr_11732_11770[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11707 === 16))
{var inst_11696 = (state_11706[2]);var state_11706__$1 = state_11706;var statearr_11733_11771 = state_11706__$1;(statearr_11733_11771[2] = inst_11696);
(statearr_11733_11771[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11707 === 17))
{var inst_11665 = (state_11706[18]);var inst_11667 = cljs.core.pr_str.call(null,inst_11665);var inst_11668 = growingtree_app.utils.mprint.call(null,"API Verbose: ",inst_11667);var state_11706__$1 = state_11706;var statearr_11734_11772 = state_11706__$1;(statearr_11734_11772[2] = inst_11668);
(statearr_11734_11772[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11707 === 18))
{var state_11706__$1 = state_11706;var statearr_11735_11773 = state_11706__$1;(statearr_11735_11773[2] = null);
(statearr_11735_11773[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11707 === 19))
{var inst_11665 = (state_11706[18]);var inst_11671 = (state_11706[2]);var inst_11672 = cljs.core.deref.call(null,state);var inst_11673 = cljs.core.first.call(null,inst_11665);var inst_11674 = cljs.core.last.call(null,inst_11665);var inst_11675 = new cljs.core.Keyword(null,"things-vec","things-vec",905584254).cljs$core$IFn$_invoke$arity$1(inst_11674);var inst_11676 = growingtree_app.core.update_history_BANG_.call(null,history,new cljs.core.Keyword(null,"api","api",1014001036),inst_11665);var inst_11677 = cljs.core.partial.call(null,growingtree_app.controllers.api.api_event,target,inst_11673,inst_11674);var inst_11678 = cljs.core.swap_BANG_.call(null,state,inst_11677);var inst_11679 = cljs.core.deref.call(null,state);var inst_11680 = growingtree_app.controllers.post_api.post_api_event_BANG_.call(null,target,inst_11673,inst_11674,inst_11672,inst_11679);var state_11706__$1 = (function (){var statearr_11736 = state_11706;(statearr_11736[19] = inst_11671);
(statearr_11736[20] = inst_11676);
(statearr_11736[21] = inst_11678);
(statearr_11736[22] = inst_11675);
return statearr_11736;
})();var statearr_11737_11774 = state_11706__$1;(statearr_11737_11774[2] = inst_11680);
(statearr_11737_11774[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11707 === 20))
{var inst_11684 = cljs.core.deref.call(null,history);var inst_11685 = cljs.core.pr_str.call(null,inst_11684);var inst_11686 = growingtree_app.utils.mprint.call(null,inst_11685);var state_11706__$1 = state_11706;var statearr_11738_11775 = state_11706__$1;(statearr_11738_11775[2] = inst_11686);
(statearr_11738_11775[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11707 === 21))
{var inst_11641 = (state_11706[11]);var inst_11688 = cljs.core._EQ_.call(null,inst_11641,new cljs.core.Keyword(null,"default","default",2558708147));var state_11706__$1 = state_11706;if(inst_11688)
{var statearr_11739_11776 = state_11706__$1;(statearr_11739_11776[1] = 23);
} else
{var statearr_11740_11777 = state_11706__$1;(statearr_11740_11777[1] = 24);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11707 === 22))
{var inst_11694 = (state_11706[2]);var state_11706__$1 = state_11706;var statearr_11741_11778 = state_11706__$1;(statearr_11741_11778[2] = inst_11694);
(statearr_11741_11778[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11707 === 23))
{var inst_11640 = (state_11706[12]);var state_11706__$1 = state_11706;var statearr_11742_11779 = state_11706__$1;(statearr_11742_11779[2] = inst_11640);
(statearr_11742_11779[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11707 === 24))
{var state_11706__$1 = state_11706;var statearr_11743_11780 = state_11706__$1;(statearr_11743_11780[2] = null);
(statearr_11743_11780[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11707 === 25))
{var inst_11692 = (state_11706[2]);var state_11706__$1 = state_11706;var statearr_11744_11781 = state_11706__$1;(statearr_11744_11781[2] = inst_11692);
(statearr_11744_11781[1] = 22);
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
var state_machine__6119__auto____0 = (function (){var statearr_11748 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11748[0] = state_machine__6119__auto__);
(statearr_11748[1] = 1);
return statearr_11748;
});
var state_machine__6119__auto____1 = (function (state_11706){while(true){
var ret_value__6120__auto__ = (function (){try{while(true){
var result__6121__auto__ = switch__6118__auto__.call(null,state_11706);if(cljs.core.keyword_identical_QMARK_.call(null,result__6121__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6121__auto__;
}
break;
}
}catch (e11749){if((e11749 instanceof Object))
{var ex__6122__auto__ = e11749;var statearr_11750_11782 = state_11706;(statearr_11750_11782[5] = ex__6122__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11706);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11749;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6120__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11783 = state_11706;
state_11706 = G__11783;
continue;
}
} else
{return ret_value__6120__auto__;
}
break;
}
});
state_machine__6119__auto__ = function(state_11706){
switch(arguments.length){
case 0:
return state_machine__6119__auto____0.call(this);
case 1:
return state_machine__6119__auto____1.call(this,state_11706);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6119__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6119__auto____0;
state_machine__6119__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6119__auto____1;
return state_machine__6119__auto__;
})()
;})(switch__6118__auto__))
})();var state__6190__auto__ = (function (){var statearr_11751 = f__6189__auto__.call(null);(statearr_11751[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6188__auto__);
return statearr_11751;
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
var seq__11788 = cljs.core.seq.call(null,channels);var chunk__11789 = null;var count__11790 = 0;var i__11791 = 0;while(true){
if((i__11791 < count__11790))
{var channel = cljs.core._nth.call(null,chunk__11789,i__11791);growingtree_app.api.kandan.subscribe_BANG_.call(null,kandan_client,[cljs.core.str("/channels/"),cljs.core.str(channel)].join(''),new cljs.core.Keyword(null,"api","api",1014001036).cljs$core$IFn$_invoke$arity$1(comms));
{
var G__11792 = seq__11788;
var G__11793 = chunk__11789;
var G__11794 = count__11790;
var G__11795 = (i__11791 + 1);
seq__11788 = G__11792;
chunk__11789 = G__11793;
count__11790 = G__11794;
i__11791 = G__11795;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__11788);if(temp__4092__auto__)
{var seq__11788__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11788__$1))
{var c__4191__auto__ = cljs.core.chunk_first.call(null,seq__11788__$1);{
var G__11796 = cljs.core.chunk_rest.call(null,seq__11788__$1);
var G__11797 = c__4191__auto__;
var G__11798 = cljs.core.count.call(null,c__4191__auto__);
var G__11799 = 0;
seq__11788 = G__11796;
chunk__11789 = G__11797;
count__11790 = G__11798;
i__11791 = G__11799;
continue;
}
} else
{var channel = cljs.core.first.call(null,seq__11788__$1);growingtree_app.api.kandan.subscribe_BANG_.call(null,kandan_client,[cljs.core.str("/channels/"),cljs.core.str(channel)].join(''),new cljs.core.Keyword(null,"api","api",1014001036).cljs$core$IFn$_invoke$arity$1(comms));
{
var G__11800 = cljs.core.next.call(null,seq__11788__$1);
var G__11801 = null;
var G__11802 = 0;
var G__11803 = 0;
seq__11788 = G__11800;
chunk__11789 = G__11801;
count__11790 = G__11802;
i__11791 = G__11803;
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