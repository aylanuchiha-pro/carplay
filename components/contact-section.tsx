"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { FadeIn, FadeInLeft, FadeInRight } from "@/components/scroll-animations"
import { Mail, Phone, MapPin, Send, Clock } from "lucide-react"

const contactInfo = [
  {
    icon: Phone,
    label: "Téléphone",
    value: "01 23 45 67 89",
    href: "tel:+33123456789",
  },
  {
    icon: Mail,
    label: "Email",
    value: "contact@carplaypro.fr",
    href: "mailto:contact@carplaypro.fr",
  },
  {
    icon: MapPin,
    label: "Adresse",
    value: "123 Avenue de la Tech, 75001 Paris",
    href: "#",
  },
  {
    icon: Clock,
    label: "Horaires",
    value: "Lun-Ven: 9h-18h, Sam: 10h-16h",
    href: "#",
  },
]

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    car: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission - backend will be added later
    console.log("Form submitted:", formData)
    alert("Merci ! Nous vous recontacterons dans les plus brefs délais.")
    setFormData({ name: "", email: "", phone: "", car: "", message: "" })
  }

  return (
    <section id="contact" className="py-20 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-accent text-sm font-semibold tracking-wider uppercase">
              Contact
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-4 text-balance">
              Demandez votre devis gratuit
            </h2>
            <p className="text-muted-foreground text-lg mt-4">
              Une question ? Un projet d&apos;intégration ? Notre équipe vous répond sous 24h.
            </p>
          </div>
        </FadeIn>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Contact Info */}
          <FadeInLeft className="lg:col-span-2 space-y-6">
            <div className="space-y-6">
              {contactInfo.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex items-start gap-4 p-4 rounded-xl hover:bg-muted transition-colors group"
                >
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                    <item.icon className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">{item.label}</div>
                    <div className="font-medium text-foreground">{item.value}</div>
                  </div>
                </a>
              ))}
            </div>

            <div className="p-6 bg-muted rounded-xl mt-8">
              <h3 className="font-semibold text-foreground mb-2">
                Besoin d&apos;aide pour choisir ?
              </h3>
              <p className="text-sm text-muted-foreground">
                Nos experts sont disponibles pour vous conseiller la meilleure 
                solution CarPlay adaptée à votre véhicule et vos besoins.
              </p>
            </div>
          </FadeInLeft>

          {/* Contact Form */}
          <FadeInRight className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-foreground">
                    Nom complet *
                  </label>
                  <Input
                    id="name"
                    placeholder="Jean Dupont"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="bg-card"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-foreground">
                    Email *
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="jean@exemple.fr"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="bg-card"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium text-foreground">
                    Téléphone
                  </label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="06 12 34 56 78"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="bg-card"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="car" className="text-sm font-medium text-foreground">
                    Véhicule (marque et modèle)
                  </label>
                  <Input
                    id="car"
                    placeholder="BMW Série 3 2020"
                    value={formData.car}
                    onChange={(e) => setFormData({ ...formData, car: e.target.value })}
                    className="bg-card"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-foreground">
                  Message *
                </label>
                <Textarea
                  id="message"
                  placeholder="Décrivez votre projet ou posez-nous vos questions..."
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  className="bg-card resize-none"
                />
              </div>

              <Button type="submit" size="lg" className="w-full sm:w-auto gap-2">
                <Send className="w-4 h-4" />
                Envoyer ma demande
              </Button>

              <p className="text-xs text-muted-foreground">
                En soumettant ce formulaire, vous acceptez que vos données soient utilisées 
                pour vous recontacter. Aucune donnée n&apos;est partagée avec des tiers.
              </p>
            </form>
          </FadeInRight>
        </div>
      </div>
    </section>
  )
}
