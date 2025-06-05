import { useState } from 'react'
import {
  Container,
  Typography,
  IconButton,
  Tooltip,
  Alert,
  CircularProgress,
  Grid,
} from '@mui/material'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { Info } from '@mui/icons-material'
import Header from './components/Header'
import SkipCard from './components/SkipCard'
import Footer from './components/Footer'

function App() {
  const [selectedSkip, setSelectedSkip] = useState(null)

  const { data: skips, isLoading, error } = useQuery({
    queryKey: ['skips'],
    queryFn: async () => {
      const { data } = await axios.get('https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft')
      return data
    }
  })

  if (isLoading) {
    return (
      <div style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'var(--background-default)'
      }}>
        <CircularProgress size={48} />
      </div>
    )
  }

  if (error) {
    return (
      <div style={{
        padding: '24px',
        backgroundColor: 'var(--background-default)',
        minHeight: '100vh'
      }}>
        <Alert
          severity="error"
          sx={{ maxWidth: 600, mx: 'auto' }}
          action={
            <Button color="inherit" size="small" onClick={() => window.location.reload()}>
              Try Again
            </Button>
          }
        >
          Error loading skip data. Please try again later.
        </Alert>
      </div>
    )
  }

  // Check if any skips allow heavy waste
  const hasHeavyWasteSkips = skips.some(skip => skip.allows_heavy_waste)

  return (
    <div style={{
      backgroundColor: 'var(--background-default)',
      minHeight: '100vh',
      paddingBottom: '64px',
      marginBottom: '48px'
    }}>
      <Header />

      <Container maxWidth="xl">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <h2 style={{
              fontSize: '1.5rem',
              margin: 0,
              fontFamily: 'inherit'
            }}>
              Available Skip Sizes
            </h2>
            <Tooltip title="Select the skip size that best suits your needs">
              <IconButton size="small">
                <Info />
              </IconButton>
            </Tooltip>
          </div>

          {hasHeavyWasteSkips && (
            <Alert severity="info" sx={{ maxWidth: 800 }}>
              Some skips are suitable for heavy waste materials like soil, concrete, and rubble.
            </Alert>
          )}

          <div>
            <Grid container spacing={3} columns={12}>
              {skips.map((skip) => (
                <Grid item size={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={skip.id}>
                  <SkipCard
                    {...skip}
                    isSelected={selectedSkip === skip.id}
                    onSelect={() => setSelectedSkip(skip.id)}
                  />
                </Grid>
              ))}
            </Grid>
          </div>
        </div>
      </Container>

      <Footer selectedSkip={selectedSkip} skips={skips} />
    </div>
  )
}

export default App
