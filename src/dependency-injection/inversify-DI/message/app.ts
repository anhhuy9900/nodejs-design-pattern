import "reflect-metadata";
import express, { Request, Response } from 'express';
import { messageContainer } from './inversify.config';
import { MessageController } from './message.controller';

const app = express();
const messageController = messageContainer.resolve(MessageController);

app.get("/", (req: Request, res: Response) => {
    res.send(messageController.getMessage());
});

const PORT = 3900;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});