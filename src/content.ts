import publicationsData from './publications.json';

export interface Profile {
  name: string;
  cnName: string;
  title: string;
  affiliations: string[];
  location: string;
  bio: string;
  email: string;
  scholar: string;
  github: string;
  openreview: string;
  siteUrl: string;
  cvUrl: string;
  teachingUrl: string;
  seminarsUrl: string;
  avatarUrl: string;
}

export interface Publication {
  id: number;
  title: string;
  authors: string;
  venue: string;
  type: 'Conference' | 'Journal' | 'Preprint' | 'Software';
  year: string;
  pdf?: string;
  code?: string;
  url?: string; // arxiv 或其他链接
}

export interface Content {
  profile: Profile;
  news: { date: string; content: string }[];
  publications: Publication[];
  services: { type: string; items: string[] }[];
}

export const HAO_DATA: Content = {
  profile: {
    name: 'Hao Zeng',
    cnName: '曾浩',
    title: 'Postdoctoral Researcher',
    affiliations: [
      'Southern University of Science and Technology (SUSTech)',
      'National University of Singapore (NUS)',
    ],
    location: 'Shenzhen, China',
    bio: `I am currently a Postdoctoral in Statistics at SUSTech and NUS, Department of Statistics and Data Science, supported by the SUSTech-NUS Joint Research Program, supervised by Prof. Bingyi Jing, Prof. Hongxin Wei, and Prof. Wang Zhou. I obtained my PhD in Statistics from Gregory and Paula Chow Institute for Studies in Economics, Xiamen University in 2024. My research focuses on model-free statistical machine learning theory, methods, and their applications on predictive inference. I am also interested in interdisciplinary research at the intersection of machine learning with LLM, spatial statistics, econometrics, and biostatistics.`,
    email: 'zenghao.acmail@gmail.com',
    scholar: 'https://scholar.google.com/citations?user=-EiBHeIAAAAJ&hl=en',
    github: 'https://github.com/zenghao-stat',
    openreview: 'https://openreview.net/profile?id=%7EHao_Zeng8',
    siteUrl: 'https://zenghao-stat.github.io',
    cvUrl: 'https://zenghao-stat.github.io/cv_folder/cv.pdf',
    teachingUrl: 'https://zenghao-stat.github.io/teaching/',
    seminarsUrl: 'https://zenghao-stat.github.io/seminars/',
    avatarUrl: './images/profile.jpg',
  },
  news: [
    {
      date: 'Nov 2025',
      content:
        "Paper 'Transfer Learning for Spatial Autoregressive Models' accepted to **Journal of Business & Economic Statistics**!",
    },
    {
      date: 'Sep 2025',
      content:
        "Paper 'Robust Online Conformal Prediction under Uniform Label Noise' accepted to **NeurIPS 2026**!",
    },
    {
      date: 'May 2025',
      content:
        "Paper 'Parametric Scaling Law of Tuning Bias in Conformal Prediction' accepted to **ICML 2025**!",
    },
    {
      date: 'Jul 2024',
      content:
        'Started postdoctoral position at SUSTech under the SUSTech-NUS Joint Research Program.',
    },
    {
      date: 'Jun 2024',
      content: 'Graduated with Ph.D. in Statistics from Xiamen University.',
    },
  ],
  // 从 publications.json 导入论文数据
  publications: publicationsData as Publication[],
  services: [
    {
      type: 'Conference Reviewer',
      items: [
        'NeurIPS (2024, 2025)',
        'ICML (2024, 2025)',
        'ICLR (2025, 2026)',
        'AISTATS (2024)',
      ],
    },
  ],
};
