# ERTH | إرث - Project Guidelines

## Project Overview
ERTH is a National Knowledge Marketplace (bilingual RTL/LTR platform) connecting retired professionals with organizations for short-term contracts. 

## Technology Stack
- **Framework**: Next.js 14 (App Router)
- **Styling**: Vanilla CSS Modules with custom CSS variables
- **Language**: JavaScript (React)

## Design Guidelines
When working on this project, adhere strictly to these rules:
1. **Typography**: Use the `GE Thuluth` font for `.display-heading` and `Tajawal/Cairo` for body text. 
2. **Colors**: 
   - Primary: Teal (`#25857e`), Blue (`#1a506b`)
   - Accent: Gold (`#c19b52`)
3. **Aesthetic**: Maintain a premium, government-grade feel. Use `.glass` for glassmorphism panels, soft shadows (`var(--shadow-sm/md/lg)`), and smooth hover animations (`transform: translateY(-5px)`). 
4. **Bilingual Support**: All new text must be added to the bilingual dictionary in the respective component or `LanguageContext` using Arabic and English.
5. **No Placeholders**: If using images, use professional placeholders or actual project assets (`/logo.png`, `/hero-bg.png`).

Always maintain the existing architectural structure and CSS class conventions when modifying or adding pages.
