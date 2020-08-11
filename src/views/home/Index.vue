<template>
  <div class="home">
    <h1>This is an home page</h1>
    <TextComp>Merhaba Dünya!</TextComp>
    <TextComp tag="p">Merhaba Dünya!</TextComp>
    <TextComp tag="b" size="xsmall">Merhaba Dünya!</TextComp>
    <IconHome width="60" height="60" />
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
      asperiores autem dicta doloremque dolores ea facilis incidunt, inventore
      ipsam iusto magni nemo neque provident quaerat quam sequi ut vel vitae?
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
      assumenda autem, beatae consectetur culpa inventore ipsum molestiae nam
      numquam officia officiis optio quidem, sint! A alias blanditiis eos vero
      voluptatum? Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      Atque, beatae commodi dolore dolorem earum eveniet impedit in laboriosam
      magnam minus nam natus obcaecati possimus repellendus suscipit tenetur,
      vel voluptate voluptatem. Lorem ipsum dolor sit amet, consectetur
      adipisicing elit. Consequatur dolore error illo itaque mollitia neque
      perspiciatis quasi? Delectus, eos ex, ipsa ipsam magni modi molestias
      perferendis possimus praesentium quasi reiciendis.
    </p>
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
