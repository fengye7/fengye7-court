import { FaQq, FaWeixin, FaEnvelope } from "react-icons/fa";

const ContactForm: React.FC = () => {
  return (
    <>
      <head>
        <style>{`          
          .contact-form {
            position: fixed;
            bottom: 0;
            width: 100%;
            height: 15%
            padding: 20px;
            text-align: center;
            color: #f30d27;
          }

          .contact-form contact-item {
            display: flex;
            align-items: center;
            text-align: center;
            margin-bottom: 10px;
          }

          .contact-item span {
            margin-left: 10px;
          }
        `}</style>
      </head>

      <div className="contact-form">
        <h5>Contact Information</h5>
        <div className="contact-item">
          <FaQq />
          <span>QQ:</span>
          <span>2152814</span>
        </div>
        <div className="contact-item">
          <FaWeixin />
          <span>WeChat:</span>
          <span>15984304723</span>
        </div>
        <div className="contact-item">
          <FaEnvelope />
          <span>Email:</span>
          <span>zcj2518529668@163.com</span>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
