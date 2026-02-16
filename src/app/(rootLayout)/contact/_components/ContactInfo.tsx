import { Mail, MapPin, Phone, MessageSquare } from "lucide-react";

const ContactInfo = () => {
  const infoItems = [
    {
      icon: <MapPin className="h-6 w-6 text-primary" />,
      title: "Our Location",
      details: "Bogura Bangladesh, Talora Bazar, SC 5881",
      link: "https://maps.google.com",
    },
    {
      icon: <Phone className="h-6 w-6 text-primary" />,
      title: "Phone Number",
      details: "+880 17033 307756",
      link: "tel:+15551234567",
    },
    {
      icon: <Mail className="h-6 w-6 text-primary" />,
      title: "Email Address",
      details: "devsajid56@gmail.com",
      link: "mailto:devsajid56@gmail.com",
    },
    {
      icon: <MessageSquare className="h-6 w-6 text-primary" />,
      title: "Live Chat",
      details: "Available Mon-Fri, 9am - 5pm",
      link: "#",
    },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
        <p className="text-muted-foreground leading-relaxed">
          Have a question about our products or need help with an order? Our team is here to help you and your little heroes!
        </p>
      </div>

      <div className="grid gap-6">
        {infoItems.map((item, index) => (
          <a
            key={index}
            href={item.link}
            className="flex items-start gap-4 p-4 rounded-xl border bg-card hover:shadow-md transition-shadow group"
          >
            <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
              {item.icon}
            </div>
            <div>
              <h3 className="font-semibold text-lg">{item.title}</h3>
              <p className="text-muted-foreground text-sm">{item.details}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default ContactInfo;
