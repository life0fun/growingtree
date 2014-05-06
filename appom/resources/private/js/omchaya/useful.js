// Compiled by ClojureScript 0.0-2173
goog.provide('omchaya.useful');
goog.require('cljs.core');
/**
* Create a new map from m by calling function f on each value to get a new value.
* @param {...*} var_args
*/
omchaya.useful.map_vals = (function() { 
var map_vals__delegate = function (m,f,args){if(cljs.core.truth_(m))
{return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4160__auto__ = (function iter__23823(s__23824){return (new cljs.core.LazySeq(null,(function (){var s__23824__$1 = s__23824;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__23824__$1);if(temp__4092__auto__)
{var s__23824__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__23824__$2))
{var c__4158__auto__ = cljs.core.chunk_first.call(null,s__23824__$2);var size__4159__auto__ = cljs.core.count.call(null,c__4158__auto__);var b__23826 = cljs.core.chunk_buffer.call(null,size__4159__auto__);if((function (){var i__23825 = 0;while(true){
if((i__23825 < size__4159__auto__))
{var vec__23829 = cljs.core._nth.call(null,c__4158__auto__,i__23825);var k = cljs.core.nth.call(null,vec__23829,0,null);var v = cljs.core.nth.call(null,vec__23829,1,null);cljs.core.chunk_append.call(null,b__23826,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.apply.call(null,f,v,args)], null));
{
var G__23831 = (i__23825 + 1);
i__23825 = G__23831;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23826),iter__23823.call(null,cljs.core.chunk_rest.call(null,s__23824__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23826),null);
}
} else
{var vec__23830 = cljs.core.first.call(null,s__23824__$2);var k = cljs.core.nth.call(null,vec__23830,0,null);var v = cljs.core.nth.call(null,vec__23830,1,null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.apply.call(null,f,v,args)], null),iter__23823.call(null,cljs.core.rest.call(null,s__23824__$2)));
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
map_vals.cljs$lang$applyTo = (function (arglist__23832){
var m = cljs.core.first(arglist__23832);
arglist__23832 = cljs.core.next(arglist__23832);
var f = cljs.core.first(arglist__23832);
var args = cljs.core.rest(arglist__23832);
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
omchaya.useful.map_keys = (function() { 
var map_keys__delegate = function (m,f,args){if(cljs.core.truth_(m))
{return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4160__auto__ = (function iter__23841(s__23842){return (new cljs.core.LazySeq(null,(function (){var s__23842__$1 = s__23842;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__23842__$1);if(temp__4092__auto__)
{var s__23842__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__23842__$2))
{var c__4158__auto__ = cljs.core.chunk_first.call(null,s__23842__$2);var size__4159__auto__ = cljs.core.count.call(null,c__4158__auto__);var b__23844 = cljs.core.chunk_buffer.call(null,size__4159__auto__);if((function (){var i__23843 = 0;while(true){
if((i__23843 < size__4159__auto__))
{var vec__23847 = cljs.core._nth.call(null,c__4158__auto__,i__23843);var k = cljs.core.nth.call(null,vec__23847,0,null);var v = cljs.core.nth.call(null,vec__23847,1,null);cljs.core.chunk_append.call(null,b__23844,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,f,k,args),v], null));
{
var G__23849 = (i__23843 + 1);
i__23843 = G__23849;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23844),iter__23841.call(null,cljs.core.chunk_rest.call(null,s__23842__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23844),null);
}
} else
{var vec__23848 = cljs.core.first.call(null,s__23842__$2);var k = cljs.core.nth.call(null,vec__23848,0,null);var v = cljs.core.nth.call(null,vec__23848,1,null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,f,k,args),v], null),iter__23841.call(null,cljs.core.rest.call(null,s__23842__$2)));
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
map_keys.cljs$lang$applyTo = (function (arglist__23850){
var m = cljs.core.first(arglist__23850);
arglist__23850 = cljs.core.next(arglist__23850);
var f = cljs.core.first(arglist__23850);
var args = cljs.core.rest(arglist__23850);
return map_keys__delegate(m,f,args);
});
map_keys.cljs$core$IFn$_invoke$arity$variadic = map_keys__delegate;
return map_keys;
})()
;
omchaya.useful.ffilter = cljs.core.comp.call(null,cljs.core.first,cljs.core.filter);
