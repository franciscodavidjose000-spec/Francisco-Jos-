import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageCircle, 
  Send, 
  CheckCircle2, 
  ChevronDown, 
  ChevronUp, 
  ShieldAlert,
  Building2
} from 'lucide-react';
import { CLINIC_INFO, CLINIC_FAQS } from '../data/clinicData';

export const ContactSection: React.FC = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('Consulta e Especialidades');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim() || !message.trim()) return;
    setIsSubmitted(true);
  };

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  return (
    <section id="contactos" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-teal-700 block mb-2">
            Canais de Atendimento & Localização
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Contactos & Informações Úteis
          </h2>
          <p className="text-slate-600 mt-3 text-base leading-relaxed">
            Estamos ao seu dispor para esclarecer dúvidas, receber marcações ou prestar apoio médico de urgência.
          </p>
        </div>

        {/* 2 Columns: Contact details + Contact Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-20">
          
          {/* Left Column: Direct Info Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Phone & Urgent Care Card */}
            <div className="p-6 rounded-2xl bg-slate-900 text-white shadow-sm border border-slate-800">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-teal-600 flex items-center justify-center text-white">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold text-teal-400 uppercase tracking-wider block">
                    Linhas Telefónicas Diretas
                  </span>
                  <h3 className="text-lg font-bold text-white">
                    Atendimento & Urgências
                  </h3>
                </div>
              </div>

              <div className="space-y-3 pt-2 border-t border-slate-800">
                {/* Number 1 */}
                <div className="flex items-center justify-between gap-3 p-2.5 rounded-xl bg-slate-800/60 border border-slate-700/60">
                  <div>
                    <span className="text-[10px] text-teal-400 font-bold uppercase block tracking-wider">Linha Principal / WhatsApp</span>
                    <a
                      href={`tel:+244${CLINIC_INFO.phoneRaw1}`}
                      className="text-base sm:text-lg font-bold font-mono text-white hover:text-teal-300 transition-colors"
                    >
                      {CLINIC_INFO.phone}
                    </a>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <a
                      href={`tel:+244${CLINIC_INFO.phoneRaw1}`}
                      className="p-2 bg-slate-700 hover:bg-slate-600 text-teal-300 rounded-lg transition-colors"
                      title="Ligar para 932 374 981"
                    >
                      <Phone className="w-4 h-4" />
                    </a>
                    <a
                      href={`https://wa.me/+244${CLINIC_INFO.phoneRaw1}?text=Ol%C3%A1%2C%20pretendo%20informa%C3%A7%C3%B5es%20da%20Cl%C3%ADnica%20Natural%20F.M%20%26%20Filhos.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg transition-colors"
                      title="WhatsApp 932 374 981"
                    >
                      <MessageCircle className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                {/* Number 2 */}
                <div className="flex items-center justify-between gap-3 p-2.5 rounded-xl bg-slate-800/60 border border-slate-700/60">
                  <div>
                    <span className="text-[10px] text-slate-400 font-bold uppercase block tracking-wider">Linha Alternativa</span>
                    <a
                      href={`tel:+244${CLINIC_INFO.phoneRaw2}`}
                      className="text-base sm:text-lg font-bold font-mono text-white hover:text-teal-300 transition-colors"
                    >
                      {CLINIC_INFO.secondaryPhone}
                    </a>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <a
                      href={`tel:+244${CLINIC_INFO.phoneRaw2}`}
                      className="p-2 bg-slate-700 hover:bg-slate-600 text-teal-300 rounded-lg transition-colors"
                      title="Ligar para 962 382 272"
                    >
                      <Phone className="w-4 h-4" />
                    </a>
                    <a
                      href={`https://wa.me/+244${CLINIC_INFO.phoneRaw2}?text=Ol%C3%A1%2C%20pretendo%20informa%C3%A7%C3%B5es%20da%20Cl%C3%ADnica%20Natural%20F.M%20%26%20Filhos.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg transition-colors"
                      title="WhatsApp 962 382 272"
                    >
                      <MessageCircle className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                <span>Atendimento telefónico e WhatsApp ativo</span>
                <span className="text-emerald-400 font-medium">Disponível</span>
              </div>
            </div>

            {/* 2 Branches Showcase Card in Soyo */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/90 shadow-xs space-y-4">
              <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-teal-700" />
                  <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wide">
                    2 Sedes no Município do Soyo (Zaire)
                  </h4>
                </div>
                <span className="text-[11px] font-semibold text-teal-800 bg-teal-100 px-2 py-0.5 rounded">
                  Angola
                </span>
              </div>

              {/* Sede 1 */}
              <div className="p-3.5 rounded-xl bg-white border border-slate-200 hover:border-teal-400 transition-colors space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-extrabold text-slate-900 flex items-center gap-1.5">
                    <span className="w-5 h-5 rounded-full bg-teal-700 text-white flex items-center justify-center text-[10px]">1</span>
                    Sede Bairro 1 de Maio
                  </span>
                  <span className="text-[10px] font-mono text-teal-700 bg-teal-50 px-2 py-0.5 rounded border border-teal-100">
                    V96C+JVP, Soyo
                  </span>
                </div>
                <p className="text-xs text-slate-600">
                  <strong>Referência:</strong> Em frente ao Aeroporto Municipal do Soyo
                </p>
                <div className="pt-1 flex items-center justify-between">
                  <span className="text-[11px] text-slate-400">Consultas & Laboratório</span>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=V96C%2BJVP%2C+Soyo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold text-teal-700 hover:text-teal-900 flex items-center gap-1 hover:underline"
                  >
                    <span>Abrir no Google Maps</span>
                    <span aria-hidden="true">&rarr;</span>
                  </a>
                </div>
              </div>

              {/* Sede 2 */}
              <div className="p-3.5 rounded-xl bg-white border border-slate-200 hover:border-teal-400 transition-colors space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-extrabold text-slate-900 flex items-center gap-1.5">
                    <span className="w-5 h-5 rounded-full bg-teal-700 text-white flex items-center justify-center text-[10px]">2</span>
                    Sede Bairro Mpungu
                  </span>
                  <span className="text-[10px] font-mono text-teal-700 bg-teal-50 px-2 py-0.5 rounded border border-teal-100">
                    -6.192895, 12.362844
                  </span>
                </div>
                <p className="text-xs text-slate-600">
                  <strong>Referência:</strong> Perto da Igreja Simão Toko
                </p>
                <div className="pt-1 flex items-center justify-between">
                  <span className="text-[11px] text-slate-400">Atendimento Clínico & Triagem</span>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=-6.192895,12.362844"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold text-teal-700 hover:text-teal-900 flex items-center gap-1 hover:underline"
                  >
                    <span>Abrir no Google Maps</span>
                    <span aria-hidden="true">&rarr;</span>
                  </a>
                </div>
              </div>

              {/* Operating hours */}
              <div className="pt-2 border-t border-slate-200 flex items-start gap-3">
                <Clock className="w-4 h-4 text-teal-700 mt-0.5 shrink-0" />
                <div className="text-xs space-y-0.5">
                  <strong className="text-slate-900 block font-semibold">Horário em Ambas as Unidades</strong>
                  <p className="text-slate-600">{CLINIC_INFO.workingHours.weekdays}</p>
                  <p className="text-slate-600">{CLINIC_INFO.workingHours.saturday}</p>
                </div>
              </div>

              {/* Email */}
              <div className="pt-2 border-t border-slate-200 flex items-start gap-3">
                <Mail className="w-4 h-4 text-teal-700 mt-0.5 shrink-0" />
                <div className="text-xs space-y-0.5">
                  <strong className="text-slate-900 block font-semibold">Correio Eletrónico Oficial</strong>
                  <a
                    href={`mailto:${CLINIC_INFO.email}`}
                    className="text-teal-700 hover:text-teal-900 font-mono text-xs font-semibold transition-colors block"
                  >
                    {CLINIC_INFO.email}
                  </a>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Contact Inquiry Form */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/90 shadow-sm">
            <h3 className="text-xl font-bold text-slate-900 mb-2">
              Envie uma Mensagem à Direção ou Receção
            </h3>
            <p className="text-xs text-slate-500 mb-6 leading-relaxed">
              Tem alguma dúvida sobre exames, pedidos de orçamentos para empresas ou parcerias clínicas? Preencha o formulário e responderemos prontamente.
            </p>

            {isSubmitted ? (
              <div className="p-6 rounded-xl bg-teal-50 border border-teal-200 text-center space-y-3 animate-in fade-in">
                <div className="w-12 h-12 rounded-full bg-teal-700 text-white flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="text-base font-bold text-teal-900">
                  Mensagem Enviada com Sucesso!
                </h4>
                <p className="text-xs text-teal-800 leading-relaxed max-w-md mx-auto">
                  Obrigado pelo seu contacto, <strong>{name}</strong>. A equipa da <strong>Clínica Natural F.M. & Filhos</strong> entrará em contacto através do número <strong>{phone}</strong>.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setIsSubmitted(false);
                    setMessage('');
                  }}
                  className="mt-2 text-xs font-semibold text-teal-800 underline"
                >
                  Enviar outra mensagem
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1">
                      O Seu Nome *
                    </label>
                    <input
                      type="text"
                      placeholder="Ex: Manuel António"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-teal-600"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1">
                      Telefone / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      placeholder="Ex: 923 000 000"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-teal-600"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1">
                      E-mail (Opcional)
                    </label>
                    <input
                      type="email"
                      placeholder="seu.email@exemplo.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-teal-600"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1">
                      Assunto
                    </label>
                    <select
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-teal-600 bg-white"
                    >
                      <option value="Consulta e Especialidades">Consulta e Especialidades</option>
                      <option value="Exames de Laboratório">Exames de Laboratório</option>
                      <option value="Medicina Natural">Medicina Natural</option>
                      <option value="Convénios e Empresas">Convénios & Empresas</option>
                      <option value="Outro Assunto">Outro Assunto</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1">
                    A sua Mensagem *
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Escreva como o Centro Médico pode ajudar..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-teal-600 resize-none"
                    required
                  />
                </div>

                <div className="flex items-center justify-between pt-2">
                  <span className="text-xs text-slate-500">
                    * Campos obrigatórios
                  </span>
                  <button
                    type="submit"
                    className="px-6 py-3 bg-teal-700 hover:bg-teal-800 text-white font-bold text-xs sm:text-sm rounded-xl transition-colors flex items-center gap-2 shadow-sm"
                  >
                    <Send className="w-4 h-4" />
                    <span>Enviar Mensagem</span>
                  </button>
                </div>
              </form>
            )}

          </div>

        </div>

        {/* FAQs Accordion */}
        <div className="pt-10 border-t border-slate-200">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-700 block mb-1">
              Esclarecimento de Dúvidas
            </span>
            <h3 className="text-2xl font-bold text-slate-900">
              Perguntas Frequentes dos Pacientes
            </h3>
          </div>

          <div className="max-w-4xl space-y-3">
            {CLINIC_FAQS.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-xl border border-slate-200 bg-slate-50/50 overflow-hidden"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(idx)}
                    className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 font-semibold text-slate-900 text-sm hover:bg-slate-100/60 transition-colors"
                  >
                    <span>{faq.question}</span>
                    {isOpen ? (
                      <ChevronUp className="w-4 h-4 text-teal-700 shrink-0" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />
                    )}
                  </button>
                  
                  {isOpen && (
                    <div className="px-5 pb-4 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3 bg-white">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
