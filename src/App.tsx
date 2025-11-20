import React, { useState, useEffect } from 'react';
import { 
  BookOpen, 
  Code, 
  Mail, 
  Github, 
  Linkedin, 
  Twitter, 
  FileText, 
  Zap, 
  Copy, 
  ExternalLink,
  Menu,
  X,
  MapPin,
  GraduationCap,
  Book,
  MessageSquare,
  Award,
  Palette,
  Check,
  User,
  Camera
} from 'lucide-react';

import { HAO_DATA } from './content';

const THEMES = {
  paper: {
    id: 'paper',
    name: 'Paper',
    bg: 'bg-[#FFFCF5]',
    text: 'text-slate-800',
    textMuted: 'text-slate-500',
    font: 'font-serif',
    navBg: 'bg-[#FFFCF5]/95',
    border: 'border-slate-200',
    accent: 'text-blue-700',
    accentBg: 'bg-blue-700',
    cardBg: 'bg-white',
    highlight: 'bg-yellow-100',
    badgeConf: 'bg-blue-600 text-white',
    badgeJournal: 'bg-emerald-600 text-white',
    badgePre: 'bg-amber-500 text-white',
  },
  lab: {
    id: 'lab',
    name: 'Lab',
    bg: 'bg-slate-50',
    text: 'text-slate-900',
    textMuted: 'text-slate-500',
    font: 'font-sans',
    navBg: 'bg-white/90',
    border: 'border-slate-200',
    accent: 'text-blue-600',
    accentBg: 'bg-blue-600',
    cardBg: 'bg-white',
    highlight: 'bg-blue-50',
    badgeConf: 'bg-blue-100 text-blue-800',
    badgeJournal: 'bg-emerald-100 text-emerald-800',
    badgePre: 'bg-amber-100 text-amber-800',
  },
  night: {
    id: 'night',
    name: 'Night',
    bg: 'bg-[#0F172A]',
    text: 'text-slate-200',
    textMuted: 'text-slate-400',
    font: 'font-sans',
    navBg: 'bg-[#0F172A]/90',
    border: 'border-slate-800',
    accent: 'text-sky-400',
    accentBg: 'bg-sky-500',
    cardBg: 'bg-[#1E293B]',
    highlight: 'bg-indigo-500/20',
    badgeConf: 'bg-sky-900 text-sky-200',
    badgeJournal: 'bg-emerald-900 text-emerald-200',
    badgePre: 'bg-amber-900 text-amber-200',
  }
};

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [pubFilter, setPubFilter] = useState('All');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [currentTheme, setCurrentTheme] = useState('paper');
  const [themeMenuOpen, setThemeMenuOpen] = useState(false);

  const theme = (THEMES as any)[currentTheme];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setActiveTab(id);
    const el = document.getElementById(id);
    if (el) {
      const offset = 100;
      const top = el.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  const filteredPublications = HAO_DATA.publications.filter(p => 
    pubFilter === 'All' || p.type === pubFilter
  );

  const MarginNote: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = "" }) => (
    <div className={`
      hidden lg:block
      absolute top-0 left-[105%] w-48 
      text-sm ${theme.textMuted} italic leading-snug
      ${className}
    `}>
      {children}
    </div>
  );

  const MobileNote: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <details className={`lg:hidden mt-3 border-t ${theme.border} pt-2`}>
      <summary className={`cursor-pointer text-xs font-bold ${theme.textMuted} uppercase tracking-wider list-none flex items-center gap-1 hover:${theme.accent} transition-colors`}>
        <MessageSquare size={12} /> Details & Links
      </summary>
      <div className="pt-2 space-y-2">
        {children}
      </div>
    </details>
  );

  const ActionLink: React.FC<{ href: string; icon: React.ComponentType<any>; children: React.ReactNode }> = ({ href, icon: Icon, children }) => (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex items-center gap-2 ${theme.textMuted} hover:${theme.accent} transition-colors group`}
    >
      <Icon size={14} className="group-hover:stroke-[2.5px]" />
      <span className="decoration-slate-300 underline-offset-2 group-hover:underline">{children}</span>
    </a>
  );

  const NavItem: React.FC<{ href: string; active: boolean; onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void; children: React.ReactNode }> = ({ href, active, onClick, children }) => (
    <a
      href={href}
      onClick={onClick}
      className={`
        px-3 py-1 rounded-md text-sm font-medium transition-all
        ${active 
          ? `${theme.text} bg-opacity-10 bg-slate-500` 
          : `${theme.textMuted} hover:${theme.text} hover:bg-opacity-5 hover:bg-slate-500`}
      `}
    >
      {children}
    </a>
  );

  const ExtNavItem: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`px-3 py-1 rounded-md text-sm font-medium transition-all ${theme.textMuted} hover:${theme.text} hover:bg-opacity-5 hover:bg-slate-500`}
    >
      {children}
    </a>
  );

  const FilterBadge: React.FC<{ active: boolean; onClick: () => void; children: React.ReactNode }> = ({ active, onClick, children }) => (
    <button
      onClick={onClick}
      className={`
        px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase transition-all
        ${active 
          ? `${theme.accentBg} text-white shadow-md` 
          : `${theme.cardBg} border ${theme.border} ${theme.textMuted} hover:border-slate-400 hover:${theme.text}`}
      `}
    >
      {children}
    </button>
  );

  return (
    <div className={`min-h-screen ${theme.bg} ${theme.text} ${theme.font} transition-colors duration-500 selection:bg-yellow-100 selection:text-black`}>
      <header 
        className={`
          fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b
          ${scrolled ? `${theme.navBg} backdrop-blur-sm ${theme.border} shadow-sm py-2` : 'bg-transparent border-transparent py-4'}
        `}
      >
        <div className="max-w-5xl mx-auto px-6 flex items-center justify-between">
          <a href="#home" onClick={scrollTo('home')} className="flex items-center gap-3 group">
            <div className={`w-8 h-8 ${currentTheme === 'night' ? 'bg-white text-slate-900' : 'bg-slate-900 text-[#FFFCF5]'} flex items-center justify-center font-serif font-bold text-xl rounded-md group-hover:${theme.accentBg} group-hover:text-white transition-colors`}>
              H
            </div>
            <span className={`font-sans font-bold text-lg tracking-tight group-hover:${theme.accent} transition-colors`}>
              Hao Zeng
            </span>
          </a>

          <div className="hidden md:flex items-center gap-4 font-sans">
            <nav className="flex items-center gap-1">
              {['Home', 'Research', 'Service', 'Contact'].map(item => (
                <NavItem 
                  key={item} 
                  href={`#${item.toLowerCase()}`} 
                  active={activeTab === item.toLowerCase()} 
                  onClick={scrollTo(item.toLowerCase())}
                >
                  {item}
                </NavItem>
              ))}
              <ExtNavItem href={HAO_DATA.profile.cvUrl}>CV</ExtNavItem>
              <ExtNavItem href={HAO_DATA.profile.teachingUrl}>Teaching</ExtNavItem>
              <ExtNavItem href={HAO_DATA.profile.seminarsUrl}>Seminars</ExtNavItem>
            </nav>

            <div className="relative">
              <button 
                onClick={() => setThemeMenuOpen(!themeMenuOpen)}
                className={`p-2 rounded-full hover:bg-slate-500/10 transition-colors ${theme.textMuted} hover:${theme.text}`}
                title="Change Theme"
              >
                <Palette size={20} />
              </button>
              {themeMenuOpen && (
                <div className={`absolute top-full right-0 mt-2 w-32 ${theme.cardBg} border ${theme.border} rounded-lg shadow-xl p-1 flex flex-col gap-1 z-50 overflow-hidden`}>
                  {Object.values(THEMES).map((t: any) => (
                    <button
                      key={t.id}
                      onClick={() => { setCurrentTheme(t.id); setThemeMenuOpen(false); }}
                      className={`
                        text-left px-3 py-2 text-sm font-medium rounded-md flex items-center justify-between
                        ${currentTheme === t.id 
                          ? `${theme.highlight} ${theme.text}` 
                          : `${theme.textMuted} hover:${theme.text} hover:bg-slate-500/5`}
                      `}
                    >
                      {t.name}
                      {currentTheme === t.id && <Check size={14} />}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="md:hidden flex items-center gap-2">
            <button 
              onClick={() => {
                const themeIds = Object.keys(THEMES);
                const nextIndex = (themeIds.indexOf(currentTheme) + 1) % themeIds.length;
                setCurrentTheme(themeIds[nextIndex]);
              }}
              className={`p-2 ${theme.textMuted}`}
            >
              <Palette size={20} />
            </button>
            <button 
              className={`p-2 ${theme.textMuted}`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <nav className={`md:hidden ${theme.bg} border-b ${theme.border} px-6 py-4 flex flex-col gap-2 font-sans shadow-xl absolute w-full`}>
            {['Home', 'Research', 'Service', 'Contact'].map(item => (
              <NavItem 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                active={activeTab === item.toLowerCase()} 
                onClick={scrollTo(item.toLowerCase())}
              >
                {item}
              </NavItem>
            ))}
            <a href={HAO_DATA.profile.cvUrl} target="_blank" rel="noopener noreferrer" className={`${theme.textMuted} hover:${theme.text}`}>CV</a>
            <a href={HAO_DATA.profile.teachingUrl} target="_blank" rel="noopener noreferrer" className={`${theme.textMuted} hover:${theme.text}`}>Teaching</a>
            <a href={HAO_DATA.profile.seminarsUrl} target="_blank" rel="noopener noreferrer" className={`${theme.textMuted} hover:${theme.text}`}>Seminars</a>
          </nav>
        )}
      </header>

      <main className="max-w-5xl mx-auto px-6 pt-32 pb-20">
        <div className="lg:grid lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-8 space-y-24">
            <section id="home" className="relative">
              <div className="flex flex-col-reverse md:flex-row gap-8 md:items-start justify-between mb-8">
                <div className="flex-1">
                  <h1 className="text-5xl font-serif font-bold mb-6 tracking-tight">
                    Hao Zeng <span className={`text-3xl font-normal ${theme.textMuted}`}>（曾浩）</span>
                  </h1>
                  <div className={`font-sans text-sm font-medium ${theme.textMuted} mb-6 space-y-1`}>
                    <div className="flex items-center gap-2">
                      <GraduationCap size={16} />
                      <span>Postdoctoral Researcher @ SUSTech & NUS</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={16} />
                      <span>Shenzhen, China</span>
                    </div>
                  </div>
                  <p className={`text-xl leading-relaxed ${currentTheme === 'night' ? 'text-slate-300' : 'text-slate-800'}`}>
                    {HAO_DATA.profile.bio}
                  </p>
                </div>
                <div className={`
                   relative shrink-0 w-32 h-32 md:w-40 md:h-40 rounded-lg overflow-hidden border-2 ${theme.border}
                   ${currentTheme === 'night' ? 'bg-slate-800' : 'bg-slate-200'} 
                   flex items-center justify-center group
                `}>
                  <div className={`flex flex-col items-center justify-center ${theme.textMuted} opacity-70`}>
                    <Camera size={24} className="mb-1"/>
                    <span className="text-[10px] font-sans font-bold uppercase tracking-widest">Portrait</span>
                  </div>
                </div>
              </div>
              <MarginNote className="top-32 space-y-3">
                <div className={`font-sans font-bold ${theme.text} mb-1 uppercase text-xs tracking-widest`}>Connect</div>
                <ActionLink href={HAO_DATA.profile.scholar} icon={BookOpen}>Google Scholar</ActionLink>
                <ActionLink href={HAO_DATA.profile.github} icon={Github}>GitHub</ActionLink>
                <ActionLink href={HAO_DATA.profile.openreview} icon={Book}>OpenReview</ActionLink>
                <ActionLink href={`mailto:${HAO_DATA.profile.email}`} icon={Mail}>Email</ActionLink>
              </MarginNote>
              <MobileNote>
                 <ActionLink href={HAO_DATA.profile.scholar} icon={BookOpen}>Google Scholar</ActionLink>
                 <ActionLink href={HAO_DATA.profile.github} icon={Github}>GitHub</ActionLink>
                 <ActionLink href={HAO_DATA.profile.openreview} icon={Book}>OpenReview</ActionLink>
                 <ActionLink href={`mailto:${HAO_DATA.profile.email}`} icon={Mail}>Email</ActionLink>
              </MobileNote>
              <div className={`mt-12 pt-8 border-t ${theme.border}`}>
                 <h3 className={`font-sans font-bold text-sm ${theme.textMuted} uppercase tracking-widest mb-6`}>Latest News</h3>
                 <ul className="space-y-4">
                   {HAO_DATA.news.map((item, i) => (
                     <li key={i} className="grid grid-cols-[80px_1fr] gap-4 items-baseline">
                       <span className={`font-sans text-xs font-bold ${theme.textMuted} text-right`}>{item.date}</span>
                       <span 
                         className="text-base"
                         dangerouslySetInnerHTML={{__html: item.content.replace(/\*\*(.*?)\*\*/g, `<strong class="font-bold ${theme.text} ${theme.highlight} px-1 rounded-sm">$1</strong>`)}} 
                       />
                     </li>
                   ))}
                 </ul>
              </div>
            </section>

            <section id="research" className="relative">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-10 gap-4">
                <h2 className="text-3xl font-bold">Selected Research</h2>
                <div className="flex gap-2 font-sans">
                  {['All', 'Conference', 'Journal', 'Preprint'].map(type => (
                    <FilterBadge 
                      key={type} 
                      active={pubFilter === type} 
                      onClick={() => setPubFilter(type)}
                    >
                      {type}
                    </FilterBadge>
                  ))}
                </div>
              </div>
              <div className="space-y-14">
                {filteredPublications.map((pub) => (
                  <article key={pub.id} className="relative group">
                    <h3 className={`text-xl font-bold ${theme.text} mb-2 group-hover:${theme.accent} transition-colors`}>
                      {pub.title}
                    </h3>
                    <div className={`text-base ${currentTheme === 'night' ? 'text-slate-300' : 'text-slate-700'} mb-2 leading-relaxed`}>
                      {pub.authors.split(',').map((author, i, arr) => (
                        <span key={i}>
                          {author.includes("Hao Zeng") 
                            ? <span className={`font-bold ${theme.text} border-b-2 ${theme.border}`}>{author.trim()}</span> 
                            : author.trim()}
                          {i < arr.length - 1 ? ', ' : ''}
                        </span>
                      ))}
                    </div>
                    <div className={`font-sans text-sm font-medium ${theme.textMuted} flex items-center gap-2`}>
                      <span className={`px-2 py-0.5 rounded text-xs font-bold ${
                        pub.type === 'Conference' ? theme.badgeConf : 
                        pub.type === 'Journal' ? theme.badgeJournal : theme.badgePre
                      }`}>
                        {pub.type}
                      </span>
                      <span className="italic">{pub.venue}</span>
                      <span>({pub.year})</span>
                    </div>
                    <MarginNote className="top-1 space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                       <div className={`font-sans font-bold ${theme.text} mb-1 uppercase text-xs tracking-widest`}>Resources</div>
                       {pub.pdf && <ActionLink href={pub.pdf} icon={FileText}>PDF</ActionLink>}
                       {pub.code && <ActionLink href={pub.code} icon={Code}>Code</ActionLink>}
                       <button 
                          onClick={() => navigator.clipboard.writeText(`@article{zeng${pub.year}, title={${pub.title}}}`)}
                          className={`flex items-center gap-2 ${theme.textMuted} hover:${theme.accent} transition-colors group w-full text-left`}
                       >
                          <Copy size={14} className="group-hover:stroke-[2.5px]" />
                          <span className="decoration-slate-300 underline-offset-2 group-hover:underline">BibTeX</span>
                       </button>
                    </MarginNote>
                    <MobileNote>
                       {pub.pdf && <ActionLink href={pub.pdf} icon={FileText}>PDF</ActionLink>}
                       {pub.code && <ActionLink href={pub.code} icon={Code}>Code</ActionLink>}
                       <button 
                          onClick={() => navigator.clipboard.writeText(`@article{zeng${pub.year}, title={${pub.title}}}`)}
                          className={`flex items-center gap-2 ${theme.textMuted} hover:${theme.accent} transition-colors group w-full text-left`}
                       >
                          <Copy size={14} /> BibTeX
                       </button>
                    </MobileNote>
                  </article>
                ))}
              </div>
            </section>

            <section id="service">
              <h2 className="text-3xl font-bold mb-8">Academic Service</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {HAO_DATA.services.map((s, i) => (
                  <div key={i} className={`${theme.cardBg} border ${theme.border} p-6 rounded-lg shadow-sm transition-colors duration-300`}>
                    <h3 className={`font-sans font-bold ${theme.text} mb-4 flex items-center gap-2`}>
                      <Award size={18} className={theme.accent}/> {s.type}
                    </h3>
                    <ul className="space-y-2">
                      {s.items.map((item, idx) => (
                        <li key={idx} className={`text-sm ${currentTheme === 'night' ? 'text-slate-300' : 'text-slate-700'} flex items-start gap-2`}>
                          <span className={`${theme.textMuted} mt-1.5`}>•</span> 
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            <section id="contact" className="pb-10">
              <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
              <p className={`text-lg ${currentTheme === 'night' ? 'text-slate-300' : 'text-slate-800'} mb-6`}>
                I am always open to discussing new research ideas, especially those related to trustworthy machine learning and statistical inference.
              </p>
              <a 
                href={`mailto:${HAO_DATA.profile.email}`}
                className={`inline-flex items-center gap-3 px-6 py-3 ${currentTheme === 'night' ? 'bg-sky-600 hover:bg-sky-500' : 'bg-slate-900 hover:bg-blue-700'} text-white font-sans font-bold rounded-md transition-colors`}
              >
                <Mail size={18} /> {HAO_DATA.profile.email}
              </a>
            </section>
          </div>
          <div className="hidden lg:block lg:col-span-4"></div>
        </div>
      </main>

      <footer className={`${theme.cardBg} border-t ${theme.border} py-12 mt-12 transition-colors duration-300`}>
        <div className={`max-w-5xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-sm ${theme.textMuted} font-sans`}>
           <p>&copy; 2025 Hao Zeng. All rights reserved.</p>
           <div className="flex gap-4 mt-4 md:mt-0">
             <a href={HAO_DATA.profile.scholar} target="_blank" rel="noopener noreferrer" className={`hover:${theme.text}`}>Google Scholar</a>
             <a href={HAO_DATA.profile.github} target="_blank" rel="noopener noreferrer" className={`hover:${theme.text}`}>GitHub</a>
             <a href={HAO_DATA.profile.openreview} target="_blank" rel="noopener noreferrer" className={`hover:${theme.text}`}>OpenReview</a>
           </div>
        </div>
      </footer>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Crimson+Pro:ital,wght@0,400;0,600;0,700;1,400&family=Inter:wght@400;500;700&display=swap');
        :root { --font-serif: 'Crimson Pro', Georgia, serif; --font-sans: 'Inter', -apple-system, sans-serif; }
        body { font-family: ${currentTheme === 'paper' ? 'var(--font-serif)' : 'var(--font-sans)'}; }
        .font-sans { font-family: var(--font-sans); }
        html { scroll-behavior: smooth; }
      `}</style>
    </div>
  );
}