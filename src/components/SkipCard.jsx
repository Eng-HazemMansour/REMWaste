import { Card, CardContent, Box, Stack, Typography, Button, useTheme, useMediaQuery } from '@mui/material'
import { LocalShipping, AccessTime, CheckCircle, Construction } from '@mui/icons-material'

export default function SkipCard({ 
  size, 
  hire_period_days, 
  price_before_vat, 
  isSelected, 
  onSelect, 
  allowed_on_road, 
  allows_heavy_waste 
}) {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
  const totalPrice = Math.round(price_before_vat * 1.2) // Including 20% VAT

  return (
    <Card 
      elevation={isSelected ? 8 : 1}
      sx={{ 
        cursor: 'pointer',
        transform: isSelected ? 'scale(1.02)' : 'scale(1)',
        transition: 'all 0.2s ease-in-out',
        position: 'relative',
        bgcolor: 'background.paper',
        height: '100%',
        width: '100%',
        '&:hover': {
          transform: 'scale(1.02)',
          boxShadow: theme.shadows[8]
        }
      }}
      onClick={onSelect}
    >
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '4px',
          bgcolor: isSelected ? 'primary.main' : 'transparent',
          transition: 'all 0.2s ease-in-out'
        }}
      />
      <CardContent sx={{ height: '100%', p: 3 }}>
        <Stack 
          spacing={3} 
          sx={{ 
            height: '100%',
            width: '100%'
          }}
        >
          <Stack spacing={1} alignItems="flex-start">
            <Typography variant="h5" component="h2" fontWeight="bold">
              {size} Yards
            </Typography>
            <Typography 
              variant="h4" 
              color="primary.main" 
              fontWeight="bold"
              sx={{ 
                display: 'flex', 
                alignItems: 'center',
                gap: 0.5
              }}
            >
              £{totalPrice}
              <Typography variant="caption" color="text.secondary" sx={{ ml: 1 }}>
                inc. VAT
              </Typography>
            </Typography>
          </Stack>

          <Stack spacing={2} sx={{ flex: 1 }}>
            <Stack direction="row" alignItems="center" spacing={1}>
              <AccessTime color="action" />
              <Typography>
                {hire_period_days} Day Hire
              </Typography>
            </Stack>

            <Stack direction="row" alignItems="center" spacing={1}>
              <LocalShipping color={allowed_on_road ? "success" : "error"} />
              <Typography>
                {allowed_on_road ? 'Road Permit Available' : 'No Road Permit'}
              </Typography>
            </Stack>

            <Stack direction="row" alignItems="center" spacing={1}>
              <Construction color={allows_heavy_waste ? "success" : "error"} />
              <Typography>
                {allows_heavy_waste ? 'Suitable for Heavy Waste' : 'Light Waste Only'}
              </Typography>
            </Stack>
          </Stack>

          <Button
            variant={isSelected ? "contained" : "outlined"}
            color="primary"
            fullWidth
            size="large"
            sx={{
              borderRadius: '28px',
              py: 1.5,
              textTransform: 'none',
              fontSize: '1.1rem'
            }}
          >
            {isSelected ? (
              <Stack direction="row" spacing={1} alignItems="center">
                <CheckCircle />
                <span>Selected</span>
              </Stack>
            ) : 'Choose This Skip'}
          </Button>
        </Stack>
      </CardContent>
    </Card>
  )
} 