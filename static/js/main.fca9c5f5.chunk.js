(this.webpackJsonpquiz=this.webpackJsonpquiz||[]).push([[0],[,,,,,,function(e,t,n){e.exports={ActiveQuiz:"activeQuiz_ActiveQuiz__1Vbsq",Question:"activeQuiz_Question__1GhMJ",img:"activeQuiz_img__1feyC"}},function(e,t,n){e.exports={Answer:"Answer_Answer__2t7eE",AnswerItem:"Answer_AnswerItem__2berr",success:"Answer_success__3rIAH",error:"Answer_error__3iQJX"}},function(e,t,n){e.exports={inner:"Layout_inner__of66K",main:"Layout_main__3_fpT"}},function(e,t,n){e.exports={MenuToggle:"MenuToggle_MenuToggle__26vpU",open:"MenuToggle_open__1Ro_I"}},function(e,t,n){e.exports={Drawer:"Drawer_Drawer__3bRrr",close:"Drawer_close__3yxhH",active:"Drawer_active__15h42"}},,function(e,t,n){e.exports={Quiz:"Quiz_Quiz__1x_PZ",QuizWrapper:"Quiz_QuizWrapper__17ueo"}},function(e,t,n){e.exports={FinishedQuiz:"FinishedQuiz_FinishedQuiz__txaA6",success:"FinishedQuiz_success__2s3JZ",error:"FinishedQuiz_error__p-NMc"}},function(e,t,n){e.exports={Button:"Button_Button__3Cajf",success:"Button_success__33vf4",error:"Button_error__27hUD",primary:"Button_primary__25PoZ"}},,,function(e,t,n){e.exports={Backdrop:"Backdrop_Backdrop__1NXbU"}},function(e,t,n){e.exports={AnswersList:"AnswersList_AnswersList__JYRqr"}},function(e,t,n){e.exports=n.p+"static/media/597711cba19eb_0d739cac3d42d04c2e69c4cddf62f354.3eb3214f.jpg"},function(e,t,n){e.exports=n(26)},,,,,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var s=n(0),i=n.n(s),a=n(16),r=n.n(a),u=(n(25),n(1)),c=n(2),o=n(4),l=n(3),d=n(5),m=n(8),h=n.n(m),w=n(9),_=n.n(w),p=function(e){var t=[_.a.MenuToggle,"fa"];return e.isOpen?t.push("fa-times "+_.a.open):t.push("fa-bars"),i.a.createElement("i",{className:t.join(" "),onClick:e.onToggle})},f=n(10),v=n.n(f),x=n(17),g=n.n(x),k=function(e){return i.a.createElement("div",{className:g.a.Backdrop,onClick:e.onClick})},E=[1,2,3],b=function(e){function t(){return Object(u.a)(this,t),Object(o.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"renderLinks",value:function(){return E.map((function(e,t){return i.a.createElement("li",{key:t},i.a.createElement("a",null," Link ",e))}))}},{key:"render",value:function(){var e=[v.a.Drawer];return this.props.isOpen||e.push(v.a.close),i.a.createElement(i.a.Fragment,null,i.a.createElement("nav",{className:e.join(" ")},i.a.createElement("ul",null,this.renderLinks())),this.props.isOpen?i.a.createElement(k,{onClick:this.props.onClose}):null)}}]),t}(i.a.Component),A=function(e){function t(){var e,n;Object(u.a)(this,t);for(var s=arguments.length,i=new Array(s),a=0;a<s;a++)i[a]=arguments[a];return(n=Object(o.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(i)))).state={menu:!1},n.onToggle=function(){n.setState({menu:!n.state.menu})},n.menuCloseHandler=function(){n.setState({menu:!1})},n}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:h.a.inner},i.a.createElement(b,{isOpen:this.state.menu,onClose:this.menuCloseHandler}),i.a.createElement(p,{onToggle:this.onToggle,isOpen:this.state.menu}),i.a.createElement("div",{className:h.a.main},this.props.children))}}]),t}(i.a.Component),z=n(11),Q=n(12),q=n.n(Q),y=n(6),j=n.n(y),O=n(18),C=n.n(O),I=n(7),N=n.n(I),S=function(e){var t=[N.a.AnswerItem,N.a.Answer];return e.state&&t.push(N.a[e.state]),i.a.createElement("li",{className:t.join(" "),onClick:function(){return e.onAnswerClick(e.answers.id)}},e.answers.text)},B=function(e){return i.a.createElement("ul",{className:C.a.AnswersList},e.answers.map((function(t,n){return i.a.createElement(S,{key:n,answers:t,state:e.state?e.state[t.id]:null,onAnswerClick:e.onAnswerClick})})),i.a.createElement("li",null))},F=function(e){return i.a.createElement("div",{className:j.a.ActiveQuiz},i.a.createElement("p",{className:j.a.Question},i.a.createElement("div",null,i.a.createElement("small",null,e.answerNumber," \u0438\u0437 ",e.quizLength)," ",i.a.createElement("br",null),i.a.createElement("img",{className:j.a.img,src:e.questionPickture}),i.a.createElement("div",null,i.a.createElement("strong",null,e.answerNumber),"\xa0",e.question))),i.a.createElement(B,{answers:e.answers,state:e.state,onAnswerClick:e.onAnswerClick}))},T=n(13),L=n.n(T),D=n(14),M=n.n(D),H=function(e){var t=[M.a.Button,M.a[e.type]];return i.a.createElement("button",{onClick:e.onClick,className:t.join(" "),disabled:e.disabled},e.children)},J=function(e){var t=Object.keys(e.results).reduce((function(t,n){return"success"===e.results[n]&&t++,t}),0);return i.a.createElement("div",{className:L.a.FinishedQuiz},i.a.createElement("ul",null,e.quiz.map((function(t,n){var s=["fa","error"===e.results[t.id]?"fa-times":"fa-check",L.a[e.results[t.id]]];return i.a.createElement("li",{key:n},i.a.createElement("strong",null,n+1)," \xa0",t.question,i.a.createElement("i",{className:s.join(" ")}))}))),i.a.createElement("p",null,"\u041f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e ",t," \u0438\u0437 ",e.quiz.length),i.a.createElement(H,{onClick:e.onRetry,type:"primary"},"\u041f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u044c"),i.a.createElement(H,{onClick:e.onRetry,type:"success"},"\u041f\u0435\u0440\u0435\u0439\u0442\u0438 \u0432 \u0441\u043f\u0438\u0441\u043e\u043a \u0442\u0435\u0441\u0442\u043e\u0432"))},P=n(19),R=n.n(P),W=function(e){function t(){var e,n;Object(u.a)(this,t);for(var s=arguments.length,i=new Array(s),a=0;a<s;a++)i[a]=arguments[a];return(n=Object(o.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(i)))).state={results:{},isFinished:!1,activeQuestion:0,answerState:null,quiz:[{questionPickture:R.a,question:"\u0421\u043a\u043e\u043b\u044c\u043a\u043e \u043b\u0435\u0442 \u0415\u043a\u0430\u0442\u0435\u0440\u0438\u043d\u0431\u0443\u0440\u0433\u0443?",rightAnswerId:4,id:1,answers:[{text:"150",id:1},{text:"300",id:2},{text:"100",id:3},{text:"296",id:4}]},{question:"\u0412 \u0447\u0435\u0441\u0442\u044c \u043a\u0430\u043a\u043e\u0439 \u0438\u043c\u043f\u0435\u0440\u0430\u0442\u0440\u0438\u0446\u044b \u043d\u0430\u0437\u0432\u0430\u043d \u0433\u043e\u0440\u043e\u0434?",rightAnswerId:1,id:2,answers:[{text:"\u0412 \u0447\u0435\u0441\u0442\u044c \u0415\u043a\u0430\u0442\u0435\u0440\u0438\u043d\u044b I",id:1},{text:"\u0412 \u0447\u0435\u0441\u0442\u044c \u0415\u043a\u0430\u0442\u0435\u0440\u0438\u043d\u044b II",id:2},{text:"\u0412 \u0447\u0435\u0441\u0442\u044c \u0415\u043a\u0430\u0442\u0435\u0440\u0438\u043d\u044b III",id:3}]},{question:"\u041d\u0430 \u043a\u0430\u043a\u043e\u0439 \u0440\u0435\u043a\u0435 \u0441\u0442\u043e\u0438\u0442 \u0415\u043a\u0430\u0442\u0435\u0440\u0438\u043d\u0431\u0443\u0440\u0433?",rightAnswerId:2,id:3,answers:[{text:"\u0427\u0443\u0441\u043e\u0432\u0430\u044f",id:1},{text:"\u0418\u0441\u0435\u0442\u044c",id:2},{text:"\u0412\u043e\u043b\u0433\u0430",id:3},{text:"\u0418\u0440\u0442\u044b\u0448",id:4}]},{question:"\u041a\u0430\u043a\u0438\u0435 \u0436\u0438\u0432\u043e\u0442\u043d\u044b\u0435 \u0434\u0435\u0440\u0436\u0430\u0442 \u0449\u0438\u0442 \u043d\u0430 \u0433\u0435\u0440\u0431\u0435?",rightAnswerId:3,id:4,answers:[{text:"\u041c\u0435\u0434\u0432\u0435\u0434\u044c \u0438 \u043b\u0438\u0441\u0430",id:1},{text:"\u0417\u0430\u044f\u0446 \u0438 \u0432\u043e\u043b\u043a",id:2},{text:"\u041c\u0435\u0434\u0432\u0435\u0434\u044c \u0438 \u0441\u043e\u0431\u043e\u043b\u044c",id:3}]},{question:"\u041a\u0442\u043e \u0438\u0437 \u0437\u043d\u0430\u043c\u0435\u043d\u0438\u0442\u044b\u0445 \u043f\u0438\u0441\u0430\u0442\u0435\u043b\u0435\u0439 \u0440\u043e\u0434\u0438\u043b\u0441\u044f \u0432 \u0415\u043a\u0430\u0442\u0435\u0440\u0438\u043d\u0431\u0443\u0440\u0433\u0435?",rightAnswerId:1,id:5,answers:[{text:"\u0420\u0435\u0448\u0435\u0442\u043d\u0438\u043a\u043e\u0432",id:1},{text:"\u0411\u0430\u0436\u043e\u0432",id:2},{text:"\u041c\u0430\u043c\u0438\u043d-\u0421\u0438\u0431\u0438\u0440\u044f\u043a",id:3},{text:"\u041f\u0443\u0448\u043a\u0438\u043d",id:4}]},{question:"\u0421\u043a\u043e\u043b\u044c\u043a\u043e \u044d\u0442\u0430\u0436\u0435\u0439 \u0432 \u0431\u0430\u0448\u043d\u0435 \xab\u0418\u0441\u0435\u0442\u044c\xbb?",rightAnswerId:3,id:6,answers:[{text:"40",id:1},{text:"48",id:2},{text:"52",id:3},{text:"55",id:4}]},{question:"\u0421\u043a\u043e\u043b\u044c\u043a\u043e \u0445\u0443\u0434\u043e\u0436\u0435\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u0445 \u0444\u0438\u043b\u044c\u043c\u043e\u0432 \u0441\u043d\u044f\u0442\u043e \u043d\u0430 \u0421\u0432\u0435\u0440\u0434\u043b\u043e\u0432\u0441\u043a\u043e\u0439 \u043a\u0438\u043d\u043e\u0441\u0442\u0443\u0434\u0438\u0438?",rightAnswerId:2,id:7,answers:[{text:"\u0411\u043e\u043b\u0435\u0435 200",id:1},{text:"\u041e\u043a\u043e\u043b\u043e 300",id:2},{text:"\u041c\u0435\u043d\u0435\u0435 150",id:3}]},{question:"\u0413\u043e\u0434 \u043e\u0441\u043d\u043e\u0432\u0430\u043d\u0438\u044f \u0415\u043a\u0430\u0442\u0435\u0440\u0438\u043d\u0431\u0443\u0440\u0433\u0430?",rightAnswerId:1,id:8,answers:[{text:"1723 \u0433\u043e\u0434",id:1},{text:"1730 \u0433\u043e\u0434",id:2},{text:"1811 \u0433\u043e\u0434",id:3},{text:"1921 \u0433\u043e\u0434 ",id:4}]},{question:"\u0421\u043a\u043e\u043b\u044c\u043a\u043e \u0441\u0442\u0430\u043d\u0446\u0438\u0439 \u043c\u0435\u0442\u0440\u043e \u0432 \u0433\u043e\u0440\u043e\u0434\u0435?",rightAnswerId:1,id:9,answers:[{text:"9",id:1},{text:"11",id:2},{text:"7",id:3}]},{question:"\u041a\u0430\u043a\u0430\u044f \u0443\u043b\u0438\u0446\u0430 \u0441\u0430\u043c\u0430\u044f \u0434\u043b\u0438\u043d\u043d\u0430\u044f \u0432 \u0415\u043a\u0431?",rightAnswerId:1,id:10,answers:[{text:"\u0428\u0435\u0444\u0441\u043a\u0430\u044f",id:1},{text:"\u041b\u0435\u043d\u0438\u043d\u0430",id:2},{text:"\u0411\u0435\u043b\u0438\u043d\u0441\u043a\u043e\u0433\u043e",id:3},{text:"\u041a\u043e\u043c\u043c\u0443\u043d\u0438\u0441\u0442\u0438\u0447\u0435\u0441\u043a\u0430\u044f",id:4}]}]},n.onAnswerClick=function(e){if(n.state.answerState){var t=Object.keys(n.state.answerState)[0];if("success"===n.state.answerState[t])return}var s=n.state.quiz[n.state.activeQuestion],i=n.state.results;if(s.rightAnswerId===e){i[s.id]||(i[s.id]="success"),n.setState({answerState:Object(z.a)({},e,"success"),results:i});var a=window.setTimeout((function(){n.isQuizFinished()?n.setState({isFinished:!0}):n.setState({activeQuestion:n.state.activeQuestion+1,answerState:null}),window.clearTimeout(a)}),1e3)}else i[s.id]="error",n.setState({answerState:Object(z.a)({},e,"error"),results:i})},n.retryHandler=function(){n.setState({activeQuestion:0,answerState:null,isFinished:!1,results:{}})},n}return Object(d.a)(t,e),Object(c.a)(t,[{key:"isQuizFinished",value:function(){return this.state.activeQuestion+1===this.state.quiz.length}},{key:"render",value:function(){return i.a.createElement("div",{className:q.a.Quiz},i.a.createElement("div",{className:q.a.QuizWrapper},i.a.createElement("h1",null,"\u041e\u0442\u0432\u0435\u0442\u044c\u0442\u0435 \u043d\u0430 \u0432\u0441\u0435 \u0432\u043e\u043f\u0440\u043e\u0441\u044b"),this.state.isFinished?i.a.createElement(J,{results:this.state.results,quiz:this.state.quiz,onRetry:this.retryHandler}):i.a.createElement(F,{answers:this.state.quiz[this.state.activeQuestion].answers,question:this.state.quiz[this.state.activeQuestion].question,onAnswerClick:this.onAnswerClick,questionPickture:this.state.quiz[this.state.activeQuestion].questionPickture,quizLength:this.state.quiz.length,answerNumber:this.state.activeQuestion+1,state:this.state.answerState})))}}]),t}(i.a.Component),U=function(e){function t(){return Object(u.a)(this,t),Object(o.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement(A,null,i.a.createElement(W,null))}}]),t}(i.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(U,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[20,1,2]]]);
//# sourceMappingURL=main.fca9c5f5.chunk.js.map