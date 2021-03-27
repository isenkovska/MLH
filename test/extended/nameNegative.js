import sel from '../../data/selectors';
import exp from '../../data/expected.json';

describe('Name Field', function () {

    describe('Negative', function () {

        before('Open App', function () {
            browser.url('');
        });

        it('TC-047 "The Name field is required', function () {
            $(sel.name).setValue('my');
            let error = $(sel.nameError).getAttribute('role');
            expect(error).toEqual(false);
        });
    });
});
