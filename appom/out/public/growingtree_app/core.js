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
return (function (state_11950){var state_val_11951 = (state_11950[(1)]);if((state_val_11951 === (7)))
{var inst_11891 = (state_11950[(7)]);var inst_11885 = (state_11950[(8)]);var inst_11893 = (state_11950[(9)]);var inst_11891__$1 = (state_11950[(2)]);var inst_11892 = cljs.core.nth.call(null,inst_11891__$1,(0),null);var inst_11893__$1 = cljs.core.nth.call(null,inst_11891__$1,(1),null);var inst_11894 = cljs.core._EQ_.call(null,inst_11893__$1,inst_11885);var state_11950__$1 = (function (){var statearr_11952 = state_11950;(statearr_11952[(7)] = inst_11891__$1);
(statearr_11952[(9)] = inst_11893__$1);
(statearr_11952[(10)] = inst_11892);
return statearr_11952;
})();if(inst_11894)
{var statearr_11953_11992 = state_11950__$1;(statearr_11953_11992[(1)] = (8));
} else
{var statearr_11954_11993 = state_11950__$1;(statearr_11954_11993[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11951 === (20)))
{var inst_11892 = (state_11950[(10)]);var state_11950__$1 = state_11950;var statearr_11955_11994 = state_11950__$1;(statearr_11955_11994[(2)] = inst_11892);
(statearr_11955_11994[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11951 === (1)))
{var state_11950__$1 = state_11950;var statearr_11956_11995 = state_11950__$1;(statearr_11956_11995[(2)] = null);
(statearr_11956_11995[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11951 === (4)))
{var inst_11887 = (state_11950[(11)]);var inst_11885 = (state_11950[(8)]);var inst_11886 = (state_11950[(12)]);var inst_11885__$1 = new cljs.core.Keyword(null,"controls","controls",1340701452).cljs$core$IFn$_invoke$arity$1(comms);var inst_11886__$1 = new cljs.core.Keyword(null,"api","api",-899839580).cljs$core$IFn$_invoke$arity$1(comms);var inst_11887__$1 = cljs.core.async.timeout.call(null,(30000));var inst_11888 = [inst_11885__$1,inst_11886__$1,inst_11887__$1];var inst_11889 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_11888,null));var state_11950__$1 = (function (){var statearr_11957 = state_11950;(statearr_11957[(11)] = inst_11887__$1);
(statearr_11957[(8)] = inst_11885__$1);
(statearr_11957[(12)] = inst_11886__$1);
return statearr_11957;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_11950__$1,(7),inst_11889);
} else
{if((state_val_11951 === (15)))
{var inst_11887 = (state_11950[(11)]);var inst_11893 = (state_11950[(9)]);var inst_11926 = cljs.core._EQ_.call(null,inst_11893,inst_11887);var state_11950__$1 = state_11950;if(inst_11926)
{var statearr_11958_11996 = state_11950__$1;(statearr_11958_11996[(1)] = (17));
} else
{var statearr_11959_11997 = state_11950__$1;(statearr_11959_11997[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11951 === (21)))
{var state_11950__$1 = state_11950;var statearr_11960_11998 = state_11950__$1;(statearr_11960_11998[(2)] = null);
(statearr_11960_11998[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11951 === (13)))
{var inst_11913 = (state_11950[(2)]);var state_11950__$1 = state_11950;var statearr_11961_11999 = state_11950__$1;(statearr_11961_11999[(2)] = inst_11913);
(statearr_11961_11999[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11951 === (22)))
{var inst_11936 = (state_11950[(2)]);var state_11950__$1 = state_11950;var statearr_11962_12000 = state_11950__$1;(statearr_11962_12000[(2)] = inst_11936);
(statearr_11962_12000[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11951 === (6)))
{var inst_11946 = (state_11950[(2)]);var state_11950__$1 = state_11950;var statearr_11963_12001 = state_11950__$1;(statearr_11963_12001[(2)] = inst_11946);
(statearr_11963_12001[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11951 === (17)))
{var inst_11928 = cljs.core.deref.call(null,history);var inst_11929 = cljs.core.pr_str.call(null,inst_11928);var inst_11930 = growingtree_app.utils.mprint.call(null,inst_11929);var state_11950__$1 = state_11950;var statearr_11964_12002 = state_11950__$1;(statearr_11964_12002[(2)] = inst_11930);
(statearr_11964_12002[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11951 === (3)))
{var inst_11948 = (state_11950[(2)]);var state_11950__$1 = state_11950;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11950__$1,inst_11948);
} else
{if((state_val_11951 === (12)))
{var inst_11899 = (state_11950[(13)]);var inst_11898 = (state_11950[(14)]);var inst_11900 = (state_11950[(15)]);var inst_11908 = cljs.core.partial.call(null,growingtree_app.controllers.controls.control_event,app_el,inst_11899,inst_11900);var inst_11909 = cljs.core.swap_BANG_.call(null,state,inst_11908);var inst_11910 = cljs.core.deref.call(null,state);var inst_11911 = growingtree_app.controllers.post_controls.post_control_event_BANG_.call(null,app_el,inst_11899,inst_11900,inst_11898,inst_11910);var state_11950__$1 = (function (){var statearr_11965 = state_11950;(statearr_11965[(16)] = inst_11909);
return statearr_11965;
})();var statearr_11966_12003 = state_11950__$1;(statearr_11966_12003[(2)] = inst_11911);
(statearr_11966_12003[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11951 === (2)))
{var state_11950__$1 = state_11950;if(true)
{var statearr_11967_12004 = state_11950__$1;(statearr_11967_12004[(1)] = (4));
} else
{var statearr_11968_12005 = state_11950__$1;(statearr_11968_12005[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11951 === (19)))
{var inst_11938 = (state_11950[(2)]);var state_11950__$1 = state_11950;var statearr_11969_12006 = state_11950__$1;(statearr_11969_12006[(2)] = inst_11938);
(statearr_11969_12006[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11951 === (11)))
{var inst_11903 = document.getElementById("login");var inst_11904 = dommy.core.add_class_BANG_.call(null,inst_11903,"hide");var inst_11905 = document.getElementById("app");var inst_11906 = dommy.core.remove_class_BANG_.call(null,inst_11905,"hide");var state_11950__$1 = (function (){var statearr_11970 = state_11950;(statearr_11970[(17)] = inst_11904);
return statearr_11970;
})();var statearr_11971_12007 = state_11950__$1;(statearr_11971_12007[(2)] = inst_11906);
(statearr_11971_12007[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11951 === (9)))
{var inst_11886 = (state_11950[(12)]);var inst_11893 = (state_11950[(9)]);var inst_11915 = cljs.core._EQ_.call(null,inst_11893,inst_11886);var state_11950__$1 = state_11950;if(inst_11915)
{var statearr_11972_12008 = state_11950__$1;(statearr_11972_12008[(1)] = (14));
} else
{var statearr_11973_12009 = state_11950__$1;(statearr_11973_12009[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11951 === (5)))
{var state_11950__$1 = state_11950;var statearr_11974_12010 = state_11950__$1;(statearr_11974_12010[(2)] = null);
(statearr_11974_12010[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11951 === (14)))
{var inst_11891 = (state_11950[(7)]);var inst_11918 = cljs.core.nth.call(null,inst_11891,(0),null);var inst_11919 = cljs.core.deref.call(null,state);var inst_11920 = cljs.core.first.call(null,inst_11918);var inst_11921 = cljs.core.last.call(null,inst_11918);var inst_11922 = new cljs.core.Keyword(null,"things-vec","things-vec",-1363222375).cljs$core$IFn$_invoke$arity$1(inst_11921);var inst_11923 = cljs.core.partial.call(null,growingtree_app.controllers.api.api_event,app_el,inst_11920,inst_11921);var inst_11924 = cljs.core.swap_BANG_.call(null,state,inst_11923);var state_11950__$1 = (function (){var statearr_11975 = state_11950;(statearr_11975[(18)] = inst_11922);
(statearr_11975[(19)] = inst_11919);
return statearr_11975;
})();var statearr_11976_12011 = state_11950__$1;(statearr_11976_12011[(2)] = inst_11924);
(statearr_11976_12011[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11951 === (16)))
{var inst_11940 = (state_11950[(2)]);var state_11950__$1 = state_11950;var statearr_11977_12012 = state_11950__$1;(statearr_11977_12012[(2)] = inst_11940);
(statearr_11977_12012[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11951 === (10)))
{var inst_11942 = (state_11950[(2)]);var state_11950__$1 = (function (){var statearr_11978 = state_11950;(statearr_11978[(20)] = inst_11942);
return statearr_11978;
})();var statearr_11979_12013 = state_11950__$1;(statearr_11979_12013[(2)] = null);
(statearr_11979_12013[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11951 === (18)))
{var inst_11893 = (state_11950[(9)]);var inst_11932 = cljs.core._EQ_.call(null,inst_11893,new cljs.core.Keyword(null,"default","default",-1987822328));var state_11950__$1 = state_11950;if(inst_11932)
{var statearr_11980_12014 = state_11950__$1;(statearr_11980_12014[(1)] = (20));
} else
{var statearr_11981_12015 = state_11950__$1;(statearr_11981_12015[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11951 === (8)))
{var inst_11899 = (state_11950[(13)]);var inst_11891 = (state_11950[(7)]);var inst_11897 = cljs.core.nth.call(null,inst_11891,(0),null);var inst_11898 = cljs.core.deref.call(null,state);var inst_11899__$1 = cljs.core.first.call(null,inst_11897);var inst_11900 = cljs.core.last.call(null,inst_11897);var inst_11901 = cljs.core._EQ_.call(null,inst_11899__$1,new cljs.core.Keyword(null,"logged-in","logged-in",627058423));var state_11950__$1 = (function (){var statearr_11982 = state_11950;(statearr_11982[(13)] = inst_11899__$1);
(statearr_11982[(14)] = inst_11898);
(statearr_11982[(15)] = inst_11900);
return statearr_11982;
})();if(inst_11901)
{var statearr_11983_12016 = state_11950__$1;(statearr_11983_12016[(1)] = (11));
} else
{var statearr_11984_12017 = state_11950__$1;(statearr_11984_12017[(1)] = (12));
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
var state_machine__6281__auto____0 = (function (){var statearr_11988 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11988[(0)] = state_machine__6281__auto__);
(statearr_11988[(1)] = (1));
return statearr_11988;
});
var state_machine__6281__auto____1 = (function (state_11950){while(true){
var ret_value__6282__auto__ = (function (){try{while(true){
var result__6283__auto__ = switch__6280__auto__.call(null,state_11950);if(cljs.core.keyword_identical_QMARK_.call(null,result__6283__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6283__auto__;
}
break;
}
}catch (e11989){if((e11989 instanceof Object))
{var ex__6284__auto__ = e11989;var statearr_11990_12018 = state_11950;(statearr_11990_12018[(5)] = ex__6284__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11950);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e11989;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6282__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12019 = state_11950;
state_11950 = G__12019;
continue;
}
} else
{return ret_value__6282__auto__;
}
break;
}
});
state_machine__6281__auto__ = function(state_11950){
switch(arguments.length){
case 0:
return state_machine__6281__auto____0.call(this);
case 1:
return state_machine__6281__auto____1.call(this,state_11950);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6281__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6281__auto____0;
state_machine__6281__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6281__auto____1;
return state_machine__6281__auto__;
})()
;})(switch__6280__auto__,c__6345__auto__,comms,history,app_el,login_el,hist_el))
})();var state__6347__auto__ = (function (){var statearr_11991 = f__6346__auto__.call(null);(statearr_11991[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6345__auto__);
return statearr_11991;
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
var seq__12024 = cljs.core.seq.call(null,channels);var chunk__12025 = null;var count__12026 = (0);var i__12027 = (0);while(true){
if((i__12027 < count__12026))
{var channel = cljs.core._nth.call(null,chunk__12025,i__12027);growingtree_app.api.kandan.subscribe_BANG_.call(null,kandan_client,("/channels/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(channel)),new cljs.core.Keyword(null,"api","api",-899839580).cljs$core$IFn$_invoke$arity$1(comms));
{
var G__12028 = seq__12024;
var G__12029 = chunk__12025;
var G__12030 = count__12026;
var G__12031 = (i__12027 + (1));
seq__12024 = G__12028;
chunk__12025 = G__12029;
count__12026 = G__12030;
i__12027 = G__12031;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__12024);if(temp__4126__auto__)
{var seq__12024__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12024__$1))
{var c__4299__auto__ = cljs.core.chunk_first.call(null,seq__12024__$1);{
var G__12032 = cljs.core.chunk_rest.call(null,seq__12024__$1);
var G__12033 = c__4299__auto__;
var G__12034 = cljs.core.count.call(null,c__4299__auto__);
var G__12035 = (0);
seq__12024 = G__12032;
chunk__12025 = G__12033;
count__12026 = G__12034;
i__12027 = G__12035;
continue;
}
} else
{var channel = cljs.core.first.call(null,seq__12024__$1);growingtree_app.api.kandan.subscribe_BANG_.call(null,kandan_client,("/channels/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(channel)),new cljs.core.Keyword(null,"api","api",-899839580).cljs$core$IFn$_invoke$arity$1(comms));
{
var G__12036 = cljs.core.next.call(null,seq__12024__$1);
var G__12037 = null;
var G__12038 = (0);
var G__12039 = (0);
seq__12024 = G__12036;
chunk__12025 = G__12037;
count__12026 = G__12038;
i__12027 = G__12039;
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