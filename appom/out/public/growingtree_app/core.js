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
return (function (state_12029){var state_val_12030 = (state_12029[(1)]);if((state_val_12030 === (7)))
{var inst_11934 = (state_12029[(7)]);var inst_11940 = (state_12029[(8)]);var inst_11942 = (state_12029[(9)]);var inst_11940__$1 = (state_12029[(2)]);var inst_11941 = cljs.core.nth.call(null,inst_11940__$1,(0),null);var inst_11942__$1 = cljs.core.nth.call(null,inst_11940__$1,(1),null);var inst_11943 = cljs.core._EQ_.call(null,inst_11942__$1,inst_11934);var state_12029__$1 = (function (){var statearr_12031 = state_12029;(statearr_12031[(8)] = inst_11940__$1);
(statearr_12031[(10)] = inst_11941);
(statearr_12031[(9)] = inst_11942__$1);
return statearr_12031;
})();if(inst_11943)
{var statearr_12032_12089 = state_12029__$1;(statearr_12032_12089[(1)] = (8));
} else
{var statearr_12033_12090 = state_12029__$1;(statearr_12033_12090[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12030 === (20)))
{var inst_11966 = (state_12029[(11)]);var inst_11969 = [new cljs.core.Keyword(null,"body","body",-2049205669),(0)];var inst_11970 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_11969,null));var inst_11971 = cljs.core.get_in.call(null,inst_11966,inst_11970);var state_12029__$1 = state_12029;var statearr_12034_12091 = state_12029__$1;(statearr_12034_12091[(2)] = inst_11971);
(statearr_12034_12091[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12030 === (27)))
{var state_12029__$1 = state_12029;var statearr_12035_12092 = state_12029__$1;(statearr_12035_12092[(2)] = null);
(statearr_12035_12092[(1)] = (28));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12030 === (1)))
{var state_12029__$1 = state_12029;var statearr_12036_12093 = state_12029__$1;(statearr_12036_12093[(2)] = null);
(statearr_12036_12093[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12030 === (24)))
{var inst_11936 = (state_12029[(12)]);var inst_11942 = (state_12029[(9)]);var inst_12005 = cljs.core._EQ_.call(null,inst_11942,inst_11936);var state_12029__$1 = state_12029;if(inst_12005)
{var statearr_12037_12094 = state_12029__$1;(statearr_12037_12094[(1)] = (29));
} else
{var statearr_12038_12095 = state_12029__$1;(statearr_12038_12095[(1)] = (30));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12030 === (4)))
{var inst_11936 = (state_12029[(12)]);var inst_11934 = (state_12029[(7)]);var inst_11935 = (state_12029[(13)]);var inst_11934__$1 = new cljs.core.Keyword(null,"controls","controls",1340701452).cljs$core$IFn$_invoke$arity$1(comms);var inst_11935__$1 = new cljs.core.Keyword(null,"api","api",-899839580).cljs$core$IFn$_invoke$arity$1(comms);var inst_11936__$1 = cljs.core.async.timeout.call(null,(30000));var inst_11937 = [inst_11934__$1,inst_11935__$1,inst_11936__$1];var inst_11938 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_11937,null));var state_12029__$1 = (function (){var statearr_12039 = state_12029;(statearr_12039[(12)] = inst_11936__$1);
(statearr_12039[(7)] = inst_11934__$1);
(statearr_12039[(13)] = inst_11935__$1);
return statearr_12039;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_12029__$1,(7),inst_11938);
} else
{if((state_val_12030 === (15)))
{var state_12029__$1 = state_12029;if(new cljs.core.Keyword(null,"else","else",-1508377146))
{var statearr_12040_12096 = state_12029__$1;(statearr_12040_12096[(1)] = (17));
} else
{var statearr_12041_12097 = state_12029__$1;(statearr_12041_12097[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12030 === (21)))
{var inst_11954 = (state_12029[(14)]);var state_12029__$1 = state_12029;var statearr_12042_12098 = state_12029__$1;(statearr_12042_12098[(2)] = inst_11954);
(statearr_12042_12098[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12030 === (31)))
{var inst_12017 = (state_12029[(2)]);var state_12029__$1 = state_12029;var statearr_12043_12099 = state_12029__$1;(statearr_12043_12099[(2)] = inst_12017);
(statearr_12043_12099[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12030 === (32)))
{var inst_11941 = (state_12029[(10)]);var state_12029__$1 = state_12029;var statearr_12044_12100 = state_12029__$1;(statearr_12044_12100[(2)] = inst_11941);
(statearr_12044_12100[(1)] = (34));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12030 === (33)))
{var state_12029__$1 = state_12029;var statearr_12045_12101 = state_12029__$1;(statearr_12045_12101[(2)] = null);
(statearr_12045_12101[(1)] = (34));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12030 === (13)))
{var inst_11946 = (state_12029[(15)]);var inst_11954 = (state_12029[(14)]);var inst_11952 = (state_12029[(2)]);var inst_11953 = cljs.core.deref.call(null,state);var inst_11954__$1 = cljs.core.first.call(null,inst_11946);var inst_11955 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"refresh","refresh",1947415525),inst_11954__$1);var state_12029__$1 = (function (){var statearr_12046 = state_12029;(statearr_12046[(16)] = inst_11953);
(statearr_12046[(17)] = inst_11952);
(statearr_12046[(14)] = inst_11954__$1);
return statearr_12046;
})();if(inst_11955)
{var statearr_12047_12102 = state_12029__$1;(statearr_12047_12102[(1)] = (14));
} else
{var statearr_12048_12103 = state_12029__$1;(statearr_12048_12103[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12030 === (22)))
{var inst_11953 = (state_12029[(16)]);var inst_11966 = (state_12029[(11)]);var inst_11974 = (state_12029[(2)]);var inst_11975 = om.core.rendering_QMARK_.call(null);var inst_11976 = cljs.core.pr_str.call(null,"controls chan event: ",inst_11974,inst_11966,inst_11975);var inst_11977 = console.log(inst_11976);var inst_11978 = cljs.core.partial.call(null,growingtree_app.controllers.controls.control_event,target,inst_11974,inst_11966);var inst_11979 = cljs.core.swap_BANG_.call(null,state,inst_11978);var inst_11980 = cljs.core.deref.call(null,state);var inst_11981 = growingtree_app.controllers.post_controls.post_control_event_BANG_.call(null,target,inst_11974,inst_11966,inst_11953,inst_11980);var state_12029__$1 = (function (){var statearr_12049 = state_12029;(statearr_12049[(18)] = inst_11979);
(statearr_12049[(19)] = inst_11977);
return statearr_12049;
})();var statearr_12050_12104 = state_12029__$1;(statearr_12050_12104[(2)] = inst_11981);
(statearr_12050_12104[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12030 === (29)))
{var inst_12007 = cljs.core.deref.call(null,history);var inst_12008 = cljs.core.pr_str.call(null,inst_12007);var inst_12009 = growingtree_app.utils.mprint.call(null,inst_12008);var state_12029__$1 = state_12029;var statearr_12051_12105 = state_12029__$1;(statearr_12051_12105[(2)] = inst_12009);
(statearr_12051_12105[(1)] = (31));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12030 === (6)))
{var inst_12025 = (state_12029[(2)]);var state_12029__$1 = state_12029;var statearr_12052_12106 = state_12029__$1;(statearr_12052_12106[(2)] = inst_12025);
(statearr_12052_12106[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12030 === (28)))
{var inst_11986 = (state_12029[(20)]);var inst_11992 = (state_12029[(2)]);var inst_11993 = cljs.core.deref.call(null,state);var inst_11994 = cljs.core.first.call(null,inst_11986);var inst_11995 = cljs.core.last.call(null,inst_11986);var inst_11996 = new cljs.core.Keyword(null,"things-vec","things-vec",-1363222375).cljs$core$IFn$_invoke$arity$1(inst_11995);var inst_11997 = cljs.core.pr_str.call(null,"api chan event : type ",inst_11994," data ",inst_11995);var inst_11998 = console.log(inst_11997);var inst_11999 = growingtree_app.core.update_history_BANG_.call(null,history,new cljs.core.Keyword(null,"api","api",-899839580),inst_11986);var inst_12000 = cljs.core.partial.call(null,growingtree_app.controllers.api.api_event,target,inst_11994,inst_11995);var inst_12001 = cljs.core.swap_BANG_.call(null,state,inst_12000);var inst_12002 = cljs.core.deref.call(null,state);var inst_12003 = growingtree_app.controllers.post_api.post_api_event_BANG_.call(null,target,inst_11994,inst_11995,inst_11993,inst_12002);var state_12029__$1 = (function (){var statearr_12053 = state_12029;(statearr_12053[(21)] = inst_11998);
(statearr_12053[(22)] = inst_11992);
(statearr_12053[(23)] = inst_12001);
(statearr_12053[(24)] = inst_11999);
(statearr_12053[(25)] = inst_11996);
return statearr_12053;
})();var statearr_12054_12107 = state_12029__$1;(statearr_12054_12107[(2)] = inst_12003);
(statearr_12054_12107[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12030 === (25)))
{var inst_12019 = (state_12029[(2)]);var state_12029__$1 = state_12029;var statearr_12055_12108 = state_12029__$1;(statearr_12055_12108[(2)] = inst_12019);
(statearr_12055_12108[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12030 === (34)))
{var inst_12015 = (state_12029[(2)]);var state_12029__$1 = state_12029;var statearr_12056_12109 = state_12029__$1;(statearr_12056_12109[(2)] = inst_12015);
(statearr_12056_12109[(1)] = (31));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12030 === (17)))
{var inst_11946 = (state_12029[(15)]);var inst_11961 = cljs.core.last.call(null,inst_11946);var state_12029__$1 = state_12029;var statearr_12057_12110 = state_12029__$1;(statearr_12057_12110[(2)] = inst_11961);
(statearr_12057_12110[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12030 === (3)))
{var inst_12027 = (state_12029[(2)]);var state_12029__$1 = state_12029;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12029__$1,inst_12027);
} else
{if((state_val_12030 === (12)))
{var state_12029__$1 = state_12029;var statearr_12058_12111 = state_12029__$1;(statearr_12058_12111[(2)] = null);
(statearr_12058_12111[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12030 === (2)))
{var state_12029__$1 = state_12029;if(true)
{var statearr_12059_12112 = state_12029__$1;(statearr_12059_12112[(1)] = (4));
} else
{var statearr_12060_12113 = state_12029__$1;(statearr_12060_12113[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12030 === (23)))
{var inst_11940 = (state_12029[(8)]);var inst_11986 = cljs.core.nth.call(null,inst_11940,(0),null);var state_12029__$1 = (function (){var statearr_12061 = state_12029;(statearr_12061[(20)] = inst_11986);
return statearr_12061;
})();if(cljs.core.truth_(growingtree_app.utils.logging_enabled_QMARK_))
{var statearr_12062_12114 = state_12029__$1;(statearr_12062_12114[(1)] = (26));
} else
{var statearr_12063_12115 = state_12029__$1;(statearr_12063_12115[(1)] = (27));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12030 === (19)))
{var inst_11964 = (state_12029[(2)]);var state_12029__$1 = state_12029;var statearr_12064_12116 = state_12029__$1;(statearr_12064_12116[(2)] = inst_11964);
(statearr_12064_12116[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12030 === (11)))
{var inst_11946 = (state_12029[(15)]);var inst_11948 = cljs.core.pr_str.call(null,inst_11946);var inst_11949 = growingtree_app.utils.mprint.call(null,"Controls Verbose: ",inst_11948);var state_12029__$1 = state_12029;var statearr_12065_12117 = state_12029__$1;(statearr_12065_12117[(2)] = inst_11949);
(statearr_12065_12117[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12030 === (9)))
{var inst_11935 = (state_12029[(13)]);var inst_11942 = (state_12029[(9)]);var inst_11983 = cljs.core._EQ_.call(null,inst_11942,inst_11935);var state_12029__$1 = state_12029;if(inst_11983)
{var statearr_12066_12118 = state_12029__$1;(statearr_12066_12118[(1)] = (23));
} else
{var statearr_12067_12119 = state_12029__$1;(statearr_12067_12119[(1)] = (24));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12030 === (5)))
{var state_12029__$1 = state_12029;var statearr_12068_12120 = state_12029__$1;(statearr_12068_12120[(2)] = null);
(statearr_12068_12120[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12030 === (14)))
{var inst_11946 = (state_12029[(15)]);var inst_11957 = cljs.core.last.call(null,inst_11946);var inst_11958 = cljs.core.deref.call(null,inst_11957);var state_12029__$1 = state_12029;var statearr_12069_12121 = state_12029__$1;(statearr_12069_12121[(2)] = inst_11958);
(statearr_12069_12121[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12030 === (26)))
{var inst_11986 = (state_12029[(20)]);var inst_11988 = cljs.core.pr_str.call(null,inst_11986);var inst_11989 = growingtree_app.utils.mprint.call(null,"API Verbose: ",inst_11988);var state_12029__$1 = state_12029;var statearr_12070_12122 = state_12029__$1;(statearr_12070_12122[(2)] = inst_11989);
(statearr_12070_12122[(1)] = (28));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12030 === (16)))
{var inst_11954 = (state_12029[(14)]);var inst_11966 = (state_12029[(2)]);var inst_11967 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"refresh","refresh",1947415525),inst_11954);var state_12029__$1 = (function (){var statearr_12071 = state_12029;(statearr_12071[(11)] = inst_11966);
return statearr_12071;
})();if(inst_11967)
{var statearr_12072_12123 = state_12029__$1;(statearr_12072_12123[(1)] = (20));
} else
{var statearr_12073_12124 = state_12029__$1;(statearr_12073_12124[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12030 === (30)))
{var inst_11942 = (state_12029[(9)]);var inst_12011 = cljs.core._EQ_.call(null,inst_11942,new cljs.core.Keyword(null,"default","default",-1987822328));var state_12029__$1 = state_12029;if(inst_12011)
{var statearr_12074_12125 = state_12029__$1;(statearr_12074_12125[(1)] = (32));
} else
{var statearr_12075_12126 = state_12029__$1;(statearr_12075_12126[(1)] = (33));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12030 === (10)))
{var inst_12021 = (state_12029[(2)]);var state_12029__$1 = (function (){var statearr_12076 = state_12029;(statearr_12076[(26)] = inst_12021);
return statearr_12076;
})();var statearr_12077_12127 = state_12029__$1;(statearr_12077_12127[(2)] = null);
(statearr_12077_12127[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12030 === (18)))
{var state_12029__$1 = state_12029;var statearr_12078_12128 = state_12029__$1;(statearr_12078_12128[(2)] = null);
(statearr_12078_12128[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12030 === (8)))
{var inst_11940 = (state_12029[(8)]);var inst_11946 = cljs.core.nth.call(null,inst_11940,(0),null);var state_12029__$1 = (function (){var statearr_12079 = state_12029;(statearr_12079[(15)] = inst_11946);
return statearr_12079;
})();if(cljs.core.truth_(growingtree_app.utils.logging_enabled_QMARK_))
{var statearr_12080_12129 = state_12029__$1;(statearr_12080_12129[(1)] = (11));
} else
{var statearr_12081_12130 = state_12029__$1;(statearr_12081_12130[(1)] = (12));
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
var state_machine__6281__auto____0 = (function (){var statearr_12085 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12085[(0)] = state_machine__6281__auto__);
(statearr_12085[(1)] = (1));
return statearr_12085;
});
var state_machine__6281__auto____1 = (function (state_12029){while(true){
var ret_value__6282__auto__ = (function (){try{while(true){
var result__6283__auto__ = switch__6280__auto__.call(null,state_12029);if(cljs.core.keyword_identical_QMARK_.call(null,result__6283__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6283__auto__;
}
break;
}
}catch (e12086){if((e12086 instanceof Object))
{var ex__6284__auto__ = e12086;var statearr_12087_12131 = state_12029;(statearr_12087_12131[(5)] = ex__6284__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12029);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e12086;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6282__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12132 = state_12029;
state_12029 = G__12132;
continue;
}
} else
{return ret_value__6282__auto__;
}
break;
}
});
state_machine__6281__auto__ = function(state_12029){
switch(arguments.length){
case 0:
return state_machine__6281__auto____0.call(this);
case 1:
return state_machine__6281__auto____1.call(this,state_12029);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6281__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6281__auto____0;
state_machine__6281__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6281__auto____1;
return state_machine__6281__auto__;
})()
;})(switch__6280__auto__,c__6345__auto__,comms,history))
})();var state__6347__auto__ = (function (){var statearr_12088 = f__6346__auto__.call(null);(statearr_12088[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6345__auto__);
return statearr_12088;
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
var seq__12137 = cljs.core.seq.call(null,channels);var chunk__12138 = null;var count__12139 = (0);var i__12140 = (0);while(true){
if((i__12140 < count__12139))
{var channel = cljs.core._nth.call(null,chunk__12138,i__12140);growingtree_app.api.kandan.subscribe_BANG_.call(null,kandan_client,("/channels/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(channel)),new cljs.core.Keyword(null,"api","api",-899839580).cljs$core$IFn$_invoke$arity$1(comms));
{
var G__12141 = seq__12137;
var G__12142 = chunk__12138;
var G__12143 = count__12139;
var G__12144 = (i__12140 + (1));
seq__12137 = G__12141;
chunk__12138 = G__12142;
count__12139 = G__12143;
i__12140 = G__12144;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__12137);if(temp__4126__auto__)
{var seq__12137__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12137__$1))
{var c__4299__auto__ = cljs.core.chunk_first.call(null,seq__12137__$1);{
var G__12145 = cljs.core.chunk_rest.call(null,seq__12137__$1);
var G__12146 = c__4299__auto__;
var G__12147 = cljs.core.count.call(null,c__4299__auto__);
var G__12148 = (0);
seq__12137 = G__12145;
chunk__12138 = G__12146;
count__12139 = G__12147;
i__12140 = G__12148;
continue;
}
} else
{var channel = cljs.core.first.call(null,seq__12137__$1);growingtree_app.api.kandan.subscribe_BANG_.call(null,kandan_client,("/channels/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(channel)),new cljs.core.Keyword(null,"api","api",-899839580).cljs$core$IFn$_invoke$arity$1(comms));
{
var G__12149 = cljs.core.next.call(null,seq__12137__$1);
var G__12150 = null;
var G__12151 = (0);
var G__12152 = (0);
seq__12137 = G__12149;
chunk__12138 = G__12150;
count__12139 = G__12151;
i__12140 = G__12152;
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