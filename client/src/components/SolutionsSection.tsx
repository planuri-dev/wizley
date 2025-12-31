import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import {
  Monitor,
  Smartphone,
  Users,
  CreditCard,
  BarChart3,
  Bell,
  Wrench,
  MapPin,
  GraduationCap,
  CheckCircle2,
  Cpu,
  Cloud,
  Headphones,
} from "lucide-react";

const solutions = [
  {
    id: "hardware",
    title: "키오스크 하드웨어",
    subtitle: "결제부터 관제까지 올인원 시스템",
    icon: Cpu,
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2670&auto=format&fit=crop",
    description:
      "국내 최고 수준의 무인 결제 키오스크와 세차 장비를 제공합니다. 내구성과 안정성이 검증된 하드웨어로 365일 무중단 운영이 가능합니다.",
    features: [
      {
        icon: CreditCard,
        title: "올인원 결제 시스템",
        desc: "카드, 간편결제, QR 결제 지원",
      },
      {
        icon: Monitor,
        title: "터치스크린 인터페이스",
        desc: "21인치 고화질 디스플레이",
      },
      {
        icon: Bell,
        title: "실시간 원격 관제",
        desc: "CCTV 연동 24시간 모니터링",
      },
      {
        icon: Wrench,
        title: "견고한 내구성",
        desc: "IP65 방수방진 등급 설계",
      },
    ],
    specs: ["삼성 SSD 탑재", "인텔 프로세서", "2년 무상 A/S", "전국 출장 설치"],
  },
  {
    id: "saas",
    title: "운영 플랫폼 SaaS",
    subtitle: "스마트폰 하나로 세차장 경영",
    icon: Cloud,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop",
    description:
      "PC와 모바일 앱에서 매출, 고객, 장비 상태를 실시간으로 확인하세요. 데이터 기반의 똑똑한 세차장 운영이 가능해집니다.",
    features: [
      {
        icon: BarChart3,
        title: "실시간 매출 대시보드",
        desc: "일별/월별 매출 분석 리포트",
      },
      {
        icon: Smartphone,
        title: "모바일 앱 제공",
        desc: "iOS/Android 앱 무료 제공",
      },
      {
        icon: Bell,
        title: "스마트 알림",
        desc: "장비 이상, 결제 완료 푸시 알림",
      },
      {
        icon: Users,
        title: "고객 관리 CRM",
        desc: "단골 고객 분석 및 마케팅 도구",
      },
    ],
    specs: ["클라우드 기반", "무제한 데이터 저장", "SSL 보안", "월간 업데이트"],
  },
  {
    id: "consulting",
    title: "구축 컨설팅",
    subtitle: "창업부터 운영까지 전담 지원",
    icon: Headphones,
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2670&auto=format&fit=crop",
    description:
      "부지 선정부터 인허가, 시공, 오픈까지 전 과정을 전담 매니저가 함께합니다. 무인세차 창업이 처음이어도 걱정하지 마세요.",
    features: [
      {
        icon: MapPin,
        title: "입지 분석 서비스",
        desc: "상권 분석 및 수익성 시뮬레이션",
      },
      {
        icon: GraduationCap,
        title: "운영 교육 제공",
        desc: "시스템 사용법 및 운영 노하우 전수",
      },
      {
        icon: Wrench,
        title: "턴키 시공 서비스",
        desc: "설계부터 시공까지 원스톱",
      },
      {
        icon: Headphones,
        title: "전담 매니저 배정",
        desc: "오픈 후에도 지속적인 운영 지원",
      },
    ],
    specs: ["무료 상담", "맞춤형 제안서", "현장 방문", "전국 네트워크"],
  },
];

export function SolutionsSection() {
  return (
    <section
      id="solutions"
      className="py-24 md:py-32 bg-background"
      data-testid="section-solutions"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Solutions
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            무인세차 성공을 위한
            <br />
            <span className="text-primary">3가지 핵심 솔루션</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            하드웨어, 소프트웨어, 컨설팅까지 통합 제공하는
            <br className="hidden sm:block" />
            위즐리만의 토탈 솔루션을 경험하세요.
          </p>
        </div>

        <Tabs defaultValue="hardware" className="w-full">
          <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-3 mb-12 h-auto p-1">
            {solutions.map((solution) => (
              <TabsTrigger
                key={solution.id}
                value={solution.id}
                className="flex flex-col gap-1 py-3 px-4 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                data-testid={`tab-${solution.id}`}
              >
                <solution.icon className="w-5 h-5" />
                <span className="text-xs sm:text-sm font-medium">{solution.title}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {solutions.map((solution) => (
            <TabsContent key={solution.id} value={solution.id} className="mt-0">
              <Card className="overflow-hidden border-0 shadow-lg">
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="relative h-64 lg:h-auto min-h-[400px]">
                    <img
                      src={solution.image}
                      alt={solution.title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent lg:bg-gradient-to-r" />
                  </div>
                  <CardContent className="p-8 md:p-10 lg:p-12 flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 rounded-lg bg-primary/10">
                        <solution.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-2xl md:text-3xl">
                          {solution.title}
                        </CardTitle>
                        <p className="text-muted-foreground text-sm">
                          {solution.subtitle}
                        </p>
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-8 leading-relaxed">
                      {solution.description}
                    </p>

                    <div className="grid sm:grid-cols-2 gap-4 mb-8">
                      {solution.features.map((feature, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-3 p-3 rounded-lg bg-muted/50"
                          data-testid={`feature-${solution.id}-${idx}`}
                        >
                          <div className="p-1.5 rounded-md bg-primary/10 shrink-0">
                            <feature.icon className="w-4 h-4 text-primary" />
                          </div>
                          <div>
                            <div className="font-medium text-sm">{feature.title}</div>
                            <div className="text-xs text-muted-foreground">
                              {feature.desc}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {solution.specs.map((spec, idx) => (
                        <Badge
                          key={idx}
                          variant="outline"
                          className="text-xs"
                          data-testid={`spec-${solution.id}-${idx}`}
                        >
                          <CheckCircle2 className="w-3 h-3 mr-1" />
                          {spec}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </div>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
