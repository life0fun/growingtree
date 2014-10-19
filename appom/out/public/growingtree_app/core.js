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
{var inst_11887 = (state_11943[(7)]);var inst_11889 = (state_11943[(8)]);var inst_11881 = (state_11943[(9)]);var inst_11887__$1 = (state_11943[(2)]);var inst_11888 = cljs.core.nth.call(null,inst_11887__$1,(0),null);var inst_11889__$1 = cljs.core.nth.call(null,inst_11887__$1,(1),null);var inst_11890 = cljs.core._EQ_.call(null,inst_11889__$1,inst_11881);var state_11943__$1 = (function (){var statearr_11945 = state_11943;(statearr_11945[(10)] = inst_11888);
(statearr_11945[(7)] = inst_11887__$1);
(statearr_11945[(8)] = inst_11889__$1);
return statearr_11945;
})();if(inst_11890)
{var statearr_11946_11984 = state_11943__$1;(statearr_11946_11984[(1)] = (8));
} else
{var statearr_11947_11985 = state_11943__$1;(statearr_11947_11985[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11944 === (20)))
{var inst_11888 = (state_11943[(10)]);var state_11943__$1 = state_11943;var statearr_11948_11986 = state_11943__$1;(statearr_11948_11986[(2)] = inst_11888);
(statearr_11948_11986[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11944 === (1)))
{var state_11943__$1 = state_11943;var statearr_11949_11987 = state_11943__$1;(statearr_11949_11987[(2)] = null);
(statearr_11949_11987[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11944 === (4)))
{var inst_11882 = (state_11943[(11)]);var inst_11881 = (state_11943[(9)]);var inst_11883 = (state_11943[(12)]);var inst_11881__$1 = new cljs.core.Keyword(null,"controls","controls",1340701452).cljs$core$IFn$_invoke$arity$1(comms);var inst_11882__$1 = new cljs.core.Keyword(null,"api","api",-899839580).cljs$core$IFn$_invoke$arity$1(comms);var inst_11883__$1 = cljs.core.async.timeout.call(null,(30000));var inst_11884 = [inst_11881__$1,inst_11882__$1,inst_11883__$1];var inst_11885 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_11884,null));var state_11943__$1 = (function (){var statearr_11950 = state_11943;(statearr_11950[(11)] = inst_11882__$1);
(statearr_11950[(9)] = inst_11881__$1);
(statearr_11950[(12)] = inst_11883__$1);
return statearr_11950;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_11943__$1,(7),inst_11885);
} else
{if((state_val_11944 === (15)))
{var inst_11889 = (state_11943[(8)]);var inst_11883 = (state_11943[(12)]);var inst_11919 = cljs.core._EQ_.call(null,inst_11889,inst_11883);var state_11943__$1 = state_11943;if(inst_11919)
{var statearr_11951_11988 = state_11943__$1;(statearr_11951_11988[(1)] = (17));
} else
{var statearr_11952_11989 = state_11943__$1;(statearr_11952_11989[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11944 === (21)))
{var state_11943__$1 = state_11943;var statearr_11953_11990 = state_11943__$1;(statearr_11953_11990[(2)] = null);
(statearr_11953_11990[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11944 === (13)))
{var inst_11906 = (state_11943[(2)]);var state_11943__$1 = state_11943;var statearr_11954_11991 = state_11943__$1;(statearr_11954_11991[(2)] = inst_11906);
(statearr_11954_11991[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11944 === (22)))
{var inst_11929 = (state_11943[(2)]);var state_11943__$1 = state_11943;var statearr_11955_11992 = state_11943__$1;(statearr_11955_11992[(2)] = inst_11929);
(statearr_11955_11992[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11944 === (6)))
{var inst_11939 = (state_11943[(2)]);var state_11943__$1 = state_11943;var statearr_11956_11993 = state_11943__$1;(statearr_11956_11993[(2)] = inst_11939);
(statearr_11956_11993[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11944 === (17)))
{var inst_11921 = cljs.core.deref.call(null,history);var inst_11922 = cljs.core.pr_str.call(null,inst_11921);var inst_11923 = growingtree_app.utils.mprint.call(null,inst_11922);var state_11943__$1 = state_11943;var statearr_11957_11994 = state_11943__$1;(statearr_11957_11994[(2)] = inst_11923);
(statearr_11957_11994[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11944 === (3)))
{var inst_11941 = (state_11943[(2)]);var state_11943__$1 = state_11943;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11943__$1,inst_11941);
} else
{if((state_val_11944 === (12)))
{var inst_11896 = (state_11943[(13)]);var inst_11895 = (state_11943[(14)]);var inst_11894 = (state_11943[(15)]);var inst_11901 = cljs.core.partial.call(null,growingtree_app.controllers.states.transition,app_el,inst_11895,inst_11896);var inst_11902 = cljs.core.swap_BANG_.call(null,state,inst_11901);var inst_11903 = cljs.core.deref.call(null,state);var inst_11904 = growingtree_app.controllers.requester.request.call(null,app_el,inst_11895,inst_11896,inst_11894,inst_11903);var state_11943__$1 = (function (){var statearr_11958 = state_11943;(statearr_11958[(16)] = inst_11902);
return statearr_11958;
})();var statearr_11959_11995 = state_11943__$1;(statearr_11959_11995[(2)] = inst_11904);
(statearr_11959_11995[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11944 === (2)))
{var state_11943__$1 = state_11943;if(true)
{var statearr_11960_11996 = state_11943__$1;(statearr_11960_11996[(1)] = (4));
} else
{var statearr_11961_11997 = state_11943__$1;(statearr_11961_11997[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11944 === (19)))
{var inst_11931 = (state_11943[(2)]);var state_11943__$1 = state_11943;var statearr_11962_11998 = state_11943__$1;(statearr_11962_11998[(2)] = inst_11931);
(statearr_11962_11998[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11944 === (11)))
{var inst_11899 = growingtree_app.ui.show_app.call(null);var state_11943__$1 = state_11943;var statearr_11963_11999 = state_11943__$1;(statearr_11963_11999[(2)] = inst_11899);
(statearr_11963_11999[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11944 === (9)))
{var inst_11882 = (state_11943[(11)]);var inst_11889 = (state_11943[(8)]);var inst_11908 = cljs.core._EQ_.call(null,inst_11889,inst_11882);var state_11943__$1 = state_11943;if(inst_11908)
{var statearr_11964_12000 = state_11943__$1;(statearr_11964_12000[(1)] = (14));
} else
{var statearr_11965_12001 = state_11943__$1;(statearr_11965_12001[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11944 === (5)))
{var state_11943__$1 = state_11943;var statearr_11966_12002 = state_11943__$1;(statearr_11966_12002[(2)] = null);
(statearr_11966_12002[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11944 === (14)))
{var inst_11887 = (state_11943[(7)]);var inst_11911 = cljs.core.nth.call(null,inst_11887,(0),null);var inst_11912 = cljs.core.deref.call(null,state);var inst_11913 = cljs.core.first.call(null,inst_11911);var inst_11914 = cljs.core.last.call(null,inst_11911);var inst_11915 = new cljs.core.Keyword(null,"things-vec","things-vec",-1363222375).cljs$core$IFn$_invoke$arity$1(inst_11914);var inst_11916 = cljs.core.partial.call(null,growingtree_app.controllers.states.transition,app_el,inst_11913,inst_11914);var inst_11917 = cljs.core.swap_BANG_.call(null,state,inst_11916);var state_11943__$1 = (function (){var statearr_11967 = state_11943;(statearr_11967[(17)] = inst_11912);
(statearr_11967[(18)] = inst_11915);
return statearr_11967;
})();var statearr_11968_12003 = state_11943__$1;(statearr_11968_12003[(2)] = inst_11917);
(statearr_11968_12003[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11944 === (16)))
{var inst_11933 = (state_11943[(2)]);var state_11943__$1 = state_11943;var statearr_11969_12004 = state_11943__$1;(statearr_11969_12004[(2)] = inst_11933);
(statearr_11969_12004[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11944 === (10)))
{var inst_11935 = (state_11943[(2)]);var state_11943__$1 = (function (){var statearr_11970 = state_11943;(statearr_11970[(19)] = inst_11935);
return statearr_11970;
})();var statearr_11971_12005 = state_11943__$1;(statearr_11971_12005[(2)] = null);
(statearr_11971_12005[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11944 === (18)))
{var inst_11889 = (state_11943[(8)]);var inst_11925 = cljs.core._EQ_.call(null,inst_11889,new cljs.core.Keyword(null,"default","default",-1987822328));var state_11943__$1 = state_11943;if(inst_11925)
{var statearr_11972_12006 = state_11943__$1;(statearr_11972_12006[(1)] = (20));
} else
{var statearr_11973_12007 = state_11943__$1;(statearr_11973_12007[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11944 === (8)))
{var inst_11887 = (state_11943[(7)]);var inst_11895 = (state_11943[(14)]);var inst_11893 = cljs.core.nth.call(null,inst_11887,(0),null);var inst_11894 = cljs.core.deref.call(null,state);var inst_11895__$1 = cljs.core.first.call(null,inst_11893);var inst_11896 = cljs.core.last.call(null,inst_11893);var inst_11897 = cljs.core._EQ_.call(null,inst_11895__$1,new cljs.core.Keyword(null,"logged-in","logged-in",627058423));var state_11943__$1 = (function (){var statearr_11974 = state_11943;(statearr_11974[(13)] = inst_11896);
(statearr_11974[(14)] = inst_11895__$1);
(statearr_11974[(15)] = inst_11894);
return statearr_11974;
})();if(inst_11897)
{var statearr_11975_12008 = state_11943__$1;(statearr_11975_12008[(1)] = (11));
} else
{var statearr_11976_12009 = state_11943__$1;(statearr_11976_12009[(1)] = (12));
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
var state_machine__6281__auto____0 = (function (){var statearr_11980 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11980[(0)] = state_machine__6281__auto__);
(statearr_11980[(1)] = (1));
return statearr_11980;
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
}catch (e11981){if((e11981 instanceof Object))
{var ex__6284__auto__ = e11981;var statearr_11982_12010 = state_11943;(statearr_11982_12010[(5)] = ex__6284__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11943);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e11981;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6282__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12011 = state_11943;
state_11943 = G__12011;
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
})();var state__6347__auto__ = (function (){var statearr_11983 = f__6346__auto__.call(null);(statearr_11983[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6345__auto__);
return statearr_11983;
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
var seq__12016 = cljs.core.seq.call(null,channels);var chunk__12017 = null;var count__12018 = (0);var i__12019 = (0);while(true){
if((i__12019 < count__12018))
{var channel = cljs.core._nth.call(null,chunk__12017,i__12019);growingtree_app.api.kandan.subscribe_BANG_.call(null,kandan_client,("/channels/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(channel)),new cljs.core.Keyword(null,"api","api",-899839580).cljs$core$IFn$_invoke$arity$1(comms));
{
var G__12020 = seq__12016;
var G__12021 = chunk__12017;
var G__12022 = count__12018;
var G__12023 = (i__12019 + (1));
seq__12016 = G__12020;
chunk__12017 = G__12021;
count__12018 = G__12022;
i__12019 = G__12023;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__12016);if(temp__4126__auto__)
{var seq__12016__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12016__$1))
{var c__4299__auto__ = cljs.core.chunk_first.call(null,seq__12016__$1);{
var G__12024 = cljs.core.chunk_rest.call(null,seq__12016__$1);
var G__12025 = c__4299__auto__;
var G__12026 = cljs.core.count.call(null,c__4299__auto__);
var G__12027 = (0);
seq__12016 = G__12024;
chunk__12017 = G__12025;
count__12018 = G__12026;
i__12019 = G__12027;
continue;
}
} else
{var channel = cljs.core.first.call(null,seq__12016__$1);growingtree_app.api.kandan.subscribe_BANG_.call(null,kandan_client,("/channels/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(channel)),new cljs.core.Keyword(null,"api","api",-899839580).cljs$core$IFn$_invoke$arity$1(comms));
{
var G__12028 = cljs.core.next.call(null,seq__12016__$1);
var G__12029 = null;
var G__12030 = (0);
var G__12031 = (0);
seq__12016 = G__12028;
chunk__12017 = G__12029;
count__12018 = G__12030;
i__12019 = G__12031;
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