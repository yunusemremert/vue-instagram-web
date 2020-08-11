<template>
  <div class="home">
    <div class="timeline">
      <h1>This is an home page</h1>
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
    <div class="sidebar">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus atque
      eius eligendi error esse harum numquam quo repellat. Adipisci amet cum
      dolores impedit labore nemo possimus, quia saepe suscipit voluptatum.
    </div>
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
.home {
  max-width: 605px;
  margin-left: auto;
  margin-right: auto;

  @media (--t) {
    max-width: none;
    display: grid;
    grid-template-columns: 1fr 295px;
    grid-gap: 30px;
  }
}
.sidebar {
  display: none;

  @media (--t) {
    display: block;
  }
}
</style>
