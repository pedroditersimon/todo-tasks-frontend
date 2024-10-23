class HttpClient {
    constructor(baseURL="") {
        this.baseURL = baseURL;

        // add '/' at the end of url
        if (baseURL.charAt(baseURL.length - 1) !== '/') {
            this.baseURL += `/`;
        }
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
            //throw error; // Rethrow to handle it elsewhere if needed
        }
        return null;
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
            //throw error;
        }
        return null;
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
            //throw error;
        }
        return null;
    }

    async delete(endpoint) {
        try {
            const response = await fetch(`${this.baseURL}${endpoint}`, {
                method: 'DELETE'
            });
            return response.ok; // Indicates that the deletion was successful
        } catch (error) {
            console.error('Error deleting data:', error);
            //throw error;
        }
        return false;
    }

    async patch(endpoint, body) {
        try {
            const response = await fetch(`${this.baseURL}${endpoint}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json' // Asegúrate de definir el tipo de contenido
                },
                body: body ? JSON.stringify(body) : null // Solo incluye el cuerpo si está presente
            });
    
            if (!response.ok) {
                return null;
            }
    
            return await response.json();
        } catch (error) {
            console.error('Error patching data:', error);
            // throw error;
        }
        return null;
    }
    

}


export default HttpClient;