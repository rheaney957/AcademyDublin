/* eslint-disable react/no-unescaped-entities */
import styles from '../styles/Home.module.css'
import NavBar from '../components/NavBar'
import Breadcrumbs from '../components/Breadcrumbs'
import Layout from '../components/Layout'
import Header from '../components/Header'
import Footer from '../components/Footer'
export interface VenuesProps {
  onMenuToggle: () => void;
  mobileMenuOpen?: boolean;
}


export default function Venues({ onMenuToggle, mobileMenuOpen }: VenuesProps)
{
  return (
    <div className={styles.container}>
     <Header route='Venue'/>

      <NavBar onMenuToggle={onMenuToggle} isOpen={mobileMenuOpen}/>
      <Breadcrumbs />

      <main className={styles.main}>
        <Layout title="Venue" FAQs={true}>
          <section className={styles.venue}>
            <div className={styles.venuesGrid}>
              <div className={styles.venueCard}>
                <h3>Academy 1</h3>
                <div className={styles.venueImageWrapper}>
                  <img src={`./images/ac1.jpg`} alt="venue-ac1" />
                </div>
                <p>The Academy main room has hosted some legendary live acts and DJs over the years, including THE KILLERS, PRINCE, SLAYER, DEADMAU5, MACKLEMORE, DAVID BOWIE & countless others. The room has recently undergone a huge refurbishment, with the addition of an outdoor smoking terrace, a bespoke VIP area, and all new Lighting & PA.</p>
              </div>
              <div className={styles.venueCard}>
                <h3>Academy 2</h3>
                <div className={styles.venueImageWrapper}>
                  <img src={`./images/ac2.jpg`} alt="venue-ac2" />
                </div>
                <p>Tucked away in the venue's basement, The Academy 2 is a flexible live / club space, which is often the starting point for breaking live acts, both domestic & international. Previous artists to take to the stage early in their careers include MUMFORD & SONS, FRANK TUNER, BASTILLE & CARL BARAT.</p>
              </div>
              <div className={styles.venueCard}>
                <h3>Green Room</h3>
                <div className={styles.venueImageWrapper}>
                  <img src={`./images/greenroom.jpg`} alt="venue-greenroom" />
                </div>
                <p>Following the addition of a custom built Funktion One Dance Stacks PA, and a total refurbishment of the space, The Green Room boasts an all new look, suitable for both live shows & club events.</p>
              </div>
            </div>
            </section>
          </Layout>
        </main>

      <Footer />
    </div>
  )
}
