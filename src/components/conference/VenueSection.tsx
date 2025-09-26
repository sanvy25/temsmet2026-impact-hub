import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Plane, Train, Car, Hotel, Utensils } from 'lucide-react';
import nitDelhi from '@/assets/nit-delhi.jpg';

export const VenueSection = () => {
  const travelOptions = [
    {
      icon: Plane,
      title: "By Air",
      description: "Rajiv Gandhi International Airport (HYD) - 30 minutes to SIT Hyderabad",
      details: "Direct flights from major cities worldwide. Airport shuttle services available."
    },
    {
      icon: Train,
      title: "By Train",
      description: "Hyderabad Deccan Railway Station - 25 minutes to campus",
      details: "Well connected to all major Indian cities. Metro and cab services available."
    },
    {
      icon: Car,
      title: "By Road",
      description: "National Highway connectivity from all major cities",
      details: "Taxi services and rental cars available. Parking available on campus."
    }
  ];

  const accommodations = [
    {
      name: "ITC Kohenur Hyderabad",
      distance: "3.5 km from venue",
      price: "₹12,000/night",
      rating: "5★"
    },
    {
      name: "Radisson Blu Plaza Hyderabad",
      distance: "8 km from venue",
      price: "₹8,000/night",
      rating: "4.5★"
    },
    {
      name: "Hotel Sitara Grand",
      distance: "2.2 km from venue",
      price: "₹4,500/night",
      rating: "3.5★"
    }
  ];

  return (
    <section id="venue" className="py-20 bg-conference-light">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-conference-text mb-6">
            Venue & Travel
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Join us at the prestigious Symbiosis Institute of Technology Hyderabad, 
            a premier technical institution known for its world-class facilities and research excellence.
          </p>
        </div>

        {/* Venue Information */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <Card className="border-0 shadow-card overflow-hidden h-full">
              <img 
                src={nitDelhi} 
                alt="Symbiosis Institute of Technology Hyderabad campus building exterior"
                className="w-full h-64 object-cover"
              />
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl text-conference-text">
                  <MapPin className="h-6 w-6 text-primary" />
                  Conference Venue
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-conference-text mb-2">Symbiosis Institute of Technology Hyderabad</h4>
                    <p className="text-muted-foreground">
                      Rangareddy District<br/>
                      Hyderabad, Telangana - 501510, India
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-conference-text mb-2">Conference Hall</h4>
                    <p className="text-muted-foreground">
                      Symbiosis International University-Hyderabad Auditorium <br/>
                      Capacity: 1100 participants<br/>
                      Fully air-conditioned with modern AV facilities
                    </p>
                  </div>
                  <Button variant="outline" className="w-full mt-4" onClick={() => window.open("https://maps.app.goo.gl/8V8mweDvPiqphmoG8", "_blank")}>
                    View on Google Maps
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-8">
            {/* Travel Options */}
            <Card className="border-0 shadow-card">
              <CardHeader>
                <CardTitle className="text-xl text-conference-text">How to Reach</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {travelOptions.map((option, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="p-3 bg-conference-light rounded-full">
                          <option.icon className="h-6 w-6 text-primary" />
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-conference-text mb-1">{option.title}</h4>
                        <p className="text-sm text-muted-foreground mb-2">{option.description}</p>
                        <p className="text-xs text-muted-foreground">{option.details}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Local Information */}
            <Card className="border-0 shadow-card">
              <CardHeader>
                <CardTitle className="text-xl text-conference-text">Local Information</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <h4 className="font-semibold text-conference-text mb-2">Weather (October)</h4>
                    <p className="text-muted-foreground">Pleasant, 20-30°C<br/>Light cotton clothing recommended</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-conference-text mb-2">Currency</h4>
                    <p className="text-muted-foreground">Indian Rupee (INR)<br/>USD 1 ≈ ₹83</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-conference-text mb-2">Time Zone</h4>
                    <p className="text-muted-foreground">IST (UTC+5:30)<br/>No daylight saving</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-conference-text mb-2">Language</h4>
                    <p className="text-muted-foreground">English, Hindi<br/>English widely spoken</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Accommodation */}
        <Card className="border-0 shadow-card mb-12">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-2xl text-conference-text">
              <Hotel className="h-6 w-6 text-primary" />
              Recommended Hotels
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              {accommodations.map((hotel, index) => (
                <div key={index} className="p-6 bg-conference-light rounded-lg">
                  <h4 className="font-semibold text-conference-text mb-2">{hotel.name}</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-primary" />
                      <span className="text-muted-foreground">{hotel.distance}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-conference-text">{hotel.price}</span>
                      <span className="text-primary font-medium">{hotel.rating}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 text-center">
              <p className="text-sm text-muted-foreground mb-4">
                Special conference rates available. Book early for best prices.
              </p>
              <Button variant="outline">
                View All Hotel Options
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Visa Information */}
        <Card className="border-0 shadow-card bg-gradient-to-r from-primary to-primary-light text-white">
          <CardContent className="p-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">Visa Information</h3>
                <p className="text-blue-100 mb-4">
                  International participants may require a visa to enter India. 
                  We recommend applying for an e-Tourist visa or Conference visa.
                </p>
                <ul className="space-y-2 text-blue-100 text-sm">
                  <li>• e-Tourist visa: Valid for 30 days</li>
                  <li>• Conference visa: Valid for duration of conference</li>
                  <li>• Apply at least 4 weeks before travel</li>
                  <li>• Invitation letters provided upon registration</li>
                </ul>
              </div>
              <div className="text-center">
                <Button variant="secondary" className="bg-white text-primary hover:bg-blue-50">
                  Visa Support Request
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
