<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useI18n } from "vue-i18n";
import * as bootstrap from "bootstrap";
interface FormData {
  nome: string;
  email: string;
  mensagem: string;
}

const { t } = useI18n();

const formData = ref<FormData>({
  nome: "",
  email: "",
  mensagem: "",
});

const formErrors = ref({
  nome: "",
  email: "",
  mensagem: "",
});

const isSubmitting = ref(false); 
const submissionSuccess = ref(false); 
const submissionError = ref(""); 


const toastEl = ref<HTMLElement | null>(null);
let toastInstance: bootstrap.Toast | null = null;

onMounted(() => {
 
  if (toastEl.value) {
    toastInstance = new bootstrap.Toast(toastEl.value);
  }
});

const showToast = () => {
  if (toastInstance) {
    toastInstance.show();
  }
};

const validateForm = (): boolean => {
  let isValid = true;
  formErrors.value = { nome: "", email: "", mensagem: "" }; 

  if (!formData.value.nome.trim()) {
    formErrors.value.nome = t("contactPage.form.validation.nameRequired");
    isValid = false;
  }

  if (!formData.value.email.trim()) {
    formErrors.value.email = t("contactPage.form.validation.emailRequired");
    isValid = false;
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.value.email)) {
    formErrors.value.email = t("contactPage.form.validation.emailInvalid");
    isValid = false;
  }

  if (!formData.value.mensagem.trim()) {
    formErrors.value.mensagem = t(
      "contactPage.form.validation.messageRequired"
    );
    isValid = false;
  }

  return isValid;
};

const enviarFormulario = async () => {
  submissionSuccess.value = false;
  submissionError.value = "";

  if (!validateForm()) {
    return;
  }

  isSubmitting.value = true;

  try {
   
    await new Promise((resolve) => setTimeout(resolve, 1000));

    console.log("Dados enviados:", formData.value);

 
    submissionSuccess.value = true;
    showToast();
    resetForm();
  } catch (error) {
    console.error("Erro ao enviar formulário:", error);
    submissionError.value = t("contactPage.form.errorMessage");
  } finally {
    isSubmitting.value = false;
  }
};

const resetForm = () => {
  formData.value = {
    nome: "",
    email: "",
    mensagem: "",
  };
  formErrors.value = { nome: "", email: "", mensagem: "" };
};
</script>

<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col-md-6 mb-4">
        <div class="contact-form">
          <h2 class="mb-4 text-start">{{ t("contactPage.title") }}</h2>

          <form @submit.prevent="enviarFormulario" novalidate>
            <div class="mb-3">
              <label for="nome" class="form-label">{{
                t("contactPage.form.nameLabel")
              }}</label>
              <input
                type="text"
                class="form-control"
                :class="{ 'is-invalid': formErrors.nome }"
                id="nome"
                v-model.trim="formData.nome"
                :placeholder="t('contactPage.form.namePlaceholder')"
                required
              />
              <div v-if="formErrors.nome" class="invalid-feedback">
                {{ formErrors.nome }}
              </div>
            </div>

            <div class="mb-3">
              <label for="email" class="form-label">{{
                t("contactPage.form.emailLabel")
              }}</label>
              <input
                type="email"
                class="form-control"
                :class="{ 'is-invalid': formErrors.email }"
                id="email"
                v-model.trim="formData.email"
                :placeholder="t('contactPage.form.emailPlaceholder')"
                required
              />
              <div v-if="formErrors.email" class="invalid-feedback">
                {{ formErrors.email }}
              </div>
            </div>

            <div class="mb-3">
              <label for="mensagem" class="form-label">{{
                t("contactPage.form.messageLabel")
              }}</label>
              <textarea
                id="mensagem"
                class="form-control"
                :class="{ 'is-invalid': formErrors.mensagem }"
                v-model.trim="formData.mensagem"
                rows="5"
                :placeholder="t('contactPage.form.messagePlaceholder')"
                required
              ></textarea>
              <div v-if="formErrors.mensagem" class="invalid-feedback">
                {{ formErrors.mensagem }}
              </div>
            </div>

            <button
              type="submit"
              class="btn btn-success w-100"
              :disabled="isSubmitting"
            >
              <span
                v-if="isSubmitting"
                class="spinner-border spinner-border-sm"
                role="status"
                aria-hidden="true"
              ></span>
              <span v-else>{{ t("contactPage.form.submitButton") }}</span>
            </button>

            <div v-if="submissionError" class="alert alert-danger mt-3" role="alert">
              {{ submissionError }}
            </div>
          </form>
        </div>
      </div>

      <div class="col-md-6">
        <h3 class="mb-3 text-start">
          {{ $t("contactPage.form.locationTitle") }}
        </h3>
        <div class="mapa-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3623.820351132375!2d-53.766341624975766!3d-24.733047105680583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94f395bcaf1f4697%3A0x8f229c248dfeae93!2sUTFPR%20-%20Campus%20Toledo!5e0!3m2!1spt-BR!2sbr!4v1750895253053!5m2!1spt-BR!2sbr"
            width="100%"
            height="400"
            style="border: 0"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  </div>

  <div
    class="toast-container position-fixed bottom-0 end-0 p-3"
    style="z-index: 9999"
  >
    <div
      id="successToast"
      ref="toastEl"
      class="toast align-items-center text-bg-success border-0"
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
    >
      <div class="d-flex">
        <div class="toast-body">
          {{ t("contactPage.form.successMessage") }}
        </div>
        <button
          type="button"
          class="btn-close btn-close-white me-2 m-auto"
          data-bs-dismiss="toast"
          aria-label="Close"
        ></button>
      </div>
    </div>
  </div>
</template>

<style scoped>
h2 {
  font-size: 2rem;
  margin-bottom: 1.25rem;
}
.contact-form {
  max-width: 30em;
  font-size: 1rem;
}
.form-label {
  font-size: 1rem;
}
input.form-control {
  font-size: 1rem;
  padding: 0.5em;
}
button.btn {
  font-size: 1rem;
  padding: 0.75em 0;
}
.mapa-container {
  max-width: 800px;
  margin: 0 auto;
  text-align: start;
}
</style>