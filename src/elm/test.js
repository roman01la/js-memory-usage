const Elm = require('./elm.js');

const app = Elm.Main.worker();

app.ports.emit.subscribe((msg) => {
    console.log(JSON.stringify(msg, null, 2));
    process.exit(0);
});
