const usernameInput = document.getElementById('username-input');
const searchButton = document.getElementById('search-button');
const userProfile = document.getElementById('user-profile');
const userRepos = document.getElementById('user-repos');

searchButton.addEventListener('click', () => {
    //trim() is used to ignore starting and ending spaces
    const username = usernameInput.value.trim();

    if (username === '') {
        alert('Please enter a GitHub username.');
        return;
    }
   //using Github API to fetch user details
    fetch(`https://api.github.com/users/${username}`)
        .then(response => response.json())
        .then(user => {
            // Display user profile information
            userProfile.innerHTML = `
                <h2>${user.login}</h2>
                <img src="${user.avatar_url}" alt="${user.login}">
                <p>Followers: ${user.followers}</p>
                <p>Following: ${user.following}</p>
            `;
        })
        .catch(error => {
            console.error('Error fetching user data:', error);
            userProfile.innerHTML = '<p>User not found.</p>';
        });

    fetch(`https://api.github.com/users/${username}/repos`)
        .then(response => response.json())
        .then(repos => {
            // Display user repositories
            const repoList = repos.map(repo => `<div style="display:flex;position:relative;justify-content:flex-start;align-items:center;padding:0.5rem 0rem;border-bottom:0.1rem solid;"><li style="flex:0.8;text-align:left;">${repo.name.length>28?repo.name.slice(0,25)+'..':repo.name}</li><a style="flex:0.2;" href=https://github.com/${username}/${repo.name}>visit</a></div> `).join('');
            userRepos.innerHTML = `<h2>Repositories</h2><ul>${repoList}</ul>`;
        })
        .catch(error => {
            console.error('Error fetching user repositories:', error);
            userRepos.innerHTML = '<p>Repositories not found.</p>';
        });
});
