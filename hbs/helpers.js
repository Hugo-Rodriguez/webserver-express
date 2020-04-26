// helpers

const hbs = require('hbs');

let nombre = "Hugo Rodriguez"


hbs.registerHelper('getAnio', () => {
    return new Date().getFullYear();
});
hbs.registerHelper('nombreCompleto', () => {
    return nombre;
});
hbs.registerHelper('nombre', () => {
    return 'Hugo';
});