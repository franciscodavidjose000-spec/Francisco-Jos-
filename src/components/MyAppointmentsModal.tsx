import React from 'react';
import { X, Calendar, Clock, Trash2, MessageCircle, FileText } from 'lucide-react';
import { BookingRecord } from './AppointmentModal';
import { CLINIC_INFO } from '../data/clinicData';

interface MyAppointmentsModalProps {
  isOpen: boolean;
  onClose: () => void;
  appointments: BookingRecord[];
  onCancelAppointment: (id: string) => void;
  onOpenNewBooking: () => void;
}

export const MyAppointmentsModal: React.FC<MyAppointmentsModalProps> = ({
  isOpen,
  onClose,
  appointments,
  onCancelAppointment,
  onOpenNewBooking
}) => {
  if (!isOpen) return null;

  const getWhatsAppUrl = (item: BookingRecord) => {
    const msg = encodeURIComponent(
      `*Consulta Agendada - Clínica Natural F.M. & Filhos*\n` +
      `Código: ${item.id}\n` +
      `Sede: ${item.branchName || 'Soyo'}\n` +
      `Paciente: ${item.patientName}\n` +
      `Especialidade: ${item.specialtyName}\n` +
      `Data: ${item.date} às ${item.timeSlot}\n` +
      `Telefone: ${item.patientPhone}`
    );
    return `https://wa.me/${CLINIC_INFO.whatsapp}?text=${msg}`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl max-w-lg w-full shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[85vh]">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-slate-900 text-white">
          <div className="flex items-center gap-2">
            <Calendar className="w-5 h-5 text-teal-400" />
            <h3 className="text-base font-bold text-white">
              Minhas Consultas Agendadas
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-4">
          {appointments.length === 0 ? (
            <div className="text-center py-10 space-y-3">
              <Calendar className="w-12 h-12 text-slate-300 mx-auto" />
              <p className="text-sm font-semibold text-slate-700">
                Ainda não tem nenhuma consulta marcada.
              </p>
              <p className="text-xs text-slate-500">
                Agende facilmente uma consulta médica ou exame de laboratório.
              </p>
              <button
                onClick={() => {
                  onClose();
                  onOpenNewBooking();
                }}
                className="mt-2 px-4 py-2 bg-teal-700 hover:bg-teal-800 text-white text-xs font-bold rounded-lg transition-colors"
              >
                Marcar Nova Consulta
              </button>
            </div>
          ) : (
            appointments.map((item) => (
              <div
                key={item.id}
                className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2.5"
              >
                <div className="flex items-center justify-between border-b border-slate-200 pb-2">
                  <span className="text-xs font-mono font-bold text-teal-800 bg-teal-100 px-2 py-0.5 rounded">
                    {item.id}
                  </span>
                  <span className="text-xs font-semibold px-2 py-0.5 rounded bg-emerald-100 text-emerald-800">
                    {item.status}
                  </span>
                </div>

                <div className="text-xs space-y-1">
                  <div className="flex items-center justify-between">
                    <h4 className="text-sm font-bold text-slate-900">{item.specialtyName}</h4>
                    {item.branchName && (
                      <span className="text-[11px] text-teal-700 font-semibold bg-teal-50 px-2 py-0.5 rounded border border-teal-100">
                        {item.branchName}
                      </span>
                    )}
                  </div>
                  <p className="text-slate-600">Paciente: <strong>{item.patientName}</strong></p>
                  <p className="text-slate-600 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-slate-400" />
                    <span>{item.date} às {item.timeSlot}</span>
                  </p>
                  {item.notes && (
                    <p className="text-slate-500 text-[11px] italic">"{item.notes}"</p>
                  )}
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-slate-200/80">
                  <button
                    onClick={() => onCancelAppointment(item.id)}
                    className="text-xs text-rose-600 hover:text-rose-800 font-medium flex items-center gap-1"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                    <span>Desmarcar</span>
                  </button>

                  <a
                    href={getWhatsAppUrl(item)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold rounded-lg flex items-center gap-1 transition-colors"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>Enviar p/ WhatsApp</span>
                  </a>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {appointments.length > 0 && (
          <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between text-xs">
            <span className="text-slate-500">
              Total: {appointments.length} consulta(s)
            </span>
            <button
              onClick={() => {
                onClose();
                onOpenNewBooking();
              }}
              className="px-3 py-1.5 bg-teal-700 hover:bg-teal-800 text-white font-semibold rounded-lg transition-colors"
            >
              + Marcar Outra
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
