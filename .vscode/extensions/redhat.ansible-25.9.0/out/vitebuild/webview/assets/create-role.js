import { d as defineComponent, f as ref, L as computed, j as watch, J as onMounted, v as vscodeApi, c as createElementBlock, o as openBlock, b as createBlock, g as createCommentVNode, a as createBaseVNode, k as withDirectives, l as vModelText, t as toDisplayString, h as createTextVNode, P as withModifiers, u as unref, N as isRef, B as normalizeClass, p as createApp } from "./vscode.js";
import "./vscode-button.js";
import { u as useCommonWebviewState, s as setupMessageHandler, j as createFormValidator, i as initializeUI, b as createActionWrapper, d as clearLogs, o as openFolderExplorer, h as clearAllFields } from "./webviewUtils.js";
import "./vscode-textfield.js";
import { R as RequirementsBanner } from "./RequirementsBanner.js";
import "./_plugin-vue_export-helper.js";
const _hoisted_1 = { id: "role-form" };
const _hoisted_2 = { class: "component-container" };
const _hoisted_3 = { variant: "vertical" };
const _hoisted_4 = ["placeholder"];
const _hoisted_5 = { class: "role-name-div" };
const _hoisted_6 = { variant: "vertical" };
const _hoisted_7 = {
  id: "full-collection-path",
  class: "full-collection-path"
};
const _hoisted_8 = { class: "verbose-div" };
const _hoisted_9 = { class: "dropdown-container" };
const _hoisted_10 = ["value"];
const _hoisted_11 = { class: "checkbox-div" };
const _hoisted_12 = ["checked"];
const _hoisted_13 = { class: "group-buttons" };
const _hoisted_14 = ["disabled"];
const _hoisted_15 = { variant: "vertical" };
const _hoisted_16 = { class: "group-buttons" };
const _hoisted_17 = ["disabled"];
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "CreateRoleApp",
  setup(__props) {
    const commonState = useCommonWebviewState();
    const logs = commonState.logs;
    const isCreating = commonState.isCreating;
    const homeDir = ref("");
    const roleName = ref("");
    const collectionPath = ref("");
    const verbosity = ref("Off");
    const isOverwritten = ref(false);
    const projectUrl = ref("");
    const openRoleButtonDisabled = ref(true);
    const createButtonDisabled = ref(true);
    const defaultCollectionPath = ref("");
    const requirementsMet = ref(true);
    const requirementFailures = ref([]);
    const isFormValid = createFormValidator({
      roleName: () => roleName.value.trim() !== ""
    });
    const displayPath = computed(() => {
      return collectionPath.value.trim() || defaultCollectionPath.value || homeDir.value;
    });
    const handleOpenFolderExplorer = () => {
      openFolderExplorer(
        collectionPath.value || defaultCollectionPath.value || homeDir.value,
        homeDir.value,
        { selectOption: "folder" }
      );
    };
    const handleOpenRole = () => {
      if (!projectUrl.value || !roleName.value.trim()) return;
      vscodeApi.postMessage({
        type: "init-open-role-folder",
        payload: {
          projectUrl: projectUrl.value,
          roleName: roleName.value.trim()
        }
      });
    };
    const handleCreate = createActionWrapper(
      isCreating,
      logs,
      createButtonDisabled,
      () => {
        openRoleButtonDisabled.value = true;
        const actualCollectionPath = collectionPath.value.trim() || defaultCollectionPath.value || homeDir.value;
        const payload = {
          roleName: roleName.value.trim(),
          collectionPath: actualCollectionPath,
          verbosity: verbosity.value.trim(),
          isOverwritten: isOverwritten.value
        };
        vscodeApi.postMessage({
          type: "init-create-role",
          payload
        });
      }
    );
    const onClear = () => {
      const componentFields = {
        roleName,
        collectionPath,
        verbosity,
        isOverwritten,
        logs,
        projectUrl
      };
      const defaults = {
        verbosity: "Off",
        isOverwritten: false
      };
      clearAllFields(componentFields, defaults);
      openRoleButtonDisabled.value = true;
      createButtonDisabled.value = true;
      isCreating.value = false;
    };
    watch([roleName, isCreating], () => {
      createButtonDisabled.value = !isFormValid() || isCreating.value;
    });
    onMounted(() => {
      vscodeApi.postMessage({ type: "request-requirements-status" });
      window.addEventListener("message", (event) => {
        if (event.data && event.data.type === "requirements-status") {
          requirementsMet.value = event.data.met;
          requirementFailures.value = event.data.failures || [];
        }
      });
      setupMessageHandler({
        onHomeDirectory: (data) => {
          homeDir.value = data;
        },
        onHomedirAndTempdir: (homedir) => {
          if (homedir && !defaultCollectionPath.value) {
            defaultCollectionPath.value = homedir;
          }
        },
        onFolderSelected: (data) => {
          collectionPath.value = data;
        },
        onExecutionLog: (args) => {
          logs.value = args.commandOutput || "";
          projectUrl.value = args.projectUrl || "";
          if (args.status === "passed") {
            openRoleButtonDisabled.value = false;
          } else {
            openRoleButtonDisabled.value = true;
          }
          isCreating.value = false;
          createButtonDisabled.value = !isFormValid() || isCreating.value;
        }
      });
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
          _cache[19] || (_cache[19] = createBaseVNode("div", { class: "title-description-div" }, [
            createBaseVNode("h1", null, "Add a role to an existing collection"),
            createBaseVNode("p", { class: "subtitle" }, "Extending automation with Ansible roles")
          ], -1)),
          _cache[20] || (_cache[20] = createBaseVNode("div", { class: "description-div" }, [
            createBaseVNode("h3", null, "Ansible roles are modular units that group related tasks and files to promote reusability and organized automation.")
          ], -1)),
          createBaseVNode("form", _hoisted_1, [
            createBaseVNode("section", _hoisted_2, [
              createBaseVNode("vscode-form-group", _hoisted_3, [
                _cache[7] || (_cache[7] = createBaseVNode("vscode-label", { for: "path-url" }, [
                  createBaseVNode("span", { class: "normal" }, "Collection root directory"),
                  createBaseVNode("sup", null, "*")
                ], -1)),
                withDirectives(createBaseVNode("vscode-textfield", {
                  id: "path-url",
                  "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => collectionPath.value = $event),
                  class: "required",
                  form: "role-form",
                  placeholder: defaultCollectionPath.value || homeDir.value,
                  size: "512"
                }, [
                  createBaseVNode("vscode-icon", {
                    slot: "content-after",
                    id: "folder-explorer",
                    name: "folder-opened",
                    "action-icon": "",
                    onClick: handleOpenFolderExplorer
                  })
                ], 8, _hoisted_4), [
                  [vModelText, collectionPath.value]
                ])
              ]),
              createBaseVNode("div", _hoisted_5, [
                createBaseVNode("vscode-form-group", _hoisted_6, [
                  _cache[8] || (_cache[8] = createBaseVNode("vscode-label", { for: "role-name" }, [
                    createBaseVNode("span", { class: "normal" }, "Role name"),
                    createBaseVNode("sup", null, "*")
                  ], -1)),
                  withDirectives(createBaseVNode("vscode-textfield", {
                    id: "role-name",
                    "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => roleName.value = $event),
                    form: "role-form",
                    placeholder: "Enter role name",
                    size: "512"
                  }, null, 512), [
                    [vModelText, roleName.value]
                  ])
                ])
              ]),
              createBaseVNode("div", _hoisted_7, [
                createBaseVNode("p", null, " Project path: " + toDisplayString(displayPath.value), 1)
              ]),
              createBaseVNode("div", _hoisted_8, [
                createBaseVNode("div", _hoisted_9, [
                  _cache[10] || (_cache[10] = createBaseVNode("vscode-label", { for: "verbosity-dropdown" }, [
                    createBaseVNode("span", { class: "normal" }, "Output Verbosity")
                  ], -1)),
                  createBaseVNode("vscode-single-select", {
                    id: "verbosity-dropdown",
                    value: verbosity.value,
                    onChange: _cache[2] || (_cache[2] = ($event) => verbosity.value = $event.target.value),
                    position: "below"
                  }, _cache[9] || (_cache[9] = [
                    createBaseVNode("vscode-option", { value: "Off" }, "Off", -1),
                    createBaseVNode("vscode-option", { value: "Low" }, "Low", -1),
                    createBaseVNode("vscode-option", { value: "Medium" }, "Medium", -1),
                    createBaseVNode("vscode-option", { value: "High" }, "High", -1)
                  ]), 40, _hoisted_10)
                ])
              ]),
              createBaseVNode("div", _hoisted_11, [
                createBaseVNode("vscode-checkbox", {
                  id: "overwrite-checkbox",
                  checked: isOverwritten.value,
                  onChange: _cache[3] || (_cache[3] = ($event) => isOverwritten.value = $event.target.checked),
                  form: "role-form"
                }, _cache[11] || (_cache[11] = [
                  createTextVNode(" Overwrite "),
                  createBaseVNode("br", null, null, -1),
                  createBaseVNode("i", null, "Overwriting will replace an existing role with the same name if present in the collection.", -1)
                ]), 40, _hoisted_12)
              ]),
              createBaseVNode("div", _hoisted_13, [
                createBaseVNode("vscode-button", {
                  id: "clear-button",
                  onClick: withModifiers(onClear, ["prevent"]),
                  form: "role-form",
                  appearance: "secondary"
                }, _cache[12] || (_cache[12] = [
                  createBaseVNode("span", { class: "codicon codicon-clear-all" }, null, -1),
                  createTextVNode("   Clear All ")
                ])),
                createBaseVNode("vscode-button", {
                  id: "create-button",
                  onClick: _cache[4] || (_cache[4] = withModifiers(
                    //@ts-ignore
                    (...args) => unref(handleCreate) && unref(handleCreate)(...args),
                    ["prevent"]
                  )),
                  disabled: !unref(isFormValid) || unref(isCreating),
                  form: "role-form"
                }, [
                  _cache[13] || (_cache[13] = createBaseVNode("span", { class: "codicon codicon-run-all" }, null, -1)),
                  createTextVNode("   " + toDisplayString(unref(isCreating) ? "Creating..." : "Create"), 1)
                ], 8, _hoisted_14)
              ]),
              _cache[17] || (_cache[17] = createBaseVNode("vscode-divider", null, null, -1)),
              createBaseVNode("vscode-form-group", _hoisted_15, [
                _cache[14] || (_cache[14] = createBaseVNode("vscode-label", {
                  id: "vscode-logs-label",
                  for: "log-text-area"
                }, [
                  createBaseVNode("span", { class: "normal" }, "Logs")
                ], -1)),
                withDirectives(createBaseVNode("vscode-textarea", {
                  id: "log-text-area",
                  "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => isRef(logs) ? logs.value = $event : null),
                  cols: "90",
                  rows: "10",
                  placeholder: "Output of the command execution",
                  resize: "vertical",
                  readonly: ""
                }, null, 512), [
                  [vModelText, unref(logs)]
                ])
              ]),
              createBaseVNode("div", _hoisted_16, [
                createBaseVNode("vscode-button", {
                  id: "clear-logs-button",
                  onClick: _cache[6] || (_cache[6] = withModifiers(($event) => unref(clearLogs)(unref(commonState).logs), ["prevent"])),
                  form: "role-form",
                  appearance: "secondary"
                }, _cache[15] || (_cache[15] = [
                  createBaseVNode("span", { class: "codicon codicon-clear-all" }, null, -1),
                  createTextVNode("   Clear Logs ")
                ])),
                createBaseVNode("vscode-button", {
                  id: "open-folder-button",
                  onClick: withModifiers(handleOpenRole, ["prevent"]),
                  disabled: openRoleButtonDisabled.value,
                  form: "role-form",
                  appearance: "secondary"
                }, _cache[16] || (_cache[16] = [
                  createBaseVNode("span", { class: "codicon codicon-go-to-file" }, null, -1),
                  createTextVNode("   Open Role ")
                ]), 8, _hoisted_17)
              ]),
              _cache[18] || (_cache[18] = createBaseVNode("div", {
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
