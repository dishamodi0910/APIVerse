const axios = require('axios');
const jsdom = require('jsdom');
const {JSDOM} = jsdom;
class validateProfile{
    static async leetcode(username){
        const query = {
            "query": "query getUserProfile($username: String!) { matchedUser(username: $username) {username} }", "variables": {"username": username}
        };
        try {
            const response = await axios.post("https://leetcode.com/graphql/",query);
            console.log("Response : ",response.data);
            if(response.data.data.matchedUser!==null) return true;
            else return false;
        } catch (error) {
          throw error;
        }
    }

    static async codechef(username){
        try {
            const response = await axios.get(`https://codechef.com/users/${username}`);
            const document = (new JSDOM(response.data)).window.document;
            const title = document.querySelector("title").textContent;
            console.log("Codechef : ",title);
            return title.split(" ")[0]===username;
        } catch (error) {
            throw error;
        }
    }
    static async codeforces(username){
        try {
            const response = await axios.get(`https://codeforces.com/profile/${username}`);
            const document = (new JSDOM(response.data)).window.document;
            const title = document.querySelector("title").textContent;
            console.log("codeforces : ",title);
            return title.split(" ")[0]===username;
        } catch (error) {
            throw error;
        }
    }
}


module.exports = validateProfile;