import { d as defineComponent, f as ref, L as computed, j as watch, J as onMounted, v as vscodeApi, c as createElementBlock, o as openBlock, a as createBaseVNode, h as createTextVNode, k as withDirectives, l as vModelText, t as toDisplayString, P as withModifiers, u as unref, N as isRef, B as normalizeClass, p as createApp } from "./vscode.js";
import "./vscode-button.js";
import { u as useCommonWebviewState, s as setupMessageHandler, j as createFormValidator, i as initializeUI, b as createActionWrapper, d as clearLogs, o as openFolderExplorer } from "./webviewUtils.js";
import "./vscode-textfield.js";
const _hoisted_1 = { id: "devcontainer-form" };
const _hoisted_2 = { class: "component-container" };
const _hoisted_3 = { variant: "vertical" };
const _hoisted_4 = ["placeholder"];
const _hoisted_5 = {
  id: "full-devcontainer-path",
  class: "full-devcontainer-path"
};
const _hoisted_6 = { class: "image-div" };
const _hoisted_7 = { class: "dropdown-container" };
const _hoisted_8 = ["value"];
const _hoisted_9 = { class: "checkbox-div" };
const _hoisted_10 = ["checked"];
const _hoisted_11 = { class: "group-buttons" };
const _hoisted_12 = ["disabled"];
const _hoisted_13 = { variant: "vertical" };
const _hoisted_14 = { class: "group-buttons" };
const _hoisted_15 = ["disabled"];
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "CreateDevcontainerApp",
  setup(__props) {
    const commonState = useCommonWebviewState();
    const logs = commonState.logs;
    const isCreating = commonState.isCreating;
    const homeDir = ref("");
    const destinationPath = ref("");
    const selectedImage = ref("upstream");
    const isOverwritten = ref(false);
    const projectUrl = ref("");
    const openDevcontainerButtonDisabled = ref(true);
    const createButtonDisabled = ref(true);
    const defaultDestinationPath = ref("");
    const requirementsMet = ref(true);
    const requirementFailures = ref([]);
    const isFormValid = createFormValidator({
      destinationPath: () => {
        return destinationPath.value.trim() !== "" || (defaultDestinationPath.value || homeDir.value) !== "";
      }
    });
    const displayPath = computed(() => {
      return destinationPath.value.trim() || defaultDestinationPath.value || homeDir.value;
    });
    const devcontainerPath = computed(() => {
      const path = displayPath.value;
      if (!path) {
        return "No folders are open in the workspace - Enter a destination directory.";
      }
      return `${path}/.devcontainer`;
    });
    const handleOpenFolderExplorer = () => {
      openFolderExplorer(
        destinationPath.value || defaultDestinationPath.value || homeDir.value,
        homeDir.value,
        { selectOption: "folder" }
      );
    };
    const handleOpenDevcontainer = () => {
      if (!projectUrl.value) return;
      vscodeApi.postMessage({
        type: "init-open-devcontainer-folder",
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
        openDevcontainerButtonDisabled.value = true;
        let path;
        if (destinationPath.value === "" || !destinationPath.value.trim()) {
          path = defaultDestinationPath.value || homeDir.value;
        } else {
          path = destinationPath.value.trim();
        }
        const payload = {
          destinationPath: path,
          image: selectedImage.value.trim(),
          isOverwritten: isOverwritten.value
        };
        vscodeApi.postMessage({
          type: "init-create-devcontainer",
          payload
        });
      }
    );
    const onClear = () => {
      destinationPath.value = defaultDestinationPath.value || homeDir.value;
      selectedImage.value = "upstream";
      isOverwritten.value = false;
      logs.value = "";
      projectUrl.value = "";
      openDevcontainerButtonDisabled.value = true;
      createButtonDisabled.value = !isFormValid() || isCreating.value;
      isCreating.value = false;
    };
    watch([destinationPath, isCreating], () => {
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
          if (!defaultDestinationPath.value) {
            defaultDestinationPath.value = data;
            destinationPath.value = data;
          }
        },
        onHomedirAndTempdir: (homedir) => {
          if (homedir && !defaultDestinationPath.value) {
            defaultDestinationPath.value = homedir;
            destinationPath.value = homedir;
          }
        },
        onFolderSelected: (data) => {
          destinationPath.value = data;
        },
        onExecutionLog: (args) => {
          logs.value = args.commandOutput || "";
          projectUrl.value = args.projectUrl || "";
          if (args.status === "passed") {
            openDevcontainerButtonDisabled.value = false;
          } else {
            openDevcontainerButtonDisabled.value = true;
          }
          isCreating.value = false;
          createButtonDisabled.value = !isFormValid() || isCreating.value;
        }
      });
      initializeUI();
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("body", null, [
        createBaseVNode("div", {
          class: normalizeClass({ "disabled-content": !requirementsMet.value })
        }, [
          _cache[17] || (_cache[17] = createBaseVNode("div", { class: "title-description-div" }, [
            createBaseVNode("h1", null, "Create a devcontainer"),
            createBaseVNode("p", { class: "subtitle" }, "Build containerized development environments")
          ], -1)),
          _cache[18] || (_cache[18] = createBaseVNode("div", { class: "description-div" }, [
            createBaseVNode("h3", null, [
              createTextVNode("Devcontainers are json files used for building containerized development environments."),
              createBaseVNode("br"),
              createBaseVNode("br"),
              createTextVNode("Enter your project details below to utilize a devcontainer template designed for the "),
              createBaseVNode("a", { href: "https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers" }, "Dev Containers"),
              createTextVNode(" extension.")
            ])
          ], -1)),
          createBaseVNode("form", _hoisted_1, [
            createBaseVNode("section", _hoisted_2, [
              createBaseVNode("vscode-form-group", _hoisted_3, [
                _cache[6] || (_cache[6] = createBaseVNode("vscode-label", { for: "path-url" }, [
                  createBaseVNode("span", { class: "normal" }, "Destination directory "),
                  createBaseVNode("sup", null, "*")
                ], -1)),
                withDirectives(createBaseVNode("vscode-textfield", {
                  id: "path-url",
                  "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => destinationPath.value = $event),
                  class: "required",
                  form: "devcontainer-form",
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
              createBaseVNode("div", _hoisted_5, [
                createBaseVNode("p", null, "Devcontainer path: " + toDisplayString(devcontainerPath.value), 1)
              ]),
              createBaseVNode("div", _hoisted_6, [
                createBaseVNode("div", _hoisted_7, [
                  _cache[8] || (_cache[8] = createBaseVNode("vscode-label", { for: "image-dropdown" }, [
                    createBaseVNode("span", { class: "normal" }, "Container image")
                  ], -1)),
                  createBaseVNode("vscode-single-select", {
                    id: "image-dropdown",
                    value: selectedImage.value,
                    onChange: _cache[1] || (_cache[1] = ($event) => selectedImage.value = $event.target.value),
                    position: "below"
                  }, _cache[7] || (_cache[7] = [
                    createBaseVNode("vscode-option", { value: "upstream" }, " Upstream (ghcr.io/ansible/community-ansible-dev-tools:latest) ", -1),
                    createBaseVNode("vscode-option", { value: "downstream" }, " Downstream (registry.redhat.io/ansible-automation-platform-25/ansible-dev-tools-rhel8:latest) ", -1)
                  ]), 40, _hoisted_8)
                ])
              ]),
              createBaseVNode("div", _hoisted_9, [
                createBaseVNode("vscode-checkbox", {
                  id: "overwrite-checkbox",
                  checked: isOverwritten.value,
                  onChange: _cache[2] || (_cache[2] = ($event) => isOverwritten.value = $event.target.checked),
                  form: "devcontainer-form"
                }, _cache[9] || (_cache[9] = [
                  createTextVNode(" Overwrite "),
                  createBaseVNode("br", null, null, -1),
                  createBaseVNode("i", null, "Overwrite an existing devcontainer.", -1)
                ]), 40, _hoisted_10)
              ]),
              createBaseVNode("div", _hoisted_11, [
                createBaseVNode("vscode-button", {
                  id: "reset-button",
                  onClick: withModifiers(onClear, ["prevent"]),
                  form: "devcontainer-form",
                  appearance: "secondary"
                }, _cache[10] || (_cache[10] = [
                  createBaseVNode("span", { class: "codicon codicon-clear-all" }, null, -1),
                  createTextVNode("   Reset All ")
                ])),
                createBaseVNode("vscode-button", {
                  id: "create-button",
                  onClick: _cache[3] || (_cache[3] = withModifiers(
                    //@ts-ignore
                    (...args) => unref(handleCreate) && unref(handleCreate)(...args),
                    ["prevent"]
                  )),
                  disabled: !unref(isFormValid) || unref(isCreating),
                  form: "devcontainer-form"
                }, [
                  _cache[11] || (_cache[11] = createBaseVNode("span", { class: "codicon codicon-run-all" }, null, -1)),
                  createTextVNode("   " + toDisplayString(unref(isCreating) ? "Creating..." : "Create"), 1)
                ], 8, _hoisted_12)
              ]),
              _cache[15] || (_cache[15] = createBaseVNode("vscode-divider", null, null, -1)),
              createBaseVNode("vscode-form-group", _hoisted_13, [
                _cache[12] || (_cache[12] = createBaseVNode("vscode-label", {
                  id: "vscode-logs-label",
                  for: "log-text-area"
                }, [
                  createBaseVNode("span", { class: "normal" }, "Logs")
                ], -1)),
                withDirectives(createBaseVNode("vscode-textarea", {
                  id: "log-text-area",
                  "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => isRef(logs) ? logs.value = $event : null),
                  cols: "90",
                  rows: "15",
                  placeholder: "Output of the command execution",
                  resize: "vertical",
                  readonly: "",
                  style: { "width": "100%", "height": "200px" }
                }, null, 512), [
                  [vModelText, unref(logs)]
                ])
              ]),
              createBaseVNode("div", _hoisted_14, [
                createBaseVNode("vscode-button", {
                  id: "clear-logs-button",
                  onClick: _cache[5] || (_cache[5] = withModifiers(($event) => unref(clearLogs)(unref(commonState).logs), ["prevent"])),
                  form: "devcontainer-form",
                  appearance: "secondary"
                }, _cache[13] || (_cache[13] = [
                  createBaseVNode("span", { class: "codicon codicon-clear-all" }, null, -1),
                  createTextVNode("   Clear Logs ")
                ])),
                createBaseVNode("vscode-button", {
                  id: "open-file-button",
                  onClick: withModifiers(handleOpenDevcontainer, ["prevent"]),
                  disabled: openDevcontainerButtonDisabled.value,
                  form: "devcontainer-form",
                  appearance: "secondary"
                }, _cache[14] || (_cache[14] = [
                  createBaseVNode("span", { class: "codicon codicon-go-to-file" }, null, -1),
                  createTextVNode("   Open Devcontainer ")
                ]), 8, _hoisted_15)
              ]),
              _cache[16] || (_cache[16] = createBaseVNode("div", {
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
