import { d as defineComponent, c as createElementBlock, h as createTextVNode, a as createBaseVNode, t as toDisplayString, o as openBlock, n as resolveComponent, i as createVNode, q as useId, s as mergeProps, g as createCommentVNode, x as renderSlot, b as createBlock, y as resolveDynamicComponent, T as Teleport, F as Fragment, r as renderList, z as resolveDirective, A as normalizeStyle, B as normalizeClass, m as withCtx, C as Transition, D as createSlots, k as withDirectives, e as useModel, f as ref, v as vscodeApi, u as unref } from "./vscode.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.js";
import { A as At, m, B as BaseStyle, p, b, s as s$1, g as g$1, F, R, a as g$2, l, z, c, d as a, e as s$2, f as tt, v, i, h as PrimeVueService, j as Q, O, T as Tt, k as Rt, n as v$1, C, K, W, U, q as et, M, r as bt, u as k, Y as Yt, I, D, S, w as c$1 } from "./index2.js";
function textIsOnlyLineNumber(input) {
  return /^\d*[.]?[ ]?$/.test(input);
}
function digitsInNumber(number) {
  return Math.abs(number).toString().length;
}
function countNewlinesBeforePosition(text, position) {
  return (text.slice(0, position).match(/\n/g) || []).length;
}
function getStringBetweenNewlines(text, position) {
  const start = text.lastIndexOf("\n", position - 1) + 1;
  const end = text.indexOf("\n", position);
  return text.slice(start, end === -1 ? text.length : end);
}
function shouldRemoveLine(lineText, numDigits) {
  return textIsOnlyLineNumber(lineText) && lineText.length > 0 && lineText.length < numDigits + 2;
}
function removeLine(textField, originalPosition, previousNewLineIndex) {
  const nextNewLineIndex = textField.value.indexOf("\n", originalPosition);
  const beforeLine = textField.value.substring(0, previousNewLineIndex);
  const afterLine = nextNewLineIndex > 0 ? textField.value.substring(nextNewLineIndex) : "";
  textField.value = beforeLine + afterLine;
}
function reapplyLineNumbers(textField) {
  textField.value = textField.value.split("\n").map((line, idx) => `${idx + 1}. ${line.replace(/^\d+[.]?[\s]?/, "")}`).join("\n");
}
function calculateNewCursorPosition(text, originalPosition, previousNewLineIndex, numDigits) {
  if (text[originalPosition - 1] === "\n") {
    return originalPosition + numDigits + 2;
  } else if (originalPosition - previousNewLineIndex < numDigits + 3) {
    return previousNewLineIndex + numDigits + 3;
  }
  return originalPosition;
}
var WizardGenerationActionType = /* @__PURE__ */ ((WizardGenerationActionType2) => {
  WizardGenerationActionType2[WizardGenerationActionType2["OPEN"] = 0] = "OPEN";
  WizardGenerationActionType2[WizardGenerationActionType2["CLOSE_CANCEL"] = 1] = "CLOSE_CANCEL";
  WizardGenerationActionType2[WizardGenerationActionType2["TRANSITION"] = 2] = "TRANSITION";
  WizardGenerationActionType2[WizardGenerationActionType2["CLOSE_ACCEPT"] = 3] = "CLOSE_ACCEPT";
  return WizardGenerationActionType2;
})(WizardGenerationActionType || {});
var LightSpeedCommands;
((LightSpeedCommands2) => {
  LightSpeedCommands2.LIGHTSPEED_AUTH_REQUEST = "ansible.lightspeed.oauth";
  LightSpeedCommands2.LIGHTSPEED_SUGGESTION_COMMIT = "ansible.lightspeed.inlineSuggest.accept";
  LightSpeedCommands2.LIGHTSPEED_SUGGESTION_HIDE = "ansible.lightspeed.inlineSuggest.hide";
  LightSpeedCommands2.LIGHTSPEED_SUGGESTION_TRIGGER = "ansible.lightspeed.inlineSuggest.trigger";
  LightSpeedCommands2.LIGHTSPEED_SUGGESTION_MARKER = "ansible.lightspeed.inlineSuggest.marker";
  LightSpeedCommands2.LIGHTSPEED_STATUS_BAR_CLICK = "ansible.lightspeed.statusBar.click";
  LightSpeedCommands2.LIGHTSPEED_FETCH_TRAINING_MATCHES = "ansible.lightspeed.fetchTrainingMatches";
  LightSpeedCommands2.LIGHTSPEED_CLEAR_TRAINING_MATCHES = "ansible.lightspeed.clearTrainingMatches";
  LightSpeedCommands2.LIGHTSPEED_FEEDBACK = "ansible.lightspeed.feedback";
  LightSpeedCommands2.LIGHTSPEED_PLAYBOOK_EXPLANATION = "ansible.lightspeed.playbookExplanation";
  LightSpeedCommands2.LIGHTSPEED_PLAYBOOK_GENERATION = "ansible.lightspeed.playbookGeneration";
  LightSpeedCommands2.LIGHTSPEED_ROLE_GENERATION = "ansible.lightspeed.roleGeneration";
  LightSpeedCommands2.LIGHTSPEED_ROLE_EXPLANATION = "ansible.lightspeed.roleExplanation";
  LightSpeedCommands2.LIGHTSPEED_SIGN_IN_WITH_REDHAT = "ansible.lightspeed.signInWithRedHat";
  LightSpeedCommands2.LIGHTSPEED_SIGN_IN_WITH_LIGHTSPEED = "ansible.lightspeed.signInWithLightspeed";
  LightSpeedCommands2.LIGHTSPEED_OPEN_TRIAL_PAGE = "ansible.lightspeed.openTrialPage";
  LightSpeedCommands2.LIGHTSPEED_REFRESH_EXPLORER_VIEW = "ansible.lightspeed.explorer.refresh";
})(LightSpeedCommands || (LightSpeedCommands = {}));
const _hoisted_1$8 = { id: "prompt" };
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "StatusBoxPrompt",
  props: {
    prompt: {}
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", null, [
        _cache[1] || (_cache[1] = createTextVNode(' "')),
        createBaseVNode("span", _hoisted_1$8, toDisplayString(_ctx.prompt), 1),
        _cache[2] || (_cache[2] = createTextVNode('"  ')),
        createBaseVNode("a", {
          class: "backAnchor",
          id: "backAnchorPrompt",
          onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("restartWizard"))
        }, "Edit")
      ]);
    };
  }
});
const _hoisted_1$7 = ["rows", "value"];
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "OutlineReview",
  props: {
    outline: {},
    type: {}
  },
  emits: ["outlineUpdate"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    function outlineWithLineNumber() {
      const textField = document.querySelector("#outline-field");
      if (!textField) return;
      const originalPosition = textField.selectionStart || 0;
      const newLinesBeforePosition = countNewlinesBeforePosition(textField.value, originalPosition);
      const numDigits = digitsInNumber(newLinesBeforePosition + 1);
      const lineText = getStringBetweenNewlines(textField.value, originalPosition);
      const previousNewLineIndex = textField.value.lastIndexOf("\n", originalPosition - 1);
      if (shouldRemoveLine(lineText, numDigits)) {
        removeLine(textField, originalPosition, previousNewLineIndex);
      }
      reapplyLineNumbers(textField);
      const newCursorPosition = calculateNewCursorPosition(
        textField.value,
        originalPosition,
        previousNewLineIndex,
        numDigits
      );
      textField.setSelectionRange(newCursorPosition, newCursorPosition);
      emit("outlineUpdate", textField.value);
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", null, [
        createBaseVNode("h4", null, "Review the suggested steps for your " + toDisplayString(_ctx.type) + " and modify as needed.", 1),
        createBaseVNode("textarea", {
          id: "outline-field",
          rows: _ctx.outline.split("\n").length + 2,
          cols: 70,
          value: _ctx.outline.toString(),
          onInput: outlineWithLineNumber
        }, null, 40, _hoisted_1$7)
      ]);
    };
  }
});
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "GeneratedFileEntry",
  props: {
    file: {}
  },
  setup(__props) {
    return (_ctx, _cache) => {
      const _component_highlightjs = resolveComponent("highlightjs");
      return openBlock(), createElementBlock("li", null, [
        createTextVNode(toDisplayString(_ctx.file.path) + " ", 1),
        createVNode(_component_highlightjs, {
          language: "yaml",
          autodetect: false,
          code: _ctx.file.content
        }, null, 8, ["code"])
      ]);
    };
  }
});
function f(...e) {
  if (e) {
    let t2 = [];
    for (let i2 = 0; i2 < e.length; i2++) {
      let n = e[i2];
      if (!n) continue;
      let s2 = typeof n;
      if (s2 === "string" || s2 === "number") t2.push(n);
      else if (s2 === "object") {
        let c2 = Array.isArray(n) ? [f(...n)] : Object.entries(n).map(([r, o]) => o ? r : void 0);
        t2 = c2.length ? t2.concat(c2.filter((r) => !!r)) : t2;
      }
    }
    return t2.join(" ").trim();
  }
}
var t = {};
function s(n = "pui_id_") {
  return Object.hasOwn(t, n) || (t[n] = 0), t[n]++, `${n}${t[n]}`;
}
function g() {
  let r = [], i2 = (e, n, t2 = 999) => {
    let s2 = u(e, n, t2), o = s2.value + (s2.key === e ? 0 : t2) + 1;
    return r.push({ key: e, value: o }), o;
  }, d = (e) => {
    r = r.filter((n) => n.value !== e);
  }, a2 = (e, n) => u(e).value, u = (e, n, t2 = 0) => [...r].reverse().find((s2) => true) || { key: e, value: t2 }, l2 = (e) => e && parseInt(e.style.zIndex, 10) || 0;
  return { get: l2, set: (e, n, t2) => {
    n && (n.style.zIndex = String(i2(e, true, t2)));
  }, clear: (e) => {
    e && (d(l2(e)), e.style.zIndex = "");
  }, getCurrent: (e) => a2(e) };
}
var x = g();
function _typeof$1$1(o) {
  "@babel/helpers - typeof";
  return _typeof$1$1 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof$1$1(o);
}
function _classCallCheck$1(a2, n) {
  if (!(a2 instanceof n)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties$1(e, r) {
  for (var t2 = 0; t2 < r.length; t2++) {
    var o = r[t2];
    o.enumerable = o.enumerable || false, o.configurable = true, "value" in o && (o.writable = true), Object.defineProperty(e, _toPropertyKey$1$1(o.key), o);
  }
}
function _createClass$1(e, r, t2) {
  return r && _defineProperties$1(e.prototype, r), Object.defineProperty(e, "prototype", { writable: false }), e;
}
function _toPropertyKey$1$1(t2) {
  var i2 = _toPrimitive$1$1(t2, "string");
  return "symbol" == _typeof$1$1(i2) ? i2 : i2 + "";
}
function _toPrimitive$1$1(t2, r) {
  if ("object" != _typeof$1$1(t2) || !t2) return t2;
  var e = t2[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i2 = e.call(t2, r);
    if ("object" != _typeof$1$1(i2)) return i2;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(t2);
}
var ConnectedOverlayScrollHandler = /* @__PURE__ */ function() {
  function ConnectedOverlayScrollHandler2(element) {
    var listener = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : function() {
    };
    _classCallCheck$1(this, ConnectedOverlayScrollHandler2);
    this.element = element;
    this.listener = listener;
  }
  return _createClass$1(ConnectedOverlayScrollHandler2, [{
    key: "bindScrollListener",
    value: function bindScrollListener2() {
      this.scrollableParents = At(this.element);
      for (var i2 = 0; i2 < this.scrollableParents.length; i2++) {
        this.scrollableParents[i2].addEventListener("scroll", this.listener);
      }
    }
  }, {
    key: "unbindScrollListener",
    value: function unbindScrollListener2() {
      if (this.scrollableParents) {
        for (var i2 = 0; i2 < this.scrollableParents.length; i2++) {
          this.scrollableParents[i2].removeEventListener("scroll", this.listener);
        }
      }
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.unbindScrollListener();
      this.element = null;
      this.listener = null;
      this.scrollableParents = null;
    }
  }]);
}();
var Base = {
  _loadedStyleNames: /* @__PURE__ */ new Set(),
  getLoadedStyleNames: function getLoadedStyleNames() {
    return this._loadedStyleNames;
  },
  isStyleNameLoaded: function isStyleNameLoaded(name) {
    return this._loadedStyleNames.has(name);
  },
  setLoadedStyleName: function setLoadedStyleName(name) {
    this._loadedStyleNames.add(name);
  },
  deleteLoadedStyleName: function deleteLoadedStyleName(name) {
    this._loadedStyleNames["delete"](name);
  },
  clearLoadedStyleNames: function clearLoadedStyleNames() {
    this._loadedStyleNames.clear();
  }
};
function useAttrSelector() {
  var prefix = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "pc";
  var idx = useId();
  return "".concat(prefix).concat(idx.replace("v-", "").replaceAll("-", "_"));
}
var BaseComponentStyle = BaseStyle.extend({
  name: "common"
});
function _typeof$7(o) {
  "@babel/helpers - typeof";
  return _typeof$7 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof$7(o);
}
function _toArray(r) {
  return _arrayWithHoles$1(r) || _iterableToArray$2(r) || _unsupportedIterableToArray$3(r) || _nonIterableRest$1();
}
function _iterableToArray$2(r) {
  if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r);
}
function _slicedToArray$1(r, e) {
  return _arrayWithHoles$1(r) || _iterableToArrayLimit$1(r, e) || _unsupportedIterableToArray$3(r, e) || _nonIterableRest$1();
}
function _nonIterableRest$1() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray$3(r, a2) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray$3(r, a2);
    var t2 = {}.toString.call(r).slice(8, -1);
    return "Object" === t2 && r.constructor && (t2 = r.constructor.name), "Map" === t2 || "Set" === t2 ? Array.from(r) : "Arguments" === t2 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t2) ? _arrayLikeToArray$3(r, a2) : void 0;
  }
}
function _arrayLikeToArray$3(r, a2) {
  (null == a2 || a2 > r.length) && (a2 = r.length);
  for (var e = 0, n = Array(a2); e < a2; e++) n[e] = r[e];
  return n;
}
function _iterableToArrayLimit$1(r, l2) {
  var t2 = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t2) {
    var e, n, i2, u, a2 = [], f2 = true, o = false;
    try {
      if (i2 = (t2 = t2.call(r)).next, 0 === l2) {
        if (Object(t2) !== t2) return;
        f2 = false;
      } else for (; !(f2 = (e = i2.call(t2)).done) && (a2.push(e.value), a2.length !== l2); f2 = true) ;
    } catch (r2) {
      o = true, n = r2;
    } finally {
      try {
        if (!f2 && null != t2["return"] && (u = t2["return"](), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a2;
  }
}
function _arrayWithHoles$1(r) {
  if (Array.isArray(r)) return r;
}
function ownKeys$4(e, r) {
  var t2 = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t2.push.apply(t2, o);
  }
  return t2;
}
function _objectSpread$4(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t2 = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys$4(Object(t2), true).forEach(function(r2) {
      _defineProperty$7(e, r2, t2[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t2)) : ownKeys$4(Object(t2)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t2, r2));
    });
  }
  return e;
}
function _defineProperty$7(e, r, t2) {
  return (r = _toPropertyKey$7(r)) in e ? Object.defineProperty(e, r, { value: t2, enumerable: true, configurable: true, writable: true }) : e[r] = t2, e;
}
function _toPropertyKey$7(t2) {
  var i2 = _toPrimitive$7(t2, "string");
  return "symbol" == _typeof$7(i2) ? i2 : i2 + "";
}
function _toPrimitive$7(t2, r) {
  if ("object" != _typeof$7(t2) || !t2) return t2;
  var e = t2[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i2 = e.call(t2, r);
    if ("object" != _typeof$7(i2)) return i2;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t2);
}
var script$d = {
  name: "BaseComponent",
  props: {
    pt: {
      type: Object,
      "default": void 0
    },
    ptOptions: {
      type: Object,
      "default": void 0
    },
    unstyled: {
      type: Boolean,
      "default": void 0
    },
    dt: {
      type: Object,
      "default": void 0
    }
  },
  inject: {
    $parentInstance: {
      "default": void 0
    }
  },
  watch: {
    isUnstyled: {
      immediate: true,
      handler: function handler(newValue) {
        R.off("theme:change", this._loadCoreStyles);
        if (!newValue) {
          this._loadCoreStyles();
          this._themeChangeListener(this._loadCoreStyles);
        }
      }
    },
    dt: {
      immediate: true,
      handler: function handler2(newValue, oldValue) {
        var _this = this;
        R.off("theme:change", this._themeScopedListener);
        if (newValue) {
          this._loadScopedThemeStyles(newValue);
          this._themeScopedListener = function() {
            return _this._loadScopedThemeStyles(newValue);
          };
          this._themeChangeListener(this._themeScopedListener);
        } else {
          this._unloadScopedThemeStyles();
        }
      }
    }
  },
  scopedStyleEl: void 0,
  rootEl: void 0,
  uid: void 0,
  $attrSelector: void 0,
  beforeCreate: function beforeCreate() {
    var _this$pt, _this$pt2, _this$pt3, _ref, _ref$onBeforeCreate, _this$$primevueConfig, _this$$primevue, _this$$primevue2, _this$$primevue3, _ref2, _ref2$onBeforeCreate;
    var _usept = (_this$pt = this.pt) === null || _this$pt === void 0 ? void 0 : _this$pt["_usept"];
    var originalValue = _usept ? (_this$pt2 = this.pt) === null || _this$pt2 === void 0 || (_this$pt2 = _this$pt2.originalValue) === null || _this$pt2 === void 0 ? void 0 : _this$pt2[this.$.type.name] : void 0;
    var value = _usept ? (_this$pt3 = this.pt) === null || _this$pt3 === void 0 || (_this$pt3 = _this$pt3.value) === null || _this$pt3 === void 0 ? void 0 : _this$pt3[this.$.type.name] : this.pt;
    (_ref = value || originalValue) === null || _ref === void 0 || (_ref = _ref.hooks) === null || _ref === void 0 || (_ref$onBeforeCreate = _ref["onBeforeCreate"]) === null || _ref$onBeforeCreate === void 0 || _ref$onBeforeCreate.call(_ref);
    var _useptInConfig = (_this$$primevueConfig = this.$primevueConfig) === null || _this$$primevueConfig === void 0 || (_this$$primevueConfig = _this$$primevueConfig.pt) === null || _this$$primevueConfig === void 0 ? void 0 : _this$$primevueConfig["_usept"];
    var originalValueInConfig = _useptInConfig ? (_this$$primevue = this.$primevue) === null || _this$$primevue === void 0 || (_this$$primevue = _this$$primevue.config) === null || _this$$primevue === void 0 || (_this$$primevue = _this$$primevue.pt) === null || _this$$primevue === void 0 ? void 0 : _this$$primevue.originalValue : void 0;
    var valueInConfig = _useptInConfig ? (_this$$primevue2 = this.$primevue) === null || _this$$primevue2 === void 0 || (_this$$primevue2 = _this$$primevue2.config) === null || _this$$primevue2 === void 0 || (_this$$primevue2 = _this$$primevue2.pt) === null || _this$$primevue2 === void 0 ? void 0 : _this$$primevue2.value : (_this$$primevue3 = this.$primevue) === null || _this$$primevue3 === void 0 || (_this$$primevue3 = _this$$primevue3.config) === null || _this$$primevue3 === void 0 ? void 0 : _this$$primevue3.pt;
    (_ref2 = valueInConfig || originalValueInConfig) === null || _ref2 === void 0 || (_ref2 = _ref2[this.$.type.name]) === null || _ref2 === void 0 || (_ref2 = _ref2.hooks) === null || _ref2 === void 0 || (_ref2$onBeforeCreate = _ref2["onBeforeCreate"]) === null || _ref2$onBeforeCreate === void 0 || _ref2$onBeforeCreate.call(_ref2);
    this.$attrSelector = useAttrSelector();
    this.uid = this.$attrs.id || this.$attrSelector.replace("pc", "pv_id_");
  },
  created: function created() {
    this._hook("onCreated");
  },
  beforeMount: function beforeMount() {
    var _this$$el;
    this.rootEl = z(c(this.$el) ? this.$el : (_this$$el = this.$el) === null || _this$$el === void 0 ? void 0 : _this$$el.parentElement, "[".concat(this.$attrSelector, "]"));
    if (this.rootEl) {
      this.rootEl.$pc = _objectSpread$4({
        name: this.$.type.name,
        attrSelector: this.$attrSelector
      }, this.$params);
    }
    this._loadStyles();
    this._hook("onBeforeMount");
  },
  mounted: function mounted() {
    this._hook("onMounted");
  },
  beforeUpdate: function beforeUpdate() {
    this._hook("onBeforeUpdate");
  },
  updated: function updated() {
    this._hook("onUpdated");
  },
  beforeUnmount: function beforeUnmount() {
    this._hook("onBeforeUnmount");
  },
  unmounted: function unmounted() {
    this._removeThemeListeners();
    this._unloadScopedThemeStyles();
    this._hook("onUnmounted");
  },
  methods: {
    _hook: function _hook(hookName) {
      if (!this.$options.hostName) {
        var selfHook = this._usePT(this._getPT(this.pt, this.$.type.name), this._getOptionValue, "hooks.".concat(hookName));
        var defaultHook = this._useDefaultPT(this._getOptionValue, "hooks.".concat(hookName));
        selfHook === null || selfHook === void 0 || selfHook();
        defaultHook === null || defaultHook === void 0 || defaultHook();
      }
    },
    _mergeProps: function _mergeProps(fn) {
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key2 = 1; _key2 < _len; _key2++) {
        args[_key2 - 1] = arguments[_key2];
      }
      return l(fn) ? fn.apply(void 0, args) : mergeProps.apply(void 0, args);
    },
    _load: function _load() {
      if (!Base.isStyleNameLoaded("base")) {
        BaseStyle.loadCSS(this.$styleOptions);
        this._loadGlobalStyles();
        Base.setLoadedStyleName("base");
      }
      this._loadThemeStyles();
    },
    _loadStyles: function _loadStyles() {
      this._load();
      this._themeChangeListener(this._load);
    },
    _loadCoreStyles: function _loadCoreStyles() {
      var _this$$style, _this$$style2;
      if (!Base.isStyleNameLoaded((_this$$style = this.$style) === null || _this$$style === void 0 ? void 0 : _this$$style.name) && (_this$$style2 = this.$style) !== null && _this$$style2 !== void 0 && _this$$style2.name) {
        BaseComponentStyle.loadCSS(this.$styleOptions);
        this.$options.style && this.$style.loadCSS(this.$styleOptions);
        Base.setLoadedStyleName(this.$style.name);
      }
    },
    _loadGlobalStyles: function _loadGlobalStyles() {
      var globalCSS = this._useGlobalPT(this._getOptionValue, "global.css", this.$params);
      s$1(globalCSS) && BaseStyle.load(globalCSS, _objectSpread$4({
        name: "global"
      }, this.$styleOptions));
    },
    _loadThemeStyles: function _loadThemeStyles() {
      var _this$$style4, _this$$style5;
      if (this.isUnstyled || this.$theme === "none") return;
      if (!g$2.isStyleNameLoaded("common")) {
        var _this$$style3, _this$$style3$getComm;
        var _ref3 = ((_this$$style3 = this.$style) === null || _this$$style3 === void 0 || (_this$$style3$getComm = _this$$style3.getCommonTheme) === null || _this$$style3$getComm === void 0 ? void 0 : _this$$style3$getComm.call(_this$$style3)) || {}, primitive = _ref3.primitive, semantic = _ref3.semantic, global = _ref3.global, style2 = _ref3.style;
        BaseStyle.load(primitive === null || primitive === void 0 ? void 0 : primitive.css, _objectSpread$4({
          name: "primitive-variables"
        }, this.$styleOptions));
        BaseStyle.load(semantic === null || semantic === void 0 ? void 0 : semantic.css, _objectSpread$4({
          name: "semantic-variables"
        }, this.$styleOptions));
        BaseStyle.load(global === null || global === void 0 ? void 0 : global.css, _objectSpread$4({
          name: "global-variables"
        }, this.$styleOptions));
        BaseStyle.loadStyle(_objectSpread$4({
          name: "global-style"
        }, this.$styleOptions), style2);
        g$2.setLoadedStyleName("common");
      }
      if (!g$2.isStyleNameLoaded((_this$$style4 = this.$style) === null || _this$$style4 === void 0 ? void 0 : _this$$style4.name) && (_this$$style5 = this.$style) !== null && _this$$style5 !== void 0 && _this$$style5.name) {
        var _this$$style6, _this$$style6$getComp, _this$$style7, _this$$style8;
        var _ref4 = ((_this$$style6 = this.$style) === null || _this$$style6 === void 0 || (_this$$style6$getComp = _this$$style6.getComponentTheme) === null || _this$$style6$getComp === void 0 ? void 0 : _this$$style6$getComp.call(_this$$style6)) || {}, css2 = _ref4.css, _style = _ref4.style;
        (_this$$style7 = this.$style) === null || _this$$style7 === void 0 || _this$$style7.load(css2, _objectSpread$4({
          name: "".concat(this.$style.name, "-variables")
        }, this.$styleOptions));
        (_this$$style8 = this.$style) === null || _this$$style8 === void 0 || _this$$style8.loadStyle(_objectSpread$4({
          name: "".concat(this.$style.name, "-style")
        }, this.$styleOptions), _style);
        g$2.setLoadedStyleName(this.$style.name);
      }
      if (!g$2.isStyleNameLoaded("layer-order")) {
        var _this$$style9, _this$$style9$getLaye;
        var layerOrder = (_this$$style9 = this.$style) === null || _this$$style9 === void 0 || (_this$$style9$getLaye = _this$$style9.getLayerOrderThemeCSS) === null || _this$$style9$getLaye === void 0 ? void 0 : _this$$style9$getLaye.call(_this$$style9);
        BaseStyle.load(layerOrder, _objectSpread$4({
          name: "layer-order",
          first: true
        }, this.$styleOptions));
        g$2.setLoadedStyleName("layer-order");
      }
    },
    _loadScopedThemeStyles: function _loadScopedThemeStyles(preset) {
      var _this$$style0, _this$$style0$getPres, _this$$style1;
      var _ref5 = ((_this$$style0 = this.$style) === null || _this$$style0 === void 0 || (_this$$style0$getPres = _this$$style0.getPresetTheme) === null || _this$$style0$getPres === void 0 ? void 0 : _this$$style0$getPres.call(_this$$style0, preset, "[".concat(this.$attrSelector, "]"))) || {}, css2 = _ref5.css;
      var scopedStyle = (_this$$style1 = this.$style) === null || _this$$style1 === void 0 ? void 0 : _this$$style1.load(css2, _objectSpread$4({
        name: "".concat(this.$attrSelector, "-").concat(this.$style.name)
      }, this.$styleOptions));
      this.scopedStyleEl = scopedStyle.el;
    },
    _unloadScopedThemeStyles: function _unloadScopedThemeStyles() {
      var _this$scopedStyleEl;
      (_this$scopedStyleEl = this.scopedStyleEl) === null || _this$scopedStyleEl === void 0 || (_this$scopedStyleEl = _this$scopedStyleEl.value) === null || _this$scopedStyleEl === void 0 || _this$scopedStyleEl.remove();
    },
    _themeChangeListener: function _themeChangeListener() {
      var callback = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : function() {
      };
      Base.clearLoadedStyleNames();
      R.on("theme:change", callback);
    },
    _removeThemeListeners: function _removeThemeListeners() {
      R.off("theme:change", this._loadCoreStyles);
      R.off("theme:change", this._load);
      R.off("theme:change", this._themeScopedListener);
    },
    _getHostInstance: function _getHostInstance(instance) {
      return instance ? this.$options.hostName ? instance.$.type.name === this.$options.hostName ? instance : this._getHostInstance(instance.$parentInstance) : instance.$parentInstance : void 0;
    },
    _getPropValue: function _getPropValue(name) {
      var _this$_getHostInstanc;
      return this[name] || ((_this$_getHostInstanc = this._getHostInstance(this)) === null || _this$_getHostInstanc === void 0 ? void 0 : _this$_getHostInstanc[name]);
    },
    _getOptionValue: function _getOptionValue(options) {
      var key = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
      var params = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      return F(options, key, params);
    },
    _getPTValue: function _getPTValue() {
      var _this$$primevueConfig2;
      var obj = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      var key = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
      var params = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      var searchInDefaultPT = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : true;
      var searchOut = /./g.test(key) && !!params[key.split(".")[0]];
      var _ref6 = this._getPropValue("ptOptions") || ((_this$$primevueConfig2 = this.$primevueConfig) === null || _this$$primevueConfig2 === void 0 ? void 0 : _this$$primevueConfig2.ptOptions) || {}, _ref6$mergeSections = _ref6.mergeSections, mergeSections = _ref6$mergeSections === void 0 ? true : _ref6$mergeSections, _ref6$mergeProps = _ref6.mergeProps, useMergeProps = _ref6$mergeProps === void 0 ? false : _ref6$mergeProps;
      var global = searchInDefaultPT ? searchOut ? this._useGlobalPT(this._getPTClassValue, key, params) : this._useDefaultPT(this._getPTClassValue, key, params) : void 0;
      var self = searchOut ? void 0 : this._getPTSelf(obj, this._getPTClassValue, key, _objectSpread$4(_objectSpread$4({}, params), {}, {
        global: global || {}
      }));
      var datasets = this._getPTDatasets(key);
      return mergeSections || !mergeSections && self ? useMergeProps ? this._mergeProps(useMergeProps, global, self, datasets) : _objectSpread$4(_objectSpread$4(_objectSpread$4({}, global), self), datasets) : _objectSpread$4(_objectSpread$4({}, self), datasets);
    },
    _getPTSelf: function _getPTSelf() {
      var obj = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key3 = 1; _key3 < _len2; _key3++) {
        args[_key3 - 1] = arguments[_key3];
      }
      return mergeProps(
        this._usePT.apply(this, [this._getPT(obj, this.$name)].concat(args)),
        // Exp; <component :pt="{}"
        this._usePT.apply(this, [this.$_attrsPT].concat(args))
        // Exp; <component :pt:[passthrough_key]:[attribute]="{value}" or <component :pt:[passthrough_key]="() =>{value}"
      );
    },
    _getPTDatasets: function _getPTDatasets() {
      var _this$pt4, _this$pt5;
      var key = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
      var datasetPrefix = "data-pc-";
      var isExtended = key === "root" && s$1((_this$pt4 = this.pt) === null || _this$pt4 === void 0 ? void 0 : _this$pt4["data-pc-section"]);
      return key !== "transition" && _objectSpread$4(_objectSpread$4({}, key === "root" && _objectSpread$4(_objectSpread$4(_defineProperty$7({}, "".concat(datasetPrefix, "name"), g$1(isExtended ? (_this$pt5 = this.pt) === null || _this$pt5 === void 0 ? void 0 : _this$pt5["data-pc-section"] : this.$.type.name)), isExtended && _defineProperty$7({}, "".concat(datasetPrefix, "extend"), g$1(this.$.type.name))), {}, _defineProperty$7({}, "".concat(this.$attrSelector), ""))), {}, _defineProperty$7({}, "".concat(datasetPrefix, "section"), g$1(key)));
    },
    _getPTClassValue: function _getPTClassValue() {
      var value = this._getOptionValue.apply(this, arguments);
      return p(value) || b(value) ? {
        "class": value
      } : value;
    },
    _getPT: function _getPT(pt) {
      var _this2 = this;
      var key = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
      var callback = arguments.length > 2 ? arguments[2] : void 0;
      var getValue = function getValue2(value) {
        var _ref8;
        var checkSameKey = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
        var computedValue = callback ? callback(value) : value;
        var _key = g$1(key);
        var _cKey = g$1(_this2.$name);
        return (_ref8 = checkSameKey ? _key !== _cKey ? computedValue === null || computedValue === void 0 ? void 0 : computedValue[_key] : void 0 : computedValue === null || computedValue === void 0 ? void 0 : computedValue[_key]) !== null && _ref8 !== void 0 ? _ref8 : computedValue;
      };
      return pt !== null && pt !== void 0 && pt.hasOwnProperty("_usept") ? {
        _usept: pt["_usept"],
        originalValue: getValue(pt.originalValue),
        value: getValue(pt.value)
      } : getValue(pt, true);
    },
    _usePT: function _usePT(pt, callback, key, params) {
      var fn = function fn2(value2) {
        return callback(value2, key, params);
      };
      if (pt !== null && pt !== void 0 && pt.hasOwnProperty("_usept")) {
        var _this$$primevueConfig3;
        var _ref9 = pt["_usept"] || ((_this$$primevueConfig3 = this.$primevueConfig) === null || _this$$primevueConfig3 === void 0 ? void 0 : _this$$primevueConfig3.ptOptions) || {}, _ref9$mergeSections = _ref9.mergeSections, mergeSections = _ref9$mergeSections === void 0 ? true : _ref9$mergeSections, _ref9$mergeProps = _ref9.mergeProps, useMergeProps = _ref9$mergeProps === void 0 ? false : _ref9$mergeProps;
        var originalValue = fn(pt.originalValue);
        var value = fn(pt.value);
        if (originalValue === void 0 && value === void 0) return void 0;
        else if (p(value)) return value;
        else if (p(originalValue)) return originalValue;
        return mergeSections || !mergeSections && value ? useMergeProps ? this._mergeProps(useMergeProps, originalValue, value) : _objectSpread$4(_objectSpread$4({}, originalValue), value) : value;
      }
      return fn(pt);
    },
    _useGlobalPT: function _useGlobalPT(callback, key, params) {
      return this._usePT(this.globalPT, callback, key, params);
    },
    _useDefaultPT: function _useDefaultPT(callback, key, params) {
      return this._usePT(this.defaultPT, callback, key, params);
    },
    ptm: function ptm() {
      var key = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
      var params = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      return this._getPTValue(this.pt, key, _objectSpread$4(_objectSpread$4({}, this.$params), params));
    },
    ptmi: function ptmi() {
      var _attrs$id;
      var key = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
      var params = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      var attrs2 = mergeProps(this.$_attrsWithoutPT, this.ptm(key, params));
      (attrs2 === null || attrs2 === void 0 ? void 0 : attrs2.hasOwnProperty("id")) && ((_attrs$id = attrs2.id) !== null && _attrs$id !== void 0 ? _attrs$id : attrs2.id = this.$id);
      return attrs2;
    },
    ptmo: function ptmo() {
      var obj = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      var key = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
      var params = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      return this._getPTValue(obj, key, _objectSpread$4({
        instance: this
      }, params), false);
    },
    cx: function cx() {
      var key = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
      var params = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      return !this.isUnstyled ? this._getOptionValue(this.$style.classes, key, _objectSpread$4(_objectSpread$4({}, this.$params), params)) : void 0;
    },
    sx: function sx() {
      var key = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
      var when = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
      var params = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      if (when) {
        var self = this._getOptionValue(this.$style.inlineStyles, key, _objectSpread$4(_objectSpread$4({}, this.$params), params));
        var base = this._getOptionValue(BaseComponentStyle.inlineStyles, key, _objectSpread$4(_objectSpread$4({}, this.$params), params));
        return [base, self];
      }
      return void 0;
    }
  },
  computed: {
    globalPT: function globalPT() {
      var _this$$primevueConfig4, _this3 = this;
      return this._getPT((_this$$primevueConfig4 = this.$primevueConfig) === null || _this$$primevueConfig4 === void 0 ? void 0 : _this$$primevueConfig4.pt, void 0, function(value) {
        return m(value, {
          instance: _this3
        });
      });
    },
    defaultPT: function defaultPT() {
      var _this$$primevueConfig5, _this4 = this;
      return this._getPT((_this$$primevueConfig5 = this.$primevueConfig) === null || _this$$primevueConfig5 === void 0 ? void 0 : _this$$primevueConfig5.pt, void 0, function(value) {
        return _this4._getOptionValue(value, _this4.$name, _objectSpread$4({}, _this4.$params)) || m(value, _objectSpread$4({}, _this4.$params));
      });
    },
    isUnstyled: function isUnstyled() {
      var _this$$primevueConfig6;
      return this.unstyled !== void 0 ? this.unstyled : (_this$$primevueConfig6 = this.$primevueConfig) === null || _this$$primevueConfig6 === void 0 ? void 0 : _this$$primevueConfig6.unstyled;
    },
    $id: function $id() {
      return this.$attrs.id || this.uid;
    },
    $inProps: function $inProps() {
      var _this$$$vnode;
      var nodePropKeys = Object.keys(((_this$$$vnode = this.$.vnode) === null || _this$$$vnode === void 0 ? void 0 : _this$$$vnode.props) || {});
      return Object.fromEntries(Object.entries(this.$props).filter(function(_ref0) {
        var _ref1 = _slicedToArray$1(_ref0, 1), k2 = _ref1[0];
        return nodePropKeys === null || nodePropKeys === void 0 ? void 0 : nodePropKeys.includes(k2);
      }));
    },
    $theme: function $theme() {
      var _this$$primevueConfig7;
      return (_this$$primevueConfig7 = this.$primevueConfig) === null || _this$$primevueConfig7 === void 0 ? void 0 : _this$$primevueConfig7.theme;
    },
    $style: function $style() {
      return _objectSpread$4(_objectSpread$4({
        classes: void 0,
        inlineStyles: void 0,
        load: function load() {
        },
        loadCSS: function loadCSS() {
        },
        loadStyle: function loadStyle() {
        }
      }, (this._getHostInstance(this) || {}).$style), this.$options.style);
    },
    $styleOptions: function $styleOptions() {
      var _this$$primevueConfig8;
      return {
        nonce: (_this$$primevueConfig8 = this.$primevueConfig) === null || _this$$primevueConfig8 === void 0 || (_this$$primevueConfig8 = _this$$primevueConfig8.csp) === null || _this$$primevueConfig8 === void 0 ? void 0 : _this$$primevueConfig8.nonce
      };
    },
    $primevueConfig: function $primevueConfig() {
      var _this$$primevue4;
      return (_this$$primevue4 = this.$primevue) === null || _this$$primevue4 === void 0 ? void 0 : _this$$primevue4.config;
    },
    $name: function $name() {
      return this.$options.hostName || this.$.type.name;
    },
    $params: function $params() {
      var parentInstance = this._getHostInstance(this) || this.$parent;
      return {
        instance: this,
        props: this.$props,
        state: this.$data,
        attrs: this.$attrs,
        parent: {
          instance: parentInstance,
          props: parentInstance === null || parentInstance === void 0 ? void 0 : parentInstance.$props,
          state: parentInstance === null || parentInstance === void 0 ? void 0 : parentInstance.$data,
          attrs: parentInstance === null || parentInstance === void 0 ? void 0 : parentInstance.$attrs
        }
      };
    },
    $_attrsPT: function $_attrsPT() {
      return Object.entries(this.$attrs || {}).filter(function(_ref10) {
        var _ref11 = _slicedToArray$1(_ref10, 1), key = _ref11[0];
        return key === null || key === void 0 ? void 0 : key.startsWith("pt:");
      }).reduce(function(result, _ref12) {
        var _ref13 = _slicedToArray$1(_ref12, 2), key = _ref13[0], value = _ref13[1];
        var _key$split = key.split(":"), _key$split2 = _toArray(_key$split), rest = _key$split2.slice(1);
        rest === null || rest === void 0 || rest.reduce(function(currentObj, nestedKey, index, array) {
          !currentObj[nestedKey] && (currentObj[nestedKey] = index === array.length - 1 ? value : {});
          return currentObj[nestedKey];
        }, result);
        return result;
      }, {});
    },
    $_attrsWithoutPT: function $_attrsWithoutPT() {
      return Object.entries(this.$attrs || {}).filter(function(_ref14) {
        var _ref15 = _slicedToArray$1(_ref14, 1), key = _ref15[0];
        return !(key !== null && key !== void 0 && key.startsWith("pt:"));
      }).reduce(function(acc, _ref16) {
        var _ref17 = _slicedToArray$1(_ref16, 2), key = _ref17[0], value = _ref17[1];
        acc[key] = value;
        return acc;
      }, {});
    }
  }
};
var css$1 = "\n.p-icon {\n    display: inline-block;\n    vertical-align: baseline;\n}\n\n.p-icon-spin {\n    -webkit-animation: p-icon-spin 2s infinite linear;\n    animation: p-icon-spin 2s infinite linear;\n}\n\n@-webkit-keyframes p-icon-spin {\n    0% {\n        -webkit-transform: rotate(0deg);\n        transform: rotate(0deg);\n    }\n    100% {\n        -webkit-transform: rotate(359deg);\n        transform: rotate(359deg);\n    }\n}\n\n@keyframes p-icon-spin {\n    0% {\n        -webkit-transform: rotate(0deg);\n        transform: rotate(0deg);\n    }\n    100% {\n        -webkit-transform: rotate(359deg);\n        transform: rotate(359deg);\n    }\n}\n";
var BaseIconStyle = BaseStyle.extend({
  name: "baseicon",
  css: css$1
});
function _typeof$6(o) {
  "@babel/helpers - typeof";
  return _typeof$6 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof$6(o);
}
function ownKeys$3(e, r) {
  var t2 = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t2.push.apply(t2, o);
  }
  return t2;
}
function _objectSpread$3(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t2 = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys$3(Object(t2), true).forEach(function(r2) {
      _defineProperty$6(e, r2, t2[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t2)) : ownKeys$3(Object(t2)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t2, r2));
    });
  }
  return e;
}
function _defineProperty$6(e, r, t2) {
  return (r = _toPropertyKey$6(r)) in e ? Object.defineProperty(e, r, { value: t2, enumerable: true, configurable: true, writable: true }) : e[r] = t2, e;
}
function _toPropertyKey$6(t2) {
  var i2 = _toPrimitive$6(t2, "string");
  return "symbol" == _typeof$6(i2) ? i2 : i2 + "";
}
function _toPrimitive$6(t2, r) {
  if ("object" != _typeof$6(t2) || !t2) return t2;
  var e = t2[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i2 = e.call(t2, r);
    if ("object" != _typeof$6(i2)) return i2;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t2);
}
var script$c = {
  name: "BaseIcon",
  "extends": script$d,
  props: {
    label: {
      type: String,
      "default": void 0
    },
    spin: {
      type: Boolean,
      "default": false
    }
  },
  style: BaseIconStyle,
  provide: function provide() {
    return {
      $pcIcon: this,
      $parentInstance: this
    };
  },
  methods: {
    pti: function pti() {
      var isLabelEmpty = a(this.label);
      return _objectSpread$3(_objectSpread$3({}, !this.isUnstyled && {
        "class": ["p-icon", {
          "p-icon-spin": this.spin
        }]
      }), {}, {
        role: !isLabelEmpty ? "img" : void 0,
        "aria-label": !isLabelEmpty ? this.label : void 0,
        "aria-hidden": isLabelEmpty
      });
    }
  }
};
var script$b = {
  name: "ChevronDownIcon",
  "extends": script$c
};
function render$8(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", mergeProps({
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _ctx.pti()), _cache[0] || (_cache[0] = [createBaseVNode("path", {
    d: "M7.01744 10.398C6.91269 10.3985 6.8089 10.378 6.71215 10.3379C6.61541 10.2977 6.52766 10.2386 6.45405 10.1641L1.13907 4.84913C1.03306 4.69404 0.985221 4.5065 1.00399 4.31958C1.02276 4.13266 1.10693 3.95838 1.24166 3.82747C1.37639 3.69655 1.55301 3.61742 1.74039 3.60402C1.92777 3.59062 2.11386 3.64382 2.26584 3.75424L7.01744 8.47394L11.769 3.75424C11.9189 3.65709 12.097 3.61306 12.2748 3.62921C12.4527 3.64535 12.6199 3.72073 12.7498 3.84328C12.8797 3.96582 12.9647 4.12842 12.9912 4.30502C13.0177 4.48162 12.9841 4.662 12.8958 4.81724L7.58083 10.1322C7.50996 10.2125 7.42344 10.2775 7.32656 10.3232C7.22968 10.3689 7.12449 10.3944 7.01744 10.398Z",
    fill: "currentColor"
  }, null, -1)]), 16);
}
script$b.render = render$8;
var script$a = {
  name: "SpinnerIcon",
  "extends": script$c
};
function render$7(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", mergeProps({
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _ctx.pti()), _cache[0] || (_cache[0] = [createBaseVNode("path", {
    d: "M6.99701 14C5.85441 13.999 4.72939 13.7186 3.72012 13.1832C2.71084 12.6478 1.84795 11.8737 1.20673 10.9284C0.565504 9.98305 0.165424 8.89526 0.041387 7.75989C-0.0826496 6.62453 0.073125 5.47607 0.495122 4.4147C0.917119 3.35333 1.59252 2.4113 2.46241 1.67077C3.33229 0.930247 4.37024 0.413729 5.4857 0.166275C6.60117 -0.0811796 7.76026 -0.0520535 8.86188 0.251112C9.9635 0.554278 10.9742 1.12227 11.8057 1.90555C11.915 2.01493 11.9764 2.16319 11.9764 2.31778C11.9764 2.47236 11.915 2.62062 11.8057 2.73C11.7521 2.78503 11.688 2.82877 11.6171 2.85864C11.5463 2.8885 11.4702 2.90389 11.3933 2.90389C11.3165 2.90389 11.2404 2.8885 11.1695 2.85864C11.0987 2.82877 11.0346 2.78503 10.9809 2.73C9.9998 1.81273 8.73246 1.26138 7.39226 1.16876C6.05206 1.07615 4.72086 1.44794 3.62279 2.22152C2.52471 2.99511 1.72683 4.12325 1.36345 5.41602C1.00008 6.70879 1.09342 8.08723 1.62775 9.31926C2.16209 10.5513 3.10478 11.5617 4.29713 12.1803C5.48947 12.7989 6.85865 12.988 8.17414 12.7157C9.48963 12.4435 10.6711 11.7264 11.5196 10.6854C12.3681 9.64432 12.8319 8.34282 12.8328 7C12.8328 6.84529 12.8943 6.69692 13.0038 6.58752C13.1132 6.47812 13.2616 6.41667 13.4164 6.41667C13.5712 6.41667 13.7196 6.47812 13.8291 6.58752C13.9385 6.69692 14 6.84529 14 7C14 8.85651 13.2622 10.637 11.9489 11.9497C10.6356 13.2625 8.85432 14 6.99701 14Z",
    fill: "currentColor"
  }, null, -1)]), 16);
}
script$a.render = render$7;
var script$9 = {
  name: "TimesCircleIcon",
  "extends": script$c
};
function render$6(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", mergeProps({
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _ctx.pti()), _cache[0] || (_cache[0] = [createBaseVNode("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M7 14C5.61553 14 4.26215 13.5895 3.11101 12.8203C1.95987 12.0511 1.06266 10.9579 0.532846 9.67879C0.00303296 8.3997 -0.13559 6.99224 0.134506 5.63437C0.404603 4.2765 1.07129 3.02922 2.05026 2.05026C3.02922 1.07129 4.2765 0.404603 5.63437 0.134506C6.99224 -0.13559 8.3997 0.00303296 9.67879 0.532846C10.9579 1.06266 12.0511 1.95987 12.8203 3.11101C13.5895 4.26215 14 5.61553 14 7C14 8.85652 13.2625 10.637 11.9497 11.9497C10.637 13.2625 8.85652 14 7 14ZM7 1.16667C5.84628 1.16667 4.71846 1.50879 3.75918 2.14976C2.79989 2.79074 2.05222 3.70178 1.61071 4.76768C1.16919 5.83358 1.05367 7.00647 1.27876 8.13803C1.50384 9.26958 2.05941 10.309 2.87521 11.1248C3.69102 11.9406 4.73042 12.4962 5.86198 12.7212C6.99353 12.9463 8.16642 12.8308 9.23232 12.3893C10.2982 11.9478 11.2093 11.2001 11.8502 10.2408C12.4912 9.28154 12.8333 8.15373 12.8333 7C12.8333 5.45291 12.2188 3.96918 11.1248 2.87521C10.0308 1.78125 8.5471 1.16667 7 1.16667ZM4.66662 9.91668C4.58998 9.91704 4.51404 9.90209 4.44325 9.87271C4.37246 9.84333 4.30826 9.8001 4.2544 9.74557C4.14516 9.6362 4.0838 9.48793 4.0838 9.33335C4.0838 9.17876 4.14516 9.0305 4.2544 8.92113L6.17553 7L4.25443 5.07891C4.15139 4.96832 4.09529 4.82207 4.09796 4.67094C4.10063 4.51982 4.16185 4.37563 4.26872 4.26876C4.3756 4.16188 4.51979 4.10066 4.67091 4.09799C4.82204 4.09532 4.96829 4.15142 5.07887 4.25446L6.99997 6.17556L8.92106 4.25446C9.03164 4.15142 9.1779 4.09532 9.32903 4.09799C9.48015 4.10066 9.62434 4.16188 9.73121 4.26876C9.83809 4.37563 9.89931 4.51982 9.90198 4.67094C9.90464 4.82207 9.84855 4.96832 9.74551 5.07891L7.82441 7L9.74554 8.92113C9.85478 9.0305 9.91614 9.17876 9.91614 9.33335C9.91614 9.48793 9.85478 9.6362 9.74554 9.74557C9.69168 9.8001 9.62748 9.84333 9.55669 9.87271C9.4859 9.90209 9.40996 9.91704 9.33332 9.91668C9.25668 9.91704 9.18073 9.90209 9.10995 9.87271C9.03916 9.84333 8.97495 9.8001 8.9211 9.74557L6.99997 7.82444L5.07884 9.74557C5.02499 9.8001 4.96078 9.84333 4.88999 9.87271C4.81921 9.90209 4.74326 9.91704 4.66662 9.91668Z",
    fill: "currentColor"
  }, null, -1)]), 16);
}
script$9.render = render$6;
var style$5 = "\n    .p-chip {\n        display: inline-flex;\n        align-items: center;\n        background: dt('chip.background');\n        color: dt('chip.color');\n        border-radius: dt('chip.border.radius');\n        padding-block: dt('chip.padding.y');\n        padding-inline: dt('chip.padding.x');\n        gap: dt('chip.gap');\n    }\n\n    .p-chip-icon {\n        color: dt('chip.icon.color');\n        font-size: dt('chip.icon.font.size');\n        width: dt('chip.icon.size');\n        height: dt('chip.icon.size');\n    }\n\n    .p-chip-image {\n        border-radius: 50%;\n        width: dt('chip.image.width');\n        height: dt('chip.image.height');\n        margin-inline-start: calc(-1 * dt('chip.padding.y'));\n    }\n\n    .p-chip:has(.p-chip-remove-icon) {\n        padding-inline-end: dt('chip.padding.y');\n    }\n\n    .p-chip:has(.p-chip-image) {\n        padding-block-start: calc(dt('chip.padding.y') / 2);\n        padding-block-end: calc(dt('chip.padding.y') / 2);\n    }\n\n    .p-chip-remove-icon {\n        cursor: pointer;\n        font-size: dt('chip.remove.icon.size');\n        width: dt('chip.remove.icon.size');\n        height: dt('chip.remove.icon.size');\n        color: dt('chip.remove.icon.color');\n        border-radius: 50%;\n        transition:\n            outline-color dt('chip.transition.duration'),\n            box-shadow dt('chip.transition.duration');\n        outline-color: transparent;\n    }\n\n    .p-chip-remove-icon:focus-visible {\n        box-shadow: dt('chip.remove.icon.focus.ring.shadow');\n        outline: dt('chip.remove.icon.focus.ring.width') dt('chip.remove.icon.focus.ring.style') dt('chip.remove.icon.focus.ring.color');\n        outline-offset: dt('chip.remove.icon.focus.ring.offset');\n    }\n";
var classes$4 = {
  root: "p-chip p-component",
  image: "p-chip-image",
  icon: "p-chip-icon",
  label: "p-chip-label",
  removeIcon: "p-chip-remove-icon"
};
var ChipStyle = BaseStyle.extend({
  name: "chip",
  style: style$5,
  classes: classes$4
});
var script$1$4 = {
  name: "BaseChip",
  "extends": script$d,
  props: {
    label: {
      type: [String, Number],
      "default": null
    },
    icon: {
      type: String,
      "default": null
    },
    image: {
      type: String,
      "default": null
    },
    removable: {
      type: Boolean,
      "default": false
    },
    removeIcon: {
      type: String,
      "default": void 0
    }
  },
  style: ChipStyle,
  provide: function provide2() {
    return {
      $pcChip: this,
      $parentInstance: this
    };
  }
};
var script$8 = {
  name: "Chip",
  "extends": script$1$4,
  inheritAttrs: false,
  emits: ["remove"],
  data: function data() {
    return {
      visible: true
    };
  },
  methods: {
    onKeydown: function onKeydown(event) {
      if (event.key === "Enter" || event.key === "Backspace") {
        this.close(event);
      }
    },
    close: function close(event) {
      this.visible = false;
      this.$emit("remove", event);
    }
  },
  computed: {
    dataP: function dataP() {
      return f({
        removable: this.removable
      });
    }
  },
  components: {
    TimesCircleIcon: script$9
  }
};
var _hoisted_1$6 = ["aria-label", "data-p"];
var _hoisted_2$2 = ["src"];
function render$5(_ctx, _cache, $props, $setup, $data, $options) {
  return $data.visible ? (openBlock(), createElementBlock("div", mergeProps({
    key: 0,
    "class": _ctx.cx("root"),
    "aria-label": _ctx.label
  }, _ctx.ptmi("root"), {
    "data-p": $options.dataP
  }), [renderSlot(_ctx.$slots, "default", {}, function() {
    return [_ctx.image ? (openBlock(), createElementBlock("img", mergeProps({
      key: 0,
      src: _ctx.image
    }, _ctx.ptm("image"), {
      "class": _ctx.cx("image")
    }), null, 16, _hoisted_2$2)) : _ctx.$slots.icon ? (openBlock(), createBlock(resolveDynamicComponent(_ctx.$slots.icon), mergeProps({
      key: 1,
      "class": _ctx.cx("icon")
    }, _ctx.ptm("icon")), null, 16, ["class"])) : _ctx.icon ? (openBlock(), createElementBlock("span", mergeProps({
      key: 2,
      "class": [_ctx.cx("icon"), _ctx.icon]
    }, _ctx.ptm("icon")), null, 16)) : createCommentVNode("", true), _ctx.label !== null ? (openBlock(), createElementBlock("div", mergeProps({
      key: 3,
      "class": _ctx.cx("label")
    }, _ctx.ptm("label")), toDisplayString(_ctx.label), 17)) : createCommentVNode("", true)];
  }), _ctx.removable ? renderSlot(_ctx.$slots, "removeicon", {
    key: 0,
    removeCallback: $options.close,
    keydownCallback: $options.onKeydown
  }, function() {
    return [(openBlock(), createBlock(resolveDynamicComponent(_ctx.removeIcon ? "span" : "TimesCircleIcon"), mergeProps({
      "class": [_ctx.cx("removeIcon"), _ctx.removeIcon],
      onClick: $options.close,
      onKeydown: $options.onKeydown
    }, _ctx.ptm("removeIcon")), null, 16, ["class", "onClick", "onKeydown"]))];
  }) : createCommentVNode("", true)], 16, _hoisted_1$6)) : createCommentVNode("", true);
}
script$8.render = render$5;
var script$7 = {
  name: "BaseEditableHolder",
  "extends": script$d,
  emits: ["update:modelValue", "value-change"],
  props: {
    modelValue: {
      type: null,
      "default": void 0
    },
    defaultValue: {
      type: null,
      "default": void 0
    },
    name: {
      type: String,
      "default": void 0
    },
    invalid: {
      type: Boolean,
      "default": void 0
    },
    disabled: {
      type: Boolean,
      "default": false
    },
    formControl: {
      type: Object,
      "default": void 0
    }
  },
  inject: {
    $parentInstance: {
      "default": void 0
    },
    $pcForm: {
      "default": void 0
    },
    $pcFormField: {
      "default": void 0
    }
  },
  data: function data2() {
    return {
      d_value: this.defaultValue !== void 0 ? this.defaultValue : this.modelValue
    };
  },
  watch: {
    modelValue: function modelValue(newValue) {
      this.d_value = newValue;
    },
    defaultValue: function defaultValue(newValue) {
      this.d_value = newValue;
    },
    $formName: {
      immediate: true,
      handler: function handler3(newValue) {
        var _this$$pcForm, _this$$pcForm$registe;
        this.formField = ((_this$$pcForm = this.$pcForm) === null || _this$$pcForm === void 0 || (_this$$pcForm$registe = _this$$pcForm.register) === null || _this$$pcForm$registe === void 0 ? void 0 : _this$$pcForm$registe.call(_this$$pcForm, newValue, this.$formControl)) || {};
      }
    },
    $formControl: {
      immediate: true,
      handler: function handler4(newValue) {
        var _this$$pcForm2, _this$$pcForm2$regist;
        this.formField = ((_this$$pcForm2 = this.$pcForm) === null || _this$$pcForm2 === void 0 || (_this$$pcForm2$regist = _this$$pcForm2.register) === null || _this$$pcForm2$regist === void 0 ? void 0 : _this$$pcForm2$regist.call(_this$$pcForm2, this.$formName, newValue)) || {};
      }
    },
    $formDefaultValue: {
      immediate: true,
      handler: function handler5(newValue) {
        this.d_value !== newValue && (this.d_value = newValue);
      }
    },
    $formValue: {
      immediate: false,
      handler: function handler6(newValue) {
        var _this$$pcForm3;
        if ((_this$$pcForm3 = this.$pcForm) !== null && _this$$pcForm3 !== void 0 && _this$$pcForm3.getFieldState(this.$formName) && newValue !== this.d_value) {
          this.d_value = newValue;
        }
      }
    }
  },
  formField: {},
  methods: {
    writeValue: function writeValue(value, event) {
      var _this$formField$onCha, _this$formField;
      if (this.controlled) {
        this.d_value = value;
        this.$emit("update:modelValue", value);
      }
      this.$emit("value-change", value);
      (_this$formField$onCha = (_this$formField = this.formField).onChange) === null || _this$formField$onCha === void 0 || _this$formField$onCha.call(_this$formField, {
        originalEvent: event,
        value
      });
    },
    // @todo move to @primeuix/utils
    findNonEmpty: function findNonEmpty() {
      for (var _len = arguments.length, values = new Array(_len), _key = 0; _key < _len; _key++) {
        values[_key] = arguments[_key];
      }
      return values.find(s$1);
    }
  },
  computed: {
    $filled: function $filled() {
      return s$1(this.d_value);
    },
    $invalid: function $invalid() {
      var _this$$pcFormField, _this$$pcForm4;
      return !this.$formNovalidate && this.findNonEmpty(this.invalid, (_this$$pcFormField = this.$pcFormField) === null || _this$$pcFormField === void 0 || (_this$$pcFormField = _this$$pcFormField.$field) === null || _this$$pcFormField === void 0 ? void 0 : _this$$pcFormField.invalid, (_this$$pcForm4 = this.$pcForm) === null || _this$$pcForm4 === void 0 || (_this$$pcForm4 = _this$$pcForm4.getFieldState(this.$formName)) === null || _this$$pcForm4 === void 0 ? void 0 : _this$$pcForm4.invalid);
    },
    $formName: function $formName() {
      var _this$$formControl;
      return !this.$formNovalidate ? this.name || ((_this$$formControl = this.$formControl) === null || _this$$formControl === void 0 ? void 0 : _this$$formControl.name) : void 0;
    },
    $formControl: function $formControl() {
      var _this$$pcFormField2;
      return this.formControl || ((_this$$pcFormField2 = this.$pcFormField) === null || _this$$pcFormField2 === void 0 ? void 0 : _this$$pcFormField2.formControl);
    },
    $formNovalidate: function $formNovalidate() {
      var _this$$formControl2;
      return (_this$$formControl2 = this.$formControl) === null || _this$$formControl2 === void 0 ? void 0 : _this$$formControl2.novalidate;
    },
    $formDefaultValue: function $formDefaultValue() {
      var _this$$pcFormField3, _this$$pcForm5;
      return this.findNonEmpty(this.d_value, (_this$$pcFormField3 = this.$pcFormField) === null || _this$$pcFormField3 === void 0 ? void 0 : _this$$pcFormField3.initialValue, (_this$$pcForm5 = this.$pcForm) === null || _this$$pcForm5 === void 0 || (_this$$pcForm5 = _this$$pcForm5.initialValues) === null || _this$$pcForm5 === void 0 ? void 0 : _this$$pcForm5[this.$formName]);
    },
    $formValue: function $formValue() {
      var _this$$pcFormField4, _this$$pcForm6;
      return this.findNonEmpty((_this$$pcFormField4 = this.$pcFormField) === null || _this$$pcFormField4 === void 0 || (_this$$pcFormField4 = _this$$pcFormField4.$field) === null || _this$$pcFormField4 === void 0 ? void 0 : _this$$pcFormField4.value, (_this$$pcForm6 = this.$pcForm) === null || _this$$pcForm6 === void 0 || (_this$$pcForm6 = _this$$pcForm6.getFieldState(this.$formName)) === null || _this$$pcForm6 === void 0 ? void 0 : _this$$pcForm6.value);
    },
    controlled: function controlled() {
      return this.$inProps.hasOwnProperty("modelValue") || !this.$inProps.hasOwnProperty("modelValue") && !this.$inProps.hasOwnProperty("defaultValue");
    },
    // @deprecated use $filled instead
    filled: function filled() {
      return this.$filled;
    }
  }
};
var script$6 = {
  name: "BaseInput",
  "extends": script$7,
  props: {
    size: {
      type: String,
      "default": null
    },
    fluid: {
      type: Boolean,
      "default": null
    },
    variant: {
      type: String,
      "default": null
    }
  },
  inject: {
    $parentInstance: {
      "default": void 0
    },
    $pcFluid: {
      "default": void 0
    }
  },
  computed: {
    $variant: function $variant() {
      var _this$variant;
      return (_this$variant = this.variant) !== null && _this$variant !== void 0 ? _this$variant : this.$primevue.config.inputStyle || this.$primevue.config.inputVariant;
    },
    $fluid: function $fluid() {
      var _this$fluid;
      return (_this$fluid = this.fluid) !== null && _this$fluid !== void 0 ? _this$fluid : !!this.$pcFluid;
    },
    // @deprecated use $fluid instead
    hasFluid: function hasFluid() {
      return this.$fluid;
    }
  }
};
var style$4 = "\n    .p-inputtext {\n        font-family: inherit;\n        font-feature-settings: inherit;\n        font-size: 1rem;\n        color: dt('inputtext.color');\n        background: dt('inputtext.background');\n        padding-block: dt('inputtext.padding.y');\n        padding-inline: dt('inputtext.padding.x');\n        border: 1px solid dt('inputtext.border.color');\n        transition:\n            background dt('inputtext.transition.duration'),\n            color dt('inputtext.transition.duration'),\n            border-color dt('inputtext.transition.duration'),\n            outline-color dt('inputtext.transition.duration'),\n            box-shadow dt('inputtext.transition.duration');\n        appearance: none;\n        border-radius: dt('inputtext.border.radius');\n        outline-color: transparent;\n        box-shadow: dt('inputtext.shadow');\n    }\n\n    .p-inputtext:enabled:hover {\n        border-color: dt('inputtext.hover.border.color');\n    }\n\n    .p-inputtext:enabled:focus {\n        border-color: dt('inputtext.focus.border.color');\n        box-shadow: dt('inputtext.focus.ring.shadow');\n        outline: dt('inputtext.focus.ring.width') dt('inputtext.focus.ring.style') dt('inputtext.focus.ring.color');\n        outline-offset: dt('inputtext.focus.ring.offset');\n    }\n\n    .p-inputtext.p-invalid {\n        border-color: dt('inputtext.invalid.border.color');\n    }\n\n    .p-inputtext.p-variant-filled {\n        background: dt('inputtext.filled.background');\n    }\n\n    .p-inputtext.p-variant-filled:enabled:hover {\n        background: dt('inputtext.filled.hover.background');\n    }\n\n    .p-inputtext.p-variant-filled:enabled:focus {\n        background: dt('inputtext.filled.focus.background');\n    }\n\n    .p-inputtext:disabled {\n        opacity: 1;\n        background: dt('inputtext.disabled.background');\n        color: dt('inputtext.disabled.color');\n    }\n\n    .p-inputtext::placeholder {\n        color: dt('inputtext.placeholder.color');\n    }\n\n    .p-inputtext.p-invalid::placeholder {\n        color: dt('inputtext.invalid.placeholder.color');\n    }\n\n    .p-inputtext-sm {\n        font-size: dt('inputtext.sm.font.size');\n        padding-block: dt('inputtext.sm.padding.y');\n        padding-inline: dt('inputtext.sm.padding.x');\n    }\n\n    .p-inputtext-lg {\n        font-size: dt('inputtext.lg.font.size');\n        padding-block: dt('inputtext.lg.padding.y');\n        padding-inline: dt('inputtext.lg.padding.x');\n    }\n\n    .p-inputtext-fluid {\n        width: 100%;\n    }\n";
var classes$3 = {
  root: function root(_ref) {
    var instance = _ref.instance, props = _ref.props;
    return ["p-inputtext p-component", {
      "p-filled": instance.$filled,
      "p-inputtext-sm p-inputfield-sm": props.size === "small",
      "p-inputtext-lg p-inputfield-lg": props.size === "large",
      "p-invalid": instance.$invalid,
      "p-variant-filled": instance.$variant === "filled",
      "p-inputtext-fluid": instance.$fluid
    }];
  }
};
var InputTextStyle = BaseStyle.extend({
  name: "inputtext",
  style: style$4,
  classes: classes$3
});
var script$1$3 = {
  name: "BaseInputText",
  "extends": script$6,
  style: InputTextStyle,
  provide: function provide3() {
    return {
      $pcInputText: this,
      $parentInstance: this
    };
  }
};
function _typeof$5(o) {
  "@babel/helpers - typeof";
  return _typeof$5 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof$5(o);
}
function _defineProperty$5(e, r, t2) {
  return (r = _toPropertyKey$5(r)) in e ? Object.defineProperty(e, r, { value: t2, enumerable: true, configurable: true, writable: true }) : e[r] = t2, e;
}
function _toPropertyKey$5(t2) {
  var i2 = _toPrimitive$5(t2, "string");
  return "symbol" == _typeof$5(i2) ? i2 : i2 + "";
}
function _toPrimitive$5(t2, r) {
  if ("object" != _typeof$5(t2) || !t2) return t2;
  var e = t2[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i2 = e.call(t2, r);
    if ("object" != _typeof$5(i2)) return i2;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t2);
}
var script$5 = {
  name: "InputText",
  "extends": script$1$3,
  inheritAttrs: false,
  methods: {
    onInput: function onInput(event) {
      this.writeValue(event.target.value, event);
    }
  },
  computed: {
    attrs: function attrs() {
      return mergeProps(this.ptmi("root", {
        context: {
          filled: this.$filled,
          disabled: this.disabled
        }
      }), this.formField);
    },
    dataP: function dataP2() {
      return f(_defineProperty$5({
        invalid: this.$invalid,
        fluid: this.$fluid,
        filled: this.$variant === "filled"
      }, this.size, this.size));
    }
  }
};
var _hoisted_1$5 = ["value", "name", "disabled", "aria-invalid", "data-p"];
function render$4(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("input", mergeProps({
    type: "text",
    "class": _ctx.cx("root"),
    value: _ctx.d_value,
    name: _ctx.name,
    disabled: _ctx.disabled,
    "aria-invalid": _ctx.$invalid || void 0,
    "data-p": $options.dataP,
    onInput: _cache[0] || (_cache[0] = function() {
      return $options.onInput && $options.onInput.apply($options, arguments);
    })
  }, $options.attrs), null, 16, _hoisted_1$5);
}
script$5.render = render$4;
var OverlayEventBus = s$2();
var script$4 = {
  name: "Portal",
  props: {
    appendTo: {
      type: [String, Object],
      "default": "body"
    },
    disabled: {
      type: Boolean,
      "default": false
    }
  },
  data: function data3() {
    return {
      mounted: false
    };
  },
  mounted: function mounted2() {
    this.mounted = tt();
  },
  computed: {
    inline: function inline() {
      return this.disabled || this.appendTo === "self";
    }
  }
};
function render$3(_ctx, _cache, $props, $setup, $data, $options) {
  return $options.inline ? renderSlot(_ctx.$slots, "default", {
    key: 0
  }) : $data.mounted ? (openBlock(), createBlock(Teleport, {
    key: 1,
    to: $props.appendTo
  }, [renderSlot(_ctx.$slots, "default")], 8, ["to"])) : createCommentVNode("", true);
}
script$4.render = render$3;
function _typeof$4(o) {
  "@babel/helpers - typeof";
  return _typeof$4 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof$4(o);
}
function _slicedToArray(r, e) {
  return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray$2(r, e) || _nonIterableRest();
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray$2(r, a2) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray$2(r, a2);
    var t2 = {}.toString.call(r).slice(8, -1);
    return "Object" === t2 && r.constructor && (t2 = r.constructor.name), "Map" === t2 || "Set" === t2 ? Array.from(r) : "Arguments" === t2 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t2) ? _arrayLikeToArray$2(r, a2) : void 0;
  }
}
function _arrayLikeToArray$2(r, a2) {
  (null == a2 || a2 > r.length) && (a2 = r.length);
  for (var e = 0, n = Array(a2); e < a2; e++) n[e] = r[e];
  return n;
}
function _iterableToArrayLimit(r, l2) {
  var t2 = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t2) {
    var e, n, i2, u, a2 = [], f2 = true, o = false;
    try {
      if (i2 = (t2 = t2.call(r)).next, 0 === l2) ;
      else for (; !(f2 = (e = i2.call(t2)).done) && (a2.push(e.value), a2.length !== l2); f2 = true) ;
    } catch (r2) {
      o = true, n = r2;
    } finally {
      try {
        if (!f2 && null != t2["return"] && (u = t2["return"](), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a2;
  }
}
function _arrayWithHoles(r) {
  if (Array.isArray(r)) return r;
}
function ownKeys$2(e, r) {
  var t2 = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t2.push.apply(t2, o);
  }
  return t2;
}
function _objectSpread$2(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t2 = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys$2(Object(t2), true).forEach(function(r2) {
      _defineProperty$4(e, r2, t2[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t2)) : ownKeys$2(Object(t2)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t2, r2));
    });
  }
  return e;
}
function _defineProperty$4(e, r, t2) {
  return (r = _toPropertyKey$4(r)) in e ? Object.defineProperty(e, r, { value: t2, enumerable: true, configurable: true, writable: true }) : e[r] = t2, e;
}
function _toPropertyKey$4(t2) {
  var i2 = _toPrimitive$4(t2, "string");
  return "symbol" == _typeof$4(i2) ? i2 : i2 + "";
}
function _toPrimitive$4(t2, r) {
  if ("object" != _typeof$4(t2) || !t2) return t2;
  var e = t2[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i2 = e.call(t2, r);
    if ("object" != _typeof$4(i2)) return i2;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t2);
}
var BaseDirective = {
  _getMeta: function _getMeta() {
    return [i(arguments.length <= 0 ? void 0 : arguments[0]) ? void 0 : arguments.length <= 0 ? void 0 : arguments[0], m(i(arguments.length <= 0 ? void 0 : arguments[0]) ? arguments.length <= 0 ? void 0 : arguments[0] : arguments.length <= 1 ? void 0 : arguments[1])];
  },
  _getConfig: function _getConfig(binding, vnode) {
    var _ref, _binding$instance, _vnode$ctx;
    return (_ref = (binding === null || binding === void 0 || (_binding$instance = binding.instance) === null || _binding$instance === void 0 ? void 0 : _binding$instance.$primevue) || (vnode === null || vnode === void 0 || (_vnode$ctx = vnode.ctx) === null || _vnode$ctx === void 0 || (_vnode$ctx = _vnode$ctx.appContext) === null || _vnode$ctx === void 0 || (_vnode$ctx = _vnode$ctx.config) === null || _vnode$ctx === void 0 || (_vnode$ctx = _vnode$ctx.globalProperties) === null || _vnode$ctx === void 0 ? void 0 : _vnode$ctx.$primevue)) === null || _ref === void 0 ? void 0 : _ref.config;
  },
  _getOptionValue: F,
  _getPTValue: function _getPTValue2() {
    var _instance$binding, _instance$$primevueCo;
    var instance = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    var obj = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    var key = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "";
    var params = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    var searchInDefaultPT = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : true;
    var getValue = function getValue2() {
      var value = BaseDirective._getOptionValue.apply(BaseDirective, arguments);
      return p(value) || b(value) ? {
        "class": value
      } : value;
    };
    var _ref2 = ((_instance$binding = instance.binding) === null || _instance$binding === void 0 || (_instance$binding = _instance$binding.value) === null || _instance$binding === void 0 ? void 0 : _instance$binding.ptOptions) || ((_instance$$primevueCo = instance.$primevueConfig) === null || _instance$$primevueCo === void 0 ? void 0 : _instance$$primevueCo.ptOptions) || {}, _ref2$mergeSections = _ref2.mergeSections, mergeSections = _ref2$mergeSections === void 0 ? true : _ref2$mergeSections, _ref2$mergeProps = _ref2.mergeProps, useMergeProps = _ref2$mergeProps === void 0 ? false : _ref2$mergeProps;
    var global = searchInDefaultPT ? BaseDirective._useDefaultPT(instance, instance.defaultPT(), getValue, key, params) : void 0;
    var self = BaseDirective._usePT(instance, BaseDirective._getPT(obj, instance.$name), getValue, key, _objectSpread$2(_objectSpread$2({}, params), {}, {
      global: global || {}
    }));
    var datasets = BaseDirective._getPTDatasets(instance, key);
    return mergeSections || !mergeSections && self ? useMergeProps ? BaseDirective._mergeProps(instance, useMergeProps, global, self, datasets) : _objectSpread$2(_objectSpread$2(_objectSpread$2({}, global), self), datasets) : _objectSpread$2(_objectSpread$2({}, self), datasets);
  },
  _getPTDatasets: function _getPTDatasets2() {
    var instance = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    var key = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
    var datasetPrefix = "data-pc-";
    return _objectSpread$2(_objectSpread$2({}, key === "root" && _defineProperty$4({}, "".concat(datasetPrefix, "name"), g$1(instance.$name))), {}, _defineProperty$4({}, "".concat(datasetPrefix, "section"), g$1(key)));
  },
  _getPT: function _getPT2(pt) {
    var key = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
    var callback = arguments.length > 2 ? arguments[2] : void 0;
    var getValue = function getValue2(value) {
      var _computedValue$_key;
      var computedValue = callback ? callback(value) : value;
      var _key = g$1(key);
      return (_computedValue$_key = computedValue === null || computedValue === void 0 ? void 0 : computedValue[_key]) !== null && _computedValue$_key !== void 0 ? _computedValue$_key : computedValue;
    };
    return pt && Object.hasOwn(pt, "_usept") ? {
      _usept: pt["_usept"],
      originalValue: getValue(pt.originalValue),
      value: getValue(pt.value)
    } : getValue(pt);
  },
  _usePT: function _usePT2() {
    var instance = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    var pt = arguments.length > 1 ? arguments[1] : void 0;
    var callback = arguments.length > 2 ? arguments[2] : void 0;
    var key = arguments.length > 3 ? arguments[3] : void 0;
    var params = arguments.length > 4 ? arguments[4] : void 0;
    var fn = function fn2(value2) {
      return callback(value2, key, params);
    };
    if (pt && Object.hasOwn(pt, "_usept")) {
      var _instance$$primevueCo2;
      var _ref4 = pt["_usept"] || ((_instance$$primevueCo2 = instance.$primevueConfig) === null || _instance$$primevueCo2 === void 0 ? void 0 : _instance$$primevueCo2.ptOptions) || {}, _ref4$mergeSections = _ref4.mergeSections, mergeSections = _ref4$mergeSections === void 0 ? true : _ref4$mergeSections, _ref4$mergeProps = _ref4.mergeProps, useMergeProps = _ref4$mergeProps === void 0 ? false : _ref4$mergeProps;
      var originalValue = fn(pt.originalValue);
      var value = fn(pt.value);
      if (originalValue === void 0 && value === void 0) return void 0;
      else if (p(value)) return value;
      else if (p(originalValue)) return originalValue;
      return mergeSections || !mergeSections && value ? useMergeProps ? BaseDirective._mergeProps(instance, useMergeProps, originalValue, value) : _objectSpread$2(_objectSpread$2({}, originalValue), value) : value;
    }
    return fn(pt);
  },
  _useDefaultPT: function _useDefaultPT2() {
    var instance = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    var defaultPT2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    var callback = arguments.length > 2 ? arguments[2] : void 0;
    var key = arguments.length > 3 ? arguments[3] : void 0;
    var params = arguments.length > 4 ? arguments[4] : void 0;
    return BaseDirective._usePT(instance, defaultPT2, callback, key, params);
  },
  _loadStyles: function _loadStyles2() {
    var _config$csp;
    var instance = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    var binding = arguments.length > 1 ? arguments[1] : void 0;
    var vnode = arguments.length > 2 ? arguments[2] : void 0;
    var config = BaseDirective._getConfig(binding, vnode);
    var useStyleOptions = {
      nonce: config === null || config === void 0 || (_config$csp = config.csp) === null || _config$csp === void 0 ? void 0 : _config$csp.nonce
    };
    BaseDirective._loadCoreStyles(instance, useStyleOptions);
    BaseDirective._loadThemeStyles(instance, useStyleOptions);
    BaseDirective._loadScopedThemeStyles(instance, useStyleOptions);
    BaseDirective._removeThemeListeners(instance);
    instance.$loadStyles = function() {
      return BaseDirective._loadThemeStyles(instance, useStyleOptions);
    };
    BaseDirective._themeChangeListener(instance.$loadStyles);
  },
  _loadCoreStyles: function _loadCoreStyles2() {
    var _instance$$style, _instance$$style2;
    var instance = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    var useStyleOptions = arguments.length > 1 ? arguments[1] : void 0;
    if (!Base.isStyleNameLoaded((_instance$$style = instance.$style) === null || _instance$$style === void 0 ? void 0 : _instance$$style.name) && (_instance$$style2 = instance.$style) !== null && _instance$$style2 !== void 0 && _instance$$style2.name) {
      var _instance$$style3;
      BaseStyle.loadCSS(useStyleOptions);
      (_instance$$style3 = instance.$style) === null || _instance$$style3 === void 0 || _instance$$style3.loadCSS(useStyleOptions);
      Base.setLoadedStyleName(instance.$style.name);
    }
  },
  _loadThemeStyles: function _loadThemeStyles2() {
    var _instance$theme, _instance$$style5, _instance$$style6;
    var instance = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    var useStyleOptions = arguments.length > 1 ? arguments[1] : void 0;
    if (instance !== null && instance !== void 0 && instance.isUnstyled() || (instance === null || instance === void 0 || (_instance$theme = instance.theme) === null || _instance$theme === void 0 ? void 0 : _instance$theme.call(instance)) === "none") return;
    if (!g$2.isStyleNameLoaded("common")) {
      var _instance$$style4, _instance$$style4$get;
      var _ref5 = ((_instance$$style4 = instance.$style) === null || _instance$$style4 === void 0 || (_instance$$style4$get = _instance$$style4.getCommonTheme) === null || _instance$$style4$get === void 0 ? void 0 : _instance$$style4$get.call(_instance$$style4)) || {}, primitive = _ref5.primitive, semantic = _ref5.semantic, global = _ref5.global, style2 = _ref5.style;
      BaseStyle.load(primitive === null || primitive === void 0 ? void 0 : primitive.css, _objectSpread$2({
        name: "primitive-variables"
      }, useStyleOptions));
      BaseStyle.load(semantic === null || semantic === void 0 ? void 0 : semantic.css, _objectSpread$2({
        name: "semantic-variables"
      }, useStyleOptions));
      BaseStyle.load(global === null || global === void 0 ? void 0 : global.css, _objectSpread$2({
        name: "global-variables"
      }, useStyleOptions));
      BaseStyle.loadStyle(_objectSpread$2({
        name: "global-style"
      }, useStyleOptions), style2);
      g$2.setLoadedStyleName("common");
    }
    if (!g$2.isStyleNameLoaded((_instance$$style5 = instance.$style) === null || _instance$$style5 === void 0 ? void 0 : _instance$$style5.name) && (_instance$$style6 = instance.$style) !== null && _instance$$style6 !== void 0 && _instance$$style6.name) {
      var _instance$$style7, _instance$$style7$get, _instance$$style8, _instance$$style9;
      var _ref6 = ((_instance$$style7 = instance.$style) === null || _instance$$style7 === void 0 || (_instance$$style7$get = _instance$$style7.getDirectiveTheme) === null || _instance$$style7$get === void 0 ? void 0 : _instance$$style7$get.call(_instance$$style7)) || {}, css2 = _ref6.css, _style = _ref6.style;
      (_instance$$style8 = instance.$style) === null || _instance$$style8 === void 0 || _instance$$style8.load(css2, _objectSpread$2({
        name: "".concat(instance.$style.name, "-variables")
      }, useStyleOptions));
      (_instance$$style9 = instance.$style) === null || _instance$$style9 === void 0 || _instance$$style9.loadStyle(_objectSpread$2({
        name: "".concat(instance.$style.name, "-style")
      }, useStyleOptions), _style);
      g$2.setLoadedStyleName(instance.$style.name);
    }
    if (!g$2.isStyleNameLoaded("layer-order")) {
      var _instance$$style0, _instance$$style0$get;
      var layerOrder = (_instance$$style0 = instance.$style) === null || _instance$$style0 === void 0 || (_instance$$style0$get = _instance$$style0.getLayerOrderThemeCSS) === null || _instance$$style0$get === void 0 ? void 0 : _instance$$style0$get.call(_instance$$style0);
      BaseStyle.load(layerOrder, _objectSpread$2({
        name: "layer-order",
        first: true
      }, useStyleOptions));
      g$2.setLoadedStyleName("layer-order");
    }
  },
  _loadScopedThemeStyles: function _loadScopedThemeStyles2() {
    var instance = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    var useStyleOptions = arguments.length > 1 ? arguments[1] : void 0;
    var preset = instance.preset();
    if (preset && instance.$attrSelector) {
      var _instance$$style1, _instance$$style1$get, _instance$$style10;
      var _ref7 = ((_instance$$style1 = instance.$style) === null || _instance$$style1 === void 0 || (_instance$$style1$get = _instance$$style1.getPresetTheme) === null || _instance$$style1$get === void 0 ? void 0 : _instance$$style1$get.call(_instance$$style1, preset, "[".concat(instance.$attrSelector, "]"))) || {}, css2 = _ref7.css;
      var scopedStyle = (_instance$$style10 = instance.$style) === null || _instance$$style10 === void 0 ? void 0 : _instance$$style10.load(css2, _objectSpread$2({
        name: "".concat(instance.$attrSelector, "-").concat(instance.$style.name)
      }, useStyleOptions));
      instance.scopedStyleEl = scopedStyle.el;
    }
  },
  _themeChangeListener: function _themeChangeListener2() {
    var callback = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : function() {
    };
    Base.clearLoadedStyleNames();
    R.on("theme:change", callback);
  },
  _removeThemeListeners: function _removeThemeListeners2() {
    var instance = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    R.off("theme:change", instance.$loadStyles);
    instance.$loadStyles = void 0;
  },
  _hook: function _hook2(directiveName, hookName, el, binding, vnode, prevVnode) {
    var _binding$value, _config$pt;
    var name = "on".concat(v(hookName));
    var config = BaseDirective._getConfig(binding, vnode);
    var instance = el === null || el === void 0 ? void 0 : el.$instance;
    var selfHook = BaseDirective._usePT(instance, BaseDirective._getPT(binding === null || binding === void 0 || (_binding$value = binding.value) === null || _binding$value === void 0 ? void 0 : _binding$value.pt, directiveName), BaseDirective._getOptionValue, "hooks.".concat(name));
    var defaultHook = BaseDirective._useDefaultPT(instance, config === null || config === void 0 || (_config$pt = config.pt) === null || _config$pt === void 0 || (_config$pt = _config$pt.directives) === null || _config$pt === void 0 ? void 0 : _config$pt[directiveName], BaseDirective._getOptionValue, "hooks.".concat(name));
    var options = {
      el,
      binding,
      vnode,
      prevVnode
    };
    selfHook === null || selfHook === void 0 || selfHook(instance, options);
    defaultHook === null || defaultHook === void 0 || defaultHook(instance, options);
  },
  /* eslint-disable-next-line no-unused-vars */
  _mergeProps: function _mergeProps2() {
    var fn = arguments.length > 1 ? arguments[1] : void 0;
    for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key2 = 2; _key2 < _len; _key2++) {
      args[_key2 - 2] = arguments[_key2];
    }
    return l(fn) ? fn.apply(void 0, args) : mergeProps.apply(void 0, args);
  },
  _extend: function _extend(name) {
    var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    var handleHook = function handleHook2(hook, el, binding, vnode, prevVnode) {
      var _el$$pd, _el$$instance$hook, _el$$instance, _el$$pd2;
      el._$instances = el._$instances || {};
      var config = BaseDirective._getConfig(binding, vnode);
      var $prevInstance = el._$instances[name] || {};
      var $options = a($prevInstance) ? _objectSpread$2(_objectSpread$2({}, options), options === null || options === void 0 ? void 0 : options.methods) : {};
      el._$instances[name] = _objectSpread$2(_objectSpread$2({}, $prevInstance), {}, {
        /* new instance variables to pass in directive methods */
        $name: name,
        $host: el,
        $binding: binding,
        $modifiers: binding === null || binding === void 0 ? void 0 : binding.modifiers,
        $value: binding === null || binding === void 0 ? void 0 : binding.value,
        $el: $prevInstance["$el"] || el || void 0,
        $style: _objectSpread$2({
          classes: void 0,
          inlineStyles: void 0,
          load: function load() {
          },
          loadCSS: function loadCSS() {
          },
          loadStyle: function loadStyle() {
          }
        }, options === null || options === void 0 ? void 0 : options.style),
        $primevueConfig: config,
        $attrSelector: (_el$$pd = el.$pd) === null || _el$$pd === void 0 || (_el$$pd = _el$$pd[name]) === null || _el$$pd === void 0 ? void 0 : _el$$pd.attrSelector,
        /* computed instance variables */
        defaultPT: function defaultPT2() {
          return BaseDirective._getPT(config === null || config === void 0 ? void 0 : config.pt, void 0, function(value) {
            var _value$directives;
            return value === null || value === void 0 || (_value$directives = value.directives) === null || _value$directives === void 0 ? void 0 : _value$directives[name];
          });
        },
        isUnstyled: function isUnstyled2() {
          var _el$_$instances$name, _el$_$instances$name2;
          return ((_el$_$instances$name = el._$instances[name]) === null || _el$_$instances$name === void 0 || (_el$_$instances$name = _el$_$instances$name.$binding) === null || _el$_$instances$name === void 0 || (_el$_$instances$name = _el$_$instances$name.value) === null || _el$_$instances$name === void 0 ? void 0 : _el$_$instances$name.unstyled) !== void 0 ? (_el$_$instances$name2 = el._$instances[name]) === null || _el$_$instances$name2 === void 0 || (_el$_$instances$name2 = _el$_$instances$name2.$binding) === null || _el$_$instances$name2 === void 0 || (_el$_$instances$name2 = _el$_$instances$name2.value) === null || _el$_$instances$name2 === void 0 ? void 0 : _el$_$instances$name2.unstyled : config === null || config === void 0 ? void 0 : config.unstyled;
        },
        theme: function theme() {
          var _el$_$instances$name3;
          return (_el$_$instances$name3 = el._$instances[name]) === null || _el$_$instances$name3 === void 0 || (_el$_$instances$name3 = _el$_$instances$name3.$primevueConfig) === null || _el$_$instances$name3 === void 0 ? void 0 : _el$_$instances$name3.theme;
        },
        preset: function preset() {
          var _el$_$instances$name4;
          return (_el$_$instances$name4 = el._$instances[name]) === null || _el$_$instances$name4 === void 0 || (_el$_$instances$name4 = _el$_$instances$name4.$binding) === null || _el$_$instances$name4 === void 0 || (_el$_$instances$name4 = _el$_$instances$name4.value) === null || _el$_$instances$name4 === void 0 ? void 0 : _el$_$instances$name4.dt;
        },
        /* instance's methods */
        ptm: function ptm2() {
          var _el$_$instances$name5;
          var key = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
          var params = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
          return BaseDirective._getPTValue(el._$instances[name], (_el$_$instances$name5 = el._$instances[name]) === null || _el$_$instances$name5 === void 0 || (_el$_$instances$name5 = _el$_$instances$name5.$binding) === null || _el$_$instances$name5 === void 0 || (_el$_$instances$name5 = _el$_$instances$name5.value) === null || _el$_$instances$name5 === void 0 ? void 0 : _el$_$instances$name5.pt, key, _objectSpread$2({}, params));
        },
        ptmo: function ptmo2() {
          var obj = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
          var key = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
          var params = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
          return BaseDirective._getPTValue(el._$instances[name], obj, key, params, false);
        },
        cx: function cx2() {
          var _el$_$instances$name6, _el$_$instances$name7;
          var key = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
          var params = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
          return !((_el$_$instances$name6 = el._$instances[name]) !== null && _el$_$instances$name6 !== void 0 && _el$_$instances$name6.isUnstyled()) ? BaseDirective._getOptionValue((_el$_$instances$name7 = el._$instances[name]) === null || _el$_$instances$name7 === void 0 || (_el$_$instances$name7 = _el$_$instances$name7.$style) === null || _el$_$instances$name7 === void 0 ? void 0 : _el$_$instances$name7.classes, key, _objectSpread$2({}, params)) : void 0;
        },
        sx: function sx2() {
          var _el$_$instances$name8;
          var key = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
          var when = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
          var params = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
          return when ? BaseDirective._getOptionValue((_el$_$instances$name8 = el._$instances[name]) === null || _el$_$instances$name8 === void 0 || (_el$_$instances$name8 = _el$_$instances$name8.$style) === null || _el$_$instances$name8 === void 0 ? void 0 : _el$_$instances$name8.inlineStyles, key, _objectSpread$2({}, params)) : void 0;
        }
      }, $options);
      el.$instance = el._$instances[name];
      (_el$$instance$hook = (_el$$instance = el.$instance)[hook]) === null || _el$$instance$hook === void 0 || _el$$instance$hook.call(_el$$instance, el, binding, vnode, prevVnode);
      el["$".concat(name)] = el.$instance;
      BaseDirective._hook(name, hook, el, binding, vnode, prevVnode);
      el.$pd || (el.$pd = {});
      el.$pd[name] = _objectSpread$2(_objectSpread$2({}, (_el$$pd2 = el.$pd) === null || _el$$pd2 === void 0 ? void 0 : _el$$pd2[name]), {}, {
        name,
        instance: el._$instances[name]
      });
    };
    var handleWatchers = function handleWatchers2(el) {
      var _watchers$config2, _watchers$configRipp2, _instance$$primevueCo3;
      var instance = el._$instances[name];
      var watchers = instance === null || instance === void 0 ? void 0 : instance.watch;
      var handleWatchConfig = function handleWatchConfig2(_ref8) {
        var _watchers$config;
        var newValue = _ref8.newValue, oldValue = _ref8.oldValue;
        return watchers === null || watchers === void 0 || (_watchers$config = watchers["config"]) === null || _watchers$config === void 0 ? void 0 : _watchers$config.call(instance, newValue, oldValue);
      };
      var handleWatchConfigRipple = function handleWatchConfigRipple2(_ref9) {
        var _watchers$configRipp;
        var newValue = _ref9.newValue, oldValue = _ref9.oldValue;
        return watchers === null || watchers === void 0 || (_watchers$configRipp = watchers["config.ripple"]) === null || _watchers$configRipp === void 0 ? void 0 : _watchers$configRipp.call(instance, newValue, oldValue);
      };
      instance.$watchersCallback = {
        config: handleWatchConfig,
        "config.ripple": handleWatchConfigRipple
      };
      watchers === null || watchers === void 0 || (_watchers$config2 = watchers["config"]) === null || _watchers$config2 === void 0 || _watchers$config2.call(instance, instance === null || instance === void 0 ? void 0 : instance.$primevueConfig);
      PrimeVueService.on("config:change", handleWatchConfig);
      watchers === null || watchers === void 0 || (_watchers$configRipp2 = watchers["config.ripple"]) === null || _watchers$configRipp2 === void 0 || _watchers$configRipp2.call(instance, instance === null || instance === void 0 || (_instance$$primevueCo3 = instance.$primevueConfig) === null || _instance$$primevueCo3 === void 0 ? void 0 : _instance$$primevueCo3.ripple);
      PrimeVueService.on("config:ripple:change", handleWatchConfigRipple);
    };
    var stopWatchers = function stopWatchers2(el) {
      var watchers = el._$instances[name].$watchersCallback;
      if (watchers) {
        PrimeVueService.off("config:change", watchers.config);
        PrimeVueService.off("config:ripple:change", watchers["config.ripple"]);
        el._$instances[name].$watchersCallback = void 0;
      }
    };
    return {
      created: function created2(el, binding, vnode, prevVnode) {
        el.$pd || (el.$pd = {});
        el.$pd[name] = {
          name,
          attrSelector: s("pd")
        };
        handleHook("created", el, binding, vnode, prevVnode);
      },
      beforeMount: function beforeMount3(el, binding, vnode, prevVnode) {
        var _el$$pd$name;
        BaseDirective._loadStyles((_el$$pd$name = el.$pd[name]) === null || _el$$pd$name === void 0 ? void 0 : _el$$pd$name.instance, binding, vnode);
        handleHook("beforeMount", el, binding, vnode, prevVnode);
        handleWatchers(el);
      },
      mounted: function mounted5(el, binding, vnode, prevVnode) {
        var _el$$pd$name2;
        BaseDirective._loadStyles((_el$$pd$name2 = el.$pd[name]) === null || _el$$pd$name2 === void 0 ? void 0 : _el$$pd$name2.instance, binding, vnode);
        handleHook("mounted", el, binding, vnode, prevVnode);
      },
      beforeUpdate: function beforeUpdate2(el, binding, vnode, prevVnode) {
        handleHook("beforeUpdate", el, binding, vnode, prevVnode);
      },
      updated: function updated4(el, binding, vnode, prevVnode) {
        var _el$$pd$name3;
        BaseDirective._loadStyles((_el$$pd$name3 = el.$pd[name]) === null || _el$$pd$name3 === void 0 ? void 0 : _el$$pd$name3.instance, binding, vnode);
        handleHook("updated", el, binding, vnode, prevVnode);
      },
      beforeUnmount: function beforeUnmount3(el, binding, vnode, prevVnode) {
        var _el$$pd$name4;
        stopWatchers(el);
        BaseDirective._removeThemeListeners((_el$$pd$name4 = el.$pd[name]) === null || _el$$pd$name4 === void 0 ? void 0 : _el$$pd$name4.instance);
        handleHook("beforeUnmount", el, binding, vnode, prevVnode);
      },
      unmounted: function unmounted4(el, binding, vnode, prevVnode) {
        var _el$$pd$name5;
        (_el$$pd$name5 = el.$pd[name]) === null || _el$$pd$name5 === void 0 || (_el$$pd$name5 = _el$$pd$name5.instance) === null || _el$$pd$name5 === void 0 || (_el$$pd$name5 = _el$$pd$name5.scopedStyleEl) === null || _el$$pd$name5 === void 0 || (_el$$pd$name5 = _el$$pd$name5.value) === null || _el$$pd$name5 === void 0 || _el$$pd$name5.remove();
        handleHook("unmounted", el, binding, vnode, prevVnode);
      }
    };
  },
  extend: function extend() {
    var _BaseDirective$_getMe = BaseDirective._getMeta.apply(BaseDirective, arguments), _BaseDirective$_getMe2 = _slicedToArray(_BaseDirective$_getMe, 2), name = _BaseDirective$_getMe2[0], options = _BaseDirective$_getMe2[1];
    return _objectSpread$2({
      extend: function extend2() {
        var _BaseDirective$_getMe3 = BaseDirective._getMeta.apply(BaseDirective, arguments), _BaseDirective$_getMe4 = _slicedToArray(_BaseDirective$_getMe3, 2), _name = _BaseDirective$_getMe4[0], _options = _BaseDirective$_getMe4[1];
        return BaseDirective.extend(_name, _objectSpread$2(_objectSpread$2(_objectSpread$2({}, options), options === null || options === void 0 ? void 0 : options.methods), _options));
      }
    }, BaseDirective._extend(name, options));
  }
};
var style$3 = "\n    .p-ink {\n        display: block;\n        position: absolute;\n        background: dt('ripple.background');\n        border-radius: 100%;\n        transform: scale(0);\n        pointer-events: none;\n    }\n\n    .p-ink-active {\n        animation: ripple 0.4s linear;\n    }\n\n    @keyframes ripple {\n        100% {\n            opacity: 0;\n            transform: scale(2.5);\n        }\n    }\n";
var classes$2 = {
  root: "p-ink"
};
var RippleStyle = BaseStyle.extend({
  name: "ripple-directive",
  style: style$3,
  classes: classes$2
});
var BaseRipple = BaseDirective.extend({
  style: RippleStyle
});
function _typeof$3(o) {
  "@babel/helpers - typeof";
  return _typeof$3 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof$3(o);
}
function _toConsumableArray$1(r) {
  return _arrayWithoutHoles$1(r) || _iterableToArray$1(r) || _unsupportedIterableToArray$1(r) || _nonIterableSpread$1();
}
function _nonIterableSpread$1() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray$1(r, a2) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray$1(r, a2);
    var t2 = {}.toString.call(r).slice(8, -1);
    return "Object" === t2 && r.constructor && (t2 = r.constructor.name), "Map" === t2 || "Set" === t2 ? Array.from(r) : "Arguments" === t2 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t2) ? _arrayLikeToArray$1(r, a2) : void 0;
  }
}
function _iterableToArray$1(r) {
  if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r);
}
function _arrayWithoutHoles$1(r) {
  if (Array.isArray(r)) return _arrayLikeToArray$1(r);
}
function _arrayLikeToArray$1(r, a2) {
  (null == a2 || a2 > r.length) && (a2 = r.length);
  for (var e = 0, n = Array(a2); e < a2; e++) n[e] = r[e];
  return n;
}
function _defineProperty$3(e, r, t2) {
  return (r = _toPropertyKey$3(r)) in e ? Object.defineProperty(e, r, { value: t2, enumerable: true, configurable: true, writable: true }) : e[r] = t2, e;
}
function _toPropertyKey$3(t2) {
  var i2 = _toPrimitive$3(t2, "string");
  return "symbol" == _typeof$3(i2) ? i2 : i2 + "";
}
function _toPrimitive$3(t2, r) {
  if ("object" != _typeof$3(t2) || !t2) return t2;
  var e = t2[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i2 = e.call(t2, r);
    if ("object" != _typeof$3(i2)) return i2;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t2);
}
var Ripple = BaseRipple.extend("ripple", {
  watch: {
    "config.ripple": function configRipple(newValue) {
      if (newValue) {
        this.createRipple(this.$host);
        this.bindEvents(this.$host);
        this.$host.setAttribute("data-pd-ripple", true);
        this.$host.style["overflow"] = "hidden";
        this.$host.style["position"] = "relative";
      } else {
        this.remove(this.$host);
        this.$host.removeAttribute("data-pd-ripple");
      }
    }
  },
  unmounted: function unmounted2(el) {
    this.remove(el);
  },
  timeout: void 0,
  methods: {
    bindEvents: function bindEvents(el) {
      el.addEventListener("mousedown", this.onMouseDown.bind(this));
    },
    unbindEvents: function unbindEvents(el) {
      el.removeEventListener("mousedown", this.onMouseDown.bind(this));
    },
    createRipple: function createRipple(el) {
      var ink = this.getInk(el);
      if (!ink) {
        ink = U("span", _defineProperty$3(_defineProperty$3({
          role: "presentation",
          "aria-hidden": true,
          "data-p-ink": true,
          "data-p-ink-active": false,
          "class": !this.isUnstyled() && this.cx("root"),
          onAnimationEnd: this.onAnimationEnd.bind(this)
        }, this.$attrSelector, ""), "p-bind", this.ptm("root")));
        el.appendChild(ink);
        this.$el = ink;
      }
    },
    remove: function remove(el) {
      var ink = this.getInk(el);
      if (ink) {
        this.$host.style["overflow"] = "";
        this.$host.style["position"] = "";
        this.unbindEvents(el);
        ink.removeEventListener("animationend", this.onAnimationEnd);
        ink.remove();
      }
    },
    onMouseDown: function onMouseDown(event) {
      var _this = this;
      var target = event.currentTarget;
      var ink = this.getInk(target);
      if (!ink || getComputedStyle(ink, null).display === "none") {
        return;
      }
      !this.isUnstyled() && O(ink, "p-ink-active");
      ink.setAttribute("data-p-ink-active", "false");
      if (!Tt(ink) && !Rt(ink)) {
        var d = Math.max(v$1(target), C(target));
        ink.style.height = d + "px";
        ink.style.width = d + "px";
      }
      var offset = K(target);
      var x2 = event.pageX - offset.left + document.body.scrollTop - Rt(ink) / 2;
      var y = event.pageY - offset.top + document.body.scrollLeft - Tt(ink) / 2;
      ink.style.top = y + "px";
      ink.style.left = x2 + "px";
      !this.isUnstyled() && W(ink, "p-ink-active");
      ink.setAttribute("data-p-ink-active", "true");
      this.timeout = setTimeout(function() {
        if (ink) {
          !_this.isUnstyled() && O(ink, "p-ink-active");
          ink.setAttribute("data-p-ink-active", "false");
        }
      }, 401);
    },
    onAnimationEnd: function onAnimationEnd(event) {
      if (this.timeout) {
        clearTimeout(this.timeout);
      }
      !this.isUnstyled() && O(event.currentTarget, "p-ink-active");
      event.currentTarget.setAttribute("data-p-ink-active", "false");
    },
    getInk: function getInk(el) {
      return el && el.children ? _toConsumableArray$1(el.children).find(function(child) {
        return Q(child, "data-pc-name") === "ripple";
      }) : void 0;
    }
  }
});
var style$2 = "\n    .p-virtualscroller-loader {\n        background: dt('virtualscroller.loader.mask.background');\n        color: dt('virtualscroller.loader.mask.color');\n    }\n\n    .p-virtualscroller-loading-icon {\n        font-size: dt('virtualscroller.loader.icon.size');\n        width: dt('virtualscroller.loader.icon.size');\n        height: dt('virtualscroller.loader.icon.size');\n    }\n";
var css = "\n.p-virtualscroller {\n    position: relative;\n    overflow: auto;\n    contain: strict;\n    transform: translateZ(0);\n    will-change: scroll-position;\n    outline: 0 none;\n}\n\n.p-virtualscroller-content {\n    position: absolute;\n    top: 0;\n    left: 0;\n    min-height: 100%;\n    min-width: 100%;\n    will-change: transform;\n}\n\n.p-virtualscroller-spacer {\n    position: absolute;\n    top: 0;\n    left: 0;\n    height: 1px;\n    width: 1px;\n    transform-origin: 0 0;\n    pointer-events: none;\n}\n\n.p-virtualscroller-loader {\n    position: sticky;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n}\n\n.p-virtualscroller-loader-mask {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.p-virtualscroller-horizontal > .p-virtualscroller-content {\n    display: flex;\n}\n\n.p-virtualscroller-inline .p-virtualscroller-content {\n    position: static;\n}\n\n.p-virtualscroller .p-virtualscroller-loading {\n    transform: none !important;\n    min-height: 0;\n    position: sticky;\n    inset-block-start: 0;\n    inset-inline-start: 0;\n}\n";
var VirtualScrollerStyle = BaseStyle.extend({
  name: "virtualscroller",
  css,
  style: style$2
});
var script$1$2 = {
  name: "BaseVirtualScroller",
  "extends": script$d,
  props: {
    id: {
      type: String,
      "default": null
    },
    style: null,
    "class": null,
    items: {
      type: Array,
      "default": null
    },
    itemSize: {
      type: [Number, Array],
      "default": 0
    },
    scrollHeight: null,
    scrollWidth: null,
    orientation: {
      type: String,
      "default": "vertical"
    },
    numToleratedItems: {
      type: Number,
      "default": null
    },
    delay: {
      type: Number,
      "default": 0
    },
    resizeDelay: {
      type: Number,
      "default": 10
    },
    lazy: {
      type: Boolean,
      "default": false
    },
    disabled: {
      type: Boolean,
      "default": false
    },
    loaderDisabled: {
      type: Boolean,
      "default": false
    },
    columns: {
      type: Array,
      "default": null
    },
    loading: {
      type: Boolean,
      "default": false
    },
    showSpacer: {
      type: Boolean,
      "default": true
    },
    showLoader: {
      type: Boolean,
      "default": false
    },
    tabindex: {
      type: Number,
      "default": 0
    },
    inline: {
      type: Boolean,
      "default": false
    },
    step: {
      type: Number,
      "default": 0
    },
    appendOnly: {
      type: Boolean,
      "default": false
    },
    autoSize: {
      type: Boolean,
      "default": false
    }
  },
  style: VirtualScrollerStyle,
  provide: function provide4() {
    return {
      $pcVirtualScroller: this,
      $parentInstance: this
    };
  },
  beforeMount: function beforeMount2() {
    var _this$$primevueConfig;
    VirtualScrollerStyle.loadCSS({
      nonce: (_this$$primevueConfig = this.$primevueConfig) === null || _this$$primevueConfig === void 0 || (_this$$primevueConfig = _this$$primevueConfig.csp) === null || _this$$primevueConfig === void 0 ? void 0 : _this$$primevueConfig.nonce
    });
  }
};
function _typeof$2(o) {
  "@babel/helpers - typeof";
  return _typeof$2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof$2(o);
}
function ownKeys$1(e, r) {
  var t2 = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t2.push.apply(t2, o);
  }
  return t2;
}
function _objectSpread$1(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t2 = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys$1(Object(t2), true).forEach(function(r2) {
      _defineProperty$2(e, r2, t2[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t2)) : ownKeys$1(Object(t2)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t2, r2));
    });
  }
  return e;
}
function _defineProperty$2(e, r, t2) {
  return (r = _toPropertyKey$2(r)) in e ? Object.defineProperty(e, r, { value: t2, enumerable: true, configurable: true, writable: true }) : e[r] = t2, e;
}
function _toPropertyKey$2(t2) {
  var i2 = _toPrimitive$2(t2, "string");
  return "symbol" == _typeof$2(i2) ? i2 : i2 + "";
}
function _toPrimitive$2(t2, r) {
  if ("object" != _typeof$2(t2) || !t2) return t2;
  var e = t2[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i2 = e.call(t2, r);
    if ("object" != _typeof$2(i2)) return i2;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t2);
}
var script$3 = {
  name: "VirtualScroller",
  "extends": script$1$2,
  inheritAttrs: false,
  emits: ["update:numToleratedItems", "scroll", "scroll-index-change", "lazy-load"],
  data: function data4() {
    var both = this.isBoth();
    return {
      first: both ? {
        rows: 0,
        cols: 0
      } : 0,
      last: both ? {
        rows: 0,
        cols: 0
      } : 0,
      page: both ? {
        rows: 0,
        cols: 0
      } : 0,
      numItemsInViewport: both ? {
        rows: 0,
        cols: 0
      } : 0,
      lastScrollPos: both ? {
        top: 0,
        left: 0
      } : 0,
      d_numToleratedItems: this.numToleratedItems,
      d_loading: this.loading,
      loaderArr: [],
      spacerStyle: {},
      contentStyle: {}
    };
  },
  element: null,
  content: null,
  lastScrollPos: null,
  scrollTimeout: null,
  resizeTimeout: null,
  defaultWidth: 0,
  defaultHeight: 0,
  defaultContentWidth: 0,
  defaultContentHeight: 0,
  isRangeChanged: false,
  lazyLoadState: {},
  resizeListener: null,
  resizeObserver: null,
  initialized: false,
  watch: {
    numToleratedItems: function numToleratedItems(newValue) {
      this.d_numToleratedItems = newValue;
    },
    loading: function loading(newValue, oldValue) {
      if (this.lazy && newValue !== oldValue && newValue !== this.d_loading) {
        this.d_loading = newValue;
      }
    },
    items: {
      handler: function handler7(newValue, oldValue) {
        if (!oldValue || oldValue.length !== (newValue || []).length) {
          this.init();
          this.calculateAutoSize();
        }
      },
      deep: true
    },
    itemSize: function itemSize() {
      this.init();
      this.calculateAutoSize();
    },
    orientation: function orientation() {
      this.lastScrollPos = this.isBoth() ? {
        top: 0,
        left: 0
      } : 0;
    },
    scrollHeight: function scrollHeight() {
      this.init();
      this.calculateAutoSize();
    },
    scrollWidth: function scrollWidth() {
      this.init();
      this.calculateAutoSize();
    }
  },
  mounted: function mounted3() {
    this.viewInit();
    this.lastScrollPos = this.isBoth() ? {
      top: 0,
      left: 0
    } : 0;
    this.lazyLoadState = this.lazyLoadState || {};
  },
  updated: function updated2() {
    !this.initialized && this.viewInit();
  },
  unmounted: function unmounted3() {
    this.unbindResizeListener();
    this.initialized = false;
  },
  methods: {
    viewInit: function viewInit() {
      if (et(this.element)) {
        this.setContentEl(this.content);
        this.init();
        this.calculateAutoSize();
        this.defaultWidth = Rt(this.element);
        this.defaultHeight = Tt(this.element);
        this.defaultContentWidth = Rt(this.content);
        this.defaultContentHeight = Tt(this.content);
        this.initialized = true;
      }
      if (this.element) {
        this.bindResizeListener();
      }
    },
    init: function init() {
      if (!this.disabled) {
        this.setSize();
        this.calculateOptions();
        this.setSpacerSize();
      }
    },
    isVertical: function isVertical() {
      return this.orientation === "vertical";
    },
    isHorizontal: function isHorizontal() {
      return this.orientation === "horizontal";
    },
    isBoth: function isBoth() {
      return this.orientation === "both";
    },
    scrollTo: function scrollTo(options) {
      this.element && this.element.scrollTo(options);
    },
    scrollToIndex: function scrollToIndex(index) {
      var _this = this;
      var behavior = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "auto";
      var both = this.isBoth();
      var horizontal = this.isHorizontal();
      var valid = both ? index.every(function(i2) {
        return i2 > -1;
      }) : index > -1;
      if (valid) {
        var first = this.first;
        var _this$element = this.element, _this$element$scrollT = _this$element.scrollTop, scrollTop = _this$element$scrollT === void 0 ? 0 : _this$element$scrollT, _this$element$scrollL = _this$element.scrollLeft, scrollLeft = _this$element$scrollL === void 0 ? 0 : _this$element$scrollL;
        var _this$calculateNumIte = this.calculateNumItems(), numToleratedItems2 = _this$calculateNumIte.numToleratedItems;
        var contentPos = this.getContentPosition();
        var itemSize2 = this.itemSize;
        var calculateFirst = function calculateFirst2() {
          var _index = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
          var _numT = arguments.length > 1 ? arguments[1] : void 0;
          return _index <= _numT ? 0 : _index;
        };
        var calculateCoord = function calculateCoord2(_first, _size, _cpos) {
          return _first * _size + _cpos;
        };
        var scrollTo2 = function scrollTo3() {
          var left = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
          var top = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
          return _this.scrollTo({
            left,
            top,
            behavior
          });
        };
        var newFirst = both ? {
          rows: 0,
          cols: 0
        } : 0;
        var isRangeChanged = false, isScrollChanged = false;
        if (both) {
          newFirst = {
            rows: calculateFirst(index[0], numToleratedItems2[0]),
            cols: calculateFirst(index[1], numToleratedItems2[1])
          };
          scrollTo2(calculateCoord(newFirst.cols, itemSize2[1], contentPos.left), calculateCoord(newFirst.rows, itemSize2[0], contentPos.top));
          isScrollChanged = this.lastScrollPos.top !== scrollTop || this.lastScrollPos.left !== scrollLeft;
          isRangeChanged = newFirst.rows !== first.rows || newFirst.cols !== first.cols;
        } else {
          newFirst = calculateFirst(index, numToleratedItems2);
          horizontal ? scrollTo2(calculateCoord(newFirst, itemSize2, contentPos.left), scrollTop) : scrollTo2(scrollLeft, calculateCoord(newFirst, itemSize2, contentPos.top));
          isScrollChanged = this.lastScrollPos !== (horizontal ? scrollLeft : scrollTop);
          isRangeChanged = newFirst !== first;
        }
        this.isRangeChanged = isRangeChanged;
        isScrollChanged && (this.first = newFirst);
      }
    },
    scrollInView: function scrollInView(index, to) {
      var _this2 = this;
      var behavior = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "auto";
      if (to) {
        var both = this.isBoth();
        var horizontal = this.isHorizontal();
        var valid = both ? index.every(function(i2) {
          return i2 > -1;
        }) : index > -1;
        if (valid) {
          var _this$getRenderedRang = this.getRenderedRange(), first = _this$getRenderedRang.first, viewport = _this$getRenderedRang.viewport;
          var scrollTo2 = function scrollTo3() {
            var left = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
            var top = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
            return _this2.scrollTo({
              left,
              top,
              behavior
            });
          };
          var isToStart = to === "to-start";
          var isToEnd = to === "to-end";
          if (isToStart) {
            if (both) {
              if (viewport.first.rows - first.rows > index[0]) {
                scrollTo2(viewport.first.cols * this.itemSize[1], (viewport.first.rows - 1) * this.itemSize[0]);
              } else if (viewport.first.cols - first.cols > index[1]) {
                scrollTo2((viewport.first.cols - 1) * this.itemSize[1], viewport.first.rows * this.itemSize[0]);
              }
            } else {
              if (viewport.first - first > index) {
                var pos = (viewport.first - 1) * this.itemSize;
                horizontal ? scrollTo2(pos, 0) : scrollTo2(0, pos);
              }
            }
          } else if (isToEnd) {
            if (both) {
              if (viewport.last.rows - first.rows <= index[0] + 1) {
                scrollTo2(viewport.first.cols * this.itemSize[1], (viewport.first.rows + 1) * this.itemSize[0]);
              } else if (viewport.last.cols - first.cols <= index[1] + 1) {
                scrollTo2((viewport.first.cols + 1) * this.itemSize[1], viewport.first.rows * this.itemSize[0]);
              }
            } else {
              if (viewport.last - first <= index + 1) {
                var _pos2 = (viewport.first + 1) * this.itemSize;
                horizontal ? scrollTo2(_pos2, 0) : scrollTo2(0, _pos2);
              }
            }
          }
        }
      } else {
        this.scrollToIndex(index, behavior);
      }
    },
    getRenderedRange: function getRenderedRange() {
      var calculateFirstInViewport = function calculateFirstInViewport2(_pos, _size) {
        return Math.floor(_pos / (_size || _pos));
      };
      var firstInViewport = this.first;
      var lastInViewport = 0;
      if (this.element) {
        var both = this.isBoth();
        var horizontal = this.isHorizontal();
        var _this$element2 = this.element, scrollTop = _this$element2.scrollTop, scrollLeft = _this$element2.scrollLeft;
        if (both) {
          firstInViewport = {
            rows: calculateFirstInViewport(scrollTop, this.itemSize[0]),
            cols: calculateFirstInViewport(scrollLeft, this.itemSize[1])
          };
          lastInViewport = {
            rows: firstInViewport.rows + this.numItemsInViewport.rows,
            cols: firstInViewport.cols + this.numItemsInViewport.cols
          };
        } else {
          var scrollPos = horizontal ? scrollLeft : scrollTop;
          firstInViewport = calculateFirstInViewport(scrollPos, this.itemSize);
          lastInViewport = firstInViewport + this.numItemsInViewport;
        }
      }
      return {
        first: this.first,
        last: this.last,
        viewport: {
          first: firstInViewport,
          last: lastInViewport
        }
      };
    },
    calculateNumItems: function calculateNumItems() {
      var both = this.isBoth();
      var horizontal = this.isHorizontal();
      var itemSize2 = this.itemSize;
      var contentPos = this.getContentPosition();
      var contentWidth = this.element ? this.element.offsetWidth - contentPos.left : 0;
      var contentHeight = this.element ? this.element.offsetHeight - contentPos.top : 0;
      var calculateNumItemsInViewport = function calculateNumItemsInViewport2(_contentSize, _itemSize) {
        return Math.ceil(_contentSize / (_itemSize || _contentSize));
      };
      var calculateNumToleratedItems = function calculateNumToleratedItems2(_numItems) {
        return Math.ceil(_numItems / 2);
      };
      var numItemsInViewport = both ? {
        rows: calculateNumItemsInViewport(contentHeight, itemSize2[0]),
        cols: calculateNumItemsInViewport(contentWidth, itemSize2[1])
      } : calculateNumItemsInViewport(horizontal ? contentWidth : contentHeight, itemSize2);
      var numToleratedItems2 = this.d_numToleratedItems || (both ? [calculateNumToleratedItems(numItemsInViewport.rows), calculateNumToleratedItems(numItemsInViewport.cols)] : calculateNumToleratedItems(numItemsInViewport));
      return {
        numItemsInViewport,
        numToleratedItems: numToleratedItems2
      };
    },
    calculateOptions: function calculateOptions() {
      var _this3 = this;
      var both = this.isBoth();
      var first = this.first;
      var _this$calculateNumIte2 = this.calculateNumItems(), numItemsInViewport = _this$calculateNumIte2.numItemsInViewport, numToleratedItems2 = _this$calculateNumIte2.numToleratedItems;
      var calculateLast = function calculateLast2(_first, _num, _numT) {
        var _isCols = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : false;
        return _this3.getLast(_first + _num + (_first < _numT ? 2 : 3) * _numT, _isCols);
      };
      var last = both ? {
        rows: calculateLast(first.rows, numItemsInViewport.rows, numToleratedItems2[0]),
        cols: calculateLast(first.cols, numItemsInViewport.cols, numToleratedItems2[1], true)
      } : calculateLast(first, numItemsInViewport, numToleratedItems2);
      this.last = last;
      this.numItemsInViewport = numItemsInViewport;
      this.d_numToleratedItems = numToleratedItems2;
      this.$emit("update:numToleratedItems", this.d_numToleratedItems);
      if (this.showLoader) {
        this.loaderArr = both ? Array.from({
          length: numItemsInViewport.rows
        }).map(function() {
          return Array.from({
            length: numItemsInViewport.cols
          });
        }) : Array.from({
          length: numItemsInViewport
        });
      }
      if (this.lazy) {
        Promise.resolve().then(function() {
          var _this3$items;
          _this3.lazyLoadState = {
            first: _this3.step ? both ? {
              rows: 0,
              cols: first.cols
            } : 0 : first,
            last: Math.min(_this3.step ? _this3.step : last, ((_this3$items = _this3.items) === null || _this3$items === void 0 ? void 0 : _this3$items.length) || 0)
          };
          _this3.$emit("lazy-load", _this3.lazyLoadState);
        });
      }
    },
    calculateAutoSize: function calculateAutoSize() {
      var _this4 = this;
      if (this.autoSize && !this.d_loading) {
        Promise.resolve().then(function() {
          if (_this4.content) {
            var both = _this4.isBoth();
            var horizontal = _this4.isHorizontal();
            var vertical = _this4.isVertical();
            _this4.content.style.minHeight = _this4.content.style.minWidth = "auto";
            _this4.content.style.position = "relative";
            _this4.element.style.contain = "none";
            var _ref = [Rt(_this4.element), Tt(_this4.element)], width = _ref[0], height = _ref[1];
            (both || horizontal) && (_this4.element.style.width = width < _this4.defaultWidth ? width + "px" : _this4.scrollWidth || _this4.defaultWidth + "px");
            (both || vertical) && (_this4.element.style.height = height < _this4.defaultHeight ? height + "px" : _this4.scrollHeight || _this4.defaultHeight + "px");
            _this4.content.style.minHeight = _this4.content.style.minWidth = "";
            _this4.content.style.position = "";
            _this4.element.style.contain = "";
          }
        });
      }
    },
    getLast: function getLast() {
      var _ref2, _this$items;
      var last = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
      var isCols = arguments.length > 1 ? arguments[1] : void 0;
      return this.items ? Math.min(isCols ? ((_ref2 = this.columns || this.items[0]) === null || _ref2 === void 0 ? void 0 : _ref2.length) || 0 : ((_this$items = this.items) === null || _this$items === void 0 ? void 0 : _this$items.length) || 0, last) : 0;
    },
    getContentPosition: function getContentPosition() {
      if (this.content) {
        var style2 = getComputedStyle(this.content);
        var left = parseFloat(style2.paddingLeft) + Math.max(parseFloat(style2.left) || 0, 0);
        var right = parseFloat(style2.paddingRight) + Math.max(parseFloat(style2.right) || 0, 0);
        var top = parseFloat(style2.paddingTop) + Math.max(parseFloat(style2.top) || 0, 0);
        var bottom = parseFloat(style2.paddingBottom) + Math.max(parseFloat(style2.bottom) || 0, 0);
        return {
          left,
          right,
          top,
          bottom,
          x: left + right,
          y: top + bottom
        };
      }
      return {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        x: 0,
        y: 0
      };
    },
    setSize: function setSize() {
      var _this5 = this;
      if (this.element) {
        var both = this.isBoth();
        var horizontal = this.isHorizontal();
        var parentElement = this.element.parentElement;
        var width = this.scrollWidth || "".concat(this.element.offsetWidth || parentElement.offsetWidth, "px");
        var height = this.scrollHeight || "".concat(this.element.offsetHeight || parentElement.offsetHeight, "px");
        var setProp = function setProp2(_name, _value) {
          return _this5.element.style[_name] = _value;
        };
        if (both || horizontal) {
          setProp("height", height);
          setProp("width", width);
        } else {
          setProp("height", height);
        }
      }
    },
    setSpacerSize: function setSpacerSize() {
      var _this6 = this;
      var items = this.items;
      if (items) {
        var both = this.isBoth();
        var horizontal = this.isHorizontal();
        var contentPos = this.getContentPosition();
        var setProp = function setProp2(_name, _value, _size) {
          var _cpos = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0;
          return _this6.spacerStyle = _objectSpread$1(_objectSpread$1({}, _this6.spacerStyle), _defineProperty$2({}, "".concat(_name), (_value || []).length * _size + _cpos + "px"));
        };
        if (both) {
          setProp("height", items, this.itemSize[0], contentPos.y);
          setProp("width", this.columns || items[1], this.itemSize[1], contentPos.x);
        } else {
          horizontal ? setProp("width", this.columns || items, this.itemSize, contentPos.x) : setProp("height", items, this.itemSize, contentPos.y);
        }
      }
    },
    setContentPosition: function setContentPosition(pos) {
      var _this7 = this;
      if (this.content && !this.appendOnly) {
        var both = this.isBoth();
        var horizontal = this.isHorizontal();
        var first = pos ? pos.first : this.first;
        var calculateTranslateVal = function calculateTranslateVal2(_first, _size) {
          return _first * _size;
        };
        var setTransform = function setTransform2() {
          var _x = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
          var _y = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
          return _this7.contentStyle = _objectSpread$1(_objectSpread$1({}, _this7.contentStyle), {
            transform: "translate3d(".concat(_x, "px, ").concat(_y, "px, 0)")
          });
        };
        if (both) {
          setTransform(calculateTranslateVal(first.cols, this.itemSize[1]), calculateTranslateVal(first.rows, this.itemSize[0]));
        } else {
          var translateVal = calculateTranslateVal(first, this.itemSize);
          horizontal ? setTransform(translateVal, 0) : setTransform(0, translateVal);
        }
      }
    },
    onScrollPositionChange: function onScrollPositionChange(event) {
      var _this8 = this;
      var target = event.target;
      var both = this.isBoth();
      var horizontal = this.isHorizontal();
      var contentPos = this.getContentPosition();
      var calculateScrollPos = function calculateScrollPos2(_pos, _cpos) {
        return _pos ? _pos > _cpos ? _pos - _cpos : _pos : 0;
      };
      var calculateCurrentIndex = function calculateCurrentIndex2(_pos, _size) {
        return Math.floor(_pos / (_size || _pos));
      };
      var calculateTriggerIndex = function calculateTriggerIndex2(_currentIndex, _first, _last, _num, _numT, _isScrollDownOrRight) {
        return _currentIndex <= _numT ? _numT : _isScrollDownOrRight ? _last - _num - _numT : _first + _numT - 1;
      };
      var calculateFirst = function calculateFirst2(_currentIndex, _triggerIndex, _first, _last, _num, _numT, _isScrollDownOrRight, _isCols) {
        if (_currentIndex <= _numT) return 0;
        var firstValue = Math.max(0, _isScrollDownOrRight ? _currentIndex < _triggerIndex ? _first : _currentIndex - _numT : _currentIndex > _triggerIndex ? _first : _currentIndex - 2 * _numT);
        var maxFirst = _this8.getLast(firstValue, _isCols);
        if (firstValue > maxFirst) return maxFirst - _num;
        else return firstValue;
      };
      var calculateLast = function calculateLast2(_currentIndex, _first, _last, _num, _numT, _isCols) {
        var lastValue = _first + _num + 2 * _numT;
        if (_currentIndex >= _numT) {
          lastValue += _numT + 1;
        }
        return _this8.getLast(lastValue, _isCols);
      };
      var scrollTop = calculateScrollPos(target.scrollTop, contentPos.top);
      var scrollLeft = calculateScrollPos(target.scrollLeft, contentPos.left);
      var newFirst = both ? {
        rows: 0,
        cols: 0
      } : 0;
      var newLast = this.last;
      var isRangeChanged = false;
      var newScrollPos = this.lastScrollPos;
      if (both) {
        var isScrollDown = this.lastScrollPos.top <= scrollTop;
        var isScrollRight = this.lastScrollPos.left <= scrollLeft;
        if (!this.appendOnly || this.appendOnly && (isScrollDown || isScrollRight)) {
          var currentIndex = {
            rows: calculateCurrentIndex(scrollTop, this.itemSize[0]),
            cols: calculateCurrentIndex(scrollLeft, this.itemSize[1])
          };
          var triggerIndex = {
            rows: calculateTriggerIndex(currentIndex.rows, this.first.rows, this.last.rows, this.numItemsInViewport.rows, this.d_numToleratedItems[0], isScrollDown),
            cols: calculateTriggerIndex(currentIndex.cols, this.first.cols, this.last.cols, this.numItemsInViewport.cols, this.d_numToleratedItems[1], isScrollRight)
          };
          newFirst = {
            rows: calculateFirst(currentIndex.rows, triggerIndex.rows, this.first.rows, this.last.rows, this.numItemsInViewport.rows, this.d_numToleratedItems[0], isScrollDown),
            cols: calculateFirst(currentIndex.cols, triggerIndex.cols, this.first.cols, this.last.cols, this.numItemsInViewport.cols, this.d_numToleratedItems[1], isScrollRight, true)
          };
          newLast = {
            rows: calculateLast(currentIndex.rows, newFirst.rows, this.last.rows, this.numItemsInViewport.rows, this.d_numToleratedItems[0]),
            cols: calculateLast(currentIndex.cols, newFirst.cols, this.last.cols, this.numItemsInViewport.cols, this.d_numToleratedItems[1], true)
          };
          isRangeChanged = newFirst.rows !== this.first.rows || newLast.rows !== this.last.rows || newFirst.cols !== this.first.cols || newLast.cols !== this.last.cols || this.isRangeChanged;
          newScrollPos = {
            top: scrollTop,
            left: scrollLeft
          };
        }
      } else {
        var scrollPos = horizontal ? scrollLeft : scrollTop;
        var isScrollDownOrRight = this.lastScrollPos <= scrollPos;
        if (!this.appendOnly || this.appendOnly && isScrollDownOrRight) {
          var _currentIndex2 = calculateCurrentIndex(scrollPos, this.itemSize);
          var _triggerIndex2 = calculateTriggerIndex(_currentIndex2, this.first, this.last, this.numItemsInViewport, this.d_numToleratedItems, isScrollDownOrRight);
          newFirst = calculateFirst(_currentIndex2, _triggerIndex2, this.first, this.last, this.numItemsInViewport, this.d_numToleratedItems, isScrollDownOrRight);
          newLast = calculateLast(_currentIndex2, newFirst, this.last, this.numItemsInViewport, this.d_numToleratedItems);
          isRangeChanged = newFirst !== this.first || newLast !== this.last || this.isRangeChanged;
          newScrollPos = scrollPos;
        }
      }
      return {
        first: newFirst,
        last: newLast,
        isRangeChanged,
        scrollPos: newScrollPos
      };
    },
    onScrollChange: function onScrollChange(event) {
      var _this$onScrollPositio = this.onScrollPositionChange(event), first = _this$onScrollPositio.first, last = _this$onScrollPositio.last, isRangeChanged = _this$onScrollPositio.isRangeChanged, scrollPos = _this$onScrollPositio.scrollPos;
      if (isRangeChanged) {
        var newState = {
          first,
          last
        };
        this.setContentPosition(newState);
        this.first = first;
        this.last = last;
        this.lastScrollPos = scrollPos;
        this.$emit("scroll-index-change", newState);
        if (this.lazy && this.isPageChanged(first)) {
          var _this$items2, _this$items3;
          var lazyLoadState = {
            first: this.step ? Math.min(this.getPageByFirst(first) * this.step, (((_this$items2 = this.items) === null || _this$items2 === void 0 ? void 0 : _this$items2.length) || 0) - this.step) : first,
            last: Math.min(this.step ? (this.getPageByFirst(first) + 1) * this.step : last, ((_this$items3 = this.items) === null || _this$items3 === void 0 ? void 0 : _this$items3.length) || 0)
          };
          var isLazyStateChanged = this.lazyLoadState.first !== lazyLoadState.first || this.lazyLoadState.last !== lazyLoadState.last;
          isLazyStateChanged && this.$emit("lazy-load", lazyLoadState);
          this.lazyLoadState = lazyLoadState;
        }
      }
    },
    onScroll: function onScroll(event) {
      var _this9 = this;
      this.$emit("scroll", event);
      if (this.delay) {
        if (this.scrollTimeout) {
          clearTimeout(this.scrollTimeout);
        }
        if (this.isPageChanged()) {
          if (!this.d_loading && this.showLoader) {
            var _this$onScrollPositio2 = this.onScrollPositionChange(event), isRangeChanged = _this$onScrollPositio2.isRangeChanged;
            var changed = isRangeChanged || (this.step ? this.isPageChanged() : false);
            changed && (this.d_loading = true);
          }
          this.scrollTimeout = setTimeout(function() {
            _this9.onScrollChange(event);
            if (_this9.d_loading && _this9.showLoader && (!_this9.lazy || _this9.loading === void 0)) {
              _this9.d_loading = false;
              _this9.page = _this9.getPageByFirst();
            }
          }, this.delay);
        }
      } else {
        this.onScrollChange(event);
      }
    },
    onResize: function onResize() {
      var _this0 = this;
      if (this.resizeTimeout) {
        clearTimeout(this.resizeTimeout);
      }
      this.resizeTimeout = setTimeout(function() {
        if (et(_this0.element)) {
          var both = _this0.isBoth();
          var vertical = _this0.isVertical();
          var horizontal = _this0.isHorizontal();
          var _ref3 = [Rt(_this0.element), Tt(_this0.element)], width = _ref3[0], height = _ref3[1];
          var isDiffWidth = width !== _this0.defaultWidth, isDiffHeight = height !== _this0.defaultHeight;
          var reinit = both ? isDiffWidth || isDiffHeight : horizontal ? isDiffWidth : vertical ? isDiffHeight : false;
          if (reinit) {
            _this0.d_numToleratedItems = _this0.numToleratedItems;
            _this0.defaultWidth = width;
            _this0.defaultHeight = height;
            _this0.defaultContentWidth = Rt(_this0.content);
            _this0.defaultContentHeight = Tt(_this0.content);
            _this0.init();
          }
        }
      }, this.resizeDelay);
    },
    bindResizeListener: function bindResizeListener() {
      var _this1 = this;
      if (!this.resizeListener) {
        this.resizeListener = this.onResize.bind(this);
        window.addEventListener("resize", this.resizeListener);
        window.addEventListener("orientationchange", this.resizeListener);
        this.resizeObserver = new ResizeObserver(function() {
          _this1.onResize();
        });
        this.resizeObserver.observe(this.element);
      }
    },
    unbindResizeListener: function unbindResizeListener() {
      if (this.resizeListener) {
        window.removeEventListener("resize", this.resizeListener);
        window.removeEventListener("orientationchange", this.resizeListener);
        this.resizeListener = null;
      }
      if (this.resizeObserver) {
        this.resizeObserver.disconnect();
        this.resizeObserver = null;
      }
    },
    getOptions: function getOptions(renderedIndex) {
      var count = (this.items || []).length;
      var index = this.isBoth() ? this.first.rows + renderedIndex : this.first + renderedIndex;
      return {
        index,
        count,
        first: index === 0,
        last: index === count - 1,
        even: index % 2 === 0,
        odd: index % 2 !== 0
      };
    },
    getLoaderOptions: function getLoaderOptions(index, extOptions) {
      var count = this.loaderArr.length;
      return _objectSpread$1({
        index,
        count,
        first: index === 0,
        last: index === count - 1,
        even: index % 2 === 0,
        odd: index % 2 !== 0
      }, extOptions);
    },
    getPageByFirst: function getPageByFirst(first) {
      return Math.floor(((first !== null && first !== void 0 ? first : this.first) + this.d_numToleratedItems * 4) / (this.step || 1));
    },
    isPageChanged: function isPageChanged(first) {
      return this.step && !this.lazy ? this.page !== this.getPageByFirst(first !== null && first !== void 0 ? first : this.first) : true;
    },
    setContentEl: function setContentEl(el) {
      this.content = el || this.content || z(this.element, '[data-pc-section="content"]');
    },
    elementRef: function elementRef(el) {
      this.element = el;
    },
    contentRef: function contentRef(el) {
      this.content = el;
    }
  },
  computed: {
    containerClass: function containerClass() {
      return ["p-virtualscroller", this["class"], {
        "p-virtualscroller-inline": this.inline,
        "p-virtualscroller-both p-both-scroll": this.isBoth(),
        "p-virtualscroller-horizontal p-horizontal-scroll": this.isHorizontal()
      }];
    },
    contentClass: function contentClass() {
      return ["p-virtualscroller-content", {
        "p-virtualscroller-loading": this.d_loading
      }];
    },
    loaderClass: function loaderClass() {
      return ["p-virtualscroller-loader", {
        "p-virtualscroller-loader-mask": !this.$slots.loader
      }];
    },
    loadedItems: function loadedItems() {
      var _this10 = this;
      if (this.items && !this.d_loading) {
        if (this.isBoth()) return this.items.slice(this.appendOnly ? 0 : this.first.rows, this.last.rows).map(function(item) {
          return _this10.columns ? item : item.slice(_this10.appendOnly ? 0 : _this10.first.cols, _this10.last.cols);
        });
        else if (this.isHorizontal() && this.columns) return this.items;
        else return this.items.slice(this.appendOnly ? 0 : this.first, this.last);
      }
      return [];
    },
    loadedRows: function loadedRows() {
      return this.d_loading ? this.loaderDisabled ? this.loaderArr : [] : this.loadedItems;
    },
    loadedColumns: function loadedColumns() {
      if (this.columns) {
        var both = this.isBoth();
        var horizontal = this.isHorizontal();
        if (both || horizontal) {
          return this.d_loading && this.loaderDisabled ? both ? this.loaderArr[0] : this.loaderArr : this.columns.slice(both ? this.first.cols : this.first, both ? this.last.cols : this.last);
        }
      }
      return this.columns;
    }
  },
  components: {
    SpinnerIcon: script$a
  }
};
var _hoisted_1$4 = ["tabindex"];
function render$2(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_SpinnerIcon = resolveComponent("SpinnerIcon");
  return !_ctx.disabled ? (openBlock(), createElementBlock("div", mergeProps({
    key: 0,
    ref: $options.elementRef,
    "class": $options.containerClass,
    tabindex: _ctx.tabindex,
    style: _ctx.style,
    onScroll: _cache[0] || (_cache[0] = function() {
      return $options.onScroll && $options.onScroll.apply($options, arguments);
    })
  }, _ctx.ptmi("root")), [renderSlot(_ctx.$slots, "content", {
    styleClass: $options.contentClass,
    items: $options.loadedItems,
    getItemOptions: $options.getOptions,
    loading: $data.d_loading,
    getLoaderOptions: $options.getLoaderOptions,
    itemSize: _ctx.itemSize,
    rows: $options.loadedRows,
    columns: $options.loadedColumns,
    contentRef: $options.contentRef,
    spacerStyle: $data.spacerStyle,
    contentStyle: $data.contentStyle,
    vertical: $options.isVertical(),
    horizontal: $options.isHorizontal(),
    both: $options.isBoth()
  }, function() {
    return [createBaseVNode("div", mergeProps({
      ref: $options.contentRef,
      "class": $options.contentClass,
      style: $data.contentStyle
    }, _ctx.ptm("content")), [(openBlock(true), createElementBlock(Fragment, null, renderList($options.loadedItems, function(item, index) {
      return renderSlot(_ctx.$slots, "item", {
        key: index,
        item,
        options: $options.getOptions(index)
      });
    }), 128))], 16)];
  }), _ctx.showSpacer ? (openBlock(), createElementBlock("div", mergeProps({
    key: 0,
    "class": "p-virtualscroller-spacer",
    style: $data.spacerStyle
  }, _ctx.ptm("spacer")), null, 16)) : createCommentVNode("", true), !_ctx.loaderDisabled && _ctx.showLoader && $data.d_loading ? (openBlock(), createElementBlock("div", mergeProps({
    key: 1,
    "class": $options.loaderClass
  }, _ctx.ptm("loader")), [_ctx.$slots && _ctx.$slots.loader ? (openBlock(true), createElementBlock(Fragment, {
    key: 0
  }, renderList($data.loaderArr, function(_, index) {
    return renderSlot(_ctx.$slots, "loader", {
      key: index,
      options: $options.getLoaderOptions(index, $options.isBoth() && {
        numCols: _ctx.d_numItemsInViewport.cols
      })
    });
  }), 128)) : createCommentVNode("", true), renderSlot(_ctx.$slots, "loadingicon", {}, function() {
    return [createVNode(_component_SpinnerIcon, mergeProps({
      spin: "",
      "class": "p-virtualscroller-loading-icon"
    }, _ctx.ptm("loadingIcon")), null, 16)];
  })], 16)) : createCommentVNode("", true)], 16, _hoisted_1$4)) : (openBlock(), createElementBlock(Fragment, {
    key: 1
  }, [renderSlot(_ctx.$slots, "default"), renderSlot(_ctx.$slots, "content", {
    items: _ctx.items,
    rows: _ctx.items,
    columns: $options.loadedColumns
  })], 64));
}
script$3.render = render$2;
var style$1 = "\n    .p-autocomplete {\n        display: inline-flex;\n    }\n\n    .p-autocomplete-loader {\n        position: absolute;\n        top: 50%;\n        margin-top: -0.5rem;\n        inset-inline-end: dt('autocomplete.padding.x');\n    }\n\n    .p-autocomplete:has(.p-autocomplete-dropdown) .p-autocomplete-loader {\n        inset-inline-end: calc(dt('autocomplete.dropdown.width') + dt('autocomplete.padding.x'));\n    }\n\n    .p-autocomplete:has(.p-autocomplete-dropdown) .p-autocomplete-input {\n        flex: 1 1 auto;\n        width: 1%;\n    }\n\n    .p-autocomplete:has(.p-autocomplete-dropdown) .p-autocomplete-input,\n    .p-autocomplete:has(.p-autocomplete-dropdown) .p-autocomplete-input-multiple {\n        border-start-end-radius: 0;\n        border-end-end-radius: 0;\n    }\n\n    .p-autocomplete-dropdown {\n        cursor: pointer;\n        display: inline-flex;\n        user-select: none;\n        align-items: center;\n        justify-content: center;\n        overflow: hidden;\n        position: relative;\n        width: dt('autocomplete.dropdown.width');\n        border-start-end-radius: dt('autocomplete.dropdown.border.radius');\n        border-end-end-radius: dt('autocomplete.dropdown.border.radius');\n        background: dt('autocomplete.dropdown.background');\n        border: 1px solid dt('autocomplete.dropdown.border.color');\n        border-inline-start: 0 none;\n        color: dt('autocomplete.dropdown.color');\n        transition:\n            background dt('autocomplete.transition.duration'),\n            color dt('autocomplete.transition.duration'),\n            border-color dt('autocomplete.transition.duration'),\n            outline-color dt('autocomplete.transition.duration'),\n            box-shadow dt('autocomplete.transition.duration');\n        outline-color: transparent;\n    }\n\n    .p-autocomplete-dropdown:not(:disabled):hover {\n        background: dt('autocomplete.dropdown.hover.background');\n        border-color: dt('autocomplete.dropdown.hover.border.color');\n        color: dt('autocomplete.dropdown.hover.color');\n    }\n\n    .p-autocomplete-dropdown:not(:disabled):active {\n        background: dt('autocomplete.dropdown.active.background');\n        border-color: dt('autocomplete.dropdown.active.border.color');\n        color: dt('autocomplete.dropdown.active.color');\n    }\n\n    .p-autocomplete-dropdown:focus-visible {\n        box-shadow: dt('autocomplete.dropdown.focus.ring.shadow');\n        outline: dt('autocomplete.dropdown.focus.ring.width') dt('autocomplete.dropdown.focus.ring.style') dt('autocomplete.dropdown.focus.ring.color');\n        outline-offset: dt('autocomplete.dropdown.focus.ring.offset');\n    }\n\n    .p-autocomplete-overlay {\n        position: absolute;\n        top: 0;\n        left: 0;\n        background: dt('autocomplete.overlay.background');\n        color: dt('autocomplete.overlay.color');\n        border: 1px solid dt('autocomplete.overlay.border.color');\n        border-radius: dt('autocomplete.overlay.border.radius');\n        box-shadow: dt('autocomplete.overlay.shadow');\n        min-width: 100%;\n    }\n\n    .p-autocomplete-list-container {\n        overflow: auto;\n    }\n\n    .p-autocomplete-list {\n        margin: 0;\n        list-style-type: none;\n        display: flex;\n        flex-direction: column;\n        gap: dt('autocomplete.list.gap');\n        padding: dt('autocomplete.list.padding');\n    }\n\n    .p-autocomplete-option {\n        cursor: pointer;\n        white-space: nowrap;\n        position: relative;\n        overflow: hidden;\n        display: flex;\n        align-items: center;\n        padding: dt('autocomplete.option.padding');\n        border: 0 none;\n        color: dt('autocomplete.option.color');\n        background: transparent;\n        transition:\n            background dt('autocomplete.transition.duration'),\n            color dt('autocomplete.transition.duration'),\n            border-color dt('autocomplete.transition.duration');\n        border-radius: dt('autocomplete.option.border.radius');\n    }\n\n    .p-autocomplete-option:not(.p-autocomplete-option-selected):not(.p-disabled).p-focus {\n        background: dt('autocomplete.option.focus.background');\n        color: dt('autocomplete.option.focus.color');\n    }\n\n    .p-autocomplete-option-selected {\n        background: dt('autocomplete.option.selected.background');\n        color: dt('autocomplete.option.selected.color');\n    }\n\n    .p-autocomplete-option-selected.p-focus {\n        background: dt('autocomplete.option.selected.focus.background');\n        color: dt('autocomplete.option.selected.focus.color');\n    }\n\n    .p-autocomplete-option-group {\n        margin: 0;\n        padding: dt('autocomplete.option.group.padding');\n        color: dt('autocomplete.option.group.color');\n        background: dt('autocomplete.option.group.background');\n        font-weight: dt('autocomplete.option.group.font.weight');\n    }\n\n    .p-autocomplete-input-multiple {\n        margin: 0;\n        list-style-type: none;\n        cursor: text;\n        overflow: hidden;\n        display: flex;\n        align-items: center;\n        flex-wrap: wrap;\n        padding: calc(dt('autocomplete.padding.y') / 2) dt('autocomplete.padding.x');\n        gap: calc(dt('autocomplete.padding.y') / 2);\n        color: dt('autocomplete.color');\n        background: dt('autocomplete.background');\n        border: 1px solid dt('autocomplete.border.color');\n        border-radius: dt('autocomplete.border.radius');\n        width: 100%;\n        transition:\n            background dt('autocomplete.transition.duration'),\n            color dt('autocomplete.transition.duration'),\n            border-color dt('autocomplete.transition.duration'),\n            outline-color dt('autocomplete.transition.duration'),\n            box-shadow dt('autocomplete.transition.duration');\n        outline-color: transparent;\n        box-shadow: dt('autocomplete.shadow');\n    }\n\n    .p-autocomplete-input-multiple.p-disabled {\n        opacity: 1;\n        background: dt('inputtext.disabled.background');\n        color: dt('inputtext.disabled.color');\n    }\n\n    .p-autocomplete:not(.p-disabled):hover .p-autocomplete-input-multiple {\n        border-color: dt('autocomplete.hover.border.color');\n    }\n\n    .p-autocomplete:not(.p-disabled).p-focus .p-autocomplete-input-multiple {\n        border-color: dt('autocomplete.focus.border.color');\n        box-shadow: dt('autocomplete.focus.ring.shadow');\n        outline: dt('autocomplete.focus.ring.width') dt('autocomplete.focus.ring.style') dt('autocomplete.focus.ring.color');\n        outline-offset: dt('autocomplete.focus.ring.offset');\n    }\n\n    .p-autocomplete.p-invalid .p-autocomplete-input-multiple {\n        border-color: dt('autocomplete.invalid.border.color');\n    }\n\n    .p-variant-filled.p-autocomplete-input-multiple {\n        background: dt('autocomplete.filled.background');\n    }\n\n    .p-autocomplete:not(.p-disabled):hover .p-variant-filled.p-autocomplete-input-multiple {\n        background: dt('autocomplete.filled.hover.background');\n    }\n\n    .p-autocomplete:not(.p-disabled).p-focus .p-variant-filled.p-autocomplete-input-multiple {\n        background: dt('autocomplete.filled.focus.background');\n    }\n\n    .p-autocomplete.p-disabled .p-autocomplete-input-multiple {\n        opacity: 1;\n        background: dt('autocomplete.disabled.background');\n        color: dt('autocomplete.disabled.color');\n    }\n\n    .p-autocomplete-chip.p-chip {\n        padding-block-start: calc(dt('autocomplete.padding.y') / 2);\n        padding-block-end: calc(dt('autocomplete.padding.y') / 2);\n        border-radius: dt('autocomplete.chip.border.radius');\n    }\n\n    .p-autocomplete-input-multiple:has(.p-autocomplete-chip) {\n        padding-inline-start: calc(dt('autocomplete.padding.y') / 2);\n        padding-inline-end: calc(dt('autocomplete.padding.y') / 2);\n    }\n\n    .p-autocomplete-chip-item.p-focus .p-autocomplete-chip {\n        background: dt('autocomplete.chip.focus.background');\n        color: dt('autocomplete.chip.focus.color');\n    }\n\n    .p-autocomplete-input-chip {\n        flex: 1 1 auto;\n        display: inline-flex;\n        padding-block-start: calc(dt('autocomplete.padding.y') / 2);\n        padding-block-end: calc(dt('autocomplete.padding.y') / 2);\n    }\n\n    .p-autocomplete-input-chip input {\n        border: 0 none;\n        outline: 0 none;\n        background: transparent;\n        margin: 0;\n        padding: 0;\n        box-shadow: none;\n        border-radius: 0;\n        width: 100%;\n        font-family: inherit;\n        font-feature-settings: inherit;\n        font-size: 1rem;\n        color: inherit;\n    }\n\n    .p-autocomplete-input-chip input::placeholder {\n        color: dt('autocomplete.placeholder.color');\n    }\n\n    .p-autocomplete.p-invalid .p-autocomplete-input-chip input::placeholder {\n        color: dt('autocomplete.invalid.placeholder.color');\n    }\n\n    .p-autocomplete-empty-message {\n        padding: dt('autocomplete.empty.message.padding');\n    }\n\n    .p-autocomplete-fluid {\n        display: flex;\n    }\n\n    .p-autocomplete-fluid:has(.p-autocomplete-dropdown) .p-autocomplete-input {\n        width: 1%;\n    }\n\n    .p-autocomplete:has(.p-inputtext-sm) .p-autocomplete-dropdown {\n        width: dt('autocomplete.dropdown.sm.width');\n    }\n\n    .p-autocomplete:has(.p-inputtext-sm) .p-autocomplete-dropdown .p-icon {\n        font-size: dt('form.field.sm.font.size');\n        width: dt('form.field.sm.font.size');\n        height: dt('form.field.sm.font.size');\n    }\n\n    .p-autocomplete:has(.p-inputtext-lg) .p-autocomplete-dropdown {\n        width: dt('autocomplete.dropdown.lg.width');\n    }\n\n    .p-autocomplete:has(.p-inputtext-lg) .p-autocomplete-dropdown .p-icon {\n        font-size: dt('form.field.lg.font.size');\n        width: dt('form.field.lg.font.size');\n        height: dt('form.field.lg.font.size');\n    }\n\n    .p-autocomplete-clear-icon {\n        position: absolute;\n        top: 50%;\n        margin-top: -0.5rem;\n        cursor: pointer;\n        color: dt('autocomplete.dropdown.color');\n        inset-inline-end: dt('autocomplete.padding.x');\n    }\n\n    .p-autocomplete:has(.p-autocomplete-dropdown) .p-autocomplete-clear-icon {\n        inset-inline-end: calc(dt('autocomplete.padding.x') + dt('autocomplete.dropdown.width'));\n    }\n";
var inlineStyles = {
  root: {
    position: "relative"
  }
};
var classes$1 = {
  root: function root2(_ref) {
    var instance = _ref.instance;
    _ref.props;
    return ["p-autocomplete p-component p-inputwrapper", {
      "p-invalid": instance.$invalid,
      "p-focus": instance.focused,
      "p-inputwrapper-filled": instance.$filled || s$1(instance.inputValue),
      "p-inputwrapper-focus": instance.focused,
      "p-autocomplete-open": instance.overlayVisible,
      "p-autocomplete-fluid": instance.$fluid
    }];
  },
  pcInputText: "p-autocomplete-input",
  inputMultiple: function inputMultiple(_ref2) {
    var instance = _ref2.instance, props = _ref2.props;
    return ["p-autocomplete-input-multiple", {
      "p-variant-filled": instance.$variant === "filled",
      "p-disabled": props.disabled
    }];
  },
  chipItem: function chipItem(_ref3) {
    var instance = _ref3.instance, i2 = _ref3.i;
    return ["p-autocomplete-chip-item", {
      "p-focus": instance.focusedMultipleOptionIndex === i2
    }];
  },
  pcChip: "p-autocomplete-chip",
  chipIcon: "p-autocomplete-chip-icon",
  inputChip: "p-autocomplete-input-chip",
  loader: "p-autocomplete-loader",
  dropdown: "p-autocomplete-dropdown",
  overlay: "p-autocomplete-overlay p-component",
  listContainer: "p-autocomplete-list-container",
  list: "p-autocomplete-list",
  optionGroup: "p-autocomplete-option-group",
  option: function option(_ref4) {
    var instance = _ref4.instance, _option = _ref4.option, i2 = _ref4.i, getItemOptions = _ref4.getItemOptions;
    return ["p-autocomplete-option", {
      "p-autocomplete-option-selected": instance.isSelected(_option),
      "p-focus": instance.focusedOptionIndex === instance.getOptionIndex(i2, getItemOptions),
      "p-disabled": instance.isOptionDisabled(_option)
    }];
  },
  emptyMessage: "p-autocomplete-empty-message"
};
var AutoCompleteStyle = BaseStyle.extend({
  name: "autocomplete",
  style: style$1,
  classes: classes$1,
  inlineStyles
});
var script$1$1 = {
  name: "BaseAutoComplete",
  "extends": script$6,
  props: {
    suggestions: {
      type: Array,
      "default": null
    },
    optionLabel: null,
    optionDisabled: null,
    optionGroupLabel: null,
    optionGroupChildren: null,
    scrollHeight: {
      type: String,
      "default": "14rem"
    },
    dropdown: {
      type: Boolean,
      "default": false
    },
    dropdownMode: {
      type: String,
      "default": "blank"
    },
    multiple: {
      type: Boolean,
      "default": false
    },
    loading: {
      type: Boolean,
      "default": false
    },
    placeholder: {
      type: String,
      "default": null
    },
    dataKey: {
      type: String,
      "default": null
    },
    minLength: {
      type: Number,
      "default": 1
    },
    delay: {
      type: Number,
      "default": 300
    },
    appendTo: {
      type: [String, Object],
      "default": "body"
    },
    forceSelection: {
      type: Boolean,
      "default": false
    },
    completeOnFocus: {
      type: Boolean,
      "default": false
    },
    inputId: {
      type: String,
      "default": null
    },
    inputStyle: {
      type: Object,
      "default": null
    },
    inputClass: {
      type: [String, Object],
      "default": null
    },
    panelStyle: {
      type: Object,
      "default": null
    },
    panelClass: {
      type: [String, Object],
      "default": null
    },
    overlayStyle: {
      type: Object,
      "default": null
    },
    overlayClass: {
      type: [String, Object],
      "default": null
    },
    dropdownIcon: {
      type: String,
      "default": null
    },
    dropdownClass: {
      type: [String, Object],
      "default": null
    },
    loader: {
      type: String,
      "default": null
    },
    loadingIcon: {
      type: String,
      "default": null
    },
    removeTokenIcon: {
      type: String,
      "default": null
    },
    chipIcon: {
      type: String,
      "default": null
    },
    virtualScrollerOptions: {
      type: Object,
      "default": null
    },
    autoOptionFocus: {
      type: Boolean,
      "default": false
    },
    selectOnFocus: {
      type: Boolean,
      "default": false
    },
    focusOnHover: {
      type: Boolean,
      "default": true
    },
    searchLocale: {
      type: String,
      "default": void 0
    },
    searchMessage: {
      type: String,
      "default": null
    },
    selectionMessage: {
      type: String,
      "default": null
    },
    emptySelectionMessage: {
      type: String,
      "default": null
    },
    emptySearchMessage: {
      type: String,
      "default": null
    },
    showEmptyMessage: {
      type: Boolean,
      "default": true
    },
    tabindex: {
      type: Number,
      "default": 0
    },
    typeahead: {
      type: Boolean,
      "default": true
    },
    ariaLabel: {
      type: String,
      "default": null
    },
    ariaLabelledby: {
      type: String,
      "default": null
    }
  },
  style: AutoCompleteStyle,
  provide: function provide5() {
    return {
      $pcAutoComplete: this,
      $parentInstance: this
    };
  }
};
function _defineProperty$1(e, r, t2) {
  return (r = _toPropertyKey$1(r)) in e ? Object.defineProperty(e, r, { value: t2, enumerable: true, configurable: true, writable: true }) : e[r] = t2, e;
}
function _toPropertyKey$1(t2) {
  var i2 = _toPrimitive$1(t2, "string");
  return "symbol" == _typeof$1(i2) ? i2 : i2 + "";
}
function _toPrimitive$1(t2, r) {
  if ("object" != _typeof$1(t2) || !t2) return t2;
  var e = t2[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i2 = e.call(t2, r);
    if ("object" != _typeof$1(i2)) return i2;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t2);
}
function _typeof$1(o) {
  "@babel/helpers - typeof";
  return _typeof$1 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof$1(o);
}
function _toConsumableArray(r) {
  return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread();
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray(r, a2) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray(r, a2);
    var t2 = {}.toString.call(r).slice(8, -1);
    return "Object" === t2 && r.constructor && (t2 = r.constructor.name), "Map" === t2 || "Set" === t2 ? Array.from(r) : "Arguments" === t2 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t2) ? _arrayLikeToArray(r, a2) : void 0;
  }
}
function _iterableToArray(r) {
  if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r);
}
function _arrayWithoutHoles(r) {
  if (Array.isArray(r)) return _arrayLikeToArray(r);
}
function _arrayLikeToArray(r, a2) {
  (null == a2 || a2 > r.length) && (a2 = r.length);
  for (var e = 0, n = Array(a2); e < a2; e++) n[e] = r[e];
  return n;
}
var script$2 = {
  name: "AutoComplete",
  "extends": script$1$1,
  inheritAttrs: false,
  emits: ["change", "focus", "blur", "item-select", "item-unselect", "option-select", "option-unselect", "dropdown-click", "clear", "complete", "before-show", "before-hide", "show", "hide"],
  inject: {
    $pcFluid: {
      "default": null
    }
  },
  outsideClickListener: null,
  resizeListener: null,
  scrollHandler: null,
  overlay: null,
  virtualScroller: null,
  searchTimeout: null,
  dirty: false,
  startRangeIndex: -1,
  data: function data5() {
    return {
      clicked: false,
      focused: false,
      focusedOptionIndex: -1,
      focusedMultipleOptionIndex: -1,
      overlayVisible: false,
      searching: false
    };
  },
  watch: {
    suggestions: function suggestions() {
      if (this.searching) {
        this.show();
        this.focusedOptionIndex = this.overlayVisible && this.autoOptionFocus ? this.findFirstFocusedOptionIndex() : -1;
        this.searching = false;
        !this.showEmptyMessage && this.visibleOptions.length === 0 && this.hide();
      }
      this.autoUpdateModel();
    }
  },
  mounted: function mounted4() {
    this.autoUpdateModel();
  },
  updated: function updated3() {
    if (this.overlayVisible) {
      this.alignOverlay();
    }
  },
  beforeUnmount: function beforeUnmount2() {
    this.unbindOutsideClickListener();
    this.unbindResizeListener();
    if (this.scrollHandler) {
      this.scrollHandler.destroy();
      this.scrollHandler = null;
    }
    if (this.overlay) {
      x.clear(this.overlay);
      this.overlay = null;
    }
  },
  methods: {
    getOptionIndex: function getOptionIndex(index, fn) {
      return this.virtualScrollerDisabled ? index : fn && fn(index)["index"];
    },
    getOptionLabel: function getOptionLabel(option2) {
      return this.optionLabel ? c$1(option2, this.optionLabel) : option2;
    },
    getOptionValue: function getOptionValue(option2) {
      return option2;
    },
    getOptionRenderKey: function getOptionRenderKey(option2, index) {
      return (this.dataKey ? c$1(option2, this.dataKey) : this.getOptionLabel(option2)) + "_" + index;
    },
    getPTOptions: function getPTOptions(option2, itemOptions, index, key) {
      return this.ptm(key, {
        context: {
          option: option2,
          index,
          selected: this.isSelected(option2),
          focused: this.focusedOptionIndex === this.getOptionIndex(index, itemOptions),
          disabled: this.isOptionDisabled(option2)
        }
      });
    },
    isOptionDisabled: function isOptionDisabled(option2) {
      return this.optionDisabled ? c$1(option2, this.optionDisabled) : false;
    },
    isOptionGroup: function isOptionGroup(option2) {
      return this.optionGroupLabel && option2.optionGroup && option2.group;
    },
    getOptionGroupLabel: function getOptionGroupLabel(optionGroup) {
      return c$1(optionGroup, this.optionGroupLabel);
    },
    getOptionGroupChildren: function getOptionGroupChildren(optionGroup) {
      return c$1(optionGroup, this.optionGroupChildren);
    },
    getAriaPosInset: function getAriaPosInset(index) {
      var _this = this;
      return (this.optionGroupLabel ? index - this.visibleOptions.slice(0, index).filter(function(option2) {
        return _this.isOptionGroup(option2);
      }).length : index) + 1;
    },
    show: function show(isFocus) {
      this.$emit("before-show");
      this.dirty = true;
      this.overlayVisible = true;
      this.focusedOptionIndex = this.focusedOptionIndex !== -1 ? this.focusedOptionIndex : this.autoOptionFocus ? this.findFirstFocusedOptionIndex() : -1;
      isFocus && bt(this.multiple ? this.$refs.focusInput : this.$refs.focusInput.$el);
    },
    hide: function hide(isFocus) {
      var _this2 = this;
      var _hide = function _hide2() {
        var _this2$$refs$focusInp;
        _this2.$emit("before-hide");
        _this2.dirty = isFocus;
        _this2.overlayVisible = false;
        _this2.clicked = false;
        _this2.focusedOptionIndex = -1;
        isFocus && bt(_this2.multiple ? _this2.$refs.focusInput : (_this2$$refs$focusInp = _this2.$refs.focusInput) === null || _this2$$refs$focusInp === void 0 ? void 0 : _this2$$refs$focusInp.$el);
      };
      setTimeout(function() {
        _hide();
      }, 0);
    },
    onFocus: function onFocus(event) {
      if (this.disabled) {
        return;
      }
      if (!this.dirty && this.completeOnFocus) {
        this.search(event, event.target.value, "focus");
      }
      this.dirty = true;
      this.focused = true;
      if (this.overlayVisible) {
        this.focusedOptionIndex = this.focusedOptionIndex !== -1 ? this.focusedOptionIndex : this.overlayVisible && this.autoOptionFocus ? this.findFirstFocusedOptionIndex() : -1;
        this.scrollInView(this.focusedOptionIndex);
      }
      this.$emit("focus", event);
    },
    onBlur: function onBlur(event) {
      var _this$formField$onBlu, _this$formField;
      this.dirty = false;
      this.focused = false;
      this.focusedOptionIndex = -1;
      this.$emit("blur", event);
      (_this$formField$onBlu = (_this$formField = this.formField).onBlur) === null || _this$formField$onBlu === void 0 || _this$formField$onBlu.call(_this$formField);
    },
    onKeyDown: function onKeyDown(event) {
      if (this.disabled) {
        event.preventDefault();
        return;
      }
      switch (event.code) {
        case "ArrowDown":
          this.onArrowDownKey(event);
          break;
        case "ArrowUp":
          this.onArrowUpKey(event);
          break;
        case "ArrowLeft":
          this.onArrowLeftKey(event);
          break;
        case "ArrowRight":
          this.onArrowRightKey(event);
          break;
        case "Home":
          this.onHomeKey(event);
          break;
        case "End":
          this.onEndKey(event);
          break;
        case "PageDown":
          this.onPageDownKey(event);
          break;
        case "PageUp":
          this.onPageUpKey(event);
          break;
        case "Enter":
        case "NumpadEnter":
          this.onEnterKey(event);
          break;
        case "Space":
          this.onSpaceKey(event);
          break;
        case "Escape":
          this.onEscapeKey(event);
          break;
        case "Tab":
          this.onTabKey(event);
          break;
        case "ShiftLeft":
        case "ShiftRight":
          this.onShiftKey(event);
          break;
        case "Backspace":
          this.onBackspaceKey(event);
          break;
      }
      this.clicked = false;
    },
    onInput: function onInput2(event) {
      var _this3 = this;
      if (this.typeahead) {
        if (this.searchTimeout) {
          clearTimeout(this.searchTimeout);
        }
        var query = event.target.value;
        if (!this.multiple) {
          this.updateModel(event, query);
        }
        if (query.length === 0) {
          this.hide();
          this.$emit("clear");
        } else {
          if (query.length >= this.minLength) {
            this.focusedOptionIndex = -1;
            this.searchTimeout = setTimeout(function() {
              _this3.search(event, query, "input");
            }, this.delay);
          } else {
            this.hide();
          }
        }
      }
    },
    onChange: function onChange(event) {
      var _this4 = this;
      if (this.forceSelection) {
        var valid = false;
        if (this.visibleOptions && !this.multiple) {
          var _this$$refs$focusInpu;
          var value = this.multiple ? this.$refs.focusInput.value : (_this$$refs$focusInpu = this.$refs.focusInput) === null || _this$$refs$focusInpu === void 0 || (_this$$refs$focusInpu = _this$$refs$focusInpu.$el) === null || _this$$refs$focusInpu === void 0 ? void 0 : _this$$refs$focusInpu.value;
          var matchedValue = this.visibleOptions.find(function(option2) {
            return _this4.isOptionMatched(option2, value || "");
          });
          if (matchedValue !== void 0) {
            valid = true;
            !this.isSelected(matchedValue) && this.onOptionSelect(event, matchedValue);
          }
        }
        if (!valid) {
          if (this.multiple) {
            this.$refs.focusInput.value = "";
          } else {
            var _this$$refs$focusInpu2;
            var inputEl = (_this$$refs$focusInpu2 = this.$refs.focusInput) === null || _this$$refs$focusInpu2 === void 0 ? void 0 : _this$$refs$focusInpu2.$el;
            inputEl && (inputEl.value = "");
          }
          this.$emit("clear");
          !this.multiple && this.updateModel(event, null);
        }
      }
    },
    onMultipleContainerFocus: function onMultipleContainerFocus() {
      if (this.disabled) {
        return;
      }
      this.focused = true;
    },
    onMultipleContainerBlur: function onMultipleContainerBlur() {
      this.focusedMultipleOptionIndex = -1;
      this.focused = false;
    },
    onMultipleContainerKeyDown: function onMultipleContainerKeyDown(event) {
      if (this.disabled) {
        event.preventDefault();
        return;
      }
      switch (event.code) {
        case "ArrowLeft":
          this.onArrowLeftKeyOnMultiple(event);
          break;
        case "ArrowRight":
          this.onArrowRightKeyOnMultiple(event);
          break;
        case "Backspace":
          this.onBackspaceKeyOnMultiple(event);
          break;
      }
    },
    onContainerClick: function onContainerClick(event) {
      this.clicked = true;
      if (this.disabled || this.searching || this.loading || this.isDropdownClicked(event)) {
        return;
      }
      if (!this.overlay || !this.overlay.contains(event.target)) {
        bt(this.multiple ? this.$refs.focusInput : this.$refs.focusInput.$el);
      }
    },
    onDropdownClick: function onDropdownClick(event) {
      var query = void 0;
      if (this.overlayVisible) {
        this.hide(true);
      } else {
        var target = this.multiple ? this.$refs.focusInput : this.$refs.focusInput.$el;
        bt(target);
        query = target.value;
        if (this.dropdownMode === "blank") this.search(event, "", "dropdown");
        else if (this.dropdownMode === "current") this.search(event, query, "dropdown");
      }
      this.$emit("dropdown-click", {
        originalEvent: event,
        query
      });
    },
    onOptionSelect: function onOptionSelect(event, option2) {
      var isHide = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : true;
      var value = this.getOptionValue(option2);
      if (this.multiple) {
        this.$refs.focusInput.value = "";
        if (!this.isSelected(option2)) {
          this.updateModel(event, [].concat(_toConsumableArray(this.d_value || []), [value]));
        }
      } else {
        this.updateModel(event, value);
      }
      this.$emit("item-select", {
        originalEvent: event,
        value: option2
      });
      this.$emit("option-select", {
        originalEvent: event,
        value: option2
      });
      isHide && this.hide(true);
    },
    onOptionMouseMove: function onOptionMouseMove(event, index) {
      if (this.focusOnHover) {
        this.changeFocusedOptionIndex(event, index);
      }
    },
    onOptionSelectRange: function onOptionSelectRange(event) {
      var _this5 = this;
      var start = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : -1;
      var end = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : -1;
      start === -1 && (start = this.findNearestSelectedOptionIndex(end, true));
      end === -1 && (end = this.findNearestSelectedOptionIndex(start));
      if (start !== -1 && end !== -1) {
        var rangeStart = Math.min(start, end);
        var rangeEnd = Math.max(start, end);
        var value = this.visibleOptions.slice(rangeStart, rangeEnd + 1).filter(function(option2) {
          return _this5.isValidOption(option2);
        }).map(function(option2) {
          return _this5.getOptionValue(option2);
        });
        this.updateModel(event, value);
      }
    },
    onOverlayClick: function onOverlayClick(event) {
      OverlayEventBus.emit("overlay-click", {
        originalEvent: event,
        target: this.$el
      });
    },
    onOverlayKeyDown: function onOverlayKeyDown(event) {
      switch (event.code) {
        case "Escape":
          this.onEscapeKey(event);
          break;
      }
    },
    onArrowDownKey: function onArrowDownKey(event) {
      if (!this.overlayVisible) {
        return;
      }
      var optionIndex = this.focusedOptionIndex !== -1 ? this.findNextOptionIndex(this.focusedOptionIndex) : this.clicked ? this.findFirstOptionIndex() : this.findFirstFocusedOptionIndex();
      if (this.multiple && event.shiftKey) {
        this.onOptionSelectRange(event, this.startRangeIndex, optionIndex);
      }
      this.changeFocusedOptionIndex(event, optionIndex);
      event.preventDefault();
    },
    onArrowUpKey: function onArrowUpKey(event) {
      if (!this.overlayVisible) {
        return;
      }
      if (event.altKey) {
        if (this.focusedOptionIndex !== -1) {
          this.onOptionSelect(event, this.visibleOptions[this.focusedOptionIndex]);
        }
        this.overlayVisible && this.hide();
        event.preventDefault();
      } else {
        var optionIndex = this.focusedOptionIndex !== -1 ? this.findPrevOptionIndex(this.focusedOptionIndex) : this.clicked ? this.findLastOptionIndex() : this.findLastFocusedOptionIndex();
        if (this.multiple && event.shiftKey) {
          this.onOptionSelectRange(event, optionIndex, this.startRangeIndex);
        }
        this.changeFocusedOptionIndex(event, optionIndex);
        event.preventDefault();
      }
    },
    onArrowLeftKey: function onArrowLeftKey(event) {
      var target = event.currentTarget;
      this.focusedOptionIndex = -1;
      if (this.multiple) {
        if (a(target.value) && this.$filled) {
          bt(this.$refs.multiContainer);
          this.focusedMultipleOptionIndex = this.d_value.length;
        } else {
          event.stopPropagation();
        }
      }
    },
    onArrowRightKey: function onArrowRightKey(event) {
      this.focusedOptionIndex = -1;
      this.multiple && event.stopPropagation();
    },
    onHomeKey: function onHomeKey(event) {
      var currentTarget = event.currentTarget;
      var len = currentTarget.value.length;
      var metaKey = event.metaKey || event.ctrlKey;
      var optionIndex = this.findFirstOptionIndex();
      if (this.multiple && event.shiftKey && metaKey) {
        this.onOptionSelectRange(event, optionIndex, this.startRangeIndex);
      }
      currentTarget.setSelectionRange(0, event.shiftKey ? len : 0);
      this.focusedOptionIndex = -1;
      event.preventDefault();
    },
    onEndKey: function onEndKey(event) {
      var currentTarget = event.currentTarget;
      var len = currentTarget.value.length;
      var metaKey = event.metaKey || event.ctrlKey;
      var optionIndex = this.findLastOptionIndex();
      if (this.multiple && event.shiftKey && metaKey) {
        this.onOptionSelectRange(event, this.startRangeIndex, optionIndex);
      }
      currentTarget.setSelectionRange(event.shiftKey ? 0 : len, len);
      this.focusedOptionIndex = -1;
      event.preventDefault();
    },
    onPageUpKey: function onPageUpKey(event) {
      this.scrollInView(0);
      event.preventDefault();
    },
    onPageDownKey: function onPageDownKey(event) {
      this.scrollInView(this.visibleOptions.length - 1);
      event.preventDefault();
    },
    onEnterKey: function onEnterKey(event) {
      if (!this.typeahead) {
        if (this.multiple) {
          if (event.target.value.trim()) {
            this.updateModel(event, [].concat(_toConsumableArray(this.d_value || []), [event.target.value.trim()]));
            this.$refs.focusInput.value = "";
          }
          event.preventDefault();
        }
      } else {
        if (!this.overlayVisible) {
          this.focusedOptionIndex = -1;
          this.onArrowDownKey(event);
        } else {
          if (this.focusedOptionIndex !== -1) {
            if (this.multiple && event.shiftKey) {
              this.onOptionSelectRange(event, this.focusedOptionIndex);
              event.preventDefault();
            } else {
              this.onOptionSelect(event, this.visibleOptions[this.focusedOptionIndex]);
            }
          }
          this.hide();
        }
      }
    },
    onSpaceKey: function onSpaceKey(event) {
      if (!this.autoOptionFocus && this.focusedOptionIndex !== -1) {
        this.onEnterKey(event);
      }
    },
    onEscapeKey: function onEscapeKey(event) {
      this.overlayVisible && this.hide(true);
      event.preventDefault();
    },
    onTabKey: function onTabKey(event) {
      if (this.focusedOptionIndex !== -1) {
        this.onOptionSelect(event, this.visibleOptions[this.focusedOptionIndex]);
      }
      this.overlayVisible && this.hide();
    },
    onShiftKey: function onShiftKey() {
      this.startRangeIndex = this.focusedOptionIndex;
    },
    onBackspaceKey: function onBackspaceKey(event) {
      if (this.multiple) {
        if (s$1(this.d_value) && !this.$refs.focusInput.value) {
          var removedValue = this.d_value[this.d_value.length - 1];
          var newValue = this.d_value.slice(0, -1);
          this.writeValue(newValue, event);
          this.$emit("item-unselect", {
            originalEvent: event,
            value: removedValue
          });
          this.$emit("option-unselect", {
            originalEvent: event,
            value: removedValue
          });
        }
        event.stopPropagation();
      }
    },
    onArrowLeftKeyOnMultiple: function onArrowLeftKeyOnMultiple() {
      this.focusedMultipleOptionIndex = this.focusedMultipleOptionIndex < 1 ? 0 : this.focusedMultipleOptionIndex - 1;
    },
    onArrowRightKeyOnMultiple: function onArrowRightKeyOnMultiple() {
      this.focusedMultipleOptionIndex++;
      if (this.focusedMultipleOptionIndex > this.d_value.length - 1) {
        this.focusedMultipleOptionIndex = -1;
        bt(this.$refs.focusInput);
      }
    },
    onBackspaceKeyOnMultiple: function onBackspaceKeyOnMultiple(event) {
      if (this.focusedMultipleOptionIndex !== -1) {
        this.removeOption(event, this.focusedMultipleOptionIndex);
      }
    },
    onOverlayEnter: function onOverlayEnter(el) {
      x.set("overlay", el, this.$primevue.config.zIndex.overlay);
      S(el, {
        position: "absolute",
        top: "0"
      });
      this.alignOverlay();
      this.$attrSelector && el.setAttribute(this.$attrSelector, "");
    },
    onOverlayAfterEnter: function onOverlayAfterEnter() {
      this.bindOutsideClickListener();
      this.bindScrollListener();
      this.bindResizeListener();
      this.$emit("show");
    },
    onOverlayLeave: function onOverlayLeave() {
      this.unbindOutsideClickListener();
      this.unbindScrollListener();
      this.unbindResizeListener();
      this.$emit("hide");
      this.overlay = null;
    },
    onOverlayAfterLeave: function onOverlayAfterLeave(el) {
      x.clear(el);
    },
    alignOverlay: function alignOverlay() {
      var target = this.multiple ? this.$refs.multiContainer : this.$refs.focusInput.$el;
      if (this.appendTo === "self") {
        I(this.overlay, target);
      } else {
        this.overlay.style.minWidth = v$1(target) + "px";
        D(this.overlay, target);
      }
    },
    bindOutsideClickListener: function bindOutsideClickListener() {
      var _this6 = this;
      if (!this.outsideClickListener) {
        this.outsideClickListener = function(event) {
          if (_this6.overlayVisible && _this6.overlay && _this6.isOutsideClicked(event)) {
            _this6.hide();
          }
        };
        document.addEventListener("click", this.outsideClickListener, true);
      }
    },
    unbindOutsideClickListener: function unbindOutsideClickListener() {
      if (this.outsideClickListener) {
        document.removeEventListener("click", this.outsideClickListener, true);
        this.outsideClickListener = null;
      }
    },
    bindScrollListener: function bindScrollListener() {
      var _this7 = this;
      if (!this.scrollHandler) {
        this.scrollHandler = new ConnectedOverlayScrollHandler(this.$refs.container, function() {
          if (_this7.overlayVisible) {
            _this7.hide();
          }
        });
      }
      this.scrollHandler.bindScrollListener();
    },
    unbindScrollListener: function unbindScrollListener() {
      if (this.scrollHandler) {
        this.scrollHandler.unbindScrollListener();
      }
    },
    bindResizeListener: function bindResizeListener2() {
      var _this8 = this;
      if (!this.resizeListener) {
        this.resizeListener = function() {
          if (_this8.overlayVisible && !Yt()) {
            _this8.hide();
          }
        };
        window.addEventListener("resize", this.resizeListener);
      }
    },
    unbindResizeListener: function unbindResizeListener2() {
      if (this.resizeListener) {
        window.removeEventListener("resize", this.resizeListener);
        this.resizeListener = null;
      }
    },
    isOutsideClicked: function isOutsideClicked(event) {
      return !this.overlay.contains(event.target) && !this.isInputClicked(event) && !this.isDropdownClicked(event);
    },
    isInputClicked: function isInputClicked(event) {
      if (this.multiple) return event.target === this.$refs.multiContainer || this.$refs.multiContainer.contains(event.target);
      else return event.target === this.$refs.focusInput.$el;
    },
    isDropdownClicked: function isDropdownClicked(event) {
      return this.$refs.dropdownButton ? event.target === this.$refs.dropdownButton || this.$refs.dropdownButton.contains(event.target) : false;
    },
    isOptionMatched: function isOptionMatched(option2, value) {
      var _this$getOptionLabel;
      return this.isValidOption(option2) && ((_this$getOptionLabel = this.getOptionLabel(option2)) === null || _this$getOptionLabel === void 0 ? void 0 : _this$getOptionLabel.toLocaleLowerCase(this.searchLocale)) === value.toLocaleLowerCase(this.searchLocale);
    },
    isValidOption: function isValidOption(option2) {
      return s$1(option2) && !(this.isOptionDisabled(option2) || this.isOptionGroup(option2));
    },
    isValidSelectedOption: function isValidSelectedOption(option2) {
      return this.isValidOption(option2) && this.isSelected(option2);
    },
    isEquals: function isEquals(value1, value2) {
      return k(value1, value2, this.equalityKey);
    },
    isSelected: function isSelected(option2) {
      var _this9 = this;
      var optionValue = this.getOptionValue(option2);
      return this.multiple ? (this.d_value || []).some(function(value) {
        return _this9.isEquals(value, optionValue);
      }) : this.isEquals(this.d_value, this.getOptionValue(option2));
    },
    findFirstOptionIndex: function findFirstOptionIndex() {
      var _this0 = this;
      return this.visibleOptions.findIndex(function(option2) {
        return _this0.isValidOption(option2);
      });
    },
    findLastOptionIndex: function findLastOptionIndex() {
      var _this1 = this;
      return M(this.visibleOptions, function(option2) {
        return _this1.isValidOption(option2);
      });
    },
    findNextOptionIndex: function findNextOptionIndex(index) {
      var _this10 = this;
      var matchedOptionIndex = index < this.visibleOptions.length - 1 ? this.visibleOptions.slice(index + 1).findIndex(function(option2) {
        return _this10.isValidOption(option2);
      }) : -1;
      return matchedOptionIndex > -1 ? matchedOptionIndex + index + 1 : index;
    },
    findPrevOptionIndex: function findPrevOptionIndex(index) {
      var _this11 = this;
      var matchedOptionIndex = index > 0 ? M(this.visibleOptions.slice(0, index), function(option2) {
        return _this11.isValidOption(option2);
      }) : -1;
      return matchedOptionIndex > -1 ? matchedOptionIndex : index;
    },
    findSelectedOptionIndex: function findSelectedOptionIndex() {
      var _this12 = this;
      return this.$filled ? this.visibleOptions.findIndex(function(option2) {
        return _this12.isValidSelectedOption(option2);
      }) : -1;
    },
    findFirstFocusedOptionIndex: function findFirstFocusedOptionIndex() {
      var selectedIndex = this.findSelectedOptionIndex();
      return selectedIndex < 0 ? this.findFirstOptionIndex() : selectedIndex;
    },
    findLastFocusedOptionIndex: function findLastFocusedOptionIndex() {
      var selectedIndex = this.findSelectedOptionIndex();
      return selectedIndex < 0 ? this.findLastOptionIndex() : selectedIndex;
    },
    search: function search(event, query, source) {
      if (query === void 0 || query === null) {
        return;
      }
      if (source === "input" && query.trim().length === 0) {
        return;
      }
      this.searching = true;
      this.$emit("complete", {
        originalEvent: event,
        query
      });
    },
    removeOption: function removeOption(event, index) {
      var _this13 = this;
      var removedOption = this.d_value[index];
      var value = this.d_value.filter(function(_, i2) {
        return i2 !== index;
      }).map(function(option2) {
        return _this13.getOptionValue(option2);
      });
      this.updateModel(event, value);
      this.$emit("item-unselect", {
        originalEvent: event,
        value: removedOption
      });
      this.$emit("option-unselect", {
        originalEvent: event,
        value: removedOption
      });
      this.dirty = true;
      bt(this.multiple ? this.$refs.focusInput : this.$refs.focusInput.$el);
    },
    changeFocusedOptionIndex: function changeFocusedOptionIndex(event, index) {
      if (this.focusedOptionIndex !== index) {
        this.focusedOptionIndex = index;
        this.scrollInView();
        if (this.selectOnFocus) {
          this.onOptionSelect(event, this.visibleOptions[index], false);
        }
      }
    },
    scrollInView: function scrollInView2() {
      var _this14 = this;
      var index = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : -1;
      this.$nextTick(function() {
        var id = index !== -1 ? "".concat(_this14.$id, "_").concat(index) : _this14.focusedOptionId;
        var element = z(_this14.list, 'li[id="'.concat(id, '"]'));
        if (element) {
          element.scrollIntoView && element.scrollIntoView({
            block: "nearest",
            inline: "start"
          });
        } else if (!_this14.virtualScrollerDisabled) {
          _this14.virtualScroller && _this14.virtualScroller.scrollToIndex(index !== -1 ? index : _this14.focusedOptionIndex);
        }
      });
    },
    autoUpdateModel: function autoUpdateModel() {
      if (this.selectOnFocus && this.autoOptionFocus && !this.$filled) {
        this.focusedOptionIndex = this.findFirstFocusedOptionIndex();
        this.onOptionSelect(null, this.visibleOptions[this.focusedOptionIndex], false);
      }
    },
    updateModel: function updateModel(event, value) {
      this.writeValue(value, event);
      this.$emit("change", {
        originalEvent: event,
        value
      });
    },
    flatOptions: function flatOptions(options) {
      var _this15 = this;
      return (options || []).reduce(function(result, option2, index) {
        result.push({
          optionGroup: option2,
          group: true,
          index
        });
        var optionGroupChildren = _this15.getOptionGroupChildren(option2);
        optionGroupChildren && optionGroupChildren.forEach(function(o) {
          return result.push(o);
        });
        return result;
      }, []);
    },
    overlayRef: function overlayRef(el) {
      this.overlay = el;
    },
    listRef: function listRef(el, contentRef2) {
      this.list = el;
      contentRef2 && contentRef2(el);
    },
    virtualScrollerRef: function virtualScrollerRef(el) {
      this.virtualScroller = el;
    },
    findNextSelectedOptionIndex: function findNextSelectedOptionIndex(index) {
      var _this16 = this;
      var matchedOptionIndex = this.$filled && index < this.visibleOptions.length - 1 ? this.visibleOptions.slice(index + 1).findIndex(function(option2) {
        return _this16.isValidSelectedOption(option2);
      }) : -1;
      return matchedOptionIndex > -1 ? matchedOptionIndex + index + 1 : -1;
    },
    findPrevSelectedOptionIndex: function findPrevSelectedOptionIndex(index) {
      var _this17 = this;
      var matchedOptionIndex = this.$filled && index > 0 ? M(this.visibleOptions.slice(0, index), function(option2) {
        return _this17.isValidSelectedOption(option2);
      }) : -1;
      return matchedOptionIndex > -1 ? matchedOptionIndex : -1;
    },
    findNearestSelectedOptionIndex: function findNearestSelectedOptionIndex(index) {
      var firstCheckUp = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
      var matchedOptionIndex = -1;
      if (this.$filled) {
        if (firstCheckUp) {
          matchedOptionIndex = this.findPrevSelectedOptionIndex(index);
          matchedOptionIndex = matchedOptionIndex === -1 ? this.findNextSelectedOptionIndex(index) : matchedOptionIndex;
        } else {
          matchedOptionIndex = this.findNextSelectedOptionIndex(index);
          matchedOptionIndex = matchedOptionIndex === -1 ? this.findPrevSelectedOptionIndex(index) : matchedOptionIndex;
        }
      }
      return matchedOptionIndex > -1 ? matchedOptionIndex : index;
    }
  },
  computed: {
    visibleOptions: function visibleOptions() {
      return this.optionGroupLabel ? this.flatOptions(this.suggestions) : this.suggestions || [];
    },
    inputValue: function inputValue() {
      if (this.$filled) {
        if (_typeof$1(this.d_value) === "object") {
          var label = this.getOptionLabel(this.d_value);
          return label != null ? label : this.d_value;
        } else {
          return this.d_value;
        }
      } else {
        return "";
      }
    },
    // @deprecated use $filled instead.
    hasSelectedOption: function hasSelectedOption() {
      return this.$filled;
    },
    equalityKey: function equalityKey() {
      return this.dataKey;
    },
    searchResultMessageText: function searchResultMessageText() {
      return s$1(this.visibleOptions) && this.overlayVisible ? this.searchMessageText.replaceAll("{0}", this.visibleOptions.length) : this.emptySearchMessageText;
    },
    searchMessageText: function searchMessageText() {
      return this.searchMessage || this.$primevue.config.locale.searchMessage || "";
    },
    emptySearchMessageText: function emptySearchMessageText() {
      return this.emptySearchMessage || this.$primevue.config.locale.emptySearchMessage || "";
    },
    selectionMessageText: function selectionMessageText() {
      return this.selectionMessage || this.$primevue.config.locale.selectionMessage || "";
    },
    emptySelectionMessageText: function emptySelectionMessageText() {
      return this.emptySelectionMessage || this.$primevue.config.locale.emptySelectionMessage || "";
    },
    selectedMessageText: function selectedMessageText() {
      return this.$filled ? this.selectionMessageText.replaceAll("{0}", this.multiple ? this.d_value.length : "1") : this.emptySelectionMessageText;
    },
    listAriaLabel: function listAriaLabel() {
      return this.$primevue.config.locale.aria ? this.$primevue.config.locale.aria.listLabel : void 0;
    },
    focusedOptionId: function focusedOptionId() {
      return this.focusedOptionIndex !== -1 ? "".concat(this.$id, "_").concat(this.focusedOptionIndex) : null;
    },
    focusedMultipleOptionId: function focusedMultipleOptionId() {
      return this.focusedMultipleOptionIndex !== -1 ? "".concat(this.$id, "_multiple_option_").concat(this.focusedMultipleOptionIndex) : null;
    },
    ariaSetSize: function ariaSetSize() {
      var _this18 = this;
      return this.visibleOptions.filter(function(option2) {
        return !_this18.isOptionGroup(option2);
      }).length;
    },
    virtualScrollerDisabled: function virtualScrollerDisabled() {
      return !this.virtualScrollerOptions;
    },
    panelId: function panelId() {
      return this.$id + "_panel";
    },
    containerDataP: function containerDataP() {
      return f({
        fluid: this.$fluid
      });
    },
    overlayDataP: function overlayDataP() {
      return f(_defineProperty$1({}, "portal-" + this.appendTo, "portal-" + this.appendTo));
    },
    inputMultipleDataP: function inputMultipleDataP() {
      return f(_defineProperty$1({
        invalid: this.$invalid,
        disabled: this.disabled,
        focus: this.focused,
        fluid: this.$fluid,
        filled: this.$variant === "filled",
        empty: !this.$filled
      }, this.size, this.size));
    }
  },
  components: {
    InputText: script$5,
    VirtualScroller: script$3,
    Portal: script$4,
    ChevronDownIcon: script$b,
    SpinnerIcon: script$a,
    Chip: script$8
  },
  directives: {
    ripple: Ripple
  }
};
function _typeof(o) {
  "@babel/helpers - typeof";
  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof(o);
}
function ownKeys(e, r) {
  var t2 = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t2.push.apply(t2, o);
  }
  return t2;
}
function _objectSpread(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t2 = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t2), true).forEach(function(r2) {
      _defineProperty(e, r2, t2[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t2)) : ownKeys(Object(t2)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t2, r2));
    });
  }
  return e;
}
function _defineProperty(e, r, t2) {
  return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t2, enumerable: true, configurable: true, writable: true }) : e[r] = t2, e;
}
function _toPropertyKey(t2) {
  var i2 = _toPrimitive(t2, "string");
  return "symbol" == _typeof(i2) ? i2 : i2 + "";
}
function _toPrimitive(t2, r) {
  if ("object" != _typeof(t2) || !t2) return t2;
  var e = t2[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i2 = e.call(t2, r);
    if ("object" != _typeof(i2)) return i2;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t2);
}
var _hoisted_1$3 = ["data-p"];
var _hoisted_2$1 = ["aria-activedescendant", "data-p-has-dropdown", "data-p"];
var _hoisted_3 = ["id", "aria-label", "aria-setsize", "aria-posinset"];
var _hoisted_4 = ["id", "placeholder", "tabindex", "disabled", "aria-label", "aria-labelledby", "aria-expanded", "aria-controls", "aria-activedescendant", "aria-invalid"];
var _hoisted_5 = ["data-p-has-dropdown"];
var _hoisted_6 = ["disabled", "aria-expanded", "aria-controls"];
var _hoisted_7 = ["id", "data-p"];
var _hoisted_8 = ["id", "aria-label"];
var _hoisted_9 = ["id"];
var _hoisted_10 = ["id", "aria-label", "aria-selected", "aria-disabled", "aria-setsize", "aria-posinset", "onClick", "onMousemove", "data-p-selected", "data-p-focused", "data-p-disabled"];
function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_InputText = resolveComponent("InputText");
  var _component_Chip = resolveComponent("Chip");
  var _component_SpinnerIcon = resolveComponent("SpinnerIcon");
  var _component_VirtualScroller = resolveComponent("VirtualScroller");
  var _component_Portal = resolveComponent("Portal");
  var _directive_ripple = resolveDirective("ripple");
  return openBlock(), createElementBlock("div", mergeProps({
    ref: "container",
    "class": _ctx.cx("root"),
    style: _ctx.sx("root"),
    onClick: _cache[11] || (_cache[11] = function() {
      return $options.onContainerClick && $options.onContainerClick.apply($options, arguments);
    }),
    "data-p": $options.containerDataP
  }, _ctx.ptmi("root")), [!_ctx.multiple ? (openBlock(), createBlock(_component_InputText, {
    key: 0,
    ref: "focusInput",
    id: _ctx.inputId,
    type: "text",
    name: _ctx.$formName,
    "class": normalizeClass([_ctx.cx("pcInputText"), _ctx.inputClass]),
    style: normalizeStyle(_ctx.inputStyle),
    defaultValue: $options.inputValue,
    placeholder: _ctx.placeholder,
    tabindex: !_ctx.disabled ? _ctx.tabindex : -1,
    fluid: _ctx.$fluid,
    disabled: _ctx.disabled,
    size: _ctx.size,
    invalid: _ctx.invalid,
    variant: _ctx.variant,
    autocomplete: "off",
    role: "combobox",
    "aria-label": _ctx.ariaLabel,
    "aria-labelledby": _ctx.ariaLabelledby,
    "aria-haspopup": "listbox",
    "aria-autocomplete": "list",
    "aria-expanded": $data.overlayVisible,
    "aria-controls": $options.panelId,
    "aria-activedescendant": $data.focused ? $options.focusedOptionId : void 0,
    onFocus: $options.onFocus,
    onBlur: $options.onBlur,
    onKeydown: $options.onKeyDown,
    onInput: $options.onInput,
    onChange: $options.onChange,
    unstyled: _ctx.unstyled,
    "data-p-has-dropdown": _ctx.dropdown,
    pt: _ctx.ptm("pcInputText")
  }, null, 8, ["id", "name", "class", "style", "defaultValue", "placeholder", "tabindex", "fluid", "disabled", "size", "invalid", "variant", "aria-label", "aria-labelledby", "aria-expanded", "aria-controls", "aria-activedescendant", "onFocus", "onBlur", "onKeydown", "onInput", "onChange", "unstyled", "data-p-has-dropdown", "pt"])) : createCommentVNode("", true), _ctx.multiple ? (openBlock(), createElementBlock("ul", mergeProps({
    key: 1,
    ref: "multiContainer",
    "class": _ctx.cx("inputMultiple"),
    tabindex: "-1",
    role: "listbox",
    "aria-orientation": "horizontal",
    "aria-activedescendant": $data.focused ? $options.focusedMultipleOptionId : void 0,
    onFocus: _cache[5] || (_cache[5] = function() {
      return $options.onMultipleContainerFocus && $options.onMultipleContainerFocus.apply($options, arguments);
    }),
    onBlur: _cache[6] || (_cache[6] = function() {
      return $options.onMultipleContainerBlur && $options.onMultipleContainerBlur.apply($options, arguments);
    }),
    onKeydown: _cache[7] || (_cache[7] = function() {
      return $options.onMultipleContainerKeyDown && $options.onMultipleContainerKeyDown.apply($options, arguments);
    }),
    "data-p-has-dropdown": _ctx.dropdown,
    "data-p": $options.inputMultipleDataP
  }, _ctx.ptm("inputMultiple")), [(openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.d_value, function(option2, i2) {
    return openBlock(), createElementBlock("li", mergeProps({
      key: "".concat(i2, "_").concat($options.getOptionLabel(option2)),
      id: _ctx.$id + "_multiple_option_" + i2,
      "class": _ctx.cx("chipItem", {
        i: i2
      }),
      role: "option",
      "aria-label": $options.getOptionLabel(option2),
      "aria-selected": true,
      "aria-setsize": _ctx.d_value.length,
      "aria-posinset": i2 + 1
    }, {
      ref_for: true
    }, _ctx.ptm("chipItem")), [renderSlot(_ctx.$slots, "chip", mergeProps({
      "class": _ctx.cx("pcChip"),
      value: option2,
      index: i2,
      removeCallback: function removeCallback(event) {
        return $options.removeOption(event, i2);
      }
    }, {
      ref_for: true
    }, _ctx.ptm("pcChip")), function() {
      return [createVNode(_component_Chip, {
        "class": normalizeClass(_ctx.cx("pcChip")),
        label: $options.getOptionLabel(option2),
        removeIcon: _ctx.chipIcon || _ctx.removeTokenIcon,
        removable: "",
        unstyled: _ctx.unstyled,
        onRemove: function onRemove($event) {
          return $options.removeOption($event, i2);
        },
        "data-p-focused": $data.focusedMultipleOptionIndex === i2,
        pt: _ctx.ptm("pcChip")
      }, {
        removeicon: withCtx(function() {
          return [renderSlot(_ctx.$slots, _ctx.$slots.chipicon ? "chipicon" : "removetokenicon", {
            "class": normalizeClass(_ctx.cx("chipIcon")),
            index: i2,
            removeCallback: function removeCallback(event) {
              return $options.removeOption(event, i2);
            }
          })];
        }),
        _: 2
      }, 1032, ["class", "label", "removeIcon", "unstyled", "onRemove", "data-p-focused", "pt"])];
    })], 16, _hoisted_3);
  }), 128)), createBaseVNode("li", mergeProps({
    "class": _ctx.cx("inputChip"),
    role: "option"
  }, _ctx.ptm("inputChip")), [createBaseVNode("input", mergeProps({
    ref: "focusInput",
    id: _ctx.inputId,
    type: "text",
    style: _ctx.inputStyle,
    "class": _ctx.inputClass,
    placeholder: _ctx.placeholder,
    tabindex: !_ctx.disabled ? _ctx.tabindex : -1,
    disabled: _ctx.disabled,
    autocomplete: "off",
    role: "combobox",
    "aria-label": _ctx.ariaLabel,
    "aria-labelledby": _ctx.ariaLabelledby,
    "aria-haspopup": "listbox",
    "aria-autocomplete": "list",
    "aria-expanded": $data.overlayVisible,
    "aria-controls": _ctx.$id + "_list",
    "aria-activedescendant": $data.focused ? $options.focusedOptionId : void 0,
    "aria-invalid": _ctx.invalid || void 0,
    onFocus: _cache[0] || (_cache[0] = function() {
      return $options.onFocus && $options.onFocus.apply($options, arguments);
    }),
    onBlur: _cache[1] || (_cache[1] = function() {
      return $options.onBlur && $options.onBlur.apply($options, arguments);
    }),
    onKeydown: _cache[2] || (_cache[2] = function() {
      return $options.onKeyDown && $options.onKeyDown.apply($options, arguments);
    }),
    onInput: _cache[3] || (_cache[3] = function() {
      return $options.onInput && $options.onInput.apply($options, arguments);
    }),
    onChange: _cache[4] || (_cache[4] = function() {
      return $options.onChange && $options.onChange.apply($options, arguments);
    })
  }, _ctx.ptm("input")), null, 16, _hoisted_4)], 16)], 16, _hoisted_2$1)) : createCommentVNode("", true), $data.searching || _ctx.loading ? renderSlot(_ctx.$slots, _ctx.$slots.loader ? "loader" : "loadingicon", {
    key: 2,
    "class": normalizeClass(_ctx.cx("loader"))
  }, function() {
    return [_ctx.loader || _ctx.loadingIcon ? (openBlock(), createElementBlock("i", mergeProps({
      key: 0,
      "class": ["pi-spin", _ctx.cx("loader"), _ctx.loader, _ctx.loadingIcon],
      "aria-hidden": "true",
      "data-p-has-dropdown": _ctx.dropdown
    }, _ctx.ptm("loader")), null, 16, _hoisted_5)) : (openBlock(), createBlock(_component_SpinnerIcon, mergeProps({
      key: 1,
      "class": _ctx.cx("loader"),
      spin: "",
      "aria-hidden": "true",
      "data-p-has-dropdown": _ctx.dropdown
    }, _ctx.ptm("loader")), null, 16, ["class", "data-p-has-dropdown"]))];
  }) : createCommentVNode("", true), renderSlot(_ctx.$slots, _ctx.$slots.dropdown ? "dropdown" : "dropdownbutton", {
    toggleCallback: function toggleCallback(event) {
      return $options.onDropdownClick(event);
    }
  }, function() {
    return [_ctx.dropdown ? (openBlock(), createElementBlock("button", mergeProps({
      key: 0,
      ref: "dropdownButton",
      type: "button",
      "class": [_ctx.cx("dropdown"), _ctx.dropdownClass],
      disabled: _ctx.disabled,
      "aria-haspopup": "listbox",
      "aria-expanded": $data.overlayVisible,
      "aria-controls": $options.panelId,
      onClick: _cache[8] || (_cache[8] = function() {
        return $options.onDropdownClick && $options.onDropdownClick.apply($options, arguments);
      })
    }, _ctx.ptm("dropdown")), [renderSlot(_ctx.$slots, "dropdownicon", {
      "class": normalizeClass(_ctx.dropdownIcon)
    }, function() {
      return [(openBlock(), createBlock(resolveDynamicComponent(_ctx.dropdownIcon ? "span" : "ChevronDownIcon"), mergeProps({
        "class": _ctx.dropdownIcon
      }, _ctx.ptm("dropdownIcon")), null, 16, ["class"]))];
    })], 16, _hoisted_6)) : createCommentVNode("", true)];
  }), _ctx.typeahead ? (openBlock(), createElementBlock("span", mergeProps({
    key: 3,
    role: "status",
    "aria-live": "polite",
    "class": "p-hidden-accessible"
  }, _ctx.ptm("hiddenSearchResult"), {
    "data-p-hidden-accessible": true
  }), toDisplayString($options.searchResultMessageText), 17)) : createCommentVNode("", true), createVNode(_component_Portal, {
    appendTo: _ctx.appendTo
  }, {
    "default": withCtx(function() {
      return [createVNode(Transition, mergeProps({
        name: "p-connected-overlay",
        onEnter: $options.onOverlayEnter,
        onAfterEnter: $options.onOverlayAfterEnter,
        onLeave: $options.onOverlayLeave,
        onAfterLeave: $options.onOverlayAfterLeave
      }, _ctx.ptm("transition")), {
        "default": withCtx(function() {
          return [$data.overlayVisible ? (openBlock(), createElementBlock("div", mergeProps({
            key: 0,
            ref: $options.overlayRef,
            id: $options.panelId,
            "class": [_ctx.cx("overlay"), _ctx.panelClass, _ctx.overlayClass],
            style: _objectSpread(_objectSpread({}, _ctx.panelStyle), _ctx.overlayStyle),
            onClick: _cache[9] || (_cache[9] = function() {
              return $options.onOverlayClick && $options.onOverlayClick.apply($options, arguments);
            }),
            onKeydown: _cache[10] || (_cache[10] = function() {
              return $options.onOverlayKeyDown && $options.onOverlayKeyDown.apply($options, arguments);
            }),
            "data-p": $options.overlayDataP
          }, _ctx.ptm("overlay")), [renderSlot(_ctx.$slots, "header", {
            value: _ctx.d_value,
            suggestions: $options.visibleOptions
          }), createBaseVNode("div", mergeProps({
            "class": _ctx.cx("listContainer"),
            style: {
              "max-height": $options.virtualScrollerDisabled ? _ctx.scrollHeight : ""
            }
          }, _ctx.ptm("listContainer")), [createVNode(_component_VirtualScroller, mergeProps({
            ref: $options.virtualScrollerRef
          }, _ctx.virtualScrollerOptions, {
            style: {
              height: _ctx.scrollHeight
            },
            items: $options.visibleOptions,
            tabindex: -1,
            disabled: $options.virtualScrollerDisabled,
            pt: _ctx.ptm("virtualScroller")
          }), createSlots({
            content: withCtx(function(_ref) {
              var styleClass = _ref.styleClass, contentRef2 = _ref.contentRef, items = _ref.items, getItemOptions = _ref.getItemOptions, contentStyle = _ref.contentStyle, itemSize2 = _ref.itemSize;
              return [createBaseVNode("ul", mergeProps({
                ref: function ref2(el) {
                  return $options.listRef(el, contentRef2);
                },
                id: _ctx.$id + "_list",
                "class": [_ctx.cx("list"), styleClass],
                style: contentStyle,
                role: "listbox",
                "aria-label": $options.listAriaLabel
              }, _ctx.ptm("list")), [(openBlock(true), createElementBlock(Fragment, null, renderList(items, function(option2, i2) {
                return openBlock(), createElementBlock(Fragment, {
                  key: $options.getOptionRenderKey(option2, $options.getOptionIndex(i2, getItemOptions))
                }, [$options.isOptionGroup(option2) ? (openBlock(), createElementBlock("li", mergeProps({
                  key: 0,
                  id: _ctx.$id + "_" + $options.getOptionIndex(i2, getItemOptions),
                  style: {
                    height: itemSize2 ? itemSize2 + "px" : void 0
                  },
                  "class": _ctx.cx("optionGroup"),
                  role: "option"
                }, {
                  ref_for: true
                }, _ctx.ptm("optionGroup")), [renderSlot(_ctx.$slots, "optiongroup", {
                  option: option2.optionGroup,
                  index: $options.getOptionIndex(i2, getItemOptions)
                }, function() {
                  return [createTextVNode(toDisplayString($options.getOptionGroupLabel(option2.optionGroup)), 1)];
                })], 16, _hoisted_9)) : withDirectives((openBlock(), createElementBlock("li", mergeProps({
                  key: 1,
                  id: _ctx.$id + "_" + $options.getOptionIndex(i2, getItemOptions),
                  style: {
                    height: itemSize2 ? itemSize2 + "px" : void 0
                  },
                  "class": _ctx.cx("option", {
                    option: option2,
                    i: i2,
                    getItemOptions
                  }),
                  role: "option",
                  "aria-label": $options.getOptionLabel(option2),
                  "aria-selected": $options.isSelected(option2),
                  "aria-disabled": $options.isOptionDisabled(option2),
                  "aria-setsize": $options.ariaSetSize,
                  "aria-posinset": $options.getAriaPosInset($options.getOptionIndex(i2, getItemOptions)),
                  onClick: function onClick($event) {
                    return $options.onOptionSelect($event, option2);
                  },
                  onMousemove: function onMousemove($event) {
                    return $options.onOptionMouseMove($event, $options.getOptionIndex(i2, getItemOptions));
                  },
                  "data-p-selected": $options.isSelected(option2),
                  "data-p-focused": $data.focusedOptionIndex === $options.getOptionIndex(i2, getItemOptions),
                  "data-p-disabled": $options.isOptionDisabled(option2)
                }, {
                  ref_for: true
                }, $options.getPTOptions(option2, getItemOptions, i2, "option")), [renderSlot(_ctx.$slots, "option", {
                  option: option2,
                  index: $options.getOptionIndex(i2, getItemOptions)
                }, function() {
                  return [createTextVNode(toDisplayString($options.getOptionLabel(option2)), 1)];
                })], 16, _hoisted_10)), [[_directive_ripple]])], 64);
              }), 128)), _ctx.showEmptyMessage && (!items || items && items.length === 0) ? (openBlock(), createElementBlock("li", mergeProps({
                key: 0,
                "class": _ctx.cx("emptyMessage"),
                role: "option"
              }, _ctx.ptm("emptyMessage")), [renderSlot(_ctx.$slots, "empty", {}, function() {
                return [createTextVNode(toDisplayString($options.searchResultMessageText), 1)];
              })], 16)) : createCommentVNode("", true)], 16, _hoisted_8)];
            }),
            _: 2
          }, [_ctx.$slots.loader ? {
            name: "loader",
            fn: withCtx(function(_ref2) {
              var options = _ref2.options;
              return [renderSlot(_ctx.$slots, "loader", {
                options
              })];
            }),
            key: "0"
          } : void 0]), 1040, ["style", "items", "disabled", "pt"])], 16), renderSlot(_ctx.$slots, "footer", {
            value: _ctx.d_value,
            suggestions: $options.visibleOptions
          }), createBaseVNode("span", mergeProps({
            role: "status",
            "aria-live": "polite",
            "class": "p-hidden-accessible"
          }, _ctx.ptm("hiddenSelectedMessage"), {
            "data-p-hidden-accessible": true
          }), toDisplayString($options.selectedMessageText), 17)], 16, _hoisted_7)) : createCommentVNode("", true)];
        }),
        _: 3
      }, 16, ["onEnter", "onAfterEnter", "onLeave", "onAfterLeave"])];
    }),
    _: 3
  }, 8, ["appendTo"])], 16, _hoisted_1$3);
}
script$2.render = render$1;
const _sfc_main$1 = {};
const _hoisted_1$2 = { class: "examplesContainer" };
function _sfc_render(_ctx, _cache) {
  return openBlock(), createElementBlock("div", _hoisted_1$2, _cache[0] || (_cache[0] = [
    createBaseVNode("h4", null, "Examples", -1),
    createBaseVNode("div", { class: "exampleTextContainer" }, [
      createBaseVNode("p", null, " Create IIS websites on port 8080 and 8081 and open firewall ")
    ], -1),
    createBaseVNode("div", { class: "exampleTextContainer" }, [
      createBaseVNode("p", null, " Create a security group named web-servers in AWS, allowing inbound SSH access on port 22 and HTTP access on port 80 from any IP address ")
    ], -1)
  ]));
}
const PromptExampleBox = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render], ["__scopeId", "data-v-4ed02e0f"]]);
const _hoisted_1$1 = { class: "promptContainer" };
const _hoisted_2 = { class: "fieldBox" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "PromptField",
  props: {
    "prompt": { required: true },
    "promptModifiers": {},
    "placeholder": { default: "" },
    "placeholderModifiers": {}
  },
  emits: ["update:prompt", "update:placeholder"],
  setup(__props) {
    const prompt = useModel(__props, "prompt");
    const placeholder = useModel(__props, "placeholder");
    const recentPrompts = ref([]);
    const recentPromptsFiltered = ref([]);
    vscodeApi.on("getRecentPrompts", (prompts) => {
      recentPrompts.value = prompts.sort();
    });
    function search2(event) {
      if (!event.query.trim().length) {
        recentPromptsFiltered.value = [...recentPrompts.value];
      } else {
        recentPromptsFiltered.value = recentPrompts.value.filter((prompt2) => {
          return prompt2.toLowerCase().startsWith(event.query.toLowerCase());
        });
      }
    }
    vscodeApi.post("getRecentPrompts", {});
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$1, [
        _cache[1] || (_cache[1] = createBaseVNode("label", null, [
          createBaseVNode("strong", null, "Describe what you want to achieve in natural language")
        ], -1)),
        createBaseVNode("div", _hoisted_2, [
          createVNode(unref(script$2), {
            id: "PromptTextField",
            fluid: "",
            modelValue: prompt.value,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => prompt.value = $event),
            size: "small",
            suggestions: recentPromptsFiltered.value,
            placeholder: placeholder.value,
            onComplete: search2,
            showEmptyMessage: false
          }, null, 8, ["modelValue", "suggestions", "placeholder"])
        ])
      ]);
    };
  }
});
const PromptField = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-3b615daf"]]);
var style = "\n    .p-progressspinner {\n        position: relative;\n        margin: 0 auto;\n        width: 100px;\n        height: 100px;\n        display: inline-block;\n    }\n\n    .p-progressspinner::before {\n        content: '';\n        display: block;\n        padding-top: 100%;\n    }\n\n    .p-progressspinner-spin {\n        height: 100%;\n        transform-origin: center center;\n        width: 100%;\n        position: absolute;\n        top: 0;\n        bottom: 0;\n        left: 0;\n        right: 0;\n        margin: auto;\n        animation: p-progressspinner-rotate 2s linear infinite;\n    }\n\n    .p-progressspinner-circle {\n        stroke-dasharray: 89, 200;\n        stroke-dashoffset: 0;\n        stroke: dt('progressspinner.colorOne');\n        animation:\n            p-progressspinner-dash 1.5s ease-in-out infinite,\n            p-progressspinner-color 6s ease-in-out infinite;\n        stroke-linecap: round;\n    }\n\n    @keyframes p-progressspinner-rotate {\n        100% {\n            transform: rotate(360deg);\n        }\n    }\n    @keyframes p-progressspinner-dash {\n        0% {\n            stroke-dasharray: 1, 200;\n            stroke-dashoffset: 0;\n        }\n        50% {\n            stroke-dasharray: 89, 200;\n            stroke-dashoffset: -35px;\n        }\n        100% {\n            stroke-dasharray: 89, 200;\n            stroke-dashoffset: -124px;\n        }\n    }\n    @keyframes p-progressspinner-color {\n        100%,\n        0% {\n            stroke: dt('progressspinner.color.one');\n        }\n        40% {\n            stroke: dt('progressspinner.color.two');\n        }\n        66% {\n            stroke: dt('progressspinner.color.three');\n        }\n        80%,\n        90% {\n            stroke: dt('progressspinner.color.four');\n        }\n    }\n";
var classes = {
  root: "p-progressspinner",
  spin: "p-progressspinner-spin",
  circle: "p-progressspinner-circle"
};
var ProgressSpinnerStyle = BaseStyle.extend({
  name: "progressspinner",
  style,
  classes
});
var script$1 = {
  name: "BaseProgressSpinner",
  "extends": script$d,
  props: {
    strokeWidth: {
      type: String,
      "default": "2"
    },
    fill: {
      type: String,
      "default": "none"
    },
    animationDuration: {
      type: String,
      "default": "2s"
    }
  },
  style: ProgressSpinnerStyle,
  provide: function provide6() {
    return {
      $pcProgressSpinner: this,
      $parentInstance: this
    };
  }
};
var script = {
  name: "ProgressSpinner",
  "extends": script$1,
  inheritAttrs: false,
  computed: {
    svgStyle: function svgStyle() {
      return {
        "animation-duration": this.animationDuration
      };
    }
  }
};
var _hoisted_1 = ["fill", "stroke-width"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", mergeProps({
    "class": _ctx.cx("root"),
    role: "progressbar"
  }, _ctx.ptmi("root")), [(openBlock(), createElementBlock("svg", mergeProps({
    "class": _ctx.cx("spin"),
    viewBox: "25 25 50 50",
    style: $options.svgStyle
  }, _ctx.ptm("spin")), [createBaseVNode("circle", mergeProps({
    "class": _ctx.cx("circle"),
    cx: "50",
    cy: "50",
    r: "20",
    fill: _ctx.fill,
    "stroke-width": _ctx.strokeWidth,
    strokeMiterlimit: "10"
  }, _ctx.ptm("circle")), null, 16, _hoisted_1)], 16))], 16);
}
script.render = render;
export {
  PromptField as P,
  WizardGenerationActionType as W,
  _sfc_main$4 as _,
  _sfc_main$3 as a,
  PromptExampleBox as b,
  _sfc_main$2 as c,
  script as d,
  script$2 as s
};
