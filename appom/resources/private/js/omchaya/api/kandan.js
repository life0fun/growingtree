// Compiled by ClojureScript 0.0-2173
goog.provide('omchaya.api.kandan');
goog.require('cljs.core');
goog.require('omchaya.utils');
goog.require('omchaya.useful');
goog.require('cljs.core.async');
goog.require('omchaya.api.kandan.callbacks');
goog.require('omchaya.utils');
goog.require('cljs.core.async');
goog.require('omchaya.useful');
goog.require('omchaya.useful');
goog.require('omchaya.api.kandan.callbacks');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('omchaya.utils');
goog.require('cljs.core.async');
omchaya.api.kandan.process_event_BANG_ = (function (){var method_table__4301__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__4302__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__4303__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__4304__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__4305__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("process-event!",(function (entity_name,event_name,data){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [entity_name,cljs.core.keyword.call(null,cljs.core.first.call(null,clojure.string.split.call(null,new cljs.core.Keyword(null,"event","event",1110795788).cljs$core$IFn$_invoke$arity$1(data),/#/)))], null);
}),new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__4305__auto__,method_table__4301__auto__,prefer_table__4302__auto__,method_cache__4303__auto__,cached_hierarchy__4304__auto__));
})();
cljs.core._add_method.call(null,omchaya.api.kandan.process_event_BANG_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user","user",1017503549),new cljs.core.Keyword(null,"connect","connect",1965255772)], null),(function (entity_name,event_name,data){return "Placeholder";
}));
cljs.core._add_method.call(null,omchaya.api.kandan.process_event_BANG_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"channel","channel",1752854645),new cljs.core.Keyword(null,"delete","delete",3973413149)], null),(function (entity_name,event_name,data){return "Placeholder";
}));
cljs.core._add_method.call(null,omchaya.api.kandan.process_event_BANG_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"channel","channel",1752854645),new cljs.core.Keyword(null,"create","create",3956577390)], null),(function (entity_name,event_name,data){return "Placeholder";
}));
cljs.core._add_method.call(null,omchaya.api.kandan.process_event_BANG_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"channel","channel",1752854645),new cljs.core.Keyword(null,"update","update",4470025275)], null),(function (entity_name,event_name,data){return "Placeholder";
}));
cljs.core._add_method.call(null,omchaya.api.kandan.process_event_BANG_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attachments","attachments",4569874210),new cljs.core.Keyword(null,"added","added",1106564210)], null),(function (entity_name,event_name,data){return "Placeholder";
}));
omchaya.api.kandan.handle_activity = (function handle_activity(data){var data__$1 = cljs.core.js__GT_clj.call(null,data,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",4191781672));var event = new cljs.core.Keyword(null,"event","event",1110795788).cljs$core$IFn$_invoke$arity$1(data__$1);var vec__21096 = cljs.core.map.call(null,cljs.core.keyword,clojure.string.split.call(null,event,/#/));var entity_name = cljs.core.nth.call(null,vec__21096,0,null);var event_name = cljs.core.nth.call(null,vec__21096,1,null);return omchaya.api.kandan.process_event_BANG_.call(null,entity_name,event_name,data__$1);
});
omchaya.api.kandan.make_client = (function make_client(auth_token,end_point){var client = (new Faye.Client(end_point));var auth_extension = (function (){var obj21101 = {"outgoing":((function (client){
return (function (message,cb){if(cljs.core._EQ_.call(null,message.channel,"/meta/subscribe"))
{(message["ext"] = {"auth_token": auth_token});
} else
{}
return cb.call(null,message);
});})(client))
};return obj21101;
})();var G__21102 = client;G__21102.disable("websocket");
G__21102.addExtension(auth_extension);
G__21102.bind("transport:down",(function (){return omchaya.utils.mprint.call(null,"Connection to Kandan server is down");
}));
G__21102.bind("transport:up",(function (){return omchaya.utils.mprint.call(null,"Connection to Kandan server is up");
}));
G__21102.subscribe("/app/activities",omchaya.api.kandan.handle_activity);
return G__21102;
});
omchaya.api.kandan.normalize_activity = (function normalize_activity(activity){return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",1013907597),new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(activity),new cljs.core.Keyword(null,"channel-id","channel-id",3378014615),omchaya.utils.safe_sel.call(null,new cljs.core.Keyword(null,"channel_id","channel_id",3378062665).cljs$core$IFn$_invoke$arity$1(activity)),new cljs.core.Keyword(null,"created_at","created_at",2383584348),(new Date(new cljs.core.Keyword(null,"created_at","created_at",2383584348).cljs$core$IFn$_invoke$arity$1(activity))),new cljs.core.Keyword(null,"author","author",3902543101),cljs.core.get_in.call(null,activity,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user","user",1017503549),new cljs.core.Keyword(null,"email","email",1110523662)], null)),new cljs.core.Keyword(null,"content","content",1965434859),new cljs.core.Keyword(null,"content","content",1965434859).cljs$core$IFn$_invoke$arity$1(activity)], null);
});
omchaya.api.kandan.subscribe_BANG_ = (function subscribe_BANG_(client,remote_channel_name,api_ch){var subscription = client.subscribe(remote_channel_name);client.subscribe(remote_channel_name,(function (activity){var normalized = omchaya.api.kandan.normalize_activity.call(null,cljs.core.js__GT_clj.call(null,activity,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",4191781672),true));return cljs.core.async.put_BANG_.call(null,api_ch,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"channel-activity-received","channel-activity-received",3517943815),normalized], null));
}));
client.errback((function (data){return cljs.core.async.put_BANG_.call(null,api_ch,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"channel-error-received","channel-error-received",3125248386),cljs.core.js__GT_clj.call(null,data,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",4191781672),true)], null));
}));
return subscription;
});
omchaya.api.kandan.save = (function save(api_key,obj){return omchaya.api.kandan.callbacks.post_activity_BANG_.call(null,api_key,cljs.core.js__GT_clj.call(null,obj),(function (p1__21103_SHARP_){return omchaya.utils.mprint.call(null,"Save Activity Result: ",p1__21103_SHARP_);
}));
});