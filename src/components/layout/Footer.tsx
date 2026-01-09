import { useState } from "react";
import { Linkedin, Instagram, Youtube, Twitter, MapPin, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import braintoLogo from "@/assets/brainito-logo.png";

const Footer = () => {
  const [email, setEmail] = useState("");

  const footerLinks = {
    product: [
      { name: "DIY Marketing Plan", href: "/diy-marketing-plan" },
      { name: "Hire Marketer", href: "/hire-marketer" },
      { name: "Pricing", href: "/pricing" },
    ],
    company: [
      { name: "About", href: "/about" },
      { name: "Careers", href: "https://career.brainito.com/", external: true },
      { name: "Contact", href: "/contact" },
    ],
    resources: [
      { name: "Blog", href: "/blog" },
      { name: "Case Studies", href: "/case-studies" },
      { name: "Help", href: "/help" },
    ],
    legal: [
      { name: "Privacy Policy", href: "/privacy-policy" },
      { name: "Terms of Service", href: "/terms" },
      { name: "Refund Policy", href: "/refund-policy" },
      { name: "Data & Cookie Policy", href: "/cookie-policy" },
    ],
  };

  const socialLinks = [
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Youtube, href: "#", label: "YouTube" },
    { icon: Twitter, href: "#", label: "Twitter" },
  ];

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Subscribing:", email);
    setEmail("");
  };

  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-12">
          {/* Logo, Tagline and Subscribe - Takes 4 columns */}
          <div className="lg:col-span-4">
            <img 
              src={braintoLogo} 
              alt="Brainito" 
              className="h-10 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-background/70 text-sm max-w-xs mb-6">
              Turn your website into a growth engine with AI-powered marketing strategies.
            </p>
            
            {/* Subscribe Form */}
            <div className="mb-6">
              <p className="text-sm font-medium text-background mb-3">Subscribe to our newsletter</p>
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-background/10 border-background/20 text-background placeholder:text-background/50 h-10 flex-1"
                  required
                />
                <Button type="submit" variant="gradient" size="sm" className="h-10 px-4">
                  Subscribe
                </Button>
              </form>
            </div>

            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="p-2 rounded-lg bg-background/10 hover:bg-accent hover:text-foreground transition-colors duration-300"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Links - Takes 4 columns */}
          <div className="lg:col-span-4 grid grid-cols-2 gap-8">
            {/* Product */}
            <div>
              <h4 className="font-semibold text-background mb-4 text-sm uppercase tracking-wider">Product</h4>
              <ul className="space-y-3">
                {footerLinks.product.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-background/70 hover:text-accent transition-colors duration-300 text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="font-semibold text-background mb-4 text-sm uppercase tracking-wider">Company</h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      target={link.external ? "_blank" : undefined}
                      rel={link.external ? "noopener noreferrer" : undefined}
                      className="text-background/70 hover:text-accent transition-colors duration-300 text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="font-semibold text-background mb-4 text-sm uppercase tracking-wider">Resources</h4>
              <ul className="space-y-3">
                {footerLinks.resources.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-background/70 hover:text-accent transition-colors duration-300 text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="font-semibold text-background mb-4 text-sm uppercase tracking-wider">Legal</h4>
              <ul className="space-y-3">
                {footerLinks.legal.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-background/70 hover:text-accent transition-colors duration-300 text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Office Locations - Takes 4 columns */}
          <div className="lg:col-span-4">
            <h4 className="font-semibold text-background mb-4 text-sm uppercase tracking-wider">Our Offices</h4>
            
            <div className="space-y-6">
              {/* India Office */}
              <div className="flex gap-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-background/10 flex items-center justify-center">
                  <span className="text-xs font-bold">🇮🇳</span>
                </div>
                <div className="text-sm">
                  <p className="font-medium text-background mb-1">India (Headquarters)</p>
                  <p className="text-background/70 leading-relaxed">
                    Wockito Innovative Solutions PVT LTD<br />
                    1101, 11th Floor, Satyamev Elite<br />
                    Ambli-Bopal, Vakil Saheb Bridge, T Junction<br />
                    Ahmedabad, Gujarat 380058
                  </p>
                  <div className="flex items-center gap-2 mt-2 text-background/70">
                    <Phone className="w-3 h-3 text-accent" />
                    <a href="tel:+917383691101" className="hover:text-accent transition-colors">
                      +91 7383691101
                    </a>
                  </div>
                </div>
              </div>

              {/* USA Office */}
              <div className="flex gap-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-background/10 flex items-center justify-center">
                  <span className="text-xs font-bold">🇺🇸</span>
                </div>
                <div className="text-sm">
                  <p className="font-medium text-background mb-1">United States</p>
                  <p className="text-background/70 leading-relaxed">
                    2055 Limestone Rd STE 200-C<br />
                    Wilmington, DE, New Castle<br />
                    US, 19808
                  </p>
                  <div className="flex items-center gap-2 mt-2 text-background/70">
                    <Phone className="w-3 h-3 text-accent" />
                    <a href="tel:+17383691101" className="hover:text-accent transition-colors">
                      +1 738 369 1101
                    </a>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center gap-3 pt-2">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-background/10 flex items-center justify-center">
                  <Mail className="w-4 h-4 text-accent" />
                </div>
                <a href="mailto:support@brainito.com" className="text-sm text-background/70 hover:text-accent transition-colors">
                  support@brainito.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-background/10 text-center">
          <p className="text-background/50 text-sm">
            © {new Date().getFullYear()} Brainito Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
