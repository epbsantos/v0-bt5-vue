<template>
  <div class="container py-5">
    <h2 class="mb-4 text-center">Tema 2 – Tabela Interativa</h2>

    <table class="table table-bordered text-center">
      <tbody>
        <tr v-for="(row, rowIndex) in table" :key="rowIndex">
          <td
            v-for="(cell, cellIndex) in row"
            :key="cellIndex"
            :style="{ backgroundColor: cell.color }"
            @click="toggleColor(rowIndex, cellIndex)"
            class="p-4"
          >
            {{ cell.label }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "TabelaInterativa",

  data() {
    return {
      table: [
        [
          { label: "A1", color: "#ffffff" },
          { label: "A2", color: "#ffffff" },
          { label: "A3", color: "#ffffff" },
        ],
        [
          { label: "B1", color: "#ffffff" },
          { label: "B2", color: "#ffffff" },
          { label: "B3", color: "#ffffff" },
        ],
        [
          { label: "C1", color: "#ffffff" },
          { label: "C2", color: "#ffffff" },
          { label: "C3", color: "#ffffff" },
        ],
      ],
    };
  },

  methods: {
    toggleColor(row, col) {
      const cell = this.table[row][col];
      cell.color = cell.color === "#ffffff" ? "#ffd447" : "#ffffff";
    },
  },
};
</script>

<style scoped>
td {
  cursor: pointer;
  transition: background 0.2s ease-in-out;
}
</style>
