import React from "react"
const PrivacyContent2 = ({ readMore }) => {
  return (
    <>
      <div
        className={`${
          readMore ? "readMore__content rmOpen" : "readMore__content"
        }`}
      >
        <div className="privacy__content-2">
          <div className="privacy__content-2-box-1">
            <h4>5. Other Parties.</h4>
            <p>
              With the exception of the parties stated in the privacy protocol,
              No name 1 will not share your data with any other parties.
              Sometimes we might give information to non-associated firms
              responsible for performing maintenance on the user`s profile. This
              includes parties that take care of the fund`s transfer process at
              No name 1. Additionally, it might include firms responsible for
              any legal and financial matters at No name 1. Any party which is
              not a direct association to No name 1 should keep the provided
              user data to the same degree in which it is received. The
              non-associate party can only utilize the given user data in order
              to provide the specified service and for no other reasons. In some
              cases, No name 1 might give out a clients` private data to another
              party given that there are certain instructions that need to be
              accomplished. Know that No name 1 would never use your information
              as a source of revenue and give it in exchange for money. In case
              of any requests and control by bodies of the law, No name 1 might
              share private user data given to other parties. The shared
              information might contain private specifics in order to meet the
              requirements of the law, as well as securing the rights and
              integrity of the platform.
            </p>
            <h4>6. Consolidation and insolvency.</h4>
            <p>
              All private client data will be consolidated following the
              platform, in case there is a merger of No name 1. Stated in the
              inclusion terms and the obligations for keeping records, there are
              going to be different procedures in case of insolvency.
            </p>
            <h4>7. Payment details.</h4>
            <p>
              No name 1 does not hold any data related to client`s credit card
              information and details. In case you`re asked to give a copy of
              your bank card, you should only provide the ending 4 digits of the
              card number, without giving out the CVC which can be found on the
              back of the card.
            </p>
          </div>
          <div className="privacy__content-2-box-2">
            <h4>8. Inability/Unwillingness to share private data.</h4>
            <p>
              You can choose if you want to share the necessary information with
              No name 1. Be mindful though, that any info you omit might lead to
              issues with your trading profile. It might also have an impact on
              the services we`re able to offer you.
            </p>
            <h4>9. Pulling out.</h4>
            <p>
              If you wish for No name 1 to delete all your private information
              from the platform and the servers, you will need to send us a
              detailed message. Know that any omitted data might result in
              issues with your profile and consequently lead to inadequacy with
              the platform services.
            </p>
            <h4>10. Corrections.</h4>
            <p>
              If any corrections are made, which change the policies and
              protocol for private data gathered by No name 1, the clients will
              be promptly informed about it. The client has the right to decide
              whether his private data will be used in a certain way. Any other
              change or correction which is not related to a client`s private
              data will be posted on the platform.
            </p>
            <h4>11. Mailing info.</h4>
            <p>
              In case you have any inquiries regarding the privacy protocol or
              something related to the platform, please feel free to contact us
              at any time. You can send us an e-mail, call us or fax us. There
              is always a dedicated No name 1 employee to answer your questions.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default PrivacyContent2
