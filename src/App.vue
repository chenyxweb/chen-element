<template>
  <div id="app">
    <!-- 按钮组件 -->
    <!-- <div class="row">
      <ch-button @click="click($event)">按钮</ch-button>
      <ch-button type="primary" disabled>禁用按钮</ch-button>
      <ch-button type="success">按钮</ch-button>
      <ch-button type="info">按钮</ch-button>
      <ch-button type="warning">按钮</ch-button>
      <ch-button type="danger">按钮</ch-button>
    </div>
    <div class="row">
      <ch-button plain icon='delete'>按钮</ch-button>
      <ch-button plain icon='delete' type="primary">按钮</ch-button>
      <ch-button plain icon='delete' type="success">按钮</ch-button>
      <ch-button plain icon='delete' type="info">按钮</ch-button>
      <ch-button plain icon='delete' type="warning">按钮</ch-button>
      <ch-button plain icon='check' type="danger">按钮</ch-button>
    </div>
    <div class="row">
      <ch-button round>按钮</ch-button>
      <ch-button round type="primary">按钮</ch-button>
      <ch-button round type="success">按钮</ch-button>
      <ch-button round type="info">按钮</ch-button>
      <ch-button round type="warning">按钮</ch-button>
      <ch-button round type="danger">按钮</ch-button>
    </div>
    <div class="row">
      <ch-button circle>按</ch-button>
      <ch-button circle type="primary">按</ch-button>
      <ch-button circle type="success">按</ch-button>
      <ch-button circle type="info">按</ch-button>
      <ch-button circle type="warning">按</ch-button>
      <ch-button circle type="danger">按</ch-button>
    </div>
    <div class="row">
      <ch-button circle icon='delete'></ch-button>
      <ch-button circle type="primary" icon='delete'></ch-button>
      <ch-button circle type="success" icon='delete'></ch-button>
      <ch-button circle type="info" icon='delete'></ch-button>
      <ch-button circle type="warning" icon='delete'></ch-button>
      <ch-button circle type="danger" icon='delete'></ch-button>
    </div> -->

    <!-- 对话框组件 -->
    <!-- <ch-button @click="handleOpen" type="primary">打开</ch-button>
    <ch-dialog width="40%" top="10vh" :visible.sync='visible'>
      <template #title>
        标题
      </template>
      <template #footer>
        <ch-button @click="close">取消</ch-button>
        <ch-button type="primary" @click="close">确定</ch-button>
      </template>
    </ch-dialog> -->

    <!-- input组件 -->
    <!-- show-password 自动转化成showPassword, 作为props传递给组件 -->
    <div class="input-wrapper">
      <ch-input
        placeholder="请输入用户名"
        type='text'
        name='username'
        v-model="input"
        clearable
        @blur="handleBlur(123,$event)"
      ></ch-input>
    </div>
    <div class="input-wrapper">
      <ch-input
        placeholder="请输入密码"
        type='password'
        name='password'
        :disabled="false"
        v-model="input"
        clearable
        show-password
      ></ch-input>
    </div>

    <!-- switch -->
    <ch-switch
      v-model="isActive"
      active-color="green"
      inactive-color="red"
    ></ch-switch>
    <ch-switch
      v-model="isActive"
      active-color="#13ce66"
      inactive-color="#ff4949"
    ></ch-switch>
  </div>
</template>

<script>

export default {

  data () {
    return {
      visible: false,
      input: '123',
      isActive: false
    }
  },

  methods: {
    click (e) {
      console.log('click', e)
    },
    // 打开dialog
    handleOpen () {
      this.visible = true
    },
    // 关闭
    close () {
      this.visible = false
    },
    handleBlur (value, e) {
      console.log(value, e)
    }

  }

}
</script>

<style lang="scss" scoped>
.row {
  .hm-button {
    margin-right: 15px;
    margin-bottom: 8px;
  }
}
.input-wrapper {
  width: 200px;
  margin-bottom: 5px;
}
</style>
