import sel from '../../data/selectors';

describe('Required fields and story created', function () {

    before('Open App', function () {
        browser.url('');
    });

    it('TC-026 Submit button is enabled after fields 1-4 are filled in with valid values', function () {
        $(sel.name).setValue('LadyBug007');
        $$(sel.radioButtons)[1].click();
        $(sel.age).setValue('123456789')
        $(sel.storyType).click();
        $$(sel.storyList)[6].click();
        let submitBtn = $(sel.submitBtn).isEnabled();
        expect(submitBtn).toEqual(true);
    });

    it('TC-027 User can create a story with valid values', function () {
        browser.refresh();

        $(sel.name).setValue('LadyBug007');
        $$(sel.radioButtons)[1].click();
        $(sel.age).setValue('123456789')
        $(sel.storyType).click();
        $$(sel.storyList)[6].click();
        $(sel.submitBtn).click();

        browser.pause(2000);
        let tryAgainBtn = $(sel.tryAgain).isDisplayed();
        expect(tryAgainBtn).toEqual(true);
    });
});
