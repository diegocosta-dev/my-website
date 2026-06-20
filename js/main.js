// ===== Dicionário de traduções (PT/EN) =====
// Cada chave corresponde a um atributo data-i18n no HTML.
const I18N = {
  meta_description: {
    pt: "Currículo de Diego Costa — Desenvolvedor de Software.",
    en: "Diego Costa's résumé — Software Developer.",
  },
  skip_link: { pt: "Pular para o conteúdo", en: "Skip to content" },
  role: { pt: "Desenvolvedor de Software", en: "Software Developer" },

  hero_title: { pt: "Desenvolvedor de Software", en: "Software Developer" },
  hero_tagline: {
    pt: "Breve resumo profissional. Edite este texto com a sua descrição: stack principal, anos de experiência e o tipo de problema que você gosta de resolver.",
    en: "Short professional summary. Edit this text with your own pitch: main stack, years of experience, and the kind of problems you enjoy solving.",
  },

  about_title: { pt: "Sobre", en: "About" },
  about_body: {
    pt: "Parágrafo sobre você. Substitua por um resumo de 3 a 5 linhas: sua trajetória, o que te motiva e onde quer chegar. Mantenha objetivo e direto.",
    en: "A paragraph about you. Replace it with a 3–5 line summary: your background, what drives you, and where you want to go. Keep it concise.",
  },

  experience_title: { pt: "Experiência", en: "Experience" },
  exp1_role: { pt: "Cargo / Posição", en: "Job Title / Role" },
  exp1_period: { pt: "Jan 2024 — Atual", en: "Jan 2024 — Present" },
  exp1_org: { pt: "Empresa · Local", en: "Company · Location" },
  exp1_p1: {
    pt: "Descreva uma conquista ou responsabilidade com impacto mensurável.",
    en: "Describe an achievement or responsibility with measurable impact.",
  },
  exp1_p2: {
    pt: "Outra responsabilidade relevante, com tecnologias usadas.",
    en: "Another relevant responsibility, with the technologies used.",
  },
  exp1_p3: {
    pt: "Resultado obtido (números, melhorias, entregas).",
    en: "Outcome achieved (numbers, improvements, deliverables).",
  },
  exp2_role: { pt: "Cargo / Posição", en: "Job Title / Role" },
  exp2_period: { pt: "Jan 2022 — Dez 2023", en: "Jan 2022 — Dec 2023" },
  exp2_org: { pt: "Empresa · Local", en: "Company · Location" },
  exp2_p1: {
    pt: "Responsabilidade ou projeto importante.",
    en: "Key responsibility or project.",
  },
  exp2_p2: {
    pt: "Tecnologias e ferramentas utilizadas no dia a dia.",
    en: "Technologies and tools used day to day.",
  },

  skills_title: { pt: "Habilidades", en: "Skills" },
  skills_g1_title: { pt: "Linguagens", en: "Languages" },
  skills_g2_title: { pt: "Frameworks & Ferramentas", en: "Frameworks & Tools" },
  skills_g3_title: { pt: "Infra & Outros", en: "Infra & Others" },

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
  const nav = (navigator.language || "pt").toLowerCase();
  return nav.startsWith("en") ? "en" : "pt";
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
