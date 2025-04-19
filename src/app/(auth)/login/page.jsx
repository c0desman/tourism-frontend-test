"use client"
import React, { useState } from "react"
import Input from "@/components/reusable/Input"
import Button from "@/components/reusable/Button"

const LoginPage = () => {
    const [form, setForm] = useState({
        email: "",
        password: ""
    })

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        //Handle form submission logic here
        console.log(form);
        
        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/login`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form),
                credentials: "include" // Include cookies in the request
            });
            const data = await res.json();

            if (!res.ok) {
                console.error("Login failed:", data.message);
                alert(`❌ ${data.message}`);
            } else {
                console.log("Success:", data.message);
                alert(`✅ ${data.message}`);
                // Storing Token to Local Storage
                // localStorage.setItem("accessToken", data.accesstoken);
                // localStorage.setItem("refreshToken", data.refreshtoken);
                // Redirect to the dashboard or home page
                window.location.href = "/dashboard/profile";
            }
        } catch (error) {
            console.error("An error occurred:", error);
            alert(`❌ An error occurred: ${error.message}`);
        }
    }

    return (
        <main className="max-w-md mx-auto p-6">
            <h2 className="text-2xl font-bold mb-4">Login</h2>
            <form className="space-y-4" onSubmit={handleSubmit}>
                <Input label="Email" type="email" name="email" value={form.email} onChange={handleChange} required />
                <Input label="Password" type="password" name="password" value={form.password} onChange={handleChange} required />
                <Button type="submit">Login</Button>
                <p className="text-sm text-gray-600">Don't have an account? <a href="/register" className="text-blue-500 hover:underline">Register</a></p>
                <p className="text-sm text-gray-600">Forgot your password? <a href="/reset-request" className="text-blue-500 hover:underline">Reset it</a></p>
            </form>
        </main>

    )
}

export default LoginPage