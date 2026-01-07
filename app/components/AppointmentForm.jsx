"use client";
Link;
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
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
import { useForm } from "react-hook-form";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import Link from "next/link";
const AppointmentForm = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [dateOpen, setDateOpen] = useState(false);

  const form = useForm({
    defaultValues: {
      name: "",
      email: "",
      number: "",
      date: null,
      message: "",
      time: null,
    },
    mode: "onTouched",
  });

  const onAppointmentSubmission = (data) => {
    localStorage.setItem("appointmentData", JSON.stringify(data));
    setDialogOpen(true);
  };

  return (
    <Form {...form}>
      <form
        className="w-full p-1.5 flex flex-col gap-2 "
        onSubmit={form.handleSubmit(onAppointmentSubmission)}
      >
        <FormField
          name="name"
          control={form.control}
          rules={{
            required: "Name is required",
            minLength: { value: 2, message: "Must be at least 2 characters" },
            maxLength: { value: 50, message: "Must be at most 50 characters" },
          }}
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor="name">
                <h3>Name</h3>
              </FormLabel>
              <FormControl>
                <Input
                  {...field}
                  id="name"
                  type="text"
                  placeholder="Your name"
                  autoComplete="name"
                />
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
              <FormLabel htmlFor="email">
                <h3>Email</h3>
              </FormLabel>
              <FormControl>
                <Input
                  {...field}
                  id="email"
                  type="email"
                  placeholder="Your email"
                  autoComplete="email"
                />
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
              <FormLabel htmlFor="number">
                <h3>Phone Number</h3>
              </FormLabel>
              <FormControl>
                <Input
                  {...field}
                  id="number"
                  type="tel"
                  placeholder="+44"
                  autoComplete="number"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          name="date"
          control={form.control}
          rules={{
            required: "Please select a date",
            validate: (value) =>
              (value && value.toDateString() >= new Date().toDateString()) ||
              "Date must be today or later",
          }}
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor="date-picker">
                <h3>Date</h3>
              </FormLabel>
              <FormControl>
                <Popover open={dateOpen} onOpenChange={setDateOpen}>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      id="date-picker"
                      className="w-48
                      justify-between font-normal"
                    >
                      {field.value
                        ? field.value.toLocaleDateString()
                        : "Select a Date"}

                      <ChevronDown aria-hidden="true" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent role="dialog" aria-label="Choose a date">
                    <Calendar
                      mode="single"
                      selected={field.value}
                      onSelect={(newDate) => {
                        field.onChange(newDate);
                        setDateOpen(false);
                      }}
                      className="rounded-md border shadow-sm"
                      captionLayout="dropdown"
                    />
                  </PopoverContent>
                </Popover>
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
              <FormLabel htmlFor="message">
                <h3>Message</h3>
              </FormLabel>
              <FormControl>
                <Textarea
                  {...field}
                  id="message"
                  placeholder="message"
                  autoComplete="off"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          name="time"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel id="time-label">
                <h3 className="text-left">
                  What is your prefered appointment time?
                </h3>
              </FormLabel>
              <FormControl>
                <RadioGroup
                  value={field.value}
                  onValueChange={field.onChange}
                  role="radiogroup"
                  aria-labelledby="time-label"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem id="time-10am" value="10am" />
                    <Label htmlFor="time-10am">10am</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem id="time-2pm" value="2pm" />
                    <Label htmlFor="time-2pm">2pm</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem id="time-6pm" value="6pm" />
                    <Label htmlFor="time-6pm">6pm</Label>
                  </div>
                </RadioGroup>
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
                Form submitted successfully
              </DialogTitle>
              <DialogDescription>
                Your appointment form has been submitted successfully. If you
                have any further questions please fill in our
                <Link href="/contact">
                  <span className="hover:text-[#005d8f]"> Contact Form</span>
                </Link>
                . We will get back to you as soon as we can.
              </DialogDescription>
            </DialogHeader>
            <DialogFooter className="flex flex-row justify-between">
              <Link href="/" className="hover:text-[#005d8f]">
                Back to Home
              </Link>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        <Button
          className="m-1"
          variant="destructive"
          size="lg"
          onClick={() => {
            form.reset();
            localStorage.removeItem("appointmentData");
          }}
        >
          Delete
        </Button>
      </form>
    </Form>
  );
};

export default AppointmentForm;
