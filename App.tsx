import { useState, useEffect, useRef } from 'react';
import { Download, Monitor, Github, Cpu, ArrowDown } from 'lucide-react';
import { Button } from './components/Button';
import { FEATURES_DATA, DOWNLOAD_LINK, BOOT_SEQUENCE_DATA } from './constants';

type Lang = 'en' | 'zh';

const TEXTS = {
  en: {
    buildVersion: "BUILD_VERSION: 0.0.1-ALPHA",
    subtitle: "A lightweight, flutter-based code editor engineered for performance.",
    subtitleComment: "// VS Code experience without the bloat.",
    download: "Execute Download",
    msStore: "Microsoft Store",
    interfaceTitle: "Interface_Main",
    interfaceMeta: "RES: 1920x1080 // MODE: DARK",
    interfaceNote: "* Actual software appearance",
    modulesTitle: "System Modules",
    footerReady: "READY TO INITIALIZE?",
    footerDesc: "Join the development of the next generation lightweight editor.",
    footerDownload: "DOWNLOAD v0.0.1",
    copyright: "© 2026 BEWY PROJECT",
    msAlert: "Package not yet available in Microsoft Store registry. Please use direct download."
  },
  zh: {
    buildVersion: "构建版本: 0.0.1-ALPHA",
    subtitle: "为性能而生的轻量级 Flutter 代码编辑器。",
    subtitleComment: "// 拒绝臃肿，保留 VS Code 核心体验。",
    download: "执行下载",
    msStore: "微软商店",
    interfaceTitle: "主界面_预览",
    interfaceMeta: "分辨率: 1920x1080 // 模式: 暗色",
    interfaceNote: "* 实际软件运行效果",
    modulesTitle: "系统模块",
    footerReady: "准备好初始化了吗？",
    footerDesc: "加入下一代轻量级编辑器的开发之旅。",
    footerDownload: "下载版本 v0.0.1",
    copyright: "© 2026 BEWY PROJECT",
    msAlert: "该软件包尚未在 Microsoft Store 注册表中上架。请使用直接下载。"
  }
};

const App: React.FC = () => {
  const [lang, setLang] = useState<Lang>('en');
  const [bootLineIndex, setBootLineIndex] = useState(0);
  const [showHero, setShowHero] = useState(false);

  // Detect system language on mount
  useEffect(() => {
    const browserLang = navigator.language.toLowerCase();
    if (browserLang.startsWith('zh')) {
      setLang('zh');
    }
  }, []);

  const t = TEXTS[lang];
  const features = FEATURES_DATA[lang];
  const bootSequence = BOOT_SEQUENCE_DATA[lang];

  // Boot sequence animation
  useEffect(() => {
    // Reset animation when language changes, or just let it play out?
    // Let's reset purely for effect if user switches mid-boot, but mostly strictly runs once logically.
    // For simplicity, we restart typing if lang changes to match the vibe.
    setBootLineIndex(0);
    setShowHero(false);
  }, [lang]);

  useEffect(() => {
    if (bootLineIndex < bootSequence.length) {
      const timer = setTimeout(() => {
        setBootLineIndex(prev => prev + 1);
      }, 300 + Math.random() * 400);
      return () => clearTimeout(timer);
    } else {
      setTimeout(() => setShowHero(true), 500);
    }
  }, [bootLineIndex, bootSequence.length]);

  const handleMicrosoftDownload = () => {
    alert(t.msAlert);
  };

  const handleDirectDownload = () => {
    window.location.href = DOWNLOAD_LINK;
  };

  const toggleLang = () => {
    setLang(prev => prev === 'en' ? 'zh' : 'en');
  };

  return (
    <div className="min-h-screen bg-black text-white selection:bg-white selection:text-black">

      {/* Header / Nav */}
      <nav className={`fixed top-0 w-full z-40 bg-black/80 backdrop-blur-sm border-b border-white/20 px-6 py-4 flex justify-between items-center transition-opacity duration-1000 ${showHero ? 'opacity-100' : 'opacity-0'}`}>

        {/* Language Switcher */}
        <button
          onClick={toggleLang}
          className="font-mono text-sm hover:text-white text-gray-400 border border-transparent hover:border-gray-600 px-2 py-1 transition-all"
        >
          [ <span className={lang === 'en' ? 'text-white font-bold' : ''}>EN</span> / <span className={lang === 'zh' ? 'text-white font-bold' : ''}>ZH</span> ]
        </button>

        <div className="text-xs md:text-sm font-mono opacity-60 hidden md:block">
          {t.buildVersion}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center p-6 border-b border-white/10">
        <div className="max-w-4xl w-full space-y-8">

          {/* Boot Terminal Output */}
          <div className="font-mono text-sm md:text-base text-gray-400 min-h-[160px] mb-8 p-4 border-l-2 border-gray-800">
            {bootSequence.slice(0, bootLineIndex).map((line, i) => (
              <div key={i} className="mb-1">{line}</div>
            ))}
            {bootLineIndex < bootSequence.length && (
              <span className="inline-block w-3 h-4 bg-white cursor-blink mt-1"></span>
            )}
          </div>

          {/* Main Title Area */}
          <div className={`transition-all duration-1000 ease-out transform ${showHero ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-6xl md:text-9xl font-black tracking-tighter mb-4 cursor-default">
              BEWY
            </h1>
            <p className="text-xl md:text-2xl font-mono border-l-4 border-white pl-6 py-2 mb-12 max-w-2xl text-gray-300">
              {t.subtitle}
              <span className="block text-sm mt-2 text-gray-500">{t.subtitleComment}</span>
            </p>

            <div className="flex flex-col md:flex-row gap-6">
              <Button onClick={handleDirectDownload} className="group">
                <div className="flex items-center gap-3">
                  <Download className="w-5 h-5" />
                  <span>{t.download}</span>
                </div>
                <div className="absolute top-0 right-0 -mt-2 -mr-2 w-3 h-3 bg-white opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </Button>

              <Button variant="secondary" onClick={handleMicrosoftDownload} className="opacity-80">
                <div className="flex items-center gap-3">
                  <Monitor className="w-5 h-5" />
                  <span>{t.msStore}</span>
                </div>
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className={`absolute bottom-10 animate-bounce transition-opacity duration-1000 ${showHero ? 'opacity-100' : 'opacity-0'}`}>
          <ArrowDown className="w-6 h-6" />
        </div>
      </section>

      {/* Screenshot Section */}
      <section className="py-24 px-4 md:px-12 border-b border-white/10 bg-zinc-950">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-end justify-between mb-8 border-b border-white pb-4">
            <h2 className="text-4xl font-bold uppercase tracking-tight">{t.interfaceTitle}</h2>
            <div className="font-mono text-sm text-gray-500">{t.interfaceMeta}</div>
          </div>

          <div className="relative group">
            {/* Decorative frame elements */}
            <div className="absolute -top-2 -left-2 w-4 h-4 border-t-2 border-l-2 border-white"></div>
            <div className="absolute -bottom-2 -right-2 w-4 h-4 border-b-2 border-r-2 border-white"></div>

            <div className="border-2 border-white/20 overflow-hidden bg-black aspect-video relative">
               <img
                 src="image.png"
                 alt="Bewy Interface Screenshot"
                 className="w-full h-full object-cover"
               />
            </div>

            <p className="mt-4 font-mono text-xs text-center text-gray-500">
              {t.interfaceNote}
            </p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 px-4 md:px-12 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl md:text-6xl font-black mb-4 uppercase">{t.modulesTitle}</h2>
            <div className="h-1 w-24 bg-white"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/20 border border-white/20">
            {features.map((feature, idx) => (
              <div key={idx} className="bg-black p-8 hover:bg-zinc-900 transition-colors group relative overflow-hidden">
                <div className="absolute top-4 right-4 text-xs font-mono text-gray-600">
                  SYS_MOD_{feature.id}
                </div>
                <feature.icon className="w-10 h-10 mb-6 text-white group-hover:scale-110 transition-transform duration-300" strokeWidth={1.5} />
                <h3 className="text-xl font-bold mb-3 font-mono uppercase">{feature.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed font-mono">
                  {feature.description}
                </p>

                {/* Corner Accents */}
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Marquee */}
      <section className="py-12 border-y border-white/10 bg-zinc-950 overflow-hidden">
        <div className="flex whitespace-nowrap gap-12 animate-marquee font-mono text-lg text-gray-500">
            <span>FLUTTER_FRAMEWORK</span>
            <span>RIVERPOD_STATE</span>
            <span>RUST_ROPE_STRUCTURE</span>
            <span>LSP_PROTOCOL</span>
            <span>XTERM.JS</span>
            <span>MULTI_WINDOW_SUPPORT</span>
            <span>FLUTTER_FRAMEWORK</span>
            <span>RIVERPOD_STATE</span>
            <span>RUST_ROPE_STRUCTURE</span>
            <span>LSP_PROTOCOL</span>
            <span>XTERM.JS</span>
            <span>MULTI_WINDOW_SUPPORT</span>
        </div>
      </section>

      {/* Footer / CTA */}
      <footer className="py-24 px-6 text-center border-t border-white/10">
        <div className="max-w-2xl mx-auto space-y-8">
          <Cpu className="w-16 h-16 mx-auto animate-pulse" strokeWidth={1} />
          <h2 className="text-3xl font-bold font-mono">{t.footerReady}</h2>
          <p className="text-gray-400">{t.footerDesc}</p>

          <div className="pt-8">
            <Button onClick={handleDirectDownload}>
              {t.footerDownload}
            </Button>
          </div>

          <div className="pt-16 text-xs font-mono text-gray-600 flex flex-col md:flex-row justify-center gap-4 md:gap-8">
            <span>{t.copyright}</span>
            <span>MIT LICENSE</span>
          </div>
        </div>
      </footer>

      <style>{`
        .text-stroke-white {
          -webkit-text-stroke: 1px white;
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default App;
