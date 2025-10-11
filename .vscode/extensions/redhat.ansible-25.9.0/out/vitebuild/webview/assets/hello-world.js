import { d as defineComponent, f as ref, c as createElementBlock, o as openBlock, a as createBaseVNode, i as createVNode, F as Fragment, p as createApp } from "./vscode.js";
import "./vscode-button.js";
import "./vscode-textfield.js";
import { E as ErrorBox, H as HighlightJS, y as yaml, o, t, Q as Qr, P as PrimeVue } from "./index2.js";
import { p as provideVSCodeDesignSystem, a as allComponents } from "./custom-elements.js";
import "./_plugin-vue_export-helper.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "HelloWorld",
  setup(__props) {
    const errorMessages = ref([]);
    provideVSCodeDesignSystem().register(allComponents);
    errorMessages.value.push("An error message example to demonstrate how to use the ErrorBox component!");
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        _cache[1] || (_cache[1] = createBaseVNode("h1", { id: "main-header" }, "Hello World", -1)),
        createVNode(ErrorBox, {
          "error-messages": errorMessages.value,
          "onUpdate:errorMessages": _cache[0] || (_cache[0] = ($event) => errorMessages.value = $event)
        }, null, 8, ["error-messages"])
      ], 64);
    };
  }
});
HighlightJS.registerLanguage("yaml", yaml);
const app = createApp(_sfc_main);
app.use(o);
const MyPreset = t(Qr, {
  semantic: {
    colorScheme: {
      light: {
        primary: {
          color: "var(--vscode-focusBorder)"
        },
        highlight: {
          background: "var(--vscode-dropdown-listBackground))",
          focusBackground: "var(--vscode-inputOption-activeBackground)",
          color: "var(--vscode-dropdown-foreground)"
        },
        formField: {
          background: "var(--vscode-background)",
          borderColor: "var(--vscode-checkbox-selectBorder)",
          color: "var(--vscode-foreground)",
          focusColor: "var(--vscode-foreground)"
        }
      },
      dark: {
        primary: {
          color: "var(--vscode-focusBorder)"
        },
        highlight: {
          background: "var(--vscode-dropdown-listBackground))",
          focusBackground: "var(--vscode-inputOption-activeBackground)",
          color: "var(--vscode-dropdown-foreground)"
        },
        formField: {
          background: "var(--vscode-background)",
          borderColor: "var(--vscode-checkbox-selectBorder)",
          color: "var(--vscode-foreground)",
          focusColor: "var(--vscode-foreground)"
        }
      }
    }
  }
});
app.use(PrimeVue, {
  theme: {
    preset: MyPreset,
    options: {
      darkModeSelector: ".my-app-dark"
    }
  }
});
const mutationObserver = new MutationObserver((mutationsList, observer) => {
  const isDark = document.querySelector("body")?.getAttribute("class")?.includes("vscode-dark");
  document.documentElement.classList.toggle("my-app-dark", isDark);
});
mutationObserver.observe(document.body, { childList: false, attributes: true });
app.mount("#app");
