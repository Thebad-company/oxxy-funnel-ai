export const APP_DATA = {
  navigation: {
    logo: "https://www.oxxy.in/image/oxxy_logo.png",
    name: "Oxxy",
    links: [
      { label: "Face Scan", href: "#face-scan", active: true },
      { label: "Health Plans", href: "#health-plans", active: false },
      { label: "FAQ", href: "#faq", active: false }
    ]
  },
  hero: {
    title: "The Future of Health is Staring Back at You.",
    description: "Stop wondering about your health. Just look into your camera and get a full clinical-grade vitals checkup in 30 seconds.",
    cta: "Scan My Face Now",
    stats: "Trusted by 2 million+ users nationwide.",
    features: [
      { icon: "bolt", text: "Instant Results" },
      { icon: "verified", text: "95% Accuracy" },
      { icon: "security", text: "Private & Secure" }
    ]
  },
  problem: {
    title: "The Ultimate Health Dashboard in Your Pocket.",
    description: "Get a diagnostic-grade health analysis using just your smartphone camera. No expensive equipment, no blood samples, just accurate insights in real-time.",
    stats: [
      { icon: "monitor_heart", value: "8+ Vitals", description: "From Heart Rate and Blood Pressure to Oxygen levels and Stress indices." },
      { icon: "checklist", value: "30 Seconds", description: "Get a full clinical report faster than it takes to boil a cup of tea." },
      { icon: "shield_moon", value: "Private", description: "Zero images stored. Your biometric data is encrypted and discarded instantly." }
    ]
  },
  howItWorks: {
    title: "Three steps to health clarity.",
    steps: [
      { icon: "photo_camera", title: "1. Scan & Map", description: "Allow camera access. Our AI maps 400+ facial bio-markers and skin perfusion points." },
      { icon: "psychology", title: "2. Neural Analysis", description: "The Oxxy engine analyzes pulse, HRV, and stress markers using transdermal imaging." },
      { icon: "analytics", title: "3. Diagnostic Snapshot", description: "Receive a detailed report including BP, BMI, and vital indices instantly." }
    ]
  },
  scanModule: {
    title: "Oxxy AI Analyzing Vital Markers...",
    initialProgress: 65,
    statusText: "Ready to Scan",
    previewImage: "/oxxy_scan.png",
    results: [
      { label: "Pulse Rate", value: "79 bpm", status: "Normal", color: "tertiary" },
      { label: "Blood Pressure", value: "116/80", status: "Normal", color: "tertiary" },
      { label: "Stress Index", value: "5/10", status: "Controlled", color: "primary" },
      { label: "BMI Index", value: "25", status: "Overweight", color: "error" },
      { label: "Breathing Rate", value: "15/min", status: "Normal", color: "tertiary" },
      { label: "Cardiac Workload", value: "175", status: "Slightly High", color: "primary" },
      { label: "Recovery Index", value: "61%", status: "Good", color: "tertiary" }
    ],
    recommendation: {
      text: "Based on your Oxxy scan, your <span className=\"text-primary font-bold\">Cardiac Workload</span> is elevated. We recommend the <span className=\"font-bold\">Oxxy Vitality Shield</span> with integrated cardio-health checkups.",
      cta: "Get My Oxxy Plan — First Month 50% Off"
    },
    disclaimer: {
        short: "Health Disclaimer: Consult a doctor.",
        full: "NOTICE: Oxxy AI results are for wellness awareness only. We are not a medical diagnostic facility. AI findings are estimates and MUST NOT be used for clinical decisions without consulting a licensed physician. AI accuracy is not a substitute for clinical grade medical hardware or professional doctor accuracy. Oxxy accepts no liability for actions taken based on these results."
    }
  },
  depth: {
      title: "The Ultimate Health Vitals Report.",
      description: "Our AI doesn't just scan; it understands your body's vital signals to provide a surgical-grade overview of your health status.",
      features: [
          { title: "Cardiac Insight", description: "Real-time analysis of blood pulse patterns to estimate heart rate and cardiac workload." },
          { icon: "air", title: "Oxygen Levels", description: "Detection of blood flow variations to estimate SpO2 levels without physical contact." },
          { title: "Stress Recovery", description: "Analysis of micro-facial movements to determine your body's stress and recovery index." },
          { title: "Physical Metrics", description: "Estimation of metabolism, BMI, and overall body composition markers." }
      ]
  },
  healthCategories: {
    title: "Every Vital Stat, Deciphered.",
    categories: [
        { icon: "monitor_heart", name: "Cardiovascular", description: "Heart Rate & Blood Pressure" },
        { icon: "airwave", name: "Respiratory", description: "Oxygen & Breathing Rate" },
        { icon: "psychology", name: "Neurological", description: "Stress & Mental Fatigue" },
        { icon: "vital_signs", name: "Biometric", description: "BMI & Recovery Insight" }
    ]
  },
  brandTrust: {
    title: "India’s Largest Health Network.",
    description: "Oxxy is more than just a scan; it’s the gateway to affordable, clinical healthcare for over 2 million Indians.",
    stats: [
        { label: "Active Users", value: "2,000,000+" },
        { label: "Partner Hospitals", value: "20,000+" },
        { label: "Indian Cities", value: "1,500+" }
    ]
  },
  pricing: {
      title: "Regional Assessment Pricing",
      regions: [
          { name: "Delhi NCR", cost: "Free", value: "₹10,000", badge: "Live" },
          { name: "Mumbai, Bangalore, Pune", cost: "₹100", value: "₹10,000", badge: "Limited" }
      ]
  },
  socialProof: {
    title: "Voices of Oxxy Users.",
    testimonials: [
      { name: "Rajeev S.", location: "Mumbai", rating: 5, quote: "\"The BP estimation was within 5% of my home monitor. Oxxy's tech is truly revolutionary for early detection.\"" },
      { name: "Priya M.", location: "Bangalore", rating: 5, quote: "\"It detected my high stress levels before I even realized I was burnt out. The plan they suggested is a lifesaver.\"" },
      { name: "Ankit T.", location: "Delhi", rating: 5, quote: "\"I never thought a face scan could estimate BMI and Cardiac Load. It's the depth of data that made me stay with Oxxy.\"" }
    ],
    partners: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCxXEIWc4YddQCEL5kgUc06X_lMVwk78aTOqQvXwo0aWHdqiDtm1nTi4lx6CfQCcTUCaUDW84iPNe4lLpnY3NQPpFco4yRj1VIs8dB_xl-HfwAXG5G3ZQpcE8LLF5SVsvsT4MvpCqN_Tcp_N8wnBO3OzUlGijzztlCX_-oMbs6QUvs5VT6lMSQrfWSr5GRiMNt3fYpTZTvYY3ixkpR2wmEnGiaw1zBEksVzZBzQazkrJ7NP6L4F5rTkkQptGIm0BE_N8g5FoxnzWs4",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCUyUxkIS1-_-MLCQwwMfTfI7VKyx5dM62jLUGMvWPpUfjaN4_br-rM_OuixI_iffotBUisvTM9E5-lGHtvLgOwCUk38meNWag7UpP9kgKI3pdeAbph8qQeyk_YikUXoMX_sRtltiW_aicWiLsGtpcC5g_O97PyX8lYeilZ9dVvqMkEaccnqcIoobSFuEyGWXAo7RGAhpDMfqfnecH-85NL4PGPW2wGFdLq5N59PL5j0j4EgrO-jwBUwBrnFuWWkUct9gmBQ7_3lM8",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBhi1OS8rRoO3u0eUuw6F89bnpoYJBRfV4M5FcrnvbuJlbVMSnp-RDsd41FFibmzRmkpQf8axZjZuRQ-a7nn7amH7JW8917faJhnOo3S6RdLLbNAwx6pm8kqEdlbkLe1iKPJnDsqP5fgNUUJk4bWMzdhC9LvJdCK5gYhEDp0Cx4FVjG-DthhmHobLSs4zGkOJdSjK3FgbB_C9l1hAIa8Kwg_JFPLUEZ9pSasTczamYi5Yhgn9Tiw2Qh6K_riBY80LVI5Wbbg0jVV0",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCAxzC_qhDaK94zrtabRyk2bOkl-4dc7KN50MEKeeMsFL6hAcwwyjf_NrCuPTLfORGco6IxdSyXggQxBInvFkYjlBh8CB6pW-W-wOC-9x-MO1MpaMPM9DgSM18q7hRKamGHDTO95xt93Xc_5UhThbfCW8GDiLoLgjp8MIxUFrDVi4U4tCN-yS8XyFzQ9iLzHB33TtxKWw9T_UE16AkPmnJ4hKkHQLmSRyu-_rSav0U7hr5R6rz1OTz875KUPf2iCsZeGTpNxFEEgLc"
    ]
  },
  reportPreview: {
    title: "Curious? Here’s a Glimpse of Your Report.",
    description: "Receive a comprehensive digital health audit covering 8+ vital domains, with personalized lifestyle recommendations based on your scan.",
    vitals: [
        { label: "Cardiac Load", value: "Moderate", status: "Monitor", color: "primary" },
        { label: "Stress Index", value: "5.4/10", status: "Balanced", color: "tertiary" },
        { label: "Oxygen Sat.", value: "98%", status: "Optimal", color: "tertiary" },
        { label: "Recovery Rate", value: "72%", status: "Good", color: "tertiary" }
    ]
  },
  curiosityFacts: {
    title: "The Science of the Unseen.",
    facts: [
        { icon: "psychology", title: "Mental Fatigue", text: "Your blink rate and micro-tensions reveal neurological stress before you even feel tired." },
        { icon: "fluid", title: "Blood Perfusion", text: "Skin color variations, invisible to the eye, reveal your precise heart rate and cardiac output." },
        { icon: "visibility", title: "Early Detection", text: "Certain facial markers can signal metabolic shifts up to 6 months before clinical symptoms appear." }
    ]
  },
  symptoms: {
    title: "Your face speaks about your body.",
    description: "Our AI captures the subtle signs your body sends through your face—signs that can be detected months before they become symptoms.",
    items: [
        { icon: "heart_broken", label: "Cardiac Stress", symptom: "Facial perfusion lag indicates an overworked heart long before traditional indicators." },
        { icon: "air", label: "Oxygen Strain", symptom: "Sub-surface skin color shifts reveal respiratory struggle common in high-pollution areas." },
        { icon: "bolt", label: "Burnout Warning", symptom: "Micro-facial muscle tremors are the first markers of neurological and physical exhaustion." },
        { icon: "monitoring", label: "Metabolic Shift", symptom: "Hidden variations in skin reflectance signal rapid shifts in metabolic rate and BMI." }
    ]
  },
  comparison: {
    title: "Clinical Precision. Zero Friction.",
    description: "Traditional diagnostics are slow and stressful. Oxxy AI brings hospital-grade analysis to your fingertips in seconds.",
    items: [
        { label: "Checkup Time", traditional: "3 - 5 Hours", oxxy: "30 Seconds", icon: "timer" },
        { label: "Diagnostic Method", traditional: "Clinical / Invasive", oxxy: "AI / Contactless", icon: "fingerprint" },
        { label: "Cost (Avg)", traditional: "₹5,000+", oxxy: "Free Assessment", icon: "payments" },
        { label: "Report Delivery", traditional: "24 - 48 Hours", oxxy: "Instant Snapshot", icon: "send_and_archive" }
    ]
  },
  personas: {
    title: "Engineered for Every Lifestyle.",
    items: [
        { icon: "work", title: "The Busy Executive", description: "Detect silent markers of stress and cardiac strain before burnout hits.", image: "/persona_executive_in.png" },
        { icon: "fitness_center", title: "The Athlete", description: "Optimize your peak performance by tracking recovery and heart workload.", image: "/persona_athlete_in.png" },
        { icon: "family_restroom", title: "The Family Guard", description: "A non-invasive, quick way to keep a regular eye on your loved ones' vitals, including seniors.", image: "/persona_family_in.png" }
    ]
  },
  faq: {
    title: "Oxxy Member Questions.",
    questions: [
      { question: "How accurate is the Oxxy AI facial scan?", answer: "Our AI metrics have a 92-95% correlation with clinical-grade blood pressure cuffs and pulse oximeters when used in proper lighting." },
      { question: "Is my data private with Oxxy?", answer: "Yes. Oxxy follows HIPAA-compliant protocols. We do not store your video or images; only the extracted bio-marker data is used for your report." },
      { question: "Do I need to sign up for Oxxy before scanning?", answer: "No. You can perform the scan instantly. You only provide contact details if you wish to receive the full PDF report via email." },
      { question: "Can this replace a doctor's visit?", answer: "No. The Oxxy scan is a wellness monitoring tool designed for early detection. Always consult with a doctor for clinical diagnosis." },
      { question: "How do I claim the 50% Oxxy discount?", answer: "Upon completion of your scan, use the 'Get My Oxxy Plan' link to unlock your exclusive regional discount." }
    ]
  },
  footer: {
    cta: {
      title: "Join thousands who trust Oxxy for their health.",
      description: "Prevention starts with knowledge. Take the 30-second Oxxy AI scan now.",
      primaryAction: "Start My Oxxy AI Scan",
      secondaryAction: "Explore Oxxy Healthcare Plans"
    },
    navBar: {
      action: "Start Oxxy Scan",
      icon: "qr_code_scanner"
    }
  }
};
