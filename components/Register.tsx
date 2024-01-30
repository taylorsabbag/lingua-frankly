"use client"
import { z } from "zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
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
  const languageSchema = z.enum([...languages]);
  const formSchema = z
    .object({
      email: z.string().email().min(6).max(40),
      password: z.string().min(6).max(72),
      confirmPassword: z.string().min(6).max(72),
      firstName: z.string().max(30),
      lastName: z.string().max(30),
      baseLanguage: languageSchema,
      targetLanguage: languageSchema,
    })
    .refine((data) => data.password === data.confirmPassword, {
      message: "Please provide matching passwords.",
      path: ["confirmPassword"],
    });
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
      firstName: "",
      lastName: "",
      baseLanguage: "English",
      targetLanguage: "English",
    },
  });

  const onSubmit: SubmitHandler<z.infer<typeof formSchema>> = async (
    values: z.infer<typeof formSchema>
  ) => {
    "use server"
    const {
      email,
      password,
      firstName,
      lastName,
      baseLanguage,
      targetLanguage,
    } = values;
    // try {
    //   const response = await registerNewUser(
    //     email,
    //     password,
    //     firstName,
    //     lastName,
    //     baseLanguage,
    //     targetLanguage
    //   );
    //   const error = response?.error as AuthError | null;
    //   const profileError = response?.profileError as AuthError | null;
    //   if (error || profileError) {
    //     console.error(error, profileError);
    //     return;
    //   }
    //   navigate("/");
    //   // TODO:  Change login state globally or handle session somehow
    // } catch (err) {
    //   console.error(err);
    // }
  };

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
          <Form {...form}>
            <form
              id="registerForm"
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-8"
            >
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Email <span className="text-red-500">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="e.g. johnsmith@gmail.com"
                        {...form.register("email")}
                        {...field}
                        required
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Password <span className="text-red-500">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        {...form.register("password")}
                        {...field}
                        required
                      />
                    </FormControl>
                    <FormDescription>
                      Between 6 and 72 characters.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="confirmPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Confirm Password <span className="text-red-500">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        {...form.register("confirmPassword")}
                        {...field}
                        required
                      />
                    </FormControl>
                    <FormDescription>
                      Must match the password you provided above.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>First Name</FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        placeholder="John"
                        {...form.register("firstName")}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Last Name</FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        placeholder="Smith"
                        {...form.register("lastName")}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="baseLanguage"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Native Language (Mother Tongue){" "}
                      <span className="text-red-500">*</span>
                    </FormLabel>
                    <FormControl>
                      <Select>
                        <SelectTrigger>
                          <SelectValue
                            placeholder="Select a language"
                            {...form.register("baseLanguage")}
                            {...field}
                          />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectLabel>Languages</SelectLabel>
                            {languages.map((language) => (
                              <SelectItem key={language} value={language}>
                                {language}
                              </SelectItem>
                            ))}
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormDescription>
                      Your most fluent language.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="baseLanguage"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Target Language <span className="text-red-500">*</span>
                    </FormLabel>
                    <FormControl>
                      <Select>
                        <SelectTrigger>
                          <SelectValue
                            placeholder="Select a language"
                            {...form.register("targetLanguage")}
                            {...field}
                          />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectLabel>Languages</SelectLabel>
                            {languages.map((language) => (
                              <SelectItem key={language} value={language}>
                                {language}
                              </SelectItem>
                            ))}
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormDescription>
                      The language you wish to learn.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </form>
          </Form>
        </CardContent>
        <CardFooter>
          <Button form="registerForm" className="w-full" type="submit">
            Register
          </Button>
        </CardFooter>
      </Card>
    </TabsContent>
  );
}
