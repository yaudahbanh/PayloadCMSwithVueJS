<template>
  <div class="flex flex-col justify-center min-h-screen items-center">
    <div>
      <h1 class="font-bold text-4xl">Data Handphone</h1>
    </div>
    <div
      class="flex flex-row gap-9 justify-content-center align-items-center g-2 font-semibold text-xl py-8"
    >
      <div class="col">
        <a href="/create" class="text-lime-600">Create Data</a>
      </div>
      <div class="col">
        <a href="/update" class="text-cyan-600">Update Data</a>
      </div>
      <div class="col">
        <a href="/delete" class="text-pink-600">Delete Data</a>
      </div>
    </div>
  </div>
  <FooterComp class="-mt-8"></FooterComp>
</template>

<script>
import FooterComp from '../components/FooterComp.vue'
export default {
  name: 'HomeView',
  components: {
    FooterComp
  }
}
</script>
