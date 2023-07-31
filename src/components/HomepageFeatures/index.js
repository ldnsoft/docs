import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Easy to Use',
    Svg: require('@site/static/img/undraw_a_moment_to_relax.svg').default,
    description: (
      <>
        Our products and services targeted to be easy to use
      </>
    ),
  },
  {
    title: 'Fast Support',
    Svg: require('@site/static/img/undraw_active_support.svg').default,
    description: (
      <>
        We are have fast and friendly Support
      </>
    ),
  },
  {
    title: 'Almost no errors',
    Svg: require('@site/static/img/undraw_warning.svg').default,
    description: (
      <>
        We promise (probably)
      </>
    ),
  }
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
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
