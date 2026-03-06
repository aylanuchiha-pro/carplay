import Image from "next/image"
import Link from "next/link"
import { Cable, Check, ArrowLeft, ShieldCheck, TimerReset, Car } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

const wiredProducts = [
  {
    name: "CarPlay Filaire Classic",
    price: "149 EUR",
    image: "/images/carplay-wired.jpg",
    badge: "Essentiel",
    description: "La version simple et efficace pour moderniser rapidement un véhicule compatible USB.",
    features: ["Plug and play", "Connexion stable", "Commande au volant conservée", "Installation rapide"],
  },
  {
    name: "CarPlay Filaire Pro",
    price: "179 EUR",
    image: "/images/carplay-wireless.jpg",
    badge: "Best seller",
    description: "Une version plus premium avec meilleure compatibilité et latence réduite.",
    features: ["Réactivité renforcée", "Audio optimisé", "Compatibilité élargie", "Finition premium"],
  },
  {
    name: "CarPlay Filaire OEM Fit",
    price: "219 EUR",
    image: "/images/carplay-integrated.jpg",
    badge: "Intégration propre",
    description: "Pensé pour un rendu plus discret et plus proche d'une installation d'origine.",
    features: ["Rendu plus intégré", "Câblage propre", "Conserve les fonctions d'origine", "Support véhicule"],
  },
  {
    name: "Pack Filaire + Installation",
    price: "Sur devis",
    image: "/images/carplay-hero.jpg",
    badge: "Sérénité",
    description: "Le produit filaire avec accompagnement ou installation selon votre véhicule.",
    features: ["Diagnostic compatibilité", "Pose accompagnée", "Conseils après achat", "Solution adaptée"],
  },
]

const highlights = [
  {
    icon: ShieldCheck,
    title: "Connexion fiable",
    text: "Le filaire reste la meilleure option si vous voulez zéro coupure et une stabilité maximale.",
  },
  {
    icon: TimerReset,
    title: "Mise en route rapide",
    text: "Branchement simple, détection immédiate et expérience proche d'un système d'origine.",
  },
  {
    icon: Car,
    title: "Selon votre véhicule",
    text: "On peut ensuite vous orienter vers le modèle le plus cohérent selon marque, écran et connectique.",
  },
]

export default function CarplayFilairePage() {
  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,rgba(255,247,242,0.98),rgba(247,239,232,0.96)_42%,rgba(243,234,226,1))]">
      <section className="relative overflow-hidden border-b border-black/5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(230,85,50,0.15),transparent_30%),radial-gradient(circle_at_top_right,rgba(0,0,0,0.06),transparent_22%)]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 lg:pt-32 lg:pb-20">
          <Link href="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" />
            Retour à l'accueil
          </Link>

          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-accent/15 bg-white/70 px-4 py-2 text-sm text-accent shadow-sm backdrop-blur-sm">
                <Cable className="w-4 h-4" />
                Gamme CarPlay filaire
              </div>
              <h1 className="mt-5 font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Plusieurs modèles filaires, pas juste un seul.
              </h1>
              <p className="mt-5 max-w-2xl text-lg text-muted-foreground leading-relaxed">
                Ici, l'idée est de laisser le client choisir entre plusieurs options filaires selon son budget,
                son niveau d'intégration et le type de véhicule.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg">
                  <Link href="#catalogue">Voir les modèles</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="bg-white/80">
                  <Link href="/#contact">Demander un conseil</Link>
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-5 rounded-[2rem] bg-gradient-to-br from-accent/20 via-white/40 to-primary/10 blur-2xl" />
              <div className="relative aspect-[4/3] overflow-hidden rounded-[1.75rem] shadow-2xl ring-1 ring-black/5">
                <Image
                  src="/images/carplay-wired.jpg"
                  alt="Catalogue CarPlay filaire"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-6">
          {highlights.map((item) => (
            <Card key={item.title} className="border-black/5 bg-white/80 backdrop-blur-sm p-6 shadow-sm">
              <item.icon className="w-6 h-6 text-accent mb-4" />
              <h2 className="text-lg font-semibold text-foreground">{item.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
            </Card>
          ))}
        </div>
      </section>

      <section id="catalogue" className="pb-20 lg:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-accent text-sm font-semibold tracking-wider uppercase">Catalogue</span>
            <h2 className="mt-4 font-serif text-3xl sm:text-4xl font-bold text-foreground">
              Des options filaires pour différents besoins
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Tu voulais une vraie page dédiée au filaire. Donc ici, le bouton ne renvoie plus vers un seul produit,
              mais vers une sélection de modèles que tu pourras enrichir ensuite.
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
            {wiredProducts.map((product) => (
              <Card key={product.name} className="overflow-hidden border-black/5 bg-white/85 backdrop-blur-sm shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div className="relative aspect-[4/3] overflow-hidden border-b border-black/5">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-foreground shadow-sm">
                    {product.badge}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-serif text-xl font-semibold text-foreground leading-tight">{product.name}</h3>
                    <span className="text-sm font-semibold text-accent whitespace-nowrap">{product.price}</span>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{product.description}</p>
                  <ul className="mt-5 space-y-2">
                    {product.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-foreground">
                        <Check className="w-4 h-4 text-accent flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button asChild className="mt-6 w-full">
                    <Link href="/#contact">Commander</Link>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
