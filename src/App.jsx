import { useEffect, useState } from 'react'
import profilePhoto from './assets/profile.png'
import bankImage from './assets/bank-management.png'
import blogImage from './assets/blog-management.png'
import safenetImage from './assets/safenet.png'
import safenetHome from './assets/safenet-home.png'
import safenetContacts from './assets/safenet-contacts.png'
import safenetMap from './assets/safenet-map.png'
import safenetAlert from './assets/safenet-alert.png'
import studyImage from './assets/study-material.png'
import oracleCertificate from './assets/cert-oracle-ai.jpg'
import metaCertificate from './assets/cert-meta-javascript.jpg'
import ibmCertificate from './assets/cert-ibm-ai.jpg'
import hackathonCertificate from './assets/cert-smart-india-hackathon.jpg'
import crypteraCertificate from './assets/cert-cryptera-workshop.jpg'
import openAiFoundations from './assets/cert-openai-ai-foundations.png'
import openAiApplied from './assets/cert-openai-applied-ai.png'
import openAiAgents from './assets/cert-openai-agents-workflows.png'
import codecInternshipCertificate from './assets/codec-internship-certificate.png'
import codeOrbitOfferLetter from './assets/codeorbit-offer-letter.png'
import codeOrbitInternshipCertificate from './assets/codeorbit-internship-certificate.png'
import codomaxOfferLetter from './assets/codomax-offer-letter.png'
import codomaxInternshipCertificate from './assets/codomax-internship-certificate.png'
import './App.css'

const documentItems = [
  { source: codecInternshipCertificate, title: 'Codec Technologies Internship Certificate' },
  { source: codeOrbitOfferLetter, title: 'CodeOrbit Tech Offer Letter' },
  { source: codeOrbitInternshipCertificate, title: 'CodeOrbit Tech Internship Certificate' },
  { source: codomaxOfferLetter, title: 'Codomax Digital Solutions Offer Letter' },
  { source: codomaxInternshipCertificate, title: 'Codomax Digital Solutions Internship Certificate' },
]
const certificateItems = [
  { source: oracleCertificate, title: 'Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate' },
  { source: metaCertificate, title: 'Programming with JavaScript — Meta via Coursera' },
  { source: ibmCertificate, title: 'Artificial Intelligence Fundamentals — IBM SkillsBuild' },
  { source: hackathonCertificate, title: 'Smart India Hackathon 2024 Participation' },
  { source: crypteraCertificate, title: 'Explore Full Stack Workshop — CRYPTERA 2026' },
  { source: openAiFoundations, title: 'AI Foundations — OpenAI Academy' },
  { source: openAiApplied, title: 'Applied AI Foundations — OpenAI Academy' },
  { source: openAiAgents, title: 'Agents and Workflows — OpenAI Academy' },
]
const bankProject = {
  title: 'Bank Management System',
  summary: 'A full-stack banking application for managing customer accounts, processing transactions, and viewing balances securely.',
  image: bankImage,
  github: 'https://github.com/priyadharshinik019/Bank-Management-System',
  features: ['Create and manage customer accounts', 'Deposit, withdraw, and transfer funds', 'Real-time balance and transaction history', 'Secure authentication and RESTful API'],
}
const blogProject = {
  title: 'Blog Management System',
  summary: 'A full-stack blog management application that allows users to create, manage, edit, and organize blog posts.',
  image: blogImage,
  github: 'https://github.com/priyadharshinik019/blog-management-system',
  features: ['Create, edit, and delete blog posts', 'Browse and organize published blogs', 'Simple and responsive user interface', 'Full-stack REST API integration'],
}
const safeNetProject = {
  title: 'SafeNet – Women Safety Application',
  summary: 'A safety-focused application concept designed to provide useful emergency and security-related features.',
  image: safenetImage,
  github: 'https://github.com/priyadharshinik019/safety-nw-women',
  screens: [safenetHome, safenetContacts, safenetMap, safenetAlert],
  features: ['Emergency contact quick-access panel', 'Location-aware safety resources', 'Secure user authentication', 'Responsive React frontend with Node.js backend'],
}
const studyMaterialProject = {
  title: 'Suguna College Study Material Website',
  summary: 'An academic resources portal for Suguna College of Engineering, offering department-wise study materials including lecture notes, lab manuals, syllabi, and question papers organised by semester and course code.',
  image: studyImage,
  github: 'https://github.com/priyadharshinik019/AI-Mock-Interview',
  features: ['Department-wise study material browsing', 'Semester and course-based organization', 'Lecture notes, lab manuals, and question papers', 'Responsive academic resources interface'],
}

function App() {
  const [documentPreview, setDocumentPreview] = useState(null)
  const [projectPreview, setProjectPreview] = useState(null)
  const [isLightTheme, setIsLightTheme] = useState(false)
  const [contactStatus, setContactStatus] = useState('')
  const [isSending, setIsSending] = useState(false)

  useEffect(() => {
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') {
        setDocumentPreview(null)
        setProjectPreview(null)
      }
      if (event.key === 'ArrowLeft') setDocumentPreview((current) => current ? { ...current, index: (current.index - 1 + current.items.length) % current.items.length } : current)
      if (event.key === 'ArrowRight') setDocumentPreview((current) => current ? { ...current, index: (current.index + 1) % current.items.length } : current)
    }
    window.addEventListener('keydown', closeOnEscape)
    document.body.style.overflow = documentPreview || projectPreview ? 'hidden' : ''
    return () => {
      window.removeEventListener('keydown', closeOnEscape)
      document.body.style.overflow = ''
    }
  }, [documentPreview, projectPreview])

  const openDocument = (event, source, title, items = documentItems) => {
    event.preventDefault()
    setDocumentPreview({ index: items.findIndex((item) => item.source === source), items })
  }

  const changeDocument = (direction) => {
    setDocumentPreview((current) => {
      if (!current) return current
      return { ...current, index: (current.index + direction + current.items.length) % current.items.length }
    })
  }

  const openProject = (event, project) => {
    event.preventDefault()
    setProjectPreview(project)
  }

  const handleContactSubmit = async (event) => {
    event.preventDefault()
    setIsSending(true)
    setContactStatus('')
    try {
      const response = await fetch('https://formsubmit.co/ajax/priyadharshinik735@gmail.com', {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: new FormData(event.currentTarget),
      })
      if (!response.ok) throw new Error('Message failed')
      event.currentTarget.reset()
      setContactStatus('Message sent successfully. Thank you!')
    } catch {
      setContactStatus('Unable to send right now. Please email me directly.')
    } finally {
      setIsSending(false)
    }
  }

  return (
    <main className={`site-shell${isLightTheme ? ' light-theme' : ''}`}>
      <header className="site-header">
        <a className="brand" href="#home">Priyadharshini K</a>
        <nav aria-label="Main navigation">
          {['Home', 'About', 'Skills', 'Experience', 'Projects', 'Certifications', 'Contact'].map((item) => (
            <a href={`#${item.toLowerCase()}`} key={item}>{item}</a>
          ))}
        </nav>
        <div className="header-actions">
          <button className="theme-toggle" aria-label="Toggle light theme" aria-pressed={isLightTheme} onClick={() => setIsLightTheme((current) => !current)}>☼</button>
          <a className="gradient-button small" href="#contact">Hire Me</a>
        </div>
      </header>

      <section className="hero-section" id="home">
        <div className="intro-column">
          <h1>Hi,<br />I'm<br /><span>Priyadharshini</span></h1>
          <p className="role"><span className="role-text">Full-Stack Developer</span><span className="cursor">|</span></p>
          <div className="hero-actions">
            <a className="gradient-button" href="#contact">Hire Me <span>→</span></a>
            <a className="outline-button" href="#projects">View Projects</a>
          </div>
          <div className="social-links" aria-label="Social links">
            <a href="https://github.com/priyadharshinik019" aria-label="GitHub">⌘</a>
            <a href="https://www.linkedin.com/in/priyadharshini-k-3977713b6" aria-label="LinkedIn">in</a>
            <a href="mailto:priyadharshinik735@gmail.com" aria-label="Email">✉</a>
          </div>
        </div>

        <div className="photo-frame">
          <img src={profilePhoto} alt="Priyadharshini K professional portrait" />
        </div>

        <div className="expert-column">
          <p className="eyebrow">EXPERT ON</p>
          <h2>Based in India, I’m a<br className="desktop-break" /> final-year CSE student<br className="desktop-break" /> and full-stack developer.</h2>
          <p className="summary">Looking for someone to build modern, responsive and user-friendly web applications? I enjoy learning new technologies, solving problems, and shipping practical full-stack solutions.</p>
          <a className="download-link" href="https://priyadharshinik-portfolio.lovable.app/Priyadharshini-K-Resume.pdf">Download CV <span>⇩</span></a>
        </div>
      </section>

      <section className="about-section" id="about">
        <div className="section-heading">
          <p className="eyebrow">INTRODUCTION</p>
          <h2>About Me</h2>
          <span className="heading-line" />
        </div>

        <div className="about-grid">
          <article className="about-card about-copy-card">
            <p className="about-copy">I am a final-year Computer Science and Engineering student with a strong interest in web development, full-stack applications, software engineering, and artificial intelligence. I enjoy creating practical projects, learning modern technologies, and improving my programming and problem-solving skills. I am currently focused on building responsive and user-friendly applications using modern frontend and backend technologies.</p>
            <div className="traits-grid">
              <div className="trait"><span className="trait-icon">&lt;/&gt;</span><span>Computer Science and<br />Engineering Student</span></div>
              <div className="trait"><span className="trait-icon">▱</span><span>Aspiring Full-Stack Developer</span></div>
              <div className="trait"><span className="trait-icon">✣</span><span>Interested in Web Development<br />and AI</span></div>
              <div className="trait"><span className="trait-icon">▣</span><span>Passionate About Continuous<br />Learning</span></div>
            </div>
          </article>

          <article className="about-card education-card">
            <h3><span className="education-icon">⌁</span>Education</h3>
            <dl>
              <div><dt>DEGREE</dt><dd>B.E. Computer Science and Engineering</dd></div>
              <div><dt>COLLEGE</dt><dd>Suguna College of Engineering</dd></div>
              <div><dt>ACADEMIC STATUS</dt><dd>Final-Year Student</dd></div>
            </dl>
          </article>
        </div>
      </section>

      <section className="skills-section" id="skills">
        <div className="section-heading">
          <p className="eyebrow">WHAT I WORK WITH</p>
          <h2>Technical Skills</h2>
          <span className="heading-line" />
        </div>

        <div className="skills-grid">
          <article className="skill-card"><h3>PROGRAMMING LANGUAGES</h3><div className="skill-tags"><span>Python</span><span>JavaScript</span></div></article>
          <article className="skill-card"><h3>FRONTEND DEVELOPMENT</h3><div className="skill-tags"><span>HTML5</span><span>CSS3</span><span>React.js</span><span>Tailwind CSS</span><span>Bootstrap</span></div></article>
          <article className="skill-card"><h3>BACKEND DEVELOPMENT</h3><div className="skill-tags"><span>Node.js</span><span>Express.js</span><span>REST APIs</span></div></article>
          <article className="skill-card"><h3>DATABASES</h3><div className="skill-tags"><span>MongoDB</span><span>MySQL</span></div></article>
          <article className="skill-card"><h3>TOOLS &amp; PLATFORMS</h3><div className="skill-tags"><span>Git</span><span>GitHub</span><span>Visual Studio Code</span><span>Postman</span><span>Vite</span></div></article>
          <article className="skill-card"><h3>ADDITIONAL AREAS</h3><div className="skill-tags"><span>Responsive Web Design</span><span>API Integration</span><span>Full-Stack Development</span><span>Basic Data Structures and Algorithms</span></div></article>
        </div>
      </section>

      <section className="experience-section" id="experience">
        <div className="section-heading">
          <p className="eyebrow">WHERE I'VE LEARNED</p>
          <h2>Internship Experience</h2>
          <span className="heading-line" />
        </div>

        <div className="experience-timeline">
          <article className="experience-entry">
            <span className="timeline-dot" />
            <div className="experience-card">
              <div className="experience-topline">
                <div className="experience-title"><span className="company-icon">▣</span><div><h3>Web Developer Intern</h3><p>Codec Technologies</p></div></div>
                <div className="experience-meta"><span>⌖ Internship · AICTE &amp; ICAC approved</span><span>▣ Dec 15, 2025 – Dec 30, 2025</span></div>
              </div>
              <ul><li>Worked on web development tasks and responsive website design</li><li>Built and improved user-friendly web interfaces</li><li>Applied HTML, CSS, JavaScript, and modern web development concepts</li><li>Gained practical experience in developing and maintaining web applications</li></ul>
              <div className="experience-tags"><span>HTML</span><span>CSS</span><span>JavaScript</span><span>Web Development</span></div>
              <div className="experience-actions"><a href={codecInternshipCertificate} onClick={(event) => openDocument(event, codecInternshipCertificate, 'Codec Technologies Internship Certificate')}>▤ Internship Certificate</a></div>
            </div>
          </article>

          <article className="experience-entry">
            <span className="timeline-dot" />
            <div className="experience-card">
              <div className="experience-topline">
                <div className="experience-title"><span className="company-icon">▣</span><div><h3>Full-Stack Developer Intern</h3><p>CodeOrbit Tech</p></div></div>
                <div className="experience-meta"><span>⌖ Remote Virtual Internship</span><span>▣ Jul 22, 2026 – Aug 21, 2026</span></div>
              </div>
              <ul><li>Worked on full-stack web development projects</li><li>Developed frontend and backend features</li><li>Used technologies such as React.js, Node.js, Express.js, and MongoDB</li><li>Improved practical knowledge of API integration and database management</li><li>Completed assigned development tasks in a remote virtual environment</li></ul>
              <div className="experience-tags"><span>React.js</span><span>Node.js</span><span>Express.js</span><span>MongoDB</span><span>REST APIs</span></div>
              <div className="experience-actions"><a href={codeOrbitOfferLetter} onClick={(event) => openDocument(event, codeOrbitOfferLetter, 'CodeOrbit Tech Offer Letter')}>▤ Offer Letter</a><a href={codeOrbitInternshipCertificate} onClick={(event) => openDocument(event, codeOrbitInternshipCertificate, 'CodeOrbit Tech Internship Certificate')}>▤ Internship Certificate</a></div>
            </div>
          </article>

          <article className="experience-entry">
            <span className="timeline-dot" />
            <div className="experience-card">
              <div className="experience-topline">
                <div className="experience-title"><span className="company-icon">▣</span><div><h3>Full-Stack Developer Intern</h3><p>Codomax Digital Solutions</p></div></div>
                <div className="experience-meta"><span>⌖ Remote Internship</span><span>▣ Jul 24, 2026 – Aug 7, 2026</span></div>
              </div>
              <ul><li>Worked on end-to-end web application development</li><li>Developed responsive frontend interfaces and backend functionality</li><li>Worked with React.js, Node.js, Express.js, MongoDB, and REST APIs</li><li>Improved skills in full-stack development, debugging, and project implementation</li></ul>
              <div className="experience-tags"><span>React.js</span><span>Node.js</span><span>Express.js</span><span>MongoDB</span><span>Full-Stack Development</span></div>
              <div className="experience-actions"><a href={codomaxOfferLetter} onClick={(event) => openDocument(event, codomaxOfferLetter, 'Codomax Digital Solutions Offer Letter')}>▤ Offer Letter</a><a href={codomaxInternshipCertificate} onClick={(event) => openDocument(event, codomaxInternshipCertificate, 'Codomax Digital Solutions Internship Certificate')}>▤ Internship Certificate</a></div>
            </div>
          </article>
        </div>
      </section>

      <section className="projects-section" id="projects">
        <div className="section-heading">
          <p className="eyebrow">SELECTED WORK</p>
          <h2>My Projects</h2>
          <span className="heading-line" />
        </div>

        <div className="projects-grid">
          <article className="project-card">
            <img src={bankImage} alt="Bank Management System login screen" />
            <div className="project-content"><h3>Bank Management System</h3><p>A full-stack banking application for managing customer accounts, processing transactions, and viewing balances securely.</p><div className="project-tags"><span>React.js</span><span>Node.js</span><span>Express.js</span><span>MongoDB</span></div><div className="project-actions"><a className="github-link" href={bankProject.github} target="_blank" rel="noreferrer" aria-label="View Bank Management System source">⌘</a><a className="gradient-button project-button" href="#bank-management-details" onClick={(event) => openProject(event, bankProject)}>◉ &nbsp; View Details</a></div></div>
          </article>
          <article className="project-card">
            <img src={blogImage} alt="Blog Management System home page" />
            <div className="project-content"><h3>Blog Management System</h3><p>A full-stack blog management application that allows users to create, manage, edit, and organize blog posts.</p><div className="project-tags"><span>React.js</span><span>Node.js</span><span>Express.js</span><span>MongoDB</span></div><div className="project-actions"><a className="github-link" href={blogProject.github} target="_blank" rel="noreferrer" aria-label="View Blog Management System source">⌘</a><a className="gradient-button project-button" href="#blog-management-details" onClick={(event) => openProject(event, blogProject)}>◉ &nbsp; View Details</a></div></div>
          </article>
          <article className="project-card">
            <img src={safenetImage} alt="SafeNet women safety application screen" /><div className="project-content"><h3>SafeNet – Women Safety Application</h3><p>A safety-focused application concept designed to provide useful emergency and security-related features.</p><div className="project-tags"><span>React.js</span><span>Node.js</span><span>Express.js</span><span>MongoDB</span></div><div className="project-actions"><a className="github-link" href={safeNetProject.github} target="_blank" rel="noreferrer" aria-label="View SafeNet source">⌘</a><a className="gradient-button project-button" href="#safenet-details" onClick={(event) => openProject(event, safeNetProject)}>◉ &nbsp; View Details</a></div></div>
          </article>
          <article className="project-card">
            <img src={studyImage} alt="Suguna College study material website" /><div className="project-content"><h3>Suguna College Study Material Website</h3><p>An academic resources portal for Suguna College of Engineering, offering department-wise study materials including lecture notes, lab manuals, syllabi, and question papers organised by semester and course code.</p><div className="project-tags"><span>HTML</span><span>CSS</span><span>JavaScript</span><span>Responsive Web Design</span></div><div className="project-actions"><a className="github-link" href={studyMaterialProject.github} target="_blank" rel="noreferrer" aria-label="View Study Material source">⌘</a><a className="gradient-button project-button" href="#study-material-details" onClick={(event) => openProject(event, studyMaterialProject)}>◉ &nbsp; View Details</a></div></div>
          </article>
        </div>
      </section>

      <section className="certifications-section" id="certifications">
        <div className="section-heading">
          <p className="eyebrow">LEARNING RECORD</p>
          <h2>Certifications</h2>
          <span className="heading-line" />
        </div>

        <div className="certifications-grid">
          <article className="certificate-card"><img src={oracleCertificate} alt="Oracle Cloud Infrastructure AI Foundations certificate" /><div className="certificate-content"><h3>Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate</h3><p>Oracle · May 2025</p><a href={oracleCertificate} onClick={(event) => openDocument(event, oracleCertificate, '', certificateItems)}>View Certificate</a></div></article>
          <article className="certificate-card"><img src={metaCertificate} alt="Meta Programming with JavaScript certificate" /><div className="certificate-content"><h3>Programming with JavaScript</h3><p>Meta — via Coursera · April 2026</p><a href={metaCertificate} onClick={(event) => openDocument(event, metaCertificate, '', certificateItems)}>View Certificate <span>↗</span></a></div></article>
          <article className="certificate-card"><img src={ibmCertificate} alt="IBM Artificial Intelligence Fundamentals certificate" /><div className="certificate-content"><h3>Artificial Intelligence Fundamentals</h3><p>IBM SkillsBuild · September 2025</p><a href={ibmCertificate} onClick={(event) => openDocument(event, ibmCertificate, '', certificateItems)}>View Certificate <span>↗</span></a></div></article>
          <article className="certificate-card"><img src={hackathonCertificate} alt="Smart India Hackathon participation certificate" /><div className="certificate-content"><h3>Smart India Hackathon 2024 (Internal) — Participation</h3><p>Suguna College of Engineering · September 2024</p><a href={hackathonCertificate} onClick={(event) => openDocument(event, hackathonCertificate, '', certificateItems)}>View Certificate</a></div></article>
          <article className="certificate-card"><img src={crypteraCertificate} alt="CRYPTERA full stack workshop certificate" /><div className="certificate-content"><h3>Explore Full Stack: The Ultimate Hands-on Workshop — CRYPTERA 2026</h3><p>Coimbatore Institute of Technology · January 2026</p><a href={crypteraCertificate} onClick={(event) => openDocument(event, crypteraCertificate, '', certificateItems)}>View Certificate</a></div></article>
          <article className="certificate-card"><img src={openAiFoundations} alt="OpenAI AI Foundations certificate" /><div className="certificate-content"><h3>AI Foundations</h3><p>OpenAI Academy · September 2026</p><a href={openAiFoundations} onClick={(event) => openDocument(event, openAiFoundations, '', certificateItems)}>View Certificate <span>↗</span></a></div></article>
          <article className="certificate-card"><img src={openAiApplied} alt="OpenAI Applied AI Foundations certificate" /><div className="certificate-content"><h3>Applied AI Foundations</h3><p>OpenAI Academy · September 2026</p><a href={openAiApplied} onClick={(event) => openDocument(event, openAiApplied, '', certificateItems)}>View Certificate</a></div></article>
          <article className="certificate-card"><img src={openAiAgents} alt="OpenAI Agents and Workflows certificate" /><div className="certificate-content"><h3>Agents and Workflows</h3><p>OpenAI Academy · September 2026</p><a href={openAiAgents} onClick={(event) => openDocument(event, openAiAgents, '', certificateItems)}>View Certificate</a></div></article>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="contact-profiles">
          <div className="section-heading">
            <p className="eyebrow">PROFILES</p>
            <h2>Connect With Me</h2>
            <span className="heading-line" />
          </div>
          <div className="profile-links">
            <a className="profile-card" href="https://github.com/priyadharshinik019"><span className="profile-icon">⌘</span><span><strong>GitHub</strong><small>priyadharshinik019</small></span></a>
            <a className="profile-card" href="https://www.linkedin.com/in/priyadharshini-k-3977713b6"><span className="profile-icon">in</span><span><strong>LinkedIn</strong><small>priyadharshini-k</small></span></a>
            <a className="profile-card" href="mailto:priyadharshinik735@gmail.com"><span className="profile-icon">✉</span><span><strong>Email</strong><small>priyadharshinik735@gmail.com</small></span></a>
          </div>
        </div>

        <div className="contact-form-section">
          <div className="section-heading">
            <p className="eyebrow">GET IN TOUCH</p>
            <h2>Let's Connect</h2>
            <span className="heading-line" />
          </div>
          <div className="contact-grid">
            <div className="contact-intro"><p>Feel free to contact me for internships, collaborations, project discussions, or software development opportunities.</p><a className="gradient-button" href="https://priyadharshinik-portfolio.lovable.app/Priyadharshini-K-Resume.pdf">Download CV <span>⇩</span></a></div>
              <form className="contact-form" onSubmit={handleContactSubmit}>
                <input type="hidden" name="_subject" value="New portfolio contact message" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="table" />
              <div className="form-row"><label>Full Name *<input type="text" name="name" placeholder="Your name" required /></label><label>Email Address *<input type="email" name="email" placeholder="you@example.com" required /></label></div>
                <label>Subject *<input type="text" name="subject" placeholder="What is this about?" required /></label>
                <label>Message *<textarea name="message" placeholder="Your message" rows="5" required /></label>
              <button className="gradient-button send-button" type="submit" disabled={isSending}>{isSending ? 'Sending…' : 'Send Message'} <span>➤</span></button>
              {contactStatus && <p className={`contact-status ${contactStatus.startsWith('Message sent') ? 'success' : 'error'}`} role="status">{contactStatus}</p>}
            </form>
          </div>
        </div>
      </section>

      {documentPreview && (
        <div className="document-modal" role="dialog" aria-modal="true" aria-label={documentPreview.items[documentPreview.index].title} onClick={() => setDocumentPreview(null)}>
          <button type="button" className="document-close" aria-label="Close document" onClick={() => setDocumentPreview(null)}>×</button>
          <button type="button" className="document-nav previous" aria-label="Previous document" onClick={(event) => { event.stopPropagation(); changeDocument(-1) }}>‹</button>
          <div className="document-viewer" onClick={(event) => event.stopPropagation()}>
            <img src={documentPreview.items[documentPreview.index].source} alt={documentPreview.items[documentPreview.index].title} />
            <p>{documentPreview.items[documentPreview.index].title} — {documentPreview.index + 1} / {documentPreview.items.length}</p>
          </div>
          <button type="button" className="document-nav next" aria-label="Next document" onClick={(event) => { event.stopPropagation(); changeDocument(1) }}>›</button>
        </div>
      )}

      {projectPreview && (
        <div className="project-modal" role="dialog" aria-modal="true" aria-label={`${projectPreview.title} details`} onClick={() => setProjectPreview(null)}>
          <article className="project-detail-viewer" onClick={(event) => event.stopPropagation()}>
            <button type="button" className="project-detail-close" aria-label="Close project details" onClick={() => setProjectPreview(null)}>×</button>
            <h2>{projectPreview.title}</h2>
            <p className="project-detail-summary">{projectPreview.summary}</p>
            <h3>▣ &nbsp; SCREENS</h3>
            {projectPreview.screens ? <div className="project-screens">{projectPreview.screens.map((screen, index) => <div className="project-screen" key={screen}><img src={screen} alt={`${projectPreview.title} screen ${index + 1}`} /></div>)}</div> : <div className="project-screen"><img src={projectPreview.image} alt={`${projectPreview.title} screen`} /></div>}
            <h3>▱ &nbsp; TECH STACK</h3>
            <div className="project-tags"><span>React.js</span><span>Node.js</span><span>Express.js</span><span>MongoDB</span></div>
            <h3>✓ &nbsp; KEY FEATURES</h3>
            <div className="feature-grid">{projectPreview.features.map((feature) => <div key={feature}>✓ &nbsp; {feature}</div>)}</div>
            <a className="gradient-button project-detail-github" href={projectPreview.github} target="_blank" rel="noreferrer">View on GitHub ↗</a>
          </article>
        </div>
      )}

      <footer className="site-footer">© 2026 Priyadharshini K. All rights reserved.</footer>
    </main>
  )
}

export default App
