'use client';

import React, { useRef, FormEvent, useState } from 'react';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import emailjs from '@emailjs/browser';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Input } from '../ui/input';
import { Textarea } from '@/components/ui/textarea';
import MainButton from '../common/MainButton';
import Paragraph from '../common/Paragraph';
import { GrStatusGood, GrStatusWarning } from 'react-icons/gr';

interface EmailJSOptions {
  [key: string]: string | undefined;
}

function ContactUsSection() {
  const content =
    "Connect with Us: Let's Discuss Your Technology and Business Needs";

  const form = useRef<HTMLFormElement | null>(null);
  const { executeRecaptcha } = useGoogleReCaptcha();
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState<'success' | 'error' | ''>('');
  const [radioValue, setRadioValue] = useState('say_hi');

  const sendEmail = async (e: FormEvent) => {
    e.preventDefault();
    if (form.current && executeRecaptcha) {
      setIsLoading(true);
      try {
        const token = await executeRecaptcha('contact_form');
        const options: EmailJSOptions = {
          publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
          'g-recaptcha-response': token,
        };

        await emailjs.sendForm(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
          form.current,
          options
        );

        setMessage(
          'Your message was sent successfully! We will respond back as soon as you can. Thank you'
        );
        setMessageType('success');
        form.current.reset();
      } catch (error) {
        setMessage('Oops! Something went wrong.');
        setMessageType('error');
        console.log('FAILED...', error);
      } finally {
        setIsLoading(false);
        setTimeout(() => setMessage(''), 10000);
      }
    }
  };

  return (
    <section
      className="bg-accent flex justify-between w-full rounded-[45px] relative overflow-x-hidden mb-10"
      id="quote"
    >
      <form ref={form} onSubmit={sendEmail}>
        <div className="py-[60px] px-6 md:px-[50px] xl:pr-[500px]">
          <div className="flex flex-col md:flex-row gap-8 md:gap-[40px] 2xl:gap-[120px] items-center">
            <div className="px-4 py-3 bg-primary inline-block font-medium text-h2 rounded-md 2xl:text-5xl">
              Contact Us
            </div>
            <Paragraph
              className="text-p 2xl:text-2xl 2xl:mt-5"
              value={content}
            />
          </div>

          <div className="mt-[40px]">
            <div>
              <RadioGroup
                defaultValue="say_hi"
                className="flex"
                onValueChange={(value) => setRadioValue(value)}
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="say_hi" id="r1" />
                  <Label htmlFor="r1">Say Hi</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="get_a_quote" id="r2" />
                  <Label htmlFor="r2">Get a Quote</Label>
                </div>
              </RadioGroup>
            </div>

            <div className="mt-[25px]">
              <p className="pb-[5px]">Name*</p>
              <Input type="text" name="from_name" placeholder="Name" required />
            </div>

            <div className="mt-[25px]">
              <p className="pb-[5px]">Email*</p>
              <Input
                type="email"
                name="from_email"
                placeholder="Email"
                required
              />
            </div>

            <div className="mt-[25px]">
              <p className="pb-[5px]">Phone*</p>
              <Input
                type="tel"
                name="from_phone"
                placeholder="Phone"
                required
              />
            </div>

            <div className="mt-[25px]">
              <p className="pb-[5px]">Message*</p>
              <Textarea name="message" placeholder="Message" required />
            </div>

            <div className="mt-[25px]">
              <input type="hidden" name="radio_value" value={radioValue} />
            </div>
          </div>

          <div className="mt-[40px]">
            <MainButton
              text={isLoading ? 'Sending...' : 'Send Message'}
              classes="bg-secondary text-white text-[18px] w-full md:w-full hover:text-black"
              type="submit"
              isSubmitable={!isLoading}
              isLoading={isLoading}
            />
          </div>
          {message && (
            <div
              className={`mt-[20px] flex gap-2 text-xl ${
                messageType === 'success' ? 'text-green-500' : 'text-red-500'
              }`}
            >
              {messageType === 'success' ? (
                <GrStatusGood />
              ) : (
                <GrStatusWarning />
              )}
              {message}
            </div>
          )}
        </div>
        <div className="hidden xl:block absolute top-0 right-[-20rem]">
          <img src="/images/contact_illustration.png" alt="illustration" />
        </div>
      </form>
    </section>
  );
}

export default ContactUsSection;
