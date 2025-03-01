import createmarkup from './js/news-card';
import NewsFetchApi from './js/newsApi';
import { ThemeSwitcher } from './js/themeSwitcher';
import createWidget from './js/weatherApi';
import { calendar } from './js/calendar';
import { categRefs, getSectionListData, createSectionMarkup, renderSectionMarkup, nameListButtonByMedia, nameListButtonByClick } from './js/categories';
import PaginationLogicPopular from './js/paginationLogicPopular';
import PaginationLogicCategory from './js/paginationLogicCategory';
import PaginationLogicSearch from './js/paginationLogicSearch';
import { onPaginationPopularNextClick } from './js/paginationPopular';
import { onPaginationPopularPrevClick } from './js/paginationPopular';
import { onPaginationCategoryPrevClick } from './js/paginationCategory';
import { onPaginationCategoryNextClick } from './js/paginationCategory';
import { onPaginationSearchPrevClick } from './js/paginationSearch';
import { onPaginationSearchNextClick } from './js/paginationSearch';
// import publishedDateFormatter from './js/publishedDateFormatter';
import { onSearchClick } from './js/header';
import setFavoritesInLocalStor from './js/setFavoritesInLocalStore';
import { changeSearchType } from './js/currentTypeOfSearch';
import { currentTypeOfSearch } from './js/currentTypeOfSearch';
import { changeOpenedPage } from './js/curentlyOpenedPage';
import { currentlyOpenedPage } from './js/curentlyOpenedPage';
console.log("3");
changeOpenedPage('index');

const btnSearch = document.querySelector('.search_mob_btn');

btnSearch.addEventListener('click', onSearchClick);
const pagRefs = {
  prev: document.querySelector('.pag-arrow--prev'),
  next: document.querySelector('.pag-arrow--next'),
};

const newsContainerRef = document.querySelector('.news_container');
const body = document.querySelector('body');
const searchInput = document.querySelector('.search_form');

export const newsFetchApi = new NewsFetchApi();
export const popularNewsPagination = new PaginationLogicPopular();
export const categoryNewsPagination = new PaginationLogicCategory();
export const searchNewsPagination = new PaginationLogicSearch();

if (innerWidth < 768) {
  popularNewsPagination.newsPerPage = 4;
  categoryNewsPagination.newsPerPage = 4;
  searchNewsPagination.newsPerPage = 4;
} else if (innerWidth < 1280) {
  popularNewsPagination.newsPerPage = 7;
  categoryNewsPagination.newsPerPage = 7;
  searchNewsPagination.newsPerPage = 7;
}
else {
  popularNewsPagination.newsPerPage = 8;
  categoryNewsPagination.newsPerPage = 8;
  searchNewsPagination.newsPerPage = 8;
}

// const STORAGE_FAVORITES_KEY = 'favorites';
let resultsArr = [];

// приносить список тем
function getSectionList(e) {
  e.preventDefault();
  newsFetchApi.fetchSectionList().then(({ data: { results } }) => {
    results.forEach(({ section, display_name }) => {
      // деструктурував необхідні данні для розмітки.
      const sectionName = section;
      const displayName = display_name;
    });
  });
}

// getPopularNews();

// приносить дані популярних новин
export function getPopularNews() {
  // текущий поиск - популярных новостей
 changeSearchType('popular')
  newsFetchApi
    .fetchPopularNews()
    .then(({ data }) => {
      //   загальна кількість знайдених новин
      const totalNews = data.num_results;
      // это нужно для избранного
      resultsArr = data.results;
      // проверка если нету новостей.
      if (resultsArr.length === 0) {
        newsContainerRef.innerHTML = '';
        document.querySelector('.without-news_container').style.display =
          'flex';
      } else {
        pagRefs.prev.removeEventListener(
          'click',
          onPaginationCategoryPrevClick
        );
        pagRefs.next.removeEventListener(
          'click',
          onPaginationCategoryNextClick
        );
        pagRefs.prev.removeEventListener('click', onPaginationSearchPrevClick);
        pagRefs.next.removeEventListener('click', onPaginationSearchNextClick);
        pagRefs.prev.addEventListener('click', onPaginationPopularPrevClick);
        pagRefs.next.addEventListener('click', onPaginationPopularNextClick);

        popularNewsPagination.resultsArr = resultsArr;
        const markupAllPopular = popularNewsPagination.getMarkupAll();
        populateNews(markupAllPopular);
      }
    })
    .catch(error => console.log(error));
}


categRefs.categsBlockEL.removeEventListener('click', onCategoryClick)
// add by Volyanskiy start
if (categRefs.currentPage === "index") {
  document.addEventListener('DOMContentLoaded', getSectionListData)
  categRefs.categsBlockEL.addEventListener('click', onCategoryClick)
}
// add by Volyanskiy end



// приносить дані новин по категоріям
export function onCategoryClick(evt) {
// текущий поиск - по категориям
changeSearchType('category')

  newsFetchApi.offset = 0;
  categoryNewsPagination.resetPage();

  // evt.preventDefault();
  // тут треба записати значення обраної категорії з події на яку кнопку клацнули

  // add by Volyanskiy start
  const target = evt.target;
  if (target.classList.contains('section-btn') || target.classList.contains('dropdown-item')) {
  categRefs.newsSection = target.dataset.section;
  // console.log(target);
  // console.log(target.textContent);
  // console.log(categRefs.categsListBtn)
  // console.log(categRefs.categsListBtn.textContent)
  // categRefs.categsListBtn.textContent=target.textContent;
  nameListButtonByClick(String(target.textContent))
  // newsFetchApi.searchSection = String(categRefs.newsSection);
}
  // add by Volyanskiy end
 

  newsFetchApi
    .fetchBySection()
    .then(({ data }) => {
      pagRefs.prev.removeEventListener('click', onPaginationCategoryPrevClick);
      pagRefs.next.removeEventListener('click', onPaginationCategoryNextClick);
      //   загальна кількість знайдених новин, тут она врёт, на самом деле приходит меньше чем есть.
      const totalNews = data.num_results;
      // это нужно для избранного
      resultsArr = data.results;

      // проверка если нету новостей.
      if (data.results === null) {
        newsContainerRef.innerHTML = '';
        document.querySelector('.without-news_container').style.display =
          'flex';
      } else {
        categoryNewsPagination.resultsArr = [];
        pagRefs.prev.removeEventListener('click', onPaginationPopularPrevClick);
        pagRefs.next.removeEventListener('click', onPaginationPopularNextClick);
        pagRefs.prev.removeEventListener('click', onPaginationSearchPrevClick);
        pagRefs.next.removeEventListener('click', onPaginationSearchNextClick);
        pagRefs.prev.addEventListener('click', onPaginationCategoryPrevClick);
        pagRefs.next.addEventListener('click', onPaginationCategoryNextClick);
        categoryNewsPagination.resultsArr = resultsArr;
        const markupAllCategory = categoryNewsPagination.getMarkupAll();
        populateNews(markupAllCategory);
      }
    })
    .catch(error => console.log(error.response.statusText));
}

searchInput.addEventListener('submit', onSearchInputClick);

// приносить дані за пошуковим запитом
export function onSearchInputClick(event) {
 evt = event;
// текущий поиск - по ключевому слову
 changeSearchType('searchInput')
 

 if(evt.target.className === 'search_form') {// если не нашли новостей, а потом ввели нормальный запрос, делаем заново  display none
  evt.preventDefault();
  //  значення пошукового запиту
  newsFetchApi.searchQuery = evt.target.elements.searchQuery.value;
 }
  newsFetchApi.resetPage();
  document.querySelector('.without-news_container').style.display = 'none';
  
  newsFetchApi
    .fetchBySearchQuery()
    .then(({ data: { response } }) => {
      pagRefs.prev.removeEventListener('click', onPaginationSearchPrevClick);
      pagRefs.next.removeEventListener('click', onPaginationSearchNextClick);

      //   загальна кількість знайдених новин
      totalNews = response.meta.hits;
      // это нужно для избранного
      resultsArr = response.docs;

      // проверка если нету новостей.
      if (resultsArr.length === 0) {
        newsContainerRef.innerHTML = '';
        document.querySelector('.without-news_container').style.display =
          'flex';
      } else {
        searchNewsPagination.resultsArr = [];
        pagRefs.prev.removeEventListener('click', onPaginationPopularPrevClick);
        pagRefs.next.removeEventListener('click', onPaginationPopularNextClick);
        pagRefs.prev.removeEventListener(
          'click',
          onPaginationCategoryPrevClick
        );
        pagRefs.next.removeEventListener(
          'click',
          onPaginationCategoryNextClick
        );
        pagRefs.prev.addEventListener('click', onPaginationSearchPrevClick);
        pagRefs.next.addEventListener('click', onPaginationSearchNextClick);

        searchNewsPagination.resultsArr = resultsArr;
        // ++++++++++++++++++++++
        // приходит по 10 новостей, проверяем если сразу пришло 11-19 для второй страницы
        if (
          searchNewsPagination.page ===
          Math.floor(
            searchNewsPagination.resultsArr.length /
              searchNewsPagination.newsPerPage
            // тут -1 - загружаем следующую страницу за 1 страницу раньше, на случай если догрузим не полный массив, что б отображалось по 7, а не 6, потом догрузили 7, и потом остаток
          ) -
            1
        ) {
          newsFetchApi.page += 1;

          newsFetchApi
            .fetchBySearchQuery()
            .then(({ data: { response } }) => {
              console.log(response);
              const extraResultsArr = response.docs;

              searchNewsPagination.resultsArr.push(...extraResultsArr);
            })
            .catch(error => console.log(error));
        }

        // ++++++++++++++++++++++
        const markupAllSearch = searchNewsPagination.getMarkupAll();
        populateNews(markupAllSearch);
      }
    })
    .catch(error => console.log(error));
}



//============= перемикач теми початок ==========

const themeSwitcherEl = document.querySelector('.switch_input');
const mobileSwitcherEl = document.querySelector('.switch_input--mobile');

const themeSwitcher = new ThemeSwitcher(themeSwitcherEl, mobileSwitcherEl);

mobileSwitcherEl.addEventListener('change', themeSwitcher.onThemeToggle);
themeSwitcherEl.addEventListener('change', themeSwitcher.onThemeToggle);

themeSwitcher.renderTheme();
//============= перемикач теми кінець ============

// Начало. Проверка на клик по Добавить в избранное
function onAddToFavoritesClick(evt) {
  if (evt.target.className === 'card__btn') {
    const clickedArticleId =
      evt.target.closest('.card')?.id ||
      evt.target.closest('.card')?.slug_name ||
      evt.target.closest('.card')?._id;

    if ((evt.target.textContent.contains = 'Add to favorites')) {
      evt.target.textContent = 'Remove from favorites';
    }
    setFavoritesInLocalStor({
      resultsArr,
      clickedArticleId,
      evt,
    });
  }
}

// Конец. Проверка на клик по Добавить в избранное

//=== Подчеркивание активной ссылки на страницу -- начало

import './js/currentPage';

//=== Подчеркивание активной ссылки на страницу -- конец

// Рендеринг всех карточек на странице с календарём. начало
export function populateNews(markupAllPopular) {
  newsContainerRef.innerHTML = markupAllPopular;

  // Блок добавления погоды
  const weatherWidgetContainer = document.querySelector('.weatherWidget');

  createWidget(weatherWidgetContainer);

  // Слушатель на клик по Добавить в избранное
  body.addEventListener('click', onAddToFavoritesClick);
}
// Рендеринг всех карточек на странице с календарём. конец
