import { Paper, Container, Stack, Button, Typography, Box, Divider } from '@mui/material'
import { ArrowBack, ArrowForward } from '@mui/icons-material'

export default function Footer({ selectedSkip, skips }) {
  const selectedSkipDetails = selectedSkip ? skips.find(skip => skip.id === selectedSkip) : null
  const totalPrice = selectedSkipDetails ? Math.round(selectedSkipDetails.price_before_vat * 1.2) : 0

  return (
    <Paper 
      sx={{ 
        p: 2, 
        position: 'fixed', 
        bottom: 0, 
        left: 0, 
        right: 0,
        zIndex: 10,
        borderRadius: 0
      }}
      elevation={3}
    >
      <Container maxWidth="xl">
        <Stack 
          direction={{ xs: 'column', sm: 'row' }} 
          justifyContent="space-between"
          alignItems="center"
          spacing={2}
        >
          <Button
            startIcon={<ArrowBack />}
            variant="text"
            color="inherit"
            size="large"
            sx={{ textTransform: 'none' }}
          >
            Back
          </Button>

          {selectedSkipDetails && (
            <Stack 
              direction="row" 
              spacing={3} 
              divider={<Divider orientation="vertical" flexItem />}
              sx={{ 
                px: 3,
                py: 1,
                bgcolor: 'background.paper',
                borderRadius: 2,
                border: '1px solid',
                borderColor: 'divider'
              }}
            >
              <Stack direction="row" alignItems="center" spacing={1}>
                <Typography color="text.secondary">Size:</Typography>
                <Typography fontWeight="medium">{selectedSkipDetails.size} Yards</Typography>
              </Stack>
              <Stack direction="row" alignItems="center" spacing={1}>
                <Typography color="text.secondary">Hire:</Typography>
                <Typography fontWeight="medium">{selectedSkipDetails.hire_period_days} Days</Typography>
              </Stack>
              <Stack direction="row" alignItems="center" spacing={1}>
                <Typography color="text.secondary">Total:</Typography>
                <Typography fontWeight="medium" color="primary.main">£{totalPrice}</Typography>
              </Stack>
            </Stack>
          )}

          <Button
            endIcon={<ArrowForward />}
            variant="contained"
            color="primary"
            size="large"
            disabled={!selectedSkip}
            sx={{ 
              textTransform: 'none',
              px: 4,
              borderRadius: '28px'
            }}
          >
            Continue
          </Button>
        </Stack>
      </Container>
    </Paper>
  )
} 