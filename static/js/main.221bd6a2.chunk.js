(this["webpackJsonpsearch-avengers"]=this["webpackJsonpsearch-avengers"]||[]).push([[0],[,,,,,,,,function(e,n,t){e.exports=t(18)},,,,,function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),c=t(2),o=t.n(c),i=(t(13),t(3)),s=t(4),l=t(6),u=t(5),h=t(7),m=(t(14),function(e){return r.a.createElement("div",{className:"card-container"},r.a.createElement("img",{alt:"avenger",src:"https://robohash.org/".concat(e.avenger.id,"?set=set2&size=180x180")}),r.a.createElement("h2",null,e.avenger.name),r.a.createElement("p",null,e.avenger.email))}),d=(t(15),function(e){return r.a.createElement("div",{className:"card-list"},e.avengers.map((function(e){return r.a.createElement(m,{key:e.id,avenger:e})})))}),v=(t(16),function(e){var n=e.placeholder,t=e.handleChange;return r.a.createElement("input",{type:"search",placeholder:n,onChange:t})}),f=(t(17),function(e){function n(){var e;return Object(i.a)(this,n),(e=Object(l.a)(this,Object(u.a)(n).call(this))).state={avengers:[],serachField:""},e}return Object(h.a)(n,e),Object(s.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(n){return e.setState({avengers:n})}))}},{key:"render",value:function(){var e=this,n=this.state,t=n.avengers,a=n.searchField,c=t.filter((function(e){return e.name.includes(a)}));return r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,"Monster in the House!!!"),r.a.createElement(v,{placeholder:"Search Monster",handleChange:function(n){return e.setState({searchField:n.target.value})}}),r.a.createElement(d,{avengers:c}))}}]),n}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[8,1,2]]]);
//# sourceMappingURL=main.221bd6a2.chunk.js.map