import sel from '../../data/selectors';
import {name, gender, age, story} from '../../data/testData';
import inputValues4 from '../../helpers/methods'

describe('Age field suit', function () {

    before('Open App', function () {
        browser.url('');
    });

    describe ("Placeholder", function () {

        it('TC-0XX Placeholder', function () {
            expect(submitBtn).toEqual(true);
        });
    })

    describe ("Positive cases", function () {

        it('TC-0XX Accepts 0', function () {
            expect(submitBtn).toEqual(true);
        });
    })

    describe ("Negative cases", function () {

        it("TC-0XX Doesn't accept  0", function () {
            expect(submitBtn).toEqual(true);
        });
    })
});
