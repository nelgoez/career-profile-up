'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useLocale } from '@/lib/locale-context';

export default function CVEsPage() {
  const { locale, ready } = useLocale();
  const router = useRouter();

  useEffect(() => {
    if (ready && locale === 'en') { router.replace('/cv'); }
  }, [ready, locale, router]);
  return (
    <main>
      <div className="mb-8 flex justify-between items-center">
        <Link href="/" className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-accent)]">
          ← Volver
        </Link>
        <div className="flex gap-2">
          <a href="/cv" className="px-4 py-2 rounded-lg bg-[var(--color-accent-strong)] text-white text-sm font-semibold hover:opacity-90">
            English version
          </a>
          <button onClick={() => window.print()} className="px-4 py-2 rounded-lg bg-[var(--color-accent-strong)] text-white text-sm font-semibold hover:opacity-90 print-hidden">
            Guardar como PDF
          </button>
        </div>
      </div>

      <div className="cv-content max-w-3xl mx-auto p-8 md:p-12 rounded-xl bg-[var(--color-surface)] border border-[var(--color-border)] print:border-none print:shadow-none">
        <header className="text-center mb-10 print:mb-8">
          <h1 className="text-3xl font-bold mb-2">Nahuel Leonardo Elias Gomez</h1>
          <p className="text-[var(--color-accent)] font-semibold mb-4">Senior QA Automation Engineer • SDET II • Ingeniería de Calidad con IA</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-[var(--color-text-muted)]">
            <span>📍 Córdoba, Argentina</span>
            <span>📞 +54 351 380-8759</span>
            <span>✉️ gomeznahuel.le@gmail.com</span>
            <a href="https://linkedin.com/in/nelgoez" className="text-[var(--color-accent)]">💼 linkedin.com/in/nelgoez</a>
            <a href="https://github.com/nelgoez" className="text-[var(--color-accent)]">🐙 github.com/nelgoez</a>
            <a href="https://nelthor.com.ar" className="text-[var(--color-accent)]">🌐 nelthor.com.ar</a>
          </div>
        </header>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-3 border-b border-[var(--color-border)] pb-2">Resumen Profesional</h2>
          <p className="text-[var(--color-text)] leading-relaxed">
            Ingeniero Senior en Automatización de QA con 6 años en IT y 5+ años especializado en QA y automatización de pruebas para plataformas SaaS.
            Especializado en Playwright, TypeScript, Python, Cucumber y Robot Framework, con un historial comprobado de modernización de
            suites legacy, integración de tests en pipelines CI/CD e impulso de la cultura shift-left. Recientemente enfocado en ingeniería
            de calidad con IA/LLM — construcción de frameworks de testing agente con arquitectura KATA, diseño de quality gates en CI/CD y
            combinación de automatización tradicional con generación de tests asistida por IA. Inglés fluido con experiencia en equipos distribuidos.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-3 border-b border-[var(--color-border)] pb-2">Competencias Clave</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { label: 'Automatización de Pruebas', items: 'Playwright, Cucumber (sobre WebdriverIO), Robot Framework, Selenium WebDriver, WebdriverIO, Cypress, Protractor' },
              { label: 'Lenguajes', items: 'TypeScript, JavaScript, Python, Node.js, SQL' },
              { label: 'Testing de APIs', items: 'REST APIs, Microservicios, Middleware, Postman, Suites automatizadas' },
              { label: 'CI/CD & Automatización', items: 'Jenkins, GitHub Actions, Bitbucket — diseño de pipelines, mantenimiento, quality gates' },
              { label: 'Infraestructura & Contenedores', items: 'Docker, Kubernetes (básico), AWS (familiar), entornos sandbox' },
              { label: 'Monitoreo & Observabilidad', items: 'Kibana, Grafana, Allure Framework — dashboards, logging, seguimiento' },
              { label: 'Datos y Bases de Datos', items: 'validación SQL / MySQL / NoSQL, DBeaver, DBHub MCP' },
              { label: 'IA & Herramientas de Desarrollo', items: 'Claude Code, GitHub Copilot, Cursor — testing asistido por IA' },
              { label: 'Metodologías', items: 'Shift-Left Testing, KATA Architecture, Agile/Scrum, Diseño de Planes de Prueba' },
            ].map(cat => (
              <div key={cat.label} className="p-4 rounded-lg bg-[var(--color-bg)] border border-[var(--color-border)]">
                <h3 className="text-sm font-semibold text-[var(--color-accent)] mb-1">{cat.label}</h3>
                <p className="text-sm text-[var(--color-text)]">{cat.items}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4 border-b border-[var(--color-border)] pb-2">Experiencia Profesional</h2>

          <div className="mb-6">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="font-semibold">Newfold Digital</h3>
                <p className="text-sm text-[var(--color-text-muted)]">Córdoba, Argentina</p>
              </div>
              <span className="text-sm text-[var(--color-text-muted)] whitespace-nowrap">Ago 2021 – Ene 2026 • 4 años 6 meses</span>
            </div>
            <p className="text-sm text-[var(--color-accent)] font-medium mb-1">Software Development Engineer in Test II (SDET II) — Mar 2022 – Ene 2026</p>
            <ul className="space-y-2 text-sm text-[var(--color-text)] mb-4">
              <li className="flex gap-2">
                <span className="text-[var(--color-accent)] mt-1">▸</span>
                QA de productos de cara al usuario a escala — NetworkSolutions.com, Bluehost.com — sirviendo a millones de usuarios en plataformas de hosting y small business.
              </li>
              <li className="flex gap-2">
                <span className="text-[var(--color-accent)] mt-1">▸</span>
                Refactoricé por iniciativa propia la suite legacy de Cucumber (sobre WebdriverIO) — regresión de 3.5–6 h a ~1:45–2 h (~60%) y reducción de ~600–630 a ~430–440 casos.
              </li>
              <li className="flex gap-2">
                <span className="text-[var(--color-accent)] mt-1">▸</span>
                Migré la suite a Robot Framework + Python (~430 casos), moviendo cobertura de UI a tests más rápidos de API/DB (headless) — ejecuciones bajo 1:30 h con la misma cobertura y mayor precisión.
              </li>
              <li className="flex gap-2">
                <span className="text-[var(--color-accent)] mt-1">▸</span>
                Validé esquemas, estados, estructuras de datos y resultados de interacción en SQL, MySQL y algunas NoSQL durante la migración de servidores físicos a Oracle Cloud Infrastructure (OCI) — con DBeaver, conexiones directas a las DB y APIs (mayormente manual; algunos casos fijos en regresión).
              </li>
              <li className="flex gap-2">
                <span className="text-[var(--color-accent)] mt-1">▸</span>
                Diseñé estrategias de testing para múltiples líneas de producto — funcional, API, cross-browser, regresión.
              </li>
              <li className="flex gap-2">
                <span className="text-[var(--color-accent)] mt-1">▸</span>
                Integré las suites en CI/CD (Jenkins sobre Bitbucket) con Jira + Zephyr para gestión de casos, y mentoreé a compañeros en automatización limpia.
              </li>
            </ul>
            <p className="text-sm text-[var(--color-accent)] font-medium mb-1">Software Development Engineer — Ago 2021 – Feb 2022</p>
            <ul className="space-y-2 text-sm text-[var(--color-text)]">
              <li className="flex gap-2">
                <span className="text-[var(--color-accent)] mt-1">▸</span>
                Lideré la migración inicial de la suite legacy de 600+ casos de Protractor/JS a Cucumber (sobre WebdriverIO).
              </li>
              <li className="flex gap-2">
                <span className="text-[var(--color-accent)] mt-1">▸</span>
                Colaboré con DevOps y Desarrollo para integrar el testing más temprano en el SDLC, reduciendo defectos en producción.
              </li>
              <li className="flex gap-2">
                <span className="text-[var(--color-accent)] mt-1">▸</span>
                Construí la base del framework que luego fue re-plataformado a Robot Framework + Python.
              </li>
            </ul>
          </div>

          <div className="mb-6">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="font-semibold">UPEX Galaxy</h3>
                <p className="text-sm text-[var(--color-text-muted)]">Remoto, Argentina</p>
              </div>
              <span className="text-sm text-[var(--color-text-muted)] whitespace-nowrap">Ene 2026 – Presente</span>
            </div>
            <p className="text-sm text-[var(--color-accent)] font-medium mb-1">Agentic QA Engineer (Programa DOJO)</p>
            <ul className="space-y-2 text-sm text-[var(--color-text)]">
              <li className="flex gap-2">
                <span className="text-[var(--color-accent)] mt-1">▸</span>
                Construí el Agentic QA Boilerplate — un framework de QA open-source (arquitectura KATA, Playwright + TypeScript) con scaffolder create-agentic-qa, 20+ skills de agente, un CLI completo de Xray y 7 integraciones MCP.
              </li>
              <li className="flex gap-2">
                <span className="text-[var(--color-accent)] mt-1">▸</span>
                Orquesté el ciclo de vida QA Stage 0→6 con skills de agente: shift-left testing, sprint testing, documentación de pruebas, automatización y regresión GO/NO-GO.
              </li>
              <li className="flex gap-2">
                <span className="text-[var(--color-accent)] mt-1">▸</span>
                QA de la plataforma de seguimiento de diplomas de UPEX (con salida a producción) — suites E2E con Playwright, testing de API (45+ endpoints), accesibilidad (axe-core) y autorización multi-rol.
              </li>
              <li className="flex gap-2">
                <span className="text-[var(--color-accent)] mt-1">▸</span>
                Diseñé quality gates en CI/CD con workflows de GitHub Actions — dashboards Allure publicados automáticamente en GitHub Pages en cada ejecución.
              </li>
              <li className="flex gap-2">
                <span className="text-[var(--color-accent)] mt-1">▸</span>
                Implementé trazabilidad de pruebas con Jira/Xray usando decoradores @atc y un CLI de Xray de 13 comandos para sincronización automatizada de casos de prueba.
              </li>
              <li className="flex gap-2">
                <span className="text-[var(--color-accent)] mt-1">▸</span>
                Evaluado a través del DOJO de Agentic QA de UPEX — arquitectura de pruebas y diseño CI/CD revisados por pares sobre productos con salida a producción.
              </li>
            </ul>
          </div>

          <div className="mb-6">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="font-semibold">Coderhouse</h3>
                <p className="text-sm text-[var(--color-text-muted)]">Argentina</p>
              </div>
              <span className="text-sm text-[var(--color-text-muted)] whitespace-nowrap">Jul 2021 – Feb 2022 • 8 meses</span>
            </div>
            <p className="text-sm text-[var(--color-accent)] font-medium mb-2">Tutor — Backend Development (MERN Stack)</p>
            <p className="text-sm text-[var(--color-text)]">Instrucción y mentoring práctico en Node.js, Express, MongoDB y React.</p>
          </div>

          <div className="mb-6">
            <h3 className="font-semibold">Henry Bootcamp</h3>
            <p className="text-sm text-[var(--color-text-muted)] mb-1">Argentina (Académico)</p>
            <p className="text-sm text-[var(--color-accent)] font-medium mb-2">Full Stack Web Developer — Abr 2021 – Jun 2021</p>
            <ul className="space-y-2 text-sm text-[var(--color-text)]">
              <li className="flex gap-2">
                <span className="text-[var(--color-accent)] mt-1">▸</span>
                Construí un sistema de gestión de salud con React, Redux, Node.js, Supabase, Firebase — para pacientes, doctores y administrativos con acceso por roles y Material UI.
              </li>
              <li className="flex gap-2">
                <span className="text-[var(--color-accent)] mt-1">▸</span>
                Desarrollé una app del clima single-page consumiendo una API climática global — primer proyecto frontend end-to-end en React.
              </li>
            </ul>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-3 border-b border-[var(--color-border)] pb-2">Educación y Certificaciones</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 rounded-lg bg-[var(--color-bg)] border border-[var(--color-border)]">
              <h3 className="font-semibold text-sm">Full Stack Web Development</h3>
              <p className="text-sm text-[var(--color-text-muted)]">Henry Bootcamp • 2021</p>
              <p className="text-xs mt-1">
                <a href="/certificates/henry-full-stack.pdf" target="_blank" className="text-[var(--color-accent)]">Ver Certificado (PDF)</a>
              </p>
            </div>
            <div className="p-4 rounded-lg bg-[var(--color-bg)] border border-[var(--color-border)]">
              <h3 className="font-semibold text-sm">EF SET English Certificate</h3>
              <p className="text-sm text-[var(--color-text-muted)]">C1 Advanced — EF International Language Centers</p>
              <p className="text-xs mt-1">
                Emitido May 2021 ·
                <a href="https://cert.efset.org/JeCf4i" target="_blank" className="text-[var(--color-accent)]">Credential ID EF</a>
              </p>
            </div>
            <div className="p-4 rounded-lg bg-[var(--color-bg)] border border-[var(--color-border)]">
              <h3 className="font-semibold text-sm">Agentic Quality Analyst Engineer</h3>
              <p className="text-sm text-[var(--color-text-muted)]">UPEX Galaxy • 2026</p>
              <p className="text-xs mt-1">
                <a href="https://www.upexgalaxy.com/verify/UPEX-DOJOQUALITYENGINEER-2026-KE8HBJXR" target="_blank" className="text-[var(--color-accent)]">Verificar ↗</a>
                <span className="mx-1">·</span>
                <a href="/certificates/Quality-Engineer-UPEX.pdf" target="_blank" className="text-[var(--color-accent)]">PDF</a>
              </p>
            </div>
            <div className="p-4 rounded-lg bg-[var(--color-bg)] border border-[var(--color-border)]">
              <h3 className="font-semibold text-sm">Jira & Xray — Gestión de Pruebas</h3>
              <p className="text-sm text-[var(--color-text-muted)]">UPEX Galaxy • 2026</p>
              <p className="text-xs mt-1">
                <a href="/certificates/Jira-Xray-UPEX.pdf" target="_blank" className="text-[var(--color-accent)]">Ver Certificado (PDF)</a>
              </p>
            </div>
            <div className="p-4 rounded-lg bg-[var(--color-bg)] border border-[var(--color-border)]">
              <h3 className="font-semibold text-sm">Agentic Quality Automation Engineer</h3>
              <p className="text-sm text-[var(--color-text-muted)]">UPEX Galaxy • 2026</p>
              <p className="text-xs mt-1">
                <a href="https://www.upexgalaxy.com/verify/UPEX-CERT-2026-E9BXXHB5" target="_blank" className="text-[var(--color-accent)]">Verificar ↗</a>
                <span className="mx-1">·</span>
                <a href="/certificates/Agentic-Quality-Automation-Engineer-UPEX.pdf" target="_blank" className="text-[var(--color-accent)]">PDF</a>
              </p>
            </div>
            <div className="p-4 rounded-lg bg-[var(--color-bg)] border border-[var(--color-border)]">
              <h3 className="font-semibold text-sm">Playwright — Test Automation Expertise</h3>
              <p className="text-sm text-[var(--color-text-muted)]">UPEX Galaxy • 2026</p>
              <p className="text-xs mt-1">
                <a href="https://www.upexgalaxy.com/verify/UPEX-CERT-2026-V3VRACJC" target="_blank" className="text-[var(--color-accent)]">Verificar ↗</a>
                <span className="mx-1">·</span>
                <a href="/certificates/Playwright-Test-Automation-Expertise-UPEX.pdf" target="_blank" className="text-[var(--color-accent)]">PDF</a>
              </p>
            </div>
            <div className="p-4 rounded-lg bg-[var(--color-bg)] border border-[var(--color-border)]">
              <h3 className="font-semibold text-sm">IA y Automatización de Flujos de Trabajo</h3>
              <p className="text-sm text-[var(--color-text-muted)]">Campus Virtual UNC</p>
              <p className="text-xs mt-1">
                Emitido Ene 2026 ·
                <a href="https://drive.google.com/file/d/1T58Pd5MERetW6uM7lLd7h-Dl6vsyt-8f/view" target="_blank" className="text-[var(--color-accent)]">Credential ID YRtctId1Px</a>
              </p>
            </div>
            <div className="p-4 rounded-lg bg-[var(--color-bg)] border border-[var(--color-border)] md:col-span-2">
              <h3 className="font-semibold text-sm">How to Give Feedback People Can Actually Use</h3>
              <p className="text-sm text-[var(--color-text-muted)]">LinkedIn</p>
              <p className="text-xs mt-1">
                Emitido Mar 2024 ·
                <a href="https://www.linkedin.com/learning/certificates/dc6760c072692cd97698842c34170c219bd160901797f378c6e0d5076767e324" target="_blank" className="text-[var(--color-accent)]">Ver Certificado</a>
              </p>
              <p className="text-xs text-[var(--color-text-muted)] mt-1">Skills: Constructive Feedback, Interpersonal Communication</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-3 border-b border-[var(--color-border)] pb-2">Idiomas</h2>
          <div className="flex gap-6">
            <div className="p-4 rounded-lg bg-[var(--color-bg)] border border-[var(--color-border)] flex-1">
              <h3 className="font-semibold text-sm">Español</h3>
              <p className="text-sm text-[var(--color-text-muted)]">Nativo</p>
            </div>
            <div className="p-4 rounded-lg bg-[var(--color-bg)] border border-[var(--color-border)] flex-1">
              <h3 className="font-semibold text-sm">Inglés</h3>
              <p className="text-sm text-[var(--color-text-muted)]">Fluido (C1 Advanced)</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
