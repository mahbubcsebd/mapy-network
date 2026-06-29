import React from 'react';

export const metadata = {
  title: 'Privacy Policy | mPay Network',
  description: 'Privacy Policy and Notice for mPay Network members.',
};

export default function PrivacyPolicyPage() {
  return (
    <main className="flex flex-col min-h-screen pt-28 pb-20 relative overflow-hidden bg-slate-50 dark:bg-slate-900">
      {/* Decorative gradient blobs for modern look */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-blue-100 dark:bg-blue-900/20 rounded-full blur-[120px] opacity-50 pointer-events-none -z-10"></div>
      
      {/* Page Header */}
      <section className="py-12 md:py-16 px-6 bg-transparent text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-primary dark:text-blue-400 uppercase mb-4">
            Privacy Notice
          </h1>
        </div>
      </section>

      {/* Content Section - Designed to be reusable for Terms & Cookie pages */}
      <section className="px-4 md:px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white dark:bg-slate-800/80 border border-primary/20 dark:border-primary/30 rounded-2xl p-8 md:p-12 lg:p-16 shadow-xl shadow-primary/5">
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4 text-[15px] md:text-base">
                Your privacy is very important to mPay. As a member, you share all kinds of personal data with mPay. For example, when using your mPay card, when in contact with our customer service or when you make use of the E-Branch or Mobile application. Of course, there are many more instances where you share personal information with mPay. mPay does recognize that it is critical for you to be confident that your privacy is protected. Therefore we commit ourselves to maintain confidential the information entrusted to us except in cases where either you specifically have given permission to mPay to share your personal information to third parties and/or when the law allows or obligates mPay to do so.
              </p>
              
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4 text-[15px] md:text-base">
                This mPay Privacy Policy provides information on how mPay approaches processing of your personal data.
              </p>
              
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4 text-[15px] md:text-base">
                Personal data means any information relating to an identified or identifiable natural person; an identifiable natural person is one who can be identified, directly or indirectly. Information relating to a legal entity is not personal data, but information relating to a legal entity's director, ultimate beneficial owner, contact person or representative does count as personal data.
              </p>

              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6 text-[15px] md:text-base">
                Processing means any operation or set of operations which is performed on personal data or on sets of personal data, such as collection, recording, organizing, storing, adapting or altering, retrieving, consulting, using, disclosing by transmission, dissemination or otherwise making available, as well as combining, comparing, restricting, erasing or destruction of data, as indicated by law.
              </p>

              <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mt-8 mb-4">Personal information that mPay collects and processes therefore may include</h2>
              <ul className="list-disc pl-5 mb-6 space-y-2 text-slate-600 dark:text-slate-300 text-[15px] md:text-base">
                <li>Your name, address, telephone number, occupation or nature of your business and date of birth;</li>
                <li>Identification, such as a valid driver's license, ID-card or passport. mPay may also ask for documents such as a recent utility bill to verify your name and address;</li>
                <li>Information about beneficial owners, intermediaries and other parties;</li>
                <li>Your annual income, assets and liabilities and credit history;</li>
                <li>Information about your transactions, including payment history, account activity and how you intend to use the account or service and the source of any incoming funds or assets;</li>
                <li>Information about third parties such as your spouse if you are applying for certain services.</li>
              </ul>

              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6 text-[15px] md:text-base">
                In addition, mPay offers mobile applications or services that use information about your location. If you choose to use such applications or services, mPay may, if the settings on your mobile device allow this, collect information about your location (for example, GPS signals) to provide you with the services you request.
              </p>

              <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mt-8 mb-4">Purpose of Data Collection</h2>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-2 text-[15px] md:text-base">mPay may collect your personal information for the following purposes:</p>
              <ul className="list-disc pl-5 mb-6 space-y-2 text-slate-600 dark:text-slate-300 text-[15px] md:text-base">
                <li>To confirm your identity and other personal information;</li>
                <li>To set up, manage and offer services that you requested;</li>
                <li>To satisfy legal and regulatory requirements;</li>
                <li>To ensure the normal operation of mPay;</li>
                <li>To help mPay collect a debt or enforce an obligation owed to us by you;</li>
                <li>To respond to a local or foreign court order, search warrant or other demand or request by legal authorities, or to comply with the rules of production of a local or foreign court;</li>
                <li>To investigate and adjudicate claims or complaints;</li>
                <li>To prevent or detect fraud or criminal activity or to manage and settle any actual or potential loss in connection with fraud or criminal activity.</li>
              </ul>

              <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mt-8 mb-4">Marketing</h2>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6 text-[15px] md:text-base">mPay may tailor its website and/or marketing material to you on the basis of your personal information.</p>

              <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mt-8 mb-4">Third Parties</h2>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-2 text-[15px] md:text-base">For the purposes described in this Policy mPay may share your personal data within all mPay cooperatives in the USA.</p>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-2 text-[15px] md:text-base">mPay may also share your personal data with third parties. This may include, but is not limited to:</p>
              <ul className="list-disc pl-5 mb-6 space-y-2 text-slate-600 dark:text-slate-300 text-[15px] md:text-base">
                <li>Third parties relevant to the services that mPay provides;</li>
                <li>Third parties that mPay engages with in order to comply with legal and regulatory obligations;</li>
                <li>Third party suppliers in connection with the processing of your personal data for the purposes described in this Policy, such as IT providers, communication service providers or other suppliers to whom mPay outsources certain support services.</li>
                <li>Third parties insofar the processing of your personal data is necessary to ensure normal operations of mPay.</li>
              </ul>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6 text-[15px] md:text-base">Third parties to whom we transfer your personal data are themselves responsible for compliance with privacy legislation. mPay is neither responsible nor liable for the processing of your personal data by these third parties.</p>

              <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mt-8 mb-4">Retention of your Personal Data</h2>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6 text-[15px] md:text-base">mPay may keep and use information about you in its records for such period of time needed to achieve the goals described in this Policy or to comply with applicable legislation and regulations.</p>

              <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mt-8 mb-4">Data Security</h2>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4 text-[15px] md:text-base">mPay will collect and process data using suitable technical or organizational measures, in a manner that ensures appropriate security of personal information, including protection against unauthorized or unlawful processing (e.g. such as against malicious hackers) and against accidental loss, destruction and/or damage.</p>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4 text-[15px] md:text-base">You are at all times responsible for ensuring the security of your account access information. By providing third parties access to your account information, you assume all liability for any transactions initiated on your account and/or your associated personal data.</p>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6 text-[15px] md:text-base">In the unlikely event of a data breach causing high risk to personal information of customers, mPay will where required notify the affected customers without undue delay.</p>

              <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mt-8 mb-4">Your rights as a member of mPay</h2>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-2 text-[15px] md:text-base">When your personal data is collected and processed, you have the all the rights as indicated by law. As an example some of these rights are as follows:</p>
              <ul className="list-disc pl-5 mb-6 space-y-2 text-slate-600 dark:text-slate-300 text-[15px] md:text-base">
                <li>You have the right to be informed at your request about the collection and use of your personal data;</li>
                <li>You have the right to access and obtain copies of your personal information kept in our files;</li>
                <li>You may at any time challenge the accuracy and completeness of your personal information and request that it be amended as appropriate;</li>
                <li>You have the right to request removal of your personal data if this data is incorrect, serves no reasonable purpose or is no longer relevant;</li>
                <li>You have the right to withdraw your given consent for the collection of specific personal data. You can do by sending an email to our Member Service Center at info@mpay.cw;</li>
                <li>You have the right to request the reason(s) why your personal data is processed in a certain manner by mPay;</li>
                <li>You may ask us to refrain from sending you tailored marketing communications.</li>
              </ul>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6 text-[15px] md:text-base">Please note that the above rights are not under all circumstances absolute. There may be instances in which mPay may be entitled to refuse requests in order to meet its legal and/or regulatory obligations.</p>

              <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mt-8 mb-4">Cookies</h2>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6 text-[15px] md:text-base">This site uses different types of cookies including cookies for the operation of this site. Cookies are small text files that can be used by websites to make a user's experience more efficient. For certain types of cookies we need your permission. Some cookies are placed by third party services that appear on our pages. You can at any time change or withdraw your consent from the Cookie Declaration on our website. Please refer to the mPay Cookie Policy published on the website of mPay.</p>

              <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mt-8 mb-4">Further information</h2>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4 text-[15px] md:text-base">mPay may amend this Policy from time to time to take into consideration changes in legislation, technology or other issues that may arise. We will post the revised Policy on our website, make it available at our branches or we may also send it to you by mail. Should the changes to the Policy be significant, we will provide you with a prominent notice in writing.</p>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6 text-[15px] md:text-base">If you have a question or complaint about our Privacy Policy or about the processing of your personal information or if you wish to receive an overview thereof, please feel free to contact us at info@mpay.cw or by calling our Member Service Center at 599 (9) 4347100.</p>

          </div>
        </div>
      </section>
    </main>
  );
}
