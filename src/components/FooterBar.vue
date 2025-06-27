<template>
  <footer class="footer container-fluid bg-body-tertiary custom-footer text-body">
    <div class="footer-content">
      <div class="footer-section">
        <h4>{{ $t("footer.title") }}</h4>
        <p>{{ $t("footer.description") }}</p>
        <ul class="social-links">
          <li v-for="(link, index) in socialLinks" :key="index">
            <a :href="link.url" target="_blank" class="link-primary">
              <img :src="link.icon" :alt="link.name" />
            </a>
          </li>
        </ul>
      </div>

      <div class="footer-section">
        <h4>{{ $t("footer.contact") }}</h4>
        <ul class="contact-info">
          <li>
            <a href="https://maps.app.goo.gl/2Qv9AmF8pPXBYeFK9" target="_blank" class="link-primary">{{
              $t("footer.address") }}</a>
          </li>
          <li>
            <a href="tel:+55453379-6800" class="link-primary">{{ $t("footer.phone") }}</a>
          </li>
          <li>
            <a href="mailto:epsantos@utfpr.edu.br" class="link-primary">{{ $t("footer.email") }}</a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n";
useI18n();

const socialLinks = [
  {
    name: "WhatsApp",
    url: "https://whatsapp.com/channel/0029Vb3tWIO3wtb3Jvag6Z0H",
    icon: "src/img/whatsapp.png",
  },
  {
    name: "Twitter",
    url: "https://twitter.com/utfpr_",
    icon: "src/img/twitter.png",
  },
  {
    name: "YouTube",
    url: "https://www.youtube.com/canaldaUTFPR",
    icon: "src/img/youtube.png",
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/utfpr_/",
    icon: "src/img/instagram.png",
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com/UTFPR/",
    icon: "src/img/facebook.png",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/school/utfpr-oficial/",
    icon: "src/img/linkedin.png",
  },
];
</script>

<style scoped>
.footer {
  padding: 30px 0;
  font-family: "Oswald", sans-serif;
}

.footer-content {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: flex-start;
  max-width: 1200px;
  margin: 0 auto;
}

.footer-section {
  flex: 1;
  min-width: 250px;
  padding: 10px;
  text-align: center;
}


h4 {
  margin-bottom: 10px;
}

p {
  margin-bottom: 15px;
}

.social-links {
  list-style: none;
  padding: 0;
  display: flex;
  justify-content: center;
  gap: 15px;
}

.social-links li img {
  width: 32px;
  height: 32px;
  transition: transform 0.3s;
}

.social-links li img:hover {
  transform: scale(1.1);
}

.contact-info {
  list-style: none;
  padding: 0;
}

.contact-info li {
  margin-bottom: 10px;
}

a.link-primary{
  color: inherit !important;
  text-decoration: none !important;
  transition: color 0.3s !important;
}

/* Fundo cinza claro no modo claro */
[data-bs-theme="light"] .custom-footer {
  background-color: #e9ecef !important; /* Cinza claro */
}


</style>
