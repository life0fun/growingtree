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
return (function (state_11962){var state_val_11963 = (state_11962[(1)]);if((state_val_11963 === (7)))
{var inst_11873 = (state_11962[(7)]);var inst_11879 = (state_11962[(8)]);var inst_11881 = (state_11962[(9)]);var inst_11879__$1 = (state_11962[(2)]);var inst_11880 = cljs.core.nth.call(null,inst_11879__$1,(0),null);var inst_11881__$1 = cljs.core.nth.call(null,inst_11879__$1,(1),null);var inst_11882 = cljs.core._EQ_.call(null,inst_11881__$1,inst_11873);var state_11962__$1 = (function (){var statearr_11964 = state_11962;(statearr_11964[(8)] = inst_11879__$1);
(statearr_11964[(9)] = inst_11881__$1);
(statearr_11964[(10)] = inst_11880);
return statearr_11964;
})();if(inst_11882)
{var statearr_11965_12022 = state_11962__$1;(statearr_11965_12022[(1)] = (8));
} else
{var statearr_11966_12023 = state_11962__$1;(statearr_11966_12023[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11963 === (20)))
{var inst_11905 = (state_11962[(11)]);var inst_11908 = [new cljs.core.Keyword(null,"body","body",-2049205669),(0)];var inst_11909 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_11908,null));var inst_11910 = cljs.core.get_in.call(null,inst_11905,inst_11909);var state_11962__$1 = state_11962;var statearr_11967_12024 = state_11962__$1;(statearr_11967_12024[(2)] = inst_11910);
(statearr_11967_12024[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11963 === (27)))
{var state_11962__$1 = state_11962;var statearr_11968_12025 = state_11962__$1;(statearr_11968_12025[(2)] = null);
(statearr_11968_12025[(1)] = (28));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11963 === (1)))
{var state_11962__$1 = state_11962;var statearr_11969_12026 = state_11962__$1;(statearr_11969_12026[(2)] = null);
(statearr_11969_12026[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11963 === (24)))
{var inst_11875 = (state_11962[(12)]);var inst_11881 = (state_11962[(9)]);var inst_11938 = cljs.core._EQ_.call(null,inst_11881,inst_11875);var state_11962__$1 = state_11962;if(inst_11938)
{var statearr_11970_12027 = state_11962__$1;(statearr_11970_12027[(1)] = (29));
} else
{var statearr_11971_12028 = state_11962__$1;(statearr_11971_12028[(1)] = (30));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11963 === (4)))
{var inst_11874 = (state_11962[(13)]);var inst_11873 = (state_11962[(7)]);var inst_11875 = (state_11962[(12)]);var inst_11873__$1 = new cljs.core.Keyword(null,"controls","controls",1340701452).cljs$core$IFn$_invoke$arity$1(comms);var inst_11874__$1 = new cljs.core.Keyword(null,"api","api",-899839580).cljs$core$IFn$_invoke$arity$1(comms);var inst_11875__$1 = cljs.core.async.timeout.call(null,(30000));var inst_11876 = [inst_11873__$1,inst_11874__$1,inst_11875__$1];var inst_11877 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_11876,null));var state_11962__$1 = (function (){var statearr_11972 = state_11962;(statearr_11972[(13)] = inst_11874__$1);
(statearr_11972[(7)] = inst_11873__$1);
(statearr_11972[(12)] = inst_11875__$1);
return statearr_11972;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_11962__$1,(7),inst_11877);
} else
{if((state_val_11963 === (15)))
{var state_11962__$1 = state_11962;if(new cljs.core.Keyword(null,"else","else",-1508377146))
{var statearr_11973_12029 = state_11962__$1;(statearr_11973_12029[(1)] = (17));
} else
{var statearr_11974_12030 = state_11962__$1;(statearr_11974_12030[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11963 === (21)))
{var inst_11893 = (state_11962[(14)]);var state_11962__$1 = state_11962;var statearr_11975_12031 = state_11962__$1;(statearr_11975_12031[(2)] = inst_11893);
(statearr_11975_12031[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11963 === (31)))
{var inst_11950 = (state_11962[(2)]);var state_11962__$1 = state_11962;var statearr_11976_12032 = state_11962__$1;(statearr_11976_12032[(2)] = inst_11950);
(statearr_11976_12032[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11963 === (32)))
{var inst_11880 = (state_11962[(10)]);var state_11962__$1 = state_11962;var statearr_11977_12033 = state_11962__$1;(statearr_11977_12033[(2)] = inst_11880);
(statearr_11977_12033[(1)] = (34));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11963 === (33)))
{var state_11962__$1 = state_11962;var statearr_11978_12034 = state_11962__$1;(statearr_11978_12034[(2)] = null);
(statearr_11978_12034[(1)] = (34));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11963 === (13)))
{var inst_11885 = (state_11962[(15)]);var inst_11893 = (state_11962[(14)]);var inst_11891 = (state_11962[(2)]);var inst_11892 = cljs.core.deref.call(null,state);var inst_11893__$1 = cljs.core.first.call(null,inst_11885);var inst_11894 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"refresh","refresh",1947415525),inst_11893__$1);var state_11962__$1 = (function (){var statearr_11979 = state_11962;(statearr_11979[(16)] = inst_11891);
(statearr_11979[(14)] = inst_11893__$1);
(statearr_11979[(17)] = inst_11892);
return statearr_11979;
})();if(inst_11894)
{var statearr_11980_12035 = state_11962__$1;(statearr_11980_12035[(1)] = (14));
} else
{var statearr_11981_12036 = state_11962__$1;(statearr_11981_12036[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11963 === (22)))
{var inst_11892 = (state_11962[(17)]);var inst_11905 = (state_11962[(11)]);var inst_11913 = (state_11962[(2)]);var inst_11914 = cljs.core.partial.call(null,growingtree_app.controllers.controls.control_event,target,inst_11913,inst_11905);var inst_11915 = cljs.core.swap_BANG_.call(null,state,inst_11914);var inst_11916 = cljs.core.deref.call(null,state);var inst_11917 = growingtree_app.controllers.post_controls.post_control_event_BANG_.call(null,target,inst_11913,inst_11905,inst_11892,inst_11916);var state_11962__$1 = (function (){var statearr_11982 = state_11962;(statearr_11982[(18)] = inst_11915);
return statearr_11982;
})();var statearr_11983_12037 = state_11962__$1;(statearr_11983_12037[(2)] = inst_11917);
(statearr_11983_12037[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11963 === (29)))
{var inst_11940 = cljs.core.deref.call(null,history);var inst_11941 = cljs.core.pr_str.call(null,inst_11940);var inst_11942 = growingtree_app.utils.mprint.call(null,inst_11941);var state_11962__$1 = state_11962;var statearr_11984_12038 = state_11962__$1;(statearr_11984_12038[(2)] = inst_11942);
(statearr_11984_12038[(1)] = (31));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11963 === (6)))
{var inst_11958 = (state_11962[(2)]);var state_11962__$1 = state_11962;var statearr_11985_12039 = state_11962__$1;(statearr_11985_12039[(2)] = inst_11958);
(statearr_11985_12039[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11963 === (28)))
{var inst_11922 = (state_11962[(19)]);var inst_11928 = (state_11962[(2)]);var inst_11929 = cljs.core.deref.call(null,state);var inst_11930 = cljs.core.first.call(null,inst_11922);var inst_11931 = cljs.core.last.call(null,inst_11922);var inst_11932 = new cljs.core.Keyword(null,"things-vec","things-vec",-1363222375).cljs$core$IFn$_invoke$arity$1(inst_11931);var inst_11933 = cljs.core.partial.call(null,growingtree_app.controllers.api.api_event,target,inst_11930,inst_11931);var inst_11934 = cljs.core.swap_BANG_.call(null,state,inst_11933);var inst_11935 = cljs.core.deref.call(null,state);var inst_11936 = growingtree_app.controllers.post_api.post_api_event_BANG_.call(null,target,inst_11930,inst_11931,inst_11929,inst_11935);var state_11962__$1 = (function (){var statearr_11986 = state_11962;(statearr_11986[(20)] = inst_11932);
(statearr_11986[(21)] = inst_11934);
(statearr_11986[(22)] = inst_11928);
return statearr_11986;
})();var statearr_11987_12040 = state_11962__$1;(statearr_11987_12040[(2)] = inst_11936);
(statearr_11987_12040[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11963 === (25)))
{var inst_11952 = (state_11962[(2)]);var state_11962__$1 = state_11962;var statearr_11988_12041 = state_11962__$1;(statearr_11988_12041[(2)] = inst_11952);
(statearr_11988_12041[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11963 === (34)))
{var inst_11948 = (state_11962[(2)]);var state_11962__$1 = state_11962;var statearr_11989_12042 = state_11962__$1;(statearr_11989_12042[(2)] = inst_11948);
(statearr_11989_12042[(1)] = (31));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11963 === (17)))
{var inst_11885 = (state_11962[(15)]);var inst_11900 = cljs.core.last.call(null,inst_11885);var state_11962__$1 = state_11962;var statearr_11990_12043 = state_11962__$1;(statearr_11990_12043[(2)] = inst_11900);
(statearr_11990_12043[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11963 === (3)))
{var inst_11960 = (state_11962[(2)]);var state_11962__$1 = state_11962;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11962__$1,inst_11960);
} else
{if((state_val_11963 === (12)))
{var state_11962__$1 = state_11962;var statearr_11991_12044 = state_11962__$1;(statearr_11991_12044[(2)] = null);
(statearr_11991_12044[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11963 === (2)))
{var state_11962__$1 = state_11962;if(true)
{var statearr_11992_12045 = state_11962__$1;(statearr_11992_12045[(1)] = (4));
} else
{var statearr_11993_12046 = state_11962__$1;(statearr_11993_12046[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11963 === (23)))
{var inst_11879 = (state_11962[(8)]);var inst_11922 = cljs.core.nth.call(null,inst_11879,(0),null);var state_11962__$1 = (function (){var statearr_11994 = state_11962;(statearr_11994[(19)] = inst_11922);
return statearr_11994;
})();if(cljs.core.truth_(growingtree_app.utils.logging_enabled_QMARK_))
{var statearr_11995_12047 = state_11962__$1;(statearr_11995_12047[(1)] = (26));
} else
{var statearr_11996_12048 = state_11962__$1;(statearr_11996_12048[(1)] = (27));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11963 === (19)))
{var inst_11903 = (state_11962[(2)]);var state_11962__$1 = state_11962;var statearr_11997_12049 = state_11962__$1;(statearr_11997_12049[(2)] = inst_11903);
(statearr_11997_12049[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11963 === (11)))
{var inst_11885 = (state_11962[(15)]);var inst_11887 = cljs.core.pr_str.call(null,inst_11885);var inst_11888 = growingtree_app.utils.mprint.call(null,"Controls Verbose: ",inst_11887);var state_11962__$1 = state_11962;var statearr_11998_12050 = state_11962__$1;(statearr_11998_12050[(2)] = inst_11888);
(statearr_11998_12050[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11963 === (9)))
{var inst_11874 = (state_11962[(13)]);var inst_11881 = (state_11962[(9)]);var inst_11919 = cljs.core._EQ_.call(null,inst_11881,inst_11874);var state_11962__$1 = state_11962;if(inst_11919)
{var statearr_11999_12051 = state_11962__$1;(statearr_11999_12051[(1)] = (23));
} else
{var statearr_12000_12052 = state_11962__$1;(statearr_12000_12052[(1)] = (24));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11963 === (5)))
{var state_11962__$1 = state_11962;var statearr_12001_12053 = state_11962__$1;(statearr_12001_12053[(2)] = null);
(statearr_12001_12053[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11963 === (14)))
{var inst_11885 = (state_11962[(15)]);var inst_11896 = cljs.core.last.call(null,inst_11885);var inst_11897 = cljs.core.deref.call(null,inst_11896);var state_11962__$1 = state_11962;var statearr_12002_12054 = state_11962__$1;(statearr_12002_12054[(2)] = inst_11897);
(statearr_12002_12054[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11963 === (26)))
{var inst_11922 = (state_11962[(19)]);var inst_11924 = cljs.core.pr_str.call(null,inst_11922);var inst_11925 = growingtree_app.utils.mprint.call(null,"API Verbose: ",inst_11924);var state_11962__$1 = state_11962;var statearr_12003_12055 = state_11962__$1;(statearr_12003_12055[(2)] = inst_11925);
(statearr_12003_12055[(1)] = (28));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11963 === (16)))
{var inst_11893 = (state_11962[(14)]);var inst_11905 = (state_11962[(2)]);var inst_11906 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"refresh","refresh",1947415525),inst_11893);var state_11962__$1 = (function (){var statearr_12004 = state_11962;(statearr_12004[(11)] = inst_11905);
return statearr_12004;
})();if(inst_11906)
{var statearr_12005_12056 = state_11962__$1;(statearr_12005_12056[(1)] = (20));
} else
{var statearr_12006_12057 = state_11962__$1;(statearr_12006_12057[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11963 === (30)))
{var inst_11881 = (state_11962[(9)]);var inst_11944 = cljs.core._EQ_.call(null,inst_11881,new cljs.core.Keyword(null,"default","default",-1987822328));var state_11962__$1 = state_11962;if(inst_11944)
{var statearr_12007_12058 = state_11962__$1;(statearr_12007_12058[(1)] = (32));
} else
{var statearr_12008_12059 = state_11962__$1;(statearr_12008_12059[(1)] = (33));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11963 === (10)))
{var inst_11954 = (state_11962[(2)]);var state_11962__$1 = (function (){var statearr_12009 = state_11962;(statearr_12009[(23)] = inst_11954);
return statearr_12009;
})();var statearr_12010_12060 = state_11962__$1;(statearr_12010_12060[(2)] = null);
(statearr_12010_12060[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11963 === (18)))
{var state_11962__$1 = state_11962;var statearr_12011_12061 = state_11962__$1;(statearr_12011_12061[(2)] = null);
(statearr_12011_12061[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11963 === (8)))
{var inst_11879 = (state_11962[(8)]);var inst_11885 = cljs.core.nth.call(null,inst_11879,(0),null);var state_11962__$1 = (function (){var statearr_12012 = state_11962;(statearr_12012[(15)] = inst_11885);
return statearr_12012;
})();if(cljs.core.truth_(growingtree_app.utils.logging_enabled_QMARK_))
{var statearr_12013_12062 = state_11962__$1;(statearr_12013_12062[(1)] = (11));
} else
{var statearr_12014_12063 = state_11962__$1;(statearr_12014_12063[(1)] = (12));
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
var state_machine__6281__auto____0 = (function (){var statearr_12018 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12018[(0)] = state_machine__6281__auto__);
(statearr_12018[(1)] = (1));
return statearr_12018;
});
var state_machine__6281__auto____1 = (function (state_11962){while(true){
var ret_value__6282__auto__ = (function (){try{while(true){
var result__6283__auto__ = switch__6280__auto__.call(null,state_11962);if(cljs.core.keyword_identical_QMARK_.call(null,result__6283__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6283__auto__;
}
break;
}
}catch (e12019){if((e12019 instanceof Object))
{var ex__6284__auto__ = e12019;var statearr_12020_12064 = state_11962;(statearr_12020_12064[(5)] = ex__6284__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11962);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e12019;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6282__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12065 = state_11962;
state_11962 = G__12065;
continue;
}
} else
{return ret_value__6282__auto__;
}
break;
}
});
state_machine__6281__auto__ = function(state_11962){
switch(arguments.length){
case 0:
return state_machine__6281__auto____0.call(this);
case 1:
return state_machine__6281__auto____1.call(this,state_11962);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6281__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6281__auto____0;
state_machine__6281__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6281__auto____1;
return state_machine__6281__auto__;
})()
;})(switch__6280__auto__,c__6345__auto__,comms,history))
})();var state__6347__auto__ = (function (){var statearr_12021 = f__6346__auto__.call(null);(statearr_12021[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6345__auto__);
return statearr_12021;
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
var seq__12070 = cljs.core.seq.call(null,channels);var chunk__12071 = null;var count__12072 = (0);var i__12073 = (0);while(true){
if((i__12073 < count__12072))
{var channel = cljs.core._nth.call(null,chunk__12071,i__12073);growingtree_app.api.kandan.subscribe_BANG_.call(null,kandan_client,("/channels/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(channel)),new cljs.core.Keyword(null,"api","api",-899839580).cljs$core$IFn$_invoke$arity$1(comms));
{
var G__12074 = seq__12070;
var G__12075 = chunk__12071;
var G__12076 = count__12072;
var G__12077 = (i__12073 + (1));
seq__12070 = G__12074;
chunk__12071 = G__12075;
count__12072 = G__12076;
i__12073 = G__12077;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__12070);if(temp__4126__auto__)
{var seq__12070__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12070__$1))
{var c__4299__auto__ = cljs.core.chunk_first.call(null,seq__12070__$1);{
var G__12078 = cljs.core.chunk_rest.call(null,seq__12070__$1);
var G__12079 = c__4299__auto__;
var G__12080 = cljs.core.count.call(null,c__4299__auto__);
var G__12081 = (0);
seq__12070 = G__12078;
chunk__12071 = G__12079;
count__12072 = G__12080;
i__12073 = G__12081;
continue;
}
} else
{var channel = cljs.core.first.call(null,seq__12070__$1);growingtree_app.api.kandan.subscribe_BANG_.call(null,kandan_client,("/channels/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(channel)),new cljs.core.Keyword(null,"api","api",-899839580).cljs$core$IFn$_invoke$arity$1(comms));
{
var G__12082 = cljs.core.next.call(null,seq__12070__$1);
var G__12083 = null;
var G__12084 = (0);
var G__12085 = (0);
seq__12070 = G__12082;
chunk__12071 = G__12083;
count__12072 = G__12084;
i__12073 = G__12085;
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