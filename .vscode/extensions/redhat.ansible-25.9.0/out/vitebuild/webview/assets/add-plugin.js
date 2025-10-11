import { d as defineComponent, f as ref, v as vscodeApi, J as onMounted, c as createElementBlock, o as openBlock, b as createBlock, g as createCommentVNode, a as createBaseVNode, k as withDirectives, l as vModelText, u as unref, t as toDisplayString, h as createTextVNode, P as withModifiers, N as isRef, B as normalizeClass, p as createApp } from "./vscode.js";
import "./vscode-button.js";
import { u as useCommonWebviewState, b as createActionWrapper, s as setupMessageHandler, i as initializeUI, o as openFolderExplorer, j as createFormValidator, d as clearLogs, h as clearAllFields } from "./webviewUtils.js";
import "./vscode-textfield.js";
import { R as RequirementsBanner } from "./RequirementsBanner.js";
import "./_plugin-vue_export-helper.js";
const _hoisted_1 = { id: "init-form" };
const _hoisted_2 = { class: "component-container" };
const _hoisted_3 = { variant: "vertical" };
const _hoisted_4 = ["placeholder"];
const _hoisted_5 = { class: "plugin-type-div name-div" };
const _hoisted_6 = { variant: "vertical" };
const _hoisted_7 = { class: "name-div" };
const _hoisted_8 = { variant: "vertical" };
const _hoisted_9 = {
  id: "full-collection-path",
  class: "full-collection-path"
};
const _hoisted_10 = { class: "verbose-div" };
const _hoisted_11 = { class: "dropdown-container" };
const _hoisted_12 = { class: "checkbox-div" };
const _hoisted_13 = ["checked"];
const _hoisted_14 = { class: "group-buttons" };
const _hoisted_15 = ["disabled"];
const _hoisted_16 = { variant: "vertical" };
const _hoisted_17 = { class: "group-buttons" };
const _hoisted_18 = ["disabled"];
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "AddPluginPageApp",
  setup(__props) {
    const commonState = useCommonWebviewState();
    const homeDir = commonState.homeDir;
    const logs = commonState.logs;
    const initPath = ref("");
    const pluginNameTextField = ref("");
    const isOverwritten = ref(false);
    const openScaffoldedFolderButtonDisabled = ref(true);
    const projectUrl = ref("");
    const pluginTypeDropdown = ref("Action");
    const verboseDropdown = ref("Off");
    const canCreate = createFormValidator({
      pluginName: () => pluginNameTextField.value.trim() !== ""
    });
    const requirementsMet = ref(true);
    const requirementFailures = ref([]);
    const handleOpenScaffoldedFolder = () => {
      vscodeApi.postMessage({
        type: "init-open-scaffolded-folder-plugin",
        payload: {
          projectUrl: projectUrl.value,
          pluginName: pluginNameTextField.value.trim(),
          pluginType: pluginTypeDropdown.value.trim()
        }
      });
    };
    const handleCreate = createActionWrapper(
      commonState.isCreating,
      commonState.logs,
      commonState.createButtonDisabled,
      () => {
        vscodeApi.postMessage({
          type: "init-create-plugin",
          payload: {
            pluginName: pluginNameTextField.value.trim(),
            pluginType: pluginTypeDropdown.value.trim(),
            collectionPath: initPath.value.trim() || homeDir.value.trim(),
            verbosity: verboseDropdown.value.trim(),
            isOverwritten: isOverwritten.value
          }
        });
      }
    );
    const onClear = () => {
      const componentFields = {
        pluginTypeDropdown,
        pluginNameTextField,
        initPath,
        verboseDropdown,
        isOverwritten
      };
      const defaults = {
        pluginTypeDropdown: "Action",
        verboseDropdown: "Off",
        isOverwritten: false
      };
      clearAllFields(componentFields, defaults);
      clearAllFields({
        logs: commonState.logs
      });
      commonState.createButtonDisabled.value = false;
      initializeUI();
    };
    onMounted(() => {
      vscodeApi.postMessage({ type: "request-requirements-status" });
      window.addEventListener("message", (event) => {
        if (event.data && event.data.type === "requirements-status") {
          requirementsMet.value = event.data.met;
          requirementFailures.value = event.data.failures || [];
        }
      });
      setupMessageHandler({
        onFolderSelected: (data) => {
          initPath.value = data;
        },
        onExecutionLog: (args) => {
          if (commonState.isCreating.value) {
            openScaffoldedFolderButtonDisabled.value = args.status !== "passed";
            projectUrl.value = args.projectUrl || "";
          }
        }
      }, commonState);
      initializeUI();
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("body", null, [
        !requirementsMet.value ? (openBlock(), createBlock(RequirementsBanner, {
          key: 0,
          failures: requirementFailures.value
        }, null, 8, ["failures"])) : createCommentVNode("", true),
        createBaseVNode("div", {
          class: normalizeClass({ "disabled-content": !requirementsMet.value })
        }, [
          _cache[23] || (_cache[23] = createBaseVNode("div", { class: "title-div" }, [
            createBaseVNode("h1", null, "Add a plugin to an existing collection"),
            createBaseVNode("p", { class: "subtitle" }, "Simplify the deployment of automation to the Ansible Automation Platform")
          ], -1)),
          createBaseVNode("form", _hoisted_1, [
            createBaseVNode("section", _hoisted_2, [
              createBaseVNode("vscode-form-group", _hoisted_3, [
                _cache[9] || (_cache[9] = createBaseVNode("vscode-label", { for: "path-url" }, [
                  createBaseVNode("span", { class: "normal" }, "Collection root directory *")
                ], -1)),
                withDirectives(createBaseVNode("vscode-textfield", {
                  id: "path-url",
                  class: "required",
                  form: "init-form",
                  placeholder: unref(homeDir),
                  "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => initPath.value = $event),
                  size: "512"
                }, [
                  createBaseVNode("vscode-icon", {
                    slot: "content-after",
                    id: "folder-explorer",
                    name: "folder-opened",
                    onClick: _cache[0] || (_cache[0] = ($event) => unref(openFolderExplorer)(initPath.value || unref(homeDir))),
                    "action-icon": ""
                  })
                ], 8, _hoisted_4), [
                  [vModelText, initPath.value]
                ])
              ]),
              createBaseVNode("div", _hoisted_5, [
                createBaseVNode("vscode-form-group", _hoisted_6, [
                  _cache[11] || (_cache[11] = createBaseVNode("vscode-label", { for: "plugin-dropdown" }, [
                    createBaseVNode("span", { class: "normal" }, "Plugin type *")
                  ], -1)),
                  withDirectives(createBaseVNode("vscode-single-select", {
                    id: "plugin-dropdown",
                    "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => pluginTypeDropdown.value = $event)
                  }, _cache[10] || (_cache[10] = [
                    createBaseVNode("vscode-option", null, "Action", -1),
                    createBaseVNode("vscode-option", null, "Filter", -1),
                    createBaseVNode("vscode-option", null, "Lookup", -1),
                    createBaseVNode("vscode-option", null, "Module", -1),
                    createBaseVNode("vscode-option", null, "Test", -1)
                  ]), 512), [
                    [vModelText, pluginTypeDropdown.value]
                  ])
                ])
              ]),
              createBaseVNode("div", _hoisted_7, [
                createBaseVNode("vscode-form-group", _hoisted_8, [
                  _cache[12] || (_cache[12] = createBaseVNode("vscode-label", { for: "name" }, [
                    createBaseVNode("span", { class: "normal" }, "Plugin name *")
                  ], -1)),
                  withDirectives(createBaseVNode("vscode-textfield", {
                    id: "name",
                    form: "init-form",
                    placeholder: "Enter plugin name",
                    size: "512",
                    "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => pluginNameTextField.value = $event)
                  }, null, 512), [
                    [vModelText, pluginNameTextField.value]
                  ])
                ])
              ]),
              createBaseVNode("div", _hoisted_9, [
                createBaseVNode("p", null, "Project path: " + toDisplayString(initPath.value || unref(homeDir)), 1)
              ]),
              createBaseVNode("div", _hoisted_10, [
                createBaseVNode("div", _hoisted_11, [
                  _cache[14] || (_cache[14] = createBaseVNode("vscode-label", { for: "verbosity-dropdown" }, [
                    createBaseVNode("span", { class: "normal" }, "Output Verbosity")
                  ], -1)),
                  withDirectives(createBaseVNode("vscode-single-select", {
                    id: "verbosity-dropdown",
                    "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => verboseDropdown.value = $event)
                  }, _cache[13] || (_cache[13] = [
                    createBaseVNode("vscode-option", null, "Off", -1),
                    createBaseVNode("vscode-option", null, "Low", -1),
                    createBaseVNode("vscode-option", null, "Medium", -1),
                    createBaseVNode("vscode-option", null, "High", -1)
                  ]), 512), [
                    [vModelText, verboseDropdown.value]
                  ])
                ])
              ]),
              createBaseVNode("div", _hoisted_12, [
                createBaseVNode("vscode-checkbox", {
                  checked: isOverwritten.value,
                  onChange: _cache[5] || (_cache[5] = ($event) => isOverwritten.value = $event.target.checked),
                  form: "init-form",
                  id: "overwrite-checkbox"
                }, _cache[15] || (_cache[15] = [
                  createTextVNode(" Overwrite "),
                  createBaseVNode("br", null, null, -1),
                  createBaseVNode("i", null, "Overwriting will remove the existing content in the specified directory and replace it with the files from the Ansible project.", -1)
                ]), 40, _hoisted_13)
              ]),
              createBaseVNode("div", _hoisted_14, [
                createBaseVNode("vscode-button", {
                  id: "clear-button",
                  form: "init-form",
                  secondary: "",
                  onClick: withModifiers(onClear, ["prevent"])
                }, _cache[16] || (_cache[16] = [
                  createBaseVNode("span", { class: "codicon codicon-clear-all" }, null, -1),
                  createTextVNode("   Clear All ")
                ])),
                createBaseVNode("vscode-button", {
                  id: "create-button",
                  form: "init-form",
                  onClick: _cache[6] || (_cache[6] = withModifiers(
                    //@ts-ignore
                    (...args) => unref(handleCreate) && unref(handleCreate)(...args),
                    ["prevent"]
                  )),
                  disabled: !unref(canCreate)
                }, _cache[17] || (_cache[17] = [
                  createBaseVNode("span", { class: "codicon codicon-run-all" }, null, -1),
                  createTextVNode("   Create ")
                ]), 8, _hoisted_15)
              ]),
              _cache[21] || (_cache[21] = createBaseVNode("vscode-divider", null, null, -1)),
              createBaseVNode("vscode-form-group", _hoisted_16, [
                _cache[18] || (_cache[18] = createBaseVNode("vscode-label", {
                  id: "vscode-logs-label",
                  for: "log-text-area"
                }, [
                  createBaseVNode("span", { class: "normal" }, "Logs")
                ], -1)),
                withDirectives(createBaseVNode("vscode-textarea", {
                  id: "log-text-area",
                  "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => isRef(logs) ? logs.value = $event : null),
                  placeholder: "Output of the command execution",
                  resize: "vertical",
                  readonly: ""
                }, null, 512), [
                  [vModelText, unref(logs)]
                ])
              ]),
              createBaseVNode("div", _hoisted_17, [
                createBaseVNode("vscode-button", {
                  id: "clear-logs-button",
                  form: "init-form",
                  secondary: "",
                  onClick: _cache[8] || (_cache[8] = withModifiers(($event) => unref(clearLogs)(unref(commonState).logs), ["prevent"]))
                }, _cache[19] || (_cache[19] = [
                  createBaseVNode("span", { class: "codicon codicon-clear-all" }, null, -1),
                  createTextVNode("   Clear Logs ")
                ])),
                createBaseVNode("vscode-button", {
                  id: "open-folder-button",
                  form: "init-form",
                  disabled: openScaffoldedFolderButtonDisabled.value,
                  onClick: withModifiers(handleOpenScaffoldedFolder, ["prevent"])
                }, _cache[20] || (_cache[20] = [
                  createBaseVNode("span", { class: "codicon codicon-go-to-file" }, null, -1),
                  createTextVNode("   Open Plugin ")
                ]), 8, _hoisted_18)
              ]),
              _cache[22] || (_cache[22] = createBaseVNode("div", {
                id: "required-fields",
                class: "required-fields"
              }, [
                createBaseVNode("p", null, "Fields marked with an asterisk (*) are required")
              ], -1))
            ])
          ])
        ], 2)
      ]);
    };
  }
});
const app = createApp(_sfc_main);
app.mount("#app");
