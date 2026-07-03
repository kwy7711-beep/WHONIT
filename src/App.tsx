import { useState, useEffect, FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Menu, 
  X, 
  Globe, 
  Calendar, 
  Clock, 
  Users, 
  Check, 
  ChevronDown, 
  ChevronUp, 
  MapPin, 
  Phone, 
  Sparkles, 
  Target, 
  Swords, 
  Coffee, 
  Instagram, 
  Youtube, 
  Facebook, 
  Compass,
  ArrowRight,
  User,
  MessageSquare,
  Lock,
  ShieldCheck,
  ExternalLink,
  Save
} from "lucide-react";

import { translations, drinks, desserts } from "./data";

// Import our beautiful generated images
import heroBg from "./assets/images/whonit_hero_bg_1782985615714.jpg";

export default function App() {
  const [lang, setLang] = useState<"ja" | "ko">("ja");
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [menuTab, setMenuTab] = useState<"drinks" | "desserts">("drinks");
  const [faqOpen, setFaqOpen] = useState<Record<number, boolean>>({});
  
  // Reservation Form State
  const [resName, setResName] = useState("");
  const [resPhone, setResPhone] = useState("");
  const [resDate, setResDate] = useState("");
  const [resTime, setResTime] = useState("");
  const [resSize, setResSize] = useState("2");
  const [resProgram, setResProgram] = useState("none");
  const [resNotes, setResNotes] = useState("");
  const [formError, setFormError] = useState("");
  const [showReceipt, setShowReceipt] = useState(false);
  const [receiptCode, setReceiptCode] = useState("");

  // Admin Mode State
  const [showAdminModal, setShowAdminModal] = useState(false);
  const [adminPassword, setAdminPassword] = useState("");
  const [adminVerified, setAdminVerified] = useState(false);
  const [adminRedirectUrl, setAdminRedirectUrl] = useState(() => {
    return localStorage.getItem("whonit_admin_redirect_url") || "https://jangyeong.netlify.app/";
  });
  const [adminError, setAdminError] = useState("");
  const [adminSaveSuccess, setAdminSaveSuccess] = useState(false);
  const [showBookingAdminNotice, setShowBookingAdminNotice] = useState(false);

  const t = translations[lang];

  // Track scrolling to modify header style
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleLanguage = () => {
    setLang((prev) => (prev === "ja" ? "ko" : "ja"));
  };

  const toggleFaq = (index: number) => {
    setFaqOpen((prev) => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const handleBookingSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!resName.trim() || !resPhone.trim() || !resDate || !resTime) {
      setFormError(t.reservation.validationError);
      return;
    }
    setFormError("");
    setShowBookingAdminNotice(true);
    
    // Generate an authentic look booking receipt code
    const dateStr = resDate.replace(/-/g, "");
    const randomNum = Math.floor(100 + Math.random() * 900);
    setReceiptCode(`WHONIT-${dateStr}-${randomNum}`);
    setShowReceipt(true);
  };

  const closeReceiptModal = () => {
    setShowReceipt(false);
    // Reset form after closing receipt
    setResName("");
    setResPhone("");
    setResDate("");
    setResTime("");
    setResSize("2");
    setResProgram("none");
    setResNotes("");
  };

  const handleAdminVerify = (e: FormEvent) => {
    e.preventDefault();
    if (adminPassword === "0194") {
      setAdminVerified(true);
      setAdminError("");
    } else {
      setAdminError(t.admin.incorrectPasswordError);
    }
  };

  const handleSaveAdminLink = (e: FormEvent) => {
    e.preventDefault();
    if (!adminRedirectUrl.trim()) {
      setAdminError(t.admin.urlRequiredError);
      return;
    }
    localStorage.setItem("whonit_admin_redirect_url", adminRedirectUrl);
    setAdminSaveSuccess(true);
    setAdminError("");
    setTimeout(() => setAdminSaveSuccess(false), 3000);
  };

  const closeAdminModal = () => {
    setShowAdminModal(false);
    setAdminPassword("");
    setAdminVerified(false);
    setAdminError("");
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
    setMobileMenuOpen(false);
  };

  return (
    <div id="app-root" className="min-h-screen bg-ninja-dark text-gray-300 font-sans selection:bg-ninja-vermilion selection:text-white antialiased">
      
      {/* HEADER SECTION */}
      <header 
        id="main-header"
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b ${
          scrolled 
            ? "bg-ninja-dark/95 backdrop-blur-md border-ninja-vermilion/30 py-3 shadow-lg" 
            : "bg-transparent border-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Logo Brand area */}
          <div 
            id="brand-logo" 
            className="flex items-center space-x-3 cursor-pointer group"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <div className="w-10 h-10 rounded-full border-2 border-ninja-vermilion flex items-center justify-center bg-ninja-charcoal transition-transform duration-500 group-hover:rotate-180">
              {/* Elegant Shuriken Crest Mon */}
              <svg className="w-6 h-6 text-ninja-vermilion fill-current" viewBox="0 0 24 24">
                <path d="M12,2 L14,9 L21,7 L16,12 L21,17 L14,15 L12,22 L10,15 L3,17 L8,12 L3,7 L10,9 Z" />
              </svg>
            </div>
            <div>
              <div className="flex flex-col">
                <span className="font-serif font-bold text-lg sm:text-xl tracking-wider text-white leading-tight">
                  {lang === "ja" ? "カフェ・ウォニット" : "카페 워닛"}
                </span>
                <span className="font-mono text-[10px] text-ninja-gold tracking-widest uppercase leading-none">
                  Cafe WHONIT
                </span>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav id="desktop-nav" className="hidden lg:flex items-center space-x-6">
            <button onClick={() => scrollToSection("about")} className="text-sm font-medium hover:text-ninja-vermilion transition-colors cursor-pointer">{t.nav.about}</button>
            <button onClick={() => scrollToSection("menu")} className="text-sm font-medium hover:text-ninja-vermilion transition-colors cursor-pointer">{t.nav.menu}</button>
            <button onClick={() => scrollToSection("experience")} className="text-sm font-medium hover:text-ninja-vermilion transition-colors cursor-pointer">{t.nav.experience}</button>
            <button onClick={() => scrollToSection("access")} className="text-sm font-medium hover:text-ninja-vermilion transition-colors cursor-pointer">{t.nav.access}</button>
            <button onClick={() => scrollToSection("faq")} className="text-sm font-medium hover:text-ninja-vermilion transition-colors cursor-pointer">{t.nav.faq}</button>
          </nav>

          {/* Header Action Controls */}
          <div id="header-actions" className="hidden sm:flex items-center space-x-4">
            {/* Language Switch Button */}
            <button 
              id="lang-toggle-btn"
              onClick={toggleLanguage}
              className="flex items-center space-x-2 px-3 py-1.5 rounded border border-ninja-gold/40 hover:border-ninja-gold bg-ninja-charcoal text-xs text-ninja-gold transition-colors duration-200 cursor-pointer"
              title="Change Language"
            >
              <Globe className="w-3.5 h-3.5 text-ninja-gold animate-pulse" />
              <span className="font-semibold">{lang === "ja" ? "한국어" : "日本語"}</span>
            </button>

            {/* Sticky Header CTA Reservation Button */}
            <button 
              id="header-cta"
              onClick={() => scrollToSection("reservation")}
              className="px-4 py-2 bg-ninja-vermilion hover:bg-ninja-vermilion-hover text-white text-xs font-bold tracking-widest uppercase rounded transition-all duration-300 hover:shadow-lg hover:shadow-ninja-vermilion/20 cursor-pointer border-b-2 border-ninja-vermilion-hover"
            >
              {t.nav.reservation}
            </button>
          </div>

          {/* Mobile UI Buttons (Hamberger & Lang) */}
          <div className="flex lg:hidden items-center space-x-3">
            <button 
              onClick={toggleLanguage}
              className="p-1.5 rounded border border-ninja-gold/40 bg-ninja-charcoal text-ninja-gold text-xs flex items-center space-x-1 cursor-pointer"
            >
              <Globe className="w-3.5 h-3.5" />
              <span>{lang === "ja" ? "KO" : "JA"}</span>
            </button>
            <button 
              id="mobile-menu-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-white hover:text-ninja-vermilion transition-colors cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </header>

      {/* MOBILE NAVIGATION SIDE DRAWER */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            id="mobile-drawer"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", bounce: 0, duration: 0.4 }}
            className="fixed inset-y-0 right-0 w-full sm:w-80 bg-ninja-charcoal/98 z-40 shadow-2xl flex flex-col pt-24 px-6 border-l border-ninja-vermilion/20"
          >
            {/* Background Wagara pattern subtle watermark */}
            <div className="absolute inset-0 pattern-seigaiha opacity-10 pointer-events-none" />

            <div className="relative z-10 flex flex-col space-y-5 text-lg font-serif">
              <button 
                onClick={() => scrollToSection("about")} 
                className="text-left py-2 border-b border-ninja-slate hover:text-ninja-vermilion transition-colors flex items-center justify-between"
              >
                <span>{t.nav.about}</span>
                <span className="text-xs text-ninja-gold">01</span>
              </button>
              <button 
                onClick={() => scrollToSection("menu")} 
                className="text-left py-2 border-b border-ninja-slate hover:text-ninja-vermilion transition-colors flex items-center justify-between"
              >
                <span>{t.nav.menu}</span>
                <span className="text-xs text-ninja-gold">02</span>
              </button>
              <button 
                onClick={() => scrollToSection("experience")} 
                className="text-left py-2 border-b border-ninja-slate hover:text-ninja-vermilion transition-colors flex items-center justify-between"
              >
                <span>{t.nav.experience}</span>
                <span className="text-xs text-ninja-gold">03</span>
              </button>
              <button 
                onClick={() => scrollToSection("access")} 
                className="text-left py-2 border-b border-ninja-slate hover:text-ninja-vermilion transition-colors flex items-center justify-between"
              >
                <span>{t.nav.access}</span>
                <span className="text-xs text-ninja-gold">04</span>
              </button>
              <button 
                onClick={() => scrollToSection("faq")} 
                className="text-left py-2 border-b border-ninja-slate hover:text-ninja-vermilion transition-colors flex items-center justify-between"
              >
                <span>{t.nav.faq}</span>
                <span className="text-xs text-ninja-gold">05</span>
              </button>
            </div>

            <div className="relative z-10 mt-12 flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection("reservation")}
                className="w-full py-3 bg-ninja-vermilion text-white text-center font-bold tracking-wider rounded border-b-2 border-ninja-vermilion-hover"
              >
                {t.nav.reservation}
              </button>
              <p className="text-center text-[10px] text-gray-500 font-mono tracking-widest uppercase">
                Shinshu Kirisawa • WHONIT
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* SECTION 1: HERO SECTION */}
      <section 
        id="hero-section"
        className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-black"
      >
        {/* Background Image with Ambient Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src={heroBg} 
            alt="Traditional Japanese entrance at night" 
            className="w-full h-full object-cover opacity-55 scale-105 transition-transform duration-10000"
            referrerPolicy="no-referrer"
          />
          {/* Vignette & Color filters */}
          <div className="absolute inset-0 bg-gradient-to-t from-ninja-dark via-ninja-dark/40 to-ninja-dark/80" />
          <div className="absolute inset-0 bg-radial-gradient from-transparent to-ninja-dark/90 opacity-80" />
        </div>

        {/* Ambient Golden particles/embers drifting */}
        <div className="absolute inset-0 pointer-events-none z-1">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-ninja-gold/30 rounded-full blur-sm animate-pulse duration-3000" />
          <div className="absolute bottom-1/3 right-1/4 w-3 h-3 bg-ninja-gold/20 rounded-full blur-md animate-pulse duration-5000" />
          <div className="absolute top-1/2 right-1/3 w-1.5 h-1.5 bg-ninja-gold/40 rounded-full blur-none animate-pulse duration-2000" />
        </div>

        {/* Hero Main Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-10">
          
          {/* Ancient Family Crest Mon - SVG */}
          <motion.div 
            id="hero-mon-crest"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="mx-auto mb-6 w-20 h-20 rounded-full border border-ninja-gold/30 flex items-center justify-center bg-ninja-dark/80 backdrop-blur-sm relative"
          >
            <div className="absolute inset-0 rounded-full border border-dashed border-ninja-gold/15 animate-spin duration-20000" />
            <svg className="w-12 h-12 text-ninja-gold fill-current" viewBox="0 0 100 100">
              {/* Complex Japanese-style Crest (Aesthetic Ninja Star/Wheel Mon) */}
              <circle cx="50" cy="50" r="10" className="stroke-ninja-gold stroke-2 fill-none" />
              <path d="M50,10 L50,90 M10,50 L90,50 M21.7,21.7 L78.3,78.3 M21.7,78.3 L78.3,21.7" className="stroke-ninja-gold/30 stroke-1" />
              <path d="M50,15 L55,35 L75,35 L58,47 L65,68 L50,55 L35,68 L42,47 L25,35 L45,35 Z" />
            </svg>
          </motion.div>

          {/* Slogan */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <p className="text-xs sm:text-sm font-semibold tracking-widest text-ninja-gold uppercase mb-3">
              {lang === "ja" ? "霧沢温泉郷 伝統演武喫茶" : "키리사와 온천향 전통 연무 찻집"}
            </p>
          </motion.div>

          {/* Main Brand Title */}
          <motion.h1 
            id="hero-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="font-serif font-bold text-4xl sm:text-6xl md:text-7xl text-white tracking-widest leading-none mb-4"
          >
            {t.hero.titleJa}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="flex items-center justify-center space-x-3 mb-6"
          >
            <span className="h-[1px] w-8 bg-ninja-vermilion" />
            <span className="font-mono text-xs sm:text-sm tracking-[0.3em] text-ninja-gold font-bold">
              {t.hero.titleSub}
            </span>
            <span className="h-[1px] w-8 bg-ninja-vermilion" />
          </motion.div>

          {/* Slogan Details */}
          <motion.p 
            id="hero-slogan"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-gray-200 font-serif leading-relaxed tracking-wider mb-10"
          >
            {t.hero.slogan}
          </motion.p>

          {/* Main Action Buttons */}
          <motion.div 
            id="hero-ctas"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4"
          >
            <button 
              onClick={() => scrollToSection("reservation")}
              className="w-full sm:w-auto px-8 py-4 bg-ninja-vermilion hover:bg-ninja-vermilion-hover text-white font-bold tracking-widest text-sm rounded shadow-lg shadow-ninja-vermilion/30 hover:shadow-ninja-vermilion/50 hover:scale-102 transition-all duration-300 cursor-pointer flex items-center justify-center space-x-2 border-b-4 border-ninja-vermilion-hover"
            >
              <span>{t.hero.cta}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button 
              onClick={() => scrollToSection("about")}
              className="w-full sm:w-auto px-8 py-4 bg-transparent hover:bg-white/5 text-gray-300 hover:text-white font-semibold tracking-widest text-sm rounded border border-gray-500 hover:border-white transition-all duration-300 cursor-pointer flex items-center justify-center"
            >
              {lang === "ja" ? "カフェを知る" : "카페 둘러보기"}
            </button>
          </motion.div>

        </div>

        {/* Scroll Indicator Down Arrow */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center cursor-pointer opacity-70 hover:opacity-100 transition-opacity duration-300" onClick={() => scrollToSection("about")}>
          <span className="text-[10px] font-mono tracking-[0.2em] text-ninja-gold uppercase mb-1">{lang === "ja" ? "流る" : "아래로"}</span>
          <motion.div 
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <ChevronDown className="w-5 h-5 text-ninja-gold" />
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: ABOUT / HISTORY SECTION */}
      <section 
        id="about" 
        className="relative py-24 bg-ninja-cream text-ninja-dark overflow-hidden border-t-2 border-ninja-gold/30"
      >
        {/* Subtle Asanoha Traditional Pattern Background */}
        <div className="absolute inset-0 pattern-asanoha opacity-45 pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="font-mono text-xs text-ninja-vermilion tracking-widest uppercase font-bold block mb-2">
              01 // ORIGIN STORY
            </span>
            <p className="text-sm font-semibold tracking-widest text-ninja-gold uppercase font-serif mb-3">
              {t.about.subtitle}
            </p>
            <h2 className="font-serif font-bold text-3xl sm:text-4xl lg:text-5xl text-ninja-dark tracking-wide leading-tight">
              {t.about.title}
            </h2>
            <div className="w-20 h-1 bg-ninja-vermilion mx-auto mt-6" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Calligraphy and Aesthetic column */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
              
              {/* Kyoto Framing Box */}
              <div className="w-full max-w-sm aspect-4/5 rounded bg-ninja-dark text-white p-8 relative shadow-xl overflow-hidden border-2 border-ninja-gold/40 flex flex-col justify-between">
                
                {/* Subtle internal decor */}
                <div className="absolute top-0 right-0 w-32 h-32 pattern-seigaiha opacity-15 pointer-events-none" />
                <div className="absolute bottom-4 left-4 w-12 h-12 border-b-2 border-l-2 border-ninja-vermilion/30" />
                <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-ninja-vermilion/30" />

                <div className="flex justify-between items-start">
                  <span className="font-mono text-xs text-ninja-gold tracking-widest">
                    信州 霧沢郷
                  </span>
                  <div className="w-8 h-8 rounded-full border border-ninja-vermilion flex items-center justify-center">
                    <span className="text-[10px] text-ninja-vermilion">壱</span>
                  </div>
                </div>

                {/* Big stylized traditional vertical text (calligraphy effect) */}
                <div className="my-auto py-6 flex flex-row-reverse justify-center space-x-6 space-x-reverse">
                  <p className="writing-vertical font-serif text-3xl sm:text-4xl text-white font-bold tracking-widest">
                    {lang === "ja" ? "真を秘め" : "진실을 비장하고"}
                  </p>
                  <p className="writing-vertical font-serif text-3xl sm:text-4xl text-ninja-gold font-bold tracking-widest">
                    {lang === "ja" ? "和を成す" : "평화를 이룩하다"}
                  </p>
                </div>

                <div className="flex justify-between items-end border-t border-ninja-gold/25 pt-4">
                  <div className="text-left">
                    <p className="font-serif text-[10px] text-gray-400">
                      WHONIT HOUSE CREDO
                    </p>
                    <p className="font-mono text-[9px] text-ninja-gold tracking-wider">
                      SINCE 1615 • KIRISAWA
                    </p>
                  </div>
                  <Compass className="w-5 h-5 text-ninja-vermilion animate-spin duration-15000" />
                </div>
              </div>

              {/* Decorative shadow circles */}
              <div className="absolute -z-10 w-64 h-64 rounded-full bg-ninja-vermilion/5 blur-3xl" />
            </div>

            {/* Core narrative description columns */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="bg-white/80 backdrop-blur-sm p-6 sm:p-8 rounded-lg border border-ninja-sand shadow-sm space-y-4">
                <p className="text-base text-gray-700 leading-relaxed font-serif">
                  {t.about.desc1}
                </p>
                <p className="text-base text-gray-700 leading-relaxed font-serif">
                  {t.about.desc2}
                </p>
              </div>

              {/* Collapsible/Expandable Family Secret History Timeline */}
              <div className="bg-ninja-dark text-gray-300 rounded-lg shadow-md border border-ninja-gold/30 overflow-hidden">
                <div className="p-5 flex items-center justify-between border-b border-ninja-slate">
                  <div className="flex items-center space-x-3">
                    <span className="px-2 py-0.5 bg-ninja-vermilion text-white text-[10px] font-mono rounded tracking-widest">
                      CHRONICLE
                    </span>
                    <h3 className="font-serif font-bold text-sm sm:text-base text-white tracking-wide">
                      {t.about.historyTitle}
                    </h3>
                  </div>
                </div>
                
                <div className="p-6 text-sm text-gray-300 leading-relaxed space-y-4">
                  <p className="font-serif italic text-ninja-gold/90 mb-2">
                    {lang === "ja" ? "「姿は語らず、技が語る。」" : "「모습은 말하지 않고, 오직 무예가 대답한다.」"}
                  </p>
                  <p className="text-gray-300">
                    {t.about.historyDesc}
                  </p>
                  <div className="pt-4 border-t border-ninja-slate grid grid-cols-2 gap-4 text-xs">
                    <div>
                      <p className="font-mono text-[10px] text-ninja-gold uppercase tracking-wider">{t.about.credoTitle}</p>
                      <p className="mt-1 text-gray-400 font-serif leading-relaxed">{t.about.credoDesc}</p>
                    </div>
                    <div className="border-l border-ninja-slate pl-4">
                      <p className="font-mono text-[10px] text-ninja-gold uppercase tracking-wider">{lang === "ja" ? "一族の訓え" : "가문의 훈계"}</p>
                      <p className="mt-1 text-gray-400 font-serif leading-relaxed">
                        {lang === "ja" ? "「客人に問わせること勿れ。静寂の中にこそ、真実の歓待が宿る。」" : "「손님이 묻게 하지 말라. 오직 정적 속에 진정한 대접이 깃든다.」"}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* SECTION 3: MENU SECTION */}
      <section 
        id="menu" 
        className="relative py-24 bg-ninja-dark overflow-hidden border-t border-b border-ninja-vermilion/20"
      >
        {/* Background dark waves */}
        <div className="absolute inset-0 pattern-seigaiha opacity-15 pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="font-mono text-xs text-ninja-gold tracking-widest uppercase font-bold block mb-2">
              02 // EXQUISITE REFRESHMENTS
            </span>
            <h2 className="font-serif font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-wide">
              {t.menu.title}
            </h2>
            <p className="text-xs sm:text-sm text-ninja-gold/80 font-mono tracking-widest mt-2">
              {t.menu.subtitle}
            </p>
            <div className="w-16 h-0.5 bg-ninja-gold mx-auto mt-4" />
          </div>

          {/* Category Tabs Switcher */}
          <div className="flex justify-center mb-12">
            <div className="bg-ninja-charcoal border border-ninja-slate p-1.5 rounded-full flex space-x-2">
              <button
                onClick={() => setMenuTab("drinks")}
                className={`px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold tracking-widest uppercase transition-all duration-300 cursor-pointer ${
                  menuTab === "drinks"
                    ? "bg-ninja-vermilion text-white shadow-md shadow-ninja-vermilion/20"
                    : "text-gray-400 hover:text-white bg-transparent"
                }`}
              >
                {t.menu.drinks}
              </button>
              <button
                onClick={() => setMenuTab("desserts")}
                className={`px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold tracking-widest uppercase transition-all duration-300 cursor-pointer ${
                  menuTab === "desserts"
                    ? "bg-ninja-vermilion text-white shadow-md shadow-ninja-vermilion/20"
                    : "text-gray-400 hover:text-white bg-transparent"
                }`}
              >
                {t.menu.desserts}
              </button>
            </div>
          </div>

          {/* Menu Items Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="wait">
              {(menuTab === "drinks" ? drinks : desserts).map((item, index) => {
                const itemName = lang === "ja" ? item.nameJa : item.nameKo;
                const itemDesc = lang === "ja" ? item.descJa : item.descKo;
                const itemBadge = lang === "ja" ? item.badgeJa : item.badgeKo;

                return (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ delay: index * 0.1, duration: 0.4 }}
                    className="group relative bg-ninja-charcoal border border-ninja-gold/15 rounded-md p-6 sm:p-8 hover:border-ninja-gold/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/75 flex flex-col justify-between min-h-[250px] overflow-hidden"
                  >
                    {/* Subtle traditional watermarked pattern inside the card */}
                    <div className="absolute inset-0 pattern-seigaiha opacity-5 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none" />

                    {/* Double Golden Inner Frame */}
                    <div className="absolute inset-2 border border-ninja-gold/10 rounded pointer-events-none" />
                    <div className="absolute inset-2.5 border border-dashed border-ninja-gold/5 rounded pointer-events-none" />

                    {/* Elegant Traditional Corner Brackets */}
                    <div className="absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 border-ninja-gold/25 pointer-events-none group-hover:border-ninja-gold/65 transition-colors duration-300" />
                    <div className="absolute top-4 right-4 w-4 h-4 border-t-2 border-r-2 border-ninja-gold/25 pointer-events-none group-hover:border-ninja-gold/65 transition-colors duration-300" />
                    <div className="absolute bottom-4 left-4 w-4 h-4 border-b-2 border-l-2 border-ninja-gold/25 pointer-events-none group-hover:border-ninja-gold/65 transition-colors duration-300" />
                    <div className="absolute bottom-4 right-4 w-4 h-4 border-b-2 border-r-2 border-ninja-gold/25 pointer-events-none group-hover:border-ninja-gold/65 transition-colors duration-300" />

                    {/* Hanging Ribbon Badge (Traditional vertical banner style) */}
                    {itemBadge && (
                      <div className="absolute top-0 left-8 z-20 bg-ninja-vermilion text-white text-[9px] font-bold tracking-widest px-2 py-2.5 rounded-b shadow-md border-x border-b border-ninja-vermilion-hover flex flex-col items-center">
                        <span className="writing-vertical font-serif tracking-normal">
                          {itemBadge}
                        </span>
                      </div>
                    )}

                    {/* Distressed Traditional Red Ink Stamp (Hanko Seal) */}
                    <div className="absolute bottom-6 right-6 w-11 h-11 rounded border-2 border-ninja-vermilion/45 bg-ninja-vermilion/5 flex items-center justify-center rotate-12 select-none pointer-events-none opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300">
                      <span className="text-ninja-vermilion font-serif font-extrabold text-[13px] tracking-widest leading-none text-center select-none">
                        {menuTab === "drinks" ? "茶" : "菓"}
                      </span>
                    </div>

                    {/* Menu Item Content */}
                    <div className="space-y-4 relative z-10">
                      
                      {/* Name and Translations */}
                      <div className="space-y-1">
                        <div className="flex justify-between items-start pt-2">
                          <h3 className="font-serif font-bold text-xl text-white group-hover:text-ninja-gold transition-colors duration-300 leading-tight">
                            {itemName}
                          </h3>
                        </div>
                        {/* Subtitle/Translation (Provides high-end bilingual aesthetic) */}
                        <p className="font-serif text-xs text-ninja-gold/60 italic tracking-wide">
                          {lang === "ja" ? item.nameKo : item.nameJa}
                        </p>
                      </div>

                      {/* Pricing with Traditional Style */}
                      <div className="flex items-baseline space-x-2 border-b border-ninja-gold/15 pb-3">
                        <span className="font-serif text-[10px] text-ninja-gold/70 tracking-widest uppercase">
                          {lang === "ja" ? "御代" : "가격"} //
                        </span>
                        <span className="font-mono text-base font-bold text-ninja-gold group-hover:scale-105 transition-transform duration-300">
                          ¥{item.price.toLocaleString()}
                        </span>
                      </div>

                      {/* Poetic Tea-House Description */}
                      <p className="text-xs text-gray-400 font-serif leading-relaxed pr-6 line-clamp-3">
                        {itemDesc}
                      </p>

                    </div>

                    {/* Footer elements */}
                    <div className="pt-3 flex items-center justify-between text-[8px] text-gray-500 font-mono tracking-widest uppercase relative z-10">
                      <span>SHINOMIYA TEA HOUSE</span>
                      <span className="text-ninja-gold/30">秘伝</span>
                    </div>

                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

        </div>
      </section>

      {/* SECTION 4: EXPERIENCE PROGRAMS */}
      <section 
        id="experience" 
        className="relative py-24 bg-ninja-cream text-ninja-dark overflow-hidden border-b-2 border-ninja-gold/30"
      >
        <div className="absolute inset-0 pattern-asanoha opacity-35 pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="font-mono text-xs text-ninja-vermilion tracking-widest uppercase font-bold block mb-2">
              03 // INJUTSU TRANSMISSION
            </span>
            <h2 className="font-serif font-bold text-3xl sm:text-4xl lg:text-5xl text-ninja-dark tracking-wide">
              {t.experience.title}
            </h2>
            <p className="text-xs sm:text-sm text-ninja-gold/90 font-mono tracking-widest mt-2">
              {t.experience.subtitle}
            </p>
            <div className="w-16 h-0.5 bg-ninja-vermilion mx-auto mt-4" />
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {t.experience.items.map((item, index) => {
              
              // Resolve icon based on name
              const renderIcon = () => {
                switch(item.iconName) {
                  case "Sparkles": return <Sparkles className="w-8 h-8 text-ninja-vermilion" />;
                  case "Target": return <Target className="w-8 h-8 text-ninja-vermilion" />;
                  case "Swords": return <Swords className="w-8 h-8 text-ninja-vermilion" />;
                  default: return <Sparkles className="w-8 h-8 text-ninja-vermilion" />;
                }
              };

              return (
                <div 
                  key={item.id}
                  className="bg-white rounded-lg p-8 border border-ninja-sand shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative group flex flex-col justify-between"
                >
                  {/* Glowing vertical line on hover */}
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-ninja-vermilion rounded-l opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div>
                    {/* Header with Icon and index */}
                    <div className="flex justify-between items-start mb-6">
                      <div className="w-14 h-14 rounded-full bg-ninja-cream border border-ninja-sand flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform duration-300">
                        {renderIcon()}
                      </div>
                      <span className="font-mono text-xs font-bold text-gray-400">
                        0{index + 1}
                      </span>
                    </div>

                    <h3 className="font-serif font-bold text-xl text-ninja-dark mb-4 group-hover:text-ninja-vermilion transition-colors duration-300">
                      {item.title}
                    </h3>
                    
                    <p className="text-xs text-gray-600 font-serif leading-relaxed mb-6">
                      {item.desc}
                    </p>
                  </div>

                  {/* Program stats (Time & price) */}
                  <div className="pt-6 border-t border-ninja-sand grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-[10px] font-mono text-gray-400 uppercase tracking-wider">
                        {t.experience.duration}
                      </p>
                      <p className="text-sm font-bold text-ninja-dark font-serif flex items-center space-x-1.5 mt-0.5">
                        <Clock className="w-3.5 h-3.5 text-ninja-gold" />
                        <span>{item.time}</span>
                      </p>
                    </div>
                    <div className="border-l border-ninja-sand pl-4">
                      <p className="text-[10px] font-mono text-gray-400 uppercase tracking-wider">
                        {t.experience.price}
                      </p>
                      <p className="text-sm font-bold text-ninja-vermilion font-serif flex items-center space-x-1.5 mt-0.5">
                        <span>{item.priceVal}</span>
                      </p>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* SECTION 5: RESERVATION PORTAL */}
      <section 
        id="reservation" 
        className="relative py-24 bg-ninja-cream text-ninja-dark overflow-hidden border-b-2 border-ninja-gold/30"
      >
        <div className="absolute inset-0 pattern-asanoha opacity-35 pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="font-mono text-xs text-ninja-vermilion tracking-widest uppercase font-bold block mb-2">
              04 // SECURE AN ENTRY CARD
            </span>
            <h2 className="font-serif font-bold text-3xl sm:text-4xl lg:text-5xl text-ninja-dark tracking-wide">
              {t.reservation.title}
            </h2>
            <p className="text-xs sm:text-sm text-ninja-gold/90 font-mono tracking-widest mt-2">
              {t.reservation.subtitle}
            </p>
            <div className="w-16 h-0.5 bg-ninja-vermilion mx-auto mt-4" />
          </div>

          {/* Form container */}
          <div className="bg-white rounded-lg border border-ninja-sand shadow-lg overflow-hidden">
            
            {/* Header pattern banner */}
            <div className="h-2 w-full bg-ninja-vermilion" />
            
            <form onSubmit={handleBookingSubmit} className="p-6 sm:p-10 space-y-6">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Name */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-ninja-dark font-serif tracking-wide block">
                    {t.reservation.formName} <span className="text-ninja-vermilion">*</span>
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input 
                      type="text"
                      required
                      value={resName}
                      onChange={(e) => setResName(e.target.value)}
                      placeholder={lang === "ja" ? "例) ヤマダ タロウ" : "예) 홍길동"}
                      className="w-full pl-10 pr-4 py-2.5 bg-ninja-cream border border-ninja-sand rounded text-sm text-ninja-dark focus:outline-none focus:border-ninja-vermilion transition-colors font-serif"
                    />
                  </div>
                </div>

                {/* Phone */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-ninja-dark font-serif tracking-wide block">
                    {t.reservation.formPhone} <span className="text-ninja-vermilion">*</span>
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input 
                      type="tel"
                      required
                      value={resPhone}
                      onChange={(e) => setResPhone(e.target.value)}
                      placeholder="例) 090-1234-5678"
                      className="w-full pl-10 pr-4 py-2.5 bg-ninja-cream border border-ninja-sand rounded text-sm text-ninja-dark focus:outline-none focus:border-ninja-vermilion transition-colors font-mono"
                    />
                  </div>
                </div>

                {/* Date */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-ninja-dark font-serif tracking-wide block">
                    {t.reservation.formDate} <span className="text-ninja-vermilion">*</span>
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input 
                      type="date"
                      required
                      value={resDate}
                      onChange={(e) => setResDate(e.target.value)}
                      className="w-full pl-10 pr-4 py-2.5 bg-ninja-cream border border-ninja-sand rounded text-sm text-ninja-dark focus:outline-none focus:border-ninja-vermilion transition-colors font-mono"
                    />
                  </div>
                </div>

                {/* Party Size */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-ninja-dark font-serif tracking-wide block">
                    {t.reservation.formSize} <span className="text-ninja-vermilion">*</span>
                  </label>
                  <div className="relative">
                    <Users className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <select
                      value={resSize}
                      onChange={(e) => setResSize(e.target.value)}
                      className="w-full pl-10 pr-4 py-2.5 bg-ninja-cream border border-ninja-sand rounded text-sm text-ninja-dark focus:outline-none focus:border-ninja-vermilion transition-colors font-serif appearance-none"
                    >
                      <option value="1">1 {lang === "ja" ? "名" : "명"}</option>
                      <option value="2">2 {lang === "ja" ? "名" : "명"}</option>
                      <option value="3">3 {lang === "ja" ? "名" : "명"}</option>
                      <option value="4">4 {lang === "ja" ? "名" : "명"}</option>
                      <option value="5">5 {lang === "ja" ? "名" : "명"}</option>
                      <option value="6">{lang === "ja" ? "6名以上 (要相談)" : "6명 이상 (상담 필요)"}</option>
                    </select>
                  </div>
                </div>

              </div>

              {/* Custom interactive Buttons for Time Slot Selection */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-ninja-dark font-serif tracking-wide block">
                  {t.reservation.formTime} <span className="text-ninja-vermilion">*</span>
                </label>
                <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
                  {["11:30", "12:00", "13:00", "14:30", "15:30", "17:00"].map((slot) => (
                    <button
                      key={slot}
                      type="button"
                      onClick={() => setResTime(slot)}
                      className={`py-2 text-xs font-bold font-mono rounded tracking-wider border transition-all cursor-pointer ${
                        resTime === slot
                          ? "bg-ninja-vermilion border-ninja-vermilion text-white shadow shadow-ninja-vermilion/30 scale-102"
                          : "bg-ninja-cream border-ninja-sand text-ninja-dark hover:border-ninja-vermilion hover:bg-ninja-cream"
                      }`}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
              </div>

              {/* Program selection */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-ninja-dark font-serif tracking-wide block">
                  {t.reservation.formProgram}
                </label>
                <select
                  value={resProgram}
                  onChange={(e) => setResProgram(e.target.value)}
                  className="w-full px-4 py-2.5 bg-ninja-cream border border-ninja-sand rounded text-sm text-ninja-dark focus:outline-none focus:border-ninja-vermilion transition-colors font-serif appearance-none"
                >
                  <option value="none">{t.reservation.formProgramNone}</option>
                  {t.experience.items.map((item) => (
                    <option key={item.id} value={item.id}>{item.title} ({item.priceVal})</option>
                  ))}
                </select>
              </div>

              {/* Notes */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-ninja-dark font-serif tracking-wide block">
                  {t.reservation.formNotes}
                </label>
                <textarea 
                  value={resNotes}
                  onChange={(e) => setResNotes(e.target.value)}
                  rows={3}
                  placeholder={lang === "ja" ? "アレルギーやお席に関するご要望がございましたらご記入ください。" : "알레르기나 좌석 형태 등 특별한 요청이 있으실 경우 입력해 주세요."}
                  className="w-full px-4 py-2.5 bg-ninja-cream border border-ninja-sand rounded text-sm text-ninja-dark focus:outline-none focus:border-ninja-vermilion transition-colors font-serif resize-none"
                />
              </div>

              {/* Validation errors indicator */}
              {formError && (
                <p className="text-xs font-bold text-ninja-vermilion font-serif">
                  {formError}
                </p>
              )}

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-4 bg-ninja-vermilion hover:bg-ninja-vermilion-hover text-white font-bold tracking-widest text-sm uppercase rounded shadow-lg shadow-ninja-vermilion/20 hover:shadow-ninja-vermilion/40 transition-all duration-300 cursor-pointer border-b-4 border-ninja-vermilion-hover"
                >
                  {t.reservation.submitBtn}
                </button>
              </div>

            </form>
          </div>

        </div>
      </section>

      {/* SECTION 7: ACCESS & HOURS */}
      <section 
        id="access" 
        className="relative py-24 bg-ninja-dark overflow-hidden border-b border-ninja-vermilion/20"
      >
        <div className="absolute inset-0 pattern-seigaiha opacity-15 pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="font-mono text-xs text-ninja-gold tracking-widest uppercase font-bold block mb-2">
              05 // FINDING THE HIDDEN SANCTUARY
            </span>
            <h2 className="font-serif font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-wide">
              {t.access.title}
            </h2>
            <p className="text-xs sm:text-sm text-ninja-gold/80 font-mono tracking-widest mt-2">
              {t.access.subtitle}
            </p>
            <div className="w-16 h-0.5 bg-ninja-gold mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
            
            {/* Information Panel */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-8 bg-ninja-charcoal border border-ninja-slate p-8 rounded-lg relative overflow-hidden">
              {/* Corner decor */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-ninja-gold/35" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-ninja-gold/35" />

              <div className="space-y-6">
                
                {/* Address */}
                <div className="space-y-2">
                  <div className="flex items-center space-x-2 text-ninja-gold">
                    <MapPin className="w-4 h-4" />
                    <span className="font-mono text-xs uppercase tracking-wider">{t.access.addressLabel}</span>
                  </div>
                  <p className="text-sm text-gray-200 font-serif leading-relaxed">
                    {t.access.addressVal}
                  </p>
                </div>

                {/* Phone */}
                <div className="space-y-2">
                  <div className="flex items-center space-x-2 text-ninja-gold">
                    <Phone className="w-4 h-4" />
                    <span className="font-mono text-xs uppercase tracking-wider">{t.access.phoneLabel}</span>
                  </div>
                  <p className="text-sm text-gray-200 font-mono">
                    +81 (0)75-555-0194
                  </p>
                </div>

                {/* Hours table */}
                <div className="space-y-2 pt-4 border-t border-ninja-slate">
                  <div className="flex items-center space-x-2 text-ninja-gold mb-3">
                    <Clock className="w-4 h-4" />
                    <span className="font-mono text-xs uppercase tracking-wider">{t.access.hoursLabel}</span>
                  </div>
                  <div className="space-y-1.5 text-xs font-serif text-gray-300">
                    <p className="flex justify-between">
                      <span>{t.access.hoursValWeekdays.split(":")[0]}</span>
                      <span className="font-mono text-ninja-gold">{t.access.hoursValWeekdays.split(":").slice(1).join(":")}</span>
                    </p>
                    <p className="flex justify-between border-t border-ninja-slate/40 pt-1.5">
                      <span>{t.access.hoursValWeekends.split(":")[0]}</span>
                      <span className="font-mono text-ninja-gold">{t.access.hoursValWeekends.split(":").slice(1).join(":")}</span>
                    </p>
                    <p className="text-ninja-vermilion text-[11px] font-bold mt-3">
                      {t.access.hoursValClosed}
                    </p>
                  </div>
                </div>

              </div>

              {/* Special instructions */}
              <div className="bg-black/40 p-4 rounded border border-ninja-vermilion/20">
                <p className="text-xs font-serif leading-relaxed text-gray-400">
                  {t.access.mapInstruction}
                </p>
              </div>

            </div>

            {/* Premium Hand-drawn-style vector Map Placeholder (Pure CSS/SVG) */}
            <div className="lg:col-span-7 bg-ninja-charcoal border border-ninja-slate rounded-lg p-6 sm:p-8 flex flex-col justify-between relative min-h-[350px]">
              
              {/* Map Title/Header */}
              <div className="flex justify-between items-center mb-4">
                <span className="text-xs font-mono tracking-widest text-ninja-gold">
                  SHINSHU KIRISAWA (HOT SPRING DISTRICT) MAP
                </span>
                <span className="px-2 py-0.5 bg-ninja-gold/15 text-ninja-gold text-[9px] font-mono tracking-wider uppercase rounded border border-ninja-gold/25">
                  1:5000
                </span>
              </div>

              {/* Vector SVG Map Graphic - highly detailed medieval aesthetic */}
              <div className="flex-1 bg-ninja-dark rounded border border-ninja-slate relative overflow-hidden flex items-center justify-center p-4">
                
                {/* Bamboo/Wagara overlay inside map */}
                <div className="absolute inset-0 pattern-seigaiha opacity-5 pointer-events-none" />

                {/* Grid guidelines */}
                <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />

                {/* Clean Compass Rose */}
                <div className="absolute top-4 right-4 text-center">
                  <div className="w-10 h-10 rounded-full border border-ninja-gold/20 flex items-center justify-center relative bg-ninja-charcoal">
                    <span className="absolute -top-1.5 text-[8px] font-mono text-ninja-vermilion font-bold">N</span>
                    <Compass className="w-6 h-6 text-ninja-gold/60 animate-spin duration-30000" />
                  </div>
                </div>

                {/* SVG Paths representing streets and nodes */}
                <svg className="w-full h-full min-h-[250px] opacity-80" viewBox="0 0 500 300">
                  {/* Winding pathways */}
                  <path d="M 50,50 L 150,50 L 150,250 L 350,250 L 350,120 L 450,120" fill="none" stroke="#2a2a2a" strokeWidth="8" strokeLinecap="round" />
                  <path d="M 50,50 L 150,50 L 150,250 L 350,250 L 350,120 L 450,120" fill="none" stroke="#1f1f1f" strokeWidth="4" strokeLinecap="round" strokeDasharray="6,4" />
                  
                  {/* Crossroads */}
                  <path d="M 150,150 L 350,150" fill="none" stroke="#2a2a2a" strokeWidth="6" strokeLinecap="round" />
                  <path d="M 150,150 L 350,150" fill="none" stroke="#1f1f1f" strokeWidth="2" strokeLinecap="round" />
                  
                  <path d="M 350,120 L 350,40" fill="none" stroke="#2a2a2a" strokeWidth="6" strokeLinecap="round" />
                  <path d="M 250,250 L 250,300" fill="none" stroke="#2a2a2a" strokeWidth="6" />

                  {/* Rivers / canals */}
                  <path d="M 0,220 Q 120,240 220,180 T 500,200" fill="none" stroke="#182c35" strokeWidth="12" strokeLinecap="round" />
                  
                  {/* Famous Landmark Nodes */}
                  {/* Kirisawa Valley */}
                  <g transform="translate(100, 60)" className="cursor-default">
                    <circle cx="0" cy="0" r="5" fill="#cfa856" />
                    <text x="10" y="4" fill="#a0aec0" className="text-[10px] font-serif">
                      {lang === "ja" ? "霧沢渓谷" : "키리사와 계곡"}
                    </text>
                  </g>

                  {/* Yumoto Great Waterfall */}
                  <g transform="translate(420, 120)">
                    <circle cx="0" cy="0" r="5" fill="#cfa856" />
                    <text x="-80" y="4" fill="#a0aec0" className="text-[10px] font-serif">
                      {lang === "ja" ? "湯元大滝" : "유모토 대폭포"}
                    </text>
                  </g>

                  {/* Kirisawa Onsen */}
                  <g transform="translate(350, 45)">
                    <circle cx="0" cy="0" r="5" fill="#cfa856" />
                    <text x="10" y="4" fill="#a0aec0" className="text-[10px] font-serif">
                      {lang === "ja" ? "霧沢温泉" : "키리사와 온천"}
                    </text>
                  </g>

                  {/* Cafe WHONIT (Target Highlight) */}
                  <g transform="translate(350, 180)" className="animate-bounce duration-2000">
                    <circle cx="0" cy="0" r="14" fill="#b5442e" className="opacity-30 animate-ping duration-1500" />
                    <circle cx="0" cy="0" r="8" fill="#b5442e" stroke="#cfa856" strokeWidth="2" />
                    <circle cx="0" cy="0" r="3" fill="#ffffff" />
                  </g>
                  {/* Label for Cafe */}
                  <rect x="290" y="200" width="120" height="24" rx="4" fill="#b5442e" stroke="#cfa856" strokeWidth="1" />
                  <text x="350" y="216" fill="#ffffff" textAnchor="middle" className="text-[10px] font-bold font-serif tracking-wider">
                    {lang === "ja" ? "カフェ・ウォニット" : "카페 워닛"}
                  </text>
                </svg>

                {/* Overlay Instruction banner */}
                <div className="absolute bottom-3 right-3 bg-ninja-charcoal/90 px-3 py-1.5 border border-ninja-slate rounded flex items-center space-x-2">
                  <span className="w-2 h-2 rounded-full bg-ninja-vermilion animate-ping" />
                  <span className="text-[10px] font-mono text-gray-300">
                    N 35.0003° / E 135.7792°
                  </span>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* SECTION 8: FAQ ACCORDION */}
      <section 
        id="faq" 
        className="relative py-24 bg-ninja-cream text-ninja-dark overflow-hidden border-b-2 border-ninja-gold/30"
      >
        <div className="absolute inset-0 pattern-asanoha opacity-35 pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="font-mono text-xs text-ninja-vermilion tracking-widest uppercase font-bold block mb-2">
              06 // FREQUENT INQUIRIES
            </span>
            <h2 className="font-serif font-bold text-3xl sm:text-4xl lg:text-5xl text-ninja-dark tracking-wide">
              {t.faq.title}
            </h2>
            <p className="text-xs sm:text-sm text-ninja-gold/90 font-mono tracking-widest mt-2">
              {t.faq.subtitle}
            </p>
            <div className="w-16 h-0.5 bg-ninja-vermilion mx-auto mt-4" />
          </div>

          {/* Accordion Questions List */}
          <div className="space-y-4">
            {t.faq.items.map((item, index) => {
              const isOpen = faqOpen[index] || false;
              
              return (
                <div 
                  key={index}
                  className="bg-white rounded border border-ninja-sand overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
                >
                  
                  {/* Accordion Trigger */}
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full px-6 py-5 text-left flex items-center justify-between space-x-4 cursor-pointer focus:outline-none"
                  >
                    <div className="flex items-start space-x-3">
                      <span className="font-mono text-xs font-bold text-ninja-vermilion pt-1">
                        Q{index + 1}.
                      </span>
                      <span className="font-serif font-bold text-sm sm:text-base text-ninja-dark">
                        {item.q}
                      </span>
                    </div>
                    <div>
                      {isOpen 
                        ? <ChevronUp className="w-5 h-5 text-ninja-vermilion" /> 
                        : <ChevronDown className="w-5 h-5 text-gray-400" />
                      }
                    </div>
                  </button>

                  {/* Accordion Content Panel */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 pt-1 border-t border-dashed border-ninja-sand text-xs sm:text-sm text-gray-600 font-serif leading-relaxed flex items-start space-x-3">
                          <span className="font-mono text-xs font-bold text-ninja-gold pt-0.5">
                            A.
                          </span>
                          <span>
                            {item.a}
                          </span>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* FOOTER SECTION */}
      <footer id="main-footer" className="bg-ninja-dark border-t border-ninja-slate pt-16 pb-12 text-gray-400 font-serif relative overflow-hidden">
        
        {/* Background Waves pattern */}
        <div className="absolute inset-0 pattern-seigaiha opacity-10 pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 border-b border-ninja-slate pb-12 mb-12">
            
            {/* Logo area */}
            <div className="md:col-span-5 space-y-4">
              <div className="flex items-center space-x-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
                <div className="w-10 h-10 rounded-full border-2 border-ninja-vermilion flex items-center justify-center bg-ninja-charcoal">
                  <svg className="w-6 h-6 text-ninja-vermilion fill-current" viewBox="0 0 24 24">
                    <path d="M12,2 L14,9 L21,7 L16,12 L21,17 L14,15 L12,22 L10,15 L3,17 L8,12 L3,7 L10,9 Z" />
                  </svg>
                </div>
                <div>
                  <div className="flex flex-col">
                    <span className="font-serif font-bold text-lg text-white tracking-wider leading-tight">
                      {lang === "ja" ? "カフェ・ウォニット" : "카페 워닛"}
                    </span>
                    <span className="font-mono text-[9px] text-ninja-gold tracking-widest uppercase leading-none">
                      Cafe WHONIT
                    </span>
                  </div>
                </div>
              </div>
              
              <p className="text-xs text-gray-400 leading-relaxed max-w-sm">
                {t.footer.tagline}
              </p>
            </div>

            {/* Navigation Sitemap Links */}
            <div className="md:col-span-4 space-y-4">
              <p className="font-mono text-xs text-ninja-gold tracking-widest uppercase font-bold">
                {t.footer.linksLabel}
              </p>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <button onClick={() => scrollToSection("about")} className="text-left text-gray-400 hover:text-ninja-vermilion transition-colors cursor-pointer">{t.nav.about}</button>
                <button onClick={() => scrollToSection("menu")} className="text-left text-gray-400 hover:text-ninja-vermilion transition-colors cursor-pointer">{t.nav.menu}</button>
                <button onClick={() => scrollToSection("experience")} className="text-left text-gray-400 hover:text-ninja-vermilion transition-colors cursor-pointer">{t.nav.experience}</button>
                <button onClick={() => scrollToSection("access")} className="text-left text-gray-400 hover:text-ninja-vermilion transition-colors cursor-pointer">{t.nav.access}</button>
                <button onClick={() => scrollToSection("faq")} className="text-left text-gray-400 hover:text-ninja-vermilion transition-colors cursor-pointer">{t.nav.faq}</button>
              </div>
            </div>

            {/* Social Connects */}
            <div className="md:col-span-3 space-y-4">
              <p className="font-mono text-xs text-ninja-gold tracking-widest uppercase font-bold">
                {lang === "ja" ? "SNS情報" : "SNS 소통"}
              </p>
              <div className="flex space-x-3">
                <a href="#instagram" className="w-10 h-10 rounded-full bg-ninja-charcoal border border-ninja-slate flex items-center justify-center text-gray-400 hover:text-ninja-vermilion hover:border-ninja-vermilion transition-all duration-300">
                  <Instagram className="w-4 h-4" />
                </a>
                <a href="#youtube" className="w-10 h-10 rounded-full bg-ninja-charcoal border border-ninja-slate flex items-center justify-center text-gray-400 hover:text-ninja-vermilion hover:border-ninja-vermilion transition-all duration-300">
                  <Youtube className="w-4 h-4" />
                </a>
                <a href="#facebook" className="w-10 h-10 rounded-full bg-ninja-charcoal border border-ninja-slate flex items-center justify-center text-gray-400 hover:text-ninja-vermilion hover:border-ninja-vermilion transition-all duration-300">
                  <Facebook className="w-4 h-4" />
                </a>
              </div>
              <p className="text-[10px] text-gray-500 font-mono tracking-widest">
                @CAFE_WHONIT • HASHTAGS
              </p>
            </div>

          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between text-center sm:text-left text-[10px] font-mono text-gray-500 space-y-3 sm:space-y-0">
            <p>
              {t.footer.copyright}
            </p>
            <div className="flex flex-col sm:flex-row items-center sm:space-x-4 space-y-2 sm:space-y-0">
              <p className="tracking-widest">
                SHINSHU KIRISAWA HOT-SPRING DISTRICT, JAPAN
              </p>
              <span className="hidden sm:inline text-ninja-slate">|</span>
              <button 
                onClick={() => setShowAdminModal(true)} 
                className="hover:text-ninja-gold transition-colors font-sans text-[11px] tracking-wide border border-ninja-gold/25 px-2 py-0.5 rounded bg-ninja-gold/5 cursor-pointer"
              >
                {t.admin.btnLabel}
              </button>
            </div>
          </div>

        </div>
      </footer>

      {/* RESERVATION SUCCESS SCROLL/TICKET MODAL */}
      <AnimatePresence>
        {showReceipt && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            
            {/* Dark glass backdrop overlay */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeReceiptModal}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />

            {/* Scroll/Ticket container */}
            <motion.div 
              initial={{ scale: 0.9, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 20, opacity: 0 }}
              transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
              className="relative w-full max-w-md bg-ninja-cream border-2 border-ninja-gold rounded shadow-2xl overflow-hidden text-ninja-dark p-1"
            >
              
              {/* Wooden bar decoration at top & bottom representing scroll handle */}
              <div className="h-4 w-full bg-ninja-vermilion relative flex items-center justify-between px-6">
                <div className="w-3 h-3 rounded-full bg-ninja-gold absolute -left-1.5" />
                <div className="w-3 h-3 rounded-full bg-ninja-gold absolute -right-1.5" />
              </div>

              {/* Scroll Content Body */}
              <div className="p-6 sm:p-8 space-y-6">
                
                {/* Mon crest / Red Seal stamp */}
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-serif font-bold text-xl sm:text-2xl text-ninja-vermilion tracking-wide">
                      {t.reservation.modalTitle}
                    </h3>
                    <p className="font-mono text-[9px] text-gray-400 tracking-widest uppercase mt-0.5">
                      {receiptCode}
                    </p>
                  </div>
                  
                  {/* Decorative Vermilion Circle Stamp (Hanko aesthetic) */}
                  <div className="w-14 h-14 rounded-full border-2 border-double border-ninja-vermilion flex items-center justify-center -rotate-12 bg-transparent opacity-85">
                    <span className="text-[10px] font-bold text-ninja-vermilion font-serif tracking-widest scale-90">
                      {lang === "ja" ? "忍印確定" : "예약인"}
                    </span>
                  </div>
                </div>

                {/* Sub explanation description */}
                <p className="text-xs text-gray-700 leading-relaxed font-serif bg-white/65 p-4 rounded border border-ninja-sand shadow-inner">
                  {t.reservation.modalSuccess}
                </p>

                {/* Local Reservation receipt data mapping */}
                <div className="border-t border-b border-ninja-sand py-4 space-y-2.5 font-serif text-xs">
                  
                  <div className="flex justify-between">
                    <span className="text-gray-500">{lang === "ja" ? "お名前" : "예약자명"}</span>
                    <span className="font-bold text-ninja-dark">{resName}</span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-gray-500">{lang === "ja" ? "ご来店日" : "방문 일자"}</span>
                    <span className="font-mono font-bold text-ninja-dark">{resDate}</span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-gray-500">{lang === "ja" ? "ご来店時間" : "예약 시간"}</span>
                    <span className="font-mono font-bold text-ninja-dark">{resTime}</span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-gray-500">{lang === "ja" ? "ご人数" : "예약 인원"}</span>
                    <span className="font-bold text-ninja-dark">{resSize} {lang === "ja" ? "名" : "명"}</span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-gray-500">{lang === "ja" ? "体験種別" : "선택 체험"}</span>
                    <span className="font-bold text-ninja-vermilion">
                      {resProgram === "none" 
                        ? t.reservation.formProgramNone 
                        : t.experience.items.find(x => x.id === resProgram)?.title}
                    </span>
                  </div>

                </div>

                {/* Code display */}
                <div className="text-center bg-ninja-charcoal border border-ninja-slate rounded p-4 text-white">
                  <p className="text-[9px] font-mono tracking-widest text-ninja-gold uppercase">
                    {t.reservation.modalCode}
                  </p>
                  <p className="text-base sm:text-lg font-mono font-bold tracking-wider text-white mt-1">
                    {receiptCode}
                  </p>
                </div>

                {/* Close action */}
                <div className="space-y-2.5">
                  <button
                    onClick={closeReceiptModal}
                    className="w-full py-3 bg-ninja-dark text-white hover:bg-ninja-charcoal text-xs font-bold tracking-widest uppercase rounded transition-colors duration-200 cursor-pointer text-center"
                  >
                    {t.reservation.modalClose}
                  </button>
                  <p className="text-center text-[10px] text-gray-500 font-serif tracking-wide">
                    {t.reservation.adminNotice}
                  </p>
                </div>

              </div>

              {/* Bottom scroll handle decoration */}
              <div className="h-4 w-full bg-ninja-vermilion relative flex items-center justify-between px-6">
                <div className="w-3 h-3 rounded-full bg-ninja-gold absolute -left-1.5" />
                <div className="w-3 h-3 rounded-full bg-ninja-gold absolute -right-1.5" />
              </div>

            </motion.div>

          </div>
        )}

        {showAdminModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            
            {/* Dark glass backdrop overlay */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeAdminModal}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />

            {/* Admin Authentication Card */}
            <motion.div 
              initial={{ scale: 0.9, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 20, opacity: 0 }}
              transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
              className="relative w-full max-w-md bg-ninja-charcoal border-2 border-ninja-gold rounded shadow-2xl overflow-hidden text-white p-1"
            >
              
              {/* Gold border top accent */}
              <div className="h-2 w-full bg-ninja-gold relative flex items-center justify-between">
                <div className="w-2 h-2 rounded-full bg-ninja-vermilion absolute left-2" />
                <div className="w-2 h-2 rounded-full bg-ninja-vermilion absolute right-2" />
              </div>

              {/* Modal Body */}
              <div className="p-6 sm:p-8 space-y-6">
                
                {/* Header with lock icon */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full border border-ninja-gold/40 flex items-center justify-center bg-ninja-dark text-ninja-gold shrink-0">
                    {adminVerified ? (
                      <ShieldCheck className="w-6 h-6 text-ninja-gold animate-pulse" />
                    ) : (
                      <Lock className="w-6 h-6 text-ninja-gold" />
                    )}
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-lg sm:text-xl text-white tracking-wide">
                      {t.admin.modalTitle}
                    </h3>
                    <p className="font-mono text-[9px] text-ninja-gold tracking-widest uppercase mt-0.5">
                      SHINOMIYAKE AUTHENTICATION SYSTEM
                    </p>
                  </div>
                </div>

                <p className="text-xs text-gray-400 leading-relaxed font-serif bg-ninja-dark/50 p-3 rounded border border-ninja-slate">
                  {t.admin.modalDesc}
                </p>

                {/* Password entry step */}
                {!adminVerified ? (
                  <form onSubmit={handleAdminVerify} className="space-y-4">
                    <div className="space-y-1.5">
                      <label className="block text-[11px] font-mono uppercase tracking-wider text-ninja-gold">
                        {t.admin.passwordLabel}
                      </label>
                      <input 
                        type="password"
                        value={adminPassword}
                        onChange={(e) => setAdminPassword(e.target.value)}
                        placeholder={t.admin.passwordPlaceholder}
                        className="w-full bg-ninja-dark border border-ninja-slate rounded px-3 py-2 text-xs text-white focus:outline-none focus:border-ninja-gold font-mono"
                        autoFocus
                      />
                    </div>

                    {adminError && (
                      <p className="text-[11px] font-serif text-ninja-vermilion bg-ninja-vermilion/10 px-3 py-1.5 rounded border border-ninja-vermilion/20">
                        {adminError}
                      </p>
                    )}

                    <div className="flex space-x-3 pt-2">
                      <button
                        type="button"
                        onClick={closeAdminModal}
                        className="flex-1 py-2.5 border border-ninja-slate hover:bg-ninja-dark text-xs font-mono uppercase tracking-wider rounded transition-colors cursor-pointer text-center text-gray-400 hover:text-white"
                      >
                        {t.admin.cancelBtn}
                      </button>
                      <button
                        type="submit"
                        className="flex-1 py-2.5 bg-ninja-gold hover:bg-ninja-gold/85 text-ninja-dark text-xs font-bold tracking-wider uppercase rounded transition-colors cursor-pointer text-center"
                      >
                        {t.admin.submitBtn}
                      </button>
                    </div>
                  </form>
                ) : (
                  // Success & redirect configuration step
                  <div className="space-y-5">
                    <p className="text-xs text-ninja-gold bg-ninja-gold/10 px-3 py-2 rounded border border-ninja-gold/25 font-serif leading-relaxed">
                      {t.admin.verifiedSuccess}
                    </p>

                    <form onSubmit={handleSaveAdminLink} className="space-y-4">
                      <div className="space-y-1.5">
                        <label className="block text-[11px] font-mono uppercase tracking-wider text-ninja-gold">
                          {t.admin.linkLabel}
                        </label>
                        <div className="flex space-x-2">
                          <input 
                            type="url"
                            value={adminRedirectUrl}
                            onChange={(e) => setAdminRedirectUrl(e.target.value)}
                            placeholder={t.admin.linkPlaceholder}
                            className="flex-1 bg-ninja-dark border border-ninja-slate rounded px-3 py-2 text-xs text-white focus:outline-none focus:border-ninja-gold font-mono"
                            required
                          />
                          <button
                            type="submit"
                            className="bg-ninja-slate hover:bg-ninja-slate/80 text-white px-3 py-2 rounded text-xs transition-colors cursor-pointer flex items-center justify-center"
                            title={t.admin.saveBtn}
                          >
                            <Save className="w-4 h-4" />
                          </button>
                        </div>
                      </div>

                      {adminSaveSuccess && (
                        <p className="text-[10px] font-mono text-ninja-gold flex items-center space-x-1">
                          <Check className="w-3 h-3 text-ninja-gold inline" />
                          <span>{t.admin.linkSavedMsg}</span>
                        </p>
                      )}

                      {adminError && (
                        <p className="text-[11px] font-serif text-ninja-vermilion">
                          {adminError}
                        </p>
                      )}
                    </form>

                    <div className="flex space-x-3 pt-2">
                      <button
                        onClick={closeAdminModal}
                        className="flex-1 py-2.5 border border-ninja-slate hover:bg-ninja-dark text-xs font-mono uppercase tracking-wider rounded transition-colors cursor-pointer text-center text-gray-400 hover:text-white"
                      >
                        {t.admin.cancelBtn}
                      </button>
                      
                      {adminRedirectUrl ? (
                        <a
                          href={adminRedirectUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 py-2.5 bg-ninja-vermilion hover:bg-ninja-vermilion/85 text-white text-xs font-bold tracking-wider uppercase rounded transition-colors cursor-pointer flex items-center justify-center space-x-1.5 shadow-lg shadow-ninja-vermilion/20"
                        >
                          <span>{t.admin.goToLinkBtn}</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      ) : (
                        <button
                          disabled
                          className="flex-1 py-2.5 bg-gray-700 text-gray-500 text-xs font-bold tracking-wider uppercase rounded cursor-not-allowed text-center"
                        >
                          {t.admin.goToLinkBtn}
                        </button>
                      )}
                    </div>
                  </div>
                )}

              </div>

              {/* Bottom accent */}
              <div className="h-2 w-full bg-ninja-gold relative" />

            </motion.div>

          </div>
        )}
      </AnimatePresence>

    </div>
  );
}

