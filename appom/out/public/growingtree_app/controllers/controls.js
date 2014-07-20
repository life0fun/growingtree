// Compiled by ClojureScript 0.0-2173
goog.provide('growingtree_app.controllers.controls');
goog.require('cljs.core');
goog.require('growingtree_app.utils');
goog.require('cljs.core.async');
goog.require('growingtree_app.utils');
goog.require('growingtree_app.utils');
goog.require('growingtree_app.mock_data');
goog.require('growingtree_app.mock_data');
goog.require('cljs.reader');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
cljs.core.enable_console_print_BANG_.call(null);
growingtree_app.controllers.controls.control_event = (function (){var method_table__4301__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__4302__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__4303__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__4304__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__4305__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("control-event",(function (target,msg_type,msg_data,state){return msg_type;
}),new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__4305__auto__,method_table__4301__auto__,prefer_table__4302__auto__,method_cache__4303__auto__,cached_hierarchy__4304__auto__));
})();
cljs.core._add_method.call(null,growingtree_app.controllers.controls.control_event,new cljs.core.Keyword(null,"default","default",2558708147),(function (target,msg_type,msg_data,state){console.log("default control-event is conj nav-path ",cljs.core.pr_str.call(null,msg_type,msg_data));
return cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nav-path","nav-path",3061255681)], null),cljs.core.conj,msg_data);
}));
cljs.core._add_method.call(null,growingtree_app.controllers.controls.control_event,new cljs.core.Keyword(null,"all-things","all-things",1148589667),(function (target,msg_type,msg_data,state){var last_nav_type = cljs.core.get_in.call(null,cljs.core.last.call(null,cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nav-path","nav-path",3061255681)], null))),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"body","body",1016933652),1,2], null));var cur_nav_type = cljs.core.get_in.call(null,msg_data,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"body","body",1016933652),1,2], null));console.log("all-things event ",cljs.core.pr_str.call(null,cur_nav_type,last_nav_type,msg_data));
var G__11423 = state;var G__11423__$1 = ((new cljs.core.Keyword(null,"else","else",1017020587))?growingtree_app.controllers.controls.update_navbar_selected.call(null,G__11423,last_nav_type,cur_nav_type):G__11423);var G__11423__$2 = ((new cljs.core.Keyword(null,"else","else",1017020587))?cljs.core.update_in.call(null,G__11423__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nav-path","nav-path",3061255681)], null),cljs.core.conj,msg_data):G__11423__$1);return G__11423__$2;
}));
cljs.core._add_method.call(null,growingtree_app.controllers.controls.control_event,new cljs.core.Keyword(null,"filter-things","filter-things",3353236652),(function (target,msg_type,msg_data,state){var last_nav_type = cljs.core.get_in.call(null,cljs.core.last.call(null,cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nav-path","nav-path",3061255681)], null))),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"body","body",1016933652),1,2], null));var cur_nav_type = cljs.core.get_in.call(null,msg_data,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"body","body",1016933652),1,2], null));console.log("filter-things event ",cljs.core.pr_str.call(null,cur_nav_type,last_nav_type,msg_data));
var G__11424 = state;var G__11424__$1 = ((new cljs.core.Keyword(null,"else","else",1017020587))?growingtree_app.controllers.controls.update_navbar_selected.call(null,G__11424,last_nav_type,cur_nav_type):G__11424);var G__11424__$2 = ((new cljs.core.Keyword(null,"else","else",1017020587))?cljs.core.update_in.call(null,G__11424__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nav-path","nav-path",3061255681)], null),cljs.core.conj,msg_data):G__11424__$1);return G__11424__$2;
}));
cljs.core._add_method.call(null,growingtree_app.controllers.controls.control_event,new cljs.core.Keyword(null,"add-thing","add-thing",4221519924),(function (target,msg_type,msg_data,state){console.log("add-thing event ",cljs.core.pr_str.call(null,msg_data));
return cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nav-path","nav-path",3061255681)], null),cljs.core.conj,msg_data);
}));
cljs.core._add_method.call(null,growingtree_app.controllers.controls.control_event,new cljs.core.Keyword(null,"api-key-updated","api-key-updated",756464524),(function (target,msg_type,api_key,state){return cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"users","users",1125482874),new cljs.core.Keyword(null,"current-user-email","current-user-email",4091392864).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword(null,"api-key","api-key",4507296670)], null),api_key);
}));
cljs.core._add_method.call(null,growingtree_app.controllers.controls.control_event,new cljs.core.Keyword(null,"current-user-mentioned","current-user-mentioned",1125795533),(function (target,msg_type,p__11425,state){var vec__11426 = p__11425;var activity = cljs.core.nth.call(null,vec__11426,0,null);var url = cljs.core.nth.call(null,vec__11426,1,null);return cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"channels","channels",2446530370),new cljs.core.Keyword(null,"channel-id","channel-id",3378014615).cljs$core$IFn$_invoke$arity$1(activity),new cljs.core.Keyword(null,"sfx","sfx",1014018039),new cljs.core.Keyword(null,"source-url","source-url",4196274223)], null),url);
}));
cljs.core._add_method.call(null,growingtree_app.controllers.controls.control_event,new cljs.core.Keyword(null,"user-menu-toggled","user-menu-toggled",567658326),(function (target,msg_type,msg_data,state){return cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",2448535445),new cljs.core.Keyword(null,"menus","menus",1117686374),new cljs.core.Keyword(null,"user-menu","user-menu",1307043219),new cljs.core.Keyword(null,"open","open",1017321916)], null),cljs.core.not);
}));
cljs.core._add_method.call(null,growingtree_app.controllers.controls.control_event,new cljs.core.Keyword(null,"search-form-focused","search-form-focused",1124244197),(function (target,msg_type,msg_data,state){return cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",2448535445),new cljs.core.Keyword(null,"forms","forms",1111523233),new cljs.core.Keyword(null,"search","search",4402534682),new cljs.core.Keyword(null,"focused","focused",4617830121)], null),true);
}));
cljs.core._add_method.call(null,growingtree_app.controllers.controls.control_event,new cljs.core.Keyword(null,"search-form-blurred","search-form-blurred",1799842360),(function (target,msg_type,msg_data,state){return cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",2448535445),new cljs.core.Keyword(null,"forms","forms",1111523233),new cljs.core.Keyword(null,"search","search",4402534682),new cljs.core.Keyword(null,"focused","focused",4617830121)], null),false);
}));
cljs.core._add_method.call(null,growingtree_app.controllers.controls.control_event,new cljs.core.Keyword(null,"search-form-updated","search-form-updated",1580855337),(function (target,msg_type,new_value,state){return cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",2448535445),new cljs.core.Keyword(null,"forms","forms",1111523233),new cljs.core.Keyword(null,"search","search",4402534682),new cljs.core.Keyword(null,"value","value",1125876963)], null),new_value);
}));
cljs.core._add_method.call(null,growingtree_app.controllers.controls.control_event,new cljs.core.Keyword(null,"user-msg-type-focused","user-msg-type-focused",1914918884),(function (target,msg_type,msg_data,state){return cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",2448535445),new cljs.core.Keyword(null,"forms","forms",1111523233),new cljs.core.Keyword(null,"user-msg-type","user-msg-type",4208275770),new cljs.core.Keyword(null,"focused","focused",4617830121)], null),true);
}));
cljs.core._add_method.call(null,growingtree_app.controllers.controls.control_event,new cljs.core.Keyword(null,"user-msg-type-blurred","user-msg-type-blurred",2590517047),(function (target,msg_type,msg_data,state){return cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",2448535445),new cljs.core.Keyword(null,"forms","forms",1111523233),new cljs.core.Keyword(null,"user-msg-type","user-msg-type",4208275770),new cljs.core.Keyword(null,"focused","focused",4617830121)], null),false);
}));
cljs.core._add_method.call(null,growingtree_app.controllers.controls.control_event,new cljs.core.Keyword(null,"user-msg-type-updated","user-msg-type-updated",2371530024),(function (target,msg_type,msg_data,state){return cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",2448535445),new cljs.core.Keyword(null,"forms","forms",1111523233),new cljs.core.Keyword(null,"user-msg-type","user-msg-type",4208275770),new cljs.core.Keyword(null,"value","value",1125876963)], null),msg_data);
}));
cljs.core._add_method.call(null,growingtree_app.controllers.controls.control_event,new cljs.core.Keyword(null,"audio-player-started","audio-player-started",1807969246),(function (target,msg_type,channel_id,state){return cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"channels","channels",2446530370),channel_id,new cljs.core.Keyword(null,"player","player",4323118675),new cljs.core.Keyword(null,"state","state",1123661827)], null),new cljs.core.Keyword(null,"playing","playing",520340384));
}));
cljs.core._add_method.call(null,growingtree_app.controllers.controls.control_event,new cljs.core.Keyword(null,"audio-player-stopped","audio-player-stopped",1820835114),(function (target,msg_type,channel_id,state){return cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"channels","channels",2446530370),channel_id,new cljs.core.Keyword(null,"player","player",4323118675),new cljs.core.Keyword(null,"state","state",1123661827)], null),new cljs.core.Keyword(null,"stopped","stopped",3424552255));
}));
cljs.core._add_method.call(null,growingtree_app.controllers.controls.control_event,new cljs.core.Keyword(null,"audio-player-muted","audio-player-muted",4718730120),(function (target,msg_type,msg_data,state){return cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"audio","audio",1107070792),new cljs.core.Keyword(null,"muted","muted",1118168285)], null),true);
}));
cljs.core._add_method.call(null,growingtree_app.controllers.controls.control_event,new cljs.core.Keyword(null,"audio-player-unmuted","audio-player-unmuted",3422373327),(function (target,msg_type,msg_data,state){return cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"audio","audio",1107070792),new cljs.core.Keyword(null,"muted","muted",1118168285)], null),false);
}));
cljs.core._add_method.call(null,growingtree_app.controllers.controls.control_event,new cljs.core.Keyword(null,"audio-player-unmuted","audio-player-unmuted",3422373327),(function (target,msg_type,msg_data,state){return cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"audio","audio",1107070792),new cljs.core.Keyword(null,"muted","muted",1118168285)], null),false);
}));
cljs.core._add_method.call(null,growingtree_app.controllers.controls.control_event,new cljs.core.Keyword(null,"audio-player-source-updated","audio-player-source-updated",2679762480),(function (target,msg_type,p__11427,state){var vec__11428 = p__11427;var src = cljs.core.nth.call(null,vec__11428,0,null);var channel_id = cljs.core.nth.call(null,vec__11428,1,null);return cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"channels","channels",2446530370),channel_id,new cljs.core.Keyword(null,"player","player",4323118675),new cljs.core.Keyword(null,"source-url","source-url",4196274223)], null),src);
}));
cljs.core._add_method.call(null,growingtree_app.controllers.controls.control_event,new cljs.core.Keyword(null,"audio-player-unmuted","audio-player-unmuted",3422373327),(function (target,msg_type,msg_data,state){return cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"audio","audio",1107070792),new cljs.core.Keyword(null,"muted","muted",1118168285)], null),false);
}));
cljs.core._add_method.call(null,growingtree_app.controllers.controls.control_event,new cljs.core.Keyword(null,"playlist-entry-queued","playlist-entry-queued",1714422459),(function (target,msg_type,msg_data,state){var vec__11429 = msg_data;var channel_id = cljs.core.nth.call(null,vec__11429,0,null);var url = cljs.core.nth.call(null,vec__11429,1,null);return cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"channels","channels",2446530370),channel_id,new cljs.core.Keyword(null,"player","player",4323118675),new cljs.core.Keyword(null,"playlist","playlist",2893378884)], null),(function (playlist){return cljs.core.conj.call(null,playlist,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"order","order",1119910592),(cljs.core.count.call(null,playlist) + 1),new cljs.core.Keyword(null,"src","src",1014018390),url], null));
}));
}));
cljs.core._add_method.call(null,growingtree_app.controllers.controls.control_event,new cljs.core.Keyword(null,"playlist-entry-played","playlist-entry-played",1677366299),(function (target,msg_type,p__11430,state){var vec__11431 = p__11430;var order = cljs.core.nth.call(null,vec__11431,0,null);var channel_id = cljs.core.nth.call(null,vec__11431,1,null);return cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"channels","channels",2446530370),channel_id,new cljs.core.Keyword(null,"player","player",4323118675),new cljs.core.Keyword(null,"playing-order","playing-order",3298952289)], null),order),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"channels","channels",2446530370),channel_id,new cljs.core.Keyword(null,"player","player",4323118675),new cljs.core.Keyword(null,"loading","loading",1350554798)], null),true);
}));
cljs.core._add_method.call(null,growingtree_app.controllers.controls.control_event,new cljs.core.Keyword(null,"user-msg-type-submitted","user-msg-type-submitted",2320097960),(function (target,msg_type,msg_data,state){if(cljs.core.empty_QMARK_.call(null,cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",2448535445),new cljs.core.Keyword(null,"forms","forms",1111523233),new cljs.core.Keyword(null,"user-msg-type","user-msg-type",4208275770),new cljs.core.Keyword(null,"value","value",1125876963)], null))))
{return state;
} else
{var content = cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",2448535445),new cljs.core.Keyword(null,"forms","forms",1111523233),new cljs.core.Keyword(null,"user-msg-type","user-msg-type",4208275770),new cljs.core.Keyword(null,"value","value",1125876963)], null));var user = cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"users","users",1125482874),new cljs.core.Keyword(null,"current-user-email","current-user-email",4091392864).cljs$core$IFn$_invoke$arity$1(state)], null));var channel = cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"channels","channels",2446530370),new cljs.core.Keyword(null,"selected-channel","selected-channel",2473753411).cljs$core$IFn$_invoke$arity$1(state)], null));var activity = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"content","content",1965434859),content,new cljs.core.Keyword(null,"author","author",3902543101),new cljs.core.Keyword(null,"email","email",1110523662).cljs$core$IFn$_invoke$arity$1(user),new cljs.core.Keyword(null,"created_at","created_at",2383584348),(new Date())], null);return cljs.core.update_in.call(null,cljs.core.update_in.call(null,cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",2448535445),new cljs.core.Keyword(null,"forms","forms",1111523233),new cljs.core.Keyword(null,"user-msg-type","user-msg-type",4208275770),new cljs.core.Keyword(null,"value","value",1125876963)], null),null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"channels","channels",2446530370),new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(channel),new cljs.core.Keyword(null,"activities","activities",3062509407)], null),cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.sort_by,new cljs.core.Keyword(null,"created_at","created_at",2383584348)),cljs.core.conj),activity),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"channels","channels",2446530370),new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(channel),new cljs.core.Keyword(null,"activities","activities",3062509407)], null),cljs.core.vec);
}
}));
cljs.core._add_method.call(null,growingtree_app.controllers.controls.control_event,new cljs.core.Keyword(null,"settings-opened","settings-opened",2980449477),(function (target,msg_type,msg_data,state){return cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",2448535445),new cljs.core.Keyword(null,"menus","menus",1117686374),new cljs.core.Keyword(null,"user-menu","user-menu",1307043219),new cljs.core.Keyword(null,"open","open",1017321916)], null),false);
}));
cljs.core._add_method.call(null,growingtree_app.controllers.controls.control_event,new cljs.core.Keyword(null,"help-opened","help-opened",703585255),(function (target,msg_type,msg_data,state){return cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",2448535445),new cljs.core.Keyword(null,"menus","menus",1117686374),new cljs.core.Keyword(null,"user-menu","user-menu",1307043219),new cljs.core.Keyword(null,"open","open",1017321916)], null),false);
}));
cljs.core._add_method.call(null,growingtree_app.controllers.controls.control_event,new cljs.core.Keyword(null,"about-opened","about-opened",4155398683),(function (target,msg_type,msg_data,state){return cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",2448535445),new cljs.core.Keyword(null,"menus","menus",1117686374),new cljs.core.Keyword(null,"user-menu","user-menu",1307043219),new cljs.core.Keyword(null,"open","open",1017321916)], null),false);
}));
cljs.core._add_method.call(null,growingtree_app.controllers.controls.control_event,new cljs.core.Keyword(null,"user-logged-out","user-logged-out",2519482167),(function (target,msg_type,msg_data,state){return cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",2448535445),new cljs.core.Keyword(null,"menus","menus",1117686374),new cljs.core.Keyword(null,"user-menu","user-menu",1307043219),new cljs.core.Keyword(null,"open","open",1017321916)], null),false),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-user-email","current-user-email",4091392864)], null),null);
}));
cljs.core._add_method.call(null,growingtree_app.controllers.controls.control_event,new cljs.core.Keyword(null,"audio-source-loaded","audio-source-loaded",1601208242),(function (target,msg_type,channel_id,state){return cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"channels","channels",2446530370),channel_id,new cljs.core.Keyword(null,"player","player",4323118675),new cljs.core.Keyword(null,"loading","loading",1350554798)], null),false);
}));
cljs.core._add_method.call(null,growingtree_app.controllers.controls.control_event,new cljs.core.Keyword(null,"channel-destroyed","channel-destroyed",3892625729),(function (target,msg_type,channel_id,state){return cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"channels","channels",2446530370),channel_id,new cljs.core.Keyword(null,"loading","loading",1350554798)], null),true);
}));
cljs.core._add_method.call(null,growingtree_app.controllers.controls.control_event,new cljs.core.Keyword(null,"right-sidebar-toggled","right-sidebar-toggled",1915715552),(function (target,msg_type,channel_id,state){return cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",2448535445),new cljs.core.Keyword(null,"sidebar","sidebar",3099131598),new cljs.core.Keyword(null,"right","right",1122416014),new cljs.core.Keyword(null,"open","open",1017321916)], null),cljs.core.not);
}));
cljs.core._add_method.call(null,growingtree_app.controllers.controls.control_event,new cljs.core.Keyword(null,"left-sidebar-toggled","left-sidebar-toggled",1753163723),(function (target,msg_type,channel_id,state){return cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",2448535445),new cljs.core.Keyword(null,"sidebar","sidebar",3099131598),new cljs.core.Keyword(null,"left","left",1017222009),new cljs.core.Keyword(null,"open","open",1017321916)], null),cljs.core.not);
}));
growingtree_app.controllers.controls.window_drag_event = (function (){var method_table__4301__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__4302__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__4303__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__4304__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__4305__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("window-drag-event",(function (msg_type,msg_data,state){return msg_type;
}),new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__4305__auto__,method_table__4301__auto__,prefer_table__4302__auto__,method_cache__4303__auto__,cached_hierarchy__4304__auto__));
})();
cljs.core._add_method.call(null,growingtree_app.controllers.controls.window_drag_event,new cljs.core.Keyword(null,"grabbed","grabbed",1293824551),(function (msg_type,initial_mouse_pos,window_state){var vec__11432 = initial_mouse_pos;var mx = cljs.core.nth.call(null,vec__11432,0,null);var my = cljs.core.nth.call(null,vec__11432,1,null);var vec__11433 = new cljs.core.Keyword(null,"position","position",1761709211).cljs$core$IFn$_invoke$arity$1(window_state);var px = cljs.core.nth.call(null,vec__11433,0,null);var py = cljs.core.nth.call(null,vec__11433,1,null);var offset = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(mx - px),(my - py)], null);return cljs.core.assoc.call(null,window_state,new cljs.core.Keyword(null,"dragging?","dragging?",709673026),true,new cljs.core.Keyword(null,"offset","offset",4289091589),offset);
}));
cljs.core._add_method.call(null,growingtree_app.controllers.controls.window_drag_event,new cljs.core.Keyword(null,"released","released",4757572783),(function (msg_type,data,window_state){return cljs.core.assoc.call(null,window_state,new cljs.core.Keyword(null,"dragging?","dragging?",709673026),false);
}));
cljs.core._add_method.call(null,growingtree_app.controllers.controls.window_drag_event,new cljs.core.Keyword(null,"mouse-moved","mouse-moved",753447677),(function (msg_type,mouse_position,window_state){if(cljs.core.truth_(new cljs.core.Keyword(null,"dragging?","dragging?",709673026).cljs$core$IFn$_invoke$arity$1(window_state)))
{var vec__11434 = mouse_position;var mx = cljs.core.nth.call(null,vec__11434,0,null);var my = cljs.core.nth.call(null,vec__11434,1,null);var vec__11435 = new cljs.core.Keyword(null,"offset","offset",4289091589).cljs$core$IFn$_invoke$arity$1(window_state);var off_x = cljs.core.nth.call(null,vec__11435,0,null);var off_y = cljs.core.nth.call(null,vec__11435,1,null);var vec__11436 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(mx - off_x),(my - off_y)], null);var tnx = cljs.core.nth.call(null,vec__11436,0,null);var tny = cljs.core.nth.call(null,vec__11436,1,null);var min_x = -150;var max_x = (document.body.clientWidth - 50);var min_y = 0;var max_y = (document.body.clientHeight - 50);var new_position = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(((min_x > tnx))?min_x:(((tnx > max_x))?max_x:((new cljs.core.Keyword(null,"else","else",1017020587))?tnx:null))),(((min_y > tny))?min_y:(((tny > max_y))?max_y:((new cljs.core.Keyword(null,"else","else",1017020587))?tny:null)))], null);return cljs.core.assoc.call(null,window_state,new cljs.core.Keyword(null,"position","position",1761709211),new_position);
} else
{return window_state;
}
}));
cljs.core._add_method.call(null,growingtree_app.controllers.controls.control_event,new cljs.core.Keyword(null,"draggable","draggable",709423359),(function (target,msg_type,p__11438,state){var vec__11439 = p__11438;var sub_msg_type = cljs.core.nth.call(null,vec__11439,0,null);var map__11440 = cljs.core.nth.call(null,vec__11439,1,null);var map__11440__$1 = ((cljs.core.seq_QMARK_.call(null,map__11440))?cljs.core.apply.call(null,cljs.core.hash_map,map__11440):map__11440);var msg_data = map__11440__$1;var name = cljs.core.get.call(null,map__11440__$1,new cljs.core.Keyword(null,"name","name",1017277949));return cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"windows","windows",2363397621),name], null),(function (p1__11437_SHARP_){return growingtree_app.controllers.controls.window_drag_event.call(null,sub_msg_type,new cljs.core.Keyword(null,"position","position",1761709211).cljs$core$IFn$_invoke$arity$1(msg_data),p1__11437_SHARP_);
}));
}));
cljs.core._add_method.call(null,growingtree_app.controllers.controls.control_event,new cljs.core.Keyword(null,"toggle-inspector-key-pressed","toggle-inspector-key-pressed",2594666135),(function (target,msg_type,msg_data,state){return cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"windows","windows",2363397621),new cljs.core.Keyword(null,"window-inspector","window-inspector",2735849676),new cljs.core.Keyword(null,"open","open",1017321916)], null),cljs.core.not);
}));
cljs.core._add_method.call(null,growingtree_app.controllers.controls.control_event,new cljs.core.Keyword(null,"inspector-path-updated","inspector-path-updated",848746907),(function (target,msg_type,path,state){return cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",2448535445),new cljs.core.Keyword(null,"inspector","inspector",931868265),new cljs.core.Keyword(null,"path","path",1017337751)], null),path);
}));
cljs.core._add_method.call(null,growingtree_app.controllers.controls.control_event,new cljs.core.Keyword(null,"state-restored","state-restored",2236662980),(function (target,msg_type,path,state){var str_data = localStorage.getItem("growingtree-app-state");if(cljs.core.seq.call(null,str_data))
{return cljs.core.assoc.call(null,cljs.reader.read_string.call(null,str_data),new cljs.core.Keyword(null,"comms","comms",1108747865),new cljs.core.Keyword(null,"comms","comms",1108747865).cljs$core$IFn$_invoke$arity$1(state));
} else
{return state;
}
}));
growingtree_app.controllers.controls.update_navbar_selected = (function update_navbar_selected(state,last_nav_type,cur_nav_type){var last_nav_type__$1 = cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([last_nav_type], true),growingtree_app.mock_data.nav_types);var cur_nav_type__$1 = cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([cur_nav_type], true),growingtree_app.mock_data.nav_types);console.log("update-navbar-selected ",cljs.core.pr_str.call(null,cur_nav_type__$1,last_nav_type__$1));
var G__11442 = state;var G__11442__$1 = (cljs.core.truth_(last_nav_type__$1)?cljs.core.assoc_in.call(null,G__11442,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"things","things",4434169015),last_nav_type__$1,new cljs.core.Keyword(null,"selected","selected",2205476365)], null),false):G__11442);var G__11442__$2 = (cljs.core.truth_(cur_nav_type__$1)?cljs.core.assoc_in.call(null,G__11442__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"things","things",4434169015),cur_nav_type__$1,new cljs.core.Keyword(null,"selected","selected",2205476365)], null),true):G__11442__$1);return G__11442__$2;
});

//# sourceMappingURL=controls.js.map