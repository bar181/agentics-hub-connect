
import { Users, BookOpen, Lightbulb, Heart } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const Dashboard = () => {
  return (
    <section id="dashboard" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Welcome to <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">Agentics</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
            A non-profit organization dedicated to democratizing artificial intelligence education and innovation. 
            Founded by rUv, we exist to break down barriers to cutting-edge AI knowledge and resources, 
            empowering individuals, educators, startups, and social impact organizations.
          </p>
          <div className="text-lg text-orange-600 font-medium">
            agentics.org
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <Card className="text-center hover:shadow-lg transition-shadow border-orange-100">
            <CardHeader>
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-6 h-6 text-orange-600" />
              </div>
              <CardTitle className="text-xl text-gray-900">Making AI Education Accessible</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-gray-600">
                Providing high-quality training and open-source materials
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow border-red-100">
            <CardHeader>
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="w-6 h-6 text-red-600" />
              </div>
              <CardTitle className="text-xl text-gray-900">Fostering Innovation</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-gray-600">
                Supporting collaborative projects and research initiatives
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow border-yellow-100">
            <CardHeader>
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-yellow-600" />
              </div>
              <CardTitle className="text-xl text-gray-900">Building Community</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-gray-600">
                Creating platforms for knowledge sharing and creative exchange
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow border-green-100">
            <CardHeader>
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Heart className="w-6 h-6 text-green-600" />
              </div>
              <CardTitle className="text-xl text-gray-900">Driving Social Impact</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-gray-600">
                Leveraging AI to address real-world challenges
              </CardDescription>
            </CardContent>
          </Card>
        </div>

        <div className="text-center bg-gradient-to-r from-orange-50 to-red-50 rounded-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Join Us in Building the Future
          </h3>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Join us as we work together to unlock the full potential of AI education and build a better tomorrow.
          </p>
        </div>
      </div>
    </section>
  );
};
