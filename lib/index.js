"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const VContainer = {
    install(Vue) {
        Vue.directive("flex", (el) => {
            el.style.display = "flex";
            el.style.flexDirection = "row";
            el.style.position = "relative";
        });
        Vue.directive("grid", (el) => {
            el.style.display = "grid";
            el.style.position = "relative";
        });
        Vue.directive("grid-cols-template", (el, binding) => {
            el.style.gridTemplateColumns = binding.value;
        });
        Vue.directive("grid-rows-template", (el, binding) => {
            el.style.gridTemplateRows = binding.value;
        });
        Vue.directive("col", (el) => {
            el.style.flexDirection = "column";
        });
        Vue.directive("gap", (el, binding) => {
            el.style.gap = `${binding.value}px`;
        });
        Vue.directive("padding", (el, binding) => {
            if (typeof binding.value === "number") {
                el.style.padding = `${binding.value}px`;
                return;
            }
            el.style.padding = binding.value;
        });
        Vue.directive("area", (el, binding) => {
            el.style.gridArea = binding.value;
        });
        Vue.directive("width", (el, binding) => {
            el.style.width = binding.value;
        });
        Vue.directive("min-width", (el, binding) => {
            if (binding.value) {
                el.style.minWidth = binding.value;
                return;
            }
            el.style.minWidth = el.style.width;
        });
        Vue.directive("max-width", (el, binding) => {
            if (binding.value) {
                el.style.maxWidth = binding.value;
                return;
            }
            el.style.maxWidth = el.style.width;
        });
        Vue.directive("height", (el, binding) => {
            el.style.height = binding.value;
        });
        Vue.directive("min-height", (el, binding) => {
            if (binding.value) {
                el.style.minHeight = binding.value;
                return;
            }
            el.style.minHeight = el.style.height;
        });
        Vue.directive("max-height", (el, binding) => {
            if (binding.value) {
                el.style.maxHeight = binding.value;
                return;
            }
            el.style.maxHeight = el.style.height;
        });
        Vue.directive("y-overflow", (el, binding) => {
            el.style.overflowY = binding.value;
        });
        Vue.directive("x-overflow", (el, binding) => {
            el.style.overflowX = binding.value;
        });
        Vue.directive("x-align", (el, binding) => {
            switch (el.style.flexDirection) {
                case "row":
                    el.style.justifyContent = binding.value ? binding.value : "center";
                    break;
                case "column":
                    el.style.alignItems = binding.value ? binding.value : "center";
                    break;
            }
        });
        Vue.directive("y-align", (el, binding) => {
            switch (el.style.flexDirection) {
                case "row":
                    el.style.alignItems = binding.value ? binding.value : "center";
                    break;
                case "column":
                    el.style.justifyContent = binding.value ? binding.value : "center";
                    break;
            }
        });
    },
};
exports.default = VContainer;
//# sourceMappingURL=index.js.map