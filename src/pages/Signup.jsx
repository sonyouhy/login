import { useState } from "react";
import { supabase } from "../supabase";
import { useNavigate, Link } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSignup = async () => {
    const { error } = await supabase.auth.signUp({ email, password });
    if (error) {
      setError(error.message);
    } else {
      navigate("/login");
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center p-6">
      <div className="w-full max-w-md space-y-4">
        <h2 className="text-2xl font-semibold text-center">회원가입</h2>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="이메일" className="w-full border p-2 rounded" />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="비밀번호" className="w-full border p-2 rounded" />
        {error && <p className="text-red-500">{error}</p>}
        <button onClick={handleSignup} className="w-full bg-black text-white py-2 rounded hover:bg-gray-800">가입하기</button>
        <p className="text-center text-sm">
          이미 계정이 있으신가요? <Link to="/login" className="text-blue-500 underline">로그인</Link>
        </p>
      </div>
    </div>
  );
}