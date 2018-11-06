import app from './app';

const PORT: number = 8000;

app.listen(PORT, () => {
    console.log('Express Server Listening on port ' + PORT);
});