const isProd = true;

const obj = {
  local: 'http://localhost:5000/api',
  prod: 'https://litmark-backend-2.vercel.app/api',
};

export const APP_URL = isProd ? obj.prod : obj.local;
