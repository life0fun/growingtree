// Compiled by ClojureScript 0.0-2850 {}
goog.provide('growingtree_app.components.sidebar');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('sablono.core');
goog.require('cljs.core.async');
goog.require('growingtree_app.utils');
goog.require('clojure.string');
goog.require('om.core');
growingtree_app.components.sidebar.people_entry = (function people_entry(comm,person){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.user","li.user",486154633),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),(function (){var or__3807__auto__ = new cljs.core.Keyword(null,"full-name","full-name",408178550).cljs$core$IFn$_invoke$arity$1(person);
if(cljs.core.truth_(or__3807__auto__)){
return or__3807__auto__;
} else {
var or__3807__auto____$1 = new cljs.core.Keyword(null,"username","username",1605666410).cljs$core$IFn$_invoke$arity$1(person);
if(cljs.core.truth_(or__3807__auto____$1)){
return or__3807__auto____$1;
} else {
return new cljs.core.Keyword(null,"email","email",1415816706).cljs$core$IFn$_invoke$arity$1(person);
}
}
})(),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"email","email",1415816706).cljs$core$IFn$_invoke$arity$1(person)], null),growingtree_app.utils.gravatar_for.call(null,new cljs.core.Keyword(null,"email","email",1415816706).cljs$core$IFn$_invoke$arity$1(person)),(function (){var or__3807__auto__ = new cljs.core.Keyword(null,"full-name","full-name",408178550).cljs$core$IFn$_invoke$arity$1(person);
if(cljs.core.truth_(or__3807__auto__)){
return or__3807__auto__;
} else {
return new cljs.core.Keyword(null,"username","username",1605666410).cljs$core$IFn$_invoke$arity$1(person);
}
})()], null);
});
growingtree_app.components.sidebar.people_widget = (function people_widget(p__22031,owner,opts){
var map__22036 = p__22031;
var map__22036__$1 = ((cljs.core.seq_QMARK_.call(null,map__22036))?cljs.core.apply.call(null,cljs.core.hash_map,map__22036):map__22036);
var data = map__22036__$1;
var search_filter = cljs.core.get.call(null,map__22036__$1,new cljs.core.Keyword(null,"search-filter","search-filter",274098807));
var channel_users_emails = cljs.core.get.call(null,map__22036__$1,new cljs.core.Keyword(null,"channel-users-emails","channel-users-emails",467696271));
if(typeof growingtree_app.components.sidebar.t22037 !== 'undefined'){
} else {

/**
* @constructor
*/
growingtree_app.components.sidebar.t22037 = (function (channel_users_emails,search_filter,data,map__22036,opts,owner,p__22031,people_widget,meta22038){
this.channel_users_emails = channel_users_emails;
this.search_filter = search_filter;
this.data = data;
this.map__22036 = map__22036;
this.opts = opts;
this.owner = owner;
this.p__22031 = p__22031;
this.people_widget = people_widget;
this.meta22038 = meta22038;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
growingtree_app.components.sidebar.t22037.prototype.om$core$IRender$ = true;

growingtree_app.components.sidebar.t22037.prototype.om$core$IRender$render$arity$1 = ((function (map__22036,map__22036__$1,data,search_filter,channel_users_emails){
return (function (this$){
var self__ = this;
var this$__$1 = this;
return sablono.interpreter.interpret.call(null,(function (){var comm = cljs.core.get_in.call(null,self__.opts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"comms","comms",460172477),new cljs.core.Keyword(null,"controls","controls",1340701452)], null));
var re_filter = (cljs.core.truth_(self__.search_filter)?(new RegExp(self__.search_filter,"ig")):null);
var channel_users = cljs.core.vals.call(null,cljs.core.select_keys.call(null,new cljs.core.Keyword(null,"users","users",-713552705).cljs$core$IFn$_invoke$arity$1(self__.opts),self__.channel_users_emails));
var fil_users = (cljs.core.truth_(re_filter)?cljs.core.filter.call(null,((function (comm,re_filter,channel_users,this$__$1,map__22036,map__22036__$1,data,search_filter,channel_users_emails){
return (function (p1__22030_SHARP_){
var or__3807__auto__ = new cljs.core.Keyword(null,"full-name","full-name",408178550).cljs$core$IFn$_invoke$arity$1(p1__22030_SHARP_).match(re_filter);
if(cljs.core.truth_(or__3807__auto__)){
return or__3807__auto__;
} else {
var or__3807__auto____$1 = new cljs.core.Keyword(null,"email","email",1415816706).cljs$core$IFn$_invoke$arity$1(p1__22030_SHARP_).match(re_filter);
if(cljs.core.truth_(or__3807__auto____$1)){
return or__3807__auto____$1;
} else {
return new cljs.core.Keyword(null,"username","username",1605666410).cljs$core$IFn$_invoke$arity$1(p1__22030_SHARP_).match(re_filter);
}
}
});})(comm,re_filter,channel_users,this$__$1,map__22036,map__22036__$1,data,search_filter,channel_users_emails))
,channel_users):channel_users);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.user_list","ul.user_list",-1146552497),cljs.core.map.call(null,cljs.core.partial.call(null,growingtree_app.components.sidebar.people_entry,comm),fil_users)], null);
})());
});})(map__22036,map__22036__$1,data,search_filter,channel_users_emails))
;

growingtree_app.components.sidebar.t22037.prototype.om$core$IDisplayName$ = true;

growingtree_app.components.sidebar.t22037.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (map__22036,map__22036__$1,data,search_filter,channel_users_emails){
return (function (_){
var self__ = this;
var ___$1 = this;
var or__3807__auto__ = new cljs.core.Keyword(null,"react-name","react-name",-834049397).cljs$core$IFn$_invoke$arity$1(self__.opts);
if(cljs.core.truth_(or__3807__auto__)){
return or__3807__auto__;
} else {
return "PeopleWidget";
}
});})(map__22036,map__22036__$1,data,search_filter,channel_users_emails))
;

growingtree_app.components.sidebar.t22037.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__22036,map__22036__$1,data,search_filter,channel_users_emails){
return (function (_22039){
var self__ = this;
var _22039__$1 = this;
return self__.meta22038;
});})(map__22036,map__22036__$1,data,search_filter,channel_users_emails))
;

growingtree_app.components.sidebar.t22037.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__22036,map__22036__$1,data,search_filter,channel_users_emails){
return (function (_22039,meta22038__$1){
var self__ = this;
var _22039__$1 = this;
return (new growingtree_app.components.sidebar.t22037(self__.channel_users_emails,self__.search_filter,self__.data,self__.map__22036,self__.opts,self__.owner,self__.p__22031,self__.people_widget,meta22038__$1));
});})(map__22036,map__22036__$1,data,search_filter,channel_users_emails))
;

growingtree_app.components.sidebar.t22037.cljs$lang$type = true;

growingtree_app.components.sidebar.t22037.cljs$lang$ctorStr = "growingtree-app.components.sidebar/t22037";

growingtree_app.components.sidebar.t22037.cljs$lang$ctorPrWriter = ((function (map__22036,map__22036__$1,data,search_filter,channel_users_emails){
return (function (this__4394__auto__,writer__4395__auto__,opt__4396__auto__){
return cljs.core._write.call(null,writer__4395__auto__,"growingtree-app.components.sidebar/t22037");
});})(map__22036,map__22036__$1,data,search_filter,channel_users_emails))
;

growingtree_app.components.sidebar.__GT_t22037 = ((function (map__22036,map__22036__$1,data,search_filter,channel_users_emails){
return (function __GT_t22037(channel_users_emails__$1,search_filter__$1,data__$1,map__22036__$2,opts__$1,owner__$1,p__22031__$1,people_widget__$1,meta22038){
return (new growingtree_app.components.sidebar.t22037(channel_users_emails__$1,search_filter__$1,data__$1,map__22036__$2,opts__$1,owner__$1,p__22031__$1,people_widget__$1,meta22038));
});})(map__22036,map__22036__$1,data,search_filter,channel_users_emails))
;

}

return (new growingtree_app.components.sidebar.t22037(channel_users_emails,search_filter,data,map__22036__$1,opts,owner,p__22031,people_widget,cljs.core.PersistentArrayMap.EMPTY));
});
growingtree_app.components.sidebar.current_user = (function current_user(comm,user){
var username = new cljs.core.Keyword("person","title","person/title",1791817084).cljs$core$IFn$_invoke$arity$1(user);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.user-menu-toggle","a.user-menu-toggle",-1744686803),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),cljs.core.comp.call(null,cljs.core.constantly.call(null,false),((function (username){
return (function (){
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-menu-toggled","user-menu-toggled",-1800346032)], null));
});})(username))
)], null),growingtree_app.utils.gravatar_for.call(null,new cljs.core.Keyword("person","email","person/email",122143325).cljs$core$IFn$_invoke$arity$1(user)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.icon-angle.button.right","i.icon-angle.button.right",-1010964894),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),{"height": "inherit"}], null)], null),username], null);
});
growingtree_app.components.sidebar.media_name = (function media_name(src){
return goog.string.urlDecode(cljs.core.first.call(null,clojure.string.split.call(null,cljs.core.last.call(null,clojure.string.split.call(null,src,/\//)),/\?/)));
});
growingtree_app.components.sidebar.playlist_entry = (function playlist_entry(comm,opts,entry){
var src = new cljs.core.Keyword(null,"src","src",-1651076051).cljs$core$IFn$_invoke$arity$1(entry);
var order = new cljs.core.Keyword(null,"order","order",-1254677256).cljs$core$IFn$_invoke$arity$1(entry);
var name = growingtree_app.components.sidebar.media_name.call(null,src);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.user","li.user",486154633),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),src,new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str(new cljs.core.Keyword(null,"order","order",-1254677256).cljs$core$IFn$_invoke$arity$1(entry)),cljs.core.str(src)].join('')], null),((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"order","order",-1254677256).cljs$core$IFn$_invoke$arity$1(entry),cljs.core.get_in.call(null,opts,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"channels","channels",1132759174),new cljs.core.Keyword(null,"selected-channel","selected-channel",-366010130).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"playing-order","playing-order",-1040974713)], null))))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),{"background-color": "#ccc"}], null):null)),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),{"cursor": "pointer"},new cljs.core.Keyword(null,"on-click","on-click",1632826543),cljs.core.comp.call(null,cljs.core.constantly.call(null,false),((function (src,order,name){
return (function (){
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"playlist-entry-played","playlist-entry-played",1138783655),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [order,new cljs.core.Keyword(null,"selected-channel","selected-channel",-366010130).cljs$core$IFn$_invoke$arity$1(opts)], null)], null));
});})(src,order,name))
)], null),new cljs.core.Keyword(null,"order","order",-1254677256).cljs$core$IFn$_invoke$arity$1(entry),". ",name], null)], null);
});
growingtree_app.components.sidebar.playlist_widget = (function playlist_widget(p__22041,owner,opts){
var map__22046 = p__22041;
var map__22046__$1 = ((cljs.core.seq_QMARK_.call(null,map__22046))?cljs.core.apply.call(null,cljs.core.hash_map,map__22046):map__22046);
var search_filter = cljs.core.get.call(null,map__22046__$1,new cljs.core.Keyword(null,"search-filter","search-filter",274098807));
var player = cljs.core.get.call(null,map__22046__$1,new cljs.core.Keyword(null,"player","player",-97687400));
if(typeof growingtree_app.components.sidebar.t22047 !== 'undefined'){
} else {

/**
* @constructor
*/
growingtree_app.components.sidebar.t22047 = (function (player,search_filter,map__22046,opts,owner,p__22041,playlist_widget,meta22048){
this.player = player;
this.search_filter = search_filter;
this.map__22046 = map__22046;
this.opts = opts;
this.owner = owner;
this.p__22041 = p__22041;
this.playlist_widget = playlist_widget;
this.meta22048 = meta22048;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
growingtree_app.components.sidebar.t22047.prototype.om$core$IRender$ = true;

growingtree_app.components.sidebar.t22047.prototype.om$core$IRender$render$arity$1 = ((function (map__22046,map__22046__$1,search_filter,player){
return (function (_){
var self__ = this;
var ___$1 = this;
return sablono.interpreter.interpret.call(null,(function (){var comm = cljs.core.get_in.call(null,self__.opts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"comms","comms",460172477),new cljs.core.Keyword(null,"controls","controls",1340701452)], null));
var re_filter = (cljs.core.truth_(self__.search_filter)?(new RegExp(self__.search_filter,"ig")):null);
var fil_playlist = (cljs.core.truth_(re_filter)?cljs.core.filter.call(null,((function (comm,re_filter,___$1,map__22046,map__22046__$1,search_filter,player){
return (function (p1__22040_SHARP_){
return growingtree_app.components.sidebar.media_name.call(null,new cljs.core.Keyword(null,"src","src",-1651076051).cljs$core$IFn$_invoke$arity$1(p1__22040_SHARP_)).match(re_filter);
});})(comm,re_filter,___$1,map__22046,map__22046__$1,search_filter,player))
,new cljs.core.Keyword(null,"playlist","playlist",1952276871).cljs$core$IFn$_invoke$arity$1(self__.player)):new cljs.core.Keyword(null,"playlist","playlist",1952276871).cljs$core$IFn$_invoke$arity$1(self__.player));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.user_list","ul.user_list",-1146552497),cljs.core.map.call(null,cljs.core.partial.call(null,growingtree_app.components.sidebar.playlist_entry,comm,self__.opts),cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"order","order",-1254677256),fil_playlist))], null)], null);
})());
});})(map__22046,map__22046__$1,search_filter,player))
;

growingtree_app.components.sidebar.t22047.prototype.om$core$IDisplayName$ = true;

growingtree_app.components.sidebar.t22047.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (map__22046,map__22046__$1,search_filter,player){
return (function (_){
var self__ = this;
var ___$1 = this;
var or__3807__auto__ = new cljs.core.Keyword(null,"react-name","react-name",-834049397).cljs$core$IFn$_invoke$arity$1(self__.opts);
if(cljs.core.truth_(or__3807__auto__)){
return or__3807__auto__;
} else {
return "PlaylistWidget";
}
});})(map__22046,map__22046__$1,search_filter,player))
;

growingtree_app.components.sidebar.t22047.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__22046,map__22046__$1,search_filter,player){
return (function (_22049){
var self__ = this;
var _22049__$1 = this;
return self__.meta22048;
});})(map__22046,map__22046__$1,search_filter,player))
;

growingtree_app.components.sidebar.t22047.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__22046,map__22046__$1,search_filter,player){
return (function (_22049,meta22048__$1){
var self__ = this;
var _22049__$1 = this;
return (new growingtree_app.components.sidebar.t22047(self__.player,self__.search_filter,self__.map__22046,self__.opts,self__.owner,self__.p__22041,self__.playlist_widget,meta22048__$1));
});})(map__22046,map__22046__$1,search_filter,player))
;

growingtree_app.components.sidebar.t22047.cljs$lang$type = true;

growingtree_app.components.sidebar.t22047.cljs$lang$ctorStr = "growingtree-app.components.sidebar/t22047";

growingtree_app.components.sidebar.t22047.cljs$lang$ctorPrWriter = ((function (map__22046,map__22046__$1,search_filter,player){
return (function (this__4394__auto__,writer__4395__auto__,opt__4396__auto__){
return cljs.core._write.call(null,writer__4395__auto__,"growingtree-app.components.sidebar/t22047");
});})(map__22046,map__22046__$1,search_filter,player))
;

growingtree_app.components.sidebar.__GT_t22047 = ((function (map__22046,map__22046__$1,search_filter,player){
return (function __GT_t22047(player__$1,search_filter__$1,map__22046__$2,opts__$1,owner__$1,p__22041__$1,playlist_widget__$1,meta22048){
return (new growingtree_app.components.sidebar.t22047(player__$1,search_filter__$1,map__22046__$2,opts__$1,owner__$1,p__22041__$1,playlist_widget__$1,meta22048));
});})(map__22046,map__22046__$1,search_filter,player))
;

}

return (new growingtree_app.components.sidebar.t22047(player,search_filter,map__22046__$1,opts,owner,p__22041,playlist_widget,cljs.core.PersistentArrayMap.EMPTY));
});
growingtree_app.components.sidebar.playlist_action_widget = (function playlist_action_widget(p__22050,owner,opts){
var map__22053 = p__22050;
var map__22053__$1 = ((cljs.core.seq_QMARK_.call(null,map__22053))?cljs.core.apply.call(null,cljs.core.hash_map,map__22053):map__22053);
var player = cljs.core.get.call(null,map__22053__$1,new cljs.core.Keyword(null,"player","player",-97687400));
var comm = cljs.core.get_in.call(null,opts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"comms","comms",460172477),new cljs.core.Keyword(null,"controls","controls",1340701452)], null));
var attrs22054 = ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(player),new cljs.core.Keyword(null,"playing","playing",70013335)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.fa.fa-pause","i.fa.fa-pause",1311418083),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),{"cursor": "pointer"},new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (comm,map__22053,map__22053__$1,player){
return (function (){
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"audio-player-stopped","audio-player-stopped",170014150),new cljs.core.Keyword(null,"selected-channel","selected-channel",-366010130).cljs$core$IFn$_invoke$arity$1(opts)], null));
});})(comm,map__22053,map__22053__$1,player))
], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.fa.fa-play","i.fa.fa-play",-880976511),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),{"cursor": "pointer"},new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (comm,map__22053,map__22053__$1,player){
return (function (){
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"audio-player-started","audio-player-started",-1739082677),new cljs.core.Keyword(null,"selected-channel","selected-channel",-366010130).cljs$core$IFn$_invoke$arity$1(opts)], null));
});})(comm,map__22053,map__22053__$1,player))
], null)], null));
if(cljs.core.map_QMARK_.call(null,attrs22054)){
return React.DOM.div(sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["dropzone"], null)], null),attrs22054)),null);
} else {
return React.DOM.div({"className": "dropzone"},sablono.interpreter.interpret.call(null,attrs22054));
}
});
growingtree_app.components.sidebar.icon_map = new cljs.core.PersistentArrayMap(null, 3, ["png","img","jpg","img","jpeg","img"], null);
growingtree_app.components.sidebar.media_entry = (function media_entry(comm,media){
var extension = cljs.core.last.call(null,clojure.string.split.call(null,cljs.core.first.call(null,clojure.string.split.call(null,new cljs.core.Keyword(null,"src","src",-1651076051).cljs$core$IFn$_invoke$arity$1(media),/\?/)),/\./));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.file_item","li.file_item",1485124592),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"src","src",-1651076051).cljs$core$IFn$_invoke$arity$1(media)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),cljs.core.constantly.call(null,false),new cljs.core.Keyword(null,"target","target",253001721),"_blank"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),[cljs.core.str("/images/"),cljs.core.str(cljs.core.get.call(null,growingtree_app.components.sidebar.icon_map,extension,"file")),cljs.core.str("_icon.png")].join('')], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(media)], null)], null)], null);
});
growingtree_app.components.sidebar.media_widget = (function media_widget(p__22056,owner,opts){
var map__22061 = p__22056;
var map__22061__$1 = ((cljs.core.seq_QMARK_.call(null,map__22061))?cljs.core.apply.call(null,cljs.core.hash_map,map__22061):map__22061);
var search_filter = cljs.core.get.call(null,map__22061__$1,new cljs.core.Keyword(null,"search-filter","search-filter",274098807));
var media = cljs.core.get.call(null,map__22061__$1,new cljs.core.Keyword(null,"media","media",-1066138403));
var channel_id = cljs.core.get.call(null,map__22061__$1,new cljs.core.Keyword(null,"channel-id","channel-id",138191095));
if(typeof growingtree_app.components.sidebar.t22062 !== 'undefined'){
} else {

/**
* @constructor
*/
growingtree_app.components.sidebar.t22062 = (function (channel_id,media,search_filter,map__22061,opts,owner,p__22056,media_widget,meta22063){
this.channel_id = channel_id;
this.media = media;
this.search_filter = search_filter;
this.map__22061 = map__22061;
this.opts = opts;
this.owner = owner;
this.p__22056 = p__22056;
this.media_widget = media_widget;
this.meta22063 = meta22063;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
growingtree_app.components.sidebar.t22062.prototype.om$core$IRender$ = true;

growingtree_app.components.sidebar.t22062.prototype.om$core$IRender$render$arity$1 = ((function (map__22061,map__22061__$1,search_filter,media,channel_id){
return (function (this$){
var self__ = this;
var this$__$1 = this;
return sablono.interpreter.interpret.call(null,(function (){var comm = new cljs.core.Keyword(null,"comm","comm",-1689770614).cljs$core$IFn$_invoke$arity$1(self__.opts);
var re_filter = (cljs.core.truth_(self__.search_filter)?(new RegExp(self__.search_filter,"ig")):null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.file_list","ul.file_list",-290716125),cljs.core.map.call(null,cljs.core.partial.call(null,growingtree_app.components.sidebar.media_entry,comm),(cljs.core.truth_(re_filter)?cljs.core.filter.call(null,((function (comm,re_filter,this$__$1,map__22061,map__22061__$1,search_filter,media,channel_id){
return (function (p1__22055_SHARP_){
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__22055_SHARP_).match(re_filter);
});})(comm,re_filter,this$__$1,map__22061,map__22061__$1,search_filter,media,channel_id))
,self__.media):self__.media))], null);
})());
});})(map__22061,map__22061__$1,search_filter,media,channel_id))
;

growingtree_app.components.sidebar.t22062.prototype.om$core$IDisplayName$ = true;

growingtree_app.components.sidebar.t22062.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (map__22061,map__22061__$1,search_filter,media,channel_id){
return (function (_){
var self__ = this;
var ___$1 = this;
var or__3807__auto__ = new cljs.core.Keyword(null,"react-name","react-name",-834049397).cljs$core$IFn$_invoke$arity$1(self__.opts);
if(cljs.core.truth_(or__3807__auto__)){
return or__3807__auto__;
} else {
return "MediaWidget";
}
});})(map__22061,map__22061__$1,search_filter,media,channel_id))
;

growingtree_app.components.sidebar.t22062.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__22061,map__22061__$1,search_filter,media,channel_id){
return (function (_22064){
var self__ = this;
var _22064__$1 = this;
return self__.meta22063;
});})(map__22061,map__22061__$1,search_filter,media,channel_id))
;

growingtree_app.components.sidebar.t22062.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__22061,map__22061__$1,search_filter,media,channel_id){
return (function (_22064,meta22063__$1){
var self__ = this;
var _22064__$1 = this;
return (new growingtree_app.components.sidebar.t22062(self__.channel_id,self__.media,self__.search_filter,self__.map__22061,self__.opts,self__.owner,self__.p__22056,self__.media_widget,meta22063__$1));
});})(map__22061,map__22061__$1,search_filter,media,channel_id))
;

growingtree_app.components.sidebar.t22062.cljs$lang$type = true;

growingtree_app.components.sidebar.t22062.cljs$lang$ctorStr = "growingtree-app.components.sidebar/t22062";

growingtree_app.components.sidebar.t22062.cljs$lang$ctorPrWriter = ((function (map__22061,map__22061__$1,search_filter,media,channel_id){
return (function (this__4394__auto__,writer__4395__auto__,opt__4396__auto__){
return cljs.core._write.call(null,writer__4395__auto__,"growingtree-app.components.sidebar/t22062");
});})(map__22061,map__22061__$1,search_filter,media,channel_id))
;

growingtree_app.components.sidebar.__GT_t22062 = ((function (map__22061,map__22061__$1,search_filter,media,channel_id){
return (function __GT_t22062(channel_id__$1,media__$1,search_filter__$1,map__22061__$2,opts__$1,owner__$1,p__22056__$1,media_widget__$1,meta22063){
return (new growingtree_app.components.sidebar.t22062(channel_id__$1,media__$1,search_filter__$1,map__22061__$2,opts__$1,owner__$1,p__22056__$1,media_widget__$1,meta22063));
});})(map__22061,map__22061__$1,search_filter,media,channel_id))
;

}

return (new growingtree_app.components.sidebar.t22062(channel_id,media,search_filter,map__22061__$1,opts,owner,p__22056,media_widget,cljs.core.PersistentArrayMap.EMPTY));
});
growingtree_app.components.sidebar.media_action_widget = (function media_action_widget(p__22065,owner,opts){
var map__22073 = p__22065;
var map__22073__$1 = ((cljs.core.seq_QMARK_.call(null,map__22073))?cljs.core.apply.call(null,cljs.core.hash_map,map__22073):map__22073);
var channel_id = cljs.core.get.call(null,map__22073__$1,new cljs.core.Keyword(null,"channel-id","channel-id",138191095));
return React.DOM.form({"id": "file_upload", "method": "post", "html": "{:multipart=>true}", "data-remote": "true", "action": [cljs.core.str("/channels/"),cljs.core.str(channel_id),cljs.core.str("/attachments.json")].join(''), "acceptCharset": "UTF-8"},React.DOM.div({"style": cljs.core.clj__GT_js.call(null,{"display": "inline", "padding": "0", "margin": "0"})},sablono.interpreter.input.call(null,{"value": "\u2713", "type": "hidden", "name": "utf8"}),sablono.interpreter.input.call(null,{"value": "bpuDvAt5w97Cp4khpWE25tcTsD2vFEFpKwsIAG0m8fw=", "type": "hidden", "name": "authenticity_token"})),sablono.interpreter.input.call(null,{"id": "channel_id_1", "type": "hidden", "name": [cljs.core.str("channel_id["),cljs.core.str(channel_id),cljs.core.str("]")].join('')}),sablono.interpreter.input.call(null,{"id": "file", "type": "file", "name": "file"}),React.DOM.div({"className": "dropzone"},"Drop file here to upload"));
});
growingtree_app.components.sidebar.widget = (function widget(data,owner,opts){
if(typeof growingtree_app.components.sidebar.t22083 !== 'undefined'){
} else {

/**
* @constructor
*/
growingtree_app.components.sidebar.t22083 = (function (opts,owner,data,widget,meta22084){
this.opts = opts;
this.owner = owner;
this.data = data;
this.widget = widget;
this.meta22084 = meta22084;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
growingtree_app.components.sidebar.t22083.prototype.om$core$IRender$ = true;

growingtree_app.components.sidebar.t22083.prototype.om$core$IRender$render$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return sablono.interpreter.interpret.call(null,(function (){var comm = new cljs.core.Keyword(null,"comm","comm",-1689770614).cljs$core$IFn$_invoke$arity$1(self__.opts);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.widget","div.widget",-962039264),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h5.widget-header.unselectable","h5.widget-header.unselectable",163829408),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),new cljs.core.Keyword(null,"icon","icon",1679606541).cljs$core$IFn$_invoke$arity$1(self__.opts)], null)], null),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(self__.opts)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.widget-content","div.widget-content",792178655),om.core.build.call(null,new cljs.core.Keyword(null,"content-comp","content-comp",-2088958756).cljs$core$IFn$_invoke$arity$1(self__.opts),new cljs.core.Keyword(null,"content-data","content-data",1183622660).cljs$core$IFn$_invoke$arity$1(self__.data),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.Keyword(null,"content-opts","content-opts",-409462686).cljs$core$IFn$_invoke$arity$1(self__.data)], null))], null),(cljs.core.truth_(new cljs.core.Keyword(null,"action-comp","action-comp",-388471467).cljs$core$IFn$_invoke$arity$1(self__.opts))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.widget-action-bar","div.widget-action-bar",900532415),om.core.build.call(null,new cljs.core.Keyword(null,"action-comp","action-comp",-388471467).cljs$core$IFn$_invoke$arity$1(self__.opts),new cljs.core.Keyword(null,"action-data","action-data",-876569047).cljs$core$IFn$_invoke$arity$1(self__.data),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.Keyword(null,"action-opts","action-opts",888278735).cljs$core$IFn$_invoke$arity$1(self__.data)], null))], null):null)], null);
})());
});

growingtree_app.components.sidebar.t22083.prototype.om$core$IDisplayName$ = true;

growingtree_app.components.sidebar.t22083.prototype.om$core$IDisplayName$display_name$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var or__3807__auto__ = new cljs.core.Keyword(null,"react-name","react-name",-834049397).cljs$core$IFn$_invoke$arity$1(self__.opts);
if(cljs.core.truth_(or__3807__auto__)){
return or__3807__auto__;
} else {
return "Widget";
}
});

growingtree_app.components.sidebar.t22083.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22085){
var self__ = this;
var _22085__$1 = this;
return self__.meta22084;
});

growingtree_app.components.sidebar.t22083.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22085,meta22084__$1){
var self__ = this;
var _22085__$1 = this;
return (new growingtree_app.components.sidebar.t22083(self__.opts,self__.owner,self__.data,self__.widget,meta22084__$1));
});

growingtree_app.components.sidebar.t22083.cljs$lang$type = true;

growingtree_app.components.sidebar.t22083.cljs$lang$ctorStr = "growingtree-app.components.sidebar/t22083";

growingtree_app.components.sidebar.t22083.cljs$lang$ctorPrWriter = (function (this__4394__auto__,writer__4395__auto__,opt__4396__auto__){
return cljs.core._write.call(null,writer__4395__auto__,"growingtree-app.components.sidebar/t22083");
});

growingtree_app.components.sidebar.__GT_t22083 = (function __GT_t22083(opts__$1,owner__$1,data__$1,widget__$1,meta22084){
return (new growingtree_app.components.sidebar.t22083(opts__$1,owner__$1,data__$1,widget__$1,meta22084));
});

}

return (new growingtree_app.components.sidebar.t22083(opts,owner,data,widget,cljs.core.PersistentArrayMap.EMPTY));
});
growingtree_app.components.sidebar.sidebar = (function sidebar(state,owner,opts){
if(typeof growingtree_app.components.sidebar.t22089 !== 'undefined'){
} else {

/**
* @constructor
*/
growingtree_app.components.sidebar.t22089 = (function (opts,owner,state,sidebar,meta22090){
this.opts = opts;
this.owner = owner;
this.state = state;
this.sidebar = sidebar;
this.meta22090 = meta22090;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
growingtree_app.components.sidebar.t22089.prototype.om$core$IRender$ = true;

growingtree_app.components.sidebar.t22089.prototype.om$core$IRender$render$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return sablono.interpreter.interpret.call(null,(function (){var comm = cljs.core.get_in.call(null,self__.opts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"comms","comms",460172477),new cljs.core.Keyword(null,"controls","controls",1340701452)], null));
var login_user = growingtree_app.utils.get_login_user.call(null,self__.state);
var channel = cljs.core.get_in.call(null,self__.state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"channels","channels",1132759174),new cljs.core.Keyword(null,"selected-channel","selected-channel",-366010130)], null));
var settings = new cljs.core.Keyword(null,"settings","settings",1556144875).cljs$core$IFn$_invoke$arity$1(self__.state);
var search_filter = cljs.core.get_in.call(null,self__.state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"forms","forms",2045992350),new cljs.core.Keyword(null,"search","search",1564939822),new cljs.core.Keyword(null,"value","value",305978217)], null));
console.log(cljs.core.pr_str.call(null,"rendering sidebar ",new cljs.core.Keyword("person","title","person/title",1791817084).cljs$core$IFn$_invoke$arity$1(login_user)));

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"aside.sidebar","aside.sidebar",670380092),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.header.user-header","div.header.user-header",-2136549284),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(cljs.core.get_in.call(null,settings,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"menus","menus",-1377611675),new cljs.core.Keyword(null,"user-menu","user-menu",-395327477),new cljs.core.Keyword(null,"open","open",-1763596448)], null)))?"open-menu":null)], null),growingtree_app.components.sidebar.current_user.call(null,comm,login_user),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.user-menu","ul.user-menu",412288326),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (comm,login_user,channel,settings,search_filter,this$__$1){
return (function (){
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings-opened","settings-opened",1153146657)], null));
});})(comm,login_user,channel,settings,search_filter,this$__$1))
], null),"Edit Account"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"rel","rel",1378823488),"nofollow",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (comm,login_user,channel,settings,search_filter,this$__$1){
return (function (){
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-logged-out","user-logged-out",-1569726039)], null));
});})(comm,login_user,channel,settings,search_filter,this$__$1))
], null),"Logout"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (comm,login_user,channel,settings,search_filter,this$__$1){
return (function (){
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"help-opened","help-opened",-1936034706)], null));
});})(comm,login_user,channel,settings,search_filter,this$__$1))
], null),"Help"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (comm,login_user,channel,settings,search_filter,this$__$1){
return (function (){
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"about-opened","about-opened",1534685245)], null));
});})(comm,login_user,channel,settings,search_filter,this$__$1))
], null),"About growingtree-app"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.widgets","div.widgets",-37939264),om.core.build.call(null,growingtree_app.components.sidebar.widget,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"content-data","content-data",1183622660),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"channel-users-emails","channel-users-emails",467696271),new cljs.core.Keyword(null,"users","users",-713552705).cljs$core$IFn$_invoke$arity$1(channel),new cljs.core.Keyword(null,"search-filter","search-filter",274098807),search_filter], null),new cljs.core.Keyword(null,"content-opts","content-opts",-409462686),self__.opts], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),"People",new cljs.core.Keyword(null,"icon","icon",1679606541),"images/people_icon.png",new cljs.core.Keyword(null,"content-comp","content-comp",-2088958756),growingtree_app.components.sidebar.people_widget], null)], null)),om.core.build.call(null,growingtree_app.components.sidebar.widget,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"content-data","content-data",1183622660),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(channel),new cljs.core.Keyword(null,"search-filter","search-filter",274098807),search_filter], null),new cljs.core.Keyword(null,"content-opts","content-opts",-409462686),self__.opts,new cljs.core.Keyword(null,"action-data","action-data",-876569047),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(channel)], null),new cljs.core.Keyword(null,"action-opts","action-opts",888278735),self__.opts], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),"Channels",new cljs.core.Keyword(null,"icon","icon",1679606541),"images/video_icon.png",new cljs.core.Keyword(null,"content-comp","content-comp",-2088958756),growingtree_app.components.sidebar.playlist_widget], null)], null)),om.core.build.call(null,growingtree_app.components.sidebar.widget,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"content-data","content-data",1183622660),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(channel),new cljs.core.Keyword(null,"search-filter","search-filter",274098807),search_filter], null),new cljs.core.Keyword(null,"content-opts","content-opts",-409462686),self__.opts,new cljs.core.Keyword(null,"action-data","action-data",-876569047),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(channel)], null),new cljs.core.Keyword(null,"action-opts","action-opts",888278735),self__.opts], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),"Direct Messages",new cljs.core.Keyword(null,"icon","icon",1679606541),"images/video_icon.png",new cljs.core.Keyword(null,"content-comp","content-comp",-2088958756),growingtree_app.components.sidebar.playlist_widget], null)], null)),om.core.build.call(null,growingtree_app.components.sidebar.widget,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"content-data","content-data",1183622660),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"search-filter","search-filter",274098807),search_filter,new cljs.core.Keyword(null,"media","media",-1066138403),new cljs.core.Keyword(null,"media","media",-1066138403).cljs$core$IFn$_invoke$arity$1(channel),new cljs.core.Keyword(null,"channel-id","channel-id",138191095),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(channel)], null),new cljs.core.Keyword(null,"content-opts","content-opts",-409462686),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"comm","comm",-1689770614),comm], null),new cljs.core.Keyword(null,"action-data","action-data",-876569047),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"channel-id","channel-id",138191095),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(channel)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),"My Groups",new cljs.core.Keyword(null,"icon","icon",1679606541),"images/media_icon.png",new cljs.core.Keyword(null,"content-comp","content-comp",-2088958756),growingtree_app.components.sidebar.media_widget], null)], null))], null)], null);
})());
});

growingtree_app.components.sidebar.t22089.prototype.om$core$IDisplayName$ = true;

growingtree_app.components.sidebar.t22089.prototype.om$core$IDisplayName$display_name$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var or__3807__auto__ = new cljs.core.Keyword(null,"react-name","react-name",-834049397).cljs$core$IFn$_invoke$arity$1(self__.opts);
if(cljs.core.truth_(or__3807__auto__)){
return or__3807__auto__;
} else {
return "Sidebar";
}
});

growingtree_app.components.sidebar.t22089.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22091){
var self__ = this;
var _22091__$1 = this;
return self__.meta22090;
});

growingtree_app.components.sidebar.t22089.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22091,meta22090__$1){
var self__ = this;
var _22091__$1 = this;
return (new growingtree_app.components.sidebar.t22089(self__.opts,self__.owner,self__.state,self__.sidebar,meta22090__$1));
});

growingtree_app.components.sidebar.t22089.cljs$lang$type = true;

growingtree_app.components.sidebar.t22089.cljs$lang$ctorStr = "growingtree-app.components.sidebar/t22089";

growingtree_app.components.sidebar.t22089.cljs$lang$ctorPrWriter = (function (this__4394__auto__,writer__4395__auto__,opt__4396__auto__){
return cljs.core._write.call(null,writer__4395__auto__,"growingtree-app.components.sidebar/t22089");
});

growingtree_app.components.sidebar.__GT_t22089 = (function __GT_t22089(opts__$1,owner__$1,state__$1,sidebar__$1,meta22090){
return (new growingtree_app.components.sidebar.t22089(opts__$1,owner__$1,state__$1,sidebar__$1,meta22090));
});

}

return (new growingtree_app.components.sidebar.t22089(opts,owner,state,sidebar,cljs.core.PersistentArrayMap.EMPTY));
});

//# sourceMappingURL=sidebar.js.map