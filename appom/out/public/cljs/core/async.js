// Compiled by ClojureScript 0.0-2850 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function fn_handler(f){
if(typeof cljs.core.async.t29761 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t29761 = (function (f,fn_handler,meta29762){
this.f = f;
this.fn_handler = fn_handler;
this.meta29762 = meta29762;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t29761.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t29761.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t29761.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t29761.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29763){
var self__ = this;
var _29763__$1 = this;
return self__.meta29762;
});

cljs.core.async.t29761.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29763,meta29762__$1){
var self__ = this;
var _29763__$1 = this;
return (new cljs.core.async.t29761(self__.f,self__.fn_handler,meta29762__$1));
});

cljs.core.async.t29761.cljs$lang$type = true;

cljs.core.async.t29761.cljs$lang$ctorStr = "cljs.core.async/t29761";

cljs.core.async.t29761.cljs$lang$ctorPrWriter = (function (this__4394__auto__,writer__4395__auto__,opt__4396__auto__){
return cljs.core._write.call(null,writer__4395__auto__,"cljs.core.async/t29761");
});

cljs.core.async.__GT_t29761 = (function __GT_t29761(f__$1,fn_handler__$1,meta29762){
return (new cljs.core.async.t29761(f__$1,fn_handler__$1,meta29762));
});

}

return (new cljs.core.async.t29761(f,fn_handler,cljs.core.PersistentArrayMap.EMPTY));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){
var G__29765 = buff;
if(G__29765){
var bit__4488__auto__ = null;
if(cljs.core.truth_((function (){var or__3807__auto__ = bit__4488__auto__;
if(cljs.core.truth_(or__3807__auto__)){
return or__3807__auto__;
} else {
return G__29765.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__29765.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__29765);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__29765);
}
});
/**
* Creates a channel with an optional buffer, an optional transducer (like (map f),
* (filter p) etc or a composition thereof), and an optional exception handler.
* If buf-or-n is a number, will create and use a fixed buffer of that size. If a
* transducer is supplied a buffer must be specified. ex-handler must be a
* fn of one argument - if an exception occurs during transformation it will be called
* with the thrown value as an argument, and any non-nil return value will be placed
* in the channel.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){
return chan.call(null,null);
});
var chan__1 = (function (buf_or_n){
return chan.call(null,buf_or_n,null,null);
});
var chan__2 = (function (buf_or_n,xform){
return chan.call(null,buf_or_n,xform,null);
});
var chan__3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});
chan = function(buf_or_n,xform,ex_handler){
switch(arguments.length){
case 0:
return chan__0.call(this);
case 1:
return chan__1.call(this,buf_or_n);
case 2:
return chan__2.call(this,buf_or_n,xform);
case 3:
return chan__3.call(this,buf_or_n,xform,ex_handler);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chan.cljs$core$IFn$_invoke$arity$0 = chan__0;
chan.cljs$core$IFn$_invoke$arity$1 = chan__1;
chan.cljs$core$IFn$_invoke$arity$2 = chan__2;
chan.cljs$core$IFn$_invoke$arity$3 = chan__3;
return chan;
})()
;
/**
* Returns a channel that will close after msecs
*/
cljs.core.async.timeout = (function timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
* Returns true unless port is already closed
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
* Asynchronously takes a val from port, passing to fn1. Will pass nil
* if closed. If on-caller? (default true) is true, and value is
* immediately available, will call fn1 on calling thread.
* Returns nil.
*/
cljs.core.async.take_BANG_ = (function() {
var take_BANG_ = null;
var take_BANG___2 = (function (port,fn1){
return take_BANG_.call(null,port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_29766 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_29766);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_29766,ret){
return (function (){
return fn1.call(null,val_29766);
});})(val_29766,ret))
);
}
} else {
}

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
cljs.core.async.nop = (function nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
* puts a val into port. nil values are not allowed. Must be called
* inside a (go ...) block. Will park if no buffer space is available.
* Returns true unless port is already closed.
*/
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
* Asynchronously puts a val into port, calling fn0 (if supplied) when
* complete. nil values are not allowed. Will throw if closed. If
* on-caller? (default true) is true, and the put is immediately
* accepted, will call fn0 on calling thread.  Returns nil.
*/
cljs.core.async.put_BANG_ = (function() {
var put_BANG_ = null;
var put_BANG___2 = (function (port,val){
var temp__4404__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4404__auto__)){
var ret = temp__4404__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});
var put_BANG___3 = (function (port,val,fn1){
return put_BANG_.call(null,port,val,fn1,true);
});
var put_BANG___4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4404__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4404__auto__)){
var retb = temp__4404__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4404__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4404__auto__))
);
}

return ret;
} else {
return true;
}
});
put_BANG_ = function(port,val,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return put_BANG___2.call(this,port,val);
case 3:
return put_BANG___3.call(this,port,val,fn1);
case 4:
return put_BANG___4.call(this,port,val,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
put_BANG_.cljs$core$IFn$_invoke$arity$2 = put_BANG___2;
put_BANG_.cljs$core$IFn$_invoke$arity$3 = put_BANG___3;
put_BANG_.cljs$core$IFn$_invoke$arity$4 = put_BANG___4;
return put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function random_array(n){
var a = (new Array(n));
var n__4694__auto___29767 = n;
var x_29768 = (0);
while(true){
if((x_29768 < n__4694__auto___29767)){
(a[x_29768] = (0));

var G__29769 = (x_29768 + (1));
x_29768 = G__29769;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__29770 = (i + (1));
i = G__29770;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t29774 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t29774 = (function (flag,alt_flag,meta29775){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta29775 = meta29775;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t29774.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t29774.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t29774.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t29774.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_29776){
var self__ = this;
var _29776__$1 = this;
return self__.meta29775;
});})(flag))
;

cljs.core.async.t29774.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_29776,meta29775__$1){
var self__ = this;
var _29776__$1 = this;
return (new cljs.core.async.t29774(self__.flag,self__.alt_flag,meta29775__$1));
});})(flag))
;

cljs.core.async.t29774.cljs$lang$type = true;

cljs.core.async.t29774.cljs$lang$ctorStr = "cljs.core.async/t29774";

cljs.core.async.t29774.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4394__auto__,writer__4395__auto__,opt__4396__auto__){
return cljs.core._write.call(null,writer__4395__auto__,"cljs.core.async/t29774");
});})(flag))
;

cljs.core.async.__GT_t29774 = ((function (flag){
return (function __GT_t29774(flag__$1,alt_flag__$1,meta29775){
return (new cljs.core.async.t29774(flag__$1,alt_flag__$1,meta29775));
});})(flag))
;

}

return (new cljs.core.async.t29774(flag,alt_flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){
if(typeof cljs.core.async.t29780 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t29780 = (function (cb,flag,alt_handler,meta29781){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta29781 = meta29781;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t29780.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t29780.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t29780.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t29780.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29782){
var self__ = this;
var _29782__$1 = this;
return self__.meta29781;
});

cljs.core.async.t29780.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29782,meta29781__$1){
var self__ = this;
var _29782__$1 = this;
return (new cljs.core.async.t29780(self__.cb,self__.flag,self__.alt_handler,meta29781__$1));
});

cljs.core.async.t29780.cljs$lang$type = true;

cljs.core.async.t29780.cljs$lang$ctorStr = "cljs.core.async/t29780";

cljs.core.async.t29780.cljs$lang$ctorPrWriter = (function (this__4394__auto__,writer__4395__auto__,opt__4396__auto__){
return cljs.core._write.call(null,writer__4395__auto__,"cljs.core.async/t29780");
});

cljs.core.async.__GT_t29780 = (function __GT_t29780(cb__$1,flag__$1,alt_handler__$1,meta29781){
return (new cljs.core.async.t29780(cb__$1,flag__$1,alt_handler__$1,meta29781));
});

}

return (new cljs.core.async.t29780(cb,flag,alt_handler,cljs.core.PersistentArrayMap.EMPTY));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__29783_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__29783_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__29784_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__29784_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3807__auto__ = wport;
if(cljs.core.truth_(or__3807__auto__)){
return or__3807__auto__;
} else {
return port;
}
})()], null));
} else {
var G__29785 = (i + (1));
i = G__29785;
continue;
}
} else {
return null;
}
break;
}
})();
var or__3807__auto__ = ret;
if(cljs.core.truth_(or__3807__auto__)){
return or__3807__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4406__auto__ = (function (){var and__3795__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__3795__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__3795__auto__;
}
})();
if(cljs.core.truth_(temp__4406__auto__)){
var got = temp__4406__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
* Completes at most one of several channel operations. Must be called
* inside a (go ...) block. ports is a vector of channel endpoints,
* which can be either a channel to take from or a vector of
* [channel-to-put-to val-to-put], in any combination. Takes will be
* made as if by <!, and puts will be made as if by >!. Unless
* the :priority option is true, if more than one port operation is
* ready a non-deterministic choice will be made. If no operation is
* ready and a :default value is supplied, [default-val :default] will
* be returned, otherwise alts! will park until the first operation to
* become ready completes. Returns [val port] of the completed
* operation, where val is the value taken for takes, and a
* boolean (true unless already closed, as per put!) for puts.
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
var alts_BANG___delegate = function (ports,p__29786){
var map__29788 = p__29786;
var map__29788__$1 = ((cljs.core.seq_QMARK_.call(null,map__29788))?cljs.core.apply.call(null,cljs.core.hash_map,map__29788):map__29788);
var opts = map__29788__$1;
throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__29786 = null;
if (arguments.length > 1) {
var G__29789__i = 0, G__29789__a = new Array(arguments.length -  1);
while (G__29789__i < G__29789__a.length) {G__29789__a[G__29789__i] = arguments[G__29789__i + 1]; ++G__29789__i;}
  p__29786 = new cljs.core.IndexedSeq(G__29789__a,0);
} 
return alts_BANG___delegate.call(this,ports,p__29786);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__29790){
var ports = cljs.core.first(arglist__29790);
var p__29786 = cljs.core.rest(arglist__29790);
return alts_BANG___delegate(ports,p__29786);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel. By default, the to channel will be closed when the from
* channel closes, but can be determined by the close?  parameter. Will
* stop consuming the from channel if the to channel closes
*/
cljs.core.async.pipe = (function() {
var pipe = null;
var pipe__2 = (function (from,to){
return pipe.call(null,from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){
var c__6715__auto___29885 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6715__auto___29885){
return (function (){
var f__6716__auto__ = (function (){var switch__6659__auto__ = ((function (c__6715__auto___29885){
return (function (state_29861){
var state_val_29862 = (state_29861[(1)]);
if((state_val_29862 === (7))){
var inst_29857 = (state_29861[(2)]);
var state_29861__$1 = state_29861;
var statearr_29863_29886 = state_29861__$1;
(statearr_29863_29886[(2)] = inst_29857);

(statearr_29863_29886[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29862 === (1))){
var state_29861__$1 = state_29861;
var statearr_29864_29887 = state_29861__$1;
(statearr_29864_29887[(2)] = null);

(statearr_29864_29887[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29862 === (4))){
var inst_29840 = (state_29861[(7)]);
var inst_29840__$1 = (state_29861[(2)]);
var inst_29841 = (inst_29840__$1 == null);
var state_29861__$1 = (function (){var statearr_29865 = state_29861;
(statearr_29865[(7)] = inst_29840__$1);

return statearr_29865;
})();
if(cljs.core.truth_(inst_29841)){
var statearr_29866_29888 = state_29861__$1;
(statearr_29866_29888[(1)] = (5));

} else {
var statearr_29867_29889 = state_29861__$1;
(statearr_29867_29889[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29862 === (13))){
var state_29861__$1 = state_29861;
var statearr_29868_29890 = state_29861__$1;
(statearr_29868_29890[(2)] = null);

(statearr_29868_29890[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29862 === (6))){
var inst_29840 = (state_29861[(7)]);
var state_29861__$1 = state_29861;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29861__$1,(11),to,inst_29840);
} else {
if((state_val_29862 === (3))){
var inst_29859 = (state_29861[(2)]);
var state_29861__$1 = state_29861;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29861__$1,inst_29859);
} else {
if((state_val_29862 === (12))){
var state_29861__$1 = state_29861;
var statearr_29869_29891 = state_29861__$1;
(statearr_29869_29891[(2)] = null);

(statearr_29869_29891[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29862 === (2))){
var state_29861__$1 = state_29861;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29861__$1,(4),from);
} else {
if((state_val_29862 === (11))){
var inst_29850 = (state_29861[(2)]);
var state_29861__$1 = state_29861;
if(cljs.core.truth_(inst_29850)){
var statearr_29870_29892 = state_29861__$1;
(statearr_29870_29892[(1)] = (12));

} else {
var statearr_29871_29893 = state_29861__$1;
(statearr_29871_29893[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29862 === (9))){
var state_29861__$1 = state_29861;
var statearr_29872_29894 = state_29861__$1;
(statearr_29872_29894[(2)] = null);

(statearr_29872_29894[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29862 === (5))){
var state_29861__$1 = state_29861;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29873_29895 = state_29861__$1;
(statearr_29873_29895[(1)] = (8));

} else {
var statearr_29874_29896 = state_29861__$1;
(statearr_29874_29896[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29862 === (14))){
var inst_29855 = (state_29861[(2)]);
var state_29861__$1 = state_29861;
var statearr_29875_29897 = state_29861__$1;
(statearr_29875_29897[(2)] = inst_29855);

(statearr_29875_29897[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29862 === (10))){
var inst_29847 = (state_29861[(2)]);
var state_29861__$1 = state_29861;
var statearr_29876_29898 = state_29861__$1;
(statearr_29876_29898[(2)] = inst_29847);

(statearr_29876_29898[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29862 === (8))){
var inst_29844 = cljs.core.async.close_BANG_.call(null,to);
var state_29861__$1 = state_29861;
var statearr_29877_29899 = state_29861__$1;
(statearr_29877_29899[(2)] = inst_29844);

(statearr_29877_29899[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});})(c__6715__auto___29885))
;
return ((function (switch__6659__auto__,c__6715__auto___29885){
return (function() {
var state_machine__6660__auto__ = null;
var state_machine__6660__auto____0 = (function (){
var statearr_29881 = [null,null,null,null,null,null,null,null];
(statearr_29881[(0)] = state_machine__6660__auto__);

(statearr_29881[(1)] = (1));

return statearr_29881;
});
var state_machine__6660__auto____1 = (function (state_29861){
while(true){
var ret_value__6661__auto__ = (function (){try{while(true){
var result__6662__auto__ = switch__6659__auto__.call(null,state_29861);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6662__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6662__auto__;
}
break;
}
}catch (e29882){if((e29882 instanceof Object)){
var ex__6663__auto__ = e29882;
var statearr_29883_29900 = state_29861;
(statearr_29883_29900[(5)] = ex__6663__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29861);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29882;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6661__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29901 = state_29861;
state_29861 = G__29901;
continue;
} else {
return ret_value__6661__auto__;
}
break;
}
});
state_machine__6660__auto__ = function(state_29861){
switch(arguments.length){
case 0:
return state_machine__6660__auto____0.call(this);
case 1:
return state_machine__6660__auto____1.call(this,state_29861);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6660__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6660__auto____0;
state_machine__6660__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6660__auto____1;
return state_machine__6660__auto__;
})()
;})(switch__6659__auto__,c__6715__auto___29885))
})();
var state__6717__auto__ = (function (){var statearr_29884 = f__6716__auto__.call(null);
(statearr_29884[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6715__auto___29885);

return statearr_29884;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6717__auto__);
});})(c__6715__auto___29885))
);


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
cljs.core.async.pipeline_STAR_ = (function pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__30085){
var vec__30086 = p__30085;
var v = cljs.core.nth.call(null,vec__30086,(0),null);
var p = cljs.core.nth.call(null,vec__30086,(1),null);
var job = vec__30086;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__6715__auto___30268 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6715__auto___30268,res,vec__30086,v,p,job,jobs,results){
return (function (){
var f__6716__auto__ = (function (){var switch__6659__auto__ = ((function (c__6715__auto___30268,res,vec__30086,v,p,job,jobs,results){
return (function (state_30091){
var state_val_30092 = (state_30091[(1)]);
if((state_val_30092 === (2))){
var inst_30088 = (state_30091[(2)]);
var inst_30089 = cljs.core.async.close_BANG_.call(null,res);
var state_30091__$1 = (function (){var statearr_30093 = state_30091;
(statearr_30093[(7)] = inst_30088);

return statearr_30093;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30091__$1,inst_30089);
} else {
if((state_val_30092 === (1))){
var state_30091__$1 = state_30091;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30091__$1,(2),res,v);
} else {
return null;
}
}
});})(c__6715__auto___30268,res,vec__30086,v,p,job,jobs,results))
;
return ((function (switch__6659__auto__,c__6715__auto___30268,res,vec__30086,v,p,job,jobs,results){
return (function() {
var state_machine__6660__auto__ = null;
var state_machine__6660__auto____0 = (function (){
var statearr_30097 = [null,null,null,null,null,null,null,null];
(statearr_30097[(0)] = state_machine__6660__auto__);

(statearr_30097[(1)] = (1));

return statearr_30097;
});
var state_machine__6660__auto____1 = (function (state_30091){
while(true){
var ret_value__6661__auto__ = (function (){try{while(true){
var result__6662__auto__ = switch__6659__auto__.call(null,state_30091);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6662__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6662__auto__;
}
break;
}
}catch (e30098){if((e30098 instanceof Object)){
var ex__6663__auto__ = e30098;
var statearr_30099_30269 = state_30091;
(statearr_30099_30269[(5)] = ex__6663__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30091);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30098;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6661__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30270 = state_30091;
state_30091 = G__30270;
continue;
} else {
return ret_value__6661__auto__;
}
break;
}
});
state_machine__6660__auto__ = function(state_30091){
switch(arguments.length){
case 0:
return state_machine__6660__auto____0.call(this);
case 1:
return state_machine__6660__auto____1.call(this,state_30091);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6660__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6660__auto____0;
state_machine__6660__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6660__auto____1;
return state_machine__6660__auto__;
})()
;})(switch__6659__auto__,c__6715__auto___30268,res,vec__30086,v,p,job,jobs,results))
})();
var state__6717__auto__ = (function (){var statearr_30100 = f__6716__auto__.call(null);
(statearr_30100[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6715__auto___30268);

return statearr_30100;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6717__auto__);
});})(c__6715__auto___30268,res,vec__30086,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__30101){
var vec__30102 = p__30101;
var v = cljs.core.nth.call(null,vec__30102,(0),null);
var p = cljs.core.nth.call(null,vec__30102,(1),null);
var job = vec__30102;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__4694__auto___30271 = n;
var __30272 = (0);
while(true){
if((__30272 < n__4694__auto___30271)){
var G__30103_30273 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__30103_30273) {
case "async":
var c__6715__auto___30275 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__30272,c__6715__auto___30275,G__30103_30273,n__4694__auto___30271,jobs,results,process,async){
return (function (){
var f__6716__auto__ = (function (){var switch__6659__auto__ = ((function (__30272,c__6715__auto___30275,G__30103_30273,n__4694__auto___30271,jobs,results,process,async){
return (function (state_30116){
var state_val_30117 = (state_30116[(1)]);
if((state_val_30117 === (7))){
var inst_30112 = (state_30116[(2)]);
var state_30116__$1 = state_30116;
var statearr_30118_30276 = state_30116__$1;
(statearr_30118_30276[(2)] = inst_30112);

(statearr_30118_30276[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30117 === (6))){
var state_30116__$1 = state_30116;
var statearr_30119_30277 = state_30116__$1;
(statearr_30119_30277[(2)] = null);

(statearr_30119_30277[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30117 === (5))){
var state_30116__$1 = state_30116;
var statearr_30120_30278 = state_30116__$1;
(statearr_30120_30278[(2)] = null);

(statearr_30120_30278[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30117 === (4))){
var inst_30106 = (state_30116[(2)]);
var inst_30107 = async.call(null,inst_30106);
var state_30116__$1 = state_30116;
if(cljs.core.truth_(inst_30107)){
var statearr_30121_30279 = state_30116__$1;
(statearr_30121_30279[(1)] = (5));

} else {
var statearr_30122_30280 = state_30116__$1;
(statearr_30122_30280[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30117 === (3))){
var inst_30114 = (state_30116[(2)]);
var state_30116__$1 = state_30116;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30116__$1,inst_30114);
} else {
if((state_val_30117 === (2))){
var state_30116__$1 = state_30116;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30116__$1,(4),jobs);
} else {
if((state_val_30117 === (1))){
var state_30116__$1 = state_30116;
var statearr_30123_30281 = state_30116__$1;
(statearr_30123_30281[(2)] = null);

(statearr_30123_30281[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__30272,c__6715__auto___30275,G__30103_30273,n__4694__auto___30271,jobs,results,process,async))
;
return ((function (__30272,switch__6659__auto__,c__6715__auto___30275,G__30103_30273,n__4694__auto___30271,jobs,results,process,async){
return (function() {
var state_machine__6660__auto__ = null;
var state_machine__6660__auto____0 = (function (){
var statearr_30127 = [null,null,null,null,null,null,null];
(statearr_30127[(0)] = state_machine__6660__auto__);

(statearr_30127[(1)] = (1));

return statearr_30127;
});
var state_machine__6660__auto____1 = (function (state_30116){
while(true){
var ret_value__6661__auto__ = (function (){try{while(true){
var result__6662__auto__ = switch__6659__auto__.call(null,state_30116);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6662__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6662__auto__;
}
break;
}
}catch (e30128){if((e30128 instanceof Object)){
var ex__6663__auto__ = e30128;
var statearr_30129_30282 = state_30116;
(statearr_30129_30282[(5)] = ex__6663__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30116);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30128;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6661__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30283 = state_30116;
state_30116 = G__30283;
continue;
} else {
return ret_value__6661__auto__;
}
break;
}
});
state_machine__6660__auto__ = function(state_30116){
switch(arguments.length){
case 0:
return state_machine__6660__auto____0.call(this);
case 1:
return state_machine__6660__auto____1.call(this,state_30116);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6660__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6660__auto____0;
state_machine__6660__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6660__auto____1;
return state_machine__6660__auto__;
})()
;})(__30272,switch__6659__auto__,c__6715__auto___30275,G__30103_30273,n__4694__auto___30271,jobs,results,process,async))
})();
var state__6717__auto__ = (function (){var statearr_30130 = f__6716__auto__.call(null);
(statearr_30130[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6715__auto___30275);

return statearr_30130;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6717__auto__);
});})(__30272,c__6715__auto___30275,G__30103_30273,n__4694__auto___30271,jobs,results,process,async))
);


break;
case "compute":
var c__6715__auto___30284 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__30272,c__6715__auto___30284,G__30103_30273,n__4694__auto___30271,jobs,results,process,async){
return (function (){
var f__6716__auto__ = (function (){var switch__6659__auto__ = ((function (__30272,c__6715__auto___30284,G__30103_30273,n__4694__auto___30271,jobs,results,process,async){
return (function (state_30143){
var state_val_30144 = (state_30143[(1)]);
if((state_val_30144 === (7))){
var inst_30139 = (state_30143[(2)]);
var state_30143__$1 = state_30143;
var statearr_30145_30285 = state_30143__$1;
(statearr_30145_30285[(2)] = inst_30139);

(statearr_30145_30285[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30144 === (6))){
var state_30143__$1 = state_30143;
var statearr_30146_30286 = state_30143__$1;
(statearr_30146_30286[(2)] = null);

(statearr_30146_30286[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30144 === (5))){
var state_30143__$1 = state_30143;
var statearr_30147_30287 = state_30143__$1;
(statearr_30147_30287[(2)] = null);

(statearr_30147_30287[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30144 === (4))){
var inst_30133 = (state_30143[(2)]);
var inst_30134 = process.call(null,inst_30133);
var state_30143__$1 = state_30143;
if(cljs.core.truth_(inst_30134)){
var statearr_30148_30288 = state_30143__$1;
(statearr_30148_30288[(1)] = (5));

} else {
var statearr_30149_30289 = state_30143__$1;
(statearr_30149_30289[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30144 === (3))){
var inst_30141 = (state_30143[(2)]);
var state_30143__$1 = state_30143;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30143__$1,inst_30141);
} else {
if((state_val_30144 === (2))){
var state_30143__$1 = state_30143;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30143__$1,(4),jobs);
} else {
if((state_val_30144 === (1))){
var state_30143__$1 = state_30143;
var statearr_30150_30290 = state_30143__$1;
(statearr_30150_30290[(2)] = null);

(statearr_30150_30290[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__30272,c__6715__auto___30284,G__30103_30273,n__4694__auto___30271,jobs,results,process,async))
;
return ((function (__30272,switch__6659__auto__,c__6715__auto___30284,G__30103_30273,n__4694__auto___30271,jobs,results,process,async){
return (function() {
var state_machine__6660__auto__ = null;
var state_machine__6660__auto____0 = (function (){
var statearr_30154 = [null,null,null,null,null,null,null];
(statearr_30154[(0)] = state_machine__6660__auto__);

(statearr_30154[(1)] = (1));

return statearr_30154;
});
var state_machine__6660__auto____1 = (function (state_30143){
while(true){
var ret_value__6661__auto__ = (function (){try{while(true){
var result__6662__auto__ = switch__6659__auto__.call(null,state_30143);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6662__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6662__auto__;
}
break;
}
}catch (e30155){if((e30155 instanceof Object)){
var ex__6663__auto__ = e30155;
var statearr_30156_30291 = state_30143;
(statearr_30156_30291[(5)] = ex__6663__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30143);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30155;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6661__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30292 = state_30143;
state_30143 = G__30292;
continue;
} else {
return ret_value__6661__auto__;
}
break;
}
});
state_machine__6660__auto__ = function(state_30143){
switch(arguments.length){
case 0:
return state_machine__6660__auto____0.call(this);
case 1:
return state_machine__6660__auto____1.call(this,state_30143);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6660__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6660__auto____0;
state_machine__6660__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6660__auto____1;
return state_machine__6660__auto__;
})()
;})(__30272,switch__6659__auto__,c__6715__auto___30284,G__30103_30273,n__4694__auto___30271,jobs,results,process,async))
})();
var state__6717__auto__ = (function (){var statearr_30157 = f__6716__auto__.call(null);
(statearr_30157[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6715__auto___30284);

return statearr_30157;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6717__auto__);
});})(__30272,c__6715__auto___30284,G__30103_30273,n__4694__auto___30271,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__30293 = (__30272 + (1));
__30272 = G__30293;
continue;
} else {
}
break;
}

var c__6715__auto___30294 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6715__auto___30294,jobs,results,process,async){
return (function (){
var f__6716__auto__ = (function (){var switch__6659__auto__ = ((function (c__6715__auto___30294,jobs,results,process,async){
return (function (state_30179){
var state_val_30180 = (state_30179[(1)]);
if((state_val_30180 === (9))){
var inst_30172 = (state_30179[(2)]);
var state_30179__$1 = (function (){var statearr_30181 = state_30179;
(statearr_30181[(7)] = inst_30172);

return statearr_30181;
})();
var statearr_30182_30295 = state_30179__$1;
(statearr_30182_30295[(2)] = null);

(statearr_30182_30295[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30180 === (8))){
var inst_30165 = (state_30179[(8)]);
var inst_30170 = (state_30179[(2)]);
var state_30179__$1 = (function (){var statearr_30183 = state_30179;
(statearr_30183[(9)] = inst_30170);

return statearr_30183;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30179__$1,(9),results,inst_30165);
} else {
if((state_val_30180 === (7))){
var inst_30175 = (state_30179[(2)]);
var state_30179__$1 = state_30179;
var statearr_30184_30296 = state_30179__$1;
(statearr_30184_30296[(2)] = inst_30175);

(statearr_30184_30296[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30180 === (6))){
var inst_30165 = (state_30179[(8)]);
var inst_30160 = (state_30179[(10)]);
var inst_30165__$1 = cljs.core.async.chan.call(null,(1));
var inst_30166 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_30167 = [inst_30160,inst_30165__$1];
var inst_30168 = (new cljs.core.PersistentVector(null,2,(5),inst_30166,inst_30167,null));
var state_30179__$1 = (function (){var statearr_30185 = state_30179;
(statearr_30185[(8)] = inst_30165__$1);

return statearr_30185;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30179__$1,(8),jobs,inst_30168);
} else {
if((state_val_30180 === (5))){
var inst_30163 = cljs.core.async.close_BANG_.call(null,jobs);
var state_30179__$1 = state_30179;
var statearr_30186_30297 = state_30179__$1;
(statearr_30186_30297[(2)] = inst_30163);

(statearr_30186_30297[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30180 === (4))){
var inst_30160 = (state_30179[(10)]);
var inst_30160__$1 = (state_30179[(2)]);
var inst_30161 = (inst_30160__$1 == null);
var state_30179__$1 = (function (){var statearr_30187 = state_30179;
(statearr_30187[(10)] = inst_30160__$1);

return statearr_30187;
})();
if(cljs.core.truth_(inst_30161)){
var statearr_30188_30298 = state_30179__$1;
(statearr_30188_30298[(1)] = (5));

} else {
var statearr_30189_30299 = state_30179__$1;
(statearr_30189_30299[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30180 === (3))){
var inst_30177 = (state_30179[(2)]);
var state_30179__$1 = state_30179;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30179__$1,inst_30177);
} else {
if((state_val_30180 === (2))){
var state_30179__$1 = state_30179;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30179__$1,(4),from);
} else {
if((state_val_30180 === (1))){
var state_30179__$1 = state_30179;
var statearr_30190_30300 = state_30179__$1;
(statearr_30190_30300[(2)] = null);

(statearr_30190_30300[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__6715__auto___30294,jobs,results,process,async))
;
return ((function (switch__6659__auto__,c__6715__auto___30294,jobs,results,process,async){
return (function() {
var state_machine__6660__auto__ = null;
var state_machine__6660__auto____0 = (function (){
var statearr_30194 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30194[(0)] = state_machine__6660__auto__);

(statearr_30194[(1)] = (1));

return statearr_30194;
});
var state_machine__6660__auto____1 = (function (state_30179){
while(true){
var ret_value__6661__auto__ = (function (){try{while(true){
var result__6662__auto__ = switch__6659__auto__.call(null,state_30179);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6662__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6662__auto__;
}
break;
}
}catch (e30195){if((e30195 instanceof Object)){
var ex__6663__auto__ = e30195;
var statearr_30196_30301 = state_30179;
(statearr_30196_30301[(5)] = ex__6663__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30179);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30195;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6661__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30302 = state_30179;
state_30179 = G__30302;
continue;
} else {
return ret_value__6661__auto__;
}
break;
}
});
state_machine__6660__auto__ = function(state_30179){
switch(arguments.length){
case 0:
return state_machine__6660__auto____0.call(this);
case 1:
return state_machine__6660__auto____1.call(this,state_30179);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6660__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6660__auto____0;
state_machine__6660__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6660__auto____1;
return state_machine__6660__auto__;
})()
;})(switch__6659__auto__,c__6715__auto___30294,jobs,results,process,async))
})();
var state__6717__auto__ = (function (){var statearr_30197 = f__6716__auto__.call(null);
(statearr_30197[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6715__auto___30294);

return statearr_30197;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6717__auto__);
});})(c__6715__auto___30294,jobs,results,process,async))
);


var c__6715__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6715__auto__,jobs,results,process,async){
return (function (){
var f__6716__auto__ = (function (){var switch__6659__auto__ = ((function (c__6715__auto__,jobs,results,process,async){
return (function (state_30235){
var state_val_30236 = (state_30235[(1)]);
if((state_val_30236 === (7))){
var inst_30231 = (state_30235[(2)]);
var state_30235__$1 = state_30235;
var statearr_30237_30303 = state_30235__$1;
(statearr_30237_30303[(2)] = inst_30231);

(statearr_30237_30303[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30236 === (20))){
var state_30235__$1 = state_30235;
var statearr_30238_30304 = state_30235__$1;
(statearr_30238_30304[(2)] = null);

(statearr_30238_30304[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30236 === (1))){
var state_30235__$1 = state_30235;
var statearr_30239_30305 = state_30235__$1;
(statearr_30239_30305[(2)] = null);

(statearr_30239_30305[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30236 === (4))){
var inst_30200 = (state_30235[(7)]);
var inst_30200__$1 = (state_30235[(2)]);
var inst_30201 = (inst_30200__$1 == null);
var state_30235__$1 = (function (){var statearr_30240 = state_30235;
(statearr_30240[(7)] = inst_30200__$1);

return statearr_30240;
})();
if(cljs.core.truth_(inst_30201)){
var statearr_30241_30306 = state_30235__$1;
(statearr_30241_30306[(1)] = (5));

} else {
var statearr_30242_30307 = state_30235__$1;
(statearr_30242_30307[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30236 === (15))){
var inst_30213 = (state_30235[(8)]);
var state_30235__$1 = state_30235;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30235__$1,(18),to,inst_30213);
} else {
if((state_val_30236 === (21))){
var inst_30226 = (state_30235[(2)]);
var state_30235__$1 = state_30235;
var statearr_30243_30308 = state_30235__$1;
(statearr_30243_30308[(2)] = inst_30226);

(statearr_30243_30308[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30236 === (13))){
var inst_30228 = (state_30235[(2)]);
var state_30235__$1 = (function (){var statearr_30244 = state_30235;
(statearr_30244[(9)] = inst_30228);

return statearr_30244;
})();
var statearr_30245_30309 = state_30235__$1;
(statearr_30245_30309[(2)] = null);

(statearr_30245_30309[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30236 === (6))){
var inst_30200 = (state_30235[(7)]);
var state_30235__$1 = state_30235;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30235__$1,(11),inst_30200);
} else {
if((state_val_30236 === (17))){
var inst_30221 = (state_30235[(2)]);
var state_30235__$1 = state_30235;
if(cljs.core.truth_(inst_30221)){
var statearr_30246_30310 = state_30235__$1;
(statearr_30246_30310[(1)] = (19));

} else {
var statearr_30247_30311 = state_30235__$1;
(statearr_30247_30311[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30236 === (3))){
var inst_30233 = (state_30235[(2)]);
var state_30235__$1 = state_30235;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30235__$1,inst_30233);
} else {
if((state_val_30236 === (12))){
var inst_30210 = (state_30235[(10)]);
var state_30235__$1 = state_30235;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30235__$1,(14),inst_30210);
} else {
if((state_val_30236 === (2))){
var state_30235__$1 = state_30235;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30235__$1,(4),results);
} else {
if((state_val_30236 === (19))){
var state_30235__$1 = state_30235;
var statearr_30248_30312 = state_30235__$1;
(statearr_30248_30312[(2)] = null);

(statearr_30248_30312[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30236 === (11))){
var inst_30210 = (state_30235[(2)]);
var state_30235__$1 = (function (){var statearr_30249 = state_30235;
(statearr_30249[(10)] = inst_30210);

return statearr_30249;
})();
var statearr_30250_30313 = state_30235__$1;
(statearr_30250_30313[(2)] = null);

(statearr_30250_30313[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30236 === (9))){
var state_30235__$1 = state_30235;
var statearr_30251_30314 = state_30235__$1;
(statearr_30251_30314[(2)] = null);

(statearr_30251_30314[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30236 === (5))){
var state_30235__$1 = state_30235;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30252_30315 = state_30235__$1;
(statearr_30252_30315[(1)] = (8));

} else {
var statearr_30253_30316 = state_30235__$1;
(statearr_30253_30316[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30236 === (14))){
var inst_30215 = (state_30235[(11)]);
var inst_30213 = (state_30235[(8)]);
var inst_30213__$1 = (state_30235[(2)]);
var inst_30214 = (inst_30213__$1 == null);
var inst_30215__$1 = cljs.core.not.call(null,inst_30214);
var state_30235__$1 = (function (){var statearr_30254 = state_30235;
(statearr_30254[(11)] = inst_30215__$1);

(statearr_30254[(8)] = inst_30213__$1);

return statearr_30254;
})();
if(inst_30215__$1){
var statearr_30255_30317 = state_30235__$1;
(statearr_30255_30317[(1)] = (15));

} else {
var statearr_30256_30318 = state_30235__$1;
(statearr_30256_30318[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30236 === (16))){
var inst_30215 = (state_30235[(11)]);
var state_30235__$1 = state_30235;
var statearr_30257_30319 = state_30235__$1;
(statearr_30257_30319[(2)] = inst_30215);

(statearr_30257_30319[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30236 === (10))){
var inst_30207 = (state_30235[(2)]);
var state_30235__$1 = state_30235;
var statearr_30258_30320 = state_30235__$1;
(statearr_30258_30320[(2)] = inst_30207);

(statearr_30258_30320[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30236 === (18))){
var inst_30218 = (state_30235[(2)]);
var state_30235__$1 = state_30235;
var statearr_30259_30321 = state_30235__$1;
(statearr_30259_30321[(2)] = inst_30218);

(statearr_30259_30321[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30236 === (8))){
var inst_30204 = cljs.core.async.close_BANG_.call(null,to);
var state_30235__$1 = state_30235;
var statearr_30260_30322 = state_30235__$1;
(statearr_30260_30322[(2)] = inst_30204);

(statearr_30260_30322[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});})(c__6715__auto__,jobs,results,process,async))
;
return ((function (switch__6659__auto__,c__6715__auto__,jobs,results,process,async){
return (function() {
var state_machine__6660__auto__ = null;
var state_machine__6660__auto____0 = (function (){
var statearr_30264 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30264[(0)] = state_machine__6660__auto__);

(statearr_30264[(1)] = (1));

return statearr_30264;
});
var state_machine__6660__auto____1 = (function (state_30235){
while(true){
var ret_value__6661__auto__ = (function (){try{while(true){
var result__6662__auto__ = switch__6659__auto__.call(null,state_30235);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6662__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6662__auto__;
}
break;
}
}catch (e30265){if((e30265 instanceof Object)){
var ex__6663__auto__ = e30265;
var statearr_30266_30323 = state_30235;
(statearr_30266_30323[(5)] = ex__6663__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30235);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30265;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6661__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30324 = state_30235;
state_30235 = G__30324;
continue;
} else {
return ret_value__6661__auto__;
}
break;
}
});
state_machine__6660__auto__ = function(state_30235){
switch(arguments.length){
case 0:
return state_machine__6660__auto____0.call(this);
case 1:
return state_machine__6660__auto____1.call(this,state_30235);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6660__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6660__auto____0;
state_machine__6660__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6660__auto____1;
return state_machine__6660__auto__;
})()
;})(switch__6659__auto__,c__6715__auto__,jobs,results,process,async))
})();
var state__6717__auto__ = (function (){var statearr_30267 = f__6716__auto__.call(null);
(statearr_30267[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6715__auto__);

return statearr_30267;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6717__auto__);
});})(c__6715__auto__,jobs,results,process,async))
);

return c__6715__auto__;
});
/**
* Takes elements from the from channel and supplies them to the to
* channel, subject to the async function af, with parallelism n. af
* must be a function of two arguments, the first an input value and
* the second a channel on which to place the result(s). af must close!
* the channel before returning.  The presumption is that af will
* return immediately, having launched some asynchronous operation
* whose completion/callback will manipulate the result channel. Outputs
* will be returned in order relative to  the inputs. By default, the to
* channel will be closed when the from channel closes, but can be
* determined by the close?  parameter. Will stop consuming the from
* channel if the to channel closes.
*/
cljs.core.async.pipeline_async = (function() {
var pipeline_async = null;
var pipeline_async__4 = (function (n,to,af,from){
return pipeline_async.call(null,n,to,af,from,true);
});
var pipeline_async__5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});
pipeline_async = function(n,to,af,from,close_QMARK_){
switch(arguments.length){
case 4:
return pipeline_async__4.call(this,n,to,af,from);
case 5:
return pipeline_async__5.call(this,n,to,af,from,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipeline_async.cljs$core$IFn$_invoke$arity$4 = pipeline_async__4;
pipeline_async.cljs$core$IFn$_invoke$arity$5 = pipeline_async__5;
return pipeline_async;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel, subject to the transducer xf, with parallelism n. Because
* it is parallel, the transducer will be applied independently to each
* element, not across elements, and may produce zero or more outputs
* per input.  Outputs will be returned in order relative to the
* inputs. By default, the to channel will be closed when the from
* channel closes, but can be determined by the close?  parameter. Will
* stop consuming the from channel if the to channel closes.
* 
* Note this is supplied for API compatibility with the Clojure version.
* Values of N > 1 will not result in actual concurrency in a
* single-threaded runtime.
*/
cljs.core.async.pipeline = (function() {
var pipeline = null;
var pipeline__4 = (function (n,to,xf,from){
return pipeline.call(null,n,to,xf,from,true);
});
var pipeline__5 = (function (n,to,xf,from,close_QMARK_){
return pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});
var pipeline__6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});
pipeline = function(n,to,xf,from,close_QMARK_,ex_handler){
switch(arguments.length){
case 4:
return pipeline__4.call(this,n,to,xf,from);
case 5:
return pipeline__5.call(this,n,to,xf,from,close_QMARK_);
case 6:
return pipeline__6.call(this,n,to,xf,from,close_QMARK_,ex_handler);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipeline.cljs$core$IFn$_invoke$arity$4 = pipeline__4;
pipeline.cljs$core$IFn$_invoke$arity$5 = pipeline__5;
pipeline.cljs$core$IFn$_invoke$arity$6 = pipeline__6;
return pipeline;
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
var split__2 = (function (p,ch){
return split.call(null,p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__6715__auto___30425 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6715__auto___30425,tc,fc){
return (function (){
var f__6716__auto__ = (function (){var switch__6659__auto__ = ((function (c__6715__auto___30425,tc,fc){
return (function (state_30400){
var state_val_30401 = (state_30400[(1)]);
if((state_val_30401 === (7))){
var inst_30396 = (state_30400[(2)]);
var state_30400__$1 = state_30400;
var statearr_30402_30426 = state_30400__$1;
(statearr_30402_30426[(2)] = inst_30396);

(statearr_30402_30426[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30401 === (1))){
var state_30400__$1 = state_30400;
var statearr_30403_30427 = state_30400__$1;
(statearr_30403_30427[(2)] = null);

(statearr_30403_30427[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30401 === (4))){
var inst_30377 = (state_30400[(7)]);
var inst_30377__$1 = (state_30400[(2)]);
var inst_30378 = (inst_30377__$1 == null);
var state_30400__$1 = (function (){var statearr_30404 = state_30400;
(statearr_30404[(7)] = inst_30377__$1);

return statearr_30404;
})();
if(cljs.core.truth_(inst_30378)){
var statearr_30405_30428 = state_30400__$1;
(statearr_30405_30428[(1)] = (5));

} else {
var statearr_30406_30429 = state_30400__$1;
(statearr_30406_30429[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30401 === (13))){
var state_30400__$1 = state_30400;
var statearr_30407_30430 = state_30400__$1;
(statearr_30407_30430[(2)] = null);

(statearr_30407_30430[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30401 === (6))){
var inst_30377 = (state_30400[(7)]);
var inst_30383 = p.call(null,inst_30377);
var state_30400__$1 = state_30400;
if(cljs.core.truth_(inst_30383)){
var statearr_30408_30431 = state_30400__$1;
(statearr_30408_30431[(1)] = (9));

} else {
var statearr_30409_30432 = state_30400__$1;
(statearr_30409_30432[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30401 === (3))){
var inst_30398 = (state_30400[(2)]);
var state_30400__$1 = state_30400;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30400__$1,inst_30398);
} else {
if((state_val_30401 === (12))){
var state_30400__$1 = state_30400;
var statearr_30410_30433 = state_30400__$1;
(statearr_30410_30433[(2)] = null);

(statearr_30410_30433[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30401 === (2))){
var state_30400__$1 = state_30400;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30400__$1,(4),ch);
} else {
if((state_val_30401 === (11))){
var inst_30377 = (state_30400[(7)]);
var inst_30387 = (state_30400[(2)]);
var state_30400__$1 = state_30400;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30400__$1,(8),inst_30387,inst_30377);
} else {
if((state_val_30401 === (9))){
var state_30400__$1 = state_30400;
var statearr_30411_30434 = state_30400__$1;
(statearr_30411_30434[(2)] = tc);

(statearr_30411_30434[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30401 === (5))){
var inst_30380 = cljs.core.async.close_BANG_.call(null,tc);
var inst_30381 = cljs.core.async.close_BANG_.call(null,fc);
var state_30400__$1 = (function (){var statearr_30412 = state_30400;
(statearr_30412[(8)] = inst_30380);

return statearr_30412;
})();
var statearr_30413_30435 = state_30400__$1;
(statearr_30413_30435[(2)] = inst_30381);

(statearr_30413_30435[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30401 === (14))){
var inst_30394 = (state_30400[(2)]);
var state_30400__$1 = state_30400;
var statearr_30414_30436 = state_30400__$1;
(statearr_30414_30436[(2)] = inst_30394);

(statearr_30414_30436[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30401 === (10))){
var state_30400__$1 = state_30400;
var statearr_30415_30437 = state_30400__$1;
(statearr_30415_30437[(2)] = fc);

(statearr_30415_30437[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30401 === (8))){
var inst_30389 = (state_30400[(2)]);
var state_30400__$1 = state_30400;
if(cljs.core.truth_(inst_30389)){
var statearr_30416_30438 = state_30400__$1;
(statearr_30416_30438[(1)] = (12));

} else {
var statearr_30417_30439 = state_30400__$1;
(statearr_30417_30439[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});})(c__6715__auto___30425,tc,fc))
;
return ((function (switch__6659__auto__,c__6715__auto___30425,tc,fc){
return (function() {
var state_machine__6660__auto__ = null;
var state_machine__6660__auto____0 = (function (){
var statearr_30421 = [null,null,null,null,null,null,null,null,null];
(statearr_30421[(0)] = state_machine__6660__auto__);

(statearr_30421[(1)] = (1));

return statearr_30421;
});
var state_machine__6660__auto____1 = (function (state_30400){
while(true){
var ret_value__6661__auto__ = (function (){try{while(true){
var result__6662__auto__ = switch__6659__auto__.call(null,state_30400);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6662__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6662__auto__;
}
break;
}
}catch (e30422){if((e30422 instanceof Object)){
var ex__6663__auto__ = e30422;
var statearr_30423_30440 = state_30400;
(statearr_30423_30440[(5)] = ex__6663__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30400);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30422;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6661__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30441 = state_30400;
state_30400 = G__30441;
continue;
} else {
return ret_value__6661__auto__;
}
break;
}
});
state_machine__6660__auto__ = function(state_30400){
switch(arguments.length){
case 0:
return state_machine__6660__auto____0.call(this);
case 1:
return state_machine__6660__auto____1.call(this,state_30400);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6660__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6660__auto____0;
state_machine__6660__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6660__auto____1;
return state_machine__6660__auto__;
})()
;})(switch__6659__auto__,c__6715__auto___30425,tc,fc))
})();
var state__6717__auto__ = (function (){var statearr_30424 = f__6716__auto__.call(null);
(statearr_30424[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6715__auto___30425);

return statearr_30424;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6717__auto__);
});})(c__6715__auto___30425,tc,fc))
);


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
cljs.core.async.reduce = (function reduce(f,init,ch){
var c__6715__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6715__auto__){
return (function (){
var f__6716__auto__ = (function (){var switch__6659__auto__ = ((function (c__6715__auto__){
return (function (state_30488){
var state_val_30489 = (state_30488[(1)]);
if((state_val_30489 === (7))){
var inst_30484 = (state_30488[(2)]);
var state_30488__$1 = state_30488;
var statearr_30490_30506 = state_30488__$1;
(statearr_30490_30506[(2)] = inst_30484);

(statearr_30490_30506[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30489 === (6))){
var inst_30474 = (state_30488[(7)]);
var inst_30477 = (state_30488[(8)]);
var inst_30481 = f.call(null,inst_30474,inst_30477);
var inst_30474__$1 = inst_30481;
var state_30488__$1 = (function (){var statearr_30491 = state_30488;
(statearr_30491[(7)] = inst_30474__$1);

return statearr_30491;
})();
var statearr_30492_30507 = state_30488__$1;
(statearr_30492_30507[(2)] = null);

(statearr_30492_30507[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30489 === (5))){
var inst_30474 = (state_30488[(7)]);
var state_30488__$1 = state_30488;
var statearr_30493_30508 = state_30488__$1;
(statearr_30493_30508[(2)] = inst_30474);

(statearr_30493_30508[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30489 === (4))){
var inst_30477 = (state_30488[(8)]);
var inst_30477__$1 = (state_30488[(2)]);
var inst_30478 = (inst_30477__$1 == null);
var state_30488__$1 = (function (){var statearr_30494 = state_30488;
(statearr_30494[(8)] = inst_30477__$1);

return statearr_30494;
})();
if(cljs.core.truth_(inst_30478)){
var statearr_30495_30509 = state_30488__$1;
(statearr_30495_30509[(1)] = (5));

} else {
var statearr_30496_30510 = state_30488__$1;
(statearr_30496_30510[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30489 === (3))){
var inst_30486 = (state_30488[(2)]);
var state_30488__$1 = state_30488;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30488__$1,inst_30486);
} else {
if((state_val_30489 === (2))){
var state_30488__$1 = state_30488;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30488__$1,(4),ch);
} else {
if((state_val_30489 === (1))){
var inst_30474 = init;
var state_30488__$1 = (function (){var statearr_30497 = state_30488;
(statearr_30497[(7)] = inst_30474);

return statearr_30497;
})();
var statearr_30498_30511 = state_30488__$1;
(statearr_30498_30511[(2)] = null);

(statearr_30498_30511[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__6715__auto__))
;
return ((function (switch__6659__auto__,c__6715__auto__){
return (function() {
var state_machine__6660__auto__ = null;
var state_machine__6660__auto____0 = (function (){
var statearr_30502 = [null,null,null,null,null,null,null,null,null];
(statearr_30502[(0)] = state_machine__6660__auto__);

(statearr_30502[(1)] = (1));

return statearr_30502;
});
var state_machine__6660__auto____1 = (function (state_30488){
while(true){
var ret_value__6661__auto__ = (function (){try{while(true){
var result__6662__auto__ = switch__6659__auto__.call(null,state_30488);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6662__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6662__auto__;
}
break;
}
}catch (e30503){if((e30503 instanceof Object)){
var ex__6663__auto__ = e30503;
var statearr_30504_30512 = state_30488;
(statearr_30504_30512[(5)] = ex__6663__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30488);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30503;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6661__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30513 = state_30488;
state_30488 = G__30513;
continue;
} else {
return ret_value__6661__auto__;
}
break;
}
});
state_machine__6660__auto__ = function(state_30488){
switch(arguments.length){
case 0:
return state_machine__6660__auto____0.call(this);
case 1:
return state_machine__6660__auto____1.call(this,state_30488);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6660__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6660__auto____0;
state_machine__6660__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6660__auto____1;
return state_machine__6660__auto__;
})()
;})(switch__6659__auto__,c__6715__auto__))
})();
var state__6717__auto__ = (function (){var statearr_30505 = f__6716__auto__.call(null);
(statearr_30505[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6715__auto__);

return statearr_30505;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6717__auto__);
});})(c__6715__auto__))
);

return c__6715__auto__;
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
var onto_chan__2 = (function (ch,coll){
return onto_chan.call(null,ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){
var c__6715__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6715__auto__){
return (function (){
var f__6716__auto__ = (function (){var switch__6659__auto__ = ((function (c__6715__auto__){
return (function (state_30587){
var state_val_30588 = (state_30587[(1)]);
if((state_val_30588 === (7))){
var inst_30569 = (state_30587[(2)]);
var state_30587__$1 = state_30587;
var statearr_30589_30612 = state_30587__$1;
(statearr_30589_30612[(2)] = inst_30569);

(statearr_30589_30612[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30588 === (1))){
var inst_30563 = cljs.core.seq.call(null,coll);
var inst_30564 = inst_30563;
var state_30587__$1 = (function (){var statearr_30590 = state_30587;
(statearr_30590[(7)] = inst_30564);

return statearr_30590;
})();
var statearr_30591_30613 = state_30587__$1;
(statearr_30591_30613[(2)] = null);

(statearr_30591_30613[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30588 === (4))){
var inst_30564 = (state_30587[(7)]);
var inst_30567 = cljs.core.first.call(null,inst_30564);
var state_30587__$1 = state_30587;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30587__$1,(7),ch,inst_30567);
} else {
if((state_val_30588 === (13))){
var inst_30581 = (state_30587[(2)]);
var state_30587__$1 = state_30587;
var statearr_30592_30614 = state_30587__$1;
(statearr_30592_30614[(2)] = inst_30581);

(statearr_30592_30614[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30588 === (6))){
var inst_30572 = (state_30587[(2)]);
var state_30587__$1 = state_30587;
if(cljs.core.truth_(inst_30572)){
var statearr_30593_30615 = state_30587__$1;
(statearr_30593_30615[(1)] = (8));

} else {
var statearr_30594_30616 = state_30587__$1;
(statearr_30594_30616[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30588 === (3))){
var inst_30585 = (state_30587[(2)]);
var state_30587__$1 = state_30587;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30587__$1,inst_30585);
} else {
if((state_val_30588 === (12))){
var state_30587__$1 = state_30587;
var statearr_30595_30617 = state_30587__$1;
(statearr_30595_30617[(2)] = null);

(statearr_30595_30617[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30588 === (2))){
var inst_30564 = (state_30587[(7)]);
var state_30587__$1 = state_30587;
if(cljs.core.truth_(inst_30564)){
var statearr_30596_30618 = state_30587__$1;
(statearr_30596_30618[(1)] = (4));

} else {
var statearr_30597_30619 = state_30587__$1;
(statearr_30597_30619[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30588 === (11))){
var inst_30578 = cljs.core.async.close_BANG_.call(null,ch);
var state_30587__$1 = state_30587;
var statearr_30598_30620 = state_30587__$1;
(statearr_30598_30620[(2)] = inst_30578);

(statearr_30598_30620[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30588 === (9))){
var state_30587__$1 = state_30587;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30599_30621 = state_30587__$1;
(statearr_30599_30621[(1)] = (11));

} else {
var statearr_30600_30622 = state_30587__$1;
(statearr_30600_30622[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30588 === (5))){
var inst_30564 = (state_30587[(7)]);
var state_30587__$1 = state_30587;
var statearr_30601_30623 = state_30587__$1;
(statearr_30601_30623[(2)] = inst_30564);

(statearr_30601_30623[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30588 === (10))){
var inst_30583 = (state_30587[(2)]);
var state_30587__$1 = state_30587;
var statearr_30602_30624 = state_30587__$1;
(statearr_30602_30624[(2)] = inst_30583);

(statearr_30602_30624[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30588 === (8))){
var inst_30564 = (state_30587[(7)]);
var inst_30574 = cljs.core.next.call(null,inst_30564);
var inst_30564__$1 = inst_30574;
var state_30587__$1 = (function (){var statearr_30603 = state_30587;
(statearr_30603[(7)] = inst_30564__$1);

return statearr_30603;
})();
var statearr_30604_30625 = state_30587__$1;
(statearr_30604_30625[(2)] = null);

(statearr_30604_30625[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});})(c__6715__auto__))
;
return ((function (switch__6659__auto__,c__6715__auto__){
return (function() {
var state_machine__6660__auto__ = null;
var state_machine__6660__auto____0 = (function (){
var statearr_30608 = [null,null,null,null,null,null,null,null];
(statearr_30608[(0)] = state_machine__6660__auto__);

(statearr_30608[(1)] = (1));

return statearr_30608;
});
var state_machine__6660__auto____1 = (function (state_30587){
while(true){
var ret_value__6661__auto__ = (function (){try{while(true){
var result__6662__auto__ = switch__6659__auto__.call(null,state_30587);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6662__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6662__auto__;
}
break;
}
}catch (e30609){if((e30609 instanceof Object)){
var ex__6663__auto__ = e30609;
var statearr_30610_30626 = state_30587;
(statearr_30610_30626[(5)] = ex__6663__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30587);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30609;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6661__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30627 = state_30587;
state_30587 = G__30627;
continue;
} else {
return ret_value__6661__auto__;
}
break;
}
});
state_machine__6660__auto__ = function(state_30587){
switch(arguments.length){
case 0:
return state_machine__6660__auto____0.call(this);
case 1:
return state_machine__6660__auto____1.call(this,state_30587);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6660__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6660__auto____0;
state_machine__6660__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6660__auto____1;
return state_machine__6660__auto__;
})()
;})(switch__6659__auto__,c__6715__auto__))
})();
var state__6717__auto__ = (function (){var statearr_30611 = f__6716__auto__.call(null);
(statearr_30611[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6715__auto__);

return statearr_30611;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6717__auto__);
});})(c__6715__auto__))
);

return c__6715__auto__;
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
cljs.core.async.to_chan = (function to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

cljs.core.async.Mux = (function (){var obj30629 = {};
return obj30629;
})();

cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){
if((function (){var and__3795__auto__ = _;
if(and__3795__auto__){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else {
return and__3795__auto__;
}
})()){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4451__auto__ = (((_ == null))?null:_);
return (function (){var or__3807__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4451__auto__)]);
if(or__3807__auto__){
return or__3807__auto__;
} else {
var or__3807__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(or__3807__auto____$1){
return or__3807__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});


cljs.core.async.Mult = (function (){var obj30631 = {};
return obj30631;
})();

cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){
if((function (){var and__3795__auto__ = m;
if(and__3795__auto__){
return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else {
return and__3795__auto__;
}
})()){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4451__auto__ = (((m == null))?null:m);
return (function (){var or__3807__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4451__auto__)]);
if(or__3807__auto__){
return or__3807__auto__;
} else {
var or__3807__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(or__3807__auto____$1){
return or__3807__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});

cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){
if((function (){var and__3795__auto__ = m;
if(and__3795__auto__){
return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else {
return and__3795__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4451__auto__ = (((m == null))?null:m);
return (function (){var or__3807__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4451__auto__)]);
if(or__3807__auto__){
return or__3807__auto__;
} else {
var or__3807__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(or__3807__auto____$1){
return or__3807__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){
if((function (){var and__3795__auto__ = m;
if(and__3795__auto__){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else {
return and__3795__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4451__auto__ = (((m == null))?null:m);
return (function (){var or__3807__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4451__auto__)]);
if(or__3807__auto__){
return or__3807__auto__;
} else {
var or__3807__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(or__3807__auto____$1){
return or__3807__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
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
* If a tap puts to a closed channel, it will be removed from the mult.
*/
cljs.core.async.mult = (function mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t30853 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t30853 = (function (cs,ch,mult,meta30854){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta30854 = meta30854;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t30853.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t30853.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t30853.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t30853.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t30853.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t30853.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t30853.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_30855){
var self__ = this;
var _30855__$1 = this;
return self__.meta30854;
});})(cs))
;

cljs.core.async.t30853.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_30855,meta30854__$1){
var self__ = this;
var _30855__$1 = this;
return (new cljs.core.async.t30853(self__.cs,self__.ch,self__.mult,meta30854__$1));
});})(cs))
;

cljs.core.async.t30853.cljs$lang$type = true;

cljs.core.async.t30853.cljs$lang$ctorStr = "cljs.core.async/t30853";

cljs.core.async.t30853.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4394__auto__,writer__4395__auto__,opt__4396__auto__){
return cljs.core._write.call(null,writer__4395__auto__,"cljs.core.async/t30853");
});})(cs))
;

cljs.core.async.__GT_t30853 = ((function (cs){
return (function __GT_t30853(cs__$1,ch__$1,mult__$1,meta30854){
return (new cljs.core.async.t30853(cs__$1,ch__$1,mult__$1,meta30854));
});})(cs))
;

}

return (new cljs.core.async.t30853(cs,ch,mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__6715__auto___31074 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6715__auto___31074,cs,m,dchan,dctr,done){
return (function (){
var f__6716__auto__ = (function (){var switch__6659__auto__ = ((function (c__6715__auto___31074,cs,m,dchan,dctr,done){
return (function (state_30986){
var state_val_30987 = (state_30986[(1)]);
if((state_val_30987 === (7))){
var inst_30982 = (state_30986[(2)]);
var state_30986__$1 = state_30986;
var statearr_30988_31075 = state_30986__$1;
(statearr_30988_31075[(2)] = inst_30982);

(statearr_30988_31075[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30987 === (20))){
var inst_30887 = (state_30986[(7)]);
var inst_30897 = cljs.core.first.call(null,inst_30887);
var inst_30898 = cljs.core.nth.call(null,inst_30897,(0),null);
var inst_30899 = cljs.core.nth.call(null,inst_30897,(1),null);
var state_30986__$1 = (function (){var statearr_30989 = state_30986;
(statearr_30989[(8)] = inst_30898);

return statearr_30989;
})();
if(cljs.core.truth_(inst_30899)){
var statearr_30990_31076 = state_30986__$1;
(statearr_30990_31076[(1)] = (22));

} else {
var statearr_30991_31077 = state_30986__$1;
(statearr_30991_31077[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30987 === (27))){
var inst_30929 = (state_30986[(9)]);
var inst_30927 = (state_30986[(10)]);
var inst_30934 = (state_30986[(11)]);
var inst_30858 = (state_30986[(12)]);
var inst_30934__$1 = cljs.core._nth.call(null,inst_30927,inst_30929);
var inst_30935 = cljs.core.async.put_BANG_.call(null,inst_30934__$1,inst_30858,done);
var state_30986__$1 = (function (){var statearr_30992 = state_30986;
(statearr_30992[(11)] = inst_30934__$1);

return statearr_30992;
})();
if(cljs.core.truth_(inst_30935)){
var statearr_30993_31078 = state_30986__$1;
(statearr_30993_31078[(1)] = (30));

} else {
var statearr_30994_31079 = state_30986__$1;
(statearr_30994_31079[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30987 === (1))){
var state_30986__$1 = state_30986;
var statearr_30995_31080 = state_30986__$1;
(statearr_30995_31080[(2)] = null);

(statearr_30995_31080[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30987 === (24))){
var inst_30887 = (state_30986[(7)]);
var inst_30904 = (state_30986[(2)]);
var inst_30905 = cljs.core.next.call(null,inst_30887);
var inst_30867 = inst_30905;
var inst_30868 = null;
var inst_30869 = (0);
var inst_30870 = (0);
var state_30986__$1 = (function (){var statearr_30996 = state_30986;
(statearr_30996[(13)] = inst_30867);

(statearr_30996[(14)] = inst_30868);

(statearr_30996[(15)] = inst_30904);

(statearr_30996[(16)] = inst_30870);

(statearr_30996[(17)] = inst_30869);

return statearr_30996;
})();
var statearr_30997_31081 = state_30986__$1;
(statearr_30997_31081[(2)] = null);

(statearr_30997_31081[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30987 === (39))){
var state_30986__$1 = state_30986;
var statearr_31001_31082 = state_30986__$1;
(statearr_31001_31082[(2)] = null);

(statearr_31001_31082[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30987 === (4))){
var inst_30858 = (state_30986[(12)]);
var inst_30858__$1 = (state_30986[(2)]);
var inst_30859 = (inst_30858__$1 == null);
var state_30986__$1 = (function (){var statearr_31002 = state_30986;
(statearr_31002[(12)] = inst_30858__$1);

return statearr_31002;
})();
if(cljs.core.truth_(inst_30859)){
var statearr_31003_31083 = state_30986__$1;
(statearr_31003_31083[(1)] = (5));

} else {
var statearr_31004_31084 = state_30986__$1;
(statearr_31004_31084[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30987 === (15))){
var inst_30867 = (state_30986[(13)]);
var inst_30868 = (state_30986[(14)]);
var inst_30870 = (state_30986[(16)]);
var inst_30869 = (state_30986[(17)]);
var inst_30883 = (state_30986[(2)]);
var inst_30884 = (inst_30870 + (1));
var tmp30998 = inst_30867;
var tmp30999 = inst_30868;
var tmp31000 = inst_30869;
var inst_30867__$1 = tmp30998;
var inst_30868__$1 = tmp30999;
var inst_30869__$1 = tmp31000;
var inst_30870__$1 = inst_30884;
var state_30986__$1 = (function (){var statearr_31005 = state_30986;
(statearr_31005[(18)] = inst_30883);

(statearr_31005[(13)] = inst_30867__$1);

(statearr_31005[(14)] = inst_30868__$1);

(statearr_31005[(16)] = inst_30870__$1);

(statearr_31005[(17)] = inst_30869__$1);

return statearr_31005;
})();
var statearr_31006_31085 = state_30986__$1;
(statearr_31006_31085[(2)] = null);

(statearr_31006_31085[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30987 === (21))){
var inst_30908 = (state_30986[(2)]);
var state_30986__$1 = state_30986;
var statearr_31010_31086 = state_30986__$1;
(statearr_31010_31086[(2)] = inst_30908);

(statearr_31010_31086[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30987 === (31))){
var inst_30934 = (state_30986[(11)]);
var inst_30938 = done.call(null,null);
var inst_30939 = cljs.core.async.untap_STAR_.call(null,m,inst_30934);
var state_30986__$1 = (function (){var statearr_31011 = state_30986;
(statearr_31011[(19)] = inst_30938);

return statearr_31011;
})();
var statearr_31012_31087 = state_30986__$1;
(statearr_31012_31087[(2)] = inst_30939);

(statearr_31012_31087[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30987 === (32))){
var inst_30929 = (state_30986[(9)]);
var inst_30927 = (state_30986[(10)]);
var inst_30928 = (state_30986[(20)]);
var inst_30926 = (state_30986[(21)]);
var inst_30941 = (state_30986[(2)]);
var inst_30942 = (inst_30929 + (1));
var tmp31007 = inst_30927;
var tmp31008 = inst_30928;
var tmp31009 = inst_30926;
var inst_30926__$1 = tmp31009;
var inst_30927__$1 = tmp31007;
var inst_30928__$1 = tmp31008;
var inst_30929__$1 = inst_30942;
var state_30986__$1 = (function (){var statearr_31013 = state_30986;
(statearr_31013[(9)] = inst_30929__$1);

(statearr_31013[(10)] = inst_30927__$1);

(statearr_31013[(22)] = inst_30941);

(statearr_31013[(20)] = inst_30928__$1);

(statearr_31013[(21)] = inst_30926__$1);

return statearr_31013;
})();
var statearr_31014_31088 = state_30986__$1;
(statearr_31014_31088[(2)] = null);

(statearr_31014_31088[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30987 === (40))){
var inst_30954 = (state_30986[(23)]);
var inst_30958 = done.call(null,null);
var inst_30959 = cljs.core.async.untap_STAR_.call(null,m,inst_30954);
var state_30986__$1 = (function (){var statearr_31015 = state_30986;
(statearr_31015[(24)] = inst_30958);

return statearr_31015;
})();
var statearr_31016_31089 = state_30986__$1;
(statearr_31016_31089[(2)] = inst_30959);

(statearr_31016_31089[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30987 === (33))){
var inst_30945 = (state_30986[(25)]);
var inst_30947 = cljs.core.chunked_seq_QMARK_.call(null,inst_30945);
var state_30986__$1 = state_30986;
if(inst_30947){
var statearr_31017_31090 = state_30986__$1;
(statearr_31017_31090[(1)] = (36));

} else {
var statearr_31018_31091 = state_30986__$1;
(statearr_31018_31091[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30987 === (13))){
var inst_30877 = (state_30986[(26)]);
var inst_30880 = cljs.core.async.close_BANG_.call(null,inst_30877);
var state_30986__$1 = state_30986;
var statearr_31019_31092 = state_30986__$1;
(statearr_31019_31092[(2)] = inst_30880);

(statearr_31019_31092[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30987 === (22))){
var inst_30898 = (state_30986[(8)]);
var inst_30901 = cljs.core.async.close_BANG_.call(null,inst_30898);
var state_30986__$1 = state_30986;
var statearr_31020_31093 = state_30986__$1;
(statearr_31020_31093[(2)] = inst_30901);

(statearr_31020_31093[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30987 === (36))){
var inst_30945 = (state_30986[(25)]);
var inst_30949 = cljs.core.chunk_first.call(null,inst_30945);
var inst_30950 = cljs.core.chunk_rest.call(null,inst_30945);
var inst_30951 = cljs.core.count.call(null,inst_30949);
var inst_30926 = inst_30950;
var inst_30927 = inst_30949;
var inst_30928 = inst_30951;
var inst_30929 = (0);
var state_30986__$1 = (function (){var statearr_31021 = state_30986;
(statearr_31021[(9)] = inst_30929);

(statearr_31021[(10)] = inst_30927);

(statearr_31021[(20)] = inst_30928);

(statearr_31021[(21)] = inst_30926);

return statearr_31021;
})();
var statearr_31022_31094 = state_30986__$1;
(statearr_31022_31094[(2)] = null);

(statearr_31022_31094[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30987 === (41))){
var inst_30945 = (state_30986[(25)]);
var inst_30961 = (state_30986[(2)]);
var inst_30962 = cljs.core.next.call(null,inst_30945);
var inst_30926 = inst_30962;
var inst_30927 = null;
var inst_30928 = (0);
var inst_30929 = (0);
var state_30986__$1 = (function (){var statearr_31023 = state_30986;
(statearr_31023[(9)] = inst_30929);

(statearr_31023[(10)] = inst_30927);

(statearr_31023[(20)] = inst_30928);

(statearr_31023[(21)] = inst_30926);

(statearr_31023[(27)] = inst_30961);

return statearr_31023;
})();
var statearr_31024_31095 = state_30986__$1;
(statearr_31024_31095[(2)] = null);

(statearr_31024_31095[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30987 === (43))){
var state_30986__$1 = state_30986;
var statearr_31025_31096 = state_30986__$1;
(statearr_31025_31096[(2)] = null);

(statearr_31025_31096[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30987 === (29))){
var inst_30970 = (state_30986[(2)]);
var state_30986__$1 = state_30986;
var statearr_31026_31097 = state_30986__$1;
(statearr_31026_31097[(2)] = inst_30970);

(statearr_31026_31097[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30987 === (44))){
var inst_30979 = (state_30986[(2)]);
var state_30986__$1 = (function (){var statearr_31027 = state_30986;
(statearr_31027[(28)] = inst_30979);

return statearr_31027;
})();
var statearr_31028_31098 = state_30986__$1;
(statearr_31028_31098[(2)] = null);

(statearr_31028_31098[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30987 === (6))){
var inst_30918 = (state_30986[(29)]);
var inst_30917 = cljs.core.deref.call(null,cs);
var inst_30918__$1 = cljs.core.keys.call(null,inst_30917);
var inst_30919 = cljs.core.count.call(null,inst_30918__$1);
var inst_30920 = cljs.core.reset_BANG_.call(null,dctr,inst_30919);
var inst_30925 = cljs.core.seq.call(null,inst_30918__$1);
var inst_30926 = inst_30925;
var inst_30927 = null;
var inst_30928 = (0);
var inst_30929 = (0);
var state_30986__$1 = (function (){var statearr_31029 = state_30986;
(statearr_31029[(30)] = inst_30920);

(statearr_31029[(9)] = inst_30929);

(statearr_31029[(10)] = inst_30927);

(statearr_31029[(29)] = inst_30918__$1);

(statearr_31029[(20)] = inst_30928);

(statearr_31029[(21)] = inst_30926);

return statearr_31029;
})();
var statearr_31030_31099 = state_30986__$1;
(statearr_31030_31099[(2)] = null);

(statearr_31030_31099[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30987 === (28))){
var inst_30926 = (state_30986[(21)]);
var inst_30945 = (state_30986[(25)]);
var inst_30945__$1 = cljs.core.seq.call(null,inst_30926);
var state_30986__$1 = (function (){var statearr_31031 = state_30986;
(statearr_31031[(25)] = inst_30945__$1);

return statearr_31031;
})();
if(inst_30945__$1){
var statearr_31032_31100 = state_30986__$1;
(statearr_31032_31100[(1)] = (33));

} else {
var statearr_31033_31101 = state_30986__$1;
(statearr_31033_31101[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30987 === (25))){
var inst_30929 = (state_30986[(9)]);
var inst_30928 = (state_30986[(20)]);
var inst_30931 = (inst_30929 < inst_30928);
var inst_30932 = inst_30931;
var state_30986__$1 = state_30986;
if(cljs.core.truth_(inst_30932)){
var statearr_31034_31102 = state_30986__$1;
(statearr_31034_31102[(1)] = (27));

} else {
var statearr_31035_31103 = state_30986__$1;
(statearr_31035_31103[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30987 === (34))){
var state_30986__$1 = state_30986;
var statearr_31036_31104 = state_30986__$1;
(statearr_31036_31104[(2)] = null);

(statearr_31036_31104[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30987 === (17))){
var state_30986__$1 = state_30986;
var statearr_31037_31105 = state_30986__$1;
(statearr_31037_31105[(2)] = null);

(statearr_31037_31105[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30987 === (3))){
var inst_30984 = (state_30986[(2)]);
var state_30986__$1 = state_30986;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30986__$1,inst_30984);
} else {
if((state_val_30987 === (12))){
var inst_30913 = (state_30986[(2)]);
var state_30986__$1 = state_30986;
var statearr_31038_31106 = state_30986__$1;
(statearr_31038_31106[(2)] = inst_30913);

(statearr_31038_31106[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30987 === (2))){
var state_30986__$1 = state_30986;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30986__$1,(4),ch);
} else {
if((state_val_30987 === (23))){
var state_30986__$1 = state_30986;
var statearr_31039_31107 = state_30986__$1;
(statearr_31039_31107[(2)] = null);

(statearr_31039_31107[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30987 === (35))){
var inst_30968 = (state_30986[(2)]);
var state_30986__$1 = state_30986;
var statearr_31040_31108 = state_30986__$1;
(statearr_31040_31108[(2)] = inst_30968);

(statearr_31040_31108[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30987 === (19))){
var inst_30887 = (state_30986[(7)]);
var inst_30891 = cljs.core.chunk_first.call(null,inst_30887);
var inst_30892 = cljs.core.chunk_rest.call(null,inst_30887);
var inst_30893 = cljs.core.count.call(null,inst_30891);
var inst_30867 = inst_30892;
var inst_30868 = inst_30891;
var inst_30869 = inst_30893;
var inst_30870 = (0);
var state_30986__$1 = (function (){var statearr_31041 = state_30986;
(statearr_31041[(13)] = inst_30867);

(statearr_31041[(14)] = inst_30868);

(statearr_31041[(16)] = inst_30870);

(statearr_31041[(17)] = inst_30869);

return statearr_31041;
})();
var statearr_31042_31109 = state_30986__$1;
(statearr_31042_31109[(2)] = null);

(statearr_31042_31109[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30987 === (11))){
var inst_30887 = (state_30986[(7)]);
var inst_30867 = (state_30986[(13)]);
var inst_30887__$1 = cljs.core.seq.call(null,inst_30867);
var state_30986__$1 = (function (){var statearr_31043 = state_30986;
(statearr_31043[(7)] = inst_30887__$1);

return statearr_31043;
})();
if(inst_30887__$1){
var statearr_31044_31110 = state_30986__$1;
(statearr_31044_31110[(1)] = (16));

} else {
var statearr_31045_31111 = state_30986__$1;
(statearr_31045_31111[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30987 === (9))){
var inst_30915 = (state_30986[(2)]);
var state_30986__$1 = state_30986;
var statearr_31046_31112 = state_30986__$1;
(statearr_31046_31112[(2)] = inst_30915);

(statearr_31046_31112[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30987 === (5))){
var inst_30865 = cljs.core.deref.call(null,cs);
var inst_30866 = cljs.core.seq.call(null,inst_30865);
var inst_30867 = inst_30866;
var inst_30868 = null;
var inst_30869 = (0);
var inst_30870 = (0);
var state_30986__$1 = (function (){var statearr_31047 = state_30986;
(statearr_31047[(13)] = inst_30867);

(statearr_31047[(14)] = inst_30868);

(statearr_31047[(16)] = inst_30870);

(statearr_31047[(17)] = inst_30869);

return statearr_31047;
})();
var statearr_31048_31113 = state_30986__$1;
(statearr_31048_31113[(2)] = null);

(statearr_31048_31113[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30987 === (14))){
var state_30986__$1 = state_30986;
var statearr_31049_31114 = state_30986__$1;
(statearr_31049_31114[(2)] = null);

(statearr_31049_31114[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30987 === (45))){
var inst_30976 = (state_30986[(2)]);
var state_30986__$1 = state_30986;
var statearr_31050_31115 = state_30986__$1;
(statearr_31050_31115[(2)] = inst_30976);

(statearr_31050_31115[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30987 === (26))){
var inst_30918 = (state_30986[(29)]);
var inst_30972 = (state_30986[(2)]);
var inst_30973 = cljs.core.seq.call(null,inst_30918);
var state_30986__$1 = (function (){var statearr_31051 = state_30986;
(statearr_31051[(31)] = inst_30972);

return statearr_31051;
})();
if(inst_30973){
var statearr_31052_31116 = state_30986__$1;
(statearr_31052_31116[(1)] = (42));

} else {
var statearr_31053_31117 = state_30986__$1;
(statearr_31053_31117[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30987 === (16))){
var inst_30887 = (state_30986[(7)]);
var inst_30889 = cljs.core.chunked_seq_QMARK_.call(null,inst_30887);
var state_30986__$1 = state_30986;
if(inst_30889){
var statearr_31054_31118 = state_30986__$1;
(statearr_31054_31118[(1)] = (19));

} else {
var statearr_31055_31119 = state_30986__$1;
(statearr_31055_31119[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30987 === (38))){
var inst_30965 = (state_30986[(2)]);
var state_30986__$1 = state_30986;
var statearr_31056_31120 = state_30986__$1;
(statearr_31056_31120[(2)] = inst_30965);

(statearr_31056_31120[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30987 === (30))){
var state_30986__$1 = state_30986;
var statearr_31057_31121 = state_30986__$1;
(statearr_31057_31121[(2)] = null);

(statearr_31057_31121[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30987 === (10))){
var inst_30868 = (state_30986[(14)]);
var inst_30870 = (state_30986[(16)]);
var inst_30876 = cljs.core._nth.call(null,inst_30868,inst_30870);
var inst_30877 = cljs.core.nth.call(null,inst_30876,(0),null);
var inst_30878 = cljs.core.nth.call(null,inst_30876,(1),null);
var state_30986__$1 = (function (){var statearr_31058 = state_30986;
(statearr_31058[(26)] = inst_30877);

return statearr_31058;
})();
if(cljs.core.truth_(inst_30878)){
var statearr_31059_31122 = state_30986__$1;
(statearr_31059_31122[(1)] = (13));

} else {
var statearr_31060_31123 = state_30986__$1;
(statearr_31060_31123[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30987 === (18))){
var inst_30911 = (state_30986[(2)]);
var state_30986__$1 = state_30986;
var statearr_31061_31124 = state_30986__$1;
(statearr_31061_31124[(2)] = inst_30911);

(statearr_31061_31124[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30987 === (42))){
var state_30986__$1 = state_30986;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30986__$1,(45),dchan);
} else {
if((state_val_30987 === (37))){
var inst_30858 = (state_30986[(12)]);
var inst_30954 = (state_30986[(23)]);
var inst_30945 = (state_30986[(25)]);
var inst_30954__$1 = cljs.core.first.call(null,inst_30945);
var inst_30955 = cljs.core.async.put_BANG_.call(null,inst_30954__$1,inst_30858,done);
var state_30986__$1 = (function (){var statearr_31062 = state_30986;
(statearr_31062[(23)] = inst_30954__$1);

return statearr_31062;
})();
if(cljs.core.truth_(inst_30955)){
var statearr_31063_31125 = state_30986__$1;
(statearr_31063_31125[(1)] = (39));

} else {
var statearr_31064_31126 = state_30986__$1;
(statearr_31064_31126[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30987 === (8))){
var inst_30870 = (state_30986[(16)]);
var inst_30869 = (state_30986[(17)]);
var inst_30872 = (inst_30870 < inst_30869);
var inst_30873 = inst_30872;
var state_30986__$1 = state_30986;
if(cljs.core.truth_(inst_30873)){
var statearr_31065_31127 = state_30986__$1;
(statearr_31065_31127[(1)] = (10));

} else {
var statearr_31066_31128 = state_30986__$1;
(statearr_31066_31128[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});})(c__6715__auto___31074,cs,m,dchan,dctr,done))
;
return ((function (switch__6659__auto__,c__6715__auto___31074,cs,m,dchan,dctr,done){
return (function() {
var state_machine__6660__auto__ = null;
var state_machine__6660__auto____0 = (function (){
var statearr_31070 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31070[(0)] = state_machine__6660__auto__);

(statearr_31070[(1)] = (1));

return statearr_31070;
});
var state_machine__6660__auto____1 = (function (state_30986){
while(true){
var ret_value__6661__auto__ = (function (){try{while(true){
var result__6662__auto__ = switch__6659__auto__.call(null,state_30986);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6662__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6662__auto__;
}
break;
}
}catch (e31071){if((e31071 instanceof Object)){
var ex__6663__auto__ = e31071;
var statearr_31072_31129 = state_30986;
(statearr_31072_31129[(5)] = ex__6663__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30986);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31071;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6661__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31130 = state_30986;
state_30986 = G__31130;
continue;
} else {
return ret_value__6661__auto__;
}
break;
}
});
state_machine__6660__auto__ = function(state_30986){
switch(arguments.length){
case 0:
return state_machine__6660__auto____0.call(this);
case 1:
return state_machine__6660__auto____1.call(this,state_30986);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6660__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6660__auto____0;
state_machine__6660__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6660__auto____1;
return state_machine__6660__auto__;
})()
;})(switch__6659__auto__,c__6715__auto___31074,cs,m,dchan,dctr,done))
})();
var state__6717__auto__ = (function (){var statearr_31073 = f__6716__auto__.call(null);
(statearr_31073[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6715__auto___31074);

return statearr_31073;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6717__auto__);
});})(c__6715__auto___31074,cs,m,dchan,dctr,done))
);


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
var tap__2 = (function (mult,ch){
return tap.call(null,mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

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
cljs.core.async.untap = (function untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

cljs.core.async.Mix = (function (){var obj31132 = {};
return obj31132;
})();

cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){
if((function (){var and__3795__auto__ = m;
if(and__3795__auto__){
return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else {
return and__3795__auto__;
}
})()){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4451__auto__ = (((m == null))?null:m);
return (function (){var or__3807__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4451__auto__)]);
if(or__3807__auto__){
return or__3807__auto__;
} else {
var or__3807__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(or__3807__auto____$1){
return or__3807__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){
if((function (){var and__3795__auto__ = m;
if(and__3795__auto__){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else {
return and__3795__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4451__auto__ = (((m == null))?null:m);
return (function (){var or__3807__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4451__auto__)]);
if(or__3807__auto__){
return or__3807__auto__;
} else {
var or__3807__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(or__3807__auto____$1){
return or__3807__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){
if((function (){var and__3795__auto__ = m;
if(and__3795__auto__){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else {
return and__3795__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4451__auto__ = (((m == null))?null:m);
return (function (){var or__3807__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4451__auto__)]);
if(or__3807__auto__){
return or__3807__auto__;
} else {
var or__3807__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(or__3807__auto____$1){
return or__3807__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});

cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){
if((function (){var and__3795__auto__ = m;
if(and__3795__auto__){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else {
return and__3795__auto__;
}
})()){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4451__auto__ = (((m == null))?null:m);
return (function (){var or__3807__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4451__auto__)]);
if(or__3807__auto__){
return or__3807__auto__;
} else {
var or__3807__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(or__3807__auto____$1){
return or__3807__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});

cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){
if((function (){var and__3795__auto__ = m;
if(and__3795__auto__){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else {
return and__3795__auto__;
}
})()){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4451__auto__ = (((m == null))?null:m);
return (function (){var or__3807__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4451__auto__)]);
if(or__3807__auto__){
return or__3807__auto__;
} else {
var or__3807__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(or__3807__auto____$1){
return or__3807__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});

/**
* @param {...*} var_args
*/
cljs.core.async.ioc_alts_BANG_ = (function() { 
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__31133){
var map__31138 = p__31133;
var map__31138__$1 = ((cljs.core.seq_QMARK_.call(null,map__31138))?cljs.core.apply.call(null,cljs.core.hash_map,map__31138):map__31138);
var opts = map__31138__$1;
var statearr_31139_31142 = state;
(statearr_31139_31142[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4406__auto__ = cljs.core.async.do_alts.call(null,((function (map__31138,map__31138__$1,opts){
return (function (val){
var statearr_31140_31143 = state;
(statearr_31140_31143[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__31138,map__31138__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4406__auto__)){
var cb = temp__4406__auto__;
var statearr_31141_31144 = state;
(statearr_31141_31144[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__31133 = null;
if (arguments.length > 3) {
var G__31145__i = 0, G__31145__a = new Array(arguments.length -  3);
while (G__31145__i < G__31145__a.length) {G__31145__a[G__31145__i] = arguments[G__31145__i + 3]; ++G__31145__i;}
  p__31133 = new cljs.core.IndexedSeq(G__31145__a,0);
} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__31133);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__31146){
var state = cljs.core.first(arglist__31146);
arglist__31146 = cljs.core.next(arglist__31146);
var cont_block = cljs.core.first(arglist__31146);
arglist__31146 = cljs.core.next(arglist__31146);
var ports = cljs.core.first(arglist__31146);
var p__31133 = cljs.core.rest(arglist__31146);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__31133);
});
ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = ioc_alts_BANG___delegate;
return ioc_alts_BANG_;
})()
;
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
cljs.core.async.mix = (function mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t31266 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t31266 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta31267){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta31267 = meta31267;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t31266.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t31266.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t31266.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t31266.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t31266.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t31266.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t31266.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t31266.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t31266.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_31268){
var self__ = this;
var _31268__$1 = this;
return self__.meta31267;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t31266.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_31268,meta31267__$1){
var self__ = this;
var _31268__$1 = this;
return (new cljs.core.async.t31266(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta31267__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t31266.cljs$lang$type = true;

cljs.core.async.t31266.cljs$lang$ctorStr = "cljs.core.async/t31266";

cljs.core.async.t31266.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4394__auto__,writer__4395__auto__,opt__4396__auto__){
return cljs.core._write.call(null,writer__4395__auto__,"cljs.core.async/t31266");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t31266 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t31266(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta31267){
return (new cljs.core.async.t31266(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta31267));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t31266(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__6715__auto___31385 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6715__auto___31385,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__6716__auto__ = (function (){var switch__6659__auto__ = ((function (c__6715__auto___31385,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_31338){
var state_val_31339 = (state_31338[(1)]);
if((state_val_31339 === (7))){
var inst_31282 = (state_31338[(7)]);
var inst_31287 = cljs.core.apply.call(null,cljs.core.hash_map,inst_31282);
var state_31338__$1 = state_31338;
var statearr_31340_31386 = state_31338__$1;
(statearr_31340_31386[(2)] = inst_31287);

(statearr_31340_31386[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31339 === (20))){
var inst_31297 = (state_31338[(8)]);
var state_31338__$1 = state_31338;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31338__$1,(23),out,inst_31297);
} else {
if((state_val_31339 === (1))){
var inst_31272 = (state_31338[(9)]);
var inst_31272__$1 = calc_state.call(null);
var inst_31273 = cljs.core.seq_QMARK_.call(null,inst_31272__$1);
var state_31338__$1 = (function (){var statearr_31341 = state_31338;
(statearr_31341[(9)] = inst_31272__$1);

return statearr_31341;
})();
if(inst_31273){
var statearr_31342_31387 = state_31338__$1;
(statearr_31342_31387[(1)] = (2));

} else {
var statearr_31343_31388 = state_31338__$1;
(statearr_31343_31388[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31339 === (24))){
var inst_31290 = (state_31338[(10)]);
var inst_31282 = inst_31290;
var state_31338__$1 = (function (){var statearr_31344 = state_31338;
(statearr_31344[(7)] = inst_31282);

return statearr_31344;
})();
var statearr_31345_31389 = state_31338__$1;
(statearr_31345_31389[(2)] = null);

(statearr_31345_31389[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31339 === (4))){
var inst_31272 = (state_31338[(9)]);
var inst_31278 = (state_31338[(2)]);
var inst_31279 = cljs.core.get.call(null,inst_31278,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_31280 = cljs.core.get.call(null,inst_31278,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31281 = cljs.core.get.call(null,inst_31278,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_31282 = inst_31272;
var state_31338__$1 = (function (){var statearr_31346 = state_31338;
(statearr_31346[(11)] = inst_31279);

(statearr_31346[(12)] = inst_31281);

(statearr_31346[(13)] = inst_31280);

(statearr_31346[(7)] = inst_31282);

return statearr_31346;
})();
var statearr_31347_31390 = state_31338__$1;
(statearr_31347_31390[(2)] = null);

(statearr_31347_31390[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31339 === (15))){
var state_31338__$1 = state_31338;
var statearr_31348_31391 = state_31338__$1;
(statearr_31348_31391[(2)] = null);

(statearr_31348_31391[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31339 === (21))){
var inst_31290 = (state_31338[(10)]);
var inst_31282 = inst_31290;
var state_31338__$1 = (function (){var statearr_31349 = state_31338;
(statearr_31349[(7)] = inst_31282);

return statearr_31349;
})();
var statearr_31350_31392 = state_31338__$1;
(statearr_31350_31392[(2)] = null);

(statearr_31350_31392[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31339 === (13))){
var inst_31334 = (state_31338[(2)]);
var state_31338__$1 = state_31338;
var statearr_31351_31393 = state_31338__$1;
(statearr_31351_31393[(2)] = inst_31334);

(statearr_31351_31393[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31339 === (22))){
var inst_31332 = (state_31338[(2)]);
var state_31338__$1 = state_31338;
var statearr_31352_31394 = state_31338__$1;
(statearr_31352_31394[(2)] = inst_31332);

(statearr_31352_31394[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31339 === (6))){
var inst_31336 = (state_31338[(2)]);
var state_31338__$1 = state_31338;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31338__$1,inst_31336);
} else {
if((state_val_31339 === (25))){
var state_31338__$1 = state_31338;
var statearr_31353_31395 = state_31338__$1;
(statearr_31353_31395[(2)] = null);

(statearr_31353_31395[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31339 === (17))){
var inst_31312 = (state_31338[(14)]);
var state_31338__$1 = state_31338;
var statearr_31354_31396 = state_31338__$1;
(statearr_31354_31396[(2)] = inst_31312);

(statearr_31354_31396[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31339 === (3))){
var inst_31272 = (state_31338[(9)]);
var state_31338__$1 = state_31338;
var statearr_31355_31397 = state_31338__$1;
(statearr_31355_31397[(2)] = inst_31272);

(statearr_31355_31397[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31339 === (12))){
var inst_31312 = (state_31338[(14)]);
var inst_31293 = (state_31338[(15)]);
var inst_31298 = (state_31338[(16)]);
var inst_31312__$1 = inst_31293.call(null,inst_31298);
var state_31338__$1 = (function (){var statearr_31356 = state_31338;
(statearr_31356[(14)] = inst_31312__$1);

return statearr_31356;
})();
if(cljs.core.truth_(inst_31312__$1)){
var statearr_31357_31398 = state_31338__$1;
(statearr_31357_31398[(1)] = (17));

} else {
var statearr_31358_31399 = state_31338__$1;
(statearr_31358_31399[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31339 === (2))){
var inst_31272 = (state_31338[(9)]);
var inst_31275 = cljs.core.apply.call(null,cljs.core.hash_map,inst_31272);
var state_31338__$1 = state_31338;
var statearr_31359_31400 = state_31338__$1;
(statearr_31359_31400[(2)] = inst_31275);

(statearr_31359_31400[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31339 === (23))){
var inst_31323 = (state_31338[(2)]);
var state_31338__$1 = state_31338;
if(cljs.core.truth_(inst_31323)){
var statearr_31360_31401 = state_31338__$1;
(statearr_31360_31401[(1)] = (24));

} else {
var statearr_31361_31402 = state_31338__$1;
(statearr_31361_31402[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31339 === (19))){
var inst_31320 = (state_31338[(2)]);
var state_31338__$1 = state_31338;
if(cljs.core.truth_(inst_31320)){
var statearr_31362_31403 = state_31338__$1;
(statearr_31362_31403[(1)] = (20));

} else {
var statearr_31363_31404 = state_31338__$1;
(statearr_31363_31404[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31339 === (11))){
var inst_31297 = (state_31338[(8)]);
var inst_31303 = (inst_31297 == null);
var state_31338__$1 = state_31338;
if(cljs.core.truth_(inst_31303)){
var statearr_31364_31405 = state_31338__$1;
(statearr_31364_31405[(1)] = (14));

} else {
var statearr_31365_31406 = state_31338__$1;
(statearr_31365_31406[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31339 === (9))){
var inst_31290 = (state_31338[(10)]);
var inst_31290__$1 = (state_31338[(2)]);
var inst_31291 = cljs.core.get.call(null,inst_31290__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_31292 = cljs.core.get.call(null,inst_31290__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31293 = cljs.core.get.call(null,inst_31290__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var state_31338__$1 = (function (){var statearr_31366 = state_31338;
(statearr_31366[(17)] = inst_31292);

(statearr_31366[(15)] = inst_31293);

(statearr_31366[(10)] = inst_31290__$1);

return statearr_31366;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_31338__$1,(10),inst_31291);
} else {
if((state_val_31339 === (5))){
var inst_31282 = (state_31338[(7)]);
var inst_31285 = cljs.core.seq_QMARK_.call(null,inst_31282);
var state_31338__$1 = state_31338;
if(inst_31285){
var statearr_31367_31407 = state_31338__$1;
(statearr_31367_31407[(1)] = (7));

} else {
var statearr_31368_31408 = state_31338__$1;
(statearr_31368_31408[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31339 === (14))){
var inst_31298 = (state_31338[(16)]);
var inst_31305 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_31298);
var state_31338__$1 = state_31338;
var statearr_31369_31409 = state_31338__$1;
(statearr_31369_31409[(2)] = inst_31305);

(statearr_31369_31409[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31339 === (26))){
var inst_31328 = (state_31338[(2)]);
var state_31338__$1 = state_31338;
var statearr_31370_31410 = state_31338__$1;
(statearr_31370_31410[(2)] = inst_31328);

(statearr_31370_31410[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31339 === (16))){
var inst_31308 = (state_31338[(2)]);
var inst_31309 = calc_state.call(null);
var inst_31282 = inst_31309;
var state_31338__$1 = (function (){var statearr_31371 = state_31338;
(statearr_31371[(18)] = inst_31308);

(statearr_31371[(7)] = inst_31282);

return statearr_31371;
})();
var statearr_31372_31411 = state_31338__$1;
(statearr_31372_31411[(2)] = null);

(statearr_31372_31411[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31339 === (10))){
var inst_31297 = (state_31338[(8)]);
var inst_31298 = (state_31338[(16)]);
var inst_31296 = (state_31338[(2)]);
var inst_31297__$1 = cljs.core.nth.call(null,inst_31296,(0),null);
var inst_31298__$1 = cljs.core.nth.call(null,inst_31296,(1),null);
var inst_31299 = (inst_31297__$1 == null);
var inst_31300 = cljs.core._EQ_.call(null,inst_31298__$1,change);
var inst_31301 = (inst_31299) || (inst_31300);
var state_31338__$1 = (function (){var statearr_31373 = state_31338;
(statearr_31373[(8)] = inst_31297__$1);

(statearr_31373[(16)] = inst_31298__$1);

return statearr_31373;
})();
if(cljs.core.truth_(inst_31301)){
var statearr_31374_31412 = state_31338__$1;
(statearr_31374_31412[(1)] = (11));

} else {
var statearr_31375_31413 = state_31338__$1;
(statearr_31375_31413[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31339 === (18))){
var inst_31292 = (state_31338[(17)]);
var inst_31293 = (state_31338[(15)]);
var inst_31298 = (state_31338[(16)]);
var inst_31315 = cljs.core.empty_QMARK_.call(null,inst_31293);
var inst_31316 = inst_31292.call(null,inst_31298);
var inst_31317 = cljs.core.not.call(null,inst_31316);
var inst_31318 = (inst_31315) && (inst_31317);
var state_31338__$1 = state_31338;
var statearr_31376_31414 = state_31338__$1;
(statearr_31376_31414[(2)] = inst_31318);

(statearr_31376_31414[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31339 === (8))){
var inst_31282 = (state_31338[(7)]);
var state_31338__$1 = state_31338;
var statearr_31377_31415 = state_31338__$1;
(statearr_31377_31415[(2)] = inst_31282);

(statearr_31377_31415[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});})(c__6715__auto___31385,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__6659__auto__,c__6715__auto___31385,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__6660__auto__ = null;
var state_machine__6660__auto____0 = (function (){
var statearr_31381 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31381[(0)] = state_machine__6660__auto__);

(statearr_31381[(1)] = (1));

return statearr_31381;
});
var state_machine__6660__auto____1 = (function (state_31338){
while(true){
var ret_value__6661__auto__ = (function (){try{while(true){
var result__6662__auto__ = switch__6659__auto__.call(null,state_31338);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6662__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6662__auto__;
}
break;
}
}catch (e31382){if((e31382 instanceof Object)){
var ex__6663__auto__ = e31382;
var statearr_31383_31416 = state_31338;
(statearr_31383_31416[(5)] = ex__6663__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31338);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31382;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6661__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31417 = state_31338;
state_31338 = G__31417;
continue;
} else {
return ret_value__6661__auto__;
}
break;
}
});
state_machine__6660__auto__ = function(state_31338){
switch(arguments.length){
case 0:
return state_machine__6660__auto____0.call(this);
case 1:
return state_machine__6660__auto____1.call(this,state_31338);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6660__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6660__auto____0;
state_machine__6660__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6660__auto____1;
return state_machine__6660__auto__;
})()
;})(switch__6659__auto__,c__6715__auto___31385,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__6717__auto__ = (function (){var statearr_31384 = f__6716__auto__.call(null);
(statearr_31384[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6715__auto___31385);

return statearr_31384;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6717__auto__);
});})(c__6715__auto___31385,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
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
cljs.core.async.toggle = (function toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

cljs.core.async.Pub = (function (){var obj31419 = {};
return obj31419;
})();

cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){
if((function (){var and__3795__auto__ = p;
if(and__3795__auto__){
return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else {
return and__3795__auto__;
}
})()){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4451__auto__ = (((p == null))?null:p);
return (function (){var or__3807__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4451__auto__)]);
if(or__3807__auto__){
return or__3807__auto__;
} else {
var or__3807__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(or__3807__auto____$1){
return or__3807__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});

cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){
if((function (){var and__3795__auto__ = p;
if(and__3795__auto__){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else {
return and__3795__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4451__auto__ = (((p == null))?null:p);
return (function (){var or__3807__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4451__auto__)]);
if(or__3807__auto__){
return or__3807__auto__;
} else {
var or__3807__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(or__3807__auto____$1){
return or__3807__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});

cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){
if((function (){var and__3795__auto__ = p;
if(and__3795__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else {
return and__3795__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4451__auto__ = (((p == null))?null:p);
return (function (){var or__3807__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4451__auto__)]);
if(or__3807__auto__){
return or__3807__auto__;
} else {
var or__3807__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__3807__auto____$1){
return or__3807__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){
if((function (){var and__3795__auto__ = p;
if(and__3795__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else {
return and__3795__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4451__auto__ = (((p == null))?null:p);
return (function (){var or__3807__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4451__auto__)]);
if(or__3807__auto__){
return or__3807__auto__;
} else {
var or__3807__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__3807__auto____$1){
return or__3807__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
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
var pub__2 = (function (ch,topic_fn){
return pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__3807__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__3807__auto__)){
return or__3807__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3807__auto__,mults){
return (function (p1__31420_SHARP_){
if(cljs.core.truth_(p1__31420_SHARP_.call(null,topic))){
return p1__31420_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__31420_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3807__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t31543 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t31543 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta31544){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta31544 = meta31544;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t31543.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t31543.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t31543.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4406__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4406__auto__)){
var m = temp__4406__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t31543.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t31543.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t31543.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t31543.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t31543.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_31545){
var self__ = this;
var _31545__$1 = this;
return self__.meta31544;
});})(mults,ensure_mult))
;

cljs.core.async.t31543.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_31545,meta31544__$1){
var self__ = this;
var _31545__$1 = this;
return (new cljs.core.async.t31543(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta31544__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t31543.cljs$lang$type = true;

cljs.core.async.t31543.cljs$lang$ctorStr = "cljs.core.async/t31543";

cljs.core.async.t31543.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4394__auto__,writer__4395__auto__,opt__4396__auto__){
return cljs.core._write.call(null,writer__4395__auto__,"cljs.core.async/t31543");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t31543 = ((function (mults,ensure_mult){
return (function __GT_t31543(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta31544){
return (new cljs.core.async.t31543(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta31544));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t31543(ensure_mult,mults,buf_fn,topic_fn,ch,pub,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__6715__auto___31665 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6715__auto___31665,mults,ensure_mult,p){
return (function (){
var f__6716__auto__ = (function (){var switch__6659__auto__ = ((function (c__6715__auto___31665,mults,ensure_mult,p){
return (function (state_31617){
var state_val_31618 = (state_31617[(1)]);
if((state_val_31618 === (7))){
var inst_31613 = (state_31617[(2)]);
var state_31617__$1 = state_31617;
var statearr_31619_31666 = state_31617__$1;
(statearr_31619_31666[(2)] = inst_31613);

(statearr_31619_31666[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31618 === (20))){
var state_31617__$1 = state_31617;
var statearr_31620_31667 = state_31617__$1;
(statearr_31620_31667[(2)] = null);

(statearr_31620_31667[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31618 === (1))){
var state_31617__$1 = state_31617;
var statearr_31621_31668 = state_31617__$1;
(statearr_31621_31668[(2)] = null);

(statearr_31621_31668[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31618 === (24))){
var inst_31596 = (state_31617[(7)]);
var inst_31605 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_31596);
var state_31617__$1 = state_31617;
var statearr_31622_31669 = state_31617__$1;
(statearr_31622_31669[(2)] = inst_31605);

(statearr_31622_31669[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31618 === (4))){
var inst_31548 = (state_31617[(8)]);
var inst_31548__$1 = (state_31617[(2)]);
var inst_31549 = (inst_31548__$1 == null);
var state_31617__$1 = (function (){var statearr_31623 = state_31617;
(statearr_31623[(8)] = inst_31548__$1);

return statearr_31623;
})();
if(cljs.core.truth_(inst_31549)){
var statearr_31624_31670 = state_31617__$1;
(statearr_31624_31670[(1)] = (5));

} else {
var statearr_31625_31671 = state_31617__$1;
(statearr_31625_31671[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31618 === (15))){
var inst_31590 = (state_31617[(2)]);
var state_31617__$1 = state_31617;
var statearr_31626_31672 = state_31617__$1;
(statearr_31626_31672[(2)] = inst_31590);

(statearr_31626_31672[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31618 === (21))){
var inst_31610 = (state_31617[(2)]);
var state_31617__$1 = (function (){var statearr_31627 = state_31617;
(statearr_31627[(9)] = inst_31610);

return statearr_31627;
})();
var statearr_31628_31673 = state_31617__$1;
(statearr_31628_31673[(2)] = null);

(statearr_31628_31673[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31618 === (13))){
var inst_31572 = (state_31617[(10)]);
var inst_31574 = cljs.core.chunked_seq_QMARK_.call(null,inst_31572);
var state_31617__$1 = state_31617;
if(inst_31574){
var statearr_31629_31674 = state_31617__$1;
(statearr_31629_31674[(1)] = (16));

} else {
var statearr_31630_31675 = state_31617__$1;
(statearr_31630_31675[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31618 === (22))){
var inst_31602 = (state_31617[(2)]);
var state_31617__$1 = state_31617;
if(cljs.core.truth_(inst_31602)){
var statearr_31631_31676 = state_31617__$1;
(statearr_31631_31676[(1)] = (23));

} else {
var statearr_31632_31677 = state_31617__$1;
(statearr_31632_31677[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31618 === (6))){
var inst_31548 = (state_31617[(8)]);
var inst_31598 = (state_31617[(11)]);
var inst_31596 = (state_31617[(7)]);
var inst_31596__$1 = topic_fn.call(null,inst_31548);
var inst_31597 = cljs.core.deref.call(null,mults);
var inst_31598__$1 = cljs.core.get.call(null,inst_31597,inst_31596__$1);
var state_31617__$1 = (function (){var statearr_31633 = state_31617;
(statearr_31633[(11)] = inst_31598__$1);

(statearr_31633[(7)] = inst_31596__$1);

return statearr_31633;
})();
if(cljs.core.truth_(inst_31598__$1)){
var statearr_31634_31678 = state_31617__$1;
(statearr_31634_31678[(1)] = (19));

} else {
var statearr_31635_31679 = state_31617__$1;
(statearr_31635_31679[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31618 === (25))){
var inst_31607 = (state_31617[(2)]);
var state_31617__$1 = state_31617;
var statearr_31636_31680 = state_31617__$1;
(statearr_31636_31680[(2)] = inst_31607);

(statearr_31636_31680[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31618 === (17))){
var inst_31572 = (state_31617[(10)]);
var inst_31581 = cljs.core.first.call(null,inst_31572);
var inst_31582 = cljs.core.async.muxch_STAR_.call(null,inst_31581);
var inst_31583 = cljs.core.async.close_BANG_.call(null,inst_31582);
var inst_31584 = cljs.core.next.call(null,inst_31572);
var inst_31558 = inst_31584;
var inst_31559 = null;
var inst_31560 = (0);
var inst_31561 = (0);
var state_31617__$1 = (function (){var statearr_31637 = state_31617;
(statearr_31637[(12)] = inst_31561);

(statearr_31637[(13)] = inst_31558);

(statearr_31637[(14)] = inst_31559);

(statearr_31637[(15)] = inst_31560);

(statearr_31637[(16)] = inst_31583);

return statearr_31637;
})();
var statearr_31638_31681 = state_31617__$1;
(statearr_31638_31681[(2)] = null);

(statearr_31638_31681[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31618 === (3))){
var inst_31615 = (state_31617[(2)]);
var state_31617__$1 = state_31617;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31617__$1,inst_31615);
} else {
if((state_val_31618 === (12))){
var inst_31592 = (state_31617[(2)]);
var state_31617__$1 = state_31617;
var statearr_31639_31682 = state_31617__$1;
(statearr_31639_31682[(2)] = inst_31592);

(statearr_31639_31682[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31618 === (2))){
var state_31617__$1 = state_31617;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31617__$1,(4),ch);
} else {
if((state_val_31618 === (23))){
var state_31617__$1 = state_31617;
var statearr_31640_31683 = state_31617__$1;
(statearr_31640_31683[(2)] = null);

(statearr_31640_31683[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31618 === (19))){
var inst_31548 = (state_31617[(8)]);
var inst_31598 = (state_31617[(11)]);
var inst_31600 = cljs.core.async.muxch_STAR_.call(null,inst_31598);
var state_31617__$1 = state_31617;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31617__$1,(22),inst_31600,inst_31548);
} else {
if((state_val_31618 === (11))){
var inst_31572 = (state_31617[(10)]);
var inst_31558 = (state_31617[(13)]);
var inst_31572__$1 = cljs.core.seq.call(null,inst_31558);
var state_31617__$1 = (function (){var statearr_31641 = state_31617;
(statearr_31641[(10)] = inst_31572__$1);

return statearr_31641;
})();
if(inst_31572__$1){
var statearr_31642_31684 = state_31617__$1;
(statearr_31642_31684[(1)] = (13));

} else {
var statearr_31643_31685 = state_31617__$1;
(statearr_31643_31685[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31618 === (9))){
var inst_31594 = (state_31617[(2)]);
var state_31617__$1 = state_31617;
var statearr_31644_31686 = state_31617__$1;
(statearr_31644_31686[(2)] = inst_31594);

(statearr_31644_31686[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31618 === (5))){
var inst_31555 = cljs.core.deref.call(null,mults);
var inst_31556 = cljs.core.vals.call(null,inst_31555);
var inst_31557 = cljs.core.seq.call(null,inst_31556);
var inst_31558 = inst_31557;
var inst_31559 = null;
var inst_31560 = (0);
var inst_31561 = (0);
var state_31617__$1 = (function (){var statearr_31645 = state_31617;
(statearr_31645[(12)] = inst_31561);

(statearr_31645[(13)] = inst_31558);

(statearr_31645[(14)] = inst_31559);

(statearr_31645[(15)] = inst_31560);

return statearr_31645;
})();
var statearr_31646_31687 = state_31617__$1;
(statearr_31646_31687[(2)] = null);

(statearr_31646_31687[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31618 === (14))){
var state_31617__$1 = state_31617;
var statearr_31650_31688 = state_31617__$1;
(statearr_31650_31688[(2)] = null);

(statearr_31650_31688[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31618 === (16))){
var inst_31572 = (state_31617[(10)]);
var inst_31576 = cljs.core.chunk_first.call(null,inst_31572);
var inst_31577 = cljs.core.chunk_rest.call(null,inst_31572);
var inst_31578 = cljs.core.count.call(null,inst_31576);
var inst_31558 = inst_31577;
var inst_31559 = inst_31576;
var inst_31560 = inst_31578;
var inst_31561 = (0);
var state_31617__$1 = (function (){var statearr_31651 = state_31617;
(statearr_31651[(12)] = inst_31561);

(statearr_31651[(13)] = inst_31558);

(statearr_31651[(14)] = inst_31559);

(statearr_31651[(15)] = inst_31560);

return statearr_31651;
})();
var statearr_31652_31689 = state_31617__$1;
(statearr_31652_31689[(2)] = null);

(statearr_31652_31689[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31618 === (10))){
var inst_31561 = (state_31617[(12)]);
var inst_31558 = (state_31617[(13)]);
var inst_31559 = (state_31617[(14)]);
var inst_31560 = (state_31617[(15)]);
var inst_31566 = cljs.core._nth.call(null,inst_31559,inst_31561);
var inst_31567 = cljs.core.async.muxch_STAR_.call(null,inst_31566);
var inst_31568 = cljs.core.async.close_BANG_.call(null,inst_31567);
var inst_31569 = (inst_31561 + (1));
var tmp31647 = inst_31558;
var tmp31648 = inst_31559;
var tmp31649 = inst_31560;
var inst_31558__$1 = tmp31647;
var inst_31559__$1 = tmp31648;
var inst_31560__$1 = tmp31649;
var inst_31561__$1 = inst_31569;
var state_31617__$1 = (function (){var statearr_31653 = state_31617;
(statearr_31653[(12)] = inst_31561__$1);

(statearr_31653[(17)] = inst_31568);

(statearr_31653[(13)] = inst_31558__$1);

(statearr_31653[(14)] = inst_31559__$1);

(statearr_31653[(15)] = inst_31560__$1);

return statearr_31653;
})();
var statearr_31654_31690 = state_31617__$1;
(statearr_31654_31690[(2)] = null);

(statearr_31654_31690[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31618 === (18))){
var inst_31587 = (state_31617[(2)]);
var state_31617__$1 = state_31617;
var statearr_31655_31691 = state_31617__$1;
(statearr_31655_31691[(2)] = inst_31587);

(statearr_31655_31691[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31618 === (8))){
var inst_31561 = (state_31617[(12)]);
var inst_31560 = (state_31617[(15)]);
var inst_31563 = (inst_31561 < inst_31560);
var inst_31564 = inst_31563;
var state_31617__$1 = state_31617;
if(cljs.core.truth_(inst_31564)){
var statearr_31656_31692 = state_31617__$1;
(statearr_31656_31692[(1)] = (10));

} else {
var statearr_31657_31693 = state_31617__$1;
(statearr_31657_31693[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});})(c__6715__auto___31665,mults,ensure_mult,p))
;
return ((function (switch__6659__auto__,c__6715__auto___31665,mults,ensure_mult,p){
return (function() {
var state_machine__6660__auto__ = null;
var state_machine__6660__auto____0 = (function (){
var statearr_31661 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31661[(0)] = state_machine__6660__auto__);

(statearr_31661[(1)] = (1));

return statearr_31661;
});
var state_machine__6660__auto____1 = (function (state_31617){
while(true){
var ret_value__6661__auto__ = (function (){try{while(true){
var result__6662__auto__ = switch__6659__auto__.call(null,state_31617);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6662__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6662__auto__;
}
break;
}
}catch (e31662){if((e31662 instanceof Object)){
var ex__6663__auto__ = e31662;
var statearr_31663_31694 = state_31617;
(statearr_31663_31694[(5)] = ex__6663__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31617);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31662;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6661__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31695 = state_31617;
state_31617 = G__31695;
continue;
} else {
return ret_value__6661__auto__;
}
break;
}
});
state_machine__6660__auto__ = function(state_31617){
switch(arguments.length){
case 0:
return state_machine__6660__auto____0.call(this);
case 1:
return state_machine__6660__auto____1.call(this,state_31617);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6660__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6660__auto____0;
state_machine__6660__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6660__auto____1;
return state_machine__6660__auto__;
})()
;})(switch__6659__auto__,c__6715__auto___31665,mults,ensure_mult,p))
})();
var state__6717__auto__ = (function (){var statearr_31664 = f__6716__auto__.call(null);
(statearr_31664[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6715__auto___31665);

return statearr_31664;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6717__auto__);
});})(c__6715__auto___31665,mults,ensure_mult,p))
);


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
var sub__3 = (function (p,topic,ch){
return sub.call(null,p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
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
cljs.core.async.unsub = (function unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});
var unsub_all__2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
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
var map__2 = (function (f,chs){
return map.call(null,f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__6715__auto___31832 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6715__auto___31832,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__6716__auto__ = (function (){var switch__6659__auto__ = ((function (c__6715__auto___31832,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_31802){
var state_val_31803 = (state_31802[(1)]);
if((state_val_31803 === (7))){
var state_31802__$1 = state_31802;
var statearr_31804_31833 = state_31802__$1;
(statearr_31804_31833[(2)] = null);

(statearr_31804_31833[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31803 === (1))){
var state_31802__$1 = state_31802;
var statearr_31805_31834 = state_31802__$1;
(statearr_31805_31834[(2)] = null);

(statearr_31805_31834[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31803 === (4))){
var inst_31766 = (state_31802[(7)]);
var inst_31768 = (inst_31766 < cnt);
var state_31802__$1 = state_31802;
if(cljs.core.truth_(inst_31768)){
var statearr_31806_31835 = state_31802__$1;
(statearr_31806_31835[(1)] = (6));

} else {
var statearr_31807_31836 = state_31802__$1;
(statearr_31807_31836[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31803 === (15))){
var inst_31798 = (state_31802[(2)]);
var state_31802__$1 = state_31802;
var statearr_31808_31837 = state_31802__$1;
(statearr_31808_31837[(2)] = inst_31798);

(statearr_31808_31837[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31803 === (13))){
var inst_31791 = cljs.core.async.close_BANG_.call(null,out);
var state_31802__$1 = state_31802;
var statearr_31809_31838 = state_31802__$1;
(statearr_31809_31838[(2)] = inst_31791);

(statearr_31809_31838[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31803 === (6))){
var state_31802__$1 = state_31802;
var statearr_31810_31839 = state_31802__$1;
(statearr_31810_31839[(2)] = null);

(statearr_31810_31839[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31803 === (3))){
var inst_31800 = (state_31802[(2)]);
var state_31802__$1 = state_31802;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31802__$1,inst_31800);
} else {
if((state_val_31803 === (12))){
var inst_31788 = (state_31802[(8)]);
var inst_31788__$1 = (state_31802[(2)]);
var inst_31789 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_31788__$1);
var state_31802__$1 = (function (){var statearr_31811 = state_31802;
(statearr_31811[(8)] = inst_31788__$1);

return statearr_31811;
})();
if(cljs.core.truth_(inst_31789)){
var statearr_31812_31840 = state_31802__$1;
(statearr_31812_31840[(1)] = (13));

} else {
var statearr_31813_31841 = state_31802__$1;
(statearr_31813_31841[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31803 === (2))){
var inst_31765 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_31766 = (0);
var state_31802__$1 = (function (){var statearr_31814 = state_31802;
(statearr_31814[(7)] = inst_31766);

(statearr_31814[(9)] = inst_31765);

return statearr_31814;
})();
var statearr_31815_31842 = state_31802__$1;
(statearr_31815_31842[(2)] = null);

(statearr_31815_31842[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31803 === (11))){
var inst_31766 = (state_31802[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_31802,(10),Object,null,(9));
var inst_31775 = chs__$1.call(null,inst_31766);
var inst_31776 = done.call(null,inst_31766);
var inst_31777 = cljs.core.async.take_BANG_.call(null,inst_31775,inst_31776);
var state_31802__$1 = state_31802;
var statearr_31816_31843 = state_31802__$1;
(statearr_31816_31843[(2)] = inst_31777);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31802__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31803 === (9))){
var inst_31766 = (state_31802[(7)]);
var inst_31779 = (state_31802[(2)]);
var inst_31780 = (inst_31766 + (1));
var inst_31766__$1 = inst_31780;
var state_31802__$1 = (function (){var statearr_31817 = state_31802;
(statearr_31817[(10)] = inst_31779);

(statearr_31817[(7)] = inst_31766__$1);

return statearr_31817;
})();
var statearr_31818_31844 = state_31802__$1;
(statearr_31818_31844[(2)] = null);

(statearr_31818_31844[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31803 === (5))){
var inst_31786 = (state_31802[(2)]);
var state_31802__$1 = (function (){var statearr_31819 = state_31802;
(statearr_31819[(11)] = inst_31786);

return statearr_31819;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31802__$1,(12),dchan);
} else {
if((state_val_31803 === (14))){
var inst_31788 = (state_31802[(8)]);
var inst_31793 = cljs.core.apply.call(null,f,inst_31788);
var state_31802__$1 = state_31802;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31802__$1,(16),out,inst_31793);
} else {
if((state_val_31803 === (16))){
var inst_31795 = (state_31802[(2)]);
var state_31802__$1 = (function (){var statearr_31820 = state_31802;
(statearr_31820[(12)] = inst_31795);

return statearr_31820;
})();
var statearr_31821_31845 = state_31802__$1;
(statearr_31821_31845[(2)] = null);

(statearr_31821_31845[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31803 === (10))){
var inst_31770 = (state_31802[(2)]);
var inst_31771 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_31802__$1 = (function (){var statearr_31822 = state_31802;
(statearr_31822[(13)] = inst_31770);

return statearr_31822;
})();
var statearr_31823_31846 = state_31802__$1;
(statearr_31823_31846[(2)] = inst_31771);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31802__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31803 === (8))){
var inst_31784 = (state_31802[(2)]);
var state_31802__$1 = state_31802;
var statearr_31824_31847 = state_31802__$1;
(statearr_31824_31847[(2)] = inst_31784);

(statearr_31824_31847[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});})(c__6715__auto___31832,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__6659__auto__,c__6715__auto___31832,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__6660__auto__ = null;
var state_machine__6660__auto____0 = (function (){
var statearr_31828 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31828[(0)] = state_machine__6660__auto__);

(statearr_31828[(1)] = (1));

return statearr_31828;
});
var state_machine__6660__auto____1 = (function (state_31802){
while(true){
var ret_value__6661__auto__ = (function (){try{while(true){
var result__6662__auto__ = switch__6659__auto__.call(null,state_31802);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6662__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6662__auto__;
}
break;
}
}catch (e31829){if((e31829 instanceof Object)){
var ex__6663__auto__ = e31829;
var statearr_31830_31848 = state_31802;
(statearr_31830_31848[(5)] = ex__6663__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31802);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31829;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6661__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31849 = state_31802;
state_31802 = G__31849;
continue;
} else {
return ret_value__6661__auto__;
}
break;
}
});
state_machine__6660__auto__ = function(state_31802){
switch(arguments.length){
case 0:
return state_machine__6660__auto____0.call(this);
case 1:
return state_machine__6660__auto____1.call(this,state_31802);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6660__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6660__auto____0;
state_machine__6660__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6660__auto____1;
return state_machine__6660__auto__;
})()
;})(switch__6659__auto__,c__6715__auto___31832,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__6717__auto__ = (function (){var statearr_31831 = f__6716__auto__.call(null);
(statearr_31831[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6715__auto___31832);

return statearr_31831;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6717__auto__);
});})(c__6715__auto___31832,chs__$1,out,cnt,rets,dchan,dctr,done))
);


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
var merge__1 = (function (chs){
return merge.call(null,chs,null);
});
var merge__2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__6715__auto___31957 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6715__auto___31957,out){
return (function (){
var f__6716__auto__ = (function (){var switch__6659__auto__ = ((function (c__6715__auto___31957,out){
return (function (state_31933){
var state_val_31934 = (state_31933[(1)]);
if((state_val_31934 === (7))){
var inst_31912 = (state_31933[(7)]);
var inst_31913 = (state_31933[(8)]);
var inst_31912__$1 = (state_31933[(2)]);
var inst_31913__$1 = cljs.core.nth.call(null,inst_31912__$1,(0),null);
var inst_31914 = cljs.core.nth.call(null,inst_31912__$1,(1),null);
var inst_31915 = (inst_31913__$1 == null);
var state_31933__$1 = (function (){var statearr_31935 = state_31933;
(statearr_31935[(7)] = inst_31912__$1);

(statearr_31935[(9)] = inst_31914);

(statearr_31935[(8)] = inst_31913__$1);

return statearr_31935;
})();
if(cljs.core.truth_(inst_31915)){
var statearr_31936_31958 = state_31933__$1;
(statearr_31936_31958[(1)] = (8));

} else {
var statearr_31937_31959 = state_31933__$1;
(statearr_31937_31959[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31934 === (1))){
var inst_31904 = cljs.core.vec.call(null,chs);
var inst_31905 = inst_31904;
var state_31933__$1 = (function (){var statearr_31938 = state_31933;
(statearr_31938[(10)] = inst_31905);

return statearr_31938;
})();
var statearr_31939_31960 = state_31933__$1;
(statearr_31939_31960[(2)] = null);

(statearr_31939_31960[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31934 === (4))){
var inst_31905 = (state_31933[(10)]);
var state_31933__$1 = state_31933;
return cljs.core.async.ioc_alts_BANG_.call(null,state_31933__$1,(7),inst_31905);
} else {
if((state_val_31934 === (6))){
var inst_31929 = (state_31933[(2)]);
var state_31933__$1 = state_31933;
var statearr_31940_31961 = state_31933__$1;
(statearr_31940_31961[(2)] = inst_31929);

(statearr_31940_31961[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31934 === (3))){
var inst_31931 = (state_31933[(2)]);
var state_31933__$1 = state_31933;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31933__$1,inst_31931);
} else {
if((state_val_31934 === (2))){
var inst_31905 = (state_31933[(10)]);
var inst_31907 = cljs.core.count.call(null,inst_31905);
var inst_31908 = (inst_31907 > (0));
var state_31933__$1 = state_31933;
if(cljs.core.truth_(inst_31908)){
var statearr_31942_31962 = state_31933__$1;
(statearr_31942_31962[(1)] = (4));

} else {
var statearr_31943_31963 = state_31933__$1;
(statearr_31943_31963[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31934 === (11))){
var inst_31905 = (state_31933[(10)]);
var inst_31922 = (state_31933[(2)]);
var tmp31941 = inst_31905;
var inst_31905__$1 = tmp31941;
var state_31933__$1 = (function (){var statearr_31944 = state_31933;
(statearr_31944[(10)] = inst_31905__$1);

(statearr_31944[(11)] = inst_31922);

return statearr_31944;
})();
var statearr_31945_31964 = state_31933__$1;
(statearr_31945_31964[(2)] = null);

(statearr_31945_31964[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31934 === (9))){
var inst_31913 = (state_31933[(8)]);
var state_31933__$1 = state_31933;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31933__$1,(11),out,inst_31913);
} else {
if((state_val_31934 === (5))){
var inst_31927 = cljs.core.async.close_BANG_.call(null,out);
var state_31933__$1 = state_31933;
var statearr_31946_31965 = state_31933__$1;
(statearr_31946_31965[(2)] = inst_31927);

(statearr_31946_31965[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31934 === (10))){
var inst_31925 = (state_31933[(2)]);
var state_31933__$1 = state_31933;
var statearr_31947_31966 = state_31933__$1;
(statearr_31947_31966[(2)] = inst_31925);

(statearr_31947_31966[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31934 === (8))){
var inst_31912 = (state_31933[(7)]);
var inst_31905 = (state_31933[(10)]);
var inst_31914 = (state_31933[(9)]);
var inst_31913 = (state_31933[(8)]);
var inst_31917 = (function (){var c = inst_31914;
var v = inst_31913;
var vec__31910 = inst_31912;
var cs = inst_31905;
return ((function (c,v,vec__31910,cs,inst_31912,inst_31905,inst_31914,inst_31913,state_val_31934,c__6715__auto___31957,out){
return (function (p1__31850_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__31850_SHARP_);
});
;})(c,v,vec__31910,cs,inst_31912,inst_31905,inst_31914,inst_31913,state_val_31934,c__6715__auto___31957,out))
})();
var inst_31918 = cljs.core.filterv.call(null,inst_31917,inst_31905);
var inst_31905__$1 = inst_31918;
var state_31933__$1 = (function (){var statearr_31948 = state_31933;
(statearr_31948[(10)] = inst_31905__$1);

return statearr_31948;
})();
var statearr_31949_31967 = state_31933__$1;
(statearr_31949_31967[(2)] = null);

(statearr_31949_31967[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});})(c__6715__auto___31957,out))
;
return ((function (switch__6659__auto__,c__6715__auto___31957,out){
return (function() {
var state_machine__6660__auto__ = null;
var state_machine__6660__auto____0 = (function (){
var statearr_31953 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31953[(0)] = state_machine__6660__auto__);

(statearr_31953[(1)] = (1));

return statearr_31953;
});
var state_machine__6660__auto____1 = (function (state_31933){
while(true){
var ret_value__6661__auto__ = (function (){try{while(true){
var result__6662__auto__ = switch__6659__auto__.call(null,state_31933);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6662__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6662__auto__;
}
break;
}
}catch (e31954){if((e31954 instanceof Object)){
var ex__6663__auto__ = e31954;
var statearr_31955_31968 = state_31933;
(statearr_31955_31968[(5)] = ex__6663__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31933);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31954;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6661__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31969 = state_31933;
state_31933 = G__31969;
continue;
} else {
return ret_value__6661__auto__;
}
break;
}
});
state_machine__6660__auto__ = function(state_31933){
switch(arguments.length){
case 0:
return state_machine__6660__auto____0.call(this);
case 1:
return state_machine__6660__auto____1.call(this,state_31933);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6660__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6660__auto____0;
state_machine__6660__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6660__auto____1;
return state_machine__6660__auto__;
})()
;})(switch__6659__auto__,c__6715__auto___31957,out))
})();
var state__6717__auto__ = (function (){var statearr_31956 = f__6716__auto__.call(null);
(statearr_31956[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6715__auto___31957);

return statearr_31956;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6717__auto__);
});})(c__6715__auto___31957,out))
);


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
cljs.core.async.into = (function into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
* Returns a channel that will return, at most, n items from ch. After n items
* have been returned, or ch has been closed, the return chanel will close.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.take = (function() {
var take = null;
var take__2 = (function (n,ch){
return take.call(null,n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__6715__auto___32062 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6715__auto___32062,out){
return (function (){
var f__6716__auto__ = (function (){var switch__6659__auto__ = ((function (c__6715__auto___32062,out){
return (function (state_32039){
var state_val_32040 = (state_32039[(1)]);
if((state_val_32040 === (7))){
var inst_32021 = (state_32039[(7)]);
var inst_32021__$1 = (state_32039[(2)]);
var inst_32022 = (inst_32021__$1 == null);
var inst_32023 = cljs.core.not.call(null,inst_32022);
var state_32039__$1 = (function (){var statearr_32041 = state_32039;
(statearr_32041[(7)] = inst_32021__$1);

return statearr_32041;
})();
if(inst_32023){
var statearr_32042_32063 = state_32039__$1;
(statearr_32042_32063[(1)] = (8));

} else {
var statearr_32043_32064 = state_32039__$1;
(statearr_32043_32064[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32040 === (1))){
var inst_32016 = (0);
var state_32039__$1 = (function (){var statearr_32044 = state_32039;
(statearr_32044[(8)] = inst_32016);

return statearr_32044;
})();
var statearr_32045_32065 = state_32039__$1;
(statearr_32045_32065[(2)] = null);

(statearr_32045_32065[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32040 === (4))){
var state_32039__$1 = state_32039;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32039__$1,(7),ch);
} else {
if((state_val_32040 === (6))){
var inst_32034 = (state_32039[(2)]);
var state_32039__$1 = state_32039;
var statearr_32046_32066 = state_32039__$1;
(statearr_32046_32066[(2)] = inst_32034);

(statearr_32046_32066[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32040 === (3))){
var inst_32036 = (state_32039[(2)]);
var inst_32037 = cljs.core.async.close_BANG_.call(null,out);
var state_32039__$1 = (function (){var statearr_32047 = state_32039;
(statearr_32047[(9)] = inst_32036);

return statearr_32047;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32039__$1,inst_32037);
} else {
if((state_val_32040 === (2))){
var inst_32016 = (state_32039[(8)]);
var inst_32018 = (inst_32016 < n);
var state_32039__$1 = state_32039;
if(cljs.core.truth_(inst_32018)){
var statearr_32048_32067 = state_32039__$1;
(statearr_32048_32067[(1)] = (4));

} else {
var statearr_32049_32068 = state_32039__$1;
(statearr_32049_32068[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32040 === (11))){
var inst_32016 = (state_32039[(8)]);
var inst_32026 = (state_32039[(2)]);
var inst_32027 = (inst_32016 + (1));
var inst_32016__$1 = inst_32027;
var state_32039__$1 = (function (){var statearr_32050 = state_32039;
(statearr_32050[(10)] = inst_32026);

(statearr_32050[(8)] = inst_32016__$1);

return statearr_32050;
})();
var statearr_32051_32069 = state_32039__$1;
(statearr_32051_32069[(2)] = null);

(statearr_32051_32069[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32040 === (9))){
var state_32039__$1 = state_32039;
var statearr_32052_32070 = state_32039__$1;
(statearr_32052_32070[(2)] = null);

(statearr_32052_32070[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32040 === (5))){
var state_32039__$1 = state_32039;
var statearr_32053_32071 = state_32039__$1;
(statearr_32053_32071[(2)] = null);

(statearr_32053_32071[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32040 === (10))){
var inst_32031 = (state_32039[(2)]);
var state_32039__$1 = state_32039;
var statearr_32054_32072 = state_32039__$1;
(statearr_32054_32072[(2)] = inst_32031);

(statearr_32054_32072[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32040 === (8))){
var inst_32021 = (state_32039[(7)]);
var state_32039__$1 = state_32039;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32039__$1,(11),out,inst_32021);
} else {
return null;
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
});})(c__6715__auto___32062,out))
;
return ((function (switch__6659__auto__,c__6715__auto___32062,out){
return (function() {
var state_machine__6660__auto__ = null;
var state_machine__6660__auto____0 = (function (){
var statearr_32058 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32058[(0)] = state_machine__6660__auto__);

(statearr_32058[(1)] = (1));

return statearr_32058;
});
var state_machine__6660__auto____1 = (function (state_32039){
while(true){
var ret_value__6661__auto__ = (function (){try{while(true){
var result__6662__auto__ = switch__6659__auto__.call(null,state_32039);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6662__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6662__auto__;
}
break;
}
}catch (e32059){if((e32059 instanceof Object)){
var ex__6663__auto__ = e32059;
var statearr_32060_32073 = state_32039;
(statearr_32060_32073[(5)] = ex__6663__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32039);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32059;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6661__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32074 = state_32039;
state_32039 = G__32074;
continue;
} else {
return ret_value__6661__auto__;
}
break;
}
});
state_machine__6660__auto__ = function(state_32039){
switch(arguments.length){
case 0:
return state_machine__6660__auto____0.call(this);
case 1:
return state_machine__6660__auto____1.call(this,state_32039);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6660__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6660__auto____0;
state_machine__6660__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6660__auto____1;
return state_machine__6660__auto__;
})()
;})(switch__6659__auto__,c__6715__auto___32062,out))
})();
var state__6717__auto__ = (function (){var statearr_32061 = f__6716__auto__.call(null);
(statearr_32061[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6715__auto___32062);

return statearr_32061;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6717__auto__);
});})(c__6715__auto___32062,out))
);


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
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_LT_ = (function map_LT_(f,ch){
if(typeof cljs.core.async.t32082 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t32082 = (function (ch,f,map_LT_,meta32083){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta32083 = meta32083;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t32082.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t32082.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t32082.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t32082.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t32085 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t32085 = (function (fn1,_,meta32083,map_LT_,f,ch,meta32086){
this.fn1 = fn1;
this._ = _;
this.meta32083 = meta32083;
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta32086 = meta32086;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t32085.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t32085.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t32085.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__32075_SHARP_){
return f1.call(null,(((p1__32075_SHARP_ == null))?null:self__.f.call(null,p1__32075_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t32085.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_32087){
var self__ = this;
var _32087__$1 = this;
return self__.meta32086;
});})(___$1))
;

cljs.core.async.t32085.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_32087,meta32086__$1){
var self__ = this;
var _32087__$1 = this;
return (new cljs.core.async.t32085(self__.fn1,self__._,self__.meta32083,self__.map_LT_,self__.f,self__.ch,meta32086__$1));
});})(___$1))
;

cljs.core.async.t32085.cljs$lang$type = true;

cljs.core.async.t32085.cljs$lang$ctorStr = "cljs.core.async/t32085";

cljs.core.async.t32085.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4394__auto__,writer__4395__auto__,opt__4396__auto__){
return cljs.core._write.call(null,writer__4395__auto__,"cljs.core.async/t32085");
});})(___$1))
;

cljs.core.async.__GT_t32085 = ((function (___$1){
return (function __GT_t32085(fn1__$1,___$2,meta32083__$1,map_LT___$1,f__$1,ch__$1,meta32086){
return (new cljs.core.async.t32085(fn1__$1,___$2,meta32083__$1,map_LT___$1,f__$1,ch__$1,meta32086));
});})(___$1))
;

}

return (new cljs.core.async.t32085(fn1,___$1,self__.meta32083,self__.map_LT_,self__.f,self__.ch,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__3795__auto__ = ret;
if(cljs.core.truth_(and__3795__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__3795__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t32082.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t32082.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t32082.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t32082.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32084){
var self__ = this;
var _32084__$1 = this;
return self__.meta32083;
});

cljs.core.async.t32082.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32084,meta32083__$1){
var self__ = this;
var _32084__$1 = this;
return (new cljs.core.async.t32082(self__.ch,self__.f,self__.map_LT_,meta32083__$1));
});

cljs.core.async.t32082.cljs$lang$type = true;

cljs.core.async.t32082.cljs$lang$ctorStr = "cljs.core.async/t32082";

cljs.core.async.t32082.cljs$lang$ctorPrWriter = (function (this__4394__auto__,writer__4395__auto__,opt__4396__auto__){
return cljs.core._write.call(null,writer__4395__auto__,"cljs.core.async/t32082");
});

cljs.core.async.__GT_t32082 = (function __GT_t32082(ch__$1,f__$1,map_LT___$1,meta32083){
return (new cljs.core.async.t32082(ch__$1,f__$1,map_LT___$1,meta32083));
});

}

return (new cljs.core.async.t32082(ch,f,map_LT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){
if(typeof cljs.core.async.t32091 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t32091 = (function (ch,f,map_GT_,meta32092){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta32092 = meta32092;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t32091.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t32091.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t32091.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t32091.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t32091.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t32091.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t32091.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32093){
var self__ = this;
var _32093__$1 = this;
return self__.meta32092;
});

cljs.core.async.t32091.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32093,meta32092__$1){
var self__ = this;
var _32093__$1 = this;
return (new cljs.core.async.t32091(self__.ch,self__.f,self__.map_GT_,meta32092__$1));
});

cljs.core.async.t32091.cljs$lang$type = true;

cljs.core.async.t32091.cljs$lang$ctorStr = "cljs.core.async/t32091";

cljs.core.async.t32091.cljs$lang$ctorPrWriter = (function (this__4394__auto__,writer__4395__auto__,opt__4396__auto__){
return cljs.core._write.call(null,writer__4395__auto__,"cljs.core.async/t32091");
});

cljs.core.async.__GT_t32091 = (function __GT_t32091(ch__$1,f__$1,map_GT___$1,meta32092){
return (new cljs.core.async.t32091(ch__$1,f__$1,map_GT___$1,meta32092));
});

}

return (new cljs.core.async.t32091(ch,f,map_GT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){
if(typeof cljs.core.async.t32097 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t32097 = (function (ch,p,filter_GT_,meta32098){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta32098 = meta32098;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t32097.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t32097.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t32097.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t32097.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t32097.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t32097.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t32097.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t32097.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32099){
var self__ = this;
var _32099__$1 = this;
return self__.meta32098;
});

cljs.core.async.t32097.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32099,meta32098__$1){
var self__ = this;
var _32099__$1 = this;
return (new cljs.core.async.t32097(self__.ch,self__.p,self__.filter_GT_,meta32098__$1));
});

cljs.core.async.t32097.cljs$lang$type = true;

cljs.core.async.t32097.cljs$lang$ctorStr = "cljs.core.async/t32097";

cljs.core.async.t32097.cljs$lang$ctorPrWriter = (function (this__4394__auto__,writer__4395__auto__,opt__4396__auto__){
return cljs.core._write.call(null,writer__4395__auto__,"cljs.core.async/t32097");
});

cljs.core.async.__GT_t32097 = (function __GT_t32097(ch__$1,p__$1,filter_GT___$1,meta32098){
return (new cljs.core.async.t32097(ch__$1,p__$1,filter_GT___$1,meta32098));
});

}

return (new cljs.core.async.t32097(ch,p,filter_GT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_LT_ = (function() {
var filter_LT_ = null;
var filter_LT___2 = (function (p,ch){
return filter_LT_.call(null,p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__6715__auto___32182 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6715__auto___32182,out){
return (function (){
var f__6716__auto__ = (function (){var switch__6659__auto__ = ((function (c__6715__auto___32182,out){
return (function (state_32161){
var state_val_32162 = (state_32161[(1)]);
if((state_val_32162 === (7))){
var inst_32157 = (state_32161[(2)]);
var state_32161__$1 = state_32161;
var statearr_32163_32183 = state_32161__$1;
(statearr_32163_32183[(2)] = inst_32157);

(statearr_32163_32183[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32162 === (1))){
var state_32161__$1 = state_32161;
var statearr_32164_32184 = state_32161__$1;
(statearr_32164_32184[(2)] = null);

(statearr_32164_32184[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32162 === (4))){
var inst_32143 = (state_32161[(7)]);
var inst_32143__$1 = (state_32161[(2)]);
var inst_32144 = (inst_32143__$1 == null);
var state_32161__$1 = (function (){var statearr_32165 = state_32161;
(statearr_32165[(7)] = inst_32143__$1);

return statearr_32165;
})();
if(cljs.core.truth_(inst_32144)){
var statearr_32166_32185 = state_32161__$1;
(statearr_32166_32185[(1)] = (5));

} else {
var statearr_32167_32186 = state_32161__$1;
(statearr_32167_32186[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32162 === (6))){
var inst_32143 = (state_32161[(7)]);
var inst_32148 = p.call(null,inst_32143);
var state_32161__$1 = state_32161;
if(cljs.core.truth_(inst_32148)){
var statearr_32168_32187 = state_32161__$1;
(statearr_32168_32187[(1)] = (8));

} else {
var statearr_32169_32188 = state_32161__$1;
(statearr_32169_32188[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32162 === (3))){
var inst_32159 = (state_32161[(2)]);
var state_32161__$1 = state_32161;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32161__$1,inst_32159);
} else {
if((state_val_32162 === (2))){
var state_32161__$1 = state_32161;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32161__$1,(4),ch);
} else {
if((state_val_32162 === (11))){
var inst_32151 = (state_32161[(2)]);
var state_32161__$1 = state_32161;
var statearr_32170_32189 = state_32161__$1;
(statearr_32170_32189[(2)] = inst_32151);

(statearr_32170_32189[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32162 === (9))){
var state_32161__$1 = state_32161;
var statearr_32171_32190 = state_32161__$1;
(statearr_32171_32190[(2)] = null);

(statearr_32171_32190[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32162 === (5))){
var inst_32146 = cljs.core.async.close_BANG_.call(null,out);
var state_32161__$1 = state_32161;
var statearr_32172_32191 = state_32161__$1;
(statearr_32172_32191[(2)] = inst_32146);

(statearr_32172_32191[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32162 === (10))){
var inst_32154 = (state_32161[(2)]);
var state_32161__$1 = (function (){var statearr_32173 = state_32161;
(statearr_32173[(8)] = inst_32154);

return statearr_32173;
})();
var statearr_32174_32192 = state_32161__$1;
(statearr_32174_32192[(2)] = null);

(statearr_32174_32192[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32162 === (8))){
var inst_32143 = (state_32161[(7)]);
var state_32161__$1 = state_32161;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32161__$1,(11),out,inst_32143);
} else {
return null;
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
});})(c__6715__auto___32182,out))
;
return ((function (switch__6659__auto__,c__6715__auto___32182,out){
return (function() {
var state_machine__6660__auto__ = null;
var state_machine__6660__auto____0 = (function (){
var statearr_32178 = [null,null,null,null,null,null,null,null,null];
(statearr_32178[(0)] = state_machine__6660__auto__);

(statearr_32178[(1)] = (1));

return statearr_32178;
});
var state_machine__6660__auto____1 = (function (state_32161){
while(true){
var ret_value__6661__auto__ = (function (){try{while(true){
var result__6662__auto__ = switch__6659__auto__.call(null,state_32161);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6662__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6662__auto__;
}
break;
}
}catch (e32179){if((e32179 instanceof Object)){
var ex__6663__auto__ = e32179;
var statearr_32180_32193 = state_32161;
(statearr_32180_32193[(5)] = ex__6663__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32161);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32179;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6661__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32194 = state_32161;
state_32161 = G__32194;
continue;
} else {
return ret_value__6661__auto__;
}
break;
}
});
state_machine__6660__auto__ = function(state_32161){
switch(arguments.length){
case 0:
return state_machine__6660__auto____0.call(this);
case 1:
return state_machine__6660__auto____1.call(this,state_32161);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6660__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6660__auto____0;
state_machine__6660__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6660__auto____1;
return state_machine__6660__auto__;
})()
;})(switch__6659__auto__,c__6715__auto___32182,out))
})();
var state__6717__auto__ = (function (){var statearr_32181 = f__6716__auto__.call(null);
(statearr_32181[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6715__auto___32182);

return statearr_32181;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6717__auto__);
});})(c__6715__auto___32182,out))
);


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
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.remove_LT_ = (function() {
var remove_LT_ = null;
var remove_LT___2 = (function (p,ch){
return remove_LT_.call(null,p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){
var c__6715__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6715__auto__){
return (function (){
var f__6716__auto__ = (function (){var switch__6659__auto__ = ((function (c__6715__auto__){
return (function (state_32360){
var state_val_32361 = (state_32360[(1)]);
if((state_val_32361 === (7))){
var inst_32356 = (state_32360[(2)]);
var state_32360__$1 = state_32360;
var statearr_32362_32403 = state_32360__$1;
(statearr_32362_32403[(2)] = inst_32356);

(statearr_32362_32403[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32361 === (20))){
var inst_32326 = (state_32360[(7)]);
var inst_32337 = (state_32360[(2)]);
var inst_32338 = cljs.core.next.call(null,inst_32326);
var inst_32312 = inst_32338;
var inst_32313 = null;
var inst_32314 = (0);
var inst_32315 = (0);
var state_32360__$1 = (function (){var statearr_32363 = state_32360;
(statearr_32363[(8)] = inst_32337);

(statearr_32363[(9)] = inst_32313);

(statearr_32363[(10)] = inst_32315);

(statearr_32363[(11)] = inst_32314);

(statearr_32363[(12)] = inst_32312);

return statearr_32363;
})();
var statearr_32364_32404 = state_32360__$1;
(statearr_32364_32404[(2)] = null);

(statearr_32364_32404[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32361 === (1))){
var state_32360__$1 = state_32360;
var statearr_32365_32405 = state_32360__$1;
(statearr_32365_32405[(2)] = null);

(statearr_32365_32405[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32361 === (4))){
var inst_32301 = (state_32360[(13)]);
var inst_32301__$1 = (state_32360[(2)]);
var inst_32302 = (inst_32301__$1 == null);
var state_32360__$1 = (function (){var statearr_32366 = state_32360;
(statearr_32366[(13)] = inst_32301__$1);

return statearr_32366;
})();
if(cljs.core.truth_(inst_32302)){
var statearr_32367_32406 = state_32360__$1;
(statearr_32367_32406[(1)] = (5));

} else {
var statearr_32368_32407 = state_32360__$1;
(statearr_32368_32407[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32361 === (15))){
var state_32360__$1 = state_32360;
var statearr_32372_32408 = state_32360__$1;
(statearr_32372_32408[(2)] = null);

(statearr_32372_32408[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32361 === (21))){
var state_32360__$1 = state_32360;
var statearr_32373_32409 = state_32360__$1;
(statearr_32373_32409[(2)] = null);

(statearr_32373_32409[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32361 === (13))){
var inst_32313 = (state_32360[(9)]);
var inst_32315 = (state_32360[(10)]);
var inst_32314 = (state_32360[(11)]);
var inst_32312 = (state_32360[(12)]);
var inst_32322 = (state_32360[(2)]);
var inst_32323 = (inst_32315 + (1));
var tmp32369 = inst_32313;
var tmp32370 = inst_32314;
var tmp32371 = inst_32312;
var inst_32312__$1 = tmp32371;
var inst_32313__$1 = tmp32369;
var inst_32314__$1 = tmp32370;
var inst_32315__$1 = inst_32323;
var state_32360__$1 = (function (){var statearr_32374 = state_32360;
(statearr_32374[(9)] = inst_32313__$1);

(statearr_32374[(10)] = inst_32315__$1);

(statearr_32374[(11)] = inst_32314__$1);

(statearr_32374[(14)] = inst_32322);

(statearr_32374[(12)] = inst_32312__$1);

return statearr_32374;
})();
var statearr_32375_32410 = state_32360__$1;
(statearr_32375_32410[(2)] = null);

(statearr_32375_32410[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32361 === (22))){
var state_32360__$1 = state_32360;
var statearr_32376_32411 = state_32360__$1;
(statearr_32376_32411[(2)] = null);

(statearr_32376_32411[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32361 === (6))){
var inst_32301 = (state_32360[(13)]);
var inst_32310 = f.call(null,inst_32301);
var inst_32311 = cljs.core.seq.call(null,inst_32310);
var inst_32312 = inst_32311;
var inst_32313 = null;
var inst_32314 = (0);
var inst_32315 = (0);
var state_32360__$1 = (function (){var statearr_32377 = state_32360;
(statearr_32377[(9)] = inst_32313);

(statearr_32377[(10)] = inst_32315);

(statearr_32377[(11)] = inst_32314);

(statearr_32377[(12)] = inst_32312);

return statearr_32377;
})();
var statearr_32378_32412 = state_32360__$1;
(statearr_32378_32412[(2)] = null);

(statearr_32378_32412[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32361 === (17))){
var inst_32326 = (state_32360[(7)]);
var inst_32330 = cljs.core.chunk_first.call(null,inst_32326);
var inst_32331 = cljs.core.chunk_rest.call(null,inst_32326);
var inst_32332 = cljs.core.count.call(null,inst_32330);
var inst_32312 = inst_32331;
var inst_32313 = inst_32330;
var inst_32314 = inst_32332;
var inst_32315 = (0);
var state_32360__$1 = (function (){var statearr_32379 = state_32360;
(statearr_32379[(9)] = inst_32313);

(statearr_32379[(10)] = inst_32315);

(statearr_32379[(11)] = inst_32314);

(statearr_32379[(12)] = inst_32312);

return statearr_32379;
})();
var statearr_32380_32413 = state_32360__$1;
(statearr_32380_32413[(2)] = null);

(statearr_32380_32413[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32361 === (3))){
var inst_32358 = (state_32360[(2)]);
var state_32360__$1 = state_32360;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32360__$1,inst_32358);
} else {
if((state_val_32361 === (12))){
var inst_32346 = (state_32360[(2)]);
var state_32360__$1 = state_32360;
var statearr_32381_32414 = state_32360__$1;
(statearr_32381_32414[(2)] = inst_32346);

(statearr_32381_32414[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32361 === (2))){
var state_32360__$1 = state_32360;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32360__$1,(4),in$);
} else {
if((state_val_32361 === (23))){
var inst_32354 = (state_32360[(2)]);
var state_32360__$1 = state_32360;
var statearr_32382_32415 = state_32360__$1;
(statearr_32382_32415[(2)] = inst_32354);

(statearr_32382_32415[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32361 === (19))){
var inst_32341 = (state_32360[(2)]);
var state_32360__$1 = state_32360;
var statearr_32383_32416 = state_32360__$1;
(statearr_32383_32416[(2)] = inst_32341);

(statearr_32383_32416[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32361 === (11))){
var inst_32326 = (state_32360[(7)]);
var inst_32312 = (state_32360[(12)]);
var inst_32326__$1 = cljs.core.seq.call(null,inst_32312);
var state_32360__$1 = (function (){var statearr_32384 = state_32360;
(statearr_32384[(7)] = inst_32326__$1);

return statearr_32384;
})();
if(inst_32326__$1){
var statearr_32385_32417 = state_32360__$1;
(statearr_32385_32417[(1)] = (14));

} else {
var statearr_32386_32418 = state_32360__$1;
(statearr_32386_32418[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32361 === (9))){
var inst_32348 = (state_32360[(2)]);
var inst_32349 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_32360__$1 = (function (){var statearr_32387 = state_32360;
(statearr_32387[(15)] = inst_32348);

return statearr_32387;
})();
if(cljs.core.truth_(inst_32349)){
var statearr_32388_32419 = state_32360__$1;
(statearr_32388_32419[(1)] = (21));

} else {
var statearr_32389_32420 = state_32360__$1;
(statearr_32389_32420[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32361 === (5))){
var inst_32304 = cljs.core.async.close_BANG_.call(null,out);
var state_32360__$1 = state_32360;
var statearr_32390_32421 = state_32360__$1;
(statearr_32390_32421[(2)] = inst_32304);

(statearr_32390_32421[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32361 === (14))){
var inst_32326 = (state_32360[(7)]);
var inst_32328 = cljs.core.chunked_seq_QMARK_.call(null,inst_32326);
var state_32360__$1 = state_32360;
if(inst_32328){
var statearr_32391_32422 = state_32360__$1;
(statearr_32391_32422[(1)] = (17));

} else {
var statearr_32392_32423 = state_32360__$1;
(statearr_32392_32423[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32361 === (16))){
var inst_32344 = (state_32360[(2)]);
var state_32360__$1 = state_32360;
var statearr_32393_32424 = state_32360__$1;
(statearr_32393_32424[(2)] = inst_32344);

(statearr_32393_32424[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32361 === (10))){
var inst_32313 = (state_32360[(9)]);
var inst_32315 = (state_32360[(10)]);
var inst_32320 = cljs.core._nth.call(null,inst_32313,inst_32315);
var state_32360__$1 = state_32360;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32360__$1,(13),out,inst_32320);
} else {
if((state_val_32361 === (18))){
var inst_32326 = (state_32360[(7)]);
var inst_32335 = cljs.core.first.call(null,inst_32326);
var state_32360__$1 = state_32360;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32360__$1,(20),out,inst_32335);
} else {
if((state_val_32361 === (8))){
var inst_32315 = (state_32360[(10)]);
var inst_32314 = (state_32360[(11)]);
var inst_32317 = (inst_32315 < inst_32314);
var inst_32318 = inst_32317;
var state_32360__$1 = state_32360;
if(cljs.core.truth_(inst_32318)){
var statearr_32394_32425 = state_32360__$1;
(statearr_32394_32425[(1)] = (10));

} else {
var statearr_32395_32426 = state_32360__$1;
(statearr_32395_32426[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});})(c__6715__auto__))
;
return ((function (switch__6659__auto__,c__6715__auto__){
return (function() {
var state_machine__6660__auto__ = null;
var state_machine__6660__auto____0 = (function (){
var statearr_32399 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32399[(0)] = state_machine__6660__auto__);

(statearr_32399[(1)] = (1));

return statearr_32399;
});
var state_machine__6660__auto____1 = (function (state_32360){
while(true){
var ret_value__6661__auto__ = (function (){try{while(true){
var result__6662__auto__ = switch__6659__auto__.call(null,state_32360);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6662__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6662__auto__;
}
break;
}
}catch (e32400){if((e32400 instanceof Object)){
var ex__6663__auto__ = e32400;
var statearr_32401_32427 = state_32360;
(statearr_32401_32427[(5)] = ex__6663__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32360);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32400;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6661__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32428 = state_32360;
state_32360 = G__32428;
continue;
} else {
return ret_value__6661__auto__;
}
break;
}
});
state_machine__6660__auto__ = function(state_32360){
switch(arguments.length){
case 0:
return state_machine__6660__auto____0.call(this);
case 1:
return state_machine__6660__auto____1.call(this,state_32360);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6660__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6660__auto____0;
state_machine__6660__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6660__auto____1;
return state_machine__6660__auto__;
})()
;})(switch__6659__auto__,c__6715__auto__))
})();
var state__6717__auto__ = (function (){var statearr_32402 = f__6716__auto__.call(null);
(statearr_32402[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6715__auto__);

return statearr_32402;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6717__auto__);
});})(c__6715__auto__))
);

return c__6715__auto__;
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.mapcat_LT_ = (function() {
var mapcat_LT_ = null;
var mapcat_LT___2 = (function (f,in$){
return mapcat_LT_.call(null,f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

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
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.mapcat_GT_ = (function() {
var mapcat_GT_ = null;
var mapcat_GT___2 = (function (f,out){
return mapcat_GT_.call(null,f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

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
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.unique = (function() {
var unique = null;
var unique__1 = (function (ch){
return unique.call(null,ch,null);
});
var unique__2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__6715__auto___32525 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6715__auto___32525,out){
return (function (){
var f__6716__auto__ = (function (){var switch__6659__auto__ = ((function (c__6715__auto___32525,out){
return (function (state_32500){
var state_val_32501 = (state_32500[(1)]);
if((state_val_32501 === (7))){
var inst_32495 = (state_32500[(2)]);
var state_32500__$1 = state_32500;
var statearr_32502_32526 = state_32500__$1;
(statearr_32502_32526[(2)] = inst_32495);

(statearr_32502_32526[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32501 === (1))){
var inst_32477 = null;
var state_32500__$1 = (function (){var statearr_32503 = state_32500;
(statearr_32503[(7)] = inst_32477);

return statearr_32503;
})();
var statearr_32504_32527 = state_32500__$1;
(statearr_32504_32527[(2)] = null);

(statearr_32504_32527[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32501 === (4))){
var inst_32480 = (state_32500[(8)]);
var inst_32480__$1 = (state_32500[(2)]);
var inst_32481 = (inst_32480__$1 == null);
var inst_32482 = cljs.core.not.call(null,inst_32481);
var state_32500__$1 = (function (){var statearr_32505 = state_32500;
(statearr_32505[(8)] = inst_32480__$1);

return statearr_32505;
})();
if(inst_32482){
var statearr_32506_32528 = state_32500__$1;
(statearr_32506_32528[(1)] = (5));

} else {
var statearr_32507_32529 = state_32500__$1;
(statearr_32507_32529[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32501 === (6))){
var state_32500__$1 = state_32500;
var statearr_32508_32530 = state_32500__$1;
(statearr_32508_32530[(2)] = null);

(statearr_32508_32530[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32501 === (3))){
var inst_32497 = (state_32500[(2)]);
var inst_32498 = cljs.core.async.close_BANG_.call(null,out);
var state_32500__$1 = (function (){var statearr_32509 = state_32500;
(statearr_32509[(9)] = inst_32497);

return statearr_32509;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32500__$1,inst_32498);
} else {
if((state_val_32501 === (2))){
var state_32500__$1 = state_32500;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32500__$1,(4),ch);
} else {
if((state_val_32501 === (11))){
var inst_32480 = (state_32500[(8)]);
var inst_32489 = (state_32500[(2)]);
var inst_32477 = inst_32480;
var state_32500__$1 = (function (){var statearr_32510 = state_32500;
(statearr_32510[(10)] = inst_32489);

(statearr_32510[(7)] = inst_32477);

return statearr_32510;
})();
var statearr_32511_32531 = state_32500__$1;
(statearr_32511_32531[(2)] = null);

(statearr_32511_32531[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32501 === (9))){
var inst_32480 = (state_32500[(8)]);
var state_32500__$1 = state_32500;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32500__$1,(11),out,inst_32480);
} else {
if((state_val_32501 === (5))){
var inst_32477 = (state_32500[(7)]);
var inst_32480 = (state_32500[(8)]);
var inst_32484 = cljs.core._EQ_.call(null,inst_32480,inst_32477);
var state_32500__$1 = state_32500;
if(inst_32484){
var statearr_32513_32532 = state_32500__$1;
(statearr_32513_32532[(1)] = (8));

} else {
var statearr_32514_32533 = state_32500__$1;
(statearr_32514_32533[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32501 === (10))){
var inst_32492 = (state_32500[(2)]);
var state_32500__$1 = state_32500;
var statearr_32515_32534 = state_32500__$1;
(statearr_32515_32534[(2)] = inst_32492);

(statearr_32515_32534[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32501 === (8))){
var inst_32477 = (state_32500[(7)]);
var tmp32512 = inst_32477;
var inst_32477__$1 = tmp32512;
var state_32500__$1 = (function (){var statearr_32516 = state_32500;
(statearr_32516[(7)] = inst_32477__$1);

return statearr_32516;
})();
var statearr_32517_32535 = state_32500__$1;
(statearr_32517_32535[(2)] = null);

(statearr_32517_32535[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});})(c__6715__auto___32525,out))
;
return ((function (switch__6659__auto__,c__6715__auto___32525,out){
return (function() {
var state_machine__6660__auto__ = null;
var state_machine__6660__auto____0 = (function (){
var statearr_32521 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32521[(0)] = state_machine__6660__auto__);

(statearr_32521[(1)] = (1));

return statearr_32521;
});
var state_machine__6660__auto____1 = (function (state_32500){
while(true){
var ret_value__6661__auto__ = (function (){try{while(true){
var result__6662__auto__ = switch__6659__auto__.call(null,state_32500);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6662__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6662__auto__;
}
break;
}
}catch (e32522){if((e32522 instanceof Object)){
var ex__6663__auto__ = e32522;
var statearr_32523_32536 = state_32500;
(statearr_32523_32536[(5)] = ex__6663__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32500);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32522;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6661__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32537 = state_32500;
state_32500 = G__32537;
continue;
} else {
return ret_value__6661__auto__;
}
break;
}
});
state_machine__6660__auto__ = function(state_32500){
switch(arguments.length){
case 0:
return state_machine__6660__auto____0.call(this);
case 1:
return state_machine__6660__auto____1.call(this,state_32500);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6660__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6660__auto____0;
state_machine__6660__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6660__auto____1;
return state_machine__6660__auto__;
})()
;})(switch__6659__auto__,c__6715__auto___32525,out))
})();
var state__6717__auto__ = (function (){var statearr_32524 = f__6716__auto__.call(null);
(statearr_32524[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6715__auto___32525);

return statearr_32524;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6717__auto__);
});})(c__6715__auto___32525,out))
);


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
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.partition = (function() {
var partition = null;
var partition__2 = (function (n,ch){
return partition.call(null,n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__6715__auto___32672 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6715__auto___32672,out){
return (function (){
var f__6716__auto__ = (function (){var switch__6659__auto__ = ((function (c__6715__auto___32672,out){
return (function (state_32642){
var state_val_32643 = (state_32642[(1)]);
if((state_val_32643 === (7))){
var inst_32638 = (state_32642[(2)]);
var state_32642__$1 = state_32642;
var statearr_32644_32673 = state_32642__$1;
(statearr_32644_32673[(2)] = inst_32638);

(statearr_32644_32673[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32643 === (1))){
var inst_32605 = (new Array(n));
var inst_32606 = inst_32605;
var inst_32607 = (0);
var state_32642__$1 = (function (){var statearr_32645 = state_32642;
(statearr_32645[(7)] = inst_32607);

(statearr_32645[(8)] = inst_32606);

return statearr_32645;
})();
var statearr_32646_32674 = state_32642__$1;
(statearr_32646_32674[(2)] = null);

(statearr_32646_32674[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32643 === (4))){
var inst_32610 = (state_32642[(9)]);
var inst_32610__$1 = (state_32642[(2)]);
var inst_32611 = (inst_32610__$1 == null);
var inst_32612 = cljs.core.not.call(null,inst_32611);
var state_32642__$1 = (function (){var statearr_32647 = state_32642;
(statearr_32647[(9)] = inst_32610__$1);

return statearr_32647;
})();
if(inst_32612){
var statearr_32648_32675 = state_32642__$1;
(statearr_32648_32675[(1)] = (5));

} else {
var statearr_32649_32676 = state_32642__$1;
(statearr_32649_32676[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32643 === (15))){
var inst_32632 = (state_32642[(2)]);
var state_32642__$1 = state_32642;
var statearr_32650_32677 = state_32642__$1;
(statearr_32650_32677[(2)] = inst_32632);

(statearr_32650_32677[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32643 === (13))){
var state_32642__$1 = state_32642;
var statearr_32651_32678 = state_32642__$1;
(statearr_32651_32678[(2)] = null);

(statearr_32651_32678[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32643 === (6))){
var inst_32607 = (state_32642[(7)]);
var inst_32628 = (inst_32607 > (0));
var state_32642__$1 = state_32642;
if(cljs.core.truth_(inst_32628)){
var statearr_32652_32679 = state_32642__$1;
(statearr_32652_32679[(1)] = (12));

} else {
var statearr_32653_32680 = state_32642__$1;
(statearr_32653_32680[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32643 === (3))){
var inst_32640 = (state_32642[(2)]);
var state_32642__$1 = state_32642;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32642__$1,inst_32640);
} else {
if((state_val_32643 === (12))){
var inst_32606 = (state_32642[(8)]);
var inst_32630 = cljs.core.vec.call(null,inst_32606);
var state_32642__$1 = state_32642;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32642__$1,(15),out,inst_32630);
} else {
if((state_val_32643 === (2))){
var state_32642__$1 = state_32642;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32642__$1,(4),ch);
} else {
if((state_val_32643 === (11))){
var inst_32622 = (state_32642[(2)]);
var inst_32623 = (new Array(n));
var inst_32606 = inst_32623;
var inst_32607 = (0);
var state_32642__$1 = (function (){var statearr_32654 = state_32642;
(statearr_32654[(7)] = inst_32607);

(statearr_32654[(8)] = inst_32606);

(statearr_32654[(10)] = inst_32622);

return statearr_32654;
})();
var statearr_32655_32681 = state_32642__$1;
(statearr_32655_32681[(2)] = null);

(statearr_32655_32681[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32643 === (9))){
var inst_32606 = (state_32642[(8)]);
var inst_32620 = cljs.core.vec.call(null,inst_32606);
var state_32642__$1 = state_32642;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32642__$1,(11),out,inst_32620);
} else {
if((state_val_32643 === (5))){
var inst_32615 = (state_32642[(11)]);
var inst_32607 = (state_32642[(7)]);
var inst_32606 = (state_32642[(8)]);
var inst_32610 = (state_32642[(9)]);
var inst_32614 = (inst_32606[inst_32607] = inst_32610);
var inst_32615__$1 = (inst_32607 + (1));
var inst_32616 = (inst_32615__$1 < n);
var state_32642__$1 = (function (){var statearr_32656 = state_32642;
(statearr_32656[(11)] = inst_32615__$1);

(statearr_32656[(12)] = inst_32614);

return statearr_32656;
})();
if(cljs.core.truth_(inst_32616)){
var statearr_32657_32682 = state_32642__$1;
(statearr_32657_32682[(1)] = (8));

} else {
var statearr_32658_32683 = state_32642__$1;
(statearr_32658_32683[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32643 === (14))){
var inst_32635 = (state_32642[(2)]);
var inst_32636 = cljs.core.async.close_BANG_.call(null,out);
var state_32642__$1 = (function (){var statearr_32660 = state_32642;
(statearr_32660[(13)] = inst_32635);

return statearr_32660;
})();
var statearr_32661_32684 = state_32642__$1;
(statearr_32661_32684[(2)] = inst_32636);

(statearr_32661_32684[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32643 === (10))){
var inst_32626 = (state_32642[(2)]);
var state_32642__$1 = state_32642;
var statearr_32662_32685 = state_32642__$1;
(statearr_32662_32685[(2)] = inst_32626);

(statearr_32662_32685[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32643 === (8))){
var inst_32615 = (state_32642[(11)]);
var inst_32606 = (state_32642[(8)]);
var tmp32659 = inst_32606;
var inst_32606__$1 = tmp32659;
var inst_32607 = inst_32615;
var state_32642__$1 = (function (){var statearr_32663 = state_32642;
(statearr_32663[(7)] = inst_32607);

(statearr_32663[(8)] = inst_32606__$1);

return statearr_32663;
})();
var statearr_32664_32686 = state_32642__$1;
(statearr_32664_32686[(2)] = null);

(statearr_32664_32686[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});})(c__6715__auto___32672,out))
;
return ((function (switch__6659__auto__,c__6715__auto___32672,out){
return (function() {
var state_machine__6660__auto__ = null;
var state_machine__6660__auto____0 = (function (){
var statearr_32668 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32668[(0)] = state_machine__6660__auto__);

(statearr_32668[(1)] = (1));

return statearr_32668;
});
var state_machine__6660__auto____1 = (function (state_32642){
while(true){
var ret_value__6661__auto__ = (function (){try{while(true){
var result__6662__auto__ = switch__6659__auto__.call(null,state_32642);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6662__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6662__auto__;
}
break;
}
}catch (e32669){if((e32669 instanceof Object)){
var ex__6663__auto__ = e32669;
var statearr_32670_32687 = state_32642;
(statearr_32670_32687[(5)] = ex__6663__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32642);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32669;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6661__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32688 = state_32642;
state_32642 = G__32688;
continue;
} else {
return ret_value__6661__auto__;
}
break;
}
});
state_machine__6660__auto__ = function(state_32642){
switch(arguments.length){
case 0:
return state_machine__6660__auto____0.call(this);
case 1:
return state_machine__6660__auto____1.call(this,state_32642);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6660__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6660__auto____0;
state_machine__6660__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6660__auto____1;
return state_machine__6660__auto__;
})()
;})(switch__6659__auto__,c__6715__auto___32672,out))
})();
var state__6717__auto__ = (function (){var statearr_32671 = f__6716__auto__.call(null);
(statearr_32671[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6715__auto___32672);

return statearr_32671;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6717__auto__);
});})(c__6715__auto___32672,out))
);


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
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.partition_by = (function() {
var partition_by = null;
var partition_by__2 = (function (f,ch){
return partition_by.call(null,f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__6715__auto___32831 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6715__auto___32831,out){
return (function (){
var f__6716__auto__ = (function (){var switch__6659__auto__ = ((function (c__6715__auto___32831,out){
return (function (state_32801){
var state_val_32802 = (state_32801[(1)]);
if((state_val_32802 === (7))){
var inst_32797 = (state_32801[(2)]);
var state_32801__$1 = state_32801;
var statearr_32803_32832 = state_32801__$1;
(statearr_32803_32832[(2)] = inst_32797);

(statearr_32803_32832[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32802 === (1))){
var inst_32760 = [];
var inst_32761 = inst_32760;
var inst_32762 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_32801__$1 = (function (){var statearr_32804 = state_32801;
(statearr_32804[(7)] = inst_32761);

(statearr_32804[(8)] = inst_32762);

return statearr_32804;
})();
var statearr_32805_32833 = state_32801__$1;
(statearr_32805_32833[(2)] = null);

(statearr_32805_32833[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32802 === (4))){
var inst_32765 = (state_32801[(9)]);
var inst_32765__$1 = (state_32801[(2)]);
var inst_32766 = (inst_32765__$1 == null);
var inst_32767 = cljs.core.not.call(null,inst_32766);
var state_32801__$1 = (function (){var statearr_32806 = state_32801;
(statearr_32806[(9)] = inst_32765__$1);

return statearr_32806;
})();
if(inst_32767){
var statearr_32807_32834 = state_32801__$1;
(statearr_32807_32834[(1)] = (5));

} else {
var statearr_32808_32835 = state_32801__$1;
(statearr_32808_32835[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32802 === (15))){
var inst_32791 = (state_32801[(2)]);
var state_32801__$1 = state_32801;
var statearr_32809_32836 = state_32801__$1;
(statearr_32809_32836[(2)] = inst_32791);

(statearr_32809_32836[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32802 === (13))){
var state_32801__$1 = state_32801;
var statearr_32810_32837 = state_32801__$1;
(statearr_32810_32837[(2)] = null);

(statearr_32810_32837[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32802 === (6))){
var inst_32761 = (state_32801[(7)]);
var inst_32786 = inst_32761.length;
var inst_32787 = (inst_32786 > (0));
var state_32801__$1 = state_32801;
if(cljs.core.truth_(inst_32787)){
var statearr_32811_32838 = state_32801__$1;
(statearr_32811_32838[(1)] = (12));

} else {
var statearr_32812_32839 = state_32801__$1;
(statearr_32812_32839[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32802 === (3))){
var inst_32799 = (state_32801[(2)]);
var state_32801__$1 = state_32801;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32801__$1,inst_32799);
} else {
if((state_val_32802 === (12))){
var inst_32761 = (state_32801[(7)]);
var inst_32789 = cljs.core.vec.call(null,inst_32761);
var state_32801__$1 = state_32801;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32801__$1,(15),out,inst_32789);
} else {
if((state_val_32802 === (2))){
var state_32801__$1 = state_32801;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32801__$1,(4),ch);
} else {
if((state_val_32802 === (11))){
var inst_32769 = (state_32801[(10)]);
var inst_32765 = (state_32801[(9)]);
var inst_32779 = (state_32801[(2)]);
var inst_32780 = [];
var inst_32781 = inst_32780.push(inst_32765);
var inst_32761 = inst_32780;
var inst_32762 = inst_32769;
var state_32801__$1 = (function (){var statearr_32813 = state_32801;
(statearr_32813[(7)] = inst_32761);

(statearr_32813[(11)] = inst_32781);

(statearr_32813[(12)] = inst_32779);

(statearr_32813[(8)] = inst_32762);

return statearr_32813;
})();
var statearr_32814_32840 = state_32801__$1;
(statearr_32814_32840[(2)] = null);

(statearr_32814_32840[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32802 === (9))){
var inst_32761 = (state_32801[(7)]);
var inst_32777 = cljs.core.vec.call(null,inst_32761);
var state_32801__$1 = state_32801;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32801__$1,(11),out,inst_32777);
} else {
if((state_val_32802 === (5))){
var inst_32769 = (state_32801[(10)]);
var inst_32762 = (state_32801[(8)]);
var inst_32765 = (state_32801[(9)]);
var inst_32769__$1 = f.call(null,inst_32765);
var inst_32770 = cljs.core._EQ_.call(null,inst_32769__$1,inst_32762);
var inst_32771 = cljs.core.keyword_identical_QMARK_.call(null,inst_32762,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_32772 = (inst_32770) || (inst_32771);
var state_32801__$1 = (function (){var statearr_32815 = state_32801;
(statearr_32815[(10)] = inst_32769__$1);

return statearr_32815;
})();
if(cljs.core.truth_(inst_32772)){
var statearr_32816_32841 = state_32801__$1;
(statearr_32816_32841[(1)] = (8));

} else {
var statearr_32817_32842 = state_32801__$1;
(statearr_32817_32842[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32802 === (14))){
var inst_32794 = (state_32801[(2)]);
var inst_32795 = cljs.core.async.close_BANG_.call(null,out);
var state_32801__$1 = (function (){var statearr_32819 = state_32801;
(statearr_32819[(13)] = inst_32794);

return statearr_32819;
})();
var statearr_32820_32843 = state_32801__$1;
(statearr_32820_32843[(2)] = inst_32795);

(statearr_32820_32843[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32802 === (10))){
var inst_32784 = (state_32801[(2)]);
var state_32801__$1 = state_32801;
var statearr_32821_32844 = state_32801__$1;
(statearr_32821_32844[(2)] = inst_32784);

(statearr_32821_32844[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32802 === (8))){
var inst_32761 = (state_32801[(7)]);
var inst_32769 = (state_32801[(10)]);
var inst_32765 = (state_32801[(9)]);
var inst_32774 = inst_32761.push(inst_32765);
var tmp32818 = inst_32761;
var inst_32761__$1 = tmp32818;
var inst_32762 = inst_32769;
var state_32801__$1 = (function (){var statearr_32822 = state_32801;
(statearr_32822[(7)] = inst_32761__$1);

(statearr_32822[(8)] = inst_32762);

(statearr_32822[(14)] = inst_32774);

return statearr_32822;
})();
var statearr_32823_32845 = state_32801__$1;
(statearr_32823_32845[(2)] = null);

(statearr_32823_32845[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});})(c__6715__auto___32831,out))
;
return ((function (switch__6659__auto__,c__6715__auto___32831,out){
return (function() {
var state_machine__6660__auto__ = null;
var state_machine__6660__auto____0 = (function (){
var statearr_32827 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32827[(0)] = state_machine__6660__auto__);

(statearr_32827[(1)] = (1));

return statearr_32827;
});
var state_machine__6660__auto____1 = (function (state_32801){
while(true){
var ret_value__6661__auto__ = (function (){try{while(true){
var result__6662__auto__ = switch__6659__auto__.call(null,state_32801);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6662__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6662__auto__;
}
break;
}
}catch (e32828){if((e32828 instanceof Object)){
var ex__6663__auto__ = e32828;
var statearr_32829_32846 = state_32801;
(statearr_32829_32846[(5)] = ex__6663__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32801);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32828;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6661__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32847 = state_32801;
state_32801 = G__32847;
continue;
} else {
return ret_value__6661__auto__;
}
break;
}
});
state_machine__6660__auto__ = function(state_32801){
switch(arguments.length){
case 0:
return state_machine__6660__auto____0.call(this);
case 1:
return state_machine__6660__auto____1.call(this,state_32801);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6660__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6660__auto____0;
state_machine__6660__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6660__auto____1;
return state_machine__6660__auto__;
})()
;})(switch__6659__auto__,c__6715__auto___32831,out))
})();
var state__6717__auto__ = (function (){var statearr_32830 = f__6716__auto__.call(null);
(statearr_32830[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6715__auto___32831);

return statearr_32830;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6717__auto__);
});})(c__6715__auto___32831,out))
);


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