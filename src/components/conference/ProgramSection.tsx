import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Clock, Calendar, MapPin, Users } from 'lucide-react';

export const ProgramSection = () => {
  const programDays = [
    {
      date: "October 8, 2026",
      day: "Day 1",
      theme: "Technology Innovation",
      sessions: [
        { time: "9:00 AM", title: "Registration & Welcome Coffee", type: "general" },
        { time: "10:00 AM", title: "Opening Ceremony", type: "plenary" },
        { time: "10:45 AM", title: "Keynote: AI for Social Impact", speaker: "Dr. Sarah Chen", type: "keynote" },
        { time: "12:00 PM", title: "Technical Session 1: Smart Cities", type: "technical" },
        { time: "1:00 PM", title: "Networking Lunch", type: "break" },
        { time: "2:30 PM", title: "Panel: Future of Technology", type: "panel" },
        { time: "4:00 PM", title: "Poster Session & Coffee Break", type: "poster" },
        { time: "6:00 PM", title: "Welcome Reception", type: "social" }
      ]
    },
    {
      date: "October 9, 2026",
      day: "Day 2",
      theme: "Engineering & Management",
      sessions: [
        { time: "9:00 AM", title: "Coffee & Networking", type: "general" },
        { time: "9:30 AM", title: "Keynote: Sustainable Engineering", speaker: "Prof. Rajesh Kumar", type: "keynote" },
        { time: "10:45 AM", title: "Technical Session 2: Green Technology", type: "technical" },
        { time: "12:00 PM", title: "Workshop: Innovation Management", type: "workshop" },
        { time: "1:00 PM", title: "Lunch Break", type: "break" },
        { time: "2:30 PM", title: "Technical Session 3: IoT Solutions", type: "technical" },
        { time: "4:00 PM", title: "Industry Showcase", type: "exhibition" },
        { time: "7:00 PM", title: "Conference Banquet", type: "social" }
      ]
    },
    {
      date: "October 10, 2026",
      day: "Day 3",
      theme: "Entrepreneurship & Talent",
      sessions: [
        { time: "9:00 AM", title: "Morning Coffee", type: "general" },
        { time: "9:30 AM", title: "Keynote: Digital Entrepreneurship", speaker: "Dr. Maria Rodriguez", type: "keynote" },
        { time: "10:45 AM", title: "Startup Pitch Competition", type: "competition" },
        { time: "12:00 PM", title: "Technical Session 4: Talent Management", type: "technical" },
        { time: "1:00 PM", title: "Farewell Lunch", type: "break" },
        { time: "2:30 PM", title: "Best Paper Awards", type: "awards" },
        { time: "3:30 PM", title: "Closing Ceremony", type: "plenary" }
      ]
    }
  ];

  const getSessionIcon = (type: string) => {
    switch (type) {
      case 'keynote': return '🎤';
      case 'technical': return '📊';
      case 'workshop': return '🛠️';
      case 'panel': return '💬';
      case 'poster': return '📋';
      case 'social': return '🍽️';
      case 'competition': return '🏆';
      case 'awards': return '🥇';
      case 'plenary': return '🎯';
      default: return '☕';
    }
  };

  const getSessionColor = (type: string) => {
    switch (type) {
      case 'keynote': return 'bg-primary text-white';
      case 'technical': return 'bg-conference-accent text-white';
      case 'workshop': return 'bg-green-500 text-white';
      case 'panel': return 'bg-purple-500 text-white';
      case 'social': return 'bg-orange-500 text-white';
      case 'competition': return 'bg-red-500 text-white';
      case 'awards': return 'bg-yellow-600 text-white';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <section id="program" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-conference-text mb-6">
            Conference Program
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Three days of inspiring presentations, interactive workshops, and networking opportunities 
            designed to advance the frontiers of technology for societal impact.
          </p>
        </div>

        {/* Program Overview */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {programDays.map((day, index) => (
            <Card key={index} className="border-0 shadow-card">
              <CardHeader className="text-center pb-4">
                <div className="mb-2">
                  <Badge className={`${index === 1 ? 'bg-primary' : 'bg-conference-accent'} text-white px-4 py-2`}>
                    {day.day}
                  </Badge>
                </div>
                <CardTitle className="text-xl text-conference-text">{day.theme}</CardTitle>
                <div className="flex items-center justify-center gap-2 text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span className="text-sm">{day.date}</span>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {day.sessions.map((session, sessionIndex) => (
                    <div key={sessionIndex} className="flex items-start gap-3 p-3 rounded-lg hover:bg-conference-light transition-colors">
                      <div className="flex items-center gap-2 min-w-0 flex-1">
                        <div className="text-lg">{getSessionIcon(session.type)}</div>
                        <div className="min-w-0 flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <Clock className="h-3 w-3 text-muted-foreground flex-shrink-0" />
                            <span className="text-xs text-muted-foreground">{session.time}</span>
                          </div>
                          <div className="font-medium text-conference-text text-sm leading-tight">
                            {session.title}
                          </div>
                          {session.speaker && (
                            <div className="text-xs text-primary mt-1">{session.speaker}</div>
                          )}
                        </div>
                      </div>
                      <Badge className={`${getSessionColor(session.type)} text-xs px-2 py-1 flex-shrink-0`}>
                        {session.type}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Program Highlights */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card className="border-0 shadow-card text-center p-6">
            <div className="text-3xl mb-3">🎤</div>
            <h3 className="font-semibold text-conference-text mb-2">3 Keynotes</h3>
            <p className="text-sm text-muted-foreground">World-class speakers</p>
          </Card>
          <Card className="border-0 shadow-card text-center p-6">
            <div className="text-3xl mb-3">📊</div>
            <h3 className="font-semibold text-conference-text mb-2">12 Sessions</h3>
            <p className="text-sm text-muted-foreground">Technical presentations</p>
          </Card>
          <Card className="border-0 shadow-card text-center p-6">
            <div className="text-3xl mb-3">🛠️</div>
            <h3 className="font-semibold text-conference-text mb-2">6 Workshops</h3>
            <p className="text-sm text-muted-foreground">Hands-on learning</p>
          </Card>
          <Card className="border-0 shadow-card text-center p-6">
            <div className="text-3xl mb-3">🏆</div>
            <h3 className="font-semibold text-conference-text mb-2">Awards</h3>
            <p className="text-sm text-muted-foreground">Best papers & pitches</p>
          </Card>
        </div>

        {/* Download Program */}
        <div className="text-center bg-conference-light rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-conference-text mb-4">
            Detailed Program Guide
          </h3>
          <p className="text-muted-foreground mb-6">
            Download the complete program with abstracts, speaker bios, and venue maps.
          </p>
          <Badge className="bg-primary text-white px-6 py-2 cursor-pointer hover:bg-primary-dark transition-colors">
            Program Available Soon
          </Badge>
        </div>
      </div>
    </section>
  );
};