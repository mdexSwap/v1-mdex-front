(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-095a2472"],{"116d":function(t,s,e){"use strict";var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"number text",class:t.chainName,style:{"--width":t.width+"px","--bg":t.bg}},[t.isShow?e("div",{staticClass:"tags"}):t._e(),e("div",{staticClass:"content"},[e("div",{staticClass:"glod"},[e("span",{staticClass:"text Heavy"},[t._v(t._s(t.$t("JupiterAward"))+" ")]),e("span",[t._v(t._s(t.$t("WinningNumber1"))+"：")])]),e("div",{staticClass:"silver"},[e("div",{staticClass:"numbers Bold"},[t._v(t._s(t.glod[0]))])])]),e("div",{staticClass:"content"},[e("div",{staticClass:"glod"},[e("span",{staticClass:"text Heavy"},[t._v(t._s(t.$t("SatumAward")))]),e("span",{staticClass:"cd-number"},[t._v(t._s(t.$t("WinningNumber1"))+"：")])]),t._l(t.glodHenxin,(function(s,a){return e("div",{key:a,staticClass:"silver numbers Bold"},[e("div",{staticClass:"secend"},[t._v(t._s(s))])])}))],2)])},i=[],n={name:"pricenumber",props:{width:{default:""},isShow:{type:Boolean,default:!0},bg:{default:"#ffffff"}},computed:{chianId:function(){return this.$store.getters.chainId},glod:function(){return this.$store.state.buyBack.assetBuyData.reward_gold},glodHenxin:function(){return this.$store.state.buyBack.assetBuyData.reward_silver}}},r=n,c=(e("ff93"),e("2877")),o=Object(c["a"])(r,a,i,!1,null,"77785452",null);s["a"]=o.exports},"2cbe":function(t,s,e){"use strict";e("8e09")},3578:function(t,s,e){"use strict";var a=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"main text",class:t.lang},[t.isPC?t._e():a("span",{staticClass:"title text Heavy"},[t._v(t._s(t.$t("receiving")))]),a("header",[t.isPC?a("div",{staticClass:"header"},[a("span",{staticClass:"header1"},[t._v(t._s(t.$t("Times")))]),a("span",{staticClass:"header2"},[t._v(t._s(t.$t("Contribute")))]),a("span",{staticClass:"header3"},[t._v(t._s(t.$t("Proportion")))]),a("span",{staticClass:"header4"},[t._v(t._s(t.$t("Rewards")))])]):t._e(),t.isPC?t._e():a("div",{staticClass:"header"},[a("div",{staticClass:"header_left"},[a("span",[t._v(t._s(t.$t("Contribute")))]),a("span",[t._v(t._s(t.$t("Proportion")))])]),a("div",{staticClass:"header_right"},[a("span",[t._v(t._s(t.$t("Rewards")))])])])]),a("div",{staticClass:"price-list"},[t.isShowFrist?a("img",{attrs:{src:e("398b"),alt:""}}):t._e(),t.isPC?a("div",[t.isShowFrist?a("span",{staticClass:"one  text Bold"},[t._v(t._s(t.$t("JupiterAward")))]):t._e(),a("span",{staticClass:"two numbers Medium"},[t._v(t._s(t.getlist.gold.user_count))]),a("span",{staticClass:"three numbers Medium"},[t._v(t._s(t.getlist.gold.user_repurch.toFixed(0)))]),a("span",{staticClass:"four numbers Medium"},[t._v(t._s(t.sliceData(100*t.getlist.gold.user_rate,3))+"%")]),a("span",{staticClass:"five numbers Medium"},[t._v(t._s(3!==t.getData.status?t.$t("DJX"):t.getBlance.toFixed(2)+"MDX"))])]):t._e(),t.isPC?t._e():a("div",{staticClass:"price-list-h5"},[a("span",{staticClass:"one text Bold"},[t._v(t._s(t.$t("JupiterAward")))]),a("div",{staticClass:"middel"},[a("div",{staticClass:"putin numbers Medium"},[a("span",{staticClass:"two"},[t._v(t._s(t.getlist.gold.user_repurch.toFixed(0)))]),a("span",{staticClass:"four"},[t._v(t._s(t.sliceData(100*t.getlist.gold.user_rate,3))+"%")])]),a("div",{staticClass:"price_num numbers Medium"},[a("span",{staticClass:"five"},[t._v(t._s(3!==t.getData.status?t.$t("DJX"):t.getBlance.toFixed(2)+"MDX"))])])])]),a("div",{class:["btn",3==t.getData.status&&t.getlist.gold.user_reward?"":"no_cliclk"],on:{click:t.openFrist}},[t._v(" "+t._s(t.$t("Collect"))+" ")])]),a("div",{staticClass:"price-list"},[t.isShowFrist?a("img",{attrs:{src:e("5436"),alt:""}}):t._e(),t.isPC?a("div",[t.isShowFrist?a("span",{staticClass:"one text Bold"},[t._v(t._s(t.$t("SatumAward")))]):t._e(),a("span",{staticClass:"two numbers Medium"},[t._v(t._s(t.getlist.silver.user_count))]),a("span",{staticClass:"three numbers Medium"},[t._v(t._s(t.getlist.silver.user_repurch.toFixed(0)))]),a("span",{staticClass:"four numbers Medium"},[t._v(t._s(t.sliceData(100*t.getlist.silver.user_rate,3))+"%")]),a("span",{staticClass:"five numbers Medium"},[t._v(t._s(3!==t.getData.status?t.$t("DJX"):t.sliceData(t.getlist.silver.user_reward)+"USDT"))])]):t._e(),t.isPC?t._e():a("div",{staticClass:"price-list-h5"},[a("span",{staticClass:"one text Bold"},[t._v(t._s(t.$t("SatumAward")))]),a("div",{staticClass:"middel numbers Medium"},[a("div",{staticClass:"putin"},[a("span",{staticClass:"two"},[t._v(t._s(t.getlist.silver.user_repurch.toFixed(0)))]),a("span",{staticClass:"four"},[t._v(t._s(t.sliceData(100*t.getlist.silver.user_rate,3))+"%")])]),a("div",{staticClass:"price_num"},[a("span",{staticClass:"five"},[t._v(t._s(3!==t.getData.status?t.$t("DJX"):t.sliceData(t.getlist.silver.user_reward)+"USDT"))])])])]),a("el-button",{class:["btn",3==t.state(t.secondReward,t.secondIsClaimed)?"":"no_cliclk"],attrs:{loading:t.loading2},on:{click:t.getSecondReward}},[t._v(" "+t._s(2==t.state(t.secondReward,t.secondIsClaimed)?t.$t("Collected"):t.$t("Collect"))+" ")])],1),a("div",{staticClass:"price-list"},[t.isShowFrist?a("img",{attrs:{src:e("ab89"),alt:""}}):t._e(),t.isPC?a("div",[t.isShowFrist?a("span",{staticClass:"one text Bold"},[t._v(t._s(t.$t("PlutoAward")))]):t._e(),a("span",{staticClass:"two numbers Medium"},[t._v(t._s(t.getlist.bronze.user_count))]),a("span",{staticClass:"three numbers Medium"},[t._v(t._s(t.getlist.bronze.user_repurch.toFixed(0)))]),a("span",{staticClass:"four numbers Medium"},[t._v(t._s(t.sliceData(100*t.getlist.bronze.user_rate,3))+"%")]),a("span",{staticClass:"five numbers Medium"},[t._v(t._s(3!==t.getData.status?t.$t("DJX"):t.sliceData(t.getlist.bronze.user_reward)+"USDT"))])]):t._e(),t.isPC?t._e():a("div",{staticClass:"price-list-h5"},[a("span",{staticClass:"one text Bold"},[t._v(t._s(t.$t("PlutoAward")))]),a("div",{staticClass:"middel numbers Medium"},[a("div",{staticClass:"putin"},[a("span",{staticClass:"two"},[t._v(t._s(t.getlist.bronze.user_repurch.toFixed(0)))]),a("span",{staticClass:"four"},[t._v(t._s(t.sliceData(100*t.getlist.bronze.user_rate,3))+"%")])]),a("div",{staticClass:"price_num"},[a("span",{staticClass:"five"},[t._v(t._s(3!==t.getData.status?t.$t("DJX"):t.sliceData(t.getlist.bronze.user_reward)+"USDT"))])])])]),a("el-button",{class:["btn",3==t.state(t.thirdReward,t.thirdIsClaimed)?"":"no_cliclk"],attrs:{loading:t.loading},on:{click:t.getThirdReward}},[t._v(" "+t._s(2==t.state(t.thirdReward,t.thirdIsClaimed)?t.$t("Collected"):t.$t("Collect"))+" ")])],1)])},i=[],n=e("1da1"),r=(e("96cf"),e("a9e3"),e("4f22")),c=e("ed08"),o=null,u={name:"awardlist",components:{},props:{isShowFrist:{type:Boolean,default:!1}},data:function(){return{secondReward:0,secondIsClaimed:!1,thirdReward:0,thirdIsClaimed:!1,btnName2:"",btnName3:"",sliceData:c["b"],global:window.$v,loading:!1,loading2:!1}},created:function(){},watch:{getData:function(){this.getInfo()},chianId:function(){this.getInfo()}},computed:{chianId:function(){return this.$store.getters.chainId},lang:function(){return"en"===this.$store.state.language?"en":"zn"},getData:function(){return this.$store.state.buyBack.assetBuyData},state:function(){var t=this;return function(s,e){return 3==t.getData.status?0==s?1:e?2:3:0}},phase:function(){return this.$store.state.buyBack.phase},isPC:function(){return this.$store.getters.isPC},repurchFun:function(){var t=this.getData;t.contract,t.repurch_decimal,t.reward_decimal;return this.account,Object(r["d"])(this.getData.contract,this.getData.repurch_decimal,this.getData.reward_decimal,this.account)},isShowData:function(){return 0==this.secondReward&&0==this.thirdReward},getlist:function(){return this.$store.state.buyBack.assetBuyData.repurch_reward_info},getMyBlance:function(){return Number(this.getData.balance)+Number(this.getData.total_repurch_mdx*this.getData.reward_gold_rate)},getBlance:function(){return this.getMyBlance*this.sliceData(this.getlist.gold.user_rate)}},mounted:function(){this.getInfo()},methods:{openFrist:function(){this.$message({message:"".concat(this.global.$t("wonfristprice")),type:"success",offset:"50"})},getInfo:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function s(){var e,a,i,n,r,c,o,u,l;return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:return t.secondReward,t.thirdReward,t.secondIsClaimed,t.thirdIsClaimed,s.next=3,t.repurchFun;case 3:return e=s.sent,a=e.getUserSecondPrize,i=e.getUserThirdPrize,s.next=8,a();case 8:return n=s.sent,r=n.secondAmount,c=n.secondStatus,s.next=13,i();case 13:o=s.sent,u=o.thirdAmount,l=o.thirdStatus,t.secondReward=r,t.thirdReward=u,t.secondIsClaimed=c,t.thirdIsClaimed=l;case 20:case"end":return s.stop()}}),s)})))()},getSecondReward:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function s(){var e,a,i;return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:return t.loading2=!0,e="claim",s.next=5,t.repurchFun;case 5:a=s.sent,i=a.claimSecondPrize,i().then((function(s){var a="".concat(e," Success");o=t.$overalltip({type:"success",msg:a}),t.loading2=!1,t.secondIsClaimed=!0})).catch((function(s){t.loading2=!1,overalltip.close();var a="".concat(e," Error");o=t.$overalltip({type:"error",msg:a})}));case 8:case"end":return s.stop()}}),s)})))()},getThirdReward:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function s(){var e,a,i;return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:return t.loading=!0,e="claim",s.next=5,t.repurchFun;case 5:a=s.sent,i=a.claimThirdPrize,i().then((function(s){var a="".concat(e," Success");o=t.$overalltip({type:"success",msg:a}),t.loading=!1,t.thirdIsClaimed=!0})).catch((function(s){t.loading=!1,overalltip.close();var a="".concat(e," Error");o=t.$overalltip({type:"error",msg:a})}));case 8:case"end":return s.stop()}}),s)})))()}},destroyed:function(){o&&o.close()}},l=u,d=(e("7d53"),e("2877")),v=Object(d["a"])(l,a,i,!1,null,"417ce45f",null);s["a"]=v.exports},"398b":function(t,s){t.exports="data:image/png;base64,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"},"520d":function(t,s,e){},5436:function(t,s){t.exports="data:image/png;base64,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"},"7d53":function(t,s,e){"use strict";e("fc35")},"84b9":function(t,s,e){"use strict";e("a5ac")},"8e09":function(t,s,e){},a177:function(t,s,e){t.exports=e.p+"img/bsc_right-arrow.b44b1698.svg"},a5ac:function(t,s,e){},ab89:function(t,s){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAMAAAANIilAAAABWVBMVEUAAADY4uTI1tnI1tra4+WwwsXG1NjM3t7///+tv8PS3eDQ29+5yczt7e2yw8fL2Nq+zdDK19rX4uTV3+LAz9K1xsrQ3N/O2tzN2dy+zNDJ1tnD0dfS4+OywsfT3+HT3uG2xsm8ys7L19rAztHB0dPN2dzU4OKxwsa4yMvM2dy2xsrE09bAz9LC0dPC0NPI1dfH1daywsbE0dS+ztK8ys3A09O/v7/C0NPQ296rvsHD0dTO2tzI1NeouL2PoqfBztLP2928y87E0tXJ1tm/zdD///+uv8PR3d7G09W5x8u0xMfM2Nu+y8+1xcnL19q3xcmuvsLN2dvAztG6yc25yMy3x8qis7exwsWwwcS8yc2yw8amt7uvwMTH1NbB0NPT3uDS3eCru7+TpqqtvcCltbq5xsmTpar7/Pzu8vPV3+KbrbH2+Pmpub7y9fXj6eu7yMze5eeXqa3o7e6kRA8wAAAAN3RSTlMA/igf/uxdEQH72MCuBNuVfGP17dXNy76ad1M2C+Td29Oji2lA/fTt3tW8sYhr9vX05729kEUIY7n3zwAABwhJREFUSMeVl2dj2jAQhk2adO+99977JFnUE+ONMQaDw2ySNm3T+f8/9CQXEtp0vR8ICXl0d++dZKFsr107D526eOxopXLz2MV9p4/sUv5ZO67urYz0eAClTB6TvYcW/gk9e3JxFDP4Se6Nkzv/ju6tqOYMGQ638PzOn/Ed+yp6idptv+tQlNMt2va0gFN/SP7I0ZFEjUhw3dyP2n7RT3CFyCjxR0d+gx44vdiUaB9BEc10OXdNzMLLkW9Jml09sB17ft874e+XnCZtDQZNnZD6uD4ej+qEg5Y5tFtGv7drm3IvvWO48GKt3h66qo5+syYppddHZADthBaaoI/v+CWuZG34WPuo6018K1nVmvF1c9igji3p8z/Vu+8dG0DorNgfdVWghmADZlsqoviimk2VtSg1ZOa75+DTFQafdJqEZuk3TDRGCPR6oYoV9yyxoDVybYd6gLo/16NFDu7b9a7GiZyttOv1XEy2J17VXi9DqznRR5aWU+n6zi1mHQ2Arddqn6ymqDsExo1eSkiTNy1MOvyM4YbNOCb1QOtTUffDzWnZN4b6xxrqYwCQJCtYL1N1MpVqGMB5rxdg8yw7cYTnz2bzXHErb2tSH0g6qU4sslWiXk60Xk/TVVN3DZqLqb/2A96rY7IVRN8uAmT5hm39yqpWqsViyxDWlpYf3/0jMH7cTb7UaiM5gOmMC1LP9zcSmxNUHAgWmD5M+sLTMvRJFdtK2+aHbwAt7O8MbVSr1eU3r1697xEhZA2MGbgZzZC+LK1exAX7yVBfVNGtfMbGK1O2Wu2VLMiYBBzhWescwldHMrDbBKEZS/qCff0aWZQlWRgKo2PeEs3Wrgi7LICIanIo2SbLBNsFcNcErCE7k67RAn/cxnNS2OV0QZ9nyWdkJ8LnQMAespswFBQw4oKy8x32ibYH8TxLPKzXQJbEIoUV2CJuZaJb2RnlEIZsUxt3YTbXXl590xEsSUXpjRlp41s9pRFAuF85hSX7FFNhPXduNrSWZPkE2Q7M5G2IvPs5OnZCuejihHSBsGbIf50rtraB7NdwEzaqCLPcwbdLyjHhV2HiDooH6k+sha0WcW3YVGS0WX3gC8f2KEfxlfpunaAD+jxLbMm+b8MWLReJWucRHWJMpYKtpxEfE51bwTxLBoJ99epVdZMNjSzAjYkWY0wFO6XRNsfIFg/nWBTzVl8JJTM4aVgawl4J3yzTHhN3LTW3sNzUy73wFeHXM7jd8xgp09aocgykYWNCLBzgGetWq345zxMRemq3psacICwMC/colwBb1YcR0VViGbOccTtuxIIt4axkWW9AdJ2MWeFg024p+xhAkUAdBzLVjFm9EXolfbK/CjgtWdW2wVPJGLo5VnBZOc3leBIdi2ZuMPXKFj6/X6523gi284NtctZgmLYcz3y/csQSG8NDuzFxNfdLlgQT7NFUb1olOwhJU0U2bomNQQ8ru3ThWI5FE2vAlid8etxuwl+zkiWpRyzhF/OpBgZdwMMAP8BfMG9ztZp4QfzjvNKS929E1PcOlGwQmyFg1oEOtEBmCU+SQ6Y4hrJBXWX+xFCZV7JSmiHHuozb01T9G7KW1aIZdnk/wgs3RN4O1E3pldawdGTnhaweNFKyXqsEQKDvaJDR6/LoxQ9bePQ2gZufw8FaHEa/sm6oNtx3+EgxxfnnAfQvKEI7XTEnyVDFCQsbDa6udFotbY7lwdpnon6SD6QvIk0w0GupOyB+abCRXj4Xio4/WQ7TKaqla71BQ6t8QFQ+k2iGgZcOKGVoUWJBW+5IbKSVal5ESWeSrxYCjVa7YSPkOJmGfBquw0oXwJOBpU6J9R1qW3VMfLnTScBY7Xidjo/D11k1vTULfWx4ZvNtbT1NaIpTdXB2s1h4jLRNHS1Ay7WWERZ9Pw8nnVUNqqueylxgcWzFAJ/eml36BR3ag1ZP9cCUZeeaJeYt66D6YEfd0M5ZQFgDNQgAmuqngo5q3zw6dyk5BCiP9m1XXEo+JyuNNqa/MWS9RiNzuZ1aATDC05wa67UP2t2569DLpyBjJwbTA+kTBl81mBpnGJUREkCsm2EijF73D+766QJ4XCChQ/H+R2KxkB+lTMVJdV0LWYtw8FZoiMsmS79cARduy57mNMmA6zov57lUva5b0HJoNxV7aOncNl8rTmg/7rwOzpel63odNUbVYwYt/HMmFz+4sO2V+YoBQplDaZGlwAbcsjhnkLZ8Sh1PrOzQu+eV7XXGt2Xu4p9pP/cjz4v8okvFYphW6tM9z9Hn3+jciSgFKSPKHSrldCNDE0tGlB68rvxJ1y4UBkw1tO0hlAoxmaXDGPaP2v3goCNCbZUR9Sm9cOaA8g86d+UJ7RdRO2u1Wli0SH9p/4v/+FJ3Zv+JpT0UtefW5f2HF5Rt9R0Pgco8pHTZSQAAAABJRU5ErkJggg=="},abae:function(t,s,e){t.exports=e.p+"img/heco_right-arrow.d68ddddb.svg"},c438:function(t,s,e){"use strict";var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"title-banner",class:[t.getLanguage,t.chainName]},[["/buyback","/pastrecord"].includes(t.routerPath)?e("div",{staticClass:"banner-con",style:{backgroundImage:"url("+t.getImg("buyback")+")"}}):t._e(),e("div",{directives:[{name:"show",rawName:"v-show",value:"/liquidity"==t.routerPath,expression:"routerPath == '/liquidity'"}],staticClass:"banner-bar text"},[e("div",{staticClass:"pc"},[e("h1",{staticClass:"home__banner-title"},[t._v(" "+t._s(t.$t("CurrentTransacObtainCurrencytionVolume"))+" ")]),e("div",{staticClass:"ban-center"},[e("p",{staticClass:"liquidity-mdx ban-center"},[t._v(" "+t._s(t.$t("MDXtotal"))+" "),e("CountUp",{attrs:{endVal:t.liquidity_mdex||0}}),t._v(" USDT ")],1),e("p",{staticClass:"liquidity-mdx dig",on:{click:t.jumpHandle}},[e("span",[t._v(t._s(t.$t("VoteDig")))]),e("img",{attrs:{src:"Heco"==t.chainName?t.hecoArrow:t.bscArrow,alt:""}})])])]),e("div",{staticClass:"h5 li-h5title ban-start text Heavy"},[e("div",{staticClass:"act-title"},[e("p",[t._v(t._s(t.$t("LiquidityMining")))]),e("p")]),e("router-link",{staticClass:"li-title",attrs:{to:"/trading",tag:"div",exact:""}},[e("span",{staticClass:"text Heavy"},[t._v(" "+t._s(t.$t("TradePool"))+" ")])])],1),e("div",{staticClass:"h5 li-banner-total"},[e("div",{staticClass:"banner-tit"},[t._v(t._s(t.$t("TotalLockIn"))+" "),t._e()]),e("div",{staticClass:"banner-sum numbers"},[e("CountUp",{attrs:{endVal:t.liquidity_mdex||0}})],1)])]),e("div",{directives:[{name:"show",rawName:"v-show",value:"/trading"==t.routerPath,expression:"routerPath == '/trading'"}],staticClass:"banner-bar text"},[e("div",{staticClass:"pc"},[e("h1",{staticClass:"home__banner-title"},[t._v(" "+t._s(t.$t("tradeTitle"))+" ")]),e("div",{staticClass:"new-banner-totals"},[e("div",{staticClass:"new-banner-total-white"},[e("div",{staticClass:"list-white"},[e("span",{staticClass:"list-white-one"},[t._v(" "+t._s(t.$t("TotalRewardOfCurrentPool"))+" ")]),e("span",{staticClass:"list-white-own numbers"},[e("CountUp",{attrs:{endVal:t.trading_totalReward}})],1),e("span",{staticClass:"list-white-one"},[t._v("MDX")])]),e("div",{staticClass:"list-white"},[e("span",{staticClass:"list-white-one"},[t._v(" "+t._s(t.$t("CurrentIndividualWithdrawableBonus"))+" ")]),e("span",{staticClass:"list-white-own numbers"},[e("CountUp",{attrs:{endVal:t.trading_userReward,options:t.trading_options}})],1),e("span",{staticClass:"list-white-one"},[t._v("MDX")])])]),e("button",{staticClass:"new-list-white-banner",attrs:{disabled:!t.trading_userReward},on:{click:t.onWithdrawal}},[t._v(" "+t._s(t.$t("CashWithdrawalReward"))+" ")])])]),e("div",{staticClass:"h5 li-h5title ban-start"},[e("router-link",{staticClass:"li-title",attrs:{to:"/liquidity",tag:"div",exact:""}},[e("span",[t._v(" "+t._s(t.$t("LiquidityMining"))+" ")])]),e("div",{staticClass:"act-title act-mining text Heavy"},[e("p",[t._v(t._s(t.$t("TradePool")))]),e("p")])],1),e("div",{staticClass:"h5 trading-banner"},[e("div",{staticClass:"ban-start trading-ban-list"},[e("div",[e("p",[t._v(t._s(t.$t("TotalRewardOfCurrentPool")))]),e("p",{staticClass:"numbers"},[e("CountUp",{attrs:{endVal:t.trading_totalReward}}),e("span",{staticClass:"h5-sum"},[t._v("MDX")])],1)]),e("div",[e("p",[t._v(t._s(t.$t("CurrentIndividualWithdrawableBonus")))]),e("p",{staticClass:"numbers"},[e("CountUp",{attrs:{endVal:t.trading_userReward,options:t.trading_options}}),e("span",{staticClass:"h5-sum"},[t._v("MDX")])],1)])]),e("div",{staticClass:"ban-center"},[e("button",{staticClass:"new-banner-btn-dra text Bold",attrs:{disabled:!t.trading_userReward},on:{click:t.onWithdrawal}},[t._v(" "+t._s(t.$t("CashWithdrawalReward"))+" ")])])])]),e("div",{directives:[{name:"show",rawName:"v-show",value:"/boardroom"==t.routerPath,expression:"routerPath == '/boardroom'"}],staticClass:"banner-bar text"},[e("div",{staticClass:"pc"},[e("h1",{staticClass:"home__banner-title"},[t._v(" "+t._s(t.$t("text9"))+" ")]),e("h2",{staticClass:"home__banner-describe"},[t._v(" "+t._s(t.$t("text8"))+" ")])]),e("div",{staticClass:"h5 boardroom-banner__title"},[t._v(" "+t._s(t.$t("Directors"))+" ")])]),e("div",{directives:[{name:"show",rawName:"v-show",value:"/bridge"==t.routerPath,expression:"routerPath == '/bridge'"}],staticClass:"banner-bar text"},[e("div",{staticClass:"pc"},[e("h1",{staticClass:"home__banner-title"},[t._v(" "+t._s(128==t.chainId?t.$t("MDEForEcoEurrencyTrading1"):56==t.chainId?t.$t("MDEForEcoEurrencyTrading2"):t.$t("MDEForEcoEurrencyTrading3"))+" ")]),e("h2",{staticClass:"home__banner-describe"},[t._v(" "+t._s(t.$t("lightText"))+" ")])]),e("div",{staticClass:"h5 boardroom-banner__title"},[t._v(" "+t._s(t.$t("crossChainBridge"))+" ")])]),e("div",{directives:[{name:"show",rawName:"v-show",value:["BoardroomPool","Lockup"].includes(t.$route.name),expression:"['BoardroomPool', 'Lockup'].includes($route.name)"}],staticClass:"banner-bar text"},[e("div",{staticClass:"pc"},[e("h1",{staticClass:"home__banner-title"},[t._v(" "+t._s(t.$t("poolTitle"))+" ")]),e("h2",{staticClass:"home__banner-describe"},[t._v(" "+t._s(128==t.chainId?t.$t("poolDescribe1"):56==t.chainId?t.$t("poolDescribe2"):t.$t("poolDescribe3"))+" ")])]),e("div",{staticClass:"h5 boardroom-banner__title"},[t._v(" "+t._s(t.$t("transaction"))+" ")])]),e("div",{directives:[{name:"show",rawName:"v-show",value:"/introduce"===t.routerPath,expression:"routerPath === '/introduce'"}],staticClass:"banner-bar text"},[e("div",{staticClass:"pc"},[e("h1",{staticClass:"home__banner-title"},[t._v(" "+t._s(t.$t("introduce"))+" ")]),e("h2",{staticClass:"introduceDsc"},[t._v(" "+t._s(t.$t("introduceDsc"))+" ")])]),t.isPC||"en"===t.$store.state.language?t._e():e("div",[e("h1",{staticClass:"introduce_banner"},[t._v(" "+t._s(t.$t("introduce"))+" ")]),e("h2",{staticClass:"introduceDsc"},[t._v(" "+t._s(t.$t("introduceDsc"))+" ")])]),t.isPC||"en"!==t.$store.state.language?t._e():e("div",[e("p",{staticClass:"text-info"},[t._v(t._s(t.$t("introduceComplete")))])])]),e("div",{directives:[{name:"show",rawName:"v-show",value:"/priceplan"===t.routerPath,expression:"routerPath === '/priceplan'"}],staticClass:"banner-bar text"},[e("h1",{staticClass:"home__banner-title"},[t._v(" MDEX "+t._s(t.$t("sjrd"))+" ")]),e("h2",{staticClass:"introduceDsc"},[t._v(" "+t._s(t.$t("sjplantitle"))+" ")])])])},i=[],n=(e("a9e3"),e("99af"),{name:"HomeBanner",data:function(){return{hecoArrow:e("abae"),bscArrow:e("a177")}},props:{liquidity_mdex:{type:String|Number,default:0},trading_userReward:{type:String|Number|Boolean,default:0},trading_options:{type:Object|Array,default:function(){}},trading_totalReward:{type:String|Number|Boolean,default:0}},computed:{routerPath:function(){return this.$route.path}},mounted:function(){},$computed:{bnp:"bnp"},methods:{stitchingPic:function(){var t="";return this.isPC?t+="pc_":t+="h5_","zh-CN"===this.getLanguage?t+="zh-CN_":t+="en_",t+=this.chainName,t},getImg:function(t){var s={buyback:{"pc_zh-CN_Heco":"buyback_pc_zh-CN_Heco","pc_zh-CN_Bsc":"buyback_pc_zh-CN_Bsc",pc_en_Heco:"buyback_pc_en_Heco",pc_en_Bsc:"buyback_pc_en_Bsc","h5_zh-CN_Heco":"buyback_h5_zh-CN_Heco","h5_zh-CN_Bsc":"buyback_h5_zh-CN_Bsc",h5_en_Heco:"buyback_h5_en_Heco",h5_en_Bsc:"buyback_h5_en_Bsc"}};return e("e8b59")("./".concat(t,"/").concat(s[t][this.stitchingPic()],".png"))},onWithdrawal:function(){this.$emit("on-withdrawal")},jumpHandle:function(){window.open(this.getUrlList["VoteDig"])}}}),r=n,c=(e("2cbe"),e("2877")),o=Object(c["a"])(r,a,i,!1,null,"003ed3a3",null);s["a"]=o.exports},e8b59:function(t,s,e){var a={"./buyback/buyback_h5_en_Bsc.png":"2063","./buyback/buyback_h5_en_Heco.png":"4cee","./buyback/buyback_h5_zh-CN_Bsc.png":"e584","./buyback/buyback_h5_zh-CN_Heco.png":"f1b0","./buyback/buyback_pc_en_Bsc.png":"7bdc","./buyback/buyback_pc_en_Heco.png":"5150","./buyback/buyback_pc_zh-CN_Bsc.png":"175c","./buyback/buyback_pc_zh-CN_Heco.png":"c7ec"};function i(t){var s=n(t);return e(s)}function n(t){if(!e.o(a,t)){var s=new Error("Cannot find module '"+t+"'");throw s.code="MODULE_NOT_FOUND",s}return a[t]}i.keys=function(){return Object.keys(a)},i.resolve=n,t.exports=i,i.id="e8b59"},fb82:function(t,s,e){"use strict";var a=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"list-price text"},[a("div",{staticClass:"left"},[a("div",[a("div",{staticClass:"header"},[a("span",{staticClass:"one-1"},[t._v(t._s(t.$t("Prizelevels")))]),a("span",{staticClass:"two-2"},[t._v(t._s(t.$t("hjrc")))]),a("span",{staticClass:"three-3"},[t._v(t._s(t.$t("TotalMDX")))]),a("span",{staticClass:"four-4"},[t._v(t._s(t.$t("Sharerewards")))])]),a("div",{staticClass:"frist-price"},[a("img",{attrs:{src:e("398b"),alt:""}}),a("div",{staticClass:"img-right"},[a("span",{staticClass:"one text Bold"},[t._v(t._s(t.$t("JupiterAward")))]),a("span",{staticClass:"two numbers Medium"},[t._v(t._s(t.getInfo.gold.repurch_user))]),a("span",{staticClass:"three numbers Medium"},[t._v(t._s(Number(t.getInfo.gold.repurch_amount).toFixed(0)))]),a("span",{staticClass:"four"},[a("span",{staticClass:"textEn"},[t._v(t._s(t.getnumNew.toFixed(0))+"MDX")]),a("el-tooltip",{staticClass:"item",attrs:{trigger:"click",effect:"dark",placement:"bottom","popper-class":"tipCase"}},[a("div",{attrs:{slot:"content"},domProps:{innerHTML:t._s(t.global.$t("caojuxinciTips"))},slot:"content"}),a("i")])],1)])]),a("div",{staticClass:"frist-price"},[a("img",{attrs:{src:e("5436"),alt:""}}),a("div",{staticClass:"img-right"},[a("span",{staticClass:"one text Bold"},[t._v(t._s(t.$t("SatumAward")))]),a("span",{staticClass:"two numbers Medium"},[t._v(t._s(t.getInfo.silver.repurch_user))]),a("span",{staticClass:"three numbers Medium"},[t._v(t._s(Number(t.getInfo.silver.repurch_amount).toFixed(0)))]),a("span",{staticClass:"four textEn"},[t._v(t._s(t.splitFormat(t.getInfo.silver.reward_amount).toFixed(0))+"USDT")])])]),a("div",{staticClass:"frist-price"},[a("img",{attrs:{src:e("ab89"),alt:""}}),a("div",{staticClass:"img-right"},[a("span",{staticClass:"one text Bold"},[t._v(t._s(t.$t("PlutoAward")))]),a("span",{staticClass:"two numbers Medium"},[t._v(t._s(t.getInfo.bronze.repurch_user))]),a("span",{staticClass:"three numbers Medium"},[t._v(t._s(Number(t.getInfo.bronze.repurch_amount).toFixed(0)))]),a("span",{staticClass:"four textEn"},[t._v(t._s(t.splitFormat(t.getInfo.bronze.reward_amount).toFixed(0))+"USDT")])])])])]),t.isPC?a("pricelist"):t._e(),t.isPC?t._e():a("pricelist",{attrs:{isShowFrist:!0}})],1)},i=[],n=(e("a9e3"),e("ed08")),r=e("3578"),c={name:"newRecode",components:{pricelist:r["a"]},data:function(){return{splitFormat:n["g"],global:window.$v}},watch:{phase:function(t){this.$store.dispatch("buyBack/getInfoList",{phase:t})},chainId:function(){this.$store.dispatch("buyBack/getInfoList")}},created:function(){this.$store.dispatch("buyBack/getInfoList")},computed:{lang:function(){return"en"===this.$store.state.language?"en":"zn"},chainId:function(){return this.$store.getters.chainId},getData:function(){return this.$store.state.buyBack.assetBuyData},phase:function(){return this.$store.state.buyBack.phase},isPC:function(){return this.$store.getters.isPC},totalnum:function(){return Object(n["g"])(this.$store.state.buyBack.assetBuyData.total_repurch_mdx)},getBlance:function(){return Number(this.getData.balance)+Number(this.getData.total_repurch_mdx*this.getData.reward_gold_rate)},destorynum:function(){return Object(n["g"])(this.$store.state.buyBack.assetBuyData.total_repurch_mdx)*(1-this.$store.state.buyBack.assetBuyData.reward_gold_rate)},superprice:function(){return Number(.1*this.totalnum)+Number(this.getData.balance)},getnumNew:function(){return.6*this.superprice},getInfo:function(){return this.$store.state.buyBack.assetBuyData.repurch_reward_info,this.$store.state.buyBack.assetBuyData.repurch_reward_info},getnum:function(){return Object(n["g"])(this.$store.state.buyBack.assetBuyData.repurch_reward_info.gold.reward_amount)}}},o=c,u=(e("84b9"),e("2877")),l=Object(u["a"])(o,a,i,!1,null,"756a1902",null);s["a"]=l.exports},fc35:function(t,s,e){},ff93:function(t,s,e){"use strict";e("520d")}}]);