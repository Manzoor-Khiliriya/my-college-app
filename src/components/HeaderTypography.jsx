import { Typography } from '@mui/material';

function HeaderTypography({ 
  variant = 'h4', 
  component = 'h1', 
  align = 'center', 
  gutterBottom = true, 
  children, 
  sx = {} 
}) {
  return (
    <Typography
      variant={variant}
      component={component}
      align={align}
      gutterBottom={gutterBottom}
      sx={{
        fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem', lg: '3rem' },
        fontWeight: 'bold',
        color: 'text.primary',
        ...sx, 
      }}
    >
      {children}
    </Typography>
  );
}

export default HeaderTypography;
