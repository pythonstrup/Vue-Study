<template>
  <div>
    <input
      type="text"
      :value="value"
      @input="$emit('input', $event.target.value)"/>
    <button type="button" @click="$emit('search')">search</button>
  </div>
</template>

<script>
export default {
  props: {
    // searchKeyword: {
    //   type: String,
    //   default: () => '',
    // },
    value: {
      type: String,
      default: () => '',
    },
  },
}
</script>

<style>

</style>
