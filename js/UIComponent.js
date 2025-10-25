export default class UIComponent {
  constructor(title, id) {
    if (new.target === UIComponent) {
      throw new Error('Нельзя создавать экземпляр абстрактного класса UIComponent');
    }
    this.title = title;
    this.id = id || `component-${Date.now()}`;
    this.element = null;
  }

  render() {
    const wrapper = document.createElement('div');
    wrapper.classList.add('widget');
    wrapper.dataset.id = this.id;
    wrapper.innerHTML = `
      <div class="widget-header">
        <h3>${this.title}</h3>
        <button class="close-btn">✖</button>
      </div>
      <div class="widget-body"></div>
    `;
    this.element = wrapper;
    this._bindCloseButton();
    return wrapper;
  }

  _bindCloseButton() {
    const btn = this.element.querySelector('.close-btn');
    btn.addEventListener('click', () => this.destroy());
  }

  destroy() {
    if (this.element) {
      this.element.remove();
      this.element = null;
    }
  }
}
