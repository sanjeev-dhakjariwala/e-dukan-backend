import { app } from './app.js';
import dotenv from 'dotenv';
import colors from 'colors';
dotenv.config();

const PORT = 3001 || process.env.PORT;

app.listen(PORT, () => {
  console.log(colors.blue(`APP IS LSITENING ON PORT ${PORT}`));
});
