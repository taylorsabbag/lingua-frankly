import Login from "@/components/Login";
import Register from "@/components/Register";
import AuthLayout from "@/components/AuthLayout";

export default function Page() {
  return (
    <AuthLayout>
        <Login />
        <Register />
    </AuthLayout>
  );
}