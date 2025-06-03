
import { BookOpen, Video, Download, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const LearningHub = () => {
  const courses = [
    {
      id: 1,
      title: "Introduction to AI Ethics",
      description: "Learn the fundamental principles of ethical AI development and deployment.",
      duration: "4 weeks",
      level: "Beginner",
      rating: 4.8,
      students: 1200,
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=250&fit=crop",
      type: "Course"
    },
    {
      id: 2,
      title: "Advanced Machine Learning",
      description: "Deep dive into advanced ML algorithms and their real-world applications.",
      duration: "8 weeks",
      level: "Advanced",
      rating: 4.9,
      students: 800,
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=250&fit=crop",
      type: "Course"
    },
    {
      id: 3,
      title: "AI Research Methodology",
      description: "Best practices for conducting and publishing AI research.",
      duration: "2 hours",
      level: "Intermediate",
      rating: 4.7,
      students: 600,
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=250&fit=crop",
      type: "Workshop"
    }
  ];

  const resources = [
    { title: "AI Ethics Guidelines", type: "PDF", downloads: 5400 },
    { title: "ML Best Practices Checklist", type: "PDF", downloads: 3200 },
    { title: "Research Paper Template", type: "DOC", downloads: 2100 },
    { title: "Dataset Collection Guide", type: "PDF", downloads: 1800 }
  ];

  return (
    <section id="learning" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Learning Hub
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Access world-class educational content, from beginner courses to advanced 
            research methodologies, all designed by leading AI experts.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {courses.map((course) => (
            <Card key={course.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative">
                <img 
                  src={course.image} 
                  alt={course.title}
                  className="w-full h-48 object-cover"
                />
                <Badge className="absolute top-4 left-4 bg-white text-gray-900">
                  {course.type}
                </Badge>
              </div>
              
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <Badge variant="outline">{course.level}</Badge>
                  <div className="flex items-center text-yellow-500">
                    <Star size={16} className="fill-current mr-1" />
                    <span className="text-sm font-medium">{course.rating}</span>
                  </div>
                </div>
                <CardTitle className="text-xl">{course.title}</CardTitle>
                <CardDescription>{course.description}</CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="flex justify-between text-sm text-gray-600 mb-4">
                  <span>{course.duration}</span>
                  <span>{course.students} students</span>
                </div>
                
                <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                  <BookOpen className="mr-2" size={16} />
                  Start Learning
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="bg-gray-50 rounded-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Free Resources
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {resources.map((resource, index) => (
              <div key={index} className="bg-white p-4 rounded-lg border hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="outline">{resource.type}</Badge>
                  <Download size={16} className="text-gray-400" />
                </div>
                <h4 className="font-medium text-gray-900 mb-1">{resource.title}</h4>
                <p className="text-sm text-gray-600">{resource.downloads} downloads</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
