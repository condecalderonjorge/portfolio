function About() {
    return (
      <section className="container about">
        <div className="box">
          <h2>Sobre mí</h2>
          <p>
            Data Analyst con enfoque en negocio. Experiencia en retail (Inditex/Zara) y proyectos de
            Business Intelligence (UNIR). Me gusta construir soluciones end-to-end: desde la ingesta
            y calidad de datos hasta la visualización y la toma de decisiones.
          </p>
          <ul className="list">
            <li>
              <strong>Stack:</strong> Power BI (DAX, Power Query), KNIME, SQL, Python/R.
            </li>
            <li>
              <strong>Áreas:</strong> Retail, logística, e-commerce, commodities.
            </li>
            <li>
              <strong>Valor:</strong> KPIs accionables, automatización y storytelling con datos.
            </li>
          </ul>
        </div>
        <div className="box">
          <h2>Habilidades clave</h2>
          <ul className="list">
            <li>
              Modelado dimensional (star/snowflake), calendario extendido, medidas comparativas (YoY,
              MoM).
            </li>
            <li>
              ETL con KNIME/Python, limpieza y reconciliación de fuentes, control de calidad de datos.
            </li>
            <li>
              SQL avanzado (window functions, cohortes, time series) y performance básica.
            </li>
            <li>Publicación de dashboards, control de accesos y documentación ejecutiva.</li>
          </ul>
        </div>
      </section>
    )
  }
  
  export default About
  