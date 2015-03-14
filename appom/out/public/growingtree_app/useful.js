// Compiled by ClojureScript 0.0-2850 {}
goog.provide('growingtree_app.useful');
goog.require('cljs.core');
/**
* Create a new map from m by calling function f on each value to get a new value.
* @param {...*} var_args
*/
growingtree_app.useful.map_vals = (function() { 
var map_vals__delegate = function (m,f,args){
if(cljs.core.truth_(m)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4563__auto__ = (function iter__23472(s__23473){
return (new cljs.core.LazySeq(null,(function (){
var s__23473__$1 = s__23473;
while(true){
var temp__4406__auto__ = cljs.core.seq.call(null,s__23473__$1);
if(temp__4406__auto__){
var s__23473__$2 = temp__4406__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__23473__$2)){
var c__4561__auto__ = cljs.core.chunk_first.call(null,s__23473__$2);
var size__4562__auto__ = cljs.core.count.call(null,c__4561__auto__);
var b__23475 = cljs.core.chunk_buffer.call(null,size__4562__auto__);
if((function (){var i__23474 = (0);
while(true){
if((i__23474 < size__4562__auto__)){
var vec__23478 = cljs.core._nth.call(null,c__4561__auto__,i__23474);
var k = cljs.core.nth.call(null,vec__23478,(0),null);
var v = cljs.core.nth.call(null,vec__23478,(1),null);
cljs.core.chunk_append.call(null,b__23475,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.apply.call(null,f,v,args)], null));

var G__23480 = (i__23474 + (1));
i__23474 = G__23480;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23475),iter__23472.call(null,cljs.core.chunk_rest.call(null,s__23473__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23475),null);
}
} else {
var vec__23479 = cljs.core.first.call(null,s__23473__$2);
var k = cljs.core.nth.call(null,vec__23479,(0),null);
var v = cljs.core.nth.call(null,vec__23479,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.apply.call(null,f,v,args)], null),iter__23472.call(null,cljs.core.rest.call(null,s__23473__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4563__auto__.call(null,m);
})());
} else {
return null;
}
};
var map_vals = function (m,f,var_args){
var args = null;
if (arguments.length > 2) {
var G__23481__i = 0, G__23481__a = new Array(arguments.length -  2);
while (G__23481__i < G__23481__a.length) {G__23481__a[G__23481__i] = arguments[G__23481__i + 2]; ++G__23481__i;}
  args = new cljs.core.IndexedSeq(G__23481__a,0);
} 
return map_vals__delegate.call(this,m,f,args);};
map_vals.cljs$lang$maxFixedArity = 2;
map_vals.cljs$lang$applyTo = (function (arglist__23482){
var m = cljs.core.first(arglist__23482);
arglist__23482 = cljs.core.next(arglist__23482);
var f = cljs.core.first(arglist__23482);
var args = cljs.core.rest(arglist__23482);
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
var map_keys__delegate = function (m,f,args){
if(cljs.core.truth_(m)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4563__auto__ = (function iter__23491(s__23492){
return (new cljs.core.LazySeq(null,(function (){
var s__23492__$1 = s__23492;
while(true){
var temp__4406__auto__ = cljs.core.seq.call(null,s__23492__$1);
if(temp__4406__auto__){
var s__23492__$2 = temp__4406__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__23492__$2)){
var c__4561__auto__ = cljs.core.chunk_first.call(null,s__23492__$2);
var size__4562__auto__ = cljs.core.count.call(null,c__4561__auto__);
var b__23494 = cljs.core.chunk_buffer.call(null,size__4562__auto__);
if((function (){var i__23493 = (0);
while(true){
if((i__23493 < size__4562__auto__)){
var vec__23497 = cljs.core._nth.call(null,c__4561__auto__,i__23493);
var k = cljs.core.nth.call(null,vec__23497,(0),null);
var v = cljs.core.nth.call(null,vec__23497,(1),null);
cljs.core.chunk_append.call(null,b__23494,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,f,k,args),v], null));

var G__23499 = (i__23493 + (1));
i__23493 = G__23499;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23494),iter__23491.call(null,cljs.core.chunk_rest.call(null,s__23492__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23494),null);
}
} else {
var vec__23498 = cljs.core.first.call(null,s__23492__$2);
var k = cljs.core.nth.call(null,vec__23498,(0),null);
var v = cljs.core.nth.call(null,vec__23498,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,f,k,args),v], null),iter__23491.call(null,cljs.core.rest.call(null,s__23492__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4563__auto__.call(null,m);
})());
} else {
return null;
}
};
var map_keys = function (m,f,var_args){
var args = null;
if (arguments.length > 2) {
var G__23500__i = 0, G__23500__a = new Array(arguments.length -  2);
while (G__23500__i < G__23500__a.length) {G__23500__a[G__23500__i] = arguments[G__23500__i + 2]; ++G__23500__i;}
  args = new cljs.core.IndexedSeq(G__23500__a,0);
} 
return map_keys__delegate.call(this,m,f,args);};
map_keys.cljs$lang$maxFixedArity = 2;
map_keys.cljs$lang$applyTo = (function (arglist__23501){
var m = cljs.core.first(arglist__23501);
arglist__23501 = cljs.core.next(arglist__23501);
var f = cljs.core.first(arglist__23501);
var args = cljs.core.rest(arglist__23501);
return map_keys__delegate(m,f,args);
});
map_keys.cljs$core$IFn$_invoke$arity$variadic = map_keys__delegate;
return map_keys;
})()
;
growingtree_app.useful.ffilter = cljs.core.comp.call(null,cljs.core.first,cljs.core.filter);

//# sourceMappingURL=useful.js.map