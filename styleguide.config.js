const fs = require('fs');
const rawBody = fs.readFileSync('./react-styleguide.html', 'utf8');

module.exports = {
  template: {
    body: {
      raw: rawBody,
    },
  },
};
