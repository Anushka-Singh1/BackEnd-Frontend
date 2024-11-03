import express from 'express';
// import cors from 'cors';

const app = express();

// app.get('/', (req, res) => {
//     res.send('Hello, World!');
// });
// app.use(cors());

app.get('/api/jokes', (req, res) => {
    const jokes = [
        {
            id: 1,
            title: 'A joke',
            content: 'Why did the chicken cross the road? To get to the other side!'
        },
        {
            id: 2,
            title: 'Another joke',
            content: 'Why did the scarecrow win an award? Because he was outstanding in his field!'
        },
        {
            id: 3,
            title: 'A third joke',
            content: 'Why did the scorpion go to school? To learn how to play the saxophone!'
        },
        {
            id: 4,
            title: 'A fourth joke',
            content: 'Why did the scorpion go to the circus? To be the best trickster in town!'
        },
        {
            id: 5,
            title: 'A fifth joke',
            content: 'Why did the chicken cross the road? To get to the other side!'
        }
    ];
    res.send(jokes);
    console.log('Sent jokes');
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`);
});