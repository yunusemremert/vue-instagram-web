<template>
  <div class="home">
    <TextComp tag="h1">This is an profile page</TextComp>
    <div id="nav">
      <router-link to="/profile">Post</router-link> |
      <router-link to="/profile/igtv">IGTV</router-link> |
      <router-link to="/profile/save">Save</router-link> |
      <router-link to="/profile/tag">Tag</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
import TextComp from '@/components/TextComp'

export default {
  name: 'Profile',
  components: {
    TextComp
  }
}
</script>

<style scoped></style>
