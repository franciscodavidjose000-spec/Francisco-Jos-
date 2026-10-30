import React, { useState, useEffect } from 'react';
import { X, Calendar, Clock, User, Phone, CheckCircle2, MessageCircle, AlertCircle, FileText, ChevronRight, ChevronLeft } from 'lucide-react';
import { CLINICAL_SERVICES, CLINIC_INFO, ServiceItem } from '../data/clinicData';

export interface BookingRecord {
  id: string;
  specialtyId: string;
  specialtyName: string;
  branchId: string;
  branchName: string;
  date: string;
  timeSlot: string;
  patientName: string;
  patientPhone: string;
  isWhatsApp: boolean;
  notes: string;
  createdAt: string;
  status: 'Confirmada' | 'Pendente';
}

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialSpecialtyId?: string;
  onSaveAppointment: (booking: BookingRecord) => void;
}

export const AppointmentModal: React.FC<AppointmentModalProps> = ({
  isOpen,
  onClose,
  initialSpecialtyId,
  onSaveAppointment,
}) => {
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);
  const [branchId, setBranchId] = useState<string>('sede-1-maio');
  const [specialtyId, setSpecialtyId] = useState<string>(initialSpecialtyId || 'consulta-geral');
  const [date, setDate] = useState<string>('');
  const [timeSlot, setTimeSlot] = useState<string>('09:00 - 10:00');
  const [patientName, setPatientName] = useState<string>('');
  const [patientPhone, setPatientPhone] = useState<string>('');
  const [isWhatsApp, setIsWhatsApp] = useState<boolean>(true);
  const [notes, setNotes] = useState<string>('');
  const [confirmedBooking, setConfirmedBooking] = useState<BookingRecord | null>(null);

  // Time slots
  const availableSlots = [
    '08:00 - 09:00',
    '09:00 - 10:00',
    '10:00 - 11:00',
    '11:00 - 12:00',
    '13:30 - 14:30',
    '14:30 - 15:30',
    '15:30 - 16:30',
    '16:30 - 17:30'
  ];

  // Set default tomorrow date
  useEffect(() => {
    if (initialSpecialtyId) {
      setSpecialtyId(initialSpecialtyId);
    }
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    const yyyy = tomorrow.getFullYear();
    const mm = String(tomorrow.getMonth() + 1).padStart(2, '0');
    const dd = String(tomorrow.getDate()).padStart(2, '0');
    setDate(`${yyyy}-${mm}-${dd}`);
  }, [initialSpecialtyId, isOpen]);

  if (!isOpen) return null;

  const currentSpecialty = CLINICAL_SERVICES.find(s => s.id === specialtyId) || CLINICAL_SERVICES[0];

  const handleNextStep = (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 1) {
      setStep(2);
    } else if (step === 2) {
      if (!date || !timeSlot) return;
      setStep(3);
    } else if (step === 3) {
      if (!patientName.trim() || !patientPhone.trim()) return;

      const selectedBranch = CLINIC_INFO.branches.find(b => b.id === branchId) || CLINIC_INFO.branches[0];

      const newBooking: BookingRecord = {
        id: `CNFM-${Math.floor(1000 + Math.random() * 9000)}`,
        specialtyId: currentSpecialty.id,
        specialtyName: currentSpecialty.name,
        branchId: selectedBranch.id,
        branchName: `${selectedBranch.name} (${selectedBranch.shortLabel})`,
        date,
        timeSlot,
        patientName: patientName.trim(),
        patientPhone: patientPhone.trim(),
        isWhatsApp,
        notes: notes.trim(),
        createdAt: new Date().toLocaleDateString('pt-PT'),
        status: 'Confirmada'
      };

      setConfirmedBooking(newBooking);
      onSaveAppointment(newBooking);
      setStep(4);
    }
  };

  const getWhatsAppUrl = (targetNumber: string = CLINIC_INFO.whatsapp) => {
    if (!confirmedBooking) return '#';
    const msg = encodeURIComponent(
      `*Marcação de Consulta - Clínica Natural F.M. & Filhos*\n` +
      `Código: ${confirmedBooking.id}\n` +
      `Sede / Unidade: ${confirmedBooking.branchName} · Soyo, Zaire\n` +
      `Paciente: ${confirmedBooking.patientName}\n` +
      `Especialidade: ${confirmedBooking.specialtyName}\n` +
      `Data: ${confirmedBooking.date}\n` +
      `Horário: ${confirmedBooking.timeSlot}\n` +
      `Telefone: ${confirmedBooking.patientPhone}\n` +
      (confirmedBooking.notes ? `Observações: ${confirmedBooking.notes}\n` : '') +
      `\n_Por favor confirmem a disponibilidade da receção no Soyo._`
    );
    return `https://wa.me/${targetNumber}?text=${msg}`;
  };

  const resetAndClose = () => {
    setStep(1);
    setConfirmedBooking(null);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl max-w-lg w-full shadow-2xl border border-slate-200 overflow-hidden flex flex-col animate-in zoom-in-95 duration-150">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-slate-900 text-white">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-teal-600 flex items-center justify-center text-white">
              <Calendar className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white leading-tight">
                Marcação de Consulta Online
              </h3>
              <span className="text-[11px] text-teal-300">
                Clínica Natural F.M. & Filhos · Centro Médico
              </span>
            </div>
          </div>
          
          <button
            onClick={resetAndClose}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
            aria-label="Fechar"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Step Indicator */}
        {step < 4 && (
          <div className="px-6 py-3 bg-slate-50 border-b border-slate-200 flex items-center justify-between text-xs font-semibold text-slate-500">
            <div className="flex items-center gap-1.5">
              <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[11px] ${step === 1 ? 'bg-teal-700 text-white' : 'bg-slate-200 text-slate-700'}`}>1</span>
              <span className={step === 1 ? 'text-slate-900 font-bold' : ''}>Especialidade</span>
            </div>
            <ChevronRight className="w-3.5 h-3.5 text-slate-300" />
            <div className="flex items-center gap-1.5">
              <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[11px] ${step === 2 ? 'bg-teal-700 text-white' : 'bg-slate-200 text-slate-700'}`}>2</span>
              <span className={step === 2 ? 'text-slate-900 font-bold' : ''}>Data & Horário</span>
            </div>
            <ChevronRight className="w-3.5 h-3.5 text-slate-300" />
            <div className="flex items-center gap-1.5">
              <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[11px] ${step === 3 ? 'bg-teal-700 text-white' : 'bg-slate-200 text-slate-700'}`}>3</span>
              <span className={step === 3 ? 'text-slate-900 font-bold' : ''}>Seus Dados</span>
            </div>
          </div>
        )}

        {/* Form Body */}
        <div className="p-6">
          
          {/* STEP 1: Select Branch & Specialty */}
          {step === 1 && (
            <div className="space-y-4">
              {/* Branch Selection */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1.5">
                  1. Escolha a Sede de Atendimento no Soyo (Zaire)
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {CLINIC_INFO.branches.map((b) => (
                    <label
                      key={b.id}
                      className={`p-3 rounded-xl border cursor-pointer transition-all flex flex-col justify-between ${
                        branchId === b.id
                          ? 'bg-teal-50 border-teal-600 text-teal-950 ring-1 ring-teal-600'
                          : 'border-slate-200 hover:border-slate-300 bg-white'
                      }`}
                    >
                      <div className="flex items-start gap-2">
                        <input
                          type="radio"
                          name="branch"
                          checked={branchId === b.id}
                          onChange={() => setBranchId(b.id)}
                          className="mt-1 text-teal-600 focus:ring-teal-500"
                        />
                        <div>
                          <strong className="text-xs font-bold text-slate-900 block leading-tight">{b.name}</strong>
                          <span className="text-[11px] text-teal-700 font-medium block mt-0.5">{b.reference}</span>
                          <span className="text-[10px] font-mono text-slate-400 mt-1 block">Código: {b.coordinates}</span>
                        </div>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* Specialty Selection */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1.5">
                  2. Escolha o Serviço ou Especialidade Médica
                </label>
                <div className="space-y-2 max-h-52 overflow-y-auto pr-1">
                  {CLINICAL_SERVICES.map((s) => (
                    <label
                      key={s.id}
                      className={`flex items-start gap-3 p-3 rounded-xl border cursor-pointer transition-all ${
                        specialtyId === s.id
                          ? 'bg-teal-50 border-teal-600 text-teal-950 ring-1 ring-teal-600'
                          : 'border-slate-200 hover:border-slate-300 bg-white'
                      }`}
                    >
                      <input
                        type="radio"
                        name="specialty"
                        checked={specialtyId === s.id}
                        onChange={() => setSpecialtyId(s.id)}
                        className="mt-1 text-teal-600 focus:ring-teal-500"
                      />
                      <div className="flex-1 text-xs">
                        <div className="flex items-center justify-between">
                          <strong className="text-sm font-semibold text-slate-900">{s.name}</strong>
                          <span className="text-[11px] text-slate-500 font-mono">{s.schedule}</span>
                        </div>
                        <p className="text-slate-600 mt-0.5 line-clamp-1">{s.shortDesc}</p>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              <div className="flex justify-end pt-3">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="px-5 py-2.5 bg-teal-700 hover:bg-teal-800 text-white text-xs font-bold rounded-lg transition-colors flex items-center gap-1.5 shadow-sm"
                >
                  <span>Continuar para Horário</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 2: Choose Date & Time Slot */}
          {step === 2 && (
            <div className="space-y-4">
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-700 flex items-center justify-between">
                <span>Especialidade Selecionada:</span>
                <strong className="text-teal-800 font-bold">{currentSpecialty.name}</strong>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1.5">
                  Data Pretendida
                </label>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-teal-600"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1.5">
                  Horário de Preferência
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {availableSlots.map((slot) => (
                    <button
                      key={slot}
                      type="button"
                      onClick={() => setTimeSlot(slot)}
                      className={`p-2.5 text-xs font-medium rounded-lg border transition-all text-center ${
                        timeSlot === slot
                          ? 'bg-teal-700 text-white border-teal-700 font-bold shadow-xs'
                          : 'bg-white border-slate-200 text-slate-700 hover:border-slate-300'
                      }`}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900 transition-colors flex items-center gap-1"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span>Voltar</span>
                </button>

                <button
                  type="button"
                  onClick={() => setStep(3)}
                  disabled={!date || !timeSlot}
                  className="px-5 py-2.5 bg-teal-700 hover:bg-teal-800 disabled:opacity-50 text-white text-xs font-bold rounded-lg transition-colors flex items-center gap-1.5 shadow-sm"
                >
                  <span>Continuar para Dados</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 3: Patient Information Form */}
          {step === 3 && (
            <form onSubmit={handleNextStep} className="space-y-3.5">
              <div className="p-3 bg-teal-50 rounded-xl border border-teal-200 text-xs text-teal-900 flex items-center justify-between">
                <span>{currentSpecialty.name}</span>
                <span className="font-mono font-bold">{date} · {timeSlot}</span>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1">
                  Nome Completo do Paciente *
                </label>
                <input
                  type="text"
                  placeholder="Ex: João Baptista Silva"
                  value={patientName}
                  onChange={(e) => setPatientName(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-teal-600"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1">
                  Contacto Telefónico / WhatsApp *
                </label>
                <input
                  type="tel"
                  placeholder="Ex: 923 000 000"
                  value={patientPhone}
                  onChange={(e) => setPatientPhone(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-teal-600"
                  required
                />
              </div>

              <div className="flex items-center gap-2 pt-1">
                <input
                  type="checkbox"
                  id="whatsappConsent"
                  checked={isWhatsApp}
                  onChange={(e) => setIsWhatsApp(e.target.checked)}
                  className="rounded text-teal-600 focus:ring-teal-500"
                />
                <label htmlFor="whatsappConsent" className="text-xs text-slate-600 cursor-pointer">
                  Este número possui WhatsApp (para receber lembrete e laudo)
                </label>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1">
                  Motivo da Consulta ou Sintomas (Opcional)
                </label>
                <textarea
                  rows={2}
                  placeholder="Ex: Check-up de rotina, medição de tensão, sintomas gripais..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full px-3.5 py-2 rounded-lg border border-slate-300 text-xs focus:outline-none focus:ring-2 focus:ring-teal-600 resize-none"
                />
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900 transition-colors flex items-center gap-1"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span>Voltar</span>
                </button>

                <button
                  type="submit"
                  className="px-5 py-2.5 bg-teal-700 hover:bg-teal-800 text-white text-xs font-bold rounded-lg transition-colors flex items-center gap-1.5 shadow-sm"
                >
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Confirmar Marcação</span>
                </button>
              </div>
            </form>
          )}

          {/* STEP 4: Success & Confirmation Ticket */}
          {step === 4 && confirmedBooking && (
            <div className="text-center space-y-4 animate-in fade-in duration-200">
              <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div>
                <h4 className="text-xl font-bold text-slate-900">
                  Marcação Realizada com Sucesso!
                </h4>
                <p className="text-xs text-slate-500 mt-1">
                  A sua consulta foi registada nos sistemas da Clínica Natural F.M. & Filhos.
                </p>
              </div>

              {/* Digital Booking Ticket */}
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-left text-xs space-y-2">
                <div className="flex items-center justify-between border-b border-slate-200 pb-2">
                  <span className="text-slate-500 font-mono">Código da Marcação:</span>
                  <span className="text-sm font-extrabold text-teal-800 font-mono bg-teal-100/80 px-2 py-0.5 rounded">
                    {confirmedBooking.id}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Sede (Soyo):</span>
                  <span className="font-semibold text-teal-800 text-right">{confirmedBooking.branchName}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Paciente:</span>
                  <span className="font-semibold text-slate-900">{confirmedBooking.patientName}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Especialidade:</span>
                  <span className="font-semibold text-slate-900">{confirmedBooking.specialtyName}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Data e Horário:</span>
                  <span className="font-semibold text-slate-900">{confirmedBooking.date} às {confirmedBooking.timeSlot}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Contacto:</span>
                  <span className="font-mono text-slate-800">{confirmedBooking.patientPhone}</span>
                </div>
              </div>

              {/* WhatsApp direct push button */}
              <div className="space-y-2 pt-2">
                <a
                  href={getWhatsAppUrl(CLINIC_INFO.whatsapp)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm rounded-xl transition-colors flex items-center justify-center gap-2 shadow-sm"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Enviar Comprovativo p/ WhatsApp (932 374 981)</span>
                </a>

                <a
                  href={getWhatsAppUrl(CLINIC_INFO.secondaryWhatsapp)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 bg-slate-800 hover:bg-slate-700 text-teal-300 font-semibold text-xs rounded-xl transition-colors flex items-center justify-center gap-2 border border-slate-700"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-400" />
                  <span>Enviar p/ Linha Secundária (962 382 272)</span>
                </a>

                <button
                  onClick={resetAndClose}
                  className="w-full py-2.5 px-4 text-xs font-semibold text-slate-600 hover:text-slate-900 transition-colors"
                >
                  Concluir e Fechar
                </button>
              </div>
            </div>
          )}

        </div>

      </div>
    </div>
  );
};
