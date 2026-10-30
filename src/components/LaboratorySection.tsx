import React, { useState } from 'react';
import { 
  Microscope, 
  Search, 
  Clock, 
  CheckCircle2, 
  AlertCircle, 
  FileText, 
  MessageCircle, 
  ShieldCheck, 
  Droplet,
  FlaskConical,
  Activity
} from 'lucide-react';
import { COMMON_LAB_EXAMS, MOCK_EXAM_STATUSES, CLINIC_INFO, LabExamItem } from '../data/clinicData';

export const LaboratorySection: React.FC = () => {
  const [searchExam, setSearchExam] = useState('');
  const [filterCategory, setFilterCategory] = useState<string>('all');
  const [protocolCode, setProtocolCode] = useState('');
  const [searchResult, setSearchResult] = useState<{
    code: string;
    patient: string;
    exam: string;
    status: 'Pronto' | 'Em Análise' | 'Aguardando Colheita';
    date: string;
    notes: string;
  } | null>(null);
  const [hasSearched, setHasSearched] = useState(false);

  const categories = ['all', 'Hematologia', 'Bioquímica', 'Parasitologia', 'Imunologia', 'Urianálise'];

  const filteredExams = COMMON_LAB_EXAMS.filter(exam => {
    const matchesSearch = exam.name.toLowerCase().includes(searchExam.toLowerCase()) ||
                          exam.description.toLowerCase().includes(searchExam.toLowerCase());
    const matchesCat = filterCategory === 'all' || exam.category === filterCategory;
    return matchesSearch && matchesCat;
  });

  const handleTrackProtocol = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanCode = protocolCode.trim().toUpperCase();
    setHasSearched(true);

    if (MOCK_EXAM_STATUSES[cleanCode]) {
      setSearchResult({
        code: cleanCode,
        ...MOCK_EXAM_STATUSES[cleanCode]
      });
    } else if (cleanCode.length > 2) {
      // Simulate live status lookup for any other protocol code
      setSearchResult({
        code: cleanCode,
        patient: "Paciente Registado",
        exam: "Análises Clínicas Gerais",
        status: "Em Análise",
        date: "Data de Hoje",
        notes: "Amostra biológica sob validação técnica. Entre em contacto com o laboratório para prioridade."
      });
    } else {
      setSearchResult(null);
    }
  };

  return (
    <section id="laboratorio" className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Background Subtle Medical Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:24px_24px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-teal-400 bg-teal-950/80 border border-teal-800/60 px-3 py-1 rounded-md mb-3">
            <Microscope className="w-4 h-4 text-teal-400" />
            <span>Diagnóstico com Rigor Científico</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
            Laboratório de Análises Clínicas
          </h2>
          <p className="text-slate-300 mt-3 text-base leading-relaxed">
            Equipado com tecnologia diagnóstica própria, o nosso laboratório realiza exames hematológicos, bioquímicos e parasitológicos com máxima celeridade e respeito aos padrões internacionais de biossegurança.
          </p>
        </div>

        {/* Real Photo Spotlight Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-center">
          
          {/* Real Photo 1: Centrifuge Diagnostic Operator */}
          <div className="lg:col-span-7 group relative rounded-2xl overflow-hidden border border-slate-700 bg-slate-800 shadow-xl">
            <img
              src="/assets/aistudio/IMG-20261028-WA0037_f4541d6c.jpg"
              alt="Técnico operando centrífuga de laboratório na Clínica Natural F.M & Filhos"
              className="w-full h-80 sm:h-96 object-cover object-center group-hover:scale-[1.02] transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent p-6 flex flex-col justify-end">
              <span className="text-xs font-bold text-teal-400 uppercase tracking-wider">
                Centrífugas e Equipamento Diagnóstico
              </span>
              <h3 className="text-lg font-bold text-white mt-1">
                Processamento Imediato de Amostras
              </h3>
              <p className="text-xs text-slate-300 mt-1 max-w-xl">
                O processamento das colheitas biológicas é iniciado sem atrasos logo após a extração, garantindo a viabilidade celular e a exatidão analítica dos resultados.
              </p>
            </div>
          </div>

          {/* Real Photo 2: Specimen Tubes Bench */}
          <div className="lg:col-span-5 group relative rounded-2xl overflow-hidden border border-slate-700 bg-slate-800 shadow-xl">
            <img
              src="/assets/aistudio/IMG-20261028-WA0016_ddfca9f1.jpg"
              alt="Bancada de tubos de ensaio e colheita laboratorial"
              className="w-full h-80 sm:h-96 object-cover object-center group-hover:scale-[1.02] transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent p-6 flex flex-col justify-end">
              <span className="text-xs font-bold text-teal-400 uppercase tracking-wider">
                Controlo de Qualidade
              </span>
              <h3 className="text-lg font-bold text-white mt-1">
                Colheitas Seguras e Esterilizadas
              </h3>
              <p className="text-xs text-slate-300 mt-1">
                Material de uso único e identificação unívoca por código de barras de cada paciente.
              </p>
            </div>
          </div>

        </div>

        {/* 2 Interactive Tools: Exam Guide & Protocol Tracker */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Tool 1: Guia de Preparação e Catálogo de Exames */}
          <div className="lg:col-span-7 bg-slate-800/80 rounded-2xl p-6 sm:p-7 border border-slate-700/80">
            <div className="flex items-center justify-between mb-5 flex-wrap gap-2">
              <div>
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <FlaskConical className="w-5 h-5 text-teal-400" />
                  Guia Rápido de Exames & Jejum
                </h3>
                <p className="text-xs text-slate-400 mt-0.5">
                  Consulte os requisitos de jejum e o tempo médio de emissão do laudo
                </p>
              </div>

              {/* Category Pills */}
              <div className="flex items-center gap-1 overflow-x-auto pb-1 max-w-full text-xs">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setFilterCategory(cat)}
                    className={`px-2.5 py-1 rounded-md text-xs font-medium whitespace-nowrap transition-colors ${
                      filterCategory === cat
                        ? 'bg-teal-500 text-slate-950 font-bold'
                        : 'bg-slate-700/60 text-slate-300 hover:text-white'
                    }`}
                  >
                    {cat === 'all' ? 'Todos' : cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Search Input */}
            <div className="relative mb-4">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Pesquisar exame (ex: Hemograma, Glicemia, Malária)..."
                value={searchExam}
                onChange={(e) => setSearchExam(e.target.value)}
                className="w-full pl-9 pr-4 py-2.5 bg-slate-900 border border-slate-700 rounded-xl text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
              />
            </div>

            {/* Exam Rows */}
            <div className="space-y-2.5 max-h-[360px] overflow-y-auto pr-1">
              {filteredExams.map((exam) => (
                <div
                  key={exam.id}
                  className="p-3.5 rounded-xl bg-slate-900/70 border border-slate-700/60 hover:border-slate-600 transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs"
                >
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-slate-100 text-sm">{exam.name}</span>
                      <span className="text-[11px] font-mono text-teal-400 bg-teal-950/60 px-2 py-0.5 rounded border border-teal-800/40">
                        {exam.category}
                      </span>
                    </div>
                    <p className="text-slate-400 text-xs mt-1 leading-normal">
                      {exam.description}
                    </p>
                  </div>

                  <div className="flex items-center sm:flex-col items-start sm:items-end justify-between shrink-0 text-slate-300 border-t sm:border-t-0 pt-2 sm:pt-0 border-slate-800">
                    <span className="flex items-center gap-1 text-[11px] text-amber-300 font-medium">
                      <Clock className="w-3 h-3" />
                      {exam.fastingHours > 0 ? `Jejum de ${exam.fastingHours}h` : 'Sem jejum obrigatório'}
                    </span>
                    <span className="text-[11px] text-teal-300 font-mono mt-0.5">
                      Resultado: {exam.turnaroundTime}
                    </span>
                  </div>
                </div>
              ))}

              {filteredExams.length === 0 && (
                <div className="text-center py-8 text-slate-400 text-xs">
                  Nenhum exame encontrado para "{searchExam}". Realizamos dezenas de outros exames laboratoriais na clínica.
                </div>
              )}
            </div>

            <div className="mt-4 pt-3 border-t border-slate-700/70 flex items-center justify-between text-xs text-slate-400">
              <span>Colheitas sem marcação a partir das 07:30</span>
              <a
                href={`https://wa.me/${CLINIC_INFO.whatsapp}?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20se%20o%20laborat%C3%B3rio%20realiza%20o%20exame%3A%20`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-400 hover:underline flex items-center gap-1 font-semibold"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                Consultar Outro Exame no WhatsApp
              </a>
            </div>
          </div>

          {/* Tool 2: Consulta Online do Estado do Exame */}
          <div className="lg:col-span-5 bg-gradient-to-b from-slate-800/90 to-slate-850/90 rounded-2xl p-6 sm:p-7 border border-slate-700/80 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <FileText className="w-5 h-5 text-teal-400" />
                <h3 className="text-lg font-bold text-white">
                  Consultar Estado do Laudo
                </h3>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed mb-5">
                Introduza o número de protocolo constante no comprovativo de colheita entregue na clínica.
              </p>

              {/* Protocol input form */}
              <form onSubmit={handleTrackProtocol} className="space-y-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5 uppercase tracking-wide">
                    Número de Protocolo / Ficha
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder="Ex: EX-2026-001"
                      value={protocolCode}
                      onChange={(e) => setProtocolCode(e.target.value)}
                      className="flex-1 px-3.5 py-2.5 bg-slate-900 border border-slate-700 rounded-xl text-sm text-white font-mono placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 uppercase"
                    />
                    <button
                      type="submit"
                      className="px-4 py-2.5 bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-xs rounded-xl transition-colors shadow-sm whitespace-nowrap"
                    >
                      Verificar
                    </button>
                  </div>
                </div>

                {/* Helpful quick protocol buttons */}
                <div className="flex items-center gap-1.5 text-[11px] text-slate-400 pt-1">
                  <span>Exemplos para teste:</span>
                  {['EX-2026-001', 'EX-2026-002', 'EX-2026-003'].map(code => (
                    <button
                      key={code}
                      type="button"
                      onClick={() => {
                        setProtocolCode(code);
                        setHasSearched(true);
                        setSearchResult({
                          code,
                          ...MOCK_EXAM_STATUSES[code]
                        });
                      }}
                      className="underline hover:text-teal-400 font-mono"
                    >
                      {code}
                    </button>
                  ))}
                </div>
              </form>

              {/* Status Display Card */}
              {hasSearched && searchResult && (
                <div className="mt-5 p-4 rounded-xl bg-slate-900 border border-slate-700 space-y-3 animate-in fade-in duration-200">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                    <div>
                      <span className="text-[10px] text-slate-400 uppercase font-mono block">
                        Protocolo {searchResult.code}
                      </span>
                      <strong className="text-sm text-white">{searchResult.patient}</strong>
                    </div>
                    <span
                      className={`text-xs font-bold px-2.5 py-1 rounded-md border ${
                        searchResult.status === 'Pronto'
                          ? 'bg-emerald-950/80 text-emerald-400 border-emerald-700/60'
                          : 'bg-amber-950/80 text-amber-300 border-amber-700/60'
                      }`}
                    >
                      {searchResult.status === 'Pronto' ? '✓ Pronto' : '⏳ Em Análise'}
                    </span>
                  </div>

                  <div className="text-xs space-y-1">
                    <p className="text-slate-300">
                      <strong>Exame:</strong> {searchResult.exam}
                    </p>
                    <p className="text-slate-400">
                      <strong>Data da Colheita:</strong> {searchResult.date}
                    </p>
                    <p className="text-slate-300 text-[11px] bg-slate-950/60 p-2.5 rounded-lg border border-slate-800">
                      {searchResult.notes}
                    </p>
                  </div>

                  <a
                    href={`https://wa.me/${CLINIC_INFO.whatsapp}?text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20o%20envio%20do%20meu%20resultado%20do%20exame%20(Protocolo%3A%20${searchResult.code}%20-%20${searchResult.patient}).`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2 px-3 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs rounded-lg transition-colors flex items-center justify-center gap-1.5 shadow-sm"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Receber Laudo no WhatsApp</span>
                  </a>
                </div>
              )}

              {hasSearched && !searchResult && (
                <div className="mt-5 p-4 rounded-xl bg-slate-900/90 border border-slate-700 text-xs text-amber-300 flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold">Protocolo não identificado</p>
                    <p className="text-slate-400 text-[11px] mt-0.5">
                      Verifique se digitou corretamente ou contacte a nossa receção pelo WhatsApp para localização imediata da sua ficha.
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Direct Assurance footer */}
            <div className="mt-6 pt-4 border-t border-slate-700/60 flex items-center gap-3 text-xs text-slate-300">
              <ShieldCheck className="w-5 h-5 text-teal-400 shrink-0" />
              <span>Garantia de confidencialidade e proteção integral dos seus dados médicos.</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
