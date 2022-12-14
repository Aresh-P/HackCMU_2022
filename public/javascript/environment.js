class Environment {
    constructor(data) {
        this.givens = [];
        this.goals = [];

        let givensstring = `
            <div class="givens-wrapper">
                <div class="givens-playground">
        `;
        //      </div>
        //  </div>

        let goalsstring = `
            <div class="goals-wrapper">
                 <div class="goals-playground">
        `;
        //      </div>
        //  </div>

        for (let i = 0; i < data.givens.length; i++) {
            let obj = createobj(data.givens[i]);
            $(obj.element).addClass('draggable');
            givensstring += obj.element.outerHTML;
            this.givens.push(obj);
        }

        givensstring += '</div></div>';

        for (let i = 0; i < data.goals.length; i++) {
            let obj = createobj(data.goals[i]);
            $(obj.element).addClass('inactive-goal');
            goalsstring += obj.element.outerHTML;
            this.goals.push(obj);
        }

        goalsstring += '</div></div>';

        this.element = $('<div class="environment">' + givensstring + goalsstring + '</div>')[0];
    }
}