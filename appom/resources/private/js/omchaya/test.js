// Compiled by ClojureScript 0.0-2173
goog.provide('omchaya.test');
goog.require('cljs.core');
goog.require('cemerick.cljs.test');
goog.require('cemerick.cljs.test');
omchaya.test.run = (function run(){var summary = cemerick.cljs.test.run_tests_STAR_.call(null,new cljs.core.Symbol(null,"omchaya.test","omchaya.test",322614707,null));var success_QMARK_ = ((new cljs.core.Keyword(null,"fail","fail",1017039504).cljs$core$IFn$_invoke$arity$2(summary,0) === 0)) && ((new cljs.core.Keyword(null,"error","error",1110689146).cljs$core$IFn$_invoke$arity$2(summary,0) === 0));console.log("Success? ",success_QMARK_);
if(success_QMARK_)
{return 0;
} else
{return 1;
}
});
goog.exportSymbol('omchaya.test.run', omchaya.test.run);
