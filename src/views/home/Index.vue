<template>
  <div class="home">
    <h1>This is an home page</h1>
    <TextComp>Merhaba Dünya!</TextComp>
    <TextComp tag="p">Merhaba Dünya!</TextComp>
    <TextComp tag="b" size="xsmall">Merhaba Dünya!</TextComp>
    <IconHome width="60" height="60" />
  </div>
</template>

<script>
import TextComp from '@/components/TextComp'
import IconHome from '../../icons/home.svg'

export default {
  name: 'Home',
  components: {
    TextComp,
    IconHome
  }
}
</script>

<style scoped>
h1 {
  color: red;

  @media (--t) {
    color: blue;
  }
}
</style>
