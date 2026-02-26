import { Paper, type PaperProps } from '@mui/material';
import { styled } from '@mui/material/styles';

export const BentoCard = styled(Paper)<PaperProps>(({ theme }) => ({
  padding: theme.spacing(4),
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: theme.palette.background.paper,
  border: `1px solid ${theme.palette.divider}`,
  borderRadius: theme.shape.borderRadius,
  backgroundImage: 'none', // Remove o brilho padrão do MUI no dark mode
  transition: 'all 0.3s ease',
  overflow: 'hidden', // Garante que imagens não vazem das bordas arredondadas
  '&:hover': {
    borderColor: '#444', // A borda fica levemente mais clara ao passar o mouse
    transform: 'translateY(-2px)', // O card dá uma "flutuada" sutil de 2 pixels
  },
}));