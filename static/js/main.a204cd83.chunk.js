(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{11:function(e,t,a){e.exports={div_button:"Button_div_button__Xrbaf",button:"Button_button__3QF_k"}},12:function(e,t,a){e.exports={overlay:"Modal_overlay__2GjdW",modal:"Modal_modal__P3_V5"}},22:function(e,t,a){e.exports={container:"Container_container__3RIox"}},23:function(e,t,a){e.exports={div_loader:"Loader_div_loader__2XBYZ"}},70:function(e,t,a){},71:function(e,t,a){"use strict";a.r(t);var n=a(1),o=a.n(n),r=a(8),c=a.n(r),s=(a(29),a(13)),l=a(4),i=a(5),u=a(7),h=a(6),d=a(10),g=a.n(d),m=a(22),b=a.n(m),j=a(0),p=function(e){var t=e.children;return Object(j.jsx)("div",{className:b.a.container,children:t})},f=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={query:""},e.handleChange=function(t){e.setState({query:t.currentTarget.value})},e.handleSubmit=function(t){t.preventDefault(),e.props.onSubmit(e.state.query),e.setState({query:""})},e}return Object(i.a)(a,[{key:"render",value:function(){return Object(j.jsx)("header",{className:"Searchbar",children:Object(j.jsxs)("form",{className:"SearchForm",onSubmit:this.handleSubmit,children:[Object(j.jsx)("button",{type:"submit",className:"SearchForm-button",children:Object(j.jsx)("span",{className:"SearchForm-button-label",children:"Search"})}),Object(j.jsx)("input",{className:"SearchForm-input",type:"text",value:this.state.query,onChange:this.handleChange,autocomplete:"off",autofocus:!0,placeholder:"Search images and photos"})]})})}}]),a}(n.Component),v=function(e){var t=e.id,a=e.user,n=e.largeImageURL,o=e.webformatURL,r=e.onClick;console.log("onlickImage ~ onClick: ",r);return Object(j.jsx)("li",{className:"ImageGalleryItem",children:Object(j.jsx)("img",{src:o,alt:a,className:"ImageGalleryItem-image",onClick:function(e){console.log("onlickImage ~ e: ",n),r({largeImageURL:n})}})},t)},y=function(e){var t=e.images,a=e.showLargeImage;return Object(j.jsx)("ul",{className:"ImageGallery",children:t.map((function(e){var t=e.id,n=e.user,o=e.largeImageURL,r=e.webformatURL;return Object(j.jsx)(v,{id:t,user:n,largeImageURL:o,webformatURL:r,onClick:a})}))})},O=(a(51),a(23)),w=a.n(O),x=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return Object(j.jsx)("div",{className:w.a.div_loader,children:Object(j.jsx)(g.a,{type:"Oval",color:"#00BFFF",height:60,width:60})})}}]),a}(n.Component),I=a(11),_=a.n(I),L=function(e){var t=e.onLoadMore;return Object(j.jsx)("div",{className:_.a.div_button,children:Object(j.jsx)("button",{className:_.a.button,onClick:t,children:"Load more"})})},k=a(12),S=a.n(k),C=document.querySelector("#modal-root"),M=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).handleKeyDown=function(t){"Escape"===t.code&&(console.log("Enter ESC, Modal close"),e.props.onClose())},e.handleBackdropClick=function(t){console.log("currentTarget: ",t.currentTarget),console.log("target: ",t.target),t.currentTarget===t.target&&e.props.onClose()},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){console.log("Modal componentDidMount"),window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){console.log("Modal componentWillUnmount"),window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){return Object(r.createPortal)(Object(j.jsx)("div",{className:S.a.overlay,onClick:this.handleBackdropClick,children:Object(j.jsx)("div",{className:S.a.modal,children:Object(j.jsx)("img",{src:this.props.largeImageURL,alt:""})})}),C)}}]),a}(n.Component),P=a(24),R={API_KEY:"21791373-989f8b5e7418bf068b731f5c9",PER_PAGE:12},U=a.n(P).a.create();U.defaults.baseURL="https://pixabay.com/api/";var E=function(e){var t=e.searchQuery,a=void 0===t?"":t,n=e.currentPage,o=void 0===n?1:n,r="?q=".concat(a,"&page=").concat(o,"&key=").concat(R.API_KEY,"&image_type=photo&orientation=horizontal&per_page=").concat(R.PER_PAGE);return U.get("".concat(r),{timeout:1e4}).then((function(e){return e.data}))},N=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={images:[],searchQuery:"",currentPage:1,largeImageURL:"",isLoading:!1,totalImages:0,showModal:!1,error:null},e.fetchImages=function(){var t=e.state,a=t.currentPage,n={searchQuery:t.searchQuery,currentPage:a};e.setState({isLoading:!0}),E(n).then((function(t){console.log("APP pixabayApi ~ data: ",t);var a=t.hits,n=t.total;e.setState((function(e){return{images:[].concat(Object(s.a)(e.images),Object(s.a)(a)),totalImages:n,currentPage:e.currentPage+1}}))})).catch((function(t){return e.setState({error:t})})).finally((function(){return e.setState({isLoading:!1})}))},e.onChangeQuery=function(t){console.log("App ~ query: ",t),e.setState({searchQuery:t,currentPage:1,images:[],error:null})},e.onLoadMore=function(){e.fetchImages()},e.toggleModal=function(){e.setState((function(e){return{showModal:!e.showModal}}))},e.showLargeImage=function(t){var a=t.largeImageURL;console.log("App ~ url",a),e.setState({largeImageURL:a,showModal:!e.state.showModal})},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){console.log("App componentDidMount");var e=this.state;e.searchQuery,e.currentPage;this.fetchImages(),window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})}},{key:"componentDidUpdate",value:function(e,t){t.searchQuery!==this.state.searchQuery&&this.fetchImages(),window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})}},{key:"render",value:function(){var e=this.state,t=e.images,a=e.isLoading,n=e.totalImages,o=e.showModal,r=e.largeImageURL,c=n-t.length,s=t.length>0&&c>0&&!a;return Object(j.jsxs)(p,{children:[Object(j.jsx)(f,{onSubmit:this.onChangeQuery}),t.length>0&&Object(j.jsx)(y,{showLargeImage:this.showLargeImage,images:t}),a&&Object(j.jsx)(x,{}),s&&Object(j.jsx)(L,{onLoadMore:this.onLoadMore}),o&&Object(j.jsx)(M,{largeImageURL:r,onClose:this.toggleModal})]})}}]),a}(n.Component);a(70);c.a.render(Object(j.jsx)(o.a.StrictMode,{children:Object(j.jsx)(N,{})}),document.getElementById("root"))}},[[71,1,2]]]);
//# sourceMappingURL=main.a204cd83.chunk.js.map