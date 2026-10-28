// Research and projects, one object each. The page draws a ProjectCard for every item.
// To add one, copy an object and change its fields. `link` and `meta` are optional.

export type Project = {
  title: string;
  description: string;
  meta?: string;
  link?: string;
  linkText?: string;
  color: 'red' | 'mustard' | 'pine';
  placeholder?: boolean;
};

export const research: Project[] = [
  {
    title: 'Orbits around Phobos',
    meta: 'Wolfram Summer Research Program, 2025',
    description:
      'Modeled retrograde and halo orbits around Mars\'s moon Phobos, an irregular body, under two- and three-body dynamics, and used Lyapunov exponents to measure which orbits stay stable. Selected as a Wolfram Community Staff Pick.',
    link: 'https://community.wolfram.com/t/wsrp25-modeling-and-evaluating-orbital-trajectories-of-irregular-objects-such-as-phobos/25742',
    linkText: 'Read it on Wolfram Community',
    color: 'mustard',
  },
  {
    title: 'Machine learning for herbal medicine',
    meta: 'Cambridge Centre for International Research, 2024',
    description:
      'Built a random forest classifier on 230 molecular descriptors to screen traditional Chinese medicine compounds for anti-acne activity (validation ROC-AUC 0.803), then used it to rank 238 compounds from Lonicerae flos. Published in the National High School Journal of Science.',
    link: 'https://nhsjs.com/2025/bridging-herbal-medicines-and-modern-pharmaceuticals-using-machine-learning-a-case-study-of-lonicerae-flos-for-acne/',
    linkText: 'Read the paper',
    color: 'red',
  },
];

export const projects: Project[] = [
  {
    title: 'Stock Brief',
    meta: 'y/cs Catalyst, fall 2026',
    description:
      'A multi-agent system that researches stocks: analysts pull prices, fundamentals and news in parallel, plain code checks every number against the data, and a writer and critic turn the findings into a short brief.',
    color: 'pine',
  },
  {
    title: 'Post-quantum cryptography',
    meta: 'Yale Quantum Computing, fall 2026',
    description:
      'Working through quantum key distribution and the algorithms that threaten today\'s encryption, including BB84, E91, Grover\'s and Shor\'s, in Qiskit.',
    color: 'mustard',
    placeholder: true,
  },
];
