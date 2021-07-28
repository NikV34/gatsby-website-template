import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import { Header } from '../../components';
import { Button } from '../../components/elements';
import { Typography } from '../../components/elements/Typography';
import {
  Section, Wrapper, RightArrow, FactoryImg,
} from './styled';

const query = graphql`
  query {
    homeYaml {
      headingSection {
        title
        CTA {
          label
          url
        }
      }
    }
  }
`;

const HeadingSection = () => {
  const {
    homeYaml: {
      headingSection: {
        title,
        CTA: {
          label,
        },
      },
    },
  } = useStaticQuery(query);

  return (
    <Section>
      <Wrapper>
        <Header />
        <Typography style={{ marginTop: '56px' }} variant="h2" color="black">
          {title}
        </Typography>
        <Button to="/" style={{ marginBottom: '112px', marginTop: '227px' }}>
          <span>{label}</span>
          <RightArrow $marginLeft="10" />
        </Button>
      </Wrapper>
      <FactoryImg />
    </Section>
  );
};

export default HeadingSection;
