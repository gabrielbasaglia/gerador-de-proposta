'use client'

export const Footer = () => {
  // Obtém o ano atual
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer text-center mt-auto mb-1 bg-slate-100 p-2">
      <small>
        &copy; {currentYear} | Todos os direitos reservados. Construído com ♥
        por{' '}
        <a
          href="https://gabrielbasaglia.tech/"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-link"
        >
          Gabriel Basaglia
        </a>
        .
      </small>
    </footer>
  )
}
