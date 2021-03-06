
let ApiService = class ApiService
{
    constructor() 
    {
        this.apiProtocol = 'https:';
        this.apiHost = 'history.muffinlabs.com/';
    }

    get apiLocation()
    {
        return this.apiProtocol + "//" + this.apiHost;
    }

    getTodaysInfo()
    {
        let URL = this.apiLocation + 'date';
        return URL;
    }

    getTodaysEvents()
    {
        return new Promise((resolve, reject) => {
            fetch(ApiService.getGenres())
            .then((response) => response.json())
            .then((responseJson) => {
                let items = [];
                responseJson.genres.forEach(element => {
                    items.push(new Events());
                });
                resolve(items);
            })
            .catch((error) => {
                console.error(error);
                reject(error);
            });
        });
    }

    getTodaysBirths()
    {
        return new Promise((resolve, reject) => {
            fetch(ApiService.getGenres())
            .then((response) => response.json())
            .then((responseJson) => {
                let items = [];
                responseJson.genres.forEach(element => {
                    items.push(new Births());
                });
                resolve(items);
            })
            .catch((error) => {
                console.error(error);
                reject(error);
            });
        });
    }

    getTodaysDeaths()
    {
        return new Promise((resolve, reject) => {
            fetch(ApiService.getGenres())
            .then((response) => response.json())
            .then((responseJson) => {
                let items = [];
                responseJson.genres.forEach(element => {
                    items.push(new Deaths());
                });
                resolve(items);
            })
            .catch((error) => {
                console.error(error);
                reject(error);
            });
        });
    }

    


};

const apiService = new ApiService();
export default apiService;