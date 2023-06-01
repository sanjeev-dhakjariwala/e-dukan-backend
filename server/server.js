import { app } from './app.js';
import dotenv from 'dotenv';
import colors from 'colors';
dotenv.config();

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(colors.blue(`APP IS LISTENING ON PORT ${PORT}`));
});
