
export const About = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            About Agentics Foundation
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're committed to ensuring AI development benefits all of humanity through 
            education, research, and responsible innovation.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=600&h=400&fit=crop" 
              alt="AI Research Community" 
              className="rounded-lg shadow-lg w-full"
            />
          </div>
          
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Mission</h3>
            <div className="space-y-4">
              <p className="text-gray-600">
                The Agentics Foundation exists to bridge the gap between cutting-edge AI research 
                and practical applications that benefit society. We believe in democratizing AI 
                knowledge and ensuring ethical development practices.
              </p>
              <p className="text-gray-600">
                Through our comprehensive educational programs, world-class events, and vibrant 
                research community, we're building a future where AI technology serves humanity's 
                greatest challenges and opportunities.
              </p>
            </div>
            
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-orange-50 rounded-lg">
                <div className="text-2xl font-bold text-orange-600">50+</div>
                <div className="text-sm text-gray-600">Global Events</div>
              </div>
              <div className="text-center p-4 bg-red-50 rounded-lg">
                <div className="text-2xl font-bold text-red-600">10K+</div>
                <div className="text-sm text-gray-600">Community Members</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
