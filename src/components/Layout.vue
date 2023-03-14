<template>
  <div :class="classPrefix && `${classPrefix}-wrapper`" class="layout-wrapper">
    <div :class="classPrefix && `${classPrefix}-content`" class="content">
      <slot/>
    </div>
    <Nav/>
  </div>
</template>

<script lang="ts">
export default {
  props: ['classPrefix'],
  name: 'Layout',
};
</script>


<style lang="scss" scoped>
.layout-wrapper {
  display: flex;
  flex-direction: column;
  height: 100vh;
}
.content {
  overflow: auto;
  flex-grow: 1;
}
</style>