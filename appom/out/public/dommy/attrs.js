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
var G__35220 = (i + class$.length);
start_from = G__35220;
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
var temp__4404__auto__ = elem__$1.classList;
if(cljs.core.truth_(temp__4404__auto__)){
var class_list = temp__4404__auto__;
return class_list.contains(class$__$1);
} else {
var temp__4406__auto__ = elem__$1.className;
if(cljs.core.truth_(temp__4406__auto__)){
var class_name = temp__4406__auto__;
var temp__4406__auto____$1 = dommy.attrs.class_index.call(null,class_name,class$__$1);
if(cljs.core.truth_(temp__4406__auto____$1)){
var i = temp__4406__auto____$1;
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
var temp__4404__auto___35245 = elem__$1.classList;
if(cljs.core.truth_(temp__4404__auto___35245)){
var class_list_35246 = temp__4404__auto___35245;
var seq__35233_35247 = cljs.core.seq.call(null,classes__$1.split(/\s+/));
var chunk__35234_35248 = null;
var count__35235_35249 = (0);
var i__35236_35250 = (0);
while(true){
if((i__35236_35250 < count__35235_35249)){
var class_35251 = cljs.core._nth.call(null,chunk__35234_35248,i__35236_35250);
class_list_35246.add(class_35251);

var G__35252 = seq__35233_35247;
var G__35253 = chunk__35234_35248;
var G__35254 = count__35235_35249;
var G__35255 = (i__35236_35250 + (1));
seq__35233_35247 = G__35252;
chunk__35234_35248 = G__35253;
count__35235_35249 = G__35254;
i__35236_35250 = G__35255;
continue;
} else {
var temp__4406__auto___35256 = cljs.core.seq.call(null,seq__35233_35247);
if(temp__4406__auto___35256){
var seq__35233_35257__$1 = temp__4406__auto___35256;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35233_35257__$1)){
var c__4594__auto___35258 = cljs.core.chunk_first.call(null,seq__35233_35257__$1);
var G__35259 = cljs.core.chunk_rest.call(null,seq__35233_35257__$1);
var G__35260 = c__4594__auto___35258;
var G__35261 = cljs.core.count.call(null,c__4594__auto___35258);
var G__35262 = (0);
seq__35233_35247 = G__35259;
chunk__35234_35248 = G__35260;
count__35235_35249 = G__35261;
i__35236_35250 = G__35262;
continue;
} else {
var class_35263 = cljs.core.first.call(null,seq__35233_35257__$1);
class_list_35246.add(class_35263);

var G__35264 = cljs.core.next.call(null,seq__35233_35257__$1);
var G__35265 = null;
var G__35266 = (0);
var G__35267 = (0);
seq__35233_35247 = G__35264;
chunk__35234_35248 = G__35265;
count__35235_35249 = G__35266;
i__35236_35250 = G__35267;
continue;
}
} else {
}
}
break;
}
} else {
var class_name_35268 = elem__$1.className;
var seq__35237_35269 = cljs.core.seq.call(null,classes__$1.split(/\s+/));
var chunk__35238_35270 = null;
var count__35239_35271 = (0);
var i__35240_35272 = (0);
while(true){
if((i__35240_35272 < count__35239_35271)){
var class_35273 = cljs.core._nth.call(null,chunk__35238_35270,i__35240_35272);
if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_35268,class_35273))){
} else {
elem__$1.className = (((class_name_35268 === ""))?class_35273:[cljs.core.str(class_name_35268),cljs.core.str(" "),cljs.core.str(class_35273)].join(''));
}

var G__35274 = seq__35237_35269;
var G__35275 = chunk__35238_35270;
var G__35276 = count__35239_35271;
var G__35277 = (i__35240_35272 + (1));
seq__35237_35269 = G__35274;
chunk__35238_35270 = G__35275;
count__35239_35271 = G__35276;
i__35240_35272 = G__35277;
continue;
} else {
var temp__4406__auto___35278 = cljs.core.seq.call(null,seq__35237_35269);
if(temp__4406__auto___35278){
var seq__35237_35279__$1 = temp__4406__auto___35278;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35237_35279__$1)){
var c__4594__auto___35280 = cljs.core.chunk_first.call(null,seq__35237_35279__$1);
var G__35281 = cljs.core.chunk_rest.call(null,seq__35237_35279__$1);
var G__35282 = c__4594__auto___35280;
var G__35283 = cljs.core.count.call(null,c__4594__auto___35280);
var G__35284 = (0);
seq__35237_35269 = G__35281;
chunk__35238_35270 = G__35282;
count__35239_35271 = G__35283;
i__35240_35272 = G__35284;
continue;
} else {
var class_35285 = cljs.core.first.call(null,seq__35237_35279__$1);
if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_35268,class_35285))){
} else {
elem__$1.className = (((class_name_35268 === ""))?class_35285:[cljs.core.str(class_name_35268),cljs.core.str(" "),cljs.core.str(class_35285)].join(''));
}

var G__35286 = cljs.core.next.call(null,seq__35237_35279__$1);
var G__35287 = null;
var G__35288 = (0);
var G__35289 = (0);
seq__35237_35269 = G__35286;
chunk__35238_35270 = G__35287;
count__35239_35271 = G__35288;
i__35240_35272 = G__35289;
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
var G__35290__delegate = function (elem,classes,more_classes){
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);
var seq__35241_35291 = cljs.core.seq.call(null,cljs.core.conj.call(null,more_classes,classes));
var chunk__35242_35292 = null;
var count__35243_35293 = (0);
var i__35244_35294 = (0);
while(true){
if((i__35244_35294 < count__35243_35293)){
var c_35295 = cljs.core._nth.call(null,chunk__35242_35292,i__35244_35294);
add_class_BANG_.call(null,elem__$1,c_35295);

var G__35296 = seq__35241_35291;
var G__35297 = chunk__35242_35292;
var G__35298 = count__35243_35293;
var G__35299 = (i__35244_35294 + (1));
seq__35241_35291 = G__35296;
chunk__35242_35292 = G__35297;
count__35243_35293 = G__35298;
i__35244_35294 = G__35299;
continue;
} else {
var temp__4406__auto___35300 = cljs.core.seq.call(null,seq__35241_35291);
if(temp__4406__auto___35300){
var seq__35241_35301__$1 = temp__4406__auto___35300;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35241_35301__$1)){
var c__4594__auto___35302 = cljs.core.chunk_first.call(null,seq__35241_35301__$1);
var G__35303 = cljs.core.chunk_rest.call(null,seq__35241_35301__$1);
var G__35304 = c__4594__auto___35302;
var G__35305 = cljs.core.count.call(null,c__4594__auto___35302);
var G__35306 = (0);
seq__35241_35291 = G__35303;
chunk__35242_35292 = G__35304;
count__35243_35293 = G__35305;
i__35244_35294 = G__35306;
continue;
} else {
var c_35307 = cljs.core.first.call(null,seq__35241_35301__$1);
add_class_BANG_.call(null,elem__$1,c_35307);

var G__35308 = cljs.core.next.call(null,seq__35241_35301__$1);
var G__35309 = null;
var G__35310 = (0);
var G__35311 = (0);
seq__35241_35291 = G__35308;
chunk__35242_35292 = G__35309;
count__35243_35293 = G__35310;
i__35244_35294 = G__35311;
continue;
}
} else {
}
}
break;
}

return elem__$1;
};
var G__35290 = function (elem,classes,var_args){
var more_classes = null;
if (arguments.length > 2) {
var G__35312__i = 0, G__35312__a = new Array(arguments.length -  2);
while (G__35312__i < G__35312__a.length) {G__35312__a[G__35312__i] = arguments[G__35312__i + 2]; ++G__35312__i;}
  more_classes = new cljs.core.IndexedSeq(G__35312__a,0);
} 
return G__35290__delegate.call(this,elem,classes,more_classes);};
G__35290.cljs$lang$maxFixedArity = 2;
G__35290.cljs$lang$applyTo = (function (arglist__35313){
var elem = cljs.core.first(arglist__35313);
arglist__35313 = cljs.core.next(arglist__35313);
var classes = cljs.core.first(arglist__35313);
var more_classes = cljs.core.rest(arglist__35313);
return G__35290__delegate(elem,classes,more_classes);
});
G__35290.cljs$core$IFn$_invoke$arity$variadic = G__35290__delegate;
return G__35290;
})()
;
add_class_BANG_ = function(elem,classes,var_args){
var more_classes = var_args;
switch(arguments.length){
case 2:
return add_class_BANG___2.call(this,elem,classes);
default:
var G__35314 = null;
if (arguments.length > 2) {
var G__35315__i = 0, G__35315__a = new Array(arguments.length -  2);
while (G__35315__i < G__35315__a.length) {G__35315__a[G__35315__i] = arguments[G__35315__i + 2]; ++G__35315__i;}
G__35314 = new cljs.core.IndexedSeq(G__35315__a,0);
}
return add_class_BANG___3.cljs$core$IFn$_invoke$arity$variadic(elem,classes, G__35314);
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
var temp__4404__auto__ = dommy.attrs.class_index.call(null,class_name,class$);
if(cljs.core.truth_(temp__4404__auto__)){
var i = temp__4404__auto__;
var G__35316 = (function (){var end = (i + class$.length);
return [cljs.core.str((((end < class_len))?[cljs.core.str(class_name.substring((0),i)),cljs.core.str(class_name.substr((end + (1))))].join(''):class_name.substring((0),(i - (1)))))].join('');
})();
class_name = G__35316;
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
var temp__4404__auto___35325 = elem__$1.classList;
if(cljs.core.truth_(temp__4404__auto___35325)){
var class_list_35326 = temp__4404__auto___35325;
class_list_35326.remove(class$__$1);
} else {
var class_name_35327 = elem__$1.className;
var new_class_name_35328 = dommy.attrs.remove_class_str.call(null,class_name_35327,class$__$1);
if((class_name_35327 === new_class_name_35328)){
} else {
elem__$1.className = new_class_name_35328;
}
}

return elem__$1;
});
var remove_class_BANG___3 = (function() { 
var G__35329__delegate = function (elem,class$,classes){
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);
var seq__35321 = cljs.core.seq.call(null,cljs.core.conj.call(null,classes,class$));
var chunk__35322 = null;
var count__35323 = (0);
var i__35324 = (0);
while(true){
if((i__35324 < count__35323)){
var c = cljs.core._nth.call(null,chunk__35322,i__35324);
remove_class_BANG_.call(null,elem__$1,c);

var G__35330 = seq__35321;
var G__35331 = chunk__35322;
var G__35332 = count__35323;
var G__35333 = (i__35324 + (1));
seq__35321 = G__35330;
chunk__35322 = G__35331;
count__35323 = G__35332;
i__35324 = G__35333;
continue;
} else {
var temp__4406__auto__ = cljs.core.seq.call(null,seq__35321);
if(temp__4406__auto__){
var seq__35321__$1 = temp__4406__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35321__$1)){
var c__4594__auto__ = cljs.core.chunk_first.call(null,seq__35321__$1);
var G__35334 = cljs.core.chunk_rest.call(null,seq__35321__$1);
var G__35335 = c__4594__auto__;
var G__35336 = cljs.core.count.call(null,c__4594__auto__);
var G__35337 = (0);
seq__35321 = G__35334;
chunk__35322 = G__35335;
count__35323 = G__35336;
i__35324 = G__35337;
continue;
} else {
var c = cljs.core.first.call(null,seq__35321__$1);
remove_class_BANG_.call(null,elem__$1,c);

var G__35338 = cljs.core.next.call(null,seq__35321__$1);
var G__35339 = null;
var G__35340 = (0);
var G__35341 = (0);
seq__35321 = G__35338;
chunk__35322 = G__35339;
count__35323 = G__35340;
i__35324 = G__35341;
continue;
}
} else {
return null;
}
}
break;
}
};
var G__35329 = function (elem,class$,var_args){
var classes = null;
if (arguments.length > 2) {
var G__35342__i = 0, G__35342__a = new Array(arguments.length -  2);
while (G__35342__i < G__35342__a.length) {G__35342__a[G__35342__i] = arguments[G__35342__i + 2]; ++G__35342__i;}
  classes = new cljs.core.IndexedSeq(G__35342__a,0);
} 
return G__35329__delegate.call(this,elem,class$,classes);};
G__35329.cljs$lang$maxFixedArity = 2;
G__35329.cljs$lang$applyTo = (function (arglist__35343){
var elem = cljs.core.first(arglist__35343);
arglist__35343 = cljs.core.next(arglist__35343);
var class$ = cljs.core.first(arglist__35343);
var classes = cljs.core.rest(arglist__35343);
return G__35329__delegate(elem,class$,classes);
});
G__35329.cljs$core$IFn$_invoke$arity$variadic = G__35329__delegate;
return G__35329;
})()
;
remove_class_BANG_ = function(elem,class$,var_args){
var classes = var_args;
switch(arguments.length){
case 2:
return remove_class_BANG___2.call(this,elem,class$);
default:
var G__35344 = null;
if (arguments.length > 2) {
var G__35345__i = 0, G__35345__a = new Array(arguments.length -  2);
while (G__35345__i < G__35345__a.length) {G__35345__a[G__35345__i] = arguments[G__35345__i + 2]; ++G__35345__i;}
G__35344 = new cljs.core.IndexedSeq(G__35345__a,0);
}
return remove_class_BANG___3.cljs$core$IFn$_invoke$arity$variadic(elem,class$, G__35344);
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
var temp__4404__auto___35346 = elem__$1.classList;
if(cljs.core.truth_(temp__4404__auto___35346)){
var class_list_35347 = temp__4404__auto___35346;
class_list_35347.toggle(class$__$1);
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
return clojure.string.join.call(null," ",cljs.core.map.call(null,(function (p__35350){
var vec__35351 = p__35350;
var k = cljs.core.nth.call(null,vec__35351,(0),null);
var v = cljs.core.nth.call(null,vec__35351,(1),null);
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
var seq__35358_35364 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),kvs));
var chunk__35359_35365 = null;
var count__35360_35366 = (0);
var i__35361_35367 = (0);
while(true){
if((i__35361_35367 < count__35360_35366)){
var vec__35362_35368 = cljs.core._nth.call(null,chunk__35359_35365,i__35361_35367);
var k_35369 = cljs.core.nth.call(null,vec__35362_35368,(0),null);
var v_35370 = cljs.core.nth.call(null,vec__35362_35368,(1),null);
(style[cljs.core.name.call(null,k_35369)] = v_35370);

var G__35371 = seq__35358_35364;
var G__35372 = chunk__35359_35365;
var G__35373 = count__35360_35366;
var G__35374 = (i__35361_35367 + (1));
seq__35358_35364 = G__35371;
chunk__35359_35365 = G__35372;
count__35360_35366 = G__35373;
i__35361_35367 = G__35374;
continue;
} else {
var temp__4406__auto___35375 = cljs.core.seq.call(null,seq__35358_35364);
if(temp__4406__auto___35375){
var seq__35358_35376__$1 = temp__4406__auto___35375;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35358_35376__$1)){
var c__4594__auto___35377 = cljs.core.chunk_first.call(null,seq__35358_35376__$1);
var G__35378 = cljs.core.chunk_rest.call(null,seq__35358_35376__$1);
var G__35379 = c__4594__auto___35377;
var G__35380 = cljs.core.count.call(null,c__4594__auto___35377);
var G__35381 = (0);
seq__35358_35364 = G__35378;
chunk__35359_35365 = G__35379;
count__35360_35366 = G__35380;
i__35361_35367 = G__35381;
continue;
} else {
var vec__35363_35382 = cljs.core.first.call(null,seq__35358_35376__$1);
var k_35383 = cljs.core.nth.call(null,vec__35363_35382,(0),null);
var v_35384 = cljs.core.nth.call(null,vec__35363_35382,(1),null);
(style[cljs.core.name.call(null,k_35383)] = v_35384);

var G__35385 = cljs.core.next.call(null,seq__35358_35376__$1);
var G__35386 = null;
var G__35387 = (0);
var G__35388 = (0);
seq__35358_35364 = G__35385;
chunk__35359_35365 = G__35386;
count__35360_35366 = G__35387;
i__35361_35367 = G__35388;
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
var G__35389__i = 0, G__35389__a = new Array(arguments.length -  1);
while (G__35389__i < G__35389__a.length) {G__35389__a[G__35389__i] = arguments[G__35389__i + 1]; ++G__35389__i;}
  kvs = new cljs.core.IndexedSeq(G__35389__a,0);
} 
return set_style_BANG___delegate.call(this,elem,kvs);};
set_style_BANG_.cljs$lang$maxFixedArity = 1;
set_style_BANG_.cljs$lang$applyTo = (function (arglist__35390){
var elem = cljs.core.first(arglist__35390);
var kvs = cljs.core.rest(arglist__35390);
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
var seq__35397_35403 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),kvs));
var chunk__35398_35404 = null;
var count__35399_35405 = (0);
var i__35400_35406 = (0);
while(true){
if((i__35400_35406 < count__35399_35405)){
var vec__35401_35407 = cljs.core._nth.call(null,chunk__35398_35404,i__35400_35406);
var k_35408 = cljs.core.nth.call(null,vec__35401_35407,(0),null);
var v_35409 = cljs.core.nth.call(null,vec__35401_35407,(1),null);
dommy.attrs.set_style_BANG_.call(null,elem__$1,k_35408,[cljs.core.str(v_35409),cljs.core.str("px")].join(''));

var G__35410 = seq__35397_35403;
var G__35411 = chunk__35398_35404;
var G__35412 = count__35399_35405;
var G__35413 = (i__35400_35406 + (1));
seq__35397_35403 = G__35410;
chunk__35398_35404 = G__35411;
count__35399_35405 = G__35412;
i__35400_35406 = G__35413;
continue;
} else {
var temp__4406__auto___35414 = cljs.core.seq.call(null,seq__35397_35403);
if(temp__4406__auto___35414){
var seq__35397_35415__$1 = temp__4406__auto___35414;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35397_35415__$1)){
var c__4594__auto___35416 = cljs.core.chunk_first.call(null,seq__35397_35415__$1);
var G__35417 = cljs.core.chunk_rest.call(null,seq__35397_35415__$1);
var G__35418 = c__4594__auto___35416;
var G__35419 = cljs.core.count.call(null,c__4594__auto___35416);
var G__35420 = (0);
seq__35397_35403 = G__35417;
chunk__35398_35404 = G__35418;
count__35399_35405 = G__35419;
i__35400_35406 = G__35420;
continue;
} else {
var vec__35402_35421 = cljs.core.first.call(null,seq__35397_35415__$1);
var k_35422 = cljs.core.nth.call(null,vec__35402_35421,(0),null);
var v_35423 = cljs.core.nth.call(null,vec__35402_35421,(1),null);
dommy.attrs.set_style_BANG_.call(null,elem__$1,k_35422,[cljs.core.str(v_35423),cljs.core.str("px")].join(''));

var G__35424 = cljs.core.next.call(null,seq__35397_35415__$1);
var G__35425 = null;
var G__35426 = (0);
var G__35427 = (0);
seq__35397_35403 = G__35424;
chunk__35398_35404 = G__35425;
count__35399_35405 = G__35426;
i__35400_35406 = G__35427;
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
var G__35428__i = 0, G__35428__a = new Array(arguments.length -  1);
while (G__35428__i < G__35428__a.length) {G__35428__a[G__35428__i] = arguments[G__35428__i + 1]; ++G__35428__i;}
  kvs = new cljs.core.IndexedSeq(G__35428__a,0);
} 
return set_px_BANG___delegate.call(this,elem,kvs);};
set_px_BANG_.cljs$lang$maxFixedArity = 1;
set_px_BANG_.cljs$lang$applyTo = (function (arglist__35429){
var elem = cljs.core.first(arglist__35429);
var kvs = cljs.core.rest(arglist__35429);
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
var G__35438 = dommy.template.__GT_node_like.call(null,elem);
(G__35438[cljs.core.name.call(null,k)] = v);

return G__35438;
} else {
var G__35439 = dommy.template.__GT_node_like.call(null,elem);
G__35439.setAttribute(cljs.core.name.call(null,k),(((k === new cljs.core.Keyword(null,"style","style",-496642736)))?dommy.attrs.style_str.call(null,v):v));

return G__35439;
}
} else {
return null;
}
});
var set_attr_BANG___4 = (function() { 
var G__35446__delegate = function (elem,k,v,kvs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null)))))].join('')));
}

var elem__$1 = dommy.template.__GT_node_like.call(null,elem);
var seq__35440_35447 = cljs.core.seq.call(null,cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.call(null,(2),kvs)));
var chunk__35441_35448 = null;
var count__35442_35449 = (0);
var i__35443_35450 = (0);
while(true){
if((i__35443_35450 < count__35442_35449)){
var vec__35444_35451 = cljs.core._nth.call(null,chunk__35441_35448,i__35443_35450);
var k_35452__$1 = cljs.core.nth.call(null,vec__35444_35451,(0),null);
var v_35453__$1 = cljs.core.nth.call(null,vec__35444_35451,(1),null);
set_attr_BANG_.call(null,elem__$1,k_35452__$1,v_35453__$1);

var G__35454 = seq__35440_35447;
var G__35455 = chunk__35441_35448;
var G__35456 = count__35442_35449;
var G__35457 = (i__35443_35450 + (1));
seq__35440_35447 = G__35454;
chunk__35441_35448 = G__35455;
count__35442_35449 = G__35456;
i__35443_35450 = G__35457;
continue;
} else {
var temp__4406__auto___35458 = cljs.core.seq.call(null,seq__35440_35447);
if(temp__4406__auto___35458){
var seq__35440_35459__$1 = temp__4406__auto___35458;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35440_35459__$1)){
var c__4594__auto___35460 = cljs.core.chunk_first.call(null,seq__35440_35459__$1);
var G__35461 = cljs.core.chunk_rest.call(null,seq__35440_35459__$1);
var G__35462 = c__4594__auto___35460;
var G__35463 = cljs.core.count.call(null,c__4594__auto___35460);
var G__35464 = (0);
seq__35440_35447 = G__35461;
chunk__35441_35448 = G__35462;
count__35442_35449 = G__35463;
i__35443_35450 = G__35464;
continue;
} else {
var vec__35445_35465 = cljs.core.first.call(null,seq__35440_35459__$1);
var k_35466__$1 = cljs.core.nth.call(null,vec__35445_35465,(0),null);
var v_35467__$1 = cljs.core.nth.call(null,vec__35445_35465,(1),null);
set_attr_BANG_.call(null,elem__$1,k_35466__$1,v_35467__$1);

var G__35468 = cljs.core.next.call(null,seq__35440_35459__$1);
var G__35469 = null;
var G__35470 = (0);
var G__35471 = (0);
seq__35440_35447 = G__35468;
chunk__35441_35448 = G__35469;
count__35442_35449 = G__35470;
i__35443_35450 = G__35471;
continue;
}
} else {
}
}
break;
}

return elem__$1;
};
var G__35446 = function (elem,k,v,var_args){
var kvs = null;
if (arguments.length > 3) {
var G__35472__i = 0, G__35472__a = new Array(arguments.length -  3);
while (G__35472__i < G__35472__a.length) {G__35472__a[G__35472__i] = arguments[G__35472__i + 3]; ++G__35472__i;}
  kvs = new cljs.core.IndexedSeq(G__35472__a,0);
} 
return G__35446__delegate.call(this,elem,k,v,kvs);};
G__35446.cljs$lang$maxFixedArity = 3;
G__35446.cljs$lang$applyTo = (function (arglist__35473){
var elem = cljs.core.first(arglist__35473);
arglist__35473 = cljs.core.next(arglist__35473);
var k = cljs.core.first(arglist__35473);
arglist__35473 = cljs.core.next(arglist__35473);
var v = cljs.core.first(arglist__35473);
var kvs = cljs.core.rest(arglist__35473);
return G__35446__delegate(elem,k,v,kvs);
});
G__35446.cljs$core$IFn$_invoke$arity$variadic = G__35446__delegate;
return G__35446;
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
var G__35474 = null;
if (arguments.length > 3) {
var G__35475__i = 0, G__35475__a = new Array(arguments.length -  3);
while (G__35475__i < G__35475__a.length) {G__35475__a[G__35475__i] = arguments[G__35475__i + 3]; ++G__35475__i;}
G__35474 = new cljs.core.IndexedSeq(G__35475__a,0);
}
return set_attr_BANG___4.cljs$core$IFn$_invoke$arity$variadic(elem,k,v, G__35474);
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
var G__35484__delegate = function (elem,k,ks){
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);
var seq__35480_35485 = cljs.core.seq.call(null,cljs.core.cons.call(null,k,ks));
var chunk__35481_35486 = null;
var count__35482_35487 = (0);
var i__35483_35488 = (0);
while(true){
if((i__35483_35488 < count__35482_35487)){
var k_35489__$1 = cljs.core._nth.call(null,chunk__35481_35486,i__35483_35488);
remove_attr_BANG_.call(null,elem__$1,k_35489__$1);

var G__35490 = seq__35480_35485;
var G__35491 = chunk__35481_35486;
var G__35492 = count__35482_35487;
var G__35493 = (i__35483_35488 + (1));
seq__35480_35485 = G__35490;
chunk__35481_35486 = G__35491;
count__35482_35487 = G__35492;
i__35483_35488 = G__35493;
continue;
} else {
var temp__4406__auto___35494 = cljs.core.seq.call(null,seq__35480_35485);
if(temp__4406__auto___35494){
var seq__35480_35495__$1 = temp__4406__auto___35494;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35480_35495__$1)){
var c__4594__auto___35496 = cljs.core.chunk_first.call(null,seq__35480_35495__$1);
var G__35497 = cljs.core.chunk_rest.call(null,seq__35480_35495__$1);
var G__35498 = c__4594__auto___35496;
var G__35499 = cljs.core.count.call(null,c__4594__auto___35496);
var G__35500 = (0);
seq__35480_35485 = G__35497;
chunk__35481_35486 = G__35498;
count__35482_35487 = G__35499;
i__35483_35488 = G__35500;
continue;
} else {
var k_35501__$1 = cljs.core.first.call(null,seq__35480_35495__$1);
remove_attr_BANG_.call(null,elem__$1,k_35501__$1);

var G__35502 = cljs.core.next.call(null,seq__35480_35495__$1);
var G__35503 = null;
var G__35504 = (0);
var G__35505 = (0);
seq__35480_35485 = G__35502;
chunk__35481_35486 = G__35503;
count__35482_35487 = G__35504;
i__35483_35488 = G__35505;
continue;
}
} else {
}
}
break;
}

return elem__$1;
};
var G__35484 = function (elem,k,var_args){
var ks = null;
if (arguments.length > 2) {
var G__35506__i = 0, G__35506__a = new Array(arguments.length -  2);
while (G__35506__i < G__35506__a.length) {G__35506__a[G__35506__i] = arguments[G__35506__i + 2]; ++G__35506__i;}
  ks = new cljs.core.IndexedSeq(G__35506__a,0);
} 
return G__35484__delegate.call(this,elem,k,ks);};
G__35484.cljs$lang$maxFixedArity = 2;
G__35484.cljs$lang$applyTo = (function (arglist__35507){
var elem = cljs.core.first(arglist__35507);
arglist__35507 = cljs.core.next(arglist__35507);
var k = cljs.core.first(arglist__35507);
var ks = cljs.core.rest(arglist__35507);
return G__35484__delegate(elem,k,ks);
});
G__35484.cljs$core$IFn$_invoke$arity$variadic = G__35484__delegate;
return G__35484;
})()
;
remove_attr_BANG_ = function(elem,k,var_args){
var ks = var_args;
switch(arguments.length){
case 2:
return remove_attr_BANG___2.call(this,elem,k);
default:
var G__35508 = null;
if (arguments.length > 2) {
var G__35509__i = 0, G__35509__a = new Array(arguments.length -  2);
while (G__35509__i < G__35509__a.length) {G__35509__a[G__35509__i] = arguments[G__35509__i + 2]; ++G__35509__i;}
G__35508 = new cljs.core.IndexedSeq(G__35509__a,0);
}
return remove_attr_BANG___3.cljs$core$IFn$_invoke$arity$variadic(elem,k, G__35508);
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
var G__35511 = dommy.template.__GT_node_like.call(null,elem);
G__35511.style.display = ((show_QMARK_)?"":"none");

return G__35511;
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
var G__35513 = dommy.template.__GT_node_like.call(null,elem);
dommy.attrs.toggle_BANG_.call(null,G__35513,false);

return G__35513;
});
dommy.attrs.show_BANG_ = (function show_BANG_(elem){
var G__35515 = dommy.template.__GT_node_like.call(null,elem);
dommy.attrs.toggle_BANG_.call(null,G__35515,true);

return G__35515;
});
/**
* Returns a map of the bounding client rect of `elem`
* as a map with [:top :left :right :bottom :width :height]
*/
dommy.attrs.bounding_client_rect = (function bounding_client_rect(elem){
return cljs.core.js__GT_clj.call(null,(function (){var G__35517 = dommy.template.__GT_node_like.call(null,elem).getBoundingClientRect();
(G__35517["constructor"] = Object);

return G__35517;
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