import axios from 'axios';
const URL = 'https://pixabay.com/api/';
const API_KEY = '36703462-a851a985acd140dbfc53135d2';

export default class NewsService {
  constructor() {
    this.page = 1;
    this.searchQuery = '';
  }
  async getNews() {
    const data  = await axios.get(
      `${URL}?key=${API_KEY}&q=${this.searchQuery}&per_page=40&page=${this.page}`
    );
    this.incrementPage();
    return data.data;
  }

  resetPage() {
    this.page = 1;
  }

  incrementPage() {
    this.page += 1;
  }
}
