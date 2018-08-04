import Axios from "axios";
import { resolve } from "url";

const strapiUrl = 'http://localhost:1337';
let token = '';
export const apiConsumer = {
    data: function () {
        return {
            message: 'hello',
            foo: 'abc'
        }
    },
    methods: {
        logIn(username, password) {
            return new Promise((resolve, reject) => {
                Axios.post(strapiUrl + '/auth/local', { identifier: username, password: password }).then(res => {
                    token = res.data.jwt;
                    resolve();
                });
            });
        },
        getProducts(querySubStr) {
            return Axios.get(`http://localhost:1337/product?name_contains=${querySubStr}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }).then(res => console.log(res.data));
        }
    }
}