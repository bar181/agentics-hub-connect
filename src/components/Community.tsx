
import { Users, MessageSquare, Github, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const Community = () => {
  const stats = [
    { label: "Community Members", value: "10,000+", icon: Users },
    { label: "Active Discussions", value: "500+", icon: MessageSquare },
    { label: "Open Source Projects", value: "150+", icon: Github },
    { label: "Monthly Events", value: "25+", icon: Users }
  ];

  const testimonials = [
    {
      name: "Dr. Sarah Chen",
      role: "AI Researcher at Stanford",
      content: "The Agentics Foundation has been instrumental in connecting me with like-minded researchers and advancing my work in ethical AI."
    },
    {
      name: "Marcus Johnson",
      role: "ML Engineer at Google",
      content: "The learning resources and community support have been invaluable for my professional development in the AI space."
    },
    {
      name: "Prof. Elena Rodriguez",
      role: "Computer Science, MIT",
      content: "A fantastic platform for collaboration and knowledge sharing. The events are world-class and highly relevant."
    }
  ];

  return (
    <section id="community" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Join Our Community
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Connect with thousands of AI researchers, practitioners, and enthusiasts 
            from around the world. Share knowledge, collaborate, and grow together.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardHeader className="pb-2">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <stat.icon className="text-white" size={24} />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900">{stat.value}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            What Our Members Say
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <p className="text-gray-600 mb-4 italic">"{testimonial.content}"</p>
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        
        <div className="bg-white rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Get Started?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Join our vibrant community today and be part of shaping the future of artificial intelligence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
              <Users className="mr-2" size={20} />
              Join Community
            </Button>
            <Button variant="outline" size="lg">
              <MessageSquare className="mr-2" size={20} />
              Start Discussion
            </Button>
          </div>
          
          <div className="flex justify-center space-x-6 mt-8">
            <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors">
              <Twitter size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-900 transition-colors">
              <Github size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
