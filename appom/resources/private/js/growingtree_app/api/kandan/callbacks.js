// Compiled by ClojureScript 0.0-2173
goog.provide('growingtree_app.api.kandan.callbacks');
goog.require('cljs.core');
goog.require('growingtree_app.utils');
goog.require('growingtree_app.utils');
goog.require('goog.json');
goog.require('goog.json');
growingtree_app.api.kandan.callbacks.send_user_message_BANG_ = (function send_user_message_BANG_(api_key,activity,cb){return growingtree_app.utils.ajax.call(null,[cljs.core.str("http://localhost:3000/channels/"),cljs.core.str(new cljs.core.Keyword(null,"channel-id","channel-id",3378014615).cljs$core$IFn$_invoke$arity$1(activity)),cljs.core.str("/activities")].join(''),"POST",goog.json.serialize(cljs.core.clj__GT_js.call(null,cljs.core.merge.call(null,activity,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"user_id","user_id",866771329),1,new cljs.core.Keyword(null,"authentication_token","authentication_token",4056168676),api_key,new cljs.core.Keyword(null,"auth_token","auth_token",3352104980),api_key,new cljs.core.Keyword(null,"api_key","api_key",4508786220),api_key,new cljs.core.Keyword(null,"action","action",3885920680),"message"], null)))),cb,cb,{"Content-Type": "application/json"});
});
