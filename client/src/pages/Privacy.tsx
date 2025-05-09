import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function Privacy() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow bg-[#F5F5F5] dark:bg-black py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-3xl md:text-4xl font-bold mb-8 text-primary dark:text-primary">Privacy Policy</h1>
          
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-sm p-8 dark:border dark:border-gray-800">
            <div className="prose dark:prose-invert max-w-none">
              <h2>1. Introduction</h2>
              <p>
                PotatoGuard ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website, mobile application, and services.
              </p>
              <p>
                Please read this Privacy Policy carefully. By accessing or using our services, you acknowledge that you have read and understood this Privacy Policy.
              </p>
              
              <h2>2. Information We Collect</h2>
              <h3>2.1 Information You Provide</h3>
              <p>We may collect information that you voluntarily provide when using our services, including:</p>
              <ul>
                <li>Account information (name, email address, password)</li>
                <li>Profile information</li>
                <li>Images of potato plants and crops</li>
                <li>Communication information (when you contact us)</li>
                <li>Survey responses and feedback</li>
              </ul>
              
              <h3>2.2 Automatically Collected Information</h3>
              <p>When you use our services, we may automatically collect certain information, including:</p>
              <ul>
                <li>Device information (device type, operating system, browser type)</li>
                <li>Usage information (how you interact with our services)</li>
                <li>IP address and location information</li>
                <li>Cookies and similar technologies</li>
              </ul>
              
              <h2>3. How We Use Your Information</h2>
              <p>We may use the information we collect for various purposes, including to:</p>
              <ul>
                <li>Provide, maintain, and improve our services</li>
                <li>Process and analyze uploaded images for disease identification</li>
                <li>Communicate with you about our services</li>
                <li>Personalize your experience</li>
                <li>Monitor and analyze usage patterns</li>
                <li>Protect our services and users</li>
                <li>Comply with legal obligations</li>
              </ul>
              
              <h2>4. Sharing Your Information</h2>
              <p>We may share your information in the following circumstances:</p>
              <ul>
                <li>With service providers who perform services on our behalf</li>
                <li>When required by law or to protect rights and safety</li>
                <li>In connection with a business transaction (merger, acquisition, etc.)</li>
                <li>With your consent or at your direction</li>
              </ul>
              <p>
                We do not sell your personal information to third parties.
              </p>
              
              <h2>5. Data Security</h2>
              <p>
                We implement appropriate technical and organizational measures to protect your information. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
              </p>
              
              <h2>6. Your Choices</h2>
              <p>You have certain choices regarding your information:</p>
              <ul>
                <li>Account Information: You can review and update your account information through your account settings</li>
                <li>Communications: You can opt out of receiving promotional emails</li>
                <li>Cookies: You can manage cookie preferences through your browser settings</li>
              </ul>
              
              <h2>7. Children's Privacy</h2>
              <p>
                Our services are not directed to children under 16. We do not knowingly collect personal information from children under 16. If you are a parent or guardian and believe your child has provided us with personal information, please contact us.
              </p>
              
              <h2>8. International Data Transfers</h2>
              <p>
                Your information may be transferred to and processed in countries other than your country of residence. These countries may have different data protection laws.
              </p>
              
              <h2>9. Changes to this Privacy Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. We will notify you of material changes by posting the updated Privacy Policy on our website. Your continued use of our services after such changes constitutes acceptance of the updated Privacy Policy.
              </p>
              
              <h2>10. Contact Us</h2>
              <p>
                If you have any questions or concerns about this Privacy Policy or our privacy practices, please contact us at privacy@potatoguard.com.
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