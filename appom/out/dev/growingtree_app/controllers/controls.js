// Compiled by ClojureScript 0.0-2173
goog.provide('growingtree_app.controllers.controls');
goog.require('cljs.core');
goog.require('growingtree_app.utils');
goog.require('cljs.core.async');
goog.require('growingtree_app.utils');
goog.require('growingtree_app.utils');
goog.require('cljs.reader');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
growingtree_app.controllers.controls.control_event = (function (){var method_table__4301__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__4302__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__4303__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__4304__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__4305__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("control-event",(function (target,message,args,state){return message;
}),new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__4305__auto__,method_table__4301__auto__,prefer_table__4302__auto__,method_cache__4303__auto__,cached_hierarchy__4304__auto__));
})();
cljs.core._add_method.call(null,growingtree_app.controllers.controls.control_event,new cljs.core.Keyword(null,"default","default",2558708147),(function (target,message,args,state){growingtree_app.utils.mprint.call(null,"Unknown controls: ",cljs.core.pr_str.call(null,message));
return state;
}));
cljs.core._add_method.call(null,growingtree_app.controllers.controls.control_event,new cljs.core.Keyword(null,"api-key-updated","api-key-updated",756464524),(function (target,message,api_key,state){return cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"users","users",1125482874),new cljs.core.Keyword(null,"current-user-email","current-user-email",4091392864).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword(null,"api-key","api-key",4507296670)], null),api_key);
}));
cljs.core._add_method.call(null,growingtree_app.controllers.controls.control_event,new cljs.core.Keyword(null,"current-user-mentioned","current-user-mentioned",1125795533),(function (target,message,p__11643,state){var vec__11644 = p__11643;var activity = cljs.core.nth.call(null,vec__11644,0,null);var url = cljs.core.nth.call(null,vec__11644,1,null);return cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"channels","channels",2446530370),new cljs.core.Keyword(null,"channel-id","channel-id",3378014615).cljs$core$IFn$_invoke$arity$1(activity),new cljs.core.Keyword(null,"sfx","sfx",1014018039),new cljs.core.Keyword(null,"source-url","source-url",4196274223)], null),url);
}));
cljs.core._add_method.call(null,growingtree_app.controllers.controls.control_event,new cljs.core.Keyword(null,"user-menu-toggled","user-menu-toggled",567658326),(function (target,message,args,state){return cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",2448535445),new cljs.core.Keyword(null,"menus","menus",1117686374),new cljs.core.Keyword(null,"user-menu","user-menu",1307043219),new cljs.core.Keyword(null,"open","open",1017321916)], null),cljs.core.not);
}));
cljs.core._add_method.call(null,growingtree_app.controllers.controls.control_event,new cljs.core.Keyword(null,"tab-selected","tab-selected",4274020677),(function (target,message,args,state){var old_channel = cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"channels","channels",2446530370),new cljs.core.Keyword(null,"selected-channel","selected-channel",2473753411).cljs$core$IFn$_invoke$arity$1(state)], null));var new_channel = cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"channels","channels",2446530370),args], null));return cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"selected-channel","selected-channel",2473753411),args),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"channels","channels",2446530370),new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(old_channel),new cljs.core.Keyword(null,"selected","selected",2205476365)], null),false),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"channels","channels",2446530370),args,new cljs.core.Keyword(null,"selected","selected",2205476365)], null),true);
}));
cljs.core._add_method.call(null,growingtree_app.controllers.controls.control_event,new cljs.core.Keyword(null,"search-form-focused","search-form-focused",1124244197),(function (target,message,args,state){return cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",2448535445),new cljs.core.Keyword(null,"forms","forms",1111523233),new cljs.core.Keyword(null,"search","search",4402534682),new cljs.core.Keyword(null,"focused","focused",4617830121)], null),true);
}));
cljs.core._add_method.call(null,growingtree_app.controllers.controls.control_event,new cljs.core.Keyword(null,"search-form-blurred","search-form-blurred",1799842360),(function (target,message,args,state){return cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",2448535445),new cljs.core.Keyword(null,"forms","forms",1111523233),new cljs.core.Keyword(null,"search","search",4402534682),new cljs.core.Keyword(null,"focused","focused",4617830121)], null),false);
}));
cljs.core._add_method.call(null,growingtree_app.controllers.controls.control_event,new cljs.core.Keyword(null,"search-form-updated","search-form-updated",1580855337),(function (target,message,new_value,state){return cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",2448535445),new cljs.core.Keyword(null,"forms","forms",1111523233),new cljs.core.Keyword(null,"search","search",4402534682),new cljs.core.Keyword(null,"value","value",1125876963)], null),new_value);
}));
cljs.core._add_method.call(null,growingtree_app.controllers.controls.control_event,new cljs.core.Keyword(null,"user-message-focused","user-message-focused",3790954785),(function (target,message,args,state){return cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",2448535445),new cljs.core.Keyword(null,"forms","forms",1111523233),new cljs.core.Keyword(null,"user-message","user-message",2253309815),new cljs.core.Keyword(null,"focused","focused",4617830121)], null),true);
}));
cljs.core._add_method.call(null,growingtree_app.controllers.controls.control_event,new cljs.core.Keyword(null,"user-message-blurred","user-message-blurred",4466552948),(function (target,message,args,state){return cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",2448535445),new cljs.core.Keyword(null,"forms","forms",1111523233),new cljs.core.Keyword(null,"user-message","user-message",2253309815),new cljs.core.Keyword(null,"focused","focused",4617830121)], null),false);
}));
cljs.core._add_method.call(null,growingtree_app.controllers.controls.control_event,new cljs.core.Keyword(null,"user-message-updated","user-message-updated",4247565925),(function (target,message,args,state){return cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",2448535445),new cljs.core.Keyword(null,"forms","forms",1111523233),new cljs.core.Keyword(null,"user-message","user-message",2253309815),new cljs.core.Keyword(null,"value","value",1125876963)], null),args);
}));
cljs.core._add_method.call(null,growingtree_app.controllers.controls.control_event,new cljs.core.Keyword(null,"audio-player-started","audio-player-started",1807969246),(function (target,message,channel_id,state){return cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"channels","channels",2446530370),channel_id,new cljs.core.Keyword(null,"player","player",4323118675),new cljs.core.Keyword(null,"state","state",1123661827)], null),new cljs.core.Keyword(null,"playing","playing",520340384));
}));
cljs.core._add_method.call(null,growingtree_app.controllers.controls.control_event,new cljs.core.Keyword(null,"audio-player-stopped","audio-player-stopped",1820835114),(function (target,message,channel_id,state){return cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"channels","channels",2446530370),channel_id,new cljs.core.Keyword(null,"player","player",4323118675),new cljs.core.Keyword(null,"state","state",1123661827)], null),new cljs.core.Keyword(null,"stopped","stopped",3424552255));
}));
cljs.core._add_method.call(null,growingtree_app.controllers.controls.control_event,new cljs.core.Keyword(null,"audio-player-muted","audio-player-muted",4718730120),(function (target,message,args,state){return cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"audio","audio",1107070792),new cljs.core.Keyword(null,"muted","muted",1118168285)], null),true);
}));
cljs.core._add_method.call(null,growingtree_app.controllers.controls.control_event,new cljs.core.Keyword(null,"audio-player-unmuted","audio-player-unmuted",3422373327),(function (target,message,args,state){return cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"audio","audio",1107070792),new cljs.core.Keyword(null,"muted","muted",1118168285)], null),false);
}));
cljs.core._add_method.call(null,growingtree_app.controllers.controls.control_event,new cljs.core.Keyword(null,"audio-player-unmuted","audio-player-unmuted",3422373327),(function (target,message,args,state){return cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"audio","audio",1107070792),new cljs.core.Keyword(null,"muted","muted",1118168285)], null),false);
}));
cljs.core._add_method.call(null,growingtree_app.controllers.controls.control_event,new cljs.core.Keyword(null,"audio-player-source-updated","audio-player-source-updated",2679762480),(function (target,message,p__11645,state){var vec__11646 = p__11645;var src = cljs.core.nth.call(null,vec__11646,0,null);var channel_id = cljs.core.nth.call(null,vec__11646,1,null);return cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"channels","channels",2446530370),channel_id,new cljs.core.Keyword(null,"player","player",4323118675),new cljs.core.Keyword(null,"source-url","source-url",4196274223)], null),src);
}));
cljs.core._add_method.call(null,growingtree_app.controllers.controls.control_event,new cljs.core.Keyword(null,"audio-player-unmuted","audio-player-unmuted",3422373327),(function (target,message,args,state){return cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"audio","audio",1107070792),new cljs.core.Keyword(null,"muted","muted",1118168285)], null),false);
}));
cljs.core._add_method.call(null,growingtree_app.controllers.controls.control_event,new cljs.core.Keyword(null,"playlist-entry-queued","playlist-entry-queued",1714422459),(function (target,message,args,state){var vec__11647 = args;var channel_id = cljs.core.nth.call(null,vec__11647,0,null);var url = cljs.core.nth.call(null,vec__11647,1,null);return cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"channels","channels",2446530370),channel_id,new cljs.core.Keyword(null,"player","player",4323118675),new cljs.core.Keyword(null,"playlist","playlist",2893378884)], null),(function (playlist){return cljs.core.conj.call(null,playlist,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"order","order",1119910592),(cljs.core.count.call(null,playlist) + 1),new cljs.core.Keyword(null,"src","src",1014018390),url], null));
}));
}));
cljs.core._add_method.call(null,growingtree_app.controllers.controls.control_event,new cljs.core.Keyword(null,"playlist-entry-played","playlist-entry-played",1677366299),(function (target,message,p__11648,state){var vec__11649 = p__11648;var order = cljs.core.nth.call(null,vec__11649,0,null);var channel_id = cljs.core.nth.call(null,vec__11649,1,null);return cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"channels","channels",2446530370),channel_id,new cljs.core.Keyword(null,"player","player",4323118675),new cljs.core.Keyword(null,"playing-order","playing-order",3298952289)], null),order),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"channels","channels",2446530370),channel_id,new cljs.core.Keyword(null,"player","player",4323118675),new cljs.core.Keyword(null,"loading","loading",1350554798)], null),true);
}));
cljs.core._add_method.call(null,growingtree_app.controllers.controls.control_event,new cljs.core.Keyword(null,"user-message-submitted","user-message-submitted",1304334501),(function (target,message,args,state){if(cljs.core.empty_QMARK_.call(null,cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",2448535445),new cljs.core.Keyword(null,"forms","forms",1111523233),new cljs.core.Keyword(null,"user-message","user-message",2253309815),new cljs.core.Keyword(null,"value","value",1125876963)], null))))
{return state;
} else
{var content = cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",2448535445),new cljs.core.Keyword(null,"forms","forms",1111523233),new cljs.core.Keyword(null,"user-message","user-message",2253309815),new cljs.core.Keyword(null,"value","value",1125876963)], null));var user = cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"users","users",1125482874),new cljs.core.Keyword(null,"current-user-email","current-user-email",4091392864).cljs$core$IFn$_invoke$arity$1(state)], null));var channel = cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"channels","channels",2446530370),new cljs.core.Keyword(null,"selected-channel","selected-channel",2473753411).cljs$core$IFn$_invoke$arity$1(state)], null));var activity = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"content","content",1965434859),content,new cljs.core.Keyword(null,"author","author",3902543101),new cljs.core.Keyword(null,"email","email",1110523662).cljs$core$IFn$_invoke$arity$1(user),new cljs.core.Keyword(null,"created_at","created_at",2383584348),(new Date())], null);return cljs.core.update_in.call(null,cljs.core.update_in.call(null,cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",2448535445),new cljs.core.Keyword(null,"forms","forms",1111523233),new cljs.core.Keyword(null,"user-message","user-message",2253309815),new cljs.core.Keyword(null,"value","value",1125876963)], null),null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"channels","channels",2446530370),new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(channel),new cljs.core.Keyword(null,"activities","activities",3062509407)], null),cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.sort_by,new cljs.core.Keyword(null,"created_at","created_at",2383584348)),cljs.core.conj),activity),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"channels","channels",2446530370),new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(channel),new cljs.core.Keyword(null,"activities","activities",3062509407)], null),cljs.core.vec);
}
}));
cljs.core._add_method.call(null,growingtree_app.controllers.controls.control_event,new cljs.core.Keyword(null,"settings-opened","settings-opened",2980449477),(function (target,message,args,state){return cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",2448535445),new cljs.core.Keyword(null,"menus","menus",1117686374),new cljs.core.Keyword(null,"user-menu","user-menu",1307043219),new cljs.core.Keyword(null,"open","open",1017321916)], null),false);
}));
cljs.core._add_method.call(null,growingtree_app.controllers.controls.control_event,new cljs.core.Keyword(null,"help-opened","help-opened",703585255),(function (target,message,args,state){return cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",2448535445),new cljs.core.Keyword(null,"menus","menus",1117686374),new cljs.core.Keyword(null,"user-menu","user-menu",1307043219),new cljs.core.Keyword(null,"open","open",1017321916)], null),false);
}));
cljs.core._add_method.call(null,growingtree_app.controllers.controls.control_event,new cljs.core.Keyword(null,"about-opened","about-opened",4155398683),(function (target,message,args,state){return cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",2448535445),new cljs.core.Keyword(null,"menus","menus",1117686374),new cljs.core.Keyword(null,"user-menu","user-menu",1307043219),new cljs.core.Keyword(null,"open","open",1017321916)], null),false);
}));
cljs.core._add_method.call(null,growingtree_app.controllers.controls.control_event,new cljs.core.Keyword(null,"user-logged-out","user-logged-out",2519482167),(function (target,message,args,state){return cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",2448535445),new cljs.core.Keyword(null,"menus","menus",1117686374),new cljs.core.Keyword(null,"user-menu","user-menu",1307043219),new cljs.core.Keyword(null,"open","open",1017321916)], null),false),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-user-email","current-user-email",4091392864)], null),null);
}));
cljs.core._add_method.call(null,growingtree_app.controllers.controls.control_event,new cljs.core.Keyword(null,"audio-source-loaded","audio-source-loaded",1601208242),(function (target,message,channel_id,state){return cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"channels","channels",2446530370),channel_id,new cljs.core.Keyword(null,"player","player",4323118675),new cljs.core.Keyword(null,"loading","loading",1350554798)], null),false);
}));
cljs.core._add_method.call(null,growingtree_app.controllers.controls.control_event,new cljs.core.Keyword(null,"channel-destroyed","channel-destroyed",3892625729),(function (target,message,channel_id,state){return cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"channels","channels",2446530370),channel_id,new cljs.core.Keyword(null,"loading","loading",1350554798)], null),true);
}));
cljs.core._add_method.call(null,growingtree_app.controllers.controls.control_event,new cljs.core.Keyword(null,"right-sidebar-toggled","right-sidebar-toggled",1915715552),(function (target,message,channel_id,state){return cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",2448535445),new cljs.core.Keyword(null,"sidebar","sidebar",3099131598),new cljs.core.Keyword(null,"right","right",1122416014),new cljs.core.Keyword(null,"open","open",1017321916)], null),cljs.core.not);
}));
cljs.core._add_method.call(null,growingtree_app.controllers.controls.control_event,new cljs.core.Keyword(null,"left-sidebar-toggled","left-sidebar-toggled",1753163723),(function (target,message,channel_id,state){return cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",2448535445),new cljs.core.Keyword(null,"sidebar","sidebar",3099131598),new cljs.core.Keyword(null,"left","left",1017222009),new cljs.core.Keyword(null,"open","open",1017321916)], null),cljs.core.not);
}));
growingtree_app.controllers.controls.window_drag_event = (function (){var method_table__4301__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__4302__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__4303__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__4304__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__4305__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("window-drag-event",(function (message,args,state){return message;
}),new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__4305__auto__,method_table__4301__auto__,prefer_table__4302__auto__,method_cache__4303__auto__,cached_hierarchy__4304__auto__));
})();
cljs.core._add_method.call(null,growingtree_app.controllers.controls.window_drag_event,new cljs.core.Keyword(null,"grabbed","grabbed",1293824551),(function (message,initial_mouse_pos,window_state){var vec__11650 = initial_mouse_pos;var mx = cljs.core.nth.call(null,vec__11650,0,null);var my = cljs.core.nth.call(null,vec__11650,1,null);var vec__11651 = new cljs.core.Keyword(null,"position","position",1761709211).cljs$core$IFn$_invoke$arity$1(window_state);var px = cljs.core.nth.call(null,vec__11651,0,null);var py = cljs.core.nth.call(null,vec__11651,1,null);var offset = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(mx - px),(my - py)], null);return cljs.core.assoc.call(null,window_state,new cljs.core.Keyword(null,"dragging?","dragging?",709673026),true,new cljs.core.Keyword(null,"offset","offset",4289091589),offset);
}));
cljs.core._add_method.call(null,growingtree_app.controllers.controls.window_drag_event,new cljs.core.Keyword(null,"released","released",4757572783),(function (message,data,window_state){return cljs.core.assoc.call(null,window_state,new cljs.core.Keyword(null,"dragging?","dragging?",709673026),false);
}));
cljs.core._add_method.call(null,growingtree_app.controllers.controls.window_drag_event,new cljs.core.Keyword(null,"mouse-moved","mouse-moved",753447677),(function (message,mouse_position,window_state){if(cljs.core.truth_(new cljs.core.Keyword(null,"dragging?","dragging?",709673026).cljs$core$IFn$_invoke$arity$1(window_state)))
{var vec__11652 = mouse_position;var mx = cljs.core.nth.call(null,vec__11652,0,null);var my = cljs.core.nth.call(null,vec__11652,1,null);var vec__11653 = new cljs.core.Keyword(null,"offset","offset",4289091589).cljs$core$IFn$_invoke$arity$1(window_state);var off_x = cljs.core.nth.call(null,vec__11653,0,null);var off_y = cljs.core.nth.call(null,vec__11653,1,null);var vec__11654 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(mx - off_x),(my - off_y)], null);var tnx = cljs.core.nth.call(null,vec__11654,0,null);var tny = cljs.core.nth.call(null,vec__11654,1,null);var min_x = -150;var max_x = (document.body.clientWidth - 50);var min_y = 0;var max_y = (document.body.clientHeight - 50);var new_position = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(((min_x > tnx))?min_x:(((tnx > max_x))?max_x:((new cljs.core.Keyword(null,"else","else",1017020587))?tnx:null))),(((min_y > tny))?min_y:(((tny > max_y))?max_y:((new cljs.core.Keyword(null,"else","else",1017020587))?tny:null)))], null);return cljs.core.assoc.call(null,window_state,new cljs.core.Keyword(null,"position","position",1761709211),new_position);
} else
{return window_state;
}
}));
cljs.core._add_method.call(null,growingtree_app.controllers.controls.control_event,new cljs.core.Keyword(null,"draggable","draggable",709423359),(function (target,message,p__11656,state){var vec__11657 = p__11656;var sub_message = cljs.core.nth.call(null,vec__11657,0,null);var map__11658 = cljs.core.nth.call(null,vec__11657,1,null);var map__11658__$1 = ((cljs.core.seq_QMARK_.call(null,map__11658))?cljs.core.apply.call(null,cljs.core.hash_map,map__11658):map__11658);var args = map__11658__$1;var name = cljs.core.get.call(null,map__11658__$1,new cljs.core.Keyword(null,"name","name",1017277949));return cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"windows","windows",2363397621),name], null),(function (p1__11655_SHARP_){return growingtree_app.controllers.controls.window_drag_event.call(null,sub_message,new cljs.core.Keyword(null,"position","position",1761709211).cljs$core$IFn$_invoke$arity$1(args),p1__11655_SHARP_);
}));
}));
cljs.core._add_method.call(null,growingtree_app.controllers.controls.control_event,new cljs.core.Keyword(null,"toggle-inspector-key-pressed","toggle-inspector-key-pressed",2594666135),(function (target,message,args,state){return cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"windows","windows",2363397621),new cljs.core.Keyword(null,"window-inspector","window-inspector",2735849676),new cljs.core.Keyword(null,"open","open",1017321916)], null),cljs.core.not);
}));
cljs.core._add_method.call(null,growingtree_app.controllers.controls.control_event,new cljs.core.Keyword(null,"inspector-path-updated","inspector-path-updated",848746907),(function (target,message,path,state){return cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",2448535445),new cljs.core.Keyword(null,"inspector","inspector",931868265),new cljs.core.Keyword(null,"path","path",1017337751)], null),path);
}));
cljs.core._add_method.call(null,growingtree_app.controllers.controls.control_event,new cljs.core.Keyword(null,"state-restored","state-restored",2236662980),(function (target,message,path,state){var str_data = localStorage.getItem("growingtree-app-state");if(cljs.core.seq.call(null,str_data))
{return cljs.core.assoc.call(null,cljs.reader.read_string.call(null,str_data),new cljs.core.Keyword(null,"comms","comms",1108747865),new cljs.core.Keyword(null,"comms","comms",1108747865).cljs$core$IFn$_invoke$arity$1(state));
} else
{return state;
}
}));

//# sourceMappingURL=controls.js.map