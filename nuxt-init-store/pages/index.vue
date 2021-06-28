<template>
  <div>
    <div v-for="todo in todos" :key="todo.id">
      <div class="margin: 10px;">
        {{ todo.title }}
      </div>
      <div style="border-bottom: 1px solid #eee">&nbsp;</div>
    </div>
  </div>
</template>

<script>
// Ref: https://thiti.dev/blog/8588/
import { mapGetters } from 'vuex';
export default {
  // asyncData({ store }) {
  //   if (process.browser) {
  //     console.log('yes');
  //   }
  //   return {
  //     todos: store.getters['todo/TODOS'],
  //   };
  // },
  computed: {
    ...mapGetters({
      todos: 'todo/TODOS',
    }),
  },
  data() {
    return {};
  },
};
</script>
