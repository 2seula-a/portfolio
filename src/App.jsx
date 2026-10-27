import { useLayoutEffect, useState } from 'react'

const getPublicAssetPath = (fileName) => `${import.meta.env.BASE_URL}${fileName}`

const skills = [
  {
    name: 'HTML',
    description: '시맨틱 구조를 작성하고, form·input·textarea 등을 활용한 기본 웹 페이지와 폼 화면을 구성할 수 있습니다.',
  },
  {
    name: 'CSS',
    description: 'Flexbox를 활용해 레이아웃을 구성하고, 데스크톱·태블릿·모바일을 고려한 반응형 화면을 구현할 수 있습니다.',
  },
  {
    name: 'JavaScript',
    description: '클릭, 입력, 필터, 모달, 조건 처리 등 기본적인 웹 인터랙션을 구현할 수 있습니다.',
  },
  {
    name: 'React',
    description: '컴포넌트를 구성하고 useState 기반 상태 관리, CRUD 기능, React Router를 활용한 페이지 이동을 구현할 수 있습니다.',
  },
  {
    name: 'Figma',
    description: '와이어프레임과 UI 시안을 제작하고, Auto Layout과 Component를 활용해 웹 디자인 화면을 구성할 수 있습니다.',
  },
  {
    name: 'Git / GitHub',
    description: '저장소 생성 및 기본 버전 관리를 할 수 있으며, GitHub Pages를 활용해 웹사이트를 배포할 수 있습니다.',
  },
  {
    name: 'Vite',
    description: 'React 프로젝트를 생성하고 개발 서버 실행, build, 배포 전 작업 흐름을 사용할 수 있습니다.',
  },
  {
    name: 'Photoshop / Illustrator',
    description: '웹 프로젝트에 필요한 이미지 편집, 배너 제작, 간단한 그래픽 소스 제작 및 수정 작업을 할 수 있습니다.',
  },
]

const projects = [
  {
    title: 'ChalFit',
    type: 'Team Project',
    status: 'In Progress',
    description: 'AI 얼굴형 분석과 가상 피팅을 활용한 맞춤형 선글라스 쇼핑몰',
    role: 'UI/UX 디자인 · 와이어프레임 · AI 콘텐츠 제작 · 프론트엔드 구현 참여',
    image: getPublicAssetPath('projects/chalfit/chalfit-thumbnail.png'),
    skills: ['Figma','React','Responsive'],
    demo: null,
    demoLabel: '프로젝트 보기',
    figma: null,
    hideGithub: true,
  },
  {
    title: 'Notive UI/UX Design',
    type: 'Personal Project',
    description: '학습 목표, 할 일, 학습 기록을 통합 관리하는 반응형 웹앱 UI/UX 프로젝트입니다.',
    image: getPublicAssetPath('projects/figma-project/notive-card.png'),
    skills: ['Figma', 'UI·UX', 'Responsive'],
    demo: getPublicAssetPath('projects/figma-project/index.html'),
    hideGithub: true,
    figma: 'https://www.figma.com/design/690j5hwjbQgDM1NfCRsPGv/%EB%85%B8%ED%8B%B0%EB%B8%8C-%EB%B0%98%EC%9D%91%ED%98%95?node-id=1-1614&t=zts7a2xhcLiHLG8k-4'
  },
  {
  title: '죽녹원 AI 숏폼',
  type: 'Contest Project',
  description:
    '담양 죽녹원의 시간과 사람의 흔적을 주제로 AI 이미지와 영상 생성 기술을 활용해 제작한 숏폼 공모전 작품입니다.',
  image: getPublicAssetPath('projects/videos/SCENE5-thumbnail.png'),
  skills: ['AI Image', 'AI Video', 'CapCut'],
  video: getPublicAssetPath('projects/videos/1019.mp4'),
  hideGithub: true,
  },
  {
    title: 'LIVI 텀블러',
    type: 'AI Video Project',
    description: 'AI 이미지와 영상 생성 도구를 활용해 제작한 텀블러 브랜드 숏폼 광고 영상',
    image: getPublicAssetPath('projects/videos/livi-thumbnail.png'),
    skills: ['AI Image', 'AI Video', 'CapCut'],
    video: getPublicAssetPath('projects/videos/0903_최최종 (2).mp4'),
    demo: null,
    github: null,
    hideGithub: true,
  },
  {
    title: '개인 웹 프로젝트',
    type: 'Personal Web Project',
    description: 'React와 CSS를 활용해 서로 다른 디자인 콘셉트로 제작한 개인 웹 프로젝트입니다.',
    image: getPublicAssetPath('projects/0816/PersonalWeb.png'),
    skills: ['React', 'CSS', 'JavaScript'],
    demo: getPublicAssetPath('projects/0816/0816.html'),
    demoLabel: '사이트 보기',
    hideGithub: true,
  },
  {
    title: 'My Archive',
    type: 'Personal Project',
    description: '책·영화·드라마를 카드형 UI로 구성하고, 카테고리 필터와 이미지 확대 기능을 구현한 반응형 웹사이트입니다.',
    image: getPublicAssetPath('projects/my-archive/archive-card.jpg'),
    skills: ['HTML', 'CSS', 'JavaScript'],
    demo: getPublicAssetPath('projects/my-archive/archive.html'),
    demoLabel: '사이트 보기',
    hideGithub: true,
  },
]

const experiences = [
  {
    year: '2026.09',
    dateTime: '2026-09',
    institution: 'MBC아카데미',
    title: 'Project Experience',
    learned: '개인 프로젝트 Notive를 기획하며 UI/UX 설계 과정을 익혔습니다.',
    practice: '팀 프로젝트 ChalFit에서 협업과 피드백 반영, UI 수정 및 프론트엔드 구현을 경험하고 있습니다.',
    category: 'Project',
  },
  {
    year: '2026.09',
    dateTime: '2026-09',
    institution: 'MBC아카데미',
    title: 'React',
    learned: 'Component, props, useState·useEffect와 map·filter·spread 문법을 학습했습니다.',
    practice: 'Todo, Memo, Tag, Category, Bookmark, Comment CRUD와 React Router 페이지 이동을 실습했습니다.',
    category: 'Development',
  },
  {
    year: '2026.09',
    dateTime: '2026-09',
    institution: 'MBC아카데미',
    title: 'JavaScript',
    learned: '조건문, 반복문, 함수, 배열, 객체와 DOM·이벤트를 학습했습니다.',
    practice: '모달, 필터와 입력 처리 등 기본 인터랙션을 구현했습니다.',
    category: 'Development',
  },
  {
    year: '2026.08',
    dateTime: '2026-08',
    institution: 'MBC아카데미',
    title: 'Figma · UI/UX',
    learned: '와이어프레임, Auto Layout, Component와 Prototype을 학습했습니다.',
    practice: '웹·앱 화면을 설계하고 UI 디자인 시안을 제작했습니다.',
    category: 'Design',
  },
  {
    year: '2026.07',
    dateTime: '2026-07',
    institution: 'MBC아카데미',
    title: 'HTML · CSS',
    learned: '시맨틱 마크업, Flexbox, Grid와 반응형 레이아웃을 학습했습니다.',
    practice: '폼과 카드 UI를 구성하고 반응형 웹페이지를 제작했습니다.',
    category: 'Publishing',
  },
]

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeVideoProject, setActiveVideoProject] = useState(null)
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

  useLayoutEffect(() => {
    if (!activeVideoProject) {
      return undefined
    }

    const previousOverflow = document.body.style.overflow
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') {
        setActiveVideoProject(null)
      }
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', closeOnEscape)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', closeOnEscape)
    }
  }, [activeVideoProject])

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
                디자인과 구현의 연결을 고민하는
                <strong>이슬아입니다.</strong>
              </h1>

              <p className="hero__description">
                웹디자인부터 반응형 퍼블리싱까지,
                <br />
                디자인을 실제 웹 화면으로 구현하는 웹디자이너 · 웹퍼블리셔를 목표로 합니다.
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
              <p className="section__label">INTRODUCTION</p>
              <h2 className="section__title">소개</h2>
              <p className="about__description">
                Figma를 활용한 UI 디자인과 HTML·CSS 기반의 반응형 레이아웃 구현을
                학습하며, 디자인 시안을 웹 화면으로 완성하는 과정을 익히고 있습니다.
              </p>
              <p className="about__description">
                JavaScript와 React로 필요한 기능을 구현하고, 팀 프로젝트에서 피드백을
                주고받으며 UI를 개선하는 경험을 쌓고 있습니다.
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
                  <dd>웹디자이너 · 웹퍼블리셔</dd>
                </div>
                <div className="about__item">
                  <dt>Focus</dt>
                  <dd>UI·UX / Web Publishing / AI</dd>
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
            <p className="section__label">SKILLS</p>
            <h2 className="section__title">기술 스택</h2>
            <p className="section__description skills__description">
              웹 서비스를 만들 때 사용하는 주요 기술입니다.
            </p>

            <div className="skills__grid">
              {skills.map((skill) => (
                <article className="skill-card" key={skill.name}>
                  <div className="skill-card__header">
                    <h3 className="skill-card__title">{skill.name}</h3>
                  </div>
                  <p className="skill-card__description">{skill.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="projects">
          <div className="container">
            <p className="section__label">PROJECTS</p>
            <h2 className="section__title">프로젝트</h2>
            <p className="section__description projects__description">
              직접 기획하고 구현한 주요 프로젝트입니다.
            </p>

            <div className="projects__grid">
              {projects.map((project) => (
                <article className="project-card" key={project.title}>
                  <div className="project-card__image-wrap">
                    {project.image ? (
                      <img
                        className="project-card__image"
                        src={project.image}
                        alt={`${project.title} 프로젝트 화면`}
                      />
                    ) : (
                      <div className="project-card__image-placeholder" aria-hidden="true">
                        ChalFit
                      </div>
                    )}
                  </div>

                  <div className="project-card__content">
                    <h3 className="project-card__title">{project.title}</h3>
                    <div className="project-card__badges" aria-label="프로젝트 유형 및 상태">
                      <span className="project-card__badge">{project.type}</span>
                      {project.status && (
                        <span className="project-card__badge project-card__badge--status">
                          {project.status}
                        </span>
                      )}
                    </div>
                    <p className="project-card__description">{project.description}</p>

                    {project.role && (
                      <p className="project-card__role">
                        <strong>담당 역할</strong>
                        <span>{project.role}</span>
                      </p>
                    )}

                    <ul className="project-card__technologies" aria-label="사용 기술">
                      {project.skills.map((skill) => (
                        <li key={skill}>{skill}</li>
                      ))}
                    </ul>

                    {!project.hideActions && (
                      <div className="project-card__actions">
                        {project.video ? (
                          <button
                            className="button button--primary"
                            type="button"
                            onClick={() => setActiveVideoProject(project)}
                          >
                            영상 보기
                          </button>
                        ) : project.demo ? (
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
                            {project.demoLabel ?? '프로젝트 준비 중'}
                          </span>
                        )}
                        {project.figma ? (
                          <a
                            className="button button--secondary"
                            href={project.figma}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Figma 보기
                          </a>
                        ) : Object.hasOwn(project, 'figma') ? (
                          <span
                            className="button button--secondary button--disabled"
                            aria-disabled="true"
                          >
                            Figma 보기
                          </span>
                        ) : null}
                        {!project.hideGithub && (
                          project.github ? (
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
                          )
                        )}
                      </div>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {activeVideoProject && (
          <div
            className="video-modal"
            onMouseDown={(event) => {
              if (event.target === event.currentTarget) {
                setActiveVideoProject(null)
              }
            }}
          >
            <div
              className="video-modal__dialog"
              role="dialog"
              aria-modal="true"
              aria-labelledby="video-modal-title"
            >
              <div className="video-modal__header">
                <h2 className="video-modal__title" id="video-modal-title">
                  {activeVideoProject.title}
                </h2>
                <button
                  className="video-modal__close"
                  type="button"
                  aria-label="영상 닫기"
                  onClick={() => setActiveVideoProject(null)}
                  autoFocus
                >
                  닫기
                </button>
              </div>
              <video className="video-modal__video" controls playsInline preload="metadata">
                <source src={activeVideoProject.video} type="video/mp4" />
                브라우저에서 영상을 재생할 수 없습니다.
              </video>
            </div>
          </div>
        )}

        <section className="section section--alternate" id="experience">
          <div className="container">
            <p className="section__label">LEARNING JOURNEY</p>
            <h2 className="section__title">배움과 성장</h2>
            <p className="section__description experience__description">
              배운 내용을 직접 디자인하고 구현하며 경험을 쌓아가고 있습니다.
            </p>

            <ol className="timeline">
              {experiences.map((experience) => (
                <li className="timeline__item" key={`${experience.year}-${experience.title}`}>
                  <div className="timeline__marker" aria-hidden="true" />
                  <article className="timeline__card">
                    <div className="timeline__meta">
                      <time className="timeline__year" dateTime={experience.dateTime}>
                        {experience.year}
                      </time>
                    </div>
                    <p className="timeline__institution">{experience.institution}</p>
                    <div className="timeline__heading">
                      <h3 className="timeline__title">{experience.title}</h3>
                      <span className="timeline__category">{experience.category}</span>
                    </div>
                    <div className="timeline__details">
                      <p className="timeline__text">
                        <strong>배운 내용</strong>
                        <span>{experience.learned}</span>
                      </p>
                      <p className="timeline__text">
                        <strong>실습/프로젝트</strong>
                        <span>{experience.practice}</span>
                      </p>
                    </div>
                  </article>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="section career-goal" id="career-goal">
          <div className="container">
            <div className="career-goal__content">
              <p className="section__label">CAREER GOAL</p>
              <h2 className="section__title">앞으로 만들어가고 싶은 방향</h2>
              <div className="career-goal__body">
                <p className="career-goal__text">
                  디자인 의도를 이해하고, 이를 실제 웹 화면으로 구현할 수 있는{' '}
                  <strong>웹디자이너·웹퍼블리셔</strong>로 성장하고 싶습니다.
                </p>
                <p className="career-goal__text">
                  사용자 경험을 고려한 UI 디자인과 반응형 웹 구현 역량을 꾸준히
                  발전시키며, 디자인과 개발 사이를 자연스럽게 연결할 수 있는 실무자가
                  되는 것이 목표입니다.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="contact">
          <div className="container contact__inner">
            <div className="contact__content">
              <p className="section__label">CONTACT</p>
              <h2 className="section__title">연락처</h2>
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
                  <a
                    className="contact__info-value"
                    href="https://github.com/2seula-a"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    github.com/2seula-a
                  </a>
                </div>
                <div className="contact__info-item">
                  <span className="contact__info-label">Resume</span>
                  <span
                    className="button button--secondary button--disabled contact__resume-button"
                    aria-disabled="true"
                  >
                    이력서 준비 중
                  </span>
                </div>
              </address>
            </div>

            <form className="contact-form" onSubmit={handleFormSubmit}>
              <div className="contact-form__field">
                <label htmlFor="contact-name">
                  이름<span className="contact-form__required" aria-hidden="true"> *</span>
                </label>
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
                <label htmlFor="contact-email">
                  이메일<span className="contact-form__required" aria-hidden="true"> *</span>
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  aria-describedby="contact-email-error"
                  placeholder="이메일을 입력해 주세요"
                  required
                  value={formData.email}
                  onChange={handleFormChange}
                />
                <span className="contact-form__error" id="contact-email-error">
                  올바른 이메일 형식으로 입력해 주세요.
                </span>
              </div>

              <div className="contact-form__field">
                <label htmlFor="contact-message">
                  메시지<span className="contact-form__required" aria-hidden="true"> *</span>
                </label>
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

              <button className="contact-form__button" type="submit" disabled>
                문의 폼 준비 중
              </button>
              <p className="contact-form__status">
                현재 전송 기능을 준비하고 있습니다. 이메일로 연락해 주세요.
              </p>
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
