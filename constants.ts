import { Terminal, Layout, Cpu, Globe, Zap, FileCode, Layers, Command } from 'lucide-react';

export const DOWNLOAD_LINK = "https://gitee.com/qiumuu/bewyweb/releases/download/0.0.1/Release.zip";

export const FEATURES_DATA = {
  en: [
    {
      title: "Core Architecture",
      description: "Built on Flutter & Riverpod. Optimized RenderBox text rendering using Rope data structures for massive files.",
      icon: Layers,
      id: "01"
    },
    {
      title: "Multi-Window System",
      description: "Detachable tabs and windows. Complete window manager integration with custom title bars and flat design.",
      icon: Layout,
      id: "02"
    },
    {
      title: "LSP Integration",
      description: "Full Language Server Protocol client. Auto-completion, semantic highlighting, and hover documentation.",
      icon: Terminal,
      id: "03"
    },
    {
      title: "Global Search",
      description: "Ripgrep-powered search. Instant results across thousands of files with preview and replace functionality.",
      icon: Globe,
      id: "04"
    },
    {
      title: "Integrated Terminal",
      description: "Native PTY + xterm.js implementation. Supports PowerShell, WSL, Git Bash with multi-session management.",
      icon: Command,
      id: "05"
    },
    {
      title: "180+ Languages",
      description: "Syntax highlighting for over 180 languages. Smart indentation, bracket matching, and code folding.",
      icon: FileCode,
      id: "06"
    }
  ],
  zh: [
    {
      title: "核心架构",
      description: "基于 Flutter & Riverpod 构建。使用 Rope 数据结构优化 RenderBox 文本渲染，轻松处理超大文件。",
      icon: Layers,
      id: "01"
    },
    {
      title: "多窗口系统",
      description: "支持标签页和窗口分离。深度集成的窗口管理器，自定义标题栏与现代扁平化设计。",
      icon: Layout,
      id: "02"
    },
    {
      title: "LSP 深度集成",
      description: "完整的语言服务器协议客户端。支持智能代码补全、语义高亮显示和悬停文档查看。",
      icon: Terminal,
      id: "03"
    },
    {
      title: "全局搜索",
      description: "由 Ripgrep 驱动的极速搜索。支持在数千个文件中即时查找、预览并执行替换操作。",
      icon: Globe,
      id: "04"
    },
    {
      title: "集成终端",
      description: "原生 PTY + xterm.js 实现。完美支持 PowerShell、WSL、Git Bash 及多会话管理。",
      icon: Command,
      id: "05"
    },
    {
      title: "180+ 语言支持",
      description: "支持超过 180 种编程语言的语法高亮。具备智能缩进、括号匹配和代码折叠功能。",
      icon: FileCode,
      id: "06"
    }
  ]
};

export const BOOT_SEQUENCE_DATA = {
  en: [
    "> initializing kernel...",
    "> loading modules: [core, ui, lsp, term]...",
    "> mounting file_system...",
    "> checking updates... [SKIP]",
    "> starting daemon...",
    "> [SUCCESS] Bewy Environment Ready."
  ],
  zh: [
    "> 正在初始化内核...",
    "> 加载模块: [核心, 界面, LSP, 终端]...",
    "> 挂载文件系统...",
    "> 检查更新... [跳过]",
    "> 启动守护进程...",
    "> [成功] Bewy 环境已就绪。"
  ]
};