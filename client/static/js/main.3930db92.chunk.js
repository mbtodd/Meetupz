(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{32:function(e,t,a){e.exports=a(65)},37:function(e,t,a){},65:function(e,t,a){"use strict";a.r(t);var i=a(0),n=a.n(i),s=a(28),u=a.n(s),r=a(1),l=(a(37),a(13)),o=a(4),c=a(5),m=a(8),d=a(6),p=a(7),h=a(12),b=a.n(h),f=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).state={item:e.item},a}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return n.a.createElement("li",{className:"collection-item"},n.a.createElement(r.b,{to:"/meetups/".concat(this.state.item.id)},this.state.item.name))}}]),t}(i.Component),v=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(m.a)(this,Object(d.a)(t).call(this))).state={meetups:[]},e}return Object(p.a)(t,e),Object(c.a)(t,[{key:"componentWillMount",value:function(){this.getMeetups()}},{key:"getMeetups",value:function(){var e=this;b.a.get("http://localhost:3000/api/meetups").then(function(t){e.setState({meetups:t.data},function(){})}).catch(function(e){return console.log(e)})}},{key:"render",value:function(){var e=this.state.meetups.map(function(e,t){return n.a.createElement(f,{key:e.id,item:e})});return n.a.createElement("div",null,n.a.createElement("h1",null,"Meetups"),n.a.createElement("ul",{className:"collection"},e))}}]),t}(i.Component),E=function(){return n.a.createElement("div",null,n.a.createElement("h1",null,"About"),n.a.createElement("p",null,' This is my most complete react app.I will now add lorem ipsum.Lorem ipsum dolor sit amet consectetur, adipisicing elit.Corporis culpa adipisci provident eaque fugiat quod, labore quaerat dolores rem optio nisi asperiores impedit esse reiciendis, nulla dignissimos!Dolorum, inventore maxime. Aspernatur amet ullam adipisci.Ut maiores blanditiis, tenetur corrupti facilis sint excepturi adipisci laboriosam sequi veniam voluptatibus, reiciendis, architecto quo sapiente.Eos exercitationem facere excepturi obcaecati dolor sapiente!Harum, dignissimos ? Voluptatem sequi accusantium temporibus quidem ? Facilis tempore dicta, dolor autem aut sunt exercitationem eum possimus quasi repellat rerum, asperiores odio sequi adipisci cum cupiditate omnis accusantium, dolorem nostrum ad officia! Optio atque voluptate ea ? Quisquam sed repudiandae repellendus temporibus amet eligendi odit.Nesciunt iste asperiores suscipit, explicabo repudiandae praesentium saepe rerum, sunt labore odio perferendis esse.Maxime similique voluptatem quo. Eligendi eos, nobis corrupti laboriosam quasi deserunt modi, nesciunt ducimus soluta nostrum nam unde magni aspernatur impedit fugit cumque accusantium, laborum inventore ea officia!Sed doloribus minus eum hic autem." '),n.a.createElement("p",null,' This is my most complete react app.I will now add lorem ipsum.Lorem ipsum dolor sit amet consectetur, adipisicing elit.Corporis culpa adipisci provident eaque fugiat quod, labore quaerat dolores rem optio nisi asperiores impedit esse reiciendis, nulla dignissimos!Dolorum, inventore maxime. Aspernatur amet ullam adipisci.Ut maiores blanditiis, tenetur corrupti facilis sint excepturi adipisci laboriosam sequi veniam voluptatibus, reiciendis, architecto quo sapiente.Eos exercitationem facere excepturi obcaecati dolor sapiente!Harum, dignissimos ? Voluptatem sequi accusantium temporibus quidem ? Facilis tempore dicta, dolor autem aut sunt exercitationem eum possimus quasi repellat rerum, asperiores odio sequi adipisci cum cupiditate omnis accusantium, dolorem nostrum ad officia! Optio atque voluptate ea ? Quisquam sed repudiandae repellendus temporibus amet eligendi odit.Nesciunt iste asperiores suscipit, explicabo repudiandae praesentium saepe rerum, sunt labore odio perferendis esse.Maxime similique voluptatem quo. Eligendi eos, nobis corrupti laboriosam quasi deserunt modi, nesciunt ducimus soluta nostrum nam unde magni aspernatur impedit fugit cumque accusantium, laborum inventore ea officia!Sed doloribus minus eum hic autem." '),n.a.createElement("p",null,' This is my most complete react app.I will now add lorem ipsum.Lorem ipsum dolor sit amet consectetur, adipisicing elit.Corporis culpa adipisci provident eaque fugiat quod, labore quaerat dolores rem optio nisi asperiores impedit esse reiciendis, nulla dignissimos!Dolorum, inventore maxime. Aspernatur amet ullam adipisci.Ut maiores blanditiis, tenetur corrupti facilis sint excepturi adipisci laboriosam sequi veniam voluptatibus, reiciendis, architecto quo sapiente.Eos exercitationem facere excepturi obcaecati dolor sapiente!Harum, dignissimos ? Voluptatem sequi accusantium temporibus quidem ? Facilis tempore dicta, dolor autem aut sunt exercitationem eum possimus quasi repellat rerum, asperiores odio sequi adipisci cum cupiditate omnis accusantium, dolorem nostrum ad officia! Optio atque voluptate ea ? Quisquam sed repudiandae repellendus temporibus amet eligendi odit.Nesciunt iste asperiores suscipit, explicabo repudiandae praesentium saepe rerum, sunt labore odio perferendis esse.Maxime similique voluptatem quo. Eligendi eos, nobis corrupti laboriosam quasi deserunt modi, nesciunt ducimus soluta nostrum nam unde magni aspernatur impedit fugit cumque accusantium, laborum inventore ea officia!Sed doloribus minus eum hic autem." '))},g=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).state={details:""},a}return Object(p.a)(t,e),Object(c.a)(t,[{key:"componentWillMount",value:function(){this.getMeetups()}},{key:"getMeetups",value:function(){var e=this,t=this.props.match.params.id;b.a.get("http://localhost:3000/api/meetups/".concat(t)).then(function(t){e.setState({details:t.data},function(){console.log(e.state)})}).catch(function(e){return console.log(e)})}},{key:"onDelete",value:function(){var e=this,t=this.state.details.id;b.a.delete("http://localhost:3000/api/meetups/".concat(t)).then(function(t){e.props.history.push("/")}).catch(function(e){return console.log(e)})}},{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement("br",null),n.a.createElement(r.b,{className:"btn grey",to:"/"},"Back"),n.a.createElement("h1",null,this.state.details.name),n.a.createElement("ul",{className:"collection"},n.a.createElement("li",{className:"collection-item"},"City: ",this.state.details.city),n.a.createElement("li",{className:"collection-item"},"Address: ",this.state.details.address)),n.a.createElement(r.b,{className:"btn",to:"/meetups/edit/".concat(this.state.details.id)}," Edit"),n.a.createElement("button",{onClick:this.onDelete.bind(this),className:"btn red right"},"Delete"))}}]),t}(i.Component),y=function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"addMeetup",value:function(e){var t=this;b.a.request({method:"post",url:"http://localhost:3000/api/meetups",data:e}).then(function(e){t.props.history.push("/")}).catch(function(e){return console.log(e)})}},{key:"onSubmit",value:function(e){var t={name:this.refs.name.value,city:this.refs.city.value,address:this.refs.address.value};this.addMeetup(t),e.preventDefault()}},{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement("br",null),n.a.createElement(r.b,{className:"btn grey",to:"/"},"Back"),n.a.createElement("h1",null,"Add meetup"),n.a.createElement("form",{onSubmit:this.onSubmit.bind(this)},n.a.createElement("div",{className:"input-field"},n.a.createElement("input",{type:"text",name:"name",ref:"name"}),n.a.createElement("label",{htmlFor:"name"},"Name")),n.a.createElement("div",{className:"input-field"},n.a.createElement("input",{type:"text",name:"city",ref:"city"}),n.a.createElement("label",{htmlFor:"city"},"City")),n.a.createElement("div",{className:"input-field"},n.a.createElement("input",{type:"text",name:"address",ref:"address"}),n.a.createElement("label",{htmlFor:"address"},"Address")),n.a.createElement("input",{type:"submit",value:"Save",className:"btn"})))}}]),t}(i.Component),q=a(31),N=a(15),O=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).state={id:"",name:"",city:"",address:""},a.handleInputChange=a.handleInputChange.bind(Object(N.a)(a)),a}return Object(p.a)(t,e),Object(c.a)(t,[{key:"componentWillMount",value:function(){this.getMeetupDetails()}},{key:"getMeetupDetails",value:function(){var e=this,t=this.props.match.params.id;b.a.get("http://localhost:3000/api/meetups/".concat(t)).then(function(t){e.setState({id:t.data.id,name:t.data.name,city:t.data.city,address:t.data.address},function(){console.log(e.state)})}).catch(function(e){return console.log(e)})}},{key:"editMeetup",value:function(e){var t=this;b.a.request({method:"put",url:"http://localhost:3000/api/meetups/".concat(this.state.id),data:e}).then(function(e){t.props.history.push("/")}).catch(function(e){return console.log(e)})}},{key:"onSubmit",value:function(e){var t={name:this.refs.name.value,city:this.refs.city.value,address:this.refs.address.value};this.editMeetup(t),e.preventDefault()}},{key:"handleInputChange",value:function(e){var t=e.target,a=t.value,i=t.name;this.setState(Object(q.a)({},i,a))}},{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement("br",null),n.a.createElement(r.b,{className:"btn grey",to:"/"},"Back"),n.a.createElement("h1",null,"Add meetup"),n.a.createElement("form",{onSubmit:this.onSubmit.bind(this)},n.a.createElement("div",{className:"input-field"},n.a.createElement("input",{type:"text",name:"name",ref:"name",value:this.state.name,onChange:this.handleInputChange}),n.a.createElement("label",{htmlFor:"name"},"Name")),n.a.createElement("div",{className:"input-field"},n.a.createElement("input",{type:"text",name:"city",ref:"city",value:this.state.city,onChange:this.handleInputChange}),n.a.createElement("label",{htmlFor:"city"},"City")),n.a.createElement("div",{className:"input-field"},n.a.createElement("input",{type:"text",name:"address",ref:"address",value:this.state.address,onChange:this.handleInputChange}),n.a.createElement("label",{htmlFor:"address"},"Address")),n.a.createElement("input",{type:"submit",value:"Save",className:"btn"})))}}]),t}(i.Component),x=function(){return n.a.createElement("main",null,n.a.createElement(l.c,null,n.a.createElement(l.a,{exact:!0,path:"/",component:v}),n.a.createElement(l.a,{exact:!0,path:"/about",component:E}),n.a.createElement(l.a,{exact:!0,path:"/meetups/add",component:y}),n.a.createElement(l.a,{exact:!0,path:"/meetups/:edit/:id",component:O}),n.a.createElement(l.a,{exact:!0,path:"/meetups/:id",component:g})))},j=function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement("nav",{className:"blue darken-3"},n.a.createElement("div",{className:"nav-wrapper"},n.a.createElement("a",{href:"/",className:"brand-logo center"},"Meetupz"),n.a.createElement("a",{href:"/#","data-activates":"main-menu",className:"button-collapse show-on-large"},n.a.createElement("i",{className:"fa fa-bars"})),n.a.createElement("ul",{className:"right hide-on-small-only"},n.a.createElement("li",null,n.a.createElement(r.b,{to:"/"},n.a.createElement("i",{className:"fa fa-users"})," Meetups"))),n.a.createElement("ul",{className:"side-nav",id:"main-menu"},n.a.createElement("li",null,n.a.createElement(r.b,{to:"/"},n.a.createElement("i",{className:"fa fa-users"})," Meetups")),n.a.createElement("li",null,n.a.createElement(r.b,{to:"/meetups/add"},n.a.createElement("i",{className:"fa fa-plus"})," Add Meetup"),n.a.createElement(r.b,{to:"/about"},n.a.createElement("i",{className:"fa fa-question-circle"})," About"))))))}}]),t}(i.Component),k=function(){return n.a.createElement("div",null,n.a.createElement(j,null),n.a.createElement("div",{className:"container"},n.a.createElement(x,null)),n.a.createElement("div",{className:"fixed-action-btn"},n.a.createElement(r.b,{to:"/meetups/add",className:"btn-floating btn-large red"},n.a.createElement("i",{className:"fa fa-plus"}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));u.a.render(n.a.createElement(r.a,null,n.a.createElement(k,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[32,1,2]]]);
//# sourceMappingURL=main.3930db92.chunk.js.map