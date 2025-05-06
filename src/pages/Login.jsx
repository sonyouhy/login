import { useState } from "react";
import { supabase } from "../supabase";
import { useNavigate, Link } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleLogin = async () => {
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) {
      setError(error.message);
    } else {
      navigate("/dashboard");
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center p-6">
      <div className="w-full max-w-md space-y-4">
        <h2 className="text-2xl font-semibold text-center">광고주 로그인</h2>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="이메일" className="w-full border p-2 rounded" />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="비밀번호" className="w-full border p-2 rounded" />
        {error && <p className="text-red-500">{error}</p>}
        <button onClick={handleLogin} className="w-full bg-black text-white py-2 rounded hover:bg-gray-800">로그인</button>
        <p className="text-center text-sm">
          계정이 없으신가요? <Link to="/signup" className="text-blue-500 underline">회원가입</Link>
        </p>
      </div>
    </div>
  );
}