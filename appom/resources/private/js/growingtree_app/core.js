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
var c__6068__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6069__auto__ = (function (){var switch__5998__auto__ = (function (state_11936){var state_val_11937 = (state_11936[1]);if((state_val_11937 === 1))
{var state_11936__$1 = state_11936;var statearr_11938_11982 = state_11936__$1;(statearr_11938_11982[2] = null);
(statearr_11938_11982[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11937 === 2))
{var state_11936__$1 = state_11936;if(true)
{var statearr_11939_11983 = state_11936__$1;(statearr_11939_11983[1] = 4);
} else
{var statearr_11940_11984 = state_11936__$1;(statearr_11940_11984[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11937 === 3))
{var inst_11934 = (state_11936[2]);var state_11936__$1 = state_11936;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11936__$1,inst_11934);
} else
{if((state_val_11937 === 4))
{var inst_11861 = (state_11936[7]);var inst_11860 = (state_11936[8]);var inst_11859 = (state_11936[9]);var inst_11859__$1 = new cljs.core.Keyword(null,"controls","controls",4741937704).cljs$core$IFn$_invoke$arity$1(comms);var inst_11860__$1 = new cljs.core.Keyword(null,"api","api",1014001036).cljs$core$IFn$_invoke$arity$1(comms);var inst_11861__$1 = cljs.core.async.timeout.call(null,30000);var inst_11862 = [inst_11859__$1,inst_11860__$1,inst_11861__$1];var inst_11863 = (new cljs.core.PersistentVector(null,3,5,cljs.core.PersistentVector.EMPTY_NODE,inst_11862,null));var state_11936__$1 = (function (){var statearr_11941 = state_11936;(statearr_11941[7] = inst_11861__$1);
(statearr_11941[8] = inst_11860__$1);
(statearr_11941[9] = inst_11859__$1);
return statearr_11941;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_11936__$1,7,inst_11863);
} else
{if((state_val_11937 === 5))
{var state_11936__$1 = state_11936;var statearr_11942_11985 = state_11936__$1;(statearr_11942_11985[2] = null);
(statearr_11942_11985[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11937 === 6))
{var inst_11932 = (state_11936[2]);var state_11936__$1 = state_11936;var statearr_11943_11986 = state_11936__$1;(statearr_11943_11986[2] = inst_11932);
(statearr_11943_11986[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11937 === 7))
{var inst_11867 = (state_11936[10]);var inst_11859 = (state_11936[9]);var inst_11865 = (state_11936[11]);var inst_11865__$1 = (state_11936[2]);var inst_11866 = cljs.core.nth.call(null,inst_11865__$1,0,null);var inst_11867__$1 = cljs.core.nth.call(null,inst_11865__$1,1,null);var inst_11868 = cljs.core._EQ_.call(null,inst_11867__$1,inst_11859);var state_11936__$1 = (function (){var statearr_11944 = state_11936;(statearr_11944[10] = inst_11867__$1);
(statearr_11944[11] = inst_11865__$1);
(statearr_11944[12] = inst_11866);
return statearr_11944;
})();if(inst_11868)
{var statearr_11945_11987 = state_11936__$1;(statearr_11945_11987[1] = 8);
} else
{var statearr_11946_11988 = state_11936__$1;(statearr_11946_11988[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11937 === 8))
{var inst_11865 = (state_11936[11]);var inst_11871 = cljs.core.nth.call(null,inst_11865,0,null);var inst_11872 = new cljs.core.Keyword(null,"log-channels?","log-channels?",1640598168).cljs$core$IFn$_invoke$arity$1(growingtree_app.utils.initial_player_state);var state_11936__$1 = (function (){var statearr_11947 = state_11936;(statearr_11947[13] = inst_11871);
return statearr_11947;
})();if(cljs.core.truth_(inst_11872))
{var statearr_11948_11989 = state_11936__$1;(statearr_11948_11989[1] = 11);
} else
{var statearr_11949_11990 = state_11936__$1;(statearr_11949_11990[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11937 === 9))
{var inst_11867 = (state_11936[10]);var inst_11860 = (state_11936[8]);var inst_11890 = cljs.core._EQ_.call(null,inst_11867,inst_11860);var state_11936__$1 = state_11936;if(inst_11890)
{var statearr_11950_11991 = state_11936__$1;(statearr_11950_11991[1] = 14);
} else
{var statearr_11951_11992 = state_11936__$1;(statearr_11951_11992[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11937 === 10))
{var inst_11928 = (state_11936[2]);var state_11936__$1 = (function (){var statearr_11952 = state_11936;(statearr_11952[14] = inst_11928);
return statearr_11952;
})();var statearr_11953_11993 = state_11936__$1;(statearr_11953_11993[2] = null);
(statearr_11953_11993[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11937 === 11))
{var inst_11871 = (state_11936[13]);var inst_11874 = cljs.core.pr_str.call(null,inst_11871);var inst_11875 = growingtree_app.utils.mprint.call(null,"Controls Verbose: ",inst_11874);var state_11936__$1 = state_11936;var statearr_11954_11994 = state_11936__$1;(statearr_11954_11994[2] = inst_11875);
(statearr_11954_11994[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11937 === 12))
{var state_11936__$1 = state_11936;var statearr_11955_11995 = state_11936__$1;(statearr_11955_11995[2] = null);
(statearr_11955_11995[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11937 === 13))
{var inst_11871 = (state_11936[13]);var inst_11878 = (state_11936[2]);var inst_11879 = cljs.core.deref.call(null,state);var inst_11880 = growingtree_app.core.update_history_BANG_.call(null,history,new cljs.core.Keyword(null,"controls","controls",4741937704),inst_11871);var inst_11881 = cljs.core.first.call(null,inst_11871);var inst_11882 = cljs.core.second.call(null,inst_11871);var inst_11883 = cljs.core.partial.call(null,growingtree_app.controllers.controls.control_event,target,inst_11881,inst_11882);var inst_11884 = cljs.core.swap_BANG_.call(null,state,inst_11883);var inst_11885 = cljs.core.first.call(null,inst_11871);var inst_11886 = cljs.core.second.call(null,inst_11871);var inst_11887 = cljs.core.deref.call(null,state);var inst_11888 = growingtree_app.controllers.post_controls.post_control_event_BANG_.call(null,target,inst_11885,inst_11886,inst_11879,inst_11887);var state_11936__$1 = (function (){var statearr_11956 = state_11936;(statearr_11956[15] = inst_11878);
(statearr_11956[16] = inst_11884);
(statearr_11956[17] = inst_11880);
return statearr_11956;
})();var statearr_11957_11996 = state_11936__$1;(statearr_11957_11996[2] = inst_11888);
(statearr_11957_11996[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11937 === 14))
{var inst_11865 = (state_11936[11]);var inst_11893 = cljs.core.nth.call(null,inst_11865,0,null);var inst_11894 = new cljs.core.Keyword(null,"log-channels?","log-channels?",1640598168).cljs$core$IFn$_invoke$arity$1(growingtree_app.utils.initial_player_state);var state_11936__$1 = (function (){var statearr_11958 = state_11936;(statearr_11958[18] = inst_11893);
return statearr_11958;
})();if(cljs.core.truth_(inst_11894))
{var statearr_11959_11997 = state_11936__$1;(statearr_11959_11997[1] = 17);
} else
{var statearr_11960_11998 = state_11936__$1;(statearr_11960_11998[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11937 === 15))
{var inst_11867 = (state_11936[10]);var inst_11861 = (state_11936[7]);var inst_11912 = cljs.core._EQ_.call(null,inst_11867,inst_11861);var state_11936__$1 = state_11936;if(inst_11912)
{var statearr_11961_11999 = state_11936__$1;(statearr_11961_11999[1] = 20);
} else
{var statearr_11962_12000 = state_11936__$1;(statearr_11962_12000[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11937 === 16))
{var inst_11926 = (state_11936[2]);var state_11936__$1 = state_11936;var statearr_11963_12001 = state_11936__$1;(statearr_11963_12001[2] = inst_11926);
(statearr_11963_12001[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11937 === 17))
{var inst_11893 = (state_11936[18]);var inst_11896 = cljs.core.pr_str.call(null,inst_11893);var inst_11897 = growingtree_app.utils.mprint.call(null,"API Verbose: ",inst_11896);var state_11936__$1 = state_11936;var statearr_11964_12002 = state_11936__$1;(statearr_11964_12002[2] = inst_11897);
(statearr_11964_12002[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11937 === 18))
{var state_11936__$1 = state_11936;var statearr_11965_12003 = state_11936__$1;(statearr_11965_12003[2] = null);
(statearr_11965_12003[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11937 === 19))
{var inst_11893 = (state_11936[18]);var inst_11900 = (state_11936[2]);var inst_11901 = cljs.core.deref.call(null,state);var inst_11902 = growingtree_app.core.update_history_BANG_.call(null,history,new cljs.core.Keyword(null,"api","api",1014001036),inst_11893);var inst_11903 = cljs.core.first.call(null,inst_11893);var inst_11904 = cljs.core.second.call(null,inst_11893);var inst_11905 = cljs.core.partial.call(null,growingtree_app.controllers.api.api_event,target,inst_11903,inst_11904);var inst_11906 = cljs.core.swap_BANG_.call(null,state,inst_11905);var inst_11907 = cljs.core.first.call(null,inst_11893);var inst_11908 = cljs.core.second.call(null,inst_11893);var inst_11909 = cljs.core.deref.call(null,state);var inst_11910 = growingtree_app.controllers.post_api.post_api_event_BANG_.call(null,target,inst_11907,inst_11908,inst_11901,inst_11909);var state_11936__$1 = (function (){var statearr_11966 = state_11936;(statearr_11966[19] = inst_11900);
(statearr_11966[20] = inst_11902);
(statearr_11966[21] = inst_11906);
return statearr_11966;
})();var statearr_11967_12004 = state_11936__$1;(statearr_11967_12004[2] = inst_11910);
(statearr_11967_12004[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11937 === 20))
{var inst_11914 = cljs.core.deref.call(null,history);var inst_11915 = cljs.core.pr_str.call(null,inst_11914);var inst_11916 = growingtree_app.utils.mprint.call(null,inst_11915);var state_11936__$1 = state_11936;var statearr_11968_12005 = state_11936__$1;(statearr_11968_12005[2] = inst_11916);
(statearr_11968_12005[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11937 === 21))
{var inst_11867 = (state_11936[10]);var inst_11918 = cljs.core._EQ_.call(null,inst_11867,new cljs.core.Keyword(null,"default","default",2558708147));var state_11936__$1 = state_11936;if(inst_11918)
{var statearr_11969_12006 = state_11936__$1;(statearr_11969_12006[1] = 23);
} else
{var statearr_11970_12007 = state_11936__$1;(statearr_11970_12007[1] = 24);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11937 === 22))
{var inst_11924 = (state_11936[2]);var state_11936__$1 = state_11936;var statearr_11971_12008 = state_11936__$1;(statearr_11971_12008[2] = inst_11924);
(statearr_11971_12008[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11937 === 23))
{var inst_11866 = (state_11936[12]);var state_11936__$1 = state_11936;var statearr_11972_12009 = state_11936__$1;(statearr_11972_12009[2] = inst_11866);
(statearr_11972_12009[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11937 === 24))
{var state_11936__$1 = state_11936;var statearr_11973_12010 = state_11936__$1;(statearr_11973_12010[2] = null);
(statearr_11973_12010[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11937 === 25))
{var inst_11922 = (state_11936[2]);var state_11936__$1 = state_11936;var statearr_11974_12011 = state_11936__$1;(statearr_11974_12011[2] = inst_11922);
(statearr_11974_12011[1] = 22);
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
});return ((function (switch__5998__auto__){
return (function() {
var state_machine__5999__auto__ = null;
var state_machine__5999__auto____0 = (function (){var statearr_11978 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11978[0] = state_machine__5999__auto__);
(statearr_11978[1] = 1);
return statearr_11978;
});
var state_machine__5999__auto____1 = (function (state_11936){while(true){
var ret_value__6000__auto__ = (function (){try{while(true){
var result__6001__auto__ = switch__5998__auto__.call(null,state_11936);if(cljs.core.keyword_identical_QMARK_.call(null,result__6001__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6001__auto__;
}
break;
}
}catch (e11979){if((e11979 instanceof Object))
{var ex__6002__auto__ = e11979;var statearr_11980_12012 = state_11936;(statearr_11980_12012[5] = ex__6002__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11936);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11979;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6000__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12013 = state_11936;
state_11936 = G__12013;
continue;
}
} else
{return ret_value__6000__auto__;
}
break;
}
});
state_machine__5999__auto__ = function(state_11936){
switch(arguments.length){
case 0:
return state_machine__5999__auto____0.call(this);
case 1:
return state_machine__5999__auto____1.call(this,state_11936);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5999__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5999__auto____0;
state_machine__5999__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5999__auto____1;
return state_machine__5999__auto__;
})()
;})(switch__5998__auto__))
})();var state__6070__auto__ = (function (){var statearr_11981 = f__6069__auto__.call(null);(statearr_11981[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6068__auto__);
return statearr_11981;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6070__auto__);
}));
return c__6068__auto__;
});
growingtree_app.core.setup_BANG_ = (function setup_BANG_(){var comms = new cljs.core.Keyword(null,"comms","comms",1108747865).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,growingtree_app.core.app_state));growingtree_app.core.main.call(null,document.getElementById("app"),growingtree_app.core.app_state);
if(cljs.core.truth_(new cljs.core.Keyword(null,"restore-state?","restore-state?",3703635295).cljs$core$IFn$_invoke$arity$1(growingtree_app.utils.initial_query_map)))
{cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"controls","controls",4741937704).cljs$core$IFn$_invoke$arity$1(comms),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-restored","state-restored",2236662980)], null));
} else
{}
if(cljs.core.truth_(new cljs.core.Keyword(null,"kandan-client?","kandan-client?",915311154).cljs$core$IFn$_invoke$arity$1(growingtree_app.utils.initial_query_map)))
{var api_key = new cljs.core.Keyword(null,"kandan-api-key","kandan-api-key",3548116106).cljs$core$IFn$_invoke$arity$1(growingtree_app.utils.initial_query_map);var kandan_client = growingtree_app.api.kandan.make_client.call(null,api_key,"http://localhost:3000/remote/faye");var channels = new cljs.core.Keyword(null,"kandan-channels","kandan-channels",2776703958).cljs$core$IFn$_invoke$arity$1(growingtree_app.utils.initial_query_map);cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"controls","controls",4741937704).cljs$core$IFn$_invoke$arity$1(comms),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"api-key-updated","api-key-updated",756464524),api_key], null));
var seq__12018 = cljs.core.seq.call(null,channels);var chunk__12019 = null;var count__12020 = 0;var i__12021 = 0;while(true){
if((i__12021 < count__12020))
{var channel = cljs.core._nth.call(null,chunk__12019,i__12021);growingtree_app.api.kandan.subscribe_BANG_.call(null,kandan_client,[cljs.core.str("/channels/"),cljs.core.str(channel)].join(''),new cljs.core.Keyword(null,"api","api",1014001036).cljs$core$IFn$_invoke$arity$1(comms));
{
var G__12022 = seq__12018;
var G__12023 = chunk__12019;
var G__12024 = count__12020;
var G__12025 = (i__12021 + 1);
seq__12018 = G__12022;
chunk__12019 = G__12023;
count__12020 = G__12024;
i__12021 = G__12025;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__12018);if(temp__4092__auto__)
{var seq__12018__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12018__$1))
{var c__4191__auto__ = cljs.core.chunk_first.call(null,seq__12018__$1);{
var G__12026 = cljs.core.chunk_rest.call(null,seq__12018__$1);
var G__12027 = c__4191__auto__;
var G__12028 = cljs.core.count.call(null,c__4191__auto__);
var G__12029 = 0;
seq__12018 = G__12026;
chunk__12019 = G__12027;
count__12020 = G__12028;
i__12021 = G__12029;
continue;
}
} else
{var channel = cljs.core.first.call(null,seq__12018__$1);growingtree_app.api.kandan.subscribe_BANG_.call(null,kandan_client,[cljs.core.str("/channels/"),cljs.core.str(channel)].join(''),new cljs.core.Keyword(null,"api","api",1014001036).cljs$core$IFn$_invoke$arity$1(comms));
{
var G__12030 = cljs.core.next.call(null,seq__12018__$1);
var G__12031 = null;
var G__12032 = 0;
var G__12033 = 0;
seq__12018 = G__12030;
chunk__12019 = G__12031;
count__12020 = G__12032;
i__12021 = G__12033;
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
