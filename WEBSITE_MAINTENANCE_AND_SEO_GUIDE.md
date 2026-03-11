# QuickLearn Systems — Website Maintenance & SEO Guide

**Prepared for:** QuickLearn Systems Client Team & SEO Team
**Project:** QLS-FINAL (quicklearnsys.com)
**Framework:** Next.js 15 (App Router)
**Last Updated:** February 2026

---

## Table of Contents

1. [Tech & Text Architecture Overview](#1-tech--text-architecture-overview)
2. [How Course Pages Are Built](#2-how-course-pages-are-built)
3. [Where Text Lives — Content Editing Map](#3-where-text-lives--content-editing-map)
4. [SEO Architecture](#4-seo-architecture)
5. [Step-by-Step SEO Editing Guide](#5-step-by-step-seo-editing-guide)
6. [Adding or Updating a Course Page](#6-adding-or-updating-a-course-page)
7. [Contact Info & Global Site Settings](#7-contact-info--global-site-settings)
8. [Images & Media](#8-images--media)
9. [Known SEO Gaps & Recommended Actions](#9-known-seo-gaps--recommended-actions)
10. [Quick Reference Cheatsheet](#10-quick-reference-cheatsheet)

---

## 1. Tech & Text Architecture Overview

### What the Site Is Built With

The site is a **Next.js 15** application using the **App Router** pattern. This is a modern React-based framework. You do not need to know how to code to follow this guide — the steps below identify exactly which files to edit and what to change.

| Layer | Technology | What It Controls |
|-------|-----------|-----------------|
| Page structure | Next.js 15 App Router | URL routes, page rendering |
| Styling | Tailwind CSS 4 | Colors, spacing, fonts, layout |
| Animations | Framer Motion, GSAP | Scroll effects, transitions |
| Email (contact form) | Nodemailer + Gmail SMTP | Contact form submissions |
| Chat widget | AnythingLLM | Live chat on every page |
| Icons | Lucide React, MUI Icons | UI icons throughout site |

### How the File System Maps to URLs

Every folder inside `src/app/` becomes a URL on the website:

```
src/app/page.js                → quicklearnsys.com/
src/app/Contact/page.js        → quicklearnsys.com/Contact
src/app/PSPO1/page.js          → quicklearnsys.com/PSPO1
src/app/ITL4Management/page.js → quicklearnsys.com/ITL4Management
src/app/PMP/page.js            → quicklearnsys.com/PMP
```

So if you want to edit the content of a course page, find the folder with the course's short name inside `src/app/`, then open the `page.js` file inside it.

### Global Elements (Appear on Every Page)

These are components that render on all pages. To change them, edit the listed file:

| Element | File to Edit |
|---------|-------------|
| Top navigation bar | `src/components/Header.js` |
| Footer | `src/components/Footer.js` |
| Live chat widget | `src/app/layout.js` |
| Phone numbers, email in header | `.env` file (see Section 7) |
| Site title fallback (used if a page has no title) | `src/app/layout.js` |

---

## 2. How Course Pages Are Built

There are **two types** of course pages on this site. It's important to understand which type a course uses before editing it.

---

### Type A — Modern Template Pages (Most Courses)

These are the majority of course pages. They follow a clean, consistent structure:

**File structure:**
```
src/app/{CourseName}/page.js
```

**Inside the file, there are two main sections:**

**Section 1 — SEO Metadata (top of file)**
```js
export const metadata = {
  title: "Course Title | QuickLearn",
  description: "Short description of the course for Google search results.",
  keywords: "keyword1, keyword2, keyword3",
  openGraph: {
    title: "Course Title for Social Sharing",
    description: "Description shown when shared on LinkedIn, Facebook, etc.",
    images: ["/course-image.jpg"],
  },
};
```

**Section 2 — Course Content (courseData object)**
```js
const courseData = {
  title: "Full Course Name",
  subtitle: "One-line tagline shown under the title",
  backgroundImage: "/image-filename.jpg",
  overview: [
    "First paragraph of the course overview...",
    "Second paragraph...",
    "Third paragraph..."
  ],
  courseOutline: [
    "Module 1: Introduction",
    "Module 2: Core Concepts",
    ...
  ],
  learningObjectives: [
    "Understand the core principles...",
    "Apply the framework in real scenarios...",
    ...
  ],
  targetGroup: [
    "IT Professionals",
    "Project Managers",
    ...
  ],
  examDetails: [
    "Exam format: 40 multiple choice questions",
    "Duration: 60 minutes",
    ...
  ],
};
```

**Examples of Type A pages:**
- `src/app/ACP/page.js`
- `src/app/ITL4Management/page.js`
- `src/app/SAFeScrumMaster/page.js`
- `src/app/PMP/page.js`
- Most of the 70+ course pages

---

### Type B — Old Hardcoded Pages (Legacy)

A small number of older course pages (including PSPO1, CSM, PScrumM1) were built with all text written directly into the page as HTML/JSX code. These pages:

- Do **not** have a `courseData` object
- Do **not** have a `metadata` export (meaning they have **no SEO tags**)
- Require careful in-line editing

**To identify a Type B page:** Open the file and check the first line. If it says `"use client"` and there is no `export const metadata` block near the top, it is a Type B page.

> **Recommendation:** Type B pages should be migrated to Type A format to fix their missing SEO metadata. See Section 9 for details.

---

## 3. Where Text Lives — Content Editing Map

Use this map to find and edit any piece of content on the site.

### Course Page Text

| Content | Where to Edit |
|---------|--------------|
| Course page title (SEO) | `src/app/{CourseName}/page.js` → `metadata.title` |
| Meta description (Google snippet) | `src/app/{CourseName}/page.js` → `metadata.description` |
| Keywords | `src/app/{CourseName}/page.js` → `metadata.keywords` |
| Social share title | `src/app/{CourseName}/page.js` → `metadata.openGraph.title` |
| Social share description | `src/app/{CourseName}/page.js` → `metadata.openGraph.description` |
| Social share image | `src/app/{CourseName}/page.js` → `metadata.openGraph.images[0]` |
| Hero title (shown on page) | `src/app/{CourseName}/page.js` → `courseData.title` |
| Hero subtitle | `src/app/{CourseName}/page.js` → `courseData.subtitle` |
| Hero background image | `src/app/{CourseName}/page.js` → `courseData.backgroundImage` |
| Overview paragraphs | `src/app/{CourseName}/page.js` → `courseData.overview` (array) |
| Course outline bullets | `src/app/{CourseName}/page.js` → `courseData.courseOutline` (array) |
| Learning objectives bullets | `src/app/{CourseName}/page.js` → `courseData.learningObjectives` (array) |
| Target audience bullets | `src/app/{CourseName}/page.js` → `courseData.targetGroup` (array) |
| Exam details bullets | `src/app/{CourseName}/page.js` → `courseData.examDetails` (array) |

### Global / Shared Text

| Content | Where to Edit |
|---------|--------------|
| Site-wide fallback title | `src/app/layout.js` → `metadata.title` |
| Site-wide fallback description | `src/app/layout.js` → `metadata.description` |
| Homepage content | `src/app/page.js` |
| Contact page title/description | `src/app/Contact/page.js` → `metadata` |
| Contact form fields/text | `src/components/Contactus.js` |
| Navigation menu items | `src/components/Header.js` |
| Footer links and text | `src/components/Footer.js` |
| Company phone numbers | `.env` → `NEXT_PUBLIC_PHONE_PRIMARY`, `NEXT_PUBLIC_PHONE_SECONDARY` |
| Company email (in header) | `.env` → `NEXT_PUBLIC_CONTACT_EMAIL` |
| Company name | `.env` → `NEXT_PUBLIC_COMPANY_NAME` |

---

## 4. SEO Architecture

### How SEO Works in This Site

Next.js 15 handles SEO through a built-in metadata system. Each page exports a `metadata` object, and Next.js automatically renders the correct HTML `<meta>` tags in the page `<head>`.

**What gets generated from the metadata object:**

```html
<!-- From metadata.title -->
<title>ITIL 4 Management Training | QuickLearn</title>

<!-- From metadata.description -->
<meta name="description" content="Master ITIL 4..." />

<!-- From metadata.keywords -->
<meta name="keywords" content="ITIL 4, IT service management..." />

<!-- From metadata.openGraph -->
<meta property="og:title" content="..." />
<meta property="og:description" content="..." />
<meta property="og:image" content="https://quicklearnsys.com/image.jpg" />
```

### The Metadata Hierarchy

```
src/app/layout.js        ← Site-wide fallback (used if a page has no metadata)
    ↓
src/app/{page}/page.js   ← Page-specific metadata (overrides the fallback)
```

If a course page has its own `export const metadata`, that takes priority. If it doesn't (Type B pages), Google will see the generic site-wide title and description — which hurts that page's ranking.

### The `metadataBase` Setting

Located in `src/app/layout.js`, this line:
```js
metadataBase: new URL('https://quicklearnsys.com'),
```
...tells Next.js the base URL of the site. This is important for Open Graph image URLs — without it, images won't show correctly when pages are shared on social media.

---

## 5. Step-by-Step SEO Editing Guide

Follow these steps whenever you need to update SEO content on the site.

---

### Step 1 — Identify the Course URL Slug

The URL slug is the part of the URL after the domain. For example:
- `quicklearnsys.com/PSPO1` → slug is `PSPO1`
- `quicklearnsys.com/ITL4Management` → slug is `ITL4Management`

---

### Step 2 — Open the Correct File

Navigate to:
```
src/app/{slug}/page.js
```

Example: To edit ITIL 4 Management, open:
```
src/app/ITL4Management/page.js
```

---

### Step 3 — Edit the Metadata Block

Find the `export const metadata` section near the top of the file (before any `function` or `const courseData`).

**Editing the title:**
```js
// BEFORE
title: "ITIL 4 Specialist: Acquiring & Managing Cloud Services | Edura",

// AFTER (example)
title: "ITIL 4 ACP Training | Cloud Services Certification | QuickLearn",
```

**Title best practices:**
- Keep it under **60 characters**
- Include the primary keyword near the beginning
- Include the brand name at the end (e.g., `| QuickLearn`)
- Make it unique — no two pages should have the same title

---

**Editing the meta description:**
```js
// BEFORE
description: "Master ITIL 4 Acquiring and Managing Cloud Services to build cloud strategies...",

// AFTER (example)
description: "Get ITIL 4 ACP certified with QuickLearn. Learn cloud governance, supplier management, and service value optimization. Instructor-led training available.",
```

**Description best practices:**
- Keep it between **140–160 characters**
- Include the primary keyword naturally
- Add a call to action (e.g., "Enroll today", "Get certified with QuickLearn")
- Do not duplicate descriptions across pages

---

**Editing keywords:**
```js
keywords: "ITIL 4 ACP, ITIL cloud services training, cloud governance certification, ITIL specialist, QuickLearn ITIL",
```

**Keywords best practices:**
- Include 5–10 keywords
- Separate with commas
- Prioritize long-tail phrases (e.g., "ITIL 4 foundation training Hyderabad") over generic terms
- Include location-based keywords if the course targets specific regions

---

**Editing Open Graph tags (social sharing):**
```js
openGraph: {
  title: "ITIL 4 ACP Certification Training | QuickLearn",
  description: "Become an ITIL 4 cloud expert. Join our expert-led training and pass the ACP certification exam.",
  images: ["/AcquiringManagingCloud.jpg"],
},
```

**Open Graph best practices:**
- The `og:title` and `og:description` can differ slightly from the SEO title/description — they are shown on LinkedIn, WhatsApp, Facebook previews
- The image should be at least **1200×630 pixels**
- The image path must match a file in the `/public/` folder

---

### Step 4 — Edit Course Content (courseData)

Find the `const courseData = { ... }` block below the metadata.

**To update the overview paragraphs:**
```js
overview: [
  "ITIL 4 ACP helps organizations manage cloud services effectively within the ITIL framework.",
  "This course covers supplier selection, cost optimization, and risk management in cloud environments.",
  "Participants will learn to align cloud strategy with business objectives."
],
```
Each string in the array becomes a separate paragraph on the page.

**To update bullet point lists:**
```js
learningObjectives: [
  "Understand the key concepts of cloud service management",
  "Apply ITIL 4 practices to cloud governance",
  "Evaluate and select cloud service providers",
  "Manage cloud-related risks and compliance"
],
```
Each string becomes one bullet point.

---

### Step 5 — Save and Deploy

After editing:
1. Save the file
2. Run `npm run build` (or notify the developer to rebuild and deploy)
3. Verify changes on the live site and using Google Search Console

---

### Step 6 — Verify with SEO Tools

After deployment, verify each updated page using:
- **Google Search Console** — check indexing status and any metadata warnings
- **Google Rich Results Test** (for pages with structured data)
- **Open Graph Debugger** (LinkedIn Post Inspector or Facebook Sharing Debugger) — check social preview
- **PageSpeed Insights** — check Core Web Vitals

---

## 6. Adding or Updating a Course Page

### Adding a New Course Page

1. Create a new folder inside `src/app/` with the course slug as the folder name:
   ```
   src/app/NewCourseName/
   ```

2. Create a `page.js` file inside it using this template:

```js
import CoursePageTemplate from "@/components/CoursePageTemplate";
import Headers from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Course Full Name | QuickLearn",
  description: "Write a 150-character description of the course for Google.",
  keywords: "keyword 1, keyword 2, keyword 3, keyword 4",
  openGraph: {
    title: "Course Full Name | QuickLearn",
    description: "Short description for social media sharing.",
    images: ["/your-course-image.jpg"],
  },
};

const courseData = {
  title: "Course Full Name",
  subtitle: "One-line course tagline here.",
  backgroundImage: "/your-course-image.jpg",
  overview: [
    "First paragraph about the course...",
    "Second paragraph with more detail...",
    "Third paragraph closing the overview..."
  ],
  courseOutline: [
    "Module 1: Introduction",
    "Module 2: Core Framework",
    "Module 3: Practical Application",
    "Module 4: Exam Preparation"
  ],
  learningObjectives: [
    "Understand the foundational principles",
    "Apply best practices in real-world scenarios",
    "Prepare for the certification exam"
  ],
  targetGroup: [
    "IT Professionals",
    "Project Managers",
    "Team Leads",
    "Anyone pursuing the certification"
  ],
  examDetails: [
    "Format: Multiple choice",
    "Duration: 60 minutes",
    "Pass mark: 65%",
    "Delivered by: PeopleCert / Axelos (or relevant body)"
  ],
};

export default function NewCoursePage() {
  return (
    <>
      <Headers />
      <CoursePageTemplate courseData={courseData} />
      <Footer />
    </>
  );
}
```

3. Upload the course image to `/public/` and reference it in `backgroundImage` and `openGraph.images`

4. Add the course to the navigation menu in `src/components/Header.js`

---

### Updating an Existing Course Page

1. Open `src/app/{CourseName}/page.js`
2. Edit the `metadata` object for SEO changes
3. Edit the `courseData` object for content changes
4. Save and redeploy

---

## 7. Contact Info & Global Site Settings

Phone numbers, email addresses, and the company name shown in the header and footer are stored in the `.env` file at the root of the project (not inside `src/`).

**File location:** `.env`

```
NEXT_PUBLIC_PHONE_PRIMARY=9100195152
NEXT_PUBLIC_PHONE_SECONDARY=9703704495
NEXT_PUBLIC_CONTACT_EMAIL=training@quicklearnsys.com
NEXT_PUBLIC_WHATSAPP_NUMBER=919100195152
NEXT_PUBLIC_COMPANY_NAME=QuickLearn Systems
```

> **Important:** After editing `.env`, the site must be **rebuilt and redeployed** for changes to take effect. These values are baked into the build at compile time.

**Email routing for contact form submissions** is also in `.env`:
```
CONTACT_EMAIL=sujeeth@quantjo.com
```
This is the address that receives contact form submissions from the website.

---

## 8. Images & Media

### Where Images Are Stored

All images are stored in the `/public/` folder at the root of the project. They are referenced in code using a leading slash:

```js
backgroundImage: "/PMPC.jpg"
// This refers to the file at: /public/PMPC.jpg
```

### Adding a New Image

1. Copy the image file into the `/public/` folder
2. Reference it in the page file using `/filename.jpg`

### Image Naming Convention

Use descriptive names without spaces. Examples:
- `/ITIL4Foundation.jpg`
- `/SAFe-Scrum-Master.jpg`
- `/PMP-Certification.jpg`

### Recommended Image Specifications

| Use Case | Recommended Size | Format |
|----------|-----------------|--------|
| Course hero background | 1920×1080 px | JPG |
| Open Graph / social share | 1200×630 px | JPG or PNG |
| Course card thumbnail | 800×600 px | JPG |
| Company/client logos | 400×200 px | PNG (transparent) |

---

## 9. Known SEO Gaps & Recommended Actions

The following issues were identified during the architecture review. These should be addressed by the development and SEO teams.

---

### Gap 1 — Missing Metadata on Legacy Course Pages (HIGH PRIORITY)

**Issue:** Several older course pages (e.g., PSPO1, CSM, PScrumM1) do not have an `export const metadata` block. These pages currently show the generic site-wide title in Google search results, making them nearly invisible to people searching for those specific courses.

**Pages affected:** Any course page where the file starts with `"use client"` and has no `export const metadata` block.

**Action:** For each affected page, either:
- (Preferred) Migrate the page to the modern Type A template format and add proper metadata
- (Quick fix) Ask the developer to add a metadata export to the existing file

---

### Gap 2 — No Sitemap.xml (HIGH PRIORITY)

**Issue:** The site has no `sitemap.xml` file. This means Google must discover all 77+ course pages through crawling alone, which can be slow and incomplete.

**Action:** Generate a sitemap listing all course URLs and submit it to Google Search Console. Next.js can auto-generate this — ask the developer to implement `src/app/sitemap.js`.

---

### Gap 3 — No Robots.txt (MEDIUM PRIORITY)

**Issue:** There is no `robots.txt` file, which tells search engine crawlers which pages to index or ignore.

**Action:** Ask the developer to add `src/app/robots.js` (Next.js format) with at least:
```
User-agent: *
Allow: /
Sitemap: https://quicklearnsys.com/sitemap.xml
```

---

### Gap 4 — Structured Data Only on PMP Page (MEDIUM PRIORITY)

**Issue:** The PMP course page is the only page with Schema.org `Course` structured data (JSON-LD). Structured data helps Google display rich snippets in search results (e.g., course duration, provider, price).

**Action:** Add Schema.org `Course` markup to all major course pages. The PMP page (`src/app/PMP/page.js`) can be used as a reference template.

---

### Gap 5 — Missing Canonical Tags (MEDIUM PRIORITY)

**Issue:** No pages have explicit canonical `<link>` tags. If the same content is ever accessible at multiple URLs (e.g., with/without trailing slash, HTTP vs HTTPS), it could cause duplicate content penalties.

**Action:** Add `alternates.canonical` to the metadata of each course page:
```js
export const metadata = {
  title: "...",
  alternates: {
    canonical: "https://quicklearnsys.com/CourseName",
  },
  // ... rest of metadata
};
```

---

### Gap 6 — Homepage Has No Page-Specific Metadata (LOW PRIORITY)

**Issue:** `src/app/page.js` (the homepage) does not export its own `metadata` object. It relies on the generic fallback from `layout.js`.

**Action:** Add a metadata export to `src/app/page.js` with homepage-specific title, description, and Open Graph tags.

---

### Gap 7 — Some Open Graph Images Are Missing (LOW PRIORITY)

**Issue:** Some course pages either have no OpenGraph image or use a generic image. When shared on LinkedIn or WhatsApp, these pages will appear without a compelling preview image.

**Action:** Ensure every course page has a relevant, high-quality image (1200×630px minimum) referenced in `metadata.openGraph.images`.

---

## 10. Quick Reference Cheatsheet

### To Edit an Existing Course Page

| Task | File | What to Change |
|------|------|---------------|
| Change Google title | `src/app/{Slug}/page.js` | `metadata.title` |
| Change Google description | `src/app/{Slug}/page.js` | `metadata.description` |
| Change keywords | `src/app/{Slug}/page.js` | `metadata.keywords` |
| Change social share preview | `src/app/{Slug}/page.js` | `metadata.openGraph` |
| Change hero title on page | `src/app/{Slug}/page.js` | `courseData.title` |
| Change course overview text | `src/app/{Slug}/page.js` | `courseData.overview` |
| Change course outline | `src/app/{Slug}/page.js` | `courseData.courseOutline` |
| Change learning objectives | `src/app/{Slug}/page.js` | `courseData.learningObjectives` |
| Change target audience | `src/app/{Slug}/page.js` | `courseData.targetGroup` |
| Change exam info | `src/app/{Slug}/page.js` | `courseData.examDetails` |
| Change hero image | `src/app/{Slug}/page.js` | `courseData.backgroundImage` |

### To Edit Global Site Elements

| Task | File |
|------|------|
| Change header navigation | `src/components/Header.js` |
| Change footer content | `src/components/Footer.js` |
| Change phone/email/WhatsApp | `.env` (then redeploy) |
| Change site-wide fallback title | `src/app/layout.js` |

### Metadata Character Limits

| Field | Limit | Notes |
|-------|-------|-------|
| `title` | 50–60 characters | Truncated beyond 60 in Google |
| `description` | 140–160 characters | Truncated beyond 160 in Google |
| `keywords` | No strict limit | Keep focused (5–10 terms) |
| `openGraph.title` | 40–90 characters | Varies by platform |
| `openGraph.description` | 200–300 characters | Varies by platform |

---

*This document was prepared based on a technical review of the QLS-FINAL codebase. For questions about implementation of the recommended changes, contact the development team.*
