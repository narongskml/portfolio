import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Translation resources
const resources = {
  en: {
    translation: {
      my:{
        name:'NARONG SUNGKHAMALAI'
      },
      navbar: {
        home: 'Home',
        about: 'About',
        portfolio: 'Portfolio',
        skills: 'Skills',
        contact: 'Contact',
      },
      hero: {
        title: 'Welcome to My Portfolio',
        subtitle: 'I am a passionate software developer who continuously explores new technologies and applies them to real-world solutions.',
        cta: 'View My Work',
      },
      about: {
        title: 'About Me',
        description: 'Technology professional with over 20 years of experience in software development, project management, and financial technology. Demonstrated expertise in fund management systems, software architecture, SDLC, and cybersecurity. Proven track record in leading cross-functional teams, delivering innovative technology solutions, and streamlining operations for financial institutions. Deeply committed to continuous learning and leveraging emerging technologies to solve complex business challenges.',
      },
      portfolio: {
        title: 'Portfolio',
        project1: {
          title: 'Fund Management System',
          description: 'Developed software solutions across Windows applications, services, web services, and APIs to meet the business needs of fund management operations.',
          link: 'View Details',
          linkurl: 'https://github.com/narongskml',
        },
        project2: {
          title: 'T-LIVE-CODE YouTube',
          description: '“T-LIVE-CODE” YouTube channel, which shares basic tech knowledge in Thai, helping the local community understand technology more easily.',
          link: 'View Details',
          linkurl: 'https://www.youtube.com/@t-live-code',
        },
        project3: {
          title: 'Software Project Management',
          description: 'Managed multiple internal software projects, coordinating across teams to ensure smooth collaboration. Focused on developing user-centric solutions that effectively addressed business requirements.',
          link: 'View Details',
        },
      },
      skills: {
        title: 'Skills',
        skill1: {
          title: '💻 Software Development',
          description: 'Expert in software development with over 20 years of experience in system analysis, design, and enterprise-level development, especially in the finance and securities industry.',
        },
        skill2: {
          title: '🎓 Tech Education & Content Creation',
          description: 'Founder of the “T-LIVE-CODE” YouTube channel, which shares basic tech knowledge in Thai, helping the local community understand technology more easily.',
        },
        skill3: {
          title: '🚀 Leadership & Lifelong Learning',
          description: 'Skilled in technology leadership and continuously learning to stay current with emerging tech trends.',
        },
      },
      contact: {
        title: 'Get in Touch',
        subtitle: 'Interested in working together? Feel free to reach out!',
        email: 'Email Me',
        linkedin: 'LinkedIn',
        youtube: 'YouTube',

      },
      footer: {
        text: '© 2025 Narong Sungkhamalai. All rights reserved.',
      },
    },
  },
  th: {
    translation: {
      my:{
        name:'ณรงค์ สังขมาลัย'
      },
      navbar: {
        home: 'หน้าแรก',
        about: 'เกี่ยวกับฉัน',
        portfolio: 'ผลงาน',
        skills: 'ทักษะ',
        contact: 'ติดต่อ',
      },
      hero: {
        title: 'ยินดีต้อนรับสู่ Portfolio ของฉัน',
        subtitle: 'ผมเป็นนักพัฒนาซอฟต์แวร์ที่มีความหลงใหลในเทคโนโลยีใหม่ ๆ และมุ่งมั่นเรียนรู้อย่างต่อเนื่องเพื่อนำไปประยุกต์ใช้ในโลกจริง ',
        cta: 'ดูผลงานของฉัน',
      },
      about: {
        title: 'เกี่ยวกับฉัน',
        description: 'ผู้เชี่ยวชาญด้านเทคโนโลยีที่มีประสบการณ์มากกว่า 20 ปีในด้านการพัฒนาซอฟต์แวร์ การบริหารโครงการ และฟินเทค มีความเชี่ยวชาญเป็นพิเศษในระบบบริหารกองทุน สถาปัตยกรรมซอฟต์แวร์ SDLC และความมั่นคงปลอดภัยทางไซเบอร์ มีผลงานเด่นในการนำทีมข้ามสายงาน พัฒนาโซลูชันด้านเทคโนโลยี และเพิ่มประสิทธิภาพกระบวนการในสถาบันการเงิน มุ่งมั่นในการเรียนรู้ตลอดชีวิต และนำเทคโนโลยีสมัยใหม่มาประยุกต์ใช้เพื่อแก้ปัญหาทางธุรกิจอย่างสร้างสรรค์',
      },
      portfolio: {
        title: 'ผลงาน',
        project1: {
          title: 'ระบบบริหารจัดการกองทุน',
          description: 'พัฒนา ซอฟท์แวร์ ทั้ง Windows, Service, Webservice, API เพื่อตอบโจทย์ ธุรกิจจัดการกองทุน ',
          link: 'ดูรายละเอียด',
          linkurl: 'https://github.com/narongskml',
        },
        project2: {
          title: 'ช่อง ยูทูป T-LIVE-CODE',
          description: 'การก่อตั้งและบริหารช่อง YouTube “T-LIVE-CODE” เพื่อแบ่งปันความรู้ด้านเทคโนโลยีและการเขียนโปรแกรมเป็นภาษาไทย แสดงถึงความมุ่งมั่นในการส่งเสริมการเรียนรู้และพัฒนาทักษะของผู้สนใจ',
          link: 'ดูรายละเอียด',
          linkurl: 'https://www.youtube.com/@t-live-code',
        },
        project3: {
          title: 'บริหารจัดการโครงการ',
          description: 'จัดการโครงการภายในองค์กร ที่เกี่ยวกับ Software หลายโครงการ ประสานงานระหว่างทีมงาน เน้นการพัฒนาโซลูชันที่ตอบสนองต่อความต้องการของผู้ใช้งาน',
          link: 'ดูรายละเอียด',
          linkurl: '#',
        },
      },
      skills: {
        title: 'ทักษะ',
        skill1: {
          title: '💻 การพัฒนาซอฟต์แวร์',
          description: 'เชี่ยวชาญการพัฒนาซอฟต์แวร์ด้วยประสบการณ์กว่า 20 ปี ทั้งด้านวิเคราะห์ ออกแบบ และพัฒนาระบบระดับองค์กร โดยเฉพาะในอุตสาหกรรมการเงินและหลักทรัพย์',
        },
        skill2: {
          title: '🎓 การสอนด้านเทคโนโลยี & การสร้างคอนเทนต์',
          description: 'ผู้ก่อตั้งช่อง YouTube “T-LIVE-CODE” ถ่ายทอดความรู้พื้นฐานด้านเทคโนโลยีเป็นภาษาไทย สนับสนุนการเรียนรู้ของคนไทยให้เข้าใจเทคโนโลยีได้ง่ายขึ้น',
        },
        skill3: {
          title: '🚀 ความเป็นผู้นำ & การเรียนรู้อย่างต่อเนื่อง',
          description: 'มีทักษะภาวะผู้นำในงานด้านเทคโนโลยี พร้อมใฝ่รู้และพัฒนาตนเองอย่างต่อเนื่อง เพื่อให้ทันกับการเปลี่ยนแปลงของโลกเทคโนโลยีอยู่เสมอ',
        },
      },
      contact: {
        title: 'ติดต่อฉัน',
        subtitle: 'สนใจทำงานร่วมกัน? ติดต่อได้เลย!',
        email: 'ส่งอีเมลถึงฉัน',
        linkedin: 'LinkedIn',
        youtube: 'YouTube',

      },
      footer: {
        text: '© 2568 ณรงค์ สังขมาลัย สงวนลิขสิทธิ์',
      },
    },
  },
  zh: {
    translation: {
      my:{
        name:'纳荣·桑卡玛来'
      },
      navbar: {
        home: '首页',
        about: '关于我',
        portfolio: '作品集',
        skills: '技能',
        contact: '联系我',
      },
      hero: {
        title: '欢迎体验我的作品集',
        subtitle: '我是一个充满热情的软件开发者，不断探索新技术并将其应用于现实世界的解决方案。',
        cta: '查看我的作品',
      },
      about: {
        title: '关于我',
        description: '拥有20多年软件开发、项目管理和金融科技经验的技术专家。擅长基金管理系统、软件架构、SDLC（软件开发生命周期）以及网络安全。在领导跨职能团队、实施创新技术方案及优化金融机构运营方面有着丰富的成功经验。始终保持学习热情，积极运用前沿技术解决复杂的商业挑战。',
      },
      portfolio: {
        title: '作品集',
        project1: {
          title: '💻 基金管理系统',
          description: '开发涵盖 Windows 应用程序、服务、Web 服务和 API 的软件，以满足基金管理业务的需求。',
          link: '查看详情',
          linkurl: 'https://github.com/narongskml',
        },
        project2: {
          title: '🎓 YouTube 频道 T-LIVE-CODE',
          description: '创办并管理 YouTube 频道 “T-LIVE-CODE”，以泰语分享技术与编程知识，展现了对学习和社区发展的高度热情。',
          link: '查看详情',
          linkurl: 'https://www.youtube.com/@t-live-code',
        },
        project3: {
          title: '🚀 项目管理',
          description: '负责管理多个内部软件项目，协调团队合作，确保项目顺利执行。专注于开发以用户为中心、符合实际业务需求的解决方案。',
          link: '查看详情',
          linkurl: '#',
        },
      },
      skills: {
        title: '技能',
        skill1: {
          title: '💻 软件开发',
          description: '在系统分析、设计及企业级软件开发方面拥有超过 20 年的丰富经验，尤其专注于金融与证券行业的软件解决方案。',
        },
        skill2: {
          title: '🎓 技术教育与内容创作',
          description: '“T-LIVE-CODE” YouTube 频道创始人，致力于以泰语分享基础技术知识，帮助本地社区更轻松地理解科技内容。',
        },
        skill3: {
          title: '🚀 领导力与终身学习',
          description: '具备出色的技术领导能力，并持续学习新兴技术趋势，积极提升自身专业水平与视野。',
        },
      },
      contact: {
        title: '联系我',
        subtitle: '有兴趣合作吗？随时联系我！',
        email: '发送电子邮件',
        linkedin: 'LinkedIn',
        youtube: 'YouTube',

      },
      footer: {
        text: '© 2025 Narong Sungkhamalai 保留所有权利。',
      },
    },
  },
  ja: {
    translation: {
      my:{
        name:'ナロン・サンカマライ'
      },
      navbar: {
        home: 'ホーム',
        about: '私について',
        portfolio: 'ポートフォリオ',
        skills: 'スキル',
        contact: '連絡先',
      },
      hero: {
        title: '私のポートフォリオへようこそ',
        subtitle: '私は情熱的なソフトウェア開発者で、新しい技術を継続的に探求し、それらを現実世界のソリューションに適用しています。',
        cta: '私の作品を見る',
      },
      about: {
        title: '私について',
        description: 'ソフトウェア開発、プロジェクト管理、フィンテック分野で20年以上の経験を持つテクノロジー専門家。ファンド管理システム、ソフトウェアアーキテクチャ、SDLC、サイバーセキュリティに精通。多機能チームのリーダーとして、革新的なテクノロジーソリューションを提供し、金融機関の業務効率を最適化してきた実績があります。常に学び続け、新しい技術を取り入れてビジネス課題の解決に取り組んでいます。',
      },
      portfolio: {
        title: 'ポートフォリオ',
        project1: {
          title: '💻 ファンド管理システム',
          description: 'Windows アプリケーション、サービス、Web サービス、API を含むソフトウェアを開発し、ファンド管理業務のニーズに対応しました。',
          link: '詳細を見る',
          linkurl:'https://github.com/narongskml',
        },
        project2: {
          title: '🎓 YouTube チャンネル T-LIVE-CODE',
          description: 'YouTubeチャンネル「T-LIVE-CODE」の創設者として、タイ語で基礎的なテクノロジー知識を発信し、地域社会の学びを支援しています。',
          link: '詳細を見る',
          linkurl:'https://www.youtube.com/@t-live-code',
        },
        project3: {
          title: '🚀 プロジェクト管理',
          description: '社内の複数のソフトウェアプロジェクトを管理し、チーム間の連携を円滑に進めました。ユーザーのニーズに応えるソリューションの開発に注力し、ビジネス要件を的確に満たしました。',
          link: '詳細を見る',
          linkurl:'',
        },
      },
      skills: {
        title: 'スキル',
        skill1: {
          title: '💻 ソフトウェア開発',
          description: 'システム分析、設計、およびエンタープライズ向けソフトウェア開発において20年以上の豊富な経験を持ち、特に金融および証券業界に精通しています。',
        },
        skill2: {
          title: '🎓 技術教育とコンテンツ制作',
          description: 'YouTube チャンネル「T-LIVE-CODE」の創設者として、タイ語で基本的なテクノロジー知識を共有し、地域コミュニティがテクノロジーをより理解しやすくすることに貢献しています。',
        },
        skill3: {
          title: '🚀 リーダーシップと生涯学習',
          description: '優れたテクノロジーリーダーシップを発揮しながら、常に最新の技術トレンドを学び続け、専門性と視野の向上に努めています。',
        },
      },
      contact: {
        title: '連絡を取る',
        subtitle: '一緒に働くことに興味がありますか？気軽にご連絡ください！',
        email: 'メールを送る',
        linkedin: 'LinkedIn',
        youtube: 'YouTube',
      },
      footer: {
        text: '© 2025 Narong Sungkhamalai すべての権利を保持します。',
      },
    },
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // React already escapes
    },
  });

export default i18n;