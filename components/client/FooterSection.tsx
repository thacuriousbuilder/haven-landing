
import Link from "next/link";
export default function FooterSection() {
    return (
      <footer className="bg-haven-black text-white">
        <div className="container mx-auto px-4 lg:px-8 py-8 lg:py-12">
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12 mb-12">
            
            <div className="col-span-2 md:col-span-1">
              <h3 className="text-2xl font-bold mb-4 text-white">
                <Link href="/">
                  HAVEN
                </Link>
                </h3>
              <p className="text-white/70 leading-relaxed">
                Weekly calorie tracking for sustainable progress and guilt-free living.
              </p>
            </div>
  
         
            <div>
              <h4 className="font-bold text-lg mb-4 text-white">Product</h4>
              <ul className="space-y-3">
                <li>
                  <Link href="/" className="text-white/70 hover:text-white transition-colors">
                    Individuals
                  </Link>
                </li>
                <li>
                  <Link href="/coach" className="text-white/70 hover:text-white transition-colors">
                    Coaching
                  </Link>
                </li>
                {/* <li>
                  <a href="#pricing" className="text-white/70 hover:text-white transition-colors">
                    Pricing
                  </a>
                </li> */}
              </ul>
            </div>
  
        
            <div>
              <h4 className="font-bold text-lg mb-4 text-white">Company</h4>
              <ul className="space-y-3">
                <li>
                  <Link href="" className="text-white/70 hover:text-white transition-colors">
                    About
                  </Link>
                </li>
                {/* <li>
                  <a href="#blog" className="text-white/70 hover:text-white transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-white/70 hover:text-white transition-colors">
                    Contact
                  </a>
                </li> */}
              </ul>
            </div>
  
            
            <div>
              <h4 className="font-bold text-lg mb-4 text-white">Legal</h4>
              <ul className="space-y-3">
                <li>
                  <Link href="" className="text-white/70 hover:text-white transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                {/* <li>
                  <a href="#terms" className="text-white/70 hover:text-white transition-colors">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#cookies" className="text-white/70 hover:text-white transition-colors">
                    Cookie Policy
                  </a>
                </li> */}
              </ul>
            </div>
          </div>
  
      
          <div className="pt-8 border-t border-haven-border flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/60 text-sm">
              © 2026 HAVEN. All rights reserved.
            </p>
            <p className="text-white/60 text-sm flex items-center gap-2">
              Made with 
              <svg className="w-4 h-4 text-haven-teal" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
              </svg>
              for sustainable wellness
            </p>
          </div>
        </div>
      </footer>
    );
  }