import { Container, Typography, Grid, Avatar, Box, IconButton, Stack } from '@mui/material';
import { BentoCard } from './components/BentoCard';

// Ícones do Material-UI
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import TerminalIcon from '@mui/icons-material/Terminal';
import WebIcon from '@mui/icons-material/Web';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';

function App() {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Grid container spacing={3}>
        
        {/* Bloco 1: Sobre Mim */}
        <Grid size={{ xs: 12, md: 8 }}>
          <BentoCard>
            <Typography variant="h2">Olá, eu sou o Jefferson Rosa.</Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mt: 2, fontSize: '1.1rem', lineHeight: 1.6 }}>
              Desenvolvedor com 3 anos de experiência sólida em C# e .NET, focado na criação de interfaces web modernas e explorando o desenvolvimento de ambientes 3D.
            </Typography>
            
            {/* Botões de Redes Sociais */}
            <Stack direction="row" spacing={2} sx={{ mt: 'auto', pt: 4 }}>
              <IconButton color="primary" component="a" href="https://github.com/jefferosa" target="_blank">
                <GitHubIcon fontSize="large" />
              </IconButton>
              <IconButton color="primary" component="a" href="https://www.linkedin.com/in/jefferson-rosa-2a331a170/" target="_blank">
                <LinkedInIcon fontSize="large" />
              </IconButton>
              <IconButton color="primary" component="a" href="mailto:jefmi.98@gmail.com">
                <EmailIcon fontSize="large" />
              </IconButton>
            </Stack>
          </BentoCard>
        </Grid>

        {/* Bloco 2: Foto/Avatar */}
        <Grid size={{ xs: 12, md: 4 }}>
          <BentoCard sx={{ justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
            {/* Dica: Coloque uma foto sua na pasta 'public' com o nome 'perfil.jpg' */}
            <Avatar 
              src="/perfil.jpg" 
              alt="Jefferosa" 
              sx={{ width: 150, height: 150, mb: 2, border: '4px solid #2A2A2A' }} 
            />
            <Typography variant="h6">Jefferson Rosa</Typography>
            <Typography variant="body2" color="primary">Software Developer</Typography>
          </BentoCard>
        </Grid>

        {/* Bloco 3: O GRANDE DESTAQUE - Ilhota B2B */}
        <Grid size={{ xs: 12 }}>
          <BentoCard sx={{ minHeight: 300, display: 'flex', justifyContent: 'center' }}>
            <Box>
              <Typography variant="h2">Ilhota B2B</Typography>
              <Typography variant="body1" color="text.secondary" sx={{ mt: 1 }}>
                E-commerce B2B de alta performance construído com React.
              </Typography>
            </Box>
          </BentoCard>
        </Grid>

        {/* Blocos 4, 5 e 6: Skills com Ícones */}
        <Grid size={{ xs: 12, md: 4 }}>
          <BentoCard>
            <TerminalIcon color="primary" sx={{ fontSize: 40, mb: 2 }} />
            <Typography variant="h6">Backend & Desktop</Typography>
            <Typography variant="body2" color="text.secondary" sx={{ fontFamily: 'monospace', mt: 1 }}>
              C# • .NET • Windows Forms • SQL
            </Typography>
          </BentoCard>
        </Grid>

        <Grid size={{ xs: 12, md: 4 }}>
          <BentoCard>
            <WebIcon color="primary" sx={{ fontSize: 40, mb: 2 }} />
            <Typography variant="h6">Frontend Web</Typography>
            <Typography variant="body2" color="text.secondary" sx={{ fontFamily: 'monospace', mt: 1 }}>
              React • TypeScript • Material-UI
            </Typography>
          </BentoCard>
        </Grid>

        <Grid size={{ xs: 12, md: 4 }}>
          <BentoCard>
            <SportsEsportsIcon color="primary" sx={{ fontSize: 40, mb: 2 }} />
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