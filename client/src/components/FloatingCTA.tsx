import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Phone, X, MessageCircle } from "lucide-react";

export function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToInquiry = () => {
    const element = document.querySelector("#inquiry");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsExpanded(false);
  };

  if (!isVisible) return null;

  return (
    <div
      className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3"
      data-testid="floating-cta"
    >
      {isExpanded && (
        <div className="bg-card rounded-xl shadow-2xl border border-card-border p-4 animate-in slide-in-from-bottom-2 fade-in duration-300 w-64">
          <div className="flex items-center justify-between mb-3">
            <h4 className="font-semibold text-sm">빠른 상담 신청</h4>
            <Button
              variant="ghost"
              size="icon"
              className="h-6 w-6"
              onClick={() => setIsExpanded(false)}
              data-testid="button-close-floating"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
          <p className="text-xs text-muted-foreground mb-4">
            무인세차 창업에 관심이 있으신가요?
            <br />
            지금 바로 무료 상담을 신청하세요!
          </p>
          <div className="space-y-2">
            <Button
              onClick={scrollToInquiry}
              className="w-full bg-accent hover:bg-accent/90 text-accent-foreground border-accent-border text-sm"
              data-testid="button-floating-inquiry"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              상담 신청하기
            </Button>
            <a href="tel:1577-0000" className="block">
              <Button
                variant="outline"
                className="w-full text-sm"
                data-testid="button-floating-call"
              >
                <Phone className="w-4 h-4 mr-2" />
                1577-0000
              </Button>
            </a>
          </div>
        </div>
      )}

      <Button
        onClick={() => setIsExpanded(!isExpanded)}
        size="lg"
        className={`h-14 rounded-full shadow-lg transition-all duration-300 ${
          isExpanded
            ? "bg-muted hover:bg-muted/90 text-muted-foreground px-4"
            : "bg-accent hover:bg-accent/90 text-accent-foreground border-accent-border px-6"
        }`}
        data-testid="button-floating-toggle"
      >
        {isExpanded ? (
          <X className="w-5 h-5" />
        ) : (
          <>
            <Phone className="w-5 h-5 mr-2" />
            <span className="font-medium">상담 신청</span>
          </>
        )}
      </Button>

      {!isExpanded && (
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-accent"></span>
        </span>
      )}
    </div>
  );
}
