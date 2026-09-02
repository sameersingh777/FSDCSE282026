const container = document.getElementById('root');
console.log(container);
const root = ReactDOM.createRoot(container);
// const h2 = React.createElement('h2',{ style: { color: 'red' } },'Welcome to react');
// const h1 = React.createElement('h1', { style: { color: 'red' } }, 'ABES Engineering College');
// const img = React.createElement('img', { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6aXjp5lzjgN0YfEzdEJ5gbal7ge-h-Cj8gSNUPWcGgA&s=10', height: '200px', width: '200px' });
// const div = React.createElement('div', { style: { color: 'blue' } }, [h1, h2, img]);
// root.render(div);

const h1 = React.createElement('h1', { style: { color: 'Black' }, bold: 'true' }, 'Personal Details');
const h3 = React.createElement('h3', { style: { color: 'blue' } }, 'Name: Sajjad Ansari');
const h4 = React.createElement('h4', { style: { color: 'green' } }, 'College: ABES Engineering College');
const h5 = React.createElement('h5', { style: { color: 'red' } }, 'Branch: Computer Science and Engineering');
const h6 = React.createElement('h6', { style: { color: 'orange' } }, 'Year: 2021-2025');

const div = React.createElement('div', { style: { color: 'blue' } }, [h1, h3, h4, h5, h6]);
root.render(div);