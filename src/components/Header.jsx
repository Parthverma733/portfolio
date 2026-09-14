import { useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { IconArrowUpRight, IconMenu, IconX } from './Icons'

const HOME_LINKS = [
  { to: '/#about', label: '01. About' },
  { to: '/#skills', label: '02. Stack' },
  { to: '/projects', label: '03. Projects' },
  { to: '/#experience', label: '04. Experience' },
  { to: '/#contact', label: '05. Contact' },
]

const ARCHIVE_LINKS = [
  { to: '/', label: 'Home', end: true },
  { to: '/#about', label: 'About' },
  { to: '/#skills', label: 'Stack' },
  { to: '/projects', label: 'Projects' },
  { to: '/#experience', label: 'Experience' },
  { to: '/#contact', label: 'Contact' },
]

export default function Header() {
  const { pathname } = useLocation()
  const isArchive = pathname.startsWith('/projects')
  const [open, setOpen] = useState(false)
  const links = isArchive ? ARCHIVE_LINKS : HOME_LINKS

  return (
    <header className={`site-header ${isArchive ? 'archive' : ''}`}>
      <div className="container header-inner">
        <Link className="brand" to="/" onClick={() => setOpen(false)}>
          <div className="brand-mark">
            <div className="brand-mark-inner">PV</div>
          </div>
          <div>
            <div className="brand-name">PARTH.VERMA</div>
            <div className="brand-sub">AI &amp; Agentic Systems</div>
          </div>
        </Link>

        <nav className={`desktop-nav ${isArchive ? 'archive-nav' : 'home-nav'}`}>
          {links.map((link) =>
            link.to === '/projects' ? (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) => (isActive ? 'active' : '')}
              >
                {link.label}
              </NavLink>
            ) : (
              <Link key={link.to} to={link.to}>
                {link.label}
              </Link>
            ),
          )}
        </nav>

        <div className="header-actions">
          <Link className="cta-talk" to="/#contact">
            Let&apos;s Talk
            <IconArrowUpRight className="w-4 h-4" size={16} />
          </Link>
          {isArchive && (
            <div className="person-chip" aria-hidden="true">
              <span className="material-symbols-outlined" style={{ fontSize: 18 }}>
                person
              </span>
            </div>
          )}
          <button
            type="button"
            className={`menu-toggle ${isArchive ? 'archive-only' : 'home-only'}`}
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <IconX size={18} /> : <IconMenu size={18} />}
          </button>
        </div>
      </div>
      {open && (
        <nav className="mobile-nav">
          {links.map((link) => (
            <Link key={link.to} to={link.to} onClick={() => setOpen(false)}>
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  )
}
