import { d as defineComponent, f as ref, v as vscodeApi, j as watch, n as resolveComponent, c as createElementBlock, o as openBlock, a as createBaseVNode, i as createVNode, b as createBlock, g as createCommentVNode, t as toDisplayString, u as unref, F as Fragment, p as createApp } from "./vscode.js";
import "./vscode-button.js";
import "./vscode-textfield.js";
import { W as WizardGenerationActionType, P as PromptField, b as PromptExampleBox, _ as _sfc_main$1, a as _sfc_main$2, c as _sfc_main$3, d as script } from "./index.js";
import { E as ErrorBox, H as HighlightJS, y as yaml, o, t, Q as Qr, P as PrimeVue } from "./index2.js";
import { p as provideVSCodeDesignSystem, a as allComponents } from "./custom-elements.js";
import "./_plugin-vue_export-helper.js";
var RoleFileType = /* @__PURE__ */ ((RoleFileType2) => {
  RoleFileType2["Default"] = "default";
  RoleFileType2["Task"] = "task";
  RoleFileType2["Playbook"] = "playbook";
  return RoleFileType2;
})(RoleFileType || {});
const _hoisted_1 = {
  class: "pageNumber",
  id: "page-number"
};
const _hoisted_2 = { key: 1 };
const _hoisted_3 = ["disabled"];
const _hoisted_4 = { key: 2 };
const _hoisted_5 = { key: 3 };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "PlaybookGenApp",
  setup(__props) {
    provideVSCodeDesignSystem().register(allComponents);
    const page = ref(1);
    const prompt = ref("");
    const response = ref();
    const outline = ref("");
    const errorMessages = ref([]);
    const loadingNewResponse = ref(false);
    const filesWereSaved = ref(false);
    let wizardId = crypto.randomUUID();
    async function sendActionEvent(action, fromPage = void 0, toPage = void 0) {
      const request = {
        playbookGenerationAction: {
          wizardId,
          action,
          fromPage,
          toPage
        }
      };
      vscodeApi.post("feedback", { request });
    }
    async function nextPage() {
      if (response.value !== void 0) {
        page.value++;
        return;
      }
      loadingNewResponse.value = true;
      await vscodeApi.post("generatePlaybook", { text: prompt.value, outline: outline.value });
    }
    async function openEditor() {
      if (response && response.value && response.value.playbook) {
        await vscodeApi.post("openEditor", { content: response.value.playbook });
        sendActionEvent(WizardGenerationActionType.CLOSE_ACCEPT, page.value, void 0);
      }
    }
    vscodeApi.on("generatePlaybook", (data) => {
      response.value = void 0;
      outline.value = data["outline"] || outline.value;
      if (Array.isArray(data["warnings"])) {
        errorMessages.value.push(...data["warnings"]);
      }
      response.value = data;
      loadingNewResponse.value = false;
      page.value++;
    });
    watch(page, (toPage, fromPage) => {
      errorMessages.value = [];
      filesWereSaved.value = false;
      sendActionEvent(WizardGenerationActionType.TRANSITION, fromPage, toPage);
    });
    watch(prompt, (newPrompt) => {
      if (response.value !== void 0) {
        response.value = void 0;
        outline.value = "";
      }
      wizardId = crypto.randomUUID();
    });
    watch(outline, (newOutline) => {
      if (response.value !== void 0 && response.value["outline"] !== newOutline) {
        response.value = void 0;
      }
    });
    sendActionEvent(WizardGenerationActionType.OPEN, void 0, 1);
    return (_ctx, _cache) => {
      const _component_ProgressSpinner = resolveComponent("ProgressSpinner");
      return openBlock(), createElementBlock(Fragment, null, [
        _cache[6] || (_cache[6] = createBaseVNode("h2", { id: "main-header" }, "Create a playbook with Ansible Lightspeed", -1)),
        createBaseVNode("div", _hoisted_1, toDisplayString(page.value) + " of 3", 1),
        createVNode(ErrorBox, {
          "error-messages": errorMessages.value,
          "onUpdate:errorMessages": _cache[0] || (_cache[0] = ($event) => errorMessages.value = $event)
        }, null, 8, ["error-messages"]),
        loadingNewResponse.value ? (openBlock(), createBlock(_component_ProgressSpinner, { key: 0 })) : page.value === 1 ? (openBlock(), createElementBlock("div", _hoisted_2, [
          createVNode(PromptField, {
            prompt: prompt.value,
            "onUpdate:prompt": _cache[1] || (_cache[1] = ($event) => prompt.value = $event),
            placeholder: "I want to write a playbook that will..."
          }, null, 8, ["prompt"]),
          createBaseVNode("div", null, [
            createBaseVNode("vscode-button", {
              onClickOnce: nextPage,
              disabled: prompt.value === ""
            }, " Analyze ", 40, _hoisted_3)
          ]),
          createVNode(PromptExampleBox)
        ])) : page.value === 2 ? (openBlock(), createElementBlock("div", _hoisted_4, [
          createVNode(_sfc_main$1, {
            prompt: prompt.value,
            onRestartWizard: _cache[2] || (_cache[2] = ($event) => page.value = 1)
          }, null, 8, ["prompt"]),
          createVNode(_sfc_main$2, {
            outline: outline.value,
            type: "playbook",
            onOutlineUpdate: _cache[3] || (_cache[3] = (newOutline) => {
              console.log(`new outline: ${newOutline}`);
              outline.value = newOutline;
            })
          }, null, 8, ["outline"]),
          createBaseVNode("div", null, [
            createBaseVNode("vscode-button", { onClickOnce: nextPage }, " Continue ", 32),
            createBaseVNode("vscode-button", {
              secondary: "",
              onClick: _cache[4] || (_cache[4] = ($event) => page.value--)
            }, " Back ")
          ])
        ])) : page.value === 3 ? (openBlock(), createElementBlock("div", _hoisted_5, [
          createVNode(_sfc_main$3, {
            file: { "content": response.value ? response.value.playbook : "", "path": "new_playbook.yaml", "file_type": unref(RoleFileType).Playbook }
          }, null, 8, ["file"]),
          createBaseVNode("div", null, [
            createBaseVNode("vscode-button", { onClick: openEditor }, " Open editor "),
            createBaseVNode("vscode-button", {
              secondary: "",
              onClick: _cache[5] || (_cache[5] = ($event) => page.value--)
            }, " Back ")
          ])
        ])) : createCommentVNode("", true)
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
app.component("ProgressSpinner", script);
app.mount("#app");
