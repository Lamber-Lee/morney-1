<template>
  <nav>
    <router-link active-class="selected" class="item" to="/labels">
      <Icon name="label"/>
      标签
    </router-link>
    <router-link active-class="selected" class="item miemie" to="/money">
      <Icon name="miemie"/>
    </router-link>
    <router-link active-class="selected" class="item" to="/statistics">
      <Icon name="statistics"/>
      统计
    </router-link>
  </nav>
</template>

<script lang="ts">
export default {
  name: 'Nav'
};
</script>

<style lang="scss" scoped>
//scoped会自动给class类加上属性名
@import "~@/assets/style/helper.scss";
nav {
  @extend %outerShadow;
  display: flex;
  flex-direction: row;
  font-size: 12px;
  > .item {
    padding: 2px 0;
    width: 33.33333%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: #999;
    .icon {
      width: 32px;
      height: 32px;
    }
  }
  > .item.miemie {
    .icon {
      padding: 10px 0 10px 0;
      width: 64px;
      height: 64px;
    }
  }
  > .item.selected {
    color: $color-highlight;
  }
}
</style>