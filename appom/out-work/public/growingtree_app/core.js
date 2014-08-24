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
return (function (state_11974){var state_val_11975 = (state_11974[(1)]);if((state_val_11975 === (7)))
{var inst_11887 = (state_11974[(7)]);var inst_11885 = (state_11974[(8)]);var inst_11879 = (state_11974[(9)]);var inst_11885__$1 = (state_11974[(2)]);var inst_11886 = cljs.core.nth.call(null,inst_11885__$1,(0),null);var inst_11887__$1 = cljs.core.nth.call(null,inst_11885__$1,(1),null);var inst_11888 = cljs.core._EQ_.call(null,inst_11887__$1,inst_11879);var state_11974__$1 = (function (){var statearr_11976 = state_11974;(statearr_11976[(7)] = inst_11887__$1);
(statearr_11976[(8)] = inst_11885__$1);
(statearr_11976[(10)] = inst_11886);
return statearr_11976;
})();if(inst_11888)
{var statearr_11977_12034 = state_11974__$1;(statearr_11977_12034[(1)] = (8));
} else
{var statearr_11978_12035 = state_11974__$1;(statearr_11978_12035[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11975 === (20)))
{var inst_11911 = (state_11974[(11)]);var inst_11914 = [new cljs.core.Keyword(null,"body","body",-2049205669),(0)];var inst_11915 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_11914,null));var inst_11916 = cljs.core.get_in.call(null,inst_11911,inst_11915);var state_11974__$1 = state_11974;var statearr_11979_12036 = state_11974__$1;(statearr_11979_12036[(2)] = inst_11916);
(statearr_11979_12036[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11975 === (27)))
{var state_11974__$1 = state_11974;var statearr_11980_12037 = state_11974__$1;(statearr_11980_12037[(2)] = null);
(statearr_11980_12037[(1)] = (28));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11975 === (1)))
{var state_11974__$1 = state_11974;var statearr_11981_12038 = state_11974__$1;(statearr_11981_12038[(2)] = null);
(statearr_11981_12038[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11975 === (24)))
{var inst_11887 = (state_11974[(7)]);var inst_11881 = (state_11974[(12)]);var inst_11950 = cljs.core._EQ_.call(null,inst_11887,inst_11881);var state_11974__$1 = state_11974;if(inst_11950)
{var statearr_11982_12039 = state_11974__$1;(statearr_11982_12039[(1)] = (29));
} else
{var statearr_11983_12040 = state_11974__$1;(statearr_11983_12040[(1)] = (30));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11975 === (4)))
{var inst_11879 = (state_11974[(9)]);var inst_11881 = (state_11974[(12)]);var inst_11880 = (state_11974[(13)]);var inst_11879__$1 = new cljs.core.Keyword(null,"controls","controls",1340701452).cljs$core$IFn$_invoke$arity$1(comms);var inst_11880__$1 = new cljs.core.Keyword(null,"api","api",-899839580).cljs$core$IFn$_invoke$arity$1(comms);var inst_11881__$1 = cljs.core.async.timeout.call(null,(30000));var inst_11882 = [inst_11879__$1,inst_11880__$1,inst_11881__$1];var inst_11883 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_11882,null));var state_11974__$1 = (function (){var statearr_11984 = state_11974;(statearr_11984[(9)] = inst_11879__$1);
(statearr_11984[(12)] = inst_11881__$1);
(statearr_11984[(13)] = inst_11880__$1);
return statearr_11984;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_11974__$1,(7),inst_11883);
} else
{if((state_val_11975 === (15)))
{var state_11974__$1 = state_11974;if(new cljs.core.Keyword(null,"else","else",-1508377146))
{var statearr_11985_12041 = state_11974__$1;(statearr_11985_12041[(1)] = (17));
} else
{var statearr_11986_12042 = state_11974__$1;(statearr_11986_12042[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11975 === (21)))
{var inst_11899 = (state_11974[(14)]);var state_11974__$1 = state_11974;var statearr_11987_12043 = state_11974__$1;(statearr_11987_12043[(2)] = inst_11899);
(statearr_11987_12043[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11975 === (31)))
{var inst_11962 = (state_11974[(2)]);var state_11974__$1 = state_11974;var statearr_11988_12044 = state_11974__$1;(statearr_11988_12044[(2)] = inst_11962);
(statearr_11988_12044[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11975 === (32)))
{var inst_11886 = (state_11974[(10)]);var state_11974__$1 = state_11974;var statearr_11989_12045 = state_11974__$1;(statearr_11989_12045[(2)] = inst_11886);
(statearr_11989_12045[(1)] = (34));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11975 === (33)))
{var state_11974__$1 = state_11974;var statearr_11990_12046 = state_11974__$1;(statearr_11990_12046[(2)] = null);
(statearr_11990_12046[(1)] = (34));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11975 === (13)))
{var inst_11899 = (state_11974[(14)]);var inst_11891 = (state_11974[(15)]);var inst_11897 = (state_11974[(2)]);var inst_11898 = cljs.core.deref.call(null,state);var inst_11899__$1 = cljs.core.first.call(null,inst_11891);var inst_11900 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"refresh","refresh",1947415525),inst_11899__$1);var state_11974__$1 = (function (){var statearr_11991 = state_11974;(statearr_11991[(14)] = inst_11899__$1);
(statearr_11991[(16)] = inst_11898);
(statearr_11991[(17)] = inst_11897);
return statearr_11991;
})();if(inst_11900)
{var statearr_11992_12047 = state_11974__$1;(statearr_11992_12047[(1)] = (14));
} else
{var statearr_11993_12048 = state_11974__$1;(statearr_11993_12048[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11975 === (22)))
{var inst_11898 = (state_11974[(16)]);var inst_11911 = (state_11974[(11)]);var inst_11919 = (state_11974[(2)]);var inst_11920 = om.core.rendering_QMARK_.call(null);var inst_11921 = cljs.core.pr_str.call(null,"controls chan event: ",inst_11919,inst_11911,inst_11920);var inst_11922 = console.log(inst_11921);var inst_11923 = cljs.core.partial.call(null,growingtree_app.controllers.controls.control_event,target,inst_11919,inst_11911);var inst_11924 = cljs.core.swap_BANG_.call(null,state,inst_11923);var inst_11925 = cljs.core.deref.call(null,state);var inst_11926 = growingtree_app.controllers.post_controls.post_control_event_BANG_.call(null,target,inst_11919,inst_11911,inst_11898,inst_11925);var state_11974__$1 = (function (){var statearr_11994 = state_11974;(statearr_11994[(18)] = inst_11922);
(statearr_11994[(19)] = inst_11924);
return statearr_11994;
})();var statearr_11995_12049 = state_11974__$1;(statearr_11995_12049[(2)] = inst_11926);
(statearr_11995_12049[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11975 === (29)))
{var inst_11952 = cljs.core.deref.call(null,history);var inst_11953 = cljs.core.pr_str.call(null,inst_11952);var inst_11954 = growingtree_app.utils.mprint.call(null,inst_11953);var state_11974__$1 = state_11974;var statearr_11996_12050 = state_11974__$1;(statearr_11996_12050[(2)] = inst_11954);
(statearr_11996_12050[(1)] = (31));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11975 === (6)))
{var inst_11970 = (state_11974[(2)]);var state_11974__$1 = state_11974;var statearr_11997_12051 = state_11974__$1;(statearr_11997_12051[(2)] = inst_11970);
(statearr_11997_12051[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11975 === (28)))
{var inst_11931 = (state_11974[(20)]);var inst_11937 = (state_11974[(2)]);var inst_11938 = cljs.core.deref.call(null,state);var inst_11939 = cljs.core.first.call(null,inst_11931);var inst_11940 = cljs.core.last.call(null,inst_11931);var inst_11941 = new cljs.core.Keyword(null,"things-vec","things-vec",-1363222375).cljs$core$IFn$_invoke$arity$1(inst_11940);var inst_11942 = cljs.core.pr_str.call(null,"api chan event : type ",inst_11939," data ",inst_11940);var inst_11943 = console.log(inst_11942);var inst_11944 = growingtree_app.core.update_history_BANG_.call(null,history,new cljs.core.Keyword(null,"api","api",-899839580),inst_11931);var inst_11945 = cljs.core.partial.call(null,growingtree_app.controllers.api.api_event,target,inst_11939,inst_11940);var inst_11946 = cljs.core.swap_BANG_.call(null,state,inst_11945);var inst_11947 = cljs.core.deref.call(null,state);var inst_11948 = growingtree_app.controllers.post_api.post_api_event_BANG_.call(null,target,inst_11939,inst_11940,inst_11938,inst_11947);var state_11974__$1 = (function (){var statearr_11998 = state_11974;(statearr_11998[(21)] = inst_11944);
(statearr_11998[(22)] = inst_11937);
(statearr_11998[(23)] = inst_11941);
(statearr_11998[(24)] = inst_11943);
(statearr_11998[(25)] = inst_11946);
return statearr_11998;
})();var statearr_11999_12052 = state_11974__$1;(statearr_11999_12052[(2)] = inst_11948);
(statearr_11999_12052[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11975 === (25)))
{var inst_11964 = (state_11974[(2)]);var state_11974__$1 = state_11974;var statearr_12000_12053 = state_11974__$1;(statearr_12000_12053[(2)] = inst_11964);
(statearr_12000_12053[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11975 === (34)))
{var inst_11960 = (state_11974[(2)]);var state_11974__$1 = state_11974;var statearr_12001_12054 = state_11974__$1;(statearr_12001_12054[(2)] = inst_11960);
(statearr_12001_12054[(1)] = (31));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11975 === (17)))
{var inst_11891 = (state_11974[(15)]);var inst_11906 = cljs.core.last.call(null,inst_11891);var state_11974__$1 = state_11974;var statearr_12002_12055 = state_11974__$1;(statearr_12002_12055[(2)] = inst_11906);
(statearr_12002_12055[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11975 === (3)))
{var inst_11972 = (state_11974[(2)]);var state_11974__$1 = state_11974;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11974__$1,inst_11972);
} else
{if((state_val_11975 === (12)))
{var state_11974__$1 = state_11974;var statearr_12003_12056 = state_11974__$1;(statearr_12003_12056[(2)] = null);
(statearr_12003_12056[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11975 === (2)))
{var state_11974__$1 = state_11974;if(true)
{var statearr_12004_12057 = state_11974__$1;(statearr_12004_12057[(1)] = (4));
} else
{var statearr_12005_12058 = state_11974__$1;(statearr_12005_12058[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11975 === (23)))
{var inst_11885 = (state_11974[(8)]);var inst_11931 = cljs.core.nth.call(null,inst_11885,(0),null);var state_11974__$1 = (function (){var statearr_12006 = state_11974;(statearr_12006[(20)] = inst_11931);
return statearr_12006;
})();if(cljs.core.truth_(growingtree_app.utils.logging_enabled_QMARK_))
{var statearr_12007_12059 = state_11974__$1;(statearr_12007_12059[(1)] = (26));
} else
{var statearr_12008_12060 = state_11974__$1;(statearr_12008_12060[(1)] = (27));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11975 === (19)))
{var inst_11909 = (state_11974[(2)]);var state_11974__$1 = state_11974;var statearr_12009_12061 = state_11974__$1;(statearr_12009_12061[(2)] = inst_11909);
(statearr_12009_12061[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11975 === (11)))
{var inst_11891 = (state_11974[(15)]);var inst_11893 = cljs.core.pr_str.call(null,inst_11891);var inst_11894 = growingtree_app.utils.mprint.call(null,"Controls Verbose: ",inst_11893);var state_11974__$1 = state_11974;var statearr_12010_12062 = state_11974__$1;(statearr_12010_12062[(2)] = inst_11894);
(statearr_12010_12062[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11975 === (9)))
{var inst_11887 = (state_11974[(7)]);var inst_11880 = (state_11974[(13)]);var inst_11928 = cljs.core._EQ_.call(null,inst_11887,inst_11880);var state_11974__$1 = state_11974;if(inst_11928)
{var statearr_12011_12063 = state_11974__$1;(statearr_12011_12063[(1)] = (23));
} else
{var statearr_12012_12064 = state_11974__$1;(statearr_12012_12064[(1)] = (24));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11975 === (5)))
{var state_11974__$1 = state_11974;var statearr_12013_12065 = state_11974__$1;(statearr_12013_12065[(2)] = null);
(statearr_12013_12065[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11975 === (14)))
{var inst_11891 = (state_11974[(15)]);var inst_11902 = cljs.core.last.call(null,inst_11891);var inst_11903 = cljs.core.deref.call(null,inst_11902);var state_11974__$1 = state_11974;var statearr_12014_12066 = state_11974__$1;(statearr_12014_12066[(2)] = inst_11903);
(statearr_12014_12066[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11975 === (26)))
{var inst_11931 = (state_11974[(20)]);var inst_11933 = cljs.core.pr_str.call(null,inst_11931);var inst_11934 = growingtree_app.utils.mprint.call(null,"API Verbose: ",inst_11933);var state_11974__$1 = state_11974;var statearr_12015_12067 = state_11974__$1;(statearr_12015_12067[(2)] = inst_11934);
(statearr_12015_12067[(1)] = (28));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11975 === (16)))
{var inst_11899 = (state_11974[(14)]);var inst_11911 = (state_11974[(2)]);var inst_11912 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"refresh","refresh",1947415525),inst_11899);var state_11974__$1 = (function (){var statearr_12016 = state_11974;(statearr_12016[(11)] = inst_11911);
return statearr_12016;
})();if(inst_11912)
{var statearr_12017_12068 = state_11974__$1;(statearr_12017_12068[(1)] = (20));
} else
{var statearr_12018_12069 = state_11974__$1;(statearr_12018_12069[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11975 === (30)))
{var inst_11887 = (state_11974[(7)]);var inst_11956 = cljs.core._EQ_.call(null,inst_11887,new cljs.core.Keyword(null,"default","default",-1987822328));var state_11974__$1 = state_11974;if(inst_11956)
{var statearr_12019_12070 = state_11974__$1;(statearr_12019_12070[(1)] = (32));
} else
{var statearr_12020_12071 = state_11974__$1;(statearr_12020_12071[(1)] = (33));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11975 === (10)))
{var inst_11966 = (state_11974[(2)]);var state_11974__$1 = (function (){var statearr_12021 = state_11974;(statearr_12021[(26)] = inst_11966);
return statearr_12021;
})();var statearr_12022_12072 = state_11974__$1;(statearr_12022_12072[(2)] = null);
(statearr_12022_12072[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11975 === (18)))
{var state_11974__$1 = state_11974;var statearr_12023_12073 = state_11974__$1;(statearr_12023_12073[(2)] = null);
(statearr_12023_12073[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11975 === (8)))
{var inst_11885 = (state_11974[(8)]);var inst_11891 = cljs.core.nth.call(null,inst_11885,(0),null);var state_11974__$1 = (function (){var statearr_12024 = state_11974;(statearr_12024[(15)] = inst_11891);
return statearr_12024;
})();if(cljs.core.truth_(growingtree_app.utils.logging_enabled_QMARK_))
{var statearr_12025_12074 = state_11974__$1;(statearr_12025_12074[(1)] = (11));
} else
{var statearr_12026_12075 = state_11974__$1;(statearr_12026_12075[(1)] = (12));
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
var state_machine__6281__auto____0 = (function (){var statearr_12030 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12030[(0)] = state_machine__6281__auto__);
(statearr_12030[(1)] = (1));
return statearr_12030;
});
var state_machine__6281__auto____1 = (function (state_11974){while(true){
var ret_value__6282__auto__ = (function (){try{while(true){
var result__6283__auto__ = switch__6280__auto__.call(null,state_11974);if(cljs.core.keyword_identical_QMARK_.call(null,result__6283__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6283__auto__;
}
break;
}
}catch (e12031){if((e12031 instanceof Object))
{var ex__6284__auto__ = e12031;var statearr_12032_12076 = state_11974;(statearr_12032_12076[(5)] = ex__6284__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11974);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e12031;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6282__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12077 = state_11974;
state_11974 = G__12077;
continue;
}
} else
{return ret_value__6282__auto__;
}
break;
}
});
state_machine__6281__auto__ = function(state_11974){
switch(arguments.length){
case 0:
return state_machine__6281__auto____0.call(this);
case 1:
return state_machine__6281__auto____1.call(this,state_11974);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6281__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6281__auto____0;
state_machine__6281__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6281__auto____1;
return state_machine__6281__auto__;
})()
;})(switch__6280__auto__,c__6345__auto__,comms,history))
})();var state__6347__auto__ = (function (){var statearr_12033 = f__6346__auto__.call(null);(statearr_12033[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6345__auto__);
return statearr_12033;
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
var seq__12082 = cljs.core.seq.call(null,channels);var chunk__12083 = null;var count__12084 = (0);var i__12085 = (0);while(true){
if((i__12085 < count__12084))
{var channel = cljs.core._nth.call(null,chunk__12083,i__12085);growingtree_app.api.kandan.subscribe_BANG_.call(null,kandan_client,("/channels/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(channel)),new cljs.core.Keyword(null,"api","api",-899839580).cljs$core$IFn$_invoke$arity$1(comms));
{
var G__12086 = seq__12082;
var G__12087 = chunk__12083;
var G__12088 = count__12084;
var G__12089 = (i__12085 + (1));
seq__12082 = G__12086;
chunk__12083 = G__12087;
count__12084 = G__12088;
i__12085 = G__12089;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__12082);if(temp__4126__auto__)
{var seq__12082__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12082__$1))
{var c__4299__auto__ = cljs.core.chunk_first.call(null,seq__12082__$1);{
var G__12090 = cljs.core.chunk_rest.call(null,seq__12082__$1);
var G__12091 = c__4299__auto__;
var G__12092 = cljs.core.count.call(null,c__4299__auto__);
var G__12093 = (0);
seq__12082 = G__12090;
chunk__12083 = G__12091;
count__12084 = G__12092;
i__12085 = G__12093;
continue;
}
} else
{var channel = cljs.core.first.call(null,seq__12082__$1);growingtree_app.api.kandan.subscribe_BANG_.call(null,kandan_client,("/channels/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(channel)),new cljs.core.Keyword(null,"api","api",-899839580).cljs$core$IFn$_invoke$arity$1(comms));
{
var G__12094 = cljs.core.next.call(null,seq__12082__$1);
var G__12095 = null;
var G__12096 = (0);
var G__12097 = (0);
seq__12082 = G__12094;
chunk__12083 = G__12095;
count__12084 = G__12096;
i__12085 = G__12097;
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