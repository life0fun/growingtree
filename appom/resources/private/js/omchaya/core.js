// Compiled by ClojureScript 0.0-2173
goog.provide('omchaya.core');
goog.require('cljs.core');
goog.require('omchaya.utils');
goog.require('omchaya.useful');
goog.require('cljs.core.async');
goog.require('omchaya.components.app');
goog.require('omchaya.routes');
goog.require('omchaya.controllers.post_controls');
goog.require('omchaya.utils');
goog.require('omchaya.controllers.api');
goog.require('omchaya.api.kandan');
goog.require('omchaya.controllers.api');
goog.require('cljs.core.async');
goog.require('omchaya.api.mock');
goog.require('omchaya.useful');
goog.require('omchaya.mock_data');
goog.require('omchaya.useful');
goog.require('om.dom');
goog.require('om.core');
goog.require('clojure.string');
goog.require('omchaya.api.mock');
goog.require('omchaya.datetime');
goog.require('om.core');
goog.require('omchaya.controllers.post_api');
goog.require('omchaya.mock_data');
goog.require('omchaya.datetime');
goog.require('clojure.string');
goog.require('omchaya.components.app');
goog.require('omchaya.utils');
goog.require('om.dom');
goog.require('omchaya.controllers.post_api');
goog.require('omchaya.routes');
goog.require('omchaya.controllers.controls');
goog.require('dommy.core');
goog.require('cljs.core.async');
goog.require('omchaya.controllers.controls');
goog.require('omchaya.api.kandan');
goog.require('omchaya.controllers.post_controls');
goog.require('dommy.core');
cljs.core.enable_console_print_BANG_.call(null);
omchaya.core.controls_ch = cljs.core.async.chan.call(null);
omchaya.core.api_ch = cljs.core.async.chan.call(null);
omchaya.core.app_state = cljs.core.atom.call(null,omchaya.mock_data.initial_state.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"controls","controls",4741937704),omchaya.core.controls_ch,new cljs.core.Keyword(null,"api","api",1014001036),omchaya.core.api_ch], null)));
omchaya.core.history = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
omchaya.core.filtered_message_QMARK_ = (function filtered_message_QMARK_(message){return cljs.core.get.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"credit-card-updated","credit-card-updated",2872375492),null], null), null),message);
});
omchaya.core.update_history_BANG_ = (function update_history_BANG_(history,channel,message){var m = cljs.core.first.call(null,message);var record = (cljs.core.truth_(omchaya.core.filtered_message_QMARK_.call(null,m))?m:message);return cljs.core.swap_BANG_.call(null,history,cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [channel,record], null));
});
omchaya.core.main = (function main(target,state){var comms = new cljs.core.Keyword(null,"comms","comms",1108747865).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state));var history = (function (){var or__3443__auto__ = omchaya.core.history;if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{return cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
})();omchaya.routes.define_routes_BANG_.call(null,state,document.getElementById("history-container"));
om.core.root.call(null,omchaya.components.app.app,state,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",4427965699),target,new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"comms","comms",1108747865),comms], null)], null));
var c__6068__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6069__auto__ = (function (){var switch__5998__auto__ = (function (state_23311){var state_val_23312 = (state_23311[1]);if((state_val_23312 === 1))
{var state_23311__$1 = state_23311;var statearr_23313_23357 = state_23311__$1;(statearr_23313_23357[2] = null);
(statearr_23313_23357[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23312 === 2))
{var state_23311__$1 = state_23311;if(true)
{var statearr_23314_23358 = state_23311__$1;(statearr_23314_23358[1] = 4);
} else
{var statearr_23315_23359 = state_23311__$1;(statearr_23315_23359[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23312 === 3))
{var inst_23309 = (state_23311[2]);var state_23311__$1 = state_23311;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23311__$1,inst_23309);
} else
{if((state_val_23312 === 4))
{var inst_23236 = (state_23311[7]);var inst_23235 = (state_23311[8]);var inst_23234 = (state_23311[9]);var inst_23234__$1 = new cljs.core.Keyword(null,"controls","controls",4741937704).cljs$core$IFn$_invoke$arity$1(comms);var inst_23235__$1 = new cljs.core.Keyword(null,"api","api",1014001036).cljs$core$IFn$_invoke$arity$1(comms);var inst_23236__$1 = cljs.core.async.timeout.call(null,30000);var inst_23237 = [inst_23234__$1,inst_23235__$1,inst_23236__$1];var inst_23238 = (new cljs.core.PersistentVector(null,3,5,cljs.core.PersistentVector.EMPTY_NODE,inst_23237,null));var state_23311__$1 = (function (){var statearr_23316 = state_23311;(statearr_23316[7] = inst_23236__$1);
(statearr_23316[8] = inst_23235__$1);
(statearr_23316[9] = inst_23234__$1);
return statearr_23316;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_23311__$1,7,inst_23238);
} else
{if((state_val_23312 === 5))
{var state_23311__$1 = state_23311;var statearr_23317_23360 = state_23311__$1;(statearr_23317_23360[2] = null);
(statearr_23317_23360[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23312 === 6))
{var inst_23307 = (state_23311[2]);var state_23311__$1 = state_23311;var statearr_23318_23361 = state_23311__$1;(statearr_23318_23361[2] = inst_23307);
(statearr_23318_23361[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23312 === 7))
{var inst_23242 = (state_23311[10]);var inst_23240 = (state_23311[11]);var inst_23234 = (state_23311[9]);var inst_23240__$1 = (state_23311[2]);var inst_23241 = cljs.core.nth.call(null,inst_23240__$1,0,null);var inst_23242__$1 = cljs.core.nth.call(null,inst_23240__$1,1,null);var inst_23243 = cljs.core._EQ_.call(null,inst_23242__$1,inst_23234);var state_23311__$1 = (function (){var statearr_23319 = state_23311;(statearr_23319[10] = inst_23242__$1);
(statearr_23319[11] = inst_23240__$1);
(statearr_23319[12] = inst_23241);
return statearr_23319;
})();if(inst_23243)
{var statearr_23320_23362 = state_23311__$1;(statearr_23320_23362[1] = 8);
} else
{var statearr_23321_23363 = state_23311__$1;(statearr_23321_23363[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23312 === 8))
{var inst_23240 = (state_23311[11]);var inst_23246 = cljs.core.nth.call(null,inst_23240,0,null);var inst_23247 = new cljs.core.Keyword(null,"log-channels?","log-channels?",1640598168).cljs$core$IFn$_invoke$arity$1(omchaya.utils.initial_player_state);var state_23311__$1 = (function (){var statearr_23322 = state_23311;(statearr_23322[13] = inst_23246);
return statearr_23322;
})();if(cljs.core.truth_(inst_23247))
{var statearr_23323_23364 = state_23311__$1;(statearr_23323_23364[1] = 11);
} else
{var statearr_23324_23365 = state_23311__$1;(statearr_23324_23365[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23312 === 9))
{var inst_23242 = (state_23311[10]);var inst_23235 = (state_23311[8]);var inst_23265 = cljs.core._EQ_.call(null,inst_23242,inst_23235);var state_23311__$1 = state_23311;if(inst_23265)
{var statearr_23325_23366 = state_23311__$1;(statearr_23325_23366[1] = 14);
} else
{var statearr_23326_23367 = state_23311__$1;(statearr_23326_23367[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23312 === 10))
{var inst_23303 = (state_23311[2]);var state_23311__$1 = (function (){var statearr_23327 = state_23311;(statearr_23327[14] = inst_23303);
return statearr_23327;
})();var statearr_23328_23368 = state_23311__$1;(statearr_23328_23368[2] = null);
(statearr_23328_23368[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23312 === 11))
{var inst_23246 = (state_23311[13]);var inst_23249 = cljs.core.pr_str.call(null,inst_23246);var inst_23250 = omchaya.utils.mprint.call(null,"Controls Verbose: ",inst_23249);var state_23311__$1 = state_23311;var statearr_23329_23369 = state_23311__$1;(statearr_23329_23369[2] = inst_23250);
(statearr_23329_23369[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23312 === 12))
{var state_23311__$1 = state_23311;var statearr_23330_23370 = state_23311__$1;(statearr_23330_23370[2] = null);
(statearr_23330_23370[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23312 === 13))
{var inst_23246 = (state_23311[13]);var inst_23253 = (state_23311[2]);var inst_23254 = cljs.core.deref.call(null,state);var inst_23255 = omchaya.core.update_history_BANG_.call(null,history,new cljs.core.Keyword(null,"controls","controls",4741937704),inst_23246);var inst_23256 = cljs.core.first.call(null,inst_23246);var inst_23257 = cljs.core.second.call(null,inst_23246);var inst_23258 = cljs.core.partial.call(null,omchaya.controllers.controls.control_event,target,inst_23256,inst_23257);var inst_23259 = cljs.core.swap_BANG_.call(null,state,inst_23258);var inst_23260 = cljs.core.first.call(null,inst_23246);var inst_23261 = cljs.core.second.call(null,inst_23246);var inst_23262 = cljs.core.deref.call(null,state);var inst_23263 = omchaya.controllers.post_controls.post_control_event_BANG_.call(null,target,inst_23260,inst_23261,inst_23254,inst_23262);var state_23311__$1 = (function (){var statearr_23331 = state_23311;(statearr_23331[15] = inst_23253);
(statearr_23331[16] = inst_23259);
(statearr_23331[17] = inst_23255);
return statearr_23331;
})();var statearr_23332_23371 = state_23311__$1;(statearr_23332_23371[2] = inst_23263);
(statearr_23332_23371[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23312 === 14))
{var inst_23240 = (state_23311[11]);var inst_23268 = cljs.core.nth.call(null,inst_23240,0,null);var inst_23269 = new cljs.core.Keyword(null,"log-channels?","log-channels?",1640598168).cljs$core$IFn$_invoke$arity$1(omchaya.utils.initial_player_state);var state_23311__$1 = (function (){var statearr_23333 = state_23311;(statearr_23333[18] = inst_23268);
return statearr_23333;
})();if(cljs.core.truth_(inst_23269))
{var statearr_23334_23372 = state_23311__$1;(statearr_23334_23372[1] = 17);
} else
{var statearr_23335_23373 = state_23311__$1;(statearr_23335_23373[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23312 === 15))
{var inst_23242 = (state_23311[10]);var inst_23236 = (state_23311[7]);var inst_23287 = cljs.core._EQ_.call(null,inst_23242,inst_23236);var state_23311__$1 = state_23311;if(inst_23287)
{var statearr_23336_23374 = state_23311__$1;(statearr_23336_23374[1] = 20);
} else
{var statearr_23337_23375 = state_23311__$1;(statearr_23337_23375[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23312 === 16))
{var inst_23301 = (state_23311[2]);var state_23311__$1 = state_23311;var statearr_23338_23376 = state_23311__$1;(statearr_23338_23376[2] = inst_23301);
(statearr_23338_23376[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23312 === 17))
{var inst_23268 = (state_23311[18]);var inst_23271 = cljs.core.pr_str.call(null,inst_23268);var inst_23272 = omchaya.utils.mprint.call(null,"API Verbose: ",inst_23271);var state_23311__$1 = state_23311;var statearr_23339_23377 = state_23311__$1;(statearr_23339_23377[2] = inst_23272);
(statearr_23339_23377[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23312 === 18))
{var state_23311__$1 = state_23311;var statearr_23340_23378 = state_23311__$1;(statearr_23340_23378[2] = null);
(statearr_23340_23378[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23312 === 19))
{var inst_23268 = (state_23311[18]);var inst_23275 = (state_23311[2]);var inst_23276 = cljs.core.deref.call(null,state);var inst_23277 = omchaya.core.update_history_BANG_.call(null,history,new cljs.core.Keyword(null,"api","api",1014001036),inst_23268);var inst_23278 = cljs.core.first.call(null,inst_23268);var inst_23279 = cljs.core.second.call(null,inst_23268);var inst_23280 = cljs.core.partial.call(null,omchaya.controllers.api.api_event,target,inst_23278,inst_23279);var inst_23281 = cljs.core.swap_BANG_.call(null,state,inst_23280);var inst_23282 = cljs.core.first.call(null,inst_23268);var inst_23283 = cljs.core.second.call(null,inst_23268);var inst_23284 = cljs.core.deref.call(null,state);var inst_23285 = omchaya.controllers.post_api.post_api_event_BANG_.call(null,target,inst_23282,inst_23283,inst_23276,inst_23284);var state_23311__$1 = (function (){var statearr_23341 = state_23311;(statearr_23341[19] = inst_23275);
(statearr_23341[20] = inst_23281);
(statearr_23341[21] = inst_23277);
return statearr_23341;
})();var statearr_23342_23379 = state_23311__$1;(statearr_23342_23379[2] = inst_23285);
(statearr_23342_23379[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23312 === 20))
{var inst_23289 = cljs.core.deref.call(null,history);var inst_23290 = cljs.core.pr_str.call(null,inst_23289);var inst_23291 = omchaya.utils.mprint.call(null,inst_23290);var state_23311__$1 = state_23311;var statearr_23343_23380 = state_23311__$1;(statearr_23343_23380[2] = inst_23291);
(statearr_23343_23380[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23312 === 21))
{var inst_23242 = (state_23311[10]);var inst_23293 = cljs.core._EQ_.call(null,inst_23242,new cljs.core.Keyword(null,"default","default",2558708147));var state_23311__$1 = state_23311;if(inst_23293)
{var statearr_23344_23381 = state_23311__$1;(statearr_23344_23381[1] = 23);
} else
{var statearr_23345_23382 = state_23311__$1;(statearr_23345_23382[1] = 24);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23312 === 22))
{var inst_23299 = (state_23311[2]);var state_23311__$1 = state_23311;var statearr_23346_23383 = state_23311__$1;(statearr_23346_23383[2] = inst_23299);
(statearr_23346_23383[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23312 === 23))
{var inst_23241 = (state_23311[12]);var state_23311__$1 = state_23311;var statearr_23347_23384 = state_23311__$1;(statearr_23347_23384[2] = inst_23241);
(statearr_23347_23384[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23312 === 24))
{var state_23311__$1 = state_23311;var statearr_23348_23385 = state_23311__$1;(statearr_23348_23385[2] = null);
(statearr_23348_23385[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23312 === 25))
{var inst_23297 = (state_23311[2]);var state_23311__$1 = state_23311;var statearr_23349_23386 = state_23311__$1;(statearr_23349_23386[2] = inst_23297);
(statearr_23349_23386[1] = 22);
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
});return ((function (switch__5998__auto__){
return (function() {
var state_machine__5999__auto__ = null;
var state_machine__5999__auto____0 = (function (){var statearr_23353 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_23353[0] = state_machine__5999__auto__);
(statearr_23353[1] = 1);
return statearr_23353;
});
var state_machine__5999__auto____1 = (function (state_23311){while(true){
var ret_value__6000__auto__ = (function (){try{while(true){
var result__6001__auto__ = switch__5998__auto__.call(null,state_23311);if(cljs.core.keyword_identical_QMARK_.call(null,result__6001__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6001__auto__;
}
break;
}
}catch (e23354){if((e23354 instanceof Object))
{var ex__6002__auto__ = e23354;var statearr_23355_23387 = state_23311;(statearr_23355_23387[5] = ex__6002__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23311);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e23354;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6000__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__23388 = state_23311;
state_23311 = G__23388;
continue;
}
} else
{return ret_value__6000__auto__;
}
break;
}
});
state_machine__5999__auto__ = function(state_23311){
switch(arguments.length){
case 0:
return state_machine__5999__auto____0.call(this);
case 1:
return state_machine__5999__auto____1.call(this,state_23311);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5999__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5999__auto____0;
state_machine__5999__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5999__auto____1;
return state_machine__5999__auto__;
})()
;})(switch__5998__auto__))
})();var state__6070__auto__ = (function (){var statearr_23356 = f__6069__auto__.call(null);(statearr_23356[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6068__auto__);
return statearr_23356;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6070__auto__);
}));
return c__6068__auto__;
});
omchaya.core.setup_BANG_ = (function setup_BANG_(){var comms = new cljs.core.Keyword(null,"comms","comms",1108747865).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,omchaya.core.app_state));omchaya.core.main.call(null,document.getElementById("app"),omchaya.core.app_state);
if(cljs.core.truth_(new cljs.core.Keyword(null,"restore-state?","restore-state?",3703635295).cljs$core$IFn$_invoke$arity$1(omchaya.utils.initial_query_map)))
{cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"controls","controls",4741937704).cljs$core$IFn$_invoke$arity$1(comms),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-restored","state-restored",2236662980)], null));
} else
{}
if(cljs.core.truth_(new cljs.core.Keyword(null,"kandan-client?","kandan-client?",915311154).cljs$core$IFn$_invoke$arity$1(omchaya.utils.initial_query_map)))
{var api_key = new cljs.core.Keyword(null,"kandan-api-key","kandan-api-key",3548116106).cljs$core$IFn$_invoke$arity$1(omchaya.utils.initial_query_map);var kandan_client = omchaya.api.kandan.make_client.call(null,api_key,"http://localhost:3000/remote/faye");var channels = new cljs.core.Keyword(null,"kandan-channels","kandan-channels",2776703958).cljs$core$IFn$_invoke$arity$1(omchaya.utils.initial_query_map);cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"controls","controls",4741937704).cljs$core$IFn$_invoke$arity$1(comms),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"api-key-updated","api-key-updated",756464524),api_key], null));
var seq__23393 = cljs.core.seq.call(null,channels);var chunk__23394 = null;var count__23395 = 0;var i__23396 = 0;while(true){
if((i__23396 < count__23395))
{var channel = cljs.core._nth.call(null,chunk__23394,i__23396);omchaya.api.kandan.subscribe_BANG_.call(null,kandan_client,[cljs.core.str("/channels/"),cljs.core.str(channel)].join(''),new cljs.core.Keyword(null,"api","api",1014001036).cljs$core$IFn$_invoke$arity$1(comms));
{
var G__23397 = seq__23393;
var G__23398 = chunk__23394;
var G__23399 = count__23395;
var G__23400 = (i__23396 + 1);
seq__23393 = G__23397;
chunk__23394 = G__23398;
count__23395 = G__23399;
i__23396 = G__23400;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__23393);if(temp__4092__auto__)
{var seq__23393__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23393__$1))
{var c__4191__auto__ = cljs.core.chunk_first.call(null,seq__23393__$1);{
var G__23401 = cljs.core.chunk_rest.call(null,seq__23393__$1);
var G__23402 = c__4191__auto__;
var G__23403 = cljs.core.count.call(null,c__4191__auto__);
var G__23404 = 0;
seq__23393 = G__23401;
chunk__23394 = G__23402;
count__23395 = G__23403;
i__23396 = G__23404;
continue;
}
} else
{var channel = cljs.core.first.call(null,seq__23393__$1);omchaya.api.kandan.subscribe_BANG_.call(null,kandan_client,[cljs.core.str("/channels/"),cljs.core.str(channel)].join(''),new cljs.core.Keyword(null,"api","api",1014001036).cljs$core$IFn$_invoke$arity$1(comms));
{
var G__23405 = cljs.core.next.call(null,seq__23393__$1);
var G__23406 = null;
var G__23407 = 0;
var G__23408 = 0;
seq__23393 = G__23405;
chunk__23394 = G__23406;
count__23395 = G__23407;
i__23396 = G__23408;
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
window.onload = omchaya.core.setup_BANG_;
omchaya.core.send_async_message = (function send_async_message(ch_name,message,data){return cljs.core.async.put_BANG_.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,omchaya.core.app_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"comms","comms",1108747865),cljs.core.keyword.call(null,ch_name)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,message),cljs.core.js__GT_clj.call(null,data,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",4191781672),true)], null));
});
goog.exportSymbol('omchaya.core.send_async_message', omchaya.core.send_async_message);
omchaya.core.remove_channel_BANG_ = (function remove_channel_BANG_(channel_id){return cljs.core.async.put_BANG_.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,omchaya.core.app_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"comms","comms",1108747865),new cljs.core.Keyword(null,"controls","controls",4741937704)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"channel-remotely-destroyed","channel-remotely-destroyed",2144502171),channel_id], null));
});
goog.exportSymbol('omchaya.core.remove_channel_BANG_', omchaya.core.remove_channel_BANG_);
