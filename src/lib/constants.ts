import {
  Zap,
  MessageCircle,
  MapPin,
  Smartphone,
  Search,
  Image as ImageIcon,
  FileText,
  Star,
  Layout,
  ShieldCheck,
  Clock,
  Wallet,
  Wrench,
  Laptop,
  Network,
  Sparkles,
  Building2,
  ScanLine,
  Users,
} from "lucide-react";
import type {
  NavLink,
  IconItem,
  FaqItem,
  StepItem,
  TestimonialItem,
  ServiceItem,
} from "@/types";

// --- Contato -----------------------------------------------------------
// Atualize com o número real da WebTech (formato internacional, apenas dígitos).
export const WHATSAPP_NUMBER = "5511993359462";

export function buildWhatsAppLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const WHATSAPP_LINK_WEBTECH = buildWhatsAppLink(
  "Olá! Vi o site da WebTech e quero saber mais sobre a criação do meu site profissional."
);

// --- WebTech: navegação --------------------------------------------------
export const WEBTECH_NAV: NavLink[] = [
  { label: "Benefícios", href: "#beneficios" },
  { label: "Demonstração", href: "#demonstracao" },
  { label: "Como funciona", href: "#como-funciona" },
  { label: "FAQ", href: "#faq" },
];

// --- WebTech: seção de problema -------------------------------------------
export const PROBLEMS: IconItem[] = [
  {
    icon: ScanLine,
    title: "Informações espalhadas",
    description:
      "Serviços, contato e diferenciais divididos entre bio do Instagram, status do WhatsApp e conversas soltas.",
  },
  {
    icon: Smartphone,
    title: "Apenas redes sociais",
    description:
      "Sem um endereço próprio na internet, sua empresa fica refém do algoritmo para ser encontrada.",
  },
  {
    icon: MessageCircle,
    title: "Dificuldade de contato",
    description:
      "Cliente precisa procurar em vários lugares até achar um jeito de falar com você.",
  },
  {
    icon: ShieldCheck,
    title: "Pouca credibilidade online",
    description:
      "Sem um site, fica mais difícil transmitir a confiança que uma empresa de tecnologia precisa passar.",
  },
];

// --- WebTech: benefícios --------------------------------------------------
export const BENEFITS: IconItem[] = [
  {
    icon: ShieldCheck,
    title: "Mais credibilidade",
    description:
      "Um site profissional posiciona sua empresa como referência técnica, não mais um perfil qualquer.",
  },
  {
    icon: Users,
    title: "Mais oportunidades de atendimento",
    description:
      "Novos clientes te encontram pesquisando no Google, fora da sua rede de contatos atual.",
  },
  {
    icon: Layout,
    title: "Serviços bem apresentados",
    description:
      "Cada serviço com sua própria vitrine: descrição clara, visual profissional e fácil de entender.",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp integrado",
    description:
      "Botões diretos que levam o visitante para uma conversa, sem fricção nenhuma no caminho.",
  },
  {
    icon: Smartphone,
    title: "Funcionamento perfeito no celular",
    description:
      "A maioria dos seus clientes vai acessar pelo celular — o site é feito para funcionar bem lá primeiro.",
  },
  {
    icon: Network,
    title: "Presença digital mais forte",
    description:
      "Site, redes sociais e WhatsApp trabalhando juntos, em vez de disputarem a atenção do cliente.",
  },
];

// --- WebTech: como funciona -------------------------------------------
export const STEPS: StepItem[] = [
  {
    number: "01",
    title: "Conversamos sobre sua empresa",
    description:
      "Entendo seus serviços, seu público e o que precisa aparecer em primeiro plano no site.",
  },
  {
    number: "02",
    title: "Criamos a estrutura do site",
    description:
      "Desenho e desenvolvo cada seção pensando em credibilidade, clareza e conversão.",
  },
  {
    number: "03",
    title: "Publicamos seu site online",
    description:
      "Site no ar, rápido, responsivo e pronto para transformar visitantes em clientes.",
  },
];

// --- WebTech: o que o site pode incluir --------------------------------
export const INCLUDES: IconItem[] = [
  { icon: Layout, title: "Página inicial profissional", description: "Primeira impressão à altura da sua empresa." },
  { icon: Wrench, title: "Serviços", description: "Cada serviço apresentado com clareza." },
  { icon: MessageCircle, title: "Botão de WhatsApp", description: "Contato direto, a um toque de distância." },
  { icon: MapPin, title: "Google Maps", description: "Sua localização fácil de encontrar." },
  { icon: FileText, title: "Formulário", description: "Um canal a mais para receber pedidos." },
  { icon: Star, title: "Avaliações", description: "Prova social que gera confiança." },
  { icon: ImageIcon, title: "Galeria", description: "Mostre o resultado do seu trabalho." },
  { icon: Search, title: "SEO básico", description: "Estrutura pensada para ser encontrada no Google." },
  { icon: Smartphone, title: "Responsivo para celular", description: "Perfeito em qualquer tamanho de tela." },
];

// --- WebTech: FAQ --------------------------------------------------------
export const FAQ_ITEMS: FaqItem[] = [
  {
    question: "O site funciona no celular?",
    answer:
      "Sim. Todo site é construído para funcionar perfeitamente em celular, tablet e computador, já que a maioria dos acessos acontece pelo celular.",
  },
  {
    question: "Posso colocar WhatsApp?",
    answer:
      "Sim. O botão de WhatsApp é parte padrão do site, levando o visitante direto para uma conversa com você.",
  },
  {
    question: "O site ajuda na credibilidade?",
    answer:
      "Com certeza. Um site profissional é um dos fatores que mais pesam na hora de um cliente decidir confiar (ou não) na sua empresa.",
  },
  {
    question: "Quanto tempo demora para ficar pronto?",
    answer:
      "O prazo varia conforme a complexidade do projeto, mas o processo é ágil: conversa, estrutura e publicação em etapas bem definidas.",
  },
  {
    question: "Preciso saber mexer em tecnologia?",
    answer:
      "Não. Eu cuido de toda a parte técnica, do início à publicação. Você só precisa me contar sobre sua empresa.",
  },
];

// --- Nexus Tech: navegação -------------------------------------------------
export const NEXUS_WHATSAPP_LINK = buildWhatsAppLink(
  "Olá, Nexus Tech! Gostaria de solicitar um atendimento técnico."
);

export const NEXUS_NAV: NavLink[] = [
  { label: "Serviços", href: "#servicos" },
  { label: "Sobre", href: "#sobre" },
  { label: "Avaliações", href: "#avaliacoes" },
  { label: "Contato", href: "#contato" },
];

export const NEXUS_SERVICES: ServiceItem[] = [
  {
    icon: Laptop,
    title: "Manutenção de computadores",
    description: "Diagnóstico completo e manutenção preventiva ou corretiva, com peças de qualidade.",
    image: "/images/services/manutencao.png",
  },
  {
    icon: Wrench,
    title: "Conserto de notebooks",
    description: "Reparo de placas, telas, teclados e outros componentes com garantia de serviço.",
    image: "/images/services/notebook.png",
  },
  {
    icon: Network,
    title: "Suporte técnico",
    description: "Atendimento remoto ou presencial para resolver problemas de software e sistema.",
    image: "/images/services/suporte.png",
  },
  {
    icon: Sparkles,
    title: "Instalação de redes",
    description: "Estruturação de redes cabeadas e Wi-Fi para casas e empresas, com foco em estabilidade.",
    image: "/images/services/redes.png",
  },
  {
    icon: ScanLine,
    title: "Formatação e limpeza",
    description: "Sistema mais rápido e seguro, com backup dos seus arquivos garantido.",
    image: "/images/services/formatacao.png",
  },
  {
    icon: Building2,
    title: "Atendimento para empresas",
    description: "Planos de suporte contínuo para manter a infraestrutura de TI da sua empresa sempre no ar.",
    image: "/images/services/empresas.png",
  },
];

export const NEXUS_DIFFERENTIALS: IconItem[] = [
  { icon: Zap, title: "Atendimento rápido", description: "Resposta ágil e prazos curtos para você não ficar parado." },
  { icon: ShieldCheck, title: "Técnicos especializados", description: "Equipe certificada e atualizada com o que há de mais recente em tecnologia." },
  { icon: Wallet, title: "Orçamento transparente", description: "Você sabe exatamente o que está pagando, sem surpresas no final." },
  { icon: MessageCircle, title: "Suporte pelo WhatsApp", description: "Fale direto com a equipe técnica, sem burocracia." },
];

export const NEXUS_TESTIMONIALS: TestimonialItem[] = [
  {
    name: "Marina Costa",
    role: "Proprietária, Studio MC",
    quote:
      "Meu notebook parou de funcionar em cima da hora de uma entrega. A Nexus Tech resolveu no mesmo dia. Atendimento excelente.",
    rating: 5,
  },
  {
    name: "Rafael Andrade",
    role: "Gerente de TI, Grupo Andrade",
    quote:
      "Contratamos o suporte para a nossa rede corporativa e a diferença foi imediata. Equipe técnica muito preparada.",
    rating: 5,
  },
  {
    name: "Juliana Prado",
    role: "Cliente pessoa física",
    quote:
      "Orçamento justo e explicado com clareza. Foi a primeira vez que entendi exatamente o que estava sendo consertado.",
    rating: 5,
  },
];

export const NEXUS_CONTACT = {
  address: "Av. Tecnológica, 1200 — Sala 304, São Paulo — SP",
  hours: "Segunda a sexta, das 9h às 18h · Sábado, das 9h às 13h",
};
