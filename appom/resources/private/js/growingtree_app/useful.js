// Compiled by ClojureScript 0.0-2173
goog.provide('growingtree_app.useful');
goog.require('cljs.core');
/**
* Create a new map from m by calling function f on each value to get a new value.
* @param {...*} var_args
*/
growingtree_app.useful.map_vals = (function() { 
var map_vals__delegate = function (m,f,args){if(cljs.core.truth_(m))
{return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4160__auto__ = (function iter__12076(s__12077){return (new cljs.core.LazySeq(null,(function (){var s__12077__$1 = s__12077;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__12077__$1);if(temp__4092__auto__)
{var s__12077__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__12077__$2))
{var c__4158__auto__ = cljs.core.chunk_first.call(null,s__12077__$2);var size__4159__auto__ = cljs.core.count.call(null,c__4158__auto__);var b__12079 = cljs.core.chunk_buffer.call(null,size__4159__auto__);if((function (){var i__12078 = 0;while(true){
if((i__12078 < size__4159__auto__))
{var vec__12082 = cljs.core._nth.call(null,c__4158__auto__,i__12078);var k = cljs.core.nth.call(null,vec__12082,0,null);var v = cljs.core.nth.call(null,vec__12082,1,null);cljs.core.chunk_append.call(null,b__12079,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.apply.call(null,f,v,args)], null));
{
var G__12084 = (i__12078 + 1);
i__12078 = G__12084;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12079),iter__12076.call(null,cljs.core.chunk_rest.call(null,s__12077__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12079),null);
}
} else
{var vec__12083 = cljs.core.first.call(null,s__12077__$2);var k = cljs.core.nth.call(null,vec__12083,0,null);var v = cljs.core.nth.call(null,vec__12083,1,null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.apply.call(null,f,v,args)], null),iter__12076.call(null,cljs.core.rest.call(null,s__12077__$2)));
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
map_vals.cljs$lang$applyTo = (function (arglist__12085){
var m = cljs.core.first(arglist__12085);
arglist__12085 = cljs.core.next(arglist__12085);
var f = cljs.core.first(arglist__12085);
var args = cljs.core.rest(arglist__12085);
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
{return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4160__auto__ = (function iter__12094(s__12095){return (new cljs.core.LazySeq(null,(function (){var s__12095__$1 = s__12095;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__12095__$1);if(temp__4092__auto__)
{var s__12095__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__12095__$2))
{var c__4158__auto__ = cljs.core.chunk_first.call(null,s__12095__$2);var size__4159__auto__ = cljs.core.count.call(null,c__4158__auto__);var b__12097 = cljs.core.chunk_buffer.call(null,size__4159__auto__);if((function (){var i__12096 = 0;while(true){
if((i__12096 < size__4159__auto__))
{var vec__12100 = cljs.core._nth.call(null,c__4158__auto__,i__12096);var k = cljs.core.nth.call(null,vec__12100,0,null);var v = cljs.core.nth.call(null,vec__12100,1,null);cljs.core.chunk_append.call(null,b__12097,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,f,k,args),v], null));
{
var G__12102 = (i__12096 + 1);
i__12096 = G__12102;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12097),iter__12094.call(null,cljs.core.chunk_rest.call(null,s__12095__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12097),null);
}
} else
{var vec__12101 = cljs.core.first.call(null,s__12095__$2);var k = cljs.core.nth.call(null,vec__12101,0,null);var v = cljs.core.nth.call(null,vec__12101,1,null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,f,k,args),v], null),iter__12094.call(null,cljs.core.rest.call(null,s__12095__$2)));
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
map_keys.cljs$lang$applyTo = (function (arglist__12103){
var m = cljs.core.first(arglist__12103);
arglist__12103 = cljs.core.next(arglist__12103);
var f = cljs.core.first(arglist__12103);
var args = cljs.core.rest(arglist__12103);
return map_keys__delegate(m,f,args);
});
map_keys.cljs$core$IFn$_invoke$arity$variadic = map_keys__delegate;
return map_keys;
})()
;
growingtree_app.useful.ffilter = cljs.core.comp.call(null,cljs.core.first,cljs.core.filter);
