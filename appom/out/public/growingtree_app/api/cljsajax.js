// Compiled by ClojureScript 0.0-2277
goog.provide('growingtree_app.api.cljsajax');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('ajax.core');
goog.require('goog.structs.Map');
goog.require('goog.structs.Map');
goog.require('ajax.core');
goog.require('cljs.reader');
goog.require('cljs.reader');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
/**
* cljs-ajax success handler, send back things-vec to api-ch
*/
growingtree_app.api.cljsajax.handler = (function handler(command,nav_path,api_ch){return (function (response){var temp__4126__auto__ = response;if(cljs.core.truth_(temp__4126__auto__))
{var result = temp__4126__auto__;var status = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(result);var things_vec = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(result);var dbid = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,things_vec));console.log(cljs.core.pr_str.call(null,"cljsajax onSuccess: nav-path ",nav_path," thing-vec ",things_vec));
if(cljs.core.truth_(new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(nav_path)))
{return cljs.core.async.put_BANG_.call(null,api_ch,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"api-data","api-data",103234986),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"nav-path","nav-path",-444531376),nav_path,new cljs.core.Keyword(null,"things-vec","things-vec",-1363222375),cljs.core.vec.call(null,things_vec)], null)], null));
} else
{return cljs.core.async.put_BANG_.call(null,api_ch,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"api-success","api-success",1221200738),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"msg","msg",-1386103444),"in add-thing success, no query path, trigger re-direct"], null)], null));
}
} else
{return null;
}
});
});
/**
* cljs-ajax error handler, send error to api-ch
*/
growingtree_app.api.cljsajax.error_handler = (function error_handler(command,nav_path,api_ch){return (function (error){var map__8650 = error;var map__8650__$1 = ((cljs.core.seq_QMARK_.call(null,map__8650))?cljs.core.apply.call(null,cljs.core.hash_map,map__8650):map__8650);var response = cljs.core.get.call(null,map__8650__$1,new cljs.core.Keyword(null,"response","response",-1068424192));var status_text = cljs.core.get.call(null,map__8650__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));var status = cljs.core.get.call(null,map__8650__$1,new cljs.core.Keyword(null,"status","status",-1997798413));var err = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"nav-path","nav-path",-444531376),nav_path,new cljs.core.Keyword(null,"things-vec","things-vec",-1363222375),null,new cljs.core.Keyword(null,"error","error",-978969032),error], null);console.log(cljs.core.pr_str.call(null,"xhr error : nav-path ",nav_path," err : ",err));
return cljs.core.async.put_BANG_.call(null,api_ch,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"api-error","api-error",1506636439),err], null));
});
});
/**
* service a get or post request using cljs-ajax GET POST call
*/
growingtree_app.api.cljsajax.cljs_ajax = (function cljs_ajax(command,nav_path,api_ch,param_details){var query_path = cljs.core.get_in.call(null,nav_path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"body","body",-2049205669),(1)], null));var thing_type = (function (){var or__3543__auto__ = cljs.core.last.call(null,query_path);if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return cljs.core.get.call(null,nav_path,new cljs.core.Keyword(null,"add-thing","add-thing",321362583));
}
})();var request = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"handler","handler",-195596612),growingtree_app.api.cljsajax.handler.call(null,command,nav_path,api_ch),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),growingtree_app.api.cljsajax.error_handler.call(null,command,nav_path,api_ch),new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"edn","edn",1317840885),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"thing-type","thing-type",15521235),thing_type,new cljs.core.Keyword(null,"path","path",-188191168),query_path,new cljs.core.Keyword(null,"qpath","qpath",-697341501),cljs.core.get.call(null,nav_path,new cljs.core.Keyword(null,"title","title",636505583)),new cljs.core.Keyword(null,"details","details",1956795411),param_details], null),new cljs.core.Keyword(null,"headers","headers",-835030129),cljs.core.PersistentArrayMap.EMPTY], null);console.log(("cljs-ajax >>> "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(command)+" nav-path "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(nav_path)+" param-details "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(param_details)));
var G__8652 = (((command instanceof cljs.core.Keyword))?command.fqn:null);switch (G__8652) {
case "add-thing":
return ajax.core.POST.call(null,("/add/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,thing_type))),request);

break;
case "request-things":
return ajax.core.POST.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,thing_type))),request);

break;
case "signup-login":
return ajax.core.POST.call(null,"/login",request);

break;
case "publish":
return ajax.core.POST.call(null,"/msgs",request);

break;
case "subscribe":
return ajax.core.GET.call(null,"/msgs",request);

break;
default:
return "default";

}
});

//# sourceMappingURL=cljsajax.js.map