import { d as defineComponent, f as ref, L as computed, J as onMounted, c as createElementBlock, o as openBlock, a as createBaseVNode, g as createCommentVNode, P as withModifiers, h as createTextVNode, F as Fragment, r as renderList, t as toDisplayString, B as normalizeClass, v as vscodeApi, p as createApp } from "./vscode.js";
const _hoisted_1 = { class: "playbookGenerationSlideCategories" };
const _hoisted_2 = { class: "playbookGenerationCategoriesContainer" };
const _hoisted_3 = { class: "header" };
const _hoisted_4 = {
  key: 0,
  id: "system-readiness",
  class: "statusDisplay"
};
const _hoisted_5 = {
  key: 0,
  class: "codicon codicon-pass"
};
const _hoisted_6 = {
  key: 1,
  class: "codicon codicon-error"
};
const _hoisted_7 = { class: "system-description" };
const _hoisted_8 = ["innerHTML"];
const _hoisted_9 = { class: "categories-column-left" };
const _hoisted_10 = { class: "index-list start-container" };
const _hoisted_11 = { class: "catalogue" };
const _hoisted_12 = { class: "catalogue" };
const _hoisted_13 = { class: "catalogue" };
const _hoisted_14 = { class: "catalogue" };
const _hoisted_15 = { class: "catalogue" };
const _hoisted_16 = { class: "index-list start-container" };
const _hoisted_17 = { class: "catalogue" };
const _hoisted_18 = { class: "catalogue" };
const _hoisted_19 = { class: "categories-column-right" };
const _hoisted_20 = { class: "index-list getting-started" };
const _hoisted_21 = { id: "system-check" };
const _hoisted_22 = {
  key: 0,
  id: "walkthrough-list"
};
const _hoisted_23 = ["onClick"];
const _hoisted_24 = { class: "main-content" };
const _hoisted_25 = { class: "icon-widget" };
const _hoisted_26 = ["src"];
const _hoisted_27 = { class: "category-title" };
const _hoisted_28 = {
  key: 0,
  class: "description-content"
};
const _hoisted_29 = {
  key: 1,
  class: "no-walkthroughs"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "WelcomePageApp",
  setup(__props) {
    const systemReadinessStatus = ref("");
    const systemReadinessIcon = ref("");
    const systemReadinessDescription = ref("");
    const walkthroughs = ref([]);
    const isLoading = ref(true);
    const logoUrl = ref("");
    const ansibleVersionStatus = ref("");
    const ansibleLocationStatus = ref("");
    const pythonVersionStatus = ref("");
    const pythonLocationStatus = ref("");
    const ansibleCreatorVersionStatus = ref("");
    const ansibleDevEnvironmentStatus = ref("");
    const hasSystemStatus = computed(() => {
      return systemReadinessStatus.value !== "";
    });
    const isSystemReady = computed(() => {
      return systemReadinessIcon.value === "pass";
    });
    const handleWalkthroughClick = (walkthroughId) => {
      vscodeApi.postMessage({
        type: "walkthrough-click",
        payload: { id: walkthroughId }
      });
    };
    const handleCommandClick = (command) => {
      vscodeApi.postMessage({
        type: "command-click",
        payload: { command }
      });
    };
    const handleExternalLink = (url) => {
      vscodeApi.postMessage({
        type: "external-link",
        payload: { url }
      });
    };
    const updateAnsibleCreatorAvailabilityStatus = () => {
      vscodeApi.postMessage({
        type: "check-system-status"
      });
    };
    const handleSystemStatusUpdate = (data) => {
      console.log("Received system status update:", data);
      if (data.systemReadiness) {
        systemReadinessStatus.value = data.systemReadiness.status;
        systemReadinessIcon.value = data.systemReadiness.icon;
        systemReadinessDescription.value = data.systemReadiness.description;
      }
      if (data.details) {
        ansibleVersionStatus.value = data.details.ansibleVersion || "";
        ansibleLocationStatus.value = data.details.ansibleLocation || "";
        pythonVersionStatus.value = data.details.pythonVersion || "";
        pythonLocationStatus.value = data.details.pythonLocation || "";
        ansibleCreatorVersionStatus.value = data.details.ansibleCreatorVersion || "";
        ansibleDevEnvironmentStatus.value = data.details.ansibleDevEnvironment || "";
      }
      if (data.walkthroughs) {
        console.log("Setting walkthroughs:", data.walkthroughs);
        walkthroughs.value = data.walkthroughs;
      }
      if (data.logoUrl) {
        logoUrl.value = data.logoUrl;
      }
      isLoading.value = false;
    };
    onMounted(() => {
      window.addEventListener("message", (event) => {
        const message = event.data;
        switch (message.type) {
          case "system-status-update":
            handleSystemStatusUpdate(message.payload);
            break;
        }
      });
      updateAnsibleCreatorAvailabilityStatus();
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["playbookGenerationContainer", { loading: isLoading.value }])
      }, [
        createBaseVNode("div", _hoisted_1, [
          createBaseVNode("div", _hoisted_2, [
            createBaseVNode("div", _hoisted_3, [
              _cache[7] || (_cache[7] = createBaseVNode("h1", { class: "title caption" }, "Ansible Development Tools", -1)),
              _cache[8] || (_cache[8] = createBaseVNode("p", { class: "subtitle description" }, "Create, test and deploy Ansible content in your IT environment", -1)),
              hasSystemStatus.value ? (openBlock(), createElementBlock("div", _hoisted_4, [
                isSystemReady.value ? (openBlock(), createElementBlock("span", _hoisted_5)) : (openBlock(), createElementBlock("span", _hoisted_6)),
                createBaseVNode("div", _hoisted_7, [
                  createBaseVNode("p", {
                    innerHTML: systemReadinessDescription.value.replace(/\n/g, "<br>")
                  }, null, 8, _hoisted_8)
                ])
              ])) : createCommentVNode("", true)
            ]),
            createBaseVNode("div", _hoisted_9, [
              createBaseVNode("div", _hoisted_10, [
                _cache[19] || (_cache[19] = createBaseVNode("h2", null, "Start", -1)),
                createBaseVNode("div", _hoisted_11, [
                  createBaseVNode("h3", null, [
                    createBaseVNode("a", {
                      href: "#",
                      onClick: _cache[0] || (_cache[0] = withModifiers(($event) => handleCommandClick("ansible.lightspeed.playbookGeneration"), ["prevent"]))
                    }, _cache[9] || (_cache[9] = [
                      createBaseVNode("span", { class: "codicon codicon-file-code" }, null, -1),
                      createTextVNode(" Playbook with Ansible Lightspeed ")
                    ]))
                  ]),
                  _cache[10] || (_cache[10] = createBaseVNode("p", null, "Create a lists of tasks that automatically execute for your specified inventory or groups of hosts.", -1))
                ]),
                createBaseVNode("div", _hoisted_12, [
                  createBaseVNode("h3", null, [
                    createBaseVNode("a", {
                      href: "#",
                      onClick: _cache[1] || (_cache[1] = withModifiers(($event) => handleCommandClick("ansible.content-creator.create-ansible-project"), ["prevent"]))
                    }, _cache[11] || (_cache[11] = [
                      createBaseVNode("span", { class: "codicon codicon-file-zip" }, null, -1),
                      createTextVNode(" New playbook project ")
                    ]))
                  ]),
                  _cache[12] || (_cache[12] = createBaseVNode("p", null, "Create a foundational framework and structure for setting your Ansible project with playbooks, roles, variables, templates, and other files.", -1))
                ]),
                createBaseVNode("div", _hoisted_13, [
                  createBaseVNode("h3", null, [
                    createBaseVNode("a", {
                      href: "#",
                      onClick: _cache[2] || (_cache[2] = withModifiers(($event) => handleCommandClick("ansible.content-creator.create-ansible-collection"), ["prevent"]))
                    }, _cache[13] || (_cache[13] = [
                      createBaseVNode("span", { class: "codicon codicon-file-zip" }, null, -1),
                      createTextVNode(" New collection project ")
                    ]))
                  ]),
                  _cache[14] || (_cache[14] = createBaseVNode("p", null, "Create a structure for your Ansible collection that includes modules, plugins, molecule scenarios and tests.", -1))
                ]),
                createBaseVNode("div", _hoisted_14, [
                  createBaseVNode("h3", null, [
                    createBaseVNode("a", {
                      href: "#",
                      onClick: _cache[3] || (_cache[3] = withModifiers(($event) => handleCommandClick("ansible.create-playbook-options"), ["prevent"]))
                    }, _cache[15] || (_cache[15] = [
                      createBaseVNode("span", { class: "codicon codicon-new-file" }, null, -1),
                      createTextVNode(" New playbook ")
                    ]))
                  ]),
                  _cache[16] || (_cache[16] = createBaseVNode("p", null, "Create a new playbook", -1))
                ]),
                createBaseVNode("div", _hoisted_15, [
                  createBaseVNode("h3", null, [
                    createBaseVNode("a", {
                      href: "#",
                      onClick: _cache[4] || (_cache[4] = withModifiers(($event) => handleExternalLink("https://docs.redhat.com/en/documentation/red_hat_ansible_lightspeed_with_ibm_watsonx_code_assistant/2.x_latest/html-single/red_hat_ansible_lightspeed_with_ibm_watsonx_code_assistant_user_guide/index#using-code-bot-for-suggestions_lightspeed-user-guide"), ["prevent"]))
                    }, _cache[17] || (_cache[17] = [
                      createBaseVNode("span", { class: "codicon codicon-symbol-property" }, null, -1),
                      createTextVNode(" Go to Ansible code bot ")
                    ]))
                  ]),
                  _cache[18] || (_cache[18] = createBaseVNode("p", null, "Scans your code repositories to recommend code quality improvements.", -1))
                ])
              ]),
              createBaseVNode("div", _hoisted_16, [
                _cache[24] || (_cache[24] = createBaseVNode("h2", null, "Learn", -1)),
                createBaseVNode("div", _hoisted_17, [
                  createBaseVNode("h3", null, [
                    createBaseVNode("a", {
                      href: "#",
                      onClick: _cache[5] || (_cache[5] = withModifiers(($event) => handleExternalLink("https://docs.ansible.com"), ["prevent"]))
                    }, _cache[20] || (_cache[20] = [
                      createTextVNode(" Ansible documentation "),
                      createBaseVNode("span", { class: "codicon codicon-link-external" }, null, -1)
                    ]))
                  ]),
                  _cache[21] || (_cache[21] = createBaseVNode("p", null, "Explore Ansible documentation, examples and more.", -1))
                ]),
                createBaseVNode("div", _hoisted_18, [
                  createBaseVNode("h3", null, [
                    createBaseVNode("a", {
                      href: "#",
                      onClick: _cache[6] || (_cache[6] = withModifiers(($event) => handleExternalLink("https://docs.ansible.com/ansible/latest/getting_started/index.html"), ["prevent"]))
                    }, _cache[22] || (_cache[22] = [
                      createTextVNode(" Learn Ansible development "),
                      createBaseVNode("span", { class: "codicon codicon-link-external" }, null, -1)
                    ]))
                  ]),
                  _cache[23] || (_cache[23] = createBaseVNode("p", null, "End to end course that will help you master automation development.", -1))
                ]),
                _cache[25] || (_cache[25] = createBaseVNode("div", { class: "catalogue" }, [
                  createBaseVNode("h3", null, "Once you are in the YAML file:"),
                  createBaseVNode("p", null, "click Ctrl+L to fire the Ansible Lightspeed AI assistance for editing and explaining code.")
                ], -1))
              ]),
              _cache[26] || (_cache[26] = createBaseVNode("div", { class: "shadow" }, null, -1)),
              _cache[27] || (_cache[27] = createBaseVNode("div", { class: "shadow" }, null, -1)),
              _cache[28] || (_cache[28] = createBaseVNode("div", { class: "shadow" }, null, -1))
            ]),
            createBaseVNode("div", _hoisted_19, [
              createBaseVNode("div", _hoisted_20, [
                createBaseVNode("div", _hoisted_21, [
                  _cache[30] || (_cache[30] = createBaseVNode("div", { class: "icon" }, [
                    createBaseVNode("h2", null, "Walkthroughs")
                  ], -1)),
                  walkthroughs.value.length > 0 ? (openBlock(), createElementBlock("ul", _hoisted_22, [
                    (openBlock(true), createElementBlock(Fragment, null, renderList(walkthroughs.value, (walkthrough) => {
                      return openBlock(), createElementBlock("li", {
                        key: walkthrough.id,
                        class: "walkthrough-item",
                        onClick: ($event) => handleWalkthroughClick(walkthrough.id)
                      }, [
                        createBaseVNode("button", null, [
                          createBaseVNode("div", _hoisted_24, [
                            createBaseVNode("div", _hoisted_25, [
                              logoUrl.value ? (openBlock(), createElementBlock("img", {
                                key: 0,
                                src: logoUrl.value,
                                alt: "Ansible",
                                class: "category-icon"
                              }, null, 8, _hoisted_26)) : createCommentVNode("", true)
                            ]),
                            createBaseVNode("div", _hoisted_27, toDisplayString(walkthrough.title), 1)
                          ]),
                          walkthrough.description ? (openBlock(), createElementBlock("div", _hoisted_28, toDisplayString(walkthrough.description), 1)) : createCommentVNode("", true)
                        ])
                      ], 8, _hoisted_23);
                    }), 128))
                  ])) : (openBlock(), createElementBlock("div", _hoisted_29, _cache[29] || (_cache[29] = [
                    createBaseVNode("p", null, "Loading walkthroughs...", -1)
                  ])))
                ])
              ]),
              _cache[31] || (_cache[31] = createBaseVNode("div", { class: "shadow" }, null, -1)),
              _cache[32] || (_cache[32] = createBaseVNode("div", { class: "shadow" }, null, -1)),
              _cache[33] || (_cache[33] = createBaseVNode("div", { class: "shadow" }, null, -1))
            ]),
            _cache[34] || (_cache[34] = createBaseVNode("div", { class: "footer" }, [
              createBaseVNode("p")
            ], -1))
          ])
        ])
      ], 2);
    };
  }
});
const app = createApp(_sfc_main);
app.mount("#app");
