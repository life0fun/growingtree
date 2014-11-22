// Compiled by ClojureScript 0.0-2277
goog.provide('growingtree_app.core');
goog.require('cljs.core');
goog.require('growingtree_app.useful');
goog.require('growingtree_app.utils');
goog.require('cljs.core.async');
goog.require('growingtree_app.controllers.api');
goog.require('growingtree_app.controllers.requester');
goog.require('om.dom');
goog.require('growingtree_app.components.app');
goog.require('cljs.core.async');
goog.require('growingtree_app.routes');
goog.require('dommy.core');
goog.require('growingtree_app.controllers.post_api');
goog.require('om.dom');
goog.require('growingtree_app.ui');
goog.require('growingtree_app.api.kandan');
goog.require('growingtree_app.api.mock');
goog.require('growingtree_app.controllers.states');
goog.require('growingtree_app.controllers.states');
goog.require('cljs.core.async');
goog.require('growingtree_app.components.login');
goog.require('growingtree_app.mock_data');
goog.require('growingtree_app.datetime');
goog.require('growingtree_app.datetime');
goog.require('growingtree_app.useful');
goog.require('growingtree_app.utils');
goog.require('clojure.string');
goog.require('om.core');
goog.require('growingtree_app.components.login');
goog.require('dommy.core');
goog.require('growingtree_app.mock_data');
goog.require('om.core');
goog.require('growingtree_app.controllers.post_api');
goog.require('growingtree_app.routes');
goog.require('growingtree_app.controllers.requester');
goog.require('growingtree_app.ui');
goog.require('growingtree_app.controllers.api');
goog.require('growingtree_app.utils');
goog.require('growingtree_app.useful');
goog.require('clojure.string');
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
growingtree_app.core.detach_login_show_app = (function detach_login_show_app(){var login_el = document.getElementById("login");growingtree_app.ui.hide_div.call(null,"#login");
growingtree_app.ui.show_div.call(null,"#app");
return om.core.detach_root.call(null,login_el);
});
growingtree_app.core.process_control_event = (function (){var method_table__4409__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__4410__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__4411__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__4412__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__4413__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("process-control-event",((function (method_table__4409__auto__,prefer_table__4410__auto__,method_cache__4411__auto__,cached_hierarchy__4412__auto__,hierarchy__4413__auto__){
return (function (app_el,state,msg_type,msg_data){return msg_type;
});})(method_table__4409__auto__,prefer_table__4410__auto__,method_cache__4411__auto__,cached_hierarchy__4412__auto__,hierarchy__4413__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4413__auto__,method_table__4409__auto__,prefer_table__4410__auto__,method_cache__4411__auto__,cached_hierarchy__4412__auto__));
})();
cljs.core._add_method.call(null,growingtree_app.core.process_control_event,new cljs.core.Keyword(null,"login-success","login-success",1089283105),(function (el,state,msg_type,msg_data){return growingtree_app.core.detach_login_show_app.call(null);
}));
cljs.core._add_method.call(null,growingtree_app.core.process_control_event,new cljs.core.Keyword(null,"login-error","login-error",-1290265439),(function (el,state,msg_type,msg_data){console.log(cljs.core.pr_str.call(null,"login error ",msg_data));
return growingtree_app.ui.set_text.call(null,"#login-error",msg_data);
}));
cljs.core._add_method.call(null,growingtree_app.core.process_control_event,new cljs.core.Keyword(null,"default","default",-1987822328),(function (el,state,msg_type,msg_data){var previous_state = cljs.core.deref.call(null,state);cljs.core.swap_BANG_.call(null,state,cljs.core.partial.call(null,growingtree_app.controllers.states.transition,el,msg_type,msg_data));
return growingtree_app.controllers.requester.request.call(null,el,msg_type,msg_data,previous_state,cljs.core.deref.call(null,state));
}));
cljs.core._add_method.call(null,growingtree_app.core.process_control_event,new cljs.core.Keyword(null,"popstate","popstate",942216014),(function (el,state,msg_type,msg_data){var previous_state = cljs.core.deref.call(null,state);return cljs.core.swap_BANG_.call(null,state,cljs.core.partial.call(null,growingtree_app.controllers.states.transition,el,msg_type,msg_data));
}));
growingtree_app.core.process_api_event = (function process_api_event(el,state,msg_type,msg_data){var previous_state = cljs.core.deref.call(null,state);return cljs.core.swap_BANG_.call(null,state,cljs.core.partial.call(null,growingtree_app.controllers.states.transition,el,msg_type,msg_data));
});
growingtree_app.core.main = (function main(state){var comms = new cljs.core.Keyword(null,"comms","comms",460172477).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state));var history = (function (){var or__3543__auto__ = growingtree_app.core.history;if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
})();var app_el = document.getElementById("app");var login_el = document.getElementById("login");var hist_el = document.getElementById("history-container");growingtree_app.routes.define_routes_BANG_.call(null,state,hist_el);
dommy.core.listen_BANG_.call(null,window,new cljs.core.Keyword(null,"popstate","popstate",942216014),cljs.core.partial.call(null,growingtree_app.routes.onpopstate,new cljs.core.Keyword(null,"controls","controls",1340701452).cljs$core$IFn$_invoke$arity$1(comms)));
om.core.root.call(null,growingtree_app.components.login.login,state,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),login_el,new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"comms","comms",460172477),comms], null)], null));
om.core.root.call(null,growingtree_app.components.app.app,state,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),app_el,new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"comms","comms",460172477),comms], null)], null));
var c__6345__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6345__auto__,comms,history,app_el,login_el,hist_el){
return (function (){var f__6346__auto__ = (function (){var switch__6280__auto__ = ((function (c__6345__auto__,comms,history,app_el,login_el,hist_el){
return (function (state_11987){var state_val_11988 = (state_11987[(1)]);if((state_val_11988 === (7)))
{var inst_11944 = (state_11987[(7)]);var inst_11936 = (state_11987[(8)]);var inst_11942 = (state_11987[(9)]);var inst_11942__$1 = (state_11987[(2)]);var inst_11943 = cljs.core.nth.call(null,inst_11942__$1,(0),null);var inst_11944__$1 = cljs.core.nth.call(null,inst_11942__$1,(1),null);var inst_11945 = cljs.core._EQ_.call(null,inst_11944__$1,inst_11936);var state_11987__$1 = (function (){var statearr_11989 = state_11987;(statearr_11989[(7)] = inst_11944__$1);
(statearr_11989[(10)] = inst_11943);
(statearr_11989[(9)] = inst_11942__$1);
return statearr_11989;
})();if(inst_11945)
{var statearr_11990_12023 = state_11987__$1;(statearr_11990_12023[(1)] = (8));
} else
{var statearr_11991_12024 = state_11987__$1;(statearr_11991_12024[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11988 === (1)))
{var state_11987__$1 = state_11987;var statearr_11992_12025 = state_11987__$1;(statearr_11992_12025[(2)] = null);
(statearr_11992_12025[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11988 === (4)))
{var inst_11936 = (state_11987[(8)]);var inst_11937 = (state_11987[(11)]);var inst_11938 = (state_11987[(12)]);var inst_11936__$1 = new cljs.core.Keyword(null,"controls","controls",1340701452).cljs$core$IFn$_invoke$arity$1(comms);var inst_11937__$1 = new cljs.core.Keyword(null,"api","api",-899839580).cljs$core$IFn$_invoke$arity$1(comms);var inst_11938__$1 = cljs.core.async.timeout.call(null,(30000));var inst_11939 = [inst_11936__$1,inst_11937__$1,inst_11938__$1];var inst_11940 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_11939,null));var state_11987__$1 = (function (){var statearr_11993 = state_11987;(statearr_11993[(8)] = inst_11936__$1);
(statearr_11993[(11)] = inst_11937__$1);
(statearr_11993[(12)] = inst_11938__$1);
return statearr_11993;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_11987__$1,(7),inst_11940);
} else
{if((state_val_11988 === (15)))
{var inst_11944 = (state_11987[(7)]);var inst_11969 = cljs.core._EQ_.call(null,inst_11944,new cljs.core.Keyword(null,"default","default",-1987822328));var state_11987__$1 = state_11987;if(inst_11969)
{var statearr_11994_12026 = state_11987__$1;(statearr_11994_12026[(1)] = (17));
} else
{var statearr_11995_12027 = state_11987__$1;(statearr_11995_12027[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11988 === (13)))
{var inst_11977 = (state_11987[(2)]);var state_11987__$1 = state_11987;var statearr_11996_12028 = state_11987__$1;(statearr_11996_12028[(2)] = inst_11977);
(statearr_11996_12028[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11988 === (6)))
{var inst_11983 = (state_11987[(2)]);var state_11987__$1 = state_11987;var statearr_11997_12029 = state_11987__$1;(statearr_11997_12029[(2)] = inst_11983);
(statearr_11997_12029[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11988 === (17)))
{var inst_11943 = (state_11987[(10)]);var state_11987__$1 = state_11987;var statearr_11998_12030 = state_11987__$1;(statearr_11998_12030[(2)] = inst_11943);
(statearr_11998_12030[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11988 === (3)))
{var inst_11985 = (state_11987[(2)]);var state_11987__$1 = state_11987;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11987__$1,inst_11985);
} else
{if((state_val_11988 === (12)))
{var inst_11944 = (state_11987[(7)]);var inst_11938 = (state_11987[(12)]);var inst_11963 = cljs.core._EQ_.call(null,inst_11944,inst_11938);var state_11987__$1 = state_11987;if(inst_11963)
{var statearr_11999_12031 = state_11987__$1;(statearr_11999_12031[(1)] = (14));
} else
{var statearr_12000_12032 = state_11987__$1;(statearr_12000_12032[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11988 === (2)))
{var state_11987__$1 = state_11987;if(true)
{var statearr_12001_12033 = state_11987__$1;(statearr_12001_12033[(1)] = (4));
} else
{var statearr_12002_12034 = state_11987__$1;(statearr_12002_12034[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11988 === (19)))
{var inst_11973 = (state_11987[(2)]);var state_11987__$1 = state_11987;var statearr_12003_12035 = state_11987__$1;(statearr_12003_12035[(2)] = inst_11973);
(statearr_12003_12035[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11988 === (11)))
{var inst_11942 = (state_11987[(9)]);var inst_11957 = cljs.core.nth.call(null,inst_11942,(0),null);var inst_11958 = cljs.core.deref.call(null,state);var inst_11959 = cljs.core.first.call(null,inst_11957);var inst_11960 = cljs.core.last.call(null,inst_11957);var inst_11961 = growingtree_app.core.process_api_event.call(null,app_el,state,inst_11959,inst_11960);var state_11987__$1 = (function (){var statearr_12004 = state_11987;(statearr_12004[(13)] = inst_11958);
return statearr_12004;
})();var statearr_12005_12036 = state_11987__$1;(statearr_12005_12036[(2)] = inst_11961);
(statearr_12005_12036[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11988 === (9)))
{var inst_11944 = (state_11987[(7)]);var inst_11937 = (state_11987[(11)]);var inst_11954 = cljs.core._EQ_.call(null,inst_11944,inst_11937);var state_11987__$1 = state_11987;if(inst_11954)
{var statearr_12006_12037 = state_11987__$1;(statearr_12006_12037[(1)] = (11));
} else
{var statearr_12007_12038 = state_11987__$1;(statearr_12007_12038[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11988 === (5)))
{var state_11987__$1 = state_11987;var statearr_12008_12039 = state_11987__$1;(statearr_12008_12039[(2)] = null);
(statearr_12008_12039[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11988 === (14)))
{var inst_11965 = cljs.core.deref.call(null,history);var inst_11966 = cljs.core.pr_str.call(null,inst_11965);var inst_11967 = growingtree_app.utils.mprint.call(null,inst_11966);var state_11987__$1 = state_11987;var statearr_12009_12040 = state_11987__$1;(statearr_12009_12040[(2)] = inst_11967);
(statearr_12009_12040[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11988 === (16)))
{var inst_11975 = (state_11987[(2)]);var state_11987__$1 = state_11987;var statearr_12010_12041 = state_11987__$1;(statearr_12010_12041[(2)] = inst_11975);
(statearr_12010_12041[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11988 === (10)))
{var inst_11979 = (state_11987[(2)]);var state_11987__$1 = (function (){var statearr_12011 = state_11987;(statearr_12011[(14)] = inst_11979);
return statearr_12011;
})();var statearr_12012_12042 = state_11987__$1;(statearr_12012_12042[(2)] = null);
(statearr_12012_12042[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11988 === (18)))
{var state_11987__$1 = state_11987;var statearr_12013_12043 = state_11987__$1;(statearr_12013_12043[(2)] = null);
(statearr_12013_12043[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11988 === (8)))
{var inst_11942 = (state_11987[(9)]);var inst_11948 = cljs.core.nth.call(null,inst_11942,(0),null);var inst_11949 = cljs.core.deref.call(null,state);var inst_11950 = cljs.core.first.call(null,inst_11948);var inst_11951 = cljs.core.last.call(null,inst_11948);var inst_11952 = growingtree_app.core.process_control_event.call(null,app_el,state,inst_11950,inst_11951);var state_11987__$1 = (function (){var statearr_12014 = state_11987;(statearr_12014[(15)] = inst_11949);
return statearr_12014;
})();var statearr_12015_12044 = state_11987__$1;(statearr_12015_12044[(2)] = inst_11952);
(statearr_12015_12044[(1)] = (10));
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
});})(c__6345__auto__,comms,history,app_el,login_el,hist_el))
;return ((function (switch__6280__auto__,c__6345__auto__,comms,history,app_el,login_el,hist_el){
return (function() {
var state_machine__6281__auto__ = null;
var state_machine__6281__auto____0 = (function (){var statearr_12019 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12019[(0)] = state_machine__6281__auto__);
(statearr_12019[(1)] = (1));
return statearr_12019;
});
var state_machine__6281__auto____1 = (function (state_11987){while(true){
var ret_value__6282__auto__ = (function (){try{while(true){
var result__6283__auto__ = switch__6280__auto__.call(null,state_11987);if(cljs.core.keyword_identical_QMARK_.call(null,result__6283__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6283__auto__;
}
break;
}
}catch (e12020){if((e12020 instanceof Object))
{var ex__6284__auto__ = e12020;var statearr_12021_12045 = state_11987;(statearr_12021_12045[(5)] = ex__6284__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11987);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e12020;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6282__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12046 = state_11987;
state_11987 = G__12046;
continue;
}
} else
{return ret_value__6282__auto__;
}
break;
}
});
state_machine__6281__auto__ = function(state_11987){
switch(arguments.length){
case 0:
return state_machine__6281__auto____0.call(this);
case 1:
return state_machine__6281__auto____1.call(this,state_11987);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6281__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6281__auto____0;
state_machine__6281__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6281__auto____1;
return state_machine__6281__auto__;
})()
;})(switch__6280__auto__,c__6345__auto__,comms,history,app_el,login_el,hist_el))
})();var state__6347__auto__ = (function (){var statearr_12022 = f__6346__auto__.call(null);(statearr_12022[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6345__auto__);
return statearr_12022;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6347__auto__);
});})(c__6345__auto__,comms,history,app_el,login_el,hist_el))
);
return c__6345__auto__;
});
growingtree_app.core.init_state_BANG_ = (function init_state_BANG_(){var comms = new cljs.core.Keyword(null,"comms","comms",460172477).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,growingtree_app.core.app_state));growingtree_app.core.main.call(null,growingtree_app.core.app_state);
if(cljs.core.truth_(new cljs.core.Keyword(null,"restore-state?","restore-state?",-1143283431).cljs$core$IFn$_invoke$arity$1(growingtree_app.utils.initial_query_map)))
{cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"controls","controls",1340701452).cljs$core$IFn$_invoke$arity$1(comms),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-restored","state-restored",450621293)], null));
} else
{}
if(cljs.core.truth_(new cljs.core.Keyword(null,"kandan-client?","kandan-client?",998337099).cljs$core$IFn$_invoke$arity$1(growingtree_app.utils.initial_query_map)))
{var api_key = new cljs.core.Keyword(null,"kandan-api-key","kandan-api-key",1285411267).cljs$core$IFn$_invoke$arity$1(growingtree_app.utils.initial_query_map);var kandan_client = growingtree_app.api.kandan.make_client.call(null,api_key,"http://localhost:3000/remote/faye");var channels = new cljs.core.Keyword(null,"kandan-channels","kandan-channels",-1827680736).cljs$core$IFn$_invoke$arity$1(growingtree_app.utils.initial_query_map);cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"controls","controls",1340701452).cljs$core$IFn$_invoke$arity$1(comms),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"api-key-updated","api-key-updated",-1848658586),api_key], null));
var seq__12051 = cljs.core.seq.call(null,channels);var chunk__12052 = null;var count__12053 = (0);var i__12054 = (0);while(true){
if((i__12054 < count__12053))
{var channel = cljs.core._nth.call(null,chunk__12052,i__12054);growingtree_app.api.kandan.subscribe_BANG_.call(null,kandan_client,("/channels/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(channel)),new cljs.core.Keyword(null,"api","api",-899839580).cljs$core$IFn$_invoke$arity$1(comms));
{
var G__12055 = seq__12051;
var G__12056 = chunk__12052;
var G__12057 = count__12053;
var G__12058 = (i__12054 + (1));
seq__12051 = G__12055;
chunk__12052 = G__12056;
count__12053 = G__12057;
i__12054 = G__12058;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__12051);if(temp__4126__auto__)
{var seq__12051__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12051__$1))
{var c__4299__auto__ = cljs.core.chunk_first.call(null,seq__12051__$1);{
var G__12059 = cljs.core.chunk_rest.call(null,seq__12051__$1);
var G__12060 = c__4299__auto__;
var G__12061 = cljs.core.count.call(null,c__4299__auto__);
var G__12062 = (0);
seq__12051 = G__12059;
chunk__12052 = G__12060;
count__12053 = G__12061;
i__12054 = G__12062;
continue;
}
} else
{var channel = cljs.core.first.call(null,seq__12051__$1);growingtree_app.api.kandan.subscribe_BANG_.call(null,kandan_client,("/channels/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(channel)),new cljs.core.Keyword(null,"api","api",-899839580).cljs$core$IFn$_invoke$arity$1(comms));
{
var G__12063 = cljs.core.next.call(null,seq__12051__$1);
var G__12064 = null;
var G__12065 = (0);
var G__12066 = (0);
seq__12051 = G__12063;
chunk__12052 = G__12064;
count__12053 = G__12065;
i__12054 = G__12066;
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