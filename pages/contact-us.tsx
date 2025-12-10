import styles from '../styles/Home.module.css'
import NavBar from '../components/NavBar'
import MobileMenu from '../components/MobileMenu'
import Breadcrumbs from '../components/Breadcrumbs'
import Layout from '../components/Layout'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ContactUsForm from '../components/ContactUsForm'
import React, { useState } from 'react'

export interface ContactUsProps {
  SSRdata: any;
}

export default function ContactUs({ SSRdata }: ContactUsProps)
{
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className={styles.container}>
      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
      <Header route='Contact Us'/>
      <NavBar
        isMobileMenuOpen={isMobileMenuOpen}
        onMobileMenuToggle={() => setIsMobileMenuOpen(true)}
      />
      <Breadcrumbs />
      <main className={styles.main}>
        <Layout title="Contact Us"  FAQs={true}>
          <section className={styles.contact}>
            <ContactUsForm/>
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
