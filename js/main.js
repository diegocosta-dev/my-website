// ===== Dicionário de traduções (PT/EN) =====
// Cada chave corresponde a um atributo data-i18n no HTML.
const I18N = {
  meta_description: {
    pt: "Diego Costa — Desenvolvedor Full-Stack especializado em Craft CMS.",
    en: "Diego Costa — Full-Stack Developer specialized in Craft CMS.",
  },
  skip_link: { pt: "Pular para o conteúdo", en: "Skip to content" },
  role: { pt: "Desenvolvedor Full-Stack", en: "Full-Stack Developer" },

  hero_title: { pt: "Desenvolvedor Full-Stack", en: "Full-Stack Developer" },
  hero_tagline: {
    pt: "Como desenvolvedor full-stack, resolvo desafios complexos para construir sites e integrações rápidos, seguros e fáceis de usar.",
    en: "As a full-stack developer, I tackle your most complex challenges to build websites and integrations that are fast, secure, and easy to use.",
  },

  about_title: { pt: "Sobre", en: "About" },
  about_body: {
    pt: "Desenvolvedor full-stack com 4 anos na Dative, focado no ecossistema Craft CMS (Sprig, Twig) no back-end e em Tailwind CSS + Alpine.js no front-end. Construo sites e integrações rápidos, seguros e fáceis de usar — da modelagem de dados e PHP/SQL até interfaces responsivas e bem acabadas.",
    en: "Full-stack developer with 4 years at Dative, focused on the Craft CMS ecosystem (Sprig, Twig) on the back end and Tailwind CSS + Alpine.js on the front end. I build fast, secure, and easy-to-use websites and integrations — from data modeling and PHP/SQL to polished, responsive interfaces.",
  },

  experience_title: { pt: "Experiência", en: "Experience" },
  exp1_role: { pt: "Desenvolvedor Full-Stack", en: "Full-Stack Developer" },
  exp1_period: { pt: "2022 — Atual", en: "2022 — Present" },
  exp1_org: { pt: "Dative", en: "Dative" },
  exp1_p1: {
    pt: "Desenvolvo e mantenho sites full-stack em Craft CMS, modelando conteúdo e criando templates dinâmicos com Twig e Sprig.",
    en: "Build and maintain full-stack websites on Craft CMS, modeling content and creating dynamic templates with Twig and Sprig.",
  },
  exp1_p2: {
    pt: "Construo front-ends responsivos e acessíveis com Tailwind CSS e Alpine.js, com foco em performance e usabilidade.",
    en: "Develop responsive, accessible front-ends with Tailwind CSS and Alpine.js, focused on performance and usability.",
  },
  exp1_p3: {
    pt: "Implemento integrações e lógica de back-end em PHP e SQL, com ambientes locais em Docker.",
    en: "Implement integrations and back-end logic in PHP and SQL, running local environments with Docker.",
  },

  skills_title: { pt: "Habilidades", en: "Skills" },
  skills_g1_title: { pt: "Craft CMS & Back-end", en: "Craft CMS & Back-end" },
  skills_g2_title: { pt: "Front-end", en: "Front-end" },
  skills_g3_title: { pt: "Ferramentas & Infra", en: "Tools & Infra" },

  education_title: { pt: "Formação", en: "Education" },
  edu1_course: { pt: "Curso / Graduação", en: "Degree / Course" },
  edu1_period: { pt: "2018 — 2022", en: "2018 — 2022" },
  edu1_org: { pt: "Instituição · Local", en: "Institution · Location" },

  languages_title: { pt: "Idiomas", en: "Languages" },
  lang_pt: { pt: "Português", en: "Portuguese" },
  lang_pt_level: { pt: "Nativo", en: "Native" },
  lang_en: { pt: "Inglês", en: "English" },
  lang_en_level: { pt: "Intermediário", en: "Intermediate" },
};

// ===== Idioma =====
function getInitialLang() {
  try {
    const saved = localStorage.getItem("lang");
    if (saved === "pt" || saved === "en") return saved;
  } catch (e) {}
  // Inglês é o idioma padrão (mercado de Craft CMS é majoritariamente fora do Brasil).
  return "en";
}

function applyLang(lang) {
  document.documentElement.lang = lang === "en" ? "en" : "pt-BR";

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    const entry = I18N[key];
    if (!entry || !entry[lang]) return;
    if (el.tagName === "META") {
      el.setAttribute("content", entry[lang]);
    } else {
      el.textContent = entry[lang];
    }
  });

  // O botão mostra o idioma para o qual vai alternar.
  const label = document.getElementById("lang-label");
  if (label) label.textContent = lang === "pt" ? "EN" : "PT";

  try { localStorage.setItem("lang", lang); } catch (e) {}
}

// ===== Tema =====
function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  try { localStorage.setItem("theme", theme); } catch (e) {}
}

// ===== Inicialização =====
document.addEventListener("DOMContentLoaded", () => {
  let lang = getInitialLang();
  applyLang(lang);

  const langBtn = document.getElementById("lang-toggle");
  if (langBtn) {
    langBtn.addEventListener("click", () => {
      lang = lang === "pt" ? "en" : "pt";
      applyLang(lang);
    });
  }

  const themeBtn = document.getElementById("theme-toggle");
  if (themeBtn) {
    themeBtn.addEventListener("click", () => {
      const current = document.documentElement.getAttribute("data-theme") || "light";
      applyTheme(current === "dark" ? "light" : "dark");
    });
  }

  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();
});
