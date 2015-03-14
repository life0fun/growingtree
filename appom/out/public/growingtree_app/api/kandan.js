// Compiled by ClojureScript 0.0-2850 {}
goog.provide('growingtree_app.api.kandan');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('growingtree_app.api.kandan.callbacks');
goog.require('growingtree_app.useful');
goog.require('growingtree_app.utils');
goog.require('clojure.string');
growingtree_app.api.kandan.process_event_BANG_ = (function (){var method_table__4704__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4705__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4706__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4707__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4708__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"growingtree-app.api.kandan","process-event!"),((function (method_table__4704__auto__,prefer_table__4705__auto__,method_cache__4706__auto__,cached_hierarchy__4707__auto__,hierarchy__4708__auto__){
return (function (entity_name,event_name,data){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [entity_name,cljs.core.keyword.call(null,cljs.core.first.call(null,clojure.string.split.call(null,new cljs.core.Keyword(null,"event","event",301435442).cljs$core$IFn$_invoke$arity$1(data),/#/)))], null);
});})(method_table__4704__auto__,prefer_table__4705__auto__,method_cache__4706__auto__,cached_hierarchy__4707__auto__,hierarchy__4708__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4708__auto__,method_table__4704__auto__,prefer_table__4705__auto__,method_cache__4706__auto__,cached_hierarchy__4707__auto__));
})();
cljs.core._add_method.call(null,growingtree_app.api.kandan.process_event_BANG_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user","user",1532431356),new cljs.core.Keyword(null,"connect","connect",1232828233)], null),(function (entity_name,event_name,data){
return "Placeholder";
}));
cljs.core._add_method.call(null,growingtree_app.api.kandan.process_event_BANG_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"channel","channel",734187692),new cljs.core.Keyword(null,"delete","delete",-1768633620)], null),(function (entity_name,event_name,data){
return "Placeholder";
}));
cljs.core._add_method.call(null,growingtree_app.api.kandan.process_event_BANG_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"channel","channel",734187692),new cljs.core.Keyword(null,"create","create",-1301499256)], null),(function (entity_name,event_name,data){
return "Placeholder";
}));
cljs.core._add_method.call(null,growingtree_app.api.kandan.process_event_BANG_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"channel","channel",734187692),new cljs.core.Keyword(null,"update","update",1045576396)], null),(function (entity_name,event_name,data){
return "Placeholder";
}));
cljs.core._add_method.call(null,growingtree_app.api.kandan.process_event_BANG_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attachments","attachments",-1535547830),new cljs.core.Keyword(null,"added","added",2057651688)], null),(function (entity_name,event_name,data){
return "Placeholder";
}));
growingtree_app.api.kandan.handle_activity = (function handle_activity(data){
var data__$1 = cljs.core.js__GT_clj.call(null,data,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252));
var event = new cljs.core.Keyword(null,"event","event",301435442).cljs$core$IFn$_invoke$arity$1(data__$1);
var vec__19816 = cljs.core.map.call(null,cljs.core.keyword,clojure.string.split.call(null,event,/#/));
var entity_name = cljs.core.nth.call(null,vec__19816,(0),null);
var event_name = cljs.core.nth.call(null,vec__19816,(1),null);
return growingtree_app.api.kandan.process_event_BANG_.call(null,entity_name,event_name,data__$1);
});
growingtree_app.api.kandan.make_client = (function make_client(auth_token,end_point){
var client = (new Faye.Client(end_point));
var auth_extension = (function (){var obj19821 = {"outgoing":((function (client){
return (function (message,cb){
if(cljs.core._EQ_.call(null,message.channel,"/meta/subscribe")){
(message["ext"] = {"auth_token": auth_token});
} else {
}

return cb.call(null,message);
});})(client))
};
return obj19821;
})();
var G__19822 = client;
G__19822.disable("websocket");

G__19822.addExtension(auth_extension);

G__19822.bind("transport:down",((function (G__19822,client,auth_extension){
return (function (){
return growingtree_app.utils.mprint.call(null,"Connection to Kandan server is down");
});})(G__19822,client,auth_extension))
);

G__19822.bind("transport:up",((function (G__19822,client,auth_extension){
return (function (){
return growingtree_app.utils.mprint.call(null,"Connection to Kandan server is up");
});})(G__19822,client,auth_extension))
);

G__19822.subscribe("/app/activities",growingtree_app.api.kandan.handle_activity);

return G__19822;
});
growingtree_app.api.kandan.normalize_activity = (function normalize_activity(activity){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(activity),new cljs.core.Keyword(null,"channel-id","channel-id",138191095),growingtree_app.utils.safe_sel.call(null,new cljs.core.Keyword(null,"channel_id","channel_id",1180018383).cljs$core$IFn$_invoke$arity$1(activity)),new cljs.core.Keyword(null,"created_at","created_at",1484050750),(new Date(new cljs.core.Keyword(null,"created_at","created_at",1484050750).cljs$core$IFn$_invoke$arity$1(activity))),new cljs.core.Keyword(null,"author","author",2111686192),cljs.core.get_in.call(null,activity,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user","user",1532431356),new cljs.core.Keyword(null,"email","email",1415816706)], null)),new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(activity)], null);
});
growingtree_app.api.kandan.subscribe_BANG_ = (function subscribe_BANG_(client,remote_channel_name,api_ch){
var subscription = client.subscribe(remote_channel_name);
client.subscribe(remote_channel_name,((function (subscription){
return (function (activity){
var normalized = growingtree_app.api.kandan.normalize_activity.call(null,cljs.core.js__GT_clj.call(null,activity,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true));
return cljs.core.async.put_BANG_.call(null,api_ch,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"channel-activity-received","channel-activity-received",303694233),normalized], null));
});})(subscription))
);

client.errback(((function (subscription){
return (function (data){
return cljs.core.async.put_BANG_.call(null,api_ch,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"channel-error-received","channel-error-received",-894277236),cljs.core.js__GT_clj.call(null,data,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true)], null));
});})(subscription))
);

return subscription;
});
growingtree_app.api.kandan.save = (function save(api_key,obj){
return growingtree_app.api.kandan.callbacks.post_activity_BANG_.call(null,api_key,cljs.core.js__GT_clj.call(null,obj),(function (p1__19823_SHARP_){
return growingtree_app.utils.mprint.call(null,"Save Activity Result: ",p1__19823_SHARP_);
}));
});

//# sourceMappingURL=kandan.js.map