"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { FadeIn, FadeInLeft, FadeInRight } from "@/components/scroll-animations"
import { Play, ChevronDown } from "lucide-react"

const stats = [
  { value: "5000+", label: "Clients satisfaits" },
  { value: "50+", label: "Modèles compatibles" },
  { value: "2 ans", label: "Garantie" },
]

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-background">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(230,85,50,0.18),transparent_34%),radial-gradient(circle_at_top_right,rgba(35,35,35,0.08),transparent_28%),linear-gradient(180deg,rgba(255,247,242,0.98),rgba(247,239,232,0.96)_42%,rgba(243,234,226,1))]" />
      <div className="absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] [background-size:32px_32px]" />
      <div className="absolute -left-20 top-24 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />
      <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-8">
            <FadeInLeft>
              <span className="inline-block px-4 py-2 bg-accent/10 text-accent text-sm font-medium rounded-full border border-accent/15 shadow-sm">
                Nouvelle collection 2026
              </span>
            </FadeInLeft>

            <FadeInLeft delay={100}>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
                Transformez votre véhicule avec{" "}
                <span className="text-accent">CarPlay</span>
              </h1>
            </FadeInLeft>

            <FadeInLeft delay={200}>
              <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
                Solutions CarPlay premium pour moderniser votre tableau de bord.
                Adaptateurs filaires plug and play ou intégration sur mesure par nos experts.
              </p>
            </FadeInLeft>

            <FadeInLeft delay={300}>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild className="shadow-lg shadow-black/10">
                  <Link href="#produits">
                    Découvrir nos produits
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="border-foreground/10 bg-white/70 backdrop-blur-sm">
                  <Link href="#integration" className="gap-2">
                    <Play className="w-4 h-4" />
                    Voir une installation
                  </Link>
                </Button>
              </div>
            </FadeInLeft>

            <FadeInLeft delay={400}>
              <div className="flex flex-wrap gap-8 pt-8 border-t border-foreground/10">
                {stats.map((stat) => (
                  <div key={stat.label}>
                    <div className="text-2xl lg:text-3xl font-bold text-foreground">
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </FadeInLeft>
          </div>

          <FadeInRight delay={200}>
            <div className="relative">
              <div className="absolute -inset-5 rounded-[2rem] bg-gradient-to-br from-accent/20 via-white/30 to-primary/10 blur-2xl" />
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl ring-1 ring-black/5">
                <Image
                  src="/images/carplay-hero.jpg"
                  alt="CarPlay intégré dans un tableau de bord moderne"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-card/95 backdrop-blur-md p-4 rounded-xl shadow-lg border border-border">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                    <span className="text-accent text-xl font-bold">A+</span>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-foreground">Qualité premium</div>
                    <div className="text-xs text-muted-foreground">Certifié Apple MFi</div>
                  </div>
                </div>
              </div>
            </div>
          </FadeInRight>
        </div>
      </div>

      <FadeIn delay={600}>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-muted-foreground" />
        </div>
      </FadeIn>
    </section>
  )
}
