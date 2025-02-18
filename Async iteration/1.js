
async function* generateValues() {
    let count = 1;
    while (true) {
        await new Promise(resolve => setTimeout(resolve, 1000)); 
        yield count++;  
    }
}

(async () => {
    const generator = generateValues();

    for await (const value of generator) {
        console.log(value); 
        if (value === 5) break; 
    }

    console.log('Generator finished!');
})();
