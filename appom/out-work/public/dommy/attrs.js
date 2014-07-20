// Compiled by ClojureScript 0.0-2173
goog.provide('dommy.attrs');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('clojure.string');
/**
* does class-name string have class starting at index idx.
* only will be used when Element::classList doesn't exist
*/
dommy.attrs.class_match_QMARK_ = (function class_match_QMARK_(class_name,class$,idx){var and__3431__auto__ = ((idx === 0)) || ((" " === class_name.charAt((idx - 1))));if(and__3431__auto__)
{var total_len = class_name.length;var stop = (idx + class$.length);if((stop <= total_len))
{return ((stop === total_len)) || ((" " === class_name.charAt(stop)));
} else
{return null;
}
} else
{return and__3431__auto__;
}
});
/**
* Finds the index of class in a space-delimited class-name
* only will be used when Element::classList doesn't exist
*/
dommy.attrs.class_index = (function class_index(class_name,class$){var start_from = 0;while(true){
var i = class_name.indexOf(class$,start_from);if((i >= 0))
{if(dommy.attrs.class_match_QMARK_.call(null,class_name,class$,i))
{return i;
} else
{{
var G__16903 = (i + class$.length);
start_from = G__16903;
continue;
}
}
} else
{return null;
}
break;
}
});
/**
* Does an HTML element have a class. Uses Element::classList if
* available and otherwise does fast parse of className string
*/
dommy.attrs.has_class_QMARK_ = (function has_class_QMARK_(elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var class$__$1 = cljs.core.name.call(null,class$);var temp__4090__auto__ = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto__))
{var class_list = temp__4090__auto__;return class_list.contains(class$__$1);
} else
{var temp__4092__auto__ = elem__$1.className;if(cljs.core.truth_(temp__4092__auto__))
{var class_name = temp__4092__auto__;var temp__4092__auto____$1 = dommy.attrs.class_index.call(null,class_name,class$__$1);if(cljs.core.truth_(temp__4092__auto____$1))
{var i = temp__4092__auto____$1;return (i >= 0);
} else
{return null;
}
} else
{return null;
}
}
});
/**
* add class to element
* @param {...*} var_args
*/
dommy.attrs.add_class_BANG_ = (function() {
var add_class_BANG_ = null;
var add_class_BANG___2 = (function (elem,classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var classes__$1 = clojure.string.trim.call(null,cljs.core.name.call(null,classes));if(cljs.core.seq.call(null,classes__$1))
{var temp__4090__auto___16928 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___16928))
{var class_list_16929 = temp__4090__auto___16928;var seq__16916_16930 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__16917_16931 = null;var count__16918_16932 = 0;var i__16919_16933 = 0;while(true){
if((i__16919_16933 < count__16918_16932))
{var class_16934 = cljs.core._nth.call(null,chunk__16917_16931,i__16919_16933);class_list_16929.add(class_16934);
{
var G__16935 = seq__16916_16930;
var G__16936 = chunk__16917_16931;
var G__16937 = count__16918_16932;
var G__16938 = (i__16919_16933 + 1);
seq__16916_16930 = G__16935;
chunk__16917_16931 = G__16936;
count__16918_16932 = G__16937;
i__16919_16933 = G__16938;
continue;
}
} else
{var temp__4092__auto___16939 = cljs.core.seq.call(null,seq__16916_16930);if(temp__4092__auto___16939)
{var seq__16916_16940__$1 = temp__4092__auto___16939;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16916_16940__$1))
{var c__4191__auto___16941 = cljs.core.chunk_first.call(null,seq__16916_16940__$1);{
var G__16942 = cljs.core.chunk_rest.call(null,seq__16916_16940__$1);
var G__16943 = c__4191__auto___16941;
var G__16944 = cljs.core.count.call(null,c__4191__auto___16941);
var G__16945 = 0;
seq__16916_16930 = G__16942;
chunk__16917_16931 = G__16943;
count__16918_16932 = G__16944;
i__16919_16933 = G__16945;
continue;
}
} else
{var class_16946 = cljs.core.first.call(null,seq__16916_16940__$1);class_list_16929.add(class_16946);
{
var G__16947 = cljs.core.next.call(null,seq__16916_16940__$1);
var G__16948 = null;
var G__16949 = 0;
var G__16950 = 0;
seq__16916_16930 = G__16947;
chunk__16917_16931 = G__16948;
count__16918_16932 = G__16949;
i__16919_16933 = G__16950;
continue;
}
}
} else
{}
}
break;
}
} else
{var class_name_16951 = elem__$1.className;var seq__16920_16952 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__16921_16953 = null;var count__16922_16954 = 0;var i__16923_16955 = 0;while(true){
if((i__16923_16955 < count__16922_16954))
{var class_16956 = cljs.core._nth.call(null,chunk__16921_16953,i__16923_16955);if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_16951,class_16956)))
{} else
{elem__$1.className = (((class_name_16951 === ""))?class_16956:[cljs.core.str(class_name_16951),cljs.core.str(" "),cljs.core.str(class_16956)].join(''));
}
{
var G__16957 = seq__16920_16952;
var G__16958 = chunk__16921_16953;
var G__16959 = count__16922_16954;
var G__16960 = (i__16923_16955 + 1);
seq__16920_16952 = G__16957;
chunk__16921_16953 = G__16958;
count__16922_16954 = G__16959;
i__16923_16955 = G__16960;
continue;
}
} else
{var temp__4092__auto___16961 = cljs.core.seq.call(null,seq__16920_16952);if(temp__4092__auto___16961)
{var seq__16920_16962__$1 = temp__4092__auto___16961;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16920_16962__$1))
{var c__4191__auto___16963 = cljs.core.chunk_first.call(null,seq__16920_16962__$1);{
var G__16964 = cljs.core.chunk_rest.call(null,seq__16920_16962__$1);
var G__16965 = c__4191__auto___16963;
var G__16966 = cljs.core.count.call(null,c__4191__auto___16963);
var G__16967 = 0;
seq__16920_16952 = G__16964;
chunk__16921_16953 = G__16965;
count__16922_16954 = G__16966;
i__16923_16955 = G__16967;
continue;
}
} else
{var class_16968 = cljs.core.first.call(null,seq__16920_16962__$1);if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_16951,class_16968)))
{} else
{elem__$1.className = (((class_name_16951 === ""))?class_16968:[cljs.core.str(class_name_16951),cljs.core.str(" "),cljs.core.str(class_16968)].join(''));
}
{
var G__16969 = cljs.core.next.call(null,seq__16920_16962__$1);
var G__16970 = null;
var G__16971 = 0;
var G__16972 = 0;
seq__16920_16952 = G__16969;
chunk__16921_16953 = G__16970;
count__16922_16954 = G__16971;
i__16923_16955 = G__16972;
continue;
}
}
} else
{}
}
break;
}
}
} else
{}
return elem__$1;
});
var add_class_BANG___3 = (function() { 
var G__16973__delegate = function (elem,classes,more_classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__16924_16974 = cljs.core.seq.call(null,cljs.core.conj.call(null,more_classes,classes));var chunk__16925_16975 = null;var count__16926_16976 = 0;var i__16927_16977 = 0;while(true){
if((i__16927_16977 < count__16926_16976))
{var c_16978 = cljs.core._nth.call(null,chunk__16925_16975,i__16927_16977);add_class_BANG_.call(null,elem__$1,c_16978);
{
var G__16979 = seq__16924_16974;
var G__16980 = chunk__16925_16975;
var G__16981 = count__16926_16976;
var G__16982 = (i__16927_16977 + 1);
seq__16924_16974 = G__16979;
chunk__16925_16975 = G__16980;
count__16926_16976 = G__16981;
i__16927_16977 = G__16982;
continue;
}
} else
{var temp__4092__auto___16983 = cljs.core.seq.call(null,seq__16924_16974);if(temp__4092__auto___16983)
{var seq__16924_16984__$1 = temp__4092__auto___16983;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16924_16984__$1))
{var c__4191__auto___16985 = cljs.core.chunk_first.call(null,seq__16924_16984__$1);{
var G__16986 = cljs.core.chunk_rest.call(null,seq__16924_16984__$1);
var G__16987 = c__4191__auto___16985;
var G__16988 = cljs.core.count.call(null,c__4191__auto___16985);
var G__16989 = 0;
seq__16924_16974 = G__16986;
chunk__16925_16975 = G__16987;
count__16926_16976 = G__16988;
i__16927_16977 = G__16989;
continue;
}
} else
{var c_16990 = cljs.core.first.call(null,seq__16924_16984__$1);add_class_BANG_.call(null,elem__$1,c_16990);
{
var G__16991 = cljs.core.next.call(null,seq__16924_16984__$1);
var G__16992 = null;
var G__16993 = 0;
var G__16994 = 0;
seq__16924_16974 = G__16991;
chunk__16925_16975 = G__16992;
count__16926_16976 = G__16993;
i__16927_16977 = G__16994;
continue;
}
}
} else
{}
}
break;
}
return elem__$1;
};
var G__16973 = function (elem,classes,var_args){
var more_classes = null;if (arguments.length > 2) {
  more_classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__16973__delegate.call(this,elem,classes,more_classes);};
G__16973.cljs$lang$maxFixedArity = 2;
G__16973.cljs$lang$applyTo = (function (arglist__16995){
var elem = cljs.core.first(arglist__16995);
arglist__16995 = cljs.core.next(arglist__16995);
var classes = cljs.core.first(arglist__16995);
var more_classes = cljs.core.rest(arglist__16995);
return G__16973__delegate(elem,classes,more_classes);
});
G__16973.cljs$core$IFn$_invoke$arity$variadic = G__16973__delegate;
return G__16973;
})()
;
add_class_BANG_ = function(elem,classes,var_args){
var more_classes = var_args;
switch(arguments.length){
case 2:
return add_class_BANG___2.call(this,elem,classes);
default:
return add_class_BANG___3.cljs$core$IFn$_invoke$arity$variadic(elem,classes, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
add_class_BANG_.cljs$lang$maxFixedArity = 2;
add_class_BANG_.cljs$lang$applyTo = add_class_BANG___3.cljs$lang$applyTo;
add_class_BANG_.cljs$core$IFn$_invoke$arity$2 = add_class_BANG___2;
add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = add_class_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return add_class_BANG_;
})()
;
dommy.attrs.remove_class_str = (function remove_class_str(init_class_name,class$){var class_name = init_class_name;while(true){
var class_len = class_name.length;var temp__4090__auto__ = dommy.attrs.class_index.call(null,class_name,class$);if(cljs.core.truth_(temp__4090__auto__))
{var i = temp__4090__auto__;{
var G__16996 = (function (){var end = (i + class$.length);return [cljs.core.str((((end < class_len))?[cljs.core.str(class_name.substring(0,i)),cljs.core.str(class_name.substr((end + 1)))].join(''):class_name.substring(0,(i - 1))))].join('');
})();
class_name = G__16996;
continue;
}
} else
{return class_name;
}
break;
}
});
/**
* remove class from and returns `elem`
* @param {...*} var_args
*/
dommy.attrs.remove_class_BANG_ = (function() {
var remove_class_BANG_ = null;
var remove_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var class$__$1 = cljs.core.name.call(null,class$);var temp__4090__auto___17005 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___17005))
{var class_list_17006 = temp__4090__auto___17005;class_list_17006.remove(class$__$1);
} else
{var class_name_17007 = elem__$1.className;var new_class_name_17008 = dommy.attrs.remove_class_str.call(null,class_name_17007,class$__$1);if((class_name_17007 === new_class_name_17008))
{} else
{elem__$1.className = new_class_name_17008;
}
}
return elem__$1;
});
var remove_class_BANG___3 = (function() { 
var G__17009__delegate = function (elem,class$,classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__17001 = cljs.core.seq.call(null,cljs.core.conj.call(null,classes,class$));var chunk__17002 = null;var count__17003 = 0;var i__17004 = 0;while(true){
if((i__17004 < count__17003))
{var c = cljs.core._nth.call(null,chunk__17002,i__17004);remove_class_BANG_.call(null,elem__$1,c);
{
var G__17010 = seq__17001;
var G__17011 = chunk__17002;
var G__17012 = count__17003;
var G__17013 = (i__17004 + 1);
seq__17001 = G__17010;
chunk__17002 = G__17011;
count__17003 = G__17012;
i__17004 = G__17013;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__17001);if(temp__4092__auto__)
{var seq__17001__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17001__$1))
{var c__4191__auto__ = cljs.core.chunk_first.call(null,seq__17001__$1);{
var G__17014 = cljs.core.chunk_rest.call(null,seq__17001__$1);
var G__17015 = c__4191__auto__;
var G__17016 = cljs.core.count.call(null,c__4191__auto__);
var G__17017 = 0;
seq__17001 = G__17014;
chunk__17002 = G__17015;
count__17003 = G__17016;
i__17004 = G__17017;
continue;
}
} else
{var c = cljs.core.first.call(null,seq__17001__$1);remove_class_BANG_.call(null,elem__$1,c);
{
var G__17018 = cljs.core.next.call(null,seq__17001__$1);
var G__17019 = null;
var G__17020 = 0;
var G__17021 = 0;
seq__17001 = G__17018;
chunk__17002 = G__17019;
count__17003 = G__17020;
i__17004 = G__17021;
continue;
}
}
} else
{return null;
}
}
break;
}
};
var G__17009 = function (elem,class$,var_args){
var classes = null;if (arguments.length > 2) {
  classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__17009__delegate.call(this,elem,class$,classes);};
G__17009.cljs$lang$maxFixedArity = 2;
G__17009.cljs$lang$applyTo = (function (arglist__17022){
var elem = cljs.core.first(arglist__17022);
arglist__17022 = cljs.core.next(arglist__17022);
var class$ = cljs.core.first(arglist__17022);
var classes = cljs.core.rest(arglist__17022);
return G__17009__delegate(elem,class$,classes);
});
G__17009.cljs$core$IFn$_invoke$arity$variadic = G__17009__delegate;
return G__17009;
})()
;
remove_class_BANG_ = function(elem,class$,var_args){
var classes = var_args;
switch(arguments.length){
case 2:
return remove_class_BANG___2.call(this,elem,class$);
default:
return remove_class_BANG___3.cljs$core$IFn$_invoke$arity$variadic(elem,class$, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_class_BANG_.cljs$lang$maxFixedArity = 2;
remove_class_BANG_.cljs$lang$applyTo = remove_class_BANG___3.cljs$lang$applyTo;
remove_class_BANG_.cljs$core$IFn$_invoke$arity$2 = remove_class_BANG___2;
remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = remove_class_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return remove_class_BANG_;
})()
;
/**
* (toggle-class! elem class) will add-class! if elem does not have class
* and remove-class! otherwise.
* (toggle-class! elem class add?) will add-class! if add? is truthy,
* otherwise it will remove-class!
*/
dommy.attrs.toggle_class_BANG_ = (function() {
var toggle_class_BANG_ = null;
var toggle_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var class$__$1 = cljs.core.name.call(null,class$);var temp__4090__auto___17023 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___17023))
{var class_list_17024 = temp__4090__auto___17023;class_list_17024.toggle(class$__$1);
} else
{toggle_class_BANG_.call(null,elem__$1,class$__$1,!(dommy.attrs.has_class_QMARK_.call(null,elem__$1,class$__$1)));
}
return elem__$1;
});
var toggle_class_BANG___3 = (function (elem,class$,add_QMARK_){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);if(add_QMARK_)
{dommy.attrs.add_class_BANG_.call(null,elem__$1,class$);
} else
{dommy.attrs.remove_class_BANG_.call(null,elem__$1,class$);
}
return elem__$1;
});
toggle_class_BANG_ = function(elem,class$,add_QMARK_){
switch(arguments.length){
case 2:
return toggle_class_BANG___2.call(this,elem,class$);
case 3:
return toggle_class_BANG___3.call(this,elem,class$,add_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
toggle_class_BANG_.cljs$core$IFn$_invoke$arity$2 = toggle_class_BANG___2;
toggle_class_BANG_.cljs$core$IFn$_invoke$arity$3 = toggle_class_BANG___3;
return toggle_class_BANG_;
})()
;
dommy.attrs.style_str = (function style_str(x){if(typeof x === 'string')
{return x;
} else
{return clojure.string.join.call(null," ",cljs.core.map.call(null,(function (p__17027){var vec__17028 = p__17027;var k = cljs.core.nth.call(null,vec__17028,0,null);var v = cljs.core.nth.call(null,vec__17028,1,null);return [cljs.core.str(cljs.core.name.call(null,k)),cljs.core.str(":"),cljs.core.str(cljs.core.name.call(null,v)),cljs.core.str(";")].join('');
}),x));
}
});
/**
* @param {...*} var_args
*/
dommy.attrs.set_style_BANG_ = (function() { 
var set_style_BANG___delegate = function (elem,kvs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"kvs","kvs",-1640424927,null)))))].join('')));
}
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var style = elem__$1.style;var seq__17035_17041 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,kvs));var chunk__17036_17042 = null;var count__17037_17043 = 0;var i__17038_17044 = 0;while(true){
if((i__17038_17044 < count__17037_17043))
{var vec__17039_17045 = cljs.core._nth.call(null,chunk__17036_17042,i__17038_17044);var k_17046 = cljs.core.nth.call(null,vec__17039_17045,0,null);var v_17047 = cljs.core.nth.call(null,vec__17039_17045,1,null);(style[cljs.core.name.call(null,k_17046)] = v_17047);
{
var G__17048 = seq__17035_17041;
var G__17049 = chunk__17036_17042;
var G__17050 = count__17037_17043;
var G__17051 = (i__17038_17044 + 1);
seq__17035_17041 = G__17048;
chunk__17036_17042 = G__17049;
count__17037_17043 = G__17050;
i__17038_17044 = G__17051;
continue;
}
} else
{var temp__4092__auto___17052 = cljs.core.seq.call(null,seq__17035_17041);if(temp__4092__auto___17052)
{var seq__17035_17053__$1 = temp__4092__auto___17052;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17035_17053__$1))
{var c__4191__auto___17054 = cljs.core.chunk_first.call(null,seq__17035_17053__$1);{
var G__17055 = cljs.core.chunk_rest.call(null,seq__17035_17053__$1);
var G__17056 = c__4191__auto___17054;
var G__17057 = cljs.core.count.call(null,c__4191__auto___17054);
var G__17058 = 0;
seq__17035_17041 = G__17055;
chunk__17036_17042 = G__17056;
count__17037_17043 = G__17057;
i__17038_17044 = G__17058;
continue;
}
} else
{var vec__17040_17059 = cljs.core.first.call(null,seq__17035_17053__$1);var k_17060 = cljs.core.nth.call(null,vec__17040_17059,0,null);var v_17061 = cljs.core.nth.call(null,vec__17040_17059,1,null);(style[cljs.core.name.call(null,k_17060)] = v_17061);
{
var G__17062 = cljs.core.next.call(null,seq__17035_17053__$1);
var G__17063 = null;
var G__17064 = 0;
var G__17065 = 0;
seq__17035_17041 = G__17062;
chunk__17036_17042 = G__17063;
count__17037_17043 = G__17064;
i__17038_17044 = G__17065;
continue;
}
}
} else
{}
}
break;
}
return elem__$1;
};
var set_style_BANG_ = function (elem,var_args){
var kvs = null;if (arguments.length > 1) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return set_style_BANG___delegate.call(this,elem,kvs);};
set_style_BANG_.cljs$lang$maxFixedArity = 1;
set_style_BANG_.cljs$lang$applyTo = (function (arglist__17066){
var elem = cljs.core.first(arglist__17066);
var kvs = cljs.core.rest(arglist__17066);
return set_style_BANG___delegate(elem,kvs);
});
set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_style_BANG___delegate;
return set_style_BANG_;
})()
;
dommy.attrs.style = (function style(elem,k){if(cljs.core.truth_(k))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"k","k",-1640531420,null)))].join('')));
}
return (window.getComputedStyle(dommy.template.__GT_node_like.call(null,elem))[cljs.core.name.call(null,k)]);
});
/**
* @param {...*} var_args
*/
dommy.attrs.set_px_BANG_ = (function() { 
var set_px_BANG___delegate = function (elem,kvs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"kvs","kvs",-1640424927,null)))))].join('')));
}
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__17073_17079 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,kvs));var chunk__17074_17080 = null;var count__17075_17081 = 0;var i__17076_17082 = 0;while(true){
if((i__17076_17082 < count__17075_17081))
{var vec__17077_17083 = cljs.core._nth.call(null,chunk__17074_17080,i__17076_17082);var k_17084 = cljs.core.nth.call(null,vec__17077_17083,0,null);var v_17085 = cljs.core.nth.call(null,vec__17077_17083,1,null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_17084,[cljs.core.str(v_17085),cljs.core.str("px")].join(''));
{
var G__17086 = seq__17073_17079;
var G__17087 = chunk__17074_17080;
var G__17088 = count__17075_17081;
var G__17089 = (i__17076_17082 + 1);
seq__17073_17079 = G__17086;
chunk__17074_17080 = G__17087;
count__17075_17081 = G__17088;
i__17076_17082 = G__17089;
continue;
}
} else
{var temp__4092__auto___17090 = cljs.core.seq.call(null,seq__17073_17079);if(temp__4092__auto___17090)
{var seq__17073_17091__$1 = temp__4092__auto___17090;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17073_17091__$1))
{var c__4191__auto___17092 = cljs.core.chunk_first.call(null,seq__17073_17091__$1);{
var G__17093 = cljs.core.chunk_rest.call(null,seq__17073_17091__$1);
var G__17094 = c__4191__auto___17092;
var G__17095 = cljs.core.count.call(null,c__4191__auto___17092);
var G__17096 = 0;
seq__17073_17079 = G__17093;
chunk__17074_17080 = G__17094;
count__17075_17081 = G__17095;
i__17076_17082 = G__17096;
continue;
}
} else
{var vec__17078_17097 = cljs.core.first.call(null,seq__17073_17091__$1);var k_17098 = cljs.core.nth.call(null,vec__17078_17097,0,null);var v_17099 = cljs.core.nth.call(null,vec__17078_17097,1,null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_17098,[cljs.core.str(v_17099),cljs.core.str("px")].join(''));
{
var G__17100 = cljs.core.next.call(null,seq__17073_17091__$1);
var G__17101 = null;
var G__17102 = 0;
var G__17103 = 0;
seq__17073_17079 = G__17100;
chunk__17074_17080 = G__17101;
count__17075_17081 = G__17102;
i__17076_17082 = G__17103;
continue;
}
}
} else
{}
}
break;
}
return elem__$1;
};
var set_px_BANG_ = function (elem,var_args){
var kvs = null;if (arguments.length > 1) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return set_px_BANG___delegate.call(this,elem,kvs);};
set_px_BANG_.cljs$lang$maxFixedArity = 1;
set_px_BANG_.cljs$lang$applyTo = (function (arglist__17104){
var elem = cljs.core.first(arglist__17104);
var kvs = cljs.core.rest(arglist__17104);
return set_px_BANG___delegate(elem,kvs);
});
set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_px_BANG___delegate;
return set_px_BANG_;
})()
;
dommy.attrs.px = (function px(elem,k){var pixels = dommy.attrs.style.call(null,dommy.template.__GT_node_like.call(null,elem),k);if(cljs.core.seq.call(null,pixels))
{return parseInt(pixels);
} else
{return null;
}
});
/**
* Sets dom attributes on and returns `elem`.
* Attributes without values will be set to "true":
* 
* (set-attr! elem :disabled)
* 
* With values, the function takes variadic kv pairs:
* 
* (set-attr! elem :id "some-id"
* :name "some-name")
* @param {...*} var_args
*/
dommy.attrs.set_attr_BANG_ = (function() {
var set_attr_BANG_ = null;
var set_attr_BANG___2 = (function (elem,k){return set_attr_BANG_.call(null,dommy.template.__GT_node_like.call(null,elem),k,"true");
});
var set_attr_BANG___3 = (function (elem,k,v){if(cljs.core.truth_(v))
{if(cljs.core.fn_QMARK_.call(null,v))
{var G__17113 = dommy.template.__GT_node_like.call(null,elem);(G__17113[cljs.core.name.call(null,k)] = v);
return G__17113;
} else
{var G__17114 = dommy.template.__GT_node_like.call(null,elem);G__17114.setAttribute(cljs.core.name.call(null,k),(((k === new cljs.core.Keyword(null,"style","style",1123684643)))?dommy.attrs.style_str.call(null,v):v));
return G__17114;
}
} else
{return null;
}
});
var set_attr_BANG___4 = (function() { 
var G__17121__delegate = function (elem,k,v,kvs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"kvs","kvs",-1640424927,null)))))].join('')));
}
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__17115_17122 = cljs.core.seq.call(null,cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.call(null,2,kvs)));var chunk__17116_17123 = null;var count__17117_17124 = 0;var i__17118_17125 = 0;while(true){
if((i__17118_17125 < count__17117_17124))
{var vec__17119_17126 = cljs.core._nth.call(null,chunk__17116_17123,i__17118_17125);var k_17127__$1 = cljs.core.nth.call(null,vec__17119_17126,0,null);var v_17128__$1 = cljs.core.nth.call(null,vec__17119_17126,1,null);set_attr_BANG_.call(null,elem__$1,k_17127__$1,v_17128__$1);
{
var G__17129 = seq__17115_17122;
var G__17130 = chunk__17116_17123;
var G__17131 = count__17117_17124;
var G__17132 = (i__17118_17125 + 1);
seq__17115_17122 = G__17129;
chunk__17116_17123 = G__17130;
count__17117_17124 = G__17131;
i__17118_17125 = G__17132;
continue;
}
} else
{var temp__4092__auto___17133 = cljs.core.seq.call(null,seq__17115_17122);if(temp__4092__auto___17133)
{var seq__17115_17134__$1 = temp__4092__auto___17133;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17115_17134__$1))
{var c__4191__auto___17135 = cljs.core.chunk_first.call(null,seq__17115_17134__$1);{
var G__17136 = cljs.core.chunk_rest.call(null,seq__17115_17134__$1);
var G__17137 = c__4191__auto___17135;
var G__17138 = cljs.core.count.call(null,c__4191__auto___17135);
var G__17139 = 0;
seq__17115_17122 = G__17136;
chunk__17116_17123 = G__17137;
count__17117_17124 = G__17138;
i__17118_17125 = G__17139;
continue;
}
} else
{var vec__17120_17140 = cljs.core.first.call(null,seq__17115_17134__$1);var k_17141__$1 = cljs.core.nth.call(null,vec__17120_17140,0,null);var v_17142__$1 = cljs.core.nth.call(null,vec__17120_17140,1,null);set_attr_BANG_.call(null,elem__$1,k_17141__$1,v_17142__$1);
{
var G__17143 = cljs.core.next.call(null,seq__17115_17134__$1);
var G__17144 = null;
var G__17145 = 0;
var G__17146 = 0;
seq__17115_17122 = G__17143;
chunk__17116_17123 = G__17144;
count__17117_17124 = G__17145;
i__17118_17125 = G__17146;
continue;
}
}
} else
{}
}
break;
}
return elem__$1;
};
var G__17121 = function (elem,k,v,var_args){
var kvs = null;if (arguments.length > 3) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__17121__delegate.call(this,elem,k,v,kvs);};
G__17121.cljs$lang$maxFixedArity = 3;
G__17121.cljs$lang$applyTo = (function (arglist__17147){
var elem = cljs.core.first(arglist__17147);
arglist__17147 = cljs.core.next(arglist__17147);
var k = cljs.core.first(arglist__17147);
arglist__17147 = cljs.core.next(arglist__17147);
var v = cljs.core.first(arglist__17147);
var kvs = cljs.core.rest(arglist__17147);
return G__17121__delegate(elem,k,v,kvs);
});
G__17121.cljs$core$IFn$_invoke$arity$variadic = G__17121__delegate;
return G__17121;
})()
;
set_attr_BANG_ = function(elem,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case 2:
return set_attr_BANG___2.call(this,elem,k);
case 3:
return set_attr_BANG___3.call(this,elem,k,v);
default:
return set_attr_BANG___4.cljs$core$IFn$_invoke$arity$variadic(elem,k,v, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
set_attr_BANG_.cljs$lang$maxFixedArity = 3;
set_attr_BANG_.cljs$lang$applyTo = set_attr_BANG___4.cljs$lang$applyTo;
set_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = set_attr_BANG___2;
set_attr_BANG_.cljs$core$IFn$_invoke$arity$3 = set_attr_BANG___3;
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___4.cljs$core$IFn$_invoke$arity$variadic;
return set_attr_BANG_;
})()
;
/**
* @param {...*} var_args
*/
dommy.attrs.remove_attr_BANG_ = (function() {
var remove_attr_BANG_ = null;
var remove_attr_BANG___2 = (function (elem,k){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",1108647146),null,new cljs.core.Keyword(null,"classes","classes",1867525016),null], null), null).call(null,k)))
{elem__$1.className = "";
} else
{elem__$1.removeAttribute(cljs.core.name.call(null,k));
}
return elem__$1;
});
var remove_attr_BANG___3 = (function() { 
var G__17156__delegate = function (elem,k,ks){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__17152_17157 = cljs.core.seq.call(null,cljs.core.cons.call(null,k,ks));var chunk__17153_17158 = null;var count__17154_17159 = 0;var i__17155_17160 = 0;while(true){
if((i__17155_17160 < count__17154_17159))
{var k_17161__$1 = cljs.core._nth.call(null,chunk__17153_17158,i__17155_17160);remove_attr_BANG_.call(null,elem__$1,k_17161__$1);
{
var G__17162 = seq__17152_17157;
var G__17163 = chunk__17153_17158;
var G__17164 = count__17154_17159;
var G__17165 = (i__17155_17160 + 1);
seq__17152_17157 = G__17162;
chunk__17153_17158 = G__17163;
count__17154_17159 = G__17164;
i__17155_17160 = G__17165;
continue;
}
} else
{var temp__4092__auto___17166 = cljs.core.seq.call(null,seq__17152_17157);if(temp__4092__auto___17166)
{var seq__17152_17167__$1 = temp__4092__auto___17166;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17152_17167__$1))
{var c__4191__auto___17168 = cljs.core.chunk_first.call(null,seq__17152_17167__$1);{
var G__17169 = cljs.core.chunk_rest.call(null,seq__17152_17167__$1);
var G__17170 = c__4191__auto___17168;
var G__17171 = cljs.core.count.call(null,c__4191__auto___17168);
var G__17172 = 0;
seq__17152_17157 = G__17169;
chunk__17153_17158 = G__17170;
count__17154_17159 = G__17171;
i__17155_17160 = G__17172;
continue;
}
} else
{var k_17173__$1 = cljs.core.first.call(null,seq__17152_17167__$1);remove_attr_BANG_.call(null,elem__$1,k_17173__$1);
{
var G__17174 = cljs.core.next.call(null,seq__17152_17167__$1);
var G__17175 = null;
var G__17176 = 0;
var G__17177 = 0;
seq__17152_17157 = G__17174;
chunk__17153_17158 = G__17175;
count__17154_17159 = G__17176;
i__17155_17160 = G__17177;
continue;
}
}
} else
{}
}
break;
}
return elem__$1;
};
var G__17156 = function (elem,k,var_args){
var ks = null;if (arguments.length > 2) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__17156__delegate.call(this,elem,k,ks);};
G__17156.cljs$lang$maxFixedArity = 2;
G__17156.cljs$lang$applyTo = (function (arglist__17178){
var elem = cljs.core.first(arglist__17178);
arglist__17178 = cljs.core.next(arglist__17178);
var k = cljs.core.first(arglist__17178);
var ks = cljs.core.rest(arglist__17178);
return G__17156__delegate(elem,k,ks);
});
G__17156.cljs$core$IFn$_invoke$arity$variadic = G__17156__delegate;
return G__17156;
})()
;
remove_attr_BANG_ = function(elem,k,var_args){
var ks = var_args;
switch(arguments.length){
case 2:
return remove_attr_BANG___2.call(this,elem,k);
default:
return remove_attr_BANG___3.cljs$core$IFn$_invoke$arity$variadic(elem,k, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_attr_BANG_.cljs$lang$maxFixedArity = 2;
remove_attr_BANG_.cljs$lang$applyTo = remove_attr_BANG___3.cljs$lang$applyTo;
remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = remove_attr_BANG___2;
remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = remove_attr_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return remove_attr_BANG_;
})()
;
dommy.attrs.attr = (function attr(elem,k){if(cljs.core.truth_(k))
{return dommy.template.__GT_node_like.call(null,elem).getAttribute(cljs.core.name.call(null,k));
} else
{return null;
}
});
dommy.attrs.toggle_attr_BANG_ = (function() {
var toggle_attr_BANG_ = null;
var toggle_attr_BANG___2 = (function (elem,k){return toggle_attr_BANG_.call(null,elem,k,cljs.core.boolean$.call(null,dommy.attrs.attr.call(null,elem,k)));
});
var toggle_attr_BANG___3 = (function (elem,k,add_QMARK_){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);if(add_QMARK_)
{return dommy.attrs.set_attr_BANG_.call(null,elem__$1,k);
} else
{return dommy.attrs.remove_attr_BANG_.call(null,elem__$1,k);
}
});
toggle_attr_BANG_ = function(elem,k,add_QMARK_){
switch(arguments.length){
case 2:
return toggle_attr_BANG___2.call(this,elem,k);
case 3:
return toggle_attr_BANG___3.call(this,elem,k,add_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = toggle_attr_BANG___2;
toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$3 = toggle_attr_BANG___3;
return toggle_attr_BANG_;
})()
;
dommy.attrs.hidden_QMARK_ = (function hidden_QMARK_(elem){return ("none" === dommy.template.__GT_node_like.call(null,elem).style.display);
});
/**
* Display or hide the given `elem`. Takes an optional boolean `show?`
* indicating whether to show or hide `elem`.
*/
dommy.attrs.toggle_BANG_ = (function() {
var toggle_BANG_ = null;
var toggle_BANG___1 = (function (elem){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);toggle_BANG_.call(null,elem__$1,dommy.attrs.hidden_QMARK_.call(null,elem__$1));
return elem__$1;
});
var toggle_BANG___2 = (function (elem,show_QMARK_){var G__17180 = dommy.template.__GT_node_like.call(null,elem);G__17180.style.display = ((show_QMARK_)?"":"none");
return G__17180;
});
toggle_BANG_ = function(elem,show_QMARK_){
switch(arguments.length){
case 1:
return toggle_BANG___1.call(this,elem);
case 2:
return toggle_BANG___2.call(this,elem,show_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
toggle_BANG_.cljs$core$IFn$_invoke$arity$1 = toggle_BANG___1;
toggle_BANG_.cljs$core$IFn$_invoke$arity$2 = toggle_BANG___2;
return toggle_BANG_;
})()
;
dommy.attrs.hide_BANG_ = (function hide_BANG_(elem){var G__17182 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__17182,false);
return G__17182;
});
dommy.attrs.show_BANG_ = (function show_BANG_(elem){var G__17184 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__17184,true);
return G__17184;
});
/**
* Returns a map of the bounding client rect of `elem`
* as a map with [:top :left :right :bottom :width :height]
*/
dommy.attrs.bounding_client_rect = (function bounding_client_rect(elem){return cljs.core.js__GT_clj.call(null,(function (){var G__17186 = dommy.template.__GT_node_like.call(null,elem).getBoundingClientRect();(G__17186["constructor"] = Object);
return G__17186;
})(),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",4191781672),true);
});
dommy.attrs.scroll_into_view = (function scroll_into_view(elem,align_with_top_QMARK_){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var top = new cljs.core.Keyword(null,"top","top",1014019271).cljs$core$IFn$_invoke$arity$1(dommy.attrs.bounding_client_rect.call(null,elem__$1));if((window.innerHeight < (top + elem__$1.offsetHeight)))
{return elem__$1.scrollIntoView(align_with_top_QMARK_);
} else
{return null;
}
});

//# sourceMappingURL=attrs.js.map