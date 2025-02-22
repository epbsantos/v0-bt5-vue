<script>
  import { posts } from '@/data/posts';
  export default {
    data() {
      return { posts };
    }
  };
</script>

<template>
    <div>
      <h1>Blog</h1>
      <ul>
        <li v-for="post in posts" :key="post.id">
          <router-link :to="`/blog/${post.id}`">{{ post.title }}</router-link>
        </li>
      </ul>
    </div>
</template>
  