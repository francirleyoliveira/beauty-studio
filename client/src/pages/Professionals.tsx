import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { Sparkles, ArrowLeft, Star } from "lucide-react";

const professionals = [
  {
    id: 1,
    name: "Ana Silva",
    role: "Cabeleireira Sênior",
    specialties: ["Cortes", "Coloração", "Mechas"],
    experience: "12 anos de experiência",
    description: "Especialista em transformações capilares e técnicas de coloração avançadas. Formada pela Escola de Beleza Internacional.",
    image: "/images/professional-1.jpg",
    rating: 5.0,
    reviews: 127,
  },
  {
    id: 2,
    name: "Mariana Costa",
    role: "Maquiadora Profissional",
    specialties: ["Maquiagem Social", "Noivas", "Editorial"],
    experience: "8 anos de experiência",
    description: "Maquiadora certificada com experiência em eventos de alto padrão e produções editoriais. Especialista em maquiagem para noivas.",
    image: "/images/professional-2.jpg",
    rating: 4.9,
    reviews: 98,
  },
  {
    id: 3,
    name: "Juliana Santos",
    role: "Esteticista",
    specialties: ["Limpeza de Pele", "Tratamentos Faciais", "Peeling"],
    experience: "10 anos de experiência",
    description: "Esteticista formada com especialização em tratamentos faciais e rejuvenescimento. Atualização constante em novas técnicas.",
    image: "/images/professional-3.jpg",
    rating: 5.0,
    reviews: 156,
  },
  {
    id: 4,
    name: "Carolina Mendes",
    role: "Designer de Sobrancelhas",
    specialties: ["Design de Sobrancelhas", "Micropigmentação", "Extensão de Cílios"],
    experience: "6 anos de experiência",
    description: "Especialista em design de sobrancelhas e micropigmentação. Certificada em técnicas de fio a fio e shadow.",
    image: "/images/professional-1.jpg",
    rating: 4.8,
    reviews: 89,
  },
  {
    id: 5,
    name: "Beatriz Oliveira",
    role: "Manicure e Pedicure",
    specialties: ["Unhas em Gel", "Nail Art", "Blindagem"],
    experience: "7 anos de experiência",
    description: "Manicure especializada em unhas decoradas e alongamento em gel. Sempre atualizada com as últimas tendências.",
    image: "/images/professional-2.jpg",
    rating: 4.9,
    reviews: 112,
  },
  {
    id: 6,
    name: "Fernanda Lima",
    role: "Cabeleireira",
    specialties: ["Cortes", "Escova", "Tratamentos"],
    experience: "5 anos de experiência",
    description: "Cabeleireira com foco em cortes modernos e tratamentos capilares. Especialista em reconstrução capilar.",
    image: "/images/professional-3.jpg",
    rating: 4.7,
    reviews: 74,
  },
];

export default function Professionals() {
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
              <a className="text-sm font-medium hover:text-primary transition-colors">
                Serviços
              </a>
            </Link>
            <Link href="/professionals">
              <a className="text-sm font-medium text-primary">
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Nossa Equipe</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Conheça os profissionais especializados que farão você se sentir incrível
          </p>
        </div>
      </section>

      {/* Team Introduction */}
      <section className="py-12 bg-muted/30">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h2 className="text-3xl font-bold">Profissionais Qualificados e Apaixonados</h2>
            <p className="text-lg text-muted-foreground">
              Nossa equipe é composta por especialistas altamente qualificados, com anos de experiência e 
              treinamento contínuo nas mais recentes técnicas e tendências de beleza. Cada profissional 
              é dedicado a proporcionar uma experiência excepcional e resultados que superam suas expectativas.
            </p>
          </div>
        </div>
      </section>

      {/* Professionals Grid */}
      <section className="py-12">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {professionals.map((professional) => (
              <Card key={professional.id} className="hover:shadow-lg transition-shadow flex flex-col">
                <div className="relative h-64 overflow-hidden rounded-t-lg">
                  <img
                    src={professional.image}
                    alt={professional.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{professional.name}</CardTitle>
                  <CardDescription className="font-medium text-primary">
                    {professional.role}
                  </CardDescription>
                  <div className="flex items-center gap-2 mt-2">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="ml-1 text-sm font-medium">{professional.rating}</span>
                    </div>
                    <span className="text-sm text-muted-foreground">
                      ({professional.reviews} avaliações)
                    </span>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow space-y-4">
                  <p className="text-sm text-muted-foreground">{professional.description}</p>
                  <div>
                    <p className="text-sm font-medium mb-2">Especialidades:</p>
                    <div className="flex flex-wrap gap-2">
                      {professional.specialties.map((specialty) => (
                        <Badge key={specialty} variant="secondary">
                          {specialty}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground italic">{professional.experience}</p>
                </CardContent>
                <CardFooter>
                  <Link href="/booking">
                    <a className="w-full">
                      <Button className="w-full">Agendar com {professional.name.split(' ')[0]}</Button>
                    </a>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4">Agende com seu profissional favorito</h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Escolha o profissional ideal para você e reserve seu horário com facilidade
          </p>
          <Link href="/booking">
            <a>
              <Button size="lg" variant="secondary">
                Fazer Agendamento
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

