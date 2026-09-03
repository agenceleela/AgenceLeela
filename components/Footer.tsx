export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-12 bg-leela-dark-blue border-t border-leela-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logo */}
          <a href="#" className="text-xl font-bold text-white hover:text-leela-slate-light transition-colors duration-200">
            Agence Leela
          </a>

          {/* Legal links */}
          <div className="flex items-center gap-6">
            <a 
              href="#" 
              className="text-leela-slate-light hover:text-white transition-colors duration-200 text-sm"
            >
              Mentions légales
            </a>
            <a 
              href="#" 
              className="text-leela-slate-light hover:text-white transition-colors duration-200 text-sm"
            >
              Politique de confidentialité
            </a>
            <a 
              href="#" 
              className="text-leela-slate-light hover:text-white transition-colors duration-200 text-sm"
            >
              CGV
            </a>
          </div>

          {/* Copyright */}
          <p className="text-leela-slate-light text-sm">
            © {currentYear} Agence Leela. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  )
}
