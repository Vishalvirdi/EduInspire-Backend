import express from 'express';

const app = express();




app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended: true, limit: "16kb"}))




import storyRouter from "./routes/story.routes.js"


app.use("/api/v1/stories",storyRouter);

export {app}

