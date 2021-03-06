// Compiled by ClojureScript 0.0-2850 {}
goog.provide('growingtree_app.mock_data');
goog.require('cljs.core');
goog.require('growingtree_app.utils');
goog.require('cljs.reader');
goog.require('clojure.string');
growingtree_app.mock_data.users = new cljs.core.PersistentArrayMap(null, 4, ["rich-dad@rich.com",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"full-name","full-name",408178550),"Rich dad",new cljs.core.Keyword(null,"email","email",1415816706),"rich-dad@rich.com",new cljs.core.Keyword(null,"username","username",1605666410),"Rich dad"], null),"rich-mom@rich.com",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"full-name","full-name",408178550),"Rich mom",new cljs.core.Keyword(null,"email","email",1415816706),"rich-mom@rich.com",new cljs.core.Keyword(null,"username","username",1605666410),"Rich mom"], null),"rich-daughter@rich.com",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"full-name","full-name",408178550),"Rich daughter",new cljs.core.Keyword(null,"email","email",1415816706),"rich-daughter@rich.com",new cljs.core.Keyword(null,"username","username",1605666410),"Rich daughter"], null),"rich-son@rich.com",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"full-name","full-name",408178550),"Rich son",new cljs.core.Keyword(null,"email","email",1415816706),"rich-son@rich.com",new cljs.core.Keyword(null,"username","username",1605666410),"Rich son"], null)], null);
growingtree_app.mock_data.user_emails = cljs.core.keys.call(null,growingtree_app.mock_data.users);
/**
* @param {...*} var_args
*/
growingtree_app.mock_data.random_thing = (function() { 
var random_thing__delegate = function (channel_id,type,p__23330){
var vec__23332 = p__23330;
var at_now_QMARK_ = cljs.core.nth.call(null,vec__23332,(0),null);
var at = (cljs.core.truth_(at_now_QMARK_)?(new Date()):(function (){var x = (new Date());
var x__$1 = x.getTime();
var x__$2 = (x__$1 - cljs.core.rand_int.call(null,((((1000) * (60)) * (24)) * (60))));
var x__$3 = (new Date(x__$2));
return x__$3;
})());
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),at.value,new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"created_at","created_at",1484050750),at,new cljs.core.Keyword(null,"author","author",2111686192),cljs.core.rand_nth.call(null,growingtree_app.mock_data.user_emails),new cljs.core.Keyword(null,"content","content",15833224),cljs.core.rand_nth.call(null,new cljs.core.PersistentVector(null, 18, 5, cljs.core.PersistentVector.EMPTY_NODE, ["deployed with ruby on...?","ha, dat stuff works","Random content","Heh, :+1:","Wow, :exclamation:","@sgrove Ok, let's do this!","/queue http://mp3.tom7.org/t7es/2008/t7es_msiegler.mp3","/queue http://mp3.tom7.org/t7es/2008/t7es_goog.mp3","/queue http://mp3.tom7.org/t7es/2008/t7es_petrolatum.mp3","/queue http://mp3.tom7.org/t7es/2009/t7es-sans-pellegrino.mp3","/queue http://mp3.tom7.org/t7es/2008/t7es_rt2i.mp3","/queue http://mp3.tom7.org/t7es/2007/tom7=rutgers.mp3","/queue https://dl.dropboxusercontent.com/u/412963/11%20Charlotte.mp3","/queue https://dl.dropboxusercontent.com/u/412963/Golf%20Clap.mp3","/queue https://dl.dropboxusercontent.com/u/412963/cheer.mp3","/queue https://dl.dropboxusercontent.com/u/412963/Why%20This%20Kolaveri%20Di%20Full%20Song%20Promo%20Video%20in%20HD%20-%20.mp3","@sacha Be careful with that","Hey @nb - I got you something nice... (not really)"], null)),new cljs.core.Keyword(null,"channel-id","channel-id",138191095),channel_id], null);
};
var random_thing = function (channel_id,type,var_args){
var p__23330 = null;
if (arguments.length > 2) {
var G__23333__i = 0, G__23333__a = new Array(arguments.length -  2);
while (G__23333__i < G__23333__a.length) {G__23333__a[G__23333__i] = arguments[G__23333__i + 2]; ++G__23333__i;}
  p__23330 = new cljs.core.IndexedSeq(G__23333__a,0);
} 
return random_thing__delegate.call(this,channel_id,type,p__23330);};
random_thing.cljs$lang$maxFixedArity = 2;
random_thing.cljs$lang$applyTo = (function (arglist__23334){
var channel_id = cljs.core.first(arglist__23334);
arglist__23334 = cljs.core.next(arglist__23334);
var type = cljs.core.first(arglist__23334);
var p__23330 = cljs.core.rest(arglist__23334);
return random_thing__delegate(channel_id,type,p__23330);
});
random_thing.cljs$core$IFn$_invoke$arity$variadic = random_thing__delegate;
return random_thing;
})()
;
growingtree_app.mock_data.random_title = (function random_title(){
return cljs.core.rand_nth.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["math","science for youth","music","art lovers","The War Room","gymnastic","reading","Harry Potter","Frozen"], null));
});
growingtree_app.mock_data.media = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),"/system/attachments/files/000/000/098/original/call-centre-woman.jpg?1392265218",new cljs.core.Keyword(null,"name","name",1843675177),"call-centre-woman.jpg"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),"/system/attachments/files/000/000/098/original/design.pdf?1392265218",new cljs.core.Keyword(null,"name","name",1843675177),"design.pdf"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),"/system/attachments/files/000/000/098/original/example.mp3?1392265218",new cljs.core.Keyword(null,"name","name",1843675177),"example.mp3"], null)], null);
growingtree_app.mock_data.nav_types = new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"parent","parent",-878878779),new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.Keyword(null,"group","group",582596132),new cljs.core.Keyword(null,"course","course",1455432948),new cljs.core.Keyword(null,"lecture","lecture",-1052740831),new cljs.core.Keyword(null,"enrollment","enrollment",351130082),new cljs.core.Keyword(null,"question","question",-1411720117),new cljs.core.Keyword(null,"assignment","assignment",1330426519),new cljs.core.Keyword(null,"activity","activity",-1179221455),new cljs.core.Keyword(null,"shoutout","shoutout",-1748431418)], null);
growingtree_app.mock_data.my_nav_types = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"group","group",582596132),new cljs.core.Keyword(null,"enrollment","enrollment",351130082),new cljs.core.Keyword(null,"question","question",-1411720117),new cljs.core.Keyword(null,"assignment","assignment",1330426519),new cljs.core.Keyword(null,"like","like",-914050076),new cljs.core.Keyword(null,"shoutout","shoutout",-1748431418),new cljs.core.Keyword(null,"activity","activity",-1179221455),new cljs.core.Keyword(null,"timeline","timeline",192903161)], null);
growingtree_app.mock_data.root_add_type = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"group","group",582596132),null,new cljs.core.Keyword(null,"parent","parent",-878878779),null,new cljs.core.Keyword(null,"shoutout","shoutout",-1748431418),null,new cljs.core.Keyword(null,"course","course",1455432948),null], null), null);
growingtree_app.mock_data.get_nav_path = (function get_nav_path(state){
return cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nav-path","nav-path",-444531376)], null));
});
growingtree_app.mock_data.get_last_nav_path = (function get_last_nav_path(state){
return cljs.core.last.call(null,growingtree_app.mock_data.get_nav_path.call(null,state));
});
growingtree_app.mock_data.get_prev_nav_path = (function get_prev_nav_path(state){
return cljs.core.last.call(null,cljs.core.drop_last.call(null,growingtree_app.mock_data.get_nav_path.call(null,state)));
});
growingtree_app.mock_data.get_nav_path_nxt_thing_type = (function get_nav_path_nxt_thing_type(nav_path){
var nxt_thing_type = cljs.core.get_in.call(null,nav_path,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"body","body",-2049205669),(1),(2)], null));
return nxt_thing_type;
});
growingtree_app.mock_data.login_msg_nav_path = (function login_msg_nav_path(form_name,data){
var msg_type = ((cljs.core._EQ_.call(null,form_name,"login-form"))?new cljs.core.Keyword(null,"login","login",55217519):new cljs.core.Keyword(null,"signup","signup",1961016747));
var msg = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [msg_type,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [msg_type,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"login","login",55217519),(0),msg_type], null)], null),new cljs.core.Keyword(null,"data","data",-232669377),data], null)], null);
return msg;
});
growingtree_app.mock_data.retry_login_msg_nav_path = (function retry_login_msg_nav_path(error_msg){
var msg_type = new cljs.core.Keyword(null,"login-error","login-error",-1290265439);
var msg = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [msg_type,error_msg], null);
return msg;
});
growingtree_app.mock_data.generate_nav_path_from_url = (function generate_nav_path_from_url(url){
console.log(cljs.core.pr_str.call(null,"gen nav-path ",url));

var vec__23337 = clojure.string.split.call(null,url,/\//);
var head = cljs.core.nth.call(null,vec__23337,(0),null);
var pid = cljs.core.nth.call(null,vec__23337,(1),null);
var filtered = cljs.core.nth.call(null,vec__23337,(2),null);
var head__$1 = cljs.core.keyword.call(null,head);
var pid__$1 = (cljs.core.truth_(pid)?cljs.reader.read_string.call(null,pid):null);
var filtered__$1 = (cljs.core.truth_(filtered)?cljs.core.keyword.call(null,filtered):null);
var msg_type = (cljs.core.truth_(filtered__$1)?new cljs.core.Keyword(null,"filter-things","filter-things",-1018039660):new cljs.core.Keyword(null,"all-things","all-things",1825895767));
var nav_path = (function (){var G__23338 = (((msg_type instanceof cljs.core.Keyword))?msg_type.fqn:null);
switch (G__23338) {
case "filter-things":
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [msg_type,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [head__$1,pid__$1,filtered__$1], null)], null),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pid","pid",1018387698),pid__$1], null)], null);

break;
case "all-things":
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [msg_type,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"all","all",892129742),(0),head__$1], null)], null)], null);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(msg_type)].join('')));

}
})();
return nav_path;
});
growingtree_app.mock_data.all_things_msg_nav_path = (function all_things_msg_nav_path(thing_type,data){
var msg = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"all-things","all-things",1825895767),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"all-things","all-things",1825895767),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"all","all",892129742),(0),thing_type], null)], null),new cljs.core.Keyword(null,"data","data",-232669377),data], null)], null);
return msg;
});
growingtree_app.mock_data.filter_things_msg_nav_path = (function filter_things_msg_nav_path(parent_type,parent_id,filtered_type,data){
var msg = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter-things","filter-things",-1018039660),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter-things","filter-things",-1018039660),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [parent_type,parent_id,filtered_type], null)], null),new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pid","pid",1018387698),parent_id], null),data)], null)], null);
return msg;
});
growingtree_app.mock_data.message_things_msg_nav_path = (function message_things_msg_nav_path(parent_type,parent_id,message_type,data){
var msg = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message-things","message-things",-908841858),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message-things","message-things",-908841858),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [parent_type,parent_id,message_type], null)], null),new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pid","pid",1018387698),parent_id], null),data)], null)], null);
return msg;
});
growingtree_app.mock_data.things_msg_nav_path = (function things_msg_nav_path(parent_type,parent_id,thing_type,data){
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"shoutout","shoutout",-1748431418),null], null), null).call(null,thing_type))){
return growingtree_app.mock_data.message_things_msg_nav_path.call(null,parent_type,parent_id,thing_type,data);
} else {
return growingtree_app.mock_data.filter_things_msg_nav_path.call(null,parent_type,parent_id,thing_type,data);
}
});
growingtree_app.mock_data.popstate_msg = (function popstate_msg(url){
var msg = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"popstate","popstate",942216014),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"url","url",276297046),url], null)], null);
return msg;
});
growingtree_app.mock_data.search_msg_nav_path = (function search_msg_nav_path(thing_type,search){
var msg = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"search-things","search-things",150817957),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"search-things","search-things",150817957),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [thing_type,(0),search], null)], null),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"thing-type","thing-type",15521235),thing_type,new cljs.core.Keyword(null,"searchkey","searchkey",-1604385209),search], null)], null)], null);
return msg;
});
growingtree_app.mock_data.newthing_form_msg_nav_path = (function newthing_form_msg_nav_path(thing_type,options){
var newthing_path = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[thing_type,cljs.core.keyword.call(null,[cljs.core.str("add-"),cljs.core.str(cljs.core.name.call(null,thing_type))].join(''))],null));
var newthing_data = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"newthing-form","newthing-form",-676457503),newthing_path], null),new cljs.core.Keyword(null,"data","data",-232669377),options], null);
var msg = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"newthing-form","newthing-form",-676457503),newthing_data], null);
return msg;
});
growingtree_app.mock_data.add_thing_msg_nav_path = (function add_thing_msg_nav_path(thing_type,data){
var msg = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"add-thing","add-thing",321362583),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"add-thing","add-thing",321362583),thing_type,new cljs.core.Keyword(null,"data","data",-232669377),data], null)], null);
return msg;
});
/**
* @param {...*} var_args
*/
growingtree_app.mock_data.random_channel = (function() { 
var random_channel__delegate = function (order,p__23340){
var vec__23342 = p__23340;
var title = cljs.core.nth.call(null,vec__23342,(0),null);
var title__$1 = (function (){var or__3807__auto__ = title;
if(cljs.core.truth_(or__3807__auto__)){
return or__3807__auto__;
} else {
return growingtree_app.mock_data.random_title.call(null);
}
})();
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"selected","selected",574897764),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"order","order",-1254677256),new cljs.core.Keyword(null,"activities","activities",1654844313),new cljs.core.Keyword(null,"sfx","sfx",-634589668),new cljs.core.Keyword(null,"media","media",-1066138403),new cljs.core.Keyword(null,"users","users",-713552705)],[false,title__$1,growingtree_app.utils.safe_sel.call(null,title__$1),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"source-url","source-url",569467631),"https://dl.dropboxusercontent.com/u/412963/x.mp3",new cljs.core.Keyword(null,"playing-order","playing-order",-1040974713),(-1),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"playing","playing",70013335),new cljs.core.Keyword(null,"loading","loading",-737050189),false,new cljs.core.Keyword(null,"playlist","playlist",1952276871),cljs.core.PersistentVector.EMPTY], null),order,cljs.core.vec.call(null,cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"created_at","created_at",1484050750),cljs.core.repeatedly.call(null,(cljs.core.rand_int.call(null,(0)) + (1)),((function (title__$1,vec__23342,title){
return (function (){
return growingtree_app.mock_data.random_thing.call(null,growingtree_app.utils.safe_sel.call(null,title__$1),cljs.core.rand_nth.call(null,growingtree_app.mock_data.nav_types));
});})(title__$1,vec__23342,title))
))),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"source-url","source-url",569467631),null], null),cljs.core.vec.call(null,cljs.core.take.call(null,(cljs.core.rand_int.call(null,(0)) + (1)),cljs.core.shuffle.call(null,growingtree_app.mock_data.media))),cljs.core.take.call(null,(cljs.core.rand_int.call(null,cljs.core.count.call(null,growingtree_app.mock_data.user_emails)) + (1)),cljs.core.shuffle.call(null,growingtree_app.mock_data.user_emails))]);
};
var random_channel = function (order,var_args){
var p__23340 = null;
if (arguments.length > 1) {
var G__23343__i = 0, G__23343__a = new Array(arguments.length -  1);
while (G__23343__i < G__23343__a.length) {G__23343__a[G__23343__i] = arguments[G__23343__i + 1]; ++G__23343__i;}
  p__23340 = new cljs.core.IndexedSeq(G__23343__a,0);
} 
return random_channel__delegate.call(this,order,p__23340);};
random_channel.cljs$lang$maxFixedArity = 1;
random_channel.cljs$lang$applyTo = (function (arglist__23344){
var order = cljs.core.first(arglist__23344);
var p__23340 = cljs.core.rest(arglist__23344);
return random_channel__delegate(order,p__23340);
});
random_channel.cljs$core$IFn$_invoke$arity$variadic = random_channel__delegate;
return random_channel;
})()
;
growingtree_app.mock_data.thing_listing = (function thing_listing(idx,type){
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"title","title",636505583),cljs.core.name.call(null,type),new cljs.core.Keyword(null,"order","order",-1254677256),idx,new cljs.core.Keyword(null,"selected","selected",574897764),false,new cljs.core.Keyword(null,"users","users",-713552705),cljs.core.take.call(null,(cljs.core.rand_int.call(null,cljs.core.count.call(null,growingtree_app.mock_data.user_emails)) + (1)),cljs.core.shuffle.call(null,growingtree_app.mock_data.user_emails)),new cljs.core.Keyword(null,"thing-nodes","thing-nodes",-1951186613),cljs.core.vec.call(null,cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"created_at","created_at",1484050750),cljs.core.repeatedly.call(null,(cljs.core.rand_int.call(null,(0)) + (1)),(function (){
return growingtree_app.mock_data.random_thing.call(null,growingtree_app.utils.safe_sel.call(null,cljs.core.name.call(null,type)),type);
}))))], null);
});
growingtree_app.mock_data.my_thing_listing = (function my_thing_listing(idx,type){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"title","title",636505583),[cljs.core.str("My "),cljs.core.str(cljs.core.name.call(null,type))].join(''),new cljs.core.Keyword(null,"order","order",-1254677256),idx,new cljs.core.Keyword(null,"selected","selected",574897764),false], null);
});
growingtree_app.mock_data.initial_state = (function initial_state(comms){
var channels = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,cljs.core.comp.call(null,cljs.core.juxt.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.identity),growingtree_app.mock_data.random_channel),cljs.core.range.call(null,(2),(100))));
var thing_listing = cljs.core.map_indexed.call(null,growingtree_app.mock_data.thing_listing,growingtree_app.mock_data.nav_types);
var things = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,cljs.core.juxt.call(null,new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.identity),thing_listing));
var my_things = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,cljs.core.juxt.call(null,new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.identity),cljs.core.map_indexed.call(null,growingtree_app.mock_data.my_thing_listing,growingtree_app.mock_data.my_nav_types)));
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"my-things","my-things",276171552),new cljs.core.Keyword(null,"windows","windows",2068861701),new cljs.core.Keyword(null,"bottom","bottom",-1550509018),new cljs.core.Keyword(null,"channels","channels",1132759174),new cljs.core.Keyword(null,"top","top",-1856271961),new cljs.core.Keyword(null,"current-user-email","current-user-email",-1030852599),new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"selected-channel","selected-channel",-366010130),new cljs.core.Keyword(null,"nav-path","nav-path",-444531376),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"things","things",1255021880),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"url-data","url-data",-1539425798),new cljs.core.Keyword(null,"login-user","login-user",1935565562),new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.Keyword(null,"comms","comms",460172477),new cljs.core.Keyword(null,"users","users",-713552705),new cljs.core.Keyword(null,"left","left",-399115937)],[my_things,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"window-inspector","window-inspector",889258900),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"open","open",-1763596448),false], null)], null),cljs.core.PersistentArrayMap.EMPTY,(function (){var ch = channels;
var ch__$1 = cljs.core.assoc.call(null,ch,"1",cljs.core.assoc.call(null,growingtree_app.mock_data.random_channel.call(null,(1),"Lobby"),new cljs.core.Keyword(null,"id","id",-1388402092),"1"));
var ch__$2 = cljs.core.update_in.call(null,ch__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["1"], null),cljs.core.assoc,new cljs.core.Keyword(null,"selected","selected",574897764),true);
return ch__$2;
})(),cljs.core.PersistentArrayMap.EMPTY,"rich-dad@rich.com",new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"message-limit","message-limit",1186131685),(50),new cljs.core.Keyword(null,"forms","forms",2045992350),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"search","search",1564939822),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"focused","focused",1851572115),false], null),new cljs.core.Keyword(null,"user-message","user-message",889829115),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"focused","focused",1851572115),false], null)], null),new cljs.core.Keyword(null,"menus","menus",-1377611675),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"user-menu","user-menu",-395327477),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"open","open",-1763596448),false], null)], null),new cljs.core.Keyword(null,"sidebar","sidebar",35784458),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"left","left",-399115937),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"open","open",-1763596448),false], null),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"open","open",-1763596448),false], null)], null),new cljs.core.Keyword(null,"inspector","inspector",1532863880),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"users","users",-713552705)], null)], null)], null),"1",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"login","login",55217519),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"login","login",55217519),(0),new cljs.core.Keyword(null,"login","login",55217519)], null)], null),new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentArrayMap.EMPTY], null)], null),cljs.core.PersistentArrayMap.EMPTY,(function (){var ts = things;
var ts__$1 = cljs.core.update_in.call(null,ts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"parent","parent",-878878779)], null),cljs.core.assoc,new cljs.core.Keyword(null,"selected","selected",574897764),true);
return ts__$1;
})(),cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,comms,growingtree_app.mock_data.users,cljs.core.PersistentArrayMap.EMPTY]);
});

//# sourceMappingURL=mock_data.js.map