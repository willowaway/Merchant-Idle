import{L as K,m as N,r as H,o as I,c as k,h as C,g as Y,b as g,F as J,d as T,t as V,n as U,j as x}from"./index-CzjaVJUo.js";import{r as X}from"./vue.runtime.esm-bundler-CTLuFuLU.js";var G={exports:{}};(function(W){W.exports=function(v){var f={};function s(o){if(f[o])return f[o].exports;var d=f[o]={i:o,l:!1,exports:{}};return v[o].call(d.exports,d,d.exports,s),d.l=!0,d.exports}return s.m=v,s.c=f,s.d=function(o,d,_){s.o(o,d)||Object.defineProperty(o,d,{enumerable:!0,get:_})},s.r=function(o){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(o,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(o,"__esModule",{value:!0})},s.t=function(o,d){if(d&1&&(o=s(o)),d&8||d&4&&typeof o=="object"&&o&&o.__esModule)return o;var _=Object.create(null);if(s.r(_),Object.defineProperty(_,"default",{enumerable:!0,value:o}),d&2&&typeof o!="string")for(var e in o)s.d(_,e,(function(p){return o[p]}).bind(null,e));return _},s.n=function(o){var d=o&&o.__esModule?function(){return o.default}:function(){return o};return s.d(d,"a",d),d},s.o=function(o,d){return Object.prototype.hasOwnProperty.call(o,d)},s.p="",s(s.s="fb15")}({"0a04":function(v,f,s){var o=s("4bad");f=o(!1),f.push([v.i,".vue-star-rating-star[data-v-f675a548]{display:inline-block;-webkit-tap-highlight-color:rgba(0,0,0,0);-webkit-tap-highlight-color:transparent}.vue-star-rating-pointer[data-v-f675a548]{cursor:pointer}.vue-star-rating[data-v-f675a548]{display:flex;align-items:center}.vue-star-rating-inline[data-v-f675a548]{display:inline-flex}.vue-star-rating-rating-text[data-v-f675a548]{margin-left:7px}.vue-star-rating-rtl[data-v-f675a548]{direction:rtl}.vue-star-rating-rtl .vue-star-rating-rating-text[data-v-f675a548]{margin-right:10px;direction:rtl}.sr-only[data-v-f675a548]{position:absolute;left:-10000px;top:auto;width:1px;height:1px;overflow:hidden}",""]),v.exports=f},"0fde":function(v,f,s){var o=s("4bad");f=o(!1),f.push([v.i,".vue-star-rating-star[data-v-11edf2d6]{overflow:visible!important}.vue-star-rating-star-rotate[data-v-11edf2d6]{transition:all .25s}.vue-star-rating-star-rotate[data-v-11edf2d6]:hover{transition:transform .25s;transform:rotate(-15deg) scale(1.3)}",""]),v.exports=f},"499e":function(v,f,s){s.r(f),s.d(f,"default",function(){return B});function o(i,a){for(var r=[],h={},l=0;l<a.length;l++){var n=a[l],m=n[0],A=n[1],P=n[2],F=n[3],j={id:i+":"+l,css:A,media:P,sourceMap:F};h[m]?h[m].parts.push(j):r.push(h[m]={id:m,parts:[j]})}return r}var d=typeof document<"u";if(typeof DEBUG<"u"&&DEBUG&&!d)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var _={},e=d&&(document.head||document.getElementsByTagName("head")[0]),p=null,b=0,t=!1,S=function(){},y=null,u="data-vue-ssr-id",z=typeof navigator<"u"&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function B(i,a,r,h){t=r,y=h||{};var l=o(i,a);return M(l),function(m){for(var A=[],P=0;P<l.length;P++){var F=l[P],j=_[F.id];j.refs--,A.push(j)}m?(l=o(i,m),M(l)):l=[];for(var P=0;P<A.length;P++){var j=A[P];if(j.refs===0){for(var L=0;L<j.parts.length;L++)j.parts[L]();delete _[j.id]}}}}function M(i){for(var a=0;a<i.length;a++){var r=i[a],h=_[r.id];if(h){h.refs++;for(var l=0;l<h.parts.length;l++)h.parts[l](r.parts[l]);for(;l<r.parts.length;l++)h.parts.push(R(r.parts[l]));h.parts.length>r.parts.length&&(h.parts.length=r.parts.length)}else{for(var n=[],l=0;l<r.parts.length;l++)n.push(R(r.parts[l]));_[r.id]={id:r.id,refs:1,parts:n}}}}function D(){var i=document.createElement("style");return i.type="text/css",e.appendChild(i),i}function R(i){var a,r,h=document.querySelector("style["+u+'~="'+i.id+'"]');if(h){if(t)return S;h.parentNode.removeChild(h)}if(z){var l=b++;h=p||(p=D()),a=E.bind(null,h,l,!1),r=E.bind(null,h,l,!0)}else h=D(),a=c.bind(null,h),r=function(){h.parentNode.removeChild(h)};return a(i),function(m){if(m){if(m.css===i.css&&m.media===i.media&&m.sourceMap===i.sourceMap)return;a(i=m)}else r()}}var O=function(){var i=[];return function(a,r){return i[a]=r,i.filter(Boolean).join(`
`)}}();function E(i,a,r,h){var l=r?"":h.css;if(i.styleSheet)i.styleSheet.cssText=O(a,l);else{var n=document.createTextNode(l),m=i.childNodes;m[a]&&i.removeChild(m[a]),m.length?i.insertBefore(n,m[a]):i.appendChild(n)}}function c(i,a){var r=a.css,h=a.media,l=a.sourceMap;if(h&&i.setAttribute("media",h),y.ssrId&&i.setAttribute(u,a.id),l&&(r+=`
/*# sourceURL=`+l.sources[0]+" */",r+=`
/*# sourceMappingURL=data:application/json;base64,`+btoa(unescape(encodeURIComponent(JSON.stringify(l))))+" */"),i.styleSheet)i.styleSheet.cssText=r;else{for(;i.firstChild;)i.removeChild(i.firstChild);i.appendChild(document.createTextNode(r))}}},"4bad":function(v,f,s){v.exports=function(_){var e=[];return e.toString=function(){return this.map(function(b){var t=o(b,_);return b[2]?"@media ".concat(b[2]," {").concat(t,"}"):t}).join("")},e.i=function(p,b,t){typeof p=="string"&&(p=[[null,p,""]]);var S={};if(t)for(var y=0;y<this.length;y++){var u=this[y][0];u!=null&&(S[u]=!0)}for(var z=0;z<p.length;z++){var B=[].concat(p[z]);t&&S[B[0]]||(b&&(B[2]?B[2]="".concat(b," and ").concat(B[2]):B[2]=b),e.push(B))}},e};function o(_,e){var p=_[1]||"",b=_[3];if(!b)return p;if(e&&typeof btoa=="function"){var t=d(b),S=b.sources.map(function(y){return"/*# sourceURL=".concat(b.sourceRoot||"").concat(y," */")});return[p].concat(S).concat([t]).join(`
`)}return[p].join(`
`)}function d(_){var e=btoa(unescape(encodeURIComponent(JSON.stringify(_)))),p="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(e);return"/*# ".concat(p," */")}},"5bef":function(v,f,s){var o=s("0fde");typeof o=="string"&&(o=[[v.i,o,""]]),o.locals&&(v.exports=o.locals);var d=s("499e").default;d("f426be92",o,!0,{sourceMap:!1,shadowMode:!1})},8875:function(v,f,s){var o,d,_;(function(e,p){d=[],o=p,_=typeof o=="function"?o.apply(f,d):o,_!==void 0&&(v.exports=_)})(typeof self<"u"?self:this,function(){function e(){var p=Object.getOwnPropertyDescriptor(document,"currentScript");if(!p&&"currentScript"in document&&document.currentScript||p&&p.get!==e&&document.currentScript)return document.currentScript;try{throw new Error}catch(E){var b=/.*at [^(]*\((.*):(.+):(.+)\)$/ig,t=/@([^@]*):(\d+):(\d+)\s*$/ig,S=b.exec(E.stack)||t.exec(E.stack),y=S&&S[1]||!1,u=S&&S[2]||!1,z=document.location.href.replace(document.location.hash,""),B,M,D,R=document.getElementsByTagName("script");y===z&&(B=document.documentElement.outerHTML,M=new RegExp("(?:[^\\n]+?\\n){0,"+(u-2)+"}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*","i"),D=B.replace(M,"$1").trim());for(var O=0;O<R.length;O++)if(R[O].readyState==="interactive"||R[O].src===y||y===z&&R[O].innerHTML&&R[O].innerHTML.trim()===D)return R[O];return null}}return e})},"8bbf":function(v,f){v.exports=X},"9ff5":function(v,f,s){s("eed3")},d1b1:function(v,f,s){s("5bef")},d4aa:function(v,f){class s{constructor(d){this.color=d}parseAlphaColor(){return/^rgba\((\d{1,3}%?\s*,\s*){3}(\d*(?:\.\d+)?)\)$/.test(this.color)?this.parseRgba():/^hsla\(\d+\s*,\s*([\d.]+%\s*,\s*){2}(\d*(?:\.\d+)?)\)$/.test(this.color)?this.parseHsla():/^#([0-9A-Fa-f]{4}|[0-9A-Fa-f]{8})$/.test(this.color)?this.parseAlphaHex():/^transparent$/.test(this.color)?this.parseTransparent():{color:this.color,opacity:"1"}}parseRgba(){return{color:this.color.replace(/,(?!.*,).*(?=\))|a/g,""),opacity:this.color.match(/\.\d+|[01](?=\))/)[0]}}parseHsla(){return{color:this.color.replace(/,(?!.*,).*(?=\))|a/g,""),opacity:this.color.match(/\.\d+|[01](?=\))/)[0]}}parseAlphaHex(){return{color:this.color.length===5?this.color.substring(0,4):this.color.substring(0,7),opacity:this.color.length===5?(parseInt(this.color.substring(4,5)+this.color.substring(4,5),16)/255).toFixed(2):(parseInt(this.color.substring(7,9),16)/255).toFixed(2)}}parseTransparent(){return{color:"#fff",opacity:0}}}v.exports=s},eed3:function(v,f,s){var o=s("0a04");typeof o=="string"&&(o=[[v.i,o,""]]),o.locals&&(v.exports=o.locals);var d=s("499e").default;d("87bea518",o,!0,{sourceMap:!1,shadowMode:!1})},fb15:function(v,f,s){if(s.r(f),typeof window<"u"){var o=window.document.currentScript;{var d=s("8875");o=d(),"currentScript"in document||Object.defineProperty(document,"currentScript",{get:d})}var _=o&&o.src.match(/(.+\/)[^/]+\.js(\?.*)?$/);_&&(s.p=_[1])}var e=s("8bbf");const p=Object(e.withScopeId)("data-v-f675a548");Object(e.pushScopeId)("data-v-f675a548");const b={class:"sr-only"};Object(e.popScopeId)();const t=p(function(i,a,r,h,l,n){const m=Object(e.resolveComponent)("star");return Object(e.openBlock)(),Object(e.createBlock)("div",{class:["vue-star-rating",{"vue-star-rating-rtl":r.rtl},{"vue-star-rating-inline":r.inline}]},[Object(e.createVNode)("div",b,[Object(e.renderSlot)(i.$slots,"screen-reader",{rating:l.selectedRating,stars:r.maxRating},()=>[Object(e.createVNode)("span",null,"Rated "+Object(e.toDisplayString)(l.selectedRating)+" stars out of "+Object(e.toDisplayString)(r.maxRating),1)])]),Object(e.createVNode)("div",{class:"vue-star-rating",onMouseleave:a[2]||(a[2]=(...A)=>n.resetRating(...A))},[(Object(e.openBlock)(!0),Object(e.createBlock)(e.Fragment,null,Object(e.renderList)(r.maxRating,A=>(Object(e.openBlock)(),Object(e.createBlock)("span",{key:A,class:[{"vue-star-rating-pointer":!r.readOnly},"vue-star-rating-star"],style:{"margin-right":n.margin+"px"}},[Object(e.createVNode)(m,{fill:l.fillLevel[A-1],size:r.starSize,points:r.starPoints,"star-id":A,step:l.step,"active-color":n.currentActiveColor,"inactive-color":r.inactiveColor,"border-color":r.borderColor,"active-border-color":n.currentActiveBorderColor,"border-width":r.borderWidth,"rounded-corners":r.roundedCorners,rtl:r.rtl,glow:r.glow,"glow-color":r.glowColor,animate:r.animate,"onStar-selected":a[1]||(a[1]=P=>n.setRating(P,!0)),"onStar-mouse-move":n.setRating},null,8,["fill","size","points","star-id","step","active-color","inactive-color","border-color","active-border-color","border-width","rounded-corners","rtl","glow","glow-color","animate","onStar-mouse-move"])],6))),128)),r.showRating?(Object(e.openBlock)(),Object(e.createBlock)("span",{key:0,class:["vue-star-rating-rating-text",r.textClass]},Object(e.toDisplayString)(n.formattedRating),3)):Object(e.createCommentVNode)("",!0)],32)],2)}),S=Object(e.withScopeId)("data-v-11edf2d6");Object(e.pushScopeId)("data-v-11edf2d6");const y=Object(e.createVNode)("feMerge",null,[Object(e.createVNode)("feMergeNode",{in:"coloredBlur"}),Object(e.createVNode)("feMergeNode",{in:"SourceGraphic"})],-1);Object(e.popScopeId)();const u=S(function(i,a,r,h,l,n){return Object(e.openBlock)(),Object(e.createBlock)("svg",{class:["vue-star-rating-star",{"vue-star-rating-star-rotate":n.shouldAnimate}],height:n.starSize,width:n.starSize,viewBox:n.viewBox,onMousemove:a[1]||(a[1]=(...m)=>n.mouseMoving(...m)),onClick:a[2]||(a[2]=(...m)=>n.selected(...m)),onTouchstart:a[3]||(a[3]=(...m)=>n.touchStart(...m)),onTouchend:a[4]||(a[4]=(...m)=>n.touchEnd(...m))},[Object(e.createVNode)("linearGradient",{id:l.grad,x1:"0",x2:"100%",y1:"0",y2:"0"},[Object(e.createVNode)("stop",{offset:n.starFill,"stop-color":r.rtl?n.getColor(r.inactiveColor):n.getColor(r.activeColor),"stop-opacity":r.rtl?n.getOpacity(r.inactiveColor):n.getOpacity(r.activeColor)},null,8,["offset","stop-color","stop-opacity"]),Object(e.createVNode)("stop",{offset:n.starFill,"stop-color":r.rtl?n.getColor(r.activeColor):n.getColor(r.inactiveColor),"stop-opacity":r.rtl?n.getOpacity(r.activeColor):n.getOpacity(r.inactiveColor)},null,8,["offset","stop-color","stop-opacity"])],8,["id"]),Object(e.createVNode)("filter",{id:l.glowId,height:"130%",width:"130%",filterUnits:"userSpaceOnUse"},[Object(e.createVNode)("feGaussianBlur",{stdDeviation:r.glow,result:"coloredBlur"},null,8,["stdDeviation"]),y],8,["id"]),Object(e.withDirectives)(Object(e.createVNode)("polygon",{points:n.starPointsToString,fill:n.gradId,stroke:r.glowColor,filter:"url(#"+l.glowId+")","stroke-width":n.border},null,8,["points","fill","stroke","filter","stroke-width"]),[[e.vShow,r.glowColor&&r.glow>0&&r.fill>0]]),Object(e.createVNode)("polygon",{points:n.starPointsToString,fill:n.gradId,stroke:n.getBorderColor,"stroke-width":n.border,"stroke-linejoin":n.strokeLinejoin},null,8,["points","fill","stroke","stroke-width","stroke-linejoin"]),Object(e.createVNode)("polygon",{points:n.starPointsToString,fill:n.gradId},null,8,["points","fill"])],42,["height","width","viewBox"])});var z=s("d4aa"),B=s.n(z),M={name:"Star",props:{fill:{type:Number,default:0},points:{type:Array,default(){return[]}},size:{type:Number,default:50},starId:{type:Number,required:!0},activeColor:{type:String,required:!0},inactiveColor:{type:String,required:!0},borderColor:{type:String,default:"#000"},activeBorderColor:{type:String,default:"#000"},borderWidth:{type:Number,default:0},roundedCorners:{type:Boolean,default:!1},rtl:{type:Boolean,default:!1},glow:{type:Number,default:0},glowColor:{type:String,default:null,required:!1},animate:{type:Boolean,default:!1}},emits:["star-mouse-move","star-selected"],data(){return{starPoints:[19.8,2.2,6.6,43.56,39.6,17.16,0,17.16,33,43.56],grad:"",glowId:"",isStarActive:!0}},computed:{starPointsToString(){return this.starPoints.join(",")},gradId(){return"url(#"+this.grad+")"},starSize(){const c=this.roundedCorners&&this.borderWidth<=0?parseInt(this.size)-parseInt(this.border):this.size;return parseInt(c)+parseInt(this.border)},starFill(){return this.rtl?100-this.fill+"%":this.fill+"%"},border(){return this.roundedCorners&&this.borderWidth<=0?6:this.borderWidth},getBorderColor(){return this.roundedCorners&&this.borderWidth<=0?this.fill<=0?this.inactiveColor:this.activeColor:this.fill<=0?this.borderColor:this.activeBorderColor},maxSize(){return this.starPoints.reduce(function(c,i){return Math.max(c,i)})},viewBox(){return"0 0 "+this.maxSize+" "+this.maxSize},shouldAnimate(){return this.animate&&this.isStarActive},strokeLinejoin(){return this.roundedCorners?"round":"miter"}},created(){this.starPoints=this.points.length?this.points:this.starPoints,this.calculatePoints(),this.grad=this.getRandomId(),this.glowId=this.getRandomId()},methods:{mouseMoving(c){c.touchAction!=="undefined"&&this.$emit("star-mouse-move",{event:c,position:this.getPosition(c),id:this.starId})},touchStart(){this.$nextTick(()=>{this.isStarActive=!0})},touchEnd(){this.$nextTick(()=>{this.isStarActive=!1})},getPosition(c){var i=.92*this.size;const a=this.rtl?Math.min(c.offsetX,45):Math.max(c.offsetX,1);var r=Math.round(100/i*a);return Math.min(r,100)},selected(c){this.$emit("star-selected",{id:this.starId,position:this.getPosition(c)})},getRandomId(){return Math.random().toString(36).substring(7)},calculatePoints(){this.starPoints=this.starPoints.map((c,i)=>{const a=i%2===0?this.border*1.5:0;return this.size/this.maxSize*c+a})},getColor(c){return new B.a(c).parseAlphaColor().color},getOpacity(c){return new B.a(c).parseAlphaColor().opacity}}};s("d1b1"),M.render=u,M.__scopeId="data-v-11edf2d6";var D=M,R={name:"VueStarRating",components:{Star:D},props:{increment:{type:Number,default:1},rating:{type:Number,default:0},roundStartRating:{type:Boolean,default:!0},activeColor:{type:[String,Array],default:"#ffd055"},inactiveColor:{type:String,default:"#d8d8d8"},maxRating:{type:Number,default:5},starPoints:{type:Array,default(){return[]}},starSize:{type:Number,default:50},showRating:{type:Boolean,default:!0},readOnly:{type:Boolean,default:!1},textClass:{type:String,default:""},inline:{type:Boolean,default:!1},borderColor:{type:String,default:"#999"},activeBorderColor:{type:[String,Array],default:null},borderWidth:{type:Number,default:0},roundedCorners:{type:Boolean,default:!1},padding:{type:Number,default:0},rtl:{type:Boolean,default:!1},fixedPoints:{type:Number,default:null},glow:{type:Number,default:0},glowColor:{type:String,default:"#fff"},clearable:{type:Boolean,default:!1},activeOnClick:{type:Boolean,default:!1},animate:{type:Boolean,default:!1}},emits:["update:rating","hover:rating"],data(){return{step:0,fillLevel:[],currentRating:0,selectedRating:0,ratingSelected:!1}},computed:{formattedRating(){return this.fixedPoints===null?this.currentRating:this.currentRating.toFixed(this.fixedPoints)},shouldRound(){return this.ratingSelected||this.roundStartRating},margin(){return this.padding+this.borderWidth},activeColors(){return Array.isArray(this.activeColor)?this.padColors(this.activeColor,this.maxRating,this.activeColor.slice(-1)[0]):new Array(this.maxRating).fill(this.activeColor)},currentActiveColor(){return this.activeOnClick?this.selectedRating>0?this.activeColors[Math.ceil(this.selectedRating)-1]:this.inactiveColor:this.currentRating>0?this.activeColors[Math.ceil(this.currentRating)-1]:this.inactiveColor},activeBorderColors(){if(Array.isArray(this.activeBorderColor))return this.padColors(this.activeBorderColor,this.maxRating,this.activeBorderColor.slice(-1)[0]);let c=this.activeBorderColor?this.activeBorderColor:this.borderColor;return new Array(this.maxRating).fill(c)},currentActiveBorderColor(){return this.activeOnClick?this.selectedRating>0?this.activeBorderColors[Math.ceil(this.selectedRating)-1]:this.borderColor:this.currentRating>0?this.activeBorderColors[Math.ceil(this.currentRating)-1]:this.borderColor}},watch:{rating(c){this.currentRating=c,this.selectedRating=c,this.createStars(this.shouldRound)}},created(){this.step=this.increment*100,this.currentRating=this.rating,this.selectedRating=this.currentRating,this.createStars(this.roundStartRating)},methods:{setRating(c,i){if(!this.readOnly){const a=this.rtl?(100-c.position)/100:c.position/100;this.currentRating=(c.id+a-1).toFixed(2),this.currentRating=this.currentRating>this.maxRating?this.maxRating:this.currentRating,i?(this.createStars(!0,!0),this.clearable&&this.currentRating===this.selectedRating?this.selectedRating=0:this.selectedRating=this.currentRating,this.$emit("update:rating",this.selectedRating),this.ratingSelected=!0):(this.createStars(!0,!this.activeOnClick),this.$emit("hover:rating",this.currentRating))}},resetRating(){this.readOnly||(this.currentRating=this.selectedRating,this.createStars(this.shouldRound))},createStars(c=!0,i=!0){c&&this.round();for(var a=0;a<this.maxRating;a++){let r=0;a<this.currentRating&&(r=this.currentRating-a>1?100:(this.currentRating-a)*100),i&&(this.fillLevel[a]=Math.round(r))}},round(){var c=1/this.increment;this.currentRating=Math.min(this.maxRating,Math.ceil(this.currentRating*c)/c)},padColors(c,i,a){return Object.assign(new Array(i).fill(a),c)}}};s("9ff5"),R.render=t,R.__scopeId="data-v-f675a548";var O=R,E=O;f.default=E}})})(G);var Z=G.exports;const w=K(Z),q={class:"content"},Q={class:"row items-push-2x"},$={class:"col-md-6"},tt={class:"font-size-sm text-muted mb-2"},et={key:0},rt={class:"col-md-6"},ot={class:"font-size-sm text-muted mb-2"},at={key:0},it={class:"col-md-6"},st={class:"font-size-sm text-muted mb-2"},nt={key:0},lt={class:"col-md-6"},dt={class:"font-size-sm text-muted mb-2"},ut={key:0},ct={class:"d-flex align-items-center space-x-2"},pt={class:"col-md-6"},gt={class:"font-size-sm text-muted mb-2"},ft={key:0},_t={class:"col-md-6"},vt={class:"font-size-sm text-muted mb-2"},ht={key:0},mt={class:"col-md-6"},bt={class:"font-size-sm text-muted mb-2"},Ct={key:0},yt={class:"col-md-6"},St={class:"font-size-sm text-muted mb-2"},Rt={key:0},Bt={__name:"RatingView",setup(W){const v=N(0),f=N(3),s=N(5),o=N(4),d=N(2.5),_=N(0),e=N(3),p=N(3);return(b,t)=>{const S=H("BasePageHeading"),y=H("BaseBlock");return I(),k(J,null,[C(S,{title:"Rating",subtitle:"Adding rating functionality to your pages has never been easier."},{extra:Y(()=>t[16]||(t[16]=[g("nav",{"aria-label":"breadcrumb"},[g("ol",{class:"breadcrumb breadcrumb-alt"},[g("li",{class:"breadcrumb-item"},[g("a",{class:"link-fx",href:"javascript:void(0)"},"Plugins")]),g("li",{class:"breadcrumb-item","aria-current":"page"},"Rating")])],-1)])),_:1}),g("div",q,[C(y,{title:"Vue Star Rating"},{default:Y(()=>[g("div",Q,[g("div",$,[t[18]||(t[18]=g("h4",{class:"border-bottom pb-2"},"Simple",-1)),g("p",tt,[t[17]||(t[17]=T(" Setting up rating is just a component away ")),v.value?(I(),k("span",et,"("+V(v.value)+")",1)):U("",!0)]),C(x(w),{rating:v.value,"onUpdate:rating":t[0]||(t[0]=u=>v.value=u),"star-size":24,"show-rating":!1},null,8,["rating"])]),g("div",rt,[t[20]||(t[20]=g("h4",{class:"border-bottom pb-2"},"Predefined Score",-1)),g("p",ot,[t[19]||(t[19]=T(" You can easily set a default score ")),f.value?(I(),k("span",at,"("+V(f.value)+")",1)):U("",!0)]),C(x(w),{rating:f.value,"onUpdate:rating":t[1]||(t[1]=u=>f.value=u),"star-size":24,"show-rating":!1},null,8,["rating"])]),g("div",it,[t[22]||(t[22]=g("h4",{class:"border-bottom pb-2"},"More Stars",-1)),g("p",st,[t[21]||(t[21]=T(" You can easily set the number of stars ")),s.value?(I(),k("span",nt,"("+V(s.value)+")",1)):U("",!0)]),C(x(w),{rating:s.value,"onUpdate:rating":t[2]||(t[2]=u=>s.value=u),"star-size":24,"show-rating":!1,"max-rating":10},null,8,["rating"])]),g("div",lt,[t[25]||(t[25]=g("h4",{class:"border-bottom pb-2"},"Reset Button",-1)),g("p",dt,[t[23]||(t[23]=T(" You can also add a reset button to your rating ")),o.value?(I(),k("span",ut,"("+V(o.value)+")",1)):U("",!0)]),g("div",ct,[g("button",{type:"button",class:"btn btn-sm btn-alt-danger mt-1 mr-2",onClick:t[3]||(t[3]=u=>o.value=0)},t[24]||(t[24]=[g("i",{class:"fa fa-times-circle"},null,-1)])),C(x(w),{rating:o.value,"onUpdate:rating":t[4]||(t[4]=u=>o.value=u),"star-size":24,"show-rating":!1},null,8,["rating"])])]),g("div",pt,[t[27]||(t[27]=g("h4",{class:"border-bottom pb-2"},"Half Stars",-1)),g("p",gt,[t[26]||(t[26]=T(" You can have half stars ")),d.value?(I(),k("span",ft,"("+V(d.value)+")",1)):U("",!0)]),C(x(w),{rating:d.value,"onUpdate:rating":t[5]||(t[5]=u=>d.value=u),"star-size":24,"show-rating":!1,increment:.5},null,8,["rating"])]),g("div",_t,[t[29]||(t[29]=g("h4",{class:"border-bottom pb-2"},"Fluid Stars",-1)),g("p",vt,[t[28]||(t[28]=T(" You can even have fluid stars ")),_.value?(I(),k("span",ht,"("+V(_.value)+")",1)):U("",!0)]),C(x(w),{rating:_.value,"onUpdate:rating":t[6]||(t[6]=u=>_.value=u),"star-size":24,increment:.01,"fixed-points":2,"text-class":"font-size-sm text-muted"},null,8,["rating"])]),g("div",mt,[t[31]||(t[31]=g("h4",{class:"border-bottom pb-2"},"Color and Shape Variations",-1)),g("p",bt,[t[30]||(t[30]=T(" You can set the colors to what ever you like ")),e.value?(I(),k("span",Ct,"("+V(e.value)+")",1)):U("",!0)]),C(x(w),{rating:e.value,"onUpdate:rating":t[7]||(t[7]=u=>e.value=u),"star-size":24,"show-rating":!1,"active-color":"#5c80d1","star-points":[23,2,14,17,0,19,10,34,7,50,23,43,38,50,36,34,46,19,31,17],class:"mb-2"},null,8,["rating"]),C(x(w),{rating:e.value,"onUpdate:rating":t[8]||(t[8]=u=>e.value=u),"star-size":24,"show-rating":!1,"active-color":"#46c37b","star-points":[23,2,14,17,0,19,10,34,7,50,23,43,38,50,36,34,46,19,31,17],class:"mb-2"},null,8,["rating"]),C(x(w),{rating:e.value,"onUpdate:rating":t[9]||(t[9]=u=>e.value=u),"star-size":24,"show-rating":!1,"active-color":"#70b9eb","star-points":[23,2,14,17,0,19,10,34,7,50,23,43,38,50,36,34,46,19,31,17],class:"mb-2"},null,8,["rating"]),C(x(w),{rating:e.value,"onUpdate:rating":t[10]||(t[10]=u=>e.value=u),"star-size":24,"show-rating":!1,"active-color":"#f3b760","star-points":[23,2,14,17,0,19,10,34,7,50,23,43,38,50,36,34,46,19,31,17],class:"mb-2"},null,8,["rating"]),C(x(w),{rating:e.value,"onUpdate:rating":t[11]||(t[11]=u=>e.value=u),"star-size":24,"show-rating":!1,"active-color":"#d26a5c","star-points":[23,2,14,17,0,19,10,34,7,50,23,43,38,50,36,34,46,19,31,17],class:"mb-2"},null,8,["rating"])]),g("div",yt,[t[33]||(t[33]=g("h4",{class:"border-bottom pb-2"},"Size and Shape Variations",-1)),g("p",St,[t[32]||(t[32]=T(" Changing the size of the stars is also possible ")),p.value?(I(),k("span",Rt,"("+V(p.value)+")",1)):U("",!0)]),C(x(w),{rating:p.value,"onUpdate:rating":t[12]||(t[12]=u=>p.value=u),"star-size":16,"show-rating":!1,"star-points":[23,2,14,17,0,19,10,34,7,50,23,43,38,50,36,34,46,19,31,17],class:"mb-1"},null,8,["rating"]),C(x(w),{rating:p.value,"onUpdate:rating":t[13]||(t[13]=u=>p.value=u),"star-size":24,"show-rating":!1,"star-points":[23,2,14,17,0,19,10,34,7,50,23,43,38,50,36,34,46,19,31,17],class:"mb-1"},null,8,["rating"]),C(x(w),{rating:p.value,"onUpdate:rating":t[14]||(t[14]=u=>p.value=u),"star-size":32,"show-rating":!1,"star-points":[23,2,14,17,0,19,10,34,7,50,23,43,38,50,36,34,46,19,31,17],class:"mb-1"},null,8,["rating"]),C(x(w),{rating:p.value,"onUpdate:rating":t[15]||(t[15]=u=>p.value=u),"star-size":48,"show-rating":!1,"star-points":[23,2,14,17,0,19,10,34,7,50,23,43,38,50,36,34,46,19,31,17],class:"mb-1"},null,8,["rating"])])])]),_:1})])],64)}}};export{Bt as default};
