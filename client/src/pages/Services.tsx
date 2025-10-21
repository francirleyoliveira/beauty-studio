import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { Scissors, Sparkles, Heart, Palette, HandMetal, Eye, ArrowLeft } from "lucide-react";

const services = [
  {
    category: "Cabelo",
    icon: Scissors,
    items: [
      {
        name: "Corte Feminino",
        description: "Corte personalizado de acordo com seu estilo e formato de rosto",
        duration: "45 min",
        price: "R$ 80,00",
        popular: true,
      },
      {
        name: "Corte Masculino",
        description: "Corte moderno com acabamento profissional",
        duration: "30 min",
        price: "R$ 50,00",
      },
      {
        name: "Coloração Completa",
        description: "Coloração profissional com produtos de alta qualidade",
        duration: "2h",
        price: "R$ 180,00",
      },
      {
        name: "Mechas e Luzes",
        description: "Técnicas modernas de iluminação capilar",
        duration: "3h",
        price: "R$ 250,00",
        popular: true,
      },
      {
        name: "Hidratação Profunda",
        description: "Tratamento intensivo para recuperação dos fios",
        duration: "1h",
        price: "R$ 90,00",
      },
      {
        name: "Escova Modeladora",
        description: "Escova profissional com finalização impecável",
        duration: "45 min",
        price: "R$ 70,00",
      },
    ],
  },
  {
    category: "Maquiagem",
    icon: Sparkles,
    items: [
      {
        name: "Maquiagem Social",
        description: "Maquiagem elegante para eventos e ocasiões especiais",
        duration: "1h",
        price: "R$ 120,00",
        popular: true,
      },
      {
        name: "Maquiagem para Noivas",
        description: "Maquiagem especial para o dia mais importante",
        duration: "1h 30min",
        price: "R$ 250,00",
      },
      {
        name: "Maquiagem Profissional",
        description: "Para ensaios fotográficos e produções",
        duration: "1h 30min",
        price: "R$ 200,00",
      },
      {
        name: "Automaquiagem",
        description: "Aprenda técnicas de maquiagem para o dia a dia",
        duration: "2h",
        price: "R$ 180,00",
      },
    ],
  },
  {
    category: "Estética Facial",
    icon: Heart,
    items: [
      {
        name: "Limpeza de Pele",
        description: "Limpeza profunda com extração e hidratação",
        duration: "1h 30min",
        price: "R$ 150,00",
        popular: true,
      },
      {
        name: "Peeling Químico",
        description: "Renovação celular para pele mais jovem",
        duration: "1h",
        price: "R$ 200,00",
      },
      {
        name: "Microagulhamento",
        description: "Tratamento para rejuvenescimento e cicatrizes",
        duration: "1h 30min",
        price: "R$ 280,00",
      },
      {
        name: "Drenagem Facial",
        description: "Redução de inchaço e melhora da circulação",
        duration: "45 min",
        price: "R$ 120,00",
      },
    ],
  },
  {
    category: "Unhas",
    icon: Palette,
    items: [
      {
        name: "Manicure Completa",
        description: "Cuidados completos para suas unhas",
        duration: "45 min",
        price: "R$ 45,00",
      },
      {
        name: "Pedicure Completa",
        description: "Tratamento completo para os pés",
        duration: "1h",
        price: "R$ 55,00",
      },
      {
        name: "Unhas em Gel",
        description: "Alongamento e decoração em gel",
        duration: "2h",
        price: "R$ 120,00",
        popular: true,
      },
      {
        name: "Blindagem de Unhas",
        description: "Fortalecimento e proteção das unhas",
        duration: "45 min",
        price: "R$ 60,00",
      },
    ],
  },
  {
    category: "Sobrancelhas e Cílios",
    icon: Eye,
    items: [
      {
        name: "Design de Sobrancelhas",
        description: "Modelagem perfeita para seu rosto",
        duration: "30 min",
        price: "R$ 40,00",
        popular: true,
      },
      {
        name: "Micropigmentação de Sobrancelhas",
        description: "Sobrancelhas perfeitas por mais tempo",
        duration: "2h",
        price: "R$ 450,00",
      },
      {
        name: "Extensão de Cílios",
        description: "Cílios longos e volumosos",
        duration: "2h",
        price: "R$ 180,00",
      },
      {
        name: "Laminação de Cílios",
        description: "Curvatura natural e duradoura",
        duration: "1h",
        price: "R$ 120,00",
      },
    ],
  },
  {
    category: "Depilação",
    icon: HandMetal,
    items: [
      {
        name: "Depilação Facial",
        description: "Remoção suave de pelos faciais",
        duration: "30 min",
        price: "R$ 35,00",
      },
      {
        name: "Depilação de Pernas Completas",
        description: "Depilação com cera de qualidade",
        duration: "45 min",
        price: "R$ 70,00",
      },
      {
        name: "Depilação Axilas",
        description: "Depilação rápida e eficiente",
        duration: "15 min",
        price: "R$ 25,00",
      },
      {
        name: "Depilação Virilha Completa",
        description: "Depilação completa com conforto",
        duration: "30 min",
        price: "R$ 50,00",
      },
    ],
  },
];

export default function Services() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/">
            <a className="flex items-center gap-2">
              <Sparkles className="h-6 w-6 text-primary" />
              <span className="text-xl font-semibold">Beauty Studio</span>
            </a>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/">
              <a className="text-sm font-medium hover:text-primary transition-colors">
                Início
              </a>
            </Link>
            <Link href="/services">
              <a className="text-sm font-medium text-primary">
                Serviços
              </a>
            </Link>
            <Link href="/professionals">
              <a className="text-sm font-medium hover:text-primary transition-colors">
                Profissionais
              </a>
            </Link>
            <Link href="/booking">
              <a>
                <Button>Agendar Horário</Button>
              </a>
            </Link>
          </nav>
        </div>
      </header>

      {/* Page Header */}
      <section className="py-12 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container">
          <Link href="/">
            <a className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-4">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Voltar para Início
            </a>
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Nossos Serviços</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Descubra nossa ampla gama de serviços de beleza e bem-estar, realizados por profissionais especializados
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12">
        <div className="container space-y-16">
          {services.map((category) => {
            const IconComponent = category.icon;
            return (
              <div key={category.category}>
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <IconComponent className="h-6 w-6 text-primary" />
                  </div>
                  <h2 className="text-3xl font-bold">{category.category}</h2>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.items.map((service) => (
                    <Card key={service.name} className="hover:shadow-lg transition-shadow flex flex-col">
                      <CardHeader>
                        <div className="flex items-start justify-between mb-2">
                          <CardTitle className="text-xl">{service.name}</CardTitle>
                          {service.popular && (
                            <Badge variant="secondary" className="ml-2">
                              Popular
                            </Badge>
                          )}
                        </div>
                        <CardDescription>{service.description}</CardDescription>
                      </CardHeader>
                      <CardContent className="flex-grow">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-muted-foreground">Duração: {service.duration}</span>
                        </div>
                      </CardContent>
                      <CardFooter className="flex items-center justify-between">
                        <span className="text-2xl font-bold text-primary">{service.price}</span>
                        <Link href="/booking">
                          <a>
                            <Button>Agendar</Button>
                          </a>
                        </Link>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4">Pronta para agendar?</h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Escolha o serviço ideal para você e agende seu horário com nossos profissionais
          </p>
          <Link href="/booking">
            <a>
              <Button size="lg" variant="secondary">
                Agendar Agora
              </Button>
            </a>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-8 bg-muted/30">
        <div className="container text-center text-sm text-muted-foreground">
          <p>&copy; 2025 Beauty Studio. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

