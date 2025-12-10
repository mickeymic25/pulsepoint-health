"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { Card } from "@/components/ui/card";

const ContactForm = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const form = useForm({
    defaultValues: { name: "", email: "", number: "", message: "" },
  });

  const onContactSubmission = (data) => {
    localStorage.setItem("contactFormData", JSON.stringify(data));
    setDialogOpen(true);
  };
  return (
    <Card className="flex flex-col md:flex-row p-0 ">
      <img
        className=" w-full h-full"
        src="/images/Dr Michelle.jpg"
        alt="Dr.Michelle Fuisilli"
      />

      <Form {...form}>
        <form
          className="w-full md: p-5 flex flex-col gap-2 md:m-8"
          onSubmit={form.handleSubmit(onContactSubmission)}
        >
          <FormField
            name="name"
            control={form.control}
            rules={{
              required: "Name is required",
              minLength: { value: 2, message: "Must be at least 2 characters" },
              maxLength: {
                value: 50,
                message: "Must be at most 50 characters",
              },
            }}
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  <h3>Name</h3>
                </FormLabel>
                <FormControl>
                  <Input {...field} placeholder="Your name" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name="email"
            control={form.control}
            rules={{
              required: "Email is required",
              pattern: {
                value: /^[^@\s]+@[^@\s]+\.[^@\s]+$/,
                message: "Enter a valid email",
              },
            }}
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  <h3>Email</h3>
                </FormLabel>
                <FormControl>
                  <Input {...field} type="email" placeholder="Your email" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name="number"
            control={form.control}
            rules={{
              required: "Phone number is required",
              pattern: {
                value: /^\+?[0-9\s\-]{7,15}$/,
                message: "Enter a valid phone number",
              },
            }}
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  <h3>Phone Number</h3>
                </FormLabel>
                <FormControl>
                  <Input {...field} type="tel" placeholder="+44" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name="message"
            control={form.control}
            rules={{
              required: "Message is required",
              minLength: {
                value: 5,
                message: "Message must be at least 5 characters",
              },
            }}
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  <h3>Message</h3>
                </FormLabel>
                <FormControl>
                  <Textarea {...field} placeholder="message" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button className="m-1" type="submit">
            Submit
          </Button>
          <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle className="text-center">
                  Contact Form submitted successfully
                </DialogTitle>
                <DialogDescription>
                  Thank you for filling in the contact form. We will get back to
                  you as soon as we can.
                </DialogDescription>
              </DialogHeader>
              <DialogFooter className="flex flex-row justify-between ">
                <Link href="/" className="hover:text-[#005d8f]">
                  Back to Home
                </Link>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </form>
      </Form>
    </Card>
  );
};

export default ContactForm;
