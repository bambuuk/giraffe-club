import React from 'react'
import { styled } from '@mui/material';
import { CustomContainer } from './CustomElements';
import InvestorCardList from './InvestorCardList';

const Section = styled('section')({
  position: 'relative',
  width: '100%',
  overflow: 'hidden',
});

const Wrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  padding: '160px 0',
  [theme.breakpoints.down("sm")]: {
    padding: '100px 0',
  },
}));

const CustomHeader = styled('h2')(({ theme }) => ({
  color: '#333',
  textAlign: 'center',
  fontFamily: 'Josefin Sans',
  fontSize: '48px',
  fontWeight: 700,
  lineHeight: '64px',
  [theme.breakpoints.down("md")]: {
    fontSize: '39px',
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: '30px',
    lineHeight: '30px',
  },
}));

const Subtitle = styled('div')(({ theme }) => ({
  margin: '0 auto',
  marginTop: '24px',
  color: '#999',
  textAlign: 'center',
  fontFamily: 'Josefin Sans',
  fontSize: '24px',
  fontWeight: '400',
  lineHeight: '32px',
  width: '100%',
  maxWidth: '770px',
  [theme.breakpoints.down("md")]: {
    fontSize: '19px',
  },
  [theme.breakpoints.down("sm")]: {
    lineHeight: '24px',
  },
}));

const Offers = () => {
  return (
    <Section>
      <CustomContainer>
        <Wrapper>
          <CustomHeader>Offerings open for investment</CustomHeader>
          <Subtitle>
            Explore pre-vetted investment opportunities available in a growing number of industry categories.
          </Subtitle>
          <InvestorCardList />
        </Wrapper>
      </CustomContainer>
    </Section>
  )
}

export default Offers
