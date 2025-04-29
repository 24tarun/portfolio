"use server";

import { z } from "zod";

// Define the schema for the contact form data, mirroring the client-side schema
const contactSchema = z.object({
  firstName: z.string().min(1).max(50),
  lastName: z.string().min(1).max(50),
  email: z.string().email(),
  message: z.string().min(10).max(500),
});

type ContactFormData = z.infer<typeof contactSchema>;

// Server action to process the contact form data
export async function sendContactMessage(
  formData: ContactFormData
): Promise<{ success: boolean; error?: string }> {
  // Validate the data on the server side
  const validatedFields = contactSchema.safeParse(formData);

  // If validation fails, return an error
  if (!validatedFields.success) {
    console.error("Server-side validation failed:", validatedFields.error.flatten().fieldErrors);
    return {
      success: false,
      error: "Invalid form data received. Please check your input.",
    };
  }

  // Sanitize input (basic example - might need more robust sanitization depending on use case)
  const { firstName, lastName, email, message } = validatedFields.data;
  const sanitizedFirstName = firstName.trim();
  const sanitizedLastName = lastName.trim();
  const sanitizedEmail = email.trim();
  const sanitizedMessage = message.trim(); // Basic trim, consider libraries like DOMPurify if rendering HTML

  // In a real application, you would process the data here:
  // - Send an email notification
  // - Save the message to a database
  // - Integrate with a CRM or support ticketing system

  console.log("Received contact form submission:");
  console.log("First Name:", sanitizedFirstName);
  console.log("Last Name:", sanitizedLastName);
  console.log("Email:", sanitizedEmail);
  console.log("Message:", sanitizedMessage);

  // Simulate processing delay (optional)
  // await new Promise(resolve => setTimeout(resolve, 1000));

  // For this example, we'll just log it and return success
  // Assume the operation was successful
  return { success: true };
}
