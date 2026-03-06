"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { FadeIn, FadeInLeft, FadeInRight } from "@/components/scroll-animations"
import { Check, ArrowRight } from "lucide-react"

const brands = [
  "BMW", "Mercedes", "Audi", "Volkswagen", "Peugeot", "Renault",
  "Toyota", "Honda", "Ford", "Mazda", "Hyundai", "Kia"
]

const benefits = [
  "Installation professionnelle en atelier",
  "Intégration parfaite au tableau de bord",
  "Conservation des fonctions d'origine",
  "Garantie 2 ans pièces et main d'oeuvre",
  "Support technique dédié",
]

export function IntegrationSection() {
  return (
    <section id="integration" className="py-20 lg:py-32 bg-primary text-primary-foreground overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Image */}
          <FadeInLeft>
            <div className="relative">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                <Image
                  src="/images/carplay-integrated.jpg"
                  alt="Installation CarPlay professionnelle"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Floating card */}
              <div className="absolute -bottom-6 -right-6 bg-card text-card-foreground p-5 rounded-xl shadow-2xl max-w-xs">
                <div className="text-sm font-medium mb-2">Installation garantie</div>
                <div className="text-2xl font-bold text-accent">2 ans</div>
                <div className="text-xs text-muted-foreground mt-1">pièces et main d&apos;oeuvre</div>
              </div>
            </div>
          </FadeInLeft>

          {/* Right Content */}
          <div className="space-y-8">
            <FadeInRight>
              <span className="text-accent text-sm font-semibold tracking-wider uppercase">
                Service Premium
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 text-balance">
                Intégration sur mesure
              </h2>
              <p className="text-primary-foreground/80 text-lg mt-6 leading-relaxed">
                Pour une intégration parfaite, nos techniciens certifiés installent 
                CarPlay directement dans votre tableau de bord d&apos;origine. Un résultat 
                invisible et professionnel.
              </p>
            </FadeInRight>

            <FadeInRight delay={100}>
              <ul className="space-y-3">
                {benefits.map((benefit) => (
                  <li key={benefit} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-accent" />
                    </div>
                    <span className="text-primary-foreground/90">{benefit}</span>
                  </li>
                ))}
              </ul>
            </FadeInRight>

            <FadeInRight delay={200}>
              <div className="pt-6 border-t border-primary-foreground/20">
                <p className="text-sm text-primary-foreground/70 mb-4">
                  Marques compatibles :
                </p>
                <div className="flex flex-wrap gap-2">
                  {brands.map((brand) => (
                    <span
                      key={brand}
                      className="px-3 py-1 bg-primary-foreground/10 rounded-full text-sm text-primary-foreground/80"
                    >
                      {brand}
                    </span>
                  ))}
                </div>
              </div>
            </FadeInRight>

            <FadeInRight delay={300}>
              <Button 
                size="lg" 
                variant="secondary" 
                asChild
                className="gap-2"
              >
                <Link href="#contact">
                  Demander un devis gratuit
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </FadeInRight>
          </div>
        </div>
      </div>
    </section>
  )
}
