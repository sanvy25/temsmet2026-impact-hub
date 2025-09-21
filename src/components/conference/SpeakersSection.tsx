import React from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Award } from 'lucide-react';

export const SpeakersSection = () => {
  const speakers = [
    {
      name: "Dr. Sarah Chen",
      title: "Chief Technology Officer",
      organization: "Tech for Good Foundation",
      location: "Stanford, USA",
      expertise: "AI for Social Impact",
      topic: "Leveraging AI to Address Global Challenges",
      image: "https://images.unsplash.com/photo-1494790108755-2616b332e234?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Prof. Rajesh Kumar",
      title: "Director of Innovation",
      organization: "Indian Institute of Technology",
      location: "Delhi, India",
      expertise: "Sustainable Technology",
      topic: "Engineering Solutions for Climate Change",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Dr. Maria Rodriguez",
      title: "Entrepreneurship Professor",
      organization: "ESADE Business School",
      location: "Barcelona, Spain",
      expertise: "Digital Entrepreneurship",
      topic: "Building Scalable Social Enterprises",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    }
  ];

  return (
    <section id="speakers" className="py-20 bg-gradient-to-b from-conference-light to-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-conference-text mb-6">
            Keynote Speakers
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Learn from world-renowned experts who are driving innovation at the intersection 
            of technology, management, and social impact.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {speakers.map((speaker, index) => (
            <Card key={index} className="border-0 shadow-card hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
              <div className="relative">
                <img 
                  src={speaker.image} 
                  alt={`Portrait of ${speaker.name}, keynote speaker at TEMSMET 2026`}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-4 right-4">
                  <Badge className="bg-primary text-white">Keynote</Badge>
                </div>
              </div>
              <CardHeader className="pb-4">
                <h3 className="text-xl font-bold text-conference-text">{speaker.name}</h3>
                <p className="text-primary font-semibold">{speaker.title}</p>
                <p className="text-muted-foreground">{speaker.organization}</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    <span>{speaker.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Award className="h-4 w-4 text-primary" />
                    <span className="text-conference-text font-medium">{speaker.expertise}</span>
                  </div>
                  <div className="pt-2">
                    <h4 className="font-semibold text-conference-text mb-2">Talk Topic:</h4>
                    <p className="text-sm text-muted-foreground italic">"{speaker.topic}"</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call for Speakers */}
        <Card className="border-0 shadow-card bg-gradient-to-r from-primary to-primary-light text-white">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Call for Additional Speakers</h3>
            <p className="text-lg mb-6 text-blue-100">
              We're still accepting proposals for invited talks and panel discussions. 
              Share your expertise with the global TEMSMET community.
            </p>
            <Badge variant="secondary" className="bg-white text-primary font-semibold px-6 py-2">
              Speaker Applications Open
            </Badge>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};