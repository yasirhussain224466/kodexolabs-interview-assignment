export function getListings() {

    const url = 'https://api.simplyrets.com/properties';
    const username = 'simplyrets';
    const password = 'simplyrets';
  
    const listingsKey = 'listings';
    const cacheTimeKey = 'cacheTime';
    
    const cacheTime = localStorage.getItem(cacheTimeKey)
    // 30 second cache
    const staleCache = cacheTime && ( (new Date() - new Date(cacheTime)) / 1000 ) > 30;
    
    //are they in storage yet? if not, or if stale, fetch new data
    if (!localStorage.getItem(listingsKey) || staleCache) {
      const headers = new Headers();
      headers.set('Authorization', 'Basic ' + btoa(username + ':' + password));
  
      return fetch(url, { 
          method: 'GET',
          headers: headers,
          })
        .then(response => response.json())
        .then(data => {
          localStorage.setItem(listingsKey, JSON.stringify(data));
          localStorage.setItem(cacheTimeKey, new Date());
          return data;
        });
    } else {
      //already cached! let's use it
      return Promise.resolve(JSON.parse(localStorage.getItem(listingsKey)))
    }
  }