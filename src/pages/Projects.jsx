import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { ARCHIVE_PROJECTS, FILTERS, HEATMAP } from '../data/archiveProjects'

function Icon({ name, className = '' }) {
  return (
    <span className={`material-symbols-outlined ${className}`} style={{ fontSize: 'inherit' }}>
      {name}
    </span>
  )
}

function Visual({ type }) {
  if (type === 'rag') {
    return (
      <div className="viz">
        <div className="viz-top">
          <span style={{ color: '#ffb95f', display: 'flex', alignItems: 'center', gap: 4 }}>
            <Icon name="account_tree" /> HYBRID PIPELINE
          </span>
          <span className="viz-chip">BM25 + Dense RRF</span>
        </div>
        <div className="pipeline">
          <div className="node">
            <div className="node-ico">
              <Icon name="description" />
            </div>
            <span>DOC_CHUNKS</span>
          </div>
          <div className="stream a">
            <i />
          </div>
          <div className="node">
            <div className="node-ico accent">
              <Icon name="hub" />
            </div>
            <span style={{ color: '#d0bcff' }}>VECTOR_RERANK</span>
          </div>
          <div className="stream b">
            <i />
          </div>
          <div className="node">
            <div className="node-ico amber">
              <Icon name="psychology" />
            </div>
            <span style={{ color: '#ffb95f' }}>HALLUC_CHECK</span>
          </div>
        </div>
        <div className="telemetry">
          <span>
            LATENCY: <strong className="amber">142ms</strong>
          </span>
          <span>
            CONFIDENCE: <strong className="primary">99.4%</strong>
          </span>
          <span>
            PRUNED: <strong className="secondary">42% CTX</strong>
          </span>
        </div>
      </div>
    )
  }

  if (type === 'cli') {
    return (
      <div className="viz" style={{ padding: '0.5rem' }}>
        <div className="cli-bar">
          <span>
            AGENT_MODE: <strong style={{ color: '#d0bcff' }}>SWARM_REFACTOR</strong>
          </span>
          <span style={{ color: '#ffb95f' }}>MCP_SOCKET: CONNECTED</span>
        </div>
        <div className="cli-lines">
          <div style={{ color: '#e9ddff' }}>
            <span style={{ color: '#ffb95f' }}>&gt;</span> parth-cli --agent-mode swarm --task &quot;Refactor AST &amp; run
            tests&quot;
          </div>
          <div style={{ color: '#cbc3d7', fontSize: 11 }}>
            [INFO] Reading abstract syntax tree from <span style={{ color: '#e9dff1' }}>src/compiler/ast.cc</span>
          </div>
          <div style={{ color: '#fbabff', fontSize: 11, display: 'flex', alignItems: 'center', gap: 4 }}>
            <span className="pulse-dot" style={{ width: 6, height: 6, background: '#fbabff' }} />
            Synthesizing unified patch with Claude 3.5 Sonnet...
          </div>
          <div style={{ color: '#ffb95f', fontSize: 11 }}>[SUCCESS] 4 tools dispatched. 18 test assertions verified.</div>
        </div>
        <div className="telemetry">
          <span>
            DIFF: <strong className="primary">+128 / -34 LOC</strong>
          </span>
          <span>
            TOKENS: <strong className="amber">3,420 ($0.0102)</strong>
          </span>
        </div>
      </div>
    )
  }

  if (type === 'heatmap') {
    return (
      <div className="viz">
        <div className="viz-top">
          <span style={{ color: '#e9dff1', display: 'flex', alignItems: 'center', gap: 4, fontWeight: 600 }}>
            <Icon name="calendar_view_week" /> SM-2 REPETITION HEATMAP
          </span>
          <span style={{ color: '#ffb95f' }}>248 CONSECUTIVE DAYS</span>
        </div>
        <div className="heatmap">
          {HEATMAP.map((col, i) => (
            <div className="heat-col" key={i}>
              {col.map((c, j) => (
                <i className={c} key={j} />
              ))}
            </div>
          ))}
        </div>
        <div className="telemetry">
          <span>
            SYNC: <strong className="primary">AUTO (CRON)</strong>
          </span>
          <span>
            E-FACTOR: <strong className="amber">2.5 Δ</strong>
          </span>
          <span>
            SOLVED: <strong className="fg">650+</strong>
          </span>
        </div>
      </div>
    )
  }

  if (type === 'ast') {
    return (
      <div className="viz">
        <div className="viz-top">
          <span style={{ color: '#d0bcff', display: 'flex', alignItems: 'center', gap: 4, fontWeight: 600 }}>
            <Icon name="code_blocks" /> RECURSIVE DESCENT AST &amp; OPCODES
          </span>
          <span style={{ color: '#ffb95f' }}>TARGET: BYTECODE_VM</span>
        </div>
        <div className="ast-grid">
          <div className="ast-cell">
            <small>TOKENIZER</small>
            <span>LexerStream</span>
          </div>
          <div className="ast-cell">
            <small>PARSER</small>
            <span style={{ color: '#d0bcff' }}>AST::Node</span>
          </div>
          <div className="ast-cell hot">
            <small style={{ color: '#d0bcff' }}>EMITTER</small>
            <span style={{ color: '#ffb95f', fontWeight: 700 }}>OP_CALL 0x0F</span>
          </div>
          <div className="ast-cell">
            <small>STACK VM</small>
            <span style={{ color: '#fbabff' }}>ValStack[16]</span>
          </div>
        </div>
        <div className="telemetry">
          <span>
            TYPE CHECK: <strong className="primary">DETERMINISTIC</strong>
          </span>
          <span>
            GC: <strong className="amber">MARK &amp; SWEEP</strong>
          </span>
          <span>
            BUILD: <strong className="fg">CMAKE -O3</strong>
          </span>
        </div>
      </div>
    )
  }

  if (type === 'graph') {
    return (
      <div className="viz" style={{ position: 'relative' }}>
        <div className="viz-top">
          <span style={{ color: '#ffb95f', display: 'flex', alignItems: 'center', gap: 4, fontWeight: 600 }}>
            <Icon name="share" /> MST TOPOLOGY SOLVER (PRIM &amp; A*)
          </span>
          <span style={{ color: '#d0bcff' }}>O(E log V)</span>
        </div>
        <svg className="graph-svg" fill="none" viewBox="0 0 300 90">
          <line stroke="#494454" strokeDasharray="3 3" strokeWidth="1.5" x1="40" x2="110" y1="50" y2="25" />
          <line stroke="#ffb95f" strokeWidth="2.5" x1="40" x2="100" y1="50" y2="75" />
          <line stroke="#ffb95f" strokeWidth="2.5" x1="110" x2="190" y1="25" y2="30" />
          <line stroke="#494454" strokeDasharray="3 3" strokeWidth="1.5" x1="100" x2="190" y1="75" y2="70" />
          <line stroke="#ffb95f" strokeWidth="2.5" x1="190" x2="260" y1="30" y2="45" />
          <line stroke="#494454" strokeDasharray="3 3" strokeWidth="1.5" x1="190" x2="260" y1="70" y2="45" />
          <circle cx="40" cy="50" fill="#16111d" r="8" stroke="#d0bcff" strokeWidth="2" />
          <text fill="#e9dff1" fontFamily="JetBrains Mono" fontSize="8" textAnchor="middle" x="40" y="53">
            S0
          </text>
          <circle cx="110" cy="25" fill="#16111d" r="7" stroke="#494454" strokeWidth="1.5" />
          <circle cx="100" cy="75" fill="#ca8100" r="8" stroke="#ffb95f" strokeWidth="2" />
          <text fill="#100c18" fontFamily="JetBrains Mono" fontSize="8" fontWeight="bold" textAnchor="middle" x="100" y="78">
            P1
          </text>
          <circle cx="190" cy="30" fill="#ca8100" r="8" stroke="#ffb95f" strokeWidth="2" />
          <text fill="#100c18" fontFamily="JetBrains Mono" fontSize="8" fontWeight="bold" textAnchor="middle" x="190" y="33">
            P2
          </text>
          <circle cx="190" cy="70" fill="#16111d" r="7" stroke="#494454" strokeWidth="1.5" />
          <circle cx="260" cy="45" fill="#16111d" r="9" stroke="#d0bcff" strokeWidth="2" />
          <text fill="#d0bcff" fontFamily="JetBrains Mono" fontSize="8" textAnchor="middle" x="260" y="48">
            DST
          </text>
        </svg>
        <div className="telemetry">
          <span>
            PATH COST: <strong className="amber">MINIMAL (38.4 MPa)</strong>
          </span>
          <span>
            PRESSURE: <strong className="primary">DYNAMIC EQ</strong>
          </span>
        </div>
      </div>
    )
  }

  if (type === 'proc') {
    return (
      <div className="viz">
        <div className="viz-top">
          <span style={{ color: '#d0bcff', display: 'flex', alignItems: 'center', gap: 4, fontWeight: 600 }}>
            <Icon name="developer_board" /> CPU THREAD SCHEDULER &amp; PROCFS
          </span>
          <span style={{ color: '#ffb95f' }}>POLL: 50ms</span>
        </div>
        <div className="bars">
          <div>
            <div className="bar-meta">
              <span>CORE 0-3 (REALTIME HEURISTICS)</span>
              <span style={{ color: '#d0bcff' }}>82%</span>
            </div>
            <div className="track">
              <span style={{ width: '82%', background: '#d0bcff' }} />
            </div>
          </div>
          <div>
            <div className="bar-meta">
              <span>MEMORY PAGE FAULTS (PF/SEC)</span>
              <span style={{ color: '#ffb95f' }}>14.2/s</span>
            </div>
            <div className="track">
              <span style={{ width: '34%', background: '#ffb95f' }} />
            </div>
          </div>
        </div>
        <div className="telemetry">
          <span>
            THREADS: <strong className="fg">194 ACTIVE</strong>
          </span>
          <span>
            NICE: <strong className="secondary">-10 HIGH PRIO</strong>
          </span>
          <span>
            IO_WAIT: <strong className="primary">0.12%</strong>
          </span>
        </div>
      </div>
    )
  }

  if (type === 'rbac') {
    return (
      <div className="viz">
        <div className="viz-top">
          <span style={{ color: '#fbabff', display: 'flex', alignItems: 'center', gap: 4, fontWeight: 600 }}>
            <Icon name="admin_panel_settings" /> ROLE ACCESS CONTROL (DOCTOR vs ADMIN)
          </span>
          <span style={{ color: '#d0bcff' }}>JWT // ENCRYPTED</span>
        </div>
        <div className="rbac">
          <div className="rbac-box l">
            <div style={{ color: '#d0bcff', fontWeight: 700, display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
              <span>DOCTOR PORTAL</span>
              <span style={{ fontSize: 9, background: 'rgba(208,188,255,0.2)', padding: '0 4px', borderRadius: 4 }}>LEVEL 2</span>
            </div>
            <p>Patient EHR read/write, automated diagnosis queue, prescription generator.</p>
          </div>
          <div className="rbac-box r">
            <div style={{ color: '#ffb95f', fontWeight: 700, display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
              <span>ADMIN OPS</span>
              <span style={{ fontSize: 9, background: 'rgba(255,185,95,0.2)', padding: '0 4px', borderRadius: 4 }}>LEVEL 4</span>
            </div>
            <p>Audit trail logs, billing analytics, role revoke policies, doctor schedule sync.</p>
          </div>
        </div>
        <div className="telemetry">
          <span>
            COMPLIANCE: <strong className="primary">HIPAA COMPLIANT</strong>
          </span>
          <span>
            QUEUE TIME: <strong className="amber">&lt; 15 SEC</strong>
          </span>
        </div>
      </div>
    )
  }

  return (
    <div className="viz">
      <div className="viz-top">
        <span style={{ color: '#d0bcff', display: 'flex', alignItems: 'center', gap: 4, fontWeight: 600 }}>
          <Icon name="center_focus_strong" /> 4-STAGE MORPHOLOGICAL RECTIFICATION
        </span>
        <span style={{ color: '#ffb95f' }}>ACCURACY: 99.7%</span>
      </div>
      <div className="cv-grid">
        <div className="cv-cell">
          <Icon name="filter_b_and_w" />
          <strong>BINARIZE</strong>
          <small>OTSU ADAPTIVE</small>
        </div>
        <div className="cv-cell">
          <Icon name="crop_rotate" />
          <strong>DESKEW</strong>
          <small>HOUGH HOMOG</small>
        </div>
        <div className="cv-cell">
          <Icon name="grid_4x4" />
          <strong>CONTOURS</strong>
          <small>BUBBLE CENTROIDS</small>
        </div>
        <div className="cv-cell hot">
          <Icon name="grade" />
          <strong style={{ color: '#d0bcff' }}>EVALUATE</strong>
          <small style={{ color: '#ffb95f' }}>CSV EXPORT</small>
        </div>
      </div>
      <div className="telemetry">
        <span>
          SHEET PARSE TIME: <strong className="primary">85ms / PAGE</strong>
        </span>
        <span>
          SKEW TOLERANCE: <strong className="amber">±25°</strong>
        </span>
      </div>
    </div>
  )
}

export default function Projects() {
  const [filter, setFilter] = useState('all')
  const [query, setQuery] = useState('')

  const visible = useMemo(() => {
    const q = query.toLowerCase().trim()
    return ARCHIVE_PROJECTS.filter((p) => {
      const cat = filter === 'all' || p.category === filter
      const search =
        !q ||
        p.keywords.toLowerCase().includes(q) ||
        p.title.toLowerCase().includes(q) ||
        p.body.toLowerCase().includes(q)
      return cat && search
    })
  }, [filter, query])

  function reset() {
    setFilter('all')
    setQuery('')
  }

  return (
    <div className="archive-page" id="top">
      <main className="archive-main">
        <section className="archive-hero">
          <div className="glow-a" />
          <div className="glow-b" />
          <div className="archive-hero-inner">
            <div className="archive-top">
              <Link className="back-link" to="/">
                <span className="material-symbols-outlined" style={{ fontSize: 16 }}>
                  arrow_back
                </span>
                RETURN_TO_OVERVIEW
              </Link>
              <div className="status-pill">
                <span className="ping-wrap">
                  <span className="ping" />
                  <span className="ping-core" />
                </span>
                <span>AVAILABLE FOR AI &amp; SYSTEMS ROLES</span>
              </div>
            </div>
            <div>
              <div className="archive-kicker">
                <span className="amber">// 04 ARCHIVE</span>
                <span>•</span>
                <span>PRODUCTION SYSTEMS • AGENTIC WORKFLOWS • COMPILERS</span>
              </div>
              <h1>
                ARCHITECTED &amp; <span>ENGINEERED.</span>
              </h1>
              <p>
                Building practical AI and software systems — from RAG-based knowledge assistants and LLM developer tools to backend APIs, compilers, algorithms, and full-stack applications.

              </p>
            </div>
            {/* <div className="metrics">
              <div className="metric-card">
                <span className="label">DEPLOYED RUNTIMES</span>
                <span className="value">08 Systems</span>
                <span className="hint primary">
                  <Icon name="check_circle" /> Production Ready
                </span>
              </div>
              <div className="metric-card">
                <span className="label">ORCHESTRATION</span>
                <span className="value">15+ Agents</span>
                <span className="hint secondary">
                  <Icon name="hub" /> Autonomous Loops
                </span>
              </div>
              <div className="metric-card">
                <span className="label">RETRIEVAL PRECISION</span>
                <span className="value amber">99.8%</span>
                <span className="hint muted">
                  <Icon name="insights" /> Hybrid BM25+RRF
                </span>
              </div>
              <div className="metric-card">
                <span className="label">CORE COMPILERS</span>
                <span className="value">C++20 / Py</span>
                <span className="hint primary">
                  <Icon name="terminal" /> Bare Metal &amp; POSIX
                </span>
              </div>
            </div> */}
          </div>
        </section>

        <section className="filter-bar">
          <div className="filter-inner">
            <div className="filter-pills">
              {FILTERS.map((f) => (
                <button
                  key={f.id}
                  className={`filter-btn ${filter === f.id ? 'active' : ''}`}
                  type="button"
                  onClick={() => setFilter(f.id)}
                >
                  {f.label}
                </button>
              ))}
            </div>
            <div className="search-wrap">
              <div className="icon">
                <span className="material-symbols-outlined" style={{ fontSize: 18 }}>
                  search
                </span>
              </div>
              <input
                placeholder="Filter tech (e.g., C++, FastAPI, LangChain)..."
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
            </div>
          </div>
        </section>

        <section className="archive-grid-wrap">
          {visible.length > 0 ? (
            <div className="archive-grid">
              {visible.map((p) => (
                <article className="p-card" key={p.id}>
                  <div
                    className={`sticker ${p.badge.tone}`}
                    style={{ transform: `rotate(${p.badge.rotate}deg)` }}
                  >
                    {p.badge.text}
                  </div>
                  <div>
                    <div className="term-row">
                      <div className="pips">
                        <span className="pip r" />
                        <span className="pip y" />
                        <span className="pip g" />
                        <span className="branch">{p.branch}</span>
                      </div>
                      <span className={`code-tag ${p.codeTone}`}>{p.code}</span>
                    </div>
                    <Visual type={p.visual} />
                    <h3>{p.title}</h3>
                    <p className="desc">{p.body}</p>
                    <div className="feat-row">
                      {p.features.map((f) => (
                        <div key={f.text}>
                          <span
                            className="material-symbols-outlined"
                            style={{
                              fontSize: 15,
                              color: f.color === 'primary' ? '#d0bcff' : f.color === 'tertiary' ? '#ffb95f' : '#fbabff',
                            }}
                          >
                            {f.icon}
                          </span>
                          {f.text}
                        </div>
                      ))}
                    </div>
                    <div className="tag-pills">
                      {p.tags.map((t) => (
                        <span className={t.tone} key={t.text}>
                          {t.text}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="card-cta">
                    <a className={`pri ${p.primaryCta.tone}`} href={p.primaryCta.href} rel="noreferrer" target="_blank">
                      {p.primaryCta.label}
                      <span className="material-symbols-outlined" style={{ fontSize: 16 }}>
                        arrow_outward
                      </span>
                    </a>
                    <a className="sec" href={p.secondaryCta.href} rel="noreferrer" target="_blank">
                      <span className="material-symbols-outlined" style={{ fontSize: 16 }}>
                        terminal
                      </span>
                      {p.secondaryCta.label}
                    </a>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="empty-state">
              <div className="empty-ico">
                <span className="material-symbols-outlined">troubleshoot</span>
              </div>
              <div>
                <h4>No Projects Found</h4>
                <p>No production systems match the specified technical filter or search query.</p>
              </div>
              <button className="reset-btn" type="button" onClick={reset}>
                RESET FILTERS
              </button>
            </div>
          )}
        </section>

        <section className="archive-cta">
          <div className="cta-banner">
            <div className="cta-flare-r" />
            <div className="cta-flare-l" />
            <div className="cta-inner">
              <div>
                <div className="cta-kicker">
                  <span className="ping-core" />
                  TECHNICAL COLLABORATION // RESEARCH
                </div>
                <h2>Have a project or architecture in mind?</h2>
                <p>
                  Open to AI/GenAI and Software Engineering opportunities, where I can build practical LLM applications, backend systems, and intelligent developer tools while continuing to grow as an engineer.

                </p>
              </div>
              <div className="cta-actions">
                <Link className="cta-gold" to="/#contact">
                  Let&apos;s Build Together
                  <span className="material-symbols-outlined" style={{ fontSize: 18, marginLeft: 6 }}>
                    arrow_outward
                  </span>
                </Link>
                <a className="cta-mail" href="mailto:parthverma733@gmail.com">
                  <span className="material-symbols-outlined" style={{ fontSize: 16, marginRight: 6 }}>
                    terminal
                  </span>
                  parthverma733@gmail.com
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="archive-footer">
        <div className="archive-footer-inner">
          <div className="footer-status">
            <div className="footer-status-left">
              <span className="ping-wrap" style={{ width: 12, height: 12 }}>
                <span className="ping" />
                <span className="ping-core" style={{ width: 12, height: 12 }} />
              </span>
              <span>Open to AI Engineering &amp; Backend Dev</span>
            </div>
            <div className="footer-links">
              <a href="mailto:parthverma733@gmail.com">
                <span className="material-symbols-outlined" style={{ fontSize: 16 }}>
                  mail
                </span>
                parthverma733@gmail.com
              </a>
              <a href="https://github.com/Parthverma733/" rel="noreferrer" target="_blank">
                <span className="material-symbols-outlined" style={{ fontSize: 16 }}>
                  terminal
                </span>
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/parth-verma-57856824a/" rel="noreferrer" target="_blank">
                <span className="material-symbols-outlined" style={{ fontSize: 16 }}>
                  hub
                </span>
                LinkedIn
              </a>
            </div>
          </div>
          <div className="footer-bottom">
            <div>
              <span style={{ fontFamily: 'JetBrains Mono', fontSize: 10, letterSpacing: '0.12em', color: '#958ea0' }}>
                © 2025 PARTH VERMA. ALL RIGHTS RESERVED.
              </span>
              <span style={{ margin: '0 8px', color: '#494454' }}>•</span>
              <span style={{ fontFamily: 'JetBrains Mono', fontSize: 10 }}>SYS_STATUS: ONLINE</span>
            </div>
            <div className="footer-nav">
              <Link to="/projects">Projects</Link>
              <Link to="/#skills">Stack</Link>
              <Link to="/#contact">Contact</Link>
              <a href="#top" style={{ fontFamily: 'JetBrains Mono', fontSize: 10, letterSpacing: '0.12em', color: '#958ea0' }}>
                <span className="material-symbols-outlined" style={{ fontSize: 14 }}>
                  vertical_align_top
                </span>
                TOP
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
