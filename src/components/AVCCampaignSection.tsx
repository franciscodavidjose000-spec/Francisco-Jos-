import React, { useState } from 'react';
import { HeartPulse, AlertTriangle, Clock, ArrowRight, ShieldCheck, CheckCircle2, PhoneCall } from 'lucide-react';
import { AVC_CAMPAIGN, CLINIC_INFO } from '../data/clinicData';

interface AVCCampaignProps {
  onOpenBooking: (specialtyId?: string) => void;
}

export const AVCCampaignSection: React.FC<AVCCampaignProps> = ({ onOpenBooking }) => {
  const [systolic, setSystolic] = useState<number | ''>('');
  const [diastolic, setDiastolic] = useState<number | ''>('');
  const [bpAssessment, setBpAssessment] = useState<{
    status: 'Normal' | 'Elevada' | 'Hipertensão Grau 1' | 'Hipertensão Grau 2' | 'Crise Hipertensiva';
    color: string;
    advice: string;
  } | null>(null);

  const handleEvaluateBP = (e: React.FormEvent) => {
    e.preventDefault();
    const sys = Number(systolic);
    const dia = Number(diastolic);

    if (!sys || !dia) return;

    if (sys > 180 || dia > 120) {
      setBpAssessment({
        status: 'Crise Hipertensiva',
        color: 'text-rose-600 bg-rose-50 border-rose-300',
        advice: 'Atenção Crítica: Valores muito perigosos com risco de AVC agudo. Procure o nosso Centro Médico ou urgência de imediato!'
      });
    } else if (sys >= 140 || dia >= 90) {
      setBpAssessment({
        status: 'Hipertensão Grau 2',
        color: 'text-amber-700 bg-amber-50 border-amber-300',
        advice: 'Hipertensão confirmada. É indispensável consulta de Medicina Interna para início ou ajuste de medicação anti-hipertensiva.'
      });
    } else if ((sys >= 130 && sys <= 139) || (dia >= 80 && dia <= 89)) {
      setBpAssessment({
        status: 'Hipertensão Grau 1',
        color: 'text-amber-700 bg-amber-50 border-amber-300',
        advice: 'Tensão arterial limítrofe elevada. Recomendamos check-up médico, redução do consumo de sal e acompanhamento contínuo.'
      });
    } else if (sys >= 120 && sys <= 129 && dia < 80) {
      setBpAssessment({
        status: 'Elevada',
        color: 'text-blue-700 bg-blue-50 border-blue-300',
        advice: 'Pressão pré-hipertensiva. Cuidados dietéticos e atividade física são recomendados para evitar progressão.'
      });
    } else {
      setBpAssessment({
        status: 'Normal',
        color: 'text-emerald-700 bg-emerald-50 border-emerald-300',
        advice: 'Excelente! A sua pressão arterial está dentro dos parâmetros normais. Mantenha os seus hábitos saudáveis e meça periodicamente.'
      });
    }
  };

  return (
    <section id="prevencao-avc" className="py-20 bg-gradient-to-b from-white via-slate-50 to-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with Mural Heritage */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-rose-700 bg-rose-50 border border-rose-200/80 px-3 py-1 rounded-md mb-2">
            <HeartPulse className="w-4 h-4 text-rose-600" />
            <span>Saúde Comunitária & Prevenção Cardiovascular</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Prevenção do AVC: Cada Segundo Conta
          </h2>
          <p className="text-slate-600 mt-3 text-base leading-relaxed">
            Como visível no mural educativo pintado à entrada das nossas instalações, a <strong>Clínica Natural F.M. & Filhos</strong> lidera campanhas ativas de rastreio de tensão arterial e sensibilização contra o Acidente Vascular Cerebral.
          </p>
        </div>

        {/* 2-Column Section: Real Mural Photo & S.I.N.A.I.S Protocol */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          
          {/* Real Photo: The Mural at Clinic Entrance */}
          <div className="lg:col-span-5 relative group">
            <div className="rounded-2xl overflow-hidden shadow-lg border border-slate-200 bg-slate-100">
              <img
                src={CLINIC_INFO.avcEntranceUrl}
                alt="Mural de Prevenção do AVC na entrada da Clínica Natural F.M & Filhos"
                className="w-full h-80 sm:h-96 object-cover object-center group-hover:scale-[1.01] transition-transform duration-500"
              />
              <div className="p-4 bg-white border-t border-slate-100">
                <span className="text-[11px] font-bold text-teal-700 uppercase tracking-wider block">
                  Registo Real das Nossas Instalações
                </span>
                <p className="text-xs text-slate-700 mt-0.5">
                  Mural ilustrativo dos sintomas do AVC à entrada do Centro Médico, orientado para a literacia em saúde de toda a comunidade.
                </p>
              </div>
            </div>
          </div>

          {/* Sinais de Alerta Grid (Protocolo F-B-F-T) */}
          <div className="lg:col-span-7 space-y-4">
            <div className="bg-white p-6 rounded-2xl border border-slate-200/90 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-rose-600" />
                Como Reconhecer os 4 Sinais de AVC:
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {AVC_CAMPAIGN.signs.map((sign, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-slate-50 border border-slate-200 hover:border-rose-300 transition-colors"
                  >
                    <div className="flex items-center gap-2.5 mb-1.5">
                      <span className="w-7 h-7 rounded-lg bg-rose-600 text-white font-extrabold flex items-center justify-center text-xs">
                        {sign.letter}
                      </span>
                      <h4 className="text-sm font-bold text-slate-900">
                        {sign.title}
                      </h4>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {sign.description}
                    </p>
                    <div className="mt-2 text-[11px] font-semibold text-rose-700">
                      Sinal: {sign.action}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-5 p-3.5 bg-rose-50/80 rounded-xl border border-rose-200/70 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-rose-900">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-rose-600 shrink-0" />
                  <span>Não espere para ver se passa. Cada minuto de atraso destrói neurónios vitais.</span>
                </div>
                <a
                  href={`tel:+244${CLINIC_INFO.phoneRaw1}`}
                  className="px-3 py-1.5 bg-rose-600 hover:bg-rose-700 text-white font-bold rounded-lg transition-colors flex items-center gap-1 shrink-0 justify-center"
                  title="Ligar de emergência para 932 374 981"
                >
                  <PhoneCall className="w-3.5 h-3.5" />
                  <span>Ligar para o Centro Médico</span>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Interactive Self-Assessment: Blood Pressure Checker */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            <div className="lg:col-span-6 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-teal-700 block">
                Calculadora Preventiva
              </span>
              <h3 className="text-2xl font-bold text-slate-900">
                Avalie a sua Tensão Arterial
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                A hipertensão é a principal causa evitável de AVC e frequentemente não apresenta sintomas visíveis. Se tiver a sua última medição, introduza os valores abaixo para receber uma orientação clínica imediata.
              </p>

              <form onSubmit={handleEvaluateBP} className="space-y-4 pt-2">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Pressão Máxima (Sistólica - mmHg)
                    </label>
                    <input
                      type="number"
                      placeholder="Ex: 120"
                      min="60"
                      max="260"
                      value={systolic}
                      onChange={(e) => setSystolic(e.target.value ? Number(e.target.value) : '')}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-teal-600"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Pressão Mínima (Diastólica - mmHg)
                    </label>
                    <input
                      type="number"
                      placeholder="Ex: 80"
                      min="40"
                      max="180"
                      value={diastolic}
                      onChange={(e) => setDiastolic(e.target.value ? Number(e.target.value) : '')}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-teal-600"
                      required
                    />
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    type="submit"
                    className="px-5 py-2.5 bg-slate-900 hover:bg-teal-700 text-white font-semibold text-xs sm:text-sm rounded-lg transition-colors shadow-sm"
                  >
                    Avaliar Nível de Risco
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      setSystolic(145);
                      setDiastolic(95);
                    }}
                    className="text-xs text-slate-500 hover:text-slate-800 underline"
                  >
                    Preencher exemplo (145/95)
                  </button>
                </div>
              </form>

              {bpAssessment && (
                <div className={`p-4 rounded-xl border text-xs leading-relaxed animate-in fade-in duration-200 ${bpAssessment.color}`}>
                  <div className="font-bold text-sm mb-1 flex items-center justify-between">
                    <span>Classificação: {bpAssessment.status}</span>
                    <span className="font-mono text-xs">{systolic}/{diastolic} mmHg</span>
                  </div>
                  <p>{bpAssessment.advice}</p>
                </div>
              )}
            </div>

            {/* Practical Prevention Guidelines */}
            <div className="lg:col-span-6 bg-slate-50 p-6 rounded-xl border border-slate-200">
              <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wide mb-3 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-teal-700" />
                Medidas Preventivas Essenciais Recomendadas Pela Clínica
              </h4>

              <div className="space-y-2.5">
                {AVC_CAMPAIGN.preventionTips.map((tip, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-teal-600 mt-0.5 shrink-0" />
                    <span>{tip}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200 flex items-center justify-between flex-wrap gap-2">
                <span className="text-xs text-slate-500">
                  Venha medir a sua tensão arterial no Centro Médico
                </span>
                <button
                  onClick={() => onOpenBooking('medicina-interna')}
                  className="px-4 py-2 bg-teal-700 hover:bg-teal-800 text-white text-xs font-semibold rounded-lg transition-colors flex items-center gap-1.5 shadow-sm"
                >
                  <span>Agendar Check-up Cardiovascular</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
