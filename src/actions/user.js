import axios from "axios"

let reqHeader = Object.assign( {
    Accept: 'application/json',
    'Content-Type': 'application/json',
});
export const checkLogin = userData => {
    return (dispatch, getState) => {
        return axios
            .get("url", {headers: reqHeader})
            .then(response => {
                console.log('Response - ' + 'url' + ' TYPE- ' + "type");
                console.log('----Response Data----- ' + JSON.stringify(response.data));
                return Promise.resolve(response.data);
            })
            .catch(err => {
                console.log('Error - ' + "url" + ' TYPE- ' + "type", err);
                return Promise.reject(err);
            });
    };
};
