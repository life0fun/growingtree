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
return (function (state_11991){var state_val_11992 = (state_11991[(1)]);if((state_val_11992 === (7)))
{var inst_11944 = (state_11991[(7)]);var inst_11946 = (state_11991[(8)]);var inst_11938 = (state_11991[(9)]);var inst_11944__$1 = (state_11991[(2)]);var inst_11945 = cljs.core.nth.call(null,inst_11944__$1,(0),null);var inst_11946__$1 = cljs.core.nth.call(null,inst_11944__$1,(1),null);var inst_11947 = cljs.core._EQ_.call(null,inst_11946__$1,inst_11938);var state_11991__$1 = (function (){var statearr_11993 = state_11991;(statearr_11993[(7)] = inst_11944__$1);
(statearr_11993[(8)] = inst_11946__$1);
(statearr_11993[(10)] = inst_11945);
return statearr_11993;
})();if(inst_11947)
{var statearr_11994_12027 = state_11991__$1;(statearr_11994_12027[(1)] = (8));
} else
{var statearr_11995_12028 = state_11991__$1;(statearr_11995_12028[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11992 === (1)))
{var state_11991__$1 = state_11991;var statearr_11996_12029 = state_11991__$1;(statearr_11996_12029[(2)] = null);
(statearr_11996_12029[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11992 === (4)))
{var inst_11940 = (state_11991[(11)]);var inst_11939 = (state_11991[(12)]);var inst_11938 = (state_11991[(9)]);var inst_11938__$1 = new cljs.core.Keyword(null,"controls","controls",1340701452).cljs$core$IFn$_invoke$arity$1(comms);var inst_11939__$1 = new cljs.core.Keyword(null,"api","api",-899839580).cljs$core$IFn$_invoke$arity$1(comms);var inst_11940__$1 = cljs.core.async.timeout.call(null,(30000));var inst_11941 = [inst_11938__$1,inst_11939__$1,inst_11940__$1];var inst_11942 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_11941,null));var state_11991__$1 = (function (){var statearr_11997 = state_11991;(statearr_11997[(11)] = inst_11940__$1);
(statearr_11997[(12)] = inst_11939__$1);
(statearr_11997[(9)] = inst_11938__$1);
return statearr_11997;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_11991__$1,(7),inst_11942);
} else
{if((state_val_11992 === (15)))
{var inst_11946 = (state_11991[(8)]);var inst_11973 = cljs.core._EQ_.call(null,inst_11946,new cljs.core.Keyword(null,"default","default",-1987822328));var state_11991__$1 = state_11991;if(inst_11973)
{var statearr_11998_12030 = state_11991__$1;(statearr_11998_12030[(1)] = (17));
} else
{var statearr_11999_12031 = state_11991__$1;(statearr_11999_12031[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11992 === (13)))
{var inst_11981 = (state_11991[(2)]);var state_11991__$1 = state_11991;var statearr_12000_12032 = state_11991__$1;(statearr_12000_12032[(2)] = inst_11981);
(statearr_12000_12032[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11992 === (6)))
{var inst_11987 = (state_11991[(2)]);var state_11991__$1 = state_11991;var statearr_12001_12033 = state_11991__$1;(statearr_12001_12033[(2)] = inst_11987);
(statearr_12001_12033[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11992 === (17)))
{var inst_11945 = (state_11991[(10)]);var state_11991__$1 = state_11991;var statearr_12002_12034 = state_11991__$1;(statearr_12002_12034[(2)] = inst_11945);
(statearr_12002_12034[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11992 === (3)))
{var inst_11989 = (state_11991[(2)]);var state_11991__$1 = state_11991;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11991__$1,inst_11989);
} else
{if((state_val_11992 === (12)))
{var inst_11940 = (state_11991[(11)]);var inst_11946 = (state_11991[(8)]);var inst_11967 = cljs.core._EQ_.call(null,inst_11946,inst_11940);var state_11991__$1 = state_11991;if(inst_11967)
{var statearr_12003_12035 = state_11991__$1;(statearr_12003_12035[(1)] = (14));
} else
{var statearr_12004_12036 = state_11991__$1;(statearr_12004_12036[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11992 === (2)))
{var state_11991__$1 = state_11991;if(true)
{var statearr_12005_12037 = state_11991__$1;(statearr_12005_12037[(1)] = (4));
} else
{var statearr_12006_12038 = state_11991__$1;(statearr_12006_12038[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11992 === (19)))
{var inst_11977 = (state_11991[(2)]);var state_11991__$1 = state_11991;var statearr_12007_12039 = state_11991__$1;(statearr_12007_12039[(2)] = inst_11977);
(statearr_12007_12039[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11992 === (11)))
{var inst_11944 = (state_11991[(7)]);var inst_11959 = cljs.core.nth.call(null,inst_11944,(0),null);var inst_11960 = cljs.core.deref.call(null,state);var inst_11961 = cljs.core.first.call(null,inst_11959);var inst_11962 = cljs.core.last.call(null,inst_11959);var inst_11963 = cljs.core.pr_str.call(null,"api msg ",inst_11959);var inst_11964 = console.log(inst_11963);var inst_11965 = growingtree_app.core.process_api_event.call(null,app_el,state,inst_11961,inst_11962);var state_11991__$1 = (function (){var statearr_12008 = state_11991;(statearr_12008[(13)] = inst_11964);
(statearr_12008[(14)] = inst_11960);
return statearr_12008;
})();var statearr_12009_12040 = state_11991__$1;(statearr_12009_12040[(2)] = inst_11965);
(statearr_12009_12040[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11992 === (9)))
{var inst_11939 = (state_11991[(12)]);var inst_11946 = (state_11991[(8)]);var inst_11956 = cljs.core._EQ_.call(null,inst_11946,inst_11939);var state_11991__$1 = state_11991;if(inst_11956)
{var statearr_12010_12041 = state_11991__$1;(statearr_12010_12041[(1)] = (11));
} else
{var statearr_12011_12042 = state_11991__$1;(statearr_12011_12042[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11992 === (5)))
{var state_11991__$1 = state_11991;var statearr_12012_12043 = state_11991__$1;(statearr_12012_12043[(2)] = null);
(statearr_12012_12043[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11992 === (14)))
{var inst_11969 = cljs.core.deref.call(null,history);var inst_11970 = cljs.core.pr_str.call(null,inst_11969);var inst_11971 = growingtree_app.utils.mprint.call(null,inst_11970);var state_11991__$1 = state_11991;var statearr_12013_12044 = state_11991__$1;(statearr_12013_12044[(2)] = inst_11971);
(statearr_12013_12044[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11992 === (16)))
{var inst_11979 = (state_11991[(2)]);var state_11991__$1 = state_11991;var statearr_12014_12045 = state_11991__$1;(statearr_12014_12045[(2)] = inst_11979);
(statearr_12014_12045[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11992 === (10)))
{var inst_11983 = (state_11991[(2)]);var state_11991__$1 = (function (){var statearr_12015 = state_11991;(statearr_12015[(15)] = inst_11983);
return statearr_12015;
})();var statearr_12016_12046 = state_11991__$1;(statearr_12016_12046[(2)] = null);
(statearr_12016_12046[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11992 === (18)))
{var state_11991__$1 = state_11991;var statearr_12017_12047 = state_11991__$1;(statearr_12017_12047[(2)] = null);
(statearr_12017_12047[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11992 === (8)))
{var inst_11944 = (state_11991[(7)]);var inst_11950 = cljs.core.nth.call(null,inst_11944,(0),null);var inst_11951 = cljs.core.deref.call(null,state);var inst_11952 = cljs.core.first.call(null,inst_11950);var inst_11953 = cljs.core.last.call(null,inst_11950);var inst_11954 = growingtree_app.core.process_control_event.call(null,app_el,state,inst_11952,inst_11953);var state_11991__$1 = (function (){var statearr_12018 = state_11991;(statearr_12018[(16)] = inst_11951);
return statearr_12018;
})();var statearr_12019_12048 = state_11991__$1;(statearr_12019_12048[(2)] = inst_11954);
(statearr_12019_12048[(1)] = (10));
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
var state_machine__6281__auto____0 = (function (){var statearr_12023 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12023[(0)] = state_machine__6281__auto__);
(statearr_12023[(1)] = (1));
return statearr_12023;
});
var state_machine__6281__auto____1 = (function (state_11991){while(true){
var ret_value__6282__auto__ = (function (){try{while(true){
var result__6283__auto__ = switch__6280__auto__.call(null,state_11991);if(cljs.core.keyword_identical_QMARK_.call(null,result__6283__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6283__auto__;
}
break;
}
}catch (e12024){if((e12024 instanceof Object))
{var ex__6284__auto__ = e12024;var statearr_12025_12049 = state_11991;(statearr_12025_12049[(5)] = ex__6284__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11991);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e12024;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6282__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12050 = state_11991;
state_11991 = G__12050;
continue;
}
} else
{return ret_value__6282__auto__;
}
break;
}
});
state_machine__6281__auto__ = function(state_11991){
switch(arguments.length){
case 0:
return state_machine__6281__auto____0.call(this);
case 1:
return state_machine__6281__auto____1.call(this,state_11991);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6281__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6281__auto____0;
state_machine__6281__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6281__auto____1;
return state_machine__6281__auto__;
})()
;})(switch__6280__auto__,c__6345__auto__,comms,history,app_el,login_el,hist_el))
})();var state__6347__auto__ = (function (){var statearr_12026 = f__6346__auto__.call(null);(statearr_12026[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6345__auto__);
return statearr_12026;
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
var seq__12055 = cljs.core.seq.call(null,channels);var chunk__12056 = null;var count__12057 = (0);var i__12058 = (0);while(true){
if((i__12058 < count__12057))
{var channel = cljs.core._nth.call(null,chunk__12056,i__12058);growingtree_app.api.kandan.subscribe_BANG_.call(null,kandan_client,("/channels/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(channel)),new cljs.core.Keyword(null,"api","api",-899839580).cljs$core$IFn$_invoke$arity$1(comms));
{
var G__12059 = seq__12055;
var G__12060 = chunk__12056;
var G__12061 = count__12057;
var G__12062 = (i__12058 + (1));
seq__12055 = G__12059;
chunk__12056 = G__12060;
count__12057 = G__12061;
i__12058 = G__12062;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__12055);if(temp__4126__auto__)
{var seq__12055__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12055__$1))
{var c__4299__auto__ = cljs.core.chunk_first.call(null,seq__12055__$1);{
var G__12063 = cljs.core.chunk_rest.call(null,seq__12055__$1);
var G__12064 = c__4299__auto__;
var G__12065 = cljs.core.count.call(null,c__4299__auto__);
var G__12066 = (0);
seq__12055 = G__12063;
chunk__12056 = G__12064;
count__12057 = G__12065;
i__12058 = G__12066;
continue;
}
} else
{var channel = cljs.core.first.call(null,seq__12055__$1);growingtree_app.api.kandan.subscribe_BANG_.call(null,kandan_client,("/channels/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(channel)),new cljs.core.Keyword(null,"api","api",-899839580).cljs$core$IFn$_invoke$arity$1(comms));
{
var G__12067 = cljs.core.next.call(null,seq__12055__$1);
var G__12068 = null;
var G__12069 = (0);
var G__12070 = (0);
seq__12055 = G__12067;
chunk__12056 = G__12068;
count__12057 = G__12069;
i__12058 = G__12070;
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