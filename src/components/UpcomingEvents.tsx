import { Calendar, MapPin, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const UpcomingEvents = () => {
  const events = [
    {
      id: 1,
      title: "Toronto AI Meetup",
      date: "June 3, 2024 - 6:30 PM",
      location: "25 John Street, Toronto, ON",
      attendees: 45,
      description: "Join our Toronto chapter for an evening of AI discussions, networking, and insights from local experts.",
      image: "https://images.unsplash.com/photo-1517935706615-2717063c2225?w=400&h=250&fit=crop",
      featured: true
    },
    {
      id: 2,
      title: "Friday Live Coding",
      date: "Friday, 12:00 PM",
      location: "Online",
      attendees: 300,
      description: "This week Ruv will cover Roo code and advanced analytics, Brad will create the starting scaffolding with Lovable, Rob will host, and Nick will provide amazing member initiatives.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=250&fit=crop"
    },
    {
      id: 3,
      title: "AI for Climate Change",
      date: "May 8-9, 2024",
      location: "London, UK",
      attendees: 300,
      description: "Exploring how artificial intelligence can address climate challenges.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=250&fit=crop"
    }
  ];

  return (
    <section id="events" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Upcoming Events
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join our global community at conferences, workshops, and networking events 
            designed to advance AI knowledge and collaboration.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <Card key={event.id} className={`overflow-hidden hover:shadow-lg transition-shadow ${event.featured ? 'lg:col-span-2' : ''}`}>
              <div className="relative">
                <img 
                  src={event.image} 
                  alt={event.title}
                  className="w-full h-48 object-cover"
                />
                {event.featured && (
                  <div className="absolute top-4 left-4 bg-orange-600 text-white px-2 py-1 rounded text-sm font-medium">
                    Featured Event
                  </div>
                )}
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl">{event.title}</CardTitle>
                <CardDescription>{event.description}</CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-gray-600">
                    <Calendar size={16} className="mr-2" />
                    <span className="text-sm">{event.date}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <MapPin size={16} className="mr-2" />
                    <span className="text-sm">{event.location}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Users size={16} className="mr-2" />
                    <span className="text-sm">{event.attendees} expected attendees</span>
                  </div>
                </div>
                
                <Button className="w-full bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700">
                  Register Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            View All Events
          </Button>
        </div>
      </div>
    </section>
  );
};
