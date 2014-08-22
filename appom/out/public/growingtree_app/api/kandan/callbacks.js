// Compiled by ClojureScript 0.0-2277
goog.provide('growingtree_app.api.kandan.callbacks');
goog.require('cljs.core');
goog.require('growingtree_app.utils');
goog.require('growingtree_app.utils');
goog.require('goog.json');
goog.require('goog.json');
growingtree_app.api.kandan.callbacks.send_user_message_BANG_ = (function send_user_message_BANG_(api_key,activity,cb){return growingtree_app.utils.ajax.call(null,("http://localhost:3000/channels/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"channel-id","channel-id",138191095).cljs$core$IFn$_invoke$arity$1(activity))+"/activities"),"POST",goog.json.serialize(cljs.core.clj__GT_js.call(null,cljs.core.merge.call(null,activity,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"user_id","user_id",993497112),(1),new cljs.core.Keyword(null,"authentication_token","authentication_token",1253291643),api_key,new cljs.core.Keyword(null,"auth_token","auth_token",1432865949),api_key,new cljs.core.Keyword(null,"api_key","api_key",-1567758224),api_key,new cljs.core.Keyword(null,"action","action",-811238024),"message"], null)))),cb,cb,{"Content-Type": "application/json"});
});

//# sourceMappingURL=callbacks.js.map