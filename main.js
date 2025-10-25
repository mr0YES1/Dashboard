import Dashboard from './js/Dashboard.js';

const dashboard = new Dashboard('dashboard');

document.getElementById('add-todo').addEventListener('click', () => 
    {
        dashboard.addWidget('todo');
    }
);

document.getElementById('add-quote').addEventListener('click', () => 
    {
        dashboard.addWidget('quote');    
    }
);