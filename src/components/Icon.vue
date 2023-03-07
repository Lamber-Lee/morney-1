<template>
    <svg class="icon" @click="$emit('click',$event)">
      <use :xlink:href="'#'+name"/>
    </svg>
</template>

<script lang="ts">
let importAll = (requireContext: __WebpackModuleApi.RequireContext) => requireContext.keys().forEach(requireContext);
try{
  importAll(require.context('../assets/icons',true,/.svg$/));
}catch(error){
  console.log(error);
}//try,catch是为了防止在单元测试中发生错误而停止的情况


export default {
  props: ['name'],
  name: "Icon"
}
</script>

<style lang="scss" scoped>
.icon {
  width: 1em; height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>