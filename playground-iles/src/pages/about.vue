<script setup lang="ts">
 import * as nebula from 'nebula'
  
  import { NButton } from 'naive-ui'

  const home = nebula.layouts.home
 
</script>

<page>
title: About

</page>

<template layout='home'>
  <div class="about">
    <h1>This is an about page</h1>
    <NButton>What a button</NButton>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
