"use client";
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, Leaf, Shield, Star, Check, Phone, Diamond, Plus } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function FaunaElegantPage() {
  return (
    <div className="bg-[#FAF7F0] text-[#1F1F1F] min-h-screen font-sans selection:bg-[#0A9B6B]/20 selection:text-[#1F1F1F]">
      <HeroSection />
      <ContrastSection />
      <FeaturesSection />
      <ShowcaseSection />
      <TrustSection />
      <FinalCTASection />
    </div>
  );
}

// -----------------------------------------------------
// SECTION 1: HERO (ATTENTION)
// -----------------------------------------------------
function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[#FAF7F0] overflow-hidden pt-20 pb-20">
      <div className="container mx-auto px-4 sm:px-8 lg:px-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Content */}
          <motion.div 
            className="space-y-8 text-center lg:text-left pt-12 lg:pt-0"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.2, delay: 0.2 }}>
              <span className="inline-block text-[#0A9B6B] text-xs font-semibold tracking-[0.25em] uppercase pb-2 border-b border-[#0A9B6B]/30">
                Maison Fauna — Colombia
              </span>
            </motion.div>

            <motion.h1 
              className="text-5xl md:text-6xl lg:text-7xl font-light text-[#1F1F1F] leading-[1.15] tracking-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              El alma viva de <br />
              <span className="font-serif italic font-normal text-[#0A9B6B]">Colombia</span>,
              <br />inmortalizada.
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl text-[#1F1F1F]/70 xl:max-w-md mx-auto lg:mx-0 font-light leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              Esmeraldas colombianas 100% naturales engastadas en oro amarillo sólido de 18k. Diseñadas por la naturaleza, refinadas por maestros artesanos.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start pt-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <button 
                className="group relative px-10 py-4 bg-[#1F1F1F] hover:bg-[#0A9B6B] text-white text-sm font-medium tracking-[0.1em] uppercase transition-colors duration-500 flex items-center justify-center gap-4"
                onClick={() => window.location.href = '#collection'}
              >
                <span>Ver Colección</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-500" />
              </button>
            </motion.div>
          </motion.div>
          
          {/* Right Visual: Immersive Brand Photography */}
          <motion.div 
            className="relative flex justify-center items-center h-[500px] lg:h-[700px] w-full group"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
             <div className="absolute inset-x-4 inset-y-0 lg:inset-x-8 bg-white shadow-[0_30px_60px_rgba(0,0,0,0.04)] overflow-hidden relative">
               
               <Image 
                 src="/images/FAUNA/Fauna_emerald_jewelry_202604081649.jpeg"
                 alt="Fauna Emerald High Jewelry"
                 fill
                 className="object-cover scale-100 group-hover:scale-105 transition-transform duration-[20s] ease-out"
                 priority
               />
               
               {/* Elegant overlay framing */}
               <div className="absolute inset-4 border border-white/30 z-10 pointer-events-none mix-blend-overlay" />
               <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />

               <div className="absolute bottom-8 right-8 text-[10px] uppercase tracking-widest text-white/90 z-20 font-medium">
                 La Vida / El Alma
               </div>
             </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

// -----------------------------------------------------
// SECTION 2: THE NARRATIVE (PAS)
// -----------------------------------------------------
function ContrastSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-32 bg-white flex items-center">
      <div className="container mx-auto px-4 sm:px-8 lg:px-16 z-10 relative">
        <div className="max-w-4xl mx-auto text-center mb-24">
          <motion.h2 
            className="text-3xl md:text-5xl font-light text-[#1F1F1F] mb-8 leading-tight tracking-tight"
            initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            El lujo ordinario es frío.<br/>
            <span className="font-serif italic text-[#0A9B6B]">La verdadera exclusividad respira.</span>
          </motion.h2>
          <motion.div 
            className="w-px h-16 bg-[#1F1F1F]/10 mx-auto mb-8"
            initial={{ opacity: 0, height: 0 }} animate={isInView ? { opacity: 1, height: 64 } : {}} transition={{ duration: 1, delay: 0.3 }}
          />
          <motion.p 
            className="text-lg text-[#1F1F1F]/60 leading-relaxed font-light max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            Las piedras de laboratorio producidas en masa carecen de la energía de la tierra. Obtenemos nuestras esmeraldas directamente de las profundas vetas de Colombia, asegurando que cada inclusión cuente una historia de millones de años.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-px bg-[#1F1F1F]/5 max-w-5xl mx-auto">
          {/* Contrast Card 1 */}
          <motion.div 
            className=" bg-white flex flex-col justify-center relative overflow-hidden group"
            initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} transition={{ duration: 1, delay: 0.6 }}
          >
            <div className="absolute inset-0 z-0">
               <Image src="/images/FAUNA/Emerald_set_in_202604081640.jpeg" alt="Mass Production vs True Art" fill className="object-cover opacity-10 grayscale group-hover:grayscale-0 transition-all duration-1000" />
            </div>
            <div className="relative z-10 p-12 md:p-16 h-full bg-white/90 backdrop-blur-sm">
              <span className="text-[10px] tracking-widest uppercase text-[#1F1F1F]/40 mb-6 block">01 / Lo Comercial</span>
              <h3 className="text-2xl font-light mb-6 text-[#1F1F1F]">Alta Joyería Masiva</h3>
              <ul className="space-y-4 text-[#1F1F1F]/60 font-light text-sm">
                <li className="flex items-start gap-4"><span>—</span> Producción escalada y repetitiva.</li>
                <li className="flex items-start gap-4"><span>—</span> Piedras con tratamientos rudos.</li>
                <li className="flex items-start gap-4"><span>—</span> Valor derivado del marketing, no de la rareza.</li>
              </ul>
            </div>
          </motion.div>

          {/* Contrast Card 2 */}
          <motion.div 
            className=" bg-[#FAF7F0] flex flex-col justify-center relative overflow-hidden group"
            initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} transition={{ duration: 1, delay: 0.8 }}
          >
            <div className="absolute inset-0 z-0">
               <Image src="/images/FAUNA/Emerald_and_gold_202604081651.jpeg" alt="The Fauna Standard" fill className="object-cover opacity-20 group-hover:opacity-30 transition-all duration-1000" />
            </div>
            <div className="relative z-10 p-12 md:p-16 h-full">
              <span className="text-[10px] tracking-widest uppercase text-[#0A9B6B] mb-6 block drop-shadow-md">02 / El Estándar Fauna</span>
              <h3 className="text-2xl font-serif italic mb-6 text-[#1F1F1F]">Maison Fauna</h3>
              <ul className="space-y-4 text-[#1F1F1F]/80 font-light text-sm">
                <li className="flex items-start gap-4"><Check className="w-4 h-4 text-[#0A9B6B] mt-0.5 shrink-0" /> Esmeraldas 100% naturales, sin tratar o con aceite mínimo.</li>
                <li className="flex items-start gap-4"><Check className="w-4 h-4 text-[#0A9B6B] mt-0.5 shrink-0" /> Hechas a mano respetando la geometría orgánica de la piedra.</li>
                <li className="flex items-start gap-4"><Check className="w-4 h-4 text-[#0A9B6B] mt-0.5 shrink-0" /> Una inversión heredable directamente del origen.</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// -----------------------------------------------------
// SECTION 3: THE DETAILS (INTEREST)
// -----------------------------------------------------
function FeaturesSection() {
  const features = [
    {
      title: "Auténticas y Naturales",
      description: "Extraídas de Boyacá y Cundinamarca, históricamente celebradas por producir los verdes más vibrantes del mundo.",
      icon: Leaf,
    },
    {
      title: "Oro Sólido 18k",
      description: "Trabajamos estrictamente con oro amarillo ético de 18 quilates, abrazando la gema con su tono cálido y eterno.",
      icon: Diamond,
    },
    {
      title: "Diseño Bio-Orgánico",
      description: "El arte imitando la vida. Cada engaste se adapta a las líneas naturales de la piedra. No hay dos piezas idénticas.",
      icon: Shield,
    }
  ];

  return (
    <section className="py-32 bg-[#FAF7F0] relative border-t border-[#1F1F1F]/5 overflow-hidden">
       {/* Background ambient logo watermark */}
       <div className="absolute -right-[15%] top-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-[0.03] pointer-events-none">
          <Image src="/images/FAUNA/Fauna_logo_variations_202604081649.jpeg" alt="Fauna Watermark" fill className="object-contain" />
       </div>

       <div className="container mx-auto px-4 sm:px-8 lg:px-16 z-10 relative">
          <div className="text-center mb-24">
            <h2 className="text-3xl md:text-5xl font-light text-[#1F1F1F] tracking-tight mb-6">Forjadas para la eternidad.</h2>
            <div className="w-px h-12 bg-[#1F1F1F]/10 mx-auto" />
          </div>

          <div className="grid md:grid-cols-3 gap-12 lg:gap-24 max-w-6xl mx-auto">
            {features.map((feat, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 1, delay: idx * 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col items-center text-center group cursor-default"
              >
                <div className="w-16 h-16 rounded-full flex items-center justify-center bg-white shadow-[0_10px_20px_rgba(0,0,0,0.03)] mb-8 transition-transform duration-700 group-hover:-translate-y-2 relative overflow-hidden">
                  <feat.icon className="w-5 h-5 text-[#0A9B6B] relative z-10" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-medium text-[#1F1F1F] mb-4 tracking-wide">{feat.title}</h3>
                <p className="text-[#1F1F1F]/60 leading-relaxed font-light text-sm">{feat.description}</p>
              </motion.div>
            ))}
          </div>
       </div>
    </section>
  )
}

// -----------------------------------------------------
// SECTION 4: THE COLLECTION (DESIRE)
// -----------------------------------------------------
function ShowcaseSection() {
  const products = [
    { title: "La Monstera", specs: "Corte Gota 1.2ct • Oro Amarillo 18k", img: "/images/FAUNA/Emerald_rings_and_202604081640.jpeg", class: "col-span-1 md:col-span-2 row-span-2 aspect-[4/5] md:aspect-auto" },
    { title: "L'Orchidée", specs: "Corte Redondo 0.8ct • Oro Amarillo 18k", img: "/images/FAUNA/Emerald_jewelry_on_202604081650.jpeg", class: "col-span-1 aspect-square" },
    { title: "Aretes Selva", specs: "Gotas Gemelas 1.5ct tw.", img: "/images/FAUNA/Emerald_ear_climber_202604081650.jpeg", class: "col-span-1 aspect-square" },
  ];

  return (
    <section id="collection" className="py-32 bg-white relative">
      <div className="container mx-auto px-4 sm:px-8 lg:px-16 z-10 relative max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <span className="text-[10px] tracking-widest uppercase text-[#0A9B6B] mb-4 block">Colección Privada V</span>
            <h2 className="text-3xl md:text-5xl font-light tracking-tight text-[#1F1F1F]">Obras Maestras.</h2>
          </div>
          <button className="hidden md:flex text-xs tracking-widest uppercase text-[#1F1F1F] hover:text-[#0A9B6B] transition-colors items-center gap-3 pb-2 border-b border-[#1F1F1F] hover:border-[#0A9B6B]">
            Consultar Catálogo Completo <ArrowRight className="w-3 h-3" />
          </button>
        </div>

        {/* Photography Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-px bg-[#1F1F1F]/10 h-auto md:h-[800px] border border-[#1F1F1F]/10">
          {products.map((p, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: idx * 0.2 }}
              className={`relative bg-[#FAF7F0] group overflow-hidden flex flex-col ${p.class}`}
            >
              <div className="flex-1 w-full h-full relative p-12 transition-transform duration-[15s] ease-linear group-hover:scale-110">
                 <Image 
                   src={p.img} 
                   alt={p.title} 
                   fill 
                   className="object-cover"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-80" />
              </div>
              
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="text-xl font-serif italic text-white mb-2">{p.title}</h3>
                <p className="text-[11px] uppercase tracking-widest text-white/80">{p.specs}</p>
                <div className="mt-4 pt-4 border-t border-white/20 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <span className="text-[10px] tracking-widest uppercase text-white">Precios Privados</span>
                  <Plus className="w-3 h-3 text-white" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <button className="md:hidden mt-12 w-full text-xs tracking-widest uppercase text-[#1F1F1F] border border-[#1F1F1F]/20 py-4 flex items-center justify-center gap-3">
            Consultar Catálogo Completo <ArrowRight className="w-3 h-3" />
        </button>
      </div>
    </section>
  );
}

// -----------------------------------------------------
// SECTION 5: TRUST & HERITAGE (GUIDE)
// -----------------------------------------------------
function TrustSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-32 bg-[#FAF7F0] relative overflow-hidden">
       {/* Ambient Packaging Shot */}
       <div className="absolute inset-0 z-0">
          <Image src="/images/FAUNA/Jewelry_packaging_design_202604081650.jpeg" alt="Fauna Packaging" fill className="object-cover opacity-[0.07] grayscale" />
          <div className="absolute inset-0 bg-[#FAF7F0]/80 backdrop-blur-sm" />
       </div>

       <div className="container mx-auto px-4 max-w-4xl text-center relative z-10">
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             animate={isInView ? { opacity: 1, y: 0 } : {}}
             transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
             <div className="flex justify-center gap-3 mb-10">
               <Star className="w-4 h-4 text-[#D4AF37] fill-current" />
               <Star className="w-4 h-4 text-[#D4AF37] fill-current" />
               <Star className="w-4 h-4 text-[#D4AF37] fill-current" />
               <Star className="w-4 h-4 text-[#D4AF37] fill-current" />
               <Star className="w-4 h-4 text-[#D4AF37] fill-current" />
             </div>
             
             <h3 className="text-2xl md:text-3xl lg:text-4xl font-light text-[#1F1F1F] mb-12 leading-relaxed">
               "Sostener mi anillo Fauna por primera vez fue transcendental. Sientes el peso de la naturaleza y una elegancia que el lujo genérico simplemente no puede replicar."
             </h3>
             
             <p className="text-[11px] uppercase tracking-[0.2em] text-[#1F1F1F]/60">
               — Catalina M., Coleccionista Privada
             </p>

             <div className="mt-24 grid grid-cols-2 gap-px bg-[#1F1F1F]/10 border border-[#1F1F1F]/10">
                <div className="bg-white/80 backdrop-blur-md py-12 flex flex-col items-center justify-center">
                   <span className="text-2xl md:text-3xl font-light text-[#1F1F1F] mb-2">GIA & CDTEC</span>
                   <span className="text-[10px] tracking-widest uppercase text-[#1F1F1F]/50">Piedras Certificadas</span>
                </div>
                <div className="bg-white/80 backdrop-blur-md py-12 flex flex-col items-center justify-center">
                   <span className="text-2xl md:text-3xl font-light text-[#1F1F1F] mb-2">100%</span>
                   <span className="text-[10px] tracking-widest uppercase text-[#1F1F1F]/50">Hecho a Mano en LATAM</span>
                </div>
             </div>
          </motion.div>
       </div>
    </section>
  )
}

// -----------------------------------------------------
// SECTION 6: FINAL CTA (ACTION)
// -----------------------------------------------------
function FinalCTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="py-32 relative bg-[#1F1F1F] text-white overflow-hidden">
      
      {/* Background visual */}
      <div className="absolute inset-0 opacity-20 pointer-events-none mix-blend-overlay">
         <Image src="/images/FAUNA/Emerald_set_in_202604081640.jpeg" alt="Fauna Emerald Background" fill className="object-cover" />
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center max-w-2xl">
        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           animate={isInView ? { opacity: 1, scale: 1 } : {}}
           transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex justify-center mb-12">
             <Image src="/images/FAUNA/Fauna_logo_with_202604081651.jpeg" alt="Fauna Signature Logo" width={80} height={80} className="opacity-80 mix-blend-screen" />
          </div>

          <span className="inline-block text-[#D4AF37] text-[10px] font-semibold tracking-[0.3em] uppercase mb-8">
            Consulta Privada
          </span>
          
          <h2 className="text-4xl md:text-5xl font-light mb-8 leading-tight">
            Asegura tu pedazo de <span className="font-serif italic text-white/70">Colombia.</span>
          </h2>
          
          <p className="text-lg text-white/60 mb-16 font-light leading-relaxed">
            Nuestra producción es extremadamente limitada debido a la rareza de nuestras piedras y al meticuloso proceso artesanal. Habla directamente con nuestros maestros joyeros hoy.
          </p>

          <Link href="https://wa.me/549111222333" target="_blank" passHref>
            <button className="w-full sm:w-auto px-12 py-5 bg-[#0A9B6B] hover:bg-[#088259] text-white text-xs font-semibold tracking-[0.15em] uppercase transition-all duration-500 shadow-[0_10px_30px_rgba(10,155,107,0.3)] hover:shadow-[0_15px_40px_rgba(10,155,107,0.5)] flex items-center justify-center gap-4 mx-auto">
               <Phone className="w-4 h-4" /> 
               <span>Consultar por WhatsApp</span>
            </button>
          </Link>
          
          <p className="mt-12 text-[10px] text-white/40 tracking-widest uppercase flex items-center justify-center gap-3">
             <Shield className="w-3 h-3" /> 100% Confidencial y Seguro
          </p>
        </motion.div>
      </div>
    </section>
  )
}
