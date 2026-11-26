const Page = require('./page');

class ServicesPage extends Page {

    get heading() {
        return $('//h1');
    }

}

module.exports = new ServicesPage();
