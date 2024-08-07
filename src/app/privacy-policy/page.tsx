import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | 6pm",
  description:
    "6pm is your AI financial assistant that helps you manage your expenses and budgets. With 6pm, you can easily track your expenses, set financial goals, and get personalized insights to help you make better financial decisions.",
};

export default function PrivacyPolicy() {
  return (
    <div className="px-6 py-32 animate-in fade-in duration-300 prose prose-zinc dark:prose-invert container mx-auto">
      <h1 className="text-center">Privacy Policy</h1>
      <p className="text-center text-muted-foreground">Last updated: 7/8/2024</p>
      <p>
        Hey there! Thanks for using 6pm. Here's the lowdown on what data we collect, how we use it, and how we keep it safe. We aim to be as transparent as possible, so let's dive in!
      </p>
      
      <h2>What Info We Collect</h2>
      <p>
        To get you up and running, we collect some basic information:
      </p>
      <ul>
        <li>Email address</li>
        <li>Profile picture</li>
      </ul>
      
      <h2>How We Use Your Info</h2>
      <p>
        We use the collected info to make sure everything runs smoothly. Here's how:
      </p>
      <ul>
        <li>Your email and avatar help us authenticate and identify you.</li>
        <li>We share your user identity with Sentry for crash reporting and with Posthog for product analytics. This helps us make the app better for you and everyone else.</li>
      </ul>
      
      <h2>No Sharing of Transaction Records</h2>
      <p>
        Rest assured, your transaction records stay with us. We don't share them with any third-party services.
      </p>
      
      <h2>Future Plans: End-to-End Encryption</h2>
      <p>
        We're all about keeping your data secure. We're planning to implement end-to-end encryption soon to make sure your information is even safer.
      </p>
      
      <h2>Data Security</h2>
      <p>
        We take data security seriously and use various measures to protect your info. However, keep in mind that no method of transmission over the Internet or electronic storage is 100% secure. But we're doing our best!
      </p>
      
      <h2>Contact Us</h2>
      <p>
        Got any questions or concerns? Feel free to reach out to us at:
      </p>
      <p>Email: <a href="mailto:bkdev98@gmail.com">bkdev98@gmail.com</a></p>
    </div>
  );
};
