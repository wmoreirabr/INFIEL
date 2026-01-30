
import React, { useState, useEffect } from 'react';
import { 
  CheckCircle, 
  ArrowRight, 
  ShieldCheck, 
  Eye, 
  Lock, 
  AlertTriangle, 
  Star, 
  Clock,
  Download,
  Users,
  Smartphone,
  Heart
} from 'lucide-react';

const HOTMART_LINK = "https://pay.hotmart.com/W104172073B?off=6os2h6g5";

/**
 * 1. PERSISTENT CALL TO ACTION (STICKY BOTTOM)
 */
const StickyCTA: React.FC = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShow(window.scrollY > 600);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md border-t border-gray-200 p-4 z-50 flex justify-between items-center md:px-10 animate-fade-in-up">
      <div className="hidden md:block">
        <p className="font-bold text-gray-800 text-sm">Señales que No Mienten</p>
        <p className="text-red-600 text-xs font-semibold uppercase tracking-tighter">Oferta de tiempo limitado</p>
      </div>
      <a 
        href={HOTMART_LINK}
        className="w-full md:w-auto bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-all flex items-center justify-center gap-2 group"
      >
        <span>DESCARGAR AHORA</span>
        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
      </a>
    </div>
  );
};

const Testimonial: React.FC<{ name: string; text: string; rating: number }> = ({ name, text, rating }) => (
  <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col gap-3">
    <div className="flex text-yellow-400">
      {[...Array(rating)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
    </div>
    <p className="text-gray-600 italic">"{text}"</p>
    <p className="font-bold text-gray-900 mt-auto">— {name}</p>
  </div>
);

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 selection:bg-red-100 selection:text-red-900">
      
      {/* 1. COPY PRINCIPAL HEADLINE + SUBHEAD + IMAGE */}
      <section className="relative bg-white pt-16 pb-12 px-4 overflow-hidden border-b border-gray-100">
        <div className="absolute top-0 right-0 w-64 h-64 bg-red-50 rounded-full blur-3xl opacity-50 -mr-32 -mt-32"></div>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 relative z-10">
          <div className="md:w-3/5 text-center md:text-left">
            <span className="inline-block px-4 py-1.5 bg-red-50 text-red-600 rounded-full text-xs font-bold uppercase tracking-wider mb-6 animate-pulse">
              Atención: Guía de Intuición y Verdad
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900 mb-6 leading-tight">
              Si tu intuición te grita… quizá ya viste <span className="text-red-600 underline decoration-red-200 decoration-4">señales que no quieres aceptar</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-10 leading-relaxed max-w-2xl">
              Descubrir la verdad duele menos que vivir en duda. Aprende a leer los patrones que delatan la infidelidad antes de que sea demasiado tarde.
            </p>
            
            <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
              <a 
                href={HOTMART_LINK}
                className="w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white font-extrabold text-lg py-5 px-10 rounded-2xl shadow-2xl shadow-red-200 transform hover:-translate-y-1 transition-all flex items-center justify-center gap-3 group text-center"
              >
                <span>SÍ, QUIERO LA VERDAD</span>
                <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <div className="flex flex-col items-center md:items-start">
                <p className="text-xs text-gray-400 flex items-center gap-1.5">
                  <Lock size={12} /> Compra 100% discreta
                </p>
                <div className="flex text-yellow-400 mt-1">
                  {[...Array(5)].map((_, i) => <Star key={i} size={12} fill="currentColor" />)}
                  <span className="text-[10px] text-gray-400 ml-1">(+500 reseñas)</span>
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-2/5">
            <img 
              src="https://i.ibb.co/q3bC79h9/Chat-GPT-Image-30-de-jan-de-2026-08-35-37.png" 
              alt="Protagonista descubriendo la verdad" 
              className="w-full h-auto rounded-3xl shadow-2xl border-4 border-white transform rotate-2"
            />
          </div>
        </div>
      </section>

      {/* 2. ELEVAR NIVEL DE CONSCIENCIA CON MOCKUP ACTUALIZADO */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 relative group">
            <div className="absolute inset-0 bg-red-600 rounded-3xl blur-2xl opacity-10 group-hover:opacity-20 transition-opacity"></div>
            <img 
              src="https://i.ibb.co/xS7bYMQH/Chat-GPT-Image-30-de-jan-de-2026-08-49-45.png" 
              alt="Mockup Ebook Señales que No Mienten" 
              className="relative w-full h-auto rounded-3xl shadow-2xl border border-gray-200 transform md:-rotate-3 group-hover:rotate-0 transition-transform duration-500"
            />
            {/* Overlay badge for the mockup */}
            <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-2xl shadow-xl border border-gray-100 hidden sm:block">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-green-50 rounded-full flex items-center justify-center text-green-600">
                  <Download size={20} />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-gray-400 uppercase">Formato</p>
                  <p className="text-sm font-bold text-gray-800">PDF Digital</p>
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 space-y-6">
            <h2 className="text-3xl font-bold leading-tight">La mayoría descubre la infidelidad demasiado tarde, aprende a leer las señales antes</h2>
            <p className="text-gray-600 text-lg">
              No se trata de celos ni paranoia. A veces, tu corazón ya sabe la verdad, pero tu mente necesita pruebas concretas para dar el siguiente paso. Este eBook es el mapa que necesitas para navegar la duda con inteligencia emocional.
            </p>
            <ul className="space-y-4">
              <li className="flex gap-3 items-start">
                <CheckCircle className="text-green-500 shrink-0 mt-1" size={20} />
                <span>Deja de cuestionar tu salud mental y empieza a confiar en tus ojos.</span>
              </li>
              <li className="flex gap-3 items-start">
                <CheckCircle className="text-green-500 shrink-0 mt-1" size={20} />
                <span>Identifica cambios sutiles en la rutina que delatan una doble vida.</span>
              </li>
              <li className="flex gap-3 items-start">
                <CheckCircle className="text-green-500 shrink-0 mt-1" size={20} />
                <span>Entiende la psicología detrás del engaño digital.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 3. CTA FAZER DOWNLOAD */}
      <section className="bg-gray-900 py-12 px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <p className="text-red-400 font-bold mb-4 uppercase tracking-widest text-sm italic">"La mentira puede correr, pero la verdad siempre llega primero"</p>
          <a 
            href={HOTMART_LINK}
            className="inline-flex items-center gap-2 text-white bg-transparent border-2 border-white/20 hover:border-white/50 px-8 py-3 rounded-xl transition-all font-semibold"
          >
            Obtén acceso inmediato a la guía completa
          </a>
        </div>
      </section>

      {/* 4. FEEDBACKS (Social Proof) */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Historias reales de personas que recuperaron su paz</h2>
            <p className="text-gray-500">Más de 500 personas han utilizado este método para salir de la incertidumbre.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Testimonial 
              name="María G." 
              text="Pensé que estaba loca, mis amigas decían que eran celos. Este libro me enseñó a observar sin pelear y descubrí que tenía razón. Me ahorró años de mentiras." 
              rating={5} 
            />
            <Testimonial 
              name="Andrés V." 
              text="No sabía cómo confrontar a mi pareja sin parecer desesperado. Las estrategias de comunicación del capítulo 4 me ayudaron a que ella misma confesara la verdad." 
              rating={5} 
            />
            <Testimonial 
              name="Sofía R." 
              text="Lo mejor es que te ayuda a proteger tu corazón antes que nada. No se trata solo de pillar la mentira, sino de valorarte tú primero." 
              rating={5} 
            />
          </div>
        </div>
      </section>

      {/* 5. O QUE VOCÊ VAI RECEBER (CONTEÚDO + COPY) */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-red-600 font-bold text-sm tracking-widest uppercase">Estructura del Programa</span>
            <h2 className="text-4xl font-extrabold mt-2">¿Qué encontrarás dentro de esta guía?</h2>
          </div>
          
          <div className="space-y-6">
            {[
              { cap: "Capítulo 1", title: "Micro-señales de comportamiento", desc: "Patrones psicológicos que casi nadie percebe. Desde el lenguaje corporal hasta el tono de voz.", icon: <Eye className="text-red-600" /> },
              { cap: "Capítulo 2", title: "El rastro digital invisible", desc: "Cómo funcionan las redes sociales y patrones de mensajería sin necesidad de ser un hacker.", icon: <Smartphone className="text-blue-600" /> },
              { cap: "Capítulo 3", title: "Instinto vs. Paranoia", desc: "Cómo diferenciar una sospecha real de tus propios traumas pasados.", icon: <AlertTriangle className="text-amber-600" /> },
              { cap: "Capítulo 4", title: "Conversación Estratégica", desc: "Cómo hablar sin confrontar de forma agresiva para que la verdad fluya naturalmente.", icon: <Users className="text-purple-600" /> },
              { cap: "Capítulo 5", title: "Plan de Acción 'Post-Verdad'", desc: "Qué hacer si confirmas la sospecha. Cómo protegerte legal y emocionalmente.", icon: <ShieldCheck className="text-green-600" /> },
            ].map((item, idx) => (
              <div key={idx} className="flex gap-6 p-6 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow bg-gray-50/50">
                <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center shrink-0">
                  {item.icon}
                </div>
                <div>
                  <p className="text-xs font-bold text-red-600 uppercase mb-1">{item.cap}</p>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CTA DE NOVO */}
      <div className="flex justify-center py-10">
        <a 
          href={HOTMART_LINK}
          className="bg-red-600 text-white font-bold py-5 px-12 rounded-2xl hover:scale-105 transition-transform shadow-xl"
        >
          OBTENER EL EBOOK COMPLETO AHORA
        </a>
      </div>

      {/* 7. PARA QUEM SERVE (MATAR OBJEÇÕES) */}
      <section className="py-20 px-4 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">¿Esta guía es para ti?</h2>
          <div className="grid md:grid-cols-2 gap-10">
            <div className="space-y-6">
              <h3 className="text-red-400 font-bold flex items-center gap-2">
                <CheckCircle size={20} /> ES PARA TI SI...
              </h3>
              <ul className="space-y-4">
                <li className="flex gap-3 text-gray-300">
                  <span className="text-red-500 font-bold">•</span>
                  <span>Sientes que algo cambió pero no logras explicar qué es exactamente.</span>
                </li>
                <li className="flex gap-3 text-gray-300">
                  <span className="text-red-500 font-bold">•</span>
                  <span>Te han llamado "paranoica/o" o "celosa/o" cada vez que preguntas algo.</span>
                </li>
                <li className="flex gap-3 text-gray-300">
                  <span className="text-red-500 font-bold">•</span>
                  <span>Quieres saber la verdad para tomar una decisión informada sobre tu futuro.</span>
                </li>
              </ul>
            </div>
            <div className="space-y-6">
              <h3 className="text-gray-400 font-bold flex items-center gap-2">
                <AlertTriangle size={20} /> NO ES PARA TI SI...
              </h3>
              <ul className="space-y-4">
                <li className="flex gap-3 text-gray-500">
                  <span className="font-bold">•</span>
                  <span>Buscas software ilegal de espionaje o hacking (no promovemos nada ilegal).</span>
                </li>
                <li className="flex gap-3 text-gray-500">
                  <span className="font-bold">•</span>
                  <span>Prefieres seguir ignorando la realidad por miedo a la soledad.</span>
                </li>
                <li className="flex gap-3 text-gray-500">
                  <span className="font-bold">•</span>
                  <span>Buscas un método para vengarte (esta guía es de sanación y verdad).</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 8. MAIS FEED BACKS */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto flex flex-col items-center gap-8">
          <div className="flex -space-x-4 mb-4">
            {[1, 2, 3, 4, 5].map(i => (
              <img key={i} src={`https://picsum.photos/seed/${i+10}/100/100`} className="w-12 h-12 rounded-full border-2 border-white" alt="user" />
            ))}
            <div className="w-12 h-12 rounded-full border-2 border-white bg-red-600 flex items-center justify-center text-xs font-bold text-white">
              +500
            </div>
          </div>
          <p className="text-xl text-center font-medium italic text-gray-700">
            "Antes de acusar, aprendí a observar. La verdad salió a la luz de la forma más natural gracias a los consejos de este libro. Ahora por fin puedo dormir tranquila."
          </p>
          <p className="font-bold">— Laura M., Usuaria verificada</p>
        </div>
      </section>

      {/* 9. BENEFÍCIOS */}
      <section className="py-20 px-4 bg-white border-y border-gray-100">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8">
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-red-50 text-red-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <ShieldCheck size={32} />
            </div>
            <h4 className="font-bold mb-2">Paz Mental</h4>
            <p className="text-sm text-gray-500">Elimina la ansiedad de no saber qué está pasando en tu relación.</p>
          </div>
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Heart size={32} />
            </div>
            <h4 className="font-bold mb-2">Autoestima</h4>
            <p className="text-sm text-gray-500">Recupera el valor que te han quitado con mentiras y manipulaciones.</p>
          </div>
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-green-50 text-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Lock size={32} />
            </div>
            <h4 className="font-bold mb-2">Privacidad</h4>
            <p className="text-sm text-gray-500">Aprende métodos discretos que no requieren confrontaciones explosivas.</p>
          </div>
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-purple-50 text-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <ArrowRight size={32} />
            </div>
            <h4 className="font-bold mb-2">Nuevos Comienzos</h4>
            <p className="text-sm text-gray-500">Toma el control de tu vida de nuevo, sea cual sea el resultado.</p>
          </div>
        </div>
      </section>

      {/* 10. CTA DE NOVO */}
      <div className="flex justify-center py-16 px-4">
        <div className="max-w-3xl w-full bg-gradient-to-br from-red-600 to-red-800 rounded-3xl p-10 text-center text-white shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[radial-gradient(circle,white_1px,transparent_1px)] [background-size:20px_20px]"></div>
          <h2 className="text-3xl font-bold mb-6 relative">Tu pareja debe darte paz, no dudas constantes</h2>
          <p className="mb-8 opacity-90 relative">No permitas que un error enojado arruine tu estabilidad emocional. Aprende a controlar tus emociones hoy mismo.</p>
          <a 
            href={HOTMART_LINK}
            className="bg-white text-red-600 font-extrabold py-4 px-12 rounded-2xl hover:bg-gray-100 transition-colors relative shadow-lg inline-block"
          >
            SÍ, QUIERO PAZ MENTAL
          </a>
        </div>
      </div>

      {/* 11. TEXTO UMA FORMULA COMPROVADA + URGENCIA ACTUALIZADO */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold mb-8">Una fórmula comprobada para revelar la verdad</h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-12 mb-12">
            <div className="relative">
              <img 
                src="https://i.ibb.co/nqQzgGLs/Chat-GPT-Image-30-de-jan-de-2026-08-38-25.png" 
                className="w-64 rounded-xl shadow-xl border-4 border-white rotate-2" 
                alt="Contenido del curso Señales que No Mienten" 
              />
              <div className="absolute -top-4 -left-4 bg-yellow-400 text-black font-black px-4 py-2 rounded-lg shadow-lg rotate-12">
                ¡MÁS VENDIDO!
              </div>
            </div>
            <div className="text-left space-y-4 max-w-sm">
              <div className="flex items-center gap-2 text-red-600 font-bold">
                <Clock size={20} />
                <span>OFERTA EXPIRA PRONTO</span>
              </div>
              <p className="text-gray-600">
                Esta metodología ha sido perfeccionada tras analizar cientos de casos reales de infidelidad y comportamiento humano. No es una guía teórica, es un manual de supervivencia emocional.
              </p>
              <div className="bg-red-50 p-4 rounded-xl border border-red-100">
                <p className="text-red-700 text-sm font-semibold">"A veces una sola pregunta revela todo. Aprende cuál es esa pregunta dentro del capítulo 4."</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 12. OFERTA COM ANCORAGEM + CTA FINAL */}
      <section id="offer" className="py-24 px-4 bg-gray-50 border-t border-gray-200">
        <div className="max-w-md mx-auto bg-white rounded-[2rem] shadow-2xl border-2 border-red-600 overflow-hidden transform hover:scale-[1.02] transition-transform duration-300">
          <div className="bg-red-600 py-6 px-8 text-white text-center">
            <h3 className="text-xl font-bold uppercase tracking-widest">Oferta Exclusiva Hoy</h3>
          </div>
          <div className="p-10 space-y-8">
            <div className="text-center">
              <p className="text-gray-400 line-through text-lg font-medium">Precio Original: $67.00</p>
              <div className="flex items-center justify-center gap-2">
                <span className="text-5xl font-black text-gray-900">$12</span>
                <span className="text-xl font-bold text-gray-500">USD</span>
              </div>
              <p className="text-green-600 font-bold mt-2 flex items-center justify-center gap-1 italic">
                <ShieldCheck size={18} /> Ahorras 82%
              </p>
            </div>

            <div className="space-y-4 border-t border-gray-100 pt-8">
              <div className="flex gap-3 text-sm">
                <CheckCircle className="text-red-600 shrink-0" size={18} />
                <span>eBook Completo (PDF descargable)</span>
              </div>
              <div className="flex gap-3 text-sm">
                <CheckCircle className="text-red-600 shrink-0" size={18} />
                <span>Acceso de por vida desde cualquier dispositivo</span>
              </div>
              <div className="flex gap-3 text-sm">
                <CheckCircle className="text-red-600 shrink-0" size={18} />
                <span>Garantía de satisfacción de 7 días</span>
              </div>
              <div className="flex gap-3 text-sm font-bold text-gray-900">
                <CheckCircle className="text-red-600 shrink-0" size={18} />
                <span>BONUS: Lista de 'Banderas Rojas' Digitales</span>
              </div>
            </div>

            <a 
              href={HOTMART_LINK}
              className="w-full bg-red-600 hover:bg-red-700 text-white font-black text-xl py-6 rounded-2xl shadow-xl shadow-red-200 flex flex-col items-center gap-1 group transition-all text-center"
            >
              <span>COMPRAR AHORA</span>
              <span className="text-[10px] opacity-80 font-normal">Acceso inmediato tras el pago</span>
            </a>

            <div className="flex flex-col items-center gap-3 opacity-60">
              <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" className="h-4" alt="paypal" />
              <div className="flex gap-2">
                <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" className="h-3" alt="visa" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" className="h-3" alt="mastercard" />
              </div>
              <p className="text-[10px]">Pago procesado de forma 100% segura por Stripe/PayPal</p>
            </div>
          </div>
        </div>
        
        <div className="mt-16 text-center text-gray-400 text-sm max-w-lg mx-auto">
          <p>© 2024 Señales que No Mienten. Todos los derechos reservados. El contenido de este sitio es puramente educativo y no reemplaza el consejo legal o terapéutico profesional.</p>
        </div>
      </section>

      <StickyCTA />
    </div>
  );
};

export default App;
