import { useState } from "react";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  Camera,
  Clapperboard,
  ExternalLink,
  Film,
  Instagram,
  Linkedin,
  Mail,
  Menu,
  Mic2,
  PenTool,
  Play,
  Scissors,
  Search,
  Sparkles,
  UserRound,
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
  type WorkCategory,
  workItems,
} from "../content";

const heroArtwork = "/manus-storage/async-images/QyZAmEh1HfVgaVzmJeNqH7/image-1.webp";
const navigation = [
  ["About", "about"],
  ["Experience", "experience"],
  ["Work", "work"],
  ["Skills", "skills"],
  ["Certificates", "certificates"],
  ["Contact", "contact"],
] as const;
const filters: ("Everything" | WorkCategory)[] = [
  "Everything",
  "Video",
  "Shorts",
  "Thumbnails",
  "Animation",
  "Stories",
];

function SocialIcon({ icon }: { icon: "youtube" | "instagram" | "linkedin" }) {
  if (icon === "youtube") return <Youtube size={17} strokeWidth={1.8} />;
  if (icon === "instagram") return <Instagram size={17} strokeWidth={1.8} />;
  return <Linkedin size={17} strokeWidth={1.8} />;
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

function PhotoPlaceholder() {
  if (creator.profileImage) {
    return <img src={creator.profileImage} alt={`${creator.name} portrait`} className="portrait-image" />;
  }
  return (
    <div className="portrait-placeholder" aria-label="Profile photo placeholder">
      <div className="portrait-orbit" />
      <UserRound size={35} strokeWidth={1.15} />
      <span>Your photo</span>
    </div>
  );
}

export default function Home() {
  const [activeFilter, setActiveFilter] = useState<(typeof filters)[number]>("Everything");
  const [menuOpen, setMenuOpen] = useState(false);
  const filteredWork = workItems.filter((item) => activeFilter === "Everything" || item.category === activeFilter);

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#home" aria-label={`${creator.name} portfolio home`}>
          <span className="brand-symbol" aria-hidden="true"><span /></span>
          <span className="brand-name">{creator.shortName}<small>CREATOR PORTFOLIO</small></span>
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
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
        <div className="hero-copy">
          <p className="eyebrow"><span className="eyebrow-dot" /> YOUTUBE CREATOR <span className="eyebrow-divider">/</span> STORYTELLER</p>
          <h1>Make it<br /><em>mean</em><br />something.</h1>
          <p className="hero-intro">{creator.introduction}</p>
          <div className="hero-actions">
            <a className="button button-coral" href="#work">View my work <ArrowUpRight size={17} /></a>
            {creator.channel.url ? (
              <a className="text-link hero-channel" href={creator.channel.url} target="_blank" rel="noreferrer">
                <Youtube size={17} /> Watch my channel
              </a>
            ) : (
              <span className="text-link muted-link"><Youtube size={17} /> Add your channel link</span>
            )}
          </div>
          <a className="hero-scroll" href="#about"><span>SCROLL TO EXPLORE</span><ArrowDown size={15} /></a>
        </div>
        <div className="hero-art-wrap">
          <div className="hero-art-frame">
            <img className="hero-art" src={creator.profileImage || heroArtwork} alt={creator.profileImage ? `${creator.name} portrait` : "An atmospheric creator's studio with a camera, storyboard and editing screen"} />
            <div className="hero-image-topline"><span>THE CREATIVE PROCESS</span><span>01 — 10</span></div>
            <div className="hero-image-bottomline"><span>IDEA IN / STORY OUT</span><span className="record-dot" />
            </div>
          </div>
          <div className="photo-stamp"><PhotoPlaceholder /><span>THE CREATOR<br />BEHIND THE CUT</span></div>
          <span className="hero-art-caption">A LITTLE SPACE FOR YOUR BIG IDEAS</span>
          <span className="hero-star" aria-hidden="true">✳</span>
        </div>
        <div className="hero-index"><span>PORTFOLIO</span><span>2026</span></div>
      </section>

      <div className="marquee" aria-label="Creator services">
        <div className="marquee-track">
          {[0, 1].map((copy) => (
            <span className="marquee-set" key={copy} aria-hidden={copy === 1}>
              <span>VIDEO EDITING</span><i>✳</i><span>STORYTELLING</span><i>✳</i><span>ANIMATION</span><i>✳</i><span>SHORT-FORM</span><i>✳</i><span>CREATOR ENERGY</span><i>✳</i>
            </span>
          ))}
        </div>
      </div>

      <section className="section about-section" id="about">
        <div className="section-side"><SectionLabel number="01">A LITTLE ABOUT ME</SectionLabel></div>
        <div className="about-content">
          <div className="about-lede">
            <h2>Every good video<br />starts with <em>a why.</em></h2>
            <span className="scribble-mark" aria-hidden="true">✳</span>
          </div>
          <div className="about-columns">
            <p className="about-lead">I’m <strong>{creator.name}</strong> — a YouTube creator with a soft spot for the details that make a story stick.</p>
            <div className="about-body">
              <p>{creator.channel.about}</p>
              <div className="about-note"><span className="note-mark">✳</span><span>THE THROUGH-LINE<br /><strong>Make every second count.</strong></span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="experience-section" id="experience">
        <div className="experience-inner">
          <div className="experience-heading">
            <SectionLabel number="02">YOUTUBE EXPERIENCE</SectionLabel>
            <span className="experience-star" aria-hidden="true">✳</span>
            <div><h2>Built for the<br /><em>play button.</em></h2><p>Channel context, creative range, and the experience behind the work.</p></div>
          </div>
          <div className="channel-card">
            <div className="channel-card-top">
              <a className="channel-avatar" href={creator.channel.url} target="_blank" rel="noreferrer" aria-label={`Open ${creator.channel.name} YouTube channel`}>
                <img src={creator.channel.avatarUrl} alt={`${creator.channel.name} profile picture`} />
              </a>
              <span className="channel-kicker">CHANNEL SNAPSHOT</span><span className="live-marker"><i /> YOUTUBE CHANNEL</span>
            </div>
            <div className="channel-card-main"><h3>{creator.channel.name}</h3><p>{creator.channel.handle} · {creator.channel.niche}</p></div>
            <div className="channel-card-foot"><span>{creator.channel.experience}</span>
              {creator.channel.url ? <a href={creator.channel.url} target="_blank" rel="noreferrer">Visit channel <ArrowUpRight size={16} /></a> : <span className="placeholder-inline">Add your channel URL <ArrowUpRight size={16} /></span>}
            </div>
          </div>
          <div className="experience-list">
            {experienceHighlights.map((item, index) => {
              const Icon = [Scissors, Wand2, Film][index];
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
        <div className="work-topline"><SectionLabel number="03">SELECTED WORK</SectionLabel><span className="work-topnote">A FEW FRAMES FROM THE BIG PICTURE</span></div>
        <div className="work-heading"><h2>Make room for<br /><em>the good stuff.</em></h2><p>Videos, shorts, visuals, and stories that show how you think.<br /><span>New public uploads from RahimVision appear here automatically.</span></p></div>
        <div className="latest-uploads">
          <div className="latest-uploads-copy">
            <span className="latest-uploads-kicker">FROM THE CHANNEL · AUTO-UPDATING</span>
            <h3>Latest uploads</h3>
            <p>New public videos and Shorts from {creator.channel.name} show up here automatically after they are uploaded.</p>
            <a className="latest-uploads-link" href={creator.channel.url} target="_blank" rel="noreferrer">Browse the channel <ArrowUpRight size={15} /></a>
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
        <div className="filter-row" role="group" aria-label="Filter portfolio work">
          {filters.map((filter) => <button className={`filter-pill${activeFilter === filter ? " is-active" : ""}`} type="button" key={filter} aria-pressed={activeFilter === filter} onClick={() => setActiveFilter(filter)}>{filter}</button>)}
        </div>
        <div className="work-grid" aria-live="polite">
          {filteredWork.map((item, index) => <article className={`work-card ${item.visual}`} key={item.category}>
            <div className="work-visual">
              <div className="visual-grain" />
              <span className="visual-index">0{index + 1}</span>
              {item.image ? <img className="work-media" src={item.image} alt={`${item.category}: ${item.title}`} /> : <>
              {item.category === "Video" && <div className="video-slate"><span>CHAPTER ONE</span><strong>THE<br />IDEA</strong><small>YOUR VIDEO THUMBNAIL</small></div>}
              {item.category === "Shorts" && <div className="short-phone"><div className="phone-speaker" /><span className="short-reel-label">SHORT<br /><em>FORM</em></span><span className="short-caption">YOUR NEXT GOOD HOOK</span><Play className="short-play" size={19} fill="currentColor" /></div>}
              {item.category === "Thumbnails" && <div className="thumb-art"><span>THE<br />BIG<br /><em>IDEA</em></span><i>YOUR<br />THUMBNAIL</i></div>}
              {item.category === "Animation" && <div className="motion-art"><span className="motion-ring ring-one" /><span className="motion-ring ring-two" /><span className="motion-word">MOVE<span>.</span></span><span className="motion-caption">YOUR MOTION PIECE</span></div>}
              {item.category === "Stories" && <div className="story-paper"><span className="story-label">A STORY BEGINS</span><span className="story-lines"><i /><i /><i /></span><span className="story-pencil">✳</span><span className="story-page">01 / SCRIPT</span></div>}
              </>}
              <span className="work-category-tag">{item.category}</span>
            </div>
            <div className="work-card-copy"><div><span className="work-format">{item.format}</span><h3>{item.title}</h3><p>{item.description}</p></div>
              {item.href ? <a className="work-visit" href={item.href} target="_blank" rel="noreferrer" aria-label={`Watch ${item.title}`}><ArrowUpRight size={19} /></a> : <span className="work-visit is-placeholder" aria-label="Add a link to view this work"><ArrowUpRight size={19} /></span>}
            </div>
          </article>)}
        </div>
        <div className="work-endnote"><span className="work-endline" /> <span>YOUR BEST WORK GOES HERE</span> <span className="work-endline" /></div>
      </section>

      <section className="skills-section" id="skills">
        <div className="skills-inner">
          <div className="skills-head"><SectionLabel number="04">THE TOOLKIT</SectionLabel><span className="skills-star">✳</span><h2>Skills for the<br /><em>whole story.</em></h2><p>From the first rough idea to the final upload, the craft lives in the details.</p></div>
          <div className="skills-cloud" aria-label="Creator skills">
            {skills.map((skill, index) => <div className={`skill-chip skill-chip-${index + 1}`} key={skill}><span className="skill-chip-mark">{String(index + 1).padStart(2, "0")}</span><span>{skill}</span>{index === 0 ? <Scissors size={18} /> : index === 1 ? <Sparkles size={18} /> : index === 2 ? <PenTool size={18} /> : index === 5 ? <Mic2 size={18} /> : index === 6 ? <Search size={18} /> : <ArrowUpRight size={17} />}</div>)}
          </div>
          <div className="skills-bottom"><span>STRATEGY <i>+</i> CRAFT <i>+</i> A LITTLE MAGIC</span><span>ALWAYS IN PROGRESS <span className="skills-pulse" /></span></div>
        </div>
      </section>

      <section className="section certificates-section" id="certificates">
        <div className="certificates-header"><div><SectionLabel number="05">CERTIFICATES & ACHIEVEMENTS</SectionLabel><h2>Proof of the<br /><em>practice.</em></h2></div><p>Show the work you put into learning, growing, and getting better. Add a scan or image of each certificate.</p></div>
        <div className="certificate-grid">
          {certificates.map((certificate, index) => <article className="certificate-card" key={`${certificate.title}-${index}`}>
            <div className="certificate-image-slot">
              {certificate.image ? <img src={certificate.image} alt={`${certificate.title} certificate`} /> : <><div className="certificate-frame"><span className="certificate-stamp"><BadgeCheck size={26} strokeWidth={1.4} /></span><span className="certificate-image-label">ADD CERTIFICATE<br />IMAGE</span><span className="certificate-corner certificate-corner-a" /><span className="certificate-corner certificate-corner-b" /></div><span className="certificate-image-hint">IMAGE SLOT · {String(index + 1).padStart(2, "0")}</span></>}
            </div>
            <div className="certificate-copy"><div><span className="certificate-date">{certificate.date}</span><h3>{certificate.title}</h3><p>{certificate.organization}</p></div>
              {certificate.href ? <a className="certificate-link" href={certificate.href} target="_blank" rel="noreferrer">View certificate <ArrowUpRight size={16} /></a> : <button className="certificate-link certificate-link-empty" type="button" disabled title="Add the certificate URL in client/src/content.ts">View certificate <ArrowUpRight size={16} /></button>}
            </div>
          </article>)}
        </div>
        <p className="edit-hint"><Sparkles size={15} /> Certificate titles, images, dates, organizations, and links are ready to edit in <code>client/src/content.ts</code>.</p>
      </section>

      <section className="stats-section">
        <div className="stats-inner">
          <div className="stats-copy"><SectionLabel number="06">CHANNEL STATISTICS</SectionLabel><h2>Growing,<br /><em>one view at a time.</em></h2><p>Your story is personal. So are the numbers. Replace every prompt with current figures from YouTube Studio.</p><a className="stats-youtube" href={creator.channel.url || "#contact"} target={creator.channel.url ? "_blank" : undefined} rel={creator.channel.url ? "noreferrer" : undefined}><Youtube size={18} /> {creator.channel.url ? "Open my channel" : "Add your channel link"}<ArrowUpRight size={16} /></a></div>
          <div className="stats-board">
            <div className="stats-grid">{channelStats.map((stat) => <article className="stat-tile" key={stat.label}><span className="stat-label">{stat.label}</span><strong>{stat.value}</strong><span className="stat-note">{stat.note}</span></article>)}</div>
            <article className="best-video"><span className="best-video-icon"><Play size={17} fill="currentColor" /></span><div><span className="stat-label">BEST-PERFORMING VIDEO</span><h3>{bestPerformingVideo.title}</h3><span className="best-video-views">{bestPerformingVideo.views}</span></div>{bestPerformingVideo.href ? <a href={bestPerformingVideo.href} target="_blank" rel="noreferrer" aria-label="Watch best-performing video"><ArrowUpRight size={19} /></a> : <span className="best-video-arrow"><ArrowUpRight size={19} /></span>}</article>
          </div>
        </div>
      </section>

      <section className="section tools-section" id="tools">
        <div className="tools-heading"><SectionLabel number="07">TOOLS I USE</SectionLabel><div className="tools-heading-row"><h2>The kit<br /><em>behind the cut.</em></h2><p>Real tools, real workflow. Add the software that’s actually part of your creative process.</p></div></div>
        <div className="tools-grid">
          {toolGroups.map((group, index) => <article className="tool-card" key={group.name}><span className="tool-num">0{index + 1} / TOOL CATEGORY</span><span className="tool-icon">{index === 0 ? <Clapperboard size={21} /> : index === 1 ? <Wand2 size={21} /> : index === 2 ? <Camera size={21} /> : <Sparkles size={21} />}</span><h3>{group.name}</h3><div className="tool-tags">{group.tools.map((tool) => <span key={tool}>{tool}</span>)}</div></article>)}
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="contact-inner">
          <div className="contact-top"><SectionLabel number="08">CONTACT ME</SectionLabel><span>GOOD WORK STARTS WITH A CONVERSATION</span></div>
          <h2>Have a story<br />in <em>mind?</em></h2>
          <div className="contact-bottom"><div className="contact-message"><p>For collaborations, creative projects, or just to say hello — the inbox is open.</p>{creator.emailHref ? <a className="contact-email" href={`mailto:${creator.emailHref}`}>{creator.email}<ArrowUpRight size={17} /></a> : <span className="contact-email muted-email">Add your email address <ArrowUpRight size={17} /></span>}</div>
            <div className="contact-socials"><span>FIND ME ON</span>{creator.socialLinks.map((link) => link.href ? <a href={link.href} target="_blank" rel="noreferrer" key={link.label}><SocialIcon icon={link.icon} />{link.label}<ArrowUpRight size={15} /></a> : <span className="social-placeholder" key={link.label}><SocialIcon icon={link.icon} />{link.label}<small>ADD LINK</small></span>)}</div>
          </div>
          <div className="contact-flower" aria-hidden="true">✳</div>
        </div>
      </section>

      <footer className="site-footer">
        <a className="brand footer-brand" href="#home"><span className="brand-symbol" aria-hidden="true"><span /></span><span className="brand-name">{creator.shortName}<small>MADE WITH INTENTION</small></span></a>
        <span className="footer-copy">© {new Date().getFullYear()} {creator.name}. All stories reserved.</span>
        <div className="footer-links">{creator.socialLinks.filter((link) => link.href).map((link) => <a href={link.href} target="_blank" rel="noreferrer" aria-label={link.label} key={link.label}><SocialIcon icon={link.icon} /></a>)}<a href="#home" aria-label="Back to top" className="back-to-top"><ArrowUpRight size={16} /></a></div>
        <div className="footer-note"><span>BUILT FOR THE NEXT FRAME</span><span>EDITABLE STARTER · PERSONALIZE BEFORE PUBLISHING</span></div>
      </footer>
    </main>
  );
}
