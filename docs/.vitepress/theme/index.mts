import { h } from "vue";
import { type Theme } from "vitepress";
import DefaultTheme from "vitepress/theme";
import "../style/vars.css";

import RtdbLogo from "../components/RtdbLogo.vue";
import SessionForgeLogo from "../components/SessionForgeLogo.vue";

export default {
  extends: DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null);
  },
  enhanceApp({ app }) {
    app.component("RtdbLogo", RtdbLogo);
    app.component("SessionForgeLogo", SessionForgeLogo);
  },
} satisfies Theme;
