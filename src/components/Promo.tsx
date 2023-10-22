import { styled, Box } from '@mui/material';
import { CustomContainer, CustomBtn } from './CustomElements';

const bgImage = require("../assets/promo-bg-img.png");
const designEl = require('../assets/design-el.png');

const Section = styled('section')({
  position: 'relative',
  height: 'calc(100vh - 90px)',
  width: '100%',
  backgroundImage: `url(${bgImage})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
});

const CustomHead = styled('h1')(({ theme }) => ({
  color: '#FFF',
  fontFamily: 'Josefin Sans',
  fontSize: '60px',
  fontWeight: 700,
  lineHeight: '80px',
  maxWidth: '770px',
  width: '100%',
  [theme.breakpoints.down("md")]: {
    fontSize: '40px',
    lineHeight: '50px',
  },
  [theme.breakpoints.down("sm")]: {
    textAlign: 'center',
    fontSize: '25px',
    lineHeight: '30px',
  },
}));

const Image = styled('img')(({ theme }) => ({
  position: 'absolute',
  bottom: 0,
  right: 0,
  display: 'block',
  maxWidth: '400px',
  maxHeight: '400px',
  width: '100%',
  height: '100%',
  objectFit: 'fill',
  [theme.breakpoints.down("md")]: {
    display: 'none',
  },
}));

const Description = styled('div')(({ theme }) => ({
  color: '#fff',
  fontFamily: 'Josefin Sans',
  fontSize: '24px',
  fontWeight: 400,
  lineHeight: '32px',
  maxWidth: '470px',
  width: '100%',
  margin: '40px 0',
  [theme.breakpoints.down("sm")]: {
    fontSize: '18px',
    lineHeight: '24px',
    textAlign: 'center'
  },
}));

const Promo = () => {
  return (
    <Section>
      <CustomContainer>
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          width: '100%',
          height: '100%',
          alignItems: { xs: 'center', sm: 'start' }
        }}>
          <CustomHead>Meaningful investments in Main Street businesses</CustomHead>
          <Description>
            Browse vetted investment offerings in communities all over the US.
          </Description>
          <Box>
            <CustomBtn>Get Started</CustomBtn>
          </Box>
        </Box>
      </CustomContainer>
      <Image src={designEl} alt="" />
    </Section>
  )
}

export default Promo
