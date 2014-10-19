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
growingtree_app.core.process_control_event = (function process_control_event(el,state,msg_type,msg_data){var previous_state = cljs.core.deref.call(null,state);cljs.core.swap_BANG_.call(null,state,cljs.core.partial.call(null,growingtree_app.controllers.states.transition,el,msg_type,msg_data));
return growingtree_app.controllers.requester.request.call(null,el,msg_type,msg_data,previous_state,cljs.core.deref.call(null,state));
});
growingtree_app.core.process_api_event = (function process_api_event(el,state,msg_type,msg_data){var previous_state = cljs.core.deref.call(null,state);return cljs.core.swap_BANG_.call(null,state,cljs.core.partial.call(null,growingtree_app.controllers.states.transition,growingtree_app.core.app_el,msg_type,msg_data));
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
return (function (state_11932){var state_val_11933 = (state_11932[(1)]);if((state_val_11933 === (7)))
{var inst_11875 = (state_11932[(7)]);var inst_11881 = (state_11932[(8)]);var inst_11883 = (state_11932[(9)]);var inst_11881__$1 = (state_11932[(2)]);var inst_11882 = cljs.core.nth.call(null,inst_11881__$1,(0),null);var inst_11883__$1 = cljs.core.nth.call(null,inst_11881__$1,(1),null);var inst_11884 = cljs.core._EQ_.call(null,inst_11883__$1,inst_11875);var state_11932__$1 = (function (){var statearr_11934 = state_11932;(statearr_11934[(10)] = inst_11882);
(statearr_11934[(8)] = inst_11881__$1);
(statearr_11934[(9)] = inst_11883__$1);
return statearr_11934;
})();if(inst_11884)
{var statearr_11935_11972 = state_11932__$1;(statearr_11935_11972[(1)] = (8));
} else
{var statearr_11936_11973 = state_11932__$1;(statearr_11936_11973[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11933 === (20)))
{var inst_11882 = (state_11932[(10)]);var state_11932__$1 = state_11932;var statearr_11937_11974 = state_11932__$1;(statearr_11937_11974[(2)] = inst_11882);
(statearr_11937_11974[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11933 === (1)))
{var state_11932__$1 = state_11932;var statearr_11938_11975 = state_11932__$1;(statearr_11938_11975[(2)] = null);
(statearr_11938_11975[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11933 === (4)))
{var inst_11875 = (state_11932[(7)]);var inst_11876 = (state_11932[(11)]);var inst_11877 = (state_11932[(12)]);var inst_11875__$1 = new cljs.core.Keyword(null,"controls","controls",1340701452).cljs$core$IFn$_invoke$arity$1(comms);var inst_11876__$1 = new cljs.core.Keyword(null,"api","api",-899839580).cljs$core$IFn$_invoke$arity$1(comms);var inst_11877__$1 = cljs.core.async.timeout.call(null,(30000));var inst_11878 = [inst_11875__$1,inst_11876__$1,inst_11877__$1];var inst_11879 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_11878,null));var state_11932__$1 = (function (){var statearr_11939 = state_11932;(statearr_11939[(7)] = inst_11875__$1);
(statearr_11939[(11)] = inst_11876__$1);
(statearr_11939[(12)] = inst_11877__$1);
return statearr_11939;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_11932__$1,(7),inst_11879);
} else
{if((state_val_11933 === (15)))
{var inst_11877 = (state_11932[(12)]);var inst_11883 = (state_11932[(9)]);var inst_11908 = cljs.core._EQ_.call(null,inst_11883,inst_11877);var state_11932__$1 = state_11932;if(inst_11908)
{var statearr_11940_11976 = state_11932__$1;(statearr_11940_11976[(1)] = (17));
} else
{var statearr_11941_11977 = state_11932__$1;(statearr_11941_11977[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11933 === (21)))
{var state_11932__$1 = state_11932;var statearr_11942_11978 = state_11932__$1;(statearr_11942_11978[(2)] = null);
(statearr_11942_11978[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11933 === (13)))
{var inst_11897 = (state_11932[(2)]);var state_11932__$1 = state_11932;var statearr_11943_11979 = state_11932__$1;(statearr_11943_11979[(2)] = inst_11897);
(statearr_11943_11979[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11933 === (22)))
{var inst_11918 = (state_11932[(2)]);var state_11932__$1 = state_11932;var statearr_11944_11980 = state_11932__$1;(statearr_11944_11980[(2)] = inst_11918);
(statearr_11944_11980[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11933 === (6)))
{var inst_11928 = (state_11932[(2)]);var state_11932__$1 = state_11932;var statearr_11945_11981 = state_11932__$1;(statearr_11945_11981[(2)] = inst_11928);
(statearr_11945_11981[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11933 === (17)))
{var inst_11910 = cljs.core.deref.call(null,history);var inst_11911 = cljs.core.pr_str.call(null,inst_11910);var inst_11912 = growingtree_app.utils.mprint.call(null,inst_11911);var state_11932__$1 = state_11932;var statearr_11946_11982 = state_11932__$1;(statearr_11946_11982[(2)] = inst_11912);
(statearr_11946_11982[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11933 === (3)))
{var inst_11930 = (state_11932[(2)]);var state_11932__$1 = state_11932;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11932__$1,inst_11930);
} else
{if((state_val_11933 === (12)))
{var inst_11890 = (state_11932[(13)]);var inst_11889 = (state_11932[(14)]);var inst_11895 = growingtree_app.core.process_control_event.call(null,app_el,state,inst_11889,inst_11890);var state_11932__$1 = state_11932;var statearr_11947_11983 = state_11932__$1;(statearr_11947_11983[(2)] = inst_11895);
(statearr_11947_11983[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11933 === (2)))
{var state_11932__$1 = state_11932;if(true)
{var statearr_11948_11984 = state_11932__$1;(statearr_11948_11984[(1)] = (4));
} else
{var statearr_11949_11985 = state_11932__$1;(statearr_11949_11985[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11933 === (19)))
{var inst_11920 = (state_11932[(2)]);var state_11932__$1 = state_11932;var statearr_11950_11986 = state_11932__$1;(statearr_11950_11986[(2)] = inst_11920);
(statearr_11950_11986[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11933 === (11)))
{var inst_11893 = growingtree_app.core.detach_login_show_app.call(null);var state_11932__$1 = state_11932;var statearr_11951_11987 = state_11932__$1;(statearr_11951_11987[(2)] = inst_11893);
(statearr_11951_11987[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11933 === (9)))
{var inst_11876 = (state_11932[(11)]);var inst_11883 = (state_11932[(9)]);var inst_11899 = cljs.core._EQ_.call(null,inst_11883,inst_11876);var state_11932__$1 = state_11932;if(inst_11899)
{var statearr_11952_11988 = state_11932__$1;(statearr_11952_11988[(1)] = (14));
} else
{var statearr_11953_11989 = state_11932__$1;(statearr_11953_11989[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11933 === (5)))
{var state_11932__$1 = state_11932;var statearr_11954_11990 = state_11932__$1;(statearr_11954_11990[(2)] = null);
(statearr_11954_11990[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11933 === (14)))
{var inst_11881 = (state_11932[(8)]);var inst_11902 = cljs.core.nth.call(null,inst_11881,(0),null);var inst_11903 = cljs.core.deref.call(null,state);var inst_11904 = cljs.core.first.call(null,inst_11902);var inst_11905 = cljs.core.last.call(null,inst_11902);var inst_11906 = growingtree_app.core.process_api_event.call(null,app_el,state,inst_11904,inst_11905);var state_11932__$1 = (function (){var statearr_11955 = state_11932;(statearr_11955[(15)] = inst_11903);
return statearr_11955;
})();var statearr_11956_11991 = state_11932__$1;(statearr_11956_11991[(2)] = inst_11906);
(statearr_11956_11991[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11933 === (16)))
{var inst_11922 = (state_11932[(2)]);var state_11932__$1 = state_11932;var statearr_11957_11992 = state_11932__$1;(statearr_11957_11992[(2)] = inst_11922);
(statearr_11957_11992[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11933 === (10)))
{var inst_11924 = (state_11932[(2)]);var state_11932__$1 = (function (){var statearr_11958 = state_11932;(statearr_11958[(16)] = inst_11924);
return statearr_11958;
})();var statearr_11959_11993 = state_11932__$1;(statearr_11959_11993[(2)] = null);
(statearr_11959_11993[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11933 === (18)))
{var inst_11883 = (state_11932[(9)]);var inst_11914 = cljs.core._EQ_.call(null,inst_11883,new cljs.core.Keyword(null,"default","default",-1987822328));var state_11932__$1 = state_11932;if(inst_11914)
{var statearr_11960_11994 = state_11932__$1;(statearr_11960_11994[(1)] = (20));
} else
{var statearr_11961_11995 = state_11932__$1;(statearr_11961_11995[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11933 === (8)))
{var inst_11889 = (state_11932[(14)]);var inst_11881 = (state_11932[(8)]);var inst_11887 = cljs.core.nth.call(null,inst_11881,(0),null);var inst_11888 = cljs.core.deref.call(null,state);var inst_11889__$1 = cljs.core.first.call(null,inst_11887);var inst_11890 = cljs.core.last.call(null,inst_11887);var inst_11891 = cljs.core._EQ_.call(null,inst_11889__$1,new cljs.core.Keyword(null,"logged-in","logged-in",627058423));var state_11932__$1 = (function (){var statearr_11962 = state_11932;(statearr_11962[(17)] = inst_11888);
(statearr_11962[(13)] = inst_11890);
(statearr_11962[(14)] = inst_11889__$1);
return statearr_11962;
})();if(inst_11891)
{var statearr_11963_11996 = state_11932__$1;(statearr_11963_11996[(1)] = (11));
} else
{var statearr_11964_11997 = state_11932__$1;(statearr_11964_11997[(1)] = (12));
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
});})(c__6345__auto__,comms,history,app_el,login_el,hist_el))
;return ((function (switch__6280__auto__,c__6345__auto__,comms,history,app_el,login_el,hist_el){
return (function() {
var state_machine__6281__auto__ = null;
var state_machine__6281__auto____0 = (function (){var statearr_11968 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11968[(0)] = state_machine__6281__auto__);
(statearr_11968[(1)] = (1));
return statearr_11968;
});
var state_machine__6281__auto____1 = (function (state_11932){while(true){
var ret_value__6282__auto__ = (function (){try{while(true){
var result__6283__auto__ = switch__6280__auto__.call(null,state_11932);if(cljs.core.keyword_identical_QMARK_.call(null,result__6283__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6283__auto__;
}
break;
}
}catch (e11969){if((e11969 instanceof Object))
{var ex__6284__auto__ = e11969;var statearr_11970_11998 = state_11932;(statearr_11970_11998[(5)] = ex__6284__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11932);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e11969;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6282__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11999 = state_11932;
state_11932 = G__11999;
continue;
}
} else
{return ret_value__6282__auto__;
}
break;
}
});
state_machine__6281__auto__ = function(state_11932){
switch(arguments.length){
case 0:
return state_machine__6281__auto____0.call(this);
case 1:
return state_machine__6281__auto____1.call(this,state_11932);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6281__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6281__auto____0;
state_machine__6281__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6281__auto____1;
return state_machine__6281__auto__;
})()
;})(switch__6280__auto__,c__6345__auto__,comms,history,app_el,login_el,hist_el))
})();var state__6347__auto__ = (function (){var statearr_11971 = f__6346__auto__.call(null);(statearr_11971[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6345__auto__);
return statearr_11971;
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
var seq__12004 = cljs.core.seq.call(null,channels);var chunk__12005 = null;var count__12006 = (0);var i__12007 = (0);while(true){
if((i__12007 < count__12006))
{var channel = cljs.core._nth.call(null,chunk__12005,i__12007);growingtree_app.api.kandan.subscribe_BANG_.call(null,kandan_client,("/channels/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(channel)),new cljs.core.Keyword(null,"api","api",-899839580).cljs$core$IFn$_invoke$arity$1(comms));
{
var G__12008 = seq__12004;
var G__12009 = chunk__12005;
var G__12010 = count__12006;
var G__12011 = (i__12007 + (1));
seq__12004 = G__12008;
chunk__12005 = G__12009;
count__12006 = G__12010;
i__12007 = G__12011;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__12004);if(temp__4126__auto__)
{var seq__12004__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12004__$1))
{var c__4299__auto__ = cljs.core.chunk_first.call(null,seq__12004__$1);{
var G__12012 = cljs.core.chunk_rest.call(null,seq__12004__$1);
var G__12013 = c__4299__auto__;
var G__12014 = cljs.core.count.call(null,c__4299__auto__);
var G__12015 = (0);
seq__12004 = G__12012;
chunk__12005 = G__12013;
count__12006 = G__12014;
i__12007 = G__12015;
continue;
}
} else
{var channel = cljs.core.first.call(null,seq__12004__$1);growingtree_app.api.kandan.subscribe_BANG_.call(null,kandan_client,("/channels/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(channel)),new cljs.core.Keyword(null,"api","api",-899839580).cljs$core$IFn$_invoke$arity$1(comms));
{
var G__12016 = cljs.core.next.call(null,seq__12004__$1);
var G__12017 = null;
var G__12018 = (0);
var G__12019 = (0);
seq__12004 = G__12016;
chunk__12005 = G__12017;
count__12006 = G__12018;
i__12007 = G__12019;
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