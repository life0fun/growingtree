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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t25102 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25102 = (function (f,fn_handler,meta25103){
this.f = f;
this.fn_handler = fn_handler;
this.meta25103 = meta25103;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25102.cljs$lang$type = true;
cljs.core.async.t25102.cljs$lang$ctorStr = "cljs.core.async/t25102";
cljs.core.async.t25102.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t25102");
});
cljs.core.async.t25102.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t25102.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t25102.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t25102.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25104){var self__ = this;
var _25104__$1 = this;return self__.meta25103;
});
cljs.core.async.t25102.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25104,meta25103__$1){var self__ = this;
var _25104__$1 = this;return (new cljs.core.async.t25102(self__.f,self__.fn_handler,meta25103__$1));
});
cljs.core.async.__GT_t25102 = (function __GT_t25102(f__$1,fn_handler__$1,meta25103){return (new cljs.core.async.t25102(f__$1,fn_handler__$1,meta25103));
});
}
return (new cljs.core.async.t25102(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__25106 = buff;if(G__25106)
{var bit__4093__auto__ = null;if(cljs.core.truth_((function (){var or__3443__auto__ = bit__4093__auto__;if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{return G__25106.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__25106.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__25106);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__25106);
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
{var val_25107 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_25107);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_25107);
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4291__auto___25108 = n;var x_25109 = 0;while(true){
if((x_25109 < n__4291__auto___25108))
{(a[x_25109] = 0);
{
var G__25110 = (x_25109 + 1);
x_25109 = G__25110;
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
var G__25111 = (i + 1);
i = G__25111;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t25115 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25115 = (function (flag,alt_flag,meta25116){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta25116 = meta25116;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25115.cljs$lang$type = true;
cljs.core.async.t25115.cljs$lang$ctorStr = "cljs.core.async/t25115";
cljs.core.async.t25115.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t25115");
});
cljs.core.async.t25115.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t25115.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t25115.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t25115.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25117){var self__ = this;
var _25117__$1 = this;return self__.meta25116;
});
cljs.core.async.t25115.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25117,meta25116__$1){var self__ = this;
var _25117__$1 = this;return (new cljs.core.async.t25115(self__.flag,self__.alt_flag,meta25116__$1));
});
cljs.core.async.__GT_t25115 = (function __GT_t25115(flag__$1,alt_flag__$1,meta25116){return (new cljs.core.async.t25115(flag__$1,alt_flag__$1,meta25116));
});
}
return (new cljs.core.async.t25115(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t25121 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25121 = (function (cb,flag,alt_handler,meta25122){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta25122 = meta25122;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25121.cljs$lang$type = true;
cljs.core.async.t25121.cljs$lang$ctorStr = "cljs.core.async/t25121";
cljs.core.async.t25121.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t25121");
});
cljs.core.async.t25121.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t25121.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t25121.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t25121.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25123){var self__ = this;
var _25123__$1 = this;return self__.meta25122;
});
cljs.core.async.t25121.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25123,meta25122__$1){var self__ = this;
var _25123__$1 = this;return (new cljs.core.async.t25121(self__.cb,self__.flag,self__.alt_handler,meta25122__$1));
});
cljs.core.async.__GT_t25121 = (function __GT_t25121(cb__$1,flag__$1,alt_handler__$1,meta25122){return (new cljs.core.async.t25121(cb__$1,flag__$1,alt_handler__$1,meta25122));
});
}
return (new cljs.core.async.t25121(cb,flag,alt_handler,null));
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
return (function (p1__25124_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__25124_SHARP_,port], null));
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
var G__25125 = (i + 1);
i = G__25125;
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
var alts_BANG___delegate = function (ports,p__25126){var map__25128 = p__25126;var map__25128__$1 = ((cljs.core.seq_QMARK_.call(null,map__25128))?cljs.core.apply.call(null,cljs.core.hash_map,map__25128):map__25128);var opts = map__25128__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__25126 = null;if (arguments.length > 1) {
  p__25126 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__25126);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__25129){
var ports = cljs.core.first(arglist__25129);
var p__25126 = cljs.core.rest(arglist__25129);
return alts_BANG___delegate(ports,p__25126);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t25137 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25137 = (function (ch,f,map_LT_,meta25138){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta25138 = meta25138;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25137.cljs$lang$type = true;
cljs.core.async.t25137.cljs$lang$ctorStr = "cljs.core.async/t25137";
cljs.core.async.t25137.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t25137");
});
cljs.core.async.t25137.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t25137.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t25137.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t25137.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t25140 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25140 = (function (fn1,_,meta25138,ch,f,map_LT_,meta25141){
this.fn1 = fn1;
this._ = _;
this.meta25138 = meta25138;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta25141 = meta25141;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25140.cljs$lang$type = true;
cljs.core.async.t25140.cljs$lang$ctorStr = "cljs.core.async/t25140";
cljs.core.async.t25140.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t25140");
});
cljs.core.async.t25140.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t25140.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t25140.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t25140.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__25130_SHARP_){return f1.call(null,(((p1__25130_SHARP_ == null))?null:self__.f.call(null,p1__25130_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t25140.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25142){var self__ = this;
var _25142__$1 = this;return self__.meta25141;
});
cljs.core.async.t25140.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25142,meta25141__$1){var self__ = this;
var _25142__$1 = this;return (new cljs.core.async.t25140(self__.fn1,self__._,self__.meta25138,self__.ch,self__.f,self__.map_LT_,meta25141__$1));
});
cljs.core.async.__GT_t25140 = (function __GT_t25140(fn1__$1,___$2,meta25138__$1,ch__$2,f__$2,map_LT___$2,meta25141){return (new cljs.core.async.t25140(fn1__$1,___$2,meta25138__$1,ch__$2,f__$2,map_LT___$2,meta25141));
});
}
return (new cljs.core.async.t25140(fn1,___$1,self__.meta25138,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t25137.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t25137.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t25137.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25139){var self__ = this;
var _25139__$1 = this;return self__.meta25138;
});
cljs.core.async.t25137.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25139,meta25138__$1){var self__ = this;
var _25139__$1 = this;return (new cljs.core.async.t25137(self__.ch,self__.f,self__.map_LT_,meta25138__$1));
});
cljs.core.async.__GT_t25137 = (function __GT_t25137(ch__$1,f__$1,map_LT___$1,meta25138){return (new cljs.core.async.t25137(ch__$1,f__$1,map_LT___$1,meta25138));
});
}
return (new cljs.core.async.t25137(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t25146 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25146 = (function (ch,f,map_GT_,meta25147){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta25147 = meta25147;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25146.cljs$lang$type = true;
cljs.core.async.t25146.cljs$lang$ctorStr = "cljs.core.async/t25146";
cljs.core.async.t25146.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t25146");
});
cljs.core.async.t25146.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t25146.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t25146.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t25146.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t25146.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t25146.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t25146.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25148){var self__ = this;
var _25148__$1 = this;return self__.meta25147;
});
cljs.core.async.t25146.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25148,meta25147__$1){var self__ = this;
var _25148__$1 = this;return (new cljs.core.async.t25146(self__.ch,self__.f,self__.map_GT_,meta25147__$1));
});
cljs.core.async.__GT_t25146 = (function __GT_t25146(ch__$1,f__$1,map_GT___$1,meta25147){return (new cljs.core.async.t25146(ch__$1,f__$1,map_GT___$1,meta25147));
});
}
return (new cljs.core.async.t25146(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t25152 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25152 = (function (ch,p,filter_GT_,meta25153){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta25153 = meta25153;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25152.cljs$lang$type = true;
cljs.core.async.t25152.cljs$lang$ctorStr = "cljs.core.async/t25152";
cljs.core.async.t25152.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t25152");
});
cljs.core.async.t25152.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t25152.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t25152.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t25152.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t25152.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t25152.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t25152.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25154){var self__ = this;
var _25154__$1 = this;return self__.meta25153;
});
cljs.core.async.t25152.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25154,meta25153__$1){var self__ = this;
var _25154__$1 = this;return (new cljs.core.async.t25152(self__.ch,self__.p,self__.filter_GT_,meta25153__$1));
});
cljs.core.async.__GT_t25152 = (function __GT_t25152(ch__$1,p__$1,filter_GT___$1,meta25153){return (new cljs.core.async.t25152(ch__$1,p__$1,filter_GT___$1,meta25153));
});
}
return (new cljs.core.async.t25152(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6068__auto___25237 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6069__auto__ = (function (){var switch__5998__auto__ = (function (state_25216){var state_val_25217 = (state_25216[1]);if((state_val_25217 === 1))
{var state_25216__$1 = state_25216;var statearr_25218_25238 = state_25216__$1;(statearr_25218_25238[2] = null);
(statearr_25218_25238[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25217 === 2))
{var state_25216__$1 = state_25216;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25216__$1,4,ch);
} else
{if((state_val_25217 === 3))
{var inst_25214 = (state_25216[2]);var state_25216__$1 = state_25216;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25216__$1,inst_25214);
} else
{if((state_val_25217 === 4))
{var inst_25198 = (state_25216[7]);var inst_25198__$1 = (state_25216[2]);var inst_25199 = (inst_25198__$1 == null);var state_25216__$1 = (function (){var statearr_25219 = state_25216;(statearr_25219[7] = inst_25198__$1);
return statearr_25219;
})();if(cljs.core.truth_(inst_25199))
{var statearr_25220_25239 = state_25216__$1;(statearr_25220_25239[1] = 5);
} else
{var statearr_25221_25240 = state_25216__$1;(statearr_25221_25240[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25217 === 5))
{var inst_25201 = cljs.core.async.close_BANG_.call(null,out);var state_25216__$1 = state_25216;var statearr_25222_25241 = state_25216__$1;(statearr_25222_25241[2] = inst_25201);
(statearr_25222_25241[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25217 === 6))
{var inst_25198 = (state_25216[7]);var inst_25203 = p.call(null,inst_25198);var state_25216__$1 = state_25216;if(cljs.core.truth_(inst_25203))
{var statearr_25223_25242 = state_25216__$1;(statearr_25223_25242[1] = 8);
} else
{var statearr_25224_25243 = state_25216__$1;(statearr_25224_25243[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25217 === 7))
{var inst_25212 = (state_25216[2]);var state_25216__$1 = state_25216;var statearr_25225_25244 = state_25216__$1;(statearr_25225_25244[2] = inst_25212);
(statearr_25225_25244[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25217 === 8))
{var inst_25198 = (state_25216[7]);var state_25216__$1 = state_25216;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25216__$1,11,out,inst_25198);
} else
{if((state_val_25217 === 9))
{var state_25216__$1 = state_25216;var statearr_25226_25245 = state_25216__$1;(statearr_25226_25245[2] = null);
(statearr_25226_25245[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25217 === 10))
{var inst_25209 = (state_25216[2]);var state_25216__$1 = (function (){var statearr_25227 = state_25216;(statearr_25227[8] = inst_25209);
return statearr_25227;
})();var statearr_25228_25246 = state_25216__$1;(statearr_25228_25246[2] = null);
(statearr_25228_25246[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25217 === 11))
{var inst_25206 = (state_25216[2]);var state_25216__$1 = state_25216;var statearr_25229_25247 = state_25216__$1;(statearr_25229_25247[2] = inst_25206);
(statearr_25229_25247[1] = 10);
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
var state_machine__5999__auto____0 = (function (){var statearr_25233 = [null,null,null,null,null,null,null,null,null];(statearr_25233[0] = state_machine__5999__auto__);
(statearr_25233[1] = 1);
return statearr_25233;
});
var state_machine__5999__auto____1 = (function (state_25216){while(true){
var ret_value__6000__auto__ = (function (){try{while(true){
var result__6001__auto__ = switch__5998__auto__.call(null,state_25216);if(cljs.core.keyword_identical_QMARK_.call(null,result__6001__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6001__auto__;
}
break;
}
}catch (e25234){if((e25234 instanceof Object))
{var ex__6002__auto__ = e25234;var statearr_25235_25248 = state_25216;(statearr_25235_25248[5] = ex__6002__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25216);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e25234;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6000__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__25249 = state_25216;
state_25216 = G__25249;
continue;
}
} else
{return ret_value__6000__auto__;
}
break;
}
});
state_machine__5999__auto__ = function(state_25216){
switch(arguments.length){
case 0:
return state_machine__5999__auto____0.call(this);
case 1:
return state_machine__5999__auto____1.call(this,state_25216);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5999__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5999__auto____0;
state_machine__5999__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5999__auto____1;
return state_machine__5999__auto__;
})()
;})(switch__5998__auto__))
})();var state__6070__auto__ = (function (){var statearr_25236 = f__6069__auto__.call(null);(statearr_25236[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6068__auto___25237);
return statearr_25236;
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__6068__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6069__auto__ = (function (){var switch__5998__auto__ = (function (state_25401){var state_val_25402 = (state_25401[1]);if((state_val_25402 === 1))
{var state_25401__$1 = state_25401;var statearr_25403_25440 = state_25401__$1;(statearr_25403_25440[2] = null);
(statearr_25403_25440[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25402 === 2))
{var state_25401__$1 = state_25401;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25401__$1,4,in$);
} else
{if((state_val_25402 === 3))
{var inst_25399 = (state_25401[2]);var state_25401__$1 = state_25401;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25401__$1,inst_25399);
} else
{if((state_val_25402 === 4))
{var inst_25347 = (state_25401[7]);var inst_25347__$1 = (state_25401[2]);var inst_25348 = (inst_25347__$1 == null);var state_25401__$1 = (function (){var statearr_25404 = state_25401;(statearr_25404[7] = inst_25347__$1);
return statearr_25404;
})();if(cljs.core.truth_(inst_25348))
{var statearr_25405_25441 = state_25401__$1;(statearr_25405_25441[1] = 5);
} else
{var statearr_25406_25442 = state_25401__$1;(statearr_25406_25442[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25402 === 5))
{var inst_25350 = cljs.core.async.close_BANG_.call(null,out);var state_25401__$1 = state_25401;var statearr_25407_25443 = state_25401__$1;(statearr_25407_25443[2] = inst_25350);
(statearr_25407_25443[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25402 === 6))
{var inst_25347 = (state_25401[7]);var inst_25352 = f.call(null,inst_25347);var inst_25357 = cljs.core.seq.call(null,inst_25352);var inst_25358 = inst_25357;var inst_25359 = null;var inst_25360 = 0;var inst_25361 = 0;var state_25401__$1 = (function (){var statearr_25408 = state_25401;(statearr_25408[8] = inst_25359);
(statearr_25408[9] = inst_25360);
(statearr_25408[10] = inst_25358);
(statearr_25408[11] = inst_25361);
return statearr_25408;
})();var statearr_25409_25444 = state_25401__$1;(statearr_25409_25444[2] = null);
(statearr_25409_25444[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25402 === 7))
{var inst_25397 = (state_25401[2]);var state_25401__$1 = state_25401;var statearr_25410_25445 = state_25401__$1;(statearr_25410_25445[2] = inst_25397);
(statearr_25410_25445[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25402 === 8))
{var inst_25360 = (state_25401[9]);var inst_25361 = (state_25401[11]);var inst_25363 = (inst_25361 < inst_25360);var inst_25364 = inst_25363;var state_25401__$1 = state_25401;if(cljs.core.truth_(inst_25364))
{var statearr_25411_25446 = state_25401__$1;(statearr_25411_25446[1] = 10);
} else
{var statearr_25412_25447 = state_25401__$1;(statearr_25412_25447[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25402 === 9))
{var inst_25394 = (state_25401[2]);var state_25401__$1 = (function (){var statearr_25413 = state_25401;(statearr_25413[12] = inst_25394);
return statearr_25413;
})();var statearr_25414_25448 = state_25401__$1;(statearr_25414_25448[2] = null);
(statearr_25414_25448[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25402 === 10))
{var inst_25359 = (state_25401[8]);var inst_25361 = (state_25401[11]);var inst_25366 = cljs.core._nth.call(null,inst_25359,inst_25361);var state_25401__$1 = state_25401;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25401__$1,13,out,inst_25366);
} else
{if((state_val_25402 === 11))
{var inst_25372 = (state_25401[13]);var inst_25358 = (state_25401[10]);var inst_25372__$1 = cljs.core.seq.call(null,inst_25358);var state_25401__$1 = (function (){var statearr_25418 = state_25401;(statearr_25418[13] = inst_25372__$1);
return statearr_25418;
})();if(inst_25372__$1)
{var statearr_25419_25449 = state_25401__$1;(statearr_25419_25449[1] = 14);
} else
{var statearr_25420_25450 = state_25401__$1;(statearr_25420_25450[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25402 === 12))
{var inst_25392 = (state_25401[2]);var state_25401__$1 = state_25401;var statearr_25421_25451 = state_25401__$1;(statearr_25421_25451[2] = inst_25392);
(statearr_25421_25451[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25402 === 13))
{var inst_25359 = (state_25401[8]);var inst_25360 = (state_25401[9]);var inst_25358 = (state_25401[10]);var inst_25361 = (state_25401[11]);var inst_25368 = (state_25401[2]);var inst_25369 = (inst_25361 + 1);var tmp25415 = inst_25359;var tmp25416 = inst_25360;var tmp25417 = inst_25358;var inst_25358__$1 = tmp25417;var inst_25359__$1 = tmp25415;var inst_25360__$1 = tmp25416;var inst_25361__$1 = inst_25369;var state_25401__$1 = (function (){var statearr_25422 = state_25401;(statearr_25422[14] = inst_25368);
(statearr_25422[8] = inst_25359__$1);
(statearr_25422[9] = inst_25360__$1);
(statearr_25422[10] = inst_25358__$1);
(statearr_25422[11] = inst_25361__$1);
return statearr_25422;
})();var statearr_25423_25452 = state_25401__$1;(statearr_25423_25452[2] = null);
(statearr_25423_25452[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25402 === 14))
{var inst_25372 = (state_25401[13]);var inst_25374 = cljs.core.chunked_seq_QMARK_.call(null,inst_25372);var state_25401__$1 = state_25401;if(inst_25374)
{var statearr_25424_25453 = state_25401__$1;(statearr_25424_25453[1] = 17);
} else
{var statearr_25425_25454 = state_25401__$1;(statearr_25425_25454[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25402 === 15))
{var state_25401__$1 = state_25401;var statearr_25426_25455 = state_25401__$1;(statearr_25426_25455[2] = null);
(statearr_25426_25455[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25402 === 16))
{var inst_25390 = (state_25401[2]);var state_25401__$1 = state_25401;var statearr_25427_25456 = state_25401__$1;(statearr_25427_25456[2] = inst_25390);
(statearr_25427_25456[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25402 === 17))
{var inst_25372 = (state_25401[13]);var inst_25376 = cljs.core.chunk_first.call(null,inst_25372);var inst_25377 = cljs.core.chunk_rest.call(null,inst_25372);var inst_25378 = cljs.core.count.call(null,inst_25376);var inst_25358 = inst_25377;var inst_25359 = inst_25376;var inst_25360 = inst_25378;var inst_25361 = 0;var state_25401__$1 = (function (){var statearr_25428 = state_25401;(statearr_25428[8] = inst_25359);
(statearr_25428[9] = inst_25360);
(statearr_25428[10] = inst_25358);
(statearr_25428[11] = inst_25361);
return statearr_25428;
})();var statearr_25429_25457 = state_25401__$1;(statearr_25429_25457[2] = null);
(statearr_25429_25457[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25402 === 18))
{var inst_25372 = (state_25401[13]);var inst_25381 = cljs.core.first.call(null,inst_25372);var state_25401__$1 = state_25401;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25401__$1,20,out,inst_25381);
} else
{if((state_val_25402 === 19))
{var inst_25387 = (state_25401[2]);var state_25401__$1 = state_25401;var statearr_25430_25458 = state_25401__$1;(statearr_25430_25458[2] = inst_25387);
(statearr_25430_25458[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25402 === 20))
{var inst_25372 = (state_25401[13]);var inst_25383 = (state_25401[2]);var inst_25384 = cljs.core.next.call(null,inst_25372);var inst_25358 = inst_25384;var inst_25359 = null;var inst_25360 = 0;var inst_25361 = 0;var state_25401__$1 = (function (){var statearr_25431 = state_25401;(statearr_25431[15] = inst_25383);
(statearr_25431[8] = inst_25359);
(statearr_25431[9] = inst_25360);
(statearr_25431[10] = inst_25358);
(statearr_25431[11] = inst_25361);
return statearr_25431;
})();var statearr_25432_25459 = state_25401__$1;(statearr_25432_25459[2] = null);
(statearr_25432_25459[1] = 8);
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
var state_machine__5999__auto____0 = (function (){var statearr_25436 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25436[0] = state_machine__5999__auto__);
(statearr_25436[1] = 1);
return statearr_25436;
});
var state_machine__5999__auto____1 = (function (state_25401){while(true){
var ret_value__6000__auto__ = (function (){try{while(true){
var result__6001__auto__ = switch__5998__auto__.call(null,state_25401);if(cljs.core.keyword_identical_QMARK_.call(null,result__6001__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6001__auto__;
}
break;
}
}catch (e25437){if((e25437 instanceof Object))
{var ex__6002__auto__ = e25437;var statearr_25438_25460 = state_25401;(statearr_25438_25460[5] = ex__6002__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25401);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e25437;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6000__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__25461 = state_25401;
state_25401 = G__25461;
continue;
}
} else
{return ret_value__6000__auto__;
}
break;
}
});
state_machine__5999__auto__ = function(state_25401){
switch(arguments.length){
case 0:
return state_machine__5999__auto____0.call(this);
case 1:
return state_machine__5999__auto____1.call(this,state_25401);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5999__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5999__auto____0;
state_machine__5999__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5999__auto____1;
return state_machine__5999__auto__;
})()
;})(switch__5998__auto__))
})();var state__6070__auto__ = (function (){var statearr_25439 = f__6069__auto__.call(null);(statearr_25439[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6068__auto__);
return statearr_25439;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__6068__auto___25542 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6069__auto__ = (function (){var switch__5998__auto__ = (function (state_25521){var state_val_25522 = (state_25521[1]);if((state_val_25522 === 1))
{var state_25521__$1 = state_25521;var statearr_25523_25543 = state_25521__$1;(statearr_25523_25543[2] = null);
(statearr_25523_25543[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25522 === 2))
{var state_25521__$1 = state_25521;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25521__$1,4,from);
} else
{if((state_val_25522 === 3))
{var inst_25519 = (state_25521[2]);var state_25521__$1 = state_25521;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25521__$1,inst_25519);
} else
{if((state_val_25522 === 4))
{var inst_25504 = (state_25521[7]);var inst_25504__$1 = (state_25521[2]);var inst_25505 = (inst_25504__$1 == null);var state_25521__$1 = (function (){var statearr_25524 = state_25521;(statearr_25524[7] = inst_25504__$1);
return statearr_25524;
})();if(cljs.core.truth_(inst_25505))
{var statearr_25525_25544 = state_25521__$1;(statearr_25525_25544[1] = 5);
} else
{var statearr_25526_25545 = state_25521__$1;(statearr_25526_25545[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25522 === 5))
{var state_25521__$1 = state_25521;if(cljs.core.truth_(close_QMARK_))
{var statearr_25527_25546 = state_25521__$1;(statearr_25527_25546[1] = 8);
} else
{var statearr_25528_25547 = state_25521__$1;(statearr_25528_25547[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25522 === 6))
{var inst_25504 = (state_25521[7]);var state_25521__$1 = state_25521;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25521__$1,11,to,inst_25504);
} else
{if((state_val_25522 === 7))
{var inst_25517 = (state_25521[2]);var state_25521__$1 = state_25521;var statearr_25529_25548 = state_25521__$1;(statearr_25529_25548[2] = inst_25517);
(statearr_25529_25548[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25522 === 8))
{var inst_25508 = cljs.core.async.close_BANG_.call(null,to);var state_25521__$1 = state_25521;var statearr_25530_25549 = state_25521__$1;(statearr_25530_25549[2] = inst_25508);
(statearr_25530_25549[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25522 === 9))
{var state_25521__$1 = state_25521;var statearr_25531_25550 = state_25521__$1;(statearr_25531_25550[2] = null);
(statearr_25531_25550[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25522 === 10))
{var inst_25511 = (state_25521[2]);var state_25521__$1 = state_25521;var statearr_25532_25551 = state_25521__$1;(statearr_25532_25551[2] = inst_25511);
(statearr_25532_25551[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25522 === 11))
{var inst_25514 = (state_25521[2]);var state_25521__$1 = (function (){var statearr_25533 = state_25521;(statearr_25533[8] = inst_25514);
return statearr_25533;
})();var statearr_25534_25552 = state_25521__$1;(statearr_25534_25552[2] = null);
(statearr_25534_25552[1] = 2);
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
var state_machine__5999__auto____0 = (function (){var statearr_25538 = [null,null,null,null,null,null,null,null,null];(statearr_25538[0] = state_machine__5999__auto__);
(statearr_25538[1] = 1);
return statearr_25538;
});
var state_machine__5999__auto____1 = (function (state_25521){while(true){
var ret_value__6000__auto__ = (function (){try{while(true){
var result__6001__auto__ = switch__5998__auto__.call(null,state_25521);if(cljs.core.keyword_identical_QMARK_.call(null,result__6001__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6001__auto__;
}
break;
}
}catch (e25539){if((e25539 instanceof Object))
{var ex__6002__auto__ = e25539;var statearr_25540_25553 = state_25521;(statearr_25540_25553[5] = ex__6002__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25521);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e25539;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6000__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__25554 = state_25521;
state_25521 = G__25554;
continue;
}
} else
{return ret_value__6000__auto__;
}
break;
}
});
state_machine__5999__auto__ = function(state_25521){
switch(arguments.length){
case 0:
return state_machine__5999__auto____0.call(this);
case 1:
return state_machine__5999__auto____1.call(this,state_25521);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5999__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5999__auto____0;
state_machine__5999__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5999__auto____1;
return state_machine__5999__auto__;
})()
;})(switch__5998__auto__))
})();var state__6070__auto__ = (function (){var statearr_25541 = f__6069__auto__.call(null);(statearr_25541[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6068__auto___25542);
return statearr_25541;
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__6068__auto___25641 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6069__auto__ = (function (){var switch__5998__auto__ = (function (state_25619){var state_val_25620 = (state_25619[1]);if((state_val_25620 === 1))
{var state_25619__$1 = state_25619;var statearr_25621_25642 = state_25619__$1;(statearr_25621_25642[2] = null);
(statearr_25621_25642[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25620 === 2))
{var state_25619__$1 = state_25619;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25619__$1,4,ch);
} else
{if((state_val_25620 === 3))
{var inst_25617 = (state_25619[2]);var state_25619__$1 = state_25619;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25619__$1,inst_25617);
} else
{if((state_val_25620 === 4))
{var inst_25600 = (state_25619[7]);var inst_25600__$1 = (state_25619[2]);var inst_25601 = (inst_25600__$1 == null);var state_25619__$1 = (function (){var statearr_25622 = state_25619;(statearr_25622[7] = inst_25600__$1);
return statearr_25622;
})();if(cljs.core.truth_(inst_25601))
{var statearr_25623_25643 = state_25619__$1;(statearr_25623_25643[1] = 5);
} else
{var statearr_25624_25644 = state_25619__$1;(statearr_25624_25644[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25620 === 5))
{var inst_25603 = cljs.core.async.close_BANG_.call(null,tc);var inst_25604 = cljs.core.async.close_BANG_.call(null,fc);var state_25619__$1 = (function (){var statearr_25625 = state_25619;(statearr_25625[8] = inst_25603);
return statearr_25625;
})();var statearr_25626_25645 = state_25619__$1;(statearr_25626_25645[2] = inst_25604);
(statearr_25626_25645[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25620 === 6))
{var inst_25600 = (state_25619[7]);var inst_25606 = p.call(null,inst_25600);var state_25619__$1 = state_25619;if(cljs.core.truth_(inst_25606))
{var statearr_25627_25646 = state_25619__$1;(statearr_25627_25646[1] = 9);
} else
{var statearr_25628_25647 = state_25619__$1;(statearr_25628_25647[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25620 === 7))
{var inst_25615 = (state_25619[2]);var state_25619__$1 = state_25619;var statearr_25629_25648 = state_25619__$1;(statearr_25629_25648[2] = inst_25615);
(statearr_25629_25648[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25620 === 8))
{var inst_25612 = (state_25619[2]);var state_25619__$1 = (function (){var statearr_25630 = state_25619;(statearr_25630[9] = inst_25612);
return statearr_25630;
})();var statearr_25631_25649 = state_25619__$1;(statearr_25631_25649[2] = null);
(statearr_25631_25649[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25620 === 9))
{var state_25619__$1 = state_25619;var statearr_25632_25650 = state_25619__$1;(statearr_25632_25650[2] = tc);
(statearr_25632_25650[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25620 === 10))
{var state_25619__$1 = state_25619;var statearr_25633_25651 = state_25619__$1;(statearr_25633_25651[2] = fc);
(statearr_25633_25651[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25620 === 11))
{var inst_25600 = (state_25619[7]);var inst_25610 = (state_25619[2]);var state_25619__$1 = state_25619;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25619__$1,8,inst_25610,inst_25600);
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
var state_machine__5999__auto____0 = (function (){var statearr_25637 = [null,null,null,null,null,null,null,null,null,null];(statearr_25637[0] = state_machine__5999__auto__);
(statearr_25637[1] = 1);
return statearr_25637;
});
var state_machine__5999__auto____1 = (function (state_25619){while(true){
var ret_value__6000__auto__ = (function (){try{while(true){
var result__6001__auto__ = switch__5998__auto__.call(null,state_25619);if(cljs.core.keyword_identical_QMARK_.call(null,result__6001__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6001__auto__;
}
break;
}
}catch (e25638){if((e25638 instanceof Object))
{var ex__6002__auto__ = e25638;var statearr_25639_25652 = state_25619;(statearr_25639_25652[5] = ex__6002__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25619);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e25638;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6000__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__25653 = state_25619;
state_25619 = G__25653;
continue;
}
} else
{return ret_value__6000__auto__;
}
break;
}
});
state_machine__5999__auto__ = function(state_25619){
switch(arguments.length){
case 0:
return state_machine__5999__auto____0.call(this);
case 1:
return state_machine__5999__auto____1.call(this,state_25619);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5999__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5999__auto____0;
state_machine__5999__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5999__auto____1;
return state_machine__5999__auto__;
})()
;})(switch__5998__auto__))
})();var state__6070__auto__ = (function (){var statearr_25640 = f__6069__auto__.call(null);(statearr_25640[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6068__auto___25641);
return statearr_25640;
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__6068__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6069__auto__ = (function (){var switch__5998__auto__ = (function (state_25700){var state_val_25701 = (state_25700[1]);if((state_val_25701 === 7))
{var inst_25696 = (state_25700[2]);var state_25700__$1 = state_25700;var statearr_25702_25718 = state_25700__$1;(statearr_25702_25718[2] = inst_25696);
(statearr_25702_25718[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25701 === 6))
{var inst_25689 = (state_25700[7]);var inst_25686 = (state_25700[8]);var inst_25693 = f.call(null,inst_25686,inst_25689);var inst_25686__$1 = inst_25693;var state_25700__$1 = (function (){var statearr_25703 = state_25700;(statearr_25703[8] = inst_25686__$1);
return statearr_25703;
})();var statearr_25704_25719 = state_25700__$1;(statearr_25704_25719[2] = null);
(statearr_25704_25719[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25701 === 5))
{var inst_25686 = (state_25700[8]);var state_25700__$1 = state_25700;var statearr_25705_25720 = state_25700__$1;(statearr_25705_25720[2] = inst_25686);
(statearr_25705_25720[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25701 === 4))
{var inst_25689 = (state_25700[7]);var inst_25689__$1 = (state_25700[2]);var inst_25690 = (inst_25689__$1 == null);var state_25700__$1 = (function (){var statearr_25706 = state_25700;(statearr_25706[7] = inst_25689__$1);
return statearr_25706;
})();if(cljs.core.truth_(inst_25690))
{var statearr_25707_25721 = state_25700__$1;(statearr_25707_25721[1] = 5);
} else
{var statearr_25708_25722 = state_25700__$1;(statearr_25708_25722[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25701 === 3))
{var inst_25698 = (state_25700[2]);var state_25700__$1 = state_25700;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25700__$1,inst_25698);
} else
{if((state_val_25701 === 2))
{var state_25700__$1 = state_25700;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25700__$1,4,ch);
} else
{if((state_val_25701 === 1))
{var inst_25686 = init;var state_25700__$1 = (function (){var statearr_25709 = state_25700;(statearr_25709[8] = inst_25686);
return statearr_25709;
})();var statearr_25710_25723 = state_25700__$1;(statearr_25710_25723[2] = null);
(statearr_25710_25723[1] = 2);
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
var state_machine__5999__auto____0 = (function (){var statearr_25714 = [null,null,null,null,null,null,null,null,null];(statearr_25714[0] = state_machine__5999__auto__);
(statearr_25714[1] = 1);
return statearr_25714;
});
var state_machine__5999__auto____1 = (function (state_25700){while(true){
var ret_value__6000__auto__ = (function (){try{while(true){
var result__6001__auto__ = switch__5998__auto__.call(null,state_25700);if(cljs.core.keyword_identical_QMARK_.call(null,result__6001__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6001__auto__;
}
break;
}
}catch (e25715){if((e25715 instanceof Object))
{var ex__6002__auto__ = e25715;var statearr_25716_25724 = state_25700;(statearr_25716_25724[5] = ex__6002__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25700);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e25715;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6000__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__25725 = state_25700;
state_25700 = G__25725;
continue;
}
} else
{return ret_value__6000__auto__;
}
break;
}
});
state_machine__5999__auto__ = function(state_25700){
switch(arguments.length){
case 0:
return state_machine__5999__auto____0.call(this);
case 1:
return state_machine__5999__auto____1.call(this,state_25700);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5999__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5999__auto____0;
state_machine__5999__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5999__auto____1;
return state_machine__5999__auto__;
})()
;})(switch__5998__auto__))
})();var state__6070__auto__ = (function (){var statearr_25717 = f__6069__auto__.call(null);(statearr_25717[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6068__auto__);
return statearr_25717;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__6068__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6069__auto__ = (function (){var switch__5998__auto__ = (function (state_25787){var state_val_25788 = (state_25787[1]);if((state_val_25788 === 1))
{var inst_25767 = cljs.core.seq.call(null,coll);var inst_25768 = inst_25767;var state_25787__$1 = (function (){var statearr_25789 = state_25787;(statearr_25789[7] = inst_25768);
return statearr_25789;
})();var statearr_25790_25808 = state_25787__$1;(statearr_25790_25808[2] = null);
(statearr_25790_25808[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25788 === 2))
{var inst_25768 = (state_25787[7]);var state_25787__$1 = state_25787;if(cljs.core.truth_(inst_25768))
{var statearr_25791_25809 = state_25787__$1;(statearr_25791_25809[1] = 4);
} else
{var statearr_25792_25810 = state_25787__$1;(statearr_25792_25810[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25788 === 3))
{var inst_25785 = (state_25787[2]);var state_25787__$1 = state_25787;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25787__$1,inst_25785);
} else
{if((state_val_25788 === 4))
{var inst_25768 = (state_25787[7]);var inst_25771 = cljs.core.first.call(null,inst_25768);var state_25787__$1 = state_25787;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25787__$1,7,ch,inst_25771);
} else
{if((state_val_25788 === 5))
{var state_25787__$1 = state_25787;if(cljs.core.truth_(close_QMARK_))
{var statearr_25793_25811 = state_25787__$1;(statearr_25793_25811[1] = 8);
} else
{var statearr_25794_25812 = state_25787__$1;(statearr_25794_25812[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25788 === 6))
{var inst_25783 = (state_25787[2]);var state_25787__$1 = state_25787;var statearr_25795_25813 = state_25787__$1;(statearr_25795_25813[2] = inst_25783);
(statearr_25795_25813[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25788 === 7))
{var inst_25768 = (state_25787[7]);var inst_25773 = (state_25787[2]);var inst_25774 = cljs.core.next.call(null,inst_25768);var inst_25768__$1 = inst_25774;var state_25787__$1 = (function (){var statearr_25796 = state_25787;(statearr_25796[8] = inst_25773);
(statearr_25796[7] = inst_25768__$1);
return statearr_25796;
})();var statearr_25797_25814 = state_25787__$1;(statearr_25797_25814[2] = null);
(statearr_25797_25814[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25788 === 8))
{var inst_25778 = cljs.core.async.close_BANG_.call(null,ch);var state_25787__$1 = state_25787;var statearr_25798_25815 = state_25787__$1;(statearr_25798_25815[2] = inst_25778);
(statearr_25798_25815[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25788 === 9))
{var state_25787__$1 = state_25787;var statearr_25799_25816 = state_25787__$1;(statearr_25799_25816[2] = null);
(statearr_25799_25816[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25788 === 10))
{var inst_25781 = (state_25787[2]);var state_25787__$1 = state_25787;var statearr_25800_25817 = state_25787__$1;(statearr_25800_25817[2] = inst_25781);
(statearr_25800_25817[1] = 6);
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
var state_machine__5999__auto____0 = (function (){var statearr_25804 = [null,null,null,null,null,null,null,null,null];(statearr_25804[0] = state_machine__5999__auto__);
(statearr_25804[1] = 1);
return statearr_25804;
});
var state_machine__5999__auto____1 = (function (state_25787){while(true){
var ret_value__6000__auto__ = (function (){try{while(true){
var result__6001__auto__ = switch__5998__auto__.call(null,state_25787);if(cljs.core.keyword_identical_QMARK_.call(null,result__6001__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6001__auto__;
}
break;
}
}catch (e25805){if((e25805 instanceof Object))
{var ex__6002__auto__ = e25805;var statearr_25806_25818 = state_25787;(statearr_25806_25818[5] = ex__6002__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25787);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e25805;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6000__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__25819 = state_25787;
state_25787 = G__25819;
continue;
}
} else
{return ret_value__6000__auto__;
}
break;
}
});
state_machine__5999__auto__ = function(state_25787){
switch(arguments.length){
case 0:
return state_machine__5999__auto____0.call(this);
case 1:
return state_machine__5999__auto____1.call(this,state_25787);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5999__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5999__auto____0;
state_machine__5999__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5999__auto____1;
return state_machine__5999__auto__;
})()
;})(switch__5998__auto__))
})();var state__6070__auto__ = (function (){var statearr_25807 = f__6069__auto__.call(null);(statearr_25807[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6068__auto__);
return statearr_25807;
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
cljs.core.async.Mux = (function (){var obj25821 = {};return obj25821;
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
cljs.core.async.Mult = (function (){var obj25823 = {};return obj25823;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t26047 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t26047 = (function (cs,ch,mult,meta26048){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta26048 = meta26048;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26047.cljs$lang$type = true;
cljs.core.async.t26047.cljs$lang$ctorStr = "cljs.core.async/t26047";
cljs.core.async.t26047.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t26047");
});})(cs))
;
cljs.core.async.t26047.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t26047.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t26047.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t26047.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t26047.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t26047.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t26047.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_26049){var self__ = this;
var _26049__$1 = this;return self__.meta26048;
});})(cs))
;
cljs.core.async.t26047.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_26049,meta26048__$1){var self__ = this;
var _26049__$1 = this;return (new cljs.core.async.t26047(self__.cs,self__.ch,self__.mult,meta26048__$1));
});})(cs))
;
cljs.core.async.__GT_t26047 = ((function (cs){
return (function __GT_t26047(cs__$1,ch__$1,mult__$1,meta26048){return (new cljs.core.async.t26047(cs__$1,ch__$1,mult__$1,meta26048));
});})(cs))
;
}
return (new cljs.core.async.t26047(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__6068__auto___26270 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6069__auto__ = (function (){var switch__5998__auto__ = (function (state_26184){var state_val_26185 = (state_26184[1]);if((state_val_26185 === 32))
{var inst_26128 = (state_26184[7]);var inst_26052 = (state_26184[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_26184,31,Object,null,30);var inst_26135 = cljs.core.async.put_BANG_.call(null,inst_26128,inst_26052,done);var state_26184__$1 = state_26184;var statearr_26186_26271 = state_26184__$1;(statearr_26186_26271[2] = inst_26135);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26184__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26185 === 1))
{var state_26184__$1 = state_26184;var statearr_26187_26272 = state_26184__$1;(statearr_26187_26272[2] = null);
(statearr_26187_26272[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26185 === 33))
{var inst_26141 = (state_26184[9]);var inst_26143 = cljs.core.chunked_seq_QMARK_.call(null,inst_26141);var state_26184__$1 = state_26184;if(inst_26143)
{var statearr_26188_26273 = state_26184__$1;(statearr_26188_26273[1] = 36);
} else
{var statearr_26189_26274 = state_26184__$1;(statearr_26189_26274[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26185 === 2))
{var state_26184__$1 = state_26184;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26184__$1,4,ch);
} else
{if((state_val_26185 === 34))
{var state_26184__$1 = state_26184;var statearr_26190_26275 = state_26184__$1;(statearr_26190_26275[2] = null);
(statearr_26190_26275[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26185 === 3))
{var inst_26182 = (state_26184[2]);var state_26184__$1 = state_26184;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26184__$1,inst_26182);
} else
{if((state_val_26185 === 35))
{var inst_26166 = (state_26184[2]);var state_26184__$1 = state_26184;var statearr_26191_26276 = state_26184__$1;(statearr_26191_26276[2] = inst_26166);
(statearr_26191_26276[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26185 === 4))
{var inst_26052 = (state_26184[8]);var inst_26052__$1 = (state_26184[2]);var inst_26053 = (inst_26052__$1 == null);var state_26184__$1 = (function (){var statearr_26192 = state_26184;(statearr_26192[8] = inst_26052__$1);
return statearr_26192;
})();if(cljs.core.truth_(inst_26053))
{var statearr_26193_26277 = state_26184__$1;(statearr_26193_26277[1] = 5);
} else
{var statearr_26194_26278 = state_26184__$1;(statearr_26194_26278[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26185 === 36))
{var inst_26141 = (state_26184[9]);var inst_26145 = cljs.core.chunk_first.call(null,inst_26141);var inst_26146 = cljs.core.chunk_rest.call(null,inst_26141);var inst_26147 = cljs.core.count.call(null,inst_26145);var inst_26120 = inst_26146;var inst_26121 = inst_26145;var inst_26122 = inst_26147;var inst_26123 = 0;var state_26184__$1 = (function (){var statearr_26195 = state_26184;(statearr_26195[10] = inst_26122);
(statearr_26195[11] = inst_26123);
(statearr_26195[12] = inst_26121);
(statearr_26195[13] = inst_26120);
return statearr_26195;
})();var statearr_26196_26279 = state_26184__$1;(statearr_26196_26279[2] = null);
(statearr_26196_26279[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26185 === 5))
{var inst_26059 = cljs.core.deref.call(null,cs);var inst_26060 = cljs.core.seq.call(null,inst_26059);var inst_26061 = inst_26060;var inst_26062 = null;var inst_26063 = 0;var inst_26064 = 0;var state_26184__$1 = (function (){var statearr_26197 = state_26184;(statearr_26197[14] = inst_26064);
(statearr_26197[15] = inst_26063);
(statearr_26197[16] = inst_26061);
(statearr_26197[17] = inst_26062);
return statearr_26197;
})();var statearr_26198_26280 = state_26184__$1;(statearr_26198_26280[2] = null);
(statearr_26198_26280[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26185 === 37))
{var inst_26141 = (state_26184[9]);var inst_26150 = cljs.core.first.call(null,inst_26141);var state_26184__$1 = (function (){var statearr_26199 = state_26184;(statearr_26199[18] = inst_26150);
return statearr_26199;
})();var statearr_26200_26281 = state_26184__$1;(statearr_26200_26281[2] = null);
(statearr_26200_26281[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26185 === 6))
{var inst_26112 = (state_26184[19]);var inst_26111 = cljs.core.deref.call(null,cs);var inst_26112__$1 = cljs.core.keys.call(null,inst_26111);var inst_26113 = cljs.core.count.call(null,inst_26112__$1);var inst_26114 = cljs.core.reset_BANG_.call(null,dctr,inst_26113);var inst_26119 = cljs.core.seq.call(null,inst_26112__$1);var inst_26120 = inst_26119;var inst_26121 = null;var inst_26122 = 0;var inst_26123 = 0;var state_26184__$1 = (function (){var statearr_26201 = state_26184;(statearr_26201[20] = inst_26114);
(statearr_26201[19] = inst_26112__$1);
(statearr_26201[10] = inst_26122);
(statearr_26201[11] = inst_26123);
(statearr_26201[12] = inst_26121);
(statearr_26201[13] = inst_26120);
return statearr_26201;
})();var statearr_26202_26282 = state_26184__$1;(statearr_26202_26282[2] = null);
(statearr_26202_26282[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26185 === 38))
{var inst_26163 = (state_26184[2]);var state_26184__$1 = state_26184;var statearr_26203_26283 = state_26184__$1;(statearr_26203_26283[2] = inst_26163);
(statearr_26203_26283[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26185 === 7))
{var inst_26180 = (state_26184[2]);var state_26184__$1 = state_26184;var statearr_26204_26284 = state_26184__$1;(statearr_26204_26284[2] = inst_26180);
(statearr_26204_26284[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26185 === 39))
{var inst_26141 = (state_26184[9]);var inst_26159 = (state_26184[2]);var inst_26160 = cljs.core.next.call(null,inst_26141);var inst_26120 = inst_26160;var inst_26121 = null;var inst_26122 = 0;var inst_26123 = 0;var state_26184__$1 = (function (){var statearr_26205 = state_26184;(statearr_26205[21] = inst_26159);
(statearr_26205[10] = inst_26122);
(statearr_26205[11] = inst_26123);
(statearr_26205[12] = inst_26121);
(statearr_26205[13] = inst_26120);
return statearr_26205;
})();var statearr_26206_26285 = state_26184__$1;(statearr_26206_26285[2] = null);
(statearr_26206_26285[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26185 === 8))
{var inst_26064 = (state_26184[14]);var inst_26063 = (state_26184[15]);var inst_26066 = (inst_26064 < inst_26063);var inst_26067 = inst_26066;var state_26184__$1 = state_26184;if(cljs.core.truth_(inst_26067))
{var statearr_26207_26286 = state_26184__$1;(statearr_26207_26286[1] = 10);
} else
{var statearr_26208_26287 = state_26184__$1;(statearr_26208_26287[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26185 === 40))
{var inst_26150 = (state_26184[18]);var inst_26151 = (state_26184[2]);var inst_26152 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_26153 = cljs.core.async.untap_STAR_.call(null,m,inst_26150);var state_26184__$1 = (function (){var statearr_26209 = state_26184;(statearr_26209[22] = inst_26152);
(statearr_26209[23] = inst_26151);
return statearr_26209;
})();var statearr_26210_26288 = state_26184__$1;(statearr_26210_26288[2] = inst_26153);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26184__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26185 === 9))
{var inst_26109 = (state_26184[2]);var state_26184__$1 = state_26184;var statearr_26211_26289 = state_26184__$1;(statearr_26211_26289[2] = inst_26109);
(statearr_26211_26289[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26185 === 41))
{var inst_26150 = (state_26184[18]);var inst_26052 = (state_26184[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_26184,40,Object,null,39);var inst_26157 = cljs.core.async.put_BANG_.call(null,inst_26150,inst_26052,done);var state_26184__$1 = state_26184;var statearr_26212_26290 = state_26184__$1;(statearr_26212_26290[2] = inst_26157);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26184__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26185 === 10))
{var inst_26064 = (state_26184[14]);var inst_26062 = (state_26184[17]);var inst_26070 = cljs.core._nth.call(null,inst_26062,inst_26064);var inst_26071 = cljs.core.nth.call(null,inst_26070,0,null);var inst_26072 = cljs.core.nth.call(null,inst_26070,1,null);var state_26184__$1 = (function (){var statearr_26213 = state_26184;(statearr_26213[24] = inst_26071);
return statearr_26213;
})();if(cljs.core.truth_(inst_26072))
{var statearr_26214_26291 = state_26184__$1;(statearr_26214_26291[1] = 13);
} else
{var statearr_26215_26292 = state_26184__$1;(statearr_26215_26292[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26185 === 42))
{var state_26184__$1 = state_26184;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26184__$1,45,dchan);
} else
{if((state_val_26185 === 11))
{var inst_26081 = (state_26184[25]);var inst_26061 = (state_26184[16]);var inst_26081__$1 = cljs.core.seq.call(null,inst_26061);var state_26184__$1 = (function (){var statearr_26216 = state_26184;(statearr_26216[25] = inst_26081__$1);
return statearr_26216;
})();if(inst_26081__$1)
{var statearr_26217_26293 = state_26184__$1;(statearr_26217_26293[1] = 16);
} else
{var statearr_26218_26294 = state_26184__$1;(statearr_26218_26294[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26185 === 43))
{var state_26184__$1 = state_26184;var statearr_26219_26295 = state_26184__$1;(statearr_26219_26295[2] = null);
(statearr_26219_26295[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26185 === 12))
{var inst_26107 = (state_26184[2]);var state_26184__$1 = state_26184;var statearr_26220_26296 = state_26184__$1;(statearr_26220_26296[2] = inst_26107);
(statearr_26220_26296[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26185 === 44))
{var inst_26177 = (state_26184[2]);var state_26184__$1 = (function (){var statearr_26221 = state_26184;(statearr_26221[26] = inst_26177);
return statearr_26221;
})();var statearr_26222_26297 = state_26184__$1;(statearr_26222_26297[2] = null);
(statearr_26222_26297[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26185 === 13))
{var inst_26071 = (state_26184[24]);var inst_26074 = cljs.core.async.close_BANG_.call(null,inst_26071);var state_26184__$1 = state_26184;var statearr_26223_26298 = state_26184__$1;(statearr_26223_26298[2] = inst_26074);
(statearr_26223_26298[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26185 === 45))
{var inst_26174 = (state_26184[2]);var state_26184__$1 = state_26184;var statearr_26227_26299 = state_26184__$1;(statearr_26227_26299[2] = inst_26174);
(statearr_26227_26299[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26185 === 14))
{var state_26184__$1 = state_26184;var statearr_26228_26300 = state_26184__$1;(statearr_26228_26300[2] = null);
(statearr_26228_26300[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26185 === 15))
{var inst_26064 = (state_26184[14]);var inst_26063 = (state_26184[15]);var inst_26061 = (state_26184[16]);var inst_26062 = (state_26184[17]);var inst_26077 = (state_26184[2]);var inst_26078 = (inst_26064 + 1);var tmp26224 = inst_26063;var tmp26225 = inst_26061;var tmp26226 = inst_26062;var inst_26061__$1 = tmp26225;var inst_26062__$1 = tmp26226;var inst_26063__$1 = tmp26224;var inst_26064__$1 = inst_26078;var state_26184__$1 = (function (){var statearr_26229 = state_26184;(statearr_26229[14] = inst_26064__$1);
(statearr_26229[15] = inst_26063__$1);
(statearr_26229[27] = inst_26077);
(statearr_26229[16] = inst_26061__$1);
(statearr_26229[17] = inst_26062__$1);
return statearr_26229;
})();var statearr_26230_26301 = state_26184__$1;(statearr_26230_26301[2] = null);
(statearr_26230_26301[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26185 === 16))
{var inst_26081 = (state_26184[25]);var inst_26083 = cljs.core.chunked_seq_QMARK_.call(null,inst_26081);var state_26184__$1 = state_26184;if(inst_26083)
{var statearr_26231_26302 = state_26184__$1;(statearr_26231_26302[1] = 19);
} else
{var statearr_26232_26303 = state_26184__$1;(statearr_26232_26303[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26185 === 17))
{var state_26184__$1 = state_26184;var statearr_26233_26304 = state_26184__$1;(statearr_26233_26304[2] = null);
(statearr_26233_26304[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26185 === 18))
{var inst_26105 = (state_26184[2]);var state_26184__$1 = state_26184;var statearr_26234_26305 = state_26184__$1;(statearr_26234_26305[2] = inst_26105);
(statearr_26234_26305[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26185 === 19))
{var inst_26081 = (state_26184[25]);var inst_26085 = cljs.core.chunk_first.call(null,inst_26081);var inst_26086 = cljs.core.chunk_rest.call(null,inst_26081);var inst_26087 = cljs.core.count.call(null,inst_26085);var inst_26061 = inst_26086;var inst_26062 = inst_26085;var inst_26063 = inst_26087;var inst_26064 = 0;var state_26184__$1 = (function (){var statearr_26235 = state_26184;(statearr_26235[14] = inst_26064);
(statearr_26235[15] = inst_26063);
(statearr_26235[16] = inst_26061);
(statearr_26235[17] = inst_26062);
return statearr_26235;
})();var statearr_26236_26306 = state_26184__$1;(statearr_26236_26306[2] = null);
(statearr_26236_26306[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26185 === 20))
{var inst_26081 = (state_26184[25]);var inst_26091 = cljs.core.first.call(null,inst_26081);var inst_26092 = cljs.core.nth.call(null,inst_26091,0,null);var inst_26093 = cljs.core.nth.call(null,inst_26091,1,null);var state_26184__$1 = (function (){var statearr_26237 = state_26184;(statearr_26237[28] = inst_26092);
return statearr_26237;
})();if(cljs.core.truth_(inst_26093))
{var statearr_26238_26307 = state_26184__$1;(statearr_26238_26307[1] = 22);
} else
{var statearr_26239_26308 = state_26184__$1;(statearr_26239_26308[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26185 === 21))
{var inst_26102 = (state_26184[2]);var state_26184__$1 = state_26184;var statearr_26240_26309 = state_26184__$1;(statearr_26240_26309[2] = inst_26102);
(statearr_26240_26309[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26185 === 22))
{var inst_26092 = (state_26184[28]);var inst_26095 = cljs.core.async.close_BANG_.call(null,inst_26092);var state_26184__$1 = state_26184;var statearr_26241_26310 = state_26184__$1;(statearr_26241_26310[2] = inst_26095);
(statearr_26241_26310[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26185 === 23))
{var state_26184__$1 = state_26184;var statearr_26242_26311 = state_26184__$1;(statearr_26242_26311[2] = null);
(statearr_26242_26311[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26185 === 24))
{var inst_26081 = (state_26184[25]);var inst_26098 = (state_26184[2]);var inst_26099 = cljs.core.next.call(null,inst_26081);var inst_26061 = inst_26099;var inst_26062 = null;var inst_26063 = 0;var inst_26064 = 0;var state_26184__$1 = (function (){var statearr_26243 = state_26184;(statearr_26243[14] = inst_26064);
(statearr_26243[15] = inst_26063);
(statearr_26243[16] = inst_26061);
(statearr_26243[17] = inst_26062);
(statearr_26243[29] = inst_26098);
return statearr_26243;
})();var statearr_26244_26312 = state_26184__$1;(statearr_26244_26312[2] = null);
(statearr_26244_26312[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26185 === 25))
{var inst_26122 = (state_26184[10]);var inst_26123 = (state_26184[11]);var inst_26125 = (inst_26123 < inst_26122);var inst_26126 = inst_26125;var state_26184__$1 = state_26184;if(cljs.core.truth_(inst_26126))
{var statearr_26245_26313 = state_26184__$1;(statearr_26245_26313[1] = 27);
} else
{var statearr_26246_26314 = state_26184__$1;(statearr_26246_26314[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26185 === 26))
{var inst_26112 = (state_26184[19]);var inst_26170 = (state_26184[2]);var inst_26171 = cljs.core.seq.call(null,inst_26112);var state_26184__$1 = (function (){var statearr_26247 = state_26184;(statearr_26247[30] = inst_26170);
return statearr_26247;
})();if(inst_26171)
{var statearr_26248_26315 = state_26184__$1;(statearr_26248_26315[1] = 42);
} else
{var statearr_26249_26316 = state_26184__$1;(statearr_26249_26316[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26185 === 27))
{var inst_26123 = (state_26184[11]);var inst_26121 = (state_26184[12]);var inst_26128 = cljs.core._nth.call(null,inst_26121,inst_26123);var state_26184__$1 = (function (){var statearr_26250 = state_26184;(statearr_26250[7] = inst_26128);
return statearr_26250;
})();var statearr_26251_26317 = state_26184__$1;(statearr_26251_26317[2] = null);
(statearr_26251_26317[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26185 === 28))
{var inst_26141 = (state_26184[9]);var inst_26120 = (state_26184[13]);var inst_26141__$1 = cljs.core.seq.call(null,inst_26120);var state_26184__$1 = (function (){var statearr_26255 = state_26184;(statearr_26255[9] = inst_26141__$1);
return statearr_26255;
})();if(inst_26141__$1)
{var statearr_26256_26318 = state_26184__$1;(statearr_26256_26318[1] = 33);
} else
{var statearr_26257_26319 = state_26184__$1;(statearr_26257_26319[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26185 === 29))
{var inst_26168 = (state_26184[2]);var state_26184__$1 = state_26184;var statearr_26258_26320 = state_26184__$1;(statearr_26258_26320[2] = inst_26168);
(statearr_26258_26320[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26185 === 30))
{var inst_26122 = (state_26184[10]);var inst_26123 = (state_26184[11]);var inst_26121 = (state_26184[12]);var inst_26120 = (state_26184[13]);var inst_26137 = (state_26184[2]);var inst_26138 = (inst_26123 + 1);var tmp26252 = inst_26122;var tmp26253 = inst_26121;var tmp26254 = inst_26120;var inst_26120__$1 = tmp26254;var inst_26121__$1 = tmp26253;var inst_26122__$1 = tmp26252;var inst_26123__$1 = inst_26138;var state_26184__$1 = (function (){var statearr_26259 = state_26184;(statearr_26259[10] = inst_26122__$1);
(statearr_26259[11] = inst_26123__$1);
(statearr_26259[12] = inst_26121__$1);
(statearr_26259[31] = inst_26137);
(statearr_26259[13] = inst_26120__$1);
return statearr_26259;
})();var statearr_26260_26321 = state_26184__$1;(statearr_26260_26321[2] = null);
(statearr_26260_26321[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26185 === 31))
{var inst_26128 = (state_26184[7]);var inst_26129 = (state_26184[2]);var inst_26130 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_26131 = cljs.core.async.untap_STAR_.call(null,m,inst_26128);var state_26184__$1 = (function (){var statearr_26261 = state_26184;(statearr_26261[32] = inst_26129);
(statearr_26261[33] = inst_26130);
return statearr_26261;
})();var statearr_26262_26322 = state_26184__$1;(statearr_26262_26322[2] = inst_26131);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26184__$1);
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
var state_machine__5999__auto____0 = (function (){var statearr_26266 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26266[0] = state_machine__5999__auto__);
(statearr_26266[1] = 1);
return statearr_26266;
});
var state_machine__5999__auto____1 = (function (state_26184){while(true){
var ret_value__6000__auto__ = (function (){try{while(true){
var result__6001__auto__ = switch__5998__auto__.call(null,state_26184);if(cljs.core.keyword_identical_QMARK_.call(null,result__6001__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6001__auto__;
}
break;
}
}catch (e26267){if((e26267 instanceof Object))
{var ex__6002__auto__ = e26267;var statearr_26268_26323 = state_26184;(statearr_26268_26323[5] = ex__6002__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26184);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e26267;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6000__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__26324 = state_26184;
state_26184 = G__26324;
continue;
}
} else
{return ret_value__6000__auto__;
}
break;
}
});
state_machine__5999__auto__ = function(state_26184){
switch(arguments.length){
case 0:
return state_machine__5999__auto____0.call(this);
case 1:
return state_machine__5999__auto____1.call(this,state_26184);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5999__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5999__auto____0;
state_machine__5999__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5999__auto____1;
return state_machine__5999__auto__;
})()
;})(switch__5998__auto__))
})();var state__6070__auto__ = (function (){var statearr_26269 = f__6069__auto__.call(null);(statearr_26269[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6068__auto___26270);
return statearr_26269;
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
cljs.core.async.Mix = (function (){var obj26326 = {};return obj26326;
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
;var m = (function (){if(typeof cljs.core.async.t26436 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t26436 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta26437){
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
this.meta26437 = meta26437;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26436.cljs$lang$type = true;
cljs.core.async.t26436.cljs$lang$ctorStr = "cljs.core.async/t26436";
cljs.core.async.t26436.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t26436");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t26436.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t26436.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t26436.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t26436.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t26436.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t26436.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t26436.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t26436.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t26436.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_26438){var self__ = this;
var _26438__$1 = this;return self__.meta26437;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t26436.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_26438,meta26437__$1){var self__ = this;
var _26438__$1 = this;return (new cljs.core.async.t26436(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta26437__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t26436 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t26436(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta26437){return (new cljs.core.async.t26436(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta26437));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t26436(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__6068__auto___26545 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6069__auto__ = (function (){var switch__5998__auto__ = (function (state_26503){var state_val_26504 = (state_26503[1]);if((state_val_26504 === 1))
{var inst_26442 = (state_26503[7]);var inst_26442__$1 = calc_state.call(null);var inst_26443 = cljs.core.seq_QMARK_.call(null,inst_26442__$1);var state_26503__$1 = (function (){var statearr_26505 = state_26503;(statearr_26505[7] = inst_26442__$1);
return statearr_26505;
})();if(inst_26443)
{var statearr_26506_26546 = state_26503__$1;(statearr_26506_26546[1] = 2);
} else
{var statearr_26507_26547 = state_26503__$1;(statearr_26507_26547[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26504 === 2))
{var inst_26442 = (state_26503[7]);var inst_26445 = cljs.core.apply.call(null,cljs.core.hash_map,inst_26442);var state_26503__$1 = state_26503;var statearr_26508_26548 = state_26503__$1;(statearr_26508_26548[2] = inst_26445);
(statearr_26508_26548[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26504 === 3))
{var inst_26442 = (state_26503[7]);var state_26503__$1 = state_26503;var statearr_26509_26549 = state_26503__$1;(statearr_26509_26549[2] = inst_26442);
(statearr_26509_26549[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26504 === 4))
{var inst_26442 = (state_26503[7]);var inst_26448 = (state_26503[2]);var inst_26449 = cljs.core.get.call(null,inst_26448,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_26450 = cljs.core.get.call(null,inst_26448,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_26451 = cljs.core.get.call(null,inst_26448,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_26452 = inst_26442;var state_26503__$1 = (function (){var statearr_26510 = state_26503;(statearr_26510[8] = inst_26449);
(statearr_26510[9] = inst_26452);
(statearr_26510[10] = inst_26451);
(statearr_26510[11] = inst_26450);
return statearr_26510;
})();var statearr_26511_26550 = state_26503__$1;(statearr_26511_26550[2] = null);
(statearr_26511_26550[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26504 === 5))
{var inst_26452 = (state_26503[9]);var inst_26455 = cljs.core.seq_QMARK_.call(null,inst_26452);var state_26503__$1 = state_26503;if(inst_26455)
{var statearr_26512_26551 = state_26503__$1;(statearr_26512_26551[1] = 7);
} else
{var statearr_26513_26552 = state_26503__$1;(statearr_26513_26552[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26504 === 6))
{var inst_26501 = (state_26503[2]);var state_26503__$1 = state_26503;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26503__$1,inst_26501);
} else
{if((state_val_26504 === 7))
{var inst_26452 = (state_26503[9]);var inst_26457 = cljs.core.apply.call(null,cljs.core.hash_map,inst_26452);var state_26503__$1 = state_26503;var statearr_26514_26553 = state_26503__$1;(statearr_26514_26553[2] = inst_26457);
(statearr_26514_26553[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26504 === 8))
{var inst_26452 = (state_26503[9]);var state_26503__$1 = state_26503;var statearr_26515_26554 = state_26503__$1;(statearr_26515_26554[2] = inst_26452);
(statearr_26515_26554[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26504 === 9))
{var inst_26460 = (state_26503[12]);var inst_26460__$1 = (state_26503[2]);var inst_26461 = cljs.core.get.call(null,inst_26460__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_26462 = cljs.core.get.call(null,inst_26460__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_26463 = cljs.core.get.call(null,inst_26460__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_26503__$1 = (function (){var statearr_26516 = state_26503;(statearr_26516[13] = inst_26463);
(statearr_26516[12] = inst_26460__$1);
(statearr_26516[14] = inst_26462);
return statearr_26516;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_26503__$1,10,inst_26461);
} else
{if((state_val_26504 === 10))
{var inst_26468 = (state_26503[15]);var inst_26467 = (state_26503[16]);var inst_26466 = (state_26503[2]);var inst_26467__$1 = cljs.core.nth.call(null,inst_26466,0,null);var inst_26468__$1 = cljs.core.nth.call(null,inst_26466,1,null);var inst_26469 = (inst_26467__$1 == null);var inst_26470 = cljs.core._EQ_.call(null,inst_26468__$1,change);var inst_26471 = (inst_26469) || (inst_26470);var state_26503__$1 = (function (){var statearr_26517 = state_26503;(statearr_26517[15] = inst_26468__$1);
(statearr_26517[16] = inst_26467__$1);
return statearr_26517;
})();if(cljs.core.truth_(inst_26471))
{var statearr_26518_26555 = state_26503__$1;(statearr_26518_26555[1] = 11);
} else
{var statearr_26519_26556 = state_26503__$1;(statearr_26519_26556[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26504 === 11))
{var inst_26467 = (state_26503[16]);var inst_26473 = (inst_26467 == null);var state_26503__$1 = state_26503;if(cljs.core.truth_(inst_26473))
{var statearr_26520_26557 = state_26503__$1;(statearr_26520_26557[1] = 14);
} else
{var statearr_26521_26558 = state_26503__$1;(statearr_26521_26558[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26504 === 12))
{var inst_26463 = (state_26503[13]);var inst_26468 = (state_26503[15]);var inst_26482 = (state_26503[17]);var inst_26482__$1 = inst_26463.call(null,inst_26468);var state_26503__$1 = (function (){var statearr_26522 = state_26503;(statearr_26522[17] = inst_26482__$1);
return statearr_26522;
})();if(cljs.core.truth_(inst_26482__$1))
{var statearr_26523_26559 = state_26503__$1;(statearr_26523_26559[1] = 17);
} else
{var statearr_26524_26560 = state_26503__$1;(statearr_26524_26560[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26504 === 13))
{var inst_26499 = (state_26503[2]);var state_26503__$1 = state_26503;var statearr_26525_26561 = state_26503__$1;(statearr_26525_26561[2] = inst_26499);
(statearr_26525_26561[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26504 === 14))
{var inst_26468 = (state_26503[15]);var inst_26475 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_26468);var state_26503__$1 = state_26503;var statearr_26526_26562 = state_26503__$1;(statearr_26526_26562[2] = inst_26475);
(statearr_26526_26562[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26504 === 15))
{var state_26503__$1 = state_26503;var statearr_26527_26563 = state_26503__$1;(statearr_26527_26563[2] = null);
(statearr_26527_26563[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26504 === 16))
{var inst_26478 = (state_26503[2]);var inst_26479 = calc_state.call(null);var inst_26452 = inst_26479;var state_26503__$1 = (function (){var statearr_26528 = state_26503;(statearr_26528[18] = inst_26478);
(statearr_26528[9] = inst_26452);
return statearr_26528;
})();var statearr_26529_26564 = state_26503__$1;(statearr_26529_26564[2] = null);
(statearr_26529_26564[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26504 === 17))
{var inst_26482 = (state_26503[17]);var state_26503__$1 = state_26503;var statearr_26530_26565 = state_26503__$1;(statearr_26530_26565[2] = inst_26482);
(statearr_26530_26565[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26504 === 18))
{var inst_26463 = (state_26503[13]);var inst_26462 = (state_26503[14]);var inst_26468 = (state_26503[15]);var inst_26485 = cljs.core.empty_QMARK_.call(null,inst_26463);var inst_26486 = inst_26462.call(null,inst_26468);var inst_26487 = cljs.core.not.call(null,inst_26486);var inst_26488 = (inst_26485) && (inst_26487);var state_26503__$1 = state_26503;var statearr_26531_26566 = state_26503__$1;(statearr_26531_26566[2] = inst_26488);
(statearr_26531_26566[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26504 === 19))
{var inst_26490 = (state_26503[2]);var state_26503__$1 = state_26503;if(cljs.core.truth_(inst_26490))
{var statearr_26532_26567 = state_26503__$1;(statearr_26532_26567[1] = 20);
} else
{var statearr_26533_26568 = state_26503__$1;(statearr_26533_26568[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26504 === 20))
{var inst_26467 = (state_26503[16]);var state_26503__$1 = state_26503;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26503__$1,23,out,inst_26467);
} else
{if((state_val_26504 === 21))
{var state_26503__$1 = state_26503;var statearr_26534_26569 = state_26503__$1;(statearr_26534_26569[2] = null);
(statearr_26534_26569[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26504 === 22))
{var inst_26460 = (state_26503[12]);var inst_26496 = (state_26503[2]);var inst_26452 = inst_26460;var state_26503__$1 = (function (){var statearr_26535 = state_26503;(statearr_26535[9] = inst_26452);
(statearr_26535[19] = inst_26496);
return statearr_26535;
})();var statearr_26536_26570 = state_26503__$1;(statearr_26536_26570[2] = null);
(statearr_26536_26570[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26504 === 23))
{var inst_26493 = (state_26503[2]);var state_26503__$1 = state_26503;var statearr_26537_26571 = state_26503__$1;(statearr_26537_26571[2] = inst_26493);
(statearr_26537_26571[1] = 22);
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
var state_machine__5999__auto____0 = (function (){var statearr_26541 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26541[0] = state_machine__5999__auto__);
(statearr_26541[1] = 1);
return statearr_26541;
});
var state_machine__5999__auto____1 = (function (state_26503){while(true){
var ret_value__6000__auto__ = (function (){try{while(true){
var result__6001__auto__ = switch__5998__auto__.call(null,state_26503);if(cljs.core.keyword_identical_QMARK_.call(null,result__6001__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6001__auto__;
}
break;
}
}catch (e26542){if((e26542 instanceof Object))
{var ex__6002__auto__ = e26542;var statearr_26543_26572 = state_26503;(statearr_26543_26572[5] = ex__6002__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26503);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e26542;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6000__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__26573 = state_26503;
state_26503 = G__26573;
continue;
}
} else
{return ret_value__6000__auto__;
}
break;
}
});
state_machine__5999__auto__ = function(state_26503){
switch(arguments.length){
case 0:
return state_machine__5999__auto____0.call(this);
case 1:
return state_machine__5999__auto____1.call(this,state_26503);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5999__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5999__auto____0;
state_machine__5999__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5999__auto____1;
return state_machine__5999__auto__;
})()
;})(switch__5998__auto__))
})();var state__6070__auto__ = (function (){var statearr_26544 = f__6069__auto__.call(null);(statearr_26544[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6068__auto___26545);
return statearr_26544;
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
cljs.core.async.Pub = (function (){var obj26575 = {};return obj26575;
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
return (function (p1__26576_SHARP_){if(cljs.core.truth_(p1__26576_SHARP_.call(null,topic)))
{return p1__26576_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__26576_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3443__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t26701 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t26701 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta26702){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta26702 = meta26702;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26701.cljs$lang$type = true;
cljs.core.async.t26701.cljs$lang$ctorStr = "cljs.core.async/t26701";
cljs.core.async.t26701.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t26701");
});})(mults,ensure_mult))
;
cljs.core.async.t26701.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t26701.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t26701.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t26701.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t26701.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t26701.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t26701.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t26701.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_26703){var self__ = this;
var _26703__$1 = this;return self__.meta26702;
});})(mults,ensure_mult))
;
cljs.core.async.t26701.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_26703,meta26702__$1){var self__ = this;
var _26703__$1 = this;return (new cljs.core.async.t26701(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta26702__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t26701 = ((function (mults,ensure_mult){
return (function __GT_t26701(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta26702){return (new cljs.core.async.t26701(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta26702));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t26701(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__6068__auto___26825 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6069__auto__ = (function (){var switch__5998__auto__ = (function (state_26777){var state_val_26778 = (state_26777[1]);if((state_val_26778 === 1))
{var state_26777__$1 = state_26777;var statearr_26779_26826 = state_26777__$1;(statearr_26779_26826[2] = null);
(statearr_26779_26826[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26778 === 2))
{var state_26777__$1 = state_26777;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26777__$1,4,ch);
} else
{if((state_val_26778 === 3))
{var inst_26775 = (state_26777[2]);var state_26777__$1 = state_26777;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26777__$1,inst_26775);
} else
{if((state_val_26778 === 4))
{var inst_26706 = (state_26777[7]);var inst_26706__$1 = (state_26777[2]);var inst_26707 = (inst_26706__$1 == null);var state_26777__$1 = (function (){var statearr_26780 = state_26777;(statearr_26780[7] = inst_26706__$1);
return statearr_26780;
})();if(cljs.core.truth_(inst_26707))
{var statearr_26781_26827 = state_26777__$1;(statearr_26781_26827[1] = 5);
} else
{var statearr_26782_26828 = state_26777__$1;(statearr_26782_26828[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26778 === 5))
{var inst_26713 = cljs.core.deref.call(null,mults);var inst_26714 = cljs.core.vals.call(null,inst_26713);var inst_26715 = cljs.core.seq.call(null,inst_26714);var inst_26716 = inst_26715;var inst_26717 = null;var inst_26718 = 0;var inst_26719 = 0;var state_26777__$1 = (function (){var statearr_26783 = state_26777;(statearr_26783[8] = inst_26718);
(statearr_26783[9] = inst_26717);
(statearr_26783[10] = inst_26719);
(statearr_26783[11] = inst_26716);
return statearr_26783;
})();var statearr_26784_26829 = state_26777__$1;(statearr_26784_26829[2] = null);
(statearr_26784_26829[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26778 === 6))
{var inst_26756 = (state_26777[12]);var inst_26754 = (state_26777[13]);var inst_26706 = (state_26777[7]);var inst_26754__$1 = topic_fn.call(null,inst_26706);var inst_26755 = cljs.core.deref.call(null,mults);var inst_26756__$1 = cljs.core.get.call(null,inst_26755,inst_26754__$1);var state_26777__$1 = (function (){var statearr_26785 = state_26777;(statearr_26785[12] = inst_26756__$1);
(statearr_26785[13] = inst_26754__$1);
return statearr_26785;
})();if(cljs.core.truth_(inst_26756__$1))
{var statearr_26786_26830 = state_26777__$1;(statearr_26786_26830[1] = 19);
} else
{var statearr_26787_26831 = state_26777__$1;(statearr_26787_26831[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26778 === 7))
{var inst_26773 = (state_26777[2]);var state_26777__$1 = state_26777;var statearr_26788_26832 = state_26777__$1;(statearr_26788_26832[2] = inst_26773);
(statearr_26788_26832[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26778 === 8))
{var inst_26718 = (state_26777[8]);var inst_26719 = (state_26777[10]);var inst_26721 = (inst_26719 < inst_26718);var inst_26722 = inst_26721;var state_26777__$1 = state_26777;if(cljs.core.truth_(inst_26722))
{var statearr_26792_26833 = state_26777__$1;(statearr_26792_26833[1] = 10);
} else
{var statearr_26793_26834 = state_26777__$1;(statearr_26793_26834[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26778 === 9))
{var inst_26752 = (state_26777[2]);var state_26777__$1 = state_26777;var statearr_26794_26835 = state_26777__$1;(statearr_26794_26835[2] = inst_26752);
(statearr_26794_26835[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26778 === 10))
{var inst_26718 = (state_26777[8]);var inst_26717 = (state_26777[9]);var inst_26719 = (state_26777[10]);var inst_26716 = (state_26777[11]);var inst_26724 = cljs.core._nth.call(null,inst_26717,inst_26719);var inst_26725 = cljs.core.async.muxch_STAR_.call(null,inst_26724);var inst_26726 = cljs.core.async.close_BANG_.call(null,inst_26725);var inst_26727 = (inst_26719 + 1);var tmp26789 = inst_26718;var tmp26790 = inst_26717;var tmp26791 = inst_26716;var inst_26716__$1 = tmp26791;var inst_26717__$1 = tmp26790;var inst_26718__$1 = tmp26789;var inst_26719__$1 = inst_26727;var state_26777__$1 = (function (){var statearr_26795 = state_26777;(statearr_26795[8] = inst_26718__$1);
(statearr_26795[9] = inst_26717__$1);
(statearr_26795[10] = inst_26719__$1);
(statearr_26795[14] = inst_26726);
(statearr_26795[11] = inst_26716__$1);
return statearr_26795;
})();var statearr_26796_26836 = state_26777__$1;(statearr_26796_26836[2] = null);
(statearr_26796_26836[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26778 === 11))
{var inst_26730 = (state_26777[15]);var inst_26716 = (state_26777[11]);var inst_26730__$1 = cljs.core.seq.call(null,inst_26716);var state_26777__$1 = (function (){var statearr_26797 = state_26777;(statearr_26797[15] = inst_26730__$1);
return statearr_26797;
})();if(inst_26730__$1)
{var statearr_26798_26837 = state_26777__$1;(statearr_26798_26837[1] = 13);
} else
{var statearr_26799_26838 = state_26777__$1;(statearr_26799_26838[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26778 === 12))
{var inst_26750 = (state_26777[2]);var state_26777__$1 = state_26777;var statearr_26800_26839 = state_26777__$1;(statearr_26800_26839[2] = inst_26750);
(statearr_26800_26839[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26778 === 13))
{var inst_26730 = (state_26777[15]);var inst_26732 = cljs.core.chunked_seq_QMARK_.call(null,inst_26730);var state_26777__$1 = state_26777;if(inst_26732)
{var statearr_26801_26840 = state_26777__$1;(statearr_26801_26840[1] = 16);
} else
{var statearr_26802_26841 = state_26777__$1;(statearr_26802_26841[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26778 === 14))
{var state_26777__$1 = state_26777;var statearr_26803_26842 = state_26777__$1;(statearr_26803_26842[2] = null);
(statearr_26803_26842[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26778 === 15))
{var inst_26748 = (state_26777[2]);var state_26777__$1 = state_26777;var statearr_26804_26843 = state_26777__$1;(statearr_26804_26843[2] = inst_26748);
(statearr_26804_26843[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26778 === 16))
{var inst_26730 = (state_26777[15]);var inst_26734 = cljs.core.chunk_first.call(null,inst_26730);var inst_26735 = cljs.core.chunk_rest.call(null,inst_26730);var inst_26736 = cljs.core.count.call(null,inst_26734);var inst_26716 = inst_26735;var inst_26717 = inst_26734;var inst_26718 = inst_26736;var inst_26719 = 0;var state_26777__$1 = (function (){var statearr_26805 = state_26777;(statearr_26805[8] = inst_26718);
(statearr_26805[9] = inst_26717);
(statearr_26805[10] = inst_26719);
(statearr_26805[11] = inst_26716);
return statearr_26805;
})();var statearr_26806_26844 = state_26777__$1;(statearr_26806_26844[2] = null);
(statearr_26806_26844[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26778 === 17))
{var inst_26730 = (state_26777[15]);var inst_26739 = cljs.core.first.call(null,inst_26730);var inst_26740 = cljs.core.async.muxch_STAR_.call(null,inst_26739);var inst_26741 = cljs.core.async.close_BANG_.call(null,inst_26740);var inst_26742 = cljs.core.next.call(null,inst_26730);var inst_26716 = inst_26742;var inst_26717 = null;var inst_26718 = 0;var inst_26719 = 0;var state_26777__$1 = (function (){var statearr_26807 = state_26777;(statearr_26807[8] = inst_26718);
(statearr_26807[16] = inst_26741);
(statearr_26807[9] = inst_26717);
(statearr_26807[10] = inst_26719);
(statearr_26807[11] = inst_26716);
return statearr_26807;
})();var statearr_26808_26845 = state_26777__$1;(statearr_26808_26845[2] = null);
(statearr_26808_26845[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26778 === 18))
{var inst_26745 = (state_26777[2]);var state_26777__$1 = state_26777;var statearr_26809_26846 = state_26777__$1;(statearr_26809_26846[2] = inst_26745);
(statearr_26809_26846[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26778 === 19))
{var state_26777__$1 = state_26777;var statearr_26810_26847 = state_26777__$1;(statearr_26810_26847[2] = null);
(statearr_26810_26847[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26778 === 20))
{var state_26777__$1 = state_26777;var statearr_26811_26848 = state_26777__$1;(statearr_26811_26848[2] = null);
(statearr_26811_26848[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26778 === 21))
{var inst_26770 = (state_26777[2]);var state_26777__$1 = (function (){var statearr_26812 = state_26777;(statearr_26812[17] = inst_26770);
return statearr_26812;
})();var statearr_26813_26849 = state_26777__$1;(statearr_26813_26849[2] = null);
(statearr_26813_26849[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26778 === 22))
{var inst_26767 = (state_26777[2]);var state_26777__$1 = state_26777;var statearr_26814_26850 = state_26777__$1;(statearr_26814_26850[2] = inst_26767);
(statearr_26814_26850[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26778 === 23))
{var inst_26754 = (state_26777[13]);var inst_26758 = (state_26777[2]);var inst_26759 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_26754);var state_26777__$1 = (function (){var statearr_26815 = state_26777;(statearr_26815[18] = inst_26758);
return statearr_26815;
})();var statearr_26816_26851 = state_26777__$1;(statearr_26816_26851[2] = inst_26759);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26777__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26778 === 24))
{var inst_26756 = (state_26777[12]);var inst_26706 = (state_26777[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_26777,23,Object,null,22);var inst_26763 = cljs.core.async.muxch_STAR_.call(null,inst_26756);var state_26777__$1 = state_26777;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26777__$1,25,inst_26763,inst_26706);
} else
{if((state_val_26778 === 25))
{var inst_26765 = (state_26777[2]);var state_26777__$1 = state_26777;var statearr_26817_26852 = state_26777__$1;(statearr_26817_26852[2] = inst_26765);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26777__$1);
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
var state_machine__5999__auto____0 = (function (){var statearr_26821 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26821[0] = state_machine__5999__auto__);
(statearr_26821[1] = 1);
return statearr_26821;
});
var state_machine__5999__auto____1 = (function (state_26777){while(true){
var ret_value__6000__auto__ = (function (){try{while(true){
var result__6001__auto__ = switch__5998__auto__.call(null,state_26777);if(cljs.core.keyword_identical_QMARK_.call(null,result__6001__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6001__auto__;
}
break;
}
}catch (e26822){if((e26822 instanceof Object))
{var ex__6002__auto__ = e26822;var statearr_26823_26853 = state_26777;(statearr_26823_26853[5] = ex__6002__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26777);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e26822;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6000__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__26854 = state_26777;
state_26777 = G__26854;
continue;
}
} else
{return ret_value__6000__auto__;
}
break;
}
});
state_machine__5999__auto__ = function(state_26777){
switch(arguments.length){
case 0:
return state_machine__5999__auto____0.call(this);
case 1:
return state_machine__5999__auto____1.call(this,state_26777);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5999__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5999__auto____0;
state_machine__5999__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5999__auto____1;
return state_machine__5999__auto__;
})()
;})(switch__5998__auto__))
})();var state__6070__auto__ = (function (){var statearr_26824 = f__6069__auto__.call(null);(statearr_26824[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6068__auto___26825);
return statearr_26824;
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
,cljs.core.range.call(null,cnt));var c__6068__auto___26991 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6069__auto__ = (function (){var switch__5998__auto__ = (function (state_26961){var state_val_26962 = (state_26961[1]);if((state_val_26962 === 1))
{var state_26961__$1 = state_26961;var statearr_26963_26992 = state_26961__$1;(statearr_26963_26992[2] = null);
(statearr_26963_26992[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26962 === 2))
{var inst_26924 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_26925 = 0;var state_26961__$1 = (function (){var statearr_26964 = state_26961;(statearr_26964[7] = inst_26924);
(statearr_26964[8] = inst_26925);
return statearr_26964;
})();var statearr_26965_26993 = state_26961__$1;(statearr_26965_26993[2] = null);
(statearr_26965_26993[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26962 === 3))
{var inst_26959 = (state_26961[2]);var state_26961__$1 = state_26961;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26961__$1,inst_26959);
} else
{if((state_val_26962 === 4))
{var inst_26925 = (state_26961[8]);var inst_26927 = (inst_26925 < cnt);var state_26961__$1 = state_26961;if(cljs.core.truth_(inst_26927))
{var statearr_26966_26994 = state_26961__$1;(statearr_26966_26994[1] = 6);
} else
{var statearr_26967_26995 = state_26961__$1;(statearr_26967_26995[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26962 === 5))
{var inst_26945 = (state_26961[2]);var state_26961__$1 = (function (){var statearr_26968 = state_26961;(statearr_26968[9] = inst_26945);
return statearr_26968;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26961__$1,12,dchan);
} else
{if((state_val_26962 === 6))
{var state_26961__$1 = state_26961;var statearr_26969_26996 = state_26961__$1;(statearr_26969_26996[2] = null);
(statearr_26969_26996[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26962 === 7))
{var state_26961__$1 = state_26961;var statearr_26970_26997 = state_26961__$1;(statearr_26970_26997[2] = null);
(statearr_26970_26997[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26962 === 8))
{var inst_26943 = (state_26961[2]);var state_26961__$1 = state_26961;var statearr_26971_26998 = state_26961__$1;(statearr_26971_26998[2] = inst_26943);
(statearr_26971_26998[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26962 === 9))
{var inst_26925 = (state_26961[8]);var inst_26938 = (state_26961[2]);var inst_26939 = (inst_26925 + 1);var inst_26925__$1 = inst_26939;var state_26961__$1 = (function (){var statearr_26972 = state_26961;(statearr_26972[10] = inst_26938);
(statearr_26972[8] = inst_26925__$1);
return statearr_26972;
})();var statearr_26973_26999 = state_26961__$1;(statearr_26973_26999[2] = null);
(statearr_26973_26999[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26962 === 10))
{var inst_26929 = (state_26961[2]);var inst_26930 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_26961__$1 = (function (){var statearr_26974 = state_26961;(statearr_26974[11] = inst_26929);
return statearr_26974;
})();var statearr_26975_27000 = state_26961__$1;(statearr_26975_27000[2] = inst_26930);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26961__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26962 === 11))
{var inst_26925 = (state_26961[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_26961,10,Object,null,9);var inst_26934 = chs__$1.call(null,inst_26925);var inst_26935 = done.call(null,inst_26925);var inst_26936 = cljs.core.async.take_BANG_.call(null,inst_26934,inst_26935);var state_26961__$1 = state_26961;var statearr_26976_27001 = state_26961__$1;(statearr_26976_27001[2] = inst_26936);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26961__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26962 === 12))
{var inst_26947 = (state_26961[12]);var inst_26947__$1 = (state_26961[2]);var inst_26948 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_26947__$1);var state_26961__$1 = (function (){var statearr_26977 = state_26961;(statearr_26977[12] = inst_26947__$1);
return statearr_26977;
})();if(cljs.core.truth_(inst_26948))
{var statearr_26978_27002 = state_26961__$1;(statearr_26978_27002[1] = 13);
} else
{var statearr_26979_27003 = state_26961__$1;(statearr_26979_27003[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26962 === 13))
{var inst_26950 = cljs.core.async.close_BANG_.call(null,out);var state_26961__$1 = state_26961;var statearr_26980_27004 = state_26961__$1;(statearr_26980_27004[2] = inst_26950);
(statearr_26980_27004[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26962 === 14))
{var inst_26947 = (state_26961[12]);var inst_26952 = cljs.core.apply.call(null,f,inst_26947);var state_26961__$1 = state_26961;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26961__$1,16,out,inst_26952);
} else
{if((state_val_26962 === 15))
{var inst_26957 = (state_26961[2]);var state_26961__$1 = state_26961;var statearr_26981_27005 = state_26961__$1;(statearr_26981_27005[2] = inst_26957);
(statearr_26981_27005[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26962 === 16))
{var inst_26954 = (state_26961[2]);var state_26961__$1 = (function (){var statearr_26982 = state_26961;(statearr_26982[13] = inst_26954);
return statearr_26982;
})();var statearr_26983_27006 = state_26961__$1;(statearr_26983_27006[2] = null);
(statearr_26983_27006[1] = 2);
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
var state_machine__5999__auto____0 = (function (){var statearr_26987 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26987[0] = state_machine__5999__auto__);
(statearr_26987[1] = 1);
return statearr_26987;
});
var state_machine__5999__auto____1 = (function (state_26961){while(true){
var ret_value__6000__auto__ = (function (){try{while(true){
var result__6001__auto__ = switch__5998__auto__.call(null,state_26961);if(cljs.core.keyword_identical_QMARK_.call(null,result__6001__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6001__auto__;
}
break;
}
}catch (e26988){if((e26988 instanceof Object))
{var ex__6002__auto__ = e26988;var statearr_26989_27007 = state_26961;(statearr_26989_27007[5] = ex__6002__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26961);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e26988;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6000__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__27008 = state_26961;
state_26961 = G__27008;
continue;
}
} else
{return ret_value__6000__auto__;
}
break;
}
});
state_machine__5999__auto__ = function(state_26961){
switch(arguments.length){
case 0:
return state_machine__5999__auto____0.call(this);
case 1:
return state_machine__5999__auto____1.call(this,state_26961);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5999__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5999__auto____0;
state_machine__5999__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5999__auto____1;
return state_machine__5999__auto__;
})()
;})(switch__5998__auto__))
})();var state__6070__auto__ = (function (){var statearr_26990 = f__6069__auto__.call(null);(statearr_26990[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6068__auto___26991);
return statearr_26990;
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6068__auto___27116 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6069__auto__ = (function (){var switch__5998__auto__ = (function (state_27092){var state_val_27093 = (state_27092[1]);if((state_val_27093 === 1))
{var inst_27063 = cljs.core.vec.call(null,chs);var inst_27064 = inst_27063;var state_27092__$1 = (function (){var statearr_27094 = state_27092;(statearr_27094[7] = inst_27064);
return statearr_27094;
})();var statearr_27095_27117 = state_27092__$1;(statearr_27095_27117[2] = null);
(statearr_27095_27117[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27093 === 2))
{var inst_27064 = (state_27092[7]);var inst_27066 = cljs.core.count.call(null,inst_27064);var inst_27067 = (inst_27066 > 0);var state_27092__$1 = state_27092;if(cljs.core.truth_(inst_27067))
{var statearr_27096_27118 = state_27092__$1;(statearr_27096_27118[1] = 4);
} else
{var statearr_27097_27119 = state_27092__$1;(statearr_27097_27119[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27093 === 3))
{var inst_27090 = (state_27092[2]);var state_27092__$1 = state_27092;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27092__$1,inst_27090);
} else
{if((state_val_27093 === 4))
{var inst_27064 = (state_27092[7]);var state_27092__$1 = state_27092;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_27092__$1,7,inst_27064);
} else
{if((state_val_27093 === 5))
{var inst_27086 = cljs.core.async.close_BANG_.call(null,out);var state_27092__$1 = state_27092;var statearr_27098_27120 = state_27092__$1;(statearr_27098_27120[2] = inst_27086);
(statearr_27098_27120[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27093 === 6))
{var inst_27088 = (state_27092[2]);var state_27092__$1 = state_27092;var statearr_27099_27121 = state_27092__$1;(statearr_27099_27121[2] = inst_27088);
(statearr_27099_27121[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27093 === 7))
{var inst_27071 = (state_27092[8]);var inst_27072 = (state_27092[9]);var inst_27071__$1 = (state_27092[2]);var inst_27072__$1 = cljs.core.nth.call(null,inst_27071__$1,0,null);var inst_27073 = cljs.core.nth.call(null,inst_27071__$1,1,null);var inst_27074 = (inst_27072__$1 == null);var state_27092__$1 = (function (){var statearr_27100 = state_27092;(statearr_27100[8] = inst_27071__$1);
(statearr_27100[9] = inst_27072__$1);
(statearr_27100[10] = inst_27073);
return statearr_27100;
})();if(cljs.core.truth_(inst_27074))
{var statearr_27101_27122 = state_27092__$1;(statearr_27101_27122[1] = 8);
} else
{var statearr_27102_27123 = state_27092__$1;(statearr_27102_27123[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27093 === 8))
{var inst_27071 = (state_27092[8]);var inst_27072 = (state_27092[9]);var inst_27073 = (state_27092[10]);var inst_27064 = (state_27092[7]);var inst_27076 = (function (){var c = inst_27073;var v = inst_27072;var vec__27069 = inst_27071;var cs = inst_27064;return ((function (c,v,vec__27069,cs,inst_27071,inst_27072,inst_27073,inst_27064,state_val_27093){
return (function (p1__27009_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__27009_SHARP_);
});
;})(c,v,vec__27069,cs,inst_27071,inst_27072,inst_27073,inst_27064,state_val_27093))
})();var inst_27077 = cljs.core.filterv.call(null,inst_27076,inst_27064);var inst_27064__$1 = inst_27077;var state_27092__$1 = (function (){var statearr_27103 = state_27092;(statearr_27103[7] = inst_27064__$1);
return statearr_27103;
})();var statearr_27104_27124 = state_27092__$1;(statearr_27104_27124[2] = null);
(statearr_27104_27124[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27093 === 9))
{var inst_27072 = (state_27092[9]);var state_27092__$1 = state_27092;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27092__$1,11,out,inst_27072);
} else
{if((state_val_27093 === 10))
{var inst_27084 = (state_27092[2]);var state_27092__$1 = state_27092;var statearr_27106_27125 = state_27092__$1;(statearr_27106_27125[2] = inst_27084);
(statearr_27106_27125[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27093 === 11))
{var inst_27064 = (state_27092[7]);var inst_27081 = (state_27092[2]);var tmp27105 = inst_27064;var inst_27064__$1 = tmp27105;var state_27092__$1 = (function (){var statearr_27107 = state_27092;(statearr_27107[11] = inst_27081);
(statearr_27107[7] = inst_27064__$1);
return statearr_27107;
})();var statearr_27108_27126 = state_27092__$1;(statearr_27108_27126[2] = null);
(statearr_27108_27126[1] = 2);
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
var state_machine__5999__auto____0 = (function (){var statearr_27112 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_27112[0] = state_machine__5999__auto__);
(statearr_27112[1] = 1);
return statearr_27112;
});
var state_machine__5999__auto____1 = (function (state_27092){while(true){
var ret_value__6000__auto__ = (function (){try{while(true){
var result__6001__auto__ = switch__5998__auto__.call(null,state_27092);if(cljs.core.keyword_identical_QMARK_.call(null,result__6001__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6001__auto__;
}
break;
}
}catch (e27113){if((e27113 instanceof Object))
{var ex__6002__auto__ = e27113;var statearr_27114_27127 = state_27092;(statearr_27114_27127[5] = ex__6002__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27092);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e27113;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6000__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__27128 = state_27092;
state_27092 = G__27128;
continue;
}
} else
{return ret_value__6000__auto__;
}
break;
}
});
state_machine__5999__auto__ = function(state_27092){
switch(arguments.length){
case 0:
return state_machine__5999__auto____0.call(this);
case 1:
return state_machine__5999__auto____1.call(this,state_27092);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5999__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5999__auto____0;
state_machine__5999__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5999__auto____1;
return state_machine__5999__auto__;
})()
;})(switch__5998__auto__))
})();var state__6070__auto__ = (function (){var statearr_27115 = f__6069__auto__.call(null);(statearr_27115[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6068__auto___27116);
return statearr_27115;
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6068__auto___27221 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6069__auto__ = (function (){var switch__5998__auto__ = (function (state_27198){var state_val_27199 = (state_27198[1]);if((state_val_27199 === 1))
{var inst_27175 = 0;var state_27198__$1 = (function (){var statearr_27200 = state_27198;(statearr_27200[7] = inst_27175);
return statearr_27200;
})();var statearr_27201_27222 = state_27198__$1;(statearr_27201_27222[2] = null);
(statearr_27201_27222[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27199 === 2))
{var inst_27175 = (state_27198[7]);var inst_27177 = (inst_27175 < n);var state_27198__$1 = state_27198;if(cljs.core.truth_(inst_27177))
{var statearr_27202_27223 = state_27198__$1;(statearr_27202_27223[1] = 4);
} else
{var statearr_27203_27224 = state_27198__$1;(statearr_27203_27224[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27199 === 3))
{var inst_27195 = (state_27198[2]);var inst_27196 = cljs.core.async.close_BANG_.call(null,out);var state_27198__$1 = (function (){var statearr_27204 = state_27198;(statearr_27204[8] = inst_27195);
return statearr_27204;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27198__$1,inst_27196);
} else
{if((state_val_27199 === 4))
{var state_27198__$1 = state_27198;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27198__$1,7,ch);
} else
{if((state_val_27199 === 5))
{var state_27198__$1 = state_27198;var statearr_27205_27225 = state_27198__$1;(statearr_27205_27225[2] = null);
(statearr_27205_27225[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27199 === 6))
{var inst_27193 = (state_27198[2]);var state_27198__$1 = state_27198;var statearr_27206_27226 = state_27198__$1;(statearr_27206_27226[2] = inst_27193);
(statearr_27206_27226[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27199 === 7))
{var inst_27180 = (state_27198[9]);var inst_27180__$1 = (state_27198[2]);var inst_27181 = (inst_27180__$1 == null);var inst_27182 = cljs.core.not.call(null,inst_27181);var state_27198__$1 = (function (){var statearr_27207 = state_27198;(statearr_27207[9] = inst_27180__$1);
return statearr_27207;
})();if(inst_27182)
{var statearr_27208_27227 = state_27198__$1;(statearr_27208_27227[1] = 8);
} else
{var statearr_27209_27228 = state_27198__$1;(statearr_27209_27228[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27199 === 8))
{var inst_27180 = (state_27198[9]);var state_27198__$1 = state_27198;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27198__$1,11,out,inst_27180);
} else
{if((state_val_27199 === 9))
{var state_27198__$1 = state_27198;var statearr_27210_27229 = state_27198__$1;(statearr_27210_27229[2] = null);
(statearr_27210_27229[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27199 === 10))
{var inst_27190 = (state_27198[2]);var state_27198__$1 = state_27198;var statearr_27211_27230 = state_27198__$1;(statearr_27211_27230[2] = inst_27190);
(statearr_27211_27230[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27199 === 11))
{var inst_27175 = (state_27198[7]);var inst_27185 = (state_27198[2]);var inst_27186 = (inst_27175 + 1);var inst_27175__$1 = inst_27186;var state_27198__$1 = (function (){var statearr_27212 = state_27198;(statearr_27212[7] = inst_27175__$1);
(statearr_27212[10] = inst_27185);
return statearr_27212;
})();var statearr_27213_27231 = state_27198__$1;(statearr_27213_27231[2] = null);
(statearr_27213_27231[1] = 2);
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
var state_machine__5999__auto____0 = (function (){var statearr_27217 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_27217[0] = state_machine__5999__auto__);
(statearr_27217[1] = 1);
return statearr_27217;
});
var state_machine__5999__auto____1 = (function (state_27198){while(true){
var ret_value__6000__auto__ = (function (){try{while(true){
var result__6001__auto__ = switch__5998__auto__.call(null,state_27198);if(cljs.core.keyword_identical_QMARK_.call(null,result__6001__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6001__auto__;
}
break;
}
}catch (e27218){if((e27218 instanceof Object))
{var ex__6002__auto__ = e27218;var statearr_27219_27232 = state_27198;(statearr_27219_27232[5] = ex__6002__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27198);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e27218;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6000__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__27233 = state_27198;
state_27198 = G__27233;
continue;
}
} else
{return ret_value__6000__auto__;
}
break;
}
});
state_machine__5999__auto__ = function(state_27198){
switch(arguments.length){
case 0:
return state_machine__5999__auto____0.call(this);
case 1:
return state_machine__5999__auto____1.call(this,state_27198);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5999__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5999__auto____0;
state_machine__5999__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5999__auto____1;
return state_machine__5999__auto__;
})()
;})(switch__5998__auto__))
})();var state__6070__auto__ = (function (){var statearr_27220 = f__6069__auto__.call(null);(statearr_27220[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6068__auto___27221);
return statearr_27220;
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6068__auto___27330 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6069__auto__ = (function (){var switch__5998__auto__ = (function (state_27305){var state_val_27306 = (state_27305[1]);if((state_val_27306 === 1))
{var inst_27282 = null;var state_27305__$1 = (function (){var statearr_27307 = state_27305;(statearr_27307[7] = inst_27282);
return statearr_27307;
})();var statearr_27308_27331 = state_27305__$1;(statearr_27308_27331[2] = null);
(statearr_27308_27331[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27306 === 2))
{var state_27305__$1 = state_27305;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27305__$1,4,ch);
} else
{if((state_val_27306 === 3))
{var inst_27302 = (state_27305[2]);var inst_27303 = cljs.core.async.close_BANG_.call(null,out);var state_27305__$1 = (function (){var statearr_27309 = state_27305;(statearr_27309[8] = inst_27302);
return statearr_27309;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27305__$1,inst_27303);
} else
{if((state_val_27306 === 4))
{var inst_27285 = (state_27305[9]);var inst_27285__$1 = (state_27305[2]);var inst_27286 = (inst_27285__$1 == null);var inst_27287 = cljs.core.not.call(null,inst_27286);var state_27305__$1 = (function (){var statearr_27310 = state_27305;(statearr_27310[9] = inst_27285__$1);
return statearr_27310;
})();if(inst_27287)
{var statearr_27311_27332 = state_27305__$1;(statearr_27311_27332[1] = 5);
} else
{var statearr_27312_27333 = state_27305__$1;(statearr_27312_27333[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27306 === 5))
{var inst_27285 = (state_27305[9]);var inst_27282 = (state_27305[7]);var inst_27289 = cljs.core._EQ_.call(null,inst_27285,inst_27282);var state_27305__$1 = state_27305;if(inst_27289)
{var statearr_27313_27334 = state_27305__$1;(statearr_27313_27334[1] = 8);
} else
{var statearr_27314_27335 = state_27305__$1;(statearr_27314_27335[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27306 === 6))
{var state_27305__$1 = state_27305;var statearr_27316_27336 = state_27305__$1;(statearr_27316_27336[2] = null);
(statearr_27316_27336[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27306 === 7))
{var inst_27300 = (state_27305[2]);var state_27305__$1 = state_27305;var statearr_27317_27337 = state_27305__$1;(statearr_27317_27337[2] = inst_27300);
(statearr_27317_27337[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27306 === 8))
{var inst_27282 = (state_27305[7]);var tmp27315 = inst_27282;var inst_27282__$1 = tmp27315;var state_27305__$1 = (function (){var statearr_27318 = state_27305;(statearr_27318[7] = inst_27282__$1);
return statearr_27318;
})();var statearr_27319_27338 = state_27305__$1;(statearr_27319_27338[2] = null);
(statearr_27319_27338[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27306 === 9))
{var inst_27285 = (state_27305[9]);var state_27305__$1 = state_27305;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27305__$1,11,out,inst_27285);
} else
{if((state_val_27306 === 10))
{var inst_27297 = (state_27305[2]);var state_27305__$1 = state_27305;var statearr_27320_27339 = state_27305__$1;(statearr_27320_27339[2] = inst_27297);
(statearr_27320_27339[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27306 === 11))
{var inst_27285 = (state_27305[9]);var inst_27294 = (state_27305[2]);var inst_27282 = inst_27285;var state_27305__$1 = (function (){var statearr_27321 = state_27305;(statearr_27321[10] = inst_27294);
(statearr_27321[7] = inst_27282);
return statearr_27321;
})();var statearr_27322_27340 = state_27305__$1;(statearr_27322_27340[2] = null);
(statearr_27322_27340[1] = 2);
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
var state_machine__5999__auto____0 = (function (){var statearr_27326 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_27326[0] = state_machine__5999__auto__);
(statearr_27326[1] = 1);
return statearr_27326;
});
var state_machine__5999__auto____1 = (function (state_27305){while(true){
var ret_value__6000__auto__ = (function (){try{while(true){
var result__6001__auto__ = switch__5998__auto__.call(null,state_27305);if(cljs.core.keyword_identical_QMARK_.call(null,result__6001__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6001__auto__;
}
break;
}
}catch (e27327){if((e27327 instanceof Object))
{var ex__6002__auto__ = e27327;var statearr_27328_27341 = state_27305;(statearr_27328_27341[5] = ex__6002__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27305);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e27327;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6000__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__27342 = state_27305;
state_27305 = G__27342;
continue;
}
} else
{return ret_value__6000__auto__;
}
break;
}
});
state_machine__5999__auto__ = function(state_27305){
switch(arguments.length){
case 0:
return state_machine__5999__auto____0.call(this);
case 1:
return state_machine__5999__auto____1.call(this,state_27305);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5999__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5999__auto____0;
state_machine__5999__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5999__auto____1;
return state_machine__5999__auto__;
})()
;})(switch__5998__auto__))
})();var state__6070__auto__ = (function (){var statearr_27329 = f__6069__auto__.call(null);(statearr_27329[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6068__auto___27330);
return statearr_27329;
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6068__auto___27477 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6069__auto__ = (function (){var switch__5998__auto__ = (function (state_27447){var state_val_27448 = (state_27447[1]);if((state_val_27448 === 1))
{var inst_27410 = (new Array(n));var inst_27411 = inst_27410;var inst_27412 = 0;var state_27447__$1 = (function (){var statearr_27449 = state_27447;(statearr_27449[7] = inst_27411);
(statearr_27449[8] = inst_27412);
return statearr_27449;
})();var statearr_27450_27478 = state_27447__$1;(statearr_27450_27478[2] = null);
(statearr_27450_27478[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27448 === 2))
{var state_27447__$1 = state_27447;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27447__$1,4,ch);
} else
{if((state_val_27448 === 3))
{var inst_27445 = (state_27447[2]);var state_27447__$1 = state_27447;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27447__$1,inst_27445);
} else
{if((state_val_27448 === 4))
{var inst_27415 = (state_27447[9]);var inst_27415__$1 = (state_27447[2]);var inst_27416 = (inst_27415__$1 == null);var inst_27417 = cljs.core.not.call(null,inst_27416);var state_27447__$1 = (function (){var statearr_27451 = state_27447;(statearr_27451[9] = inst_27415__$1);
return statearr_27451;
})();if(inst_27417)
{var statearr_27452_27479 = state_27447__$1;(statearr_27452_27479[1] = 5);
} else
{var statearr_27453_27480 = state_27447__$1;(statearr_27453_27480[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27448 === 5))
{var inst_27411 = (state_27447[7]);var inst_27412 = (state_27447[8]);var inst_27420 = (state_27447[10]);var inst_27415 = (state_27447[9]);var inst_27419 = (inst_27411[inst_27412] = inst_27415);var inst_27420__$1 = (inst_27412 + 1);var inst_27421 = (inst_27420__$1 < n);var state_27447__$1 = (function (){var statearr_27454 = state_27447;(statearr_27454[11] = inst_27419);
(statearr_27454[10] = inst_27420__$1);
return statearr_27454;
})();if(cljs.core.truth_(inst_27421))
{var statearr_27455_27481 = state_27447__$1;(statearr_27455_27481[1] = 8);
} else
{var statearr_27456_27482 = state_27447__$1;(statearr_27456_27482[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27448 === 6))
{var inst_27412 = (state_27447[8]);var inst_27433 = (inst_27412 > 0);var state_27447__$1 = state_27447;if(cljs.core.truth_(inst_27433))
{var statearr_27458_27483 = state_27447__$1;(statearr_27458_27483[1] = 12);
} else
{var statearr_27459_27484 = state_27447__$1;(statearr_27459_27484[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27448 === 7))
{var inst_27443 = (state_27447[2]);var state_27447__$1 = state_27447;var statearr_27460_27485 = state_27447__$1;(statearr_27460_27485[2] = inst_27443);
(statearr_27460_27485[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27448 === 8))
{var inst_27411 = (state_27447[7]);var inst_27420 = (state_27447[10]);var tmp27457 = inst_27411;var inst_27411__$1 = tmp27457;var inst_27412 = inst_27420;var state_27447__$1 = (function (){var statearr_27461 = state_27447;(statearr_27461[7] = inst_27411__$1);
(statearr_27461[8] = inst_27412);
return statearr_27461;
})();var statearr_27462_27486 = state_27447__$1;(statearr_27462_27486[2] = null);
(statearr_27462_27486[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27448 === 9))
{var inst_27411 = (state_27447[7]);var inst_27425 = cljs.core.vec.call(null,inst_27411);var state_27447__$1 = state_27447;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27447__$1,11,out,inst_27425);
} else
{if((state_val_27448 === 10))
{var inst_27431 = (state_27447[2]);var state_27447__$1 = state_27447;var statearr_27463_27487 = state_27447__$1;(statearr_27463_27487[2] = inst_27431);
(statearr_27463_27487[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27448 === 11))
{var inst_27427 = (state_27447[2]);var inst_27428 = (new Array(n));var inst_27411 = inst_27428;var inst_27412 = 0;var state_27447__$1 = (function (){var statearr_27464 = state_27447;(statearr_27464[7] = inst_27411);
(statearr_27464[8] = inst_27412);
(statearr_27464[12] = inst_27427);
return statearr_27464;
})();var statearr_27465_27488 = state_27447__$1;(statearr_27465_27488[2] = null);
(statearr_27465_27488[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27448 === 12))
{var inst_27411 = (state_27447[7]);var inst_27435 = cljs.core.vec.call(null,inst_27411);var state_27447__$1 = state_27447;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27447__$1,15,out,inst_27435);
} else
{if((state_val_27448 === 13))
{var state_27447__$1 = state_27447;var statearr_27466_27489 = state_27447__$1;(statearr_27466_27489[2] = null);
(statearr_27466_27489[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27448 === 14))
{var inst_27440 = (state_27447[2]);var inst_27441 = cljs.core.async.close_BANG_.call(null,out);var state_27447__$1 = (function (){var statearr_27467 = state_27447;(statearr_27467[13] = inst_27440);
return statearr_27467;
})();var statearr_27468_27490 = state_27447__$1;(statearr_27468_27490[2] = inst_27441);
(statearr_27468_27490[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27448 === 15))
{var inst_27437 = (state_27447[2]);var state_27447__$1 = state_27447;var statearr_27469_27491 = state_27447__$1;(statearr_27469_27491[2] = inst_27437);
(statearr_27469_27491[1] = 14);
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
var state_machine__5999__auto____0 = (function (){var statearr_27473 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_27473[0] = state_machine__5999__auto__);
(statearr_27473[1] = 1);
return statearr_27473;
});
var state_machine__5999__auto____1 = (function (state_27447){while(true){
var ret_value__6000__auto__ = (function (){try{while(true){
var result__6001__auto__ = switch__5998__auto__.call(null,state_27447);if(cljs.core.keyword_identical_QMARK_.call(null,result__6001__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6001__auto__;
}
break;
}
}catch (e27474){if((e27474 instanceof Object))
{var ex__6002__auto__ = e27474;var statearr_27475_27492 = state_27447;(statearr_27475_27492[5] = ex__6002__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27447);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e27474;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6000__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__27493 = state_27447;
state_27447 = G__27493;
continue;
}
} else
{return ret_value__6000__auto__;
}
break;
}
});
state_machine__5999__auto__ = function(state_27447){
switch(arguments.length){
case 0:
return state_machine__5999__auto____0.call(this);
case 1:
return state_machine__5999__auto____1.call(this,state_27447);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5999__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5999__auto____0;
state_machine__5999__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5999__auto____1;
return state_machine__5999__auto__;
})()
;})(switch__5998__auto__))
})();var state__6070__auto__ = (function (){var statearr_27476 = f__6069__auto__.call(null);(statearr_27476[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6068__auto___27477);
return statearr_27476;
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6068__auto___27636 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6069__auto__ = (function (){var switch__5998__auto__ = (function (state_27606){var state_val_27607 = (state_27606[1]);if((state_val_27607 === 1))
{var inst_27565 = [];var inst_27566 = inst_27565;var inst_27567 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_27606__$1 = (function (){var statearr_27608 = state_27606;(statearr_27608[7] = inst_27567);
(statearr_27608[8] = inst_27566);
return statearr_27608;
})();var statearr_27609_27637 = state_27606__$1;(statearr_27609_27637[2] = null);
(statearr_27609_27637[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27607 === 2))
{var state_27606__$1 = state_27606;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27606__$1,4,ch);
} else
{if((state_val_27607 === 3))
{var inst_27604 = (state_27606[2]);var state_27606__$1 = state_27606;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27606__$1,inst_27604);
} else
{if((state_val_27607 === 4))
{var inst_27570 = (state_27606[9]);var inst_27570__$1 = (state_27606[2]);var inst_27571 = (inst_27570__$1 == null);var inst_27572 = cljs.core.not.call(null,inst_27571);var state_27606__$1 = (function (){var statearr_27610 = state_27606;(statearr_27610[9] = inst_27570__$1);
return statearr_27610;
})();if(inst_27572)
{var statearr_27611_27638 = state_27606__$1;(statearr_27611_27638[1] = 5);
} else
{var statearr_27612_27639 = state_27606__$1;(statearr_27612_27639[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27607 === 5))
{var inst_27567 = (state_27606[7]);var inst_27574 = (state_27606[10]);var inst_27570 = (state_27606[9]);var inst_27574__$1 = f.call(null,inst_27570);var inst_27575 = cljs.core._EQ_.call(null,inst_27574__$1,inst_27567);var inst_27576 = cljs.core.keyword_identical_QMARK_.call(null,inst_27567,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_27577 = (inst_27575) || (inst_27576);var state_27606__$1 = (function (){var statearr_27613 = state_27606;(statearr_27613[10] = inst_27574__$1);
return statearr_27613;
})();if(cljs.core.truth_(inst_27577))
{var statearr_27614_27640 = state_27606__$1;(statearr_27614_27640[1] = 8);
} else
{var statearr_27615_27641 = state_27606__$1;(statearr_27615_27641[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27607 === 6))
{var inst_27566 = (state_27606[8]);var inst_27591 = inst_27566.length;var inst_27592 = (inst_27591 > 0);var state_27606__$1 = state_27606;if(cljs.core.truth_(inst_27592))
{var statearr_27617_27642 = state_27606__$1;(statearr_27617_27642[1] = 12);
} else
{var statearr_27618_27643 = state_27606__$1;(statearr_27618_27643[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27607 === 7))
{var inst_27602 = (state_27606[2]);var state_27606__$1 = state_27606;var statearr_27619_27644 = state_27606__$1;(statearr_27619_27644[2] = inst_27602);
(statearr_27619_27644[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27607 === 8))
{var inst_27566 = (state_27606[8]);var inst_27574 = (state_27606[10]);var inst_27570 = (state_27606[9]);var inst_27579 = inst_27566.push(inst_27570);var tmp27616 = inst_27566;var inst_27566__$1 = tmp27616;var inst_27567 = inst_27574;var state_27606__$1 = (function (){var statearr_27620 = state_27606;(statearr_27620[7] = inst_27567);
(statearr_27620[8] = inst_27566__$1);
(statearr_27620[11] = inst_27579);
return statearr_27620;
})();var statearr_27621_27645 = state_27606__$1;(statearr_27621_27645[2] = null);
(statearr_27621_27645[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27607 === 9))
{var inst_27566 = (state_27606[8]);var inst_27582 = cljs.core.vec.call(null,inst_27566);var state_27606__$1 = state_27606;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27606__$1,11,out,inst_27582);
} else
{if((state_val_27607 === 10))
{var inst_27589 = (state_27606[2]);var state_27606__$1 = state_27606;var statearr_27622_27646 = state_27606__$1;(statearr_27622_27646[2] = inst_27589);
(statearr_27622_27646[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27607 === 11))
{var inst_27574 = (state_27606[10]);var inst_27570 = (state_27606[9]);var inst_27584 = (state_27606[2]);var inst_27585 = [];var inst_27586 = inst_27585.push(inst_27570);var inst_27566 = inst_27585;var inst_27567 = inst_27574;var state_27606__$1 = (function (){var statearr_27623 = state_27606;(statearr_27623[7] = inst_27567);
(statearr_27623[8] = inst_27566);
(statearr_27623[12] = inst_27586);
(statearr_27623[13] = inst_27584);
return statearr_27623;
})();var statearr_27624_27647 = state_27606__$1;(statearr_27624_27647[2] = null);
(statearr_27624_27647[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27607 === 12))
{var inst_27566 = (state_27606[8]);var inst_27594 = cljs.core.vec.call(null,inst_27566);var state_27606__$1 = state_27606;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27606__$1,15,out,inst_27594);
} else
{if((state_val_27607 === 13))
{var state_27606__$1 = state_27606;var statearr_27625_27648 = state_27606__$1;(statearr_27625_27648[2] = null);
(statearr_27625_27648[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27607 === 14))
{var inst_27599 = (state_27606[2]);var inst_27600 = cljs.core.async.close_BANG_.call(null,out);var state_27606__$1 = (function (){var statearr_27626 = state_27606;(statearr_27626[14] = inst_27599);
return statearr_27626;
})();var statearr_27627_27649 = state_27606__$1;(statearr_27627_27649[2] = inst_27600);
(statearr_27627_27649[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27607 === 15))
{var inst_27596 = (state_27606[2]);var state_27606__$1 = state_27606;var statearr_27628_27650 = state_27606__$1;(statearr_27628_27650[2] = inst_27596);
(statearr_27628_27650[1] = 14);
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
var state_machine__5999__auto____0 = (function (){var statearr_27632 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_27632[0] = state_machine__5999__auto__);
(statearr_27632[1] = 1);
return statearr_27632;
});
var state_machine__5999__auto____1 = (function (state_27606){while(true){
var ret_value__6000__auto__ = (function (){try{while(true){
var result__6001__auto__ = switch__5998__auto__.call(null,state_27606);if(cljs.core.keyword_identical_QMARK_.call(null,result__6001__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6001__auto__;
}
break;
}
}catch (e27633){if((e27633 instanceof Object))
{var ex__6002__auto__ = e27633;var statearr_27634_27651 = state_27606;(statearr_27634_27651[5] = ex__6002__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27606);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e27633;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6000__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__27652 = state_27606;
state_27606 = G__27652;
continue;
}
} else
{return ret_value__6000__auto__;
}
break;
}
});
state_machine__5999__auto__ = function(state_27606){
switch(arguments.length){
case 0:
return state_machine__5999__auto____0.call(this);
case 1:
return state_machine__5999__auto____1.call(this,state_27606);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5999__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5999__auto____0;
state_machine__5999__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5999__auto____1;
return state_machine__5999__auto__;
})()
;})(switch__5998__auto__))
})();var state__6070__auto__ = (function (){var statearr_27635 = f__6069__auto__.call(null);(statearr_27635[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6068__auto___27636);
return statearr_27635;
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
