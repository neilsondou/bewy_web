import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import './App.css';

const translations = {
  zh: {
    navFeatures: "功能",
    navOSS: "开源",
    navBlog: "作者博客",
    heroSubtitle: "为性能而生的轻量级代码编辑器 by ",
    author: "老窦",
    downloadZip: "下载 release (.zip)",
    msStore: "microsoft store",
    featuresTitle: "核心特性",
    ossTitle: "开源",
    ossTag: "github repository",
    ossDesc: "查看源码，提交 issue 或贡献代码。bewy 拥抱开源社区，共同打造极致的编辑器体验。",
    footerText: "© 2026 bewy code editor. created by ",
    features: [
      {
        title: "高性能文本编辑",
        description: "专为大文件处理优化的底层架构。提供极速的滚动、搜索与编辑体验，在响应速度与内存管理方面表现出色，为专业开发树立了新标准。"
      },
      {
        title: "深度语言智能集成",
        description: "原生集成 tree-sitter 与 lsp 协议。支持 29 种语言的 ast 级语法检查，提供毫秒级的语义高亮与错误诊断反馈。"
      },
      {
        title: "系统级集成终端 (pty)",
        description: "全功能的 pty 终端模拟，完美兼容 powershell、wsl 与 bash。内置 26 种语言的一键运行环境，让开发调试一气耗成。"
      },
      {
        title: "极致轻量化体验",
        description: "无冗余的极致设计。每一个像素都为生产力而服务，在轻量化与响应速度方面全面胜过 vs code，让开发者享受丝滑流畅的操作反馈。"
      }
    ]
  },
  en: {
    navFeatures: "features",
    navOSS: "open source",
    navBlog: "blog",
    heroSubtitle: "a high-performance lightweight code editor by ",
    author: "neilson dou",
    downloadZip: "download release (.zip)",
    msStore: "microsoft store",
    featuresTitle: "core features",
    ossTitle: "open source",
    ossTag: "github repository",
    ossDesc: "view source code, submit issues, or contribute. bewy embraces the open-source community to build the ultimate editor experience.",
    footerText: "© 2026 bewy code editor. created by ",
    features: [
      {
        title: "high performance editing",
        description: "optimized architecture for large files. delivering blazing fast scrolling, searching, and editing. engineered for modern professional development."
      },
      {
        title: "deep language intelligence",
        description: "native integration with tree-sitter and lsp. supports ast-level syntax checking for 29 languages with millisecond-level feedback."
      },
      {
        title: "integrated terminal (pty)",
        description: "full pty terminal emulation, compatible with powershell, wsl, and bash. built-in one-click runtime for 26 languages."
      },
      {
        title: "ultra lightweight",
        description: "zero-redundancy design. every pixel serves productivity. outperforms vs code in lightweight footprint and instant responsiveness."
      }
    ]
  }
};

const App = () => {
  const [lang, setLang] = useState<'zh' | 'en'>('zh');
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const t = translations[lang];

  // Bewy 标题打字动效逻辑
  useEffect(() => {
    const fullText = "Bewy";
    const handleTyping = () => {
      if (!isDeleting) {
        setDisplayText(fullText.substring(0, displayText.length + 1));
        if (displayText === fullText) {
          setTimeout(() => setIsDeleting(true), 8000);
        }
      } else {
        setDisplayText(fullText.substring(0, displayText.length - 1));
        if (displayText === '') {
          setIsDeleting(false);
        }
      }
    };

    const speed = isDeleting ? 100 : 200;
    const timer = setTimeout(handleTyping, speed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting]);

  const handleStoreClick = () => {
    alert(lang === 'zh' ? '应用即将上线，敬请期待！' : 'Coming soon to Microsoft Store!');
  };

  const toggleLang = () => {
    setLang(prev => prev === 'zh' ? 'en' : 'zh');
  };

  return (
    <>
      <div className="art-decorations">
        <div className="art-line art-line-1"></div>
        <div className="art-line art-line-2"></div>
        <div className="art-line art-line-3"></div>
        <div className="art-line art-line-4"></div>
        <div className="art-dot art-dot-1"></div>
        <div className="art-dot art-dot-2"></div>
        <div className="art-dot art-dot-3"></div>
      </div>

      <div className="main-container">
        <nav className="navbar">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="nav-logo"
          >
            <img src="/logo.png" alt="Bewy Logo" />
          </motion.div>
          <div className="nav-links">
            <a href="#features">{t.navFeatures}</a>
            <a href="#open-source">{t.navOSS}</a>
            <a href="https://dou.asia" target="_blank" rel="noreferrer">{t.navBlog}</a>
            <button onClick={toggleLang} className="lang-switch">
              <span className="bracket">[</span>
              <span className={`lang-item ${lang === 'en' ? 'active' : ''}`}>en</span>
              <span className="bracket">/</span>
              <span className={`lang-item ${lang === 'zh' ? 'active' : ''}`}>zh</span>
              <span className="bracket">]</span>
            </button>
          </div>
        </nav>

        <main>
          <section className="hero">
            <div className="hero-content">
              <h1 className="title">
                {displayText}
                <span className="title-cursor" />
              </h1>

              <p className="subtitle">
                {t.heroSubtitle}
                <span className="author-name">{t.author}</span>
              </p>

              <div className="hero-buttons">
                <a
                  href="https://gitee.com/qiumuu/bewyweb/releases/download/0.0.1/Release.zip"
                  className="btn btn-primary"
                >
                  {t.downloadZip}
                </a>
                <a
                  href="https://apps.microsoft.com/detail/9N6ZWQ8826FW?hl=zh&gl=US&ocid=pdpshare"
                  className="btn btn-outline"
                >
                  {t.msStore}
                </a>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2, delay: 0.2 }}
              className="hero-image-wrapper"
            >
              <img src="/image.png" alt="Bewy Editor Screenshot" className="hero-image" />
            </motion.div>
          </section>

          <section id="features" className="features">
            <div className="section-header">
              <h2>{t.featuresTitle}</h2>
              <div className="divider"></div>
            </div>
            <div className="feature-grid">
              <AnimatePresence mode="wait">
                {t.features.map((f, i) => (
                  <motion.div
                    key={lang + i}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.5, delay: i * 0.05 }}
                    className="feature-card"
                  >
                    <h3>{f.title}</h3>
                    <p>{f.description}</p>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </section>

          <section id="open-source" className="oss-section">
            <div className="section-header">
              <h2>{t.ossTitle}</h2>
              <div className="divider"></div>
            </div>
            <motion.a
              href="https://github.com/neilsondou/bewy"
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="oss-card"
            >
              <span className="oss-tag">{t.ossTag}</span>
              <h3 className="oss-title">neilsondou / bewy</h3>
              <p className="oss-desc">{t.ossDesc}</p>
            </motion.a>
          </section>
        </main>

        <footer className="footer">
          <p>
            {t.footerText}
            <a href="https://dou.asia" target="_blank" rel="noreferrer">
              <span className="author-name">{t.author}</span>
            </a>
          </p>
        </footer>
      </div>
    </>
  );
};

export default App;
