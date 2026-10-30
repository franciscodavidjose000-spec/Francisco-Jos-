import React, { useState, useEffect } from 'react';
import { MessageCircle, Phone, ArrowUp } from 'lucide-react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { StatsBar } from './components/StatsBar';
import { ServicesSection } from './components/ServicesSection';
import { LaboratorySection } from './components/LaboratorySection';
import { AVCCampaignSection } from './components/AVCCampaignSection';
import { GalleryAndTeam } from './components/GalleryAndTeam';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { AppointmentModal, BookingRecord } from './components/AppointmentModal';
import { MyAppointmentsModal } from './components/MyAppointmentsModal';
import { CLINIC_INFO } from './data/clinicData';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [initialBookingSpecialty, setInitialBookingSpecialty] = useState<string | undefined>(undefined);
  const [isMyAppointmentsOpen, setIsMyAppointmentsOpen] = useState(false);
  const [appointments, setAppointments] = useState<BookingRecord[]>([]);
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Load saved appointments from localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem('cnfm_patient_appointments');
      if (saved) {
        setAppointments(JSON.parse(saved));
      }
    } catch {
      // ignore
    }

    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleOpenBooking = (specialtyId?: string) => {
    setInitialBookingSpecialty(specialtyId);
    setIsBookingOpen(true);
  };

  const handleSaveAppointment = (newBooking: BookingRecord) => {
    const updated = [newBooking, ...appointments];
    setAppointments(updated);
    try {
      localStorage.setItem('cnfm_patient_appointments', JSON.stringify(updated));
    } catch {
      // ignore
    }
  };

  const handleCancelAppointment = (id: string) => {
    const updated = appointments.filter(a => a.id !== id);
    setAppointments(updated);
    try {
      localStorage.setItem('cnfm_patient_appointments', JSON.stringify(updated));
    } catch {
      // ignore
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col text-slate-800 antialiased selection:bg-teal-600 selection:text-white">
      
      {/* Institutional Top Navbar */}
      <Navbar
        onOpenBooking={handleOpenBooking}
        onOpenMyAppointments={() => setIsMyAppointmentsOpen(true)}
        bookingCount={appointments.length}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero & Value Proposition */}
        <Hero
          onOpenBooking={handleOpenBooking}
          onSelectService={(serviceId) => handleOpenBooking(serviceId)}
        />

        {/* 2. Key Statistical Metrics */}
        <StatsBar />

        {/* 3. Clinical Specialties & Services */}
        <ServicesSection onOpenBooking={handleOpenBooking} />

        {/* 4. Clinical Analysis Laboratory & Online Protocol Tracker */}
        <LaboratorySection />

        {/* 5. AVC Prevention & Community Health Awareness (From Mural) */}
        <AVCCampaignSection onOpenBooking={handleOpenBooking} />

        {/* 6. Facilities & Clinical Team Photo Showcase */}
        <GalleryAndTeam />

        {/* 7. Contact Details, Inquiry Form & FAQs */}
        <ContactSection />
      </main>

      {/* Institutional Enterprise Footer */}
      <Footer onOpenBooking={() => handleOpenBooking()} />

      {/* Interactive Appointment Booking Wizard Modal */}
      <AppointmentModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        initialSpecialtyId={initialBookingSpecialty}
        onSaveAppointment={handleSaveAppointment}
      />

      {/* My Appointments Viewer Modal */}
      <MyAppointmentsModal
        isOpen={isMyAppointmentsOpen}
        onClose={() => setIsMyAppointmentsOpen(false)}
        appointments={appointments}
        onCancelAppointment={handleCancelAppointment}
        onOpenNewBooking={() => handleOpenBooking()}
      />

      {/* Floating Action Utilities: WhatsApp Quick Contact & Back to Top */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
        {showBackToTop && (
          <button
            onClick={scrollToTop}
            className="p-3 bg-white hover:bg-slate-100 text-slate-700 rounded-full shadow-lg border border-slate-200 transition-all hover:scale-105"
            aria-label="Voltar ao topo"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        )}

        {/* Direct WhatsApp Float */}
        <a
          href={`https://wa.me/${CLINIC_INFO.whatsapp}?text=Ol%C3%A1%2C%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20as%20consultas%20e%20exames%20na%20Cl%C3%ADnica%20Natural%20F.M%20%26%20Filhos.`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2.5 px-4 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm rounded-full shadow-xl shadow-emerald-900/20 transition-all hover:scale-105 active:scale-95 group"
          title="Falar no WhatsApp com a receção"
        >
          <MessageCircle className="w-5 h-5 group-hover:rotate-12 transition-transform" />
          <span className="hidden sm:inline">WhatsApp da Clínica</span>
        </a>
      </div>

    </div>
  );
}
