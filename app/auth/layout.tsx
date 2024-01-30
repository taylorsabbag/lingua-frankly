import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Layout({
  children,
  login,
  register,
}: {
  children: React.ReactNode;
  login: React.ReactNode;
  register: React.ReactNode;
}) {
  return (
    <>
      <Tabs defaultValue={renderMode} className="w-[380px] mx-auto">
        <TabsList className="w-full flex justify-between">
          <TabsTrigger
            className="w-full"
            value="login"
            onClick={() => navigate("/login")}
          >
            Login
          </TabsTrigger>
          <TabsTrigger
            className="w-full"
            value="register"
            onClick={() => navigate("/register")}
          >
            Register
          </TabsTrigger>
        </TabsList>
        {login}
        {register}
      </Tabs>
    </>
  );
}
