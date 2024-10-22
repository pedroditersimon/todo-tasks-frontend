class MemoryCache {
    constructor(defaultExpiration = 120000) {
        this.cache = {}
        this.defaultExpiration = defaultExpiration; // default: 60s
    }

    has(key) {
        return key in this.cache;
    }

    getData(key) {
        if (!this.has(key)) return null; // no key
        
        return this.cache[key].data; // return data
    }

    get(key) {
        if (!this.has(key)) return null; // no key
        
        return this.cache[key]; // return data
    }

    set(key, data, expiration) {
        const expirationTime = expiration || this.defaultExpiration;
        this.cache[key] = {
            data: data,
            timestamp: Date.now(),
            expiration: expirationTime
        };
    }

    replaceData(key, newData) {
        if (!this.has(key)) return; // no key
        // replace only the data
        const cacheData = this.get(key);
        cacheData.data = newData;
    }

    isExpired(key) {
        if (!this.has(key)) return true; // no key

        const cacheData = this.get(key);
        return (Date.now() - cacheData.timestamp >= cacheData.expiration);
    }

    markAsExpired(key) {
        if (!this.has(key)) return true; // no key
        // replace only the timestamp
        const cacheData = this.get(key);
        cacheData.timestamp = 0; // expire now
    }

    delete(key) {
        if (!this.has(key)) return; // no key
        
        delete this.cache[key];
    }
    
    clear() {
        this.cache = {};
    }
    
}

// export singleton
const singleton = new MemoryCache();
export default singleton;

export { MemoryCache };