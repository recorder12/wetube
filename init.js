import app from "./app";
import { logout } from "./controllers/userControllers";

const PORT = 4000;



app.get("/test", logout);

const handleListening = () => 
    console.log(`Listening on http://localhost:${PORT}`);

app.listen(PORT, handleListening);


