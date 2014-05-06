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
goog.require('growingtree_app.controllers.post_controls');
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
goog.require('growingtree_app.mock_data');
goog.require('clojure.string');
goog.require('growingtree_app.utils');
goog.require('growingtree_app.controllers.controls');
goog.require('growingtree_app.utils');
goog.require('om.dom');
goog.require('growingtree_app.controllers.post_api');
goog.require('growingtree_app.controllers.controls');
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
cljs.core.print.call(null,"main target ",target);
om.core.root.call(null,growingtree_app.components.app.app,state,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",4427965699),target,new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"comms","comms",1108747865),comms], null)], null));
var c__6068__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6069__auto__ = (function (){var switch__5998__auto__ = (function (state_11386){var state_val_11387 = (state_11386[1]);if((state_val_11387 === 1))
{var state_11386__$1 = state_11386;var statearr_11388_11432 = state_11386__$1;(statearr_11388_11432[2] = null);
(statearr_11388_11432[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11387 === 2))
{var state_11386__$1 = state_11386;if(true)
{var statearr_11389_11433 = state_11386__$1;(statearr_11389_11433[1] = 4);
} else
{var statearr_11390_11434 = state_11386__$1;(statearr_11390_11434[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11387 === 3))
{var inst_11384 = (state_11386[2]);var state_11386__$1 = state_11386;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11386__$1,inst_11384);
} else
{if((state_val_11387 === 4))
{var inst_11309 = (state_11386[7]);var inst_11311 = (state_11386[8]);var inst_11310 = (state_11386[9]);var inst_11309__$1 = new cljs.core.Keyword(null,"controls","controls",4741937704).cljs$core$IFn$_invoke$arity$1(comms);var inst_11310__$1 = new cljs.core.Keyword(null,"api","api",1014001036).cljs$core$IFn$_invoke$arity$1(comms);var inst_11311__$1 = cljs.core.async.timeout.call(null,30000);var inst_11312 = [inst_11309__$1,inst_11310__$1,inst_11311__$1];var inst_11313 = (new cljs.core.PersistentVector(null,3,5,cljs.core.PersistentVector.EMPTY_NODE,inst_11312,null));var state_11386__$1 = (function (){var statearr_11391 = state_11386;(statearr_11391[7] = inst_11309__$1);
(statearr_11391[8] = inst_11311__$1);
(statearr_11391[9] = inst_11310__$1);
return statearr_11391;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_11386__$1,7,inst_11313);
} else
{if((state_val_11387 === 5))
{var state_11386__$1 = state_11386;var statearr_11392_11435 = state_11386__$1;(statearr_11392_11435[2] = null);
(statearr_11392_11435[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11387 === 6))
{var inst_11382 = (state_11386[2]);var state_11386__$1 = state_11386;var statearr_11393_11436 = state_11386__$1;(statearr_11393_11436[2] = inst_11382);
(statearr_11393_11436[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11387 === 7))
{var inst_11309 = (state_11386[7]);var inst_11317 = (state_11386[10]);var inst_11315 = (state_11386[11]);var inst_11315__$1 = (state_11386[2]);var inst_11316 = cljs.core.nth.call(null,inst_11315__$1,0,null);var inst_11317__$1 = cljs.core.nth.call(null,inst_11315__$1,1,null);var inst_11318 = cljs.core._EQ_.call(null,inst_11317__$1,inst_11309);var state_11386__$1 = (function (){var statearr_11394 = state_11386;(statearr_11394[10] = inst_11317__$1);
(statearr_11394[11] = inst_11315__$1);
(statearr_11394[12] = inst_11316);
return statearr_11394;
})();if(inst_11318)
{var statearr_11395_11437 = state_11386__$1;(statearr_11395_11437[1] = 8);
} else
{var statearr_11396_11438 = state_11386__$1;(statearr_11396_11438[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11387 === 8))
{var inst_11315 = (state_11386[11]);var inst_11321 = cljs.core.nth.call(null,inst_11315,0,null);var inst_11322 = new cljs.core.Keyword(null,"log-channels?","log-channels?",1640598168).cljs$core$IFn$_invoke$arity$1(growingtree_app.utils.initial_player_state);var state_11386__$1 = (function (){var statearr_11397 = state_11386;(statearr_11397[13] = inst_11321);
return statearr_11397;
})();if(cljs.core.truth_(inst_11322))
{var statearr_11398_11439 = state_11386__$1;(statearr_11398_11439[1] = 11);
} else
{var statearr_11399_11440 = state_11386__$1;(statearr_11399_11440[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11387 === 9))
{var inst_11317 = (state_11386[10]);var inst_11310 = (state_11386[9]);var inst_11340 = cljs.core._EQ_.call(null,inst_11317,inst_11310);var state_11386__$1 = state_11386;if(inst_11340)
{var statearr_11400_11441 = state_11386__$1;(statearr_11400_11441[1] = 14);
} else
{var statearr_11401_11442 = state_11386__$1;(statearr_11401_11442[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11387 === 10))
{var inst_11378 = (state_11386[2]);var state_11386__$1 = (function (){var statearr_11402 = state_11386;(statearr_11402[14] = inst_11378);
return statearr_11402;
})();var statearr_11403_11443 = state_11386__$1;(statearr_11403_11443[2] = null);
(statearr_11403_11443[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11387 === 11))
{var inst_11321 = (state_11386[13]);var inst_11324 = cljs.core.pr_str.call(null,inst_11321);var inst_11325 = growingtree_app.utils.mprint.call(null,"Controls Verbose: ",inst_11324);var state_11386__$1 = state_11386;var statearr_11404_11444 = state_11386__$1;(statearr_11404_11444[2] = inst_11325);
(statearr_11404_11444[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11387 === 12))
{var state_11386__$1 = state_11386;var statearr_11405_11445 = state_11386__$1;(statearr_11405_11445[2] = null);
(statearr_11405_11445[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11387 === 13))
{var inst_11321 = (state_11386[13]);var inst_11328 = (state_11386[2]);var inst_11329 = cljs.core.deref.call(null,state);var inst_11330 = growingtree_app.core.update_history_BANG_.call(null,history,new cljs.core.Keyword(null,"controls","controls",4741937704),inst_11321);var inst_11331 = cljs.core.first.call(null,inst_11321);var inst_11332 = cljs.core.second.call(null,inst_11321);var inst_11333 = cljs.core.partial.call(null,growingtree_app.controllers.controls.control_event,target,inst_11331,inst_11332);var inst_11334 = cljs.core.swap_BANG_.call(null,state,inst_11333);var inst_11335 = cljs.core.first.call(null,inst_11321);var inst_11336 = cljs.core.second.call(null,inst_11321);var inst_11337 = cljs.core.deref.call(null,state);var inst_11338 = growingtree_app.controllers.post_controls.post_control_event_BANG_.call(null,target,inst_11335,inst_11336,inst_11329,inst_11337);var state_11386__$1 = (function (){var statearr_11406 = state_11386;(statearr_11406[15] = inst_11330);
(statearr_11406[16] = inst_11334);
(statearr_11406[17] = inst_11328);
return statearr_11406;
})();var statearr_11407_11446 = state_11386__$1;(statearr_11407_11446[2] = inst_11338);
(statearr_11407_11446[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11387 === 14))
{var inst_11315 = (state_11386[11]);var inst_11343 = cljs.core.nth.call(null,inst_11315,0,null);var inst_11344 = new cljs.core.Keyword(null,"log-channels?","log-channels?",1640598168).cljs$core$IFn$_invoke$arity$1(growingtree_app.utils.initial_player_state);var state_11386__$1 = (function (){var statearr_11408 = state_11386;(statearr_11408[18] = inst_11343);
return statearr_11408;
})();if(cljs.core.truth_(inst_11344))
{var statearr_11409_11447 = state_11386__$1;(statearr_11409_11447[1] = 17);
} else
{var statearr_11410_11448 = state_11386__$1;(statearr_11410_11448[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11387 === 15))
{var inst_11317 = (state_11386[10]);var inst_11311 = (state_11386[8]);var inst_11362 = cljs.core._EQ_.call(null,inst_11317,inst_11311);var state_11386__$1 = state_11386;if(inst_11362)
{var statearr_11411_11449 = state_11386__$1;(statearr_11411_11449[1] = 20);
} else
{var statearr_11412_11450 = state_11386__$1;(statearr_11412_11450[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11387 === 16))
{var inst_11376 = (state_11386[2]);var state_11386__$1 = state_11386;var statearr_11413_11451 = state_11386__$1;(statearr_11413_11451[2] = inst_11376);
(statearr_11413_11451[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11387 === 17))
{var inst_11343 = (state_11386[18]);var inst_11346 = cljs.core.pr_str.call(null,inst_11343);var inst_11347 = growingtree_app.utils.mprint.call(null,"API Verbose: ",inst_11346);var state_11386__$1 = state_11386;var statearr_11414_11452 = state_11386__$1;(statearr_11414_11452[2] = inst_11347);
(statearr_11414_11452[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11387 === 18))
{var state_11386__$1 = state_11386;var statearr_11415_11453 = state_11386__$1;(statearr_11415_11453[2] = null);
(statearr_11415_11453[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11387 === 19))
{var inst_11343 = (state_11386[18]);var inst_11350 = (state_11386[2]);var inst_11351 = cljs.core.deref.call(null,state);var inst_11352 = growingtree_app.core.update_history_BANG_.call(null,history,new cljs.core.Keyword(null,"api","api",1014001036),inst_11343);var inst_11353 = cljs.core.first.call(null,inst_11343);var inst_11354 = cljs.core.second.call(null,inst_11343);var inst_11355 = cljs.core.partial.call(null,growingtree_app.controllers.api.api_event,target,inst_11353,inst_11354);var inst_11356 = cljs.core.swap_BANG_.call(null,state,inst_11355);var inst_11357 = cljs.core.first.call(null,inst_11343);var inst_11358 = cljs.core.second.call(null,inst_11343);var inst_11359 = cljs.core.deref.call(null,state);var inst_11360 = growingtree_app.controllers.post_api.post_api_event_BANG_.call(null,target,inst_11357,inst_11358,inst_11351,inst_11359);var state_11386__$1 = (function (){var statearr_11416 = state_11386;(statearr_11416[19] = inst_11352);
(statearr_11416[20] = inst_11350);
(statearr_11416[21] = inst_11356);
return statearr_11416;
})();var statearr_11417_11454 = state_11386__$1;(statearr_11417_11454[2] = inst_11360);
(statearr_11417_11454[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11387 === 20))
{var inst_11364 = cljs.core.deref.call(null,history);var inst_11365 = cljs.core.pr_str.call(null,inst_11364);var inst_11366 = growingtree_app.utils.mprint.call(null,inst_11365);var state_11386__$1 = state_11386;var statearr_11418_11455 = state_11386__$1;(statearr_11418_11455[2] = inst_11366);
(statearr_11418_11455[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11387 === 21))
{var inst_11317 = (state_11386[10]);var inst_11368 = cljs.core._EQ_.call(null,inst_11317,new cljs.core.Keyword(null,"default","default",2558708147));var state_11386__$1 = state_11386;if(inst_11368)
{var statearr_11419_11456 = state_11386__$1;(statearr_11419_11456[1] = 23);
} else
{var statearr_11420_11457 = state_11386__$1;(statearr_11420_11457[1] = 24);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11387 === 22))
{var inst_11374 = (state_11386[2]);var state_11386__$1 = state_11386;var statearr_11421_11458 = state_11386__$1;(statearr_11421_11458[2] = inst_11374);
(statearr_11421_11458[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11387 === 23))
{var inst_11316 = (state_11386[12]);var state_11386__$1 = state_11386;var statearr_11422_11459 = state_11386__$1;(statearr_11422_11459[2] = inst_11316);
(statearr_11422_11459[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11387 === 24))
{var state_11386__$1 = state_11386;var statearr_11423_11460 = state_11386__$1;(statearr_11423_11460[2] = null);
(statearr_11423_11460[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11387 === 25))
{var inst_11372 = (state_11386[2]);var state_11386__$1 = state_11386;var statearr_11424_11461 = state_11386__$1;(statearr_11424_11461[2] = inst_11372);
(statearr_11424_11461[1] = 22);
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
var state_machine__5999__auto____0 = (function (){var statearr_11428 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11428[0] = state_machine__5999__auto__);
(statearr_11428[1] = 1);
return statearr_11428;
});
var state_machine__5999__auto____1 = (function (state_11386){while(true){
var ret_value__6000__auto__ = (function (){try{while(true){
var result__6001__auto__ = switch__5998__auto__.call(null,state_11386);if(cljs.core.keyword_identical_QMARK_.call(null,result__6001__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6001__auto__;
}
break;
}
}catch (e11429){if((e11429 instanceof Object))
{var ex__6002__auto__ = e11429;var statearr_11430_11462 = state_11386;(statearr_11430_11462[5] = ex__6002__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11386);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11429;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6000__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11463 = state_11386;
state_11386 = G__11463;
continue;
}
} else
{return ret_value__6000__auto__;
}
break;
}
});
state_machine__5999__auto__ = function(state_11386){
switch(arguments.length){
case 0:
return state_machine__5999__auto____0.call(this);
case 1:
return state_machine__5999__auto____1.call(this,state_11386);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5999__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5999__auto____0;
state_machine__5999__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5999__auto____1;
return state_machine__5999__auto__;
})()
;})(switch__5998__auto__))
})();var state__6070__auto__ = (function (){var statearr_11431 = f__6069__auto__.call(null);(statearr_11431[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6068__auto__);
return statearr_11431;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6070__auto__);
}));
return c__6068__auto__;
});
growingtree_app.core.setup_BANG_ = (function setup_BANG_(){var comms = new cljs.core.Keyword(null,"comms","comms",1108747865).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,growingtree_app.core.app_state));growingtree_app.core.main.call(null,document.getElementById("app"),growingtree_app.core.app_state);
if(cljs.core.truth_(new cljs.core.Keyword(null,"restore-state?","restore-state?",3703635295).cljs$core$IFn$_invoke$arity$1(growingtree_app.utils.initial_query_map)))
{cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"controls","controls",4741937704).cljs$core$IFn$_invoke$arity$1(comms),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-restored","state-restored",2236662980)], null));
} else
{}
if(cljs.core.truth_(new cljs.core.Keyword(null,"kandan-client?","kandan-client?",915311154).cljs$core$IFn$_invoke$arity$1(growingtree_app.utils.initial_query_map)))
{var api_key = new cljs.core.Keyword(null,"kandan-api-key","kandan-api-key",3548116106).cljs$core$IFn$_invoke$arity$1(growingtree_app.utils.initial_query_map);var kandan_client = growingtree_app.api.kandan.make_client.call(null,api_key,"http://localhost:3000/remote/faye");var channels = new cljs.core.Keyword(null,"kandan-channels","kandan-channels",2776703958).cljs$core$IFn$_invoke$arity$1(growingtree_app.utils.initial_query_map);cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"controls","controls",4741937704).cljs$core$IFn$_invoke$arity$1(comms),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"api-key-updated","api-key-updated",756464524),api_key], null));
var seq__11468 = cljs.core.seq.call(null,channels);var chunk__11469 = null;var count__11470 = 0;var i__11471 = 0;while(true){
if((i__11471 < count__11470))
{var channel = cljs.core._nth.call(null,chunk__11469,i__11471);growingtree_app.api.kandan.subscribe_BANG_.call(null,kandan_client,[cljs.core.str("/channels/"),cljs.core.str(channel)].join(''),new cljs.core.Keyword(null,"api","api",1014001036).cljs$core$IFn$_invoke$arity$1(comms));
{
var G__11472 = seq__11468;
var G__11473 = chunk__11469;
var G__11474 = count__11470;
var G__11475 = (i__11471 + 1);
seq__11468 = G__11472;
chunk__11469 = G__11473;
count__11470 = G__11474;
i__11471 = G__11475;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__11468);if(temp__4092__auto__)
{var seq__11468__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11468__$1))
{var c__4191__auto__ = cljs.core.chunk_first.call(null,seq__11468__$1);{
var G__11476 = cljs.core.chunk_rest.call(null,seq__11468__$1);
var G__11477 = c__4191__auto__;
var G__11478 = cljs.core.count.call(null,c__4191__auto__);
var G__11479 = 0;
seq__11468 = G__11476;
chunk__11469 = G__11477;
count__11470 = G__11478;
i__11471 = G__11479;
continue;
}
} else
{var channel = cljs.core.first.call(null,seq__11468__$1);growingtree_app.api.kandan.subscribe_BANG_.call(null,kandan_client,[cljs.core.str("/channels/"),cljs.core.str(channel)].join(''),new cljs.core.Keyword(null,"api","api",1014001036).cljs$core$IFn$_invoke$arity$1(comms));
{
var G__11480 = cljs.core.next.call(null,seq__11468__$1);
var G__11481 = null;
var G__11482 = 0;
var G__11483 = 0;
seq__11468 = G__11480;
chunk__11469 = G__11481;
count__11470 = G__11482;
i__11471 = G__11483;
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