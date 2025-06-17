import '../styles/header.css';
import '../styles/footer.css';
import logo_moes from '../assets/img/logo_moes.png';
import appQR from '../assets/img/app-qr.png';
import playStore from '../assets/img/playStore.png';
import appStore from '../assets/img/appStore.png';


export default function Root() {
  const header = (
    <header>
      <a href="">
        <img src={logo_moes} alt="logo_moes" class="logo" />
      </a>
      <button class="abrir-menu" id="abrir">
        <img src="./assets/icons/menu.svg" alt="btn-abrir" id="menu" />
      </button>
      <nav id="nav">
        <button class="cerrar-menu" id="cerrar">
          <img src="./assets/icons/close.svg" alt="btn-cerrar" />
        </button>
        <ul class="nav-list">
          <li><a href="./pages/nosotros.html">Nosotros</a></li>
          <li><a href="./pages/catalogo.html">Catálogo</a></li>
          <li><a href="./pages/distribuidores.html">Distribuidores</a></li>
        </ul>
      </nav>
    </header>
  )

  const footer = (
    <footer>
      <div class="footer-info">

        <div class="footer-info-contactanos">
          <h2>Contáctanos</h2>
          <div>
            <h3>E-mail:</h3>
            <a href="mailto:prointingsas@gmail.com?Subject=Información%20de%20productos" target="_blank">
              <i class="fi fi-rr-envelope"></i>
              prointingsas@gmail.com</a>
            <a href="mailto:prointingsas@moeshouse.com?Subject=Información%20de%20productos" target="_blank">
              <i class="fi fi-rr-envelope"></i>
              prointingsas@moeshouse.com</a>
          </div>

          <div>
            <h3>Celular:</h3>
            <a href="tel:+573164908069" target="_blank">
              <i class="fi fi-rr-phone-call"></i>
              +57 316 490 8069</a>
          </div>

          <div>
            <h3>Dirección:</h3>
            <a href="https://maps.app.goo.gl/SJEBz1sbV7hwscyT6" target="_blank" rel="noopener">
              <i class="fi fi-rs-marker"></i>
              Carrera 47 #94-82 Barranquilla - Atlántico</a>
          </div>
        </div>

        <div class="footer-social-media">
          <a href="https://wa.me/573164908069/?text=Hola!%20Quiero%20información%20de%20un%20producto" target="_blank"
            rel="noopener"><i class="fi fi-brands-whatsapp"></i></a>
          <a href="mailto:prointingsas@gmail.com?Subject=Información%20de%20productos" target="_blank" rel="noopener"><i class="fi fi-rr-envelope"></i></a>
          <a href="https://www.instagram.com/moescolombia/" target="_blank" rel="noopener"><i
            class="fi fi-brands-instagram"></i></a>
        </div>

        <div class="footer-logo">
          <img src="./assets/img/logo_moes-white.png" alt="" />
        </div>

        <div class="footer-info-descarga">
          <h2>App disponible para descarga</h2>
          <img src={appQR} alt="qr" class="footer-info-descarga-qr" />
          <div class="footer-info-descarga-img">
            <a href="https://apps.apple.com/ar/app/moes/id1445259938" target="_blank" rel="noopener">
              <img src={appStore} alt="appstore-logo" />
            </a>
            <a href="https://play.google.com/store/apps/details?id=com.moes.wz&pcampaignid=web_share" target="_blank" rel="noopener">
              <img src={playStore} alt="playstore-logo" />
            </a>
          </div>
        </div>

      </div>

      <div class="footer-personal-info">
        <span>Desarrollado por Diana López - 2024</span>
        <a href="mailto:dilopezch@gmail.com" target="_blank" rel="noopener"><i class="fi fi-rr-envelope"></i></a>
        <a href="https://www.linkedin.com/in/diana-lopez-35089a228/" target="_blank" rel="noopener"><i class="fi fi-brands-linkedin"></i></a>
      </div>

    </footer >

  )
  return (
    <>

      {header}
      {footer}

    </>
  );
}
