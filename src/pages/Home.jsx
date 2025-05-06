import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-center p-6 bg-white">
      <img src="/logo.png" alt="Cherry Logo" className="w-24 h-24 mb-4" />
      <h1 className="text-4xl font-bold mb-2">체리 광고 플랫폼</h1>
      <p className="text-lg mb-6">귀엽고 창의적인 캐릭터 광고 시스템</p>
      <Link to="/login" className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800">광고주 로그인</Link>
    </div>
  );
}