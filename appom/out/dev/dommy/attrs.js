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
var G__16616 = (i + class$.length);
start_from = G__16616;
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
{var temp__4090__auto___16641 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___16641))
{var class_list_16642 = temp__4090__auto___16641;var seq__16629_16643 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__16630_16644 = null;var count__16631_16645 = 0;var i__16632_16646 = 0;while(true){
if((i__16632_16646 < count__16631_16645))
{var class_16647 = cljs.core._nth.call(null,chunk__16630_16644,i__16632_16646);class_list_16642.add(class_16647);
{
var G__16648 = seq__16629_16643;
var G__16649 = chunk__16630_16644;
var G__16650 = count__16631_16645;
var G__16651 = (i__16632_16646 + 1);
seq__16629_16643 = G__16648;
chunk__16630_16644 = G__16649;
count__16631_16645 = G__16650;
i__16632_16646 = G__16651;
continue;
}
} else
{var temp__4092__auto___16652 = cljs.core.seq.call(null,seq__16629_16643);if(temp__4092__auto___16652)
{var seq__16629_16653__$1 = temp__4092__auto___16652;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16629_16653__$1))
{var c__4191__auto___16654 = cljs.core.chunk_first.call(null,seq__16629_16653__$1);{
var G__16655 = cljs.core.chunk_rest.call(null,seq__16629_16653__$1);
var G__16656 = c__4191__auto___16654;
var G__16657 = cljs.core.count.call(null,c__4191__auto___16654);
var G__16658 = 0;
seq__16629_16643 = G__16655;
chunk__16630_16644 = G__16656;
count__16631_16645 = G__16657;
i__16632_16646 = G__16658;
continue;
}
} else
{var class_16659 = cljs.core.first.call(null,seq__16629_16653__$1);class_list_16642.add(class_16659);
{
var G__16660 = cljs.core.next.call(null,seq__16629_16653__$1);
var G__16661 = null;
var G__16662 = 0;
var G__16663 = 0;
seq__16629_16643 = G__16660;
chunk__16630_16644 = G__16661;
count__16631_16645 = G__16662;
i__16632_16646 = G__16663;
continue;
}
}
} else
{}
}
break;
}
} else
{var class_name_16664 = elem__$1.className;var seq__16633_16665 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__16634_16666 = null;var count__16635_16667 = 0;var i__16636_16668 = 0;while(true){
if((i__16636_16668 < count__16635_16667))
{var class_16669 = cljs.core._nth.call(null,chunk__16634_16666,i__16636_16668);if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_16664,class_16669)))
{} else
{elem__$1.className = (((class_name_16664 === ""))?class_16669:[cljs.core.str(class_name_16664),cljs.core.str(" "),cljs.core.str(class_16669)].join(''));
}
{
var G__16670 = seq__16633_16665;
var G__16671 = chunk__16634_16666;
var G__16672 = count__16635_16667;
var G__16673 = (i__16636_16668 + 1);
seq__16633_16665 = G__16670;
chunk__16634_16666 = G__16671;
count__16635_16667 = G__16672;
i__16636_16668 = G__16673;
continue;
}
} else
{var temp__4092__auto___16674 = cljs.core.seq.call(null,seq__16633_16665);if(temp__4092__auto___16674)
{var seq__16633_16675__$1 = temp__4092__auto___16674;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16633_16675__$1))
{var c__4191__auto___16676 = cljs.core.chunk_first.call(null,seq__16633_16675__$1);{
var G__16677 = cljs.core.chunk_rest.call(null,seq__16633_16675__$1);
var G__16678 = c__4191__auto___16676;
var G__16679 = cljs.core.count.call(null,c__4191__auto___16676);
var G__16680 = 0;
seq__16633_16665 = G__16677;
chunk__16634_16666 = G__16678;
count__16635_16667 = G__16679;
i__16636_16668 = G__16680;
continue;
}
} else
{var class_16681 = cljs.core.first.call(null,seq__16633_16675__$1);if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_16664,class_16681)))
{} else
{elem__$1.className = (((class_name_16664 === ""))?class_16681:[cljs.core.str(class_name_16664),cljs.core.str(" "),cljs.core.str(class_16681)].join(''));
}
{
var G__16682 = cljs.core.next.call(null,seq__16633_16675__$1);
var G__16683 = null;
var G__16684 = 0;
var G__16685 = 0;
seq__16633_16665 = G__16682;
chunk__16634_16666 = G__16683;
count__16635_16667 = G__16684;
i__16636_16668 = G__16685;
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
var G__16686__delegate = function (elem,classes,more_classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__16637_16687 = cljs.core.seq.call(null,cljs.core.conj.call(null,more_classes,classes));var chunk__16638_16688 = null;var count__16639_16689 = 0;var i__16640_16690 = 0;while(true){
if((i__16640_16690 < count__16639_16689))
{var c_16691 = cljs.core._nth.call(null,chunk__16638_16688,i__16640_16690);add_class_BANG_.call(null,elem__$1,c_16691);
{
var G__16692 = seq__16637_16687;
var G__16693 = chunk__16638_16688;
var G__16694 = count__16639_16689;
var G__16695 = (i__16640_16690 + 1);
seq__16637_16687 = G__16692;
chunk__16638_16688 = G__16693;
count__16639_16689 = G__16694;
i__16640_16690 = G__16695;
continue;
}
} else
{var temp__4092__auto___16696 = cljs.core.seq.call(null,seq__16637_16687);if(temp__4092__auto___16696)
{var seq__16637_16697__$1 = temp__4092__auto___16696;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16637_16697__$1))
{var c__4191__auto___16698 = cljs.core.chunk_first.call(null,seq__16637_16697__$1);{
var G__16699 = cljs.core.chunk_rest.call(null,seq__16637_16697__$1);
var G__16700 = c__4191__auto___16698;
var G__16701 = cljs.core.count.call(null,c__4191__auto___16698);
var G__16702 = 0;
seq__16637_16687 = G__16699;
chunk__16638_16688 = G__16700;
count__16639_16689 = G__16701;
i__16640_16690 = G__16702;
continue;
}
} else
{var c_16703 = cljs.core.first.call(null,seq__16637_16697__$1);add_class_BANG_.call(null,elem__$1,c_16703);
{
var G__16704 = cljs.core.next.call(null,seq__16637_16697__$1);
var G__16705 = null;
var G__16706 = 0;
var G__16707 = 0;
seq__16637_16687 = G__16704;
chunk__16638_16688 = G__16705;
count__16639_16689 = G__16706;
i__16640_16690 = G__16707;
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
var G__16686 = function (elem,classes,var_args){
var more_classes = null;if (arguments.length > 2) {
  more_classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__16686__delegate.call(this,elem,classes,more_classes);};
G__16686.cljs$lang$maxFixedArity = 2;
G__16686.cljs$lang$applyTo = (function (arglist__16708){
var elem = cljs.core.first(arglist__16708);
arglist__16708 = cljs.core.next(arglist__16708);
var classes = cljs.core.first(arglist__16708);
var more_classes = cljs.core.rest(arglist__16708);
return G__16686__delegate(elem,classes,more_classes);
});
G__16686.cljs$core$IFn$_invoke$arity$variadic = G__16686__delegate;
return G__16686;
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
var G__16709 = (function (){var end = (i + class$.length);return [cljs.core.str((((end < class_len))?[cljs.core.str(class_name.substring(0,i)),cljs.core.str(class_name.substr((end + 1)))].join(''):class_name.substring(0,(i - 1))))].join('');
})();
class_name = G__16709;
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
var remove_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var class$__$1 = cljs.core.name.call(null,class$);var temp__4090__auto___16718 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___16718))
{var class_list_16719 = temp__4090__auto___16718;class_list_16719.remove(class$__$1);
} else
{var class_name_16720 = elem__$1.className;var new_class_name_16721 = dommy.attrs.remove_class_str.call(null,class_name_16720,class$__$1);if((class_name_16720 === new_class_name_16721))
{} else
{elem__$1.className = new_class_name_16721;
}
}
return elem__$1;
});
var remove_class_BANG___3 = (function() { 
var G__16722__delegate = function (elem,class$,classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__16714 = cljs.core.seq.call(null,cljs.core.conj.call(null,classes,class$));var chunk__16715 = null;var count__16716 = 0;var i__16717 = 0;while(true){
if((i__16717 < count__16716))
{var c = cljs.core._nth.call(null,chunk__16715,i__16717);remove_class_BANG_.call(null,elem__$1,c);
{
var G__16723 = seq__16714;
var G__16724 = chunk__16715;
var G__16725 = count__16716;
var G__16726 = (i__16717 + 1);
seq__16714 = G__16723;
chunk__16715 = G__16724;
count__16716 = G__16725;
i__16717 = G__16726;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__16714);if(temp__4092__auto__)
{var seq__16714__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16714__$1))
{var c__4191__auto__ = cljs.core.chunk_first.call(null,seq__16714__$1);{
var G__16727 = cljs.core.chunk_rest.call(null,seq__16714__$1);
var G__16728 = c__4191__auto__;
var G__16729 = cljs.core.count.call(null,c__4191__auto__);
var G__16730 = 0;
seq__16714 = G__16727;
chunk__16715 = G__16728;
count__16716 = G__16729;
i__16717 = G__16730;
continue;
}
} else
{var c = cljs.core.first.call(null,seq__16714__$1);remove_class_BANG_.call(null,elem__$1,c);
{
var G__16731 = cljs.core.next.call(null,seq__16714__$1);
var G__16732 = null;
var G__16733 = 0;
var G__16734 = 0;
seq__16714 = G__16731;
chunk__16715 = G__16732;
count__16716 = G__16733;
i__16717 = G__16734;
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
var G__16722 = function (elem,class$,var_args){
var classes = null;if (arguments.length > 2) {
  classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__16722__delegate.call(this,elem,class$,classes);};
G__16722.cljs$lang$maxFixedArity = 2;
G__16722.cljs$lang$applyTo = (function (arglist__16735){
var elem = cljs.core.first(arglist__16735);
arglist__16735 = cljs.core.next(arglist__16735);
var class$ = cljs.core.first(arglist__16735);
var classes = cljs.core.rest(arglist__16735);
return G__16722__delegate(elem,class$,classes);
});
G__16722.cljs$core$IFn$_invoke$arity$variadic = G__16722__delegate;
return G__16722;
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
var toggle_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var class$__$1 = cljs.core.name.call(null,class$);var temp__4090__auto___16736 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___16736))
{var class_list_16737 = temp__4090__auto___16736;class_list_16737.toggle(class$__$1);
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
{return clojure.string.join.call(null," ",cljs.core.map.call(null,(function (p__16740){var vec__16741 = p__16740;var k = cljs.core.nth.call(null,vec__16741,0,null);var v = cljs.core.nth.call(null,vec__16741,1,null);return [cljs.core.str(cljs.core.name.call(null,k)),cljs.core.str(":"),cljs.core.str(cljs.core.name.call(null,v)),cljs.core.str(";")].join('');
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
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var style = elem__$1.style;var seq__16748_16754 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,kvs));var chunk__16749_16755 = null;var count__16750_16756 = 0;var i__16751_16757 = 0;while(true){
if((i__16751_16757 < count__16750_16756))
{var vec__16752_16758 = cljs.core._nth.call(null,chunk__16749_16755,i__16751_16757);var k_16759 = cljs.core.nth.call(null,vec__16752_16758,0,null);var v_16760 = cljs.core.nth.call(null,vec__16752_16758,1,null);(style[cljs.core.name.call(null,k_16759)] = v_16760);
{
var G__16761 = seq__16748_16754;
var G__16762 = chunk__16749_16755;
var G__16763 = count__16750_16756;
var G__16764 = (i__16751_16757 + 1);
seq__16748_16754 = G__16761;
chunk__16749_16755 = G__16762;
count__16750_16756 = G__16763;
i__16751_16757 = G__16764;
continue;
}
} else
{var temp__4092__auto___16765 = cljs.core.seq.call(null,seq__16748_16754);if(temp__4092__auto___16765)
{var seq__16748_16766__$1 = temp__4092__auto___16765;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16748_16766__$1))
{var c__4191__auto___16767 = cljs.core.chunk_first.call(null,seq__16748_16766__$1);{
var G__16768 = cljs.core.chunk_rest.call(null,seq__16748_16766__$1);
var G__16769 = c__4191__auto___16767;
var G__16770 = cljs.core.count.call(null,c__4191__auto___16767);
var G__16771 = 0;
seq__16748_16754 = G__16768;
chunk__16749_16755 = G__16769;
count__16750_16756 = G__16770;
i__16751_16757 = G__16771;
continue;
}
} else
{var vec__16753_16772 = cljs.core.first.call(null,seq__16748_16766__$1);var k_16773 = cljs.core.nth.call(null,vec__16753_16772,0,null);var v_16774 = cljs.core.nth.call(null,vec__16753_16772,1,null);(style[cljs.core.name.call(null,k_16773)] = v_16774);
{
var G__16775 = cljs.core.next.call(null,seq__16748_16766__$1);
var G__16776 = null;
var G__16777 = 0;
var G__16778 = 0;
seq__16748_16754 = G__16775;
chunk__16749_16755 = G__16776;
count__16750_16756 = G__16777;
i__16751_16757 = G__16778;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__16779){
var elem = cljs.core.first(arglist__16779);
var kvs = cljs.core.rest(arglist__16779);
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
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__16786_16792 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,kvs));var chunk__16787_16793 = null;var count__16788_16794 = 0;var i__16789_16795 = 0;while(true){
if((i__16789_16795 < count__16788_16794))
{var vec__16790_16796 = cljs.core._nth.call(null,chunk__16787_16793,i__16789_16795);var k_16797 = cljs.core.nth.call(null,vec__16790_16796,0,null);var v_16798 = cljs.core.nth.call(null,vec__16790_16796,1,null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_16797,[cljs.core.str(v_16798),cljs.core.str("px")].join(''));
{
var G__16799 = seq__16786_16792;
var G__16800 = chunk__16787_16793;
var G__16801 = count__16788_16794;
var G__16802 = (i__16789_16795 + 1);
seq__16786_16792 = G__16799;
chunk__16787_16793 = G__16800;
count__16788_16794 = G__16801;
i__16789_16795 = G__16802;
continue;
}
} else
{var temp__4092__auto___16803 = cljs.core.seq.call(null,seq__16786_16792);if(temp__4092__auto___16803)
{var seq__16786_16804__$1 = temp__4092__auto___16803;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16786_16804__$1))
{var c__4191__auto___16805 = cljs.core.chunk_first.call(null,seq__16786_16804__$1);{
var G__16806 = cljs.core.chunk_rest.call(null,seq__16786_16804__$1);
var G__16807 = c__4191__auto___16805;
var G__16808 = cljs.core.count.call(null,c__4191__auto___16805);
var G__16809 = 0;
seq__16786_16792 = G__16806;
chunk__16787_16793 = G__16807;
count__16788_16794 = G__16808;
i__16789_16795 = G__16809;
continue;
}
} else
{var vec__16791_16810 = cljs.core.first.call(null,seq__16786_16804__$1);var k_16811 = cljs.core.nth.call(null,vec__16791_16810,0,null);var v_16812 = cljs.core.nth.call(null,vec__16791_16810,1,null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_16811,[cljs.core.str(v_16812),cljs.core.str("px")].join(''));
{
var G__16813 = cljs.core.next.call(null,seq__16786_16804__$1);
var G__16814 = null;
var G__16815 = 0;
var G__16816 = 0;
seq__16786_16792 = G__16813;
chunk__16787_16793 = G__16814;
count__16788_16794 = G__16815;
i__16789_16795 = G__16816;
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
set_px_BANG_.cljs$lang$applyTo = (function (arglist__16817){
var elem = cljs.core.first(arglist__16817);
var kvs = cljs.core.rest(arglist__16817);
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
{var G__16826 = dommy.template.__GT_node_like.call(null,elem);(G__16826[cljs.core.name.call(null,k)] = v);
return G__16826;
} else
{var G__16827 = dommy.template.__GT_node_like.call(null,elem);G__16827.setAttribute(cljs.core.name.call(null,k),(((k === new cljs.core.Keyword(null,"style","style",1123684643)))?dommy.attrs.style_str.call(null,v):v));
return G__16827;
}
} else
{return null;
}
});
var set_attr_BANG___4 = (function() { 
var G__16834__delegate = function (elem,k,v,kvs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"kvs","kvs",-1640424927,null)))))].join('')));
}
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__16828_16835 = cljs.core.seq.call(null,cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.call(null,2,kvs)));var chunk__16829_16836 = null;var count__16830_16837 = 0;var i__16831_16838 = 0;while(true){
if((i__16831_16838 < count__16830_16837))
{var vec__16832_16839 = cljs.core._nth.call(null,chunk__16829_16836,i__16831_16838);var k_16840__$1 = cljs.core.nth.call(null,vec__16832_16839,0,null);var v_16841__$1 = cljs.core.nth.call(null,vec__16832_16839,1,null);set_attr_BANG_.call(null,elem__$1,k_16840__$1,v_16841__$1);
{
var G__16842 = seq__16828_16835;
var G__16843 = chunk__16829_16836;
var G__16844 = count__16830_16837;
var G__16845 = (i__16831_16838 + 1);
seq__16828_16835 = G__16842;
chunk__16829_16836 = G__16843;
count__16830_16837 = G__16844;
i__16831_16838 = G__16845;
continue;
}
} else
{var temp__4092__auto___16846 = cljs.core.seq.call(null,seq__16828_16835);if(temp__4092__auto___16846)
{var seq__16828_16847__$1 = temp__4092__auto___16846;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16828_16847__$1))
{var c__4191__auto___16848 = cljs.core.chunk_first.call(null,seq__16828_16847__$1);{
var G__16849 = cljs.core.chunk_rest.call(null,seq__16828_16847__$1);
var G__16850 = c__4191__auto___16848;
var G__16851 = cljs.core.count.call(null,c__4191__auto___16848);
var G__16852 = 0;
seq__16828_16835 = G__16849;
chunk__16829_16836 = G__16850;
count__16830_16837 = G__16851;
i__16831_16838 = G__16852;
continue;
}
} else
{var vec__16833_16853 = cljs.core.first.call(null,seq__16828_16847__$1);var k_16854__$1 = cljs.core.nth.call(null,vec__16833_16853,0,null);var v_16855__$1 = cljs.core.nth.call(null,vec__16833_16853,1,null);set_attr_BANG_.call(null,elem__$1,k_16854__$1,v_16855__$1);
{
var G__16856 = cljs.core.next.call(null,seq__16828_16847__$1);
var G__16857 = null;
var G__16858 = 0;
var G__16859 = 0;
seq__16828_16835 = G__16856;
chunk__16829_16836 = G__16857;
count__16830_16837 = G__16858;
i__16831_16838 = G__16859;
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
var G__16834 = function (elem,k,v,var_args){
var kvs = null;if (arguments.length > 3) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__16834__delegate.call(this,elem,k,v,kvs);};
G__16834.cljs$lang$maxFixedArity = 3;
G__16834.cljs$lang$applyTo = (function (arglist__16860){
var elem = cljs.core.first(arglist__16860);
arglist__16860 = cljs.core.next(arglist__16860);
var k = cljs.core.first(arglist__16860);
arglist__16860 = cljs.core.next(arglist__16860);
var v = cljs.core.first(arglist__16860);
var kvs = cljs.core.rest(arglist__16860);
return G__16834__delegate(elem,k,v,kvs);
});
G__16834.cljs$core$IFn$_invoke$arity$variadic = G__16834__delegate;
return G__16834;
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
var G__16869__delegate = function (elem,k,ks){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__16865_16870 = cljs.core.seq.call(null,cljs.core.cons.call(null,k,ks));var chunk__16866_16871 = null;var count__16867_16872 = 0;var i__16868_16873 = 0;while(true){
if((i__16868_16873 < count__16867_16872))
{var k_16874__$1 = cljs.core._nth.call(null,chunk__16866_16871,i__16868_16873);remove_attr_BANG_.call(null,elem__$1,k_16874__$1);
{
var G__16875 = seq__16865_16870;
var G__16876 = chunk__16866_16871;
var G__16877 = count__16867_16872;
var G__16878 = (i__16868_16873 + 1);
seq__16865_16870 = G__16875;
chunk__16866_16871 = G__16876;
count__16867_16872 = G__16877;
i__16868_16873 = G__16878;
continue;
}
} else
{var temp__4092__auto___16879 = cljs.core.seq.call(null,seq__16865_16870);if(temp__4092__auto___16879)
{var seq__16865_16880__$1 = temp__4092__auto___16879;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16865_16880__$1))
{var c__4191__auto___16881 = cljs.core.chunk_first.call(null,seq__16865_16880__$1);{
var G__16882 = cljs.core.chunk_rest.call(null,seq__16865_16880__$1);
var G__16883 = c__4191__auto___16881;
var G__16884 = cljs.core.count.call(null,c__4191__auto___16881);
var G__16885 = 0;
seq__16865_16870 = G__16882;
chunk__16866_16871 = G__16883;
count__16867_16872 = G__16884;
i__16868_16873 = G__16885;
continue;
}
} else
{var k_16886__$1 = cljs.core.first.call(null,seq__16865_16880__$1);remove_attr_BANG_.call(null,elem__$1,k_16886__$1);
{
var G__16887 = cljs.core.next.call(null,seq__16865_16880__$1);
var G__16888 = null;
var G__16889 = 0;
var G__16890 = 0;
seq__16865_16870 = G__16887;
chunk__16866_16871 = G__16888;
count__16867_16872 = G__16889;
i__16868_16873 = G__16890;
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
var G__16869 = function (elem,k,var_args){
var ks = null;if (arguments.length > 2) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__16869__delegate.call(this,elem,k,ks);};
G__16869.cljs$lang$maxFixedArity = 2;
G__16869.cljs$lang$applyTo = (function (arglist__16891){
var elem = cljs.core.first(arglist__16891);
arglist__16891 = cljs.core.next(arglist__16891);
var k = cljs.core.first(arglist__16891);
var ks = cljs.core.rest(arglist__16891);
return G__16869__delegate(elem,k,ks);
});
G__16869.cljs$core$IFn$_invoke$arity$variadic = G__16869__delegate;
return G__16869;
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
var toggle_BANG___2 = (function (elem,show_QMARK_){var G__16893 = dommy.template.__GT_node_like.call(null,elem);G__16893.style.display = ((show_QMARK_)?"":"none");
return G__16893;
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
dommy.attrs.hide_BANG_ = (function hide_BANG_(elem){var G__16895 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__16895,false);
return G__16895;
});
dommy.attrs.show_BANG_ = (function show_BANG_(elem){var G__16897 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__16897,true);
return G__16897;
});
/**
* Returns a map of the bounding client rect of `elem`
* as a map with [:top :left :right :bottom :width :height]
*/
dommy.attrs.bounding_client_rect = (function bounding_client_rect(elem){return cljs.core.js__GT_clj.call(null,(function (){var G__16899 = dommy.template.__GT_node_like.call(null,elem).getBoundingClientRect();(G__16899["constructor"] = Object);
return G__16899;
})(),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",4191781672),true);
});
dommy.attrs.scroll_into_view = (function scroll_into_view(elem,align_with_top_QMARK_){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var top = new cljs.core.Keyword(null,"top","top",1014019271).cljs$core$IFn$_invoke$arity$1(dommy.attrs.bounding_client_rect.call(null,elem__$1));if((window.innerHeight < (top + elem__$1.offsetHeight)))
{return elem__$1.scrollIntoView(align_with_top_QMARK_);
} else
{return null;
}
});

//# sourceMappingURL=attrs.js.map