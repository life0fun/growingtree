// Compiled by ClojureScript 0.0-2173
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
growingtree_app.api.cljsajax.handler = (function handler(command,main_path,api_ch){return (function (response){var temp__4092__auto__ = response;if(cljs.core.truth_(temp__4092__auto__))
{var result = temp__4092__auto__;var status = new cljs.core.Keyword(null,"status","status",4416389988).cljs$core$IFn$_invoke$arity$1(result);var data_path = new cljs.core.Keyword(null,"body","body",1016933652);var things_vec = new cljs.core.Keyword(null,"data","data",1016980252).cljs$core$IFn$_invoke$arity$1(result);var dbid = new cljs.core.Keyword("db","id","db/id",1014111942).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,things_vec));console.log([cljs.core.str("xhr thing-vec "),cljs.core.str(main_path),cljs.core.str(" thing-vec "),cljs.core.str(things_vec)].join(''));
return cljs.core.async.put_BANG_.call(null,api_ch,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"api-data","api-data",1934674671),new cljs.core.PersistentArrayMap.fromArray([data_path,main_path,new cljs.core.Keyword(null,"things-vec","things-vec",905584254),cljs.core.vec.call(null,things_vec)], true, false)], null));
} else
{return null;
}
});
});
/**
* cljs-ajax error handler, send error to api-ch
*/
growingtree_app.api.cljsajax.error_handler = (function error_handler(command,nav_path,api_ch){return (function (error){var map__8493 = error;var map__8493__$1 = ((cljs.core.seq_QMARK_.call(null,map__8493))?cljs.core.apply.call(null,cljs.core.hash_map,map__8493):map__8493);var response = cljs.core.get.call(null,map__8493__$1,new cljs.core.Keyword(null,"response","response",673580979));var status_text = cljs.core.get.call(null,map__8493__$1,new cljs.core.Keyword(null,"status-text","status-text",4371493274));var status = cljs.core.get.call(null,map__8493__$1,new cljs.core.Keyword(null,"status","status",4416389988));var err = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"nav-path","nav-path",3061255681),nav_path,new cljs.core.Keyword(null,"things-vec","things-vec",905584254),null,new cljs.core.Keyword(null,"error","error",1110689146),error], null);console.log([cljs.core.str("xhr error : "),cljs.core.str(command),cljs.core.str(" "),cljs.core.str(nav_path),cljs.core.str(" "),cljs.core.str(cljs.core.pr_str.call(null,error))].join(''));
return cljs.core.async.put_BANG_.call(null,api_ch,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"api-data","api-data",1934674671),err], null));
});
});
/**
* service a get or post request using cljs-ajax GET POST call
*/
growingtree_app.api.cljsajax.cljs_ajax = (function cljs_ajax(command,nav_path,api_ch,param_details){var main_path = cljs.core.get_in.call(null,nav_path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"body","body",1016933652),1], null));var thing_type = (function (){var or__3443__auto__ = cljs.core.last.call(null,main_path);if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{return cljs.core.get.call(null,nav_path,new cljs.core.Keyword(null,"add-thing","add-thing",4221519924));
}
})();var request = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"handler","handler",1706707644),growingtree_app.api.cljsajax.handler.call(null,command,main_path,api_ch),new cljs.core.Keyword(null,"error-handler","error-handler",1866823671),growingtree_app.api.cljsajax.error_handler.call(null,command,nav_path,api_ch),new cljs.core.Keyword(null,"format","format",4040092521),new cljs.core.Keyword(null,"edn","edn",1014004513),new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"thing-type","thing-type",843056171),thing_type,new cljs.core.Keyword(null,"path","path",1017337751),main_path,new cljs.core.Keyword(null,"qpath","qpath",1121695624),cljs.core.get.call(null,nav_path,new cljs.core.Keyword(null,"title","title",1124275658)),new cljs.core.Keyword(null,"details","details",2571625908),param_details], null),new cljs.core.Keyword(null,"headers","headers",1809212152),cljs.core.PersistentArrayMap.EMPTY], null);console.log([cljs.core.str("cljs-ajax >>> "),cljs.core.str(command),cljs.core.str(" nav-path "),cljs.core.str(nav_path),cljs.core.str(" param-details "),cljs.core.str(param_details)].join(''));
var G__8495 = command;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"add-thing","add-thing",4221519924),G__8495))
{return ajax.core.POST.call(null,[cljs.core.str("/add/"),cljs.core.str(cljs.core.name.call(null,thing_type))].join(''),request);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"request-things","request-things",2196329909),G__8495))
{return ajax.core.POST.call(null,[cljs.core.str("/api/"),cljs.core.str(cljs.core.name.call(null,thing_type))].join(''),request);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"signup-login","signup-login",3012638182),G__8495))
{return ajax.core.POST.call(null,"/login",request);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"publish","publish",778539137),G__8495))
{return ajax.core.POST.call(null,"/msgs",request);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"subscribe","subscribe",1528746172),G__8495))
{return ajax.core.GET.call(null,"/msgs",request);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return "default";
} else
{return null;
}
}
}
}
}
}
});

//# sourceMappingURL=cljsajax.js.map