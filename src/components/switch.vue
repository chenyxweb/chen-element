<template>
  <label
    class="hm-switch"
    @click="handleClick"
    :class="{'is-checked':value}"
  >
    <span
      class="hm-switch__core"
      ref='core'
    >
      <span class="hm-switch__button"></span>
    </span>
  </label>
</template>

<script>
export default {
  name: 'ChSwitch',
  props: {
    // v-model
    value: {
      type: Boolean,
      default: false
    },
    // 激活状态颜色
    activeColor: {
      type: String,
      default: ''
    },
    // 不激活状态颜色
    inactiveColor: {
      type: String,
      default: ''
    }

  },
  methods: {
    async handleClick () {
      // v-model
      this.$emit('input', !this.value)
      // this.$nextTick().then(() => {
      //   this.setColor()
      // })
      await this.$nextTick() // 基于promise封装
      this.setColor()
    },
    // 设置激活和非激活状态颜色
    setColor () {
      // 获取元素
      const label = this.$refs.core
      const color = this.value ? this.activeColor : this.inactiveColor
      label.style.borderColor = color
      label.style.backgroundColor = color
    }
  },
  watch: {
    value () {
      // console.log(this.value)
      this.setColor()
    }
  },
  mounted () {
    this.setColor()
  }

}

// 当初次渲染和value改变时 --> value ? 边框背景设置成activeColor : 边框背景设置成inactiveColor  (设置行内样式不影响类样式)
</script>

<style lang='scss'>
.hm-switch {
  display: inline-flex;
  align-items: center;
  position: relative;
  font-size: 14px;
  line-height: 20px;
  height: 20px;
  vertical-align: middle;
  .hm-switch__core {
    margin: 0;
    display: inline-block;
    position: relative;
    width: 40px;
    height: 20px;
    border: 1px solid #dcdfe6;
    outline: none;
    border-radius: 10px;
    box-sizing: border-box;
    background: #dcdfe6;
    cursor: pointer;
    transition: border-color 0.3s, background-color 0.3s;
    vertical-align: middle;
    .hm-switch__button {
      position: absolute;
      top: 1px;
      left: 1px;
      border-radius: 100%;
      transition: all 0.3s;
      width: 16px;
      height: 16px;
      background-color: #fff;
    }
  }
}
.hm-switch.is-checked {
  .hm-switch__core {
    border-color: #409eff;
    background-color: #409eff;
    .hm-switch__button {
      transform: translateX(20px);
    }
  }
}
</style>
