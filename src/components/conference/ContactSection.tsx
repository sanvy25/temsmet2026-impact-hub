import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Mail, Phone, MapPin, User, Users, FileText, Calendar } from 'lucide-react';

export const ContactSection = () => {
  const organizers = [
    {
      role: "General Chair",
      name: "Prof. Dr. Anil Kumar Sharma",
      title: "Director",
      organization: "National Institute of Technology Delhi",
      email: "director@nitdelhi.ac.in",
      phone: "+91-11-3348-2000"
    },
    {
      role: "Program Chair",
      name: "Prof. Dr. Sunita Garhwal",
      title: "Professor, Computer Science",
      organization: "NIT Delhi",
      email: "sunita@nitdelhi.ac.in",
      phone: "+91-11-3348-2150"
    },
    {
      role: "Technical Chair",
      name: "Dr. Rajesh Verma",
      title: "Associate Professor",
      organization: "Department of Management Studies",
      email: "rajesh.verma@nitdelhi.ac.in",
      phone: "+91-11-3348-2180"
    }
  ];

  const committees = [
    {
      title: "Organizing Committee",
      icon: Users,
      members: [
        "Prof. Dr. Meena Sharma - Finance Chair",
        "Dr. Amit Gupta - Publicity Chair", 
        "Dr. Priya Singh - Local Arrangements",
        "Dr. Vikash Kumar - Registration Chair"
      ]
    },
    {
      title: "Technical Program Committee",
      icon: FileText,
      members: [
        "Prof. John Smith - IEEE Senior Member",
        "Dr. Lisa Wang - Stanford University",
        "Prof. Ahmed Hassan - Cairo University",
        "Dr. Maria Santos - University of São Paulo"
      ]
    }
  ];

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      primary: "info@temsmet2026.org",
      secondary: "submissions@temsmet2026.org"
    },
    {
      icon: Phone,
      title: "Phone",
      primary: "+91-11-3348-2000",
      secondary: "+91-11-3348-2150"
    },
    {
      icon: MapPin,
      title: "Address",
      primary: "NIT Delhi, Plot No. FA7, Zone P1",
      secondary: "GT Karnal Road, New Delhi - 110036"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-conference-text mb-6">
            Contact & Organizers
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Get in touch with our organizing team for any questions about submissions, 
            registration, or conference logistics.
          </p>
        </div>

        {/* Contact Information */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {contactInfo.map((info, index) => (
            <Card key={index} className="border-0 shadow-card text-center">
              <CardContent className="p-8">
                <div className="mb-6 flex justify-center">
                  <div className="p-4 bg-conference-light rounded-full">
                    <info.icon className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-conference-text mb-4">{info.title}</h3>
                <div className="space-y-2">
                  <p className="font-medium text-conference-text">{info.primary}</p>
                  <p className="text-muted-foreground text-sm">{info.secondary}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Key Organizers */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-conference-text text-center mb-12">
            Key Organizers
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {organizers.map((organizer, index) => (
              <Card key={index} className="border-0 shadow-card">
                <CardHeader className="text-center pb-4">
                  <div className="mb-4 flex justify-center">
                    <div className="p-4 bg-conference-light rounded-full">
                      <User className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  <div className="mb-2">
                    <Badge className="bg-primary text-white px-3 py-1">{organizer.role}</Badge>
                  </div>
                  <CardTitle className="text-xl text-conference-text">{organizer.name}</CardTitle>
                  <p className="text-primary font-semibold">{organizer.title}</p>
                  <p className="text-muted-foreground text-sm">{organizer.organization}</p>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="space-y-2">
                    <div className="flex items-center justify-center gap-2 text-sm">
                      <Mail className="h-4 w-4 text-primary" />
                      <a href={`mailto:${organizer.email}`} className="text-conference-text hover:text-primary">
                        {organizer.email}
                      </a>
                    </div>
                    <div className="flex items-center justify-center gap-2 text-sm">
                      <Phone className="h-4 w-4 text-primary" />
                      <span className="text-muted-foreground">{organizer.phone}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Committees */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {committees.map((committee, index) => (
            <Card key={index} className="border-0 shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl text-conference-text">
                  <committee.icon className="h-6 w-6 text-primary" />
                  {committee.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {committee.members.map((member, memberIndex) => (
                    <li key={memberIndex} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                      <span className="text-conference-text">{member}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Contact Form CTA */}
        <Card className="border-0 shadow-card bg-gradient-to-r from-primary to-primary-light text-white">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Have Questions?</h3>
            <p className="text-lg mb-6 text-blue-100">
              Our organizing committee is here to help with any inquiries about 
              the conference, submissions, or local arrangements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" className="bg-white text-primary hover:bg-blue-50">
                <Mail className="h-4 w-4 mr-2" />
                Send Email
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                <Calendar className="h-4 w-4 mr-2" />
                Schedule Meeting
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};