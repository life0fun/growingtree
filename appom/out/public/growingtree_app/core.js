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
return (function (state_12000){var state_val_12001 = (state_12000[(1)]);if((state_val_12001 === (7)))
{var inst_11949 = (state_12000[(7)]);var inst_11957 = (state_12000[(8)]);var inst_11955 = (state_12000[(9)]);var inst_11955__$1 = (state_12000[(2)]);var inst_11956 = cljs.core.nth.call(null,inst_11955__$1,(0),null);var inst_11957__$1 = cljs.core.nth.call(null,inst_11955__$1,(1),null);var inst_11958 = cljs.core._EQ_.call(null,inst_11957__$1,inst_11949);var state_12000__$1 = (function (){var statearr_12002 = state_12000;(statearr_12002[(8)] = inst_11957__$1);
(statearr_12002[(9)] = inst_11955__$1);
(statearr_12002[(10)] = inst_11956);
return statearr_12002;
})();if(inst_11958)
{var statearr_12003_12036 = state_12000__$1;(statearr_12003_12036[(1)] = (8));
} else
{var statearr_12004_12037 = state_12000__$1;(statearr_12004_12037[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12001 === (1)))
{var state_12000__$1 = state_12000;var statearr_12005_12038 = state_12000__$1;(statearr_12005_12038[(2)] = null);
(statearr_12005_12038[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12001 === (4)))
{var inst_11949 = (state_12000[(7)]);var inst_11950 = (state_12000[(11)]);var inst_11951 = (state_12000[(12)]);var inst_11949__$1 = new cljs.core.Keyword(null,"controls","controls",1340701452).cljs$core$IFn$_invoke$arity$1(comms);var inst_11950__$1 = new cljs.core.Keyword(null,"api","api",-899839580).cljs$core$IFn$_invoke$arity$1(comms);var inst_11951__$1 = cljs.core.async.timeout.call(null,(30000));var inst_11952 = [inst_11949__$1,inst_11950__$1,inst_11951__$1];var inst_11953 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_11952,null));var state_12000__$1 = (function (){var statearr_12006 = state_12000;(statearr_12006[(7)] = inst_11949__$1);
(statearr_12006[(11)] = inst_11950__$1);
(statearr_12006[(12)] = inst_11951__$1);
return statearr_12006;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_12000__$1,(7),inst_11953);
} else
{if((state_val_12001 === (15)))
{var inst_11957 = (state_12000[(8)]);var inst_11982 = cljs.core._EQ_.call(null,inst_11957,new cljs.core.Keyword(null,"default","default",-1987822328));var state_12000__$1 = state_12000;if(inst_11982)
{var statearr_12007_12039 = state_12000__$1;(statearr_12007_12039[(1)] = (17));
} else
{var statearr_12008_12040 = state_12000__$1;(statearr_12008_12040[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12001 === (13)))
{var inst_11990 = (state_12000[(2)]);var state_12000__$1 = state_12000;var statearr_12009_12041 = state_12000__$1;(statearr_12009_12041[(2)] = inst_11990);
(statearr_12009_12041[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12001 === (6)))
{var inst_11996 = (state_12000[(2)]);var state_12000__$1 = state_12000;var statearr_12010_12042 = state_12000__$1;(statearr_12010_12042[(2)] = inst_11996);
(statearr_12010_12042[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12001 === (17)))
{var inst_11956 = (state_12000[(10)]);var state_12000__$1 = state_12000;var statearr_12011_12043 = state_12000__$1;(statearr_12011_12043[(2)] = inst_11956);
(statearr_12011_12043[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12001 === (3)))
{var inst_11998 = (state_12000[(2)]);var state_12000__$1 = state_12000;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12000__$1,inst_11998);
} else
{if((state_val_12001 === (12)))
{var inst_11957 = (state_12000[(8)]);var inst_11951 = (state_12000[(12)]);var inst_11976 = cljs.core._EQ_.call(null,inst_11957,inst_11951);var state_12000__$1 = state_12000;if(inst_11976)
{var statearr_12012_12044 = state_12000__$1;(statearr_12012_12044[(1)] = (14));
} else
{var statearr_12013_12045 = state_12000__$1;(statearr_12013_12045[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12001 === (2)))
{var state_12000__$1 = state_12000;if(true)
{var statearr_12014_12046 = state_12000__$1;(statearr_12014_12046[(1)] = (4));
} else
{var statearr_12015_12047 = state_12000__$1;(statearr_12015_12047[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12001 === (19)))
{var inst_11986 = (state_12000[(2)]);var state_12000__$1 = state_12000;var statearr_12016_12048 = state_12000__$1;(statearr_12016_12048[(2)] = inst_11986);
(statearr_12016_12048[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12001 === (11)))
{var inst_11955 = (state_12000[(9)]);var inst_11970 = cljs.core.nth.call(null,inst_11955,(0),null);var inst_11971 = cljs.core.deref.call(null,state);var inst_11972 = cljs.core.first.call(null,inst_11970);var inst_11973 = cljs.core.last.call(null,inst_11970);var inst_11974 = growingtree_app.core.process_api_event.call(null,app_el,state,inst_11972,inst_11973);var state_12000__$1 = (function (){var statearr_12017 = state_12000;(statearr_12017[(13)] = inst_11971);
return statearr_12017;
})();var statearr_12018_12049 = state_12000__$1;(statearr_12018_12049[(2)] = inst_11974);
(statearr_12018_12049[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12001 === (9)))
{var inst_11957 = (state_12000[(8)]);var inst_11950 = (state_12000[(11)]);var inst_11967 = cljs.core._EQ_.call(null,inst_11957,inst_11950);var state_12000__$1 = state_12000;if(inst_11967)
{var statearr_12019_12050 = state_12000__$1;(statearr_12019_12050[(1)] = (11));
} else
{var statearr_12020_12051 = state_12000__$1;(statearr_12020_12051[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12001 === (5)))
{var state_12000__$1 = state_12000;var statearr_12021_12052 = state_12000__$1;(statearr_12021_12052[(2)] = null);
(statearr_12021_12052[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12001 === (14)))
{var inst_11978 = cljs.core.deref.call(null,history);var inst_11979 = cljs.core.pr_str.call(null,inst_11978);var inst_11980 = growingtree_app.utils.mprint.call(null,inst_11979);var state_12000__$1 = state_12000;var statearr_12022_12053 = state_12000__$1;(statearr_12022_12053[(2)] = inst_11980);
(statearr_12022_12053[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12001 === (16)))
{var inst_11988 = (state_12000[(2)]);var state_12000__$1 = state_12000;var statearr_12023_12054 = state_12000__$1;(statearr_12023_12054[(2)] = inst_11988);
(statearr_12023_12054[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12001 === (10)))
{var inst_11992 = (state_12000[(2)]);var state_12000__$1 = (function (){var statearr_12024 = state_12000;(statearr_12024[(14)] = inst_11992);
return statearr_12024;
})();var statearr_12025_12055 = state_12000__$1;(statearr_12025_12055[(2)] = null);
(statearr_12025_12055[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12001 === (18)))
{var state_12000__$1 = state_12000;var statearr_12026_12056 = state_12000__$1;(statearr_12026_12056[(2)] = null);
(statearr_12026_12056[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12001 === (8)))
{var inst_11955 = (state_12000[(9)]);var inst_11961 = cljs.core.nth.call(null,inst_11955,(0),null);var inst_11962 = cljs.core.deref.call(null,state);var inst_11963 = cljs.core.first.call(null,inst_11961);var inst_11964 = cljs.core.last.call(null,inst_11961);var inst_11965 = growingtree_app.core.process_control_event.call(null,app_el,state,inst_11963,inst_11964);var state_12000__$1 = (function (){var statearr_12027 = state_12000;(statearr_12027[(15)] = inst_11962);
return statearr_12027;
})();var statearr_12028_12057 = state_12000__$1;(statearr_12028_12057[(2)] = inst_11965);
(statearr_12028_12057[(1)] = (10));
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
var state_machine__6281__auto____0 = (function (){var statearr_12032 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12032[(0)] = state_machine__6281__auto__);
(statearr_12032[(1)] = (1));
return statearr_12032;
});
var state_machine__6281__auto____1 = (function (state_12000){while(true){
var ret_value__6282__auto__ = (function (){try{while(true){
var result__6283__auto__ = switch__6280__auto__.call(null,state_12000);if(cljs.core.keyword_identical_QMARK_.call(null,result__6283__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6283__auto__;
}
break;
}
}catch (e12033){if((e12033 instanceof Object))
{var ex__6284__auto__ = e12033;var statearr_12034_12058 = state_12000;(statearr_12034_12058[(5)] = ex__6284__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12000);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e12033;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6282__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12059 = state_12000;
state_12000 = G__12059;
continue;
}
} else
{return ret_value__6282__auto__;
}
break;
}
});
state_machine__6281__auto__ = function(state_12000){
switch(arguments.length){
case 0:
return state_machine__6281__auto____0.call(this);
case 1:
return state_machine__6281__auto____1.call(this,state_12000);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6281__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6281__auto____0;
state_machine__6281__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6281__auto____1;
return state_machine__6281__auto__;
})()
;})(switch__6280__auto__,c__6345__auto__,comms,history,app_el,login_el,hist_el))
})();var state__6347__auto__ = (function (){var statearr_12035 = f__6346__auto__.call(null);(statearr_12035[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6345__auto__);
return statearr_12035;
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
var seq__12064 = cljs.core.seq.call(null,channels);var chunk__12065 = null;var count__12066 = (0);var i__12067 = (0);while(true){
if((i__12067 < count__12066))
{var channel = cljs.core._nth.call(null,chunk__12065,i__12067);growingtree_app.api.kandan.subscribe_BANG_.call(null,kandan_client,("/channels/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(channel)),new cljs.core.Keyword(null,"api","api",-899839580).cljs$core$IFn$_invoke$arity$1(comms));
{
var G__12068 = seq__12064;
var G__12069 = chunk__12065;
var G__12070 = count__12066;
var G__12071 = (i__12067 + (1));
seq__12064 = G__12068;
chunk__12065 = G__12069;
count__12066 = G__12070;
i__12067 = G__12071;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__12064);if(temp__4126__auto__)
{var seq__12064__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12064__$1))
{var c__4299__auto__ = cljs.core.chunk_first.call(null,seq__12064__$1);{
var G__12072 = cljs.core.chunk_rest.call(null,seq__12064__$1);
var G__12073 = c__4299__auto__;
var G__12074 = cljs.core.count.call(null,c__4299__auto__);
var G__12075 = (0);
seq__12064 = G__12072;
chunk__12065 = G__12073;
count__12066 = G__12074;
i__12067 = G__12075;
continue;
}
} else
{var channel = cljs.core.first.call(null,seq__12064__$1);growingtree_app.api.kandan.subscribe_BANG_.call(null,kandan_client,("/channels/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(channel)),new cljs.core.Keyword(null,"api","api",-899839580).cljs$core$IFn$_invoke$arity$1(comms));
{
var G__12076 = cljs.core.next.call(null,seq__12064__$1);
var G__12077 = null;
var G__12078 = (0);
var G__12079 = (0);
seq__12064 = G__12076;
chunk__12065 = G__12077;
count__12066 = G__12078;
i__12067 = G__12079;
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