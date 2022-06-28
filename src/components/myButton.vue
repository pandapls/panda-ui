<template>
  <div class="buttons-box">
    <p>
      <s-button type="primary" size="medium">确定</s-button>
      <s-button type="secondary" size="medium">取消</s-button>
      <s-button type="text" size="medium">文本</s-button>
    </p>

    <p>
      <s-button type="primary" size="small">Small</s-button>
      <s-button type="primary" size="medium">Medium</s-button>
      <s-button type="primary" size="large">Large</s-button>
    </p>

    <p>
      <s-button type="secondary" size="small">Small</s-button>
      <s-button type="secondary" size="medium">Medium</s-button>
      <s-button type="secondary" size="large">Large</s-button>
    </p>

    <p>
      <s-button type="primary" size="medium" @click="confirm">Primary</s-button>
      <s-button type="primary" size="medium" disabled>Disabled</s-button>
    </p>

    <p>
      <s-button type="secondary" size="medium" @click="confirm"
        >Secondary</s-button
      >
      <s-button type="secondary" size="medium" disabled>Disabled</s-button>
    </p>
    <p>
      <s-button type="text" size="medium" @click="confirm">Text</s-button>
      <s-button type="text" size="medium" disabled>Disabled</s-button>
    </p>
    <s-button type="primary" size="large" block @click="confirm"
      >Confirm</s-button
    >
    <s-button type="secondary" size="large" block>Cancle</s-button>
  </div>
</template>

<script setup lang="ts">
const confirm = () => {
  console.log('确定')
}
</script>

<style scoped>
.buttons-box {
  width: 800px;
  margin: 0 auto;
  text-align: center;
}
button {
  margin: 10px;
}
</style>
