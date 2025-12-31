# 주식회사 위즐리(Wizley) - 무인세차 통합 솔루션 웹사이트

## 프로젝트 개요
무인세차 솔루션 전문 기업 위즐리(Wizley)의 공식 웹사이트입니다. 키오스크 하드웨어, 운영 SaaS 플랫폼, 구축 컨설팅을 통합 제공하는 B2B 기업 사이트로, 예비 창업자의 상담 신청(Lead Generation)을 핵심 목표로 합니다.

## 기술 스택
- **Frontend**: React, TypeScript, Tailwind CSS, Shadcn/ui
- **Backend**: Express.js, Node.js
- **Form Handling**: React Hook Form + Zod
- **State Management**: TanStack React Query
- **Routing**: Wouter

## 프로젝트 구조
```
client/
├── src/
│   ├── components/
│   │   ├── Header.tsx          # 고정 헤더 (네비게이션 + CTA)
│   │   ├── HeroSection.tsx     # 히어로 섹션 (메인 배너)
│   │   ├── SolutionsSection.tsx # 3대 솔루션 쇼케이스 (탭)
│   │   ├── WhyWizleySection.tsx # 위즐리 선택 이유 (특장점)
│   │   ├── PortfolioSection.tsx # 성공 사례 포트폴리오
│   │   ├── ProcessSection.tsx   # 6단계 도입 프로세스
│   │   ├── InquirySection.tsx   # 상담 신청 폼
│   │   ├── FloatingCTA.tsx      # 플로팅 상담 버튼
│   │   └── Footer.tsx           # 푸터 (회사 정보)
│   ├── pages/
│   │   └── LandingPage.tsx      # 메인 랜딩 페이지
│   └── App.tsx                  # 앱 진입점
server/
├── routes.ts                    # API 라우트 (/api/inquiries)
└── storage.ts                   # 인메모리 저장소
shared/
└── schema.ts                    # 데이터 스키마 + Zod 검증
```

## 주요 기능
1. **히어로 섹션**: 임팩트 있는 메시지와 통계 표시
2. **3대 솔루션 쇼케이스**: 하드웨어/SaaS/컨설팅 탭 UI
3. **성공 사례 포트폴리오**: 전국 설치 사례 카드
4. **6단계 프로세스**: 창업 상담부터 오픈까지 타임라인
5. **상담 신청 폼**: Zod 유효성 검사, 지역 선택
6. **플로팅 CTA**: 빠른 상담 접근 버튼

## API 엔드포인트
- `POST /api/inquiries` - 상담 신청 접수
- `GET /api/inquiries` - 상담 목록 조회
- `GET /api/inquiries/:id` - 상담 상세 조회

## 디자인 시스템
- **Primary Color**: Navy (222 47% 20%)
- **Accent Color**: Orange (25 95% 53%)
- **Font**: Noto Sans KR, Inter
- **Theme**: Light/Dark 지원

## 개발 서버 실행
```bash
npm run dev
```
포트 5000에서 프론트엔드와 백엔드가 함께 실행됩니다.

## 최근 변경 사항
- 2024-11: 초기 MVP 구현 완료
  - 전체 랜딩 페이지 구조
  - 상담 신청 폼 및 API
  - 반응형 디자인 적용
