# mocha-using

> Parametrized unit tests for [Mocha](https://github.com/mochajs/mocha). **Works with Mocha >=5.2**

## Installation

```sh
npm install mocha-using --save-dev
```

## Registration

### Global

You can register mocha-using with:

```sh
mocha -r mocha-using/register
```

This will register a global `using()` function that can be used in any test file and you can skip the step below.

### Per file

To use mocha-using in on a per file basis, add the line below to your test files:

```
const using = require('mocha-using');
```

## Usage

#### Basic parametrized test

Prepend `it` statements with `using` and pass argument to assertions:

```javascript
using(1).
    it('should be one', value => {
        expect(value).to.equal(1);
    });
```

The result will display as:

```
√ should be one [1]
```
#### Multiple test cases

Chain `using` to create multiple test cases:

```javascript
using('a').
using('b').
using('c').
    it('should be a string', value => {
        expect(value).to.be.a('string');
    });
```

The result will display as:

```
√ should be a string ["a"]
√ should be a string ["b"]
√ should be a string ["c"]
```

#### Multiple arguments

Pass multiple arguments to `using` and use them in `it` statement:

```javascript
using(1, 'bus').
using(2, 'cars').
    it('should be a number followed by a string', (amount, title) => {
        expect(amount + ' ' + title).to.match(/^[0-9]\s[a-z]+$/);
    });
```

The result will display as:

```
√ should be a number followed by a string [1, "bus"]
√ should be a number followed by a string [2, "cars"]
```

_Note: The number of arguments in chained using() must be the same._

## Async

Add the `done` argument at the end of argument list in it statements:

```javascript
using(1, 'bus').
using(2, 'cars').
    it("should be a number followed by a string", (amount, title, done) => {
        expect(amount + ' ' + title).to.match(/^[0-9]\s[a-z]+$/);
        done();
    });
```

## License

MIT