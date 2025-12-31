import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar, CheckCircle } from "lucide-react";

const portfolioItems = [
  {
    id: 1,
    title: "서울 강남점",
    location: "서울특별시 강남구",
    date: "2024.03",
    image: "https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?q=80&w=2670&auto=format&fit=crop",
    systems: ["키오스크 2대", "고압세차 4기", "SaaS 연동"],
    description: "강남 핵심 상권에 위치한 프리미엄 무인세차장",
  },
  {
    id: 2,
    title: "경기 분당점",
    location: "경기도 성남시 분당구",
    date: "2024.01",
    image: "https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?q=80&w=2670&auto=format&fit=crop",
    systems: ["키오스크 3대", "터널세차", "관제 시스템"],
    description: "대규모 부지를 활용한 멀티존 세차장",
  },
  {
    id: 3,
    title: "인천 송도점",
    location: "인천광역시 연수구",
    date: "2023.11",
    image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=2670&auto=format&fit=crop",
    systems: ["키오스크 2대", "스팀세차", "실시간 모니터링"],
    description: "신도시 상권을 타겟으로 한 스마트 세차장",
  },
  {
    id: 4,
    title: "대전 둔산점",
    location: "대전광역시 서구",
    date: "2023.09",
    image: "https://images.unsplash.com/photo-1507136566006-cfc505b114fc?q=80&w=2632&auto=format&fit=crop",
    systems: ["키오스크 2대", "고압세차 3기", "앱 연동"],
    description: "주거 밀집 지역에 최적화된 운영 모델",
  },
  {
    id: 5,
    title: "부산 해운대점",
    location: "부산광역시 해운대구",
    date: "2023.07",
    image: "https://images.unsplash.com/photo-1507136566006-cfc505b114fc?q=80&w=2632&auto=format&fit=crop",
    systems: ["키오스크 4대", "터널세차 2기", "풀패키지"],
    description: "관광객과 지역 주민을 모두 타겟으로 한 대형 세차장",
  },
  {
    id: 6,
    title: "광주 상무점",
    location: "광주광역시 서구",
    date: "2023.05",
    image: "https://images.unsplash.com/photo-1504215680853-026ed2a45def?q=80&w=2574&auto=format&fit=crop",
    systems: ["키오스크 2대", "고압세차 4기", "24시 무인"],
    description: "비즈니스 밀집 지역 오피스 상권 최적화",
  },
];

export function PortfolioSection() {
  return (
    <section
      id="portfolio"
      className="py-24 md:py-32 bg-muted/30"
      data-testid="section-portfolio"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Portfolio
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            전국 <span className="text-primary">100+</span> 설치 사례
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            위즐리와 함께 성공한 무인세차장들을 만나보세요.
            <br className="hidden sm:block" />
            다양한 상권과 규모에서 검증된 솔루션입니다.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {portfolioItems.map((item) => (
            <Card
              key={item.id}
              className="group overflow-hidden border-0 shadow-lg hover-elevate transition-all duration-300"
              data-testid={`portfolio-card-${item.id}`}
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <Badge className="bg-accent text-accent-foreground border-accent-border mb-2">
                    <Calendar className="w-3 h-3 mr-1" />
                    {item.date}
                  </Badge>
                  <h3 className="text-xl font-bold text-white">{item.title}</h3>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 text-muted-foreground mb-3">
                  <MapPin className="w-4 h-4 shrink-0" />
                  <span className="text-sm">{item.location}</span>
                </div>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {item.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {item.systems.map((system, idx) => (
                    <Badge
                      key={idx}
                      variant="outline"
                      className="text-xs"
                      data-testid={`system-badge-${item.id}-${idx}`}
                    >
                      <CheckCircle className="w-3 h-3 mr-1" />
                      {system}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            더 많은 성공 사례가 궁금하시다면{" "}
            <button
              onClick={() => {
                const element = document.querySelector("#inquiry");
                if (element) element.scrollIntoView({ behavior: "smooth" });
              }}
              className="text-primary font-medium hover:underline"
              data-testid="button-portfolio-cta"
            >
              무료 상담을 신청
            </button>
            해주세요.
          </p>
        </div>
      </div>
    </section>
  );
}
