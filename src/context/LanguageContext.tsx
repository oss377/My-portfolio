'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface Translation {
  home: { title: string; description: string; cta: string };
  about: { title: string; description: string; longDescription: string };
  projects: { title: string; description: string; technologies: string; code: string; liveDemo: string; list: { title: string; description: string; technologies: string[] }[] };
  contact: { title: string; description: string; infoTitle: string; emailLabel: string; phoneLabel: string; locationLabel: string; description2: string; connect: string; linkedin: string; telegram: string; nameLabel: string; companyLabel: string; messageLabel: string; sendButton: string; sending: string; successMessage: string; errorMessage: string; validationName: string; validationEmail: string; validationMessage: string; validationLength: string };
  skills: { title: string; description: string; categories: { [key: string]: string }; proficiency: string; levels: { [key: number]: string }; close: string; list: { name: string; description: string; category: string; proficiency: number }[] };
  footer: { aboutTitle: string; aboutDescription: string; navigationTitle: string; connectTitle: string; contactTitle: string; copyright: (year: number) => string };
  navbar: { titles: string[]; about: string; projects: string; skills: string; contact: string };
  stats: { title: string; years: string; projects: string; clients: string };
  newsletter: { title: string; description: string; placeholder: string; button: string };
  resume: string;
  language: string;
  switchTo: (lang: string) => string;
}

interface LanguageContextType {
  language: string;
  setLanguage: (lang: string) => void;
  t: Translation;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations: Record<string, Translation> = {
  am: {
    home: {
      title: 'ወደ ፖርትፎሊዮዬ እንኳን በደህና መጡ',
      description: 'አወቀ አድሴ ነኝ፣ በዘመናዊ ቴክኖሎጂዎች ፈጠራን መፍትሄዎችን የሚገነባ አስተዋይ ገንቢ።',
      cta: 'ሥራዬን ያስሱ',
    },
    about: {
      title: 'ስለ እኔ',
      description: 'ስለ ጉዞዬ፣ ልምዴ እና ለፈጠራ ያለኝን ፍቅር ይወቁ።',
      longDescription: 'አወቀ አድሴ ነኝ፣ ከዎልዲያ ዩኒቨርሲቲ የኮምፒውተር ሳይንስ ተመራቂ፣ በፈጠራ የድር እና የሞባይል መተግበሪያዎችን ለመገንባት በሚያስችለኝ ፍላጎት የተነሳ። በፓይቶን፣ ሬክት ኔቲቭ፣ እና ዘመናዊ የድር ቴክኖሎጂዎች ብቃት እንደ ሲኒማ ቲኬት መተግበሪያ እና የተማሪ ክሊራንስ ሲስተም ያሉ ለተጠቃሚ የተመቻቸ መፍትሄዎችን ገንብቻለሁ፣ ምንም አይነት ማያለል ያልሆኑ ዲጂታል ተሞክሮዎችን እያቀረብኩ ነው። ስራዬ በእውነተኛ የዓለም ችግሮች ላይ መፍትሄ የሚሰጡ ቀላል ለመጠቀም እና ሊሰፉ የሚችሉ መተግበሪያዎችን ለመፍጠር ያተኮረ ነው። በተጨማሪም ቪዲዮ አርትዖት እና ይዘት ፍጠር እገብራለሁ፣ እንደ አዶብ ፕሪሚየር ፕሮ ያሉ መሳሪያዎችን በመጠቀም ለቲክቶክ ያሉ መድረኮች አስደሳች ታሪኮችን እፈጥራለሁ፣ ይህም የፈጠራ ጥቅል ወደ ቴክኒካል ፕሮጀክቶቼ ለማምጣት የሚያስችለኝን ችሎታዬን ያጎላል።',
    },
    projects: {
      title: 'ፕሮጀክቶቼ',
      description: 'የቴክኒክ ችሎታዎቼን እና ፈጠራዬን የሚያሳዩ ፕሮጀክቶችን ያስሱ።',
      technologies: 'ቴክኖሎጂዎች፡',
      code: 'ኮድ',
      liveDemo: 'ቀጥታ ማሳያ',
      list: [
        { 
          title: 'የትምህርት ቤት አስተዳደር ሲስተም', 
          description: 'በኔክስት.ጀኤስ፣ ታይፕስክሪፕት እና ፋየርቤዝ ኢንቴግሬሽን የተገነባ ሙሉ ስታክ ትምህርት ቤት አስተዳደር ሲስተም መፍትሔ። ባህሪዎች ተጠቃሚ ማረጋገጥ፣ ምርት አስተዳደር፣ እና ደህንነቱ የተጠበቀ ክፍያዎች።', 
          technologies: ['Next.js', 'Firebase', 'Tailwind CSS', 'Cloudinary'] 
        },
        { 
          title: 'የምግብ ቤት አስተዳደር መተግበሪያ', 
          description: 'በኪዩአር ኮድ ትዕዛዝ፣ በእውነተኛ ጊዜ ሜኑ ዝመናዎች፣ እና የጠረጴዛ አስተዳደር ያለው ተባባሪ ሬስቶራንት አስተዳደር መተግበሪያ። በኔክስት.ጀኤስ እና ፋየርቤዝ ተገንብቶ ተግባራዊ፣ ሊሰፋ የሚችል፣ እና ደህንነቱ የተጠበቀ ተግባራትን ለማቅረብ።', 
          technologies: ['Tailwind CSS', 'Next.js', 'Firebase', 'Cloudinary'] 
        },
        { 
          title: 'ማህበራዊ ሚዲያ መድረክ', 
          description: 'በእውነተኛ ጊዜ ተሳትፎ እና የፈጠራ ሞኔታይዜሽን መሳሪያዎች ያለው ለአጭር ቅርጽ ቪዲዮ አፕሎዶች ከፍተኛ አፈጻጸም ያለው ማህበራዊ ሚዲያ መድረክ ተፈጥሯል። ደህንነቱ የተጠበቀ ማረጋገጥ እና ክላውድ ላይ የተመሰረተ ማከማቻ ያለው ተዘጋጅቷል።', 
          technologies: ['Tailwind CSS', 'Next.js', 'Firebase', 'Cloudinary'] 
        },
        { 
          title: 'የሲኒማ ቲኬት ሲስተም', 
          description: 'በሲኒማ ዝርዝሮች፣ መቀመጫ ምርጫ፣ በእውነተኛ ጊዜ ቦታ ማስያዝ፣ እና ደህንነቱ የተጠበቀ ክፍያ ኢንቴግሬሽን ያለው ሙሉ ባህሪ ያለው ቲኬት መድረክ። በተግባራዊ ዩአይ እና ለስክሪን እና ሽያጭ ለማስተዳደር አድሚን ዳሽቦርድ ተገንብቷል።', 
          technologies: ['Tailwind CSS', 'Next.js', 'Firebase', 'Cloudinary', 'Chapa API'] 
        },
        { 
          title: 'የጂም አስተዳደር ሲስተም', 
          description: 'በጨለማ/ብርሃን ሞድ፣ ለሰውነት እንቅስቃሴ አኒሜሽኖች፣ እና አግኚኝ ቅጽ ኢንቴግሬሽን ያለው ተግባራዊ ጂም ድር ጣቢያ።', 
          technologies: ['Tailwind CSS', 'Next.js', 'Firebase', 'Cloudinary', 'Chapa API'] 
        },
        { 
          title: 'የኢትዮሲኒማ ሞባይል መተግበሪያ', 
          description: 'በጨለማ/ብርሃን ሞድ፣ ለሰውነት እንቅስቃሴ አኒሜሽኖች፣ እና አግኚኝ ቅጽ ኢንቴግሬሽን ያለው ተግባራዊ ፖርትፎሊዮ ድር ጣቢያ።', 
          technologies: ['Next.js', 'Framer Motion', 'EmailJS', 'Tailwind CSS'] 
        },
      ],
    },
    contact: {
      title: 'እኔን ያግኙ',
      description: 'ለትብብር ዝግጁ ነዎት? ለጥያቄዎች ወይም ሰላም ለመለዋወጥ ያግኙኝ።',
      infoTitle: 'የእውቂያ መረጃ',
      emailLabel: 'ኢሜይል',
      phoneLabel: 'ስልክ',
      locationLabel: 'አካባቢ',
      description2: 'አዲስ እድሎች፣ ፈጠራዊ ፕሮጀክቶች፣ ወይም ሊተባበሩ የሚችሉ ትብብሮችን ለመወያየት ጓጉቻለሁ። ዛሬ ይድረሱ!',
      connect: 'ከእኔ ጋር ይገናኙ፡',
      linkedin: 'LinkedIn',
      telegram: 'Telegram',
      nameLabel: 'ስምዎ',
      companyLabel: 'ድርጅት ስም',
      messageLabel: 'መልእክትዎ',
      sendButton: 'መልእክት ላክ',
      sending: 'በመላክ ላይ...',
      successMessage: 'መልእክት ተልኳል! በቅርቡ እመልሳለሁ።',
      errorMessage: 'መልእክት ለመላክ አልተሳካም። እባክዎ እንደገና ይሞክሩ ወይም በቀጥታ በawekeadisie@gmail.com ኢሜይል ይላኩኝ።',
      validationName: 'እባክዎ ስምዎን ያስገቡ',
      validationEmail: 'እባክዎ ትክክለኛ ኢሜይል ያስገቡ',
      validationMessage: 'እባክዎ መልእክትዎን ያስገቡ',
      validationLength: 'መልእክት {0} ቁምፊዎችን አልዘለፈም',
    },
    skills: {
      title: 'ችሎታዎቼ',
      description: 'ከፍተኛ ጥራት ያላቸውን መፍትሄዎች ለማቅረብ የምጠቀምባቸውን ቴክኖሎጂዎች እና መሣሪያዎች ይወቁ።',
      categories: {
        frontend: 'የፊት ክፍል ልማት',
        backend: 'የጀርባ ክፍል ልማት',
        mobile: 'ሞባይል ልማት',
        database: 'ዳታቤዝ እና ማከማቻ',
        tools: 'መሳሪያዎች እና አገልግሎቶች',
        'video-editing': 'ቪዲዮ አርትዖት',
      },
      proficiency: 'ችሎታ፡',
      levels: {
        1: 'ጀማሪ',
        2: 'መሰረታዊ',
        3: 'መካከለኛ',
        4: 'ከፍተኛ',
        5: 'ባለሙያ',
      },
      close: 'ዝጋ',
      list: [
        { name: 'React', description: 'ክፍሎች-ተመስርቶ አርክቴክቸር እና ቨርቹዋል ዲኦኤም በመጠቀም የተጠቃሚ በይነገጽ ለመገንባት የጃቫስክሪፕት ቤተ-መጽሐፍት።', category: 'frontend', proficiency: 5 },
        { name: 'React Native', description: 'በሪአክት እና ጃቫስክሪፕት ተጠቅሞ ለአይኦኤስ እና አንድሮይድ አገር በቀር ሞባይል መተግበሪያዎችን ለመገንባት ፍሬምዎርክ።', category: 'mobile', proficiency: 4 },
        { name: 'Next.js', description: 'በሰርቨር-ሳይድ ማቅረብ፣ የማይንቀሳቀስ ጣቢያ ማመንጨት፣ እና ኤፒአይ መንገዶች ለምርት የሚያበረታታ የሪአክት ፍሬምዎርክ።', category: 'frontend', proficiency: 5 },
        { name: 'TypeScript', description: 'የጃቫስክሪፕት ጥቅም ተጠቅሞ ወደ ተራ ጃቫስክሪፕት የሚቀየር የጃቫስክሪፕት ጥቅም ተጠቅሞ የሚሻሻል መሳሪያ እና የስህተት ማረጋገጥ።', category: 'frontend', proficiency: 4 },
        { name: 'Tailwind CSS', description: 'በተለዋዋጭ ክፍሎች ብጁ ዲዛይኖችን በፍጥነት ለመገንባት የመገልገያ-መጀመሪያ ሲኤስኤስ ፍሬምዎርክ።', category: 'frontend', proficiency: 5 },
        { name: 'Python', description: 'ቀላል፣ ተነባቢነት፣ እና ሰፊ ቤተ-መጽሐፍት በማወቅ የሚታወቅ ተለዋዋጭ ፕሮግራሚንግ ቋንቋ።', category: 'backend', proficiency: 4 },
        { name: 'Django', description: 'ፈጣን ልማትን እና ንጹህ፣ ተግባራዊ ዲዛይንን የሚያበረታታ ከፍተኛ ደረጃ ፓይተን ድር ፍሬምዎርክ።', category: 'backend', proficiency: 4 },
        { name: 'Node.js', description: 'በክሮም ቪ8 ሞተር ላይ የተገነባ የጃቫስክሪፕት ጊዜ እንዲቆይ የሚያስችል ለሚሰፋ ኔትወርክ መተግበሪያዎችን ለመገንባት።', category: 'backend', proficiency: 4 },
        { name: 'Firebase', description: 'ማረጋገጥ፣ ዳታቤዝ፣ ማስተናገጃ፣ ትንታኔዎች፣ እና ክላውድ ተግባራትን ጨምሮ ሙሉ መተግበሪያ ልማት መድረክ።', category: 'backend', proficiency: 4 },
        { name: 'Java', description: 'ጠንካራ ሞባይል እና ኢንተርፕራይዝ መተግበሪያዎችን ለመገንባት የሚያስችል ጠንካራ ነገር-ተኮር ፕሮግራሚንግ ቋንቋ።', category: 'mobile', proficiency: 4 },
        { name: 'C++', description: 'ከፍተኛ አፈጻጸም መተግበሪያዎችን ለመገንባት፣ በማህደረ ትውስታ አስተዳደር ለመስራት፣ እና ለስርዓት ደረጃ ሶፍትዌር ልማት።', category: 'backend', proficiency: 3 },
        { name: 'Cloudinary', description: 'ኃይለኛ ትራንስፎርሜሽን እና ማመቻቸቻ ባህሪያት ያለው ክላውድ-ተመስርቶ ምስል እና ቪዲዮ አስተዳደር አገልግሎት።', category: 'tools', proficiency: 4 },
        { name: 'CapCut', description: 'አስደሳች ቪዲዮ ይዘት ለመፍጠር የላቀ አርትዖት፣ ቪዥዋል ውጤቶችን የሚተግብር፣ እና ለማህበራዊ ሚዲያ እና ግብይት ፕሮፌሽናል-ግራዴ ቪዲዮዎችን የሚያመርት ፕሮፌሽናል መሳሪያዎች።', category: 'video-editing', proficiency: 5 },
      ],
    },
    footer: {
      aboutTitle: 'ስለ',
      aboutDescription: 'አወቀ አድሴ ነኝ፣ በዘመናዊ ቴክኖሎጂዎች ፈጠራን መፍትሄዎችን የሚገነባ አስተዋይ ገንቢ።',
      navigationTitle: 'አሰሳ',
      connectTitle: 'ተገናኝ',
      contactTitle: 'እውቂያ',
      copyright: (year) => `© ${year} አወቀ አድሴ. ሁሉም መብቶች የተጠበቁ ናቸው.`,
    },
    navbar: {
      titles: ['አወቀ አድሴ', 'ሞባይል ገንቢ', 'ድር ገንቢ', 'ቪዲዮ አርታኢ'],
      about: 'ስለ',
      projects: 'ፕሮጀክቶች',
      skills: 'ችሎታዎች',
      contact: 'እውቂያ',
    },
    stats: {
      title: 'ውጤቶቼ',
      years: 'የሥራ ልምድ ዓመታት',
      projects: 'የተጠናቀቁ ፕሮጀክቶች',
      clients: 'ደስተኞች ደንበኞች',
    },
    newsletter: {
      title: 'የቅርብ ዜና ይቀበሉ',
      description: 'ስለ ሥራዬ እና የኢንዱስትሪ ግንዛቤዎች የቅርብ ጊዜ ዝመናዎችን ለመቀበል ይመዝገቡ።',
      placeholder: 'ኢሜልዎን ያስገቡ',
      button: 'ይመዝገቡ',
    },
    resume: 'ሪዞሜ ያውርዱ',
    language: 'ቋንቋ',
    switchTo: (lang) => `ወደ ${lang === 'en' ? 'English' : 'አማርኛ'} ይቀይሩ`,
  },
  en: {
    home: {
      title: 'Welcome to My Portfolio',
      description: 'I am Aweke Adisie, a passionate developer crafting innovative solutions with modern technologies.',
      cta: 'Explore My Work',
    },
    about: {
      title: 'About Me',
      description: 'Learn about my journey and experience.',
      longDescription: 'I am Aweke Adisie, a Computer Science graduate from Woldia University, driven by a passion for crafting innovative web and mobile applications. With expertise in Python, React Native, and modern web technologies, I\'ve built user-focused solutions like a cinema ticketing app and a student clearance system, delivering seamless digital experiences. My work focuses on creating intuitive, scalable applications that solve real-world problems. I also dabble in video editing and content creation, using tools like Adobe Premiere Pro to craft engaging stories for platforms like TikTok, enhancing my ability to bring a creative edge to my technical projects.',
    },
    projects: {
      title: 'My Projects',
      description: 'Check out some of my recent work and personal projects.',
      technologies: 'Technologies:',
      code: 'Code',
      liveDemo: 'Live Demo',
      list: [
        { 
          title: 'School Management System', 
          description: 'A full-stack school Management System solution built with Next.js, TypeScript, and Firebase integration. Features user authentication, product management, and secure payments.', 
          technologies: ['Next.js', 'Firebase', 'Tailwind CSS', 'Cloudinary'] 
        },
        { 
          title: 'Restaurant Management App', 
          description: 'A collaborative Restaurant Management application with QR code ordering, real-time menu updates, and table management. Built with Next.js and Firebase to provide responsive, scalable, and secure operations.', 
          technologies: ['Tailwind CSS', 'Next.js', 'Firebase', 'Cloudinary'] 
        },
        { 
          title: 'Social Media Platform', 
          description: 'Created a high-performance social media platform for short-form video uploads with real-time engagement and creator monetization tools. Designed with secure authentication and cloud-based storage.', 
          technologies: ['Tailwind CSS', 'Next.js', 'Firebase', 'Cloudinary'] 
        },
        { 
          title: 'Cinema Ticketing System', 
          description: 'Full-featured ticketing platform with movie listings, seat selection, real-time booking, and secure payment integration. Built with a responsive UI and admin dashboard for managing screenings and sales.', 
          technologies: ['Tailwind CSS', 'Next.js', 'Firebase', 'Cloudinary', 'Chapa Api'] 
        },
        { 
          title: 'Gym Management System', 
          description: 'A responsive gym website with dark/light mode, smooth animations, and contact form integration with payment support for users and strong search engine.', 
          technologies: ['Tailwind CSS', 'Next.js', 'Firebase', 'Cloudinary', 'Chapa Api'] 
        },
        { 
          title: 'EthioCinema Mobile App', 
          description: 'A responsive portfolio website with dark/light mode, smooth animations, and contact form integration.', 
          technologies: ['Next.js', 'Framer Motion', 'EmailJS', 'Tailwind CSS'] 
        },
      ],
    },
    contact: {
      title: 'Get In Touch',
      description: 'Have a project in mind? Let\'s discuss how we can work together.',
      infoTitle: 'Contact Information',
      emailLabel: 'Email',
      phoneLabel: 'Phone',
      locationLabel: 'Location',
      description2: 'I\'m excited to discuss new opportunities, creative projects, or potential collaborations. Reach out today!',
      connect: 'Connect with me:',
      linkedin: 'LinkedIn',
      telegram: 'Telegram',
      nameLabel: 'Your Name',
      companyLabel: 'Organization Name',
      messageLabel: 'Your Message',
      sendButton: 'Send Message',
      sending: 'Sending...',
      successMessage: 'Message sent successfully! I\'ll get back to you soon.',
      errorMessage: 'Failed to send message. Please try again or email me directly at awekeadisie@gmail.com.',
      validationName: 'Please enter your name',
      validationEmail: 'Please enter a valid email address',
      validationMessage: 'Please enter your message',
      validationLength: 'Message exceeds {0} characters',
    },
    skills: {
      title: 'My Skills',
      description: 'Explore the technologies and tools I specialize in to build impactful solutions.',
      categories: {
        frontend: 'Frontend Development',
        backend: 'Backend Development',
        mobile: 'Mobile Development',
        database: 'Database & Storage',
        tools: 'Tools & Services',
        'video-editing': 'Video Editing',
      },
      proficiency: 'Proficiency:',
      levels: {
        1: 'Beginner',
        2: 'Basic',
        3: 'Intermediate',
        4: 'Advanced',
        5: 'Expert',
      },
      close: 'Close',
      list: [
        { name: 'React', description: 'I build dynamic SPAs with reusable components, hooks for state management, and integrate APIs for real-time data fetching in modern web applications.', category: 'frontend', proficiency: 5 },
        { name: 'React Native', description: 'I develop cross-platform mobile apps using Expo, implement native modules, and create responsive UIs that work seamlessly on both iOS and Android.', category: 'mobile', proficiency: 4 },
        { name: 'Next.js', description: 'I leverage SSR and SSG for optimal SEO, implement API routes for full-stack solutions, and use App Router for scalable, high-performance applications.', category: 'frontend', proficiency: 5 },
        { name: 'TypeScript', description: 'I implement type safety across projects, define interfaces for complex data structures, and enhance code maintainability in large-scale applications.', category: 'frontend', proficiency: 4 },
        { name: 'Tailwind CSS', description: 'I rapidly prototype responsive designs, create custom utility classes, and build consistent design systems with dark mode support.', category: 'frontend', proficiency: 5 },
        { name: 'Python', description: 'I develop backend APIs, automate workflows with scripts, perform data analysis with Pandas, and build machine learning models for various applications.', category: 'backend', proficiency: 4 },
        { name: 'Django', description: 'I build secure REST APIs with Django REST Framework, implement authentication systems, and create scalable web applications with PostgreSQL.', category: 'backend', proficiency: 4 },
        { name: 'Node.js', description: 'I create RESTful APIs with Express.js, implement real-time features with Socket.io, and build scalable server-side applications.', category: 'backend', proficiency: 4 },
        { name: 'Firebase', description: 'I implement user authentication, use Firestore for real-time databases, handle file storage, and deploy serverless functions.', category: 'backend', proficiency: 4 },
        { name: 'Java', description: 'I develop enterprise applications using Spring Boot, create Android apps, and build robust systems with object-oriented design patterns.', category: 'mobile', proficiency: 4 },
        { name: 'C++', description: 'I build high-performance applications, work with memory management, and develop system-level software requiring optimal resource utilization.', category: 'backend', proficiency: 3 },
        { name: 'Cloudinary', description: 'I optimize image delivery with responsive breakpoints, implement video transformations, and manage digital assets efficiently in web applications.', category: 'tools', proficiency: 4 },
        { name: 'CapCut', description: 'I create engaging video content with advanced editing, apply visual effects, and produce professional-grade videos for social media and marketing.', category: 'video-editing', proficiency: 5 },
      ],
    },
    footer: {
      aboutTitle: 'About',
      aboutDescription: 'Aweke Adisie is a passionate web and mobile app developer and video editor creating innovative solutions with modern technologies.',
      navigationTitle: 'Navigation',
      connectTitle: 'Connect',
      contactTitle: 'Contact',
      copyright: (year) => `© ${year} Aweke Adisie. All rights reserved.`,
    },
    navbar: {
      titles: ['Aweke Adisie', 'Mobile Developer', 'Web Developer', 'Video Editor'],
      about: 'About',
      projects: 'Projects',
      skills: 'Skills',
      contact: 'Contact',
    },
    stats: {
      title: 'My Achievements',
      years: 'Years of Experience',
      projects: 'Projects Completed',
      clients: 'Happy Clients',
    },
    newsletter: {
      title: 'Stay Updated',
      description: 'Subscribe to my newsletter for the latest updates on my work and industry insights.',
      placeholder: 'Enter your email',
      button: 'Subscribe',
    },
    resume: 'Download Resume',
    language: 'Language',
    switchTo: (lang) => `Switch to ${lang === 'am' ? 'Amharic' : 'English'}`,
  },
};

// Default fallback translation
const defaultTranslation = translations.en;

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState('am');
  const [currentTranslation, setCurrentTranslation] = useState<Translation>(defaultTranslation);

  useEffect(() => {
    const preferredLang = localStorage.getItem('preferredLanguage') || 'am';
    setLanguage(preferredLang);
    setCurrentTranslation(translations[preferredLang] || defaultTranslation);
  }, []);

  const setLanguageAndPersist = (lang: string) => {
    setLanguage(lang);
    setCurrentTranslation(translations[lang] || defaultTranslation);
    localStorage.setItem('preferredLanguage', lang);
  };

  return (
    <LanguageContext.Provider value={{ 
      language, 
      setLanguage: setLanguageAndPersist, 
      t: currentTranslation 
    }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}