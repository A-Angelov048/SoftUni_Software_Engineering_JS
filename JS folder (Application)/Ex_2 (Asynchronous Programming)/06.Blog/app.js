function attachEvents() {

    const posts = document.querySelector('#posts');
    const postsTitle = document.querySelector('#post-title');
    const postBody = document.querySelector('#post-body');
    const postComments = document.querySelector('#post-comments');
    document.querySelector('#btnLoadPosts').addEventListener('click', loadPosts);
    document.querySelector('#btnViewPost').addEventListener('click', loadView);

    async function loadPosts() {

        const url = 'http://localhost:3030/jsonstore/blog/posts/';
        const response = await fetch(url);
        const data = await response.json();

        for (let line in data) {

            const option = createPost(data[line].id, data[line].title, data[line].body);
            posts.appendChild(option);
        }

    }

    function createPost(id, title, body) {

        const option = document.createElement('option');
        option.value = id;
        option.textContent = title;

        const div = document.createElement('div');
        div.id = 'body';
        div.dataset.value = body;

        option.appendChild(div);

        return option;
    }

    async function loadView() {

        postComments.innerHTML = '';

        const curPostId = posts.value;
        const curPostTitle = posts.options[posts.selectedIndex].text;
        const curPostBody =  posts.options[posts.selectedIndex].querySelector('div').dataset.value;

        const url = 'http://localhost:3030/jsonstore/blog/comments';
        const response = await fetch(url);
        const data = await response.json();

        const dataArr = Object.entries(data);
        const curPostComments = dataArr.filter(x => x[1].postId === curPostId);

        postsTitle.textContent = curPostTitle;
        postBody.textContent = curPostBody;

        for (let line of curPostComments) {

            const li = createComments(line[1]);
            postComments.appendChild(li);
        }
    }

    function createComments(curComment){

        const li = document.createElement('li');
        li.id = curComment.id;
        li.textContent = curComment.text;
        return li;
    }
}

attachEvents();




// function attachEvents() {

//     const posts = document.querySelector('#posts');
//     const postsTitle = document.querySelector('#post-title');
//     const postBody = document.querySelector('#post-body');
//     const postComments = document.querySelector('#post-comments');
//     document.querySelector('#btnLoadPosts').addEventListener('click', loadPosts);
//     document.querySelector('#btnViewPost').addEventListener('click', loadView);
//     const objInfo = [];

//     async function loadPosts() {

//         const url = 'http://localhost:3030/jsonstore/blog/posts/';
//         const response = await fetch(url);
//         const data = await response.json();

//         for (let line in data) {

//             objInfo.push(data[line]);
//             const option = createPost(data[line].id, data[line].title);
//             posts.appendChild(option);
//         }

//     }

//     function createPost(id, title) {

//         const option = document.createElement('option');
//         option.value = id;
//         option.textContent = title;

//         return option;
//     }

//     async function loadView() {
        
//         postComments.innerHTML = '';

//         const curPostId = posts.value;
//         const curPostTitle = posts.options[posts.selectedIndex].text;
//         const curPostBody = objInfo.find(x => x.id === curPostId).body;

//         const url = 'http://localhost:3030/jsonstore/blog/comments';
//         const response = await fetch(url);
//         const data = await response.json();

//         const dataArr = Object.entries(data);
//         const curPostComments = dataArr.filter(x => x[1].postId === curPostId);

//         postsTitle.textContent = curPostTitle;
//         postBody.textContent = curPostBody;

//         for (let line of curPostComments) {

//             const li = createComments(line[1]);
//             postComments.appendChild(li);
//         }
//     }

//     function createComments(curComment) {

//         const li = document.createElement('li');
//         li.id = curComment.id;
//         li.textContent = curComment.text;
//         return li;
//     }
// }

// attachEvents();