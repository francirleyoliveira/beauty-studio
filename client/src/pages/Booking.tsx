import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Link } from "wouter";
import { Sparkles, ArrowLeft, Calendar, Clock, User, Mail, Phone, CheckCircle2 } from "lucide-react";
import { trpc } from "@/lib/trpc";
import { toast } from "sonner";

const services = [
  { id: "1", name: "Corte Feminino", category: "Cabelo", duration: "45 min", price: "R$ 80,00" },
  { id: "2", name: "Corte Masculino", category: "Cabelo", duration: "30 min", price: "R$ 50,00" },
  { id: "3", name: "Coloração Completa", category: "Cabelo", duration: "2h", price: "R$ 180,00" },
  { id: "4", name: "Mechas e Luzes", category: "Cabelo", duration: "3h", price: "R$ 250,00" },
  { id: "5", name: "Maquiagem Social", category: "Maquiagem", duration: "1h", price: "R$ 120,00" },
  { id: "6", name: "Maquiagem para Noivas", category: "Maquiagem", duration: "1h 30min", price: "R$ 250,00" },
  { id: "7", name: "Limpeza de Pele", category: "Estética Facial", duration: "1h 30min", price: "R$ 150,00" },
  { id: "8", name: "Unhas em Gel", category: "Unhas", duration: "2h", price: "R$ 120,00" },
  { id: "9", name: "Design de Sobrancelhas", category: "Sobrancelhas e Cílios", duration: "30 min", price: "R$ 40,00" },
];

const professionals = [
  { id: "1", name: "Ana Silva", role: "Cabeleireira Sênior" },
  { id: "2", name: "Mariana Costa", role: "Maquiadora Profissional" },
  { id: "3", name: "Juliana Santos", role: "Esteticista" },
  { id: "4", name: "Carolina Mendes", role: "Designer de Sobrancelhas" },
  { id: "5", name: "Beatriz Oliveira", role: "Manicure e Pedicure" },
  { id: "6", name: "Fernanda Lima", role: "Cabeleireira" },
];

const timeSlots = [
  "09:00", "09:30", "10:00", "10:30", "11:00", "11:30",
  "13:00", "13:30", "14:00", "14:30", "15:00", "15:30",
  "16:00", "16:30", "17:00", "17:30", "18:00", "18:30",
];

export default function Booking() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    serviceId: "",
    professionalId: "",
    date: "",
    time: "",
    customerName: "",
    customerEmail: "",
    customerPhone: "",
    notes: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const createBookingMutation = trpc.bookings.create.useMutation({
    onSuccess: () => {
      setIsSubmitted(true);
      toast.success("Agendamento realizado com sucesso!");
    },
    onError: (error) => {
      toast.error("Erro ao realizar agendamento: " + error.message);
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    createBookingMutation.mutate(formData);
  };

  const selectedService = services.find((s) => s.id === formData.serviceId);
  const selectedProfessional = professionals.find((p) => p.id === formData.professionalId);

  const canProceedToStep2 = formData.serviceId && formData.professionalId;
  const canProceedToStep3 = canProceedToStep2 && formData.date && formData.time;
  const canSubmit = canProceedToStep3 && formData.customerName && formData.customerEmail && formData.customerPhone;

  if (isSubmitted) {
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
          </div>
        </header>

        {/* Success Message */}
        <section className="flex-grow flex items-center justify-center py-12">
          <Card className="max-w-md w-full mx-4">
            <CardHeader className="text-center">
              <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <CheckCircle2 className="h-10 w-10 text-green-600" />
              </div>
              <CardTitle className="text-2xl">Agendamento Confirmado!</CardTitle>
              <CardDescription>
                Seu agendamento foi realizado com sucesso. Você receberá uma confirmação por email em breve.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-muted p-4 rounded-lg space-y-2">
                <p className="text-sm">
                  <strong>Serviço:</strong> {selectedService?.name}
                </p>
                <p className="text-sm">
                  <strong>Profissional:</strong> {selectedProfessional?.name}
                </p>
                <p className="text-sm">
                  <strong>Data:</strong> {new Date(formData.date).toLocaleDateString("pt-BR")}
                </p>
                <p className="text-sm">
                  <strong>Horário:</strong> {formData.time}
                </p>
              </div>
              <div className="flex gap-3">
                <Link href="/" className="flex-1">
                  <Button variant="outline" className="w-full">
                    Voltar ao Início
                  </Button>
                </Link>
                <Button
                  className="flex-1"
                  onClick={() => {
                    setIsSubmitted(false);
                    setStep(1);
                    setFormData({
                      serviceId: "",
                      professionalId: "",
                      date: "",
                      time: "",
                      customerName: "",
                      customerEmail: "",
                      customerPhone: "",
                      notes: "",
                    });
                  }}
                >
                  Novo Agendamento
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Sparkles className="h-6 w-6 text-primary" />
            <span className="text-xl font-semibold">Beauty Studio</span>
          </Link>
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
          </nav>
        </div>
      </header>

      {/* Page Header */}
      <section className="py-12 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container">
          <Link href="/" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-4">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Voltar para Início
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Agendar Horário</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Preencha os dados abaixo para agendar seu horário conosco
          </p>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-12 flex-grow">
        <div className="container max-w-4xl">
          {/* Progress Steps */}
          <div className="flex items-center justify-center mb-8">
            <div className="flex items-center gap-2">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 1 ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"}`}>
                1
              </div>
              <div className={`w-16 h-1 ${step >= 2 ? "bg-primary" : "bg-muted"}`} />
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 2 ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"}`}>
                2
              </div>
              <div className={`w-16 h-1 ${step >= 3 ? "bg-primary" : "bg-muted"}`} />
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 3 ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"}`}>
                3
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            <Card>
              <CardHeader>
                <CardTitle>
                  {step === 1 && "Escolha o Serviço e Profissional"}
                  {step === 2 && "Selecione Data e Horário"}
                  {step === 3 && "Seus Dados de Contato"}
                </CardTitle>
                <CardDescription>
                  {step === 1 && "Selecione o serviço desejado e o profissional de sua preferência"}
                  {step === 2 && "Escolha a melhor data e horário para seu atendimento"}
                  {step === 3 && "Informe seus dados para confirmarmos o agendamento"}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {step === 1 && (
                  <>
                    <div className="space-y-2">
                      <Label htmlFor="service">Serviço *</Label>
                      <Select value={formData.serviceId} onValueChange={(value) => setFormData({ ...formData, serviceId: value })}>
                        <SelectTrigger id="service">
                          <SelectValue placeholder="Selecione um serviço" />
                        </SelectTrigger>
                        <SelectContent>
                          {services.map((service) => (
                            <SelectItem key={service.id} value={service.id}>
                              {service.name} - {service.price} ({service.duration})
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="professional">Profissional *</Label>
                      <Select value={formData.professionalId} onValueChange={(value) => setFormData({ ...formData, professionalId: value })}>
                        <SelectTrigger id="professional">
                          <SelectValue placeholder="Selecione um profissional" />
                        </SelectTrigger>
                        <SelectContent>
                          {professionals.map((professional) => (
                            <SelectItem key={professional.id} value={professional.id}>
                              {professional.name} - {professional.role}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <Button type="button" className="w-full" disabled={!canProceedToStep2} onClick={() => setStep(2)}>
                      Continuar
                    </Button>
                  </>
                )}

                {step === 2 && (
                  <>
                    <div className="space-y-2">
                      <Label htmlFor="date">
                        <Calendar className="inline h-4 w-4 mr-2" />
                        Data *
                      </Label>
                      <Input
                        id="date"
                        type="date"
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        min={new Date().toISOString().split("T")[0]}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="time">
                        <Clock className="inline h-4 w-4 mr-2" />
                        Horário *
                      </Label>
                      <Select value={formData.time} onValueChange={(value) => setFormData({ ...formData, time: value })}>
                        <SelectTrigger id="time">
                          <SelectValue placeholder="Selecione um horário" />
                        </SelectTrigger>
                        <SelectContent>
                          {timeSlots.map((time) => (
                            <SelectItem key={time} value={time}>
                              {time}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="flex gap-3">
                      <Button type="button" variant="outline" className="flex-1" onClick={() => setStep(1)}>
                        Voltar
                      </Button>
                      <Button type="button" className="flex-1" disabled={!canProceedToStep3} onClick={() => setStep(3)}>
                        Continuar
                      </Button>
                    </div>
                  </>
                )}

                {step === 3 && (
                  <>
                    <div className="space-y-2">
                      <Label htmlFor="name">
                        <User className="inline h-4 w-4 mr-2" />
                        Nome Completo *
                      </Label>
                      <Input
                        id="name"
                        type="text"
                        value={formData.customerName}
                        onChange={(e) => setFormData({ ...formData, customerName: e.target.value })}
                        placeholder="Seu nome completo"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">
                        <Mail className="inline h-4 w-4 mr-2" />
                        Email *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.customerEmail}
                        onChange={(e) => setFormData({ ...formData, customerEmail: e.target.value })}
                        placeholder="seu@email.com"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">
                        <Phone className="inline h-4 w-4 mr-2" />
                        Telefone *
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.customerPhone}
                        onChange={(e) => setFormData({ ...formData, customerPhone: e.target.value })}
                        placeholder="(11) 99999-9999"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="notes">Observações (opcional)</Label>
                      <Textarea
                        id="notes"
                        value={formData.notes}
                        onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                        placeholder="Alguma informação adicional que gostaria de compartilhar?"
                        rows={3}
                      />
                    </div>

                    <div className="flex gap-3">
                      <Button type="button" variant="outline" className="flex-1" onClick={() => setStep(2)}>
                        Voltar
                      </Button>
                      <Button type="submit" className="flex-1" disabled={!canSubmit || createBookingMutation.isPending}>
                        {createBookingMutation.isPending ? "Agendando..." : "Confirmar Agendamento"}
                      </Button>
                    </div>
                  </>
                )}
              </CardContent>
            </Card>
          </form>
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

