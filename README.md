# v-container

The plugin will allow you to get rid of creating css wrapper classes.

[![stars](https://badgen.net/github/stars/chepuhasasha/v-container)](https://github.com/chepuhasasha/v-container)
[![latest version](https://badgen.net/npm/v/@chepuhasasha/v-container)](https://github.com/chepuhasasha/v-container)
[![license](https://badgen.net/github/license/chepuhasasha/v-container?color=cyan)](https://github.com/chepuhasasha/v-container/blob/main/LICENSE)
[![install size](https://badgen.net/packagephobia/install/@chepuhasasha/v-container?label=npm+install)](https://packagephobia.now.sh/result?p=@chepuhasasha/v-container)
[![open issues](https://badgen.net/github/open-issues/chepuhasasha/v-container?label=issues)](https://github.com/chepuhasasha/v-container/issues)

---

## Basic Usage

### Installation

```
npm install @chepuhasasha/v-container
```

### Connection

Include plugin in `main.ts/js`

```js
import { createApp } from "vue";
import App from "./App.vue";
import VContainer from "@chepuhasasha/v-container";

createApp(App).use(VContainer).mount("#app");
```

---

### Layout

#### In component

_MyComponent.vue_

```html
<template>
  <div v-flex v-col v-gap="20" v-padding='"40px"' v-x-align="'center'">
    <h1>My component</h1>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua.
    </p>
  </div>
</template>
```

#### Outside of the component

```html
<my-component v-width='"300px"' />
```

#### Result in browser

```html
<div
  style="width: 300px; display: flex; flex-direction: column; gap: 10px; padding: 40px; align-items: center;"
>
  <h1>My component</h1>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua.
  </p>
</div>
```

---

### Directives

Directives allow you to quickly access styles.

| directive                | type    | css equivalent                                                    |
| :----------------------- | ------- | :---------------------------------------------------------------- |
| `v-flex`                 | boolean | _`display: flex;`_                                                |
| `v-grid`                 | boolean | _`display: grid;`_                                                |
| `v-grid-cols-template`   | string  | _`display: grid;`_                                                |
| `v-grid-rows-template`   | string  | _`display: grid;`_                                                |
| `v-col`                  | boolean | _`flex-direction: column;`_                                       |
| `v-width='"100px"'`      | string  | _`width: 100px;`_                                                 |
| `v-min-width='"100px"'`  | string  | _`min-width: 100px;`_                                             |
| `v-max-width='"100px"'`  | string  | _`max-width: 100px;`_                                             |
| `v-height='"100px"'`     | string  | _`height: 100px;`_                                                |
| `v-min-height='"100px"'` | string  | _`min-height: 100px;`_                                            |
| `v-max-height='"100px"'` | string  | _`max-height: 100px;`_                                            |
| `v-gap='10'`             | number  | _`gap: 10px;`_                                                    |
| `v-padding='"10px 5px"'` | string  | _`padding: 10px 5px;`_                                            |
| `v-x-overflow='"auto"'`  | string  | _`ovwrflow-x: auto;`_                                             |
| `v-y-overflow='"auto"'`  | string  | _`ovwrflow-y: auto;`_                                             |
| `v-x-align='"center"'`   | string  | if v-col _`align-items: center;`_ else `justify-content: center;` |
| `v-y-align='"center"'`   | string  | if v-col _`justify-content: center;`_ else `align-items: center;` |
