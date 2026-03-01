import React, { useState } from 'react';
import { 
  Container, Typography, Grid, Avatar, Box, IconButton, Stack, Chip, Button,
  Dialog, Slide, AppBar, Toolbar 
} from '@mui/material';
import type { TransitionProps } from '@mui/material/transitions';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CloseIcon from '@mui/icons-material/Close';
import { BentoCard } from './components/BentoCard';

// Ícones
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import TerminalIcon from '@mui/icons-material/Terminal';
import WebIcon from '@mui/icons-material/Web';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';

// Animação de deslizar de baixo para cima para a tela do projeto
const Transition = React.forwardRef(function Transition(
  props: TransitionProps & { children: React.ReactElement },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function App() {
  // Controle de estado para abrir/fechar o projeto Ilhota B2B
  const [openProject, setOpenProject] = useState(false);

  return (
    <>
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container spacing={3}>
          
          {/* Bloco 1: Sobre Mim */}
          <Grid size={{ xs: 12, md: 8 }}>
            <BentoCard>
              <Typography variant="h2">Olá, eu sou o Jefferson Rosa.</Typography>
              <Typography variant="body1" color="text.secondary" sx={{ mt: 2, fontSize: '1.1rem', lineHeight: 1.6 }}>
                Desenvolvedor com 3 anos de experiência sólida em C# e .NET, focado na criação de interfaces web modernas e explorando o desenvolvimento de ambientes 3D.
              </Typography>
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
              <Avatar src="/perfil.jpg" alt="Jefferosa" sx={{ width: 150, height: 150, mb: 2, border: '4px solid #2A2A2A' }} />
              <Typography variant="h6">Jefferson Rosa</Typography>
              <Typography variant="body2" color="primary">Software Developer</Typography>
            </BentoCard>
          </Grid>

          {/* NOVO BLOCO 3: Meus Projetos (Limpo e Minimalista) */}
          <Grid size={{ xs: 12 }}>
            <BentoCard>
              <Typography variant="h4" sx={{ mb: 3 }}>Projetos em Destaque</Typography>
              
              <Grid container spacing={2}>
                {/* Card Interno do Projeto 1 */}
                <Grid size={{ xs: 12, md: 6 }}>
                  <Box sx={{ 
                    p: 3, 
                    borderRadius: 3, 
                    border: '1px solid #2A2A2A', 
                    bgcolor: 'rgba(255,255,255,0.02)',
                    transition: 'all 0.2s',
                    '&:hover': { bgcolor: 'rgba(255,255,255,0.05)', borderColor: '#555' }
                  }}>
                    <Typography variant="h5" sx={{ mb: 1 }}>Ilhota B2B</Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 3, minHeight: '40px' }}>
                      E-commerce B2B focado em performance e UX para vendas no atacado.
                    </Typography>
                    <Button 
                      variant="outlined" 
                      color="inherit" 
                      endIcon={<ArrowForwardIcon />}
                      onClick={() => setOpenProject(true)} // Abre a tela cheia
                      sx={{ borderRadius: 2, textTransform: 'none' }}
                    >
                      Ver Case Completo
                    </Button>
                  </Box>
                </Grid>

                {/* Card Interno para projetos futuros (Ex: Unity) */}
                <Grid size={{ xs: 12, md: 6 }}>
                  <Box sx={{ 
                    p: 3, borderRadius: 3, border: '1px dashed #2A2A2A', 
                    display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%'
                  }}>
                    <Typography variant="body2" color="text.secondary">
                      + Novo projeto 3D em breve...
                    </Typography>
                  </Box>
                </Grid>
              </Grid>

            </BentoCard>
          </Grid>

          {/* Blocos 4, 5 e 6: Skills */}
          <Grid size={{ xs: 12, md: 4 }}>
            <BentoCard>
              <TerminalIcon color="primary" sx={{ fontSize: 40, mb: 2 }} />
              <Typography variant="h6">Backend & Desktop</Typography>
              <Typography variant="body2" color="text.secondary" sx={{ fontFamily: 'monospace', mt: 1 }}>C# • .NET • Windows Forms</Typography>
            </BentoCard>
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <BentoCard>
              <WebIcon color="primary" sx={{ fontSize: 40, mb: 2 }} />
              <Typography variant="h6">Frontend Web</Typography>
              <Typography variant="body2" color="text.secondary" sx={{ fontFamily: 'monospace', mt: 1 }}>React • TypeScript • MUI</Typography>
            </BentoCard>
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <BentoCard>
              <SportsEsportsIcon color="primary" sx={{ fontSize: 40, mb: 2 }} />
              <Typography variant="h6">Game Dev / 3D</Typography>
              <Typography variant="body2" color="text.secondary" sx={{ fontFamily: 'monospace', mt: 1 }}>Unity 3D • C# Scripts</Typography>
            </BentoCard>
          </Grid>

        </Grid>
      </Container>

      {/* =========================================================
          TELA EXPANSIVA DO PROJETO (MODAL/DIALOG)
          ========================================================= */}
      <Dialog
        fullScreen
        open={openProject}
        onClose={() => setOpenProject(false)}
        TransitionComponent={Transition}
        PaperProps={{ sx: { bgcolor: '#0A0A0A', backgroundImage: 'none' } }}
      >
        <AppBar elevation={0} sx={{ position: 'relative', bgcolor: 'transparent', borderBottom: '1px solid #2A2A2A' }}>
          <Toolbar>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              Case Study: Ilhota B2B
            </Typography>
            <IconButton edge="end" color="inherit" onClick={() => setOpenProject(false)} aria-label="close">
              <CloseIcon />
            </IconButton>
          </Toolbar>
        </AppBar>

        <Container maxWidth="md" sx={{ py: 6 }}>
          {/* Aqui o vídeo tem espaço para brilhar! */}
          <Box sx={{ width: '100%', borderRadius: 4, overflow: 'hidden', mb: 6, boxShadow: '0 20px 50px rgba(0,0,0,0.5)', border: '1px solid #2A2A2A' }}>
            {/* Se for GIF, troque 'video' por 'img' e tire o autoPlay, loop, muted */}
            <Box component="video" src="/ilhota-demo.mp4" autoPlay loop muted playsInline sx={{ width: '100%', display: 'block' }} />
          </Box>

          <Typography variant="h2" sx={{ mb: 2 }}>Ilhota B2B</Typography>
          
          <Stack direction="row" spacing={1} sx={{ mb: 4, flexWrap: 'wrap', gap: 1 }}>
            <Chip label="React" sx={{ bgcolor: '#1A1A1A', color: 'white' }} />
            <Chip label="Material-UI" sx={{ bgcolor: '#1A1A1A', color: 'white' }} />
            <Chip label="Context API" sx={{ bgcolor: '#1A1A1A', color: 'white' }} />
            <Chip label="C# / API" sx={{ bgcolor: '#1A1A1A', color: 'white' }} />
          </Stack>

          <Typography variant="h5" sx={{ mb: 2, color: '#EDEDED' }}>O Desafio</Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 4, fontSize: '1.1rem', lineHeight: 1.8 }}>
            Sistemas B2B no atacado lidam com tabelas imensas e os clientes compram dezenas de itens de uma vez. O gargalo era o desempenho: cada vez que o usuário digitava a quantidade em um input, a tabela inteira renderizava novamente, causando travamentos pesados na interface.
          </Typography>

          <Typography variant="h5" sx={{ mb: 2, color: '#EDEDED' }}>A Solução</Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 6, fontSize: '1.1rem', lineHeight: 1.8 }}>
            Refatorei o componente monolítico aplicando o padrão de isolamento de estado. O carrinho de compras e os inputs de quantidade foram levados para um Modal dinâmico (gerenciado por Context API), garantindo que a digitação flua instantaneamente sem impactar a listagem de produtos renderizada ao fundo.
          </Typography>

          <Button 
            variant="contained" 
            color="primary" 
            size="large"
            endIcon={<ArrowForwardIcon />}
            href="https://github.com/jefferosa/IlhotaB2B" 
            target="_blank"
            sx={{ color: '#000', fontWeight: 'bold', borderRadius: 2, px: 4, py: 1.5 }}
          >
            Ver Repositório no GitHub
          </Button>

        </Container>
      </Dialog>
    </>
  );
}

export default App;