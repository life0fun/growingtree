// Compiled by ClojureScript 0.0-2277
goog.provide('growingtree_app.core');
goog.require('cljs.core');
goog.require('growingtree_app.useful');
goog.require('growingtree_app.utils');
goog.require('cljs.core.async');
goog.require('growingtree_app.controllers.api');
goog.require('om.dom');
goog.require('growingtree_app.controllers.post_controls');
goog.require('growingtree_app.components.app');
goog.require('cljs.core.async');
goog.require('growingtree_app.routes');
goog.require('dommy.core');
goog.require('growingtree_app.controllers.post_api');
goog.require('om.dom');
goog.require('growingtree_app.api.kandan');
goog.require('growingtree_app.api.mock');
goog.require('cljs.core.async');
goog.require('growingtree_app.components.login');
goog.require('growingtree_app.mock_data');
goog.require('growingtree_app.datetime');
goog.require('growingtree_app.datetime');
goog.require('growingtree_app.useful');
goog.require('growingtree_app.controllers.controls');
goog.require('growingtree_app.utils');
goog.require('clojure.string');
goog.require('om.core');
goog.require('growingtree_app.components.login');
goog.require('dommy.core');
goog.require('growingtree_app.mock_data');
goog.require('om.core');
goog.require('growingtree_app.controllers.post_api');
goog.require('growingtree_app.routes');
goog.require('growingtree_app.controllers.api');
goog.require('growingtree_app.utils');
goog.require('growingtree_app.useful');
goog.require('clojure.string');
goog.require('growingtree_app.controllers.post_controls');
goog.require('growingtree_app.controllers.controls');
goog.require('growingtree_app.components.app');
goog.require('growingtree_app.api.kandan');
goog.require('growingtree_app.api.mock');
cljs.core.enable_console_print_BANG_.call(null);
growingtree_app.core.controls_ch = cljs.core.async.chan.call(null);
growingtree_app.core.api_ch = cljs.core.async.chan.call(null);
growingtree_app.core.app_state = cljs.core.atom.call(null,growingtree_app.mock_data.initial_state.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"controls","controls",1340701452),growingtree_app.core.controls_ch,new cljs.core.Keyword(null,"api","api",-899839580),growingtree_app.core.api_ch], null)));
growingtree_app.core.history = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
growingtree_app.core.filtered_message_QMARK_ = (function filtered_message_QMARK_(message){return cljs.core.get.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"credit-card-updated","credit-card-updated",-917292515),null], null), null),message);
});
growingtree_app.core.update_history_BANG_ = (function update_history_BANG_(history,channel,message){var m = cljs.core.first.call(null,message);var record = (cljs.core.truth_(growingtree_app.core.filtered_message_QMARK_.call(null,m))?m:message);return cljs.core.swap_BANG_.call(null,history,cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [channel,record], null));
});
growingtree_app.core.main = (function main(el,state){var comms = new cljs.core.Keyword(null,"comms","comms",460172477).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state));var history = (function (){var or__3543__auto__ = growingtree_app.core.history;if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
})();growingtree_app.routes.define_routes_BANG_.call(null,state,document.getElementById("history-container"));
om.core.root.call(null,growingtree_app.components.login.login,state,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"comms","comms",460172477),comms], null)], null));
var c__6345__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6345__auto__,comms,history){
return (function (){var f__6346__auto__ = (function (){var switch__6280__auto__ = ((function (c__6345__auto__,comms,history){
return (function (state_12011){var state_val_12012 = (state_12011[(1)]);if((state_val_12012 === (7)))
{var inst_11949 = (state_12011[(7)]);var inst_11947 = (state_12011[(8)]);var inst_11941 = (state_12011[(9)]);var inst_11947__$1 = (state_12011[(2)]);var inst_11948 = cljs.core.nth.call(null,inst_11947__$1,(0),null);var inst_11949__$1 = cljs.core.nth.call(null,inst_11947__$1,(1),null);var inst_11950 = cljs.core._EQ_.call(null,inst_11949__$1,inst_11941);var state_12011__$1 = (function (){var statearr_12013 = state_12011;(statearr_12013[(7)] = inst_11949__$1);
(statearr_12013[(8)] = inst_11947__$1);
(statearr_12013[(10)] = inst_11948);
return statearr_12013;
})();if(inst_11950)
{var statearr_12014_12057 = state_12011__$1;(statearr_12014_12057[(1)] = (8));
} else
{var statearr_12015_12058 = state_12011__$1;(statearr_12015_12058[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12012 === (20)))
{var inst_11989 = cljs.core.deref.call(null,history);var inst_11990 = cljs.core.pr_str.call(null,inst_11989);var inst_11991 = growingtree_app.utils.mprint.call(null,inst_11990);var state_12011__$1 = state_12011;var statearr_12016_12059 = state_12011__$1;(statearr_12016_12059[(2)] = inst_11991);
(statearr_12016_12059[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12012 === (1)))
{var state_12011__$1 = state_12011;var statearr_12017_12060 = state_12011__$1;(statearr_12017_12060[(2)] = null);
(statearr_12017_12060[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12012 === (24)))
{var state_12011__$1 = state_12011;var statearr_12018_12061 = state_12011__$1;(statearr_12018_12061[(2)] = null);
(statearr_12018_12061[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12012 === (4)))
{var inst_11941 = (state_12011[(9)]);var inst_11943 = (state_12011[(11)]);var inst_11942 = (state_12011[(12)]);var inst_11941__$1 = new cljs.core.Keyword(null,"controls","controls",1340701452).cljs$core$IFn$_invoke$arity$1(comms);var inst_11942__$1 = new cljs.core.Keyword(null,"api","api",-899839580).cljs$core$IFn$_invoke$arity$1(comms);var inst_11943__$1 = cljs.core.async.timeout.call(null,(30000));var inst_11944 = [inst_11941__$1,inst_11942__$1,inst_11943__$1];var inst_11945 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_11944,null));var state_12011__$1 = (function (){var statearr_12019 = state_12011;(statearr_12019[(9)] = inst_11941__$1);
(statearr_12019[(11)] = inst_11943__$1);
(statearr_12019[(12)] = inst_11942__$1);
return statearr_12019;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_12011__$1,(7),inst_11945);
} else
{if((state_val_12012 === (15)))
{var inst_11949 = (state_12011[(7)]);var inst_11943 = (state_12011[(11)]);var inst_11987 = cljs.core._EQ_.call(null,inst_11949,inst_11943);var state_12011__$1 = state_12011;if(inst_11987)
{var statearr_12020_12062 = state_12011__$1;(statearr_12020_12062[(1)] = (20));
} else
{var statearr_12021_12063 = state_12011__$1;(statearr_12021_12063[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12012 === (21)))
{var inst_11949 = (state_12011[(7)]);var inst_11993 = cljs.core._EQ_.call(null,inst_11949,new cljs.core.Keyword(null,"default","default",-1987822328));var state_12011__$1 = state_12011;if(inst_11993)
{var statearr_12022_12064 = state_12011__$1;(statearr_12022_12064[(1)] = (23));
} else
{var statearr_12023_12065 = state_12011__$1;(statearr_12023_12065[(1)] = (24));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12012 === (13)))
{var inst_11953 = (state_12011[(13)]);var inst_11959 = (state_12011[(2)]);var inst_11960 = cljs.core.deref.call(null,state);var inst_11961 = cljs.core.first.call(null,inst_11953);var inst_11962 = cljs.core.last.call(null,inst_11953);var inst_11963 = cljs.core.partial.call(null,growingtree_app.controllers.controls.control_event,el,inst_11961,inst_11962);var inst_11964 = cljs.core.swap_BANG_.call(null,state,inst_11963);var inst_11965 = cljs.core.deref.call(null,state);var inst_11966 = growingtree_app.controllers.post_controls.post_control_event_BANG_.call(null,el,inst_11961,inst_11962,inst_11960,inst_11965);var state_12011__$1 = (function (){var statearr_12024 = state_12011;(statearr_12024[(14)] = inst_11964);
(statearr_12024[(15)] = inst_11959);
return statearr_12024;
})();var statearr_12025_12066 = state_12011__$1;(statearr_12025_12066[(2)] = inst_11966);
(statearr_12025_12066[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12012 === (22)))
{var inst_11999 = (state_12011[(2)]);var state_12011__$1 = state_12011;var statearr_12026_12067 = state_12011__$1;(statearr_12026_12067[(2)] = inst_11999);
(statearr_12026_12067[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12012 === (6)))
{var inst_12007 = (state_12011[(2)]);var state_12011__$1 = state_12011;var statearr_12027_12068 = state_12011__$1;(statearr_12027_12068[(2)] = inst_12007);
(statearr_12027_12068[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12012 === (25)))
{var inst_11997 = (state_12011[(2)]);var state_12011__$1 = state_12011;var statearr_12028_12069 = state_12011__$1;(statearr_12028_12069[(2)] = inst_11997);
(statearr_12028_12069[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12012 === (17)))
{var inst_11971 = (state_12011[(16)]);var inst_11973 = cljs.core.pr_str.call(null,inst_11971);var inst_11974 = growingtree_app.utils.mprint.call(null,"API Verbose: ",inst_11973);var state_12011__$1 = state_12011;var statearr_12029_12070 = state_12011__$1;(statearr_12029_12070[(2)] = inst_11974);
(statearr_12029_12070[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12012 === (3)))
{var inst_12009 = (state_12011[(2)]);var state_12011__$1 = state_12011;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12011__$1,inst_12009);
} else
{if((state_val_12012 === (12)))
{var state_12011__$1 = state_12011;var statearr_12030_12071 = state_12011__$1;(statearr_12030_12071[(2)] = null);
(statearr_12030_12071[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12012 === (2)))
{var state_12011__$1 = state_12011;if(true)
{var statearr_12031_12072 = state_12011__$1;(statearr_12031_12072[(1)] = (4));
} else
{var statearr_12032_12073 = state_12011__$1;(statearr_12032_12073[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12012 === (23)))
{var inst_11948 = (state_12011[(10)]);var state_12011__$1 = state_12011;var statearr_12033_12074 = state_12011__$1;(statearr_12033_12074[(2)] = inst_11948);
(statearr_12033_12074[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12012 === (19)))
{var inst_11971 = (state_12011[(16)]);var inst_11977 = (state_12011[(2)]);var inst_11978 = cljs.core.deref.call(null,state);var inst_11979 = cljs.core.first.call(null,inst_11971);var inst_11980 = cljs.core.last.call(null,inst_11971);var inst_11981 = new cljs.core.Keyword(null,"things-vec","things-vec",-1363222375).cljs$core$IFn$_invoke$arity$1(inst_11980);var inst_11982 = cljs.core.partial.call(null,growingtree_app.controllers.api.api_event,el,inst_11979,inst_11980);var inst_11983 = cljs.core.swap_BANG_.call(null,state,inst_11982);var inst_11984 = cljs.core.deref.call(null,state);var inst_11985 = growingtree_app.controllers.post_api.post_api_event_BANG_.call(null,el,inst_11979,inst_11980,inst_11978,inst_11984);var state_12011__$1 = (function (){var statearr_12034 = state_12011;(statearr_12034[(17)] = inst_11981);
(statearr_12034[(18)] = inst_11977);
(statearr_12034[(19)] = inst_11983);
return statearr_12034;
})();var statearr_12035_12075 = state_12011__$1;(statearr_12035_12075[(2)] = inst_11985);
(statearr_12035_12075[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12012 === (11)))
{var inst_11953 = (state_12011[(13)]);var inst_11955 = cljs.core.pr_str.call(null,inst_11953);var inst_11956 = growingtree_app.utils.mprint.call(null,"Controls Verbose: ",inst_11955);var state_12011__$1 = state_12011;var statearr_12036_12076 = state_12011__$1;(statearr_12036_12076[(2)] = inst_11956);
(statearr_12036_12076[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12012 === (9)))
{var inst_11949 = (state_12011[(7)]);var inst_11942 = (state_12011[(12)]);var inst_11968 = cljs.core._EQ_.call(null,inst_11949,inst_11942);var state_12011__$1 = state_12011;if(inst_11968)
{var statearr_12037_12077 = state_12011__$1;(statearr_12037_12077[(1)] = (14));
} else
{var statearr_12038_12078 = state_12011__$1;(statearr_12038_12078[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12012 === (5)))
{var state_12011__$1 = state_12011;var statearr_12039_12079 = state_12011__$1;(statearr_12039_12079[(2)] = null);
(statearr_12039_12079[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12012 === (14)))
{var inst_11947 = (state_12011[(8)]);var inst_11971 = cljs.core.nth.call(null,inst_11947,(0),null);var state_12011__$1 = (function (){var statearr_12040 = state_12011;(statearr_12040[(16)] = inst_11971);
return statearr_12040;
})();if(cljs.core.truth_(growingtree_app.utils.logging_enabled_QMARK_))
{var statearr_12041_12080 = state_12011__$1;(statearr_12041_12080[(1)] = (17));
} else
{var statearr_12042_12081 = state_12011__$1;(statearr_12042_12081[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12012 === (16)))
{var inst_12001 = (state_12011[(2)]);var state_12011__$1 = state_12011;var statearr_12043_12082 = state_12011__$1;(statearr_12043_12082[(2)] = inst_12001);
(statearr_12043_12082[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12012 === (10)))
{var inst_12003 = (state_12011[(2)]);var state_12011__$1 = (function (){var statearr_12044 = state_12011;(statearr_12044[(20)] = inst_12003);
return statearr_12044;
})();var statearr_12045_12083 = state_12011__$1;(statearr_12045_12083[(2)] = null);
(statearr_12045_12083[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12012 === (18)))
{var state_12011__$1 = state_12011;var statearr_12046_12084 = state_12011__$1;(statearr_12046_12084[(2)] = null);
(statearr_12046_12084[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12012 === (8)))
{var inst_11947 = (state_12011[(8)]);var inst_11953 = cljs.core.nth.call(null,inst_11947,(0),null);var state_12011__$1 = (function (){var statearr_12047 = state_12011;(statearr_12047[(13)] = inst_11953);
return statearr_12047;
})();if(cljs.core.truth_(growingtree_app.utils.logging_enabled_QMARK_))
{var statearr_12048_12085 = state_12011__$1;(statearr_12048_12085[(1)] = (11));
} else
{var statearr_12049_12086 = state_12011__$1;(statearr_12049_12086[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__6345__auto__,comms,history))
;return ((function (switch__6280__auto__,c__6345__auto__,comms,history){
return (function() {
var state_machine__6281__auto__ = null;
var state_machine__6281__auto____0 = (function (){var statearr_12053 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12053[(0)] = state_machine__6281__auto__);
(statearr_12053[(1)] = (1));
return statearr_12053;
});
var state_machine__6281__auto____1 = (function (state_12011){while(true){
var ret_value__6282__auto__ = (function (){try{while(true){
var result__6283__auto__ = switch__6280__auto__.call(null,state_12011);if(cljs.core.keyword_identical_QMARK_.call(null,result__6283__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6283__auto__;
}
break;
}
}catch (e12054){if((e12054 instanceof Object))
{var ex__6284__auto__ = e12054;var statearr_12055_12087 = state_12011;(statearr_12055_12087[(5)] = ex__6284__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12011);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e12054;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6282__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12088 = state_12011;
state_12011 = G__12088;
continue;
}
} else
{return ret_value__6282__auto__;
}
break;
}
});
state_machine__6281__auto__ = function(state_12011){
switch(arguments.length){
case 0:
return state_machine__6281__auto____0.call(this);
case 1:
return state_machine__6281__auto____1.call(this,state_12011);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6281__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6281__auto____0;
state_machine__6281__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6281__auto____1;
return state_machine__6281__auto__;
})()
;})(switch__6280__auto__,c__6345__auto__,comms,history))
})();var state__6347__auto__ = (function (){var statearr_12056 = f__6346__auto__.call(null);(statearr_12056[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6345__auto__);
return statearr_12056;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6347__auto__);
});})(c__6345__auto__,comms,history))
);
return c__6345__auto__;
});
growingtree_app.core.init_state_BANG_ = (function init_state_BANG_(){var comms = new cljs.core.Keyword(null,"comms","comms",460172477).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,growingtree_app.core.app_state));growingtree_app.core.main.call(null,document.getElementById("app"),growingtree_app.core.app_state);
if(cljs.core.truth_(new cljs.core.Keyword(null,"restore-state?","restore-state?",-1143283431).cljs$core$IFn$_invoke$arity$1(growingtree_app.utils.initial_query_map)))
{cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"controls","controls",1340701452).cljs$core$IFn$_invoke$arity$1(comms),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-restored","state-restored",450621293)], null));
} else
{}
if(cljs.core.truth_(new cljs.core.Keyword(null,"kandan-client?","kandan-client?",998337099).cljs$core$IFn$_invoke$arity$1(growingtree_app.utils.initial_query_map)))
{var api_key = new cljs.core.Keyword(null,"kandan-api-key","kandan-api-key",1285411267).cljs$core$IFn$_invoke$arity$1(growingtree_app.utils.initial_query_map);var kandan_client = growingtree_app.api.kandan.make_client.call(null,api_key,"http://localhost:3000/remote/faye");var channels = new cljs.core.Keyword(null,"kandan-channels","kandan-channels",-1827680736).cljs$core$IFn$_invoke$arity$1(growingtree_app.utils.initial_query_map);cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"controls","controls",1340701452).cljs$core$IFn$_invoke$arity$1(comms),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"api-key-updated","api-key-updated",-1848658586),api_key], null));
var seq__12093 = cljs.core.seq.call(null,channels);var chunk__12094 = null;var count__12095 = (0);var i__12096 = (0);while(true){
if((i__12096 < count__12095))
{var channel = cljs.core._nth.call(null,chunk__12094,i__12096);growingtree_app.api.kandan.subscribe_BANG_.call(null,kandan_client,("/channels/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(channel)),new cljs.core.Keyword(null,"api","api",-899839580).cljs$core$IFn$_invoke$arity$1(comms));
{
var G__12097 = seq__12093;
var G__12098 = chunk__12094;
var G__12099 = count__12095;
var G__12100 = (i__12096 + (1));
seq__12093 = G__12097;
chunk__12094 = G__12098;
count__12095 = G__12099;
i__12096 = G__12100;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__12093);if(temp__4126__auto__)
{var seq__12093__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12093__$1))
{var c__4299__auto__ = cljs.core.chunk_first.call(null,seq__12093__$1);{
var G__12101 = cljs.core.chunk_rest.call(null,seq__12093__$1);
var G__12102 = c__4299__auto__;
var G__12103 = cljs.core.count.call(null,c__4299__auto__);
var G__12104 = (0);
seq__12093 = G__12101;
chunk__12094 = G__12102;
count__12095 = G__12103;
i__12096 = G__12104;
continue;
}
} else
{var channel = cljs.core.first.call(null,seq__12093__$1);growingtree_app.api.kandan.subscribe_BANG_.call(null,kandan_client,("/channels/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(channel)),new cljs.core.Keyword(null,"api","api",-899839580).cljs$core$IFn$_invoke$arity$1(comms));
{
var G__12105 = cljs.core.next.call(null,seq__12093__$1);
var G__12106 = null;
var G__12107 = (0);
var G__12108 = (0);
seq__12093 = G__12105;
chunk__12094 = G__12106;
count__12095 = G__12107;
i__12096 = G__12108;
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
window.onload = growingtree_app.core.init_state_BANG_;
growingtree_app.core.send_async_message = (function send_async_message(ch_name,message,data){return cljs.core.async.put_BANG_.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,growingtree_app.core.app_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"comms","comms",460172477),cljs.core.keyword.call(null,ch_name)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,message),cljs.core.js__GT_clj.call(null,data,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true)], null));
});
goog.exportSymbol('growingtree_app.core.send_async_message', growingtree_app.core.send_async_message);
growingtree_app.core.remove_channel_BANG_ = (function remove_channel_BANG_(channel_id){return cljs.core.async.put_BANG_.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,growingtree_app.core.app_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"comms","comms",460172477),new cljs.core.Keyword(null,"controls","controls",1340701452)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"channel-remotely-destroyed","channel-remotely-destroyed",-727239593),channel_id], null));
});
goog.exportSymbol('growingtree_app.core.remove_channel_BANG_', growingtree_app.core.remove_channel_BANG_);

//# sourceMappingURL=core.js.map