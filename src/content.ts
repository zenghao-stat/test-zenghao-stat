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
}

export interface Publication {
  id: number;
  title: string;
  authors: string;
  venue: string;
  type: 'Conference' | 'Journal' | 'Preprint';
  year: string;
  pdf?: string;
  code?: string;
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
      'National University of Singapore (NUS)'
    ],
    location: 'Shenzhen, China',
    bio: 'Heterogeneity nourishes statistics; independence begets probability; uncertainty is eternal. I focus on model-free statistical machine learning theory, predictive inference (Conformal Prediction), and interdisciplinary research at the intersection of LLMs, spatial statistics, and econometrics.',
    email: 'zenghao.acmail@gmail.com',
    scholar: 'https://scholar.google.com/citations?user=-EiBHeIAAAAJ&hl=en',
    github: 'https://github.com/zenghao-stat',
    openreview: 'https://openreview.net/profile?id=%7EHao_Zeng8',
    siteUrl: 'https://zenghao-stat.github.io',
    cvUrl: 'https://zenghao-stat.github.io/cv_folder/cv.pdf',
    teachingUrl: 'https://zenghao-stat.github.io/teaching/',
    seminarsUrl: 'https://zenghao-stat.github.io/seminars/'
  },
  news: [
    { date: 'Nov 2025', content: "Paper 'Transfer Learning for Spatial Autoregressive Models' accepted to **Journal of Business & Economic Statistics (JBES)**." },
    { date: 'Jul 2025', content: "Paper 'Parametric Scaling Law of Tuning Bias' accepted to **ICML 2025**." },
    { date: 'May 2025', content: "Paper on 'Online Conformal Prediction' accepted to **NeurIPS 2025**." },
    { date: 'Jul 2024', content: 'Joined SUSTech & NUS Joint Research Program as a Postdoc.' },
    { date: 'Jun 2024', content: 'Graduated with Ph.D. in Statistics from Xiamen University.' }
  ],
  publications: [
    { id: 1, title: 'Parametric Scaling Law of Tuning Bias in Conformal Prediction', authors: 'Hao Zeng*, K Liu*, B Jing, H Wei', venue: 'ICML 2025', type: 'Conference', year: '2025', pdf: '', code: '#' },
    { id: 2, title: 'Transfer Learning for Spatial Autoregressive Models with Application to U.S. Presidential Election Prediction', authors: 'Hao Zeng, W Zhong, X Xu', venue: 'Journal of Business & Economic Statistics (JBES)', type: 'Journal', year: '2025', pdf: '#' },
    { id: 3, title: 'Exploring the Noise Robustness of Online Conformal Prediction', authors: 'H Xi, K Liu, Hao Zeng, W Sun, H Wei', venue: 'NeurIPS 2025', type: 'Conference', year: '2025', pdf: '#', code: '#' },
    { id: 4, title: 'PAC Reasoning: Controlling the Performance Loss for Efficient Reasoning', authors: 'Hao Zeng*, J Huang*, B Jing, H Wei, B An', venue: 'arXiv Preprint', type: 'Preprint', year: '2025', pdf: '#' },
    { id: 5, title: 'Robust Integrative Analysis via Quantile Regression with Homogeneity and Sparsity', authors: 'Hao Zeng, C Wan, W Zhong, T Liu', venue: 'Journal of Statistical Planning and Inference', type: 'Journal', year: '2025', pdf: '#' }
  ],
  services: [
    { type: 'Conference Reviewer', items: ['NeurIPS (2024, 2025)', 'ICML (2024, 2025)', 'ICLR (2025)', 'AISTATS (2024)'] },
    // { type: 'Journal Reviewer', items: ['Journal of the American Statistical Association (JASA)', 'Annals of Statistics', 'Journal of Business & Economic Statistics (JBES)'] },
    // { type: 'Workshop', items: ['Organizer, CP-LLM Workshop \u0040 NeurIPS 2025'] }
  ]
};