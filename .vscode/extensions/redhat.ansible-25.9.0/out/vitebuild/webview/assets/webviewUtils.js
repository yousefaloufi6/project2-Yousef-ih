import { n as n$1, V as VscElement, x, E, i, d as defaultStyles, e as e$1, a as i$1, c as customElement, I as INPUT_LINE_HEIGHT_RATIO, b, Z, f as e$3, h as i$2, t as t$1, T, s as stylePropertyMap, B, o as o$1 } from "./vscode-button.js";
import { e, a as e$2, r as r$1 } from "./vscode-textfield.js";
import { f as ref, v as vscodeApi } from "./vscode.js";
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function o(o2) {
  return (e$12, n2) => {
    const { slot: r2, selector: s2 } = o2 ?? {}, c2 = "slot" + (r2 ? `[name=${r2}]` : ":not([name])");
    return e(e$12, n2, { get() {
      const t2 = this.renderRoot?.querySelector(c2), e2 = t2?.assignedElements(o2) ?? [];
      return void 0 === s2 ? e2 : e2.filter((t3) => t3.matches(s2));
    } });
  };
}
var __decorate$a = function(decorators, target, key, desc) {
  var c2 = arguments.length, r2 = c2 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r2 = Reflect.decorate(decorators, target, key, desc);
  else for (var i2 = decorators.length - 1; i2 >= 0; i2--) if (d = decorators[i2]) r2 = (c2 < 3 ? d(r2) : c2 > 3 ? d(target, key, r2) : d(target, key)) || r2;
  return c2 > 3 && r2 && Object.defineProperty(target, key, r2), r2;
};
class FormButtonWidgetBase extends VscElement {
  constructor() {
    super();
    this.focused = false;
    this._prevTabindex = 0;
    this._handleFocus = () => {
      this.focused = true;
    };
    this._handleBlur = () => {
      this.focused = false;
    };
  }
  connectedCallback() {
    super.connectedCallback();
    this.addEventListener("focus", this._handleFocus);
    this.addEventListener("blur", this._handleBlur);
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    this.removeEventListener("focus", this._handleFocus);
    this.removeEventListener("blur", this._handleBlur);
  }
  attributeChangedCallback(name, oldVal, newVal) {
    super.attributeChangedCallback(name, oldVal, newVal);
    if (name === "disabled" && this.hasAttribute("disabled")) {
      this._prevTabindex = this.tabIndex;
      this.tabIndex = -1;
    } else if (name === "disabled" && !this.hasAttribute("disabled")) {
      this.tabIndex = this._prevTabindex;
    }
  }
}
__decorate$a([
  n$1({ type: Boolean, reflect: true })
], FormButtonWidgetBase.prototype, "focused", void 0);
var __decorate$9 = function(decorators, target, key, desc) {
  var c2 = arguments.length, r2 = c2 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r2 = Reflect.decorate(decorators, target, key, desc);
  else for (var i2 = decorators.length - 1; i2 >= 0; i2--) if (d = decorators[i2]) r2 = (c2 < 3 ? d(r2) : c2 > 3 ? d(target, key, r2) : d(target, key)) || r2;
  return c2 > 3 && r2 && Object.defineProperty(target, key, r2), r2;
};
const LabelledCheckboxOrRadioMixin = (superClass) => {
  class LabelledCheckboxOrRadio extends superClass {
    constructor() {
      super(...arguments);
      this._label = "";
      this._slottedText = "";
    }
    set label(val) {
      this._label = val;
      if (this._slottedText === "") {
        this.setAttribute("aria-label", val);
      }
    }
    get label() {
      return this._label;
    }
    _handleSlotChange() {
      this._slottedText = this.textContent ? this.textContent.trim() : "";
      if (this._slottedText !== "") {
        this.setAttribute("aria-label", this._slottedText);
      }
    }
    _renderLabelAttribute() {
      return this._slottedText === "" ? x`<span class="label-attr">${this._label}</span>` : x`${E}`;
    }
  }
  __decorate$9([
    n$1()
  ], LabelledCheckboxOrRadio.prototype, "label", null);
  return LabelledCheckboxOrRadio;
};
const baseStyles = [
  i`
    :host {
      color: var(--vscode-foreground, #cccccc);
      display: inline-block;
      font-family: var(--vscode-font-family, sans-serif);
      font-size: var(--vscode-font-size, 13px);
      font-weight: var(--vscode-font-weight, normal);
      line-height: 18px;
    }

    :host(:focus) {
      outline: none;
    }

    :host([disabled]) {
      opacity: 0.4;
    }

    .wrapper {
      cursor: pointer;
      display: block;
      font-size: var(--vscode-font-size, 13px);
      margin-bottom: 4px;
      margin-top: 4px;
      min-height: 18px;
      position: relative;
      user-select: none;
    }

    :host([disabled]) .wrapper {
      cursor: default;
    }

    input {
      position: absolute;
      height: 1px;
      left: 9px;
      margin: 0;
      top: 17px;
      width: 1px;
      overflow: hidden;
      clip: rect(1px, 1px, 1px, 1px);
      white-space: nowrap;
    }

    .icon {
      align-items: center;
      background-color: var(--vscode-settings-checkboxBackground, #313131);
      background-size: 16px;
      border: 1px solid var(--vscode-settings-checkboxBorder, #3c3c3c);
      box-sizing: border-box;
      color: var(--vscode-settings-checkboxForeground, #cccccc);
      display: flex;
      height: 18px;
      justify-content: center;
      left: 0;
      margin-left: 0;
      margin-right: 9px;
      padding: 0;
      pointer-events: none;
      position: absolute;
      top: 0;
      width: 18px;
    }

    .icon.before-empty-label {
      margin-right: 0;
    }

    .label {
      cursor: pointer;
      display: block;
      min-height: 18px;
      min-width: 18px;
    }

    .label-inner {
      display: block;
      opacity: 0.9;
      padding-left: 27px;
    }

    .label-inner.empty {
      padding-left: 0;
    }

    :host([disabled]) .label {
      cursor: default;
    }
  `
];
const styles$6 = [
  defaultStyles,
  baseStyles,
  i`
    :host(:invalid) .icon,
    :host([invalid]) .icon {
      background-color: var(--vscode-inputValidation-errorBackground, #5a1d1d);
      border-color: var(--vscode-inputValidation-errorBorder, #be1100);
    }

    .icon {
      border-radius: 3px;
    }

    .indeterminate-icon {
      background-color: currentColor;
      position: absolute;
      height: 1px;
      width: 12px;
    }

    :host(:focus):host(:not([disabled])) .icon {
      outline: 1px solid var(--vscode-focusBorder, #0078d4);
      outline-offset: -1px;
    }
  `
];
var __decorate$8 = function(decorators, target, key, desc) {
  var c2 = arguments.length, r2 = c2 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r2 = Reflect.decorate(decorators, target, key, desc);
  else for (var i2 = decorators.length - 1; i2 >= 0; i2--) if (d = decorators[i2]) r2 = (c2 < 3 ? d(r2) : c2 > 3 ? d(target, key, r2) : d(target, key)) || r2;
  return c2 > 3 && r2 && Object.defineProperty(target, key, r2), r2;
};
let VscodeCheckbox = class VscodeCheckbox2 extends LabelledCheckboxOrRadioMixin(FormButtonWidgetBase) {
  set checked(newVal) {
    this._checked = newVal;
    this._manageRequired();
    this.requestUpdate();
  }
  get checked() {
    return this._checked;
  }
  set required(newVal) {
    this._required = newVal;
    this._manageRequired();
    this.requestUpdate();
  }
  get required() {
    return this._required;
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
   * Returns `true` if the element's value is valid; otherwise, it returns `false`.
   * If the element's value is invalid, an invalid event is triggered on the element.
   *
   * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/checkValidity)
   */
  checkValidity() {
    return this._internals.checkValidity();
  }
  /**
   * Returns `true` if the element's value is valid; otherwise, it returns `false`.
   * If the element's value is invalid, an invalid event is triggered on the element, and the
   * browser displays an error message to the user.
   *
   * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/reportValidity)
   */
  reportValidity() {
    return this._internals.reportValidity();
  }
  constructor() {
    super();
    this.autofocus = false;
    this._checked = false;
    this.defaultChecked = false;
    this.invalid = false;
    this.name = void 0;
    this.value = "";
    this.disabled = false;
    this.indeterminate = false;
    this._required = false;
    this.type = "checkbox";
    this._handleClick = (ev) => {
      ev.preventDefault();
      if (this.disabled) {
        return;
      }
      this._toggleState();
    };
    this._handleKeyDown = (ev) => {
      if (!this.disabled && (ev.key === "Enter" || ev.key === " ")) {
        ev.preventDefault();
        if (ev.key === " ") {
          this._toggleState();
        }
        if (ev.key === "Enter") {
          this._internals.form?.requestSubmit();
        }
      }
    };
    this._internals = this.attachInternals();
  }
  connectedCallback() {
    super.connectedCallback();
    this.addEventListener("keydown", this._handleKeyDown);
    this.updateComplete.then(() => {
      this._manageRequired();
      this._setActualFormValue();
    });
  }
  disconnectedCallback() {
    this.removeEventListener("keydown", this._handleKeyDown);
  }
  update(changedProperties) {
    super.update(changedProperties);
    if (changedProperties.has("checked")) {
      this.ariaChecked = this.checked ? "true" : "false";
    }
  }
  /** @internal */
  formResetCallback() {
    this.checked = this.defaultChecked;
  }
  /** @internal */
  formStateRestoreCallback(state, _mode) {
    if (state) {
      this.checked = true;
    }
  }
  // Sets the value of the control according to the native checkbox behavior.
  // - If the checkbox is unchecked, the value will be null, so the control will
  //   excluded from the form.
  // - If the control is checked but the value is not set, the value will be "on".
  // - If the control is checked and value is set, the value won't be changed.
  _setActualFormValue() {
    let actualValue = "";
    if (this.checked) {
      actualValue = !this.value ? "on" : this.value;
    } else {
      actualValue = null;
    }
    this._internals.setFormValue(actualValue);
  }
  _toggleState() {
    this.checked = !this.checked;
    this.indeterminate = false;
    this._setActualFormValue();
    this._manageRequired();
    this.dispatchEvent(new Event("change", { bubbles: true }));
    this.dispatchEvent(new CustomEvent("vsc-change", {
      detail: {
        checked: this.checked,
        label: this.label,
        value: this.value
      },
      bubbles: true,
      composed: true
    }));
  }
  _manageRequired() {
    if (!this.checked && this.required) {
      this._internals.setValidity({
        valueMissing: true
      }, "Please check this box if you want to proceed.", this._inputEl ?? void 0);
    } else {
      this._internals.setValidity({});
    }
  }
  render() {
    const iconClasses = e$1({
      icon: true,
      checked: this.checked,
      indeterminate: this.indeterminate
    });
    const labelInnerClasses = e$1({
      "label-inner": true
    });
    const icon = x`<svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      class="check-icon"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M14.431 3.323l-8.47 10-.79-.036-3.35-4.77.818-.574 2.978 4.24 8.051-9.506.764.646z"
      />
    </svg>`;
    const check = this.checked && !this.indeterminate ? icon : E;
    const indeterminate = this.indeterminate ? x`<span class="indeterminate-icon"></span>` : E;
    return x`
      <div class="wrapper">
        <input
          ?autofocus=${this.autofocus}
          id="input"
          class="checkbox"
          type="checkbox"
          ?checked=${this.checked}
          value=${this.value}
        >
        <div class=${iconClasses}>${indeterminate}${check}</div>
        <label for="input" class="label" @click=${this._handleClick}>
          <span class=${labelInnerClasses}>
            ${this._renderLabelAttribute()}
            <slot @slotchange=${this._handleSlotChange}></slot>
          </span>
        </label>
      </div>
    `;
  }
};
VscodeCheckbox.styles = styles$6;
VscodeCheckbox.formAssociated = true;
VscodeCheckbox.shadowRootOptions = {
  ...i$1.shadowRootOptions,
  delegatesFocus: true
};
__decorate$8([
  n$1({ type: Boolean, reflect: true })
], VscodeCheckbox.prototype, "autofocus", void 0);
__decorate$8([
  n$1({ type: Boolean, reflect: true })
], VscodeCheckbox.prototype, "checked", null);
__decorate$8([
  n$1({ type: Boolean, reflect: true, attribute: "default-checked" })
], VscodeCheckbox.prototype, "defaultChecked", void 0);
__decorate$8([
  n$1({ type: Boolean, reflect: true })
], VscodeCheckbox.prototype, "invalid", void 0);
__decorate$8([
  n$1({ reflect: true })
], VscodeCheckbox.prototype, "name", void 0);
__decorate$8([
  n$1()
], VscodeCheckbox.prototype, "value", void 0);
__decorate$8([
  n$1({ type: Boolean, reflect: true })
], VscodeCheckbox.prototype, "disabled", void 0);
__decorate$8([
  n$1({ type: Boolean, reflect: true })
], VscodeCheckbox.prototype, "indeterminate", void 0);
__decorate$8([
  n$1({ type: Boolean, reflect: true })
], VscodeCheckbox.prototype, "required", null);
__decorate$8([
  n$1()
], VscodeCheckbox.prototype, "type", void 0);
__decorate$8([
  e$2("#input")
], VscodeCheckbox.prototype, "_inputEl", void 0);
VscodeCheckbox = __decorate$8([
  customElement("vscode-checkbox")
], VscodeCheckbox);
const styles$5 = [
  defaultStyles,
  i`
    :host {
      background-color: var(--vscode-foreground, #cccccc);
      display: block;
      height: 1px;
      margin-bottom: 10px;
      margin-top: 10px;
      opacity: 0.4;
    }
  `
];
var __decorate$7 = function(decorators, target, key, desc) {
  var c2 = arguments.length, r2 = c2 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r2 = Reflect.decorate(decorators, target, key, desc);
  else for (var i2 = decorators.length - 1; i2 >= 0; i2--) if (d = decorators[i2]) r2 = (c2 < 3 ? d(r2) : c2 > 3 ? d(target, key, r2) : d(target, key)) || r2;
  return c2 > 3 && r2 && Object.defineProperty(target, key, r2), r2;
};
let VscodeDivider = class VscodeDivider2 extends VscElement {
  constructor() {
    super(...arguments);
    this.role = "separator";
  }
  render() {
    return x``;
  }
};
VscodeDivider.styles = styles$5;
__decorate$7([
  n$1({ reflect: true })
], VscodeDivider.prototype, "role", void 0);
VscodeDivider = __decorate$7([
  customElement("vscode-divider")
], VscodeDivider);
const styles$4 = [
  defaultStyles,
  i`
    :host {
      --label-right-margin: 14px;
      --label-width: 150px;

      display: block;
      margin: 15px 0;
    }

    :host([variant='settings-group']) {
      margin: 0;
      padding: 12px 14px 18px;
      max-width: 727px;
    }

    .wrapper {
      display: flex;
      flex-wrap: wrap;
    }

    :host([variant='vertical']) .wrapper,
    :host([variant='settings-group']) .wrapper {
      display: block;
    }

    :host([variant='horizontal']) ::slotted(vscode-checkbox-group),
    :host([variant='horizontal']) ::slotted(vscode-radio-group) {
      width: calc(100% - calc(var(--label-width) + var(--label-right-margin)));
    }

    :host([variant='horizontal']) ::slotted(vscode-label) {
      margin-right: var(--label-right-margin);
      text-align: right;
      width: var(--label-width);
    }

    :host([variant='settings-group']) ::slotted(vscode-label) {
      height: 18px;
      line-height: 18px;
      margin-bottom: 4px;
      margin-right: 0;
      padding: 0;
    }

    ::slotted(vscode-form-helper) {
      margin-left: calc(var(--label-width) + var(--label-right-margin));
    }

    :host([variant='vertical']) ::slotted(vscode-form-helper),
    :host([variant='settings-group']) ::slotted(vscode-form-helper) {
      display: block;
      margin-left: 0;
    }

    :host([variant='settings-group']) ::slotted(vscode-form-helper) {
      margin-bottom: 0;
      margin-top: 0;
    }

    :host([variant='vertical']) ::slotted(vscode-label),
    :host([variant='settings-group']) ::slotted(vscode-label) {
      display: block;
      margin-left: 0;
      text-align: left;
    }

    :host([variant='settings-group']) ::slotted(vscode-inputbox),
    :host([variant='settings-group']) ::slotted(vscode-textfield),
    :host([variant='settings-group']) ::slotted(vscode-textarea),
    :host([variant='settings-group']) ::slotted(vscode-single-select),
    :host([variant='settings-group']) ::slotted(vscode-multi-select) {
      margin-top: 9px;
    }

    ::slotted(vscode-button:first-child) {
      margin-left: calc(var(--label-width) + var(--label-right-margin));
    }

    :host([variant='vertical']) ::slotted(vscode-button) {
      margin-left: 0;
    }

    ::slotted(vscode-button) {
      margin-right: 4px;
    }
  `
];
var __decorate$6 = function(decorators, target, key, desc) {
  var c2 = arguments.length, r2 = c2 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r2 = Reflect.decorate(decorators, target, key, desc);
  else for (var i2 = decorators.length - 1; i2 >= 0; i2--) if (d = decorators[i2]) r2 = (c2 < 3 ? d(r2) : c2 > 3 ? d(target, key, r2) : d(target, key)) || r2;
  return c2 > 3 && r2 && Object.defineProperty(target, key, r2), r2;
};
let VscodeFormGroup = class VscodeFormGroup2 extends VscElement {
  constructor() {
    super(...arguments);
    this.variant = "horizontal";
  }
  render() {
    return x`
      <div class="wrapper">
        <slot></slot>
      </div>
    `;
  }
};
VscodeFormGroup.styles = styles$4;
__decorate$6([
  n$1({ reflect: true })
], VscodeFormGroup.prototype, "variant", void 0);
VscodeFormGroup = __decorate$6([
  customElement("vscode-form-group")
], VscodeFormGroup);
let counter = 0;
const uniqueId = (prefix = "") => {
  counter++;
  return `${prefix}${counter}`;
};
const styles$3 = [
  defaultStyles,
  i`
    :host {
      color: var(--vscode-foreground, #cccccc);
      font-family: var(--vscode-font-family, sans-serif);
      font-size: var(--vscode-font-size, 13px);
      font-weight: 600;
      line-height: ${INPUT_LINE_HEIGHT_RATIO};
      cursor: default;
      display: block;
      padding: 5px 0;
    }

    .wrapper {
      display: block;
    }

    .wrapper.required:after {
      content: ' *';
    }

    ::slotted(.normal) {
      font-weight: normal;
    }

    ::slotted(.lightened) {
      color: var(--vscode-foreground, #cccccc);
      opacity: 0.9;
    }
  `
];
var __decorate$5 = function(decorators, target, key, desc) {
  var c2 = arguments.length, r2 = c2 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r2 = Reflect.decorate(decorators, target, key, desc);
  else for (var i2 = decorators.length - 1; i2 >= 0; i2--) if (d = decorators[i2]) r2 = (c2 < 3 ? d(r2) : c2 > 3 ? d(target, key, r2) : d(target, key)) || r2;
  return c2 > 3 && r2 && Object.defineProperty(target, key, r2), r2;
};
let VscodeLabel = class VscodeLabel2 extends VscElement {
  constructor() {
    super(...arguments);
    this.required = false;
    this._id = "";
    this._htmlFor = "";
    this._connected = false;
  }
  set htmlFor(val) {
    this._htmlFor = val;
    this.setAttribute("for", val);
    if (this._connected) {
      this._connectWithTarget();
    }
  }
  get htmlFor() {
    return this._htmlFor;
  }
  set id(val) {
    this._id = val;
  }
  get id() {
    return this._id;
  }
  attributeChangedCallback(name, old, value) {
    super.attributeChangedCallback(name, old, value);
  }
  connectedCallback() {
    super.connectedCallback();
    this._connected = true;
    if (this._id === "") {
      this._id = uniqueId("vscode-label-");
      this.setAttribute("id", this._id);
    }
    this._connectWithTarget();
  }
  _getTarget() {
    let target = null;
    if (this._htmlFor) {
      const root = this.getRootNode({ composed: false });
      if (root) {
        target = root.querySelector(`#${this._htmlFor}`);
      }
    }
    return target;
  }
  async _connectWithTarget() {
    await this.updateComplete;
    const target = this._getTarget();
    if (["vscode-radio-group", "vscode-checkbox-group"].includes(target?.tagName.toLowerCase() ?? "")) {
      target.setAttribute("aria-labelledby", this._id);
    }
    let label = "";
    if (this.textContent) {
      label = this.textContent.trim();
    }
    if (target && "label" in target && [
      "vscode-textfield",
      "vscode-textarea",
      "vscode-single-select",
      "vscode-multi-select"
    ].includes(target?.tagName.toLowerCase() ?? "")) {
      target.label = label;
    }
  }
  _handleClick() {
    const target = this._getTarget();
    if (target && "focus" in target) {
      target.focus();
    }
  }
  render() {
    return x`
      <label
        class=${e$1({ wrapper: true, required: this.required })}
        @click=${this._handleClick}
        ><slot></slot
      ></label>
    `;
  }
};
VscodeLabel.styles = styles$3;
__decorate$5([
  n$1({ reflect: true, attribute: "for" })
], VscodeLabel.prototype, "htmlFor", null);
__decorate$5([
  n$1()
], VscodeLabel.prototype, "id", null);
__decorate$5([
  n$1({ type: Boolean, reflect: true })
], VscodeLabel.prototype, "required", void 0);
VscodeLabel = __decorate$5([
  customElement("vscode-label")
], VscodeLabel);
const chevronDownIcon = x`
  <span class="icon">
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M7.976 10.072l4.357-4.357.62.618L8.284 11h-.618L3 6.333l.619-.618 4.357 4.357z"
      />
    </svg>
  </span>
`;
const checkIcon = b`<svg
  width="16"
  height="16"
  viewBox="0 0 16 16"
  xmlns="http://www.w3.org/2000/svg"
  fill="currentColor"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M14.431 3.323l-8.47 10-.79-.036-3.35-4.77.818-.574 2.978 4.24 8.051-9.506.764.646z"
  />
</svg>`;
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { I: t } = Z, s = () => document.createComment(""), r = (o2, i2, n2) => {
  const e2 = o2._$AA.parentNode, l = void 0 === i2 ? o2._$AB : i2._$AA;
  if (void 0 === n2) {
    const i3 = e2.insertBefore(s(), l), c2 = e2.insertBefore(s(), l);
    n2 = new t(i3, c2, o2, o2.options);
  } else {
    const t2 = n2._$AB.nextSibling, i3 = n2._$AM, c2 = i3 !== o2;
    if (c2) {
      let t3;
      n2._$AQ?.(o2), n2._$AM = o2, void 0 !== n2._$AP && (t3 = o2._$AU) !== i3._$AU && n2._$AP(t3);
    }
    if (t2 !== l || c2) {
      let o3 = n2._$AA;
      for (; o3 !== t2; ) {
        const t3 = o3.nextSibling;
        e2.insertBefore(o3, l), o3 = t3;
      }
    }
  }
  return n2;
}, v = (o2, t2, i2 = o2) => (o2._$AI(t2, i2), o2), u$1 = {}, m = (o2, t2 = u$1) => o2._$AH = t2, p = (o2) => o2._$AH, M = (o2) => {
  o2._$AP?.(false, true);
  let t2 = o2._$AA;
  const i2 = o2._$AB.nextSibling;
  for (; t2 !== i2; ) {
    const o3 = t2.nextSibling;
    t2.remove(), t2 = o3;
  }
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const u = (e2, s2, t2) => {
  const r2 = /* @__PURE__ */ new Map();
  for (let l = s2; l <= t2; l++) r2.set(e2[l], l);
  return r2;
}, c = e$3(class extends i$2 {
  constructor(e2) {
    if (super(e2), e2.type !== t$1.CHILD) throw Error("repeat() can only be used in text expressions");
  }
  dt(e2, s2, t2) {
    let r2;
    void 0 === t2 ? t2 = s2 : void 0 !== s2 && (r2 = s2);
    const l = [], o2 = [];
    let i2 = 0;
    for (const s3 of e2) l[i2] = r2 ? r2(s3, i2) : i2, o2[i2] = t2(s3, i2), i2++;
    return { values: o2, keys: l };
  }
  render(e2, s2, t2) {
    return this.dt(e2, s2, t2).values;
  }
  update(s2, [t2, r$12, c2]) {
    const d = p(s2), { values: p$1, keys: a } = this.dt(t2, r$12, c2);
    if (!Array.isArray(d)) return this.ut = a, p$1;
    const h = this.ut ??= [], v$1 = [];
    let m$1, y, x2 = 0, j = d.length - 1, k = 0, w = p$1.length - 1;
    for (; x2 <= j && k <= w; ) if (null === d[x2]) x2++;
    else if (null === d[j]) j--;
    else if (h[x2] === a[k]) v$1[k] = v(d[x2], p$1[k]), x2++, k++;
    else if (h[j] === a[w]) v$1[w] = v(d[j], p$1[w]), j--, w--;
    else if (h[x2] === a[w]) v$1[w] = v(d[x2], p$1[w]), r(s2, v$1[w + 1], d[x2]), x2++, w--;
    else if (h[j] === a[k]) v$1[k] = v(d[j], p$1[k]), r(s2, d[x2], d[j]), j--, k++;
    else if (void 0 === m$1 && (m$1 = u(a, k, w), y = u(h, x2, j)), m$1.has(h[x2])) if (m$1.has(h[j])) {
      const e2 = y.get(a[k]), t3 = void 0 !== e2 ? d[e2] : null;
      if (null === t3) {
        const e3 = r(s2, d[x2]);
        v(e3, p$1[k]), v$1[k] = e3;
      } else v$1[k] = v(t3, p$1[k]), r(s2, d[x2], t3), d[e2] = null;
      k++;
    } else M(d[j]), j--;
    else M(d[x2]), x2++;
    for (; k <= w; ) {
      const e2 = r(s2, v$1[w + 1]);
      v(e2, p$1[k]), v$1[k++] = e2;
    }
    for (; x2 <= j; ) {
      const e2 = d[x2++];
      null !== e2 && M(e2);
    }
    return this.ut = a, m(s2, v$1), T;
  }
});
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function n(n2, r2, t2) {
  return n2 ? r2(n2) : t2?.(n2);
}
var __decorate$4 = function(decorators, target, key, desc) {
  var c2 = arguments.length, r2 = c2 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r2 = Reflect.decorate(decorators, target, key, desc);
  else for (var i2 = decorators.length - 1; i2 >= 0; i2--) if (d = decorators[i2]) r2 = (c2 < 3 ? d(r2) : c2 > 3 ? d(target, key, r2) : d(target, key)) || r2;
  return c2 > 3 && r2 && Object.defineProperty(target, key, r2), r2;
};
let VscodeOption = class VscodeOption2 extends VscElement {
  constructor() {
    super(...arguments);
    this.description = "";
    this.selected = false;
    this.disabled = false;
    this._initialized = false;
    this._handleSlotChange = () => {
      if (this._initialized) {
        this.dispatchEvent(new Event("vsc-option-state-change", { bubbles: true }));
      }
    };
  }
  connectedCallback() {
    super.connectedCallback();
    this.updateComplete.then(() => {
      this._initialized = true;
    });
  }
  willUpdate(changedProperties) {
    if (this._initialized && (changedProperties.has("description") || changedProperties.has("value") || changedProperties.has("selected") || changedProperties.has("disabled"))) {
      this.dispatchEvent(new Event("vsc-option-state-change", { bubbles: true }));
    }
  }
  render() {
    return x`<slot @slotchange=${this._handleSlotChange}></slot>`;
  }
};
VscodeOption.styles = defaultStyles;
__decorate$4([
  n$1({ type: String })
], VscodeOption.prototype, "value", void 0);
__decorate$4([
  n$1({ type: String })
], VscodeOption.prototype, "description", void 0);
__decorate$4([
  n$1({ type: Boolean, reflect: true })
], VscodeOption.prototype, "selected", void 0);
__decorate$4([
  n$1({ type: Boolean, reflect: true })
], VscodeOption.prototype, "disabled", void 0);
VscodeOption = __decorate$4([
  customElement("vscode-option")
], VscodeOption);
const startsWithPerTermSearch = (subject, pattern) => {
  const result = {
    match: false,
    ranges: []
  };
  const lcSubject = subject.toLowerCase();
  const lcPattern = pattern.toLowerCase();
  const terms = lcSubject.split(" ");
  let offset = 0;
  terms.forEach((t2, i2) => {
    if (i2 > 0) {
      offset += terms[i2 - 1].length + 1;
    }
    if (result.match) {
      return;
    }
    const foundIndex = t2.indexOf(lcPattern);
    const patternLength = lcPattern.length;
    if (foundIndex === 0) {
      result.match = true;
      result.ranges.push([
        offset + foundIndex,
        Math.min(offset + foundIndex + patternLength, subject.length)
      ]);
    }
  });
  return result;
};
const startsWithSearch = (subject, pattern) => {
  const result = {
    match: false,
    ranges: []
  };
  const foundIndex = subject.toLowerCase().indexOf(pattern.toLowerCase());
  if (foundIndex === 0) {
    result.match = true;
    result.ranges = [[0, pattern.length]];
  }
  return result;
};
const containsSearch = (subject, pattern) => {
  const result = {
    match: false,
    ranges: []
  };
  const foundIndex = subject.toLowerCase().indexOf(pattern.toLowerCase());
  if (foundIndex > -1) {
    result.match = true;
    result.ranges = [[foundIndex, foundIndex + pattern.length]];
  }
  return result;
};
const fuzzySearch = (subject, pattern) => {
  const result = {
    match: false,
    ranges: []
  };
  let fromIndex = 0;
  let foundIndex = 0;
  const iMax = pattern.length - 1;
  const lcSubject = subject.toLowerCase();
  const lcPattern = pattern.toLowerCase();
  for (let i2 = 0; i2 <= iMax; i2++) {
    foundIndex = lcSubject.indexOf(lcPattern[i2], fromIndex);
    if (foundIndex === -1) {
      return {
        match: false,
        ranges: []
      };
    }
    result.match = true;
    result.ranges.push([foundIndex, foundIndex + 1]);
    fromIndex = foundIndex + 1;
  }
  return result;
};
const filterOptionsByPattern = (list, pattern, method) => {
  const filtered = [];
  list.forEach((op) => {
    let result;
    switch (method) {
      case "startsWithPerTerm":
        result = startsWithPerTermSearch(op.label, pattern);
        break;
      case "startsWith":
        result = startsWithSearch(op.label, pattern);
        break;
      case "contains":
        result = containsSearch(op.label, pattern);
        break;
      default:
        result = fuzzySearch(op.label, pattern);
    }
    if (result.match) {
      filtered.push({ ...op, ranges: result.ranges });
    }
  });
  return filtered;
};
const preventSpaces = (text) => {
  const res = [];
  if (text === " ") {
    res.push(x`&nbsp;`);
    return res;
  }
  if (text.indexOf(" ") === 0) {
    res.push(x`&nbsp;`);
  }
  res.push(x`${text.trimStart().trimEnd()}`);
  if (text.lastIndexOf(" ") === text.length - 1) {
    res.push(x`&nbsp;`);
  }
  return res;
};
const highlightRanges = (text, ranges) => {
  const res = [];
  const rl = ranges.length;
  if (rl < 1) {
    return x`${text}`;
  }
  ranges.forEach((r2, i2) => {
    const match = text.substring(r2[0], r2[1]);
    if (i2 === 0 && r2[0] !== 0) {
      res.push(...preventSpaces(text.substring(0, ranges[0][0])));
    }
    if (i2 > 0 && i2 < rl && r2[0] - ranges[i2 - 1][1] !== 0) {
      res.push(...preventSpaces(text.substring(ranges[i2 - 1][1], r2[0])));
    }
    res.push(x`<b>${preventSpaces(match)}</b>`);
    if (i2 === rl - 1 && r2[1] < text.length) {
      res.push(...preventSpaces(text.substring(r2[1], text.length)));
    }
  });
  return res;
};
class OptionListController {
  constructor(host) {
    this._activeIndex = -1;
    this._options = [];
    this._filterPattern = "";
    this._filterMethod = "fuzzy";
    this._combobox = false;
    this._indexByValue = /* @__PURE__ */ new Map();
    this._indexByLabel = /* @__PURE__ */ new Map();
    this._selectedIndex = -1;
    this._selectedIndexes = /* @__PURE__ */ new Set();
    this._multiSelect = false;
    this._numOfVisibleOptions = 0;
    (this._host = host).addController(this);
  }
  hostConnected() {
  }
  //#region getters/setters
  get activeIndex() {
    return this._activeIndex;
  }
  set activeIndex(index) {
    this._activeIndex = index;
    this._host.requestUpdate();
  }
  get relativeActiveIndex() {
    return this._options[this._activeIndex]?.filteredIndex ?? -1;
  }
  set comboboxMode(enabled) {
    this._combobox = enabled;
    this._host.requestUpdate();
  }
  get comboboxMode() {
    return this._combobox;
  }
  get multiSelect() {
    return this._multiSelect;
  }
  set multiSelect(multiSelect) {
    this._selectedIndex = -1;
    this._selectedIndexes.clear();
    this._multiSelect = multiSelect;
    this._host.requestUpdate();
  }
  get selectedIndex() {
    return this._selectedIndex;
  }
  set selectedIndex(index) {
    if (this._selectedIndex !== -1) {
      this._options[this._selectedIndex].selected ??= false;
    }
    const op = this.getOptionByIndex(index);
    this._selectedIndex = op ? index : -1;
    this._host.requestUpdate();
  }
  get selectedIndexes() {
    return Array.from(this._selectedIndexes);
  }
  set selectedIndexes(value) {
    this._selectedIndexes.forEach((v2) => {
      this._options[v2].selected = false;
    });
    this._selectedIndexes = new Set(value);
    value.forEach((v2) => {
      if (this._options[v2] !== void 0) {
        this._options[v2].selected = true;
      }
    });
    this._host.requestUpdate();
  }
  set value(newValue) {
    if (this._multiSelect) {
      const valueList = newValue.map((v2) => this._indexByValue.get(v2)).filter((v2) => v2 !== void 0);
      this._selectedIndexes = new Set(valueList);
    } else {
      this._selectedIndex = this._indexByValue.get(newValue) ?? -1;
    }
    this._host.requestUpdate();
  }
  get value() {
    if (this._multiSelect) {
      return this._selectedIndexes.size > 0 ? Array.from(this._selectedIndexes).map((v2) => this._options[v2].value) : [];
    } else {
      return this._selectedIndex > -1 ? this._options[this._selectedIndex].value : "";
    }
  }
  set multiSelectValue(newValue) {
    const valueList = newValue.map((v2) => this._indexByValue.get(v2)).filter((v2) => v2 !== void 0);
    this._selectedIndexes = new Set(valueList);
  }
  get multiSelectValue() {
    return this._selectedIndexes.size > 0 ? Array.from(this._selectedIndexes).map((v2) => this._options[v2].value) : [];
  }
  get filterPattern() {
    return this._filterPattern;
  }
  set filterPattern(pattern) {
    if (pattern !== this._filterPattern) {
      this._filterPattern = pattern;
      this._updateState();
    }
  }
  get filterMethod() {
    return this._filterMethod;
  }
  set filterMethod(method) {
    if (method !== this._filterMethod) {
      this._filterMethod = method;
      this._updateState();
    }
  }
  get options() {
    return this._options;
  }
  get numOfVisibleOptions() {
    return this._numOfVisibleOptions;
  }
  get numOptions() {
    return this._options.length;
  }
  //#endregion
  //#region public functions
  populate(options) {
    this._indexByValue.clear();
    this._indexByLabel.clear();
    this._options = options.map((op, index) => {
      this._indexByValue.set(op.value ?? "", index);
      this._indexByLabel.set(op.label ?? "", index);
      return {
        description: op.description ?? "",
        disabled: op.disabled ?? false,
        label: op.label ?? "",
        selected: op.selected ?? false,
        value: op.value ?? "",
        index,
        filteredIndex: index,
        ranges: [],
        visible: true
      };
    });
    this._numOfVisibleOptions = this._options.length;
  }
  add(option) {
    const nextIndex = this._options.length;
    const { description, disabled, label, selected, value } = option;
    let visible = true;
    let ranges = [];
    if (this._combobox && this._filterPattern !== "") {
      const res = this._searchByPattern(label ?? "");
      visible = res.match;
      ranges = res.ranges;
    }
    this._indexByValue.set(value ?? "", nextIndex);
    this._indexByLabel.set(label ?? "", nextIndex);
    if (selected) {
      this._selectedIndex = nextIndex;
      this._selectedIndexes.add(nextIndex);
      this._activeIndex = nextIndex;
    }
    this._options.push({
      index: nextIndex,
      filteredIndex: nextIndex,
      description: description ?? "",
      disabled: disabled ?? false,
      label: label ?? "",
      selected: selected ?? false,
      value: value ?? "",
      visible,
      ranges
    });
    if (visible) {
      this._numOfVisibleOptions += 1;
    }
  }
  clear() {
    this._options = [];
    this._indexByValue.clear();
    this._indexByLabel.clear();
    this._numOfVisibleOptions = 0;
  }
  getIsIndexSelected(index) {
    if (this._multiSelect) {
      return this._selectedIndexes.has(index);
    } else {
      return this._selectedIndex === index;
    }
  }
  expandMultiSelection(values) {
    values.forEach((v2) => {
      const foundIndex = this._indexByValue.get(v2) ?? -1;
      if (foundIndex !== -1) {
        this._selectedIndexes.add(foundIndex);
      }
    });
    this._host.requestUpdate();
  }
  toggleActiveMultiselectOption() {
    const activeOption = this._options[this._activeIndex] ?? null;
    if (!activeOption) {
      return;
    }
    const checked = this._selectedIndexes.has(activeOption.index);
    if (checked) {
      this._selectedIndexes.delete(activeOption.index);
    } else {
      this._selectedIndexes.add(activeOption.index);
    }
    this._host.requestUpdate();
  }
  toggleOptionSelected(optIndex) {
    const checked = this._selectedIndexes.has(optIndex);
    this._options[optIndex].selected = !this._options[optIndex].selected;
    if (checked) {
      this._selectedIndexes.delete(optIndex);
    } else {
      this._selectedIndexes.add(optIndex);
    }
    this._host.requestUpdate();
  }
  getActiveOption() {
    return this._options[this._activeIndex] ?? null;
  }
  getSelectedOption() {
    return this._options[this._selectedIndex] ?? null;
  }
  getOptionByIndex(index) {
    return this._options[index] ?? null;
  }
  findOptionIndex(value) {
    return this._indexByValue.get(value) ?? -1;
  }
  getOptionByValue(value, includeHiddenOptions = false) {
    const index = this._indexByValue.get(value) ?? -1;
    if (index === -1) {
      return null;
    }
    if (!includeHiddenOptions) {
      return this._options[index].visible ? this._options[index] : null;
    }
    return this._options[index];
  }
  getOptionByLabel(label) {
    const index = this._indexByLabel.get(label) ?? -1;
    if (index === -1) {
      return null;
    }
    return this._options[index];
  }
  next(fromIndex) {
    const from = fromIndex ?? this._activeIndex;
    let nextIndex = -1;
    for (let i2 = from + 1; i2 < this._options.length; i2++) {
      if (this._options[i2] && !this._options[i2].disabled && this._options[i2].visible) {
        nextIndex = i2;
        break;
      }
    }
    return nextIndex > -1 ? this._options[nextIndex] : null;
  }
  prev(fromIndex) {
    const from = fromIndex ?? this._activeIndex;
    let prevIndex = -1;
    for (let i2 = from - 1; i2 >= 0; i2--) {
      if (this._options[i2] && !this._options[i2].disabled && this._options[i2].visible) {
        prevIndex = i2;
        break;
      }
    }
    return prevIndex > -1 ? this._options[prevIndex] : null;
  }
  activateDefault() {
    if (this._multiSelect) {
      if (this._selectedIndexes.size > 0) {
        const indexes = this._selectedIndexes.values();
        const first = indexes.next();
        this._activeIndex = first.value ? first.value : 0;
      }
    } else {
      if (this._selectedIndex > -1) {
        this._activeIndex = this._selectedIndex;
      } else {
        this._activeIndex = 0;
      }
    }
    this._host.requestUpdate();
  }
  selectAll() {
    if (!this._multiSelect) {
      return;
    }
    this._options.forEach((_, i2) => {
      this._options[i2].selected = true;
      this._selectedIndexes.add(i2);
    });
    this._host.requestUpdate();
  }
  selectNone() {
    if (!this._multiSelect) {
      return;
    }
    this._options.forEach((_, i2) => {
      this._options[i2].selected = false;
    });
    this._selectedIndexes.clear();
    this._host.requestUpdate();
  }
  //#endregion
  //#region private functions
  _searchByPattern(text) {
    let result;
    switch (this._filterMethod) {
      case "startsWithPerTerm":
        result = startsWithPerTermSearch(text, this._filterPattern);
        break;
      case "startsWith":
        result = startsWithSearch(text, this._filterPattern);
        break;
      case "contains":
        result = containsSearch(text, this._filterPattern);
        break;
      default:
        result = fuzzySearch(text, this._filterPattern);
    }
    return result;
  }
  _updateState() {
    if (!this._combobox || this._filterPattern === "") {
      this._options.forEach((_, i2) => {
        this._options[i2].visible = true;
        this._options[i2].ranges = [];
      });
      this._numOfVisibleOptions = this._options.length;
    } else {
      let filteredListNextIndex = -1;
      this._numOfVisibleOptions = 0;
      this._options.forEach(({ label }, i2) => {
        const result = this._searchByPattern(label);
        this._options[i2].visible = result.match;
        this._options[i2].ranges = result.ranges;
        this._options[i2].filteredIndex = result.match ? ++filteredListNextIndex : -1;
        if (result.match) {
          this._numOfVisibleOptions += 1;
        }
      });
    }
    this._host.requestUpdate();
  }
}
const styles$2 = [
  defaultStyles,
  i`
    :host {
      display: block;
      position: relative;
    }

    .scrollable-container {
      height: 100%;
      overflow: auto;
    }

    .scrollable-container::-webkit-scrollbar {
      cursor: default;
      width: 0;
    }

    .scrollable-container {
      scrollbar-width: none;
    }

    .shadow {
      box-shadow: var(--vscode-scrollbar-shadow, #000000) 0 6px 6px -6px inset;
      display: none;
      height: 3px;
      left: 0;
      pointer-events: none;
      position: absolute;
      top: 0;
      z-index: 1;
      width: 100%;
    }

    .shadow.visible {
      display: block;
    }

    .scrollbar-track {
      height: 100%;
      position: absolute;
      right: 0;
      top: 0;
      width: 10px;
      z-index: 100;
    }

    .scrollbar-track.hidden {
      display: none;
    }

    .scrollbar-thumb {
      background-color: transparent;
      min-height: var(--min-thumb-height, 20px);
      opacity: 0;
      position: absolute;
      right: 0;
      width: 10px;
    }

    .scrollbar-thumb.visible {
      background-color: var(
        --vscode-scrollbarSlider-background,
        rgba(121, 121, 121, 0.4)
      );
      opacity: 1;
      transition: opacity 100ms;
    }

    .scrollbar-thumb.fade {
      background-color: var(
        --vscode-scrollbarSlider-background,
        rgba(121, 121, 121, 0.4)
      );
      opacity: 0;
      transition: opacity 800ms;
    }

    .scrollbar-thumb.visible:hover {
      background-color: var(
        --vscode-scrollbarSlider-hoverBackground,
        rgba(100, 100, 100, 0.7)
      );
    }

    .scrollbar-thumb.visible.active,
    .scrollbar-thumb.visible.active:hover {
      background-color: var(
        --vscode-scrollbarSlider-activeBackground,
        rgba(191, 191, 191, 0.4)
      );
    }

    .prevent-interaction {
      bottom: 0;
      left: 0;
      right: 0;
      top: 0;
      position: absolute;
      z-index: 99;
    }

    .content {
      overflow: hidden;
    }
  `
];
var __decorate$3 = function(decorators, target, key, desc) {
  var c2 = arguments.length, r2 = c2 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r2 = Reflect.decorate(decorators, target, key, desc);
  else for (var i2 = decorators.length - 1; i2 >= 0; i2--) if (d = decorators[i2]) r2 = (c2 < 3 ? d(r2) : c2 > 3 ? d(target, key, r2) : d(target, key)) || r2;
  return c2 > 3 && r2 && Object.defineProperty(target, key, r2), r2;
};
let VscodeScrollable = class VscodeScrollable2 extends VscElement {
  /**
   * Scroll position.
   */
  set scrollPos(val) {
    this._scrollPos = val;
    this._updateScrollbar();
    this._updateThumbPosition();
    this.requestUpdate();
  }
  get scrollPos() {
    return this._scrollPos;
  }
  /**
   * The maximum amount of the `scrollPos`.
   */
  get scrollMax() {
    if (!this._scrollableContainer) {
      return 0;
    }
    return this._scrollableContainer.scrollHeight;
  }
  constructor() {
    super();
    this.alwaysVisible = false;
    this.fastScrollSensitivity = 5;
    this.minThumbSize = 20;
    this.mouseWheelScrollSensitivity = 1;
    this.shadow = true;
    this.scrolled = false;
    this._scrollPos = 0;
    this._isDragging = false;
    this._thumbHeight = 0;
    this._thumbY = 0;
    this._thumbVisible = false;
    this._thumbFade = false;
    this._thumbActive = false;
    this._scrollThumbStartY = 0;
    this._mouseStartY = 0;
    this._scrollbarVisible = true;
    this._scrollbarTrackZ = 0;
    this._resizeObserverCallback = () => {
      this._updateScrollbar();
      this._updateThumbPosition();
    };
    this._handleSlotChange = () => {
      this._updateScrollbar();
      this._updateThumbPosition();
      this._zIndexFix();
    };
    this._handleScrollThumbMouseMove = (event) => {
      const rawThumbPos = this._scrollThumbStartY + (event.screenY - this._mouseStartY);
      this._thumbY = this._limitThumbPos(rawThumbPos);
      this.scrollPos = this._calculateScrollPosFromThumbPos(this._thumbY);
      this.dispatchEvent(new CustomEvent("vsc-scrollable-scroll", {
        detail: this.scrollPos
      }));
    };
    this._handleScrollThumbMouseUp = (event) => {
      this._isDragging = false;
      this._thumbActive = false;
      const cr = this.getBoundingClientRect();
      const { x: x2, y, width, height } = cr;
      const { pageX, pageY } = event;
      if (pageX > x2 + width || pageX < x2 || pageY > y + height || pageY < y) {
        this._thumbFade = true;
        this._thumbVisible = false;
      }
      document.removeEventListener("mousemove", this._handleScrollThumbMouseMove);
      document.removeEventListener("mouseup", this._handleScrollThumbMouseUp);
    };
    this._handleComponentMouseOver = () => {
      this._thumbVisible = true;
      this._thumbFade = false;
    };
    this._handleComponentMouseOut = () => {
      if (!this._thumbActive) {
        this._thumbVisible = false;
        this._thumbFade = true;
      }
    };
    this._handleComponentWheel = (ev) => {
      ev.preventDefault();
      const multiplier = ev.altKey ? this.mouseWheelScrollSensitivity * this.fastScrollSensitivity : this.mouseWheelScrollSensitivity;
      this.scrollPos = this._limitScrollPos(this.scrollPos + ev.deltaY * multiplier);
      this.dispatchEvent(new CustomEvent("vsc-scrollable-scroll", {
        detail: this.scrollPos
      }));
    };
    this._handleScrollableContainerScroll = (ev) => {
      if (ev.currentTarget) {
        this.scrollPos = ev.currentTarget.scrollTop;
      }
    };
    this.addEventListener("mouseover", this._handleComponentMouseOver);
    this.addEventListener("mouseout", this._handleComponentMouseOut);
    this.addEventListener("wheel", this._handleComponentWheel);
  }
  connectedCallback() {
    super.connectedCallback();
    this._hostResizeObserver = new ResizeObserver(this._resizeObserverCallback);
    this._contentResizeObserver = new ResizeObserver(this._resizeObserverCallback);
    this.requestUpdate();
    this.updateComplete.then(() => {
      this._hostResizeObserver.observe(this);
      this._contentResizeObserver.observe(this._contentElement);
      this._updateThumbPosition();
    });
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    this._hostResizeObserver.unobserve(this);
    this._hostResizeObserver.disconnect();
    this._contentResizeObserver.unobserve(this._contentElement);
    this._contentResizeObserver.disconnect();
  }
  firstUpdated(_changedProperties) {
    this._updateThumbPosition();
  }
  _calcThumbHeight() {
    const componentHeight = this.offsetHeight;
    const contentHeight = this._contentElement?.offsetHeight ?? 0;
    const proposedSize = componentHeight * (componentHeight / contentHeight);
    return Math.max(this.minThumbSize, proposedSize);
  }
  _updateScrollbar() {
    const contentHeight = this._contentElement?.offsetHeight ?? 0;
    const componentHeight = this.offsetHeight;
    if (componentHeight >= contentHeight) {
      this._scrollbarVisible = false;
    } else {
      this._scrollbarVisible = true;
      this._thumbHeight = this._calcThumbHeight();
    }
    this.requestUpdate();
  }
  _zIndexFix() {
    let highestZ = 0;
    this._assignedElements.forEach((n2) => {
      if ("style" in n2) {
        const computedZIndex = window.getComputedStyle(n2).zIndex;
        const isNumber = /([0-9-])+/g.test(computedZIndex);
        if (isNumber) {
          highestZ = Number(computedZIndex) > highestZ ? Number(computedZIndex) : highestZ;
        }
      }
    });
    this._scrollbarTrackZ = highestZ + 1;
    this.requestUpdate();
  }
  _updateThumbPosition() {
    if (!this._scrollableContainer) {
      return;
    }
    const scrollTop = this._scrollPos;
    this.scrolled = scrollTop > 0;
    const componentH = this.offsetHeight;
    const thumbH = this._thumbHeight;
    const contentH = this._contentElement.offsetHeight;
    const overflown = contentH - componentH;
    const ratio = scrollTop / overflown;
    const thumbYMax = componentH - thumbH;
    this._thumbY = Math.min(ratio * (componentH - thumbH), thumbYMax);
  }
  _calculateScrollPosFromThumbPos(scrollPos) {
    const cmpH = this.getBoundingClientRect().height;
    const thumbH = this._scrollThumbElement.getBoundingClientRect().height;
    const contentH = this._contentElement.getBoundingClientRect().height;
    const rawScrollPos = scrollPos / (cmpH - thumbH) * (contentH - cmpH);
    return this._limitScrollPos(rawScrollPos);
  }
  _limitScrollPos(newPos) {
    if (newPos < 0) {
      return 0;
    } else if (newPos > this.scrollMax) {
      return this.scrollMax;
    } else {
      return newPos;
    }
  }
  _limitThumbPos(newPos) {
    const cmpH = this.getBoundingClientRect().height;
    const thumbH = this._scrollThumbElement.getBoundingClientRect().height;
    if (newPos < 0) {
      return 0;
    } else if (newPos > cmpH - thumbH) {
      return cmpH - thumbH;
    } else {
      return newPos;
    }
  }
  _handleScrollThumbMouseDown(event) {
    const cmpCr = this.getBoundingClientRect();
    const thCr = this._scrollThumbElement.getBoundingClientRect();
    this._mouseStartY = event.screenY;
    this._scrollThumbStartY = thCr.top - cmpCr.top;
    this._isDragging = true;
    this._thumbActive = true;
    document.addEventListener("mousemove", this._handleScrollThumbMouseMove);
    document.addEventListener("mouseup", this._handleScrollThumbMouseUp);
  }
  _handleScrollbarTrackPress(ev) {
    if (ev.target !== ev.currentTarget) {
      return;
    }
    this._thumbY = ev.offsetY - this._thumbHeight / 2;
    this.scrollPos = this._calculateScrollPosFromThumbPos(this._thumbY);
  }
  //#endregion
  render() {
    return x`
      <div
        class="scrollable-container"
        .style=${stylePropertyMap({
      userSelect: this._isDragging ? "none" : "auto"
    })}
        .scrollTop=${this._scrollPos}
        @scroll=${this._handleScrollableContainerScroll}
      >
        <div
          class=${e$1({ shadow: true, visible: this.scrolled })}
          .style=${stylePropertyMap({
      zIndex: String(this._scrollbarTrackZ)
    })}
        ></div>
        ${this._isDragging ? x`<div class="prevent-interaction"></div>` : E}
        <div
          class=${e$1({
      "scrollbar-track": true,
      hidden: !this._scrollbarVisible
    })}
          @mousedown=${this._handleScrollbarTrackPress}
        >
          <div
            class=${e$1({
      "scrollbar-thumb": true,
      visible: this.alwaysVisible ? true : this._thumbVisible,
      fade: this.alwaysVisible ? false : this._thumbFade,
      active: this._thumbActive
    })}
            .style=${stylePropertyMap({
      height: `${this._thumbHeight}px`,
      top: `${this._thumbY}px`
    })}
            @mousedown=${this._handleScrollThumbMouseDown}
          ></div>
        </div>
        <div class="content">
          <slot @slotchange=${this._handleSlotChange}></slot>
        </div>
      </div>
    `;
  }
};
VscodeScrollable.styles = styles$2;
__decorate$3([
  n$1({ type: Boolean, reflect: true, attribute: "always-visible" })
], VscodeScrollable.prototype, "alwaysVisible", void 0);
__decorate$3([
  n$1({ type: Number, attribute: "fast-scroll-sensitivity" })
], VscodeScrollable.prototype, "fastScrollSensitivity", void 0);
__decorate$3([
  n$1({ type: Number, attribute: "min-thumb-size" })
], VscodeScrollable.prototype, "minThumbSize", void 0);
__decorate$3([
  n$1({ type: Number, attribute: "mouse-wheel-scroll-sensitivity" })
], VscodeScrollable.prototype, "mouseWheelScrollSensitivity", void 0);
__decorate$3([
  n$1({ type: Boolean, reflect: true })
], VscodeScrollable.prototype, "shadow", void 0);
__decorate$3([
  n$1({ type: Boolean, reflect: true })
], VscodeScrollable.prototype, "scrolled", void 0);
__decorate$3([
  n$1({ type: Number, attribute: "scroll-pos" })
], VscodeScrollable.prototype, "scrollPos", null);
__decorate$3([
  n$1({ type: Number, attribute: "scroll-max" })
], VscodeScrollable.prototype, "scrollMax", null);
__decorate$3([
  r$1()
], VscodeScrollable.prototype, "_isDragging", void 0);
__decorate$3([
  r$1()
], VscodeScrollable.prototype, "_thumbHeight", void 0);
__decorate$3([
  r$1()
], VscodeScrollable.prototype, "_thumbY", void 0);
__decorate$3([
  r$1()
], VscodeScrollable.prototype, "_thumbVisible", void 0);
__decorate$3([
  r$1()
], VscodeScrollable.prototype, "_thumbFade", void 0);
__decorate$3([
  r$1()
], VscodeScrollable.prototype, "_thumbActive", void 0);
__decorate$3([
  e$2(".content")
], VscodeScrollable.prototype, "_contentElement", void 0);
__decorate$3([
  e$2(".scrollbar-thumb", true)
], VscodeScrollable.prototype, "_scrollThumbElement", void 0);
__decorate$3([
  e$2(".scrollable-container")
], VscodeScrollable.prototype, "_scrollableContainer", void 0);
__decorate$3([
  o()
], VscodeScrollable.prototype, "_assignedElements", void 0);
VscodeScrollable = __decorate$3([
  customElement("vscode-scrollable")
], VscodeScrollable);
var __decorate$2 = function(decorators, target, key, desc) {
  var c2 = arguments.length, r2 = c2 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r2 = Reflect.decorate(decorators, target, key, desc);
  else for (var i2 = decorators.length - 1; i2 >= 0; i2--) if (d = decorators[i2]) r2 = (c2 < 3 ? d(r2) : c2 > 3 ? d(target, key, r2) : d(target, key)) || r2;
  return c2 > 3 && r2 && Object.defineProperty(target, key, r2), r2;
};
const VISIBLE_OPTS = 10;
const OPT_HEIGHT = 22;
class VscodeSelectBase extends VscElement {
  /**
   * Options can be filtered by typing into a text input field.
   */
  set combobox(enabled) {
    this._opts.comboboxMode = enabled;
  }
  get combobox() {
    return this._opts.comboboxMode;
  }
  /**
   * The element cannot be used and is not focusable.
   */
  set disabled(newState) {
    this._disabled = newState;
    this.ariaDisabled = newState ? "true" : "false";
    if (newState === true) {
      this._originalTabIndex = this.tabIndex;
      this.tabIndex = -1;
    } else {
      this.tabIndex = this._originalTabIndex ?? 0;
      this._originalTabIndex = void 0;
    }
    this.requestUpdate();
  }
  get disabled() {
    return this._disabled;
  }
  /**
   * Search method in the filtered list within the combobox mode.
   *
   * - contains - The list item includes the searched pattern at any position.
   * - fuzzy - The list item contains the letters of the search pattern in the same order, but at any position.
   * - startsWith - The search pattern matches the beginning of the searched text.
   * - startsWithPerTerm - The search pattern matches the beginning of any word in the searched text.
   *
   * @default 'fuzzy'
   */
  set filter(val) {
    const validValues = [
      "contains",
      "fuzzy",
      "startsWith",
      "startsWithPerTerm"
    ];
    let fm;
    if (validValues.includes(val)) {
      fm = val;
    } else {
      console.warn(`[VSCode Webview Elements] Invalid filter: "${val}", fallback to default. Valid values are: "contains", "fuzzy", "startsWith", "startsWithPerm".`, this);
      fm = "fuzzy";
    }
    this._opts.filterMethod = fm;
  }
  get filter() {
    return this._opts.filterMethod;
  }
  /**
   * @attr [options=[]]
   * @type {Option[]}
   */
  set options(opts) {
    this._opts.populate(opts);
  }
  get options() {
    return this._opts.options.map(({ label, value, description, selected, disabled }) => ({
      label,
      value,
      description,
      selected,
      disabled
    }));
  }
  constructor() {
    super();
    this.creatable = false;
    this.label = "";
    this.invalid = false;
    this.focused = false;
    this.open = false;
    this.position = "below";
    this._opts = new OptionListController(this);
    this._firstUpdateCompleted = false;
    this._currentDescription = "";
    this._filter = "fuzzy";
    this._selectedIndexes = [];
    this._options = [];
    this._value = "";
    this._values = [];
    this._isPlaceholderOptionActive = false;
    this._isBeingFiltered = false;
    this._optionListScrollPos = 0;
    this._isHoverForbidden = false;
    this._disabled = false;
    this._originalTabIndex = void 0;
    this._onClickOutside = (event) => {
      const path = event.composedPath();
      const found = path.findIndex((et) => et === this);
      if (found === -1) {
        this.open = false;
      }
    };
    this._onMouseMove = () => {
      this._isHoverForbidden = false;
      window.removeEventListener("mousemove", this._onMouseMove);
    };
    this._onOptionListScroll = (ev) => {
      this._optionListScrollPos = ev.detail;
    };
    this._onComponentKeyDown = (event) => {
      if ([" ", "ArrowUp", "ArrowDown", "Escape"].includes(event.key)) {
        event.stopPropagation();
        event.preventDefault();
      }
      if (event.key === "Enter") {
        this._onEnterKeyDown(event);
      }
      if (event.key === " ") {
        this._onSpaceKeyDown();
      }
      if (event.key === "Escape") {
        this._onEscapeKeyDown();
      }
      if (event.key === "ArrowUp") {
        this._onArrowUpKeyDown();
      }
      if (event.key === "ArrowDown") {
        this._onArrowDownKeyDown();
      }
    };
    this._onComponentFocus = () => {
      this.focused = true;
    };
    this._onComponentBlur = () => {
      this.focused = false;
    };
    this.addEventListener("vsc-option-state-change", (ev) => {
      ev.stopPropagation();
      this._setStateFromSlottedElements();
      this.requestUpdate();
    });
  }
  connectedCallback() {
    super.connectedCallback();
    this.addEventListener("keydown", this._onComponentKeyDown);
    this.addEventListener("focus", this._onComponentFocus);
    this.addEventListener("blur", this._onComponentBlur);
    this._setAutoFocus();
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    this.removeEventListener("keydown", this._onComponentKeyDown);
    this.removeEventListener("focus", this._onComponentFocus);
    this.removeEventListener("blur", this._onComponentBlur);
  }
  firstUpdated(_changedProperties) {
    this._firstUpdateCompleted = true;
  }
  willUpdate(changedProperties) {
    if (changedProperties.has("required") && this._firstUpdateCompleted) {
      this._manageRequired();
    }
  }
  update(changedProperties) {
    super.update(changedProperties);
    if (changedProperties.has("open")) {
      if (this.open) {
        this._opts.activateDefault();
        this._scrollActiveElementToTop();
        window.addEventListener("click", this._onClickOutside);
      } else {
        window.removeEventListener("click", this._onClickOutside);
      }
    }
  }
  get _filteredOptions() {
    if (!this.combobox || this._opts.filterPattern === "") {
      return this._options;
    }
    return filterOptionsByPattern(this._options, this._opts.filterPattern, this._filter);
  }
  _setAutoFocus() {
    if (this.hasAttribute("autofocus")) {
      if (this.tabIndex < 0) {
        this.tabIndex = 0;
      }
      if (this.combobox) {
        this.updateComplete.then(() => {
          this.shadowRoot?.querySelector(".combobox-input").focus();
        });
      } else {
        this.updateComplete.then(() => {
          this.shadowRoot?.querySelector(".select-face").focus();
        });
      }
    }
  }
  get _isSuggestedOptionVisible() {
    if (!(this.combobox && this.creatable)) {
      return false;
    }
    const filterPatternExistsAsOption = this._opts.getOptionByValue(this._opts.filterPattern) !== null;
    const filtered = this._opts.filterPattern.length > 0;
    return !filterPatternExistsAsOption && filtered;
  }
  _manageRequired() {
  }
  _setStateFromSlottedElements() {
    const optionElements = this._assignedOptions ?? [];
    this._opts.clear();
    optionElements.forEach((el) => {
      const { innerText, description, disabled } = el;
      const value = typeof el.value === "string" ? el.value : innerText.trim();
      const selected = el.selected ?? false;
      const op = {
        label: innerText.trim(),
        value,
        description,
        selected,
        disabled
      };
      this._opts.add(op);
    });
  }
  _createSuggestedOption() {
    const nextSelectedIndex = this._opts.numOptions;
    const op = document.createElement("vscode-option");
    op.value = this._opts.filterPattern;
    B(this._opts.filterPattern, op);
    this.appendChild(op);
    return nextSelectedIndex;
  }
  _dispatchChangeEvent() {
    this.dispatchEvent(new Event("change"));
    this.dispatchEvent(new Event("input"));
  }
  async _createAndSelectSuggestedOption() {
  }
  _toggleComboboxDropdown() {
    this._opts.filterPattern = "";
    this.open = !this.open;
  }
  _scrollActiveElementToTop() {
    this._optionListScrollPos = Math.floor(this._opts.relativeActiveIndex * OPT_HEIGHT);
  }
  async _adjustOptionListScrollPos(direction, optionIndex) {
    let numOpts = this._opts.numOfVisibleOptions;
    const suggestedOptionVisible = this._isSuggestedOptionVisible;
    if (suggestedOptionVisible) {
      numOpts += 1;
    }
    if (numOpts <= VISIBLE_OPTS) {
      return;
    }
    this._isHoverForbidden = true;
    window.addEventListener("mousemove", this._onMouseMove);
    const ulScrollTop = this._optionListScrollPos;
    const liPosY = optionIndex * OPT_HEIGHT;
    const fullyVisible = liPosY >= ulScrollTop && liPosY <= ulScrollTop + VISIBLE_OPTS * OPT_HEIGHT - OPT_HEIGHT;
    if (direction === "down") {
      if (!fullyVisible) {
        this._optionListScrollPos = optionIndex * OPT_HEIGHT - (VISIBLE_OPTS - 1) * OPT_HEIGHT;
      }
    }
    if (direction === "up") {
      if (!fullyVisible) {
        this._optionListScrollPos = Math.floor(this._opts.relativeActiveIndex * OPT_HEIGHT);
      }
    }
  }
  //#region event handlers
  _onFaceClick() {
    this.open = !this.open;
  }
  _onComboboxButtonClick() {
    this._toggleComboboxDropdown();
  }
  _onComboboxButtonKeyDown(ev) {
    if (ev.key === "Enter") {
      this._toggleComboboxDropdown();
    }
  }
  _onOptionMouseOver(ev) {
    if (this._isHoverForbidden) {
      return;
    }
    const el = ev.target;
    if (!el.matches(".option")) {
      return;
    }
    if (el.matches(".placeholder")) {
      this._isPlaceholderOptionActive = true;
      this._opts.activeIndex = -1;
    } else {
      this._isPlaceholderOptionActive = false;
      this._opts.activeIndex = +el.dataset.index;
    }
  }
  _onPlaceholderOptionMouseOut() {
    this._isPlaceholderOptionActive = false;
  }
  _onNoOptionsClick(ev) {
    ev.stopPropagation();
  }
  _onEnterKeyDown(ev) {
    this._isBeingFiltered = false;
    const clickedOnAcceptButton = ev?.composedPath ? ev.composedPath().find((el) => el.matches ? el.matches("vscode-button.button-accept") : false) : false;
    if (clickedOnAcceptButton) {
      return;
    }
  }
  _onSpaceKeyDown() {
    if (!this.open) {
      this.open = true;
      return;
    }
  }
  _onArrowUpKeyDown() {
    if (this.open) {
      if (this._opts.activeIndex <= 0 && !(this.combobox && this.creatable)) {
        return;
      }
      if (this._isPlaceholderOptionActive) {
        const optionIndex = this._opts.numOfVisibleOptions - 1;
        this._opts.activeIndex = optionIndex;
        this._isPlaceholderOptionActive = false;
      } else {
        const prevOp = this._opts.prev();
        if (prevOp !== null) {
          this._opts.activeIndex = prevOp?.index ?? -1;
          const prevSelectableIndex = prevOp?.filteredIndex ?? -1;
          if (prevSelectableIndex > -1) {
            this._adjustOptionListScrollPos("up", prevSelectableIndex);
          }
        }
      }
    } else {
      this.open = true;
      this._opts.activateDefault();
    }
  }
  _onArrowDownKeyDown() {
    let numOpts = this._opts.numOfVisibleOptions;
    const suggestedOptionVisible = this._isSuggestedOptionVisible;
    if (suggestedOptionVisible) {
      numOpts += 1;
    }
    if (this.open) {
      if (this._isPlaceholderOptionActive && this._opts.activeIndex === -1) {
        return;
      }
      const nextOp = this._opts.next();
      if (suggestedOptionVisible && nextOp === null) {
        this._isPlaceholderOptionActive = true;
        this._adjustOptionListScrollPos("down", numOpts - 1);
        this._opts.activeIndex = -1;
      } else if (nextOp !== null) {
        const nextSelectableIndex = nextOp?.filteredIndex ?? -1;
        this._opts.activeIndex = nextOp?.index ?? -1;
        if (nextSelectableIndex > -1) {
          this._adjustOptionListScrollPos("down", nextSelectableIndex);
        }
      }
    } else {
      this.open = true;
      this._opts.activateDefault();
    }
  }
  _onEscapeKeyDown() {
    this.open = false;
  }
  _onSlotChange() {
    this._setStateFromSlottedElements();
    this.requestUpdate();
  }
  _onComboboxInputFocus(ev) {
    ev.target.select();
    this._isBeingFiltered = false;
    this._opts.filterPattern = "";
  }
  _onComboboxInputBlur() {
    this._isBeingFiltered = false;
  }
  _onComboboxInputInput(ev) {
    this._isBeingFiltered = true;
    this._opts.filterPattern = ev.target.value;
    this._opts.activeIndex = -1;
    this.open = true;
  }
  _onComboboxInputClick() {
    this._isBeingFiltered = this._opts.filterPattern !== "";
    this.open = true;
  }
  _onComboboxInputSpaceKeyDown(ev) {
    if (ev.key === " ") {
      ev.stopPropagation();
    }
  }
  _onOptionClick(_ev) {
    this._isBeingFiltered = false;
    return;
  }
  //#endregion
  //#region render functions
  _renderCheckbox(checked, label) {
    const checkboxClasses = {
      "checkbox-icon": true,
      checked
    };
    return x`<span class=${e$1(checkboxClasses)}>${checkIcon}</span
      ><span class="option-label">${label}</span>`;
  }
  _renderOptions() {
    const list = this._opts.options;
    return x`
      <ul
        aria-label=${o$1(this.label ?? void 0)}
        aria-multiselectable=${o$1(this._opts.multiSelect ? "true" : void 0)}
        class="options"
        id="select-listbox"
        role="listbox"
        tabindex="-1"
        @click=${this._onOptionClick}
        @mouseover=${this._onOptionMouseOver}
      >
        ${c(list, (op) => op.index, (op, index) => {
      if (!op.visible) {
        return E;
      }
      const active = op.index === this._opts.activeIndex && !op.disabled;
      const selected = this._opts.getIsIndexSelected(op.index);
      const optionClasses = {
        active,
        disabled: op.disabled,
        option: true,
        selected
      };
      const labelText = op.ranges?.length ?? 0 > 0 ? highlightRanges(op.label, op.ranges ?? []) : op.label;
      return x`
              <li
                aria-selected=${selected ? "true" : "false"}
                class=${e$1(optionClasses)}
                data-index=${op.index}
                data-filtered-index=${index}
                id=${`op-${op.index}`}
                role="option"
                tabindex="-1"
              >
                ${n(this._opts.multiSelect, () => this._renderCheckbox(selected, labelText), () => labelText)}
              </li>
            `;
    })}
        ${this._renderPlaceholderOption(this._opts.numOfVisibleOptions < 1)}
      </ul>
    `;
  }
  _renderPlaceholderOption(isListEmpty) {
    if (!this.combobox) {
      return E;
    }
    const foundOption = this._opts.getOptionByLabel(this._opts.filterPattern);
    if (foundOption) {
      return E;
    }
    if (this.creatable && this._opts.filterPattern.length > 0) {
      return x`<li
        class=${e$1({
        option: true,
        placeholder: true,
        active: this._isPlaceholderOptionActive
      })}
        @mouseout=${this._onPlaceholderOptionMouseOut}
      >
        Add "${this._opts.filterPattern}"
      </li>`;
    } else {
      return isListEmpty ? x`<li class="no-options" @click=${this._onNoOptionsClick}>
            No options
          </li>` : E;
    }
  }
  _renderDescription() {
    const op = this._opts.getActiveOption();
    if (!op) {
      return E;
    }
    const { description } = op;
    return description ? x`<div class="description">${description}</div>` : E;
  }
  _renderSelectFace() {
    return x`${E}`;
  }
  _renderComboboxFace() {
    return x`${E}`;
  }
  _renderDropdownControls() {
    return x`${E}`;
  }
  _renderDropdown() {
    const classes = {
      dropdown: true,
      multiple: this._opts.multiSelect,
      open: this.open
    };
    const visibleOptions = this._isSuggestedOptionVisible || this._opts.numOfVisibleOptions === 0 ? this._opts.numOfVisibleOptions + 1 : this._opts.numOfVisibleOptions;
    const scrollPaneHeight = Math.min(visibleOptions * OPT_HEIGHT, VISIBLE_OPTS * OPT_HEIGHT);
    return x`
      <div class=${e$1(classes)}>
        ${this.position === "above" ? this._renderDescription() : E}
        <vscode-scrollable
          always-visible
          class="scrollable"
          min-thumb-size="40"
          tabindex="-1"
          @vsc-scrollable-scroll=${this._onOptionListScroll}
          .scrollPos=${this._optionListScrollPos}
          .style=${stylePropertyMap({
      height: `${scrollPaneHeight}px`
    })}
        >
          ${this._renderOptions()} ${this._renderDropdownControls()}
        </vscode-scrollable>
        ${this.position === "below" ? this._renderDescription() : E}
      </div>
    `;
  }
}
__decorate$2([
  n$1({ type: Boolean, reflect: true })
], VscodeSelectBase.prototype, "creatable", void 0);
__decorate$2([
  n$1({ type: Boolean, reflect: true })
], VscodeSelectBase.prototype, "combobox", null);
__decorate$2([
  n$1({ reflect: true })
], VscodeSelectBase.prototype, "label", void 0);
__decorate$2([
  n$1({ type: Boolean, reflect: true })
], VscodeSelectBase.prototype, "disabled", null);
__decorate$2([
  n$1({ type: Boolean, reflect: true })
], VscodeSelectBase.prototype, "invalid", void 0);
__decorate$2([
  n$1()
], VscodeSelectBase.prototype, "filter", null);
__decorate$2([
  n$1({ type: Boolean, reflect: true })
], VscodeSelectBase.prototype, "focused", void 0);
__decorate$2([
  n$1({ type: Boolean, reflect: true })
], VscodeSelectBase.prototype, "open", void 0);
__decorate$2([
  n$1({ type: Array })
], VscodeSelectBase.prototype, "options", null);
__decorate$2([
  n$1({ reflect: true })
], VscodeSelectBase.prototype, "position", void 0);
__decorate$2([
  o({
    flatten: true,
    selector: "vscode-option"
  })
], VscodeSelectBase.prototype, "_assignedOptions", void 0);
__decorate$2([
  r$1()
], VscodeSelectBase.prototype, "_currentDescription", void 0);
__decorate$2([
  r$1()
], VscodeSelectBase.prototype, "_filter", void 0);
__decorate$2([
  r$1()
], VscodeSelectBase.prototype, "_filteredOptions", null);
__decorate$2([
  r$1()
], VscodeSelectBase.prototype, "_selectedIndexes", void 0);
__decorate$2([
  r$1()
], VscodeSelectBase.prototype, "_options", void 0);
__decorate$2([
  r$1()
], VscodeSelectBase.prototype, "_value", void 0);
__decorate$2([
  r$1()
], VscodeSelectBase.prototype, "_values", void 0);
__decorate$2([
  r$1()
], VscodeSelectBase.prototype, "_isPlaceholderOptionActive", void 0);
__decorate$2([
  r$1()
], VscodeSelectBase.prototype, "_isBeingFiltered", void 0);
__decorate$2([
  r$1()
], VscodeSelectBase.prototype, "_optionListScrollPos", void 0);
const styles$1 = [
  defaultStyles,
  i`
    :host {
      display: inline-block;
      max-width: 100%;
      outline: none;
      position: relative;
      width: 320px;
    }

    .main-slot {
      display: none;
    }

    .select-face,
    .combobox-face {
      background-color: var(--vscode-settings-dropdownBackground, #313131);
      border-color: var(--vscode-settings-dropdownBorder, #3c3c3c);
      border-radius: 2px;
      border-style: solid;
      border-width: 1px;
      box-sizing: border-box;
      color: var(--vscode-settings-dropdownForeground, #cccccc);
      font-family: var(--vscode-font-family, sans-serif);
      font-size: var(--vscode-font-size, 13px);
      font-weight: var(--vscode-font-weight, normal);
      line-height: 18px;
      position: relative;
      user-select: none;
      width: 100%;
    }

    :host([invalid]) .select-face,
    :host(:invalid) .select-face,
    :host([invalid]) .combobox-face,
    :host(:invalid) .combobox-face {
      background-color: var(--vscode-inputValidation-errorBackground, #5a1d1d);
      border-color: var(--vscode-inputValidation-errorBorder, #be1100);
    }

    .select-face {
      cursor: pointer;
      display: block;
      padding: 3px 4px;
    }

    .select-face .text {
      display: block;
      height: 18px;
      overflow: hidden;
    }

    .select-face.multiselect {
      padding: 0;
    }

    .select-face-badge {
      background-color: var(--vscode-badge-background, #616161);
      border-radius: 2px;
      color: var(--vscode-badge-foreground, #f8f8f8);
      display: inline-block;
      flex-shrink: 0;
      font-size: 11px;
      line-height: 16px;
      margin: 2px;
      padding: 2px 3px;
      white-space: nowrap;
    }

    .select-face-badge.no-item {
      background-color: transparent;
      color: inherit;
    }

    .combobox-face {
      display: flex;
    }

    :host(:focus) .select-face,
    :host(:focus) .combobox-face,
    :host([focused]) .select-face,
    :host([focused]) .combobox-face {
      border-color: var(--vscode-focusBorder, #0078d4);
      outline: none;
    }

    .combobox-input {
      background-color: transparent;
      box-sizing: border-box;
      border: 0;
      color: var(--vscode-foreground, #cccccc);
      display: block;
      font-family: var(--vscode-font-family, sans-serif);
      font-size: var(--vscode-font-size, 13px);
      line-height: 16px;
      padding: 4px;
      width: 100%;
    }

    .combobox-input:focus {
      outline: none;
    }

    .combobox-button {
      align-items: center;
      background-color: transparent;
      border: 0;
      border-radius: 2px;
      box-sizing: content-box;
      color: var(--vscode-foreground, #cccccc);
      cursor: pointer;
      display: flex;
      flex-shrink: 0;
      height: 16px;
      justify-content: center;
      margin: 1px 1px 0 0;
      padding: 3px;
      width: 22px;
    }

    .combobox-button:hover,
    .combobox-button:focus-visible {
      background-color: var(
        --vscode-toolbar-hoverBackground,
        rgba(90, 93, 94, 0.31)
      );
      outline-style: dashed;
      outline-color: var(--vscode-toolbar-hoverOutline, transparent);
    }

    .combobox-button:focus-visible {
      outline: none;
    }

    .icon {
      color: var(--vscode-foreground, #cccccc);
      display: block;
      height: 14px;
      pointer-events: none;
      width: 14px;
    }

    .select-face .icon {
      position: absolute;
      right: 6px;
      top: 5px;
    }

    .icon svg {
      color: var(--vscode-foreground, #cccccc);
      height: 100%;
      width: 100%;
    }

    .dropdown {
      background-color: var(--vscode-settings-dropdownBackground, #313131);
      border-color: var(--vscode-settings-dropdownListBorder, #454545);
      border-radius: 0 0 3px 3px;
      border-style: solid;
      border-width: 1px;
      box-sizing: border-box;
      display: none;
      left: 0;
      padding-bottom: 2px;
      position: absolute;
      top: 100%;
      width: 100%;
      z-index: var(--dropdown-z-index, 2);
    }

    .dropdown.open {
      display: block;
    }

    :host([position='above']) .dropdown {
      border-radius: 3px 3px 0 0;
      bottom: 26px;
      padding-bottom: 0;
      padding-top: 2px;
      top: auto;
    }

    :host(:focus) .dropdown,
    :host([focused]) .dropdown {
      border-color: var(--vscode-focusBorder, #0078d4);
    }

    .scrollable {
      display: block;
      max-height: 222px;
      margin: 1px;
      outline: none;
      overflow: hidden;
    }

    .options {
      box-sizing: border-box;
      cursor: pointer;
      list-style: none;
      margin: 0;
      padding: 0;
    }

    .option {
      align-items: center;
      box-sizing: border-box;
      color: var(--vscode-foreground, #cccccc);
      cursor: pointer;
      display: flex;
      font-family: var(--vscode-font-family, sans-serif);
      font-size: var(--vscode-font-size, 13px);
      font-weight: var(--vscode-font-weight, normal);
      height: 22px;
      line-height: 18px;
      min-height: calc(var(--vscode-font-size) * 1.3);
      padding: 1px 3px;
      user-select: none;
      outline-color: transparent;
      outline-offset: -1px;
      outline-style: solid;
      outline-width: 1px;
    }

    .option b {
      color: var(--vscode-list-highlightForeground, #2aaaff);
    }

    .option.active b {
      color: var(--vscode-list-focusHighlightForeground, #2aaaff);
    }

    .option:not(.disabled):hover {
      background-color: var(--vscode-list-hoverBackground, #2a2d2e);
      color: var(--vscode-list-hoverForeground, #ffffff);
    }

    :host-context(body[data-vscode-theme-kind='vscode-high-contrast'])
      .option:hover,
    :host-context(body[data-vscode-theme-kind='vscode-high-contrast-light'])
      .option:hover {
      outline-style: dotted;
      outline-color: var(--vscode-list-focusOutline, #0078d4);
      outline-width: 1px;
    }

    .option.disabled {
      cursor: not-allowed;
      opacity: 0.4;
    }

    .option.active,
    .option.active:hover {
      background-color: var(--vscode-list-activeSelectionBackground, #04395e);
      color: var(--vscode-list-activeSelectionForeground, #ffffff);
      outline-color: var(--vscode-list-activeSelectionBackground, #04395e);
      outline-style: solid;
      outline-width: 1px;
    }

    .no-options {
      align-items: center;
      border-color: transparent;
      border-style: solid;
      border-width: 1px;
      color: var(--vscode-foreground, #cccccc);
      cursor: default;
      display: flex;
      font-family: var(--vscode-font-family, sans-serif);
      font-size: var(--vscode-font-size, 13px);
      font-weight: var(--vscode-font-weight, normal);
      line-height: 18px;
      min-height: calc(var(--vscode-font-size) * 1.3);
      opacity: 0.85;
      padding: 1px 3px;
      user-select: none;
    }

    .placeholder {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .placeholder span {
      font-weight: bold;
    }

    .placeholder:not(.disabled):hover {
      color: var(--vscode-list-activeSelectionForeground, #ffffff);
    }

    :host-context(body[data-vscode-theme-kind='vscode-high-contrast'])
      .option.active,
    :host-context(body[data-vscode-theme-kind='vscode-high-contrast-light'])
      .option.active:hover {
      outline-color: var(--vscode-list-focusOutline, #0078d4);
      outline-style: dashed;
    }

    .option-label {
      display: block;
      pointer-events: none;
      width: 100%;
    }

    .dropdown.multiple .option.selected {
      background-color: var(--vscode-list-hoverBackground, #2a2d2e);
      outline-color: var(--vscode-list-hoverBackground, #2a2d2e);
    }

    .dropdown.multiple .option.selected.active {
      background-color: var(--vscode-list-activeSelectionBackground, #04395e);
      color: var(--vscode-list-activeSelectionForeground, #ffffff);
      outline-color: var(--vscode-list-activeSelectionBackground, #04395e);
    }

    .checkbox-icon {
      align-items: center;
      background-color: var(--vscode-checkbox-background, #313131);
      border: 1px solid var(--vscode-checkbox-border);
      border-radius: 2px;
      box-sizing: border-box;
      color: var(--vscode-checkbox-foreground);
      display: inline-flex;
      height: 15px;
      justify-content: center;
      margin-right: 5px;
      overflow: hidden;
      position: relative;
      width: 15px;
    }

    .checkbox-icon svg {
      display: none;
      height: 13px;
      width: 13px;
    }

    .checkbox-icon.checked svg {
      display: block;
    }

    .dropdown-controls {
      display: flex;
      justify-content: flex-end;
      padding: 4px;
    }

    .dropdown-controls :not(:last-child) {
      margin-right: 4px;
    }

    .action-icon {
      align-items: center;
      background-color: transparent;
      border: 0;
      color: var(--vscode-foreground, #cccccc);
      cursor: pointer;
      display: flex;
      height: 24px;
      justify-content: center;
      padding: 0;
      width: 24px;
    }

    .action-icon:focus {
      outline: none;
    }

    .action-icon:focus-visible {
      outline: 1px solid var(--vscode-focusBorder, #0078d4);
      outline-offset: -1px;
    }

    .description {
      border-color: var(--vscode-settings-dropdownBorder, #3c3c3c);
      border-style: solid;
      border-width: 1px 0 0;
      color: var(--vscode-foreground, #cccccc);
      font-family: var(--vscode-font-family, sans-serif);
      font-size: var(--vscode-font-size, 13px);
      font-weight: var(--vscode-font-weight, normal);
      line-height: 1.3;
      padding: 6px 4px;
      word-wrap: break-word;
    }

    :host([position='above']) .description {
      border-width: 0 0 1px;
    }
  `
];
var __decorate$1 = function(decorators, target, key, desc) {
  var c2 = arguments.length, r2 = c2 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r2 = Reflect.decorate(decorators, target, key, desc);
  else for (var i2 = decorators.length - 1; i2 >= 0; i2--) if (d = decorators[i2]) r2 = (c2 < 3 ? d(r2) : c2 > 3 ? d(target, key, r2) : d(target, key)) || r2;
  return c2 > 3 && r2 && Object.defineProperty(target, key, r2), r2;
};
let VscodeSingleSelect = class VscodeSingleSelect2 extends VscodeSelectBase {
  set selectedIndex(val) {
    this._opts.selectedIndex = val;
    const op = this._opts.getOptionByIndex(val);
    if (op) {
      this._opts.activeIndex = val;
      this._value = op.value;
      this._internals.setFormValue(this._value);
      this._manageRequired();
    } else {
      this._value = "";
      this._internals.setFormValue("");
      this._manageRequired();
    }
  }
  get selectedIndex() {
    return this._opts.selectedIndex;
  }
  set value(val) {
    this._opts.value = val;
    if (this._opts.selectedIndex > -1) {
      this._requestedValueToSetLater = "";
    } else {
      this._requestedValueToSetLater = val;
    }
    this._internals.setFormValue(this._value);
    this._manageRequired();
  }
  get value() {
    return this._opts.value;
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
  checkValidity() {
    return this._internals.checkValidity();
  }
  reportValidity() {
    return this._internals.reportValidity();
  }
  updateInputValue() {
    if (!this.combobox) {
      return;
    }
    const input = this.renderRoot.querySelector(".combobox-input");
    if (input) {
      const selectedOption = this._opts.getSelectedOption();
      input.value = selectedOption?.label ?? "";
    }
  }
  constructor() {
    super();
    this.defaultValue = "";
    this.name = void 0;
    this.required = false;
    this._requestedValueToSetLater = "";
    this._opts.multiSelect = false;
    this._internals = this.attachInternals();
  }
  connectedCallback() {
    super.connectedCallback();
    this.updateComplete.then(() => {
      this._manageRequired();
    });
  }
  /** @internal */
  formResetCallback() {
    this.value = this.defaultValue;
  }
  /** @internal */
  formStateRestoreCallback(state, _mode) {
    this.updateComplete.then(() => {
      this.value = state;
    });
  }
  /** @internal */
  get type() {
    return "select-one";
  }
  get form() {
    return this._internals.form;
  }
  async _createAndSelectSuggestedOption() {
    const nextIndex = this._createSuggestedOption();
    await this.updateComplete;
    this._opts.selectedIndex = nextIndex;
    this._dispatchChangeEvent();
    const opCreateEvent = new CustomEvent("vsc-single-select-create-option", { detail: { value: this._opts.getOptionByIndex(nextIndex)?.value ?? "" } });
    this.dispatchEvent(opCreateEvent);
    this.open = false;
    this._isPlaceholderOptionActive = false;
  }
  _dispatchChangeEvent() {
    this.dispatchEvent(new CustomEvent("vsc-change", {
      detail: {
        selectedIndex: this._opts.selectedIndex,
        value: this._value
      }
    }));
    super._dispatchChangeEvent();
  }
  _setStateFromSlottedElements() {
    super._setStateFromSlottedElements();
    if (!this.combobox && this._opts.selectedIndexes.length === 0) {
      this._opts.selectedIndex = this._opts.options.length > 0 ? 0 : -1;
    }
  }
  //#region event handlers
  _onSlotChange() {
    super._onSlotChange();
    if (this._requestedValueToSetLater) {
      const foundOption = this._opts.getOptionByValue(this._requestedValueToSetLater);
      if (foundOption) {
        this._opts.selectedIndex = foundOption.index;
        this._requestedValueToSetLater = "";
      }
    }
    if (this._opts.selectedIndex > -1 && this._opts.numOptions > 0) {
      this._internals.setFormValue(this._opts.value);
      this._manageRequired();
    } else {
      this._internals.setFormValue(null);
      this._manageRequired();
    }
  }
  _onEnterKeyDown(ev) {
    super._onEnterKeyDown(ev);
    let valueChanged = false;
    if (this.combobox) {
      if (this.open) {
        if (this._isPlaceholderOptionActive) {
          this._createAndSelectSuggestedOption();
        } else {
          valueChanged = this._opts.activeIndex !== this._opts.selectedIndex;
          this._opts.selectedIndex = this._opts.activeIndex;
          this.open = false;
        }
      } else {
        this.open = true;
        this._scrollActiveElementToTop();
      }
    } else {
      if (this.open) {
        valueChanged = this._opts.activeIndex !== this._opts.selectedIndex;
        this._opts.selectedIndex = this._opts.activeIndex;
        this.open = false;
      } else {
        this.open = true;
        this._scrollActiveElementToTop();
      }
    }
    if (valueChanged) {
      this._dispatchChangeEvent();
      this.updateInputValue();
      this._internals.setFormValue(this._opts.value);
      this._manageRequired();
    }
  }
  _onOptionClick(ev) {
    super._onOptionClick(ev);
    const composedPath = ev.composedPath();
    const optEl = composedPath.find((et) => {
      const el = et;
      if ("matches" in el) {
        return el.matches("li.option");
      }
      return;
    });
    if (!optEl || optEl.matches(".disabled")) {
      return;
    }
    const isPlaceholderOption = optEl.classList.contains("placeholder");
    if (isPlaceholderOption) {
      if (this.creatable) {
        this._createAndSelectSuggestedOption();
      }
    } else {
      this._opts.selectedIndex = Number(optEl.dataset.index);
      this.open = false;
      this._internals.setFormValue(this._value);
      this._manageRequired();
      this._dispatchChangeEvent();
    }
  }
  //#endregion
  _manageRequired() {
    const { value } = this;
    if (value === "" && this.required) {
      this._internals.setValidity({ valueMissing: true }, "Please select an item in the list.", this._face);
    } else {
      this._internals.setValidity({});
    }
  }
  //#region render functions
  _renderSelectFace() {
    const selectedOption = this._opts.getSelectedOption();
    const label = selectedOption?.label ?? "";
    const activeDescendant = this._opts.activeIndex > -1 ? `op-${this._opts.activeIndex}` : "";
    return x`
      <div
        aria-activedescendant=${activeDescendant}
        aria-controls="select-listbox"
        aria-expanded=${this.open ? "true" : "false"}
        aria-haspopup="listbox"
        aria-label=${o$1(this.label)}
        class="select-face face"
        @click=${this._onFaceClick}
        role="combobox"
        tabindex="0"
      >
        <span class="text">${label}</span> ${chevronDownIcon}
      </div>
    `;
  }
  _renderComboboxFace() {
    let inputVal = "";
    if (this._isBeingFiltered) {
      inputVal = this._opts.filterPattern;
    } else {
      const op = this._opts.getSelectedOption();
      inputVal = op?.label ?? "";
    }
    const activeDescendant = this._opts.activeIndex > -1 ? `op-${this._opts.activeIndex}` : "";
    const expanded = this.open ? "true" : "false";
    return x`
      <div class="combobox-face face">
        <input
          aria-activedescendant=${activeDescendant}
          aria-autocomplete="list"
          aria-controls="select-listbox"
          aria-expanded=${expanded}
          aria-haspopup="listbox"
          aria-label=${o$1(this.label)}
          class="combobox-input"
          role="combobox"
          spellcheck="false"
          type="text"
          autocomplete="off"
          .value=${inputVal}
          @focus=${this._onComboboxInputFocus}
          @blur=${this._onComboboxInputBlur}
          @input=${this._onComboboxInputInput}
          @click=${this._onComboboxInputClick}
          @keydown=${this._onComboboxInputSpaceKeyDown}
        >
        <button
          aria-label="Open the list of options"
          class="combobox-button"
          type="button"
          @click=${this._onComboboxButtonClick}
          @keydown=${this._onComboboxButtonKeyDown}
          tabindex="-1"
        >
          ${chevronDownIcon}
        </button>
      </div>
    `;
  }
  render() {
    return x`
      <div class="single-select">
        <slot class="main-slot" @slotchange=${this._onSlotChange}></slot>
        ${this.combobox ? this._renderComboboxFace() : this._renderSelectFace()}
        ${this._renderDropdown()}
      </div>
    `;
  }
};
VscodeSingleSelect.styles = styles$1;
VscodeSingleSelect.shadowRootOptions = {
  ...i$1.shadowRootOptions,
  delegatesFocus: true
};
VscodeSingleSelect.formAssociated = true;
__decorate$1([
  n$1({ attribute: "default-value" })
], VscodeSingleSelect.prototype, "defaultValue", void 0);
__decorate$1([
  n$1({ reflect: true })
], VscodeSingleSelect.prototype, "name", void 0);
__decorate$1([
  n$1({ type: Number, attribute: "selected-index" })
], VscodeSingleSelect.prototype, "selectedIndex", null);
__decorate$1([
  n$1({ type: String })
], VscodeSingleSelect.prototype, "value", null);
__decorate$1([
  n$1({ type: Boolean, reflect: true })
], VscodeSingleSelect.prototype, "required", void 0);
__decorate$1([
  e$2(".face")
], VscodeSingleSelect.prototype, "_face", void 0);
VscodeSingleSelect = __decorate$1([
  customElement("vscode-single-select")
], VscodeSingleSelect);
const styles = [
  defaultStyles,
  i`
    :host {
      display: inline-block;
      height: 40px;
      position: relative;
      width: 320px;
    }

    :host([cols]) {
      width: auto;
    }

    :host([rows]) {
      height: auto;
    }

    .shadow {
      box-shadow: var(--vscode-scrollbar-shadow, #000000) 0 6px 6px -6px inset;
      display: none;
      inset: 0 0 auto 0;
      height: 6px;
      pointer-events: none;
      position: absolute;
      width: 100%;
    }

    .shadow.visible {
      display: block;
    }

    textarea {
      background-color: var(--vscode-settings-textInputBackground, #313131);
      border-color: var(--vscode-settings-textInputBorder, transparent);
      border-radius: 2px;
      border-style: solid;
      border-width: 1px;
      box-sizing: border-box;
      color: var(--vscode-settings-textInputForeground, #cccccc);
      display: block;
      font-family: var(--vscode-font-family, sans-serif);
      font-size: var(--vscode-font-size, 13px);
      font-weight: var(--vscode-font-weight, normal);
      height: 100%;
      width: 100%;
    }

    :host([cols]) textarea {
      width: auto;
    }

    :host([rows]) textarea {
      height: auto;
    }

    :host([invalid]) textarea,
    :host(:invalid) textarea {
      background-color: var(--vscode-inputValidation-errorBackground, #5a1d1d);
      border-color: var(--vscode-inputValidation-errorBorder, #be1100);
    }

    textarea.monospace {
      background-color: var(--vscode-editor-background, #1f1f1f);
      color: var(--vscode-editor-foreground, #cccccc);
      font-family: var(--vscode-editor-font-family, monospace);
      font-size: var(--vscode-editor-font-size, 14px);
      font-weight: var(--vscode-editor-font-weight, normal);
    }

    .textarea.monospace::placeholder {
      color: var(
        --vscode-editor-inlineValuesForeground,
        rgba(255, 255, 255, 0.5)
      );
    }

    textarea.cursor-pointer {
      cursor: pointer;
    }

    textarea:focus {
      border-color: var(--vscode-focusBorder, #0078d4);
      outline: none;
    }

    textarea::placeholder {
      color: var(--vscode-input-placeholderForeground, #989898);
      opacity: 1;
    }

    textarea::-webkit-scrollbar-track {
      background-color: transparent;
    }

    textarea::-webkit-scrollbar {
      width: 14px;
    }

    textarea::-webkit-scrollbar-thumb {
      background-color: transparent;
    }

    textarea:hover::-webkit-scrollbar-thumb {
      background-color: var(
        --vscode-scrollbarSlider-background,
        rgba(121, 121, 121, 0.4)
      );
    }

    textarea::-webkit-scrollbar-thumb:hover {
      background-color: var(
        --vscode-scrollbarSlider-hoverBackground,
        rgba(100, 100, 100, 0.7)
      );
    }

    textarea::-webkit-scrollbar-thumb:active {
      background-color: var(
        --vscode-scrollbarSlider-activeBackground,
        rgba(191, 191, 191, 0.4)
      );
    }

    textarea::-webkit-scrollbar-corner {
      background-color: transparent;
    }

    textarea::-webkit-resizer {
      background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAHCAYAAADEUlfTAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAACJJREFUeJxjYMAOZuIQZ5j5//9/rJJESczEKYGsG6cEXgAAsEEefMxkua4AAAAASUVORK5CYII=');
      background-repeat: no-repeat;
      background-position: right bottom;
    }
  `
];
var __decorate = function(decorators, target, key, desc) {
  var c2 = arguments.length, r2 = c2 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r2 = Reflect.decorate(decorators, target, key, desc);
  else for (var i2 = decorators.length - 1; i2 >= 0; i2--) if (d = decorators[i2]) r2 = (c2 < 3 ? d(r2) : c2 > 3 ? d(target, key, r2) : d(target, key)) || r2;
  return c2 > 3 && r2 && Object.defineProperty(target, key, r2), r2;
};
let VscodeTextarea = class VscodeTextarea2 extends VscElement {
  set value(val) {
    this._value = val;
    this._internals.setFormValue(val);
  }
  get value() {
    return this._value;
  }
  /**
   * Getter for the inner textarea element if it needs to be accessed for some reason.
   */
  get wrappedElement() {
    return this._textareaEl;
  }
  get form() {
    return this._internals.form;
  }
  /** @internal */
  get type() {
    return "textarea";
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
  // #endregion
  constructor() {
    super();
    this.autocomplete = void 0;
    this.autofocus = false;
    this.defaultValue = "";
    this.disabled = false;
    this.invalid = false;
    this.label = "";
    this.maxLength = void 0;
    this.minLength = void 0;
    this.rows = void 0;
    this.cols = void 0;
    this.name = void 0;
    this.placeholder = void 0;
    this.readonly = false;
    this.resize = "none";
    this.required = false;
    this.spellcheck = false;
    this.monospace = false;
    this._value = "";
    this._textareaPointerCursor = false;
    this._shadow = false;
    this._internals = this.attachInternals();
  }
  connectedCallback() {
    super.connectedCallback();
    this.updateComplete.then(() => {
      this._textareaEl.checkValidity();
      this._setValidityFromInput();
      this._internals.setFormValue(this._textareaEl.value);
    });
  }
  updated(changedProperties) {
    const validationRelatedProps = ["maxLength", "minLength", "required"];
    for (const key of changedProperties.keys()) {
      if (validationRelatedProps.includes(String(key))) {
        this.updateComplete.then(() => {
          this._setValidityFromInput();
        });
        break;
      }
    }
  }
  /** @internal */
  formResetCallback() {
    this.value = this.defaultValue;
  }
  /** @internal */
  formStateRestoreCallback(state, _mode) {
    this.updateComplete.then(() => {
      this._value = state;
    });
  }
  checkValidity() {
    return this._internals.checkValidity();
  }
  reportValidity() {
    return this._internals.reportValidity();
  }
  _setValidityFromInput() {
    this._internals.setValidity(this._textareaEl.validity, this._textareaEl.validationMessage, this._textareaEl);
  }
  _dataChanged() {
    this._value = this._textareaEl.value;
    this._internals.setFormValue(this._textareaEl.value);
  }
  _handleChange(ev) {
    this._dataChanged();
    this._setValidityFromInput();
    this.dispatchEvent(new Event("change"));
    this.dispatchEvent(new CustomEvent("vsc-change", {
      detail: { data: this.value, originalEvent: ev }
    }));
  }
  _handleInput(ev) {
    this._dataChanged();
    this._setValidityFromInput();
    this.dispatchEvent(new CustomEvent("vsc-input", {
      detail: { data: ev.data, originalEvent: ev }
    }));
  }
  _handleMouseMove(ev) {
    if (this._textareaEl.clientHeight >= this._textareaEl.scrollHeight) {
      this._textareaPointerCursor = false;
      return;
    }
    const SCROLLBAR_WIDTH = 14;
    const BORDER_WIDTH = 1;
    const br = this._textareaEl.getBoundingClientRect();
    const x2 = ev.clientX;
    this._textareaPointerCursor = x2 >= br.left + br.width - SCROLLBAR_WIDTH - BORDER_WIDTH * 2;
  }
  _handleScroll() {
    this._shadow = this._textareaEl.scrollTop > 0;
  }
  render() {
    return x`
      <div
        class=${e$1({
      shadow: true,
      visible: this._shadow
    })}
      ></div>
      <textarea
        autocomplete=${o$1(this.autocomplete)}
        ?autofocus=${this.autofocus}
        ?disabled=${this.disabled}
        aria-label=${this.label}
        id="textarea"
        class=${e$1({
      monospace: this.monospace,
      "cursor-pointer": this._textareaPointerCursor
    })}
        maxlength=${o$1(this.maxLength)}
        minlength=${o$1(this.minLength)}
        rows=${o$1(this.rows)}
        cols=${o$1(this.cols)}
        name=${o$1(this.name)}
        placeholder=${o$1(this.placeholder)}
        ?readonly=${this.readonly}
        .style=${stylePropertyMap({
      resize: this.resize
    })}
        ?required=${this.required}
        spellcheck=${this.spellcheck}
        @change=${this._handleChange}
        @input=${this._handleInput}
        @mousemove=${this._handleMouseMove}
        @scroll=${this._handleScroll}
        .value=${this._value}
      ></textarea>
    `;
  }
};
VscodeTextarea.styles = styles;
VscodeTextarea.formAssociated = true;
VscodeTextarea.shadowRootOptions = {
  ...i$1.shadowRootOptions,
  delegatesFocus: true
};
__decorate([
  n$1()
], VscodeTextarea.prototype, "autocomplete", void 0);
__decorate([
  n$1({ type: Boolean, reflect: true })
], VscodeTextarea.prototype, "autofocus", void 0);
__decorate([
  n$1({ attribute: "default-value" })
], VscodeTextarea.prototype, "defaultValue", void 0);
__decorate([
  n$1({ type: Boolean, reflect: true })
], VscodeTextarea.prototype, "disabled", void 0);
__decorate([
  n$1({ type: Boolean, reflect: true })
], VscodeTextarea.prototype, "invalid", void 0);
__decorate([
  n$1({ attribute: false })
], VscodeTextarea.prototype, "label", void 0);
__decorate([
  n$1({ type: Number })
], VscodeTextarea.prototype, "maxLength", void 0);
__decorate([
  n$1({ type: Number })
], VscodeTextarea.prototype, "minLength", void 0);
__decorate([
  n$1({ type: Number })
], VscodeTextarea.prototype, "rows", void 0);
__decorate([
  n$1({ type: Number })
], VscodeTextarea.prototype, "cols", void 0);
__decorate([
  n$1()
], VscodeTextarea.prototype, "name", void 0);
__decorate([
  n$1()
], VscodeTextarea.prototype, "placeholder", void 0);
__decorate([
  n$1({ type: Boolean, reflect: true })
], VscodeTextarea.prototype, "readonly", void 0);
__decorate([
  n$1()
], VscodeTextarea.prototype, "resize", void 0);
__decorate([
  n$1({ type: Boolean, reflect: true })
], VscodeTextarea.prototype, "required", void 0);
__decorate([
  n$1({ type: Boolean })
], VscodeTextarea.prototype, "spellcheck", void 0);
__decorate([
  n$1({ type: Boolean, reflect: true })
], VscodeTextarea.prototype, "monospace", void 0);
__decorate([
  n$1()
], VscodeTextarea.prototype, "value", null);
__decorate([
  e$2("#textarea")
], VscodeTextarea.prototype, "_textareaEl", void 0);
__decorate([
  r$1()
], VscodeTextarea.prototype, "_value", void 0);
__decorate([
  r$1()
], VscodeTextarea.prototype, "_textareaPointerCursor", void 0);
__decorate([
  r$1()
], VscodeTextarea.prototype, "_shadow", void 0);
VscodeTextarea = __decorate([
  customElement("vscode-textarea")
], VscodeTextarea);
function useCommonWebviewState() {
  return {
    homeDir: ref(""),
    logs: ref(""),
    logFileUrl: ref(""),
    logFilePath: ref(""),
    defaultLogFilePath: ref(""),
    isCreating: ref(false),
    openLogFileButtonDisabled: ref(true),
    createButtonDisabled: ref(false)
  };
}
class MessageRouter {
  constructor(config, commonState) {
    this.config = config;
    this.commonState = commonState;
    this.typeHandlers = {
      homeDirectory: (message) => this.onHomeDirectory(message.data),
      folderSelected: (message) => this.onFolderSelected(message.data),
      fileSelected: (message) => this.onFileSelected(message.data),
      logs: (message) => this.onLogs(message.data)
    };
    this.commandHandlers = {
      homedirAndTempdir: (message) => {
        if (message.homedir && message.tempdir) {
          this.onHomedirAndTempdir(message.homedir, message.tempdir);
        }
      },
      "execution-log": (message) => this.onExecutionLog(message.arguments),
      ADEPresence: (message) => this.onADEPresence(message.arguments)
    };
  }
  typeHandlers;
  commandHandlers;
  handle(message) {
    if (message.type && this.typeHandlers[message.type]) {
      this.typeHandlers[message.type](message);
    }
    if (message.command && this.commandHandlers[message.command]) {
      this.commandHandlers[message.command](message);
    }
  }
  onHomeDirectory(data) {
    this.config?.onHomeDirectory?.(data);
    if (this.commonState?.homeDir) {
      this.commonState.homeDir.value = data;
    }
  }
  onFolderSelected(data) {
    this.config?.onFolderSelected?.(data);
  }
  onFileSelected(data) {
    this.config?.onFileSelected?.(data);
    if (this.commonState?.logFilePath) {
      this.commonState.logFilePath.value = data;
    }
  }
  onLogs(data) {
    this.config?.onLogs?.(data);
    if (this.commonState?.logs) {
      this.commonState.logs.value += data + "\n";
    }
  }
  onHomedirAndTempdir(homedir, tempdir) {
    this.config?.onHomedirAndTempdir?.(homedir, tempdir);
    if (this.commonState?.homeDir && this.commonState?.defaultLogFilePath) {
      this.commonState.homeDir.value = homedir;
      this.commonState.defaultLogFilePath.value = `${tempdir}/ansible-creator.log`;
    }
  }
  onExecutionLog(args) {
    this.config?.onExecutionLog?.(args);
    if (this.commonState?.logs && this.commonState?.logFileUrl && this.commonState?.openLogFileButtonDisabled && this.commonState?.createButtonDisabled && this.commonState?.isCreating) {
      this.commonState.logs.value = args.commandOutput;
      this.commonState.logFileUrl.value = args.logFileUrl;
      this.commonState.openLogFileButtonDisabled.value = !args.logFileUrl;
      this.commonState.createButtonDisabled.value = false;
      if (args.status === "passed" || args.status === "failed") {
        this.commonState.isCreating.value = false;
      }
    }
  }
  onADEPresence(present) {
    this.config?.onADEPresence?.(present);
  }
}
function setupMessageHandler(config, commonState) {
  const router = new MessageRouter(config, commonState);
  const messageHandler = (event) => {
    router.handle(event.data);
  };
  window.addEventListener("message", messageHandler);
  return messageHandler;
}
function openFolderExplorer(defaultPath, homeDir, options) {
  const actualDefaultPath = defaultPath || homeDir || "";
  vscodeApi.postMessage({
    type: "openFolderExplorer",
    payload: {
      defaultPath: actualDefaultPath,
      ...options?.selectOption && { selectOption: options.selectOption }
    }
  });
}
function openFileExplorer(logFilePath, defaultLogFilePath, homeDir) {
  const getDirectoryPath = (fullPath) => {
    if (!fullPath) return "";
    const lastSlashIndex = fullPath.lastIndexOf("/");
    return lastSlashIndex !== -1 ? fullPath.substring(0, lastSlashIndex) : fullPath;
  };
  const defaultPath = logFilePath || defaultLogFilePath || homeDir;
  const directoryPath = getDirectoryPath(defaultPath);
  vscodeApi.postMessage({
    type: "openFileExplorer",
    payload: {
      defaultPath: directoryPath || homeDir
    }
  });
}
function checkADEPresence() {
  vscodeApi.postMessage({
    type: "check-ade-presence"
  });
}
function clearLogs(logsRef) {
  logsRef.value = "";
}
function copyLogs(logs) {
  vscodeApi.postMessage({
    type: "init-copy-logs",
    payload: {
      initExecutionLogs: logs
    }
  });
}
function openLogFile(logFileUrl) {
  vscodeApi.postMessage({
    type: "init-open-log-file",
    payload: {
      logFileUrl
    }
  });
}
function openScaffoldedFolder(url, type = "collection") {
  const payload = type === "collection" ? { collectionUrl: url } : { projectUrl: url };
  vscodeApi.postMessage({
    type: "init-open-scaffolded-folder",
    payload
  });
}
function initializeUI() {
  vscodeApi.postMessage({ type: "ui-mounted" });
}
function clearAllFields(fields, defaults = {}) {
  Object.keys(fields).forEach((key) => {
    if (defaults[key] !== void 0) {
      fields[key].value = defaults[key];
    } else {
      const currentValue = fields[key].value;
      if (typeof currentValue === "string") {
        fields[key].value = "";
      } else if (typeof currentValue === "boolean") {
        fields[key].value = false;
      } else if (typeof currentValue === "number") {
        fields[key].value = 0;
      }
    }
  });
  initializeUI();
}
function createFormValidator(validators) {
  return () => {
    return Object.values(validators).every((validator) => validator());
  };
}
function createActionWrapper(isCreating, logs, createButtonDisabled, action) {
  return () => {
    isCreating.value = true;
    logs.value = "";
    createButtonDisabled.value = true;
    action();
  };
}
export {
  FormButtonWidgetBase as F,
  LabelledCheckboxOrRadioMixin as L,
  VscodeSelectBase as V,
  openFileExplorer as a,
  createActionWrapper as b,
  checkADEPresence as c,
  clearLogs as d,
  copyLogs as e,
  openLogFile as f,
  openScaffoldedFolder as g,
  clearAllFields as h,
  initializeUI as i,
  createFormValidator as j,
  o as k,
  styles$1 as l,
  chevronDownIcon as m,
  baseStyles as n,
  openFolderExplorer as o,
  uniqueId as p,
  setupMessageHandler as s,
  useCommonWebviewState as u
};
