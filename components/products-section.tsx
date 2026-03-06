"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { FadeIn, StaggerContainer } from "@/components/scroll-animations"
import { Check, Zap, Cable, Settings, ArrowRight } from "lucide-react"

const products = [
  {
    id: 1,
    name: "CarPlay Filaire",
    description: "Adaptateur plug and play pour une connexion stable et fiable via câble USB.",
    price: "149",
    image: "/images/carplay-wired.jpg",
    icon: Cable,
    features: [
      "Installation en 5 minutes",
      "Connexion ultra-stable",
      "Compatible iOS 12+",
      "Audio haute qualité",
    ],
    popular: false,
    href: "/produits/carplay-filaire",
  },
  {
    id: 2,
    name: "CarPlay Sans Fil",
    description: "Profitez de CarPlay sans fil avec notre adaptateur Bluetooth dernière génération.",
    price: "199",
    image: "/images/carplay-wireless.jpg",
    icon: Zap,
    features: [
      "100% sans fil",
      "Connexion automatique",
      "Compatible iOS 14+",
      "Batterie longue durée",
    ],
    popular: true,
    href: "#contact",
  },
  {
    id: 3,
    name: "Intégration Sur Mesure",
    description: "Installation professionnelle CarPlay directement intégrée dans votre tableau de bord.",
    price: "Sur devis",
    image: "/images/carplay-integrated.jpg",
    icon: Settings,
    features: [
      "Installation par experts",
      "Intégration invisible",
      "Toutes marques",
      "Garantie 2 ans",
    ],
    popular: false,
    href: "#contact",
  },
]

export function ProductsSection() {
  return (
    <section id="produits" className="py-20 lg:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-accent text-sm font-semibold tracking-wider uppercase">
              Nos produits
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-4 text-balance">
              Choisissez votre solution CarPlay
            </h2>
            <p className="text-muted-foreground text-lg mt-4">
              Du simple adaptateur à l&apos;intégration complète, nous avons la solution adaptée à vos besoins.
            </p>
          </div>
        </FadeIn>

        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Card
              key={product.id}
              className="stagger-child group relative overflow-hidden bg-card border-border h-full flex flex-col transition-all duration-500 hover:shadow-xl hover:-translate-y-2 opacity-0 translate-y-8"
              style={{ transitionDelay: `${product.id * 100}ms` }}
            >
              {product.popular && (
                <div className="absolute top-4 right-4 z-10 bg-accent text-accent-foreground text-xs font-semibold px-3 py-1 rounded-full">
                  Populaire
                </div>
              )}

              <div className="aspect-video bg-muted relative overflow-hidden border-b border-border">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                    <product.icon className="w-5 h-5 text-accent" />
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-foreground">
                    {product.name}
                  </h3>
                </div>

                <p className="text-muted-foreground text-sm mb-4">
                  {product.description}
                </p>

                <ul className="space-y-2 mb-6 flex-1">
                  {product.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-foreground">
                      <Check className="w-4 h-4 text-accent flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="pt-4 border-t border-border">
                  <div className="flex items-end justify-between mb-4">
                    <div>
                      <span className="text-2xl font-bold text-foreground">
                        {product.price}
                      </span>
                      {product.price !== "Sur devis" && (
                        <span className="text-muted-foreground ml-1">EUR</span>
                      )}
                    </div>
                  </div>
                  <Button
                    className="w-full gap-2"
                    variant={product.popular ? "default" : "outline"}
                    asChild
                  >
                    <Link href={product.href}>
                      {product.id === 1
                        ? "Voir les modèles"
                        : product.price === "Sur devis"
                          ? "Demander un devis"
                          : "Commander"}
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
