import { useEffect } from 'react'
import './App.css'

const spotify = 'https://open.spotify.com/artist/3vSNxw6bYmiYDkVOfJ99YA'
const instagram = 'https://www.instagram.com/emiliano.musica/'
const facebook = 'https://www.facebook.com/emilianofolklore/'

const dates = [
  { date: 'PRÓXIMAMENTE', place: 'Nuevas fechas en camino', city: 'Tucumán · Argentina' },
  { date: 'CONTRATACIONES', place: 'Festivales, peñas y eventos', city: 'emilianovillagra@gmail.com' },
]

export default function App() {
  useEffect(() => {
    const elements = document.querySelectorAll('main > section, main > .poncho-band, footer')
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('in-view'); observer.unobserve(entry.target) }
    }), { threshold: .12 })
    elements.forEach((element, index) => { element.classList.add('scroll-reveal'); element.style.setProperty('--reveal-delay', `${Math.min(index * 55, 220)}ms`); observer.observe(element) })
    return () => observer.disconnect()
  }, [])
  return <>
    <header className="site-header">
      <a className="brand" href="#inicio" aria-label="Inicio Emiliano Villagra"><span className="brand-words">EMILIANO<br /><b>VILLAGRA</b></span></a>
      <nav aria-label="Navegación principal">
        <a href="#musica">Música</a><a href="#bio">Biografía</a><a href="#fechas">Fechas</a><a href="#redes">Redes</a>
      </nav>
      <a className="listen" href={spotify} target="_blank" rel="noreferrer">♬ &nbsp; ESCUCHÁ</a>
    </header>

    <main>
      <section className="hero" id="inicio">
        <div className="hero-poncho" aria-hidden="true" />
        <div className="hero-copy">
          <p className="eyebrow">CANTANTE · AUTOR · COMPOSITOR</p>
          <h1>EMILIANO<br /><span>VILLAGRA</span></h1>
          <p className="hero-text">Folclore tucumano con una voz que abraza. Canciones de raíz, emoción y tierra adentro.</p>
          <div className="hero-actions"><a className="button gold" href="#musica">ESCUCHÁ AHORA ↗</a><a className="text-link" href="#bio">CONOCÉ SU HISTORIA ↓</a></div>
        </div>
        <div className="hero-photo">
          <img src="/emiliano-portada.jpg" alt="Emiliano Villagra cantando en vivo" />
          <p className="vertical-note">TUCUMÁN · ARGENTINA</p>
        </div>
      </section>

      <div className="poncho-band" aria-hidden="true"><span>◆</span><span>◆</span><span>◆</span><span>◆</span><span>◆</span><span>◆</span><span>◆</span><span>◆</span></div>

      <section className="music section" id="musica">
        <div className="section-title"><p className="eyebrow">MÚSICA</p><h2>CANCIONES QUE<br />VUELVEN A CASA.</h2><p>Corazón Vivo, Entre Amigos y Corazón y Fuego. Una obra nacida de la raíz y llevada al presente.</p><a className="text-link dark" href={spotify} target="_blank" rel="noreferrer">ABRIR EN SPOTIFY ↗</a></div>
        <div className="spotify-wrap"><div className="poncho-corner" aria-hidden="true" /><iframe title="Emiliano Villagra en Spotify" src="https://open.spotify.com/embed/artist/3vSNxw6bYmiYDkVOfJ99YA?utm_source=generator" height="352" loading="lazy" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" /></div>
      </section>

      <section className="videos" id="videos">
        <div className="videos-heading"><p className="eyebrow">EN VIVO</p><h2>LA VOZ EN<br />EL ESCENARIO.</h2><p>Interpretaciones, momentos y canciones para volver a escuchar.</p></div>
        <div className="video-grid">
          <iframe src="https://www.youtube.com/embed/02UWsxN3kYs" title="Emiliano Villagra en Telefe" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
          <iframe src="https://www.youtube.com/embed/KE04gVWnVEI" title="Emiliano Villagra en vivo" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
          <iframe src="https://www.youtube.com/embed/2aQpK7PRDuM" title="Emiliano Villagra interpreta folklore" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
        </div>
      </section>

      <section className="photo-strip" aria-label="Imágenes de Emiliano Villagra"><img src="/emiliano-semifinal.jpg" alt="Emiliano Villagra en La Voz Argentina" /><img src="/emiliano-telefe.jpg" alt="Promoción de Emiliano Villagra en Telefe" /><img src="/emiliano-disco.jpg" alt="Arte musical de Emiliano Villagra" /></section>

      <section className="bio" id="bio">
        <div className="bio-head"><p className="eyebrow">BIOGRAFÍA</p><h2>UNA VIDA<br />HECHA CANCIÓN.</h2><div className="bio-stamp">EV<br /><span>DESDE<br />TUCUMÁN</span></div></div>
        <div className="bio-copy">
          <p>Emiliano Villagra Abadie es cantante, autor y compositor tucumano, con una trayectoria profundamente ligada al folclore argentino. Desde muy pequeño encontró en el tango y en la música de raíz las primeras influencias de un camino artístico que luego desarrollaría como intérprete y creador de sus propias canciones.</p>
          <p>Entre 2004 y 2007 integró el reconocido conjunto <strong>Esperanza Norteña</strong>, desempeñándose como primera voz y compartiendo importantes escenarios del país. La agrupación fue distinguida como Revelación en el Festival Nacional de Baradero y obtuvo reconocimientos dentro y fuera de la Argentina. Emiliano también participó como cantante en el disco <em>Transitando caminos</em>.</p>
          <p>Al iniciar su carrera solista continuó recorriendo peñas, encuentros culturales y festivales. En 2010 fue reconocido como Mejor Solista Vocal Masculino en la Peña Universitaria de la Universidad Nacional de Tucumán, representó a la provincia en el Pre Baradero e integró la delegación tucumana en el Festival Nacional de Folklore de Cosquín.</p>
          <p>Como cantautor, sus composiciones hablan del amor, los paisajes, la vida cotidiana y la identidad de su tierra. Su producción incluye <strong>Corazón Vivo</strong>, <strong>Entre Amigos</strong> y <strong>Corazón y Fuego</strong>, además de canciones como <em>Fuego de otoño</em>, <em>Si te encuentro</em>, <em>Jimena Pastora</em> y <em>Resplandor de luna</em>.</p>
          <p>En 2025 alcanzó proyección nacional en <strong>La Voz Argentina</strong>, como parte del equipo de Miranda!, llegando a instancias decisivas con interpretaciones de Encadenados, Honrar la vida, A la abuela Emilia, Universo paralelo y El arriero. En 2026 llevó su música al Festival Nacional de Doma y Folklore de Jesús María.</p>
          <p className="bio-closing">Con una voz cálida y expresiva, Emiliano Villagra une la raíz folklórica con una mirada actual, llevando en cada interpretación la música, las historias y los paisajes de Tucumán.</p>
        </div>
      </section>

      <section className="dates section" id="fechas"><div className="dates-title"><p className="eyebrow">AGENDA</p><h2>PRÓXIMAS<br />FECHAS.</h2><p>Cuando haya una nueva presentación, va a aparecer acá.</p><a className="presskit-button" href="/presskit-emiliano-villagra.pdf" download>↓ DESCARGAR PRESS KIT</a></div><div className="dates-list">{dates.map(item => <article className="date-card" key={item.date}><p>{item.date}</p><h3>{item.place}</h3><span>{item.city}</span></article>)}</div></section>

      <section className="social section" id="redes"><div><p className="eyebrow">SEGUÍ LA MÚSICA</p><h2>HISTORIAS QUE<br />SIGUEN SONANDO.</h2><p>Las novedades, canciones y momentos de cada escenario.</p></div><div className="social-links"><a href={instagram} target="_blank" rel="noreferrer"><b>Instagram</b><span>@emiliano.musica ↗</span></a><a href={facebook} target="_blank" rel="noreferrer"><b>Facebook</b><span>Emiliano Villagra Abadie ↗</span></a><a href={spotify} target="_blank" rel="noreferrer"><b>Spotify</b><span>Escuchar ahora ↗</span></a></div></section>
    </main>

    <a className="whatsapp" href="https://wa.me/5493814066974?text=Hola%20Emiliano%21%20Quiero%20contratarte." target="_blank" rel="noreferrer" aria-label="Escribir a Emiliano por WhatsApp"><svg viewBox="0 0 32 32" aria-hidden="true"><path d="M16 3a13 13 0 0 0-11.1 19.75L3 29l6.45-1.7A13 13 0 1 0 16 3Zm0 23.62c-2.08 0-4.12-.56-5.9-1.63l-.42-.25-3.83 1 1.02-3.72-.28-.43A10.62 10.62 0 1 1 16 26.62Zm5.83-7.95c-.32-.16-1.88-.93-2.17-1.03-.29-.11-.5-.16-.72.16-.21.32-.82 1.03-1 1.24-.18.21-.37.24-.69.08-1.88-.94-3.12-1.68-4.36-3.82-.33-.57.33-.53.95-1.76.11-.21.05-.4-.03-.56-.08-.16-.72-1.72-.98-2.35-.26-.62-.52-.54-.72-.55h-.61c-.21 0-.56.08-.85.4-.29.32-1.11 1.09-1.11 2.65 0 1.56 1.14 3.07 1.3 3.28.16.21 2.25 3.43 5.45 4.82 2.02.87 2.81.95 3.82.8.62-.09 1.88-.77 2.14-1.51.27-.75.27-1.39.19-1.52-.08-.13-.29-.21-.61-.37Z" /></svg></a>
    <footer><div><p className="footer-name">EMILIANO <span>VILLAGRA</span></p><p>FOLCLORE TUCUMANO · ARGENTINA</p></div><div className="contact"><p>CONTACTO Y CONTRATACIONES</p><a href="mailto:emilianovillagra@gmail.com">emilianovillagra@gmail.com ↗</a></div></footer>
  </>
}
