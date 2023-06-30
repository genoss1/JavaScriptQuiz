/* eslint-disable prettier/prettier */
import { Player } from '../../types/Player';

export const postPlayer = async (player: Player) => {
  try {
    const response = await fetch('http://localhost:8080/player', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(player)
    });

    if (response.ok) {
      console.log('Dane gracza zostały pomyślnie przesłane na serwer.');
    } else {
      console.log('Wystąpił błąd podczas przesyłania danych gracza na serwer.');
    }
  } catch (error) {
    console.error('Wystąpił błąd podczas komunikacji z serwerem:', error);
  }
};
