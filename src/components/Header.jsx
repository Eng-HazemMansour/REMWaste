import { Paper, Container, Typography, Stepper, Step, StepLabel, useTheme, useMediaQuery } from '@mui/material'

const steps = ['Postcode', 'Waste Type', 'Select Skip', 'Permit Check', 'Choose Date', 'Payment']

export default function Header() {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

  return (
    <Paper
      elevation={0}
      sx={{
        borderRadius: 0,
        py: 4,
        mb: 4,
        background: theme => `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.primary.dark})`
      }}
    >
      <Container maxWidth="xl">
        <Typography
          variant={isMobile ? "h4" : "h3"}
          component="h1"
          color="white"
          fontWeight="bold"
          gutterBottom
        >
          Skip Hire
        </Typography>

        <Stepper
          activeStep={1}
          alternativeLabel={!isMobile}
          orientation={isMobile ? 'vertical' : 'horizontal'}
          sx={{
            mt: 4,
            '& .MuiStepLabel-label': {
              color: 'white',
              '&.Mui-active': {
                color: 'white'
              },
              '&.Mui-completed': {
                color: 'white'
              }
            },
            '& .MuiStepIcon-root': {
              color: 'rgba(255,255,255,0.5)',
              '&.Mui-active': {
                color: 'white'
              },
              '&.Mui-completed': {
                color: '#132f4c'
              }
            }
          }}
        >
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </Container>
    </Paper>
  )
} 