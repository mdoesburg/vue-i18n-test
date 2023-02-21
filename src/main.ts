import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import "./assets/main.css";
import { createI18n } from "vue-i18n";

const messages = {
  en: {
    hello: "{0} world",
    sign_up_disclaimer:
      "By signing up, you agree to our {terms} and {privacy}.",
    terms_and_conditions: "Terms & Conditions",
    privacy_policy: "Privacy Policy",
  },
};

const i18n = createI18n({
  locale: "en",
  messages,
});

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(i18n);

app.mount("#app");
