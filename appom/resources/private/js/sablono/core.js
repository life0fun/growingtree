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
var G__28840__delegate = function (args){if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args)))
{var vec__28839 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));var tag = cljs.core.nth.call(null,vec__28839,0,null);var body = cljs.core.nthnext.call(null,vec__28839,1);if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body)))
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else
{return cljs.core.apply.call(null,func,args);
}
};
var G__28840 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__28840__delegate.call(this,args);};
G__28840.cljs$lang$maxFixedArity = 0;
G__28840.cljs$lang$applyTo = (function (arglist__28841){
var args = cljs.core.seq(arglist__28841);
return G__28840__delegate(args);
});
G__28840.cljs$core$IFn$_invoke$arity$variadic = G__28840__delegate;
return G__28840;
})()
;
});
sablono.core.update_arglists = (function update_arglists(arglists){var iter__4160__auto__ = (function iter__28846(s__28847){return (new cljs.core.LazySeq(null,(function (){var s__28847__$1 = s__28847;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__28847__$1);if(temp__4092__auto__)
{var s__28847__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__28847__$2))
{var c__4158__auto__ = cljs.core.chunk_first.call(null,s__28847__$2);var size__4159__auto__ = cljs.core.count.call(null,c__4158__auto__);var b__28849 = cljs.core.chunk_buffer.call(null,size__4159__auto__);if((function (){var i__28848 = 0;while(true){
if((i__28848 < size__4159__auto__))
{var args = cljs.core._nth.call(null,c__4158__auto__,i__28848);cljs.core.chunk_append.call(null,b__28849,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",-1682549128,null),args)));
{
var G__28850 = (i__28848 + 1);
i__28848 = G__28850;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28849),iter__28846.call(null,cljs.core.chunk_rest.call(null,s__28847__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28849),null);
}
} else
{var args = cljs.core.first.call(null,s__28847__$2);return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",-1682549128,null),args)),iter__28846.call(null,cljs.core.rest.call(null,s__28847__$2)));
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
sablono.core.render = (function render(component){var html = cljs.core.atom.call(null,null);React.renderComponentToString(component,(function (p1__28851_SHARP_){return cljs.core.reset_BANG_.call(null,html,p1__28851_SHARP_);
}));
return cljs.core.deref.call(null,html);
});
/**
* Include a list of external stylesheet files.
* @param {...*} var_args
*/
sablono.core.include_css = (function() { 
var include_css__delegate = function (styles){var iter__4160__auto__ = (function iter__28856(s__28857){return (new cljs.core.LazySeq(null,(function (){var s__28857__$1 = s__28857;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__28857__$1);if(temp__4092__auto__)
{var s__28857__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__28857__$2))
{var c__4158__auto__ = cljs.core.chunk_first.call(null,s__28857__$2);var size__4159__auto__ = cljs.core.count.call(null,c__4158__auto__);var b__28859 = cljs.core.chunk_buffer.call(null,size__4159__auto__);if((function (){var i__28858 = 0;while(true){
if((i__28858 < size__4159__auto__))
{var style = cljs.core._nth.call(null,c__4158__auto__,i__28858);cljs.core.chunk_append.call(null,b__28859,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",1017226092),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),"text/css",new cljs.core.Keyword(null,"href","href",1017115293),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1014017035),"stylesheet"], null)], null));
{
var G__28860 = (i__28858 + 1);
i__28858 = G__28860;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28859),iter__28856.call(null,cljs.core.chunk_rest.call(null,s__28857__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28859),null);
}
} else
{var style = cljs.core.first.call(null,s__28857__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",1017226092),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),"text/css",new cljs.core.Keyword(null,"href","href",1017115293),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1014017035),"stylesheet"], null)], null),iter__28856.call(null,cljs.core.rest.call(null,s__28857__$2)));
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
include_css.cljs$lang$applyTo = (function (arglist__28861){
var styles = cljs.core.seq(arglist__28861);
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
sablono.core.link_to28862 = (function() { 
var link_to28862__delegate = function (url,content){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",1013904339),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",1017115293),sablono.util.as_str.call(null,url)], null),content], null);
};
var link_to28862 = function (url,var_args){
var content = null;if (arguments.length > 1) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return link_to28862__delegate.call(this,url,content);};
link_to28862.cljs$lang$maxFixedArity = 1;
link_to28862.cljs$lang$applyTo = (function (arglist__28863){
var url = cljs.core.first(arglist__28863);
var content = cljs.core.rest(arglist__28863);
return link_to28862__delegate(url,content);
});
link_to28862.cljs$core$IFn$_invoke$arity$variadic = link_to28862__delegate;
return link_to28862;
})()
;
sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to28862);
/**
* Wraps some content in a HTML hyperlink with the supplied e-mail
* address. If no content provided use the e-mail address as content.
* @param {...*} var_args
*/
sablono.core.mail_to28864 = (function() { 
var mail_to28864__delegate = function (e_mail,p__28865){var vec__28867 = p__28865;var content = cljs.core.nth.call(null,vec__28867,0,null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",1013904339),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",1017115293),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__3443__auto__ = content;if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{return e_mail;
}
})()], null);
};
var mail_to28864 = function (e_mail,var_args){
var p__28865 = null;if (arguments.length > 1) {
  p__28865 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return mail_to28864__delegate.call(this,e_mail,p__28865);};
mail_to28864.cljs$lang$maxFixedArity = 1;
mail_to28864.cljs$lang$applyTo = (function (arglist__28868){
var e_mail = cljs.core.first(arglist__28868);
var p__28865 = cljs.core.rest(arglist__28868);
return mail_to28864__delegate(e_mail,p__28865);
});
mail_to28864.cljs$core$IFn$_invoke$arity$variadic = mail_to28864__delegate;
return mail_to28864;
})()
;
sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to28864);
/**
* Wrap a collection in an unordered list.
*/
sablono.core.unordered_list28869 = (function unordered_list28869(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",1013907977),(function (){var iter__4160__auto__ = (function iter__28874(s__28875){return (new cljs.core.LazySeq(null,(function (){var s__28875__$1 = s__28875;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__28875__$1);if(temp__4092__auto__)
{var s__28875__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__28875__$2))
{var c__4158__auto__ = cljs.core.chunk_first.call(null,s__28875__$2);var size__4159__auto__ = cljs.core.count.call(null,c__4158__auto__);var b__28877 = cljs.core.chunk_buffer.call(null,size__4159__auto__);if((function (){var i__28876 = 0;while(true){
if((i__28876 < size__4159__auto__))
{var x = cljs.core._nth.call(null,c__4158__auto__,i__28876);cljs.core.chunk_append.call(null,b__28877,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null));
{
var G__28878 = (i__28876 + 1);
i__28876 = G__28878;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28877),iter__28874.call(null,cljs.core.chunk_rest.call(null,s__28875__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28877),null);
}
} else
{var x = cljs.core.first.call(null,s__28875__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null),iter__28874.call(null,cljs.core.rest.call(null,s__28875__$2)));
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
sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list28869);
/**
* Wrap a collection in an ordered list.
*/
sablono.core.ordered_list28879 = (function ordered_list28879(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",1013907791),(function (){var iter__4160__auto__ = (function iter__28884(s__28885){return (new cljs.core.LazySeq(null,(function (){var s__28885__$1 = s__28885;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__28885__$1);if(temp__4092__auto__)
{var s__28885__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__28885__$2))
{var c__4158__auto__ = cljs.core.chunk_first.call(null,s__28885__$2);var size__4159__auto__ = cljs.core.count.call(null,c__4158__auto__);var b__28887 = cljs.core.chunk_buffer.call(null,size__4159__auto__);if((function (){var i__28886 = 0;while(true){
if((i__28886 < size__4159__auto__))
{var x = cljs.core._nth.call(null,c__4158__auto__,i__28886);cljs.core.chunk_append.call(null,b__28887,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null));
{
var G__28888 = (i__28886 + 1);
i__28886 = G__28888;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28887),iter__28884.call(null,cljs.core.chunk_rest.call(null,s__28885__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28887),null);
}
} else
{var x = cljs.core.first.call(null,s__28885__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null),iter__28884.call(null,cljs.core.rest.call(null,s__28885__$2)));
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
sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list28879);
/**
* Create an image element.
*/
sablono.core.image28889 = (function() {
var image28889 = null;
var image28889__1 = (function (src){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1014008629),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",1014018390),sablono.util.as_str.call(null,src)], null)], null);
});
var image28889__2 = (function (src,alt){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1014008629),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",1014018390),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",1014000923),alt], null)], null);
});
image28889 = function(src,alt){
switch(arguments.length){
case 1:
return image28889__1.call(this,src);
case 2:
return image28889__2.call(this,src,alt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
image28889.cljs$core$IFn$_invoke$arity$1 = image28889__1;
image28889.cljs$core$IFn$_invoke$arity$2 = image28889__2;
return image28889;
})()
;
sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image28889);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
* Create a field name from the supplied argument the current field group.
*/
sablono.core.make_name = (function make_name(name){return cljs.core.reduce.call(null,(function (p1__28890_SHARP_,p2__28891_SHARP_){return [cljs.core.str(p1__28890_SHARP_),cljs.core.str("["),cljs.core.str(p2__28891_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
* Create a field id from the supplied argument and current field group.
*/
sablono.core.make_id = (function make_id(name){return cljs.core.reduce.call(null,(function (p1__28892_SHARP_,p2__28893_SHARP_){return [cljs.core.str(p1__28892_SHARP_),cljs.core.str("-"),cljs.core.str(p2__28893_SHARP_)].join('');
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
sablono.core.hidden_field28894 = (function() {
var hidden_field28894 = null;
var hidden_field28894__1 = (function (name){return hidden_field28894.call(null,name,null);
});
var hidden_field28894__2 = (function (name,value){return sablono.core.input_field.call(null,"hidden",name,value);
});
hidden_field28894 = function(name,value){
switch(arguments.length){
case 1:
return hidden_field28894__1.call(this,name);
case 2:
return hidden_field28894__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hidden_field28894.cljs$core$IFn$_invoke$arity$1 = hidden_field28894__1;
hidden_field28894.cljs$core$IFn$_invoke$arity$2 = hidden_field28894__2;
return hidden_field28894;
})()
;
sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field28894);
/**
* Creates a new text input field.
*/
sablono.core.text_field28895 = (function() {
var text_field28895 = null;
var text_field28895__1 = (function (name){return text_field28895.call(null,name,null);
});
var text_field28895__2 = (function (name,value){return sablono.core.input_field.call(null,"text",name,value);
});
text_field28895 = function(name,value){
switch(arguments.length){
case 1:
return text_field28895__1.call(this,name);
case 2:
return text_field28895__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_field28895.cljs$core$IFn$_invoke$arity$1 = text_field28895__1;
text_field28895.cljs$core$IFn$_invoke$arity$2 = text_field28895__2;
return text_field28895;
})()
;
sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field28895);
/**
* Creates a new password field.
*/
sablono.core.password_field28896 = (function() {
var password_field28896 = null;
var password_field28896__1 = (function (name){return password_field28896.call(null,name,null);
});
var password_field28896__2 = (function (name,value){return sablono.core.input_field.call(null,"password",name,value);
});
password_field28896 = function(name,value){
switch(arguments.length){
case 1:
return password_field28896__1.call(this,name);
case 2:
return password_field28896__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
password_field28896.cljs$core$IFn$_invoke$arity$1 = password_field28896__1;
password_field28896.cljs$core$IFn$_invoke$arity$2 = password_field28896__2;
return password_field28896;
})()
;
sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field28896);
/**
* Creates a new email input field.
*/
sablono.core.email_field28897 = (function() {
var email_field28897 = null;
var email_field28897__1 = (function (name){return email_field28897.call(null,name,null);
});
var email_field28897__2 = (function (name,value){return sablono.core.input_field.call(null,"email",name,value);
});
email_field28897 = function(name,value){
switch(arguments.length){
case 1:
return email_field28897__1.call(this,name);
case 2:
return email_field28897__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
email_field28897.cljs$core$IFn$_invoke$arity$1 = email_field28897__1;
email_field28897.cljs$core$IFn$_invoke$arity$2 = email_field28897__2;
return email_field28897;
})()
;
sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field28897);
/**
* Creates a check box.
*/
sablono.core.check_box28898 = (function() {
var check_box28898 = null;
var check_box28898__1 = (function (name){return check_box28898.call(null,name,null);
});
var check_box28898__2 = (function (name,checked_QMARK_){return check_box28898.call(null,name,checked_QMARK_,"true");
});
var check_box28898__3 = (function (name,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1017479852),"checkbox",new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",1125876963),value,new cljs.core.Keyword(null,"checked","checked",1756218137),checked_QMARK_], null)], null);
});
check_box28898 = function(name,checked_QMARK_,value){
switch(arguments.length){
case 1:
return check_box28898__1.call(this,name);
case 2:
return check_box28898__2.call(this,name,checked_QMARK_);
case 3:
return check_box28898__3.call(this,name,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_box28898.cljs$core$IFn$_invoke$arity$1 = check_box28898__1;
check_box28898.cljs$core$IFn$_invoke$arity$2 = check_box28898__2;
check_box28898.cljs$core$IFn$_invoke$arity$3 = check_box28898__3;
return check_box28898;
})()
;
sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box28898);
/**
* Creates a radio button.
*/
sablono.core.radio_button28899 = (function() {
var radio_button28899 = null;
var radio_button28899__1 = (function (group){return radio_button28899.call(null,group,null);
});
var radio_button28899__2 = (function (group,checked_QMARK_){return radio_button28899.call(null,group,checked_QMARK_,"true");
});
var radio_button28899__3 = (function (group,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1017479852),"radio",new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",1125876963),value,new cljs.core.Keyword(null,"checked","checked",1756218137),checked_QMARK_], null)], null);
});
radio_button28899 = function(group,checked_QMARK_,value){
switch(arguments.length){
case 1:
return radio_button28899__1.call(this,group);
case 2:
return radio_button28899__2.call(this,group,checked_QMARK_);
case 3:
return radio_button28899__3.call(this,group,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
radio_button28899.cljs$core$IFn$_invoke$arity$1 = radio_button28899__1;
radio_button28899.cljs$core$IFn$_invoke$arity$2 = radio_button28899__2;
radio_button28899.cljs$core$IFn$_invoke$arity$3 = radio_button28899__3;
return radio_button28899;
})()
;
sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button28899);
/**
* Creates a seq of option tags from a collection.
*/
sablono.core.select_options28900 = (function() {
var select_options28900 = null;
var select_options28900__1 = (function (coll){return select_options28900.call(null,coll,null);
});
var select_options28900__2 = (function (coll,selected){var iter__4160__auto__ = (function iter__28909(s__28910){return (new cljs.core.LazySeq(null,(function (){var s__28910__$1 = s__28910;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__28910__$1);if(temp__4092__auto__)
{var s__28910__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__28910__$2))
{var c__4158__auto__ = cljs.core.chunk_first.call(null,s__28910__$2);var size__4159__auto__ = cljs.core.count.call(null,c__4158__auto__);var b__28912 = cljs.core.chunk_buffer.call(null,size__4159__auto__);if((function (){var i__28911 = 0;while(true){
if((i__28911 < size__4159__auto__))
{var x = cljs.core._nth.call(null,c__4158__auto__,i__28911);cljs.core.chunk_append.call(null,b__28912,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__28915 = x;var text = cljs.core.nth.call(null,vec__28915,0,null);var val = cljs.core.nth.call(null,vec__28915,1,null);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",933131038),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1116631654),text], null),select_options28900.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",1125876963),val,new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,val,selected)], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,x,selected)], null),x], null)));
{
var G__28917 = (i__28911 + 1);
i__28911 = G__28917;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28912),iter__28909.call(null,cljs.core.chunk_rest.call(null,s__28910__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28912),null);
}
} else
{var x = cljs.core.first.call(null,s__28910__$2);return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__28916 = x;var text = cljs.core.nth.call(null,vec__28916,0,null);var val = cljs.core.nth.call(null,vec__28916,1,null);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",933131038),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1116631654),text], null),select_options28900.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",1125876963),val,new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,val,selected)], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,x,selected)], null),x], null)),iter__28909.call(null,cljs.core.rest.call(null,s__28910__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4160__auto__.call(null,coll);
});
select_options28900 = function(coll,selected){
switch(arguments.length){
case 1:
return select_options28900__1.call(this,coll);
case 2:
return select_options28900__2.call(this,coll,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select_options28900.cljs$core$IFn$_invoke$arity$1 = select_options28900__1;
select_options28900.cljs$core$IFn$_invoke$arity$2 = select_options28900__2;
return select_options28900;
})()
;
sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options28900);
/**
* Creates a drop-down box using the <select> tag.
*/
sablono.core.drop_down28918 = (function() {
var drop_down28918 = null;
var drop_down28918__2 = (function (name,options){return drop_down28918.call(null,name,options,null);
});
var drop_down28918__3 = (function (name,options,selected){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",4402849902),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});
drop_down28918 = function(name,options,selected){
switch(arguments.length){
case 2:
return drop_down28918__2.call(this,name,options);
case 3:
return drop_down28918__3.call(this,name,options,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_down28918.cljs$core$IFn$_invoke$arity$2 = drop_down28918__2;
drop_down28918.cljs$core$IFn$_invoke$arity$3 = drop_down28918__3;
return drop_down28918;
})()
;
sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down28918);
/**
* Creates a text area element.
*/
sablono.core.text_area28919 = (function() {
var text_area28919 = null;
var text_area28919__1 = (function (name){return text_area28919.call(null,name,null);
});
var text_area28919__2 = (function (name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",4305627820),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",1125876963),value], null)], null);
});
text_area28919 = function(name,value){
switch(arguments.length){
case 1:
return text_area28919__1.call(this,name);
case 2:
return text_area28919__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_area28919.cljs$core$IFn$_invoke$arity$1 = text_area28919__1;
text_area28919.cljs$core$IFn$_invoke$arity$2 = text_area28919__2;
return text_area28919;
})()
;
sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area28919);
/**
* Creates a file upload input.
*/
sablono.core.file_upload28920 = (function file_upload28920(name){return sablono.core.input_field.call(null,"file",name,null);
});
sablono.core.file_upload = sablono.core.wrap_attrs.call(null,sablono.core.file_upload28920);
/**
* Creates a label for an input field with the supplied name.
*/
sablono.core.label28921 = (function label28921(name,text){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1116631654),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",2249940112),sablono.core.make_id.call(null,name)], null),text], null);
});
sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label28921);
/**
* Creates a submit button.
*/
sablono.core.submit_button28922 = (function submit_button28922(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"submit",new cljs.core.Keyword(null,"value","value",1125876963),text], null)], null);
});
sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button28922);
/**
* Creates a form reset button.
*/
sablono.core.reset_button28923 = (function reset_button28923(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"reset",new cljs.core.Keyword(null,"value","value",1125876963),text], null)], null);
});
sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button28923);
/**
* Create a form that points to a particular method and route.
* e.g. (form-to [:put "/post"]
* ...)
* @param {...*} var_args
*/
sablono.core.form_to28924 = (function() { 
var form_to28924__delegate = function (p__28925,body){var vec__28927 = p__28925;var method = cljs.core.nth.call(null,vec__28927,0,null);var action = cljs.core.nth.call(null,vec__28927,1,null);var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));var action_uri = sablono.util.to_uri.call(null,action);return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1014006472),null,new cljs.core.Keyword(null,"post","post",1017351186),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",1017053238),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",4231316563),method_str,new cljs.core.Keyword(null,"action","action",3885920680),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",1017053238),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",4231316563),"POST",new cljs.core.Keyword(null,"action","action",3885920680),action_uri], null),sablono.core.hidden_field.call(null,"_method",method_str)], null)),body));
};
var form_to28924 = function (p__28925,var_args){
var body = null;if (arguments.length > 1) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return form_to28924__delegate.call(this,p__28925,body);};
form_to28924.cljs$lang$maxFixedArity = 1;
form_to28924.cljs$lang$applyTo = (function (arglist__28928){
var p__28925 = cljs.core.first(arglist__28928);
var body = cljs.core.rest(arglist__28928);
return form_to28924__delegate(p__28925,body);
});
form_to28924.cljs$core$IFn$_invoke$arity$variadic = form_to28924__delegate;
return form_to28924;
})()
;
sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to28924);
