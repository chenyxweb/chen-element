<template>
  <div class="hm-dialog__wrapper" v-show="visible" @click.self="handleClose">
    <div class="hm-dialog" :style="{width:width,marginTop:top}">
      <div class="hm-dialog__header">
        <!-- 标题插槽 -->
        <slot name="title">
          <!-- 后备内容 不指定插槽内容时的默认内容 -->
          <span class="hm-dialog__title">{{ title }}</span>
        </slot>
        <button class="hm-dialog__headerbtn" @click="handleClose">
          <i class="hm-icon-close"></i>
        </button>
      </div>
      <div class="hm-dialog__body">
        <!-- <span>这是一段信息</span> -->
        <!-- 内容插槽 默认插槽-->
        <slot></slot>
      </div>
      <div class="hm-dialog__footer" v-if="$slots.footer">
        <!-- 底部插槽 -->
        <slot name="footer"></slot>
      </div>
      <div class="hm-dialog__footer" v-if="$slots.footer">
        <!-- 底部插槽 -->
        <slot name="footer"></slot>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'ChDialog',
  props: {
    // 标题
    title: {
      type: String,
      default: '提示'
    },
    // 宽度  %  px
    width: {
      type: String,
      default: '30%'
    },
    // 顶部距离  vh  px
    top: {
      type: String,
      default: '15vh'
    },
    // 是否显示
    visible: {
      type: Boolean,
      default: false
    }
  },

  methods: {
    handleClose () {
      console.log('click')
      this.$emit('update:visible', false)
    }
  }

}
</script>

<style lang="scss" scoped>
.hm-dialog__wrapper {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: auto;
  margin: 0;
  z-index: 2001;
  background-color: rgba(0, 0, 0, 0.5);

  .hm-dialog {
    position: relative;
    margin: 15vh auto 50px;
    background: #fff;
    border-radius: 2px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
    box-sizing: border-box;
    width: 30%;

    &__header {
      padding: 20px 20px 10px;
      .hm-dialog__title {
        line-height: 24px;
        font-size: 18px;
        color: #303133;
      }
      .hm-dialog__headerbtn {
        position: absolute;
        top: 20px;
        right: 20px;
        padding: 0;
        background: transparent;
        border: none;
        outline: none;
        cursor: pointer;
        font-size: 16px;
        .el-icon-close {
          color: #909399;
        }
      }
    }

    &__body {
      padding: 30px 20px;
      color: #606266;
      font-size: 14px;
      word-break: break-all;
    }
    &__footer {
      padding: 10px 20px 20px;
      text-align: right;
      box-sizing: border-box;
      .hm-button:first-child {
        margin-right: 20px;
      }
    }
  }
}
</style>
