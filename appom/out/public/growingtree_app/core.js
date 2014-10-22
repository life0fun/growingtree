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
growingtree_app.core.process_api_event = (function process_api_event(el,state,msg_type,msg_data){var previous_state = cljs.core.deref.call(null,state);return cljs.core.swap_BANG_.call(null,state,cljs.core.partial.call(null,growingtree_app.controllers.states.transition,el,msg_type,msg_data));
});
growingtree_app.core.main = (function main(state){var comms = new cljs.core.Keyword(null,"comms","comms",460172477).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state));var history = (function (){var or__3543__auto__ = growingtree_app.core.history;if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
})();var app_el = document.getElementById("app");var login_el = document.getElementById("login");var hist_el = document.getElementById("history-container");growingtree_app.routes.define_routes_BANG_.call(null,state,hist_el);
om.core.root.call(null,growingtree_app.components.login.login,state,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),login_el,new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"comms","comms",460172477),comms], null)], null));
om.core.root.call(null,growingtree_app.components.app.app,state,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),app_el,new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"comms","comms",460172477),comms], null)], null));
var c__6345__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6345__auto__,comms,history,app_el,login_el,hist_el){
return (function (){var f__6346__auto__ = (function (){var switch__6280__auto__ = ((function (c__6345__auto__,comms,history,app_el,login_el,hist_el){
return (function (state_11916){var state_val_11917 = (state_11916[(1)]);if((state_val_11917 === (7)))
{var inst_11865 = (state_11916[(7)]);var inst_11873 = (state_11916[(8)]);var inst_11871 = (state_11916[(9)]);var inst_11871__$1 = (state_11916[(2)]);var inst_11872 = cljs.core.nth.call(null,inst_11871__$1,(0),null);var inst_11873__$1 = cljs.core.nth.call(null,inst_11871__$1,(1),null);var inst_11874 = cljs.core._EQ_.call(null,inst_11873__$1,inst_11865);var state_11916__$1 = (function (){var statearr_11918 = state_11916;(statearr_11918[(10)] = inst_11872);
(statearr_11918[(8)] = inst_11873__$1);
(statearr_11918[(9)] = inst_11871__$1);
return statearr_11918;
})();if(inst_11874)
{var statearr_11919_11952 = state_11916__$1;(statearr_11919_11952[(1)] = (8));
} else
{var statearr_11920_11953 = state_11916__$1;(statearr_11920_11953[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11917 === (1)))
{var state_11916__$1 = state_11916;var statearr_11921_11954 = state_11916__$1;(statearr_11921_11954[(2)] = null);
(statearr_11921_11954[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11917 === (4)))
{var inst_11865 = (state_11916[(7)]);var inst_11866 = (state_11916[(11)]);var inst_11867 = (state_11916[(12)]);var inst_11865__$1 = new cljs.core.Keyword(null,"controls","controls",1340701452).cljs$core$IFn$_invoke$arity$1(comms);var inst_11866__$1 = new cljs.core.Keyword(null,"api","api",-899839580).cljs$core$IFn$_invoke$arity$1(comms);var inst_11867__$1 = cljs.core.async.timeout.call(null,(30000));var inst_11868 = [inst_11865__$1,inst_11866__$1,inst_11867__$1];var inst_11869 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_11868,null));var state_11916__$1 = (function (){var statearr_11922 = state_11916;(statearr_11922[(7)] = inst_11865__$1);
(statearr_11922[(11)] = inst_11866__$1);
(statearr_11922[(12)] = inst_11867__$1);
return statearr_11922;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_11916__$1,(7),inst_11869);
} else
{if((state_val_11917 === (15)))
{var inst_11873 = (state_11916[(8)]);var inst_11898 = cljs.core._EQ_.call(null,inst_11873,new cljs.core.Keyword(null,"default","default",-1987822328));var state_11916__$1 = state_11916;if(inst_11898)
{var statearr_11923_11955 = state_11916__$1;(statearr_11923_11955[(1)] = (17));
} else
{var statearr_11924_11956 = state_11916__$1;(statearr_11924_11956[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11917 === (13)))
{var inst_11906 = (state_11916[(2)]);var state_11916__$1 = state_11916;var statearr_11925_11957 = state_11916__$1;(statearr_11925_11957[(2)] = inst_11906);
(statearr_11925_11957[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11917 === (6)))
{var inst_11912 = (state_11916[(2)]);var state_11916__$1 = state_11916;var statearr_11926_11958 = state_11916__$1;(statearr_11926_11958[(2)] = inst_11912);
(statearr_11926_11958[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11917 === (17)))
{var inst_11872 = (state_11916[(10)]);var state_11916__$1 = state_11916;var statearr_11927_11959 = state_11916__$1;(statearr_11927_11959[(2)] = inst_11872);
(statearr_11927_11959[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11917 === (3)))
{var inst_11914 = (state_11916[(2)]);var state_11916__$1 = state_11916;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11916__$1,inst_11914);
} else
{if((state_val_11917 === (12)))
{var inst_11867 = (state_11916[(12)]);var inst_11873 = (state_11916[(8)]);var inst_11892 = cljs.core._EQ_.call(null,inst_11873,inst_11867);var state_11916__$1 = state_11916;if(inst_11892)
{var statearr_11928_11960 = state_11916__$1;(statearr_11928_11960[(1)] = (14));
} else
{var statearr_11929_11961 = state_11916__$1;(statearr_11929_11961[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11917 === (2)))
{var state_11916__$1 = state_11916;if(true)
{var statearr_11930_11962 = state_11916__$1;(statearr_11930_11962[(1)] = (4));
} else
{var statearr_11931_11963 = state_11916__$1;(statearr_11931_11963[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11917 === (19)))
{var inst_11902 = (state_11916[(2)]);var state_11916__$1 = state_11916;var statearr_11932_11964 = state_11916__$1;(statearr_11932_11964[(2)] = inst_11902);
(statearr_11932_11964[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11917 === (11)))
{var inst_11871 = (state_11916[(9)]);var inst_11886 = cljs.core.nth.call(null,inst_11871,(0),null);var inst_11887 = cljs.core.deref.call(null,state);var inst_11888 = cljs.core.first.call(null,inst_11886);var inst_11889 = cljs.core.last.call(null,inst_11886);var inst_11890 = growingtree_app.core.process_api_event.call(null,app_el,state,inst_11888,inst_11889);var state_11916__$1 = (function (){var statearr_11933 = state_11916;(statearr_11933[(13)] = inst_11887);
return statearr_11933;
})();var statearr_11934_11965 = state_11916__$1;(statearr_11934_11965[(2)] = inst_11890);
(statearr_11934_11965[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11917 === (9)))
{var inst_11866 = (state_11916[(11)]);var inst_11873 = (state_11916[(8)]);var inst_11883 = cljs.core._EQ_.call(null,inst_11873,inst_11866);var state_11916__$1 = state_11916;if(inst_11883)
{var statearr_11935_11966 = state_11916__$1;(statearr_11935_11966[(1)] = (11));
} else
{var statearr_11936_11967 = state_11916__$1;(statearr_11936_11967[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11917 === (5)))
{var state_11916__$1 = state_11916;var statearr_11937_11968 = state_11916__$1;(statearr_11937_11968[(2)] = null);
(statearr_11937_11968[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11917 === (14)))
{var inst_11894 = cljs.core.deref.call(null,history);var inst_11895 = cljs.core.pr_str.call(null,inst_11894);var inst_11896 = growingtree_app.utils.mprint.call(null,inst_11895);var state_11916__$1 = state_11916;var statearr_11938_11969 = state_11916__$1;(statearr_11938_11969[(2)] = inst_11896);
(statearr_11938_11969[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11917 === (16)))
{var inst_11904 = (state_11916[(2)]);var state_11916__$1 = state_11916;var statearr_11939_11970 = state_11916__$1;(statearr_11939_11970[(2)] = inst_11904);
(statearr_11939_11970[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11917 === (10)))
{var inst_11908 = (state_11916[(2)]);var state_11916__$1 = (function (){var statearr_11940 = state_11916;(statearr_11940[(14)] = inst_11908);
return statearr_11940;
})();var statearr_11941_11971 = state_11916__$1;(statearr_11941_11971[(2)] = null);
(statearr_11941_11971[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11917 === (18)))
{var state_11916__$1 = state_11916;var statearr_11942_11972 = state_11916__$1;(statearr_11942_11972[(2)] = null);
(statearr_11942_11972[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11917 === (8)))
{var inst_11871 = (state_11916[(9)]);var inst_11877 = cljs.core.nth.call(null,inst_11871,(0),null);var inst_11878 = cljs.core.deref.call(null,state);var inst_11879 = cljs.core.first.call(null,inst_11877);var inst_11880 = cljs.core.last.call(null,inst_11877);var inst_11881 = growingtree_app.core.process_control_event.call(null,app_el,state,inst_11879,inst_11880);var state_11916__$1 = (function (){var statearr_11943 = state_11916;(statearr_11943[(15)] = inst_11878);
return statearr_11943;
})();var statearr_11944_11973 = state_11916__$1;(statearr_11944_11973[(2)] = inst_11881);
(statearr_11944_11973[(1)] = (10));
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
var state_machine__6281__auto____0 = (function (){var statearr_11948 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11948[(0)] = state_machine__6281__auto__);
(statearr_11948[(1)] = (1));
return statearr_11948;
});
var state_machine__6281__auto____1 = (function (state_11916){while(true){
var ret_value__6282__auto__ = (function (){try{while(true){
var result__6283__auto__ = switch__6280__auto__.call(null,state_11916);if(cljs.core.keyword_identical_QMARK_.call(null,result__6283__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6283__auto__;
}
break;
}
}catch (e11949){if((e11949 instanceof Object))
{var ex__6284__auto__ = e11949;var statearr_11950_11974 = state_11916;(statearr_11950_11974[(5)] = ex__6284__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11916);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e11949;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6282__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11975 = state_11916;
state_11916 = G__11975;
continue;
}
} else
{return ret_value__6282__auto__;
}
break;
}
});
state_machine__6281__auto__ = function(state_11916){
switch(arguments.length){
case 0:
return state_machine__6281__auto____0.call(this);
case 1:
return state_machine__6281__auto____1.call(this,state_11916);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6281__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6281__auto____0;
state_machine__6281__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6281__auto____1;
return state_machine__6281__auto__;
})()
;})(switch__6280__auto__,c__6345__auto__,comms,history,app_el,login_el,hist_el))
})();var state__6347__auto__ = (function (){var statearr_11951 = f__6346__auto__.call(null);(statearr_11951[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6345__auto__);
return statearr_11951;
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
var seq__11980 = cljs.core.seq.call(null,channels);var chunk__11981 = null;var count__11982 = (0);var i__11983 = (0);while(true){
if((i__11983 < count__11982))
{var channel = cljs.core._nth.call(null,chunk__11981,i__11983);growingtree_app.api.kandan.subscribe_BANG_.call(null,kandan_client,("/channels/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(channel)),new cljs.core.Keyword(null,"api","api",-899839580).cljs$core$IFn$_invoke$arity$1(comms));
{
var G__11984 = seq__11980;
var G__11985 = chunk__11981;
var G__11986 = count__11982;
var G__11987 = (i__11983 + (1));
seq__11980 = G__11984;
chunk__11981 = G__11985;
count__11982 = G__11986;
i__11983 = G__11987;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__11980);if(temp__4126__auto__)
{var seq__11980__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11980__$1))
{var c__4299__auto__ = cljs.core.chunk_first.call(null,seq__11980__$1);{
var G__11988 = cljs.core.chunk_rest.call(null,seq__11980__$1);
var G__11989 = c__4299__auto__;
var G__11990 = cljs.core.count.call(null,c__4299__auto__);
var G__11991 = (0);
seq__11980 = G__11988;
chunk__11981 = G__11989;
count__11982 = G__11990;
i__11983 = G__11991;
continue;
}
} else
{var channel = cljs.core.first.call(null,seq__11980__$1);growingtree_app.api.kandan.subscribe_BANG_.call(null,kandan_client,("/channels/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(channel)),new cljs.core.Keyword(null,"api","api",-899839580).cljs$core$IFn$_invoke$arity$1(comms));
{
var G__11992 = cljs.core.next.call(null,seq__11980__$1);
var G__11993 = null;
var G__11994 = (0);
var G__11995 = (0);
seq__11980 = G__11992;
chunk__11981 = G__11993;
count__11982 = G__11994;
i__11983 = G__11995;
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