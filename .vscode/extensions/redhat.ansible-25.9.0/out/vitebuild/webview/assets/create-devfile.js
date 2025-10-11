import { d as defineComponent, f as ref, L as computed, J as onMounted, v as vscodeApi, c as createElementBlock, o as openBlock, a as createBaseVNode, h as createTextVNode, k as withDirectives, l as vModelText, t as toDisplayString, P as withModifiers, u as unref, N as isRef, B as normalizeClass, p as createApp } from "./vscode.js";
import "./vscode-button.js";
import { u as useCommonWebviewState, s as setupMessageHandler, i as initializeUI, b as createActionWrapper, d as clearLogs, o as openFolderExplorer } from "./webviewUtils.js";
import "./vscode-textfield.js";
const _hoisted_1 = { id: "devfile-form" };
const _hoisted_2 = { class: "component-container" };
const _hoisted_3 = { variant: "vertical" };
const _hoisted_4 = ["placeholder"];
const _hoisted_5 = { variant: "vertical" };
const _hoisted_6 = ["placeholder"];
const _hoisted_7 = {
  id: "full-devfile-path",
  class: "full-devfile-path"
};
const _hoisted_8 = { class: "image-div" };
const _hoisted_9 = { class: "dropdown-container" };
const _hoisted_10 = ["value"];
const _hoisted_11 = { class: "checkbox-div" };
const _hoisted_12 = ["checked"];
const _hoisted_13 = { class: "group-buttons" };
const _hoisted_14 = ["disabled"];
const _hoisted_15 = { variant: "vertical" };
const _hoisted_16 = { class: "group-buttons" };
const _hoisted_17 = ["disabled"];
const _hoisted_18 = ["disabled"];
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "CreateDevfileApp",
  setup(__props) {
    const commonState = useCommonWebviewState();
    const logs = commonState.logs;
    const isCreating = commonState.isCreating;
    const homeDir = ref("");
    const destinationPath = ref("");
    const devfileName = ref("");
    const selectedImage = ref("Upstream (ghcr.io/ansible/ansible-devspaces:latest)");
    const isOverwritten = ref(false);
    const projectUrl = ref("");
    const openDevfileButtonDisabled = ref(true);
    const createButtonDisabled = ref(true);
    const clearLogsButtonDisabled = ref(true);
    const defaultDestinationPath = ref("");
    const defaultProjectName = ref("");
    const requirementsMet = ref(true);
    const requirementFailures = ref([]);
    const isFormValid = computed(() => {
      const currentPath = destinationPath.value.trim() || defaultDestinationPath.value || homeDir.value;
      const currentName = devfileName.value.trim() || defaultProjectName.value;
      const isValid = currentPath !== "" && currentPath !== void 0 && currentName !== "" && currentName !== void 0;
      console.log("Form validation check:", {
        currentPath,
        currentName,
        isValid,
        destinationPath: destinationPath.value,
        devfileName: devfileName.value
      });
      return isValid;
    });
    const displayPath = computed(() => {
      return destinationPath.value.trim() || defaultDestinationPath.value || homeDir.value;
    });
    const displayName = computed(() => {
      return devfileName.value.trim() || defaultProjectName.value;
    });
    const devfilePath = computed(() => {
      const path = displayPath.value;
      displayName.value;
      if (!path) {
        return "No folders are open in the workspace - Enter a destination directory.";
      }
      return `${path}/devfile.yaml`;
    });
    const handleOpenFolderExplorer = () => {
      openFolderExplorer(
        destinationPath.value || defaultDestinationPath.value || homeDir.value,
        homeDir.value,
        { selectOption: "folder" }
      );
    };
    const handleOpenDevfile = () => {
      if (!projectUrl.value) return;
      vscodeApi.postMessage({
        type: "init-open-devfile",
        payload: {
          projectUrl: projectUrl.value
        }
      });
    };
    const handleCreate = createActionWrapper(
      isCreating,
      logs,
      createButtonDisabled,
      () => {
        if (!isFormValid.value) {
          return;
        }
        openDevfileButtonDisabled.value = true;
        clearLogsButtonDisabled.value = true;
        const path = destinationPath.value.trim() || defaultDestinationPath.value || homeDir.value;
        const name = devfileName.value.trim() || defaultProjectName.value;
        if (!path || !name) {
          console.error("Missing required fields: path or name");
          return;
        }
        const payload = {
          destinationPath: path,
          name,
          image: selectedImage.value.trim(),
          isOverwritten: isOverwritten.value
        };
        vscodeApi.postMessage({
          type: "init-create-devfile",
          payload
        });
      }
    );
    const onClear = () => {
      destinationPath.value = defaultDestinationPath.value || homeDir.value;
      devfileName.value = defaultProjectName.value;
      selectedImage.value = "Upstream (ghcr.io/ansible/ansible-devspaces:latest)";
      isOverwritten.value = false;
      logs.value = "";
      projectUrl.value = "";
      openDevfileButtonDisabled.value = true;
      clearLogsButtonDisabled.value = true;
      createButtonDisabled.value = !isFormValid.value || isCreating.value;
      isCreating.value = false;
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
        onHomeDirectory: (data) => {
          console.log("onHomeDirectory called with:", data);
          homeDir.value = data;
          if (!defaultDestinationPath.value) {
            defaultDestinationPath.value = data;
            destinationPath.value = data;
          }
          if (data && !defaultProjectName.value) {
            const projectNameSplit = data.split("/");
            const extractedName = projectNameSplit[projectNameSplit.length - 1];
            console.log("Extracted project name:", extractedName);
            if (extractedName) {
              defaultProjectName.value = extractedName;
              devfileName.value = extractedName;
            }
          }
        },
        onHomedirAndTempdir: (homedir, tempdir) => {
          console.log("onHomedirAndTempdir called with:", { homedir, tempdir });
          if (homedir && !defaultDestinationPath.value) {
            defaultDestinationPath.value = homedir;
            destinationPath.value = homedir;
            const pathParts = homedir.split("/");
            const extractedName = pathParts[pathParts.length - 1];
            console.log("Extracted project name from homedir:", extractedName);
            if (extractedName && !defaultProjectName.value) {
              defaultProjectName.value = extractedName;
              devfileName.value = extractedName;
            }
          }
        },
        onFolderSelected: (data) => {
          destinationPath.value = data;
        },
        onExecutionLog: (args) => {
          logs.value = args.commandOutput || "";
          projectUrl.value = args.projectUrl || "";
          if (args.status === "passed") {
            openDevfileButtonDisabled.value = false;
          } else {
            openDevfileButtonDisabled.value = true;
          }
          clearLogsButtonDisabled.value = false;
          isCreating.value = false;
          createButtonDisabled.value = !isFormValid.value || isCreating.value;
        }
      });
      initializeUI();
      setTimeout(() => {
        console.log("Checking if values were set:", {
          destinationPath: destinationPath.value,
          defaultDestinationPath: defaultDestinationPath.value,
          devfileName: devfileName.value,
          defaultProjectName: defaultProjectName.value
        });
      }, 1e3);
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("body", null, [
        createBaseVNode("div", {
          class: normalizeClass({ "disabled-content": !requirementsMet.value })
        }, [
          _cache[19] || (_cache[19] = createBaseVNode("div", { class: "title-description-div" }, [
            createBaseVNode("h1", null, "Create a devfile"),
            createBaseVNode("p", { class: "subtitle" }, "Leverage Red Hat Openshift Dev Spaces")
          ], -1)),
          _cache[20] || (_cache[20] = createBaseVNode("div", { class: "description-div" }, [
            createBaseVNode("h3", null, [
              createTextVNode("Devfiles are yaml files used for development environment customization."),
              createBaseVNode("br"),
              createBaseVNode("br"),
              createTextVNode("Enter your project details below to utilize a devfile template designed for Red Hat OpenShift Dev Spaces.")
            ])
          ], -1)),
          createBaseVNode("form", _hoisted_1, [
            createBaseVNode("section", _hoisted_2, [
              createBaseVNode("vscode-form-group", _hoisted_3, [
                _cache[7] || (_cache[7] = createBaseVNode("vscode-label", { for: "path-url" }, [
                  createBaseVNode("span", { class: "normal" }, "Destination directory"),
                  createBaseVNode("sup", null, "*")
                ], -1)),
                withDirectives(createBaseVNode("vscode-textfield", {
                  id: "path-url",
                  "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => destinationPath.value = $event),
                  class: "required",
                  form: "devfile-form",
                  placeholder: defaultDestinationPath.value || homeDir.value,
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
              createBaseVNode("vscode-form-group", _hoisted_5, [
                _cache[8] || (_cache[8] = createBaseVNode("vscode-label", { for: "devfile-name" }, [
                  createBaseVNode("span", { class: "normal" }, "Ansible project name"),
                  createBaseVNode("sup", null, "*")
                ], -1)),
                withDirectives(createBaseVNode("vscode-textfield", {
                  id: "devfile-name",
                  "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => devfileName.value = $event),
                  form: "devfile-form",
                  placeholder: defaultProjectName.value,
                  size: "512"
                }, null, 8, _hoisted_6), [
                  [vModelText, devfileName.value]
                ])
              ]),
              createBaseVNode("div", _hoisted_7, [
                createBaseVNode("p", null, "Devfile path: " + toDisplayString(devfilePath.value), 1)
              ]),
              createBaseVNode("div", _hoisted_8, [
                createBaseVNode("div", _hoisted_9, [
                  _cache[10] || (_cache[10] = createBaseVNode("vscode-label", { for: "image-dropdown" }, [
                    createBaseVNode("span", { class: "normal" }, "Container image")
                  ], -1)),
                  createBaseVNode("vscode-single-select", {
                    id: "image-dropdown",
                    value: selectedImage.value,
                    onChange: _cache[2] || (_cache[2] = ($event) => selectedImage.value = $event.target.value),
                    position: "below"
                  }, _cache[9] || (_cache[9] = [
                    createBaseVNode("vscode-option", { value: "Upstream (ghcr.io/ansible/ansible-devspaces:latest)" }, " Upstream (ghcr.io/ansible/ansible-devspaces:latest) ", -1)
                  ]), 40, _hoisted_10)
                ])
              ]),
              createBaseVNode("div", _hoisted_11, [
                createBaseVNode("vscode-checkbox", {
                  id: "overwrite-checkbox",
                  checked: isOverwritten.value,
                  onChange: _cache[3] || (_cache[3] = ($event) => isOverwritten.value = $event.target.checked),
                  form: "devfile-form"
                }, _cache[11] || (_cache[11] = [
                  createTextVNode(" Overwrite "),
                  createBaseVNode("br", null, null, -1),
                  createBaseVNode("i", null, "Overwrite an existing devfile.", -1)
                ]), 40, _hoisted_12)
              ]),
              createBaseVNode("div", _hoisted_13, [
                createBaseVNode("vscode-button", {
                  id: "reset-button",
                  onClick: withModifiers(onClear, ["prevent"]),
                  form: "devfile-form",
                  appearance: "secondary"
                }, _cache[12] || (_cache[12] = [
                  createBaseVNode("span", { class: "codicon codicon-clear-all" }, null, -1),
                  createTextVNode("   Reset All ")
                ])),
                createBaseVNode("vscode-button", {
                  id: "create-button",
                  onClick: _cache[4] || (_cache[4] = withModifiers(
                    //@ts-ignore
                    (...args) => unref(handleCreate) && unref(handleCreate)(...args),
                    ["prevent"]
                  )),
                  disabled: !isFormValid.value || unref(isCreating),
                  form: "devfile-form"
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
                  readonly: "",
                  style: { "width": "100%", "height": "200px" }
                }, null, 512), [
                  [vModelText, unref(logs)]
                ])
              ]),
              createBaseVNode("div", _hoisted_16, [
                createBaseVNode("vscode-button", {
                  id: "clear-logs-button",
                  onClick: _cache[6] || (_cache[6] = withModifiers(($event) => unref(clearLogs)(unref(commonState).logs), ["prevent"])),
                  disabled: clearLogsButtonDisabled.value,
                  form: "devfile-form",
                  appearance: "secondary"
                }, _cache[15] || (_cache[15] = [
                  createBaseVNode("span", { class: "codicon codicon-clear-all" }, null, -1),
                  createTextVNode("   Clear Logs ")
                ]), 8, _hoisted_17),
                createBaseVNode("vscode-button", {
                  id: "open-file-button",
                  onClick: withModifiers(handleOpenDevfile, ["prevent"]),
                  disabled: openDevfileButtonDisabled.value,
                  form: "devfile-form",
                  appearance: "secondary"
                }, _cache[16] || (_cache[16] = [
                  createBaseVNode("span", { class: "codicon codicon-go-to-file" }, null, -1),
                  createTextVNode("   Open Devfile ")
                ]), 8, _hoisted_18)
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
