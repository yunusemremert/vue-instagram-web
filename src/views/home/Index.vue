<template>
  <div class="home">
    <div class="timeline">
      <h1>This is an home page</h1>
      <Avatar :size="80" />
    </div>
    <div class="sidebar">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
        atque eius eligendi error esse harum numquam quo repellat. Adipisci amet
        cum dolores impedit labore nemo possimus, quia saepe suscipit
        voluptatum.
      </p>
    </div>
  </div>
</template>

<script>
import Avatar from '@/components/Avatar'
export default {
  name: 'Home',
  components: { Avatar }
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
