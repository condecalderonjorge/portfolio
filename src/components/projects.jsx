import { useMemo, useState } from 'react'
import ProjectCard from './ProjectCard.jsx'

const FILTERS = ['all', 'Power BI', 'KNIME', 'SQL', 'Python', 'ETL']

const PROJECTS = [
  {
    id: 'buconda',
    badges: ['Consultoría · BI', '2025'],
    title: 'BuConDa — Dashboard de Control de Precios y Stock',
    description:
      'Proyecto de analítica para <strong>BuConDa Consulting</strong>, orientado al control operativo de stock y abastecimiento. Se desarrolló un modelo de datos limpio desde fuentes Excel, SQL y web scrapping con despliegue automatizado. Medidas DAX para KPIs y eficiencia de proveedores.',
    tags: ['Power BI', 'ETL', 'SQL', 'Consultoría'],
    stackTags: ['Power BI', 'SQL', 'ETL'],
    repoUrl: 'https://github.com/condecalderonjorge/proyectobuconda.git',
    dashboardUrl:
      'https://app.powerbi.com/view?r=eyJrIjoiZjI4OGE1MjYtZGVmZC00ZjZhLTk0ZjktMDUxMGMxYmQzYzg4IiwidCI6ImNlYTFlYTNlLTYwYjItNGY3NS1hNmMyLWE2MDIyZThmOTYxYiIsImMiOjh9',
  },
  {
    id: 'customer360',
    badges: ['CRM · EDA', '2025'],
    title: 'Customer 360 & Segmentación de Clientes',
    description:
      'Proyecto de analítica de clientes en Google Colab en un entorno Jupyter notebook con <strong>Python</strong> a partir del dataset AdventureWorks. Incluye EDA avanzado, preparación de datos y segmentación no supervisada con k-means para identificar perfiles de cliente y soportar decisiones de marketing y CRM.',
    tags: ['Python', 'GoogleColab', 'EDA', 'CRM'],
    stackTags: ['Python'],
    repoUrl:
      'https://github.com/condecalderonjorge/Customer-360-Segmentacion-Clientes.git',
  },
  {
    id: 'knime-sulfur',
    badges: ['NLP · News', '2025'],
    title: 'KNIME — Scraping de precio del azufre y extracción/clasificación de noticias',
    description:
      'Workflow para extraer, limpiar y etiquetar precios y noticias sobre azufre (agro) con <strong>KNIME</strong> + Python. Export a JSON/CSV y panel resumen.',
    tags: ['KNIME', 'ETL', 'Python', 'JSON'],
    stackTags: ['KNIME', 'ETL', 'Python'],
    repoUrl: 'https://github.com/condecalderonjorge/knime_sulfur.git',
  },
  {
    id: 'ml-r',
    badges: ['Machine Learning · EDA', '2025'],
    title: 'Machine Learning, EDA con RStudio',
    description:
      'Proyecto de análisis masivo de datos usando <strong>RStudio</strong> sobre el dataset AdventureWorks. Incluye limpieza, transformación, exploración, modelos predictivos (regresión y clasificación), y visualizaciones generadas desde R.',
    tags: ['R', 'Machine Learning', 'Data Cleaning', 'EDA'],
    stackTags: ['SQL'], 
    repoUrl:
      'https://github.com/condecalderonjorge/Machine-Learning-R-Adventureworks.git',
  },
  {
    id: 'adw-dw',
    badges: ['Analytics Engineering', '2025'],
    title: 'AdventureWorks (DataWarehouse, ETL & Queries)',
    description:
      'Construcción de un <strong>DataWarehouse</strong> ligero sobre la BD de AdventureWorks. Modelo dimensional con <em>facts</em> y <em>dims</em> listas para exportación y visualización BI.',
    tags: ['SQL', 'Modelado', 'Power BI'],
    stackTags: ['SQL', 'Power BI'],
    repoUrl: 'https://github.com/condecalderonjorge/SQL_AdventureWorks.git',
  },
  {
    id: 'adw-dax',
    badges: ['Ventas · Marketing', '2025'],
    title: 'AdventureWorks — Taller DAX con PBIX base (AdventureWorks)',
    description:
      'Repositorio técnico con todas las <strong>medidas DAX</strong> utilizadas en el archivo base Power BI. Incluye fórmulas de márgenes, medias, recuentos, comparativas temporales y selectores dinámicos, junto con el modelo ER.',
    tags: ['Power BI', 'DAX', 'Excel'],
    stackTags: ['Power BI'],
    repoUrl:
      'https://github.com/condecalderonjorge/DAX-Taller-con-PBIX-base-AdventureWorks-.git',
  },
  {
    id: 'altadis',
    badges: ['Retail · Supply Chain', '2025'],
    title: 'Reto Altadis — Trabajo de Fin de Máster — Data Warehouse & Power BI',
    description:
      'Modelo <strong>snowflake</strong>, calidad de datos (OoS, entregas, ventas) y dashboard operativo de rutas y afiliados. Integración de variables externas (festivos, CP, precios estimados).',
    tags: ['Power BI', 'SQL', 'ETL', 'Geo'],
    stackTags: ['Power BI', 'SQL', 'ETL'],
    comingSoonRepo: true,
  },
  {
    id: 'amazon-fba',
    badges: ['E-commerce', '2024–2025'],
    title: 'Amazon FBA — Análisis de mercado y pricing',
    description:
      'Evaluación de demanda, benchmarking y márgenes (FOB, logística) para producto privado. KPIs: conversión, BSR, share, ROAS.',
    tags: ['Power BI', 'Marketplace', 'Pricing'],
    stackTags: ['Power BI'],
    comingSoonRepo: true,
  },
]

function Projects() {
  const [activeFilter, setActiveFilter] = useState('all')
  const [query, setQuery] = useState('')

  const filteredProjects = useMemo(() => {
    const q = query.trim().toLowerCase()

    return PROJECTS.filter((p) => {
      const tagsLower = p.stackTags.map((t) => t.toLowerCase())
      const passesFilter =
        activeFilter === 'all' ||
        tagsLower.includes(activeFilter.toLowerCase())

      if (!passesFilter) return false

      if (!q) return true

      const haystack = (
        p.title +
        ' ' +
        p.description +
        ' ' +
        p.tags.join(' ')
      )
        .toLowerCase()
        .replace(/<[^>]+>/g, '')

      return haystack.includes(q)
    })
  }, [activeFilter, query])

  return (
    <section id="proyectos" className="container">
      <h2>Proyectos destacados</h2>
      <p className="sub">
        Filtra por stack o busca por palabra clave (dataset, técnica, KPI...).
      </p>

      <div className="toolbar">
        <div className="filters">
          {FILTERS.map((f) => (
            <button
              key={f}
              className={`filter ${activeFilter === f ? 'active' : ''}`}
              data-filter={f}
              type="button"
              onClick={() => setActiveFilter(f)}
            >
              {f === 'all' ? 'Todos' : f}
            </button>
          ))}
        </div>
        <div className="search">
          <label htmlFor="q" className="visually-hidden">
            Buscar
          </label>
          <input
            id="q"
            type="search"
            placeholder="Buscar: Altadis, cohortes, ARIMA, OoS, etc."
            aria-label="Buscar proyectos"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
      </div>

      <div className="grid">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  )
}

export default Projects
