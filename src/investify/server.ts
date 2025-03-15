// src/server.ts
import { app } from './app';

const PORT = 3890;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

//curl -X POST http://localhost:3890/todos -H "Content-Type: application/json" -d '{"title": "Finish homework", "completed": false}'