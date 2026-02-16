"use client";

import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";
import { Send } from "lucide-react";

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    // Simulate API call
    console.log("Form Data:", data);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSuccess(true);
    reset();
    setTimeout(() => setIsSuccess(false), 5000);
  };

  return (
    <Card className="shadow-lg border-2">
      <CardContent className="pt-6">
        {isSuccess ? (
          <div className="py-12 text-center space-y-4 animate-in fade-in zoom-in duration-500">
            <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
              <Send className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold">Message Sent!</h3>
            <p className="text-muted-foreground">
              Thank you for reaching out. We&apos;ll get back to you as soon as possible.
            </p>
            <Button variant="outline" onClick={() => setIsSuccess(false)}>
              Send another message
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid gap-2">
              <Label htmlFor="name">Your Name</Label>
              <Input
                id="name"
                placeholder="Enter your full name"
                {...register("name", { required: "Name is required" })}
                className={errors.name ? "border-destructive focus-visible:ring-destructive" : ""}
              />
              {errors.name && <span className="text-xs text-destructive">{errors.name.message}</span>}
            </div>

            <div className="grid gap-2">
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                type="email"
                placeholder="name@example.com"
                {...register("email", { 
                  required: "Email is required",
                  pattern: { value: /^\S+@\S+$/i, message: "Invalid email address" }
                })}
                className={errors.email ? "border-destructive focus-visible:ring-destructive" : ""}
              />
              {errors.email && <span className="text-xs text-destructive">{errors.email.message}</span>}
            </div>

            <div className="grid gap-2">
              <Label htmlFor="subject">Subject</Label>
              <Input
                id="subject"
                placeholder="What is this about?"
                {...register("subject", { required: "Subject is required" })}
                className={errors.subject ? "border-destructive focus-visible:ring-destructive" : ""}
              />
              {errors.subject && <span className="text-xs text-destructive">{errors.subject.message}</span>}
            </div>

            <div className="grid gap-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                placeholder="Type your message here..."
                rows={5}
                {...register("message", { required: "Message is required" })}
                className={errors.message ? "border-destructive focus-visible:ring-destructive" : ""}
              />
              {errors.message && <span className="text-xs text-destructive">{errors.message.message}</span>}
            </div>

            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
          </form>
        )}
      </CardContent>
    </Card>
  );
};

export default ContactForm;
