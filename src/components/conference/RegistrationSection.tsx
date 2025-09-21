import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Users, GraduationCap, Building, Globe, Check } from 'lucide-react';

export const RegistrationSection = () => {
  const registrationTiers = [
    {
      title: "IEEE Member",
      icon: Users,
      earlyBird: "$450",
      regular: "$550",
      features: [
        "All technical sessions",
        "Welcome reception",
        "Conference proceedings",
        "Certificate of participation",
        "Networking breaks"
      ]
    },
    {
      title: "Non-IEEE Member",
      icon: Globe,
      earlyBird: "$650",
      regular: "$750",
      features: [
        "All technical sessions",
        "Welcome reception",
        "Conference proceedings",
        "Certificate of participation",
        "Networking breaks"
      ]
    },
    {
      title: "Student",
      icon: GraduationCap,
      earlyBird: "$250",
      regular: "$350",
      popular: true,
      features: [
        "All technical sessions",
        "Welcome reception",
        "Conference proceedings",
        "Certificate of participation",
        "Student networking event"
      ]
    },
    {
      title: "Industry",
      icon: Building,
      earlyBird: "$850",
      regular: "$950",
      features: [
        "All technical sessions",
        "Welcome reception",
        "Conference proceedings",
        "Industry networking dinner",
        "Exhibition access"
      ]
    }
  ];

  return (
    <section id="registration" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-conference-text mb-6">
            Registration
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Join us for three days of cutting-edge research presentations, networking opportunities, 
            and professional development in technology and management.
          </p>
        </div>

        {/* Early Bird Notice */}
        <div className="bg-gradient-to-r from-primary to-primary-light text-white rounded-2xl p-8 mb-12 text-center">
          <h3 className="text-2xl font-bold mb-4">Early Bird Registration</h3>
          <p className="text-lg mb-4">Save up to $100 by registering before August 1, 2026</p>
          <Badge variant="secondary" className="bg-white text-primary font-semibold px-4 py-2">
            Limited Time Offer
          </Badge>
        </div>

        {/* Registration Tiers */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {registrationTiers.map((tier, index) => (
            <Card 
              key={index} 
              className={`border-0 shadow-card hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 relative ${
                tier.popular ? 'ring-2 ring-primary' : ''
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-primary text-white px-4 py-1">Most Popular</Badge>
                </div>
              )}
              <CardHeader className="text-center pb-6">
                <div className="mb-4 flex justify-center">
                  <div className="p-4 bg-conference-light rounded-full">
                    <tier.icon className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <CardTitle className="text-xl text-conference-text">{tier.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="mb-6">
                  <div className="text-3xl font-bold text-primary mb-2">{tier.earlyBird}</div>
                  <div className="text-sm text-muted-foreground">Early Bird</div>
                  <div className="text-lg text-conference-text mt-2">{tier.regular}</div>
                  <div className="text-sm text-muted-foreground">Regular</div>
                </div>
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2 text-sm">
                      <Check className="h-4 w-4 text-primary flex-shrink-0" />
                      <span className="text-conference-text">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Registration Information */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="border-0 shadow-card">
            <CardHeader>
              <CardTitle className="text-xl text-conference-text">What's Included</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-primary" />
                  <span>Access to all keynote sessions</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-primary" />
                  <span>Technical paper presentations</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-primary" />
                  <span>Workshop and tutorial sessions</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-primary" />
                  <span>Conference proceedings (digital)</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-primary" />
                  <span>Welcome reception and networking</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-primary" />
                  <span>Coffee breaks and refreshments</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-card">
            <CardHeader>
              <CardTitle className="text-xl text-conference-text">Registration Info</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-conference-text mb-2">Payment Methods</h4>
                  <p className="text-muted-foreground text-sm">Credit card, bank transfer, or IEEE voucher</p>
                </div>
                <div>
                  <h4 className="font-semibold text-conference-text mb-2">Cancellation Policy</h4>
                  <p className="text-muted-foreground text-sm">Full refund until September 1, 2026</p>
                </div>
                <div>
                  <h4 className="font-semibold text-conference-text mb-2">Group Discounts</h4>
                  <p className="text-muted-foreground text-sm">10% off for groups of 5+ from same institution</p>
                </div>
                <div>
                  <h4 className="font-semibold text-conference-text mb-2">Visa Support</h4>
                  <p className="text-muted-foreground text-sm">Invitation letters available upon registration</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button size="lg" className="px-12 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
            Register Now
          </Button>
          <p className="mt-4 text-sm text-muted-foreground">
            Registration opens March 1, 2026
          </p>
        </div>
      </div>
    </section>
  );
};