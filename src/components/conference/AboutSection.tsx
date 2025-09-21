import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Target, Users, Lightbulb, Globe } from 'lucide-react';

export const AboutSection = () => {
  const highlights = [
    {
      icon: Target,
      title: "Societal Impact",
      description: "Explore how technology drives positive change in communities worldwide"
    },
    {
      icon: Users,
      title: "Interdisciplinary",
      description: "Bringing together experts from technology, management, and entrepreneurship"
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Cutting-edge research and practical solutions for tomorrow's challenges"
    },
    {
      icon: Globe,
      title: "Global Network",
      description: "Connect with researchers and professionals from around the world"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-background to-conference-light">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-conference-text mb-6">
            About TEMSMET 2026
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            The 4th IEEE International Conference on Technology, Engineering, Management for Societal Impact 
            using Marketing, Entrepreneurship, and Talent brings together leading researchers, industry experts, 
            and academic professionals to explore innovative solutions for global challenges.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {highlights.map((item, index) => (
            <Card key={index} className="border-0 shadow-card hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <CardContent className="p-8 text-center">
                <div className="mb-6 flex justify-center">
                  <div className="p-4 bg-conference-light rounded-full">
                    <item.icon className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-conference-text mb-4">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-card">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-conference-text mb-6">
                Conference Scope
              </h3>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  TEMSMET 2026 focuses on the intersection of technology, engineering, and management 
                  to create meaningful societal impact through innovative approaches in marketing, 
                  entrepreneurship, and talent development.
                </p>
                <p>
                  Join us for three days of inspiring keynotes, technical sessions, interactive 
                  workshops, and networking opportunities that will shape the future of technology 
                  for social good.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-6 bg-conference-light rounded-2xl">
                <div className="text-3xl font-bold text-primary mb-2">150+</div>
                <div className="text-sm text-conference-text">Expected Papers</div>
              </div>
              <div className="text-center p-6 bg-conference-light rounded-2xl">
                <div className="text-3xl font-bold text-primary mb-2">500+</div>
                <div className="text-sm text-conference-text">Participants</div>
              </div>
              <div className="text-center p-6 bg-conference-light rounded-2xl">
                <div className="text-3xl font-bold text-primary mb-2">25+</div>
                <div className="text-sm text-conference-text">Countries</div>
              </div>
              <div className="text-center p-6 bg-conference-light rounded-2xl">
                <div className="text-3xl font-bold text-primary mb-2">3</div>
                <div className="text-sm text-conference-text">Days</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};