// Compiled by ClojureScript 0.0-2277
goog.provide('growingtree_app.plugins');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('clojure.string');
growingtree_app.plugins.mention = (function mention(name){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.mention","span.mention",-2034584372),name], null)," "], null);
});
growingtree_app.plugins.mentions = (function mentions(activity_pieces,current_user_email,users,settings,author){return cljs.core.map.call(null,(function (piece){var vec__12678 = cljs.core.re_find.call(null,/(.*)@(\w+)(.*)/,piece);var _ = cljs.core.nth.call(null,vec__12678,(0),null);var pre = cljs.core.nth.call(null,vec__12678,(1),null);var username = cljs.core.nth.call(null,vec__12678,(2),null);var post = cljs.core.nth.call(null,vec__12678,(3),null);var temp__4124__auto__ = (function (){var and__3531__auto__ = typeof piece === 'string';if(and__3531__auto__)
{return cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([username], true),cljs.core.map.call(null,cljs.core.comp.call(null,new cljs.core.Keyword(null,"username","username",1605666410),cljs.core.second),users));
} else
{return and__3531__auto__;
}
})();if(cljs.core.truth_(temp__4124__auto__))
{var at = temp__4124__auto__;return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,post),growingtree_app.plugins.mention.call(null,username)),pre);
} else
{return piece;
}
}),activity_pieces);
});
growingtree_app.plugins.emoticon = (function emoticon(emoji){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img.emoticon-embed.small","img.emoticon-embed.small",-809793542),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"src","src",-1651076051),new cljs.core.Keyword(null,"src","src",-1651076051).cljs$core$IFn$_invoke$arity$1(emoji),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"css","css",1135045163).cljs$core$IFn$_invoke$arity$1(emoji),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(emoji)], null)], null);
});
growingtree_app.plugins.links = (function links(activity_pieces){var helper = (function (piece){var temp__4124__auto__ = (function (){var and__3531__auto__ = typeof piece === 'string';if(and__3531__auto__)
{return cljs.core.re_find.call(null,/https?:\/\/.*/,piece);
} else
{return and__3531__auto__;
}
})();if(cljs.core.truth_(temp__4124__auto__))
{var link = temp__4124__auto__;return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.href","a.href",-124022175),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),"_blank",new cljs.core.Keyword(null,"href","href",-793805698),link], null),link], null);
} else
{return piece;
}
});return cljs.core.map.call(null,helper,activity_pieces);
});
growingtree_app.plugins.pastie = (function pastie(activity_pieces){var max_preview_length = (300);var max_preview_lines = (4);var original = clojure.string.join.call(null," ",activity_pieces);if(cljs.core.truth_(cljs.core.re_find.call(null,/\n.*\n/,original)))
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre.pastie","pre.pastie",-340094498),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.pastie-link","a.pastie-link",658653895),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"on-click","on-click",1632826543),cljs.core.constantly.call(null,false)], null),"View pastie"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),(function (){var preview = (function (){var preview = original;var preview__$1 = (((cljs.core.count.call(null,clojure.string.split.call(null,/\n/,preview)) > max_preview_lines))?clojure.string.join.call(null,"\n",cljs.core.take.call(null,max_preview_lines,clojure.string.split.call(null,/\n/,preview))):preview);var preview__$2 = (((cljs.core.count.call(null,preview__$1) > max_preview_length))?cljs.core.subs.call(null,preview__$1,(0),max_preview_length):preview__$1);return preview__$2;
})();return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,((cljs.core.not_EQ_.call(null,cljs.core.count.call(null,preview),cljs.core.count.call(null,original)))?"...":null)),preview);
})()], null)], null);
} else
{return activity_pieces;
}
});
growingtree_app.plugins.slash_me = (function slash_me(activity_pieces,current_user_email,users){if(cljs.core._EQ_.call(null,cljs.core.first.call(null,activity_pieces),"/me"))
{var user = cljs.core.get.call(null,users,current_user_email);return cljs.core.assoc_in.call(null,cljs.core.vec.call(null,activity_pieces),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0)], null),new cljs.core.Keyword(null,"username","username",1605666410).cljs$core$IFn$_invoke$arity$1(user));
} else
{return activity_pieces;
}
});
growingtree_app.plugins.slash_play = (function slash_play(activity_pieces){var vec__12680 = activity_pieces;var command = cljs.core.nth.call(null,vec__12680,(0),null);var url = cljs.core.nth.call(null,vec__12680,(1),null);var rest = cljs.core.nthnext.call(null,vec__12680,(2));if(cljs.core._EQ_.call(null,command,"/play"))
{return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.audio-play","a.audio-play",-484097219),"Playing ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),"_blank",new cljs.core.Keyword(null,"href","href",-793805698),url], null),url], null)], null)], null)], null),rest);
} else
{return activity_pieces;
}
});
growingtree_app.plugins.rgb_embed = (function rgb_embed(activity_pieces){return cljs.core.map.call(null,(function (piece){var temp__4124__auto__ = cljs.core.re_find.call(null,/(.*)rgb\((\d{1,3}),(\d{1,3}),(\d{1,3})\)(.*)/,piece);if(cljs.core.truth_(temp__4124__auto__))
{var vec__12682 = temp__4124__auto__;var _ = cljs.core.nth.call(null,vec__12682,(0),null);var pre = cljs.core.nth.call(null,vec__12682,(1),null);var r = cljs.core.nth.call(null,vec__12682,(2),null);var g = cljs.core.nth.call(null,vec__12682,(3),null);var b = cljs.core.nth.call(null,vec__12682,(4),null);var post = cljs.core.nth.call(null,vec__12682,(5),null);return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,post),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.color-preview","span.color-preview",246439634),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),{"background-color": ("rgb("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(r)+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(g)+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(b)+")")}], null)], null)),pre);
} else
{return piece;
}
}),activity_pieces);
});
growingtree_app.plugins.hex_embed = (function hex_embed(activity_pieces){return cljs.core.map.call(null,(function (piece){var temp__4124__auto__ = cljs.core.re_find.call(null,/(.*)#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})(.*)/,piece);if(cljs.core.truth_(temp__4124__auto__))
{var vec__12684 = temp__4124__auto__;var _ = cljs.core.nth.call(null,vec__12684,(0),null);var pre = cljs.core.nth.call(null,vec__12684,(1),null);var hex = cljs.core.nth.call(null,vec__12684,(2),null);var post = cljs.core.nth.call(null,vec__12684,(3),null);return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,post),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.color-preview","span.color-preview",246439634),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),{"background-color": ("#"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex))}], null)], null)),pre);
} else
{return piece;
}
}),activity_pieces);
});
growingtree_app.plugins.image_embed = (function image_embed(activity_pieces){return cljs.core.map.call(null,(function (piece){if(cljs.core.truth_(cljs.core.re_find.call(null,/http.*\.(jpg|jpeg|gif|png)/,piece)))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.image-preview","div.image-preview",1037929118),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),"_blank",new cljs.core.Keyword(null,"href","href",-793805698),piece], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img.image-embed","img.image-embed",-1196758833),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),piece], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.name","div.name",1027675228),piece], null)], null);
} else
{return piece;
}
}),activity_pieces);
});
growingtree_app.plugins.youtube_embed = (function youtube_embed(activity_pieces){return cljs.core.map.call(null,(function (piece){var temp__4124__auto__ = (function (){var and__3531__auto__ = cljs.core.re_find.call(null,/https?.+www.youtube.com.+watch/,piece);if(cljs.core.truth_(and__3531__auto__))
{return cljs.core.re_find.call(null,/\Wv=([\w|\-]*)/,piece);
} else
{return and__3531__auto__;
}
})();if(cljs.core.truth_(temp__4124__auto__))
{var vec__12686 = temp__4124__auto__;var _ = cljs.core.nth.call(null,vec__12686,(0),null);var video_id = cljs.core.nth.call(null,vec__12686,(1),null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.youtube-preview","div.youtube-preview",-1430093382),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"iframe","iframe",884422026),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"width","width",-384071477),"560",new cljs.core.Keyword(null,"height","height",1025178622),"315",new cljs.core.Keyword(null,"src","src",-1651076051),("http://www.youtube.com/embed/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(video_id)),new cljs.core.Keyword(null,"frameBorder","frameBorder",-1546202685),(0),new cljs.core.Keyword(null,"allowFullScreen","allowFullScreen",475491825),true], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.name","div.name",1027675228),piece], null)], null);
} else
{return piece;
}
}),activity_pieces);
});
growingtree_app.plugins.vimeo_embed = (function vimeo_embed(activity_pieces){return cljs.core.map.call(null,(function (piece){var temp__4124__auto__ = cljs.core.re_find.call(null,/^https?:\/\/vimeo.com\/(\d+)/,piece);if(cljs.core.truth_(temp__4124__auto__))
{var vec__12688 = temp__4124__auto__;var _ = cljs.core.nth.call(null,vec__12688,(0),null);var video_id = cljs.core.nth.call(null,vec__12688,(1),null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.vimeo-preview","div.vimeo-preview",-1397049933),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"iframe","iframe",884422026),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"width","width",-384071477),"500",new cljs.core.Keyword(null,"height","height",1025178622),"281",new cljs.core.Keyword(null,"src","src",-1651076051),("http://player.vimeo.com/video/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(video_id)),new cljs.core.Keyword(null,"frameBorder","frameBorder",-1546202685),(0),new cljs.core.Keyword(null,"webkitAllowFullScreen","webkitAllowFullScreen",-1625319606),true,new cljs.core.Keyword(null,"mozAllowFullScreen","mozAllowFullScreen",768066571),true,new cljs.core.Keyword(null,"allowFullScreen","allowFullScreen",475491825),true], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.name","div.name",1027675228),piece], null)], null);
} else
{return piece;
}
}),activity_pieces);
});

//# sourceMappingURL=plugins.js.map