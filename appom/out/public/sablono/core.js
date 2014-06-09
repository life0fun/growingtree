// Compiled by ClojureScript 0.0-2173
goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('clojure.walk');
goog.require('clojure.string');
goog.require('sablono.util');
goog.require('goog.dom');
goog.require('goog.dom');
goog.require('sablono.interpreter');
goog.require('sablono.interpreter');
goog.require('sablono.util');
goog.require('clojure.walk');
goog.require('clojure.string');
/**
* Add an optional attribute argument to a function that returns a element vector.
*/
sablono.core.wrap_attrs = (function wrap_attrs(func){return (function() { 
var G__17189__delegate = function (args){if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args)))
{var vec__17188 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));var tag = cljs.core.nth.call(null,vec__17188,0,null);var body = cljs.core.nthnext.call(null,vec__17188,1);if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body)))
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else
{return cljs.core.apply.call(null,func,args);
}
};
var G__17189 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__17189__delegate.call(this,args);};
G__17189.cljs$lang$maxFixedArity = 0;
G__17189.cljs$lang$applyTo = (function (arglist__17190){
var args = cljs.core.seq(arglist__17190);
return G__17189__delegate(args);
});
G__17189.cljs$core$IFn$_invoke$arity$variadic = G__17189__delegate;
return G__17189;
})()
;
});
sablono.core.update_arglists = (function update_arglists(arglists){var iter__4160__auto__ = (function iter__17195(s__17196){return (new cljs.core.LazySeq(null,(function (){var s__17196__$1 = s__17196;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__17196__$1);if(temp__4092__auto__)
{var s__17196__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__17196__$2))
{var c__4158__auto__ = cljs.core.chunk_first.call(null,s__17196__$2);var size__4159__auto__ = cljs.core.count.call(null,c__4158__auto__);var b__17198 = cljs.core.chunk_buffer.call(null,size__4159__auto__);if((function (){var i__17197 = 0;while(true){
if((i__17197 < size__4159__auto__))
{var args = cljs.core._nth.call(null,c__4158__auto__,i__17197);cljs.core.chunk_append.call(null,b__17198,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",-1682549128,null),args)));
{
var G__17199 = (i__17197 + 1);
i__17197 = G__17199;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17198),iter__17195.call(null,cljs.core.chunk_rest.call(null,s__17196__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17198),null);
}
} else
{var args = cljs.core.first.call(null,s__17196__$2);return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",-1682549128,null),args)),iter__17195.call(null,cljs.core.rest.call(null,s__17196__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4160__auto__.call(null,arglists);
});
/**
* Render the React `component` as an HTML string.
*/
sablono.core.render = (function render(component){var html = cljs.core.atom.call(null,null);React.renderComponentToString(component,(function (p1__17200_SHARP_){return cljs.core.reset_BANG_.call(null,html,p1__17200_SHARP_);
}));
return cljs.core.deref.call(null,html);
});
/**
* Include a list of external stylesheet files.
* @param {...*} var_args
*/
sablono.core.include_css = (function() { 
var include_css__delegate = function (styles){var iter__4160__auto__ = (function iter__17205(s__17206){return (new cljs.core.LazySeq(null,(function (){var s__17206__$1 = s__17206;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__17206__$1);if(temp__4092__auto__)
{var s__17206__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__17206__$2))
{var c__4158__auto__ = cljs.core.chunk_first.call(null,s__17206__$2);var size__4159__auto__ = cljs.core.count.call(null,c__4158__auto__);var b__17208 = cljs.core.chunk_buffer.call(null,size__4159__auto__);if((function (){var i__17207 = 0;while(true){
if((i__17207 < size__4159__auto__))
{var style = cljs.core._nth.call(null,c__4158__auto__,i__17207);cljs.core.chunk_append.call(null,b__17208,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",1017226092),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),"text/css",new cljs.core.Keyword(null,"href","href",1017115293),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1014017035),"stylesheet"], null)], null));
{
var G__17209 = (i__17207 + 1);
i__17207 = G__17209;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17208),iter__17205.call(null,cljs.core.chunk_rest.call(null,s__17206__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17208),null);
}
} else
{var style = cljs.core.first.call(null,s__17206__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",1017226092),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),"text/css",new cljs.core.Keyword(null,"href","href",1017115293),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1014017035),"stylesheet"], null)], null),iter__17205.call(null,cljs.core.rest.call(null,s__17206__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4160__auto__.call(null,styles);
};
var include_css = function (var_args){
var styles = null;if (arguments.length > 0) {
  styles = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return include_css__delegate.call(this,styles);};
include_css.cljs$lang$maxFixedArity = 0;
include_css.cljs$lang$applyTo = (function (arglist__17210){
var styles = cljs.core.seq(arglist__17210);
return include_css__delegate(styles);
});
include_css.cljs$core$IFn$_invoke$arity$variadic = include_css__delegate;
return include_css;
})()
;
/**
* Include the JavaScript library at `src`.
*/
sablono.core.include_js = (function include_js(src){return goog.dom.appendChild(goog.dom.getDocument().body,goog.dom.createDom("script",{"src": src}));
});
/**
* Include Facebook's React JavaScript library.
*/
sablono.core.include_react = (function include_react(){return sablono.core.include_js.call(null,"http://fb.me/react-0.8.0.js");
});
/**
* Wraps some content in a HTML hyperlink with the supplied URL.
* @param {...*} var_args
*/
sablono.core.link_to17211 = (function() { 
var link_to17211__delegate = function (url,content){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",1013904339),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",1017115293),sablono.util.as_str.call(null,url)], null),content], null);
};
var link_to17211 = function (url,var_args){
var content = null;if (arguments.length > 1) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return link_to17211__delegate.call(this,url,content);};
link_to17211.cljs$lang$maxFixedArity = 1;
link_to17211.cljs$lang$applyTo = (function (arglist__17212){
var url = cljs.core.first(arglist__17212);
var content = cljs.core.rest(arglist__17212);
return link_to17211__delegate(url,content);
});
link_to17211.cljs$core$IFn$_invoke$arity$variadic = link_to17211__delegate;
return link_to17211;
})()
;
sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to17211);
/**
* Wraps some content in a HTML hyperlink with the supplied e-mail
* address. If no content provided use the e-mail address as content.
* @param {...*} var_args
*/
sablono.core.mail_to17213 = (function() { 
var mail_to17213__delegate = function (e_mail,p__17214){var vec__17216 = p__17214;var content = cljs.core.nth.call(null,vec__17216,0,null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",1013904339),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",1017115293),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__3443__auto__ = content;if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{return e_mail;
}
})()], null);
};
var mail_to17213 = function (e_mail,var_args){
var p__17214 = null;if (arguments.length > 1) {
  p__17214 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return mail_to17213__delegate.call(this,e_mail,p__17214);};
mail_to17213.cljs$lang$maxFixedArity = 1;
mail_to17213.cljs$lang$applyTo = (function (arglist__17217){
var e_mail = cljs.core.first(arglist__17217);
var p__17214 = cljs.core.rest(arglist__17217);
return mail_to17213__delegate(e_mail,p__17214);
});
mail_to17213.cljs$core$IFn$_invoke$arity$variadic = mail_to17213__delegate;
return mail_to17213;
})()
;
sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to17213);
/**
* Wrap a collection in an unordered list.
*/
sablono.core.unordered_list17218 = (function unordered_list17218(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",1013907977),(function (){var iter__4160__auto__ = (function iter__17223(s__17224){return (new cljs.core.LazySeq(null,(function (){var s__17224__$1 = s__17224;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__17224__$1);if(temp__4092__auto__)
{var s__17224__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__17224__$2))
{var c__4158__auto__ = cljs.core.chunk_first.call(null,s__17224__$2);var size__4159__auto__ = cljs.core.count.call(null,c__4158__auto__);var b__17226 = cljs.core.chunk_buffer.call(null,size__4159__auto__);if((function (){var i__17225 = 0;while(true){
if((i__17225 < size__4159__auto__))
{var x = cljs.core._nth.call(null,c__4158__auto__,i__17225);cljs.core.chunk_append.call(null,b__17226,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null));
{
var G__17227 = (i__17225 + 1);
i__17225 = G__17227;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17226),iter__17223.call(null,cljs.core.chunk_rest.call(null,s__17224__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17226),null);
}
} else
{var x = cljs.core.first.call(null,s__17224__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null),iter__17223.call(null,cljs.core.rest.call(null,s__17224__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4160__auto__.call(null,coll);
})()], null);
});
sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list17218);
/**
* Wrap a collection in an ordered list.
*/
sablono.core.ordered_list17228 = (function ordered_list17228(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",1013907791),(function (){var iter__4160__auto__ = (function iter__17233(s__17234){return (new cljs.core.LazySeq(null,(function (){var s__17234__$1 = s__17234;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__17234__$1);if(temp__4092__auto__)
{var s__17234__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__17234__$2))
{var c__4158__auto__ = cljs.core.chunk_first.call(null,s__17234__$2);var size__4159__auto__ = cljs.core.count.call(null,c__4158__auto__);var b__17236 = cljs.core.chunk_buffer.call(null,size__4159__auto__);if((function (){var i__17235 = 0;while(true){
if((i__17235 < size__4159__auto__))
{var x = cljs.core._nth.call(null,c__4158__auto__,i__17235);cljs.core.chunk_append.call(null,b__17236,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null));
{
var G__17237 = (i__17235 + 1);
i__17235 = G__17237;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17236),iter__17233.call(null,cljs.core.chunk_rest.call(null,s__17234__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17236),null);
}
} else
{var x = cljs.core.first.call(null,s__17234__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null),iter__17233.call(null,cljs.core.rest.call(null,s__17234__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4160__auto__.call(null,coll);
})()], null);
});
sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list17228);
/**
* Create an image element.
*/
sablono.core.image17238 = (function() {
var image17238 = null;
var image17238__1 = (function (src){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1014008629),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",1014018390),sablono.util.as_str.call(null,src)], null)], null);
});
var image17238__2 = (function (src,alt){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1014008629),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",1014018390),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",1014000923),alt], null)], null);
});
image17238 = function(src,alt){
switch(arguments.length){
case 1:
return image17238__1.call(this,src);
case 2:
return image17238__2.call(this,src,alt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
image17238.cljs$core$IFn$_invoke$arity$1 = image17238__1;
image17238.cljs$core$IFn$_invoke$arity$2 = image17238__2;
return image17238;
})()
;
sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image17238);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
* Create a field name from the supplied argument the current field group.
*/
sablono.core.make_name = (function make_name(name){return cljs.core.reduce.call(null,(function (p1__17239_SHARP_,p2__17240_SHARP_){return [cljs.core.str(p1__17239_SHARP_),cljs.core.str("["),cljs.core.str(p2__17240_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
* Create a field id from the supplied argument and current field group.
*/
sablono.core.make_id = (function make_id(name){return cljs.core.reduce.call(null,(function (p1__17241_SHARP_,p2__17242_SHARP_){return [cljs.core.str(p1__17241_SHARP_),cljs.core.str("-"),cljs.core.str(p2__17242_SHARP_)].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
* Creates a new <input> element.
*/
sablono.core.input_field = (function input_field(type,name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1017479852),type,new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",1125876963),value], null)], null);
});
/**
* Creates a hidden input field.
*/
sablono.core.hidden_field17243 = (function() {
var hidden_field17243 = null;
var hidden_field17243__1 = (function (name){return hidden_field17243.call(null,name,null);
});
var hidden_field17243__2 = (function (name,value){return sablono.core.input_field.call(null,"hidden",name,value);
});
hidden_field17243 = function(name,value){
switch(arguments.length){
case 1:
return hidden_field17243__1.call(this,name);
case 2:
return hidden_field17243__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hidden_field17243.cljs$core$IFn$_invoke$arity$1 = hidden_field17243__1;
hidden_field17243.cljs$core$IFn$_invoke$arity$2 = hidden_field17243__2;
return hidden_field17243;
})()
;
sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field17243);
/**
* Creates a new text input field.
*/
sablono.core.text_field17244 = (function() {
var text_field17244 = null;
var text_field17244__1 = (function (name){return text_field17244.call(null,name,null);
});
var text_field17244__2 = (function (name,value){return sablono.core.input_field.call(null,"text",name,value);
});
text_field17244 = function(name,value){
switch(arguments.length){
case 1:
return text_field17244__1.call(this,name);
case 2:
return text_field17244__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_field17244.cljs$core$IFn$_invoke$arity$1 = text_field17244__1;
text_field17244.cljs$core$IFn$_invoke$arity$2 = text_field17244__2;
return text_field17244;
})()
;
sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field17244);
/**
* Creates a new password field.
*/
sablono.core.password_field17245 = (function() {
var password_field17245 = null;
var password_field17245__1 = (function (name){return password_field17245.call(null,name,null);
});
var password_field17245__2 = (function (name,value){return sablono.core.input_field.call(null,"password",name,value);
});
password_field17245 = function(name,value){
switch(arguments.length){
case 1:
return password_field17245__1.call(this,name);
case 2:
return password_field17245__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
password_field17245.cljs$core$IFn$_invoke$arity$1 = password_field17245__1;
password_field17245.cljs$core$IFn$_invoke$arity$2 = password_field17245__2;
return password_field17245;
})()
;
sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field17245);
/**
* Creates a new email input field.
*/
sablono.core.email_field17246 = (function() {
var email_field17246 = null;
var email_field17246__1 = (function (name){return email_field17246.call(null,name,null);
});
var email_field17246__2 = (function (name,value){return sablono.core.input_field.call(null,"email",name,value);
});
email_field17246 = function(name,value){
switch(arguments.length){
case 1:
return email_field17246__1.call(this,name);
case 2:
return email_field17246__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
email_field17246.cljs$core$IFn$_invoke$arity$1 = email_field17246__1;
email_field17246.cljs$core$IFn$_invoke$arity$2 = email_field17246__2;
return email_field17246;
})()
;
sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field17246);
/**
* Creates a check box.
*/
sablono.core.check_box17247 = (function() {
var check_box17247 = null;
var check_box17247__1 = (function (name){return check_box17247.call(null,name,null);
});
var check_box17247__2 = (function (name,checked_QMARK_){return check_box17247.call(null,name,checked_QMARK_,"true");
});
var check_box17247__3 = (function (name,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1017479852),"checkbox",new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",1125876963),value,new cljs.core.Keyword(null,"checked","checked",1756218137),checked_QMARK_], null)], null);
});
check_box17247 = function(name,checked_QMARK_,value){
switch(arguments.length){
case 1:
return check_box17247__1.call(this,name);
case 2:
return check_box17247__2.call(this,name,checked_QMARK_);
case 3:
return check_box17247__3.call(this,name,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_box17247.cljs$core$IFn$_invoke$arity$1 = check_box17247__1;
check_box17247.cljs$core$IFn$_invoke$arity$2 = check_box17247__2;
check_box17247.cljs$core$IFn$_invoke$arity$3 = check_box17247__3;
return check_box17247;
})()
;
sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box17247);
/**
* Creates a radio button.
*/
sablono.core.radio_button17248 = (function() {
var radio_button17248 = null;
var radio_button17248__1 = (function (group){return radio_button17248.call(null,group,null);
});
var radio_button17248__2 = (function (group,checked_QMARK_){return radio_button17248.call(null,group,checked_QMARK_,"true");
});
var radio_button17248__3 = (function (group,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1017479852),"radio",new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",1125876963),value,new cljs.core.Keyword(null,"checked","checked",1756218137),checked_QMARK_], null)], null);
});
radio_button17248 = function(group,checked_QMARK_,value){
switch(arguments.length){
case 1:
return radio_button17248__1.call(this,group);
case 2:
return radio_button17248__2.call(this,group,checked_QMARK_);
case 3:
return radio_button17248__3.call(this,group,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
radio_button17248.cljs$core$IFn$_invoke$arity$1 = radio_button17248__1;
radio_button17248.cljs$core$IFn$_invoke$arity$2 = radio_button17248__2;
radio_button17248.cljs$core$IFn$_invoke$arity$3 = radio_button17248__3;
return radio_button17248;
})()
;
sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button17248);
/**
* Creates a seq of option tags from a collection.
*/
sablono.core.select_options17249 = (function() {
var select_options17249 = null;
var select_options17249__1 = (function (coll){return select_options17249.call(null,coll,null);
});
var select_options17249__2 = (function (coll,selected){var iter__4160__auto__ = (function iter__17258(s__17259){return (new cljs.core.LazySeq(null,(function (){var s__17259__$1 = s__17259;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__17259__$1);if(temp__4092__auto__)
{var s__17259__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__17259__$2))
{var c__4158__auto__ = cljs.core.chunk_first.call(null,s__17259__$2);var size__4159__auto__ = cljs.core.count.call(null,c__4158__auto__);var b__17261 = cljs.core.chunk_buffer.call(null,size__4159__auto__);if((function (){var i__17260 = 0;while(true){
if((i__17260 < size__4159__auto__))
{var x = cljs.core._nth.call(null,c__4158__auto__,i__17260);cljs.core.chunk_append.call(null,b__17261,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__17264 = x;var text = cljs.core.nth.call(null,vec__17264,0,null);var val = cljs.core.nth.call(null,vec__17264,1,null);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",933131038),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1116631654),text], null),select_options17249.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",1125876963),val,new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,val,selected)], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,x,selected)], null),x], null)));
{
var G__17266 = (i__17260 + 1);
i__17260 = G__17266;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17261),iter__17258.call(null,cljs.core.chunk_rest.call(null,s__17259__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17261),null);
}
} else
{var x = cljs.core.first.call(null,s__17259__$2);return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__17265 = x;var text = cljs.core.nth.call(null,vec__17265,0,null);var val = cljs.core.nth.call(null,vec__17265,1,null);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",933131038),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1116631654),text], null),select_options17249.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",1125876963),val,new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,val,selected)], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,x,selected)], null),x], null)),iter__17258.call(null,cljs.core.rest.call(null,s__17259__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4160__auto__.call(null,coll);
});
select_options17249 = function(coll,selected){
switch(arguments.length){
case 1:
return select_options17249__1.call(this,coll);
case 2:
return select_options17249__2.call(this,coll,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select_options17249.cljs$core$IFn$_invoke$arity$1 = select_options17249__1;
select_options17249.cljs$core$IFn$_invoke$arity$2 = select_options17249__2;
return select_options17249;
})()
;
sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options17249);
/**
* Creates a drop-down box using the <select> tag.
*/
sablono.core.drop_down17267 = (function() {
var drop_down17267 = null;
var drop_down17267__2 = (function (name,options){return drop_down17267.call(null,name,options,null);
});
var drop_down17267__3 = (function (name,options,selected){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",4402849902),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});
drop_down17267 = function(name,options,selected){
switch(arguments.length){
case 2:
return drop_down17267__2.call(this,name,options);
case 3:
return drop_down17267__3.call(this,name,options,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_down17267.cljs$core$IFn$_invoke$arity$2 = drop_down17267__2;
drop_down17267.cljs$core$IFn$_invoke$arity$3 = drop_down17267__3;
return drop_down17267;
})()
;
sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down17267);
/**
* Creates a text area element.
*/
sablono.core.text_area17268 = (function() {
var text_area17268 = null;
var text_area17268__1 = (function (name){return text_area17268.call(null,name,null);
});
var text_area17268__2 = (function (name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",4305627820),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",1125876963),value], null)], null);
});
text_area17268 = function(name,value){
switch(arguments.length){
case 1:
return text_area17268__1.call(this,name);
case 2:
return text_area17268__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_area17268.cljs$core$IFn$_invoke$arity$1 = text_area17268__1;
text_area17268.cljs$core$IFn$_invoke$arity$2 = text_area17268__2;
return text_area17268;
})()
;
sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area17268);
/**
* Creates a file upload input.
*/
sablono.core.file_upload17269 = (function file_upload17269(name){return sablono.core.input_field.call(null,"file",name,null);
});
sablono.core.file_upload = sablono.core.wrap_attrs.call(null,sablono.core.file_upload17269);
/**
* Creates a label for an input field with the supplied name.
*/
sablono.core.label17270 = (function label17270(name,text){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1116631654),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",2249940112),sablono.core.make_id.call(null,name)], null),text], null);
});
sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label17270);
/**
* Creates a submit button.
*/
sablono.core.submit_button17271 = (function submit_button17271(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"submit",new cljs.core.Keyword(null,"value","value",1125876963),text], null)], null);
});
sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button17271);
/**
* Creates a form reset button.
*/
sablono.core.reset_button17272 = (function reset_button17272(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"reset",new cljs.core.Keyword(null,"value","value",1125876963),text], null)], null);
});
sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button17272);
/**
* Create a form that points to a particular method and route.
* e.g. (form-to [:put "/post"]
* ...)
* @param {...*} var_args
*/
sablono.core.form_to17273 = (function() { 
var form_to17273__delegate = function (p__17274,body){var vec__17276 = p__17274;var method = cljs.core.nth.call(null,vec__17276,0,null);var action = cljs.core.nth.call(null,vec__17276,1,null);var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));var action_uri = sablono.util.to_uri.call(null,action);return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1014006472),null,new cljs.core.Keyword(null,"post","post",1017351186),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",1017053238),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",4231316563),method_str,new cljs.core.Keyword(null,"action","action",3885920680),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",1017053238),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",4231316563),"POST",new cljs.core.Keyword(null,"action","action",3885920680),action_uri], null),sablono.core.hidden_field.call(null,"_method",method_str)], null)),body));
};
var form_to17273 = function (p__17274,var_args){
var body = null;if (arguments.length > 1) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return form_to17273__delegate.call(this,p__17274,body);};
form_to17273.cljs$lang$maxFixedArity = 1;
form_to17273.cljs$lang$applyTo = (function (arglist__17277){
var p__17274 = cljs.core.first(arglist__17277);
var body = cljs.core.rest(arglist__17277);
return form_to17273__delegate(p__17274,body);
});
form_to17273.cljs$core$IFn$_invoke$arity$variadic = form_to17273__delegate;
return form_to17273;
})()
;
sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to17273);

//# sourceMappingURL=core.js.map