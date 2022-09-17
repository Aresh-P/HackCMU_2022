class Level {
    constructor(environments) {
        this.environments = [];
        let string = '';

        for (let i = 0; i < environments.length; i++) {
            let env = new Environment(environments[i]);
            string += env.element.outerHTML;
            this.environments.push(env);
        }

        this.element = $('<section id="content">' + string + '</section>')[0];
    }
}