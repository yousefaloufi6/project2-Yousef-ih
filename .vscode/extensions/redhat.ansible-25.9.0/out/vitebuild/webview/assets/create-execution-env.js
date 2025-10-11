import { d as defineComponent, f as ref, L as computed, j as watch, J as onMounted, c as createElementBlock, o as openBlock, a as createBaseVNode, k as withDirectives, l as vModelText, t as toDisplayString, h as createTextVNode, P as withModifiers, u as unref, N as isRef, v as vscodeApi, p as createApp } from "./vscode.js";
import { r as r$1, g as getDefaultFontStack, d as defaultStyles, i, n as n$1, c as customElement, V as VscElement, x, e as e$2, E, a as i$1, o as o$1, s as stylePropertyMap } from "./vscode-button.js";
import { u as useCommonWebviewState, s as setupMessageHandler, i as initializeUI, b as createActionWrapper, d as clearLogs, j as createFormValidator, o as openFolderExplorer, h as clearAllFields, k as o, l as styles$o, V as VscodeSelectBase, m as chevronDownIcon, n as baseStyles, L as LabelledCheckboxOrRadioMixin, F as FormButtonWidgetBase, p as uniqueId } from "./webviewUtils.js";
import { e as e$1, r as r$2, a as e$3 } from "./vscode-textfield.js";
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t = (t2) => (e2, o2) => {
  void 0 !== o2 ? o2.addInitializer(() => {
    customElements.define(t2, e2);
  }) : customElements.define(t2, e2);
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
let e;
function r(r2) {
  return (n2, o2) => e$1(n2, o2, { get() {
    return (this.renderRoot ?? (e ??= document.createDocumentFragment())).querySelectorAll(r2);
  } });
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function n(n2) {
  return (o2, r2) => {
    const { slot: e2 } = {}, s = "slot" + (e2 ? `[name=${e2}]` : ":not([name])");
    return e$1(o2, r2, { get() {
      const t2 = this.renderRoot?.querySelector(s);
      return t2?.assignedNodes(n2) ?? [];
    } });
  };
}
const _hoisted_1 = { id: "init-form" };
const _hoisted_2 = { class: "component-container" };
const _hoisted_3 = { variant: "vertical" };
const _hoisted_4 = ["placeholder"];
const _hoisted_5 = {
  id: "full-destination-path",
  class: "full-destination-path"
};
const _hoisted_6 = { class: "verbose-div" };
const _hoisted_7 = { class: "dropdown-container" };
const _hoisted_8 = ["value"];
const _hoisted_9 = { variant: "vertical" };
const _hoisted_10 = { class: "suggestedCollections-div" };
const _hoisted_11 = { class: "checkbox-container" };
const _hoisted_12 = { id: "suggestedCollections-checkboxes" };
const _hoisted_13 = ["checked"];
const _hoisted_14 = ["checked"];
const _hoisted_15 = ["checked"];
const _hoisted_16 = ["checked"];
const _hoisted_17 = ["checked"];
const _hoisted_18 = { variant: "vertical" };
const _hoisted_19 = { variant: "vertical" };
const _hoisted_20 = { variant: "vertical" };
const _hoisted_21 = { variant: "vertical" };
const _hoisted_22 = { class: "verbose-div" };
const _hoisted_23 = { class: "dropdown-container" };
const _hoisted_24 = ["value"];
const _hoisted_25 = { class: "checkbox-div" };
const _hoisted_26 = ["checked", "disabled"];
const _hoisted_27 = { class: "checkbox-div" };
const _hoisted_28 = ["checked"];
const _hoisted_29 = { class: "checkbox-div" };
const _hoisted_30 = ["checked"];
const _hoisted_31 = { class: "overwriteCheckbox-div" };
const _hoisted_32 = ["checked"];
const _hoisted_33 = { class: "group-buttons" };
const _hoisted_34 = ["disabled"];
const _hoisted_35 = { variant: "vertical" };
const _hoisted_36 = { class: "group-buttons" };
const _hoisted_37 = ["disabled"];
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "CreateExecutionEnvApp",
  setup(__props) {
    const commonState = useCommonWebviewState();
    const logs = commonState.logs;
    const isCreating = commonState.isCreating;
    const destinationPath = ref("");
    const baseImage = ref("");
    const customBaseImage = ref("");
    const collections = ref("");
    const systemPackages = ref("");
    const pythonPackages = ref("");
    const tag = ref("");
    const verbosity = ref("Off");
    const isOverwritten = ref(false);
    const createContext = ref(false);
    const buildImage = ref(false);
    const initEEProject = ref(false);
    const suggestedCollections = ref({
      "amazon.aws": false,
      "ansible.network": false,
      "ansible.posix": false,
      "ansible.utils": false,
      "kubernetes.core": false
    });
    const homeDir = ref("");
    const projectUrl = ref("");
    const openFileButtonDisabled = ref(true);
    const createButtonDisabled = ref(true);
    const displayDestinationPath = computed(() => {
      const path = destinationPath.value.trim() || homeDir.value;
      return path ? `${path}/execution-environment.yml` : "No folders are open in the workspace - Enter a destination directory.";
    });
    const isCreateContextDisabled = computed(() => {
      return buildImage.value;
    });
    const isFormValid = createFormValidator({
      mainValidation: () => {
        const isDestinationPathProvided = destinationPath.value.trim() !== "" || homeDir.value !== "";
        const isTagProvided = tag.value.trim() !== "";
        const isBaseImageProvided = baseImage.value.trim() !== "" || customBaseImage.value.trim() !== "";
        const isInitEEProjectEnabled = initEEProject.value;
        return isInitEEProjectEnabled || isDestinationPathProvided && isTagProvided && isBaseImageProvided;
      }
    });
    watch([baseImage], () => {
      if (baseImage.value.trim() !== "") {
        customBaseImage.value = "";
      }
      updateCreateButtonState();
    });
    watch([customBaseImage], () => {
      if (customBaseImage.value.trim() !== "") {
        baseImage.value = "";
      }
      updateCreateButtonState();
    });
    watch([buildImage], () => {
      if (buildImage.value) {
        createContext.value = true;
      }
    });
    watch([destinationPath, tag, baseImage, customBaseImage, initEEProject, isCreating], () => {
      updateCreateButtonState();
    });
    function updateCreateButtonState() {
      createButtonDisabled.value = !isFormValid() || isCreating.value;
    }
    const handleOpenFolderExplorer = () => {
      openFolderExplorer(
        destinationPath.value || homeDir.value,
        homeDir.value,
        { selectOption: "folder" }
      );
    };
    const handleCreate = createActionWrapper(
      isCreating,
      logs,
      createButtonDisabled,
      () => {
        openFileButtonDisabled.value = true;
        if (createContext.value || buildImage.value) {
          if (!baseImage.value.trim() && !customBaseImage.value.trim()) {
            alert("Please select or enter a base image.");
            isCreating.value = false;
            updateCreateButtonState();
            return;
          }
        }
        const selectedSuggested = Object.entries(suggestedCollections.value).filter(([_, selected]) => selected).map(([name, _]) => name);
        const additionalCollections = collections.value.trim() ? collections.value.split(",").map((c) => c.trim()).filter((c) => c.length > 0) : [];
        const finalCollections = [...selectedSuggested, ...additionalCollections].filter((c) => c.length > 0).join(", ");
        const payload = {
          destinationPath: destinationPath.value.trim(),
          verbosity: verbosity.value.trim(),
          isOverwritten: isOverwritten.value,
          isCreateContextEnabled: createContext.value,
          isBuildImageEnabled: buildImage.value,
          isInitEEProjectEnabled: initEEProject.value,
          baseImage: baseImage.value.trim(),
          customBaseImage: customBaseImage.value.trim(),
          collections: finalCollections,
          systemPackages: systemPackages.value.trim(),
          pythonPackages: pythonPackages.value.trim(),
          tag: tag.value.trim()
        };
        vscodeApi.postMessage({
          command: "init-create-execution-env",
          payload
        });
      }
    );
    const handleOpenFile = () => {
      if (!projectUrl.value) return;
      vscodeApi.postMessage({
        command: "init-open-scaffolded-file",
        payload: {
          projectUrl: projectUrl.value
        }
      });
    };
    const onClear = () => {
      const componentFields = {
        destinationPath,
        baseImage,
        customBaseImage,
        collections,
        systemPackages,
        pythonPackages,
        tag,
        verbosity,
        isOverwritten,
        createContext,
        buildImage,
        initEEProject,
        logs,
        projectUrl
      };
      const defaults = {
        verbosity: "Off",
        isOverwritten: false,
        createContext: false,
        buildImage: false,
        initEEProject: false
      };
      clearAllFields(componentFields, defaults);
      Object.keys(suggestedCollections.value).forEach((key) => {
        suggestedCollections.value[key] = false;
      });
      openFileButtonDisabled.value = true;
      createButtonDisabled.value = true;
      isCreating.value = false;
    };
    function stripAnsiCodes(text) {
      return text.replace(
        // This regex is used to strip ANSI escape codes for terminal text formatting
        // eslint-disable-next-line no-control-regex
        /[\u001B\u009B][[\]()#;?](?:(?:[a-zA-Z\d](?:;[a-zA-Z\d]))?\u0007|(?:\d{1,4}(?:;\d{0,4})*)?[0-9A-ORZcf-nqry=><])/g,
        ""
      );
    }
    onMounted(() => {
      setupMessageHandler({
        onHomeDirectory: (data) => {
          homeDir.value = data;
        },
        onHomedirAndTempdir: (homedir) => {
          if (homedir) {
            homeDir.value = homedir;
          }
        },
        onFolderSelected: (data) => {
          destinationPath.value = data;
        },
        onExecutionLog: (args) => {
          logs.value = stripAnsiCodes(args.commandOutput || "");
          projectUrl.value = args.projectUrl || "";
          if (args.status === "passed") {
            openFileButtonDisabled.value = false;
          } else {
            openFileButtonDisabled.value = true;
          }
          isCreating.value = false;
          updateCreateButtonState();
        }
      });
      window.addEventListener("message", (event) => {
        const message = event.data;
        switch (message.command) {
          case "disable-build-button":
            createButtonDisabled.value = true;
            break;
          case "enable-build-button":
            updateCreateButtonState();
            break;
          case "enable-open-file-button":
            openFileButtonDisabled.value = false;
            break;
        }
      });
      initializeUI();
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("body", null, [
        _cache[46] || (_cache[46] = createBaseVNode("div", { class: "title-div" }, [
          createBaseVNode("h1", null, "Create an Ansible execution environment"),
          createBaseVNode("p", { class: "subtitle" }, "Define and build a container for automation execution")
        ], -1)),
        createBaseVNode("form", _hoisted_1, [
          createBaseVNode("section", _hoisted_2, [
            createBaseVNode("vscode-form-group", _hoisted_3, [
              _cache[25] || (_cache[25] = createBaseVNode("vscode-label", { for: "path-url" }, [
                createBaseVNode("span", { class: "normal" }, "Destination path")
              ], -1)),
              withDirectives(createBaseVNode("vscode-textfield", {
                id: "path-url",
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => destinationPath.value = $event),
                class: "required",
                form: "init-form",
                placeholder: homeDir.value,
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
                [vModelText, destinationPath.value]
              ])
            ]),
            createBaseVNode("div", _hoisted_5, [
              createBaseVNode("p", null, "Execution-environment file path: " + toDisplayString(displayDestinationPath.value), 1)
            ]),
            createBaseVNode("div", _hoisted_6, [
              createBaseVNode("div", _hoisted_7, [
                _cache[27] || (_cache[27] = createBaseVNode("vscode-label", { for: "baseImage-dropdown" }, [
                  createBaseVNode("span", { class: "normal" }, "Base image")
                ], -1)),
                createBaseVNode("vscode-single-select", {
                  id: "baseImage-dropdown",
                  value: baseImage.value,
                  onChange: _cache[1] || (_cache[1] = ($event) => baseImage.value = $event.target.value),
                  position: "below"
                }, _cache[26] || (_cache[26] = [
                  createBaseVNode("vscode-option", { value: "" }, "-- Select Base Image --", -1),
                  createBaseVNode("vscode-option", { value: "quay.io/fedora/fedora-minimal:41" }, "quay.io/fedora/fedora-minimal:41", -1),
                  createBaseVNode("vscode-option", { value: "quay.io/centos/centos:stream10" }, "quay.io/centos/centos:stream10", -1),
                  createBaseVNode("vscode-option", { value: "registry.redhat.io/ansible-automation-platform-25/ee-minimal-rhel8:latest" }, "registry.redhat.io/ansible-automation-platform-25/ee-minimal-rhel8:latest (requires an active Red Hat registry login)", -1)
                ]), 40, _hoisted_8)
              ])
            ]),
            createBaseVNode("vscode-form-group", _hoisted_9, [
              _cache[28] || (_cache[28] = createBaseVNode("vscode-label", { for: "customBaseImage-name" }, [
                createBaseVNode("span", { class: "normal" }, "Custom base image")
              ], -1)),
              withDirectives(createBaseVNode("vscode-textfield", {
                id: "customBaseImage-name",
                "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => customBaseImage.value = $event),
                form: "init-form",
                placeholder: "Provide a base image of your choice"
              }, null, 512), [
                [vModelText, customBaseImage.value]
              ])
            ]),
            createBaseVNode("div", _hoisted_10, [
              createBaseVNode("div", _hoisted_11, [
                _cache[29] || (_cache[29] = createBaseVNode("vscode-label", { for: "suggestedCollections-checkboxes" }, [
                  createBaseVNode("span", { class: "normal" }, "Suggested collections")
                ], -1)),
                createBaseVNode("div", _hoisted_12, [
                  withDirectives(createBaseVNode("vscode-checkbox", {
                    "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => suggestedCollections.value["amazon.aws"] = $event),
                    checked: suggestedCollections.value["amazon.aws"],
                    onChange: _cache[4] || (_cache[4] = ($event) => suggestedCollections.value["amazon.aws"] = $event.target.checked),
                    value: "amazon.aws"
                  }, "amazon.aws", 40, _hoisted_13), [
                    [vModelText, suggestedCollections.value["amazon.aws"]]
                  ]),
                  withDirectives(createBaseVNode("vscode-checkbox", {
                    "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => suggestedCollections.value["ansible.network"] = $event),
                    checked: suggestedCollections.value["ansible.network"],
                    onChange: _cache[6] || (_cache[6] = ($event) => suggestedCollections.value["ansible.network"] = $event.target.checked),
                    value: "ansible.network"
                  }, "ansible.network", 40, _hoisted_14), [
                    [vModelText, suggestedCollections.value["ansible.network"]]
                  ]),
                  withDirectives(createBaseVNode("vscode-checkbox", {
                    "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => suggestedCollections.value["ansible.posix"] = $event),
                    checked: suggestedCollections.value["ansible.posix"],
                    onChange: _cache[8] || (_cache[8] = ($event) => suggestedCollections.value["ansible.posix"] = $event.target.checked),
                    value: "ansible.posix"
                  }, "ansible.posix", 40, _hoisted_15), [
                    [vModelText, suggestedCollections.value["ansible.posix"]]
                  ]),
                  withDirectives(createBaseVNode("vscode-checkbox", {
                    "onUpdate:modelValue": _cache[9] || (_cache[9] = ($event) => suggestedCollections.value["ansible.utils"] = $event),
                    checked: suggestedCollections.value["ansible.utils"],
                    onChange: _cache[10] || (_cache[10] = ($event) => suggestedCollections.value["ansible.utils"] = $event.target.checked),
                    value: "ansible.utils"
                  }, "ansible.utils", 40, _hoisted_16), [
                    [vModelText, suggestedCollections.value["ansible.utils"]]
                  ]),
                  withDirectives(createBaseVNode("vscode-checkbox", {
                    "onUpdate:modelValue": _cache[11] || (_cache[11] = ($event) => suggestedCollections.value["kubernetes.core"] = $event),
                    checked: suggestedCollections.value["kubernetes.core"],
                    onChange: _cache[12] || (_cache[12] = ($event) => suggestedCollections.value["kubernetes.core"] = $event.target.checked),
                    value: "kubernetes.core"
                  }, "kubernetes.core", 40, _hoisted_17), [
                    [vModelText, suggestedCollections.value["kubernetes.core"]]
                  ])
                ])
              ])
            ]),
            createBaseVNode("vscode-form-group", _hoisted_18, [
              _cache[30] || (_cache[30] = createBaseVNode("vscode-label", { for: "collections-name" }, [
                createBaseVNode("span", { class: "normal" }, "Additional Collections")
              ], -1)),
              withDirectives(createBaseVNode("vscode-textfield", {
                id: "collections-name",
                "onUpdate:modelValue": _cache[13] || (_cache[13] = ($event) => collections.value = $event),
                form: "init-form",
                placeholder: "Provide a comma delimited list of collections to include in the image"
              }, null, 512), [
                [vModelText, collections.value]
              ])
            ]),
            createBaseVNode("vscode-form-group", _hoisted_19, [
              _cache[31] || (_cache[31] = createBaseVNode("vscode-label", { for: "systemPackages-name" }, [
                createBaseVNode("span", { class: "normal" }, "System packages")
              ], -1)),
              withDirectives(createBaseVNode("vscode-textfield", {
                id: "systemPackages-name",
                "onUpdate:modelValue": _cache[14] || (_cache[14] = ($event) => systemPackages.value = $event),
                form: "init-form",
                placeholder: "Provide a comma delimited list of system packages to install in the image"
              }, null, 512), [
                [vModelText, systemPackages.value]
              ])
            ]),
            createBaseVNode("vscode-form-group", _hoisted_20, [
              _cache[32] || (_cache[32] = createBaseVNode("vscode-label", { for: "pythonPackages-name" }, [
                createBaseVNode("span", { class: "normal" }, "Additional python packages")
              ], -1)),
              withDirectives(createBaseVNode("vscode-textfield", {
                id: "pythonPackages-name",
                "onUpdate:modelValue": _cache[15] || (_cache[15] = ($event) => pythonPackages.value = $event),
                form: "init-form",
                placeholder: "Provide a comma delimited list. Collection dependencies are included by default."
              }, null, 512), [
                [vModelText, pythonPackages.value]
              ])
            ]),
            createBaseVNode("vscode-form-group", _hoisted_21, [
              _cache[33] || (_cache[33] = createBaseVNode("vscode-label", { for: "tag-name" }, [
                createBaseVNode("span", { class: "normal" }, "Tag"),
                createBaseVNode("sup", null, "*")
              ], -1)),
              withDirectives(createBaseVNode("vscode-textfield", {
                id: "tag-name",
                "onUpdate:modelValue": _cache[16] || (_cache[16] = ($event) => tag.value = $event),
                form: "init-form",
                placeholder: "Provide a name for the resulting image."
              }, null, 512), [
                [vModelText, tag.value]
              ])
            ]),
            createBaseVNode("div", _hoisted_22, [
              createBaseVNode("div", _hoisted_23, [
                _cache[35] || (_cache[35] = createBaseVNode("vscode-label", { for: "verbosity-dropdown" }, [
                  createBaseVNode("span", { class: "normal" }, "Output Verbosity")
                ], -1)),
                createBaseVNode("vscode-single-select", {
                  id: "verbosity-dropdown",
                  value: verbosity.value,
                  onChange: _cache[17] || (_cache[17] = ($event) => verbosity.value = $event.target.value),
                  position: "below"
                }, _cache[34] || (_cache[34] = [
                  createBaseVNode("vscode-option", { value: "Off" }, "Off", -1),
                  createBaseVNode("vscode-option", { value: "Low" }, "Low", -1),
                  createBaseVNode("vscode-option", { value: "Medium" }, "Medium", -1),
                  createBaseVNode("vscode-option", { value: "High" }, "High", -1)
                ]), 40, _hoisted_24)
              ])
            ]),
            createBaseVNode("div", _hoisted_25, [
              createBaseVNode("vscode-checkbox", {
                id: "createContext-checkbox",
                checked: createContext.value,
                disabled: isCreateContextDisabled.value,
                onChange: _cache[18] || (_cache[18] = ($event) => createContext.value = $event.target.checked),
                form: "init-form"
              }, _cache[36] || (_cache[36] = [
                createTextVNode(" Create context "),
                createBaseVNode("br", null, null, -1),
                createBaseVNode("i", null, "Create context for the execution-environment.", -1)
              ]), 40, _hoisted_26)
            ]),
            createBaseVNode("div", _hoisted_27, [
              createBaseVNode("vscode-checkbox", {
                id: "buildImage-checkbox",
                checked: buildImage.value,
                onChange: _cache[19] || (_cache[19] = ($event) => buildImage.value = $event.target.checked),
                form: "init-form"
              }, _cache[37] || (_cache[37] = [
                createTextVNode(" Build image "),
                createBaseVNode("br", null, null, -1),
                createBaseVNode("i", null, "Build the image of the execution-environment.", -1)
              ]), 40, _hoisted_28)
            ]),
            createBaseVNode("div", _hoisted_29, [
              createBaseVNode("vscode-checkbox", {
                id: "initEE-checkbox",
                checked: initEEProject.value,
                onChange: _cache[20] || (_cache[20] = ($event) => initEEProject.value = $event.target.checked),
                form: "init-form"
              }, _cache[38] || (_cache[38] = [
                createTextVNode(" Include full project files "),
                createBaseVNode("br", null, null, -1),
                createBaseVNode("i", null, "Initialize entire structure of execution-environment project.", -1)
              ]), 40, _hoisted_30)
            ]),
            createBaseVNode("div", _hoisted_31, [
              createBaseVNode("vscode-checkbox", {
                id: "overwrite-checkbox",
                checked: isOverwritten.value,
                onChange: _cache[21] || (_cache[21] = ($event) => isOverwritten.value = $event.target.checked),
                form: "init-form"
              }, _cache[39] || (_cache[39] = [
                createTextVNode(" Overwrite "),
                createBaseVNode("br", null, null, -1),
                createBaseVNode("i", null, "Overwrite an existing execution-environment.yml file.", -1)
              ]), 40, _hoisted_32)
            ]),
            createBaseVNode("div", _hoisted_33, [
              createBaseVNode("vscode-button", {
                id: "clear-button",
                onClick: withModifiers(onClear, ["prevent"]),
                form: "init-form",
                appearance: "secondary"
              }, _cache[40] || (_cache[40] = [
                createBaseVNode("span", { class: "codicon codicon-clear-all" }, null, -1),
                createTextVNode("   Clear All ")
              ])),
              createBaseVNode("vscode-button", {
                id: "create-button",
                onClick: _cache[22] || (_cache[22] = withModifiers(
                  //@ts-ignore
                  (...args) => unref(handleCreate) && unref(handleCreate)(...args),
                  ["prevent"]
                )),
                disabled: createButtonDisabled.value,
                form: "init-form"
              }, [
                _cache[41] || (_cache[41] = createBaseVNode("span", { class: "codicon codicon-run-all" }, null, -1)),
                createTextVNode("   " + toDisplayString(unref(isCreating) ? "Building..." : "Build"), 1)
              ], 8, _hoisted_34)
            ]),
            _cache[45] || (_cache[45] = createBaseVNode("vscode-divider", null, null, -1)),
            createBaseVNode("vscode-form-group", _hoisted_35, [
              _cache[42] || (_cache[42] = createBaseVNode("vscode-label", {
                id: "vscode-logs-label",
                for: "log-text-area"
              }, [
                createBaseVNode("span", { class: "normal" }, "Logs")
              ], -1)),
              withDirectives(createBaseVNode("vscode-textarea", {
                id: "log-text-area",
                "onUpdate:modelValue": _cache[23] || (_cache[23] = ($event) => isRef(logs) ? logs.value = $event : null),
                cols: "90",
                rows: "10",
                placeholder: "Output of the command execution",
                resize: "vertical",
                readonly: ""
              }, null, 512), [
                [vModelText, unref(logs)]
              ])
            ]),
            createBaseVNode("div", _hoisted_36, [
              createBaseVNode("vscode-button", {
                id: "clear-logs-button",
                onClick: _cache[24] || (_cache[24] = withModifiers(($event) => unref(clearLogs)(unref(commonState).logs), ["prevent"])),
                form: "init-form",
                appearance: "secondary"
              }, _cache[43] || (_cache[43] = [
                createBaseVNode("span", { class: "codicon codicon-clear-all" }, null, -1),
                createTextVNode("   Clear Logs ")
              ])),
              createBaseVNode("vscode-button", {
                id: "open-file-button",
                onClick: withModifiers(handleOpenFile, ["prevent"]),
                disabled: openFileButtonDisabled.value,
                form: "init-form",
                appearance: "secondary"
              }, _cache[44] || (_cache[44] = [
                createBaseVNode("span", { class: "codicon codicon-go-to-file" }, null, -1),
                createTextVNode("   Open Execution Environment file ")
              ]), 8, _hoisted_37)
            ])
          ])
        ])
      ]);
    };
  }
});
const defaultFontStack = r$1(getDefaultFontStack());
const styles$n = [
  defaultStyles,
  i`
    :host {
      background-color: var(--vscode-badge-background, #616161);
      border: 1px solid var(--vscode-contrastBorder, transparent);
      border-radius: 2px;
      box-sizing: border-box;
      color: var(--vscode-badge-foreground, #f8f8f8);
      display: inline-block;
      font-family: var(--vscode-font-family, ${defaultFontStack});
      font-size: 11px;
      font-weight: 400;
      line-height: 14px;
      min-width: 18px;
      padding: 2px 3px;
      text-align: center;
      white-space: nowrap;
    }

    :host([variant='counter']) {
      border-radius: 11px;
      line-height: 11px;
      min-height: 18px;
      min-width: 18px;
      padding: 3px 6px;
    }

    :host([variant='activity-bar-counter']) {
      background-color: var(--vscode-activityBarBadge-background, #0078d4);
      border-radius: 20px;
      color: var(--vscode-activityBarBadge-foreground, #ffffff);
      font-size: 9px;
      font-weight: 600;
      line-height: 16px;
      padding: 0 4px;
    }

    :host([variant='tab-header-counter']) {
      background-color: var(--vscode-activityBarBadge-background, #0078d4);
      border-radius: 10px;
      color: var(--vscode-activityBarBadge-foreground, #ffffff);
      line-height: 10px;
      min-height: 16px;
      min-width: 16px;
      padding: 3px 5px;
    }
  `
];
var __decorate$o = function(decorators, target, key, desc) {
  var c = arguments.length, r2 = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r2 = Reflect.decorate(decorators, target, key, desc);
  else for (var i2 = decorators.length - 1; i2 >= 0; i2--) if (d = decorators[i2]) r2 = (c < 3 ? d(r2) : c > 3 ? d(target, key, r2) : d(target, key)) || r2;
  return c > 3 && r2 && Object.defineProperty(target, key, r2), r2;
};
let VscodeBadge = class VscodeBadge2 extends VscElement {
  constructor() {
    super(...arguments);
    this.variant = "default";
  }
  render() {
    return x` <slot></slot> `;
  }
};
VscodeBadge.styles = styles$n;
__decorate$o([
  n$1({ reflect: true })
], VscodeBadge.prototype, "variant", void 0);
VscodeBadge = __decorate$o([
  customElement("vscode-badge")
], VscodeBadge);
const styles$m = [
  defaultStyles,
  i`
    :host {
      display: inline-flex;
      align-items: stretch;
      padding: 0;
      border: none;
      overflow: hidden;
    }

    ::slotted(vscode-button:not(:first-child)) {
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
      border-left-width: 0;
    }

    ::slotted(vscode-button:not(:last-child)) {
      --divider-display: block;
      --wrapper-width: calc(100% - 1px);

      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
      border-right-width: 0;
    }

    ::slotted(vscode-button:focus) {
      z-index: 1;
    }
  `
];
var __decorate$n = function(decorators, target, key, desc) {
  var c = arguments.length, r2 = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r2 = Reflect.decorate(decorators, target, key, desc);
  else for (var i2 = decorators.length - 1; i2 >= 0; i2--) if (d = decorators[i2]) r2 = (c < 3 ? d(r2) : c > 3 ? d(target, key, r2) : d(target, key)) || r2;
  return c > 3 && r2 && Object.defineProperty(target, key, r2), r2;
};
let VscodeButtonGroup = class VscodeButtonGroup2 extends VscElement {
  render() {
    return x` <slot></slot> `;
  }
};
VscodeButtonGroup.styles = styles$m;
VscodeButtonGroup = __decorate$n([
  t("vscode-button-group")
], VscodeButtonGroup);
const styles$l = [
  defaultStyles,
  i`
    :host {
      display: block;
    }

    .wrapper {
      display: flex;
      flex-wrap: wrap;
    }

    :host([variant='vertical']) .wrapper {
      display: block;
    }

    ::slotted(vscode-checkbox) {
      margin-right: 20px;
    }

    ::slotted(vscode-checkbox:last-child) {
      margin-right: 0;
    }

    :host([variant='vertical']) ::slotted(vscode-checkbox) {
      display: block;
      margin-bottom: 15px;
    }

    :host([variant='vertical']) ::slotted(vscode-checkbox:last-child) {
      margin-bottom: 0;
    }
  `
];
var __decorate$m = function(decorators, target, key, desc) {
  var c = arguments.length, r2 = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r2 = Reflect.decorate(decorators, target, key, desc);
  else for (var i2 = decorators.length - 1; i2 >= 0; i2--) if (d = decorators[i2]) r2 = (c < 3 ? d(r2) : c > 3 ? d(target, key, r2) : d(target, key)) || r2;
  return c > 3 && r2 && Object.defineProperty(target, key, r2), r2;
};
let VscodeCheckboxGroup = class VscodeCheckboxGroup2 extends VscElement {
  constructor() {
    super(...arguments);
    this.role = "group";
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
VscodeCheckboxGroup.styles = styles$l;
__decorate$m([
  n$1({ reflect: true })
], VscodeCheckboxGroup.prototype, "role", void 0);
__decorate$m([
  n$1({ reflect: true })
], VscodeCheckboxGroup.prototype, "variant", void 0);
VscodeCheckboxGroup = __decorate$m([
  customElement("vscode-checkbox-group")
], VscodeCheckboxGroup);
const styles$k = [
  defaultStyles,
  i`
    .collapsible {
      background-color: var(--vscode-sideBar-background, #181818);
    }

    .collapsible-header {
      align-items: center;
      background-color: var(--vscode-sideBarSectionHeader-background, #181818);
      cursor: pointer;
      display: flex;
      height: 22px;
      line-height: 22px;
      user-select: none;
    }

    .collapsible-header:focus {
      opacity: 1;
      outline-offset: -1px;
      outline-style: solid;
      outline-width: 1px;
      outline-color: var(--vscode-focusBorder, #0078d4);
    }

    .title {
      color: var(--vscode-sideBarTitle-foreground, #cccccc);
      display: block;
      font-family: var(--vscode-font-family, sans-serif);
      font-size: 11px;
      font-weight: 700;
      margin: 0;
      overflow: hidden;
      text-overflow: ellipsis;
      text-transform: uppercase;
      white-space: nowrap;
    }

    .title .description {
      font-weight: 400;
      margin-left: 10px;
      text-transform: none;
      opacity: 0.6;
    }

    .header-icon {
      color: var(--vscode-icon-foreground, #cccccc);
      display: block;
      flex-shrink: 0;
      margin: 0 3px;
    }

    .collapsible.open .header-icon {
      transform: rotate(90deg);
    }

    .header-slots {
      align-items: center;
      display: flex;
      height: 22px;
      margin-left: auto;
      margin-right: 4px;
    }

    .actions {
      display: none;
    }

    .collapsible.open .actions {
      display: block;
    }

    .header-slots slot {
      display: flex;
      max-height: 22px;
      overflow: hidden;
    }

    .header-slots slot::slotted(div) {
      align-items: center;
      display: flex;
    }

    .collapsible-body {
      display: none;
      overflow: hidden;
    }

    .collapsible.open .collapsible-body {
      display: block;
    }
  `
];
var __decorate$l = function(decorators, target, key, desc) {
  var c = arguments.length, r2 = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r2 = Reflect.decorate(decorators, target, key, desc);
  else for (var i2 = decorators.length - 1; i2 >= 0; i2--) if (d = decorators[i2]) r2 = (c < 3 ? d(r2) : c > 3 ? d(target, key, r2) : d(target, key)) || r2;
  return c > 3 && r2 && Object.defineProperty(target, key, r2), r2;
};
let VscodeCollapsible = class VscodeCollapsible2 extends VscElement {
  constructor() {
    super(...arguments);
    this.title = "";
    this.description = "";
    this.open = false;
  }
  _emitToggleEvent() {
    this.dispatchEvent(new CustomEvent("vsc-collapsible-toggle", {
      detail: { open: this.open }
    }));
  }
  _onHeaderClick() {
    this.open = !this.open;
    this._emitToggleEvent();
  }
  _onHeaderKeyDown(event) {
    if (event.key === "Enter") {
      this.open = !this.open;
      this._emitToggleEvent();
    }
  }
  render() {
    const classes = e$2({ collapsible: true, open: this.open });
    const icon = x`<svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      class="header-icon"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M10.072 8.024L5.715 3.667l.618-.62L11 7.716v.618L6.333 13l-.618-.619 4.357-4.357z"
      />
    </svg>`;
    const descriptionMarkup = this.description ? x`<span class="description">${this.description}</span>` : E;
    return x`
      <div class=${classes}>
        <div
          class="collapsible-header"
          tabindex="0"
          title=${this.title}
          @click=${this._onHeaderClick}
          @keydown=${this._onHeaderKeyDown}
        >
          ${icon}
          <h3 class="title">${this.title}${descriptionMarkup}</h3>
          <div class="header-slots">
            <div class="actions"><slot name="actions"></slot></div>
            <div class="decorations"><slot name="decorations"></slot></div>
          </div>
        </div>
        <div class="collapsible-body" part="body">
          <slot></slot>
        </div>
      </div>
    `;
  }
};
VscodeCollapsible.styles = styles$k;
__decorate$l([
  n$1({ type: String })
], VscodeCollapsible.prototype, "title", void 0);
__decorate$l([
  n$1()
], VscodeCollapsible.prototype, "description", void 0);
__decorate$l([
  n$1({ type: Boolean, reflect: true })
], VscodeCollapsible.prototype, "open", void 0);
VscodeCollapsible = __decorate$l([
  customElement("vscode-collapsible")
], VscodeCollapsible);
const styles$j = [
  defaultStyles,
  i`
    :host {
      display: block;
      font-family: var(--vscode-font-family, sans-serif);
      font-size: var(--vscode-font-size, 13px);
      font-weight: var(--vscode-font-weight, normal);
      line-height: 1.4em;
      outline: none;
      position: relative;
    }

    .context-menu-item {
      background-color: var(--vscode-menu-background, #1f1f1f);
      color: var(--vscode-menu-foreground, #cccccc);
      display: flex;
      user-select: none;
      white-space: nowrap;
    }

    .ruler {
      border-bottom: 1px solid var(--vscode-menu-separatorBackground, #454545);
      display: block;
      margin: 0 0 4px;
      padding-top: 4px;
      width: 100%;
    }

    .context-menu-item a {
      align-items: center;
      border-color: transparent;
      border-radius: 3px;
      border-style: solid;
      border-width: 1px;
      box-sizing: border-box;
      color: var(--vscode-menu-foreground, #cccccc);
      cursor: pointer;
      display: flex;
      flex: 1 1 auto;
      height: 2em;
      margin-left: 4px;
      margin-right: 4px;
      outline: none;
      position: relative;
      text-decoration: inherit;
    }

    :host([selected]) .context-menu-item a {
      background-color: var(--vscode-menu-selectionBackground, #0078d4);
      border-color: var(--vscode-menu-selectionBorder, transparent);
      color: var(--vscode-menu-selectionForeground, #ffffff);
    }

    .label {
      background: none;
      display: flex;
      flex: 1 1 auto;
      font-size: 12px;
      line-height: 1;
      padding: 0 22px;
      text-decoration: none;
    }

    .keybinding {
      display: block;
      flex: 2 1 auto;
      line-height: 1;
      padding: 0 22px;
      text-align: right;
    }
  `
];
var __decorate$k = function(decorators, target, key, desc) {
  var c = arguments.length, r2 = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r2 = Reflect.decorate(decorators, target, key, desc);
  else for (var i2 = decorators.length - 1; i2 >= 0; i2--) if (d = decorators[i2]) r2 = (c < 3 ? d(r2) : c > 3 ? d(target, key, r2) : d(target, key)) || r2;
  return c > 3 && r2 && Object.defineProperty(target, key, r2), r2;
};
let VscodeContextMenuItem = class VscodeContextMenuItem2 extends VscElement {
  constructor() {
    super(...arguments);
    this.label = "";
    this.keybinding = "";
    this.value = "";
    this.separator = false;
    this.tabindex = 0;
  }
  onItemClick() {
    this.dispatchEvent(new CustomEvent("vsc-click", {
      detail: {
        label: this.label,
        keybinding: this.keybinding,
        value: this.value || this.label,
        separator: this.separator,
        tabindex: this.tabindex
      },
      bubbles: true,
      composed: true
    }));
  }
  render() {
    return x`
      ${this.separator ? x`
            <div class="context-menu-item separator">
              <span class="ruler"></span>
            </div>
          ` : x`
            <div class="context-menu-item">
              <a @click=${this.onItemClick}>
                ${this.label ? x`<span class="label">${this.label}</span>` : E}
                ${this.keybinding ? x`<span class="keybinding">${this.keybinding}</span>` : E}
              </a>
            </div>
          `}
    `;
  }
};
VscodeContextMenuItem.styles = styles$j;
__decorate$k([
  n$1({ type: String })
], VscodeContextMenuItem.prototype, "label", void 0);
__decorate$k([
  n$1({ type: String })
], VscodeContextMenuItem.prototype, "keybinding", void 0);
__decorate$k([
  n$1({ type: String })
], VscodeContextMenuItem.prototype, "value", void 0);
__decorate$k([
  n$1({ type: Boolean, reflect: true })
], VscodeContextMenuItem.prototype, "separator", void 0);
__decorate$k([
  n$1({ type: Number })
], VscodeContextMenuItem.prototype, "tabindex", void 0);
VscodeContextMenuItem = __decorate$k([
  customElement("vscode-context-menu-item")
], VscodeContextMenuItem);
const styles$i = [
  defaultStyles,
  i`
    :host {
      display: block;
      font-family: var(--vscode-font-family, sans-serif);
      font-size: var(--vscode-font-size, 13px);
      font-weight: var(--vscode-font-weight, normal);
      line-height: 1.4em;
      position: relative;
    }

    .context-menu {
      background-color: var(--vscode-menu-background, #1f1f1f);
      border-color: var(--vscode-menu-border, #454545);
      border-radius: 5px;
      border-style: solid;
      border-width: 1px;
      box-shadow: 0 2px 8px var(--vscode-widget-shadow, rgba(0, 0, 0, 0.36));
      color: var(--vscode-menu-foreground, #cccccc);
      padding: 4px 0;
      white-space: nowrap;
    }

    .context-menu:focus {
      outline: 0;
    }
  `
];
var __decorate$j = function(decorators, target, key, desc) {
  var c = arguments.length, r2 = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r2 = Reflect.decorate(decorators, target, key, desc);
  else for (var i2 = decorators.length - 1; i2 >= 0; i2--) if (d = decorators[i2]) r2 = (c < 3 ? d(r2) : c > 3 ? d(target, key, r2) : d(target, key)) || r2;
  return c > 3 && r2 && Object.defineProperty(target, key, r2), r2;
};
let VscodeContextMenu = class VscodeContextMenu2 extends VscElement {
  set data(data) {
    this._data = data;
    const indexes = [];
    data.forEach((v, i2) => {
      if (!v.separator) {
        indexes.push(i2);
      }
    });
    this._clickableItemIndexes = indexes;
  }
  get data() {
    return this._data;
  }
  set show(show) {
    this._show = show;
    this._selectedClickableItemIndex = -1;
    if (show) {
      this.updateComplete.then(() => {
        if (this._wrapperEl) {
          this._wrapperEl.focus();
        }
        requestAnimationFrame(() => {
          document.addEventListener("click", this._onClickOutsideBound, {
            once: true
          });
        });
      });
    }
  }
  get show() {
    return this._show;
  }
  constructor() {
    super();
    this.preventClose = false;
    this.tabIndex = 0;
    this._selectedClickableItemIndex = -1;
    this._show = false;
    this._data = [];
    this._clickableItemIndexes = [];
    this._onClickOutsideBound = this._onClickOutside.bind(this);
    this.addEventListener("keydown", this._onKeyDown);
  }
  _onClickOutside(ev) {
    if (!ev.composedPath().includes(this)) {
      this.show = false;
    }
  }
  _onKeyDown(ev) {
    const { key } = ev;
    if (key === "ArrowUp" || key === "ArrowDown" || key === "Escape" || key === "Enter") {
      ev.preventDefault();
    }
    switch (key) {
      case "ArrowUp":
        this._handleArrowUp();
        break;
      case "ArrowDown":
        this._handleArrowDown();
        break;
      case "Escape":
        this._handleEscape();
        break;
      case "Enter":
        this._handleEnter();
        break;
    }
  }
  _handleArrowUp() {
    if (this._selectedClickableItemIndex === 0) {
      this._selectedClickableItemIndex = this._clickableItemIndexes.length - 1;
    } else {
      this._selectedClickableItemIndex -= 1;
    }
  }
  _handleArrowDown() {
    if (this._selectedClickableItemIndex + 1 < this._clickableItemIndexes.length) {
      this._selectedClickableItemIndex += 1;
    } else {
      this._selectedClickableItemIndex = 0;
    }
  }
  _handleEscape() {
    this.show = false;
    document.removeEventListener("click", this._onClickOutsideBound);
  }
  _dispatchSelectEvent(selectedOption) {
    const { keybinding, label, value, separator, tabindex } = selectedOption;
    this.dispatchEvent(new CustomEvent("vsc-context-menu-select", {
      detail: {
        keybinding,
        label,
        separator,
        tabindex,
        value
      }
    }));
  }
  _dispatchLegacySelectEvent(selectedOption) {
    const { keybinding, label, value, separator, tabindex } = selectedOption;
    const detail = {
      keybinding,
      label,
      value,
      separator,
      tabindex
    };
    this.dispatchEvent(new CustomEvent("vsc-select", {
      detail,
      bubbles: true,
      composed: true
    }));
  }
  _handleEnter() {
    if (this._selectedClickableItemIndex === -1) {
      return;
    }
    const realItemIndex = this._clickableItemIndexes[this._selectedClickableItemIndex];
    const options = this._wrapperEl.querySelectorAll("vscode-context-menu-item");
    const selectedOption = options[realItemIndex];
    this._dispatchLegacySelectEvent(selectedOption);
    this._dispatchSelectEvent(selectedOption);
    if (!this.preventClose) {
      this.show = false;
      document.removeEventListener("click", this._onClickOutsideBound);
    }
  }
  _onItemClick(event) {
    const et = event.currentTarget;
    this._dispatchLegacySelectEvent(et);
    this._dispatchSelectEvent(et);
    if (!this.preventClose) {
      this.show = false;
    }
  }
  _onItemMouseOver(event) {
    const el = event.target;
    const index = el.dataset.index ? +el.dataset.index : -1;
    const found = this._clickableItemIndexes.findIndex((item) => item === index);
    if (found !== -1) {
      this._selectedClickableItemIndex = found;
    }
  }
  _onItemMouseOut() {
    this._selectedClickableItemIndex = -1;
  }
  render() {
    if (!this._show) {
      return x`${E}`;
    }
    const selectedIndex = this._clickableItemIndexes[this._selectedClickableItemIndex];
    return x`
      <div class="context-menu" tabindex="0">
        ${this.data ? this.data.map(({ label = "", keybinding = "", value = "", separator = false, tabindex = 0 }, index) => x`
                <vscode-context-menu-item
                  label=${label}
                  keybinding=${keybinding}
                  value=${value}
                  ?separator=${separator}
                  ?selected=${index === selectedIndex}
                  tabindex=${tabindex}
                  @vsc-click=${this._onItemClick}
                  @mouseover=${this._onItemMouseOver}
                  @mouseout=${this._onItemMouseOut}
                  data-index=${index}
                ></vscode-context-menu-item>
              `) : x`<slot></slot>`}
      </div>
    `;
  }
};
VscodeContextMenu.styles = styles$i;
__decorate$j([
  n$1({ type: Array, attribute: false })
], VscodeContextMenu.prototype, "data", null);
__decorate$j([
  n$1({ type: Boolean, reflect: true, attribute: "prevent-close" })
], VscodeContextMenu.prototype, "preventClose", void 0);
__decorate$j([
  n$1({ type: Boolean, reflect: true })
], VscodeContextMenu.prototype, "show", null);
__decorate$j([
  n$1({ type: Number, reflect: true })
], VscodeContextMenu.prototype, "tabIndex", void 0);
__decorate$j([
  r$2()
], VscodeContextMenu.prototype, "_selectedClickableItemIndex", void 0);
__decorate$j([
  r$2()
], VscodeContextMenu.prototype, "_show", void 0);
__decorate$j([
  e$3(".context-menu")
], VscodeContextMenu.prototype, "_wrapperEl", void 0);
VscodeContextMenu = __decorate$j([
  customElement("vscode-context-menu")
], VscodeContextMenu);
const styles$h = [
  defaultStyles,
  i`
    :host {
      display: block;
      max-width: 727px;
    }
  `
];
var __decorate$i = function(decorators, target, key, desc) {
  var c = arguments.length, r2 = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r2 = Reflect.decorate(decorators, target, key, desc);
  else for (var i2 = decorators.length - 1; i2 >= 0; i2--) if (d = decorators[i2]) r2 = (c < 3 ? d(r2) : c > 3 ? d(target, key, r2) : d(target, key)) || r2;
  return c > 3 && r2 && Object.defineProperty(target, key, r2), r2;
};
var FormGroupLayout;
(function(FormGroupLayout2) {
  FormGroupLayout2["HORIZONTAL"] = "horizontal";
  FormGroupLayout2["VERTICAL"] = "vertical";
})(FormGroupLayout || (FormGroupLayout = {}));
const isTextInput = (el) => {
  return ["vscode-textfield", "vscode-textarea"].includes(el.tagName.toLocaleLowerCase());
};
const isSingleSelect = (el) => {
  return el.tagName.toLocaleLowerCase() === "vscode-single-select";
};
const isMultiSelect = (el) => {
  return el.tagName.toLocaleLowerCase() === "vscode-multi-select";
};
const isCheckbox = (el) => {
  return el.tagName.toLocaleLowerCase() === "vscode-checkbox";
};
const isRadio = (el) => {
  return el.tagName.toLocaleLowerCase() === "vscode-radio";
};
let VscodeFormContainer = class VscodeFormContainer2 extends VscElement {
  constructor() {
    super(...arguments);
    this.breakpoint = 490;
    this._responsive = false;
    this._firstUpdateComplete = false;
    this._resizeObserverCallbackBound = this._resizeObserverCallback.bind(this);
  }
  set responsive(isResponsive) {
    this._responsive = isResponsive;
    if (this._firstUpdateComplete) {
      if (isResponsive) {
        this._activateResponsiveLayout();
      } else {
        this._deactivateResizeObserver();
      }
    }
  }
  get responsive() {
    return this._responsive;
  }
  /** @deprecated - Use the native `<form>` element instead. */
  get data() {
    return this._collectFormData();
  }
  _collectFormData() {
    const query = [
      "vscode-textfield",
      "vscode-textarea",
      "vscode-single-select",
      "vscode-multi-select",
      "vscode-checkbox",
      "vscode-radio"
    ].join(",");
    const vscFormWidgets = this.querySelectorAll(query);
    const data = {};
    vscFormWidgets.forEach((widget) => {
      if (!widget.hasAttribute("name")) {
        return;
      }
      const name = widget.getAttribute("name");
      if (!name) {
        return;
      }
      if (isCheckbox(widget) && widget.checked) {
        data[name] = Array.isArray(data[name]) ? [...data[name], widget.value] : [widget.value];
      } else if (isMultiSelect(widget)) {
        data[name] = widget.value;
      } else if (isCheckbox(widget) && !widget.checked) {
        data[name] = Array.isArray(data[name]) ? data[name] : [];
      } else if (isRadio(widget) && widget.checked || isTextInput(widget) || isSingleSelect(widget)) {
        data[name] = widget.value;
      } else if (isRadio(widget) && !widget.checked) {
        data[name] = data[name] ? data[name] : "";
      }
    });
    return data;
  }
  _toggleCompactLayout(layout) {
    this._assignedFormGroups.forEach((group) => {
      if (!group.dataset.originalVariant) {
        group.dataset.originalVariant = group.variant;
      }
      const oVariant = group.dataset.originalVariant;
      if (layout === FormGroupLayout.VERTICAL && oVariant === "horizontal") {
        group.variant = "vertical";
      } else {
        group.variant = oVariant;
      }
      const checkboxOrRadioGroup = group.querySelectorAll("vscode-checkbox-group, vscode-radio-group");
      checkboxOrRadioGroup.forEach((widgetGroup) => {
        if (!widgetGroup.dataset.originalVariant) {
          widgetGroup.dataset.originalVariant = widgetGroup.variant;
        }
        const originalVariant = widgetGroup.dataset.originalVariant;
        if (layout === FormGroupLayout.HORIZONTAL && originalVariant === FormGroupLayout.HORIZONTAL) {
          widgetGroup.variant = "horizontal";
        } else {
          widgetGroup.variant = "vertical";
        }
      });
    });
  }
  _resizeObserverCallback(entries) {
    let wrapperWidth = 0;
    for (const entry of entries) {
      wrapperWidth = entry.contentRect.width;
    }
    const nextLayout = wrapperWidth < this.breakpoint ? FormGroupLayout.VERTICAL : FormGroupLayout.HORIZONTAL;
    if (nextLayout !== this._currentFormGroupLayout) {
      this._toggleCompactLayout(nextLayout);
      this._currentFormGroupLayout = nextLayout;
    }
  }
  _activateResponsiveLayout() {
    this._resizeObserver = new ResizeObserver(this._resizeObserverCallbackBound);
    this._resizeObserver.observe(this._wrapperElement);
  }
  _deactivateResizeObserver() {
    this._resizeObserver?.disconnect();
    this._resizeObserver = null;
  }
  firstUpdated() {
    this._firstUpdateComplete = true;
    if (this._responsive) {
      this._activateResponsiveLayout();
    }
  }
  render() {
    return x`
      <div class="wrapper">
        <slot></slot>
      </div>
    `;
  }
};
VscodeFormContainer.styles = styles$h;
__decorate$i([
  n$1({ type: Boolean, reflect: true })
], VscodeFormContainer.prototype, "responsive", null);
__decorate$i([
  n$1({ type: Number })
], VscodeFormContainer.prototype, "breakpoint", void 0);
__decorate$i([
  n$1({ type: Object })
], VscodeFormContainer.prototype, "data", null);
__decorate$i([
  e$3(".wrapper")
], VscodeFormContainer.prototype, "_wrapperElement", void 0);
__decorate$i([
  o({ selector: "vscode-form-group" })
], VscodeFormContainer.prototype, "_assignedFormGroups", void 0);
VscodeFormContainer = __decorate$i([
  customElement("vscode-form-container")
], VscodeFormContainer);
const styles$g = [
  defaultStyles,
  i`
    :host {
      display: block;
      line-height: 1.4em;
      margin-bottom: 4px;
      margin-top: 4px;
      max-width: 720px;
      opacity: 0.9;
    }

    :host([vertical]) {
      margin-left: 0;
    }
  `
];
var __decorate$h = function(decorators, target, key, desc) {
  var c = arguments.length, r2 = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r2 = Reflect.decorate(decorators, target, key, desc);
  else for (var i2 = decorators.length - 1; i2 >= 0; i2--) if (d = decorators[i2]) r2 = (c < 3 ? d(r2) : c > 3 ? d(target, key, r2) : d(target, key)) || r2;
  return c > 3 && r2 && Object.defineProperty(target, key, r2), r2;
};
const lightDOMStyles = new CSSStyleSheet();
lightDOMStyles.replaceSync(`
  vscode-form-helper * {
    margin: 0;
  }

  vscode-form-helper *:not(:last-child) {
    margin-bottom: 8px;
  }
`);
let VscodeFormHelper = class VscodeFormHelper2 extends VscElement {
  constructor() {
    super();
    this._injectLightDOMStyles();
  }
  _injectLightDOMStyles() {
    const found = document.adoptedStyleSheets.find((s) => s === lightDOMStyles);
    if (!found) {
      document.adoptedStyleSheets.push(lightDOMStyles);
    }
  }
  render() {
    return x`<slot></slot>`;
  }
};
VscodeFormHelper.styles = styles$g;
VscodeFormHelper = __decorate$h([
  customElement("vscode-form-helper")
], VscodeFormHelper);
var __decorate$g = function(decorators, target, key, desc) {
  var c = arguments.length, r2 = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r2 = Reflect.decorate(decorators, target, key, desc);
  else for (var i2 = decorators.length - 1; i2 >= 0; i2--) if (d = decorators[i2]) r2 = (c < 3 ? d(r2) : c > 3 ? d(target, key, r2) : d(target, key)) || r2;
  return c > 3 && r2 && Object.defineProperty(target, key, r2), r2;
};
let VscodeMultiSelect = class VscodeMultiSelect2 extends VscodeSelectBase {
  set selectedIndexes(val) {
    this._opts.selectedIndexes = val;
  }
  get selectedIndexes() {
    return this._opts.selectedIndexes;
  }
  set value(val) {
    this._opts.multiSelectValue = val;
    if (this._opts.selectedIndexes.length > 0) {
      this._requestedValueToSetLater = [];
    } else {
      this._requestedValueToSetLater = Array.isArray(val) ? val : [val];
    }
    this._setFormValue();
    this._manageRequired();
  }
  get value() {
    return this._opts.multiSelectValue;
  }
  get form() {
    return this._internals.form;
  }
  /** @internal */
  get type() {
    return "select-multiple";
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
  selectAll() {
    this._opts.selectAll();
  }
  selectNone() {
    this._opts.selectNone();
  }
  constructor() {
    super();
    this.defaultValue = [];
    this.required = false;
    this.name = void 0;
    this._requestedValueToSetLater = [];
    this._onOptionClick = (ev) => {
      const composedPath = ev.composedPath();
      const optEl = composedPath.find((et) => {
        if ("matches" in et) {
          return et.matches("li.option");
        }
        return false;
      });
      if (!optEl) {
        return;
      }
      const isPlaceholderOption = optEl.classList.contains("placeholder");
      if (isPlaceholderOption) {
        this._createAndSelectSuggestedOption();
        return;
      }
      const index = Number(optEl.dataset.index);
      this._opts.toggleOptionSelected(index);
      this._setFormValue();
      this._manageRequired();
      this._dispatchChangeEvent();
    };
    this._opts.multiSelect = true;
    this._internals = this.attachInternals();
  }
  connectedCallback() {
    super.connectedCallback();
    this.updateComplete.then(() => {
      this._setDefaultValue();
      this._manageRequired();
    });
  }
  /** @internal */
  formResetCallback() {
    this.updateComplete.then(() => {
      this.value = this.defaultValue;
    });
  }
  /** @internal */
  formStateRestoreCallback(state, _mode) {
    const entries = Array.from(state.entries()).map((e2) => String(e2[1]));
    this.updateComplete.then(() => {
      this.value = entries;
    });
  }
  _setDefaultValue() {
    if (Array.isArray(this.defaultValue) && this.defaultValue.length > 0) {
      const val = this.defaultValue.map((v) => String(v));
      this.value = val;
    }
  }
  _dispatchChangeEvent() {
    this.dispatchEvent(new CustomEvent("vsc-change", {
      detail: {
        selectedIndexes: this._opts.selectedIndexes,
        value: this._opts.multiSelectValue
      }
    }));
    super._dispatchChangeEvent();
  }
  _onFaceClick() {
    super._onFaceClick();
    this._opts.activeIndex = 0;
  }
  _toggleComboboxDropdown() {
    super._toggleComboboxDropdown();
    this._opts.activeIndex = -1;
  }
  _manageRequired() {
    const { value } = this;
    if (value.length === 0 && this.required) {
      this._internals.setValidity({
        valueMissing: true
      }, "Please select an item in the list.", this._faceElement);
    } else {
      this._internals.setValidity({});
    }
  }
  _setFormValue() {
    const fd = new FormData();
    this._values.forEach((v) => {
      fd.append(this.name ?? "", v);
    });
    this._internals.setFormValue(fd);
  }
  async _createAndSelectSuggestedOption() {
    super._createAndSelectSuggestedOption();
    const nextIndex = this._createSuggestedOption();
    await this.updateComplete;
    this.selectedIndexes = [...this.selectedIndexes, nextIndex];
    this._dispatchChangeEvent();
    const opCreateEvent = new CustomEvent("vsc-multi-select-create-option", { detail: { value: this._opts.getOptionByIndex(nextIndex)?.value ?? "" } });
    this.dispatchEvent(opCreateEvent);
    this.open = false;
    this._isPlaceholderOptionActive = false;
  }
  //#region event handlers
  _onSlotChange() {
    super._onSlotChange();
    if (this._requestedValueToSetLater.length > 0) {
      this._opts.expandMultiSelection(this._requestedValueToSetLater);
      this._requestedValueToSetLater = this._requestedValueToSetLater.filter((v) => this._opts.findOptionIndex(v) === -1);
    }
  }
  _onEnterKeyDown(ev) {
    super._onEnterKeyDown(ev);
    if (!this.open) {
      this._opts.filterPattern = "";
      this.open = true;
    } else {
      if (this._isPlaceholderOptionActive) {
        this._createAndSelectSuggestedOption();
      } else {
        this._opts.toggleActiveMultiselectOption();
        this._setFormValue();
        this._manageRequired();
        this._dispatchChangeEvent();
      }
    }
  }
  _onMultiAcceptClick() {
    this.open = false;
  }
  _onMultiDeselectAllClick() {
    this._opts.selectedIndexes = [];
    this._values = [];
    this._options = this._options.map((op) => ({ ...op, selected: false }));
    this._manageRequired();
    this._dispatchChangeEvent();
  }
  _onMultiSelectAllClick() {
    this._opts.selectedIndexes = [];
    this._values = [];
    this._options = this._options.map((op) => ({ ...op, selected: true }));
    this._options.forEach((op, index) => {
      this._selectedIndexes.push(index);
      this._values.push(op.value);
      this._dispatchChangeEvent();
    });
    this._setFormValue();
    this._manageRequired();
  }
  //#endregion
  //#region render functions
  _renderLabel() {
    switch (this._opts.selectedIndexes.length) {
      case 0:
        return x`<span class="select-face-badge no-item">0 Selected</span>`;
      default:
        return x`<span class="select-face-badge"
          >${this._opts.selectedIndexes.length} Selected</span
        >`;
    }
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
        ${this._opts.multiSelect ? this._renderLabel() : E}
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
  _renderSelectFace() {
    const activeDescendant = this._opts.activeIndex > -1 ? `op-${this._opts.activeIndex}` : "";
    const expanded = this.open ? "true" : "false";
    return x`
      <div
        aria-activedescendant=${o$1(this._opts.multiSelect ? void 0 : activeDescendant)}
        aria-controls="select-listbox"
        aria-expanded=${o$1(this._opts.multiSelect ? void 0 : expanded)}
        aria-haspopup="listbox"
        aria-label=${o$1(this.label ?? void 0)}
        class="select-face face multiselect"
        @click=${this._onFaceClick}
        .tabIndex=${this.disabled ? -1 : 0}
      >
        ${this._renderLabel()} ${chevronDownIcon}
      </div>
    `;
  }
  _renderDropdownControls() {
    return this._filteredOptions.length > 0 ? x`
          <div class="dropdown-controls">
            <button
              type="button"
              @click=${this._onMultiSelectAllClick}
              title="Select all"
              class="action-icon"
              id="select-all"
            >
              <vscode-icon name="checklist"></vscode-icon>
            </button>
            <button
              type="button"
              @click=${this._onMultiDeselectAllClick}
              title="Deselect all"
              class="action-icon"
              id="select-none"
            >
              <vscode-icon name="clear-all"></vscode-icon>
            </button>
            <vscode-button
              class="button-accept"
              @click=${this._onMultiAcceptClick}
              >OK</vscode-button
            >
          </div>
        ` : x`${E}`;
  }
  render() {
    return x`
      <div class="multi-select">
        <slot class="main-slot" @slotchange=${this._onSlotChange}></slot>
        ${this.combobox ? this._renderComboboxFace() : this._renderSelectFace()}
        ${this._renderDropdown()}
      </div>
    `;
  }
};
VscodeMultiSelect.styles = styles$o;
VscodeMultiSelect.shadowRootOptions = {
  ...i$1.shadowRootOptions,
  delegatesFocus: true
};
VscodeMultiSelect.formAssociated = true;
__decorate$g([
  n$1({ type: Array, attribute: "default-value" })
], VscodeMultiSelect.prototype, "defaultValue", void 0);
__decorate$g([
  n$1({ type: Boolean, reflect: true })
], VscodeMultiSelect.prototype, "required", void 0);
__decorate$g([
  n$1({ reflect: true })
], VscodeMultiSelect.prototype, "name", void 0);
__decorate$g([
  n$1({ type: Array, attribute: false })
], VscodeMultiSelect.prototype, "selectedIndexes", null);
__decorate$g([
  n$1({ type: Array })
], VscodeMultiSelect.prototype, "value", null);
__decorate$g([
  e$3(".face")
], VscodeMultiSelect.prototype, "_faceElement", void 0);
VscodeMultiSelect = __decorate$g([
  customElement("vscode-multi-select")
], VscodeMultiSelect);
const styles$f = [
  defaultStyles,
  i`
    :host {
      align-items: center;
      display: block;
      height: 28px;
      margin: 0;
      outline: none;
      width: 28px;
    }

    .progress {
      height: 100%;
      width: 100%;
    }

    .background {
      fill: none;
      stroke: transparent;
      stroke-width: 2px;
    }

    .indeterminate-indicator-1 {
      fill: none;
      stroke: var(--vscode-progressBar-background, #0078d4);
      stroke-width: 2px;
      stroke-linecap: square;
      transform-origin: 50% 50%;
      transform: rotate(-90deg);
      transition: all 0.2s ease-in-out;
      animation: spin-infinite 2s linear infinite;
    }

    @keyframes spin-infinite {
      0% {
        stroke-dasharray: 0.01px 43.97px;
        transform: rotate(0deg);
      }
      50% {
        stroke-dasharray: 21.99px 21.99px;
        transform: rotate(450deg);
      }
      100% {
        stroke-dasharray: 0.01px 43.97px;
        transform: rotate(1080deg);
      }
    }
  `
];
var __decorate$f = function(decorators, target, key, desc) {
  var c = arguments.length, r2 = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r2 = Reflect.decorate(decorators, target, key, desc);
  else for (var i2 = decorators.length - 1; i2 >= 0; i2--) if (d = decorators[i2]) r2 = (c < 3 ? d(r2) : c > 3 ? d(target, key, r2) : d(target, key)) || r2;
  return c > 3 && r2 && Object.defineProperty(target, key, r2), r2;
};
let VscodeProgressRing = class VscodeProgressRing2 extends VscElement {
  constructor() {
    super(...arguments);
    this.ariaLabel = "Loading";
    this.ariaLive = "assertive";
    this.role = "alert";
  }
  render() {
    return x`<svg class="progress" part="progress" viewBox="0 0 16 16">
      <circle
        class="background"
        part="background"
        cx="8px"
        cy="8px"
        r="7px"
      ></circle>
      <circle
        class="indeterminate-indicator-1"
        part="indeterminate-indicator-1"
        cx="8px"
        cy="8px"
        r="7px"
      ></circle>
    </svg>`;
  }
};
VscodeProgressRing.styles = styles$f;
__decorate$f([
  n$1({ reflect: true, attribute: "aria-label" })
], VscodeProgressRing.prototype, "ariaLabel", void 0);
__decorate$f([
  n$1({ reflect: true, attribute: "aria-live" })
], VscodeProgressRing.prototype, "ariaLive", void 0);
__decorate$f([
  n$1({ reflect: true })
], VscodeProgressRing.prototype, "role", void 0);
VscodeProgressRing = __decorate$f([
  customElement("vscode-progress-ring")
], VscodeProgressRing);
const styles$e = [
  defaultStyles,
  baseStyles,
  i`
    :host(:invalid) .icon,
    :host([invalid]) .icon {
      background-color: var(--vscode-inputValidation-errorBackground, #5a1d1d);
      border-color: var(--vscode-inputValidation-errorBorder, #be1100);
    }

    .icon {
      border-radius: 9px;
    }

    .icon.checked:before {
      background-color: currentColor;
      border-radius: 4px;
      content: '';
      height: 8px;
      left: 50%;
      margin: -4px 0 0 -4px;
      position: absolute;
      top: 50%;
      width: 8px;
    }

    :host(:focus):host(:not([disabled])) .icon {
      outline: 1px solid var(--vscode-focusBorder, #0078d4);
      outline-offset: -1px;
    }
  `
];
var __decorate$e = function(decorators, target, key, desc) {
  var c = arguments.length, r2 = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r2 = Reflect.decorate(decorators, target, key, desc);
  else for (var i2 = decorators.length - 1; i2 >= 0; i2--) if (d = decorators[i2]) r2 = (c < 3 ? d(r2) : c > 3 ? d(target, key, r2) : d(target, key)) || r2;
  return c > 3 && r2 && Object.defineProperty(target, key, r2), r2;
};
let VscodeRadio = class VscodeRadio2 extends LabelledCheckboxOrRadioMixin(FormButtonWidgetBase) {
  constructor() {
    super();
    this.autofocus = false;
    this.checked = false;
    this.defaultChecked = false;
    this.invalid = false;
    this.name = "";
    this.value = "";
    this.disabled = false;
    this.required = false;
    this.role = "radio";
    this.tabIndex = 0;
    this._slottedText = "";
    this.type = "radio";
    this._handleClick = () => {
      if (this.disabled) {
        return;
      }
      if (!this.checked) {
        this._checkButton();
        this._handleValueChange();
        this._dispatchCustomEvent();
        this.dispatchEvent(new Event("change", { bubbles: true }));
      }
    };
    this._handleKeyDown = (ev) => {
      if (!this.disabled && (ev.key === "Enter" || ev.key === " ")) {
        ev.preventDefault();
        if (ev.key === " " && !this.checked) {
          this.checked = true;
          this._handleValueChange();
          this._dispatchCustomEvent();
          this.dispatchEvent(new Event("change", { bubbles: true }));
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
    this.addEventListener("click", this._handleClick);
    this._handleValueChange();
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    this.removeEventListener("keydown", this._handleKeyDown);
    this.removeEventListener("click", this._handleClick);
  }
  update(changedProperties) {
    super.update(changedProperties);
    if (changedProperties.has("checked")) {
      this._handleValueChange();
    }
    if (changedProperties.has("required")) {
      this._handleValueChange();
    }
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
  checkValidity() {
    return this._internals.checkValidity();
  }
  reportValidity() {
    return this._internals.reportValidity();
  }
  /** @internal */
  formResetCallback() {
    const radios = this._getRadios();
    radios.forEach((r2) => {
      r2.checked = r2.defaultChecked;
    });
    this.updateComplete.then(() => {
      this._handleValueChange();
    });
  }
  /** @internal */
  formStateRestoreCallback(state, _mode) {
    if (this.value === state && state !== "") {
      this.checked = true;
    }
  }
  _dispatchCustomEvent() {
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
  _getRadios() {
    const root = this.getRootNode({ composed: true });
    if (!root) {
      return [];
    }
    const radios = root.querySelectorAll(`vscode-radio[name="${this.name}"]`);
    return Array.from(radios);
  }
  _uncheckOthers(radios) {
    radios.forEach((r2) => {
      if (r2 !== this) {
        r2.checked = false;
      }
    });
  }
  _checkButton() {
    const radios = this._getRadios();
    this.checked = true;
    radios.forEach((r2) => {
      if (r2 !== this) {
        r2.checked = false;
      }
    });
  }
  /**
   * @internal
   */
  setComponentValidity(isValid) {
    if (isValid) {
      this._internals.setValidity({});
    } else {
      this._internals.setValidity({
        valueMissing: true
      }, "Please select one of these options.", this._inputEl);
    }
  }
  _setGroupValidity(radios, isValid) {
    this.updateComplete.then(() => {
      radios.forEach((r2) => {
        r2.setComponentValidity(isValid);
      });
    });
  }
  _setActualFormValue() {
    let actualValue = "";
    if (this.checked) {
      actualValue = !this.value ? "on" : this.value;
    } else {
      actualValue = null;
    }
    this._internals.setFormValue(actualValue);
  }
  _handleValueChange() {
    const radios = this._getRadios();
    const anyRequired = radios.some((r2) => {
      return r2.required;
    });
    this._setActualFormValue();
    if (this.checked) {
      this._uncheckOthers(radios);
      this._setGroupValidity(radios, true);
    } else {
      const anyChecked = !!radios.find((r2) => r2.checked);
      const isInvalid = anyRequired && !anyChecked;
      this._setGroupValidity(radios, !isInvalid);
    }
  }
  render() {
    const iconClasses = e$2({
      icon: true,
      checked: this.checked
    });
    const labelInnerClasses = e$2({
      "label-inner": true,
      "is-slot-empty": this._slottedText === ""
    });
    return x`
      <div class="wrapper">
        <input
          ?autofocus=${this.autofocus}
          id="input"
          class="radio"
          type="checkbox"
          ?checked=${this.checked}
          value=${this.value}
          tabindex=${this.tabIndex}
        >
        <div class=${iconClasses}></div>
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
VscodeRadio.styles = styles$e;
VscodeRadio.formAssociated = true;
VscodeRadio.shadowRootOptions = {
  ...i$1.shadowRootOptions,
  delegatesFocus: true
};
__decorate$e([
  n$1({ type: Boolean, reflect: true })
], VscodeRadio.prototype, "autofocus", void 0);
__decorate$e([
  n$1({ type: Boolean, reflect: true })
], VscodeRadio.prototype, "checked", void 0);
__decorate$e([
  n$1({ type: Boolean, reflect: true, attribute: "default-checked" })
], VscodeRadio.prototype, "defaultChecked", void 0);
__decorate$e([
  n$1({ type: Boolean, reflect: true })
], VscodeRadio.prototype, "invalid", void 0);
__decorate$e([
  n$1({ reflect: true })
], VscodeRadio.prototype, "name", void 0);
__decorate$e([
  n$1()
], VscodeRadio.prototype, "value", void 0);
__decorate$e([
  n$1({ type: Boolean, reflect: true })
], VscodeRadio.prototype, "disabled", void 0);
__decorate$e([
  n$1({ type: Boolean, reflect: true })
], VscodeRadio.prototype, "required", void 0);
__decorate$e([
  n$1({ reflect: true })
], VscodeRadio.prototype, "role", void 0);
__decorate$e([
  n$1({ type: Number, reflect: true })
], VscodeRadio.prototype, "tabIndex", void 0);
__decorate$e([
  r$2()
], VscodeRadio.prototype, "_slottedText", void 0);
__decorate$e([
  e$3("#input")
], VscodeRadio.prototype, "_inputEl", void 0);
__decorate$e([
  n$1()
], VscodeRadio.prototype, "type", void 0);
VscodeRadio = __decorate$e([
  customElement("vscode-radio")
], VscodeRadio);
const styles$d = [
  defaultStyles,
  i`
    :host {
      display: block;
    }

    .wrapper {
      display: flex;
      flex-wrap: wrap;
    }

    :host([variant='vertical']) .wrapper {
      display: block;
    }

    ::slotted(vscode-radio) {
      margin-right: 20px;
    }

    ::slotted(vscode-radio:last-child) {
      margin-right: 0;
    }

    :host([variant='vertical']) ::slotted(vscode-radio) {
      display: block;
      margin-bottom: 15px;
    }

    :host([variant='vertical']) ::slotted(vscode-radio:last-child) {
      margin-bottom: 0;
    }
  `
];
var __decorate$d = function(decorators, target, key, desc) {
  var c = arguments.length, r2 = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r2 = Reflect.decorate(decorators, target, key, desc);
  else for (var i2 = decorators.length - 1; i2 >= 0; i2--) if (d = decorators[i2]) r2 = (c < 3 ? d(r2) : c > 3 ? d(target, key, r2) : d(target, key)) || r2;
  return c > 3 && r2 && Object.defineProperty(target, key, r2), r2;
};
let VscodeRadioGroup = class VscodeRadioGroup2 extends VscElement {
  constructor() {
    super(...arguments);
    this.variant = "horizontal";
    this.role = "radiogroup";
    this._focusedRadio = -1;
    this._checkedRadio = -1;
    this._firstContentLoaded = false;
    this._onKeyDownBound = this._onKeyDown.bind(this);
  }
  connectedCallback() {
    super.connectedCallback();
    this.addEventListener("keydown", this._onKeyDownBound);
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    this.removeEventListener("keydown", this._onKeyDownBound);
  }
  _uncheckPreviousChecked(prevChecked, prevFocused) {
    if (prevChecked !== -1) {
      this._radios[prevChecked].checked = false;
    }
    if (prevFocused !== -1) {
      this._radios[prevFocused].tabIndex = -1;
    }
  }
  _afterCheck() {
    this._focusedRadio = this._checkedRadio;
    this._radios[this._checkedRadio].checked = true;
    this._radios[this._checkedRadio].tabIndex = 0;
    this._radios[this._checkedRadio].focus();
  }
  _checkPrev() {
    const prevChecked = this._radios.findIndex((r2) => r2.checked);
    const prevFocused = this._radios.findIndex((r2) => r2.focused);
    const startPos = prevFocused !== -1 ? prevFocused : prevChecked;
    this._uncheckPreviousChecked(prevChecked, prevFocused);
    if (startPos === -1) {
      this._checkedRadio = this._radios.length - 1;
    } else if (startPos - 1 >= 0) {
      this._checkedRadio = startPos - 1;
    } else {
      this._checkedRadio = this._radios.length - 1;
    }
    this._afterCheck();
  }
  _checkNext() {
    const prevChecked = this._radios.findIndex((r2) => r2.checked);
    const prevFocused = this._radios.findIndex((r2) => r2.focused);
    const startPos = prevFocused !== -1 ? prevFocused : prevChecked;
    this._uncheckPreviousChecked(prevChecked, prevFocused);
    if (startPos === -1) {
      this._checkedRadio = 0;
    } else if (startPos + 1 < this._radios.length) {
      this._checkedRadio = startPos + 1;
    } else {
      this._checkedRadio = 0;
    }
    this._afterCheck();
  }
  _onKeyDown(ev) {
    const { key } = ev;
    const listenedKeys = ["ArrowLeft", "ArrowUp", "ArrowRight", "ArrowDown"];
    if (listenedKeys.includes(key)) {
      ev.preventDefault();
    }
    if (key === "ArrowRight" || key === "ArrowDown") {
      this._checkNext();
    }
    if (key === "ArrowLeft" || key === "ArrowUp") {
      this._checkPrev();
    }
  }
  _onChange(ev) {
    const clickedIndex = this._radios.findIndex((r2) => r2 === ev.target);
    if (clickedIndex !== -1) {
      if (this._focusedRadio !== -1) {
        this._radios[this._focusedRadio].tabIndex = -1;
      }
      if (this._checkedRadio !== -1 && this._checkedRadio !== clickedIndex) {
        this._radios[this._checkedRadio].checked = false;
      }
      this._focusedRadio = clickedIndex;
      this._checkedRadio = clickedIndex;
      this._radios[clickedIndex].tabIndex = 0;
    }
  }
  _onSlotChange() {
    if (!this._firstContentLoaded) {
      const autoFocusedRadio = this._radios.findIndex((r2) => r2.autofocus);
      if (autoFocusedRadio > -1) {
        this._focusedRadio = autoFocusedRadio;
      }
      this._firstContentLoaded = true;
    }
    this._radios.forEach((r2, i2) => {
      if (this._focusedRadio > -1) {
        r2.tabIndex = i2 === this._focusedRadio ? 0 : -1;
      } else {
        r2.tabIndex = i2 === 0 ? 0 : -1;
      }
    });
  }
  render() {
    return x`
      <div class="wrapper">
        <slot
          @slotchange=${this._onSlotChange}
          @vsc-change=${this._onChange}
        ></slot>
      </div>
    `;
  }
};
VscodeRadioGroup.styles = styles$d;
__decorate$d([
  n$1({ reflect: true })
], VscodeRadioGroup.prototype, "variant", void 0);
__decorate$d([
  n$1({ reflect: true })
], VscodeRadioGroup.prototype, "role", void 0);
__decorate$d([
  o({ selector: "vscode-radio" })
], VscodeRadioGroup.prototype, "_radios", void 0);
__decorate$d([
  r$2()
], VscodeRadioGroup.prototype, "_focusedRadio", void 0);
__decorate$d([
  r$2()
], VscodeRadioGroup.prototype, "_checkedRadio", void 0);
VscodeRadioGroup = __decorate$d([
  customElement("vscode-radio-group")
], VscodeRadioGroup);
const styles$c = [
  defaultStyles,
  i`
    :host {
      --separator-border: var(--vscode-editorWidget-border, #454545);

      border: 1px solid var(--vscode-editorWidget-border, #454545);
      display: block;
      overflow: hidden;
      position: relative;
    }

    ::slotted(*) {
      height: 100%;
      width: 100%;
    }

    ::slotted(vscode-split-layout) {
      border: 0;
    }

    .wrapper {
      display: flex;
      height: 100%;
      width: 100%;
    }

    .wrapper.horizontal {
      flex-direction: column;
    }

    .start {
      box-sizing: border-box;
      flex: 1;
      min-height: 0;
      min-width: 0;
    }

    :host([split='vertical']) .start {
      border-right: 1px solid var(--separator-border);
    }

    :host([split='horizontal']) .start {
      border-bottom: 1px solid var(--separator-border);
    }

    .end {
      flex: 1;
      min-height: 0;
      min-width: 0;
    }

    :host([split='vertical']) .start,
    :host([split='vertical']) .end {
      height: 100%;
    }

    :host([split='horizontal']) .start,
    :host([split='horizontal']) .end {
      width: 100%;
    }

    .handle-overlay {
      display: none;
      height: 100%;
      left: 0;
      position: absolute;
      top: 0;
      width: 100%;
      z-index: 1;
    }

    .handle-overlay.active {
      display: block;
    }

    .handle-overlay.split-vertical {
      cursor: ew-resize;
    }

    .handle-overlay.split-horizontal {
      cursor: ns-resize;
    }

    .handle {
      background-color: transparent;
      position: absolute;
      z-index: 2;
    }

    .handle.hover {
      transition: background-color 0.1s ease-out 0.3s;
      background-color: var(--vscode-sash-hoverBorder, #0078d4);
    }

    .handle.hide {
      background-color: transparent;
      transition: background-color 0.1s ease-out;
    }

    .handle.split-vertical {
      cursor: ew-resize;
      height: 100%;
    }

    .handle.split-horizontal {
      cursor: ns-resize;
      width: 100%;
    }
  `
];
var __decorate$c = function(decorators, target, key, desc) {
  var c = arguments.length, r2 = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r2 = Reflect.decorate(decorators, target, key, desc);
  else for (var i2 = decorators.length - 1; i2 >= 0; i2--) if (d = decorators[i2]) r2 = (c < 3 ? d(r2) : c > 3 ? d(target, key, r2) : d(target, key)) || r2;
  return c > 3 && r2 && Object.defineProperty(target, key, r2), r2;
};
var VscodeSplitLayout_1;
const DEFAULT_INITIAL_POSITION = "50%";
const DEFAULT_HANDLE_SIZE = 4;
const parseValue = (raw) => {
  if (!raw) {
    return { value: 0, unit: "pixel" };
  }
  let unit;
  let rawVal;
  if (raw.endsWith("%")) {
    unit = "percent";
    rawVal = +raw.substring(0, raw.length - 1);
  } else if (raw.endsWith("px")) {
    unit = "pixel";
    rawVal = +raw.substring(0, raw.length - 2);
  } else {
    unit = "pixel";
    rawVal = +raw;
  }
  const value = isNaN(rawVal) ? 0 : rawVal;
  return { unit, value };
};
const pxToPercent = (current, max) => {
  return max === 0 ? 0 : Math.min(100, current / max * 100);
};
const percentToPx = (current, max) => {
  return max * (current / 100);
};
let VscodeSplitLayout = VscodeSplitLayout_1 = class VscodeSplitLayout2 extends VscElement {
  /**
   * Direction of the divider.
   */
  set split(newVal) {
    if (this._split === newVal) {
      return;
    }
    this._split = newVal;
    this.resetHandlePosition();
  }
  get split() {
    return this._split;
  }
  /**
   * Set the handle position programmatically. The value must include a unit,
   * either `%` or `px`. If no unit is specified, the value is interpreted as
   * `px`.
   */
  set handlePosition(newVal) {
    this._rawHandlePosition = newVal;
    this._handlePositionPropChanged();
  }
  get handlePosition() {
    return this._rawHandlePosition;
  }
  /**
   * The size of the fixed pane will not change when the component is resized.
   */
  set fixedPane(newVal) {
    this._fixedPane = newVal;
    this._fixedPanePropChanged();
  }
  get fixedPane() {
    return this._fixedPane;
  }
  constructor() {
    super();
    this._split = "vertical";
    this.resetOnDblClick = false;
    this.handleSize = 4;
    this.initialHandlePosition = DEFAULT_INITIAL_POSITION;
    this._fixedPane = "none";
    this._handlePosition = 0;
    this._isDragActive = false;
    this._hover = false;
    this._hide = false;
    this._boundRect = new DOMRect();
    this._handleOffset = 0;
    this._wrapperObserved = false;
    this._fixedPaneSize = 0;
    this._handleResize = (entries) => {
      const rect = entries[0].contentRect;
      const { width, height } = rect;
      this._boundRect = rect;
      const max = this.split === "vertical" ? width : height;
      if (this.fixedPane === "start") {
        this._handlePosition = this._fixedPaneSize;
      }
      if (this.fixedPane === "end") {
        this._handlePosition = max - this._fixedPaneSize;
      }
    };
    this._handleMouseUp = (ev) => {
      this._isDragActive = false;
      if (ev.target !== this) {
        this._hover = false;
        this._hide = true;
      }
      window.removeEventListener("mouseup", this._handleMouseUp);
      window.removeEventListener("mousemove", this._handleMouseMove);
      const { width, height } = this._boundRect;
      const max = this.split === "vertical" ? width : height;
      const positionInPercentage = pxToPercent(this._handlePosition, max);
      this.dispatchEvent(new CustomEvent("vsc-split-layout-change", {
        detail: {
          position: this._handlePosition,
          positionInPercentage
        },
        composed: true
      }));
    };
    this._handleMouseMove = (event) => {
      const { clientX, clientY } = event;
      const { left, top, height, width } = this._boundRect;
      const vert = this.split === "vertical";
      const maxPos = vert ? width : height;
      const mousePos = vert ? clientX - left : clientY - top;
      this._handlePosition = Math.max(0, Math.min(mousePos - this._handleOffset + this.handleSize / 2, maxPos));
      if (this.fixedPane === "start") {
        this._fixedPaneSize = this._handlePosition;
      }
      if (this.fixedPane === "end") {
        this._fixedPaneSize = maxPos - this._handlePosition;
      }
    };
    this._resizeObserver = new ResizeObserver(this._handleResize);
  }
  /**
   * Sets the handle position to the value specified in the `initialHandlePosition` property.
   */
  resetHandlePosition() {
    if (!this._wrapperEl) {
      this._handlePosition = 0;
      return;
    }
    const { width, height } = this._wrapperEl.getBoundingClientRect();
    const max = this.split === "vertical" ? width : height;
    const { value, unit } = parseValue(this.initialHandlePosition ?? DEFAULT_INITIAL_POSITION);
    if (unit === "percent") {
      this._handlePosition = percentToPx(value, max);
    } else {
      this._handlePosition = value;
    }
  }
  connectedCallback() {
    super.connectedCallback();
  }
  firstUpdated(_changedProperties) {
    if (this.fixedPane !== "none") {
      this._resizeObserver.observe(this._wrapperEl);
      this._wrapperObserved = true;
    }
    this._boundRect = this._wrapperEl.getBoundingClientRect();
    const { value, unit } = this.handlePosition ? parseValue(this.handlePosition) : parseValue(this.initialHandlePosition);
    this._setPosition(value, unit);
    this._initFixedPane();
  }
  _handlePositionPropChanged() {
    if (this.handlePosition && this._wrapperEl) {
      this._boundRect = this._wrapperEl.getBoundingClientRect();
      const { value, unit } = parseValue(this.handlePosition);
      this._setPosition(value, unit);
    }
  }
  _fixedPanePropChanged() {
    if (!this._wrapperEl) {
      return;
    }
    this._initFixedPane();
  }
  _initFixedPane() {
    if (this.fixedPane === "none") {
      if (this._wrapperObserved) {
        this._resizeObserver.unobserve(this._wrapperEl);
        this._wrapperObserved = false;
      }
    } else {
      const { width, height } = this._boundRect;
      const max = this.split === "vertical" ? width : height;
      this._fixedPaneSize = this.fixedPane === "start" ? this._handlePosition : max - this._handlePosition;
      if (!this._wrapperObserved) {
        this._resizeObserver.observe(this._wrapperEl);
        this._wrapperObserved = true;
      }
    }
  }
  _setPosition(value, unit) {
    const { width, height } = this._boundRect;
    const max = this.split === "vertical" ? width : height;
    this._handlePosition = unit === "percent" ? percentToPx(value, max) : value;
  }
  _handleMouseOver() {
    this._hover = true;
    this._hide = false;
  }
  _handleMouseOut(event) {
    if (event.buttons !== 1) {
      this._hover = false;
      this._hide = true;
    }
  }
  _handleMouseDown(event) {
    event.stopPropagation();
    event.preventDefault();
    this._boundRect = this._wrapperEl.getBoundingClientRect();
    const { left, top } = this._boundRect;
    const { left: handleLeft, top: handleTop } = this._handleEl.getBoundingClientRect();
    const mouseXLocal = event.clientX - left;
    const mouseYLocal = event.clientY - top;
    if (this.split === "vertical") {
      this._handleOffset = mouseXLocal - (handleLeft - left);
    }
    if (this.split === "horizontal") {
      this._handleOffset = mouseYLocal - (handleTop - top);
    }
    this._isDragActive = true;
    window.addEventListener("mouseup", this._handleMouseUp);
    window.addEventListener("mousemove", this._handleMouseMove);
  }
  _handleDblClick() {
    if (!this.resetOnDblClick) {
      return;
    }
    this.resetHandlePosition();
  }
  _handleSlotChange() {
    const nestedLayouts = [
      ...this._nestedLayoutsAtStart,
      ...this._nestedLayoutsAtEnd
    ];
    nestedLayouts.forEach((e2) => {
      if (e2 instanceof VscodeSplitLayout_1) {
        e2.resetHandlePosition();
      }
    });
  }
  render() {
    const { width, height } = this._boundRect;
    const maxPos = this.split === "vertical" ? width : height;
    const handlePosCss = this.fixedPane !== "none" ? `${this._handlePosition}px` : `${pxToPercent(this._handlePosition, maxPos)}%`;
    let startPaneSize = "";
    if (this.fixedPane === "start") {
      startPaneSize = `0 0 ${this._fixedPaneSize}px`;
    } else {
      startPaneSize = `1 1 ${pxToPercent(this._handlePosition, maxPos)}%`;
    }
    let endPaneSize = "";
    if (this.fixedPane === "end") {
      endPaneSize = `0 0 ${this._fixedPaneSize}px`;
    } else {
      endPaneSize = `1 1 ${pxToPercent(maxPos - this._handlePosition, maxPos)}%`;
    }
    const handleStylesPropObj = {
      left: this.split === "vertical" ? handlePosCss : "0",
      top: this.split === "vertical" ? "0" : handlePosCss
    };
    const handleSize = this.handleSize ?? DEFAULT_HANDLE_SIZE;
    if (this.split === "vertical") {
      handleStylesPropObj.marginLeft = `${0 - handleSize / 2}px`;
      handleStylesPropObj.width = `${handleSize}px`;
    }
    if (this.split === "horizontal") {
      handleStylesPropObj.height = `${handleSize}px`;
      handleStylesPropObj.marginTop = `${0 - handleSize / 2}px`;
    }
    const handleOverlayClasses = e$2({
      "handle-overlay": true,
      active: this._isDragActive,
      "split-vertical": this.split === "vertical",
      "split-horizontal": this.split === "horizontal"
    });
    const handleClasses = e$2({
      handle: true,
      hover: this._hover,
      hide: this._hide,
      "split-vertical": this.split === "vertical",
      "split-horizontal": this.split === "horizontal"
    });
    const wrapperClasses = {
      wrapper: true,
      horizontal: this.split === "horizontal"
    };
    return x`
      <div class=${e$2(wrapperClasses)}>
        <div class="start" .style=${stylePropertyMap({ flex: startPaneSize })}>
          <slot name="start" @slotchange=${this._handleSlotChange}></slot>
        </div>
        <div class="end" .style=${stylePropertyMap({ flex: endPaneSize })}>
          <slot name="end" @slotchange=${this._handleSlotChange}></slot>
        </div>
        <div class=${handleOverlayClasses}></div>
        <div
          class=${handleClasses}
          .style=${stylePropertyMap(handleStylesPropObj)}
          @mouseover=${this._handleMouseOver}
          @mouseout=${this._handleMouseOut}
          @mousedown=${this._handleMouseDown}
          @dblclick=${this._handleDblClick}
        ></div>
      </div>
    `;
  }
};
VscodeSplitLayout.styles = styles$c;
__decorate$c([
  n$1({ reflect: true })
], VscodeSplitLayout.prototype, "split", null);
__decorate$c([
  n$1({ type: Boolean, reflect: true, attribute: "reset-on-dbl-click" })
], VscodeSplitLayout.prototype, "resetOnDblClick", void 0);
__decorate$c([
  n$1({ type: Number, reflect: true, attribute: "handle-size" })
], VscodeSplitLayout.prototype, "handleSize", void 0);
__decorate$c([
  n$1({ reflect: true, attribute: "initial-handle-position" })
], VscodeSplitLayout.prototype, "initialHandlePosition", void 0);
__decorate$c([
  n$1({ attribute: "handle-position" })
], VscodeSplitLayout.prototype, "handlePosition", null);
__decorate$c([
  n$1({ attribute: "fixed-pane" })
], VscodeSplitLayout.prototype, "fixedPane", null);
__decorate$c([
  r$2()
], VscodeSplitLayout.prototype, "_handlePosition", void 0);
__decorate$c([
  r$2()
], VscodeSplitLayout.prototype, "_isDragActive", void 0);
__decorate$c([
  r$2()
], VscodeSplitLayout.prototype, "_hover", void 0);
__decorate$c([
  r$2()
], VscodeSplitLayout.prototype, "_hide", void 0);
__decorate$c([
  e$3(".wrapper")
], VscodeSplitLayout.prototype, "_wrapperEl", void 0);
__decorate$c([
  e$3(".handle")
], VscodeSplitLayout.prototype, "_handleEl", void 0);
__decorate$c([
  o({ slot: "start", selector: "vscode-split-layout" })
], VscodeSplitLayout.prototype, "_nestedLayoutsAtStart", void 0);
__decorate$c([
  o({ slot: "end", selector: "vscode-split-layout" })
], VscodeSplitLayout.prototype, "_nestedLayoutsAtEnd", void 0);
VscodeSplitLayout = VscodeSplitLayout_1 = __decorate$c([
  customElement("vscode-split-layout")
], VscodeSplitLayout);
const styles$b = [
  defaultStyles,
  i`
    :host {
      border-bottom: 1px solid transparent;
      cursor: pointer;
      display: block;
      margin-bottom: -1px;
      overflow: hidden;
      padding: 7px 8px;
      text-overflow: ellipsis;
      user-select: none;
      white-space: nowrap;
    }

    :host([active]) {
      border-bottom-color: var(--vscode-panelTitle-activeForeground);
      color: var(--vscode-panelTitle-activeForeground);
    }

    :host([panel]) {
      border-bottom: 0;
      margin-bottom: 0;
      padding: 0;
    }

    :host(:focus-visible) {
      outline: none;
    }

    .wrapper {
      align-items: center;
      color: var(--vscode-foreground);
      display: flex;
      min-height: 20px;
      overflow: inherit;
      text-overflow: inherit;
      position: relative;
    }

    .wrapper.panel {
      color: var(--vscode-panelTitle-inactiveForeground);
    }

    .wrapper.panel.active,
    .wrapper.panel:hover {
      color: var(--vscode-panelTitle-activeForeground);
    }

    :host([panel]) .wrapper {
      display: flex;
      font-size: 11px;
      height: 31px;
      padding: 2px 10px;
      text-transform: uppercase;
    }

    .main {
      overflow: inherit;
      text-overflow: inherit;
    }

    .active-indicator {
      display: none;
    }

    .active-indicator.panel.active {
      border-top: 1px solid var(--vscode-panelTitle-activeBorder);
      bottom: 4px;
      display: block;
      left: 8px;
      pointer-events: none;
      position: absolute;
      right: 8px;
    }

    :host(:focus-visible) .wrapper {
      outline-color: var(--vscode-focusBorder);
      outline-offset: 3px;
      outline-style: solid;
      outline-width: 1px;
    }

    :host(:focus-visible) .wrapper.panel {
      outline-offset: -2px;
    }

    slot[name='content-before']::slotted(vscode-badge) {
      margin-right: 8px;
    }

    slot[name='content-after']::slotted(vscode-badge) {
      margin-left: 8px;
    }
  `
];
var __decorate$b = function(decorators, target, key, desc) {
  var c = arguments.length, r2 = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r2 = Reflect.decorate(decorators, target, key, desc);
  else for (var i2 = decorators.length - 1; i2 >= 0; i2--) if (d = decorators[i2]) r2 = (c < 3 ? d(r2) : c > 3 ? d(target, key, r2) : d(target, key)) || r2;
  return c > 3 && r2 && Object.defineProperty(target, key, r2), r2;
};
let VscodeTabHeader = class VscodeTabHeader2 extends VscElement {
  constructor() {
    super(...arguments);
    this.active = false;
    this.ariaControls = "";
    this.panel = false;
    this.role = "tab";
    this.tabId = -1;
  }
  attributeChangedCallback(name, old, value) {
    super.attributeChangedCallback(name, old, value);
    if (name === "active") {
      const active = value !== null;
      this.ariaSelected = active ? "true" : "false";
      this.tabIndex = active ? 0 : -1;
    }
  }
  render() {
    return x`
      <div
        class=${e$2({
      wrapper: true,
      active: this.active,
      panel: this.panel
    })}
      >
        <div class="before"><slot name="content-before"></slot></div>
        <div class="main"><slot></slot></div>
        <div class="after"><slot name="content-after"></slot></div>
        <span
          class=${e$2({
      "active-indicator": true,
      active: this.active,
      panel: this.panel
    })}
        ></span>
      </div>
    `;
  }
};
VscodeTabHeader.styles = styles$b;
__decorate$b([
  n$1({ type: Boolean, reflect: true })
], VscodeTabHeader.prototype, "active", void 0);
__decorate$b([
  n$1({ reflect: true, attribute: "aria-controls" })
], VscodeTabHeader.prototype, "ariaControls", void 0);
__decorate$b([
  n$1({ type: Boolean, reflect: true })
], VscodeTabHeader.prototype, "panel", void 0);
__decorate$b([
  n$1({ reflect: true })
], VscodeTabHeader.prototype, "role", void 0);
__decorate$b([
  n$1({ type: Number, reflect: true, attribute: "tab-id" })
], VscodeTabHeader.prototype, "tabId", void 0);
VscodeTabHeader = __decorate$b([
  customElement("vscode-tab-header")
], VscodeTabHeader);
const styles$a = [
  defaultStyles,
  i`
    :host {
      display: block;
      overflow: hidden;
    }

    :host(:focus-visible) {
      outline-color: var(--vscode-focusBorder);
      outline-offset: 3px;
      outline-style: solid;
      outline-width: 1px;
    }

    :host([panel]) {
      background-color: var(--vscode-panel-background);
    }
  `
];
var __decorate$a = function(decorators, target, key, desc) {
  var c = arguments.length, r2 = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r2 = Reflect.decorate(decorators, target, key, desc);
  else for (var i2 = decorators.length - 1; i2 >= 0; i2--) if (d = decorators[i2]) r2 = (c < 3 ? d(r2) : c > 3 ? d(target, key, r2) : d(target, key)) || r2;
  return c > 3 && r2 && Object.defineProperty(target, key, r2), r2;
};
let VscodeTabPanel = class VscodeTabPanel2 extends VscElement {
  constructor() {
    super(...arguments);
    this.hidden = false;
    this.ariaLabelledby = "";
    this.panel = false;
    this.role = "tabpanel";
    this.tabIndex = 0;
  }
  render() {
    return x` <slot></slot> `;
  }
};
VscodeTabPanel.styles = styles$a;
__decorate$a([
  n$1({ type: Boolean, reflect: true })
], VscodeTabPanel.prototype, "hidden", void 0);
__decorate$a([
  n$1({ reflect: true, attribute: "aria-labelledby" })
], VscodeTabPanel.prototype, "ariaLabelledby", void 0);
__decorate$a([
  n$1({ type: Boolean, reflect: true })
], VscodeTabPanel.prototype, "panel", void 0);
__decorate$a([
  n$1({ reflect: true })
], VscodeTabPanel.prototype, "role", void 0);
__decorate$a([
  n$1({ type: Number, reflect: true })
], VscodeTabPanel.prototype, "tabIndex", void 0);
VscodeTabPanel = __decorate$a([
  customElement("vscode-tab-panel")
], VscodeTabPanel);
const styles$9 = [
  defaultStyles,
  i`
    :host {
      display: table;
      table-layout: fixed;
      width: 100%;
    }

    ::slotted(vscode-table-row:nth-child(even)) {
      background-color: var(--vsc-row-even-background);
    }

    ::slotted(vscode-table-row:nth-child(odd)) {
      background-color: var(--vsc-row-odd-background);
    }
  `
];
var __decorate$9 = function(decorators, target, key, desc) {
  var c = arguments.length, r2 = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r2 = Reflect.decorate(decorators, target, key, desc);
  else for (var i2 = decorators.length - 1; i2 >= 0; i2--) if (d = decorators[i2]) r2 = (c < 3 ? d(r2) : c > 3 ? d(target, key, r2) : d(target, key)) || r2;
  return c > 3 && r2 && Object.defineProperty(target, key, r2), r2;
};
let VscodeTableBody = class VscodeTableBody2 extends VscElement {
  constructor() {
    super(...arguments);
    this.role = "rowgroup";
  }
  render() {
    return x` <slot></slot> `;
  }
};
VscodeTableBody.styles = styles$9;
__decorate$9([
  n$1({ reflect: true })
], VscodeTableBody.prototype, "role", void 0);
VscodeTableBody = __decorate$9([
  customElement("vscode-table-body")
], VscodeTableBody);
const styles$8 = [
  defaultStyles,
  i`
    :host {
      border-bottom-color: var(--vscode-editorGroup-border);
      border-bottom-style: solid;
      border-bottom-width: var(--vsc-row-border-bottom-width);
      box-sizing: border-box;
      color: var(--vscode-foreground);
      display: table-cell;
      font-family: var(--vscode-font-family);
      font-size: var(--vscode-font-size);
      height: 24px;
      overflow: hidden;
      padding-left: 10px;
      text-overflow: ellipsis;
      vertical-align: middle;
      white-space: nowrap;
    }

    :host([compact]) {
      display: block;
      height: auto;
      padding-bottom: 5px;
      width: 100% !important;
    }

    :host([compact]:first-child) {
      padding-top: 10px;
    }

    :host([compact]:last-child) {
      padding-bottom: 10px;
    }

    .wrapper {
      overflow: inherit;
      text-overflow: inherit;
      white-space: inherit;
      width: 100%;
    }

    .column-label {
      font-weight: bold;
    }
  `
];
var __decorate$8 = function(decorators, target, key, desc) {
  var c = arguments.length, r2 = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r2 = Reflect.decorate(decorators, target, key, desc);
  else for (var i2 = decorators.length - 1; i2 >= 0; i2--) if (d = decorators[i2]) r2 = (c < 3 ? d(r2) : c > 3 ? d(target, key, r2) : d(target, key)) || r2;
  return c > 3 && r2 && Object.defineProperty(target, key, r2), r2;
};
let VscodeTableCell = class VscodeTableCell2 extends VscElement {
  constructor() {
    super(...arguments);
    this.role = "cell";
    this.columnLabel = "";
    this.compact = false;
  }
  render() {
    const columnLabelElement = this.columnLabel ? x`<div class="column-label" role="presentation">
          ${this.columnLabel}
        </div>` : E;
    return x`
      <div class="wrapper">
        ${columnLabelElement}
        <slot></slot>
      </div>
    `;
  }
};
VscodeTableCell.styles = styles$8;
__decorate$8([
  n$1({ reflect: true })
], VscodeTableCell.prototype, "role", void 0);
__decorate$8([
  n$1({ attribute: "column-label" })
], VscodeTableCell.prototype, "columnLabel", void 0);
__decorate$8([
  n$1({ type: Boolean, reflect: true })
], VscodeTableCell.prototype, "compact", void 0);
VscodeTableCell = __decorate$8([
  customElement("vscode-table-cell")
], VscodeTableCell);
const styles$7 = [
  defaultStyles,
  i`
    :host {
      background-color: var(--vscode-keybindingTable-headerBackground);
      display: table;
      table-layout: fixed;
      width: 100%;
    }
  `
];
var __decorate$7 = function(decorators, target, key, desc) {
  var c = arguments.length, r2 = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r2 = Reflect.decorate(decorators, target, key, desc);
  else for (var i2 = decorators.length - 1; i2 >= 0; i2--) if (d = decorators[i2]) r2 = (c < 3 ? d(r2) : c > 3 ? d(target, key, r2) : d(target, key)) || r2;
  return c > 3 && r2 && Object.defineProperty(target, key, r2), r2;
};
let VscodeTableHeader = class VscodeTableHeader2 extends VscElement {
  constructor() {
    super(...arguments);
    this.role = "rowgroup";
  }
  render() {
    return x` <slot></slot> `;
  }
};
VscodeTableHeader.styles = styles$7;
__decorate$7([
  n$1({ reflect: true })
], VscodeTableHeader.prototype, "role", void 0);
VscodeTableHeader = __decorate$7([
  customElement("vscode-table-header")
], VscodeTableHeader);
const styles$6 = [
  defaultStyles,
  i`
    :host {
      box-sizing: border-box;
      color: var(--vscode-foreground);
      display: table-cell;
      font-family: var(--vscode-font-family);
      font-size: var(--vscode-font-size);
      font-weight: bold;
      line-height: 20px;
      overflow: hidden;
      padding-bottom: 5px;
      padding-left: 10px;
      padding-right: 0;
      padding-top: 5px;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .wrapper {
      box-sizing: inherit;
      overflow: inherit;
      text-overflow: inherit;
      white-space: inherit;
      width: 100%;
    }
  `
];
var __decorate$6 = function(decorators, target, key, desc) {
  var c = arguments.length, r2 = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r2 = Reflect.decorate(decorators, target, key, desc);
  else for (var i2 = decorators.length - 1; i2 >= 0; i2--) if (d = decorators[i2]) r2 = (c < 3 ? d(r2) : c > 3 ? d(target, key, r2) : d(target, key)) || r2;
  return c > 3 && r2 && Object.defineProperty(target, key, r2), r2;
};
let VscodeTableHeaderCell = class VscodeTableHeaderCell2 extends VscElement {
  constructor() {
    super(...arguments);
    this.role = "columnheader";
  }
  render() {
    return x`
      <div class="wrapper">
        <slot></slot>
      </div>
    `;
  }
};
VscodeTableHeaderCell.styles = styles$6;
__decorate$6([
  n$1({ reflect: true })
], VscodeTableHeaderCell.prototype, "role", void 0);
VscodeTableHeaderCell = __decorate$6([
  customElement("vscode-table-header-cell")
], VscodeTableHeaderCell);
const styles$5 = [
  defaultStyles,
  i`
    :host {
      border-top-color: var(--vscode-editorGroup-border);
      border-top-style: solid;
      border-top-width: var(--vsc-row-border-top-width);
      display: var(--vsc-row-display);
      width: 100%;
    }
  `
];
var __decorate$5 = function(decorators, target, key, desc) {
  var c = arguments.length, r2 = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r2 = Reflect.decorate(decorators, target, key, desc);
  else for (var i2 = decorators.length - 1; i2 >= 0; i2--) if (d = decorators[i2]) r2 = (c < 3 ? d(r2) : c > 3 ? d(target, key, r2) : d(target, key)) || r2;
  return c > 3 && r2 && Object.defineProperty(target, key, r2), r2;
};
let VscodeTableRow = class VscodeTableRow2 extends VscElement {
  constructor() {
    super(...arguments);
    this.role = "row";
  }
  render() {
    return x` <slot></slot> `;
  }
};
VscodeTableRow.styles = styles$5;
__decorate$5([
  n$1({ reflect: true })
], VscodeTableRow.prototype, "role", void 0);
VscodeTableRow = __decorate$5([
  customElement("vscode-table-row")
], VscodeTableRow);
const rawValueToPercentage = (raw, base) => {
  if (typeof raw === "number" && !Number.isNaN(raw)) {
    return raw / base * 100;
  } else if (typeof raw === "string" && /^[0-9.]+$/.test(raw)) {
    const val = Number(raw);
    return val / base * 100;
  } else if (typeof raw === "string" && /^[0-9.]+%$/.test(raw)) {
    return Number(raw.substring(0, raw.length - 1));
  } else if (typeof raw === "string" && /^[0-9.]+px$/.test(raw)) {
    const val = Number(raw.substring(0, raw.length - 2));
    return val / base * 100;
  } else {
    return null;
  }
};
const styles$4 = [
  defaultStyles,
  i`
    :host {
      display: block;
      --vsc-row-even-background: transparent;
      --vsc-row-odd-background: transparent;
      --vsc-row-border-bottom-width: 0;
      --vsc-row-border-top-width: 0;
      --vsc-row-display: table-row;
    }

    :host([bordered]),
    :host([bordered-rows]) {
      --vsc-row-border-bottom-width: 1px;
    }

    :host([compact]) {
      --vsc-row-display: block;
    }

    :host([bordered][compact]),
    :host([bordered-rows][compact]) {
      --vsc-row-border-bottom-width: 0;
      --vsc-row-border-top-width: 1px;
    }

    :host([zebra]) {
      --vsc-row-even-background: var(--vscode-keybindingTable-rowsBackground);
    }

    :host([zebra-odd]) {
      --vsc-row-odd-background: var(--vscode-keybindingTable-rowsBackground);
    }

    ::slotted(vscode-table-row) {
      width: 100%;
    }

    .wrapper {
      height: 100%;
      max-width: 100%;
      overflow: hidden;
      position: relative;
      width: 100%;
    }

    .wrapper.select-disabled {
      user-select: none;
    }

    .wrapper.resize-cursor {
      cursor: ew-resize;
    }

    .wrapper.compact-view .header-slot-wrapper {
      height: 0;
      overflow: hidden;
    }

    .scrollable {
      height: 100%;
    }

    .scrollable:before {
      background-color: transparent;
      content: '';
      display: block;
      height: 1px;
      position: absolute;
      width: 100%;
    }

    .wrapper:not(.compact-view) .scrollable:not([scrolled]):before {
      background-color: var(--vscode-editorGroup-border);
    }

    .sash {
      visibility: hidden;
    }

    :host([bordered-columns]) .sash,
    :host([bordered]) .sash {
      visibility: visible;
    }

    :host([resizable]) .wrapper:hover .sash {
      visibility: visible;
    }

    .sash {
      height: 100%;
      position: absolute;
      top: 0;
      width: 1px;
    }

    .wrapper.compact-view .sash {
      display: none;
    }

    .sash.resizable {
      cursor: ew-resize;
    }

    .sash-visible {
      background-color: var(--vscode-editorGroup-border);
      height: 100%;
      position: absolute;
      top: 30px;
      width: 1px;
    }

    .sash.hover .sash-visible {
      background-color: var(--vscode-sash-hoverBorder);
      transition: background-color 50ms linear 300ms;
    }

    .sash .sash-clickable {
      background-color: transparent;
      height: 100%;
      left: -2px;
      position: absolute;
      width: 5px;
    }
  `
];
var __decorate$4 = function(decorators, target, key, desc) {
  var c = arguments.length, r2 = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r2 = Reflect.decorate(decorators, target, key, desc);
  else for (var i2 = decorators.length - 1; i2 >= 0; i2--) if (d = decorators[i2]) r2 = (c < 3 ? d(r2) : c > 3 ? d(target, key, r2) : d(target, key)) || r2;
  return c > 3 && r2 && Object.defineProperty(target, key, r2), r2;
};
const COMPONENT_WIDTH_PERCENTAGE = 100;
let VscodeTable = class VscodeTable2 extends VscElement {
  constructor() {
    super(...arguments);
    this.role = "table";
    this.resizable = false;
    this.responsive = false;
    this.bordered = false;
    this.borderedColumns = false;
    this.borderedRows = false;
    this.breakpoint = 300;
    this.minColumnWidth = "50px";
    this.delayedResizing = false;
    this.compact = false;
    this.zebra = false;
    this.zebraOdd = false;
    this._sashPositions = [];
    this._isDragging = false;
    this._sashHovers = [];
    this._columns = [];
    this._activeSashElementIndex = -1;
    this._activeSashCursorOffset = 0;
    this._componentX = 0;
    this._componentH = 0;
    this._componentW = 0;
    this._headerCells = [];
    this._cellsOfFirstRow = [];
    this._prevHeaderHeight = 0;
    this._prevComponentHeight = 0;
    this._componentResizeObserverCallback = () => {
      this._memoizeComponentDimensions();
      this._updateResizeHandlersSize();
      if (this.responsive) {
        this._toggleCompactView();
      }
      this._resizeTableBody();
    };
    this._headerResizeObserverCallback = () => {
      this._updateResizeHandlersSize();
    };
    this._bodyResizeObserverCallback = () => {
      this._resizeTableBody();
    };
    this._onResizingMouseMove = (event) => {
      event.stopPropagation();
      this._updateActiveSashPosition(event.pageX);
      if (!this.delayedResizing) {
        this._resizeColumns(true);
      } else {
        this._resizeColumns(false);
      }
    };
    this._onResizingMouseUp = (event) => {
      this._resizeColumns(true);
      this._updateActiveSashPosition(event.pageX);
      this._sashHovers[this._activeSashElementIndex] = false;
      this._isDragging = false;
      this._activeSashElementIndex = -1;
      document.removeEventListener("mousemove", this._onResizingMouseMove);
      document.removeEventListener("mouseup", this._onResizingMouseUp);
    };
  }
  /**
   * Initial column sizes in a JSON-encoded array.
   * Accepted values are:
   * - number
   * - string-type number (ex.: "100")
   * - px value (ex.: "100px")
   * - percentage value (ex.: "50%")
   * - percentage value (ex.: "50%")
   * - "auto" keyword
   */
  set columns(val) {
    this._columns = val;
    if (this.isConnected) {
      this._initDefaultColumnSizes();
    }
  }
  get columns() {
    return this._columns;
  }
  connectedCallback() {
    super.connectedCallback();
    this._memoizeComponentDimensions();
    this._initDefaultColumnSizes();
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    this._componentResizeObserver?.unobserve(this);
    this._componentResizeObserver?.disconnect();
    this._bodyResizeObserver?.disconnect();
  }
  _px2Percent(px) {
    return px / this._componentW * 100;
  }
  _percent2Px(percent) {
    return this._componentW * percent / 100;
  }
  _memoizeComponentDimensions() {
    const cr = this.getBoundingClientRect();
    this._componentH = cr.height;
    this._componentW = cr.width;
    this._componentX = cr.x;
  }
  _queryHeaderCells() {
    const headers = this._assignedHeaderElements;
    if (!(headers && headers[0])) {
      return [];
    }
    return Array.from(headers[0].querySelectorAll("vscode-table-header-cell"));
  }
  /**
   * Get cached header cells
   */
  _getHeaderCells() {
    if (!this._headerCells.length) {
      this._headerCells = this._queryHeaderCells();
    }
    return this._headerCells;
  }
  _queryCellsOfFirstRow() {
    const assignedBodyElements = this._assignedBodyElements;
    if (!(assignedBodyElements && assignedBodyElements[0])) {
      return [];
    }
    return Array.from(assignedBodyElements[0].querySelectorAll("vscode-table-row:first-child vscode-table-cell"));
  }
  /**
   * Get cached cells of first row
   */
  _getCellsOfFirstRow() {
    if (!this._cellsOfFirstRow.length) {
      this._cellsOfFirstRow = this._queryCellsOfFirstRow();
    }
    return this._cellsOfFirstRow;
  }
  _resizeTableBody() {
    let headerHeight = 0;
    let tbodyHeight = 0;
    const tableHeight = this.getBoundingClientRect().height;
    if (this._assignedHeaderElements && this._assignedHeaderElements.length) {
      headerHeight = this._assignedHeaderElements[0].getBoundingClientRect().height;
    }
    if (this._assignedBodyElements && this._assignedBodyElements.length) {
      tbodyHeight = this._assignedBodyElements[0].getBoundingClientRect().height;
    }
    const overflownContentHeight = tbodyHeight - headerHeight - tableHeight;
    this._scrollableElement.style.height = overflownContentHeight > 0 ? `${tableHeight - headerHeight}px` : "auto";
  }
  _initResizeObserver() {
    this._componentResizeObserver = new ResizeObserver(this._componentResizeObserverCallback);
    this._componentResizeObserver.observe(this);
    this._headerResizeObserver = new ResizeObserver(this._headerResizeObserverCallback);
    this._headerResizeObserver.observe(this._headerElement);
  }
  _calcColWidthPercentages() {
    const numCols = this._getHeaderCells().length;
    let cols = this.columns.slice(0, numCols);
    const numAutoCols = cols.filter((c) => c === "auto").length + numCols - cols.length;
    let availablePercent = 100;
    cols = cols.map((col) => {
      const percentage = rawValueToPercentage(col, this._componentW);
      if (percentage === null) {
        return "auto";
      }
      availablePercent -= percentage;
      return percentage;
    });
    if (cols.length < numCols) {
      for (let i2 = cols.length; i2 < numCols; i2++) {
        cols.push("auto");
      }
    }
    cols = cols.map((col) => {
      if (col === "auto") {
        return availablePercent / numAutoCols;
      }
      return col;
    });
    return cols;
  }
  _initHeaderCellSizes(colWidths) {
    this._getHeaderCells().forEach((cell, index) => {
      cell.style.width = `${colWidths[index]}%`;
    });
  }
  _initBodyColumnSizes(colWidths) {
    this._getCellsOfFirstRow().forEach((cell, index) => {
      cell.style.width = `${colWidths[index]}%`;
    });
  }
  _initSashes(colWidths) {
    const l = colWidths.length;
    let prevHandlerPos = 0;
    this._sashPositions = [];
    colWidths.forEach((collW, index) => {
      if (index < l - 1) {
        const pos = prevHandlerPos + collW;
        this._sashPositions.push(pos);
        prevHandlerPos = pos;
      }
    });
  }
  _initDefaultColumnSizes() {
    const colWidths = this._calcColWidthPercentages();
    this._initHeaderCellSizes(colWidths);
    this._initBodyColumnSizes(colWidths);
    this._initSashes(colWidths);
  }
  _updateResizeHandlersSize() {
    const headerCr = this._headerElement.getBoundingClientRect();
    if (headerCr.height === this._prevHeaderHeight && this._componentH === this._prevComponentHeight) {
      return;
    }
    this._prevHeaderHeight = headerCr.height;
    this._prevComponentHeight = this._componentH;
    const bodyHeight = this._componentH - headerCr.height;
    this._sashVisibleElements.forEach((el) => {
      el.style.height = `${bodyHeight}px`;
      el.style.top = `${headerCr.height}px`;
    });
  }
  _applyCompactViewColumnLabels() {
    const headerCells = this._getHeaderCells();
    const labels = headerCells.map((c) => c.innerText);
    const rows = this.querySelectorAll("vscode-table-row");
    rows.forEach((r2) => {
      const cells = r2.querySelectorAll("vscode-table-cell");
      cells.forEach((c, i2) => {
        c.columnLabel = labels[i2];
        c.compact = true;
      });
    });
  }
  _clearCompactViewColumnLabels() {
    this.querySelectorAll("vscode-table-cell").forEach((c) => {
      c.columnLabel = "";
      c.compact = false;
    });
  }
  _toggleCompactView() {
    const cr = this.getBoundingClientRect();
    const nextCompactView = cr.width < this.breakpoint;
    if (this.compact !== nextCompactView) {
      this.compact = nextCompactView;
      if (nextCompactView) {
        this._applyCompactViewColumnLabels();
      } else {
        this._clearCompactViewColumnLabels();
      }
    }
  }
  _onDefaultSlotChange() {
    this._assignedElements.forEach((el) => {
      if (el.tagName.toLowerCase() === "vscode-table-header") {
        el.slot = "header";
        return;
      }
      if (el.tagName.toLowerCase() === "vscode-table-body") {
        el.slot = "body";
        return;
      }
    });
  }
  _onHeaderSlotChange() {
    this._headerCells = this._queryHeaderCells();
  }
  _onBodySlotChange() {
    this._initDefaultColumnSizes();
    this._initResizeObserver();
    this._updateResizeHandlersSize();
    if (!this._bodyResizeObserver) {
      const tbody = this._assignedBodyElements[0] ?? null;
      if (tbody) {
        this._bodyResizeObserver = new ResizeObserver(this._bodyResizeObserverCallback);
        this._bodyResizeObserver.observe(tbody);
      }
    }
  }
  _onSashMouseOver(event) {
    if (this._isDragging) {
      return;
    }
    const target = event.currentTarget;
    const index = Number(target.dataset.index);
    this._sashHovers[index] = true;
    this.requestUpdate();
  }
  _onSashMouseOut(event) {
    event.stopPropagation();
    if (this._isDragging) {
      return;
    }
    const target = event.currentTarget;
    const index = Number(target.dataset.index);
    this._sashHovers[index] = false;
    this.requestUpdate();
  }
  _onSashMouseDown(event) {
    event.stopPropagation();
    const { pageX, currentTarget } = event;
    const el = currentTarget;
    const index = Number(el.dataset.index);
    const cr = el.getBoundingClientRect();
    const elX = cr.x;
    this._isDragging = true;
    this._activeSashElementIndex = index;
    this._sashHovers[this._activeSashElementIndex] = true;
    this._activeSashCursorOffset = this._px2Percent(pageX - elX);
    const headerCells = this._getHeaderCells();
    this._headerCellsToResize = [];
    this._headerCellsToResize.push(headerCells[index]);
    if (headerCells[index + 1]) {
      this._headerCellsToResize[1] = headerCells[index + 1];
    }
    const tbody = this._bodySlot.assignedElements()[0];
    const cells = tbody.querySelectorAll("vscode-table-row:first-child > vscode-table-cell");
    this._cellsToResize = [];
    this._cellsToResize.push(cells[index]);
    if (cells[index + 1]) {
      this._cellsToResize.push(cells[index + 1]);
    }
    document.addEventListener("mousemove", this._onResizingMouseMove);
    document.addEventListener("mouseup", this._onResizingMouseUp);
  }
  _updateActiveSashPosition(mouseX) {
    const { prevSashPos, nextSashPos } = this._getSashPositions();
    let minColumnWidth = rawValueToPercentage(this.minColumnWidth, this._componentW);
    if (minColumnWidth === null) {
      minColumnWidth = 0;
    }
    const minX = prevSashPos ? prevSashPos + minColumnWidth : minColumnWidth;
    const maxX = nextSashPos ? nextSashPos - minColumnWidth : COMPONENT_WIDTH_PERCENTAGE - minColumnWidth;
    let newX = this._px2Percent(mouseX - this._componentX - this._percent2Px(this._activeSashCursorOffset));
    newX = Math.max(newX, minX);
    newX = Math.min(newX, maxX);
    this._sashPositions[this._activeSashElementIndex] = newX;
    this.requestUpdate();
  }
  _getSashPositions() {
    const sashPos = this._sashPositions[this._activeSashElementIndex];
    const prevSashPos = this._sashPositions[this._activeSashElementIndex - 1] || 0;
    const nextSashPos = this._sashPositions[this._activeSashElementIndex + 1] || COMPONENT_WIDTH_PERCENTAGE;
    return {
      sashPos,
      prevSashPos,
      nextSashPos
    };
  }
  _resizeColumns(resizeBodyCells = true) {
    const { sashPos, prevSashPos, nextSashPos } = this._getSashPositions();
    const prevColW = sashPos - prevSashPos;
    const nextColW = nextSashPos - sashPos;
    const prevColCss = `${prevColW}%`;
    const nextColCss = `${nextColW}%`;
    this._headerCellsToResize[0].style.width = prevColCss;
    if (this._headerCellsToResize[1]) {
      this._headerCellsToResize[1].style.width = nextColCss;
    }
    if (resizeBodyCells) {
      this._cellsToResize[0].style.width = prevColCss;
      if (this._cellsToResize[1]) {
        this._cellsToResize[1].style.width = nextColCss;
      }
    }
  }
  render() {
    const sashes = this._sashPositions.map((val, index) => {
      const classes = e$2({
        sash: true,
        hover: this._sashHovers[index],
        resizable: this.resizable
      });
      const left = `${val}%`;
      return this.resizable ? x`
            <div
              class=${classes}
              data-index=${index}
              .style=${stylePropertyMap({ left })}
              @mousedown=${this._onSashMouseDown}
              @mouseover=${this._onSashMouseOver}
              @mouseout=${this._onSashMouseOut}
            >
              <div class="sash-visible"></div>
              <div class="sash-clickable"></div>
            </div>
          ` : x`<div
            class=${classes}
            data-index=${index}
            .style=${stylePropertyMap({ left })}
          >
            <div class="sash-visible"></div>
          </div>`;
    });
    const wrapperClasses = e$2({
      wrapper: true,
      "select-disabled": this._isDragging,
      "resize-cursor": this._isDragging,
      "compact-view": this.compact
    });
    return x`
      <div class=${wrapperClasses}>
        <div class="header">
          <slot name="caption"></slot>
          <div class="header-slot-wrapper">
            <slot name="header" @slotchange=${this._onHeaderSlotChange}></slot>
          </div>
        </div>
        <vscode-scrollable class="scrollable">
          <div>
            <slot name="body" @slotchange=${this._onBodySlotChange}></slot>
          </div>
        </vscode-scrollable>
        ${sashes}
        <slot @slotchange=${this._onDefaultSlotChange}></slot>
      </div>
    `;
  }
};
VscodeTable.styles = styles$4;
__decorate$4([
  n$1({ reflect: true })
], VscodeTable.prototype, "role", void 0);
__decorate$4([
  n$1({ type: Boolean, reflect: true })
], VscodeTable.prototype, "resizable", void 0);
__decorate$4([
  n$1({ type: Boolean, reflect: true })
], VscodeTable.prototype, "responsive", void 0);
__decorate$4([
  n$1({ type: Boolean, reflect: true })
], VscodeTable.prototype, "bordered", void 0);
__decorate$4([
  n$1({ type: Boolean, reflect: true, attribute: "bordered-columns" })
], VscodeTable.prototype, "borderedColumns", void 0);
__decorate$4([
  n$1({ type: Boolean, reflect: true, attribute: "bordered-rows" })
], VscodeTable.prototype, "borderedRows", void 0);
__decorate$4([
  n$1({ type: Number })
], VscodeTable.prototype, "breakpoint", void 0);
__decorate$4([
  n$1({ type: Array })
], VscodeTable.prototype, "columns", null);
__decorate$4([
  n$1({ attribute: "min-column-width" })
], VscodeTable.prototype, "minColumnWidth", void 0);
__decorate$4([
  n$1({ type: Boolean, reflect: true, attribute: "delayed-resizing" })
], VscodeTable.prototype, "delayedResizing", void 0);
__decorate$4([
  n$1({ type: Boolean, reflect: true })
], VscodeTable.prototype, "compact", void 0);
__decorate$4([
  n$1({ type: Boolean, reflect: true })
], VscodeTable.prototype, "zebra", void 0);
__decorate$4([
  n$1({ type: Boolean, reflect: true, attribute: "zebra-odd" })
], VscodeTable.prototype, "zebraOdd", void 0);
__decorate$4([
  e$3('slot[name="body"]')
], VscodeTable.prototype, "_bodySlot", void 0);
__decorate$4([
  e$3(".header")
], VscodeTable.prototype, "_headerElement", void 0);
__decorate$4([
  e$3(".scrollable")
], VscodeTable.prototype, "_scrollableElement", void 0);
__decorate$4([
  r(".sash-visible")
], VscodeTable.prototype, "_sashVisibleElements", void 0);
__decorate$4([
  o({
    flatten: true,
    selector: "vscode-table-header, vscode-table-body"
  })
], VscodeTable.prototype, "_assignedElements", void 0);
__decorate$4([
  o({
    slot: "header",
    flatten: true,
    selector: "vscode-table-header"
  })
], VscodeTable.prototype, "_assignedHeaderElements", void 0);
__decorate$4([
  o({
    slot: "body",
    flatten: true,
    selector: "vscode-table-body"
  })
], VscodeTable.prototype, "_assignedBodyElements", void 0);
__decorate$4([
  r$2()
], VscodeTable.prototype, "_sashPositions", void 0);
__decorate$4([
  r$2()
], VscodeTable.prototype, "_isDragging", void 0);
VscodeTable = __decorate$4([
  customElement("vscode-table")
], VscodeTable);
const styles$3 = [
  defaultStyles,
  i`
    :host {
      display: block;
    }

    .header {
      align-items: center;
      display: flex;
      font-family: var(--vscode-font-family);
      font-size: var(--vscode-font-size);
      font-weight: var(--vscode-font-weight);
      width: 100%;
    }

    .header {
      border-bottom-color: var(--vscode-settings-headerBorder);
      border-bottom-style: solid;
      border-bottom-width: 1px;
    }

    .header.panel {
      background-color: var(--vscode-panel-background);
      border-bottom-width: 0;
      box-sizing: border-box;
      padding-left: 8px;
      padding-right: 8px;
    }

    slot[name='addons'] {
      display: block;
      margin-left: auto;
    }
  `
];
var __decorate$3 = function(decorators, target, key, desc) {
  var c = arguments.length, r2 = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r2 = Reflect.decorate(decorators, target, key, desc);
  else for (var i2 = decorators.length - 1; i2 >= 0; i2--) if (d = decorators[i2]) r2 = (c < 3 ? d(r2) : c > 3 ? d(target, key, r2) : d(target, key)) || r2;
  return c > 3 && r2 && Object.defineProperty(target, key, r2), r2;
};
let VscodeTabs = class VscodeTabs2 extends VscElement {
  constructor() {
    super();
    this.panel = false;
    this.role = "tablist";
    this.selectedIndex = 0;
    this._tabHeaders = [];
    this._tabPanels = [];
    this._componentId = "";
    this._tabFocus = 0;
    this._componentId = uniqueId();
  }
  attributeChangedCallback(name, old, value) {
    super.attributeChangedCallback(name, old, value);
    if (name === "selected-index") {
      this._setActiveTab();
    }
    if (name === "panel") {
      this._tabHeaders.forEach((h) => h.panel = value !== null);
      this._tabPanels.forEach((p) => p.panel = value !== null);
    }
  }
  _dispatchSelectEvent() {
    this.dispatchEvent(new CustomEvent("vsc-select", {
      detail: {
        selectedIndex: this.selectedIndex
      },
      composed: true
    }));
    this.dispatchEvent(new CustomEvent("vsc-tabs-select", {
      detail: {
        selectedIndex: this.selectedIndex
      },
      composed: true
    }));
  }
  _setActiveTab() {
    this._tabFocus = this.selectedIndex;
    this._tabPanels.forEach((el, i2) => {
      el.hidden = i2 !== this.selectedIndex;
    });
    this._tabHeaders.forEach((el, i2) => {
      el.active = i2 === this.selectedIndex;
    });
  }
  _focusPrevTab() {
    if (this._tabFocus === 0) {
      this._tabFocus = this._tabHeaders.length - 1;
    } else {
      this._tabFocus -= 1;
    }
  }
  _focusNextTab() {
    if (this._tabFocus === this._tabHeaders.length - 1) {
      this._tabFocus = 0;
    } else {
      this._tabFocus += 1;
    }
  }
  _onHeaderKeyDown(ev) {
    if (ev.key === "ArrowLeft" || ev.key === "ArrowRight") {
      ev.preventDefault();
      this._tabHeaders[this._tabFocus].setAttribute("tabindex", "-1");
      if (ev.key === "ArrowLeft") {
        this._focusPrevTab();
      } else if (ev.key === "ArrowRight") {
        this._focusNextTab();
      }
      this._tabHeaders[this._tabFocus].setAttribute("tabindex", "0");
      this._tabHeaders[this._tabFocus].focus();
    }
    if (ev.key === "Enter") {
      ev.preventDefault();
      this.selectedIndex = this._tabFocus;
      this._dispatchSelectEvent();
    }
  }
  _moveHeadersToHeaderSlot() {
    const headers = this._mainSlotElements.filter((el) => el instanceof VscodeTabHeader);
    if (headers.length > 0) {
      headers.forEach((h) => h.setAttribute("slot", "header"));
    }
  }
  _onMainSlotChange() {
    this._moveHeadersToHeaderSlot();
    this._tabPanels = this._mainSlotElements.filter((el) => el instanceof VscodeTabPanel);
    this._tabPanels.forEach((el, i2) => {
      el.ariaLabelledby = `t${this._componentId}-h${i2}`;
      el.id = `t${this._componentId}-p${i2}`;
      el.panel = this.panel;
    });
    this._setActiveTab();
  }
  _onHeaderSlotChange() {
    this._tabHeaders = this._headerSlotElements.filter((el) => el instanceof VscodeTabHeader);
    this._tabHeaders.forEach((el, i2) => {
      el.tabId = i2;
      el.id = `t${this._componentId}-h${i2}`;
      el.ariaControls = `t${this._componentId}-p${i2}`;
      el.panel = this.panel;
      el.active = i2 === this.selectedIndex;
    });
  }
  _onHeaderClick(event) {
    const path = event.composedPath();
    const headerEl = path.find((et) => et instanceof VscodeTabHeader);
    if (headerEl) {
      this.selectedIndex = headerEl.tabId;
      this._setActiveTab();
      this._dispatchSelectEvent();
    }
  }
  render() {
    return x`
      <div
        class=${e$2({ header: true, panel: this.panel })}
        @click=${this._onHeaderClick}
        @keydown=${this._onHeaderKeyDown}
      >
        <slot name="header" @slotchange=${this._onHeaderSlotChange}></slot>
        <slot name="addons"></slot>
      </div>
      <slot @slotchange=${this._onMainSlotChange}></slot>
    `;
  }
};
VscodeTabs.styles = styles$3;
__decorate$3([
  n$1({ type: Boolean, reflect: true })
], VscodeTabs.prototype, "panel", void 0);
__decorate$3([
  n$1({ reflect: true })
], VscodeTabs.prototype, "role", void 0);
__decorate$3([
  n$1({ type: Number, reflect: true, attribute: "selected-index" })
], VscodeTabs.prototype, "selectedIndex", void 0);
__decorate$3([
  o({ slot: "header" })
], VscodeTabs.prototype, "_headerSlotElements", void 0);
__decorate$3([
  o()
], VscodeTabs.prototype, "_mainSlotElements", void 0);
VscodeTabs = __decorate$3([
  customElement("vscode-tabs")
], VscodeTabs);
const styles$2 = [
  defaultStyles,
  i`
    :host {
      display: inline-flex;
    }

    button {
      align-items: center;
      background-color: transparent;
      border: 0;
      border-radius: 5px;
      color: var(--vscode-foreground, #cccccc);
      cursor: pointer;
      display: flex;
      outline-offset: -1px;
      outline-width: 1px;
      padding: 0;
      user-select: none;
    }

    button:focus-visible {
      outline-color: var(--vscode-focusBorder, #0078d4);
      outline-style: solid;
    }

    button:hover {
      background-color: var(
        --vscode-toolbar-hoverBackground,
        rgba(90, 93, 94, 0.31)
      );
      outline-style: dashed;
      outline-color: var(--vscode-toolbar-hoverOutline, transparent);
    }

    button:active {
      background-color: var(
        --vscode-toolbar-activeBackground,
        rgba(99, 102, 103, 0.31)
      );
    }

    button.checked {
      background-color: var(
        --vscode-inputOption-activeBackground,
        rgba(36, 137, 219, 0.51)
      );
      outline-color: var(--vscode-inputOption-activeBorder, #2488db);
      outline-style: solid;
      color: var(--vscode-inputOption-activeForeground, #ffffff);
    }

    button.checked vscode-icon {
      color: var(--vscode-inputOption-activeForeground, #ffffff);
    }

    vscode-icon {
      display: block;
      padding: 3px;
    }

    slot:not(.empty) {
      align-items: center;
      display: flex;
      height: 22px;
      padding: 0 5px 0 2px;
    }

    slot.textOnly:not(.empty) {
      padding: 0 5px;
    }
  `
];
var __decorate$2 = function(decorators, target, key, desc) {
  var c = arguments.length, r2 = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r2 = Reflect.decorate(decorators, target, key, desc);
  else for (var i2 = decorators.length - 1; i2 >= 0; i2--) if (d = decorators[i2]) r2 = (c < 3 ? d(r2) : c > 3 ? d(target, key, r2) : d(target, key)) || r2;
  return c > 3 && r2 && Object.defineProperty(target, key, r2), r2;
};
let VscodeToolbarButton = class VscodeToolbarButton2 extends VscElement {
  constructor() {
    super(...arguments);
    this.icon = "";
    this.label = void 0;
    this.toggleable = false;
    this.checked = false;
    this._isSlotEmpty = true;
  }
  _handleSlotChange() {
    this._isSlotEmpty = !((this._assignedNodes?.length ?? 0) > 0);
  }
  _handleButtonClick() {
    if (!this.toggleable) {
      return;
    }
    this.checked = !this.checked;
    this.dispatchEvent(new Event("change"));
  }
  render() {
    const checked = this.checked ? "true" : "false";
    return x`
      <button
        type="button"
        aria-label=${o$1(this.label)}
        role=${o$1(this.toggleable ? "switch" : void 0)}
        aria-checked=${o$1(this.toggleable ? checked : void 0)}
        class=${e$2({ checked: this.toggleable && this.checked })}
        @click=${this._handleButtonClick}
      >
        ${this.icon ? x`<vscode-icon name=${this.icon}></vscode-icon>` : E}
        <slot
          @slotchange=${this._handleSlotChange}
          class=${e$2({ empty: this._isSlotEmpty, textOnly: !this.icon })}
        ></slot>
      </button>
    `;
  }
};
VscodeToolbarButton.styles = styles$2;
__decorate$2([
  n$1({ reflect: true })
], VscodeToolbarButton.prototype, "icon", void 0);
__decorate$2([
  n$1()
], VscodeToolbarButton.prototype, "label", void 0);
__decorate$2([
  n$1({ type: Boolean, reflect: true })
], VscodeToolbarButton.prototype, "toggleable", void 0);
__decorate$2([
  n$1({ type: Boolean, reflect: true })
], VscodeToolbarButton.prototype, "checked", void 0);
__decorate$2([
  r$2()
], VscodeToolbarButton.prototype, "_isSlotEmpty", void 0);
__decorate$2([
  n()
], VscodeToolbarButton.prototype, "_assignedNodes", void 0);
VscodeToolbarButton = __decorate$2([
  customElement("vscode-toolbar-button")
], VscodeToolbarButton);
const styles$1 = [
  defaultStyles,
  i`
    :host {
      gap: 4px;
      display: flex;
      align-items: center;
    }
  `
];
var __decorate$1 = function(decorators, target, key, desc) {
  var c = arguments.length, r2 = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r2 = Reflect.decorate(decorators, target, key, desc);
  else for (var i2 = decorators.length - 1; i2 >= 0; i2--) if (d = decorators[i2]) r2 = (c < 3 ? d(r2) : c > 3 ? d(target, key, r2) : d(target, key)) || r2;
  return c > 3 && r2 && Object.defineProperty(target, key, r2), r2;
};
let VscodeToolbarContainer = class VscodeToolbarContainer2 extends VscElement {
  render() {
    return x` <slot></slot> `;
  }
};
VscodeToolbarContainer.styles = styles$1;
VscodeToolbarContainer = __decorate$1([
  customElement("vscode-toolbar-container")
], VscodeToolbarContainer);
const styles = [
  defaultStyles,
  i`
    :host {
      --hover-outline-color: transparent;
      --hover-outline-style: solid;
      --hover-outline-width: 0;
      --selected-outline-color: transparent;
      --selected-outline-style: solid;
      --selected-outline-width: 0;

      display: block;
      outline: none;
      user-select: none;
    }

    .wrapper {
      height: 100%;
    }

    li {
      list-style: none;
    }

    ul,
    li {
      margin: 0;
      padding: 0;
    }

    ul {
      position: relative;
    }

    :host([indent-guides]) ul ul:before {
      content: '';
      display: block;
      height: 100%;
      position: absolute;
      bottom: 0;
      left: var(--indent-guide-pos);
      top: 0;
      pointer-events: none;
      width: 1px;
      z-index: 1;
    }

    .contents {
      align-items: center;
      display: flex;
      font-family: var(--vscode-font-family);
      font-size: var(--vscode-font-size);
      font-weight: var(--vscode-font-weight);
      outline-offset: -1px;
      padding-right: 12px;
    }

    .multi .contents {
      align-items: flex-start;
    }

    .contents:hover {
      cursor: pointer;
    }

    .arrow-container {
      align-items: center;
      display: flex;
      height: 22px;
      justify-content: center;
      padding-left: 8px;
      padding-right: 6px;
      width: 16px;
    }

    .icon-arrow {
      color: currentColor;
      display: block;
    }

    .theme-icon {
      display: block;
      flex-shrink: 0;
      margin-right: 6px;
    }

    .image-icon {
      background-repeat: no-repeat;
      background-position: 0 center;
      background-size: 16px;
      display: block;
      flex-shrink: 0;
      margin-right: 6px;
      height: 22px;
      width: 16px;
    }

    .multi .contents .theme-icon {
      margin-top: 3px;
    }

    .text-content {
      display: flex;
      line-height: 22px;
    }

    .single .text-content {
      display: block;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      width: 100%;
    }

    .description {
      font-size: 0.9em;
      line-height: 22px;
      margin-left: 0.5em;
      opacity: 0.95;
      white-space: pre;
    }

    .actions {
      display: none;
    }

    .contents.selected > .actions,
    .contents.focused > .actions,
    .contents:hover > .actions {
      display: flex;
    }

    .decorations {
      align-items: center;
      display: flex;
      height: 22px;
      margin-left: 5px;
    }

    .filled-circle {
      margin-right: 3px;
      opacity: 0.4;
    }

    .decoration-text {
      font-size: 90%;
      font-weight: 600;
      margin-right: 3px;
      opacity: 0.75;
    }

    .filled-circle,
    .decoration-text {
      color: var(--color, currentColor);
    }

    .contents:hover .filled-circle,
    .contents:hover .decoration-text {
      color: var(--hover-color, var(--color));
    }

    .contents.focused .filled-circle,
    .contents.focused .decoration-text {
      color: var(--focused-color, var(--color));
    }

    .contents.selected .filled-circle,
    .contents.selected .decoration-text {
      color: var(--selected-color, var(--color));
    }

    /* Theme colors */
    :host(:focus) .wrapper.has-not-focused-item {
      outline: 1px solid var(--vscode-focusBorder);
    }

    :host(:focus) .contents.selected,
    :host(:focus) .contents.focused.selected {
      color: var(--vscode-list-activeSelectionForeground);
      background-color: var(--vscode-list-activeSelectionBackground);
    }

    :host(:focus) .contents.selected .icon-arrow,
    :host(:focus) .contents.selected.focused .icon-arrow,
    :host(:focus) .contents.selected .theme-icon,
    :host(:focus) .contents.selected.focused .theme-icon,
    :host(:focus) .contents.selected .action-icon,
    :host(:focus) .contents.selected.focused .action-icon {
      color: var(--vscode-list-activeSelectionIconForeground);
    }

    :host(:focus) .contents.focused {
      color: var(--vscode-list-focusForeground);
      background-color: var(--vscode-list-focusBackground);
    }

    :host(:focus) .contents.selected.focused {
      outline-color: var(
        --vscode-list-focusAndSelectionOutline,
        var(--vscode-list-focusOutline)
      );
    }

    .contents:hover {
      background-color: var(--vscode-list-hoverBackground);
      color: var(--vscode-list-hoverForeground);
    }

    .contents:hover,
    .contents.selected:hover {
      outline-color: var(--hover-outline-color);
      outline-style: var(--hover-outline-style);
      outline-width: var(--hover-outline-width);
    }

    .contents.selected,
    .contents.selected.focused {
      background-color: var(--vscode-list-inactiveSelectionBackground);
      color: var(--vscode-list-inactiveSelectionForeground);
    }

    .contents.selected,
    .contents.selected.focused {
      outline-color: var(--selected-outline-color);
      outline-style: var(--selected-outline-style);
      outline-width: var(--selected-outline-width);
    }

    .contents.selected .theme-icon {
      color: var(--vscode-list-inactiveSelectionIconForeground);
    }

    .contents.focused {
      background-color: var(--vscode-list-inactiveFocusBackground);
      outline: 1px dotted var(--vscode-list-inactiveFocusOutline);
    }

    :host(:focus) .contents.focused {
      outline: 1px solid var(--vscode-list-focusOutline);
    }

    :host([indent-guides]) ul ul:before {
      background-color: var(--vscode-tree-inactiveIndentGuidesStroke);
    }

    :host([indent-guides]) ul ul.has-active-item:before {
      background-color: var(--vscode-tree-indentGuidesStroke);
    }
  `
];
var __decorate = function(decorators, target, key, desc) {
  var c = arguments.length, r2 = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r2 = Reflect.decorate(decorators, target, key, desc);
  else for (var i2 = decorators.length - 1; i2 >= 0; i2--) if (d = decorators[i2]) r2 = (c < 3 ? d(r2) : c > 3 ? d(target, key, r2) : d(target, key)) || r2;
  return c > 3 && r2 && Object.defineProperty(target, key, r2), r2;
};
const ARROW_OUTER_WIDTH = 30;
const ARROW_ICON_WIDTH = 16;
const CONTENT_PADDING = 3;
const addPath = (tree, prevPath = []) => {
  const nextTree = [];
  tree.forEach((item, index) => {
    const path = [...prevPath, index];
    const nextItem = {
      ...item,
      path
    };
    if (item.subItems) {
      nextItem.subItems = addPath(item.subItems, path);
    }
    nextTree.push(nextItem);
  });
  return nextTree;
};
const isBranch = (item) => {
  if (item.subItems && Array.isArray(item.subItems) && item?.subItems?.length > 0) {
    return true;
  }
  return false;
};
let VscodeTree = class VscodeTree2 extends VscElement {
  constructor() {
    super(...arguments);
    this.indent = 8;
    this.arrows = false;
    this.multiline = false;
    this.tabindex = 0;
    this.indentGuides = false;
    this._data = [];
    this._selectedItem = null;
    this._focusedItem = null;
    this._selectedBranch = null;
    this._focusedBranch = null;
    this._handleComponentKeyDownBound = this._handleComponentKeyDown.bind(this);
  }
  set data(val) {
    const oldVal = this._data;
    this._data = addPath(val);
    this.requestUpdate("data", oldVal);
  }
  get data() {
    return this._data;
  }
  /**
   * Closes all opened tree items recursively.
   */
  closeAll() {
    this._closeSubTreeRecursively(this.data);
    this.requestUpdate();
  }
  /**
   * Deselects all selected items.
   */
  deselectAll() {
    this._deselectItemsRecursively(this.data);
    this.requestUpdate();
  }
  /**
   * Returns a reference to a TreeItem object by path.
   * @param path
   * @returns
   */
  getItemByPath(path) {
    return this._getItemByPath(path);
  }
  connectedCallback() {
    super.connectedCallback();
    this.addEventListener("keydown", this._handleComponentKeyDownBound);
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    this.removeEventListener("keydown", this._handleComponentKeyDownBound);
  }
  _getItemByPath(path) {
    let current = this._data;
    let item = null;
    path.forEach((el, i2) => {
      if (i2 === path.length - 1) {
        item = current[el];
      } else {
        current = current[el].subItems;
      }
    });
    return item;
  }
  _handleActionClick(ev) {
    ev.stopPropagation();
    const el = ev.target;
    const itemPath = el.dataset.itemPath;
    const actionIndex = el.dataset.index;
    let item = null;
    let actionId = "";
    let value = "";
    if (itemPath) {
      const path = itemPath.split("/").map((p) => Number(p));
      item = this._getItemByPath(path);
      if (item?.actions) {
        const index = Number(actionIndex);
        if (item.actions[index]) {
          actionId = item.actions[index].actionId;
        }
      }
      if (item?.value) {
        value = item.value;
      }
    }
    this.dispatchEvent(new CustomEvent("vsc-run-action", {
      detail: {
        actionId,
        item,
        value
      }
    }));
    this.dispatchEvent(new CustomEvent("vsc-tree-action", {
      detail: {
        actionId,
        item,
        value
      }
    }));
  }
  _renderIconVariant(variant) {
    const { type, value } = variant;
    if (type === "themeicon") {
      return x`<vscode-icon name=${value} class="theme-icon"></vscode-icon>`;
    } else {
      return x`<span
        class="image-icon"
        .style=${stylePropertyMap({ backgroundImage: `url(${value})` })}
      ></span>`;
    }
  }
  _renderIcon(item) {
    const iconVariants = {
      branch: {
        value: "folder",
        type: "themeicon"
      },
      open: {
        value: "folder-opened",
        type: "themeicon"
      },
      leaf: {
        value: "file",
        type: "themeicon"
      }
    };
    if (item.iconUrls) {
      if (item.iconUrls.branch) {
        iconVariants.branch = {
          value: item.iconUrls.branch,
          type: "image"
        };
      }
      if (item.iconUrls.leaf) {
        iconVariants.leaf = {
          value: item.iconUrls.leaf,
          type: "image"
        };
      }
      if (item.iconUrls.open) {
        iconVariants.open = {
          value: item.iconUrls.open,
          type: "image"
        };
      }
    } else if (typeof item.icons === "object") {
      if (item.icons.branch) {
        iconVariants.branch = {
          value: item.icons.branch,
          type: "themeicon"
        };
      }
      if (item.icons.leaf) {
        iconVariants.leaf = {
          value: item.icons.leaf,
          type: "themeicon"
        };
      }
      if (item.icons.open) {
        iconVariants.open = {
          value: item.icons.open,
          type: "themeicon"
        };
      }
    } else if (!item.icons) {
      return x`${E}`;
    }
    if (isBranch(item)) {
      if (item.open) {
        return this._renderIconVariant(iconVariants.open);
      } else {
        return this._renderIconVariant(iconVariants.branch);
      }
    } else {
      return this._renderIconVariant(iconVariants.leaf);
    }
  }
  _renderArrow(item) {
    if (!this.arrows || !isBranch(item)) {
      return x`${E}`;
    }
    const { open = false } = item;
    const arrowIconName = open ? "chevron-down" : "chevron-right";
    return x`
      <div class="arrow-container">
        <vscode-icon name=${arrowIconName} class="icon-arrow"></vscode-icon>
      </div>
    `;
  }
  _renderActions(item) {
    const actionButtons = [];
    if (item.actions && Array.isArray(item.actions)) {
      item.actions.forEach((action, index) => {
        if (action.icon) {
          const icon = x`<vscode-icon
            name=${action.icon}
            action-icon
            title=${o$1(action.tooltip)}
            data-item-path=${o$1(item.path?.join("/"))}
            data-index=${index}
            class="action-icon"
            @click=${this._handleActionClick}
          ></vscode-icon>`;
          actionButtons.push(icon);
        }
      });
    }
    if (actionButtons.length > 0) {
      return x`<div class="actions">${actionButtons}</div>`;
    } else {
      return x`${E}`;
    }
  }
  _renderDecorations(item) {
    const decorations = [];
    if (item.decorations && Array.isArray(item.decorations)) {
      item.decorations.forEach((decoration) => {
        const { appearance = "text", visibleWhen = "always", content = "", color = "", focusedColor = "", hoverColor = "", selectedColor = "" } = decoration;
        const visibleWhenClass = `visible-when-${visibleWhen}`;
        const inlineStyles = {};
        if (color) {
          inlineStyles["--color"] = color;
        }
        if (focusedColor) {
          inlineStyles["--focused-color"] = focusedColor;
        }
        if (hoverColor) {
          inlineStyles["--hover-color"] = hoverColor;
        }
        if (selectedColor) {
          inlineStyles["--selected-color"] = selectedColor;
        }
        switch (appearance) {
          case "counter-badge":
            decorations.push(x`<vscode-badge
                variant="counter"
                class=${["counter-badge", visibleWhenClass].join(" ")}
                part="counter-badge-decoration"
                >${content}</vscode-badge
              >`);
            break;
          case "filled-circle":
            decorations.push(x`<vscode-icon
                name="circle-filled"
                size="14"
                class=${["filled-circle", visibleWhenClass].join(" ")}
                part="filled-circle-decoration"
                .style=${stylePropertyMap(inlineStyles)}
              ></vscode-icon>`);
            break;
          case "text":
            decorations.push(x`<div
                class=${["decoration-text", visibleWhenClass].join(" ")}
                part="caption-decoration"
                .style=${stylePropertyMap(inlineStyles)}
              >
                ${content}
              </div>`);
            break;
        }
      });
    }
    if (decorations.length > 0) {
      return x`<div class="decorations" part="decorations">
        ${decorations}
      </div>`;
    } else {
      return x`${E}`;
    }
  }
  _renderTreeItem(item, additionalOptions) {
    const { open = false, label, description = "", tooltip, selected = false, focused = false, subItems = [] } = item;
    const { path, itemType, hasFocusedItem = false, hasSelectedItem = false } = additionalOptions;
    const indentLevel = path.length - 1;
    const contentsClasses = ["contents"];
    const liClasses = open ? ["open"] : [];
    const indentSize = indentLevel * this.indent;
    const padLeft = this.arrows && itemType === "leaf" ? ARROW_OUTER_WIDTH + indentSize : indentSize;
    const arrowMarkup = this._renderArrow(item);
    const iconMarkup = this._renderIcon(item);
    const indentGuidePos = this.arrows ? indentSize + ARROW_ICON_WIDTH : indentSize + CONTENT_PADDING;
    const subTreeMarkup = open && itemType === "branch" ? x`<ul
            .style=${stylePropertyMap({
      "--indent-guide-pos": `${indentGuidePos}px`
    })}
            class=${e$2({
      "has-active-item": hasFocusedItem || hasSelectedItem
    })}
          >
            ${this._renderTree(subItems, path)}
          </ul>` : E;
    const descriptionMarkup = description ? x`<span class="description" part="description">${description}</span>` : E;
    const actionsMarkup = this._renderActions(item);
    const decorationsMarkup = this._renderDecorations(item);
    liClasses.push(itemType);
    if (selected) {
      contentsClasses.push("selected");
    }
    if (focused) {
      contentsClasses.push("focused");
    }
    return x`
      <li data-path=${path.join("/")} class=${liClasses.join(" ")}>
        <div
          class=${contentsClasses.join(" ")}
          .style=${stylePropertyMap({
      paddingLeft: `${padLeft + CONTENT_PADDING}px`
    })}
        >
          ${arrowMarkup}${iconMarkup}<span
            class="text-content"
            part="text-content"
            title=${o$1(tooltip)}
            >${label}${descriptionMarkup}</span
          >
          ${actionsMarkup} ${decorationsMarkup}
        </div>
        ${subTreeMarkup}
      </li>
    `;
  }
  _renderTree(tree, oldPath = []) {
    const ret = [];
    if (!tree) {
      return E;
    }
    tree.forEach((item, index) => {
      const path = [...oldPath, index];
      const itemType = isBranch(item) ? "branch" : "leaf";
      const { selected = false, focused = false, hasFocusedItem = false, hasSelectedItem = false } = item;
      if (selected) {
        this._selectedItem = item;
      }
      if (focused) {
        this._focusedItem = item;
      }
      ret.push(this._renderTreeItem(item, {
        path,
        itemType,
        hasFocusedItem,
        hasSelectedItem
      }));
    });
    return ret;
  }
  _selectItem(item) {
    if (this._selectedItem) {
      this._selectedItem.selected = false;
    }
    if (this._focusedItem) {
      this._focusedItem.focused = false;
    }
    this._selectedItem = item;
    item.selected = true;
    this._focusedItem = item;
    item.focused = true;
    if (this._selectedBranch) {
      this._selectedBranch.hasSelectedItem = false;
    }
    let parentBranch = null;
    if (item.path?.length && item.path.length > 1) {
      parentBranch = this._getItemByPath(item.path.slice(0, -1));
    }
    if (isBranch(item)) {
      this._selectedBranch = item;
      item.hasSelectedItem = true;
      item.open = !item.open;
      if (!item.open) {
        if (parentBranch) {
          this._selectedBranch = parentBranch;
          parentBranch.hasSelectedItem = true;
        }
      } else {
        this._selectedBranch = item;
        item.hasSelectedItem = true;
      }
    } else {
      if (item.path?.length && item.path.length > 1) {
        const parentBranch2 = this._getItemByPath(item.path.slice(0, -1));
        if (parentBranch2) {
          this._selectedBranch = parentBranch2;
          parentBranch2.hasSelectedItem = true;
        }
      } else {
        this._selectedBranch = item;
        item.hasSelectedItem = true;
      }
    }
    this._emitSelectEvent(this._selectedItem, this._selectedItem.path.join("/"));
    this.requestUpdate();
  }
  _focusItem(item) {
    if (this._focusedItem) {
      this._focusedItem.focused = false;
    }
    this._focusedItem = item;
    item.focused = true;
    const isBranch2 = !!item?.subItems?.length;
    if (this._focusedBranch) {
      this._focusedBranch.hasFocusedItem = false;
    }
    let parentBranch = null;
    if (item.path?.length && item.path.length > 1) {
      parentBranch = this._getItemByPath(item.path.slice(0, -1));
    }
    if (!isBranch2) {
      if (parentBranch) {
        this._focusedBranch = parentBranch;
        parentBranch.hasFocusedItem = true;
      }
    } else {
      if (item.open) {
        this._focusedBranch = item;
        item.hasFocusedItem = true;
      } else if (!item.open && parentBranch) {
        this._focusedBranch = parentBranch;
        parentBranch.hasFocusedItem = true;
      }
    }
  }
  _closeSubTreeRecursively(tree) {
    tree.forEach((item) => {
      item.open = false;
      if (item.subItems && item.subItems.length > 0) {
        this._closeSubTreeRecursively(item.subItems);
      }
    });
  }
  _deselectItemsRecursively(tree) {
    tree.forEach((item) => {
      if (item.selected) {
        item.selected = false;
      }
      if (item.subItems && item.subItems.length > 0) {
        this._deselectItemsRecursively(item.subItems);
      }
    });
  }
  _emitSelectEvent(item, path) {
    const { icons, label, open, value } = item;
    const detail = {
      icons,
      itemType: isBranch(item) ? "branch" : "leaf",
      label,
      open: open || false,
      value: value || label,
      path
    };
    this.dispatchEvent(new CustomEvent("vsc-select", {
      bubbles: true,
      composed: true,
      detail
    }));
    this.dispatchEvent(new CustomEvent("vsc-tree-select", {
      detail
    }));
  }
  _focusPrevItem() {
    if (!this._focusedItem) {
      this._focusItem(this._data[0]);
      return;
    }
    const { path } = this._focusedItem;
    if (path && path?.length > 0) {
      const currentItemIndex = path[path.length - 1];
      const hasParent = path.length > 1;
      if (currentItemIndex > 0) {
        const newPath = [...path];
        newPath[newPath.length - 1] = currentItemIndex - 1;
        const prevSibling = this._getItemByPath(newPath);
        let newFocusedItem = prevSibling;
        if (prevSibling?.open && prevSibling.subItems?.length) {
          const { subItems } = prevSibling;
          newFocusedItem = subItems[subItems.length - 1];
        }
        this._focusItem(newFocusedItem);
      } else {
        if (hasParent) {
          const newPath = [...path];
          newPath.pop();
          this._focusItem(this._getItemByPath(newPath));
        }
      }
    } else {
      this._focusItem(this._data[0]);
    }
  }
  _focusNextItem() {
    if (!this._focusedItem) {
      this._focusItem(this._data[0]);
      return;
    }
    const { path, open } = this._focusedItem;
    if (open && Array.isArray(this._focusedItem.subItems) && this._focusedItem.subItems.length > 0) {
      this._focusItem(this._focusedItem.subItems[0]);
      return;
    }
    const nextPath = [...path];
    nextPath[nextPath.length - 1] += 1;
    let nextFocusedItem = this._getItemByPath(nextPath);
    if (nextFocusedItem) {
      this._focusItem(nextFocusedItem);
    } else {
      nextPath.pop();
      if (nextPath.length > 0) {
        nextPath[nextPath.length - 1] += 1;
        nextFocusedItem = this._getItemByPath(nextPath);
        if (nextFocusedItem) {
          this._focusItem(nextFocusedItem);
        }
      }
    }
  }
  _handleClick(event) {
    const composedPath = event.composedPath();
    const targetElement = composedPath.find((el) => el.tagName && el.tagName.toUpperCase() === "LI");
    if (targetElement) {
      const pathStr = targetElement.dataset.path || "";
      const path = pathStr.split("/").map((el) => Number(el));
      const item = this._getItemByPath(path);
      this._selectItem(item);
    } else {
      if (this._focusedItem) {
        this._focusedItem.focused = false;
      }
      this._focusedItem = null;
    }
  }
  _handleComponentKeyDown(ev) {
    const keys = [
      " ",
      "ArrowDown",
      "ArrowUp",
      "Enter",
      "Escape"
    ];
    const key = ev.key;
    if (keys.includes(ev.key)) {
      ev.stopPropagation();
      ev.preventDefault();
    }
    if (key === "Escape") {
      this._focusedItem = null;
    }
    if (key === "ArrowUp") {
      this._focusPrevItem();
    }
    if (key === "ArrowDown") {
      this._focusNextItem();
    }
    if (key === "Enter" || key === " ") {
      if (this._focusedItem) {
        this._selectItem(this._focusedItem);
      }
    }
  }
  render() {
    const classes = e$2({
      multi: this.multiline,
      single: !this.multiline,
      wrapper: true,
      "has-not-focused-item": !this._focusedItem,
      "selection-none": !this._selectedItem,
      "selection-single": this._selectedItem !== null
    });
    return x`
      <div @click=${this._handleClick} class=${classes}>
        <ul>
          ${this._renderTree(this._data)}
        </ul>
      </div>
    `;
  }
};
VscodeTree.styles = styles;
__decorate([
  n$1({ type: Array, reflect: false })
], VscodeTree.prototype, "data", null);
__decorate([
  n$1({ type: Number })
], VscodeTree.prototype, "indent", void 0);
__decorate([
  n$1({ type: Boolean, reflect: true })
], VscodeTree.prototype, "arrows", void 0);
__decorate([
  n$1({ type: Boolean, reflect: true })
], VscodeTree.prototype, "multiline", void 0);
__decorate([
  n$1({ type: Number, reflect: true })
], VscodeTree.prototype, "tabindex", void 0);
__decorate([
  n$1({ type: Boolean, reflect: true, attribute: "indent-guides" })
], VscodeTree.prototype, "indentGuides", void 0);
__decorate([
  r$2()
], VscodeTree.prototype, "_selectedItem", void 0);
__decorate([
  r$2()
], VscodeTree.prototype, "_focusedItem", void 0);
__decorate([
  r$2()
], VscodeTree.prototype, "_selectedBranch", void 0);
__decorate([
  r$2()
], VscodeTree.prototype, "_focusedBranch", void 0);
VscodeTree = __decorate([
  customElement("vscode-tree")
], VscodeTree);
const app = createApp(_sfc_main);
app.mount("#app");
