# Flightlink Website — Project Overview

Official website for **Flightlink**, a domestic/regional airline operating in Tanzania and Kenya.

**Live URL:** https://flightlink.co.tz

---

## Tech Stack

### Core

| Layer | Technology | Version |
|-------|-----------|---------|
| Framework | Next.js (App Router) | 16.0.7 |
| Language | TypeScript | 5 |
| Runtime | React | 19.2.1 |

### Styling & UI

| Tool | Purpose | Version |
|------|---------|---------|
| Tailwind CSS | Utility-first styling | 3.4.1 |
| PostCSS | CSS processing | 8 |
| Motion | Animations | 12.4.3 |
| Swiper | Carousels & sliders | 11.2.5 |
| Tabler Icons React | Icon library | 3.30.0 |
| React Select | Custom dropdowns | 5.10.0 |
| React Fast Marquee | Scrolling marquee | 1.6.5 |

### Backend & Data

| Tool | Purpose | Version |
|------|---------|---------|
| Firebase | Backend-as-a-Service | 11.4.0 |
| — Firestore | Database | — |
| — Firebase Auth | Authentication | — |
| — Firebase Storage | File/image storage | — |
| TanStack React Query | Server state management | 5.67.1 |

### Forms & Communication

| Tool | Purpose | Version |
|------|---------|---------|
| EmailJS | Send emails from browser | 4.4.1 |
| React International Phone | Phone number input | 4.5.0 |

### Media & Documents

| Tool | Purpose | Version |
|------|---------|---------|
| Blurhash + React Blurhash | Progressive image loading | 2.0.5 / 0.3.0 |
| html2canvas | Canvas screenshot rendering | 1.4.1 |
| jsPDF | PDF generation | 3.0.0 |

### SEO & Analytics

| Tool | Purpose |
|------|---------|
| Next Sitemap | Auto-generates sitemap & robots.txt from Firestore |
| Google Tag Manager | Analytics (GTM-WQNF6P59) |
| Next.js Metadata API | Per-page SEO, OpenGraph images |

### Utilities

| Tool | Purpose | Version |
|------|---------|---------|
| UUID | Unique ID generation | 11.1.0 |
| xml2js | XML to JSON parsing | 0.6.2 |

---

## Project Structure

```
flighlink-website/
├── app/                    # Next.js App Router (33 route groups, 39 pages)
├── components/             # 77 reusable React components (feature-organized)
├── services/               # 10 Firebase/Firestore data-fetching services
├── types/                  # TypeScript interfaces for data models
├── hooks/                  # Custom React hooks
├── utils/                  # Constants and utility functions
├── config/                 # Firebase configuration
├── public/                 # Static assets (images, icons, PDFs)
└── fonts/                  # Custom font files (Soleto Trial)
```

---

## Key Pages & Features

### User-Facing Sections

- **Home** — Hero banner, flight booking widget (iframe to booking.flightlink.co.tz), route map
- **Destinations** — Browse & detail pages for Tanzania & Kenya destinations
- **Fleet** — Aircraft listings with technical specs
- **Travel Information:**
  - Flight schedules & fares
  - Baggage policies (general & cargo)
  - Check-in & airport procedures
  - Dangerous goods, electronic devices, exit row seating
  - Wheelchair & accessibility services
  - Sporting equipment & hunting equipment policies
- **Services & Products:**
  - Charter flight booking
  - Corporate accounts
  - Flightlink mobile app promotion
  - Travel agent partnerships
  - In-flight experience & magazine (9 issues)
  - Premium lounge access
- **Company:**
  - About us, team/staff directory
  - Careers (job applications with EmailJS)
  - Contact page with FAQs
  - Terms & conditions, privacy policy
- **Blog** — Dynamic blog posts with tags
- **News Strips** — Promotional banners with expiration dates (from Firestore)

### Special Integrations

- **Booking Widget** — Embedded iframe to external booking system
- **Google Maps** — Maps component on homepage
- **WhatsApp Button** — Floating contact button
- **PDF Viewer** — In-browser document viewing
- **Blur Hash Loading** — Progressive image loading with blur-up effect
- **In-flight Magazine** — Multi-issue PDF magazine viewer

---

## Architecture Patterns

### State Management
- **React Query** for all server/async state (Firestore queries)
- Native React hooks for local component state

### Data Layer
- Service pattern in `/services` — each file wraps Firestore queries for a data type
- Supports single doc lookups, bulk fetches, and slug-based lookups

### Component Organization
- Feature-based folders: `home/`, `destination/`, `fleet/`, `contact/`, etc.
- Shared/common components: `Header`, `Footer`, modals, popups

### SEO
- Per-page metadata via Next.js Metadata API
- Canonical URLs & OpenGraph images configured
- Dynamic sitemap generation pulls from Firestore (destinations, fleet, blogs)

---

## Configuration Highlights

### Tailwind Custom Theme (`tailwind.config.ts`)
- **Primary color:** `#D72A27` (red)
- **Secondary color:** `#334A91` (blue)
- **Custom font:** `soleto` (Soleto Trial)
- Custom shadows, gradients, and breakpoints

### Firebase (`config/firebase.js`)
- Project ID: `flightlink-0`
- Uses both compat and modular Firebase SDK approaches

### Sitemap (`next-sitemap.config.js`)
- Base URL: `https://flightlink.co.tz`
- Dynamic routes from Firestore: destinations (daily), fleet (weekly), blogs (monthly)
- Auto-generates `robots.txt`

---

## Data Models

| Model | Description |
|-------|-------------|
| Destinations | Location data, best times to visit, things to do, SEO metadata |
| Fleets | Aircraft with technical specs |
| Blogs | Posts with tags, slugs, and metadata |
| News Strips | Promotional content with expiration dates |
| Contact Enquiries | Form submissions |
| Career Applications | Job application data |
| Charter Requests | Charter flight booking requests |
| Settings | Configurable site content (banners, images, offers) |
