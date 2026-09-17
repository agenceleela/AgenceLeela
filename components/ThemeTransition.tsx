// NOTE DEV: transition clair → sombre via dégradé CSS statique.
// L'ancienne version scroll-linked peignait une couleur plate uniforme
// (bande grise avec coutures visibles). Ici le dégradé est continu :
// aucune couture avec le Hero au-dessus ni avec la section sombre en dessous.
// Le scroll traverse le dégradé = assombrissement progressif perçu.
export default function ThemeTransition() {
  return (
    <div
      aria-hidden="true"
      className="h-[40vh] bg-gradient-to-b from-leela-white to-leela-dark-blue md:h-[50vh]"
    />
  )
}