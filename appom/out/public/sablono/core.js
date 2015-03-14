// Compiled by ClojureScript 0.0-2850 {}
goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('sablono.interpreter');
goog.require('sablono.util');
goog.require('clojure.walk');
goog.require('clojure.string');
/**
* Add an optional attribute argument to a function that returns a element vector.
*/
sablono.core.wrap_attrs = (function wrap_attrs(func){
return (function() { 
var G__35734__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__35733 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var tag = cljs.core.nth.call(null,vec__35733,(0),null);
var body = cljs.core.nthnext.call(null,vec__35733,(1));
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else {
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__35734 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35735__i = 0, G__35735__a = new Array(arguments.length -  0);
while (G__35735__i < G__35735__a.length) {G__35735__a[G__35735__i] = arguments[G__35735__i + 0]; ++G__35735__i;}
  args = new cljs.core.IndexedSeq(G__35735__a,0);
} 
return G__35734__delegate.call(this,args);};
G__35734.cljs$lang$maxFixedArity = 0;
G__35734.cljs$lang$applyTo = (function (arglist__35736){
var args = cljs.core.seq(arglist__35736);
return G__35734__delegate(args);
});
G__35734.cljs$core$IFn$_invoke$arity$variadic = G__35734__delegate;
return G__35734;
})()
;
});
sablono.core.update_arglists = (function update_arglists(arglists){
var iter__4563__auto__ = (function iter__35741(s__35742){
return (new cljs.core.LazySeq(null,(function (){
var s__35742__$1 = s__35742;
while(true){
var temp__4406__auto__ = cljs.core.seq.call(null,s__35742__$1);
if(temp__4406__auto__){
var s__35742__$2 = temp__4406__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__35742__$2)){
var c__4561__auto__ = cljs.core.chunk_first.call(null,s__35742__$2);
var size__4562__auto__ = cljs.core.count.call(null,c__4561__auto__);
var b__35744 = cljs.core.chunk_buffer.call(null,size__4562__auto__);
if((function (){var i__35743 = (0);
while(true){
if((i__35743 < size__4562__auto__)){
var args = cljs.core._nth.call(null,c__4561__auto__,i__35743);
cljs.core.chunk_append.call(null,b__35744,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__35745 = (i__35743 + (1));
i__35743 = G__35745;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35744),iter__35741.call(null,cljs.core.chunk_rest.call(null,s__35742__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35744),null);
}
} else {
var args = cljs.core.first.call(null,s__35742__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),iter__35741.call(null,cljs.core.rest.call(null,s__35742__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4563__auto__.call(null,arglists);
});
/**
* Render the React `component` as an HTML string.
*/
sablono.core.render = (function render(component){
var html = cljs.core.atom.call(null,null);
React.renderComponentToString(component,((function (html){
return (function (p1__35746_SHARP_){
return cljs.core.reset_BANG_.call(null,html,p1__35746_SHARP_);
});})(html))
);

return cljs.core.deref.call(null,html);
});
/**
* Include a list of external stylesheet files.
* @param {...*} var_args
*/
sablono.core.include_css = (function() { 
var include_css__delegate = function (styles){
var iter__4563__auto__ = (function iter__35751(s__35752){
return (new cljs.core.LazySeq(null,(function (){
var s__35752__$1 = s__35752;
while(true){
var temp__4406__auto__ = cljs.core.seq.call(null,s__35752__$1);
if(temp__4406__auto__){
var s__35752__$2 = temp__4406__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__35752__$2)){
var c__4561__auto__ = cljs.core.chunk_first.call(null,s__35752__$2);
var size__4562__auto__ = cljs.core.count.call(null,c__4561__auto__);
var b__35754 = cljs.core.chunk_buffer.call(null,size__4562__auto__);
if((function (){var i__35753 = (0);
while(true){
if((i__35753 < size__4562__auto__)){
var style = cljs.core._nth.call(null,c__4561__auto__,i__35753);
cljs.core.chunk_append.call(null,b__35754,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__35755 = (i__35753 + (1));
i__35753 = G__35755;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35754),iter__35751.call(null,cljs.core.chunk_rest.call(null,s__35752__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35754),null);
}
} else {
var style = cljs.core.first.call(null,s__35752__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),iter__35751.call(null,cljs.core.rest.call(null,s__35752__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4563__auto__.call(null,styles);
};
var include_css = function (var_args){
var styles = null;
if (arguments.length > 0) {
var G__35756__i = 0, G__35756__a = new Array(arguments.length -  0);
while (G__35756__i < G__35756__a.length) {G__35756__a[G__35756__i] = arguments[G__35756__i + 0]; ++G__35756__i;}
  styles = new cljs.core.IndexedSeq(G__35756__a,0);
} 
return include_css__delegate.call(this,styles);};
include_css.cljs$lang$maxFixedArity = 0;
include_css.cljs$lang$applyTo = (function (arglist__35757){
var styles = cljs.core.seq(arglist__35757);
return include_css__delegate(styles);
});
include_css.cljs$core$IFn$_invoke$arity$variadic = include_css__delegate;
return include_css;
})()
;
/**
* Include the JavaScript library at `src`.
*/
sablono.core.include_js = (function include_js(src){
return goog.dom.appendChild(goog.dom.getDocument().body,goog.dom.createDom("script",{"src": src}));
});
/**
* Include Facebook's React JavaScript library.
*/
sablono.core.include_react = (function include_react(){
return sablono.core.include_js.call(null,"http://fb.me/react-0.8.0.js");
});
/**
* Wraps some content in a HTML hyperlink with the supplied URL.
* @param {...*} var_args
*/
sablono.core.link_to35758 = (function() { 
var link_to35758__delegate = function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
};
var link_to35758 = function (url,var_args){
var content = null;
if (arguments.length > 1) {
var G__35759__i = 0, G__35759__a = new Array(arguments.length -  1);
while (G__35759__i < G__35759__a.length) {G__35759__a[G__35759__i] = arguments[G__35759__i + 1]; ++G__35759__i;}
  content = new cljs.core.IndexedSeq(G__35759__a,0);
} 
return link_to35758__delegate.call(this,url,content);};
link_to35758.cljs$lang$maxFixedArity = 1;
link_to35758.cljs$lang$applyTo = (function (arglist__35760){
var url = cljs.core.first(arglist__35760);
var content = cljs.core.rest(arglist__35760);
return link_to35758__delegate(url,content);
});
link_to35758.cljs$core$IFn$_invoke$arity$variadic = link_to35758__delegate;
return link_to35758;
})()
;

sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to35758);
/**
* Wraps some content in a HTML hyperlink with the supplied e-mail
* address. If no content provided use the e-mail address as content.
* @param {...*} var_args
*/
sablono.core.mail_to35761 = (function() { 
var mail_to35761__delegate = function (e_mail,p__35762){
var vec__35764 = p__35762;
var content = cljs.core.nth.call(null,vec__35764,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__3807__auto__ = content;
if(cljs.core.truth_(or__3807__auto__)){
return or__3807__auto__;
} else {
return e_mail;
}
})()], null);
};
var mail_to35761 = function (e_mail,var_args){
var p__35762 = null;
if (arguments.length > 1) {
var G__35765__i = 0, G__35765__a = new Array(arguments.length -  1);
while (G__35765__i < G__35765__a.length) {G__35765__a[G__35765__i] = arguments[G__35765__i + 1]; ++G__35765__i;}
  p__35762 = new cljs.core.IndexedSeq(G__35765__a,0);
} 
return mail_to35761__delegate.call(this,e_mail,p__35762);};
mail_to35761.cljs$lang$maxFixedArity = 1;
mail_to35761.cljs$lang$applyTo = (function (arglist__35766){
var e_mail = cljs.core.first(arglist__35766);
var p__35762 = cljs.core.rest(arglist__35766);
return mail_to35761__delegate(e_mail,p__35762);
});
mail_to35761.cljs$core$IFn$_invoke$arity$variadic = mail_to35761__delegate;
return mail_to35761;
})()
;

sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to35761);
/**
* Wrap a collection in an unordered list.
*/
sablono.core.unordered_list35767 = (function unordered_list35767(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4563__auto__ = (function iter__35772(s__35773){
return (new cljs.core.LazySeq(null,(function (){
var s__35773__$1 = s__35773;
while(true){
var temp__4406__auto__ = cljs.core.seq.call(null,s__35773__$1);
if(temp__4406__auto__){
var s__35773__$2 = temp__4406__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__35773__$2)){
var c__4561__auto__ = cljs.core.chunk_first.call(null,s__35773__$2);
var size__4562__auto__ = cljs.core.count.call(null,c__4561__auto__);
var b__35775 = cljs.core.chunk_buffer.call(null,size__4562__auto__);
if((function (){var i__35774 = (0);
while(true){
if((i__35774 < size__4562__auto__)){
var x = cljs.core._nth.call(null,c__4561__auto__,i__35774);
cljs.core.chunk_append.call(null,b__35775,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__35776 = (i__35774 + (1));
i__35774 = G__35776;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35775),iter__35772.call(null,cljs.core.chunk_rest.call(null,s__35773__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35775),null);
}
} else {
var x = cljs.core.first.call(null,s__35773__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),iter__35772.call(null,cljs.core.rest.call(null,s__35773__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4563__auto__.call(null,coll);
})()], null);
});

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list35767);
/**
* Wrap a collection in an ordered list.
*/
sablono.core.ordered_list35777 = (function ordered_list35777(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__4563__auto__ = (function iter__35782(s__35783){
return (new cljs.core.LazySeq(null,(function (){
var s__35783__$1 = s__35783;
while(true){
var temp__4406__auto__ = cljs.core.seq.call(null,s__35783__$1);
if(temp__4406__auto__){
var s__35783__$2 = temp__4406__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__35783__$2)){
var c__4561__auto__ = cljs.core.chunk_first.call(null,s__35783__$2);
var size__4562__auto__ = cljs.core.count.call(null,c__4561__auto__);
var b__35785 = cljs.core.chunk_buffer.call(null,size__4562__auto__);
if((function (){var i__35784 = (0);
while(true){
if((i__35784 < size__4562__auto__)){
var x = cljs.core._nth.call(null,c__4561__auto__,i__35784);
cljs.core.chunk_append.call(null,b__35785,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__35786 = (i__35784 + (1));
i__35784 = G__35786;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35785),iter__35782.call(null,cljs.core.chunk_rest.call(null,s__35783__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35785),null);
}
} else {
var x = cljs.core.first.call(null,s__35783__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),iter__35782.call(null,cljs.core.rest.call(null,s__35783__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4563__auto__.call(null,coll);
})()], null);
});

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list35777);
/**
* Create an image element.
*/
sablono.core.image35787 = (function() {
var image35787 = null;
var image35787__1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});
var image35787__2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});
image35787 = function(src,alt){
switch(arguments.length){
case 1:
return image35787__1.call(this,src);
case 2:
return image35787__2.call(this,src,alt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
image35787.cljs$core$IFn$_invoke$arity$1 = image35787__1;
image35787.cljs$core$IFn$_invoke$arity$2 = image35787__2;
return image35787;
})()
;

sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image35787);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
* Create a field name from the supplied argument the current field group.
*/
sablono.core.make_name = (function make_name(name){
return cljs.core.reduce.call(null,(function (p1__35788_SHARP_,p2__35789_SHARP_){
return [cljs.core.str(p1__35788_SHARP_),cljs.core.str("["),cljs.core.str(p2__35789_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
* Create a field id from the supplied argument and current field group.
*/
sablono.core.make_id = (function make_id(name){
return cljs.core.reduce.call(null,(function (p1__35790_SHARP_,p2__35791_SHARP_){
return [cljs.core.str(p1__35790_SHARP_),cljs.core.str("-"),cljs.core.str(p2__35791_SHARP_)].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
* Creates a new <input> element.
*/
sablono.core.input_field = (function input_field(type,name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});
/**
* Creates a hidden input field.
*/
sablono.core.hidden_field35792 = (function() {
var hidden_field35792 = null;
var hidden_field35792__1 = (function (name){
return hidden_field35792.call(null,name,null);
});
var hidden_field35792__2 = (function (name,value){
return sablono.core.input_field.call(null,"hidden",name,value);
});
hidden_field35792 = function(name,value){
switch(arguments.length){
case 1:
return hidden_field35792__1.call(this,name);
case 2:
return hidden_field35792__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hidden_field35792.cljs$core$IFn$_invoke$arity$1 = hidden_field35792__1;
hidden_field35792.cljs$core$IFn$_invoke$arity$2 = hidden_field35792__2;
return hidden_field35792;
})()
;

sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field35792);
/**
* Creates a new text input field.
*/
sablono.core.text_field35793 = (function() {
var text_field35793 = null;
var text_field35793__1 = (function (name){
return text_field35793.call(null,name,null);
});
var text_field35793__2 = (function (name,value){
return sablono.core.input_field.call(null,"text",name,value);
});
text_field35793 = function(name,value){
switch(arguments.length){
case 1:
return text_field35793__1.call(this,name);
case 2:
return text_field35793__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_field35793.cljs$core$IFn$_invoke$arity$1 = text_field35793__1;
text_field35793.cljs$core$IFn$_invoke$arity$2 = text_field35793__2;
return text_field35793;
})()
;

sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field35793);
/**
* Creates a new password field.
*/
sablono.core.password_field35794 = (function() {
var password_field35794 = null;
var password_field35794__1 = (function (name){
return password_field35794.call(null,name,null);
});
var password_field35794__2 = (function (name,value){
return sablono.core.input_field.call(null,"password",name,value);
});
password_field35794 = function(name,value){
switch(arguments.length){
case 1:
return password_field35794__1.call(this,name);
case 2:
return password_field35794__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
password_field35794.cljs$core$IFn$_invoke$arity$1 = password_field35794__1;
password_field35794.cljs$core$IFn$_invoke$arity$2 = password_field35794__2;
return password_field35794;
})()
;

sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field35794);
/**
* Creates a new email input field.
*/
sablono.core.email_field35795 = (function() {
var email_field35795 = null;
var email_field35795__1 = (function (name){
return email_field35795.call(null,name,null);
});
var email_field35795__2 = (function (name,value){
return sablono.core.input_field.call(null,"email",name,value);
});
email_field35795 = function(name,value){
switch(arguments.length){
case 1:
return email_field35795__1.call(this,name);
case 2:
return email_field35795__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
email_field35795.cljs$core$IFn$_invoke$arity$1 = email_field35795__1;
email_field35795.cljs$core$IFn$_invoke$arity$2 = email_field35795__2;
return email_field35795;
})()
;

sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field35795);
/**
* Creates a check box.
*/
sablono.core.check_box35796 = (function() {
var check_box35796 = null;
var check_box35796__1 = (function (name){
return check_box35796.call(null,name,null);
});
var check_box35796__2 = (function (name,checked_QMARK_){
return check_box35796.call(null,name,checked_QMARK_,"true");
});
var check_box35796__3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});
check_box35796 = function(name,checked_QMARK_,value){
switch(arguments.length){
case 1:
return check_box35796__1.call(this,name);
case 2:
return check_box35796__2.call(this,name,checked_QMARK_);
case 3:
return check_box35796__3.call(this,name,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_box35796.cljs$core$IFn$_invoke$arity$1 = check_box35796__1;
check_box35796.cljs$core$IFn$_invoke$arity$2 = check_box35796__2;
check_box35796.cljs$core$IFn$_invoke$arity$3 = check_box35796__3;
return check_box35796;
})()
;

sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box35796);
/**
* Creates a radio button.
*/
sablono.core.radio_button35797 = (function() {
var radio_button35797 = null;
var radio_button35797__1 = (function (group){
return radio_button35797.call(null,group,null);
});
var radio_button35797__2 = (function (group,checked_QMARK_){
return radio_button35797.call(null,group,checked_QMARK_,"true");
});
var radio_button35797__3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});
radio_button35797 = function(group,checked_QMARK_,value){
switch(arguments.length){
case 1:
return radio_button35797__1.call(this,group);
case 2:
return radio_button35797__2.call(this,group,checked_QMARK_);
case 3:
return radio_button35797__3.call(this,group,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
radio_button35797.cljs$core$IFn$_invoke$arity$1 = radio_button35797__1;
radio_button35797.cljs$core$IFn$_invoke$arity$2 = radio_button35797__2;
radio_button35797.cljs$core$IFn$_invoke$arity$3 = radio_button35797__3;
return radio_button35797;
})()
;

sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button35797);
/**
* Creates a seq of option tags from a collection.
*/
sablono.core.select_options35798 = (function() {
var select_options35798 = null;
var select_options35798__1 = (function (coll){
return select_options35798.call(null,coll,null);
});
var select_options35798__2 = (function (coll,selected){
var iter__4563__auto__ = (function iter__35807(s__35808){
return (new cljs.core.LazySeq(null,(function (){
var s__35808__$1 = s__35808;
while(true){
var temp__4406__auto__ = cljs.core.seq.call(null,s__35808__$1);
if(temp__4406__auto__){
var s__35808__$2 = temp__4406__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__35808__$2)){
var c__4561__auto__ = cljs.core.chunk_first.call(null,s__35808__$2);
var size__4562__auto__ = cljs.core.count.call(null,c__4561__auto__);
var b__35810 = cljs.core.chunk_buffer.call(null,size__4562__auto__);
if((function (){var i__35809 = (0);
while(true){
if((i__35809 < size__4562__auto__)){
var x = cljs.core._nth.call(null,c__4561__auto__,i__35809);
cljs.core.chunk_append.call(null,b__35810,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__35813 = x;
var text = cljs.core.nth.call(null,vec__35813,(0),null);
var val = cljs.core.nth.call(null,vec__35813,(1),null);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),select_options35798.call(null,val,selected)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,val,selected)], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,x,selected)], null),x], null)));

var G__35815 = (i__35809 + (1));
i__35809 = G__35815;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35810),iter__35807.call(null,cljs.core.chunk_rest.call(null,s__35808__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35810),null);
}
} else {
var x = cljs.core.first.call(null,s__35808__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__35814 = x;
var text = cljs.core.nth.call(null,vec__35814,(0),null);
var val = cljs.core.nth.call(null,vec__35814,(1),null);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),select_options35798.call(null,val,selected)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,val,selected)], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,x,selected)], null),x], null)),iter__35807.call(null,cljs.core.rest.call(null,s__35808__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4563__auto__.call(null,coll);
});
select_options35798 = function(coll,selected){
switch(arguments.length){
case 1:
return select_options35798__1.call(this,coll);
case 2:
return select_options35798__2.call(this,coll,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select_options35798.cljs$core$IFn$_invoke$arity$1 = select_options35798__1;
select_options35798.cljs$core$IFn$_invoke$arity$2 = select_options35798__2;
return select_options35798;
})()
;

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options35798);
/**
* Creates a drop-down box using the <select> tag.
*/
sablono.core.drop_down35816 = (function() {
var drop_down35816 = null;
var drop_down35816__2 = (function (name,options){
return drop_down35816.call(null,name,options,null);
});
var drop_down35816__3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});
drop_down35816 = function(name,options,selected){
switch(arguments.length){
case 2:
return drop_down35816__2.call(this,name,options);
case 3:
return drop_down35816__3.call(this,name,options,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_down35816.cljs$core$IFn$_invoke$arity$2 = drop_down35816__2;
drop_down35816.cljs$core$IFn$_invoke$arity$3 = drop_down35816__3;
return drop_down35816;
})()
;

sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down35816);
/**
* Creates a text area element.
*/
sablono.core.text_area35817 = (function() {
var text_area35817 = null;
var text_area35817__1 = (function (name){
return text_area35817.call(null,name,null);
});
var text_area35817__2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});
text_area35817 = function(name,value){
switch(arguments.length){
case 1:
return text_area35817__1.call(this,name);
case 2:
return text_area35817__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_area35817.cljs$core$IFn$_invoke$arity$1 = text_area35817__1;
text_area35817.cljs$core$IFn$_invoke$arity$2 = text_area35817__2;
return text_area35817;
})()
;

sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area35817);
/**
* Creates a file upload input.
*/
sablono.core.file_upload35818 = (function file_upload35818(name){
return sablono.core.input_field.call(null,"file",name,null);
});

sablono.core.file_upload = sablono.core.wrap_attrs.call(null,sablono.core.file_upload35818);
/**
* Creates a label for an input field with the supplied name.
*/
sablono.core.label35819 = (function label35819(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label35819);
/**
* Creates a submit button.
*/
sablono.core.submit_button35820 = (function submit_button35820(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button35820);
/**
* Creates a form reset button.
*/
sablono.core.reset_button35821 = (function reset_button35821(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button35821);
/**
* Create a form that points to a particular method and route.
* e.g. (form-to [:put "/post"]
* ...)
* @param {...*} var_args
*/
sablono.core.form_to35822 = (function() { 
var form_to35822__delegate = function (p__35823,body){
var vec__35825 = p__35823;
var method = cljs.core.nth.call(null,vec__35825,(0),null);
var action = cljs.core.nth.call(null,vec__35825,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,"_method",method_str)], null)),body));
};
var form_to35822 = function (p__35823,var_args){
var body = null;
if (arguments.length > 1) {
var G__35826__i = 0, G__35826__a = new Array(arguments.length -  1);
while (G__35826__i < G__35826__a.length) {G__35826__a[G__35826__i] = arguments[G__35826__i + 1]; ++G__35826__i;}
  body = new cljs.core.IndexedSeq(G__35826__a,0);
} 
return form_to35822__delegate.call(this,p__35823,body);};
form_to35822.cljs$lang$maxFixedArity = 1;
form_to35822.cljs$lang$applyTo = (function (arglist__35827){
var p__35823 = cljs.core.first(arglist__35827);
var body = cljs.core.rest(arglist__35827);
return form_to35822__delegate(p__35823,body);
});
form_to35822.cljs$core$IFn$_invoke$arity$variadic = form_to35822__delegate;
return form_to35822;
})()
;

sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to35822);

//# sourceMappingURL=core.js.map