import React from 'react';
import { Phone, Mail, MapPin, Heart, ShieldCheck } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

interface FooterProps {
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking }) => {
  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Col 1: Brand & Identity */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-white p-1 flex items-center justify-center shrink-0">
                <img
                  src={CLINIC_INFO.logoUrl}
                  alt="Logótipo Clínica Natural F.M. & Filhos"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white leading-tight">
                  Clínica Natural F.M. & Filhos
                </h3>
                <span className="text-xs text-teal-400 font-medium">
                  Centro Médico & Saúde Integrada
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              {CLINIC_INFO.legalName}. Prestação de serviços médicos de excelência, análises clínicas laboratoriais e programas de prevenção para toda a família.
            </p>

            <div className="pt-2 text-xs text-slate-300 font-semibold italic">
              "{CLINIC_INFO.slogan}" — {CLINIC_INFO.subSlogan}
            </div>
          </div>

          {/* Col 2: Serviços & Especialidades */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Especialidades Médicas
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><a href="#servicos" className="hover:text-teal-400 transition-colors">Consulta Geral & Triagem</a></li>
              <li><a href="#servicos" className="hover:text-teal-400 transition-colors">Medicina Interna (Adultos)</a></li>
              <li><a href="#servicos" className="hover:text-teal-400 transition-colors">Pediatria & Saúde Infantil</a></li>
              <li><a href="#servicos" className="hover:text-teal-400 transition-colors">Ginecologia e Obstetrícia</a></li>
              <li><a href="#laboratorio" className="hover:text-teal-400 transition-colors">Laboratório de Análises Clínicas</a></li>
              <li><a href="#servicos" className="hover:text-teal-400 transition-colors">Nutrição Clínica & Dietética</a></li>
              <li><a href="#servicos" className="hover:text-teal-400 transition-colors">Medicina Natural Integrativa</a></li>
            </ul>
          </div>

          {/* Col 3: Contacto & Atendimento */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Linhas de Atendimento
            </h4>
            <div className="space-y-2 text-xs text-slate-400">
              <p className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-teal-400 shrink-0" />
                <a href={`tel:+244${CLINIC_INFO.phoneRaw1}`} className="font-mono text-slate-200 hover:text-teal-300 transition-colors">
                  {CLINIC_INFO.phone}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                <a href={`tel:+244${CLINIC_INFO.phoneRaw2}`} className="font-mono text-slate-300 hover:text-teal-300 transition-colors">
                  {CLINIC_INFO.secondaryPhone}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-teal-400 shrink-0" />
                <a href={`mailto:${CLINIC_INFO.email}`} className="font-mono text-teal-300 hover:underline transition-colors">
                  {CLINIC_INFO.email}
                </a>
              </p>
              <div className="pt-2 border-t border-slate-800 space-y-1.5 text-[11px]">
                <p className="text-slate-300 font-semibold flex items-start gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-teal-400 shrink-0 mt-0.5" />
                  <span>Sede 1: B. 1 de Maio (Frente ao Aeroporto) · <span className="font-mono text-teal-400">V96C+JVP</span></span>
                </p>
                <p className="text-slate-300 font-semibold flex items-start gap-1.5 pl-5">
                  <span>Sede 2: B. Mpungu (Perto da Igreja S. Toko) · <span className="font-mono text-teal-400">R947+R4X</span></span>
                </p>
                <p className="text-slate-400 pl-5 text-[10px]">
                  Município do Soyo, Província do Zaire, Angola
                </p>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenBooking}
                className="w-full py-2.5 px-4 bg-teal-700 hover:bg-teal-600 text-white font-bold text-xs rounded-lg transition-colors text-center"
              >
                Marcar Consulta Online
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} {CLINIC_INFO.legalName}. Todos os direitos reservados.
          </div>
          <div className="flex items-center gap-4 text-slate-400">
            <span>Centro Médico Autorizado</span>
            <span>·</span>
            <span>Ética & Deontologia Médica</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
