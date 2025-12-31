import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X, Phone } from "lucide-react";

const navItems = [
  { label: "솔루션", href: "#solutions" },
  { label: "성공 사례", href: "#portfolio" },
  { label: "도입 프로세스", href: "#process" },
  { label: "상담 신청", href: "#inquiry" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-md border-b border-border"
          : "bg-transparent"
      }`}
      data-testid="header"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a
            href="#"
            className="flex items-center gap-2"
            data-testid="link-logo"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            <div className={`font-bold text-xl md:text-2xl tracking-tight ${
              isScrolled ? "text-foreground" : "text-white"
            }`}>
              <span className="text-accent">W</span>izley
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className={`px-4 py-2 text-sm font-medium rounded-md transition-colors hover-elevate ${
                  isScrolled
                    ? "text-foreground/80 hover:text-foreground"
                    : "text-white/90 hover:text-white"
                }`}
                data-testid={`link-nav-${item.label}`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Button
              onClick={() => scrollToSection("#inquiry")}
              className="hidden md:flex items-center gap-2 bg-accent hover:bg-accent/90 text-accent-foreground border-accent-border"
              data-testid="button-header-cta"
            >
              <Phone className="w-4 h-4" />
              무료 상담 신청
            </Button>

            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className={`md:hidden ${
                    isScrolled ? "text-foreground" : "text-white"
                  }`}
                  data-testid="button-mobile-menu"
                >
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[280px] p-0">
                <div className="flex flex-col h-full">
                  <div className="flex items-center justify-between p-4 border-b border-border">
                    <span className="font-bold text-xl">
                      <span className="text-accent">W</span>izley
                    </span>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => setMobileMenuOpen(false)}
                      data-testid="button-close-mobile-menu"
                    >
                      <X className="h-5 w-5" />
                    </Button>
                  </div>
                  <nav className="flex flex-col p-4 gap-1">
                    {navItems.map((item) => (
                      <button
                        key={item.href}
                        onClick={() => scrollToSection(item.href)}
                        className="px-4 py-3 text-left text-base font-medium rounded-md hover:bg-muted transition-colors"
                        data-testid={`link-mobile-nav-${item.label}`}
                      >
                        {item.label}
                      </button>
                    ))}
                  </nav>
                  <div className="mt-auto p-4 border-t border-border">
                    <Button
                      onClick={() => scrollToSection("#inquiry")}
                      className="w-full bg-accent hover:bg-accent/90 text-accent-foreground border-accent-border"
                      data-testid="button-mobile-cta"
                    >
                      <Phone className="w-4 h-4 mr-2" />
                      무료 상담 신청
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
