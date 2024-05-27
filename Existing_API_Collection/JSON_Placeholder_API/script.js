const postForm = document.getElementById('postForm');
const postsContainer = document.getElementById('posts');
let posts = [];

async function fetchAndRenderPosts() {
    posts = await fetchPosts();
    renderPosts(posts);
}

async function fetchPosts() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();
    return data.slice(0, 50);
}

// Function to render posts
function renderPosts(posts) {
    postsContainer.innerHTML = '';
    posts.forEach((post, index) => {
        const postElement = document.createElement('div');
        postElement.classList.add('list-group-item');
        postElement.innerHTML = `
            <h4 class="mb-1">${index + 1}. ${post.title}</h4>
            <p class="mb-1">${post.body}</p>
            <button type="button" class="btn btn-primary btn-sm mr-2" onclick="updatePost(${post.id})">Update</button>
            <button type="button" class="btn btn-danger btn-sm" onclick="deletePost(${post.id})">Delete</button>
        `;
        postsContainer.appendChild(postElement);
        if (index > 0) {
            postsContainer.insertBefore(document.createElement('hr'), postElement);
        }
        $(postElement.querySelector('h4')).popover({
            content: `<strong>Title:</strong> ${post.title}<br><strong>Body:</strong> ${post.body}`,
            trigger: 'click',
            html: true,
        });
    });
}

// Function to create a new post
async function createPost(title, body) {
    await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title,
            body,
            userId: 1 
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    });
    fetchAndRenderPosts(); 
}

// Function to delete a post
async function deletePost(id) {
    await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        method: 'DELETE',
    });
    posts = posts.filter(post => post.id !== id); 
    renderPosts(posts); 
}

// Function to update a post
async function updatePost(id) {
    const newTitle = prompt('Enter the new title:');
    const newBody = prompt('Enter the new body:');
    if (newTitle !== null && newBody !== null) {
        await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
            method: 'PUT',
            body: JSON.stringify({
                id,
                title: newTitle,
                body: newBody,
                userId: 1
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        });
        const updatedPostIndex = posts.findIndex(post => post.id === id);
        if (updatedPostIndex !== -1) {
            posts[updatedPostIndex].title = newTitle;
            posts[updatedPostIndex].body = newBody;
            renderPosts(posts); 
        }
    }
}

// Event listener for form submission
postForm.addEventListener('submit', async function (event) {
    event.preventDefault();
    const title = document.getElementById('title').value;
    const body = document.getElementById('body').value;
    if (posts.length >= 500) { 
        await createPost(title, body);
    } else { 
        const newPost = {
            id: posts.length + 1, 
            title,
            body
        };
        posts.push(newPost);
        renderPosts(posts);
    }
    postForm.reset();
});


fetchAndRenderPosts();
