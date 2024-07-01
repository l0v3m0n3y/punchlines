# punchlines
JavaScript library for punchlines.ai
# main
```js
const {punchlines} = require('./punchlines');

const punchline = new punchlines();
punchline.get_punchline("man go to bar").then(info => {
    console.log(info);
}).catch(error => {
    console.error('Error:', error);
});
```
