import ToDoWidget from './ToDoWidget.js';
import QuoteWidget from './QuoteWidget.js';

export default class Dashboard {
  constructor(containerId) {
    this.container = document.getElementById(containerId);
    this.widgets = [];
  }

  addWidget(type) {
    let widget;
    switch (type) {
      case 'todo':
        widget = new ToDoWidget();
        break;
      case 'quote':
        widget = new QuoteWidget();
        break;
      default:
        console.error('Неизвестный тип виджета:', type);
        return;
    }

    const element = widget.render();
    this.container.appendChild(element);
    this.widgets.push(widget);
  }

  removeWidget(id) {
    const index = this.widgets.findIndex(w => w.id === id);
    if (index !== -1) {
      this.widgets[index].destroy();
      this.widgets.splice(index, 1);
    }
  }
}
