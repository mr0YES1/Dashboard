import UIComponent from './UIComponent.js';

export default class QuoteWidget extends UIComponent {
  constructor(title = 'Случайная цитата', id) {
    super(title, id);
    this.quotes = [
      'Будь собой; все остальные роли уже заняты.',
      'Делай сегодня то, что другие не хотят, завтра будешь жить так, как другие не могут.',
      'Счастье — это не то, что готово. Оно приходит от твоих собственных действий.',
      'Кто хочет — ищет возможности, кто не хочет — ищет причины.'
    ];
  }

  render() {
    const wrapper = super.render();
    const body = wrapper.querySelector('.widget-body');
    const quote = this._getRandomQuote();

    body.innerHTML = `
      <div class="quote-widget">
        <p class="quote-text">"${quote}"</p>
        <button class="new-quote">Новая цитата</button>
      </div>
    `;

    const btn = body.querySelector('.new-quote');
    const quoteText = body.querySelector('.quote-text');
    btn.addEventListener('click', () => {
      quoteText.textContent = `"${this._getRandomQuote()}"`;
    });

    return wrapper;
  }

  _getRandomQuote() {
    const index = Math.floor(Math.random() * this.quotes.length);
    return this.quotes[index];
  }
}
