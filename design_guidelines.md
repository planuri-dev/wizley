# Design Guidelines for 위즐리(Wizley) - 무인세차 통합 솔루션

## Design Approach

**Selected Approach:** Reference-Based (B2B SaaS/Professional Services)

**Primary References:**
- **Stripe, Linear** - Professional B2B aesthetic with clean layouts and strong typography hierarchy
- **Planuri, Allthatwash** - Industry-specific competitors (as requested)
- **Shopify, Square** - Hardware + Software solution providers with trust-building design patterns

**Design Principles:**
1. Professional credibility through clean, structured layouts
2. Visual storytelling with hardware and installation imagery
3. Trust-building through case studies and clear solution presentation
4. Lead generation optimized - every section guides toward consultation request

## Typography System

**Hierarchy:**
- Hero Headlines: Bold, 3xl-5xl (48-72px desktop), commanding presence
- Section Headers: Semibold, 2xl-3xl (32-48px), clear information architecture  
- Solution Titles: Semibold, xl-2xl (24-32px), highlighting three core offerings
- Body Text: Regular, base-lg (16-18px), excellent readability
- Form Labels: Medium, sm (14px), clear and accessible
- Captions/Metadata: Regular, sm-xs (12-14px), supporting information

**Font Recommendation:**
- Primary: Inter or Pretendard (excellent Korean support) - clean, professional sans-serif
- Use single font family with weight variations for consistency

## Layout System

**Spacing Framework:**
Use Tailwind units: **4, 6, 8, 12, 16, 20, 24** for consistent rhythm

- Section padding: py-16 md:py-24 lg:py-32
- Container max-width: max-w-7xl
- Content max-width: max-w-6xl  
- Card spacing: gap-6 md:gap-8
- Form field spacing: space-y-6

**Grid System:**
- Solutions Section: 3-column grid (grid-cols-1 md:grid-cols-3)
- Portfolio Cases: 2-3 column masonry grid (grid-cols-1 md:grid-cols-2 lg:grid-cols-3)
- Features: 2-column split for text + imagery

## Core Component Library

### Navigation
- Fixed header with logo left, nav items center/right
- Mobile: Hamburger menu with slide-out drawer
- Sticky on scroll with subtle shadow for depth
- CTA button in header: "무료 상담 신청"

### Hero Section
- Full-width, 85vh height for impact
- Large background image: Modern car wash facility or kiosk hardware installation
- Overlay gradient for text readability
- Centered headline + subheadline + primary CTA
- Secondary stats bar below (e.g., "100+ 설치 사례", "24시간 무인 관제")

### Solution Showcase Cards
- Three equal-width cards with prominent icons/illustrations at top
- Card structure: Icon → Title → 3-4 bullet points → "자세히 보기" link
- Subtle elevation (shadow-md) with hover lift effect
- Alternatively: Tabbed interface switching between three solutions with large imagery

### Portfolio/Case Study Section
- Card-based grid layout
- Each card: Installation photo → Location badge → System specs → Brief description
- Image aspect ratio: 4:3 or 16:9 for consistency
- Hover: Slight scale + shadow increase for interactivity

### Inquiry Form Component
- Structured multi-field form in contained card
- Fields: Name, Phone, Region (dropdown), Land size, Message (textarea)
- Field styling: Border focus states, clear labels above inputs
- Large, prominent submit button
- Success state: Confirmation message with next steps
- Form placement: Dedicated section + available in floating button

### Floating CTA Button
- Fixed position: bottom-right (right-8 bottom-8)
- Pill-shaped button with phone icon + text
- Pulsing animation for attention
- Opens inquiry form modal or scrolls to form section
- z-index ensures always visible

### Trust Elements
- Logo grid section: "협력사" or "미디어 보도"
- Testimonial cards: Quote + Company name + Representative
- Stats counters: Animated numbers on scroll into view

### Footer
- Four-column layout: Company info, Solutions, Support, Contact
- Social media icons
- Business registration details
- Newsletter signup field

## Component Patterns

**Buttons:**
- Primary: Solid fill, rounded-lg, px-8 py-4, font-semibold
- Secondary: Outline style, same padding
- Text links: Underline on hover, arrow icon suffix

**Cards:**
- Rounded corners: rounded-xl
- Padding: p-6 md:p-8
- Shadow: shadow-lg for elevation
- Border: Subtle 1px border for definition

**Icons:**
- Use Heroicons or Lucide React for consistency
- Icon size: 24-32px for feature cards, 20px for inline usage
- Accompany all solution features with relevant icons

## Images Strategy

**Required Images:**

1. **Hero Background (Critical):**
   - Modern unmanned car wash facility exterior/interior
   - Or: Sleek kiosk hardware in operation
   - High quality, professional photography
   - Aspect: Wide landscape, suitable for full-width hero

2. **Solution Section (3 images):**
   - Kiosk hardware close-up with UI display
   - SaaS dashboard screenshot showing management interface
   - Consulting/installation process photo (team working on site)

3. **Portfolio Section (6-9 images):**
   - Real installation photos from different locations
   - Show variety: urban, suburban, different facility sizes
   - Professional day-time photography

4. **Trust Building:**
   - Team photo or facilities photo for "About" section
   - Optional: Award badges, certification logos

**Image Treatment:**
- All photos: Professional quality, consistent color grading
- Use Next.js Image component with blur placeholders
- Aspect ratios maintained for visual consistency

## Layout Specifications

**Page Structure (Single-page scroll):**

1. Hero Section (85vh)
2. Solutions Overview (3-column cards)
3. Why Wizley (Features with alternating text/image layout)
4. Portfolio/Success Cases (Grid gallery)
5. Process/How It Works (Step-by-step visual timeline)
6. Inquiry Form (Centered, prominent)
7. Footer (Rich with links and info)

**Responsive Breakpoints:**
- Mobile: Single column, stacked layout
- Tablet (768px+): 2-column grids where applicable
- Desktop (1024px+): Full 3-column layouts, hero at optimal height

## Animations

**Minimal, purposeful animations only:**
- Scroll-triggered fade-in for sections (opacity + translateY)
- Card hover elevations (transform: translateY(-4px))
- Number counters in stats section
- Smooth scroll for anchor navigation
- Form validation feedback (shake on error)

**No:** Excessive parallax, complex scroll effects, distracting motion

## Accessibility

- Form inputs: Proper labels, error states clearly visible
- Contrast ratios meet WCAG AA standards
- Focus states: Clear outline on all interactive elements
- Alt text for all images (especially portfolio photos)
- Keyboard navigation fully supported

---

**Output Expectations:**
Create a professional, trustworthy B2B website that positions Wizley as the premium unmanned car wash solution provider. Every design decision should reinforce credibility while making the path to consultation request obvious and frictionless. The visual language should mirror the sophistication of the hardware/software solutions being sold.