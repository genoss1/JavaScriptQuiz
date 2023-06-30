import { Box, Button, Card, CardContent, Divider, TextField, Typography } from '@mui/material';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Player } from '../../types/Player';
import { Fragment, useContext, useEffect, useState } from 'react';
import { PlayerContext } from '../../context/PlayerContext';
import { useNavigate } from 'react-router-dom';
import { fetchPlayers } from './fetchPlayer';

const HomePage = () => {
  const { setName } = useContext(PlayerContext);
  const { register, handleSubmit } = useForm<Player>();
  const [players, setPlayers] = useState<Player[]>();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<Player> = (player: Player) => {
    setName(player.name);
    navigate('/quiz');
  };

  useEffect(() => {
    const dataFetch = async () => {
      const response = await fetchPlayers();
      setPlayers(response);
    };
    dataFetch();
  }, []);

  return (
    <Box>
      <Box
        display="flex"
        justifyContent="space-around"
        alignItems="center"
        height="60vh"
        width="70vw"
        fontFamily="Poppins"
        sx={{
          backgroundColor: '#a2d2ff',
          borderRadius: '10px',
          boxShadow:
            '0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)'
        }}>
        <Box display="flex" flexDirection="column" alignItems="center">
          <Typography
            variant="h3"
            fontWeight="700"
            align="center"
            gutterBottom
            fontFamily="Poppins">
            JavaScriptQuiz
          </Typography>
          <Card>
            <CardContent>
              <form onSubmit={handleSubmit(onSubmit)}>
                <Box
                  display="flex"
                  flexDirection="column"
                  gap="10px"
                  alignItems="center"
                  width="300px">
                  <TextField
                    label="Enter your name"
                    placeholder="Enter your name..."
                    {...register('name', { required: true })}
                    variant="outlined"
                    size="small"
                  />
                  <Button
                    type="submit"
                    variant="contained"
                    sx={{ backgroundColor: '#cdb4db', fontWeight: 'bold', color: 'black' }}>
                    PLAY!
                  </Button>
                </Box>
              </form>
            </CardContent>
          </Card>
        </Box>

        <Box width="300px">
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom fontFamily="Poppins">
                Best Players
              </Typography>
              {players?.map((player) => (
                <Fragment key={player._id}>
                  <Box display="flex" justifyContent="space-between" alignItems="center">
                    <Typography>{player.name}</Typography>
                    <Typography>{player.points}</Typography>
                  </Box>
                  <Divider />
                </Fragment>
              ))}
            </CardContent>
          </Card>
        </Box>
      </Box>
    </Box>
  );
};

export default HomePage;
