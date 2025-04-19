"use client"
import React, { useState } from "react"
import Input from "@/components/reusable/Input"
import Button from "@/components/reusable/Button"

const RegisterPage = () => {
    // This is the register page component
    const [form, setForm] = useState({
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        phone: "",
    })

    const handleChange = (e) => {
        setForm({...form, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        // Handle form submission logic here
        // console.log(form)
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/register`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(form)
          });
          
          const data = await res.json();
          
          if (!res.ok) {
            console.error("Registration failed:", data.message);
            alert(`❌ ${data.message}`);
          } else {
            console.log("Success:", data.message);
            alert(`✅ ${data.message}`);
            window.location.href = "/login"; // Redirect to the login page after successful registration
          }
        }

    return (
        <main className="max-w-md mx-auto p-6">
            <h2 className="text-2xl font-bold mb-4">Register</h2>
            <form className="space-y-4" onSubmit={handleSubmit}>
                <Input label="First Name" type="text" name="first_name" value={form.first_name} onChange={handleChange} required />
                <Input label="Last Name" type="text" name="last_name" value={form.last_name} onChange={handleChange} required />
                <Input label="Email" type="email" name="email" value={form.email} onChange={handleChange} required />
                <Input label="Password" type="password" name="password" value={form.password} onChange={handleChange} required />
                <Input label="Phone Number" type="tel" name="phone" value={form.phone} onChange={handleChange} required />
                <Button type="submit">Register</Button>
                <p className="text-sm text-gray-600">Already have an account? <a href="/login" className="text-blue-500 hover:underline">Login</a></p>
            </form>
        </main>
    )
}

export default RegisterPage;