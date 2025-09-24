import React from 'react';
import { Separator } from '@/components/ui/separator';
import { Mail, Phone, MapPin, Calendar, ExternalLink } from 'lucide-react';
import ieeeImage from '@/assets/ieee-logo.png';

export const Footer = () => {
  const quickLinks = [
    { name: "Call for Papers", href: "#call-for-papers" },
    { name: "Registration", href: "#registration" },
    { name: "Speakers", href: "#speakers" },
    { name: "Program", href: "#program" },
    { name: "Venue", href: "#venue" },
    { name: "Contact", href: "#contact" }
  ];

  const importantDates = [
    { event: "Paper Submission", date: "March 15, 2026" },
    { event: "Notification", date: "May 30, 2026" },
    { event: "Camera Ready", date: "July 15, 2026" },
    { event: "Conference", date: "Oct 8-10, 2026" }
  ];

  const socialLinks = [
    { name: "IEEE Xplore", url: "#" },
    { name: "Conference Website", url: "#" },
    { name: "NIT Delhi", url: "#" },
    { name: "Contact Us", url: "#contact" }
  ];

  return (
    <footer className="bg-conference-text text-white">
      <div className="container mx-auto px-6 py-16">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Conference Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-4 mb-6">
              <img 
                src={ieeeImage} 
                alt="IEEE Logo"
                className="h-12 w-auto"
              />
              <div>
                <h3 className="text-xl font-bold">TEMSMET 2026</h3>
                <p className="text-blue-200 text-sm">IEEE Conference #65536</p>
              </div>
            </div>
            <p className="text-blue-100 mb-6 leading-relaxed">
              5th IEEE International Conference on Technology, Engineering, Management 
              for Societal Impact using Marketing, Entrepreneurship, and Talent
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Calendar className="h-5 w-5 text-blue-300" />
                <span className="text-blue-100">October 08–10, 2026</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-blue-300" />
                <span className="text-blue-100">National Institute of Technology Delhi</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-blue-300" />
                <a href="mailto:info@temsmet2026.org" className="text-blue-100 hover:text-white">
                  info@temsmet2026.org
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-blue-300" />
                <span className="text-blue-100">+91-11-3348-2000</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-blue-100 hover:text-white transition-colors duration-200 flex items-center gap-2"
                  >
                    <span>{link.name}</span>
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Important Dates */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Important Dates</h4>
            <ul className="space-y-3">
              {importantDates.map((item, index) => (
                <li key={index} className="border-l-2 border-blue-400 pl-4">
                  <div className="text-white font-medium text-sm">{item.event}</div>
                  <div className="text-blue-200 text-xs">{item.date}</div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="bg-blue-600 mb-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <p className="text-blue-100 text-sm mb-2">
              © 2026 TEMSMET - 5th IEEE International Conference. All rights reserved.
            </p>
            <p className="text-blue-200 text-xs">
              IEEE Conference #65536 | Organized by National Institute of Technology Delhi
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            {socialLinks.map((link, index) => (
              <a 
                key={index}
                href={link.url} 
                className="text-blue-100 hover:text-white text-sm transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>

        {/* IEEE Compliance */}
        <div className="mt-8 pt-6 border-t border-blue-600 text-center">
          <p className="text-blue-200 text-xs">
            This conference is technically co-sponsored by IEEE and follows IEEE publication standards. 
            All accepted papers will be submitted to IEEE Xplore Digital Library.
          </p>
        </div>
      </div>
    </footer>
  );
};