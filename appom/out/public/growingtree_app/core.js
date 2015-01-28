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
return (function (state_12015){var state_val_12016 = (state_12015[(1)]);if((state_val_12016 === (7)))
{var inst_11972 = (state_12015[(7)]);var inst_11964 = (state_12015[(8)]);var inst_11970 = (state_12015[(9)]);var inst_11970__$1 = (state_12015[(2)]);var inst_11971 = cljs.core.nth.call(null,inst_11970__$1,(0),null);var inst_11972__$1 = cljs.core.nth.call(null,inst_11970__$1,(1),null);var inst_11973 = cljs.core._EQ_.call(null,inst_11972__$1,inst_11964);var state_12015__$1 = (function (){var statearr_12017 = state_12015;(statearr_12017[(7)] = inst_11972__$1);
(statearr_12017[(10)] = inst_11971);
(statearr_12017[(9)] = inst_11970__$1);
return statearr_12017;
})();if(inst_11973)
{var statearr_12018_12051 = state_12015__$1;(statearr_12018_12051[(1)] = (8));
} else
{var statearr_12019_12052 = state_12015__$1;(statearr_12019_12052[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12016 === (1)))
{var state_12015__$1 = state_12015;var statearr_12020_12053 = state_12015__$1;(statearr_12020_12053[(2)] = null);
(statearr_12020_12053[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12016 === (4)))
{var inst_11964 = (state_12015[(8)]);var inst_11966 = (state_12015[(11)]);var inst_11965 = (state_12015[(12)]);var inst_11964__$1 = new cljs.core.Keyword(null,"controls","controls",1340701452).cljs$core$IFn$_invoke$arity$1(comms);var inst_11965__$1 = new cljs.core.Keyword(null,"api","api",-899839580).cljs$core$IFn$_invoke$arity$1(comms);var inst_11966__$1 = cljs.core.async.timeout.call(null,(30000));var inst_11967 = [inst_11964__$1,inst_11965__$1,inst_11966__$1];var inst_11968 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_11967,null));var state_12015__$1 = (function (){var statearr_12021 = state_12015;(statearr_12021[(8)] = inst_11964__$1);
(statearr_12021[(11)] = inst_11966__$1);
(statearr_12021[(12)] = inst_11965__$1);
return statearr_12021;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_12015__$1,(7),inst_11968);
} else
{if((state_val_12016 === (15)))
{var inst_11972 = (state_12015[(7)]);var inst_11997 = cljs.core._EQ_.call(null,inst_11972,new cljs.core.Keyword(null,"default","default",-1987822328));var state_12015__$1 = state_12015;if(inst_11997)
{var statearr_12022_12054 = state_12015__$1;(statearr_12022_12054[(1)] = (17));
} else
{var statearr_12023_12055 = state_12015__$1;(statearr_12023_12055[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12016 === (13)))
{var inst_12005 = (state_12015[(2)]);var state_12015__$1 = state_12015;var statearr_12024_12056 = state_12015__$1;(statearr_12024_12056[(2)] = inst_12005);
(statearr_12024_12056[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12016 === (6)))
{var inst_12011 = (state_12015[(2)]);var state_12015__$1 = state_12015;var statearr_12025_12057 = state_12015__$1;(statearr_12025_12057[(2)] = inst_12011);
(statearr_12025_12057[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12016 === (17)))
{var inst_11971 = (state_12015[(10)]);var state_12015__$1 = state_12015;var statearr_12026_12058 = state_12015__$1;(statearr_12026_12058[(2)] = inst_11971);
(statearr_12026_12058[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12016 === (3)))
{var inst_12013 = (state_12015[(2)]);var state_12015__$1 = state_12015;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12015__$1,inst_12013);
} else
{if((state_val_12016 === (12)))
{var inst_11972 = (state_12015[(7)]);var inst_11966 = (state_12015[(11)]);var inst_11991 = cljs.core._EQ_.call(null,inst_11972,inst_11966);var state_12015__$1 = state_12015;if(inst_11991)
{var statearr_12027_12059 = state_12015__$1;(statearr_12027_12059[(1)] = (14));
} else
{var statearr_12028_12060 = state_12015__$1;(statearr_12028_12060[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12016 === (2)))
{var state_12015__$1 = state_12015;if(true)
{var statearr_12029_12061 = state_12015__$1;(statearr_12029_12061[(1)] = (4));
} else
{var statearr_12030_12062 = state_12015__$1;(statearr_12030_12062[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12016 === (19)))
{var inst_12001 = (state_12015[(2)]);var state_12015__$1 = state_12015;var statearr_12031_12063 = state_12015__$1;(statearr_12031_12063[(2)] = inst_12001);
(statearr_12031_12063[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12016 === (11)))
{var inst_11970 = (state_12015[(9)]);var inst_11985 = cljs.core.nth.call(null,inst_11970,(0),null);var inst_11986 = cljs.core.deref.call(null,state);var inst_11987 = cljs.core.first.call(null,inst_11985);var inst_11988 = cljs.core.last.call(null,inst_11985);var inst_11989 = growingtree_app.core.process_api_event.call(null,app_el,state,inst_11987,inst_11988);var state_12015__$1 = (function (){var statearr_12032 = state_12015;(statearr_12032[(13)] = inst_11986);
return statearr_12032;
})();var statearr_12033_12064 = state_12015__$1;(statearr_12033_12064[(2)] = inst_11989);
(statearr_12033_12064[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12016 === (9)))
{var inst_11972 = (state_12015[(7)]);var inst_11965 = (state_12015[(12)]);var inst_11982 = cljs.core._EQ_.call(null,inst_11972,inst_11965);var state_12015__$1 = state_12015;if(inst_11982)
{var statearr_12034_12065 = state_12015__$1;(statearr_12034_12065[(1)] = (11));
} else
{var statearr_12035_12066 = state_12015__$1;(statearr_12035_12066[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12016 === (5)))
{var state_12015__$1 = state_12015;var statearr_12036_12067 = state_12015__$1;(statearr_12036_12067[(2)] = null);
(statearr_12036_12067[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12016 === (14)))
{var inst_11993 = cljs.core.deref.call(null,history);var inst_11994 = cljs.core.pr_str.call(null,inst_11993);var inst_11995 = growingtree_app.utils.mprint.call(null,inst_11994);var state_12015__$1 = state_12015;var statearr_12037_12068 = state_12015__$1;(statearr_12037_12068[(2)] = inst_11995);
(statearr_12037_12068[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12016 === (16)))
{var inst_12003 = (state_12015[(2)]);var state_12015__$1 = state_12015;var statearr_12038_12069 = state_12015__$1;(statearr_12038_12069[(2)] = inst_12003);
(statearr_12038_12069[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12016 === (10)))
{var inst_12007 = (state_12015[(2)]);var state_12015__$1 = (function (){var statearr_12039 = state_12015;(statearr_12039[(14)] = inst_12007);
return statearr_12039;
})();var statearr_12040_12070 = state_12015__$1;(statearr_12040_12070[(2)] = null);
(statearr_12040_12070[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12016 === (18)))
{var state_12015__$1 = state_12015;var statearr_12041_12071 = state_12015__$1;(statearr_12041_12071[(2)] = null);
(statearr_12041_12071[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12016 === (8)))
{var inst_11970 = (state_12015[(9)]);var inst_11976 = cljs.core.nth.call(null,inst_11970,(0),null);var inst_11977 = cljs.core.deref.call(null,state);var inst_11978 = cljs.core.first.call(null,inst_11976);var inst_11979 = cljs.core.last.call(null,inst_11976);var inst_11980 = growingtree_app.core.process_control_event.call(null,app_el,state,inst_11978,inst_11979);var state_12015__$1 = (function (){var statearr_12042 = state_12015;(statearr_12042[(15)] = inst_11977);
return statearr_12042;
})();var statearr_12043_12072 = state_12015__$1;(statearr_12043_12072[(2)] = inst_11980);
(statearr_12043_12072[(1)] = (10));
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
var state_machine__6281__auto____0 = (function (){var statearr_12047 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12047[(0)] = state_machine__6281__auto__);
(statearr_12047[(1)] = (1));
return statearr_12047;
});
var state_machine__6281__auto____1 = (function (state_12015){while(true){
var ret_value__6282__auto__ = (function (){try{while(true){
var result__6283__auto__ = switch__6280__auto__.call(null,state_12015);if(cljs.core.keyword_identical_QMARK_.call(null,result__6283__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6283__auto__;
}
break;
}
}catch (e12048){if((e12048 instanceof Object))
{var ex__6284__auto__ = e12048;var statearr_12049_12073 = state_12015;(statearr_12049_12073[(5)] = ex__6284__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12015);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e12048;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6282__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12074 = state_12015;
state_12015 = G__12074;
continue;
}
} else
{return ret_value__6282__auto__;
}
break;
}
});
state_machine__6281__auto__ = function(state_12015){
switch(arguments.length){
case 0:
return state_machine__6281__auto____0.call(this);
case 1:
return state_machine__6281__auto____1.call(this,state_12015);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6281__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6281__auto____0;
state_machine__6281__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6281__auto____1;
return state_machine__6281__auto__;
})()
;})(switch__6280__auto__,c__6345__auto__,comms,history,app_el,login_el,hist_el))
})();var state__6347__auto__ = (function (){var statearr_12050 = f__6346__auto__.call(null);(statearr_12050[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6345__auto__);
return statearr_12050;
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
var seq__12079 = cljs.core.seq.call(null,channels);var chunk__12080 = null;var count__12081 = (0);var i__12082 = (0);while(true){
if((i__12082 < count__12081))
{var channel = cljs.core._nth.call(null,chunk__12080,i__12082);growingtree_app.api.kandan.subscribe_BANG_.call(null,kandan_client,("/channels/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(channel)),new cljs.core.Keyword(null,"api","api",-899839580).cljs$core$IFn$_invoke$arity$1(comms));
{
var G__12083 = seq__12079;
var G__12084 = chunk__12080;
var G__12085 = count__12081;
var G__12086 = (i__12082 + (1));
seq__12079 = G__12083;
chunk__12080 = G__12084;
count__12081 = G__12085;
i__12082 = G__12086;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__12079);if(temp__4126__auto__)
{var seq__12079__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12079__$1))
{var c__4299__auto__ = cljs.core.chunk_first.call(null,seq__12079__$1);{
var G__12087 = cljs.core.chunk_rest.call(null,seq__12079__$1);
var G__12088 = c__4299__auto__;
var G__12089 = cljs.core.count.call(null,c__4299__auto__);
var G__12090 = (0);
seq__12079 = G__12087;
chunk__12080 = G__12088;
count__12081 = G__12089;
i__12082 = G__12090;
continue;
}
} else
{var channel = cljs.core.first.call(null,seq__12079__$1);growingtree_app.api.kandan.subscribe_BANG_.call(null,kandan_client,("/channels/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(channel)),new cljs.core.Keyword(null,"api","api",-899839580).cljs$core$IFn$_invoke$arity$1(comms));
{
var G__12091 = cljs.core.next.call(null,seq__12079__$1);
var G__12092 = null;
var G__12093 = (0);
var G__12094 = (0);
seq__12079 = G__12091;
chunk__12080 = G__12092;
count__12081 = G__12093;
i__12082 = G__12094;
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