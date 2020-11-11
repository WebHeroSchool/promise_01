let date = new Date();
let title = document.head.children[1];
let name = document.querySelector('h1.user__name');
let bio = document.querySelector('p.user-info__description');
let div = document.querySelector('div.user-info');
let time = document.querySelector('.time');
let searchParams = new URLSearchParams(window.location.search);
let login = searchParams.get('username');
let preload = document.querySelector('.preloader')
let apiUrl = 'https://api.github.com/users/' + login;
let pic;
let link;


const getDate = new Promise((resolve, reject) => {
    setTimeout(() => date ? resolve(date) : reject("Out of date"), 1500);
});
const getName = new Promise((resolve, reject) => {
      setTimeout(() => login ? resolve(login) : reject('имя не найдено, отображается пользователь по умолчанию'), 3000);

const preloader = setTimeout(() => {
      document.body.classList.add('loaded_hiding');
        document.body.classList.add('loaded');
        document.body.classList.remove('loaded_hiding');
      }, 3000);

function UserInfo(Name){
    let request = fetch(apiUrl)
    .then(response => response.json())
    .then(user => { 
        if (user.name) {
            title.innerHTML = user.name;
            name.innerHTML = user.name;

            user.bio == null ?
            bio.innerHTML = 'No bio.' + '/n':
            bio.innerHTML = user.bio +'. ';

            pic = document.createElement('img');
            pic.className = 'user-info__pic';
            pic.setAttribute('alt', 'User Avatar');
            pic.setAttribute('src', user.avatar_url);
            div.insertBefore(pic, div.children[0]);

            time.innerHTML = date;
        }
    })
    Promise.all([getDate, getName, request])}
    if (searchParams.has('username')) {
              UserInfo(login);
};
