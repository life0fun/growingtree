// Compiled by ClojureScript 0.0-2173
goog.provide('omchaya.replay');
goog.require('cljs.core');
goog.require('omchaya.utils');
goog.require('cljs.core.async');
goog.require('omchaya.utils');
goog.require('cljs.core.async');
goog.require('omchaya.api.kandan.callbacks');
goog.require('omchaya.components.history_player');
goog.require('cljs.reader');
goog.require('omchaya.api.kandan.callbacks');
goog.require('om.core');
goog.require('om.core');
goog.require('omchaya.utils');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('omchaya.components.history_player');
omchaya.replay.example_replay = cljs.reader.read_string.call(null,"[[:controls [:tab-selected \"1\"]] [:controls [:api-key-updated \"isQgo1DvsegpyQ9Sq9ys\"]] [:controls [:user-message-focused]] [:controls [:user-message-updated \"E\"]] [:controls [:user-message-updated \"E\"]] [:controls [:user-message-updated \"Ex\"]] [:controls [:user-message-updated \"Exam\"]] [:controls [:user-message-updated \"Examp\"]] [:controls [:user-message-updated \"Exampl\"]] [:controls [:user-message-updated \"Example\"]] [:controls [:user-message-updated \"Example\"]] [:controls [:user-message-updated \"Example \"]] [:controls [:user-message-updated \"Example i\"]] [:controls [:user-message-updated \"Example in\"]] [:controls [:user-message-updated \"Example inp\"]] [:controls [:user-message-updated \"Example inpu\"]] [:controls [:user-message-updated \"Example input\"]] [:controls [:user-message-submitted]] [:controls [:user-message-updated \"W\"]] [:controls [:user-message-updated \"W\"]] [:controls [:user-message-updated \"Wa\"]] [:controls [:user-message-updated \"Wat\"]] [:controls [:user-message-updated \"Watch\"]] [:controls [:user-message-updated \"Watch\"]] [:controls [:user-message-updated \"Watch \"]] [:controls [:user-message-updated \"Watch me\"]] [:controls [:user-message-updated \"Watch me \"]] [:controls [:user-message-updated \"Watch me \"]] [:controls [:user-message-updated \"Watch me no\"]] [:controls [:user-message-updated \"Watch me now\"]] [:controls [:user-message-updated \"Watch me now\"]] [:controls [:user-message-submitted]] [:controls [:user-message-blurred]] [:controls [:user-message-focused]] [:controls [:user-message-updated \"/\"]] [:controls [:user-message-updated \"/pl\"]] [:controls [:user-message-updated \"/pl\"]] [:controls [:user-message-updated \"/pla\"]] [:controls [:user-message-updated \"/play\"]] [:controls [:user-message-updated \"/play \"]] [:controls [:user-message-updated \"/play https://dl.dropboxusercontent.com/u/412963/11%20Charlotte.mp3\"]] [:controls [:user-message-submitted]] [:controls [:audio-player-source-updated [\"https://dl.dropboxusercontent.com/u/412963/11%20Charlotte.mp3\" \"1\"]]] [:controls [:audio-player-started \"1\"]] [:controls [:user-message-blurred]] [:controls [:audio-player-stopped \"1\"]] [:controls [:user-message-focused]] [:controls [:user-message-updated \"/\"]] [:controls [:user-message-updated \"/pl\"]] [:controls [:user-message-updated \"/pl\"]] [:controls [:user-message-updated \"/pla\"]] [:controls [:user-message-updated \"/play\"]] [:controls [:user-message-updated \"/pla\"]] [:controls [:user-message-updated \"/pl\"]] [:controls [:user-message-updated \"/p\"]] [:controls [:user-message-updated \"/\"]] [:controls [:user-message-updated \"/q\"]] [:controls [:user-message-updated \"/qu\"]] [:controls [:user-message-updated \"/que\"]] [:controls [:user-message-updated \"/queu\"]] [:controls [:user-message-updated \"/queue\"]] [:controls [:user-message-updated \"/queue \"]] [:controls [:user-message-updated \"/queue https://dl.dropboxusercontent.com/u/412963/moresoldiers.mp3\"]] [:controls [:user-message-submitted]] [:controls [:playlist-entry-queued [\"1\" \"https://dl.dropboxusercontent.com/u/412963/moresoldiers.mp3\"]]] [:controls [:user-message-blurred]] [:controls [:user-message-focused]] [:controls [:user-message-updated \"O\"]] [:controls [:user-message-updated \"O\"]] [:controls [:user-message-updated \"Ok\"]] [:controls [:user-message-updated \"Ok,\"]] [:controls [:user-message-updated \"Ok, \"]] [:controls [:user-message-updated \"Ok, an\"]] [:controls [:user-message-updated \"Ok, ano\"]] [:controls [:user-message-updated \"Ok, anot\"]] [:controls [:user-message-updated \"Ok, anot\"]] [:controls [:user-message-updated \"Ok, anothe\"]] [:controls [:user-message-updated \"Ok, another \"]] [:controls [:user-message-updated \"Ok, another \"]] [:controls [:user-message-updated \"Ok, another \"]] [:controls [:user-message-updated \"Ok, another on\"]] [:controls [:user-message-updated \"Ok, another one\"]] [:controls [:user-message-updated \"Ok, another one\"]] [:controls [:user-message-updated \"Ok, another one.\"]] [:controls [:user-message-updated \"Ok, another one..\"]] [:controls [:user-message-updated \"Ok, another one...\"]] [:controls [:user-message-submitted]] [:controls [:user-message-updated \"/\"]] [:controls [:user-message-updated \"/q\"]] [:controls [:user-message-updated \"/qu\"]] [:controls [:user-message-updated \"/que\"]] [:controls [:user-message-updated \"/queue\"]] [:controls [:user-message-updated \"/queue\"]] [:controls [:user-message-updated \"/queue \"]] [:controls [:user-message-updated \"/queue https://dl.dropboxusercontent.com/u/412963/Golf%20Clap.mp3\"]] [:controls [:user-message-submitted]] [:controls [:playlist-entry-queued [\"1\" \"https://dl.dropboxusercontent.com/u/412963/Golf%20Clap.mp3\"]]] [:controls [:user-message-blurred]] [:controls [:playlist-entry-played [1 \"1\"]]] [:controls [:audio-player-source-updated [\"https://dl.dropboxusercontent.com/u/412963/moresoldiers.mp3\" \"1\"]]] [:controls [:audio-player-started \"1\"]] [:controls [:audio-player-stopped \"1\"]] [:controls [:user-message-focused]] [:controls [:user-message-updated \"q\"]] [:controls [:user-message-updated \"que\"]] [:controls [:user-message-updated \"que\"]] [:controls [:user-message-updated \"queue\"]] [:controls [:user-message-updated \"queue\"]] [:controls [:user-message-updated \"queue \"]] [:controls [:user-message-updated \"queue \"]] [:controls [:user-message-updated \"queue \"]] [:controls [:user-message-updated \"/queue \"]] [:controls [:user-message-updated \"/queue \"]] [:controls [:user-message-updated \"/queue \"]] [:controls [:user-message-updated \"/queue https://dl.dropboxusercontent.com/u/412963/11%20Charlotte.mp3\"]] [:controls [:user-message-submitted]] [:controls [:playlist-entry-queued [\"1\" \"https://dl.dropboxusercontent.com/u/412963/11%20Charlotte.mp3\"]]] [:controls [:user-message-blurred]] [:controls [:playlist-entry-played [3 \"1\"]]] [:controls [:audio-player-source-updated [\"https://dl.dropboxusercontent.com/u/412963/11%20Charlotte.mp3\" \"1\"]]] [:controls [:audio-player-started \"1\"]] [:controls [:user-message-focused]] [:controls [:user-message-updated \"(\"]] [:controls [:user-message-updated \"(\"]] [:controls [:user-message-updated \"(no\"]] [:controls [:user-message-updated \"(not\"]] [:controls [:user-message-updated \"(not\"]] [:controls [:user-message-updated \"(notb\"]] [:controls [:user-message-updated \"(notbad\"]] [:controls [:user-message-updated \"(notbad\"]] [:controls [:user-message-updated \"(notbad)\"]] [:controls [:user-message-updated \"(notbad)\"]] [:controls [:user-message-submitted]] [:controls [:user-message-blurred]] [:controls [:user-message-focused]] [:controls [:user-message-updated \"A\"]] [:controls [:user-message-updated \"A\"]] [:controls [:user-message-updated \"\"]] [:controls [:user-message-updated \"@\"]] [:controls [:user-message-updated \"@\"]] [:controls [:user-message-updated \"@\"]] [:controls [:user-message-updated \"@n\"]] [:controls [:user-message-updated \"@nb\"]] [:controls [:user-message-updated \"@nb \"]] [:controls [:user-message-updated \"@nb he\"]] [:controls [:user-message-updated \"@nb her\"]] [:controls [:user-message-updated \"@nb here\"]] [:controls [:user-message-updated \"@nb here'\"]] [:controls [:user-message-updated \"@nb here'\"]] [:controls [:user-message-updated \"@nb here's\"]] [:controls [:user-message-updated \"@nb here's \"]] [:controls [:user-message-updated \"@nb here's a \"]] [:controls [:user-message-updated \"@nb here's a \"]] [:controls [:user-message-updated \"@nb here's a g\"]] [:controls [:user-message-updated \"@nb here's a go\"]] [:controls [:user-message-updated \"@nb here's a good\"]] [:controls [:user-message-updated \"@nb here's a good\"]] [:controls [:user-message-updated \"@nb here's a good \"]] [:controls [:user-message-updated \"@nb here's a good e\"]] [:controls [:user-message-updated \"@nb here's a good ep\"]] [:controls [:user-message-updated \"@nb here's a good epi\"]] [:controls [:user-message-updated \"@nb here's a good epis\"]] [:controls [:user-message-updated \"@nb here's a good episo\"]] [:controls [:user-message-updated \"@nb here's a good episode\"]] [:controls [:user-message-updated \"@nb here's a good episode \"]] [:controls [:user-message-updated \"@nb here's a good episode \"]] [:controls [:user-message-updated \"@nb here's a good episode of\"]] [:controls [:user-message-updated \"@nb here's a good episode of \"]] [:controls [:user-message-updated \"@nb here's a good episode of \"]] [:controls [:user-message-updated \"@nb here's a good episode of M\"]] [:controls [:user-message-updated \"@nb here's a good episode of MT\"]] [:controls [:user-message-updated \"@nb here's a good episode of MTW\"]] [:controls [:user-message-updated \"@nb here's a good episode of MTW\"]] [:controls [:user-message-updated \"@nb here's a good episode of MTW \"]] [:controls [:user-message-updated \"@nb here's a good episode of MTW f\"]] [:controls [:user-message-updated \"@nb here's a good episode of MTW fo\"]] [:controls [:user-message-updated \"@nb here's a good episode of MTW for \"]] [:controls [:user-message-updated \"@nb here's a good episode of MTW for \"]] [:controls [:user-message-updated \"@nb here's a good episode of MTW for y\"]] [:controls [:user-message-updated \"@nb here's a good episode of MTW for you\"]] [:controls [:user-message-updated \"@nb here's a good episode of MTW for you\"]] [:controls [:user-message-updated \"@nb here's a good episode of MTW for you \"]] [:controls [:user-message-updated \"@nb here's a good episode of MTW for you http://www.youtube.com/watch?v=utv1la0q5ao\"]] [:controls [:user-message-submitted]] [:controls [:user-message-updated \"H\"]] [:controls [:user-message-updated \"H\"]] [:controls [:user-message-updated \"Hop\"]] [:controls [:user-message-updated \"Hop\"]] [:controls [:user-message-updated \"Hope\"]] [:controls [:user-message-updated \"Hope \"]] [:controls [:user-message-updated \"\"]] [:controls [:user-message-updated \"\"]] [:controls [:user-message-updated \"I\"]] [:controls [:user-message-updated \"I\"]] [:controls [:user-message-updated \"I'\"]] [:controls [:user-message-updated \"I'm\"]] [:controls [:user-message-updated \"I'm \"]] [:controls [:user-message-updated \"I'm su\"]] [:controls [:user-message-updated \"I'm su\"]] [:controls [:user-message-updated \"I'm sure \"]] [:controls [:user-message-updated \"I'm sure \"]] [:controls [:user-message-updated \"I'm sure \"]] [:controls [:user-message-updated \"I'm sure y\"]] [:controls [:user-message-updated \"I'm sure you\"]] [:controls [:user-message-updated \"I'm sure you\"]] [:controls [:user-message-updated \"I'm sure you'\"]] [:controls [:user-message-updated \"I'm sure you'l\"]] [:controls [:user-message-updated \"I'm sure you'll\"]] [:controls [:user-message-updated \"I'm sure you'll \"]] [:controls [:user-message-updated \"I'm sure you'll l\"]] [:controls [:user-message-updated \"I'm sure you'll lo\"]] [:controls [:user-message-updated \"I'm sure you'll l\"]] [:controls [:user-message-updated \"I'm sure you'll li\"]] [:controls [:user-message-updated \"I'm sure you'll like\"]] [:controls [:user-message-updated \"I'm sure you'll like \"]] [:controls [:user-message-updated \"I'm sure you'll like \"]] [:controls [:user-message-updated \"I'm sure you'll like i\"]] [:controls [:user-message-updated \"I'm sure you'll like it \"]] [:controls [:user-message-updated \"I'm sure you'll like it \"]] [:controls [:user-message-updated \"I'm sure you'll like it :\"]] [:controls [:user-message-updated \"I'm sure you'll like it :\"]] [:controls [:user-message-updated \"I'm sure you'll like it :+\"]] [:controls [:user-message-updated \"I'm sure you'll like it :+!\"]] [:controls [:user-message-updated \"I'm sure you'll like it :+!\"]] [:controls [:user-message-updated \"I'm sure you'll like it :+\"]] [:controls [:user-message-updated \"I'm sure you'll like it :+1\"]] [:controls [:user-message-updated \"I'm sure you'll like it :+1:\"]] [:controls [:user-message-updated \"I'm sure you'll like it :+1:\"]] [:controls [:user-message-submitted]] [:controls [:user-message-blurred]] [:controls [:audio-player-stopped \"1\"]]]");
omchaya.replay.replay_history_step_BANG_ = (function (){var method_table__4301__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__4302__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__4303__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__4304__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__4305__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("replay-history-step!",(function (channels_map,format_version,step,player_control_ch){return format_version;
}),new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__4305__auto__,method_table__4301__auto__,prefer_table__4302__auto__,method_cache__4303__auto__,cached_hierarchy__4304__auto__));
})();
omchaya.replay.player_control_ch = cljs.core.async.chan.call(null);
omchaya.replay.player_drag_ch = cljs.core.async.chan.call(null);
omchaya.replay.api_ch = cljs.core.async.chan.call(null);
omchaya.replay.initial_player_state = (function initial_player_state(app_comms,player_comms){return cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"replays","replays",2108401886),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"replay-list","replay-list",2022921782),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"history","history",1940838406),omchaya.replay.example_replay,new cljs.core.Keyword(null,"name","name",1017277949),"Example replay",new cljs.core.Keyword(null,"format_version","format_version",3631466498),1], null)], null),new cljs.core.Keyword(null,"queued-replay","queued-replay",2482676979),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"active-step","active-step",4211347621),0,new cljs.core.Keyword(null,"format_version","format_version",3631466498),1], null)], null),new cljs.core.Keyword(null,"player","player",4323118675),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"position","position",1761709211),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [16,16], null),new cljs.core.Keyword(null,"offset","offset",4289091589),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,0], null)], null),new cljs.core.Keyword(null,"player-comms","player-comms",3952961645),player_comms,new cljs.core.Keyword(null,"app-comms","app-comms",1410062253),app_comms,new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.Keyword(null,"stopped","stopped",3424552255)], null));
});
cljs.core._add_method.call(null,omchaya.replay.replay_history_step_BANG_,1,(function (channels_map,format_version,step,player_control_ch){var c__6068__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6069__auto__ = (function (){var switch__5998__auto__ = (function (state_23447){var state_val_23448 = (state_23447[1]);if((state_val_23448 === 5))
{var inst_23445 = (state_23447[2]);var state_23447__$1 = state_23447;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23447__$1,inst_23445);
} else
{if((state_val_23448 === 4))
{var state_23447__$1 = state_23447;var statearr_23449_23463 = state_23447__$1;(statearr_23449_23463[2] = null);
(statearr_23449_23463[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23448 === 3))
{var inst_23437 = (state_23447[7]);var inst_23433 = (state_23447[8]);var inst_23432 = (state_23447[9]);var inst_23439 = cljs.core.pr_str.call(null,inst_23432);var inst_23440 = cljs.core.pr_str.call(null,inst_23433);var inst_23441 = console.log(inst_23439," : ",inst_23440);var inst_23442 = cljs.core.async.put_BANG_.call(null,inst_23437,inst_23433);var state_23447__$1 = (function (){var statearr_23450 = state_23447;(statearr_23450[10] = inst_23441);
return statearr_23450;
})();var statearr_23451_23464 = state_23447__$1;(statearr_23451_23464[2] = inst_23442);
(statearr_23451_23464[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23448 === 2))
{var inst_23437 = (state_23447[7]);var inst_23432 = (state_23447[9]);var inst_23431 = (state_23447[11]);var inst_23436 = (state_23447[2]);var inst_23437__$1 = cljs.core.get.call(null,inst_23431,inst_23432);var state_23447__$1 = (function (){var statearr_23452 = state_23447;(statearr_23452[12] = inst_23436);
(statearr_23452[7] = inst_23437__$1);
return statearr_23452;
})();if(cljs.core.truth_(inst_23437__$1))
{var statearr_23453_23465 = state_23447__$1;(statearr_23453_23465[1] = 3);
} else
{var statearr_23454_23466 = state_23447__$1;(statearr_23454_23466[1] = 4);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23448 === 1))
{var inst_23431 = cljs.core.dissoc.call(null,channels_map,new cljs.core.Keyword(null,"error","error",1110689146));var inst_23432 = cljs.core.first.call(null,step);var inst_23433 = cljs.core.last.call(null,step);var inst_23434 = cljs.core.async.timeout.call(null,1000);var state_23447__$1 = (function (){var statearr_23455 = state_23447;(statearr_23455[8] = inst_23433);
(statearr_23455[9] = inst_23432);
(statearr_23455[11] = inst_23431);
return statearr_23455;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23447__$1,2,inst_23434);
} else
{return null;
}
}
}
}
}
});return ((function (switch__5998__auto__){
return (function() {
var state_machine__5999__auto__ = null;
var state_machine__5999__auto____0 = (function (){var statearr_23459 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_23459[0] = state_machine__5999__auto__);
(statearr_23459[1] = 1);
return statearr_23459;
});
var state_machine__5999__auto____1 = (function (state_23447){while(true){
var ret_value__6000__auto__ = (function (){try{while(true){
var result__6001__auto__ = switch__5998__auto__.call(null,state_23447);if(cljs.core.keyword_identical_QMARK_.call(null,result__6001__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6001__auto__;
}
break;
}
}catch (e23460){if((e23460 instanceof Object))
{var ex__6002__auto__ = e23460;var statearr_23461_23467 = state_23447;(statearr_23461_23467[5] = ex__6002__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23447);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e23460;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6000__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__23468 = state_23447;
state_23447 = G__23468;
continue;
}
} else
{return ret_value__6000__auto__;
}
break;
}
});
state_machine__5999__auto__ = function(state_23447){
switch(arguments.length){
case 0:
return state_machine__5999__auto____0.call(this);
case 1:
return state_machine__5999__auto____1.call(this,state_23447);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5999__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5999__auto____0;
state_machine__5999__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5999__auto____1;
return state_machine__5999__auto__;
})()
;})(switch__5998__auto__))
})();var state__6070__auto__ = (function (){var statearr_23462 = f__6069__auto__.call(null);(statearr_23462[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6068__auto__);
return statearr_23462;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6070__auto__);
}));
return c__6068__auto__;
}));
omchaya.replay.player_control_event = (function (){var method_table__4301__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__4302__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__4303__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__4304__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__4305__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("player-control-event",(function (message,args,state){return message;
}),new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__4305__auto__,method_table__4301__auto__,prefer_table__4302__auto__,method_cache__4303__auto__,cached_hierarchy__4304__auto__));
})();
cljs.core._add_method.call(null,omchaya.replay.player_control_event,new cljs.core.Keyword(null,"default","default",2558708147),(function (message,data,player_state){return console.log("No message handler for ",cljs.core.pr_str.call(null,message));
}));
cljs.core._add_method.call(null,omchaya.replay.player_control_event,new cljs.core.Keyword(null,"player-started","player-started",806961415),(function (message,data,player_state){return cljs.core.assoc.call(null,player_state,new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.Keyword(null,"playing","playing",520340384));
}));
cljs.core._add_method.call(null,omchaya.replay.player_control_event,new cljs.core.Keyword(null,"player-stopped","player-stopped",819827283),(function (message,data,player_state){return cljs.core.assoc.call(null,player_state,new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.Keyword(null,"stopped","stopped",3424552255));
}));
cljs.core._add_method.call(null,omchaya.replay.player_control_event,new cljs.core.Keyword(null,"step-selected","step-selected",3543353326),(function (message,data,player_state){return cljs.core.assoc_in.call(null,player_state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"replays","replays",2108401886),new cljs.core.Keyword(null,"queued-replay","queued-replay",2482676979),new cljs.core.Keyword(null,"active-step","active-step",4211347621)], null),data);
}));
cljs.core._add_method.call(null,omchaya.replay.player_control_event,new cljs.core.Keyword(null,"replay-selected","replay-selected",760550707),(function (message,data,player_state){return cljs.core.assoc_in.call(null,player_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"replays","replays",2108401886),new cljs.core.Keyword(null,"queued-replay","queued-replay",2482676979)], null),cljs.core.nth.call(null,cljs.core.get_in.call(null,player_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"replays","replays",2108401886),new cljs.core.Keyword(null,"replay-list","replay-list",2022921782)], null)),data));
}));
omchaya.replay.player_drag_event = (function (){var method_table__4301__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__4302__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__4303__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__4304__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__4305__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("player-drag-event",(function (message,args,state){return message;
}),new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__4305__auto__,method_table__4301__auto__,prefer_table__4302__auto__,method_cache__4303__auto__,cached_hierarchy__4304__auto__));
})();
cljs.core._add_method.call(null,omchaya.replay.player_drag_event,new cljs.core.Keyword(null,"history-player-grabbed","history-player-grabbed",1379847572),(function (message,initial_mouse_pos,player_state){var vec__23469 = initial_mouse_pos;var mx = cljs.core.nth.call(null,vec__23469,0,null);var my = cljs.core.nth.call(null,vec__23469,1,null);var vec__23470 = cljs.core.get_in.call(null,player_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",4323118675),new cljs.core.Keyword(null,"position","position",1761709211)], null));var px = cljs.core.nth.call(null,vec__23470,0,null);var py = cljs.core.nth.call(null,vec__23470,1,null);var offset = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(mx - px),(my - py)], null);return cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,player_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",4323118675),new cljs.core.Keyword(null,"dragging?","dragging?",709673026)], null),true),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",4323118675),new cljs.core.Keyword(null,"offset","offset",4289091589)], null),offset);
}));
cljs.core._add_method.call(null,omchaya.replay.player_drag_event,new cljs.core.Keyword(null,"history-player-released","history-player-released",3129319138),(function (message,data,player_state){return cljs.core.assoc_in.call(null,player_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",4323118675),new cljs.core.Keyword(null,"dragging?","dragging?",709673026)], null),false);
}));
cljs.core._add_method.call(null,omchaya.replay.player_drag_event,new cljs.core.Keyword(null,"mouse-moved","mouse-moved",753447677),(function (message,mouse_position,player_state){if(cljs.core.truth_(cljs.core.get_in.call(null,player_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",4323118675),new cljs.core.Keyword(null,"dragging?","dragging?",709673026)], null))))
{var vec__23471 = mouse_position;var mx = cljs.core.nth.call(null,vec__23471,0,null);var my = cljs.core.nth.call(null,vec__23471,1,null);var vec__23472 = cljs.core.get_in.call(null,player_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",4323118675),new cljs.core.Keyword(null,"offset","offset",4289091589)], null));var off_x = cljs.core.nth.call(null,vec__23472,0,null);var off_y = cljs.core.nth.call(null,vec__23472,1,null);var vec__23473 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(mx - off_x),(my - off_y)], null);var tnx = cljs.core.nth.call(null,vec__23473,0,null);var tny = cljs.core.nth.call(null,vec__23473,1,null);var min_x = -150;var max_x = (document.body.clientWidth - 50);var min_y = 0;var max_y = (document.body.clientHeight - 50);var new_position = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(((min_x > tnx))?min_x:(((tnx > max_x))?max_x:((new cljs.core.Keyword(null,"else","else",1017020587))?tnx:null))),(((min_y > tny))?min_y:(((tny > max_y))?max_y:((new cljs.core.Keyword(null,"else","else",1017020587))?tny:null)))], null);return cljs.core.assoc_in.call(null,player_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",4323118675),new cljs.core.Keyword(null,"position","position",1761709211)], null),new_position);
} else
{return player_state;
}
}));
omchaya.replay.player_api_event = (function (){var method_table__4301__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__4302__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__4303__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__4304__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__4305__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("player-api-event",(function (message,args,state){return message;
}),new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__4305__auto__,method_table__4301__auto__,prefer_table__4302__auto__,method_cache__4303__auto__,cached_hierarchy__4304__auto__));
})();
cljs.core._add_method.call(null,omchaya.replay.player_api_event,new cljs.core.Keyword(null,"retrieve-replays-succeeded","retrieve-replays-succeeded",2669240161),(function (message,p__23475,player_state){var vec__23476 = p__23475;var _ = cljs.core.nth.call(null,vec__23476,0,null);var response = cljs.core.nth.call(null,vec__23476,1,null);return cljs.core.assoc_in.call(null,player_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"replays","replays",2108401886),new cljs.core.Keyword(null,"replay-list","replay-list",2022921782)], null),cljs.core.map.call(null,(function (p1__23474_SHARP_){return cljs.core.assoc.call(null,p1__23474_SHARP_,new cljs.core.Keyword(null,"history","history",1940838406),cljs.reader.read_string.call(null,new cljs.core.Keyword(null,"history","history",1940838406).cljs$core$IFn$_invoke$arity$1(p1__23474_SHARP_)));
}),new cljs.core.Keyword(null,"replays","replays",2108401886).cljs$core$IFn$_invoke$arity$1(response)));
}));
omchaya.replay.start_player_loop_BANG_ = (function start_player_loop_BANG_(player_state,player_drag_ch,player_control_ch,step_delay){var app_comms = new cljs.core.Keyword(null,"app-comms","app-comms",1410062253).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,player_state));var player_comms = new cljs.core.Keyword(null,"player-comms","player-comms",3952961645).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,player_state));var c__6068__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6069__auto__ = (function (){var switch__5998__auto__ = (function (state_23728){var state_val_23729 = (state_23728[1]);if((state_val_23729 === 1))
{var state_23728__$1 = state_23728;var statearr_23730_23773 = state_23728__$1;(statearr_23730_23773[2] = null);
(statearr_23730_23773[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23729 === 2))
{var inst_23726 = (state_23728[2]);var state_23728__$1 = state_23728;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23728__$1,inst_23726);
} else
{if((state_val_23729 === 3))
{var inst_23626 = (state_23728[2]);var inst_23627 = omchaya.api.kandan.callbacks.send_user_message_BANG_ = omchaya.api.kandan.callbacks.send_user_message_BANG_;var state_23728__$1 = (function (){var statearr_23731 = state_23728;(statearr_23731[7] = inst_23627);
(statearr_23731[8] = inst_23626);
return statearr_23731;
})();cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23728__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23729 === 4))
{var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_23728,null,null,3,2);var inst_23631 = (function (){var send_user_message_BANG_23625 = omchaya.api.kandan.callbacks.send_user_message_BANG_;return ((function (send_user_message_BANG_23625,_,state_val_23729){
return (function (){return omchaya.utils.mprint.call(null,"Stubbed fn called!");
});
;})(send_user_message_BANG_23625,_,state_val_23729))
})();var inst_23632 = omchaya.api.kandan.callbacks.send_user_message_BANG_ = inst_23631;var inst_23633 = omchaya.utils.mprint.call(null,"Stubbed functions for replay, replaying a v1 history");var state_23728__$1 = (function (){var statearr_23732 = state_23728;(statearr_23732[9] = inst_23633);
(statearr_23732[10] = inst_23632);
return statearr_23732;
})();var statearr_23733_23774 = state_23728__$1;(statearr_23733_23774[2] = null);
(statearr_23733_23774[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23729 === 5))
{var inst_23642 = (state_23728[11]);var inst_23642__$1 = cljs.core.async.timeout.call(null,step_delay);var inst_23643 = [player_control_ch,player_drag_ch,omchaya.replay.api_ch,inst_23642__$1];var inst_23644 = (new cljs.core.PersistentVector(null,4,5,cljs.core.PersistentVector.EMPTY_NODE,inst_23643,null));var state_23728__$1 = (function (){var statearr_23734 = state_23728;(statearr_23734[11] = inst_23642__$1);
return statearr_23734;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_23728__$1,7,inst_23644);
} else
{if((state_val_23729 === 6))
{var inst_23724 = (state_23728[2]);var state_23728__$1 = state_23728;var statearr_23735_23775 = state_23728__$1;(statearr_23735_23775[2] = inst_23724);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23728__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23729 === 7))
{var inst_23648 = (state_23728[12]);var inst_23646 = (state_23728[13]);var inst_23646__$1 = (state_23728[2]);var inst_23647 = cljs.core.nth.call(null,inst_23646__$1,0,null);var inst_23648__$1 = cljs.core.nth.call(null,inst_23646__$1,1,null);var inst_23649 = cljs.core._EQ_.call(null,inst_23648__$1,player_control_ch);var state_23728__$1 = (function (){var statearr_23736 = state_23728;(statearr_23736[12] = inst_23648__$1);
(statearr_23736[13] = inst_23646__$1);
(statearr_23736[14] = inst_23647);
return statearr_23736;
})();if(inst_23649)
{var statearr_23737_23776 = state_23728__$1;(statearr_23737_23776[1] = 8);
} else
{var statearr_23738_23777 = state_23728__$1;(statearr_23738_23777[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23729 === 8))
{var inst_23648 = (state_23728[12]);var inst_23642 = (state_23728[11]);var inst_23646 = (state_23728[13]);var inst_23647 = (state_23728[14]);var inst_23652 = cljs.core.nth.call(null,inst_23646,0,null);var inst_23653 = cljs.core.pr_str.call(null,inst_23652);var inst_23654 = omchaya.utils.mprint.call(null,"Player control: ",inst_23653);var inst_23656 = cljs.core.nth.call(null,inst_23652,0,null);var inst_23657 = cljs.core.nth.call(null,inst_23652,1,null);var inst_23658 = (function (){var ch23639 = inst_23648;var v = inst_23652;var vec__23651 = inst_23646;var send_user_message_BANG_23625 = omchaya.api.kandan.callbacks.send_user_message_BANG_;var data = inst_23657;var vec__23641 = inst_23646;var val__6077__auto__ = inst_23647;var G__23636 = player_drag_ch;var G__23635 = player_control_ch;var G__23638 = inst_23642;var G__23637 = omchaya.replay.api_ch;var vec__23655 = inst_23652;var message = inst_23656;var ret23640 = inst_23646;return ((function (ch23639,v,vec__23651,send_user_message_BANG_23625,data,vec__23641,val__6077__auto__,G__23636,G__23635,G__23638,G__23637,vec__23655,message,ret23640,inst_23648,inst_23642,inst_23646,inst_23647,inst_23652,inst_23653,inst_23654,inst_23656,inst_23657,state_val_23729){
return (function (state){return omchaya.replay.player_control_event.call(null,message,data,state);
});
;})(ch23639,v,vec__23651,send_user_message_BANG_23625,data,vec__23641,val__6077__auto__,G__23636,G__23635,G__23638,G__23637,vec__23655,message,ret23640,inst_23648,inst_23642,inst_23646,inst_23647,inst_23652,inst_23653,inst_23654,inst_23656,inst_23657,state_val_23729))
})();var inst_23659 = cljs.core.swap_BANG_.call(null,player_state,inst_23658);var state_23728__$1 = (function (){var statearr_23739 = state_23728;(statearr_23739[15] = inst_23659);
(statearr_23739[16] = inst_23654);
return statearr_23739;
})();var statearr_23740_23778 = state_23728__$1;(statearr_23740_23778[2] = null);
(statearr_23740_23778[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23729 === 9))
{var inst_23648 = (state_23728[12]);var inst_23662 = cljs.core._EQ_.call(null,inst_23648,player_drag_ch);var state_23728__$1 = state_23728;if(inst_23662)
{var statearr_23741_23779 = state_23728__$1;(statearr_23741_23779[1] = 11);
} else
{var statearr_23742_23780 = state_23728__$1;(statearr_23742_23780[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23729 === 10))
{var inst_23722 = (state_23728[2]);var state_23728__$1 = state_23728;var statearr_23743_23781 = state_23728__$1;(statearr_23743_23781[2] = inst_23722);
(statearr_23743_23781[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23729 === 11))
{var inst_23648 = (state_23728[12]);var inst_23642 = (state_23728[11]);var inst_23646 = (state_23728[13]);var inst_23647 = (state_23728[14]);var inst_23665 = cljs.core.nth.call(null,inst_23646,0,null);var inst_23667 = cljs.core.nth.call(null,inst_23665,0,null);var inst_23668 = cljs.core.nth.call(null,inst_23665,1,null);var inst_23669 = (function (){var ch23639 = inst_23648;var v = inst_23665;var vec__23666 = inst_23665;var send_user_message_BANG_23625 = omchaya.api.kandan.callbacks.send_user_message_BANG_;var data = inst_23668;var vec__23641 = inst_23646;var val__6077__auto__ = inst_23647;var G__23636 = player_drag_ch;var G__23635 = player_control_ch;var G__23638 = inst_23642;var G__23637 = omchaya.replay.api_ch;var message = inst_23667;var ret23640 = inst_23646;var vec__23664 = inst_23646;return ((function (ch23639,v,vec__23666,send_user_message_BANG_23625,data,vec__23641,val__6077__auto__,G__23636,G__23635,G__23638,G__23637,message,ret23640,vec__23664,inst_23648,inst_23642,inst_23646,inst_23647,inst_23665,inst_23667,inst_23668,state_val_23729){
return (function (state){return omchaya.replay.player_drag_event.call(null,message,data,state);
});
;})(ch23639,v,vec__23666,send_user_message_BANG_23625,data,vec__23641,val__6077__auto__,G__23636,G__23635,G__23638,G__23637,message,ret23640,vec__23664,inst_23648,inst_23642,inst_23646,inst_23647,inst_23665,inst_23667,inst_23668,state_val_23729))
})();var inst_23670 = cljs.core.swap_BANG_.call(null,player_state,inst_23669);var state_23728__$1 = (function (){var statearr_23744 = state_23728;(statearr_23744[17] = inst_23670);
return statearr_23744;
})();var statearr_23745_23782 = state_23728__$1;(statearr_23745_23782[2] = null);
(statearr_23745_23782[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23729 === 12))
{var inst_23648 = (state_23728[12]);var inst_23673 = cljs.core._EQ_.call(null,inst_23648,omchaya.replay.api_ch);var state_23728__$1 = state_23728;if(inst_23673)
{var statearr_23746_23783 = state_23728__$1;(statearr_23746_23783[1] = 14);
} else
{var statearr_23747_23784 = state_23728__$1;(statearr_23747_23784[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23729 === 13))
{var inst_23720 = (state_23728[2]);var state_23728__$1 = state_23728;var statearr_23748_23785 = state_23728__$1;(statearr_23748_23785[2] = inst_23720);
(statearr_23748_23785[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23729 === 14))
{var inst_23648 = (state_23728[12]);var inst_23642 = (state_23728[11]);var inst_23646 = (state_23728[13]);var inst_23647 = (state_23728[14]);var inst_23676 = cljs.core.nth.call(null,inst_23646,0,null);var inst_23677 = cljs.core.pr_str.call(null,inst_23676);var inst_23678 = omchaya.utils.mprint.call(null,"API control: ",inst_23677);var inst_23680 = cljs.core.nth.call(null,inst_23676,0,null);var inst_23681 = cljs.core.nth.call(null,inst_23676,1,null);var inst_23682 = (function (){var ch23639 = inst_23648;var v = inst_23676;var send_user_message_BANG_23625 = omchaya.api.kandan.callbacks.send_user_message_BANG_;var data = inst_23681;var vec__23679 = inst_23676;var vec__23641 = inst_23646;var val__6077__auto__ = inst_23647;var G__23636 = player_drag_ch;var G__23635 = player_control_ch;var G__23638 = inst_23642;var vec__23675 = inst_23646;var G__23637 = omchaya.replay.api_ch;var message = inst_23680;var ret23640 = inst_23646;return ((function (ch23639,v,send_user_message_BANG_23625,data,vec__23679,vec__23641,val__6077__auto__,G__23636,G__23635,G__23638,vec__23675,G__23637,message,ret23640,inst_23648,inst_23642,inst_23646,inst_23647,inst_23676,inst_23677,inst_23678,inst_23680,inst_23681,state_val_23729){
return (function (state){return omchaya.replay.player_api_event.call(null,message,data,state);
});
;})(ch23639,v,send_user_message_BANG_23625,data,vec__23679,vec__23641,val__6077__auto__,G__23636,G__23635,G__23638,vec__23675,G__23637,message,ret23640,inst_23648,inst_23642,inst_23646,inst_23647,inst_23676,inst_23677,inst_23678,inst_23680,inst_23681,state_val_23729))
})();var inst_23683 = cljs.core.swap_BANG_.call(null,player_state,inst_23682);var state_23728__$1 = (function (){var statearr_23749 = state_23728;(statearr_23749[18] = inst_23678);
(statearr_23749[19] = inst_23683);
return statearr_23749;
})();var statearr_23750_23786 = state_23728__$1;(statearr_23750_23786[2] = null);
(statearr_23750_23786[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23729 === 15))
{var inst_23648 = (state_23728[12]);var inst_23642 = (state_23728[11]);var inst_23686 = cljs.core._EQ_.call(null,inst_23648,inst_23642);var state_23728__$1 = state_23728;if(inst_23686)
{var statearr_23751_23787 = state_23728__$1;(statearr_23751_23787[1] = 17);
} else
{var statearr_23752_23788 = state_23728__$1;(statearr_23752_23788[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23729 === 16))
{var inst_23718 = (state_23728[2]);var state_23728__$1 = state_23728;var statearr_23753_23789 = state_23728__$1;(statearr_23753_23789[2] = inst_23718);
(statearr_23753_23789[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23729 === 17))
{var inst_23688 = cljs.core.deref.call(null,player_state);var inst_23689 = new cljs.core.Keyword(null,"state","state",1123661827).cljs$core$IFn$_invoke$arity$1(inst_23688);var inst_23690 = cljs.core._EQ_.call(null,inst_23689,new cljs.core.Keyword(null,"playing","playing",520340384));var state_23728__$1 = state_23728;if(inst_23690)
{var statearr_23754_23790 = state_23728__$1;(statearr_23754_23790[1] = 20);
} else
{var statearr_23755_23791 = state_23728__$1;(statearr_23755_23791[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23729 === 18))
{var inst_23648 = (state_23728[12]);var inst_23710 = cljs.core._EQ_.call(null,inst_23648,new cljs.core.Keyword(null,"default","default",2558708147));var state_23728__$1 = state_23728;if(inst_23710)
{var statearr_23756_23792 = state_23728__$1;(statearr_23756_23792[1] = 23);
} else
{var statearr_23757_23793 = state_23728__$1;(statearr_23757_23793[1] = 24);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23729 === 19))
{var inst_23716 = (state_23728[2]);var state_23728__$1 = state_23728;var statearr_23758_23794 = state_23728__$1;(statearr_23758_23794[2] = inst_23716);
(statearr_23758_23794[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23729 === 20))
{var inst_23648 = (state_23728[12]);var inst_23642 = (state_23728[11]);var inst_23646 = (state_23728[13]);var inst_23647 = (state_23728[14]);var inst_23692 = cljs.core.deref.call(null,player_state);var inst_23693 = [new cljs.core.Keyword(null,"replays","replays",2108401886),new cljs.core.Keyword(null,"queued-replay","queued-replay",2482676979),new cljs.core.Keyword(null,"history","history",1940838406)];var inst_23694 = (new cljs.core.PersistentVector(null,3,5,cljs.core.PersistentVector.EMPTY_NODE,inst_23693,null));var inst_23695 = cljs.core.get_in.call(null,inst_23692,inst_23694);var inst_23696 = cljs.core.deref.call(null,player_state);var inst_23697 = [new cljs.core.Keyword(null,"replays","replays",2108401886),new cljs.core.Keyword(null,"queued-replay","queued-replay",2482676979),new cljs.core.Keyword(null,"active-step","active-step",4211347621)];var inst_23698 = (new cljs.core.PersistentVector(null,3,5,cljs.core.PersistentVector.EMPTY_NODE,inst_23697,null));var inst_23699 = cljs.core.get_in.call(null,inst_23696,inst_23698);var inst_23700 = cljs.core.nth.call(null,inst_23695,inst_23699);var inst_23701 = omchaya.replay.replay_history_step_BANG_.call(null,app_comms,1,inst_23700,player_control_ch);var inst_23702 = (function (){var ret23640 = inst_23646;var ch23639 = inst_23648;var val__6077__auto__ = inst_23647;var vec__23641 = inst_23646;var G__23638 = inst_23642;var G__23637 = omchaya.replay.api_ch;var G__23636 = player_drag_ch;var G__23635 = player_control_ch;var send_user_message_BANG_23625 = omchaya.api.kandan.callbacks.send_user_message_BANG_;return ((function (ret23640,ch23639,val__6077__auto__,vec__23641,G__23638,G__23637,G__23636,G__23635,send_user_message_BANG_23625,inst_23648,inst_23642,inst_23646,inst_23647,inst_23692,inst_23693,inst_23694,inst_23695,inst_23696,inst_23697,inst_23698,inst_23699,inst_23700,inst_23701,state_val_23729){
return (function (s){if(cljs.core._EQ_.call(null,(cljs.core.count.call(null,cljs.core.get_in.call(null,s,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"replays","replays",2108401886),new cljs.core.Keyword(null,"queued-replay","queued-replay",2482676979),new cljs.core.Keyword(null,"history","history",1940838406)], null))) - 1),cljs.core.get_in.call(null,s,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"replays","replays",2108401886),new cljs.core.Keyword(null,"queued-replay","queued-replay",2482676979),new cljs.core.Keyword(null,"active-step","active-step",4211347621)], null))))
{return cljs.core.assoc.call(null,cljs.core.assoc_in.call(null,s,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"replays","replays",2108401886),new cljs.core.Keyword(null,"queued-replay","queued-replay",2482676979),new cljs.core.Keyword(null,"active-step","active-step",4211347621)], null),0),new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.Keyword(null,"stopped","stopped",3424552255));
} else
{return cljs.core.update_in.call(null,s,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"replays","replays",2108401886),new cljs.core.Keyword(null,"queued-replay","queued-replay",2482676979),new cljs.core.Keyword(null,"active-step","active-step",4211347621)], null),cljs.core.inc);
}
});
;})(ret23640,ch23639,val__6077__auto__,vec__23641,G__23638,G__23637,G__23636,G__23635,send_user_message_BANG_23625,inst_23648,inst_23642,inst_23646,inst_23647,inst_23692,inst_23693,inst_23694,inst_23695,inst_23696,inst_23697,inst_23698,inst_23699,inst_23700,inst_23701,state_val_23729))
})();var inst_23703 = cljs.core.swap_BANG_.call(null,player_state,inst_23702);var state_23728__$1 = (function (){var statearr_23759 = state_23728;(statearr_23759[20] = inst_23701);
(statearr_23759[21] = inst_23703);
return statearr_23759;
})();var statearr_23760_23795 = state_23728__$1;(statearr_23760_23795[2] = null);
(statearr_23760_23795[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23729 === 21))
{var state_23728__$1 = state_23728;var statearr_23761_23796 = state_23728__$1;(statearr_23761_23796[2] = null);
(statearr_23761_23796[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23729 === 22))
{var inst_23708 = (state_23728[2]);var state_23728__$1 = state_23728;var statearr_23762_23797 = state_23728__$1;(statearr_23762_23797[2] = inst_23708);
(statearr_23762_23797[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23729 === 23))
{var inst_23647 = (state_23728[14]);var state_23728__$1 = state_23728;var statearr_23763_23798 = state_23728__$1;(statearr_23763_23798[2] = inst_23647);
(statearr_23763_23798[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23729 === 24))
{var state_23728__$1 = state_23728;var statearr_23764_23799 = state_23728__$1;(statearr_23764_23799[2] = null);
(statearr_23764_23799[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23729 === 25))
{var inst_23714 = (state_23728[2]);var state_23728__$1 = state_23728;var statearr_23765_23800 = state_23728__$1;(statearr_23765_23800[2] = inst_23714);
(statearr_23765_23800[1] = 19);
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
var state_machine__5999__auto____0 = (function (){var statearr_23769 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_23769[0] = state_machine__5999__auto__);
(statearr_23769[1] = 1);
return statearr_23769;
});
var state_machine__5999__auto____1 = (function (state_23728){while(true){
var ret_value__6000__auto__ = (function (){try{while(true){
var result__6001__auto__ = switch__5998__auto__.call(null,state_23728);if(cljs.core.keyword_identical_QMARK_.call(null,result__6001__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6001__auto__;
}
break;
}
}catch (e23770){if((e23770 instanceof Object))
{var ex__6002__auto__ = e23770;var statearr_23771_23801 = state_23728;(statearr_23771_23801[5] = ex__6002__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23728);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e23770;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6000__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__23802 = state_23728;
state_23728 = G__23802;
continue;
}
} else
{return ret_value__6000__auto__;
}
break;
}
});
state_machine__5999__auto__ = function(state_23728){
switch(arguments.length){
case 0:
return state_machine__5999__auto____0.call(this);
case 1:
return state_machine__5999__auto____1.call(this,state_23728);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5999__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5999__auto____0;
state_machine__5999__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5999__auto____1;
return state_machine__5999__auto__;
})()
;})(switch__5998__auto__))
})();var state__6070__auto__ = (function (){var statearr_23772 = f__6069__auto__.call(null);(statearr_23772[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6068__auto__);
return statearr_23772;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6070__auto__);
}));
return c__6068__auto__;
});
omchaya.replay.install_player_BANG_ = (function install_player_BANG_(root_el,api_key,initial_state){omchaya.replay.start_player_loop_BANG_.call(null,initial_state,omchaya.replay.player_drag_ch,omchaya.replay.player_control_ch,100);
return om.core.root.call(null,omchaya.components.history_player.player,initial_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",4427965699),root_el], null));
});
