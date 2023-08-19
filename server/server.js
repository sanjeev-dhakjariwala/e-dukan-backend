import { app } from "./app.js";
import dotenv from "dotenv";
import colors from "colors";
import https from "https";
import fs from "fs/promises";

dotenv.config();

const PORT = process.env.PORT || 3001;
let option = null;
async function readFileAsync(filePath) {
  try {
    const content = await fs.readFile(filePath, "utf-8");
    return content;
  } catch (error) {
    console.error("Error reading the file:", error);
    throw error;
  }
}
(async () => {
  const keyPath = "./key.pem";
  const certPath = "./cert.pem";
  try {
    const keyContent = await readFileAsync(keyPath);
    const certContent = await readFileAsync(certPath);
    option = {
      key: keyContent,
      cert: certContent,
      secureProtocol: "TLSv1_2_method"
    };
    console.log("File content:", option);
  } catch (error) {
    console.error("Error:", error);
  }
})();

const server = https.createServer(option, app);

server.listen(PORT, () => {
  console.log(colors.blue(`APP IS LISTENING ON PORT ${PORT}`));
});
