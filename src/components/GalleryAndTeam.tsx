import React, { useState } from 'react';
import { Camera, Users, Building, Microscope, Sparkles, X, ChevronLeft, ChevronRight, Eye } from 'lucide-react';
import { GALLERY_ITEMS, GalleryItem } from '../data/clinicData';

export const GalleryAndTeam: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'facilities' | 'team' | 'lab' | 'community'>('all');
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const filteredItems = GALLERY_ITEMS.filter(item => {
    if (activeCategory === 'all') return true;
    return item.category === activeCategory;
  });

  const handleOpenLightbox = (index: number) => {
    setSelectedImageIndex(index);
  };

  const handleNext = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex + 1) % filteredItems.length);
    }
  };

  const handlePrev = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex - 1 + filteredItems.length) % filteredItems.length);
    }
  };

  return (
    <section id="galeria" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-700 block mb-2">
              Transparência & Vida Clínica
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Instalações, Corpo Clínico & Comunidade
            </h2>
            <p className="text-slate-600 mt-3 text-base leading-relaxed">
              Conheça por dentro o Centro Médico da <strong>Clínica Natural F.M. & Filhos</strong>. Registos reais dos nossos gabinetes de consulta, laboratório diagnóstico e equipa multidisciplinar de saúde.
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1.5 bg-white rounded-xl border border-slate-200 shadow-sm self-start md:self-auto">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                activeCategory === 'all'
                  ? 'bg-slate-900 text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Todas ({GALLERY_ITEMS.length})
            </button>
            <button
              onClick={() => setActiveCategory('team')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                activeCategory === 'team'
                  ? 'bg-slate-900 text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Corpo Clínico
            </button>
            <button
              onClick={() => setActiveCategory('facilities')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                activeCategory === 'facilities'
                  ? 'bg-slate-900 text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Instalações
            </button>
            <button
              onClick={() => setActiveCategory('lab')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                activeCategory === 'lab'
                  ? 'bg-slate-900 text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Laboratório
            </button>
            <button
              onClick={() => setActiveCategory('community')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                activeCategory === 'community'
                  ? 'bg-slate-900 text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Comunidade
            </button>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => handleOpenLightbox(index)}
              className="group cursor-pointer rounded-2xl overflow-hidden bg-white border border-slate-200/90 shadow-sm hover:shadow-lg hover:border-teal-400 transition-all duration-200 flex flex-col"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden bg-slate-100">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                
                {/* Overlay Badge & Hover Action */}
                <div className="absolute inset-0 bg-slate-950/30 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                  <span className="px-3 py-1.5 bg-white/90 backdrop-blur-sm text-slate-900 text-xs font-bold rounded-lg shadow-sm flex items-center gap-1.5">
                    <Eye className="w-3.5 h-3.5 text-teal-700" />
                    Ampliar Fotografia
                  </span>
                </div>

                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 text-[11px] font-semibold bg-white/90 backdrop-blur-sm text-slate-800 rounded-md shadow-xs">
                    {item.categoryLabel}
                  </span>
                </div>
              </div>

              {/* Content info */}
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-sm font-bold text-slate-900 group-hover:text-teal-700 transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 mt-1 line-clamp-2 leading-relaxed">
                    {item.caption}
                  </p>
                </div>
                
                <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
                  <span>Clínica Natural F.M. & Filhos</span>
                  <span className="text-teal-700 font-medium">Ver detalhes</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedImageIndex !== null && filteredItems[selectedImageIndex] && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative max-w-4xl w-full bg-slate-900 rounded-2xl overflow-hidden shadow-2xl border border-slate-800 flex flex-col">
            
            {/* Top Bar */}
            <div className="flex items-center justify-between px-6 py-4 bg-slate-950/80 border-b border-slate-800 text-white">
              <div>
                <span className="text-xs font-mono text-teal-400 uppercase tracking-wider block">
                  {filteredItems[selectedImageIndex].categoryLabel} · Imagem {selectedImageIndex + 1} de {filteredItems.length}
                </span>
                <h3 className="text-base font-bold text-white leading-tight">
                  {filteredItems[selectedImageIndex].title}
                </h3>
              </div>
              
              <button
                onClick={() => setSelectedImageIndex(null)}
                className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                aria-label="Fechar visualizador"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Main Lightbox Image Viewport */}
            <div className="relative flex-1 min-h-[350px] sm:min-h-[480px] max-h-[70vh] bg-black flex items-center justify-center">
              <img
                src={filteredItems[selectedImageIndex].imageUrl}
                alt={filteredItems[selectedImageIndex].title}
                className="max-h-[68vh] w-auto max-w-full object-contain mx-auto"
              />

              {/* Prev Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handlePrev();
                }}
                className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-slate-900/80 hover:bg-slate-800 text-white border border-slate-700 transition-colors"
                aria-label="Imagem anterior"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {/* Next Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleNext();
                }}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-slate-900/80 hover:bg-slate-800 text-white border border-slate-700 transition-colors"
                aria-label="Próxima imagem"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Bottom Caption */}
            <div className="p-4 sm:p-5 bg-slate-950 text-slate-300 text-xs sm:text-sm border-t border-slate-800">
              <p className="leading-relaxed">
                {filteredItems[selectedImageIndex].caption}
              </p>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
