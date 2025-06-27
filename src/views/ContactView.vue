<script setup lang="ts">
import { ref } from "vue";
import { useI18n } from 'vue-i18n';
import Footer from "@/components/FooterBar.vue";

const { t } = useI18n();
const nome = ref("");
const email = ref("");
const subject = ref("");

const enviarFormulario = () => {
  console.log("Nome:", nome.value);
  console.log("Email:", email.value);
  console.log("Assunto:", subject.value);
  alert("Mensagem enviada com sucesso!");

  nome.value = "";
  email.value = "";
  subject.value = "";
};
</script>
<template>
  <div class="container mt-5 d-flex justify-content-center">
    <div class="contact-form">
      <h2 class="mb-4 text-start">{{ t('contactPage.title') }}</h2>

      <form @submit.prevent="enviarFormulario">
        <div class="mb-3">
          <label for="nome" class="form-label">{{ t('contactPage.form.nameLabel') }}</label>
          <input type="text" class="form-control" id="nome" v-model="nome"
            :placeholder="t('contactPage.form.namePlaceholder')" required />
        </div>

        <div class="mb-3">
          <label for="email" class="form-label">{{ t('contactPage.form.emailLabel') }}</label>
          <input type="email" class="form-control" id="email" v-model="email"
            :placeholder="t('contactPage.form.emailPlaceholder')" required />
        </div>

        <div class="mb-3">
          <label for="subject" class="form-label">{{ t('contactPage.form.subjectLabel') }}</label>
          <textarea id="subject" class="form-control" v-model="subject"
            :placeholder="t('contactPage.form.subjectPlaceholder')" rows="4" required></textarea>
        </div>


        <button type="submit" class="btn btn-success w-100">
          {{ t('contactPage.form.submitButton') }}
        </button>
      </form>
    </div>
  </div>

  <Footer />
</template>

<style scoped>
h2 {
  font-family: "Oswald", serif;
  font-size: 1.5rem;
  margin-bottom: 1.25rem;
}

.contact-form {
  width: 100%;
  max-width: 800px;
  font-size: 1rem;
}

.form-label {
  font-size: 1rem;
}

input.form-control {
  font-size: 1rem;
  padding: 0.5em;
  width: 100%;
  max-width: 800px;
  box-sizing: border-box;
}

button.btn {
  font-size: 1rem;
  padding: 0.75em 0;
  margin-bottom: 1rem;
  width: 100%;
  max-width: 800px;
  background-color: #FFBE00;
  color: black;
}
</style>