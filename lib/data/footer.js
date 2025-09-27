import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export const quickLinks = [
  { name: "Home", href: "#home" },
  { name: "Courses", href: "#courses" },
  { name: "Features", href: "#features" },
  { name: "Pricing", href: "#pricing" },
  { name: "About Us", href: "#about" }
];

export const resources = [
  { name: "Practice Tests", href: "#tests" },
  { name: "Study Materials", href: "#materials" },
  { name: "Blog", href: "#blog" },
  { name: "Success Stories", href: "#testimonials" },
  { name: "Help Center", href: "#help" }
];

export const contact = [
  { icon: Mail, text: "support@ieltselite.com" },
  { icon: Phone, text: "+1 (555) 123-4567" },
  { icon: MapPin, text: "123 Education St, Learning City" }
];

export const socialLinks = [
  { icon: Facebook, href: "#", name: "Facebook" },
  { icon: Twitter, href: "#", name: "Twitter" },
  { icon: Instagram, href: "#", name: "Instagram" },
  { icon: Linkedin, href: "#", name: "LinkedIn" }
];

export const businessHours = {
  weekdays: "9:00 AM - 8:00 PM",
  weekends: "10:00 AM - 6:00 PM"
};

export const footerText = {
  description: "Empowering students worldwide with AI-powered IELTS preparation. Join thousands who achieved their dream band scores with us.",
  copyright: "© 2024 IELTS Elite. All rights reserved.",
  policies: [
    { name: "Privacy Policy", href: "#privacy" },
    { name: "Terms of Service", href: "#terms" },
    { name: "Cookie Policy", href: "#cookies" }
  ]
};
