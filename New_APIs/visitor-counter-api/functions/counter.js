const { createClient } = require('redis');

const client = createClient({
    password: process.env.REDIS_PASSWORD,
    socket: {
        host: process.env.REDIS_HOST,
        port: process.env.REDIS_PORT
    }
});

let connected = false;

const connectToRedis = async () => {
    if (!connected) {
        await client.connect();
        connected = true;
    }
};

exports.handler = async (event, context) => {
    const { httpMethod, queryStringParameters } = event;

    // CORS headers
    const headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
    };

    if (httpMethod === 'OPTIONS') {
        // Respond to preflight CORS requests
        return {
            statusCode: 200,
            headers,
            body: 'Preflight OK',
        };
    }

    await connectToRedis();

    if (httpMethod === 'GET') {
        if (!queryStringParameters || !queryStringParameters.q || queryStringParameters.q === '') {
            // Read the current count from Redis
            try {
                let currentCount = await client.get('count');
                if (currentCount === null) {
                    currentCount = 0;
                } else {
                    currentCount = parseInt(currentCount, 10);
                }

                currentCount += 1;

                // Write the new count back to Redis
                await client.set('count', currentCount.toString());

                return {
                    statusCode: 200,
                    headers,
                    body: JSON.stringify({ value: currentCount }),
                };
            } catch (err) {
                console.error('Error interacting with Redis:', err);
                return {
                    statusCode: 500,
                    headers,
                    body: 'Error interacting with Redis',
                };
            }
        } else if (queryStringParameters.q === 'reset') {
            // Reset the count
            try {
                await client.set('count', '0');
                return {
                    statusCode: 200,
                    headers,
                    body: JSON.stringify({ value: 0 }),
                };
            } catch (err) {
                console.error('Error interacting with Redis:', err);
                return {
                    statusCode: 500,
                    headers,
                    body: 'Error interacting with Redis',
                };
            }
        } else {
            // Return current count
            try {
                let currentCount = await client.get('count');
                if (currentCount === null) {
                    currentCount = 0;
                } else {
                    currentCount = parseInt(currentCount, 10);
                }

                return {
                    statusCode: 200,
                    headers,
                    body: JSON.stringify({ value: currentCount }),
                };
            } catch (err) {
                console.error('Error interacting with Redis:', err);
                return {
                    statusCode: 500,
                    headers,
                    body: 'Error interacting with Redis',
                };
            }
        }
    } else {
        return {
            statusCode: 405,
            headers,
            body: 'Method Not Allowed',
        };
    }
};
