import { creareServer } from "./server";

const configServer = creareServer();

console.log(`Server running on port ${configServer.port}`);
