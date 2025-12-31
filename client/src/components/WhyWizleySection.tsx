import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Zap,
  Shield,
  TrendingUp,
  Headphones,
  Award,
  Users,
} from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "올인원 솔루션",
    description:
      "하드웨어, 소프트웨어, 컨설팅을 한 곳에서 해결. 여러 업체와 계약할 필요 없이 위즐리 하나로 완성합니다.",
  },
  {
    icon: Shield,
    title: "검증된 안정성",
    description:
      "100곳 이상의 설치 경험과 365일 무중단 운영 노하우. IP65 방수방진 등급의 견고한 장비를 제공합니다.",
  },
  {
    icon: TrendingUp,
    title: "수익 극대화",
    description:
      "데이터 기반 운영 최적화로 평균 35% 수익 향상. 실시간 매출 분석으로 스마트한 경영이 가능합니다.",
  },
  {
    icon: Headphones,
    title: "24시간 지원",
    description:
      "전담 매니저 배정과 24시간 원격 관제 서비스. 문제 발생 시 빠른 대응으로 운영 중단을 최소화합니다.",
  },
  {
    icon: Award,
    title: "업계 최고 품질",
    description:
      "삼성 SSD, 인텔 프로세서 등 프리미엄 부품 사용. 2년 무상 A/S와 전국 출장 서비스를 제공합니다.",
  },
  {
    icon: Users,
    title: "풍부한 네트워크",
    description:
      "전국 100곳 이상의 파트너 세차장 네트워크. 성공 사례 공유와 노하우 전수로 함께 성장합니다.",
  },
];

export function WhyWizleySection() {
  return (
    <section
      className="py-24 md:py-32 bg-muted/30"
      data-testid="section-why-wizley"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <Badge variant="secondary" className="mb-4">
              Why Wizley
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
              왜 <span className="text-primary">위즐리</span>를
              <br />
              선택해야 할까요?
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              무인세차 창업의 성공은 파트너 선택에서 시작됩니다.
              위즐리는 단순한 장비 공급을 넘어, 사업의 성공을 함께 고민하는
              진정한 파트너입니다.
            </p>
            <div className="relative rounded-xl overflow-hidden aspect-video">
              <img
                src="https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?q=80&w=2670&auto=format&fit=crop"
                alt="무인세차장 시설"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-white text-sm font-medium">
                  위즐리 파트너 세차장 전경
                </p>
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {features.map((feature, idx) => (
              <Card
                key={idx}
                className="border-card-border hover-elevate transition-all duration-300"
                data-testid={`why-feature-${idx}`}
              >
                <CardContent className="p-5">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <feature.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
