import { Phone, Mail, MapPin, Clock, Facebook, Instagram } from "lucide-react";
import { SiKakaotalk, SiBlogger } from "react-icons/si";

const footerLinks = {
  solutions: [
    { label: "키오스크 하드웨어", href: "#solutions" },
    { label: "운영 플랫폼 SaaS", href: "#solutions" },
    { label: "구축 컨설팅", href: "#solutions" },
  ],
  support: [
    { label: "자주 묻는 질문", href: "#" },
    { label: "설치 문의", href: "#inquiry" },
    { label: "A/S 접수", href: "#" },
    { label: "운영 가이드", href: "#" },
  ],
  company: [
    { label: "회사 소개", href: "#" },
    { label: "오시는 길", href: "#" },
    { label: "채용 안내", href: "#" },
    { label: "뉴스룸", href: "#" },
  ],
};

const socialLinks = [
  { icon: SiKakaotalk, label: "카카오톡", href: "#" },
  { icon: SiBlogger, label: "블로그", href: "#" },
  { icon: Instagram, label: "인스타그램", href: "#" },
  { icon: Facebook, label: "페이스북", href: "#" },
];

export function Footer() {
  const scrollToSection = (href: string) => {
    if (href.startsWith("#")) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <footer className="bg-primary text-primary-foreground" data-testid="footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12 md:py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
            <div className="lg:col-span-2">
              <div className="mb-6">
                <span className="text-2xl font-bold">
                  <span className="text-accent">W</span>izley
                </span>
              </div>
              <p className="text-primary-foreground/70 text-sm leading-relaxed mb-6 max-w-sm">
                무인세차 통합 솔루션 전문 기업 위즐리.
                <br />
                키오스크부터 운영 플랫폼, 컨설팅까지 원스톱으로 제공합니다.
              </p>
              <div className="space-y-3 text-sm">
                <a
                  href="tel:070-7721-0466"
                  className="flex items-center gap-3 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  070-7721-0466
                </a>
                <a
                  href="mailto:help@wizley.co.kr"
                  className="flex items-center gap-3 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  help@wizley.co.kr
                </a>
                <div className="flex items-start gap-3 text-primary-foreground/80">
                  <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                  경기도 용인시 기흥구 공세로 150-29, 비01-엔46호(공세동)
                </div>
                <div className="flex items-center gap-3 text-primary-foreground/80">
                  <Clock className="w-4 h-4" />
                  평일 09:00 - 18:00 (주말/공휴일 휴무)
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="py-6 border-t border-primary-foreground/10 text-center">
          <p className="text-xs text-primary-foreground/50">
            © 2024 Wizley Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
