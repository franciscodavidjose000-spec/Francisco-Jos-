import React from 'react';
import { Award, Microscope, Users, Stethoscope } from 'lucide-react';

export const StatsBar: React.FC = () => {
  const stats = [
    {
      value: "8+",
      label: "Especialidades Médicas",
      detail: "Medicina Geral, Pediatria, Ginecologia, Nutrição e Terapias Naturais",
      icon: Stethoscope
    },
    {
      value: "100%",
      label: "Laboratório Próprio no Local",
      detail: "Centrífugas modernas, hematologia, parasitologia e bioquímica",
      icon: Microscope
    },
    {
      value: "07:30",
      label: "Abertura para Colheitas",
      detail: "Atendimento matinal ágil para garantir o jejum dos pacientes",
      icon: Award
    },
    {
      value: "10.000+",
      label: "Atendimentos Comunitários",
      detail: "Famílias acompanhadas com humanização, ética e proximidade",
      icon: Users
    }
  ];

  return (
    <section className="bg-slate-900 text-white py-12 border-y border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 divide-y sm:divide-y-0 lg:divide-x divide-slate-800/80">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className={`flex flex-col justify-between pt-6 sm:pt-0 ${
                  idx !== 0 ? 'lg:pl-6' : ''
                }`}
              >
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-3xl sm:text-4xl font-extrabold text-teal-400 tabular-nums tracking-tight">
                      {stat.value}
                    </span>
                    <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center text-teal-400/90">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>
                  <h3 className="text-base font-semibold text-white tracking-tight">
                    {stat.label}
                  </h3>
                </div>
                <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">
                  {stat.detail}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
