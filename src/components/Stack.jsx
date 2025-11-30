const getTechLogo = (techName) => {
  const logoMap = {
    'Python': { icon: 'python', color: '3776AB' },
    'JavaScript': { icon: 'javascript', color: 'F7DF1E' },
    'SQL': { icon: 'postgresql', color: '336791' },
    'R': { icon: 'r', color: '276DC3' },
    'Pandas': { icon: 'pandas', color: '150458' },
    'NumPy': { icon: 'numpy', color: '013243' },
    'scikit-learn': { icon: 'scikitlearn', color: 'F7931E' },
    'matplotlib': { icon: 'python', color: '3776AB' },
    'seaborn': { icon: 'python', color: '3776AB' },
    'dplyr': { icon: 'r', color: '276DC3' },
    'ggplot2': { icon: 'r', color: '276DC3' },
    'plotly.express': { icon: 'plotly', color: '3F4F75' },
    'Power BI': { icon: 'powerbi', color: 'F2C811' },
    'DAX': { icon: 'microsoft', color: '0078D4' },
    'Power Query (M)': { icon: 'microsoft', color: '0078D4' },
    'Modelado dimensional': { icon: 'powerbi', color: 'F2C811' },
    'KNIME': { icon: 'knime', color: 'F2C811' },
    'MySQL': { icon: 'mysql', color: '4479A1' },
    'PostgreSQL': { icon: 'postgresql', color: '336791' },
    'MSSQL': { icon: 'microsoftsqlserver', color: 'CC2927' },
    'Git': { icon: 'git', color: 'F05032' },
    'GitHub': { icon: 'github', color: '181717' },
    'GitHub Pages': { icon: 'github', color: '181717' },
    'VS Code': { icon: 'visualstudiocode', color: '007ACC' },
    'Cursor': { icon: 'cursor', color: '4A5568' }, 
    'React': { icon: 'react', color: '61DAFB' },
    'Vite': { icon: 'vite', color: '646CFF' },
  }

  const logoInfo = logoMap[techName]
  if (!logoInfo || !logoInfo.icon) return null
  
  // iconify.dev API
  return `https://api.iconify.design/simple-icons/${logoInfo.icon}.svg?color=%23${logoInfo.color}`
}

function StackTag({ name }) {
  const logoUrl = getTechLogo(name)
  
  return (
    <span className="tag">
      {logoUrl && (
        <img 
          src={logoUrl} 
          alt={`${name} logo`}
          className="tag-logo"
          onError={(e) => {
            e.target.style.display = 'none'
          }}
        />
      )}
      <span>{name}</span>
    </span>
  )
}

function Stack() {
    return (
      <section id="stack">
        <div className="container">
          <h2>Stack de análisis y Business Intelligence</h2>
          <p className="sub">
            Herramientas y tecnologías que utilizo para transformar datos en decisiones accionables.
          </p>
  
          <div className="grid">
            {/* Lenguajes */}
            <div className="card">
              <div className="meta">
                <span className="badge">Lenguajes</span>
              </div>
              <h3>Lenguajes de programación y consulta</h3>
              <p>Base para automatizar procesos, preparar datos y construir análisis.</p>
              <div className="tags">
                <StackTag name="Python" />
                <StackTag name="JavaScript" />
                <StackTag name="SQL" />
                <StackTag name="R" />
              </div>
            </div>
  
            {/* Librerías */}
            <div className="card">
              <div className="meta">
                <span className="badge">Librerías</span>
              </div>
              <h3>Librerías de análisis y manipulación</h3>
              <p>Toolbox para limpiar, transformar y analizar datasets complejos.</p>
              <div className="tags">
                <StackTag name="Pandas" />
                <StackTag name="NumPy" />
                <StackTag name="scikit-learn" />
                <StackTag name="matplotlib" />
                <StackTag name="seaborn" />
                <StackTag name="dplyr" />
                <StackTag name="ggplot2" />
                <StackTag name="plotly.express" />
              </div>
            </div>
  
            {/* BI */}
            <div className="card">
              <div className="meta">
                <span className="badge">BI</span>
              </div>
              <h3>Business Intelligence y modelado</h3>
              <p>Modelado dimensional, DAX y cuadros de mando orientados a negocio.</p>
              <div className="tags">
                <StackTag name="Power BI" />
                <StackTag name="DAX" />
                <StackTag name="Power Query (M)" />
                <StackTag name="Modelado dimensional" />
              </div>
            </div>
  
            {/* ETL */}
            <div className="card">
              <div className="meta">
                <span className="badge">ETL &amp; Data</span>
              </div>
              <h3>ETL, pipelines y bases de datos</h3>
              <p>Procesos de ingesta, limpieza y preparación para análisis y reporting.</p>
              <div className="tags">
                <StackTag name="KNIME" />
                <StackTag name="MySQL" />
                <StackTag name="PostgreSQL" />
                <StackTag name="Python" />
                <StackTag name="MSSQL" />
              </div>
            </div>
  
            {/* Dev */}
            <div className="card">
              <div className="meta">
                <span className="badge">Dev &amp; Tools</span>
              </div>
              <h3>Desarrollo y ecosistema</h3>
              <p>Control de versiones, despliegue del portfolio y flujo de trabajo técnico.</p>
              <div className="tags">
                <StackTag name="Git" />
                <StackTag name="GitHub" />
                <StackTag name="GitHub Pages" />
                <StackTag name="VS Code" />
                <StackTag name="Cursor" />
                <StackTag name="React" />
                <StackTag name="Vite" />
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
  
  export default Stack
  