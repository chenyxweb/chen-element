<template>
  <div class="hm-form">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'ChForm',
  props: {
    model: {
      type: Object,
      required: true
    },
    // label宽度
    labelWidth: {
      type: String,
      default: '80px'
    }
  },
  provide () {
    return {
      // 整个表单提供Form组件
      Form: this
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
