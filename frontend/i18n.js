
const translations = {
  pt: {
    nav_sobre: "Sobre",
    nav_resumo: "Resumo Profissional",
    nav_tecnologias: "Tecnologias",
    nav_projetos: "Projetos",
    nav_contato: "Contato",
    titulo_projetos: "Projetos em Destaque",
    titulo_contato: "Contato",
    projeto1_titulo: "orangehrm-playwright",
    projeto1_stack: "🔧 Stack: Playwright + TypeScript + Allure",
    projeto1_desc: "🧪 Automatização E2E do OrangeHRM (login, cadastro, busca).",
    projeto2_titulo: "playwrightFastTrack",
    projeto2_stack: "🔧 Stack: Playwright + TypeScript + NodeJs + Allure",
    projeto2_desc: "📚 Projeto de automação de testes com foco em aprendizado e boas práticas.",
    projeto3_titulo: "FunctionalAssessment",
    projeto3_stack: "🔧 Stack: Selenium + Cucumber + Java",
    projeto3_desc: "🧪 Testes de login e checkout na plataforma SauceDemo.",
    projeto4_titulo: "TodoMvc",
    projeto4_stack: "🔧 Stack: Selenium + Python + Behave + Pytest",
    projeto4_desc: "📌 Automação de testes na aplicação TodoMvc com Python.",
    projeto_repositorio: "🔗 Repositório",
    projeto_report_desc: "📊 Relatório de execução de testes com Allure.",
  },
  en: {
    nav_sobre: "About",
    nav_resumo: "Resume",
    nav_tecnologias: "Technologies",
    nav_projetos: "Projects",
    nav_contato: "Contact",
    titulo_projetos: "Highlighted Projects",
    titulo_contato: "Contact",
    projeto1_titulo: "orangehrm-playwright",
    projeto1_stack: "🔧 Stack: Playwright + TypeScript + Allure",
    projeto1_desc: "🧪 E2E Automation for OrangeHRM (login, registration, search).",
    projeto2_titulo: "playwrightFastTrack",
    projeto2_stack: "🔧 Stack: Playwright + TypeScript + NodeJs + Allure",
    projeto2_desc: "📚 Test automation project focused on learning and best practices.",
    projeto3_titulo: "FunctionalAssessment",
    projeto3_stack: "🔧 Stack: Selenium + Cucumber + Java",
    projeto3_desc: "🧪 Login and checkout tests on SauceDemo platform.",
    projeto4_titulo: "TodoMvc",
    projeto4_stack: "🔧 Stack: Selenium + Python + Behave + Pytest",
    projeto4_desc: "📌 Test automation in the TodoMvc app using Python.",
    projeto_repositorio: "🔗 Repository",
    projeto_report_desc: "📊 Test execution report with Allure.",
  }
};

function translatePage(lang) {
  const elements = document.querySelectorAll("[data-translate]");
  elements.forEach(el => {
    const key = el.getAttribute("data-translate");
    if (translations[lang] && translations[lang][key]) {
      el.innerText = translations[lang][key];
    }
  });
}

document.getElementById("languageSelector").addEventListener("change", (e) => {
  translatePage(e.target.value);
});

window.addEventListener("DOMContentLoaded", () => {
  const userLang = navigator.language.startsWith("en") ? "en" : "pt";
  document.getElementById("languageSelector").value = userLang;
  translatePage(userLang);
});
