import axios from 'axios';

const strapiUrl = process.env.STRAPI_URL;

interface SignInProps {
    email: string;
    password: string;
}

export async function signIn({ email, password }: SignInProps) {
  console.log('signIn');
  console.log('email', email);
  console.log('password', password);
  console.log('strapiUrl', strapiUrl);
  console.log('strapiUrl', `${strapiUrl}/api/auth/local`);
  
  const res = await axios.post(`${strapiUrl}/api/auth/local`, {
    email,
    password,
  });
  return res.data;
}