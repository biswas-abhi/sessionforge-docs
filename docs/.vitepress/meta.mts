// noinspection ES6PreferShortImport: IntelliJ IDE hint to avoid warning to use `~/contributors`, will fail on build if changed

/* Texts */
export const headTitle = "SessionForge";
export const headSubtitle = "SessionForge";
export const headDescription = "Secure, Simple, and Flexible Session Handling";

/* CDN fonts and styles */
export const googleapis = "https://fonts.googleapis.com";
export const gstatic = "https://fonts.gstatic.com";
export const font = `${googleapis}/css2?family=Readex+Pro:wght@200;400;600&display=swap`;

/* GitHub and social links */
export const github = "https://github.com/biswas-abhi/session-forge";
export const releases = "https://github.com/biswas-abhi/session-forge/releases";
export const contributing =
  "https://github.com/biswas-abhi/session-forge/blob/main/CONTRIBUTING.md";

/* vitepress head */
export const ogUrl = "https://sessionforge.netlify.app/";
export const ogImage = `${ogUrl}og.png`;

/* Avatar/Image/Sponsors servers */
export const preconnectLinks = [googleapis, gstatic];
export const preconnectHomeLinks = [googleapis, gstatic];

/* PWA runtime caching urlPattern regular expressions */
export const pwaFontsRegex = new RegExp(`^${googleapis}/.*`, "i");
export const pwaFontStylesRegex = new RegExp(`^${gstatic}/.*`, "i");
// eslint-disable-next-line prefer-regex-literals
export const githubusercontentRegex = new RegExp(
  "^https://((i.ibb.co)|((raw|user-images).githubusercontent.com))/.*",
  "i"
);

export const docTag = "https://github.com/biswas-abhi/sessionforge-docs/tags";
export const docRelease =
  "https://github.com/biswas-abhi/sessionforge-docs/releases";
export const docContributing =
  "https://github.com/biswas-abhi/sessionforge-docs/blob/main/CONTRIBUTING.md";
export const docGithub = "https://github.com/biswas-abhi/sessionforge-docs";
