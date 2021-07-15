import Head from 'next/head';
import router from 'next/router';
import GoogleLogo from '../components/GoogleLogo';
import Button from '../components/UI/Button';
import TextInput from '../components/UI/TextInput';

export default function HomePage() {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <Head>
        <title>Gmail - Login</title>
        <meta name="description" content="Gmail - Mail" />
      </Head>
      <div
        className="flex flex-col justify-center items-center border border-gray-200
        w-96 h-96 rounded-md text-gray-600
      p-8 text-sm
      "
      >
        <GoogleLogo />
        <h1 className="text-2xl text-gray-900">Jonghyeon Ko</h1>
        <p className="mt-10 mb-4">
          메일에 로그인하려면 먼저 본인임을 인증하세요
        </p>
        <form className="w-full">
          <TextInput
            type="password"
            placeholder="비밀번호 입력"
            fill
            className="mb-10"
          />
        </form>
        <Button
          materialIcon="login"
          color="primary"
          onClick={() => {
            router.push('/mail#inbox');
          }}
        >
          로그인하기
        </Button>
      </div>
    </div>
  );
}
