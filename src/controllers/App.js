import AppModel from '../models/AppModel';
import AppView from '../views/AppView';

function createSearchBar() {
  const searchBar = document.createElement('section');
  searchBar.innerHTML = '<form class="searchBar-container" id="form"><input id="input" type="search" class="searchBar" placeholder="What do you want to find"></form>';

  document.body.appendChild(searchBar);
}

function createClipsConatainer() {
  const clipsContainer = document.createElement('section');
  clipsContainer.id = 'clipsContainer';
  document.body.appendChild(clipsContainer);
}

function addEventListenerToPages(view) {
  const choosePage = document.getElementsByClassName('nonactive-page');
  Array.from(choosePage).forEach(page => page.addEventListener('click', () => {
    view.render(+page.innerText);
    addEventListenerToPages(view);
  }));
}

async function renderClips(state, countOfClipsPerPage) {
  const model = new AppModel(state, countOfClipsPerPage);
  const data = await model.getClipInfo();
  const view = new AppView(data);
  view.render();
  addEventListenerToPages(view);
}

export default class App {
  constructor() {
    this.state = {
      url: 'https://www.googleapis.com/youtube/v3/search?key=AIzaSyByXP7m96EEVAI2CpA8YsZ8zXnXcnagT6Y&type=video&part=snippet&maxResults=15&q=',
    };
  }

  async start() {
    createSearchBar();
    createClipsConatainer();
    let countOfClipsPerPage;
    if (window.innerWidth < 590) countOfClipsPerPage = 1;
    else if (window.innerWidth < 870) countOfClipsPerPage = 2;
    else if (window.innerWidth < 1140) countOfClipsPerPage = 3;
    else countOfClipsPerPage = 4;
    const form = document.getElementById('form');
    const input = document.getElementById('input');
    const url = 'https://www.googleapis.com/youtube/v3/search?key=AIzaSyByXP7m96EEVAI2CpA8YsZ8zXnXcnagT6Y&type=video&part=snippet&maxResults=50&q=';
    form.addEventListener('input', () => {
      this.state.url = url + input.value;
      renderClips(this.state, countOfClipsPerPage);
    });
  }
}
