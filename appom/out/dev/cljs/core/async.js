// Compiled by ClojureScript 0.0-2173
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t13164 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13164 = (function (f,fn_handler,meta13165){
this.f = f;
this.fn_handler = fn_handler;
this.meta13165 = meta13165;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13164.cljs$lang$type = true;
cljs.core.async.t13164.cljs$lang$ctorStr = "cljs.core.async/t13164";
cljs.core.async.t13164.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t13164");
});
cljs.core.async.t13164.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t13164.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t13164.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t13164.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13166){var self__ = this;
var _13166__$1 = this;return self__.meta13165;
});
cljs.core.async.t13164.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13166,meta13165__$1){var self__ = this;
var _13166__$1 = this;return (new cljs.core.async.t13164(self__.f,self__.fn_handler,meta13165__$1));
});
cljs.core.async.__GT_t13164 = (function __GT_t13164(f__$1,fn_handler__$1,meta13165){return (new cljs.core.async.t13164(f__$1,fn_handler__$1,meta13165));
});
}
return (new cljs.core.async.t13164(f,fn_handler,null));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__13168 = buff;if(G__13168)
{var bit__4093__auto__ = null;if(cljs.core.truth_((function (){var or__3443__auto__ = bit__4093__auto__;if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{return G__13168.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__13168.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__13168);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__13168);
}
});
/**
* Creates a channel with an optional buffer. If buf-or-n is a number,
* will create and use a fixed buffer of that size.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){return chan.call(null,null);
});
var chan__1 = (function (buf_or_n){var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,0))?null:buf_or_n);return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1));
});
chan = function(buf_or_n){
switch(arguments.length){
case 0:
return chan__0.call(this);
case 1:
return chan__1.call(this,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chan.cljs$core$IFn$_invoke$arity$0 = chan__0;
chan.cljs$core$IFn$_invoke$arity$1 = chan__1;
return chan;
})()
;
/**
* Returns a channel that will close after msecs
*/
cljs.core.async.timeout = (function timeout(msecs){return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("<! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
});
/**
* Asynchronously takes a val from port, passing to fn1. Will pass nil
* if closed. If on-caller? (default true) is true, and value is
* immediately available, will call fn1 on calling thread.
* Returns nil.
*/
cljs.core.async.take_BANG_ = (function() {
var take_BANG_ = null;
var take_BANG___2 = (function (port,fn1){return take_BANG_.call(null,port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(ret))
{var val_13169 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_13169);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_13169);
}));
}
} else
{}
return null;
});
take_BANG_ = function(port,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return take_BANG___2.call(this,port,fn1);
case 3:
return take_BANG___3.call(this,port,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_BANG_.cljs$core$IFn$_invoke$arity$2 = take_BANG___2;
take_BANG_.cljs$core$IFn$_invoke$arity$3 = take_BANG___3;
return take_BANG_;
})()
;
cljs.core.async.nop = (function nop(){return null;
});
/**
* puts a val into port. nil values are not allowed. Must be called
* inside a (go ...) block. Will park if no buffer space is available.
*/
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(">! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
});
/**
* Asynchronously puts a val into port, calling fn0 (if supplied) when
* complete. nil values are not allowed. Will throw if closed. If
* on-caller? (default true) is true, and the put is immediately
* accepted, will call fn0 on calling thread.  Returns nil.
*/
cljs.core.async.put_BANG_ = (function() {
var put_BANG_ = null;
var put_BANG___2 = (function (port,val){return put_BANG_.call(null,port,val,cljs.core.async.nop);
});
var put_BANG___3 = (function (port,val,fn0){return put_BANG_.call(null,port,val,fn0,true);
});
var put_BANG___4 = (function (port,val,fn0,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn0));if(cljs.core.truth_((function (){var and__3431__auto__ = ret;if(cljs.core.truth_(and__3431__auto__))
{return cljs.core.not_EQ_.call(null,fn0,cljs.core.async.nop);
} else
{return and__3431__auto__;
}
})()))
{if(cljs.core.truth_(on_caller_QMARK_))
{fn0.call(null);
} else
{cljs.core.async.impl.dispatch.run.call(null,fn0);
}
} else
{}
return null;
});
put_BANG_ = function(port,val,fn0,on_caller_QMARK_){
switch(arguments.length){
case 2:
return put_BANG___2.call(this,port,val);
case 3:
return put_BANG___3.call(this,port,val,fn0);
case 4:
return put_BANG___4.call(this,port,val,fn0,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
put_BANG_.cljs$core$IFn$_invoke$arity$2 = put_BANG___2;
put_BANG_.cljs$core$IFn$_invoke$arity$3 = put_BANG___3;
put_BANG_.cljs$core$IFn$_invoke$arity$4 = put_BANG___4;
return put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function close_BANG_(port){return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4291__auto___13170 = n;var x_13171 = 0;while(true){
if((x_13171 < n__4291__auto___13170))
{(a[x_13171] = 0);
{
var G__13172 = (x_13171 + 1);
x_13171 = G__13172;
continue;
}
} else
{}
break;
}
var i = 1;while(true){
if(cljs.core._EQ_.call(null,i,n))
{return a;
} else
{var j = cljs.core.rand_int.call(null,i);(a[i] = (a[j]));
(a[j] = i);
{
var G__13173 = (i + 1);
i = G__13173;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t13177 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13177 = (function (flag,alt_flag,meta13178){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta13178 = meta13178;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13177.cljs$lang$type = true;
cljs.core.async.t13177.cljs$lang$ctorStr = "cljs.core.async/t13177";
cljs.core.async.t13177.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t13177");
});
cljs.core.async.t13177.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t13177.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t13177.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t13177.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13179){var self__ = this;
var _13179__$1 = this;return self__.meta13178;
});
cljs.core.async.t13177.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13179,meta13178__$1){var self__ = this;
var _13179__$1 = this;return (new cljs.core.async.t13177(self__.flag,self__.alt_flag,meta13178__$1));
});
cljs.core.async.__GT_t13177 = (function __GT_t13177(flag__$1,alt_flag__$1,meta13178){return (new cljs.core.async.t13177(flag__$1,alt_flag__$1,meta13178));
});
}
return (new cljs.core.async.t13177(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t13183 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13183 = (function (cb,flag,alt_handler,meta13184){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta13184 = meta13184;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13183.cljs$lang$type = true;
cljs.core.async.t13183.cljs$lang$ctorStr = "cljs.core.async/t13183";
cljs.core.async.t13183.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t13183");
});
cljs.core.async.t13183.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t13183.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t13183.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t13183.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13185){var self__ = this;
var _13185__$1 = this;return self__.meta13184;
});
cljs.core.async.t13183.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13185,meta13184__$1){var self__ = this;
var _13185__$1 = this;return (new cljs.core.async.t13183(self__.cb,self__.flag,self__.alt_handler,meta13184__$1));
});
cljs.core.async.__GT_t13183 = (function __GT_t13183(cb__$1,flag__$1,alt_handler__$1,meta13184){return (new cljs.core.async.t13183(cb__$1,flag__$1,alt_handler__$1,meta13184));
});
}
return (new cljs.core.async.t13183(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",4143410454).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = 0;while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,0):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,1);return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__13186_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__13186_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3443__auto__ = wport;if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__13187 = (i + 1);
i = G__13187;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__3443__auto__ = ret;if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",2558708147)))
{var temp__4092__auto__ = (function (){var and__3431__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__3431__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__3431__auto__;
}
})();if(cljs.core.truth_(temp__4092__auto__))
{var got = temp__4092__auto__;return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",2558708147)], null));
} else
{return null;
}
} else
{return null;
}
}
});
/**
* Completes at most one of several channel operations. Must be called
* inside a (go ...) block. ports is a vector of channel endpoints, which
* can be either a channel to take from or a vector of
* [channel-to-put-to val-to-put], in any combination. Takes will be
* made as if by <!, and puts will be made as if by >!. Unless
* the :priority option is true, if more than one port operation is
* ready a non-deterministic choice will be made. If no operation is
* ready and a :default value is supplied, [default-val :default] will
* be returned, otherwise alts! will park until the first operation to
* become ready completes. Returns [val port] of the completed
* operation, where val is the value taken for takes, and nil for puts.
* 
* opts are passed as :key val ... Supported options:
* 
* :default val - the value to use if none of the operations are immediately ready
* :priority true - (default nil) when true, the operations will be tried in order.
* 
* Note: there is no guarantee that the port exps or val exprs will be
* used, nor in what order should they be, so they should not be
* depended upon for side effects.
* @param {...*} var_args
*/
cljs.core.async.alts_BANG_ = (function() { 
var alts_BANG___delegate = function (ports,p__13188){var map__13190 = p__13188;var map__13190__$1 = ((cljs.core.seq_QMARK_.call(null,map__13190))?cljs.core.apply.call(null,cljs.core.hash_map,map__13190):map__13190);var opts = map__13190__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__13188 = null;if (arguments.length > 1) {
  p__13188 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__13188);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__13191){
var ports = cljs.core.first(arglist__13191);
var p__13188 = cljs.core.rest(arglist__13191);
return alts_BANG___delegate(ports,p__13188);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
/**
* Takes a function and a source channel, and returns a channel which
* contains the values produced by applying f to each value taken from
* the source channel
*/
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t13199 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13199 = (function (ch,f,map_LT_,meta13200){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta13200 = meta13200;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13199.cljs$lang$type = true;
cljs.core.async.t13199.cljs$lang$ctorStr = "cljs.core.async/t13199";
cljs.core.async.t13199.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t13199");
});
cljs.core.async.t13199.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t13199.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t13199.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t13199.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t13202 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13202 = (function (fn1,_,meta13200,ch,f,map_LT_,meta13203){
this.fn1 = fn1;
this._ = _;
this.meta13200 = meta13200;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta13203 = meta13203;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13202.cljs$lang$type = true;
cljs.core.async.t13202.cljs$lang$ctorStr = "cljs.core.async/t13202";
cljs.core.async.t13202.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t13202");
});
cljs.core.async.t13202.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t13202.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t13202.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t13202.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__13192_SHARP_){return f1.call(null,(((p1__13192_SHARP_ == null))?null:self__.f.call(null,p1__13192_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t13202.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13204){var self__ = this;
var _13204__$1 = this;return self__.meta13203;
});
cljs.core.async.t13202.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13204,meta13203__$1){var self__ = this;
var _13204__$1 = this;return (new cljs.core.async.t13202(self__.fn1,self__._,self__.meta13200,self__.ch,self__.f,self__.map_LT_,meta13203__$1));
});
cljs.core.async.__GT_t13202 = (function __GT_t13202(fn1__$1,___$2,meta13200__$1,ch__$2,f__$2,map_LT___$2,meta13203){return (new cljs.core.async.t13202(fn1__$1,___$2,meta13200__$1,ch__$2,f__$2,map_LT___$2,meta13203));
});
}
return (new cljs.core.async.t13202(fn1,___$1,self__.meta13200,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__3431__auto__ = ret;if(cljs.core.truth_(and__3431__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__3431__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t13199.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t13199.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t13199.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13201){var self__ = this;
var _13201__$1 = this;return self__.meta13200;
});
cljs.core.async.t13199.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13201,meta13200__$1){var self__ = this;
var _13201__$1 = this;return (new cljs.core.async.t13199(self__.ch,self__.f,self__.map_LT_,meta13200__$1));
});
cljs.core.async.__GT_t13199 = (function __GT_t13199(ch__$1,f__$1,map_LT___$1,meta13200){return (new cljs.core.async.t13199(ch__$1,f__$1,map_LT___$1,meta13200));
});
}
return (new cljs.core.async.t13199(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t13208 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13208 = (function (ch,f,map_GT_,meta13209){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta13209 = meta13209;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13208.cljs$lang$type = true;
cljs.core.async.t13208.cljs$lang$ctorStr = "cljs.core.async/t13208";
cljs.core.async.t13208.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t13208");
});
cljs.core.async.t13208.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t13208.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t13208.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t13208.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t13208.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t13208.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t13208.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13210){var self__ = this;
var _13210__$1 = this;return self__.meta13209;
});
cljs.core.async.t13208.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13210,meta13209__$1){var self__ = this;
var _13210__$1 = this;return (new cljs.core.async.t13208(self__.ch,self__.f,self__.map_GT_,meta13209__$1));
});
cljs.core.async.__GT_t13208 = (function __GT_t13208(ch__$1,f__$1,map_GT___$1,meta13209){return (new cljs.core.async.t13208(ch__$1,f__$1,map_GT___$1,meta13209));
});
}
return (new cljs.core.async.t13208(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t13214 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13214 = (function (ch,p,filter_GT_,meta13215){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta13215 = meta13215;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13214.cljs$lang$type = true;
cljs.core.async.t13214.cljs$lang$ctorStr = "cljs.core.async/t13214";
cljs.core.async.t13214.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t13214");
});
cljs.core.async.t13214.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t13214.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t13214.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t13214.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t13214.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t13214.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t13214.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13216){var self__ = this;
var _13216__$1 = this;return self__.meta13215;
});
cljs.core.async.t13214.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13216,meta13215__$1){var self__ = this;
var _13216__$1 = this;return (new cljs.core.async.t13214(self__.ch,self__.p,self__.filter_GT_,meta13215__$1));
});
cljs.core.async.__GT_t13214 = (function __GT_t13214(ch__$1,p__$1,filter_GT___$1,meta13215){return (new cljs.core.async.t13214(ch__$1,p__$1,filter_GT___$1,meta13215));
});
}
return (new cljs.core.async.t13214(ch,p,filter_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns false to the
* target channel.
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns true. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.filter_LT_ = (function() {
var filter_LT_ = null;
var filter_LT___2 = (function (p,ch){return filter_LT_.call(null,p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6068__auto___13299 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6069__auto__ = (function (){var switch__5998__auto__ = (function (state_13278){var state_val_13279 = (state_13278[1]);if((state_val_13279 === 1))
{var state_13278__$1 = state_13278;var statearr_13280_13300 = state_13278__$1;(statearr_13280_13300[2] = null);
(statearr_13280_13300[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13279 === 2))
{var state_13278__$1 = state_13278;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13278__$1,4,ch);
} else
{if((state_val_13279 === 3))
{var inst_13276 = (state_13278[2]);var state_13278__$1 = state_13278;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13278__$1,inst_13276);
} else
{if((state_val_13279 === 4))
{var inst_13260 = (state_13278[7]);var inst_13260__$1 = (state_13278[2]);var inst_13261 = (inst_13260__$1 == null);var state_13278__$1 = (function (){var statearr_13281 = state_13278;(statearr_13281[7] = inst_13260__$1);
return statearr_13281;
})();if(cljs.core.truth_(inst_13261))
{var statearr_13282_13301 = state_13278__$1;(statearr_13282_13301[1] = 5);
} else
{var statearr_13283_13302 = state_13278__$1;(statearr_13283_13302[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13279 === 5))
{var inst_13263 = cljs.core.async.close_BANG_.call(null,out);var state_13278__$1 = state_13278;var statearr_13284_13303 = state_13278__$1;(statearr_13284_13303[2] = inst_13263);
(statearr_13284_13303[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13279 === 6))
{var inst_13260 = (state_13278[7]);var inst_13265 = p.call(null,inst_13260);var state_13278__$1 = state_13278;if(cljs.core.truth_(inst_13265))
{var statearr_13285_13304 = state_13278__$1;(statearr_13285_13304[1] = 8);
} else
{var statearr_13286_13305 = state_13278__$1;(statearr_13286_13305[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13279 === 7))
{var inst_13274 = (state_13278[2]);var state_13278__$1 = state_13278;var statearr_13287_13306 = state_13278__$1;(statearr_13287_13306[2] = inst_13274);
(statearr_13287_13306[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13279 === 8))
{var inst_13260 = (state_13278[7]);var state_13278__$1 = state_13278;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13278__$1,11,out,inst_13260);
} else
{if((state_val_13279 === 9))
{var state_13278__$1 = state_13278;var statearr_13288_13307 = state_13278__$1;(statearr_13288_13307[2] = null);
(statearr_13288_13307[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13279 === 10))
{var inst_13271 = (state_13278[2]);var state_13278__$1 = (function (){var statearr_13289 = state_13278;(statearr_13289[8] = inst_13271);
return statearr_13289;
})();var statearr_13290_13308 = state_13278__$1;(statearr_13290_13308[2] = null);
(statearr_13290_13308[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13279 === 11))
{var inst_13268 = (state_13278[2]);var state_13278__$1 = state_13278;var statearr_13291_13309 = state_13278__$1;(statearr_13291_13309[2] = inst_13268);
(statearr_13291_13309[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__5998__auto__){
return (function() {
var state_machine__5999__auto__ = null;
var state_machine__5999__auto____0 = (function (){var statearr_13295 = [null,null,null,null,null,null,null,null,null];(statearr_13295[0] = state_machine__5999__auto__);
(statearr_13295[1] = 1);
return statearr_13295;
});
var state_machine__5999__auto____1 = (function (state_13278){while(true){
var ret_value__6000__auto__ = (function (){try{while(true){
var result__6001__auto__ = switch__5998__auto__.call(null,state_13278);if(cljs.core.keyword_identical_QMARK_.call(null,result__6001__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6001__auto__;
}
break;
}
}catch (e13296){if((e13296 instanceof Object))
{var ex__6002__auto__ = e13296;var statearr_13297_13310 = state_13278;(statearr_13297_13310[5] = ex__6002__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13278);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13296;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6000__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13311 = state_13278;
state_13278 = G__13311;
continue;
}
} else
{return ret_value__6000__auto__;
}
break;
}
});
state_machine__5999__auto__ = function(state_13278){
switch(arguments.length){
case 0:
return state_machine__5999__auto____0.call(this);
case 1:
return state_machine__5999__auto____1.call(this,state_13278);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5999__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5999__auto____0;
state_machine__5999__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5999__auto____1;
return state_machine__5999__auto__;
})()
;})(switch__5998__auto__))
})();var state__6070__auto__ = (function (){var statearr_13298 = f__6069__auto__.call(null);(statearr_13298[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6068__auto___13299);
return statearr_13298;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6070__auto__);
}));
return out;
});
filter_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return filter_LT___2.call(this,p,ch);
case 3:
return filter_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filter_LT_.cljs$core$IFn$_invoke$arity$2 = filter_LT___2;
filter_LT_.cljs$core$IFn$_invoke$arity$3 = filter_LT___3;
return filter_LT_;
})()
;
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns false. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.remove_LT_ = (function() {
var remove_LT_ = null;
var remove_LT___2 = (function (p,ch){return remove_LT_.call(null,p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});
remove_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return remove_LT___2.call(this,p,ch);
case 3:
return remove_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_LT_.cljs$core$IFn$_invoke$arity$2 = remove_LT___2;
remove_LT_.cljs$core$IFn$_invoke$arity$3 = remove_LT___3;
return remove_LT_;
})()
;
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__6068__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6069__auto__ = (function (){var switch__5998__auto__ = (function (state_13463){var state_val_13464 = (state_13463[1]);if((state_val_13464 === 1))
{var state_13463__$1 = state_13463;var statearr_13465_13502 = state_13463__$1;(statearr_13465_13502[2] = null);
(statearr_13465_13502[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13464 === 2))
{var state_13463__$1 = state_13463;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13463__$1,4,in$);
} else
{if((state_val_13464 === 3))
{var inst_13461 = (state_13463[2]);var state_13463__$1 = state_13463;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13463__$1,inst_13461);
} else
{if((state_val_13464 === 4))
{var inst_13409 = (state_13463[7]);var inst_13409__$1 = (state_13463[2]);var inst_13410 = (inst_13409__$1 == null);var state_13463__$1 = (function (){var statearr_13466 = state_13463;(statearr_13466[7] = inst_13409__$1);
return statearr_13466;
})();if(cljs.core.truth_(inst_13410))
{var statearr_13467_13503 = state_13463__$1;(statearr_13467_13503[1] = 5);
} else
{var statearr_13468_13504 = state_13463__$1;(statearr_13468_13504[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13464 === 5))
{var inst_13412 = cljs.core.async.close_BANG_.call(null,out);var state_13463__$1 = state_13463;var statearr_13469_13505 = state_13463__$1;(statearr_13469_13505[2] = inst_13412);
(statearr_13469_13505[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13464 === 6))
{var inst_13409 = (state_13463[7]);var inst_13414 = f.call(null,inst_13409);var inst_13419 = cljs.core.seq.call(null,inst_13414);var inst_13420 = inst_13419;var inst_13421 = null;var inst_13422 = 0;var inst_13423 = 0;var state_13463__$1 = (function (){var statearr_13470 = state_13463;(statearr_13470[8] = inst_13423);
(statearr_13470[9] = inst_13422);
(statearr_13470[10] = inst_13421);
(statearr_13470[11] = inst_13420);
return statearr_13470;
})();var statearr_13471_13506 = state_13463__$1;(statearr_13471_13506[2] = null);
(statearr_13471_13506[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13464 === 7))
{var inst_13459 = (state_13463[2]);var state_13463__$1 = state_13463;var statearr_13472_13507 = state_13463__$1;(statearr_13472_13507[2] = inst_13459);
(statearr_13472_13507[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13464 === 8))
{var inst_13423 = (state_13463[8]);var inst_13422 = (state_13463[9]);var inst_13425 = (inst_13423 < inst_13422);var inst_13426 = inst_13425;var state_13463__$1 = state_13463;if(cljs.core.truth_(inst_13426))
{var statearr_13473_13508 = state_13463__$1;(statearr_13473_13508[1] = 10);
} else
{var statearr_13474_13509 = state_13463__$1;(statearr_13474_13509[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13464 === 9))
{var inst_13456 = (state_13463[2]);var state_13463__$1 = (function (){var statearr_13475 = state_13463;(statearr_13475[12] = inst_13456);
return statearr_13475;
})();var statearr_13476_13510 = state_13463__$1;(statearr_13476_13510[2] = null);
(statearr_13476_13510[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13464 === 10))
{var inst_13423 = (state_13463[8]);var inst_13421 = (state_13463[10]);var inst_13428 = cljs.core._nth.call(null,inst_13421,inst_13423);var state_13463__$1 = state_13463;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13463__$1,13,out,inst_13428);
} else
{if((state_val_13464 === 11))
{var inst_13434 = (state_13463[13]);var inst_13420 = (state_13463[11]);var inst_13434__$1 = cljs.core.seq.call(null,inst_13420);var state_13463__$1 = (function (){var statearr_13480 = state_13463;(statearr_13480[13] = inst_13434__$1);
return statearr_13480;
})();if(inst_13434__$1)
{var statearr_13481_13511 = state_13463__$1;(statearr_13481_13511[1] = 14);
} else
{var statearr_13482_13512 = state_13463__$1;(statearr_13482_13512[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13464 === 12))
{var inst_13454 = (state_13463[2]);var state_13463__$1 = state_13463;var statearr_13483_13513 = state_13463__$1;(statearr_13483_13513[2] = inst_13454);
(statearr_13483_13513[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13464 === 13))
{var inst_13423 = (state_13463[8]);var inst_13422 = (state_13463[9]);var inst_13421 = (state_13463[10]);var inst_13420 = (state_13463[11]);var inst_13430 = (state_13463[2]);var inst_13431 = (inst_13423 + 1);var tmp13477 = inst_13422;var tmp13478 = inst_13421;var tmp13479 = inst_13420;var inst_13420__$1 = tmp13479;var inst_13421__$1 = tmp13478;var inst_13422__$1 = tmp13477;var inst_13423__$1 = inst_13431;var state_13463__$1 = (function (){var statearr_13484 = state_13463;(statearr_13484[14] = inst_13430);
(statearr_13484[8] = inst_13423__$1);
(statearr_13484[9] = inst_13422__$1);
(statearr_13484[10] = inst_13421__$1);
(statearr_13484[11] = inst_13420__$1);
return statearr_13484;
})();var statearr_13485_13514 = state_13463__$1;(statearr_13485_13514[2] = null);
(statearr_13485_13514[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13464 === 14))
{var inst_13434 = (state_13463[13]);var inst_13436 = cljs.core.chunked_seq_QMARK_.call(null,inst_13434);var state_13463__$1 = state_13463;if(inst_13436)
{var statearr_13486_13515 = state_13463__$1;(statearr_13486_13515[1] = 17);
} else
{var statearr_13487_13516 = state_13463__$1;(statearr_13487_13516[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13464 === 15))
{var state_13463__$1 = state_13463;var statearr_13488_13517 = state_13463__$1;(statearr_13488_13517[2] = null);
(statearr_13488_13517[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13464 === 16))
{var inst_13452 = (state_13463[2]);var state_13463__$1 = state_13463;var statearr_13489_13518 = state_13463__$1;(statearr_13489_13518[2] = inst_13452);
(statearr_13489_13518[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13464 === 17))
{var inst_13434 = (state_13463[13]);var inst_13438 = cljs.core.chunk_first.call(null,inst_13434);var inst_13439 = cljs.core.chunk_rest.call(null,inst_13434);var inst_13440 = cljs.core.count.call(null,inst_13438);var inst_13420 = inst_13439;var inst_13421 = inst_13438;var inst_13422 = inst_13440;var inst_13423 = 0;var state_13463__$1 = (function (){var statearr_13490 = state_13463;(statearr_13490[8] = inst_13423);
(statearr_13490[9] = inst_13422);
(statearr_13490[10] = inst_13421);
(statearr_13490[11] = inst_13420);
return statearr_13490;
})();var statearr_13491_13519 = state_13463__$1;(statearr_13491_13519[2] = null);
(statearr_13491_13519[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13464 === 18))
{var inst_13434 = (state_13463[13]);var inst_13443 = cljs.core.first.call(null,inst_13434);var state_13463__$1 = state_13463;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13463__$1,20,out,inst_13443);
} else
{if((state_val_13464 === 19))
{var inst_13449 = (state_13463[2]);var state_13463__$1 = state_13463;var statearr_13492_13520 = state_13463__$1;(statearr_13492_13520[2] = inst_13449);
(statearr_13492_13520[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13464 === 20))
{var inst_13434 = (state_13463[13]);var inst_13445 = (state_13463[2]);var inst_13446 = cljs.core.next.call(null,inst_13434);var inst_13420 = inst_13446;var inst_13421 = null;var inst_13422 = 0;var inst_13423 = 0;var state_13463__$1 = (function (){var statearr_13493 = state_13463;(statearr_13493[15] = inst_13445);
(statearr_13493[8] = inst_13423);
(statearr_13493[9] = inst_13422);
(statearr_13493[10] = inst_13421);
(statearr_13493[11] = inst_13420);
return statearr_13493;
})();var statearr_13494_13521 = state_13463__$1;(statearr_13494_13521[2] = null);
(statearr_13494_13521[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__5998__auto__){
return (function() {
var state_machine__5999__auto__ = null;
var state_machine__5999__auto____0 = (function (){var statearr_13498 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13498[0] = state_machine__5999__auto__);
(statearr_13498[1] = 1);
return statearr_13498;
});
var state_machine__5999__auto____1 = (function (state_13463){while(true){
var ret_value__6000__auto__ = (function (){try{while(true){
var result__6001__auto__ = switch__5998__auto__.call(null,state_13463);if(cljs.core.keyword_identical_QMARK_.call(null,result__6001__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6001__auto__;
}
break;
}
}catch (e13499){if((e13499 instanceof Object))
{var ex__6002__auto__ = e13499;var statearr_13500_13522 = state_13463;(statearr_13500_13522[5] = ex__6002__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13463);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13499;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6000__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13523 = state_13463;
state_13463 = G__13523;
continue;
}
} else
{return ret_value__6000__auto__;
}
break;
}
});
state_machine__5999__auto__ = function(state_13463){
switch(arguments.length){
case 0:
return state_machine__5999__auto____0.call(this);
case 1:
return state_machine__5999__auto____1.call(this,state_13463);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5999__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5999__auto____0;
state_machine__5999__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5999__auto____1;
return state_machine__5999__auto__;
})()
;})(switch__5998__auto__))
})();var state__6070__auto__ = (function (){var statearr_13501 = f__6069__auto__.call(null);(statearr_13501[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6068__auto__);
return statearr_13501;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6070__auto__);
}));
return c__6068__auto__;
});
/**
* Takes a function and a source channel, and returns a channel which
* contains the values in each collection produced by applying f to
* each value taken from the source channel. f must return a
* collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The channel will close when the source channel
* closes.
*/
cljs.core.async.mapcat_LT_ = (function() {
var mapcat_LT_ = null;
var mapcat_LT___2 = (function (f,in$){return mapcat_LT_.call(null,f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return out;
});
mapcat_LT_ = function(f,in$,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_LT___2.call(this,f,in$);
case 3:
return mapcat_LT___3.call(this,f,in$,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = mapcat_LT___2;
mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = mapcat_LT___3;
return mapcat_LT_;
})()
;
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value put, then supplies each element of the result
* to the target channel. f must return a collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The target channel will be closed when the source
* channel closes.
*/
cljs.core.async.mapcat_GT_ = (function() {
var mapcat_GT_ = null;
var mapcat_GT___2 = (function (f,out){return mapcat_GT_.call(null,f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){var in$ = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return in$;
});
mapcat_GT_ = function(f,out,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_GT___2.call(this,f,out);
case 3:
return mapcat_GT___3.call(this,f,out,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = mapcat_GT___2;
mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = mapcat_GT___3;
return mapcat_GT_;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel. By default, the to channel will be closed when the
* from channel closes, but can be determined by the close?
* parameter.
*/
cljs.core.async.pipe = (function() {
var pipe = null;
var pipe__2 = (function (from,to){return pipe.call(null,from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){var c__6068__auto___13604 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6069__auto__ = (function (){var switch__5998__auto__ = (function (state_13583){var state_val_13584 = (state_13583[1]);if((state_val_13584 === 1))
{var state_13583__$1 = state_13583;var statearr_13585_13605 = state_13583__$1;(statearr_13585_13605[2] = null);
(statearr_13585_13605[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13584 === 2))
{var state_13583__$1 = state_13583;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13583__$1,4,from);
} else
{if((state_val_13584 === 3))
{var inst_13581 = (state_13583[2]);var state_13583__$1 = state_13583;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13583__$1,inst_13581);
} else
{if((state_val_13584 === 4))
{var inst_13566 = (state_13583[7]);var inst_13566__$1 = (state_13583[2]);var inst_13567 = (inst_13566__$1 == null);var state_13583__$1 = (function (){var statearr_13586 = state_13583;(statearr_13586[7] = inst_13566__$1);
return statearr_13586;
})();if(cljs.core.truth_(inst_13567))
{var statearr_13587_13606 = state_13583__$1;(statearr_13587_13606[1] = 5);
} else
{var statearr_13588_13607 = state_13583__$1;(statearr_13588_13607[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13584 === 5))
{var state_13583__$1 = state_13583;if(cljs.core.truth_(close_QMARK_))
{var statearr_13589_13608 = state_13583__$1;(statearr_13589_13608[1] = 8);
} else
{var statearr_13590_13609 = state_13583__$1;(statearr_13590_13609[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13584 === 6))
{var inst_13566 = (state_13583[7]);var state_13583__$1 = state_13583;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13583__$1,11,to,inst_13566);
} else
{if((state_val_13584 === 7))
{var inst_13579 = (state_13583[2]);var state_13583__$1 = state_13583;var statearr_13591_13610 = state_13583__$1;(statearr_13591_13610[2] = inst_13579);
(statearr_13591_13610[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13584 === 8))
{var inst_13570 = cljs.core.async.close_BANG_.call(null,to);var state_13583__$1 = state_13583;var statearr_13592_13611 = state_13583__$1;(statearr_13592_13611[2] = inst_13570);
(statearr_13592_13611[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13584 === 9))
{var state_13583__$1 = state_13583;var statearr_13593_13612 = state_13583__$1;(statearr_13593_13612[2] = null);
(statearr_13593_13612[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13584 === 10))
{var inst_13573 = (state_13583[2]);var state_13583__$1 = state_13583;var statearr_13594_13613 = state_13583__$1;(statearr_13594_13613[2] = inst_13573);
(statearr_13594_13613[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13584 === 11))
{var inst_13576 = (state_13583[2]);var state_13583__$1 = (function (){var statearr_13595 = state_13583;(statearr_13595[8] = inst_13576);
return statearr_13595;
})();var statearr_13596_13614 = state_13583__$1;(statearr_13596_13614[2] = null);
(statearr_13596_13614[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__5998__auto__){
return (function() {
var state_machine__5999__auto__ = null;
var state_machine__5999__auto____0 = (function (){var statearr_13600 = [null,null,null,null,null,null,null,null,null];(statearr_13600[0] = state_machine__5999__auto__);
(statearr_13600[1] = 1);
return statearr_13600;
});
var state_machine__5999__auto____1 = (function (state_13583){while(true){
var ret_value__6000__auto__ = (function (){try{while(true){
var result__6001__auto__ = switch__5998__auto__.call(null,state_13583);if(cljs.core.keyword_identical_QMARK_.call(null,result__6001__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6001__auto__;
}
break;
}
}catch (e13601){if((e13601 instanceof Object))
{var ex__6002__auto__ = e13601;var statearr_13602_13615 = state_13583;(statearr_13602_13615[5] = ex__6002__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13583);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13601;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6000__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13616 = state_13583;
state_13583 = G__13616;
continue;
}
} else
{return ret_value__6000__auto__;
}
break;
}
});
state_machine__5999__auto__ = function(state_13583){
switch(arguments.length){
case 0:
return state_machine__5999__auto____0.call(this);
case 1:
return state_machine__5999__auto____1.call(this,state_13583);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5999__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5999__auto____0;
state_machine__5999__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5999__auto____1;
return state_machine__5999__auto__;
})()
;})(switch__5998__auto__))
})();var state__6070__auto__ = (function (){var statearr_13603 = f__6069__auto__.call(null);(statearr_13603[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6068__auto___13604);
return statearr_13603;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6070__auto__);
}));
return to;
});
pipe = function(from,to,close_QMARK_){
switch(arguments.length){
case 2:
return pipe__2.call(this,from,to);
case 3:
return pipe__3.call(this,from,to,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipe.cljs$core$IFn$_invoke$arity$2 = pipe__2;
pipe.cljs$core$IFn$_invoke$arity$3 = pipe__3;
return pipe;
})()
;
/**
* Takes a predicate and a source channel and returns a vector of two
* channels, the first of which will contain the values for which the
* predicate returned true, the second those for which it returned
* false.
* 
* The out channels will be unbuffered by default, or two buf-or-ns can
* be supplied. The channels will close after the source channel has
* closed.
*/
cljs.core.async.split = (function() {
var split = null;
var split__2 = (function (p,ch){return split.call(null,p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__6068__auto___13703 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6069__auto__ = (function (){var switch__5998__auto__ = (function (state_13681){var state_val_13682 = (state_13681[1]);if((state_val_13682 === 1))
{var state_13681__$1 = state_13681;var statearr_13683_13704 = state_13681__$1;(statearr_13683_13704[2] = null);
(statearr_13683_13704[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13682 === 2))
{var state_13681__$1 = state_13681;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13681__$1,4,ch);
} else
{if((state_val_13682 === 3))
{var inst_13679 = (state_13681[2]);var state_13681__$1 = state_13681;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13681__$1,inst_13679);
} else
{if((state_val_13682 === 4))
{var inst_13662 = (state_13681[7]);var inst_13662__$1 = (state_13681[2]);var inst_13663 = (inst_13662__$1 == null);var state_13681__$1 = (function (){var statearr_13684 = state_13681;(statearr_13684[7] = inst_13662__$1);
return statearr_13684;
})();if(cljs.core.truth_(inst_13663))
{var statearr_13685_13705 = state_13681__$1;(statearr_13685_13705[1] = 5);
} else
{var statearr_13686_13706 = state_13681__$1;(statearr_13686_13706[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13682 === 5))
{var inst_13665 = cljs.core.async.close_BANG_.call(null,tc);var inst_13666 = cljs.core.async.close_BANG_.call(null,fc);var state_13681__$1 = (function (){var statearr_13687 = state_13681;(statearr_13687[8] = inst_13665);
return statearr_13687;
})();var statearr_13688_13707 = state_13681__$1;(statearr_13688_13707[2] = inst_13666);
(statearr_13688_13707[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13682 === 6))
{var inst_13662 = (state_13681[7]);var inst_13668 = p.call(null,inst_13662);var state_13681__$1 = state_13681;if(cljs.core.truth_(inst_13668))
{var statearr_13689_13708 = state_13681__$1;(statearr_13689_13708[1] = 9);
} else
{var statearr_13690_13709 = state_13681__$1;(statearr_13690_13709[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13682 === 7))
{var inst_13677 = (state_13681[2]);var state_13681__$1 = state_13681;var statearr_13691_13710 = state_13681__$1;(statearr_13691_13710[2] = inst_13677);
(statearr_13691_13710[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13682 === 8))
{var inst_13674 = (state_13681[2]);var state_13681__$1 = (function (){var statearr_13692 = state_13681;(statearr_13692[9] = inst_13674);
return statearr_13692;
})();var statearr_13693_13711 = state_13681__$1;(statearr_13693_13711[2] = null);
(statearr_13693_13711[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13682 === 9))
{var state_13681__$1 = state_13681;var statearr_13694_13712 = state_13681__$1;(statearr_13694_13712[2] = tc);
(statearr_13694_13712[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13682 === 10))
{var state_13681__$1 = state_13681;var statearr_13695_13713 = state_13681__$1;(statearr_13695_13713[2] = fc);
(statearr_13695_13713[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13682 === 11))
{var inst_13662 = (state_13681[7]);var inst_13672 = (state_13681[2]);var state_13681__$1 = state_13681;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13681__$1,8,inst_13672,inst_13662);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__5998__auto__){
return (function() {
var state_machine__5999__auto__ = null;
var state_machine__5999__auto____0 = (function (){var statearr_13699 = [null,null,null,null,null,null,null,null,null,null];(statearr_13699[0] = state_machine__5999__auto__);
(statearr_13699[1] = 1);
return statearr_13699;
});
var state_machine__5999__auto____1 = (function (state_13681){while(true){
var ret_value__6000__auto__ = (function (){try{while(true){
var result__6001__auto__ = switch__5998__auto__.call(null,state_13681);if(cljs.core.keyword_identical_QMARK_.call(null,result__6001__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6001__auto__;
}
break;
}
}catch (e13700){if((e13700 instanceof Object))
{var ex__6002__auto__ = e13700;var statearr_13701_13714 = state_13681;(statearr_13701_13714[5] = ex__6002__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13681);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13700;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6000__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13715 = state_13681;
state_13681 = G__13715;
continue;
}
} else
{return ret_value__6000__auto__;
}
break;
}
});
state_machine__5999__auto__ = function(state_13681){
switch(arguments.length){
case 0:
return state_machine__5999__auto____0.call(this);
case 1:
return state_machine__5999__auto____1.call(this,state_13681);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5999__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5999__auto____0;
state_machine__5999__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5999__auto____1;
return state_machine__5999__auto__;
})()
;})(switch__5998__auto__))
})();var state__6070__auto__ = (function (){var statearr_13702 = f__6069__auto__.call(null);(statearr_13702[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6068__auto___13703);
return statearr_13702;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6070__auto__);
}));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});
split = function(p,ch,t_buf_or_n,f_buf_or_n){
switch(arguments.length){
case 2:
return split__2.call(this,p,ch);
case 4:
return split__4.call(this,p,ch,t_buf_or_n,f_buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
split.cljs$core$IFn$_invoke$arity$2 = split__2;
split.cljs$core$IFn$_invoke$arity$4 = split__4;
return split;
})()
;
/**
* f should be a function of 2 arguments. Returns a channel containing
* the single result of applying f to init and the first item from the
* channel, then applying f to that result and the 2nd item, etc. If
* the channel closes without yielding items, returns init and f is not
* called. ch must close before reduce produces a result.
*/
cljs.core.async.reduce = (function reduce(f,init,ch){var c__6068__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6069__auto__ = (function (){var switch__5998__auto__ = (function (state_13762){var state_val_13763 = (state_13762[1]);if((state_val_13763 === 7))
{var inst_13758 = (state_13762[2]);var state_13762__$1 = state_13762;var statearr_13764_13780 = state_13762__$1;(statearr_13764_13780[2] = inst_13758);
(statearr_13764_13780[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13763 === 6))
{var inst_13751 = (state_13762[7]);var inst_13748 = (state_13762[8]);var inst_13755 = f.call(null,inst_13748,inst_13751);var inst_13748__$1 = inst_13755;var state_13762__$1 = (function (){var statearr_13765 = state_13762;(statearr_13765[8] = inst_13748__$1);
return statearr_13765;
})();var statearr_13766_13781 = state_13762__$1;(statearr_13766_13781[2] = null);
(statearr_13766_13781[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13763 === 5))
{var inst_13748 = (state_13762[8]);var state_13762__$1 = state_13762;var statearr_13767_13782 = state_13762__$1;(statearr_13767_13782[2] = inst_13748);
(statearr_13767_13782[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13763 === 4))
{var inst_13751 = (state_13762[7]);var inst_13751__$1 = (state_13762[2]);var inst_13752 = (inst_13751__$1 == null);var state_13762__$1 = (function (){var statearr_13768 = state_13762;(statearr_13768[7] = inst_13751__$1);
return statearr_13768;
})();if(cljs.core.truth_(inst_13752))
{var statearr_13769_13783 = state_13762__$1;(statearr_13769_13783[1] = 5);
} else
{var statearr_13770_13784 = state_13762__$1;(statearr_13770_13784[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13763 === 3))
{var inst_13760 = (state_13762[2]);var state_13762__$1 = state_13762;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13762__$1,inst_13760);
} else
{if((state_val_13763 === 2))
{var state_13762__$1 = state_13762;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13762__$1,4,ch);
} else
{if((state_val_13763 === 1))
{var inst_13748 = init;var state_13762__$1 = (function (){var statearr_13771 = state_13762;(statearr_13771[8] = inst_13748);
return statearr_13771;
})();var statearr_13772_13785 = state_13762__$1;(statearr_13772_13785[2] = null);
(statearr_13772_13785[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
});return ((function (switch__5998__auto__){
return (function() {
var state_machine__5999__auto__ = null;
var state_machine__5999__auto____0 = (function (){var statearr_13776 = [null,null,null,null,null,null,null,null,null];(statearr_13776[0] = state_machine__5999__auto__);
(statearr_13776[1] = 1);
return statearr_13776;
});
var state_machine__5999__auto____1 = (function (state_13762){while(true){
var ret_value__6000__auto__ = (function (){try{while(true){
var result__6001__auto__ = switch__5998__auto__.call(null,state_13762);if(cljs.core.keyword_identical_QMARK_.call(null,result__6001__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6001__auto__;
}
break;
}
}catch (e13777){if((e13777 instanceof Object))
{var ex__6002__auto__ = e13777;var statearr_13778_13786 = state_13762;(statearr_13778_13786[5] = ex__6002__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13762);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13777;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6000__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13787 = state_13762;
state_13762 = G__13787;
continue;
}
} else
{return ret_value__6000__auto__;
}
break;
}
});
state_machine__5999__auto__ = function(state_13762){
switch(arguments.length){
case 0:
return state_machine__5999__auto____0.call(this);
case 1:
return state_machine__5999__auto____1.call(this,state_13762);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5999__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5999__auto____0;
state_machine__5999__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5999__auto____1;
return state_machine__5999__auto__;
})()
;})(switch__5998__auto__))
})();var state__6070__auto__ = (function (){var statearr_13779 = f__6069__auto__.call(null);(statearr_13779[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6068__auto__);
return statearr_13779;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6070__auto__);
}));
return c__6068__auto__;
});
/**
* Puts the contents of coll into the supplied channel.
* 
* By default the channel will be closed after the items are copied,
* but can be determined by the close? parameter.
* 
* Returns a channel which will close after the items are copied.
*/
cljs.core.async.onto_chan = (function() {
var onto_chan = null;
var onto_chan__2 = (function (ch,coll){return onto_chan.call(null,ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__6068__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6069__auto__ = (function (){var switch__5998__auto__ = (function (state_13849){var state_val_13850 = (state_13849[1]);if((state_val_13850 === 1))
{var inst_13829 = cljs.core.seq.call(null,coll);var inst_13830 = inst_13829;var state_13849__$1 = (function (){var statearr_13851 = state_13849;(statearr_13851[7] = inst_13830);
return statearr_13851;
})();var statearr_13852_13870 = state_13849__$1;(statearr_13852_13870[2] = null);
(statearr_13852_13870[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13850 === 2))
{var inst_13830 = (state_13849[7]);var state_13849__$1 = state_13849;if(cljs.core.truth_(inst_13830))
{var statearr_13853_13871 = state_13849__$1;(statearr_13853_13871[1] = 4);
} else
{var statearr_13854_13872 = state_13849__$1;(statearr_13854_13872[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13850 === 3))
{var inst_13847 = (state_13849[2]);var state_13849__$1 = state_13849;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13849__$1,inst_13847);
} else
{if((state_val_13850 === 4))
{var inst_13830 = (state_13849[7]);var inst_13833 = cljs.core.first.call(null,inst_13830);var state_13849__$1 = state_13849;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13849__$1,7,ch,inst_13833);
} else
{if((state_val_13850 === 5))
{var state_13849__$1 = state_13849;if(cljs.core.truth_(close_QMARK_))
{var statearr_13855_13873 = state_13849__$1;(statearr_13855_13873[1] = 8);
} else
{var statearr_13856_13874 = state_13849__$1;(statearr_13856_13874[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13850 === 6))
{var inst_13845 = (state_13849[2]);var state_13849__$1 = state_13849;var statearr_13857_13875 = state_13849__$1;(statearr_13857_13875[2] = inst_13845);
(statearr_13857_13875[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13850 === 7))
{var inst_13830 = (state_13849[7]);var inst_13835 = (state_13849[2]);var inst_13836 = cljs.core.next.call(null,inst_13830);var inst_13830__$1 = inst_13836;var state_13849__$1 = (function (){var statearr_13858 = state_13849;(statearr_13858[8] = inst_13835);
(statearr_13858[7] = inst_13830__$1);
return statearr_13858;
})();var statearr_13859_13876 = state_13849__$1;(statearr_13859_13876[2] = null);
(statearr_13859_13876[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13850 === 8))
{var inst_13840 = cljs.core.async.close_BANG_.call(null,ch);var state_13849__$1 = state_13849;var statearr_13860_13877 = state_13849__$1;(statearr_13860_13877[2] = inst_13840);
(statearr_13860_13877[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13850 === 9))
{var state_13849__$1 = state_13849;var statearr_13861_13878 = state_13849__$1;(statearr_13861_13878[2] = null);
(statearr_13861_13878[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13850 === 10))
{var inst_13843 = (state_13849[2]);var state_13849__$1 = state_13849;var statearr_13862_13879 = state_13849__$1;(statearr_13862_13879[2] = inst_13843);
(statearr_13862_13879[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__5998__auto__){
return (function() {
var state_machine__5999__auto__ = null;
var state_machine__5999__auto____0 = (function (){var statearr_13866 = [null,null,null,null,null,null,null,null,null];(statearr_13866[0] = state_machine__5999__auto__);
(statearr_13866[1] = 1);
return statearr_13866;
});
var state_machine__5999__auto____1 = (function (state_13849){while(true){
var ret_value__6000__auto__ = (function (){try{while(true){
var result__6001__auto__ = switch__5998__auto__.call(null,state_13849);if(cljs.core.keyword_identical_QMARK_.call(null,result__6001__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6001__auto__;
}
break;
}
}catch (e13867){if((e13867 instanceof Object))
{var ex__6002__auto__ = e13867;var statearr_13868_13880 = state_13849;(statearr_13868_13880[5] = ex__6002__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13849);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13867;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6000__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13881 = state_13849;
state_13849 = G__13881;
continue;
}
} else
{return ret_value__6000__auto__;
}
break;
}
});
state_machine__5999__auto__ = function(state_13849){
switch(arguments.length){
case 0:
return state_machine__5999__auto____0.call(this);
case 1:
return state_machine__5999__auto____1.call(this,state_13849);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5999__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5999__auto____0;
state_machine__5999__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5999__auto____1;
return state_machine__5999__auto__;
})()
;})(switch__5998__auto__))
})();var state__6070__auto__ = (function (){var statearr_13869 = f__6069__auto__.call(null);(statearr_13869[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6068__auto__);
return statearr_13869;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6070__auto__);
}));
return c__6068__auto__;
});
onto_chan = function(ch,coll,close_QMARK_){
switch(arguments.length){
case 2:
return onto_chan__2.call(this,ch,coll);
case 3:
return onto_chan__3.call(this,ch,coll,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
onto_chan.cljs$core$IFn$_invoke$arity$2 = onto_chan__2;
onto_chan.cljs$core$IFn$_invoke$arity$3 = onto_chan__3;
return onto_chan;
})()
;
/**
* Creates and returns a channel which contains the contents of coll,
* closing when exhausted.
*/
cljs.core.async.to_chan = (function to_chan(coll){var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,100,coll));cljs.core.async.onto_chan.call(null,ch,coll);
return ch;
});
cljs.core.async.Mux = (function (){var obj13883 = {};return obj13883;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__3431__auto__ = _;if(and__3431__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__3431__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__4070__auto__ = (((_ == null))?null:_);return (function (){var or__3443__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj13885 = {};return obj13885;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__3431__auto__ = m;if(and__3431__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__3431__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__4070__auto__ = (((m == null))?null:m);return (function (){var or__3443__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__3431__auto__ = m;if(and__3431__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__3431__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__4070__auto__ = (((m == null))?null:m);return (function (){var or__3443__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__3431__auto__ = m;if(and__3431__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__3431__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__4070__auto__ = (((m == null))?null:m);return (function (){var or__3443__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});
/**
* Creates and returns a mult(iple) of the supplied channel. Channels
* containing copies of the channel can be created with 'tap', and
* detached with 'untap'.
* 
* Each item is distributed to all taps in parallel and synchronously,
* i.e. each tap must accept before the next item is distributed. Use
* buffering/windowing to prevent slow taps from holding up the mult.
* 
* Items received when there are no taps get dropped.
* 
* If a tap put throws an exception, it will be removed from the mult.
*/
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t14109 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14109 = (function (cs,ch,mult,meta14110){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta14110 = meta14110;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14109.cljs$lang$type = true;
cljs.core.async.t14109.cljs$lang$ctorStr = "cljs.core.async/t14109";
cljs.core.async.t14109.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t14109");
});})(cs))
;
cljs.core.async.t14109.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t14109.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t14109.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t14109.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t14109.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t14109.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t14109.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_14111){var self__ = this;
var _14111__$1 = this;return self__.meta14110;
});})(cs))
;
cljs.core.async.t14109.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_14111,meta14110__$1){var self__ = this;
var _14111__$1 = this;return (new cljs.core.async.t14109(self__.cs,self__.ch,self__.mult,meta14110__$1));
});})(cs))
;
cljs.core.async.__GT_t14109 = ((function (cs){
return (function __GT_t14109(cs__$1,ch__$1,mult__$1,meta14110){return (new cljs.core.async.t14109(cs__$1,ch__$1,mult__$1,meta14110));
});})(cs))
;
}
return (new cljs.core.async.t14109(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__6068__auto___14332 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6069__auto__ = (function (){var switch__5998__auto__ = (function (state_14246){var state_val_14247 = (state_14246[1]);if((state_val_14247 === 32))
{var inst_14190 = (state_14246[7]);var inst_14114 = (state_14246[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_14246,31,Object,null,30);var inst_14197 = cljs.core.async.put_BANG_.call(null,inst_14190,inst_14114,done);var state_14246__$1 = state_14246;var statearr_14248_14333 = state_14246__$1;(statearr_14248_14333[2] = inst_14197);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14246__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14247 === 1))
{var state_14246__$1 = state_14246;var statearr_14249_14334 = state_14246__$1;(statearr_14249_14334[2] = null);
(statearr_14249_14334[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14247 === 33))
{var inst_14203 = (state_14246[9]);var inst_14205 = cljs.core.chunked_seq_QMARK_.call(null,inst_14203);var state_14246__$1 = state_14246;if(inst_14205)
{var statearr_14250_14335 = state_14246__$1;(statearr_14250_14335[1] = 36);
} else
{var statearr_14251_14336 = state_14246__$1;(statearr_14251_14336[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14247 === 2))
{var state_14246__$1 = state_14246;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14246__$1,4,ch);
} else
{if((state_val_14247 === 34))
{var state_14246__$1 = state_14246;var statearr_14252_14337 = state_14246__$1;(statearr_14252_14337[2] = null);
(statearr_14252_14337[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14247 === 3))
{var inst_14244 = (state_14246[2]);var state_14246__$1 = state_14246;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14246__$1,inst_14244);
} else
{if((state_val_14247 === 35))
{var inst_14228 = (state_14246[2]);var state_14246__$1 = state_14246;var statearr_14253_14338 = state_14246__$1;(statearr_14253_14338[2] = inst_14228);
(statearr_14253_14338[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14247 === 4))
{var inst_14114 = (state_14246[8]);var inst_14114__$1 = (state_14246[2]);var inst_14115 = (inst_14114__$1 == null);var state_14246__$1 = (function (){var statearr_14254 = state_14246;(statearr_14254[8] = inst_14114__$1);
return statearr_14254;
})();if(cljs.core.truth_(inst_14115))
{var statearr_14255_14339 = state_14246__$1;(statearr_14255_14339[1] = 5);
} else
{var statearr_14256_14340 = state_14246__$1;(statearr_14256_14340[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14247 === 36))
{var inst_14203 = (state_14246[9]);var inst_14207 = cljs.core.chunk_first.call(null,inst_14203);var inst_14208 = cljs.core.chunk_rest.call(null,inst_14203);var inst_14209 = cljs.core.count.call(null,inst_14207);var inst_14182 = inst_14208;var inst_14183 = inst_14207;var inst_14184 = inst_14209;var inst_14185 = 0;var state_14246__$1 = (function (){var statearr_14257 = state_14246;(statearr_14257[10] = inst_14182);
(statearr_14257[11] = inst_14184);
(statearr_14257[12] = inst_14183);
(statearr_14257[13] = inst_14185);
return statearr_14257;
})();var statearr_14258_14341 = state_14246__$1;(statearr_14258_14341[2] = null);
(statearr_14258_14341[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14247 === 5))
{var inst_14121 = cljs.core.deref.call(null,cs);var inst_14122 = cljs.core.seq.call(null,inst_14121);var inst_14123 = inst_14122;var inst_14124 = null;var inst_14125 = 0;var inst_14126 = 0;var state_14246__$1 = (function (){var statearr_14259 = state_14246;(statearr_14259[14] = inst_14123);
(statearr_14259[15] = inst_14124);
(statearr_14259[16] = inst_14126);
(statearr_14259[17] = inst_14125);
return statearr_14259;
})();var statearr_14260_14342 = state_14246__$1;(statearr_14260_14342[2] = null);
(statearr_14260_14342[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14247 === 37))
{var inst_14203 = (state_14246[9]);var inst_14212 = cljs.core.first.call(null,inst_14203);var state_14246__$1 = (function (){var statearr_14261 = state_14246;(statearr_14261[18] = inst_14212);
return statearr_14261;
})();var statearr_14262_14343 = state_14246__$1;(statearr_14262_14343[2] = null);
(statearr_14262_14343[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14247 === 6))
{var inst_14174 = (state_14246[19]);var inst_14173 = cljs.core.deref.call(null,cs);var inst_14174__$1 = cljs.core.keys.call(null,inst_14173);var inst_14175 = cljs.core.count.call(null,inst_14174__$1);var inst_14176 = cljs.core.reset_BANG_.call(null,dctr,inst_14175);var inst_14181 = cljs.core.seq.call(null,inst_14174__$1);var inst_14182 = inst_14181;var inst_14183 = null;var inst_14184 = 0;var inst_14185 = 0;var state_14246__$1 = (function (){var statearr_14263 = state_14246;(statearr_14263[20] = inst_14176);
(statearr_14263[10] = inst_14182);
(statearr_14263[19] = inst_14174__$1);
(statearr_14263[11] = inst_14184);
(statearr_14263[12] = inst_14183);
(statearr_14263[13] = inst_14185);
return statearr_14263;
})();var statearr_14264_14344 = state_14246__$1;(statearr_14264_14344[2] = null);
(statearr_14264_14344[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14247 === 38))
{var inst_14225 = (state_14246[2]);var state_14246__$1 = state_14246;var statearr_14265_14345 = state_14246__$1;(statearr_14265_14345[2] = inst_14225);
(statearr_14265_14345[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14247 === 7))
{var inst_14242 = (state_14246[2]);var state_14246__$1 = state_14246;var statearr_14266_14346 = state_14246__$1;(statearr_14266_14346[2] = inst_14242);
(statearr_14266_14346[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14247 === 39))
{var inst_14203 = (state_14246[9]);var inst_14221 = (state_14246[2]);var inst_14222 = cljs.core.next.call(null,inst_14203);var inst_14182 = inst_14222;var inst_14183 = null;var inst_14184 = 0;var inst_14185 = 0;var state_14246__$1 = (function (){var statearr_14267 = state_14246;(statearr_14267[10] = inst_14182);
(statearr_14267[21] = inst_14221);
(statearr_14267[11] = inst_14184);
(statearr_14267[12] = inst_14183);
(statearr_14267[13] = inst_14185);
return statearr_14267;
})();var statearr_14268_14347 = state_14246__$1;(statearr_14268_14347[2] = null);
(statearr_14268_14347[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14247 === 8))
{var inst_14126 = (state_14246[16]);var inst_14125 = (state_14246[17]);var inst_14128 = (inst_14126 < inst_14125);var inst_14129 = inst_14128;var state_14246__$1 = state_14246;if(cljs.core.truth_(inst_14129))
{var statearr_14269_14348 = state_14246__$1;(statearr_14269_14348[1] = 10);
} else
{var statearr_14270_14349 = state_14246__$1;(statearr_14270_14349[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14247 === 40))
{var inst_14212 = (state_14246[18]);var inst_14213 = (state_14246[2]);var inst_14214 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_14215 = cljs.core.async.untap_STAR_.call(null,m,inst_14212);var state_14246__$1 = (function (){var statearr_14271 = state_14246;(statearr_14271[22] = inst_14214);
(statearr_14271[23] = inst_14213);
return statearr_14271;
})();var statearr_14272_14350 = state_14246__$1;(statearr_14272_14350[2] = inst_14215);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14246__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14247 === 9))
{var inst_14171 = (state_14246[2]);var state_14246__$1 = state_14246;var statearr_14273_14351 = state_14246__$1;(statearr_14273_14351[2] = inst_14171);
(statearr_14273_14351[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14247 === 41))
{var inst_14212 = (state_14246[18]);var inst_14114 = (state_14246[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_14246,40,Object,null,39);var inst_14219 = cljs.core.async.put_BANG_.call(null,inst_14212,inst_14114,done);var state_14246__$1 = state_14246;var statearr_14274_14352 = state_14246__$1;(statearr_14274_14352[2] = inst_14219);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14246__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14247 === 10))
{var inst_14124 = (state_14246[15]);var inst_14126 = (state_14246[16]);var inst_14132 = cljs.core._nth.call(null,inst_14124,inst_14126);var inst_14133 = cljs.core.nth.call(null,inst_14132,0,null);var inst_14134 = cljs.core.nth.call(null,inst_14132,1,null);var state_14246__$1 = (function (){var statearr_14275 = state_14246;(statearr_14275[24] = inst_14133);
return statearr_14275;
})();if(cljs.core.truth_(inst_14134))
{var statearr_14276_14353 = state_14246__$1;(statearr_14276_14353[1] = 13);
} else
{var statearr_14277_14354 = state_14246__$1;(statearr_14277_14354[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14247 === 42))
{var state_14246__$1 = state_14246;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14246__$1,45,dchan);
} else
{if((state_val_14247 === 11))
{var inst_14123 = (state_14246[14]);var inst_14143 = (state_14246[25]);var inst_14143__$1 = cljs.core.seq.call(null,inst_14123);var state_14246__$1 = (function (){var statearr_14278 = state_14246;(statearr_14278[25] = inst_14143__$1);
return statearr_14278;
})();if(inst_14143__$1)
{var statearr_14279_14355 = state_14246__$1;(statearr_14279_14355[1] = 16);
} else
{var statearr_14280_14356 = state_14246__$1;(statearr_14280_14356[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14247 === 43))
{var state_14246__$1 = state_14246;var statearr_14281_14357 = state_14246__$1;(statearr_14281_14357[2] = null);
(statearr_14281_14357[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14247 === 12))
{var inst_14169 = (state_14246[2]);var state_14246__$1 = state_14246;var statearr_14282_14358 = state_14246__$1;(statearr_14282_14358[2] = inst_14169);
(statearr_14282_14358[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14247 === 44))
{var inst_14239 = (state_14246[2]);var state_14246__$1 = (function (){var statearr_14283 = state_14246;(statearr_14283[26] = inst_14239);
return statearr_14283;
})();var statearr_14284_14359 = state_14246__$1;(statearr_14284_14359[2] = null);
(statearr_14284_14359[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14247 === 13))
{var inst_14133 = (state_14246[24]);var inst_14136 = cljs.core.async.close_BANG_.call(null,inst_14133);var state_14246__$1 = state_14246;var statearr_14285_14360 = state_14246__$1;(statearr_14285_14360[2] = inst_14136);
(statearr_14285_14360[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14247 === 45))
{var inst_14236 = (state_14246[2]);var state_14246__$1 = state_14246;var statearr_14289_14361 = state_14246__$1;(statearr_14289_14361[2] = inst_14236);
(statearr_14289_14361[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14247 === 14))
{var state_14246__$1 = state_14246;var statearr_14290_14362 = state_14246__$1;(statearr_14290_14362[2] = null);
(statearr_14290_14362[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14247 === 15))
{var inst_14123 = (state_14246[14]);var inst_14124 = (state_14246[15]);var inst_14126 = (state_14246[16]);var inst_14125 = (state_14246[17]);var inst_14139 = (state_14246[2]);var inst_14140 = (inst_14126 + 1);var tmp14286 = inst_14123;var tmp14287 = inst_14124;var tmp14288 = inst_14125;var inst_14123__$1 = tmp14286;var inst_14124__$1 = tmp14287;var inst_14125__$1 = tmp14288;var inst_14126__$1 = inst_14140;var state_14246__$1 = (function (){var statearr_14291 = state_14246;(statearr_14291[14] = inst_14123__$1);
(statearr_14291[15] = inst_14124__$1);
(statearr_14291[27] = inst_14139);
(statearr_14291[16] = inst_14126__$1);
(statearr_14291[17] = inst_14125__$1);
return statearr_14291;
})();var statearr_14292_14363 = state_14246__$1;(statearr_14292_14363[2] = null);
(statearr_14292_14363[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14247 === 16))
{var inst_14143 = (state_14246[25]);var inst_14145 = cljs.core.chunked_seq_QMARK_.call(null,inst_14143);var state_14246__$1 = state_14246;if(inst_14145)
{var statearr_14293_14364 = state_14246__$1;(statearr_14293_14364[1] = 19);
} else
{var statearr_14294_14365 = state_14246__$1;(statearr_14294_14365[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14247 === 17))
{var state_14246__$1 = state_14246;var statearr_14295_14366 = state_14246__$1;(statearr_14295_14366[2] = null);
(statearr_14295_14366[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14247 === 18))
{var inst_14167 = (state_14246[2]);var state_14246__$1 = state_14246;var statearr_14296_14367 = state_14246__$1;(statearr_14296_14367[2] = inst_14167);
(statearr_14296_14367[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14247 === 19))
{var inst_14143 = (state_14246[25]);var inst_14147 = cljs.core.chunk_first.call(null,inst_14143);var inst_14148 = cljs.core.chunk_rest.call(null,inst_14143);var inst_14149 = cljs.core.count.call(null,inst_14147);var inst_14123 = inst_14148;var inst_14124 = inst_14147;var inst_14125 = inst_14149;var inst_14126 = 0;var state_14246__$1 = (function (){var statearr_14297 = state_14246;(statearr_14297[14] = inst_14123);
(statearr_14297[15] = inst_14124);
(statearr_14297[16] = inst_14126);
(statearr_14297[17] = inst_14125);
return statearr_14297;
})();var statearr_14298_14368 = state_14246__$1;(statearr_14298_14368[2] = null);
(statearr_14298_14368[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14247 === 20))
{var inst_14143 = (state_14246[25]);var inst_14153 = cljs.core.first.call(null,inst_14143);var inst_14154 = cljs.core.nth.call(null,inst_14153,0,null);var inst_14155 = cljs.core.nth.call(null,inst_14153,1,null);var state_14246__$1 = (function (){var statearr_14299 = state_14246;(statearr_14299[28] = inst_14154);
return statearr_14299;
})();if(cljs.core.truth_(inst_14155))
{var statearr_14300_14369 = state_14246__$1;(statearr_14300_14369[1] = 22);
} else
{var statearr_14301_14370 = state_14246__$1;(statearr_14301_14370[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14247 === 21))
{var inst_14164 = (state_14246[2]);var state_14246__$1 = state_14246;var statearr_14302_14371 = state_14246__$1;(statearr_14302_14371[2] = inst_14164);
(statearr_14302_14371[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14247 === 22))
{var inst_14154 = (state_14246[28]);var inst_14157 = cljs.core.async.close_BANG_.call(null,inst_14154);var state_14246__$1 = state_14246;var statearr_14303_14372 = state_14246__$1;(statearr_14303_14372[2] = inst_14157);
(statearr_14303_14372[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14247 === 23))
{var state_14246__$1 = state_14246;var statearr_14304_14373 = state_14246__$1;(statearr_14304_14373[2] = null);
(statearr_14304_14373[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14247 === 24))
{var inst_14143 = (state_14246[25]);var inst_14160 = (state_14246[2]);var inst_14161 = cljs.core.next.call(null,inst_14143);var inst_14123 = inst_14161;var inst_14124 = null;var inst_14125 = 0;var inst_14126 = 0;var state_14246__$1 = (function (){var statearr_14305 = state_14246;(statearr_14305[14] = inst_14123);
(statearr_14305[15] = inst_14124);
(statearr_14305[16] = inst_14126);
(statearr_14305[17] = inst_14125);
(statearr_14305[29] = inst_14160);
return statearr_14305;
})();var statearr_14306_14374 = state_14246__$1;(statearr_14306_14374[2] = null);
(statearr_14306_14374[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14247 === 25))
{var inst_14184 = (state_14246[11]);var inst_14185 = (state_14246[13]);var inst_14187 = (inst_14185 < inst_14184);var inst_14188 = inst_14187;var state_14246__$1 = state_14246;if(cljs.core.truth_(inst_14188))
{var statearr_14307_14375 = state_14246__$1;(statearr_14307_14375[1] = 27);
} else
{var statearr_14308_14376 = state_14246__$1;(statearr_14308_14376[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14247 === 26))
{var inst_14174 = (state_14246[19]);var inst_14232 = (state_14246[2]);var inst_14233 = cljs.core.seq.call(null,inst_14174);var state_14246__$1 = (function (){var statearr_14309 = state_14246;(statearr_14309[30] = inst_14232);
return statearr_14309;
})();if(inst_14233)
{var statearr_14310_14377 = state_14246__$1;(statearr_14310_14377[1] = 42);
} else
{var statearr_14311_14378 = state_14246__$1;(statearr_14311_14378[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14247 === 27))
{var inst_14183 = (state_14246[12]);var inst_14185 = (state_14246[13]);var inst_14190 = cljs.core._nth.call(null,inst_14183,inst_14185);var state_14246__$1 = (function (){var statearr_14312 = state_14246;(statearr_14312[7] = inst_14190);
return statearr_14312;
})();var statearr_14313_14379 = state_14246__$1;(statearr_14313_14379[2] = null);
(statearr_14313_14379[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14247 === 28))
{var inst_14182 = (state_14246[10]);var inst_14203 = (state_14246[9]);var inst_14203__$1 = cljs.core.seq.call(null,inst_14182);var state_14246__$1 = (function (){var statearr_14317 = state_14246;(statearr_14317[9] = inst_14203__$1);
return statearr_14317;
})();if(inst_14203__$1)
{var statearr_14318_14380 = state_14246__$1;(statearr_14318_14380[1] = 33);
} else
{var statearr_14319_14381 = state_14246__$1;(statearr_14319_14381[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14247 === 29))
{var inst_14230 = (state_14246[2]);var state_14246__$1 = state_14246;var statearr_14320_14382 = state_14246__$1;(statearr_14320_14382[2] = inst_14230);
(statearr_14320_14382[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14247 === 30))
{var inst_14182 = (state_14246[10]);var inst_14184 = (state_14246[11]);var inst_14183 = (state_14246[12]);var inst_14185 = (state_14246[13]);var inst_14199 = (state_14246[2]);var inst_14200 = (inst_14185 + 1);var tmp14314 = inst_14182;var tmp14315 = inst_14184;var tmp14316 = inst_14183;var inst_14182__$1 = tmp14314;var inst_14183__$1 = tmp14316;var inst_14184__$1 = tmp14315;var inst_14185__$1 = inst_14200;var state_14246__$1 = (function (){var statearr_14321 = state_14246;(statearr_14321[10] = inst_14182__$1);
(statearr_14321[11] = inst_14184__$1);
(statearr_14321[12] = inst_14183__$1);
(statearr_14321[13] = inst_14185__$1);
(statearr_14321[31] = inst_14199);
return statearr_14321;
})();var statearr_14322_14383 = state_14246__$1;(statearr_14322_14383[2] = null);
(statearr_14322_14383[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14247 === 31))
{var inst_14190 = (state_14246[7]);var inst_14191 = (state_14246[2]);var inst_14192 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_14193 = cljs.core.async.untap_STAR_.call(null,m,inst_14190);var state_14246__$1 = (function (){var statearr_14323 = state_14246;(statearr_14323[32] = inst_14191);
(statearr_14323[33] = inst_14192);
return statearr_14323;
})();var statearr_14324_14384 = state_14246__$1;(statearr_14324_14384[2] = inst_14193);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14246__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__5998__auto__){
return (function() {
var state_machine__5999__auto__ = null;
var state_machine__5999__auto____0 = (function (){var statearr_14328 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14328[0] = state_machine__5999__auto__);
(statearr_14328[1] = 1);
return statearr_14328;
});
var state_machine__5999__auto____1 = (function (state_14246){while(true){
var ret_value__6000__auto__ = (function (){try{while(true){
var result__6001__auto__ = switch__5998__auto__.call(null,state_14246);if(cljs.core.keyword_identical_QMARK_.call(null,result__6001__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6001__auto__;
}
break;
}
}catch (e14329){if((e14329 instanceof Object))
{var ex__6002__auto__ = e14329;var statearr_14330_14385 = state_14246;(statearr_14330_14385[5] = ex__6002__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14246);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14329;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6000__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14386 = state_14246;
state_14246 = G__14386;
continue;
}
} else
{return ret_value__6000__auto__;
}
break;
}
});
state_machine__5999__auto__ = function(state_14246){
switch(arguments.length){
case 0:
return state_machine__5999__auto____0.call(this);
case 1:
return state_machine__5999__auto____1.call(this,state_14246);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5999__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5999__auto____0;
state_machine__5999__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5999__auto____1;
return state_machine__5999__auto__;
})()
;})(switch__5998__auto__))
})();var state__6070__auto__ = (function (){var statearr_14331 = f__6069__auto__.call(null);(statearr_14331[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6068__auto___14332);
return statearr_14331;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6070__auto__);
}));
return m;
});
/**
* Copies the mult source onto the supplied channel.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.tap = (function() {
var tap = null;
var tap__2 = (function (mult,ch){return tap.call(null,mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);
return ch;
});
tap = function(mult,ch,close_QMARK_){
switch(arguments.length){
case 2:
return tap__2.call(this,mult,ch);
case 3:
return tap__3.call(this,mult,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tap.cljs$core$IFn$_invoke$arity$2 = tap__2;
tap.cljs$core$IFn$_invoke$arity$3 = tap__3;
return tap;
})()
;
/**
* Disconnects a target channel from a mult
*/
cljs.core.async.untap = (function untap(mult,ch){return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){return cljs.core.async.untap_all_STAR_.call(null,mult);
});
cljs.core.async.Mix = (function (){var obj14388 = {};return obj14388;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__3431__auto__ = m;if(and__3431__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__3431__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__4070__auto__ = (((m == null))?null:m);return (function (){var or__3443__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__3431__auto__ = m;if(and__3431__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__3431__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__4070__auto__ = (((m == null))?null:m);return (function (){var or__3443__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__3431__auto__ = m;if(and__3431__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__3431__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__4070__auto__ = (((m == null))?null:m);return (function (){var or__3443__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__3431__auto__ = m;if(and__3431__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__3431__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__4070__auto__ = (((m == null))?null:m);return (function (){var or__3443__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__3431__auto__ = m;if(and__3431__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__3431__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__4070__auto__ = (((m == null))?null:m);return (function (){var or__3443__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});
/**
* Creates and returns a mix of one or more input channels which will
* be put on the supplied out channel. Input sources can be added to
* the mix with 'admix', and removed with 'unmix'. A mix supports
* soloing, muting and pausing multiple inputs atomically using
* 'toggle', and can solo using either muting or pausing as determined
* by 'solo-mode'.
* 
* Each channel can have zero or more boolean modes set via 'toggle':
* 
* :solo - when true, only this (ond other soloed) channel(s) will appear
* in the mix output channel. :mute and :pause states of soloed
* channels are ignored. If solo-mode is :mute, non-soloed
* channels are muted, if :pause, non-soloed channels are
* paused.
* 
* :mute - muted channels will have their contents consumed but not included in the mix
* :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
*/
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",1120344424),null,new cljs.core.Keyword(null,"mute","mute",1017267595),null], null), null);var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",1017440337));var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1017267595));var change = cljs.core.async.chan.call(null);var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){if(cljs.core.truth_(attr.call(null,v)))
{return cljs.core.conj.call(null,ret,c);
} else
{return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){var chs = cljs.core.deref.call(null,cs);var mode = cljs.core.deref.call(null,solo_mode);var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",1017440337),chs);var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",1120344424),chs);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1123523302),solos,new cljs.core.Keyword(null,"mutes","mutes",1118168300),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1017267595),chs),new cljs.core.Keyword(null,"reads","reads",1122290959),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",1120344424))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t14498 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14498 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta14499){
this.pick = pick;
this.out = out;
this.attrs = attrs;
this.cs = cs;
this.calc_state = calc_state;
this.solo_modes = solo_modes;
this.mix = mix;
this.changed = changed;
this.change = change;
this.solo_mode = solo_mode;
this.meta14499 = meta14499;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14498.cljs$lang$type = true;
cljs.core.async.t14498.cljs$lang$ctorStr = "cljs.core.async/t14498";
cljs.core.async.t14498.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t14498");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14498.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t14498.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14498.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14498.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14498.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14498.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14498.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t14498.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14498.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_14500){var self__ = this;
var _14500__$1 = this;return self__.meta14499;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14498.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_14500,meta14499__$1){var self__ = this;
var _14500__$1 = this;return (new cljs.core.async.t14498(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta14499__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t14498 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t14498(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta14499){return (new cljs.core.async.t14498(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta14499));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t14498(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__6068__auto___14607 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6069__auto__ = (function (){var switch__5998__auto__ = (function (state_14565){var state_val_14566 = (state_14565[1]);if((state_val_14566 === 1))
{var inst_14504 = (state_14565[7]);var inst_14504__$1 = calc_state.call(null);var inst_14505 = cljs.core.seq_QMARK_.call(null,inst_14504__$1);var state_14565__$1 = (function (){var statearr_14567 = state_14565;(statearr_14567[7] = inst_14504__$1);
return statearr_14567;
})();if(inst_14505)
{var statearr_14568_14608 = state_14565__$1;(statearr_14568_14608[1] = 2);
} else
{var statearr_14569_14609 = state_14565__$1;(statearr_14569_14609[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14566 === 2))
{var inst_14504 = (state_14565[7]);var inst_14507 = cljs.core.apply.call(null,cljs.core.hash_map,inst_14504);var state_14565__$1 = state_14565;var statearr_14570_14610 = state_14565__$1;(statearr_14570_14610[2] = inst_14507);
(statearr_14570_14610[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14566 === 3))
{var inst_14504 = (state_14565[7]);var state_14565__$1 = state_14565;var statearr_14571_14611 = state_14565__$1;(statearr_14571_14611[2] = inst_14504);
(statearr_14571_14611[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14566 === 4))
{var inst_14504 = (state_14565[7]);var inst_14510 = (state_14565[2]);var inst_14511 = cljs.core.get.call(null,inst_14510,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_14512 = cljs.core.get.call(null,inst_14510,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_14513 = cljs.core.get.call(null,inst_14510,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_14514 = inst_14504;var state_14565__$1 = (function (){var statearr_14572 = state_14565;(statearr_14572[8] = inst_14514);
(statearr_14572[9] = inst_14513);
(statearr_14572[10] = inst_14512);
(statearr_14572[11] = inst_14511);
return statearr_14572;
})();var statearr_14573_14612 = state_14565__$1;(statearr_14573_14612[2] = null);
(statearr_14573_14612[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14566 === 5))
{var inst_14514 = (state_14565[8]);var inst_14517 = cljs.core.seq_QMARK_.call(null,inst_14514);var state_14565__$1 = state_14565;if(inst_14517)
{var statearr_14574_14613 = state_14565__$1;(statearr_14574_14613[1] = 7);
} else
{var statearr_14575_14614 = state_14565__$1;(statearr_14575_14614[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14566 === 6))
{var inst_14563 = (state_14565[2]);var state_14565__$1 = state_14565;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14565__$1,inst_14563);
} else
{if((state_val_14566 === 7))
{var inst_14514 = (state_14565[8]);var inst_14519 = cljs.core.apply.call(null,cljs.core.hash_map,inst_14514);var state_14565__$1 = state_14565;var statearr_14576_14615 = state_14565__$1;(statearr_14576_14615[2] = inst_14519);
(statearr_14576_14615[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14566 === 8))
{var inst_14514 = (state_14565[8]);var state_14565__$1 = state_14565;var statearr_14577_14616 = state_14565__$1;(statearr_14577_14616[2] = inst_14514);
(statearr_14577_14616[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14566 === 9))
{var inst_14522 = (state_14565[12]);var inst_14522__$1 = (state_14565[2]);var inst_14523 = cljs.core.get.call(null,inst_14522__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_14524 = cljs.core.get.call(null,inst_14522__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_14525 = cljs.core.get.call(null,inst_14522__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_14565__$1 = (function (){var statearr_14578 = state_14565;(statearr_14578[13] = inst_14525);
(statearr_14578[14] = inst_14524);
(statearr_14578[12] = inst_14522__$1);
return statearr_14578;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_14565__$1,10,inst_14523);
} else
{if((state_val_14566 === 10))
{var inst_14530 = (state_14565[15]);var inst_14529 = (state_14565[16]);var inst_14528 = (state_14565[2]);var inst_14529__$1 = cljs.core.nth.call(null,inst_14528,0,null);var inst_14530__$1 = cljs.core.nth.call(null,inst_14528,1,null);var inst_14531 = (inst_14529__$1 == null);var inst_14532 = cljs.core._EQ_.call(null,inst_14530__$1,change);var inst_14533 = (inst_14531) || (inst_14532);var state_14565__$1 = (function (){var statearr_14579 = state_14565;(statearr_14579[15] = inst_14530__$1);
(statearr_14579[16] = inst_14529__$1);
return statearr_14579;
})();if(cljs.core.truth_(inst_14533))
{var statearr_14580_14617 = state_14565__$1;(statearr_14580_14617[1] = 11);
} else
{var statearr_14581_14618 = state_14565__$1;(statearr_14581_14618[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14566 === 11))
{var inst_14529 = (state_14565[16]);var inst_14535 = (inst_14529 == null);var state_14565__$1 = state_14565;if(cljs.core.truth_(inst_14535))
{var statearr_14582_14619 = state_14565__$1;(statearr_14582_14619[1] = 14);
} else
{var statearr_14583_14620 = state_14565__$1;(statearr_14583_14620[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14566 === 12))
{var inst_14525 = (state_14565[13]);var inst_14530 = (state_14565[15]);var inst_14544 = (state_14565[17]);var inst_14544__$1 = inst_14525.call(null,inst_14530);var state_14565__$1 = (function (){var statearr_14584 = state_14565;(statearr_14584[17] = inst_14544__$1);
return statearr_14584;
})();if(cljs.core.truth_(inst_14544__$1))
{var statearr_14585_14621 = state_14565__$1;(statearr_14585_14621[1] = 17);
} else
{var statearr_14586_14622 = state_14565__$1;(statearr_14586_14622[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14566 === 13))
{var inst_14561 = (state_14565[2]);var state_14565__$1 = state_14565;var statearr_14587_14623 = state_14565__$1;(statearr_14587_14623[2] = inst_14561);
(statearr_14587_14623[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14566 === 14))
{var inst_14530 = (state_14565[15]);var inst_14537 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_14530);var state_14565__$1 = state_14565;var statearr_14588_14624 = state_14565__$1;(statearr_14588_14624[2] = inst_14537);
(statearr_14588_14624[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14566 === 15))
{var state_14565__$1 = state_14565;var statearr_14589_14625 = state_14565__$1;(statearr_14589_14625[2] = null);
(statearr_14589_14625[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14566 === 16))
{var inst_14540 = (state_14565[2]);var inst_14541 = calc_state.call(null);var inst_14514 = inst_14541;var state_14565__$1 = (function (){var statearr_14590 = state_14565;(statearr_14590[8] = inst_14514);
(statearr_14590[18] = inst_14540);
return statearr_14590;
})();var statearr_14591_14626 = state_14565__$1;(statearr_14591_14626[2] = null);
(statearr_14591_14626[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14566 === 17))
{var inst_14544 = (state_14565[17]);var state_14565__$1 = state_14565;var statearr_14592_14627 = state_14565__$1;(statearr_14592_14627[2] = inst_14544);
(statearr_14592_14627[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14566 === 18))
{var inst_14525 = (state_14565[13]);var inst_14530 = (state_14565[15]);var inst_14524 = (state_14565[14]);var inst_14547 = cljs.core.empty_QMARK_.call(null,inst_14525);var inst_14548 = inst_14524.call(null,inst_14530);var inst_14549 = cljs.core.not.call(null,inst_14548);var inst_14550 = (inst_14547) && (inst_14549);var state_14565__$1 = state_14565;var statearr_14593_14628 = state_14565__$1;(statearr_14593_14628[2] = inst_14550);
(statearr_14593_14628[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14566 === 19))
{var inst_14552 = (state_14565[2]);var state_14565__$1 = state_14565;if(cljs.core.truth_(inst_14552))
{var statearr_14594_14629 = state_14565__$1;(statearr_14594_14629[1] = 20);
} else
{var statearr_14595_14630 = state_14565__$1;(statearr_14595_14630[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14566 === 20))
{var inst_14529 = (state_14565[16]);var state_14565__$1 = state_14565;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14565__$1,23,out,inst_14529);
} else
{if((state_val_14566 === 21))
{var state_14565__$1 = state_14565;var statearr_14596_14631 = state_14565__$1;(statearr_14596_14631[2] = null);
(statearr_14596_14631[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14566 === 22))
{var inst_14522 = (state_14565[12]);var inst_14558 = (state_14565[2]);var inst_14514 = inst_14522;var state_14565__$1 = (function (){var statearr_14597 = state_14565;(statearr_14597[19] = inst_14558);
(statearr_14597[8] = inst_14514);
return statearr_14597;
})();var statearr_14598_14632 = state_14565__$1;(statearr_14598_14632[2] = null);
(statearr_14598_14632[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14566 === 23))
{var inst_14555 = (state_14565[2]);var state_14565__$1 = state_14565;var statearr_14599_14633 = state_14565__$1;(statearr_14599_14633[2] = inst_14555);
(statearr_14599_14633[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__5998__auto__){
return (function() {
var state_machine__5999__auto__ = null;
var state_machine__5999__auto____0 = (function (){var statearr_14603 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14603[0] = state_machine__5999__auto__);
(statearr_14603[1] = 1);
return statearr_14603;
});
var state_machine__5999__auto____1 = (function (state_14565){while(true){
var ret_value__6000__auto__ = (function (){try{while(true){
var result__6001__auto__ = switch__5998__auto__.call(null,state_14565);if(cljs.core.keyword_identical_QMARK_.call(null,result__6001__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6001__auto__;
}
break;
}
}catch (e14604){if((e14604 instanceof Object))
{var ex__6002__auto__ = e14604;var statearr_14605_14634 = state_14565;(statearr_14605_14634[5] = ex__6002__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14565);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14604;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6000__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14635 = state_14565;
state_14565 = G__14635;
continue;
}
} else
{return ret_value__6000__auto__;
}
break;
}
});
state_machine__5999__auto__ = function(state_14565){
switch(arguments.length){
case 0:
return state_machine__5999__auto____0.call(this);
case 1:
return state_machine__5999__auto____1.call(this,state_14565);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5999__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5999__auto____0;
state_machine__5999__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5999__auto____1;
return state_machine__5999__auto__;
})()
;})(switch__5998__auto__))
})();var state__6070__auto__ = (function (){var statearr_14606 = f__6069__auto__.call(null);(statearr_14606[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6068__auto___14607);
return statearr_14606;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6070__auto__);
}));
return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
* Atomically sets the state(s) of one or more channels in a mix. The
* state map is a map of channels -> channel-state-map. A
* channel-state-map is a map of attrs -> boolean, where attr is one or
* more of :mute, :pause or :solo. Any states supplied are merged with
* the current state.
* 
* Note that channels can be added to a mix via toggle, which can be
* used to add channels in a particular (e.g. paused) state.
*/
cljs.core.async.toggle = (function toggle(mix,state_map){return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});
cljs.core.async.Pub = (function (){var obj14637 = {};return obj14637;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__3431__auto__ = p;if(and__3431__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__3431__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__4070__auto__ = (((p == null))?null:p);return (function (){var or__3443__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__3431__auto__ = p;if(and__3431__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__3431__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__4070__auto__ = (((p == null))?null:p);return (function (){var or__3443__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__3431__auto__ = p;if(and__3431__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__3431__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__4070__auto__ = (((p == null))?null:p);return (function (){var or__3443__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__3431__auto__ = p;if(and__3431__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__3431__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__4070__auto__ = (((p == null))?null:p);return (function (){var or__3443__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});
unsub_all_STAR_ = function(p,v){
switch(arguments.length){
case 1:
return unsub_all_STAR___1.call(this,p);
case 2:
return unsub_all_STAR___2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = unsub_all_STAR___1;
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = unsub_all_STAR___2;
return unsub_all_STAR_;
})()
;
/**
* Creates and returns a pub(lication) of the supplied channel,
* partitioned into topics by the topic-fn. topic-fn will be applied to
* each value on the channel and the result will determine the 'topic'
* on which that value will be put. Channels can be subscribed to
* receive copies of topics using 'sub', and unsubscribed using
* 'unsub'. Each topic will be handled by an internal mult on a
* dedicated channel. By default these internal channels are
* unbuffered, but a buf-fn can be supplied which, given a topic,
* creates a buffer with desired properties.
* 
* Each item is distributed to all subs in parallel and synchronously,
* i.e. each sub must accept before the next item is distributed. Use
* buffering/windowing to prevent slow subs from holding up the pub.
* 
* Items received when there are no matching subs get dropped.
* 
* Note that if buf-fns are used then each topic is handled
* asynchronously, i.e. if a channel is subscribed to more than one
* topic it should not expect them to be interleaved identically with
* the source.
*/
cljs.core.async.pub = (function() {
var pub = null;
var pub__2 = (function (ch,topic_fn){return pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var ensure_mult = ((function (mults){
return (function (topic){var or__3443__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3443__auto__,mults){
return (function (p1__14638_SHARP_){if(cljs.core.truth_(p1__14638_SHARP_.call(null,topic)))
{return p1__14638_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__14638_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3443__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t14763 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14763 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta14764){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta14764 = meta14764;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14763.cljs$lang$type = true;
cljs.core.async.t14763.cljs$lang$ctorStr = "cljs.core.async/t14763";
cljs.core.async.t14763.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t14763");
});})(mults,ensure_mult))
;
cljs.core.async.t14763.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t14763.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t14763.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t14763.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t14763.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t14763.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t14763.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t14763.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_14765){var self__ = this;
var _14765__$1 = this;return self__.meta14764;
});})(mults,ensure_mult))
;
cljs.core.async.t14763.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_14765,meta14764__$1){var self__ = this;
var _14765__$1 = this;return (new cljs.core.async.t14763(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta14764__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t14763 = ((function (mults,ensure_mult){
return (function __GT_t14763(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta14764){return (new cljs.core.async.t14763(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta14764));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t14763(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__6068__auto___14887 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6069__auto__ = (function (){var switch__5998__auto__ = (function (state_14839){var state_val_14840 = (state_14839[1]);if((state_val_14840 === 1))
{var state_14839__$1 = state_14839;var statearr_14841_14888 = state_14839__$1;(statearr_14841_14888[2] = null);
(statearr_14841_14888[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14840 === 2))
{var state_14839__$1 = state_14839;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14839__$1,4,ch);
} else
{if((state_val_14840 === 3))
{var inst_14837 = (state_14839[2]);var state_14839__$1 = state_14839;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14839__$1,inst_14837);
} else
{if((state_val_14840 === 4))
{var inst_14768 = (state_14839[7]);var inst_14768__$1 = (state_14839[2]);var inst_14769 = (inst_14768__$1 == null);var state_14839__$1 = (function (){var statearr_14842 = state_14839;(statearr_14842[7] = inst_14768__$1);
return statearr_14842;
})();if(cljs.core.truth_(inst_14769))
{var statearr_14843_14889 = state_14839__$1;(statearr_14843_14889[1] = 5);
} else
{var statearr_14844_14890 = state_14839__$1;(statearr_14844_14890[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14840 === 5))
{var inst_14775 = cljs.core.deref.call(null,mults);var inst_14776 = cljs.core.vals.call(null,inst_14775);var inst_14777 = cljs.core.seq.call(null,inst_14776);var inst_14778 = inst_14777;var inst_14779 = null;var inst_14780 = 0;var inst_14781 = 0;var state_14839__$1 = (function (){var statearr_14845 = state_14839;(statearr_14845[8] = inst_14781);
(statearr_14845[9] = inst_14780);
(statearr_14845[10] = inst_14778);
(statearr_14845[11] = inst_14779);
return statearr_14845;
})();var statearr_14846_14891 = state_14839__$1;(statearr_14846_14891[2] = null);
(statearr_14846_14891[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14840 === 6))
{var inst_14816 = (state_14839[12]);var inst_14818 = (state_14839[13]);var inst_14768 = (state_14839[7]);var inst_14816__$1 = topic_fn.call(null,inst_14768);var inst_14817 = cljs.core.deref.call(null,mults);var inst_14818__$1 = cljs.core.get.call(null,inst_14817,inst_14816__$1);var state_14839__$1 = (function (){var statearr_14847 = state_14839;(statearr_14847[12] = inst_14816__$1);
(statearr_14847[13] = inst_14818__$1);
return statearr_14847;
})();if(cljs.core.truth_(inst_14818__$1))
{var statearr_14848_14892 = state_14839__$1;(statearr_14848_14892[1] = 19);
} else
{var statearr_14849_14893 = state_14839__$1;(statearr_14849_14893[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14840 === 7))
{var inst_14835 = (state_14839[2]);var state_14839__$1 = state_14839;var statearr_14850_14894 = state_14839__$1;(statearr_14850_14894[2] = inst_14835);
(statearr_14850_14894[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14840 === 8))
{var inst_14781 = (state_14839[8]);var inst_14780 = (state_14839[9]);var inst_14783 = (inst_14781 < inst_14780);var inst_14784 = inst_14783;var state_14839__$1 = state_14839;if(cljs.core.truth_(inst_14784))
{var statearr_14854_14895 = state_14839__$1;(statearr_14854_14895[1] = 10);
} else
{var statearr_14855_14896 = state_14839__$1;(statearr_14855_14896[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14840 === 9))
{var inst_14814 = (state_14839[2]);var state_14839__$1 = state_14839;var statearr_14856_14897 = state_14839__$1;(statearr_14856_14897[2] = inst_14814);
(statearr_14856_14897[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14840 === 10))
{var inst_14781 = (state_14839[8]);var inst_14780 = (state_14839[9]);var inst_14778 = (state_14839[10]);var inst_14779 = (state_14839[11]);var inst_14786 = cljs.core._nth.call(null,inst_14779,inst_14781);var inst_14787 = cljs.core.async.muxch_STAR_.call(null,inst_14786);var inst_14788 = cljs.core.async.close_BANG_.call(null,inst_14787);var inst_14789 = (inst_14781 + 1);var tmp14851 = inst_14780;var tmp14852 = inst_14778;var tmp14853 = inst_14779;var inst_14778__$1 = tmp14852;var inst_14779__$1 = tmp14853;var inst_14780__$1 = tmp14851;var inst_14781__$1 = inst_14789;var state_14839__$1 = (function (){var statearr_14857 = state_14839;(statearr_14857[8] = inst_14781__$1);
(statearr_14857[9] = inst_14780__$1);
(statearr_14857[14] = inst_14788);
(statearr_14857[10] = inst_14778__$1);
(statearr_14857[11] = inst_14779__$1);
return statearr_14857;
})();var statearr_14858_14898 = state_14839__$1;(statearr_14858_14898[2] = null);
(statearr_14858_14898[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14840 === 11))
{var inst_14792 = (state_14839[15]);var inst_14778 = (state_14839[10]);var inst_14792__$1 = cljs.core.seq.call(null,inst_14778);var state_14839__$1 = (function (){var statearr_14859 = state_14839;(statearr_14859[15] = inst_14792__$1);
return statearr_14859;
})();if(inst_14792__$1)
{var statearr_14860_14899 = state_14839__$1;(statearr_14860_14899[1] = 13);
} else
{var statearr_14861_14900 = state_14839__$1;(statearr_14861_14900[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14840 === 12))
{var inst_14812 = (state_14839[2]);var state_14839__$1 = state_14839;var statearr_14862_14901 = state_14839__$1;(statearr_14862_14901[2] = inst_14812);
(statearr_14862_14901[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14840 === 13))
{var inst_14792 = (state_14839[15]);var inst_14794 = cljs.core.chunked_seq_QMARK_.call(null,inst_14792);var state_14839__$1 = state_14839;if(inst_14794)
{var statearr_14863_14902 = state_14839__$1;(statearr_14863_14902[1] = 16);
} else
{var statearr_14864_14903 = state_14839__$1;(statearr_14864_14903[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14840 === 14))
{var state_14839__$1 = state_14839;var statearr_14865_14904 = state_14839__$1;(statearr_14865_14904[2] = null);
(statearr_14865_14904[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14840 === 15))
{var inst_14810 = (state_14839[2]);var state_14839__$1 = state_14839;var statearr_14866_14905 = state_14839__$1;(statearr_14866_14905[2] = inst_14810);
(statearr_14866_14905[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14840 === 16))
{var inst_14792 = (state_14839[15]);var inst_14796 = cljs.core.chunk_first.call(null,inst_14792);var inst_14797 = cljs.core.chunk_rest.call(null,inst_14792);var inst_14798 = cljs.core.count.call(null,inst_14796);var inst_14778 = inst_14797;var inst_14779 = inst_14796;var inst_14780 = inst_14798;var inst_14781 = 0;var state_14839__$1 = (function (){var statearr_14867 = state_14839;(statearr_14867[8] = inst_14781);
(statearr_14867[9] = inst_14780);
(statearr_14867[10] = inst_14778);
(statearr_14867[11] = inst_14779);
return statearr_14867;
})();var statearr_14868_14906 = state_14839__$1;(statearr_14868_14906[2] = null);
(statearr_14868_14906[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14840 === 17))
{var inst_14792 = (state_14839[15]);var inst_14801 = cljs.core.first.call(null,inst_14792);var inst_14802 = cljs.core.async.muxch_STAR_.call(null,inst_14801);var inst_14803 = cljs.core.async.close_BANG_.call(null,inst_14802);var inst_14804 = cljs.core.next.call(null,inst_14792);var inst_14778 = inst_14804;var inst_14779 = null;var inst_14780 = 0;var inst_14781 = 0;var state_14839__$1 = (function (){var statearr_14869 = state_14839;(statearr_14869[16] = inst_14803);
(statearr_14869[8] = inst_14781);
(statearr_14869[9] = inst_14780);
(statearr_14869[10] = inst_14778);
(statearr_14869[11] = inst_14779);
return statearr_14869;
})();var statearr_14870_14907 = state_14839__$1;(statearr_14870_14907[2] = null);
(statearr_14870_14907[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14840 === 18))
{var inst_14807 = (state_14839[2]);var state_14839__$1 = state_14839;var statearr_14871_14908 = state_14839__$1;(statearr_14871_14908[2] = inst_14807);
(statearr_14871_14908[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14840 === 19))
{var state_14839__$1 = state_14839;var statearr_14872_14909 = state_14839__$1;(statearr_14872_14909[2] = null);
(statearr_14872_14909[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14840 === 20))
{var state_14839__$1 = state_14839;var statearr_14873_14910 = state_14839__$1;(statearr_14873_14910[2] = null);
(statearr_14873_14910[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14840 === 21))
{var inst_14832 = (state_14839[2]);var state_14839__$1 = (function (){var statearr_14874 = state_14839;(statearr_14874[17] = inst_14832);
return statearr_14874;
})();var statearr_14875_14911 = state_14839__$1;(statearr_14875_14911[2] = null);
(statearr_14875_14911[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14840 === 22))
{var inst_14829 = (state_14839[2]);var state_14839__$1 = state_14839;var statearr_14876_14912 = state_14839__$1;(statearr_14876_14912[2] = inst_14829);
(statearr_14876_14912[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14840 === 23))
{var inst_14816 = (state_14839[12]);var inst_14820 = (state_14839[2]);var inst_14821 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_14816);var state_14839__$1 = (function (){var statearr_14877 = state_14839;(statearr_14877[18] = inst_14820);
return statearr_14877;
})();var statearr_14878_14913 = state_14839__$1;(statearr_14878_14913[2] = inst_14821);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14839__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14840 === 24))
{var inst_14818 = (state_14839[13]);var inst_14768 = (state_14839[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_14839,23,Object,null,22);var inst_14825 = cljs.core.async.muxch_STAR_.call(null,inst_14818);var state_14839__$1 = state_14839;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14839__$1,25,inst_14825,inst_14768);
} else
{if((state_val_14840 === 25))
{var inst_14827 = (state_14839[2]);var state_14839__$1 = state_14839;var statearr_14879_14914 = state_14839__$1;(statearr_14879_14914[2] = inst_14827);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14839__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__5998__auto__){
return (function() {
var state_machine__5999__auto__ = null;
var state_machine__5999__auto____0 = (function (){var statearr_14883 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14883[0] = state_machine__5999__auto__);
(statearr_14883[1] = 1);
return statearr_14883;
});
var state_machine__5999__auto____1 = (function (state_14839){while(true){
var ret_value__6000__auto__ = (function (){try{while(true){
var result__6001__auto__ = switch__5998__auto__.call(null,state_14839);if(cljs.core.keyword_identical_QMARK_.call(null,result__6001__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6001__auto__;
}
break;
}
}catch (e14884){if((e14884 instanceof Object))
{var ex__6002__auto__ = e14884;var statearr_14885_14915 = state_14839;(statearr_14885_14915[5] = ex__6002__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14839);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14884;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6000__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14916 = state_14839;
state_14839 = G__14916;
continue;
}
} else
{return ret_value__6000__auto__;
}
break;
}
});
state_machine__5999__auto__ = function(state_14839){
switch(arguments.length){
case 0:
return state_machine__5999__auto____0.call(this);
case 1:
return state_machine__5999__auto____1.call(this,state_14839);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5999__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5999__auto____0;
state_machine__5999__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5999__auto____1;
return state_machine__5999__auto__;
})()
;})(switch__5998__auto__))
})();var state__6070__auto__ = (function (){var statearr_14886 = f__6069__auto__.call(null);(statearr_14886[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6068__auto___14887);
return statearr_14886;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6070__auto__);
}));
return p;
});
pub = function(ch,topic_fn,buf_fn){
switch(arguments.length){
case 2:
return pub__2.call(this,ch,topic_fn);
case 3:
return pub__3.call(this,ch,topic_fn,buf_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pub.cljs$core$IFn$_invoke$arity$2 = pub__2;
pub.cljs$core$IFn$_invoke$arity$3 = pub__3;
return pub;
})()
;
/**
* Subscribes a channel to a topic of a pub.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.sub = (function() {
var sub = null;
var sub__3 = (function (p,topic,ch){return sub.call(null,p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});
sub = function(p,topic,ch,close_QMARK_){
switch(arguments.length){
case 3:
return sub__3.call(this,p,topic,ch);
case 4:
return sub__4.call(this,p,topic,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub.cljs$core$IFn$_invoke$arity$3 = sub__3;
sub.cljs$core$IFn$_invoke$arity$4 = sub__4;
return sub;
})()
;
/**
* Unsubscribes a channel from a topic of a pub
*/
cljs.core.async.unsub = (function unsub(p,topic,ch){return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){return cljs.core.async.unsub_all_STAR_.call(null,p);
});
var unsub_all__2 = (function (p,topic){return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});
unsub_all = function(p,topic){
switch(arguments.length){
case 1:
return unsub_all__1.call(this,p);
case 2:
return unsub_all__2.call(this,p,topic);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all.cljs$core$IFn$_invoke$arity$1 = unsub_all__1;
unsub_all.cljs$core$IFn$_invoke$arity$2 = unsub_all__2;
return unsub_all;
})()
;
/**
* Takes a function and a collection of source channels, and returns a
* channel which contains the values produced by applying f to the set
* of first items taken from each source channel, followed by applying
* f to the set of second items from each channel, until any one of the
* channels is closed, at which point the output channel will be
* closed. The returned channel will be unbuffered by default, or a
* buf-or-n can be supplied
*/
cljs.core.async.map = (function() {
var map = null;
var map__2 = (function (f,chs){return map.call(null,f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){var chs__$1 = cljs.core.vec.call(null,chs);var out = cljs.core.async.chan.call(null,buf_or_n);var cnt = cljs.core.count.call(null,chs__$1);var rets = cljs.core.object_array.call(null,cnt);var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){(rets[i] = ret);
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,rets.slice(0));
} else
{return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));var c__6068__auto___15053 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6069__auto__ = (function (){var switch__5998__auto__ = (function (state_15023){var state_val_15024 = (state_15023[1]);if((state_val_15024 === 1))
{var state_15023__$1 = state_15023;var statearr_15025_15054 = state_15023__$1;(statearr_15025_15054[2] = null);
(statearr_15025_15054[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15024 === 2))
{var inst_14986 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_14987 = 0;var state_15023__$1 = (function (){var statearr_15026 = state_15023;(statearr_15026[7] = inst_14987);
(statearr_15026[8] = inst_14986);
return statearr_15026;
})();var statearr_15027_15055 = state_15023__$1;(statearr_15027_15055[2] = null);
(statearr_15027_15055[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15024 === 3))
{var inst_15021 = (state_15023[2]);var state_15023__$1 = state_15023;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15023__$1,inst_15021);
} else
{if((state_val_15024 === 4))
{var inst_14987 = (state_15023[7]);var inst_14989 = (inst_14987 < cnt);var state_15023__$1 = state_15023;if(cljs.core.truth_(inst_14989))
{var statearr_15028_15056 = state_15023__$1;(statearr_15028_15056[1] = 6);
} else
{var statearr_15029_15057 = state_15023__$1;(statearr_15029_15057[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15024 === 5))
{var inst_15007 = (state_15023[2]);var state_15023__$1 = (function (){var statearr_15030 = state_15023;(statearr_15030[9] = inst_15007);
return statearr_15030;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15023__$1,12,dchan);
} else
{if((state_val_15024 === 6))
{var state_15023__$1 = state_15023;var statearr_15031_15058 = state_15023__$1;(statearr_15031_15058[2] = null);
(statearr_15031_15058[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15024 === 7))
{var state_15023__$1 = state_15023;var statearr_15032_15059 = state_15023__$1;(statearr_15032_15059[2] = null);
(statearr_15032_15059[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15024 === 8))
{var inst_15005 = (state_15023[2]);var state_15023__$1 = state_15023;var statearr_15033_15060 = state_15023__$1;(statearr_15033_15060[2] = inst_15005);
(statearr_15033_15060[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15024 === 9))
{var inst_14987 = (state_15023[7]);var inst_15000 = (state_15023[2]);var inst_15001 = (inst_14987 + 1);var inst_14987__$1 = inst_15001;var state_15023__$1 = (function (){var statearr_15034 = state_15023;(statearr_15034[7] = inst_14987__$1);
(statearr_15034[10] = inst_15000);
return statearr_15034;
})();var statearr_15035_15061 = state_15023__$1;(statearr_15035_15061[2] = null);
(statearr_15035_15061[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15024 === 10))
{var inst_14991 = (state_15023[2]);var inst_14992 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_15023__$1 = (function (){var statearr_15036 = state_15023;(statearr_15036[11] = inst_14991);
return statearr_15036;
})();var statearr_15037_15062 = state_15023__$1;(statearr_15037_15062[2] = inst_14992);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15023__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15024 === 11))
{var inst_14987 = (state_15023[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_15023,10,Object,null,9);var inst_14996 = chs__$1.call(null,inst_14987);var inst_14997 = done.call(null,inst_14987);var inst_14998 = cljs.core.async.take_BANG_.call(null,inst_14996,inst_14997);var state_15023__$1 = state_15023;var statearr_15038_15063 = state_15023__$1;(statearr_15038_15063[2] = inst_14998);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15023__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15024 === 12))
{var inst_15009 = (state_15023[12]);var inst_15009__$1 = (state_15023[2]);var inst_15010 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_15009__$1);var state_15023__$1 = (function (){var statearr_15039 = state_15023;(statearr_15039[12] = inst_15009__$1);
return statearr_15039;
})();if(cljs.core.truth_(inst_15010))
{var statearr_15040_15064 = state_15023__$1;(statearr_15040_15064[1] = 13);
} else
{var statearr_15041_15065 = state_15023__$1;(statearr_15041_15065[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15024 === 13))
{var inst_15012 = cljs.core.async.close_BANG_.call(null,out);var state_15023__$1 = state_15023;var statearr_15042_15066 = state_15023__$1;(statearr_15042_15066[2] = inst_15012);
(statearr_15042_15066[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15024 === 14))
{var inst_15009 = (state_15023[12]);var inst_15014 = cljs.core.apply.call(null,f,inst_15009);var state_15023__$1 = state_15023;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15023__$1,16,out,inst_15014);
} else
{if((state_val_15024 === 15))
{var inst_15019 = (state_15023[2]);var state_15023__$1 = state_15023;var statearr_15043_15067 = state_15023__$1;(statearr_15043_15067[2] = inst_15019);
(statearr_15043_15067[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15024 === 16))
{var inst_15016 = (state_15023[2]);var state_15023__$1 = (function (){var statearr_15044 = state_15023;(statearr_15044[13] = inst_15016);
return statearr_15044;
})();var statearr_15045_15068 = state_15023__$1;(statearr_15045_15068[2] = null);
(statearr_15045_15068[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__5998__auto__){
return (function() {
var state_machine__5999__auto__ = null;
var state_machine__5999__auto____0 = (function (){var statearr_15049 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15049[0] = state_machine__5999__auto__);
(statearr_15049[1] = 1);
return statearr_15049;
});
var state_machine__5999__auto____1 = (function (state_15023){while(true){
var ret_value__6000__auto__ = (function (){try{while(true){
var result__6001__auto__ = switch__5998__auto__.call(null,state_15023);if(cljs.core.keyword_identical_QMARK_.call(null,result__6001__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6001__auto__;
}
break;
}
}catch (e15050){if((e15050 instanceof Object))
{var ex__6002__auto__ = e15050;var statearr_15051_15069 = state_15023;(statearr_15051_15069[5] = ex__6002__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15023);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15050;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6000__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15070 = state_15023;
state_15023 = G__15070;
continue;
}
} else
{return ret_value__6000__auto__;
}
break;
}
});
state_machine__5999__auto__ = function(state_15023){
switch(arguments.length){
case 0:
return state_machine__5999__auto____0.call(this);
case 1:
return state_machine__5999__auto____1.call(this,state_15023);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5999__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5999__auto____0;
state_machine__5999__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5999__auto____1;
return state_machine__5999__auto__;
})()
;})(switch__5998__auto__))
})();var state__6070__auto__ = (function (){var statearr_15052 = f__6069__auto__.call(null);(statearr_15052[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6068__auto___15053);
return statearr_15052;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6070__auto__);
}));
return out;
});
map = function(f,chs,buf_or_n){
switch(arguments.length){
case 2:
return map__2.call(this,f,chs);
case 3:
return map__3.call(this,f,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$core$IFn$_invoke$arity$2 = map__2;
map.cljs$core$IFn$_invoke$arity$3 = map__3;
return map;
})()
;
/**
* Takes a collection of source channels and returns a channel which
* contains all values taken from them. The returned channel will be
* unbuffered by default, or a buf-or-n can be supplied. The channel
* will close after all the source channels have closed.
*/
cljs.core.async.merge = (function() {
var merge = null;
var merge__1 = (function (chs){return merge.call(null,chs,null);
});
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6068__auto___15178 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6069__auto__ = (function (){var switch__5998__auto__ = (function (state_15154){var state_val_15155 = (state_15154[1]);if((state_val_15155 === 1))
{var inst_15125 = cljs.core.vec.call(null,chs);var inst_15126 = inst_15125;var state_15154__$1 = (function (){var statearr_15156 = state_15154;(statearr_15156[7] = inst_15126);
return statearr_15156;
})();var statearr_15157_15179 = state_15154__$1;(statearr_15157_15179[2] = null);
(statearr_15157_15179[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15155 === 2))
{var inst_15126 = (state_15154[7]);var inst_15128 = cljs.core.count.call(null,inst_15126);var inst_15129 = (inst_15128 > 0);var state_15154__$1 = state_15154;if(cljs.core.truth_(inst_15129))
{var statearr_15158_15180 = state_15154__$1;(statearr_15158_15180[1] = 4);
} else
{var statearr_15159_15181 = state_15154__$1;(statearr_15159_15181[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15155 === 3))
{var inst_15152 = (state_15154[2]);var state_15154__$1 = state_15154;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15154__$1,inst_15152);
} else
{if((state_val_15155 === 4))
{var inst_15126 = (state_15154[7]);var state_15154__$1 = state_15154;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_15154__$1,7,inst_15126);
} else
{if((state_val_15155 === 5))
{var inst_15148 = cljs.core.async.close_BANG_.call(null,out);var state_15154__$1 = state_15154;var statearr_15160_15182 = state_15154__$1;(statearr_15160_15182[2] = inst_15148);
(statearr_15160_15182[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15155 === 6))
{var inst_15150 = (state_15154[2]);var state_15154__$1 = state_15154;var statearr_15161_15183 = state_15154__$1;(statearr_15161_15183[2] = inst_15150);
(statearr_15161_15183[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15155 === 7))
{var inst_15133 = (state_15154[8]);var inst_15134 = (state_15154[9]);var inst_15133__$1 = (state_15154[2]);var inst_15134__$1 = cljs.core.nth.call(null,inst_15133__$1,0,null);var inst_15135 = cljs.core.nth.call(null,inst_15133__$1,1,null);var inst_15136 = (inst_15134__$1 == null);var state_15154__$1 = (function (){var statearr_15162 = state_15154;(statearr_15162[10] = inst_15135);
(statearr_15162[8] = inst_15133__$1);
(statearr_15162[9] = inst_15134__$1);
return statearr_15162;
})();if(cljs.core.truth_(inst_15136))
{var statearr_15163_15184 = state_15154__$1;(statearr_15163_15184[1] = 8);
} else
{var statearr_15164_15185 = state_15154__$1;(statearr_15164_15185[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15155 === 8))
{var inst_15135 = (state_15154[10]);var inst_15133 = (state_15154[8]);var inst_15134 = (state_15154[9]);var inst_15126 = (state_15154[7]);var inst_15138 = (function (){var c = inst_15135;var v = inst_15134;var vec__15131 = inst_15133;var cs = inst_15126;return ((function (c,v,vec__15131,cs,inst_15135,inst_15133,inst_15134,inst_15126,state_val_15155){
return (function (p1__15071_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__15071_SHARP_);
});
;})(c,v,vec__15131,cs,inst_15135,inst_15133,inst_15134,inst_15126,state_val_15155))
})();var inst_15139 = cljs.core.filterv.call(null,inst_15138,inst_15126);var inst_15126__$1 = inst_15139;var state_15154__$1 = (function (){var statearr_15165 = state_15154;(statearr_15165[7] = inst_15126__$1);
return statearr_15165;
})();var statearr_15166_15186 = state_15154__$1;(statearr_15166_15186[2] = null);
(statearr_15166_15186[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15155 === 9))
{var inst_15134 = (state_15154[9]);var state_15154__$1 = state_15154;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15154__$1,11,out,inst_15134);
} else
{if((state_val_15155 === 10))
{var inst_15146 = (state_15154[2]);var state_15154__$1 = state_15154;var statearr_15168_15187 = state_15154__$1;(statearr_15168_15187[2] = inst_15146);
(statearr_15168_15187[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15155 === 11))
{var inst_15126 = (state_15154[7]);var inst_15143 = (state_15154[2]);var tmp15167 = inst_15126;var inst_15126__$1 = tmp15167;var state_15154__$1 = (function (){var statearr_15169 = state_15154;(statearr_15169[11] = inst_15143);
(statearr_15169[7] = inst_15126__$1);
return statearr_15169;
})();var statearr_15170_15188 = state_15154__$1;(statearr_15170_15188[2] = null);
(statearr_15170_15188[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__5998__auto__){
return (function() {
var state_machine__5999__auto__ = null;
var state_machine__5999__auto____0 = (function (){var statearr_15174 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15174[0] = state_machine__5999__auto__);
(statearr_15174[1] = 1);
return statearr_15174;
});
var state_machine__5999__auto____1 = (function (state_15154){while(true){
var ret_value__6000__auto__ = (function (){try{while(true){
var result__6001__auto__ = switch__5998__auto__.call(null,state_15154);if(cljs.core.keyword_identical_QMARK_.call(null,result__6001__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6001__auto__;
}
break;
}
}catch (e15175){if((e15175 instanceof Object))
{var ex__6002__auto__ = e15175;var statearr_15176_15189 = state_15154;(statearr_15176_15189[5] = ex__6002__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15154);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15175;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6000__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15190 = state_15154;
state_15154 = G__15190;
continue;
}
} else
{return ret_value__6000__auto__;
}
break;
}
});
state_machine__5999__auto__ = function(state_15154){
switch(arguments.length){
case 0:
return state_machine__5999__auto____0.call(this);
case 1:
return state_machine__5999__auto____1.call(this,state_15154);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5999__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5999__auto____0;
state_machine__5999__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5999__auto____1;
return state_machine__5999__auto__;
})()
;})(switch__5998__auto__))
})();var state__6070__auto__ = (function (){var statearr_15177 = f__6069__auto__.call(null);(statearr_15177[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6068__auto___15178);
return statearr_15177;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6070__auto__);
}));
return out;
});
merge = function(chs,buf_or_n){
switch(arguments.length){
case 1:
return merge__1.call(this,chs);
case 2:
return merge__2.call(this,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge.cljs$core$IFn$_invoke$arity$1 = merge__1;
merge.cljs$core$IFn$_invoke$arity$2 = merge__2;
return merge;
})()
;
/**
* Returns a channel containing the single (collection) result of the
* items taken from the channel conjoined to the supplied
* collection. ch must close before into produces a result.
*/
cljs.core.async.into = (function into(coll,ch){return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
* Returns a channel that will return, at most, n items from ch. After n items
* have been returned, or ch has been closed, the return chanel will close.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.take = (function() {
var take = null;
var take__2 = (function (n,ch){return take.call(null,n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6068__auto___15283 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6069__auto__ = (function (){var switch__5998__auto__ = (function (state_15260){var state_val_15261 = (state_15260[1]);if((state_val_15261 === 1))
{var inst_15237 = 0;var state_15260__$1 = (function (){var statearr_15262 = state_15260;(statearr_15262[7] = inst_15237);
return statearr_15262;
})();var statearr_15263_15284 = state_15260__$1;(statearr_15263_15284[2] = null);
(statearr_15263_15284[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15261 === 2))
{var inst_15237 = (state_15260[7]);var inst_15239 = (inst_15237 < n);var state_15260__$1 = state_15260;if(cljs.core.truth_(inst_15239))
{var statearr_15264_15285 = state_15260__$1;(statearr_15264_15285[1] = 4);
} else
{var statearr_15265_15286 = state_15260__$1;(statearr_15265_15286[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15261 === 3))
{var inst_15257 = (state_15260[2]);var inst_15258 = cljs.core.async.close_BANG_.call(null,out);var state_15260__$1 = (function (){var statearr_15266 = state_15260;(statearr_15266[8] = inst_15257);
return statearr_15266;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15260__$1,inst_15258);
} else
{if((state_val_15261 === 4))
{var state_15260__$1 = state_15260;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15260__$1,7,ch);
} else
{if((state_val_15261 === 5))
{var state_15260__$1 = state_15260;var statearr_15267_15287 = state_15260__$1;(statearr_15267_15287[2] = null);
(statearr_15267_15287[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15261 === 6))
{var inst_15255 = (state_15260[2]);var state_15260__$1 = state_15260;var statearr_15268_15288 = state_15260__$1;(statearr_15268_15288[2] = inst_15255);
(statearr_15268_15288[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15261 === 7))
{var inst_15242 = (state_15260[9]);var inst_15242__$1 = (state_15260[2]);var inst_15243 = (inst_15242__$1 == null);var inst_15244 = cljs.core.not.call(null,inst_15243);var state_15260__$1 = (function (){var statearr_15269 = state_15260;(statearr_15269[9] = inst_15242__$1);
return statearr_15269;
})();if(inst_15244)
{var statearr_15270_15289 = state_15260__$1;(statearr_15270_15289[1] = 8);
} else
{var statearr_15271_15290 = state_15260__$1;(statearr_15271_15290[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15261 === 8))
{var inst_15242 = (state_15260[9]);var state_15260__$1 = state_15260;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15260__$1,11,out,inst_15242);
} else
{if((state_val_15261 === 9))
{var state_15260__$1 = state_15260;var statearr_15272_15291 = state_15260__$1;(statearr_15272_15291[2] = null);
(statearr_15272_15291[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15261 === 10))
{var inst_15252 = (state_15260[2]);var state_15260__$1 = state_15260;var statearr_15273_15292 = state_15260__$1;(statearr_15273_15292[2] = inst_15252);
(statearr_15273_15292[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15261 === 11))
{var inst_15237 = (state_15260[7]);var inst_15247 = (state_15260[2]);var inst_15248 = (inst_15237 + 1);var inst_15237__$1 = inst_15248;var state_15260__$1 = (function (){var statearr_15274 = state_15260;(statearr_15274[10] = inst_15247);
(statearr_15274[7] = inst_15237__$1);
return statearr_15274;
})();var statearr_15275_15293 = state_15260__$1;(statearr_15275_15293[2] = null);
(statearr_15275_15293[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__5998__auto__){
return (function() {
var state_machine__5999__auto__ = null;
var state_machine__5999__auto____0 = (function (){var statearr_15279 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_15279[0] = state_machine__5999__auto__);
(statearr_15279[1] = 1);
return statearr_15279;
});
var state_machine__5999__auto____1 = (function (state_15260){while(true){
var ret_value__6000__auto__ = (function (){try{while(true){
var result__6001__auto__ = switch__5998__auto__.call(null,state_15260);if(cljs.core.keyword_identical_QMARK_.call(null,result__6001__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6001__auto__;
}
break;
}
}catch (e15280){if((e15280 instanceof Object))
{var ex__6002__auto__ = e15280;var statearr_15281_15294 = state_15260;(statearr_15281_15294[5] = ex__6002__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15260);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15280;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6000__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15295 = state_15260;
state_15260 = G__15295;
continue;
}
} else
{return ret_value__6000__auto__;
}
break;
}
});
state_machine__5999__auto__ = function(state_15260){
switch(arguments.length){
case 0:
return state_machine__5999__auto____0.call(this);
case 1:
return state_machine__5999__auto____1.call(this,state_15260);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5999__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5999__auto____0;
state_machine__5999__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5999__auto____1;
return state_machine__5999__auto__;
})()
;})(switch__5998__auto__))
})();var state__6070__auto__ = (function (){var statearr_15282 = f__6069__auto__.call(null);(statearr_15282[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6068__auto___15283);
return statearr_15282;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6070__auto__);
}));
return out;
});
take = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return take__2.call(this,n,ch);
case 3:
return take__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take.cljs$core$IFn$_invoke$arity$2 = take__2;
take.cljs$core$IFn$_invoke$arity$3 = take__3;
return take;
})()
;
/**
* Returns a channel that will contain values from ch. Consecutive duplicate
* values will be dropped.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.unique = (function() {
var unique = null;
var unique__1 = (function (ch){return unique.call(null,ch,null);
});
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6068__auto___15392 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6069__auto__ = (function (){var switch__5998__auto__ = (function (state_15367){var state_val_15368 = (state_15367[1]);if((state_val_15368 === 1))
{var inst_15344 = null;var state_15367__$1 = (function (){var statearr_15369 = state_15367;(statearr_15369[7] = inst_15344);
return statearr_15369;
})();var statearr_15370_15393 = state_15367__$1;(statearr_15370_15393[2] = null);
(statearr_15370_15393[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15368 === 2))
{var state_15367__$1 = state_15367;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15367__$1,4,ch);
} else
{if((state_val_15368 === 3))
{var inst_15364 = (state_15367[2]);var inst_15365 = cljs.core.async.close_BANG_.call(null,out);var state_15367__$1 = (function (){var statearr_15371 = state_15367;(statearr_15371[8] = inst_15364);
return statearr_15371;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15367__$1,inst_15365);
} else
{if((state_val_15368 === 4))
{var inst_15347 = (state_15367[9]);var inst_15347__$1 = (state_15367[2]);var inst_15348 = (inst_15347__$1 == null);var inst_15349 = cljs.core.not.call(null,inst_15348);var state_15367__$1 = (function (){var statearr_15372 = state_15367;(statearr_15372[9] = inst_15347__$1);
return statearr_15372;
})();if(inst_15349)
{var statearr_15373_15394 = state_15367__$1;(statearr_15373_15394[1] = 5);
} else
{var statearr_15374_15395 = state_15367__$1;(statearr_15374_15395[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15368 === 5))
{var inst_15347 = (state_15367[9]);var inst_15344 = (state_15367[7]);var inst_15351 = cljs.core._EQ_.call(null,inst_15347,inst_15344);var state_15367__$1 = state_15367;if(inst_15351)
{var statearr_15375_15396 = state_15367__$1;(statearr_15375_15396[1] = 8);
} else
{var statearr_15376_15397 = state_15367__$1;(statearr_15376_15397[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15368 === 6))
{var state_15367__$1 = state_15367;var statearr_15378_15398 = state_15367__$1;(statearr_15378_15398[2] = null);
(statearr_15378_15398[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15368 === 7))
{var inst_15362 = (state_15367[2]);var state_15367__$1 = state_15367;var statearr_15379_15399 = state_15367__$1;(statearr_15379_15399[2] = inst_15362);
(statearr_15379_15399[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15368 === 8))
{var inst_15344 = (state_15367[7]);var tmp15377 = inst_15344;var inst_15344__$1 = tmp15377;var state_15367__$1 = (function (){var statearr_15380 = state_15367;(statearr_15380[7] = inst_15344__$1);
return statearr_15380;
})();var statearr_15381_15400 = state_15367__$1;(statearr_15381_15400[2] = null);
(statearr_15381_15400[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15368 === 9))
{var inst_15347 = (state_15367[9]);var state_15367__$1 = state_15367;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15367__$1,11,out,inst_15347);
} else
{if((state_val_15368 === 10))
{var inst_15359 = (state_15367[2]);var state_15367__$1 = state_15367;var statearr_15382_15401 = state_15367__$1;(statearr_15382_15401[2] = inst_15359);
(statearr_15382_15401[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15368 === 11))
{var inst_15347 = (state_15367[9]);var inst_15356 = (state_15367[2]);var inst_15344 = inst_15347;var state_15367__$1 = (function (){var statearr_15383 = state_15367;(statearr_15383[7] = inst_15344);
(statearr_15383[10] = inst_15356);
return statearr_15383;
})();var statearr_15384_15402 = state_15367__$1;(statearr_15384_15402[2] = null);
(statearr_15384_15402[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__5998__auto__){
return (function() {
var state_machine__5999__auto__ = null;
var state_machine__5999__auto____0 = (function (){var statearr_15388 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_15388[0] = state_machine__5999__auto__);
(statearr_15388[1] = 1);
return statearr_15388;
});
var state_machine__5999__auto____1 = (function (state_15367){while(true){
var ret_value__6000__auto__ = (function (){try{while(true){
var result__6001__auto__ = switch__5998__auto__.call(null,state_15367);if(cljs.core.keyword_identical_QMARK_.call(null,result__6001__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6001__auto__;
}
break;
}
}catch (e15389){if((e15389 instanceof Object))
{var ex__6002__auto__ = e15389;var statearr_15390_15403 = state_15367;(statearr_15390_15403[5] = ex__6002__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15367);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15389;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6000__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15404 = state_15367;
state_15367 = G__15404;
continue;
}
} else
{return ret_value__6000__auto__;
}
break;
}
});
state_machine__5999__auto__ = function(state_15367){
switch(arguments.length){
case 0:
return state_machine__5999__auto____0.call(this);
case 1:
return state_machine__5999__auto____1.call(this,state_15367);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5999__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5999__auto____0;
state_machine__5999__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5999__auto____1;
return state_machine__5999__auto__;
})()
;})(switch__5998__auto__))
})();var state__6070__auto__ = (function (){var statearr_15391 = f__6069__auto__.call(null);(statearr_15391[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6068__auto___15392);
return statearr_15391;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6070__auto__);
}));
return out;
});
unique = function(ch,buf_or_n){
switch(arguments.length){
case 1:
return unique__1.call(this,ch);
case 2:
return unique__2.call(this,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unique.cljs$core$IFn$_invoke$arity$1 = unique__1;
unique.cljs$core$IFn$_invoke$arity$2 = unique__2;
return unique;
})()
;
/**
* Returns a channel that will contain vectors of n items taken from ch. The
* final vector in the return channel may be smaller than n if ch closed before
* the vector could be completely filled.
* 
* The output channel is unbuffered by default, unless buf-or-n is given
*/
cljs.core.async.partition = (function() {
var partition = null;
var partition__2 = (function (n,ch){return partition.call(null,n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6068__auto___15539 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6069__auto__ = (function (){var switch__5998__auto__ = (function (state_15509){var state_val_15510 = (state_15509[1]);if((state_val_15510 === 1))
{var inst_15472 = (new Array(n));var inst_15473 = inst_15472;var inst_15474 = 0;var state_15509__$1 = (function (){var statearr_15511 = state_15509;(statearr_15511[7] = inst_15474);
(statearr_15511[8] = inst_15473);
return statearr_15511;
})();var statearr_15512_15540 = state_15509__$1;(statearr_15512_15540[2] = null);
(statearr_15512_15540[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15510 === 2))
{var state_15509__$1 = state_15509;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15509__$1,4,ch);
} else
{if((state_val_15510 === 3))
{var inst_15507 = (state_15509[2]);var state_15509__$1 = state_15509;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15509__$1,inst_15507);
} else
{if((state_val_15510 === 4))
{var inst_15477 = (state_15509[9]);var inst_15477__$1 = (state_15509[2]);var inst_15478 = (inst_15477__$1 == null);var inst_15479 = cljs.core.not.call(null,inst_15478);var state_15509__$1 = (function (){var statearr_15513 = state_15509;(statearr_15513[9] = inst_15477__$1);
return statearr_15513;
})();if(inst_15479)
{var statearr_15514_15541 = state_15509__$1;(statearr_15514_15541[1] = 5);
} else
{var statearr_15515_15542 = state_15509__$1;(statearr_15515_15542[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15510 === 5))
{var inst_15477 = (state_15509[9]);var inst_15474 = (state_15509[7]);var inst_15473 = (state_15509[8]);var inst_15482 = (state_15509[10]);var inst_15481 = (inst_15473[inst_15474] = inst_15477);var inst_15482__$1 = (inst_15474 + 1);var inst_15483 = (inst_15482__$1 < n);var state_15509__$1 = (function (){var statearr_15516 = state_15509;(statearr_15516[10] = inst_15482__$1);
(statearr_15516[11] = inst_15481);
return statearr_15516;
})();if(cljs.core.truth_(inst_15483))
{var statearr_15517_15543 = state_15509__$1;(statearr_15517_15543[1] = 8);
} else
{var statearr_15518_15544 = state_15509__$1;(statearr_15518_15544[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15510 === 6))
{var inst_15474 = (state_15509[7]);var inst_15495 = (inst_15474 > 0);var state_15509__$1 = state_15509;if(cljs.core.truth_(inst_15495))
{var statearr_15520_15545 = state_15509__$1;(statearr_15520_15545[1] = 12);
} else
{var statearr_15521_15546 = state_15509__$1;(statearr_15521_15546[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15510 === 7))
{var inst_15505 = (state_15509[2]);var state_15509__$1 = state_15509;var statearr_15522_15547 = state_15509__$1;(statearr_15522_15547[2] = inst_15505);
(statearr_15522_15547[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15510 === 8))
{var inst_15473 = (state_15509[8]);var inst_15482 = (state_15509[10]);var tmp15519 = inst_15473;var inst_15473__$1 = tmp15519;var inst_15474 = inst_15482;var state_15509__$1 = (function (){var statearr_15523 = state_15509;(statearr_15523[7] = inst_15474);
(statearr_15523[8] = inst_15473__$1);
return statearr_15523;
})();var statearr_15524_15548 = state_15509__$1;(statearr_15524_15548[2] = null);
(statearr_15524_15548[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15510 === 9))
{var inst_15473 = (state_15509[8]);var inst_15487 = cljs.core.vec.call(null,inst_15473);var state_15509__$1 = state_15509;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15509__$1,11,out,inst_15487);
} else
{if((state_val_15510 === 10))
{var inst_15493 = (state_15509[2]);var state_15509__$1 = state_15509;var statearr_15525_15549 = state_15509__$1;(statearr_15525_15549[2] = inst_15493);
(statearr_15525_15549[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15510 === 11))
{var inst_15489 = (state_15509[2]);var inst_15490 = (new Array(n));var inst_15473 = inst_15490;var inst_15474 = 0;var state_15509__$1 = (function (){var statearr_15526 = state_15509;(statearr_15526[7] = inst_15474);
(statearr_15526[8] = inst_15473);
(statearr_15526[12] = inst_15489);
return statearr_15526;
})();var statearr_15527_15550 = state_15509__$1;(statearr_15527_15550[2] = null);
(statearr_15527_15550[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15510 === 12))
{var inst_15473 = (state_15509[8]);var inst_15497 = cljs.core.vec.call(null,inst_15473);var state_15509__$1 = state_15509;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15509__$1,15,out,inst_15497);
} else
{if((state_val_15510 === 13))
{var state_15509__$1 = state_15509;var statearr_15528_15551 = state_15509__$1;(statearr_15528_15551[2] = null);
(statearr_15528_15551[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15510 === 14))
{var inst_15502 = (state_15509[2]);var inst_15503 = cljs.core.async.close_BANG_.call(null,out);var state_15509__$1 = (function (){var statearr_15529 = state_15509;(statearr_15529[13] = inst_15502);
return statearr_15529;
})();var statearr_15530_15552 = state_15509__$1;(statearr_15530_15552[2] = inst_15503);
(statearr_15530_15552[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15510 === 15))
{var inst_15499 = (state_15509[2]);var state_15509__$1 = state_15509;var statearr_15531_15553 = state_15509__$1;(statearr_15531_15553[2] = inst_15499);
(statearr_15531_15553[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__5998__auto__){
return (function() {
var state_machine__5999__auto__ = null;
var state_machine__5999__auto____0 = (function (){var statearr_15535 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15535[0] = state_machine__5999__auto__);
(statearr_15535[1] = 1);
return statearr_15535;
});
var state_machine__5999__auto____1 = (function (state_15509){while(true){
var ret_value__6000__auto__ = (function (){try{while(true){
var result__6001__auto__ = switch__5998__auto__.call(null,state_15509);if(cljs.core.keyword_identical_QMARK_.call(null,result__6001__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6001__auto__;
}
break;
}
}catch (e15536){if((e15536 instanceof Object))
{var ex__6002__auto__ = e15536;var statearr_15537_15554 = state_15509;(statearr_15537_15554[5] = ex__6002__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15509);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15536;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6000__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15555 = state_15509;
state_15509 = G__15555;
continue;
}
} else
{return ret_value__6000__auto__;
}
break;
}
});
state_machine__5999__auto__ = function(state_15509){
switch(arguments.length){
case 0:
return state_machine__5999__auto____0.call(this);
case 1:
return state_machine__5999__auto____1.call(this,state_15509);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5999__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5999__auto____0;
state_machine__5999__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5999__auto____1;
return state_machine__5999__auto__;
})()
;})(switch__5998__auto__))
})();var state__6070__auto__ = (function (){var statearr_15538 = f__6069__auto__.call(null);(statearr_15538[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6068__auto___15539);
return statearr_15538;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6070__auto__);
}));
return out;
});
partition = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition__2.call(this,n,ch);
case 3:
return partition__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition.cljs$core$IFn$_invoke$arity$2 = partition__2;
partition.cljs$core$IFn$_invoke$arity$3 = partition__3;
return partition;
})()
;
/**
* Returns a channel that will contain vectors of items taken from ch. New
* vectors will be created whenever (f itm) returns a value that differs from
* the previous item's (f itm).
* 
* The output channel is unbuffered, unless buf-or-n is given
*/
cljs.core.async.partition_by = (function() {
var partition_by = null;
var partition_by__2 = (function (f,ch){return partition_by.call(null,f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6068__auto___15698 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6069__auto__ = (function (){var switch__5998__auto__ = (function (state_15668){var state_val_15669 = (state_15668[1]);if((state_val_15669 === 1))
{var inst_15627 = [];var inst_15628 = inst_15627;var inst_15629 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_15668__$1 = (function (){var statearr_15670 = state_15668;(statearr_15670[7] = inst_15629);
(statearr_15670[8] = inst_15628);
return statearr_15670;
})();var statearr_15671_15699 = state_15668__$1;(statearr_15671_15699[2] = null);
(statearr_15671_15699[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15669 === 2))
{var state_15668__$1 = state_15668;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15668__$1,4,ch);
} else
{if((state_val_15669 === 3))
{var inst_15666 = (state_15668[2]);var state_15668__$1 = state_15668;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15668__$1,inst_15666);
} else
{if((state_val_15669 === 4))
{var inst_15632 = (state_15668[9]);var inst_15632__$1 = (state_15668[2]);var inst_15633 = (inst_15632__$1 == null);var inst_15634 = cljs.core.not.call(null,inst_15633);var state_15668__$1 = (function (){var statearr_15672 = state_15668;(statearr_15672[9] = inst_15632__$1);
return statearr_15672;
})();if(inst_15634)
{var statearr_15673_15700 = state_15668__$1;(statearr_15673_15700[1] = 5);
} else
{var statearr_15674_15701 = state_15668__$1;(statearr_15674_15701[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15669 === 5))
{var inst_15629 = (state_15668[7]);var inst_15636 = (state_15668[10]);var inst_15632 = (state_15668[9]);var inst_15636__$1 = f.call(null,inst_15632);var inst_15637 = cljs.core._EQ_.call(null,inst_15636__$1,inst_15629);var inst_15638 = cljs.core.keyword_identical_QMARK_.call(null,inst_15629,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_15639 = (inst_15637) || (inst_15638);var state_15668__$1 = (function (){var statearr_15675 = state_15668;(statearr_15675[10] = inst_15636__$1);
return statearr_15675;
})();if(cljs.core.truth_(inst_15639))
{var statearr_15676_15702 = state_15668__$1;(statearr_15676_15702[1] = 8);
} else
{var statearr_15677_15703 = state_15668__$1;(statearr_15677_15703[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15669 === 6))
{var inst_15628 = (state_15668[8]);var inst_15653 = inst_15628.length;var inst_15654 = (inst_15653 > 0);var state_15668__$1 = state_15668;if(cljs.core.truth_(inst_15654))
{var statearr_15679_15704 = state_15668__$1;(statearr_15679_15704[1] = 12);
} else
{var statearr_15680_15705 = state_15668__$1;(statearr_15680_15705[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15669 === 7))
{var inst_15664 = (state_15668[2]);var state_15668__$1 = state_15668;var statearr_15681_15706 = state_15668__$1;(statearr_15681_15706[2] = inst_15664);
(statearr_15681_15706[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15669 === 8))
{var inst_15636 = (state_15668[10]);var inst_15632 = (state_15668[9]);var inst_15628 = (state_15668[8]);var inst_15641 = inst_15628.push(inst_15632);var tmp15678 = inst_15628;var inst_15628__$1 = tmp15678;var inst_15629 = inst_15636;var state_15668__$1 = (function (){var statearr_15682 = state_15668;(statearr_15682[7] = inst_15629);
(statearr_15682[11] = inst_15641);
(statearr_15682[8] = inst_15628__$1);
return statearr_15682;
})();var statearr_15683_15707 = state_15668__$1;(statearr_15683_15707[2] = null);
(statearr_15683_15707[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15669 === 9))
{var inst_15628 = (state_15668[8]);var inst_15644 = cljs.core.vec.call(null,inst_15628);var state_15668__$1 = state_15668;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15668__$1,11,out,inst_15644);
} else
{if((state_val_15669 === 10))
{var inst_15651 = (state_15668[2]);var state_15668__$1 = state_15668;var statearr_15684_15708 = state_15668__$1;(statearr_15684_15708[2] = inst_15651);
(statearr_15684_15708[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15669 === 11))
{var inst_15636 = (state_15668[10]);var inst_15632 = (state_15668[9]);var inst_15646 = (state_15668[2]);var inst_15647 = [];var inst_15648 = inst_15647.push(inst_15632);var inst_15628 = inst_15647;var inst_15629 = inst_15636;var state_15668__$1 = (function (){var statearr_15685 = state_15668;(statearr_15685[7] = inst_15629);
(statearr_15685[12] = inst_15648);
(statearr_15685[13] = inst_15646);
(statearr_15685[8] = inst_15628);
return statearr_15685;
})();var statearr_15686_15709 = state_15668__$1;(statearr_15686_15709[2] = null);
(statearr_15686_15709[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15669 === 12))
{var inst_15628 = (state_15668[8]);var inst_15656 = cljs.core.vec.call(null,inst_15628);var state_15668__$1 = state_15668;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15668__$1,15,out,inst_15656);
} else
{if((state_val_15669 === 13))
{var state_15668__$1 = state_15668;var statearr_15687_15710 = state_15668__$1;(statearr_15687_15710[2] = null);
(statearr_15687_15710[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15669 === 14))
{var inst_15661 = (state_15668[2]);var inst_15662 = cljs.core.async.close_BANG_.call(null,out);var state_15668__$1 = (function (){var statearr_15688 = state_15668;(statearr_15688[14] = inst_15661);
return statearr_15688;
})();var statearr_15689_15711 = state_15668__$1;(statearr_15689_15711[2] = inst_15662);
(statearr_15689_15711[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15669 === 15))
{var inst_15658 = (state_15668[2]);var state_15668__$1 = state_15668;var statearr_15690_15712 = state_15668__$1;(statearr_15690_15712[2] = inst_15658);
(statearr_15690_15712[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__5998__auto__){
return (function() {
var state_machine__5999__auto__ = null;
var state_machine__5999__auto____0 = (function (){var statearr_15694 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15694[0] = state_machine__5999__auto__);
(statearr_15694[1] = 1);
return statearr_15694;
});
var state_machine__5999__auto____1 = (function (state_15668){while(true){
var ret_value__6000__auto__ = (function (){try{while(true){
var result__6001__auto__ = switch__5998__auto__.call(null,state_15668);if(cljs.core.keyword_identical_QMARK_.call(null,result__6001__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6001__auto__;
}
break;
}
}catch (e15695){if((e15695 instanceof Object))
{var ex__6002__auto__ = e15695;var statearr_15696_15713 = state_15668;(statearr_15696_15713[5] = ex__6002__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15668);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15695;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6000__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15714 = state_15668;
state_15668 = G__15714;
continue;
}
} else
{return ret_value__6000__auto__;
}
break;
}
});
state_machine__5999__auto__ = function(state_15668){
switch(arguments.length){
case 0:
return state_machine__5999__auto____0.call(this);
case 1:
return state_machine__5999__auto____1.call(this,state_15668);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5999__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5999__auto____0;
state_machine__5999__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5999__auto____1;
return state_machine__5999__auto__;
})()
;})(switch__5998__auto__))
})();var state__6070__auto__ = (function (){var statearr_15697 = f__6069__auto__.call(null);(statearr_15697[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6068__auto___15698);
return statearr_15697;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6070__auto__);
}));
return out;
});
partition_by = function(f,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition_by__2.call(this,f,ch);
case 3:
return partition_by__3.call(this,f,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition_by.cljs$core$IFn$_invoke$arity$2 = partition_by__2;
partition_by.cljs$core$IFn$_invoke$arity$3 = partition_by__3;
return partition_by;
})()
;

//# sourceMappingURL=async.js.map