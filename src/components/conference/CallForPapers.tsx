import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, FileText, Award, CheckCircle } from 'lucide-react';

export const CallForPapers = () => {
  const tracks = [
    "Technology Innovation for Social Impact",
    "Engineering Solutions for Sustainable Development",
    "Digital Marketing and E-commerce",
    "Entrepreneurship and Startup Ecosystems",
    "Talent Management in Digital Age",
    "AI and Machine Learning Applications",
    "Smart Cities and IoT Solutions",
    "Blockchain and Fintech Innovations"
  ];

  const timeline = [
    { date: "July 26, 2026", event: "Paper Submission Deadline", status: "upcoming" },
    { date: "August 16, 2026", event: "Notification of Acceptance", status: "upcoming" },
    { date: "September 20, 2026", event: "Camera-Ready Submission", status: "upcoming" },
    { date: "August 1, 2026", event: "Early Registration Deadline", status: "upcoming" }
  ];

  return (
    <section id="call-for-papers" className="py-20 bg-conference-light">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-conference-text mb-6">
            Call for Papers
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We invite researchers, practitioners, and academicians to submit original research papers 
            addressing innovative solutions for societal challenges through technology and management.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Research Tracks */}
          <Card className="border-0 shadow-card">
            <CardHeader className="pb-6">
              <CardTitle className="flex items-center gap-3 text-2xl text-conference-text">
                <FileText className="h-6 w-6 text-primary" />
                Research Tracks
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-3">
                {tracks.map((track, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 rounded-lg hover:bg-conference-light transition-colors">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-conference-text">{track}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Important Dates */}
          <Card className="border-0 shadow-card">
            <CardHeader className="pb-6">
              <CardTitle className="flex items-center gap-3 text-2xl text-conference-text">
                <Calendar className="h-6 w-6 text-primary" />
                Important Dates
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {timeline.map((item, index) => (
                  <div key={index} className="flex items-center gap-4 p-4 bg-white rounded-lg border-l-4 border-primary">
                    <div className="flex-shrink-0">
                      <div className="w-3 h-3 bg-primary rounded-full"></div>
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-conference-text">{item.event}</div>
                      <div className="text-sm text-muted-foreground">{item.date}</div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Submission Guidelines */}
        <Card className="border-0 shadow-card mb-12">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-2xl text-conference-text">
              <Award className="h-6 w-6 text-primary" />
              Submission Guidelines
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-conference-text mb-4">Paper Format</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• IEEE Conference format (6-8 pages)</li>
                  <li>• Original, unpublished research</li>
                  <li>• English language only</li>
                  <li>• Double-blind peer review process</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-conference-text mb-4">Publication</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• IEEE Xplore Digital Library</li>
                  <li>• Indexed in Scopus and Web of Science</li>
                  <li>• Best paper awards available</li>
                  <li>• Extended versions for special issues</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* CTA */}
        <div className="text-center">
          <Button size="lg" className="px-12 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
            Submit Your Paper
          </Button>
          <p className="mt-4 text-sm text-muted-foreground">
            Submission portal opens February 1, 2026
          </p>
        </div>
      </div>
    </section>
  );
};