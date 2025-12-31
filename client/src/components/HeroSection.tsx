import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Shield, Clock, TrendingUp } from "lucide-react";

const stats = [
  { icon: Shield, value: "100+", label: "설치 사례" },
  { icon: Clock, value: "24시간", label: "무인 관제" },
  { icon: TrendingUp, value: "35%", label: "평균 수익 향상" },
];

export function HeroSection() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      data-testid="section-hero"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=2832&auto=format&fit=crop')`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0f172a]/80 via-[#0f172a]/70 to-[#0f172a]/90" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0f172a]/60 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-40">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
            </span>
            무인세차 창업 전문 기업
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 text-balance">
            무인세차 창업의
            <br />
            <span className="text-accent">모든 것</span>을 함께합니다
          </h1>

          <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl leading-relaxed">
            키오스크 하드웨어부터 운영 플랫폼, 구축 컨설팅까지.
            <br className="hidden sm:block" />
            위즐리와 함께라면 안정적인 무인세차 창업이 가능합니다.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <Button
              size="lg"
              onClick={() => scrollToSection("#inquiry")}
              className="bg-accent hover:bg-accent/90 text-accent-foreground border-accent-border text-base px-8 py-6"
              data-testid="button-hero-cta"
            >
              무료 창업 상담 신청
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("#solutions")}
              className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm text-base px-8 py-6"
              data-testid="button-hero-solutions"
            >
              <Play className="w-5 h-5 mr-2" />
              솔루션 살펴보기
            </Button>
          </div>

          <div className="flex flex-wrap gap-8 md:gap-12">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="flex items-center gap-3"
                data-testid={`stat-${index}`}
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20">
                  <stat.icon className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-sm text-white/70">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <button
          onClick={() => scrollToSection("#solutions")}
          className="flex flex-col items-center text-white/60 hover:text-white transition-colors"
          data-testid="button-scroll-down"
        >
          <span className="text-xs mb-2">스크롤</span>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </button>
      </div>
    </section>
  );
}
