<template>
  <div class="post">
    <!--- header --->
    <header class="header section">
      <div class="header-author">
        <Avatar :size="40" />
        <div class="header-author-info">
          <div>
            <CustomText tag="b">yunusemremerrt</CustomText>
          </div>
          <div>
            <CustomText tag="span" size="xsmall">Denizli, Turkey</CustomText>
          </div>
        </div>
      </div>
      <div class="header-more">
        <button type="button">
          <IconMore />
        </button>
      </div>
    </header>

    <!--- media --->
    <div class="post-media">
      <img
        src="https://instagram.fadb3-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/p640x640/117600835_293382078589444_5107963129821936470_n.jpg?_nc_ht=instagram.fadb3-1.fna.fbcdn.net&_nc_cat=104&_nc_ohc=hIFllVRwSHwAX9NafKV&oh=b0ddf29ac0c076c451b3db1549a38f8e&oe=5F62916E"
        alt=""
      />
    </div>

    <!--- actions --->
    <div class="action-buttons section">
      <button type="button">
        <IconLike />
      </button>
      <button type="button">
        <IconComment />
      </button>
      <button type="button">
        <IconDirect />
      </button>
      <button class="action-save" type="button">
        <IconSave />
      </button>
    </div>

    <!--- view count -->
    <div class="view-count section">
      <CustomText tag="b">1.345 beğenme</CustomText>
    </div>

    <!--- comment list -->
    <!--- datetime -->
    <!--- comment form -->
  </div>
</template>

<script>
import Avatar from '@/components/Avatar'
import CustomText from '@/components/TextComp'

import IconMore from '@/icons/more.svg'
import IconLike from '@/icons/like.svg'
import IconComment from '@/icons/comment.svg'
import IconDirect from '@/icons/direct.svg'
import IconSave from '@/icons/save.svg'

export default {
  name: 'Post',
  components: {
    Avatar,
    CustomText,
    IconMore,
    IconLike,
    IconComment,
    IconDirect,
    IconSave
  }
}
</script>

<style scoped>
.post {
  border-radius: 3px;
  border: 1px solid rgb(var(--b6a));
}

.section {
  padding-left: 16px;
  padding-right: 16px;
}

.header {
  height: 60px;
  display: flex;
  align-items: center;

  &-author {
    display: flex;
    align-items: center;

    &-info {
      margin-left: 8px;
    }
  }

  &-more {
    margin-left: auto;
  }
}

.action-buttons {
  height: 45px;
  display: flex;
  align-items: center;

  button {
    margin-right: 16px;
  }

  .action-save {
    margin-left: auto;
    margin-right: 0;
  }
}
</style>
