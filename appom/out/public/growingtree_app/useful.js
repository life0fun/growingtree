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
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4563__auto__ = (function iter__22561(s__22562){
return (new cljs.core.LazySeq(null,(function (){
var s__22562__$1 = s__22562;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__22562__$1);
if(temp__4126__auto__){
var s__22562__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__22562__$2)){
var c__4561__auto__ = cljs.core.chunk_first.call(null,s__22562__$2);
var size__4562__auto__ = cljs.core.count.call(null,c__4561__auto__);
var b__22564 = cljs.core.chunk_buffer.call(null,size__4562__auto__);
if((function (){var i__22563 = (0);
while(true){
if((i__22563 < size__4562__auto__)){
var vec__22567 = cljs.core._nth.call(null,c__4561__auto__,i__22563);
var k = cljs.core.nth.call(null,vec__22567,(0),null);
var v = cljs.core.nth.call(null,vec__22567,(1),null);
cljs.core.chunk_append.call(null,b__22564,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.apply.call(null,f,v,args)], null));

var G__22569 = (i__22563 + (1));
i__22563 = G__22569;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22564),iter__22561.call(null,cljs.core.chunk_rest.call(null,s__22562__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22564),null);
}
} else {
var vec__22568 = cljs.core.first.call(null,s__22562__$2);
var k = cljs.core.nth.call(null,vec__22568,(0),null);
var v = cljs.core.nth.call(null,vec__22568,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.apply.call(null,f,v,args)], null),iter__22561.call(null,cljs.core.rest.call(null,s__22562__$2)));
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
var G__22570__i = 0, G__22570__a = new Array(arguments.length -  2);
while (G__22570__i < G__22570__a.length) {G__22570__a[G__22570__i] = arguments[G__22570__i + 2]; ++G__22570__i;}
  args = new cljs.core.IndexedSeq(G__22570__a,0);
} 
return map_vals__delegate.call(this,m,f,args);};
map_vals.cljs$lang$maxFixedArity = 2;
map_vals.cljs$lang$applyTo = (function (arglist__22571){
var m = cljs.core.first(arglist__22571);
arglist__22571 = cljs.core.next(arglist__22571);
var f = cljs.core.first(arglist__22571);
var args = cljs.core.rest(arglist__22571);
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
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4563__auto__ = (function iter__22580(s__22581){
return (new cljs.core.LazySeq(null,(function (){
var s__22581__$1 = s__22581;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__22581__$1);
if(temp__4126__auto__){
var s__22581__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__22581__$2)){
var c__4561__auto__ = cljs.core.chunk_first.call(null,s__22581__$2);
var size__4562__auto__ = cljs.core.count.call(null,c__4561__auto__);
var b__22583 = cljs.core.chunk_buffer.call(null,size__4562__auto__);
if((function (){var i__22582 = (0);
while(true){
if((i__22582 < size__4562__auto__)){
var vec__22586 = cljs.core._nth.call(null,c__4561__auto__,i__22582);
var k = cljs.core.nth.call(null,vec__22586,(0),null);
var v = cljs.core.nth.call(null,vec__22586,(1),null);
cljs.core.chunk_append.call(null,b__22583,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,f,k,args),v], null));

var G__22588 = (i__22582 + (1));
i__22582 = G__22588;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22583),iter__22580.call(null,cljs.core.chunk_rest.call(null,s__22581__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22583),null);
}
} else {
var vec__22587 = cljs.core.first.call(null,s__22581__$2);
var k = cljs.core.nth.call(null,vec__22587,(0),null);
var v = cljs.core.nth.call(null,vec__22587,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,f,k,args),v], null),iter__22580.call(null,cljs.core.rest.call(null,s__22581__$2)));
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
var G__22589__i = 0, G__22589__a = new Array(arguments.length -  2);
while (G__22589__i < G__22589__a.length) {G__22589__a[G__22589__i] = arguments[G__22589__i + 2]; ++G__22589__i;}
  args = new cljs.core.IndexedSeq(G__22589__a,0);
} 
return map_keys__delegate.call(this,m,f,args);};
map_keys.cljs$lang$maxFixedArity = 2;
map_keys.cljs$lang$applyTo = (function (arglist__22590){
var m = cljs.core.first(arglist__22590);
arglist__22590 = cljs.core.next(arglist__22590);
var f = cljs.core.first(arglist__22590);
var args = cljs.core.rest(arglist__22590);
return map_keys__delegate(m,f,args);
});
map_keys.cljs$core$IFn$_invoke$arity$variadic = map_keys__delegate;
return map_keys;
})()
;
growingtree_app.useful.ffilter = cljs.core.comp.call(null,cljs.core.first,cljs.core.filter);

//# sourceMappingURL=useful.js.map