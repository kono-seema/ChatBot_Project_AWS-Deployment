const fs = require('fs');
const path = require('path');

describe('Chatbot Tests', () => {
  test('server.js exists', () => {
    const serverPath = path.join(__dirname, '..', 'server.js');
    expect(fs.existsSync(serverPath)).toBe(true);
  });
  
  test('package.json is valid', () => {
    const pkg = require('../package.json');
    expect(pkg.name).toBeDefined();
  });
  
  test('frontend files exist', () => {
    expect(fs.existsSync(path.join(__dirname, '..', 'src', 'index.html'))).toBe(true);
    expect(fs.existsSync(path.join(__dirname, '..', 'src', 'script.js'))).toBe(true);
  });
});