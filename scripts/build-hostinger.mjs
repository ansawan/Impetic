import { execSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';

const apiDir = path.resolve('src/app/api');
const tempDir = path.resolve('src/app/_temp_api');

let moved = false;
try {
  if (fs.existsSync(apiDir)) {
    fs.renameSync(apiDir, tempDir);
    moved = true;
  }
  process.env.DEPLOY_TARGET = 'hostinger';
  execSync('npx next build --webpack', { stdio: 'inherit' });
} finally {
  if (moved && fs.existsSync(tempDir)) {
    fs.renameSync(tempDir, apiDir);
  }
}
