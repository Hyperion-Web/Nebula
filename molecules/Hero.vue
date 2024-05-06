<template>
  <section>
    <div>
      <h1>Title</h1>
    </div>
    <slot />
  </section>
</template>

<style scoped>
    section {
        height: 100vh;
        width: 100vw;
        display: flex;
        --flow-space: var(--space-s);
    }
</style>

<doc>
# Hero

## Usage

## Styling

```css
    :root {
        border: none;
    }
```
</doc>
