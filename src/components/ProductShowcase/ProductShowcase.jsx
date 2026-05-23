import { Link } from 'react-router-dom';
import './ProductShowcase.css';

const showcaseItems = [
  {
    id: 'talvar',
    title: 'Sacred Ayudh Vastu Frame',
    titleHighlight: 'Ayudh Vastu Frame',
    description1: 'Bring divine energy, strength, and positivity into your space with our beautifully crafted <strong>Ayudh Vastu Frame</strong>. Inspired by sacred symbolism and traditional Vastu principles, this frame is believed to create a protective aura while attracting harmony, courage, and positive vibrations to your home or workplace.',
    description2: 'Designed with spiritual significance and elegant craftsmanship, the Ayudh Frame not only enhances your interior decor but also represents protection, prosperity, and balanced energy. Ideal for placing in your living room, office, temple area, or entrance as per Vastu guidance.',
    btnText: 'Explore Ayudh Frame',
    href: '/category?cat=AAYUDH+FRAME',
    image: 'https://res.cloudinary.com/dyokqf46m/image/upload/v1778756729/holly-zolly/product-Agni%20-%20Talvar%20Aayudh-1778756729436-0.46569375358660836.png',
    imageAlt: 'Sacred Ayudh Vastu Frame — Talvar',
    imageLeft: true,
  },
  {
    id: 'rath',
    title: 'Divine Chariot Rath',
    titleHighlight: 'Chariot Rath',
    description1: 'Bring home the spiritual elegance of our beautifully handcrafted <strong>Chariot Rath</strong>, inspired by traditional Indian heritage and divine craftsmanship. Symbolizing devotion, positivity, and sacred energy, this decorative wooden rath adds a timeless spiritual charm to your home, temple, or office space.',
    description2: 'Designed with premium wooden craftsmanship and intricate carvings, the Chariot Rath reflects culture, tradition, and divine beauty. Perfect for home decor, pooja spaces, gifting, and spiritual interiors, it enhances positivity while bringing a touch of elegance and devotion to your surroundings.',
    btnText: 'Explore Chariot Rath',
    href: '/category?cat=VASTUKALP+PRODUCT',
    image: 'https://res.cloudinary.com/dyokqf46m/image/upload/v1778771333/holly-zolly/product-update-1778771333135-0.7568441426879019.jpg',
    imageAlt: 'Divine Chariot Rath wooden product',
    imageLeft: false,
  },
];

export default function ProductShowcase() {
  return (
    <section className="ps-section section">
      {showcaseItems.map((item) => (
        <div
          key={item.id}
          className={`ps-row${item.imageLeft ? ' ps-row--img-left' : ' ps-row--img-right'}`}
        >
          <div className="ps-row__img">
            <img src={item.image} alt={item.imageAlt} loading="lazy" decoding="async" />
          </div>

          <div className="ps-row__text">
            <h2 className="ps-row__title">{item.title}</h2>
            <p
              className="ps-row__desc"
              dangerouslySetInnerHTML={{ __html: item.description1 }}
            />
            <p className="ps-row__desc">{item.description2}</p>
            <Link to={item.href} className="ps-row__btn">
              {item.btnText}
            </Link>
          </div>
        </div>
      ))}
    </section>
  );
}
