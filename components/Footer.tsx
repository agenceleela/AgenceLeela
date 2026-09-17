// NOTE DEV: liens légaux en placeholder (#) — créer les pages Mentions légales / CGV /
// Politique de confidentialité avant toute campagne payante (exigence tuto).
export default function Footer() {
  return (
    <footer className="border-t border-leela-border bg-leela-dark-blue py-12 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center gap-6 text-center">
          <div className="text-2xl font-bold">
            <span className="bg-gradient-to-r from-white to-leela-slate-light bg-clip-text text-transparent">
              AgenceLeela
            </span>
          </div>

          <p className="text-leela-slate-light">Votre collaborateur marketing tout-en-un.</p>

          <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
            <a href="#" className="text-leela-slate-light transition-colors hover:text-white">
              Mentions légales
            </a>
            <a href="#" className="text-leela-slate-light transition-colors hover:text-white">
              CGV
            </a>
            <a href="#" className="text-leela-slate-light transition-colors hover:text-white">
              Politique de confidentialité
            </a>
          </div>

          <div className="border-t border-leela-border pt-6 text-sm text-leela-slate-light/60">
            © {new Date().getFullYear()} Agence Leela. Tous droits réservés.
          </div>
        </div>
      </div>
    </footer>
  )
}