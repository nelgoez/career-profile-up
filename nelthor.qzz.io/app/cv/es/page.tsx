'use client';

import Link from 'next/link';

export default function CVEsPage() {
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
            <span>✉️ nahuelgomez.cti@gmail.com</span>
            <a href="https://linkedin.com/in/nelgoez" className="text-[var(--color-accent)]">💼 linkedin.com/in/nelgoez</a>
            <a href="https://github.com/nelgoez" className="text-[var(--color-accent)]">🐙 github.com/nelgoez</a>
          </div>
        </header>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-3 border-b border-[var(--color-border)] pb-2">Resumen Profesional</h2>
          <p className="text-[var(--color-text)] leading-relaxed">
            Senior QA Automation Engineer con 6 años de experiencia construyendo y escalando automatización de pruebas para productos SaaS web.
            Especializado en Playwright, TypeScript, WebdriverIO y Robot Framework, con un historial comprobado de migración de suites heredadas,
            integración de pruebas en pipelines CI/CD y promoción de cultura shift-left. Inglés fluido con amplia experiencia en equipos de ingeniería distribuidos.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-3 border-b border-[var(--color-border)] pb-2">Competencias Clave</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { label: 'Automatización de Pruebas', items: 'Playwright, Selenium WebDriver, WebdriverIO, Cypress, Robot Framework, Protractor, Cucumber' },
              { label: 'Lenguajes', items: 'TypeScript, JavaScript, Python, Node.js' },
              { label: 'Testing de APIs', items: 'REST APIs, Microservicios, Middleware, Postman, Suites automatizadas' },
              { label: 'CI / CD', items: 'Jenkins, GitHub Actions — integración y mantenimiento de pipelines' },
              { label: 'Frontend & CMS', items: 'React, Angular, WordPress, Redux, Express, Supabase, Firebase' },
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
              <span className="text-sm text-[var(--color-text-muted)] whitespace-nowrap">Ago 2021 – Presente • ~5 años</span>
            </div>
            <p className="text-sm text-[var(--color-accent)] font-medium mb-3">Software Development Engineer in Test II (SDET II) — Mar 2022 – Presente</p>
            <p className="text-sm text-[var(--color-text-muted)] mb-2 italic">Líder global en hosting web — Bluehost, HostGator, Domain.com, Network Solutions</p>
            <ul className="space-y-2 text-sm text-[var(--color-text)]">
              <li className="flex gap-2">
                <span className="text-[var(--color-accent)] mt-1">▸</span>
                Lideré la migración de una suite heredada de 600+ casos de WebdriverIO/TypeScript → Robot Framework/Python, reduciendo el tiempo de regresión en un 35%.
              </li>
              <li className="flex gap-2">
                <span className="text-[var(--color-accent)] mt-1">▸</span>
                Integré suites de pruebas automatizadas en pipelines CI/CD de Jenkins, habilitando una cultura shift-left de calidad.
              </li>
              <li className="flex gap-2">
                <span className="text-[var(--color-accent)] mt-1">▸</span>
                Diseñé planes de prueba integrales para aplicaciones SaaS web complejas que sirven a millones de usuarios.
              </li>
              <li className="flex gap-2">
                <span className="text-[var(--color-accent)] mt-1">▸</span>
                Mentoricé a 20+ estudiantes, logrando un 90% de tasa de finalización mediante coaching estructurado de automatización QA.
              </li>
              <li className="flex gap-2">
                <span className="text-[var(--color-accent)] mt-1">▸</span>
                Desarrollé 10 scripts de pruebas automatizadas que aumentaron la cobertura en un 60% en flujos críticos de negocio.
              </li>
              <li className="flex gap-2">
                <span className="text-[var(--color-accent)] mt-1">▸</span>
                Lideré una migración de infraestructura reduciendo costos de servidores en un 20%.
              </li>
              <li className="flex gap-2">
                <span className="text-[var(--color-accent)] mt-1">▸</span>
                Realicé pruebas de API en capas REST, middleware y microservicios — validando contratos, flujos de autenticación e integraciones usando Postman y suites automatizadas.
              </li>
              <li className="flex gap-2">
                <span className="text-[var(--color-accent)] mt-1">▸</span>
                Probé aplicaciones frontend modernas con React y Angular, más plataformas WordPress CMS — cubriendo componentes, integración y journeys E2E.
              </li>
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="font-semibold">Coderhouse</h3>
            <p className="text-sm text-[var(--color-text-muted)] mb-1">Argentina</p>
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
              <h3 className="font-semibold text-sm">AI-Powered Quality Engineer</h3>
              <p className="text-sm text-[var(--color-text-muted)]">UPEX Galaxy — en progreso, 2026</p>
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
