import * as React from 'react';
import PropTypes from 'prop-types';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
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
    authors: [
      { name: 'Remy Sharp', avatar: 'https://mui.com/static/images/avatar/1.jpg' },
      { name: 'Remy Sharp', avatar: 'https://mui.com/static/images/avatar/2.jpg' },
    ]
  },
  {
    tag: 'Engineering',
    title: 'The future of AI in software engineering',
    description: 'Artificial intelligence is revolutionizing software engineering. Explore how AI-driven tools are enhancing development processes and improving software quality.',
    authors: [
      { name: 'Remy Sharp', avatar: 'https://mui.com/static/images/avatar/3.jpg' },
      { name: 'Remy Sharp', avatar: 'https://mui.com/static/images/avatar/4.jpg' },
    ]
  },
  {
    tag: 'Engineering',
    title: 'The future of AI in software engineering',
    description: 'Artificial intelligence is revolutionizing software engineering. Explore how AI-driven tools are enhancing development processes and improving software quality.',
    authors: [
      { name: 'Remy Sharp', avatar: 'https://mui.com/static/images/avatar/5.jpg' },
      { name: 'Remy Sharp', avatar: 'https://mui.com/static/images/avatar/6.jpg' },
    ]
  },
  {
    tag: 'Engineering',
    title: 'The future of AI in software engineering',
    description: 'Artificial intelligence is revolutionizing software engineering. Explore how AI-driven tools are enhancing development processes and improving software quality.',
    authors: [
      { name: 'Remy Sharp', avatar: 'https://mui.com/static/images/avatar/7.jpg' },
      { name: 'Remy Sharp', avatar: 'https://mui.com/static/images/avatar/1.jpg' },
    ]
  },
  {
    tag: 'Engineering',
    title: 'The future of AI in software engineering',
    description: 'Artificial intelligence is revolutionizing software engineering. Explore how AI-driven tools are enhancing development processes and improving software quality.',
    authors: [
      { name: 'Remy Sharp', avatar: 'https://mui.com/static/images/avatar/2.jpg' },
      { name: 'Remy Sharp', avatar: 'https://mui.com/static/images/avatar/3.jpg' },
    ]
  },
  {
    tag: 'Engineering',
    title: 'The future of AI in software engineering',
    description: 'Artificial intelligence is revolutionizing software engineering. Explore how AI-driven tools are enhancing development processes and improving software quality.',
    authors: [
      { name: 'Remy Sharp', avatar: 'https://mui.com/static/images/avatar/4.jpg' },
      { name: 'Remy Sharp', avatar: 'https://mui.com/static/images/avatar/5.jpg' },
    ]
  },
  {
    tag: 'Engineering',
    title: 'The future of AI in software engineering',
    description: 'Artificial intelligence is revolutionizing software engineering. Explore how AI-driven tools are enhancing development processes and improving software quality.',
    authors: [
      { name: 'Remy Sharp', avatar: 'https://mui.com/static/images/avatar/6.jpg' },
      { name: 'Remy Sharp', avatar: 'https://mui.com/static/images/avatar/7.jpg' },
    ]
  },
  {
    tag: 'Engineering',
    title: 'The future of AI in software engineering',
    description: 'Artificial intelligence is revolutionizing software engineering. Explore how AI-driven tools are enhancing development processes and improving software quality.',
    authors: [
      { name: 'Remy Sharp', avatar: 'https://mui.com/static/images/avatar/1.jpg' },
      { name: 'Remy Sharp', avatar: 'https://mui.com/static/images/avatar/2.jpg' },
    ]
  },
  {
    tag: 'Engineering',
    title: 'The future of AI in software engineering',
    description: 'Artificial intelligence is revolutionizing software engineering. Explore how AI-driven tools are enhancing development processes and improving software quality.',
    authors: [
      { name: 'Remy Sharp', avatar: 'https://mui.com/static/images/avatar/3.jpg' },
      { name: 'Remy Sharp', avatar: 'https://mui.com/static/images/avatar/4.jpg' },
    ]
  },
  {
    tag: 'Engineering',
    title: 'The future of AI in software engineering',
    description: 'Artificial intelligence is revolutionizing software engineering. Explore how AI-driven tools are enhancing development processes and improving software quality.',
    authors: [
      { name: 'Remy Sharp', avatar: 'https://mui.com/static/images/avatar/5.jpg' },
      { name: 'Remy Sharp', avatar: 'https://mui.com/static/images/avatar/6.jpg' },
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

function Author({ authors }) {
  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'row',
      gap: 2,
      alignItems: 'center',
      justifyContent: 'space-between',
    }}>
      <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 1 }}>
        <AvatarGroup max={3}>
          {authors.map((author, index) => (
            <Avatar
              key={index}
              alt={author.name}
              src={author.avatar}
              sx={{ width: 24, height: 24 }}
            />
          ))}
        </AvatarGroup>
        <Typography variant='caption'>
          {authors.map((author) => author.name).join(', ')}
        </Typography>
      </Box>
      <Typography variant='caption'>October 14, 2024</Typography>
    </Box>
  )
}

Author.propTypes = {
  authors: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ).isRequired
}

export default function Latest() {

const [focusedCardIndex, setFocusedCardIndex] = React.useState(null)

const handleFocus = (index) => {
  setFocusedCardIndex(index)
};

const handleBlur = () => {
  setFocusedCardIndex(null)
};

  return (
    <Container maxWidth='xl'>
      <Box sx={{ p: 3 }}>
        <Typography variant='h4' gutterBottom>
          Latest
        </Typography>
        <Grid container spacing={8} columns={12}>
          {articleInfo.map((article, index) => (
            <Grid item key={index} xs={12} sm={6} >
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

                <Author authors={article.authors} />
              </Box>
            </Grid>
          ))}
        </Grid>
        <Box sx={{ display: 'flex', justifyContent: 'center', pt: 4 }}>
          <Pagination hidePrevButton hideNextButton count={10} boundaryCount={10} />
        </Box>
      </Box>
    </Container>
  )
}