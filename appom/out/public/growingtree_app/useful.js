// Compiled by ClojureScript 0.0-2173
goog.provide('growingtree_app.useful');
goog.require('cljs.core');
/**
* Create a new map from m by calling function f on each value to get a new value.
* @param {...*} var_args
*/
growingtree_app.useful.map_vals = (function() { 
var map_vals__delegate = function (m,f,args){if(cljs.core.truth_(m))
{return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4160__auto__ = (function iter__12384(s__12385){return (new cljs.core.LazySeq(null,(function (){var s__12385__$1 = s__12385;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__12385__$1);if(temp__4092__auto__)
{var s__12385__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__12385__$2))
{var c__4158__auto__ = cljs.core.chunk_first.call(null,s__12385__$2);var size__4159__auto__ = cljs.core.count.call(null,c__4158__auto__);var b__12387 = cljs.core.chunk_buffer.call(null,size__4159__auto__);if((function (){var i__12386 = 0;while(true){
if((i__12386 < size__4159__auto__))
{var vec__12390 = cljs.core._nth.call(null,c__4158__auto__,i__12386);var k = cljs.core.nth.call(null,vec__12390,0,null);var v = cljs.core.nth.call(null,vec__12390,1,null);cljs.core.chunk_append.call(null,b__12387,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.apply.call(null,f,v,args)], null));
{
var G__12392 = (i__12386 + 1);
i__12386 = G__12392;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12387),iter__12384.call(null,cljs.core.chunk_rest.call(null,s__12385__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12387),null);
}
} else
{var vec__12391 = cljs.core.first.call(null,s__12385__$2);var k = cljs.core.nth.call(null,vec__12391,0,null);var v = cljs.core.nth.call(null,vec__12391,1,null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.apply.call(null,f,v,args)], null),iter__12384.call(null,cljs.core.rest.call(null,s__12385__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4160__auto__.call(null,m);
})());
} else
{return null;
}
};
var map_vals = function (m,f,var_args){
var args = null;if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return map_vals__delegate.call(this,m,f,args);};
map_vals.cljs$lang$maxFixedArity = 2;
map_vals.cljs$lang$applyTo = (function (arglist__12393){
var m = cljs.core.first(arglist__12393);
arglist__12393 = cljs.core.next(arglist__12393);
var f = cljs.core.first(arglist__12393);
var args = cljs.core.rest(arglist__12393);
return map_vals__delegate(m,f,args);
});
map_vals.cljs$core$IFn$_invoke$arity$variadic = map_vals__delegate;
return map_vals;
})()
;
/**
* Create a new map from m by calling function f on each key to get a new key.
* @param {...*} var_args
*/
growingtree_app.useful.map_keys = (function() { 
var map_keys__delegate = function (m,f,args){if(cljs.core.truth_(m))
{return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4160__auto__ = (function iter__12402(s__12403){return (new cljs.core.LazySeq(null,(function (){var s__12403__$1 = s__12403;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__12403__$1);if(temp__4092__auto__)
{var s__12403__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__12403__$2))
{var c__4158__auto__ = cljs.core.chunk_first.call(null,s__12403__$2);var size__4159__auto__ = cljs.core.count.call(null,c__4158__auto__);var b__12405 = cljs.core.chunk_buffer.call(null,size__4159__auto__);if((function (){var i__12404 = 0;while(true){
if((i__12404 < size__4159__auto__))
{var vec__12408 = cljs.core._nth.call(null,c__4158__auto__,i__12404);var k = cljs.core.nth.call(null,vec__12408,0,null);var v = cljs.core.nth.call(null,vec__12408,1,null);cljs.core.chunk_append.call(null,b__12405,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,f,k,args),v], null));
{
var G__12410 = (i__12404 + 1);
i__12404 = G__12410;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12405),iter__12402.call(null,cljs.core.chunk_rest.call(null,s__12403__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12405),null);
}
} else
{var vec__12409 = cljs.core.first.call(null,s__12403__$2);var k = cljs.core.nth.call(null,vec__12409,0,null);var v = cljs.core.nth.call(null,vec__12409,1,null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,f,k,args),v], null),iter__12402.call(null,cljs.core.rest.call(null,s__12403__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4160__auto__.call(null,m);
})());
} else
{return null;
}
};
var map_keys = function (m,f,var_args){
var args = null;if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return map_keys__delegate.call(this,m,f,args);};
map_keys.cljs$lang$maxFixedArity = 2;
map_keys.cljs$lang$applyTo = (function (arglist__12411){
var m = cljs.core.first(arglist__12411);
arglist__12411 = cljs.core.next(arglist__12411);
var f = cljs.core.first(arglist__12411);
var args = cljs.core.rest(arglist__12411);
return map_keys__delegate(m,f,args);
});
map_keys.cljs$core$IFn$_invoke$arity$variadic = map_keys__delegate;
return map_keys;
})()
;
growingtree_app.useful.ffilter = cljs.core.comp.call(null,cljs.core.first,cljs.core.filter);

//# sourceMappingURL=useful.js.map