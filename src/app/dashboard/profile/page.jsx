"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Button from "@/components/reusable/Button";

const ProfilePage = () => {
  const router = useRouter();
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    const fetchProfile = async()=>{
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/user`, {
          method: "GET",
          headers: { "Content-Type": "application/json" },
          credentials: "include" // Include cookies in the request
        });
        if(res.status === 401) {
          alert("❌ Unauthorized! Please login again.");
          router.push("/login");
        } else if(!res.ok) {
          throw new Error("Failed to fetch user data");
        } else {
          const data = await res.json();
          setUserData(data);
        }
      } catch (error) {
        console.error("Error Fetching Profile:", error);
        alert(`❌ Error Fetching Profile: ${error.message}`);
        router.push("/login");
      } finally {
        setLoading(false);
      }
    }
    fetchProfile();
  }, [router]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!userData) {
    return <div>No user data found</div>;
  }

  return (
    <main className="max-w-md mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">User Profile</h2>
      <p className="text-gray-700 break-all">
        <strong>Name:</strong> {userData.first_name} {userData.last_name}<br />
        <strong>Email:</strong> {userData.email}<br />
        <strong>Phone:</strong> {userData.phone}
      </p>
      <Button onClick={() => router.push("/logout")} className="m-4">Logout</Button>
    </main>
  );
};

export default ProfilePage;