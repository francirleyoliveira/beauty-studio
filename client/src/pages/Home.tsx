import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "wouter";
import { Scissors, Sparkles, Heart, Calendar } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header/Navigation */}
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="h-6 w-6 text-primary" />
            <span className="text-xl font-semibold">Beauty Studio</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-sm font-medium hover:text-primary transition-colors">
              Início
            </Link>
            <Link href="/services" className="text-sm font-medium hover:text-primary transition-colors">
              Serviços
            </Link>
            <Link href="/professionals" className="text-sm font-medium hover:text-primary transition-colors">
              Profissionais
            </Link>
            <Link href="/booking">
              <Button>Agendar Horário</Button>
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
        <div className="container relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                Realce sua beleza natural
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground">
                Descubra uma experiência única de cuidados pessoais com nossos profissionais especializados. 
                Oferecemos serviços de alta qualidade em um ambiente acolhedor e sofisticado.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/booking">
                  <Button size="lg" className="w-full sm:w-auto">
                    <Calendar className="mr-2 h-5 w-5" />
                    Agendar Agora
                  </Button>
                </Link>
                <Link href="/services">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto">
                    Ver Serviços
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/images/salon-interior-1.png"
                alt="Interior do Beauty Studio"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Nossos Serviços</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Oferecemos uma ampla gama de serviços de beleza para atender todas as suas necessidades
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Scissors className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Cortes e Penteados</CardTitle>
                <CardDescription>
                  Cortes modernos e penteados sofisticados para todas as ocasiões
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Nossa equipe de cabeleireiros especializados está pronta para criar o visual perfeito para você.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Sparkles className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Maquiagem</CardTitle>
                <CardDescription>
                  Maquiagem profissional para eventos especiais e dia a dia
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Realce sua beleza com técnicas profissionais e produtos de alta qualidade.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Estética</CardTitle>
                <CardDescription>
                  Tratamentos faciais e corporais para cuidar da sua pele
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Procedimentos estéticos avançados para rejuvenescimento e bem-estar.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-8">
            <Link href="/services">
              <Button variant="outline" size="lg">
                Ver Todos os Serviços
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl">
              <img
                src="/images/salon-interior-2.jpg"
                alt="Ambiente do salão"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">Por que escolher o Beauty Studio?</h2>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-semibold">1</span>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Profissionais Qualificados</h3>
                    <p className="text-muted-foreground">
                      Nossa equipe é formada por especialistas com anos de experiência e treinamento contínuo.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-semibold">2</span>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Produtos Premium</h3>
                    <p className="text-muted-foreground">
                      Utilizamos apenas produtos de alta qualidade das melhores marcas do mercado.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-semibold">3</span>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Ambiente Acolhedor</h3>
                    <p className="text-muted-foreground">
                      Espaço moderno e confortável, projetado para proporcionar uma experiência relaxante.
                    </p>
                  </div>
                </div>
              </div>
              <Link href="/professionals">
                <Button size="lg">Conheça Nossa Equipe</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Pronta para se sentir incrível?</h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Agende seu horário agora e descubra por que somos o estúdio de beleza preferido da região
          </p>
          <Link href="/booking">
            <Button size="lg" variant="secondary">
              <Calendar className="mr-2 h-5 w-5" />
              Agendar Meu Horário
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-8 bg-muted/30">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="h-5 w-5 text-primary" />
                <span className="font-semibold">Beauty Studio</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Seu destino para beleza e bem-estar
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Links Rápidos</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/services" className="text-muted-foreground hover:text-primary transition-colors">
                    Serviços
                  </Link>
                </li>
                <li>
                  <Link href="/professionals" className="text-muted-foreground hover:text-primary transition-colors">
                    Profissionais
                  </Link>
                </li>
                <li>
                  <Link href="/booking" className="text-muted-foreground hover:text-primary transition-colors">
                    Agendamento
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Contato</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Telefone: (11) 9999-9999</li>
                <li>Email: contato@beautystudio.com</li>
                <li>Endereço: Rua da Beleza, 123</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
            <p>&copy; 2025 Beauty Studio. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

