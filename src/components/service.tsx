import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Pill, Stethoscope, Clock, Shield, Users } from "lucide-react";
import pharmacyImage from "@/assets/pharmacy-finder.jpg";
import doctorImage from "@/assets/doctor-consultation.jpg";
import medicineImage from "@/assets/medicine-search.jpg";

const Services = () => {
  const services = [
    {
      icon: MapPin,
      title: "Find Nearest Pharmacy",
      description: "Locate pharmacies near you with real-time availability and directions.",
      image: pharmacyImage,
      features: ["GPS location", "Real-time updates", "Contact information", "Operating hours"]
    },
    {
      icon: Pill,
      title: "Medicine Availability",
      description: "Check medicine stock across multiple pharmacies and compare prices.",
      image: medicineImage,
      features: ["Stock checker", "Price comparison", "Generic alternatives", "Prescription upload"]
    },
    {
      icon: Stethoscope,
      title: "Doctor Consultation",
      description: "Book appointments with qualified doctors and specialists.",
      image: doctorImage,
      features: ["Online booking", "Video consultation", "Specialist referrals", "Medical records"]
    }
  ];

  const features = [
    {
      icon: Clock,
      title: "24/7 Service",
      description: "Round-the-clock access to healthcare services"
    },
    {
      icon: Shield,
      title: "Secure & Private",
      description: "Your health data is protected with enterprise-grade security"
    },
    {
      icon: Users,
      title: "Verified Network",
      description: "All pharmacies and doctors are verified and licensed"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">
            Complete Healthcare Solutions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need for your healthcare journey, from finding medicines to consulting doctors,
            all in one seamless platform.
          </p>
        </div>

        {/* Main Services */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-border">
              <div className="relative overflow-hidden rounded-t-lg">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </div>
                <CardDescription className="text-base">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Features */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center space-y-4">
              <div className="mx-auto w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                <feature.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;