var e={894:(e,t,i)=>{i.r(t),i.d(t,{Badge:()=>Ki,Button:()=>Fs,Checkbox:()=>zs,DataGrid:()=>fo,DataGridCell:()=>vo,DataGridCellTypes:()=>oo,DataGridRow:()=>go,DataGridRowTypes:()=>no,Divider:()=>wo,DividerRole:()=>Co,Dropdown:()=>_o,DropdownPosition:()=>Lo,GenerateHeaderOptions:()=>so,Link:()=>Ko,Option:()=>Qo,PanelTab:()=>on,PanelView:()=>rn,Panels:()=>tn,ProgressRing:()=>dn,Radio:()=>vn,RadioGroup:()=>pn,RadioGroupOrientation:()=>xo,Tag:()=>xn,TextArea:()=>An,TextAreaResize:()=>En,TextField:()=>Pn,TextFieldType:()=>kn,allComponents:()=>Ln,provideVSCodeDesignSystem:()=>dt,vsCodeBadge:()=>Wi,vsCodeButton:()=>Ls,vsCodeCheckbox:()=>Ns,vsCodeDataGrid:()=>bo,vsCodeDataGridCell:()=>yo,vsCodeDataGridRow:()=>mo,vsCodeDivider:()=>ko,vsCodeDropdown:()=>qo,vsCodeLink:()=>Wo,vsCodeOption:()=>Xo,vsCodePanelTab:()=>nn,vsCodePanelView:()=>an,vsCodePanels:()=>sn,vsCodeProgressRing:()=>cn,vsCodeRadio:()=>yn,vsCodeRadioGroup:()=>fn,vsCodeTag:()=>Cn,vsCodeTextArea:()=>Dn,vsCodeTextField:()=>Fn});const s=function(){if("undefined"!=typeof globalThis)return globalThis;if("undefined"!=typeof global)return global;if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;try{return new Function("return this")()}catch(e){return{}}}();void 0===s.trustedTypes&&(s.trustedTypes={createPolicy:(e,t)=>t});const o={configurable:!1,enumerable:!1,writable:!1};void 0===s.FAST&&Reflect.defineProperty(s,"FAST",Object.assign({value:Object.create(null)},o));const n=s.FAST;if(void 0===n.getById){const e=Object.create(null);Reflect.defineProperty(n,"getById",Object.assign({value(t,i){let s=e[t];return void 0===s&&(s=i?e[t]=i():null),s}},o))}const r=Object.freeze([]);function a(){const e=new WeakMap;return function(t){let i=e.get(t);if(void 0===i){let s=Reflect.getPrototypeOf(t);for(;void 0===i&&null!==s;)i=e.get(s),s=Reflect.getPrototypeOf(s);i=void 0===i?[]:i.slice(0),e.set(t,i)}return i}}const l=s.FAST.getById(1,(()=>{const e=[],t=[];function i(){if(t.length)throw t.shift()}function o(e){try{e.call()}catch(e){t.push(e),setTimeout(i,0)}}function n(){let t=0;for(;t<e.length;)if(o(e[t]),t++,t>1024){for(let i=0,s=e.length-t;i<s;i++)e[i]=e[i+t];e.length-=t,t=0}e.length=0}return Object.freeze({enqueue:function(t){e.length<1&&s.requestAnimationFrame(n),e.push(t)},process:n})})),d=s.trustedTypes.createPolicy("fast-html",{createHTML:e=>e});let c=d;const h=`fast-${Math.random().toString(36).substring(2,8)}`,u=`${h}{`,p=`}${h}`,f=Object.freeze({supportsAdoptedStyleSheets:Array.isArray(document.adoptedStyleSheets)&&"replace"in CSSStyleSheet.prototype,setHTMLPolicy(e){if(c!==d)throw new Error("The HTML policy can only be set once.");c=e},createHTML:e=>c.createHTML(e),isMarker:e=>e&&8===e.nodeType&&e.data.startsWith(h),extractDirectiveIndexFromMarker:e=>parseInt(e.data.replace(`${h}:`,"")),createInterpolationPlaceholder:e=>`${u}${e}${p}`,createCustomAttributePlaceholder(e,t){return`${e}="${this.createInterpolationPlaceholder(t)}"`},createBlockPlaceholder:e=>`\x3c!--${h}:${e}--\x3e`,queueUpdate:l.enqueue,processUpdates:l.process,nextUpdate:()=>new Promise(l.enqueue),setAttribute(e,t,i){null==i?e.removeAttribute(t):e.setAttribute(t,i)},setBooleanAttribute(e,t,i){i?e.setAttribute(t,""):e.removeAttribute(t)},removeChildNodes(e){for(let t=e.firstChild;null!==t;t=e.firstChild)e.removeChild(t)},createTemplateWalker:e=>document.createTreeWalker(e,133,null,!1)});class b{constructor(e,t){this.sub1=void 0,this.sub2=void 0,this.spillover=void 0,this.source=e,this.sub1=t}has(e){return void 0===this.spillover?this.sub1===e||this.sub2===e:-1!==this.spillover.indexOf(e)}subscribe(e){const t=this.spillover;if(void 0===t){if(this.has(e))return;if(void 0===this.sub1)return void(this.sub1=e);if(void 0===this.sub2)return void(this.sub2=e);this.spillover=[this.sub1,this.sub2,e],this.sub1=void 0,this.sub2=void 0}else-1===t.indexOf(e)&&t.push(e)}unsubscribe(e){const t=this.spillover;if(void 0===t)this.sub1===e?this.sub1=void 0:this.sub2===e&&(this.sub2=void 0);else{const i=t.indexOf(e);-1!==i&&t.splice(i,1)}}notify(e){const t=this.spillover,i=this.source;if(void 0===t){const t=this.sub1,s=this.sub2;void 0!==t&&t.handleChange(i,e),void 0!==s&&s.handleChange(i,e)}else for(let s=0,o=t.length;s<o;++s)t[s].handleChange(i,e)}}class g{constructor(e){this.subscribers={},this.sourceSubscribers=null,this.source=e}notify(e){var t;const i=this.subscribers[e];void 0!==i&&i.notify(e),null===(t=this.sourceSubscribers)||void 0===t||t.notify(e)}subscribe(e,t){var i;if(t){let i=this.subscribers[t];void 0===i&&(this.subscribers[t]=i=new b(this.source)),i.subscribe(e)}else this.sourceSubscribers=null!==(i=this.sourceSubscribers)&&void 0!==i?i:new b(this.source),this.sourceSubscribers.subscribe(e)}unsubscribe(e,t){var i;if(t){const i=this.subscribers[t];void 0!==i&&i.unsubscribe(e)}else null===(i=this.sourceSubscribers)||void 0===i||i.unsubscribe(e)}}const m=n.getById(2,(()=>{const e=/(:|&&|\|\||if)/,t=new WeakMap,i=f.queueUpdate;let s,o=e=>{throw new Error("Must call enableArrayObservation before observing arrays.")};function n(e){let i=e.$fastController||t.get(e);return void 0===i&&(Array.isArray(e)?i=o(e):t.set(e,i=new g(e))),i}const r=a();class l{constructor(e){this.name=e,this.field=`_${e}`,this.callback=`${e}Changed`}getValue(e){return void 0!==s&&s.watch(e,this.name),e[this.field]}setValue(e,t){const i=this.field,s=e[i];if(s!==t){e[i]=t;const o=e[this.callback];"function"==typeof o&&o.call(e,s,t),n(e).notify(this.name)}}}class d extends b{constructor(e,t,i=!1){super(e,t),this.binding=e,this.isVolatileBinding=i,this.needsRefresh=!0,this.needsQueue=!0,this.first=this,this.last=null,this.propertySource=void 0,this.propertyName=void 0,this.notifier=void 0,this.next=void 0}observe(e,t){this.needsRefresh&&null!==this.last&&this.disconnect();const i=s;s=this.needsRefresh?this:void 0,this.needsRefresh=this.isVolatileBinding;const o=this.binding(e,t);return s=i,o}disconnect(){if(null!==this.last){let e=this.first;for(;void 0!==e;)e.notifier.unsubscribe(this,e.propertyName),e=e.next;this.last=null,this.needsRefresh=this.needsQueue=!0}}watch(e,t){const i=this.last,o=n(e),r=null===i?this.first:{};if(r.propertySource=e,r.propertyName=t,r.notifier=o,o.subscribe(this,t),null!==i){if(!this.needsRefresh){let t;s=void 0,t=i.propertySource[i.propertyName],s=this,e===t&&(this.needsRefresh=!0)}i.next=r}this.last=r}handleChange(){this.needsQueue&&(this.needsQueue=!1,i(this))}call(){null!==this.last&&(this.needsQueue=!0,this.notify(this))}records(){let e=this.first;return{next:()=>{const t=e;return void 0===t?{value:void 0,done:!0}:(e=e.next,{value:t,done:!1})},[Symbol.iterator]:function(){return this}}}}return Object.freeze({setArrayObserverFactory(e){o=e},getNotifier:n,track(e,t){void 0!==s&&s.watch(e,t)},trackVolatile(){void 0!==s&&(s.needsRefresh=!0)},notify(e,t){n(e).notify(t)},defineProperty(e,t){"string"==typeof t&&(t=new l(t)),r(e).push(t),Reflect.defineProperty(e,t.name,{enumerable:!0,get:function(){return t.getValue(this)},set:function(e){t.setValue(this,e)}})},getAccessors:r,binding(e,t,i=this.isVolatileBinding(e)){return new d(e,t,i)},isVolatileBinding:t=>e.test(t.toString())})}));function v(e,t){m.defineProperty(e,t)}const y=n.getById(3,(()=>{let e=null;return{get:()=>e,set(t){e=t}}}));class x{constructor(){this.index=0,this.length=0,this.parent=null,this.parentContext=null}get event(){return y.get()}get isEven(){return this.index%2==0}get isOdd(){return this.index%2!=0}get isFirst(){return 0===this.index}get isInMiddle(){return!this.isFirst&&!this.isLast}get isLast(){return this.index===this.length-1}static setEvent(e){y.set(e)}}m.defineProperty(x.prototype,"index"),m.defineProperty(x.prototype,"length");const C=Object.seal(new x);class ${constructor(){this.targets=new WeakSet}addStylesTo(e){this.targets.add(e)}removeStylesFrom(e){this.targets.delete(e)}isAttachedTo(e){return this.targets.has(e)}withBehaviors(...e){return this.behaviors=null===this.behaviors?e:this.behaviors.concat(e),this}}function w(e){return e.map((e=>e instanceof $?w(e.styles):[e])).reduce(((e,t)=>e.concat(t)),[])}function k(e){return e.map((e=>e instanceof $?e.behaviors:null)).reduce(((e,t)=>null===t?e:(null===e&&(e=[]),e.concat(t))),null)}$.create=(()=>{if(f.supportsAdoptedStyleSheets){const e=new Map;return t=>new E(t,e)}return e=>new A(e)})();const I=Symbol("prependToAdoptedStyleSheets");function T(e){const t=[],i=[];return e.forEach((e=>(e[I]?t:i).push(e))),{prepend:t,append:i}}let O=(e,t)=>{const{prepend:i,append:s}=T(t);e.adoptedStyleSheets=[...i,...e.adoptedStyleSheets,...s]},S=(e,t)=>{e.adoptedStyleSheets=e.adoptedStyleSheets.filter((e=>-1===t.indexOf(e)))};if(f.supportsAdoptedStyleSheets)try{document.adoptedStyleSheets.push(),document.adoptedStyleSheets.splice(),O=(e,t)=>{const{prepend:i,append:s}=T(t);e.adoptedStyleSheets.splice(0,0,...i),e.adoptedStyleSheets.push(...s)},S=(e,t)=>{for(const i of t){const t=e.adoptedStyleSheets.indexOf(i);-1!==t&&e.adoptedStyleSheets.splice(t,1)}}}catch(e){}class E extends ${constructor(e,t){super(),this.styles=e,this.styleSheetCache=t,this._styleSheets=void 0,this.behaviors=k(e)}get styleSheets(){if(void 0===this._styleSheets){const e=this.styles,t=this.styleSheetCache;this._styleSheets=w(e).map((e=>{if(e instanceof CSSStyleSheet)return e;let i=t.get(e);return void 0===i&&(i=new CSSStyleSheet,i.replaceSync(e),t.set(e,i)),i}))}return this._styleSheets}addStylesTo(e){O(e,this.styleSheets),super.addStylesTo(e)}removeStylesFrom(e){S(e,this.styleSheets),super.removeStylesFrom(e)}}let R=0;class A extends ${constructor(e){super(),this.styles=e,this.behaviors=null,this.behaviors=k(e),this.styleSheets=w(e),this.styleClass="fast-style-class-"+ ++R}addStylesTo(e){const t=this.styleSheets,i=this.styleClass;e=this.normalizeTarget(e);for(let s=0;s<t.length;s++){const o=document.createElement("style");o.innerHTML=t[s],o.className=i,e.append(o)}super.addStylesTo(e)}removeStylesFrom(e){const t=(e=this.normalizeTarget(e)).querySelectorAll(`.${this.styleClass}`);for(let i=0,s=t.length;i<s;++i)e.removeChild(t[i]);super.removeStylesFrom(e)}isAttachedTo(e){return super.isAttachedTo(this.normalizeTarget(e))}normalizeTarget(e){return e===document?document.body:e}}const D=Object.freeze({locate:a()}),B={toView:e=>e?"true":"false",fromView:e=>null!=e&&"false"!==e&&!1!==e&&0!==e},P={toView(e){if(null==e)return null;const t=1*e;return isNaN(t)?null:t.toString()},fromView(e){if(null==e)return null;const t=1*e;return isNaN(t)?null:t}};class F{constructor(e,t,i=t.toLowerCase(),s="reflect",o){this.guards=new Set,this.Owner=e,this.name=t,this.attribute=i,this.mode=s,this.converter=o,this.fieldName=`_${t}`,this.callbackName=`${t}Changed`,this.hasCallback=this.callbackName in e.prototype,"boolean"===s&&void 0===o&&(this.converter=B)}setValue(e,t){const i=e[this.fieldName],s=this.converter;void 0!==s&&(t=s.fromView(t)),i!==t&&(e[this.fieldName]=t,this.tryReflectToAttribute(e),this.hasCallback&&e[this.callbackName](i,t),e.$fastController.notify(this.name))}getValue(e){return m.track(e,this.name),e[this.fieldName]}onAttributeChangedCallback(e,t){this.guards.has(e)||(this.guards.add(e),this.setValue(e,t),this.guards.delete(e))}tryReflectToAttribute(e){const t=this.mode,i=this.guards;i.has(e)||"fromView"===t||f.queueUpdate((()=>{i.add(e);const s=e[this.fieldName];switch(t){case"reflect":const t=this.converter;f.setAttribute(e,this.attribute,void 0!==t?t.toView(s):s);break;case"boolean":f.setBooleanAttribute(e,this.attribute,s)}i.delete(e)}))}static collect(e,...t){const i=[];t.push(D.locate(e));for(let s=0,o=t.length;s<o;++s){const o=t[s];if(void 0!==o)for(let t=0,s=o.length;t<s;++t){const s=o[t];"string"==typeof s?i.push(new F(e,s)):i.push(new F(e,s.property,s.attribute,s.mode,s.converter))}}return i}}function L(e,t){let i;function s(e,t){arguments.length>1&&(i.property=t),D.locate(e.constructor).push(i)}return arguments.length>1?(i={},void s(e,t)):(i=void 0===e?{}:e,s)}const H={mode:"open"},V={},M=n.getById(4,(()=>{const e=new Map;return Object.freeze({register:t=>!e.has(t.type)&&(e.set(t.type,t),!0),getByType:t=>e.get(t)})}));class z{constructor(e,t=e.definition){"string"==typeof t&&(t={name:t}),this.type=e,this.name=t.name,this.template=t.template;const i=F.collect(e,t.attributes),s=new Array(i.length),o={},n={};for(let e=0,t=i.length;e<t;++e){const t=i[e];s[e]=t.attribute,o[t.name]=t,n[t.attribute]=t}this.attributes=i,this.observedAttributes=s,this.propertyLookup=o,this.attributeLookup=n,this.shadowOptions=void 0===t.shadowOptions?H:null===t.shadowOptions?void 0:Object.assign(Object.assign({},H),t.shadowOptions),this.elementOptions=void 0===t.elementOptions?V:Object.assign(Object.assign({},V),t.elementOptions),this.styles=void 0===t.styles?void 0:Array.isArray(t.styles)?$.create(t.styles):t.styles instanceof $?t.styles:$.create([t.styles])}get isDefined(){return!!M.getByType(this.type)}define(e=customElements){const t=this.type;if(M.register(this)){const e=this.attributes,i=t.prototype;for(let t=0,s=e.length;t<s;++t)m.defineProperty(i,e[t]);Reflect.defineProperty(t,"observedAttributes",{value:this.observedAttributes,enumerable:!0})}return e.get(this.name)||e.define(this.name,t,this.elementOptions),this}}function N(e,t,i,s){var o,n=arguments.length,r=n<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,s);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(r=(n<3?o(r):n>3?o(t,i,r):o(t,i))||r);return n>3&&r&&Object.defineProperty(t,i,r),r}z.forType=M.getByType;const j=new WeakMap,_={bubbles:!0,composed:!0,cancelable:!0};function q(e){return e.shadowRoot||j.get(e)||null}class U extends g{constructor(e,t){super(e),this.boundObservables=null,this.behaviors=null,this.needsInitialization=!0,this._template=null,this._styles=null,this._isConnected=!1,this.$fastController=this,this.view=null,this.element=e,this.definition=t;const i=t.shadowOptions;if(void 0!==i){const t=e.attachShadow(i);"closed"===i.mode&&j.set(e,t)}const s=m.getAccessors(e);if(s.length>0){const t=this.boundObservables=Object.create(null);for(let i=0,o=s.length;i<o;++i){const o=s[i].name,n=e[o];void 0!==n&&(delete e[o],t[o]=n)}}}get isConnected(){return m.track(this,"isConnected"),this._isConnected}setIsConnected(e){this._isConnected=e,m.notify(this,"isConnected")}get template(){return this._template}set template(e){this._template!==e&&(this._template=e,this.needsInitialization||this.renderTemplate(e))}get styles(){return this._styles}set styles(e){this._styles!==e&&(null!==this._styles&&this.removeStyles(this._styles),this._styles=e,this.needsInitialization||null===e||this.addStyles(e))}addStyles(e){const t=q(this.element)||this.element.getRootNode();if(e instanceof HTMLStyleElement)t.append(e);else if(!e.isAttachedTo(t)){const i=e.behaviors;e.addStylesTo(t),null!==i&&this.addBehaviors(i)}}removeStyles(e){const t=q(this.element)||this.element.getRootNode();if(e instanceof HTMLStyleElement)t.removeChild(e);else if(e.isAttachedTo(t)){const i=e.behaviors;e.removeStylesFrom(t),null!==i&&this.removeBehaviors(i)}}addBehaviors(e){const t=this.behaviors||(this.behaviors=new Map),i=e.length,s=[];for(let o=0;o<i;++o){const i=e[o];t.has(i)?t.set(i,t.get(i)+1):(t.set(i,1),s.push(i))}if(this._isConnected){const e=this.element;for(let t=0;t<s.length;++t)s[t].bind(e,C)}}removeBehaviors(e,t=!1){const i=this.behaviors;if(null===i)return;const s=e.length,o=[];for(let n=0;n<s;++n){const s=e[n];if(i.has(s)){const e=i.get(s)-1;0===e||t?i.delete(s)&&o.push(s):i.set(s,e)}}if(this._isConnected){const e=this.element;for(let t=0;t<o.length;++t)o[t].unbind(e)}}onConnectedCallback(){if(this._isConnected)return;const e=this.element;this.needsInitialization?this.finishInitialization():null!==this.view&&this.view.bind(e,C);const t=this.behaviors;if(null!==t)for(const[i]of t)i.bind(e,C);this.setIsConnected(!0)}onDisconnectedCallback(){if(!this._isConnected)return;this.setIsConnected(!1);const e=this.view;null!==e&&e.unbind();const t=this.behaviors;if(null!==t){const e=this.element;for(const[i]of t)i.unbind(e)}}onAttributeChangedCallback(e,t,i){const s=this.definition.attributeLookup[e];void 0!==s&&s.onAttributeChangedCallback(this.element,i)}emit(e,t,i){return!!this._isConnected&&this.element.dispatchEvent(new CustomEvent(e,Object.assign(Object.assign({detail:t},_),i)))}finishInitialization(){const e=this.element,t=this.boundObservables;if(null!==t){const i=Object.keys(t);for(let s=0,o=i.length;s<o;++s){const o=i[s];e[o]=t[o]}this.boundObservables=null}const i=this.definition;null===this._template&&(this.element.resolveTemplate?this._template=this.element.resolveTemplate():i.template&&(this._template=i.template||null)),null!==this._template&&this.renderTemplate(this._template),null===this._styles&&(this.element.resolveStyles?this._styles=this.element.resolveStyles():i.styles&&(this._styles=i.styles||null)),null!==this._styles&&this.addStyles(this._styles),this.needsInitialization=!1}renderTemplate(e){const t=this.element,i=q(t)||t;null!==this.view?(this.view.dispose(),this.view=null):this.needsInitialization||f.removeChildNodes(i),e&&(this.view=e.render(t,i,t))}static forCustomElement(e){const t=e.$fastController;if(void 0!==t)return t;const i=z.forType(e.constructor);if(void 0===i)throw new Error("Missing FASTElement definition.");return e.$fastController=new U(e,i)}}function G(e){return class extends e{constructor(){super(),U.forCustomElement(this)}$emit(e,t,i){return this.$fastController.emit(e,t,i)}connectedCallback(){this.$fastController.onConnectedCallback()}disconnectedCallback(){this.$fastController.onDisconnectedCallback()}attributeChangedCallback(e,t,i){this.$fastController.onAttributeChangedCallback(e,t,i)}}}const K=Object.assign(G(HTMLElement),{from:e=>G(e),define:(e,t)=>new z(e,t).define().type}),W=new Map;"metadata"in Reflect||(Reflect.metadata=function(e,t){return function(i){Reflect.defineMetadata(e,t,i)}},Reflect.defineMetadata=function(e,t,i){let s=W.get(i);void 0===s&&W.set(i,s=new Map),s.set(e,t)},Reflect.getOwnMetadata=function(e,t){const i=W.get(t);if(void 0!==i)return i.get(e)});class Q{constructor(e,t){this.container=e,this.key=t}instance(e){return this.registerResolver(0,e)}singleton(e){return this.registerResolver(1,e)}transient(e){return this.registerResolver(2,e)}callback(e){return this.registerResolver(3,e)}cachedCallback(e){return this.registerResolver(3,xe(e))}aliasTo(e){return this.registerResolver(5,e)}registerResolver(e,t){const{container:i,key:s}=this;return this.container=this.key=void 0,i.registerResolver(s,new le(s,e,t))}}function X(e){const t=e.slice(),i=Object.keys(e),s=i.length;let o;for(let n=0;n<s;++n)o=i[n],Se(o)||(t[o]=e[o]);return t}const Y=Object.freeze({none(e){throw Error(`${e.toString()} not registered, did you forget to add @singleton()?`)},singleton:e=>new le(e,1,e),transient:e=>new le(e,2,e)}),J=Object.freeze({default:Object.freeze({parentLocator:()=>null,responsibleForOwnerRequests:!1,defaultResolver:Y.singleton})}),Z=new Map;function ee(e){return t=>Reflect.getOwnMetadata(e,t)}let te=null;const ie=Object.freeze({createContainer:e=>new ve(null,Object.assign({},J.default,e)),findResponsibleContainer(e){const t=e.$$container$$;return t&&t.responsibleForOwnerRequests?t:ie.findParentContainer(e)},findParentContainer(e){const t=new CustomEvent(ge,{bubbles:!0,composed:!0,cancelable:!0,detail:{container:void 0}});return e.dispatchEvent(t),t.detail.container||ie.getOrCreateDOMContainer()},getOrCreateDOMContainer:(e,t)=>e?e.$$container$$||new ve(e,Object.assign({},J.default,t,{parentLocator:ie.findParentContainer})):te||(te=new ve(null,Object.assign({},J.default,t,{parentLocator:()=>null}))),getDesignParamtypes:ee("design:paramtypes"),getAnnotationParamtypes:ee("di:paramtypes"),getOrCreateAnnotationParamTypes(e){let t=this.getAnnotationParamtypes(e);return void 0===t&&Reflect.defineMetadata("di:paramtypes",t=[],e),t},getDependencies(e){let t=Z.get(e);if(void 0===t){const i=e.inject;if(void 0===i){const i=ie.getDesignParamtypes(e),s=ie.getAnnotationParamtypes(e);if(void 0===i)if(void 0===s){const i=Object.getPrototypeOf(e);t="function"==typeof i&&i!==Function.prototype?X(ie.getDependencies(i)):[]}else t=X(s);else if(void 0===s)t=X(i);else{t=X(i);let e,o=s.length;for(let i=0;i<o;++i)e=s[i],void 0!==e&&(t[i]=e);const n=Object.keys(s);let r;o=n.length;for(let e=0;e<o;++e)r=n[e],Se(r)||(t[r]=s[r])}}else t=X(i);Z.set(e,t)}return t},defineProperty(e,t,i,s=!1){const o=`$di_${t}`;Reflect.defineProperty(e,t,{get:function(){let e=this[o];if(void 0===e){const n=this instanceof HTMLElement?ie.findResponsibleContainer(this):ie.getOrCreateDOMContainer();if(e=n.get(i),this[o]=e,s&&this instanceof K){const s=this.$fastController,n=()=>{ie.findResponsibleContainer(this).get(i)!==this[o]&&(this[o]=e,s.notify(t))};s.subscribe({handleChange:n},"isConnected")}}return e}})},createInterface(e,t){const i="function"==typeof e?e:t,s="string"==typeof e?e:e&&"friendlyName"in e&&e.friendlyName||ke,o="string"!=typeof e&&(e&&"respectConnection"in e&&e.respectConnection||!1),n=function(e,t,i){if(null==e||void 0!==new.target)throw new Error(`No registration for interface: '${n.friendlyName}'`);t?ie.defineProperty(e,t,n,o):ie.getOrCreateAnnotationParamTypes(e)[i]=n};return n.$isInterface=!0,n.friendlyName=null==s?"(anonymous)":s,null!=i&&(n.register=function(e,t){return i(new Q(e,null!=t?t:n))}),n.toString=function(){return`InterfaceSymbol<${n.friendlyName}>`},n},inject:(...e)=>function(t,i,s){if("number"==typeof s){const i=ie.getOrCreateAnnotationParamTypes(t),o=e[0];void 0!==o&&(i[s]=o)}else if(i)ie.defineProperty(t,i,e[0]);else{const i=s?ie.getOrCreateAnnotationParamTypes(s.value):ie.getOrCreateAnnotationParamTypes(t);let o;for(let t=0;t<e.length;++t)o=e[t],void 0!==o&&(i[t]=o)}},transient:e=>(e.register=function(t){return Ce.transient(e,e).register(t)},e.registerInRequestor=!1,e),singleton:(e,t=ne)=>(e.register=function(t){return Ce.singleton(e,e).register(t)},e.registerInRequestor=t.scoped,e)}),se=ie.createInterface("Container");function oe(e){return function(t){const i=function(e,t,s){ie.inject(i)(e,t,s)};return i.$isResolver=!0,i.resolve=function(i,s){return e(t,i,s)},i}}ie.inject;const ne={scoped:!1};function re(e,t,i){ie.inject(re)(e,t,i)}function ae(e,t){return t.getFactory(e).construct(t)}oe(((e,t,i)=>()=>i.get(e))),oe(((e,t,i)=>i.has(e,!0)?i.get(e):void 0)),re.$isResolver=!0,re.resolve=()=>{},oe(((e,t,i)=>{const s=ae(e,t),o=new le(e,0,s);return i.registerResolver(e,o),s})),oe(((e,t,i)=>ae(e,t)));class le{constructor(e,t,i){this.key=e,this.strategy=t,this.state=i,this.resolving=!1}get $isResolver(){return!0}register(e){return e.registerResolver(this.key,this)}resolve(e,t){switch(this.strategy){case 0:return this.state;case 1:if(this.resolving)throw new Error(`Cyclic dependency found: ${this.state.name}`);return this.resolving=!0,this.state=e.getFactory(this.state).construct(t),this.strategy=0,this.resolving=!1,this.state;case 2:{const i=e.getFactory(this.state);if(null===i)throw new Error(`Resolver for ${String(this.key)} returned a null factory`);return i.construct(t)}case 3:return this.state(e,t,this);case 4:return this.state[0].resolve(e,t);case 5:return t.get(this.state);default:throw new Error(`Invalid resolver strategy specified: ${this.strategy}.`)}}getFactory(e){var t,i,s;switch(this.strategy){case 1:case 2:return e.getFactory(this.state);case 5:return null!==(s=null===(i=null===(t=e.getResolver(this.state))||void 0===t?void 0:t.getFactory)||void 0===i?void 0:i.call(t,e))&&void 0!==s?s:null;default:return null}}}function de(e){return this.get(e)}function ce(e,t){return t(e)}class he{constructor(e,t){this.Type=e,this.dependencies=t,this.transformers=null}construct(e,t){let i;return i=void 0===t?new this.Type(...this.dependencies.map(de,e)):new this.Type(...this.dependencies.map(de,e),...t),null==this.transformers?i:this.transformers.reduce(ce,i)}registerTransformer(e){(this.transformers||(this.transformers=[])).push(e)}}const ue={$isResolver:!0,resolve:(e,t)=>t};function pe(e){return"function"==typeof e.register}function fe(e){return function(e){return pe(e)&&"boolean"==typeof e.registerInRequestor}(e)&&e.registerInRequestor}const be=new Set(["Array","ArrayBuffer","Boolean","DataView","Date","Error","EvalError","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Number","Object","Promise","RangeError","ReferenceError","RegExp","Set","SharedArrayBuffer","String","SyntaxError","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","URIError","WeakMap","WeakSet"]),ge="__DI_LOCATE_PARENT__",me=new Map;class ve{constructor(e,t){this.owner=e,this.config=t,this._parent=void 0,this.registerDepth=0,this.context=null,null!==e&&(e.$$container$$=this),this.resolvers=new Map,this.resolvers.set(se,ue),e instanceof Node&&e.addEventListener(ge,(e=>{e.composedPath()[0]!==this.owner&&(e.detail.container=this,e.stopImmediatePropagation())}))}get parent(){return void 0===this._parent&&(this._parent=this.config.parentLocator(this.owner)),this._parent}get depth(){return null===this.parent?0:this.parent.depth+1}get responsibleForOwnerRequests(){return this.config.responsibleForOwnerRequests}registerWithContext(e,...t){return this.context=e,this.register(...t),this.context=null,this}register(...e){if(100==++this.registerDepth)throw new Error("Unable to autoregister dependency");let t,i,s,o,n;const r=this.context;for(let a=0,l=e.length;a<l;++a)if(t=e[a],Ie(t))if(pe(t))t.register(this,r);else if(void 0!==t.prototype)Ce.singleton(t,t).register(this);else for(i=Object.keys(t),o=0,n=i.length;o<n;++o)s=t[i[o]],Ie(s)&&(pe(s)?s.register(this,r):this.register(s));return--this.registerDepth,this}registerResolver(e,t){$e(e);const i=this.resolvers,s=i.get(e);return null==s?i.set(e,t):s instanceof le&&4===s.strategy?s.state.push(t):i.set(e,new le(e,4,[s,t])),t}registerTransformer(e,t){const i=this.getResolver(e);if(null==i)return!1;if(i.getFactory){const e=i.getFactory(this);return null!=e&&(e.registerTransformer(t),!0)}return!1}getResolver(e,t=!0){if($e(e),void 0!==e.resolve)return e;let i,s=this;for(;null!=s;){if(i=s.resolvers.get(e),null!=i)return i;if(null==s.parent){const i=fe(e)?this:s;return t?this.jitRegister(e,i):null}s=s.parent}return null}has(e,t=!1){return!!this.resolvers.has(e)||!(!t||null==this.parent)&&this.parent.has(e,!0)}get(e){if($e(e),e.$isResolver)return e.resolve(this,this);let t,i=this;for(;null!=i;){if(t=i.resolvers.get(e),null!=t)return t.resolve(i,this);if(null==i.parent){const s=fe(e)?this:i;return t=this.jitRegister(e,s),t.resolve(i,this)}i=i.parent}throw new Error(`Unable to resolve key: ${String(e)}`)}getAll(e,t=!1){$e(e);const i=this;let s,o=i;if(t){let t=r;for(;null!=o;)s=o.resolvers.get(e),null!=s&&(t=t.concat(we(s,o,i))),o=o.parent;return t}for(;null!=o;){if(s=o.resolvers.get(e),null!=s)return we(s,o,i);if(o=o.parent,null==o)return r}return r}getFactory(e){let t=me.get(e);if(void 0===t){if(Te(e))throw new Error(`${e.name} is a native function and therefore cannot be safely constructed by DI. If this is intentional, please use a callback or cachedCallback resolver.`);me.set(e,t=new he(e,ie.getDependencies(e)))}return t}registerFactory(e,t){me.set(e,t)}createChild(e){return new ve(null,Object.assign({},this.config,e,{parentLocator:()=>this}))}jitRegister(e,t){if("function"!=typeof e)throw new Error(`Attempted to jitRegister something that is not a constructor: '${e}'. Did you forget to register this dependency?`);if(be.has(e.name))throw new Error(`Attempted to jitRegister an intrinsic type: ${e.name}. Did you forget to add @inject(Key)`);if(pe(e)){const i=e.register(t);if(!(i instanceof Object)||null==i.resolve){const i=t.resolvers.get(e);if(null!=i)return i;throw new Error("A valid resolver was not returned from the static register method")}return i}if(e.$isInterface)throw new Error(`Attempted to jitRegister an interface: ${e.friendlyName}`);{const i=this.config.defaultResolver(e,t);return t.resolvers.set(e,i),i}}}const ye=new WeakMap;function xe(e){return function(t,i,s){if(ye.has(s))return ye.get(s);const o=e(t,i,s);return ye.set(s,o),o}}const Ce=Object.freeze({instance:(e,t)=>new le(e,0,t),singleton:(e,t)=>new le(e,1,t),transient:(e,t)=>new le(e,2,t),callback:(e,t)=>new le(e,3,t),cachedCallback:(e,t)=>new le(e,3,xe(t)),aliasTo:(e,t)=>new le(t,5,e)});function $e(e){if(null==e)throw new Error("key/value cannot be null or undefined. Are you trying to inject/register something that doesn't exist with DI?")}function we(e,t,i){if(e instanceof le&&4===e.strategy){const s=e.state;let o=s.length;const n=new Array(o);for(;o--;)n[o]=s[o].resolve(t,i);return n}return[e.resolve(t,i)]}const ke="(anonymous)";function Ie(e){return"object"==typeof e&&null!==e||"function"==typeof e}const Te=function(){const e=new WeakMap;let t=!1,i="",s=0;return function(o){return t=e.get(o),void 0===t&&(i=o.toString(),s=i.length,t=s>=29&&s<=100&&125===i.charCodeAt(s-1)&&i.charCodeAt(s-2)<=32&&93===i.charCodeAt(s-3)&&101===i.charCodeAt(s-4)&&100===i.charCodeAt(s-5)&&111===i.charCodeAt(s-6)&&99===i.charCodeAt(s-7)&&32===i.charCodeAt(s-8)&&101===i.charCodeAt(s-9)&&118===i.charCodeAt(s-10)&&105===i.charCodeAt(s-11)&&116===i.charCodeAt(s-12)&&97===i.charCodeAt(s-13)&&110===i.charCodeAt(s-14)&&88===i.charCodeAt(s-15),e.set(o,t)),t}}(),Oe={};function Se(e){switch(typeof e){case"number":return e>=0&&(0|e)===e;case"string":{const t=Oe[e];if(void 0!==t)return t;const i=e.length;if(0===i)return Oe[e]=!1;let s=0;for(let t=0;t<i;++t)if(s=e.charCodeAt(t),0===t&&48===s&&i>1||s<48||s>57)return Oe[e]=!1;return Oe[e]=!0}default:return!1}}function Ee(e){return`${e.toLowerCase()}:presentation`}const Re=new Map,Ae=Object.freeze({define(e,t,i){const s=Ee(e);void 0===Re.get(s)?Re.set(s,t):Re.set(s,!1),i.register(Ce.instance(s,t))},forTag(e,t){const i=Ee(e),s=Re.get(i);return!1===s?ie.findResponsibleContainer(t).get(i):s||null}});class De{constructor(e,t){this.template=e||null,this.styles=void 0===t?null:Array.isArray(t)?$.create(t):t instanceof $?t:$.create([t])}applyTo(e){const t=e.$fastController;null===t.template&&(t.template=this.template),null===t.styles&&(t.styles=this.styles)}}class Be extends K{constructor(){super(...arguments),this._presentation=void 0}get $presentation(){return void 0===this._presentation&&(this._presentation=Ae.forTag(this.tagName,this)),this._presentation}templateChanged(){void 0!==this.template&&(this.$fastController.template=this.template)}stylesChanged(){void 0!==this.styles&&(this.$fastController.styles=this.styles)}connectedCallback(){null!==this.$presentation&&this.$presentation.applyTo(this),super.connectedCallback()}static compose(e){return(t={})=>new Fe(this===Be?class extends Be{}:this,e,t)}}function Pe(e,t,i){return"function"==typeof e?e(t,i):e}N([v],Be.prototype,"template",void 0),N([v],Be.prototype,"styles",void 0);class Fe{constructor(e,t,i){this.type=e,this.elementDefinition=t,this.overrideDefinition=i,this.definition=Object.assign(Object.assign({},this.elementDefinition),this.overrideDefinition)}register(e,t){const i=this.definition,s=this.overrideDefinition,o=`${i.prefix||t.elementPrefix}-${i.baseName}`;t.tryDefineElement({name:o,type:this.type,baseClass:this.elementDefinition.baseClass,callback:e=>{const t=new De(Pe(i.template,e,i),Pe(i.styles,e,i));e.definePresentation(t);let o=Pe(i.shadowOptions,e,i);e.shadowRootMode&&(o?s.shadowOptions||(o.mode=e.shadowRootMode):null!==o&&(o={mode:e.shadowRootMode})),e.defineElement({elementOptions:Pe(i.elementOptions,e,i),shadowOptions:o,attributes:Pe(i.attributes,e,i)})}})}}class Le{createCSS(){return""}createBehavior(){}}function He(e){const t=e.parentElement;if(t)return t;{const t=e.getRootNode();if(t.host instanceof HTMLElement)return t.host}return null}const Ve=document.createElement("div");class Me{setProperty(e,t){f.queueUpdate((()=>this.target.setProperty(e,t)))}removeProperty(e){f.queueUpdate((()=>this.target.removeProperty(e)))}}class ze extends Me{constructor(){super();const e=new CSSStyleSheet;this.target=e.cssRules[e.insertRule(":root{}")].style,document.adoptedStyleSheets=[...document.adoptedStyleSheets,e]}}class Ne extends Me{constructor(){super(),this.style=document.createElement("style"),document.head.appendChild(this.style);const{sheet:e}=this.style;if(e){const t=e.insertRule(":root{}",e.cssRules.length);this.target=e.cssRules[t].style}}}class je{constructor(e){this.store=new Map,this.target=null;const t=e.$fastController;this.style=document.createElement("style"),t.addStyles(this.style),m.getNotifier(t).subscribe(this,"isConnected"),this.handleChange(t,"isConnected")}targetChanged(){if(null!==this.target)for(const[e,t]of this.store.entries())this.target.setProperty(e,t)}setProperty(e,t){this.store.set(e,t),f.queueUpdate((()=>{null!==this.target&&this.target.setProperty(e,t)}))}removeProperty(e){this.store.delete(e),f.queueUpdate((()=>{null!==this.target&&this.target.removeProperty(e)}))}handleChange(e,t){const{sheet:i}=this.style;if(i){const e=i.insertRule(":host{}",i.cssRules.length);this.target=i.cssRules[e].style}else this.target=null}}N([v],je.prototype,"target",void 0);class _e{constructor(e){this.target=e.style}setProperty(e,t){f.queueUpdate((()=>this.target.setProperty(e,t)))}removeProperty(e){f.queueUpdate((()=>this.target.removeProperty(e)))}}class qe{setProperty(e,t){qe.properties[e]=t;for(const i of qe.roots.values())Ke.getOrCreate(qe.normalizeRoot(i)).setProperty(e,t)}removeProperty(e){delete qe.properties[e];for(const t of qe.roots.values())Ke.getOrCreate(qe.normalizeRoot(t)).removeProperty(e)}static registerRoot(e){const{roots:t}=qe;if(!t.has(e)){t.add(e);const i=Ke.getOrCreate(this.normalizeRoot(e));for(const e in qe.properties)i.setProperty(e,qe.properties[e])}}static unregisterRoot(e){const{roots:t}=qe;if(t.has(e)){t.delete(e);const i=Ke.getOrCreate(qe.normalizeRoot(e));for(const e in qe.properties)i.removeProperty(e)}}static normalizeRoot(e){return e===Ve?document:e}}qe.roots=new Set,qe.properties={};const Ue=new WeakMap,Ge=f.supportsAdoptedStyleSheets?class extends Me{constructor(e){super();const t=new CSSStyleSheet;t[I]=!0,this.target=t.cssRules[t.insertRule(":host{}")].style,e.$fastController.addStyles($.create([t]))}}:je,Ke=Object.freeze({getOrCreate(e){if(Ue.has(e))return Ue.get(e);let t;return t=e===Ve?new qe:e instanceof Document?f.supportsAdoptedStyleSheets?new ze:new Ne:e instanceof K?new Ge(e):new _e(e),Ue.set(e,t),t}});class We extends Le{constructor(e){super(),this.subscribers=new WeakMap,this._appliedTo=new Set,this.name=e.name,null!==e.cssCustomPropertyName&&(this.cssCustomProperty=`--${e.cssCustomPropertyName}`,this.cssVar=`var(${this.cssCustomProperty})`),this.id=We.uniqueId(),We.tokensById.set(this.id,this)}get appliedTo(){return[...this._appliedTo]}static from(e){return new We({name:"string"==typeof e?e:e.name,cssCustomPropertyName:"string"==typeof e?e:void 0===e.cssCustomPropertyName?e.name:e.cssCustomPropertyName})}static isCSSDesignToken(e){return"string"==typeof e.cssCustomProperty}static isDerivedDesignTokenValue(e){return"function"==typeof e}static getTokenById(e){return We.tokensById.get(e)}getOrCreateSubscriberSet(e=this){return this.subscribers.get(e)||this.subscribers.set(e,new Set)&&this.subscribers.get(e)}createCSS(){return this.cssVar||""}getValueFor(e){const t=Ze.getOrCreate(e).get(this);if(void 0!==t)return t;throw new Error(`Value could not be retrieved for token named "${this.name}". Ensure the value is set for ${e} or an ancestor of ${e}.`)}setValueFor(e,t){return this._appliedTo.add(e),t instanceof We&&(t=this.alias(t)),Ze.getOrCreate(e).set(this,t),this}deleteValueFor(e){return this._appliedTo.delete(e),Ze.existsFor(e)&&Ze.getOrCreate(e).delete(this),this}withDefault(e){return this.setValueFor(Ve,e),this}subscribe(e,t){const i=this.getOrCreateSubscriberSet(t);t&&!Ze.existsFor(t)&&Ze.getOrCreate(t),i.has(e)||i.add(e)}unsubscribe(e,t){const i=this.subscribers.get(t||this);i&&i.has(e)&&i.delete(e)}notify(e){const t=Object.freeze({token:this,target:e});this.subscribers.has(this)&&this.subscribers.get(this).forEach((e=>e.handleChange(t))),this.subscribers.has(e)&&this.subscribers.get(e).forEach((e=>e.handleChange(t)))}alias(e){return t=>e.getValueFor(t)}}We.uniqueId=(()=>{let e=0;return()=>(e++,e.toString(16))})(),We.tokensById=new Map;class Qe{constructor(e,t,i){this.source=e,this.token=t,this.node=i,this.dependencies=new Set,this.observer=m.binding(e,this,!1),this.observer.handleChange=this.observer.call,this.handleChange()}disconnect(){this.observer.disconnect()}handleChange(){try{this.node.store.set(this.token,this.observer.observe(this.node.target,C))}catch(e){console.error(e)}}}class Xe{constructor(){this.values=new Map}set(e,t){this.values.get(e)!==t&&(this.values.set(e,t),m.getNotifier(this).notify(e.id))}get(e){return m.track(this,e.id),this.values.get(e)}delete(e){this.values.delete(e),m.getNotifier(this).notify(e.id)}all(){return this.values.entries()}}const Ye=new WeakMap,Je=new WeakMap;class Ze{constructor(e){this.target=e,this.store=new Xe,this.children=[],this.assignedValues=new Map,this.reflecting=new Set,this.bindingObservers=new Map,this.tokenValueChangeHandler={handleChange:(e,t)=>{const i=We.getTokenById(t);i&&(i.notify(this.target),this.updateCSSTokenReflection(e,i))}},Ye.set(e,this),m.getNotifier(this.store).subscribe(this.tokenValueChangeHandler),e instanceof K?e.$fastController.addBehaviors([this]):e.isConnected&&this.bind()}static getOrCreate(e){return Ye.get(e)||new Ze(e)}static existsFor(e){return Ye.has(e)}static findParent(e){if(Ve!==e.target){let t=He(e.target);for(;null!==t;){if(Ye.has(t))return Ye.get(t);t=He(t)}return Ze.getOrCreate(Ve)}return null}static findClosestAssignedNode(e,t){let i=t;do{if(i.has(e))return i;i=i.parent?i.parent:i.target!==Ve?Ze.getOrCreate(Ve):null}while(null!==i);return null}get parent(){return Je.get(this)||null}updateCSSTokenReflection(e,t){if(We.isCSSDesignToken(t)){const i=this.parent,s=this.isReflecting(t);if(i){const o=i.get(t),n=e.get(t);o===n||s?o===n&&s&&this.stopReflectToCSS(t):this.reflectToCSS(t)}else s||this.reflectToCSS(t)}}has(e){return this.assignedValues.has(e)}get(e){const t=this.store.get(e);if(void 0!==t)return t;const i=this.getRaw(e);return void 0!==i?(this.hydrate(e,i),this.get(e)):void 0}getRaw(e){var t;return this.assignedValues.has(e)?this.assignedValues.get(e):null===(t=Ze.findClosestAssignedNode(e,this))||void 0===t?void 0:t.getRaw(e)}set(e,t){We.isDerivedDesignTokenValue(this.assignedValues.get(e))&&this.tearDownBindingObserver(e),this.assignedValues.set(e,t),We.isDerivedDesignTokenValue(t)?this.setupBindingObserver(e,t):this.store.set(e,t)}delete(e){this.assignedValues.delete(e),this.tearDownBindingObserver(e);const t=this.getRaw(e);t?this.hydrate(e,t):this.store.delete(e)}bind(){const e=Ze.findParent(this);e&&e.appendChild(this);for(const e of this.assignedValues.keys())e.notify(this.target)}unbind(){this.parent&&Je.get(this).removeChild(this);for(const e of this.bindingObservers.keys())this.tearDownBindingObserver(e)}appendChild(e){e.parent&&Je.get(e).removeChild(e);const t=this.children.filter((t=>e.contains(t)));Je.set(e,this),this.children.push(e),t.forEach((t=>e.appendChild(t))),m.getNotifier(this.store).subscribe(e);for(const[t,i]of this.store.all())e.hydrate(t,this.bindingObservers.has(t)?this.getRaw(t):i),e.updateCSSTokenReflection(e.store,t)}removeChild(e){const t=this.children.indexOf(e);if(-1!==t&&this.children.splice(t,1),m.getNotifier(this.store).unsubscribe(e),e.parent!==this)return!1;const i=Je.delete(e);for(const[t]of this.store.all())e.hydrate(t,e.getRaw(t)),e.updateCSSTokenReflection(e.store,t);return i}contains(e){return function(e,t){let i=t;for(;null!==i;){if(i===e)return!0;i=He(i)}return!1}(this.target,e.target)}reflectToCSS(e){this.isReflecting(e)||(this.reflecting.add(e),Ze.cssCustomPropertyReflector.startReflection(e,this.target))}stopReflectToCSS(e){this.isReflecting(e)&&(this.reflecting.delete(e),Ze.cssCustomPropertyReflector.stopReflection(e,this.target))}isReflecting(e){return this.reflecting.has(e)}handleChange(e,t){const i=We.getTokenById(t);i&&(this.hydrate(i,this.getRaw(i)),this.updateCSSTokenReflection(this.store,i))}hydrate(e,t){if(!this.has(e)){const i=this.bindingObservers.get(e);We.isDerivedDesignTokenValue(t)?i?i.source!==t&&(this.tearDownBindingObserver(e),this.setupBindingObserver(e,t)):this.setupBindingObserver(e,t):(i&&this.tearDownBindingObserver(e),this.store.set(e,t))}}setupBindingObserver(e,t){const i=new Qe(t,e,this);return this.bindingObservers.set(e,i),i}tearDownBindingObserver(e){return!!this.bindingObservers.has(e)&&(this.bindingObservers.get(e).disconnect(),this.bindingObservers.delete(e),!0)}}Ze.cssCustomPropertyReflector=new class{startReflection(e,t){e.subscribe(this,t),this.handleChange({token:e,target:t})}stopReflection(e,t){e.unsubscribe(this,t),this.remove(e,t)}handleChange(e){const{token:t,target:i}=e;this.add(t,i)}add(e,t){Ke.getOrCreate(t).setProperty(e.cssCustomProperty,this.resolveCSSValue(Ze.getOrCreate(t).get(e)))}remove(e,t){Ke.getOrCreate(t).removeProperty(e.cssCustomProperty)}resolveCSSValue(e){return e&&"function"==typeof e.createCSS?e.createCSS():e}},N([v],Ze.prototype,"children",void 0);const et=Object.freeze({create:function(e){return We.from(e)},notifyConnection:e=>!(!e.isConnected||!Ze.existsFor(e)||(Ze.getOrCreate(e).bind(),0)),notifyDisconnection:e=>!(e.isConnected||!Ze.existsFor(e)||(Ze.getOrCreate(e).unbind(),0)),registerRoot(e=Ve){qe.registerRoot(e)},unregisterRoot(e=Ve){qe.unregisterRoot(e)}}),tt=Object.freeze({definitionCallbackOnly:null,ignoreDuplicate:Symbol()}),it=new Map,st=new Map;let ot=null;const nt=ie.createInterface((e=>e.cachedCallback((e=>(null===ot&&(ot=new at(null,e)),ot))))),rt=Object.freeze({tagFor:e=>st.get(e),responsibleFor(e){const t=e.$$designSystem$$;return t||ie.findResponsibleContainer(e).get(nt)},getOrCreate(e){if(!e)return null===ot&&(ot=ie.getOrCreateDOMContainer().get(nt)),ot;const t=e.$$designSystem$$;if(t)return t;const i=ie.getOrCreateDOMContainer(e);if(i.has(nt,!1))return i.get(nt);{const t=new at(e,i);return i.register(Ce.instance(nt,t)),t}}});class at{constructor(e,t){this.owner=e,this.container=t,this.designTokensInitialized=!1,this.prefix="fast",this.shadowRootMode=void 0,this.disambiguate=()=>tt.definitionCallbackOnly,null!==e&&(e.$$designSystem$$=this)}withPrefix(e){return this.prefix=e,this}withShadowRootMode(e){return this.shadowRootMode=e,this}withElementDisambiguation(e){return this.disambiguate=e,this}withDesignTokenRoot(e){return this.designTokenRoot=e,this}register(...e){const t=this.container,i=[],s=this.disambiguate,o=this.shadowRootMode,n={elementPrefix:this.prefix,tryDefineElement(e,n,r){const a=function(e,t,i){return"string"==typeof e?{name:e,type:t,callback:i}:e}(e,n,r),{name:l,callback:d,baseClass:c}=a;let{type:h}=a,u=l,p=it.get(u),f=!0;for(;p;){const e=s(u,h,p);switch(e){case tt.ignoreDuplicate:return;case tt.definitionCallbackOnly:f=!1,p=void 0;break;default:u=e,p=it.get(u)}}f&&((st.has(h)||h===Be)&&(h=class extends h{}),it.set(u,h),st.set(h,u),c&&st.set(c,u)),i.push(new lt(t,u,h,o,d,f))}};this.designTokensInitialized||(this.designTokensInitialized=!0,null!==this.designTokenRoot&&et.registerRoot(this.designTokenRoot)),t.registerWithContext(n,...e);for(const e of i)e.callback(e),e.willDefine&&null!==e.definition&&e.definition.define();return this}}class lt{constructor(e,t,i,s,o,n){this.container=e,this.name=t,this.type=i,this.shadowRootMode=s,this.callback=o,this.willDefine=n,this.definition=null}definePresentation(e){Ae.define(this.name,e,this.container)}defineElement(e){this.definition=new z(this.type,Object.assign(Object.assign({},e),{name:this.name}))}tagFor(e){return rt.tagFor(e)}}function dt(e){return rt.getOrCreate(e).withPrefix("vscode")}class ct extends Be{constructor(){super(...arguments),this.generateBadgeStyle=()=>{if(!this.fill&&!this.color)return;const e=`background-color: var(--badge-fill-${this.fill});`,t=`color: var(--badge-color-${this.color});`;return this.fill&&!this.color?e:this.color&&!this.fill?t:`${t} ${e}`}}}N([L({attribute:"fill"})],ct.prototype,"fill",void 0),N([L({attribute:"color"})],ct.prototype,"color",void 0),N([L({mode:"boolean"})],ct.prototype,"circular",void 0);class ht{constructor(){this.targetIndex=0}}class ut extends ht{constructor(){super(...arguments),this.createPlaceholder=f.createInterpolationPlaceholder}}class pt extends ht{constructor(e,t,i){super(),this.name=e,this.behavior=t,this.options=i}createPlaceholder(e){return f.createCustomAttributePlaceholder(this.name,e)}createBehavior(e){return new this.behavior(e,this.options)}}function ft(e,t){this.source=e,this.context=t,null===this.bindingObserver&&(this.bindingObserver=m.binding(this.binding,this,this.isBindingVolatile)),this.updateTarget(this.bindingObserver.observe(e,t))}function bt(e,t){this.source=e,this.context=t,this.target.addEventListener(this.targetName,this)}function gt(){this.bindingObserver.disconnect(),this.source=null,this.context=null}function mt(){this.bindingObserver.disconnect(),this.source=null,this.context=null;const e=this.target.$fastView;void 0!==e&&e.isComposed&&(e.unbind(),e.needsBindOnly=!0)}function vt(){this.target.removeEventListener(this.targetName,this),this.source=null,this.context=null}function yt(e){f.setAttribute(this.target,this.targetName,e)}function xt(e){f.setBooleanAttribute(this.target,this.targetName,e)}function Ct(e){if(null==e&&(e=""),e.create){this.target.textContent="";let t=this.target.$fastView;void 0===t?t=e.create():this.target.$fastTemplate!==e&&(t.isComposed&&(t.remove(),t.unbind()),t=e.create()),t.isComposed?t.needsBindOnly&&(t.needsBindOnly=!1,t.bind(this.source,this.context)):(t.isComposed=!0,t.bind(this.source,this.context),t.insertBefore(this.target),this.target.$fastView=t,this.target.$fastTemplate=e)}else{const t=this.target.$fastView;void 0!==t&&t.isComposed&&(t.isComposed=!1,t.remove(),t.needsBindOnly?t.needsBindOnly=!1:t.unbind()),this.target.textContent=e}}function $t(e){this.target[this.targetName]=e}function wt(e){const t=this.classVersions||Object.create(null),i=this.target;let s=this.version||0;if(null!=e&&e.length){const o=e.split(/\s+/);for(let e=0,n=o.length;e<n;++e){const n=o[e];""!==n&&(t[n]=s,i.classList.add(n))}}if(this.classVersions=t,this.version=s+1,0!==s){s-=1;for(const e in t)t[e]===s&&i.classList.remove(e)}}class kt extends ut{constructor(e){super(),this.binding=e,this.bind=ft,this.unbind=gt,this.updateTarget=yt,this.isBindingVolatile=m.isVolatileBinding(this.binding)}get targetName(){return this.originalTargetName}set targetName(e){if(this.originalTargetName=e,void 0!==e)switch(e[0]){case":":if(this.cleanedTargetName=e.substr(1),this.updateTarget=$t,"innerHTML"===this.cleanedTargetName){const e=this.binding;this.binding=(t,i)=>f.createHTML(e(t,i))}break;case"?":this.cleanedTargetName=e.substr(1),this.updateTarget=xt;break;case"@":this.cleanedTargetName=e.substr(1),this.bind=bt,this.unbind=vt;break;default:this.cleanedTargetName=e,"class"===e&&(this.updateTarget=wt)}}targetAtContent(){this.updateTarget=Ct,this.unbind=mt}createBehavior(e){return new It(e,this.binding,this.isBindingVolatile,this.bind,this.unbind,this.updateTarget,this.cleanedTargetName)}}class It{constructor(e,t,i,s,o,n,r){this.source=null,this.context=null,this.bindingObserver=null,this.target=e,this.binding=t,this.isBindingVolatile=i,this.bind=s,this.unbind=o,this.updateTarget=n,this.targetName=r}handleChange(){this.updateTarget(this.bindingObserver.observe(this.source,this.context))}handleEvent(e){x.setEvent(e);const t=this.binding(this.source,this.context);x.setEvent(null),!0!==t&&e.preventDefault()}}let Tt=null;class Ot{addFactory(e){e.targetIndex=this.targetIndex,this.behaviorFactories.push(e)}captureContentBinding(e){e.targetAtContent(),this.addFactory(e)}reset(){this.behaviorFactories=[],this.targetIndex=-1}release(){Tt=this}static borrow(e){const t=Tt||new Ot;return t.directives=e,t.reset(),Tt=null,t}}function St(e){if(1===e.length)return e[0];let t;const i=e.length,s=e.map((e=>"string"==typeof e?()=>e:(t=e.targetName||t,e.binding))),o=new kt(((e,t)=>{let o="";for(let n=0;n<i;++n)o+=s[n](e,t);return o}));return o.targetName=t,o}const Et=p.length;function Rt(e,t){const i=t.split(u);if(1===i.length)return null;const s=[];for(let t=0,o=i.length;t<o;++t){const o=i[t],n=o.indexOf(p);let r;if(-1===n)r=o;else{const t=parseInt(o.substring(0,n));s.push(e.directives[t]),r=o.substring(n+Et)}""!==r&&s.push(r)}return s}function At(e,t,i=!1){const s=t.attributes;for(let o=0,n=s.length;o<n;++o){const r=s[o],a=r.value,l=Rt(e,a);let d=null;null===l?i&&(d=new kt((()=>a)),d.targetName=r.name):d=St(l),null!==d&&(t.removeAttributeNode(r),o--,n--,e.addFactory(d))}}function Dt(e,t,i){const s=Rt(e,t.textContent);if(null!==s){let o=t;for(let n=0,r=s.length;n<r;++n){const r=s[n],a=0===n?t:o.parentNode.insertBefore(document.createTextNode(""),o.nextSibling);"string"==typeof r?a.textContent=r:(a.textContent=" ",e.captureContentBinding(r)),o=a,e.targetIndex++,a!==t&&i.nextNode()}e.targetIndex--}}const Bt=document.createRange();class Pt{constructor(e,t){this.fragment=e,this.behaviors=t,this.source=null,this.context=null,this.firstChild=e.firstChild,this.lastChild=e.lastChild}appendTo(e){e.appendChild(this.fragment)}insertBefore(e){if(this.fragment.hasChildNodes())e.parentNode.insertBefore(this.fragment,e);else{const t=this.lastChild;if(e.previousSibling===t)return;const i=e.parentNode;let s,o=this.firstChild;for(;o!==t;)s=o.nextSibling,i.insertBefore(o,e),o=s;i.insertBefore(t,e)}}remove(){const e=this.fragment,t=this.lastChild;let i,s=this.firstChild;for(;s!==t;)i=s.nextSibling,e.appendChild(s),s=i;e.appendChild(t)}dispose(){const e=this.firstChild.parentNode,t=this.lastChild;let i,s=this.firstChild;for(;s!==t;)i=s.nextSibling,e.removeChild(s),s=i;e.removeChild(t);const o=this.behaviors,n=this.source;for(let e=0,t=o.length;e<t;++e)o[e].unbind(n)}bind(e,t){const i=this.behaviors;if(this.source!==e)if(null!==this.source){const s=this.source;this.source=e,this.context=t;for(let o=0,n=i.length;o<n;++o){const n=i[o];n.unbind(s),n.bind(e,t)}}else{this.source=e,this.context=t;for(let s=0,o=i.length;s<o;++s)i[s].bind(e,t)}}unbind(){if(null===this.source)return;const e=this.behaviors,t=this.source;for(let i=0,s=e.length;i<s;++i)e[i].unbind(t);this.source=null}static disposeContiguousBatch(e){if(0!==e.length){Bt.setStartBefore(e[0].firstChild),Bt.setEndAfter(e[e.length-1].lastChild),Bt.deleteContents();for(let t=0,i=e.length;t<i;++t){const i=e[t],s=i.behaviors,o=i.source;for(let e=0,t=s.length;e<t;++e)s[e].unbind(o)}}}}class Ft{constructor(e,t){this.behaviorCount=0,this.hasHostBehaviors=!1,this.fragment=null,this.targetOffset=0,this.viewBehaviorFactories=null,this.hostBehaviorFactories=null,this.html=e,this.directives=t}create(e){if(null===this.fragment){let e;const t=this.html;if("string"==typeof t){e=document.createElement("template"),e.innerHTML=f.createHTML(t);const i=e.content.firstElementChild;null!==i&&"TEMPLATE"===i.tagName&&(e=i)}else e=t;const i=function(e,t){const i=e.content;document.adoptNode(i);const s=Ot.borrow(t);At(s,e,!0);const o=s.behaviorFactories;s.reset();const n=f.createTemplateWalker(i);let r;for(;r=n.nextNode();)switch(s.targetIndex++,r.nodeType){case 1:At(s,r);break;case 3:Dt(s,r,n);break;case 8:f.isMarker(r)&&s.addFactory(t[f.extractDirectiveIndexFromMarker(r)])}let a=0;(f.isMarker(i.firstChild)||1===i.childNodes.length&&t.length)&&(i.insertBefore(document.createComment(""),i.firstChild),a=-1);const l=s.behaviorFactories;return s.release(),{fragment:i,viewBehaviorFactories:l,hostBehaviorFactories:o,targetOffset:a}}(e,this.directives);this.fragment=i.fragment,this.viewBehaviorFactories=i.viewBehaviorFactories,this.hostBehaviorFactories=i.hostBehaviorFactories,this.targetOffset=i.targetOffset,this.behaviorCount=this.viewBehaviorFactories.length+this.hostBehaviorFactories.length,this.hasHostBehaviors=this.hostBehaviorFactories.length>0}const t=this.fragment.cloneNode(!0),i=this.viewBehaviorFactories,s=new Array(this.behaviorCount),o=f.createTemplateWalker(t);let n=0,r=this.targetOffset,a=o.nextNode();for(let e=i.length;n<e;++n){const e=i[n],t=e.targetIndex;for(;null!==a;){if(r===t){s[n]=e.createBehavior(a);break}a=o.nextNode(),r++}}if(this.hasHostBehaviors){const t=this.hostBehaviorFactories;for(let i=0,o=t.length;i<o;++i,++n)s[n]=t[i].createBehavior(e)}return new Pt(t,s)}render(e,t,i){"string"==typeof t&&(t=document.getElementById(t)),void 0===i&&(i=t);const s=this.create(i);return s.bind(e,C),s.appendTo(t),s}}const Lt=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function Ht(e,...t){const i=[];let s="";for(let o=0,n=e.length-1;o<n;++o){const n=e[o];let r=t[o];if(s+=n,r instanceof Ft){const e=r;r=()=>e}if("function"==typeof r&&(r=new kt(r)),r instanceof ut){const e=Lt.exec(n);null!==e&&(r.targetName=e[2])}r instanceof ht?(s+=r.createPlaceholder(i.length),i.push(r)):s+=r}return s+=e[e.length-1],new Ft(s,i)}const Vt=(e,t)=>Ht`
    <template class="${e=>e.circular?"circular":""}">
        <div class="control" part="control" style="${e=>e.generateBadgeStyle()}">
            <slot></slot>
        </div>
    </template>
`;function Mt(e,...t){const{styles:i,behaviors:s}=function(e,t){const i=[];let s="";const o=[];for(let n=0,r=e.length-1;n<r;++n){s+=e[n];let r=t[n];if(r instanceof Le){const e=r.createBehavior();r=r.createCSS(),e&&o.push(e)}r instanceof $||r instanceof CSSStyleSheet?(""!==s.trim()&&(i.push(s),s=""),i.push(r)):s+=r}return s+=e[e.length-1],""!==s.trim()&&i.push(s),{styles:i,behaviors:o}}(e,t),o=$.create(i);return s.length&&o.withBehaviors(...s),o}function zt(e){return`:host([hidden]){display:none}:host{display:${e}}`}function Nt(e){const t=getComputedStyle(document.body),i=document.querySelector("body");if(i){const s=i.getAttribute("data-vscode-theme-kind");for(const[o,n]of e){let e=t.getPropertyValue(o).toString();if("vscode-high-contrast"===s)0===e.length&&n.name.includes("background")&&(e="transparent"),"button-icon-hover-background"===n.name&&(e="transparent");else if("vscode-high-contrast-light"===s){if(0===e.length&&n.name.includes("background"))switch(n.name){case"button-primary-hover-background":e="#0F4A85";break;case"button-secondary-hover-background":case"button-icon-hover-background":e="transparent"}}else"contrast-active-border"===n.name&&(e="transparent");n.setValueFor(i,e)}}}const jt=new Map;let _t=!1;function qt(e,t){const i=et.create(e);return t&&(t.includes("--fake-vscode-token")&&(t=`${t}-${"id"+Math.random().toString(16).slice(2)}`),jt.set(t,i)),_t||(function(e){window.addEventListener("load",(()=>{new MutationObserver((()=>{Nt(e)})).observe(document.body,{attributes:!0,attributeFilter:["class"]}),Nt(e)}))}(jt),_t=!0),i}const Ut=qt("background","--vscode-editor-background").withDefault("#1e1e1e"),Gt=qt("border-width").withDefault(1),Kt=qt("contrast-active-border","--vscode-contrastActiveBorder").withDefault("#f38518"),Wt=(qt("contrast-border","--vscode-contrastBorder").withDefault("#6fc3df"),qt("corner-radius").withDefault(0)),Qt=qt("corner-radius-round").withDefault(2),Xt=qt("design-unit").withDefault(4),Yt=qt("disabled-opacity").withDefault(.4),Jt=qt("focus-border","--vscode-focusBorder").withDefault("#007fd4"),Zt=qt("font-family","--vscode-font-family").withDefault("-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol"),ei=(qt("font-weight","--vscode-font-weight").withDefault("400"),qt("foreground","--vscode-foreground").withDefault("#cccccc")),ti=qt("input-height").withDefault("26"),ii=qt("input-min-width").withDefault("100px"),si=qt("type-ramp-base-font-size","--vscode-font-size").withDefault("13px"),oi=qt("type-ramp-base-line-height").withDefault("normal"),ni=qt("type-ramp-minus1-font-size").withDefault("11px"),ri=qt("type-ramp-minus1-line-height").withDefault("16px"),ai=(qt("type-ramp-minus2-font-size").withDefault("9px"),qt("type-ramp-minus2-line-height").withDefault("16px"),qt("type-ramp-plus1-font-size").withDefault("16px"),qt("type-ramp-plus1-line-height").withDefault("24px"),qt("scrollbarWidth").withDefault("10px")),li=qt("scrollbarHeight").withDefault("10px"),di=qt("scrollbar-slider-background","--vscode-scrollbarSlider-background").withDefault("#79797966"),ci=qt("scrollbar-slider-hover-background","--vscode-scrollbarSlider-hoverBackground").withDefault("#646464b3"),hi=qt("scrollbar-slider-active-background","--vscode-scrollbarSlider-activeBackground").withDefault("#bfbfbf66"),ui=qt("badge-background","--vscode-badge-background").withDefault("#4d4d4d"),pi=qt("badge-foreground","--vscode-badge-foreground").withDefault("#ffffff"),fi=qt("button-border","--vscode-button-border").withDefault("transparent"),bi=qt("button-icon-background").withDefault("transparent"),gi=qt("button-icon-corner-radius").withDefault("5px"),mi=qt("button-icon-outline-offset").withDefault(0),vi=qt("button-icon-hover-background","--fake-vscode-token").withDefault("rgba(90, 93, 94, 0.31)"),yi=qt("button-icon-padding").withDefault("3px"),xi=qt("button-primary-background","--vscode-button-background").withDefault("#0e639c"),Ci=qt("button-primary-foreground","--vscode-button-foreground").withDefault("#ffffff"),$i=qt("button-primary-hover-background","--vscode-button-hoverBackground").withDefault("#1177bb"),wi=qt("button-secondary-background","--vscode-button-secondaryBackground").withDefault("#3a3d41"),ki=qt("button-secondary-foreground","--vscode-button-secondaryForeground").withDefault("#ffffff"),Ii=qt("button-secondary-hover-background","--vscode-button-secondaryHoverBackground").withDefault("#45494e"),Ti=qt("button-padding-horizontal").withDefault("11px"),Oi=qt("button-padding-vertical").withDefault("4px"),Si=qt("checkbox-background","--vscode-checkbox-background").withDefault("#3c3c3c"),Ei=qt("checkbox-border","--vscode-checkbox-border").withDefault("#3c3c3c"),Ri=qt("checkbox-corner-radius").withDefault(3),Ai=(qt("checkbox-foreground","--vscode-checkbox-foreground").withDefault("#f0f0f0"),qt("list-active-selection-background","--vscode-list-activeSelectionBackground").withDefault("#094771")),Di=qt("list-active-selection-foreground","--vscode-list-activeSelectionForeground").withDefault("#ffffff"),Bi=qt("list-hover-background","--vscode-list-hoverBackground").withDefault("#2a2d2e"),Pi=qt("divider-background","--vscode-settings-dropdownListBorder").withDefault("#454545"),Fi=qt("dropdown-background","--vscode-dropdown-background").withDefault("#3c3c3c"),Li=qt("dropdown-border","--vscode-dropdown-border").withDefault("#3c3c3c"),Hi=(qt("dropdown-foreground","--vscode-dropdown-foreground").withDefault("#f0f0f0"),qt("dropdown-list-max-height").withDefault("200px")),Vi=qt("input-background","--vscode-input-background").withDefault("#3c3c3c"),Mi=qt("input-foreground","--vscode-input-foreground").withDefault("#cccccc"),zi=(qt("input-placeholder-foreground","--vscode-input-placeholderForeground").withDefault("#cccccc"),qt("link-active-foreground","--vscode-textLink-activeForeground").withDefault("#3794ff")),Ni=qt("link-foreground","--vscode-textLink-foreground").withDefault("#3794ff"),ji=qt("progress-background","--vscode-progressBar-background").withDefault("#0e70c0"),_i=qt("panel-tab-active-border","--vscode-panelTitle-activeBorder").withDefault("#e7e7e7"),qi=qt("panel-tab-active-foreground","--vscode-panelTitle-activeForeground").withDefault("#e7e7e7"),Ui=qt("panel-tab-foreground","--vscode-panelTitle-inactiveForeground").withDefault("#e7e7e799"),Gi=(qt("panel-view-background","--vscode-panel-background").withDefault("#1e1e1e"),qt("panel-view-border","--vscode-panel-border").withDefault("#80808059"),qt("tag-corner-radius").withDefault("2px"));class Ki extends ct{connectedCallback(){super.connectedCallback(),this.circular||(this.circular=!0)}}const Wi=Ki.compose({baseName:"badge",template:Vt,styles:(e,t)=>Mt`
	${zt("inline-block")} :host {
		box-sizing: border-box;
		font-family: ${Zt};
		font-size: ${ni};
		line-height: ${ri};
		text-align: center;
	}
	.control {
		align-items: center;
		background-color: ${ui};
		border: calc(${Gt} * 1px) solid ${fi};
		border-radius: 11px;
		box-sizing: border-box;
		color: ${pi};
		display: flex;
		height: calc(${Xt} * 4px);
		justify-content: center;
		min-width: calc(${Xt} * 4px + 2px);
		min-height: calc(${Xt} * 4px + 2px);
		padding: 3px 6px;
	}
`});Object.create,Object.create,"function"==typeof SuppressedError&&SuppressedError;class Qi{}N([L({attribute:"aria-atomic"})],Qi.prototype,"ariaAtomic",void 0),N([L({attribute:"aria-busy"})],Qi.prototype,"ariaBusy",void 0),N([L({attribute:"aria-controls"})],Qi.prototype,"ariaControls",void 0),N([L({attribute:"aria-current"})],Qi.prototype,"ariaCurrent",void 0),N([L({attribute:"aria-describedby"})],Qi.prototype,"ariaDescribedby",void 0),N([L({attribute:"aria-details"})],Qi.prototype,"ariaDetails",void 0),N([L({attribute:"aria-disabled"})],Qi.prototype,"ariaDisabled",void 0),N([L({attribute:"aria-errormessage"})],Qi.prototype,"ariaErrormessage",void 0),N([L({attribute:"aria-flowto"})],Qi.prototype,"ariaFlowto",void 0),N([L({attribute:"aria-haspopup"})],Qi.prototype,"ariaHaspopup",void 0),N([L({attribute:"aria-hidden"})],Qi.prototype,"ariaHidden",void 0),N([L({attribute:"aria-invalid"})],Qi.prototype,"ariaInvalid",void 0),N([L({attribute:"aria-keyshortcuts"})],Qi.prototype,"ariaKeyshortcuts",void 0),N([L({attribute:"aria-label"})],Qi.prototype,"ariaLabel",void 0),N([L({attribute:"aria-labelledby"})],Qi.prototype,"ariaLabelledby",void 0),N([L({attribute:"aria-live"})],Qi.prototype,"ariaLive",void 0),N([L({attribute:"aria-owns"})],Qi.prototype,"ariaOwns",void 0),N([L({attribute:"aria-relevant"})],Qi.prototype,"ariaRelevant",void 0),N([L({attribute:"aria-roledescription"})],Qi.prototype,"ariaRoledescription",void 0);class Xi{constructor(e,t){this.target=e,this.propertyName=t}bind(e){e[this.propertyName]=this.target}unbind(){}}function Yi(e){return new pt("fast-ref",Xi,e)}class Ji{handleStartContentChange(){this.startContainer.classList.toggle("start",this.start.assignedNodes().length>0)}handleEndContentChange(){this.endContainer.classList.toggle("end",this.end.assignedNodes().length>0)}}const Zi=(e,t)=>Ht`
    <span
        part="end"
        ${Yi("endContainer")}
        class=${e=>t.end?"end":void 0}
    >
        <slot name="end" ${Yi("end")} @slotchange="${e=>e.handleEndContentChange()}">
            ${t.end||""}
        </slot>
    </span>
`,es=(e,t)=>Ht`
    <span
        part="start"
        ${Yi("startContainer")}
        class="${e=>t.start?"start":void 0}"
    >
        <slot
            name="start"
            ${Yi("start")}
            @slotchange="${e=>e.handleStartContentChange()}"
        >
            ${t.start||""}
        </slot>
    </span>
`;function ts(e,...t){const i=D.locate(e);t.forEach((t=>{Object.getOwnPropertyNames(t.prototype).forEach((i=>{"constructor"!==i&&Object.defineProperty(e.prototype,i,Object.getOwnPropertyDescriptor(t.prototype,i))})),D.locate(t).forEach((e=>i.push(e)))}))}var is;Ht`
    <span part="end" ${Yi("endContainer")}>
        <slot
            name="end"
            ${Yi("end")}
            @slotchange="${e=>e.handleEndContentChange()}"
        ></slot>
    </span>
`,Ht`
    <span part="start" ${Yi("startContainer")}>
        <slot
            name="start"
            ${Yi("start")}
            @slotchange="${e=>e.handleStartContentChange()}"
        ></slot>
    </span>
`,function(e){e[e.alt=18]="alt",e[e.arrowDown=40]="arrowDown",e[e.arrowLeft=37]="arrowLeft",e[e.arrowRight=39]="arrowRight",e[e.arrowUp=38]="arrowUp",e[e.back=8]="back",e[e.backSlash=220]="backSlash",e[e.break=19]="break",e[e.capsLock=20]="capsLock",e[e.closeBracket=221]="closeBracket",e[e.colon=186]="colon",e[e.colon2=59]="colon2",e[e.comma=188]="comma",e[e.ctrl=17]="ctrl",e[e.delete=46]="delete",e[e.end=35]="end",e[e.enter=13]="enter",e[e.equals=187]="equals",e[e.equals2=61]="equals2",e[e.equals3=107]="equals3",e[e.escape=27]="escape",e[e.forwardSlash=191]="forwardSlash",e[e.function1=112]="function1",e[e.function10=121]="function10",e[e.function11=122]="function11",e[e.function12=123]="function12",e[e.function2=113]="function2",e[e.function3=114]="function3",e[e.function4=115]="function4",e[e.function5=116]="function5",e[e.function6=117]="function6",e[e.function7=118]="function7",e[e.function8=119]="function8",e[e.function9=120]="function9",e[e.home=36]="home",e[e.insert=45]="insert",e[e.menu=93]="menu",e[e.minus=189]="minus",e[e.minus2=109]="minus2",e[e.numLock=144]="numLock",e[e.numPad0=96]="numPad0",e[e.numPad1=97]="numPad1",e[e.numPad2=98]="numPad2",e[e.numPad3=99]="numPad3",e[e.numPad4=100]="numPad4",e[e.numPad5=101]="numPad5",e[e.numPad6=102]="numPad6",e[e.numPad7=103]="numPad7",e[e.numPad8=104]="numPad8",e[e.numPad9=105]="numPad9",e[e.numPadDivide=111]="numPadDivide",e[e.numPadDot=110]="numPadDot",e[e.numPadMinus=109]="numPadMinus",e[e.numPadMultiply=106]="numPadMultiply",e[e.numPadPlus=107]="numPadPlus",e[e.openBracket=219]="openBracket",e[e.pageDown=34]="pageDown",e[e.pageUp=33]="pageUp",e[e.period=190]="period",e[e.print=44]="print",e[e.quote=222]="quote",e[e.scrollLock=145]="scrollLock",e[e.shift=16]="shift",e[e.space=32]="space",e[e.tab=9]="tab",e[e.tilde=192]="tilde",e[e.windowsLeft=91]="windowsLeft",e[e.windowsOpera=219]="windowsOpera",e[e.windowsRight=92]="windowsRight"}(is||(is={}));const ss="ArrowDown",os="ArrowLeft",ns="ArrowRight",rs="ArrowUp",as="Enter",ls="Escape",ds="Home",cs="End",hs=" ",us="Tab",ps={ArrowDown:ss,ArrowLeft:os,ArrowRight:ns,ArrowUp:rs},fs="form-associated-proxy",bs="ElementInternals",gs=bs in window&&"setFormValue"in window[bs].prototype,ms=new WeakMap;function vs(e){const t=class extends e{constructor(...e){super(...e),this.dirtyValue=!1,this.disabled=!1,this.proxyEventsToBlock=["change","click"],this.proxyInitialized=!1,this.required=!1,this.initialValue=this.initialValue||"",this.elementInternals||(this.formResetCallback=this.formResetCallback.bind(this))}static get formAssociated(){return gs}get validity(){return this.elementInternals?this.elementInternals.validity:this.proxy.validity}get form(){return this.elementInternals?this.elementInternals.form:this.proxy.form}get validationMessage(){return this.elementInternals?this.elementInternals.validationMessage:this.proxy.validationMessage}get willValidate(){return this.elementInternals?this.elementInternals.willValidate:this.proxy.willValidate}get labels(){if(this.elementInternals)return Object.freeze(Array.from(this.elementInternals.labels));if(this.proxy instanceof HTMLElement&&this.proxy.ownerDocument&&this.id){const e=this.proxy.labels,t=Array.from(this.proxy.getRootNode().querySelectorAll(`[for='${this.id}']`)),i=e?t.concat(Array.from(e)):t;return Object.freeze(i)}return r}valueChanged(e,t){this.dirtyValue=!0,this.proxy instanceof HTMLElement&&(this.proxy.value=this.value),this.currentValue=this.value,this.setFormValue(this.value),this.validate()}currentValueChanged(){this.value=this.currentValue}initialValueChanged(e,t){this.dirtyValue||(this.value=this.initialValue,this.dirtyValue=!1)}disabledChanged(e,t){this.proxy instanceof HTMLElement&&(this.proxy.disabled=this.disabled),f.queueUpdate((()=>this.classList.toggle("disabled",this.disabled)))}nameChanged(e,t){this.proxy instanceof HTMLElement&&(this.proxy.name=this.name)}requiredChanged(e,t){this.proxy instanceof HTMLElement&&(this.proxy.required=this.required),f.queueUpdate((()=>this.classList.toggle("required",this.required))),this.validate()}get elementInternals(){if(!gs)return null;let e=ms.get(this);return e||(e=this.attachInternals(),ms.set(this,e)),e}connectedCallback(){super.connectedCallback(),this.addEventListener("keypress",this._keypressHandler),this.value||(this.value=this.initialValue,this.dirtyValue=!1),this.elementInternals||(this.attachProxy(),this.form&&this.form.addEventListener("reset",this.formResetCallback))}disconnectedCallback(){super.disconnectedCallback(),this.proxyEventsToBlock.forEach((e=>this.proxy.removeEventListener(e,this.stopPropagation))),!this.elementInternals&&this.form&&this.form.removeEventListener("reset",this.formResetCallback)}checkValidity(){return this.elementInternals?this.elementInternals.checkValidity():this.proxy.checkValidity()}reportValidity(){return this.elementInternals?this.elementInternals.reportValidity():this.proxy.reportValidity()}setValidity(e,t,i){this.elementInternals?this.elementInternals.setValidity(e,t,i):"string"==typeof t&&this.proxy.setCustomValidity(t)}formDisabledCallback(e){this.disabled=e}formResetCallback(){this.value=this.initialValue,this.dirtyValue=!1}attachProxy(){var e;this.proxyInitialized||(this.proxyInitialized=!0,this.proxy.style.display="none",this.proxyEventsToBlock.forEach((e=>this.proxy.addEventListener(e,this.stopPropagation))),this.proxy.disabled=this.disabled,this.proxy.required=this.required,"string"==typeof this.name&&(this.proxy.name=this.name),"string"==typeof this.value&&(this.proxy.value=this.value),this.proxy.setAttribute("slot",fs),this.proxySlot=document.createElement("slot"),this.proxySlot.setAttribute("name",fs)),null===(e=this.shadowRoot)||void 0===e||e.appendChild(this.proxySlot),this.appendChild(this.proxy)}detachProxy(){var e;this.removeChild(this.proxy),null===(e=this.shadowRoot)||void 0===e||e.removeChild(this.proxySlot)}validate(e){this.proxy instanceof HTMLElement&&this.setValidity(this.proxy.validity,this.proxy.validationMessage,e)}setFormValue(e,t){this.elementInternals&&this.elementInternals.setFormValue(e,t||e)}_keypressHandler(e){if(e.key===as&&this.form instanceof HTMLFormElement){const e=this.form.querySelector("[type=submit]");null==e||e.click()}}stopPropagation(e){e.stopPropagation()}};return L({mode:"boolean"})(t.prototype,"disabled"),L({mode:"fromView",attribute:"value"})(t.prototype,"initialValue"),L({attribute:"current-value"})(t.prototype,"currentValue"),L(t.prototype,"name"),L({mode:"boolean"})(t.prototype,"required"),v(t.prototype,"value"),t}function ys(e){class t extends(vs(e)){}class i extends t{constructor(...e){super(e),this.dirtyChecked=!1,this.checkedAttribute=!1,this.checked=!1,this.dirtyChecked=!1}checkedAttributeChanged(){this.defaultChecked=this.checkedAttribute}defaultCheckedChanged(){this.dirtyChecked||(this.checked=this.defaultChecked,this.dirtyChecked=!1)}checkedChanged(e,t){this.dirtyChecked||(this.dirtyChecked=!0),this.currentChecked=this.checked,this.updateForm(),this.proxy instanceof HTMLInputElement&&(this.proxy.checked=this.checked),void 0!==e&&this.$emit("change"),this.validate()}currentCheckedChanged(e,t){this.checked=this.currentChecked}updateForm(){const e=this.checked?this.value:null;this.setFormValue(e,e)}connectedCallback(){super.connectedCallback(),this.updateForm()}formResetCallback(){super.formResetCallback(),this.checked=!!this.checkedAttribute,this.dirtyChecked=!1}}return L({attribute:"checked",mode:"boolean"})(i.prototype,"checkedAttribute"),L({attribute:"current-checked",converter:B})(i.prototype,"currentChecked"),v(i.prototype,"defaultChecked"),v(i.prototype,"checked"),i}class xs extends Be{}class Cs extends(vs(xs)){constructor(){super(...arguments),this.proxy=document.createElement("input")}}class $s extends Cs{constructor(){super(...arguments),this.handleClick=e=>{var t;this.disabled&&(null===(t=this.defaultSlottedContent)||void 0===t?void 0:t.length)<=1&&e.stopPropagation()},this.handleSubmission=()=>{if(!this.form)return;const e=this.proxy.isConnected;e||this.attachProxy(),"function"==typeof this.form.requestSubmit?this.form.requestSubmit(this.proxy):this.proxy.click(),e||this.detachProxy()},this.handleFormReset=()=>{var e;null===(e=this.form)||void 0===e||e.reset()},this.handleUnsupportedDelegatesFocus=()=>{var e;window.ShadowRoot&&!window.ShadowRoot.prototype.hasOwnProperty("delegatesFocus")&&(null===(e=this.$fastController.definition.shadowOptions)||void 0===e?void 0:e.delegatesFocus)&&(this.focus=()=>{this.control.focus()})}}formactionChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formAction=this.formaction)}formenctypeChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formEnctype=this.formenctype)}formmethodChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formMethod=this.formmethod)}formnovalidateChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formNoValidate=this.formnovalidate)}formtargetChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formTarget=this.formtarget)}typeChanged(e,t){this.proxy instanceof HTMLInputElement&&(this.proxy.type=this.type),"submit"===t&&this.addEventListener("click",this.handleSubmission),"submit"===e&&this.removeEventListener("click",this.handleSubmission),"reset"===t&&this.addEventListener("click",this.handleFormReset),"reset"===e&&this.removeEventListener("click",this.handleFormReset)}validate(){super.validate(this.control)}connectedCallback(){var e;super.connectedCallback(),this.proxy.setAttribute("type",this.type),this.handleUnsupportedDelegatesFocus();const t=Array.from(null===(e=this.control)||void 0===e?void 0:e.children);t&&t.forEach((e=>{e.addEventListener("click",this.handleClick)}))}disconnectedCallback(){var e;super.disconnectedCallback();const t=Array.from(null===(e=this.control)||void 0===e?void 0:e.children);t&&t.forEach((e=>{e.removeEventListener("click",this.handleClick)}))}}N([L({mode:"boolean"})],$s.prototype,"autofocus",void 0),N([L({attribute:"form"})],$s.prototype,"formId",void 0),N([L],$s.prototype,"formaction",void 0),N([L],$s.prototype,"formenctype",void 0),N([L],$s.prototype,"formmethod",void 0),N([L({mode:"boolean"})],$s.prototype,"formnovalidate",void 0),N([L],$s.prototype,"formtarget",void 0),N([L],$s.prototype,"type",void 0),N([v],$s.prototype,"defaultSlottedContent",void 0);class ws{}function ks(e){return e?function(t,i,s){return 1===t.nodeType&&t.matches(e)}:function(e,t,i){return 1===e.nodeType}}N([L({attribute:"aria-expanded"})],ws.prototype,"ariaExpanded",void 0),N([L({attribute:"aria-pressed"})],ws.prototype,"ariaPressed",void 0),ts(ws,Qi),ts($s,Ji,ws);class Is{constructor(e,t){this.target=e,this.options=t,this.source=null}bind(e){const t=this.options.property;this.shouldUpdate=m.getAccessors(e).some((e=>e.name===t)),this.source=e,this.updateTarget(this.computeNodes()),this.shouldUpdate&&this.observe()}unbind(){this.updateTarget(r),this.source=null,this.shouldUpdate&&this.disconnect()}handleEvent(){this.updateTarget(this.computeNodes())}computeNodes(){let e=this.getNodes();return void 0!==this.options.filter&&(e=e.filter(this.options.filter)),e}updateTarget(e){this.source[this.options.property]=e}}class Ts extends Is{constructor(e,t){super(e,t)}observe(){this.target.addEventListener("slotchange",this)}disconnect(){this.target.removeEventListener("slotchange",this)}getNodes(){return this.target.assignedNodes(this.options)}}function Os(e){return"string"==typeof e&&(e={property:e}),new pt("fast-slotted",Ts,e)}let Ss;const Es=function(){if("boolean"==typeof Ss)return Ss;if("undefined"==typeof window||!window.document||!window.document.createElement)return Ss=!1,Ss;const e=document.createElement("style"),t=function(){const e=document.querySelector('meta[property="csp-nonce"]');return e?e.getAttribute("content"):null}();null!==t&&e.setAttribute("nonce",t),document.head.appendChild(e);try{e.sheet.insertRule("foo:focus-visible {color:inherit}",0),Ss=!0}catch(e){Ss=!1}finally{document.head.removeChild(e)}return Ss}()?"focus-visible":"focus",Rs="not-allowed",As=Mt`
	${zt("inline-flex")} :host {
		outline: none;
		font-family: ${Zt};
		font-size: ${si};
		line-height: ${oi};
		color: ${Ci};
		background: ${xi};
		border-radius: calc(${Qt} * 1px);
		fill: currentColor;
		cursor: pointer;
	}
	.control {
		background: transparent;
		height: inherit;
		flex-grow: 1;
		box-sizing: border-box;
		display: inline-flex;
		justify-content: center;
		align-items: center;
		padding: ${Oi} ${Ti};
		white-space: wrap;
		outline: none;
		text-decoration: none;
		border: calc(${Gt} * 1px) solid ${fi};
		color: inherit;
		border-radius: inherit;
		fill: inherit;
		cursor: inherit;
		font-family: inherit;
	}
	:host(:hover) {
		background: ${$i};
	}
	:host(:active) {
		background: ${xi};
	}
	.control:${Es} {
		outline: calc(${Gt} * 1px) solid ${Jt};
		outline-offset: calc(${Gt} * 2px);
	}
	.control::-moz-focus-inner {
		border: 0;
	}
	:host([disabled]) {
		opacity: ${Yt};
		background: ${xi};
		cursor: ${Rs};
	}
	.content {
		display: flex;
	}
	.start {
		display: flex;
	}
	::slotted(svg),
	::slotted(span) {
		width: calc(${Xt} * 4px);
		height: calc(${Xt} * 4px);
	}
	.start {
		margin-inline-end: 8px;
	}
`,Ds=Mt`
	:host([appearance='primary']) {
		background: ${xi};
		color: ${Ci};
	}
	:host([appearance='primary']:hover) {
		background: ${$i};
	}
	:host([appearance='primary']:active) .control:active {
		background: ${xi};
	}
	:host([appearance='primary']) .control:${Es} {
		outline: calc(${Gt} * 1px) solid ${Jt};
		outline-offset: calc(${Gt} * 2px);
	}
	:host([appearance='primary'][disabled]) {
		background: ${xi};
	}
`,Bs=Mt`
	:host([appearance='secondary']) {
		background: ${wi};
		color: ${ki};
	}
	:host([appearance='secondary']:hover) {
		background: ${Ii};
	}
	:host([appearance='secondary']:active) .control:active {
		background: ${wi};
	}
	:host([appearance='secondary']) .control:${Es} {
		outline: calc(${Gt} * 1px) solid ${Jt};
		outline-offset: calc(${Gt} * 2px);
	}
	:host([appearance='secondary'][disabled]) {
		background: ${wi};
	}
`,Ps=Mt`
	:host([appearance='icon']) {
		background: ${bi};
		border-radius: ${gi};
		color: ${ei};
	}
	:host([appearance='icon']:hover) {
		background: ${vi};
		outline: 1px dotted ${Kt};
		outline-offset: -1px;
	}
	:host([appearance='icon']) .control {
		padding: ${yi};
		border: none;
	}
	:host([appearance='icon']:active) .control:active {
		background: ${vi};
	}
	:host([appearance='icon']) .control:${Es} {
		outline: calc(${Gt} * 1px) solid ${Jt};
		outline-offset: ${mi};
	}
	:host([appearance='icon'][disabled]) {
		background: ${bi};
	}
`;class Fs extends $s{connectedCallback(){if(super.connectedCallback(),!this.appearance){const e=this.getAttribute("appearance");this.appearance=e}}attributeChangedCallback(e,t,i){"appearance"===e&&"icon"===i&&(this.getAttribute("aria-label")||(this.ariaLabel="Icon Button")),"aria-label"===e&&(this.ariaLabel=i),"disabled"===e&&(this.disabled=null!==i)}}!function(e,t,i,s){var o,n=arguments.length,r=n<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,s);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(r=(n<3?o(r):n>3?o(t,i,r):o(t,i))||r);n>3&&r&&Object.defineProperty(t,i,r)}([L],Fs.prototype,"appearance",void 0);const Ls=Fs.compose({baseName:"button",template:(e,t)=>Ht`
    <button
        class="control"
        part="control"
        ?autofocus="${e=>e.autofocus}"
        ?disabled="${e=>e.disabled}"
        form="${e=>e.formId}"
        formaction="${e=>e.formaction}"
        formenctype="${e=>e.formenctype}"
        formmethod="${e=>e.formmethod}"
        formnovalidate="${e=>e.formnovalidate}"
        formtarget="${e=>e.formtarget}"
        name="${e=>e.name}"
        type="${e=>e.type}"
        value="${e=>e.value}"
        aria-atomic="${e=>e.ariaAtomic}"
        aria-busy="${e=>e.ariaBusy}"
        aria-controls="${e=>e.ariaControls}"
        aria-current="${e=>e.ariaCurrent}"
        aria-describedby="${e=>e.ariaDescribedby}"
        aria-details="${e=>e.ariaDetails}"
        aria-disabled="${e=>e.ariaDisabled}"
        aria-errormessage="${e=>e.ariaErrormessage}"
        aria-expanded="${e=>e.ariaExpanded}"
        aria-flowto="${e=>e.ariaFlowto}"
        aria-haspopup="${e=>e.ariaHaspopup}"
        aria-hidden="${e=>e.ariaHidden}"
        aria-invalid="${e=>e.ariaInvalid}"
        aria-keyshortcuts="${e=>e.ariaKeyshortcuts}"
        aria-label="${e=>e.ariaLabel}"
        aria-labelledby="${e=>e.ariaLabelledby}"
        aria-live="${e=>e.ariaLive}"
        aria-owns="${e=>e.ariaOwns}"
        aria-pressed="${e=>e.ariaPressed}"
        aria-relevant="${e=>e.ariaRelevant}"
        aria-roledescription="${e=>e.ariaRoledescription}"
        ${Yi("control")}
    >
        ${es(0,t)}
        <span class="content" part="content">
            <slot ${Os("defaultSlottedContent")}></slot>
        </span>
        ${Zi(0,t)}
    </button>
`,styles:(e,t)=>Mt`
	${As}
	${Ds}
	${Bs}
	${Ps}
`,shadowOptions:{delegatesFocus:!0}});class Hs extends Be{}class Vs extends(ys(Hs)){constructor(){super(...arguments),this.proxy=document.createElement("input")}}class Ms extends Vs{constructor(){super(),this.initialValue="on",this.indeterminate=!1,this.keypressHandler=e=>{this.readOnly||e.key!==hs||(this.indeterminate&&(this.indeterminate=!1),this.checked=!this.checked)},this.clickHandler=e=>{this.disabled||this.readOnly||(this.indeterminate&&(this.indeterminate=!1),this.checked=!this.checked)},this.proxy.setAttribute("type","checkbox")}readOnlyChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.readOnly=this.readOnly)}}N([L({attribute:"readonly",mode:"boolean"})],Ms.prototype,"readOnly",void 0),N([v],Ms.prototype,"defaultSlottedNodes",void 0),N([v],Ms.prototype,"indeterminate",void 0);class zs extends Ms{connectedCallback(){super.connectedCallback(),this.textContent?this.setAttribute("aria-label",this.textContent):this.setAttribute("aria-label","Checkbox")}}const Ns=zs.compose({baseName:"checkbox",template:(e,t)=>Ht`
    <template
        role="checkbox"
        aria-checked="${e=>e.checked}"
        aria-required="${e=>e.required}"
        aria-disabled="${e=>e.disabled}"
        aria-readonly="${e=>e.readOnly}"
        tabindex="${e=>e.disabled?null:0}"
        @keypress="${(e,t)=>e.keypressHandler(t.event)}"
        @click="${(e,t)=>e.clickHandler(t.event)}"
        class="${e=>e.readOnly?"readonly":""} ${e=>e.checked?"checked":""} ${e=>e.indeterminate?"indeterminate":""}"
    >
        <div part="control" class="control">
            <slot name="checked-indicator">
                ${t.checkedIndicator||""}
            </slot>
            <slot name="indeterminate-indicator">
                ${t.indeterminateIndicator||""}
            </slot>
        </div>
        <label
            part="label"
            class="${e=>e.defaultSlottedNodes&&e.defaultSlottedNodes.length?"label":"label label__hidden"}"
        >
            <slot ${Os("defaultSlottedNodes")}></slot>
        </label>
    </template>
`,styles:(e,t)=>Mt`
	${zt("inline-flex")} :host {
		align-items: center;
		outline: none;
		margin: calc(${Xt} * 1px) 0;
		user-select: none;
		font-size: ${si};
		line-height: ${oi};
	}
	.control {
		position: relative;
		width: calc(${Xt} * 4px + 2px);
		height: calc(${Xt} * 4px + 2px);
		box-sizing: border-box;
		border-radius: calc(${Ri} * 1px);
		border: calc(${Gt} * 1px) solid ${Ei};
		background: ${Si};
		outline: none;
		cursor: pointer;
	}
	.label {
		font-family: ${Zt};
		color: ${ei};
		padding-inline-start: calc(${Xt} * 2px + 2px);
		margin-inline-end: calc(${Xt} * 2px + 2px);
		cursor: pointer;
	}
	.label__hidden {
		display: none;
		visibility: hidden;
	}
	.checked-indicator {
		width: 100%;
		height: 100%;
		display: block;
		fill: ${ei};
		opacity: 0;
		pointer-events: none;
	}
	.indeterminate-indicator {
		border-radius: 2px;
		background: ${ei};
		position: absolute;
		top: 50%;
		left: 50%;
		width: 50%;
		height: 50%;
		transform: translate(-50%, -50%);
		opacity: 0;
	}
	:host(:enabled) .control:hover {
		background: ${Si};
		border-color: ${Ei};
	}
	:host(:enabled) .control:active {
		background: ${Si};
		border-color: ${Jt};
	}
	:host(:${Es}) .control {
		border: calc(${Gt} * 1px) solid ${Jt};
	}
	:host(.disabled) .label,
	:host(.readonly) .label,
	:host(.readonly) .control,
	:host(.disabled) .control {
		cursor: ${Rs};
	}
	:host(.checked:not(.indeterminate)) .checked-indicator,
	:host(.indeterminate) .indeterminate-indicator {
		opacity: 1;
	}
	:host(.disabled) {
		opacity: ${Yt};
	}
`,checkedIndicator:'\n\t\t<svg \n\t\t\tpart="checked-indicator"\n\t\t\tclass="checked-indicator"\n\t\t\twidth="16" \n\t\t\theight="16" \n\t\t\tviewBox="0 0 16 16" \n\t\t\txmlns="http://www.w3.org/2000/svg" \n\t\t\tfill="currentColor"\n\t\t>\n\t\t\t<path \n\t\t\t\tfill-rule="evenodd" \n\t\t\t\tclip-rule="evenodd" \n\t\t\t\td="M14.431 3.323l-8.47 10-.79-.036-3.35-4.77.818-.574 2.978 4.24 8.051-9.506.764.646z"\n\t\t\t/>\n\t\t</svg>\n\t',indeterminateIndicator:'\n\t\t<div part="indeterminate-indicator" class="indeterminate-indicator"></div>\n\t'});function js(e,t,i){return{index:e,removed:t,addedCount:i}}function _s(e,t,i,s,o,n){let a=0,l=0;const d=Math.min(i-t,n-o);if(0===t&&0===o&&(a=function(e,t,i){for(let s=0;s<i;++s)if(e[s]!==t[s])return s;return i}(e,s,d)),i===e.length&&n===s.length&&(l=function(e,t,i){let s=e.length,o=t.length,n=0;for(;n<i&&e[--s]===t[--o];)n++;return n}(e,s,d-a)),o+=a,n-=l,(i-=l)-(t+=a)==0&&n-o==0)return r;if(t===i){const e=js(t,[],0);for(;o<n;)e.removed.push(s[o++]);return[e]}if(o===n)return[js(t,[],i-t)];const c=function(e){let t=e.length-1,i=e[0].length-1,s=e[t][i];const o=[];for(;t>0||i>0;){if(0===t){o.push(2),i--;continue}if(0===i){o.push(3),t--;continue}const n=e[t-1][i-1],r=e[t-1][i],a=e[t][i-1];let l;l=r<a?r<n?r:n:a<n?a:n,l===n?(n===s?o.push(0):(o.push(1),s=n),t--,i--):l===r?(o.push(3),t--,s=r):(o.push(2),i--,s=a)}return o.reverse(),o}(function(e,t,i,s,o,n){const r=n-o+1,a=i-t+1,l=new Array(r);let d,c;for(let e=0;e<r;++e)l[e]=new Array(a),l[e][0]=e;for(let e=0;e<a;++e)l[0][e]=e;for(let i=1;i<r;++i)for(let n=1;n<a;++n)e[t+n-1]===s[o+i-1]?l[i][n]=l[i-1][n-1]:(d=l[i-1][n]+1,c=l[i][n-1]+1,l[i][n]=d<c?d:c);return l}(e,t,i,s,o,n)),h=[];let u,p=t,f=o;for(let e=0;e<c.length;++e)switch(c[e]){case 0:void 0!==u&&(h.push(u),u=void 0),p++,f++;break;case 1:void 0===u&&(u=js(p,[],0)),u.addedCount++,p++,u.removed.push(s[f]),f++;break;case 2:void 0===u&&(u=js(p,[],0)),u.addedCount++,p++;break;case 3:void 0===u&&(u=js(p,[],0)),u.removed.push(s[f]),f++}return void 0!==u&&h.push(u),h}const qs=Array.prototype.push;function Us(e,t,i,s){const o=js(t,i,s);let n=!1,r=0;for(let t=0;t<e.length;t++){const i=e[t];if(i.index+=r,n)continue;const s=(a=o.index,l=o.index+o.removed.length,d=i.index,c=i.index+i.addedCount,l<d||c<a?-1:l===d||c===a?0:a<d?l<c?l-d:c-d:c<l?c-a:l-a);if(s>=0){e.splice(t,1),t--,r-=i.addedCount-i.removed.length,o.addedCount+=i.addedCount-s;const a=o.removed.length+i.removed.length-s;if(o.addedCount||a){let e=i.removed;if(o.index<i.index){const t=o.removed.slice(0,i.index-o.index);qs.apply(t,e),e=t}if(o.index+o.removed.length>i.index+i.addedCount){const t=o.removed.slice(i.index+i.addedCount-o.index);qs.apply(e,t)}o.removed=e,i.index<o.index&&(o.index=i.index)}else n=!0}else if(o.index<i.index){n=!0,e.splice(t,0,o),t++;const s=o.addedCount-o.removed.length;i.index+=s,r+=s}}var a,l,d,c;n||e.push(o)}let Gs=!1;function Ks(e,t){let i=e.index;const s=t.length;return i>s?i=s-e.addedCount:i<0&&(i=s+e.removed.length+i-e.addedCount),i<0&&(i=0),e.index=i,e}class Ws extends b{constructor(e){super(e),this.oldCollection=void 0,this.splices=void 0,this.needsQueue=!0,this.call=this.flush,Reflect.defineProperty(e,"$fastController",{value:this,enumerable:!1})}subscribe(e){this.flush(),super.subscribe(e)}addSplice(e){void 0===this.splices?this.splices=[e]:this.splices.push(e),this.needsQueue&&(this.needsQueue=!1,f.queueUpdate(this))}reset(e){this.oldCollection=e,this.needsQueue&&(this.needsQueue=!1,f.queueUpdate(this))}flush(){const e=this.splices,t=this.oldCollection;if(void 0===e&&void 0===t)return;this.needsQueue=!0,this.splices=void 0,this.oldCollection=void 0;const i=void 0===t?function(e,t){let i=[];const s=function(e){const t=[];for(let i=0,s=e.length;i<s;i++){const s=e[i];Us(t,s.index,s.removed,s.addedCount)}return t}(t);for(let t=0,o=s.length;t<o;++t){const o=s[t];1!==o.addedCount||1!==o.removed.length?i=i.concat(_s(e,o.index,o.index+o.addedCount,o.removed,0,o.removed.length)):o.removed[0]!==e[o.index]&&i.push(o)}return i}(this.source,e):_s(this.source,0,this.source.length,t,0,t.length);this.notify(i)}}function Qs(e,t,i,s){e.bind(t[i],s)}function Xs(e,t,i,s){const o=Object.create(s);o.index=i,o.length=t.length,e.bind(t[i],o)}Object.freeze({positioning:!1,recycle:!0});class Ys{constructor(e,t,i,s,o,n){this.location=e,this.itemsBinding=t,this.templateBinding=s,this.options=n,this.source=null,this.views=[],this.items=null,this.itemsObserver=null,this.originalContext=void 0,this.childContext=void 0,this.bindView=Qs,this.itemsBindingObserver=m.binding(t,this,i),this.templateBindingObserver=m.binding(s,this,o),n.positioning&&(this.bindView=Xs)}bind(e,t){this.source=e,this.originalContext=t,this.childContext=Object.create(t),this.childContext.parent=e,this.childContext.parentContext=this.originalContext,this.items=this.itemsBindingObserver.observe(e,this.originalContext),this.template=this.templateBindingObserver.observe(e,this.originalContext),this.observeItems(!0),this.refreshAllViews()}unbind(){this.source=null,this.items=null,null!==this.itemsObserver&&this.itemsObserver.unsubscribe(this),this.unbindAllViews(),this.itemsBindingObserver.disconnect(),this.templateBindingObserver.disconnect()}handleChange(e,t){e===this.itemsBinding?(this.items=this.itemsBindingObserver.observe(this.source,this.originalContext),this.observeItems(),this.refreshAllViews()):e===this.templateBinding?(this.template=this.templateBindingObserver.observe(this.source,this.originalContext),this.refreshAllViews(!0)):this.updateViews(t)}observeItems(e=!1){if(!this.items)return void(this.items=r);const t=this.itemsObserver,i=this.itemsObserver=m.getNotifier(this.items),s=t!==i;s&&null!==t&&t.unsubscribe(this),(s||e)&&i.subscribe(this)}updateViews(e){const t=this.childContext,i=this.views,s=this.bindView,o=this.items,n=this.template,r=this.options.recycle,a=[];let l=0,d=0;for(let c=0,h=e.length;c<h;++c){const h=e[c],u=h.removed;let p=0,f=h.index;const b=f+h.addedCount,g=i.splice(h.index,u.length),m=d=a.length+g.length;for(;f<b;++f){const e=i[f],c=e?e.firstChild:this.location;let h;r&&d>0?(p<=m&&g.length>0?(h=g[p],p++):(h=a[l],l++),d--):h=n.create(),i.splice(f,0,h),s(h,o,f,t),h.insertBefore(c)}g[p]&&a.push(...g.slice(p))}for(let e=l,t=a.length;e<t;++e)a[e].dispose();if(this.options.positioning)for(let e=0,t=i.length;e<t;++e){const s=i[e].context;s.length=t,s.index=e}}refreshAllViews(e=!1){const t=this.items,i=this.childContext,s=this.template,o=this.location,n=this.bindView;let r=t.length,a=this.views,l=a.length;if(0!==r&&!e&&this.options.recycle||(Pt.disposeContiguousBatch(a),l=0),0===l){this.views=a=new Array(r);for(let e=0;e<r;++e){const r=s.create();n(r,t,e,i),a[e]=r,r.insertBefore(o)}}else{let e=0;for(;e<r;++e)if(e<l)n(a[e],t,e,i);else{const r=s.create();n(r,t,e,i),a.push(r),r.insertBefore(o)}const d=a.splice(e,l-e);for(e=0,r=d.length;e<r;++e)d[e].dispose()}}unbindAllViews(){const e=this.views;for(let t=0,i=e.length;t<i;++t)e[t].unbind()}}class Js extends ht{constructor(e,t,i){super(),this.itemsBinding=e,this.templateBinding=t,this.options=i,this.createPlaceholder=f.createBlockPlaceholder,function(){if(Gs)return;Gs=!0,m.setArrayObserverFactory((e=>new Ws(e)));const e=Array.prototype;if(e.$fastPatch)return;Reflect.defineProperty(e,"$fastPatch",{value:1,enumerable:!1});const t=e.pop,i=e.push,s=e.reverse,o=e.shift,n=e.sort,r=e.splice,a=e.unshift;e.pop=function(){const e=this.length>0,i=t.apply(this,arguments),s=this.$fastController;return void 0!==s&&e&&s.addSplice(js(this.length,[i],0)),i},e.push=function(){const e=i.apply(this,arguments),t=this.$fastController;return void 0!==t&&t.addSplice(Ks(js(this.length-arguments.length,[],arguments.length),this)),e},e.reverse=function(){let e;const t=this.$fastController;void 0!==t&&(t.flush(),e=this.slice());const i=s.apply(this,arguments);return void 0!==t&&t.reset(e),i},e.shift=function(){const e=this.length>0,t=o.apply(this,arguments),i=this.$fastController;return void 0!==i&&e&&i.addSplice(js(0,[t],0)),t},e.sort=function(){let e;const t=this.$fastController;void 0!==t&&(t.flush(),e=this.slice());const i=n.apply(this,arguments);return void 0!==t&&t.reset(e),i},e.splice=function(){const e=r.apply(this,arguments),t=this.$fastController;return void 0!==t&&t.addSplice(Ks(js(+arguments[0],e,arguments.length>2?arguments.length-2:0),this)),e},e.unshift=function(){const e=a.apply(this,arguments),t=this.$fastController;return void 0!==t&&t.addSplice(Ks(js(0,[],arguments.length),this)),e}}(),this.isItemsBindingVolatile=m.isVolatileBinding(e),this.isTemplateBindingVolatile=m.isVolatileBinding(t)}createBehavior(e){return new Ys(e,this.itemsBinding,this.isItemsBindingVolatile,this.templateBinding,this.isTemplateBindingVolatile,this.options)}}const Zs="focus",eo="focusin",to="focusout",io="keydown",so={none:"none",default:"default",sticky:"sticky"},oo={default:"default",columnHeader:"columnheader",rowHeader:"rowheader"},no={default:"default",header:"header",stickyHeader:"sticky-header"};class ro extends Be{constructor(){super(),this.noTabbing=!1,this.generateHeader=so.default,this.rowsData=[],this.columnDefinitions=null,this.focusRowIndex=0,this.focusColumnIndex=0,this.rowsPlaceholder=null,this.generatedHeader=null,this.isUpdatingFocus=!1,this.pendingFocusUpdate=!1,this.rowindexUpdateQueued=!1,this.columnDefinitionsStale=!0,this.generatedGridTemplateColumns="",this.focusOnCell=(e,t,i)=>{if(0===this.rowElements.length)return this.focusRowIndex=0,void(this.focusColumnIndex=0);const s=Math.max(0,Math.min(this.rowElements.length-1,e)),o=this.rowElements[s].querySelectorAll('[role="cell"], [role="gridcell"], [role="columnheader"], [role="rowheader"]'),n=o[Math.max(0,Math.min(o.length-1,t))];i&&this.scrollHeight!==this.clientHeight&&(s<this.focusRowIndex&&this.scrollTop>0||s>this.focusRowIndex&&this.scrollTop<this.scrollHeight-this.clientHeight)&&n.scrollIntoView({block:"center",inline:"center"}),n.focus()},this.onChildListChange=(e,t)=>{e&&e.length&&(e.forEach((e=>{e.addedNodes.forEach((e=>{1===e.nodeType&&"row"===e.getAttribute("role")&&(e.columnDefinitions=this.columnDefinitions)}))})),this.queueRowIndexUpdate())},this.queueRowIndexUpdate=()=>{this.rowindexUpdateQueued||(this.rowindexUpdateQueued=!0,f.queueUpdate(this.updateRowIndexes))},this.updateRowIndexes=()=>{let e=this.gridTemplateColumns;if(void 0===e){if(""===this.generatedGridTemplateColumns&&this.rowElements.length>0){const e=this.rowElements[0];this.generatedGridTemplateColumns=new Array(e.cellElements.length).fill("1fr").join(" ")}e=this.generatedGridTemplateColumns}this.rowElements.forEach(((t,i)=>{const s=t;s.rowIndex=i,s.gridTemplateColumns=e,this.columnDefinitionsStale&&(s.columnDefinitions=this.columnDefinitions)})),this.rowindexUpdateQueued=!1,this.columnDefinitionsStale=!1}}static generateTemplateColumns(e){let t="";return e.forEach((e=>{t=`${t}${""===t?"":" "}1fr`})),t}noTabbingChanged(){this.$fastController.isConnected&&(this.noTabbing?this.setAttribute("tabIndex","-1"):this.setAttribute("tabIndex",this.contains(document.activeElement)||this===document.activeElement?"-1":"0"))}generateHeaderChanged(){this.$fastController.isConnected&&this.toggleGeneratedHeader()}gridTemplateColumnsChanged(){this.$fastController.isConnected&&this.updateRowIndexes()}rowsDataChanged(){null===this.columnDefinitions&&this.rowsData.length>0&&(this.columnDefinitions=ro.generateColumns(this.rowsData[0])),this.$fastController.isConnected&&this.toggleGeneratedHeader()}columnDefinitionsChanged(){null!==this.columnDefinitions?(this.generatedGridTemplateColumns=ro.generateTemplateColumns(this.columnDefinitions),this.$fastController.isConnected&&(this.columnDefinitionsStale=!0,this.queueRowIndexUpdate())):this.generatedGridTemplateColumns=""}headerCellItemTemplateChanged(){this.$fastController.isConnected&&null!==this.generatedHeader&&(this.generatedHeader.headerCellItemTemplate=this.headerCellItemTemplate)}focusRowIndexChanged(){this.$fastController.isConnected&&this.queueFocusUpdate()}focusColumnIndexChanged(){this.$fastController.isConnected&&this.queueFocusUpdate()}connectedCallback(){super.connectedCallback(),void 0===this.rowItemTemplate&&(this.rowItemTemplate=this.defaultRowItemTemplate),this.rowsPlaceholder=document.createComment(""),this.appendChild(this.rowsPlaceholder),this.toggleGeneratedHeader(),this.rowsRepeatBehavior=new Js((e=>e.rowsData),(e=>e.rowItemTemplate),{positioning:!0}).createBehavior(this.rowsPlaceholder),this.$fastController.addBehaviors([this.rowsRepeatBehavior]),this.addEventListener("row-focused",this.handleRowFocus),this.addEventListener(Zs,this.handleFocus),this.addEventListener(io,this.handleKeydown),this.addEventListener(to,this.handleFocusOut),this.observer=new MutationObserver(this.onChildListChange),this.observer.observe(this,{childList:!0}),this.noTabbing&&this.setAttribute("tabindex","-1"),f.queueUpdate(this.queueRowIndexUpdate)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("row-focused",this.handleRowFocus),this.removeEventListener(Zs,this.handleFocus),this.removeEventListener(io,this.handleKeydown),this.removeEventListener(to,this.handleFocusOut),this.observer.disconnect(),this.rowsPlaceholder=null,this.generatedHeader=null}handleRowFocus(e){this.isUpdatingFocus=!0;const t=e.target;this.focusRowIndex=this.rowElements.indexOf(t),this.focusColumnIndex=t.focusColumnIndex,this.setAttribute("tabIndex","-1"),this.isUpdatingFocus=!1}handleFocus(e){this.focusOnCell(this.focusRowIndex,this.focusColumnIndex,!0)}handleFocusOut(e){null!==e.relatedTarget&&this.contains(e.relatedTarget)||this.setAttribute("tabIndex",this.noTabbing?"-1":"0")}handleKeydown(e){if(e.defaultPrevented)return;let t;const i=this.rowElements.length-1,s=this.offsetHeight+this.scrollTop,o=this.rowElements[i];switch(e.key){case rs:e.preventDefault(),this.focusOnCell(this.focusRowIndex-1,this.focusColumnIndex,!0);break;case ss:e.preventDefault(),this.focusOnCell(this.focusRowIndex+1,this.focusColumnIndex,!0);break;case"PageUp":if(e.preventDefault(),0===this.rowElements.length){this.focusOnCell(0,0,!1);break}if(0===this.focusRowIndex)return void this.focusOnCell(0,this.focusColumnIndex,!1);for(t=this.focusRowIndex-1;t>=0;t--){const e=this.rowElements[t];if(e.offsetTop<this.scrollTop){this.scrollTop=e.offsetTop+e.clientHeight-this.clientHeight;break}}this.focusOnCell(t,this.focusColumnIndex,!1);break;case"PageDown":if(e.preventDefault(),0===this.rowElements.length){this.focusOnCell(0,0,!1);break}if(this.focusRowIndex>=i||o.offsetTop+o.offsetHeight<=s)return void this.focusOnCell(i,this.focusColumnIndex,!1);for(t=this.focusRowIndex+1;t<=i;t++){const e=this.rowElements[t];if(e.offsetTop+e.offsetHeight>s){let t=0;this.generateHeader===so.sticky&&null!==this.generatedHeader&&(t=this.generatedHeader.clientHeight),this.scrollTop=e.offsetTop-t;break}}this.focusOnCell(t,this.focusColumnIndex,!1);break;case ds:e.ctrlKey&&(e.preventDefault(),this.focusOnCell(0,0,!0));break;case cs:e.ctrlKey&&null!==this.columnDefinitions&&(e.preventDefault(),this.focusOnCell(this.rowElements.length-1,this.columnDefinitions.length-1,!0))}}queueFocusUpdate(){this.isUpdatingFocus&&(this.contains(document.activeElement)||this===document.activeElement)||!1===this.pendingFocusUpdate&&(this.pendingFocusUpdate=!0,f.queueUpdate((()=>this.updateFocus())))}updateFocus(){this.pendingFocusUpdate=!1,this.focusOnCell(this.focusRowIndex,this.focusColumnIndex,!0)}toggleGeneratedHeader(){if(null!==this.generatedHeader&&(this.removeChild(this.generatedHeader),this.generatedHeader=null),this.generateHeader!==so.none&&this.rowsData.length>0){const e=document.createElement(this.rowElementTag);return this.generatedHeader=e,this.generatedHeader.columnDefinitions=this.columnDefinitions,this.generatedHeader.gridTemplateColumns=this.gridTemplateColumns,this.generatedHeader.rowType=this.generateHeader===so.sticky?no.stickyHeader:no.header,void(null===this.firstChild&&null===this.rowsPlaceholder||this.insertBefore(e,null!==this.firstChild?this.firstChild:this.rowsPlaceholder))}}}ro.generateColumns=e=>Object.getOwnPropertyNames(e).map(((e,t)=>({columnDataKey:e,gridColumn:`${t}`}))),N([L({attribute:"no-tabbing",mode:"boolean"})],ro.prototype,"noTabbing",void 0),N([L({attribute:"generate-header"})],ro.prototype,"generateHeader",void 0),N([L({attribute:"grid-template-columns"})],ro.prototype,"gridTemplateColumns",void 0),N([v],ro.prototype,"rowsData",void 0),N([v],ro.prototype,"columnDefinitions",void 0),N([v],ro.prototype,"rowItemTemplate",void 0),N([v],ro.prototype,"cellItemTemplate",void 0),N([v],ro.prototype,"headerCellItemTemplate",void 0),N([v],ro.prototype,"focusRowIndex",void 0),N([v],ro.prototype,"focusColumnIndex",void 0),N([v],ro.prototype,"defaultRowItemTemplate",void 0),N([v],ro.prototype,"rowElementTag",void 0),N([v],ro.prototype,"rowElements",void 0);class ao extends Is{constructor(e,t){super(e,t),this.observer=null,t.childList=!0}observe(){null===this.observer&&(this.observer=new MutationObserver(this.handleEvent.bind(this))),this.observer.observe(this.target,this.options)}disconnect(){this.observer.disconnect()}getNodes(){return"subtree"in this.options?Array.from(this.target.querySelectorAll(this.options.selector)):Array.from(this.target.childNodes)}}function lo(e){return"string"==typeof e&&(e={property:e}),new pt("fast-children",ao,e)}class co extends Be{constructor(){super(...arguments),this.rowType=no.default,this.rowData=null,this.columnDefinitions=null,this.isActiveRow=!1,this.cellsRepeatBehavior=null,this.cellsPlaceholder=null,this.focusColumnIndex=0,this.refocusOnLoad=!1,this.updateRowStyle=()=>{this.style.gridTemplateColumns=this.gridTemplateColumns}}gridTemplateColumnsChanged(){this.$fastController.isConnected&&this.updateRowStyle()}rowTypeChanged(){this.$fastController.isConnected&&this.updateItemTemplate()}rowDataChanged(){null!==this.rowData&&this.isActiveRow&&(this.refocusOnLoad=!0)}cellItemTemplateChanged(){this.updateItemTemplate()}headerCellItemTemplateChanged(){this.updateItemTemplate()}connectedCallback(){super.connectedCallback(),null===this.cellsRepeatBehavior&&(this.cellsPlaceholder=document.createComment(""),this.appendChild(this.cellsPlaceholder),this.updateItemTemplate(),this.cellsRepeatBehavior=new Js((e=>e.columnDefinitions),(e=>e.activeCellItemTemplate),{positioning:!0}).createBehavior(this.cellsPlaceholder),this.$fastController.addBehaviors([this.cellsRepeatBehavior])),this.addEventListener("cell-focused",this.handleCellFocus),this.addEventListener(to,this.handleFocusout),this.addEventListener(io,this.handleKeydown),this.updateRowStyle(),this.refocusOnLoad&&(this.refocusOnLoad=!1,this.cellElements.length>this.focusColumnIndex&&this.cellElements[this.focusColumnIndex].focus())}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("cell-focused",this.handleCellFocus),this.removeEventListener(to,this.handleFocusout),this.removeEventListener(io,this.handleKeydown)}handleFocusout(e){this.contains(e.target)||(this.isActiveRow=!1,this.focusColumnIndex=0)}handleCellFocus(e){this.isActiveRow=!0,this.focusColumnIndex=this.cellElements.indexOf(e.target),this.$emit("row-focused",this)}handleKeydown(e){if(e.defaultPrevented)return;let t=0;switch(e.key){case os:t=Math.max(0,this.focusColumnIndex-1),this.cellElements[t].focus(),e.preventDefault();break;case ns:t=Math.min(this.cellElements.length-1,this.focusColumnIndex+1),this.cellElements[t].focus(),e.preventDefault();break;case ds:e.ctrlKey||(this.cellElements[0].focus(),e.preventDefault());break;case cs:e.ctrlKey||(this.cellElements[this.cellElements.length-1].focus(),e.preventDefault())}}updateItemTemplate(){this.activeCellItemTemplate=this.rowType===no.default&&void 0!==this.cellItemTemplate?this.cellItemTemplate:this.rowType===no.default&&void 0===this.cellItemTemplate?this.defaultCellItemTemplate:void 0!==this.headerCellItemTemplate?this.headerCellItemTemplate:this.defaultHeaderCellItemTemplate}}N([L({attribute:"grid-template-columns"})],co.prototype,"gridTemplateColumns",void 0),N([L({attribute:"row-type"})],co.prototype,"rowType",void 0),N([v],co.prototype,"rowData",void 0),N([v],co.prototype,"columnDefinitions",void 0),N([v],co.prototype,"cellItemTemplate",void 0),N([v],co.prototype,"headerCellItemTemplate",void 0),N([v],co.prototype,"rowIndex",void 0),N([v],co.prototype,"isActiveRow",void 0),N([v],co.prototype,"activeCellItemTemplate",void 0),N([v],co.prototype,"defaultCellItemTemplate",void 0),N([v],co.prototype,"defaultHeaderCellItemTemplate",void 0),N([v],co.prototype,"cellElements",void 0);const ho=Ht`
    <template>
        ${e=>null===e.rowData||null===e.columnDefinition||null===e.columnDefinition.columnDataKey?null:e.rowData[e.columnDefinition.columnDataKey]}
    </template>
`,uo=Ht`
    <template>
        ${e=>null===e.columnDefinition?null:void 0===e.columnDefinition.title?e.columnDefinition.columnDataKey:e.columnDefinition.title}
    </template>
`;class po extends Be{constructor(){super(...arguments),this.cellType=oo.default,this.rowData=null,this.columnDefinition=null,this.isActiveCell=!1,this.customCellView=null,this.updateCellStyle=()=>{this.style.gridColumn=this.gridColumn}}cellTypeChanged(){this.$fastController.isConnected&&this.updateCellView()}gridColumnChanged(){this.$fastController.isConnected&&this.updateCellStyle()}columnDefinitionChanged(e,t){this.$fastController.isConnected&&this.updateCellView()}connectedCallback(){var e;super.connectedCallback(),this.addEventListener(eo,this.handleFocusin),this.addEventListener(to,this.handleFocusout),this.addEventListener(io,this.handleKeydown),this.style.gridColumn=`${void 0===(null===(e=this.columnDefinition)||void 0===e?void 0:e.gridColumn)?0:this.columnDefinition.gridColumn}`,this.updateCellView(),this.updateCellStyle()}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener(eo,this.handleFocusin),this.removeEventListener(to,this.handleFocusout),this.removeEventListener(io,this.handleKeydown),this.disconnectCellView()}handleFocusin(e){if(!this.isActiveCell){if(this.isActiveCell=!0,this.cellType===oo.columnHeader){if(null!==this.columnDefinition&&!0!==this.columnDefinition.headerCellInternalFocusQueue&&"function"==typeof this.columnDefinition.headerCellFocusTargetCallback){const e=this.columnDefinition.headerCellFocusTargetCallback(this);null!==e&&e.focus()}}else if(null!==this.columnDefinition&&!0!==this.columnDefinition.cellInternalFocusQueue&&"function"==typeof this.columnDefinition.cellFocusTargetCallback){const e=this.columnDefinition.cellFocusTargetCallback(this);null!==e&&e.focus()}this.$emit("cell-focused",this)}}handleFocusout(e){this===document.activeElement||this.contains(document.activeElement)||(this.isActiveCell=!1)}handleKeydown(e){if(!(e.defaultPrevented||null===this.columnDefinition||this.cellType===oo.default&&!0!==this.columnDefinition.cellInternalFocusQueue||this.cellType===oo.columnHeader&&!0!==this.columnDefinition.headerCellInternalFocusQueue))switch(e.key){case as:case"F2":if(this.contains(document.activeElement)&&document.activeElement!==this)return;if(this.cellType===oo.columnHeader){if(void 0!==this.columnDefinition.headerCellFocusTargetCallback){const t=this.columnDefinition.headerCellFocusTargetCallback(this);null!==t&&t.focus(),e.preventDefault()}}else if(void 0!==this.columnDefinition.cellFocusTargetCallback){const t=this.columnDefinition.cellFocusTargetCallback(this);null!==t&&t.focus(),e.preventDefault()}break;case ls:this.contains(document.activeElement)&&document.activeElement!==this&&(this.focus(),e.preventDefault())}}updateCellView(){if(this.disconnectCellView(),null!==this.columnDefinition)switch(this.cellType){case oo.columnHeader:void 0!==this.columnDefinition.headerCellTemplate?this.customCellView=this.columnDefinition.headerCellTemplate.render(this,this):this.customCellView=uo.render(this,this);break;case void 0:case oo.rowHeader:case oo.default:void 0!==this.columnDefinition.cellTemplate?this.customCellView=this.columnDefinition.cellTemplate.render(this,this):this.customCellView=ho.render(this,this)}}disconnectCellView(){null!==this.customCellView&&(this.customCellView.dispose(),this.customCellView=null)}}N([L({attribute:"cell-type"})],po.prototype,"cellType",void 0),N([L({attribute:"grid-column"})],po.prototype,"gridColumn",void 0),N([v],po.prototype,"rowData",void 0),N([v],po.prototype,"columnDefinition",void 0);class fo extends ro{connectedCallback(){super.connectedCallback(),this.getAttribute("aria-label")||this.setAttribute("aria-label","Data Grid")}}const bo=fo.compose({baseName:"data-grid",baseClass:ro,template:(e,t)=>{const i=function(e){const t=e.tagFor(co);return Ht`
    <${t}
        :rowData="${e=>e}"
        :cellItemTemplate="${(e,t)=>t.parent.cellItemTemplate}"
        :headerCellItemTemplate="${(e,t)=>t.parent.headerCellItemTemplate}"
    ></${t}>
`}(e),s=e.tagFor(co);return Ht`
        <template
            role="grid"
            tabindex="0"
            :rowElementTag="${()=>s}"
            :defaultRowItemTemplate="${i}"
            ${lo({property:"rowElements",filter:ks("[role=row]")})}
        >
            <slot></slot>
        </template>
    `},styles:(e,t)=>Mt`
	:host {
		display: flex;
		position: relative;
		flex-direction: column;
		width: 100%;
	}
`});class go extends co{}const mo=go.compose({baseName:"data-grid-row",baseClass:co,template:(e,t)=>{const i=function(e){const t=e.tagFor(po);return Ht`
    <${t}
        cell-type="${e=>e.isRowHeader?"rowheader":void 0}"
        grid-column="${(e,t)=>t.index+1}"
        :rowData="${(e,t)=>t.parent.rowData}"
        :columnDefinition="${e=>e}"
    ></${t}>
`}(e),s=function(e){const t=e.tagFor(po);return Ht`
    <${t}
        cell-type="columnheader"
        grid-column="${(e,t)=>t.index+1}"
        :columnDefinition="${e=>e}"
    ></${t}>
`}(e);return Ht`
        <template
            role="row"
            class="${e=>"default"!==e.rowType?e.rowType:""}"
            :defaultCellItemTemplate="${i}"
            :defaultHeaderCellItemTemplate="${s}"
            ${lo({property:"cellElements",filter:ks('[role="cell"],[role="gridcell"],[role="columnheader"],[role="rowheader"]')})}
        >
            <slot ${Os("slottedCellElements")}></slot>
        </template>
    `},styles:(e,t)=>Mt`
	:host {
		display: grid;
		padding: calc((${Xt} / 4) * 1px) 0;
		box-sizing: border-box;
		width: 100%;
		background: transparent;
	}
	:host(.header) {
	}
	:host(.sticky-header) {
		background: ${Ut};
		position: sticky;
		top: 0;
	}
	:host(:hover) {
		background: ${Bi};
		outline: 1px dotted ${Kt};
		outline-offset: -1px;
	}
`});class vo extends po{}const yo=vo.compose({baseName:"data-grid-cell",baseClass:po,template:(e,t)=>Ht`
        <template
            tabindex="-1"
            role="${e=>e.cellType&&"default"!==e.cellType?e.cellType:"gridcell"}"
            class="
            ${e=>"columnheader"===e.cellType?"column-header":"rowheader"===e.cellType?"row-header":""}
            "
        >
            <slot></slot>
        </template>
    `,styles:(e,t)=>Mt`
	:host {
		padding: calc(${Xt} * 1px) calc(${Xt} * 3px);
		color: ${ei};
		opacity: 1;
		box-sizing: border-box;
		font-family: ${Zt};
		font-size: ${si};
		line-height: ${oi};
		font-weight: 400;
		border: solid calc(${Gt} * 1px) transparent;
		border-radius: calc(${Wt} * 1px);
		white-space: wrap;
		overflow-wrap: anywhere;
	}
	:host(.column-header) {
		font-weight: 600;
	}
	:host(:${Es}),
	:host(:focus),
	:host(:active) {
		background: ${Ai};
		border: solid calc(${Gt} * 1px) ${Jt};
		color: ${Di};
		outline: none;
	}
	:host(:${Es}) ::slotted(*),
	:host(:focus) ::slotted(*),
	:host(:active) ::slotted(*) {
		color: ${Di} !important;
	}
`}),xo={horizontal:"horizontal",vertical:"vertical"},Co={separator:"separator",presentation:"presentation"};class $o extends Be{constructor(){super(...arguments),this.role=Co.separator,this.orientation=xo.horizontal}}N([L],$o.prototype,"role",void 0),N([L],$o.prototype,"orientation",void 0);class wo extends $o{}const ko=wo.compose({baseName:"divider",template:(e,t)=>Ht`
    <template role="${e=>e.role}" aria-orientation="${e=>e.orientation}"></template>
`,styles:(e,t)=>Mt`
	${zt("block")} :host {
		border: none;
		border-top: calc(${Gt} * 1px) solid ${Pi};
		box-sizing: content-box;
		height: 0;
		margin: calc(${Xt} * 1px) 0;
		width: 100%;
	}
`});let Io=0;function To(e=""){return`${e}${Io++}`}function Oo(e){return function(...e){return e.every((e=>e instanceof HTMLElement))}(e)&&("option"===e.getAttribute("role")||e instanceof HTMLOptionElement)}class So extends Be{constructor(e,t,i,s){super(),this.defaultSelected=!1,this.dirtySelected=!1,this.selected=this.defaultSelected,this.dirtyValue=!1,e&&(this.textContent=e),t&&(this.initialValue=t),i&&(this.defaultSelected=i),s&&(this.selected=s),this.proxy=new Option(`${this.textContent}`,this.initialValue,this.defaultSelected,this.selected),this.proxy.disabled=this.disabled}checkedChanged(e,t){this.ariaChecked="boolean"!=typeof t?null:t?"true":"false"}contentChanged(e,t){this.proxy instanceof HTMLOptionElement&&(this.proxy.textContent=this.textContent),this.$emit("contentchange",null,{bubbles:!0})}defaultSelectedChanged(){this.dirtySelected||(this.selected=this.defaultSelected,this.proxy instanceof HTMLOptionElement&&(this.proxy.selected=this.defaultSelected))}disabledChanged(e,t){this.ariaDisabled=this.disabled?"true":"false",this.proxy instanceof HTMLOptionElement&&(this.proxy.disabled=this.disabled)}selectedAttributeChanged(){this.defaultSelected=this.selectedAttribute,this.proxy instanceof HTMLOptionElement&&(this.proxy.defaultSelected=this.defaultSelected)}selectedChanged(){this.ariaSelected=this.selected?"true":"false",this.dirtySelected||(this.dirtySelected=!0),this.proxy instanceof HTMLOptionElement&&(this.proxy.selected=this.selected)}initialValueChanged(e,t){this.dirtyValue||(this.value=this.initialValue,this.dirtyValue=!1)}get label(){var e;return null!==(e=this.value)&&void 0!==e?e:this.text}get text(){var e,t;return null!==(t=null===(e=this.textContent)||void 0===e?void 0:e.replace(/\s+/g," ").trim())&&void 0!==t?t:""}set value(e){const t=`${null!=e?e:""}`;this._value=t,this.dirtyValue=!0,this.proxy instanceof HTMLOptionElement&&(this.proxy.value=t),m.notify(this,"value")}get value(){var e;return m.track(this,"value"),null!==(e=this._value)&&void 0!==e?e:this.text}get form(){return this.proxy?this.proxy.form:null}}N([v],So.prototype,"checked",void 0),N([v],So.prototype,"content",void 0),N([v],So.prototype,"defaultSelected",void 0),N([L({mode:"boolean"})],So.prototype,"disabled",void 0),N([L({attribute:"selected",mode:"boolean"})],So.prototype,"selectedAttribute",void 0),N([v],So.prototype,"selected",void 0),N([L({attribute:"value",mode:"fromView"})],So.prototype,"initialValue",void 0);class Eo{}N([v],Eo.prototype,"ariaChecked",void 0),N([v],Eo.prototype,"ariaPosInSet",void 0),N([v],Eo.prototype,"ariaSelected",void 0),N([v],Eo.prototype,"ariaSetSize",void 0),ts(Eo,Qi),ts(So,Ji,Eo);class Ro extends Be{constructor(){super(...arguments),this._options=[],this.selectedIndex=-1,this.selectedOptions=[],this.shouldSkipFocus=!1,this.typeaheadBuffer="",this.typeaheadExpired=!0,this.typeaheadTimeout=-1}get firstSelectedOption(){var e;return null!==(e=this.selectedOptions[0])&&void 0!==e?e:null}get hasSelectableOptions(){return this.options.length>0&&!this.options.every((e=>e.disabled))}get length(){var e,t;return null!==(t=null===(e=this.options)||void 0===e?void 0:e.length)&&void 0!==t?t:0}get options(){return m.track(this,"options"),this._options}set options(e){this._options=e,m.notify(this,"options")}get typeAheadExpired(){return this.typeaheadExpired}set typeAheadExpired(e){this.typeaheadExpired=e}clickHandler(e){const t=e.target.closest("option,[role=option]");if(t&&!t.disabled)return this.selectedIndex=this.options.indexOf(t),!0}focusAndScrollOptionIntoView(e=this.firstSelectedOption){this.contains(document.activeElement)&&null!==e&&(e.focus(),requestAnimationFrame((()=>{e.scrollIntoView({block:"nearest"})})))}focusinHandler(e){this.shouldSkipFocus||e.target!==e.currentTarget||(this.setSelectedOptions(),this.focusAndScrollOptionIntoView()),this.shouldSkipFocus=!1}getTypeaheadMatches(){const e=this.typeaheadBuffer.replace(/[.*+\-?^${}()|[\]\\]/g,"\\$&"),t=new RegExp(`^${e}`,"gi");return this.options.filter((e=>e.text.trim().match(t)))}getSelectableIndex(e=this.selectedIndex,t){const i=e>t?-1:e<t?1:0,s=e+i;let o=null;switch(i){case-1:o=this.options.reduceRight(((e,t,i)=>!e&&!t.disabled&&i<s?t:e),o);break;case 1:o=this.options.reduce(((e,t,i)=>!e&&!t.disabled&&i>s?t:e),o)}return this.options.indexOf(o)}handleChange(e,t){"selected"===t&&(Ro.slottedOptionFilter(e)&&(this.selectedIndex=this.options.indexOf(e)),this.setSelectedOptions())}handleTypeAhead(e){this.typeaheadTimeout&&window.clearTimeout(this.typeaheadTimeout),this.typeaheadTimeout=window.setTimeout((()=>this.typeaheadExpired=!0),Ro.TYPE_AHEAD_TIMEOUT_MS),e.length>1||(this.typeaheadBuffer=`${this.typeaheadExpired?"":this.typeaheadBuffer}${e}`)}keydownHandler(e){if(this.disabled)return!0;this.shouldSkipFocus=!1;const t=e.key;switch(t){case ds:e.shiftKey||(e.preventDefault(),this.selectFirstOption());break;case ss:e.shiftKey||(e.preventDefault(),this.selectNextOption());break;case rs:e.shiftKey||(e.preventDefault(),this.selectPreviousOption());break;case cs:e.preventDefault(),this.selectLastOption();break;case us:return this.focusAndScrollOptionIntoView(),!0;case as:case ls:return!0;case hs:if(this.typeaheadExpired)return!0;default:return 1===t.length&&this.handleTypeAhead(`${t}`),!0}}mousedownHandler(e){return this.shouldSkipFocus=!this.contains(document.activeElement),!0}multipleChanged(e,t){this.ariaMultiSelectable=t?"true":null}selectedIndexChanged(e,t){var i;if(this.hasSelectableOptions){if((null===(i=this.options[this.selectedIndex])||void 0===i?void 0:i.disabled)&&"number"==typeof e){const i=this.getSelectableIndex(e,t),s=i>-1?i:e;return this.selectedIndex=s,void(t===s&&this.selectedIndexChanged(t,s))}this.setSelectedOptions()}else this.selectedIndex=-1}selectedOptionsChanged(e,t){var i;const s=t.filter(Ro.slottedOptionFilter);null===(i=this.options)||void 0===i||i.forEach((e=>{const t=m.getNotifier(e);t.unsubscribe(this,"selected"),e.selected=s.includes(e),t.subscribe(this,"selected")}))}selectFirstOption(){var e,t;this.disabled||(this.selectedIndex=null!==(t=null===(e=this.options)||void 0===e?void 0:e.findIndex((e=>!e.disabled)))&&void 0!==t?t:-1)}selectLastOption(){this.disabled||(this.selectedIndex=function(e){let t=e.length;for(;t--;)if(!e[t].disabled)return t;return-1}(this.options))}selectNextOption(){!this.disabled&&this.selectedIndex<this.options.length-1&&(this.selectedIndex+=1)}selectPreviousOption(){!this.disabled&&this.selectedIndex>0&&(this.selectedIndex=this.selectedIndex-1)}setDefaultSelectedOption(){var e,t;this.selectedIndex=null!==(t=null===(e=this.options)||void 0===e?void 0:e.findIndex((e=>e.defaultSelected)))&&void 0!==t?t:-1}setSelectedOptions(){var e,t,i;(null===(e=this.options)||void 0===e?void 0:e.length)&&(this.selectedOptions=[this.options[this.selectedIndex]],this.ariaActiveDescendant=null!==(i=null===(t=this.firstSelectedOption)||void 0===t?void 0:t.id)&&void 0!==i?i:"",this.focusAndScrollOptionIntoView())}slottedOptionsChanged(e,t){this.options=t.reduce(((e,t)=>(Oo(t)&&e.push(t),e)),[]);const i=`${this.options.length}`;this.options.forEach(((e,t)=>{e.id||(e.id=To("option-")),e.ariaPosInSet=`${t+1}`,e.ariaSetSize=i})),this.$fastController.isConnected&&(this.setSelectedOptions(),this.setDefaultSelectedOption())}typeaheadBufferChanged(e,t){if(this.$fastController.isConnected){const e=this.getTypeaheadMatches();if(e.length){const t=this.options.indexOf(e[0]);t>-1&&(this.selectedIndex=t)}this.typeaheadExpired=!1}}}Ro.slottedOptionFilter=e=>Oo(e)&&!e.hidden,Ro.TYPE_AHEAD_TIMEOUT_MS=1e3,N([L({mode:"boolean"})],Ro.prototype,"disabled",void 0),N([v],Ro.prototype,"selectedIndex",void 0),N([v],Ro.prototype,"selectedOptions",void 0),N([v],Ro.prototype,"slottedOptions",void 0),N([v],Ro.prototype,"typeaheadBuffer",void 0);class Ao{}function Do(e,t,i=0){return[t,i]=[t,i].sort(((e,t)=>e-t)),t<=e&&e<i}N([v],Ao.prototype,"ariaActiveDescendant",void 0),N([v],Ao.prototype,"ariaDisabled",void 0),N([v],Ao.prototype,"ariaExpanded",void 0),N([v],Ao.prototype,"ariaMultiSelectable",void 0),ts(Ao,Qi),ts(Ro,Ao);class Bo extends Ro{constructor(){super(...arguments),this.activeIndex=-1,this.rangeStartIndex=-1}get activeOption(){return this.options[this.activeIndex]}get checkedOptions(){var e;return null===(e=this.options)||void 0===e?void 0:e.filter((e=>e.checked))}get firstSelectedOptionIndex(){return this.options.indexOf(this.firstSelectedOption)}activeIndexChanged(e,t){var i,s;this.ariaActiveDescendant=null!==(s=null===(i=this.options[t])||void 0===i?void 0:i.id)&&void 0!==s?s:"",this.focusAndScrollOptionIntoView()}checkActiveIndex(){if(!this.multiple)return;const e=this.activeOption;e&&(e.checked=!0)}checkFirstOption(e=!1){e?(-1===this.rangeStartIndex&&(this.rangeStartIndex=this.activeIndex+1),this.options.forEach(((e,t)=>{e.checked=Do(t,this.rangeStartIndex)}))):this.uncheckAllOptions(),this.activeIndex=0,this.checkActiveIndex()}checkLastOption(e=!1){e?(-1===this.rangeStartIndex&&(this.rangeStartIndex=this.activeIndex),this.options.forEach(((e,t)=>{e.checked=Do(t,this.rangeStartIndex,this.options.length)}))):this.uncheckAllOptions(),this.activeIndex=this.options.length-1,this.checkActiveIndex()}connectedCallback(){super.connectedCallback(),this.addEventListener("focusout",this.focusoutHandler)}disconnectedCallback(){this.removeEventListener("focusout",this.focusoutHandler),super.disconnectedCallback()}checkNextOption(e=!1){e?(-1===this.rangeStartIndex&&(this.rangeStartIndex=this.activeIndex),this.options.forEach(((e,t)=>{e.checked=Do(t,this.rangeStartIndex,this.activeIndex+1)}))):this.uncheckAllOptions(),this.activeIndex+=this.activeIndex<this.options.length-1?1:0,this.checkActiveIndex()}checkPreviousOption(e=!1){e?(-1===this.rangeStartIndex&&(this.rangeStartIndex=this.activeIndex),1===this.checkedOptions.length&&(this.rangeStartIndex+=1),this.options.forEach(((e,t)=>{e.checked=Do(t,this.activeIndex,this.rangeStartIndex)}))):this.uncheckAllOptions(),this.activeIndex-=this.activeIndex>0?1:0,this.checkActiveIndex()}clickHandler(e){var t;if(!this.multiple)return super.clickHandler(e);const i=null===(t=e.target)||void 0===t?void 0:t.closest("[role=option]");return i&&!i.disabled?(this.uncheckAllOptions(),this.activeIndex=this.options.indexOf(i),this.checkActiveIndex(),this.toggleSelectedForAllCheckedOptions(),!0):void 0}focusAndScrollOptionIntoView(){super.focusAndScrollOptionIntoView(this.activeOption)}focusinHandler(e){if(!this.multiple)return super.focusinHandler(e);this.shouldSkipFocus||e.target!==e.currentTarget||(this.uncheckAllOptions(),-1===this.activeIndex&&(this.activeIndex=-1!==this.firstSelectedOptionIndex?this.firstSelectedOptionIndex:0),this.checkActiveIndex(),this.setSelectedOptions(),this.focusAndScrollOptionIntoView()),this.shouldSkipFocus=!1}focusoutHandler(e){this.multiple&&this.uncheckAllOptions()}keydownHandler(e){if(!this.multiple)return super.keydownHandler(e);if(this.disabled)return!0;const{key:t,shiftKey:i}=e;switch(this.shouldSkipFocus=!1,t){case ds:return void this.checkFirstOption(i);case ss:return void this.checkNextOption(i);case rs:return void this.checkPreviousOption(i);case cs:return void this.checkLastOption(i);case us:return this.focusAndScrollOptionIntoView(),!0;case ls:return this.uncheckAllOptions(),this.checkActiveIndex(),!0;case hs:if(e.preventDefault(),this.typeAheadExpired)return void this.toggleSelectedForAllCheckedOptions();default:return 1===t.length&&this.handleTypeAhead(`${t}`),!0}}mousedownHandler(e){if(e.offsetX>=0&&e.offsetX<=this.scrollWidth)return super.mousedownHandler(e)}multipleChanged(e,t){var i;this.ariaMultiSelectable=t?"true":null,null===(i=this.options)||void 0===i||i.forEach((e=>{e.checked=!t&&void 0})),this.setSelectedOptions()}setSelectedOptions(){this.multiple?this.$fastController.isConnected&&this.options&&(this.selectedOptions=this.options.filter((e=>e.selected)),this.focusAndScrollOptionIntoView()):super.setSelectedOptions()}sizeChanged(e,t){var i;const s=Math.max(0,parseInt(null!==(i=null==t?void 0:t.toFixed())&&void 0!==i?i:"",10));s!==t&&f.queueUpdate((()=>{this.size=s}))}toggleSelectedForAllCheckedOptions(){const e=this.checkedOptions.filter((e=>!e.disabled)),t=!e.every((e=>e.selected));e.forEach((e=>e.selected=t)),this.selectedIndex=this.options.indexOf(e[e.length-1]),this.setSelectedOptions()}typeaheadBufferChanged(e,t){if(this.multiple){if(this.$fastController.isConnected){const e=this.getTypeaheadMatches(),t=this.options.indexOf(e[0]);t>-1&&(this.activeIndex=t,this.uncheckAllOptions(),this.checkActiveIndex()),this.typeAheadExpired=!1}}else super.typeaheadBufferChanged(e,t)}uncheckAllOptions(e=!1){this.options.forEach((e=>e.checked=!this.multiple&&void 0)),e||(this.rangeStartIndex=-1)}}N([v],Bo.prototype,"activeIndex",void 0),N([L({mode:"boolean"})],Bo.prototype,"multiple",void 0),N([L({converter:P})],Bo.prototype,"size",void 0);class Po extends Bo{}class Fo extends(vs(Po)){constructor(){super(...arguments),this.proxy=document.createElement("select")}}const Lo={above:"above",below:"below"};class Ho extends Fo{constructor(){super(...arguments),this.open=!1,this.forcedPosition=!1,this.listboxId=To("listbox-"),this.maxHeight=0}openChanged(e,t){if(this.collapsible){if(this.open)return this.ariaControls=this.listboxId,this.ariaExpanded="true",this.setPositioning(),this.focusAndScrollOptionIntoView(),this.indexWhenOpened=this.selectedIndex,void f.queueUpdate((()=>this.focus()));this.ariaControls="",this.ariaExpanded="false"}}get collapsible(){return!(this.multiple||"number"==typeof this.size)}get value(){return m.track(this,"value"),this._value}set value(e){var t,i,s,o,n,r,a;const l=`${this._value}`;if(null===(t=this._options)||void 0===t?void 0:t.length){const t=this._options.findIndex((t=>t.value===e)),l=null!==(s=null===(i=this._options[this.selectedIndex])||void 0===i?void 0:i.value)&&void 0!==s?s:null,d=null!==(n=null===(o=this._options[t])||void 0===o?void 0:o.value)&&void 0!==n?n:null;-1!==t&&l===d||(e="",this.selectedIndex=t),e=null!==(a=null===(r=this.firstSelectedOption)||void 0===r?void 0:r.value)&&void 0!==a?a:e}l!==e&&(this._value=e,super.valueChanged(l,e),m.notify(this,"value"),this.updateDisplayValue())}updateValue(e){var t,i;this.$fastController.isConnected&&(this.value=null!==(i=null===(t=this.firstSelectedOption)||void 0===t?void 0:t.value)&&void 0!==i?i:""),e&&(this.$emit("input"),this.$emit("change",this,{bubbles:!0,composed:void 0}))}selectedIndexChanged(e,t){super.selectedIndexChanged(e,t),this.updateValue()}positionChanged(e,t){this.positionAttribute=t,this.setPositioning()}setPositioning(){const e=this.getBoundingClientRect(),t=window.innerHeight-e.bottom;this.position=this.forcedPosition?this.positionAttribute:e.top>t?Lo.above:Lo.below,this.positionAttribute=this.forcedPosition?this.positionAttribute:this.position,this.maxHeight=this.position===Lo.above?~~e.top:~~t}get displayValue(){var e,t;return m.track(this,"displayValue"),null!==(t=null===(e=this.firstSelectedOption)||void 0===e?void 0:e.text)&&void 0!==t?t:""}disabledChanged(e,t){super.disabledChanged&&super.disabledChanged(e,t),this.ariaDisabled=this.disabled?"true":"false"}formResetCallback(){this.setProxyOptions(),super.setDefaultSelectedOption(),-1===this.selectedIndex&&(this.selectedIndex=0)}clickHandler(e){if(!this.disabled){if(this.open){const t=e.target.closest("option,[role=option]");if(t&&t.disabled)return}return super.clickHandler(e),this.open=this.collapsible&&!this.open,this.open||this.indexWhenOpened===this.selectedIndex||this.updateValue(!0),!0}}focusoutHandler(e){var t;if(super.focusoutHandler(e),!this.open)return!0;const i=e.relatedTarget;this.isSameNode(i)?this.focus():(null===(t=this.options)||void 0===t?void 0:t.includes(i))||(this.open=!1,this.indexWhenOpened!==this.selectedIndex&&this.updateValue(!0))}handleChange(e,t){super.handleChange(e,t),"value"===t&&this.updateValue()}slottedOptionsChanged(e,t){this.options.forEach((e=>{m.getNotifier(e).unsubscribe(this,"value")})),super.slottedOptionsChanged(e,t),this.options.forEach((e=>{m.getNotifier(e).subscribe(this,"value")})),this.setProxyOptions(),this.updateValue()}mousedownHandler(e){var t;return e.offsetX>=0&&e.offsetX<=(null===(t=this.listbox)||void 0===t?void 0:t.scrollWidth)?super.mousedownHandler(e):this.collapsible}multipleChanged(e,t){super.multipleChanged(e,t),this.proxy&&(this.proxy.multiple=t)}selectedOptionsChanged(e,t){var i;super.selectedOptionsChanged(e,t),null===(i=this.options)||void 0===i||i.forEach(((e,t)=>{var i;const s=null===(i=this.proxy)||void 0===i?void 0:i.options.item(t);s&&(s.selected=e.selected)}))}setDefaultSelectedOption(){var e;const t=null!==(e=this.options)&&void 0!==e?e:Array.from(this.children).filter(Ro.slottedOptionFilter),i=null==t?void 0:t.findIndex((e=>e.hasAttribute("selected")||e.selected||e.value===this.value));this.selectedIndex=-1===i?0:i}setProxyOptions(){this.proxy instanceof HTMLSelectElement&&this.options&&(this.proxy.options.length=0,this.options.forEach((e=>{const t=e.proxy||(e instanceof HTMLOptionElement?e.cloneNode():null);t&&this.proxy.options.add(t)})))}keydownHandler(e){super.keydownHandler(e);const t=e.key||e.key.charCodeAt(0);switch(t){case hs:e.preventDefault(),this.collapsible&&this.typeAheadExpired&&(this.open=!this.open);break;case ds:case cs:e.preventDefault();break;case as:e.preventDefault(),this.open=!this.open;break;case ls:this.collapsible&&this.open&&(e.preventDefault(),this.open=!1);break;case us:return this.collapsible&&this.open&&(e.preventDefault(),this.open=!1),!0}return this.open||this.indexWhenOpened===this.selectedIndex||(this.updateValue(!0),this.indexWhenOpened=this.selectedIndex),!(t===ss||t===rs)}connectedCallback(){super.connectedCallback(),this.forcedPosition=!!this.positionAttribute,this.addEventListener("contentchange",this.updateDisplayValue)}disconnectedCallback(){this.removeEventListener("contentchange",this.updateDisplayValue),super.disconnectedCallback()}sizeChanged(e,t){super.sizeChanged(e,t),this.proxy&&(this.proxy.size=t)}updateDisplayValue(){this.collapsible&&m.notify(this,"displayValue")}}N([L({attribute:"open",mode:"boolean"})],Ho.prototype,"open",void 0),N([function(e,t,i){return Object.assign({},i,{get:function(){return m.trackVolatile(),i.get.apply(this)}})}],Ho.prototype,"collapsible",null),N([v],Ho.prototype,"control",void 0),N([L({attribute:"position"})],Ho.prototype,"positionAttribute",void 0),N([v],Ho.prototype,"position",void 0),N([v],Ho.prototype,"maxHeight",void 0);class Vo{}N([v],Vo.prototype,"ariaControls",void 0),ts(Vo,Ao),ts(Ho,Ji,Vo);const Mo=e=>"function"==typeof e,zo=()=>null;function No(e){return void 0===e?zo:Mo(e)?e:()=>e}function jo(e,t,i){const s=Mo(e)?e:()=>e,o=No(t),n=No(i);return(e,t)=>s(e,t)?o(e,t):n(e,t)}class _o extends Ho{}const qo=_o.compose({baseName:"dropdown",template:(e,t)=>Ht`
    <template
        class="${e=>[e.collapsible&&"collapsible",e.collapsible&&e.open&&"open",e.disabled&&"disabled",e.collapsible&&e.position].filter(Boolean).join(" ")}"
        aria-activedescendant="${e=>e.ariaActiveDescendant}"
        aria-controls="${e=>e.ariaControls}"
        aria-disabled="${e=>e.ariaDisabled}"
        aria-expanded="${e=>e.ariaExpanded}"
        aria-haspopup="${e=>e.collapsible?"listbox":null}"
        aria-multiselectable="${e=>e.ariaMultiSelectable}"
        ?open="${e=>e.open}"
        role="combobox"
        tabindex="${e=>e.disabled?null:"0"}"
        @click="${(e,t)=>e.clickHandler(t.event)}"
        @focusin="${(e,t)=>e.focusinHandler(t.event)}"
        @focusout="${(e,t)=>e.focusoutHandler(t.event)}"
        @keydown="${(e,t)=>e.keydownHandler(t.event)}"
        @mousedown="${(e,t)=>e.mousedownHandler(t.event)}"
    >
        ${jo((e=>e.collapsible),Ht`
                <div
                    class="control"
                    part="control"
                    ?disabled="${e=>e.disabled}"
                    ${Yi("control")}
                >
                    ${es(0,t)}
                    <slot name="button-container">
                        <div class="selected-value" part="selected-value">
                            <slot name="selected-value">${e=>e.displayValue}</slot>
                        </div>
                        <div aria-hidden="true" class="indicator" part="indicator">
                            <slot name="indicator">
                                ${t.indicator||""}
                            </slot>
                        </div>
                    </slot>
                    ${Zi(0,t)}
                </div>
            `)}
        <div
            class="listbox"
            id="${e=>e.listboxId}"
            part="listbox"
            role="listbox"
            ?disabled="${e=>e.disabled}"
            ?hidden="${e=>!!e.collapsible&&!e.open}"
            ${Yi("listbox")}
        >
            <slot
                ${Os({filter:Ro.slottedOptionFilter,flatten:!0,property:"slottedOptions"})}
            ></slot>
        </div>
    </template>
`,styles:(e,t)=>Mt`
	${zt("inline-flex")} :host {
		background: ${Fi};
		border-radius: calc(${Qt} * 1px);
		box-sizing: border-box;
		color: ${ei};
		contain: contents;
		font-family: ${Zt};
		height: calc(${ti} * 1px);
		position: relative;
		user-select: none;
		min-width: ${ii};
		outline: none;
		vertical-align: top;
	}
	.control {
		align-items: center;
		box-sizing: border-box;
		border: calc(${Gt} * 1px) solid ${Li};
		border-radius: calc(${Qt} * 1px);
		cursor: pointer;
		display: flex;
		font-family: inherit;
		font-size: ${si};
		line-height: ${oi};
		min-height: 100%;
		padding: 2px 6px 2px 8px;
		width: 100%;
	}
	.listbox {
		background: ${Fi};
		border: calc(${Gt} * 1px) solid ${Jt};
		border-radius: calc(${Qt} * 1px);
		box-sizing: border-box;
		display: inline-flex;
		flex-direction: column;
		left: 0;
		max-height: ${Hi};
		padding: 0;
		overflow-y: auto;
		position: absolute;
		width: 100%;
		z-index: 1;
	}
	.listbox[hidden] {
		display: none;
	}
	:host(:${Es}) .control {
		border-color: ${Jt};
	}
	:host(:not([disabled]):hover) {
		background: ${Fi};
		border-color: ${Li};
	}
	:host(:${Es}) ::slotted([aria-selected="true"][role="option"]:not([disabled])) {
		background: ${Ai};
		border: calc(${Gt} * 1px) solid transparent;
		color: ${Di};
	}
	:host([disabled]) {
		cursor: ${Rs};
		opacity: ${Yt};
	}
	:host([disabled]) .control {
		cursor: ${Rs};
		user-select: none;
	}
	:host([disabled]:hover) {
		background: ${Fi};
		color: ${ei};
		fill: currentcolor;
	}
	:host(:not([disabled])) .control:active {
		border-color: ${Jt};
	}
	:host(:empty) .listbox {
		display: none;
	}
	:host([open]) .control {
		border-color: ${Jt};
	}
	:host([open][position='above']) .listbox {
		border-bottom-left-radius: 0;
		border-bottom-right-radius: 0;
	}
	:host([open][position='below']) .listbox {
		border-top-left-radius: 0;
		border-top-right-radius: 0;
	}
	:host([open][position='above']) .listbox {
		bottom: calc(${ti} * 1px);
	}
	:host([open][position='below']) .listbox {
		top: calc(${ti} * 1px);
	}
	.selected-value {
		flex: 1 1 auto;
		font-family: inherit;
		overflow: hidden;
		text-align: start;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	.indicator {
		flex: 0 0 auto;
		margin-inline-start: 1em;
	}
	slot[name='listbox'] {
		display: none;
		width: 100%;
	}
	:host([open]) slot[name='listbox'] {
		display: flex;
		position: absolute;
	}
	.end {
		margin-inline-start: auto;
	}
	.start,
	.end,
	.indicator,
	.select-indicator,
	::slotted(svg),
	::slotted(span) {
		fill: currentcolor;
		height: 1em;
		min-height: calc(${Xt} * 4px);
		min-width: calc(${Xt} * 4px);
		width: 1em;
	}
	::slotted([role='option']),
	::slotted(option) {
		flex: 0 0 auto;
	}
`,indicator:'\n\t\t<svg \n\t\t\tclass="select-indicator"\n\t\t\tpart="select-indicator"\n\t\t\twidth="16" \n\t\t\theight="16" \n\t\t\tviewBox="0 0 16 16" \n\t\t\txmlns="http://www.w3.org/2000/svg" \n\t\t\tfill="currentColor"\n\t\t>\n\t\t\t<path \n\t\t\t\tfill-rule="evenodd" \n\t\t\t\tclip-rule="evenodd" \n\t\t\t\td="M7.976 10.072l4.357-4.357.62.618L8.284 11h-.618L3 6.333l.619-.618 4.357 4.357z"\n\t\t\t/>\n\t\t</svg>\n\t'});class Uo extends Be{constructor(){super(...arguments),this.handleUnsupportedDelegatesFocus=()=>{var e;window.ShadowRoot&&!window.ShadowRoot.prototype.hasOwnProperty("delegatesFocus")&&(null===(e=this.$fastController.definition.shadowOptions)||void 0===e?void 0:e.delegatesFocus)&&(this.focus=()=>{var e;null===(e=this.control)||void 0===e||e.focus()})}}connectedCallback(){super.connectedCallback(),this.handleUnsupportedDelegatesFocus()}}N([L],Uo.prototype,"download",void 0),N([L],Uo.prototype,"href",void 0),N([L],Uo.prototype,"hreflang",void 0),N([L],Uo.prototype,"ping",void 0),N([L],Uo.prototype,"referrerpolicy",void 0),N([L],Uo.prototype,"rel",void 0),N([L],Uo.prototype,"target",void 0),N([L],Uo.prototype,"type",void 0),N([v],Uo.prototype,"defaultSlottedContent",void 0);class Go{}N([L({attribute:"aria-expanded"})],Go.prototype,"ariaExpanded",void 0),ts(Go,Qi),ts(Uo,Ji,Go);class Ko extends Uo{}const Wo=Ko.compose({baseName:"link",template:(e,t)=>Ht`
    <a
        class="control"
        part="control"
        download="${e=>e.download}"
        href="${e=>e.href}"
        hreflang="${e=>e.hreflang}"
        ping="${e=>e.ping}"
        referrerpolicy="${e=>e.referrerpolicy}"
        rel="${e=>e.rel}"
        target="${e=>e.target}"
        type="${e=>e.type}"
        aria-atomic="${e=>e.ariaAtomic}"
        aria-busy="${e=>e.ariaBusy}"
        aria-controls="${e=>e.ariaControls}"
        aria-current="${e=>e.ariaCurrent}"
        aria-describedby="${e=>e.ariaDescribedby}"
        aria-details="${e=>e.ariaDetails}"
        aria-disabled="${e=>e.ariaDisabled}"
        aria-errormessage="${e=>e.ariaErrormessage}"
        aria-expanded="${e=>e.ariaExpanded}"
        aria-flowto="${e=>e.ariaFlowto}"
        aria-haspopup="${e=>e.ariaHaspopup}"
        aria-hidden="${e=>e.ariaHidden}"
        aria-invalid="${e=>e.ariaInvalid}"
        aria-keyshortcuts="${e=>e.ariaKeyshortcuts}"
        aria-label="${e=>e.ariaLabel}"
        aria-labelledby="${e=>e.ariaLabelledby}"
        aria-live="${e=>e.ariaLive}"
        aria-owns="${e=>e.ariaOwns}"
        aria-relevant="${e=>e.ariaRelevant}"
        aria-roledescription="${e=>e.ariaRoledescription}"
        ${Yi("control")}
    >
        ${es(0,t)}
        <span class="content" part="content">
            <slot ${Os("defaultSlottedContent")}></slot>
        </span>
        ${Zi(0,t)}
    </a>
`,styles:(e,t)=>Mt`
	${zt("inline-flex")} :host {
		background: transparent;
		box-sizing: border-box;
		color: ${Ni};
		cursor: pointer;
		fill: currentcolor;
		font-family: ${Zt};
		font-size: ${si};
		line-height: ${oi};
		outline: none;
	}
	.control {
		background: transparent;
		border: calc(${Gt} * 1px) solid transparent;
		border-radius: calc(${Wt} * 1px);
		box-sizing: border-box;
		color: inherit;
		cursor: inherit;
		fill: inherit;
		font-family: inherit;
		height: inherit;
		padding: 0;
		outline: none;
		text-decoration: none;
		word-break: break-word;
	}
	.control::-moz-focus-inner {
		border: 0;
	}
	:host(:hover) {
		color: ${zi};
	}
	:host(:hover) .content {
		text-decoration: underline;
	}
	:host(:active) {
		background: transparent;
		color: ${zi};
	}
	:host(:${Es}) .control,
	:host(:focus) .control {
		border: calc(${Gt} * 1px) solid ${Jt};
	}
`,shadowOptions:{delegatesFocus:!0}});class Qo extends So{connectedCallback(){super.connectedCallback(),this.textContent?this.setAttribute("aria-label",this.textContent):this.setAttribute("aria-label","Option")}}const Xo=Qo.compose({baseName:"option",template:(e,t)=>Ht`
    <template
        aria-checked="${e=>e.ariaChecked}"
        aria-disabled="${e=>e.ariaDisabled}"
        aria-posinset="${e=>e.ariaPosInSet}"
        aria-selected="${e=>e.ariaSelected}"
        aria-setsize="${e=>e.ariaSetSize}"
        class="${e=>[e.checked&&"checked",e.selected&&"selected",e.disabled&&"disabled"].filter(Boolean).join(" ")}"
        role="option"
    >
        ${es(0,t)}
        <span class="content" part="content">
            <slot ${Os("content")}></slot>
        </span>
        ${Zi(0,t)}
    </template>
`,styles:(e,t)=>Mt`
	${zt("inline-flex")} :host {
		font-family: var(--body-font);
		border-radius: ${Wt};
		border: calc(${Gt} * 1px) solid transparent;
		box-sizing: border-box;
		color: ${ei};
		cursor: pointer;
		fill: currentcolor;
		font-size: ${si};
		line-height: ${oi};
		margin: 0;
		outline: none;
		overflow: hidden;
		padding: 0 calc((${Xt} / 2) * 1px)
			calc((${Xt} / 4) * 1px);
		user-select: none;
		white-space: nowrap;
	}
	:host(:${Es}) {
		border-color: ${Jt};
		background: ${Ai};
		color: ${ei};
	}
	:host([aria-selected='true']) {
		background: ${Ai};
		border: calc(${Gt} * 1px) solid transparent;
		color: ${Di};
	}
	:host(:active) {
		background: ${Ai};
		color: ${Di};
	}
	:host(:not([aria-selected='true']):hover) {
		background: ${Ai};
		border: calc(${Gt} * 1px) solid transparent;
		color: ${Di};
	}
	:host(:not([aria-selected='true']):active) {
		background: ${Ai};
		color: ${ei};
	}
	:host([disabled]) {
		cursor: ${Rs};
		opacity: ${Yt};
	}
	:host([disabled]:hover) {
		background-color: inherit;
	}
	.content {
		grid-column-start: 2;
		justify-self: start;
		overflow: hidden;
		text-overflow: ellipsis;
	}
`}),Yo="horizontal";class Jo extends Be{constructor(){super(...arguments),this.orientation=Yo,this.activeindicator=!0,this.showActiveIndicator=!0,this.prevActiveTabIndex=0,this.activeTabIndex=0,this.ticking=!1,this.change=()=>{this.$emit("change",this.activetab)},this.isDisabledElement=e=>"true"===e.getAttribute("aria-disabled"),this.isHiddenElement=e=>e.hasAttribute("hidden"),this.isFocusableElement=e=>!this.isDisabledElement(e)&&!this.isHiddenElement(e),this.setTabs=()=>{const e="gridColumn",t="gridRow",i=this.isHorizontal()?e:t;this.activeTabIndex=this.getActiveIndex(),this.showActiveIndicator=!1,this.tabs.forEach(((s,o)=>{if("tab"===s.slot){const e=this.activeTabIndex===o&&this.isFocusableElement(s);this.activeindicator&&this.isFocusableElement(s)&&(this.showActiveIndicator=!0);const t=this.tabIds[o],i=this.tabpanelIds[o];s.setAttribute("id",t),s.setAttribute("aria-selected",e?"true":"false"),s.setAttribute("aria-controls",i),s.addEventListener("click",this.handleTabClick),s.addEventListener("keydown",this.handleTabKeyDown),s.setAttribute("tabindex",e?"0":"-1"),e&&(this.activetab=s,this.activeid=t)}s.style[e]="",s.style[t]="",s.style[i]=`${o+1}`,this.isHorizontal()?s.classList.remove("vertical"):s.classList.add("vertical")}))},this.setTabPanels=()=>{this.tabpanels.forEach(((e,t)=>{const i=this.tabIds[t],s=this.tabpanelIds[t];e.setAttribute("id",s),e.setAttribute("aria-labelledby",i),this.activeTabIndex!==t?e.setAttribute("hidden",""):e.removeAttribute("hidden")}))},this.handleTabClick=e=>{const t=e.currentTarget;1===t.nodeType&&this.isFocusableElement(t)&&(this.prevActiveTabIndex=this.activeTabIndex,this.activeTabIndex=this.tabs.indexOf(t),this.setComponent())},this.handleTabKeyDown=e=>{if(this.isHorizontal())switch(e.key){case os:e.preventDefault(),this.adjustBackward(e);break;case ns:e.preventDefault(),this.adjustForward(e)}else switch(e.key){case rs:e.preventDefault(),this.adjustBackward(e);break;case ss:e.preventDefault(),this.adjustForward(e)}switch(e.key){case ds:e.preventDefault(),this.adjust(-this.activeTabIndex);break;case cs:e.preventDefault(),this.adjust(this.tabs.length-this.activeTabIndex-1)}},this.adjustForward=e=>{const t=this.tabs;let i=0;for(i=this.activetab?t.indexOf(this.activetab)+1:1,i===t.length&&(i=0);i<t.length&&t.length>1;){if(this.isFocusableElement(t[i])){this.moveToTabByIndex(t,i);break}if(this.activetab&&i===t.indexOf(this.activetab))break;i+1>=t.length?i=0:i+=1}},this.adjustBackward=e=>{const t=this.tabs;let i=0;for(i=this.activetab?t.indexOf(this.activetab)-1:0,i=i<0?t.length-1:i;i>=0&&t.length>1;){if(this.isFocusableElement(t[i])){this.moveToTabByIndex(t,i);break}i-1<0?i=t.length-1:i-=1}},this.moveToTabByIndex=(e,t)=>{const i=e[t];this.activetab=i,this.prevActiveTabIndex=this.activeTabIndex,this.activeTabIndex=t,i.focus(),this.setComponent()}}orientationChanged(){this.$fastController.isConnected&&(this.setTabs(),this.setTabPanels(),this.handleActiveIndicatorPosition())}activeidChanged(e,t){this.$fastController.isConnected&&this.tabs.length<=this.tabpanels.length&&(this.prevActiveTabIndex=this.tabs.findIndex((t=>t.id===e)),this.setTabs(),this.setTabPanels(),this.handleActiveIndicatorPosition())}tabsChanged(){this.$fastController.isConnected&&this.tabs.length<=this.tabpanels.length&&(this.tabIds=this.getTabIds(),this.tabpanelIds=this.getTabPanelIds(),this.setTabs(),this.setTabPanels(),this.handleActiveIndicatorPosition())}tabpanelsChanged(){this.$fastController.isConnected&&this.tabpanels.length<=this.tabs.length&&(this.tabIds=this.getTabIds(),this.tabpanelIds=this.getTabPanelIds(),this.setTabs(),this.setTabPanels(),this.handleActiveIndicatorPosition())}getActiveIndex(){return void 0!==this.activeid?-1===this.tabIds.indexOf(this.activeid)?0:this.tabIds.indexOf(this.activeid):0}getTabIds(){return this.tabs.map((e=>{var t;return null!==(t=e.getAttribute("id"))&&void 0!==t?t:`tab-${To()}`}))}getTabPanelIds(){return this.tabpanels.map((e=>{var t;return null!==(t=e.getAttribute("id"))&&void 0!==t?t:`panel-${To()}`}))}setComponent(){this.activeTabIndex!==this.prevActiveTabIndex&&(this.activeid=this.tabIds[this.activeTabIndex],this.focusTab(),this.change())}isHorizontal(){return this.orientation===Yo}handleActiveIndicatorPosition(){this.showActiveIndicator&&this.activeindicator&&this.activeTabIndex!==this.prevActiveTabIndex&&(this.ticking?this.ticking=!1:(this.ticking=!0,this.animateActiveIndicator()))}animateActiveIndicator(){this.ticking=!0;const e=this.isHorizontal()?"gridColumn":"gridRow",t=this.isHorizontal()?"translateX":"translateY",i=this.isHorizontal()?"offsetLeft":"offsetTop",s=this.activeIndicatorRef[i];this.activeIndicatorRef.style[e]=`${this.activeTabIndex+1}`;const o=this.activeIndicatorRef[i];this.activeIndicatorRef.style[e]=`${this.prevActiveTabIndex+1}`;const n=o-s;this.activeIndicatorRef.style.transform=`${t}(${n}px)`,this.activeIndicatorRef.classList.add("activeIndicatorTransition"),this.activeIndicatorRef.addEventListener("transitionend",(()=>{this.ticking=!1,this.activeIndicatorRef.style[e]=`${this.activeTabIndex+1}`,this.activeIndicatorRef.style.transform=`${t}(0px)`,this.activeIndicatorRef.classList.remove("activeIndicatorTransition")}))}adjust(e){const t=this.tabs.filter((e=>this.isFocusableElement(e))),i=t.indexOf(this.activetab),s=(o=t.length-1,n=i+e,Math.min(Math.max(n,0),o));var o,n;const r=this.tabs.indexOf(t[s]);r>-1&&this.moveToTabByIndex(this.tabs,r)}focusTab(){this.tabs[this.activeTabIndex].focus()}connectedCallback(){super.connectedCallback(),this.tabIds=this.getTabIds(),this.tabpanelIds=this.getTabPanelIds(),this.activeTabIndex=this.getActiveIndex()}}N([L],Jo.prototype,"orientation",void 0),N([L],Jo.prototype,"activeid",void 0),N([v],Jo.prototype,"tabs",void 0),N([v],Jo.prototype,"tabpanels",void 0),N([L({mode:"boolean"})],Jo.prototype,"activeindicator",void 0),N([v],Jo.prototype,"activeIndicatorRef",void 0),N([v],Jo.prototype,"showActiveIndicator",void 0),ts(Jo,Ji);class Zo extends Be{}N([L({mode:"boolean"})],Zo.prototype,"disabled",void 0);class en extends Be{}class tn extends Jo{connectedCallback(){super.connectedCallback(),this.orientation&&(this.orientation=Yo),this.getAttribute("aria-label")||this.setAttribute("aria-label","Panels")}}const sn=tn.compose({baseName:"panels",template:(e,t)=>Ht`
    <template class="${e=>e.orientation}">
        ${es(0,t)}
        <div class="tablist" part="tablist" role="tablist">
            <slot class="tab" name="tab" part="tab" ${Os("tabs")}></slot>

            ${jo((e=>e.showActiveIndicator),Ht`
                    <div
                        ${Yi("activeIndicatorRef")}
                        class="activeIndicator"
                        part="activeIndicator"
                    ></div>
                `)}
        </div>
        ${Zi(0,t)}
        <div class="tabpanel" part="tabpanel">
            <slot name="tabpanel" ${Os("tabpanels")}></slot>
        </div>
    </template>
`,styles:(e,t)=>Mt`
	${zt("grid")} :host {
		box-sizing: border-box;
		font-family: ${Zt};
		font-size: ${si};
		line-height: ${oi};
		color: ${ei};
		grid-template-columns: auto 1fr auto;
		grid-template-rows: auto 1fr;
		overflow-x: auto;
	}
	.tablist {
		display: grid;
		grid-template-rows: auto auto;
		grid-template-columns: auto;
		column-gap: calc(${Xt} * 8px);
		position: relative;
		width: max-content;
		align-self: end;
		padding: calc(${Xt} * 1px) calc(${Xt} * 1px) 0;
		box-sizing: border-box;
	}
	.start,
	.end {
		align-self: center;
	}
	.activeIndicator {
		grid-row: 2;
		grid-column: 1;
		width: 100%;
		height: calc((${Xt} / 4) * 1px);
		justify-self: center;
		background: ${qi};
		margin: 0;
		border-radius: calc(${Wt} * 1px);
	}
	.activeIndicatorTransition {
		transition: transform 0.01s linear;
	}
	.tabpanel {
		grid-row: 2;
		grid-column-start: 1;
		grid-column-end: 4;
		position: relative;
	}
`});class on extends Zo{connectedCallback(){super.connectedCallback(),this.disabled&&(this.disabled=!1),this.textContent&&this.setAttribute("aria-label",this.textContent)}}const nn=on.compose({baseName:"panel-tab",template:(e,t)=>Ht`
    <template slot="tab" role="tab" aria-disabled="${e=>e.disabled}">
        <slot></slot>
    </template>
`,styles:(e,t)=>Mt`
	${zt("inline-flex")} :host {
		box-sizing: border-box;
		font-family: ${Zt};
		font-size: ${si};
		line-height: ${oi};
		height: calc(${Xt} * 7px);
		padding: calc(${Xt} * 1px) 0;
		color: ${Ui};
		fill: currentcolor;
		border-radius: calc(${Wt} * 1px);
		border: solid calc(${Gt} * 1px) transparent;
		align-items: center;
		justify-content: center;
		grid-row: 1;
		cursor: pointer;
	}
	:host(:hover) {
		color: ${qi};
		fill: currentcolor;
	}
	:host(:active) {
		color: ${qi};
		fill: currentcolor;
	}
	:host([aria-selected='true']) {
		background: transparent;
		color: ${qi};
		fill: currentcolor;
	}
	:host([aria-selected='true']:hover) {
		background: transparent;
		color: ${qi};
		fill: currentcolor;
	}
	:host([aria-selected='true']:active) {
		background: transparent;
		color: ${qi};
		fill: currentcolor;
	}
	:host(:${Es}) {
		outline: none;
		border: solid calc(${Gt} * 1px) ${_i};
	}
	:host(:focus) {
		outline: none;
	}
	::slotted(vscode-badge) {
		margin-inline-start: calc(${Xt} * 2px);
	}
`});class rn extends en{}const an=rn.compose({baseName:"panel-view",template:(e,t)=>Ht`
    <template slot="tabpanel" role="tabpanel">
        <slot></slot>
    </template>
`,styles:(e,t)=>Mt`
	${zt("flex")} :host {
		color: inherit;
		background-color: transparent;
		border: solid calc(${Gt} * 1px) transparent;
		box-sizing: border-box;
		font-size: ${si};
		line-height: ${oi};
		padding: 10px calc((${Xt} + 2) * 1px);
	}
`});class ln extends Be{constructor(){super(...arguments),this.percentComplete=0}valueChanged(){this.$fastController.isConnected&&this.updatePercentComplete()}minChanged(){this.$fastController.isConnected&&this.updatePercentComplete()}maxChanged(){this.$fastController.isConnected&&this.updatePercentComplete()}connectedCallback(){super.connectedCallback(),this.updatePercentComplete()}updatePercentComplete(){const e="number"==typeof this.min?this.min:0,t="number"==typeof this.max?this.max:100,i="number"==typeof this.value?this.value:0,s=t-e;this.percentComplete=0===s?0:Math.fround((i-e)/s*100)}}N([L({converter:P})],ln.prototype,"value",void 0),N([L({converter:P})],ln.prototype,"min",void 0),N([L({converter:P})],ln.prototype,"max",void 0),N([L({mode:"boolean"})],ln.prototype,"paused",void 0),N([v],ln.prototype,"percentComplete",void 0);class dn extends ln{connectedCallback(){super.connectedCallback(),this.paused&&(this.paused=!1),this.setAttribute("aria-label","Loading"),this.setAttribute("aria-live","assertive"),this.setAttribute("role","alert")}attributeChangedCallback(e,t,i){"value"===e&&this.removeAttribute("value")}}const cn=dn.compose({baseName:"progress-ring",template:(e,t)=>Ht`
    <template
        role="progressbar"
        aria-valuenow="${e=>e.value}"
        aria-valuemin="${e=>e.min}"
        aria-valuemax="${e=>e.max}"
        class="${e=>e.paused?"paused":""}"
    >
        ${jo((e=>"number"==typeof e.value),Ht`
                <svg
                    class="progress"
                    part="progress"
                    viewBox="0 0 16 16"
                    slot="determinate"
                >
                    <circle
                        class="background"
                        part="background"
                        cx="8px"
                        cy="8px"
                        r="7px"
                    ></circle>
                    <circle
                        class="determinate"
                        part="determinate"
                        style="stroke-dasharray: ${e=>44*e.percentComplete/100}px ${44}px"
                        cx="8px"
                        cy="8px"
                        r="7px"
                    ></circle>
                </svg>
            `,Ht`
                <slot name="indeterminate" slot="indeterminate">
                    ${t.indeterminateIndicator||""}
                </slot>
            `)}
    </template>
`,styles:(e,t)=>Mt`
	${zt("flex")} :host {
		align-items: center;
		outline: none;
		height: calc(${Xt} * 7px);
		width: calc(${Xt} * 7px);
		margin: 0;
	}
	.progress {
		height: 100%;
		width: 100%;
	}
	.background {
		fill: none;
		stroke: transparent;
		stroke-width: calc(${Xt} / 2 * 1px);
	}
	.indeterminate-indicator-1 {
		fill: none;
		stroke: ${ji};
		stroke-width: calc(${Xt} / 2 * 1px);
		stroke-linecap: square;
		transform-origin: 50% 50%;
		transform: rotate(-90deg);
		transition: all 0.2s ease-in-out;
		animation: spin-infinite 2s linear infinite;
	}
	@keyframes spin-infinite {
		0% {
			stroke-dasharray: 0.01px 43.97px;
			transform: rotate(0deg);
		}
		50% {
			stroke-dasharray: 21.99px 21.99px;
			transform: rotate(450deg);
		}
		100% {
			stroke-dasharray: 0.01px 43.97px;
			transform: rotate(1080deg);
		}
	}
`,indeterminateIndicator:'\n\t\t<svg class="progress" part="progress" viewBox="0 0 16 16">\n\t\t\t<circle\n\t\t\t\tclass="background"\n\t\t\t\tpart="background"\n\t\t\t\tcx="8px"\n\t\t\t\tcy="8px"\n\t\t\t\tr="7px"\n\t\t\t></circle>\n\t\t\t<circle\n\t\t\t\tclass="indeterminate-indicator-1"\n\t\t\t\tpart="indeterminate-indicator-1"\n\t\t\t\tcx="8px"\n\t\t\t\tcy="8px"\n\t\t\t\tr="7px"\n\t\t\t></circle>\n\t\t</svg>\n\t'});var hn;!function(e){e.ltr="ltr",e.rtl="rtl"}(hn||(hn={}));class un extends Be{constructor(){super(...arguments),this.orientation=xo.horizontal,this.radioChangeHandler=e=>{const t=e.target;t.checked&&(this.slottedRadioButtons.forEach((e=>{e!==t&&(e.checked=!1,this.isInsideFoundationToolbar||e.setAttribute("tabindex","-1"))})),this.selectedRadio=t,this.value=t.value,t.setAttribute("tabindex","0"),this.focusedRadio=t),e.stopPropagation()},this.moveToRadioByIndex=(e,t)=>{const i=e[t];this.isInsideToolbar||(i.setAttribute("tabindex","0"),i.readOnly?this.slottedRadioButtons.forEach((e=>{e!==i&&e.setAttribute("tabindex","-1")})):(i.checked=!0,this.selectedRadio=i)),this.focusedRadio=i,i.focus()},this.moveRightOffGroup=()=>{var e;null===(e=this.nextElementSibling)||void 0===e||e.focus()},this.moveLeftOffGroup=()=>{var e;null===(e=this.previousElementSibling)||void 0===e||e.focus()},this.focusOutHandler=e=>{const t=this.slottedRadioButtons,i=e.target,s=null!==i?t.indexOf(i):0,o=this.focusedRadio?t.indexOf(this.focusedRadio):-1;return(0===o&&s===o||o===t.length-1&&o===s)&&(this.selectedRadio?(this.focusedRadio=this.selectedRadio,this.isInsideFoundationToolbar||(this.selectedRadio.setAttribute("tabindex","0"),t.forEach((e=>{e!==this.selectedRadio&&e.setAttribute("tabindex","-1")})))):(this.focusedRadio=t[0],this.focusedRadio.setAttribute("tabindex","0"),t.forEach((e=>{e!==this.focusedRadio&&e.setAttribute("tabindex","-1")})))),!0},this.clickHandler=e=>{const t=e.target;if(t){const e=this.slottedRadioButtons;t.checked||0===e.indexOf(t)?(t.setAttribute("tabindex","0"),this.selectedRadio=t):(t.setAttribute("tabindex","-1"),this.selectedRadio=null),this.focusedRadio=t}e.preventDefault()},this.shouldMoveOffGroupToTheRight=(e,t,i)=>e===t.length&&this.isInsideToolbar&&i===ns,this.shouldMoveOffGroupToTheLeft=(e,t)=>(this.focusedRadio?e.indexOf(this.focusedRadio)-1:0)<0&&this.isInsideToolbar&&t===os,this.checkFocusedRadio=()=>{null===this.focusedRadio||this.focusedRadio.readOnly||this.focusedRadio.checked||(this.focusedRadio.checked=!0,this.focusedRadio.setAttribute("tabindex","0"),this.focusedRadio.focus(),this.selectedRadio=this.focusedRadio)},this.moveRight=e=>{const t=this.slottedRadioButtons;let i=0;if(i=this.focusedRadio?t.indexOf(this.focusedRadio)+1:1,this.shouldMoveOffGroupToTheRight(i,t,e.key))this.moveRightOffGroup();else for(i===t.length&&(i=0);i<t.length&&t.length>1;){if(!t[i].disabled){this.moveToRadioByIndex(t,i);break}if(this.focusedRadio&&i===t.indexOf(this.focusedRadio))break;if(i+1>=t.length){if(this.isInsideToolbar)break;i=0}else i+=1}},this.moveLeft=e=>{const t=this.slottedRadioButtons;let i=0;if(i=this.focusedRadio?t.indexOf(this.focusedRadio)-1:0,i=i<0?t.length-1:i,this.shouldMoveOffGroupToTheLeft(t,e.key))this.moveLeftOffGroup();else for(;i>=0&&t.length>1;){if(!t[i].disabled){this.moveToRadioByIndex(t,i);break}if(this.focusedRadio&&i===t.indexOf(this.focusedRadio))break;i-1<0?i=t.length-1:i-=1}},this.keydownHandler=e=>{const t=e.key;if(t in ps&&this.isInsideFoundationToolbar)return!0;switch(t){case as:this.checkFocusedRadio();break;case ns:case ss:this.direction===hn.ltr?this.moveRight(e):this.moveLeft(e);break;case os:case rs:this.direction===hn.ltr?this.moveLeft(e):this.moveRight(e);break;default:return!0}}}readOnlyChanged(){void 0!==this.slottedRadioButtons&&this.slottedRadioButtons.forEach((e=>{this.readOnly?e.readOnly=!0:e.readOnly=!1}))}disabledChanged(){void 0!==this.slottedRadioButtons&&this.slottedRadioButtons.forEach((e=>{this.disabled?e.disabled=!0:e.disabled=!1}))}nameChanged(){this.slottedRadioButtons&&this.slottedRadioButtons.forEach((e=>{e.setAttribute("name",this.name)}))}valueChanged(){this.slottedRadioButtons&&this.slottedRadioButtons.forEach((e=>{e.value===this.value&&(e.checked=!0,this.selectedRadio=e)})),this.$emit("change")}slottedRadioButtonsChanged(e,t){this.slottedRadioButtons&&this.slottedRadioButtons.length>0&&this.setupRadioButtons()}get parentToolbar(){return this.closest('[role="toolbar"]')}get isInsideToolbar(){var e;return null!==(e=this.parentToolbar)&&void 0!==e&&e}get isInsideFoundationToolbar(){var e;return!!(null===(e=this.parentToolbar)||void 0===e?void 0:e.$fastController)}connectedCallback(){super.connectedCallback(),this.direction=(()=>{const e=this.closest("[dir]");return null!==e&&"rtl"===e.dir?hn.rtl:hn.ltr})(),this.setupRadioButtons()}disconnectedCallback(){this.slottedRadioButtons.forEach((e=>{e.removeEventListener("change",this.radioChangeHandler)}))}setupRadioButtons(){const e=this.slottedRadioButtons.filter((e=>e.hasAttribute("checked"))),t=e?e.length:0;t>1&&(e[t-1].checked=!0);let i=!1;if(this.slottedRadioButtons.forEach((e=>{void 0!==this.name&&e.setAttribute("name",this.name),this.disabled&&(e.disabled=!0),this.readOnly&&(e.readOnly=!0),this.value&&this.value===e.value?(this.selectedRadio=e,this.focusedRadio=e,e.checked=!0,e.setAttribute("tabindex","0"),i=!0):(this.isInsideFoundationToolbar||e.setAttribute("tabindex","-1"),e.checked=!1),e.addEventListener("change",this.radioChangeHandler)})),void 0===this.value&&this.slottedRadioButtons.length>0){const e=this.slottedRadioButtons.filter((e=>e.hasAttribute("checked"))),t=null!==e?e.length:0;if(t>0&&!i){const i=e[t-1];i.checked=!0,this.focusedRadio=i,i.setAttribute("tabindex","0")}else this.slottedRadioButtons[0].setAttribute("tabindex","0"),this.focusedRadio=this.slottedRadioButtons[0]}}}N([L({attribute:"readonly",mode:"boolean"})],un.prototype,"readOnly",void 0),N([L({attribute:"disabled",mode:"boolean"})],un.prototype,"disabled",void 0),N([L],un.prototype,"name",void 0),N([L],un.prototype,"value",void 0),N([L],un.prototype,"orientation",void 0),N([v],un.prototype,"childItems",void 0),N([v],un.prototype,"slottedRadioButtons",void 0);class pn extends un{connectedCallback(){super.connectedCallback();const e=this.querySelector("label");if(e){const t="radio-group-"+Math.random().toString(16).slice(2);e.setAttribute("id",t),this.setAttribute("aria-labelledby",t)}}}const fn=pn.compose({baseName:"radio-group",template:(e,t)=>Ht`
    <template
        role="radiogroup"
        aria-disabled="${e=>e.disabled}"
        aria-readonly="${e=>e.readOnly}"
        @click="${(e,t)=>e.clickHandler(t.event)}"
        @keydown="${(e,t)=>e.keydownHandler(t.event)}"
        @focusout="${(e,t)=>e.focusOutHandler(t.event)}"
    >
        <slot name="label"></slot>
        <div
            class="positioning-region ${e=>e.orientation===xo.horizontal?"horizontal":"vertical"}"
            part="positioning-region"
        >
            <slot
                ${Os({property:"slottedRadioButtons",filter:ks("[role=radio]")})}
            ></slot>
        </div>
    </template>
`,styles:(e,t)=>Mt`
	${zt("flex")} :host {
		align-items: flex-start;
		margin: calc(${Xt} * 1px) 0;
		flex-direction: column;
	}
	.positioning-region {
		display: flex;
		flex-wrap: wrap;
	}
	:host([orientation='vertical']) .positioning-region {
		flex-direction: column;
	}
	:host([orientation='horizontal']) .positioning-region {
		flex-direction: row;
	}
	::slotted([slot='label']) {
		color: ${ei};
		font-size: ${si};
		margin: calc(${Xt} * 1px) 0;
	}
`});class bn extends Be{}class gn extends(ys(bn)){constructor(){super(...arguments),this.proxy=document.createElement("input")}}class mn extends gn{constructor(){super(),this.initialValue="on",this.keypressHandler=e=>{if(e.key!==hs)return!0;this.checked||this.readOnly||(this.checked=!0)},this.proxy.setAttribute("type","radio")}readOnlyChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.readOnly=this.readOnly)}defaultCheckedChanged(){var e;this.$fastController.isConnected&&!this.dirtyChecked&&(this.isInsideRadioGroup()||(this.checked=null!==(e=this.defaultChecked)&&void 0!==e&&e,this.dirtyChecked=!1))}connectedCallback(){var e,t;super.connectedCallback(),this.validate(),"radiogroup"!==(null===(e=this.parentElement)||void 0===e?void 0:e.getAttribute("role"))&&null===this.getAttribute("tabindex")&&(this.disabled||this.setAttribute("tabindex","0")),this.checkedAttribute&&(this.dirtyChecked||this.isInsideRadioGroup()||(this.checked=null!==(t=this.defaultChecked)&&void 0!==t&&t,this.dirtyChecked=!1))}isInsideRadioGroup(){return null!==this.closest("[role=radiogroup]")}clickHandler(e){this.disabled||this.readOnly||this.checked||(this.checked=!0)}}N([L({attribute:"readonly",mode:"boolean"})],mn.prototype,"readOnly",void 0),N([v],mn.prototype,"name",void 0),N([v],mn.prototype,"defaultSlottedNodes",void 0);class vn extends mn{connectedCallback(){super.connectedCallback(),this.textContent?this.setAttribute("aria-label",this.textContent):this.setAttribute("aria-label","Radio")}}const yn=vn.compose({baseName:"radio",template:(e,t)=>Ht`
    <template
        role="radio"
        class="${e=>e.checked?"checked":""} ${e=>e.readOnly?"readonly":""}"
        aria-checked="${e=>e.checked}"
        aria-required="${e=>e.required}"
        aria-disabled="${e=>e.disabled}"
        aria-readonly="${e=>e.readOnly}"
        @keypress="${(e,t)=>e.keypressHandler(t.event)}"
        @click="${(e,t)=>e.clickHandler(t.event)}"
    >
        <div part="control" class="control">
            <slot name="checked-indicator">
                ${t.checkedIndicator||""}
            </slot>
        </div>
        <label
            part="label"
            class="${e=>e.defaultSlottedNodes&&e.defaultSlottedNodes.length?"label":"label label__hidden"}"
        >
            <slot ${Os("defaultSlottedNodes")}></slot>
        </label>
    </template>
`,styles:(e,t)=>Mt`
	${zt("inline-flex")} :host {
		align-items: center;
		flex-direction: row;
		font-size: ${si};
		line-height: ${oi};
		margin: calc(${Xt} * 1px) 0;
		outline: none;
		position: relative;
		transition: all 0.2s ease-in-out;
		user-select: none;
	}
	.control {
		background: ${Si};
		border-radius: 999px;
		border: calc(${Gt} * 1px) solid ${Ei};
		box-sizing: border-box;
		cursor: pointer;
		height: calc(${Xt} * 4px);
		position: relative;
		outline: none;
		width: calc(${Xt} * 4px);
	}
	.label {
		color: ${ei};
		cursor: pointer;
		font-family: ${Zt};
		margin-inline-end: calc(${Xt} * 2px + 2px);
		padding-inline-start: calc(${Xt} * 2px + 2px);
	}
	.label__hidden {
		display: none;
		visibility: hidden;
	}
	.control,
	.checked-indicator {
		flex-shrink: 0;
	}
	.checked-indicator {
		background: ${ei};
		border-radius: 999px;
		display: inline-block;
		inset: calc(${Xt} * 1px);
		opacity: 0;
		pointer-events: none;
		position: absolute;
	}
	:host(:not([disabled])) .control:hover {
		background: ${Si};
		border-color: ${Ei};
	}
	:host(:not([disabled])) .control:active {
		background: ${Si};
		border-color: ${Jt};
	}
	:host(:${Es}) .control {
		border: calc(${Gt} * 1px) solid ${Jt};
	}
	:host([aria-checked='true']) .control {
		background: ${Si};
		border: calc(${Gt} * 1px) solid ${Ei};
	}
	:host([aria-checked='true']:not([disabled])) .control:hover {
		background: ${Si};
		border: calc(${Gt} * 1px) solid ${Ei};
	}
	:host([aria-checked='true']:not([disabled])) .control:active {
		background: ${Si};
		border: calc(${Gt} * 1px) solid ${Jt};
	}
	:host([aria-checked="true"]:${Es}:not([disabled])) .control {
		border: calc(${Gt} * 1px) solid ${Jt};
	}
	:host([disabled]) .label,
	:host([readonly]) .label,
	:host([readonly]) .control,
	:host([disabled]) .control {
		cursor: ${Rs};
	}
	:host([aria-checked='true']) .checked-indicator {
		opacity: 1;
	}
	:host([disabled]) {
		opacity: ${Yt};
	}
`,checkedIndicator:'\n\t\t<div part="checked-indicator" class="checked-indicator"></div>\n\t'});class xn extends ct{connectedCallback(){super.connectedCallback(),this.circular&&(this.circular=!1)}}const Cn=xn.compose({baseName:"tag",template:Vt,styles:(e,t)=>Mt`
	${zt("inline-block")} :host {
		box-sizing: border-box;
		font-family: ${Zt};
		font-size: ${ni};
		line-height: ${ri};
	}
	.control {
		background-color: ${ui};
		border: calc(${Gt} * 1px) solid ${fi};
		border-radius: ${Gi};
		color: ${pi};
		padding: calc(${Xt} * 0.5px) calc(${Xt} * 1px);
		text-transform: uppercase;
	}
`});class $n extends Be{}class wn extends(vs($n)){constructor(){super(...arguments),this.proxy=document.createElement("input")}}const kn={email:"email",password:"password",tel:"tel",text:"text",url:"url"};class In extends wn{constructor(){super(...arguments),this.type=kn.text}readOnlyChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.readOnly=this.readOnly,this.validate())}autofocusChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.autofocus=this.autofocus,this.validate())}placeholderChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.placeholder=this.placeholder)}typeChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.type=this.type,this.validate())}listChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.setAttribute("list",this.list),this.validate())}maxlengthChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.maxLength=this.maxlength,this.validate())}minlengthChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.minLength=this.minlength,this.validate())}patternChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.pattern=this.pattern,this.validate())}sizeChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.size=this.size)}spellcheckChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.spellcheck=this.spellcheck)}connectedCallback(){super.connectedCallback(),this.proxy.setAttribute("type",this.type),this.validate(),this.autofocus&&f.queueUpdate((()=>{this.focus()}))}select(){this.control.select(),this.$emit("select")}handleTextInput(){this.value=this.control.value}handleChange(){this.$emit("change")}validate(){super.validate(this.control)}}N([L({attribute:"readonly",mode:"boolean"})],In.prototype,"readOnly",void 0),N([L({mode:"boolean"})],In.prototype,"autofocus",void 0),N([L],In.prototype,"placeholder",void 0),N([L],In.prototype,"type",void 0),N([L],In.prototype,"list",void 0),N([L({converter:P})],In.prototype,"maxlength",void 0),N([L({converter:P})],In.prototype,"minlength",void 0),N([L],In.prototype,"pattern",void 0),N([L({converter:P})],In.prototype,"size",void 0),N([L({mode:"boolean"})],In.prototype,"spellcheck",void 0),N([v],In.prototype,"defaultSlottedNodes",void 0);class Tn{}ts(Tn,Qi),ts(In,Ji,Tn);class On extends Be{}class Sn extends(vs(On)){constructor(){super(...arguments),this.proxy=document.createElement("textarea")}}const En={none:"none",both:"both",horizontal:"horizontal",vertical:"vertical"};class Rn extends Sn{constructor(){super(...arguments),this.resize=En.none,this.cols=20,this.handleTextInput=()=>{this.value=this.control.value}}readOnlyChanged(){this.proxy instanceof HTMLTextAreaElement&&(this.proxy.readOnly=this.readOnly)}autofocusChanged(){this.proxy instanceof HTMLTextAreaElement&&(this.proxy.autofocus=this.autofocus)}listChanged(){this.proxy instanceof HTMLTextAreaElement&&this.proxy.setAttribute("list",this.list)}maxlengthChanged(){this.proxy instanceof HTMLTextAreaElement&&(this.proxy.maxLength=this.maxlength)}minlengthChanged(){this.proxy instanceof HTMLTextAreaElement&&(this.proxy.minLength=this.minlength)}spellcheckChanged(){this.proxy instanceof HTMLTextAreaElement&&(this.proxy.spellcheck=this.spellcheck)}select(){this.control.select(),this.$emit("select")}handleChange(){this.$emit("change")}validate(){super.validate(this.control)}}N([L({mode:"boolean"})],Rn.prototype,"readOnly",void 0),N([L],Rn.prototype,"resize",void 0),N([L({mode:"boolean"})],Rn.prototype,"autofocus",void 0),N([L({attribute:"form"})],Rn.prototype,"formId",void 0),N([L],Rn.prototype,"list",void 0),N([L({converter:P})],Rn.prototype,"maxlength",void 0),N([L({converter:P})],Rn.prototype,"minlength",void 0),N([L],Rn.prototype,"name",void 0),N([L],Rn.prototype,"placeholder",void 0),N([L({converter:P,mode:"fromView"})],Rn.prototype,"cols",void 0),N([L({converter:P,mode:"fromView"})],Rn.prototype,"rows",void 0),N([L({mode:"boolean"})],Rn.prototype,"spellcheck",void 0),N([v],Rn.prototype,"defaultSlottedNodes",void 0),ts(Rn,Tn);class An extends Rn{connectedCallback(){super.connectedCallback(),this.textContent?this.setAttribute("aria-label",this.textContent):this.setAttribute("aria-label","Text area")}}const Dn=An.compose({baseName:"text-area",template:(e,t)=>Ht`
    <template
        class="
            ${e=>e.readOnly?"readonly":""}
            ${e=>e.resize!==En.none?`resize-${e.resize}`:""}"
    >
        <label
            part="label"
            for="control"
            class="${e=>e.defaultSlottedNodes&&e.defaultSlottedNodes.length?"label":"label label__hidden"}"
        >
            <slot ${Os("defaultSlottedNodes")}></slot>
        </label>
        <textarea
            part="control"
            class="control"
            id="control"
            ?autofocus="${e=>e.autofocus}"
            cols="${e=>e.cols}"
            ?disabled="${e=>e.disabled}"
            form="${e=>e.form}"
            list="${e=>e.list}"
            maxlength="${e=>e.maxlength}"
            minlength="${e=>e.minlength}"
            name="${e=>e.name}"
            placeholder="${e=>e.placeholder}"
            ?readonly="${e=>e.readOnly}"
            ?required="${e=>e.required}"
            rows="${e=>e.rows}"
            ?spellcheck="${e=>e.spellcheck}"
            :value="${e=>e.value}"
            aria-atomic="${e=>e.ariaAtomic}"
            aria-busy="${e=>e.ariaBusy}"
            aria-controls="${e=>e.ariaControls}"
            aria-current="${e=>e.ariaCurrent}"
            aria-describedby="${e=>e.ariaDescribedby}"
            aria-details="${e=>e.ariaDetails}"
            aria-disabled="${e=>e.ariaDisabled}"
            aria-errormessage="${e=>e.ariaErrormessage}"
            aria-flowto="${e=>e.ariaFlowto}"
            aria-haspopup="${e=>e.ariaHaspopup}"
            aria-hidden="${e=>e.ariaHidden}"
            aria-invalid="${e=>e.ariaInvalid}"
            aria-keyshortcuts="${e=>e.ariaKeyshortcuts}"
            aria-label="${e=>e.ariaLabel}"
            aria-labelledby="${e=>e.ariaLabelledby}"
            aria-live="${e=>e.ariaLive}"
            aria-owns="${e=>e.ariaOwns}"
            aria-relevant="${e=>e.ariaRelevant}"
            aria-roledescription="${e=>e.ariaRoledescription}"
            @input="${(e,t)=>e.handleTextInput()}"
            @change="${e=>e.handleChange()}"
            ${Yi("control")}
        ></textarea>
    </template>
`,styles:(e,t)=>Mt`
	${zt("inline-block")} :host {
		font-family: ${Zt};
		outline: none;
		user-select: none;
	}
	.control {
		box-sizing: border-box;
		position: relative;
		color: ${Mi};
		background: ${Vi};
		border-radius: calc(${Qt} * 1px);
		border: calc(${Gt} * 1px) solid ${Li};
		font: inherit;
		font-size: ${si};
		line-height: ${oi};
		padding: calc(${Xt} * 2px + 1px);
		width: 100%;
		min-width: ${ii};
		resize: none;
	}
	.control:hover:enabled {
		background: ${Vi};
		border-color: ${Li};
	}
	.control:active:enabled {
		background: ${Vi};
		border-color: ${Jt};
	}
	.control:hover,
	.control:${Es},
	.control:disabled,
	.control:active {
		outline: none;
	}
	.control::-webkit-scrollbar {
		width: ${ai};
		height: ${li};
	}
	.control::-webkit-scrollbar-corner {
		background: ${Vi};
	}
	.control::-webkit-scrollbar-thumb {
		background: ${di};
	}
	.control::-webkit-scrollbar-thumb:hover {
		background: ${ci};
	}
	.control::-webkit-scrollbar-thumb:active {
		background: ${hi};
	}
	:host(:focus-within:not([disabled])) .control {
		border-color: ${Jt};
	}
	:host([resize='both']) .control {
		resize: both;
	}
	:host([resize='horizontal']) .control {
		resize: horizontal;
	}
	:host([resize='vertical']) .control {
		resize: vertical;
	}
	.label {
		display: block;
		color: ${ei};
		cursor: pointer;
		font-size: ${si};
		line-height: ${oi};
		margin-bottom: 2px;
	}
	.label__hidden {
		display: none;
		visibility: hidden;
	}
	:host([disabled]) .label,
	:host([readonly]) .label,
	:host([readonly]) .control,
	:host([disabled]) .control {
		cursor: ${Rs};
	}
	:host([disabled]) {
		opacity: ${Yt};
	}
	:host([disabled]) .control {
		border-color: ${Li};
	}
`,shadowOptions:{delegatesFocus:!0}});function Bn(e,t,i){return e.nodeType!==Node.TEXT_NODE||"string"==typeof e.nodeValue&&!!e.nodeValue.trim().length}class Pn extends In{connectedCallback(){super.connectedCallback(),this.textContent?this.setAttribute("aria-label",this.textContent):this.setAttribute("aria-label","Text field")}}const Fn=Pn.compose({baseName:"text-field",template:(e,t)=>Ht`
    <template
        class="
            ${e=>e.readOnly?"readonly":""}
        "
    >
        <label
            part="label"
            for="control"
            class="${e=>e.defaultSlottedNodes&&e.defaultSlottedNodes.length?"label":"label label__hidden"}"
        >
            <slot
                ${Os({property:"defaultSlottedNodes",filter:Bn})}
            ></slot>
        </label>
        <div class="root" part="root">
            ${es(0,t)}
            <input
                class="control"
                part="control"
                id="control"
                @input="${e=>e.handleTextInput()}"
                @change="${e=>e.handleChange()}"
                ?autofocus="${e=>e.autofocus}"
                ?disabled="${e=>e.disabled}"
                list="${e=>e.list}"
                maxlength="${e=>e.maxlength}"
                minlength="${e=>e.minlength}"
                pattern="${e=>e.pattern}"
                placeholder="${e=>e.placeholder}"
                ?readonly="${e=>e.readOnly}"
                ?required="${e=>e.required}"
                size="${e=>e.size}"
                ?spellcheck="${e=>e.spellcheck}"
                :value="${e=>e.value}"
                type="${e=>e.type}"
                aria-atomic="${e=>e.ariaAtomic}"
                aria-busy="${e=>e.ariaBusy}"
                aria-controls="${e=>e.ariaControls}"
                aria-current="${e=>e.ariaCurrent}"
                aria-describedby="${e=>e.ariaDescribedby}"
                aria-details="${e=>e.ariaDetails}"
                aria-disabled="${e=>e.ariaDisabled}"
                aria-errormessage="${e=>e.ariaErrormessage}"
                aria-flowto="${e=>e.ariaFlowto}"
                aria-haspopup="${e=>e.ariaHaspopup}"
                aria-hidden="${e=>e.ariaHidden}"
                aria-invalid="${e=>e.ariaInvalid}"
                aria-keyshortcuts="${e=>e.ariaKeyshortcuts}"
                aria-label="${e=>e.ariaLabel}"
                aria-labelledby="${e=>e.ariaLabelledby}"
                aria-live="${e=>e.ariaLive}"
                aria-owns="${e=>e.ariaOwns}"
                aria-relevant="${e=>e.ariaRelevant}"
                aria-roledescription="${e=>e.ariaRoledescription}"
                ${Yi("control")}
            />
            ${Zi(0,t)}
        </div>
    </template>
`,styles:(e,t)=>Mt`
	${zt("inline-block")} :host {
		font-family: ${Zt};
		outline: none;
		user-select: none;
	}
	.root {
		box-sizing: border-box;
		position: relative;
		display: flex;
		flex-direction: row;
		color: ${Mi};
		background: ${Vi};
		border-radius: calc(${Qt} * 1px);
		border: calc(${Gt} * 1px) solid ${Li};
		height: calc(${ti} * 1px);
		min-width: ${ii};
	}
	.control {
		-webkit-appearance: none;
		font: inherit;
		background: transparent;
		border: 0;
		color: inherit;
		height: calc(100% - (${Xt} * 1px));
		width: 100%;
		margin-top: auto;
		margin-bottom: auto;
		border: none;
		padding: 0 calc(${Xt} * 2px + 1px);
		font-size: ${si};
		line-height: ${oi};
	}
	.control:hover,
	.control:${Es},
	.control:disabled,
	.control:active {
		outline: none;
	}
	.label {
		display: block;
		color: ${ei};
		cursor: pointer;
		font-size: ${si};
		line-height: ${oi};
		margin-bottom: 2px;
	}
	.label__hidden {
		display: none;
		visibility: hidden;
	}
	.start,
	.end {
		display: flex;
		margin: auto;
		fill: currentcolor;
	}
	::slotted(svg),
	::slotted(span) {
		width: calc(${Xt} * 4px);
		height: calc(${Xt} * 4px);
	}
	.start {
		margin-inline-start: calc(${Xt} * 2px);
	}
	.end {
		margin-inline-end: calc(${Xt} * 2px);
	}
	:host(:hover:not([disabled])) .root {
		background: ${Vi};
		border-color: ${Li};
	}
	:host(:active:not([disabled])) .root {
		background: ${Vi};
		border-color: ${Jt};
	}
	:host(:focus-within:not([disabled])) .root {
		border-color: ${Jt};
	}
	:host([disabled]) .label,
	:host([readonly]) .label,
	:host([readonly]) .control,
	:host([disabled]) .control {
		cursor: ${Rs};
	}
	:host([disabled]) {
		opacity: ${Yt};
	}
	:host([disabled]) .control {
		border-color: ${Li};
	}
`,shadowOptions:{delegatesFocus:!0}}),Ln={vsCodeBadge:Wi,vsCodeButton:Ls,vsCodeCheckbox:Ns,vsCodeDataGrid:bo,vsCodeDataGridCell:yo,vsCodeDataGridRow:mo,vsCodeDivider:ko,vsCodeDropdown:qo,vsCodeLink:Wo,vsCodeOption:Xo,vsCodePanels:sn,vsCodePanelTab:nn,vsCodePanelView:an,vsCodeProgressRing:cn,vsCodeRadioGroup:fn,vsCodeRadio:yn,vsCodeTag:Cn,vsCodeTextArea:Dn,vsCodeTextField:Fn,register(e,...t){if(e)for(const i in this)"register"!==i&&this[i]().register(e,...t)}}}},t={};function i(s){var o=t[s];if(void 0!==o)return o.exports;var n=t[s]={exports:{}};return e[s](n,n.exports,i),n.exports}i.d=(e,t)=>{for(var s in t)i.o(t,s)&&!i.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})},i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),i.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var s={};(()=>{var e=s;Object.defineProperty(e,"B",{value:!0});const t=i(894);(0,t.provideVSCodeDesignSystem)().register(t.allComponents);const o=acquireVsCodeApi();window.addEventListener("load",(function(){const e=document.getElementById("feedback-form"),t=document.getElementById("issue-type-dropdown"),i=document.createElement("section");i.classList.add("component-row");const s=document.createElement("section");s.classList.add("component-row");const n=document.createElement("section");n.classList.add("component-row"),t.addEventListener("change",(()=>{const r=t.value;i.remove(),s.remove(),n.remove(),"bug-report"===r?(i.innerHTML='\n          <section class="component-section">\n            <p class="required">Title</p>\n            <vscode-text-field size="30" id="issue-title" placeholder="Enter a title." />\n          </section>\n          <section class="component-section">\n            <p class="required">Steps to reproduce</p>\n            <vscode-text-area id="issue-description" cols="29" maxlength="4096" placeholder="Enter details." resize="both"/>\n          </section>\n          <section class="component-section">\n            <input type="checkbox" id="feedback-data-sharing-checkbox">\n            <label for="feedback-data-sharing-checkbox">I understand that feedback is shared with Red Hat and IBM.</label>\n          </section>\n          <section class="component-section">\n            <vscode-button id="issue-submit-button" disabled>Submit</vscode-button>\n        </section>\n      ',e.append(i)):"feature-request"===r?(s.innerHTML='\n        <section class="component-section">\n          <p class="required">Title</p>\n          <vscode-text-field size="30" id="issue-title" placeholder="Enter a title." />\n        </section>\n        <section class="component-section">\n          <p class="required">Description</p>\n          <vscode-text-area id="issue-description" cols="29" maxlength="4096" placeholder="Enter details." resize="both" />\n        </section>\n        <section class="component-section">\n          <input type="checkbox" id="feedback-data-sharing-checkbox">\n          <label for="feedback-data-sharing-checkbox">I understand that feedback is shared with Red Hat and IBM.</label>\n        </section>\n        <section class="component-section">\n          <vscode-button id="issue-submit-button" disabled>Submit</vscode-button>\n        </section>\n      ',e.appendChild(s)):"suggestion-feedback"===r?(n.innerHTML='\n        <section class="component-section" class="issue-dropdown">\n          <p class="required">Prompt</p>\n          <vscode-text-area id="suggestion-prompt" cols="29" class="m-b-10" placeholder="The contents of the playbook until the name of the task used for a recommendation." resize="both" />\n        </section>\n        <section class="component-section">\n          <p class="required">Provided Recommendation</p>\n          <vscode-text-area id="suggestion-provided" cols="29" class="m-b-10" placeholder="The recommendation content provided by Ansible Lightspeed." resize="both" />\n        </section>\n        <section class="component-section">\n          <p class="required">Expected Recommendation</p>\n          <vscode-text-area id="suggestion-expected" cols="29" class="m-b-10" placeholder="The recommendation that you expected -- edit the response with what you expected the result to be." resize="both" />\n        </section>\n        <section class="component-section">\n          <p class="required">Why was modification required?</p>\n          <vscode-text-area id="suggestion-additional-comment" cols="29" class="m-b-10" placeholder="Enter details." resize="both" />\n        </section>\n        <section class="component-section">\n          <input type="checkbox" id="feedback-data-sharing-checkbox">\n          <label for="feedback-data-sharing-checkbox">I understand that feedback is shared with Red Hat and IBM.</label>\n        </section>\n        <section class="component-section">\n            <vscode-button id="issue-submit-button" disabled>Submit</vscode-button>\n        </section>\n      ',e.appendChild(n)):"select-issue-type"===r&&(i.remove(),s.remove(),n.remove()),function(){const e=document.getElementById("issue-submit-button"),t=document.getElementById("issue-type-dropdown"),i=document.getElementById("issue-title"),s=document.getElementById("issue-description"),n=document.getElementById("feedback-data-sharing-checkbox");n.addEventListener("change",(()=>{e.disabled=!n.checked})),e.addEventListener("click",(()=>{if(console.log(`Issue type: ${t.value}`),"bug-report"===t.value||"feature-request"===t.value){if(""===i.value)return void o.postMessage({error:"Enter an issue title."});if(""===s.value)return void o.postMessage({error:"Enter an issue description."});const e={issue:{type:t.value,title:i.value,description:s.value}};o.postMessage(e),i.value="",s.value=""}else if("suggestion-feedback"===t.value){const e=document.getElementById("suggestion-prompt"),i=document.getElementById("suggestion-provided"),s=document.getElementById("suggestion-expected"),n=document.getElementById("suggestion-additional-comment");if(""===e.value)return void o.postMessage({error:"Enter details about prompt used for recommendation."});if(""===i.value)return void o.postMessage({error:"Enter details about recommendation provided."});if(""===s.value)return void o.postMessage({error:"Enter details about expected recommendation."});if(""===n.value)return void o.postMessage({error:"Enter details on why the modification was required."});const r={issue:{type:t.value,prompt:e.value,provided:i.value,expected:s.value,additionalComment:n.value}};o.postMessage(r),e.value="",i.value="",s.value="",n.value=""}}))}()})),function(){let e;const t=document.getElementById("sentiment-comment"),i=document.getElementById("sentiment-submit"),s=document.getElementById("sentiment-data-sharing-checkbox");s.addEventListener("change",(()=>{i.disabled=!s.checked})),i.addEventListener("click",(()=>{const i=document.querySelector(".sentiment-selector").querySelector("input[type=radio]:checked");if(!i)return void o.postMessage({error:"Select sentiment rating."});if(e=i.value,""===t.value)return void o.postMessage({error:"Tell us the reason for your rating."});const s={sentiment:{value:e,feedback:t.value}};console.log(`Sentiment value: ${e}`),console.log(`Sentiment comment: ${t.value}`),o.postMessage(s),t.value=""}))}()}))})();const o=s.B;export{o as __esModule};
//# sourceMappingURL=main.js.map