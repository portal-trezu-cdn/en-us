import React, { useEffect, useRef } from 'react';
import { TowerControl as GameController, Cpu, Zap, Layers, Shield, Rocket, ChevronRight, Github, Twitter, Linkedin, Mail } from 'lucide-react';
import './animations.css';

function App() {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // Animation on scroll
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      });
    }, { threshold: 0.1 });

    animatedElements.forEach(el => {
      observerRef.current?.observe(el);
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <GameController className="h-8 w-8 text-green-800" />
            <h1 className="text-2xl font-bold text-green-800">Treżor.io/start</h1>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#features" className="text-gray-700 hover:text-green-800 transition-colors">Features</a>
            <a href="#benefits" className="text-gray-700 hover:text-green-800 transition-colors">Benefits</a>
            <a href="#technology" className="text-gray-700 hover:text-green-800 transition-colors">Technology</a>
            <a href="#contact" className="text-gray-700 hover:text-green-800 transition-colors">Contact</a>
          </nav>
          <button className="md:hidden text-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-900 to-green-800 text-white py-20">
        <div className="absolute inset-0 overflow-hidden">
          <div className="gaming-particles"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 glitch-text">Treżor.io/start</h1>
            <p className="text-xl md:text-2xl mb-8 text-green-100">Revolutionizing the way you start up your gaming devices</p>
            <div className="animate-bounce-slow">
              <button className="bg-white text-green-800 font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
                Get Started
              </button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-auto">
            <path fill="#ffffff" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,149.3C960,160,1056,160,1152,138.7C1248,117,1344,75,1392,53.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
      </section>

      {/* Main Content */}
      <main className="flex-grow">
        {/* Features Section */}
        <section id="features" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-green-800">Cutting-Edge Features</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow animate-on-scroll fade-up">
                <div className="h-14 w-14 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                  <Zap className="h-8 w-8 text-green-800" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-green-800">Lightning Fast Startup</h3>
                <p className="text-gray-600">Experience unprecedented boot times with our optimized startup sequence, getting you into the game faster than ever before.</p>
              </div>
              
              {/* Feature 2 */}
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow animate-on-scroll fade-up" style={{ animationDelay: '0.2s' }}>
                <div className="h-14 w-14 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                  <Cpu className="h-8 w-8 text-green-800" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-green-800">Resource Optimization</h3>
                <p className="text-gray-600">Our intelligent resource allocation ensures your device dedicates maximum power to your gaming experience.</p>
              </div>
              
              {/* Feature 3 */}
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow animate-on-scroll fade-up" style={{ animationDelay: '0.4s' }}>
                <div className="h-14 w-14 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                  <Shield className="h-8 w-8 text-green-800" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-green-800">Enhanced Security</h3>
                <p className="text-gray-600">Game with confidence knowing our advanced security protocols protect your device and data at all times.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Animated Boxes Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-green-800">Why Choose Treżor.io/start</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="floating-box bg-white p-8 rounded-xl shadow-lg animate-on-scroll slide-right">
                <h3 className="text-xl font-bold mb-6 text-green-800 flex items-center">
                  <span className="h-8 w-8 bg-green-800 text-white rounded-full flex items-center justify-center mr-3">1</span>
                  Seamless Integration
                </h3>
                <p className="text-gray-600 mb-4">Treżor.io/start seamlessly integrates with all your gaming platforms and devices, providing a unified startup experience regardless of your hardware configuration.</p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-green-800 mt-1 mr-2 flex-shrink-0" />
                    <span className="text-gray-600">Compatible with all major gaming consoles</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-green-800 mt-1 mr-2 flex-shrink-0" />
                    <span className="text-gray-600">Works with custom PC builds and gaming laptops</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-green-800 mt-1 mr-2 flex-shrink-0" />
                    <span className="text-gray-600">Mobile gaming optimization for Android and iOS</span>
                  </li>
                </ul>
              </div>
              
              <div className="floating-box bg-white p-8 rounded-xl shadow-lg animate-on-scroll slide-left">
                <h3 className="text-xl font-bold mb-6 text-green-800 flex items-center">
                  <span className="h-8 w-8 bg-green-800 text-white rounded-full flex items-center justify-center mr-3">2</span>
                  Performance Boost
                </h3>
                <p className="text-gray-600 mb-4">Our technology doesn't just start your device—it optimizes it for peak gaming performance, giving you the competitive edge.</p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-green-800 mt-1 mr-2 flex-shrink-0" />
                    <span className="text-gray-600">Up to 40% faster load times for games</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-green-800 mt-1 mr-2 flex-shrink-0" />
                    <span className="text-gray-600">Reduced system latency for smoother gameplay</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-green-800 mt-1 mr-2 flex-shrink-0" />
                    <span className="text-gray-600">Intelligent background process management</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Technology Section */}
        <section id="technology" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-green-800">Our Technology</h2>
            
            <div className="max-w-4xl mx-auto">
              <div className="relative">
                <div className="absolute left-0 w-1 bg-green-200 h-full"></div>
                
                {/* Tech Point 1 */}
                <div className="relative pl-8 pb-12 animate-on-scroll fade-in">
                  <div className="absolute left-0 w-8 h-8 bg-green-800 rounded-full -translate-x-1/2 flex items-center justify-center">
                    <Rocket className="h-4 w-4 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-green-800">Adaptive Boot Sequence</h3>
                  <p className="text-gray-600">Our proprietary boot sequence learns from your gaming habits, prioritizing the resources needed for your most-played titles.</p>
                </div>
                
                {/* Tech Point 2 */}
                <div className="relative pl-8 pb-12 animate-on-scroll fade-in" style={{ animationDelay: '0.2s' }}>
                  <div className="absolute left-0 w-8 h-8 bg-green-800 rounded-full -translate-x-1/2 flex items-center justify-center">
                    <Layers className="h-4 w-4 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-green-800">Multi-Core Optimization</h3>
                  <p className="text-gray-600">Treżor.io/start intelligently distributes startup processes across all available cores, maximizing efficiency and reducing boot times.</p>
                </div>
                
                {/* Tech Point 3 */}
                <div className="relative pl-8 animate-on-scroll fade-in" style={{ animationDelay: '0.4s' }}>
                  <div className="absolute left-0 w-8 h-8 bg-green-800 rounded-full -translate-x-1/2 flex items-center justify-center">
                    <Shield className="h-4 w-4 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-green-800">Gaming-Focused Security</h3>
                  <p className="text-gray-600">Our security protocols are designed specifically for gamers, providing protection without the performance overhead of traditional security solutions.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section id="benefits" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-green-800">The Treżor.io/start Experience</h2>
            
            <div className="max-w-4xl mx-auto prose prose-lg">
              <p>In the rapidly evolving world of gaming technology, startup times and system optimization have become critical factors that can make or break the gaming experience. Treżor.io/start stands at the forefront of this revolution, offering gamers an unprecedented solution that transforms how devices boot up and prepare for intensive gaming sessions.</p>
              
              <p>Developed by a team of passionate gamers and software engineers, Treżor.io/start was born from a simple yet powerful idea: what if your device could intelligently prepare itself specifically for gaming? Traditional startup sequences allocate resources uniformly, treating gaming applications the same as productivity software. Treżor.io/start changes this paradigm completely.</p>
              
              <p>Our proprietary technology analyzes your gaming habits and preferences, creating a customized startup profile that prioritizes the resources your favorite games need most. This means faster load times, smoother gameplay, and an overall enhanced gaming experience from the moment you power on your device.</p>
              
              <p>The core of Treżor.io/start lies in its adaptive learning algorithm. As you use your device, our software quietly monitors which games you play most frequently, what resources they require, and how your system performs under various gaming conditions. This data is processed locally—ensuring your privacy—and used to continuously refine your startup sequence for optimal performance.</p>
              
              <p>For competitive gamers, every millisecond counts. Treżor.io/start's precision resource allocation ensures that critical gaming processes receive priority, reducing input lag and enhancing responsiveness. Our internal benchmarks show up to a 40% reduction in game launch times and a significant decrease in frame rate fluctuations during intensive gaming sessions.</p>
              
              <p>Beyond performance, Treżor.io/start incorporates gaming-focused security protocols that protect your device without the performance overhead typically associated with security software. Traditional antivirus and firewall solutions often consume valuable resources that could otherwise be directed toward your gaming experience. Our security framework is designed specifically for gamers, providing robust protection while maintaining peak performance.</p>
              
              <p>The versatility of Treżor.io/start is one of its most compelling features. Whether you're gaming on a custom-built PC, a gaming laptop, a console, or even a mobile device, our technology adapts to your hardware configuration to deliver optimal results. This cross-platform compatibility ensures that no matter how your gaming setup evolves, Treżor.io/start evolves with it.</p>
              
              <p>For developers, Treżor.io/start offers an API that allows games to communicate directly with our startup optimization system. This integration enables games to specify their resource requirements in advance, further enhancing the startup experience for players. Several major game studios have already implemented this integration, with more joining our ecosystem every month.</p>
              
              <p>The gaming community has embraced Treżor.io/start with enthusiasm, with professional esports teams reporting improved practice efficiency and more consistent tournament performance. Casual gamers appreciate the seamless experience and the elimination of frustrating wait times that previously interrupted their gaming sessions.</p>
              
              <p>As we look to the future, Treżor.io/start continues to innovate. Our development roadmap includes enhanced AI-driven optimization, deeper integration with cloud gaming platforms, and expanded compatibility with emerging gaming technologies. The gaming landscape is constantly changing, and Treżor.io/start is committed to staying at the cutting edge.</p>
              
              <p>Join the thousands of gamers who have already transformed their startup experience with Treżor.io/start. Your device deserves to be as ready for gaming as you are.</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-green-800 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Ready to Transform Your Gaming Experience?</h2>
            <p className="text-xl mb-10 max-w-2xl mx-auto">Join thousands of gamers who have already revolutionized their startup experience with Treżor.io/start.</p>
            <button className="bg-white text-green-800 font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:scale-105 pulse-animation">
              Get Started Now
            </button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <GameController className="h-8 w-8 text-green-400" />
                <h2 className="text-2xl font-bold text-green-400">Treżor.io/start</h2>
              </div>
              <p className="text-gray-400">Revolutionizing the way you start up your gaming devices since 2023.</p>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-4 text-green-400">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#features" className="text-gray-400 hover:text-white transition-colors">Features</a></li>
                <li><a href="#benefits" className="text-gray-400 hover:text-white transition-colors">Benefits</a></li>
                <li><a href="#technology" className="text-gray-400 hover:text-white transition-colors">Technology</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-4 text-green-400">Legal</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Cookie Policy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">GDPR</a></li>
              </ul>
            </div>
            
            <div id="contact">
              <h3 className="text-lg font-bold mb-4 text-green-400">Connect With Us</h3>
              <div className="flex space-x-4 mb-4">
                <a href="#" className="h-10 w-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-green-800 transition-colors">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="#" className="h-10 w-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-green-800 transition-colors">
                  <Github className="h-5 w-5" />
                </a>
                <a href="#" className="h-10 w-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-green-800 transition-colors">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="#" className="h-10 w-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-green-800 transition-colors">
                  <Mail className="h-5 w-5" />
                </a>
              </div>
              <p className="text-gray-400">Email: contact@trezor.io</p>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>© {new Date().getFullYear()} Treżor.io/start. All rights reserved.</p>
          </div>
        </div>
        
        <div className="footer-animation">
          <div className="footer-particle"></div>
          <div className="footer-particle"></div>
          <div className="footer-particle"></div>
          <div className="footer-particle"></div>
          <div className="footer-particle"></div>
        </div>
      </footer>
    </div>
  );
}

export default App;