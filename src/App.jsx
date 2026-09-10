import { useEffect } from 'react'
import './App.css'
import { useAgenda } from './lib/useAgenda'

const INSTAGRAM_URL = 'https://www.instagram.com/emiliano.musica/'
const FACEBOOK_URL = 'https://www.facebook.com/emilianofolklore/'
const WHATSAPP_NUMBER = '5493814066974'
const EMAIL = 'emilianovillagra@gmail.com'

const wa = (text) => `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`

const MOMENTOS = [
  { src: '/voz-poncho.webp', alt: 'Emiliano Villagra con poncho tucumano en La Voz Argentina', caption: 'La Voz Argentina' },
  { src: '/voz-primerplano.webp', alt: 'Emiliano Villagra cantando de cerca', caption: 'Primer plano' },
  { src: '/emiliano-portada.webp', alt: 'Emiliano Villagra en el escenario', caption: 'En el escenario' },
  { src: '/emiliano-disco.webp', alt: 'Arte musical de Emiliano Villagra', caption: 'Arte musical' },
  { src: '/press-01.webp', alt: 'Emiliano Villagra, foto de prensa', caption: 'Prensa' },
  { src: '/press-02.webp', alt: 'Emiliano Villagra, foto de prensa', caption: 'Prensa' },
  { src: '/press-04.webp', alt: 'Emiliano Villagra, foto de prensa', caption: 'Prensa' },
]

function useScrollReveal() {
  useEffect(() => {
    const elements = document.querySelectorAll('.scroll-reveal')
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('in-view'); observer.unobserve(entry.target) }
    }), { threshold: .12 })
    elements.forEach((el, i) => { el.style.setProperty('--reveal-delay', `${Math.min(i * 45, 220)}ms`); observer.observe(el) })
    return () => observer.disconnect()
  }, [])
}

export default function App() {
  useScrollReveal()
  const { loading, error, fechas } = useAgenda()

  return <>
    <header>
      <a className="brand" href="#inicio">EMILIANO <span>VILLAGRA</span></a>
      <nav aria-label="Navegación principal">
        <a href="#musica">Música</a><a href="#videos">Videos</a><a href="#agenda">Agenda</a><a href="#clases">Clases</a><a href="#bio">Biografía</a>
      </nav>
      <a className="hdr-cta" href="#contacto">Contacto</a>
    </header>

    <main>
      <section className="hero scroll-reveal" id="inicio">
        <div>
          <div className="hero-eyebrow"><span className="dash" /><p className="eyebrow" style={{ margin: 0 }}>Cantante · Autor · Compositor</p></div>
          <h1 className="title">EMILIANO<br /><span className="glow">VILLAGRA</span></h1>
          <p className="hero-sub">La voz del folclore tucumano en el escenario más grande del país — de las peñas de Yerba Buena a la final de La Voz Argentina.</p>
          <div className="hero-actions">
            <a className="btn primary" href="#musica">Escuchá ahora</a>
            <a className="btn solid" href="#clases">Clases de canto online</a>
            <a className="btn ghost" href="#agenda">Ver agenda</a>
          </div>
        </div>
        <div className="hero-stage">
          <img src="/voz-stage.webp" alt="Emiliano Villagra cantando en La Voz Argentina" width="1080" height="1350" fetchPriority="high" />
          <p className="tag">Tucumán · Argentina</p>
        </div>
      </section>

      <section className="moments scroll-reveal" id="momentos">
        <div className="section-head">
          <div><p className="eyebrow">Galería</p><h2>Momentos de escenario</h2></div>
          <p className="desc">Prensa, presentaciones y recorrido — de las peñas a la tele nacional.</p>
        </div>
        <div className="carousel">
          {MOMENTOS.map(m => (
            <figure key={m.src}>
              <img src={m.src} alt={m.alt} loading="lazy" width="180" height="180" />
              <figcaption>{m.caption}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="music scroll-reveal" id="musica">
        <div className="section-head">
          <div><p className="eyebrow">Música</p><h2>Escuchá el disco</h2></div>
          <p className="desc">Corazón Vivo, Entre Amigos y Corazón y Fuego — obra de raíz llevada al presente.</p>
        </div>
        <div className="spotify-card">
          <div className="spotify-cover" aria-hidden="true" />
          <div className="spotify-info">
            <h3>Emiliano Villagra en Spotify</h3>
            <p>Seguí el perfil para no perderte cada lanzamiento nuevo.</p>
            <iframe
              className="spotify-embed"
              title="Emiliano Villagra en Spotify"
              src="https://open.spotify.com/embed/artist/3vSNxw6bYmiYDkVOfJ99YA?utm_source=generator&theme=0"
              loading="lazy"
              allow="encrypted-media"
            />
          </div>
        </div>
      </section>

      <section className="scroll-reveal" id="videos">
        <div className="section-head">
          <div><p className="eyebrow">En vivo</p><h2>Videos</h2></div>
          <p className="desc">Interpretaciones y momentos de escenario para volver a ver.</p>
        </div>
        <div className="video-grid">
          <div className="video-card"><iframe src="https://www.youtube.com/embed/02UWsxN3kYs" title="Emiliano Villagra en Telefe" loading="lazy" allowFullScreen /><p>Emiliano Villagra en Telefe</p></div>
          <div className="video-card"><iframe src="https://www.youtube.com/embed/KE04gVWnVEI" title="Emiliano Villagra en vivo" loading="lazy" allowFullScreen /><p>Emiliano Villagra en vivo</p></div>
          <div className="video-card"><iframe src="https://www.youtube.com/embed/2aQpK7PRDuM" title="Emiliano Villagra interpreta folklore" loading="lazy" allowFullScreen /><p>Interpreta folklore</p></div>
        </div>
      </section>

      <section className="agenda scroll-reveal" id="agenda">
        <div className="section-head">
          <div><p className="eyebrow">Agenda en vivo</p><h2>Próximas fechas</h2></div>
          <p className="desc">Conectada a la planilla de gestión de shows — se actualiza sola apenas se carga una fecha nueva.</p>
        </div>
        <span className="live-pill"><span className="dot" />Sincronizado con Google Sheets</span>
        <div className="stub-list">
          {loading && <p className="agenda-empty">Cargando próximas fechas…</p>}
          {!loading && error && <p className="agenda-error">No se pudo cargar la agenda ahora mismo. Escribinos para consultar fechas disponibles.</p>}
          {!loading && !error && fechas.length === 0 && <p className="agenda-empty">Todavía no hay fechas confirmadas — seguí las redes para enterarte primero.</p>}
          {!loading && !error && fechas.map(f => (
            <div className="stub" key={`${f.dia}-${f.mes}-${f.lugar}`}>
              <div><p className="d-month">{f.mes}</p><p className="d-num">{f.dia}</p></div>
              <div className="venue"><h3>{f.lugar}</h3><p>{f.ciudad}</p></div>
              <span className={`status${f.estado.toLowerCase() !== 'confirmado' ? ' soon' : ''}`}>{f.estado}</span>
              <a className="go" href={f.link || wa(`Hola! Quiero info sobre ${f.lugar}.`)} target="_blank" rel="noreferrer">
                {f.estado.toLowerCase() === 'confirmado' ? 'Más info ↗' : 'Avisame ↗'}
              </a>
            </div>
          ))}
        </div>
      </section>

      <section className="offers scroll-reveal" id="clases">
        <div className="section-head">
          <div><p className="eyebrow">Shows &amp; clases</p><h2>Dos formas de sumarte</h2></div>
          <p className="desc">Contratá un show en vivo, o aprendé a cantar folclore con clases online personalizadas.</p>
        </div>
        <div className="offer-grid">
          <div className="offer">
            <span className="tag">Shows en vivo</span>
            <h3>Contratá un show</h3>
            <p>Peñas, festivales, eventos privados y encuentros culturales, en Tucumán o de gira.</p>
            <ul>
              <li>Repertorio propio y de raíz folklórica</li>
              <li>Formato solista o con banda</li>
              <li>Presupuesto a medida según el evento</li>
            </ul>
            <a className="go" href={wa('Hola Emiliano! Quiero contratarte para un evento.')} target="_blank" rel="noreferrer">Consultar disponibilidad ↗</a>
          </div>
          <div className="offer">
            <span className="tag">Clases online</span>
            <h3>Coach vocal 1 a 1</h3>
            <p>Clases individuales por videollamada con Emiliano como coach vocal: técnica, respiración e interpretación de folclore.</p>
            <ul>
              <li>Clases individuales por videollamada</li>
              <li>Técnica vocal, respiración e interpretación</li>
              <li>Para principiantes y niveles avanzados</li>
            </ul>
            <a className="go" href={wa('Hola! Quiero reservar una clase de canto online.')} target="_blank" rel="noreferrer">Reservar una clase ↗</a>
          </div>
        </div>
      </section>

      <section className="bio scroll-reveal" id="bio">
        <div><p className="eyebrow">Biografía</p><h2>Una vida hecha canción</h2></div>
        <div className="bio-copy">
          <p>Emiliano Villagra Abadie es cantante, autor y compositor tucumano, con una trayectoria profundamente ligada al folclore argentino. Desde muy pequeño encontró en el tango y en la música de raíz las primeras influencias de un camino artístico que luego desarrollaría como intérprete y creador de sus propias canciones.</p>
          <p>Entre 2004 y 2007 integró el reconocido conjunto <strong>Esperanza Norteña</strong>, desempeñándose como primera voz y compartiendo importantes escenarios del país. La agrupación fue distinguida como Revelación en el Festival Nacional de Baradero y obtuvo reconocimientos dentro y fuera de la Argentina. Emiliano también participó como cantante en el disco <em>Transitando caminos</em>.</p>
          <p>Al iniciar su carrera solista continuó recorriendo peñas, encuentros culturales y festivales. En 2010 fue reconocido como Mejor Solista Vocal Masculino en la Peña Universitaria de la Universidad Nacional de Tucumán, representó a la provincia en el Pre Baradero e integró la delegación tucumana en el Festival Nacional de Folklore de Cosquín.</p>
          <p>Como cantautor, sus composiciones hablan del amor, los paisajes, la vida cotidiana y la identidad de su tierra. Su producción incluye <strong>Corazón Vivo</strong>, <strong>Entre Amigos</strong> y <strong>Corazón y Fuego</strong>, además de canciones como <em>Fuego de otoño</em>, <em>Si te encuentro</em>, <em>Jimena Pastora</em> y <em>Resplandor de luna</em>.</p>
          <p>En 2025 alcanzó proyección nacional en <strong>La Voz Argentina</strong>, como parte del equipo de Miranda!, llegando a instancias decisivas con interpretaciones de Encadenados, Honrar la vida, A la abuela Emilia, Universo paralelo y El arriero. En 2026 llevó su música al Festival Nacional de Doma y Folklore de Jesús María.</p>
          <span className="pull">Con una voz cálida y expresiva, Emiliano Villagra une la raíz folklórica con una mirada actual, llevando en cada interpretación la música, las historias y los paisajes de Tucumán.</span>
        </div>
      </section>

      <section className="social scroll-reveal" aria-label="Redes sociales">
        <div className="section-head">
          <div><p className="eyebrow">Seguí la música</p><h2>Redes</h2></div>
        </div>
        <div className="offer-grid">
          <a className="offer" href={INSTAGRAM_URL} target="_blank" rel="noreferrer"><span className="tag">Instagram</span><h3>@emiliano.musica</h3></a>
          <a className="offer" href={FACEBOOK_URL} target="_blank" rel="noreferrer"><span className="tag">Facebook</span><h3>Emiliano Villagra Abadie</h3></a>
        </div>
      </section>

      <section className="contact-band scroll-reveal" id="contacto">
        <p className="eyebrow" style={{ justifyContent: 'center', display: 'flex' }}>Contacto</p>
        <h2>Hablemos de tu<br />próximo evento</h2>
        <p>Escribime por contrataciones, entradas o para reservar tu clase de canto — te respondo directo.</p>
        <a className="go-mail" href={`mailto:${EMAIL}`}>{EMAIL}</a>
      </section>
    </main>

    <footer>
      <span className="foot-brand">EMILIANO <span>VILLAGRA</span></span>
      <p>FOLCLORE TUCUMANO · ARGENTINA</p>
    </footer>

    <a className="whatsapp-fab" href={wa('Hola Emiliano!')} target="_blank" rel="noreferrer" aria-label="Escribir por WhatsApp">
      <svg viewBox="0 0 32 32" aria-hidden="true"><path d="M16 3a13 13 0 0 0-11.1 19.75L3 29l6.45-1.7A13 13 0 1 0 16 3Zm0 23.62c-2.08 0-4.12-.56-5.9-1.63l-.42-.25-3.83 1 1.02-3.72-.28-.43A10.62 10.62 0 1 1 16 26.62Zm5.83-7.95c-.32-.16-1.88-.93-2.17-1.03-.29-.11-.5-.16-.72.16-.21.32-.82 1.03-1 1.24-.18.21-.37.24-.69.08-1.88-.94-3.12-1.68-4.36-3.82-.33-.57.33-.53.95-1.76.11-.21.05-.4-.03-.56-.08-.16-.72-1.72-.98-2.35-.26-.62-.52-.54-.72-.55h-.61c-.21 0-.56.08-.85.4-.29.32-1.11 1.09-1.11 2.65 0 1.56 1.14 3.07 1.3 3.28.16.21 2.25 3.43 5.45 4.82 2.02.87 2.81.95 3.82.8.62-.09 1.88-.77 2.14-1.51.27-.75.27-1.39.19-1.52-.08-.13-.29-.21-.61-.37Z" /></svg>
    </a>
  </>
}
