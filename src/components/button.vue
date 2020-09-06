<template>
  <button
    class="hm-button"
    :class="[`hm-button--${type}`,{'is-plain':plain,'is-round':round,'is-circle':circle,'is-disabled':disabled}]"
    :disabled="disabled"
    @click="click"
  >
    <!-- 图标 -->
    <i :class="`hm-icon-${icon}`" v-if="icon"></i>
    <!-- 传入了默认插槽,才展示span -->
    <span v-if="$slots.default">
      <slot></slot>
    </span>
  </button>
</template>

<script>
export default {
  name: 'ChButton',
  props: {
    // type属性
    type: {
      type: String,
      default: 'default'
    },
    // 朴素
    plain: {
      type: Boolean
    },
    // round
    round: {
      type: Boolean
    },
    // circle
    circle: {
      type: Boolean
    },
    // icon
    icon: {
      type: String,
      default: ''
    },
    // 禁用
    disabled: {
      type: Boolean
    }
  },
  methods: {
    click (e) {
      this.$emit('click', e)
    }
  },
  created () {
    // 拿到所有的插槽
    // console.log(this.$slots)
    // this.$el.
  }

}
</script>

<style lang="scss" scoped>
// 基本样式
.hm-button {
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  background: #fff;
  border: 1px solid #dcdfe6;
  color: #606266;
  -webkit-appearance: none;
  text-align: center;
  box-sizing: border-box;
  outline: none;
  margin: 0;
  transition: 0.1s;
  font-weight: 500;
  // 禁止元素的文字被选中
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  padding: 12px 20px;
  font-size: 14px;
  border-radius: 4px;
  &:hover,
  &:focus {
    color: #409eff;
    border-color: #c6e2ff;
    background-color: #ecf5ff;
  }
}

.hm-button i + span {
  padding-left: 4px;
}

//选中 button里面  类名包含hm-icon- 后面的span
.hm-button [class*="hm-icon-"] + span {
  padding-left: 4px;
}

// type属性样式
.hm-button--primary {
  color: #fff;
  background-color: #409eff;
  border-color: #409eff;

  &:hover,
  &:focus {
    background: #66b1ff;
    border-color: #66b1ff;
    color: #fff;
  }
}
.hm-button--success {
  color: #fff;
  background-color: #67c23a;
  border-color: #67c23a;
  &:hover,
  &:focus {
    background: #85ce61;
    border-color: #85ce61;
    color: #fff;
  }
}
.hm-button--info {
  color: #fff;
  background-color: #909399;
  border-color: #909399;
  &:hover,
  &:focus {
    background: #a6a9ad;
    border-color: #a6a9ad;
    color: #fff;
  }
}
.hm-button--warning {
  color: #fff;
  background-color: #e6a23c;
  border-color: #e6a23c;
  &:hover,
  &:focus {
    background: #ebb563;
    border-color: #ebb563;
    color: #fff;
  }
}
.hm-button--danger {
  color: #fff;
  background-color: #f56c6c;
  border-color: #f56c6c;
  &:hover,
  &:focus {
    background: #f78989;
    border-color: #f78989;
    color: #fff;
  }
}

// 朴素按钮
.hm-button.is-plain {
  &:hover,
  &:focus {
    background: #fff;
    border-color: #409eff;
    color: #409eff;
  }
}
.hm-button--primary.is-plain {
  color: #409eff;
  background: #ecf5ff;
  border-color: #b3d8ff;
  &:hover,
  &:focus {
    background: #409eff;
    border-color: #409eff;
    color: #fff;
  }
}
.hm-button--success.is-plain {
  color: #67c23a;
  background: #f0f9eb;
  border-color: #c2e7b0;
  &:hover,
  &:focus {
    background: #67c23a;
    border-color: #67c23a;
    color: #fff;
  }
}

.hm-button--info.is-plain {
  color: #909399;
  background: #f4f4f5;
  border-color: #d3d4d6;
  &:hover,
  &:focus {
    background: #909399;
    border-color: #909399;
    color: #fff;
  }
}
.hm-button--warning.is-plain {
  color: #e6a23c;
  background: #fdf6ec;
  border-color: #f5dab1;
  &:hover,
  &:focus {
    background: #e6a23c;
    border-color: #e6a23c;
    color: #fff;
  }
}
.hm-button--danger.is-plain {
  color: #f56c6c;
  background: #fef0f0;
  border-color: #fbc4c4;
  &:hover,
  &:focus {
    background: #f56c6c;
    border-color: #f56c6c;
    color: #fff;
  }
}

// round按钮
.hm-button.is-round {
  border-radius: 20px;
  padding: 12px 23px;
}

// 圆形按钮
.hm-button.is-circle {
  border-radius: 50%;
  padding: 12px;
}

// 禁用
.hm-button.is-disabled,
.hm-button.is-disabled:focus,
.hm-button.is-disabled:hover {
  color: #c0c4cc;
  cursor: not-allowed;
  background-image: none;
  background-color: #fff;
  border-color: #ebeef5;
}
.hm-button.is-disabled,
.hm-button.is-disabled:focus,
.hm-button.is-disabled:hover {
  color: #c0c4cc;
  cursor: not-allowed;
  background-image: none;
  background-color: #fff;
  border-color: #ebeef5;
}
.hm-button--primary.is-disabled,
.hm-button--primary.is-disabled:active,
.hm-button--primary.is-disabled:focus,
.hm-button--primary.is-disabled:hover {
  color: #fff;
  background-color: #a0cfff;
  border-color: #a0cfff;
}
.hm-button--success.is-disabled,
.hm-button--success.is-disabled:active,
.hm-button--success.is-disabled:focus,
.hm-button--success.is-disabled:hover {
  color: #fff;
  background-color: #b3e19d;
  border-color: #b3e19d;
}
.hm-button--info.is-disabled,
.hm-button--info.is-disabled:active,
.hm-button--info.is-disabled:focus,
.hm-button--info.is-disabled:hover {
  color: #fff;
  background-color: #c8c9cc;
  border-color: #c8c9cc;
}
.hm-button--warning.is-disabled,
.hm-button--warning.is-disabled:active,
.hm-button--warning.is-disabled:focus,
.hm-button--warning.is-disabled:hover {
  color: #fff;
  background-color: #f3d19e;
  border-color: #f3d19e;
}
.hm-button--danger.is-disabled,
.hm-button--danger.is-disabled:active,
.hm-button--danger.is-disabled:focus,
.hm-button--danger.is-disabled:hover {
  color: #fff;
  background-color: #fab6b6;
  border-color: #fab6b6;
}
</style>
