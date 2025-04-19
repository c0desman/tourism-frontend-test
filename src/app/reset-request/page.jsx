"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Input from "@/components/reusable/Input";
import Button from "@/components/reusable/Button";

const ResetRequestPage = () => {
  const router = useRouter();
  const [step, setStep] = useState("email"); // "email" or "otp"
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    if (!email) return alert("Please enter your email address.");
    setLoading(true);

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/resetrequest`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
        credentials: "include", // Include cookies in the request
      });

      const data = await res.json();

      if (res.ok) {
        alert("✅ OTP sent to your email.");
        setStep("otp");
      } else {
        alert(data.message || "❌ Failed to send OTP. Please try again.");
        return
      }
    } catch (error) {
      console.error("Error sending OTP:", error);
      alert("❌ An error occurred. Please try again later.");
      return
    } finally {
      setLoading(false);
    }
  };

  const handleOtpSubmit = async (e) => {
    e.preventDefault();
    if (!otp || !password) return alert("Please enter OTP and new password.");
    setLoading(true);
  
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/resetpassword`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ otp, password }),
        credentials: "include",
      });
  
      if (!res.ok) {
        const errorData = await res.json();
        alert(errorData.message || "❌ Failed to reset password.");
        return;
      }
  
      const data = await res.json();
      alert(data.message || "✅ Password reset successful.");
      router.push("/login");
    } catch (error) {
      console.error("Error resetting password:", error);
      alert("❌ An error occurred. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="max-w-md mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">
        {step === "email" ? "Reset Password" : "Enter OTP & New Password"}
      </h2>
      {step === "email" ? (
        <form onSubmit={handleEmailSubmit} className="space-y-4">
          <Input
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Button type="submit" disabled={loading}>
            {loading ? "Sending OTP..." : "Send OTP"}
          </Button>
        </form>
      ) : (
        <form onSubmit={handleOtpSubmit} className="space-y-4">
          <Input
            label="OTP"
            type="text"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            required
          />
          <Input
            label="New Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <Button type="submit" disabled={loading}>
            {loading ? "Resetting Password..." : "Reset Password"}
          </Button>
        </form>
      )}
      <p className="text-sm text-gray-600 mt-4">
        Remember Password?{" "}
        <a href="/login" className="text-blue-500 hover:underline">
          Login
        </a>
      </p>
    </main>
  );
};

export default ResetRequestPage;