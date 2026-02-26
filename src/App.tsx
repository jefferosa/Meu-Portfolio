import { Container, Typography, Grid } from '@mui/material';
import { BentoCard } from './components/BentoCard';

function App() {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      
      {/* Grid Principal */}
      <Grid container spacing={3}>
        
        {/* Bloco 1: Sobre Mim */}
        <Grid size={{ xs: 12, md: 8 }}>
          <BentoCard>
            <Typography variant="h2">Olá, eu sou o Jefferosa.</Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mt: 2 }}>
              Desenvolvedor Fullstack com base em C# e .NET, focado na web moderna e explorando o mundo 3D.
            </Typography>
          </BentoCard>
        </Grid>

        {/* Bloco 2: Foto/Avatar */}
        <Grid size={{ xs: 12, md: 4 }}>
          <BentoCard sx={{ justifyContent: 'center', alignItems: 'center' }}>
            <Typography variant="body1" color="text.secondary">
              [Sua Foto Aqui]
            </Typography>
          </BentoCard>
        </Grid>

        {/* Bloco 3: O GRANDE DESTAQUE - Ilhota B2B */}
        <Grid size={{ xs: 12 }}>
          <BentoCard sx={{ minHeight: 300 }}>
            <Typography variant="h2">Ilhota B2B</Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mt: 1 }}>
              E-commerce B2B de alta performance construído com React.
            </Typography>
          </BentoCard>
        </Grid>

        {/* Blocos 4, 5 e 6: Skills */}
        <Grid size={{ xs: 12, md: 4 }}>
          <BentoCard>
            <Typography variant="h6">Backend & Desktop</Typography>
            <Typography variant="body2" color="text.secondary" sx={{ fontFamily: 'monospace', mt: 1 }}>
              C# • .NET • Windows Forms • SQL
            </Typography>
          </BentoCard>
        </Grid>

        <Grid size={{ xs: 12, md: 4 }}>
          <BentoCard>
            <Typography variant="h6">Frontend Web</Typography>
            <Typography variant="body2" color="text.secondary" sx={{ fontFamily: 'monospace', mt: 1 }}>
              React • TypeScript • Material-UI
            </Typography>
          </BentoCard>
        </Grid>

        <Grid size={{ xs: 12, md: 4 }}>
          <BentoCard>
            <Typography variant="h6">Game Dev / 3D</Typography>
            <Typography variant="body2" color="text.secondary" sx={{ fontFamily: 'monospace', mt: 1 }}>
              Unity 3D • C# Scripts
            </Typography>
          </BentoCard>
        </Grid>

      </Grid>
    </Container>
  );
}

export default App;