const generateUser = async () => {
    try {
        const response = await fetch('https://randomuser.me/api/');
        const data = await response.json();
        const user = data.results[0];

        const userInfo = `
            <img src="${user.picture.large}" alt="User Picture">
            <h2>${user.name.title} ${user.name.first} ${user.name.last}</h2>
            <p><strong>Gender:</strong> ${user.gender}</p>
            <p><strong>Email:</strong> ${user.email}</p>
            <p><strong>Address:</strong> ${user.location.street.number}, ${user.location.street.name}, ${user.location.city}, ${user.location.state}, ${user.location.country}, ${user.location.postcode}</p>
        `;

        document.getElementById('user-info').innerHTML = userInfo;
    } catch (error) {
        console.error('Error fetching user:', error);
    }
};

document.getElementById('generate-btn').addEventListener('click', generateUser);
