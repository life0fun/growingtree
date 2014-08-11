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
var c__6188__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6189__auto__ = (function (){var switch__6118__auto__ = (function (state_11828){var state_val_11829 = (state_11828[1]);if((state_val_11829 === 32))
{var inst_11741 = (state_11828[7]);var state_11828__$1 = state_11828;var statearr_11830_11888 = state_11828__$1;(statearr_11830_11888[2] = inst_11741);
(statearr_11830_11888[1] = 34);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11829 === 1))
{var state_11828__$1 = state_11828;var statearr_11831_11889 = state_11828__$1;(statearr_11831_11889[2] = null);
(statearr_11831_11889[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11829 === 33))
{var state_11828__$1 = state_11828;var statearr_11832_11890 = state_11828__$1;(statearr_11832_11890[2] = null);
(statearr_11832_11890[1] = 34);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11829 === 2))
{var state_11828__$1 = state_11828;if(true)
{var statearr_11833_11891 = state_11828__$1;(statearr_11833_11891[1] = 4);
} else
{var statearr_11834_11892 = state_11828__$1;(statearr_11834_11892[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11829 === 34))
{var inst_11814 = (state_11828[2]);var state_11828__$1 = state_11828;var statearr_11835_11893 = state_11828__$1;(statearr_11835_11893[2] = inst_11814);
(statearr_11835_11893[1] = 31);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11829 === 3))
{var inst_11826 = (state_11828[2]);var state_11828__$1 = state_11828;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11828__$1,inst_11826);
} else
{if((state_val_11829 === 4))
{var inst_11734 = (state_11828[8]);var inst_11736 = (state_11828[9]);var inst_11735 = (state_11828[10]);var inst_11734__$1 = new cljs.core.Keyword(null,"controls","controls",4741937704).cljs$core$IFn$_invoke$arity$1(comms);var inst_11735__$1 = new cljs.core.Keyword(null,"api","api",1014001036).cljs$core$IFn$_invoke$arity$1(comms);var inst_11736__$1 = cljs.core.async.timeout.call(null,30000);var inst_11737 = [inst_11734__$1,inst_11735__$1,inst_11736__$1];var inst_11738 = (new cljs.core.PersistentVector(null,3,5,cljs.core.PersistentVector.EMPTY_NODE,inst_11737,null));var state_11828__$1 = (function (){var statearr_11836 = state_11828;(statearr_11836[8] = inst_11734__$1);
(statearr_11836[9] = inst_11736__$1);
(statearr_11836[10] = inst_11735__$1);
return statearr_11836;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_11828__$1,7,inst_11738);
} else
{if((state_val_11829 === 5))
{var state_11828__$1 = state_11828;var statearr_11837_11894 = state_11828__$1;(statearr_11837_11894[2] = null);
(statearr_11837_11894[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11829 === 6))
{var inst_11824 = (state_11828[2]);var state_11828__$1 = state_11828;var statearr_11838_11895 = state_11828__$1;(statearr_11838_11895[2] = inst_11824);
(statearr_11838_11895[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11829 === 7))
{var inst_11740 = (state_11828[11]);var inst_11734 = (state_11828[8]);var inst_11742 = (state_11828[12]);var inst_11740__$1 = (state_11828[2]);var inst_11741 = cljs.core.nth.call(null,inst_11740__$1,0,null);var inst_11742__$1 = cljs.core.nth.call(null,inst_11740__$1,1,null);var inst_11743 = cljs.core._EQ_.call(null,inst_11742__$1,inst_11734);var state_11828__$1 = (function (){var statearr_11839 = state_11828;(statearr_11839[7] = inst_11741);
(statearr_11839[11] = inst_11740__$1);
(statearr_11839[12] = inst_11742__$1);
return statearr_11839;
})();if(inst_11743)
{var statearr_11840_11896 = state_11828__$1;(statearr_11840_11896[1] = 8);
} else
{var statearr_11841_11897 = state_11828__$1;(statearr_11841_11897[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11829 === 8))
{var inst_11740 = (state_11828[11]);var inst_11746 = cljs.core.nth.call(null,inst_11740,0,null);var state_11828__$1 = (function (){var statearr_11842 = state_11828;(statearr_11842[13] = inst_11746);
return statearr_11842;
})();if(cljs.core.truth_(growingtree_app.utils.logging_enabled_QMARK_))
{var statearr_11843_11898 = state_11828__$1;(statearr_11843_11898[1] = 11);
} else
{var statearr_11844_11899 = state_11828__$1;(statearr_11844_11899[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11829 === 9))
{var inst_11735 = (state_11828[10]);var inst_11742 = (state_11828[12]);var inst_11782 = cljs.core._EQ_.call(null,inst_11742,inst_11735);var state_11828__$1 = state_11828;if(inst_11782)
{var statearr_11845_11900 = state_11828__$1;(statearr_11845_11900[1] = 23);
} else
{var statearr_11846_11901 = state_11828__$1;(statearr_11846_11901[1] = 24);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11829 === 10))
{var inst_11820 = (state_11828[2]);var state_11828__$1 = (function (){var statearr_11847 = state_11828;(statearr_11847[14] = inst_11820);
return statearr_11847;
})();var statearr_11848_11902 = state_11828__$1;(statearr_11848_11902[2] = null);
(statearr_11848_11902[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11829 === 11))
{var inst_11746 = (state_11828[13]);var inst_11748 = cljs.core.pr_str.call(null,inst_11746);var inst_11749 = growingtree_app.utils.mprint.call(null,"Controls Verbose: ",inst_11748);var state_11828__$1 = state_11828;var statearr_11849_11903 = state_11828__$1;(statearr_11849_11903[2] = inst_11749);
(statearr_11849_11903[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11829 === 12))
{var state_11828__$1 = state_11828;var statearr_11850_11904 = state_11828__$1;(statearr_11850_11904[2] = null);
(statearr_11850_11904[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11829 === 13))
{var inst_11746 = (state_11828[13]);var inst_11754 = (state_11828[15]);var inst_11752 = (state_11828[2]);var inst_11753 = cljs.core.deref.call(null,state);var inst_11754__$1 = cljs.core.first.call(null,inst_11746);var inst_11755 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"refresh","refresh",2099349069),inst_11754__$1);var state_11828__$1 = (function (){var statearr_11851 = state_11828;(statearr_11851[16] = inst_11753);
(statearr_11851[15] = inst_11754__$1);
(statearr_11851[17] = inst_11752);
return statearr_11851;
})();if(inst_11755)
{var statearr_11852_11905 = state_11828__$1;(statearr_11852_11905[1] = 14);
} else
{var statearr_11853_11906 = state_11828__$1;(statearr_11853_11906[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11829 === 14))
{var inst_11746 = (state_11828[13]);var inst_11757 = cljs.core.last.call(null,inst_11746);var inst_11758 = cljs.core.deref.call(null,inst_11757);var state_11828__$1 = state_11828;var statearr_11854_11907 = state_11828__$1;(statearr_11854_11907[2] = inst_11758);
(statearr_11854_11907[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11829 === 15))
{var state_11828__$1 = state_11828;if(new cljs.core.Keyword(null,"else","else",1017020587))
{var statearr_11855_11908 = state_11828__$1;(statearr_11855_11908[1] = 17);
} else
{var statearr_11856_11909 = state_11828__$1;(statearr_11856_11909[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11829 === 16))
{var inst_11754 = (state_11828[15]);var inst_11766 = (state_11828[2]);var inst_11767 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"refresh","refresh",2099349069),inst_11754);var state_11828__$1 = (function (){var statearr_11857 = state_11828;(statearr_11857[18] = inst_11766);
return statearr_11857;
})();if(inst_11767)
{var statearr_11858_11910 = state_11828__$1;(statearr_11858_11910[1] = 20);
} else
{var statearr_11859_11911 = state_11828__$1;(statearr_11859_11911[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11829 === 17))
{var inst_11746 = (state_11828[13]);var inst_11761 = cljs.core.last.call(null,inst_11746);var state_11828__$1 = state_11828;var statearr_11860_11912 = state_11828__$1;(statearr_11860_11912[2] = inst_11761);
(statearr_11860_11912[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11829 === 18))
{var state_11828__$1 = state_11828;var statearr_11861_11913 = state_11828__$1;(statearr_11861_11913[2] = null);
(statearr_11861_11913[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11829 === 19))
{var inst_11764 = (state_11828[2]);var state_11828__$1 = state_11828;var statearr_11862_11914 = state_11828__$1;(statearr_11862_11914[2] = inst_11764);
(statearr_11862_11914[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11829 === 20))
{var inst_11766 = (state_11828[18]);var inst_11769 = [new cljs.core.Keyword(null,"body","body",1016933652),0];var inst_11770 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_11769,null));var inst_11771 = cljs.core.get_in.call(null,inst_11766,inst_11770);var state_11828__$1 = state_11828;var statearr_11863_11915 = state_11828__$1;(statearr_11863_11915[2] = inst_11771);
(statearr_11863_11915[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11829 === 21))
{var inst_11754 = (state_11828[15]);var state_11828__$1 = state_11828;var statearr_11864_11916 = state_11828__$1;(statearr_11864_11916[2] = inst_11754);
(statearr_11864_11916[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11829 === 22))
{var inst_11766 = (state_11828[18]);var inst_11753 = (state_11828[16]);var inst_11774 = (state_11828[2]);var inst_11775 = cljs.core.pr_str.call(null,"controls chan event: ",inst_11774,inst_11766);var inst_11776 = console.log(inst_11775);var inst_11777 = cljs.core.partial.call(null,growingtree_app.controllers.controls.control_event,target,inst_11774,inst_11766);var inst_11778 = cljs.core.swap_BANG_.call(null,state,inst_11777);var inst_11779 = cljs.core.deref.call(null,state);var inst_11780 = growingtree_app.controllers.post_controls.post_control_event_BANG_.call(null,target,inst_11774,inst_11766,inst_11753,inst_11779);var state_11828__$1 = (function (){var statearr_11865 = state_11828;(statearr_11865[19] = inst_11776);
(statearr_11865[20] = inst_11778);
return statearr_11865;
})();var statearr_11866_11917 = state_11828__$1;(statearr_11866_11917[2] = inst_11780);
(statearr_11866_11917[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11829 === 23))
{var inst_11740 = (state_11828[11]);var inst_11785 = cljs.core.nth.call(null,inst_11740,0,null);var state_11828__$1 = (function (){var statearr_11867 = state_11828;(statearr_11867[21] = inst_11785);
return statearr_11867;
})();if(cljs.core.truth_(growingtree_app.utils.logging_enabled_QMARK_))
{var statearr_11868_11918 = state_11828__$1;(statearr_11868_11918[1] = 26);
} else
{var statearr_11869_11919 = state_11828__$1;(statearr_11869_11919[1] = 27);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11829 === 24))
{var inst_11736 = (state_11828[9]);var inst_11742 = (state_11828[12]);var inst_11804 = cljs.core._EQ_.call(null,inst_11742,inst_11736);var state_11828__$1 = state_11828;if(inst_11804)
{var statearr_11870_11920 = state_11828__$1;(statearr_11870_11920[1] = 29);
} else
{var statearr_11871_11921 = state_11828__$1;(statearr_11871_11921[1] = 30);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11829 === 25))
{var inst_11818 = (state_11828[2]);var state_11828__$1 = state_11828;var statearr_11872_11922 = state_11828__$1;(statearr_11872_11922[2] = inst_11818);
(statearr_11872_11922[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11829 === 26))
{var inst_11785 = (state_11828[21]);var inst_11787 = cljs.core.pr_str.call(null,inst_11785);var inst_11788 = growingtree_app.utils.mprint.call(null,"API Verbose: ",inst_11787);var state_11828__$1 = state_11828;var statearr_11873_11923 = state_11828__$1;(statearr_11873_11923[2] = inst_11788);
(statearr_11873_11923[1] = 28);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11829 === 27))
{var state_11828__$1 = state_11828;var statearr_11874_11924 = state_11828__$1;(statearr_11874_11924[2] = null);
(statearr_11874_11924[1] = 28);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11829 === 28))
{var inst_11785 = (state_11828[21]);var inst_11791 = (state_11828[2]);var inst_11792 = cljs.core.deref.call(null,state);var inst_11793 = cljs.core.first.call(null,inst_11785);var inst_11794 = cljs.core.last.call(null,inst_11785);var inst_11795 = new cljs.core.Keyword(null,"things-vec","things-vec",905584254).cljs$core$IFn$_invoke$arity$1(inst_11794);var inst_11796 = cljs.core.pr_str.call(null,"api chan event : type ",inst_11793," data ",inst_11794);var inst_11797 = console.log(inst_11796);var inst_11798 = growingtree_app.core.update_history_BANG_.call(null,history,new cljs.core.Keyword(null,"api","api",1014001036),inst_11785);var inst_11799 = cljs.core.partial.call(null,growingtree_app.controllers.api.api_event,target,inst_11793,inst_11794);var inst_11800 = cljs.core.swap_BANG_.call(null,state,inst_11799);var inst_11801 = cljs.core.deref.call(null,state);var inst_11802 = growingtree_app.controllers.post_api.post_api_event_BANG_.call(null,target,inst_11793,inst_11794,inst_11792,inst_11801);var state_11828__$1 = (function (){var statearr_11875 = state_11828;(statearr_11875[22] = inst_11800);
(statearr_11875[23] = inst_11791);
(statearr_11875[24] = inst_11797);
(statearr_11875[25] = inst_11798);
(statearr_11875[26] = inst_11795);
return statearr_11875;
})();var statearr_11876_11925 = state_11828__$1;(statearr_11876_11925[2] = inst_11802);
(statearr_11876_11925[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11829 === 29))
{var inst_11806 = cljs.core.deref.call(null,history);var inst_11807 = cljs.core.pr_str.call(null,inst_11806);var inst_11808 = growingtree_app.utils.mprint.call(null,inst_11807);var state_11828__$1 = state_11828;var statearr_11877_11926 = state_11828__$1;(statearr_11877_11926[2] = inst_11808);
(statearr_11877_11926[1] = 31);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11829 === 30))
{var inst_11742 = (state_11828[12]);var inst_11810 = cljs.core._EQ_.call(null,inst_11742,new cljs.core.Keyword(null,"default","default",2558708147));var state_11828__$1 = state_11828;if(inst_11810)
{var statearr_11878_11927 = state_11828__$1;(statearr_11878_11927[1] = 32);
} else
{var statearr_11879_11928 = state_11828__$1;(statearr_11879_11928[1] = 33);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11829 === 31))
{var inst_11816 = (state_11828[2]);var state_11828__$1 = state_11828;var statearr_11880_11929 = state_11828__$1;(statearr_11880_11929[2] = inst_11816);
(statearr_11880_11929[1] = 25);
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
var state_machine__6119__auto____0 = (function (){var statearr_11884 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11884[0] = state_machine__6119__auto__);
(statearr_11884[1] = 1);
return statearr_11884;
});
var state_machine__6119__auto____1 = (function (state_11828){while(true){
var ret_value__6120__auto__ = (function (){try{while(true){
var result__6121__auto__ = switch__6118__auto__.call(null,state_11828);if(cljs.core.keyword_identical_QMARK_.call(null,result__6121__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6121__auto__;
}
break;
}
}catch (e11885){if((e11885 instanceof Object))
{var ex__6122__auto__ = e11885;var statearr_11886_11930 = state_11828;(statearr_11886_11930[5] = ex__6122__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11828);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11885;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6120__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11931 = state_11828;
state_11828 = G__11931;
continue;
}
} else
{return ret_value__6120__auto__;
}
break;
}
});
state_machine__6119__auto__ = function(state_11828){
switch(arguments.length){
case 0:
return state_machine__6119__auto____0.call(this);
case 1:
return state_machine__6119__auto____1.call(this,state_11828);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6119__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6119__auto____0;
state_machine__6119__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6119__auto____1;
return state_machine__6119__auto__;
})()
;})(switch__6118__auto__))
})();var state__6190__auto__ = (function (){var statearr_11887 = f__6189__auto__.call(null);(statearr_11887[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6188__auto__);
return statearr_11887;
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
var seq__11936 = cljs.core.seq.call(null,channels);var chunk__11937 = null;var count__11938 = 0;var i__11939 = 0;while(true){
if((i__11939 < count__11938))
{var channel = cljs.core._nth.call(null,chunk__11937,i__11939);growingtree_app.api.kandan.subscribe_BANG_.call(null,kandan_client,[cljs.core.str("/channels/"),cljs.core.str(channel)].join(''),new cljs.core.Keyword(null,"api","api",1014001036).cljs$core$IFn$_invoke$arity$1(comms));
{
var G__11940 = seq__11936;
var G__11941 = chunk__11937;
var G__11942 = count__11938;
var G__11943 = (i__11939 + 1);
seq__11936 = G__11940;
chunk__11937 = G__11941;
count__11938 = G__11942;
i__11939 = G__11943;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__11936);if(temp__4092__auto__)
{var seq__11936__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11936__$1))
{var c__4191__auto__ = cljs.core.chunk_first.call(null,seq__11936__$1);{
var G__11944 = cljs.core.chunk_rest.call(null,seq__11936__$1);
var G__11945 = c__4191__auto__;
var G__11946 = cljs.core.count.call(null,c__4191__auto__);
var G__11947 = 0;
seq__11936 = G__11944;
chunk__11937 = G__11945;
count__11938 = G__11946;
i__11939 = G__11947;
continue;
}
} else
{var channel = cljs.core.first.call(null,seq__11936__$1);growingtree_app.api.kandan.subscribe_BANG_.call(null,kandan_client,[cljs.core.str("/channels/"),cljs.core.str(channel)].join(''),new cljs.core.Keyword(null,"api","api",1014001036).cljs$core$IFn$_invoke$arity$1(comms));
{
var G__11948 = cljs.core.next.call(null,seq__11936__$1);
var G__11949 = null;
var G__11950 = 0;
var G__11951 = 0;
seq__11936 = G__11948;
chunk__11937 = G__11949;
count__11938 = G__11950;
i__11939 = G__11951;
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