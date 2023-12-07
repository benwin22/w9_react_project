let accessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTcwMTkyMDMyNywianRpIjoiMDBkNjAzOTktNDQ1MC00MzgwLWExNGQtZTA1MzYwZWZiMTM0IiwidHlwZSI6ImFjY2VzcyIsInN1YiI6IjRydW5uZXJzIENvZGluZyBUZW1wbGUiLCJuYmYiOjE3MDE5MjAzMjcsImV4cCI6MTczMzQ1NjMyN30.s90aYYSRFUyE_UAxeAOA9PfrPCJPuIwY7TDa2iYLgdQ"
let userId = localStorage.getItem('uuid') //grabbing the uuid from Google Authentication 

// putting all our API calls in a giant dictionary/object

export const serverCalls = {

    getShop: async () => {
        // api call consist of 1-4 things
        // 1. url (required)
        // 2. methods (optional it will default to GET)
        // 3. headers (optional but usually there ) authentication type & type of data
        // 4. body (optional usually only on a POST, PUT and sometimes DELETE)
        const response = await fetch(`https://rangers134-bens4runners.onrender.com/api/shop`, {
            method: 'GET',
            headers: {
                'Content-Type' : 'application/json',
                'Authorization' : `Bearer ${accessToken}`
            }
        });

        if (!response.ok) {
            throw new Error('Failed to fetch data'), response.status
        }

        return await response.json()
    }
}