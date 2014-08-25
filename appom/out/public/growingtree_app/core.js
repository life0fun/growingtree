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
goog.require('growingtree_app.mock_data');
goog.require('growingtree_app.datetime');
goog.require('growingtree_app.datetime');
goog.require('growingtree_app.useful');
goog.require('growingtree_app.controllers.controls');
goog.require('growingtree_app.utils');
goog.require('clojure.string');
goog.require('om.core');
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
growingtree_app.core.main = (function main(target,state){var comms = new cljs.core.Keyword(null,"comms","comms",460172477).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state));var history = (function (){var or__3543__auto__ = growingtree_app.core.history;if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
})();growingtree_app.routes.define_routes_BANG_.call(null,state,document.getElementById("history-container"));
om.core.root.call(null,growingtree_app.components.app.app,state,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),target,new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"comms","comms",460172477),comms], null)], null));
var c__6345__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6345__auto__,comms,history){
return (function (){var f__6346__auto__ = (function (){var switch__6280__auto__ = ((function (c__6345__auto__,comms,history){
return (function (state_12000){var state_val_12001 = (state_12000[(1)]);if((state_val_12001 === (7)))
{var inst_11911 = (state_12000[(7)]);var inst_11913 = (state_12000[(8)]);var inst_11905 = (state_12000[(9)]);var inst_11911__$1 = (state_12000[(2)]);var inst_11912 = cljs.core.nth.call(null,inst_11911__$1,(0),null);var inst_11913__$1 = cljs.core.nth.call(null,inst_11911__$1,(1),null);var inst_11914 = cljs.core._EQ_.call(null,inst_11913__$1,inst_11905);var state_12000__$1 = (function (){var statearr_12002 = state_12000;(statearr_12002[(10)] = inst_11912);
(statearr_12002[(7)] = inst_11911__$1);
(statearr_12002[(8)] = inst_11913__$1);
return statearr_12002;
})();if(inst_11914)
{var statearr_12003_12060 = state_12000__$1;(statearr_12003_12060[(1)] = (8));
} else
{var statearr_12004_12061 = state_12000__$1;(statearr_12004_12061[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12001 === (20)))
{var inst_11937 = (state_12000[(11)]);var inst_11940 = [new cljs.core.Keyword(null,"body","body",-2049205669),(0)];var inst_11941 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_11940,null));var inst_11942 = cljs.core.get_in.call(null,inst_11937,inst_11941);var state_12000__$1 = state_12000;var statearr_12005_12062 = state_12000__$1;(statearr_12005_12062[(2)] = inst_11942);
(statearr_12005_12062[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12001 === (27)))
{var state_12000__$1 = state_12000;var statearr_12006_12063 = state_12000__$1;(statearr_12006_12063[(2)] = null);
(statearr_12006_12063[(1)] = (28));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12001 === (1)))
{var state_12000__$1 = state_12000;var statearr_12007_12064 = state_12000__$1;(statearr_12007_12064[(2)] = null);
(statearr_12007_12064[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12001 === (24)))
{var inst_11907 = (state_12000[(12)]);var inst_11913 = (state_12000[(8)]);var inst_11976 = cljs.core._EQ_.call(null,inst_11913,inst_11907);var state_12000__$1 = state_12000;if(inst_11976)
{var statearr_12008_12065 = state_12000__$1;(statearr_12008_12065[(1)] = (29));
} else
{var statearr_12009_12066 = state_12000__$1;(statearr_12009_12066[(1)] = (30));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12001 === (4)))
{var inst_11907 = (state_12000[(12)]);var inst_11906 = (state_12000[(13)]);var inst_11905 = (state_12000[(9)]);var inst_11905__$1 = new cljs.core.Keyword(null,"controls","controls",1340701452).cljs$core$IFn$_invoke$arity$1(comms);var inst_11906__$1 = new cljs.core.Keyword(null,"api","api",-899839580).cljs$core$IFn$_invoke$arity$1(comms);var inst_11907__$1 = cljs.core.async.timeout.call(null,(30000));var inst_11908 = [inst_11905__$1,inst_11906__$1,inst_11907__$1];var inst_11909 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_11908,null));var state_12000__$1 = (function (){var statearr_12010 = state_12000;(statearr_12010[(12)] = inst_11907__$1);
(statearr_12010[(13)] = inst_11906__$1);
(statearr_12010[(9)] = inst_11905__$1);
return statearr_12010;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_12000__$1,(7),inst_11909);
} else
{if((state_val_12001 === (15)))
{var state_12000__$1 = state_12000;if(new cljs.core.Keyword(null,"else","else",-1508377146))
{var statearr_12011_12067 = state_12000__$1;(statearr_12011_12067[(1)] = (17));
} else
{var statearr_12012_12068 = state_12000__$1;(statearr_12012_12068[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12001 === (21)))
{var inst_11925 = (state_12000[(14)]);var state_12000__$1 = state_12000;var statearr_12013_12069 = state_12000__$1;(statearr_12013_12069[(2)] = inst_11925);
(statearr_12013_12069[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12001 === (31)))
{var inst_11988 = (state_12000[(2)]);var state_12000__$1 = state_12000;var statearr_12014_12070 = state_12000__$1;(statearr_12014_12070[(2)] = inst_11988);
(statearr_12014_12070[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12001 === (32)))
{var inst_11912 = (state_12000[(10)]);var state_12000__$1 = state_12000;var statearr_12015_12071 = state_12000__$1;(statearr_12015_12071[(2)] = inst_11912);
(statearr_12015_12071[(1)] = (34));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12001 === (33)))
{var state_12000__$1 = state_12000;var statearr_12016_12072 = state_12000__$1;(statearr_12016_12072[(2)] = null);
(statearr_12016_12072[(1)] = (34));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12001 === (13)))
{var inst_11917 = (state_12000[(15)]);var inst_11925 = (state_12000[(14)]);var inst_11923 = (state_12000[(2)]);var inst_11924 = cljs.core.deref.call(null,state);var inst_11925__$1 = cljs.core.first.call(null,inst_11917);var inst_11926 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"refresh","refresh",1947415525),inst_11925__$1);var state_12000__$1 = (function (){var statearr_12017 = state_12000;(statearr_12017[(16)] = inst_11923);
(statearr_12017[(14)] = inst_11925__$1);
(statearr_12017[(17)] = inst_11924);
return statearr_12017;
})();if(inst_11926)
{var statearr_12018_12073 = state_12000__$1;(statearr_12018_12073[(1)] = (14));
} else
{var statearr_12019_12074 = state_12000__$1;(statearr_12019_12074[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12001 === (22)))
{var inst_11937 = (state_12000[(11)]);var inst_11924 = (state_12000[(17)]);var inst_11945 = (state_12000[(2)]);var inst_11946 = om.core.rendering_QMARK_.call(null);var inst_11947 = cljs.core.pr_str.call(null,"controls chan event: ",inst_11945,inst_11937,inst_11946);var inst_11948 = console.log(inst_11947);var inst_11949 = cljs.core.partial.call(null,growingtree_app.controllers.controls.control_event,target,inst_11945,inst_11937);var inst_11950 = cljs.core.swap_BANG_.call(null,state,inst_11949);var inst_11951 = cljs.core.deref.call(null,state);var inst_11952 = growingtree_app.controllers.post_controls.post_control_event_BANG_.call(null,target,inst_11945,inst_11937,inst_11924,inst_11951);var state_12000__$1 = (function (){var statearr_12020 = state_12000;(statearr_12020[(18)] = inst_11950);
(statearr_12020[(19)] = inst_11948);
return statearr_12020;
})();var statearr_12021_12075 = state_12000__$1;(statearr_12021_12075[(2)] = inst_11952);
(statearr_12021_12075[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12001 === (29)))
{var inst_11978 = cljs.core.deref.call(null,history);var inst_11979 = cljs.core.pr_str.call(null,inst_11978);var inst_11980 = growingtree_app.utils.mprint.call(null,inst_11979);var state_12000__$1 = state_12000;var statearr_12022_12076 = state_12000__$1;(statearr_12022_12076[(2)] = inst_11980);
(statearr_12022_12076[(1)] = (31));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12001 === (6)))
{var inst_11996 = (state_12000[(2)]);var state_12000__$1 = state_12000;var statearr_12023_12077 = state_12000__$1;(statearr_12023_12077[(2)] = inst_11996);
(statearr_12023_12077[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12001 === (28)))
{var inst_11957 = (state_12000[(20)]);var inst_11963 = (state_12000[(2)]);var inst_11964 = cljs.core.deref.call(null,state);var inst_11965 = cljs.core.first.call(null,inst_11957);var inst_11966 = cljs.core.last.call(null,inst_11957);var inst_11967 = new cljs.core.Keyword(null,"things-vec","things-vec",-1363222375).cljs$core$IFn$_invoke$arity$1(inst_11966);var inst_11968 = cljs.core.pr_str.call(null,"api chan event : type ",inst_11965," data ",inst_11966);var inst_11969 = console.log(inst_11968);var inst_11970 = growingtree_app.core.update_history_BANG_.call(null,history,new cljs.core.Keyword(null,"api","api",-899839580),inst_11957);var inst_11971 = cljs.core.partial.call(null,growingtree_app.controllers.api.api_event,target,inst_11965,inst_11966);var inst_11972 = cljs.core.swap_BANG_.call(null,state,inst_11971);var inst_11973 = cljs.core.deref.call(null,state);var inst_11974 = growingtree_app.controllers.post_api.post_api_event_BANG_.call(null,target,inst_11965,inst_11966,inst_11964,inst_11973);var state_12000__$1 = (function (){var statearr_12024 = state_12000;(statearr_12024[(21)] = inst_11972);
(statearr_12024[(22)] = inst_11963);
(statearr_12024[(23)] = inst_11970);
(statearr_12024[(24)] = inst_11969);
(statearr_12024[(25)] = inst_11967);
return statearr_12024;
})();var statearr_12025_12078 = state_12000__$1;(statearr_12025_12078[(2)] = inst_11974);
(statearr_12025_12078[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12001 === (25)))
{var inst_11990 = (state_12000[(2)]);var state_12000__$1 = state_12000;var statearr_12026_12079 = state_12000__$1;(statearr_12026_12079[(2)] = inst_11990);
(statearr_12026_12079[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12001 === (34)))
{var inst_11986 = (state_12000[(2)]);var state_12000__$1 = state_12000;var statearr_12027_12080 = state_12000__$1;(statearr_12027_12080[(2)] = inst_11986);
(statearr_12027_12080[(1)] = (31));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12001 === (17)))
{var inst_11917 = (state_12000[(15)]);var inst_11932 = cljs.core.last.call(null,inst_11917);var state_12000__$1 = state_12000;var statearr_12028_12081 = state_12000__$1;(statearr_12028_12081[(2)] = inst_11932);
(statearr_12028_12081[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12001 === (3)))
{var inst_11998 = (state_12000[(2)]);var state_12000__$1 = state_12000;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12000__$1,inst_11998);
} else
{if((state_val_12001 === (12)))
{var state_12000__$1 = state_12000;var statearr_12029_12082 = state_12000__$1;(statearr_12029_12082[(2)] = null);
(statearr_12029_12082[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12001 === (2)))
{var state_12000__$1 = state_12000;if(true)
{var statearr_12030_12083 = state_12000__$1;(statearr_12030_12083[(1)] = (4));
} else
{var statearr_12031_12084 = state_12000__$1;(statearr_12031_12084[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12001 === (23)))
{var inst_11911 = (state_12000[(7)]);var inst_11957 = cljs.core.nth.call(null,inst_11911,(0),null);var state_12000__$1 = (function (){var statearr_12032 = state_12000;(statearr_12032[(20)] = inst_11957);
return statearr_12032;
})();if(cljs.core.truth_(growingtree_app.utils.logging_enabled_QMARK_))
{var statearr_12033_12085 = state_12000__$1;(statearr_12033_12085[(1)] = (26));
} else
{var statearr_12034_12086 = state_12000__$1;(statearr_12034_12086[(1)] = (27));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12001 === (19)))
{var inst_11935 = (state_12000[(2)]);var state_12000__$1 = state_12000;var statearr_12035_12087 = state_12000__$1;(statearr_12035_12087[(2)] = inst_11935);
(statearr_12035_12087[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12001 === (11)))
{var inst_11917 = (state_12000[(15)]);var inst_11919 = cljs.core.pr_str.call(null,inst_11917);var inst_11920 = growingtree_app.utils.mprint.call(null,"Controls Verbose: ",inst_11919);var state_12000__$1 = state_12000;var statearr_12036_12088 = state_12000__$1;(statearr_12036_12088[(2)] = inst_11920);
(statearr_12036_12088[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12001 === (9)))
{var inst_11906 = (state_12000[(13)]);var inst_11913 = (state_12000[(8)]);var inst_11954 = cljs.core._EQ_.call(null,inst_11913,inst_11906);var state_12000__$1 = state_12000;if(inst_11954)
{var statearr_12037_12089 = state_12000__$1;(statearr_12037_12089[(1)] = (23));
} else
{var statearr_12038_12090 = state_12000__$1;(statearr_12038_12090[(1)] = (24));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12001 === (5)))
{var state_12000__$1 = state_12000;var statearr_12039_12091 = state_12000__$1;(statearr_12039_12091[(2)] = null);
(statearr_12039_12091[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12001 === (14)))
{var inst_11917 = (state_12000[(15)]);var inst_11928 = cljs.core.last.call(null,inst_11917);var inst_11929 = cljs.core.deref.call(null,inst_11928);var state_12000__$1 = state_12000;var statearr_12040_12092 = state_12000__$1;(statearr_12040_12092[(2)] = inst_11929);
(statearr_12040_12092[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12001 === (26)))
{var inst_11957 = (state_12000[(20)]);var inst_11959 = cljs.core.pr_str.call(null,inst_11957);var inst_11960 = growingtree_app.utils.mprint.call(null,"API Verbose: ",inst_11959);var state_12000__$1 = state_12000;var statearr_12041_12093 = state_12000__$1;(statearr_12041_12093[(2)] = inst_11960);
(statearr_12041_12093[(1)] = (28));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12001 === (16)))
{var inst_11925 = (state_12000[(14)]);var inst_11937 = (state_12000[(2)]);var inst_11938 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"refresh","refresh",1947415525),inst_11925);var state_12000__$1 = (function (){var statearr_12042 = state_12000;(statearr_12042[(11)] = inst_11937);
return statearr_12042;
})();if(inst_11938)
{var statearr_12043_12094 = state_12000__$1;(statearr_12043_12094[(1)] = (20));
} else
{var statearr_12044_12095 = state_12000__$1;(statearr_12044_12095[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12001 === (30)))
{var inst_11913 = (state_12000[(8)]);var inst_11982 = cljs.core._EQ_.call(null,inst_11913,new cljs.core.Keyword(null,"default","default",-1987822328));var state_12000__$1 = state_12000;if(inst_11982)
{var statearr_12045_12096 = state_12000__$1;(statearr_12045_12096[(1)] = (32));
} else
{var statearr_12046_12097 = state_12000__$1;(statearr_12046_12097[(1)] = (33));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12001 === (10)))
{var inst_11992 = (state_12000[(2)]);var state_12000__$1 = (function (){var statearr_12047 = state_12000;(statearr_12047[(26)] = inst_11992);
return statearr_12047;
})();var statearr_12048_12098 = state_12000__$1;(statearr_12048_12098[(2)] = null);
(statearr_12048_12098[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12001 === (18)))
{var state_12000__$1 = state_12000;var statearr_12049_12099 = state_12000__$1;(statearr_12049_12099[(2)] = null);
(statearr_12049_12099[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12001 === (8)))
{var inst_11911 = (state_12000[(7)]);var inst_11917 = cljs.core.nth.call(null,inst_11911,(0),null);var state_12000__$1 = (function (){var statearr_12050 = state_12000;(statearr_12050[(15)] = inst_11917);
return statearr_12050;
})();if(cljs.core.truth_(growingtree_app.utils.logging_enabled_QMARK_))
{var statearr_12051_12100 = state_12000__$1;(statearr_12051_12100[(1)] = (11));
} else
{var statearr_12052_12101 = state_12000__$1;(statearr_12052_12101[(1)] = (12));
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
});})(c__6345__auto__,comms,history))
;return ((function (switch__6280__auto__,c__6345__auto__,comms,history){
return (function() {
var state_machine__6281__auto__ = null;
var state_machine__6281__auto____0 = (function (){var statearr_12056 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12056[(0)] = state_machine__6281__auto__);
(statearr_12056[(1)] = (1));
return statearr_12056;
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
}catch (e12057){if((e12057 instanceof Object))
{var ex__6284__auto__ = e12057;var statearr_12058_12102 = state_12000;(statearr_12058_12102[(5)] = ex__6284__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12000);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e12057;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6282__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12103 = state_12000;
state_12000 = G__12103;
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
;})(switch__6280__auto__,c__6345__auto__,comms,history))
})();var state__6347__auto__ = (function (){var statearr_12059 = f__6346__auto__.call(null);(statearr_12059[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6345__auto__);
return statearr_12059;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6347__auto__);
});})(c__6345__auto__,comms,history))
);
return c__6345__auto__;
});
growingtree_app.core.setup_BANG_ = (function setup_BANG_(){var comms = new cljs.core.Keyword(null,"comms","comms",460172477).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,growingtree_app.core.app_state));growingtree_app.core.main.call(null,document.getElementById("app"),growingtree_app.core.app_state);
if(cljs.core.truth_(new cljs.core.Keyword(null,"restore-state?","restore-state?",-1143283431).cljs$core$IFn$_invoke$arity$1(growingtree_app.utils.initial_query_map)))
{cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"controls","controls",1340701452).cljs$core$IFn$_invoke$arity$1(comms),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-restored","state-restored",450621293)], null));
} else
{}
if(cljs.core.truth_(new cljs.core.Keyword(null,"kandan-client?","kandan-client?",998337099).cljs$core$IFn$_invoke$arity$1(growingtree_app.utils.initial_query_map)))
{var api_key = new cljs.core.Keyword(null,"kandan-api-key","kandan-api-key",1285411267).cljs$core$IFn$_invoke$arity$1(growingtree_app.utils.initial_query_map);var kandan_client = growingtree_app.api.kandan.make_client.call(null,api_key,"http://localhost:3000/remote/faye");var channels = new cljs.core.Keyword(null,"kandan-channels","kandan-channels",-1827680736).cljs$core$IFn$_invoke$arity$1(growingtree_app.utils.initial_query_map);cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"controls","controls",1340701452).cljs$core$IFn$_invoke$arity$1(comms),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"api-key-updated","api-key-updated",-1848658586),api_key], null));
var seq__12108 = cljs.core.seq.call(null,channels);var chunk__12109 = null;var count__12110 = (0);var i__12111 = (0);while(true){
if((i__12111 < count__12110))
{var channel = cljs.core._nth.call(null,chunk__12109,i__12111);growingtree_app.api.kandan.subscribe_BANG_.call(null,kandan_client,("/channels/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(channel)),new cljs.core.Keyword(null,"api","api",-899839580).cljs$core$IFn$_invoke$arity$1(comms));
{
var G__12112 = seq__12108;
var G__12113 = chunk__12109;
var G__12114 = count__12110;
var G__12115 = (i__12111 + (1));
seq__12108 = G__12112;
chunk__12109 = G__12113;
count__12110 = G__12114;
i__12111 = G__12115;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__12108);if(temp__4126__auto__)
{var seq__12108__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12108__$1))
{var c__4299__auto__ = cljs.core.chunk_first.call(null,seq__12108__$1);{
var G__12116 = cljs.core.chunk_rest.call(null,seq__12108__$1);
var G__12117 = c__4299__auto__;
var G__12118 = cljs.core.count.call(null,c__4299__auto__);
var G__12119 = (0);
seq__12108 = G__12116;
chunk__12109 = G__12117;
count__12110 = G__12118;
i__12111 = G__12119;
continue;
}
} else
{var channel = cljs.core.first.call(null,seq__12108__$1);growingtree_app.api.kandan.subscribe_BANG_.call(null,kandan_client,("/channels/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(channel)),new cljs.core.Keyword(null,"api","api",-899839580).cljs$core$IFn$_invoke$arity$1(comms));
{
var G__12120 = cljs.core.next.call(null,seq__12108__$1);
var G__12121 = null;
var G__12122 = (0);
var G__12123 = (0);
seq__12108 = G__12120;
chunk__12109 = G__12121;
count__12110 = G__12122;
i__12111 = G__12123;
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
window.onload = growingtree_app.core.setup_BANG_;
growingtree_app.core.send_async_message = (function send_async_message(ch_name,message,data){return cljs.core.async.put_BANG_.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,growingtree_app.core.app_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"comms","comms",460172477),cljs.core.keyword.call(null,ch_name)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,message),cljs.core.js__GT_clj.call(null,data,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true)], null));
});
goog.exportSymbol('growingtree_app.core.send_async_message', growingtree_app.core.send_async_message);
growingtree_app.core.remove_channel_BANG_ = (function remove_channel_BANG_(channel_id){return cljs.core.async.put_BANG_.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,growingtree_app.core.app_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"comms","comms",460172477),new cljs.core.Keyword(null,"controls","controls",1340701452)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"channel-remotely-destroyed","channel-remotely-destroyed",-727239593),channel_id], null));
});
goog.exportSymbol('growingtree_app.core.remove_channel_BANG_', growingtree_app.core.remove_channel_BANG_);

//# sourceMappingURL=core.js.map