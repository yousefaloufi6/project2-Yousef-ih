/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t$2 = globalThis, e$4 = t$2.ShadowRoot && (void 0 === t$2.ShadyCSS || t$2.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, s$2 = Symbol(), o$5 = /* @__PURE__ */ new WeakMap();
let n$3 = class n {
  constructor(t2, e2, o2) {
    if (this._$cssResult$ = true, o2 !== s$2) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = t2, this.t = e2;
  }
  get styleSheet() {
    let t2 = this.o;
    const s2 = this.t;
    if (e$4 && void 0 === t2) {
      const e2 = void 0 !== s2 && 1 === s2.length;
      e2 && (t2 = o$5.get(s2)), void 0 === t2 && ((this.o = t2 = new CSSStyleSheet()).replaceSync(this.cssText), e2 && o$5.set(s2, t2));
    }
    return t2;
  }
  toString() {
    return this.cssText;
  }
};
const r$3 = (t2) => new n$3("string" == typeof t2 ? t2 : t2 + "", void 0, s$2), i$4 = (t2, ...e2) => {
  const o2 = 1 === t2.length ? t2[0] : e2.reduce((e3, s2, o3) => e3 + ((t3) => {
    if (true === t3._$cssResult$) return t3.cssText;
    if ("number" == typeof t3) return t3;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + t3 + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(s2) + t2[o3 + 1], t2[0]);
  return new n$3(o2, t2, s$2);
}, S$1 = (s2, o2) => {
  if (e$4) s2.adoptedStyleSheets = o2.map((t2) => t2 instanceof CSSStyleSheet ? t2 : t2.styleSheet);
  else for (const e2 of o2) {
    const o3 = document.createElement("style"), n3 = t$2.litNonce;
    void 0 !== n3 && o3.setAttribute("nonce", n3), o3.textContent = e2.cssText, s2.appendChild(o3);
  }
}, c$2 = e$4 ? (t2) => t2 : (t2) => t2 instanceof CSSStyleSheet ? ((t3) => {
  let e2 = "";
  for (const s2 of t3.cssRules) e2 += s2.cssText;
  return r$3(e2);
})(t2) : t2;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: i$3, defineProperty: e$3, getOwnPropertyDescriptor: h$1, getOwnPropertyNames: r$2, getOwnPropertySymbols: o$4, getPrototypeOf: n$2 } = Object, a$1 = globalThis, c$1 = a$1.trustedTypes, l$1 = c$1 ? c$1.emptyScript : "", p$1 = a$1.reactiveElementPolyfillSupport, d$1 = (t2, s2) => t2, u$1 = { toAttribute(t2, s2) {
  switch (s2) {
    case Boolean:
      t2 = t2 ? l$1 : null;
      break;
    case Object:
    case Array:
      t2 = null == t2 ? t2 : JSON.stringify(t2);
  }
  return t2;
}, fromAttribute(t2, s2) {
  let i3 = t2;
  switch (s2) {
    case Boolean:
      i3 = null !== t2;
      break;
    case Number:
      i3 = null === t2 ? null : Number(t2);
      break;
    case Object:
    case Array:
      try {
        i3 = JSON.parse(t2);
      } catch (t3) {
        i3 = null;
      }
  }
  return i3;
} }, f$1 = (t2, s2) => !i$3(t2, s2), b$1 = { attribute: true, type: String, converter: u$1, reflect: false, useDefault: false, hasChanged: f$1 };
Symbol.metadata ??= Symbol("metadata"), a$1.litPropertyMetadata ??= /* @__PURE__ */ new WeakMap();
let y$1 = class y extends HTMLElement {
  static addInitializer(t2) {
    this._$Ei(), (this.l ??= []).push(t2);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(t2, s2 = b$1) {
    if (s2.state && (s2.attribute = false), this._$Ei(), this.prototype.hasOwnProperty(t2) && ((s2 = Object.create(s2)).wrapped = true), this.elementProperties.set(t2, s2), !s2.noAccessor) {
      const i3 = Symbol(), h2 = this.getPropertyDescriptor(t2, i3, s2);
      void 0 !== h2 && e$3(this.prototype, t2, h2);
    }
  }
  static getPropertyDescriptor(t2, s2, i3) {
    const { get: e2, set: r2 } = h$1(this.prototype, t2) ?? { get() {
      return this[s2];
    }, set(t3) {
      this[s2] = t3;
    } };
    return { get: e2, set(s3) {
      const h2 = e2?.call(this);
      r2?.call(this, s3), this.requestUpdate(t2, h2, i3);
    }, configurable: true, enumerable: true };
  }
  static getPropertyOptions(t2) {
    return this.elementProperties.get(t2) ?? b$1;
  }
  static _$Ei() {
    if (this.hasOwnProperty(d$1("elementProperties"))) return;
    const t2 = n$2(this);
    t2.finalize(), void 0 !== t2.l && (this.l = [...t2.l]), this.elementProperties = new Map(t2.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(d$1("finalized"))) return;
    if (this.finalized = true, this._$Ei(), this.hasOwnProperty(d$1("properties"))) {
      const t3 = this.properties, s2 = [...r$2(t3), ...o$4(t3)];
      for (const i3 of s2) this.createProperty(i3, t3[i3]);
    }
    const t2 = this[Symbol.metadata];
    if (null !== t2) {
      const s2 = litPropertyMetadata.get(t2);
      if (void 0 !== s2) for (const [t3, i3] of s2) this.elementProperties.set(t3, i3);
    }
    this._$Eh = /* @__PURE__ */ new Map();
    for (const [t3, s2] of this.elementProperties) {
      const i3 = this._$Eu(t3, s2);
      void 0 !== i3 && this._$Eh.set(i3, t3);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(s2) {
    const i3 = [];
    if (Array.isArray(s2)) {
      const e2 = new Set(s2.flat(1 / 0).reverse());
      for (const s3 of e2) i3.unshift(c$2(s3));
    } else void 0 !== s2 && i3.push(c$2(s2));
    return i3;
  }
  static _$Eu(t2, s2) {
    const i3 = s2.attribute;
    return false === i3 ? void 0 : "string" == typeof i3 ? i3 : "string" == typeof t2 ? t2.toLowerCase() : void 0;
  }
  constructor() {
    super(), this._$Ep = void 0, this.isUpdatePending = false, this.hasUpdated = false, this._$Em = null, this._$Ev();
  }
  _$Ev() {
    this._$ES = new Promise((t2) => this.enableUpdating = t2), this._$AL = /* @__PURE__ */ new Map(), this._$E_(), this.requestUpdate(), this.constructor.l?.forEach((t2) => t2(this));
  }
  addController(t2) {
    (this._$EO ??= /* @__PURE__ */ new Set()).add(t2), void 0 !== this.renderRoot && this.isConnected && t2.hostConnected?.();
  }
  removeController(t2) {
    this._$EO?.delete(t2);
  }
  _$E_() {
    const t2 = /* @__PURE__ */ new Map(), s2 = this.constructor.elementProperties;
    for (const i3 of s2.keys()) this.hasOwnProperty(i3) && (t2.set(i3, this[i3]), delete this[i3]);
    t2.size > 0 && (this._$Ep = t2);
  }
  createRenderRoot() {
    const t2 = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
    return S$1(t2, this.constructor.elementStyles), t2;
  }
  connectedCallback() {
    this.renderRoot ??= this.createRenderRoot(), this.enableUpdating(true), this._$EO?.forEach((t2) => t2.hostConnected?.());
  }
  enableUpdating(t2) {
  }
  disconnectedCallback() {
    this._$EO?.forEach((t2) => t2.hostDisconnected?.());
  }
  attributeChangedCallback(t2, s2, i3) {
    this._$AK(t2, i3);
  }
  _$ET(t2, s2) {
    const i3 = this.constructor.elementProperties.get(t2), e2 = this.constructor._$Eu(t2, i3);
    if (void 0 !== e2 && true === i3.reflect) {
      const h2 = (void 0 !== i3.converter?.toAttribute ? i3.converter : u$1).toAttribute(s2, i3.type);
      this._$Em = t2, null == h2 ? this.removeAttribute(e2) : this.setAttribute(e2, h2), this._$Em = null;
    }
  }
  _$AK(t2, s2) {
    const i3 = this.constructor, e2 = i3._$Eh.get(t2);
    if (void 0 !== e2 && this._$Em !== e2) {
      const t3 = i3.getPropertyOptions(e2), h2 = "function" == typeof t3.converter ? { fromAttribute: t3.converter } : void 0 !== t3.converter?.fromAttribute ? t3.converter : u$1;
      this._$Em = e2, this[e2] = h2.fromAttribute(s2, t3.type) ?? this._$Ej?.get(e2) ?? null, this._$Em = null;
    }
  }
  requestUpdate(t2, s2, i3) {
    if (void 0 !== t2) {
      const e2 = this.constructor, h2 = this[t2];
      if (i3 ??= e2.getPropertyOptions(t2), !((i3.hasChanged ?? f$1)(h2, s2) || i3.useDefault && i3.reflect && h2 === this._$Ej?.get(t2) && !this.hasAttribute(e2._$Eu(t2, i3)))) return;
      this.C(t2, s2, i3);
    }
    false === this.isUpdatePending && (this._$ES = this._$EP());
  }
  C(t2, s2, { useDefault: i3, reflect: e2, wrapped: h2 }, r2) {
    i3 && !(this._$Ej ??= /* @__PURE__ */ new Map()).has(t2) && (this._$Ej.set(t2, r2 ?? s2 ?? this[t2]), true !== h2 || void 0 !== r2) || (this._$AL.has(t2) || (this.hasUpdated || i3 || (s2 = void 0), this._$AL.set(t2, s2)), true === e2 && this._$Em !== t2 && (this._$Eq ??= /* @__PURE__ */ new Set()).add(t2));
  }
  async _$EP() {
    this.isUpdatePending = true;
    try {
      await this._$ES;
    } catch (t3) {
      Promise.reject(t3);
    }
    const t2 = this.scheduleUpdate();
    return null != t2 && await t2, !this.isUpdatePending;
  }
  scheduleUpdate() {
    return this.performUpdate();
  }
  performUpdate() {
    if (!this.isUpdatePending) return;
    if (!this.hasUpdated) {
      if (this.renderRoot ??= this.createRenderRoot(), this._$Ep) {
        for (const [t4, s3] of this._$Ep) this[t4] = s3;
        this._$Ep = void 0;
      }
      const t3 = this.constructor.elementProperties;
      if (t3.size > 0) for (const [s3, i3] of t3) {
        const { wrapped: t4 } = i3, e2 = this[s3];
        true !== t4 || this._$AL.has(s3) || void 0 === e2 || this.C(s3, void 0, i3, e2);
      }
    }
    let t2 = false;
    const s2 = this._$AL;
    try {
      t2 = this.shouldUpdate(s2), t2 ? (this.willUpdate(s2), this._$EO?.forEach((t3) => t3.hostUpdate?.()), this.update(s2)) : this._$EM();
    } catch (s3) {
      throw t2 = false, this._$EM(), s3;
    }
    t2 && this._$AE(s2);
  }
  willUpdate(t2) {
  }
  _$AE(t2) {
    this._$EO?.forEach((t3) => t3.hostUpdated?.()), this.hasUpdated || (this.hasUpdated = true, this.firstUpdated(t2)), this.updated(t2);
  }
  _$EM() {
    this._$AL = /* @__PURE__ */ new Map(), this.isUpdatePending = false;
  }
  get updateComplete() {
    return this.getUpdateComplete();
  }
  getUpdateComplete() {
    return this._$ES;
  }
  shouldUpdate(t2) {
    return true;
  }
  update(t2) {
    this._$Eq &&= this._$Eq.forEach((t3) => this._$ET(t3, this[t3])), this._$EM();
  }
  updated(t2) {
  }
  firstUpdated(t2) {
  }
};
y$1.elementStyles = [], y$1.shadowRootOptions = { mode: "open" }, y$1[d$1("elementProperties")] = /* @__PURE__ */ new Map(), y$1[d$1("finalized")] = /* @__PURE__ */ new Map(), p$1?.({ ReactiveElement: y$1 }), (a$1.reactiveElementVersions ??= []).push("2.1.0");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t$1 = globalThis, i$2 = t$1.trustedTypes, s$1 = i$2 ? i$2.createPolicy("lit-html", { createHTML: (t2) => t2 }) : void 0, e$2 = "$lit$", h = `lit$${Math.random().toFixed(9).slice(2)}$`, o$3 = "?" + h, n$1 = `<${o$3}>`, r$1 = document, l = () => r$1.createComment(""), c = (t2) => null === t2 || "object" != typeof t2 && "function" != typeof t2, a = Array.isArray, u = (t2) => a(t2) || "function" == typeof t2?.[Symbol.iterator], d = "[ 	\n\f\r]", f = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, v = /-->/g, _ = />/g, m = RegExp(`>|${d}(?:([^\\s"'>=/]+)(${d}*=${d}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), p = /'/g, g = /"/g, $ = /^(?:script|style|textarea|title)$/i, y2 = (t2) => (i3, ...s2) => ({ _$litType$: t2, strings: i3, values: s2 }), x = y2(1), b = y2(2), T = Symbol.for("lit-noChange"), E = Symbol.for("lit-nothing"), A = /* @__PURE__ */ new WeakMap(), C = r$1.createTreeWalker(r$1, 129);
function P(t2, i3) {
  if (!a(t2) || !t2.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return void 0 !== s$1 ? s$1.createHTML(i3) : i3;
}
const V = (t2, i3) => {
  const s2 = t2.length - 1, o2 = [];
  let r2, l2 = 2 === i3 ? "<svg>" : 3 === i3 ? "<math>" : "", c2 = f;
  for (let i4 = 0; i4 < s2; i4++) {
    const s3 = t2[i4];
    let a2, u2, d2 = -1, y3 = 0;
    for (; y3 < s3.length && (c2.lastIndex = y3, u2 = c2.exec(s3), null !== u2); ) y3 = c2.lastIndex, c2 === f ? "!--" === u2[1] ? c2 = v : void 0 !== u2[1] ? c2 = _ : void 0 !== u2[2] ? ($.test(u2[2]) && (r2 = RegExp("</" + u2[2], "g")), c2 = m) : void 0 !== u2[3] && (c2 = m) : c2 === m ? ">" === u2[0] ? (c2 = r2 ?? f, d2 = -1) : void 0 === u2[1] ? d2 = -2 : (d2 = c2.lastIndex - u2[2].length, a2 = u2[1], c2 = void 0 === u2[3] ? m : '"' === u2[3] ? g : p) : c2 === g || c2 === p ? c2 = m : c2 === v || c2 === _ ? c2 = f : (c2 = m, r2 = void 0);
    const x2 = c2 === m && t2[i4 + 1].startsWith("/>") ? " " : "";
    l2 += c2 === f ? s3 + n$1 : d2 >= 0 ? (o2.push(a2), s3.slice(0, d2) + e$2 + s3.slice(d2) + h + x2) : s3 + h + (-2 === d2 ? i4 : x2);
  }
  return [P(t2, l2 + (t2[s2] || "<?>") + (2 === i3 ? "</svg>" : 3 === i3 ? "</math>" : "")), o2];
};
class N {
  constructor({ strings: t2, _$litType$: s2 }, n3) {
    let r2;
    this.parts = [];
    let c2 = 0, a2 = 0;
    const u2 = t2.length - 1, d2 = this.parts, [f2, v2] = V(t2, s2);
    if (this.el = N.createElement(f2, n3), C.currentNode = this.el.content, 2 === s2 || 3 === s2) {
      const t3 = this.el.content.firstChild;
      t3.replaceWith(...t3.childNodes);
    }
    for (; null !== (r2 = C.nextNode()) && d2.length < u2; ) {
      if (1 === r2.nodeType) {
        if (r2.hasAttributes()) for (const t3 of r2.getAttributeNames()) if (t3.endsWith(e$2)) {
          const i3 = v2[a2++], s3 = r2.getAttribute(t3).split(h), e2 = /([.?@])?(.*)/.exec(i3);
          d2.push({ type: 1, index: c2, name: e2[2], strings: s3, ctor: "." === e2[1] ? H : "?" === e2[1] ? I : "@" === e2[1] ? L : k }), r2.removeAttribute(t3);
        } else t3.startsWith(h) && (d2.push({ type: 6, index: c2 }), r2.removeAttribute(t3));
        if ($.test(r2.tagName)) {
          const t3 = r2.textContent.split(h), s3 = t3.length - 1;
          if (s3 > 0) {
            r2.textContent = i$2 ? i$2.emptyScript : "";
            for (let i3 = 0; i3 < s3; i3++) r2.append(t3[i3], l()), C.nextNode(), d2.push({ type: 2, index: ++c2 });
            r2.append(t3[s3], l());
          }
        }
      } else if (8 === r2.nodeType) if (r2.data === o$3) d2.push({ type: 2, index: c2 });
      else {
        let t3 = -1;
        for (; -1 !== (t3 = r2.data.indexOf(h, t3 + 1)); ) d2.push({ type: 7, index: c2 }), t3 += h.length - 1;
      }
      c2++;
    }
  }
  static createElement(t2, i3) {
    const s2 = r$1.createElement("template");
    return s2.innerHTML = t2, s2;
  }
}
function S(t2, i3, s2 = t2, e2) {
  if (i3 === T) return i3;
  let h2 = void 0 !== e2 ? s2._$Co?.[e2] : s2._$Cl;
  const o2 = c(i3) ? void 0 : i3._$litDirective$;
  return h2?.constructor !== o2 && (h2?._$AO?.(false), void 0 === o2 ? h2 = void 0 : (h2 = new o2(t2), h2._$AT(t2, s2, e2)), void 0 !== e2 ? (s2._$Co ??= [])[e2] = h2 : s2._$Cl = h2), void 0 !== h2 && (i3 = S(t2, h2._$AS(t2, i3.values), h2, e2)), i3;
}
class M {
  constructor(t2, i3) {
    this._$AV = [], this._$AN = void 0, this._$AD = t2, this._$AM = i3;
  }
  get parentNode() {
    return this._$AM.parentNode;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  u(t2) {
    const { el: { content: i3 }, parts: s2 } = this._$AD, e2 = (t2?.creationScope ?? r$1).importNode(i3, true);
    C.currentNode = e2;
    let h2 = C.nextNode(), o2 = 0, n3 = 0, l2 = s2[0];
    for (; void 0 !== l2; ) {
      if (o2 === l2.index) {
        let i4;
        2 === l2.type ? i4 = new R(h2, h2.nextSibling, this, t2) : 1 === l2.type ? i4 = new l2.ctor(h2, l2.name, l2.strings, this, t2) : 6 === l2.type && (i4 = new z(h2, this, t2)), this._$AV.push(i4), l2 = s2[++n3];
      }
      o2 !== l2?.index && (h2 = C.nextNode(), o2++);
    }
    return C.currentNode = r$1, e2;
  }
  p(t2) {
    let i3 = 0;
    for (const s2 of this._$AV) void 0 !== s2 && (void 0 !== s2.strings ? (s2._$AI(t2, s2, i3), i3 += s2.strings.length - 2) : s2._$AI(t2[i3])), i3++;
  }
}
class R {
  get _$AU() {
    return this._$AM?._$AU ?? this._$Cv;
  }
  constructor(t2, i3, s2, e2) {
    this.type = 2, this._$AH = E, this._$AN = void 0, this._$AA = t2, this._$AB = i3, this._$AM = s2, this.options = e2, this._$Cv = e2?.isConnected ?? true;
  }
  get parentNode() {
    let t2 = this._$AA.parentNode;
    const i3 = this._$AM;
    return void 0 !== i3 && 11 === t2?.nodeType && (t2 = i3.parentNode), t2;
  }
  get startNode() {
    return this._$AA;
  }
  get endNode() {
    return this._$AB;
  }
  _$AI(t2, i3 = this) {
    t2 = S(this, t2, i3), c(t2) ? t2 === E || null == t2 || "" === t2 ? (this._$AH !== E && this._$AR(), this._$AH = E) : t2 !== this._$AH && t2 !== T && this._(t2) : void 0 !== t2._$litType$ ? this.$(t2) : void 0 !== t2.nodeType ? this.T(t2) : u(t2) ? this.k(t2) : this._(t2);
  }
  O(t2) {
    return this._$AA.parentNode.insertBefore(t2, this._$AB);
  }
  T(t2) {
    this._$AH !== t2 && (this._$AR(), this._$AH = this.O(t2));
  }
  _(t2) {
    this._$AH !== E && c(this._$AH) ? this._$AA.nextSibling.data = t2 : this.T(r$1.createTextNode(t2)), this._$AH = t2;
  }
  $(t2) {
    const { values: i3, _$litType$: s2 } = t2, e2 = "number" == typeof s2 ? this._$AC(t2) : (void 0 === s2.el && (s2.el = N.createElement(P(s2.h, s2.h[0]), this.options)), s2);
    if (this._$AH?._$AD === e2) this._$AH.p(i3);
    else {
      const t3 = new M(e2, this), s3 = t3.u(this.options);
      t3.p(i3), this.T(s3), this._$AH = t3;
    }
  }
  _$AC(t2) {
    let i3 = A.get(t2.strings);
    return void 0 === i3 && A.set(t2.strings, i3 = new N(t2)), i3;
  }
  k(t2) {
    a(this._$AH) || (this._$AH = [], this._$AR());
    const i3 = this._$AH;
    let s2, e2 = 0;
    for (const h2 of t2) e2 === i3.length ? i3.push(s2 = new R(this.O(l()), this.O(l()), this, this.options)) : s2 = i3[e2], s2._$AI(h2), e2++;
    e2 < i3.length && (this._$AR(s2 && s2._$AB.nextSibling, e2), i3.length = e2);
  }
  _$AR(t2 = this._$AA.nextSibling, i3) {
    for (this._$AP?.(false, true, i3); t2 && t2 !== this._$AB; ) {
      const i4 = t2.nextSibling;
      t2.remove(), t2 = i4;
    }
  }
  setConnected(t2) {
    void 0 === this._$AM && (this._$Cv = t2, this._$AP?.(t2));
  }
}
class k {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(t2, i3, s2, e2, h2) {
    this.type = 1, this._$AH = E, this._$AN = void 0, this.element = t2, this.name = i3, this._$AM = e2, this.options = h2, s2.length > 2 || "" !== s2[0] || "" !== s2[1] ? (this._$AH = Array(s2.length - 1).fill(new String()), this.strings = s2) : this._$AH = E;
  }
  _$AI(t2, i3 = this, s2, e2) {
    const h2 = this.strings;
    let o2 = false;
    if (void 0 === h2) t2 = S(this, t2, i3, 0), o2 = !c(t2) || t2 !== this._$AH && t2 !== T, o2 && (this._$AH = t2);
    else {
      const e3 = t2;
      let n3, r2;
      for (t2 = h2[0], n3 = 0; n3 < h2.length - 1; n3++) r2 = S(this, e3[s2 + n3], i3, n3), r2 === T && (r2 = this._$AH[n3]), o2 ||= !c(r2) || r2 !== this._$AH[n3], r2 === E ? t2 = E : t2 !== E && (t2 += (r2 ?? "") + h2[n3 + 1]), this._$AH[n3] = r2;
    }
    o2 && !e2 && this.j(t2);
  }
  j(t2) {
    t2 === E ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t2 ?? "");
  }
}
class H extends k {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(t2) {
    this.element[this.name] = t2 === E ? void 0 : t2;
  }
}
class I extends k {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(t2) {
    this.element.toggleAttribute(this.name, !!t2 && t2 !== E);
  }
}
class L extends k {
  constructor(t2, i3, s2, e2, h2) {
    super(t2, i3, s2, e2, h2), this.type = 5;
  }
  _$AI(t2, i3 = this) {
    if ((t2 = S(this, t2, i3, 0) ?? E) === T) return;
    const s2 = this._$AH, e2 = t2 === E && s2 !== E || t2.capture !== s2.capture || t2.once !== s2.once || t2.passive !== s2.passive, h2 = t2 !== E && (s2 === E || e2);
    e2 && this.element.removeEventListener(this.name, this, s2), h2 && this.element.addEventListener(this.name, this, t2), this._$AH = t2;
  }
  handleEvent(t2) {
    "function" == typeof this._$AH ? this._$AH.call(this.options?.host ?? this.element, t2) : this._$AH.handleEvent(t2);
  }
}
class z {
  constructor(t2, i3, s2) {
    this.element = t2, this.type = 6, this._$AN = void 0, this._$AM = i3, this.options = s2;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t2) {
    S(this, t2);
  }
}
const Z = { I: R }, j = t$1.litHtmlPolyfillSupport;
j?.(N, R), (t$1.litHtmlVersions ??= []).push("3.3.0");
const B = (t2, i3, s2) => {
  const e2 = s2?.renderBefore ?? i3;
  let h2 = e2._$litPart$;
  if (void 0 === h2) {
    const t3 = s2?.renderBefore ?? null;
    e2._$litPart$ = h2 = new R(i3.insertBefore(l(), t3), t3, void 0, s2 ?? {});
  }
  return h2._$AI(t2), h2;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const s = globalThis;
let i$1 = class i extends y$1 {
  constructor() {
    super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
  }
  createRenderRoot() {
    const t2 = super.createRenderRoot();
    return this.renderOptions.renderBefore ??= t2.firstChild, t2;
  }
  update(t2) {
    const r2 = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t2), this._$Do = B(r2, this.renderRoot, this.renderOptions);
  }
  connectedCallback() {
    super.connectedCallback(), this._$Do?.setConnected(true);
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this._$Do?.setConnected(false);
  }
  render() {
    return T;
  }
};
i$1._$litElement$ = true, i$1["finalized"] = true, s.litElementHydrateSupport?.({ LitElement: i$1 });
const o$2 = s.litElementPolyfillSupport;
o$2?.({ LitElement: i$1 });
(s.litElementVersions ??= []).push("4.2.0");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const o$1 = { attribute: true, type: String, converter: u$1, reflect: false, hasChanged: f$1 }, r = (t2 = o$1, e2, r2) => {
  const { kind: n3, metadata: i3 } = r2;
  let s2 = globalThis.litPropertyMetadata.get(i3);
  if (void 0 === s2 && globalThis.litPropertyMetadata.set(i3, s2 = /* @__PURE__ */ new Map()), "setter" === n3 && ((t2 = Object.create(t2)).wrapped = true), s2.set(r2.name, t2), "accessor" === n3) {
    const { name: o2 } = r2;
    return { set(r3) {
      const n4 = e2.get.call(this);
      e2.set.call(this, r3), this.requestUpdate(o2, n4, t2);
    }, init(e3) {
      return void 0 !== e3 && this.C(o2, void 0, t2, e3), e3;
    } };
  }
  if ("setter" === n3) {
    const { name: o2 } = r2;
    return function(r3) {
      const n4 = this[o2];
      e2.call(this, r3), this.requestUpdate(o2, n4, t2);
    };
  }
  throw Error("Unsupported decorator location: " + n3);
};
function n2(t2) {
  return (e2, o2) => "object" == typeof o2 ? r(t2, e2, o2) : ((t3, e3, o3) => {
    const r2 = e3.hasOwnProperty(o3);
    return e3.constructor.createProperty(o3, t3), r2 ? Object.getOwnPropertyDescriptor(e3, o3) : void 0;
  })(t2, e2, o2);
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t = { ATTRIBUTE: 1, CHILD: 2, PROPERTY: 3 }, e$1 = (t2) => (...e2) => ({ _$litDirective$: t2, values: e2 });
class i2 {
  constructor(t2) {
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AT(t2, e2, i3) {
    this._$Ct = t2, this._$AM = e2, this._$Ci = i3;
  }
  _$AS(t2, e2) {
    return this.update(t2, e2);
  }
  update(t2, e2) {
    return this.render(...e2);
  }
}
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const e = e$1(class extends i2 {
  constructor(t$12) {
    if (super(t$12), t$12.type !== t.ATTRIBUTE || "class" !== t$12.name || t$12.strings?.length > 2) throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.");
  }
  render(t2) {
    return " " + Object.keys(t2).filter((s2) => t2[s2]).join(" ") + " ";
  }
  update(s2, [i3]) {
    if (void 0 === this.st) {
      this.st = /* @__PURE__ */ new Set(), void 0 !== s2.strings && (this.nt = new Set(s2.strings.join(" ").split(/\s/).filter((t2) => "" !== t2)));
      for (const t2 in i3) i3[t2] && !this.nt?.has(t2) && this.st.add(t2);
      return this.render(i3);
    }
    const r2 = s2.element.classList;
    for (const t2 of this.st) t2 in i3 || (r2.remove(t2), this.st.delete(t2));
    for (const t2 in i3) {
      const s3 = !!i3[t2];
      s3 === this.st.has(t2) || this.nt?.has(t2) || (s3 ? (r2.add(t2), this.st.add(t2)) : (r2.remove(t2), this.st.delete(t2)));
    }
    return T;
  }
});
const VERSION = "1.17.0";
const CONFIG_KEY = "__vscodeElements_disableRegistryWarning__";
class VscElement extends i$1 {
  /** VSCode Elements version */
  get version() {
    return VERSION;
  }
}
const customElement = (tagName) => {
  return (classOrTarget) => {
    const customElementClass = customElements.get(tagName);
    if (!customElementClass) {
      customElements.define(tagName, classOrTarget);
      return;
    }
    if (CONFIG_KEY in window) {
      return;
    }
    const el = document.createElement(tagName);
    const anotherVersion = el?.version;
    let message = "";
    if (!anotherVersion) {
      console.warn(tagName, "is already registered by an unknown custom element handler class.");
      message += "is already registered by an unknown custom element handler class.";
    } else if (anotherVersion !== VERSION) {
      message += "is already registered by a different version of VSCode Elements. ";
      message += `This version is "${VERSION}", while the other one is "${anotherVersion}".`;
    } else {
      message += "is already registered by the same version of VSCode Elements. ";
    }
    console.warn(`[VSCode Elements] ${tagName} ${message}
To suppress this warning, set window.${CONFIG_KEY} to true`);
  };
};
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const o = (o2) => o2 ?? E;
class StylePropertyMap extends i2 {
  constructor(partInfo) {
    super(partInfo);
    this._prevProperties = {};
    if (partInfo.type !== t.PROPERTY || partInfo.name !== "style") {
      throw new Error("The `stylePropertyMap` directive must be used in the `style` property");
    }
  }
  update(part, [styleProps]) {
    Object.entries(styleProps).forEach(([key, val]) => {
      if (this._prevProperties[key] !== val) {
        if (key.startsWith("--")) {
          part.element.style.setProperty(key, val);
        } else {
          part.element.style[key] = val;
        }
        this._prevProperties[key] = val;
      }
    });
    return T;
  }
  render(_styleProps) {
    return T;
  }
}
const stylePropertyMap = e$1(StylePropertyMap);
const defaultStyles = i$4`
  :host([hidden]) {
    display: none;
  }

  :host([disabled]),
  :host(:disabled) {
    cursor: not-allowed;
    opacity: 0.4;
    pointer-events: none;
  }
`;
const styles$1 = [
  defaultStyles,
  i$4`
    :host {
      color: var(--vscode-icon-foreground, #cccccc);
      display: inline-block;
    }

    .codicon[class*='codicon-'] {
      display: block;
    }

    .icon,
    .button {
      background-color: transparent;
      display: block;
      padding: 0;
    }

    .button {
      border-color: transparent;
      border-style: solid;
      border-width: 1px;
      border-radius: 5px;
      color: currentColor;
      cursor: pointer;
      padding: 2px;
    }

    .button:hover {
      background-color: var(
        --vscode-toolbar-hoverBackground,
        rgba(90, 93, 94, 0.31)
      );
    }

    .button:active {
      background-color: var(
        --vscode-toolbar-activeBackground,
        rgba(99, 102, 103, 0.31)
      );
    }

    .button:focus {
      outline: none;
    }

    .button:focus-visible {
      border-color: var(--vscode-focusBorder, #0078d4);
    }

    @keyframes icon-spin {
      100% {
        transform: rotate(360deg);
      }
    }

    .spin {
      animation-name: icon-spin;
      animation-timing-function: linear;
      animation-iteration-count: infinite;
    }
  `
];
var __decorate$1 = function(decorators, target, key, desc) {
  var c2 = arguments.length, r2 = c2 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d2;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r2 = Reflect.decorate(decorators, target, key, desc);
  else for (var i3 = decorators.length - 1; i3 >= 0; i3--) if (d2 = decorators[i3]) r2 = (c2 < 3 ? d2(r2) : c2 > 3 ? d2(target, key, r2) : d2(target, key)) || r2;
  return c2 > 3 && r2 && Object.defineProperty(target, key, r2), r2;
};
var VscodeIcon_1;
let VscodeIcon = VscodeIcon_1 = class VscodeIcon2 extends VscElement {
  constructor() {
    super(...arguments);
    this.label = "";
    this.name = "";
    this.size = 16;
    this.spin = false;
    this.spinDuration = 1.5;
    this.actionIcon = false;
    this._onButtonClick = (ev) => {
      this.dispatchEvent(new CustomEvent("vsc-click", { detail: { originalEvent: ev } }));
    };
  }
  connectedCallback() {
    super.connectedCallback();
    const { href, nonce } = this._getStylesheetConfig();
    VscodeIcon_1.stylesheetHref = href;
    VscodeIcon_1.nonce = nonce;
  }
  /**
   * For using web fonts in web components, the font stylesheet must be included
   * twice: on the page and in the web component. This function looks for the
   * font stylesheet on the page and returns the stylesheet URL and the nonce
   * id.
   */
  _getStylesheetConfig() {
    const linkElement = document.getElementById("vscode-codicon-stylesheet");
    const href = linkElement?.getAttribute("href") || void 0;
    const nonce = linkElement?.nonce || void 0;
    if (!linkElement) {
      let msg = "[VSCode Elements] To use the Icon component, the codicons.css file must be included in the page with the id `vscode-codicon-stylesheet`! ";
      msg += "See https://vscode-elements.github.io/components/icon/ for more details.";
      console.warn(msg);
    }
    return { nonce, href };
  }
  render() {
    const { stylesheetHref, nonce } = VscodeIcon_1;
    const content = x`<span
      class=${e({
      codicon: true,
      ["codicon-" + this.name]: true,
      spin: this.spin
    })}
      .style=${stylePropertyMap({
      animationDuration: String(this.spinDuration) + "s",
      fontSize: this.size + "px",
      height: this.size + "px",
      width: this.size + "px"
    })}
    ></span>`;
    const wrapped = this.actionIcon ? x` <button
          class="button"
          @click=${this._onButtonClick}
          aria-label=${this.label}
        >
          ${content}
        </button>` : x` <span class="icon" aria-hidden="true" role="presentation"
          >${content}</span
        >`;
    return x`
      <link
        rel="stylesheet"
        href=${o(stylesheetHref)}
        nonce=${o(nonce)}
      >
      ${wrapped}
    `;
  }
};
VscodeIcon.styles = styles$1;
VscodeIcon.stylesheetHref = "";
VscodeIcon.nonce = "";
__decorate$1([
  n2()
], VscodeIcon.prototype, "label", void 0);
__decorate$1([
  n2({ type: String })
], VscodeIcon.prototype, "name", void 0);
__decorate$1([
  n2({ type: Number })
], VscodeIcon.prototype, "size", void 0);
__decorate$1([
  n2({ type: Boolean, reflect: true })
], VscodeIcon.prototype, "spin", void 0);
__decorate$1([
  n2({ type: Number, attribute: "spin-duration" })
], VscodeIcon.prototype, "spinDuration", void 0);
__decorate$1([
  n2({ type: Boolean, reflect: true, attribute: "action-icon" })
], VscodeIcon.prototype, "actionIcon", void 0);
VscodeIcon = VscodeIcon_1 = __decorate$1([
  customElement("vscode-icon")
], VscodeIcon);
const DEFAULT_LINE_HEIGHT = 16;
const DEFAULT_FONT_SIZE = 13;
const INPUT_LINE_HEIGHT_RATIO = DEFAULT_LINE_HEIGHT / DEFAULT_FONT_SIZE;
function getDefaultFontStack() {
  if (navigator.userAgent.indexOf("Linux") > -1) {
    return 'system-ui, "Ubuntu", "Droid Sans", sans-serif';
  } else if (navigator.userAgent.indexOf("Mac") > -1) {
    return "-apple-system, BlinkMacSystemFont, sans-serif";
  } else if (navigator.userAgent.indexOf("Windows") > -1) {
    return '"Segoe WPC", "Segoe UI", sans-serif';
  } else {
    return "sans-serif";
  }
}
const defaultFontStack = r$3(getDefaultFontStack());
const styles = [
  defaultStyles,
  i$4`
    :host {
      background-color: var(--vscode-button-background, #0078d4);
      border-color: var(--vscode-button-border, transparent);
      border-style: solid;
      border-radius: 2px;
      border-width: 1px;
      color: var(--vscode-button-foreground, #ffffff);
      cursor: pointer;
      display: inline-flex;
      font-family: var(--vscode-font-family, ${defaultFontStack});
      font-size: var(--vscode-font-size, 13px);
      font-weight: var(--vscode-font-weight, normal);
      line-height: 22px;
      overflow: hidden;
      padding: 0;
      user-select: none;
      white-space: nowrap;
    }

    :host([secondary]) {
      color: var(--vscode-button-secondaryForeground, #cccccc);
      background-color: var(--vscode-button-secondaryBackground, #313131);
      border-color: var(
        --vscode-button-border,
        var(--vscode-button-secondaryBackground, rgba(255, 255, 255, 0.07))
      );
    }

    :host([disabled]) {
      cursor: default;
      opacity: 0.4;
      pointer-events: none;
    }

    :host(:hover) {
      background-color: var(--vscode-button-hoverBackground, #026ec1);
    }

    :host([disabled]:hover) {
      background-color: var(--vscode-button-background, #0078d4);
    }

    :host([secondary]:hover) {
      background-color: var(--vscode-button-secondaryHoverBackground, #3c3c3c);
    }

    :host([secondary][disabled]:hover) {
      background-color: var(--vscode-button-secondaryBackground, #313131);
    }

    :host(:focus),
    :host(:active) {
      outline: none;
    }

    :host(:focus) {
      background-color: var(--vscode-button-hoverBackground, #026ec1);
      outline: 1px solid var(--vscode-focusBorder, #0078d4);
      outline-offset: 2px;
    }

    :host([disabled]:focus) {
      background-color: var(--vscode-button-background, #0078d4);
      outline: 0;
    }

    :host([secondary]:focus) {
      background-color: var(--vscode-button-secondaryHoverBackground, #3c3c3c);
    }

    :host([secondary][disabled]:focus) {
      background-color: var(--vscode-button-secondaryBackground, #313131);
    }

    ::slotted(*) {
      display: inline-block;
      margin-left: 4px;
      margin-right: 4px;
    }

    ::slotted(*:first-child) {
      margin-left: 0;
    }

    ::slotted(*:last-child) {
      margin-right: 0;
    }

    ::slotted(vscode-icon) {
      color: inherit;
    }

    .wrapper {
      align-items: center;
      box-sizing: border-box;
      display: flex;
      justify-content: center;
      position: relative;
      width: var(--wrapper-width, 100%);
      height: 100%;
      padding: 1px 13px;
    }

    :host(:empty) .wrapper,
    :host([icon-only]) .wrapper {
      min-height: 24px;
      min-width: 16px;
      padding: 1px 5px;
    }

    slot {
      align-items: center;
      display: flex;
      height: 100%;
    }

    .icon,
    .icon-after {
      color: inherit;
      display: block;
    }

    :host(:not(:empty)) .icon {
      margin-right: 3px;
    }

    :host(:not(:empty)) .icon-after,
    :host([icon]) .icon-after {
      margin-left: 3px;
    }

    .divider {
      display: var(--divider-display, none);
      background-color: transparent;
      padding: 4px 0;
      box-sizing: border-box;
    }

    :host(:hover) .divider,
    :host(:focus) .divider {
      background-color: var(--vscode-button-hoverBackground, #026ec1);
    }

    :host([secondary]) .divider {
      background-color: var(--vscode-button-secondaryBackground, #313131);
    }

    :host([secondary]:hover) .divider,
    :host([secondary]:focus) .divider {
      background-color: var(--vscode-button-secondaryHoverBackground, #3c3c3c);
    }

    .divider > div {
      background-color: var(
        --vscode-button-separator,
        rgba(255, 255, 255, 0.4)
      );
      height: 100%;
      width: 1px;
      margin: 0;
    }

    :host([secondary]) .divider > div {
      background-color: var(--vscode-button-secondaryForeground, #cccccc);
      opacity: 0.4;
    }
  `
];
var __decorate = function(decorators, target, key, desc) {
  var c2 = arguments.length, r2 = c2 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d2;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r2 = Reflect.decorate(decorators, target, key, desc);
  else for (var i3 = decorators.length - 1; i3 >= 0; i3--) if (d2 = decorators[i3]) r2 = (c2 < 3 ? d2(r2) : c2 > 3 ? d2(target, key, r2) : d2(target, key)) || r2;
  return c2 > 3 && r2 && Object.defineProperty(target, key, r2), r2;
};
let VscodeButton = class VscodeButton2 extends VscElement {
  get form() {
    return this._internals.form;
  }
  constructor() {
    super();
    this.autofocus = false;
    this.tabIndex = 0;
    this.secondary = false;
    this.role = "button";
    this.disabled = false;
    this.icon = "";
    this.iconSpin = false;
    this.iconAfter = "";
    this.iconAfterSpin = false;
    this.focused = false;
    this.name = void 0;
    this.iconOnly = false;
    this.type = "button";
    this.value = "";
    this._prevTabindex = 0;
    this._handleFocus = () => {
      this.focused = true;
    };
    this._handleBlur = () => {
      this.focused = false;
    };
    this.addEventListener("keydown", this._handleKeyDown.bind(this));
    this.addEventListener("click", this._handleClick.bind(this));
    this._internals = this.attachInternals();
  }
  connectedCallback() {
    super.connectedCallback();
    if (this.autofocus) {
      if (this.tabIndex < 0) {
        this.tabIndex = 0;
      }
      this.updateComplete.then(() => {
        this.focus();
        this.requestUpdate();
      });
    }
    this.addEventListener("focus", this._handleFocus);
    this.addEventListener("blur", this._handleBlur);
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    this.removeEventListener("focus", this._handleFocus);
    this.removeEventListener("blur", this._handleBlur);
  }
  update(changedProperties) {
    super.update(changedProperties);
    if (changedProperties.has("value")) {
      this._internals.setFormValue(this.value);
    }
    if (changedProperties.has("disabled")) {
      if (this.disabled) {
        this._prevTabindex = this.tabIndex;
        this.tabIndex = -1;
      } else {
        this.tabIndex = this._prevTabindex;
      }
    }
  }
  _executeAction() {
    if (this.type === "submit" && this._internals.form) {
      this._internals.form.requestSubmit();
    }
    if (this.type === "reset" && this._internals.form) {
      this._internals.form.reset();
    }
  }
  _handleKeyDown(event) {
    if ((event.key === "Enter" || event.key === " ") && !this.hasAttribute("disabled")) {
      this.dispatchEvent(new CustomEvent("vsc-click", {
        detail: {
          originalEvent: new MouseEvent("click")
        }
      }));
      const syntheticClick = new MouseEvent("click", {
        bubbles: true,
        cancelable: true
      });
      syntheticClick.synthetic = true;
      this.dispatchEvent(syntheticClick);
      this._executeAction();
    }
  }
  _handleClick(event) {
    if (event.synthetic) {
      return;
    }
    if (!this.hasAttribute("disabled")) {
      this.dispatchEvent(new CustomEvent("vsc-click", {
        detail: {
          originalEvent: event
        }
      }));
      this._executeAction();
    }
  }
  render() {
    const hasIcon = this.icon !== "";
    const hasIconAfter = this.iconAfter !== "";
    const wrapperClasses = {
      wrapper: true,
      "has-icon-before": hasIcon,
      "has-icon-after": hasIconAfter,
      "icon-only": this.iconOnly
    };
    const iconElem = hasIcon ? x`<vscode-icon
          name=${this.icon}
          ?spin=${this.iconSpin}
          spin-duration=${o(this.iconSpinDuration)}
          class="icon"
        ></vscode-icon>` : E;
    const iconAfterElem = hasIconAfter ? x`<vscode-icon
          name=${this.iconAfter}
          ?spin=${this.iconAfterSpin}
          spin-duration=${o(this.iconAfterSpinDuration)}
          class="icon-after"
        ></vscode-icon>` : E;
    return x`
      <span class=${e(wrapperClasses)}>
        ${iconElem}
        <slot></slot>
        ${iconAfterElem}
      </span>
      <div class="divider"><div></div></div>
    `;
  }
};
VscodeButton.styles = styles;
VscodeButton.formAssociated = true;
__decorate([
  n2({ type: Boolean, reflect: true })
], VscodeButton.prototype, "autofocus", void 0);
__decorate([
  n2({ type: Number, reflect: true })
], VscodeButton.prototype, "tabIndex", void 0);
__decorate([
  n2({ type: Boolean, reflect: true })
], VscodeButton.prototype, "secondary", void 0);
__decorate([
  n2({ reflect: true })
], VscodeButton.prototype, "role", void 0);
__decorate([
  n2({ type: Boolean, reflect: true })
], VscodeButton.prototype, "disabled", void 0);
__decorate([
  n2()
], VscodeButton.prototype, "icon", void 0);
__decorate([
  n2({ type: Boolean, reflect: true, attribute: "icon-spin" })
], VscodeButton.prototype, "iconSpin", void 0);
__decorate([
  n2({ type: Number, reflect: true, attribute: "icon-spin-duration" })
], VscodeButton.prototype, "iconSpinDuration", void 0);
__decorate([
  n2({ attribute: "icon-after" })
], VscodeButton.prototype, "iconAfter", void 0);
__decorate([
  n2({ type: Boolean, reflect: true, attribute: "icon-after-spin" })
], VscodeButton.prototype, "iconAfterSpin", void 0);
__decorate([
  n2({
    type: Number,
    reflect: true,
    attribute: "icon-after-spin-duration"
  })
], VscodeButton.prototype, "iconAfterSpinDuration", void 0);
__decorate([
  n2({ type: Boolean, reflect: true })
], VscodeButton.prototype, "focused", void 0);
__decorate([
  n2({ type: String, reflect: true })
], VscodeButton.prototype, "name", void 0);
__decorate([
  n2({ type: Boolean, reflect: true, attribute: "icon-only" })
], VscodeButton.prototype, "iconOnly", void 0);
__decorate([
  n2({ reflect: true })
], VscodeButton.prototype, "type", void 0);
__decorate([
  n2()
], VscodeButton.prototype, "value", void 0);
VscodeButton = __decorate([
  customElement("vscode-button")
], VscodeButton);
export {
  B,
  E,
  INPUT_LINE_HEIGHT_RATIO as I,
  T,
  VscElement as V,
  Z,
  i$1 as a,
  b,
  customElement as c,
  defaultStyles as d,
  e,
  e$1 as f,
  getDefaultFontStack as g,
  i2 as h,
  i$4 as i,
  n2 as n,
  o,
  r$3 as r,
  stylePropertyMap as s,
  t,
  x
};
