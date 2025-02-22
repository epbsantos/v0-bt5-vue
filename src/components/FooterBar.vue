<template>
  <div class="footer-bar row fixed-bottom">
    <div class="col-xxl-4 offset-xxl-2">
      <div class="Footer-title text-xxl-center">
        <h4>{{ $t("footer.title") }}</h4>
        <p>{{ $t("footer.description") }}</p>
      </div>

      <div class="social-links fixed-bottom m-0 p-0">
        <ul class="lista col-xxl-8 text-xxl-center">
          <li class="social-midia">
            <a href="https://whatsapp.com/channel/0029Vb3tWIO3wtb3Jvag6Z0H" target="_blank"></a>
          </li>
          <li class="social-midia">
            <a href="https://twitter.com/utfpr_" target="_blank"></a>
          </li>
          <li class="social-midia">
            <a href="https://www.youtube.com/canaldaUTFPR" target="_blank"></a>
          </li>
          <li class="social-midia">
            <a href="https://www.instagram.com/utfpr_/" target="_blank"></a>
          </li>
          <li class="social-midia">
            <a href="https://www.facebook.com/UTFPR/" target="_blank"></a>
          </li>
          <li class="social-midia">
            <a href="https://www.linkedin.com/school/utfpr-oficial/?originalSubdomain=br" target="_blank"></a>
          </li>
        </ul>
      </div>
    </div>

    <div class="col-xxl-2 offset-xxl-2">
      <div class="Footer-title text-xxl-center">
        <h4>{{ $t("footer.contact") }}</h4>
        <ul>
          <li><a href="https://maps.app.goo.gl/2Qv9AmF8pPXBYeFK9" target="_blank">{{ $t("footer.address") }}</a></li>
          <li><a href="tel:+55453379-6800">{{ $t("footer.phone") }}</a></li>
          <li><a href="mailto:epsantos@utfpr.edu.br">{{ $t("footer.email") }}</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n";

// Acessar a função t para tradução
const { t } = useI18n();
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Oswald:wght@200..700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Oswald:wght@200..700&family=Rethink+Sans:ital,wght@0,400..800;1,400..800&display=swap');

.footer-bar {
  background-color: #151515;
  height: 22vh;
}

.Footer-title {
  padding-top: 25px;
}

h4 {
  color: white;
  font-family: "Oswald", serif;
  font-optical-sizing: auto;
  font-style: normal;
}

p {
  padding-top: 10px;
  color: white;
  font-family: "Oswald", serif;
  font-optical-sizing: auto;
  font-style: normal;
  font-size: 18px;
}

a {
  font-family: "Oswald", serif;
  font-optical-sizing: auto;
  font-style: normal;
  font-size: 18px;
}

a,
li {
  text-decoration: none;
  list-style-type: none;
  padding-top: 10px;
}

ul {
  padding: 0;
}

.social-midia {
  display: inline-block;
  padding: 15px;
}

.social-midia a[href$="https://www.instagram.com/utfpr_/"]:before {
  content: url("../instagram.png");
}

.social-midia a[href$="https://twitter.com/utfpr_"]:before {
  content: url("../twitter.png");
}

.social-midia a[href$="https://whatsapp.com/channel/0029Vb3tWIO3wtb3Jvag6Z0H"]:before {
  content: url("../whatsapp.png");
}

.social-midia a[href$="https://www.youtube.com/canaldaUTFPR"]:before {
  content: url("../youtube.png");
}

.social-midia a[href$="https://www.facebook.com/UTFPR/"]:before {
  content: url("../facebook.png");
}

.social-midia a[href$="https://www.linkedin.com/school/utfpr-oficial/?originalSubdomain=br"]:before {
  content: url("../linkedin.png");
}
</style>