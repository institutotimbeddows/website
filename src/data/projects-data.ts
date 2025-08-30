// Comprehensive project data extracted from tim-beddows-os
export type ProjectStatus = 'MVP' | 'Desenvolvimento' | 'Captação' | 'Planejamento' | 'Conceito';
export type ProjectCategory = 'projects.categories.technology' | 'projects.categories.media' | 'projects.categories.social' | 'projects.categories.education';
export type ProjectUrgency = 'high' | 'medium' | 'low';

export type ProjectData = {
  id: string;
  name: string;
  tagline: string;
  description: string;
  category: ProjectCategory;
  status: ProjectStatus;
  urgency: ProjectUrgency;
  impact: 'high' | 'medium' | 'low';
  
  // Financial data
  budget: number;
  raised: number;
  monthlyGoal?: number;
  
  // Timeline
  timeline: Array<{
    phase: string;
    duration: string;
    status: 'completed' | 'in-progress' | 'pending';
  }>;
  
  // Budget breakdown
  budgetBreakdown: Array<{
    item: string;
    amount: number;
    category: 'Pessoal' | 'Operacional' | 'Legal' | 'Reserva' | 'Infraestrutura';
  }>;
  
  // Success metrics
  successMetrics: Array<{
    metric: string;
    target: string;
    current: string;
  }>;
  
  // Campus integration
  campusIntegration: {
    location: string;
    synergies: string[];
  };
  
  // Risks
  risks: Array<{
    risk: string;
    mitigation: string;
    level: 'high' | 'medium' | 'low';
  }>;
};

export const projectsData: Record<string, ProjectData> = {
  "cifra-livre": {
    id: "cifra-livre",
    name: "projects.names.cifraLivre",
    tagline: "projects.descriptions.cifraLivre",
    description: "Um aplicativo revolucionário que democratiza o acesso a cifras e tablaturas, oferecendo uma alternativa gratuita e superior aos apps pagos do mercado.",
    category: "projects.categories.technology",
    status: "MVP",
    urgency: "high",
    impact: "medium",
    budget: 24640,
    raised: 5200,
    monthlyGoal: 2000,
    timeline: [
      { phase: "Pesquisa & Mockups", duration: "2 meses", status: "completed" },
      { phase: "Desenvolvimento MVP", duration: "3 meses", status: "in-progress" },
      { phase: "Testes com Alunos", duration: "1 mês", status: "pending" },
      { phase: "Lançamento Beta", duration: "1 mês", status: "pending" },
      { phase: "Iterações & Melhorias", duration: "5 meses", status: "pending" }
    ],
    budgetBreakdown: [
      { item: "Freelancer desenvolvimento", amount: 15000, category: "Pessoal" },
      { item: "Infraestrutura (servidor/domínio)", amount: 2400, category: "Operacional" },
      { item: "Licenciamento de conteúdo", amount: 5000, category: "Legal" },
      { item: "Contingência (10%)", amount: 2240, category: "Reserva" }
    ],
    successMetrics: [
      { metric: "Usuários ativos em 6 meses", target: "1.000", current: "0" },
      { metric: "Retenção em 7 dias", target: "70%", current: "N/A" },
      { metric: "Rating nas app stores", target: "4.5+", current: "N/A" },
      { metric: "Professores usando", target: "50+", current: "5" }
    ],
    campusIntegration: {
      location: "Estúdio de Gravação & Sala de Aulas",
      synergies: [
        "Integração com cursos de música do Instituto",
        "Conteúdo gerado pelos próprios alunos",
        "Testes em tempo real com usuários",
        "Marketing orgânico através da comunidade"
      ]
    },
    risks: [
      { risk: "Direitos autorais das cifras", mitigation: "Focar em domínio público + acordes básicos", level: "medium" },
      { risk: "Competição dos apps grandes", mitigation: "Diferenciação por valores sociais + integração Instituto", level: "low" },
      { risk: "Gabriel não ter tempo", mitigation: "Contratar freelancer, Gabriel foca na concepção", level: "high" }
    ]
  },

  "afinador-app": {
    id: "afinador-app",
    name: "projects.names.afinador",
    tagline: "projects.descriptions.afinador",
    description: "Aplicativo de afinação profissional que funciona com qualquer instrumento, oferecendo precisão de nível studio de forma gratuita.",
    category: "projects.categories.technology",
    status: "MVP",
    urgency: "medium",
    impact: "medium",
    budget: 18500,
    raised: 3800,
    timeline: [
      { phase: "Pesquisa de algoritmos", duration: "1 mês", status: "completed" },
      { phase: "Desenvolvimento MVP", duration: "2 meses", status: "in-progress" },
      { phase: "Testes com músicos", duration: "3 semanas", status: "pending" },
      { phase: "Lançamento", duration: "2 semanas", status: "pending" }
    ],
    budgetBreakdown: [
      { item: "Desenvolvimento", amount: 12000, category: "Pessoal" },
      { item: "Infraestrutura", amount: 1800, category: "Operacional" },
      { item: "Testes e certificação", amount: 3000, category: "Operacional" },
      { item: "Contingência", amount: 1700, category: "Reserva" }
    ],
    successMetrics: [
      { metric: "Downloads em 3 meses", target: "10.000", current: "0" },
      { metric: "Rating médio", target: "4.5+", current: "N/A" },
      { metric: "Uso diário ativo", target: "30%", current: "N/A" }
    ],
    campusIntegration: {
      location: "Estúdio de Gravação",
      synergies: ["Uso em aulas de música", "Ferramenta para eventos", "Integração com outros apps"]
    },
    risks: [
      { risk: "Qualidade do áudio em dispositivos antigos", mitigation: "Algoritmos adaptativos", level: "medium" },
      { risk: "Competição com apps estabelecidos", mitigation: "Foco na simplicidade e precisão", level: "low" }
    ]
  },

  "instituto-cultural-escola": {
    id: "instituto-cultural-escola",
    name: "projects.names.institutoCultural",
    tagline: "projects.descriptions.institutoCultural",
    description: "Centro educacional que oferece formação em artes, tecnologia e habilidades práticas para pessoas de todas as idades, com foco na transformação social através da educação.",
    category: "projects.categories.education",
    status: "Planejamento",
    urgency: "high",
    impact: "high",
    budget: 350000,
    raised: 45000,
    timeline: [
      { phase: "Planejamento pedagógico", duration: "3 meses", status: "in-progress" },
      { phase: "Construção de salas", duration: "6 meses", status: "pending" },
      { phase: "Contratação de professores", duration: "2 meses", status: "pending" },
      { phase: "Início das atividades", duration: "1 mês", status: "pending" }
    ],
    budgetBreakdown: [
      { item: "Construção e reforma", amount: 200000, category: "Infraestrutura" },
      { item: "Equipamentos didáticos", amount: 80000, category: "Operacional" },
      { item: "Salários (1º ano)", amount: 48000, category: "Pessoal" },
      { item: "Contingência", amount: 22000, category: "Reserva" }
    ],
    successMetrics: [
      { metric: "Alunos matriculados (1º ano)", target: "200", current: "0" },
      { metric: "Cursos oferecidos", target: "15", current: "3" },
      { metric: "Taxa de conclusão", target: "85%", current: "N/A" }
    ],
    campusIntegration: {
      location: "Edifício Principal - 800m²",
      synergies: ["Base para todos os outros projetos", "Formação de recursos humanos", "Comunidade engajada"]
    },
    risks: [
      { risk: "Falta de professores qualificados", mitigation: "Parcerias com universidades", level: "medium" },
      { risk: "Baixa demanda inicial", mitigation: "Marketing comunitário intensivo", level: "low" }
    ]
  },

  "cozinha-industrial": {
    id: "cozinha-industrial",
    name: "projects.names.cozinhaIndustrial",
    tagline: "projects.descriptions.cozinhaIndustrial",
    description: "Cozinha profissional que atende eventos do instituto, produz marmitas para a comunidade e gera receita através de serviços de catering.",
    category: "projects.categories.social",
    status: "Planejamento",
    urgency: "high",
    impact: "high",
    budget: 180000,
    raised: 12000,
    timeline: [
      { phase: "Projeto arquitetônico", duration: "2 meses", status: "pending" },
      { phase: "Construção e equipamentos", duration: "4 meses", status: "pending" },
      { phase: "Licenciamento sanitário", duration: "2 meses", status: "pending" },
      { phase: "Início das operações", duration: "1 mês", status: "pending" }
    ],
    budgetBreakdown: [
      { item: "Equipamentos profissionais", amount: 120000, category: "Infraestrutura" },
      { item: "Construção e adequação", amount: 35000, category: "Infraestrutura" },
      { item: "Licenciamento e documentação", amount: 8000, category: "Legal" },
      { item: "Capital de giro inicial", amount: 17000, category: "Operacional" }
    ],
    successMetrics: [
      { metric: "Refeições/dia", target: "500", current: "0" },
      { metric: "Receita mensal", target: "R$ 25.000", current: "R$ 0" },
      { metric: "Famílias atendidas", target: "200", current: "0" }
    ],
    campusIntegration: {
      location: "Área de Serviços - 400m²",
      synergies: ["Alimentação para eventos", "Curso de gastronomia", "Geração de receita"]
    },
    risks: [
      { risk: "Regulamentação sanitária complexa", mitigation: "Consultoria especializada", level: "medium" },
      { risk: "Alto custo operacional", mitigation: "Modelo misto (social + comercial)", level: "medium" }
    ]
  },

  "centro-poliesportivo": {
    id: "centro-poliesportivo",
    name: "projects.names.centroPoliesportivo",
    tagline: "projects.descriptions.centroPoliesportivo",
    description: "Complexo esportivo com quadras, academia, piscina e área de reabilitação, promovendo saúde e bem-estar para a comunidade.",
    category: "projects.categories.social",
    status: "Planejamento",
    urgency: "medium",
    impact: "high",
    budget: 450000,
    raised: 28000,
    timeline: [
      { phase: "Projeto esportivo", duration: "3 meses", status: "pending" },
      { phase: "Construção quadras", duration: "6 meses", status: "pending" },
      { phase: "Equipamentos e piscina", duration: "4 meses", status: "pending" },
      { phase: "Contratação equipe", duration: "2 meses", status: "pending" }
    ],
    budgetBreakdown: [
      { item: "Construção de quadras", amount: 250000, category: "Infraestrutura" },
      { item: "Piscina e vestiários", amount: 120000, category: "Infraestrutura" },
      { item: "Equipamentos de academia", amount: 50000, category: "Operacional" },
      { item: "Contingência", amount: 30000, category: "Reserva" }
    ],
    successMetrics: [
      { metric: "Usuários/mês", target: "1.000", current: "0" },
      { metric: "Modalidades oferecidas", target: "12", current: "0" },
      { metric: "Taxa de retenção", target: "70%", current: "N/A" }
    ],
    campusIntegration: {
      location: "Área Esportiva - 1500m²",
      synergies: ["Saúde da comunidade", "Eventos esportivos", "Cursos de educação física"]
    },
    risks: [
      { risk: "Alto custo de manutenção", mitigation: "Parcerias público-privadas", level: "high" },
      { risk: "Segurança e responsabilidade", mitigation: "Seguro abrangente", level: "medium" }
    ]
  },

  "lar-de-passagem": {
    id: "lar-de-passagem",
    name: "projects.names.larDePassagem",
    tagline: "projects.descriptions.larDePassagem",
    description: "Casa de acolhimento temporário que oferece moradia digna e acompanhamento para pessoas em situação de vulnerabilidade social.",
    category: "projects.categories.social",
    status: "Conceito",
    urgency: "high",
    impact: "high",
    budget: 280000,
    raised: 8500,
    timeline: [
      { phase: "Estudo de viabilidade", duration: "2 meses", status: "pending" },
      { phase: "Licenciamento e documentação", duration: "3 meses", status: "pending" },
      { phase: "Adaptação do espaço", duration: "4 meses", status: "pending" },
      { phase: "Contratação equipe social", duration: "1 mês", status: "pending" }
    ],
    budgetBreakdown: [
      { item: "Reforma e adaptação", amount: 150000, category: "Infraestrutura" },
      { item: "Mobiliário e equipamentos", amount: 60000, category: "Operacional" },
      { item: "Licenciamento", amount: 15000, category: "Legal" },
      { item: "Equipe e operação (1º ano)", amount: 55000, category: "Pessoal" }
    ],
    successMetrics: [
      { metric: "Pessoas acolhidas/ano", target: "120", current: "0" },
      { metric: "Taxa de reinserção social", target: "80%", current: "N/A" },
      { metric: "Tempo médio de permanência", target: "3 meses", current: "N/A" }
    ],
    campusIntegration: {
      location: "Área Residencial - 600m²",
      synergies: ["Integração com outros projetos", "Capacitação profissional", "Apoio psicossocial"]
    },
    risks: [
      { risk: "Regulamentação complexa", mitigation: "Parceria com Ministério Público", level: "high" },
      { risk: "Sustentabilidade financeira", mitigation: "Convênios governamentais", level: "medium" }
    ]
  },

  "documentario": {
    id: "documentario",
    name: "projects.names.documentario",
    tagline: "projects.descriptions.documentario",
    description: "Documentário profissional que conta a história do Instituto, seus projetos e impacto social, servindo como ferramenta de captação e divulgação.",
    category: "projects.categories.media",
    status: "Captação",
    urgency: "medium",
    impact: "medium",
    budget: 85000,
    raised: 18000,
    timeline: [
      { phase: "Pré-produção e roteiro", duration: "2 meses", status: "in-progress" },
      { phase: "Gravações", duration: "3 meses", status: "pending" },
      { phase: "Pós-produção", duration: "2 meses", status: "pending" },
      { phase: "Distribuição", duration: "6 meses", status: "pending" }
    ],
    budgetBreakdown: [
      { item: "Equipe de produção", amount: 45000, category: "Pessoal" },
      { item: "Equipamentos", amount: 20000, category: "Operacional" },
      { item: "Pós-produção", amount: 12000, category: "Operacional" },
      { item: "Distribuição e marketing", amount: 8000, category: "Operacional" }
    ],
    successMetrics: [
      { metric: "Visualizações online", target: "100.000", current: "0" },
      { metric: "Exibições em festivais", target: "15", current: "0" },
      { metric: "Captação gerada", target: "R$ 200.000", current: "R$ 0" }
    ],
    campusIntegration: {
      location: "Estúdio de Gravação",
      synergies: ["Material de divulgação", "Captação de recursos", "Registro histórico"]
    },
    risks: [
      { risk: "Qualidade técnica insuficiente", mitigation: "Parceria com produtora", level: "medium" },
      { risk: "Pouco alcance", mitigation: "Estratégia de distribuição digital", level: "low" }
    ]
  }
};

// Helper function to get all project IDs
export function getAllProjectIds(): string[] {
  return Object.keys(projectsData);
}

// Helper function to get project by ID
export function getProjectById(id: string): ProjectData | undefined {
  return projectsData[id];
}

// Map project IDs to their corresponding tim-beddows-os folder names
export const projectMarkdownMap: Record<string, string> = {
  "afinador-app": "afinador-app",
  "cifra-livre": "cifra-livre", 
  "cursos-livres": "cursos-livres",
  "documentario": "documentario",
  "filme-autoral": "filme-autoral",
  "cozinha-industrial": "cozinha-industrial",
  "centro-poliesportivo": "centro-poliesportivo",
  "lar-de-passagem": "lar-de-passagem",
  "creche-idosos": "creche-idosos",
  "festival-cine-aruja": "festival-cine-aruja",
  "gestao-coordenacao": "sistema-feedback", // Mapping
  "covers-musicais": "covers-musicais",
  "fonemas-app": "fonemas-app",
  "hierarquia-do-brasil": "hierarquiadobrasil",
  "circuito-itinerante": "circuito-itinerante",
  "instituto-cultural": "instituto-cultural-escola",
  "eventos-comunitarios": "eventos-comunitarios"
};

// Check if a project has corresponding markdown files
export function hasMarkdownData(projectId: string): boolean {
  return projectId in projectMarkdownMap;
}

// Get the markdown folder name for a project
export function getMarkdownFolderName(projectId: string): string | undefined {
  return projectMarkdownMap[projectId];
}

// Helper function to get projects by category
export function getProjectsByCategory(category: ProjectCategory): ProjectData[] {
  return Object.values(projectsData).filter(project => project.category === category);
}

// Helper function to get all projects as array
export function getAllProjects(): ProjectData[] {
  return Object.values(projectsData);
}
