'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};


const ads = document.querySelectorAll('.promo__adv img'),
      promoBg = document.querySelector('.promo__bg'),
      genre = promoBg.querySelector('.promo__genre'),
      movieList = document.querySelector('.promo__interactive-list');

ads.forEach(image => image.remove());

genre.textContent = 'драма';

promoBg.style.backgroundImage = 'url("img/bg.jpg")';

movieList.innerHTML = '';
movieDB.movies.sort().forEach((movie, i) => movieList.innerHTML += `
    <li class="promo__interactive-item">
        ${i+1}. ${movie}
        <div class="delete"></div>
    </li>`);