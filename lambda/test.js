const app = require('./app');

async function main() {
    console.log('starting test');
    try{
        const result = await app.run();
        console.log(result);
    } catch (err) {
        console.log('unable to complete test');
        console.log(err);
    } finally {
        console.log('finishing test')
    }
}

main();