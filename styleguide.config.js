const fs = require('fs');
const rawBody = fs.readFileSync('./react-styleguide.html', 'utf8');

module.exports = {
  components: 'components/*.jsx',
  template: {
    body: {
      raw: rawBody,
    },
  },
};
