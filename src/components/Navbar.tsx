import React, { useState, useEffect } from 'react';
import { Phone, Clock, Calendar, Menu, X, ShieldAlert, Sparkles, MessageCircle } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

interface NavbarProps {
  onOpenBooking: (specialtyId?: string) => void;
  onOpenMyAppointments: () => void;
  bookingCount: number;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking, onOpenMyAppointments, bookingCount }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Especialidades', href: '#servicos' },
    { label: 'Laboratório', href: '#laboratorio' },
    { label: 'Prevenção AVC', href: '#prevencao-avc' },
    { label: 'Instalações & Equipa', href: '#galeria' },
    { label: 'Contactos', href: '#contactos' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md transition-all duration-200 border-b border-slate-200/80">
      {/* Top Institutional Notification Bar */}
      <div className="bg-slate-900 text-slate-300 text-xs py-1.5 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-4 flex-wrap justify-center sm:justify-start">
            <span className="flex items-center gap-1.5 text-slate-200 font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block"></span>
              Atendimento Aberto · 2 Sedes no Soyo (Zaire)
            </span>
            <span className="hidden md:inline text-slate-500">|</span>
            <span className="hidden md:flex items-center gap-1.5 text-slate-400">
              <Clock className="w-3.5 h-3.5 text-teal-400" />
              Seg - Sex: 07:30 - 18:30 · Sáb: 08:00 - 15:00
            </span>
          </div>

          <div className="flex items-center gap-3 text-xs font-medium flex-wrap">
            <a
              href={`tel:+244${CLINIC_INFO.phoneRaw1}`}
              className="flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors"
              title="Ligar para 932 374 981"
            >
              <Phone className="w-3 h-3 text-emerald-400" />
              <span>{CLINIC_INFO.phone}</span>
            </a>
            <span className="text-slate-600 hidden sm:inline">/</span>
            <a
              href={`tel:+244${CLINIC_INFO.phoneRaw2}`}
              className="hidden sm:inline-block text-slate-300 hover:text-white transition-colors font-mono"
              title="Ligar para 962 382 272"
            >
              {CLINIC_INFO.secondaryPhone}
            </a>
            <a
              href={`https://wa.me/${CLINIC_INFO.whatsapp}?text=Ol%C3%A1%2C%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20as%20consultas%20na%20Cl%C3%ADnica%20Natural%20F.M%20%26%20Filhos.`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-emerald-400 hover:text-emerald-300 transition-colors ml-1"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Top Bar - strictly follows 3-Zone Top Bar Contract */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-20">
          
          {/* Zone 1: Brand Wordmark with Official Clinic Logo */}
          <a href="#" className="flex items-center gap-3 shrink-0 group">
            <div className="relative w-12 h-12 rounded-xl overflow-hidden bg-white shadow-sm border border-slate-100 flex items-center justify-center p-0.5">
              <img
                src={CLINIC_INFO.logoUrl}
                alt="Logótipo Clínica Natural F.M. & Filhos"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-lg sm:text-xl font-bold tracking-tight text-slate-900 leading-tight">
                Clínica Natural F.M. & Filhos
              </span>
              <span className="text-xs font-medium text-teal-700 tracking-wide uppercase">
                Centro Médico & Análises Clínicas
              </span>
            </div>
          </a>

          {/* Zone 2: 4-5 Clean Single-Line Nav Links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-semibold text-slate-700">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-teal-700 transition-colors whitespace-nowrap shrink-0 py-1"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: 1 Primary Action + Quick Appointments Viewer */}
          <div className="flex items-center gap-3 shrink-0">
            {bookingCount > 0 && (
              <button
                onClick={onOpenMyAppointments}
                className="hidden sm:flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-teal-800 bg-teal-50 border border-teal-200/80 rounded-lg hover:bg-teal-100 transition-colors whitespace-nowrap shrink-0"
                title="Ver consultas agendadas"
              >
                <Calendar className="w-3.5 h-3.5 text-teal-600" />
                <span>Minhas Consultas ({bookingCount})</span>
              </button>
            )}

            <button
              onClick={() => onOpenBooking()}
              className="flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-teal-700 rounded-lg shadow-sm hover:bg-teal-800 active:scale-[0.98] transition-all whitespace-nowrap shrink-0"
            >
              <Calendar className="w-4 h-4" />
              <span>Marcar Consulta</span>
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-slate-600 hover:text-slate-900 rounded-lg hover:bg-slate-100 transition-colors"
              aria-label="Abrir menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 shadow-xl animate-in fade-in slide-in-from-top-2 duration-150">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-lg text-base font-medium text-slate-800 hover:bg-teal-50 hover:text-teal-800 transition-colors"
              >
                {link.label}
              </a>
            ))}
            
            {bookingCount > 0 && (
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenMyAppointments();
                }}
                className="flex items-center justify-between w-full px-3 py-2.5 rounded-lg text-sm font-medium text-teal-800 bg-teal-50"
              >
                <span className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-teal-600" />
                  Minhas Consultas Agendadas
                </span>
                <span className="px-2 py-0.5 text-xs font-bold bg-teal-700 text-white rounded-full">
                  {bookingCount}
                </span>
              </button>
            )}

            <div className="pt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-3 px-4 text-center font-semibold text-white bg-teal-700 rounded-lg hover:bg-teal-800 transition-colors shadow-sm"
              >
                Marcar Consulta Online
              </button>
            </div>

            <div className="pt-3 border-t border-slate-100 text-xs text-slate-500 space-y-1">
              <p className="font-semibold text-slate-700">Clínica Natural F.M. & Filhos</p>
              <p>A sua saúde é a nossa Prioridade!</p>
              <p className="text-teal-700 font-medium">Contactos: {CLINIC_INFO.phone} · {CLINIC_INFO.secondaryPhone}</p>
              <p className="text-slate-600 font-mono text-[11px]">{CLINIC_INFO.email}</p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
