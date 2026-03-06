"use client"

import { FadeIn, StaggerContainer } from "@/components/scroll-animations"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Thomas D.",
    car: "BMW Série 3",
    rating: 5,
    text: "Installation impeccable sur ma BMW. L'intégration est parfaite, on dirait que c'est d'origine. Je recommande à 100% !",
  },
  {
    id: 2,
    name: "Marie L.",
    car: "Peugeot 308",
    rating: 5,
    text: "L'adaptateur sans fil fonctionne parfaitement. Plus besoin de câble, mon iPhone se connecte automatiquement dès que je monte dans la voiture.",
  },
  {
    id: 3,
    name: "Pierre M.",
    car: "Mercedes Classe C",
    rating: 5,
    text: "Service client au top ! Ils m'ont conseillé la meilleure solution pour ma Mercedes. Installation rapide et soignée.",
  },
  {
    id: 4,
    name: "Sophie B.",
    car: "Audi A4",
    rating: 5,
    text: "Je ne pensais pas que c'était possible d'avoir CarPlay sur mon Audi de 2016. Maintenant c'est comme avoir une voiture neuve !",
  },
]

export function TestimonialsSection() {
  return (
    <section id="avis" className="py-20 lg:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-accent text-sm font-semibold tracking-wider uppercase">
              Témoignages
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-4 text-balance">
              Ce que disent nos clients
            </h2>
            <p className="text-muted-foreground text-lg mt-4">
              Plus de 5000 conducteurs nous font confiance pour moderniser leur véhicule.
            </p>
          </div>
        </FadeIn>

        <StaggerContainer className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="stagger-child bg-card p-6 lg:p-8 rounded-xl border border-border opacity-0 translate-y-8 hover:shadow-lg transition-shadow duration-300"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>
                <Quote className="w-8 h-8 text-muted-foreground/30" />
              </div>
              
              <p className="text-foreground leading-relaxed mb-6">
                {testimonial.text}
              </p>
              
              <div className="flex items-center gap-3 pt-4 border-t border-border">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                  <span className="text-accent font-semibold">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.car}</div>
                </div>
              </div>
            </div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
