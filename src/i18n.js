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
        subtitle: 'Software Engineer Specializing in Software Design, Database Solutions, and ETL Processes',
        cta: 'View My Work',
      },
      about: {
        title: 'About Me',
        description: 'I\'m a passionate Software Engineer with expertise in <strong>Software Design</strong>, <strong>Database Design</strong>, <strong>Software Development</strong>, <strong>ETL Processes</strong>, <strong>Database Scripting</strong>, and <strong>Excel VBA</strong>. With a strong focus on building scalable and efficient solutions, I have delivered projects that optimize workflows and enhance business performance. My goal is to create robust systems that solve real-world problems.',
      },
      portfolio: {
        title: 'Portfolio',
        project1: {
          title: 'ETL Pipeline for Data Warehouse',
          description: 'Designed and implemented an ETL pipeline using Python and Apache Airflow to process large datasets, improving data integration for a retail company.',
          link: 'View Details',
        },
        project2: {
          title: 'Database Optimization',
          description: 'Optimized SQL Server database with complex stored procedures and indexing, reducing query execution time by 40%.',
          link: 'View Details',
        },
        project3: {
          title: 'Excel VBA Automation',
          description: 'Developed VBA scripts to automate financial reporting, saving 20 hours of manual work per week.',
          link: 'View Details',
        },
      },
      skills: {
        title: 'Skills',
        skill1: {
          title: 'Software Design',
          description: 'Designing scalable and maintainable software architectures using UML and design patterns.',
        },
        skill2: {
          title: 'Database Design & Scripting',
          description: 'Expertise in designing relational databases and writing efficient SQL scripts for MySQL, SQL Server, and PostgreSQL.',
        },
        skill3: {
          title: 'ETL & Automation',
          description: 'Building ETL pipelines with tools like Apache Airflow and automating workflows with Python and VBA.',
        },
      },
      contact: {
        title: 'Get in Touch',
        subtitle: 'Interested in working together? Feel free to reach out!',
        email: 'Email Me',
        linkedin: 'LinkedIn',
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
        subtitle: 'วิศวกรซอฟต์แวร์ผู้เชี่ยวชาญด้านการออกแบบซอฟต์แวร์ ฐานข้อมูล และกระบวนการ ETL',
        cta: 'ดูผลงานของฉัน',
      },
      about: {
        title: 'เกี่ยวกับฉัน',
        description: 'ฉันเป็นวิศวกรซอฟต์แวร์ที่มีความมุ่งมั่นและเชี่ยวชาญใน <strong>การออกแบบซอฟต์แวร์</strong>, <strong>การออกแบบฐานข้อมูล</strong>, <strong>การพัฒนาซอฟต์แวร์</strong>, <strong>กระบวนการ ETL</strong>, <strong>การเขียนสคริปต์ฐานข้อมูล</strong>, และ <strong>Excel VBA</strong> ฉันมุ่งเน้นการสร้างโซลูชันที่สามารถขยายได้และมีประสิทธิภาพ โดยได้ส่งมอบโปรเจกต์ที่ช่วยเพิ่มประสิทธิภาพการทำงานและผลักดันประสิทธิภาพของธุรกิจ เป้าหมายของฉันคือการสร้างระบบที่แข็งแกร่งเพื่อแก้ปัญหาในโลกแห่งความเป็นจริง',
      },
      portfolio: {
        title: 'ผลงาน',
        project1: {
          title: 'ระบบ ETL สำหรับ Data Warehouse',
          description: 'ออกแบบและพัฒนาระบบ ETL โดยใช้ Python และ Apache Airflow เพื่อประมวลผลชุดข้อมูลขนาดใหญ่ ปรับปรุงการรวมข้อมูลสำหรับบริษัทค้าปลีก',
          link: 'ดูรายละเอียด',
        },
        project2: {
          title: 'การปรับปรุงประสิทธิภาพฐานข้อมูล',
          description: 'ปรับปรุงประสิทธิภาพฐานข้อมูล SQL Server ด้วย stored procedures และการทำ index ลดเวลาในการรัน query ลง 40%',
          link: 'ดูรายละเอียด',
        },
        project3: {
          title: 'การทำระบบอัตโนมัติด้วย Excel VBA',
          description: 'พัฒนาสคริปต์ VBA เพื่อทำระบบอัตโนมัติสำหรับการรายงานทางการเงิน ประหยัดเวลา 20 ชั่วโมงต่อสัปดาห์',
          link: 'ดูรายละเอียด',
        },
      },
      skills: {
        title: 'ทักษะ',
        skill1: {
          title: 'การออกแบบซอฟต์แวร์',
          description: 'ออกแบบสถาปัตยกรรมซอฟต์แวร์ที่สามารถขยายได้และบำรุงรักษาง่ายโดยใช้ UML และ design patterns',
        },
        skill2: {
          title: 'การออกแบบฐานข้อมูลและสคริปต์',
          description: 'เชี่ยวชาญในการออกแบบฐานข้อมูลเชิงสัมพันธ์และเขียนสคริปต์ SQL ที่มีประสิทธิภาพสำหรับ MySQL, SQL Server และ PostgreSQL',
        },
        skill3: {
          title: 'ETL และการทำระบบอัตโนมัติ',
          description: 'สร้างระบบ ETL ด้วยเครื่องมือเช่น Apache Airflow และทำระบบอัตโนมัติด้วย Python และ VBA',
        },
      },
      contact: {
        title: 'ติดต่อฉัน',
        subtitle: 'สนใจทำงานร่วมกัน? ติดต่อได้เลย!',
        email: 'ส่งอีเมลถึงฉัน',
        linkedin: 'LinkedIn',
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
        subtitle: '软件工程师，专注于软件设计、数据库解决方案和ETL流程',
        cta: '查看我的作品',
      },
      about: {
        title: '关于我',
        description: '我是一名充满热情的软件工程师，擅长<strong>软件设计</strong>、<strong>数据库设计</strong>、<strong>软件开发</strong>、<strong>ETL流程</strong>、<strong>数据库脚本</strong>和<strong>Excel VBA</strong>。我专注于构建可扩展且高效的解决方案，交付了优化工作流程并提升业务性能的项目。我的目标是创建强大的系统来解决现实世界的问题。',
      },
      portfolio: {
        title: '作品集',
        project1: {
          title: '数据仓库的ETL流水线',
          description: '使用Python和Apache Airflow设计并实现了一个ETL流水线来处理大型数据集，为零售公司改善了数据整合。',
          link: '查看详情',
        },
        project2: {
          title: '数据库优化',
          description: '优化SQL Server数据库，使用复杂的存储过程和索引，将查询执行时间缩短了40%。',
          link: '查看详情',
        },
        project3: {
          title: 'Excel VBA自动化',
          description: '开发VBA脚本以自动化财务报告，每周节省20小时的手动工作时间。',
          link: '查看详情',
        },
      },
      skills: {
        title: '技能',
        skill1: {
          title: '软件设计',
          description: '使用UML和设计模式设计可扩展且易于维护的软件架构。',
        },
        skill2: {
          title: '数据库设计与脚本',
          description: '擅长设计关系型数据库并为MySQL、SQL Server和PostgreSQL编写高效的SQL脚本。',
        },
        skill3: {
          title: 'ETL与自动化',
          description: '使用Apache Airflow等工具构建ETL流水线，并使用Python和VBA实现工作流程自动化。',
        },
      },
      contact: {
        title: '联系我',
        subtitle: '有兴趣合作吗？随时联系我！',
        email: '发送电子邮件',
        linkedin: 'LinkedIn',
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
        subtitle: 'ソフトウェアデザイン、データベースソリューション、ETLプロセスに特化したソフトウェアエンジニア',
        cta: '私の作品を見る',
      },
      about: {
        title: '私について',
        description: '私は情熱的なソフトウェアエンジニアであり、<strong>ソフトウェアデザイン</strong>、<strong>データベースデザイン</strong>、<strong>ソフトウェア開発</strong>、<strong>ETLプロセス</strong>、<strong>データベーススクリプト</strong>、および<strong>Excel VBA</strong>に精通しています。スケーラブルで効率的なソリューションの構築に重点を置き、ワークフローの最適化とビジネスパフォーマンスの向上を実現するプロジェクトを提供してきました。私の目標は、現実世界の問題を解決する堅牢なシステムを作成することです。',
      },
      portfolio: {
        title: 'ポートフォリオ',
        project1: {
          title: 'データウェアハウスのETLパイプライン',
          description: 'PythonとApache Airflowを使用して大規模なデータセットを処理するETLパイプラインを設計・実装し、小売企業のデータ統合を改善しました。',
          link: '詳細を見る',
        },
        project2: {
          title: 'データベース最適化',
          description: '複雑なストアドプロシージャとインデックスを使用してSQL Serverデータベースを最適化し、クエリ実行時間を40％削減しました。',
          link: '詳細を見る',
        },
        project3: {
          title: 'Excel VBA自動化',
          description: '財務報告を自動化するVBAスクリプトを開発し、週20時間のマニュアル作業を削減しました。',
          link: '詳細を見る',
        },
      },
      skills: {
        title: 'スキル',
        skill1: {
          title: 'ソフトウェアデザイン',
          description: 'UMLとデザインパターンを使用してスケーラブルで保守性の高いソフトウェアアーキテクチャを設計します。',
        },
        skill2: {
          title: 'データベースデザインとスクリプト',
          description: 'MySQL、SQL Server、PostgreSQL向けに関係データベースの設計と効率的なSQLスクリプトの作成に精通しています。',
        },
        skill3: {
          title: 'ETLと自動化',
          description: 'Apache Airflowなどのツールを使用してETLパイプラインを構築し、PythonとVBAでワークフローを自動化します。',
        },
      },
      contact: {
        title: '連絡を取る',
        subtitle: '一緒に働くことに興味がありますか？気軽にご連絡ください！',
        email: 'メールを送る',
        linkedin: 'LinkedIn',
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