import sel from "../../data/selectors";
import {age, gender, name, story} from "../../data/testData";
import inputValues4 from "../../helpers/methods";

describe('Story field', function () {

    before('Open App', function () {
        browser.url('');
    });
    beforeEach(() => {
        browser.refresh();
    });

    it('TC-179 The word \'year\' appears in a story after filling in the field age \'1\'. ', function () {
        inputValues4(name.default, gender.it, age.one, story.comedy);
        $(sel.submit).click();
        let story1 = $$(sel.story)[0].getText();
        expect (story1).toContain('year old');


    });
});