const fs = require('fs');

const text = fs.readFileSync('index.html', 'utf8');
const re = /<a\b[^>]*>[\s\S]*?<\\u002Fa>/g;
let match;
let count = 0;

while ((match = re.exec(text))) {
  const anchor = match[0];
  if (/resume|download|pdf|docx|github/i.test(anchor)) {
    count += 1;
    console.log(`--- anchor ${count} at ${match.index}`);
    console.log(anchor);
  }
}

console.log(`found ${count}`);
