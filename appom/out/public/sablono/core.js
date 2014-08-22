// Compiled by ClojureScript 0.0-2277
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
var G__18019__delegate = function (args){if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args)))
{var vec__18018 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));var tag = cljs.core.nth.call(null,vec__18018,(0),null);var body = cljs.core.nthnext.call(null,vec__18018,(1));if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body)))
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else
{return cljs.core.apply.call(null,func,args);
}
};
var G__18019 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__18019__delegate.call(this,args);};
G__18019.cljs$lang$maxFixedArity = 0;
G__18019.cljs$lang$applyTo = (function (arglist__18020){
var args = cljs.core.seq(arglist__18020);
return G__18019__delegate(args);
});
G__18019.cljs$core$IFn$_invoke$arity$variadic = G__18019__delegate;
return G__18019;
})()
;
});
sablono.core.update_arglists = (function update_arglists(arglists){var iter__4268__auto__ = (function iter__18025(s__18026){return (new cljs.core.LazySeq(null,(function (){var s__18026__$1 = s__18026;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__18026__$1);if(temp__4126__auto__)
{var s__18026__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__18026__$2))
{var c__4266__auto__ = cljs.core.chunk_first.call(null,s__18026__$2);var size__4267__auto__ = cljs.core.count.call(null,c__4266__auto__);var b__18028 = cljs.core.chunk_buffer.call(null,size__4267__auto__);if((function (){var i__18027 = (0);while(true){
if((i__18027 < size__4267__auto__))
{var args = cljs.core._nth.call(null,c__4266__auto__,i__18027);cljs.core.chunk_append.call(null,b__18028,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));
{
var G__18029 = (i__18027 + (1));
i__18027 = G__18029;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18028),iter__18025.call(null,cljs.core.chunk_rest.call(null,s__18026__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18028),null);
}
} else
{var args = cljs.core.first.call(null,s__18026__$2);return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),iter__18025.call(null,cljs.core.rest.call(null,s__18026__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4268__auto__.call(null,arglists);
});
/**
* Render the React `component` as an HTML string.
*/
sablono.core.render = (function render(component){var html = cljs.core.atom.call(null,null);React.renderComponentToString(component,((function (html){
return (function (p1__18030_SHARP_){return cljs.core.reset_BANG_.call(null,html,p1__18030_SHARP_);
});})(html))
);
return cljs.core.deref.call(null,html);
});
/**
* Include a list of external stylesheet files.
* @param {...*} var_args
*/
sablono.core.include_css = (function() { 
var include_css__delegate = function (styles){var iter__4268__auto__ = (function iter__18035(s__18036){return (new cljs.core.LazySeq(null,(function (){var s__18036__$1 = s__18036;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__18036__$1);if(temp__4126__auto__)
{var s__18036__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__18036__$2))
{var c__4266__auto__ = cljs.core.chunk_first.call(null,s__18036__$2);var size__4267__auto__ = cljs.core.count.call(null,c__4266__auto__);var b__18038 = cljs.core.chunk_buffer.call(null,size__4267__auto__);if((function (){var i__18037 = (0);while(true){
if((i__18037 < size__4267__auto__))
{var style = cljs.core._nth.call(null,c__4266__auto__,i__18037);cljs.core.chunk_append.call(null,b__18038,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));
{
var G__18039 = (i__18037 + (1));
i__18037 = G__18039;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18038),iter__18035.call(null,cljs.core.chunk_rest.call(null,s__18036__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18038),null);
}
} else
{var style = cljs.core.first.call(null,s__18036__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),iter__18035.call(null,cljs.core.rest.call(null,s__18036__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4268__auto__.call(null,styles);
};
var include_css = function (var_args){
var styles = null;if (arguments.length > 0) {
  styles = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return include_css__delegate.call(this,styles);};
include_css.cljs$lang$maxFixedArity = 0;
include_css.cljs$lang$applyTo = (function (arglist__18040){
var styles = cljs.core.seq(arglist__18040);
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
sablono.core.link_to18041 = (function() { 
var link_to18041__delegate = function (url,content){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
};
var link_to18041 = function (url,var_args){
var content = null;if (arguments.length > 1) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return link_to18041__delegate.call(this,url,content);};
link_to18041.cljs$lang$maxFixedArity = 1;
link_to18041.cljs$lang$applyTo = (function (arglist__18042){
var url = cljs.core.first(arglist__18042);
var content = cljs.core.rest(arglist__18042);
return link_to18041__delegate(url,content);
});
link_to18041.cljs$core$IFn$_invoke$arity$variadic = link_to18041__delegate;
return link_to18041;
})()
;
sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to18041);
/**
* Wraps some content in a HTML hyperlink with the supplied e-mail
* address. If no content provided use the e-mail address as content.
* @param {...*} var_args
*/
sablono.core.mail_to18043 = (function() { 
var mail_to18043__delegate = function (e_mail,p__18044){var vec__18046 = p__18044;var content = cljs.core.nth.call(null,vec__18046,(0),null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),("mailto:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail))], null),(function (){var or__3543__auto__ = content;if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return e_mail;
}
})()], null);
};
var mail_to18043 = function (e_mail,var_args){
var p__18044 = null;if (arguments.length > 1) {
  p__18044 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return mail_to18043__delegate.call(this,e_mail,p__18044);};
mail_to18043.cljs$lang$maxFixedArity = 1;
mail_to18043.cljs$lang$applyTo = (function (arglist__18047){
var e_mail = cljs.core.first(arglist__18047);
var p__18044 = cljs.core.rest(arglist__18047);
return mail_to18043__delegate(e_mail,p__18044);
});
mail_to18043.cljs$core$IFn$_invoke$arity$variadic = mail_to18043__delegate;
return mail_to18043;
})()
;
sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to18043);
/**
* Wrap a collection in an unordered list.
*/
sablono.core.unordered_list18048 = (function unordered_list18048(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4268__auto__ = (function iter__18053(s__18054){return (new cljs.core.LazySeq(null,(function (){var s__18054__$1 = s__18054;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__18054__$1);if(temp__4126__auto__)
{var s__18054__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__18054__$2))
{var c__4266__auto__ = cljs.core.chunk_first.call(null,s__18054__$2);var size__4267__auto__ = cljs.core.count.call(null,c__4266__auto__);var b__18056 = cljs.core.chunk_buffer.call(null,size__4267__auto__);if((function (){var i__18055 = (0);while(true){
if((i__18055 < size__4267__auto__))
{var x = cljs.core._nth.call(null,c__4266__auto__,i__18055);cljs.core.chunk_append.call(null,b__18056,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));
{
var G__18057 = (i__18055 + (1));
i__18055 = G__18057;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18056),iter__18053.call(null,cljs.core.chunk_rest.call(null,s__18054__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18056),null);
}
} else
{var x = cljs.core.first.call(null,s__18054__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),iter__18053.call(null,cljs.core.rest.call(null,s__18054__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4268__auto__.call(null,coll);
})()], null);
});
sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list18048);
/**
* Wrap a collection in an ordered list.
*/
sablono.core.ordered_list18058 = (function ordered_list18058(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__4268__auto__ = (function iter__18063(s__18064){return (new cljs.core.LazySeq(null,(function (){var s__18064__$1 = s__18064;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__18064__$1);if(temp__4126__auto__)
{var s__18064__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__18064__$2))
{var c__4266__auto__ = cljs.core.chunk_first.call(null,s__18064__$2);var size__4267__auto__ = cljs.core.count.call(null,c__4266__auto__);var b__18066 = cljs.core.chunk_buffer.call(null,size__4267__auto__);if((function (){var i__18065 = (0);while(true){
if((i__18065 < size__4267__auto__))
{var x = cljs.core._nth.call(null,c__4266__auto__,i__18065);cljs.core.chunk_append.call(null,b__18066,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));
{
var G__18067 = (i__18065 + (1));
i__18065 = G__18067;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18066),iter__18063.call(null,cljs.core.chunk_rest.call(null,s__18064__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18066),null);
}
} else
{var x = cljs.core.first.call(null,s__18064__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),iter__18063.call(null,cljs.core.rest.call(null,s__18064__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4268__auto__.call(null,coll);
})()], null);
});
sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list18058);
/**
* Create an image element.
*/
sablono.core.image18068 = (function() {
var image18068 = null;
var image18068__1 = (function (src){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});
var image18068__2 = (function (src,alt){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});
image18068 = function(src,alt){
switch(arguments.length){
case 1:
return image18068__1.call(this,src);
case 2:
return image18068__2.call(this,src,alt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
image18068.cljs$core$IFn$_invoke$arity$1 = image18068__1;
image18068.cljs$core$IFn$_invoke$arity$2 = image18068__2;
return image18068;
})()
;
sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image18068);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
* Create a field name from the supplied argument the current field group.
*/
sablono.core.make_name = (function make_name(name){return cljs.core.reduce.call(null,(function (p1__18069_SHARP_,p2__18070_SHARP_){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__18069_SHARP_)+"["+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__18070_SHARP_)+"]");
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
* Create a field id from the supplied argument and current field group.
*/
sablono.core.make_id = (function make_id(name){return cljs.core.reduce.call(null,(function (p1__18071_SHARP_,p2__18072_SHARP_){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__18071_SHARP_)+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__18072_SHARP_));
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
* Creates a new <input> element.
*/
sablono.core.input_field = (function input_field(type,name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});
/**
* Creates a hidden input field.
*/
sablono.core.hidden_field18073 = (function() {
var hidden_field18073 = null;
var hidden_field18073__1 = (function (name){return hidden_field18073.call(null,name,null);
});
var hidden_field18073__2 = (function (name,value){return sablono.core.input_field.call(null,"hidden",name,value);
});
hidden_field18073 = function(name,value){
switch(arguments.length){
case 1:
return hidden_field18073__1.call(this,name);
case 2:
return hidden_field18073__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hidden_field18073.cljs$core$IFn$_invoke$arity$1 = hidden_field18073__1;
hidden_field18073.cljs$core$IFn$_invoke$arity$2 = hidden_field18073__2;
return hidden_field18073;
})()
;
sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field18073);
/**
* Creates a new text input field.
*/
sablono.core.text_field18074 = (function() {
var text_field18074 = null;
var text_field18074__1 = (function (name){return text_field18074.call(null,name,null);
});
var text_field18074__2 = (function (name,value){return sablono.core.input_field.call(null,"text",name,value);
});
text_field18074 = function(name,value){
switch(arguments.length){
case 1:
return text_field18074__1.call(this,name);
case 2:
return text_field18074__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_field18074.cljs$core$IFn$_invoke$arity$1 = text_field18074__1;
text_field18074.cljs$core$IFn$_invoke$arity$2 = text_field18074__2;
return text_field18074;
})()
;
sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field18074);
/**
* Creates a new password field.
*/
sablono.core.password_field18075 = (function() {
var password_field18075 = null;
var password_field18075__1 = (function (name){return password_field18075.call(null,name,null);
});
var password_field18075__2 = (function (name,value){return sablono.core.input_field.call(null,"password",name,value);
});
password_field18075 = function(name,value){
switch(arguments.length){
case 1:
return password_field18075__1.call(this,name);
case 2:
return password_field18075__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
password_field18075.cljs$core$IFn$_invoke$arity$1 = password_field18075__1;
password_field18075.cljs$core$IFn$_invoke$arity$2 = password_field18075__2;
return password_field18075;
})()
;
sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field18075);
/**
* Creates a new email input field.
*/
sablono.core.email_field18076 = (function() {
var email_field18076 = null;
var email_field18076__1 = (function (name){return email_field18076.call(null,name,null);
});
var email_field18076__2 = (function (name,value){return sablono.core.input_field.call(null,"email",name,value);
});
email_field18076 = function(name,value){
switch(arguments.length){
case 1:
return email_field18076__1.call(this,name);
case 2:
return email_field18076__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
email_field18076.cljs$core$IFn$_invoke$arity$1 = email_field18076__1;
email_field18076.cljs$core$IFn$_invoke$arity$2 = email_field18076__2;
return email_field18076;
})()
;
sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field18076);
/**
* Creates a check box.
*/
sablono.core.check_box18077 = (function() {
var check_box18077 = null;
var check_box18077__1 = (function (name){return check_box18077.call(null,name,null);
});
var check_box18077__2 = (function (name,checked_QMARK_){return check_box18077.call(null,name,checked_QMARK_,"true");
});
var check_box18077__3 = (function (name,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});
check_box18077 = function(name,checked_QMARK_,value){
switch(arguments.length){
case 1:
return check_box18077__1.call(this,name);
case 2:
return check_box18077__2.call(this,name,checked_QMARK_);
case 3:
return check_box18077__3.call(this,name,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_box18077.cljs$core$IFn$_invoke$arity$1 = check_box18077__1;
check_box18077.cljs$core$IFn$_invoke$arity$2 = check_box18077__2;
check_box18077.cljs$core$IFn$_invoke$arity$3 = check_box18077__3;
return check_box18077;
})()
;
sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box18077);
/**
* Creates a radio button.
*/
sablono.core.radio_button18078 = (function() {
var radio_button18078 = null;
var radio_button18078__1 = (function (group){return radio_button18078.call(null,group,null);
});
var radio_button18078__2 = (function (group,checked_QMARK_){return radio_button18078.call(null,group,checked_QMARK_,"true");
});
var radio_button18078__3 = (function (group,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,group))+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,value)))),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});
radio_button18078 = function(group,checked_QMARK_,value){
switch(arguments.length){
case 1:
return radio_button18078__1.call(this,group);
case 2:
return radio_button18078__2.call(this,group,checked_QMARK_);
case 3:
return radio_button18078__3.call(this,group,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
radio_button18078.cljs$core$IFn$_invoke$arity$1 = radio_button18078__1;
radio_button18078.cljs$core$IFn$_invoke$arity$2 = radio_button18078__2;
radio_button18078.cljs$core$IFn$_invoke$arity$3 = radio_button18078__3;
return radio_button18078;
})()
;
sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button18078);
/**
* Creates a seq of option tags from a collection.
*/
sablono.core.select_options18079 = (function() {
var select_options18079 = null;
var select_options18079__1 = (function (coll){return select_options18079.call(null,coll,null);
});
var select_options18079__2 = (function (coll,selected){var iter__4268__auto__ = (function iter__18088(s__18089){return (new cljs.core.LazySeq(null,(function (){var s__18089__$1 = s__18089;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__18089__$1);if(temp__4126__auto__)
{var s__18089__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__18089__$2))
{var c__4266__auto__ = cljs.core.chunk_first.call(null,s__18089__$2);var size__4267__auto__ = cljs.core.count.call(null,c__4266__auto__);var b__18091 = cljs.core.chunk_buffer.call(null,size__4267__auto__);if((function (){var i__18090 = (0);while(true){
if((i__18090 < size__4267__auto__))
{var x = cljs.core._nth.call(null,c__4266__auto__,i__18090);cljs.core.chunk_append.call(null,b__18091,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__18094 = x;var text = cljs.core.nth.call(null,vec__18094,(0),null);var val = cljs.core.nth.call(null,vec__18094,(1),null);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),select_options18079.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,val,selected)], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,x,selected)], null),x], null)));
{
var G__18096 = (i__18090 + (1));
i__18090 = G__18096;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18091),iter__18088.call(null,cljs.core.chunk_rest.call(null,s__18089__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18091),null);
}
} else
{var x = cljs.core.first.call(null,s__18089__$2);return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__18095 = x;var text = cljs.core.nth.call(null,vec__18095,(0),null);var val = cljs.core.nth.call(null,vec__18095,(1),null);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),select_options18079.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,val,selected)], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,x,selected)], null),x], null)),iter__18088.call(null,cljs.core.rest.call(null,s__18089__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4268__auto__.call(null,coll);
});
select_options18079 = function(coll,selected){
switch(arguments.length){
case 1:
return select_options18079__1.call(this,coll);
case 2:
return select_options18079__2.call(this,coll,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select_options18079.cljs$core$IFn$_invoke$arity$1 = select_options18079__1;
select_options18079.cljs$core$IFn$_invoke$arity$2 = select_options18079__2;
return select_options18079;
})()
;
sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options18079);
/**
* Creates a drop-down box using the <select> tag.
*/
sablono.core.drop_down18097 = (function() {
var drop_down18097 = null;
var drop_down18097__2 = (function (name,options){return drop_down18097.call(null,name,options,null);
});
var drop_down18097__3 = (function (name,options,selected){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});
drop_down18097 = function(name,options,selected){
switch(arguments.length){
case 2:
return drop_down18097__2.call(this,name,options);
case 3:
return drop_down18097__3.call(this,name,options,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_down18097.cljs$core$IFn$_invoke$arity$2 = drop_down18097__2;
drop_down18097.cljs$core$IFn$_invoke$arity$3 = drop_down18097__3;
return drop_down18097;
})()
;
sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down18097);
/**
* Creates a text area element.
*/
sablono.core.text_area18098 = (function() {
var text_area18098 = null;
var text_area18098__1 = (function (name){return text_area18098.call(null,name,null);
});
var text_area18098__2 = (function (name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});
text_area18098 = function(name,value){
switch(arguments.length){
case 1:
return text_area18098__1.call(this,name);
case 2:
return text_area18098__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_area18098.cljs$core$IFn$_invoke$arity$1 = text_area18098__1;
text_area18098.cljs$core$IFn$_invoke$arity$2 = text_area18098__2;
return text_area18098;
})()
;
sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area18098);
/**
* Creates a file upload input.
*/
sablono.core.file_upload18099 = (function file_upload18099(name){return sablono.core.input_field.call(null,"file",name,null);
});
sablono.core.file_upload = sablono.core.wrap_attrs.call(null,sablono.core.file_upload18099);
/**
* Creates a label for an input field with the supplied name.
*/
sablono.core.label18100 = (function label18100(name,text){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});
sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label18100);
/**
* Creates a submit button.
*/
sablono.core.submit_button18101 = (function submit_button18101(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});
sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button18101);
/**
* Creates a form reset button.
*/
sablono.core.reset_button18102 = (function reset_button18102(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});
sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button18102);
/**
* Create a form that points to a particular method and route.
* e.g. (form-to [:put "/post"]
* ...)
* @param {...*} var_args
*/
sablono.core.form_to18103 = (function() { 
var form_to18103__delegate = function (p__18104,body){var vec__18106 = p__18104;var method = cljs.core.nth.call(null,vec__18106,(0),null);var action = cljs.core.nth.call(null,vec__18106,(1),null);var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));var action_uri = sablono.util.to_uri.call(null,action);return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,"_method",method_str)], null)),body));
};
var form_to18103 = function (p__18104,var_args){
var body = null;if (arguments.length > 1) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return form_to18103__delegate.call(this,p__18104,body);};
form_to18103.cljs$lang$maxFixedArity = 1;
form_to18103.cljs$lang$applyTo = (function (arglist__18107){
var p__18104 = cljs.core.first(arglist__18107);
var body = cljs.core.rest(arglist__18107);
return form_to18103__delegate(p__18104,body);
});
form_to18103.cljs$core$IFn$_invoke$arity$variadic = form_to18103__delegate;
return form_to18103;
})()
;
sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to18103);

//# sourceMappingURL=core.js.map