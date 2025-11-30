function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer>
      <div className="container">
        © {year} Jorge Conde Calderón · Portfolio de Data Analytics. Actualizado
        periódicamente.
      </div>
    </footer>
  )
}

export default Footer
