import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { z } from "zod";

const contactFormSchema = z.object({
  name: z.string().min(2),
  phone: z.string().min(10),
  email: z.string().email(),
  service: z.string().optional(),
  message: z.string().min(10),
});

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const data = contactFormSchema.parse(req.body);
      
      // In a real implementation, we would store the contact form data
      // or send an email with the form data
      // For now, we'll just return a success response
      
      res.status(200).json({ 
        message: "Contact form submitted successfully",
        success: true
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          message: "Invalid form data", 
          errors: error.errors,
          success: false
        });
      } else {
        res.status(500).json({ 
          message: "Failed to submit contact form", 
          success: false
        });
      }
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
