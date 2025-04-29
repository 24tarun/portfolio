"use client";

import * as React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { sendContactMessage } from "@/app/actions"; // Import the server action

const formSchema = z.object({
  firstName: z.string().min(1, { message: "First name is required." }).max(50),
  lastName: z.string().min(1, { message: "Last name is required." }).max(50),
  email: z.string().email({ message: "Please enter a valid email address." }),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters long." })
    .max(500, { message: "Message cannot exceed 500 characters." }),
});

type FormData = z.infer<typeof formSchema>;

export function ContactSection() {
  const { toast } = useToast();
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    },
  });

  const [isSubmitting, setIsSubmitting] = React.useState(false);

  async function onSubmit(data: FormData) {
    setIsSubmitting(true);
    try {
      const result = await sendContactMessage(data);

      if (result.success) {
        toast({
          title: "Message Sent!",
          description: "Thank you for reaching out. I'll get back to you soon.",
          // Use default toast style which should adapt based on theme
        });
        form.reset();
      } else {
        toast({
          title: "Error",
          description: result.error || "Failed to send message. Please try again.",
          variant: "destructive", // Destructive variant for errors
        });
      }
    } catch (error) {
      console.error("Contact form submission error:", error);
      toast({
        title: "Error",
        description: "An unexpected error occurred. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    // Section now assumes a navy background from parent
    <section id="contact" className="py-16 md:py-24 lg:py-32">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-primary-foreground mb-12 md:mb-16">
        Get In Touch
      </h2>
      <div className="max-w-xl mx-auto">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem>
                    {/* Label text should be white on navy background */}
                    <FormLabel className="text-primary-foreground/80">First Name</FormLabel>
                    <FormControl>
                      {/* Input: White background, Navy text, Navy ring on focus */}
                      <Input
                        placeholder="John"
                        {...field}
                        className="bg-background text-foreground border-border focus:ring-primary"
                      />
                    </FormControl>
                    {/* Message styling should adapt, destructive variant handles error color */}
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem>
                     <FormLabel className="text-primary-foreground/80">Last Name</FormLabel>
                    <FormControl>
                       <Input
                        placeholder="Doe"
                        {...field}
                        className="bg-background text-foreground border-border focus:ring-primary"
                       />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                   <FormLabel className="text-primary-foreground/80">Email Address</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="john.doe@example.com"
                      {...field}
                      className="bg-background text-foreground border-border focus:ring-primary"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                   <FormLabel className="text-primary-foreground/80">Message</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Your message here..."
                      {...field}
                      rows={5}
                      className="bg-background text-foreground border-border focus:ring-primary"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="text-center pt-4">
              <Button
                type="submit"
                disabled={isSubmitting}
                // Button: White background, Navy text, Navy hover/focus
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 focus-visible:ring-primary transition-colors duration-200 w-full md:w-auto px-8 py-3"
               >
                 {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </section>
  );
}
