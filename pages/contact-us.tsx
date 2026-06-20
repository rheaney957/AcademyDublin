
import styles from '../styles/Home.module.css'
import NavBar from '../components/NavBar'
import Breadcrumbs from '../components/Breadcrumbs'
import Layout from '../components/Layout'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ContactUsForm from '../components/ContactUsForm'
export interface ContactUsProps {
  onMenuToggle: () => void;
  mobileMenuOpen?: boolean;
  SSRdata: any;
}

export default function ContactUs({ onMenuToggle, mobileMenuOpen, SSRdata }: ContactUsProps)
{
  return (
    <div className={styles.container}>
     <Header route='Contact Us'/>
      <NavBar onMenuToggle={onMenuToggle} isOpen={mobileMenuOpen}/>
      <Breadcrumbs />
      <main className={styles.main}>
        <Layout title="Contact Us" FAQs={true}>
          <section className={styles.contact}>
            <div className={styles.contactInfo}>
              <h3>Contact Information</h3>
              <p>For Lost Property please email:<br />
                <a href="mailto:lostproperty@theacademydublin.com">lostproperty@theacademydublin.com</a>
              </p>
              <p>For Venue Hire please email:<br />
                <a href="mailto:hire@theacademydublin.com">hire@theacademydublin.com</a>
              </p>
             <p>Phone Number:<br />
                <a href="tel:+015392927">(01) 539 2927</a>
              </p>
            </div>
            <div className={styles.contactFlexContainer}>
              <div className={styles.contactColumn}>
                <ContactUsForm/>
              </div>
              <div className={styles.contactColumn}>
                <h3>Our Location</h3>
                <div className={styles.mapContainer}>
                  <iframe
                    width="100%"
                    height="400"
                    style={{ border: 0 }}
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2381.5206117295766!2d-6.261658!3d53.34769!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x486673e2c5e5e5e5%3A0x1234567890abcdef!2s57%20Middle%20Abbey%20Street%2C%20Dublin%201!5e0!3m2!1sen!2sie!4v1234567890"
                  ></iframe>
                </div>
              </div>
            </div>
          </section>
        </Layout>
        </main>
        <Footer />
    </div>
  )
}

export async function getStaticProps() {

  const res = await fetch('https://www.shine.net/newShineSite/out/JSON/featuredGigs.json', { cache: 'no-store' })
  const data = await res.json()
  return {props: {SSRdata: data}, revalidate: 60}
}
