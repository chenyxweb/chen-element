<template>
  <div class="hm-radio-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'ChRadioGroup',
  props: {
    value: null
  },
  // provide 写法用函数方式,接收组件时
  provide () {
    return {
      RadioGroup: this,
      foo: 'bar'
    }
  }
}
</script>

<style>

</style>
