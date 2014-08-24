// Compiled by ClojureScript 0.0-2277
goog.provide('dommy.attrs');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('clojure.string');
/**
* does class-name string have class starting at index idx.
* only will be used when Element::classList doesn't exist
*/
dommy.attrs.class_match_QMARK_ = (function class_match_QMARK_(class_name,class$,idx){var and__3531__auto__ = ((idx === (0))) || ((" " === class_name.charAt((idx - (1)))));if(and__3531__auto__)
{var total_len = class_name.length;var stop = (idx + class$.length);if((stop <= total_len))
{return ((stop === total_len)) || ((" " === class_name.charAt(stop)));
} else
{return null;
}
} else
{return and__3531__auto__;
}
});
/**
* Finds the index of class in a space-delimited class-name
* only will be used when Element::classList doesn't exist
*/
dommy.attrs.class_index = (function class_index(class_name,class$){var start_from = (0);while(true){
var i = class_name.indexOf(class$,start_from);if((i >= (0)))
{if(dommy.attrs.class_match_QMARK_.call(null,class_name,class$,i))
{return i;
} else
{{
var G__17525 = (i + class$.length);
start_from = G__17525;
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
dommy.attrs.has_class_QMARK_ = (function has_class_QMARK_(elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var class$__$1 = cljs.core.name.call(null,class$);var temp__4124__auto__ = elem__$1.classList;if(cljs.core.truth_(temp__4124__auto__))
{var class_list = temp__4124__auto__;return class_list.contains(class$__$1);
} else
{var temp__4126__auto__ = elem__$1.className;if(cljs.core.truth_(temp__4126__auto__))
{var class_name = temp__4126__auto__;var temp__4126__auto____$1 = dommy.attrs.class_index.call(null,class_name,class$__$1);if(cljs.core.truth_(temp__4126__auto____$1))
{var i = temp__4126__auto____$1;return (i >= (0));
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
{var temp__4124__auto___17550 = elem__$1.classList;if(cljs.core.truth_(temp__4124__auto___17550))
{var class_list_17551 = temp__4124__auto___17550;var seq__17538_17552 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__17539_17553 = null;var count__17540_17554 = (0);var i__17541_17555 = (0);while(true){
if((i__17541_17555 < count__17540_17554))
{var class_17556 = cljs.core._nth.call(null,chunk__17539_17553,i__17541_17555);class_list_17551.add(class_17556);
{
var G__17557 = seq__17538_17552;
var G__17558 = chunk__17539_17553;
var G__17559 = count__17540_17554;
var G__17560 = (i__17541_17555 + (1));
seq__17538_17552 = G__17557;
chunk__17539_17553 = G__17558;
count__17540_17554 = G__17559;
i__17541_17555 = G__17560;
continue;
}
} else
{var temp__4126__auto___17561 = cljs.core.seq.call(null,seq__17538_17552);if(temp__4126__auto___17561)
{var seq__17538_17562__$1 = temp__4126__auto___17561;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17538_17562__$1))
{var c__4299__auto___17563 = cljs.core.chunk_first.call(null,seq__17538_17562__$1);{
var G__17564 = cljs.core.chunk_rest.call(null,seq__17538_17562__$1);
var G__17565 = c__4299__auto___17563;
var G__17566 = cljs.core.count.call(null,c__4299__auto___17563);
var G__17567 = (0);
seq__17538_17552 = G__17564;
chunk__17539_17553 = G__17565;
count__17540_17554 = G__17566;
i__17541_17555 = G__17567;
continue;
}
} else
{var class_17568 = cljs.core.first.call(null,seq__17538_17562__$1);class_list_17551.add(class_17568);
{
var G__17569 = cljs.core.next.call(null,seq__17538_17562__$1);
var G__17570 = null;
var G__17571 = (0);
var G__17572 = (0);
seq__17538_17552 = G__17569;
chunk__17539_17553 = G__17570;
count__17540_17554 = G__17571;
i__17541_17555 = G__17572;
continue;
}
}
} else
{}
}
break;
}
} else
{var class_name_17573 = elem__$1.className;var seq__17542_17574 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__17543_17575 = null;var count__17544_17576 = (0);var i__17545_17577 = (0);while(true){
if((i__17545_17577 < count__17544_17576))
{var class_17578 = cljs.core._nth.call(null,chunk__17543_17575,i__17545_17577);if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_17573,class_17578)))
{} else
{elem__$1.className = (((class_name_17573 === ""))?class_17578:(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_17573)+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_17578)));
}
{
var G__17579 = seq__17542_17574;
var G__17580 = chunk__17543_17575;
var G__17581 = count__17544_17576;
var G__17582 = (i__17545_17577 + (1));
seq__17542_17574 = G__17579;
chunk__17543_17575 = G__17580;
count__17544_17576 = G__17581;
i__17545_17577 = G__17582;
continue;
}
} else
{var temp__4126__auto___17583 = cljs.core.seq.call(null,seq__17542_17574);if(temp__4126__auto___17583)
{var seq__17542_17584__$1 = temp__4126__auto___17583;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17542_17584__$1))
{var c__4299__auto___17585 = cljs.core.chunk_first.call(null,seq__17542_17584__$1);{
var G__17586 = cljs.core.chunk_rest.call(null,seq__17542_17584__$1);
var G__17587 = c__4299__auto___17585;
var G__17588 = cljs.core.count.call(null,c__4299__auto___17585);
var G__17589 = (0);
seq__17542_17574 = G__17586;
chunk__17543_17575 = G__17587;
count__17544_17576 = G__17588;
i__17545_17577 = G__17589;
continue;
}
} else
{var class_17590 = cljs.core.first.call(null,seq__17542_17584__$1);if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_17573,class_17590)))
{} else
{elem__$1.className = (((class_name_17573 === ""))?class_17590:(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_17573)+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_17590)));
}
{
var G__17591 = cljs.core.next.call(null,seq__17542_17584__$1);
var G__17592 = null;
var G__17593 = (0);
var G__17594 = (0);
seq__17542_17574 = G__17591;
chunk__17543_17575 = G__17592;
count__17544_17576 = G__17593;
i__17545_17577 = G__17594;
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
var G__17595__delegate = function (elem,classes,more_classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__17546_17596 = cljs.core.seq.call(null,cljs.core.conj.call(null,more_classes,classes));var chunk__17547_17597 = null;var count__17548_17598 = (0);var i__17549_17599 = (0);while(true){
if((i__17549_17599 < count__17548_17598))
{var c_17600 = cljs.core._nth.call(null,chunk__17547_17597,i__17549_17599);add_class_BANG_.call(null,elem__$1,c_17600);
{
var G__17601 = seq__17546_17596;
var G__17602 = chunk__17547_17597;
var G__17603 = count__17548_17598;
var G__17604 = (i__17549_17599 + (1));
seq__17546_17596 = G__17601;
chunk__17547_17597 = G__17602;
count__17548_17598 = G__17603;
i__17549_17599 = G__17604;
continue;
}
} else
{var temp__4126__auto___17605 = cljs.core.seq.call(null,seq__17546_17596);if(temp__4126__auto___17605)
{var seq__17546_17606__$1 = temp__4126__auto___17605;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17546_17606__$1))
{var c__4299__auto___17607 = cljs.core.chunk_first.call(null,seq__17546_17606__$1);{
var G__17608 = cljs.core.chunk_rest.call(null,seq__17546_17606__$1);
var G__17609 = c__4299__auto___17607;
var G__17610 = cljs.core.count.call(null,c__4299__auto___17607);
var G__17611 = (0);
seq__17546_17596 = G__17608;
chunk__17547_17597 = G__17609;
count__17548_17598 = G__17610;
i__17549_17599 = G__17611;
continue;
}
} else
{var c_17612 = cljs.core.first.call(null,seq__17546_17606__$1);add_class_BANG_.call(null,elem__$1,c_17612);
{
var G__17613 = cljs.core.next.call(null,seq__17546_17606__$1);
var G__17614 = null;
var G__17615 = (0);
var G__17616 = (0);
seq__17546_17596 = G__17613;
chunk__17547_17597 = G__17614;
count__17548_17598 = G__17615;
i__17549_17599 = G__17616;
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
var G__17595 = function (elem,classes,var_args){
var more_classes = null;if (arguments.length > 2) {
  more_classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__17595__delegate.call(this,elem,classes,more_classes);};
G__17595.cljs$lang$maxFixedArity = 2;
G__17595.cljs$lang$applyTo = (function (arglist__17617){
var elem = cljs.core.first(arglist__17617);
arglist__17617 = cljs.core.next(arglist__17617);
var classes = cljs.core.first(arglist__17617);
var more_classes = cljs.core.rest(arglist__17617);
return G__17595__delegate(elem,classes,more_classes);
});
G__17595.cljs$core$IFn$_invoke$arity$variadic = G__17595__delegate;
return G__17595;
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
var class_len = class_name.length;var temp__4124__auto__ = dommy.attrs.class_index.call(null,class_name,class$);if(cljs.core.truth_(temp__4124__auto__))
{var i = temp__4124__auto__;{
var G__17618 = (function (){var end = (i + class$.length);return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((((end < class_len))?(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name.substring((0),i))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name.substr((end + (1))))):class_name.substring((0),(i - (1))))));
})();
class_name = G__17618;
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
var remove_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var class$__$1 = cljs.core.name.call(null,class$);var temp__4124__auto___17627 = elem__$1.classList;if(cljs.core.truth_(temp__4124__auto___17627))
{var class_list_17628 = temp__4124__auto___17627;class_list_17628.remove(class$__$1);
} else
{var class_name_17629 = elem__$1.className;var new_class_name_17630 = dommy.attrs.remove_class_str.call(null,class_name_17629,class$__$1);if((class_name_17629 === new_class_name_17630))
{} else
{elem__$1.className = new_class_name_17630;
}
}
return elem__$1;
});
var remove_class_BANG___3 = (function() { 
var G__17631__delegate = function (elem,class$,classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__17623 = cljs.core.seq.call(null,cljs.core.conj.call(null,classes,class$));var chunk__17624 = null;var count__17625 = (0);var i__17626 = (0);while(true){
if((i__17626 < count__17625))
{var c = cljs.core._nth.call(null,chunk__17624,i__17626);remove_class_BANG_.call(null,elem__$1,c);
{
var G__17632 = seq__17623;
var G__17633 = chunk__17624;
var G__17634 = count__17625;
var G__17635 = (i__17626 + (1));
seq__17623 = G__17632;
chunk__17624 = G__17633;
count__17625 = G__17634;
i__17626 = G__17635;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__17623);if(temp__4126__auto__)
{var seq__17623__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17623__$1))
{var c__4299__auto__ = cljs.core.chunk_first.call(null,seq__17623__$1);{
var G__17636 = cljs.core.chunk_rest.call(null,seq__17623__$1);
var G__17637 = c__4299__auto__;
var G__17638 = cljs.core.count.call(null,c__4299__auto__);
var G__17639 = (0);
seq__17623 = G__17636;
chunk__17624 = G__17637;
count__17625 = G__17638;
i__17626 = G__17639;
continue;
}
} else
{var c = cljs.core.first.call(null,seq__17623__$1);remove_class_BANG_.call(null,elem__$1,c);
{
var G__17640 = cljs.core.next.call(null,seq__17623__$1);
var G__17641 = null;
var G__17642 = (0);
var G__17643 = (0);
seq__17623 = G__17640;
chunk__17624 = G__17641;
count__17625 = G__17642;
i__17626 = G__17643;
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
var G__17631 = function (elem,class$,var_args){
var classes = null;if (arguments.length > 2) {
  classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__17631__delegate.call(this,elem,class$,classes);};
G__17631.cljs$lang$maxFixedArity = 2;
G__17631.cljs$lang$applyTo = (function (arglist__17644){
var elem = cljs.core.first(arglist__17644);
arglist__17644 = cljs.core.next(arglist__17644);
var class$ = cljs.core.first(arglist__17644);
var classes = cljs.core.rest(arglist__17644);
return G__17631__delegate(elem,class$,classes);
});
G__17631.cljs$core$IFn$_invoke$arity$variadic = G__17631__delegate;
return G__17631;
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
var toggle_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var class$__$1 = cljs.core.name.call(null,class$);var temp__4124__auto___17645 = elem__$1.classList;if(cljs.core.truth_(temp__4124__auto___17645))
{var class_list_17646 = temp__4124__auto___17645;class_list_17646.toggle(class$__$1);
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
{return clojure.string.join.call(null," ",cljs.core.map.call(null,(function (p__17649){var vec__17650 = p__17649;var k = cljs.core.nth.call(null,vec__17650,(0),null);var v = cljs.core.nth.call(null,vec__17650,(1),null);return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,k))+":"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,v))+";");
}),x));
}
});
/**
* @param {...*} var_args
*/
dommy.attrs.set_style_BANG_ = (function() { 
var set_style_BANG___delegate = function (elem,kvs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null))))))));
}
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var style = elem__$1.style;var seq__17657_17663 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),kvs));var chunk__17658_17664 = null;var count__17659_17665 = (0);var i__17660_17666 = (0);while(true){
if((i__17660_17666 < count__17659_17665))
{var vec__17661_17667 = cljs.core._nth.call(null,chunk__17658_17664,i__17660_17666);var k_17668 = cljs.core.nth.call(null,vec__17661_17667,(0),null);var v_17669 = cljs.core.nth.call(null,vec__17661_17667,(1),null);(style[cljs.core.name.call(null,k_17668)] = v_17669);
{
var G__17670 = seq__17657_17663;
var G__17671 = chunk__17658_17664;
var G__17672 = count__17659_17665;
var G__17673 = (i__17660_17666 + (1));
seq__17657_17663 = G__17670;
chunk__17658_17664 = G__17671;
count__17659_17665 = G__17672;
i__17660_17666 = G__17673;
continue;
}
} else
{var temp__4126__auto___17674 = cljs.core.seq.call(null,seq__17657_17663);if(temp__4126__auto___17674)
{var seq__17657_17675__$1 = temp__4126__auto___17674;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17657_17675__$1))
{var c__4299__auto___17676 = cljs.core.chunk_first.call(null,seq__17657_17675__$1);{
var G__17677 = cljs.core.chunk_rest.call(null,seq__17657_17675__$1);
var G__17678 = c__4299__auto___17676;
var G__17679 = cljs.core.count.call(null,c__4299__auto___17676);
var G__17680 = (0);
seq__17657_17663 = G__17677;
chunk__17658_17664 = G__17678;
count__17659_17665 = G__17679;
i__17660_17666 = G__17680;
continue;
}
} else
{var vec__17662_17681 = cljs.core.first.call(null,seq__17657_17675__$1);var k_17682 = cljs.core.nth.call(null,vec__17662_17681,(0),null);var v_17683 = cljs.core.nth.call(null,vec__17662_17681,(1),null);(style[cljs.core.name.call(null,k_17682)] = v_17683);
{
var G__17684 = cljs.core.next.call(null,seq__17657_17675__$1);
var G__17685 = null;
var G__17686 = (0);
var G__17687 = (0);
seq__17657_17663 = G__17684;
chunk__17658_17664 = G__17685;
count__17659_17665 = G__17686;
i__17660_17666 = G__17687;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__17688){
var elem = cljs.core.first(arglist__17688);
var kvs = cljs.core.rest(arglist__17688);
return set_style_BANG___delegate(elem,kvs);
});
set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_style_BANG___delegate;
return set_style_BANG_;
})()
;
dommy.attrs.style = (function style(elem,k){if(cljs.core.truth_(k))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"k","k",-505765866,null))))));
}
return (window.getComputedStyle(dommy.template.__GT_node_like.call(null,elem))[cljs.core.name.call(null,k)]);
});
/**
* @param {...*} var_args
*/
dommy.attrs.set_px_BANG_ = (function() { 
var set_px_BANG___delegate = function (elem,kvs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null))))))));
}
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__17695_17701 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),kvs));var chunk__17696_17702 = null;var count__17697_17703 = (0);var i__17698_17704 = (0);while(true){
if((i__17698_17704 < count__17697_17703))
{var vec__17699_17705 = cljs.core._nth.call(null,chunk__17696_17702,i__17698_17704);var k_17706 = cljs.core.nth.call(null,vec__17699_17705,(0),null);var v_17707 = cljs.core.nth.call(null,vec__17699_17705,(1),null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_17706,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_17707)+"px"));
{
var G__17708 = seq__17695_17701;
var G__17709 = chunk__17696_17702;
var G__17710 = count__17697_17703;
var G__17711 = (i__17698_17704 + (1));
seq__17695_17701 = G__17708;
chunk__17696_17702 = G__17709;
count__17697_17703 = G__17710;
i__17698_17704 = G__17711;
continue;
}
} else
{var temp__4126__auto___17712 = cljs.core.seq.call(null,seq__17695_17701);if(temp__4126__auto___17712)
{var seq__17695_17713__$1 = temp__4126__auto___17712;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17695_17713__$1))
{var c__4299__auto___17714 = cljs.core.chunk_first.call(null,seq__17695_17713__$1);{
var G__17715 = cljs.core.chunk_rest.call(null,seq__17695_17713__$1);
var G__17716 = c__4299__auto___17714;
var G__17717 = cljs.core.count.call(null,c__4299__auto___17714);
var G__17718 = (0);
seq__17695_17701 = G__17715;
chunk__17696_17702 = G__17716;
count__17697_17703 = G__17717;
i__17698_17704 = G__17718;
continue;
}
} else
{var vec__17700_17719 = cljs.core.first.call(null,seq__17695_17713__$1);var k_17720 = cljs.core.nth.call(null,vec__17700_17719,(0),null);var v_17721 = cljs.core.nth.call(null,vec__17700_17719,(1),null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_17720,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_17721)+"px"));
{
var G__17722 = cljs.core.next.call(null,seq__17695_17713__$1);
var G__17723 = null;
var G__17724 = (0);
var G__17725 = (0);
seq__17695_17701 = G__17722;
chunk__17696_17702 = G__17723;
count__17697_17703 = G__17724;
i__17698_17704 = G__17725;
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
set_px_BANG_.cljs$lang$applyTo = (function (arglist__17726){
var elem = cljs.core.first(arglist__17726);
var kvs = cljs.core.rest(arglist__17726);
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
{var G__17735 = dommy.template.__GT_node_like.call(null,elem);(G__17735[cljs.core.name.call(null,k)] = v);
return G__17735;
} else
{var G__17736 = dommy.template.__GT_node_like.call(null,elem);G__17736.setAttribute(cljs.core.name.call(null,k),(((k === new cljs.core.Keyword(null,"style","style",-496642736)))?dommy.attrs.style_str.call(null,v):v));
return G__17736;
}
} else
{return null;
}
});
var set_attr_BANG___4 = (function() { 
var G__17743__delegate = function (elem,k,v,kvs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null))))))));
}
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__17737_17744 = cljs.core.seq.call(null,cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.call(null,(2),kvs)));var chunk__17738_17745 = null;var count__17739_17746 = (0);var i__17740_17747 = (0);while(true){
if((i__17740_17747 < count__17739_17746))
{var vec__17741_17748 = cljs.core._nth.call(null,chunk__17738_17745,i__17740_17747);var k_17749__$1 = cljs.core.nth.call(null,vec__17741_17748,(0),null);var v_17750__$1 = cljs.core.nth.call(null,vec__17741_17748,(1),null);set_attr_BANG_.call(null,elem__$1,k_17749__$1,v_17750__$1);
{
var G__17751 = seq__17737_17744;
var G__17752 = chunk__17738_17745;
var G__17753 = count__17739_17746;
var G__17754 = (i__17740_17747 + (1));
seq__17737_17744 = G__17751;
chunk__17738_17745 = G__17752;
count__17739_17746 = G__17753;
i__17740_17747 = G__17754;
continue;
}
} else
{var temp__4126__auto___17755 = cljs.core.seq.call(null,seq__17737_17744);if(temp__4126__auto___17755)
{var seq__17737_17756__$1 = temp__4126__auto___17755;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17737_17756__$1))
{var c__4299__auto___17757 = cljs.core.chunk_first.call(null,seq__17737_17756__$1);{
var G__17758 = cljs.core.chunk_rest.call(null,seq__17737_17756__$1);
var G__17759 = c__4299__auto___17757;
var G__17760 = cljs.core.count.call(null,c__4299__auto___17757);
var G__17761 = (0);
seq__17737_17744 = G__17758;
chunk__17738_17745 = G__17759;
count__17739_17746 = G__17760;
i__17740_17747 = G__17761;
continue;
}
} else
{var vec__17742_17762 = cljs.core.first.call(null,seq__17737_17756__$1);var k_17763__$1 = cljs.core.nth.call(null,vec__17742_17762,(0),null);var v_17764__$1 = cljs.core.nth.call(null,vec__17742_17762,(1),null);set_attr_BANG_.call(null,elem__$1,k_17763__$1,v_17764__$1);
{
var G__17765 = cljs.core.next.call(null,seq__17737_17756__$1);
var G__17766 = null;
var G__17767 = (0);
var G__17768 = (0);
seq__17737_17744 = G__17765;
chunk__17738_17745 = G__17766;
count__17739_17746 = G__17767;
i__17740_17747 = G__17768;
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
var G__17743 = function (elem,k,v,var_args){
var kvs = null;if (arguments.length > 3) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__17743__delegate.call(this,elem,k,v,kvs);};
G__17743.cljs$lang$maxFixedArity = 3;
G__17743.cljs$lang$applyTo = (function (arglist__17769){
var elem = cljs.core.first(arglist__17769);
arglist__17769 = cljs.core.next(arglist__17769);
var k = cljs.core.first(arglist__17769);
arglist__17769 = cljs.core.next(arglist__17769);
var v = cljs.core.first(arglist__17769);
var kvs = cljs.core.rest(arglist__17769);
return G__17743__delegate(elem,k,v,kvs);
});
G__17743.cljs$core$IFn$_invoke$arity$variadic = G__17743__delegate;
return G__17743;
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
var remove_attr_BANG___2 = (function (elem,k){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),null,new cljs.core.Keyword(null,"classes","classes",2037804510),null], null), null).call(null,k)))
{elem__$1.className = "";
} else
{elem__$1.removeAttribute(cljs.core.name.call(null,k));
}
return elem__$1;
});
var remove_attr_BANG___3 = (function() { 
var G__17778__delegate = function (elem,k,ks){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__17774_17779 = cljs.core.seq.call(null,cljs.core.cons.call(null,k,ks));var chunk__17775_17780 = null;var count__17776_17781 = (0);var i__17777_17782 = (0);while(true){
if((i__17777_17782 < count__17776_17781))
{var k_17783__$1 = cljs.core._nth.call(null,chunk__17775_17780,i__17777_17782);remove_attr_BANG_.call(null,elem__$1,k_17783__$1);
{
var G__17784 = seq__17774_17779;
var G__17785 = chunk__17775_17780;
var G__17786 = count__17776_17781;
var G__17787 = (i__17777_17782 + (1));
seq__17774_17779 = G__17784;
chunk__17775_17780 = G__17785;
count__17776_17781 = G__17786;
i__17777_17782 = G__17787;
continue;
}
} else
{var temp__4126__auto___17788 = cljs.core.seq.call(null,seq__17774_17779);if(temp__4126__auto___17788)
{var seq__17774_17789__$1 = temp__4126__auto___17788;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17774_17789__$1))
{var c__4299__auto___17790 = cljs.core.chunk_first.call(null,seq__17774_17789__$1);{
var G__17791 = cljs.core.chunk_rest.call(null,seq__17774_17789__$1);
var G__17792 = c__4299__auto___17790;
var G__17793 = cljs.core.count.call(null,c__4299__auto___17790);
var G__17794 = (0);
seq__17774_17779 = G__17791;
chunk__17775_17780 = G__17792;
count__17776_17781 = G__17793;
i__17777_17782 = G__17794;
continue;
}
} else
{var k_17795__$1 = cljs.core.first.call(null,seq__17774_17789__$1);remove_attr_BANG_.call(null,elem__$1,k_17795__$1);
{
var G__17796 = cljs.core.next.call(null,seq__17774_17789__$1);
var G__17797 = null;
var G__17798 = (0);
var G__17799 = (0);
seq__17774_17779 = G__17796;
chunk__17775_17780 = G__17797;
count__17776_17781 = G__17798;
i__17777_17782 = G__17799;
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
var G__17778 = function (elem,k,var_args){
var ks = null;if (arguments.length > 2) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__17778__delegate.call(this,elem,k,ks);};
G__17778.cljs$lang$maxFixedArity = 2;
G__17778.cljs$lang$applyTo = (function (arglist__17800){
var elem = cljs.core.first(arglist__17800);
arglist__17800 = cljs.core.next(arglist__17800);
var k = cljs.core.first(arglist__17800);
var ks = cljs.core.rest(arglist__17800);
return G__17778__delegate(elem,k,ks);
});
G__17778.cljs$core$IFn$_invoke$arity$variadic = G__17778__delegate;
return G__17778;
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
var toggle_BANG___2 = (function (elem,show_QMARK_){var G__17802 = dommy.template.__GT_node_like.call(null,elem);G__17802.style.display = ((show_QMARK_)?"":"none");
return G__17802;
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
dommy.attrs.hide_BANG_ = (function hide_BANG_(elem){var G__17804 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__17804,false);
return G__17804;
});
dommy.attrs.show_BANG_ = (function show_BANG_(elem){var G__17806 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__17806,true);
return G__17806;
});
/**
* Returns a map of the bounding client rect of `elem`
* as a map with [:top :left :right :bottom :width :height]
*/
dommy.attrs.bounding_client_rect = (function bounding_client_rect(elem){return cljs.core.js__GT_clj.call(null,(function (){var G__17808 = dommy.template.__GT_node_like.call(null,elem).getBoundingClientRect();(G__17808["constructor"] = Object);
return G__17808;
})(),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
});
dommy.attrs.scroll_into_view = (function scroll_into_view(elem,align_with_top_QMARK_){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var top = new cljs.core.Keyword(null,"top","top",-1856271961).cljs$core$IFn$_invoke$arity$1(dommy.attrs.bounding_client_rect.call(null,elem__$1));if((window.innerHeight < (top + elem__$1.offsetHeight)))
{return elem__$1.scrollIntoView(align_with_top_QMARK_);
} else
{return null;
}
});

//# sourceMappingURL=attrs.js.map