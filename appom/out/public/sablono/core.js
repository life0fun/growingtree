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
var G__34325__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__34324 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var tag = cljs.core.nth.call(null,vec__34324,(0),null);
var body = cljs.core.nthnext.call(null,vec__34324,(1));
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else {
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__34325 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34326__i = 0, G__34326__a = new Array(arguments.length -  0);
while (G__34326__i < G__34326__a.length) {G__34326__a[G__34326__i] = arguments[G__34326__i + 0]; ++G__34326__i;}
  args = new cljs.core.IndexedSeq(G__34326__a,0);
} 
return G__34325__delegate.call(this,args);};
G__34325.cljs$lang$maxFixedArity = 0;
G__34325.cljs$lang$applyTo = (function (arglist__34327){
var args = cljs.core.seq(arglist__34327);
return G__34325__delegate(args);
});
G__34325.cljs$core$IFn$_invoke$arity$variadic = G__34325__delegate;
return G__34325;
})()
;
});
sablono.core.update_arglists = (function update_arglists(arglists){
var iter__4563__auto__ = (function iter__34332(s__34333){
return (new cljs.core.LazySeq(null,(function (){
var s__34333__$1 = s__34333;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__34333__$1);
if(temp__4126__auto__){
var s__34333__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__34333__$2)){
var c__4561__auto__ = cljs.core.chunk_first.call(null,s__34333__$2);
var size__4562__auto__ = cljs.core.count.call(null,c__4561__auto__);
var b__34335 = cljs.core.chunk_buffer.call(null,size__4562__auto__);
if((function (){var i__34334 = (0);
while(true){
if((i__34334 < size__4562__auto__)){
var args = cljs.core._nth.call(null,c__4561__auto__,i__34334);
cljs.core.chunk_append.call(null,b__34335,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__34336 = (i__34334 + (1));
i__34334 = G__34336;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34335),iter__34332.call(null,cljs.core.chunk_rest.call(null,s__34333__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34335),null);
}
} else {
var args = cljs.core.first.call(null,s__34333__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),iter__34332.call(null,cljs.core.rest.call(null,s__34333__$2)));
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
return (function (p1__34337_SHARP_){
return cljs.core.reset_BANG_.call(null,html,p1__34337_SHARP_);
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
var iter__4563__auto__ = (function iter__34342(s__34343){
return (new cljs.core.LazySeq(null,(function (){
var s__34343__$1 = s__34343;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__34343__$1);
if(temp__4126__auto__){
var s__34343__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__34343__$2)){
var c__4561__auto__ = cljs.core.chunk_first.call(null,s__34343__$2);
var size__4562__auto__ = cljs.core.count.call(null,c__4561__auto__);
var b__34345 = cljs.core.chunk_buffer.call(null,size__4562__auto__);
if((function (){var i__34344 = (0);
while(true){
if((i__34344 < size__4562__auto__)){
var style = cljs.core._nth.call(null,c__4561__auto__,i__34344);
cljs.core.chunk_append.call(null,b__34345,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__34346 = (i__34344 + (1));
i__34344 = G__34346;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34345),iter__34342.call(null,cljs.core.chunk_rest.call(null,s__34343__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34345),null);
}
} else {
var style = cljs.core.first.call(null,s__34343__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),iter__34342.call(null,cljs.core.rest.call(null,s__34343__$2)));
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
var G__34347__i = 0, G__34347__a = new Array(arguments.length -  0);
while (G__34347__i < G__34347__a.length) {G__34347__a[G__34347__i] = arguments[G__34347__i + 0]; ++G__34347__i;}
  styles = new cljs.core.IndexedSeq(G__34347__a,0);
} 
return include_css__delegate.call(this,styles);};
include_css.cljs$lang$maxFixedArity = 0;
include_css.cljs$lang$applyTo = (function (arglist__34348){
var styles = cljs.core.seq(arglist__34348);
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
sablono.core.link_to34349 = (function() { 
var link_to34349__delegate = function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
};
var link_to34349 = function (url,var_args){
var content = null;
if (arguments.length > 1) {
var G__34350__i = 0, G__34350__a = new Array(arguments.length -  1);
while (G__34350__i < G__34350__a.length) {G__34350__a[G__34350__i] = arguments[G__34350__i + 1]; ++G__34350__i;}
  content = new cljs.core.IndexedSeq(G__34350__a,0);
} 
return link_to34349__delegate.call(this,url,content);};
link_to34349.cljs$lang$maxFixedArity = 1;
link_to34349.cljs$lang$applyTo = (function (arglist__34351){
var url = cljs.core.first(arglist__34351);
var content = cljs.core.rest(arglist__34351);
return link_to34349__delegate(url,content);
});
link_to34349.cljs$core$IFn$_invoke$arity$variadic = link_to34349__delegate;
return link_to34349;
})()
;

sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to34349);
/**
* Wraps some content in a HTML hyperlink with the supplied e-mail
* address. If no content provided use the e-mail address as content.
* @param {...*} var_args
*/
sablono.core.mail_to34352 = (function() { 
var mail_to34352__delegate = function (e_mail,p__34353){
var vec__34355 = p__34353;
var content = cljs.core.nth.call(null,vec__34355,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__3807__auto__ = content;
if(cljs.core.truth_(or__3807__auto__)){
return or__3807__auto__;
} else {
return e_mail;
}
})()], null);
};
var mail_to34352 = function (e_mail,var_args){
var p__34353 = null;
if (arguments.length > 1) {
var G__34356__i = 0, G__34356__a = new Array(arguments.length -  1);
while (G__34356__i < G__34356__a.length) {G__34356__a[G__34356__i] = arguments[G__34356__i + 1]; ++G__34356__i;}
  p__34353 = new cljs.core.IndexedSeq(G__34356__a,0);
} 
return mail_to34352__delegate.call(this,e_mail,p__34353);};
mail_to34352.cljs$lang$maxFixedArity = 1;
mail_to34352.cljs$lang$applyTo = (function (arglist__34357){
var e_mail = cljs.core.first(arglist__34357);
var p__34353 = cljs.core.rest(arglist__34357);
return mail_to34352__delegate(e_mail,p__34353);
});
mail_to34352.cljs$core$IFn$_invoke$arity$variadic = mail_to34352__delegate;
return mail_to34352;
})()
;

sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to34352);
/**
* Wrap a collection in an unordered list.
*/
sablono.core.unordered_list34358 = (function unordered_list34358(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4563__auto__ = (function iter__34363(s__34364){
return (new cljs.core.LazySeq(null,(function (){
var s__34364__$1 = s__34364;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__34364__$1);
if(temp__4126__auto__){
var s__34364__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__34364__$2)){
var c__4561__auto__ = cljs.core.chunk_first.call(null,s__34364__$2);
var size__4562__auto__ = cljs.core.count.call(null,c__4561__auto__);
var b__34366 = cljs.core.chunk_buffer.call(null,size__4562__auto__);
if((function (){var i__34365 = (0);
while(true){
if((i__34365 < size__4562__auto__)){
var x = cljs.core._nth.call(null,c__4561__auto__,i__34365);
cljs.core.chunk_append.call(null,b__34366,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__34367 = (i__34365 + (1));
i__34365 = G__34367;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34366),iter__34363.call(null,cljs.core.chunk_rest.call(null,s__34364__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34366),null);
}
} else {
var x = cljs.core.first.call(null,s__34364__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),iter__34363.call(null,cljs.core.rest.call(null,s__34364__$2)));
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

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list34358);
/**
* Wrap a collection in an ordered list.
*/
sablono.core.ordered_list34368 = (function ordered_list34368(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__4563__auto__ = (function iter__34373(s__34374){
return (new cljs.core.LazySeq(null,(function (){
var s__34374__$1 = s__34374;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__34374__$1);
if(temp__4126__auto__){
var s__34374__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__34374__$2)){
var c__4561__auto__ = cljs.core.chunk_first.call(null,s__34374__$2);
var size__4562__auto__ = cljs.core.count.call(null,c__4561__auto__);
var b__34376 = cljs.core.chunk_buffer.call(null,size__4562__auto__);
if((function (){var i__34375 = (0);
while(true){
if((i__34375 < size__4562__auto__)){
var x = cljs.core._nth.call(null,c__4561__auto__,i__34375);
cljs.core.chunk_append.call(null,b__34376,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__34377 = (i__34375 + (1));
i__34375 = G__34377;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34376),iter__34373.call(null,cljs.core.chunk_rest.call(null,s__34374__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34376),null);
}
} else {
var x = cljs.core.first.call(null,s__34374__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),iter__34373.call(null,cljs.core.rest.call(null,s__34374__$2)));
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

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list34368);
/**
* Create an image element.
*/
sablono.core.image34378 = (function() {
var image34378 = null;
var image34378__1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});
var image34378__2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});
image34378 = function(src,alt){
switch(arguments.length){
case 1:
return image34378__1.call(this,src);
case 2:
return image34378__2.call(this,src,alt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
image34378.cljs$core$IFn$_invoke$arity$1 = image34378__1;
image34378.cljs$core$IFn$_invoke$arity$2 = image34378__2;
return image34378;
})()
;

sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image34378);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
* Create a field name from the supplied argument the current field group.
*/
sablono.core.make_name = (function make_name(name){
return cljs.core.reduce.call(null,(function (p1__34379_SHARP_,p2__34380_SHARP_){
return [cljs.core.str(p1__34379_SHARP_),cljs.core.str("["),cljs.core.str(p2__34380_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
* Create a field id from the supplied argument and current field group.
*/
sablono.core.make_id = (function make_id(name){
return cljs.core.reduce.call(null,(function (p1__34381_SHARP_,p2__34382_SHARP_){
return [cljs.core.str(p1__34381_SHARP_),cljs.core.str("-"),cljs.core.str(p2__34382_SHARP_)].join('');
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
sablono.core.hidden_field34383 = (function() {
var hidden_field34383 = null;
var hidden_field34383__1 = (function (name){
return hidden_field34383.call(null,name,null);
});
var hidden_field34383__2 = (function (name,value){
return sablono.core.input_field.call(null,"hidden",name,value);
});
hidden_field34383 = function(name,value){
switch(arguments.length){
case 1:
return hidden_field34383__1.call(this,name);
case 2:
return hidden_field34383__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hidden_field34383.cljs$core$IFn$_invoke$arity$1 = hidden_field34383__1;
hidden_field34383.cljs$core$IFn$_invoke$arity$2 = hidden_field34383__2;
return hidden_field34383;
})()
;

sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field34383);
/**
* Creates a new text input field.
*/
sablono.core.text_field34384 = (function() {
var text_field34384 = null;
var text_field34384__1 = (function (name){
return text_field34384.call(null,name,null);
});
var text_field34384__2 = (function (name,value){
return sablono.core.input_field.call(null,"text",name,value);
});
text_field34384 = function(name,value){
switch(arguments.length){
case 1:
return text_field34384__1.call(this,name);
case 2:
return text_field34384__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_field34384.cljs$core$IFn$_invoke$arity$1 = text_field34384__1;
text_field34384.cljs$core$IFn$_invoke$arity$2 = text_field34384__2;
return text_field34384;
})()
;

sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field34384);
/**
* Creates a new password field.
*/
sablono.core.password_field34385 = (function() {
var password_field34385 = null;
var password_field34385__1 = (function (name){
return password_field34385.call(null,name,null);
});
var password_field34385__2 = (function (name,value){
return sablono.core.input_field.call(null,"password",name,value);
});
password_field34385 = function(name,value){
switch(arguments.length){
case 1:
return password_field34385__1.call(this,name);
case 2:
return password_field34385__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
password_field34385.cljs$core$IFn$_invoke$arity$1 = password_field34385__1;
password_field34385.cljs$core$IFn$_invoke$arity$2 = password_field34385__2;
return password_field34385;
})()
;

sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field34385);
/**
* Creates a new email input field.
*/
sablono.core.email_field34386 = (function() {
var email_field34386 = null;
var email_field34386__1 = (function (name){
return email_field34386.call(null,name,null);
});
var email_field34386__2 = (function (name,value){
return sablono.core.input_field.call(null,"email",name,value);
});
email_field34386 = function(name,value){
switch(arguments.length){
case 1:
return email_field34386__1.call(this,name);
case 2:
return email_field34386__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
email_field34386.cljs$core$IFn$_invoke$arity$1 = email_field34386__1;
email_field34386.cljs$core$IFn$_invoke$arity$2 = email_field34386__2;
return email_field34386;
})()
;

sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field34386);
/**
* Creates a check box.
*/
sablono.core.check_box34387 = (function() {
var check_box34387 = null;
var check_box34387__1 = (function (name){
return check_box34387.call(null,name,null);
});
var check_box34387__2 = (function (name,checked_QMARK_){
return check_box34387.call(null,name,checked_QMARK_,"true");
});
var check_box34387__3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});
check_box34387 = function(name,checked_QMARK_,value){
switch(arguments.length){
case 1:
return check_box34387__1.call(this,name);
case 2:
return check_box34387__2.call(this,name,checked_QMARK_);
case 3:
return check_box34387__3.call(this,name,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_box34387.cljs$core$IFn$_invoke$arity$1 = check_box34387__1;
check_box34387.cljs$core$IFn$_invoke$arity$2 = check_box34387__2;
check_box34387.cljs$core$IFn$_invoke$arity$3 = check_box34387__3;
return check_box34387;
})()
;

sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box34387);
/**
* Creates a radio button.
*/
sablono.core.radio_button34388 = (function() {
var radio_button34388 = null;
var radio_button34388__1 = (function (group){
return radio_button34388.call(null,group,null);
});
var radio_button34388__2 = (function (group,checked_QMARK_){
return radio_button34388.call(null,group,checked_QMARK_,"true");
});
var radio_button34388__3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});
radio_button34388 = function(group,checked_QMARK_,value){
switch(arguments.length){
case 1:
return radio_button34388__1.call(this,group);
case 2:
return radio_button34388__2.call(this,group,checked_QMARK_);
case 3:
return radio_button34388__3.call(this,group,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
radio_button34388.cljs$core$IFn$_invoke$arity$1 = radio_button34388__1;
radio_button34388.cljs$core$IFn$_invoke$arity$2 = radio_button34388__2;
radio_button34388.cljs$core$IFn$_invoke$arity$3 = radio_button34388__3;
return radio_button34388;
})()
;

sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button34388);
/**
* Creates a seq of option tags from a collection.
*/
sablono.core.select_options34389 = (function() {
var select_options34389 = null;
var select_options34389__1 = (function (coll){
return select_options34389.call(null,coll,null);
});
var select_options34389__2 = (function (coll,selected){
var iter__4563__auto__ = (function iter__34398(s__34399){
return (new cljs.core.LazySeq(null,(function (){
var s__34399__$1 = s__34399;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__34399__$1);
if(temp__4126__auto__){
var s__34399__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__34399__$2)){
var c__4561__auto__ = cljs.core.chunk_first.call(null,s__34399__$2);
var size__4562__auto__ = cljs.core.count.call(null,c__4561__auto__);
var b__34401 = cljs.core.chunk_buffer.call(null,size__4562__auto__);
if((function (){var i__34400 = (0);
while(true){
if((i__34400 < size__4562__auto__)){
var x = cljs.core._nth.call(null,c__4561__auto__,i__34400);
cljs.core.chunk_append.call(null,b__34401,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__34404 = x;
var text = cljs.core.nth.call(null,vec__34404,(0),null);
var val = cljs.core.nth.call(null,vec__34404,(1),null);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),select_options34389.call(null,val,selected)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,val,selected)], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,x,selected)], null),x], null)));

var G__34406 = (i__34400 + (1));
i__34400 = G__34406;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34401),iter__34398.call(null,cljs.core.chunk_rest.call(null,s__34399__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34401),null);
}
} else {
var x = cljs.core.first.call(null,s__34399__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__34405 = x;
var text = cljs.core.nth.call(null,vec__34405,(0),null);
var val = cljs.core.nth.call(null,vec__34405,(1),null);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),select_options34389.call(null,val,selected)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,val,selected)], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,x,selected)], null),x], null)),iter__34398.call(null,cljs.core.rest.call(null,s__34399__$2)));
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
select_options34389 = function(coll,selected){
switch(arguments.length){
case 1:
return select_options34389__1.call(this,coll);
case 2:
return select_options34389__2.call(this,coll,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select_options34389.cljs$core$IFn$_invoke$arity$1 = select_options34389__1;
select_options34389.cljs$core$IFn$_invoke$arity$2 = select_options34389__2;
return select_options34389;
})()
;

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options34389);
/**
* Creates a drop-down box using the <select> tag.
*/
sablono.core.drop_down34407 = (function() {
var drop_down34407 = null;
var drop_down34407__2 = (function (name,options){
return drop_down34407.call(null,name,options,null);
});
var drop_down34407__3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});
drop_down34407 = function(name,options,selected){
switch(arguments.length){
case 2:
return drop_down34407__2.call(this,name,options);
case 3:
return drop_down34407__3.call(this,name,options,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_down34407.cljs$core$IFn$_invoke$arity$2 = drop_down34407__2;
drop_down34407.cljs$core$IFn$_invoke$arity$3 = drop_down34407__3;
return drop_down34407;
})()
;

sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down34407);
/**
* Creates a text area element.
*/
sablono.core.text_area34408 = (function() {
var text_area34408 = null;
var text_area34408__1 = (function (name){
return text_area34408.call(null,name,null);
});
var text_area34408__2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});
text_area34408 = function(name,value){
switch(arguments.length){
case 1:
return text_area34408__1.call(this,name);
case 2:
return text_area34408__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_area34408.cljs$core$IFn$_invoke$arity$1 = text_area34408__1;
text_area34408.cljs$core$IFn$_invoke$arity$2 = text_area34408__2;
return text_area34408;
})()
;

sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area34408);
/**
* Creates a file upload input.
*/
sablono.core.file_upload34409 = (function file_upload34409(name){
return sablono.core.input_field.call(null,"file",name,null);
});

sablono.core.file_upload = sablono.core.wrap_attrs.call(null,sablono.core.file_upload34409);
/**
* Creates a label for an input field with the supplied name.
*/
sablono.core.label34410 = (function label34410(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label34410);
/**
* Creates a submit button.
*/
sablono.core.submit_button34411 = (function submit_button34411(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button34411);
/**
* Creates a form reset button.
*/
sablono.core.reset_button34412 = (function reset_button34412(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button34412);
/**
* Create a form that points to a particular method and route.
* e.g. (form-to [:put "/post"]
* ...)
* @param {...*} var_args
*/
sablono.core.form_to34413 = (function() { 
var form_to34413__delegate = function (p__34414,body){
var vec__34416 = p__34414;
var method = cljs.core.nth.call(null,vec__34416,(0),null);
var action = cljs.core.nth.call(null,vec__34416,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,"_method",method_str)], null)),body));
};
var form_to34413 = function (p__34414,var_args){
var body = null;
if (arguments.length > 1) {
var G__34417__i = 0, G__34417__a = new Array(arguments.length -  1);
while (G__34417__i < G__34417__a.length) {G__34417__a[G__34417__i] = arguments[G__34417__i + 1]; ++G__34417__i;}
  body = new cljs.core.IndexedSeq(G__34417__a,0);
} 
return form_to34413__delegate.call(this,p__34414,body);};
form_to34413.cljs$lang$maxFixedArity = 1;
form_to34413.cljs$lang$applyTo = (function (arglist__34418){
var p__34414 = cljs.core.first(arglist__34418);
var body = cljs.core.rest(arglist__34418);
return form_to34413__delegate(p__34414,body);
});
form_to34413.cljs$core$IFn$_invoke$arity$variadic = form_to34413__delegate;
return form_to34413;
})()
;

sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to34413);

//# sourceMappingURL=core.js.map