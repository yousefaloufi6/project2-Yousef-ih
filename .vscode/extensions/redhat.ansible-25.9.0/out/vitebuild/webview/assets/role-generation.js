import { d as defineComponent, c as createElementBlock, o as openBlock, a as createBaseVNode, t as toDisplayString, w as withAsyncContext, F as Fragment, r as renderList, b as createBlock, u as unref, v as vscodeApi, e as useModel, f as ref, g as createCommentVNode, h as createTextVNode, i as createVNode, j as watch, k as withDirectives, l as vModelText, m as withCtx, S as Suspense, n as resolveComponent, p as createApp } from "./vscode.js";
import "./vscode-button.js";
import "./vscode-textfield.js";
import { s as script, W as WizardGenerationActionType, P as PromptField, _ as _sfc_main$4, a as _sfc_main$5, b as PromptExampleBox, c as _sfc_main$6, d as script$1 } from "./index.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.js";
import { E as ErrorBox, H as HighlightJS, y as yaml, o, t, P as PrimeVue, Q as Qr } from "./index2.js";
import { p as provideVSCodeDesignSystem, a as allComponents } from "./custom-elements.js";
const _hoisted_1$2 = ["href"];
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "SavedFilesEntry",
  props: {
    longPath: {},
    command: {}
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("li", null, [
        createBaseVNode("a", { href: _ctx.command }, toDisplayString(_ctx.longPath), 9, _hoisted_1$2)
      ]);
    };
  }
});
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "SavedFiles",
  props: {
    files: {},
    roleName: {},
    collectionName: {}
  },
  async setup(__props) {
    let __temp, __restore;
    const props = __props;
    async function writeRoleInWorkspace() {
      return vscodeApi.postAndReceive("writeRoleInWorkspace", {
        files: props.files.map((i) => [i.path, i.content, i.file_type]),
        collectionName: props.collectionName,
        roleName: props.roleName
      }).then((data) => {
        return data;
      });
    }
    const savedFiles = ([__temp, __restore] = withAsyncContext(() => writeRoleInWorkspace()), __temp = await __temp, __restore(), __temp);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        _cache[0] || (_cache[0] = createBaseVNode("strong", null, "Saved files:", -1)),
        _cache[1] || (_cache[1] = createBaseVNode("ul", { id: "roleFileResultFileList" }, null, -1)),
        createBaseVNode("ul", null, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(unref(savedFiles), (file) => {
            return openBlock(), createBlock(_sfc_main$3, {
              longPath: file.longPath,
              command: file.command
            }, null, 8, ["longPath", "command"]);
          }), 256))
        ])
      ], 64);
    };
  }
});
const _hoisted_1$1 = { key: 0 };
const _hoisted_2$1 = {
  key: 1,
  class: "dropdown-container",
  id: "collectionSelectorContainer"
};
const _hoisted_3$1 = { id: "fieldBox" };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "CollectionSelector",
  props: {
    "collectionName": { type: String },
    "collectionNameModifiers": {}
  },
  emits: ["update:collectionName"],
  setup(__props) {
    const collectionName = useModel(__props, "collectionName");
    const collectionListCache = ref([]);
    const collectionListFiltered = ref([]);
    function search(event) {
      if (!event.query.trim().length) {
        collectionListFiltered.value = [...collectionListCache.value].map((c) => c.fqcn);
      } else {
        collectionListFiltered.value = collectionListCache.value.filter((collection) => {
          return collection.fqcn.toLowerCase().startsWith(event.query.toLowerCase());
        }).map((c) => c.fqcn);
      }
    }
    vscodeApi.on("getCollectionList", (collectionList) => {
      collectionListCache.value = collectionList;
    });
    vscodeApi.post("getCollectionList", {});
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        collectionListCache.value.length == 0 ? (openBlock(), createElementBlock("div", _hoisted_1$1, _cache[1] || (_cache[1] = [
          createBaseVNode("strong", null, [
            createTextVNode("We need a collection to store your new role, however none were found in your Workspace. You can create a one with the "),
            createBaseVNode("a", {
              href: "command:ansible.content-creator.create-ansible-collection",
              title: "Create a collection project"
            }, [
              createBaseVNode("span", { class: "codicon codicon-new-file" }),
              createTextVNode(" Create new Ansible collection ")
            ]),
            createTextVNode(" action. ")
          ], -1)
        ]))) : createCommentVNode("", true),
        collectionListCache.value.length > 0 ? (openBlock(), createElementBlock("div", _hoisted_2$1, [
          _cache[2] || (_cache[2] = createBaseVNode("label", { for: "selectedCollectionName" }, [
            createBaseVNode("strong", null, "Select the collection to create role in:")
          ], -1)),
          _cache[3] || (_cache[3] = createBaseVNode("br", null, null, -1)),
          createBaseVNode("div", _hoisted_3$1, [
            createVNode(unref(script), {
              id: "collectionNameTextField",
              modelValue: collectionName.value,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => collectionName.value = $event),
              dropdown: "",
              size: "small",
              name: "selectedCollectionName",
              suggestions: collectionListFiltered.value,
              onComplete: search,
              emptySearchMessage: "No collection found in the Workspace"
            }, null, 8, ["modelValue", "suggestions"])
          ]),
          _cache[4] || (_cache[4] = createBaseVNode("p", null, " A collection can contain one or more roles in the roles/ directory and these are almost identical to standalone roles, except you need to move plugins out of the individual roles, and use the FQCN in some places, as detailed in the next section. ", -1))
        ])) : createCommentVNode("", true)
      ], 64);
    };
  }
});
const CollectionSelector = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-38f3e916"]]);
const _hoisted_1 = {
  class: "pageNumber",
  id: "page-number"
};
const _hoisted_2 = { key: 1 };
const _hoisted_3 = ["disabled"];
const _hoisted_4 = { key: 2 };
const _hoisted_5 = { key: 3 };
const _hoisted_6 = ["disabled"];
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "RoleGenApp",
  setup(__props) {
    provideVSCodeDesignSystem().register(allComponents);
    const page = ref(1);
    const prompt = ref("");
    const collectionName = ref("");
    const roleName = ref("");
    const response = ref();
    const outline = ref("");
    const errorMessages = ref([]);
    const loadingNewResponse = ref(false);
    const filesWereSaved = ref(false);
    let wizardId = crypto.randomUUID();
    async function sendActionEvent(action, fromPage = void 0, toPage = void 0) {
      const request = {
        roleGenerationAction: {
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
      await vscodeApi.post("generateRole", { name: roleName.value, text: prompt.value, outline: outline.value });
    }
    vscodeApi.on("generateRole", (data) => {
      response.value = void 0;
      outline.value = data["outline"] || outline.value;
      if (Array.isArray(data["warnings"])) {
        errorMessages.value.push(...data["warnings"]);
      }
      response.value = data;
      roleName.value = data["name"];
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
        roleName.value = "";
      }
    });
    watch(roleName, (newRoleName) => {
      if (response.value !== void 0 && response.value["name"] !== newRoleName) {
        response.value = void 0;
      }
    });
    watch(outline, (newOutline) => {
      if (response.value !== void 0 && response.value["outline"] !== newOutline) {
        response.value = void 0;
      }
    });
    watch(filesWereSaved, () => {
      sendActionEvent(WizardGenerationActionType.CLOSE_ACCEPT, page.value, void 0);
    });
    sendActionEvent(WizardGenerationActionType.OPEN, void 0, 1);
    return (_ctx, _cache) => {
      const _component_ProgressSpinner = resolveComponent("ProgressSpinner");
      return openBlock(), createElementBlock(Fragment, null, [
        _cache[11] || (_cache[11] = createBaseVNode("h2", { id: "main-header" }, "Create a role with Ansible Lightspeed", -1)),
        createBaseVNode("div", _hoisted_1, toDisplayString(page.value) + " of 3", 1),
        createVNode(ErrorBox, {
          "error-messages": errorMessages.value,
          "onUpdate:errorMessages": _cache[0] || (_cache[0] = ($event) => errorMessages.value = $event)
        }, null, 8, ["error-messages"]),
        _cache[12] || (_cache[12] = createBaseVNode("div", null, [
          createBaseVNode("a", { href: "https://docs.ansible.com/ansible/latest/playbook_guide/playbooks_reuse_roles.html" }, "Learn more about roles🔗")
        ], -1)),
        loadingNewResponse.value ? (openBlock(), createBlock(_component_ProgressSpinner, { key: 0 })) : page.value === 1 ? (openBlock(), createElementBlock("div", _hoisted_2, [
          createVNode(PromptField, {
            prompt: prompt.value,
            "onUpdate:prompt": _cache[1] || (_cache[1] = ($event) => prompt.value = $event),
            placeholder: "I want to write a role that will..."
          }, null, 8, ["prompt"]),
          createBaseVNode("div", null, [
            createBaseVNode("vscode-button", {
              onClickOnce: nextPage,
              disabled: prompt.value === ""
            }, " Analyze ", 40, _hoisted_3)
          ]),
          createVNode(PromptExampleBox)
        ])) : page.value === 2 ? (openBlock(), createElementBlock("div", _hoisted_4, [
          createVNode(_sfc_main$4, {
            prompt: prompt.value,
            onRestartWizard: _cache[2] || (_cache[2] = ($event) => page.value = 1)
          }, null, 8, ["prompt"]),
          createBaseVNode("div", null, [
            _cache[10] || (_cache[10] = createTextVNode(" Role name: ")),
            withDirectives(createBaseVNode("vscode-textfield", {
              "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => roleName.value = $event)
            }, null, 512), [
              [vModelText, roleName.value]
            ])
          ]),
          createVNode(_sfc_main$5, {
            outline: outline.value,
            type: "role",
            onOutlineUpdate: _cache[4] || (_cache[4] = (newOutline) => {
              console.log(`new outline: ${newOutline}`);
              outline.value = newOutline;
            })
          }, null, 8, ["outline"]),
          createBaseVNode("div", null, [
            createBaseVNode("vscode-button", { onClickOnce: nextPage }, " Continue ", 32),
            createBaseVNode("vscode-button", {
              secondary: "",
              onClick: _cache[5] || (_cache[5] = ($event) => page.value--)
            }, " Back ")
          ])
        ])) : page.value === 3 ? (openBlock(), createElementBlock("div", _hoisted_5, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(response.value?.files, (file) => {
            return openBlock(), createBlock(_sfc_main$6, { file }, null, 8, ["file"]);
          }), 256)),
          (openBlock(), createBlock(Suspense, null, {
            fallback: withCtx(() => [
              createVNode(_component_ProgressSpinner)
            ]),
            default: withCtx(() => [
              filesWereSaved.value && response.value ? (openBlock(), createBlock(_sfc_main$2, {
                key: 0,
                files: response.value.files,
                "role-name": roleName.value,
                "collection-name": collectionName.value
              }, null, 8, ["files", "role-name", "collection-name"])) : createCommentVNode("", true)
            ]),
            _: 1
          })),
          createBaseVNode("div", null, [
            !filesWereSaved.value ? (openBlock(), createBlock(CollectionSelector, {
              key: 0,
              "collection-name": collectionName.value,
              "onUpdate:collectionName": _cache[6] || (_cache[6] = ($event) => collectionName.value = $event),
              "error-messages": errorMessages.value,
              "onUpdate:errorMessages": _cache[7] || (_cache[7] = ($event) => errorMessages.value = $event)
            }, null, 8, ["collection-name", "error-messages"])) : createCommentVNode("", true),
            createBaseVNode("vscode-button", {
              onClick: _cache[8] || (_cache[8] = ($event) => filesWereSaved.value = true),
              disabled: collectionName.value === "" || filesWereSaved.value
            }, " Save files ", 8, _hoisted_6),
            createBaseVNode("vscode-button", {
              secondary: "",
              onClick: _cache[9] || (_cache[9] = ($event) => page.value--)
            }, " Back ")
          ])
        ])) : createCommentVNode("", true)
      ], 64);
    };
  }
});
const App = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-918ab71a"]]);
HighlightJS.registerLanguage("yaml", yaml);
const app = createApp(App);
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
app.component("ProgressSpinner", script$1);
app.mount("#app");
