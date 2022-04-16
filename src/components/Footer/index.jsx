// MUI Components
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Footer = () => (
  <Box
    component="footer"
    sx={{
      display: 'flex', justifyContent: 'center', alignItems: 'center', py: '2rem',
    }}
  >
    <Typography component="p">© Anak Agung Sinta Trisnajayanti.2022</Typography>
  </Box>
);

export default Footer;
