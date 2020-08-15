<template>
  <figure class="avatar">
    <img :src="src" :alt="alt" :width="size" :height="size" />
  </figure>
</template>

<script>
export default {
  name: 'Avatar',
  props: {
    src: {
      type: String,
      default:
        'https://instagram.fadb3-1.fna.fbcdn.net/v/t51.2885-19/s150x150/115875799_2543885589047491_4375032698495846293_n.jpg?_nc_ht=instagram.fadb3-1.fna.fbcdn.net&_nc_ohc=DWnvFDtYAfwAX9M6vR2&oh=ff21d10c100dafcca86e44631795a6b4&oe=5F628DF8'
    },
    alt: {
      type: String
    },
    size: {
      type: Number
    }
  }
}
</script>

<style scoped>
.avatar {
  display: inline-flex;
  padding: 2px;
  border-radius: 99px;
  background: linear-gradient(
    219deg,
    rgba(184, 63, 140, 1) 0%,
    rgba(237, 158, 90, 1) 100%
  );

  img {
    border-radius: inherit;
    border: 2px solid white;
  }
}
</style>
