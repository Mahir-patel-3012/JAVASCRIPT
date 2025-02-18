// Simulating asynchronous operations with Promises

// Step 1: Fetch user data
function fetchUser(userId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('User data fetched');
            resolve({ userId, name: 'John Doe' });
        }, 1000);
    });
}

// Step 2: Fetch user's cart
function fetchCart(user) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`Cart fetched for ${user.name}`);
            resolve([
                { item: 'Laptop', price: 1200 },
                { item: 'Mouse', price: 50 },
                { item: 'Keyboard', price: 100 }
            ]);
        }, 1000);
    });
}

// Step 3: Calculate total price
function calculateTotal(cart) {
    return new Promise((resolve, reject) => {
        const total = cart.reduce((sum, item) => sum + item.price, 0);
        console.log('Total price calculated');
        resolve(total);
    });
}

// Step 4: Process payment
function processPayment(total) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`Payment of $${total} processed`);
            resolve('Payment Successful');
        }, 1000);
    });
}

// Chaining the Promises
fetchUser(1)
    .then(user => fetchCart(user))
    .then(cart => calculateTotal(cart))
    .then(total => processPayment(total))
    .then(status => console.log(status))
    .catch(error => console.error('Error:', error));
