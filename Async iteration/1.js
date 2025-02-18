// Async generator function that yields values every second
async function* generateValues() {
    let count = 1;
    while (true) {
        await new Promise(resolve => setTimeout(resolve, 1000)); // Wait for 1 second
        yield count++;  // Yield the next number
    }
}

// Consuming the async generator
(async () => {
    const generator = generateValues();

    for await (const value of generator) {
        console.log(value);  // Log the yielded value
        if (value === 5) break;  // Stop after 5 values
    }

    console.log('Generator finished!');
})();
