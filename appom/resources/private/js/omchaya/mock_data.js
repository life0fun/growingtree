// Compiled by ClojureScript 0.0-2173
goog.provide('omchaya.mock_data');
goog.require('cljs.core');
goog.require('omchaya.utils');
goog.require('omchaya.utils');
omchaya.mock_data.user_emails = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["sean@bushi.do","nb@bushi.do","sacha@bushi.do"], null);
/**
* @param {...*} var_args
*/
omchaya.mock_data.random_message = (function() { 
var random_message__delegate = function (channel_id,p__23411){var vec__23413 = p__23411;var at_now_QMARK_ = cljs.core.nth.call(null,vec__23413,0,null);var at = (cljs.core.truth_(at_now_QMARK_)?(new Date()):(function (){var x = (new Date());var x__$1 = x.getTime();var x__$2 = (x__$1 - cljs.core.rand_int.call(null,(((1000 * 60) * 24) * 60)));var x__$3 = (new Date(x__$2));return x__$3;
})());return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"created_at","created_at",2383584348),at,new cljs.core.Keyword(null,"author","author",3902543101),cljs.core.rand_nth.call(null,omchaya.mock_data.user_emails),new cljs.core.Keyword(null,"content","content",1965434859),cljs.core.rand_nth.call(null,new cljs.core.PersistentVector(null, 18, 5, cljs.core.PersistentVector.EMPTY_NODE, ["deployed with ruby on...?","ha, dat stuff works","Random content","Heh, :+1:","Wow, :exclamation:","@sgrove Ok, let's do this!","/queue http://mp3.tom7.org/t7es/2008/t7es_msiegler.mp3","/queue http://mp3.tom7.org/t7es/2008/t7es_goog.mp3","/queue http://mp3.tom7.org/t7es/2008/t7es_petrolatum.mp3","/queue http://mp3.tom7.org/t7es/2009/t7es-sans-pellegrino.mp3","/queue http://mp3.tom7.org/t7es/2008/t7es_rt2i.mp3","/queue http://mp3.tom7.org/t7es/2007/tom7=rutgers.mp3","/queue https://dl.dropboxusercontent.com/u/412963/11%20Charlotte.mp3","/queue https://dl.dropboxusercontent.com/u/412963/Golf%20Clap.mp3","/queue https://dl.dropboxusercontent.com/u/412963/cheer.mp3","/queue https://dl.dropboxusercontent.com/u/412963/Why%20This%20Kolaveri%20Di%20Full%20Song%20Promo%20Video%20in%20HD%20-%20.mp3","@sacha Be careful with that","Hey @nb - I got you something nice... (not really)"], null)),new cljs.core.Keyword(null,"channel-id","channel-id",3378014615),channel_id], null);
};
var random_message = function (channel_id,var_args){
var p__23411 = null;if (arguments.length > 1) {
  p__23411 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return random_message__delegate.call(this,channel_id,p__23411);};
random_message.cljs$lang$maxFixedArity = 1;
random_message.cljs$lang$applyTo = (function (arglist__23414){
var channel_id = cljs.core.first(arglist__23414);
var p__23411 = cljs.core.rest(arglist__23414);
return random_message__delegate(channel_id,p__23411);
});
random_message.cljs$core$IFn$_invoke$arity$variadic = random_message__delegate;
return random_message;
})()
;
omchaya.mock_data.random_title = (function random_title(){return cljs.core.rand_nth.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Background","A dark place","\uD55C\uAD6D\uC5B4","Zork lovers","The War Room","Emotional Trance","8 out of 10 cats","Was it something I said?","Example"], null));
});
omchaya.mock_data.media = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",1014018390),"/system/attachments/files/000/000/098/original/call-centre-woman.jpg?1392265218",new cljs.core.Keyword(null,"name","name",1017277949),"call-centre-woman.jpg"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",1014018390),"/system/attachments/files/000/000/098/original/design.pdf?1392265218",new cljs.core.Keyword(null,"name","name",1017277949),"design.pdf"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",1014018390),"/system/attachments/files/000/000/098/original/example.mp3?1392265218",new cljs.core.Keyword(null,"name","name",1017277949),"example.mp3"], null)], null);
/**
* @param {...*} var_args
*/
omchaya.mock_data.random_channel = (function() { 
var random_channel__delegate = function (order,p__23415){var vec__23417 = p__23415;var title = cljs.core.nth.call(null,vec__23417,0,null);var title__$1 = (function (){var or__3443__auto__ = title;if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{return omchaya.mock_data.random_title.call(null);
}
})();return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"player","player",4323118675),new cljs.core.Keyword(null,"users","users",1125482874),new cljs.core.Keyword(null,"media","media",1117676374),new cljs.core.Keyword(null,"title","title",1124275658),new cljs.core.Keyword(null,"activities","activities",3062509407),new cljs.core.Keyword(null,"sfx","sfx",1014018039),new cljs.core.Keyword(null,"order","order",1119910592),new cljs.core.Keyword(null,"id","id",1013907597),new cljs.core.Keyword(null,"selected","selected",2205476365)],[new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"source-url","source-url",4196274223),"https://dl.dropboxusercontent.com/u/412963/Why%20This%20Kolaveri%20Di%20Full%20Song%20Promo%20Video%20in%20HD%20-%20.mp3",new cljs.core.Keyword(null,"playing-order","playing-order",3298952289),-1,new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.Keyword(null,"playing","playing",520340384),new cljs.core.Keyword(null,"loading","loading",1350554798),false,new cljs.core.Keyword(null,"playlist","playlist",2893378884),cljs.core.PersistentVector.EMPTY], null),cljs.core.take.call(null,(cljs.core.rand_int.call(null,cljs.core.count.call(null,omchaya.mock_data.user_emails)) + 1),cljs.core.shuffle.call(null,omchaya.mock_data.user_emails)),cljs.core.vec.call(null,cljs.core.take.call(null,(cljs.core.rand_int.call(null,0) + 1),cljs.core.shuffle.call(null,omchaya.mock_data.media))),title__$1,cljs.core.vec.call(null,cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"created_at","created_at",2383584348),cljs.core.repeatedly.call(null,(cljs.core.rand_int.call(null,0) + 1),(function (){return omchaya.mock_data.random_message.call(null,omchaya.utils.safe_sel.call(null,title__$1));
})))),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"source-url","source-url",4196274223),null], null),order,omchaya.utils.safe_sel.call(null,title__$1),false]);
};
var random_channel = function (order,var_args){
var p__23415 = null;if (arguments.length > 1) {
  p__23415 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return random_channel__delegate.call(this,order,p__23415);};
random_channel.cljs$lang$maxFixedArity = 1;
random_channel.cljs$lang$applyTo = (function (arglist__23418){
var order = cljs.core.first(arglist__23418);
var p__23415 = cljs.core.rest(arglist__23418);
return random_channel__delegate(order,p__23415);
});
random_channel.cljs$core$IFn$_invoke$arity$variadic = random_channel__delegate;
return random_channel;
})()
;
omchaya.mock_data.initial_state = (function initial_state(comms){var channels = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,cljs.core.comp.call(null,cljs.core.juxt.call(null,new cljs.core.Keyword(null,"id","id",1013907597),cljs.core.identity),omchaya.mock_data.random_channel),cljs.core.range.call(null,2,100)));return new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"audio","audio",1107070792),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"volume","volume",4497988236),100,new cljs.core.Keyword(null,"muted","muted",1118168285),true], null),new cljs.core.Keyword(null,"windows","windows",2363397621),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"window-inspector","window-inspector",2735849676),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"open","open",1017321916),false], null)], null),new cljs.core.Keyword(null,"settings","settings",2448535445),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"message-limit","message-limit",2656236007),50,new cljs.core.Keyword(null,"forms","forms",1111523233),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"search","search",4402534682),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"focused","focused",4617830121),false], null),new cljs.core.Keyword(null,"user-message","user-message",2253309815),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"focused","focused",4617830121),false], null)], null),new cljs.core.Keyword(null,"menus","menus",1117686374),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"user-menu","user-menu",1307043219),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"open","open",1017321916),false], null)], null),new cljs.core.Keyword(null,"sidebar","sidebar",3099131598),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"left","left",1017222009),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"open","open",1017321916),false], null),new cljs.core.Keyword(null,"right","right",1122416014),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"open","open",1017321916),false], null)], null),new cljs.core.Keyword(null,"inspector","inspector",931868265),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"path","path",1017337751),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"users","users",1125482874)], null)], null)], null),new cljs.core.Keyword(null,"selected-channel","selected-channel",2473753411),"1",new cljs.core.Keyword(null,"channels","channels",2446530370),(function (){var ch = channels;var ch__$1 = cljs.core.assoc.call(null,ch,"1",cljs.core.assoc.call(null,omchaya.mock_data.random_channel.call(null,1,"Lobby"),new cljs.core.Keyword(null,"id","id",1013907597),"1"));var ch__$2 = cljs.core.update_in.call(null,ch__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["1"], null),cljs.core.assoc,new cljs.core.Keyword(null,"selected","selected",2205476365),true);return ch__$2;
})(),new cljs.core.Keyword(null,"users","users",1125482874),new cljs.core.PersistentArrayMap(null, 3, ["sean@bushi.do",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"full-name","full-name",3585519227),"Sean Grove",new cljs.core.Keyword(null,"email","email",1110523662),"sean@bushi.do",new cljs.core.Keyword(null,"username","username",748190792),"sgrove"], null),"nb@bushi.do",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"full-name","full-name",3585519227),"Nathan Broadbent",new cljs.core.Keyword(null,"email","email",1110523662),"nb@bushi.do",new cljs.core.Keyword(null,"username","username",748190792),"nb"], null),"sacha@bushi.do",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"full-name","full-name",3585519227),"Sacha Greif",new cljs.core.Keyword(null,"email","email",1110523662),"sacha@bushi.do",new cljs.core.Keyword(null,"username","username",748190792),"sacha"], null)], null),new cljs.core.Keyword(null,"current-user-email","current-user-email",4091392864),"sean@bushi.do",new cljs.core.Keyword(null,"comms","comms",1108747865),comms], null);
});
