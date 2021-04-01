import sel from '../../data/selectors';


describe('Image upload suite', function () {

    before('Open App', function () {
        browser.url('');
    });

    describe('Positive', () => {


        it('TC-114 should upload a jpeg image file', () => {

            const fileUpload = $(sel.imageHiddenInput);
            const imgAlt = $(sel.imgAlt);
            const filePath = path.join(__dirname, '../../data/testImages/JPEG 2mb.jpg');
            browser.execute(
                (el) => el.style.display = 'block',
                fileUpload
            );
            fileUpload.waitForDisplayed();
            const path = require('path');

            fileUpload.setValue(filePath);
            expect (imgAlt).toBeExisting();

        });
    });
});

