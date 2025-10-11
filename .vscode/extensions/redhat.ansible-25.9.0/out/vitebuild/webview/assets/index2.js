import { f as ref, G as readonly, H as nextTick, j as watch, I as getCurrentInstance, J as onMounted, d as defineComponent, c as createElementBlock, o as openBlock, a as createBaseVNode, h as createTextVNode, t as toDisplayString, e as useModel, v as vscodeApi, g as createCommentVNode, F as Fragment, r as renderList, b as createBlock, K as h$5, L as computed, M as reactive } from "./vscode.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.js";
function R$2(t2, e2) {
  return t2 ? t2.classList ? t2.classList.contains(e2) : new RegExp("(^| )" + e2 + "( |$)", "gi").test(t2.className) : false;
}
function W(t2, e2) {
  if (t2 && e2) {
    let o2 = (n2) => {
      R$2(t2, n2) || (t2.classList ? t2.classList.add(n2) : t2.className += " " + n2);
    };
    [e2].flat().filter(Boolean).forEach((n2) => n2.split(" ").forEach(o2));
  }
}
function O(t2, e2) {
  if (t2 && e2) {
    let o2 = (n2) => {
      t2.classList ? t2.classList.remove(n2) : t2.className = t2.className.replace(new RegExp("(^|\\b)" + n2.split(" ").join("|") + "(\\b|$)", "gi"), " ");
    };
    [e2].flat().filter(Boolean).forEach((n2) => n2.split(" ").forEach(o2));
  }
}
function x(t2) {
  for (let e2 of document == null ? void 0 : document.styleSheets) try {
    for (let o2 of e2 == null ? void 0 : e2.cssRules) for (let n2 of o2 == null ? void 0 : o2.style) if (t2.test(n2)) return { name: n2, value: o2.style.getPropertyValue(n2).trim() };
  } catch (o2) {
  }
  return null;
}
function w$1(t2) {
  let e2 = { width: 0, height: 0 };
  if (t2) {
    let [o2, n2] = [t2.style.visibility, t2.style.display];
    t2.style.visibility = "hidden", t2.style.display = "block", e2.width = t2.offsetWidth, e2.height = t2.offsetHeight, t2.style.display = n2, t2.style.visibility = o2;
  }
  return e2;
}
function h$4() {
  let t2 = window, e2 = document, o2 = e2.documentElement, n2 = e2.getElementsByTagName("body")[0], r2 = t2.innerWidth || o2.clientWidth || n2.clientWidth, i2 = t2.innerHeight || o2.clientHeight || n2.clientHeight;
  return { width: r2, height: i2 };
}
function E(t2) {
  return t2 ? Math.abs(t2.scrollLeft) : 0;
}
function k$4() {
  let t2 = document.documentElement;
  return (window.pageXOffset || E(t2)) - (t2.clientLeft || 0);
}
function $$1() {
  let t2 = document.documentElement;
  return (window.pageYOffset || t2.scrollTop) - (t2.clientTop || 0);
}
function V(t2) {
  return t2 ? getComputedStyle(t2).direction === "rtl" : false;
}
function D(t2, e2, o2 = true) {
  var n2, r2, i2, l2;
  if (t2) {
    let d2 = t2.offsetParent ? { width: t2.offsetWidth, height: t2.offsetHeight } : w$1(t2), s2 = d2.height, a2 = d2.width, u2 = e2.offsetHeight, p2 = e2.offsetWidth, f2 = e2.getBoundingClientRect(), g2 = $$1(), it = k$4(), lt2 = h$4(), L, N2, ot = "top";
    f2.top + u2 + s2 > lt2.height ? (L = f2.top + g2 - s2, ot = "bottom", L < 0 && (L = g2)) : L = u2 + f2.top + g2, f2.left + a2 > lt2.width ? N2 = Math.max(0, f2.left + it + p2 - a2) : N2 = f2.left + it, V(t2) ? t2.style.insetInlineEnd = N2 + "px" : t2.style.insetInlineStart = N2 + "px", t2.style.top = L + "px", t2.style.transformOrigin = ot, o2 && (t2.style.marginTop = ot === "bottom" ? `calc(${(r2 = (n2 = x(/-anchor-gutter$/)) == null ? void 0 : n2.value) != null ? r2 : "2px"} * -1)` : (l2 = (i2 = x(/-anchor-gutter$/)) == null ? void 0 : i2.value) != null ? l2 : "");
  }
}
function S$1(t2, e2) {
  t2 && (typeof e2 == "string" ? t2.style.cssText = e2 : Object.entries(e2 || {}).forEach(([o2, n2]) => t2.style[o2] = n2));
}
function v$4(t2, e2) {
  if (t2 instanceof HTMLElement) {
    let o2 = t2.offsetWidth;
    return o2;
  }
  return 0;
}
function I(t2, e2, o2 = true, n2 = void 0) {
  var r2;
  if (t2) {
    let i2 = t2.offsetParent ? { width: t2.offsetWidth, height: t2.offsetHeight } : w$1(t2), l2 = e2.offsetHeight, d2 = e2.getBoundingClientRect(), s2 = h$4(), a2, u2, p2 = n2 != null ? n2 : "top";
    if (!n2 && d2.top + l2 + i2.height > s2.height ? (a2 = -1 * i2.height, p2 = "bottom", d2.top + a2 < 0 && (a2 = -1 * d2.top)) : a2 = l2, i2.width > s2.width ? u2 = d2.left * -1 : d2.left + i2.width > s2.width ? u2 = (d2.left + i2.width - s2.width) * -1 : u2 = 0, t2.style.top = a2 + "px", t2.style.insetInlineStart = u2 + "px", t2.style.transformOrigin = p2, o2) {
      let f2 = (r2 = x(/-anchor-gutter$/)) == null ? void 0 : r2.value;
      t2.style.marginTop = p2 === "bottom" ? `calc(${f2 != null ? f2 : "2px"} * -1)` : f2 != null ? f2 : "";
    }
  }
}
function y$1(t2) {
  if (t2) {
    let e2 = t2.parentNode;
    return e2 && e2 instanceof ShadowRoot && e2.host && (e2 = e2.host), e2;
  }
  return null;
}
function T$1(t2) {
  return !!(t2 !== null && typeof t2 != "undefined" && t2.nodeName && y$1(t2));
}
function c$q(t2) {
  return typeof Element != "undefined" ? t2 instanceof Element : t2 !== null && typeof t2 == "object" && t2.nodeType === 1 && typeof t2.nodeName == "string";
}
function A(t2, e2 = {}) {
  if (c$q(t2)) {
    let o2 = (n2, r2) => {
      var l2, d2;
      let i2 = (l2 = t2 == null ? void 0 : t2.$attrs) != null && l2[n2] ? [(d2 = t2 == null ? void 0 : t2.$attrs) == null ? void 0 : d2[n2]] : [];
      return [r2].flat().reduce((s2, a2) => {
        if (a2 != null) {
          let u2 = typeof a2;
          if (u2 === "string" || u2 === "number") s2.push(a2);
          else if (u2 === "object") {
            let p2 = Array.isArray(a2) ? o2(n2, a2) : Object.entries(a2).map(([f2, g2]) => n2 === "style" && (g2 || g2 === 0) ? `${f2.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()}:${g2}` : g2 ? f2 : void 0);
            s2 = p2.length ? s2.concat(p2.filter((f2) => !!f2)) : s2;
          }
        }
        return s2;
      }, i2);
    };
    Object.entries(e2).forEach(([n2, r2]) => {
      if (r2 != null) {
        let i2 = n2.match(/^on(.+)/);
        i2 ? t2.addEventListener(i2[1].toLowerCase(), r2) : n2 === "p-bind" || n2 === "pBind" ? A(t2, r2) : (r2 = n2 === "class" ? [...new Set(o2("class", r2))].join(" ").trim() : n2 === "style" ? o2("style", r2).join(";").trim() : r2, (t2.$attrs = t2.$attrs || {}) && (t2.$attrs[n2] = r2), t2.setAttribute(n2, r2));
      }
    });
  }
}
function U$1(t2, e2 = {}, ...o2) {
  {
    let n2 = document.createElement(t2);
    return A(n2, e2), n2.append(...o2), n2;
  }
}
function z$1(t2, e2) {
  return c$q(t2) ? t2.matches(e2) ? t2 : t2.querySelector(e2) : null;
}
function bt(t2, e2) {
  t2 && document.activeElement !== t2 && t2.focus(e2);
}
function Q$1(t2, e2) {
  if (c$q(t2)) {
    let o2 = t2.getAttribute(e2);
    return isNaN(o2) ? o2 === "true" || o2 === "false" ? o2 === "true" : o2 : +o2;
  }
}
function Tt(t2) {
  if (t2) {
    let e2 = t2.offsetHeight, o2 = getComputedStyle(t2);
    return e2 -= parseFloat(o2.paddingTop) + parseFloat(o2.paddingBottom) + parseFloat(o2.borderTopWidth) + parseFloat(o2.borderBottomWidth), e2;
  }
  return 0;
}
function K$1(t2) {
  if (t2) {
    let e2 = t2.getBoundingClientRect();
    return { top: e2.top + (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0), left: e2.left + (window.pageXOffset || E(document.documentElement) || E(document.body) || 0) };
  }
  return { top: "auto", left: "auto" };
}
function C(t2, e2) {
  if (t2) {
    let o2 = t2.offsetHeight;
    return o2;
  }
  return 0;
}
function M$1(t2, e2 = []) {
  let o2 = y$1(t2);
  return o2 === null ? e2 : M$1(o2, e2.concat([o2]));
}
function At(t2) {
  let e2 = [];
  if (t2) {
    let o2 = M$1(t2), n2 = /(auto|scroll)/, r2 = (i2) => {
      try {
        let l2 = window.getComputedStyle(i2, null);
        return n2.test(l2.getPropertyValue("overflow")) || n2.test(l2.getPropertyValue("overflowX")) || n2.test(l2.getPropertyValue("overflowY"));
      } catch (l2) {
        return false;
      }
    };
    for (let i2 of o2) {
      let l2 = i2.nodeType === 1 && i2.dataset.scrollselectors;
      if (l2) {
        let d2 = l2.split(",");
        for (let s2 of d2) {
          let a2 = z$1(i2, s2);
          a2 && r2(a2) && e2.push(a2);
        }
      }
      i2.nodeType !== 9 && r2(i2) && e2.push(i2);
    }
  }
  return e2;
}
function Rt(t2) {
  if (t2) {
    let e2 = t2.offsetWidth, o2 = getComputedStyle(t2);
    return e2 -= parseFloat(o2.paddingLeft) + parseFloat(o2.paddingRight) + parseFloat(o2.borderLeftWidth) + parseFloat(o2.borderRightWidth), e2;
  }
  return 0;
}
function tt() {
  return !!(typeof window != "undefined" && window.document && window.document.createElement);
}
function et$1(t2) {
  return !!(t2 && t2.offsetParent != null);
}
function Yt() {
  return "ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
}
function Kt(t2, e2 = "", o2) {
  c$q(t2) && o2 !== null && o2 !== void 0 && t2.setAttribute(e2, o2);
}
function s$c() {
  let r2 = /* @__PURE__ */ new Map();
  return { on(e2, t2) {
    let n2 = r2.get(e2);
    return n2 ? n2.push(t2) : n2 = [t2], r2.set(e2, n2), this;
  }, off(e2, t2) {
    let n2 = r2.get(e2);
    return n2 && n2.splice(n2.indexOf(t2) >>> 0, 1), this;
  }, emit(e2, t2) {
    let n2 = r2.get(e2);
    n2 && n2.forEach((i2) => {
      i2(t2);
    });
  }, clear() {
    r2.clear();
  } };
}
var oe$1 = Object.defineProperty;
var K = Object.getOwnPropertySymbols;
var ue = Object.prototype.hasOwnProperty, fe$1 = Object.prototype.propertyIsEnumerable;
var N = (e2, t2, n2) => t2 in e2 ? oe$1(e2, t2, { enumerable: true, configurable: true, writable: true, value: n2 }) : e2[t2] = n2, d$B = (e2, t2) => {
  for (var n2 in t2 || (t2 = {})) ue.call(t2, n2) && N(e2, n2, t2[n2]);
  if (K) for (var n2 of K(t2)) fe$1.call(t2, n2) && N(e2, n2, t2[n2]);
  return e2;
};
function a$H(e2) {
  return e2 == null || e2 === "" || Array.isArray(e2) && e2.length === 0 || !(e2 instanceof Date) && typeof e2 == "object" && Object.keys(e2).length === 0;
}
function R$1(e2, t2, n2 = /* @__PURE__ */ new WeakSet()) {
  if (e2 === t2) return true;
  if (!e2 || !t2 || typeof e2 != "object" || typeof t2 != "object" || n2.has(e2) || n2.has(t2)) return false;
  n2.add(e2).add(t2);
  let r2 = Array.isArray(e2), o2 = Array.isArray(t2), u2, f2, h2;
  if (r2 && o2) {
    if (f2 = e2.length, f2 != t2.length) return false;
    for (u2 = f2; u2-- !== 0; ) if (!R$1(e2[u2], t2[u2], n2)) return false;
    return true;
  }
  if (r2 != o2) return false;
  let A2 = e2 instanceof Date, S2 = t2 instanceof Date;
  if (A2 != S2) return false;
  if (A2 && S2) return e2.getTime() == t2.getTime();
  let I2 = e2 instanceof RegExp, L = t2 instanceof RegExp;
  if (I2 != L) return false;
  if (I2 && L) return e2.toString() == t2.toString();
  let O2 = Object.keys(e2);
  if (f2 = O2.length, f2 !== Object.keys(t2).length) return false;
  for (u2 = f2; u2-- !== 0; ) if (!Object.prototype.hasOwnProperty.call(t2, O2[u2])) return false;
  for (u2 = f2; u2-- !== 0; ) if (h2 = O2[u2], !R$1(e2[h2], t2[h2], n2)) return false;
  return true;
}
function y(e2, t2) {
  return R$1(e2, t2);
}
function l$h(e2) {
  return typeof e2 == "function" && "call" in e2 && "apply" in e2;
}
function s$b(e2) {
  return !a$H(e2);
}
function c$p(e2, t2) {
  if (!e2 || !t2) return null;
  try {
    let n2 = e2[t2];
    if (s$b(n2)) return n2;
  } catch (n2) {
  }
  if (Object.keys(e2).length) {
    if (l$h(t2)) return t2(e2);
    if (t2.indexOf(".") === -1) return e2[t2];
    {
      let n2 = t2.split("."), r2 = e2;
      for (let o2 = 0, u2 = n2.length; o2 < u2; ++o2) {
        if (r2 == null) return null;
        r2 = r2[n2[o2]];
      }
      return r2;
    }
  }
  return null;
}
function k$3(e2, t2, n2) {
  return n2 ? c$p(e2, n2) === c$p(t2, n2) : y(e2, t2);
}
function i$v(e2, t2 = true) {
  return e2 instanceof Object && e2.constructor === Object && (t2 || Object.keys(e2).length !== 0);
}
function $(e2 = {}, t2 = {}) {
  let n2 = d$B({}, e2);
  return Object.keys(t2).forEach((r2) => {
    let o2 = r2;
    i$v(t2[o2]) && o2 in e2 && i$v(e2[o2]) ? n2[o2] = $(e2[o2], t2[o2]) : n2[o2] = t2[o2];
  }), n2;
}
function w(...e2) {
  return e2.reduce((t2, n2, r2) => r2 === 0 ? n2 : $(t2, n2), {});
}
function M(e2, t2) {
  let n2 = -1;
  if (s$b(e2)) try {
    n2 = e2.findLastIndex(t2);
  } catch (r2) {
    n2 = e2.lastIndexOf([...e2].reverse().find(t2));
  }
  return n2;
}
function m$5(e2, ...t2) {
  return l$h(e2) ? e2(...t2) : e2;
}
function p$4(e2, t2 = true) {
  return typeof e2 == "string" && (t2 || e2 !== "");
}
function g$6(e2) {
  return p$4(e2) ? e2.replace(/(-|_)/g, "").toLowerCase() : e2;
}
function F$1(e2, t2 = "", n2 = {}) {
  let r2 = g$6(t2).split("."), o2 = r2.shift();
  if (o2) {
    if (i$v(e2)) {
      let u2 = Object.keys(e2).find((f2) => g$6(f2) === o2) || "";
      return F$1(m$5(e2[u2], n2), r2.join("."), n2);
    }
    return;
  }
  return m$5(e2, n2);
}
function b$4(e2, t2 = true) {
  return Array.isArray(e2) && (t2 || e2.length !== 0);
}
function _$1(e2) {
  return s$b(e2) && !isNaN(e2);
}
function z(e2, t2) {
  if (t2) {
    let n2 = t2.test(e2);
    return t2.lastIndex = 0, n2;
  }
  return false;
}
function U(...e2) {
  return w(...e2);
}
function G(e2) {
  return e2 && e2.replace(/\/\*(?:(?!\*\/)[\s\S])*\*\/|[\r\n\t]+/g, "").replace(/ {2,}/g, " ").replace(/ ([{:}]) /g, "$1").replace(/([;,]) /g, "$1").replace(/ !/g, "!").replace(/: /g, ":").trim();
}
function v$3(e2) {
  return p$4(e2, false) ? e2[0].toUpperCase() + e2.slice(1) : e2;
}
function ee(e2) {
  return p$4(e2) ? e2.replace(/(_)/g, "-").replace(/[A-Z]/g, (t2, n2) => n2 === 0 ? t2 : "-" + t2.toLowerCase()).toLowerCase() : e2;
}
var Qe = Object.defineProperty, Ye = Object.defineProperties;
var et = Object.getOwnPropertyDescriptors;
var F = Object.getOwnPropertySymbols;
var fe = Object.prototype.hasOwnProperty, ye = Object.prototype.propertyIsEnumerable;
var he = (e2, t2, r2) => t2 in e2 ? Qe(e2, t2, { enumerable: true, configurable: true, writable: true, value: r2 }) : e2[t2] = r2, d$A = (e2, t2) => {
  for (var r2 in t2 || (t2 = {})) fe.call(t2, r2) && he(e2, r2, t2[r2]);
  if (F) for (var r2 of F(t2)) ye.call(t2, r2) && he(e2, r2, t2[r2]);
  return e2;
}, _ = (e2, t2) => Ye(e2, et(t2));
var b$3 = (e2, t2) => {
  var r2 = {};
  for (var s2 in e2) fe.call(e2, s2) && t2.indexOf(s2) < 0 && (r2[s2] = e2[s2]);
  if (e2 != null && F) for (var s2 of F(e2)) t2.indexOf(s2) < 0 && ye.call(e2, s2) && (r2[s2] = e2[s2]);
  return r2;
};
function Se(...e2) {
  return w(...e2);
}
var st = s$c(), R = st;
var v$2 = /{([^}]*)}/g, lt = /(\d+\s+[\+\-\*\/]\s+\d+)/g, ct = /var\([^)]+\)/g;
function ke(e2) {
  return i$v(e2) && e2.hasOwnProperty("$value") && e2.hasOwnProperty("$type") ? e2.$value : e2;
}
function mt(e2) {
  return e2.replaceAll(/ /g, "").replace(/[^\w]/g, "-");
}
function Q(e2 = "", t2 = "") {
  return mt(`${p$4(e2, false) && p$4(t2, false) ? `${e2}-` : e2}${t2}`);
}
function ne(e2 = "", t2 = "") {
  return `--${Q(e2, t2)}`;
}
function dt(e2 = "") {
  let t2 = (e2.match(/{/g) || []).length, r2 = (e2.match(/}/g) || []).length;
  return (t2 + r2) % 2 !== 0;
}
function Y(e2, t2 = "", r2 = "", s2 = [], o2) {
  if (p$4(e2)) {
    let a2 = e2.trim();
    if (dt(a2)) return;
    if (z(a2, v$2)) {
      let n2 = a2.replaceAll(v$2, (l2) => {
        let c2 = l2.replace(/{|}/g, "").split(".").filter((m2) => !s2.some((u2) => z(m2, u2)));
        return `var(${ne(r2, ee(c2.join("-")))}${s$b(o2) ? `, ${o2}` : ""})`;
      });
      return z(n2.replace(ct, "0"), lt) ? `calc(${n2})` : n2;
    }
    return a2;
  } else if (_$1(e2)) return e2;
}
function _e(e2, t2, r2) {
  p$4(t2, false) && e2.push(`${t2}:${r2};`);
}
function T(e2, t2) {
  return e2 ? `${e2}{${t2}}` : "";
}
function oe(e2, t2) {
  if (e2.indexOf("dt(") === -1) return e2;
  function r2(n2, l2) {
    let i2 = [], c2 = 0, m2 = "", u2 = null, p2 = 0;
    for (; c2 <= n2.length; ) {
      let h2 = n2[c2];
      if ((h2 === '"' || h2 === "'" || h2 === "`") && n2[c2 - 1] !== "\\" && (u2 = u2 === h2 ? null : h2), !u2 && (h2 === "(" && p2++, h2 === ")" && p2--, (h2 === "," || c2 === n2.length) && p2 === 0)) {
        let y2 = m2.trim();
        y2.startsWith("dt(") ? i2.push(oe(y2, l2)) : i2.push(s2(y2)), m2 = "", c2++;
        continue;
      }
      h2 !== void 0 && (m2 += h2), c2++;
    }
    return i2;
  }
  function s2(n2) {
    let l2 = n2[0];
    if ((l2 === '"' || l2 === "'" || l2 === "`") && n2[n2.length - 1] === l2) return n2.slice(1, -1);
    let i2 = Number(n2);
    return isNaN(i2) ? n2 : i2;
  }
  let o2 = [], a2 = [];
  for (let n2 = 0; n2 < e2.length; n2++) if (e2[n2] === "d" && e2.slice(n2, n2 + 3) === "dt(") a2.push(n2), n2 += 2;
  else if (e2[n2] === ")" && a2.length > 0) {
    let l2 = a2.pop();
    a2.length === 0 && o2.push([l2, n2]);
  }
  if (!o2.length) return e2;
  for (let n2 = o2.length - 1; n2 >= 0; n2--) {
    let [l2, i2] = o2[n2], c2 = e2.slice(l2 + 3, i2), m2 = r2(c2, t2), u2 = t2(...m2);
    e2 = e2.slice(0, l2) + u2 + e2.slice(i2 + 1);
  }
  return e2;
}
var P = (...e2) => le(g$5.getTheme(), ...e2), le = (e2 = {}, t2, r2, s2) => {
  if (t2) {
    let { variable: o2, options: a2 } = g$5.defaults || {}, { prefix: n2, transform: l2 } = (e2 == null ? void 0 : e2.options) || a2 || {}, i2 = z(t2, v$2) ? t2 : `{${t2}}`;
    return s2 === "value" || a$H(s2) && l2 === "strict" ? g$5.getTokenValue(t2) : Y(i2, void 0, n2, [o2.excludedKeyRegex], r2);
  }
  return "";
};
function ar(e2, ...t2) {
  if (e2 instanceof Array) {
    let r2 = e2.reduce((s2, o2, a2) => {
      var n2;
      return s2 + o2 + ((n2 = m$5(t2[a2], { dt: P })) != null ? n2 : "");
    }, "");
    return oe(r2, P);
  }
  return m$5(e2, { dt: P });
}
function ce(e2, t2 = {}) {
  let r2 = g$5.defaults.variable, { prefix: s2 = r2.prefix, selector: o2 = r2.selector, excludedKeyRegex: a2 = r2.excludedKeyRegex } = t2, n2 = [], l2 = [], i2 = [{ node: e2, path: s2 }];
  for (; i2.length; ) {
    let { node: m2, path: u2 } = i2.pop();
    for (let p2 in m2) {
      let h2 = m2[p2], y2 = ke(h2), x2 = z(p2, a2) ? Q(u2) : Q(u2, ee(p2));
      if (i$v(y2)) i2.push({ node: y2, path: x2 });
      else {
        let k2 = ne(x2), w2 = Y(y2, x2, s2, [a2]);
        _e(l2, k2, w2);
        let $2 = x2;
        s2 && $2.startsWith(s2 + "-") && ($2 = $2.slice(s2.length + 1)), n2.push($2.replace(/-/g, "."));
      }
    }
  }
  let c2 = l2.join("");
  return { value: l2, tokens: n2, declarations: c2, css: T(o2, c2) };
}
var S = { regex: { rules: { class: { pattern: /^\.([a-zA-Z][\w-]*)$/, resolve(e2) {
  return { type: "class", selector: e2, matched: this.pattern.test(e2.trim()) };
} }, attr: { pattern: /^\[(.*)\]$/, resolve(e2) {
  return { type: "attr", selector: `:root${e2}`, matched: this.pattern.test(e2.trim()) };
} }, media: { pattern: /^@media (.*)$/, resolve(e2) {
  return { type: "media", selector: e2, matched: this.pattern.test(e2.trim()) };
} }, system: { pattern: /^system$/, resolve(e2) {
  return { type: "system", selector: "@media (prefers-color-scheme: dark)", matched: this.pattern.test(e2.trim()) };
} }, custom: { resolve(e2) {
  return { type: "custom", selector: e2, matched: true };
} } }, resolve(e2) {
  let t2 = Object.keys(this.rules).filter((r2) => r2 !== "custom").map((r2) => this.rules[r2]);
  return [e2].flat().map((r2) => {
    var s2;
    return (s2 = t2.map((o2) => o2.resolve(r2)).find((o2) => o2.matched)) != null ? s2 : this.rules.custom.resolve(r2);
  });
} }, _toVariables(e2, t2) {
  return ce(e2, { prefix: t2 == null ? void 0 : t2.prefix });
}, getCommon({ name: e2 = "", theme: t2 = {}, params: r2, set: s2, defaults: o2 }) {
  var w2, $2, j, V2, D2, z2, E2;
  let { preset: a2, options: n2 } = t2, l2, i2, c2, m2, u2, p2, h2;
  if (s$b(a2) && n2.transform !== "strict") {
    let { primitive: L, semantic: te, extend: re } = a2, y2 = te || {}, { colorScheme: K2 } = y2, M2 = b$3(y2, ["colorScheme"]), N2 = re || {}, { colorScheme: X } = N2, B = b$3(N2, ["colorScheme"]), x2 = K2 || {}, { dark: G2 } = x2, I2 = b$3(x2, ["dark"]), k2 = X || {}, { dark: U2 } = k2, H = b$3(k2, ["dark"]), W2 = s$b(L) ? this._toVariables({ primitive: L }, n2) : {}, q = s$b(M2) ? this._toVariables({ semantic: M2 }, n2) : {}, Z = s$b(I2) ? this._toVariables({ light: I2 }, n2) : {}, de = s$b(G2) ? this._toVariables({ dark: G2 }, n2) : {}, ue2 = s$b(B) ? this._toVariables({ semantic: B }, n2) : {}, pe = s$b(H) ? this._toVariables({ light: H }, n2) : {}, ge = s$b(U2) ? this._toVariables({ dark: U2 }, n2) : {}, [Le, Me] = [(w2 = W2.declarations) != null ? w2 : "", W2.tokens], [Ae, je] = [($2 = q.declarations) != null ? $2 : "", q.tokens || []], [De, ze] = [(j = Z.declarations) != null ? j : "", Z.tokens || []], [Ke, Xe] = [(V2 = de.declarations) != null ? V2 : "", de.tokens || []], [Be, Ge] = [(D2 = ue2.declarations) != null ? D2 : "", ue2.tokens || []], [Ie, Ue] = [(z2 = pe.declarations) != null ? z2 : "", pe.tokens || []], [He, We] = [(E2 = ge.declarations) != null ? E2 : "", ge.tokens || []];
    l2 = this.transformCSS(e2, Le, "light", "variable", n2, s2, o2), i2 = Me;
    let qe = this.transformCSS(e2, `${Ae}${De}`, "light", "variable", n2, s2, o2), Ze = this.transformCSS(e2, `${Ke}`, "dark", "variable", n2, s2, o2);
    c2 = `${qe}${Ze}`, m2 = [.../* @__PURE__ */ new Set([...je, ...ze, ...Xe])];
    let Fe = this.transformCSS(e2, `${Be}${Ie}color-scheme:light`, "light", "variable", n2, s2, o2), Je = this.transformCSS(e2, `${He}color-scheme:dark`, "dark", "variable", n2, s2, o2);
    u2 = `${Fe}${Je}`, p2 = [.../* @__PURE__ */ new Set([...Ge, ...Ue, ...We])], h2 = m$5(a2.css, { dt: P });
  }
  return { primitive: { css: l2, tokens: i2 }, semantic: { css: c2, tokens: m2 }, global: { css: u2, tokens: p2 }, style: h2 };
}, getPreset({ name: e2 = "", preset: t2 = {}, options: r2, params: s2, set: o2, defaults: a2, selector: n2 }) {
  var y2, N2, x2;
  let l2, i2, c2;
  if (s$b(t2) && r2.transform !== "strict") {
    let k2 = e2.replace("-directive", ""), m2 = t2, { colorScheme: w2, extend: $2, css: j } = m2, V2 = b$3(m2, ["colorScheme", "extend", "css"]), u2 = $2 || {}, { colorScheme: D2 } = u2, z2 = b$3(u2, ["colorScheme"]), p2 = w2 || {}, { dark: E2 } = p2, L = b$3(p2, ["dark"]), h2 = D2 || {}, { dark: te } = h2, re = b$3(h2, ["dark"]), K2 = s$b(V2) ? this._toVariables({ [k2]: d$A(d$A({}, V2), z2) }, r2) : {}, M2 = s$b(L) ? this._toVariables({ [k2]: d$A(d$A({}, L), re) }, r2) : {}, X = s$b(E2) ? this._toVariables({ [k2]: d$A(d$A({}, E2), te) }, r2) : {}, [B, G2] = [(y2 = K2.declarations) != null ? y2 : "", K2.tokens || []], [I2, U2] = [(N2 = M2.declarations) != null ? N2 : "", M2.tokens || []], [H, W2] = [(x2 = X.declarations) != null ? x2 : "", X.tokens || []], q = this.transformCSS(k2, `${B}${I2}`, "light", "variable", r2, o2, a2, n2), Z = this.transformCSS(k2, H, "dark", "variable", r2, o2, a2, n2);
    l2 = `${q}${Z}`, i2 = [.../* @__PURE__ */ new Set([...G2, ...U2, ...W2])], c2 = m$5(j, { dt: P });
  }
  return { css: l2, tokens: i2, style: c2 };
}, getPresetC({ name: e2 = "", theme: t2 = {}, params: r2, set: s2, defaults: o2 }) {
  var i2;
  let { preset: a2, options: n2 } = t2, l2 = (i2 = a2 == null ? void 0 : a2.components) == null ? void 0 : i2[e2];
  return this.getPreset({ name: e2, preset: l2, options: n2, params: r2, set: s2, defaults: o2 });
}, getPresetD({ name: e2 = "", theme: t2 = {}, params: r2, set: s2, defaults: o2 }) {
  var c2, m2;
  let a2 = e2.replace("-directive", ""), { preset: n2, options: l2 } = t2, i2 = ((c2 = n2 == null ? void 0 : n2.components) == null ? void 0 : c2[a2]) || ((m2 = n2 == null ? void 0 : n2.directives) == null ? void 0 : m2[a2]);
  return this.getPreset({ name: a2, preset: i2, options: l2, params: r2, set: s2, defaults: o2 });
}, applyDarkColorScheme(e2) {
  return !(e2.darkModeSelector === "none" || e2.darkModeSelector === false);
}, getColorSchemeOption(e2, t2) {
  var r2;
  return this.applyDarkColorScheme(e2) ? this.regex.resolve(e2.darkModeSelector === true ? t2.options.darkModeSelector : (r2 = e2.darkModeSelector) != null ? r2 : t2.options.darkModeSelector) : [];
}, getLayerOrder(e2, t2 = {}, r2, s2) {
  let { cssLayer: o2 } = t2;
  return o2 ? `@layer ${m$5(o2.order || o2.name || "primeui", r2)}` : "";
}, getCommonStyleSheet({ name: e2 = "", theme: t2 = {}, params: r2, props: s2 = {}, set: o2, defaults: a2 }) {
  let n2 = this.getCommon({ name: e2, theme: t2, params: r2, set: o2, defaults: a2 }), l2 = Object.entries(s2).reduce((i2, [c2, m2]) => i2.push(`${c2}="${m2}"`) && i2, []).join(" ");
  return Object.entries(n2 || {}).reduce((i2, [c2, m2]) => {
    if (i$v(m2) && Object.hasOwn(m2, "css")) {
      let u2 = G(m2.css), p2 = `${c2}-variables`;
      i2.push(`<style type="text/css" data-primevue-style-id="${p2}" ${l2}>${u2}</style>`);
    }
    return i2;
  }, []).join("");
}, getStyleSheet({ name: e2 = "", theme: t2 = {}, params: r2, props: s2 = {}, set: o2, defaults: a2 }) {
  var c2;
  let n2 = { name: e2, theme: t2, params: r2, set: o2, defaults: a2 }, l2 = (c2 = e2.includes("-directive") ? this.getPresetD(n2) : this.getPresetC(n2)) == null ? void 0 : c2.css, i2 = Object.entries(s2).reduce((m2, [u2, p2]) => m2.push(`${u2}="${p2}"`) && m2, []).join(" ");
  return l2 ? `<style type="text/css" data-primevue-style-id="${e2}-variables" ${i2}>${G(l2)}</style>` : "";
}, createTokens(e2 = {}, t2, r2 = "", s2 = "", o2 = {}) {
  return {};
}, getTokenValue(e2, t2, r2) {
  var l2;
  let o2 = ((i2) => i2.split(".").filter((m2) => !z(m2.toLowerCase(), r2.variable.excludedKeyRegex)).join("."))(t2), a2 = t2.includes("colorScheme.light") ? "light" : t2.includes("colorScheme.dark") ? "dark" : void 0, n2 = [(l2 = e2[o2]) == null ? void 0 : l2.computed(a2)].flat().filter((i2) => i2);
  return n2.length === 1 ? n2[0].value : n2.reduce((i2 = {}, c2) => {
    let p2 = c2, { colorScheme: m2 } = p2, u2 = b$3(p2, ["colorScheme"]);
    return i2[m2] = u2, i2;
  }, void 0);
}, getSelectorRule(e2, t2, r2, s2) {
  return r2 === "class" || r2 === "attr" ? T(s$b(t2) ? `${e2}${t2},${e2} ${t2}` : e2, s2) : T(e2, T(t2 != null ? t2 : ":root", s2));
}, transformCSS(e2, t2, r2, s2, o2 = {}, a2, n2, l2) {
  if (s$b(t2)) {
    let { cssLayer: i2 } = o2;
    if (s2 !== "style") {
      let c2 = this.getColorSchemeOption(o2, n2);
      t2 = r2 === "dark" ? c2.reduce((m2, { type: u2, selector: p2 }) => (s$b(p2) && (m2 += p2.includes("[CSS]") ? p2.replace("[CSS]", t2) : this.getSelectorRule(p2, l2, u2, t2)), m2), "") : T(l2 != null ? l2 : ":root", t2);
    }
    if (i2) {
      let c2 = { name: "primeui" };
      i$v(i2) && (c2.name = m$5(i2.name, { name: e2, type: s2 })), s$b(c2.name) && (t2 = T(`@layer ${c2.name}`, t2), a2 == null || a2.layerNames(c2.name));
    }
    return t2;
  }
  return "";
} };
var g$5 = { defaults: { variable: { prefix: "p", selector: ":root", excludedKeyRegex: /^(primitive|semantic|components|directives|variables|colorscheme|light|dark|common|root|states|extend|css)$/gi }, options: { prefix: "p", darkModeSelector: "system", cssLayer: false } }, _theme: void 0, _layerNames: /* @__PURE__ */ new Set(), _loadedStyleNames: /* @__PURE__ */ new Set(), _loadingStyles: /* @__PURE__ */ new Set(), _tokens: {}, update(e2 = {}) {
  let { theme: t2 } = e2;
  t2 && (this._theme = _(d$A({}, t2), { options: d$A(d$A({}, this.defaults.options), t2.options) }), this._tokens = S.createTokens(this.preset, this.defaults), this.clearLoadedStyleNames());
}, get theme() {
  return this._theme;
}, get preset() {
  var e2;
  return ((e2 = this.theme) == null ? void 0 : e2.preset) || {};
}, get options() {
  var e2;
  return ((e2 = this.theme) == null ? void 0 : e2.options) || {};
}, get tokens() {
  return this._tokens;
}, getTheme() {
  return this.theme;
}, setTheme(e2) {
  this.update({ theme: e2 }), R.emit("theme:change", e2);
}, getPreset() {
  return this.preset;
}, setPreset(e2) {
  this._theme = _(d$A({}, this.theme), { preset: e2 }), this._tokens = S.createTokens(e2, this.defaults), this.clearLoadedStyleNames(), R.emit("preset:change", e2), R.emit("theme:change", this.theme);
}, getOptions() {
  return this.options;
}, setOptions(e2) {
  this._theme = _(d$A({}, this.theme), { options: e2 }), this.clearLoadedStyleNames(), R.emit("options:change", e2), R.emit("theme:change", this.theme);
}, getLayerNames() {
  return [...this._layerNames];
}, setLayerNames(e2) {
  this._layerNames.add(e2);
}, getLoadedStyleNames() {
  return this._loadedStyleNames;
}, isStyleNameLoaded(e2) {
  return this._loadedStyleNames.has(e2);
}, setLoadedStyleName(e2) {
  this._loadedStyleNames.add(e2);
}, deleteLoadedStyleName(e2) {
  this._loadedStyleNames.delete(e2);
}, clearLoadedStyleNames() {
  this._loadedStyleNames.clear();
}, getTokenValue(e2) {
  return S.getTokenValue(this.tokens, e2, this.defaults);
}, getCommon(e2 = "", t2) {
  return S.getCommon({ name: e2, theme: this.theme, params: t2, defaults: this.defaults, set: { layerNames: this.setLayerNames.bind(this) } });
}, getComponent(e2 = "", t2) {
  let r2 = { name: e2, theme: this.theme, params: t2, defaults: this.defaults, set: { layerNames: this.setLayerNames.bind(this) } };
  return S.getPresetC(r2);
}, getDirective(e2 = "", t2) {
  let r2 = { name: e2, theme: this.theme, params: t2, defaults: this.defaults, set: { layerNames: this.setLayerNames.bind(this) } };
  return S.getPresetD(r2);
}, getCustomPreset(e2 = "", t2, r2, s2) {
  let o2 = { name: e2, preset: t2, options: this.options, selector: r2, params: s2, defaults: this.defaults, set: { layerNames: this.setLayerNames.bind(this) } };
  return S.getPreset(o2);
}, getLayerOrderCSS(e2 = "") {
  return S.getLayerOrder(e2, this.options, { names: this.getLayerNames() }, this.defaults);
}, transformCSS(e2 = "", t2, r2 = "style", s2) {
  return S.transformCSS(e2, t2, s2, r2, this.options, { layerNames: this.setLayerNames.bind(this) }, this.defaults);
}, getCommonStyleSheet(e2 = "", t2, r2 = {}) {
  return S.getCommonStyleSheet({ name: e2, theme: this.theme, params: t2, props: r2, defaults: this.defaults, set: { layerNames: this.setLayerNames.bind(this) } });
}, getStyleSheet(e2, t2, r2 = {}) {
  return S.getStyleSheet({ name: e2, theme: this.theme, params: t2, props: r2, defaults: this.defaults, set: { layerNames: this.setLayerNames.bind(this) } });
}, onStyleMounted(e2) {
  this._loadingStyles.add(e2);
}, onStyleUpdated(e2) {
  this._loadingStyles.add(e2);
}, onStyleLoaded(e2, { name: t2 }) {
  this._loadingStyles.size && (this._loadingStyles.delete(t2), R.emit(`theme:${t2}:load`, e2), !this._loadingStyles.size && R.emit("theme:load"));
} };
var style = "\n    *,\n    ::before,\n    ::after {\n        box-sizing: border-box;\n    }\n\n    /* Non vue overlay animations */\n    .p-connected-overlay {\n        opacity: 0;\n        transform: scaleY(0.8);\n        transition:\n            transform 0.12s cubic-bezier(0, 0, 0.2, 1),\n            opacity 0.12s cubic-bezier(0, 0, 0.2, 1);\n    }\n\n    .p-connected-overlay-visible {\n        opacity: 1;\n        transform: scaleY(1);\n    }\n\n    .p-connected-overlay-hidden {\n        opacity: 0;\n        transform: scaleY(1);\n        transition: opacity 0.1s linear;\n    }\n\n    /* Vue based overlay animations */\n    .p-connected-overlay-enter-from {\n        opacity: 0;\n        transform: scaleY(0.8);\n    }\n\n    .p-connected-overlay-leave-to {\n        opacity: 0;\n    }\n\n    .p-connected-overlay-enter-active {\n        transition:\n            transform 0.12s cubic-bezier(0, 0, 0.2, 1),\n            opacity 0.12s cubic-bezier(0, 0, 0.2, 1);\n    }\n\n    .p-connected-overlay-leave-active {\n        transition: opacity 0.1s linear;\n    }\n\n    /* Toggleable Content */\n    .p-toggleable-content-enter-from,\n    .p-toggleable-content-leave-to {\n        max-height: 0;\n    }\n\n    .p-toggleable-content-enter-to,\n    .p-toggleable-content-leave-from {\n        max-height: 1000px;\n    }\n\n    .p-toggleable-content-leave-active {\n        overflow: hidden;\n        transition: max-height 0.45s cubic-bezier(0, 1, 0, 1);\n    }\n\n    .p-toggleable-content-enter-active {\n        overflow: hidden;\n        transition: max-height 1s ease-in-out;\n    }\n\n    .p-disabled,\n    .p-disabled * {\n        cursor: default;\n        pointer-events: none;\n        user-select: none;\n    }\n\n    .p-disabled,\n    .p-component:disabled {\n        opacity: dt('disabled.opacity');\n    }\n\n    .pi {\n        font-size: dt('icon.size');\n    }\n\n    .p-icon {\n        width: dt('icon.size');\n        height: dt('icon.size');\n    }\n\n    .p-overlay-mask {\n        background: dt('mask.background');\n        color: dt('mask.color');\n        position: fixed;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n    }\n\n    .p-overlay-mask-enter {\n        animation: p-overlay-mask-enter-animation dt('mask.transition.duration') forwards;\n    }\n\n    .p-overlay-mask-leave {\n        animation: p-overlay-mask-leave-animation dt('mask.transition.duration') forwards;\n    }\n\n    @keyframes p-overlay-mask-enter-animation {\n        from {\n            background: transparent;\n        }\n        to {\n            background: dt('mask.background');\n        }\n    }\n    @keyframes p-overlay-mask-leave-animation {\n        from {\n            background: dt('mask.background');\n        }\n        to {\n            background: transparent;\n        }\n    }\n";
function _typeof$2(o2) {
  "@babel/helpers - typeof";
  return _typeof$2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o3) {
    return typeof o3;
  } : function(o3) {
    return o3 && "function" == typeof Symbol && o3.constructor === Symbol && o3 !== Symbol.prototype ? "symbol" : typeof o3;
  }, _typeof$2(o2);
}
function ownKeys$2(e2, r2) {
  var t2 = Object.keys(e2);
  if (Object.getOwnPropertySymbols) {
    var o2 = Object.getOwnPropertySymbols(e2);
    r2 && (o2 = o2.filter(function(r3) {
      return Object.getOwnPropertyDescriptor(e2, r3).enumerable;
    })), t2.push.apply(t2, o2);
  }
  return t2;
}
function _objectSpread$2(e2) {
  for (var r2 = 1; r2 < arguments.length; r2++) {
    var t2 = null != arguments[r2] ? arguments[r2] : {};
    r2 % 2 ? ownKeys$2(Object(t2), true).forEach(function(r3) {
      _defineProperty$2(e2, r3, t2[r3]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(t2)) : ownKeys$2(Object(t2)).forEach(function(r3) {
      Object.defineProperty(e2, r3, Object.getOwnPropertyDescriptor(t2, r3));
    });
  }
  return e2;
}
function _defineProperty$2(e2, r2, t2) {
  return (r2 = _toPropertyKey$2(r2)) in e2 ? Object.defineProperty(e2, r2, { value: t2, enumerable: true, configurable: true, writable: true }) : e2[r2] = t2, e2;
}
function _toPropertyKey$2(t2) {
  var i2 = _toPrimitive$2(t2, "string");
  return "symbol" == _typeof$2(i2) ? i2 : i2 + "";
}
function _toPrimitive$2(t2, r2) {
  if ("object" != _typeof$2(t2) || !t2) return t2;
  var e2 = t2[Symbol.toPrimitive];
  if (void 0 !== e2) {
    var i2 = e2.call(t2, r2);
    if ("object" != _typeof$2(i2)) return i2;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r2 ? String : Number)(t2);
}
function tryOnMounted(fn) {
  var sync = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
  if (getCurrentInstance() && getCurrentInstance().components) onMounted(fn);
  else if (sync) fn();
  else nextTick(fn);
}
var _id = 0;
function useStyle(css3) {
  var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  var isLoaded = ref(false);
  var cssRef = ref(css3);
  var styleRef = ref(null);
  var defaultDocument = tt() ? window.document : void 0;
  var _options$document = options.document, document2 = _options$document === void 0 ? defaultDocument : _options$document, _options$immediate = options.immediate, immediate = _options$immediate === void 0 ? true : _options$immediate, _options$manual = options.manual, manual = _options$manual === void 0 ? false : _options$manual, _options$name = options.name, name = _options$name === void 0 ? "style_".concat(++_id) : _options$name, _options$id = options.id, id = _options$id === void 0 ? void 0 : _options$id, _options$media = options.media, media = _options$media === void 0 ? void 0 : _options$media, _options$nonce = options.nonce, nonce = _options$nonce === void 0 ? void 0 : _options$nonce, _options$first = options.first, first = _options$first === void 0 ? false : _options$first, _options$onMounted = options.onMounted, onStyleMounted = _options$onMounted === void 0 ? void 0 : _options$onMounted, _options$onUpdated = options.onUpdated, onStyleUpdated = _options$onUpdated === void 0 ? void 0 : _options$onUpdated, _options$onLoad = options.onLoad, onStyleLoaded = _options$onLoad === void 0 ? void 0 : _options$onLoad, _options$props = options.props, props = _options$props === void 0 ? {} : _options$props;
  var stop = function stop2() {
  };
  var load2 = function load3(_css) {
    var _props = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (!document2) return;
    var _styleProps = _objectSpread$2(_objectSpread$2({}, props), _props);
    var _name = _styleProps.name || name, _id2 = _styleProps.id || id, _nonce = _styleProps.nonce || nonce;
    styleRef.value = document2.querySelector('style[data-primevue-style-id="'.concat(_name, '"]')) || document2.getElementById(_id2) || document2.createElement("style");
    if (!styleRef.value.isConnected) {
      cssRef.value = _css || css3;
      A(styleRef.value, {
        type: "text/css",
        id: _id2,
        media,
        nonce: _nonce
      });
      first ? document2.head.prepend(styleRef.value) : document2.head.appendChild(styleRef.value);
      Kt(styleRef.value, "data-primevue-style-id", _name);
      A(styleRef.value, _styleProps);
      styleRef.value.onload = function(event) {
        return onStyleLoaded === null || onStyleLoaded === void 0 ? void 0 : onStyleLoaded(event, {
          name: _name
        });
      };
      onStyleMounted === null || onStyleMounted === void 0 || onStyleMounted(_name);
    }
    if (isLoaded.value) return;
    stop = watch(cssRef, function(value) {
      styleRef.value.textContent = value;
      onStyleUpdated === null || onStyleUpdated === void 0 || onStyleUpdated(_name);
    }, {
      immediate: true
    });
    isLoaded.value = true;
  };
  var unload = function unload2() {
    if (!document2 || !isLoaded.value) return;
    stop();
    T$1(styleRef.value) && document2.head.removeChild(styleRef.value);
    isLoaded.value = false;
    styleRef.value = null;
  };
  if (immediate && !manual) tryOnMounted(load2);
  return {
    id,
    name,
    el: styleRef,
    css: cssRef,
    unload,
    load: load2,
    isLoaded: readonly(isLoaded)
  };
}
function _typeof$1(o2) {
  "@babel/helpers - typeof";
  return _typeof$1 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o3) {
    return typeof o3;
  } : function(o3) {
    return o3 && "function" == typeof Symbol && o3.constructor === Symbol && o3 !== Symbol.prototype ? "symbol" : typeof o3;
  }, _typeof$1(o2);
}
var _templateObject, _templateObject2, _templateObject3, _templateObject4;
function _slicedToArray(r2, e2) {
  return _arrayWithHoles(r2) || _iterableToArrayLimit(r2, e2) || _unsupportedIterableToArray(r2, e2) || _nonIterableRest();
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray(r2, a2) {
  if (r2) {
    if ("string" == typeof r2) return _arrayLikeToArray(r2, a2);
    var t2 = {}.toString.call(r2).slice(8, -1);
    return "Object" === t2 && r2.constructor && (t2 = r2.constructor.name), "Map" === t2 || "Set" === t2 ? Array.from(r2) : "Arguments" === t2 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t2) ? _arrayLikeToArray(r2, a2) : void 0;
  }
}
function _arrayLikeToArray(r2, a2) {
  (null == a2 || a2 > r2.length) && (a2 = r2.length);
  for (var e2 = 0, n2 = Array(a2); e2 < a2; e2++) n2[e2] = r2[e2];
  return n2;
}
function _iterableToArrayLimit(r2, l2) {
  var t2 = null == r2 ? null : "undefined" != typeof Symbol && r2[Symbol.iterator] || r2["@@iterator"];
  if (null != t2) {
    var e2, n2, i2, u2, a2 = [], f2 = true, o2 = false;
    try {
      if (i2 = (t2 = t2.call(r2)).next, 0 === l2) ;
      else for (; !(f2 = (e2 = i2.call(t2)).done) && (a2.push(e2.value), a2.length !== l2); f2 = true) ;
    } catch (r3) {
      o2 = true, n2 = r3;
    } finally {
      try {
        if (!f2 && null != t2["return"] && (u2 = t2["return"](), Object(u2) !== u2)) return;
      } finally {
        if (o2) throw n2;
      }
    }
    return a2;
  }
}
function _arrayWithHoles(r2) {
  if (Array.isArray(r2)) return r2;
}
function ownKeys$1(e2, r2) {
  var t2 = Object.keys(e2);
  if (Object.getOwnPropertySymbols) {
    var o2 = Object.getOwnPropertySymbols(e2);
    r2 && (o2 = o2.filter(function(r3) {
      return Object.getOwnPropertyDescriptor(e2, r3).enumerable;
    })), t2.push.apply(t2, o2);
  }
  return t2;
}
function _objectSpread$1(e2) {
  for (var r2 = 1; r2 < arguments.length; r2++) {
    var t2 = null != arguments[r2] ? arguments[r2] : {};
    r2 % 2 ? ownKeys$1(Object(t2), true).forEach(function(r3) {
      _defineProperty$1(e2, r3, t2[r3]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(t2)) : ownKeys$1(Object(t2)).forEach(function(r3) {
      Object.defineProperty(e2, r3, Object.getOwnPropertyDescriptor(t2, r3));
    });
  }
  return e2;
}
function _defineProperty$1(e2, r2, t2) {
  return (r2 = _toPropertyKey$1(r2)) in e2 ? Object.defineProperty(e2, r2, { value: t2, enumerable: true, configurable: true, writable: true }) : e2[r2] = t2, e2;
}
function _toPropertyKey$1(t2) {
  var i2 = _toPrimitive$1(t2, "string");
  return "symbol" == _typeof$1(i2) ? i2 : i2 + "";
}
function _toPrimitive$1(t2, r2) {
  if ("object" != _typeof$1(t2) || !t2) return t2;
  var e2 = t2[Symbol.toPrimitive];
  if (void 0 !== e2) {
    var i2 = e2.call(t2, r2);
    if ("object" != _typeof$1(i2)) return i2;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r2 ? String : Number)(t2);
}
function _taggedTemplateLiteral(e2, t2) {
  return t2 || (t2 = e2.slice(0)), Object.freeze(Object.defineProperties(e2, { raw: { value: Object.freeze(t2) } }));
}
var css = function css2(_ref) {
  var dt2 = _ref.dt;
  return "\n.p-hidden-accessible {\n    border: 0;\n    clip: rect(0 0 0 0);\n    height: 1px;\n    margin: -1px;\n    opacity: 0;\n    overflow: hidden;\n    padding: 0;\n    pointer-events: none;\n    position: absolute;\n    white-space: nowrap;\n    width: 1px;\n}\n\n.p-overflow-hidden {\n    overflow: hidden;\n    padding-right: ".concat(dt2("scrollbar.width"), ";\n}\n");
};
var classes = {};
var inlineStyles = {};
var BaseStyle = {
  name: "base",
  css,
  style,
  classes,
  inlineStyles,
  load: function load(style2) {
    var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    var transform = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : function(cs) {
      return cs;
    };
    var computedStyle = transform(ar(_templateObject || (_templateObject = _taggedTemplateLiteral(["", ""])), style2));
    return s$b(computedStyle) ? useStyle(G(computedStyle), _objectSpread$1({
      name: this.name
    }, options)) : {};
  },
  loadCSS: function loadCSS() {
    var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    return this.load(this.css, options);
  },
  loadStyle: function loadStyle() {
    var _this = this;
    var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    var style2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
    return this.load(this.style, options, function() {
      var computedStyle = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
      return g$5.transformCSS(options.name || _this.name, "".concat(computedStyle).concat(ar(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["", ""])), style2)));
    });
  },
  getCommonTheme: function getCommonTheme(params) {
    return g$5.getCommon(this.name, params);
  },
  getComponentTheme: function getComponentTheme(params) {
    return g$5.getComponent(this.name, params);
  },
  getDirectiveTheme: function getDirectiveTheme(params) {
    return g$5.getDirective(this.name, params);
  },
  getPresetTheme: function getPresetTheme(preset, selector, params) {
    return g$5.getCustomPreset(this.name, preset, selector, params);
  },
  getLayerOrderThemeCSS: function getLayerOrderThemeCSS() {
    return g$5.getLayerOrderCSS(this.name);
  },
  getStyleSheet: function getStyleSheet() {
    var extendedCSS = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
    var props = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (this.css) {
      var _css = m$5(this.css, {
        dt: P
      }) || "";
      var _style = G(ar(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["", "", ""])), _css, extendedCSS));
      var _props = Object.entries(props).reduce(function(acc, _ref2) {
        var _ref3 = _slicedToArray(_ref2, 2), k2 = _ref3[0], v2 = _ref3[1];
        return acc.push("".concat(k2, '="').concat(v2, '"')) && acc;
      }, []).join(" ");
      return s$b(_style) ? '<style type="text/css" data-primevue-style-id="'.concat(this.name, '" ').concat(_props, ">").concat(_style, "</style>") : "";
    }
    return "";
  },
  getCommonThemeStyleSheet: function getCommonThemeStyleSheet(params) {
    var props = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return g$5.getCommonStyleSheet(this.name, params, props);
  },
  getThemeStyleSheet: function getThemeStyleSheet(params) {
    var props = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    var css3 = [g$5.getStyleSheet(this.name, params, props)];
    if (this.style) {
      var name = this.name === "base" ? "global-style" : "".concat(this.name, "-style");
      var _css = ar(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["", ""])), m$5(this.style, {
        dt: P
      }));
      var _style = G(g$5.transformCSS(name, _css));
      var _props = Object.entries(props).reduce(function(acc, _ref4) {
        var _ref5 = _slicedToArray(_ref4, 2), k2 = _ref5[0], v2 = _ref5[1];
        return acc.push("".concat(k2, '="').concat(v2, '"')) && acc;
      }, []).join(" ");
      s$b(_style) && css3.push('<style type="text/css" data-primevue-style-id="'.concat(name, '" ').concat(_props, ">").concat(_style, "</style>"));
    }
    return css3.join("");
  },
  extend: function extend(inStyle) {
    return _objectSpread$1(_objectSpread$1({}, this), {}, {
      css: void 0,
      style: void 0
    }, inStyle);
  }
};
var PrimeVueService = s$c();
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "ErrorBoxEntry",
  props: {
    message: {}
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("li", null, [
        _cache[0] || (_cache[0] = createBaseVNode("span", { class: "codicon codicon-warning" }, null, -1)),
        createTextVNode(toDisplayString(_ctx.message), 1)
      ]);
    };
  }
});
const ErrorBoxEntry = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-41d7adbf"]]);
const _hoisted_1 = {
  key: 0,
  id: "errorContainer"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ErrorBox",
  props: {
    "errorMessages": { required: true },
    "errorMessagesModifiers": {}
  },
  emits: ["update:errorMessages"],
  setup(__props) {
    const errorMessages = useModel(__props, "errorMessages");
    vscodeApi.on("errorMessage", (data) => {
      console.log(`errorMessage: ${data}`);
      errorMessages.value.push(data);
    });
    return (_ctx, _cache) => {
      return errorMessages.value.length > 0 ? (openBlock(), createElementBlock("ul", _hoisted_1, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(errorMessages.value, (message) => {
          return openBlock(), createBlock(ErrorBoxEntry, { message }, null, 8, ["message"]);
        }), 256))
      ])) : createCommentVNode("", true);
    };
  }
});
const ErrorBox = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-0093af46"]]);
function getDefaultExportFromCjs(x2) {
  return x2 && x2.__esModule && Object.prototype.hasOwnProperty.call(x2, "default") ? x2["default"] : x2;
}
var core;
var hasRequiredCore;
function requireCore() {
  if (hasRequiredCore) return core;
  hasRequiredCore = 1;
  function deepFreeze(obj) {
    if (obj instanceof Map) {
      obj.clear = obj.delete = obj.set = function() {
        throw new Error("map is read-only");
      };
    } else if (obj instanceof Set) {
      obj.add = obj.clear = obj.delete = function() {
        throw new Error("set is read-only");
      };
    }
    Object.freeze(obj);
    Object.getOwnPropertyNames(obj).forEach((name) => {
      const prop = obj[name];
      const type = typeof prop;
      if ((type === "object" || type === "function") && !Object.isFrozen(prop)) {
        deepFreeze(prop);
      }
    });
    return obj;
  }
  class Response {
    /**
     * @param {CompiledMode} mode
     */
    constructor(mode) {
      if (mode.data === void 0) mode.data = {};
      this.data = mode.data;
      this.isMatchIgnored = false;
    }
    ignoreMatch() {
      this.isMatchIgnored = true;
    }
  }
  function escapeHTML(value) {
    return value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;");
  }
  function inherit$1(original, ...objects) {
    const result = /* @__PURE__ */ Object.create(null);
    for (const key in original) {
      result[key] = original[key];
    }
    objects.forEach(function(obj) {
      for (const key in obj) {
        result[key] = obj[key];
      }
    });
    return (
      /** @type {T} */
      result
    );
  }
  const SPAN_CLOSE = "</span>";
  const emitsWrappingTags = (node) => {
    return !!node.scope;
  };
  const scopeToCSSClass = (name, { prefix }) => {
    if (name.startsWith("language:")) {
      return name.replace("language:", "language-");
    }
    if (name.includes(".")) {
      const pieces = name.split(".");
      return [
        `${prefix}${pieces.shift()}`,
        ...pieces.map((x2, i2) => `${x2}${"_".repeat(i2 + 1)}`)
      ].join(" ");
    }
    return `${prefix}${name}`;
  };
  class HTMLRenderer {
    /**
     * Creates a new HTMLRenderer
     *
     * @param {Tree} parseTree - the parse tree (must support `walk` API)
     * @param {{classPrefix: string}} options
     */
    constructor(parseTree, options) {
      this.buffer = "";
      this.classPrefix = options.classPrefix;
      parseTree.walk(this);
    }
    /**
     * Adds texts to the output stream
     *
     * @param {string} text */
    addText(text) {
      this.buffer += escapeHTML(text);
    }
    /**
     * Adds a node open to the output stream (if needed)
     *
     * @param {Node} node */
    openNode(node) {
      if (!emitsWrappingTags(node)) return;
      const className = scopeToCSSClass(
        node.scope,
        { prefix: this.classPrefix }
      );
      this.span(className);
    }
    /**
     * Adds a node close to the output stream (if needed)
     *
     * @param {Node} node */
    closeNode(node) {
      if (!emitsWrappingTags(node)) return;
      this.buffer += SPAN_CLOSE;
    }
    /**
     * returns the accumulated buffer
    */
    value() {
      return this.buffer;
    }
    // helpers
    /**
     * Builds a span element
     *
     * @param {string} className */
    span(className) {
      this.buffer += `<span class="${className}">`;
    }
  }
  const newNode = (opts = {}) => {
    const result = { children: [] };
    Object.assign(result, opts);
    return result;
  };
  class TokenTree {
    constructor() {
      this.rootNode = newNode();
      this.stack = [this.rootNode];
    }
    get top() {
      return this.stack[this.stack.length - 1];
    }
    get root() {
      return this.rootNode;
    }
    /** @param {Node} node */
    add(node) {
      this.top.children.push(node);
    }
    /** @param {string} scope */
    openNode(scope) {
      const node = newNode({ scope });
      this.add(node);
      this.stack.push(node);
    }
    closeNode() {
      if (this.stack.length > 1) {
        return this.stack.pop();
      }
      return void 0;
    }
    closeAllNodes() {
      while (this.closeNode()) ;
    }
    toJSON() {
      return JSON.stringify(this.rootNode, null, 4);
    }
    /**
     * @typedef { import("./html_renderer").Renderer } Renderer
     * @param {Renderer} builder
     */
    walk(builder) {
      return this.constructor._walk(builder, this.rootNode);
    }
    /**
     * @param {Renderer} builder
     * @param {Node} node
     */
    static _walk(builder, node) {
      if (typeof node === "string") {
        builder.addText(node);
      } else if (node.children) {
        builder.openNode(node);
        node.children.forEach((child) => this._walk(builder, child));
        builder.closeNode(node);
      }
      return builder;
    }
    /**
     * @param {Node} node
     */
    static _collapse(node) {
      if (typeof node === "string") return;
      if (!node.children) return;
      if (node.children.every((el) => typeof el === "string")) {
        node.children = [node.children.join("")];
      } else {
        node.children.forEach((child) => {
          TokenTree._collapse(child);
        });
      }
    }
  }
  class TokenTreeEmitter extends TokenTree {
    /**
     * @param {*} options
     */
    constructor(options) {
      super();
      this.options = options;
    }
    /**
     * @param {string} text
     */
    addText(text) {
      if (text === "") {
        return;
      }
      this.add(text);
    }
    /** @param {string} scope */
    startScope(scope) {
      this.openNode(scope);
    }
    endScope() {
      this.closeNode();
    }
    /**
     * @param {Emitter & {root: DataNode}} emitter
     * @param {string} name
     */
    __addSublanguage(emitter, name) {
      const node = emitter.root;
      if (name) node.scope = `language:${name}`;
      this.add(node);
    }
    toHTML() {
      const renderer = new HTMLRenderer(this, this.options);
      return renderer.value();
    }
    finalize() {
      this.closeAllNodes();
      return true;
    }
  }
  function source(re) {
    if (!re) return null;
    if (typeof re === "string") return re;
    return re.source;
  }
  function lookahead(re) {
    return concat("(?=", re, ")");
  }
  function anyNumberOfTimes(re) {
    return concat("(?:", re, ")*");
  }
  function optional(re) {
    return concat("(?:", re, ")?");
  }
  function concat(...args) {
    const joined = args.map((x2) => source(x2)).join("");
    return joined;
  }
  function stripOptionsFromArgs(args) {
    const opts = args[args.length - 1];
    if (typeof opts === "object" && opts.constructor === Object) {
      args.splice(args.length - 1, 1);
      return opts;
    } else {
      return {};
    }
  }
  function either(...args) {
    const opts = stripOptionsFromArgs(args);
    const joined = "(" + (opts.capture ? "" : "?:") + args.map((x2) => source(x2)).join("|") + ")";
    return joined;
  }
  function countMatchGroups(re) {
    return new RegExp(re.toString() + "|").exec("").length - 1;
  }
  function startsWith(re, lexeme) {
    const match = re && re.exec(lexeme);
    return match && match.index === 0;
  }
  const BACKREF_RE = /\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;
  function _rewriteBackreferences(regexps, { joinWith }) {
    let numCaptures = 0;
    return regexps.map((regex) => {
      numCaptures += 1;
      const offset = numCaptures;
      let re = source(regex);
      let out = "";
      while (re.length > 0) {
        const match = BACKREF_RE.exec(re);
        if (!match) {
          out += re;
          break;
        }
        out += re.substring(0, match.index);
        re = re.substring(match.index + match[0].length);
        if (match[0][0] === "\\" && match[1]) {
          out += "\\" + String(Number(match[1]) + offset);
        } else {
          out += match[0];
          if (match[0] === "(") {
            numCaptures++;
          }
        }
      }
      return out;
    }).map((re) => `(${re})`).join(joinWith);
  }
  const MATCH_NOTHING_RE = /\b\B/;
  const IDENT_RE = "[a-zA-Z]\\w*";
  const UNDERSCORE_IDENT_RE = "[a-zA-Z_]\\w*";
  const NUMBER_RE = "\\b\\d+(\\.\\d+)?";
  const C_NUMBER_RE = "(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)";
  const BINARY_NUMBER_RE = "\\b(0b[01]+)";
  const RE_STARTERS_RE = "!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~";
  const SHEBANG = (opts = {}) => {
    const beginShebang = /^#![ ]*\//;
    if (opts.binary) {
      opts.begin = concat(
        beginShebang,
        /.*\b/,
        opts.binary,
        /\b.*/
      );
    }
    return inherit$1({
      scope: "meta",
      begin: beginShebang,
      end: /$/,
      relevance: 0,
      /** @type {ModeCallback} */
      "on:begin": (m2, resp) => {
        if (m2.index !== 0) resp.ignoreMatch();
      }
    }, opts);
  };
  const BACKSLASH_ESCAPE = {
    begin: "\\\\[\\s\\S]",
    relevance: 0
  };
  const APOS_STRING_MODE = {
    scope: "string",
    begin: "'",
    end: "'",
    illegal: "\\n",
    contains: [BACKSLASH_ESCAPE]
  };
  const QUOTE_STRING_MODE = {
    scope: "string",
    begin: '"',
    end: '"',
    illegal: "\\n",
    contains: [BACKSLASH_ESCAPE]
  };
  const PHRASAL_WORDS_MODE = {
    begin: /\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/
  };
  const COMMENT = function(begin, end, modeOptions = {}) {
    const mode = inherit$1(
      {
        scope: "comment",
        begin,
        end,
        contains: []
      },
      modeOptions
    );
    mode.contains.push({
      scope: "doctag",
      // hack to avoid the space from being included. the space is necessary to
      // match here to prevent the plain text rule below from gobbling up doctags
      begin: "[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",
      end: /(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,
      excludeBegin: true,
      relevance: 0
    });
    const ENGLISH_WORD = either(
      // list of common 1 and 2 letter words in English
      "I",
      "a",
      "is",
      "so",
      "us",
      "to",
      "at",
      "if",
      "in",
      "it",
      "on",
      // note: this is not an exhaustive list of contractions, just popular ones
      /[A-Za-z]+['](d|ve|re|ll|t|s|n)/,
      // contractions - can't we'd they're let's, etc
      /[A-Za-z]+[-][a-z]+/,
      // `no-way`, etc.
      /[A-Za-z][a-z]{2,}/
      // allow capitalized words at beginning of sentences
    );
    mode.contains.push(
      {
        // TODO: how to include ", (, ) without breaking grammars that use these for
        // comment delimiters?
        // begin: /[ ]+([()"]?([A-Za-z'-]{3,}|is|a|I|so|us|[tT][oO]|at|if|in|it|on)[.]?[()":]?([.][ ]|[ ]|\))){3}/
        // ---
        // this tries to find sequences of 3 english words in a row (without any
        // "programming" type syntax) this gives us a strong signal that we've
        // TRULY found a comment - vs perhaps scanning with the wrong language.
        // It's possible to find something that LOOKS like the start of the
        // comment - but then if there is no readable text - good chance it is a
        // false match and not a comment.
        //
        // for a visual example please see:
        // https://github.com/highlightjs/highlight.js/issues/2827
        begin: concat(
          /[ ]+/,
          // necessary to prevent us gobbling up doctags like /* @author Bob Mcgill */
          "(",
          ENGLISH_WORD,
          /[.]?[:]?([.][ ]|[ ])/,
          "){3}"
        )
        // look for 3 words in a row
      }
    );
    return mode;
  };
  const C_LINE_COMMENT_MODE = COMMENT("//", "$");
  const C_BLOCK_COMMENT_MODE = COMMENT("/\\*", "\\*/");
  const HASH_COMMENT_MODE = COMMENT("#", "$");
  const NUMBER_MODE = {
    scope: "number",
    begin: NUMBER_RE,
    relevance: 0
  };
  const C_NUMBER_MODE = {
    scope: "number",
    begin: C_NUMBER_RE,
    relevance: 0
  };
  const BINARY_NUMBER_MODE = {
    scope: "number",
    begin: BINARY_NUMBER_RE,
    relevance: 0
  };
  const REGEXP_MODE = {
    scope: "regexp",
    begin: /\/(?=[^/\n]*\/)/,
    end: /\/[gimuy]*/,
    contains: [
      BACKSLASH_ESCAPE,
      {
        begin: /\[/,
        end: /\]/,
        relevance: 0,
        contains: [BACKSLASH_ESCAPE]
      }
    ]
  };
  const TITLE_MODE = {
    scope: "title",
    begin: IDENT_RE,
    relevance: 0
  };
  const UNDERSCORE_TITLE_MODE = {
    scope: "title",
    begin: UNDERSCORE_IDENT_RE,
    relevance: 0
  };
  const METHOD_GUARD = {
    // excludes method names from keyword processing
    begin: "\\.\\s*" + UNDERSCORE_IDENT_RE,
    relevance: 0
  };
  const END_SAME_AS_BEGIN = function(mode) {
    return Object.assign(
      mode,
      {
        /** @type {ModeCallback} */
        "on:begin": (m2, resp) => {
          resp.data._beginMatch = m2[1];
        },
        /** @type {ModeCallback} */
        "on:end": (m2, resp) => {
          if (resp.data._beginMatch !== m2[1]) resp.ignoreMatch();
        }
      }
    );
  };
  var MODES = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    APOS_STRING_MODE,
    BACKSLASH_ESCAPE,
    BINARY_NUMBER_MODE,
    BINARY_NUMBER_RE,
    COMMENT,
    C_BLOCK_COMMENT_MODE,
    C_LINE_COMMENT_MODE,
    C_NUMBER_MODE,
    C_NUMBER_RE,
    END_SAME_AS_BEGIN,
    HASH_COMMENT_MODE,
    IDENT_RE,
    MATCH_NOTHING_RE,
    METHOD_GUARD,
    NUMBER_MODE,
    NUMBER_RE,
    PHRASAL_WORDS_MODE,
    QUOTE_STRING_MODE,
    REGEXP_MODE,
    RE_STARTERS_RE,
    SHEBANG,
    TITLE_MODE,
    UNDERSCORE_IDENT_RE,
    UNDERSCORE_TITLE_MODE
  });
  function skipIfHasPrecedingDot(match, response) {
    const before = match.input[match.index - 1];
    if (before === ".") {
      response.ignoreMatch();
    }
  }
  function scopeClassName(mode, _parent) {
    if (mode.className !== void 0) {
      mode.scope = mode.className;
      delete mode.className;
    }
  }
  function beginKeywords(mode, parent) {
    if (!parent) return;
    if (!mode.beginKeywords) return;
    mode.begin = "\\b(" + mode.beginKeywords.split(" ").join("|") + ")(?!\\.)(?=\\b|\\s)";
    mode.__beforeBegin = skipIfHasPrecedingDot;
    mode.keywords = mode.keywords || mode.beginKeywords;
    delete mode.beginKeywords;
    if (mode.relevance === void 0) mode.relevance = 0;
  }
  function compileIllegal(mode, _parent) {
    if (!Array.isArray(mode.illegal)) return;
    mode.illegal = either(...mode.illegal);
  }
  function compileMatch(mode, _parent) {
    if (!mode.match) return;
    if (mode.begin || mode.end) throw new Error("begin & end are not supported with match");
    mode.begin = mode.match;
    delete mode.match;
  }
  function compileRelevance(mode, _parent) {
    if (mode.relevance === void 0) mode.relevance = 1;
  }
  const beforeMatchExt = (mode, parent) => {
    if (!mode.beforeMatch) return;
    if (mode.starts) throw new Error("beforeMatch cannot be used with starts");
    const originalMode = Object.assign({}, mode);
    Object.keys(mode).forEach((key) => {
      delete mode[key];
    });
    mode.keywords = originalMode.keywords;
    mode.begin = concat(originalMode.beforeMatch, lookahead(originalMode.begin));
    mode.starts = {
      relevance: 0,
      contains: [
        Object.assign(originalMode, { endsParent: true })
      ]
    };
    mode.relevance = 0;
    delete originalMode.beforeMatch;
  };
  const COMMON_KEYWORDS = [
    "of",
    "and",
    "for",
    "in",
    "not",
    "or",
    "if",
    "then",
    "parent",
    // common variable name
    "list",
    // common variable name
    "value"
    // common variable name
  ];
  const DEFAULT_KEYWORD_SCOPE = "keyword";
  function compileKeywords(rawKeywords, caseInsensitive, scopeName = DEFAULT_KEYWORD_SCOPE) {
    const compiledKeywords = /* @__PURE__ */ Object.create(null);
    if (typeof rawKeywords === "string") {
      compileList(scopeName, rawKeywords.split(" "));
    } else if (Array.isArray(rawKeywords)) {
      compileList(scopeName, rawKeywords);
    } else {
      Object.keys(rawKeywords).forEach(function(scopeName2) {
        Object.assign(
          compiledKeywords,
          compileKeywords(rawKeywords[scopeName2], caseInsensitive, scopeName2)
        );
      });
    }
    return compiledKeywords;
    function compileList(scopeName2, keywordList) {
      if (caseInsensitive) {
        keywordList = keywordList.map((x2) => x2.toLowerCase());
      }
      keywordList.forEach(function(keyword) {
        const pair = keyword.split("|");
        compiledKeywords[pair[0]] = [scopeName2, scoreForKeyword(pair[0], pair[1])];
      });
    }
  }
  function scoreForKeyword(keyword, providedScore) {
    if (providedScore) {
      return Number(providedScore);
    }
    return commonKeyword(keyword) ? 0 : 1;
  }
  function commonKeyword(keyword) {
    return COMMON_KEYWORDS.includes(keyword.toLowerCase());
  }
  const seenDeprecations = {};
  const error = (message) => {
    console.error(message);
  };
  const warn = (message, ...args) => {
    console.log(`WARN: ${message}`, ...args);
  };
  const deprecated = (version2, message) => {
    if (seenDeprecations[`${version2}/${message}`]) return;
    console.log(`Deprecated as of ${version2}. ${message}`);
    seenDeprecations[`${version2}/${message}`] = true;
  };
  const MultiClassError = new Error();
  function remapScopeNames(mode, regexes, { key }) {
    let offset = 0;
    const scopeNames = mode[key];
    const emit = {};
    const positions = {};
    for (let i2 = 1; i2 <= regexes.length; i2++) {
      positions[i2 + offset] = scopeNames[i2];
      emit[i2 + offset] = true;
      offset += countMatchGroups(regexes[i2 - 1]);
    }
    mode[key] = positions;
    mode[key]._emit = emit;
    mode[key]._multi = true;
  }
  function beginMultiClass(mode) {
    if (!Array.isArray(mode.begin)) return;
    if (mode.skip || mode.excludeBegin || mode.returnBegin) {
      error("skip, excludeBegin, returnBegin not compatible with beginScope: {}");
      throw MultiClassError;
    }
    if (typeof mode.beginScope !== "object" || mode.beginScope === null) {
      error("beginScope must be object");
      throw MultiClassError;
    }
    remapScopeNames(mode, mode.begin, { key: "beginScope" });
    mode.begin = _rewriteBackreferences(mode.begin, { joinWith: "" });
  }
  function endMultiClass(mode) {
    if (!Array.isArray(mode.end)) return;
    if (mode.skip || mode.excludeEnd || mode.returnEnd) {
      error("skip, excludeEnd, returnEnd not compatible with endScope: {}");
      throw MultiClassError;
    }
    if (typeof mode.endScope !== "object" || mode.endScope === null) {
      error("endScope must be object");
      throw MultiClassError;
    }
    remapScopeNames(mode, mode.end, { key: "endScope" });
    mode.end = _rewriteBackreferences(mode.end, { joinWith: "" });
  }
  function scopeSugar(mode) {
    if (mode.scope && typeof mode.scope === "object" && mode.scope !== null) {
      mode.beginScope = mode.scope;
      delete mode.scope;
    }
  }
  function MultiClass(mode) {
    scopeSugar(mode);
    if (typeof mode.beginScope === "string") {
      mode.beginScope = { _wrap: mode.beginScope };
    }
    if (typeof mode.endScope === "string") {
      mode.endScope = { _wrap: mode.endScope };
    }
    beginMultiClass(mode);
    endMultiClass(mode);
  }
  function compileLanguage(language) {
    function langRe(value, global) {
      return new RegExp(
        source(value),
        "m" + (language.case_insensitive ? "i" : "") + (language.unicodeRegex ? "u" : "") + (global ? "g" : "")
      );
    }
    class MultiRegex {
      constructor() {
        this.matchIndexes = {};
        this.regexes = [];
        this.matchAt = 1;
        this.position = 0;
      }
      // @ts-ignore
      addRule(re, opts) {
        opts.position = this.position++;
        this.matchIndexes[this.matchAt] = opts;
        this.regexes.push([opts, re]);
        this.matchAt += countMatchGroups(re) + 1;
      }
      compile() {
        if (this.regexes.length === 0) {
          this.exec = () => null;
        }
        const terminators = this.regexes.map((el) => el[1]);
        this.matcherRe = langRe(_rewriteBackreferences(terminators, { joinWith: "|" }), true);
        this.lastIndex = 0;
      }
      /** @param {string} s */
      exec(s2) {
        this.matcherRe.lastIndex = this.lastIndex;
        const match = this.matcherRe.exec(s2);
        if (!match) {
          return null;
        }
        const i2 = match.findIndex((el, i3) => i3 > 0 && el !== void 0);
        const matchData = this.matchIndexes[i2];
        match.splice(0, i2);
        return Object.assign(match, matchData);
      }
    }
    class ResumableMultiRegex {
      constructor() {
        this.rules = [];
        this.multiRegexes = [];
        this.count = 0;
        this.lastIndex = 0;
        this.regexIndex = 0;
      }
      // @ts-ignore
      getMatcher(index) {
        if (this.multiRegexes[index]) return this.multiRegexes[index];
        const matcher = new MultiRegex();
        this.rules.slice(index).forEach(([re, opts]) => matcher.addRule(re, opts));
        matcher.compile();
        this.multiRegexes[index] = matcher;
        return matcher;
      }
      resumingScanAtSamePosition() {
        return this.regexIndex !== 0;
      }
      considerAll() {
        this.regexIndex = 0;
      }
      // @ts-ignore
      addRule(re, opts) {
        this.rules.push([re, opts]);
        if (opts.type === "begin") this.count++;
      }
      /** @param {string} s */
      exec(s2) {
        const m2 = this.getMatcher(this.regexIndex);
        m2.lastIndex = this.lastIndex;
        let result = m2.exec(s2);
        if (this.resumingScanAtSamePosition()) {
          if (result && result.index === this.lastIndex) ;
          else {
            const m22 = this.getMatcher(0);
            m22.lastIndex = this.lastIndex + 1;
            result = m22.exec(s2);
          }
        }
        if (result) {
          this.regexIndex += result.position + 1;
          if (this.regexIndex === this.count) {
            this.considerAll();
          }
        }
        return result;
      }
    }
    function buildModeRegex(mode) {
      const mm = new ResumableMultiRegex();
      mode.contains.forEach((term) => mm.addRule(term.begin, { rule: term, type: "begin" }));
      if (mode.terminatorEnd) {
        mm.addRule(mode.terminatorEnd, { type: "end" });
      }
      if (mode.illegal) {
        mm.addRule(mode.illegal, { type: "illegal" });
      }
      return mm;
    }
    function compileMode(mode, parent) {
      const cmode = (
        /** @type CompiledMode */
        mode
      );
      if (mode.isCompiled) return cmode;
      [
        scopeClassName,
        // do this early so compiler extensions generally don't have to worry about
        // the distinction between match/begin
        compileMatch,
        MultiClass,
        beforeMatchExt
      ].forEach((ext) => ext(mode, parent));
      language.compilerExtensions.forEach((ext) => ext(mode, parent));
      mode.__beforeBegin = null;
      [
        beginKeywords,
        // do this later so compiler extensions that come earlier have access to the
        // raw array if they wanted to perhaps manipulate it, etc.
        compileIllegal,
        // default to 1 relevance if not specified
        compileRelevance
      ].forEach((ext) => ext(mode, parent));
      mode.isCompiled = true;
      let keywordPattern = null;
      if (typeof mode.keywords === "object" && mode.keywords.$pattern) {
        mode.keywords = Object.assign({}, mode.keywords);
        keywordPattern = mode.keywords.$pattern;
        delete mode.keywords.$pattern;
      }
      keywordPattern = keywordPattern || /\w+/;
      if (mode.keywords) {
        mode.keywords = compileKeywords(mode.keywords, language.case_insensitive);
      }
      cmode.keywordPatternRe = langRe(keywordPattern, true);
      if (parent) {
        if (!mode.begin) mode.begin = /\B|\b/;
        cmode.beginRe = langRe(cmode.begin);
        if (!mode.end && !mode.endsWithParent) mode.end = /\B|\b/;
        if (mode.end) cmode.endRe = langRe(cmode.end);
        cmode.terminatorEnd = source(cmode.end) || "";
        if (mode.endsWithParent && parent.terminatorEnd) {
          cmode.terminatorEnd += (mode.end ? "|" : "") + parent.terminatorEnd;
        }
      }
      if (mode.illegal) cmode.illegalRe = langRe(
        /** @type {RegExp | string} */
        mode.illegal
      );
      if (!mode.contains) mode.contains = [];
      mode.contains = [].concat(...mode.contains.map(function(c2) {
        return expandOrCloneMode(c2 === "self" ? mode : c2);
      }));
      mode.contains.forEach(function(c2) {
        compileMode(
          /** @type Mode */
          c2,
          cmode
        );
      });
      if (mode.starts) {
        compileMode(mode.starts, parent);
      }
      cmode.matcher = buildModeRegex(cmode);
      return cmode;
    }
    if (!language.compilerExtensions) language.compilerExtensions = [];
    if (language.contains && language.contains.includes("self")) {
      throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");
    }
    language.classNameAliases = inherit$1(language.classNameAliases || {});
    return compileMode(
      /** @type Mode */
      language
    );
  }
  function dependencyOnParent(mode) {
    if (!mode) return false;
    return mode.endsWithParent || dependencyOnParent(mode.starts);
  }
  function expandOrCloneMode(mode) {
    if (mode.variants && !mode.cachedVariants) {
      mode.cachedVariants = mode.variants.map(function(variant) {
        return inherit$1(mode, { variants: null }, variant);
      });
    }
    if (mode.cachedVariants) {
      return mode.cachedVariants;
    }
    if (dependencyOnParent(mode)) {
      return inherit$1(mode, { starts: mode.starts ? inherit$1(mode.starts) : null });
    }
    if (Object.isFrozen(mode)) {
      return inherit$1(mode);
    }
    return mode;
  }
  var version = "11.11.1";
  class HTMLInjectionError extends Error {
    constructor(reason, html) {
      super(reason);
      this.name = "HTMLInjectionError";
      this.html = html;
    }
  }
  const escape = escapeHTML;
  const inherit = inherit$1;
  const NO_MATCH = Symbol("nomatch");
  const MAX_KEYWORD_HITS = 7;
  const HLJS = function(hljs) {
    const languages = /* @__PURE__ */ Object.create(null);
    const aliases = /* @__PURE__ */ Object.create(null);
    const plugins = [];
    let SAFE_MODE = true;
    const LANGUAGE_NOT_FOUND = "Could not find the language '{}', did you forget to load/include a language module?";
    const PLAINTEXT_LANGUAGE = { disableAutodetect: true, name: "Plain text", contains: [] };
    let options = {
      ignoreUnescapedHTML: false,
      throwUnescapedHTML: false,
      noHighlightRe: /^(no-?highlight)$/i,
      languageDetectRe: /\blang(?:uage)?-([\w-]+)\b/i,
      classPrefix: "hljs-",
      cssSelector: "pre code",
      languages: null,
      // beta configuration options, subject to change, welcome to discuss
      // https://github.com/highlightjs/highlight.js/issues/1086
      __emitter: TokenTreeEmitter
    };
    function shouldNotHighlight(languageName) {
      return options.noHighlightRe.test(languageName);
    }
    function blockLanguage(block) {
      let classes2 = block.className + " ";
      classes2 += block.parentNode ? block.parentNode.className : "";
      const match = options.languageDetectRe.exec(classes2);
      if (match) {
        const language = getLanguage(match[1]);
        if (!language) {
          warn(LANGUAGE_NOT_FOUND.replace("{}", match[1]));
          warn("Falling back to no-highlight mode for this block.", block);
        }
        return language ? match[1] : "no-highlight";
      }
      return classes2.split(/\s+/).find((_class) => shouldNotHighlight(_class) || getLanguage(_class));
    }
    function highlight2(codeOrLanguageName, optionsOrCode, ignoreIllegals) {
      let code = "";
      let languageName = "";
      if (typeof optionsOrCode === "object") {
        code = codeOrLanguageName;
        ignoreIllegals = optionsOrCode.ignoreIllegals;
        languageName = optionsOrCode.language;
      } else {
        deprecated("10.7.0", "highlight(lang, code, ...args) has been deprecated.");
        deprecated("10.7.0", "Please use highlight(code, options) instead.\nhttps://github.com/highlightjs/highlight.js/issues/2277");
        languageName = codeOrLanguageName;
        code = optionsOrCode;
      }
      if (ignoreIllegals === void 0) {
        ignoreIllegals = true;
      }
      const context = {
        code,
        language: languageName
      };
      fire("before:highlight", context);
      const result = context.result ? context.result : _highlight(context.language, context.code, ignoreIllegals);
      result.code = context.code;
      fire("after:highlight", result);
      return result;
    }
    function _highlight(languageName, codeToHighlight, ignoreIllegals, continuation) {
      const keywordHits = /* @__PURE__ */ Object.create(null);
      function keywordData(mode, matchText) {
        return mode.keywords[matchText];
      }
      function processKeywords() {
        if (!top.keywords) {
          emitter.addText(modeBuffer);
          return;
        }
        let lastIndex = 0;
        top.keywordPatternRe.lastIndex = 0;
        let match = top.keywordPatternRe.exec(modeBuffer);
        let buf = "";
        while (match) {
          buf += modeBuffer.substring(lastIndex, match.index);
          const word = language.case_insensitive ? match[0].toLowerCase() : match[0];
          const data = keywordData(top, word);
          if (data) {
            const [kind, keywordRelevance] = data;
            emitter.addText(buf);
            buf = "";
            keywordHits[word] = (keywordHits[word] || 0) + 1;
            if (keywordHits[word] <= MAX_KEYWORD_HITS) relevance += keywordRelevance;
            if (kind.startsWith("_")) {
              buf += match[0];
            } else {
              const cssClass = language.classNameAliases[kind] || kind;
              emitKeyword(match[0], cssClass);
            }
          } else {
            buf += match[0];
          }
          lastIndex = top.keywordPatternRe.lastIndex;
          match = top.keywordPatternRe.exec(modeBuffer);
        }
        buf += modeBuffer.substring(lastIndex);
        emitter.addText(buf);
      }
      function processSubLanguage() {
        if (modeBuffer === "") return;
        let result2 = null;
        if (typeof top.subLanguage === "string") {
          if (!languages[top.subLanguage]) {
            emitter.addText(modeBuffer);
            return;
          }
          result2 = _highlight(top.subLanguage, modeBuffer, true, continuations[top.subLanguage]);
          continuations[top.subLanguage] = /** @type {CompiledMode} */
          result2._top;
        } else {
          result2 = highlightAuto(modeBuffer, top.subLanguage.length ? top.subLanguage : null);
        }
        if (top.relevance > 0) {
          relevance += result2.relevance;
        }
        emitter.__addSublanguage(result2._emitter, result2.language);
      }
      function processBuffer() {
        if (top.subLanguage != null) {
          processSubLanguage();
        } else {
          processKeywords();
        }
        modeBuffer = "";
      }
      function emitKeyword(keyword, scope) {
        if (keyword === "") return;
        emitter.startScope(scope);
        emitter.addText(keyword);
        emitter.endScope();
      }
      function emitMultiClass(scope, match) {
        let i2 = 1;
        const max = match.length - 1;
        while (i2 <= max) {
          if (!scope._emit[i2]) {
            i2++;
            continue;
          }
          const klass = language.classNameAliases[scope[i2]] || scope[i2];
          const text = match[i2];
          if (klass) {
            emitKeyword(text, klass);
          } else {
            modeBuffer = text;
            processKeywords();
            modeBuffer = "";
          }
          i2++;
        }
      }
      function startNewMode(mode, match) {
        if (mode.scope && typeof mode.scope === "string") {
          emitter.openNode(language.classNameAliases[mode.scope] || mode.scope);
        }
        if (mode.beginScope) {
          if (mode.beginScope._wrap) {
            emitKeyword(modeBuffer, language.classNameAliases[mode.beginScope._wrap] || mode.beginScope._wrap);
            modeBuffer = "";
          } else if (mode.beginScope._multi) {
            emitMultiClass(mode.beginScope, match);
            modeBuffer = "";
          }
        }
        top = Object.create(mode, { parent: { value: top } });
        return top;
      }
      function endOfMode(mode, match, matchPlusRemainder) {
        let matched = startsWith(mode.endRe, matchPlusRemainder);
        if (matched) {
          if (mode["on:end"]) {
            const resp = new Response(mode);
            mode["on:end"](match, resp);
            if (resp.isMatchIgnored) matched = false;
          }
          if (matched) {
            while (mode.endsParent && mode.parent) {
              mode = mode.parent;
            }
            return mode;
          }
        }
        if (mode.endsWithParent) {
          return endOfMode(mode.parent, match, matchPlusRemainder);
        }
      }
      function doIgnore(lexeme) {
        if (top.matcher.regexIndex === 0) {
          modeBuffer += lexeme[0];
          return 1;
        } else {
          resumeScanAtSamePosition = true;
          return 0;
        }
      }
      function doBeginMatch(match) {
        const lexeme = match[0];
        const newMode = match.rule;
        const resp = new Response(newMode);
        const beforeCallbacks = [newMode.__beforeBegin, newMode["on:begin"]];
        for (const cb of beforeCallbacks) {
          if (!cb) continue;
          cb(match, resp);
          if (resp.isMatchIgnored) return doIgnore(lexeme);
        }
        if (newMode.skip) {
          modeBuffer += lexeme;
        } else {
          if (newMode.excludeBegin) {
            modeBuffer += lexeme;
          }
          processBuffer();
          if (!newMode.returnBegin && !newMode.excludeBegin) {
            modeBuffer = lexeme;
          }
        }
        startNewMode(newMode, match);
        return newMode.returnBegin ? 0 : lexeme.length;
      }
      function doEndMatch(match) {
        const lexeme = match[0];
        const matchPlusRemainder = codeToHighlight.substring(match.index);
        const endMode = endOfMode(top, match, matchPlusRemainder);
        if (!endMode) {
          return NO_MATCH;
        }
        const origin = top;
        if (top.endScope && top.endScope._wrap) {
          processBuffer();
          emitKeyword(lexeme, top.endScope._wrap);
        } else if (top.endScope && top.endScope._multi) {
          processBuffer();
          emitMultiClass(top.endScope, match);
        } else if (origin.skip) {
          modeBuffer += lexeme;
        } else {
          if (!(origin.returnEnd || origin.excludeEnd)) {
            modeBuffer += lexeme;
          }
          processBuffer();
          if (origin.excludeEnd) {
            modeBuffer = lexeme;
          }
        }
        do {
          if (top.scope) {
            emitter.closeNode();
          }
          if (!top.skip && !top.subLanguage) {
            relevance += top.relevance;
          }
          top = top.parent;
        } while (top !== endMode.parent);
        if (endMode.starts) {
          startNewMode(endMode.starts, match);
        }
        return origin.returnEnd ? 0 : lexeme.length;
      }
      function processContinuations() {
        const list = [];
        for (let current = top; current !== language; current = current.parent) {
          if (current.scope) {
            list.unshift(current.scope);
          }
        }
        list.forEach((item) => emitter.openNode(item));
      }
      let lastMatch = {};
      function processLexeme(textBeforeMatch, match) {
        const lexeme = match && match[0];
        modeBuffer += textBeforeMatch;
        if (lexeme == null) {
          processBuffer();
          return 0;
        }
        if (lastMatch.type === "begin" && match.type === "end" && lastMatch.index === match.index && lexeme === "") {
          modeBuffer += codeToHighlight.slice(match.index, match.index + 1);
          if (!SAFE_MODE) {
            const err = new Error(`0 width match regex (${languageName})`);
            err.languageName = languageName;
            err.badRule = lastMatch.rule;
            throw err;
          }
          return 1;
        }
        lastMatch = match;
        if (match.type === "begin") {
          return doBeginMatch(match);
        } else if (match.type === "illegal" && !ignoreIllegals) {
          const err = new Error('Illegal lexeme "' + lexeme + '" for mode "' + (top.scope || "<unnamed>") + '"');
          err.mode = top;
          throw err;
        } else if (match.type === "end") {
          const processed = doEndMatch(match);
          if (processed !== NO_MATCH) {
            return processed;
          }
        }
        if (match.type === "illegal" && lexeme === "") {
          modeBuffer += "\n";
          return 1;
        }
        if (iterations > 1e5 && iterations > match.index * 3) {
          const err = new Error("potential infinite loop, way more iterations than matches");
          throw err;
        }
        modeBuffer += lexeme;
        return lexeme.length;
      }
      const language = getLanguage(languageName);
      if (!language) {
        error(LANGUAGE_NOT_FOUND.replace("{}", languageName));
        throw new Error('Unknown language: "' + languageName + '"');
      }
      const md = compileLanguage(language);
      let result = "";
      let top = continuation || md;
      const continuations = {};
      const emitter = new options.__emitter(options);
      processContinuations();
      let modeBuffer = "";
      let relevance = 0;
      let index = 0;
      let iterations = 0;
      let resumeScanAtSamePosition = false;
      try {
        if (!language.__emitTokens) {
          top.matcher.considerAll();
          for (; ; ) {
            iterations++;
            if (resumeScanAtSamePosition) {
              resumeScanAtSamePosition = false;
            } else {
              top.matcher.considerAll();
            }
            top.matcher.lastIndex = index;
            const match = top.matcher.exec(codeToHighlight);
            if (!match) break;
            const beforeMatch = codeToHighlight.substring(index, match.index);
            const processedCount = processLexeme(beforeMatch, match);
            index = match.index + processedCount;
          }
          processLexeme(codeToHighlight.substring(index));
        } else {
          language.__emitTokens(codeToHighlight, emitter);
        }
        emitter.finalize();
        result = emitter.toHTML();
        return {
          language: languageName,
          value: result,
          relevance,
          illegal: false,
          _emitter: emitter,
          _top: top
        };
      } catch (err) {
        if (err.message && err.message.includes("Illegal")) {
          return {
            language: languageName,
            value: escape(codeToHighlight),
            illegal: true,
            relevance: 0,
            _illegalBy: {
              message: err.message,
              index,
              context: codeToHighlight.slice(index - 100, index + 100),
              mode: err.mode,
              resultSoFar: result
            },
            _emitter: emitter
          };
        } else if (SAFE_MODE) {
          return {
            language: languageName,
            value: escape(codeToHighlight),
            illegal: false,
            relevance: 0,
            errorRaised: err,
            _emitter: emitter,
            _top: top
          };
        } else {
          throw err;
        }
      }
    }
    function justTextHighlightResult(code) {
      const result = {
        value: escape(code),
        illegal: false,
        relevance: 0,
        _top: PLAINTEXT_LANGUAGE,
        _emitter: new options.__emitter(options)
      };
      result._emitter.addText(code);
      return result;
    }
    function highlightAuto(code, languageSubset) {
      languageSubset = languageSubset || options.languages || Object.keys(languages);
      const plaintext = justTextHighlightResult(code);
      const results = languageSubset.filter(getLanguage).filter(autoDetection).map(
        (name) => _highlight(name, code, false)
      );
      results.unshift(plaintext);
      const sorted = results.sort((a2, b2) => {
        if (a2.relevance !== b2.relevance) return b2.relevance - a2.relevance;
        if (a2.language && b2.language) {
          if (getLanguage(a2.language).supersetOf === b2.language) {
            return 1;
          } else if (getLanguage(b2.language).supersetOf === a2.language) {
            return -1;
          }
        }
        return 0;
      });
      const [best, secondBest] = sorted;
      const result = best;
      result.secondBest = secondBest;
      return result;
    }
    function updateClassName(element, currentLang, resultLang) {
      const language = currentLang && aliases[currentLang] || resultLang;
      element.classList.add("hljs");
      element.classList.add(`language-${language}`);
    }
    function highlightElement(element) {
      let node = null;
      const language = blockLanguage(element);
      if (shouldNotHighlight(language)) return;
      fire(
        "before:highlightElement",
        { el: element, language }
      );
      if (element.dataset.highlighted) {
        console.log("Element previously highlighted. To highlight again, first unset `dataset.highlighted`.", element);
        return;
      }
      if (element.children.length > 0) {
        if (!options.ignoreUnescapedHTML) {
          console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk.");
          console.warn("https://github.com/highlightjs/highlight.js/wiki/security");
          console.warn("The element with unescaped HTML:");
          console.warn(element);
        }
        if (options.throwUnescapedHTML) {
          const err = new HTMLInjectionError(
            "One of your code blocks includes unescaped HTML.",
            element.innerHTML
          );
          throw err;
        }
      }
      node = element;
      const text = node.textContent;
      const result = language ? highlight2(text, { language, ignoreIllegals: true }) : highlightAuto(text);
      element.innerHTML = result.value;
      element.dataset.highlighted = "yes";
      updateClassName(element, language, result.language);
      element.result = {
        language: result.language,
        // TODO: remove with version 11.0
        re: result.relevance,
        relevance: result.relevance
      };
      if (result.secondBest) {
        element.secondBest = {
          language: result.secondBest.language,
          relevance: result.secondBest.relevance
        };
      }
      fire("after:highlightElement", { el: element, result, text });
    }
    function configure(userOptions) {
      options = inherit(options, userOptions);
    }
    const initHighlighting = () => {
      highlightAll();
      deprecated("10.6.0", "initHighlighting() deprecated.  Use highlightAll() now.");
    };
    function initHighlightingOnLoad() {
      highlightAll();
      deprecated("10.6.0", "initHighlightingOnLoad() deprecated.  Use highlightAll() now.");
    }
    let wantsHighlight = false;
    function highlightAll() {
      function boot() {
        highlightAll();
      }
      if (document.readyState === "loading") {
        if (!wantsHighlight) {
          window.addEventListener("DOMContentLoaded", boot, false);
        }
        wantsHighlight = true;
        return;
      }
      const blocks = document.querySelectorAll(options.cssSelector);
      blocks.forEach(highlightElement);
    }
    function registerLanguage(languageName, languageDefinition) {
      let lang = null;
      try {
        lang = languageDefinition(hljs);
      } catch (error$1) {
        error("Language definition for '{}' could not be registered.".replace("{}", languageName));
        if (!SAFE_MODE) {
          throw error$1;
        } else {
          error(error$1);
        }
        lang = PLAINTEXT_LANGUAGE;
      }
      if (!lang.name) lang.name = languageName;
      languages[languageName] = lang;
      lang.rawDefinition = languageDefinition.bind(null, hljs);
      if (lang.aliases) {
        registerAliases(lang.aliases, { languageName });
      }
    }
    function unregisterLanguage(languageName) {
      delete languages[languageName];
      for (const alias of Object.keys(aliases)) {
        if (aliases[alias] === languageName) {
          delete aliases[alias];
        }
      }
    }
    function listLanguages() {
      return Object.keys(languages);
    }
    function getLanguage(name) {
      name = (name || "").toLowerCase();
      return languages[name] || languages[aliases[name]];
    }
    function registerAliases(aliasList, { languageName }) {
      if (typeof aliasList === "string") {
        aliasList = [aliasList];
      }
      aliasList.forEach((alias) => {
        aliases[alias.toLowerCase()] = languageName;
      });
    }
    function autoDetection(name) {
      const lang = getLanguage(name);
      return lang && !lang.disableAutodetect;
    }
    function upgradePluginAPI(plugin) {
      if (plugin["before:highlightBlock"] && !plugin["before:highlightElement"]) {
        plugin["before:highlightElement"] = (data) => {
          plugin["before:highlightBlock"](
            Object.assign({ block: data.el }, data)
          );
        };
      }
      if (plugin["after:highlightBlock"] && !plugin["after:highlightElement"]) {
        plugin["after:highlightElement"] = (data) => {
          plugin["after:highlightBlock"](
            Object.assign({ block: data.el }, data)
          );
        };
      }
    }
    function addPlugin(plugin) {
      upgradePluginAPI(plugin);
      plugins.push(plugin);
    }
    function removePlugin(plugin) {
      const index = plugins.indexOf(plugin);
      if (index !== -1) {
        plugins.splice(index, 1);
      }
    }
    function fire(event, args) {
      const cb = event;
      plugins.forEach(function(plugin) {
        if (plugin[cb]) {
          plugin[cb](args);
        }
      });
    }
    function deprecateHighlightBlock(el) {
      deprecated("10.7.0", "highlightBlock will be removed entirely in v12.0");
      deprecated("10.7.0", "Please use highlightElement now.");
      return highlightElement(el);
    }
    Object.assign(hljs, {
      highlight: highlight2,
      highlightAuto,
      highlightAll,
      highlightElement,
      // TODO: Remove with v12 API
      highlightBlock: deprecateHighlightBlock,
      configure,
      initHighlighting,
      initHighlightingOnLoad,
      registerLanguage,
      unregisterLanguage,
      listLanguages,
      getLanguage,
      registerAliases,
      autoDetection,
      inherit,
      addPlugin,
      removePlugin
    });
    hljs.debugMode = function() {
      SAFE_MODE = false;
    };
    hljs.safeMode = function() {
      SAFE_MODE = true;
    };
    hljs.versionString = version;
    hljs.regex = {
      concat,
      lookahead,
      either,
      optional,
      anyNumberOfTimes
    };
    for (const key in MODES) {
      if (typeof MODES[key] === "object") {
        deepFreeze(MODES[key]);
      }
    }
    Object.assign(hljs, MODES);
    return hljs;
  };
  const highlight = HLJS({});
  highlight.newInstance = () => HLJS({});
  core = highlight;
  highlight.HighlightJS = highlight;
  highlight.default = highlight;
  return core;
}
var coreExports = /* @__PURE__ */ requireCore();
const HighlightJS = /* @__PURE__ */ getDefaultExportFromCjs(coreExports);
function yaml(hljs) {
  const LITERALS = "true false yes no null";
  const URI_CHARACTERS = "[\\w#;/?:@&=+$,.~*'()[\\]]+";
  const KEY = {
    className: "attr",
    variants: [
      // added brackets support and special char support
      { begin: /[\w*@][\w*@ :()\./-]*:(?=[ \t]|$)/ },
      {
        // double quoted keys - with brackets and special char support
        begin: /"[\w*@][\w*@ :()\./-]*":(?=[ \t]|$)/
      },
      {
        // single quoted keys - with brackets and special char support
        begin: /'[\w*@][\w*@ :()\./-]*':(?=[ \t]|$)/
      }
    ]
  };
  const TEMPLATE_VARIABLES = {
    className: "template-variable",
    variants: [
      {
        // jinja templates Ansible
        begin: /\{\{/,
        end: /\}\}/
      },
      {
        // Ruby i18n
        begin: /%\{/,
        end: /\}/
      }
    ]
  };
  const SINGLE_QUOTE_STRING = {
    className: "string",
    relevance: 0,
    begin: /'/,
    end: /'/,
    contains: [
      {
        match: /''/,
        scope: "char.escape",
        relevance: 0
      }
    ]
  };
  const STRING = {
    className: "string",
    relevance: 0,
    variants: [
      {
        begin: /"/,
        end: /"/
      },
      { begin: /\S+/ }
    ],
    contains: [
      hljs.BACKSLASH_ESCAPE,
      TEMPLATE_VARIABLES
    ]
  };
  const CONTAINER_STRING = hljs.inherit(STRING, { variants: [
    {
      begin: /'/,
      end: /'/,
      contains: [
        {
          begin: /''/,
          relevance: 0
        }
      ]
    },
    {
      begin: /"/,
      end: /"/
    },
    { begin: /[^\s,{}[\]]+/ }
  ] });
  const DATE_RE = "[0-9]{4}(-[0-9][0-9]){0,2}";
  const TIME_RE = "([Tt \\t][0-9][0-9]?(:[0-9][0-9]){2})?";
  const FRACTION_RE = "(\\.[0-9]*)?";
  const ZONE_RE = "([ \\t])*(Z|[-+][0-9][0-9]?(:[0-9][0-9])?)?";
  const TIMESTAMP = {
    className: "number",
    begin: "\\b" + DATE_RE + TIME_RE + FRACTION_RE + ZONE_RE + "\\b"
  };
  const VALUE_CONTAINER = {
    end: ",",
    endsWithParent: true,
    excludeEnd: true,
    keywords: LITERALS,
    relevance: 0
  };
  const OBJECT = {
    begin: /\{/,
    end: /\}/,
    contains: [VALUE_CONTAINER],
    illegal: "\\n",
    relevance: 0
  };
  const ARRAY = {
    begin: "\\[",
    end: "\\]",
    contains: [VALUE_CONTAINER],
    illegal: "\\n",
    relevance: 0
  };
  const MODES = [
    KEY,
    {
      className: "meta",
      begin: "^---\\s*$",
      relevance: 10
    },
    {
      // multi line string
      // Blocks start with a | or > followed by a newline
      //
      // Indentation of subsequent lines must be the same to
      // be considered part of the block
      className: "string",
      begin: "[\\|>]([1-9]?[+-])?[ ]*\\n( +)[^ ][^\\n]*\\n(\\2[^\\n]+\\n?)*"
    },
    {
      // Ruby/Rails erb
      begin: "<%[%=-]?",
      end: "[%-]?%>",
      subLanguage: "ruby",
      excludeBegin: true,
      excludeEnd: true,
      relevance: 0
    },
    {
      // named tags
      className: "type",
      begin: "!\\w+!" + URI_CHARACTERS
    },
    // https://yaml.org/spec/1.2/spec.html#id2784064
    {
      // verbatim tags
      className: "type",
      begin: "!<" + URI_CHARACTERS + ">"
    },
    {
      // primary tags
      className: "type",
      begin: "!" + URI_CHARACTERS
    },
    {
      // secondary tags
      className: "type",
      begin: "!!" + URI_CHARACTERS
    },
    {
      // fragment id &ref
      className: "meta",
      begin: "&" + hljs.UNDERSCORE_IDENT_RE + "$"
    },
    {
      // fragment reference *ref
      className: "meta",
      begin: "\\*" + hljs.UNDERSCORE_IDENT_RE + "$"
    },
    {
      // array listing
      className: "bullet",
      // TODO: remove |$ hack when we have proper look-ahead support
      begin: "-(?=[ ]|$)",
      relevance: 0
    },
    hljs.HASH_COMMENT_MODE,
    {
      beginKeywords: LITERALS,
      keywords: { literal: LITERALS }
    },
    TIMESTAMP,
    // numbers are any valid C-style number that
    // sit isolated from other words
    {
      className: "number",
      begin: hljs.C_NUMBER_RE + "\\b",
      relevance: 0
    },
    OBJECT,
    ARRAY,
    SINGLE_QUOTE_STRING,
    STRING
  ];
  const VALUE_MODES = [...MODES];
  VALUE_MODES.pop();
  VALUE_MODES.push(CONTAINER_STRING);
  VALUE_CONTAINER.contains = VALUE_MODES;
  return {
    name: "YAML",
    case_insensitive: true,
    aliases: ["yml"],
    contains: MODES
  };
}
var r$1k = defineComponent({ props: { code: { type: String, required: true }, language: { type: String, default: "" }, autodetect: { type: Boolean, default: true }, ignoreIllegals: { type: Boolean, default: true } }, setup: function(e2) {
  var n2 = ref(e2.language);
  watch(function() {
    return e2.language;
  }, function(e3) {
    n2.value = e3;
  });
  var r2 = computed(function() {
    return e2.autodetect || !n2.value;
  }), o2 = computed(function() {
    return !r2.value && !HighlightJS.getLanguage(n2.value);
  });
  return { className: computed(function() {
    return o2.value ? "" : "hljs " + n2.value;
  }), highlightedCode: computed(function() {
    var l2;
    if (o2.value) return console.warn('The language "' + n2.value + '" you specified could not be found.'), e2.code.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;");
    if (r2.value) {
      var a2 = HighlightJS.highlightAuto(e2.code);
      return n2.value = null !== (l2 = a2.language) && void 0 !== l2 ? l2 : "", a2.value;
    }
    return (a2 = HighlightJS.highlight(e2.code, { language: n2.value, ignoreIllegals: e2.ignoreIllegals })).value;
  }) };
}, render: function() {
  return h$5("pre", {}, [h$5("code", { class: this.className, innerHTML: this.highlightedCode })]);
} }), o$1n = { install: function(e2) {
  e2.component("highlightjs", r$1k);
}, component: r$1k };
var FilterMatchMode = {
  STARTS_WITH: "startsWith",
  CONTAINS: "contains",
  NOT_CONTAINS: "notContains",
  ENDS_WITH: "endsWith",
  EQUALS: "equals",
  NOT_EQUALS: "notEquals",
  LESS_THAN: "lt",
  LESS_THAN_OR_EQUAL_TO: "lte",
  GREATER_THAN: "gt",
  GREATER_THAN_OR_EQUAL_TO: "gte",
  DATE_IS: "dateIs",
  DATE_IS_NOT: "dateIsNot",
  DATE_BEFORE: "dateBefore",
  DATE_AFTER: "dateAfter"
};
function _typeof(o2) {
  "@babel/helpers - typeof";
  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o3) {
    return typeof o3;
  } : function(o3) {
    return o3 && "function" == typeof Symbol && o3.constructor === Symbol && o3 !== Symbol.prototype ? "symbol" : typeof o3;
  }, _typeof(o2);
}
function ownKeys(e2, r2) {
  var t2 = Object.keys(e2);
  if (Object.getOwnPropertySymbols) {
    var o2 = Object.getOwnPropertySymbols(e2);
    r2 && (o2 = o2.filter(function(r3) {
      return Object.getOwnPropertyDescriptor(e2, r3).enumerable;
    })), t2.push.apply(t2, o2);
  }
  return t2;
}
function _objectSpread(e2) {
  for (var r2 = 1; r2 < arguments.length; r2++) {
    var t2 = null != arguments[r2] ? arguments[r2] : {};
    r2 % 2 ? ownKeys(Object(t2), true).forEach(function(r3) {
      _defineProperty(e2, r3, t2[r3]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(t2)) : ownKeys(Object(t2)).forEach(function(r3) {
      Object.defineProperty(e2, r3, Object.getOwnPropertyDescriptor(t2, r3));
    });
  }
  return e2;
}
function _defineProperty(e2, r2, t2) {
  return (r2 = _toPropertyKey(r2)) in e2 ? Object.defineProperty(e2, r2, { value: t2, enumerable: true, configurable: true, writable: true }) : e2[r2] = t2, e2;
}
function _toPropertyKey(t2) {
  var i2 = _toPrimitive(t2, "string");
  return "symbol" == _typeof(i2) ? i2 : i2 + "";
}
function _toPrimitive(t2, r2) {
  if ("object" != _typeof(t2) || !t2) return t2;
  var e2 = t2[Symbol.toPrimitive];
  if (void 0 !== e2) {
    var i2 = e2.call(t2, r2);
    if ("object" != _typeof(i2)) return i2;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r2 ? String : Number)(t2);
}
var defaultOptions = {
  ripple: false,
  inputStyle: null,
  inputVariant: null,
  locale: {
    startsWith: "Starts with",
    contains: "Contains",
    notContains: "Not contains",
    endsWith: "Ends with",
    equals: "Equals",
    notEquals: "Not equals",
    noFilter: "No Filter",
    lt: "Less than",
    lte: "Less than or equal to",
    gt: "Greater than",
    gte: "Greater than or equal to",
    dateIs: "Date is",
    dateIsNot: "Date is not",
    dateBefore: "Date is before",
    dateAfter: "Date is after",
    clear: "Clear",
    apply: "Apply",
    matchAll: "Match All",
    matchAny: "Match Any",
    addRule: "Add Rule",
    removeRule: "Remove Rule",
    accept: "Yes",
    reject: "No",
    choose: "Choose",
    upload: "Upload",
    cancel: "Cancel",
    completed: "Completed",
    pending: "Pending",
    fileSizeTypes: ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"],
    dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
    monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    chooseYear: "Choose Year",
    chooseMonth: "Choose Month",
    chooseDate: "Choose Date",
    prevDecade: "Previous Decade",
    nextDecade: "Next Decade",
    prevYear: "Previous Year",
    nextYear: "Next Year",
    prevMonth: "Previous Month",
    nextMonth: "Next Month",
    prevHour: "Previous Hour",
    nextHour: "Next Hour",
    prevMinute: "Previous Minute",
    nextMinute: "Next Minute",
    prevSecond: "Previous Second",
    nextSecond: "Next Second",
    am: "am",
    pm: "pm",
    today: "Today",
    weekHeader: "Wk",
    firstDayOfWeek: 0,
    showMonthAfterYear: false,
    dateFormat: "mm/dd/yy",
    weak: "Weak",
    medium: "Medium",
    strong: "Strong",
    passwordPrompt: "Enter a password",
    emptyFilterMessage: "No results found",
    searchMessage: "{0} results are available",
    selectionMessage: "{0} items selected",
    emptySelectionMessage: "No selected item",
    emptySearchMessage: "No results found",
    fileChosenMessage: "{0} files",
    noFileChosenMessage: "No file chosen",
    emptyMessage: "No available options",
    aria: {
      trueLabel: "True",
      falseLabel: "False",
      nullLabel: "Not Selected",
      star: "1 star",
      stars: "{star} stars",
      selectAll: "All items selected",
      unselectAll: "All items unselected",
      close: "Close",
      previous: "Previous",
      next: "Next",
      navigation: "Navigation",
      scrollTop: "Scroll Top",
      moveTop: "Move Top",
      moveUp: "Move Up",
      moveDown: "Move Down",
      moveBottom: "Move Bottom",
      moveToTarget: "Move to Target",
      moveToSource: "Move to Source",
      moveAllToTarget: "Move All to Target",
      moveAllToSource: "Move All to Source",
      pageLabel: "Page {page}",
      firstPageLabel: "First Page",
      lastPageLabel: "Last Page",
      nextPageLabel: "Next Page",
      prevPageLabel: "Previous Page",
      rowsPerPageLabel: "Rows per page",
      jumpToPageDropdownLabel: "Jump to Page Dropdown",
      jumpToPageInputLabel: "Jump to Page Input",
      selectRow: "Row Selected",
      unselectRow: "Row Unselected",
      expandRow: "Row Expanded",
      collapseRow: "Row Collapsed",
      showFilterMenu: "Show Filter Menu",
      hideFilterMenu: "Hide Filter Menu",
      filterOperator: "Filter Operator",
      filterConstraint: "Filter Constraint",
      editRow: "Row Edit",
      saveEdit: "Save Edit",
      cancelEdit: "Cancel Edit",
      listView: "List View",
      gridView: "Grid View",
      slide: "Slide",
      slideNumber: "{slideNumber}",
      zoomImage: "Zoom Image",
      zoomIn: "Zoom In",
      zoomOut: "Zoom Out",
      rotateRight: "Rotate Right",
      rotateLeft: "Rotate Left",
      listLabel: "Option List"
    }
  },
  filterMatchModeOptions: {
    text: [FilterMatchMode.STARTS_WITH, FilterMatchMode.CONTAINS, FilterMatchMode.NOT_CONTAINS, FilterMatchMode.ENDS_WITH, FilterMatchMode.EQUALS, FilterMatchMode.NOT_EQUALS],
    numeric: [FilterMatchMode.EQUALS, FilterMatchMode.NOT_EQUALS, FilterMatchMode.LESS_THAN, FilterMatchMode.LESS_THAN_OR_EQUAL_TO, FilterMatchMode.GREATER_THAN, FilterMatchMode.GREATER_THAN_OR_EQUAL_TO],
    date: [FilterMatchMode.DATE_IS, FilterMatchMode.DATE_IS_NOT, FilterMatchMode.DATE_BEFORE, FilterMatchMode.DATE_AFTER]
  },
  zIndex: {
    modal: 1100,
    overlay: 1e3,
    menu: 1e3,
    tooltip: 1100
  },
  theme: void 0,
  unstyled: false,
  pt: void 0,
  ptOptions: {
    mergeSections: true,
    mergeProps: false
  },
  csp: {
    nonce: void 0
  }
};
var PrimeVueSymbol = Symbol();
function setup(app, options) {
  var PrimeVue2 = {
    config: reactive(options)
  };
  app.config.globalProperties.$primevue = PrimeVue2;
  app.provide(PrimeVueSymbol, PrimeVue2);
  clearConfig();
  setupConfig(app, PrimeVue2);
  return PrimeVue2;
}
var stopWatchers = [];
function clearConfig() {
  R.clear();
  stopWatchers.forEach(function(fn) {
    return fn === null || fn === void 0 ? void 0 : fn();
  });
  stopWatchers = [];
}
function setupConfig(app, PrimeVue2) {
  var isThemeChanged = ref(false);
  var loadCommonTheme = function loadCommonTheme2() {
    var _PrimeVue$config;
    if (((_PrimeVue$config = PrimeVue2.config) === null || _PrimeVue$config === void 0 ? void 0 : _PrimeVue$config.theme) === "none") return;
    if (!g$5.isStyleNameLoaded("common")) {
      var _BaseStyle$getCommonT, _PrimeVue$config2;
      var _ref = ((_BaseStyle$getCommonT = BaseStyle.getCommonTheme) === null || _BaseStyle$getCommonT === void 0 ? void 0 : _BaseStyle$getCommonT.call(BaseStyle)) || {}, primitive = _ref.primitive, semantic = _ref.semantic, global = _ref.global, style2 = _ref.style;
      var styleOptions = {
        nonce: (_PrimeVue$config2 = PrimeVue2.config) === null || _PrimeVue$config2 === void 0 || (_PrimeVue$config2 = _PrimeVue$config2.csp) === null || _PrimeVue$config2 === void 0 ? void 0 : _PrimeVue$config2.nonce
      };
      BaseStyle.load(primitive === null || primitive === void 0 ? void 0 : primitive.css, _objectSpread({
        name: "primitive-variables"
      }, styleOptions));
      BaseStyle.load(semantic === null || semantic === void 0 ? void 0 : semantic.css, _objectSpread({
        name: "semantic-variables"
      }, styleOptions));
      BaseStyle.load(global === null || global === void 0 ? void 0 : global.css, _objectSpread({
        name: "global-variables"
      }, styleOptions));
      BaseStyle.loadStyle(_objectSpread({
        name: "global-style"
      }, styleOptions), style2);
      g$5.setLoadedStyleName("common");
    }
  };
  R.on("theme:change", function(newTheme) {
    if (!isThemeChanged.value) {
      app.config.globalProperties.$primevue.config.theme = newTheme;
      isThemeChanged.value = true;
    }
  });
  var stopConfigWatcher = watch(PrimeVue2.config, function(newValue, oldValue) {
    PrimeVueService.emit("config:change", {
      newValue,
      oldValue
    });
  }, {
    immediate: true,
    deep: true
  });
  var stopRippleWatcher = watch(function() {
    return PrimeVue2.config.ripple;
  }, function(newValue, oldValue) {
    PrimeVueService.emit("config:ripple:change", {
      newValue,
      oldValue
    });
  }, {
    immediate: true,
    deep: true
  });
  var stopThemeWatcher = watch(function() {
    return PrimeVue2.config.theme;
  }, function(newValue, oldValue) {
    if (!isThemeChanged.value) {
      g$5.setTheme(newValue);
    }
    if (!PrimeVue2.config.unstyled) {
      loadCommonTheme();
    }
    isThemeChanged.value = false;
    PrimeVueService.emit("config:theme:change", {
      newValue,
      oldValue
    });
  }, {
    immediate: true,
    deep: false
  });
  var stopUnstyledWatcher = watch(function() {
    return PrimeVue2.config.unstyled;
  }, function(newValue, oldValue) {
    if (!newValue && PrimeVue2.config.theme) {
      loadCommonTheme();
    }
    PrimeVueService.emit("config:unstyled:change", {
      newValue,
      oldValue
    });
  }, {
    immediate: true,
    deep: true
  });
  stopWatchers.push(stopConfigWatcher);
  stopWatchers.push(stopRippleWatcher);
  stopWatchers.push(stopThemeWatcher);
  stopWatchers.push(stopUnstyledWatcher);
}
var PrimeVue = {
  install: function install(app, options) {
    var configOptions = U(defaultOptions, options);
    setup(app, configOptions);
  }
};
var t$D = (...t2) => Se(...t2);
var o$1m = { transitionDuration: "{transition.duration}" }, r$1j = { borderWidth: "0", borderColor: "{content.border.color}" }, t$C = { color: "{text.color}", hoverColor: "{text.color}", activeColor: "{text.color}", activeHoverColor: "{text.color}", padding: "1.125rem", fontWeight: "700", borderRadius: "0", borderWidth: "0 1px 1px 1px", borderColor: "{content.border.color}", background: "{content.background}", hoverBackground: "{content.hover.background}", activeBackground: "{content.background}", activeHoverBackground: "{content.hover.background}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "-2px", shadow: "{focus.ring.shadow}" }, toggleIcon: { color: "{text.color}", hoverColor: "{text.color}", activeColor: "{text.color}", activeHoverColor: "{text.color}" }, first: { topBorderRadius: "{content.border.radius}", borderWidth: "1px" }, last: { bottomBorderRadius: "{content.border.radius}", activeBottomBorderRadius: "0" } }, e$T = { borderWidth: "0 1px 1px 1px", borderColor: "{content.border.color}", background: "{content.background}", color: "{text.color}", padding: "1.125rem" }, c$o = { root: o$1m, panel: r$1j, header: t$C, content: e$T };
var o$1l = { background: "{form.field.background}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", filledHoverBackground: "{form.field.filled.hover.background}", filledFocusBackground: "{form.field.filled.focus.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.focus.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", color: "{form.field.color}", disabledColor: "{form.field.disabled.color}", placeholderColor: "{form.field.placeholder.color}", invalidPlaceholderColor: "{form.field.invalid.placeholder.color}", shadow: "{form.field.shadow}", paddingX: "{form.field.padding.x}", paddingY: "{form.field.padding.y}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}" }, r$1i = { background: "{overlay.select.background}", borderColor: "{overlay.select.border.color}", borderRadius: "{overlay.select.border.radius}", color: "{overlay.select.color}", shadow: "{overlay.select.shadow}" }, d$z = { padding: "{list.padding}", gap: "{list.gap}" }, e$S = { focusBackground: "{list.option.focus.background}", selectedBackground: "{list.option.selected.background}", selectedFocusBackground: "{list.option.selected.focus.background}", color: "{list.option.color}", focusColor: "{list.option.focus.color}", selectedColor: "{list.option.selected.color}", selectedFocusColor: "{list.option.selected.focus.color}", padding: "{list.option.padding}", borderRadius: "{list.option.border.radius}" }, l$g = { background: "{list.option.group.background}", color: "{list.option.group.color}", fontWeight: "{list.option.group.font.weight}", padding: "{list.option.group.padding}" }, i$u = { width: "2.5rem", sm: { width: "2rem" }, lg: { width: "3rem" }, background: "{form.field.background}", color: "{form.field.icon.color}", hoverColor: "{form.field.icon.color}", activeColor: "{form.field.icon.color}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.border.color}", activeBorderColor: "{form.field.border.color}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, c$n = { borderRadius: "{border.radius.xs}" }, f$9 = { padding: "{list.option.padding}" }, s$a = { light: { chip: { focusBackground: "{surface.300}", focusColor: "{surface.900}" }, dropdown: { hoverBackground: "{surface.200}", activeBackground: "{surface.300}" } }, dark: { chip: { focusBackground: "{surface.600}", focusColor: "{surface.0}" }, dropdown: { hoverBackground: "{surface.700}", activeBackground: "{surface.600}" } } }, a$G = { root: o$1l, overlay: r$1i, list: d$z, option: e$S, optionGroup: l$g, dropdown: i$u, chip: c$n, emptyMessage: f$9, colorScheme: s$a };
var e$R = { width: "2rem", height: "2rem", fontSize: "1rem", background: "{content.hover.background}", color: "{content.color}", borderRadius: "{content.border.radius}" }, r$1h = { size: "1rem" }, o$1k = { borderColor: "{content.background}", offset: "-0.75rem" }, t$B = { width: "3rem", height: "3rem", fontSize: "1.5rem", icon: { size: "1.5rem" }, group: { offset: "-1rem" } }, i$t = { width: "4rem", height: "4rem", fontSize: "2rem", icon: { size: "2rem" }, group: { offset: "-1.5rem" } }, n$y = { root: e$R, icon: r$1h, group: o$1k, lg: t$B, xl: i$t };
var r$1g = { borderRadius: "{border.radius.md}", padding: "0 0.5rem", fontSize: "0.75rem", fontWeight: "700", minWidth: "1.5rem", height: "1.5rem" }, o$1j = { size: "0.5rem" }, e$Q = { fontSize: "0.625rem", minWidth: "1.25rem", height: "1.25rem" }, c$m = { fontSize: "0.875rem", minWidth: "1.75rem", height: "1.75rem" }, a$F = { fontSize: "1rem", minWidth: "2rem", height: "2rem" }, n$x = { light: { primary: { background: "{primary.color}", color: "{primary.contrast.color}" }, secondary: { background: "{surface.200}", color: "{surface.700}" }, success: { background: "{green.600}", color: "{surface.0}" }, info: { background: "{sky.600}", color: "{surface.0}" }, warn: { background: "{orange.600}", color: "{surface.0}" }, danger: { background: "{red.600}", color: "{surface.0}" }, contrast: { background: "{surface.950}", color: "{surface.0}" } }, dark: { primary: { background: "{primary.color}", color: "{primary.contrast.color}" }, secondary: { background: "{surface.700}", color: "{surface.200}" }, success: { background: "{green.500}", color: "{green.950}" }, info: { background: "{sky.500}", color: "{sky.950}" }, warn: { background: "{orange.500}", color: "{orange.950}" }, danger: { background: "{red.500}", color: "{red.950}" }, contrast: { background: "{surface.0}", color: "{surface.950}" } } }, d$y = { root: r$1g, dot: o$1j, sm: e$Q, lg: c$m, xl: a$F, colorScheme: n$x };
var o$1i = { borderRadius: { none: "0", xs: "2px", sm: "4px", md: "6px", lg: "8px", xl: "12px" }, emerald: { 50: "#ecfdf5", 100: "#d1fae5", 200: "#a7f3d0", 300: "#6ee7b7", 400: "#34d399", 500: "#10b981", 600: "#059669", 700: "#047857", 800: "#065f46", 900: "#064e3b", 950: "#022c22" }, green: { 50: "#f0fdf4", 100: "#dcfce7", 200: "#bbf7d0", 300: "#86efac", 400: "#4ade80", 500: "#22c55e", 600: "#16a34a", 700: "#15803d", 800: "#166534", 900: "#14532d", 950: "#052e16" }, lime: { 50: "#f7fee7", 100: "#ecfccb", 200: "#d9f99d", 300: "#bef264", 400: "#a3e635", 500: "#84cc16", 600: "#65a30d", 700: "#4d7c0f", 800: "#3f6212", 900: "#365314", 950: "#1a2e05" }, red: { 50: "#fef2f2", 100: "#fee2e2", 200: "#fecaca", 300: "#fca5a5", 400: "#f87171", 500: "#ef4444", 600: "#dc2626", 700: "#b91c1c", 800: "#991b1b", 900: "#7f1d1d", 950: "#450a0a" }, orange: { 50: "#fff7ed", 100: "#ffedd5", 200: "#fed7aa", 300: "#fdba74", 400: "#fb923c", 500: "#f97316", 600: "#ea580c", 700: "#c2410c", 800: "#9a3412", 900: "#7c2d12", 950: "#431407" }, amber: { 50: "#fffbeb", 100: "#fef3c7", 200: "#fde68a", 300: "#fcd34d", 400: "#fbbf24", 500: "#f59e0b", 600: "#d97706", 700: "#b45309", 800: "#92400e", 900: "#78350f", 950: "#451a03" }, yellow: { 50: "#fefce8", 100: "#fef9c3", 200: "#fef08a", 300: "#fde047", 400: "#facc15", 500: "#eab308", 600: "#ca8a04", 700: "#a16207", 800: "#854d0e", 900: "#713f12", 950: "#422006" }, teal: { 50: "#f0fdfa", 100: "#ccfbf1", 200: "#99f6e4", 300: "#5eead4", 400: "#2dd4bf", 500: "#14b8a6", 600: "#0d9488", 700: "#0f766e", 800: "#115e59", 900: "#134e4a", 950: "#042f2e" }, cyan: { 50: "#ecfeff", 100: "#cffafe", 200: "#a5f3fc", 300: "#67e8f9", 400: "#22d3ee", 500: "#06b6d4", 600: "#0891b2", 700: "#0e7490", 800: "#155e75", 900: "#164e63", 950: "#083344" }, sky: { 50: "#f0f9ff", 100: "#e0f2fe", 200: "#bae6fd", 300: "#7dd3fc", 400: "#38bdf8", 500: "#0ea5e9", 600: "#0284c7", 700: "#0369a1", 800: "#075985", 900: "#0c4a6e", 950: "#082f49" }, blue: { 50: "#eff6ff", 100: "#dbeafe", 200: "#bfdbfe", 300: "#93c5fd", 400: "#60a5fa", 500: "#3b82f6", 600: "#2563eb", 700: "#1d4ed8", 800: "#1e40af", 900: "#1e3a8a", 950: "#172554" }, indigo: { 50: "#eef2ff", 100: "#e0e7ff", 200: "#c7d2fe", 300: "#a5b4fc", 400: "#818cf8", 500: "#6366f1", 600: "#4f46e5", 700: "#4338ca", 800: "#3730a3", 900: "#312e81", 950: "#1e1b4b" }, violet: { 50: "#f5f3ff", 100: "#ede9fe", 200: "#ddd6fe", 300: "#c4b5fd", 400: "#a78bfa", 500: "#8b5cf6", 600: "#7c3aed", 700: "#6d28d9", 800: "#5b21b6", 900: "#4c1d95", 950: "#2e1065" }, purple: { 50: "#faf5ff", 100: "#f3e8ff", 200: "#e9d5ff", 300: "#d8b4fe", 400: "#c084fc", 500: "#a855f7", 600: "#9333ea", 700: "#7e22ce", 800: "#6b21a8", 900: "#581c87", 950: "#3b0764" }, fuchsia: { 50: "#fdf4ff", 100: "#fae8ff", 200: "#f5d0fe", 300: "#f0abfc", 400: "#e879f9", 500: "#d946ef", 600: "#c026d3", 700: "#a21caf", 800: "#86198f", 900: "#701a75", 950: "#4a044e" }, pink: { 50: "#fdf2f8", 100: "#fce7f3", 200: "#fbcfe8", 300: "#f9a8d4", 400: "#f472b6", 500: "#ec4899", 600: "#db2777", 700: "#be185d", 800: "#9d174d", 900: "#831843", 950: "#500724" }, rose: { 50: "#fff1f2", 100: "#ffe4e6", 200: "#fecdd3", 300: "#fda4af", 400: "#fb7185", 500: "#f43f5e", 600: "#e11d48", 700: "#be123c", 800: "#9f1239", 900: "#881337", 950: "#4c0519" }, slate: { 50: "#f8fafc", 100: "#f1f5f9", 200: "#e2e8f0", 300: "#cbd5e1", 400: "#94a3b8", 500: "#64748b", 600: "#475569", 700: "#334155", 800: "#1e293b", 900: "#0f172a", 950: "#020617" }, gray: { 50: "#f9fafb", 100: "#f3f4f6", 200: "#e5e7eb", 300: "#d1d5db", 400: "#9ca3af", 500: "#6b7280", 600: "#4b5563", 700: "#374151", 800: "#1f2937", 900: "#111827", 950: "#030712" }, zinc: { 50: "#fafafa", 100: "#f4f4f5", 200: "#e4e4e7", 300: "#d4d4d8", 400: "#a1a1aa", 500: "#71717a", 600: "#52525b", 700: "#3f3f46", 800: "#27272a", 900: "#18181b", 950: "#09090b" }, neutral: { 50: "#fafafa", 100: "#f5f5f5", 200: "#e5e5e5", 300: "#d4d4d4", 400: "#a3a3a3", 500: "#737373", 600: "#525252", 700: "#404040", 800: "#262626", 900: "#171717", 950: "#0a0a0a" }, stone: { 50: "#fafaf9", 100: "#f5f5f4", 200: "#e7e5e4", 300: "#d6d3d1", 400: "#a8a29e", 500: "#78716c", 600: "#57534e", 700: "#44403c", 800: "#292524", 900: "#1c1917", 950: "#0c0a09" } }, r$1f = { transitionDuration: "0s", focusRing: { width: "2px", style: "solid", color: "{primary.color}", offset: "2px", shadow: "none" }, disabledOpacity: "0.6", iconSize: "1rem", anchorGutter: "0", primary: { 50: "{emerald.50}", 100: "{emerald.100}", 200: "{emerald.200}", 300: "{emerald.300}", 400: "{emerald.400}", 500: "{emerald.500}", 600: "{emerald.600}", 700: "{emerald.700}", 800: "{emerald.800}", 900: "{emerald.900}", 950: "{emerald.950}" }, formField: { paddingX: "0.75rem", paddingY: "0.5rem", sm: { fontSize: "0.875rem", paddingX: "0.625rem", paddingY: "0.375rem" }, lg: { fontSize: "1.125rem", paddingX: "0.875rem", paddingY: "0.625rem" }, borderRadius: "{border.radius.xs}", focusRing: { width: "2px", style: "solid", color: "{primary.color}", offset: "-1px", shadow: "none" }, transitionDuration: "{transition.duration}" }, list: { padding: "0.125rem 0", gap: "0", header: { padding: "0.5rem 0.75rem 0.375rem 0.75rem" }, option: { padding: "0.5rem 0.75rem", borderRadius: "0" }, optionGroup: { padding: "0.5rem 0.75rem", fontWeight: "700" } }, content: { borderRadius: "{border.radius.xs}" }, mask: { transitionDuration: "0.15s" }, navigation: { list: { padding: "0.125rem 0", gap: "0" }, item: { padding: "0.5rem 0.75rem", borderRadius: "0", gap: "0.5rem" }, submenuLabel: { padding: "0.5rem 0.75rem", fontWeight: "700" }, submenuIcon: { size: "0.875rem" } }, overlay: { select: { borderRadius: "{border.radius.xs}", shadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)" }, popover: { borderRadius: "{border.radius.xs}", padding: "0.75rem", shadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)" }, modal: { borderRadius: "{border.radius.xs}", padding: "1.25rem", shadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)" }, navigation: { shadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)" } }, colorScheme: { light: { surface: { 0: "#ffffff", 50: "{slate.50}", 100: "{slate.100}", 200: "{slate.200}", 300: "{slate.300}", 400: "{slate.400}", 500: "{slate.500}", 600: "{slate.600}", 700: "{slate.700}", 800: "{slate.800}", 900: "{slate.900}", 950: "{slate.950}" }, primary: { color: "{primary.600}", contrastColor: "#ffffff", hoverColor: "{primary.700}", activeColor: "{primary.800}" }, highlight: { background: "{primary.600}", focusBackground: "{primary.700}", color: "#ffffff", focusColor: "#ffffff" }, mask: { background: "rgba(0,0,0,0.4)", color: "{surface.200}" }, formField: { background: "{surface.0}", disabledBackground: "{surface.300}", filledBackground: "{surface.100}", filledHoverBackground: "{surface.100}", filledFocusBackground: "{surface.100}", borderColor: "{surface.500}", hoverBorderColor: "{surface.500}", focusBorderColor: "{surface.500}", invalidBorderColor: "{red.500}", color: "{surface.900}", disabledColor: "{surface.600}", placeholderColor: "{surface.600}", invalidPlaceholderColor: "{red.600}", floatLabelColor: "{surface.600}", floatLabelFocusColor: "{primary.color}", floatLabelActiveColor: "{surface.600}", floatLabelInvalidColor: "{form.field.invalid.placeholder.color}", iconColor: "{surface.900}", shadow: "none" }, text: { color: "{surface.900}", hoverColor: "{surface.950}", mutedColor: "{surface.600}", hoverMutedColor: "{surface.700}" }, content: { background: "{surface.0}", hoverBackground: "{surface.200}", borderColor: "{surface.400}", color: "{text.color}", hoverColor: "{text.hover.color}" }, overlay: { select: { background: "{surface.0}", borderColor: "transparent", color: "{text.color}" }, popover: { background: "{surface.0}", borderColor: "transparent", color: "{text.color}" }, modal: { background: "{surface.0}", borderColor: "transparent", color: "{text.color}" } }, list: { option: { focusBackground: "{surface.200}", selectedBackground: "{highlight.background}", selectedFocusBackground: "{highlight.focus.background}", color: "{text.color}", focusColor: "{text.hover.color}", selectedColor: "{highlight.color}", selectedFocusColor: "{highlight.focus.color}", icon: { color: "{text.muted.color}", focusColor: "{text.hover.muted.color}" } }, optionGroup: { background: "transparent", color: "{text.color}" } }, navigation: { item: { focusBackground: "{primary.color}", activeBackground: "{surface.200}", color: "{text.color}", focusColor: "{primary.contrast.color}", activeColor: "{text.hover.color}", icon: { color: "{text.muted.color}", focusColor: "{primary.contrast.color}", activeColor: "{text.hover.muted.color}" } }, submenuLabel: { background: "transparent", color: "{text.color}" }, submenuIcon: { color: "{text.muted.color}", focusColor: "{primary.contrast.color}", activeColor: "{text.hover.muted.color}" } } }, dark: { surface: { 0: "#ffffff", 50: "{zinc.50}", 100: "{zinc.100}", 200: "{zinc.200}", 300: "{zinc.300}", 400: "{zinc.400}", 500: "{zinc.500}", 600: "{zinc.600}", 700: "{zinc.700}", 800: "{zinc.800}", 900: "{zinc.900}", 950: "{zinc.950}" }, primary: { color: "{primary.500}", contrastColor: "{surface.950}", hoverColor: "{primary.400}", activeColor: "{primary.300}" }, highlight: { background: "{primary.500}", focusBackground: "{primary.400}", color: "{surface.950}", focusColor: "{surface.950}" }, mask: { background: "rgba(0,0,0,0.6)", color: "{surface.200}" }, formField: { background: "{surface.950}", disabledBackground: "{surface.700}", filledBackground: "{surface.800}", filledHoverBackground: "{surface.800}", filledFocusBackground: "{surface.800}", borderColor: "{surface.500}", hoverBorderColor: "{surface.500}", focusBorderColor: "{surface.500}", invalidBorderColor: "{red.400}", color: "{surface.0}", disabledColor: "{surface.400}", placeholderColor: "{surface.400}", invalidPlaceholderColor: "{red.400}", floatLabelColor: "{surface.400}", floatLabelFocusColor: "{primary.color}", floatLabelActiveColor: "{surface.400}", floatLabelInvalidColor: "{form.field.invalid.placeholder.color}", iconColor: "{surface.0}", shadow: "none" }, text: { color: "{surface.0}", hoverColor: "{surface.0}", mutedColor: "{surface.400}", hoverMutedColor: "{surface.300}" }, content: { background: "{surface.900}", hoverBackground: "{surface.700}", borderColor: "{surface.500}", color: "{text.color}", hoverColor: "{text.hover.color}" }, overlay: { select: { background: "{surface.900}", borderColor: "{surface.700}", color: "{text.color}" }, popover: { background: "{surface.900}", borderColor: "{surface.700}", color: "{text.color}" }, modal: { background: "{surface.900}", borderColor: "{surface.700}", color: "{text.color}" } }, list: { option: { focusBackground: "{surface.700}", selectedBackground: "{highlight.background}", selectedFocusBackground: "{highlight.focus.background}", color: "{text.color}", focusColor: "{text.hover.color}", selectedColor: "{highlight.color}", selectedFocusColor: "{highlight.focus.color}", icon: { color: "{text.muted.color}", focusColor: "{text.hover.muted.color}" } }, optionGroup: { background: "transparent", color: "{text.color}" } }, navigation: { item: { focusBackground: "{primary.color}", activeBackground: "{surface.700}", color: "{text.color}", focusColor: "{primary.contrast.color}", activeColor: "{text.color}", icon: { color: "{text.muted.color}", focusColor: "{primary.contrast.color}", activeColor: "{text.hover.muted.color}" } }, submenuLabel: { background: "transparent", color: "{text.color}" }, submenuIcon: { color: "{text.muted.color}", focusColor: "{primary.contrast.color}", activeColor: "{text.hover.muted.color}" } } } } }, e$P = { primitive: o$1i, semantic: r$1f };
var r$1e = { borderRadius: "{content.border.radius}" }, o$1h = { root: r$1e };
var o$1g = { padding: "1rem", background: "{content.background}", gap: "0.5rem", transitionDuration: "{transition.duration}" }, r$1d = { color: "{text.muted.color}", hoverColor: "{text.color}", borderRadius: "{content.border.radius}", gap: "{navigation.item.gap}", icon: { color: "{text.muted.color}", hoverColor: "{text.color}" }, focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, t$A = { color: "{navigation.item.icon.color}" }, i$s = { root: o$1g, item: r$1d, separator: t$A };
var r$1c = { borderRadius: "{form.field.border.radius}", roundedBorderRadius: "2rem", gap: "0.5rem", paddingX: "{form.field.padding.x}", paddingY: "{form.field.padding.y}", iconOnlyWidth: "2.5rem", sm: { fontSize: "{form.field.sm.font.size}", paddingX: "{form.field.sm.padding.x}", paddingY: "{form.field.sm.padding.y}", iconOnlyWidth: "2rem" }, lg: { fontSize: "{form.field.lg.font.size}", paddingX: "{form.field.lg.padding.x}", paddingY: "{form.field.lg.padding.y}", iconOnlyWidth: "3rem" }, label: { fontWeight: "700" }, raisedShadow: "0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12)", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", offset: "{focus.ring.offset}" }, badgeSize: "1rem", transitionDuration: "{form.field.transition.duration}" }, o$1f = { light: { root: { primary: { background: "{primary.color}", hoverBackground: "{primary.hover.color}", activeBackground: "{primary.active.color}", borderColor: "{primary.color}", hoverBorderColor: "{primary.hover.color}", activeBorderColor: "{primary.active.color}", color: "{primary.contrast.color}", hoverColor: "{primary.contrast.color}", activeColor: "{primary.contrast.color}", focusRing: { color: "{primary.color}", shadow: "none" } }, secondary: { background: "{surface.200}", hoverBackground: "{surface.300}", activeBackground: "{surface.400}", borderColor: "{surface.200}", hoverBorderColor: "{surface.300}", activeBorderColor: "{surface.400}", color: "{surface.700}", hoverColor: "{surface.800}", activeColor: "{surface.900}", focusRing: { color: "{surface.700}", shadow: "none" } }, info: { background: "{sky.600}", hoverBackground: "{sky.700}", activeBackground: "{sky.800}", borderColor: "{sky.600}", hoverBorderColor: "{sky.700}", activeBorderColor: "{sky.800}", color: "#ffffff", hoverColor: "#ffffff", activeColor: "#ffffff", focusRing: { color: "{sky.600}", shadow: "none" } }, success: { background: "{green.600}", hoverBackground: "{green.700}", activeBackground: "{green.800}", borderColor: "{green.600}", hoverBorderColor: "{green.700}", activeBorderColor: "{green.800}", color: "#ffffff", hoverColor: "#ffffff", activeColor: "#ffffff", focusRing: { color: "{green.600}", shadow: "none" } }, warn: { background: "{orange.600}", hoverBackground: "{orange.700}", activeBackground: "{orange.800}", borderColor: "{orange.600}", hoverBorderColor: "{orange.700}", activeBorderColor: "{orange.800}", color: "#ffffff", hoverColor: "#ffffff", activeColor: "#ffffff", focusRing: { color: "{orange.600}", shadow: "none" } }, help: { background: "{purple.600}", hoverBackground: "{purple.700}", activeBackground: "{purple.800}", borderColor: "{purple.600}", hoverBorderColor: "{purple.700}", activeBorderColor: "{purple.800}", color: "#ffffff", hoverColor: "#ffffff", activeColor: "#ffffff", focusRing: { color: "{purple.600}", shadow: "none" } }, danger: { background: "{red.600}", hoverBackground: "{red.700}", activeBackground: "{red.800}", borderColor: "{red.600}", hoverBorderColor: "{red.700}", activeBorderColor: "{red.800}", color: "#ffffff", hoverColor: "#ffffff", activeColor: "#ffffff", focusRing: { color: "{red.600}", shadow: "none" } }, contrast: { background: "{surface.950}", hoverBackground: "{surface.900}", activeBackground: "{surface.800}", borderColor: "{surface.950}", hoverBorderColor: "{surface.900}", activeBorderColor: "{surface.800}", color: "{surface.0}", hoverColor: "{surface.0}", activeColor: "{surface.0}", focusRing: { color: "{surface.950}", shadow: "none" } } }, outlined: { primary: { hoverBackground: "{primary.50}", activeBackground: "{primary.100}", borderColor: "{primary.color}", color: "{primary.color}" }, secondary: { hoverBackground: "{surface.50}", activeBackground: "{surface.100}", borderColor: "{surface.600}", color: "{surface.600}" }, success: { hoverBackground: "{green.50}", activeBackground: "{green.100}", borderColor: "{green.600}", color: "{green.600}" }, info: { hoverBackground: "{sky.50}", activeBackground: "{sky.100}", borderColor: "{sky.600}", color: "{sky.600}" }, warn: { hoverBackground: "{orange.50}", activeBackground: "{orange.100}", borderColor: "{orange.600}", color: "{orange.600}" }, help: { hoverBackground: "{purple.50}", activeBackground: "{purple.100}", borderColor: "{purple.600}", color: "{purple.600}" }, danger: { hoverBackground: "{red.50}", activeBackground: "{red.100}", borderColor: "{red.600}", color: "{red.600}" }, contrast: { hoverBackground: "{surface.50}", activeBackground: "{surface.100}", borderColor: "{surface.950}", color: "{surface.950}" }, plain: { hoverBackground: "{surface.50}", activeBackground: "{surface.100}", borderColor: "{surface.900}", color: "{surface.900}" } }, text: { primary: { hoverBackground: "{primary.50}", activeBackground: "{primary.100}", color: "{primary.color}" }, secondary: { hoverBackground: "{surface.50}", activeBackground: "{surface.100}", color: "{surface.600}" }, success: { hoverBackground: "{green.50}", activeBackground: "{green.100}", color: "{green.600}" }, info: { hoverBackground: "{sky.50}", activeBackground: "{sky.100}", color: "{sky.600}" }, warn: { hoverBackground: "{orange.50}", activeBackground: "{orange.100}", color: "{orange.600}" }, help: { hoverBackground: "{purple.50}", activeBackground: "{purple.100}", color: "{purple.600}" }, danger: { hoverBackground: "{red.50}", activeBackground: "{red.100}", color: "{red.600}" }, contrast: { hoverBackground: "{surface.50}", activeBackground: "{surface.100}", color: "{surface.950}" }, plain: { hoverBackground: "{surface.50}", activeBackground: "{surface.100}", color: "{surface.900}" } }, link: { color: "{primary.color}", hoverColor: "{primary.color}", activeColor: "{primary.color}" } }, dark: { root: { primary: { background: "{primary.color}", hoverBackground: "{primary.hover.color}", activeBackground: "{primary.active.color}", borderColor: "{primary.color}", hoverBorderColor: "{primary.hover.color}", activeBorderColor: "{primary.active.color}", color: "{primary.contrast.color}", hoverColor: "{primary.contrast.color}", activeColor: "{primary.contrast.color}", focusRing: { color: "{primary.color}", shadow: "none" } }, secondary: { background: "{surface.700}", hoverBackground: "{surface.600}", activeBackground: "{surface.500}", borderColor: "{surface.700}", hoverBorderColor: "{surface.600}", activeBorderColor: "{surface.500}", color: "{surface.200}", hoverColor: "{surface.100}", activeColor: "{surface.0}", focusRing: { color: "{surface.200}", shadow: "none" } }, info: { background: "{sky.500}", hoverBackground: "{sky.400}", activeBackground: "{sky.300}", borderColor: "{sky.500}", hoverBorderColor: "{sky.400}", activeBorderColor: "{sky.300}", color: "{sky.950}", hoverColor: "{sky.950}", activeColor: "{sky.950}", focusRing: { color: "{sky.500}", shadow: "none" } }, success: { background: "{green.500}", hoverBackground: "{green.400}", activeBackground: "{green.300}", borderColor: "{green.500}", hoverBorderColor: "{green.400}", activeBorderColor: "{green.300}", color: "{green.950}", hoverColor: "{green.950}", activeColor: "{green.950}", focusRing: { color: "{green.500}", shadow: "none" } }, warn: { background: "{orange.500}", hoverBackground: "{orange.400}", activeBackground: "{orange.300}", borderColor: "{orange.500}", hoverBorderColor: "{orange.400}", activeBorderColor: "{orange.300}", color: "{orange.950}", hoverColor: "{orange.950}", activeColor: "{orange.950}", focusRing: { color: "{orange.500}", shadow: "none" } }, help: { background: "{purple.500}", hoverBackground: "{purple.400}", activeBackground: "{purple.300}", borderColor: "{purple.500}", hoverBorderColor: "{purple.400}", activeBorderColor: "{purple.300}", color: "{purple.950}", hoverColor: "{purple.950}", activeColor: "{purple.950}", focusRing: { color: "{purple.500}", shadow: "none" } }, danger: { background: "{red.500}", hoverBackground: "{red.400}", activeBackground: "{red.300}", borderColor: "{red.500}", hoverBorderColor: "{red.400}", activeBorderColor: "{red.300}", color: "{red.950}", hoverColor: "{red.950}", activeColor: "{red.950}", focusRing: { color: "{red.500}", shadow: "none" } }, contrast: { background: "{surface.0}", hoverBackground: "{surface.100}", activeBackground: "{surface.200}", borderColor: "{surface.0}", hoverBorderColor: "{surface.100}", activeBorderColor: "{surface.200}", color: "{surface.950}", hoverColor: "{surface.950}", activeColor: "{surface.950}", focusRing: { color: "{surface.0}", shadow: "none" } } }, outlined: { primary: { hoverBackground: "color-mix(in srgb, {primary.color}, transparent 96%)", activeBackground: "color-mix(in srgb, {primary.color}, transparent 84%)", borderColor: "{primary.color}", color: "{primary.color}" }, secondary: { hoverBackground: "rgba(255,255,255,0.04)", activeBackground: "rgba(255,255,255,0.16)", borderColor: "{surface.400}", color: "{surface.400}" }, success: { hoverBackground: "{green.950}", activeBackground: "{green.900}", borderColor: "{green.500}", color: "{green.500}" }, info: { hoverBackground: "{sky.950}", activeBackground: "{sky.900}", borderColor: "{sky.500}", color: "{sky.500}" }, warn: { hoverBackground: "{orange.950}", activeBackground: "{orange.900}", borderColor: "{orange.500}", color: "{orange.500}" }, help: { hoverBackground: "{purple.950}", activeBackground: "{purple.900}", borderColor: "{purple.500}", color: "{purple.500}" }, danger: { hoverBackground: "{red.950}", activeBackground: "{red.900}", borderColor: "{red.500}", color: "{red.500}" }, contrast: { hoverBackground: "{surface.800}", activeBackground: "{surface.700}", borderColor: "{surface.0}", color: "{surface.0}" }, plain: { hoverBackground: "{surface.800}", activeBackground: "{surface.700}", borderColor: "{surface.0}", color: "{surface.0}" } }, text: { primary: { hoverBackground: "color-mix(in srgb, {primary.color}, transparent 96%)", activeBackground: "color-mix(in srgb, {primary.color}, transparent 84%)", color: "{primary.color}" }, secondary: { hoverBackground: "{surface.800}", activeBackground: "{surface.700}", color: "{surface.400}" }, success: { hoverBackground: "color-mix(in srgb, {green.400}, transparent 96%)", activeBackground: "color-mix(in srgb, {green.400}, transparent 84%)", color: "{green.500}" }, info: { hoverBackground: "color-mix(in srgb, {sky.400}, transparent 96%)", activeBackground: "color-mix(in srgb, {sky.400}, transparent 84%)", color: "{sky.500}" }, warn: { hoverBackground: "color-mix(in srgb, {orange.400}, transparent 96%)", activeBackground: "color-mix(in srgb, {orange.400}, transparent 84%)", color: "{orange.500}" }, help: { hoverBackground: "color-mix(in srgb, {purple.400}, transparent 96%)", activeBackground: "color-mix(in srgb, {purple.400}, transparent 84%)", color: "{purple.500}" }, danger: { hoverBackground: "color-mix(in srgb, {red.400}, transparent 96%)", activeBackground: "color-mix(in srgb, {red.400}, transparent 84%)", color: "{red.500}" }, contrast: { hoverBackground: "{surface.800}", activeBackground: "{surface.700}", color: "{surface.0}" }, plain: { hoverBackground: "{surface.800}", activeBackground: "{surface.700}", color: "{surface.0}" } }, link: { color: "{primary.color}", hoverColor: "{primary.color}", activeColor: "{primary.color}" } } }, e$O = { root: r$1c, colorScheme: o$1f };
var o$1e = { background: "{content.background}", borderRadius: "{border.radius.sm}", color: "{content.color}", shadow: "0 1px 4px 0 rgba(0, 0, 0, 0.1)" }, r$1b = { padding: "1.25rem", gap: "0.5rem" }, t$z = { gap: "0.5rem" }, e$N = { fontSize: "1.25rem", fontWeight: "500" }, a$E = { color: "{text.muted.color}" }, d$x = { root: o$1e, body: r$1b, caption: t$z, title: e$N, subtitle: a$E };
var r$1a = { transitionDuration: "{transition.duration}" }, o$1d = { gap: "0.25rem" }, a$D = { padding: "1rem", gap: "0.5rem" }, i$r = { width: "2rem", height: "0.5rem", borderRadius: "{content.border.radius}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, c$l = { light: { indicator: { background: "{surface.300}", hoverBackground: "{surface.400}", activeBackground: "{primary.color}" } }, dark: { indicator: { background: "{surface.600}", hoverBackground: "{surface.500}", activeBackground: "{primary.color}" } } }, t$y = { root: r$1a, content: o$1d, indicatorList: a$D, indicator: i$r, colorScheme: c$l };
var o$1c = { background: "{form.field.background}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", filledHoverBackground: "{form.field.filled.hover.background}", filledFocusBackground: "{form.field.filled.focus.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.focus.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", color: "{form.field.color}", disabledColor: "{form.field.disabled.color}", placeholderColor: "{form.field.placeholder.color}", invalidPlaceholderColor: "{form.field.invalid.placeholder.color}", shadow: "{form.field.shadow}", paddingX: "{form.field.padding.x}", paddingY: "{form.field.padding.y}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}", sm: { fontSize: "{form.field.sm.font.size}", paddingX: "{form.field.sm.padding.x}", paddingY: "{form.field.sm.padding.y}" }, lg: { fontSize: "{form.field.lg.font.size}", paddingX: "{form.field.lg.padding.x}", paddingY: "{form.field.lg.padding.y}" } }, r$19 = { width: "2.5rem", color: "{form.field.icon.color}" }, d$w = { background: "{overlay.select.background}", borderColor: "{overlay.select.border.color}", borderRadius: "{overlay.select.border.radius}", color: "{overlay.select.color}", shadow: "{overlay.select.shadow}" }, l$f = { padding: "{list.padding}", gap: "{list.gap}", mobileIndent: "1rem" }, e$M = { focusBackground: "{list.option.focus.background}", selectedBackground: "{list.option.selected.background}", selectedFocusBackground: "{list.option.selected.focus.background}", color: "{list.option.color}", focusColor: "{list.option.focus.color}", selectedColor: "{list.option.selected.color}", selectedFocusColor: "{list.option.selected.focus.color}", padding: "{list.option.padding}", borderRadius: "{list.option.border.radius}", icon: { color: "{list.option.icon.color}", focusColor: "{list.option.icon.focus.color}", size: "0.875rem" } }, i$q = { color: "{form.field.icon.color}" }, f$8 = { root: o$1c, dropdown: r$19, overlay: d$w, list: l$f, option: e$M, clearIcon: i$q };
var r$18 = { borderRadius: "{border.radius.xs}", width: "1.25rem", height: "1.25rem", background: "{form.field.background}", checkedBackground: "{primary.color}", checkedHoverBackground: "{primary.hover.color}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.border.color}", checkedBorderColor: "{primary.color}", checkedHoverBorderColor: "{primary.hover.color}", checkedFocusBorderColor: "{primary.color}", checkedDisabledBorderColor: "{form.field.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", shadow: "{form.field.shadow}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}", sm: { width: "1rem", height: "1rem" }, lg: { width: "1.5rem", height: "1.5rem" } }, o$1b = { size: "0.875rem", color: "{form.field.color}", checkedColor: "{primary.contrast.color}", checkedHoverColor: "{primary.contrast.color}", disabledColor: "{form.field.disabled.color}", sm: { size: "0.75rem" }, lg: { size: "1rem" } }, e$L = { root: r$18, icon: o$1b };
var o$1a = { borderRadius: "16px", paddingX: "0.75rem", paddingY: "0.5rem", gap: "0.5rem", transitionDuration: "{transition.duration}" }, r$17 = { width: "2rem", height: "2rem" }, e$K = { size: "1rem" }, c$k = { size: "1rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" } }, i$p = { light: { root: { background: "{surface.200}", color: "{surface.900}" }, icon: { color: "{surface.900}" }, removeIcon: { color: "{surface.900}" } }, dark: { root: { background: "{surface.700}", color: "{surface.0}" }, icon: { color: "{surface.0}" }, removeIcon: { color: "{surface.0}" } } }, s$9 = { root: o$1a, image: r$17, icon: e$K, removeIcon: c$k, colorScheme: i$p };
var r$16 = { transitionDuration: "{transition.duration}" }, o$19 = { width: "1.5rem", height: "1.5rem", borderRadius: "{form.field.border.radius}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, e$J = { shadow: "{overlay.popover.shadow}", borderRadius: "{overlay.popover.borderRadius}" }, a$C = { light: { panel: { background: "{surface.800}", borderColor: "{surface.900}" }, handle: { color: "{surface.0}" } }, dark: { panel: { background: "{surface.900}", borderColor: "{surface.700}" }, handle: { color: "{surface.0}" } } }, s$8 = { root: r$16, preview: o$19, panel: e$J, colorScheme: a$C };
var o$18 = { size: "2rem", color: "{overlay.modal.color}" }, e$I = { gap: "1rem" }, r$15 = { icon: o$18, content: e$I };
var o$17 = { background: "{overlay.popover.background}", borderColor: "{overlay.popover.border.color}", color: "{overlay.popover.color}", borderRadius: "{overlay.popover.border.radius}", shadow: "{overlay.popover.shadow}", gutter: "10px", arrowOffset: "1.25rem" }, r$14 = { padding: "{overlay.popover.padding}", gap: "1rem" }, e$H = { size: "1.5rem", color: "{overlay.popover.color}" }, p$3 = { gap: "0.5rem", padding: "0 {overlay.popover.padding} {overlay.popover.padding} {overlay.popover.padding}" }, a$B = { root: o$17, content: r$14, icon: e$H, footer: p$3 };
var o$16 = { background: "{content.background}", borderColor: "{content.border.color}", color: "{content.color}", borderRadius: "{content.border.radius}", shadow: "{overlay.navigation.shadow}", transitionDuration: "{transition.duration}" }, i$o = { padding: "{navigation.list.padding}", gap: "{navigation.list.gap}" }, n$w = { focusBackground: "{navigation.item.focus.background}", activeBackground: "{navigation.item.active.background}", color: "{navigation.item.color}", focusColor: "{navigation.item.focus.color}", activeColor: "{navigation.item.active.color}", padding: "{navigation.item.padding}", borderRadius: "{navigation.item.border.radius}", gap: "{navigation.item.gap}", icon: { color: "{navigation.item.icon.color}", focusColor: "{navigation.item.icon.focus.color}", activeColor: "{navigation.item.icon.active.color}" } }, a$A = { mobileIndent: "1rem" }, t$x = { size: "{navigation.submenu.icon.size}", color: "{navigation.submenu.icon.color}", focusColor: "{navigation.submenu.icon.focus.color}", activeColor: "{navigation.submenu.icon.active.color}" }, r$13 = { borderColor: "{content.border.color}" }, c$j = { root: o$16, list: i$o, item: n$w, submenu: a$A, submenuIcon: t$x, separator: r$13 };
var o$15 = { transitionDuration: "{transition.duration}" }, r$12 = { background: "{content.background}", borderColor: "{datatable.border.color}", color: "{content.color}", borderWidth: "1px 0 1px 0", padding: "0.75rem 1rem", sm: { padding: "0.375rem 0.5rem" }, lg: { padding: "1rem 1.25rem" } }, e$G = { background: "{content.background}", hoverBackground: "{content.hover.background}", selectedBackground: "{highlight.background}", borderColor: "{datatable.border.color}", color: "{content.color}", hoverColor: "{content.hover.color}", selectedColor: "{highlight.color}", gap: "0.5rem", padding: "0.75rem 1rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "-1px", shadow: "{focus.ring.shadow}" }, sm: { padding: "0.375rem 0.5rem" }, lg: { padding: "1rem 1.25rem" } }, d$v = { fontWeight: "700" }, t$w = { background: "{content.background}", hoverBackground: "{content.hover.background}", selectedBackground: "{highlight.background}", color: "{content.color}", hoverColor: "{content.hover.color}", selectedColor: "{highlight.color}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "-1px", shadow: "{focus.ring.shadow}" } }, l$e = { borderColor: "{datatable.border.color}", padding: "0.75rem 1rem", sm: { padding: "0.375rem 0.5rem" }, lg: { padding: "1rem 1.25rem" } }, c$i = { background: "{content.background}", borderColor: "{datatable.border.color}", color: "{content.color}", padding: "0.75rem 1rem", sm: { padding: "0.375rem 0.5rem" }, lg: { padding: "1rem 1.25rem" } }, n$v = { fontWeight: "700" }, a$z = { background: "{content.background}", borderColor: "{datatable.border.color}", color: "{content.color}", borderWidth: "0 0 1px 0", padding: "0.75rem 1rem", sm: { padding: "0.375rem 0.5rem" }, lg: { padding: "1rem 1.25rem" } }, i$n = { color: "{primary.color}" }, s$7 = { width: "0.5rem" }, g$4 = { width: "1px", color: "{primary.color}" }, u$5 = { color: "{text.muted.color}", hoverColor: "{text.hover.muted.color}", size: "0.875rem" }, p$2 = { size: "2rem" }, b$2 = { hoverBackground: "{content.hover.background}", selectedHoverBackground: "{content.background}", color: "{text.muted.color}", hoverColor: "{text.color}", selectedHoverColor: "{primary.color}", size: "1.75rem", borderRadius: "50%", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, m$4 = { inlineGap: "0.5rem", overlaySelect: { background: "{overlay.select.background}", borderColor: "{overlay.select.border.color}", borderRadius: "{overlay.select.border.radius}", color: "{overlay.select.color}", shadow: "{overlay.select.shadow}" }, overlayPopover: { background: "{overlay.popover.background}", borderColor: "{overlay.popover.border.color}", borderRadius: "{overlay.popover.border.radius}", color: "{overlay.popover.color}", shadow: "{overlay.popover.shadow}", padding: "{overlay.popover.padding}", gap: "0.5rem" }, rule: { borderColor: "{content.border.color}" }, constraintList: { padding: "{list.padding}", gap: "{list.gap}" }, constraint: { focusBackground: "{list.option.focus.background}", selectedBackground: "{list.option.selected.background}", selectedFocusBackground: "{list.option.selected.focus.background}", color: "{list.option.color}", focusColor: "{list.option.focus.color}", selectedColor: "{list.option.selected.color}", selectedFocusColor: "{list.option.selected.focus.color}", separator: { borderColor: "{content.border.color}" }, padding: "{list.option.padding}", borderRadius: "{list.option.border.radius}" } }, h$3 = { borderColor: "{datatable.border.color}", borderWidth: "0 0 1px 0" }, f$7 = { borderColor: "{datatable.border.color}", borderWidth: "0 0 1px 0" }, v$1 = { light: { root: { borderColor: "{surface.300}" }, row: { stripedBackground: "{surface.50}" }, bodyCell: { selectedBorderColor: "{primary.100}" } }, dark: { root: { borderColor: "{surface.600}" }, row: { stripedBackground: "{surface.950}" }, bodyCell: { selectedBorderColor: "{primary.900}" } } }, k$2 = { root: o$15, header: r$12, headerCell: e$G, columnTitle: d$v, row: t$w, bodyCell: l$e, footerCell: c$i, columnFooter: n$v, footer: a$z, dropPoint: i$n, columnResizer: s$7, resizeIndicator: g$4, sortIcon: u$5, loadingIcon: p$2, rowToggleButton: b$2, filter: m$4, paginatorTop: h$3, paginatorBottom: f$7, colorScheme: v$1 };
var o$14 = { borderColor: "transparent", borderWidth: "0", borderRadius: "0", padding: "0" }, r$11 = { background: "{content.background}", color: "{content.color}", borderColor: "{content.border.color}", borderWidth: "0 0 1px 0", padding: "0.75rem 1rem", borderRadius: "0" }, d$u = { background: "{content.background}", color: "{content.color}", borderColor: "transparent", borderWidth: "0", padding: "0", borderRadius: "0" }, e$F = { background: "{content.background}", color: "{content.color}", borderColor: "{content.border.color}", borderWidth: "1px 0 0 0", padding: "0.75rem 1rem", borderRadius: "0" }, t$v = { borderColor: "{content.border.color}", borderWidth: "0 0 1px 0" }, n$u = { borderColor: "{content.border.color}", borderWidth: "1px 0 0 0" }, c$h = { root: o$14, header: r$11, content: d$u, footer: e$F, paginatorTop: t$v, paginatorBottom: n$u };
var o$13 = { transitionDuration: "{transition.duration}" }, r$10 = { background: "{content.background}", borderColor: "{content.border.color}", color: "{content.color}", borderRadius: "{content.border.radius}", shadow: "{overlay.popover.shadow}", padding: "{overlay.popover.padding}" }, e$E = { background: "{content.background}", borderColor: "{content.border.color}", color: "{content.color}", padding: "0 0 0.5rem 0" }, d$t = { gap: "0.5rem", fontWeight: "500" }, c$g = { width: "2.5rem", sm: { width: "2rem" }, lg: { width: "3rem" }, background: "{form.field.background}", color: "{form.field.icon.color}", hoverColor: "{form.field.icon.color}", activeColor: "{form.field.icon.color}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.border.color}", activeBorderColor: "{form.field.border.color}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, n$t = { color: "{form.field.icon.color}" }, t$u = { hoverBackground: "{content.hover.background}", color: "{content.color}", hoverColor: "{content.hover.color}", padding: "0.25rem 0.5rem", borderRadius: "{content.border.radius}" }, a$y = { hoverBackground: "{content.hover.background}", color: "{content.color}", hoverColor: "{content.hover.color}", padding: "0.25rem 0.5rem", borderRadius: "{content.border.radius}" }, i$m = { borderColor: "{content.border.color}", gap: "{overlay.popover.padding}" }, l$d = { margin: "0.5rem 0 0 0" }, g$3 = { padding: "0.25rem", fontWeight: "500", color: "{content.color}" }, u$4 = { hoverBackground: "{content.hover.background}", selectedBackground: "{primary.color}", rangeSelectedBackground: "{highlight.background}", color: "{content.color}", hoverColor: "{content.hover.color}", selectedColor: "{primary.contrast.color}", rangeSelectedColor: "{highlight.color}", width: "2rem", height: "2rem", borderRadius: "50%", padding: "0.25rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, s$6 = { margin: "0.5rem 0 0 0" }, f$6 = { padding: "0.375rem", borderRadius: "{content.border.radius}" }, h$2 = { margin: "0.5rem 0 0 0" }, b$1 = { padding: "0.375rem", borderRadius: "{content.border.radius}" }, m$3 = { padding: "0.5rem 0 0 0", borderColor: "{content.border.color}" }, p$1 = { padding: "0.5rem 0 0 0", borderColor: "{content.border.color}", gap: "0.5rem", buttonGap: "0.25rem" }, v = { light: { dropdown: { hoverBackground: "{surface.200}", activeBackground: "{surface.300}" }, today: { background: "{surface.200}", color: "{surface.900}" } }, dark: { dropdown: { hoverBackground: "{surface.700}", activeBackground: "{surface.600}" }, today: { background: "{surface.700}", color: "{surface.0}" } } }, k$1 = { root: o$13, panel: r$10, header: e$E, title: d$t, dropdown: c$g, inputIcon: n$t, selectMonth: t$u, selectYear: a$y, group: i$m, dayView: l$d, weekDay: g$3, date: u$4, monthView: s$6, month: f$6, yearView: h$2, year: b$1, buttonbar: m$3, timePicker: p$1, colorScheme: v };
var o$12 = { background: "{overlay.modal.background}", borderColor: "{overlay.modal.border.color}", color: "{overlay.modal.color}", borderRadius: "{overlay.modal.border.radius}", shadow: "{overlay.modal.shadow}" }, a$x = { padding: "{overlay.modal.padding}", gap: "0.5rem" }, d$s = { fontSize: "1.25rem", fontWeight: "700" }, r$$ = { padding: "0 {overlay.modal.padding} {overlay.modal.padding} {overlay.modal.padding}" }, l$c = { padding: "0 {overlay.modal.padding} {overlay.modal.padding} {overlay.modal.padding}", gap: "0.5rem" }, e$D = { root: o$12, header: a$x, title: d$s, content: r$$, footer: l$c };
var r$_ = { borderColor: "{content.border.color}" }, o$11 = { background: "{content.background}", color: "{text.color}" }, n$s = { margin: "1rem 0", padding: "0 1rem", content: { padding: "0 0.5rem" } }, e$C = { margin: "0 1rem", padding: "0.5rem 0", content: { padding: "0.5rem 0" } }, t$t = { root: r$_, content: o$11, horizontal: n$s, vertical: e$C };
var r$Z = { background: "rgba(255, 255, 255, 0.1)", borderColor: "rgba(255, 255, 255, 0.2)", padding: "0.5rem", borderRadius: "{border.radius.xl}" }, o$10 = { borderRadius: "{content.border.radius}", padding: "0.5rem", size: "3rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, d$r = { root: r$Z, item: o$10 };
var o$$ = { background: "{overlay.modal.background}", borderColor: "{overlay.modal.border.color}", color: "{overlay.modal.color}", shadow: "{overlay.modal.shadow}" }, a$w = { padding: "{overlay.modal.padding}" }, d$q = { fontSize: "1.5rem", fontWeight: "700" }, r$Y = { padding: "0 {overlay.modal.padding} {overlay.modal.padding} {overlay.modal.padding}" }, l$b = { padding: "{overlay.modal.padding}" }, e$B = { root: o$$, header: a$w, title: d$q, content: r$Y, footer: l$b };
var o$_ = { background: "{content.background}", borderColor: "{content.border.color}", borderRadius: "{content.border.radius}" }, r$X = { color: "{text.muted.color}", hoverColor: "{text.color}", activeColor: "{primary.color}" }, e$A = { background: "{overlay.select.background}", borderColor: "{overlay.select.border.color}", borderRadius: "{overlay.select.border.radius}", color: "{overlay.select.color}", shadow: "{overlay.select.shadow}", padding: "{list.padding}" }, t$s = { focusBackground: "{list.option.focus.background}", color: "{list.option.color}", focusColor: "{list.option.focus.color}", padding: "{list.option.padding}", borderRadius: "{list.option.border.radius}" }, d$p = { background: "{content.background}", borderColor: "{content.border.color}", color: "{content.color}", borderRadius: "{content.border.radius}" }, l$a = { toolbar: o$_, toolbarItem: r$X, overlay: e$A, overlayOption: t$s, content: d$p };
var o$Z = { background: "{content.background}", borderColor: "{content.border.color}", borderRadius: "{content.border.radius}", color: "{content.color}", padding: "0.75rem 1.125rem 1.125rem 1.125rem", transitionDuration: "{transition.duration}" }, r$W = { background: "{content.background}", hoverBackground: "{content.hover.background}", color: "{content.color}", hoverColor: "{content.hover.color}", borderRadius: "{content.border.radius}", borderWidth: "1px", borderColor: "{content.border.color}", padding: "0.5rem 0.75rem", gap: "0.5rem", fontWeight: "700", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, e$z = { color: "{text.muted.color}", hoverColor: "{text.hover.muted.color}" }, t$r = { padding: "0" }, n$r = { root: o$Z, legend: r$W, toggleIcon: e$z, content: t$r };
var r$V = { background: "{content.background}", borderColor: "{content.border.color}", color: "{content.color}", borderRadius: "{content.border.radius}", transitionDuration: "{transition.duration}" }, o$Y = { background: "transparent", color: "{text.color}", padding: "1.125rem", borderColor: "unset", borderWidth: "0", borderRadius: "0", gap: "0.5rem" }, e$y = { highlightBorderColor: "{primary.color}", padding: "0 1.125rem 1.125rem 1.125rem", gap: "1rem" }, t$q = { padding: "1rem", gap: "1rem", borderColor: "{content.border.color}", info: { gap: "0.5rem" } }, a$v = { gap: "0.5rem" }, n$q = { height: "0.25rem" }, d$o = { gap: "0.5rem" }, i$l = { root: r$V, header: o$Y, content: e$y, file: t$q, fileList: a$v, progressbar: n$q, basic: d$o };
var o$X = { color: "{form.field.float.label.color}", focusColor: "{form.field.float.label.focus.color}", activeColor: "{form.field.float.label.active.color}", invalidColor: "{form.field.float.label.invalid.color}", transitionDuration: "0.2s", positionX: "{form.field.padding.x}", positionY: "{form.field.padding.y}", fontWeight: "500", active: { fontSize: "0.75rem", fontWeight: "400" } }, i$k = { active: { top: "-1.25rem" } }, r$U = { input: { paddingTop: "1.5rem", paddingBottom: "{form.field.padding.y}" }, active: { top: "{form.field.padding.y}" } }, a$u = { borderRadius: "{border.radius.xs}", active: { background: "{form.field.background}", padding: "0 0.125rem" } }, d$n = { root: o$X, over: i$k, in: r$U, on: a$u };
var o$W = { borderWidth: "1px", borderColor: "{content.border.color}", borderRadius: "{content.border.radius}", transitionDuration: "{transition.duration}" }, r$T = { background: "rgba(255, 255, 255, 0.1)", hoverBackground: "rgba(255, 255, 255, 0.2)", color: "{surface.100}", hoverColor: "{surface.0}", size: "3rem", gutter: "0.5rem", prev: { borderRadius: "50%" }, next: { borderRadius: "50%" }, focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, t$p = { size: "1.5rem" }, e$x = { background: "{content.background}", padding: "1rem 0.25rem" }, c$f = { size: "2rem", borderRadius: "{content.border.radius}", gutter: "0.5rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, n$p = { size: "1rem" }, a$t = { background: "rgba(0, 0, 0, 0.5)", color: "{surface.100}", padding: "1rem" }, s$5 = { gap: "0.5rem", padding: "1rem" }, u$3 = { width: "1rem", height: "1rem", activeBackground: "{primary.color}", borderRadius: "50%", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, i$j = { background: "rgba(0, 0, 0, 0.5)" }, d$m = { background: "rgba(255, 255, 255, 0.4)", hoverBackground: "rgba(255, 255, 255, 0.6)", activeBackground: "rgba(255, 255, 255, 0.9)" }, g$2 = { size: "3rem", gutter: "0.5rem", background: "rgba(255, 255, 255, 0.1)", hoverBackground: "rgba(255, 255, 255, 0.2)", color: "{surface.50}", hoverColor: "{surface.0}", borderRadius: "50%", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, f$5 = { size: "1.5rem" }, l$9 = { light: { thumbnailNavButton: { hoverBackground: "{surface.200}", color: "{text.color}", hoverColor: "{text.hover.color}" }, indicatorButton: { background: "{surface.300}", hoverBackground: "{surface.400}" } }, dark: { thumbnailNavButton: { hoverBackground: "{surface.700}", color: "{surface.0}", hoverColor: "{surface.0}" }, indicatorButton: { background: "{surface.600}", hoverBackground: "{surface.500}" } } }, h$1 = { root: o$W, navButton: r$T, navIcon: t$p, thumbnailsContent: e$x, thumbnailNavButton: c$f, thumbnailNavButtonIcon: n$p, caption: a$t, indicatorList: s$5, indicatorButton: u$3, insetIndicatorList: i$j, insetIndicatorButton: d$m, closeButton: g$2, closeButtonIcon: f$5, colorScheme: l$9 };
var o$V = { color: "{form.field.icon.color}" }, r$S = { icon: o$V };
var o$U = { color: "{form.field.float.label.color}", focusColor: "{form.field.float.label.focus.color}", invalidColor: "{form.field.float.label.invalid.color}", transitionDuration: "0.2s", positionX: "{form.field.padding.x}", top: "{form.field.padding.y}", fontSize: "0.75rem", fontWeight: "400" }, l$8 = { paddingTop: "1.5rem", paddingBottom: "{form.field.padding.y}" }, i$i = { root: o$U, input: l$8 };
var o$T = { transitionDuration: "{transition.duration}" }, r$R = { icon: { size: "1.5rem" }, mask: { background: "{mask.background}", color: "{mask.color}" } }, a$s = { position: { left: "auto", right: "1rem", top: "1rem", bottom: "auto" }, blur: "8px", background: "rgba(255,255,255,0.1)", borderColor: "rgba(255,255,255,0.2)", borderWidth: "1px", borderRadius: "{content.border.radius}", padding: ".5rem", gap: "0.5rem" }, e$w = { hoverBackground: "rgba(255,255,255,0.1)", color: "{surface.50}", hoverColor: "{surface.0}", size: "3rem", iconSize: "1.5rem", borderRadius: "{content.border.radius}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, i$h = { root: o$T, preview: r$R, toolbar: a$s, action: e$w };
var r$Q = { size: "15px", hoverSize: "30px", background: "rgba(255,255,255,0.3)", hoverBackground: "rgba(255,255,255,0.3)", borderColor: "rgba(255,255,255,0.3)", hoverBorderColor: "rgba(255,255,255,0.3)", borderWidth: "3px", borderRadius: "{content.border.radius}", transitionDuration: "0.2s", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "rgba(255,255,255,0.3)", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, o$S = { handle: r$Q };
var o$R = { padding: "{form.field.padding.y} {form.field.padding.x}", borderRadius: "{content.border.radius}", gap: "0.5rem" }, r$P = { fontWeight: "700" }, e$v = { size: "1rem" }, d$l = { light: { info: { background: "{blue.800}", borderColor: "{blue.800}", color: "{blue.50}", shadow: "none" }, success: { background: "{green.800}", borderColor: "{green.800}", color: "{green.50}", shadow: "none" }, warn: { background: "{yellow.600}", borderColor: "{yellow.600}", color: "{yellow.50}", shadow: "none" }, error: { background: "{red.800}", borderColor: "{red.800}", color: "{red.50}", shadow: "none" }, secondary: { background: "{surface.200}", borderColor: "{surface.200}", color: "{surface.700}", shadow: "none" }, contrast: { background: "{surface.900}", borderColor: "{surface.900}", color: "{surface.50}", shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)" } }, dark: { info: { background: "{blue.200}", borderColor: "{blue.200}", color: "{blue.950}", shadow: "none" }, success: { background: "{green.200}", borderColor: "{green.200}", color: "{green.950}", shadow: "none" }, warn: { background: "{yellow.200}", borderColor: "{yellow.200}", color: "{yellow.950}", shadow: "none" }, error: { background: "{red.200}", borderColor: "{red.200}", color: "{red.950}", shadow: "none" }, secondary: { background: "{surface.700}", borderColor: "{surface.700}", color: "{surface.200}", shadow: "none" }, contrast: { background: "{surface.0}", borderColor: "{surface.0}", color: "{surface.950}", shadow: "none" } } }, n$o = { root: o$R, text: r$P, icon: e$v, colorScheme: d$l };
var o$Q = { padding: "{form.field.padding.y} {form.field.padding.x}", borderRadius: "{content.border.radius}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" }, transitionDuration: "{transition.duration}" }, r$O = { hoverBackground: "{content.hover.background}", hoverColor: "{content.hover.color}" }, n$n = { root: o$Q, display: r$O };
var o$P = { background: "{form.field.background}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", filledFocusBackground: "{form.field.filled.focus.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.focus.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", color: "{form.field.color}", disabledColor: "{form.field.disabled.color}", placeholderColor: "{form.field.placeholder.color}", shadow: "{form.field.shadow}", paddingX: "{form.field.padding.x}", paddingY: "{form.field.padding.y}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}" }, r$N = { borderRadius: "{border.radius.xs}" }, d$k = { light: { chip: { focusBackground: "{surface.300}", color: "{surface.900}" } }, dark: { chip: { focusBackground: "{surface.600}", color: "{surface.0}" } } }, f$4 = { root: o$P, chip: r$N, colorScheme: d$k };
var r$M = { background: "{form.field.background}", borderColor: "{form.field.border.color}", color: "{form.field.icon.color}", borderRadius: "{form.field.border.radius}", padding: "0.5rem", minWidth: "2.5rem" }, o$O = { addon: r$M };
var o$N = { transitionDuration: "{transition.duration}" }, r$L = { background: "transparent", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.border.color}", activeBorderColor: "{form.field.border.color}", color: "{form.field.icon.color}", hoverColor: "{form.field.icon.color}", activeColor: "{form.field.icon.color}", width: "2.5rem", borderRadius: "{form.field.border.radius}", verticalPadding: "{form.field.padding.y}" }, e$u = { light: { button: { hoverBackground: "{surface.200}", activeBackground: "{surface.300}" } }, dark: { button: { hoverBackground: "{surface.700}", activeBackground: "{surface.600}" } } }, d$j = { root: o$N, button: r$L, colorScheme: e$u };
var r$K = { gap: "0.5rem" }, t$o = { width: "2.5rem", sm: { width: "2rem" }, lg: { width: "3rem" } }, e$t = { root: r$K, input: t$o };
var o$M = { background: "{form.field.background}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", filledHoverBackground: "{form.field.filled.hover.background}", filledFocusBackground: "{form.field.filled.focus.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.focus.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", color: "{form.field.color}", disabledColor: "{form.field.disabled.color}", placeholderColor: "{form.field.placeholder.color}", invalidPlaceholderColor: "{form.field.invalid.placeholder.color}", shadow: "{form.field.shadow}", paddingX: "{form.field.padding.x}", paddingY: "{form.field.padding.y}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}", sm: { fontSize: "{form.field.sm.font.size}", paddingX: "{form.field.sm.padding.x}", paddingY: "{form.field.sm.padding.y}" }, lg: { fontSize: "{form.field.lg.font.size}", paddingX: "{form.field.lg.padding.x}", paddingY: "{form.field.lg.padding.y}" } }, d$i = { root: o$M };
var o$L = { transitionDuration: "{transition.duration}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, r$J = { background: "{primary.color}" }, t$n = { color: "{text.muted.color}" }, a$r = { light: { range: { background: "{surface.300}" } }, dark: { range: { background: "{surface.600}" } } }, c$e = { root: o$L, value: r$J, text: t$n, colorScheme: a$r };
var o$K = { background: "{form.field.background}", disabledBackground: "{form.field.disabled.background}", borderColor: "{form.field.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", color: "{form.field.color}", disabledColor: "{form.field.disabled.color}", shadow: "{form.field.shadow}", borderRadius: "{form.field.border.radius}", transitionDuration: "{form.field.transition.duration}" }, r$I = { padding: "{list.padding}", gap: "{list.gap}", header: { padding: "{list.header.padding}" } }, d$h = { focusBackground: "{list.option.focus.background}", selectedBackground: "{list.option.selected.background}", selectedFocusBackground: "{list.option.selected.focus.background}", color: "{list.option.color}", focusColor: "{list.option.focus.color}", selectedColor: "{list.option.selected.color}", selectedFocusColor: "{list.option.selected.focus.color}", padding: "{list.option.padding}", borderRadius: "{list.option.border.radius}" }, i$g = { background: "{list.option.group.background}", color: "{list.option.group.color}", fontWeight: "{list.option.group.font.weight}", padding: "{list.option.group.padding}" }, t$m = { color: "{list.option.color}", gutterStart: "-0.375rem", gutterEnd: "0.375rem" }, e$s = { padding: "{list.option.padding}" }, l$7 = { light: { option: { stripedBackground: "{surface.100}" } }, dark: { option: { stripedBackground: "{surface.800}" } } }, n$m = { root: o$K, list: r$I, option: d$h, optionGroup: i$g, checkmark: t$m, emptyMessage: e$s, colorScheme: l$7 };
var o$J = { background: "{content.background}", borderColor: "{content.border.color}", borderRadius: "{content.border.radius}", color: "{content.color}", gap: "0.5rem", verticalOrientation: { padding: "{navigation.list.padding}", gap: "{navigation.list.gap}" }, horizontalOrientation: { padding: "0.5rem 0.75rem", gap: "0.5rem" }, transitionDuration: "{transition.duration}" }, n$l = { borderRadius: "{content.border.radius}", padding: "{navigation.item.padding}" }, i$f = { focusBackground: "{navigation.item.focus.background}", activeBackground: "{navigation.item.active.background}", color: "{navigation.item.color}", focusColor: "{navigation.item.focus.color}", activeColor: "{navigation.item.active.color}", padding: "{navigation.item.padding}", borderRadius: "{navigation.item.border.radius}", gap: "{navigation.item.gap}", icon: { color: "{navigation.item.icon.color}", focusColor: "{navigation.item.icon.focus.color}", activeColor: "{navigation.item.icon.active.color}" } }, a$q = { padding: "0", background: "{content.background}", borderColor: "{content.border.color}", borderRadius: "{content.border.radius}", color: "{content.color}", shadow: "{overlay.navigation.shadow}", gap: "0.5rem" }, r$H = { padding: "{navigation.list.padding}", gap: "{navigation.list.gap}" }, t$l = { padding: "{navigation.submenu.label.padding}", fontWeight: "{navigation.submenu.label.font.weight}", background: "{navigation.submenu.label.background.}", color: "{navigation.submenu.label.color}" }, e$r = { size: "{navigation.submenu.icon.size}", color: "{navigation.submenu.icon.color}", focusColor: "{navigation.submenu.icon.focus.color}", activeColor: "{navigation.submenu.icon.active.color}" }, c$d = { borderColor: "{content.border.color}" }, d$g = { borderRadius: "50%", size: "1.75rem", color: "{text.muted.color}", hoverColor: "{text.hover.muted.color}", hoverBackground: "{content.hover.background}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, g$1 = { root: o$J, baseItem: n$l, item: i$f, overlay: a$q, submenu: r$H, submenuLabel: t$l, submenuIcon: e$r, separator: c$d, mobileButton: d$g };
var o$I = { background: "{content.background}", borderColor: "{content.border.color}", color: "{content.color}", borderRadius: "{content.border.radius}", shadow: "{overlay.navigation.shadow}", transitionDuration: "{transition.duration}" }, n$k = { padding: "{navigation.list.padding}", gap: "{navigation.list.gap}" }, a$p = { focusBackground: "{navigation.item.focus.background}", color: "{navigation.item.color}", focusColor: "{navigation.item.focus.color}", padding: "{navigation.item.padding}", borderRadius: "{navigation.item.border.radius}", gap: "{navigation.item.gap}", icon: { color: "{navigation.item.icon.color}", focusColor: "{navigation.item.icon.focus.color}" } }, i$e = { padding: "{navigation.submenu.label.padding}", fontWeight: "{navigation.submenu.label.font.weight}", background: "{navigation.submenu.label.background.}", color: "{navigation.submenu.label.color}" }, t$k = { borderColor: "{content.border.color}" }, r$G = { root: o$I, list: n$k, item: a$p, submenuLabel: i$e, separator: t$k };
var o$H = { background: "{content.background}", borderColor: "{content.border.color}", borderRadius: "{content.border.radius}", color: "{content.color}", gap: "0.5rem", padding: "0.5rem 0.75rem", transitionDuration: "{transition.duration}" }, i$d = { borderRadius: "{content.border.radius}", padding: "{navigation.item.padding}" }, n$j = { focusBackground: "{navigation.item.focus.background}", activeBackground: "{navigation.item.active.background}", color: "{navigation.item.color}", focusColor: "{navigation.item.focus.color}", activeColor: "{navigation.item.active.color}", padding: "{navigation.item.padding}", borderRadius: "{navigation.item.border.radius}", gap: "{navigation.item.gap}", icon: { color: "{navigation.item.icon.color}", focusColor: "{navigation.item.icon.focus.color}", activeColor: "{navigation.item.icon.active.color}" } }, r$F = { padding: "{navigation.list.padding}", gap: "{navigation.list.gap}", background: "{content.background}", borderColor: "{content.border.color}", borderRadius: "{content.border.radius}", shadow: "{overlay.navigation.shadow}", mobileIndent: "1rem", icon: { size: "{navigation.submenu.icon.size}", color: "{navigation.submenu.icon.color}", focusColor: "{navigation.submenu.icon.focus.color}", activeColor: "{navigation.submenu.icon.active.color}" } }, a$o = { borderColor: "{content.border.color}" }, t$j = { borderRadius: "50%", size: "1.75rem", color: "{text.muted.color}", hoverColor: "{text.hover.muted.color}", hoverBackground: "{content.hover.background}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, e$q = { root: o$H, baseItem: i$d, item: n$j, submenu: r$F, separator: a$o, mobileButton: t$j };
var o$G = { borderRadius: "{content.border.radius}", borderWidth: "1px", transitionDuration: "{transition.duration}" }, r$E = { padding: "0.5rem 0.75rem", gap: "0.5rem", sm: { padding: "0.375rem 0.625rem" }, lg: { padding: "0.625rem 0.875rem" } }, e$p = { fontSize: "1rem", fontWeight: "700", sm: { fontSize: "0.875rem" }, lg: { fontSize: "1.125rem" } }, l$6 = { size: "1.125rem", sm: { size: "1rem" }, lg: { size: "1.25rem" } }, n$i = { width: "1.75rem", height: "1.75rem", borderRadius: "50%", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", offset: "{focus.ring.offset}" } }, c$c = { size: "1rem", sm: { size: "0.875rem" }, lg: { size: "1.125rem" } }, s$4 = { root: { borderWidth: "1px" } }, d$f = { content: { padding: "0" } }, u$2 = { light: { info: { background: "{blue.800}", borderColor: "{blue.800}", color: "{blue.50}", shadow: "none", closeButton: { hoverBackground: "{blue.600}", focusRing: { color: "{blue.50}", shadow: "none" } }, outlined: { color: "{blue.800}", borderColor: "{blue.800}" }, simple: { color: "{blue.800}" } }, success: { background: "{green.800}", borderColor: "{green.800}", color: "{green.50}", shadow: "none", closeButton: { hoverBackground: "{green.600}", focusRing: { color: "{green.50}", shadow: "none" } }, outlined: { color: "{green.800}", borderColor: "{green.800}" }, simple: { color: "{green.800}" } }, warn: { background: "{yellow.600}", borderColor: "{yellow.600}", color: "{yellow.50}", shadow: "none", closeButton: { hoverBackground: "{yellow.400}", focusRing: { color: "{yellow.50}", shadow: "none" } }, outlined: { color: "{yellow.600}", borderColor: "{yellow.600}" }, simple: { color: "{yellow.600}" } }, error: { background: "{red.800}", borderColor: "{red.800}", color: "{red.50}", shadow: "none", closeButton: { hoverBackground: "{red.600}", focusRing: { color: "{red.50}", shadow: "none" } }, outlined: { color: "{red.800}", borderColor: "{red.800}" }, simple: { color: "{red.800}" } }, secondary: { background: "{surface.200}", borderColor: "{surface.200}", color: "{surface.700}", shadow: "none", closeButton: { hoverBackground: "{surface.50}", focusRing: { color: "{surface.700}", shadow: "none" } }, outlined: { color: "{surface.600}", borderColor: "{surface.600}" }, simple: { color: "{surface.600}" } }, contrast: { background: "{surface.900}", borderColor: "{surface.900}", color: "{surface.50}", shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)", closeButton: { hoverBackground: "{surface.700}", focusRing: { color: "{surface.50}", shadow: "none" } }, outlined: { color: "{surface.900}", borderColor: "{surface.900}" }, simple: { color: "{surface.900}" } } }, dark: { info: { background: "{blue.200}", borderColor: "{blue.200}", color: "{blue.950}", shadow: "none", closeButton: { hoverBackground: "{blue.50}", focusRing: { color: "{blue.950}", shadow: "none" } }, outlined: { color: "{blue.200}", borderColor: "{blue.200}" }, simple: { color: "{blue.200}" } }, success: { background: "{green.200}", borderColor: "{green.200}", color: "{green.950}", shadow: "none", closeButton: { hoverBackground: "{green.50}", focusRing: { color: "{green.950}", shadow: "none" } }, outlined: { color: "{green.200}", borderColor: "{green.200}" }, simple: { color: "{green.200}" } }, warn: { background: "{yellow.200}", borderColor: "{yellow.200}", color: "{yellow.950}", shadow: "none", closeButton: { hoverBackground: "{yellow.50}", focusRing: { color: "{yellow.950}", shadow: "none" } }, outlined: { color: "{yellow.200}", borderColor: "{yellow.200}" }, simple: { color: "{yellow.200}" } }, error: { background: "{red.200}", borderColor: "{red.200}", color: "{red.950}", shadow: "none", closeButton: { hoverBackground: "{red.50}", focusRing: { color: "{red.950}", shadow: "none" } }, outlined: { color: "{red.200}", borderColor: "{red.200}" }, simple: { color: "{red.200}" } }, secondary: { background: "{surface.700}", borderColor: "{surface.700}", color: "{surface.200}", shadow: "none", closeButton: { hoverBackground: "{surface.500}", focusRing: { color: "{surface.200}", shadow: "none" } }, outlined: { color: "{surface.400}", borderColor: "{surface.400}" }, simple: { color: "{surface.400}" } }, contrast: { background: "{surface.0}", borderColor: "{surface.0}", color: "{surface.950}", shadow: "none", closeButton: { hoverBackground: "{surface.200}", focusRing: { color: "{surface.950}", shadow: "none" } }, outlined: { color: "{surface.0}", borderColor: "{surface.0}" }, simple: { color: "{surface.0}" } } } }, a$n = { root: o$G, content: r$E, text: e$p, icon: l$6, closeButton: n$i, closeIcon: c$c, outlined: s$4, simple: d$f, colorScheme: u$2 };
var e$o = { borderRadius: "{content.border.radius}", gap: "1rem" }, r$D = { size: "0.5rem" }, a$m = { gap: "0.5rem" }, l$5 = { size: "0.5rem" }, o$F = { size: "1rem" }, s$3 = { verticalGap: "0.5rem", horizontalGap: "1rem" }, t$i = { light: { meters: { background: "{surface.300}" } }, dark: { meters: { background: "{surface.600}" } } }, m$2 = { root: e$o, meters: r$D, label: a$m, labelMarker: l$5, labelIcon: o$F, labelList: s$3, colorScheme: t$i };
var o$E = { background: "{form.field.background}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", filledHoverBackground: "{form.field.filled.hover.background}", filledFocusBackground: "{form.field.filled.focus.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.focus.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", color: "{form.field.color}", disabledColor: "{form.field.disabled.color}", placeholderColor: "{form.field.placeholder.color}", invalidPlaceholderColor: "{form.field.invalid.placeholder.color}", shadow: "{form.field.shadow}", paddingX: "{form.field.padding.x}", paddingY: "{form.field.padding.y}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}", sm: { fontSize: "{form.field.sm.font.size}", paddingX: "{form.field.sm.padding.x}", paddingY: "{form.field.sm.padding.y}" }, lg: { fontSize: "{form.field.lg.font.size}", paddingX: "{form.field.lg.padding.x}", paddingY: "{form.field.lg.padding.y}" } }, d$e = { width: "2.5rem", color: "{form.field.icon.color}" }, r$C = { background: "{overlay.select.background}", borderColor: "{overlay.select.border.color}", borderRadius: "{overlay.select.border.radius}", color: "{overlay.select.color}", shadow: "{overlay.select.shadow}" }, l$4 = { padding: "{list.padding}", gap: "{list.gap}", header: { padding: "{list.header.padding}" } }, i$c = { focusBackground: "{list.option.focus.background}", selectedBackground: "{list.option.selected.background}", selectedFocusBackground: "{list.option.selected.focus.background}", color: "{list.option.color}", focusColor: "{list.option.focus.color}", selectedColor: "{list.option.selected.color}", selectedFocusColor: "{list.option.selected.focus.color}", padding: "{list.option.padding}", borderRadius: "{list.option.border.radius}", gap: "0.5rem" }, e$n = { background: "{list.option.group.background}", color: "{list.option.group.color}", fontWeight: "{list.option.group.font.weight}", padding: "{list.option.group.padding}" }, f$3 = { color: "{form.field.icon.color}" }, a$l = { borderRadius: "{border.radius.xs}" }, c$b = { padding: "{list.option.padding}" }, n$h = { root: o$E, dropdown: d$e, overlay: r$C, list: l$4, option: i$c, optionGroup: e$n, chip: a$l, clearIcon: f$3, emptyMessage: c$b };
var r$B = { gap: "1.125rem" }, a$k = { gap: "0.5rem" }, o$D = { root: r$B, controls: a$k };
var o$C = { gutter: "0.75rem", transitionDuration: "{transition.duration}" }, r$A = { background: "{content.background}", hoverBackground: "{content.hover.background}", selectedBackground: "{highlight.background}", borderColor: "{content.border.color}", color: "{content.color}", selectedColor: "{highlight.color}", hoverColor: "{content.hover.color}", padding: "0.75rem 1rem", toggleablePadding: "0.75rem 1rem 1.25rem 1rem", borderRadius: "{content.border.radius}" }, e$m = { background: "{content.background}", hoverBackground: "{content.hover.background}", borderColor: "{content.border.color}", color: "{text.muted.color}", hoverColor: "{text.color}", size: "1.5rem", borderRadius: "50%", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, t$h = { color: "{content.border.color}", borderRadius: "{content.border.radius}", height: "24px" }, n$g = { root: o$C, node: r$A, nodeToggleButton: e$m, connector: t$h };
var o$B = { outline: { width: "2px", color: "{content.background}" } }, t$g = { root: o$B };
var o$A = { padding: "0.5rem 1rem", gap: "0.25rem", borderRadius: "{content.border.radius}", background: "{content.background}", color: "{content.color}", transitionDuration: "{transition.duration}" }, r$z = { background: "transparent", hoverBackground: "{content.hover.background}", selectedBackground: "{highlight.background}", color: "{text.muted.color}", hoverColor: "{text.hover.muted.color}", selectedColor: "{highlight.color}", width: "2.5rem", height: "2.5rem", borderRadius: "{content.border.radius}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, t$f = { color: "{text.muted.color}" }, e$l = { maxWidth: "2.5rem" }, n$f = { root: o$A, navButton: r$z, currentPageReport: t$f, jumpToPageInput: e$l };
var r$y = { background: "{content.background}", borderColor: "{content.border.color}", color: "{content.color}", borderRadius: "{content.border.radius}" }, o$z = { background: "transparent", color: "{text.color}", padding: "1.125rem", borderWidth: "0 0 1px 0", borderColor: "{content.border.color}", borderRadius: "0" }, e$k = { padding: "0.375rem 1.125rem" }, d$d = { fontWeight: "700" }, t$e = { padding: "1.125rem" }, n$e = { padding: "0 1.125rem 1.125rem 1.125rem" }, a$j = { root: r$y, header: o$z, toggleableHeader: e$k, title: d$d, content: t$e, footer: n$e };
var o$y = { gap: "0", transitionDuration: "{transition.duration}" }, r$x = { background: "{content.background}", borderColor: "{content.border.color}", borderWidth: "1px", color: "{content.color}", padding: "0.25rem 0.25rem", borderRadius: "0", first: { borderWidth: "1px 1px 0 1px", topBorderRadius: "{content.border.radius}" }, last: { borderWidth: "0 1px 1px 1px", bottomBorderRadius: "{content.border.radius}" } }, n$d = { focusBackground: "{navigation.item.focus.background}", color: "{navigation.item.color}", focusColor: "{navigation.item.focus.color}", gap: "0.5rem", padding: "{navigation.item.padding}", borderRadius: "{content.border.radius}", icon: { color: "{navigation.item.icon.color}", focusColor: "{navigation.item.icon.focus.color}" } }, i$b = { indent: "1rem" }, t$d = { color: "{navigation.submenu.icon.color}", focusColor: "{navigation.submenu.icon.focus.color}" }, a$i = { root: o$y, panel: r$x, item: n$d, submenu: i$b, submenuIcon: t$d };
var r$w = { borderRadius: "{content.border.radius}", height: ".75rem" }, o$x = { color: "{form.field.icon.color}" }, e$j = { background: "{overlay.popover.background}", borderColor: "{overlay.popover.border.color}", borderRadius: "{overlay.popover.border.radius}", color: "{overlay.popover.color}", padding: "{overlay.popover.padding}", shadow: "{overlay.popover.shadow}" }, a$h = { gap: "0.5rem" }, d$c = { light: { meter: { background: "{surface.300}" }, strength: { weakBackground: "{red.600}", mediumBackground: "{yellow.600}", strongBackground: "{green.600}" } }, dark: { meter: { background: "{surface.600}" }, strength: { weakBackground: "{red.500}", mediumBackground: "{yellow.500}", strongBackground: "{green.500}" } } }, n$c = { meter: r$w, icon: o$x, overlay: e$j, content: a$h, colorScheme: d$c };
var r$v = { gap: "1.125rem" }, a$g = { gap: "0.5rem" }, o$w = { root: r$v, controls: a$g };
var o$v = { background: "{overlay.popover.background}", borderColor: "{overlay.popover.border.color}", color: "{overlay.popover.color}", borderRadius: "{overlay.popover.border.radius}", shadow: "{overlay.popover.shadow}", gutter: "10px", arrowOffset: "1.25rem" }, r$u = { padding: "{overlay.popover.padding}" }, e$i = { root: o$v, content: r$u };
var r$t = { borderRadius: "{content.border.radius}", height: "1.25rem" }, o$u = { background: "{primary.color}" }, a$f = { color: "{primary.contrast.color}", fontSize: "0.75rem", fontWeight: "700" }, e$h = { light: { root: { background: "{surface.300}" } }, dark: { root: { background: "{surface.600}" } } }, t$c = { root: r$t, value: o$u, label: a$f, colorScheme: e$h };
var o$t = { light: { root: { colorOne: "{red.500}", colorTwo: "{blue.500}", colorThree: "{green.500}", colorFour: "{yellow.500}" } }, dark: { root: { colorOne: "{red.400}", colorTwo: "{blue.400}", colorThree: "{green.400}", colorFour: "{yellow.400}" } } }, r$s = { colorScheme: o$t };
var o$s = { width: "1.25rem", height: "1.25rem", background: "{form.field.background}", checkedBackground: "{form.field.background}", checkedHoverBackground: "{form.field.background}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.focus.border.color}", checkedBorderColor: "{form.field.border.color}", checkedHoverBorderColor: "{form.field.hover.border.color}", checkedFocusBorderColor: "{form.field.focus.border.color}", checkedDisabledBorderColor: "{form.field.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", shadow: "{form.field.shadow}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}", sm: { width: "1rem", height: "1rem" }, lg: { width: "1.5rem", height: "1.5rem" } }, r$r = { size: "0.75rem", checkedColor: "{primary.color}", checkedHoverColor: "{primary.color}", disabledColor: "{form.field.disabled.color}", sm: { size: "0.5rem" }, lg: { size: "1rem" } }, e$g = { root: o$s, icon: r$r };
var o$r = { gap: "0.25rem", transitionDuration: "{transition.duration}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, r$q = { size: "1rem", color: "{text.muted.color}", hoverColor: "{primary.color}", activeColor: "{primary.color}" }, i$a = { root: o$r, icon: r$q };
var r$p = { light: { root: { background: "rgba(0,0,0,0.1)" } }, dark: { root: { background: "rgba(255,255,255,0.4)" } } }, o$q = { colorScheme: r$p };
var r$o = { transitionDuration: "{transition.duration}" }, o$p = { size: "9px", borderRadius: "{border.radius.xs}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, s$2 = { light: { bar: { background: "{surface.200}" } }, dark: { bar: { background: "{surface.700}" } } }, a$e = { root: r$o, bar: o$p, colorScheme: s$2 };
var o$o = { background: "{form.field.background}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", filledHoverBackground: "{form.field.filled.hover.background}", filledFocusBackground: "{form.field.filled.focus.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.focus.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", color: "{form.field.color}", disabledColor: "{form.field.disabled.color}", placeholderColor: "{form.field.placeholder.color}", invalidPlaceholderColor: "{form.field.invalid.placeholder.color}", shadow: "{form.field.shadow}", paddingX: "{form.field.padding.x}", paddingY: "{form.field.padding.y}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}", sm: { fontSize: "{form.field.sm.font.size}", paddingX: "{form.field.sm.padding.x}", paddingY: "{form.field.sm.padding.y}" }, lg: { fontSize: "{form.field.lg.font.size}", paddingX: "{form.field.lg.padding.x}", paddingY: "{form.field.lg.padding.y}" } }, r$n = { width: "2.5rem", color: "{form.field.icon.color}" }, d$b = { background: "{overlay.select.background}", borderColor: "{overlay.select.border.color}", borderRadius: "{overlay.select.border.radius}", color: "{overlay.select.color}", shadow: "{overlay.select.shadow}" }, l$3 = { padding: "{list.padding}", gap: "{list.gap}", header: { padding: "{list.header.padding}" } }, i$9 = { focusBackground: "{list.option.focus.background}", selectedBackground: "{list.option.selected.background}", selectedFocusBackground: "{list.option.selected.focus.background}", color: "{list.option.color}", focusColor: "{list.option.focus.color}", selectedColor: "{list.option.selected.color}", selectedFocusColor: "{list.option.selected.focus.color}", padding: "{list.option.padding}", borderRadius: "{list.option.border.radius}" }, e$f = { background: "{list.option.group.background}", color: "{list.option.group.color}", fontWeight: "{list.option.group.font.weight}", padding: "{list.option.group.padding}" }, f$2 = { color: "{form.field.icon.color}" }, c$a = { color: "{list.option.color}", gutterStart: "-0.375rem", gutterEnd: "0.375rem" }, a$d = { padding: "{list.option.padding}" }, n$b = { root: o$o, dropdown: r$n, overlay: d$b, list: l$3, option: i$9, optionGroup: e$f, clearIcon: f$2, checkmark: c$a, emptyMessage: a$d };
var r$m = { borderRadius: "{form.field.border.radius}" }, o$n = { light: { root: { invalidBorderColor: "{form.field.invalid.border.color}" } }, dark: { root: { invalidBorderColor: "{form.field.invalid.border.color}" } } }, d$a = { root: r$m, colorScheme: o$n };
var r$l = { borderRadius: "{content.border.radius}" }, a$c = { light: { root: { background: "{surface.300}", animationBackground: "rgba(255,255,255,0.4)" } }, dark: { root: { background: "rgba(255, 255, 255, 0.1)", animationBackground: "rgba(255, 255, 255, 0.04)" } } }, o$m = { root: r$l, colorScheme: a$c };
var r$k = { transitionDuration: "{transition.duration}" }, o$l = { borderRadius: "{content.border.radius}", size: "3px" }, a$b = { background: "{primary.color}" }, c$9 = { width: "16px", height: "16px", borderRadius: "50%", background: "{primary.color}", hoverBackground: "{primary.color}", content: { borderRadius: "50%", background: "{primary.color}", hoverBackground: "{primary.color}", width: "12px", height: "12px", shadow: "none" }, focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, i$8 = { light: { track: { background: "{surface.300}" } }, dark: { track: { background: "{surface.600}" } } }, n$a = { root: r$k, track: o$l, range: a$b, handle: c$9, colorScheme: i$8 };
var t$b = { gap: "0.5rem", transitionDuration: "{transition.duration}" }, a$a = { root: t$b };
var r$j = { borderRadius: "{form.field.border.radius}", roundedBorderRadius: "2rem", raisedShadow: "0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12)" }, d$9 = { root: r$j };
var o$k = { background: "{content.background}", borderColor: "{content.border.color}", color: "{content.color}", transitionDuration: "{transition.duration}" }, r$i = { background: "{content.border.color}" }, n$9 = { size: "24px", background: "transparent", borderRadius: "{content.border.radius}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, t$a = { root: o$k, gutter: r$i, handle: n$9 };
var o$j = { transitionDuration: "{transition.duration}" }, r$h = { background: "{content.border.color}", activeBackground: "{primary.color}", margin: "0 0 0 1.625rem", size: "2px" }, e$e = { padding: "0.5rem", gap: "1rem" }, t$9 = { padding: "0", borderRadius: "{content.border.radius}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" }, gap: "0.5rem" }, n$8 = { color: "{text.muted.color}", activeColor: "{primary.color}", fontWeight: "700" }, a$9 = { background: "{content.background}", activeBackground: "{primary.color}", borderColor: "{content.border.color}", activeBorderColor: "{primary.color}", color: "{text.muted.color}", activeColor: "{primary.contrast.color}", size: "2rem", fontSize: "1.143rem", fontWeight: "500", borderRadius: "50%", shadow: "none" }, c$8 = { padding: "0.875rem 0.5rem 1.125rem 0.5rem" }, i$7 = { background: "{content.background}", color: "{content.color}", padding: "0", indent: "1rem" }, d$8 = { root: o$j, separator: r$h, step: e$e, stepHeader: t$9, stepTitle: n$8, stepNumber: a$9, steppanels: c$8, steppanel: i$7 };
var o$i = { transitionDuration: "{transition.duration}" }, r$g = { background: "{content.border.color}" }, t$8 = { borderRadius: "{content.border.radius}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" }, gap: "0.5rem" }, e$d = { color: "{text.muted.color}", activeColor: "{primary.color}", fontWeight: "700" }, i$6 = { background: "{content.background}", activeBackground: "{primary.color}", borderColor: "{content.border.color}", activeBorderColor: "{primary.color}", color: "{text.muted.color}", activeColor: "{primary.contrast.color}", size: "2rem", fontSize: "1.143rem", fontWeight: "500", borderRadius: "50%", shadow: "none" }, c$7 = { root: o$i, separator: r$g, itemLink: t$8, itemLabel: e$d, itemNumber: i$6 };
var o$h = { transitionDuration: "{transition.duration}" }, r$f = { borderWidth: "0 0 1px 0", background: "{content.background}", borderColor: "{content.border.color}" }, t$7 = { background: "{content.background}", hoverBackground: "{content.hover.background}", activeBackground: "{primary.color}", borderWidth: "0", borderColor: "transparent", hoverBorderColor: "transparent", activeBorderColor: "transparent", color: "{text.muted.color}", hoverColor: "{text.color}", activeColor: "{primary.contrast.color}", padding: "1rem 1.25rem", fontWeight: "700", margin: "0", gap: "0.5rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, e$c = { color: "{text.color}", hoverColor: "{text.color}", activeColor: "{primary.contrast.color}" }, n$7 = { height: "0", bottom: "0", background: "transparent" }, a$8 = { root: o$h, tablist: r$f, item: t$7, itemIcon: e$c, activeBar: n$7 };
var o$g = { transitionDuration: "{transition.duration}" }, r$e = { borderWidth: "0 0 1px 0", background: "{content.background}", borderColor: "{content.border.color}" }, t$6 = { background: "{content.background}", hoverBackground: "{content.hover.background}", activeBackground: "{primary.color}", borderWidth: "0", borderColor: "transparent", hoverBorderColor: "transparent", activeBorderColor: "transparent", color: "{text.muted.color}", hoverColor: "{text.color}", activeColor: "{primary.contrast.color}", padding: "1rem 1.25rem", fontWeight: "700", margin: "0", gap: "0.5rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "-2px", shadow: "{focus.ring.shadow}" } }, n$6 = { background: "{content.background}", color: "{content.color}", padding: "0.875rem 1.125rem 1.125rem 1.125rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "inset {focus.ring.shadow}" } }, c$6 = { background: "{content.background}", color: "{text.muted.color}", hoverColor: "{text.color}", width: "2.5rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "inset {focus.ring.shadow}" } }, e$b = { height: "0", bottom: "0", background: "transparent" }, a$7 = { light: { navButton: { shadow: "0px 0px 10px 50px rgba(255, 255, 255, 0.6)" } }, dark: { navButton: { shadow: "0px 0px 10px 50px color-mix(in srgb, {content.background}, transparent 50%)" } } }, i$5 = { root: o$g, tablist: r$e, tab: t$6, tabpanel: n$6, navButton: c$6, activeBar: e$b, colorScheme: a$7 };
var o$f = { transitionDuration: "{transition.duration}" }, r$d = { background: "{content.background}", borderColor: "{content.border.color}" }, t$5 = { borderColor: "{content.border.color}", activeBorderColor: "{primary.color}", color: "{text.muted.color}", hoverColor: "{text.color}", activeColor: "{primary.color}" }, n$5 = { background: "{content.background}", color: "{content.color}" }, a$6 = { background: "{content.background}", color: "{text.muted.color}", hoverColor: "{text.color}" }, c$5 = { light: { navButton: { shadow: "0px 0px 10px 50px rgba(255, 255, 255, 0.6)" } }, dark: { navButton: { shadow: "0px 0px 10px 50px color-mix(in srgb, {content.background}, transparent 50%)" } } }, e$a = { root: o$f, tabList: r$d, tab: t$5, tabPanel: n$5, navButton: a$6, colorScheme: c$5 };
var r$c = { fontSize: "0.875rem", fontWeight: "700", padding: "0.25rem 0.5rem", gap: "0.25rem", borderRadius: "{content.border.radius}", roundedBorderRadius: "{border.radius.xl}" }, o$e = { size: "0.75rem" }, c$4 = { light: { primary: { background: "{primary.color}", color: "{primary.contrast.color}" }, secondary: { background: "{surface.200}", color: "{surface.700}" }, success: { background: "{green.600}", color: "{surface.0}" }, info: { background: "{sky.600}", color: "{surface.0}" }, warn: { background: "{orange.600}", color: "{surface.0}" }, danger: { background: "{red.600}", color: "{surface.0}" }, contrast: { background: "{surface.950}", color: "{surface.0}" } }, dark: { primary: { background: "{primary.color}", color: "{primary.contrast.color}" }, secondary: { background: "{surface.700}", color: "{surface.200}" }, success: { background: "{green.500}", color: "{green.950}" }, info: { background: "{sky.500}", color: "{sky.950}" }, warn: { background: "{orange.500}", color: "{orange.950}" }, danger: { background: "{red.500}", color: "{red.950}" }, contrast: { background: "{surface.0}", color: "{surface.950}" } } }, a$5 = { root: r$c, icon: o$e, colorScheme: c$4 };
var r$b = { background: "{form.field.background}", borderColor: "{form.field.border.color}", color: "{form.field.color}", height: "18rem", padding: "{form.field.padding.y} {form.field.padding.x}", borderRadius: "{form.field.border.radius}" }, o$d = { gap: "0.25rem" }, d$7 = { margin: "2px 0" }, e$9 = { root: r$b, prompt: o$d, commandResponse: d$7 };
var o$c = { background: "{form.field.background}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", filledHoverBackground: "{form.field.filled.hover.background}", filledFocusBackground: "{form.field.filled.focus.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.focus.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", color: "{form.field.color}", disabledColor: "{form.field.disabled.color}", placeholderColor: "{form.field.placeholder.color}", invalidPlaceholderColor: "{form.field.invalid.placeholder.color}", shadow: "{form.field.shadow}", paddingX: "{form.field.padding.x}", paddingY: "{form.field.padding.y}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}", sm: { fontSize: "{form.field.sm.font.size}", paddingX: "{form.field.sm.padding.x}", paddingY: "{form.field.sm.padding.y}" }, lg: { fontSize: "{form.field.lg.font.size}", paddingX: "{form.field.lg.padding.x}", paddingY: "{form.field.lg.padding.y}" } }, d$6 = { root: o$c };
var o$b = { background: "{content.background}", borderColor: "{content.border.color}", color: "{content.color}", borderRadius: "{content.border.radius}", shadow: "{overlay.navigation.shadow}", transitionDuration: "{transition.duration}" }, i$4 = { padding: "{navigation.list.padding}", gap: "{navigation.list.gap}" }, n$4 = { focusBackground: "{navigation.item.focus.background}", activeBackground: "{navigation.item.active.background}", color: "{navigation.item.color}", focusColor: "{navigation.item.focus.color}", activeColor: "{navigation.item.active.color}", padding: "{navigation.item.padding}", borderRadius: "{navigation.item.border.radius}", gap: "{navigation.item.gap}", icon: { color: "{navigation.item.icon.color}", focusColor: "{navigation.item.icon.focus.color}", activeColor: "{navigation.item.icon.active.color}" } }, a$4 = { mobileIndent: "1rem" }, t$4 = { size: "{navigation.submenu.icon.size}", color: "{navigation.submenu.icon.color}", focusColor: "{navigation.submenu.icon.focus.color}", activeColor: "{navigation.submenu.icon.active.color}" }, r$a = { borderColor: "{content.border.color}" }, c$3 = { root: o$b, list: i$4, item: n$4, submenu: a$4, submenuIcon: t$4, separator: r$a };
var e$8 = { minHeight: "5rem" }, r$9 = { eventContent: { padding: "1rem 0" } }, o$a = { eventContent: { padding: "0 1rem" } }, n$3 = { size: "1.125rem", borderRadius: "50%", borderWidth: "2px", background: "{primary.color}", borderColor: "{primary.color}", content: { borderRadius: "50%", size: "0.375rem", background: "transparent", insetShadow: "none" } }, t$3 = { color: "{content.border.color}", size: "2px" }, a$3 = { event: e$8, horizontal: r$9, vertical: o$a, eventMarker: n$3, eventConnector: t$3 };
var o$9 = { width: "25rem", borderRadius: "{content.border.radius}", borderWidth: "0 0 0 6px", transitionDuration: "{transition.duration}", blur: "0" }, r$8 = { size: "1.125rem" }, e$7 = { padding: "{overlay.popover.padding}", gap: "0.5rem" }, a$2 = { gap: "0.5rem" }, l$2 = { fontWeight: "700", fontSize: "1rem" }, c$2 = { fontWeight: "500", fontSize: "0.875rem" }, n$2 = { width: "1.75rem", height: "1.75rem", borderRadius: "50%", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", offset: "{focus.ring.offset}" } }, d$5 = { size: "1rem" }, s$1 = { light: { info: { background: "{blue.800}", borderColor: "{blue.800}", color: "{blue.50}", detailColor: "{blue.50}", shadow: "{overlay.popover.shadow}", closeButton: { hoverBackground: "{blue.600}", focusRing: { color: "{blue.50}", shadow: "none" } } }, success: { background: "{green.800}", borderColor: "{green.800}", color: "{green.50}", detailColor: "{green.50}", shadow: "{overlay.popover.shadow}", closeButton: { hoverBackground: "{green.600}", focusRing: { color: "{green.50}", shadow: "none" } } }, warn: { background: "{yellow.600}", borderColor: "{yellow.600}", color: "{yellow.50}", detailColor: "{yellow.50}", shadow: "{overlay.popover.shadow}", closeButton: { hoverBackground: "{yellow.400}", focusRing: { color: "{yellow.50}", shadow: "none" } } }, error: { background: "{red.800}", borderColor: "{red.800}", color: "{red.50}", detailColor: "{red.50}", shadow: "{overlay.popover.shadow}", closeButton: { hoverBackground: "{red.600}", focusRing: { color: "{red.50}", shadow: "none" } } }, secondary: { background: "{surface.200}", borderColor: "{surface.200}", color: "{surface.700}", detailColor: "{surface.700}", shadow: "{overlay.popover.shadow}", closeButton: { hoverBackground: "{surface.50}", focusRing: { color: "{surface.700}", shadow: "none" } } }, contrast: { background: "{surface.900}", borderColor: "{surface.900}", color: "{surface.50}", detailColor: "{surface.0}", shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)", closeButton: { hoverBackground: "{surface.700}", focusRing: { color: "{surface.50}", shadow: "none" } } } }, dark: { info: { background: "{blue.200}", borderColor: "{blue.200}", color: "{blue.950}", detailColor: "{blue.950}", shadow: "{overlay.popover.shadow}", closeButton: { hoverBackground: "{blue.50}", focusRing: { color: "{blue.950}", shadow: "none" } } }, success: { background: "{green.200}", borderColor: "{green.200}", color: "{green.950}", detailColor: "{green.950}", shadow: "{overlay.popover.shadow}", closeButton: { hoverBackground: "{green.50}", focusRing: { color: "{green.950}", shadow: "none" } } }, warn: { background: "{yellow.200}", borderColor: "{yellow.200}", color: "{yellow.950}", detailColor: "{yellow.950}", shadow: "{overlay.popover.shadow}", closeButton: { hoverBackground: "{yellow.50}", focusRing: { color: "{yellow.950}", shadow: "none" } } }, error: { background: "{red.200}", borderColor: "{red.200}", color: "{red.950}", detailColor: "{red.950}", shadow: "{overlay.popover.shadow}", closeButton: { hoverBackground: "{red.50}", focusRing: { color: "{red.950}", shadow: "none" } } }, secondary: { background: "{surface.700}", borderColor: "{surface.700}", color: "{surface.200}", detailColor: "{surface.200}", shadow: "{overlay.popover.shadow}", closeButton: { hoverBackground: "{surface.500}", focusRing: { color: "{surface.200}", shadow: "none" } } }, contrast: { background: "{surface.0}", borderColor: "{surface.0}", color: "{surface.950}", detailColor: "{surface.950}", shadow: "{overlay.popover.shadow}", closeButton: { hoverBackground: "{surface.200}", focusRing: { color: "{surface.950}", shadow: "none" } } } } }, u$1 = { root: o$9, icon: r$8, content: e$7, text: a$2, summary: l$2, detail: c$2, closeButton: n$2, closeIcon: d$5, colorScheme: s$1 };
var o$8 = { padding: "0.5rem 0.75rem", borderRadius: "{content.border.radius}", gap: "0.5rem", fontWeight: "500", background: "{form.field.background}", borderColor: "{form.field.border.color}", color: "{form.field.color}", hoverColor: "{form.field.color}", checkedBackground: "{highlight.background}", checkedColor: "{highlight.color}", checkedBorderColor: "{form.field.border.color}", disabledBackground: "{form.field.disabled.background}", disabledBorderColor: "{form.field.disabled.background}", disabledColor: "{form.field.disabled.color}", invalidBorderColor: "{form.field.invalid.border.color}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}", sm: { fontSize: "{form.field.sm.font.size}", padding: "0.375rem 0.625rem" }, lg: { fontSize: "{form.field.lg.font.size}", padding: "0.625rem 0.875rem" } }, r$7 = { color: "{text.muted.color}", hoverColor: "{text.muted.color}", checkedColor: "{highlight.color}", disabledColor: "{form.field.disabled.color}" }, d$4 = { checkedBackground: "transparent", checkedShadow: "none", padding: "0", borderRadius: "0", sm: { padding: "0" }, lg: { padding: "0" } }, e$6 = { light: { root: { hoverBackground: "{surface.200}" } }, dark: { root: { hoverBackground: "{surface.700}" } } }, i$3 = { root: o$8, icon: r$7, content: d$4, colorScheme: e$6 };
var r$6 = { width: "2.5rem", height: "1.5rem", borderRadius: "30px", gap: "0.25rem", shadow: "{form.field.shadow}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" }, borderWidth: "1px", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.border.color}", checkedBorderColor: "{primary.color}", checkedHoverBorderColor: "{primary.color}", invalidBorderColor: "{form.field.invalid.border.color}", background: "{form.field.background}", hoverBackground: "{form.field.background}", checkedBackground: "{primary.color}", checkedHoverBackground: "{primary.color}", transitionDuration: "{form.field.transition.duration}", slideDuration: "0.1s", disabledBackground: "{form.field.disabled.background}" }, o$7 = { borderRadius: "50%", size: "1rem", background: "{form.field.border.color}", hoverBackground: "{form.field.border.color}", checkedBackground: "{primary.contrast.color}", checkedHoverBackground: "{primary.contrast.color}", disabledBackground: "{form.field.disabled.color}", color: "{surface.0}", hoverColor: "{surface.0}", checkedColor: "{primary.color}", checkedHoverColor: "{primary.color}" }, d$3 = { root: r$6, handle: o$7 };
var o$6 = { background: "{content.background}", borderColor: "{content.border.color}", borderRadius: "{content.border.radius}", color: "{content.color}", gap: "0.5rem", padding: "0.75rem" }, r$5 = { root: o$6 };
var r$4 = { maxWidth: "12.5rem", gutter: "0.25rem", shadow: "{overlay.popover.shadow}", padding: "0.5rem 0.75rem", borderRadius: "{overlay.popover.border.radius}" }, o$5 = { light: { root: { background: "{surface.900}", color: "{surface.0}" } }, dark: { root: { background: "{surface.0}", color: "{surface.900}" } } }, e$5 = { root: r$4, colorScheme: o$5 };
var o$4 = { background: "{content.background}", color: "{content.color}", padding: "1rem", gap: "2px", indent: "1rem", transitionDuration: "{transition.duration}" }, r$3 = { padding: "0.25rem 0.5rem", borderRadius: "{content.border.radius}", hoverBackground: "{content.hover.background}", selectedBackground: "{highlight.background}", color: "{text.color}", hoverColor: "{text.hover.color}", selectedColor: "{highlight.color}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "-2px", shadow: "{focus.ring.shadow}" }, gap: "0.25rem" }, e$4 = { color: "{text.muted.color}", hoverColor: "{text.hover.muted.color}", selectedColor: "{highlight.color}" }, t$2 = { borderRadius: "50%", size: "1.75rem", hoverBackground: "{content.hover.background}", selectedHoverBackground: "{content.background}", color: "{text.muted.color}", hoverColor: "{text.hover.muted.color}", selectedHoverColor: "{primary.color}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, c$1 = { size: "2rem" }, n$1 = { margin: "0 0 0.5rem 0" }, d$2 = { root: o$4, node: r$3, nodeIcon: e$4, nodeToggleButton: t$2, loadingIcon: c$1, filter: n$1 };
var o$3 = { background: "{form.field.background}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", filledHoverBackground: "{form.field.filled.hover.background}", filledFocusBackground: "{form.field.filled.focus.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.focus.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", color: "{form.field.color}", disabledColor: "{form.field.disabled.color}", placeholderColor: "{form.field.placeholder.color}", invalidPlaceholderColor: "{form.field.invalid.placeholder.color}", shadow: "{form.field.shadow}", paddingX: "{form.field.padding.x}", paddingY: "{form.field.padding.y}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}", sm: { fontSize: "{form.field.sm.font.size}", paddingX: "{form.field.sm.padding.x}", paddingY: "{form.field.sm.padding.y}" }, lg: { fontSize: "{form.field.lg.font.size}", paddingX: "{form.field.lg.padding.x}", paddingY: "{form.field.lg.padding.y}" } }, r$2 = { width: "2.5rem", color: "{form.field.icon.color}" }, d$1 = { background: "{overlay.select.background}", borderColor: "{overlay.select.border.color}", borderRadius: "{overlay.select.border.radius}", color: "{overlay.select.color}", shadow: "{overlay.select.shadow}" }, l$1 = { padding: "{list.padding}" }, e$3 = { padding: "{list.option.padding}" }, i$2 = { borderRadius: "{border.radius.sm}" }, f$1 = { color: "{form.field.icon.color}" }, a$1 = { root: o$3, dropdown: r$2, overlay: d$1, tree: l$1, emptyMessage: e$3, chip: i$2, clearIcon: f$1 };
var o$2 = { transitionDuration: "{transition.duration}" }, r$1 = { background: "{content.background}", borderColor: "{treetable.border.color}", color: "{content.color}", borderWidth: "1px 0 1px 0", padding: "0.75rem 1rem" }, e$2 = { background: "{content.background}", hoverBackground: "{content.hover.background}", selectedBackground: "{highlight.background}", borderColor: "{treetable.border.color}", color: "{content.color}", hoverColor: "{content.hover.color}", selectedColor: "{highlight.color}", gap: "0.5rem", padding: "0.75rem 1rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "-1px", shadow: "{focus.ring.shadow}" } }, t$1 = { fontWeight: "700" }, c = { background: "{content.background}", hoverBackground: "{content.hover.background}", selectedBackground: "{highlight.background}", color: "{content.color}", hoverColor: "{content.hover.color}", selectedColor: "{highlight.color}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "-1px", shadow: "{focus.ring.shadow}" } }, n = { borderColor: "{treetable.border.color}", padding: "0.75rem 1rem", gap: "0.5rem" }, d = { background: "{content.background}", borderColor: "{treetable.border.color}", color: "{content.color}", padding: "0.75rem 1rem" }, l = { fontWeight: "700" }, i$1 = { background: "{content.background}", borderColor: "{treetable.border.color}", color: "{content.color}", borderWidth: "0 0 1px 0", padding: "0.75rem 1rem" }, a = { width: "0.5rem" }, g = { width: "1px", color: "{primary.color}" }, s = { color: "{text.muted.color}", hoverColor: "{text.hover.muted.color}", size: "0.875rem" }, u = { size: "2rem" }, h = { hoverBackground: "{content.hover.background}", selectedHoverBackground: "{content.background}", color: "{text.muted.color}", hoverColor: "{text.color}", selectedHoverColor: "{primary.color}", size: "1.75rem", borderRadius: "50%", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } }, b = { borderColor: "{content.border.color}", borderWidth: "0 0 1px 0" }, f = { borderColor: "{content.border.color}", borderWidth: "0 0 1px 0" }, m$1 = { light: { root: { borderColor: "{surface.300}" }, bodyCell: { selectedBorderColor: "{primary.100}" } }, dark: { root: { borderColor: "{surface.600}" }, bodyCell: { selectedBorderColor: "{primary.900}" } } }, k = { root: o$2, header: r$1, headerCell: e$2, columnTitle: t$1, row: c, bodyCell: n, footerCell: d, columnFooter: l, footer: i$1, columnResizer: a, resizeIndicator: g, sortIcon: s, loadingIcon: u, nodeToggleButton: h, paginatorTop: b, paginatorBottom: f, colorScheme: m$1 };
var o$1 = { mask: { background: "{content.background}", color: "{text.muted.color}" }, icon: { size: "2rem" } }, e$1 = { loader: o$1 };
var r = Object.defineProperty, e = Object.defineProperties, m = Object.getOwnPropertyDescriptors, o = Object.getOwnPropertySymbols, i = Object.prototype.hasOwnProperty, t = Object.prototype.propertyIsEnumerable, p = (e2, m2, o2) => m2 in e2 ? r(e2, m2, { enumerable: true, configurable: true, writable: true, value: o2 }) : e2[m2] = o2;
var Nr, Qr = (Nr = ((r2, e2) => {
  for (var m2 in e2 || (e2 = {})) i.call(e2, m2) && p(r2, m2, e2[m2]);
  if (o) for (var m2 of o(e2)) t.call(e2, m2) && p(r2, m2, e2[m2]);
  return r2;
})({}, e$P), e(Nr, m({ components: { accordion: c$o, autocomplete: a$G, avatar: n$y, badge: d$y, blockui: o$1h, breadcrumb: i$s, button: e$O, datepicker: k$1, card: d$x, carousel: t$y, cascadeselect: f$8, checkbox: e$L, chip: s$9, colorpicker: s$8, confirmdialog: r$15, confirmpopup: a$B, contextmenu: c$j, dataview: c$h, datatable: k$2, dialog: e$D, divider: t$t, dock: d$r, drawer: e$B, editor: l$a, fieldset: n$r, fileupload: i$l, iftalabel: i$i, floatlabel: d$n, galleria: h$1, iconfield: r$S, image: i$h, imagecompare: o$S, inlinemessage: n$o, inplace: n$n, inputchips: f$4, inputgroup: o$O, inputnumber: d$j, inputotp: e$t, inputtext: d$i, knob: c$e, listbox: n$m, megamenu: g$1, menu: r$G, menubar: e$q, message: a$n, metergroup: m$2, multiselect: n$h, orderlist: o$D, organizationchart: n$g, overlaybadge: t$g, popover: e$i, paginator: n$f, password: n$c, panel: a$j, panelmenu: a$i, picklist: o$w, progressbar: t$c, progressspinner: r$s, radiobutton: e$g, rating: i$a, ripple: o$q, scrollpanel: a$e, select: n$b, selectbutton: d$a, skeleton: o$m, slider: n$a, speeddial: a$a, splitter: t$a, splitbutton: d$9, stepper: d$8, steps: c$7, tabmenu: a$8, tabs: i$5, tabview: e$a, textarea: d$6, tieredmenu: c$3, tag: a$5, terminal: e$9, timeline: a$3, togglebutton: i$3, toggleswitch: d$3, tree: d$2, treeselect: a$1, treetable: k, toast: u$1, toolbar: r$5, tooltip: e$5, virtualscroller: e$1 } })));
export {
  At as A,
  BaseStyle as B,
  C,
  D,
  ErrorBox as E,
  F$1 as F,
  HighlightJS as H,
  I,
  K$1 as K,
  M,
  O,
  PrimeVue as P,
  Qr as Q,
  R,
  S$1 as S,
  Tt as T,
  U$1 as U,
  W,
  Yt as Y,
  g$5 as a,
  b$4 as b,
  c$q as c,
  a$H as d,
  s$c as e,
  tt as f,
  g$6 as g,
  PrimeVueService as h,
  i$v as i,
  Q$1 as j,
  Rt as k,
  l$h as l,
  m$5 as m,
  v$4 as n,
  o$1n as o,
  p$4 as p,
  et$1 as q,
  bt as r,
  s$b as s,
  t$D as t,
  k$3 as u,
  v$3 as v,
  c$p as w,
  yaml as y,
  z$1 as z
};
