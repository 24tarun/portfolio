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
    // Reduced vertical padding
    <section id="contact" className="py-8 md:py-12">
      {/* Reduced heading size and margin */}
      <h2 className="text-2xl md:text-3xl font-bold text-center text-primary-foreground mb-6 md:mb-8">
        Get In Touch
      </h2>
      {/* Reduced max-width for smaller form */}
      <div className="max-w-md mx-auto">
        <Form {...form}>
          {/* Reduced form spacing */}
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4"> {/* Reduced gap */}
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-primary-foreground/80 text-sm">First Name</FormLabel> {/* Smaller label */}
                    <FormControl>
                      <Input
                        placeholder="John"
                        {...field}
                        className="bg-background text-foreground border-border focus:ring-primary text-sm" // Smaller text
                      />
                    </FormControl>
                    <FormMessage className="text-xs" /> {/* Smaller message */}
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem>
                     <FormLabel className="text-primary-foreground/80 text-sm">Last Name</FormLabel>
                    <FormControl>
                       <Input
                        placeholder="Doe"
                        {...field}
                        className="bg-background text-foreground border-border focus:ring-primary text-sm"
                       />
                    </FormControl>
                    <FormMessage className="text-xs" />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                   <FormLabel className="text-primary-foreground/80 text-sm">Email Address</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="john.doe@example.com"
                      {...field}
                      className="bg-background text-foreground border-border focus:ring-primary text-sm"
                    />
                  </FormControl>
                  <FormMessage className="text-xs" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                   <FormLabel className="text-primary-foreground/80 text-sm">Message</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Your message here..."
                      {...field}
                      rows={3} // Reduced rows
                      className="bg-background text-foreground border-border focus:ring-primary text-sm"
                    />
                  </FormControl>
                  <FormMessage className="text-xs" />
                </FormItem>
              )}
            />
            {/* Reduced button padding/size */}
            <div className="text-center pt-2">
              <Button
                type="submit"
                size="sm" // Smaller button size
                disabled={isSubmitting}
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 focus-visible:ring-primary transition-colors duration-200 w-full md:w-auto px-6 py-2" // Adjusted padding
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
