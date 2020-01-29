<template>
  <div>
    <h1 class="text-center mx-auto my-5">
      {{ title }}
    </h1>
    <b-img
      src="../assets/logo.png"
      alt="Logo Edgeteq"
      fluid
      center
    />
  </div>
</template>

<script>
export default {
  name: "AppTitle",
  props: {
    title: {type: String, default: "Frontend assignment"},
  }
}
</script>

<style scoped>
</style>
