import { n, r as r$1, g as getDefaultFontStack, d as defaultStyles, i, a as i$1, c as customElement, V as VscElement, o, x } from "./vscode-button.js";
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function r(r2) {
  return n({ ...r2, state: true, attribute: false });
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const e$1 = (e2, t, c) => (c.configurable = true, c.enumerable = true, Reflect.decorate && "object" != typeof t && Object.defineProperty(e2, t, c), c);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function e(e2, r2) {
  return (n2, s, i2) => {
    const o2 = (t) => t.renderRoot?.querySelector(e2) ?? null;
    if (r2) {
      const { get: e3, set: r3 } = "object" == typeof s ? n2 : i2 ?? (() => {
        const t = Symbol();
        return { get() {
          return this[t];
        }, set(e4) {
          this[t] = e4;
        } };
      })();
      return e$1(n2, s, { get() {
        let t = e3.call(this);
        return void 0 === t && (t = o2(this), (null !== t || this.hasUpdated) && r3.call(this, t)), t;
      } });
    }
    return e$1(n2, s, { get() {
      return o2(this);
    } });
  };
}
const defaultFontStack = r$1(getDefaultFontStack());
const styles = [
  defaultStyles,
  i`
    :host {
      align-items: center;
      background-color: var(--vscode-settings-textInputBackground, #313131);
      border-color: var(
        --vscode-settings-textInputBorder,
        var(--vscode-settings-textInputBackground, #3c3c3c)
      );
      border-radius: 2px;
      border-style: solid;
      border-width: 1px;
      box-sizing: border-box;
      color: var(--vscode-settings-textInputForeground, #cccccc);
      display: inline-flex;
      max-width: 100%;
      position: relative;
      width: 320px;
    }

    :host([focused]) {
      border-color: var(--vscode-focusBorder, #0078d4);
    }

    :host([invalid]),
    :host(:invalid) {
      border-color: var(--vscode-inputValidation-errorBorder, #be1100);
    }

    :host([invalid]) input,
    :host(:invalid) input {
      background-color: var(--vscode-inputValidation-errorBackground, #5a1d1d);
    }

    ::slotted([slot='content-before']) {
      display: block;
      margin-left: 2px;
    }

    ::slotted([slot='content-after']) {
      display: block;
      margin-right: 2px;
    }

    slot[name='content-before'],
    slot[name='content-after'] {
      align-items: center;
      display: flex;
    }

    input {
      background-color: var(--vscode-settings-textInputBackground, #313131);
      border: 0;
      box-sizing: border-box;
      color: var(--vscode-settings-textInputForeground, #cccccc);
      display: block;
      font-family: var(--vscode-font-family, ${defaultFontStack});
      font-size: var(--vscode-font-size, 13px);
      font-weight: var(--vscode-font-weight, 'normal');
      line-height: 18px;
      outline: none;
      padding-bottom: 3px;
      padding-left: 4px;
      padding-right: 4px;
      padding-top: 3px;
      width: 100%;
    }

    input:read-only:not([type='file']) {
      cursor: not-allowed;
    }

    input::placeholder {
      color: var(--vscode-input-placeholderForeground, #989898);
      opacity: 1;
    }

    input[type='file'] {
      line-height: 24px;
      padding-bottom: 0;
      padding-left: 2px;
      padding-top: 0;
    }

    input[type='file']::file-selector-button {
      background-color: var(--vscode-button-background, #0078d4);
      border: 0;
      border-radius: 2px;
      color: var(--vscode-button-foreground, #ffffff);
      cursor: pointer;
      font-family: var(--vscode-font-family, ${defaultFontStack});
      font-size: var(--vscode-font-size, 13px);
      font-weight: var(--vscode-font-weight, 'normal');
      line-height: 20px;
      padding: 0 14px;
    }

    input[type='file']::file-selector-button:hover {
      background-color: var(--vscode-button-hoverBackground, #026ec1);
    }
  `
];
var __decorate = function(decorators, target, key, desc) {
  var c = arguments.length, r2 = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r2 = Reflect.decorate(decorators, target, key, desc);
  else for (var i2 = decorators.length - 1; i2 >= 0; i2--) if (d = decorators[i2]) r2 = (c < 3 ? d(r2) : c > 3 ? d(target, key, r2) : d(target, key)) || r2;
  return c > 3 && r2 && Object.defineProperty(target, key, r2), r2;
};
let VscodeTextfield = class VscodeTextfield2 extends VscElement {
  /**
   * Same as the `type` of the native `<input>` element but only a subset of types are supported.
   * The supported ones are: `color`,`date`,`datetime-local`,`email`,`file`,`month`,`number`,`password`,`search`,`tel`,`text`,`time`,`url`,`week`
   */
  set type(val) {
    const validTypes = [
      "color",
      "date",
      "datetime-local",
      "email",
      "file",
      "month",
      "number",
      "password",
      "search",
      "tel",
      "text",
      "time",
      "url",
      "week"
    ];
    this._type = validTypes.includes(val) ? val : "text";
  }
  get type() {
    return this._type;
  }
  set value(val) {
    if (this.type !== "file") {
      this._value = val;
      this._internals.setFormValue(val);
    }
    this.updateComplete.then(() => {
      this._setValidityFromInput();
    });
  }
  get value() {
    return this._value;
  }
  /**
   * Lowercase alias to minLength
   */
  set minlength(val) {
    this.minLength = val;
  }
  get minlength() {
    return this.minLength;
  }
  /**
   * Lowercase alias to maxLength
   */
  set maxlength(val) {
    this.maxLength = val;
  }
  get maxlength() {
    return this.maxLength;
  }
  get form() {
    return this._internals.form;
  }
  get validity() {
    return this._internals.validity;
  }
  get validationMessage() {
    return this._internals.validationMessage;
  }
  get willValidate() {
    return this._internals.willValidate;
  }
  /**
   * Check the component's validity state when built-in validation is used.
   * Built-in validation is triggered when any validation-related attribute is set. Validation-related
   * attributes are: `max, maxlength, min, minlength, pattern, required, step`.
   * See this [the MDN reference](https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/checkValidity) for more details.
   * @returns {boolean}
   */
  checkValidity() {
    this._setValidityFromInput();
    return this._internals.checkValidity();
  }
  reportValidity() {
    this._setValidityFromInput();
    return this._internals.reportValidity();
  }
  get wrappedElement() {
    return this._inputEl;
  }
  constructor() {
    super();
    this.autocomplete = void 0;
    this.autofocus = false;
    this.defaultValue = "";
    this.disabled = false;
    this.focused = false;
    this.invalid = false;
    this.label = "";
    this.max = void 0;
    this.maxLength = void 0;
    this.min = void 0;
    this.minLength = void 0;
    this.multiple = false;
    this.name = void 0;
    this.pattern = void 0;
    this.placeholder = void 0;
    this.readonly = false;
    this.required = false;
    this.step = void 0;
    this._value = "";
    this._type = "text";
    this._internals = this.attachInternals();
  }
  connectedCallback() {
    super.connectedCallback();
    this.updateComplete.then(() => {
      this._inputEl.checkValidity();
      this._setValidityFromInput();
      this._internals.setFormValue(this._inputEl.value);
    });
  }
  attributeChangedCallback(name, old, value) {
    super.attributeChangedCallback(name, old, value);
    const validationRelatedAttributes = [
      "max",
      "maxlength",
      "min",
      "minlength",
      "pattern",
      "required",
      "step"
    ];
    if (validationRelatedAttributes.includes(name)) {
      this.updateComplete.then(() => {
        this._setValidityFromInput();
      });
    }
  }
  /** @internal */
  formResetCallback() {
    this.value = this.defaultValue;
    this.requestUpdate();
  }
  /** @internal */
  formStateRestoreCallback(state, _mode) {
    this.value = state;
  }
  _dataChanged() {
    this._value = this._inputEl.value;
    if (this.type === "file" && this._inputEl.files) {
      for (const f of this._inputEl.files) {
        this._internals.setFormValue(f);
      }
    } else {
      this._internals.setFormValue(this._inputEl.value);
    }
  }
  _setValidityFromInput() {
    if (this._inputEl) {
      this._internals.setValidity(this._inputEl.validity, this._inputEl.validationMessage, this._inputEl);
    }
  }
  _onInput(ev) {
    this._dataChanged();
    this._setValidityFromInput();
    this.dispatchEvent(new CustomEvent("vsc-input", { detail: { data: ev.data, originalEvent: ev } }));
  }
  _onChange(ev) {
    this._dataChanged();
    this._setValidityFromInput();
    this.dispatchEvent(new Event("change"));
    this.dispatchEvent(new CustomEvent("vsc-change", {
      detail: { data: this.value, originalEvent: ev }
    }));
  }
  _onFocus() {
    this.focused = true;
  }
  _onBlur() {
    this.focused = false;
  }
  _onKeyDown(ev) {
    if (ev.key === "Enter" && this._internals.form) {
      this._internals.form?.requestSubmit();
    }
  }
  render() {
    return x`
      <slot name="content-before"></slot>
      <input
        id="input"
        type=${this.type}
        ?autofocus=${this.autofocus}
        autocomplete=${o(this.autocomplete)}
        aria-label=${this.label}
        ?disabled=${this.disabled}
        max=${o(this.max)}
        maxlength=${o(this.maxLength)}
        min=${o(this.min)}
        minlength=${o(this.minLength)}
        ?multiple=${this.multiple}
        name=${o(this.name)}
        pattern=${o(this.pattern)}
        placeholder=${o(this.placeholder)}
        ?readonly=${this.readonly}
        ?required=${this.required}
        step=${o(this.step)}
        .value=${this._value}
        @blur=${this._onBlur}
        @change=${this._onChange}
        @focus=${this._onFocus}
        @input=${this._onInput}
        @keydown=${this._onKeyDown}
      >
      <slot name="content-after"></slot>
    `;
  }
};
VscodeTextfield.styles = styles;
VscodeTextfield.formAssociated = true;
VscodeTextfield.shadowRootOptions = {
  ...i$1.shadowRootOptions,
  delegatesFocus: true
};
__decorate([
  n()
], VscodeTextfield.prototype, "autocomplete", void 0);
__decorate([
  n({ type: Boolean, reflect: true })
], VscodeTextfield.prototype, "autofocus", void 0);
__decorate([
  n({ attribute: "default-value" })
], VscodeTextfield.prototype, "defaultValue", void 0);
__decorate([
  n({ type: Boolean, reflect: true })
], VscodeTextfield.prototype, "disabled", void 0);
__decorate([
  n({ type: Boolean, reflect: true })
], VscodeTextfield.prototype, "focused", void 0);
__decorate([
  n({ type: Boolean, reflect: true })
], VscodeTextfield.prototype, "invalid", void 0);
__decorate([
  n({ attribute: false })
], VscodeTextfield.prototype, "label", void 0);
__decorate([
  n({ type: Number })
], VscodeTextfield.prototype, "max", void 0);
__decorate([
  n({ type: Number })
], VscodeTextfield.prototype, "maxLength", void 0);
__decorate([
  n({ type: Number })
], VscodeTextfield.prototype, "min", void 0);
__decorate([
  n({ type: Number })
], VscodeTextfield.prototype, "minLength", void 0);
__decorate([
  n({ type: Boolean, reflect: true })
], VscodeTextfield.prototype, "multiple", void 0);
__decorate([
  n({ reflect: true })
], VscodeTextfield.prototype, "name", void 0);
__decorate([
  n()
], VscodeTextfield.prototype, "pattern", void 0);
__decorate([
  n()
], VscodeTextfield.prototype, "placeholder", void 0);
__decorate([
  n({ type: Boolean, reflect: true })
], VscodeTextfield.prototype, "readonly", void 0);
__decorate([
  n({ type: Boolean, reflect: true })
], VscodeTextfield.prototype, "required", void 0);
__decorate([
  n({ type: Number })
], VscodeTextfield.prototype, "step", void 0);
__decorate([
  n({ reflect: true })
], VscodeTextfield.prototype, "type", null);
__decorate([
  n()
], VscodeTextfield.prototype, "value", null);
__decorate([
  e("#input")
], VscodeTextfield.prototype, "_inputEl", void 0);
__decorate([
  r()
], VscodeTextfield.prototype, "_value", void 0);
__decorate([
  r()
], VscodeTextfield.prototype, "_type", void 0);
VscodeTextfield = __decorate([
  customElement("vscode-textfield")
], VscodeTextfield);
export {
  e as a,
  e$1 as e,
  r
};
