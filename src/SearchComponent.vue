<template>



    <div class="searchcontainer">
      <input
        v-model="query"
        @input="performSearch"
        placeholder="Digite para buscar..."
      />
      <ul v-if="results.length > 0">
        <li v-for="(item, index) in results" :key="index">
          {{ item.name }} 
        </li>
      </ul>
    </div>
</template>

<script lang="ts">

import client from "./typesenseClient";

interface SearchResult {
  name: string;
  description: string;
  
}

export default {
  data() {
    return {
      query: "",
      results: [] as SearchResult[],
    };
  },
  methods: {
    async performSearch() {
      if (this.query.length > 0) {
        try {
          // Neste momento ainda nao fiz colecoes ja que e um template generico
          // Mas lembrar de adaptar suas colecoes a cada tipo de site, elas sao criadas 
          // No typesenseClients.ts
          const response = await client.collections("sua-colecao").documents().search({
            q: this.query,
            query_by: "name,description", 
          });

          this.results = response.hits.map((hit) => hit.document); 
        } catch (error) {
          console.error("Erro ao buscar:", error);
        }
      } else {
        this.results = [];
      }
    },
  },
  
};



</script>

<style scoped>
.search-container {
  display: flex;
  flex-direction: column;
  max-width: 400px;
}

input {
  padding: 8px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  padding: 5px 0;
  border-bottom: 1px solid #ddd;
}
</style>