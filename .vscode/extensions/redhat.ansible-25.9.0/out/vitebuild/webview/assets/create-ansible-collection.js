import { d as defineComponent, f as ref, L as computed, J as onMounted, v as vscodeApi, H as nextTick, c as createElementBlock, o as openBlock, b as createBlock, g as createCommentVNode, a as createBaseVNode, k as withDirectives, l as vModelText, t as toDisplayString, h as createTextVNode, u as unref, N as isRef, O as createStaticVNode, P as withModifiers, B as normalizeClass, p as createApp } from "./vscode.js";
import "./vscode-button.js";
import { u as useCommonWebviewState, i as initializeUI, s as setupMessageHandler, c as checkADEPresence, o as openFolderExplorer, a as openFileExplorer, b as createActionWrapper, d as clearLogs, e as copyLogs, f as openLogFile, g as openScaffoldedFolder, h as clearAllFields } from "./webviewUtils.js";
import "./vscode-textfield.js";
import { R as RequirementsBanner } from "./RequirementsBanner.js";
import "./_plugin-vue_export-helper.js";
const _hoisted_1 = { id: "init-form" };
const _hoisted_2 = { class: "component-container" };
const _hoisted_3 = { variant: "vertical" };
const _hoisted_4 = { variant: "vertical" };
const _hoisted_5 = {
  id: "full-collection-name",
  class: "full-collection-name"
};
const _hoisted_6 = { variant: "vertical" };
const _hoisted_7 = ["placeholder"];
const _hoisted_8 = {
  id: "full-collection-path",
  class: "full-collection-name"
};
const _hoisted_9 = { class: "verbose-div" };
const _hoisted_10 = { class: "dropdown-container" };
const _hoisted_11 = ["value"];
const _hoisted_12 = { class: "checkbox-div" };
const _hoisted_13 = ["checked"];
const _hoisted_14 = {
  key: 0,
  class: "log-to-file-options"
};
const _hoisted_15 = { variant: "vertical" };
const _hoisted_16 = ["placeholder"];
const _hoisted_17 = { class: "checkbox-div" };
const _hoisted_18 = ["checked"];
const _hoisted_19 = { class: "log-level-div" };
const _hoisted_20 = { class: "dropdown-container" };
const _hoisted_21 = ["value"];
const _hoisted_22 = { class: "checkbox-div" };
const _hoisted_23 = ["checked"];
const _hoisted_24 = { class: "checkbox-div" };
const _hoisted_25 = ["checked", "disabled"];
const _hoisted_26 = { class: "group-buttons" };
const _hoisted_27 = ["disabled"];
const _hoisted_28 = { variant: "vertical" };
const _hoisted_29 = { class: "group-buttons" };
const _hoisted_30 = ["disabled"];
const _hoisted_31 = ["disabled"];
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "CreateAnsibleCollectionApp",
  setup(__props) {
    const commonState = useCommonWebviewState();
    const logs = commonState.logs;
    const isCreating = commonState.isCreating;
    const logFileUrl = commonState.logFileUrl;
    const logFilePath = commonState.logFilePath;
    const defaultLogFilePath = commonState.defaultLogFilePath;
    const namespace = ref("");
    const collectionName = ref("");
    const initPath = ref("");
    const verbosity = ref("off");
    const logToFile = ref(false);
    const logFileAppend = ref(false);
    const isOverwritten = ref(false);
    const isEditableModeInstall = ref(false);
    const adePresent = ref(false);
    const logLevel = ref("debug");
    const collectionUrl = ref("");
    const defaultInitPath = ref("");
    const fullCollectionName = ref("");
    const openScaffoldedFolderButtonDisabled = ref(true);
    const requirementsMet = ref(true);
    const requirementFailures = ref([]);
    const isFormValid = computed(() => {
      return namespace.value.trim() !== "" && collectionName.value.trim() !== "" && (initPath.value.trim() !== "" || defaultInitPath.value.trim() !== "");
    });
    const handleOpenFolderExplorer = () => {
      const actualHomeDir = defaultInitPath.value ? defaultInitPath.value.replace("/.ansible/collections/ansible_collections", "") : commonState.homeDir.value;
      openFolderExplorer(actualHomeDir);
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
      openScaffoldedFolder(collectionUrl.value, "collection");
    };
    const handleCheckADEPresence = () => checkADEPresence();
    const handleCreate = createActionWrapper(
      isCreating,
      commonState.logs,
      commonState.createButtonDisabled,
      () => {
        const actualInitPath = initPath.value || defaultInitPath.value;
        const actualLogFilePath = commonState.logFilePath.value || commonState.defaultLogFilePath.value;
        const payload = {
          initPath: actualInitPath,
          namespaceName: namespace.value,
          collectionName: collectionName.value,
          verbosity: verbosity.value,
          logToFile: logToFile.value,
          logFileAppend: logFileAppend.value,
          isEditableModeInstall: isEditableModeInstall.value,
          logFilePath: actualLogFilePath,
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
      commonState.openLogFileButtonDisabled.value = true;
      openScaffoldedFolderButtonDisabled.value = true;
      commonState.createButtonDisabled.value = false;
    };
    onMounted(async () => {
      try {
        vscodeApi.postMessage({ type: "request-requirements-status" });
        window.addEventListener("message", (event) => {
          if (event.data && event.data.type === "requirements-status") {
            requirementsMet.value = event.data.met;
            requirementFailures.value = event.data.failures || [];
          }
        });
        initializeUI();
        await nextTick();
        setupMessageHandler({
          onHomedirAndTempdir: (homedir, tempdir) => {
            defaultInitPath.value = `${homedir}/.ansible/collections/ansible_collections`;
          },
          onExecutionLog: (args) => {
            if (isCreating.value) {
              collectionUrl.value = args.collectionUrl || "";
              if (args.status === "passed") {
                openScaffoldedFolderButtonDisabled.value = false;
              } else if (args.status === "in-progress") {
                openScaffoldedFolderButtonDisabled.value = true;
              } else {
                openScaffoldedFolderButtonDisabled.value = true;
                collectionUrl.value = "";
              }
            }
          },
          onADEPresence: (present) => {
            adePresent.value = present;
          },
          onFolderSelected: (selectedPath) => {
            initPath.value = selectedPath;
          }
        }, commonState);
        setTimeout(() => {
          try {
            handleCheckADEPresence();
          } catch (error) {
            console.warn("ADE presence check failed, continuing without it:", error);
          }
        }, 0);
      } catch (error) {
        console.error("Error during component mounting:", error);
      }
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
          _cache[33] || (_cache[33] = createBaseVNode("div", { class: "title-div" }, [
            createBaseVNode("h1", null, "Create new Ansible collection"),
            createBaseVNode("p", { class: "subtitle" }, "Streamlining automation")
          ], -1)),
          createBaseVNode("form", _hoisted_1, [
            createBaseVNode("section", _hoisted_2, [
              createBaseVNode("vscode-form-group", _hoisted_3, [
                _cache[12] || (_cache[12] = createBaseVNode("vscode-label", { for: "namespace-name" }, [
                  createBaseVNode("span", { class: "normal" }, "Namespace"),
                  createBaseVNode("sup", null, "*")
                ], -1)),
                withDirectives(createBaseVNode("vscode-textfield", {
                  id: "namespace-name",
                  "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => namespace.value = $event),
                  class: "required",
                  form: "init-form",
                  placeholder: "Enter namespace name"
                }, null, 512), [
                  [vModelText, namespace.value]
                ])
              ]),
              createBaseVNode("vscode-form-group", _hoisted_4, [
                _cache[13] || (_cache[13] = createBaseVNode("vscode-label", { for: "collection-name" }, [
                  createBaseVNode("span", { class: "normal" }, "Collection"),
                  createBaseVNode("sup", null, "*")
                ], -1)),
                withDirectives(createBaseVNode("vscode-textfield", {
                  id: "collection-name",
                  "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => collectionName.value = $event),
                  class: "required",
                  form: "init-form",
                  placeholder: "Enter collection name",
                  size: "512"
                }, null, 512), [
                  [vModelText, collectionName.value]
                ])
              ]),
              createBaseVNode("div", _hoisted_5, [
                createBaseVNode("p", null, " Collection name:  " + toDisplayString(namespace.value || "namespace") + toDisplayString(collectionName.value ? "." + collectionName.value : namespace.value ? "." : ".collection"), 1)
              ]),
              createBaseVNode("vscode-form-group", _hoisted_6, [
                _cache[14] || (_cache[14] = createBaseVNode("vscode-label", { for: "path-url" }, [
                  createBaseVNode("span", { class: "normal" }, "Init path")
                ], -1)),
                withDirectives(createBaseVNode("vscode-textfield", {
                  id: "path-url",
                  class: "required",
                  "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => initPath.value = $event),
                  placeholder: defaultInitPath.value,
                  size: "512"
                }, [
                  createBaseVNode("vscode-icon", {
                    slot: "content-after",
                    id: "folder-explorer",
                    name: "folder-opened",
                    "action-icon": "",
                    onClick: handleOpenFolderExplorer
                  })
                ], 8, _hoisted_7), [
                  [vModelText, initPath.value]
                ])
              ]),
              createBaseVNode("div", _hoisted_8, [
                createBaseVNode("p", null, " Project path: " + toDisplayString(initPath.value.trim() ? initPath.value : namespace.value && collectionName.value ? defaultInitPath.value + "/" + namespace.value + "/" + collectionName.value : defaultInitPath.value), 1)
              ]),
              createBaseVNode("div", _hoisted_9, [
                createBaseVNode("div", _hoisted_10, [
                  _cache[16] || (_cache[16] = createBaseVNode("vscode-label", { for: "verbosity-dropdown" }, [
                    createBaseVNode("span", { class: "normal" }, "Verbosity")
                  ], -1)),
                  createBaseVNode("vscode-single-select", {
                    value: verbosity.value,
                    onChange: _cache[3] || (_cache[3] = ($event) => verbosity.value = $event.target.value),
                    id: "verbosity-dropdown",
                    position: "below"
                  }, _cache[15] || (_cache[15] = [
                    createBaseVNode("vscode-option", { value: "off" }, "Off", -1),
                    createBaseVNode("vscode-option", { value: "low" }, "Low", -1),
                    createBaseVNode("vscode-option", { value: "medium" }, "Medium", -1),
                    createBaseVNode("vscode-option", { value: "high" }, "High", -1)
                  ]), 40, _hoisted_11)
                ])
              ]),
              createBaseVNode("div", _hoisted_12, [
                createBaseVNode("vscode-checkbox", {
                  id: "log-to-file-checkbox",
                  checked: logToFile.value,
                  onChange: _cache[4] || (_cache[4] = ($event) => logToFile.value = $event.target.checked),
                  form: "init-form"
                }, [
                  _cache[17] || (_cache[17] = createTextVNode(" Log output to a file ")),
                  _cache[18] || (_cache[18] = createBaseVNode("br", null, null, -1)),
                  createBaseVNode("i", null, "Default path: " + toDisplayString(unref(defaultLogFilePath)), 1)
                ], 40, _hoisted_13)
              ]),
              logToFile.value ? (openBlock(), createElementBlock("div", _hoisted_14, [
                createBaseVNode("vscode-form-group", _hoisted_15, [
                  _cache[19] || (_cache[19] = createBaseVNode("vscode-label", { for: "log-file-path" }, [
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
                  ], 8, _hoisted_16), [
                    [vModelText, unref(logFilePath)]
                  ])
                ]),
                createBaseVNode("div", _hoisted_17, [
                  createBaseVNode("vscode-checkbox", {
                    checked: logFileAppend.value,
                    onChange: _cache[6] || (_cache[6] = ($event) => logFileAppend.value = $event.target.checked)
                  }, " Append ", 40, _hoisted_18)
                ]),
                createBaseVNode("div", _hoisted_19, [
                  createBaseVNode("div", _hoisted_20, [
                    _cache[21] || (_cache[21] = createBaseVNode("vscode-label", { for: "log-level-dropdown" }, [
                      createBaseVNode("span", { class: "normal" }, "Log level")
                    ], -1)),
                    createBaseVNode("vscode-single-select", {
                      value: logLevel.value,
                      onChange: _cache[7] || (_cache[7] = ($event) => logLevel.value = $event.target.value),
                      id: "log-level-dropdown",
                      position: "below"
                    }, _cache[20] || (_cache[20] = [
                      createStaticVNode('<vscode-option value="debug">Debug</vscode-option><vscode-option value="info">Info</vscode-option><vscode-option value="warning">Warning</vscode-option><vscode-option value="error">Error</vscode-option><vscode-option value="critical">Critical</vscode-option>', 5)
                    ]), 40, _hoisted_21)
                  ])
                ])
              ])) : createCommentVNode("", true),
              createBaseVNode("div", _hoisted_22, [
                createBaseVNode("vscode-checkbox", {
                  id: "overwrite-checkbox",
                  checked: isOverwritten.value,
                  onChange: _cache[8] || (_cache[8] = ($event) => isOverwritten.value = $event.target.checked),
                  form: "init-form"
                }, _cache[22] || (_cache[22] = [
                  createTextVNode(" Overwrite "),
                  createBaseVNode("br", null, null, -1),
                  createBaseVNode("i", null, "Overwriting will remove the existing content in the specified directory and replace it with the files from the Ansible collection.", -1)
                ]), 40, _hoisted_23)
              ]),
              createBaseVNode("div", _hoisted_24, [
                createBaseVNode("vscode-checkbox", {
                  id: "editable-mode-checkbox",
                  checked: isEditableModeInstall.value,
                  onChange: _cache[9] || (_cache[9] = ($event) => isEditableModeInstall.value = $event.target.checked),
                  disabled: !adePresent.value,
                  form: "init-form"
                }, _cache[23] || (_cache[23] = [
                  createTextVNode(" Install collection from source code (editable mode) "),
                  createBaseVNode("br", null, null, -1),
                  createBaseVNode("i", null, [
                    createTextVNode("This will allow immediate reflection of content changes without having to reinstalling it. "),
                    createBaseVNode("br"),
                    createTextVNode(" (NOTE: Requires ansible-dev-environment installed in the environment.)")
                  ], -1)
                ]), 40, _hoisted_25),
                _cache[24] || (_cache[24] = createBaseVNode("a", {
                  id: "ade-docs-link",
                  href: "https://ansible.readthedocs.io/projects/dev-environment/"
                }, "Learn more", -1))
              ]),
              createBaseVNode("div", _hoisted_26, [
                createBaseVNode("vscode-button", {
                  onClick: withModifiers(onClear, ["prevent"]),
                  form: "init-form",
                  appearance: "secondary",
                  id: "clear-button"
                }, _cache[25] || (_cache[25] = [
                  createBaseVNode("span", { class: "codicon codicon-clear-all" }, null, -1),
                  createTextVNode("  Clear All ")
                ])),
                createBaseVNode("vscode-button", {
                  ref: "initCreateButton",
                  onClick: _cache[10] || (_cache[10] = withModifiers(
                    //@ts-ignore
                    (...args) => unref(handleCreate) && unref(handleCreate)(...args),
                    ["prevent"]
                  )),
                  disabled: !isFormValid.value || unref(isCreating),
                  form: "init-form",
                  id: "create-button"
                }, [
                  _cache[26] || (_cache[26] = createBaseVNode("span", { class: "codicon codicon-run-all" }, null, -1)),
                  createTextVNode("   " + toDisplayString(unref(isCreating) ? "Creating..." : "Create"), 1)
                ], 8, _hoisted_27)
              ]),
              _cache[32] || (_cache[32] = createBaseVNode("vscode-divider", null, null, -1)),
              createBaseVNode("vscode-form-group", _hoisted_28, [
                _cache[27] || (_cache[27] = createBaseVNode("vscode-label", {
                  id: "vscode-logs-label",
                  for: "log-text-area"
                }, [
                  createBaseVNode("span", { class: "normal" }, "Logs")
                ], -1)),
                withDirectives(createBaseVNode("vscode-textarea", {
                  id: "log-text-area",
                  "onUpdate:modelValue": _cache[11] || (_cache[11] = ($event) => isRef(logs) ? logs.value = $event : null),
                  placeholder: "Output of the command execution",
                  resize: "vertical",
                  readonly: ""
                }, null, 512), [
                  [vModelText, unref(logs)]
                ])
              ]),
              createBaseVNode("div", _hoisted_29, [
                createBaseVNode("vscode-button", {
                  onClick: withModifiers(handleClearLogs, ["prevent"]),
                  form: "init-form",
                  secondary: ""
                }, _cache[28] || (_cache[28] = [
                  createBaseVNode("span", { class: "codicon codicon-clear-all" }, null, -1),
                  createTextVNode("   Clear Logs ")
                ])),
                createBaseVNode("vscode-button", {
                  onClick: withModifiers(handleCopyLogs, ["prevent"]),
                  form: "init-form",
                  secondary: ""
                }, _cache[29] || (_cache[29] = [
                  createBaseVNode("span", { class: "codicon codicon-copy" }, null, -1),
                  createTextVNode("   Copy Logs ")
                ])),
                createBaseVNode("vscode-button", {
                  ref: "initOpenLogFileButton",
                  onClick: withModifiers(handleOpenLogFile, ["prevent"]),
                  form: "init-form",
                  secondary: "",
                  disabled: !unref(logFileUrl)
                }, _cache[30] || (_cache[30] = [
                  createBaseVNode("span", { class: "codicon codicon-open-preview" }, null, -1),
                  createTextVNode("   Open Log File ")
                ]), 8, _hoisted_30),
                createBaseVNode("vscode-button", {
                  ref: "initOpenScaffoldedFolderButton",
                  appearance: "secondary",
                  onClick: withModifiers(handleOpenScaffoldedFolder, ["prevent"]),
                  form: "init-form",
                  disabled: !collectionUrl.value
                }, _cache[31] || (_cache[31] = [
                  createBaseVNode("span", { class: "codicon codicon-folder-active" }, null, -1),
                  createTextVNode("   Open Collection ")
                ]), 8, _hoisted_31)
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
