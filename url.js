const url = require('url');

const { URL } = url;
const myURL = new URL ('https://n.news.naver.com/mnews/article/055/0001293462');
console.log('new URL(): ', myURL);
console.log('url.format(): ', url.format(myURL));
console.log('------------------------------');
const parsedUrl = url.parse('https://n.news.naver.com/mnews/article/055/0001293462');
console.log('url.parse(): ', parsedUrl);
console.log('url.format(): ', url.format(parsedUrl));