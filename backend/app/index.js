// setTimeout(() => {const mimar = generation.newDragon();console.log("mimar",mimar);},15000);
const express = require('express');
const GenerationEngine = require('./generation/engine');
const dragonRouter = require('./api/dragon');
const generationRouter = require('./api/generation')
const app = express();

const engine = new GenerationEngine();
app.locals.engine = engine;
engine.start();

// setTimeout(() => {engine.stop()},20000)

app.use('/dragon',dragonRouter);
app.use('/generation',generationRouter);
app.use((err,req,res,next) => {
    const statusCode = err.statusCode || 500;
    res.status(statusCode).json({
        type:'error',
        message:'err.message'
    })
});

module.exports = app;