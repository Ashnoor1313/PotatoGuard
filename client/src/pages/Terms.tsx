import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function Terms() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow bg-[#F5F5F5] dark:bg-black py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-3xl md:text-4xl font-bold mb-8 text-primary dark:text-primary">Terms of Service</h1>
          
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-sm p-8 dark:border dark:border-gray-800">
            <div className="prose dark:prose-invert max-w-none">
              <h2>1. Introduction</h2>
              <p>
                Welcome to PotatoGuard. By accessing or using our website, mobile application, and services, you agree to be bound by these Terms of Service. Please read them carefully.
              </p>
              
              <h2>2. Use of Services</h2>
              <p>
                PotatoGuard provides a platform for potato disease identification and management information. Our services are designed to assist farmers and agricultural professionals but should not replace professional agricultural advice.
              </p>
              <p>
                You agree to use our services only for lawful purposes and in accordance with these Terms. You may not:
              </p>
              <ul>
                <li>Use our services in any way that violates applicable laws or regulations</li>
                <li>Attempt to interfere with or disrupt our services or servers</li>
                <li>Reproduce, duplicate, copy, sell, or resell any portion of our services without express permission</li>
                <li>Access or use our services through automated means (such as bots or scrapers) without our prior consent</li>
              </ul>

              <h2>3. User Accounts</h2>
              <p>
                Some features of our services may require registration and account creation. You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account.
              </p>
              <p>
                You agree to provide accurate and complete information when creating an account and to promptly update your account information as necessary.
              </p>

              <h2>4. Intellectual Property</h2>
              <p>
                The content, organization, graphics, design, and other matters related to our services are protected by applicable intellectual property rights. All rights not expressly granted herein are reserved.
              </p>
              <p>
                PotatoGuard and its licensors retain ownership of all intellectual property rights related to our services, including software, images, text, and designs.
              </p>

              <h2>5. User Content</h2>
              <p>
                By uploading images or providing other content through our services, you grant PotatoGuard a non-exclusive, worldwide, royalty-free license to use, reproduce, adapt, and publish that content for the purpose of providing and improving our services.
              </p>
              <p>
                You represent and warrant that you own or have the necessary rights to share any content you provide through our services, and that your content does not infringe or violate the rights of any third party.
              </p>

              <h2>6. Disclaimer of Warranties</h2>
              <p>
                Our services are provided "as is" and "as available" without any warranties of any kind, either express or implied.
              </p>
              <p>
                PotatoGuard does not warrant that our services will be uninterrupted, secure, or error-free, or that any information, including plant disease identification, is accurate or reliable.
              </p>

              <h2>7. Limitation of Liability</h2>
              <p>
                To the fullest extent permitted by law, PotatoGuard shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly.
              </p>

              <h2>8. Changes to Terms</h2>
              <p>
                We may modify these Terms at any time. We will notify users of material changes by posting the updated Terms on our website. Your continued use of our services after such changes constitutes acceptance of the updated Terms.
              </p>

              <h2>9. Governing Law</h2>
              <p>
                These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which PotatoGuard is established, without regard to its conflict of law provisions.
              </p>

              <h2>10. Contact Information</h2>
              <p>
                If you have any questions about these Terms, please contact us at terms@potatoguard.com.
              </p>
              
              <p className="mt-8">Last Updated: May 9, 2025</p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}