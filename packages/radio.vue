<template>
  <label class="hm-radio" :class="{'is-checked':model===label}">
    <span class="hm-radio__input">
      <span class="hm-radio__inner"></span>
      <input
        class="hm-radio__original"
        type="radio"
        :name="name"
        :value="label"
        v-model="model"
      >
    </span>
    <span class="hm-radio__label">
      <slot>{{label}}</slot>
    </span>
  </label>
</template>

<script>
export default {
  name: 'ChRadio',
  computed: {
    // 创建一个自己的data
    model: {
      get () {
        // return this.value
        return this.isRadioGroup ? this.RadioGroup.value : this.value
      },
      // 点击radio时将获得设置的value属性
      set (value) {
        // console.log(value)
        // 触发绑定v-model后自动注册的input事件
        // this.$emit('input', value)
        this.isRadioGroup ? this.RadioGroup.$emit('input', value) : this.$emit('input', value)
      }
    },
    // 判断是否被radio-group包裹
    isRadioGroup () {
      return !!this.RadioGroup
    }
  },
  props: {
    // 当前单选框的值
    label: {
      type: [Number, String, Boolean],
      default: ''
    },
    // 不进行校验
    value: null,
    name: {
      type: String,
      default: ''
    }
  },
  inject: {
    RadioGroup: {
      default: ''
    },
    foo: {
      // 要给个默认值,可能没有传递provide
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.hm-radio {
  color: #606266;
  font-weight: 500;
  line-height: 1;
  position: relative;
  cursor: pointer;
  display: inline-block;
  white-space: nowrap;
  outline: none;
  font-size: 14px;
  margin-right: 30px;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  .hm-radio__input {
    white-space: nowrap;
    cursor: pointer;
    outline: none;
    display: inline-block;
    line-height: 1;
    position: relative;
    vertical-align: middle;
    .hm-radio__inner {
      border: 1px solid #dcdfe6;
      border-radius: 100%;
      width: 14px;
      height: 14px;
      background-color: #fff;
      position: relative;
      cursor: pointer;
      display: inline-block;
      box-sizing: border-box;
      &:after {
        width: 4px;
        height: 4px;
        border-radius: 100%;
        background-color: #fff;
        content: "";
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%) scale(0);
        transition: transform .15s ease-in;
      }
    }
    .hm-radio__original {
      opacity: 0;
      outline: none;
      position: absolute;
      z-index: -1;
      top: 0;
      left: 0px;
      right: 0;
      bottom: 0;
      margin: 0;
    }
  }
  .hm-radio__label {
    font-size: 14px;
    padding-left: 4px;
  }
}

// 选中样式
.hm-radio.is-checked {
  .hm-radio__input {
    .hm-radio__inner {
      border-color: #409eff;
      background: #409eff;
      &:after {
        transform: translate(-50%,-50%) scale(1);
      }
    }
  }
  .hm-radio__label {
    color: #409eff;
  }
}
</style>
