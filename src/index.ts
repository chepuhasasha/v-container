interface App {
  directive: (
    name: string,
    cb: (el: HTMLElement, binding: { value: string }) => void
  ) => void;
}

const VLang = {
  defaultLand: "en",
  seporator: "$",
  // install(Vue: App): void {},
};

export default VLang;

