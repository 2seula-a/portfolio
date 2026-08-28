import { useLayoutEffect, useState } from 'react'

const getPublicAssetPath = (fileName) => `${import.meta.env.BASE_URL}${fileName}`

const skills = [
  {
    name: 'HTML',
    description: '시맨틱 마크업과 접근성을 고려한 구조를 작성합니다.',
    level: 90,
    className: 'html',
  },
  {
    name: 'CSS',
    description: '반응형 레이아웃과 재사용 가능한 스타일을 구현합니다.',
    level: 85,
    className: 'css',
  },
  {
    name: 'JavaScript',
    description: '웹 페이지에 필요한 동작과 인터랙션을 개발합니다.',
    level: 80,
    className: 'javascript',
  },
  {
    name: 'React',
    description: '컴포넌트 기반의 사용자 인터페이스를 제작합니다.',
    level: 80,
    className: 'react',
  },
  {
    name: 'Vite',
    description: '빠른 개발 환경을 구성하고 프로젝트를 빌드합니다.',
    level: 75,
    className: 'vite',
  },
  {
    name: 'Figma',
    description: '화면 구조를 설계하고 UI 디자인을 제작합니다.',
    level: 75,
    className: 'figma',
  },
  {
    name: 'Git',
    description: '변경 이력을 관리하며 안정적으로 협업합니다.',
    level: 70,
    className: 'git',
  },
  {
    name: 'GitHub',
    description: '코드를 공유하고 프로젝트 협업 과정을 관리합니다.',
    level: 70,
    className: 'github',
  },
]

const projects = [
  {
    title: '반응형 웹페이지',
    description: 'HTML, CSS, JavaScript를 활용하여 제작한 반응형 웹페이지입니다.',
    image: getPublicAssetPath('projects/0816/652036852343956869.jpeg'),
    skills: ['HTML', 'CSS', 'JavaScript'],
    demo: getPublicAssetPath('projects/0816/0816.html'),
    demoLabel: '사이트 보기',
    github: null,
  },
  {
    title: 'Notive UI/UX Design',
    description: '학습 목표, 할 일, 학습 기록을 통합 관리하는 반응형 웹앱 UI/UX 프로젝트입니다.',
    image: getPublicAssetPath('projects/figma-project/notive-card.png'),
    skills: ['Figma', 'UI·UX', 'Responsive'],
    demo: getPublicAssetPath('projects/figma-project/index.html'),
    github: null,
  },
  {
    title: 'My Archive',
    description: '책과 영화, 드라마를 통해 만난 좋아하는 이야기와 콘텐츠 취향을 기록하는 개인 아카이브 웹사이트입니다.',
    image: getPublicAssetPath('projects/my-archive/archive-card.jpg'),
    skills: ['HTML', 'CSS', 'JavaScript'],
    demo: getPublicAssetPath('projects/my-archive/archive.html'),
    demoLabel: '사이트 보기',
    github: null,
  },
]

const experiences = [
  {
    year: '2026',
    title: 'React Frontend Project',
    description: 'React와 Vite를 활용한 웹 애플리케이션 제작',
    category: 'Project',
  },
  {
    year: '2025',
    title: 'UI/UX Design Project',
    description: 'Figma를 활용한 웹앱 UI/UX 기획 및 디자인',
    category: 'Design',
  },
  {
    year: '2024',
    title: 'Web Publishing',
    description: 'HTML, CSS, JavaScript 기반 반응형 웹 제작',
    category: 'Education',
  },
]

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme')

    return savedTheme
      ? savedTheme === 'dark'
      : window.matchMedia('(prefers-color-scheme: dark)').matches
  })
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleFormChange = (event) => {
    const { name, value } = event.target

    setFormData((previousFormData) => ({
      ...previousFormData,
      [name]: value,
    }))
  }

  const handleFormSubmit = (event) => {
    event.preventDefault()
  }

  const toggleMenu = () => {
    setIsMenuOpen((previousMenuState) => !previousMenuState)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  useLayoutEffect(() => {
    const theme = isDarkMode ? 'dark' : 'light'

    document.documentElement.dataset.theme = theme
    document.documentElement.style.colorScheme = theme
    localStorage.setItem('theme', theme)
  }, [isDarkMode])

  const toggleTheme = () => {
    setIsDarkMode((previousTheme) => !previousTheme)
  }

  return (
    <div className="app">
      <header className="header">
        <div className="container header__inner">
          <a className="header__logo" href="#hero">
            <span className="header__logo-name">SEUL-A</span>
            <span className="header__logo-text">PORTFOLIO</span>
          </a>

          <button
            className="header__menu-button"
            type="button"
            aria-label={isMenuOpen ? '메뉴 닫기' : '메뉴 열기'}
            aria-expanded={isMenuOpen}
            aria-controls="main-menu"
            onClick={toggleMenu}
          >
            <span className="header__menu-line" />
            <span className="header__menu-line" />
            <span className="header__menu-line" />
          </button>

          <nav
            className={`header__nav ${isMenuOpen ? 'header__nav--open' : ''}`}
            id="main-menu"
            aria-label="주요 메뉴"
          >
            <a className="header__link" href="#hero" onClick={closeMenu}>Home</a>
            <a className="header__link" href="#about" onClick={closeMenu}>About</a>
            <a className="header__link" href="#skills" onClick={closeMenu}>Skills</a>
            <a className="header__link" href="#projects" onClick={closeMenu}>Projects</a>
            <a className="header__link" href="#contact" onClick={closeMenu}>Contact</a>
          </nav>

          <button
            className="theme-toggle"
            type="button"
            aria-label={isDarkMode ? '라이트 모드로 전환' : '야간 모드로 전환'}
            aria-pressed={isDarkMode}
            title={isDarkMode ? '라이트 모드' : '야간 모드'}
            onClick={toggleTheme}
          >
            <span className="theme-toggle__icon" aria-hidden="true">
              {isDarkMode ? '☀' : '☾'}
            </span>
          </button>
        </div>
      </header>

      <main>
        <section className="section hero" id="hero">
          <div className="container hero__inner">
            <div className="hero__content">
              <p className="hero__greeting">안녕하세요.</p>
              <h1 className="hero__title">
                사용자 경험을 고민하며 구현하는
                <strong>Frontend Developer 이슬아입니다.</strong>
              </h1>

              <p className="hero__description">
                React와 JavaScript를 활용하여
                <br />
                사용하기 편리하고 직관적인 웹 서비스를 만드는 것을 좋아합니다.
              </p>

              <div className="hero__actions">
                <a className="button button--primary" href="#projects">
                  프로젝트 보기
                </a>
                <a className="button button--secondary" href="#contact">
                  연락하기
                </a>
              </div>
            </div>

            <div className="hero__image-wrap">
              <img
                className="hero__image"
                src={getPublicAssetPath('learning-profile.png')}
                alt="노트북으로 프론트엔드 개발을 공부하는 모습"
              />
            </div>
          </div>
        </section>

        <section className="section" id="about">
          <div className="container about__inner">
            <div className="about__content">
              <p className="section__label">Introduction</p>
              <h2 className="section__title">ABOUT ME</h2>
              <p className="about__description">
                새로운 기술을 배우고, 직접 결과물로 만들어내는 것을 좋아하는 <br />프론트엔드 개발자입니다.
              </p>
              <p className="about__description">
                UI/UX 디자인부터 React 기반 웹 개발까지 사용자 관점에서 고민하며
                작업합니다.
              </p>
            </div>

            <div className="card about__card">
              <dl className="about__list">
                <div className="about__item">
                  <dt>Name</dt>
                  <dd>이슬아</dd>
                </div>
                <div className="about__item">
                  <dt>Position</dt>
                  <dd>Frontend Developer</dd>
                </div>
                <div className="about__item">
                  <dt>Focus</dt>
                  <dd>React / UI·UX / AI</dd>
                </div>
                <div className="about__item">
                  <dt>Location</dt>
                  <dd>Seoul, Korea</dd>
                </div>
              </dl>
            </div>
          </div>
        </section>

        <section className="section section--alternate" id="skills">
          <div className="container">
            <p className="section__label">Skills</p>
            <h2 className="section__title">기술 스택</h2>
            <p className="section__description skills__description">
              웹 서비스를 만들 때 사용하는 주요 기술입니다.
            </p>

            <div className="skills__grid">
              {skills.map((skill) => (
                <article className="skill-card" key={skill.name}>
                  <div className="skill-card__header">
                    <h3 className="skill-card__title">{skill.name}</h3>
                    <span className="skill-card__level">{skill.level}%</span>
                  </div>
                  <p className="skill-card__description">{skill.description}</p>
                  <div
                    className="skill-card__track"
                    role="progressbar"
                    aria-label={`${skill.name} 숙련도`}
                    aria-valuemin="0"
                    aria-valuemax="100"
                    aria-valuenow={skill.level}
                  >
                    <span
                      className={`skill-card__progress skill-card__progress--${skill.className}`}
                    />
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="projects">
          <div className="container">
            <p className="section__label">Projects</p>
            <h2 className="section__title">프로젝트</h2>
            <p className="section__description projects__description">
              직접 기획하고 구현한 주요 프로젝트입니다.
            </p>

            <div className="projects__grid">
              {projects.map((project) => (
                <article className="project-card" key={project.title}>
                  <div className="project-card__image-wrap">
                    <img
                      className="project-card__image"
                      src={project.image}
                      alt={`${project.title} 프로젝트 화면`}
                    />
                  </div>

                  <div className="project-card__content">
                    <h3 className="project-card__title">{project.title}</h3>
                    <p className="project-card__description">{project.description}</p>

                    <ul className="project-card__technologies" aria-label="사용 기술">
                      {project.skills.map((skill) => (
                        <li key={skill}>{skill}</li>
                      ))}
                    </ul>

                    <div className="project-card__actions">
                      {project.demo ? (
                        <a
                          className="button button--primary"
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {project.demoLabel ?? '프로젝트 보기'}
                        </a>
                      ) : (
                        <span
                          className="button button--primary button--disabled"
                          aria-disabled="true"
                        >
                          프로젝트 준비 중
                        </span>
                      )}

                      {project.github ? (
                        <a
                          className="button button--secondary"
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          GitHub
                        </a>
                      ) : (
                        <span
                          className="button button--secondary button--disabled"
                          aria-disabled="true"
                        >
                          GitHub 준비 중
                        </span>
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--alternate" id="experience">
          <div className="container">
            <p className="section__label">Experience</p>
            <h2 className="section__title">경험과 성장</h2>
            <p className="section__description experience__description">
              교육과 프로젝트를 통해 쌓아온 경험입니다.
            </p>

            <ol className="timeline">
              {experiences.map((experience) => (
                <li className="timeline__item" key={experience.year}>
                  <div className="timeline__marker" aria-hidden="true" />
                  <article className="timeline__card">
                    <div className="timeline__meta">
                      <time className="timeline__year" dateTime={experience.year}>
                        {experience.year}
                      </time>
                      <span className="timeline__category">{experience.category}</span>
                    </div>
                    <h3 className="timeline__title">{experience.title}</h3>
                    <p className="timeline__text">{experience.description}</p>
                  </article>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="section" id="contact">
          <div className="container contact__inner">
            <div className="contact__content">
              <p className="section__label">Contact</p>
              <h2 className="section__title">LET&apos;S WORK TOGETHER</h2>
              <p className="section__description contact__description">
                프로젝트와 협업에 관심이 있으시면 언제든지 연락해주세요.
              </p>

              <address className="contact__info">
                <div className="contact__info-item">
                  <span className="contact__info-label">Email</span>
                  <a className="contact__info-value" href="mailto:seula2025@gmail.com">
                    seula2025@gmail.com
                  </a>
                </div>
                <div className="contact__info-item">
                  <span className="contact__info-label">GitHub</span>
                  <span className="contact__info-value">GitHub 주소를 추가해 주세요</span>
                </div>
              </address>
            </div>

            <form className="contact-form" onSubmit={handleFormSubmit}>
              <div className="contact-form__field">
                <label htmlFor="contact-name">이름</label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  placeholder="이름을 입력해 주세요"
                  required
                  value={formData.name}
                  onChange={handleFormChange}
                />
              </div>

              <div className="contact-form__field">
                <label htmlFor="contact-email">이메일</label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="이메일을 입력해 주세요"
                  required
                  value={formData.email}
                  onChange={handleFormChange}
                />
              </div>

              <div className="contact-form__field">
                <label htmlFor="contact-message">메시지</label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows="6"
                  placeholder="메시지를 입력해 주세요"
                  required
                  value={formData.message}
                  onChange={handleFormChange}
                />
              </div>

              <button className="contact-form__button" type="submit">
                메시지 보내기
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer__inner">
          <p className="footer__text">
            &copy; 2026 SEUL-A Portfolio. All Rights Reserved.
          </p>

          <nav className="footer__links" aria-label="연락처 링크">
            <span aria-disabled="true">GitHub 준비 중</span>
            <a href="mailto:seula2025@gmail.com">Email</a>
          </nav>
        </div>
      </footer>
    </div>
  )
}

export default App
