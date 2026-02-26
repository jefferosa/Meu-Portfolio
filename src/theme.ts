import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#0A0A0A', // Fundo principal da tela (quase preto)
      paper: '#141414',   
    },
    primary: {
      main: '#EDEDED',    // Branco off-white para destaques
    },
    text: {
      primary: '#EDEDED', // Texto principal legível
      secondary: '#888888', // Texto secundário (descrições)
    },
    divider: '#2A2A2A',   // Cor das bordas finas entre os elementos
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '4rem',
      fontWeight: 600,
      letterSpacing: '-0.02em', // Deixa a fonte grande mais unida e moderna
    },
    h2: {
      fontSize: '2.5rem',
      fontWeight: 500,
    },
  },
  shape: {
    borderRadius: 24, // Arredondamento elegante para as "marmitas" do Bento
  },
});