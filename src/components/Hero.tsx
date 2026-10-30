import React, { useState } from 'react';
import { Calendar, ArrowRight, ShieldCheck, Clock, Microscope, HeartPulse, Search, PhoneCall } from 'lucide-react';
import { CLINIC_INFO, CLINICAL_SERVICES } from '../data/clinicData';

interface HeroProps {
  onOpenBooking: (specialtyId?: string) => void;
  onSelectService: (serviceId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking, onSelectService }) => {
  const [selectedSpecialty, setSelectedSpecialty] = useState('');

  const handleQuickBook = (e: React.FormEvent) => {
    e.preventDefault();
    onOpenBooking(selectedSpecialty || undefined);
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-teal-50/20 to-white pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 2-Column Desktop Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Value Proposition & Interactive Booking Finder */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Editorial Kicker */}
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-teal-800 bg-teal-100/70 border border-teal-200/80 px-3.5 py-1.5 rounded-md">
              <span className="w-2 h-2 rounded-full bg-teal-600"></span>
              <span>Centro Médico & Saúde Integrada · Soyo, Zaire (2 Sedes)</span>
            </div>

            {/* Main Headline with balanced wrapping */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15] text-balance">
              A sua saúde é a nossa prioridade.{' '}
              <span className="text-teal-700">Cuidamos de si</span> e da sua família.
            </h1>

            {/* Concrete Value Description */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
              Na <strong className="text-slate-800 font-semibold">Clínica Natural F.M. & Filhos</strong>, servimos o Município do Soyo (Zaire) com 2 unidades de atendimento — no <strong>Bairro 1 de Maio</strong> (frente ao Aeroporto) e no <strong>Bairro Mpungu</strong> (perto da Igreja Simão Toko). Rigor médico, laboratório e terapias naturais integrativas.
            </p>

            {/* Quick Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() => onOpenBooking()}
                className="flex items-center gap-2.5 px-6 py-3.5 text-sm sm:text-base font-semibold text-white bg-teal-700 hover:bg-teal-800 active:scale-[0.98] rounded-xl shadow-md shadow-teal-700/20 transition-all"
              >
                <Calendar className="w-5 h-5" />
                <span>Marcar Consulta Online</span>
                <ArrowRight className="w-4 h-4 ml-0.5" />
              </button>

              <a
                href="#laboratorio"
                className="flex items-center gap-2 px-5 py-3.5 text-sm sm:text-base font-semibold text-slate-700 hover:text-slate-900 bg-white hover:bg-slate-50 border border-slate-300 rounded-xl transition-all shadow-sm"
              >
                <Microscope className="w-5 h-5 text-teal-600" />
                <span>Exames & Laboratório</span>
              </a>

              <a
                href={`tel:+244${CLINIC_INFO.phoneRaw1}`}
                className="inline-flex items-center gap-2 text-xs font-semibold text-slate-600 hover:text-teal-700 px-3 py-2 transition-colors"
                title="Ligar para urgências: 932 374 981"
              >
                <PhoneCall className="w-4 h-4 text-emerald-600" />
                <span>Urgências: {CLINIC_INFO.phone}</span>
              </a>
            </div>

            {/* Interactive Fast Appointment Strip */}
            <div className="mt-8 p-4 sm:p-5 bg-white rounded-2xl border border-slate-200/90 shadow-sm">
              <span className="text-xs font-bold text-slate-700 uppercase tracking-wide flex items-center gap-2 mb-3">
                <Search className="w-4 h-4 text-teal-600" />
                Agendamento Rápido por Especialidade
              </span>
              <form onSubmit={handleQuickBook} className="grid grid-cols-1 sm:grid-cols-12 gap-3">
                <div className="sm:col-span-8">
                  <select
                    value={selectedSpecialty}
                    onChange={(e) => setSelectedSpecialty(e.target.value)}
                    className="w-full h-11 px-3.5 text-sm rounded-lg border border-slate-300 bg-slate-50/50 text-slate-800 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-teal-600 transition-colors"
                  >
                    <option value="">Selecione a Especialidade Desejada...</option>
                    {CLINICAL_SERVICES.map((s) => (
                      <option key={s.id} value={s.id}>
                        {s.name} ({s.schedule})
                      </option>
                    ))}
                  </select>
                </div>
                <div className="sm:col-span-4">
                  <button
                    type="submit"
                    className="w-full h-11 px-4 text-sm font-semibold text-white bg-slate-900 hover:bg-teal-700 rounded-lg transition-colors flex items-center justify-center gap-1.5"
                  >
                    <span>Ver Vagas</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </form>
            </div>

            {/* Editorial Adjacency Proof Points */}
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-slate-200/80 text-xs text-slate-600">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-teal-600 shrink-0" />
                <span className="font-medium text-slate-800">Centro Médico Licenciado</span>
              </div>
              <div className="flex items-center gap-2">
                <Microscope className="w-4 h-4 text-teal-600 shrink-0" />
                <span className="font-medium text-slate-800">Laboratório Interno</span>
              </div>
              <div className="flex items-center gap-2">
                <HeartPulse className="w-4 h-4 text-teal-600 shrink-0" />
                <span className="font-medium text-slate-800">Triagem & Urgências</span>
              </div>
            </div>

          </div>

          {/* Right Column: Authentic Visual Showcase Grid with Real Clinic Photos */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Clinic Façade Image Card */}
              <div className="relative rounded-2xl overflow-hidden shadow-xl border-2 border-white bg-slate-100 group">
                <img
                  src={CLINIC_INFO.facadeUrl}
                  alt="Instalações do Centro Médico Clínica Natural F.M. & Filhos"
                  className="w-full h-80 sm:h-96 object-cover object-center group-hover:scale-[1.02] transition-transform duration-500"
                  loading="eager"
                />
                
                {/* Overlay Caption Banner */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/90 via-slate-900/60 to-transparent p-5 text-white">
                  <div className="flex items-center justify-between text-xs text-teal-300 font-medium mb-1">
                    <span>Instalações Oficiais</span>
                    <span>Centro Médico Aberto</span>
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-white leading-tight">
                    Clínica Natural F.M. & Filhos
                  </h3>
                  <p className="text-xs text-slate-200 mt-1 line-clamp-1">
                    Consulta Geral · Pediatria · Ginecologia · Laboratório
                  </p>
                </div>
              </div>

              {/* Floating Real Consultation Office Card */}
              <div className="absolute -bottom-6 -left-4 sm:-left-8 bg-white/95 backdrop-blur-md p-3.5 rounded-xl shadow-lg border border-slate-200/80 max-w-[240px] sm:max-w-[270px]">
                <div className="flex items-center gap-3">
                  <img
                    src="/assets/aistudio/IMG-20261028-WA0006_600fbad6.jpg"
                    alt="Consulta com Diretor Clínico"
                    className="w-14 h-14 rounded-lg object-cover shrink-0 border border-slate-100"
                  />
                  <div>
                    <span className="text-[11px] font-bold text-teal-700 uppercase tracking-wide block">
                      Apoio Médico
                    </span>
                    <h4 className="text-xs font-semibold text-slate-900 leading-tight">
                      Consulta Clínica Direta
                    </h4>
                    <p className="text-[11px] text-slate-500 mt-0.5">
                      Diagnóstico personalizado
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating Lab Diagnostics Card */}
              <div className="absolute -top-4 -right-4 sm:-right-6 bg-white/95 backdrop-blur-md p-3 rounded-xl shadow-lg border border-slate-200/80 max-w-[220px]">
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-lg bg-teal-50 border border-teal-100 flex items-center justify-center shrink-0">
                    <Microscope className="w-5 h-5 text-teal-700" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">
                      Laboratório Próprio
                    </span>
                    <p className="text-xs font-bold text-slate-900">
                      Análises Rápidas
                    </p>
                    <p className="text-[10px] text-emerald-600 font-medium">
                      Colheitas a partir 07:30
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
