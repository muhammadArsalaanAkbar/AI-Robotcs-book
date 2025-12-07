import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  imgUrl: string; // changed from Svg to imgUrl for your book images
  description: ReactNode;
  link: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'ROS 2 Fundamentals',
    imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBqHb7qsjLTX35E2L8uZzosiBnJhWwVQO6xw&s', // example image
    description: <>Nodes, topics, services, actions & humanoid control explained in practical labs.</>,
    link: '/docs/ros2/overview',
  },
  {
    title: 'Simulation & Digital Twin',
    imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTe6sHG0zOAQo6C40VmnEPRnwiSrriH41gYMw&s',
    description: <>Gazebo, Isaac Sim, and Unity-based simulations for humanoid robotics.</>,
    link: '/docs/simulation/overview',
  },
  {
    title: 'Vision-Language-Action (VLA)',
    imgUrl: 'https://media.springernature.com/lw685/springer-static/image/chp%3A10.1007%2F978-3-031-87697-4_6/MediaObjects/615691_1_En_6_Fig1_HTML.png',
    description: <>Planning and perception pipelines using LLMs and VLA agents.</>,
    link: '/docs/vla/overview',
  },
];

function Feature({title, imgUrl, description, link}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img src={imgUrl} className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md mt-3">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
        <a href={link} className="text-blue-600 font-medium mt-2 inline-block">Explore →</a>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
