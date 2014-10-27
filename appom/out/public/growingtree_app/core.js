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
return (function (state_11943){var state_val_11944 = (state_11943[(1)]);if((state_val_11944 === (7)))
{var inst_11898 = (state_11943[(7)]);var inst_11900 = (state_11943[(8)]);var inst_11892 = (state_11943[(9)]);var inst_11898__$1 = (state_11943[(2)]);var inst_11899 = cljs.core.nth.call(null,inst_11898__$1,(0),null);var inst_11900__$1 = cljs.core.nth.call(null,inst_11898__$1,(1),null);var inst_11901 = cljs.core._EQ_.call(null,inst_11900__$1,inst_11892);var state_11943__$1 = (function (){var statearr_11945 = state_11943;(statearr_11945[(10)] = inst_11899);
(statearr_11945[(7)] = inst_11898__$1);
(statearr_11945[(8)] = inst_11900__$1);
return statearr_11945;
})();if(inst_11901)
{var statearr_11946_11979 = state_11943__$1;(statearr_11946_11979[(1)] = (8));
} else
{var statearr_11947_11980 = state_11943__$1;(statearr_11947_11980[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11944 === (1)))
{var state_11943__$1 = state_11943;var statearr_11948_11981 = state_11943__$1;(statearr_11948_11981[(2)] = null);
(statearr_11948_11981[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11944 === (4)))
{var inst_11893 = (state_11943[(11)]);var inst_11894 = (state_11943[(12)]);var inst_11892 = (state_11943[(9)]);var inst_11892__$1 = new cljs.core.Keyword(null,"controls","controls",1340701452).cljs$core$IFn$_invoke$arity$1(comms);var inst_11893__$1 = new cljs.core.Keyword(null,"api","api",-899839580).cljs$core$IFn$_invoke$arity$1(comms);var inst_11894__$1 = cljs.core.async.timeout.call(null,(30000));var inst_11895 = [inst_11892__$1,inst_11893__$1,inst_11894__$1];var inst_11896 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_11895,null));var state_11943__$1 = (function (){var statearr_11949 = state_11943;(statearr_11949[(11)] = inst_11893__$1);
(statearr_11949[(12)] = inst_11894__$1);
(statearr_11949[(9)] = inst_11892__$1);
return statearr_11949;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_11943__$1,(7),inst_11896);
} else
{if((state_val_11944 === (15)))
{var inst_11900 = (state_11943[(8)]);var inst_11925 = cljs.core._EQ_.call(null,inst_11900,new cljs.core.Keyword(null,"default","default",-1987822328));var state_11943__$1 = state_11943;if(inst_11925)
{var statearr_11950_11982 = state_11943__$1;(statearr_11950_11982[(1)] = (17));
} else
{var statearr_11951_11983 = state_11943__$1;(statearr_11951_11983[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11944 === (13)))
{var inst_11933 = (state_11943[(2)]);var state_11943__$1 = state_11943;var statearr_11952_11984 = state_11943__$1;(statearr_11952_11984[(2)] = inst_11933);
(statearr_11952_11984[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11944 === (6)))
{var inst_11939 = (state_11943[(2)]);var state_11943__$1 = state_11943;var statearr_11953_11985 = state_11943__$1;(statearr_11953_11985[(2)] = inst_11939);
(statearr_11953_11985[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11944 === (17)))
{var inst_11899 = (state_11943[(10)]);var state_11943__$1 = state_11943;var statearr_11954_11986 = state_11943__$1;(statearr_11954_11986[(2)] = inst_11899);
(statearr_11954_11986[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11944 === (3)))
{var inst_11941 = (state_11943[(2)]);var state_11943__$1 = state_11943;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11943__$1,inst_11941);
} else
{if((state_val_11944 === (12)))
{var inst_11900 = (state_11943[(8)]);var inst_11894 = (state_11943[(12)]);var inst_11919 = cljs.core._EQ_.call(null,inst_11900,inst_11894);var state_11943__$1 = state_11943;if(inst_11919)
{var statearr_11955_11987 = state_11943__$1;(statearr_11955_11987[(1)] = (14));
} else
{var statearr_11956_11988 = state_11943__$1;(statearr_11956_11988[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11944 === (2)))
{var state_11943__$1 = state_11943;if(true)
{var statearr_11957_11989 = state_11943__$1;(statearr_11957_11989[(1)] = (4));
} else
{var statearr_11958_11990 = state_11943__$1;(statearr_11958_11990[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11944 === (19)))
{var inst_11929 = (state_11943[(2)]);var state_11943__$1 = state_11943;var statearr_11959_11991 = state_11943__$1;(statearr_11959_11991[(2)] = inst_11929);
(statearr_11959_11991[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11944 === (11)))
{var inst_11898 = (state_11943[(7)]);var inst_11913 = cljs.core.nth.call(null,inst_11898,(0),null);var inst_11914 = cljs.core.deref.call(null,state);var inst_11915 = cljs.core.first.call(null,inst_11913);var inst_11916 = cljs.core.last.call(null,inst_11913);var inst_11917 = growingtree_app.core.process_api_event.call(null,app_el,state,inst_11915,inst_11916);var state_11943__$1 = (function (){var statearr_11960 = state_11943;(statearr_11960[(13)] = inst_11914);
return statearr_11960;
})();var statearr_11961_11992 = state_11943__$1;(statearr_11961_11992[(2)] = inst_11917);
(statearr_11961_11992[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11944 === (9)))
{var inst_11900 = (state_11943[(8)]);var inst_11893 = (state_11943[(11)]);var inst_11910 = cljs.core._EQ_.call(null,inst_11900,inst_11893);var state_11943__$1 = state_11943;if(inst_11910)
{var statearr_11962_11993 = state_11943__$1;(statearr_11962_11993[(1)] = (11));
} else
{var statearr_11963_11994 = state_11943__$1;(statearr_11963_11994[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11944 === (5)))
{var state_11943__$1 = state_11943;var statearr_11964_11995 = state_11943__$1;(statearr_11964_11995[(2)] = null);
(statearr_11964_11995[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11944 === (14)))
{var inst_11921 = cljs.core.deref.call(null,history);var inst_11922 = cljs.core.pr_str.call(null,inst_11921);var inst_11923 = growingtree_app.utils.mprint.call(null,inst_11922);var state_11943__$1 = state_11943;var statearr_11965_11996 = state_11943__$1;(statearr_11965_11996[(2)] = inst_11923);
(statearr_11965_11996[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11944 === (16)))
{var inst_11931 = (state_11943[(2)]);var state_11943__$1 = state_11943;var statearr_11966_11997 = state_11943__$1;(statearr_11966_11997[(2)] = inst_11931);
(statearr_11966_11997[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11944 === (10)))
{var inst_11935 = (state_11943[(2)]);var state_11943__$1 = (function (){var statearr_11967 = state_11943;(statearr_11967[(14)] = inst_11935);
return statearr_11967;
})();var statearr_11968_11998 = state_11943__$1;(statearr_11968_11998[(2)] = null);
(statearr_11968_11998[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11944 === (18)))
{var state_11943__$1 = state_11943;var statearr_11969_11999 = state_11943__$1;(statearr_11969_11999[(2)] = null);
(statearr_11969_11999[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11944 === (8)))
{var inst_11898 = (state_11943[(7)]);var inst_11904 = cljs.core.nth.call(null,inst_11898,(0),null);var inst_11905 = cljs.core.deref.call(null,state);var inst_11906 = cljs.core.first.call(null,inst_11904);var inst_11907 = cljs.core.last.call(null,inst_11904);var inst_11908 = growingtree_app.core.process_control_event.call(null,app_el,state,inst_11906,inst_11907);var state_11943__$1 = (function (){var statearr_11970 = state_11943;(statearr_11970[(15)] = inst_11905);
return statearr_11970;
})();var statearr_11971_12000 = state_11943__$1;(statearr_11971_12000[(2)] = inst_11908);
(statearr_11971_12000[(1)] = (10));
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
var state_machine__6281__auto____0 = (function (){var statearr_11975 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11975[(0)] = state_machine__6281__auto__);
(statearr_11975[(1)] = (1));
return statearr_11975;
});
var state_machine__6281__auto____1 = (function (state_11943){while(true){
var ret_value__6282__auto__ = (function (){try{while(true){
var result__6283__auto__ = switch__6280__auto__.call(null,state_11943);if(cljs.core.keyword_identical_QMARK_.call(null,result__6283__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6283__auto__;
}
break;
}
}catch (e11976){if((e11976 instanceof Object))
{var ex__6284__auto__ = e11976;var statearr_11977_12001 = state_11943;(statearr_11977_12001[(5)] = ex__6284__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11943);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e11976;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6282__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12002 = state_11943;
state_11943 = G__12002;
continue;
}
} else
{return ret_value__6282__auto__;
}
break;
}
});
state_machine__6281__auto__ = function(state_11943){
switch(arguments.length){
case 0:
return state_machine__6281__auto____0.call(this);
case 1:
return state_machine__6281__auto____1.call(this,state_11943);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6281__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6281__auto____0;
state_machine__6281__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6281__auto____1;
return state_machine__6281__auto__;
})()
;})(switch__6280__auto__,c__6345__auto__,comms,history,app_el,login_el,hist_el))
})();var state__6347__auto__ = (function (){var statearr_11978 = f__6346__auto__.call(null);(statearr_11978[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6345__auto__);
return statearr_11978;
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
var seq__12007 = cljs.core.seq.call(null,channels);var chunk__12008 = null;var count__12009 = (0);var i__12010 = (0);while(true){
if((i__12010 < count__12009))
{var channel = cljs.core._nth.call(null,chunk__12008,i__12010);growingtree_app.api.kandan.subscribe_BANG_.call(null,kandan_client,("/channels/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(channel)),new cljs.core.Keyword(null,"api","api",-899839580).cljs$core$IFn$_invoke$arity$1(comms));
{
var G__12011 = seq__12007;
var G__12012 = chunk__12008;
var G__12013 = count__12009;
var G__12014 = (i__12010 + (1));
seq__12007 = G__12011;
chunk__12008 = G__12012;
count__12009 = G__12013;
i__12010 = G__12014;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__12007);if(temp__4126__auto__)
{var seq__12007__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12007__$1))
{var c__4299__auto__ = cljs.core.chunk_first.call(null,seq__12007__$1);{
var G__12015 = cljs.core.chunk_rest.call(null,seq__12007__$1);
var G__12016 = c__4299__auto__;
var G__12017 = cljs.core.count.call(null,c__4299__auto__);
var G__12018 = (0);
seq__12007 = G__12015;
chunk__12008 = G__12016;
count__12009 = G__12017;
i__12010 = G__12018;
continue;
}
} else
{var channel = cljs.core.first.call(null,seq__12007__$1);growingtree_app.api.kandan.subscribe_BANG_.call(null,kandan_client,("/channels/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(channel)),new cljs.core.Keyword(null,"api","api",-899839580).cljs$core$IFn$_invoke$arity$1(comms));
{
var G__12019 = cljs.core.next.call(null,seq__12007__$1);
var G__12020 = null;
var G__12021 = (0);
var G__12022 = (0);
seq__12007 = G__12019;
chunk__12008 = G__12020;
count__12009 = G__12021;
i__12010 = G__12022;
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