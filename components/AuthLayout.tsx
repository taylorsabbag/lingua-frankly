"use client"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Tabs defaultValue="login" className="w-[380px] mx-auto">
      <TabsList className="w-full flex justify-between">
        <TabsTrigger className="w-full" value="login">
          Login
        </TabsTrigger>
        <TabsTrigger className="w-full" value="register">
          Register
        </TabsTrigger>
      </TabsList>
      {children}
    </Tabs>
  );
}
