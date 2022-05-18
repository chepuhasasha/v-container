interface App {
    directive: (name: string, cb: (el: HTMLElement, binding: {
        value: string;
    }) => void) => void;
}
declare const VContainer: {
    install(Vue: App): void;
};
export default VContainer;
