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
var G__17129 = (i + class$.length);
start_from = G__17129;
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
{var temp__4090__auto___17154 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___17154))
{var class_list_17155 = temp__4090__auto___17154;var seq__17142_17156 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__17143_17157 = null;var count__17144_17158 = 0;var i__17145_17159 = 0;while(true){
if((i__17145_17159 < count__17144_17158))
{var class_17160 = cljs.core._nth.call(null,chunk__17143_17157,i__17145_17159);class_list_17155.add(class_17160);
{
var G__17161 = seq__17142_17156;
var G__17162 = chunk__17143_17157;
var G__17163 = count__17144_17158;
var G__17164 = (i__17145_17159 + 1);
seq__17142_17156 = G__17161;
chunk__17143_17157 = G__17162;
count__17144_17158 = G__17163;
i__17145_17159 = G__17164;
continue;
}
} else
{var temp__4092__auto___17165 = cljs.core.seq.call(null,seq__17142_17156);if(temp__4092__auto___17165)
{var seq__17142_17166__$1 = temp__4092__auto___17165;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17142_17166__$1))
{var c__4191__auto___17167 = cljs.core.chunk_first.call(null,seq__17142_17166__$1);{
var G__17168 = cljs.core.chunk_rest.call(null,seq__17142_17166__$1);
var G__17169 = c__4191__auto___17167;
var G__17170 = cljs.core.count.call(null,c__4191__auto___17167);
var G__17171 = 0;
seq__17142_17156 = G__17168;
chunk__17143_17157 = G__17169;
count__17144_17158 = G__17170;
i__17145_17159 = G__17171;
continue;
}
} else
{var class_17172 = cljs.core.first.call(null,seq__17142_17166__$1);class_list_17155.add(class_17172);
{
var G__17173 = cljs.core.next.call(null,seq__17142_17166__$1);
var G__17174 = null;
var G__17175 = 0;
var G__17176 = 0;
seq__17142_17156 = G__17173;
chunk__17143_17157 = G__17174;
count__17144_17158 = G__17175;
i__17145_17159 = G__17176;
continue;
}
}
} else
{}
}
break;
}
} else
{var class_name_17177 = elem__$1.className;var seq__17146_17178 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__17147_17179 = null;var count__17148_17180 = 0;var i__17149_17181 = 0;while(true){
if((i__17149_17181 < count__17148_17180))
{var class_17182 = cljs.core._nth.call(null,chunk__17147_17179,i__17149_17181);if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_17177,class_17182)))
{} else
{elem__$1.className = (((class_name_17177 === ""))?class_17182:[cljs.core.str(class_name_17177),cljs.core.str(" "),cljs.core.str(class_17182)].join(''));
}
{
var G__17183 = seq__17146_17178;
var G__17184 = chunk__17147_17179;
var G__17185 = count__17148_17180;
var G__17186 = (i__17149_17181 + 1);
seq__17146_17178 = G__17183;
chunk__17147_17179 = G__17184;
count__17148_17180 = G__17185;
i__17149_17181 = G__17186;
continue;
}
} else
{var temp__4092__auto___17187 = cljs.core.seq.call(null,seq__17146_17178);if(temp__4092__auto___17187)
{var seq__17146_17188__$1 = temp__4092__auto___17187;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17146_17188__$1))
{var c__4191__auto___17189 = cljs.core.chunk_first.call(null,seq__17146_17188__$1);{
var G__17190 = cljs.core.chunk_rest.call(null,seq__17146_17188__$1);
var G__17191 = c__4191__auto___17189;
var G__17192 = cljs.core.count.call(null,c__4191__auto___17189);
var G__17193 = 0;
seq__17146_17178 = G__17190;
chunk__17147_17179 = G__17191;
count__17148_17180 = G__17192;
i__17149_17181 = G__17193;
continue;
}
} else
{var class_17194 = cljs.core.first.call(null,seq__17146_17188__$1);if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_17177,class_17194)))
{} else
{elem__$1.className = (((class_name_17177 === ""))?class_17194:[cljs.core.str(class_name_17177),cljs.core.str(" "),cljs.core.str(class_17194)].join(''));
}
{
var G__17195 = cljs.core.next.call(null,seq__17146_17188__$1);
var G__17196 = null;
var G__17197 = 0;
var G__17198 = 0;
seq__17146_17178 = G__17195;
chunk__17147_17179 = G__17196;
count__17148_17180 = G__17197;
i__17149_17181 = G__17198;
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
var G__17199__delegate = function (elem,classes,more_classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__17150_17200 = cljs.core.seq.call(null,cljs.core.conj.call(null,more_classes,classes));var chunk__17151_17201 = null;var count__17152_17202 = 0;var i__17153_17203 = 0;while(true){
if((i__17153_17203 < count__17152_17202))
{var c_17204 = cljs.core._nth.call(null,chunk__17151_17201,i__17153_17203);add_class_BANG_.call(null,elem__$1,c_17204);
{
var G__17205 = seq__17150_17200;
var G__17206 = chunk__17151_17201;
var G__17207 = count__17152_17202;
var G__17208 = (i__17153_17203 + 1);
seq__17150_17200 = G__17205;
chunk__17151_17201 = G__17206;
count__17152_17202 = G__17207;
i__17153_17203 = G__17208;
continue;
}
} else
{var temp__4092__auto___17209 = cljs.core.seq.call(null,seq__17150_17200);if(temp__4092__auto___17209)
{var seq__17150_17210__$1 = temp__4092__auto___17209;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17150_17210__$1))
{var c__4191__auto___17211 = cljs.core.chunk_first.call(null,seq__17150_17210__$1);{
var G__17212 = cljs.core.chunk_rest.call(null,seq__17150_17210__$1);
var G__17213 = c__4191__auto___17211;
var G__17214 = cljs.core.count.call(null,c__4191__auto___17211);
var G__17215 = 0;
seq__17150_17200 = G__17212;
chunk__17151_17201 = G__17213;
count__17152_17202 = G__17214;
i__17153_17203 = G__17215;
continue;
}
} else
{var c_17216 = cljs.core.first.call(null,seq__17150_17210__$1);add_class_BANG_.call(null,elem__$1,c_17216);
{
var G__17217 = cljs.core.next.call(null,seq__17150_17210__$1);
var G__17218 = null;
var G__17219 = 0;
var G__17220 = 0;
seq__17150_17200 = G__17217;
chunk__17151_17201 = G__17218;
count__17152_17202 = G__17219;
i__17153_17203 = G__17220;
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
var G__17199 = function (elem,classes,var_args){
var more_classes = null;if (arguments.length > 2) {
  more_classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__17199__delegate.call(this,elem,classes,more_classes);};
G__17199.cljs$lang$maxFixedArity = 2;
G__17199.cljs$lang$applyTo = (function (arglist__17221){
var elem = cljs.core.first(arglist__17221);
arglist__17221 = cljs.core.next(arglist__17221);
var classes = cljs.core.first(arglist__17221);
var more_classes = cljs.core.rest(arglist__17221);
return G__17199__delegate(elem,classes,more_classes);
});
G__17199.cljs$core$IFn$_invoke$arity$variadic = G__17199__delegate;
return G__17199;
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
var G__17222 = (function (){var end = (i + class$.length);return [cljs.core.str((((end < class_len))?[cljs.core.str(class_name.substring(0,i)),cljs.core.str(class_name.substr((end + 1)))].join(''):class_name.substring(0,(i - 1))))].join('');
})();
class_name = G__17222;
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
var remove_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var class$__$1 = cljs.core.name.call(null,class$);var temp__4090__auto___17231 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___17231))
{var class_list_17232 = temp__4090__auto___17231;class_list_17232.remove(class$__$1);
} else
{var class_name_17233 = elem__$1.className;var new_class_name_17234 = dommy.attrs.remove_class_str.call(null,class_name_17233,class$__$1);if((class_name_17233 === new_class_name_17234))
{} else
{elem__$1.className = new_class_name_17234;
}
}
return elem__$1;
});
var remove_class_BANG___3 = (function() { 
var G__17235__delegate = function (elem,class$,classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__17227 = cljs.core.seq.call(null,cljs.core.conj.call(null,classes,class$));var chunk__17228 = null;var count__17229 = 0;var i__17230 = 0;while(true){
if((i__17230 < count__17229))
{var c = cljs.core._nth.call(null,chunk__17228,i__17230);remove_class_BANG_.call(null,elem__$1,c);
{
var G__17236 = seq__17227;
var G__17237 = chunk__17228;
var G__17238 = count__17229;
var G__17239 = (i__17230 + 1);
seq__17227 = G__17236;
chunk__17228 = G__17237;
count__17229 = G__17238;
i__17230 = G__17239;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__17227);if(temp__4092__auto__)
{var seq__17227__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17227__$1))
{var c__4191__auto__ = cljs.core.chunk_first.call(null,seq__17227__$1);{
var G__17240 = cljs.core.chunk_rest.call(null,seq__17227__$1);
var G__17241 = c__4191__auto__;
var G__17242 = cljs.core.count.call(null,c__4191__auto__);
var G__17243 = 0;
seq__17227 = G__17240;
chunk__17228 = G__17241;
count__17229 = G__17242;
i__17230 = G__17243;
continue;
}
} else
{var c = cljs.core.first.call(null,seq__17227__$1);remove_class_BANG_.call(null,elem__$1,c);
{
var G__17244 = cljs.core.next.call(null,seq__17227__$1);
var G__17245 = null;
var G__17246 = 0;
var G__17247 = 0;
seq__17227 = G__17244;
chunk__17228 = G__17245;
count__17229 = G__17246;
i__17230 = G__17247;
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
var G__17235 = function (elem,class$,var_args){
var classes = null;if (arguments.length > 2) {
  classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__17235__delegate.call(this,elem,class$,classes);};
G__17235.cljs$lang$maxFixedArity = 2;
G__17235.cljs$lang$applyTo = (function (arglist__17248){
var elem = cljs.core.first(arglist__17248);
arglist__17248 = cljs.core.next(arglist__17248);
var class$ = cljs.core.first(arglist__17248);
var classes = cljs.core.rest(arglist__17248);
return G__17235__delegate(elem,class$,classes);
});
G__17235.cljs$core$IFn$_invoke$arity$variadic = G__17235__delegate;
return G__17235;
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
var toggle_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var class$__$1 = cljs.core.name.call(null,class$);var temp__4090__auto___17249 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___17249))
{var class_list_17250 = temp__4090__auto___17249;class_list_17250.toggle(class$__$1);
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
{return clojure.string.join.call(null," ",cljs.core.map.call(null,(function (p__17253){var vec__17254 = p__17253;var k = cljs.core.nth.call(null,vec__17254,0,null);var v = cljs.core.nth.call(null,vec__17254,1,null);return [cljs.core.str(cljs.core.name.call(null,k)),cljs.core.str(":"),cljs.core.str(cljs.core.name.call(null,v)),cljs.core.str(";")].join('');
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
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var style = elem__$1.style;var seq__17261_17267 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,kvs));var chunk__17262_17268 = null;var count__17263_17269 = 0;var i__17264_17270 = 0;while(true){
if((i__17264_17270 < count__17263_17269))
{var vec__17265_17271 = cljs.core._nth.call(null,chunk__17262_17268,i__17264_17270);var k_17272 = cljs.core.nth.call(null,vec__17265_17271,0,null);var v_17273 = cljs.core.nth.call(null,vec__17265_17271,1,null);(style[cljs.core.name.call(null,k_17272)] = v_17273);
{
var G__17274 = seq__17261_17267;
var G__17275 = chunk__17262_17268;
var G__17276 = count__17263_17269;
var G__17277 = (i__17264_17270 + 1);
seq__17261_17267 = G__17274;
chunk__17262_17268 = G__17275;
count__17263_17269 = G__17276;
i__17264_17270 = G__17277;
continue;
}
} else
{var temp__4092__auto___17278 = cljs.core.seq.call(null,seq__17261_17267);if(temp__4092__auto___17278)
{var seq__17261_17279__$1 = temp__4092__auto___17278;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17261_17279__$1))
{var c__4191__auto___17280 = cljs.core.chunk_first.call(null,seq__17261_17279__$1);{
var G__17281 = cljs.core.chunk_rest.call(null,seq__17261_17279__$1);
var G__17282 = c__4191__auto___17280;
var G__17283 = cljs.core.count.call(null,c__4191__auto___17280);
var G__17284 = 0;
seq__17261_17267 = G__17281;
chunk__17262_17268 = G__17282;
count__17263_17269 = G__17283;
i__17264_17270 = G__17284;
continue;
}
} else
{var vec__17266_17285 = cljs.core.first.call(null,seq__17261_17279__$1);var k_17286 = cljs.core.nth.call(null,vec__17266_17285,0,null);var v_17287 = cljs.core.nth.call(null,vec__17266_17285,1,null);(style[cljs.core.name.call(null,k_17286)] = v_17287);
{
var G__17288 = cljs.core.next.call(null,seq__17261_17279__$1);
var G__17289 = null;
var G__17290 = 0;
var G__17291 = 0;
seq__17261_17267 = G__17288;
chunk__17262_17268 = G__17289;
count__17263_17269 = G__17290;
i__17264_17270 = G__17291;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__17292){
var elem = cljs.core.first(arglist__17292);
var kvs = cljs.core.rest(arglist__17292);
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
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__17299_17305 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,kvs));var chunk__17300_17306 = null;var count__17301_17307 = 0;var i__17302_17308 = 0;while(true){
if((i__17302_17308 < count__17301_17307))
{var vec__17303_17309 = cljs.core._nth.call(null,chunk__17300_17306,i__17302_17308);var k_17310 = cljs.core.nth.call(null,vec__17303_17309,0,null);var v_17311 = cljs.core.nth.call(null,vec__17303_17309,1,null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_17310,[cljs.core.str(v_17311),cljs.core.str("px")].join(''));
{
var G__17312 = seq__17299_17305;
var G__17313 = chunk__17300_17306;
var G__17314 = count__17301_17307;
var G__17315 = (i__17302_17308 + 1);
seq__17299_17305 = G__17312;
chunk__17300_17306 = G__17313;
count__17301_17307 = G__17314;
i__17302_17308 = G__17315;
continue;
}
} else
{var temp__4092__auto___17316 = cljs.core.seq.call(null,seq__17299_17305);if(temp__4092__auto___17316)
{var seq__17299_17317__$1 = temp__4092__auto___17316;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17299_17317__$1))
{var c__4191__auto___17318 = cljs.core.chunk_first.call(null,seq__17299_17317__$1);{
var G__17319 = cljs.core.chunk_rest.call(null,seq__17299_17317__$1);
var G__17320 = c__4191__auto___17318;
var G__17321 = cljs.core.count.call(null,c__4191__auto___17318);
var G__17322 = 0;
seq__17299_17305 = G__17319;
chunk__17300_17306 = G__17320;
count__17301_17307 = G__17321;
i__17302_17308 = G__17322;
continue;
}
} else
{var vec__17304_17323 = cljs.core.first.call(null,seq__17299_17317__$1);var k_17324 = cljs.core.nth.call(null,vec__17304_17323,0,null);var v_17325 = cljs.core.nth.call(null,vec__17304_17323,1,null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_17324,[cljs.core.str(v_17325),cljs.core.str("px")].join(''));
{
var G__17326 = cljs.core.next.call(null,seq__17299_17317__$1);
var G__17327 = null;
var G__17328 = 0;
var G__17329 = 0;
seq__17299_17305 = G__17326;
chunk__17300_17306 = G__17327;
count__17301_17307 = G__17328;
i__17302_17308 = G__17329;
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
set_px_BANG_.cljs$lang$applyTo = (function (arglist__17330){
var elem = cljs.core.first(arglist__17330);
var kvs = cljs.core.rest(arglist__17330);
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
{var G__17339 = dommy.template.__GT_node_like.call(null,elem);(G__17339[cljs.core.name.call(null,k)] = v);
return G__17339;
} else
{var G__17340 = dommy.template.__GT_node_like.call(null,elem);G__17340.setAttribute(cljs.core.name.call(null,k),(((k === new cljs.core.Keyword(null,"style","style",1123684643)))?dommy.attrs.style_str.call(null,v):v));
return G__17340;
}
} else
{return null;
}
});
var set_attr_BANG___4 = (function() { 
var G__17347__delegate = function (elem,k,v,kvs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"kvs","kvs",-1640424927,null)))))].join('')));
}
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__17341_17348 = cljs.core.seq.call(null,cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.call(null,2,kvs)));var chunk__17342_17349 = null;var count__17343_17350 = 0;var i__17344_17351 = 0;while(true){
if((i__17344_17351 < count__17343_17350))
{var vec__17345_17352 = cljs.core._nth.call(null,chunk__17342_17349,i__17344_17351);var k_17353__$1 = cljs.core.nth.call(null,vec__17345_17352,0,null);var v_17354__$1 = cljs.core.nth.call(null,vec__17345_17352,1,null);set_attr_BANG_.call(null,elem__$1,k_17353__$1,v_17354__$1);
{
var G__17355 = seq__17341_17348;
var G__17356 = chunk__17342_17349;
var G__17357 = count__17343_17350;
var G__17358 = (i__17344_17351 + 1);
seq__17341_17348 = G__17355;
chunk__17342_17349 = G__17356;
count__17343_17350 = G__17357;
i__17344_17351 = G__17358;
continue;
}
} else
{var temp__4092__auto___17359 = cljs.core.seq.call(null,seq__17341_17348);if(temp__4092__auto___17359)
{var seq__17341_17360__$1 = temp__4092__auto___17359;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17341_17360__$1))
{var c__4191__auto___17361 = cljs.core.chunk_first.call(null,seq__17341_17360__$1);{
var G__17362 = cljs.core.chunk_rest.call(null,seq__17341_17360__$1);
var G__17363 = c__4191__auto___17361;
var G__17364 = cljs.core.count.call(null,c__4191__auto___17361);
var G__17365 = 0;
seq__17341_17348 = G__17362;
chunk__17342_17349 = G__17363;
count__17343_17350 = G__17364;
i__17344_17351 = G__17365;
continue;
}
} else
{var vec__17346_17366 = cljs.core.first.call(null,seq__17341_17360__$1);var k_17367__$1 = cljs.core.nth.call(null,vec__17346_17366,0,null);var v_17368__$1 = cljs.core.nth.call(null,vec__17346_17366,1,null);set_attr_BANG_.call(null,elem__$1,k_17367__$1,v_17368__$1);
{
var G__17369 = cljs.core.next.call(null,seq__17341_17360__$1);
var G__17370 = null;
var G__17371 = 0;
var G__17372 = 0;
seq__17341_17348 = G__17369;
chunk__17342_17349 = G__17370;
count__17343_17350 = G__17371;
i__17344_17351 = G__17372;
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
var G__17347 = function (elem,k,v,var_args){
var kvs = null;if (arguments.length > 3) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__17347__delegate.call(this,elem,k,v,kvs);};
G__17347.cljs$lang$maxFixedArity = 3;
G__17347.cljs$lang$applyTo = (function (arglist__17373){
var elem = cljs.core.first(arglist__17373);
arglist__17373 = cljs.core.next(arglist__17373);
var k = cljs.core.first(arglist__17373);
arglist__17373 = cljs.core.next(arglist__17373);
var v = cljs.core.first(arglist__17373);
var kvs = cljs.core.rest(arglist__17373);
return G__17347__delegate(elem,k,v,kvs);
});
G__17347.cljs$core$IFn$_invoke$arity$variadic = G__17347__delegate;
return G__17347;
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
var G__17382__delegate = function (elem,k,ks){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__17378_17383 = cljs.core.seq.call(null,cljs.core.cons.call(null,k,ks));var chunk__17379_17384 = null;var count__17380_17385 = 0;var i__17381_17386 = 0;while(true){
if((i__17381_17386 < count__17380_17385))
{var k_17387__$1 = cljs.core._nth.call(null,chunk__17379_17384,i__17381_17386);remove_attr_BANG_.call(null,elem__$1,k_17387__$1);
{
var G__17388 = seq__17378_17383;
var G__17389 = chunk__17379_17384;
var G__17390 = count__17380_17385;
var G__17391 = (i__17381_17386 + 1);
seq__17378_17383 = G__17388;
chunk__17379_17384 = G__17389;
count__17380_17385 = G__17390;
i__17381_17386 = G__17391;
continue;
}
} else
{var temp__4092__auto___17392 = cljs.core.seq.call(null,seq__17378_17383);if(temp__4092__auto___17392)
{var seq__17378_17393__$1 = temp__4092__auto___17392;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17378_17393__$1))
{var c__4191__auto___17394 = cljs.core.chunk_first.call(null,seq__17378_17393__$1);{
var G__17395 = cljs.core.chunk_rest.call(null,seq__17378_17393__$1);
var G__17396 = c__4191__auto___17394;
var G__17397 = cljs.core.count.call(null,c__4191__auto___17394);
var G__17398 = 0;
seq__17378_17383 = G__17395;
chunk__17379_17384 = G__17396;
count__17380_17385 = G__17397;
i__17381_17386 = G__17398;
continue;
}
} else
{var k_17399__$1 = cljs.core.first.call(null,seq__17378_17393__$1);remove_attr_BANG_.call(null,elem__$1,k_17399__$1);
{
var G__17400 = cljs.core.next.call(null,seq__17378_17393__$1);
var G__17401 = null;
var G__17402 = 0;
var G__17403 = 0;
seq__17378_17383 = G__17400;
chunk__17379_17384 = G__17401;
count__17380_17385 = G__17402;
i__17381_17386 = G__17403;
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
var G__17382 = function (elem,k,var_args){
var ks = null;if (arguments.length > 2) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__17382__delegate.call(this,elem,k,ks);};
G__17382.cljs$lang$maxFixedArity = 2;
G__17382.cljs$lang$applyTo = (function (arglist__17404){
var elem = cljs.core.first(arglist__17404);
arglist__17404 = cljs.core.next(arglist__17404);
var k = cljs.core.first(arglist__17404);
var ks = cljs.core.rest(arglist__17404);
return G__17382__delegate(elem,k,ks);
});
G__17382.cljs$core$IFn$_invoke$arity$variadic = G__17382__delegate;
return G__17382;
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
var toggle_BANG___2 = (function (elem,show_QMARK_){var G__17406 = dommy.template.__GT_node_like.call(null,elem);G__17406.style.display = ((show_QMARK_)?"":"none");
return G__17406;
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
dommy.attrs.hide_BANG_ = (function hide_BANG_(elem){var G__17408 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__17408,false);
return G__17408;
});
dommy.attrs.show_BANG_ = (function show_BANG_(elem){var G__17410 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__17410,true);
return G__17410;
});
/**
* Returns a map of the bounding client rect of `elem`
* as a map with [:top :left :right :bottom :width :height]
*/
dommy.attrs.bounding_client_rect = (function bounding_client_rect(elem){return cljs.core.js__GT_clj.call(null,(function (){var G__17412 = dommy.template.__GT_node_like.call(null,elem).getBoundingClientRect();(G__17412["constructor"] = Object);
return G__17412;
})(),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",4191781672),true);
});
dommy.attrs.scroll_into_view = (function scroll_into_view(elem,align_with_top_QMARK_){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var top = new cljs.core.Keyword(null,"top","top",1014019271).cljs$core$IFn$_invoke$arity$1(dommy.attrs.bounding_client_rect.call(null,elem__$1));if((window.innerHeight < (top + elem__$1.offsetHeight)))
{return elem__$1.scrollIntoView(align_with_top_QMARK_);
} else
{return null;
}
});

//# sourceMappingURL=attrs.js.map