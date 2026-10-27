import React from "react";
import { createRoot } from "react-dom/client";
import { motion } from "framer-motion";
import "./styles.css";

const tools = [
  { icon: "☁", name: "To-do", desc: "Tiny steps, softly organized.", tone: "lilac" },
  { icon: "♡", name: "Focus", desc: "A quiet space to get things done.", tone: "blue" },
  { icon: "✦", name: "Calendar", desc: "See your study rhythm at a glance.", tone: "peach" },
  { icon: "♫", name: "Sounds", desc: "Gentle sounds for deeper focus.", tone: "mint" }
];

function App() {
  return (
    <div className="site">
      <div className="paper-noise" aria-hidden="true" />
      <div className="wash wash-lilac" aria-hidden="true" />
      <div className="wash wash-blue" aria-hidden="true" />
      <div className="wash wash-blush" aria-hidden="true" />

      <header className="nav">
        <a className="brand" href="#" aria-label="Melo home">
          <span className="mark">✦</span>
          <span>melo</span>
        </a>

        <span className="nav-caption">a calmer way to get things done</span>

        <button className="tiny-menu" aria-label="Open menu">
          <span />
          <span />
        </button>
      </header>

      <main>
        <section className="hero" aria-labelledby="hero-title">
          <div className="tiny-flower flower-left" aria-hidden="true">✿</div>
          <motion.div
            className="tiny-star star-left"
            aria-hidden="true"
            animate={{ y: [0, -7, 0], rotate: [0, 10, 0], opacity: [.35, .9, .35] }}
            transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut" }}
          >✦</motion.div>
          <motion.div
            className="tiny-star star-right"
            aria-hidden="true"
            animate={{ y: [0, 6, 0], rotate: [0, -12, 0], opacity: [.25, .75, .25] }}
            transition={{ duration: 4.3, repeat: Infinity, ease: "easeInOut" }}
          >✧</motion.div>
          <div className="tiny-flower flower-right" aria-hidden="true">✿</div>

          <div className="hero-content">
            <p className="eyebrow">YOUR LITTLE FOCUS SPACE</p>
            <h1 id="hero-title">A calmer way<br /><em>to get things done.</em></h1>
            <p className="intro">
              A calm little corner for your tasks, focus, study rhythm<br className="desktop" />
              and everything in between.
            </p>
            <a className="primary-cta" href="#your-space">
              BEGIN YOUR DAY <span>→</span>
            </a>
          </div>

        </section>

        <section className="space" id="your-space" aria-labelledby="space-title">
          <div className="space-heading">
            <div>
              <p className="section-label">YOUR SPACE</p>
              <h2 id="space-title">What do you need?</h2>
            </div>
            <p className="section-copy">Everything important,<br />kept beautifully simple.</p>
          </div>

          <div className="tool-shell">
            <div className="tool-grid">
              {tools.map((tool, index) => (
                <motion.button
                  key={tool.name}
                  className={`tool-card ${tool.tone}`}
                  whileHover={{ y: -6 }}
                  whileTap={{ scale: .99 }}
                  transition={{ duration: .25, ease: "easeOut" }}
                  aria-label={`${tool.name}. ${tool.desc}`}
                >
                  <div className="tool-top">
                    <span className="tool-index">0{index + 1}</span>
                    <span className="tool-icon">{tool.icon}</span>
                  </div>
                  <div className="tool-bottom">
                    <h3>{tool.name}</h3>
                    <p>{tool.desc}</p>
                    <span className="open-link">OPEN <b>↗</b></span>
                  </div>
                </motion.button>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer>
        <span>made for little moments of focus</span>
        <span className="footer-mark">✦</span>
      </footer>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
