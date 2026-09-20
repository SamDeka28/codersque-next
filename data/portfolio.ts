export type PortfolioCategory = "Web Development" | "Mobile Development" | "E-commerce"

export type PortfolioProject = {
  slug: string
  title: string
  category: PortfolioCategory
  industry: string
  description: string
  overview: string
  challenge: string
  solution: string
  useCases: string[]
  capabilities: string[]
  technologies: string[]
  image: string
  screenshots?: { src: string; caption: string }[]
  appScreens?: string[]
  liveUrl?: string
  links?: { label: string; href: string }[]
  featured?: boolean
  homepage?: boolean
}

export const portfolioProjects: PortfolioProject[] = [
  {
    slug: "naia",
    title: "Naia",
    category: "E-commerce",
    industry: "Fashion marketplace",
    description: "Discovery marketplace for emerging designers and a more considered way to shop unique pieces.",
    overview:
      "Naia needed a storefront that felt like a gallery, not a discount grid. We designed designer discovery, product storytelling, and checkout so independent makers can sell without looking like a generic theme.",
    challenge:
      "Emerging designers were hard to find in a noisy catalog, and the buying path did not match the quality of the pieces.",
    solution:
      "We built a fashion marketplace with stronger search and merchandising, a calmer product page, and Stripe-backed checkout that keeps the editorial tone through purchase.",
    useCases: [
      "Browse designers and collections instead of a flat product dump",
      "Shop unique pieces with a clearer size, story, and shipping path",
      "Support independent makers with a storefront they can actually run",
    ],
    capabilities: ["Designer discovery", "Editorial product pages", "Stripe checkout"],
    technologies: ["Next.js", "Stripe", "Search"],
    image: "/portfolio/mockups/naia.png",
    screenshots: [{ src: "/portfolio/raw/naia.png", caption: "Homepage" }],
    liveUrl: "https://naia.shop/",
    featured: true,
    homepage: true,
  },
  {
    slug: "plah",
    title: "Plah",
    category: "Mobile Development",
    industry: "Parenting · Social",
    description: "Helps parents find local families, share availability, and schedule playdates without another group chat.",
    overview:
      "Plah is a privacy-first community product for modern parenting. We delivered the marketing site plus iOS and Android apps with tap-to-play availability, age and interest matching, and secure chat.",
    challenge:
      "Parents were coordinating playdates across group chats, with no shared view of who was free, nearby, or a good match for their kids.",
    solution:
      "We shipped a cross-platform app and marketing site so families can publish weekly availability, match on age and interests, and book playdates without leaking a phone number first.",
    useCases: [
      "Find local families whose kids are in a similar age range",
      "Share weekly play windows instead of texting back and forth",
      "Schedule a playdate with location, activity, and the right people",
    ],
    capabilities: ["Tap-to-play availability", "Age and interest matching", "iOS, Android, and marketing site"],
    technologies: ["iOS", "Android", "Next.js", "Chat"],
    image: "/portfolio/mockups/plah.png",
    screenshots: [{ src: "/portfolio/raw/plah.png", caption: "Marketing site" }],
    appScreens: [
      "/portfolio/apps/plah-1.jpg",
      "/portfolio/apps/plah-2.jpg",
      "/portfolio/apps/plah-3.jpg",
      "/portfolio/apps/plah-4.jpg",
      "/portfolio/apps/plah-5.jpg",
      "/portfolio/apps/plah-6.jpg",
    ],
    liveUrl: "https://plahplaydates.com/",
    links: [
      { label: "Website", href: "https://plahplaydates.com/" },
      { label: "App Store", href: "https://apps.apple.com/us/app/plah-plan-kids-playdates/id6755757284" },
      { label: "Google Play", href: "https://play.google.com/store/apps/details?id=com.plahdate.app&hl=en_IN" },
    ],
    featured: true,
    homepage: true,
  },
  {
    slug: "yourszn",
    title: "YourSZN",
    category: "Mobile Development",
    industry: "Fashion · Colour analysis",
    description:
      "Seasonal colour analysis and styling, with online bookings on the web and a native app for palette-matched shopping.",
    overview:
      "YourSZN helps people find the colours that actually work on them. We built the marketing site, the analysis booking funnel, and the iOS and Android app that turns a personal palette into shopping and outfit inspiration, with premium subscriptions.",
    challenge:
      "Colour analysis lived in a booking form, then stopped. There was no product that carried a client's palette into daily shopping.",
    solution:
      "We connected the website booking funnel to a native app: sign-in, season-curated catalogues, outfit inspiration, and subscriptions that keep the palette useful after the session.",
    useCases: [
      "Book an online colour analysis from the marketing site",
      "Shop clothing, makeup, and accessories filtered to a season",
      "Keep a personal lookbook instead of guessing in store lighting",
    ],
    capabilities: ["Online colour analysis funnel", "Season-curated shopping", "Premium subscriptions"],
    technologies: ["iOS", "Android", "Shopify", "Next.js", "Subscriptions"],
    image: "/portfolio/mockups/yourszn.png",
    screenshots: [
      { src: "/portfolio/raw/yourszn.png", caption: "Marketing site" },
      { src: "/portfolio/raw/yourszn-2.png", caption: "Online colour analysis" },
      { src: "/portfolio/raw/yourszn-3.png", caption: "Mobile app landing page" },
    ],
    appScreens: [
      "/portfolio/apps/yourszn-1.jpg",
      "/portfolio/apps/yourszn-2.jpg",
      "/portfolio/apps/yourszn-3.jpg",
      "/portfolio/apps/yourszn-4.jpg",
      "/portfolio/apps/yourszn-5.jpg",
      "/portfolio/apps/yourszn-6.jpg",
    ],
    liveUrl: "https://www.yourszn.com.au/",
    links: [
      { label: "Website", href: "https://www.yourszn.com.au/" },
      { label: "App Store", href: "https://apps.apple.com/au/app/yourszn/id6771676470" },
      { label: "Google Play", href: "https://play.google.com/store/apps/details?id=com.yourszn.app&hl=en" },
    ],
    featured: true,
    homepage: true,
  },
  {
    slug: "skoop",
    title: "Skoop",
    category: "Web Development",
    industry: "Sales · LinkedIn outreach",
    description:
      "Chrome extension and dashboard for instant video, AI-assisted replies, and a simple CRM across LinkedIn, Gmail, and more.",
    overview:
      "Skoop is built for salespeople who are tired of looking like automation. We shipped the marketing site, onboarding, billing, and the Chrome extension that records candid video, voice memos, and AI replies without leaving LinkedIn or Gmail.",
    challenge:
      "Text-only outreach on LinkedIn was getting ignored, and recording a personal video inside the native tools was slow and clumsy.",
    solution:
      "We built a Chromium extension that sits on top of LinkedIn, Gmail, Microsoft 365, and social inboxes, plus a dashboard for templates, CRM follow-up, subscriptions, and affiliate flows.",
    useCases: [
      "Send a short personalized video instead of a cold DM",
      "Reply to posts and comments with saved prompts and AI assist",
      "Keep a lightweight CRM of conversations without leaving the browser",
    ],
    capabilities: [
      "Chrome extension for LinkedIn, Gmail, and Microsoft 365",
      "Instant video, voice memos, and template messages",
      "Simple CRM, subscriptions, and affiliate dashboard",
    ],
    technologies: ["Chrome Extension", "Next.js", "Stripe", "AI assist"],
    image: "/portfolio/mockups/skoop.png",
    screenshots: [
      { src: "/portfolio/raw/skoop.png", caption: "Homepage" },
      { src: "/portfolio/raw/skoop-2.png", caption: "Pricing" },
      { src: "/portfolio/raw/skoop-steps.png", caption: "How a Skoop video is sent" },
      { src: "/portfolio/raw/skoop-preview.png", caption: "Product preview" },
    ],
    liveUrl: "https://www.skoopapp.com/",
    links: [
      { label: "Website", href: "https://www.skoopapp.com/" },
      {
        label: "Chrome Web Store",
        href: "https://chromewebstore.google.com/detail/skoop-instant-video-for-l/gplimcomjkejccjoafekbjedgmlclpag",
      },
    ],
    featured: true,
  },
  {
    slug: "amped",
    title: "Amped",
    category: "Mobile Development",
    industry: "Health & fitness",
    description: "Turns daily habits into a lifespan projection, with Apple Health sync and a live view of minutes gained or lost.",
    overview:
      "Amped scores exercise, sleep, nutrition, and 60+ markers against a personal baseline. We built the iOS product around HealthKit, heatmaps, projections, streaks, and subscription monetization.",
    challenge:
      "Health apps showed charts. They did not answer the only question people actually care about: am I adding time or losing it.",
    solution:
      "We designed an iOS tracker that syncs Apple Health, scores habits against a baseline, and shows minutes and years in language that is easy to act on, with a subscription for the full picture.",
    useCases: [
      "See how today's workout and sleep change projected lifespan",
      "Spot the habits that are costing minutes, not just calories",
      "Keep a streak going with a score that updates from HealthKit",
    ],
    capabilities: ["HealthKit integration", "Heatmaps, projections, streaks", "Subscription monetization"],
    technologies: ["Swift", "HealthKit", "Subscriptions"],
    image: "/portfolio/mockups/amped.png",
    appScreens: [
      "/portfolio/apps/amped-1.jpg",
      "/portfolio/apps/amped-2.jpg",
      "/portfolio/apps/amped-3.jpg",
      "/portfolio/apps/amped-4.jpg",
      "/portfolio/apps/amped-5.jpg",
      "/portfolio/apps/amped-6.jpg",
    ],
    liveUrl: "https://apps.apple.com/in/app/amped-lifespan-tracker/id6748860588",
    featured: true,
  },
  {
    slug: "rnpl",
    title: "RNPL Credit",
    category: "Web Development",
    industry: "Fintech · Housing finance",
    description:
      "Rent and move-in financing for underbanked renters, from application through banking connection and landlord payout.",
    overview:
      "RNPL Credit lets renters apply online, connect banking with Plaid, upload leases, and send funds to landlords. We built the public site and the product flows around M-Loan, E-Loan, and Credit Builder programs.",
    challenge:
      "Underbanked renters needed move-in money without a traditional credit file, and landlords needed a payout they could trust.",
    solution:
      "We designed application, Plaid connection, lease upload, and program selection so M-Loan, E-Loan, and Credit Builder can run as one product instead of three PDFs.",
    useCases: [
      "Apply for rent and deposit financing without a branch visit",
      "Connect a bank account and upload a lease for verification",
      "Pay a landlord directly once the program is approved",
    ],
    capabilities: ["M-Loan, E-Loan, Credit Builder", "Plaid and lease validation", "Landlord payout flows"],
    technologies: ["Next.js", "Plaid", "Stripe", "Node.js"],
    image: "/portfolio/mockups/rnpl.png",
    screenshots: [
      { src: "/portfolio/raw/rnpl.png", caption: "Homepage" },
      { src: "/portfolio/raw/rnpl-2.png", caption: "Get started" },
      { src: "/portfolio/raw/rnpl-products.png", caption: "Loan products" },
    ],
    liveUrl: "https://rnplcredit.com/",
    featured: true,
  },
  {
    slug: "biker-connect",
    title: "Biker Connect",
    category: "Mobile Development",
    industry: "Auto · Motorcycle community",
    description: "Ride organization and community for motorcyclists: public and private rides, live maps, groups, and recaps.",
    overview:
      "Biker Connect is an Android app for planning rides, seeing participant locations, joining groups and events, and sharing what happened after. We built the live map, route planning, and community surfaces.",
    challenge:
      "Rides were organized in chats with no shared map, no guest list, and no recap once people got home.",
    solution:
      "We built an Android community app with public and private rides, live participant location, groups, and post-ride stats so organizers can run a ride like an event, not a thread.",
    useCases: [
      "Publish a ride with a meeting point and route",
      "See who is on the road during the ride",
      "Keep groups, events, and recaps in one place",
    ],
    capabilities: ["Live map and participant location", "Route and meeting-point planning", "Groups, events, ride stats"],
    technologies: ["Android", "Maps", "Realtime location"],
    image: "/portfolio/mockups/biker-connect.png",
    appScreens: ["/portfolio/apps/biker-1.png"],
    liveUrl: "https://play.google.com/store/apps/details?id=app.bikerconnect&hl=en_IN",
  },
  {
    slug: "spice-marriage",
    title: "Spice Marriage",
    category: "Mobile Development",
    industry: "Lifestyle · Couples",
    description: "A faith-inspired intimacy game for married couples, with themed play, preference controls, and premium content.",
    overview:
      "Spice Marriage needed a polished iOS experience and a marketing site that explained the product clearly. We shipped customizable gameplay, spiciness levels, in-app subscriptions, and the public download funnel.",
    challenge:
      "The idea was sensitive. The product had to feel respectful, private, and easy to start, without looking like a novelty app.",
    solution:
      "We designed themed gameplay with preference controls, a calm marketing site, and in-app purchases so couples can try the game and unlock more without a public storefront of the content.",
    useCases: [
      "Play a themed round with controls both partners agree on",
      "Unlock premium content through an in-app subscription",
      "Send a partner to the site to understand the product before installing",
    ],
    capabilities: ["Standard and themed gameplay", "Preference customization", "In-app subscriptions"],
    technologies: ["iOS", "In-app purchases", "Next.js"],
    image: "/portfolio/mockups/spice-marriage.png",
    screenshots: [
      { src: "/portfolio/raw/spice-marriage.png", caption: "Marketing site" },
      { src: "/portfolio/raw/spice-about.png", caption: "About" },
    ],
    appScreens: [
      "/portfolio/apps/spice-1.jpg",
      "/portfolio/apps/spice-2.jpg",
      "/portfolio/apps/spice-3.jpg",
      "/portfolio/apps/spice-4.jpg",
      "/portfolio/apps/spice-5.jpg",
      "/portfolio/apps/spice-6.jpg",
    ],
    liveUrl: "https://spicemarriage.com/",
    links: [
      { label: "Website", href: "https://spicemarriage.com/" },
      { label: "App Store", href: "https://apps.apple.com/us/app/spice-marriage/id6469296386" },
    ],
  },
  {
    slug: "coldwell-banker-caribe",
    title: "Coldwell Banker Caribe",
    category: "Web Development",
    industry: "Luxury real estate · Costa Rica",
    description: "Caribbean Coast brokerage site with listings, neighbourhood guides, broker profiles, and consultation capture.",
    overview:
      "The brief was a luxury real-estate presence that could sell a place, not just a property. We built listing and area storytelling, team and blog content, and buyer/seller conversion paths.",
    challenge:
      "Listings were not enough. Buyers needed neighbourhood context, and brokers needed a site that looked like the inventory.",
    solution:
      "We designed listing pages, area guides, broker profiles, and consultation capture so the Caribbean Coast story sits next to the inventory.",
    useCases: [
      "Browse luxury listings with maps and neighbourhood context",
      "Meet the brokers before a consultation",
      "Enquire as a buyer or seller without a generic form dump",
    ],
    capabilities: ["Listing and area storytelling", "Team and blog content", "Buyer and seller conversion"],
    technologies: ["Next.js", "CMS", "Maps"],
    image: "/portfolio/mockups/coldwell-banker-caribe.png",
    screenshots: [
      { src: "/portfolio/raw/coldwell-banker-caribe.png", caption: "Homepage" },
      { src: "/portfolio/raw/coldwell-team.png", caption: "Our team" },
    ],
    liveUrl: "https://coldwellbankercaribe.com/",
  },
  {
    slug: "petalstills",
    title: "PetalStills",
    category: "Web Development",
    industry: "Creative media · Marketplace",
    description: "A curated stock-photo marketplace for brands and independent creators, with commercial licensing and payouts.",
    overview:
      "PetalStills needed browse, license, and download on one side, and creator upload, review, and Stripe payouts on the other. We built both sides of the marketplace.",
    challenge:
      "Brands wanted commercial-ready stills. Creators needed a way to upload, get reviewed, and actually get paid.",
    solution:
      "We built a two-sided marketplace: licensed downloads for buyers, and upload, review, and Stripe payouts for photographers.",
    useCases: [
      "Browse and license stills for commercial use",
      "Upload a collection for review",
      "Get paid out when a photo sells",
    ],
    capabilities: ["Browse, license, download", "Creator upload and review", "Stripe payouts"],
    technologies: ["Next.js", "Stripe", "Cloud storage"],
    image: "/portfolio/mockups/petalstills.png",
    screenshots: [{ src: "/portfolio/raw/petalstills.png", caption: "Marketplace" }],
    liveUrl: "https://www.petalstills.com/",
  },
  {
    slug: "safyn",
    title: "Safyn",
    category: "Web Development",
    industry: "Luxury chauffeur · NY / NJ",
    description: "All-electric luxury SUV chauffeur site for airport transfers, hourly, and point-to-point rides.",
    overview:
      "Safyn needed a quiet, premium site that makes booking obvious. We designed the service and fare presentation and wired multi-channel reservation CTAs.",
    challenge:
      "Luxury ground transport sites often look busy and still fail at the only job: get the ride booked.",
    solution:
      "We built a restrained service site for airport, hourly, and point-to-point trips, with fare context and reservation paths that do not bury the ask.",
    useCases: [
      "Book an airport transfer in an all-electric SUV",
      "Reserve hourly chauffeur time",
      "Request a point-to-point ride between NY and NJ",
    ],
    capabilities: ["Service and fare presentation", "Multi-channel reservation CTAs"],
    technologies: ["Next.js", "Booking CTAs"],
    image: "/portfolio/mockups/safyn.png",
    screenshots: [
      { src: "/portfolio/raw/safyn.png", caption: "Homepage" },
      { src: "/portfolio/raw/safyn-2.png", caption: "Services" },
      { src: "/portfolio/raw/safyn-story.png", caption: "Our story" },
    ],
    liveUrl: "https://safyn.com/",
  },
  {
    slug: "fairways-mulligans",
    title: "Fairways & Mulligans",
    category: "Web Development",
    industry: "Hospitality · Poconos",
    description: "Social golf lounge site for simulator bays, AR darts, dining, events, leagues, and merchandise.",
    overview:
      "Fairways & Mulligans is an indoor golf lounge. We built experience routing, bay reservations, event enquiries, and opening-list capture on a dark hospitality site.",
    challenge:
      "The venue sells more than golf. The site had to route people to bays, food, events, and leagues without feeling like a menu PDF.",
    solution:
      "We designed experience pages, reservation CTAs, and event enquiry so a first-time guest can pick a bay, a league, or a private event in a few clicks.",
    useCases: [
      "Reserve a simulator bay",
      "Enquire about events and leagues",
      "Join the opening list and shop merchandise",
    ],
    capabilities: ["Experience routing and bookings", "Event enquiry flows", "Opening list capture"],
    technologies: ["Next.js", "CMS", "Bookings"],
    image: "/portfolio/mockups/fairways-mulligans.png",
    screenshots: [{ src: "/portfolio/raw/fairways-mulligans.png", caption: "Homepage" }],
    liveUrl: "https://fairwaysandmulligansgolf.com/",
  },
  {
    slug: "barkery",
    title: "The Barkery Singapore",
    category: "E-commerce",
    industry: "Pet · Natural treats",
    description: "Family-run dog bakery storefront with natural treats, cakes, meal boosters, and shelter-support campaigns.",
    overview:
      "The Barkery needed a Shopify store that felt as considered as the recipes. We built catalog, product storytelling, and campaign pages around the Singapore bakery.",
    challenge:
      "A bakery for dogs still has to sell like a food brand: ingredients, occasions, and trust, not just SKUs.",
    solution:
      "We merchandised treats, cakes, and meal boosters with campaign pages for shelter support so the storefront matches how the family actually bakes.",
    useCases: [
      "Shop natural treats and celebration cakes",
      "Add meal boosters to a regular order",
      "Support shelter campaigns from the same store",
    ],
    capabilities: ["Catalog and merchandising", "Campaign and shelter pages"],
    technologies: ["Shopify", "Liquid", "Subscriptions"],
    image: "/portfolio/mockups/barkery.png",
    screenshots: [{ src: "/portfolio/raw/barkery.png", caption: "Storefront" }],
    liveUrl: "https://sgbarkery.com/",
  },
  {
    slug: "seryni",
    title: "Seryni",
    category: "E-commerce",
    industry: "DTC supplements",
    description: "Conversion-led store for vitality products, with subscriptions, cart upsells, and an influencer program.",
    overview:
      "Seryni is a DTC supplement brand. We built the Shopify storefront around conversion: subscriptions, cart upsells, and influencer program pages.",
    challenge:
      "One-off supplement orders die. The brand needed subscriptions and a cleaner path from creator to cart.",
    solution:
      "We built a conversion-led Shopify store with subscribe-and-save, cart upsells, and influencer landing pages that keep the offer consistent.",
    useCases: [
      "Subscribe to a vitality routine instead of reordering monthly",
      "Add an upsell in cart without leaving checkout",
      "Land from a creator page onto a matching offer",
    ],
    capabilities: ["Subscription commerce", "Cart upsells", "Influencer program pages"],
    technologies: ["Shopify", "Subscriptions", "Klaviyo"],
    image: "/portfolio/mockups/seryni.png",
    screenshots: [{ src: "/portfolio/raw/seryni.png", caption: "Storefront" }],
    liveUrl: "https://seryni.com/",
  },
  {
    slug: "slime-by-maryam",
    title: "Slime by Maryam",
    category: "E-commerce",
    industry: "Consumer goods",
    description: "Handmade slime shop with monthly restocks, care FAQs, and charity partnership messaging.",
    overview:
      "A small-batch Shopify store with a clear restock cadence. We built the catalog, care FAQs, and the charity partnership surfaces the brand wanted in front of shoppers.",
    challenge:
      "Drops sell out. The site needed restock logic, care instructions, and a charity story without cluttering the product.",
    solution:
      "We merchandised monthly restocks, added care FAQs, and put the charity partnership where shoppers actually see it.",
    useCases: [
      "Shop a restock before it sells out",
      "Read how to care for the slime",
      "See the charity partnership on the same visit",
    ],
    capabilities: ["Monthly restock merchandising", "Care FAQs", "Charity partnership pages"],
    technologies: ["Shopify", "Liquid"],
    image: "/portfolio/mockups/slime-by-maryam.png",
    screenshots: [{ src: "/portfolio/raw/slime-by-maryam.png", caption: "Storefront" }],
    liveUrl: "https://slimebymaryam.com/",
  },
  {
    slug: "e-commerce-platform",
    title: "EverythinkInk",
    category: "E-commerce",
    industry: "Printer supplies",
    description: "A large-catalog Shopify store for original and compatible ink, toner, printers, and accessories.",
    overview:
      "EverythinkInk is a UK commerce platform for printer supplies. We built catalog structure, search, VAT pricing, and checkout for a range that runs into the tens of thousands of SKUs.",
    challenge:
      "A catalog this large fails if search, brand navigation, and VAT pricing are even slightly off.",
    solution:
      "We structured collections, search, and checkout so customers can find a cartridge, see inc-VAT pricing, and order without a sales call.",
    useCases: [
      "Search 15,000+ ink and toner SKUs by brand and printer",
      "Toggle VAT-inclusive pricing",
      "Reorder supplies without hunting through a PDF list",
    ],
    capabilities: ["Large-catalog merchandising", "Search and brand navigation", "VAT and checkout"],
    technologies: ["Shopify", "Node.js", "Firebase", "Stripe"],
    image: "/portfolio/mockups/e-commerce-platform.png",
    screenshots: [{ src: "/portfolio/raw/e-commerce-platform.png", caption: "Homepage" }],
    liveUrl: "https://everythingink.co.uk/",
  },
  {
    slug: "albegrik",
    title: "Algebrik",
    category: "Web Development",
    industry: "Fintech · Lending",
    description: "A cloud-native lending platform that simplifies origination and servicing for lenders and borrowers.",
    overview:
      "Algebrik's platform covers origination through servicing. We built a fast Next.js interface on top of complex lending APIs, with role-based access and application workflows.",
    challenge:
      "Origination was a stack of disconnected tools. Lenders needed one suite that borrowers could actually complete.",
    solution:
      "We designed a Next.js lending interface for origination, document processing, decisioning, and servicing, with role-based access for lenders and a cleaner borrower path.",
    useCases: [
      "Open a digital application and upload documents",
      "Run decisioning and servicing in one suite",
      "Give lenders a cockpit instead of five logins",
    ],
    capabilities: ["Origination workflows", "Role-based access", "Borrower applications"],
    technologies: ["Next.js", "Framer Motion", "APIs"],
    image: "/portfolio/mockups/albegrik.png",
    screenshots: [{ src: "/portfolio/raw/albegrik.png", caption: "Homepage" }],
    liveUrl: "https://algebrik.ai/",
  },
  {
    slug: "everfur",
    title: "Everfur",
    category: "Web Development",
    industry: "Pet wellness",
    description: "A pet wellness platform using fur-based diagnostics and AI to guide joint-care products for dogs and cats.",
    overview:
      "Everfur combines at-home testing with a storefront and clinical tools so pet owners can act on the results. We built the marketing site, funnel, and the product path that follows a lab report.",
    challenge:
      "Pet health advice was generic. The brand needed a site that could sell a test, explain the science, and still feel like a product people trust with their dog.",
    solution:
      "We designed the consumer site, membership and test funnel, and the path from sample to care plan, including the science and clinic surfaces the team needed later.",
    useCases: [
      "Understand the fur test and order a kit",
      "Join membership for repeat testing and a living health record",
      "Talk to a vet with the pet's history already in one place",
    ],
    capabilities: ["Diagnostics funnel", "Membership and reports", "Personalized product paths"],
    technologies: ["Next.js", "Shopify", "Firebase", "GraphQL"],
    image: "/portfolio/mockups/everfur.png",
    screenshots: [
      { src: "/portfolio/raw/everfur.png", caption: "Homepage" },
      { src: "/portfolio/raw/everfur-2.png", caption: "Team and science" },
      { src: "/portfolio/raw/everfur-vet.png", caption: "See a vet" },
    ],
    appScreens: [
      "/portfolio/apps/everfur-1.jpg",
      "/portfolio/apps/everfur-2.jpg",
      "/portfolio/apps/everfur-3.jpg",
      "/portfolio/apps/everfur-4.jpg",
      "/portfolio/apps/everfur-5.jpg",
      "/portfolio/apps/everfur-6.jpg",
    ],
    liveUrl: "https://everfur.com/",
    links: [
      { label: "Website", href: "https://everfur.com/" },
      { label: "App Store", href: "https://apps.apple.com/us/app/everfur/id6763074878" },
      { label: "Google Play", href: "https://play.google.com/store/apps/details?id=com.everfur.mobile" },
    ],
  },
  {
    slug: "the-troy-agency",
    title: "The Troy Agency",
    category: "Web Development",
    industry: "B2B consultancy",
    description: "A consultancy site for B2B professionals who want stronger personal brands, networks, and inbound leads.",
    overview:
      "The Troy Agency needed a WordPress presence that could carry LinkedIn, video, and email programs without looking like a theme demo.",
    challenge:
      "The offer spanned consulting, video, and software. The site had to explain that mix and still convert a consultation.",
    solution:
      "We built a custom WordPress theme with service pages, founder story, and lead capture so the LinkedIn practice and the product work can live on one domain.",
    useCases: [
      "Understand the LinkedIn accelerator offer",
      "Read the founder story before a consultation",
      "Book a call without a generic agency contact form",
    ],
    capabilities: ["Custom theme", "Lead capture", "Content programs"],
    technologies: ["WordPress", "PHP", "WooCommerce", "Elementor"],
    image: "/portfolio/mockups/the-troy-agency.png",
    screenshots: [
      { src: "/portfolio/raw/the-troy-agency.png", caption: "Homepage" },
      { src: "/portfolio/raw/troy-agency-story.png", caption: "Founder story" },
    ],
    liveUrl: "https://thetroyagency.com/",
  },
]

export function getPortfolioProject(slug: string) {
  return portfolioProjects.find((project) => project.slug === slug)
}

export function getHomepageProjects() {
  return ["naia", "plah", "yourszn"]
    .map((slug) => getPortfolioProject(slug))
    .filter((project): project is PortfolioProject => Boolean(project))
}

export function getFeaturedProjects() {
  return portfolioProjects.filter((project) => project.featured)
}

export const portfolioCategories = ["All", "Web Development", "Mobile Development", "E-commerce"] as const
