import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, Pill, Stethoscope } from "lucide-react";
import heroImage from "@/assets/healthcare-hero.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-gradient-to-br from-background via-accent to-medical-light">
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8 lg:pr-8">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
                Your Health,{" "}
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Our Priority
                </span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                Find the nearest pharmacies, check medicine availability, and connect with
                qualified doctors - all in one comprehensive healthcare platform.
              </p>
            </div>

            {/* Quick Action Cards */}
            <div className="grid sm:grid-cols-3 gap-4">
              <div className="bg-card border border-border rounded-lg p-4 hover:shadow-md transition-all duration-300 cursor-pointer">
                <MapPin className="h-8 w-8 text-primary mb-2" />
                <h3 className="font-semibold text-sm">Find Pharmacy</h3>
              </div>
              <div className="bg-card border border-border rounded-lg p-4 hover:shadow-md transition-all duration-300 cursor-pointer">
                <Pill className="h-8 w-8 text-secondary mb-2" />
                <h3 className="font-semibold text-sm">Check Medicines</h3>
              </div>
              <div className="bg-card border border-border rounded-lg p-4 hover:shadow-md transition-all duration-300 cursor-pointer">
                <Stethoscope className="h-8 w-8 text-medical-trust mb-2" />
                <h3 className="font-semibold text-sm">Book Doctor</h3>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="text-lg px-8 py-6">
                Get Started Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                Learn More
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center space-x-8 pt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Partner Pharmacies</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-secondary">1000+</div>
                <div className="text-sm text-muted-foreground">Qualified Doctors</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-medical-trust">24/7</div>
                <div className="text-sm text-muted-foreground">Support Available</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative lg:ml-8">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={heroImage}
                alt="Healthcare professionals in modern medical facility"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>

            {/* Floating Cards */}
            <div className="absolute -top-6 -left-6 bg-card border border-border rounded-lg p-4 shadow-lg">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-secondary rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">Available 24/7</span>
              </div>
            </div>

            <div className="absolute -bottom-6 -right-6 bg-card border border-border rounded-lg p-4 shadow-lg">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">Verified Professionals</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;