class HttpClient {
    constructor(baseURL) {
        this.baseURL = baseURL;
    }

    async get(endpoint) {
        try {
            const response = await fetch(`${this.baseURL}${endpoint}`);
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return await response.json();
        } catch (error) {
            console.error('Error fetching data:', error);
            throw error; // Rethrow to handle it elsewhere if needed
        }
    }

    async post(endpoint, body) {
        try {
            const response = await fetch(`${this.baseURL}${endpoint}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(body)
            });
            if (!response.ok) {
                return null;
            }
            return await response.json();
        } catch (error) {
            console.error('Error posting data:', error);
            throw error;
        }
    }

    async put(endpoint, body) {
        try {
            const response = await fetch(`${this.baseURL}${endpoint}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(body)
            });
            if (!response.ok) {
                return null;
            }
            return await response.json();
        } catch (error) {
            console.error('Error updating data:', error);
            throw error;
        }
    }

    async delete(endpoint) {
        try {
            const response = await fetch(`${this.baseURL}${endpoint}`, {
                method: 'DELETE'
            });
            if (!response.ok) {
                return null;
            }
            return true; // Indicates that the deletion was successful
        } catch (error) {
            console.error('Error deleting data:', error);
            throw error;
        }
    }

    async patch(endpoint) {
        try {
            const response = await fetch(`${this.baseURL}${endpoint}`, {
                method: 'PATCH'
            });
            if (!response.ok) {
                return null;
            }
            return true; // Indicates that the deletion was successful
        } catch (error) {
            console.error('Error patching data:', error);
            throw error;
        }
    }

}


export default HttpClient;