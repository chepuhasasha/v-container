interface App {
  directive: (
    name: string,
    cb: (el: HTMLElement, binding: { value: string }) => void
  ) => void;
}

const VContainer = {
  install(Vue: App): void {
    Vue.directive("flex", (el: HTMLElement) => {
      el.style.display = "flex";
      el.style.flexDirection = "row";
      el.style.position = "relative";
    });
    Vue.directive("grid", (el: HTMLElement) => {
      el.style.display = "grid";
      el.style.position = "relative";
    });
    Vue.directive("grid-cols-template", (el: HTMLElement, binding) => {
      el.style.gridTemplateColumns = binding.value;
    });
    Vue.directive("grid-rows-template", (el: HTMLElement, binding) => {
      el.style.gridTemplateRows = binding.value;
    });
    Vue.directive("col", (el: HTMLElement) => {
      el.style.flexDirection = "column";
    });
    Vue.directive("gap", (el: HTMLElement, binding) => {
      el.style.gap = `${binding.value}px`;
    });
    Vue.directive("padding", (el: HTMLElement, binding) => {
      if (typeof binding.value === "number") {
        el.style.padding = `${binding.value}px`;
        return;
      }
      el.style.padding = binding.value;
    });
    Vue.directive("area", (el: HTMLElement, binding) => {
      el.style.gridArea = binding.value;
    });
    Vue.directive("width", (el: HTMLElement, binding) => {
      el.style.width = binding.value;
    });
    Vue.directive("min-width", (el: HTMLElement, binding) => {
      if (binding.value) {
        el.style.minWidth = binding.value;
        return;
      }
      el.style.minWidth = el.style.width;
    });
    Vue.directive("max-width", (el: HTMLElement, binding) => {
      if (binding.value) {
        el.style.maxWidth = binding.value;
        return;
      }
      el.style.maxWidth = el.style.width;
    });
    Vue.directive("height", (el: HTMLElement, binding) => {
      el.style.height = binding.value;
    });
    Vue.directive("min-height", (el: HTMLElement, binding) => {
      if (binding.value) {
        el.style.minHeight = binding.value;
        return;
      }
      el.style.minHeight = el.style.height;
    });
    Vue.directive("max-height", (el: HTMLElement, binding) => {
      if (binding.value) {
        el.style.maxHeight = binding.value;
        return;
      }
      el.style.maxHeight = el.style.height;
    });
    Vue.directive("y-overflow", (el: HTMLElement, binding) => {
      el.style.overflowY = binding.value;
    });
    Vue.directive("x-overflow", (el: HTMLElement, binding) => {
      el.style.overflowX = binding.value;
    });
    Vue.directive("x-align", (el: HTMLElement, binding) => {
      switch (el.style.flexDirection) {
        case "row":
          el.style.justifyContent = binding.value ? binding.value : "center";
          break;
        case "column":
          el.style.alignItems = binding.value ? binding.value : "center";
          break;
      }
    });
    Vue.directive("y-align", (el: HTMLElement, binding) => {
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

export default VContainer;
