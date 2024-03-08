import { FaQq, FaWeixin, FaEnvelope } from "react-icons/fa";
import Head from "next/head";

const ContactForm: React.FC = () => {
  return (
    <>
      <Head>
      <style>{`
          .contact-form {
            position: fixed;
            bottom: 0;
            left: 0;
            width: 100%;
            padding: 20px;
            background-color: #f1f1f1;
          }

          .contact-item {
            display: flex;
            align-items: center;
            margin-bottom: 10px;
          }

          .contact-item span {
            margin-left: 10px;
          }
        `}</style>
      </Head>

      <div className="contact-form">
        <h3>Contact Information</h3>
        <div className="contact-item">
          <FaQq />
          <span>QQ:</span>
          <span>123456789</span>
        </div>
        <div className="contact-item">
          <FaWeixin />
          <span>WeChat:</span>
          <span>wechat_user</span>
        </div>
        <div className="contact-item">
          <FaEnvelope />
          <span>Email:</span>
          <span>example@example.com</span>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
