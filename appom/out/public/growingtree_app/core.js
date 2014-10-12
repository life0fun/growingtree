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
return (function (state_11963){var state_val_11964 = (state_11963[(1)]);if((state_val_11964 === (7)))
{var inst_11899 = (state_11963[(7)]);var inst_11893 = (state_11963[(8)]);var inst_11901 = (state_11963[(9)]);var inst_11899__$1 = (state_11963[(2)]);var inst_11900 = cljs.core.nth.call(null,inst_11899__$1,(0),null);var inst_11901__$1 = cljs.core.nth.call(null,inst_11899__$1,(1),null);var inst_11902 = cljs.core._EQ_.call(null,inst_11901__$1,inst_11893);var state_11963__$1 = (function (){var statearr_11965 = state_11963;(statearr_11965[(7)] = inst_11899__$1);
(statearr_11965[(10)] = inst_11900);
(statearr_11965[(9)] = inst_11901__$1);
return statearr_11965;
})();if(inst_11902)
{var statearr_11966_12009 = state_11963__$1;(statearr_11966_12009[(1)] = (8));
} else
{var statearr_11967_12010 = state_11963__$1;(statearr_11967_12010[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11964 === (20)))
{var inst_11941 = cljs.core.deref.call(null,history);var inst_11942 = cljs.core.pr_str.call(null,inst_11941);var inst_11943 = growingtree_app.utils.mprint.call(null,inst_11942);var state_11963__$1 = state_11963;var statearr_11968_12011 = state_11963__$1;(statearr_11968_12011[(2)] = inst_11943);
(statearr_11968_12011[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11964 === (1)))
{var state_11963__$1 = state_11963;var statearr_11969_12012 = state_11963__$1;(statearr_11969_12012[(2)] = null);
(statearr_11969_12012[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11964 === (24)))
{var state_11963__$1 = state_11963;var statearr_11970_12013 = state_11963__$1;(statearr_11970_12013[(2)] = null);
(statearr_11970_12013[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11964 === (4)))
{var inst_11895 = (state_11963[(11)]);var inst_11893 = (state_11963[(8)]);var inst_11894 = (state_11963[(12)]);var inst_11893__$1 = new cljs.core.Keyword(null,"controls","controls",1340701452).cljs$core$IFn$_invoke$arity$1(comms);var inst_11894__$1 = new cljs.core.Keyword(null,"api","api",-899839580).cljs$core$IFn$_invoke$arity$1(comms);var inst_11895__$1 = cljs.core.async.timeout.call(null,(30000));var inst_11896 = [inst_11893__$1,inst_11894__$1,inst_11895__$1];var inst_11897 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_11896,null));var state_11963__$1 = (function (){var statearr_11971 = state_11963;(statearr_11971[(11)] = inst_11895__$1);
(statearr_11971[(8)] = inst_11893__$1);
(statearr_11971[(12)] = inst_11894__$1);
return statearr_11971;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_11963__$1,(7),inst_11897);
} else
{if((state_val_11964 === (15)))
{var inst_11895 = (state_11963[(11)]);var inst_11901 = (state_11963[(9)]);var inst_11939 = cljs.core._EQ_.call(null,inst_11901,inst_11895);var state_11963__$1 = state_11963;if(inst_11939)
{var statearr_11972_12014 = state_11963__$1;(statearr_11972_12014[(1)] = (20));
} else
{var statearr_11973_12015 = state_11963__$1;(statearr_11973_12015[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11964 === (21)))
{var inst_11901 = (state_11963[(9)]);var inst_11945 = cljs.core._EQ_.call(null,inst_11901,new cljs.core.Keyword(null,"default","default",-1987822328));var state_11963__$1 = state_11963;if(inst_11945)
{var statearr_11974_12016 = state_11963__$1;(statearr_11974_12016[(1)] = (23));
} else
{var statearr_11975_12017 = state_11963__$1;(statearr_11975_12017[(1)] = (24));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11964 === (13)))
{var inst_11905 = (state_11963[(13)]);var inst_11911 = (state_11963[(2)]);var inst_11912 = cljs.core.deref.call(null,state);var inst_11913 = cljs.core.first.call(null,inst_11905);var inst_11914 = cljs.core.last.call(null,inst_11905);var inst_11915 = cljs.core.partial.call(null,growingtree_app.controllers.controls.control_event,el,inst_11913,inst_11914);var inst_11916 = cljs.core.swap_BANG_.call(null,state,inst_11915);var inst_11917 = cljs.core.deref.call(null,state);var inst_11918 = growingtree_app.controllers.post_controls.post_control_event_BANG_.call(null,el,inst_11913,inst_11914,inst_11912,inst_11917);var state_11963__$1 = (function (){var statearr_11976 = state_11963;(statearr_11976[(14)] = inst_11916);
(statearr_11976[(15)] = inst_11911);
return statearr_11976;
})();var statearr_11977_12018 = state_11963__$1;(statearr_11977_12018[(2)] = inst_11918);
(statearr_11977_12018[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11964 === (22)))
{var inst_11951 = (state_11963[(2)]);var state_11963__$1 = state_11963;var statearr_11978_12019 = state_11963__$1;(statearr_11978_12019[(2)] = inst_11951);
(statearr_11978_12019[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11964 === (6)))
{var inst_11959 = (state_11963[(2)]);var state_11963__$1 = state_11963;var statearr_11979_12020 = state_11963__$1;(statearr_11979_12020[(2)] = inst_11959);
(statearr_11979_12020[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11964 === (25)))
{var inst_11949 = (state_11963[(2)]);var state_11963__$1 = state_11963;var statearr_11980_12021 = state_11963__$1;(statearr_11980_12021[(2)] = inst_11949);
(statearr_11980_12021[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11964 === (17)))
{var inst_11923 = (state_11963[(16)]);var inst_11925 = cljs.core.pr_str.call(null,inst_11923);var inst_11926 = growingtree_app.utils.mprint.call(null,"API Verbose: ",inst_11925);var state_11963__$1 = state_11963;var statearr_11981_12022 = state_11963__$1;(statearr_11981_12022[(2)] = inst_11926);
(statearr_11981_12022[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11964 === (3)))
{var inst_11961 = (state_11963[(2)]);var state_11963__$1 = state_11963;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11963__$1,inst_11961);
} else
{if((state_val_11964 === (12)))
{var state_11963__$1 = state_11963;var statearr_11982_12023 = state_11963__$1;(statearr_11982_12023[(2)] = null);
(statearr_11982_12023[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11964 === (2)))
{var state_11963__$1 = state_11963;if(true)
{var statearr_11983_12024 = state_11963__$1;(statearr_11983_12024[(1)] = (4));
} else
{var statearr_11984_12025 = state_11963__$1;(statearr_11984_12025[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11964 === (23)))
{var inst_11900 = (state_11963[(10)]);var state_11963__$1 = state_11963;var statearr_11985_12026 = state_11963__$1;(statearr_11985_12026[(2)] = inst_11900);
(statearr_11985_12026[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11964 === (19)))
{var inst_11923 = (state_11963[(16)]);var inst_11929 = (state_11963[(2)]);var inst_11930 = cljs.core.deref.call(null,state);var inst_11931 = cljs.core.first.call(null,inst_11923);var inst_11932 = cljs.core.last.call(null,inst_11923);var inst_11933 = new cljs.core.Keyword(null,"things-vec","things-vec",-1363222375).cljs$core$IFn$_invoke$arity$1(inst_11932);var inst_11934 = cljs.core.partial.call(null,growingtree_app.controllers.api.api_event,el,inst_11931,inst_11932);var inst_11935 = cljs.core.swap_BANG_.call(null,state,inst_11934);var inst_11936 = cljs.core.deref.call(null,state);var inst_11937 = growingtree_app.controllers.post_api.post_api_event_BANG_.call(null,el,inst_11931,inst_11932,inst_11930,inst_11936);var state_11963__$1 = (function (){var statearr_11986 = state_11963;(statearr_11986[(17)] = inst_11929);
(statearr_11986[(18)] = inst_11933);
(statearr_11986[(19)] = inst_11935);
return statearr_11986;
})();var statearr_11987_12027 = state_11963__$1;(statearr_11987_12027[(2)] = inst_11937);
(statearr_11987_12027[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11964 === (11)))
{var inst_11905 = (state_11963[(13)]);var inst_11907 = cljs.core.pr_str.call(null,inst_11905);var inst_11908 = growingtree_app.utils.mprint.call(null,"Controls Verbose: ",inst_11907);var state_11963__$1 = state_11963;var statearr_11988_12028 = state_11963__$1;(statearr_11988_12028[(2)] = inst_11908);
(statearr_11988_12028[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11964 === (9)))
{var inst_11901 = (state_11963[(9)]);var inst_11894 = (state_11963[(12)]);var inst_11920 = cljs.core._EQ_.call(null,inst_11901,inst_11894);var state_11963__$1 = state_11963;if(inst_11920)
{var statearr_11989_12029 = state_11963__$1;(statearr_11989_12029[(1)] = (14));
} else
{var statearr_11990_12030 = state_11963__$1;(statearr_11990_12030[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11964 === (5)))
{var state_11963__$1 = state_11963;var statearr_11991_12031 = state_11963__$1;(statearr_11991_12031[(2)] = null);
(statearr_11991_12031[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11964 === (14)))
{var inst_11899 = (state_11963[(7)]);var inst_11923 = cljs.core.nth.call(null,inst_11899,(0),null);var state_11963__$1 = (function (){var statearr_11992 = state_11963;(statearr_11992[(16)] = inst_11923);
return statearr_11992;
})();if(cljs.core.truth_(growingtree_app.utils.logging_enabled_QMARK_))
{var statearr_11993_12032 = state_11963__$1;(statearr_11993_12032[(1)] = (17));
} else
{var statearr_11994_12033 = state_11963__$1;(statearr_11994_12033[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11964 === (16)))
{var inst_11953 = (state_11963[(2)]);var state_11963__$1 = state_11963;var statearr_11995_12034 = state_11963__$1;(statearr_11995_12034[(2)] = inst_11953);
(statearr_11995_12034[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11964 === (10)))
{var inst_11955 = (state_11963[(2)]);var state_11963__$1 = (function (){var statearr_11996 = state_11963;(statearr_11996[(20)] = inst_11955);
return statearr_11996;
})();var statearr_11997_12035 = state_11963__$1;(statearr_11997_12035[(2)] = null);
(statearr_11997_12035[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11964 === (18)))
{var state_11963__$1 = state_11963;var statearr_11998_12036 = state_11963__$1;(statearr_11998_12036[(2)] = null);
(statearr_11998_12036[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11964 === (8)))
{var inst_11899 = (state_11963[(7)]);var inst_11905 = cljs.core.nth.call(null,inst_11899,(0),null);var state_11963__$1 = (function (){var statearr_11999 = state_11963;(statearr_11999[(13)] = inst_11905);
return statearr_11999;
})();if(cljs.core.truth_(growingtree_app.utils.logging_enabled_QMARK_))
{var statearr_12000_12037 = state_11963__$1;(statearr_12000_12037[(1)] = (11));
} else
{var statearr_12001_12038 = state_11963__$1;(statearr_12001_12038[(1)] = (12));
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
var state_machine__6281__auto____0 = (function (){var statearr_12005 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12005[(0)] = state_machine__6281__auto__);
(statearr_12005[(1)] = (1));
return statearr_12005;
});
var state_machine__6281__auto____1 = (function (state_11963){while(true){
var ret_value__6282__auto__ = (function (){try{while(true){
var result__6283__auto__ = switch__6280__auto__.call(null,state_11963);if(cljs.core.keyword_identical_QMARK_.call(null,result__6283__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6283__auto__;
}
break;
}
}catch (e12006){if((e12006 instanceof Object))
{var ex__6284__auto__ = e12006;var statearr_12007_12039 = state_11963;(statearr_12007_12039[(5)] = ex__6284__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11963);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e12006;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6282__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12040 = state_11963;
state_11963 = G__12040;
continue;
}
} else
{return ret_value__6282__auto__;
}
break;
}
});
state_machine__6281__auto__ = function(state_11963){
switch(arguments.length){
case 0:
return state_machine__6281__auto____0.call(this);
case 1:
return state_machine__6281__auto____1.call(this,state_11963);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6281__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6281__auto____0;
state_machine__6281__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6281__auto____1;
return state_machine__6281__auto__;
})()
;})(switch__6280__auto__,c__6345__auto__,comms,history))
})();var state__6347__auto__ = (function (){var statearr_12008 = f__6346__auto__.call(null);(statearr_12008[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6345__auto__);
return statearr_12008;
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
var seq__12045 = cljs.core.seq.call(null,channels);var chunk__12046 = null;var count__12047 = (0);var i__12048 = (0);while(true){
if((i__12048 < count__12047))
{var channel = cljs.core._nth.call(null,chunk__12046,i__12048);growingtree_app.api.kandan.subscribe_BANG_.call(null,kandan_client,("/channels/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(channel)),new cljs.core.Keyword(null,"api","api",-899839580).cljs$core$IFn$_invoke$arity$1(comms));
{
var G__12049 = seq__12045;
var G__12050 = chunk__12046;
var G__12051 = count__12047;
var G__12052 = (i__12048 + (1));
seq__12045 = G__12049;
chunk__12046 = G__12050;
count__12047 = G__12051;
i__12048 = G__12052;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__12045);if(temp__4126__auto__)
{var seq__12045__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12045__$1))
{var c__4299__auto__ = cljs.core.chunk_first.call(null,seq__12045__$1);{
var G__12053 = cljs.core.chunk_rest.call(null,seq__12045__$1);
var G__12054 = c__4299__auto__;
var G__12055 = cljs.core.count.call(null,c__4299__auto__);
var G__12056 = (0);
seq__12045 = G__12053;
chunk__12046 = G__12054;
count__12047 = G__12055;
i__12048 = G__12056;
continue;
}
} else
{var channel = cljs.core.first.call(null,seq__12045__$1);growingtree_app.api.kandan.subscribe_BANG_.call(null,kandan_client,("/channels/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(channel)),new cljs.core.Keyword(null,"api","api",-899839580).cljs$core$IFn$_invoke$arity$1(comms));
{
var G__12057 = cljs.core.next.call(null,seq__12045__$1);
var G__12058 = null;
var G__12059 = (0);
var G__12060 = (0);
seq__12045 = G__12057;
chunk__12046 = G__12058;
count__12047 = G__12059;
i__12048 = G__12060;
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