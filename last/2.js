const apis = [
   'https://random-image-pepebigotes.vercel.app/api/random-image',
'http://www.randomnumberapi.com/api/v1.0/random?min=100&max=1000',
'https://official-joke-api.appspot.com/random_joke'

];

// Function to fetch data from local APIs concurrently
async function fetchAllLocalData() {
    try {
        // Map each API URL to a fetch request
        const fetchPromises = apis.map(api => fetch(api).then(response => {
            if (!response.ok) {
                throw new Error(`Failed to fetch from ${api}: ${response.statusText}`);
            }
            return response.json(); // Convert response to JSON
        }));

        // Use Promise.all to fetch all APIs concurrently
        const results = await Promise.all(fetchPromises);

        // Log the results from all APIs
        console.log('Data from all local APIs:', results);
    } catch (error) {
        console.error('Error fetching data:', error.message);
    }
}

// Call the function
fetchAllLocalData();
