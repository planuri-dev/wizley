import { Badge } from "@/components/ui/badge";
import {
  MessageSquare,
  MapPin,
  FileCheck,
  Wrench,
  Rocket,
  Headphones,
} from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    title: "상담 신청",
    description: "온라인 폼 또는 전화로 간편하게 상담을 신청하세요.",
    duration: "1일",
  },
  {
    icon: MapPin,
    title: "현장 분석",
    description: "전문가가 직접 방문하여 입지와 수익성을 분석합니다.",
    duration: "3~5일",
  },
  {
    icon: FileCheck,
    title: "맞춤 제안",
    description: "최적화된 솔루션과 예상 수익 시뮬레이션을 제공합니다.",
    duration: "7일",
  },
  {
    icon: Wrench,
    title: "시공 및 설치",
    description: "턴키 방식으로 설계부터 시공, 장비 설치까지 진행합니다.",
    duration: "4~6주",
  },
  {
    icon: Rocket,
    title: "오픈 및 교육",
    description: "시스템 사용법과 운영 노하우를 교육해 드립니다.",
    duration: "2~3일",
  },
  {
    icon: Headphones,
    title: "지속 관리",
    description: "전담 매니저가 오픈 후에도 지속적으로 지원합니다.",
    duration: "상시",
  },
];

export function ProcessSection() {
  return (
    <section
      id="process"
      className="py-24 md:py-32 bg-background"
      data-testid="section-process"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Process
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            창업 상담부터 오픈까지
            <br />
            <span className="text-primary">6단계 프로세스</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            무인세차 창업이 처음이어도 걱정 마세요.
            <br className="hidden sm:block" />
            위즐리가 처음부터 끝까지 함께합니다.
          </p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-border to-transparent -translate-y-1/2" />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative group"
                data-testid={`process-step-${index}`}
              >
                <div className="bg-card rounded-xl p-6 border border-card-border shadow-md hover-elevate transition-all duration-300 h-full">
                  <div className="flex items-start gap-4">
                    <div className="relative shrink-0">
                      <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <step.icon className="w-7 h-7 text-primary" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-accent text-accent-foreground text-xs font-bold flex items-center justify-center shadow-md">
                        {index + 1}
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <h3 className="font-bold text-lg text-foreground">
                          {step.title}
                        </h3>
                        <Badge variant="outline" className="text-xs shrink-0">
                          {step.duration}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>

                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-8 z-10">
                    <svg
                      className="w-full h-full text-muted-foreground/30"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
