import { d as defineComponent, f as ref, L as computed, J as onMounted, v as vscodeApi, c as createElementBlock, o as openBlock, b as createBlock, g as createCommentVNode, a as createBaseVNode, k as withDirectives, l as vModelText, u as unref, t as toDisplayString, h as createTextVNode, N as isRef, O as createStaticVNode, P as withModifiers, B as normalizeClass, p as createApp } from "./vscode.js";
import "./vscode-button.js";
import { u as useCommonWebviewState, b as createActionWrapper, s as setupMessageHandler, i as initializeUI, d as clearLogs, e as copyLogs, f as openLogFile, o as openFolderExplorer, a as openFileExplorer, g as openScaffoldedFolder, h as clearAllFields } from "./webviewUtils.js";
import "./vscode-textfield.js";
import { R as RequirementsBanner } from "./RequirementsBanner.js";
import "./_plugin-vue_export-helper.js";
const _hoisted_1 = { id: "init-form" };
const _hoisted_2 = { class: "component-container" };
const _hoisted_3 = { variant: "vertical" };
const _hoisted_4 = ["placeholder"];
const _hoisted_5 = { class: "playbook-project-div" };
const _hoisted_6 = { variant: "vertical" };
const _hoisted_7 = { variant: "vertical" };
const _hoisted_8 = {
  id: "full-collection-path",
  class: "full-collection-path"
};
const _hoisted_9 = { class: "verbose-div" };
const _hoisted_10 = { class: "dropdown-container" };
const _hoisted_11 = { class: "checkbox-div" };
const _hoisted_12 = ["checked"];
const _hoisted_13 = {
  key: 0,
  class: "log-to-file-container"
};
const _hoisted_14 = { variant: "vertical" };
const _hoisted_15 = ["placeholder"];
const _hoisted_16 = { class: "checkbox-div" };
const _hoisted_17 = ["checked"];
const _hoisted_18 = { class: "log-level-div" };
const _hoisted_19 = { class: "dropdown-container" };
const _hoisted_20 = ["value"];
const _hoisted_21 = { class: "checkbox-div" };
const _hoisted_22 = ["checked"];
const _hoisted_23 = { class: "group-buttons" };
const _hoisted_24 = ["disabled"];
const _hoisted_25 = { variant: "vertical" };
const _hoisted_26 = { class: "group-buttons" };
const _hoisted_27 = ["disabled"];
const _hoisted_28 = ["disabled"];
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "CreateAnsibleProjectApp",
  setup(__props) {
    const commonState = useCommonWebviewState();
    const logs = commonState.logs;
    const logFileUrl = commonState.logFileUrl;
    const logFilePath = commonState.logFilePath;
    const defaultLogFilePath = commonState.defaultLogFilePath;
    const homeDir = commonState.homeDir;
    const namespace = ref("");
    const collectionName = ref("");
    const initPath = ref("");
    const verbosity = ref("off");
    const logToFile = ref(false);
    const logFileAppend = ref(false);
    const isOverwritten = ref(false);
    const isEditableModeInstall = ref(false);
    const logLevel = ref("debug");
    const collectionUrl = ref("");
    const fullCollectionName = ref("");
    const openScaffoldedFolderButtonDisabled = ref(true);
    const projectUrl = ref("");
    const canCreate = computed(() => {
      return namespace.value.trim() !== "" && collectionName.value.trim() !== "";
    });
    const handleOpenFolderExplorer = () => {
      openFolderExplorer(initPath.value || homeDir.value);
    };
    const handleOpenFileExplorer = () => {
      openFileExplorer(
        commonState.logFilePath.value,
        commonState.defaultLogFilePath.value,
        commonState.homeDir.value
      );
    };
    const handleClearLogs = () => clearLogs(commonState.logs);
    const handleCopyLogs = () => copyLogs(commonState.logs.value);
    const handleOpenLogFile = () => openLogFile(commonState.logFileUrl.value);
    const handleOpenScaffoldedFolder = () => {
      openScaffoldedFolder(projectUrl.value, "project");
    };
    const handleCreate = createActionWrapper(
      commonState.isCreating,
      commonState.logs,
      commonState.createButtonDisabled,
      () => {
        const payload = {
          destinationPath: initPath.value,
          namespaceName: namespace.value,
          collectionName: collectionName.value,
          verbosity: verbosity.value,
          logToFile: logToFile.value,
          logFileAppend: logFileAppend.value,
          isEditableModeInstall: isEditableModeInstall.value,
          logFilePath: commonState.logFilePath.value || commonState.defaultLogFilePath.value,
          logLevel: logLevel.value,
          isOverwritten: isOverwritten.value
        };
        vscodeApi.postMessage({ type: "init-create", payload });
      }
    );
    const onClear = () => {
      const componentFields = {
        namespace,
        collectionName,
        initPath,
        verbosity,
        logToFile,
        logFileAppend,
        isOverwritten,
        isEditableModeInstall,
        logLevel,
        collectionUrl,
        fullCollectionName
      };
      const defaults = {
        verbosity: "off",
        logLevel: "debug",
        logToFile: false,
        logFileAppend: false,
        isOverwritten: false,
        isEditableModeInstall: false
      };
      clearAllFields(componentFields, defaults);
      clearAllFields({
        logs: commonState.logs,
        logFileUrl: commonState.logFileUrl,
        logFilePath: commonState.logFilePath
      });
    };
    const requirementsMet = ref(true);
    const requirementFailures = ref([]);
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
          _cache[30] || (_cache[30] = createBaseVNode("div", { class: "title-div" }, [
            createBaseVNode("h1", null, "Create new Ansible playbook project"),
            createBaseVNode("p", { class: "subtitle" }, "Streamlining automation")
          ], -1)),
          createBaseVNode("form", _hoisted_1, [
            createBaseVNode("section", _hoisted_2, [
              createBaseVNode("vscode-form-group", _hoisted_3, [
                _cache[11] || (_cache[11] = createBaseVNode("vscode-label", { for: "path-url" }, [
                  createBaseVNode("span", { class: "normal" }, "Destination directory")
                ], -1)),
                withDirectives(createBaseVNode("vscode-textfield", {
                  id: "path-url",
                  class: "required",
                  form: "init-form",
                  placeholder: unref(homeDir),
                  "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => initPath.value = $event),
                  size: "512"
                }, [
                  createBaseVNode("vscode-icon", {
                    slot: "content-after",
                    id: "folder-explorer",
                    name: "folder-opened",
                    onClick: handleOpenFolderExplorer,
                    "action-icon": ""
                  })
                ], 8, _hoisted_4), [
                  [vModelText, initPath.value]
                ])
              ]),
              createBaseVNode("div", _hoisted_5, [
                createBaseVNode("vscode-form-group", _hoisted_6, [
                  _cache[12] || (_cache[12] = createBaseVNode("vscode-label", { for: "namespace-name" }, [
                    createBaseVNode("span", { class: "normal" }, "Namespace *")
                  ], -1)),
                  withDirectives(createBaseVNode("vscode-textfield", {
                    id: "namespace-name",
                    form: "init-form",
                    placeholder: "Enter namespace name",
                    size: "512",
                    "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => namespace.value = $event)
                  }, null, 512), [
                    [vModelText, namespace.value]
                  ])
                ]),
                createBaseVNode("vscode-form-group", _hoisted_7, [
                  _cache[13] || (_cache[13] = createBaseVNode("vscode-label", { for: "collection-name" }, [
                    createBaseVNode("span", { class: "normal" }, "Collection *")
                  ], -1)),
                  withDirectives(createBaseVNode("vscode-textfield", {
                    id: "collection-name",
                    form: "init-form",
                    placeholder: "Enter collection name",
                    size: "512",
                    "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => collectionName.value = $event)
                  }, null, 512), [
                    [vModelText, collectionName.value]
                  ])
                ])
              ]),
              createBaseVNode("div", _hoisted_8, [
                createBaseVNode("p", null, "Project path: " + toDisplayString(initPath.value || unref(homeDir)), 1)
              ]),
              createBaseVNode("div", _hoisted_9, [
                createBaseVNode("div", _hoisted_10, [
                  _cache[15] || (_cache[15] = createBaseVNode("vscode-label", { for: "verbosity-dropdown" }, [
                    createBaseVNode("span", { class: "normal" }, "Output Verbosity")
                  ], -1)),
                  withDirectives(createBaseVNode("vscode-single-select", {
                    id: "verbosity-dropdown",
                    position: "below",
                    "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => verbosity.value = $event)
                  }, _cache[14] || (_cache[14] = [
                    createBaseVNode("vscode-option", { value: "off" }, "Off", -1),
                    createBaseVNode("vscode-option", { value: "low" }, "Low", -1),
                    createBaseVNode("vscode-option", { value: "medium" }, "Medium", -1),
                    createBaseVNode("vscode-option", { value: "high" }, "High", -1)
                  ]), 512), [
                    [vModelText, verbosity.value]
                  ])
                ])
              ]),
              createBaseVNode("div", _hoisted_11, [
                createBaseVNode("vscode-checkbox", {
                  id: "log-to-file-checkbox",
                  checked: logToFile.value,
                  onChange: _cache[4] || (_cache[4] = ($event) => logToFile.value = $event.target.checked),
                  form: "init-form"
                }, [
                  _cache[16] || (_cache[16] = createTextVNode(" Log output to a file ")),
                  _cache[17] || (_cache[17] = createBaseVNode("br", null, null, -1)),
                  createBaseVNode("i", null, "Default path: " + toDisplayString(unref(defaultLogFilePath)), 1)
                ], 40, _hoisted_12),
                logToFile.value ? (openBlock(), createElementBlock("div", _hoisted_13, [
                  createBaseVNode("vscode-form-group", _hoisted_14, [
                    _cache[18] || (_cache[18] = createBaseVNode("vscode-label", { for: "log-file-path" }, [
                      createBaseVNode("span", { class: "normal" }, "Log file path")
                    ], -1)),
                    withDirectives(createBaseVNode("vscode-textfield", {
                      id: "log-file-path",
                      "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => isRef(logFilePath) ? logFilePath.value = $event : null),
                      placeholder: unref(defaultLogFilePath)
                    }, [
                      createBaseVNode("vscode-icon", {
                        slot: "content-after",
                        id: "file-explorer",
                        name: "file",
                        "action-icon": "",
                        onClick: handleOpenFileExplorer
                      })
                    ], 8, _hoisted_15), [
                      [vModelText, unref(logFilePath)]
                    ])
                  ]),
                  createBaseVNode("div", _hoisted_16, [
                    createBaseVNode("vscode-checkbox", {
                      checked: logFileAppend.value,
                      onChange: _cache[6] || (_cache[6] = ($event) => logFileAppend.value = $event.target.checked)
                    }, " Append ", 40, _hoisted_17)
                  ]),
                  createBaseVNode("div", _hoisted_18, [
                    createBaseVNode("div", _hoisted_19, [
                      _cache[20] || (_cache[20] = createBaseVNode("vscode-label", { for: "log-level-dropdown" }, [
                        createBaseVNode("span", { class: "normal" }, "Log level")
                      ], -1)),
                      createBaseVNode("vscode-single-select", {
                        value: logLevel.value,
                        onChange: _cache[7] || (_cache[7] = ($event) => logLevel.value = $event.target.value),
                        id: "log-level-dropdown",
                        position: "below"
                      }, _cache[19] || (_cache[19] = [
                        createStaticVNode('<vscode-option value="debug">Debug</vscode-option><vscode-option value="info">Info</vscode-option><vscode-option value="warning">Warning</vscode-option><vscode-option value="error">Error</vscode-option><vscode-option value="critical">Critical</vscode-option>', 5)
                      ]), 40, _hoisted_20)
                    ])
                  ])
                ])) : createCommentVNode("", true)
              ]),
              createBaseVNode("div", _hoisted_21, [
                createBaseVNode("vscode-checkbox", {
                  checked: isOverwritten.value,
                  onChange: _cache[8] || (_cache[8] = ($event) => isOverwritten.value = $event.target.checked),
                  form: "init-form",
                  id: "overwrite-checkbox"
                }, _cache[21] || (_cache[21] = [
                  createTextVNode(" Overwrite "),
                  createBaseVNode("br", null, null, -1),
                  createBaseVNode("i", null, "Overwriting will remove the existing content in the specified directory and replace it with the files from the Ansible project.", -1)
                ]), 40, _hoisted_22)
              ]),
              createBaseVNode("div", _hoisted_23, [
                createBaseVNode("vscode-button", {
                  id: "clear-button",
                  form: "init-form",
                  secondary: "",
                  onClick: withModifiers(onClear, ["prevent"])
                }, _cache[22] || (_cache[22] = [
                  createBaseVNode("span", { class: "codicon codicon-clear-all" }, null, -1),
                  createTextVNode("   Clear All ")
                ])),
                createBaseVNode("vscode-button", {
                  id: "create-button",
                  form: "init-form",
                  onClick: _cache[9] || (_cache[9] = withModifiers(
                    //@ts-ignore
                    (...args) => unref(handleCreate) && unref(handleCreate)(...args),
                    ["prevent"]
                  )),
                  disabled: !canCreate.value
                }, _cache[23] || (_cache[23] = [
                  createBaseVNode("span", { class: "codicon codicon-run-all" }, null, -1),
                  createTextVNode("   Create ")
                ]), 8, _hoisted_24)
              ]),
              _cache[29] || (_cache[29] = createBaseVNode("vscode-divider", null, null, -1)),
              createBaseVNode("vscode-form-group", _hoisted_25, [
                _cache[24] || (_cache[24] = createBaseVNode("vscode-label", {
                  id: "vscode-logs-label",
                  for: "log-text-area"
                }, [
                  createBaseVNode("span", { class: "normal" }, "Logs")
                ], -1)),
                withDirectives(createBaseVNode("vscode-textarea", {
                  id: "log-text-area",
                  "onUpdate:modelValue": _cache[10] || (_cache[10] = ($event) => isRef(logs) ? logs.value = $event : null),
                  placeholder: "Output of the command execution",
                  resize: "vertical",
                  readonly: ""
                }, null, 512), [
                  [vModelText, unref(logs)]
                ])
              ]),
              createBaseVNode("div", _hoisted_26, [
                createBaseVNode("vscode-button", {
                  id: "clear-logs-button",
                  form: "init-form",
                  secondary: "",
                  onClick: withModifiers(handleClearLogs, ["prevent"])
                }, _cache[25] || (_cache[25] = [
                  createBaseVNode("span", { class: "codicon codicon-clear-all" }, null, -1),
                  createTextVNode("   Clear Logs ")
                ])),
                createBaseVNode("vscode-button", {
                  id: "copy-logs-button",
                  form: "init-form",
                  secondary: "",
                  onClick: withModifiers(handleCopyLogs, ["prevent"])
                }, _cache[26] || (_cache[26] = [
                  createBaseVNode("span", { class: "codicon codicon-copy" }, null, -1),
                  createTextVNode("   Copy Logs ")
                ])),
                createBaseVNode("vscode-button", {
                  onClick: withModifiers(handleOpenLogFile, ["prevent"]),
                  form: "init-form",
                  secondary: "",
                  disabled: !unref(logFileUrl)
                }, _cache[27] || (_cache[27] = [
                  createBaseVNode("span", { class: "codicon codicon-open-preview" }, null, -1),
                  createTextVNode("   Open Log File ")
                ]), 8, _hoisted_27),
                createBaseVNode("vscode-button", {
                  id: "open-folder-button",
                  form: "init-form",
                  disabled: openScaffoldedFolderButtonDisabled.value,
                  onClick: withModifiers(handleOpenScaffoldedFolder, ["prevent"])
                }, _cache[28] || (_cache[28] = [
                  createBaseVNode("span", { class: "codicon codicon-folder-active" }, null, -1),
                  createTextVNode("   Open Project ")
                ]), 8, _hoisted_28)
              ])
            ])
          ])
        ], 2)
      ]);
    };
  }
});
const app = createApp(_sfc_main);
app.mount("#app");
