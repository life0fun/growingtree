// Compiled by ClojureScript 0.0-2173
goog.provide('growingtree_app.utils');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('goog.i18n.NumberFormat.Format');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
goog.require('goog.crypt');
goog.require('goog.net.EventType');
goog.require('goog.net.XhrIo');
goog.require('goog.i18n.NumberFormat.Format');
goog.require('clojure.string');
goog.require('goog.events');
goog.require('clojure.string');
goog.require('goog.crypt.Md5');
goog.require('dommy.core');
goog.require('cljs.core.async');
goog.require('goog.crypt');
goog.require('goog.net.EventType');
goog.require('goog.events');
goog.require('goog.Uri');
goog.require('dommy.core');
/**
* returns a type 4 random UUID: xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx
*/
growingtree_app.utils.uuid = (function uuid(){var r = cljs.core.repeatedly.call(null,30,(function (){return cljs.core.rand_int.call(null,16).toString(16);
}));return cljs.core.apply.call(null,cljs.core.str,cljs.core.concat.call(null,cljs.core.take.call(null,8,r),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["-"], null),cljs.core.take.call(null,4,cljs.core.drop.call(null,8,r)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["-4"], null),cljs.core.take.call(null,3,cljs.core.drop.call(null,12,r)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["-"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(8 | (3 & cljs.core.rand_int.call(null,15))).toString(16)], null),cljs.core.take.call(null,3,cljs.core.drop.call(null,15,r)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["-"], null),cljs.core.take.call(null,12,cljs.core.drop.call(null,18,r))));
});
growingtree_app.utils.parsed_uri = (new goog.Uri(window.location.href));
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
mprint.cljs$lang$applyTo = (function (arglist__12104){
var message = cljs.core.seq(arglist__12104);
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
})();var container = (function (){var G__12106 = (new goog.crypt.Md5());G__12106.update(email__$1);
return G__12106;
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
var ajax__delegate = function (url,method,data_string,success,p__12108){var vec__12110 = p__12108;var error = cljs.core.nth.call(null,vec__12110,0,null);var headers = cljs.core.nth.call(null,vec__12110,1,null);var request = (new goog.net.XhrIo());var d = (new goog.async.Deferred());var listener_id = goog.events.listen(request,goog.net.EventType.COMPLETE,((function (request,d){
return (function (response){var target = response.target;var data = ((cljs.core._EQ_.call(null,method,"DELETE"))?null:target.getResponseJson());return d.callback(data);
});})(request,d))
);d.addErrback((function (error__$1){return console.log("Error on ajax: ",error__$1);
}));
if(cljs.core.truth_(success))
{d.addCallback((function (p1__12107_SHARP_){return success.call(null,cljs.core.js__GT_clj.call(null,p1__12107_SHARP_,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",4191781672),true));
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
var ajax = function (url,method,data_string,success,var_args){
var p__12108 = null;if (arguments.length > 4) {
  p__12108 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);} 
return ajax__delegate.call(this,url,method,data_string,success,p__12108);};
ajax.cljs$lang$maxFixedArity = 4;
ajax.cljs$lang$applyTo = (function (arglist__12111){
var url = cljs.core.first(arglist__12111);
arglist__12111 = cljs.core.next(arglist__12111);
var method = cljs.core.first(arglist__12111);
arglist__12111 = cljs.core.next(arglist__12111);
var data_string = cljs.core.first(arglist__12111);
arglist__12111 = cljs.core.next(arglist__12111);
var success = cljs.core.first(arglist__12111);
var p__12108 = cljs.core.rest(arglist__12111);
return ajax__delegate(url,method,data_string,success,p__12108);
});
ajax.cljs$core$IFn$_invoke$arity$variadic = ajax__delegate;
return ajax;
})()
;
