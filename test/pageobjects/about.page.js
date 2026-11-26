const Page = require('./page');

class AboutPage extends Page {

    get heading() {
        return $('h1');
    }

}

module.exports = new AboutPage();
