(this["webpackJsonpreact-basic"]=this["webpackJsonpreact-basic"]||[]).push([[0],{13:function(t,n,e){},14:function(t,n,e){"use strict";e.r(n);var a=e(0),r=e(3),c=e.n(r),i=e(4),o=e(5),s=e(7),u=e(6),h=e(1),p=function(t){Object(s.a)(e,t);var n=Object(u.a)(e);function e(){var t;Object(i.a)(this,e);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=n.call.apply(n,[this].concat(r))).state={data:[]},t}return Object(o.a)(e,[{key:"componentDidMount",value:function(){var t=this;fetch("https://en.wikipedia.org/w/api.php?action=opensearch&search=Seona+Dancing&format=json&origin=*").then((function(t){return t.json()})).then((function(n){return t.setState({data:n})}))}},{key:"render",value:function(){var t=this.state.data.map((function(t,n){return Object(h.jsx)("li",{children:t},n)}));return Object(h.jsx)("ul",{children:t})}}]),e}(a.Component);e(13);c.a.render(Object(h.jsx)(p,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.e0a81e5f.chunk.js.map