<template>
  <!-- :type="passwordVisible ? 'text' : type" -->
  <div
    class="hm-input"
    :class="{'is-disabled':disabled,'hm-input--suffix':clearable||showPassword}"
  >
    <input
      class="hm-input__inner"
      autocomplete="off"
      :type="showPassword ? (passwordVisible ? 'text': 'password') : type"
      :name="name"
      :placeholder="placeholder"
      :disabled="disabled"
      :value="value"
      @input="handleInput"
      @blur="handleBlur"
      @change="handleChange"
      @focus="handleFocus"
    >
    <!-- 清除和展示密码图标 -->
    <span class="hm-input__suffix">
      <i
        class="hm-input__icon hm-icon-circle-close"
        v-if="value&&clearable"
        @click="handleClear"
      ></i>
      <i
        class="hm-input__icon hm-icon-view"
        v-if="value&&showPassword"
        @click="toggleShowPassword"
      ></i>
    </span>
  </div>
</template>

<script>
export default {
  name: 'ChInput',
  // 可以通过model修改prop和event
  // model: {
  //   prop: 'value',
  //   event: 'input'
  // },
  data () {
    return {
      // 密码是否可见
      passwordVisible: false
    }
  },
  props: {
    // input的name属性
    name: {
      type: String,
      default: ''
    },
    // 占位文本
    placeholder: {
      type: String,
      default: ''
    },
    // input的类型
    type: {
      type: String,
      default: 'text'
    },
    // 禁用
    disabled: {
      type: Boolean,
      default: false
    },
    // 绑定v-model的组件默认会接收一个名为value的prop,和名为input的事件
    value: {
      type: String,
      default: ''
    },
    // 是否支持清空
    clearable: {
      type: Boolean,
      default: false
    },
    // 是否展示密码
    showPassword: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleInput (e) {
      this.$emit('input', e.target.value)
    },
    // 清空
    handleClear () {
      this.$emit('input', '')
    },
    // 切换密码显隐
    toggleShowPassword () {
      this.passwordVisible = !this.passwordVisible
    },
    // 获取焦点
    handleFocus (e) {
      this.$emit('focus', e)
    },
    // 失去焦点
    handleBlur (e) {
      this.$emit('blur', e)
    },
    // change事件
    handleChange (e) {
      this.$emit('change', e)
    }
  }

}
</script>

<style lang='scss' scoped>
.hm-input {
  width: 100%;
  position: relative;
  font-size: 14px;
  display: inline-block;
  .hm-input__inner {
    -webkit-appearance: none;
    background-color: #fff;
    background-image: none;
    border-radius: 4px;
    border: 1px solid #dcdfe6;
    box-sizing: border-box;
    color: #606266;
    display: inline-block;
    font-size: inherit;
    height: 40px;
    line-height: 40px;
    outline: none;
    padding: 0 15px;
    transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
    width: 100%;

    &:focus {
      outline: none;
      border-color: #409eff;
    }

    // 禁用样式
    &.is-disabled {
      background-color: #f5f7fa;
      border-color: #e4e7ed;
      color: #c0c4cc;
      cursor: not-allowed;
    }
  }
}

// 清空和显示密码图标
.hm-input--suffix {
  .hm-input__inner {
    padding-right: 30px;
  }
  .hm-input__suffix {
    position: absolute;
    height: 100%;
    right: 10px;
    top: 0;
    line-height: 40px;
    text-align: center;
    color: #c0c4cc;
    transition: all 0.3s;
    z-index: 900;
    i {
      color: #c0c4cc;
      font-size: 14px;
      cursor: pointer;
      transition: color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
    }
  }
}

.hm-input__icon + .hm-input__icon{
  margin-left: 2px;
}
</style>
