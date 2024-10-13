import * as React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Pagination from '@mui/material/Pagination';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';


const articleInfo = [
  {
    tag: 'Engineering',
    title: 'The future of AI in software engineering',
    description: 'Artificial intelligence is revolutionizing software engineering. Explore how AI-driven tools are enhancing development processes and improving software quality.',
    author: [
      { name: 'Remy Sharp', avatar: '' },
      { name: 'Remy Sharp', avatar: '' },
    ]
  },
  {
    tag: 'Engineering',
    title: 'The future of AI in software engineering',
    description: 'Artificial intelligence is revolutionizing software engineering. Explore how AI-driven tools are enhancing development processes and improving software quality.',
    author: [
      { name: 'Remy Sharp', avatar: '' },
      { name: 'Remy Sharp', avatar: '' },
    ]
  },
  {
    tag: 'Engineering',
    title: 'The future of AI in software engineering',
    description: 'Artificial intelligence is revolutionizing software engineering. Explore how AI-driven tools are enhancing development processes and improving software quality.',
    author: [
      { name: 'Remy Sharp', avatar: '' },
      { name: 'Remy Sharp', avatar: '' },
    ]
  },
  {
    tag: 'Engineering',
    title: 'The future of AI in software engineering',
    description: 'Artificial intelligence is revolutionizing software engineering. Explore how AI-driven tools are enhancing development processes and improving software quality.',
    author: [
      { name: 'Remy Sharp', avatar: '' },
      { name: 'Remy Sharp', avatar: '' },
    ]
  },
  {
    tag: 'Engineering',
    title: 'The future of AI in software engineering',
    description: 'Artificial intelligence is revolutionizing software engineering. Explore how AI-driven tools are enhancing development processes and improving software quality.',
    author: [
      { name: 'Remy Sharp', avatar: '' },
      { name: 'Remy Sharp', avatar: '' },
    ]
  },
  {
    tag: 'Engineering',
    title: 'The future of AI in software engineering',
    description: 'Artificial intelligence is revolutionizing software engineering. Explore how AI-driven tools are enhancing development processes and improving software quality.',
    author: [
      { name: 'Remy Sharp', avatar: '' },
      { name: 'Remy Sharp', avatar: '' },
    ]
  },
  {
    tag: 'Engineering',
    title: 'The future of AI in software engineering',
    description: 'Artificial intelligence is revolutionizing software engineering. Explore how AI-driven tools are enhancing development processes and improving software quality.',
    author: [
      { name: 'Remy Sharp', avatar: '' },
      { name: 'Remy Sharp', avatar: '' },
    ]
  },
  {
    tag: 'Engineering',
    title: 'The future of AI in software engineering',
    description: 'Artificial intelligence is revolutionizing software engineering. Explore how AI-driven tools are enhancing development processes and improving software quality.',
    author: [
      { name: 'Remy Sharp', avatar: '' },
      { name: 'Remy Sharp', avatar: '' },
    ]
  },
  {
    tag: 'Engineering',
    title: 'The future of AI in software engineering',
    description: 'Artificial intelligence is revolutionizing software engineering. Explore how AI-driven tools are enhancing development processes and improving software quality.',
    author: [
      { name: 'Remy Sharp', avatar: '' },
      { name: 'Remy Sharp', avatar: '' },
    ]
  },
  {
    tag: 'Engineering',
    title: 'The future of AI in software engineering',
    description: 'Artificial intelligence is revolutionizing software engineering. Explore how AI-driven tools are enhancing development processes and improving software quality.',
    author: [
      { name: 'Remy Sharp', avatar: '' },
      { name: 'Remy Sharp', avatar: '' },
    ]
  },
]

const StyledTypography = styled(Typography) ({
  display: '-webkit-box',
  WebkitBoxOrient: 'vertical',
  WebkitLineClamp: 2,
  overflow: 'hidden',
  textOverflow: 'ellipsis',
})

const TitleTypography = styled(Typography)(({ theme }) => ({
  position: 'relative',
  textDecoration: 'none',
  '&:hover': { cursor: 'pointer' },
  '& .arrow': {
    visibility: 'hidden',
    position: 'absolute',
    right: 0,
    top: '50%',
    transform: 'translateY(-50%)',
  },
  '&:hover .arrow': {
    visibility: 'visible',
    opacity: 0.7,
  },
  '&:focus-visible': {
    outline: '3px solid',
    outlineColor: 'hsla(210, 98%, 48%, 0.5)',
    outlineOffset: '3px',
    borderRadius: '8px',
  },
  '&::before': {
    content: '""',
    position: 'absolute',
    width: 0,
    height: '1px',
    bottom: 0,
    left: 0,
    backgroundColor: theme.palette.text.primary,
    opacity: 0.3,
    transition: 'width 0.3s ease, opacity 0.3s ease',
  },
  '&:hover::before': {
    width: '100px',
  },
}));

export default function Latest() {

const [focusedCardIndex, setFocusedCardIndex] = React.useState(null)

const handleFocus = (index) => {
  setFocusedCardIndex(index)
};

const handleBlur = () => {
  setFocusedCardIndex(null)
};

  return (
    <Container>
      <Typography variant='h2' gutterBottom>
        Latest
      </Typography>
      <Grid container spacing={8} columns={12} sx={{ my: 4 }}>
        {articleInfo.map((article, index) => (
          <Grid item key={index} xs={12} sm={6}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                gap: 1,
                height: '100%'
              }}
            >
              <Typography gutterBottom variant='caption' component='div'>
                {article.tag}
              </Typography>
              <TitleTypography
                gutterBottom
                variant='h6'
                onFocus={() => handleFocus(index)}
                onBlur={handleBlur}
                tabIndex={0}
                className={focusedCardIndex === index ? 'Mui-focused' : ''}
              >
                {article.title}
              </TitleTypography>
              <StyledTypography variant='body2' color='text.secondary' gutterBottom>
                {article.description}
              </StyledTypography>
            </Box>
          </Grid>
        ))}
      </Grid>
      <Box sx={{ display: 'flex', justifyContent: 'center', pt: 4 }}>
        <Pagination hidePrevButton hideNextButton count={10} boundaryCount={10} />
      </Box>
    </Container>
  )
}