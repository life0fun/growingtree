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
goog.require('growingtree_app.mock_data');
goog.require('growingtree_app.datetime');
goog.require('growingtree_app.datetime');
goog.require('growingtree_app.useful');
goog.require('growingtree_app.controllers.controls');
goog.require('growingtree_app.utils');
goog.require('clojure.string');
goog.require('om.core');
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
growingtree_app.core.main = (function main(target,state){var comms = new cljs.core.Keyword(null,"comms","comms",460172477).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state));var history = (function (){var or__3543__auto__ = growingtree_app.core.history;if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
})();growingtree_app.routes.define_routes_BANG_.call(null,state,document.getElementById("history-container"));
om.core.root.call(null,growingtree_app.components.app.app,state,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),target,new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"comms","comms",460172477),comms], null)], null));
var c__6345__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6345__auto__,comms,history){
return (function (){var f__6346__auto__ = (function (){var switch__6280__auto__ = ((function (c__6345__auto__,comms,history){
return (function (state_11972){var state_val_11973 = (state_11972[(1)]);if((state_val_11973 === (7)))
{var inst_11902 = (state_11972[(7)]);var inst_11908 = (state_11972[(8)]);var inst_11910 = (state_11972[(9)]);var inst_11908__$1 = (state_11972[(2)]);var inst_11909 = cljs.core.nth.call(null,inst_11908__$1,(0),null);var inst_11910__$1 = cljs.core.nth.call(null,inst_11908__$1,(1),null);var inst_11911 = cljs.core._EQ_.call(null,inst_11910__$1,inst_11902);var state_11972__$1 = (function (){var statearr_11974 = state_11972;(statearr_11974[(10)] = inst_11909);
(statearr_11974[(8)] = inst_11908__$1);
(statearr_11974[(9)] = inst_11910__$1);
return statearr_11974;
})();if(inst_11911)
{var statearr_11975_12018 = state_11972__$1;(statearr_11975_12018[(1)] = (8));
} else
{var statearr_11976_12019 = state_11972__$1;(statearr_11976_12019[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11973 === (20)))
{var inst_11950 = cljs.core.deref.call(null,history);var inst_11951 = cljs.core.pr_str.call(null,inst_11950);var inst_11952 = growingtree_app.utils.mprint.call(null,inst_11951);var state_11972__$1 = state_11972;var statearr_11977_12020 = state_11972__$1;(statearr_11977_12020[(2)] = inst_11952);
(statearr_11977_12020[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11973 === (1)))
{var state_11972__$1 = state_11972;var statearr_11978_12021 = state_11972__$1;(statearr_11978_12021[(2)] = null);
(statearr_11978_12021[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11973 === (24)))
{var state_11972__$1 = state_11972;var statearr_11979_12022 = state_11972__$1;(statearr_11979_12022[(2)] = null);
(statearr_11979_12022[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11973 === (4)))
{var inst_11903 = (state_11972[(11)]);var inst_11902 = (state_11972[(7)]);var inst_11904 = (state_11972[(12)]);var inst_11902__$1 = new cljs.core.Keyword(null,"controls","controls",1340701452).cljs$core$IFn$_invoke$arity$1(comms);var inst_11903__$1 = new cljs.core.Keyword(null,"api","api",-899839580).cljs$core$IFn$_invoke$arity$1(comms);var inst_11904__$1 = cljs.core.async.timeout.call(null,(30000));var inst_11905 = [inst_11902__$1,inst_11903__$1,inst_11904__$1];var inst_11906 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_11905,null));var state_11972__$1 = (function (){var statearr_11980 = state_11972;(statearr_11980[(11)] = inst_11903__$1);
(statearr_11980[(7)] = inst_11902__$1);
(statearr_11980[(12)] = inst_11904__$1);
return statearr_11980;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_11972__$1,(7),inst_11906);
} else
{if((state_val_11973 === (15)))
{var inst_11910 = (state_11972[(9)]);var inst_11904 = (state_11972[(12)]);var inst_11948 = cljs.core._EQ_.call(null,inst_11910,inst_11904);var state_11972__$1 = state_11972;if(inst_11948)
{var statearr_11981_12023 = state_11972__$1;(statearr_11981_12023[(1)] = (20));
} else
{var statearr_11982_12024 = state_11972__$1;(statearr_11982_12024[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11973 === (21)))
{var inst_11910 = (state_11972[(9)]);var inst_11954 = cljs.core._EQ_.call(null,inst_11910,new cljs.core.Keyword(null,"default","default",-1987822328));var state_11972__$1 = state_11972;if(inst_11954)
{var statearr_11983_12025 = state_11972__$1;(statearr_11983_12025[(1)] = (23));
} else
{var statearr_11984_12026 = state_11972__$1;(statearr_11984_12026[(1)] = (24));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11973 === (13)))
{var inst_11914 = (state_11972[(13)]);var inst_11920 = (state_11972[(2)]);var inst_11921 = cljs.core.deref.call(null,state);var inst_11922 = cljs.core.first.call(null,inst_11914);var inst_11923 = cljs.core.last.call(null,inst_11914);var inst_11924 = cljs.core.partial.call(null,growingtree_app.controllers.controls.control_event,target,inst_11922,inst_11923);var inst_11925 = cljs.core.swap_BANG_.call(null,state,inst_11924);var inst_11926 = cljs.core.deref.call(null,state);var inst_11927 = growingtree_app.controllers.post_controls.post_control_event_BANG_.call(null,target,inst_11922,inst_11923,inst_11921,inst_11926);var state_11972__$1 = (function (){var statearr_11985 = state_11972;(statearr_11985[(14)] = inst_11920);
(statearr_11985[(15)] = inst_11925);
return statearr_11985;
})();var statearr_11986_12027 = state_11972__$1;(statearr_11986_12027[(2)] = inst_11927);
(statearr_11986_12027[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11973 === (22)))
{var inst_11960 = (state_11972[(2)]);var state_11972__$1 = state_11972;var statearr_11987_12028 = state_11972__$1;(statearr_11987_12028[(2)] = inst_11960);
(statearr_11987_12028[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11973 === (6)))
{var inst_11968 = (state_11972[(2)]);var state_11972__$1 = state_11972;var statearr_11988_12029 = state_11972__$1;(statearr_11988_12029[(2)] = inst_11968);
(statearr_11988_12029[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11973 === (25)))
{var inst_11958 = (state_11972[(2)]);var state_11972__$1 = state_11972;var statearr_11989_12030 = state_11972__$1;(statearr_11989_12030[(2)] = inst_11958);
(statearr_11989_12030[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11973 === (17)))
{var inst_11932 = (state_11972[(16)]);var inst_11934 = cljs.core.pr_str.call(null,inst_11932);var inst_11935 = growingtree_app.utils.mprint.call(null,"API Verbose: ",inst_11934);var state_11972__$1 = state_11972;var statearr_11990_12031 = state_11972__$1;(statearr_11990_12031[(2)] = inst_11935);
(statearr_11990_12031[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11973 === (3)))
{var inst_11970 = (state_11972[(2)]);var state_11972__$1 = state_11972;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11972__$1,inst_11970);
} else
{if((state_val_11973 === (12)))
{var state_11972__$1 = state_11972;var statearr_11991_12032 = state_11972__$1;(statearr_11991_12032[(2)] = null);
(statearr_11991_12032[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11973 === (2)))
{var state_11972__$1 = state_11972;if(true)
{var statearr_11992_12033 = state_11972__$1;(statearr_11992_12033[(1)] = (4));
} else
{var statearr_11993_12034 = state_11972__$1;(statearr_11993_12034[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11973 === (23)))
{var inst_11909 = (state_11972[(10)]);var state_11972__$1 = state_11972;var statearr_11994_12035 = state_11972__$1;(statearr_11994_12035[(2)] = inst_11909);
(statearr_11994_12035[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11973 === (19)))
{var inst_11932 = (state_11972[(16)]);var inst_11938 = (state_11972[(2)]);var inst_11939 = cljs.core.deref.call(null,state);var inst_11940 = cljs.core.first.call(null,inst_11932);var inst_11941 = cljs.core.last.call(null,inst_11932);var inst_11942 = new cljs.core.Keyword(null,"things-vec","things-vec",-1363222375).cljs$core$IFn$_invoke$arity$1(inst_11941);var inst_11943 = cljs.core.partial.call(null,growingtree_app.controllers.api.api_event,target,inst_11940,inst_11941);var inst_11944 = cljs.core.swap_BANG_.call(null,state,inst_11943);var inst_11945 = cljs.core.deref.call(null,state);var inst_11946 = growingtree_app.controllers.post_api.post_api_event_BANG_.call(null,target,inst_11940,inst_11941,inst_11939,inst_11945);var state_11972__$1 = (function (){var statearr_11995 = state_11972;(statearr_11995[(17)] = inst_11944);
(statearr_11995[(18)] = inst_11938);
(statearr_11995[(19)] = inst_11942);
return statearr_11995;
})();var statearr_11996_12036 = state_11972__$1;(statearr_11996_12036[(2)] = inst_11946);
(statearr_11996_12036[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11973 === (11)))
{var inst_11914 = (state_11972[(13)]);var inst_11916 = cljs.core.pr_str.call(null,inst_11914);var inst_11917 = growingtree_app.utils.mprint.call(null,"Controls Verbose: ",inst_11916);var state_11972__$1 = state_11972;var statearr_11997_12037 = state_11972__$1;(statearr_11997_12037[(2)] = inst_11917);
(statearr_11997_12037[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11973 === (9)))
{var inst_11903 = (state_11972[(11)]);var inst_11910 = (state_11972[(9)]);var inst_11929 = cljs.core._EQ_.call(null,inst_11910,inst_11903);var state_11972__$1 = state_11972;if(inst_11929)
{var statearr_11998_12038 = state_11972__$1;(statearr_11998_12038[(1)] = (14));
} else
{var statearr_11999_12039 = state_11972__$1;(statearr_11999_12039[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11973 === (5)))
{var state_11972__$1 = state_11972;var statearr_12000_12040 = state_11972__$1;(statearr_12000_12040[(2)] = null);
(statearr_12000_12040[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11973 === (14)))
{var inst_11908 = (state_11972[(8)]);var inst_11932 = cljs.core.nth.call(null,inst_11908,(0),null);var state_11972__$1 = (function (){var statearr_12001 = state_11972;(statearr_12001[(16)] = inst_11932);
return statearr_12001;
})();if(cljs.core.truth_(growingtree_app.utils.logging_enabled_QMARK_))
{var statearr_12002_12041 = state_11972__$1;(statearr_12002_12041[(1)] = (17));
} else
{var statearr_12003_12042 = state_11972__$1;(statearr_12003_12042[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11973 === (16)))
{var inst_11962 = (state_11972[(2)]);var state_11972__$1 = state_11972;var statearr_12004_12043 = state_11972__$1;(statearr_12004_12043[(2)] = inst_11962);
(statearr_12004_12043[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11973 === (10)))
{var inst_11964 = (state_11972[(2)]);var state_11972__$1 = (function (){var statearr_12005 = state_11972;(statearr_12005[(20)] = inst_11964);
return statearr_12005;
})();var statearr_12006_12044 = state_11972__$1;(statearr_12006_12044[(2)] = null);
(statearr_12006_12044[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11973 === (18)))
{var state_11972__$1 = state_11972;var statearr_12007_12045 = state_11972__$1;(statearr_12007_12045[(2)] = null);
(statearr_12007_12045[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11973 === (8)))
{var inst_11908 = (state_11972[(8)]);var inst_11914 = cljs.core.nth.call(null,inst_11908,(0),null);var state_11972__$1 = (function (){var statearr_12008 = state_11972;(statearr_12008[(13)] = inst_11914);
return statearr_12008;
})();if(cljs.core.truth_(growingtree_app.utils.logging_enabled_QMARK_))
{var statearr_12009_12046 = state_11972__$1;(statearr_12009_12046[(1)] = (11));
} else
{var statearr_12010_12047 = state_11972__$1;(statearr_12010_12047[(1)] = (12));
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
var state_machine__6281__auto____0 = (function (){var statearr_12014 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12014[(0)] = state_machine__6281__auto__);
(statearr_12014[(1)] = (1));
return statearr_12014;
});
var state_machine__6281__auto____1 = (function (state_11972){while(true){
var ret_value__6282__auto__ = (function (){try{while(true){
var result__6283__auto__ = switch__6280__auto__.call(null,state_11972);if(cljs.core.keyword_identical_QMARK_.call(null,result__6283__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6283__auto__;
}
break;
}
}catch (e12015){if((e12015 instanceof Object))
{var ex__6284__auto__ = e12015;var statearr_12016_12048 = state_11972;(statearr_12016_12048[(5)] = ex__6284__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11972);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e12015;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6282__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12049 = state_11972;
state_11972 = G__12049;
continue;
}
} else
{return ret_value__6282__auto__;
}
break;
}
});
state_machine__6281__auto__ = function(state_11972){
switch(arguments.length){
case 0:
return state_machine__6281__auto____0.call(this);
case 1:
return state_machine__6281__auto____1.call(this,state_11972);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6281__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6281__auto____0;
state_machine__6281__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6281__auto____1;
return state_machine__6281__auto__;
})()
;})(switch__6280__auto__,c__6345__auto__,comms,history))
})();var state__6347__auto__ = (function (){var statearr_12017 = f__6346__auto__.call(null);(statearr_12017[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6345__auto__);
return statearr_12017;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6347__auto__);
});})(c__6345__auto__,comms,history))
);
return c__6345__auto__;
});
growingtree_app.core.setup_BANG_ = (function setup_BANG_(){var comms = new cljs.core.Keyword(null,"comms","comms",460172477).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,growingtree_app.core.app_state));growingtree_app.core.main.call(null,document.getElementById("app"),growingtree_app.core.app_state);
if(cljs.core.truth_(new cljs.core.Keyword(null,"restore-state?","restore-state?",-1143283431).cljs$core$IFn$_invoke$arity$1(growingtree_app.utils.initial_query_map)))
{cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"controls","controls",1340701452).cljs$core$IFn$_invoke$arity$1(comms),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-restored","state-restored",450621293)], null));
} else
{}
if(cljs.core.truth_(new cljs.core.Keyword(null,"kandan-client?","kandan-client?",998337099).cljs$core$IFn$_invoke$arity$1(growingtree_app.utils.initial_query_map)))
{var api_key = new cljs.core.Keyword(null,"kandan-api-key","kandan-api-key",1285411267).cljs$core$IFn$_invoke$arity$1(growingtree_app.utils.initial_query_map);var kandan_client = growingtree_app.api.kandan.make_client.call(null,api_key,"http://localhost:3000/remote/faye");var channels = new cljs.core.Keyword(null,"kandan-channels","kandan-channels",-1827680736).cljs$core$IFn$_invoke$arity$1(growingtree_app.utils.initial_query_map);cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"controls","controls",1340701452).cljs$core$IFn$_invoke$arity$1(comms),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"api-key-updated","api-key-updated",-1848658586),api_key], null));
var seq__12054 = cljs.core.seq.call(null,channels);var chunk__12055 = null;var count__12056 = (0);var i__12057 = (0);while(true){
if((i__12057 < count__12056))
{var channel = cljs.core._nth.call(null,chunk__12055,i__12057);growingtree_app.api.kandan.subscribe_BANG_.call(null,kandan_client,("/channels/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(channel)),new cljs.core.Keyword(null,"api","api",-899839580).cljs$core$IFn$_invoke$arity$1(comms));
{
var G__12058 = seq__12054;
var G__12059 = chunk__12055;
var G__12060 = count__12056;
var G__12061 = (i__12057 + (1));
seq__12054 = G__12058;
chunk__12055 = G__12059;
count__12056 = G__12060;
i__12057 = G__12061;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__12054);if(temp__4126__auto__)
{var seq__12054__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12054__$1))
{var c__4299__auto__ = cljs.core.chunk_first.call(null,seq__12054__$1);{
var G__12062 = cljs.core.chunk_rest.call(null,seq__12054__$1);
var G__12063 = c__4299__auto__;
var G__12064 = cljs.core.count.call(null,c__4299__auto__);
var G__12065 = (0);
seq__12054 = G__12062;
chunk__12055 = G__12063;
count__12056 = G__12064;
i__12057 = G__12065;
continue;
}
} else
{var channel = cljs.core.first.call(null,seq__12054__$1);growingtree_app.api.kandan.subscribe_BANG_.call(null,kandan_client,("/channels/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(channel)),new cljs.core.Keyword(null,"api","api",-899839580).cljs$core$IFn$_invoke$arity$1(comms));
{
var G__12066 = cljs.core.next.call(null,seq__12054__$1);
var G__12067 = null;
var G__12068 = (0);
var G__12069 = (0);
seq__12054 = G__12066;
chunk__12055 = G__12067;
count__12056 = G__12068;
i__12057 = G__12069;
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
growingtree_app.core.send_async_message = (function send_async_message(ch_name,message,data){return cljs.core.async.put_BANG_.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,growingtree_app.core.app_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"comms","comms",460172477),cljs.core.keyword.call(null,ch_name)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,message),cljs.core.js__GT_clj.call(null,data,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true)], null));
});
goog.exportSymbol('growingtree_app.core.send_async_message', growingtree_app.core.send_async_message);
growingtree_app.core.remove_channel_BANG_ = (function remove_channel_BANG_(channel_id){return cljs.core.async.put_BANG_.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,growingtree_app.core.app_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"comms","comms",460172477),new cljs.core.Keyword(null,"controls","controls",1340701452)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"channel-remotely-destroyed","channel-remotely-destroyed",-727239593),channel_id], null));
});
goog.exportSymbol('growingtree_app.core.remove_channel_BANG_', growingtree_app.core.remove_channel_BANG_);

//# sourceMappingURL=core.js.map