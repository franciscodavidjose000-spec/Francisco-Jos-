import React, { useState } from 'react';
import { 
  Stethoscope, 
  HeartPulse, 
  Baby, 
  Flower2, 
  Microscope, 
  Apple, 
  Syringe, 
  ShieldCheck, 
  Leaf, 
  Calendar, 
  ArrowRight, 
  Check, 
  X,
  Clock
} from 'lucide-react';
import { CLINICAL_SERVICES, ServiceItem } from '../data/clinicData';

interface ServicesSectionProps {
  onOpenBooking: (specialtyId?: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenBooking }) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'clinical' | 'diagnostic' | 'wellness'>('all');
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Stethoscope': return Stethoscope;
      case 'HeartPulse': return HeartPulse;
      case 'Baby': return Baby;
      case 'Flower2': return Flower2;
      case 'Microscope': return Microscope;
      case 'Apple': return Apple;
      case 'Syringe': return Syringe;
      case 'ShieldCheck': return ShieldCheck;
      case 'Leaf': return Leaf;
      default: return Stethoscope;
    }
  };

  const filteredServices = CLINICAL_SERVICES.filter(service => {
    if (activeFilter === 'all') return true;
    return service.category === activeFilter;
  });

  return (
    <section id="servicos" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-700 block mb-2">
              Cuidados Integrados de Saúde
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight text-balance">
              Especialidades Clínicas & Serviços Médicos
            </h2>
            <p className="text-slate-600 mt-3 text-base leading-relaxed">
              Do atendimento médico de rotina aos exames laboratoriais especializados, combinamos tecnologia diagnóstica com acompanhamento humanizado para todas as idades.
            </p>
          </div>

          {/* Interactive Filter Controls */}
          <div className="flex flex-wrap items-center gap-1.5 p-1.5 bg-slate-100 rounded-xl border border-slate-200/80 self-start md:self-auto">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                activeFilter === 'all'
                  ? 'bg-white text-slate-900 shadow-sm border border-slate-200/60'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Todos os Serviços ({CLINICAL_SERVICES.length})
            </button>
            <button
              onClick={() => setActiveFilter('clinical')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                activeFilter === 'clinical'
                  ? 'bg-white text-slate-900 shadow-sm border border-slate-200/60'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Consultas Médicas
            </button>
            <button
              onClick={() => setActiveFilter('diagnostic')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                activeFilter === 'diagnostic'
                  ? 'bg-white text-slate-900 shadow-sm border border-slate-200/60'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Laboratório
            </button>
            <button
              onClick={() => setActiveFilter('wellness')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                activeFilter === 'wellness'
                  ? 'bg-white text-slate-900 shadow-sm border border-slate-200/60'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Nutrição & Natural
            </button>
          </div>
        </div>

        {/* Services Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service, idx) => {
            const Icon = getServiceIcon(service.iconName);
            const isMarquee = service.id === 'consulta-geral' || service.id === 'laboratorio';
            
            return (
              <div
                key={service.id}
                className={`flex flex-col justify-between p-6 rounded-2xl bg-slate-50/70 border border-slate-200/90 hover:border-teal-400 hover:bg-white hover:shadow-md transition-all duration-200 group ${
                  isMarquee ? 'lg:bg-teal-50/30 lg:border-teal-200' : ''
                }`}
              >
                <div>
                  {/* Top card bar */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-teal-700 shadow-sm group-hover:bg-teal-700 group-hover:text-white transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono text-slate-400">
                      0{idx + 1}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-teal-800 transition-colors">
                    {service.name}
                  </h3>

                  <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                    {service.shortDesc}
                  </p>

                  {/* Bullet Benefits */}
                  <div className="mt-4 pt-4 border-t border-slate-200/70 space-y-2">
                    {service.benefits.slice(0, 3).map((benefit, bIdx) => (
                      <div key={bIdx} className="flex items-start gap-2 text-xs text-slate-700">
                        <Check className="w-3.5 h-3.5 text-teal-600 mt-0.5 shrink-0" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Footer Actions */}
                <div className="mt-6 pt-4 border-t border-slate-200/70 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
                    <Clock className="w-3.5 h-3.5 text-slate-400" />
                    <span>{service.schedule}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setSelectedService(service)}
                      className="text-xs font-semibold text-slate-600 hover:text-teal-700 px-2 py-1 transition-colors"
                    >
                      Saber mais
                    </button>
                    <button
                      onClick={() => onOpenBooking(service.id)}
                      className="px-3 py-1.5 text-xs font-semibold text-white bg-teal-700 hover:bg-teal-800 rounded-lg transition-colors flex items-center gap-1"
                    >
                      <span>Marcar</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Service Detail Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative animate-in zoom-in-95 duration-150">
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-5 right-5 p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
              aria-label="Fechar"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-teal-50 border border-teal-100 flex items-center justify-center text-teal-700">
                {React.createElement(getServiceIcon(selectedService.iconName), { className: 'w-6 h-6' })}
              </div>
              <div>
                <span className="text-xs font-semibold text-teal-700 uppercase tracking-wider block">
                  Especialidade Médica
                </span>
                <h3 className="text-2xl font-bold text-slate-900 leading-tight">
                  {selectedService.name}
                </h3>
              </div>
            </div>

            <p className="text-slate-600 text-sm leading-relaxed mb-6">
              {selectedService.fullDesc}
            </p>

            <div className="mb-6 bg-slate-50 p-4 rounded-xl border border-slate-200">
              <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-2.5">
                O que inclui esta especialidade:
              </h4>
              <ul className="space-y-2">
                {selectedService.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-700">
                    <Check className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex items-center justify-between text-xs text-slate-500 mb-6 pb-4 border-b border-slate-100">
              <span>Disponibilidade: <strong>{selectedService.schedule}</strong></span>
              <span>Atendimento por ordem ou marcação</span>
            </div>

            <div className="flex items-center justify-end gap-3">
              <button
                onClick={() => setSelectedService(null)}
                className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900 transition-colors"
              >
                Voltar
              </button>
              <button
                onClick={() => {
                  const sId = selectedService.id;
                  setSelectedService(null);
                  onOpenBooking(sId);
                }}
                className="px-5 py-2.5 text-xs font-bold text-white bg-teal-700 hover:bg-teal-800 rounded-lg transition-colors flex items-center gap-2 shadow-sm"
              >
                <Calendar className="w-4 h-4" />
                <span>Marcar Consulta Para {selectedService.name}</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
