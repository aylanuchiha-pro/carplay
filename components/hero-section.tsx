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
      {/* Background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-muted via-background to-background" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <FadeInLeft>
              <span className="inline-block px-4 py-2 bg-primary/10 text-primary text-sm font-medium rounded-full">
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
                Adaptateurs filaires plug & play ou intégration sur mesure par nos experts.
              </p>
            </FadeInLeft>
            
            <FadeInLeft delay={300}>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild>
                  <Link href="#produits">
                    Découvrir nos produits
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="#integration" className="gap-2">
                    <Play className="w-4 h-4" />
                    Voir une installation
                  </Link>
                </Button>
              </div>
            </FadeInLeft>
            
            {/* Stats */}
            <FadeInLeft delay={400}>
              <div className="flex flex-wrap gap-8 pt-8 border-t border-border">
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
          
          {/* Right Image */}
          <FadeInRight delay={200}>
            <div className="relative">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/carplay-hero.jpg"
                  alt="CarPlay intégré dans un tableau de bord moderne"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-4 -left-4 bg-card p-4 rounded-xl shadow-lg border border-border">
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
      
      {/* Scroll indicator */}
      <FadeIn delay={600}>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-muted-foreground" />
        </div>
      </FadeIn>
    </section>
  )
}
