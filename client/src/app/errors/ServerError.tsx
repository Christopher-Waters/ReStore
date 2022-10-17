import { Container, Paper, Typography, Divider } from '@mui/material';
import { useHistory, useLocation } from 'react-router-dom';
import { Button } from '@mui/material';

export default function ServerError() {
  const history = useHistory();
  const { state } = useLocation<any>();
  return (
    <Container component={Paper}>
      {state?.error ? (
        <>
          <Typography variant="h4" color='error' gutterBottom>
            {state.error.title}
          </Typography>
          <Divider />
          <Typography>
            {state.error.detail || 'Internal Server error'}
          </Typography>
        </>
      ) : (
        <Typography variant="h5" gutterBottom>
          Server error
        </Typography>
      )}
      <Button onClick={() => history.push('/catalog')}>Go back to the store</Button>
    </Container>
  );
}
