const fs = require('fs');

const path = 'index.html';
const text = fs.readFileSync(path, 'utf8');
const updated = text.replace(
  'href=\\"./assets/Kolla_Rakesh_Resume.pdf\\" download=\\"Rakesh Kolla - Resume.pdf\\"',
  'href=\\"Kolla_Rakesh.pdf\\" download=\\"Kolla_Rakesh.pdf\\"'
);

if (updated === text) {
  throw new Error('Resume link was not found');
}

fs.writeFileSync(path, updated);
