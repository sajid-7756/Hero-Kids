import Container from '@/components/common/Container'
import { Metadata } from 'next'
import ContactInfo from './_components/ContactInfo'
import ContactForm from './_components/ContactForm'

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with HeroKids for any inquiries, support, or feedback. We are here to help!',
}

const Contact = () => (
  <div className="bg-background">
    {/* Hero Section */}
    <section className="py-20 border-b bg-muted/30">
      <Container>
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
            Let&apos;s Start a <span className="text-primary">Conversation</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Whether you have a question about our products, need help with an order,
            or just want to say hello, we&apos;d love to hear from you.
          </p>
        </div>
      </Container>
    </section>

    {/* Main Content */}
    <section className="py-20">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <ContactInfo />
          <ContactForm />
        </div>
      </Container>
    </section>

    {/* Map Section */}
    <section className="pb-20">
      <Container>
        <div className="w-full h-112.5 rounded-3xl overflow-hidden border-4 shadow-xl">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.2528082181!2d-74.119763973046!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1700000000000!5m2!1sen!2sbd"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="HeroKids Location"
          ></iframe>
        </div>
      </Container>
    </section>
  </div>
)

export default Contact
