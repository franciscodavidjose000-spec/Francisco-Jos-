export interface ServiceItem {
  id: string;
  name: string;
  category: 'clinical' | 'diagnostic' | 'wellness';
  shortDesc: string;
  fullDesc: string;
  benefits: string[];
  schedule: string;
  priceNote?: string;
  iconName: string;
}

export interface DoctorProfile {
  id: string;
  name: string;
  role: string;
  specialty: string;
  description: string;
  image?: string;
  availableDays: string[];
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'facilities' | 'team' | 'lab' | 'community';
  categoryLabel: string;
  imageUrl: string;
  caption: string;
}

export interface LabExamItem {
  id: string;
  name: string;
  category: string;
  fastingHours: number;
  turnaroundTime: string;
  description: string;
}

export interface BranchLocation {
  id: string;
  number: number;
  name: string;
  shortLabel: string;
  neighborhood: string;
  reference: string;
  coordinates: string;
  mapsUrl: string;
  city: string;
  province: string;
  country: string;
}

export const CLINIC_INFO = {
  name: "Clínica Natural F.M. & Filhos",
  legalName: "Clínica Natural F.M. & Filhos - Comércio & Prestação de Serviços Lda",
  type: "Centro Médico & Clínica de Saúde Integrada",
  slogan: "A sua saúde é a nossa Prioridade!",
  subSlogan: "Cuidamos de si e da sua família",
  logoUrl: "/assets/aistudio/IMG-20261029-WA0003_25b42045.jpg",
  facadeUrl: "/assets/aistudio/IMG-20261028-WA0000_98bbf3ae.jpg",
  avcEntranceUrl: "/assets/aistudio/IMG-20261028-WA0003_2317d275.jpg",
  phone: "+244 932 374 981",
  secondaryPhone: "+244 962 382 272",
  phoneRaw1: "932374981",
  phoneRaw2: "962382272",
  whatsapp: "+244932374981",
  secondaryWhatsapp: "+244962382272",
  email: "fmfilhos5@gmail.com",
  city: "Soyo",
  province: "Zaire",
  country: "Angola",
  location: "Município do Soyo, Província do Zaire, Angola",
  address: "Soyo, Província do Zaire, Angola",
  branches: [
    {
      id: "sede-1-maio",
      number: 1,
      name: "Sede 1 · Bairro 1 de Maio",
      shortLabel: "Frente ao Aeroporto Municipal",
      neighborhood: "Bairro 1 de Maio",
      reference: "Em frente ao Aeroporto Municipal do Soyo",
      coordinates: "V96C+JVP, Soyo",
      mapsUrl: "https://www.google.com/maps/search/?api=1&query=V96C%2BJVP%2C+Soyo",
      city: "Soyo",
      province: "Zaire",
      country: "Angola"
    },
    {
      id: "sede-mpungu",
      number: 2,
      name: "Sede 2 · Bairro Mpungu",
      shortLabel: "Perto da Igreja Simão Toko",
      neighborhood: "Bairro Mpungu",
      reference: "Perto da Igreja Simão Toko",
      coordinates: "R947+R4X, Soyo",
      mapsUrl: "https://www.google.com/maps/search/?api=1&query=R947%2BR4X%2C+Soyo",
      city: "Soyo",
      province: "Zaire",
      country: "Angola"
    }
  ],
  workingHours: {
    weekdays: "Segunda a Sexta: 07:30 - 18:30",
    saturday: "Sábado: 08:00 - 15:00",
    sunday: "Domingo: Serviço de Urgência sob chamada",
    emergency: "Atendimento de Urgência e Plantão Permanente"
  }
};

export const CLINICAL_SERVICES: ServiceItem[] = [
  {
    id: "consulta-geral",
    name: "Consulta Geral",
    category: "clinical",
    shortDesc: "Avaliação clínica primária completa, triagem diagnóstica e prescrição médica.",
    fullDesc: "A Consulta Geral é a porta de entrada para a sua saúde integral. Os nossos médicos realizam uma avaliação clínica minuciosa, diagnóstico precoce de patologias, orientação terapêutica e encaminhamento especializado quando necessário.",
    benefits: [
      "Check-up preventivo de saúde geral",
      "Diagnóstico e tratamento de infeções comuns",
      "Monitorização de tensão arterial e glicemia",
      "Prescrição e ajuste de terapêutica"
    ],
    schedule: "Segunda a Sábado",
    iconName: "Stethoscope"
  },
  {
    id: "medicina-interna",
    name: "Medicina Interna",
    category: "clinical",
    shortDesc: "Acompanhamento de patologias crónicas, hipertensão, diabetes e doenças complexas no adulto.",
    fullDesc: "Especialidade dedicada ao estudo, diagnóstico e tratamento não cirúrgico de doenças do adulto. Foco primordial na gestão de doenças crónicas, prevenção de acidentes cardiovasculares (AVC) e saúde metabólica.",
    benefits: [
      "Controlo rigoroso da Hipertensão Arterial",
      "Gestão e estabilização de Diabetes Mellitus",
      "Prevenção e acompanhamento pós-AVC",
      "Tratamento de patologias cardiorrespiratórias e hepáticas"
    ],
    schedule: "Segunda a Sexta",
    iconName: "HeartPulse"
  },
  {
    id: "pediatria",
    name: "Pediatria",
    category: "clinical",
    shortDesc: "Cuidados dedicados ao crescimento, saúde e desenvolvimento integral das crianças.",
    fullDesc: "Acompanhamento do recém-nascido, criança e adolescente. Foco em puericultura, nutrição infantil, despiste de patologias do desenvolvimento e tratamento de infeções pediátricas.",
    benefits: [
      "Consultas de rotina e puericultura",
      "Acompanhamento do crescimento e peso",
      "Prevenção e tratamento de afeções respiratórias e intestinais",
      "Orientações essenciais aos pais e cuidadores"
    ],
    schedule: "Segunda a Sábado",
    iconName: "Baby"
  },
  {
    id: "ginecologia-obstetricia",
    name: "Ginecologia e Obstetrícia",
    category: "clinical",
    shortDesc: "Saúde integral da mulher, pré-natal, planeamento familiar e prevenção ginecológica.",
    fullDesc: "Acompanhamento da mulher em todas as fases da vida, desde a adolescência até à menopausa, com acompanhamento pré-natal detalhado para garantir a segurança da mãe e do bebé.",
    benefits: [
      "Vigilância de gravidez e consultas pré-natais",
      "Consultas de planeamento familiar",
      "Rastreio oncológico e citologia (Papanicolau)",
      "Tratamento de desequilíbrios hormonais e infeções ginecológicas"
    ],
    schedule: "Segunda a Sexta",
    iconName: "Flower2"
  },
  {
    id: "laboratorio",
    name: "Laboratório de Análises Clínicas",
    category: "diagnostic",
    shortDesc: "Exames de sangue, urina, fezes e testes laboratoriais com tecnologia e rigor.",
    fullDesc: "Equipado com centrifugas modernas e analisadores de alta precisão, o nosso laboratório interno garante rapidez e fiabilidade nos resultados analíticos para suporte imediato às decisões clínicas.",
    benefits: [
      "Hemogramas completos e estudos hematológicos",
      "Bioquímica clínica (glicemia, colesterol, perfil hepático e renal)",
      "Parasitologia e exames de fezes e urina (tipo II)",
      "Testes de rastreio rápido (Malária, Widal/Tifoide, VIH, Hepatites)"
    ],
    schedule: "Colheitas a partir das 07:30",
    iconName: "Microscope"
  },
  {
    id: "nutricao",
    name: "Nutrição Clínica & Dietética",
    category: "wellness",
    shortDesc: "Planos alimentares personalizados para controlo de peso, saúde e recuperação.",
    fullDesc: "A alimentação é o primeiro pilar da cura. A nossa consulta de nutrição alia a ciência dietética moderna aos princípios naturais para tratar distúrbios metabólicos e promover vitalidade duradoura.",
    benefits: [
      "Planos alimentares adaptados à gastronomia local e orçamento",
      "Apoio na perda e controlo de peso saudável",
      "Dieta para controlo da hipertensão, diabetes e colesterol",
      "Nutrição infantil e para grávidas"
    ],
    schedule: "Terças, Quintas e Sábados",
    iconName: "Apple"
  },
  {
    id: "vacinacao",
    name: "Vacinação & Imunização",
    category: "clinical",
    shortDesc: "Administração de vacinas do calendário e reforço imunitário preventivo.",
    fullDesc: "Garantimos a conservação em cadeia de frio rigorosa de todas as vacinas para proteção de crianças, adultos e viajantes contra doenças transmissíveis graves.",
    benefits: [
      "Vacinas do Programa Alargado de Vacinação (PAV)",
      "Vacinas para adultos e grupos de risco",
      "Boletim de vacinas atualizado e registado",
      "Equipa de enfermagem qualificada e atenciosa"
    ],
    schedule: "Segunda a Sábado",
    iconName: "Syringe"
  },
  {
    id: "aconselhamento-prevencao",
    name: "Aconselhamento e Prevenção",
    category: "wellness",
    shortDesc: "Campanhas de literacia em saúde, prevenção de AVC e educação comunitária.",
    fullDesc: "Acreditamos que prevenir é salvar vidas. Promovemos aconselhamento personalizado, sensibilização sobre os sintomas do Acidente Vascular Cerebral (AVC), cessação tabágica e estilo de vida ativo.",
    benefits: [
      "Campanhas ativas de rastreio do AVC (Face, Braço, Fala, Tempo)",
      "Educação para o controlo da pressão arterial comunitária",
      "Aconselhamento sobre saúde reprodutiva e sexual",
      "Palestras e orientação comunitária nas nossas instalações"
    ],
    schedule: "Atendimento contínuo",
    iconName: "ShieldCheck"
  },
  {
    id: "medicina-natural",
    name: "Medicina Natural & Terapias Integrativas",
    category: "wellness",
    shortDesc: "Tratamentos naturais complementares, fitoterapia e equilíbrio do organismo.",
    fullDesc: "Respeitando a nossa identidade de Clínica Natural, integramos soluções da medicina natural e fitoterápica com a medicina clínica tradicional para acelerar a recuperação e restabelecer o equilíbrio biológico sem sobrecarregar o organismo.",
    benefits: [
      "Fitoterapia orientada por profissionais clínicos",
      "Desintoxicação metabólica e fortalecimento imunitário",
      "Abordagem integrativa com acompanhamento médico",
      "Produtos e suplementos de origem natural certificados"
    ],
    schedule: "Segunda a Sábado",
    iconName: "Leaf"
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "img-facade",
    title: "Fachada do Centro Médico",
    category: "facilities",
    categoryLabel: "Instalações",
    imageUrl: "/assets/aistudio/IMG-20261028-WA0000_98bbf3ae.jpg",
    caption: "Fachada oficial do Centro Médico da Clínica Natural F.M. & Filhos com a identificação de todas as especialidades e o lema 'A sua saúde é a nossa Prioridade!'."
  },
  {
    id: "img-avc-gate",
    title: "Entrada e Mural Educativo de Prevenção do AVC",
    category: "facilities",
    categoryLabel: "Instalações",
    imageUrl: "/assets/aistudio/IMG-20261028-WA0003_2317d275.jpg",
    caption: "Acesso à clínica com mural informativo sobre os sintomas de Acidente Vascular Cerebral (AVC), reforçando o nosso compromisso com a saúde pública."
  },
  {
    id: "img-director-desk",
    title: "Gabinete de Consulta e Direção Médica",
    category: "team",
    categoryLabel: "Corpo Clínico",
    imageUrl: "/assets/aistudio/IMG-20261028-WA0004_27f35e5b.jpg",
    caption: "Direção clínica em gabinete médico equipado para consultas de medicina interna, avaliação individualizada e gestão do centro."
  },
  {
    id: "img-consultation-patient",
    title: "Atendimento Clínico Humanizado",
    category: "team",
    categoryLabel: "Corpo Clínico",
    imageUrl: "/assets/aistudio/IMG-20261028-WA0006_600fbad6.jpg",
    caption: "Momento de consulta e escuta ativa com paciente, garantindo dignidade, clareza no diagnóstico e respeito familiar."
  },
  {
    id: "img-doctor-consultation-2",
    title: "Consulta Médica Especializada",
    category: "team",
    categoryLabel: "Corpo Clínico",
    imageUrl: "/assets/aistudio/IMG-20261028-WA0027_66e854b9.jpg",
    caption: "Médica da clínica prestando orientação e diagnóstico personalizado a paciente em gabinete climatizado."
  },
  {
    id: "img-lab-centrifuge",
    title: "Laboratório de Análises - Tecnologia Diagnóstica",
    category: "lab",
    categoryLabel: "Laboratório",
    imageUrl: "/assets/aistudio/IMG-20261028-WA0037_f4541d6c.jpg",
    caption: "Técnico de análises clínicas operando centrífugas laboratoriais com máscara de proteção e rigoroso protocolo de biossegurança."
  },
  {
    id: "img-lab-tubes",
    title: "Colheitas e Processamento de Amostras",
    category: "lab",
    categoryLabel: "Laboratório",
    imageUrl: "/assets/aistudio/IMG-20261028-WA0016_ddfca9f1.jpg",
    caption: "Bancada técnica laboratorial com tubos de ensaio esterilizados para hematologia, bioquímica e despiste infecioso."
  },
  {
    id: "img-team-group",
    title: "Equipa de Enfermagem e Apoio Clínico",
    category: "team",
    categoryLabel: "Corpo Clínico",
    imageUrl: "/assets/aistudio/IMG-20261028-WA0008_818bce79.jpg",
    caption: "Corpo de enfermagem e assistentes clínicos devidamente uniformizados com o emblema da Clínica Natural F.M. & Filhos."
  },
  {
    id: "img-team-corridor",
    title: "Corpo Clínico Multidisciplinar",
    category: "team",
    categoryLabel: "Corpo Clínico",
    imageUrl: "/assets/aistudio/IMG-20261028-WA0009_cee7fd59.jpg",
    caption: "Profissionais de saúde dedicados ao atendimento diário com simpatia, competência técnica e amor à vida humana."
  },
  {
    id: "img-full-community",
    title: "Equipa Institucional e Representantes Comunitários",
    category: "community",
    categoryLabel: "Comunidade",
    imageUrl: "/assets/aistudio/IMG-20261028-WA0021_27144d14.jpg",
    caption: "Reunião de equipa clínica com autoridades locais e representantes comunitários para fortalecimento da saúde na região."
  },
  {
    id: "img-inauguration",
    title: "Celebração e Inauguração das Instalações",
    category: "community",
    categoryLabel: "Comunidade",
    imageUrl: "/assets/aistudio/IMG-20261028-WA0024_bafe63d5.jpg",
    caption: "Celebração do avanço da Clínica Natural F.M. & Filhos, reunindo profissionais, parceiros e a comunidade num brinde à saúde."
  },
  {
    id: "img-community-opening",
    title: "Abertura à Comunidade e Bênção das Instalações",
    category: "community",
    categoryLabel: "Comunidade",
    imageUrl: "/assets/aistudio/IMG-20261028-WA0011_61b01826.jpg",
    caption: "Momento solene de apresentação do Centro Médico à população, reafirmando o compromisso de serviço às famílias."
  },
  {
    id: "img-directors-portrait",
    title: "Liderança Médica e Administrativa",
    category: "team",
    categoryLabel: "Corpo Clínico",
    imageUrl: "/assets/aistudio/IMG-20261028-WA0029_24ed6a22.jpg",
    caption: "Quadro de gestão clínica e técnica focado na excelência dos serviços e expansão dos cuidados médicos integrados."
  }
];

export const AVC_CAMPAIGN = {
  title: "Campanha Comunitária: Conheça os Sinais de AVC",
  subtitle: "O Acidente Vascular Cerebral é uma emergência médica. O tempo é vida!",
  wallQuote: "A sua saúde é a nossa Prioridade — Cuidamos de si e da sua família",
  signs: [
    {
      letter: "F",
      title: "Face Descaída",
      description: "Peça à pessoa para sorrir. Repare se um dos lados da boca ou da face está descaído ou sem força.",
      action: "Assimetria evidente no sorriso."
    },
    {
      letter: "B",
      title: "Braço Sem Força",
      description: "Peça para levantar ambos os braços. Veja se um deles cai ou não consegue ser levantado.",
      action: "Fraqueza ou dormência num membro."
    },
    {
      letter: "F",
      title: "Fala Dificultosa",
      description: "Peça para repetir uma frase simples. A fala parece arrastada, enrolada ou incompreensível?",
      action: "Dificuldade em articular palavras."
    },
    {
      letter: "T",
      title: "Tempo é Emergência",
      description: "Se notar qualquer um destes sintomas, dirija-se imediatamente à nossa clínica ou centro médico de urgência.",
      action: "Cada minuto salvo preserva tecido cerebral."
    }
  ],
  preventionTips: [
    "Meça a sua Tensão Arterial regularmente (disponível no nosso Centro Médico)",
    "Controle a diabetes e os níveis de glicemia no sangue",
    "Pratique atividade física moderada (caminhadas de 30 minutos)",
    "Reduza o sal e adote alimentação rica em legumes e frutas frescas",
    "Evite o consumo excessivo de álcool e tabaco",
    "Realize o seu check-up de Medicina Interna periodicamente"
  ]
};

export const COMMON_LAB_EXAMS: LabExamItem[] = [
  {
    id: "hemo-comp",
    name: "Hemograma Completo",
    category: "Hematologia",
    fastingHours: 4,
    turnaroundTime: "2 a 4 horas",
    description: "Avaliação de glóbulos vermelhos, glóbulos brancos e plaquetas para despiste de anemia e infeções."
  },
  {
    id: "glicemia",
    name: "Glicemia em Jejum",
    category: "Bioquímica",
    fastingHours: 8,
    turnaroundTime: "2 a 3 horas",
    description: "Medição dos níveis de açúcar no sangue para diagnóstico e acompanhamento de Diabetes."
  },
  {
    id: "malaria-tdr",
    name: "Pesquisa de Malária (TDR + Gota Espessa)",
    category: "Parasitologia",
    fastingHours: 0,
    turnaroundTime: "30 a 60 minutos",
    description: "Despiste rápido e microscópico do parasita Plasmodium com resultado prioritário."
  },
  {
    id: "lipidico",
    name: "Perfil Lipídico (Colesterol & Triglicerídeos)",
    category: "Bioquímica",
    fastingHours: 12,
    turnaroundTime: "4 a 6 horas",
    description: "Avaliação do colesterol total, HDL, LDL e triglicerídeos para risco cardiovascular."
  },
  {
    id: "widal",
    name: "Teste de Widal (Febre Tifoide)",
    category: "Imunologia",
    fastingHours: 0,
    turnaroundTime: "1 a 2 horas",
    description: "Pesquisa de anticorpos contra Salmonella typhi para diagnóstico de febre tifoide."
  },
  {
    id: "urina2",
    name: "Exame Sumário de Urina (Urina Tipo II)",
    category: "Urianálise",
    fastingHours: 0,
    turnaroundTime: "1 a 2 horas",
    description: "Análise físico-química e do sedimento urinário para infeções urinárias e função renal."
  },
  {
    id: "fezes",
    name: "Exame Parasitológico de Fezes",
    category: "Parasitologia",
    fastingHours: 0,
    turnaroundTime: "2 a 3 horas",
    description: "Identificação de parasitas intestinais, helmintos e amibas."
  },
  {
    id: "funcao-renal",
    name: "Ureia e Creatinina (Função Renal)",
    category: "Bioquímica",
    fastingHours: 4,
    turnaroundTime: "3 a 4 horas",
    description: "Avaliação do funcionamento e capacidade de filtração dos rins."
  }
];

export const MOCK_EXAM_STATUSES: Record<string, { patient: string; exam: string; status: 'Pronto' | 'Em Análise' | 'Aguardando Colheita'; date: string; notes: string }> = {
  "EX-2026-001": {
    patient: "Manuel Domingos A.",
    exam: "Hemograma Completo + Perfil Lipídico",
    status: "Pronto",
    date: "28/10/2026",
    notes: "Resultado validado pelo laboratório. Disponível na receção ou envio por WhatsApp."
  },
  "EX-2026-002": {
    patient: "Maria Teresa F.",
    exam: "Glicemia em Jejum + Urina Tipo II",
    status: "Em Análise",
    date: "29/10/2026",
    notes: "Amostra em processo de análise no laboratório central. Previsão: hoje às 16:00."
  },
  "EX-2026-003": {
    patient: "Joaquim António C.",
    exam: "Pesquisa de Malária + Teste de Widal",
    status: "Pronto",
    date: "30/10/2026",
    notes: "Resultado concluído com prioridade. Pode ser consultado na clínica."
  }
};

export const CLINIC_FAQS = [
  {
    question: "O Centro Médico atende urgências?",
    answer: "Sim. A Clínica Natural F.M. & Filhos dispõe de serviço de triagem e atendimento clínico para situações urgentes durante o nosso horário de funcionamento, bem como serviço sob aviso."
  },
  {
    question: "É necessário marcar com antecedência para análises laboratoriais?",
    answer: "Não é obrigatório marcação prévia para análises de rotina. Pode comparecer diretamente a partir das 07:30 da manhã. Recomendamos cumprir o jejum indicado para cada exame."
  },
  {
    question: "Como funciona a abordagem da Medicina Natural na vossa clínica?",
    answer: "A nossa abordagem é integrativa e responsável. Não substituímos a medicina clínica convencional quando esta é mandatória; em vez disso, associamos terapêuticas fitoterápicas e dietéticas comprovadas para fortalecer o organismo, reduzir efeitos secundários e tratar as causas de fundo das patologias."
  },
  {
    question: "Posso receber o resultado das análises por WhatsApp?",
    answer: "Sim! Para comodidade dos nossos pacientes, disponibilizamos o envio digital seguro dos laudos laboratoriais diretamente para o seu WhatsApp ou e-mail, logo após a validação do corpo técnico."
  },
  {
    question: "Quais as formas de pagamento aceites?",
    answer: "Aceitamos pagamento por Multicaixa (TPA), transferência bancária por Express/IBAN e numerário."
  }
];
