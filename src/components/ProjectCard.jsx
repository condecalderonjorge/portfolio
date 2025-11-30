function ProjectCard({ project }) {
  const {
    badges,
    title,
    description,
    tags,
    repoUrl,
    dashboardUrl,
    comingSoonRepo,
  } = project

  return (
    <article className="card">
      <div className="meta">
        {badges.map((b) => (
          <span key={b} className="badge">
            {b}
          </span>
        ))}
      </div>
      <h3>{title}</h3>
      <p dangerouslySetInnerHTML={{ __html: description }} />
      <div className="tags">
        {tags.map((tag) => (
          <span key={tag} className="tag">
            {tag}
          </span>
        ))}
      </div>
      <div className="links">
        {repoUrl && !comingSoonRepo && (
          <a className="secondary" href={repoUrl} target="_blank" rel="noreferrer">
            Repositorio
          </a>
        )}
        {comingSoonRepo && (
          <a
            className="secondary"
            href="#"
            style={{ pointerEvents: 'none', opacity: 0.5 }}
          >
            Repositorio (coming soon)
          </a>
        )}
        {dashboardUrl && (
          <a
            className="secondary"
            href={dashboardUrl}
            target="_blank"
            rel="noreferrer"
          >
            Dashboard
          </a>
        )}
      </div>
    </article>
  )
}

export default ProjectCard
