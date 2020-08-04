//Paragraph 3.5

describe("pow", function () {

    it("Powers 2 to 3 = 8", function () {
        assert.equal(pow(2, 3), 8);

    });

    it("Powers 3 to 4 = 81", function () {
        assert.equal(pow(3, 4), 81);

    });

    describe("powers to the power of 3", function () {

        function makeTest(x) {
            let expected = x * x * x;
            it(`${x} to the power of 3 will be ${expected}`, function () {
                assert.equal(pow(x, 3), expected);
            });
        }

        for (let x = 1; x <= 5; x++) {
            makeTest(x);
        }
    })

});


