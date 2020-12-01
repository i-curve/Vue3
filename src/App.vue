<template>
  <nav-header/>
  <router-view/>
  <show />
</template>
<script>
import NavHeader from '@/components/header.vue'
import Show from '@/components/show.vue'
export default {
  name: "app",
  components: {
    NavHeader,
    Show
  }
}
</script>