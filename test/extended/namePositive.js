import sel from '../../data/selectors';
import exp from '../../data/expected.json';

describe('Name Field', function () {

    describe('Placeholder & asterisk', function () {

        before('Open App', function () {
            browser.url('');
        });

        it('TC-029 Name Field placeholder = "Hero\'s name"', function () {
            let placeholder = $(sel.name).getAttribute('placeholder');
            expect(placeholder).toEqual(exp.namePlaceholder);
        });

        // it('TC-028 Asterisk symbol is provided along with the label', function () {
        //     let placeholder = $(sel.name).getAttribute('placeholder');
        //     expect(placeholder).toEqual(exp.namePlaceholder);
        // });
    });
    describe('Positive', function () {

        it('TC-035 Name field accepts any digits', function () {
            $(sel.name).setValue('0123456789');
            let error = $(sel.nameError).isDisplayed();
            expect(error).toEqual(false);
        });

        it('TC-036 The Name field accepts any uppercase  letters', function () {
            browser.refresh();
            $(sel.name).setValue('SUPERMAN');
            let error = $(sel.nameError).isDisplayed();
            expect(error).toEqual(false);
        });

        it('TC-037 The Name field accepts any lowercase letters', function () {
            browser.refresh();
            $(sel.name).setValue('superman');
            let error = $(sel.nameError).isDisplayed();
            expect(error).toEqual(false);
        });

        it('TC-038 The Name field accepts any lowercase letters', function () {
            browser.refresh();
            $(sel.name).setValue('IloveМійТестЫҐС́ЋЎ');
            let error = $(sel.nameError).isDisplayed();
            expect(error).toEqual(false);
        });

        it('TC-039 The Name field accepts any special symbols', function () {
            browser.refresh();
            $(sel.name).setValue('#!?%&$*@._-<>^:(){}[];/ \' ');
            let error = $(sel.nameError).isDisplayed();
            expect(error).toEqual(false);
        });

        it('TC-040 The Name field accepts spaces', function () {
            browser.refresh();
            $(sel.name).setValue(' ');
            let error = $(sel.nameError).isDisplayed();
            expect(error).toEqual(false);
        });

        it('TC-041 The Name field accepts 69 symbols', function () {
            browser.refresh();
            $(sel.name).setValue('I love you so much. You are my hero :) Be always so brave and kind !!');
            let error = $(sel.nameError).isDisplayed();
            expect(error).toEqual(false);
        });

        it('TC-042 Name field accepts 70 symbols', function () {
            browser.refresh();
            $(sel.name).setValue("I love you so much. You are my hero :) Be always so brave and kind !!!");
            let error = $(sel.nameError).isDisplayed();
            expect(error).toEqual(false);
        });

        it('TC-043 The Name field accepts  1 letter', function () {
            browser.refresh();
            $(sel.name).setValue('I');
            let error = $(sel.nameError).isDisplayed();
            expect(error).toEqual(false);
        });

        it('TC-044 The Name field accepts  1 special symbol', function () {
            browser.refresh();
            $(sel.name).setValue('*');
            let error = $(sel.nameError).isDisplayed();
            expect(error).toEqual(false);
        });

        it('TC-045 The Name field accepts  1 digit', function () {
            browser.refresh();
            $(sel.name).setValue('5');
            let error = $(sel.nameError).isDisplayed();
            expect(error).toEqual(false);
        });

        // it('TC-046 The Name field accepts copy paste functionality', function () {
        //     browser.refresh();
        //     $(sel.name).setValue('5');
        //     let error = $(sel.nameError).isDisplayed();
        //     expect(error).toEqual(false);
        // });

    });

});
