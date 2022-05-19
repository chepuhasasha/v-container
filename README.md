# v-container

## ![logo](./assets/HEADER.svg)

This plugin for VUE makes it easy to set up block geometry.

[![stars](https://badgen.net/github/stars/chepuhasasha/v-container)](https://github.com/chepuhasasha/v-container)
[![latest version](https://badgen.net/npm/v/@chepuhasasha/v-container)](https://github.com/chepuhasasha/v-container)
[![license](https://badgen.net/github/license/chepuhasasha/v-container?color=cyan)](https://github.com/chepuhasasha/v-container/blob/main/LICENSE)
[![install size](https://badgen.net/packagephobia/install/@chepuhasasha/v-container?label=npm+install)](https://packagephobia.now.sh/result?p=@chepuhasasha/v-container)
[![open issues](https://badgen.net/github/open-issues/chepuhasasha/v-container?label=issues)](https://github.com/chepuhasasha/v-container/issues)

---

## Contents

- [Quick start](#quick-start)
- [Directives](#directives)
- [Grid guide](#grid-guide)
- [Dinamic layout guide](#dinamic-layout-guide)

---

## Quick start

### Installation

```
npm install @chepuhasasha/v-container
```

Include plugin in `main.ts/js`

```js
import { createApp } from "vue";
import App from "./App.vue";
import VContainer from "@chepuhasasha/v-container";

createApp(App).use(VContainer).mount("#app");
```

---

### Use in template

The plugin provides quick access to the properties of geometric characteristics. More about directives in the section [Directives](#directives)

```html
<template>
  <div v-flex v-col v-gap="20" v-padding='"20px"' v-x-align="'center'">
    <h1>My component</h1>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua.
    </p>
  </div>
</template>
```

#### Result in browser

```html
<div
  style="display: flex; flex-direction: column; gap: 20px; padding: 20px; align-items: center;"
>
  <h1>My component</h1>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua.
  </p>
</div>
```

---

## Directives

Directives allow you to quickly access styles.

| directive                | type    | css equivalent                                                    |
| :----------------------- | ------- | :---------------------------------------------------------------- |
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
| `v-flex`                 | boolean | _`display: flex;`_                                                |
| `v-col`                  | boolean | _`flex-direction: column;`_                                       |
| `v-x-align='"center"'`   | string  | if v-col _`align-items: center;`_ else `justify-content: center;` |
| `v-y-align='"center"'`   | string  | if v-col _`justify-content: center;`_ else `align-items: center;` |
| `v-grid`                 | boolean | _`display: grid;`_                                                |
| `v-grid-cols-template`   | string  | _`display: grid;`_                                                |
| `v-grid-rows-template`   | string  | _`display: grid;`_                                                |
| `v-area='"1/1/2/2"'`     | string  | _`grid-area: 1/1/2/2;`_                                           |

---

## Grid guide

### Page template

```html
<template>
  <div
    v-grid
    v-grid-cols-template='"repeat(3, 1fr)"'
    v-grid-rows-template='"repeat(3, 1fr)"'
  ></div>
</template>
```

![page template 3x3](https://raw.githubusercontent.com/chepuhasasha/v-container/349d4a31cc64aa40a2f65a480718dda591c391ad/assets/PAGE.svg)

### Add component

```html
<template>
  <div
    v-grid
    v-grid-cols-template='"repeat(3, 1fr)"'
    v-grid-rows-template='"repeat(3, 1fr)"'
  >
    <my-component
      v-area='"2/2/3/3"'
      v-width='"100%"'
      v-height='"100%"'
    >
  </div>
</template>
```

![page template comp](https://raw.githubusercontent.com/chepuhasasha/v-container/349d4a31cc64aa40a2f65a480718dda591c391ad/assets/PAGECOMP.svg)

---

## Dinamic layout guide

```html
<template>
  <div
    v-grid
    v-grid-cols-template='grid[mode].cols'
    v-grid-rows-template='grid[mode].rows'
  >
    <my-component
      v-area='blocks.myComponent[mode]'
      v-width='"100%"'
      v-height='"100%"'
    >
  </div>
</template>

<script setup lang="ts">
  import { computed, reactive } from "vue";

  const layout = reactive({
    mode: "decktop",
    grid: {
      decktop: { cols: "repeat(3, 1fr)", rows: "repeat(3, 1fr)"},
      mobile: { cols: "repeat(3, 1fr)", rows: "repeat(1, 1fr)"},
    },
    blocks: {
      myComponent: {
        decktop: "2/2/3/3",
        mobile: "2/1/3/2",
      },
    }
  });

  const changeMode = () => {
    layout.mode = layout.mode === "mobile" ? "decktop" : "mobile";
  };
</script>
```

_mobile mode_

![page template comp mobile](https://raw.githubusercontent.com/chepuhasasha/v-container/349d4a31cc64aa40a2f65a480718dda591c391ad/assets/PAGECOMPM.svg)

[![cover](https://raw.githubusercontent.com/chepuhasasha/v-container/349d4a31cc64aa40a2f65a480718dda591c391ad/assets/HEADER.svg)](https://github.com/chepuhasasha/v-container)
