<template>
  <div>
    <h1>상세 페이지</h1>
    <div>
      <img :src="product.imageUrl" :alt="product.name" />
      <p>name: {{product.name}}</p>
      <p>price: {{product.price}}</p>
    </div>
  </div>
</template>

<script>
import {fetchProductById} from "~/api";

export default {
  async asyncData({ params  }) {
    const id = params.id;
    const response = await fetchProductById(id);
    const product = response.data;
    return { product };
  }

  // created() {
  //   const id = this.$route.params.id;
  //   const response = fetchProductById(id);
  // },
}
</script>

<style>

</style>
