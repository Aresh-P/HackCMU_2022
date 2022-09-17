class Level {
    constructor(environments) {
        let string = '';

        for (let i = 0; i < environments.length; i++) {
            let env = new Environment(environments[i]);
            string += env.element.outerHTML;
        }

        this.element = $('<section id="content">' + string + '</section>')[0];
    }
}