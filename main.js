let title = document.head.children[1];
let name = document.querySelector('h1.user__name');
let bio = document.querySelector('p.user-info__description');
let div = document.querySelector('div.user-info');
let pic;
let link;

let searchParams = new URLSearchParams(window.location.search);
let login = searchParams.get('username');

let apiUrl = 'https://api.github.com/users/' + login;
fetch(apiUrl)
    .then(response => response.json())
    .then(user => { 
        if (user.name) {
            title.innerHTML = user.name;
            name.innerHTML = user.name;

            user.bio == null ?
            bio.innerHTML = 'No bio.' + '/n':
            bio.innerHTML = user.bio +'. ';

            link = document.createElement('a');
            link.innerHTML = 'Показать профиль';
            link.setAttribute('href', user.html_url);
            bio.appendChild(link);

            pic = document.createElement('img');
            pic.className = 'user-info__pic';
            pic.setAttribute('alt', 'User Avatar');
            pic.setAttribute('src', user.avatar_url);
            div.insertBefore(pic, div.children[0]);

        }
    })
    .catch(error => console.log(error)); 