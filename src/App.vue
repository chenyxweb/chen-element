<template>
  <div id="app">
    <div class="row">
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
    </div>
  </div>
</template>

<script>

export default {

  methods: {
    click (e) {
      console.log('click', e)
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
</style>
