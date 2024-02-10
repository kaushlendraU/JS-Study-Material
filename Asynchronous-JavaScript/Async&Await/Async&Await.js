// using try & catch 

const apiURLs = [
    'todos/kart.json',
    'todos/kaush.json',
];

async function fetchMultipleApi() {
    try {
        const apiResponses = await Promise.all(apiURLs.map(async (url) => {
            const response = await fetch(url);

            if (!response.ok) {
                throw new Error(`Error fetching data from ${url}. Status: ${response.status}`);
            }

            const data = await response.json();
            console.log(`Data from API`, data);
            // Do something with the data from each API
            return data;
        }));

        console.log('All API calls completed successfully!');
        // Do something with the aggregated responses if needed
    } catch (error) {
        console.error('Error in main function:', error);
        // Handle errors from the main function
    }
};

fetchMultipleApi();




// using then & catch 

const apiURL = [
    'todos/kart.json',
    'todos/kaush.json',
];

Promise.all(apiURLsy.map(async (url) => {
    const response = await fetch(url);

    if (!response.ok) {
        throw new Error(`Error fetching data from ${url}. Status: ${response.status}`);
    }

    const data = await response.json();

    return data;
}))
    .then(data => {
        data.forEach((data, index) => {
            console.log(`Data from API:`, data);
        });

        console.log('All API calls completed successfully!');

    })
    .catch(error => {
        console.error('Error in main function:', error);
    });

