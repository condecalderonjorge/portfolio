function Hero() {
    return (
      <header className="hero">
        <div className="container hero-inner">
          <div>
            <span className="pill">Data Analytics · BI · ETL</span>
            <h1>
              Jorge Conde Calderón
              <br />
              Data Analyst
            </h1>
            <p className="lead">
              Creo soluciones de analítica de datos centradas en negocio: dashboards de{' '}
              <strong>Power BI</strong>, pipelines <strong>KNIME/Python</strong>,{' '}
              <strong>SQL</strong> y <strong>Machine Learning.</strong>
            </p>
            <div className="cta-row">
              <a className="btn" href="#proyectos" aria-label="Ir a proyectos">
                Ver proyectos
              </a>
              <a className="btn" href="#stack" aria-label="Ir a Stack">
                Stack
              </a>
              <a className="btn ghost" href="#contacto" aria-label="Ir a contacto">
                Contacto
              </a>
            </div>
          </div>
          <div className="hero-card">
            <strong>Lo que verás aquí</strong>
            <ul>
              <li>Dashboards interactivos (Power BI) con enfoque en KPIs accionables.</li>
              <li>Workflows de ingesta, limpieza y transformación (KNIME / Python).</li>
              <li>Consultas y modelos SQL (dimensional, series temporales).</li>
              <li>Proyectos aplicados a retail, logística y análisis de mercados.</li>
            </ul>
          </div>
        </div>
      </header>
    )
  }
  
  export default Hero
  