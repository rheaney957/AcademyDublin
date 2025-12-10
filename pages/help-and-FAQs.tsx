import Image from 'next/image'
import styles from '../styles/Home.module.css'
import NavBar from '../components/NavBar'
import MobileMenu from '../components/MobileMenu'
import Breadcrumbs from '../components/Breadcrumbs'
import Layout from '../components/Layout'
import Header from '../components/Header'
import Accordion from '../components/Accordion'
import Footer from '../components/Footer'
import React, { useState } from 'react'

export default function FAQ()
{
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className={styles.container}>
      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
      <Header route="Help and FAQ's" />
      <NavBar
        isMobileMenuOpen={isMobileMenuOpen}
        onMobileMenuToggle={() => setIsMobileMenuOpen(true)}
      />
      <Breadcrumbs />

      <main className={styles.main}>
        <Layout title="Frequently Asked Questions" FAQs={true}>
          <section className={styles.faqs}>
            <div className={styles.accordion}>
              <Accordion question='What items are prohibited inside the venue?'>
                The following items are not permitted: Bottles (including unopened), Cans, Food or outside beverages, Selfie sticks, Large umbrellas, Professional cameras, Video cameras, Audio recording devices, GoPros, Large posters (A3 size or bigger), Large flags on poles, Belt chains, and Laser pointers.
              </Accordion>
              <Accordion question='What are the bag restrictions?'>
                Bags no larger than 40cm x 40cm x 20cm are allowed. Large rucksacks, luggage, and oversized bags are not permitted.
              </Accordion>
              <Accordion question='Are there age restrictions for events?'>
                Age restrictions vary by event. Please check Ticketmaster for event-specific details.
              </Accordion>
              <Accordion question='Where is The Academy located?'>
                The Academy is located at 57 Middle Abbey Street, Dublin 1 (City Centre) and is easily accessible by public transport.
              </Accordion>
              <Accordion question='How can I contact The Academy?'>
                For general enquiries: info@theacademydublin.com. For lost property: lostproperty@theacademydublin.com
              </Accordion>
              <Accordion question='Can I bring cameras or recording equipment?'>
                No professional cameras, video cameras, or audio recording devices are allowed.
              </Accordion>
              <Accordion question='Can I bring food and drinks?'>
                Outside food and beverages, including unopened bottles, are not permitted.
              </Accordion>
              <Accordion question='What time should I arrive?'>
                Please check your ticket for door opening and show start times. Stage times are typically confirmed the day before or day of the show. Check our website, social media, or the event promoter&apos;s page for updates.
              </Accordion>
              <Accordion question='Are there cloakroom facilities?'>
                Yes, cloakrooms are available for storing bags and jackets. Both cash and card are accepted.
              </Accordion>
              <Accordion question='What if I lose something at the venue?'>
                Email us at lostproperty@theacademydublin.com or message us on social media.
              </Accordion>
              <Accordion question='Are earplugs available?'>
                Yes! Ask any staff member &mdash; all bars stock complimentary earplugs. A Manager can also provide them free of charge.
              </Accordion>
              <Accordion question='What if I need help during the event?'>
                A Duty Manager is on-site at every show to assist guests. Please speak to any staff member if you need help or would like to speak to a Manager.
              </Accordion>
              <Accordion question='Is the venue accessible?'>
                Yes, our venue is accessible for all guests. For assistance or access requirements, please email info@theacademydublin.com.
              </Accordion>
              <Accordion question='Where can I buy tickets?'>
                Tickets for all events are available at www.theacademydublin.com
              </Accordion>
            </div>
          </section>
        </Layout>

      </main>
      <Footer />
    </div>
  )
}
