import { useState, type FormEvent } from "react";
import {
  ArrowDown,
  ArrowUpRight,
  BadgeCheck,
  Camera,
  Clapperboard,
  Film,
  Instagram,
  Linkedin,
  Menu,
  Mic2,
  PenTool,
  Play,
  Scissors,
  Search,
  Sparkles,
  Wand2,
  X,
  Youtube,
} from "lucide-react";
import {
  bestPerformingVideo,
  certificates,
  channelStats,
  creator,
  experienceHighlights,
  skills,
  toolGroups,
} from "../content";

const navigation = [
  ["About", "about"],
  ["YouTube", "experience"],
  ["Work", "work"],
  ["Skills", "skills"],
  ["Certificates", "certificates"],
  ["Stats", "statistics"],
  ["Tools", "tools"],
  ["Contact", "contact"],
] as const;

function SocialIcon({ icon }: { icon: "youtube" | "instagram" | "linkedin" }) {
  if (icon === "youtube") return <Youtube size={17} strokeWidth={1.8} />;
  if (icon === "instagram") return <Instagram size={17} strokeWidth={1.8} />;
  return <Linkedin size={17} strokeWidth={1.8} />;
}

function BrandWordmark({ tagline }: { tagline: string }) {
  const parts = creator.name.trim().split(/\s+/);
  const finalName = parts.pop() ?? creator.name;
  return (
    <span className="brand-name">
      <span>{parts.join(" ")} </span><em>{finalName}</em>
      <small>{tagline}</small>
    </span>
  );
}

function SectionLabel({ number, children }: { number: string; children: string }) {
  return (
    <div className="section-label">
      <span className="section-number">{number}</span>
      <span className="section-rule" />
      <span>{children}</span>
    </div>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [contactStatus, setContactStatus] = useState("");

  const handleContactSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!creator.emailHref.trim()) {
      setContactStatus("Message delivery is not enabled yet. Add a verified destination email in client/src/content.ts.");
      return;
    }

    const formData = new FormData(event.currentTarget);
    const parameters = new URLSearchParams({
      subject: `Portfolio message from ${String(formData.get("name") ?? "visitor")}`,
      body: `Name: ${String(formData.get("name") ?? "")}\nEmail: ${String(formData.get("email") ?? "")}\n\n${String(formData.get("message") ?? "")}`,
    });
    window.location.href = `mailto:${creator.emailHref}?${parameters.toString()}`;
    setContactStatus("Your email app should open with the message ready to send.");
  };

  const visibleSocialLinks = creator.socialLinks.filter((link) => link.href.trim().length > 0);

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#home" aria-label={`${creator.name} portfolio home`}>
          <span className="brand-symbol" aria-hidden="true"><span /></span>
          <BrandWordmark tagline="YOUTUBE CONTENT CREATOR" />
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
        <nav className={`site-nav${menuOpen ? " is-open" : ""}`} aria-label="Main navigation">
          {navigation.map(([label, id]) => (
            <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)}>{label}</a>
          ))}
          <a className="nav-cta" href="#contact" onClick={() => setMenuOpen(false)}>
            Let’s talk <ArrowUpRight size={15} />
          </a>
        </nav>
      </header>

      <section className="hero" id="home">
        <span className="hero-orbit hero-orbit-one" aria-hidden="true" />
        <span className="hero-orbit hero-orbit-two" aria-hidden="true" />
        <div className="hero-copy">
          <p className="eyebrow"><span className="eyebrow-dot" /> MOHD RAHIM ANSARI <span className="eyebrow-divider">/</span> YOUTUBE CREATOR</p>
          <h1><em>CONTENT</em><br />MEETS<br /><em>CREATIVITY.</em></h1>
          <p className="hero-intro">{creator.introduction}</p>
          <div className="hero-actions">
            <a className="button button-gold" href="#work">View My Work <ArrowUpRight size={17} /></a>
            <a className="button button-outline hero-channel" href={creator.channel.url} target="_blank" rel="noreferrer">
              <Youtube size={17} /> Watch RahimVision
            </a>
          </div>
          <a className="hero-scroll" href="#about"><span>SCROLL TO EXPLORE</span><ArrowDown size={15} /></a>
        </div>
        <div className="hero-art-wrap">
          <div className="hero-art-frame">
            <img className="hero-art" src={creator.channel.avatarUrl} alt={`${creator.channel.name} official YouTube profile picture`} />
            <div className="hero-image-topline"><span>YOUTUBE CREATOR</span><span>RAHIMVISION</span></div>
            <div className="hero-image-bottomline"><span>IDEAS INTO STORIES</span><span className="record-dot" /></div>
          </div>
          <span className="hero-art-caption">OFFICIAL CHANNEL PROFILE</span>
          <span className="hero-star" aria-hidden="true">✳</span>
        </div>
        <div className="hero-index"><span>RAHIMVISION</span><span>CONTENT · STORY · MOTION</span></div>
      </section>

      <div className="marquee" aria-label="Creator interests">
        <div className="marquee-track">
          {[0, 1].map((copy) => (
            <span className="marquee-set" key={copy} aria-hidden={copy === 1}>
              <span>VIDEO</span><i>✳</i><span>STORY</span><i>✳</i><span>CREATIVITY</span><i>✳</i><span>SHORT-FORM</span><i>✳</i><span>RAHIMVISION</span><i>✳</i>
            </span>
          ))}
        </div>
      </div>

      <section className="section about-section" id="about">
        <div className="section-side"><SectionLabel number="01">A LITTLE ABOUT ME</SectionLabel></div>
        <div className="about-content">
          <div className="about-lede">
            <h2>Ideas become<br /><em>stories.</em></h2>
            <span className="scribble-mark" aria-hidden="true">✳</span>
          </div>
          <div className="about-columns">
            <p className="about-lead">I’m <strong>{creator.name}</strong> — a YouTube content creator.</p>
            <div className="about-body">
              <p>{creator.channel.about}</p>
              <div className="about-note"><span className="note-mark">✳</span><span>CHANNEL<br /><strong>{creator.channel.name}</strong></span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="experience-section" id="experience">
        <div className="experience-inner">
          <div className="experience-heading">
            <SectionLabel number="02">YOUTUBE EXPERIENCE</SectionLabel>
            <span className="experience-star" aria-hidden="true">✳</span>
            <div><h2>Made for the<br /><em>play button.</em></h2><p>Channel details and creative experience, presented without unverified claims.</p></div>
          </div>
          <div className="channel-card">
            <div className="channel-card-top">
              <a className="channel-avatar" href={creator.channel.url} target="_blank" rel="noreferrer" aria-label={`Open ${creator.channel.name} YouTube channel`}>
                <img src={creator.channel.avatarUrl} alt={`${creator.channel.name} profile picture`} />
              </a>
              <span className="channel-kicker">CHANNEL SNAPSHOT</span><span className="live-marker"><i /> LINKED CHANNEL</span>
            </div>
            <div className="channel-card-main"><h3>{creator.channel.name}</h3><p>{creator.channel.handle} · {creator.channel.niche}</p></div>
            <div className="channel-card-foot"><span>{creator.channel.experience}</span>
              <a href={creator.channel.url} target="_blank" rel="noreferrer">Visit channel <ArrowUpRight size={16} /></a>
            </div>
          </div>
          <div className="experience-list">
            {experienceHighlights.map((item, index) => {
              const Icon = [Scissors, Wand2, Film][index] ?? Film;
              return <article className="experience-item" key={item.number}>
                <span className="experience-item-num">{item.number}</span>
                <span className="experience-item-icon"><Icon size={21} strokeWidth={1.55} /></span>
                <div><h3>{item.title}</h3><p>{item.detail}</p></div>
                <ArrowUpRight className="experience-arrow" size={20} />
              </article>;
            })}
          </div>
        </div>
      </section>

      <section className="section work-section" id="work">
        <div className="work-topline"><SectionLabel number="03">LATEST WORK</SectionLabel><span className="work-topnote">UPLOADS FROM RAHIMVISION</span></div>
        <div className="work-heading"><h2>Real uploads.<br /><em>Direct from YouTube.</em></h2><p>Watch public channel uploads here.<br /><span>The playlist refreshes with new uploads from RahimVision.</span></p></div>
        <div className="latest-uploads">
          <div className="latest-uploads-copy">
            <span className="latest-uploads-kicker">OFFICIAL CHANNEL · LIVE PLAYLIST</span>
            <h3>Latest uploads</h3>
            <p>New public videos and Shorts appear through the channel’s YouTube uploads playlist.</p>
            <a className="latest-uploads-link" href={creator.channel.url} target="_blank" rel="noreferrer">Visit the channel <ArrowUpRight size={15} /></a>
          </div>
          <div className="latest-uploads-player">
            <iframe
              src={`https://www.youtube-nocookie.com/embed?listType=playlist&list=${creator.channel.uploadsPlaylistId}`}
              title={`${creator.channel.name} latest YouTube uploads`}
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      <section className="skills-section" id="skills">
        <div className="skills-inner">
          <div className="skills-head"><SectionLabel number="04">THE TOOLKIT</SectionLabel><span className="skills-star" aria-hidden="true">✳</span><h2>Skills for the<br /><em>whole story.</em></h2><p>Video, motion, storytelling, and the craft of making ideas clear.</p></div>
          <div className="skills-cloud" aria-label="Creator skills">
            {skills.map((skill, index) => <div className={`skill-chip skill-chip-${index + 1}`} key={skill}><span className="skill-chip-mark">{String(index + 1).padStart(2, "0")}</span><span>{skill}</span>{index === 0 ? <Scissors size={18} /> : index === 1 ? <Sparkles size={18} /> : index === 2 ? <PenTool size={18} /> : index === 5 ? <Mic2 size={18} /> : index === 6 ? <Search size={18} /> : <ArrowUpRight size={17} />}</div>)}
          </div>
          <div className="skills-bottom"><span>STRATEGY <i>+</i> CRAFT <i>+</i> CREATIVITY</span><span>RAHIMVISION <span className="skills-pulse" /></span></div>
        </div>
      </section>

      <section className="section certificates-section" id="certificates">
        <div className="certificates-header"><div><SectionLabel number="05">CERTIFICATES & ACHIEVEMENTS</SectionLabel><h2>Earned,<br /><em>not assumed.</em></h2></div><p>Only real, verifiable certificates and achievements will appear here.</p></div>
        <div className="certificate-grid">
          {certificates.length > 0 ? certificates.map((certificate, index) => <article className="certificate-card" key={`${certificate.title}-${index}`}>
            <div className="certificate-image-slot">{certificate.image ? <img src={certificate.image} alt={`${certificate.title} certificate`} /> : <div className="certificate-no-image">Original certificate image not supplied.</div>}</div>
            <div className="certificate-copy"><div><span className="certificate-date">{certificate.date}</span><h3>{certificate.title}</h3><p>{certificate.organization}</p></div>
              {certificate.href ? <a className="certificate-link" href={certificate.href} target="_blank" rel="noreferrer">View certificate <ArrowUpRight size={16} /></a> : <span className="certificate-link-missing">View link not supplied</span>}
            </div>
          </article>) : (
            <div className="certificate-empty" role="status"><span className="certificate-empty-icon"><BadgeCheck size={24} strokeWidth={1.4} /></span><div><strong>No verified certificates listed</strong><p>Real certificate details and images can be added when available.</p></div></div>
          )}
        </div>
      </section>

      <section className="stats-section" id="statistics">
        <div className="stats-inner">
          <div className="stats-copy"><SectionLabel number="06">CHANNEL STATISTICS</SectionLabel><h2>Numbers<br /><em>not guesses.</em></h2><p>Public YouTube figures verified on 24 Oct 2026. Counts may change as the channel grows.</p><a className="stats-youtube" href={creator.channel.url} target="_blank" rel="noreferrer"><Youtube size={18} /> Open RahimVision <ArrowUpRight size={16} /></a></div>
          <div className="stats-board">
            <div className="stats-grid">{channelStats.map((stat) => <article className="stat-tile" key={stat.label}><span className="stat-label">{stat.label}</span><strong>{stat.value}</strong><span className="stat-note">{stat.note}</span></article>)}</div>
            <article className="best-video"><span className="best-video-icon"><Play size={17} fill="currentColor" /></span><div><span className="stat-label">BEST-PERFORMING VIDEO</span><h3>{bestPerformingVideo.title}</h3><span className="best-video-views">{bestPerformingVideo.views}</span></div>{bestPerformingVideo.href ? <a href={bestPerformingVideo.href} target="_blank" rel="noreferrer" aria-label="Watch best-performing video"><ArrowUpRight size={19} /></a> : <span className="best-video-arrow"><ArrowUpRight size={19} /></span>}</article>
          </div>
        </div>
      </section>

      <section className="section tools-section" id="tools">
        <div className="tools-heading"><SectionLabel number="07">TOOLS I USE</SectionLabel><div className="tools-heading-row"><h2>The kit<br /><em>behind the cut.</em></h2><p>Software and tools will be listed only when the actual workflow is supplied.</p></div></div>
        <div className="tools-grid">
          {toolGroups.map((group, index) => <article className="tool-card" key={group.name}><span className="tool-num">0{index + 1} / TOOL CATEGORY</span><span className="tool-icon">{index === 0 ? <Clapperboard size={21} /> : index === 1 ? <Wand2 size={21} /> : index === 2 ? <Camera size={21} /> : <Sparkles size={21} />}</span><h3>{group.name}</h3><div className="tool-tags">{group.tools.length ? group.tools.map((tool) => <span key={tool}>{tool}</span>) : <span className="tool-empty">Not provided</span>}</div></article>)}
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="contact-inner">
          <div className="contact-top"><SectionLabel number="08">CONTACT ME</SectionLabel><span>GOOD WORK STARTS WITH A CONVERSATION</span></div>
          <h2>Let’s make<br /><em>something.</em></h2>
          <div className="contact-bottom">
            <div className="contact-message">
              <p>For collaborations and creative projects, send a note or connect through the official channel.</p>
              <a className="contact-channel" href={creator.channel.url} target="_blank" rel="noreferrer"><Youtube size={18} /> Visit RahimVision <ArrowUpRight size={15} /></a>
              <div className="contact-socials"><span>VERIFIED SOCIAL LINK</span>{visibleSocialLinks.map((link) => <a href={link.href} target="_blank" rel="noreferrer" key={link.label}><SocialIcon icon={link.icon} />{link.label}<ArrowUpRight size={15} /></a>)}</div>
            </div>
            <form className="contact-form" onSubmit={handleContactSubmit}>
              <div className="contact-form-row">
                <label>Your name<input name="name" autoComplete="name" placeholder="Name" required /></label>
                <label>Your email<input name="email" type="email" autoComplete="email" placeholder="you@example.com" required /></label>
              </div>
              <label>Your message<textarea name="message" rows={4} placeholder="Tell me what you have in mind…" required /></label>
              <div className="contact-submit-row"><button className="button button-gold" type="submit">Send a message <ArrowUpRight size={17} /></button><span className="contact-form-note">Opens your email app when a destination is configured.</span></div>
              <p className="contact-status" role="status" aria-live="polite">{contactStatus}</p>
            </form>
          </div>
          <div className="contact-flower" aria-hidden="true">✳</div>
        </div>
      </section>

      <footer className="site-footer">
        <a className="brand footer-brand" href="#home"><span className="brand-symbol" aria-hidden="true"><span /></span><BrandWordmark tagline="YOUTUBE CONTENT CREATOR" /></a>
        <span className="footer-copy">© {new Date().getFullYear()} {creator.name}. All stories reserved.</span>
        <div className="footer-links">{visibleSocialLinks.map((link) => <a href={link.href} target="_blank" rel="noreferrer" aria-label={link.label} key={link.label}><SocialIcon icon={link.icon} /></a>)}<a href="#home" aria-label="Back to top" className="back-to-top"><ArrowUpRight size={16} /></a></div>
        <div className="footer-note"><span>RAHIMVISION · YOUTUBE CONTENT CREATOR</span><span>REAL WORK · VERIFIED DETAILS</span></div>
      </footer>
    </main>
  );
}
