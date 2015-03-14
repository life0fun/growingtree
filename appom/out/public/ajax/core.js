// Compiled by ClojureScript 0.0-2850 {}
goog.provide('ajax.core');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.net.XhrIo');
goog.require('goog.net.XhrManager');
goog.require('goog.Uri.QueryData');
goog.require('goog.net.EventType');
goog.require('goog.events');
goog.require('goog.structs');
goog.require('goog.json.Serializer');
goog.require('clojure.string');
goog.require('cljs.reader');
goog.require('goog.net.ErrorCode');

ajax.core.AjaxImpl = (function (){var obj23528 = {};
return obj23528;
})();

ajax.core._js_ajax_request = (function _js_ajax_request(this$,uri,method,body,headers,handler,opts){
if((function (){var and__3795__auto__ = this$;
if(and__3795__auto__){
return this$.ajax$core$AjaxImpl$_js_ajax_request$arity$7;
} else {
return and__3795__auto__;
}
})()){
return this$.ajax$core$AjaxImpl$_js_ajax_request$arity$7(this$,uri,method,body,headers,handler,opts);
} else {
var x__4451__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3807__auto__ = (ajax.core._js_ajax_request[goog.typeOf(x__4451__auto__)]);
if(or__3807__auto__){
return or__3807__auto__;
} else {
var or__3807__auto____$1 = (ajax.core._js_ajax_request["_"]);
if(or__3807__auto____$1){
return or__3807__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"AjaxImpl.-js-ajax-request",this$);
}
}
})().call(null,this$,uri,method,body,headers,handler,opts);
}
});


ajax.core.AjaxRequest = (function (){var obj23530 = {};
return obj23530;
})();

ajax.core._abort = (function _abort(this$,error_code){
if((function (){var and__3795__auto__ = this$;
if(and__3795__auto__){
return this$.ajax$core$AjaxRequest$_abort$arity$2;
} else {
return and__3795__auto__;
}
})()){
return this$.ajax$core$AjaxRequest$_abort$arity$2(this$,error_code);
} else {
var x__4451__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3807__auto__ = (ajax.core._abort[goog.typeOf(x__4451__auto__)]);
if(or__3807__auto__){
return or__3807__auto__;
} else {
var or__3807__auto____$1 = (ajax.core._abort["_"]);
if(or__3807__auto____$1){
return or__3807__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"AjaxRequest.-abort",this$);
}
}
})().call(null,this$,error_code);
}
});

(ajax.core.AjaxImpl["null"] = true);

(ajax.core._js_ajax_request["null"] = (function (this$,uri,method,body,headers,handler,p__23531){
var map__23532 = p__23531;
var map__23532__$1 = ((cljs.core.seq_QMARK_.call(null,map__23532))?cljs.core.apply.call(null,cljs.core.hash_map,map__23532):map__23532);
var timeout = cljs.core.get.call(null,map__23532__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318));
var G__23533 = (new goog.net.XhrIo());
goog.events.listen(G__23533,goog.net.EventType.COMPLETE,handler);

G__23533.setTimeoutInterval((function (){var or__3807__auto__ = timeout;
if(cljs.core.truth_(or__3807__auto__)){
return or__3807__auto__;
} else {
return (0);
}
})());

G__23533.send(uri,method,body,headers);

return G__23533;
}));
goog.net.XhrIo.prototype.ajax$core$AjaxRequest$ = true;

goog.net.XhrIo.prototype.ajax$core$AjaxRequest$_abort$arity$2 = (function (this$,error_code){
var this$__$1 = this;
return this$__$1.abort(error_code);
});
goog.net.XhrManager.prototype.ajax$core$AjaxImpl$ = true;

goog.net.XhrManager.prototype.ajax$core$AjaxImpl$_js_ajax_request$arity$7 = (function (this$,uri,method,body,headers,handler,p__23534){
var map__23535 = p__23534;
var map__23535__$1 = ((cljs.core.seq_QMARK_.call(null,map__23535))?cljs.core.apply.call(null,cljs.core.hash_map,map__23535):map__23535);
var max_retries = cljs.core.get.call(null,map__23535__$1,new cljs.core.Keyword(null,"max-retries","max-retries",-1933762121));
var priority = cljs.core.get.call(null,map__23535__$1,new cljs.core.Keyword(null,"priority","priority",1431093715));
var timeout = cljs.core.get.call(null,map__23535__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318));
var id = cljs.core.get.call(null,map__23535__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var this$__$1 = this;
return this$__$1.send(id,uri,method,body,headers,priority,handler,max_retries);
});
ajax.core.abort = (function abort(this$){
return ajax.core._abort.call(null,this$,goog.net.ErrorCode.ABORT);
});
ajax.core.success_QMARK_ = (function success_QMARK_(status){
return cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([status], true),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(200),(201),(202),(204),(205),(206)], null));
});
ajax.core.read_edn = (function read_edn(xhrio){
return cljs.reader.read_string.call(null,xhrio.getResponseText());
});
ajax.core.edn_response_format = (function edn_response_format(){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read","read",1140058661),ajax.core.read_edn,new cljs.core.Keyword(null,"description","description",-1428560544),"EDN"], null);
});
ajax.core.edn_request_format = (function edn_request_format(){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"write","write",-1857649168),cljs.core.pr_str,new cljs.core.Keyword(null,"content-type","content-type",-508222634),"application/edn"], null);
});
ajax.core.params_to_str = (function params_to_str(params){
if(cljs.core.truth_(params)){
return goog.Uri.QueryData.createFromMap((new goog.structs.Map(cljs.core.clj__GT_js.call(null,params)))).toString();
} else {
return null;
}
});
ajax.core.read_text = (function read_text(xhrio){
return xhrio.getResponseText();
});
ajax.core.url_request_format = (function url_request_format(){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"write","write",-1857649168),ajax.core.params_to_str,new cljs.core.Keyword(null,"content-type","content-type",-508222634),"application/x-www-form-urlencoded"], null);
});
ajax.core.raw_response_format = (function raw_response_format(){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read","read",1140058661),ajax.core.read_text,new cljs.core.Keyword(null,"description","description",-1428560544),"raw text"], null);
});
ajax.core.write_json = (function write_json(data){
return (new goog.json.Serializer()).serialize(cljs.core.clj__GT_js.call(null,data));
});
ajax.core.json_request_format = (function json_request_format(){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"write","write",-1857649168),ajax.core.write_json,new cljs.core.Keyword(null,"content-type","content-type",-508222634),"application/json"], null);
});
/**
* Returns a JSON response format.  Options include
* :keywords? Returns the keys as keywords
* :prefix A prefix that needs to be stripped off.  This is to
* combat JSON hijacking.  If you're using JSON with GET request,
* you should use this.
* http://stackoverflow.com/questions/2669690/why-does-google-prepend-while1-to-their-json-responses
* http://haacked.com/archive/2009/06/24/json-hijacking.aspx
*/
ajax.core.json_response_format = (function json_response_format(p__23536){
var map__23538 = p__23536;
var map__23538__$1 = ((cljs.core.seq_QMARK_.call(null,map__23538))?cljs.core.apply.call(null,cljs.core.hash_map,map__23538):map__23538);
var keywords_QMARK_ = cljs.core.get.call(null,map__23538__$1,new cljs.core.Keyword(null,"keywords?","keywords?",764949733));
var prefix = cljs.core.get.call(null,map__23538__$1,new cljs.core.Keyword(null,"prefix","prefix",-265908465));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read","read",1140058661),((function (map__23538,map__23538__$1,keywords_QMARK_,prefix){
return (function read_json(xhrio){
var json = xhrio.getResponseJson(prefix);
return cljs.core.js__GT_clj.call(null,json,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),keywords_QMARK_);
});})(map__23538,map__23538__$1,keywords_QMARK_,prefix))
,new cljs.core.Keyword(null,"description","description",-1428560544),[cljs.core.str("JSON"),cljs.core.str((cljs.core.truth_(prefix)?[cljs.core.str(" prefix '"),cljs.core.str(prefix),cljs.core.str("'")].join(''):null)),cljs.core.str((cljs.core.truth_(keywords_QMARK_)?" keywordize":null))].join('')], null);
});
ajax.core.get_default_format = (function get_default_format(xhrio){
var ct = xhrio.getResponseHeader("Content-Type");
var format = (cljs.core.truth_((function (){var and__3795__auto__ = ct;
if(cljs.core.truth_(and__3795__auto__)){
return (ct.indexOf("json") >= (0));
} else {
return and__3795__auto__;
}
})())?ajax.core.json_response_format.call(null,cljs.core.PersistentArrayMap.EMPTY):ajax.core.edn_response_format.call(null));
return cljs.core.update_in.call(null,format,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"description","description",-1428560544)], null),((function (ct,format){
return (function (p1__23539_SHARP_){
return [cljs.core.str(p1__23539_SHARP_),cljs.core.str(" (default)")].join('');
});})(ct,format))
);
});
ajax.core.use_content_type = (function use_content_type(format){
return cljs.core.dissoc.call(null,format,new cljs.core.Keyword(null,"write","write",-1857649168));
});
ajax.core.get_format = (function get_format(format){
if(cljs.core.map_QMARK_.call(null,format)){
return format;
} else {
if(cljs.core.ifn_QMARK_.call(null,format)){
return cljs.core.merge.call(null,ajax.core.url_request_format.call(null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read","read",1140058661),format,new cljs.core.Keyword(null,"description","description",-1428560544),"custom"], null));
} else {
throw (new Error([cljs.core.str("unrecognized format: "),cljs.core.str(format)].join('')));

}
}
});
ajax.core.exception_response = (function exception_response(e,status,p__23540,xhrio){
var map__23542 = p__23540;
var map__23542__$1 = ((cljs.core.seq_QMARK_.call(null,map__23542))?cljs.core.apply.call(null,cljs.core.hash_map,map__23542):map__23542);
var description = cljs.core.get.call(null,map__23542__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
var response = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),status,new cljs.core.Keyword(null,"response","response",-1068424192),null], null);
var status_text = [cljs.core.str(e.message),cljs.core.str("  Format should have been "),cljs.core.str(description)].join('');
var parse_error = cljs.core.assoc.call(null,response,new cljs.core.Keyword(null,"status-text","status-text",-1834235478),status_text,new cljs.core.Keyword(null,"is-parse-error","is-parse-error",368289415),true,new cljs.core.Keyword(null,"original-text","original-text",744448452),xhrio.getResponseText());
if(cljs.core.truth_(ajax.core.success_QMARK_.call(null,status))){
return parse_error;
} else {
return cljs.core.assoc.call(null,response,new cljs.core.Keyword(null,"status-text","status-text",-1834235478),xhrio.getStatusText(),new cljs.core.Keyword(null,"parse-error","parse-error",255902478),parse_error);
}
});
ajax.core.interpret_response = (function interpret_response(format,response,get_default_format){
try{var xhrio = response.target;
var status = xhrio.getStatus();
if(cljs.core._EQ_.call(null,(-1),status)){
if(cljs.core._EQ_.call(null,xhrio.getLastErrorCode(),goog.net.ErrorCode.ABORT)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),(-1),new cljs.core.Keyword(null,"status-text","status-text",-1834235478),"Request aborted by client.",new cljs.core.Keyword(null,"aborted?","aborted?",448075047),true], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),(-1),new cljs.core.Keyword(null,"status-text","status-text",-1834235478),"Request timed out.",new cljs.core.Keyword(null,"timeout?","timeout?",-1570063160),true], null)], null);
}
} else {
var format__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"read","read",1140058661).cljs$core$IFn$_invoke$arity$1(format))?format:get_default_format.call(null,xhrio));
var parse = new cljs.core.Keyword(null,"read","read",1140058661).cljs$core$IFn$_invoke$arity$1(format__$1);
try{var response__$1 = parse.call(null,xhrio);
if(cljs.core.truth_(ajax.core.success_QMARK_.call(null,status))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,response__$1], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),status,new cljs.core.Keyword(null,"status-text","status-text",-1834235478),xhrio.getStatusText(),new cljs.core.Keyword(null,"response","response",-1068424192),response__$1], null)], null);
}
}catch (e23546){if((e23546 instanceof Object)){
var e = e23546;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,ajax.core.exception_response.call(null,e,status,format__$1,xhrio)], null);
} else {
throw e23546;

}
}}
}catch (e23545){if((e23545 instanceof Object)){
var e = e23545;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),(0),new cljs.core.Keyword(null,"status-text","status-text",-1834235478),e.message,new cljs.core.Keyword(null,"response","response",-1068424192),null], null)], null);
} else {
throw e23545;

}
}});
ajax.core.no_format = (function no_format(xhrio){
throw (new Error("No response format was supplied."));
});
ajax.core.uri_with_params = (function uri_with_params(uri,params){
if(cljs.core.truth_(params)){
return [cljs.core.str(uri),cljs.core.str("?"),cljs.core.str(ajax.core.params_to_str.call(null,params))].join('');
} else {
return uri;
}
});
ajax.core.process_inputs = (function process_inputs(uri,method,p__23547,p__23548){
var map__23552 = p__23547;
var map__23552__$1 = ((cljs.core.seq_QMARK_.call(null,map__23552))?cljs.core.apply.call(null,cljs.core.hash_map,map__23552):map__23552);
var format = map__23552__$1;
var content_type = cljs.core.get.call(null,map__23552__$1,new cljs.core.Keyword(null,"content-type","content-type",-508222634));
var write = cljs.core.get.call(null,map__23552__$1,new cljs.core.Keyword(null,"write","write",-1857649168));
var map__23553 = p__23548;
var map__23553__$1 = ((cljs.core.seq_QMARK_.call(null,map__23553))?cljs.core.apply.call(null,cljs.core.hash_map,map__23553):map__23553);
var headers = cljs.core.get.call(null,map__23553__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var params = cljs.core.get.call(null,map__23553__$1,new cljs.core.Keyword(null,"params","params",710516235));
if(cljs.core._EQ_.call(null,method,"GET")){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ajax.core.uri_with_params.call(null,uri,params),null,headers], null);
} else {
var map__23554 = format;
var map__23554__$1 = ((cljs.core.seq_QMARK_.call(null,map__23554))?cljs.core.apply.call(null,cljs.core.hash_map,map__23554):map__23554);
var content_type__$1 = cljs.core.get.call(null,map__23554__$1,new cljs.core.Keyword(null,"content-type","content-type",-508222634));
var write__$1 = cljs.core.get.call(null,map__23554__$1,new cljs.core.Keyword(null,"write","write",-1857649168));
var body = write__$1.call(null,params);
var content_type__$2 = (cljs.core.truth_(content_type__$1)?new cljs.core.PersistentArrayMap(null, 1, ["Content-Type",content_type__$1], null):null);
var headers__$1 = cljs.core.merge.call(null,(function (){var or__3807__auto__ = headers;
if(cljs.core.truth_(or__3807__auto__)){
return or__3807__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),content_type__$2);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [uri,body,headers__$1], null);
}
});
ajax.core.normalize_method = (function normalize_method(method){
if((method instanceof cljs.core.Keyword)){
return clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
} else {
return method;
}
});
ajax.core.base_handler = (function base_handler(format,p__23555){
var map__23557 = p__23555;
var map__23557__$1 = ((cljs.core.seq_QMARK_.call(null,map__23557))?cljs.core.apply.call(null,cljs.core.hash_map,map__23557):map__23557);
var get_default_format = cljs.core.get.call(null,map__23557__$1,new cljs.core.Keyword(null,"get-default-format","get-default-format",1890601888));
var handler = cljs.core.get.call(null,map__23557__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
if(cljs.core.truth_(handler)){
return ((function (map__23557,map__23557__$1,get_default_format,handler){
return (function (xhrio){
return handler.call(null,ajax.core.interpret_response.call(null,format,xhrio,(function (){var or__3807__auto__ = get_default_format;
if(cljs.core.truth_(or__3807__auto__)){
return or__3807__auto__;
} else {
return ajax.core.no_format;
}
})()));
});
;})(map__23557,map__23557__$1,get_default_format,handler))
} else {
throw (new Error("No ajax handler provided."));
}
});
/**
* @param {...*} var_args
*/
ajax.core.ajax_request = (function() {
var ajax_request = null;
var ajax_request__1 = (function (p__23558){
var map__23561 = p__23558;
var map__23561__$1 = ((cljs.core.seq_QMARK_.call(null,map__23561))?cljs.core.apply.call(null,cljs.core.hash_map,map__23561):map__23561);
var opts = map__23561__$1;
var manager = cljs.core.get.call(null,map__23561__$1,new cljs.core.Keyword(null,"manager","manager",-818607470));
var format = cljs.core.get.call(null,map__23561__$1,new cljs.core.Keyword(null,"format","format",-1306924766));
var method = cljs.core.get.call(null,map__23561__$1,new cljs.core.Keyword(null,"method","method",55703592));
var uri = cljs.core.get.call(null,map__23561__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var format__$1 = ajax.core.get_format.call(null,format);
var method__$1 = ajax.core.normalize_method.call(null,method);
var vec__23562 = ajax.core.process_inputs.call(null,uri,method__$1,format__$1,opts);
var uri__$1 = cljs.core.nth.call(null,vec__23562,(0),null);
var body = cljs.core.nth.call(null,vec__23562,(1),null);
var headers = cljs.core.nth.call(null,vec__23562,(2),null);
var handler = ajax.core.base_handler.call(null,format__$1,opts);
return ajax.core._js_ajax_request.call(null,manager,uri__$1,method__$1,body,cljs.core.clj__GT_js.call(null,headers),handler,opts);
});
var ajax_request__3 = (function() { 
var G__23563__delegate = function (uri,method,args){
var f = cljs.core.first.call(null,args);
var opts = (((f instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,args):f);
return ajax_request.call(null,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"uri","uri",-774711847),uri,new cljs.core.Keyword(null,"method","method",55703592),method));
};
var G__23563 = function (uri,method,var_args){
var args = null;
if (arguments.length > 2) {
var G__23564__i = 0, G__23564__a = new Array(arguments.length -  2);
while (G__23564__i < G__23564__a.length) {G__23564__a[G__23564__i] = arguments[G__23564__i + 2]; ++G__23564__i;}
  args = new cljs.core.IndexedSeq(G__23564__a,0);
} 
return G__23563__delegate.call(this,uri,method,args);};
G__23563.cljs$lang$maxFixedArity = 2;
G__23563.cljs$lang$applyTo = (function (arglist__23565){
var uri = cljs.core.first(arglist__23565);
arglist__23565 = cljs.core.next(arglist__23565);
var method = cljs.core.first(arglist__23565);
var args = cljs.core.rest(arglist__23565);
return G__23563__delegate(uri,method,args);
});
G__23563.cljs$core$IFn$_invoke$arity$variadic = G__23563__delegate;
return G__23563;
})()
;
ajax_request = function(uri,method,var_args){
var args = var_args;
switch(arguments.length){
case 1:
return ajax_request__1.call(this,uri);
default:
var G__23566 = null;
if (arguments.length > 2) {
var G__23567__i = 0, G__23567__a = new Array(arguments.length -  2);
while (G__23567__i < G__23567__a.length) {G__23567__a[G__23567__i] = arguments[G__23567__i + 2]; ++G__23567__i;}
G__23566 = new cljs.core.IndexedSeq(G__23567__a,0);
}
return ajax_request__3.cljs$core$IFn$_invoke$arity$variadic(uri,method, G__23566);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ajax_request.cljs$lang$maxFixedArity = 2;
ajax_request.cljs$lang$applyTo = ajax_request__3.cljs$lang$applyTo;
ajax_request.cljs$core$IFn$_invoke$arity$1 = ajax_request__1;
ajax_request.cljs$core$IFn$_invoke$arity$variadic = ajax_request__3.cljs$core$IFn$_invoke$arity$variadic;
return ajax_request;
})()
;
ajax.core.json_format = (function json_format(format_params){
return cljs.core.merge.call(null,ajax.core.json_request_format.call(null),ajax.core.json_response_format.call(null,format_params));
});
ajax.core.edn_format = (function edn_format(){
return cljs.core.merge.call(null,ajax.core.edn_request_format.call(null),ajax.core.edn_response_format.call(null));
});
ajax.core.raw_format = (function raw_format(){
return cljs.core.merge.call(null,ajax.core.url_request_format.call(null),ajax.core.raw_response_format.call(null));
});
ajax.core.keyword_request_format = (function keyword_request_format(format,format_params){
var G__23569 = (((format instanceof cljs.core.Keyword))?format.fqn:null);
switch (G__23569) {
case "url":
return ajax.core.url_request_format.call(null);

break;
case "raw":
return ajax.core.url_request_format.call(null);

break;
case "edn":
return ajax.core.edn_request_format.call(null);

break;
case "json":
return ajax.core.json_request_format.call(null);

break;
default:
throw (new Error([cljs.core.str("unrecognized request format: "),cljs.core.str(format)].join('')));

}
});
ajax.core.keyword_response_format = (function keyword_response_format(format,format_params){
if(cljs.core.map_QMARK_.call(null,format)){
return format;
} else {
if(cljs.core.ifn_QMARK_.call(null,format)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read","read",1140058661),format,new cljs.core.Keyword(null,"description","description",-1428560544),"custom"], null);
} else {
var G__23572 = (((format instanceof cljs.core.Keyword))?format.fqn:null);
switch (G__23572) {
case "raw":
return ajax.core.raw_response_format.call(null);

break;
case "edn":
return ajax.core.edn_response_format.call(null);

break;
case "json":
return ajax.core.json_response_format.call(null,format_params);

break;
default:
return null;

}

}
}
});
ajax.core.transform_handler = (function transform_handler(p__23574){
var map__23579 = p__23574;
var map__23579__$1 = ((cljs.core.seq_QMARK_.call(null,map__23579))?cljs.core.apply.call(null,cljs.core.hash_map,map__23579):map__23579);
var finally$ = cljs.core.get.call(null,map__23579__$1,new cljs.core.Keyword(null,"finally","finally",1589088705));
var error_handler = cljs.core.get.call(null,map__23579__$1,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776));
var handler = cljs.core.get.call(null,map__23579__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
return ((function (map__23579,map__23579__$1,finally$,error_handler,handler){
return (function easy_handler(p__23580){
var vec__23582 = p__23580;
var ok = cljs.core.nth.call(null,vec__23582,(0),null);
var result = cljs.core.nth.call(null,vec__23582,(1),null);
var temp__4404__auto___23583 = (cljs.core.truth_(ok)?handler:error_handler);
if(cljs.core.truth_(temp__4404__auto___23583)){
var h_23584 = temp__4404__auto___23583;
h_23584.call(null,result);
} else {
}

if(cljs.core.fn_QMARK_.call(null,finally$)){
return finally$.call(null);
} else {
return null;
}
});
;})(map__23579,map__23579__$1,finally$,error_handler,handler))
});
ajax.core.transform_format = (function transform_format(p__23585){
var map__23587 = p__23585;
var map__23587__$1 = ((cljs.core.seq_QMARK_.call(null,map__23587))?cljs.core.apply.call(null,cljs.core.hash_map,map__23587):map__23587);
var opts = map__23587__$1;
var response_format = cljs.core.get.call(null,map__23587__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var format = cljs.core.get.call(null,map__23587__$1,new cljs.core.Keyword(null,"format","format",-1306924766));
var rf = ajax.core.keyword_response_format.call(null,response_format,opts);
if((format == null)){
return cljs.core.merge.call(null,ajax.core.edn_request_format.call(null),rf);
} else {
if((format instanceof cljs.core.Keyword)){
return cljs.core.merge.call(null,ajax.core.keyword_request_format.call(null,format,opts),rf);
} else {
return format;

}
}
});
ajax.core.transform_opts = (function transform_opts(opts){

return cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"handler","handler",-195596612),ajax.core.transform_handler.call(null,opts),new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.transform_format.call(null,opts),new cljs.core.Keyword(null,"get-default-format","get-default-format",1890601888),ajax.core.get_default_format);
});
/**
* accepts the URI and an optional map of options, options include:
* :handler - the handler function for successful operation
* should accept a single parameter which is the
* deserialized response
* :error-handler - the handler function for errors, should accept a
* map with keys :status and :status-text
* :format - the format for the request
* :response-format - the format for the response
* :params - a map of parameters that will be sent with the request
* @param {...*} var_args
*/
ajax.core.GET = (function() { 
var GET__delegate = function (uri,p__23588){
var vec__23590 = p__23588;
var opts = cljs.core.nth.call(null,vec__23590,(0),null);
return ajax.core.ajax_request.call(null,uri,"GET",ajax.core.transform_opts.call(null,opts));
};
var GET = function (uri,var_args){
var p__23588 = null;
if (arguments.length > 1) {
var G__23591__i = 0, G__23591__a = new Array(arguments.length -  1);
while (G__23591__i < G__23591__a.length) {G__23591__a[G__23591__i] = arguments[G__23591__i + 1]; ++G__23591__i;}
  p__23588 = new cljs.core.IndexedSeq(G__23591__a,0);
} 
return GET__delegate.call(this,uri,p__23588);};
GET.cljs$lang$maxFixedArity = 1;
GET.cljs$lang$applyTo = (function (arglist__23592){
var uri = cljs.core.first(arglist__23592);
var p__23588 = cljs.core.rest(arglist__23592);
return GET__delegate(uri,p__23588);
});
GET.cljs$core$IFn$_invoke$arity$variadic = GET__delegate;
return GET;
})()
;
/**
* accepts the URI and an optional map of options, options include:
* :handler - the handler function for successful operation
* should accept a single parameter which is the
* deserialized response
* :error-handler - the handler function for errors, should accept a
* map with keys :status and :status-text
* :format - the format for the request
* :response-format - the format for the response
* :params - a map of parameters that will be sent with the request
* @param {...*} var_args
*/
ajax.core.HEAD = (function() { 
var HEAD__delegate = function (uri,p__23593){
var vec__23595 = p__23593;
var opts = cljs.core.nth.call(null,vec__23595,(0),null);
return ajax.core.ajax_request.call(null,uri,"HEAD",ajax.core.transform_opts.call(null,opts));
};
var HEAD = function (uri,var_args){
var p__23593 = null;
if (arguments.length > 1) {
var G__23596__i = 0, G__23596__a = new Array(arguments.length -  1);
while (G__23596__i < G__23596__a.length) {G__23596__a[G__23596__i] = arguments[G__23596__i + 1]; ++G__23596__i;}
  p__23593 = new cljs.core.IndexedSeq(G__23596__a,0);
} 
return HEAD__delegate.call(this,uri,p__23593);};
HEAD.cljs$lang$maxFixedArity = 1;
HEAD.cljs$lang$applyTo = (function (arglist__23597){
var uri = cljs.core.first(arglist__23597);
var p__23593 = cljs.core.rest(arglist__23597);
return HEAD__delegate(uri,p__23593);
});
HEAD.cljs$core$IFn$_invoke$arity$variadic = HEAD__delegate;
return HEAD;
})()
;
/**
* accepts the URI and an optional map of options, options include:
* :handler - the handler function for successful operation
* should accept a single parameter which is the
* deserialized response
* :error-handler - the handler function for errors, should accept a
* map with keys :status and :status-text
* :format - the format for the request
* :response-format - the format for the response
* :params - a map of parameters that will be sent with the request
* @param {...*} var_args
*/
ajax.core.POST = (function() { 
var POST__delegate = function (uri,p__23598){
var vec__23600 = p__23598;
var opts = cljs.core.nth.call(null,vec__23600,(0),null);
return ajax.core.ajax_request.call(null,uri,"POST",ajax.core.transform_opts.call(null,opts));
};
var POST = function (uri,var_args){
var p__23598 = null;
if (arguments.length > 1) {
var G__23601__i = 0, G__23601__a = new Array(arguments.length -  1);
while (G__23601__i < G__23601__a.length) {G__23601__a[G__23601__i] = arguments[G__23601__i + 1]; ++G__23601__i;}
  p__23598 = new cljs.core.IndexedSeq(G__23601__a,0);
} 
return POST__delegate.call(this,uri,p__23598);};
POST.cljs$lang$maxFixedArity = 1;
POST.cljs$lang$applyTo = (function (arglist__23602){
var uri = cljs.core.first(arglist__23602);
var p__23598 = cljs.core.rest(arglist__23602);
return POST__delegate(uri,p__23598);
});
POST.cljs$core$IFn$_invoke$arity$variadic = POST__delegate;
return POST;
})()
;
/**
* accepts the URI and an optional map of options, options include:
* :handler - the handler function for successful operation
* should accept a single parameter which is the
* deserialized response
* :error-handler - the handler function for errors, should accept a
* map with keys :status and :status-text
* :format - the format for the request
* :response-format - the format for the response
* :params - a map of parameters that will be sent with the request
* @param {...*} var_args
*/
ajax.core.PUT = (function() { 
var PUT__delegate = function (uri,p__23603){
var vec__23605 = p__23603;
var opts = cljs.core.nth.call(null,vec__23605,(0),null);
return ajax.core.ajax_request.call(null,uri,"PUT",ajax.core.transform_opts.call(null,opts));
};
var PUT = function (uri,var_args){
var p__23603 = null;
if (arguments.length > 1) {
var G__23606__i = 0, G__23606__a = new Array(arguments.length -  1);
while (G__23606__i < G__23606__a.length) {G__23606__a[G__23606__i] = arguments[G__23606__i + 1]; ++G__23606__i;}
  p__23603 = new cljs.core.IndexedSeq(G__23606__a,0);
} 
return PUT__delegate.call(this,uri,p__23603);};
PUT.cljs$lang$maxFixedArity = 1;
PUT.cljs$lang$applyTo = (function (arglist__23607){
var uri = cljs.core.first(arglist__23607);
var p__23603 = cljs.core.rest(arglist__23607);
return PUT__delegate(uri,p__23603);
});
PUT.cljs$core$IFn$_invoke$arity$variadic = PUT__delegate;
return PUT;
})()
;
/**
* accepts the URI and an optional map of options, options include:
* :handler - the handler function for successful operation
* should accept a single parameter which is the
* deserialized response
* :error-handler - the handler function for errors, should accept a
* map with keys :status and :status-text
* :format - the format for the request
* :response-format - the format for the response
* :params - a map of parameters that will be sent with the request
* @param {...*} var_args
*/
ajax.core.DELETE = (function() { 
var DELETE__delegate = function (uri,p__23608){
var vec__23610 = p__23608;
var opts = cljs.core.nth.call(null,vec__23610,(0),null);
return ajax.core.ajax_request.call(null,uri,"DELETE",ajax.core.transform_opts.call(null,opts));
};
var DELETE = function (uri,var_args){
var p__23608 = null;
if (arguments.length > 1) {
var G__23611__i = 0, G__23611__a = new Array(arguments.length -  1);
while (G__23611__i < G__23611__a.length) {G__23611__a[G__23611__i] = arguments[G__23611__i + 1]; ++G__23611__i;}
  p__23608 = new cljs.core.IndexedSeq(G__23611__a,0);
} 
return DELETE__delegate.call(this,uri,p__23608);};
DELETE.cljs$lang$maxFixedArity = 1;
DELETE.cljs$lang$applyTo = (function (arglist__23612){
var uri = cljs.core.first(arglist__23612);
var p__23608 = cljs.core.rest(arglist__23612);
return DELETE__delegate(uri,p__23608);
});
DELETE.cljs$core$IFn$_invoke$arity$variadic = DELETE__delegate;
return DELETE;
})()
;
/**
* accepts the URI and an optional map of options, options include:
* :handler - the handler function for successful operation
* should accept a single parameter which is the
* deserialized response
* :error-handler - the handler function for errors, should accept a
* map with keys :status and :status-text
* :format - the format for the request
* :response-format - the format for the response
* :params - a map of parameters that will be sent with the request
* @param {...*} var_args
*/
ajax.core.OPTIONS = (function() { 
var OPTIONS__delegate = function (uri,p__23613){
var vec__23615 = p__23613;
var opts = cljs.core.nth.call(null,vec__23615,(0),null);
return ajax.core.ajax_request.call(null,uri,"OPTIONS",ajax.core.transform_opts.call(null,opts));
};
var OPTIONS = function (uri,var_args){
var p__23613 = null;
if (arguments.length > 1) {
var G__23616__i = 0, G__23616__a = new Array(arguments.length -  1);
while (G__23616__i < G__23616__a.length) {G__23616__a[G__23616__i] = arguments[G__23616__i + 1]; ++G__23616__i;}
  p__23613 = new cljs.core.IndexedSeq(G__23616__a,0);
} 
return OPTIONS__delegate.call(this,uri,p__23613);};
OPTIONS.cljs$lang$maxFixedArity = 1;
OPTIONS.cljs$lang$applyTo = (function (arglist__23617){
var uri = cljs.core.first(arglist__23617);
var p__23613 = cljs.core.rest(arglist__23617);
return OPTIONS__delegate(uri,p__23613);
});
OPTIONS.cljs$core$IFn$_invoke$arity$variadic = OPTIONS__delegate;
return OPTIONS;
})()
;
/**
* accepts the URI and an optional map of options, options include:
* :handler - the handler function for successful operation
* should accept a single parameter which is the
* deserialized response
* :error-handler - the handler function for errors, should accept a
* map with keys :status and :status-text
* :format - the format for the request
* :response-format - the format for the response
* :params - a map of parameters that will be sent with the request
* @param {...*} var_args
*/
ajax.core.TRACE = (function() { 
var TRACE__delegate = function (uri,p__23618){
var vec__23620 = p__23618;
var opts = cljs.core.nth.call(null,vec__23620,(0),null);
return ajax.core.ajax_request.call(null,uri,"TRACE",ajax.core.transform_opts.call(null,opts));
};
var TRACE = function (uri,var_args){
var p__23618 = null;
if (arguments.length > 1) {
var G__23621__i = 0, G__23621__a = new Array(arguments.length -  1);
while (G__23621__i < G__23621__a.length) {G__23621__a[G__23621__i] = arguments[G__23621__i + 1]; ++G__23621__i;}
  p__23618 = new cljs.core.IndexedSeq(G__23621__a,0);
} 
return TRACE__delegate.call(this,uri,p__23618);};
TRACE.cljs$lang$maxFixedArity = 1;
TRACE.cljs$lang$applyTo = (function (arglist__23622){
var uri = cljs.core.first(arglist__23622);
var p__23618 = cljs.core.rest(arglist__23622);
return TRACE__delegate(uri,p__23618);
});
TRACE.cljs$core$IFn$_invoke$arity$variadic = TRACE__delegate;
return TRACE;
})()
;

//# sourceMappingURL=core.js.map