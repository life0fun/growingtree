// Compiled by ClojureScript 0.0-2850 {}
goog.provide('dommy.attrs');
goog.require('cljs.core');
goog.require('clojure.string');
/**
* does class-name string have class starting at index idx.
* only will be used when Element::classList doesn't exist
*/
dommy.attrs.class_match_QMARK_ = (function class_match_QMARK_(class_name,class$,idx){
var and__3795__auto__ = ((idx === (0))) || ((" " === class_name.charAt((idx - (1)))));
if(and__3795__auto__){
var total_len = class_name.length;
var stop = (idx + class$.length);
if((stop <= total_len)){
return ((stop === total_len)) || ((" " === class_name.charAt(stop)));
} else {
return null;
}
} else {
return and__3795__auto__;
}
});
/**
* Finds the index of class in a space-delimited class-name
* only will be used when Element::classList doesn't exist
*/
dommy.attrs.class_index = (function class_index(class_name,class$){
var start_from = (0);
while(true){
var i = class_name.indexOf(class$,start_from);
if((i >= (0))){
if(dommy.attrs.class_match_QMARK_.call(null,class_name,class$,i)){
return i;
} else {
var G__33771 = (i + class$.length);
start_from = G__33771;
continue;
}
} else {
return null;
}
break;
}
});
/**
* Does an HTML element have a class. Uses Element::classList if
* available and otherwise does fast parse of className string
*/
dommy.attrs.has_class_QMARK_ = (function has_class_QMARK_(elem,class$){
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);
var class$__$1 = cljs.core.name.call(null,class$);
var temp__4124__auto__ = elem__$1.classList;
if(cljs.core.truth_(temp__4124__auto__)){
var class_list = temp__4124__auto__;
return class_list.contains(class$__$1);
} else {
var temp__4126__auto__ = elem__$1.className;
if(cljs.core.truth_(temp__4126__auto__)){
var class_name = temp__4126__auto__;
var temp__4126__auto____$1 = dommy.attrs.class_index.call(null,class_name,class$__$1);
if(cljs.core.truth_(temp__4126__auto____$1)){
var i = temp__4126__auto____$1;
return (i >= (0));
} else {
return null;
}
} else {
return null;
}
}
});
/**
* add class to element
* @param {...*} var_args
*/
dommy.attrs.add_class_BANG_ = (function() {
var add_class_BANG_ = null;
var add_class_BANG___2 = (function (elem,classes){
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);
var classes__$1 = clojure.string.trim.call(null,cljs.core.name.call(null,classes));
if(cljs.core.seq.call(null,classes__$1)){
var temp__4124__auto___33796 = elem__$1.classList;
if(cljs.core.truth_(temp__4124__auto___33796)){
var class_list_33797 = temp__4124__auto___33796;
var seq__33784_33798 = cljs.core.seq.call(null,classes__$1.split(/\s+/));
var chunk__33785_33799 = null;
var count__33786_33800 = (0);
var i__33787_33801 = (0);
while(true){
if((i__33787_33801 < count__33786_33800)){
var class_33802 = cljs.core._nth.call(null,chunk__33785_33799,i__33787_33801);
class_list_33797.add(class_33802);

var G__33803 = seq__33784_33798;
var G__33804 = chunk__33785_33799;
var G__33805 = count__33786_33800;
var G__33806 = (i__33787_33801 + (1));
seq__33784_33798 = G__33803;
chunk__33785_33799 = G__33804;
count__33786_33800 = G__33805;
i__33787_33801 = G__33806;
continue;
} else {
var temp__4126__auto___33807 = cljs.core.seq.call(null,seq__33784_33798);
if(temp__4126__auto___33807){
var seq__33784_33808__$1 = temp__4126__auto___33807;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33784_33808__$1)){
var c__4594__auto___33809 = cljs.core.chunk_first.call(null,seq__33784_33808__$1);
var G__33810 = cljs.core.chunk_rest.call(null,seq__33784_33808__$1);
var G__33811 = c__4594__auto___33809;
var G__33812 = cljs.core.count.call(null,c__4594__auto___33809);
var G__33813 = (0);
seq__33784_33798 = G__33810;
chunk__33785_33799 = G__33811;
count__33786_33800 = G__33812;
i__33787_33801 = G__33813;
continue;
} else {
var class_33814 = cljs.core.first.call(null,seq__33784_33808__$1);
class_list_33797.add(class_33814);

var G__33815 = cljs.core.next.call(null,seq__33784_33808__$1);
var G__33816 = null;
var G__33817 = (0);
var G__33818 = (0);
seq__33784_33798 = G__33815;
chunk__33785_33799 = G__33816;
count__33786_33800 = G__33817;
i__33787_33801 = G__33818;
continue;
}
} else {
}
}
break;
}
} else {
var class_name_33819 = elem__$1.className;
var seq__33788_33820 = cljs.core.seq.call(null,classes__$1.split(/\s+/));
var chunk__33789_33821 = null;
var count__33790_33822 = (0);
var i__33791_33823 = (0);
while(true){
if((i__33791_33823 < count__33790_33822)){
var class_33824 = cljs.core._nth.call(null,chunk__33789_33821,i__33791_33823);
if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_33819,class_33824))){
} else {
elem__$1.className = (((class_name_33819 === ""))?class_33824:[cljs.core.str(class_name_33819),cljs.core.str(" "),cljs.core.str(class_33824)].join(''));
}

var G__33825 = seq__33788_33820;
var G__33826 = chunk__33789_33821;
var G__33827 = count__33790_33822;
var G__33828 = (i__33791_33823 + (1));
seq__33788_33820 = G__33825;
chunk__33789_33821 = G__33826;
count__33790_33822 = G__33827;
i__33791_33823 = G__33828;
continue;
} else {
var temp__4126__auto___33829 = cljs.core.seq.call(null,seq__33788_33820);
if(temp__4126__auto___33829){
var seq__33788_33830__$1 = temp__4126__auto___33829;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33788_33830__$1)){
var c__4594__auto___33831 = cljs.core.chunk_first.call(null,seq__33788_33830__$1);
var G__33832 = cljs.core.chunk_rest.call(null,seq__33788_33830__$1);
var G__33833 = c__4594__auto___33831;
var G__33834 = cljs.core.count.call(null,c__4594__auto___33831);
var G__33835 = (0);
seq__33788_33820 = G__33832;
chunk__33789_33821 = G__33833;
count__33790_33822 = G__33834;
i__33791_33823 = G__33835;
continue;
} else {
var class_33836 = cljs.core.first.call(null,seq__33788_33830__$1);
if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_33819,class_33836))){
} else {
elem__$1.className = (((class_name_33819 === ""))?class_33836:[cljs.core.str(class_name_33819),cljs.core.str(" "),cljs.core.str(class_33836)].join(''));
}

var G__33837 = cljs.core.next.call(null,seq__33788_33830__$1);
var G__33838 = null;
var G__33839 = (0);
var G__33840 = (0);
seq__33788_33820 = G__33837;
chunk__33789_33821 = G__33838;
count__33790_33822 = G__33839;
i__33791_33823 = G__33840;
continue;
}
} else {
}
}
break;
}
}
} else {
}

return elem__$1;
});
var add_class_BANG___3 = (function() { 
var G__33841__delegate = function (elem,classes,more_classes){
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);
var seq__33792_33842 = cljs.core.seq.call(null,cljs.core.conj.call(null,more_classes,classes));
var chunk__33793_33843 = null;
var count__33794_33844 = (0);
var i__33795_33845 = (0);
while(true){
if((i__33795_33845 < count__33794_33844)){
var c_33846 = cljs.core._nth.call(null,chunk__33793_33843,i__33795_33845);
add_class_BANG_.call(null,elem__$1,c_33846);

var G__33847 = seq__33792_33842;
var G__33848 = chunk__33793_33843;
var G__33849 = count__33794_33844;
var G__33850 = (i__33795_33845 + (1));
seq__33792_33842 = G__33847;
chunk__33793_33843 = G__33848;
count__33794_33844 = G__33849;
i__33795_33845 = G__33850;
continue;
} else {
var temp__4126__auto___33851 = cljs.core.seq.call(null,seq__33792_33842);
if(temp__4126__auto___33851){
var seq__33792_33852__$1 = temp__4126__auto___33851;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33792_33852__$1)){
var c__4594__auto___33853 = cljs.core.chunk_first.call(null,seq__33792_33852__$1);
var G__33854 = cljs.core.chunk_rest.call(null,seq__33792_33852__$1);
var G__33855 = c__4594__auto___33853;
var G__33856 = cljs.core.count.call(null,c__4594__auto___33853);
var G__33857 = (0);
seq__33792_33842 = G__33854;
chunk__33793_33843 = G__33855;
count__33794_33844 = G__33856;
i__33795_33845 = G__33857;
continue;
} else {
var c_33858 = cljs.core.first.call(null,seq__33792_33852__$1);
add_class_BANG_.call(null,elem__$1,c_33858);

var G__33859 = cljs.core.next.call(null,seq__33792_33852__$1);
var G__33860 = null;
var G__33861 = (0);
var G__33862 = (0);
seq__33792_33842 = G__33859;
chunk__33793_33843 = G__33860;
count__33794_33844 = G__33861;
i__33795_33845 = G__33862;
continue;
}
} else {
}
}
break;
}

return elem__$1;
};
var G__33841 = function (elem,classes,var_args){
var more_classes = null;
if (arguments.length > 2) {
var G__33863__i = 0, G__33863__a = new Array(arguments.length -  2);
while (G__33863__i < G__33863__a.length) {G__33863__a[G__33863__i] = arguments[G__33863__i + 2]; ++G__33863__i;}
  more_classes = new cljs.core.IndexedSeq(G__33863__a,0);
} 
return G__33841__delegate.call(this,elem,classes,more_classes);};
G__33841.cljs$lang$maxFixedArity = 2;
G__33841.cljs$lang$applyTo = (function (arglist__33864){
var elem = cljs.core.first(arglist__33864);
arglist__33864 = cljs.core.next(arglist__33864);
var classes = cljs.core.first(arglist__33864);
var more_classes = cljs.core.rest(arglist__33864);
return G__33841__delegate(elem,classes,more_classes);
});
G__33841.cljs$core$IFn$_invoke$arity$variadic = G__33841__delegate;
return G__33841;
})()
;
add_class_BANG_ = function(elem,classes,var_args){
var more_classes = var_args;
switch(arguments.length){
case 2:
return add_class_BANG___2.call(this,elem,classes);
default:
var G__33865 = null;
if (arguments.length > 2) {
var G__33866__i = 0, G__33866__a = new Array(arguments.length -  2);
while (G__33866__i < G__33866__a.length) {G__33866__a[G__33866__i] = arguments[G__33866__i + 2]; ++G__33866__i;}
G__33865 = new cljs.core.IndexedSeq(G__33866__a,0);
}
return add_class_BANG___3.cljs$core$IFn$_invoke$arity$variadic(elem,classes, G__33865);
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
dommy.attrs.remove_class_str = (function remove_class_str(init_class_name,class$){
var class_name = init_class_name;
while(true){
var class_len = class_name.length;
var temp__4124__auto__ = dommy.attrs.class_index.call(null,class_name,class$);
if(cljs.core.truth_(temp__4124__auto__)){
var i = temp__4124__auto__;
var G__33867 = (function (){var end = (i + class$.length);
return [cljs.core.str((((end < class_len))?[cljs.core.str(class_name.substring((0),i)),cljs.core.str(class_name.substr((end + (1))))].join(''):class_name.substring((0),(i - (1)))))].join('');
})();
class_name = G__33867;
continue;
} else {
return class_name;
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
var remove_class_BANG___2 = (function (elem,class$){
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);
var class$__$1 = cljs.core.name.call(null,class$);
var temp__4124__auto___33876 = elem__$1.classList;
if(cljs.core.truth_(temp__4124__auto___33876)){
var class_list_33877 = temp__4124__auto___33876;
class_list_33877.remove(class$__$1);
} else {
var class_name_33878 = elem__$1.className;
var new_class_name_33879 = dommy.attrs.remove_class_str.call(null,class_name_33878,class$__$1);
if((class_name_33878 === new_class_name_33879)){
} else {
elem__$1.className = new_class_name_33879;
}
}

return elem__$1;
});
var remove_class_BANG___3 = (function() { 
var G__33880__delegate = function (elem,class$,classes){
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);
var seq__33872 = cljs.core.seq.call(null,cljs.core.conj.call(null,classes,class$));
var chunk__33873 = null;
var count__33874 = (0);
var i__33875 = (0);
while(true){
if((i__33875 < count__33874)){
var c = cljs.core._nth.call(null,chunk__33873,i__33875);
remove_class_BANG_.call(null,elem__$1,c);

var G__33881 = seq__33872;
var G__33882 = chunk__33873;
var G__33883 = count__33874;
var G__33884 = (i__33875 + (1));
seq__33872 = G__33881;
chunk__33873 = G__33882;
count__33874 = G__33883;
i__33875 = G__33884;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__33872);
if(temp__4126__auto__){
var seq__33872__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33872__$1)){
var c__4594__auto__ = cljs.core.chunk_first.call(null,seq__33872__$1);
var G__33885 = cljs.core.chunk_rest.call(null,seq__33872__$1);
var G__33886 = c__4594__auto__;
var G__33887 = cljs.core.count.call(null,c__4594__auto__);
var G__33888 = (0);
seq__33872 = G__33885;
chunk__33873 = G__33886;
count__33874 = G__33887;
i__33875 = G__33888;
continue;
} else {
var c = cljs.core.first.call(null,seq__33872__$1);
remove_class_BANG_.call(null,elem__$1,c);

var G__33889 = cljs.core.next.call(null,seq__33872__$1);
var G__33890 = null;
var G__33891 = (0);
var G__33892 = (0);
seq__33872 = G__33889;
chunk__33873 = G__33890;
count__33874 = G__33891;
i__33875 = G__33892;
continue;
}
} else {
return null;
}
}
break;
}
};
var G__33880 = function (elem,class$,var_args){
var classes = null;
if (arguments.length > 2) {
var G__33893__i = 0, G__33893__a = new Array(arguments.length -  2);
while (G__33893__i < G__33893__a.length) {G__33893__a[G__33893__i] = arguments[G__33893__i + 2]; ++G__33893__i;}
  classes = new cljs.core.IndexedSeq(G__33893__a,0);
} 
return G__33880__delegate.call(this,elem,class$,classes);};
G__33880.cljs$lang$maxFixedArity = 2;
G__33880.cljs$lang$applyTo = (function (arglist__33894){
var elem = cljs.core.first(arglist__33894);
arglist__33894 = cljs.core.next(arglist__33894);
var class$ = cljs.core.first(arglist__33894);
var classes = cljs.core.rest(arglist__33894);
return G__33880__delegate(elem,class$,classes);
});
G__33880.cljs$core$IFn$_invoke$arity$variadic = G__33880__delegate;
return G__33880;
})()
;
remove_class_BANG_ = function(elem,class$,var_args){
var classes = var_args;
switch(arguments.length){
case 2:
return remove_class_BANG___2.call(this,elem,class$);
default:
var G__33895 = null;
if (arguments.length > 2) {
var G__33896__i = 0, G__33896__a = new Array(arguments.length -  2);
while (G__33896__i < G__33896__a.length) {G__33896__a[G__33896__i] = arguments[G__33896__i + 2]; ++G__33896__i;}
G__33895 = new cljs.core.IndexedSeq(G__33896__a,0);
}
return remove_class_BANG___3.cljs$core$IFn$_invoke$arity$variadic(elem,class$, G__33895);
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
var toggle_class_BANG___2 = (function (elem,class$){
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);
var class$__$1 = cljs.core.name.call(null,class$);
var temp__4124__auto___33897 = elem__$1.classList;
if(cljs.core.truth_(temp__4124__auto___33897)){
var class_list_33898 = temp__4124__auto___33897;
class_list_33898.toggle(class$__$1);
} else {
toggle_class_BANG_.call(null,elem__$1,class$__$1,!(dommy.attrs.has_class_QMARK_.call(null,elem__$1,class$__$1)));
}

return elem__$1;
});
var toggle_class_BANG___3 = (function (elem,class$,add_QMARK_){
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);
if(add_QMARK_){
dommy.attrs.add_class_BANG_.call(null,elem__$1,class$);
} else {
dommy.attrs.remove_class_BANG_.call(null,elem__$1,class$);
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
dommy.attrs.style_str = (function style_str(x){
if(typeof x === 'string'){
return x;
} else {
return clojure.string.join.call(null," ",cljs.core.map.call(null,(function (p__33901){
var vec__33902 = p__33901;
var k = cljs.core.nth.call(null,vec__33902,(0),null);
var v = cljs.core.nth.call(null,vec__33902,(1),null);
return [cljs.core.str(cljs.core.name.call(null,k)),cljs.core.str(":"),cljs.core.str(cljs.core.name.call(null,v)),cljs.core.str(";")].join('');
}),x));
}
});
/**
* @param {...*} var_args
*/
dommy.attrs.set_style_BANG_ = (function() { 
var set_style_BANG___delegate = function (elem,kvs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null)))))].join('')));
}

var elem__$1 = dommy.template.__GT_node_like.call(null,elem);
var style = elem__$1.style;
var seq__33909_33915 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),kvs));
var chunk__33910_33916 = null;
var count__33911_33917 = (0);
var i__33912_33918 = (0);
while(true){
if((i__33912_33918 < count__33911_33917)){
var vec__33913_33919 = cljs.core._nth.call(null,chunk__33910_33916,i__33912_33918);
var k_33920 = cljs.core.nth.call(null,vec__33913_33919,(0),null);
var v_33921 = cljs.core.nth.call(null,vec__33913_33919,(1),null);
(style[cljs.core.name.call(null,k_33920)] = v_33921);

var G__33922 = seq__33909_33915;
var G__33923 = chunk__33910_33916;
var G__33924 = count__33911_33917;
var G__33925 = (i__33912_33918 + (1));
seq__33909_33915 = G__33922;
chunk__33910_33916 = G__33923;
count__33911_33917 = G__33924;
i__33912_33918 = G__33925;
continue;
} else {
var temp__4126__auto___33926 = cljs.core.seq.call(null,seq__33909_33915);
if(temp__4126__auto___33926){
var seq__33909_33927__$1 = temp__4126__auto___33926;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33909_33927__$1)){
var c__4594__auto___33928 = cljs.core.chunk_first.call(null,seq__33909_33927__$1);
var G__33929 = cljs.core.chunk_rest.call(null,seq__33909_33927__$1);
var G__33930 = c__4594__auto___33928;
var G__33931 = cljs.core.count.call(null,c__4594__auto___33928);
var G__33932 = (0);
seq__33909_33915 = G__33929;
chunk__33910_33916 = G__33930;
count__33911_33917 = G__33931;
i__33912_33918 = G__33932;
continue;
} else {
var vec__33914_33933 = cljs.core.first.call(null,seq__33909_33927__$1);
var k_33934 = cljs.core.nth.call(null,vec__33914_33933,(0),null);
var v_33935 = cljs.core.nth.call(null,vec__33914_33933,(1),null);
(style[cljs.core.name.call(null,k_33934)] = v_33935);

var G__33936 = cljs.core.next.call(null,seq__33909_33927__$1);
var G__33937 = null;
var G__33938 = (0);
var G__33939 = (0);
seq__33909_33915 = G__33936;
chunk__33910_33916 = G__33937;
count__33911_33917 = G__33938;
i__33912_33918 = G__33939;
continue;
}
} else {
}
}
break;
}

return elem__$1;
};
var set_style_BANG_ = function (elem,var_args){
var kvs = null;
if (arguments.length > 1) {
var G__33940__i = 0, G__33940__a = new Array(arguments.length -  1);
while (G__33940__i < G__33940__a.length) {G__33940__a[G__33940__i] = arguments[G__33940__i + 1]; ++G__33940__i;}
  kvs = new cljs.core.IndexedSeq(G__33940__a,0);
} 
return set_style_BANG___delegate.call(this,elem,kvs);};
set_style_BANG_.cljs$lang$maxFixedArity = 1;
set_style_BANG_.cljs$lang$applyTo = (function (arglist__33941){
var elem = cljs.core.first(arglist__33941);
var kvs = cljs.core.rest(arglist__33941);
return set_style_BANG___delegate(elem,kvs);
});
set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_style_BANG___delegate;
return set_style_BANG_;
})()
;
dommy.attrs.style = (function style(elem,k){
if(cljs.core.truth_(k)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"k","k",-505765866,null)))].join('')));
}

return (window.getComputedStyle(dommy.template.__GT_node_like.call(null,elem))[cljs.core.name.call(null,k)]);
});
/**
* @param {...*} var_args
*/
dommy.attrs.set_px_BANG_ = (function() { 
var set_px_BANG___delegate = function (elem,kvs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null)))))].join('')));
}

var elem__$1 = dommy.template.__GT_node_like.call(null,elem);
var seq__33948_33954 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),kvs));
var chunk__33949_33955 = null;
var count__33950_33956 = (0);
var i__33951_33957 = (0);
while(true){
if((i__33951_33957 < count__33950_33956)){
var vec__33952_33958 = cljs.core._nth.call(null,chunk__33949_33955,i__33951_33957);
var k_33959 = cljs.core.nth.call(null,vec__33952_33958,(0),null);
var v_33960 = cljs.core.nth.call(null,vec__33952_33958,(1),null);
dommy.attrs.set_style_BANG_.call(null,elem__$1,k_33959,[cljs.core.str(v_33960),cljs.core.str("px")].join(''));

var G__33961 = seq__33948_33954;
var G__33962 = chunk__33949_33955;
var G__33963 = count__33950_33956;
var G__33964 = (i__33951_33957 + (1));
seq__33948_33954 = G__33961;
chunk__33949_33955 = G__33962;
count__33950_33956 = G__33963;
i__33951_33957 = G__33964;
continue;
} else {
var temp__4126__auto___33965 = cljs.core.seq.call(null,seq__33948_33954);
if(temp__4126__auto___33965){
var seq__33948_33966__$1 = temp__4126__auto___33965;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33948_33966__$1)){
var c__4594__auto___33967 = cljs.core.chunk_first.call(null,seq__33948_33966__$1);
var G__33968 = cljs.core.chunk_rest.call(null,seq__33948_33966__$1);
var G__33969 = c__4594__auto___33967;
var G__33970 = cljs.core.count.call(null,c__4594__auto___33967);
var G__33971 = (0);
seq__33948_33954 = G__33968;
chunk__33949_33955 = G__33969;
count__33950_33956 = G__33970;
i__33951_33957 = G__33971;
continue;
} else {
var vec__33953_33972 = cljs.core.first.call(null,seq__33948_33966__$1);
var k_33973 = cljs.core.nth.call(null,vec__33953_33972,(0),null);
var v_33974 = cljs.core.nth.call(null,vec__33953_33972,(1),null);
dommy.attrs.set_style_BANG_.call(null,elem__$1,k_33973,[cljs.core.str(v_33974),cljs.core.str("px")].join(''));

var G__33975 = cljs.core.next.call(null,seq__33948_33966__$1);
var G__33976 = null;
var G__33977 = (0);
var G__33978 = (0);
seq__33948_33954 = G__33975;
chunk__33949_33955 = G__33976;
count__33950_33956 = G__33977;
i__33951_33957 = G__33978;
continue;
}
} else {
}
}
break;
}

return elem__$1;
};
var set_px_BANG_ = function (elem,var_args){
var kvs = null;
if (arguments.length > 1) {
var G__33979__i = 0, G__33979__a = new Array(arguments.length -  1);
while (G__33979__i < G__33979__a.length) {G__33979__a[G__33979__i] = arguments[G__33979__i + 1]; ++G__33979__i;}
  kvs = new cljs.core.IndexedSeq(G__33979__a,0);
} 
return set_px_BANG___delegate.call(this,elem,kvs);};
set_px_BANG_.cljs$lang$maxFixedArity = 1;
set_px_BANG_.cljs$lang$applyTo = (function (arglist__33980){
var elem = cljs.core.first(arglist__33980);
var kvs = cljs.core.rest(arglist__33980);
return set_px_BANG___delegate(elem,kvs);
});
set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_px_BANG___delegate;
return set_px_BANG_;
})()
;
dommy.attrs.px = (function px(elem,k){
var pixels = dommy.attrs.style.call(null,dommy.template.__GT_node_like.call(null,elem),k);
if(cljs.core.seq.call(null,pixels)){
return parseInt(pixels);
} else {
return null;
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
var set_attr_BANG___2 = (function (elem,k){
return set_attr_BANG_.call(null,dommy.template.__GT_node_like.call(null,elem),k,"true");
});
var set_attr_BANG___3 = (function (elem,k,v){
if(cljs.core.truth_(v)){
if(cljs.core.fn_QMARK_.call(null,v)){
var G__33989 = dommy.template.__GT_node_like.call(null,elem);
(G__33989[cljs.core.name.call(null,k)] = v);

return G__33989;
} else {
var G__33990 = dommy.template.__GT_node_like.call(null,elem);
G__33990.setAttribute(cljs.core.name.call(null,k),(((k === new cljs.core.Keyword(null,"style","style",-496642736)))?dommy.attrs.style_str.call(null,v):v));

return G__33990;
}
} else {
return null;
}
});
var set_attr_BANG___4 = (function() { 
var G__33997__delegate = function (elem,k,v,kvs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null)))))].join('')));
}

var elem__$1 = dommy.template.__GT_node_like.call(null,elem);
var seq__33991_33998 = cljs.core.seq.call(null,cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.call(null,(2),kvs)));
var chunk__33992_33999 = null;
var count__33993_34000 = (0);
var i__33994_34001 = (0);
while(true){
if((i__33994_34001 < count__33993_34000)){
var vec__33995_34002 = cljs.core._nth.call(null,chunk__33992_33999,i__33994_34001);
var k_34003__$1 = cljs.core.nth.call(null,vec__33995_34002,(0),null);
var v_34004__$1 = cljs.core.nth.call(null,vec__33995_34002,(1),null);
set_attr_BANG_.call(null,elem__$1,k_34003__$1,v_34004__$1);

var G__34005 = seq__33991_33998;
var G__34006 = chunk__33992_33999;
var G__34007 = count__33993_34000;
var G__34008 = (i__33994_34001 + (1));
seq__33991_33998 = G__34005;
chunk__33992_33999 = G__34006;
count__33993_34000 = G__34007;
i__33994_34001 = G__34008;
continue;
} else {
var temp__4126__auto___34009 = cljs.core.seq.call(null,seq__33991_33998);
if(temp__4126__auto___34009){
var seq__33991_34010__$1 = temp__4126__auto___34009;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33991_34010__$1)){
var c__4594__auto___34011 = cljs.core.chunk_first.call(null,seq__33991_34010__$1);
var G__34012 = cljs.core.chunk_rest.call(null,seq__33991_34010__$1);
var G__34013 = c__4594__auto___34011;
var G__34014 = cljs.core.count.call(null,c__4594__auto___34011);
var G__34015 = (0);
seq__33991_33998 = G__34012;
chunk__33992_33999 = G__34013;
count__33993_34000 = G__34014;
i__33994_34001 = G__34015;
continue;
} else {
var vec__33996_34016 = cljs.core.first.call(null,seq__33991_34010__$1);
var k_34017__$1 = cljs.core.nth.call(null,vec__33996_34016,(0),null);
var v_34018__$1 = cljs.core.nth.call(null,vec__33996_34016,(1),null);
set_attr_BANG_.call(null,elem__$1,k_34017__$1,v_34018__$1);

var G__34019 = cljs.core.next.call(null,seq__33991_34010__$1);
var G__34020 = null;
var G__34021 = (0);
var G__34022 = (0);
seq__33991_33998 = G__34019;
chunk__33992_33999 = G__34020;
count__33993_34000 = G__34021;
i__33994_34001 = G__34022;
continue;
}
} else {
}
}
break;
}

return elem__$1;
};
var G__33997 = function (elem,k,v,var_args){
var kvs = null;
if (arguments.length > 3) {
var G__34023__i = 0, G__34023__a = new Array(arguments.length -  3);
while (G__34023__i < G__34023__a.length) {G__34023__a[G__34023__i] = arguments[G__34023__i + 3]; ++G__34023__i;}
  kvs = new cljs.core.IndexedSeq(G__34023__a,0);
} 
return G__33997__delegate.call(this,elem,k,v,kvs);};
G__33997.cljs$lang$maxFixedArity = 3;
G__33997.cljs$lang$applyTo = (function (arglist__34024){
var elem = cljs.core.first(arglist__34024);
arglist__34024 = cljs.core.next(arglist__34024);
var k = cljs.core.first(arglist__34024);
arglist__34024 = cljs.core.next(arglist__34024);
var v = cljs.core.first(arglist__34024);
var kvs = cljs.core.rest(arglist__34024);
return G__33997__delegate(elem,k,v,kvs);
});
G__33997.cljs$core$IFn$_invoke$arity$variadic = G__33997__delegate;
return G__33997;
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
var G__34025 = null;
if (arguments.length > 3) {
var G__34026__i = 0, G__34026__a = new Array(arguments.length -  3);
while (G__34026__i < G__34026__a.length) {G__34026__a[G__34026__i] = arguments[G__34026__i + 3]; ++G__34026__i;}
G__34025 = new cljs.core.IndexedSeq(G__34026__a,0);
}
return set_attr_BANG___4.cljs$core$IFn$_invoke$arity$variadic(elem,k,v, G__34025);
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
var remove_attr_BANG___2 = (function (elem,k){
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),null,new cljs.core.Keyword(null,"classes","classes",2037804510),null], null), null).call(null,k))){
elem__$1.className = "";
} else {
elem__$1.removeAttribute(cljs.core.name.call(null,k));
}

return elem__$1;
});
var remove_attr_BANG___3 = (function() { 
var G__34035__delegate = function (elem,k,ks){
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);
var seq__34031_34036 = cljs.core.seq.call(null,cljs.core.cons.call(null,k,ks));
var chunk__34032_34037 = null;
var count__34033_34038 = (0);
var i__34034_34039 = (0);
while(true){
if((i__34034_34039 < count__34033_34038)){
var k_34040__$1 = cljs.core._nth.call(null,chunk__34032_34037,i__34034_34039);
remove_attr_BANG_.call(null,elem__$1,k_34040__$1);

var G__34041 = seq__34031_34036;
var G__34042 = chunk__34032_34037;
var G__34043 = count__34033_34038;
var G__34044 = (i__34034_34039 + (1));
seq__34031_34036 = G__34041;
chunk__34032_34037 = G__34042;
count__34033_34038 = G__34043;
i__34034_34039 = G__34044;
continue;
} else {
var temp__4126__auto___34045 = cljs.core.seq.call(null,seq__34031_34036);
if(temp__4126__auto___34045){
var seq__34031_34046__$1 = temp__4126__auto___34045;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34031_34046__$1)){
var c__4594__auto___34047 = cljs.core.chunk_first.call(null,seq__34031_34046__$1);
var G__34048 = cljs.core.chunk_rest.call(null,seq__34031_34046__$1);
var G__34049 = c__4594__auto___34047;
var G__34050 = cljs.core.count.call(null,c__4594__auto___34047);
var G__34051 = (0);
seq__34031_34036 = G__34048;
chunk__34032_34037 = G__34049;
count__34033_34038 = G__34050;
i__34034_34039 = G__34051;
continue;
} else {
var k_34052__$1 = cljs.core.first.call(null,seq__34031_34046__$1);
remove_attr_BANG_.call(null,elem__$1,k_34052__$1);

var G__34053 = cljs.core.next.call(null,seq__34031_34046__$1);
var G__34054 = null;
var G__34055 = (0);
var G__34056 = (0);
seq__34031_34036 = G__34053;
chunk__34032_34037 = G__34054;
count__34033_34038 = G__34055;
i__34034_34039 = G__34056;
continue;
}
} else {
}
}
break;
}

return elem__$1;
};
var G__34035 = function (elem,k,var_args){
var ks = null;
if (arguments.length > 2) {
var G__34057__i = 0, G__34057__a = new Array(arguments.length -  2);
while (G__34057__i < G__34057__a.length) {G__34057__a[G__34057__i] = arguments[G__34057__i + 2]; ++G__34057__i;}
  ks = new cljs.core.IndexedSeq(G__34057__a,0);
} 
return G__34035__delegate.call(this,elem,k,ks);};
G__34035.cljs$lang$maxFixedArity = 2;
G__34035.cljs$lang$applyTo = (function (arglist__34058){
var elem = cljs.core.first(arglist__34058);
arglist__34058 = cljs.core.next(arglist__34058);
var k = cljs.core.first(arglist__34058);
var ks = cljs.core.rest(arglist__34058);
return G__34035__delegate(elem,k,ks);
});
G__34035.cljs$core$IFn$_invoke$arity$variadic = G__34035__delegate;
return G__34035;
})()
;
remove_attr_BANG_ = function(elem,k,var_args){
var ks = var_args;
switch(arguments.length){
case 2:
return remove_attr_BANG___2.call(this,elem,k);
default:
var G__34059 = null;
if (arguments.length > 2) {
var G__34060__i = 0, G__34060__a = new Array(arguments.length -  2);
while (G__34060__i < G__34060__a.length) {G__34060__a[G__34060__i] = arguments[G__34060__i + 2]; ++G__34060__i;}
G__34059 = new cljs.core.IndexedSeq(G__34060__a,0);
}
return remove_attr_BANG___3.cljs$core$IFn$_invoke$arity$variadic(elem,k, G__34059);
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
dommy.attrs.attr = (function attr(elem,k){
if(cljs.core.truth_(k)){
return dommy.template.__GT_node_like.call(null,elem).getAttribute(cljs.core.name.call(null,k));
} else {
return null;
}
});
dommy.attrs.toggle_attr_BANG_ = (function() {
var toggle_attr_BANG_ = null;
var toggle_attr_BANG___2 = (function (elem,k){
return toggle_attr_BANG_.call(null,elem,k,cljs.core.boolean$.call(null,dommy.attrs.attr.call(null,elem,k)));
});
var toggle_attr_BANG___3 = (function (elem,k,add_QMARK_){
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);
if(add_QMARK_){
return dommy.attrs.set_attr_BANG_.call(null,elem__$1,k);
} else {
return dommy.attrs.remove_attr_BANG_.call(null,elem__$1,k);
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
dommy.attrs.hidden_QMARK_ = (function hidden_QMARK_(elem){
return ("none" === dommy.template.__GT_node_like.call(null,elem).style.display);
});
/**
* Display or hide the given `elem`. Takes an optional boolean `show?`
* indicating whether to show or hide `elem`.
*/
dommy.attrs.toggle_BANG_ = (function() {
var toggle_BANG_ = null;
var toggle_BANG___1 = (function (elem){
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);
toggle_BANG_.call(null,elem__$1,dommy.attrs.hidden_QMARK_.call(null,elem__$1));

return elem__$1;
});
var toggle_BANG___2 = (function (elem,show_QMARK_){
var G__34062 = dommy.template.__GT_node_like.call(null,elem);
G__34062.style.display = ((show_QMARK_)?"":"none");

return G__34062;
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
dommy.attrs.hide_BANG_ = (function hide_BANG_(elem){
var G__34064 = dommy.template.__GT_node_like.call(null,elem);
dommy.attrs.toggle_BANG_.call(null,G__34064,false);

return G__34064;
});
dommy.attrs.show_BANG_ = (function show_BANG_(elem){
var G__34066 = dommy.template.__GT_node_like.call(null,elem);
dommy.attrs.toggle_BANG_.call(null,G__34066,true);

return G__34066;
});
/**
* Returns a map of the bounding client rect of `elem`
* as a map with [:top :left :right :bottom :width :height]
*/
dommy.attrs.bounding_client_rect = (function bounding_client_rect(elem){
return cljs.core.js__GT_clj.call(null,(function (){var G__34068 = dommy.template.__GT_node_like.call(null,elem).getBoundingClientRect();
(G__34068["constructor"] = Object);

return G__34068;
})(),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
});
dommy.attrs.scroll_into_view = (function scroll_into_view(elem,align_with_top_QMARK_){
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);
var top = new cljs.core.Keyword(null,"top","top",-1856271961).cljs$core$IFn$_invoke$arity$1(dommy.attrs.bounding_client_rect.call(null,elem__$1));
if((window.innerHeight < (top + elem__$1.offsetHeight))){
return elem__$1.scrollIntoView(align_with_top_QMARK_);
} else {
return null;
}
});

//# sourceMappingURL=attrs.js.map