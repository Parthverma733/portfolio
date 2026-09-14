import { useState } from 'react'
import { Link } from 'react-router-dom'
import portrait from '../assets/portrait.jpg'
import {
  IconArrowRight,
  IconArrowUp,
  IconAtom,
  IconBinary,
  IconBot,
  IconBotMessage,
  IconCheckCircle,
  IconClock,
  IconCode,
  IconCpu,
  IconDatabase,
  IconDatabaseZap,
  IconExternalLink,
  IconFileDown,
  IconGitBranch,
  IconGitFork,
  IconGithub,
  IconLayers,
  IconLayoutGrid,
  IconLinkedin,
  IconMail,
  IconMapPin,
  IconSend,
  IconServer,
  IconSparkles,
  IconTerminal,
  IconTwitter,
  IconZap,
} from '../components/Icons'

const FEATURED = [
  {
    chips: [
      { t: 'LangChain', c: 'purple' },
      { t: 'RAG Engine', c: 'gold' },
      { t: 'FastAPI', c: 'slate' },
    ],
    tape: 'FLAGSHIP',
    title: 'Exploration Knowledge Assistant',
    body: 'An advanced enterprise-scale Generative Knowledge retrieval engine. Employs recursive chunking, BM25 + dense hybrid search, and cross-encoder re-ranking to deliver precise citations across unstructured engineering documentation.',
    feats: ['Zero hallucination filter', 'Vector similarity routing', 'Model Context Protocol', 'Streaming SSE response'],
    featColor: 'gold',
    stack: 'Python • ChromaDB • OpenAI API',
  },
  {
    chips: [
      { t: 'Agentic CLI', c: 'gold' },
      { t: 'Tool Calling', c: 'purple' },
      { t: 'Python', c: 'slate' },
    ],
    live: 'Active v1.2',
    title: 'LLM CLI Developer Assistant',
    body: 'Autonomous command-line agent that understands project context, generates shell scripts, diagnoses broken git diffs, executes verified refactoring tasks, and interacts with system-level commands through sandboxed execution.',
    feats: ['Sandboxed tool execution', 'Multi-turn memory', 'Token cost tracking', 'AST-based diff engine'],
    featColor: 'purple',
    stack: 'Click • Rich • Instructor • Claude 3.5',
  },
  {
    chips: [
      { t: 'Full-Stack', c: 'gold' },
      { t: 'React', c: 'cyan' },
      { t: 'FastAPI & SQL', c: 'slate' },
    ],
    title: 'LeetTracker Analytics Platform',
    body: 'An algorithm progress telemetry platform featuring spaced repetition scheduling (SM-2 variant), automated problem difficulty metrics, topic-wise mastery heatmaps, and revision reminders to elevate competitive coding performance.',
    feats: ['Spaced Repetition (SM-2)', 'Heatmap visualizer', 'JWT Auth & PostgreSQL', 'Automated LeetCode sync'],
    featColor: 'gold',
    stack: 'FastAPI • React.js • TailwindCSS',
  },
  {
    chips: [
      { t: 'Systems', c: 'sky' },
      { t: 'C++ / Java', c: 'purple' },
      { t: 'Bytecode', c: 'slate' },
    ],
    tape: 'SYSTEMS',
    title: 'Ronin Custom Language Compiler',
    body: 'A custom programming language frontend and bytecode compiler written from scratch. Includes an iterative lexer, recursive descent parser, symbol table manager, abstract syntax tree (AST) generator, and custom virtual machine execution loop.',
    feats: ['Custom Tokenizer & Lexer', 'AST Visitor Pattern', 'Stack VM Execution', 'Deterministic Typings'],
    featColor: 'purple',
    stack: 'C++ • LLVM Concepts • Java',
  },
]

export default function Home() {
  const [sent, setSent] = useState(false)

  function onSubmit(e) {
    e.preventDefault()
    setSent(true)
  }

  return (
    <div className="home-page">
      <main className="home-main">
        <div className="container ambient-glow">
          <section className="hero" id="hero">
            <div className="hero-grid">
              <div className="hero-copy">
                <div className="avail-pill">
                  <span className="pulse-dot" />
                  <span>Available for AI Engineering &amp; Backend Roles</span>
                </div>
                <div>
                  <div className="tape-badge tape-inline">⚡ Autonomous Agents • RAG • Production LLMs</div>
                  <h1>
                    I Engineer <br />
                    <span className="grad-text">Intelligent AI</span> <br />
                    Architectures.
                  </h1>
                </div>
                <p className="hero-lead">
                Parth Verma — AI / GenAI Developer &amp; Backend Engineer focused on building intelligent applications with RAG, LLMs, agentic workflows, tool calling, and scalable backend systems.

                </p>
                <div className="hero-actions">
                  <Link className="btn-primary" to="/projects">
                    <span>View Artifacts</span>
                    <IconLayoutGrid size={16} />
                  </Link>
                  <a className="btn-ghost" href="#contact">
                    <span>Get In Touch</span>
                    <IconSend size={16} />
                  </a>
                </div>
                <div className="social-row">
                  <span>Follow On:</span>
                  <a className="social-btn" href="https://github.com" rel="noreferrer" target="_blank" aria-label="GitHub">
                    <IconGithub size={16} />
                  </a>
                  <a className="social-btn" href="https://linkedin.com" rel="noreferrer" target="_blank" aria-label="LinkedIn">
                    <IconLinkedin size={16} />
                  </a>
                  <a className="social-btn" href="https://x.com" rel="noreferrer" target="_blank" aria-label="X">
                    <IconTwitter size={16} />
                  </a>
                </div>
              </div>

              <div className="hero-visual">
                <div className="orbit orbit-a" />
                <div className="orbit orbit-b" />
                <div className="orbit-glow" />
                <div className="portrait-frame">
                  <div className="tape-badge tape-abs">100% REASONING</div>
                  <div className="portrait-media">
                    <img src={portrait} alt="Parth Verma AI Engineer Portrait" />
                    <div className="portrait-vignette" />
                    <div className="philosophy">
                      <p className="kicker">CORE PHILOSOPHY</p>
                      <p className="quote">
                        &quot;Autonomous agents shouldn&apos;t just respond; they must orchestrate &amp; verify.&quot;
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mini-metrics">
                  <div>
                    <strong className="gold">15+</strong>
                    <span>Agentic Pipelines</span>
                  </div>
                  <div className="metric-mid">
                    <strong className="purple">99.8%</strong>
                    <span>RAG Precision</span>
                  </div>
                  <div>
                    <strong className="emerald">&lt;200ms</strong>
                    <span>P95 Latency</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="bento" id="about">
            <article className="card about">
              <div>
                <div className="section-tag">
                  <span className="tag-num gold">01</span>
                  <span className="tag-label">About Me</span>
                </div>
                <h2 className="about-title">
                   Building Practical Software with AI &{' '}
                  <span className="grad"> Backend Engineering.</span>.
                </h2>
                <p className="muted">
                  I’m a final-year Computer Science student focused on AI/GenAI and backend development.I enjoy building practical applications that combine LLMs, RAG, agentic workflows, APIs, and modern web technologies.
                </p>
                <ul className="pillar-list">
                  <li>
                    <IconCheckCircle size={16} className="gold" />
                    <span>AI / GenAI Applications, RAG &amp; LLM Integration</span>
                  </li>
                  <li>
                    <IconCheckCircle size={16} className="gold" />
                    <span>Agentic Workflows, Tool Calling &amp; MCP</span>
                  </li>
                  <li>
                    <IconCheckCircle size={16} className="gold" />
                    <span>Python, FastAPI, React &amp; Backend Development</span>
                  </li>
                </ul>
              </div>
              <a className="resume-btn" href="#contact">
                <IconFileDown size={16} />
                <span>Download Engineering Resume</span>
              </a>
            </article>

            <article className="card stack" id="skills">
              <div>
                <div className="stack-head">
                  <div className="section-tag">
                    <span className="tag-num purple">02</span>
                    <span className="tag-label">Skills &amp; Tech Stack</span>
                  </div>
                  <span className="tape-badge" style={{ padding: '2px 10px', fontSize: 10 }}>
                    ALWAYS EVOLVING
                  </span>
                </div>
                <div className="skills-grid">
                  <Skill abbr="PY" name="Python" sub="FastAPI / Async" color="#fbbf24" />
                  <Skill icon={<IconBot size={24} />} name="Agentic AI" sub="Autonomous Tools" color="#c084fc" />
                  <Skill icon={<IconGitFork size={24} />} name="LangChain" sub="Orchestration" color="#fbbf24" />
                  <Skill icon={<IconDatabase size={24} />} name="RAG & Embeddings" sub="Pinecone / Chroma" color="#c084fc" />
                  <Skill icon={<IconLayers size={24} />} name="MCP Protocol" sub="Context standard" color="#fbbf24" />
                  <Skill abbr="C++" name="C++ / Compilers" sub="Low-latency engine" color="#38bdf8" />
                  <Skill abbr="☕" name="Java" sub="Enterprise Systems" color="#fb923c" />
                  <Skill icon={<IconAtom size={24} />} name="React & JS" sub="Frontend Interfaces" color="#22d3ee" />
                  <Skill icon={<IconServer size={24} />} name="SQL / Postgres" sub="Relational & pgvector" color="#34d399" />
                  <Skill icon={<IconSparkles size={24} />} name="OpenAI & LLMs" sub="Claude / DeepSeek" color="#f472b6" />
                  <Skill icon={<IconGitBranch size={24} />} name="Git / CI/CD" sub="GitHub Actions" color="#fb923c" />
                  <Skill icon={<IconZap size={24} />} name="FastAPI" sub="Async Services" color="#2dd4bf" />
                </div>
              </div>
              <div className="stack-foot">
                <span>Continuous Evaluator: TruLens, Ragas</span>
                <span className="gold" style={{ fontWeight: 600 }}>
                  12 Core Technologies
                </span>
              </div>
            </article>
          </section>

          <section id="services">
            <div className="section-tag">
              <span className="tag-num gold">03</span>
              <span className="tag-label">Services &amp; Capabilities</span>
            </div>
            <div className="services-grid">
              <Service
                gold
                icon={<IconBotMessage size={24} />}
                title="Agentic AI Workflows"
                body="Designing self-correcting multi-agent networks, reasoning loops, tool-calling frameworks, and MCP servers tailored for domain workloads."
                link="Explore architecture"
              />
              <Service
                icon={<IconDatabaseZap size={24} />}
                title="Enterprise RAG Pipelines"
                body="Implementing hybrid semantic search, chunking optimizations, re-ranking cross-encoders, and vector index pruning for low hallucination."
                link="Learn pipeline design"
              />
              <Service
                gold
                icon={<IconTerminal size={24} />}
                title="High-Throughput Backend"
                body="Asynchronous FastAPI microservices, connection pooling, rate-limiting LLM gateways, and robust fault-tolerant distributed backends."
                link="Review stack"
              />
              <Service
                icon={<IconBinary size={24} />}
                title="Compiler & Systems Design"
                body="Lexical analysis, AST generation, memory management, and C++/Java system programming ensuring deep computational efficiency."
                link="Inspect compilers"
              />
            </div>
          </section>

          <section id="projects">
            <div className="projects-head">
              <div className="section-tag">
                <span className="tag-num gold">04</span>
                <span className="tag-label">Featured Projects</span>
              </div>
              <div className="projects-kicker">// Production-ready AI &amp; low-level artifacts</div>
            </div>
            <div className="home-projects">
              {FEATURED.map((p) => (
                <article className="project-card-home" key={p.title}>
                  <div className="body">
                    <div className="chip-row" style={{ justifyContent: 'space-between' }}>
                      <div className="chip-row">
                        {p.chips.map((c) => (
                          <span className={`chip ${c.c}`} key={c.t}>
                            {c.t}
                          </span>
                        ))}
                      </div>
                      {p.tape && <div className="tape-badge mini-tape">{p.tape}</div>}
                      {p.live && <span className="chip live">{p.live}</span>}
                    </div>
                    <div>
                      <h3>{p.title}</h3>
                      <p className="muted">{p.body}</p>
                    </div>
                    <div className="feat-grid">
                      {p.feats.map((f) => (
                        <div key={f}>
                          <span className={p.featColor === 'gold' ? 'gold' : 'purple'}>›</span> {f}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="project-foot">
                    <span>{p.stack}</span>
                    <a className="inspect" href="https://github.com" rel="noreferrer" target="_blank">
                      Inspect Source
                      <IconExternalLink size={14} />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section id="experience">
            <div className="section-tag">
              <span className="tag-num gold">05</span>
              <span className="tag-label">Experience &amp; Journey</span>
            </div>
            <div className="exp-grid">
              <div className="exp-card">
                <div className="exp-meta">
                  <div className="icon-sm gold">
                    <IconCpu size={20} />
                  </div>
                  <span className="date-chip gold">2024 - Present</span>
                </div>
                <h4>AI / GenAI Developer</h4>
                <p className="role-org">Independent Research &amp; Production Systems</p>
                <p>
                  Constructing agentic architectures utilizing the Model Context Protocol (MCP), fine-tuning local
                  open-source models, and building high-performance RAG pipelines.
                </p>
              </div>
              <div className="exp-card">
                <div className="exp-meta">
                  <div className="icon-sm purple">
                    <IconServer size={20} />
                  </div>
                  <span className="date-chip purple">2023 - 2024</span>
                </div>
                <h4>Backend Systems Engineer</h4>
                <p className="role-org">Distributed Services &amp; API Platforms</p>
                <p>
                  Engineered scalable asynchronous microservices in FastAPI, tuned PostgreSQL queries, set up caching
                  layers, and established automated CI/CD workflows.
                </p>
              </div>
              <div className="exp-card">
                <div className="exp-meta">
                  <div className="icon-sm gold">
                    <IconCode size={20} />
                  </div>
                  <span className="date-chip gold">2022 - 2023</span>
                </div>
                <h4>Systems &amp; Algorithms Fellow</h4>
                <p className="role-org">Low-Level Computing &amp; DSA</p>
                <p>
                  Authored custom compilers, analyzed algorithmic complexity over 500+ LeetCode problems, and created
                  developer utility tools.
                </p>
              </div>
            </div>
          </section>

          <section id="contact">
            <div className="contact-shell">
              <div className="section-tag" style={{ marginBottom: '2rem' }}>
                <span className="tag-num gold">06</span>
                <span className="tag-label">Get In Touch</span>
              </div>
              <div className="contact-grid">
                <div className="contact-copy">
                  <div className="tape-badge tape-inline">COLLABORATION READY</div>
                  <h3 className="contact-title">
                    Let&apos;s Build Something <span className="grad-text">Exceptional</span> Together.
                  </h3>
                  <p className="muted">
                    Have an ambitious GenAI roadmap, an autonomous agent to architect, or an engineering role that
                    demands solid algorithmic foundations? Drop me a message.
                  </p>
                  <div className="contact-info">
                    <div className="info-row">
                      <div className="info-icon gold">
                        <IconMail size={16} />
                      </div>
                      <div>
                        <small>Email</small>
                        <a href="mailto:parth.verma.dev@gmail.com">parth.verma.dev@gmail.com</a>
                      </div>
                    </div>
                    <div className="info-row">
                      <div className="info-icon purple">
                        <IconMapPin size={16} />
                      </div>
                      <div>
                        <small>Location</small>
                        <span>India • Available Globally (Remote)</span>
                      </div>
                    </div>
                    <div className="info-row">
                      <div className="info-icon emerald">
                        <IconClock size={16} />
                      </div>
                      <div>
                        <small>Timezone / Status</small>
                        <span>IST (UTC +5:30) • Open to Flexible Overlap</span>
                      </div>
                    </div>
                  </div>
                </div>
                <form className="form-panel" onSubmit={onSubmit}>
                  {sent && <p className="form-success">Message dispatched. Parth will get back to you shortly.</p>}
                  <div className="form-row">
                    <div className="field">
                      <label htmlFor="name">Your Name</label>
                      <input id="name" name="name" placeholder="e.g. Satoshi Nakamoto" required type="text" />
                    </div>
                    <div className="field">
                      <label htmlFor="email">Your Email</label>
                      <input id="email" name="email" placeholder="satoshi@domain.com" required type="email" />
                    </div>
                  </div>
                  <div className="field">
                    <label htmlFor="subject">Subject / Project Scope</label>
                    <input
                      id="subject"
                      name="subject"
                      placeholder="e.g. Agentic RAG Pipeline Consulting / Full-Time Role"
                      required
                      type="text"
                    />
                  </div>
                  <div className="field">
                    <label htmlFor="message">Your Message</label>
                    <textarea
                      id="message"
                      name="message"
                      placeholder="Share a brief overview of the project, timelines, or role details..."
                      required
                      rows="4"
                    />
                  </div>
                  <button className="btn-primary" style={{ width: '100%', justifyContent: 'center' }} type="submit">
                    <span>Dispatch Message</span>
                    <IconSend size={16} />
                  </button>
                </form>
              </div>
            </div>
          </section>
        </div>
      </main>
      <footer className="home-footer">
        <div className="container inner">
          <div className="left">
            <span className="dot-gold" />
            <span>© 2025 Parth Verma. Handcrafted with precision &amp; code.</span>
          </div>
          <a className="back-top" href="#hero">
            Back to Top
            <IconArrowUp size={14} />
          </a>
        </div>
      </footer>
    </div>
  )
}

function Skill({ abbr, icon, name, sub, color }) {
  return (
    <div className="skill-cell">
      {abbr ? (
        <span className="skill-abbr" style={{ color }}>
          {abbr}
        </span>
      ) : (
        <span style={{ color }}>{icon}</span>
      )}
      <strong>{name}</strong>
      <em>{sub}</em>
    </div>
  )
}

function Service({ gold, icon, title, body, link }) {
  return (
    <div className={`service-card ${gold ? '' : 'alt'}`}>
      <div>
        <div className={`icon-box ${gold ? 'gold' : 'purple'}`}>{icon}</div>
        <h3>{title}</h3>
        <p>{body}</p>
      </div>
      <Link className="service-link" style={{ color: gold ? '#fbbf24' : '#a855f7' }} to="/projects">
        <span>{link}</span>
        <IconArrowRight size={14} />
      </Link>
    </div>
  )
}
