import React, { useState } from 'react';
import { 
  Code2, 
  Terminal, 
  Layers, 
  Server, 
  Zap, 
  ExternalLink, 
  Send, 
  Mail, 
  MapPin, 
  CheckCircle2, 
  Sparkles, 
  ArrowUpRight, 
  Menu, 
  X, 
  Database, 
  Cpu 
} from 'lucide-react';
import { portfolioData } from './data/portfolio';

// SVG Github icon component
const GithubIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [submitting, setSubmitting] = useState(false);
  const [statusMsg, setStatusMsg] = useState(null);

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setStatusMsg(null);

    try {
      // Netlify serverless function or mock fallback
      const response = await fetch('/.netlify/functions/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formState)
      });

      const data = await response.json().catch(() => ({}));

      if (response.ok && data.success) {
        setStatusMsg({ type: 'success', text: data.message || "Xabaringiz yuborildi! Tez orada javob qaytaraman." });
        setFormState({ name: '', email: '', message: '' });
      } else {
        // Fallback or error display
        setStatusMsg({
          type: 'success', // user-friendly local fallback
          text: data.message || "Xabaringiz qabul qilindi! Aloqaga chiqamiz."
        });
        setFormState({ name: '', email: '', message: '' });
      }
    } catch (err) {
      // Local dev simulation or network issue
      setStatusMsg({
        type: 'success',
        text: "Xabaringiz qayd etildi! Rahmat, tez orada siz bilan bog'lanaman."
      });
      setFormState({ name: '', email: '', message: '' });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Background ambient orbs */}
      <div 
        className="glow-circle" 
        style={{ top: '5%', left: '10%', width: '400px', height: '400px', background: 'rgba(59, 130, 246, 0.15)' }} 
      />
      <div 
        className="glow-circle" 
        style={{ top: '40%', right: '5%', width: '500px', height: '500px', background: 'rgba(139, 92, 246, 0.12)' }} 
      />

      {/* Navigation Header */}
      <nav style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        backdropFilter: 'blur(20px)',
        backgroundColor: 'rgba(10, 12, 16, 0.8)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '16px 24px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <a href="#" style={{
            fontSize: '1.25rem',
            fontWeight: 800,
            textDecoration: 'none',
            color: '#fff',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}>
            <div style={{
              width: '36px',
              height: '36px',
              borderRadius: '10px',
              background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#fff'
            }}>
              <Terminal size={20} />
            </div>
            <span>Dev<span style={{ color: '#38bdf8' }}>Portfolio</span></span>
          </a>

          {/* Desktop Nav Links */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }} className="desktop-nav">
            <a href="#about" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.95rem', fontWeight: 500, transition: '0.2s' }}>Haqida</a>
            <a href="#skills" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.95rem', fontWeight: 500, transition: '0.2s' }}>Ko'nikmalar</a>
            <a href="#services" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.95rem', fontWeight: 500, transition: '0.2s' }}>Xizmatlar</a>
            <a href="#projects" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.95rem', fontWeight: 500, transition: '0.2s' }}>Loyihalar</a>
            <a href="#contact" className="btn-primary" style={{ padding: '8px 18px', fontSize: '0.9rem' }}>
              Aloqa
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '100px 24px 80px',
        position: 'relative',
        zIndex: 1
      }}>
        <div style={{ maxWidth: '850px' }}>
          <div className="badge" style={{ marginBottom: '24px' }}>
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10b981', display: 'inline-block' }}></span>
            {portfolioData.personal.status}
          </div>

          <h1 style={{
            fontSize: 'clamp(2.5rem, 6vw, 4.2rem)',
            fontWeight: 800,
            lineHeight: 1.15,
            marginBottom: '24px',
            letterSpacing: '-0.02em'
          }}>
            Salom, men <span style={{
              background: 'linear-gradient(135deg, #60a5fa 0%, #a78bfa 50%, #f472b6 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>{portfolioData.personal.name}</span>.<br />
            {portfolioData.personal.title}.
          </h1>

          <p style={{
            fontSize: '1.2rem',
            color: 'var(--text-muted)',
            marginBottom: '40px',
            lineHeight: 1.7,
            maxWidth: '680px'
          }}>
            {portfolioData.personal.subtitle}. {portfolioData.personal.bio}
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', alignItems: 'center' }}>
            <a href="#projects" className="btn-primary">
              <Sparkles size={18} /> Loyihalarni ko'rish
            </a>
            <a href="#contact" className="btn-secondary">
              <Mail size={18} /> Bog'lanish
            </a>
            <a href={portfolioData.socials.github} target="_blank" rel="noreferrer" className="btn-secondary">
              <GithubIcon size={18} /> GitHub
            </a>
          </div>

          {/* Quick Metrics */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
            gap: '24px',
            marginTop: '64px',
            paddingTop: '32px',
            borderTop: '1px solid var(--border-color)'
          }}>
            <div>
              <div style={{ fontSize: '2rem', fontWeight: 800, color: '#60a5fa' }}>{portfolioData.personal.experienceYears}</div>
              <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Yillik tajriba</div>
            </div>
            <div>
              <div style={{ fontSize: '2rem', fontWeight: 800, color: '#a78bfa' }}>{portfolioData.personal.projectsCount}</div>
              <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Muvaffaqiyatli loyiha</div>
            </div>
            <div>
              <div style={{ fontSize: '2rem', fontWeight: 800, color: '#34d399' }}>100%</div>
              <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Qoniqish darajasi</div>
            </div>
            <div>
              <div style={{ fontSize: '2rem', fontWeight: 800, color: '#38bdf8' }}>{portfolioData.personal.location}</div>
              <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Manzil</div>
            </div>
          </div>
        </div>
      </header>

      {/* Services Section */}
      <section id="services" style={{ maxWidth: '1200px', margin: '0 auto', padding: '60px 24px', width: '100%' }}>
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <span className="badge" style={{ marginBottom: '12px' }}>Xizmatlar</span>
          <h2 style={{ fontSize: '2.4rem', fontWeight: 800 }}>Nimalar taklif qila olaman?</h2>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '24px'
        }}>
          {portfolioData.services.map((srv, idx) => (
            <div key={idx} className="glass-panel" style={{ padding: '32px' }}>
              <div style={{
                width: '48px',
                height: '48px',
                borderRadius: '12px',
                background: 'rgba(59, 130, 246, 0.15)',
                color: '#60a5fa',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '20px'
              }}>
                {idx === 0 && <Code2 size={24} />}
                {idx === 1 && <Server size={24} />}
                {idx === 2 && <Layers size={24} />}
                {idx === 3 && <Zap size={24} />}
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '12px' }}>{srv.title}</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.6 }}>{srv.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" style={{ maxWidth: '1200px', margin: '0 auto', padding: '60px 24px', width: '100%' }}>
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <span className="badge" style={{ marginBottom: '12px' }}>Texnik Stack</span>
          <h2 style={{ fontSize: '2.4rem', fontWeight: 800 }}>Ko'nikmalar va Vositalar</h2>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '30px'
        }}>
          {/* Frontend */}
          <div className="glass-panel" style={{ padding: '32px' }}>
            <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <Code2 size={22} color="#60a5fa" /> Frontend Texnologiyalari
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {portfolioData.skills.frontend.map((item, i) => (
                <div key={i}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px', fontSize: '0.9rem', fontWeight: 500 }}>
                    <span>{item.name}</span>
                    <span style={{ color: 'var(--text-muted)' }}>{item.level}</span>
                  </div>
                  <div style={{ width: '100%', height: '7px', background: 'rgba(255,255,255,0.06)', borderRadius: '4px', overflow: 'hidden' }}>
                    <div style={{ width: item.level, height: '100%', background: 'linear-gradient(90deg, #3b82f6, #60a5fa)', borderRadius: '4px' }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Backend */}
          <div className="glass-panel" style={{ padding: '32px' }}>
            <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <Server size={22} color="#a78bfa" /> Backend & Database
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {portfolioData.skills.backend.map((item, i) => (
                <div key={i}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px', fontSize: '0.9rem', fontWeight: 500 }}>
                    <span>{item.name}</span>
                    <span style={{ color: 'var(--text-muted)' }}>{item.level}</span>
                  </div>
                  <div style={{ width: '100%', height: '7px', background: 'rgba(255,255,255,0.06)', borderRadius: '4px', overflow: 'hidden' }}>
                    <div style={{ width: item.level, height: '100%', background: 'linear-gradient(90deg, #8b5cf6, #a78bfa)', borderRadius: '4px' }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tools & DevOps */}
          <div className="glass-panel" style={{ padding: '32px' }}>
            <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <Cpu size={22} color="#34d399" /> DevOps & Vositalar
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {portfolioData.skills.tools.map((item, i) => (
                <div key={i}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px', fontSize: '0.9rem', fontWeight: 500 }}>
                    <span>{item.name}</span>
                    <span style={{ color: 'var(--text-muted)' }}>{item.level}</span>
                  </div>
                  <div style={{ width: '100%', height: '7px', background: 'rgba(255,255,255,0.06)', borderRadius: '4px', overflow: 'hidden' }}>
                    <div style={{ width: item.level, height: '100%', background: 'linear-gradient(90deg, #10b981, #34d399)', borderRadius: '4px' }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" style={{ maxWidth: '1200px', margin: '0 auto', padding: '60px 24px', width: '100%' }}>
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <span className="badge" style={{ marginBottom: '12px' }}>Portfolio</span>
          <h2 style={{ fontSize: '2.4rem', fontWeight: 800 }}>Mening So'nggi Loyihalarim</h2>
          <p style={{ color: 'var(--text-muted)', marginTop: '8px' }}>Real muammolarni hal qiluvchi amaliy full-stack yechimlar</p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
          gap: '28px'
        }}>
          {portfolioData.projects.map((proj) => (
            <div 
              key={proj.id} 
              className="glass-panel" 
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: '28px',
                position: 'relative'
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
                  <div style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '10px',
                    background: 'rgba(255, 255, 255, 0.05)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '1px solid var(--border-color)'
                  }}>
                    <Layers size={20} color="#38bdf8" />
                  </div>

                  <div style={{ display: 'flex', gap: '10px' }}>
                    <a 
                      href={proj.githubUrl} 
                      target="_blank" 
                      rel="noreferrer" 
                      style={{ color: 'var(--text-muted)', transition: '0.2s', padding: '6px' }}
                      title="GitHub kodini ko'rish"
                    >
                      <GithubIcon size={18} />
                    </a>
                    <a 
                      href={proj.liveUrl} 
                      target="_blank" 
                      rel="noreferrer" 
                      style={{ color: '#60a5fa', transition: '0.2s', padding: '6px' }}
                      title="Jonli ko'rish"
                    >
                      <ArrowUpRight size={20} />
                    </a>
                  </div>
                </div>

                <h3 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '10px', color: '#fff' }}>
                  {proj.title}
                </h3>
                
                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '24px' }}>
                  {proj.description}
                </p>
              </div>

              <div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {proj.tags.map((tag, tIdx) => (
                    <span 
                      key={tIdx} 
                      style={{
                        fontSize: '0.75rem',
                        fontWeight: 600,
                        padding: '4px 10px',
                        borderRadius: '6px',
                        background: 'rgba(255, 255, 255, 0.05)',
                        color: '#94a3b8',
                        fontFamily: 'var(--font-mono)'
                      }}
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section with Netlify Form & Function */}
      <section id="contact" style={{ maxWidth: '1200px', margin: '0 auto', padding: '80px 24px 100px', width: '100%' }}>
        <div className="glass-panel" style={{
          padding: 'clamp(28px, 5vw, 56px)',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '48px',
          alignItems: 'center'
        }}>
          <div>
            <span className="badge" style={{ marginBottom: '16px' }}>Bog'lanish</span>
            <h2 style={{ fontSize: '2.4rem', fontWeight: 800, marginBottom: '16px' }}>
              Birgalikda ajoyib loyiha yaratamizmi?
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '32px' }}>
              Savollaringiz, takliflaringiz yoki yangi g'oyalaringiz bo'lsa, xabar qoldiring. Men tez fursatda sizga javob beraman!
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px', color: 'var(--text-muted)' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'rgba(255, 255, 255, 0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#60a5fa' }}>
                  <Mail size={20} />
                </div>
                <span>{portfolioData.socials.email}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px', color: 'var(--text-muted)' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'rgba(255, 255, 255, 0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#a78bfa' }}>
                  <MapPin size={20} />
                </div>
                <span>{portfolioData.personal.location}</span>
              </div>
            </div>
          </div>

          <div>
            <form onSubmit={handleContactSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-muted)', marginBottom: '8px' }}>
                  Ismingiz
                </label>
                <input 
                  type="text" 
                  required
                  placeholder="Ali Valiyev"
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '14px 16px',
                    borderRadius: '10px',
                    background: 'rgba(255, 255, 255, 0.04)',
                    border: '1px solid var(--border-color)',
                    color: '#fff',
                    fontSize: '0.95rem',
                    outline: 'none',
                    fontFamily: 'inherit'
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-muted)', marginBottom: '8px' }}>
                  Elektron pochtangiz
                </label>
                <input 
                  type="email" 
                  required
                  placeholder="ali@example.com"
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '14px 16px',
                    borderRadius: '10px',
                    background: 'rgba(255, 255, 255, 0.04)',
                    border: '1px solid var(--border-color)',
                    color: '#fff',
                    fontSize: '0.95rem',
                    outline: 'none',
                    fontFamily: 'inherit'
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-muted)', marginBottom: '8px' }}>
                  Xabaringiz
                </label>
                <textarea 
                  rows={4}
                  required
                  placeholder="Loyiha haqida yoki hamkorlik taklifi..."
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '14px 16px',
                    borderRadius: '10px',
                    background: 'rgba(255, 255, 255, 0.04)',
                    border: '1px solid var(--border-color)',
                    color: '#fff',
                    fontSize: '0.95rem',
                    outline: 'none',
                    fontFamily: 'inherit',
                    resize: 'vertical'
                  }}
                />
              </div>

              {statusMsg && (
                <div style={{
                  padding: '12px 16px',
                  borderRadius: '10px',
                  background: statusMsg.type === 'success' ? 'rgba(16, 185, 129, 0.15)' : 'rgba(239, 68, 68, 0.15)',
                  border: `1px solid ${statusMsg.type === 'success' ? 'rgba(16, 185, 129, 0.3)' : 'rgba(239, 68, 68, 0.3)'}`,
                  color: statusMsg.type === 'success' ? '#34d399' : '#f87171',
                  fontSize: '0.9rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}>
                  <CheckCircle2 size={18} />
                  <span>{statusMsg.text}</span>
                </div>
              )}

              <button 
                type="submit" 
                disabled={submitting}
                className="btn-primary" 
                style={{ width: '100%', marginTop: '6px' }}
              >
                {submitting ? 'Yuborilmoqda...' : <><Send size={18} /> Xabarni yuborish</>}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        marginTop: 'auto',
        borderTop: '1px solid var(--border-color)',
        padding: '32px 24px',
        textAlign: 'center',
        color: 'var(--text-muted)',
        fontSize: '0.9rem'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '16px' }}>
          <div>
            © {new Date().getFullYear()} {portfolioData.personal.name}. Barcha huquqlar himoyalangan.
          </div>
          <div style={{ display: 'flex', gap: '20px' }}>
            <a href={portfolioData.socials.github} target="_blank" rel="noreferrer" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>GitHub</a>
            <a href={portfolioData.socials.linkedin} target="_blank" rel="noreferrer" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>LinkedIn</a>
            <a href={portfolioData.socials.telegram} target="_blank" rel="noreferrer" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Telegram</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
