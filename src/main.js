import {createBoardTemplate} from './components/board';
import {createFilterTemplate} from './components/filter';
import {createLoadMoreBtnTemplate} from './components/load-more-button';
import {createSiteMenuTemplate} from './components/site-menu';
import {createTaskTemplate} from './components/task';
import {createTaskEditTemplate} from './components/task-edit';

const render = (container, template, place = `beforeend`) => {
  container.insertAdjacentHTML(place, template);
};

const siteMainElement = document.querySelector(`.main`);
const siteHeaderElement = document.querySelector(`.main__control`);

render(siteHeaderElement, createSiteMenuTemplate());
render(siteMainElement, createFilterTemplate());
render(siteMainElement, createBoardTemplate());

const taskListElement = siteMainElement.querySelector(`.board__tasks`);
render(taskListElement, createTaskEditTemplate());

new Array(3)
  .fill(``)
  .forEach(
      () => render(taskListElement, createTaskTemplate())
  );

const boardElement = siteMainElement.querySelector(`.board`);
render(boardElement, createLoadMoreBtnTemplate());

