<template>
  <div class="home">
    <h1>This is an home page</h1>
    <Text>Merhaba Dünya!</Text>
    <Text tag="p">Merhaba Dünya!</Text>
    <Text tag="b" size="xsmall">Merhaba Dünya!</Text>
    <IconHome width="60" height="60" />
  </div>
</template>

<script>
import Text from '@/components/Text'
import IconHome from '../icons/home.svg'

export default {
  name: 'Home',
  components: {
    Text,
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
