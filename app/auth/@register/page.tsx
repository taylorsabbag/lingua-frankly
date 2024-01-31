import { cn } from "@/lib/utils";
import { signup } from "../actions"

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { TabsContent } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";

export default function Register() {
  const languages = [
    "English",
    "Spanish",
    "French",
    "German",
    "Italian",
    "Russian",
    "Chinese",
    "Japanese",
    "Arabic",
    "Hindi",
    "Portuguese",
    "Dutch",
    "Swedish",
    "Korean",
    "Turkish",
    "Polish",
    "Norwegian",
    "Danish",
    "Finnish",
    "Greek",
    "Czech",
    "Romanian",
    "Hungarian",
    "Thai",
    "Indonesian",
    "Vietnamese",
    "Hebrew",
    "Persian",
    "Bulgarian",
  ] as const;

  return (
    <TabsContent value="register">
      <Card className={cn("w-[380px]")}>
        <CardHeader>
          <CardTitle>Register</CardTitle>
          <CardDescription>
            <span className="text-red-500">*</span> indicates a required field.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <form id="registerForm" action={signup} className="space-y-8">
            <div>
              <Label htmlFor="email">
                Email <span className="text-red-500">*</span>
              </Label>
              <Input
                type="email"
                name="email"
                placeholder="johnsmith@gmail.com"
                required
              />
            </div>
            <div>
              <Label htmlFor="password">
                Password <span className="text-red-500">*</span>
              </Label>
              <Input
                type="password"
                name="password"
                required
                min={6}
                max={72}
              />
            </div>
            <div>
              <Label htmlFor="confirmPassword">
                Confirm Password <span className="text-red-500">*</span>
              </Label>
              <Input
                type="password"
                name="confirmPassword"
                required
                min={6}
                max={72}
              />
            </div>
            <div>
              <Label htmlFor="firstName">First Name</Label>
              <Input type="text" name="firstName" placeholder="John" />
            </div>
            <div>
              <Label htmlFor="lastName">Last Name</Label>
              <Input type="text" name="lastName" placeholder="Smith" />
            </div>
            <div>
              <Label htmlFor="baseLanguage">
                Native Language (Mother Tongue){" "}
                <span className="text-red-500">*</span>
              </Label>
              <Select required>
                <SelectTrigger>
                  <SelectValue placeholder="Select a language" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Native Language (Mother Tongue)</SelectLabel>
                    {languages.map((language) => (
                      <SelectItem key={language} value={language}>
                        {language}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="baseLanguage">
                Target Language <span className="text-red-500">*</span>
              </Label>
              <Select required>
                <SelectTrigger>
                  <SelectValue placeholder="Select a language" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Target Language</SelectLabel>
                    {languages.map((language) => (
                      <SelectItem key={language} value={language}>
                        {language}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <Button form="registerForm" className="w-full" type="submit">
              Register
            </Button>
          </form>
        </CardContent>
      </Card>
    </TabsContent>
  );
}
