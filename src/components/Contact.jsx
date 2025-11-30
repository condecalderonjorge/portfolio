function Contact() {
    return (
      <section id="contacto" className="container">
        <h2>Contacto</h2>
        <p className="sub">¿Interesado en colaborar o ver un caso concreto? Escríbeme.</p>
        <div className="contact">
          <a
            href="https://www.linkedin.com/in/jorge-conde-calderon/"
            aria-label="LinkedIn de Jorge"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/condecalderonjorge"
            aria-label="GitHub de Jorge"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a href="mailto:condecalderonjorge@gmail.com" aria-label="Enviar correo">
            Email
          </a>
        </div>
      </section>
    )
  }
  
  export default Contact
  