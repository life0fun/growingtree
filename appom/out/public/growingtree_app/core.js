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
return (function (state_12112){var state_val_12113 = (state_12112[(1)]);if((state_val_12113 === (7)))
{var inst_12067 = (state_12112[(7)]);var inst_12061 = (state_12112[(8)]);var inst_12069 = (state_12112[(9)]);var inst_12067__$1 = (state_12112[(2)]);var inst_12068 = cljs.core.nth.call(null,inst_12067__$1,(0),null);var inst_12069__$1 = cljs.core.nth.call(null,inst_12067__$1,(1),null);var inst_12070 = cljs.core._EQ_.call(null,inst_12069__$1,inst_12061);var state_12112__$1 = (function (){var statearr_12114 = state_12112;(statearr_12114[(7)] = inst_12067__$1);
(statearr_12114[(10)] = inst_12068);
(statearr_12114[(9)] = inst_12069__$1);
return statearr_12114;
})();if(inst_12070)
{var statearr_12115_12148 = state_12112__$1;(statearr_12115_12148[(1)] = (8));
} else
{var statearr_12116_12149 = state_12112__$1;(statearr_12116_12149[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12113 === (1)))
{var state_12112__$1 = state_12112;var statearr_12117_12150 = state_12112__$1;(statearr_12117_12150[(2)] = null);
(statearr_12117_12150[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12113 === (4)))
{var inst_12062 = (state_12112[(11)]);var inst_12061 = (state_12112[(8)]);var inst_12063 = (state_12112[(12)]);var inst_12061__$1 = new cljs.core.Keyword(null,"controls","controls",1340701452).cljs$core$IFn$_invoke$arity$1(comms);var inst_12062__$1 = new cljs.core.Keyword(null,"api","api",-899839580).cljs$core$IFn$_invoke$arity$1(comms);var inst_12063__$1 = cljs.core.async.timeout.call(null,(30000));var inst_12064 = [inst_12061__$1,inst_12062__$1,inst_12063__$1];var inst_12065 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_12064,null));var state_12112__$1 = (function (){var statearr_12118 = state_12112;(statearr_12118[(11)] = inst_12062__$1);
(statearr_12118[(8)] = inst_12061__$1);
(statearr_12118[(12)] = inst_12063__$1);
return statearr_12118;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_12112__$1,(7),inst_12065);
} else
{if((state_val_12113 === (15)))
{var inst_12069 = (state_12112[(9)]);var inst_12094 = cljs.core._EQ_.call(null,inst_12069,new cljs.core.Keyword(null,"default","default",-1987822328));var state_12112__$1 = state_12112;if(inst_12094)
{var statearr_12119_12151 = state_12112__$1;(statearr_12119_12151[(1)] = (17));
} else
{var statearr_12120_12152 = state_12112__$1;(statearr_12120_12152[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12113 === (13)))
{var inst_12102 = (state_12112[(2)]);var state_12112__$1 = state_12112;var statearr_12121_12153 = state_12112__$1;(statearr_12121_12153[(2)] = inst_12102);
(statearr_12121_12153[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12113 === (6)))
{var inst_12108 = (state_12112[(2)]);var state_12112__$1 = state_12112;var statearr_12122_12154 = state_12112__$1;(statearr_12122_12154[(2)] = inst_12108);
(statearr_12122_12154[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12113 === (17)))
{var inst_12068 = (state_12112[(10)]);var state_12112__$1 = state_12112;var statearr_12123_12155 = state_12112__$1;(statearr_12123_12155[(2)] = inst_12068);
(statearr_12123_12155[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12113 === (3)))
{var inst_12110 = (state_12112[(2)]);var state_12112__$1 = state_12112;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12112__$1,inst_12110);
} else
{if((state_val_12113 === (12)))
{var inst_12063 = (state_12112[(12)]);var inst_12069 = (state_12112[(9)]);var inst_12088 = cljs.core._EQ_.call(null,inst_12069,inst_12063);var state_12112__$1 = state_12112;if(inst_12088)
{var statearr_12124_12156 = state_12112__$1;(statearr_12124_12156[(1)] = (14));
} else
{var statearr_12125_12157 = state_12112__$1;(statearr_12125_12157[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12113 === (2)))
{var state_12112__$1 = state_12112;if(true)
{var statearr_12126_12158 = state_12112__$1;(statearr_12126_12158[(1)] = (4));
} else
{var statearr_12127_12159 = state_12112__$1;(statearr_12127_12159[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12113 === (19)))
{var inst_12098 = (state_12112[(2)]);var state_12112__$1 = state_12112;var statearr_12128_12160 = state_12112__$1;(statearr_12128_12160[(2)] = inst_12098);
(statearr_12128_12160[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12113 === (11)))
{var inst_12067 = (state_12112[(7)]);var inst_12082 = cljs.core.nth.call(null,inst_12067,(0),null);var inst_12083 = cljs.core.deref.call(null,state);var inst_12084 = cljs.core.first.call(null,inst_12082);var inst_12085 = cljs.core.last.call(null,inst_12082);var inst_12086 = growingtree_app.core.process_api_event.call(null,app_el,state,inst_12084,inst_12085);var state_12112__$1 = (function (){var statearr_12129 = state_12112;(statearr_12129[(13)] = inst_12083);
return statearr_12129;
})();var statearr_12130_12161 = state_12112__$1;(statearr_12130_12161[(2)] = inst_12086);
(statearr_12130_12161[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12113 === (9)))
{var inst_12062 = (state_12112[(11)]);var inst_12069 = (state_12112[(9)]);var inst_12079 = cljs.core._EQ_.call(null,inst_12069,inst_12062);var state_12112__$1 = state_12112;if(inst_12079)
{var statearr_12131_12162 = state_12112__$1;(statearr_12131_12162[(1)] = (11));
} else
{var statearr_12132_12163 = state_12112__$1;(statearr_12132_12163[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12113 === (5)))
{var state_12112__$1 = state_12112;var statearr_12133_12164 = state_12112__$1;(statearr_12133_12164[(2)] = null);
(statearr_12133_12164[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12113 === (14)))
{var inst_12090 = cljs.core.deref.call(null,history);var inst_12091 = cljs.core.pr_str.call(null,inst_12090);var inst_12092 = growingtree_app.utils.mprint.call(null,inst_12091);var state_12112__$1 = state_12112;var statearr_12134_12165 = state_12112__$1;(statearr_12134_12165[(2)] = inst_12092);
(statearr_12134_12165[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12113 === (16)))
{var inst_12100 = (state_12112[(2)]);var state_12112__$1 = state_12112;var statearr_12135_12166 = state_12112__$1;(statearr_12135_12166[(2)] = inst_12100);
(statearr_12135_12166[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12113 === (10)))
{var inst_12104 = (state_12112[(2)]);var state_12112__$1 = (function (){var statearr_12136 = state_12112;(statearr_12136[(14)] = inst_12104);
return statearr_12136;
})();var statearr_12137_12167 = state_12112__$1;(statearr_12137_12167[(2)] = null);
(statearr_12137_12167[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12113 === (18)))
{var state_12112__$1 = state_12112;var statearr_12138_12168 = state_12112__$1;(statearr_12138_12168[(2)] = null);
(statearr_12138_12168[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12113 === (8)))
{var inst_12067 = (state_12112[(7)]);var inst_12073 = cljs.core.nth.call(null,inst_12067,(0),null);var inst_12074 = cljs.core.deref.call(null,state);var inst_12075 = cljs.core.first.call(null,inst_12073);var inst_12076 = cljs.core.last.call(null,inst_12073);var inst_12077 = growingtree_app.core.process_control_event.call(null,app_el,state,inst_12075,inst_12076);var state_12112__$1 = (function (){var statearr_12139 = state_12112;(statearr_12139[(15)] = inst_12074);
return statearr_12139;
})();var statearr_12140_12169 = state_12112__$1;(statearr_12140_12169[(2)] = inst_12077);
(statearr_12140_12169[(1)] = (10));
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
var state_machine__6281__auto____0 = (function (){var statearr_12144 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12144[(0)] = state_machine__6281__auto__);
(statearr_12144[(1)] = (1));
return statearr_12144;
});
var state_machine__6281__auto____1 = (function (state_12112){while(true){
var ret_value__6282__auto__ = (function (){try{while(true){
var result__6283__auto__ = switch__6280__auto__.call(null,state_12112);if(cljs.core.keyword_identical_QMARK_.call(null,result__6283__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6283__auto__;
}
break;
}
}catch (e12145){if((e12145 instanceof Object))
{var ex__6284__auto__ = e12145;var statearr_12146_12170 = state_12112;(statearr_12146_12170[(5)] = ex__6284__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12112);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e12145;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6282__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12171 = state_12112;
state_12112 = G__12171;
continue;
}
} else
{return ret_value__6282__auto__;
}
break;
}
});
state_machine__6281__auto__ = function(state_12112){
switch(arguments.length){
case 0:
return state_machine__6281__auto____0.call(this);
case 1:
return state_machine__6281__auto____1.call(this,state_12112);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6281__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6281__auto____0;
state_machine__6281__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6281__auto____1;
return state_machine__6281__auto__;
})()
;})(switch__6280__auto__,c__6345__auto__,comms,history,app_el,login_el,hist_el))
})();var state__6347__auto__ = (function (){var statearr_12147 = f__6346__auto__.call(null);(statearr_12147[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6345__auto__);
return statearr_12147;
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
var seq__12176 = cljs.core.seq.call(null,channels);var chunk__12177 = null;var count__12178 = (0);var i__12179 = (0);while(true){
if((i__12179 < count__12178))
{var channel = cljs.core._nth.call(null,chunk__12177,i__12179);growingtree_app.api.kandan.subscribe_BANG_.call(null,kandan_client,("/channels/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(channel)),new cljs.core.Keyword(null,"api","api",-899839580).cljs$core$IFn$_invoke$arity$1(comms));
{
var G__12180 = seq__12176;
var G__12181 = chunk__12177;
var G__12182 = count__12178;
var G__12183 = (i__12179 + (1));
seq__12176 = G__12180;
chunk__12177 = G__12181;
count__12178 = G__12182;
i__12179 = G__12183;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__12176);if(temp__4126__auto__)
{var seq__12176__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12176__$1))
{var c__4299__auto__ = cljs.core.chunk_first.call(null,seq__12176__$1);{
var G__12184 = cljs.core.chunk_rest.call(null,seq__12176__$1);
var G__12185 = c__4299__auto__;
var G__12186 = cljs.core.count.call(null,c__4299__auto__);
var G__12187 = (0);
seq__12176 = G__12184;
chunk__12177 = G__12185;
count__12178 = G__12186;
i__12179 = G__12187;
continue;
}
} else
{var channel = cljs.core.first.call(null,seq__12176__$1);growingtree_app.api.kandan.subscribe_BANG_.call(null,kandan_client,("/channels/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(channel)),new cljs.core.Keyword(null,"api","api",-899839580).cljs$core$IFn$_invoke$arity$1(comms));
{
var G__12188 = cljs.core.next.call(null,seq__12176__$1);
var G__12189 = null;
var G__12190 = (0);
var G__12191 = (0);
seq__12176 = G__12188;
chunk__12177 = G__12189;
count__12178 = G__12190;
i__12179 = G__12191;
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