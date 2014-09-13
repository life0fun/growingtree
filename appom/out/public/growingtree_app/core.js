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
return (function (state_12006){var state_val_12007 = (state_12006[(1)]);if((state_val_12007 === (7)))
{var inst_11917 = (state_12006[(7)]);var inst_11923 = (state_12006[(8)]);var inst_11925 = (state_12006[(9)]);var inst_11923__$1 = (state_12006[(2)]);var inst_11924 = cljs.core.nth.call(null,inst_11923__$1,(0),null);var inst_11925__$1 = cljs.core.nth.call(null,inst_11923__$1,(1),null);var inst_11926 = cljs.core._EQ_.call(null,inst_11925__$1,inst_11917);var state_12006__$1 = (function (){var statearr_12008 = state_12006;(statearr_12008[(8)] = inst_11923__$1);
(statearr_12008[(9)] = inst_11925__$1);
(statearr_12008[(10)] = inst_11924);
return statearr_12008;
})();if(inst_11926)
{var statearr_12009_12066 = state_12006__$1;(statearr_12009_12066[(1)] = (8));
} else
{var statearr_12010_12067 = state_12006__$1;(statearr_12010_12067[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12007 === (20)))
{var inst_11949 = (state_12006[(11)]);var inst_11952 = [new cljs.core.Keyword(null,"body","body",-2049205669),(0)];var inst_11953 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_11952,null));var inst_11954 = cljs.core.get_in.call(null,inst_11949,inst_11953);var state_12006__$1 = state_12006;var statearr_12011_12068 = state_12006__$1;(statearr_12011_12068[(2)] = inst_11954);
(statearr_12011_12068[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12007 === (27)))
{var state_12006__$1 = state_12006;var statearr_12012_12069 = state_12006__$1;(statearr_12012_12069[(2)] = null);
(statearr_12012_12069[(1)] = (28));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12007 === (1)))
{var state_12006__$1 = state_12006;var statearr_12013_12070 = state_12006__$1;(statearr_12013_12070[(2)] = null);
(statearr_12013_12070[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12007 === (24)))
{var inst_11919 = (state_12006[(12)]);var inst_11925 = (state_12006[(9)]);var inst_11982 = cljs.core._EQ_.call(null,inst_11925,inst_11919);var state_12006__$1 = state_12006;if(inst_11982)
{var statearr_12014_12071 = state_12006__$1;(statearr_12014_12071[(1)] = (29));
} else
{var statearr_12015_12072 = state_12006__$1;(statearr_12015_12072[(1)] = (30));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12007 === (4)))
{var inst_11918 = (state_12006[(13)]);var inst_11917 = (state_12006[(7)]);var inst_11919 = (state_12006[(12)]);var inst_11917__$1 = new cljs.core.Keyword(null,"controls","controls",1340701452).cljs$core$IFn$_invoke$arity$1(comms);var inst_11918__$1 = new cljs.core.Keyword(null,"api","api",-899839580).cljs$core$IFn$_invoke$arity$1(comms);var inst_11919__$1 = cljs.core.async.timeout.call(null,(30000));var inst_11920 = [inst_11917__$1,inst_11918__$1,inst_11919__$1];var inst_11921 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_11920,null));var state_12006__$1 = (function (){var statearr_12016 = state_12006;(statearr_12016[(13)] = inst_11918__$1);
(statearr_12016[(7)] = inst_11917__$1);
(statearr_12016[(12)] = inst_11919__$1);
return statearr_12016;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_12006__$1,(7),inst_11921);
} else
{if((state_val_12007 === (15)))
{var state_12006__$1 = state_12006;if(new cljs.core.Keyword(null,"else","else",-1508377146))
{var statearr_12017_12073 = state_12006__$1;(statearr_12017_12073[(1)] = (17));
} else
{var statearr_12018_12074 = state_12006__$1;(statearr_12018_12074[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12007 === (21)))
{var inst_11937 = (state_12006[(14)]);var state_12006__$1 = state_12006;var statearr_12019_12075 = state_12006__$1;(statearr_12019_12075[(2)] = inst_11937);
(statearr_12019_12075[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12007 === (31)))
{var inst_11994 = (state_12006[(2)]);var state_12006__$1 = state_12006;var statearr_12020_12076 = state_12006__$1;(statearr_12020_12076[(2)] = inst_11994);
(statearr_12020_12076[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12007 === (32)))
{var inst_11924 = (state_12006[(10)]);var state_12006__$1 = state_12006;var statearr_12021_12077 = state_12006__$1;(statearr_12021_12077[(2)] = inst_11924);
(statearr_12021_12077[(1)] = (34));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12007 === (33)))
{var state_12006__$1 = state_12006;var statearr_12022_12078 = state_12006__$1;(statearr_12022_12078[(2)] = null);
(statearr_12022_12078[(1)] = (34));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12007 === (13)))
{var inst_11929 = (state_12006[(15)]);var inst_11937 = (state_12006[(14)]);var inst_11935 = (state_12006[(2)]);var inst_11936 = cljs.core.deref.call(null,state);var inst_11937__$1 = cljs.core.first.call(null,inst_11929);var inst_11938 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"refresh","refresh",1947415525),inst_11937__$1);var state_12006__$1 = (function (){var statearr_12023 = state_12006;(statearr_12023[(16)] = inst_11936);
(statearr_12023[(14)] = inst_11937__$1);
(statearr_12023[(17)] = inst_11935);
return statearr_12023;
})();if(inst_11938)
{var statearr_12024_12079 = state_12006__$1;(statearr_12024_12079[(1)] = (14));
} else
{var statearr_12025_12080 = state_12006__$1;(statearr_12025_12080[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12007 === (22)))
{var inst_11949 = (state_12006[(11)]);var inst_11936 = (state_12006[(16)]);var inst_11957 = (state_12006[(2)]);var inst_11958 = cljs.core.partial.call(null,growingtree_app.controllers.controls.control_event,target,inst_11957,inst_11949);var inst_11959 = cljs.core.swap_BANG_.call(null,state,inst_11958);var inst_11960 = cljs.core.deref.call(null,state);var inst_11961 = growingtree_app.controllers.post_controls.post_control_event_BANG_.call(null,target,inst_11957,inst_11949,inst_11936,inst_11960);var state_12006__$1 = (function (){var statearr_12026 = state_12006;(statearr_12026[(18)] = inst_11959);
return statearr_12026;
})();var statearr_12027_12081 = state_12006__$1;(statearr_12027_12081[(2)] = inst_11961);
(statearr_12027_12081[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12007 === (29)))
{var inst_11984 = cljs.core.deref.call(null,history);var inst_11985 = cljs.core.pr_str.call(null,inst_11984);var inst_11986 = growingtree_app.utils.mprint.call(null,inst_11985);var state_12006__$1 = state_12006;var statearr_12028_12082 = state_12006__$1;(statearr_12028_12082[(2)] = inst_11986);
(statearr_12028_12082[(1)] = (31));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12007 === (6)))
{var inst_12002 = (state_12006[(2)]);var state_12006__$1 = state_12006;var statearr_12029_12083 = state_12006__$1;(statearr_12029_12083[(2)] = inst_12002);
(statearr_12029_12083[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12007 === (28)))
{var inst_11966 = (state_12006[(19)]);var inst_11972 = (state_12006[(2)]);var inst_11973 = cljs.core.deref.call(null,state);var inst_11974 = cljs.core.first.call(null,inst_11966);var inst_11975 = cljs.core.last.call(null,inst_11966);var inst_11976 = new cljs.core.Keyword(null,"things-vec","things-vec",-1363222375).cljs$core$IFn$_invoke$arity$1(inst_11975);var inst_11977 = cljs.core.partial.call(null,growingtree_app.controllers.api.api_event,target,inst_11974,inst_11975);var inst_11978 = cljs.core.swap_BANG_.call(null,state,inst_11977);var inst_11979 = cljs.core.deref.call(null,state);var inst_11980 = growingtree_app.controllers.post_api.post_api_event_BANG_.call(null,target,inst_11974,inst_11975,inst_11973,inst_11979);var state_12006__$1 = (function (){var statearr_12030 = state_12006;(statearr_12030[(20)] = inst_11972);
(statearr_12030[(21)] = inst_11978);
(statearr_12030[(22)] = inst_11976);
return statearr_12030;
})();var statearr_12031_12084 = state_12006__$1;(statearr_12031_12084[(2)] = inst_11980);
(statearr_12031_12084[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12007 === (25)))
{var inst_11996 = (state_12006[(2)]);var state_12006__$1 = state_12006;var statearr_12032_12085 = state_12006__$1;(statearr_12032_12085[(2)] = inst_11996);
(statearr_12032_12085[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12007 === (34)))
{var inst_11992 = (state_12006[(2)]);var state_12006__$1 = state_12006;var statearr_12033_12086 = state_12006__$1;(statearr_12033_12086[(2)] = inst_11992);
(statearr_12033_12086[(1)] = (31));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12007 === (17)))
{var inst_11929 = (state_12006[(15)]);var inst_11944 = cljs.core.last.call(null,inst_11929);var state_12006__$1 = state_12006;var statearr_12034_12087 = state_12006__$1;(statearr_12034_12087[(2)] = inst_11944);
(statearr_12034_12087[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12007 === (3)))
{var inst_12004 = (state_12006[(2)]);var state_12006__$1 = state_12006;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12006__$1,inst_12004);
} else
{if((state_val_12007 === (12)))
{var state_12006__$1 = state_12006;var statearr_12035_12088 = state_12006__$1;(statearr_12035_12088[(2)] = null);
(statearr_12035_12088[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12007 === (2)))
{var state_12006__$1 = state_12006;if(true)
{var statearr_12036_12089 = state_12006__$1;(statearr_12036_12089[(1)] = (4));
} else
{var statearr_12037_12090 = state_12006__$1;(statearr_12037_12090[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12007 === (23)))
{var inst_11923 = (state_12006[(8)]);var inst_11966 = cljs.core.nth.call(null,inst_11923,(0),null);var state_12006__$1 = (function (){var statearr_12038 = state_12006;(statearr_12038[(19)] = inst_11966);
return statearr_12038;
})();if(cljs.core.truth_(growingtree_app.utils.logging_enabled_QMARK_))
{var statearr_12039_12091 = state_12006__$1;(statearr_12039_12091[(1)] = (26));
} else
{var statearr_12040_12092 = state_12006__$1;(statearr_12040_12092[(1)] = (27));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12007 === (19)))
{var inst_11947 = (state_12006[(2)]);var state_12006__$1 = state_12006;var statearr_12041_12093 = state_12006__$1;(statearr_12041_12093[(2)] = inst_11947);
(statearr_12041_12093[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12007 === (11)))
{var inst_11929 = (state_12006[(15)]);var inst_11931 = cljs.core.pr_str.call(null,inst_11929);var inst_11932 = growingtree_app.utils.mprint.call(null,"Controls Verbose: ",inst_11931);var state_12006__$1 = state_12006;var statearr_12042_12094 = state_12006__$1;(statearr_12042_12094[(2)] = inst_11932);
(statearr_12042_12094[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12007 === (9)))
{var inst_11918 = (state_12006[(13)]);var inst_11925 = (state_12006[(9)]);var inst_11963 = cljs.core._EQ_.call(null,inst_11925,inst_11918);var state_12006__$1 = state_12006;if(inst_11963)
{var statearr_12043_12095 = state_12006__$1;(statearr_12043_12095[(1)] = (23));
} else
{var statearr_12044_12096 = state_12006__$1;(statearr_12044_12096[(1)] = (24));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12007 === (5)))
{var state_12006__$1 = state_12006;var statearr_12045_12097 = state_12006__$1;(statearr_12045_12097[(2)] = null);
(statearr_12045_12097[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12007 === (14)))
{var inst_11929 = (state_12006[(15)]);var inst_11940 = cljs.core.last.call(null,inst_11929);var inst_11941 = cljs.core.deref.call(null,inst_11940);var state_12006__$1 = state_12006;var statearr_12046_12098 = state_12006__$1;(statearr_12046_12098[(2)] = inst_11941);
(statearr_12046_12098[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12007 === (26)))
{var inst_11966 = (state_12006[(19)]);var inst_11968 = cljs.core.pr_str.call(null,inst_11966);var inst_11969 = growingtree_app.utils.mprint.call(null,"API Verbose: ",inst_11968);var state_12006__$1 = state_12006;var statearr_12047_12099 = state_12006__$1;(statearr_12047_12099[(2)] = inst_11969);
(statearr_12047_12099[(1)] = (28));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12007 === (16)))
{var inst_11937 = (state_12006[(14)]);var inst_11949 = (state_12006[(2)]);var inst_11950 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"refresh","refresh",1947415525),inst_11937);var state_12006__$1 = (function (){var statearr_12048 = state_12006;(statearr_12048[(11)] = inst_11949);
return statearr_12048;
})();if(inst_11950)
{var statearr_12049_12100 = state_12006__$1;(statearr_12049_12100[(1)] = (20));
} else
{var statearr_12050_12101 = state_12006__$1;(statearr_12050_12101[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12007 === (30)))
{var inst_11925 = (state_12006[(9)]);var inst_11988 = cljs.core._EQ_.call(null,inst_11925,new cljs.core.Keyword(null,"default","default",-1987822328));var state_12006__$1 = state_12006;if(inst_11988)
{var statearr_12051_12102 = state_12006__$1;(statearr_12051_12102[(1)] = (32));
} else
{var statearr_12052_12103 = state_12006__$1;(statearr_12052_12103[(1)] = (33));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12007 === (10)))
{var inst_11998 = (state_12006[(2)]);var state_12006__$1 = (function (){var statearr_12053 = state_12006;(statearr_12053[(23)] = inst_11998);
return statearr_12053;
})();var statearr_12054_12104 = state_12006__$1;(statearr_12054_12104[(2)] = null);
(statearr_12054_12104[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12007 === (18)))
{var state_12006__$1 = state_12006;var statearr_12055_12105 = state_12006__$1;(statearr_12055_12105[(2)] = null);
(statearr_12055_12105[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12007 === (8)))
{var inst_11923 = (state_12006[(8)]);var inst_11929 = cljs.core.nth.call(null,inst_11923,(0),null);var state_12006__$1 = (function (){var statearr_12056 = state_12006;(statearr_12056[(15)] = inst_11929);
return statearr_12056;
})();if(cljs.core.truth_(growingtree_app.utils.logging_enabled_QMARK_))
{var statearr_12057_12106 = state_12006__$1;(statearr_12057_12106[(1)] = (11));
} else
{var statearr_12058_12107 = state_12006__$1;(statearr_12058_12107[(1)] = (12));
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
var state_machine__6281__auto____0 = (function (){var statearr_12062 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12062[(0)] = state_machine__6281__auto__);
(statearr_12062[(1)] = (1));
return statearr_12062;
});
var state_machine__6281__auto____1 = (function (state_12006){while(true){
var ret_value__6282__auto__ = (function (){try{while(true){
var result__6283__auto__ = switch__6280__auto__.call(null,state_12006);if(cljs.core.keyword_identical_QMARK_.call(null,result__6283__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6283__auto__;
}
break;
}
}catch (e12063){if((e12063 instanceof Object))
{var ex__6284__auto__ = e12063;var statearr_12064_12108 = state_12006;(statearr_12064_12108[(5)] = ex__6284__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12006);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e12063;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6282__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12109 = state_12006;
state_12006 = G__12109;
continue;
}
} else
{return ret_value__6282__auto__;
}
break;
}
});
state_machine__6281__auto__ = function(state_12006){
switch(arguments.length){
case 0:
return state_machine__6281__auto____0.call(this);
case 1:
return state_machine__6281__auto____1.call(this,state_12006);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6281__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6281__auto____0;
state_machine__6281__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6281__auto____1;
return state_machine__6281__auto__;
})()
;})(switch__6280__auto__,c__6345__auto__,comms,history))
})();var state__6347__auto__ = (function (){var statearr_12065 = f__6346__auto__.call(null);(statearr_12065[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6345__auto__);
return statearr_12065;
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
var seq__12114 = cljs.core.seq.call(null,channels);var chunk__12115 = null;var count__12116 = (0);var i__12117 = (0);while(true){
if((i__12117 < count__12116))
{var channel = cljs.core._nth.call(null,chunk__12115,i__12117);growingtree_app.api.kandan.subscribe_BANG_.call(null,kandan_client,("/channels/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(channel)),new cljs.core.Keyword(null,"api","api",-899839580).cljs$core$IFn$_invoke$arity$1(comms));
{
var G__12118 = seq__12114;
var G__12119 = chunk__12115;
var G__12120 = count__12116;
var G__12121 = (i__12117 + (1));
seq__12114 = G__12118;
chunk__12115 = G__12119;
count__12116 = G__12120;
i__12117 = G__12121;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__12114);if(temp__4126__auto__)
{var seq__12114__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12114__$1))
{var c__4299__auto__ = cljs.core.chunk_first.call(null,seq__12114__$1);{
var G__12122 = cljs.core.chunk_rest.call(null,seq__12114__$1);
var G__12123 = c__4299__auto__;
var G__12124 = cljs.core.count.call(null,c__4299__auto__);
var G__12125 = (0);
seq__12114 = G__12122;
chunk__12115 = G__12123;
count__12116 = G__12124;
i__12117 = G__12125;
continue;
}
} else
{var channel = cljs.core.first.call(null,seq__12114__$1);growingtree_app.api.kandan.subscribe_BANG_.call(null,kandan_client,("/channels/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(channel)),new cljs.core.Keyword(null,"api","api",-899839580).cljs$core$IFn$_invoke$arity$1(comms));
{
var G__12126 = cljs.core.next.call(null,seq__12114__$1);
var G__12127 = null;
var G__12128 = (0);
var G__12129 = (0);
seq__12114 = G__12126;
chunk__12115 = G__12127;
count__12116 = G__12128;
i__12117 = G__12129;
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