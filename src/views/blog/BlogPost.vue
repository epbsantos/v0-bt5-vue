<script>
  import { posts } from '@/data/posts';
  export default {
    data() {
      const post = posts.find(p => p.id === parseInt(this.$route.params.id));
      return { post };
    }
  };
</script>

<template>
    <div>
      <h1>{{ post.title }}</h1>
      <p><strong>Publicado em:</strong> {{ post.date }}</p>
      <p>{{ post.content }}</p>
      <router-link to="/blog">Voltar para o Blog</router-link>
    </div>
  </template>
  