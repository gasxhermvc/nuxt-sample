<template>
  <div>
    <div>รายการโพสต์ {{ posts.length || 0 }} รายการ</div>
    <template v-for="post in posts">
      <div :key="post.id">
        ชื่อเรื่อง: {{ post.title }}<br />
        เนื้อหา: {{ post.body }}
        <hr />
      </div>
    </template>
  </div>
</template>

<script>
export default {
  asyncData({ store }) {
    return {
      posts: store.getters['post/POSTS'],
    };
  },
};
</script>

<style></style>
