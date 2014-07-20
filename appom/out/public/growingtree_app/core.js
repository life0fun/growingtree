// Compiled by ClojureScript 0.0-2173
goog.provide('growingtree_app.core');
goog.require('cljs.core');
goog.require('growingtree_app.utils');
goog.require('growingtree_app.useful');
goog.require('cljs.core.async');
goog.require('growingtree_app.controllers.api');
goog.require('growingtree_app.api.mock');
goog.require('growingtree_app.components.app');
goog.require('growingtree_app.components.app');
goog.require('growingtree_app.routes');
goog.require('growingtree_app.routes');
goog.require('growingtree_app.controllers.api');
goog.require('cljs.core.async');
goog.require('growingtree_app.api.mock');
goog.require('growingtree_app.useful');
goog.require('growingtree_app.mock_data');
goog.require('growingtree_app.useful');
goog.require('om.dom');
goog.require('om.core');
goog.require('clojure.string');
goog.require('growingtree_app.controllers.post_api');
goog.require('growingtree_app.datetime');
goog.require('om.core');
goog.require('growingtree_app.controllers.controls');
goog.require('growingtree_app.mock_data');
goog.require('clojure.string');
goog.require('growingtree_app.utils');
goog.require('growingtree_app.controllers.controls');
goog.require('growingtree_app.utils');
goog.require('om.dom');
goog.require('growingtree_app.controllers.post_api');
goog.require('growingtree_app.controllers.post_controls');
goog.require('dommy.core');
goog.require('cljs.core.async');
goog.require('growingtree_app.datetime');
goog.require('growingtree_app.api.kandan');
goog.require('growingtree_app.api.kandan');
goog.require('growingtree_app.controllers.post_controls');
goog.require('dommy.core');
cljs.core.enable_console_print_BANG_.call(null);
growingtree_app.core.controls_ch = cljs.core.async.chan.call(null);
growingtree_app.core.api_ch = cljs.core.async.chan.call(null);
growingtree_app.core.app_state = cljs.core.atom.call(null,growingtree_app.mock_data.initial_state.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"controls","controls",4741937704),growingtree_app.core.controls_ch,new cljs.core.Keyword(null,"api","api",1014001036),growingtree_app.core.api_ch], null)));
growingtree_app.core.history = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
growingtree_app.core.filtered_message_QMARK_ = (function filtered_message_QMARK_(message){return cljs.core.get.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"credit-card-updated","credit-card-updated",2872375492),null], null), null),message);
});
growingtree_app.core.update_history_BANG_ = (function update_history_BANG_(history,channel,message){var m = cljs.core.first.call(null,message);var record = (cljs.core.truth_(growingtree_app.core.filtered_message_QMARK_.call(null,m))?m:message);return cljs.core.swap_BANG_.call(null,history,cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [channel,record], null));
});
growingtree_app.core.main = (function main(target,state){var comms = new cljs.core.Keyword(null,"comms","comms",1108747865).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state));var history = (function (){var or__3443__auto__ = growingtree_app.core.history;if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{return cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
})();growingtree_app.routes.define_routes_BANG_.call(null,state,document.getElementById("history-container"));
om.core.root.call(null,growingtree_app.components.app.app,state,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",4427965699),target,new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"comms","comms",1108747865),comms], null)], null));
var c__6188__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6189__auto__ = (function (){var switch__6118__auto__ = (function (state_12237){var state_val_12238 = (state_12237[1]);if((state_val_12238 === 1))
{var state_12237__$1 = state_12237;var statearr_12239_12283 = state_12237__$1;(statearr_12239_12283[2] = null);
(statearr_12239_12283[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12238 === 2))
{var state_12237__$1 = state_12237;if(true)
{var statearr_12240_12284 = state_12237__$1;(statearr_12240_12284[1] = 4);
} else
{var statearr_12241_12285 = state_12237__$1;(statearr_12241_12285[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12238 === 3))
{var inst_12235 = (state_12237[2]);var state_12237__$1 = state_12237;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12237__$1,inst_12235);
} else
{if((state_val_12238 === 4))
{var inst_12165 = (state_12237[7]);var inst_12166 = (state_12237[8]);var inst_12164 = (state_12237[9]);var inst_12164__$1 = new cljs.core.Keyword(null,"controls","controls",4741937704).cljs$core$IFn$_invoke$arity$1(comms);var inst_12165__$1 = new cljs.core.Keyword(null,"api","api",1014001036).cljs$core$IFn$_invoke$arity$1(comms);var inst_12166__$1 = cljs.core.async.timeout.call(null,30000);var inst_12167 = [inst_12164__$1,inst_12165__$1,inst_12166__$1];var inst_12168 = (new cljs.core.PersistentVector(null,3,5,cljs.core.PersistentVector.EMPTY_NODE,inst_12167,null));var state_12237__$1 = (function (){var statearr_12242 = state_12237;(statearr_12242[7] = inst_12165__$1);
(statearr_12242[8] = inst_12166__$1);
(statearr_12242[9] = inst_12164__$1);
return statearr_12242;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_12237__$1,7,inst_12168);
} else
{if((state_val_12238 === 5))
{var state_12237__$1 = state_12237;var statearr_12243_12286 = state_12237__$1;(statearr_12243_12286[2] = null);
(statearr_12243_12286[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12238 === 6))
{var inst_12233 = (state_12237[2]);var state_12237__$1 = state_12237;var statearr_12244_12287 = state_12237__$1;(statearr_12244_12287[2] = inst_12233);
(statearr_12244_12287[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12238 === 7))
{var inst_12164 = (state_12237[9]);var inst_12170 = (state_12237[10]);var inst_12172 = (state_12237[11]);var inst_12170__$1 = (state_12237[2]);var inst_12171 = cljs.core.nth.call(null,inst_12170__$1,0,null);var inst_12172__$1 = cljs.core.nth.call(null,inst_12170__$1,1,null);var inst_12173 = cljs.core._EQ_.call(null,inst_12172__$1,inst_12164);var state_12237__$1 = (function (){var statearr_12245 = state_12237;(statearr_12245[12] = inst_12171);
(statearr_12245[10] = inst_12170__$1);
(statearr_12245[11] = inst_12172__$1);
return statearr_12245;
})();if(inst_12173)
{var statearr_12246_12288 = state_12237__$1;(statearr_12246_12288[1] = 8);
} else
{var statearr_12247_12289 = state_12237__$1;(statearr_12247_12289[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12238 === 8))
{var inst_12170 = (state_12237[10]);var inst_12176 = cljs.core.nth.call(null,inst_12170,0,null);var state_12237__$1 = (function (){var statearr_12248 = state_12237;(statearr_12248[13] = inst_12176);
return statearr_12248;
})();if(cljs.core.truth_(growingtree_app.utils.logging_enabled_QMARK_))
{var statearr_12249_12290 = state_12237__$1;(statearr_12249_12290[1] = 11);
} else
{var statearr_12250_12291 = state_12237__$1;(statearr_12250_12291[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12238 === 9))
{var inst_12165 = (state_12237[7]);var inst_12172 = (state_12237[11]);var inst_12193 = cljs.core._EQ_.call(null,inst_12172,inst_12165);var state_12237__$1 = state_12237;if(inst_12193)
{var statearr_12251_12292 = state_12237__$1;(statearr_12251_12292[1] = 14);
} else
{var statearr_12252_12293 = state_12237__$1;(statearr_12252_12293[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12238 === 10))
{var inst_12229 = (state_12237[2]);var state_12237__$1 = (function (){var statearr_12253 = state_12237;(statearr_12253[14] = inst_12229);
return statearr_12253;
})();var statearr_12254_12294 = state_12237__$1;(statearr_12254_12294[2] = null);
(statearr_12254_12294[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12238 === 11))
{var inst_12176 = (state_12237[13]);var inst_12178 = cljs.core.pr_str.call(null,inst_12176);var inst_12179 = growingtree_app.utils.mprint.call(null,"Controls Verbose: ",inst_12178);var state_12237__$1 = state_12237;var statearr_12255_12295 = state_12237__$1;(statearr_12255_12295[2] = inst_12179);
(statearr_12255_12295[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12238 === 12))
{var state_12237__$1 = state_12237;var statearr_12256_12296 = state_12237__$1;(statearr_12256_12296[2] = null);
(statearr_12256_12296[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12238 === 13))
{var inst_12176 = (state_12237[13]);var inst_12182 = (state_12237[2]);var inst_12183 = cljs.core.deref.call(null,state);var inst_12184 = cljs.core.first.call(null,inst_12176);var inst_12185 = cljs.core.last.call(null,inst_12176);var inst_12186 = cljs.core.pr_str.call(null,inst_12184,inst_12185);var inst_12187 = console.log("controls chan event: ",inst_12186);var inst_12188 = cljs.core.partial.call(null,growingtree_app.controllers.controls.control_event,target,inst_12184,inst_12185);var inst_12189 = cljs.core.swap_BANG_.call(null,state,inst_12188);var inst_12190 = cljs.core.deref.call(null,state);var inst_12191 = growingtree_app.controllers.post_controls.post_control_event_BANG_.call(null,target,inst_12184,inst_12185,inst_12183,inst_12190);var state_12237__$1 = (function (){var statearr_12257 = state_12237;(statearr_12257[15] = inst_12187);
(statearr_12257[16] = inst_12182);
(statearr_12257[17] = inst_12189);
return statearr_12257;
})();var statearr_12258_12297 = state_12237__$1;(statearr_12258_12297[2] = inst_12191);
(statearr_12258_12297[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12238 === 14))
{var inst_12170 = (state_12237[10]);var inst_12196 = cljs.core.nth.call(null,inst_12170,0,null);var state_12237__$1 = (function (){var statearr_12259 = state_12237;(statearr_12259[18] = inst_12196);
return statearr_12259;
})();if(cljs.core.truth_(growingtree_app.utils.logging_enabled_QMARK_))
{var statearr_12260_12298 = state_12237__$1;(statearr_12260_12298[1] = 17);
} else
{var statearr_12261_12299 = state_12237__$1;(statearr_12261_12299[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12238 === 15))
{var inst_12166 = (state_12237[8]);var inst_12172 = (state_12237[11]);var inst_12213 = cljs.core._EQ_.call(null,inst_12172,inst_12166);var state_12237__$1 = state_12237;if(inst_12213)
{var statearr_12262_12300 = state_12237__$1;(statearr_12262_12300[1] = 20);
} else
{var statearr_12263_12301 = state_12237__$1;(statearr_12263_12301[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12238 === 16))
{var inst_12227 = (state_12237[2]);var state_12237__$1 = state_12237;var statearr_12264_12302 = state_12237__$1;(statearr_12264_12302[2] = inst_12227);
(statearr_12264_12302[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12238 === 17))
{var inst_12196 = (state_12237[18]);var inst_12198 = cljs.core.pr_str.call(null,inst_12196);var inst_12199 = growingtree_app.utils.mprint.call(null,"API Verbose: ",inst_12198);var state_12237__$1 = state_12237;var statearr_12265_12303 = state_12237__$1;(statearr_12265_12303[2] = inst_12199);
(statearr_12265_12303[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12238 === 18))
{var state_12237__$1 = state_12237;var statearr_12266_12304 = state_12237__$1;(statearr_12266_12304[2] = null);
(statearr_12266_12304[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12238 === 19))
{var inst_12196 = (state_12237[18]);var inst_12202 = (state_12237[2]);var inst_12203 = cljs.core.deref.call(null,state);var inst_12204 = cljs.core.first.call(null,inst_12196);var inst_12205 = cljs.core.last.call(null,inst_12196);var inst_12206 = new cljs.core.Keyword(null,"things-vec","things-vec",905584254).cljs$core$IFn$_invoke$arity$1(inst_12205);var inst_12207 = growingtree_app.core.update_history_BANG_.call(null,history,new cljs.core.Keyword(null,"api","api",1014001036),inst_12196);var inst_12208 = cljs.core.partial.call(null,growingtree_app.controllers.api.api_event,target,inst_12204,inst_12205);var inst_12209 = cljs.core.swap_BANG_.call(null,state,inst_12208);var inst_12210 = cljs.core.deref.call(null,state);var inst_12211 = growingtree_app.controllers.post_api.post_api_event_BANG_.call(null,target,inst_12204,inst_12205,inst_12203,inst_12210);var state_12237__$1 = (function (){var statearr_12267 = state_12237;(statearr_12267[19] = inst_12209);
(statearr_12267[20] = inst_12206);
(statearr_12267[21] = inst_12207);
(statearr_12267[22] = inst_12202);
return statearr_12267;
})();var statearr_12268_12305 = state_12237__$1;(statearr_12268_12305[2] = inst_12211);
(statearr_12268_12305[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12238 === 20))
{var inst_12215 = cljs.core.deref.call(null,history);var inst_12216 = cljs.core.pr_str.call(null,inst_12215);var inst_12217 = growingtree_app.utils.mprint.call(null,inst_12216);var state_12237__$1 = state_12237;var statearr_12269_12306 = state_12237__$1;(statearr_12269_12306[2] = inst_12217);
(statearr_12269_12306[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12238 === 21))
{var inst_12172 = (state_12237[11]);var inst_12219 = cljs.core._EQ_.call(null,inst_12172,new cljs.core.Keyword(null,"default","default",2558708147));var state_12237__$1 = state_12237;if(inst_12219)
{var statearr_12270_12307 = state_12237__$1;(statearr_12270_12307[1] = 23);
} else
{var statearr_12271_12308 = state_12237__$1;(statearr_12271_12308[1] = 24);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12238 === 22))
{var inst_12225 = (state_12237[2]);var state_12237__$1 = state_12237;var statearr_12272_12309 = state_12237__$1;(statearr_12272_12309[2] = inst_12225);
(statearr_12272_12309[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12238 === 23))
{var inst_12171 = (state_12237[12]);var state_12237__$1 = state_12237;var statearr_12273_12310 = state_12237__$1;(statearr_12273_12310[2] = inst_12171);
(statearr_12273_12310[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12238 === 24))
{var state_12237__$1 = state_12237;var statearr_12274_12311 = state_12237__$1;(statearr_12274_12311[2] = null);
(statearr_12274_12311[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12238 === 25))
{var inst_12223 = (state_12237[2]);var state_12237__$1 = state_12237;var statearr_12275_12312 = state_12237__$1;(statearr_12275_12312[2] = inst_12223);
(statearr_12275_12312[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
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
});return ((function (switch__6118__auto__){
return (function() {
var state_machine__6119__auto__ = null;
var state_machine__6119__auto____0 = (function (){var statearr_12279 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12279[0] = state_machine__6119__auto__);
(statearr_12279[1] = 1);
return statearr_12279;
});
var state_machine__6119__auto____1 = (function (state_12237){while(true){
var ret_value__6120__auto__ = (function (){try{while(true){
var result__6121__auto__ = switch__6118__auto__.call(null,state_12237);if(cljs.core.keyword_identical_QMARK_.call(null,result__6121__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6121__auto__;
}
break;
}
}catch (e12280){if((e12280 instanceof Object))
{var ex__6122__auto__ = e12280;var statearr_12281_12313 = state_12237;(statearr_12281_12313[5] = ex__6122__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12237);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12280;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6120__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12314 = state_12237;
state_12237 = G__12314;
continue;
}
} else
{return ret_value__6120__auto__;
}
break;
}
});
state_machine__6119__auto__ = function(state_12237){
switch(arguments.length){
case 0:
return state_machine__6119__auto____0.call(this);
case 1:
return state_machine__6119__auto____1.call(this,state_12237);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6119__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6119__auto____0;
state_machine__6119__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6119__auto____1;
return state_machine__6119__auto__;
})()
;})(switch__6118__auto__))
})();var state__6190__auto__ = (function (){var statearr_12282 = f__6189__auto__.call(null);(statearr_12282[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6188__auto__);
return statearr_12282;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6190__auto__);
}));
return c__6188__auto__;
});
growingtree_app.core.setup_BANG_ = (function setup_BANG_(){var comms = new cljs.core.Keyword(null,"comms","comms",1108747865).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,growingtree_app.core.app_state));growingtree_app.core.main.call(null,document.getElementById("app"),growingtree_app.core.app_state);
if(cljs.core.truth_(new cljs.core.Keyword(null,"restore-state?","restore-state?",3703635295).cljs$core$IFn$_invoke$arity$1(growingtree_app.utils.initial_query_map)))
{cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"controls","controls",4741937704).cljs$core$IFn$_invoke$arity$1(comms),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-restored","state-restored",2236662980)], null));
} else
{}
if(cljs.core.truth_(new cljs.core.Keyword(null,"kandan-client?","kandan-client?",915311154).cljs$core$IFn$_invoke$arity$1(growingtree_app.utils.initial_query_map)))
{var api_key = new cljs.core.Keyword(null,"kandan-api-key","kandan-api-key",3548116106).cljs$core$IFn$_invoke$arity$1(growingtree_app.utils.initial_query_map);var kandan_client = growingtree_app.api.kandan.make_client.call(null,api_key,"http://localhost:3000/remote/faye");var channels = new cljs.core.Keyword(null,"kandan-channels","kandan-channels",2776703958).cljs$core$IFn$_invoke$arity$1(growingtree_app.utils.initial_query_map);cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"controls","controls",4741937704).cljs$core$IFn$_invoke$arity$1(comms),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"api-key-updated","api-key-updated",756464524),api_key], null));
var seq__12319 = cljs.core.seq.call(null,channels);var chunk__12320 = null;var count__12321 = 0;var i__12322 = 0;while(true){
if((i__12322 < count__12321))
{var channel = cljs.core._nth.call(null,chunk__12320,i__12322);growingtree_app.api.kandan.subscribe_BANG_.call(null,kandan_client,[cljs.core.str("/channels/"),cljs.core.str(channel)].join(''),new cljs.core.Keyword(null,"api","api",1014001036).cljs$core$IFn$_invoke$arity$1(comms));
{
var G__12323 = seq__12319;
var G__12324 = chunk__12320;
var G__12325 = count__12321;
var G__12326 = (i__12322 + 1);
seq__12319 = G__12323;
chunk__12320 = G__12324;
count__12321 = G__12325;
i__12322 = G__12326;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__12319);if(temp__4092__auto__)
{var seq__12319__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12319__$1))
{var c__4191__auto__ = cljs.core.chunk_first.call(null,seq__12319__$1);{
var G__12327 = cljs.core.chunk_rest.call(null,seq__12319__$1);
var G__12328 = c__4191__auto__;
var G__12329 = cljs.core.count.call(null,c__4191__auto__);
var G__12330 = 0;
seq__12319 = G__12327;
chunk__12320 = G__12328;
count__12321 = G__12329;
i__12322 = G__12330;
continue;
}
} else
{var channel = cljs.core.first.call(null,seq__12319__$1);growingtree_app.api.kandan.subscribe_BANG_.call(null,kandan_client,[cljs.core.str("/channels/"),cljs.core.str(channel)].join(''),new cljs.core.Keyword(null,"api","api",1014001036).cljs$core$IFn$_invoke$arity$1(comms));
{
var G__12331 = cljs.core.next.call(null,seq__12319__$1);
var G__12332 = null;
var G__12333 = 0;
var G__12334 = 0;
seq__12319 = G__12331;
chunk__12320 = G__12332;
count__12321 = G__12333;
i__12322 = G__12334;
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
growingtree_app.core.send_async_message = (function send_async_message(ch_name,message,data){return cljs.core.async.put_BANG_.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,growingtree_app.core.app_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"comms","comms",1108747865),cljs.core.keyword.call(null,ch_name)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,message),cljs.core.js__GT_clj.call(null,data,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",4191781672),true)], null));
});
goog.exportSymbol('growingtree_app.core.send_async_message', growingtree_app.core.send_async_message);
growingtree_app.core.remove_channel_BANG_ = (function remove_channel_BANG_(channel_id){return cljs.core.async.put_BANG_.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,growingtree_app.core.app_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"comms","comms",1108747865),new cljs.core.Keyword(null,"controls","controls",4741937704)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"channel-remotely-destroyed","channel-remotely-destroyed",2144502171),channel_id], null));
});
goog.exportSymbol('growingtree_app.core.remove_channel_BANG_', growingtree_app.core.remove_channel_BANG_);

//# sourceMappingURL=core.js.map