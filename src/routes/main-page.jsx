import '../styles/product_cards_carrousel.css';
import video from '../assets/video/video-intro.mp4';
import wifi_icon from '../assets/icons/wifi.png';
import zigbee_icon from '../assets/icons/zigbee.svg';
import rfc_icon from '../assets/icons/rf.png';
import panel from '../assets/img/panel.png';
import switch_panel from '../assets/img/switch.png';
import switch_tactil from '../assets/img/switch-tactil.png';
import door_lock from '../assets/img/door-lock.png';
import control from '../assets/img/control.png';
import sensor from '../assets/img/sensor.png';
import ProductCard from '../components/ProductCard';

export default function MainPage() {

  const hero_video = (
    <section> 
      <video className="intro-video" muted loop playsInline>
        <source src={video}/>
        <p>Tu navegador no admite la etiqueta de video.</p>
      </video>
    </section>
  )

  const product_cards_carrousel = (
    <section className="productos">
      <h1>Nuestros Productos</h1>

      <div className="container">
        <div className="section-container-cards swiper">
          <div className="slider-wrapper">
            <div className="card-list swiper-wrapper">
    
              <ProductCard
                image={panel}
                alt="smart-panel"
                name="Smart Panel"
                types={[
                  {icon: wifi_icon, alt: 'wifi-icon', label: 'WiFi'},
                  {icon: zigbee_icon, alt: 'zigbee-icon', label: 'ZigBee'}
                ]}
                onMoreInfo={() => {}}
              />
    
            </div>
            
            <div className="swiper-pagination"></div>
            <div className="swiper-slide-button swiper-button-prev"></div>
            <div className="swiper-slide-button swiper-button-next"></div>
          </div>
    
        </div>
      </div>
    </section>
  )

  return (
    <>

      {hero_video}
      {product_cards_carrousel}
      
    </>

    
  )
}