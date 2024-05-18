const axios = require('axios');
const jsdom = require('jsdom');
const {JSDOM} = jsdom;


async function formatLeetcode(data,username){
    console.log("Format leetcode : ",username);
    return {
        leetcodeNoContest:(data.userContestRanking==null)?0:data.userContestRanking.attendedContestsCount,
        leetcodeRanking : (data.userContestRanking==null)?0:data.userContestRanking.globalRanking,
       leetcodeRating : (data.userContestRanking==null)?0:data.userContestRanking.rating,
       leetcodeTotal : data.matchedUserStats.submitStats.acSubmissionNum[0].count,
       leetcodeEasy : data.matchedUserStats.submitStats.acSubmissionNum[1].count,
       leetcodeMedium : data.matchedUserStats.submitStats.acSubmissionNum[2].count,
       leetcodeHard : data.matchedUserStats.submitStats.acSubmissionNum[3].count
    }
}

function formatCodechef(document){
   const problem = Array.from((document.querySelector(".rating-data-section.problems-solved")).querySelectorAll('h3'));
   var sum = 0;
   const regex = /\((\d+)\)/g;
   problem.forEach(string => {
       
       const matches = string.innerHTML.matchAll(regex);
       for (const match of matches) {
           sum += parseInt(match[1]);
       }
   });
  return {
           codechefTotalContest : parseInt(document.querySelector(".contest-participated-count").children[0].innerHTML),
           codechefCurrentRating: parseInt(document.querySelector(".rating-number").textContent),
           codecheHhighestRating: parseInt(document.querySelector(".rating-number").parentNode.children[4].textContent.split('Rating')[1]),
           codechefGlobalRanking: parseInt(document.querySelector('.rating-ranks').children[0].children[0].children[0].children[0].innerHTML),
           codechefCountryRank: parseInt(document.querySelector('.rating-ranks').children[0].children[1].children[0].children[0].innerHTML),
           codechefStarRating: document.querySelector('.rating').textContent || "unrated",
           codechefTotal :sum
  }
}

function formatCodeforces(document){
   const newrating = Array.from(document.querySelectorAll('.user-gray'));
   const positionList =  ["Newbie", "Pupil", "Specialist", "Expert", "Candidate Master", "Master", "International Master", "Grandmaster", "International Grandmaster", "Legendary Grandmaster"];
   var positionName = '',rating = 0;
   for(let i=0;i<newrating.length;i++){
    try {
        rating = parseInt(newrating[i].innerHTML);
    } catch (error) {
        console.log(error.message);
    }
    for(let j = 0;j<positionList.length;j++){
        if(newrating[i].innerHTML.trim()==positionList[j]){ 
            positionName = positionList[j];
        }
    }
   }
   return{
    codeforcesTotal:parseInt(document.querySelector('._UserActivityFrame_footer').children[0].children[0].children[0].innerHTML.match(/\d+/)[0]),
    codeforcesRating: rating,
    position:positionName
   }
}


class codingPrifileController{
    static async addLeetcode(username){
       try {
        const query ={
            "query": "query getUserProfile($username: String!) { userContestRanking(username:  $username)      {attendedContestsCount        rating        globalRanking } matchedUserStats: matchedUser(username: $username) {      submitStats: submitStatsGlobal {        acSubmissionNum {          difficulty          count          submissions  }        totalSubmissionNum {          difficulty          count          submissions     }  }    }  }", "variables": {"username": `${username}`}
        };
        const response = await axios.post('https://leetcode.com/graphql',query);
        return await (formatLeetcode(response.data.data,username));
       } catch (error) {
        console.log(error.message);
            throw error;
       }
    }
    
    
    static async addCodechef (username){
           try {
            const response = await axios.get(`https://www.codechef.com/users/${username}`);
            const dom = new JSDOM(response.data);
            const document = dom.window.document;
            return await  formatCodechef(document);
           } catch (error) {
            throw error;
           }
    }
    
    static async addCodeforces (username){
        try {
            const response = await axios.get(`https://codeforces.com/profile/${username}`);
            const dom = new JSDOM(response.data);
            const document = dom.window.document;
            return await formatCodeforces(document);
            
        } catch (error) {
            throw error;
        }
    }

}


module.exports = codingPrifileController;