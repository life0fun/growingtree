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
var G__28554 = (i + class$.length);
start_from = G__28554;
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
{var temp__4090__auto___28579 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___28579))
{var class_list_28580 = temp__4090__auto___28579;var seq__28567_28581 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__28568_28582 = null;var count__28569_28583 = 0;var i__28570_28584 = 0;while(true){
if((i__28570_28584 < count__28569_28583))
{var class_28585 = cljs.core._nth.call(null,chunk__28568_28582,i__28570_28584);class_list_28580.add(class_28585);
{
var G__28586 = seq__28567_28581;
var G__28587 = chunk__28568_28582;
var G__28588 = count__28569_28583;
var G__28589 = (i__28570_28584 + 1);
seq__28567_28581 = G__28586;
chunk__28568_28582 = G__28587;
count__28569_28583 = G__28588;
i__28570_28584 = G__28589;
continue;
}
} else
{var temp__4092__auto___28590 = cljs.core.seq.call(null,seq__28567_28581);if(temp__4092__auto___28590)
{var seq__28567_28591__$1 = temp__4092__auto___28590;if(cljs.core.chunked_seq_QMARK_.call(null,seq__28567_28591__$1))
{var c__4191__auto___28592 = cljs.core.chunk_first.call(null,seq__28567_28591__$1);{
var G__28593 = cljs.core.chunk_rest.call(null,seq__28567_28591__$1);
var G__28594 = c__4191__auto___28592;
var G__28595 = cljs.core.count.call(null,c__4191__auto___28592);
var G__28596 = 0;
seq__28567_28581 = G__28593;
chunk__28568_28582 = G__28594;
count__28569_28583 = G__28595;
i__28570_28584 = G__28596;
continue;
}
} else
{var class_28597 = cljs.core.first.call(null,seq__28567_28591__$1);class_list_28580.add(class_28597);
{
var G__28598 = cljs.core.next.call(null,seq__28567_28591__$1);
var G__28599 = null;
var G__28600 = 0;
var G__28601 = 0;
seq__28567_28581 = G__28598;
chunk__28568_28582 = G__28599;
count__28569_28583 = G__28600;
i__28570_28584 = G__28601;
continue;
}
}
} else
{}
}
break;
}
} else
{var class_name_28602 = elem__$1.className;var seq__28571_28603 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__28572_28604 = null;var count__28573_28605 = 0;var i__28574_28606 = 0;while(true){
if((i__28574_28606 < count__28573_28605))
{var class_28607 = cljs.core._nth.call(null,chunk__28572_28604,i__28574_28606);if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_28602,class_28607)))
{} else
{elem__$1.className = (((class_name_28602 === ""))?class_28607:[cljs.core.str(class_name_28602),cljs.core.str(" "),cljs.core.str(class_28607)].join(''));
}
{
var G__28608 = seq__28571_28603;
var G__28609 = chunk__28572_28604;
var G__28610 = count__28573_28605;
var G__28611 = (i__28574_28606 + 1);
seq__28571_28603 = G__28608;
chunk__28572_28604 = G__28609;
count__28573_28605 = G__28610;
i__28574_28606 = G__28611;
continue;
}
} else
{var temp__4092__auto___28612 = cljs.core.seq.call(null,seq__28571_28603);if(temp__4092__auto___28612)
{var seq__28571_28613__$1 = temp__4092__auto___28612;if(cljs.core.chunked_seq_QMARK_.call(null,seq__28571_28613__$1))
{var c__4191__auto___28614 = cljs.core.chunk_first.call(null,seq__28571_28613__$1);{
var G__28615 = cljs.core.chunk_rest.call(null,seq__28571_28613__$1);
var G__28616 = c__4191__auto___28614;
var G__28617 = cljs.core.count.call(null,c__4191__auto___28614);
var G__28618 = 0;
seq__28571_28603 = G__28615;
chunk__28572_28604 = G__28616;
count__28573_28605 = G__28617;
i__28574_28606 = G__28618;
continue;
}
} else
{var class_28619 = cljs.core.first.call(null,seq__28571_28613__$1);if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_28602,class_28619)))
{} else
{elem__$1.className = (((class_name_28602 === ""))?class_28619:[cljs.core.str(class_name_28602),cljs.core.str(" "),cljs.core.str(class_28619)].join(''));
}
{
var G__28620 = cljs.core.next.call(null,seq__28571_28613__$1);
var G__28621 = null;
var G__28622 = 0;
var G__28623 = 0;
seq__28571_28603 = G__28620;
chunk__28572_28604 = G__28621;
count__28573_28605 = G__28622;
i__28574_28606 = G__28623;
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
var G__28624__delegate = function (elem,classes,more_classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__28575_28625 = cljs.core.seq.call(null,cljs.core.conj.call(null,more_classes,classes));var chunk__28576_28626 = null;var count__28577_28627 = 0;var i__28578_28628 = 0;while(true){
if((i__28578_28628 < count__28577_28627))
{var c_28629 = cljs.core._nth.call(null,chunk__28576_28626,i__28578_28628);add_class_BANG_.call(null,elem__$1,c_28629);
{
var G__28630 = seq__28575_28625;
var G__28631 = chunk__28576_28626;
var G__28632 = count__28577_28627;
var G__28633 = (i__28578_28628 + 1);
seq__28575_28625 = G__28630;
chunk__28576_28626 = G__28631;
count__28577_28627 = G__28632;
i__28578_28628 = G__28633;
continue;
}
} else
{var temp__4092__auto___28634 = cljs.core.seq.call(null,seq__28575_28625);if(temp__4092__auto___28634)
{var seq__28575_28635__$1 = temp__4092__auto___28634;if(cljs.core.chunked_seq_QMARK_.call(null,seq__28575_28635__$1))
{var c__4191__auto___28636 = cljs.core.chunk_first.call(null,seq__28575_28635__$1);{
var G__28637 = cljs.core.chunk_rest.call(null,seq__28575_28635__$1);
var G__28638 = c__4191__auto___28636;
var G__28639 = cljs.core.count.call(null,c__4191__auto___28636);
var G__28640 = 0;
seq__28575_28625 = G__28637;
chunk__28576_28626 = G__28638;
count__28577_28627 = G__28639;
i__28578_28628 = G__28640;
continue;
}
} else
{var c_28641 = cljs.core.first.call(null,seq__28575_28635__$1);add_class_BANG_.call(null,elem__$1,c_28641);
{
var G__28642 = cljs.core.next.call(null,seq__28575_28635__$1);
var G__28643 = null;
var G__28644 = 0;
var G__28645 = 0;
seq__28575_28625 = G__28642;
chunk__28576_28626 = G__28643;
count__28577_28627 = G__28644;
i__28578_28628 = G__28645;
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
var G__28624 = function (elem,classes,var_args){
var more_classes = null;if (arguments.length > 2) {
  more_classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__28624__delegate.call(this,elem,classes,more_classes);};
G__28624.cljs$lang$maxFixedArity = 2;
G__28624.cljs$lang$applyTo = (function (arglist__28646){
var elem = cljs.core.first(arglist__28646);
arglist__28646 = cljs.core.next(arglist__28646);
var classes = cljs.core.first(arglist__28646);
var more_classes = cljs.core.rest(arglist__28646);
return G__28624__delegate(elem,classes,more_classes);
});
G__28624.cljs$core$IFn$_invoke$arity$variadic = G__28624__delegate;
return G__28624;
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
var G__28647 = (function (){var end = (i + class$.length);return [cljs.core.str((((end < class_len))?[cljs.core.str(class_name.substring(0,i)),cljs.core.str(class_name.substr((end + 1)))].join(''):class_name.substring(0,(i - 1))))].join('');
})();
class_name = G__28647;
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
var remove_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var class$__$1 = cljs.core.name.call(null,class$);var temp__4090__auto___28656 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___28656))
{var class_list_28657 = temp__4090__auto___28656;class_list_28657.remove(class$__$1);
} else
{var class_name_28658 = elem__$1.className;var new_class_name_28659 = dommy.attrs.remove_class_str.call(null,class_name_28658,class$__$1);if((class_name_28658 === new_class_name_28659))
{} else
{elem__$1.className = new_class_name_28659;
}
}
return elem__$1;
});
var remove_class_BANG___3 = (function() { 
var G__28660__delegate = function (elem,class$,classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__28652 = cljs.core.seq.call(null,cljs.core.conj.call(null,classes,class$));var chunk__28653 = null;var count__28654 = 0;var i__28655 = 0;while(true){
if((i__28655 < count__28654))
{var c = cljs.core._nth.call(null,chunk__28653,i__28655);remove_class_BANG_.call(null,elem__$1,c);
{
var G__28661 = seq__28652;
var G__28662 = chunk__28653;
var G__28663 = count__28654;
var G__28664 = (i__28655 + 1);
seq__28652 = G__28661;
chunk__28653 = G__28662;
count__28654 = G__28663;
i__28655 = G__28664;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__28652);if(temp__4092__auto__)
{var seq__28652__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__28652__$1))
{var c__4191__auto__ = cljs.core.chunk_first.call(null,seq__28652__$1);{
var G__28665 = cljs.core.chunk_rest.call(null,seq__28652__$1);
var G__28666 = c__4191__auto__;
var G__28667 = cljs.core.count.call(null,c__4191__auto__);
var G__28668 = 0;
seq__28652 = G__28665;
chunk__28653 = G__28666;
count__28654 = G__28667;
i__28655 = G__28668;
continue;
}
} else
{var c = cljs.core.first.call(null,seq__28652__$1);remove_class_BANG_.call(null,elem__$1,c);
{
var G__28669 = cljs.core.next.call(null,seq__28652__$1);
var G__28670 = null;
var G__28671 = 0;
var G__28672 = 0;
seq__28652 = G__28669;
chunk__28653 = G__28670;
count__28654 = G__28671;
i__28655 = G__28672;
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
var G__28660 = function (elem,class$,var_args){
var classes = null;if (arguments.length > 2) {
  classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__28660__delegate.call(this,elem,class$,classes);};
G__28660.cljs$lang$maxFixedArity = 2;
G__28660.cljs$lang$applyTo = (function (arglist__28673){
var elem = cljs.core.first(arglist__28673);
arglist__28673 = cljs.core.next(arglist__28673);
var class$ = cljs.core.first(arglist__28673);
var classes = cljs.core.rest(arglist__28673);
return G__28660__delegate(elem,class$,classes);
});
G__28660.cljs$core$IFn$_invoke$arity$variadic = G__28660__delegate;
return G__28660;
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
var toggle_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var class$__$1 = cljs.core.name.call(null,class$);var temp__4090__auto___28674 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___28674))
{var class_list_28675 = temp__4090__auto___28674;class_list_28675.toggle(class$__$1);
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
{return clojure.string.join.call(null," ",cljs.core.map.call(null,(function (p__28678){var vec__28679 = p__28678;var k = cljs.core.nth.call(null,vec__28679,0,null);var v = cljs.core.nth.call(null,vec__28679,1,null);return [cljs.core.str(cljs.core.name.call(null,k)),cljs.core.str(":"),cljs.core.str(cljs.core.name.call(null,v)),cljs.core.str(";")].join('');
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
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var style = elem__$1.style;var seq__28686_28692 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,kvs));var chunk__28687_28693 = null;var count__28688_28694 = 0;var i__28689_28695 = 0;while(true){
if((i__28689_28695 < count__28688_28694))
{var vec__28690_28696 = cljs.core._nth.call(null,chunk__28687_28693,i__28689_28695);var k_28697 = cljs.core.nth.call(null,vec__28690_28696,0,null);var v_28698 = cljs.core.nth.call(null,vec__28690_28696,1,null);(style[cljs.core.name.call(null,k_28697)] = v_28698);
{
var G__28699 = seq__28686_28692;
var G__28700 = chunk__28687_28693;
var G__28701 = count__28688_28694;
var G__28702 = (i__28689_28695 + 1);
seq__28686_28692 = G__28699;
chunk__28687_28693 = G__28700;
count__28688_28694 = G__28701;
i__28689_28695 = G__28702;
continue;
}
} else
{var temp__4092__auto___28703 = cljs.core.seq.call(null,seq__28686_28692);if(temp__4092__auto___28703)
{var seq__28686_28704__$1 = temp__4092__auto___28703;if(cljs.core.chunked_seq_QMARK_.call(null,seq__28686_28704__$1))
{var c__4191__auto___28705 = cljs.core.chunk_first.call(null,seq__28686_28704__$1);{
var G__28706 = cljs.core.chunk_rest.call(null,seq__28686_28704__$1);
var G__28707 = c__4191__auto___28705;
var G__28708 = cljs.core.count.call(null,c__4191__auto___28705);
var G__28709 = 0;
seq__28686_28692 = G__28706;
chunk__28687_28693 = G__28707;
count__28688_28694 = G__28708;
i__28689_28695 = G__28709;
continue;
}
} else
{var vec__28691_28710 = cljs.core.first.call(null,seq__28686_28704__$1);var k_28711 = cljs.core.nth.call(null,vec__28691_28710,0,null);var v_28712 = cljs.core.nth.call(null,vec__28691_28710,1,null);(style[cljs.core.name.call(null,k_28711)] = v_28712);
{
var G__28713 = cljs.core.next.call(null,seq__28686_28704__$1);
var G__28714 = null;
var G__28715 = 0;
var G__28716 = 0;
seq__28686_28692 = G__28713;
chunk__28687_28693 = G__28714;
count__28688_28694 = G__28715;
i__28689_28695 = G__28716;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__28717){
var elem = cljs.core.first(arglist__28717);
var kvs = cljs.core.rest(arglist__28717);
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
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__28724_28730 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,kvs));var chunk__28725_28731 = null;var count__28726_28732 = 0;var i__28727_28733 = 0;while(true){
if((i__28727_28733 < count__28726_28732))
{var vec__28728_28734 = cljs.core._nth.call(null,chunk__28725_28731,i__28727_28733);var k_28735 = cljs.core.nth.call(null,vec__28728_28734,0,null);var v_28736 = cljs.core.nth.call(null,vec__28728_28734,1,null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_28735,[cljs.core.str(v_28736),cljs.core.str("px")].join(''));
{
var G__28737 = seq__28724_28730;
var G__28738 = chunk__28725_28731;
var G__28739 = count__28726_28732;
var G__28740 = (i__28727_28733 + 1);
seq__28724_28730 = G__28737;
chunk__28725_28731 = G__28738;
count__28726_28732 = G__28739;
i__28727_28733 = G__28740;
continue;
}
} else
{var temp__4092__auto___28741 = cljs.core.seq.call(null,seq__28724_28730);if(temp__4092__auto___28741)
{var seq__28724_28742__$1 = temp__4092__auto___28741;if(cljs.core.chunked_seq_QMARK_.call(null,seq__28724_28742__$1))
{var c__4191__auto___28743 = cljs.core.chunk_first.call(null,seq__28724_28742__$1);{
var G__28744 = cljs.core.chunk_rest.call(null,seq__28724_28742__$1);
var G__28745 = c__4191__auto___28743;
var G__28746 = cljs.core.count.call(null,c__4191__auto___28743);
var G__28747 = 0;
seq__28724_28730 = G__28744;
chunk__28725_28731 = G__28745;
count__28726_28732 = G__28746;
i__28727_28733 = G__28747;
continue;
}
} else
{var vec__28729_28748 = cljs.core.first.call(null,seq__28724_28742__$1);var k_28749 = cljs.core.nth.call(null,vec__28729_28748,0,null);var v_28750 = cljs.core.nth.call(null,vec__28729_28748,1,null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_28749,[cljs.core.str(v_28750),cljs.core.str("px")].join(''));
{
var G__28751 = cljs.core.next.call(null,seq__28724_28742__$1);
var G__28752 = null;
var G__28753 = 0;
var G__28754 = 0;
seq__28724_28730 = G__28751;
chunk__28725_28731 = G__28752;
count__28726_28732 = G__28753;
i__28727_28733 = G__28754;
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
set_px_BANG_.cljs$lang$applyTo = (function (arglist__28755){
var elem = cljs.core.first(arglist__28755);
var kvs = cljs.core.rest(arglist__28755);
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
{var G__28764 = dommy.template.__GT_node_like.call(null,elem);(G__28764[cljs.core.name.call(null,k)] = v);
return G__28764;
} else
{var G__28765 = dommy.template.__GT_node_like.call(null,elem);G__28765.setAttribute(cljs.core.name.call(null,k),(((k === new cljs.core.Keyword(null,"style","style",1123684643)))?dommy.attrs.style_str.call(null,v):v));
return G__28765;
}
} else
{return null;
}
});
var set_attr_BANG___4 = (function() { 
var G__28772__delegate = function (elem,k,v,kvs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"kvs","kvs",-1640424927,null)))))].join('')));
}
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__28766_28773 = cljs.core.seq.call(null,cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.call(null,2,kvs)));var chunk__28767_28774 = null;var count__28768_28775 = 0;var i__28769_28776 = 0;while(true){
if((i__28769_28776 < count__28768_28775))
{var vec__28770_28777 = cljs.core._nth.call(null,chunk__28767_28774,i__28769_28776);var k_28778__$1 = cljs.core.nth.call(null,vec__28770_28777,0,null);var v_28779__$1 = cljs.core.nth.call(null,vec__28770_28777,1,null);set_attr_BANG_.call(null,elem__$1,k_28778__$1,v_28779__$1);
{
var G__28780 = seq__28766_28773;
var G__28781 = chunk__28767_28774;
var G__28782 = count__28768_28775;
var G__28783 = (i__28769_28776 + 1);
seq__28766_28773 = G__28780;
chunk__28767_28774 = G__28781;
count__28768_28775 = G__28782;
i__28769_28776 = G__28783;
continue;
}
} else
{var temp__4092__auto___28784 = cljs.core.seq.call(null,seq__28766_28773);if(temp__4092__auto___28784)
{var seq__28766_28785__$1 = temp__4092__auto___28784;if(cljs.core.chunked_seq_QMARK_.call(null,seq__28766_28785__$1))
{var c__4191__auto___28786 = cljs.core.chunk_first.call(null,seq__28766_28785__$1);{
var G__28787 = cljs.core.chunk_rest.call(null,seq__28766_28785__$1);
var G__28788 = c__4191__auto___28786;
var G__28789 = cljs.core.count.call(null,c__4191__auto___28786);
var G__28790 = 0;
seq__28766_28773 = G__28787;
chunk__28767_28774 = G__28788;
count__28768_28775 = G__28789;
i__28769_28776 = G__28790;
continue;
}
} else
{var vec__28771_28791 = cljs.core.first.call(null,seq__28766_28785__$1);var k_28792__$1 = cljs.core.nth.call(null,vec__28771_28791,0,null);var v_28793__$1 = cljs.core.nth.call(null,vec__28771_28791,1,null);set_attr_BANG_.call(null,elem__$1,k_28792__$1,v_28793__$1);
{
var G__28794 = cljs.core.next.call(null,seq__28766_28785__$1);
var G__28795 = null;
var G__28796 = 0;
var G__28797 = 0;
seq__28766_28773 = G__28794;
chunk__28767_28774 = G__28795;
count__28768_28775 = G__28796;
i__28769_28776 = G__28797;
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
var G__28772 = function (elem,k,v,var_args){
var kvs = null;if (arguments.length > 3) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__28772__delegate.call(this,elem,k,v,kvs);};
G__28772.cljs$lang$maxFixedArity = 3;
G__28772.cljs$lang$applyTo = (function (arglist__28798){
var elem = cljs.core.first(arglist__28798);
arglist__28798 = cljs.core.next(arglist__28798);
var k = cljs.core.first(arglist__28798);
arglist__28798 = cljs.core.next(arglist__28798);
var v = cljs.core.first(arglist__28798);
var kvs = cljs.core.rest(arglist__28798);
return G__28772__delegate(elem,k,v,kvs);
});
G__28772.cljs$core$IFn$_invoke$arity$variadic = G__28772__delegate;
return G__28772;
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
var G__28807__delegate = function (elem,k,ks){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__28803_28808 = cljs.core.seq.call(null,cljs.core.cons.call(null,k,ks));var chunk__28804_28809 = null;var count__28805_28810 = 0;var i__28806_28811 = 0;while(true){
if((i__28806_28811 < count__28805_28810))
{var k_28812__$1 = cljs.core._nth.call(null,chunk__28804_28809,i__28806_28811);remove_attr_BANG_.call(null,elem__$1,k_28812__$1);
{
var G__28813 = seq__28803_28808;
var G__28814 = chunk__28804_28809;
var G__28815 = count__28805_28810;
var G__28816 = (i__28806_28811 + 1);
seq__28803_28808 = G__28813;
chunk__28804_28809 = G__28814;
count__28805_28810 = G__28815;
i__28806_28811 = G__28816;
continue;
}
} else
{var temp__4092__auto___28817 = cljs.core.seq.call(null,seq__28803_28808);if(temp__4092__auto___28817)
{var seq__28803_28818__$1 = temp__4092__auto___28817;if(cljs.core.chunked_seq_QMARK_.call(null,seq__28803_28818__$1))
{var c__4191__auto___28819 = cljs.core.chunk_first.call(null,seq__28803_28818__$1);{
var G__28820 = cljs.core.chunk_rest.call(null,seq__28803_28818__$1);
var G__28821 = c__4191__auto___28819;
var G__28822 = cljs.core.count.call(null,c__4191__auto___28819);
var G__28823 = 0;
seq__28803_28808 = G__28820;
chunk__28804_28809 = G__28821;
count__28805_28810 = G__28822;
i__28806_28811 = G__28823;
continue;
}
} else
{var k_28824__$1 = cljs.core.first.call(null,seq__28803_28818__$1);remove_attr_BANG_.call(null,elem__$1,k_28824__$1);
{
var G__28825 = cljs.core.next.call(null,seq__28803_28818__$1);
var G__28826 = null;
var G__28827 = 0;
var G__28828 = 0;
seq__28803_28808 = G__28825;
chunk__28804_28809 = G__28826;
count__28805_28810 = G__28827;
i__28806_28811 = G__28828;
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
var G__28807 = function (elem,k,var_args){
var ks = null;if (arguments.length > 2) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__28807__delegate.call(this,elem,k,ks);};
G__28807.cljs$lang$maxFixedArity = 2;
G__28807.cljs$lang$applyTo = (function (arglist__28829){
var elem = cljs.core.first(arglist__28829);
arglist__28829 = cljs.core.next(arglist__28829);
var k = cljs.core.first(arglist__28829);
var ks = cljs.core.rest(arglist__28829);
return G__28807__delegate(elem,k,ks);
});
G__28807.cljs$core$IFn$_invoke$arity$variadic = G__28807__delegate;
return G__28807;
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
var toggle_BANG___2 = (function (elem,show_QMARK_){var G__28831 = dommy.template.__GT_node_like.call(null,elem);G__28831.style.display = ((show_QMARK_)?"":"none");
return G__28831;
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
dommy.attrs.hide_BANG_ = (function hide_BANG_(elem){var G__28833 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__28833,false);
return G__28833;
});
dommy.attrs.show_BANG_ = (function show_BANG_(elem){var G__28835 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__28835,true);
return G__28835;
});
/**
* Returns a map of the bounding client rect of `elem`
* as a map with [:top :left :right :bottom :width :height]
*/
dommy.attrs.bounding_client_rect = (function bounding_client_rect(elem){return cljs.core.js__GT_clj.call(null,(function (){var G__28837 = dommy.template.__GT_node_like.call(null,elem).getBoundingClientRect();(G__28837["constructor"] = Object);
return G__28837;
})(),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",4191781672),true);
});
dommy.attrs.scroll_into_view = (function scroll_into_view(elem,align_with_top_QMARK_){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var top = new cljs.core.Keyword(null,"top","top",1014019271).cljs$core$IFn$_invoke$arity$1(dommy.attrs.bounding_client_rect.call(null,elem__$1));if((window.innerHeight < (top + elem__$1.offsetHeight)))
{return elem__$1.scrollIntoView(align_with_top_QMARK_);
} else
{return null;
}
});
