import { d as defineComponent, c as createElementBlock, o as openBlock, a as createBaseVNode, F as Fragment, h as createTextVNode, r as renderList, t as toDisplayString } from "./vscode.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.js";
const _hoisted_1 = { class: "requirements-banner-welcome" };
const _hoisted_2 = { class: "banner-content" };
const _hoisted_3 = { class: "banner-message" };
const _hoisted_4 = { key: 0 };
const _hoisted_5 = { key: 1 };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "RequirementsBanner",
  props: {
    failures: {}
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        _cache[12] || (_cache[12] = createBaseVNode("span", { class: "codicon codicon-warning banner-icon" }, null, -1)),
        createBaseVNode("div", _hoisted_2, [
          _cache[11] || (_cache[11] = createBaseVNode("div", { class: "banner-title" }, "Requirements Not Met", -1)),
          createBaseVNode("div", _hoisted_3, [
            _ctx.failures.length === 1 && _ctx.failures[0].type === "ansible-creator" ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
              _cache[0] || (_cache[0] = createTextVNode(" This feature requires ansible-creator version ")),
              _cache[1] || (_cache[1] = createBaseVNode("b", null, "25.0.1", -1)),
              _cache[2] || (_cache[2] = createTextVNode(" or higher. To upgrade or install ansible-creator, please refer to the official installation and upgrade ")),
              _cache[3] || (_cache[3] = createBaseVNode("a", { href: "https://ansible.readthedocs.io/projects/creator/installing/" }, "guide", -1)),
              _cache[4] || (_cache[4] = createTextVNode(". "))
            ], 64)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
              createBaseVNode("ul", null, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.failures, (failure) => {
                  return openBlock(), createElementBlock("li", {
                    key: failure.type
                  }, [
                    failure.type === "ansible-creator" ? (openBlock(), createElementBlock("span", _hoisted_4, [
                      _cache[5] || (_cache[5] = createTextVNode(" ansible-creator version ")),
                      createBaseVNode("b", null, toDisplayString(failure.required), 1),
                      _cache[6] || (_cache[6] = createTextVNode(" required (found: ")),
                      createBaseVNode("b", null, toDisplayString(failure.current), 1),
                      _cache[7] || (_cache[7] = createTextVNode(") "))
                    ])) : (openBlock(), createElementBlock("span", _hoisted_5, [
                      createTextVNode(toDisplayString(failure.type) + ": required ", 1),
                      createBaseVNode("b", null, toDisplayString(failure.required), 1),
                      _cache[8] || (_cache[8] = createTextVNode(" (found: ")),
                      createBaseVNode("b", null, toDisplayString(failure.current), 1),
                      _cache[9] || (_cache[9] = createTextVNode(") "))
                    ]))
                  ]);
                }), 128))
              ]),
              _cache[10] || (_cache[10] = createTextVNode(" Please upgrade or install the required tools to use this feature. "))
            ], 64))
          ])
        ])
      ]);
    };
  }
});
const RequirementsBanner = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-95bea0eb"]]);
export {
  RequirementsBanner as R
};
