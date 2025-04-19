"use client"

import { useEffect } from "react";
import { useRouter } from "next/navigation";

const Logout = () => {
    const router = useRouter();
    useEffect(()=>{
        const logout = async () => {
            try {
                const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/logout`, {
                    method: "POST",
                    headers: {"content-Type": "application/json"},
                    credentials: "include" // Include cookies in the request
                })

                if(!res.ok) {
                    const data = await res.json()
                    console.error('Logout failed:', data.message);
                    alert(`Logout failed: ${data.message}`);
                }
            } catch (error) {
                console.error('An error occurred:', error);
                alert(`An error occurred: ${error.message}`);
            } finally {
                // Redirect to the login page after logout
                router.push("/login");
            }
        }
        logout()
    }, [router])

  return (
    <div>Logging Out.....</div>
  )
}

export default Logout;