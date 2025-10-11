import { d as defineComponent, f as ref, J as onMounted, c as createElementBlock, o as openBlock, g as createCommentVNode, O as createStaticVNode, a as createBaseVNode, B as normalizeClass, v as vscodeApi, p as createApp } from "./vscode.js";
const _imports_0 = "data:image/png;base64,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";
const _hoisted_1 = { id: "quickLinksView" };
const _hoisted_2 = {
  key: 0,
  id: "system-readiness",
  class: "statusDisplay"
};
const _hoisted_3 = ["innerHTML"];
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "QuickLinksApp",
  setup(__props) {
    const systemReadinessIcon = ref("");
    const systemReadinessDescription = ref("");
    const showSystemReadiness = ref(false);
    const updateAnsibleCreatorAvailabilityStatus = () => {
      vscodeApi.postMessage({
        message: "set-system-status-view"
      });
    };
    const handleMessage = (event) => {
      const message = event.data;
      if (message.command === "systemDetails") {
        const systemDetails = message.arguments;
        const ansibleVersion = systemDetails["ansible version"];
        const pythonVersion = systemDetails["python version"];
        const ansibleCreatorVersion = systemDetails["ansible-creator version"];
        const systemStatus = !!(ansibleVersion && pythonVersion && ansibleCreatorVersion);
        if (!systemStatus) {
          systemReadinessIcon.value = "codicon-warning";
          systemReadinessDescription.value = `
        <p class="system-description">
          <b>Looks like you don't have an Ansible environment set up yet</b>.
          <br>
          <br>
            <a href="command:ansible.content-creator.create-devcontainer">
              Create a devcontainer
            </a> to build your environment using the
            <a href="https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers">
             Dev Containers
             </a> extension, or follow the
            <a href="command:ansible.open-walkthrough-create-env">
              Create an Ansible environment
            </a> walkthrough to get started.
        </p>`;
          showSystemReadiness.value = true;
        }
      }
    };
    onMounted(() => {
      updateAnsibleCreatorAvailabilityStatus();
      window.addEventListener("message", handleMessage);
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        showSystemReadiness.value ? (openBlock(), createElementBlock("div", _hoisted_2, [
          createBaseVNode("section", null, [
            createBaseVNode("span", {
              class: normalizeClass(["codicon", systemReadinessIcon.value])
            }, null, 2)
          ]),
          createBaseVNode("section", { innerHTML: systemReadinessDescription.value }, null, 8, _hoisted_3)
        ])) : createCommentVNode("", true),
        _cache[0] || (_cache[0] = createStaticVNode('<div class="index-list start-container"><h3>LAUNCH</h3><div class="catalogue"><h3><a href="command:ansible.content-creator.menu" title="Ansible Development Tools welcome page"><span class="codicon codicon-rocket"></span> Getting Started </a></h3></div><div class="catalogue"><h3><a href="https://docs.redhat.com/en/documentation/red_hat_ansible_lightspeed_with_ibm_watsonx_code_assistant/2.x_latest/html-single/red_hat_ansible_lightspeed_with_ibm_watsonx_code_assistant_user_guide/index#using-code-bot-for-suggestions_lightspeed-user-guide" title="Ansible code bot documentation"><span class="codicon codicon-rocket"></span> Ansible code bot </a></h3></div><div class="catalogue"><h3><a href="https://ansible.readthedocs.io/projects/dev-tools/" title="Ansible Development Tools documentation"><span class="codicon codicon-rocket"></span> Documentation </a></h3></div><div class="catalogue"><h3><a href="command:ansible.extension-settings.open" title="Ansible extension settings"><span class="codicon codicon-settings-gear"></span> Settings </a></h3></div><h3>INITIALIZE</h3><p>Initialize a new Ansible project</p><div class="catalogue"><h3><a href="command:ansible.content-creator.create-ansible-collection" title="Create a collection project"><span class="codicon codicon-new-file"></span> Collection project </a></h3></div><div class="catalogue"><h3><a href="command:ansible.content-creator.create-execution-env-file" title="Create an execution environment project"><span class="codicon codicon-new-file"></span> Execution environment project <span class="new-badge">NEW</span></a></h3></div><div class="catalogue"><h3><a href="command:ansible.content-creator.create-ansible-project" title="Create a playbook project"><span class="codicon codicon-new-file"></span> Playbook project </a></h3></div><h3>ADD</h3><p>Add resources to an existing Ansible project</p><div class="catalogue"><h3><a href="command:ansible.content-creator.add-plugin" title="Add a plugin to an existing collection"><span class="codicon codicon-new-file"></span> Collection plugin <span class="new-badge">NEW</span></a></h3></div><div class="catalogue"><h3><a href="command:ansible.content-creator.create-devcontainer" title="Create a devcontainer and add it to an existing Ansible project"><span class="codicon codicon-new-file"></span> Devcontainer <span class="new-badge">NEW</span></a></h3></div><div class="catalogue"><h3><a href="command:ansible.content-creator.create-devfile" title="Create a devfile and add it to an existing Ansible project"><span class="codicon codicon-new-file"></span> Devfile <span class="new-badge">NEW</span></a></h3></div><div class="catalogue"><h3><a href="command:ansible.content-creator.create-execution-env-file" title="Create an Execution Environment file"><span class="codicon codicon-new-file"></span> Execution environment template <span class="new-badge">NEW</span></a></h3></div><div class="catalogue"><h3><a href="command:ansible.content-creator.create-role" title="Create a role and add it to an existing Ansible collection"><span class="codicon codicon-new-file"></span> Role <span class="new-badge">NEW</span></a></h3></div><div class="catalogue"><h3><a href="command:ansible.lightspeed.playbookGeneration" title="Generate a playbook with Ansible Lightspeed"><span class="codicon codicon-new-file"></span> Playbook <img class="category-icon icon-widget" src="' + _imports_0 + '" alt="Lightspeed"></a></h3></div><div class="catalogue"><h3><a href="command:ansible.create-empty-playbook" title="Create a playbook template"><span class="codicon codicon-new-file"></span> Playbook template </a></h3></div></div>', 1))
      ]);
    };
  }
});
const app = createApp(_sfc_main);
app.mount("#app");
