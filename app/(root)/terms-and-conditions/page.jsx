import React from 'react';

export const metadata = {
  title: 'Terms & Conditions | mPay Network',
  description: 'Terms and Conditions for mPay Network members.',
};

export default function TermsAndConditionsPage() {
  return (
    <main className="flex flex-col min-h-screen pt-28 pb-20 relative overflow-hidden bg-slate-50 dark:bg-slate-900">
      {/* Decorative gradient blobs for modern look */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-blue-100 dark:bg-blue-900/20 rounded-full blur-[120px] opacity-50 pointer-events-none -z-10"></div>
      
      {/* Page Header */}
      <section className="py-12 md:py-16 px-6 bg-transparent text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-primary dark:text-blue-400 uppercase mb-4">
            Terms & Conditions
          </h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="px-4 md:px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white dark:bg-slate-800/80 border border-primary/20 dark:border-primary/30 rounded-2xl p-8 md:p-12 lg:p-16 shadow-xl shadow-primary/5">
            <div className="max-w-none">
              
              {/* ENGLISH SECTION */}
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white mt-0 mb-8 uppercase tracking-tight border-b pb-4 border-slate-200 dark:border-slate-700">
                USER AGREEMENT (INDIVIDUAL)
              </h2>

              <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mt-8 mb-4 uppercase">
                Article 1. PURPOSE OF THE AGREEMENT:
              </h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4 text-[15px] md:text-base">
                The MPay Wallet (hereinafter, "MPAYNETWORK"), as part of its attributions, makes available to its individual customers, holders of individual accounts or joint accounts opened in their books, (hereinafter, "the USER"), internet access, (hereinafter, the MPay Wallet service) allowing them to carry out various digital wallet transactions, in particular:
              </p>
              <ul className="list-disc pl-5 mb-4 space-y-2 text-slate-600 dark:text-slate-300 text-[15px] md:text-base">
                <li>mPay Wallet registration</li>
                <li>Scan QR of Merchant Stores</li>
                <li>Wallet fund transfer to another mPay Users</li>
                <li>Payment and Mobile Top-Up</li>
                <li>Send money to Email or Phone Number</li>
              </ul>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4 text-[15px] md:text-base">
                This agreement defines the terms and conditions of access and operation of the online service.
              </p>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-8 text-[15px] md:text-base">
                For greater certainty, all of the Bank's agreements previously signed by the user will continue to apply.
              </p>

              <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mt-8 mb-4 uppercase">
                Article 2.- REGISTRATION FOR THE SERVICE
              </h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4 text-[15px] md:text-base">
                Any natural or legal person, legally capable, holder of an individual account or joint account opened in the books of MPAYNETWORK, of a credit, debit or prepaid card, denominated in HTG or USD will be able to benefit from all the online services offered by MPAYNETWORK as they become available.
              </p>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-8 text-[15px] md:text-base">
                During the registration process and before final acceptance, the customer will have access to all accounts.
              </p>

              <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mt-8 mb-4 uppercase">
                Article 3.- METHODS OF IDENTIFICATION
              </h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4 text-[15px] md:text-base">
                Access to the service is dependent on an access code consisting of a username and password chosen by the cardholder.<br/>
                As the password is confidential, the user will take all measures to ensure its conservation and security, by not communicating it to third parties. Therefore, any operation initiated from the username is presumed to be from the user himself.<br/>
                In the case of a joint or collective account, access to the service is granted to all co-holders, agents or co-signatories of the account. However, the latter are jointly and severally obliged to strictly comply with the online banking agreement as established by the bank and to comply with its terms.
              </p>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4 text-[15px] md:text-base">
                "Users" means any natural person to whom MPAYNETWORK gives access to accounts domiciled at his or her premises from online banking services.
              </p>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4 text-[15px] md:text-base">
                ''Security PIN or OTP'' means a one-time security code sent to the customer to authorize certain types of electronic transactions.
              </p>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-8 text-[15px] md:text-base">
                "Confirmation Number" means the number provided to the Customer by MPAYNETWORK to confirm the execution of an electronic transaction. This number may be used by the customer for follow-up or complaint purposes.
              </p>

              <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mt-8 mb-4 uppercase">
                Article 4.- ADDITION OF ACCOUNTS
              </h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-8 text-[15px] md:text-base">
                If the customer is already a member, any new account will be automatically included in his or her assets. If the latter does not wish to do so, he will contact the department concerned, which will take it into account.
              </p>

              <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mt-8 mb-4 uppercase">
                Article 5.- RIGHTS AND OBLIGATIONS OF MPAYNETWORKONLINE
              </h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4 text-[15px] md:text-base">
                MPAYNETWORK ensures the proper execution of the orders received and the confidentiality of the personal information collected as part of the service. It undertakes not to disclose or transmit it except in the event of management of this information or within the framework of legal and regulatory obligations. In this respect, it reminds the user that, except in cases where the law provides for it, professional secrecy cannot be invoked against MPAYNETWORK or the judicial authority acting in the context of criminal proceedings.
              </p>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4 text-[15px] md:text-base">
                In order to ensure optimal security for its subscribers, MPAYNETWORK undertakes to never communicate, even if the request seems to come from the online service, the password by telephone.
              </p>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-8 text-[15px] md:text-base">
                MPAYNETWORKONLINE undertakes to implement and make all possible efforts on a technical level to ensure the proper functioning of the online services, as well as the confidentiality of the information communicated. It may also, without prior notice, block the connection in the event of a fraudulent maneuver or interrupt the service without having to justify itself or be held responsible for the consequences that would result.
              </p>

              <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mt-8 mb-4 uppercase">
                Article 6.- Rights of the USER
              </h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4 text-[15px] md:text-base">
                The User, within the framework of thisAgreement, undertakes to:
              </p>
              <ul className="list-disc pl-5 mb-8 space-y-2 text-slate-600 dark:text-slate-300 text-[15px] md:text-base">
                <li>Provide MPAYNETWORK with any personal information required for the purposes of its identification and the creation of its file;</li>
                <li>Do not communicate your password to third parties;</li>
                <li>Change your password yourself in the event that it is accessible by third parties;</li>
                <li>Assume any loss and/or pecuniary consequences resulting from the use of his/her access code as a result of his/her negligence;</li>
                <li>Verify the transactions made on his/her account(s) and notify the bank of any related errors;</li>
                <li>Not to use the infrastructure and system made available to them by MPAYNETWORK in a manner contrary to this agreement, in a fraudulent or illegal manner and/or in a manner detrimental to the security and efficiency of the Service;</li>
                <li>Not to carry out any illicit transactions using this service;</li>
                <li>The company and its designated users jointly and severally undertake not to use the services in violation of the instructions issued by MPAYNETWORK, in a fraudulent or illegal manner and/or in a manner detrimental to the security and efficiency of said service. It also undertakes not to carry out, from this site, any illicit transaction that could harm the MPAYNETWORK site and/or third parties.</li>
              </ul>

              <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mt-8 mb-4 uppercase">
                Article 7.- LIMITATION OF LIABILITY
              </h3>
              <ul className="list-disc pl-5 mb-4 space-y-2 text-slate-600 dark:text-slate-300 text-[15px] md:text-base">
                <li>MPAYNETWORKONLINE uses high-performance security tools, but it cannot guarantee the total security of the data transmitted on the online services;</li>
                <li>It cannot be held liable when the non-performance of its obligations results from elements beyond its control;</li>
                <li>Nor can it be held liable in the event of fraudulent access to the customer's information by means of messages from third parties usurping the identity of the bank;</li>
                <li>MPAYNETWORKOnline does not guarantee the operational security of telecom networks. It cannot, therefore, be held liable with regard to the transport of information or the consequences resulting from a lack of security or reliability of the connection terminal used by the customer;</li>
                <li>Nor can MPAYNETWORKOnline assume the consequences that would result from a transmission or handling error on the part of the customer.</li>
              </ul>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4 text-[15px] md:text-base">
                In the event of any discrepancy between the information appearing on the site and that recorded on the bank statement, the parties expressly agree that the latter shall prevail.<br/>
                Transactions made by MPAYNETWORKOnline will automatically obtain an internal reference number. Each transaction carried out will be kept by the Bank in electronic format. If necessary, the recording will serve as proof.<br/>
                Transactions will be executed subject to the available balance of the account and the User's other commitments to MPAYNETWORK. All transactions made via MPAYNETWORKOnline or MaMPAYNETWORK will be recorded according to the banking and financial standards of imputation.
              </p>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-8 text-[15px] md:text-base">
                Any transaction initiated online requiring follow-up in branch such as: bank certificates, delivery of executive checks, checkbook delivery, etc. will be available at the location of the customer's choice within one (1) business day (weekdays).
              </p>

              <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mt-8 mb-4 uppercase">
                Article 8.- USE OF THE SERVICE
              </h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4 text-[15px] md:text-base">
                Membership of MPAYNETWORK online services allows the user to consult all the accounts attached to his assets.
              </p>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4 text-[15px] md:text-base">
                MPAYNETWORKOnline offers the user who accepts it, a service allowing him to access his assets remotely and to carry out the various banking transactions listed in Article 1 through the Internet.
              </p>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-8 text-[15px] md:text-base">
                The user who subscribes to the MPAYNETWORKOnline service expressly acknowledges that he or she has read all the information on the content of the service, its characteristics, its availability and its operating methods.
              </p>

              <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mt-8 mb-4 uppercase">
                Article 9 - DURATION AND TERMINATION OF THE CONTRACT
              </h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4 text-[15px] md:text-base">
                Membership of the Online Service is concluded for a full period of one (1) year, renewable by tacit agreement, unless otherwise specified by one of the two parties. It will come into force from the date of confirmation of the acceptance by the Administration of the MPAYNETWORKOnline of the Company's membership.
              </p>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4 text-[15px] md:text-base">
                The user who does not wish to renew this agreement shall notify the MPAYNETWORKOnline Administration by letter with acknowledgement of receipt at least one (1) month before its expiry date
              </p>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-8 text-[15px] md:text-base">
                Termination of the membership contract will result in the automatic interruption of the MPAYNETWORKOnline service. In this case, the customer will no longer be able to consult his assets or carry out transactions online.
              </p>

              <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mt-8 mb-4 uppercase">
                Article 10 - MODIFICATION OF THE SERVICE
              </h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-8 text-[15px] md:text-base">
                In view of technological developments and possible improvements to the service, MPAYNETWORKOnline reserves the right to change the scope of the services offered online at any time and to make appropriate changes to the conditions of this agreement. The customer will be notified prior to the effective date.
              </p>

              <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mt-8 mb-4 uppercase">
                Article 11: COMPLAINT:
              </h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4 text-[15px] md:text-base">
                The fact that MPAYNETWORK refrains from claiming or belatedly claiming the application of any of the clauses contained in this agreement does not imply any waiver of its rights or acquiescence.
              </p>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-8 text-[15px] md:text-base">
                Any complaint must then be made within the deadline, by registered letter with acknowledgement of receipt addressed to the MPAYNETWORKOnline Administration.
              </p>

              <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mt-8 mb-4 uppercase">
                Article 12: TERMINATION:
              </h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4 text-[15px] md:text-base">
                MPAYNETWORK may terminate this agreement in the following cases:
              </p>
              <ul className="list-disc pl-5 mb-8 space-y-2 text-slate-600 dark:text-slate-300 text-[15px] md:text-base">
                <li>Death of the USER;</li>
                <li>Fraudulent use of the Service by the USER;</li>
                <li>Failure by the USER to comply with its obligations, as defined by this agreement;</li>
                <li>Upon formal request of the customer;</li>
                <li>In any other case deemed necessary by the Bank.</li>
              </ul>

              <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mt-8 mb-4 uppercase">
                Article 13: DISPUTES AND GENERAL PROVISIONS:
              </h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4 text-[15px] md:text-base">
                The parties undertake to perform the clauses of this contract in good faith. In the event of a dispute relating to a banking transaction carried out from the Service, the USER agrees to contact a representative of MPAYNETWORK in order to resolve the dispute amicably. To this end, the USER undertakes to cooperate with MPAYNETWORK by providing it with any information, document, data that may advance the investigation that will be carried out by the ad hoc services of MPAYNETWORK. In the event of failure by amicable means, the dispute will be submitted to the competent jurisdiction of the Haitian courts.
              </p>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4 text-[15px] md:text-base">
                For anything that has not been the subject of a special clause, the parties agree to refer to the legal provisions in force of the Republic of Haiti governing the matter.
              </p>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-8 text-[15px] md:text-base">
                It is understood that the terms and conditions of other agreements and/or contracts concluded between the USER and MPAYNETWORK remain enforceable.
              </p>

              <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mt-8 mb-4 uppercase">
                PRICING
              </h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4 text-[15px] md:text-base">
                The services offered and their terms of performance remain subject to the rates and conditions in force on the date of their implementation, subject to revision at any time by MPAYNETWORK. In the event of a review by the Bank, a new service pricing brochure will be posted. The client will be notified of any change in rates by consulting the Bank's website, which is available for this purpose. Thus, he undertakes to keep himself informed of these revisions.<br/>
                In the absence of a protest from the customer, by letter with acknowledgement of receipt to request the deactivation of his profile from online banking, the expiry of the period of one (1) month from the date of publication is equivalent to his approval of the new pricing.
              </p>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-8 text-[15px] md:text-base">
                Transfers to a third party made via MPAYNETWORKOnline are limited to a maximum amount set by MPAYNETWORK according to its internal regulations. However, this amount varies depending on the type of user and the currency used.
              </p>

              <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mt-8 mb-4 uppercase">
                SECURITY
              </h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4 text-[15px] md:text-base">
                Personal codes (username, password, OTP or security PIN) are strictly confidential. It is therefore the responsibility of the user to keep them secret and not to communicate them to anyone. If the password is forgotten or lost, the user can reset it online from the site.
              </p>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-12 text-[15px] md:text-base">
                Therefore, in the event of hacking or fraudulent use of the credentials, the user undertakes to inform MPAYNETWORK without delay. The Bank is not responsible for any transactions made prior to the date of receipt of this notification by MPAYNETWORK.
              </p>


              {/* FRENCH SECTION */}
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white mt-12 mb-8 uppercase tracking-tight border-b pb-4 border-slate-200 dark:border-slate-700">
                CONVENTION D’UTILISATION (PARTICULIER)
              </h2>

              <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mt-8 mb-4 uppercase">
                Article 1.- OBJET DE LA CONVENTION:
              </h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4 text-[15px] md:text-base">
                La MPay Wallet (ci-après, «MPAYNETWORK»), dans le cadre de ses attributions, met à la disposition de sa clientèle de particulier, titulaire de compte individuel ou de compte joint ouvert dans ses livres, (ci-après, «l’UTILISATEUR»), un accès par internet, (ci-après, le service MPAYNETWORKONLINE) lui permettant d’effectuer diverses transactions bancaires en ligne, notamment :
              </p>
              <ul className="list-disc pl-5 mb-4 space-y-2 text-slate-600 dark:text-slate-300 text-[15px] md:text-base">
                <li>Enregistrement du portefeuille mPay</li>
                <li>Scanner le QR des magasins marchands</li>
                <li>Transfert de fonds du portefeuille vers un autre utilisateur mPay</li>
                <li>Paiement et recharge mobile</li>
                <li>Envoyer de l’argent à un courriel ou à un numéro de téléphone</li>
              </ul>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4 text-[15px] md:text-base">
                La présente convention définit les modalités d’accès et de fonctionnement du service en ligne.
              </p>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-8 text-[15px] md:text-base">
                Il demeure entendu que toutes les conventions de la Banque préalablement signées par l’utilisateur continueront à s’appliquer.
              </p>

              <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mt-8 mb-4 uppercase">
                Article 2.- INSCRIPTION AU SERVICE
              </h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4 text-[15px] md:text-base">
                Toute personne physique ou morale, juridiquement capable, titulaire de compte individuel ou de compte joint ouvert dans les livres de la MPAYNETWORK, d’une carte de crédit, de débit ou prépayée, libellé en HTG ou en USD pourra bénéficier de tous les services en ligne proposés par la MPAYNETWORK au fur et à mesure de leur mise à disposition.
              </p>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-8 text-[15px] md:text-base">
                Au cours du processus d’inscription et avant acceptation définitive, le client aura accès à tous les comptes.
              </p>

              <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mt-8 mb-4 uppercase">
                Article 3.- MODALITES D’IDENTIFICATION
              </h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4 text-[15px] md:text-base">
                L’accès au service est tributaire d’un code d’accès composé d’un nom d’utilisateur et d’un mot de passe choisis par le titulaire.<br/>
                Le mot de passe ayant un caractère confidentiel, l’utilisateur prendra toutes les dispositions pour assurer sa conservation et sa sécurité, en ne la communiquant pas à des tiers. Par conséquent, toute opération initiée à partir du nom d’utilisateur est présumée émaner de l’utilisateur lui-même.<br/>
                En cas de compte joint ou collectif, l’accès au service est permis à tous les co-titulaires, mandataires ou cosignataires du compte. Ces derniers étant toutefois solidairement obligés au strict respect de la convention d’utilisation de services bancaires en ligne telle qu’établie par la banque et à en respecter les termes.
              </p>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4 text-[15px] md:text-base">
                ‘’Utilisateurs’’ désigne toute personne physique à qui la MPAYNETWORK donne accès aux comptes domiciliés chez elle à partir des services bancaires en ligne.
              </p>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4 text-[15px] md:text-base">
                ‘’PIN de sécurité ou OTP’’ désigne un code de sécurité à utilisation unique envoyé au client pour autoriser certains types de transactions électroniques.
              </p>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-8 text-[15px] md:text-base">
                ‘’Numéro de confirmation’’ désigne le numéro fourni au client par la MPAYNETWORK pour lui confirmer l’exécution d’une transaction électronique. Ce numéro pourra être utilisé par le client à des fins de suivi ou de réclamation.
              </p>

              <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mt-8 mb-4 uppercase">
                Article 4.- AJOUT DE COMPTES
              </h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-8 text-[15px] md:text-base">
                Si le client est déjà adhérent, tout nouveau compte sera inclus automatiquement dans son patrimoine. Dans le cas où celui-ci ne le souhaite pas, il s’adressera au service concerné qui en tiendra compte.
              </p>

              <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mt-8 mb-4 uppercase">
                Article 5.- DROITS ET OBLIGATIONS DE MPAYNETWORKONLINE
              </h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4 text-[15px] md:text-base">
                La MPAYNETWORK veille à la bonne exécution des ordres reçus et à la confidentialité des informations nominatives recueillies dans le cadre du service. Elle s’engage à ne pas les divulguer, ni à les transmettre sauf en cas de gestion de ces informations ou dans le cadre d’obligations légales et réglementaires. A ce titre, elle rappelle à l’utilisateur, que sauf dans les cas où la loi le prévoit, le secret professionnel ne peut être opposé ni à la MPAYNETWORK, ni à l’autorité judiciaire agissant dans le cadre d’une procédure pénale.
              </p>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4 text-[15px] md:text-base">
                Afin d’assurer une sécurité optimale à ses abonnés la MPAYNETWORK s’engage à ne jamais communiquer, y compris si la demande semble émaner du service en ligne le mot de passe par téléphone.
              </p>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-8 text-[15px] md:text-base">
                La MPAYNETWORKONLINE s’engage à mettre en œuvre et à fournir tous les efforts possibles sur le plan technique afin d’assurer le bon fonctionnement des services en ligne, ainsi que la confidentialité des informations communiquées. Elle peut également et sans préavis, bloquer la connexion en cas de manœuvre frauduleuse ou interrompre le service sans avoir à se justifier, ni être tenue pour responsable des conséquences qui en découleraient.
              </p>

              <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mt-8 mb-4 uppercase">
                Article 6.- Droits de L’UTILISATEUR
              </h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4 text-[15px] md:text-base">
                L’utilisateur, dans le cadre de la présente convention, s’oblige à:
              </p>
              <ul className="list-disc pl-5 mb-8 space-y-2 text-slate-600 dark:text-slate-300 text-[15px] md:text-base">
                <li>Fournir à la MPAYNETWORK tout renseignement personnel requis aux fins de son identification et de la constitution de son dossier;</li>
                <li>Ne pas communiquer son mot de passe à des tiers;</li>
                <li>Changer lui-même son mot de passe en cas d’accessibilité par des tiers de celui-ci ;</li>
                <li>Assumer toute perte et/ou conséquence pécuniaire résultant de l’utilisation de son code d’accès par suite de sa négligence;</li>
                <li>Vérifier les transactions effectuées sur son (ses) compte (s) et aviser la banque de toute erreur y relative;</li>
                <li>Ne pas utiliser l’infrastructure et le système mis à sa disposition par la MPAYNETWORK de manière contraire à la présente convention, de manière frauduleuse ou illégale et /ou de façon préjudiciable à la sécurité et à l’efficacité du Service;</li>
                <li>N’effectuer aucune transaction illicite en utilisant ce service;</li>
                <li>L’entreprise et ses utilisateurs désignés s’obligent conjointement et solidairement à ne pas utiliser les services en violation des instructions passées par la MPAYNETWORK, de manière frauduleuse ou illégales et/ou d’une façon préjudiciable à la sécurité et à l’efficacité dudit service. Elle s’oblige en outre, à n’effectuer, à partir de ce site, aucune transaction illicite pouvant nuire au site de la MPAYNETWORK et/ou aux tiers.</li>
              </ul>

              <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mt-8 mb-4 uppercase">
                Article 7.- LIMITATIONS DE RESPONSABILITES
              </h3>
              <ul className="list-disc pl-5 mb-4 space-y-2 text-slate-600 dark:text-slate-300 text-[15px] md:text-base">
                <li>La MPAYNETWORKONLINE utilise des outils de sécurité très performants, elle ne peut garantir toutefois la sécurité totale des données transmises sur les services en ligne;</li>
                <li>Elle ne saurait être tenue pour responsable lorsque l’inexécution de ses obligations résulte d’éléments qui échappent à son contrôle;</li>
                <li>Sa responsabilité ne pourra non plus être engagée en cas d’accès frauduleux des informations du client au moyen de messages de tiers usurpant l’identité de la banque;</li>
                <li>La MPAYNETWORKOnline ne garantit pas la sécurité de fonctionnement des réseaux de télécom. Elle ne saurait, de ce fait, être tenue pour responsable en ce qui concerne le transport des informations ou des conséquences résultant d’un défaut de sécurité ou de fiabilité du terminal de connexion utilisé par le client;</li>
                <li>La MPAYNETWORKOnline ne saurait non plus assumer les conséquences qui résulteraient d’une erreur de transmission ou de manipulation de la part du client.</li>
              </ul>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4 text-[15px] md:text-base">
                En cas de différence entre les informations figurant sur le site et celles enregistrées sur le relevé bancaire, les parties conviennent expressément que les dernières feront foi.<br/>
                Les transactions effectuées par la MPAYNETWORKOnline obtiendront automatiquement un numéro de référence interne. Chaque transaction effectuée sera conservée par la Banque sur support électronique. En cas de besoin, l’enregistrement servira de preuve.<br/>
                Les transactions seront exécutées sous réserves de solde disponible du compte et des autres engagements de l’Utilisateur envers la MPAYNETWORK. Toutes transactions effectuées via MPAYNETWORKOnline ou MaMPAYNETWORK seront enregistrées suivant les normes d’usages bancaires et financiers d’imputation.
              </p>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-8 text-[15px] md:text-base">
                Toute transaction initiée en ligne nécessitant un suivi en succursale telles que: attestations bancaires, remise de chèque de direction, livraison de chéquier etc… sera disponible à la succursale du choix du client dans un délai d’un (1) jour ouvrable (en semaine).
              </p>

              <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mt-8 mb-4 uppercase">
                Article 8.- UTILISATION DU SERVICE
              </h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4 text-[15px] md:text-base">
                L’adhésion aux services en ligne de la MPAYNETWORK permet à l’utilisateur de consulter l’ensemble des comptes rattachés à son patrimoine.
              </p>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4 text-[15px] md:text-base">
                La MPAYNETWORKOnline offre à l’utilisateur qui l’accepte, un service lui permettant d’accéder à son patrimoine à distance et d’y effectuer à travers internet les diverses transactions bancaires énumérées à l’article 1.
              </p>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-8 text-[15px] md:text-base">
                L’utilisateur adhérant au service MPAYNETWORKOnline reconnaît expressément qu’il a pris connaissance de toutes les informations sur le contenu du service, ses caractéristiques, sa disponibilité et ses modalités de fonctionnement.
              </p>

              <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mt-8 mb-4 uppercase">
                Article 9- DUREE ET RESILIATION DU CONTRAT
              </h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4 text-[15px] md:text-base">
                L’adhésion au Service en ligne est conclu pour une période entière d’une (1) année renouvelable par tacite reconduction, sauf autrement spécifié par l’une des deux parties prenantes. Elle entrera en vigueur à compter de la date de la confirmation de l’acceptation par l’Administration de la MPAYNETWORKOnline de l’adhésion de l’Entreprise.
              </p>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4 text-[15px] md:text-base">
                L’utilisateur ne désirant pas renouveler la présente convention en informera l’Administration de la MPAYNETWORKOnline par lettre avec accusé de réception au moins un (1) mois avant sa date d’expiration
              </p>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-8 text-[15px] md:text-base">
                La dénonciation ou résiliation du contrat d’adhésion entraine l’interruption automatique du service MPAYNETWORKOnline. Dans ce cas, le client ne disposera alors plus de la possibilité de consulter son patrimoine ou d’effectuer des transactions en ligne.
              </p>

              <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mt-8 mb-4 uppercase">
                Article 10- MODIFICATION DU SERVICE
              </h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-8 text-[15px] md:text-base">
                Compte tenu notamment des évolutions technologiques et améliorations possibles du service, la MPAYNETWORKOnline se réserve la possibilité de changer à tout moment le champ des services offerts en ligne et d’apporter des modifications adéquates aux conditions de la présente convention. Le client en sera avisé avant la date d’entrée en vigueur.
              </p>

              <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mt-8 mb-4 uppercase">
                Article 11: RECLAMATION:
              </h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4 text-[15px] md:text-base">
                Le fait pour la MPAYNETWORK de s’abstenir de réclamer ou de réclamer tardivement l’application de l’une des clauses contenues dans la présente convention, n’implique ni renonciation à ses droits ni acquiescement.
              </p>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-8 text-[15px] md:text-base">
                Toute réclamation devra être alors effectuée dans les délais, par lettre recommandée avec accusé de réception adressée à l’Administration de MPAYNETWORKOnline.
              </p>

              <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mt-8 mb-4 uppercase">
                Article 12 : DE LA RESILIATION :
              </h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4 text-[15px] md:text-base">
                La MPAYNETWORK pourra résilier la présente convention, dans les cas suivants :
              </p>
              <ul className="list-disc pl-5 mb-8 space-y-2 text-slate-600 dark:text-slate-300 text-[15px] md:text-base">
                <li>Décès de l’UTILISATEUR ;</li>
                <li>Utilisation frauduleuse du Service par l’UTILISATEUR ;</li>
                <li>Manquement à ses obligations par l’UTILISATEUR, définies par la présente convention ;</li>
                <li>Sur demande formelle du client ;</li>
                <li>Dans tout autre cas jugé nécessaire par la Banque.</li>
              </ul>

              <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mt-8 mb-4 uppercase">
                Article 13: DES LITIGES ET DISPOSITIONS GENERALES :
              </h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4 text-[15px] md:text-base">
                Les parties s’engagent à exécuter de bonne foi les clauses du présent contrat. En cas de contestation relative à une transaction bancaire réalisée à partir du Service, l’UTILISATEUR accepte, d’ores et déjà, de contacter un représentant de la MPAYNETWORK afin de résoudre à l’amiable la contestation. A cette fin, l’UTILISATEUR s’oblige à coopérer avec la MPAYNETWORK en lui fournissant toute information, document, donnée pouvant faire avancer l’investigation qui sera faite par les services ad hoc de la MPAYNETWORK. En cas d’échec par voie amiable, la contestation sera soumise à la juridiction compétente des tribunaux haïtiens.
              </p>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4 text-[15px] md:text-base">
                Pour tout ce qui n’aura pas fait l’objet d’une clause spéciale, les parties conviennent de se référer aux dispositions légales, en vigueur, de la République d'Haïti régissant la matière.
              </p>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-8 text-[15px] md:text-base">
                Il demeure entendu que les clauses et conditions des autres conventions et/ou contrats conclus entre l’UTILISATEUR et la MPAYNETWORK demeurent opposables.
              </p>

              <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mt-8 mb-4 uppercase">
                TARIFICATIONS
              </h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4 text-[15px] md:text-base">
                Les services offerts et leurs modalités d’exécution restent soumis aux tarifs et conditions en vigueur à leur date de réalisation, sujets à révision à n’importe quel moment par la MPAYNETWORK. En cas de révision par la Banque, une nouvelle plaquette de tarification de service sera affichée. Le client sera avisé de toute modification de tarifs en consultant le site de la Banque, proposé à cet effet. Ainsi, il s’engage à se tenir informer de ces révisions.<br/>
                À défaut de protestation du client, par lettre avec accusé de réception pour demander la désactivation de son profil aux services bancaires en ligne, l’expiration du délai d’un (1) mois de la date de parution vaut, de sa part, approbation de la nouvelle tarification.
              </p>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-8 text-[15px] md:text-base">
                Les virements au bénéfice d’un tiers effectués via MPAYNETWORKOnline sont limités à un montant maximal fixé par la MPAYNETWORK en fonction de ses règlements internes. Toutefois, ce dit montant varie selon le type d’utilisateur et la monnaie utilisée.
              </p>

              <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mt-8 mb-4 uppercase">
                SÉCURITÉ
              </h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4 text-[15px] md:text-base">
                Les codes personnels (nom d’utilisateur, mot de passe, OTP ou PIN de sécurité) sont strictement confidentiels. Il est donc de la responsabilité de l’utilisateur de les tenir secrets et de ne les communiquer à quiconque. En cas d’oubli ou de perte du mot de passe, l’utilisateur peut le réinitialiser en ligne à partir du site.
              </p>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4 text-[15px] md:text-base">
                Par conséquent, en cas de piratage ou d’utilisation frauduleuse des identifiants, l’utilisateur s’engage à informer la MPAYNETWORK sans délai. La Banque n’est nullement responsable d’aucune transaction effectuée avant la date de réception de cette notification par la MPAYNETWORK.
              </p>

            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
