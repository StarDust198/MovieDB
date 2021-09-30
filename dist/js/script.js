'use strict';

window.addEventListener('DOMContentLoaded', () => {
    
    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ],
        sortMovies: function() {          
            console.log('future function');
        }
    };

    // initial

    const ads = document.querySelectorAll('.promo__adv img'),
        promoBg = document.querySelector('.promo__bg'),
        genre = promoBg.querySelector('.promo__genre'),
        movieList = document.querySelector('.promo__interactive-list');

    const deleteAdds = (arr) => {
        arr.forEach(image => image.remove());
    }    

    deleteAdds(ads);

    genre.textContent = 'драма';

    promoBg.style.backgroundImage = 'url("img/bg.jpg")';

    const sortMovies = function(movies, parent) {
        parent.innerHTML = '';
        movies.sort().forEach((movie, i) => parent.innerHTML += `
        <li class="promo__interactive-item">
            ${i+1}. ${movie}
            <div class="delete"></div>
        </li>`);
    };

    sortMovies(movieDB.movies, movieList);

    // 2nd stage

    const addForm = document.querySelector('form.add'),
        inputMovie = addForm.querySelector('.adding__input'),
        favCheckbox = addForm.querySelector('[type="checkbox"]');

    addForm.addEventListener('submit', (evt) => {
        evt.preventDefault();
        let newMovie = inputMovie.value.trim()[0].toUpperCase() + inputMovie.value.trim().slice(1);
        if (newMovie && newMovie.length < 21) {
            movieDB.movies.push(newMovie);
        } else if (newMovie.length >= 21) {
            movieDB.movies.push(newMovie.slice(0, 20) + '...');
        }
        if (favCheckbox.checked) {
            console.log('Добавляем любимый фильм!');
        }
        sortMovies(movieDB.movies, movieList);
        addForm.reset();
    });

    movieList.addEventListener('click', (evt) => {
        if (evt.target.classList.contains('delete')) {
            let deleteMovie = evt.target.parentElement.textContent.trim();
            for (let i in movieDB.movies) {
                if (deleteMovie.includes(movieDB.movies[i])) {
                    movieDB.movies.splice(i, 1);
                    sortMovies(movieDB.movies, movieList);
                }
            }
        }
    });

});