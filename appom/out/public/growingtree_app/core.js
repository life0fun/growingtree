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
var c__6188__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6189__auto__ = (function (){var switch__6118__auto__ = (function (state_12015){var state_val_12016 = (state_12015[1]);if((state_val_12016 === 1))
{var state_12015__$1 = state_12015;var statearr_12017_12061 = state_12015__$1;(statearr_12017_12061[2] = null);
(statearr_12017_12061[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12016 === 2))
{var state_12015__$1 = state_12015;if(true)
{var statearr_12018_12062 = state_12015__$1;(statearr_12018_12062[1] = 4);
} else
{var statearr_12019_12063 = state_12015__$1;(statearr_12019_12063[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12016 === 3))
{var inst_12013 = (state_12015[2]);var state_12015__$1 = state_12015;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12015__$1,inst_12013);
} else
{if((state_val_12016 === 4))
{var inst_11944 = (state_12015[7]);var inst_11942 = (state_12015[8]);var inst_11943 = (state_12015[9]);var inst_11942__$1 = new cljs.core.Keyword(null,"controls","controls",4741937704).cljs$core$IFn$_invoke$arity$1(comms);var inst_11943__$1 = new cljs.core.Keyword(null,"api","api",1014001036).cljs$core$IFn$_invoke$arity$1(comms);var inst_11944__$1 = cljs.core.async.timeout.call(null,30000);var inst_11945 = [inst_11942__$1,inst_11943__$1,inst_11944__$1];var inst_11946 = (new cljs.core.PersistentVector(null,3,5,cljs.core.PersistentVector.EMPTY_NODE,inst_11945,null));var state_12015__$1 = (function (){var statearr_12020 = state_12015;(statearr_12020[7] = inst_11944__$1);
(statearr_12020[8] = inst_11942__$1);
(statearr_12020[9] = inst_11943__$1);
return statearr_12020;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_12015__$1,7,inst_11946);
} else
{if((state_val_12016 === 5))
{var state_12015__$1 = state_12015;var statearr_12021_12064 = state_12015__$1;(statearr_12021_12064[2] = null);
(statearr_12021_12064[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12016 === 6))
{var inst_12011 = (state_12015[2]);var state_12015__$1 = state_12015;var statearr_12022_12065 = state_12015__$1;(statearr_12022_12065[2] = inst_12011);
(statearr_12022_12065[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12016 === 7))
{var inst_11948 = (state_12015[10]);var inst_11950 = (state_12015[11]);var inst_11942 = (state_12015[8]);var inst_11948__$1 = (state_12015[2]);var inst_11949 = cljs.core.nth.call(null,inst_11948__$1,0,null);var inst_11950__$1 = cljs.core.nth.call(null,inst_11948__$1,1,null);var inst_11951 = cljs.core._EQ_.call(null,inst_11950__$1,inst_11942);var state_12015__$1 = (function (){var statearr_12023 = state_12015;(statearr_12023[10] = inst_11948__$1);
(statearr_12023[12] = inst_11949);
(statearr_12023[11] = inst_11950__$1);
return statearr_12023;
})();if(inst_11951)
{var statearr_12024_12066 = state_12015__$1;(statearr_12024_12066[1] = 8);
} else
{var statearr_12025_12067 = state_12015__$1;(statearr_12025_12067[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12016 === 8))
{var inst_11948 = (state_12015[10]);var inst_11954 = (state_12015[13]);var inst_11954__$1 = cljs.core.nth.call(null,inst_11948,0,null);var inst_11955 = cljs.core.pr_str.call(null,inst_11954__$1);var inst_11956 = cljs.core.print.call(null,"controls chan event: ",inst_11955);var state_12015__$1 = (function (){var statearr_12026 = state_12015;(statearr_12026[14] = inst_11956);
(statearr_12026[13] = inst_11954__$1);
return statearr_12026;
})();if(cljs.core.truth_(growingtree_app.utils.logging_enabled_QMARK_))
{var statearr_12027_12068 = state_12015__$1;(statearr_12027_12068[1] = 11);
} else
{var statearr_12028_12069 = state_12015__$1;(statearr_12028_12069[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12016 === 9))
{var inst_11950 = (state_12015[11]);var inst_11943 = (state_12015[9]);var inst_11971 = cljs.core._EQ_.call(null,inst_11950,inst_11943);var state_12015__$1 = state_12015;if(inst_11971)
{var statearr_12029_12070 = state_12015__$1;(statearr_12029_12070[1] = 14);
} else
{var statearr_12030_12071 = state_12015__$1;(statearr_12030_12071[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12016 === 10))
{var inst_12007 = (state_12015[2]);var state_12015__$1 = (function (){var statearr_12031 = state_12015;(statearr_12031[15] = inst_12007);
return statearr_12031;
})();var statearr_12032_12072 = state_12015__$1;(statearr_12032_12072[2] = null);
(statearr_12032_12072[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12016 === 11))
{var inst_11954 = (state_12015[13]);var inst_11958 = cljs.core.pr_str.call(null,inst_11954);var inst_11959 = growingtree_app.utils.mprint.call(null,"Controls Verbose: ",inst_11958);var state_12015__$1 = state_12015;var statearr_12033_12073 = state_12015__$1;(statearr_12033_12073[2] = inst_11959);
(statearr_12033_12073[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12016 === 12))
{var state_12015__$1 = state_12015;var statearr_12034_12074 = state_12015__$1;(statearr_12034_12074[2] = null);
(statearr_12034_12074[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12016 === 13))
{var inst_11954 = (state_12015[13]);var inst_11962 = (state_12015[2]);var inst_11963 = cljs.core.deref.call(null,state);var inst_11964 = cljs.core.first.call(null,inst_11954);var inst_11965 = cljs.core.last.call(null,inst_11954);var inst_11966 = cljs.core.partial.call(null,growingtree_app.controllers.controls.control_event,target,inst_11964,inst_11965);var inst_11967 = cljs.core.swap_BANG_.call(null,state,inst_11966);var inst_11968 = cljs.core.deref.call(null,state);var inst_11969 = growingtree_app.controllers.post_controls.post_control_event_BANG_.call(null,target,inst_11964,inst_11965,inst_11963,inst_11968);var state_12015__$1 = (function (){var statearr_12035 = state_12015;(statearr_12035[16] = inst_11962);
(statearr_12035[17] = inst_11967);
return statearr_12035;
})();var statearr_12036_12075 = state_12015__$1;(statearr_12036_12075[2] = inst_11969);
(statearr_12036_12075[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12016 === 14))
{var inst_11948 = (state_12015[10]);var inst_11974 = cljs.core.nth.call(null,inst_11948,0,null);var state_12015__$1 = (function (){var statearr_12037 = state_12015;(statearr_12037[18] = inst_11974);
return statearr_12037;
})();if(cljs.core.truth_(growingtree_app.utils.logging_enabled_QMARK_))
{var statearr_12038_12076 = state_12015__$1;(statearr_12038_12076[1] = 17);
} else
{var statearr_12039_12077 = state_12015__$1;(statearr_12039_12077[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12016 === 15))
{var inst_11944 = (state_12015[7]);var inst_11950 = (state_12015[11]);var inst_11991 = cljs.core._EQ_.call(null,inst_11950,inst_11944);var state_12015__$1 = state_12015;if(inst_11991)
{var statearr_12040_12078 = state_12015__$1;(statearr_12040_12078[1] = 20);
} else
{var statearr_12041_12079 = state_12015__$1;(statearr_12041_12079[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12016 === 16))
{var inst_12005 = (state_12015[2]);var state_12015__$1 = state_12015;var statearr_12042_12080 = state_12015__$1;(statearr_12042_12080[2] = inst_12005);
(statearr_12042_12080[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12016 === 17))
{var inst_11974 = (state_12015[18]);var inst_11976 = cljs.core.pr_str.call(null,inst_11974);var inst_11977 = growingtree_app.utils.mprint.call(null,"API Verbose: ",inst_11976);var state_12015__$1 = state_12015;var statearr_12043_12081 = state_12015__$1;(statearr_12043_12081[2] = inst_11977);
(statearr_12043_12081[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12016 === 18))
{var state_12015__$1 = state_12015;var statearr_12044_12082 = state_12015__$1;(statearr_12044_12082[2] = null);
(statearr_12044_12082[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12016 === 19))
{var inst_11974 = (state_12015[18]);var inst_11980 = (state_12015[2]);var inst_11981 = cljs.core.deref.call(null,state);var inst_11982 = cljs.core.first.call(null,inst_11974);var inst_11983 = cljs.core.last.call(null,inst_11974);var inst_11984 = new cljs.core.Keyword(null,"things-vec","things-vec",905584254).cljs$core$IFn$_invoke$arity$1(inst_11983);var inst_11985 = growingtree_app.core.update_history_BANG_.call(null,history,new cljs.core.Keyword(null,"api","api",1014001036),inst_11974);var inst_11986 = cljs.core.partial.call(null,growingtree_app.controllers.api.api_event,target,inst_11982,inst_11983);var inst_11987 = cljs.core.swap_BANG_.call(null,state,inst_11986);var inst_11988 = cljs.core.deref.call(null,state);var inst_11989 = growingtree_app.controllers.post_api.post_api_event_BANG_.call(null,target,inst_11982,inst_11983,inst_11981,inst_11988);var state_12015__$1 = (function (){var statearr_12045 = state_12015;(statearr_12045[19] = inst_11980);
(statearr_12045[20] = inst_11984);
(statearr_12045[21] = inst_11985);
(statearr_12045[22] = inst_11987);
return statearr_12045;
})();var statearr_12046_12083 = state_12015__$1;(statearr_12046_12083[2] = inst_11989);
(statearr_12046_12083[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12016 === 20))
{var inst_11993 = cljs.core.deref.call(null,history);var inst_11994 = cljs.core.pr_str.call(null,inst_11993);var inst_11995 = growingtree_app.utils.mprint.call(null,inst_11994);var state_12015__$1 = state_12015;var statearr_12047_12084 = state_12015__$1;(statearr_12047_12084[2] = inst_11995);
(statearr_12047_12084[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12016 === 21))
{var inst_11950 = (state_12015[11]);var inst_11997 = cljs.core._EQ_.call(null,inst_11950,new cljs.core.Keyword(null,"default","default",2558708147));var state_12015__$1 = state_12015;if(inst_11997)
{var statearr_12048_12085 = state_12015__$1;(statearr_12048_12085[1] = 23);
} else
{var statearr_12049_12086 = state_12015__$1;(statearr_12049_12086[1] = 24);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12016 === 22))
{var inst_12003 = (state_12015[2]);var state_12015__$1 = state_12015;var statearr_12050_12087 = state_12015__$1;(statearr_12050_12087[2] = inst_12003);
(statearr_12050_12087[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12016 === 23))
{var inst_11949 = (state_12015[12]);var state_12015__$1 = state_12015;var statearr_12051_12088 = state_12015__$1;(statearr_12051_12088[2] = inst_11949);
(statearr_12051_12088[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12016 === 24))
{var state_12015__$1 = state_12015;var statearr_12052_12089 = state_12015__$1;(statearr_12052_12089[2] = null);
(statearr_12052_12089[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12016 === 25))
{var inst_12001 = (state_12015[2]);var state_12015__$1 = state_12015;var statearr_12053_12090 = state_12015__$1;(statearr_12053_12090[2] = inst_12001);
(statearr_12053_12090[1] = 22);
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
var state_machine__6119__auto____0 = (function (){var statearr_12057 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12057[0] = state_machine__6119__auto__);
(statearr_12057[1] = 1);
return statearr_12057;
});
var state_machine__6119__auto____1 = (function (state_12015){while(true){
var ret_value__6120__auto__ = (function (){try{while(true){
var result__6121__auto__ = switch__6118__auto__.call(null,state_12015);if(cljs.core.keyword_identical_QMARK_.call(null,result__6121__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6121__auto__;
}
break;
}
}catch (e12058){if((e12058 instanceof Object))
{var ex__6122__auto__ = e12058;var statearr_12059_12091 = state_12015;(statearr_12059_12091[5] = ex__6122__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12015);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12058;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6120__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12092 = state_12015;
state_12015 = G__12092;
continue;
}
} else
{return ret_value__6120__auto__;
}
break;
}
});
state_machine__6119__auto__ = function(state_12015){
switch(arguments.length){
case 0:
return state_machine__6119__auto____0.call(this);
case 1:
return state_machine__6119__auto____1.call(this,state_12015);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6119__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6119__auto____0;
state_machine__6119__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6119__auto____1;
return state_machine__6119__auto__;
})()
;})(switch__6118__auto__))
})();var state__6190__auto__ = (function (){var statearr_12060 = f__6189__auto__.call(null);(statearr_12060[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6188__auto__);
return statearr_12060;
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
var seq__12097 = cljs.core.seq.call(null,channels);var chunk__12098 = null;var count__12099 = 0;var i__12100 = 0;while(true){
if((i__12100 < count__12099))
{var channel = cljs.core._nth.call(null,chunk__12098,i__12100);growingtree_app.api.kandan.subscribe_BANG_.call(null,kandan_client,[cljs.core.str("/channels/"),cljs.core.str(channel)].join(''),new cljs.core.Keyword(null,"api","api",1014001036).cljs$core$IFn$_invoke$arity$1(comms));
{
var G__12101 = seq__12097;
var G__12102 = chunk__12098;
var G__12103 = count__12099;
var G__12104 = (i__12100 + 1);
seq__12097 = G__12101;
chunk__12098 = G__12102;
count__12099 = G__12103;
i__12100 = G__12104;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__12097);if(temp__4092__auto__)
{var seq__12097__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12097__$1))
{var c__4191__auto__ = cljs.core.chunk_first.call(null,seq__12097__$1);{
var G__12105 = cljs.core.chunk_rest.call(null,seq__12097__$1);
var G__12106 = c__4191__auto__;
var G__12107 = cljs.core.count.call(null,c__4191__auto__);
var G__12108 = 0;
seq__12097 = G__12105;
chunk__12098 = G__12106;
count__12099 = G__12107;
i__12100 = G__12108;
continue;
}
} else
{var channel = cljs.core.first.call(null,seq__12097__$1);growingtree_app.api.kandan.subscribe_BANG_.call(null,kandan_client,[cljs.core.str("/channels/"),cljs.core.str(channel)].join(''),new cljs.core.Keyword(null,"api","api",1014001036).cljs$core$IFn$_invoke$arity$1(comms));
{
var G__12109 = cljs.core.next.call(null,seq__12097__$1);
var G__12110 = null;
var G__12111 = 0;
var G__12112 = 0;
seq__12097 = G__12109;
chunk__12098 = G__12110;
count__12099 = G__12111;
i__12100 = G__12112;
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