// Compiled by ClojureScript 0.0-2277
goog.provide('growingtree_app.useful');
goog.require('cljs.core');
/**
* Create a new map from m by calling function f on each value to get a new value.
* @param {...*} var_args
*/
growingtree_app.useful.map_vals = (function() { 
var map_vals__delegate = function (m,f,args){if(cljs.core.truth_(m))
{return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4268__auto__ = (function iter__12716(s__12717){return (new cljs.core.LazySeq(null,(function (){var s__12717__$1 = s__12717;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__12717__$1);if(temp__4126__auto__)
{var s__12717__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__12717__$2))
{var c__4266__auto__ = cljs.core.chunk_first.call(null,s__12717__$2);var size__4267__auto__ = cljs.core.count.call(null,c__4266__auto__);var b__12719 = cljs.core.chunk_buffer.call(null,size__4267__auto__);if((function (){var i__12718 = (0);while(true){
if((i__12718 < size__4267__auto__))
{var vec__12722 = cljs.core._nth.call(null,c__4266__auto__,i__12718);var k = cljs.core.nth.call(null,vec__12722,(0),null);var v = cljs.core.nth.call(null,vec__12722,(1),null);cljs.core.chunk_append.call(null,b__12719,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.apply.call(null,f,v,args)], null));
{
var G__12724 = (i__12718 + (1));
i__12718 = G__12724;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12719),iter__12716.call(null,cljs.core.chunk_rest.call(null,s__12717__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12719),null);
}
} else
{var vec__12723 = cljs.core.first.call(null,s__12717__$2);var k = cljs.core.nth.call(null,vec__12723,(0),null);var v = cljs.core.nth.call(null,vec__12723,(1),null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.apply.call(null,f,v,args)], null),iter__12716.call(null,cljs.core.rest.call(null,s__12717__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4268__auto__.call(null,m);
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
map_vals.cljs$lang$applyTo = (function (arglist__12725){
var m = cljs.core.first(arglist__12725);
arglist__12725 = cljs.core.next(arglist__12725);
var f = cljs.core.first(arglist__12725);
var args = cljs.core.rest(arglist__12725);
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
{return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4268__auto__ = (function iter__12734(s__12735){return (new cljs.core.LazySeq(null,(function (){var s__12735__$1 = s__12735;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__12735__$1);if(temp__4126__auto__)
{var s__12735__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__12735__$2))
{var c__4266__auto__ = cljs.core.chunk_first.call(null,s__12735__$2);var size__4267__auto__ = cljs.core.count.call(null,c__4266__auto__);var b__12737 = cljs.core.chunk_buffer.call(null,size__4267__auto__);if((function (){var i__12736 = (0);while(true){
if((i__12736 < size__4267__auto__))
{var vec__12740 = cljs.core._nth.call(null,c__4266__auto__,i__12736);var k = cljs.core.nth.call(null,vec__12740,(0),null);var v = cljs.core.nth.call(null,vec__12740,(1),null);cljs.core.chunk_append.call(null,b__12737,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,f,k,args),v], null));
{
var G__12742 = (i__12736 + (1));
i__12736 = G__12742;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12737),iter__12734.call(null,cljs.core.chunk_rest.call(null,s__12735__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12737),null);
}
} else
{var vec__12741 = cljs.core.first.call(null,s__12735__$2);var k = cljs.core.nth.call(null,vec__12741,(0),null);var v = cljs.core.nth.call(null,vec__12741,(1),null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,f,k,args),v], null),iter__12734.call(null,cljs.core.rest.call(null,s__12735__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4268__auto__.call(null,m);
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
map_keys.cljs$lang$applyTo = (function (arglist__12743){
var m = cljs.core.first(arglist__12743);
arglist__12743 = cljs.core.next(arglist__12743);
var f = cljs.core.first(arglist__12743);
var args = cljs.core.rest(arglist__12743);
return map_keys__delegate(m,f,args);
});
map_keys.cljs$core$IFn$_invoke$arity$variadic = map_keys__delegate;
return map_keys;
})()
;
growingtree_app.useful.ffilter = cljs.core.comp.call(null,cljs.core.first,cljs.core.filter);

//# sourceMappingURL=useful.js.map