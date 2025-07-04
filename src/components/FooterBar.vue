<template>
  <footer class="pt-4 border-top mt-5 bg-body-secondary text-body mt-auto">
    <div class="container py-4">
      <div class="row">
        <!-- Institucional -->
        <div class="col-md-4 mb-4">
          <h5 class="fw-bold">{{ t("footer.title") }}</h5>
          <p>{{ t("footer.description") }}</p>
        </div>

        <!-- Contato -->
        <div class="col-md-4 mb-4">
          <h5 class="fw-bold">{{ t("footer.contact") }}</h5>
          <ul class="list-unstyled">
            <li>{{ t("footer.address") }}</li>
            <li>{{ t("footer.phone") }}</li>
            <li>
              <a
                :href="'mailto:' + t('footer.email')"
                class="text-decoration-none"
              >
                {{ t("footer.email") }}
              </a>
            </li>
          </ul>
        </div>

        <!-- Redes sociais com ícones do Bootstrap -->
        <div class="col-md-4 mb-4">
          <h5 class="fw-bold">Social</h5>
          <div class="d-flex flex-wrap gap-2">
            <a
              v-for="item in socialMedia"
              :key="item.url"
              :href="item.url"
              :title="item.alt"
              :aria-label="item.alt"
              target="_blank"
              rel="noopener"
              class="d-inline-block"
            >
              <svg class="bi" width="2em" height="2em" fill="currentColor">
                <use :xlink:href="getIconPath(item.name)" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div class="text-center mt-4 small text-muted">
        {{ t("footer.copyright") }}
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n";
const { t } = useI18n();

const socialMedia = [
  {
    name: "whatsapp",
    alt: t("footer.socialMedia.whatsapp"),
    url: "https://whatsapp.com/channel/0029Vb3tWIO3wtb3Jvag6Z0H",
  },
  {
    name: "twitter-x",
    alt: t("footer.socialMedia.twitter"),
    url: "https://x.com/utfpr_td",
  },
  {
    name: "tiktok",
    alt: t("footer.socialMedia.tiktok"),
    url: "https://tiktok.com/@utfpr.toledo",
  },
  {
    name: "youtube",
    alt: t("footer.socialMedia.youtube"),
    url: "https://www.youtube.com/@UTFPRToledoOficial",
  },
  {
    name: "instagram",
    alt: t("footer.socialMedia.instagram"),
    url: "https://www.instagram.com/utfprtd/",
  },
  {
    name: "facebook",
    alt: t("footer.socialMedia.facebook"),
    url: "https://www.facebook.com/UTFPR.TD/",
  },
  {
    name: "linkedin",
    alt: t("footer.socialMedia.linkedin"),
    url: "https://www.linkedin.com/school/utfpr-oficial/?originalSubdomain=br",
  },
];

// função para pegar o caminho do ícone na pasta do pacote bootstrap-icons
const getIconPath = (name: string) => {
  return `node_modules/bootstrap-icons/bootstrap-icons.svg#${name}`;
};
</script>
