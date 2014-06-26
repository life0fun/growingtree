// Compiled by ClojureScript 0.0-2173
goog.provide('growingtree_app.utils');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs_time.coerce');
goog.require('goog.i18n.NumberFormat.Format');
goog.require('cljs_time.core');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
goog.require('goog.crypt');
goog.require('goog.net.EventType');
goog.require('goog.net.XhrIo');
goog.require('goog.i18n.NumberFormat.Format');
goog.require('clojure.string');
goog.require('cljs_time.format');
goog.require('goog.events');
goog.require('cljs_time.coerce');
goog.require('clojure.string');
goog.require('goog.crypt.Md5');
goog.require('dommy.core');
goog.require('cljs.core.async');
goog.require('goog.crypt');
goog.require('cljs_time.format');
goog.require('goog.net.EventType');
goog.require('goog.events');
goog.require('goog.Uri');
goog.require('dommy.core');
goog.require('cljs_time.core');
/**
* returns a type 4 random UUID: xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx
*/
growingtree_app.utils.uuid = (function uuid(){var r = cljs.core.repeatedly.call(null,30,(function (){return cljs.core.rand_int.call(null,16).toString(16);
}));return cljs.core.apply.call(null,cljs.core.str,cljs.core.concat.call(null,cljs.core.take.call(null,8,r),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["-"], null),cljs.core.take.call(null,4,cljs.core.drop.call(null,8,r)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["-4"], null),cljs.core.take.call(null,3,cljs.core.drop.call(null,12,r)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["-"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(8 | (3 & cljs.core.rand_int.call(null,15))).toString(16)], null),cljs.core.take.call(null,3,cljs.core.drop.call(null,15,r)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["-"], null),cljs.core.take.call(null,12,cljs.core.drop.call(null,18,r))));
});
growingtree_app.utils.parsed_uri = (new goog.Uri(window.location.href));
/**
* Returns true if (seq x) will succeed, false otherwise.
*/
growingtree_app.utils.many_QMARK_ = (function many_QMARK_(x){return ((x instanceof cljs.core.PersistentHashSet)) || ((x instanceof cljs.core.PersistentHashMap));
});
growingtree_app.utils.initial_query_map = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"kandan-channels","kandan-channels",2776703958),clojure.string.split.call(null,(function (){var or__3443__auto__ = growingtree_app.utils.parsed_uri.getParameterValue("kandan-channels");if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{return "1";
}
})(),/,/),new cljs.core.Keyword(null,"kandan-api-key","kandan-api-key",3548116106),growingtree_app.utils.parsed_uri.getParameterValue("kandan-api-key"),new cljs.core.Keyword(null,"kandan-client?","kandan-client?",915311154),cljs.core.seq.call(null,growingtree_app.utils.parsed_uri.getParameterValue("kandan-api-key")),new cljs.core.Keyword(null,"log-channels?","log-channels?",1640598168),(function (){var or__3443__auto__ = growingtree_app.utils.parsed_uri.getParameterValue("log-channels");if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{return false;
}
})(),new cljs.core.Keyword(null,"logging-enabled?","logging-enabled?",4574339902),cljs.core._EQ_.call(null,growingtree_app.utils.parsed_uri.getParameterValue("logging-enabled"),"true"),new cljs.core.Keyword(null,"restore-state?","restore-state?",3703635295),cljs.core._EQ_.call(null,growingtree_app.utils.parsed_uri.getParameterValue("restore-state"),"true")], null);
growingtree_app.utils.logging_enabled_QMARK_ = new cljs.core.Keyword(null,"logging-enabled?","logging-enabled?",4574339902).cljs$core$IFn$_invoke$arity$1(growingtree_app.utils.initial_query_map);
/**
* @param {...*} var_args
*/
growingtree_app.utils.mprint = (function() { 
var mprint__delegate = function (message){if(cljs.core.truth_(growingtree_app.utils.logging_enabled_QMARK_))
{return cljs.core.apply.call(null,cljs.core.print,message);
} else
{return null;
}
};
var mprint = function (var_args){
var message = null;if (arguments.length > 0) {
  message = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return mprint__delegate.call(this,message);};
mprint.cljs$lang$maxFixedArity = 0;
mprint.cljs$lang$applyTo = (function (arglist__11804){
var message = cljs.core.seq(arglist__11804);
return mprint__delegate(message);
});
mprint.cljs$core$IFn$_invoke$arity$variadic = mprint__delegate;
return mprint;
})()
;
growingtree_app.utils.safe_sel = (function safe_sel(s){return [cljs.core.str(clojure.string.replace.call(null,clojure.string.lower_case.call(null,[cljs.core.str(s)].join('')),/[\W]/,"-"))].join('');
});
growingtree_app.utils.email__GT_gravatar_url = (function email__GT_gravatar_url(email){var email__$1 = (function (){var or__3443__auto__ = email;if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{return "unknown-email@unknown-domain.com";
}
})();var container = (function (){var G__11806 = (new goog.crypt.Md5());G__11806.update(email__$1);
return G__11806;
})();var hash = goog.crypt.byteArrayToHex(container.digest());return [cljs.core.str("http://gravatar.com/avatar/"),cljs.core.str(hash),cljs.core.str("?s=30&d=identicon")].join('');
});
growingtree_app.utils.gravatar_for = (function gravatar_for(email){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img.avatar","img.avatar",2296123734),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",1014018390),growingtree_app.utils.email__GT_gravatar_url.call(null,email)], null)], null);
});
growingtree_app.utils.set_window_href_BANG_ = (function set_window_href_BANG_(path){return window.history.pushState({},"",path);
});
/**
* @param {...*} var_args
*/
growingtree_app.utils.ajax = (function() { 
var ajax__$1__delegate = function (url,method,data_string,success,p__11808){var vec__11810 = p__11808;var error = cljs.core.nth.call(null,vec__11810,0,null);var headers = cljs.core.nth.call(null,vec__11810,1,null);var request = (new goog.net.XhrIo());var d = (new goog.async.Deferred());var listener_id = goog.events.listen(request,goog.net.EventType.COMPLETE,((function (request,d){
return (function (response){var target = response.target;var data = ((cljs.core._EQ_.call(null,method,"DELETE"))?null:target.getResponseJson());return d.callback(data);
});})(request,d))
);d.addErrback((function (error__$1){return console.log("Error on ajax: ",error__$1);
}));
if(cljs.core.truth_(success))
{d.addCallback((function (p1__11807_SHARP_){return success.call(null,cljs.core.js__GT_clj.call(null,p1__11807_SHARP_,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",4191781672),true));
}));
} else
{}
if(cljs.core.truth_(error))
{d.addErrback(error);
} else
{}
d.addBoth((function (value){goog.events.unlistenByKey(listener_id);
return request.dispose();
}));
growingtree_app.utils.mprint.call(null,[cljs.core.str("Firing request to "),cljs.core.str(url),cljs.core.str(" via "),cljs.core.str(method),cljs.core.str(" and data - : "),cljs.core.str(data_string)].join(''));
request.send(url,method,data_string,headers);
return request;
};
var ajax__$1 = function (url,method,data_string,success,var_args){
var p__11808 = null;if (arguments.length > 4) {
  p__11808 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);} 
return ajax__$1__delegate.call(this,url,method,data_string,success,p__11808);};
ajax__$1.cljs$lang$maxFixedArity = 4;
ajax__$1.cljs$lang$applyTo = (function (arglist__11811){
var url = cljs.core.first(arglist__11811);
arglist__11811 = cljs.core.next(arglist__11811);
var method = cljs.core.first(arglist__11811);
arglist__11811 = cljs.core.next(arglist__11811);
var data_string = cljs.core.first(arglist__11811);
arglist__11811 = cljs.core.next(arglist__11811);
var success = cljs.core.first(arglist__11811);
var p__11808 = cljs.core.rest(arglist__11811);
return ajax__$1__delegate(url,method,data_string,success,p__11808);
});
ajax__$1.cljs$core$IFn$_invoke$arity$variadic = ajax__$1__delegate;
return ajax__$1;
})()
;
growingtree_app.utils.thing_attr_keyword = (function thing_attr_keyword(thing_type,attr_name){return cljs.core.keyword.call(null,[cljs.core.str(cljs.core.name.call(null,thing_type)),cljs.core.str("/"),cljs.core.str(attr_name)].join(''));
});
/**
* get thing type of the entity, the namespace, or ident of entity. remove :db/id
*/
growingtree_app.utils.thing_ident = (function thing_ident(entity){var e = cljs.core.dissoc.call(null,entity,new cljs.core.Keyword("db","id","db/id",1014111942));var ident = cljs.core.keyword.call(null,cljs.core.namespace.call(null,cljs.core.ffirst.call(null,e)));return ident;
});
/**
* update in status enum value from string to keyword
*/
growingtree_app.utils.update_enum = (function update_enum(thing_val,thing_type,keyname,enum$){var schema_key = cljs.core.keyword.call(null,[cljs.core.str(cljs.core.name.call(null,thing_type)),cljs.core.str("/"),cljs.core.str(keyname)].join(''));if(cljs.core.contains_QMARK_.call(null,thing_val,schema_key))
{var enum_key = [cljs.core.str(cljs.core.name.call(null,thing_type)),cljs.core.str("."),cljs.core.str(keyname)].join('');var enum_fn = ((function (enum_key){
return (function() { 
var G__11812__delegate = function (v,args){return cljs.core.keyword.call(null,[cljs.core.str(enum_key),cljs.core.str("/"),cljs.core.str(v)].join(''));
};
var G__11812 = function (v,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return G__11812__delegate.call(this,v,args);};
G__11812.cljs$lang$maxFixedArity = 1;
G__11812.cljs$lang$applyTo = (function (arglist__11813){
var v = cljs.core.first(arglist__11813);
var args = cljs.core.rest(arglist__11813);
return G__11812__delegate(v,args);
});
G__11812.cljs$core$IFn$_invoke$arity$variadic = G__11812__delegate;
return G__11812;
})()
;})(enum_key))
;var new_val = (cljs.core.truth_(enum$)?cljs.core.update_in.call(null,thing_val,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema_key], null),enum_fn):cljs.core.update_in.call(null,thing_val,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema_key], null),cljs.core.keyword));return new_val;
} else
{return thing_val;
}
});
/**
* update in time value from string to keyword
*/
growingtree_app.utils.update_time = (function update_time(thing_map,thing_type,keyname){var schema_key = cljs.core.keyword.call(null,[cljs.core.str(cljs.core.name.call(null,thing_type)),cljs.core.str("/"),cljs.core.str(keyname)].join(''));if(cljs.core.contains_QMARK_.call(null,thing_map,schema_key))
{var update_fn = (function() { 
var G__11814__delegate = function (v,args){return moment(v).unix();
};
var G__11814 = function (v,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return G__11814__delegate.call(this,v,args);};
G__11814.cljs$lang$maxFixedArity = 1;
G__11814.cljs$lang$applyTo = (function (arglist__11815){
var v = cljs.core.first(arglist__11815);
var args = cljs.core.rest(arglist__11815);
return G__11814__delegate(v,args);
});
G__11814.cljs$core$IFn$_invoke$arity$variadic = G__11814__delegate;
return G__11814;
})()
;var new_map = cljs.core.update_in.call(null,thing_map,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema_key], null),update_fn);return new_map;
} else
{return thing_map;
}
});
growingtree_app.utils.moment_from = (function moment_from(txtime,nowtime){return [cljs.core.str(" "),cljs.core.str(txtime.from(nowtime))].join('');
});
/**
* update in time value from string to keyword
*/
growingtree_app.utils.set_time = (function set_time(thing_map,thing_type,keyname){var schema_key = cljs.core.keyword.call(null,[cljs.core.str(cljs.core.name.call(null,thing_type)),cljs.core.str("/"),cljs.core.str(keyname)].join(''));if(cljs.core.contains_QMARK_.call(null,thing_map,schema_key))
{var epoch_fn = (function (t){return cljs_time.coerce.to_epoch.call(null,cljs_time.format.parse.call(null,cljs_time.format.formatter.call(null,"MM-dd-yyyy hh:mm:ss"),t));
});var update_fn = ((function (epoch_fn){
return (function() { 
var G__11816__delegate = function (t,args){return epoch_fn.call(null,t);
};
var G__11816 = function (t,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return G__11816__delegate.call(this,t,args);};
G__11816.cljs$lang$maxFixedArity = 1;
G__11816.cljs$lang$applyTo = (function (arglist__11817){
var t = cljs.core.first(arglist__11817);
var args = cljs.core.rest(arglist__11817);
return G__11816__delegate(t,args);
});
G__11816.cljs$core$IFn$_invoke$arity$variadic = G__11816__delegate;
return G__11816;
})()
;})(epoch_fn))
;var new_map = cljs.core.update_in.call(null,thing_map,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema_key], null),update_fn);return new_map;
} else
{return thing_map;
}
});
/**
* get thing val by name, within any namespace
*/
growingtree_app.utils.thing_val_by_name = (function thing_val_by_name(thing_map,attr_name){return cljs.core.first.call(null,cljs.core.filter.call(null,(function (entry){return cljs.core._EQ_.call(null,cljs.core.name.call(null,cljs.core.key.call(null,entry)),attr_name);
}),thing_map));
});

//# sourceMappingURL=utils.js.map