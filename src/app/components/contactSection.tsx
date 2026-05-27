import { useTranslation } from "react-i18next";

const ContactSection = () => {
  const { t } = useTranslation("contacts");
  return (
    <>
      <div className="max-w-2xl mx-auto mt-16 p-4 bg-white shadow-lg rounded-lg">
        <p className="text-gray-600 mb-6">{t("description")}</p>
        <div className="space-y-4">
          <div>
            <span className="block text-sm text-gray-500">{t("email")}</span>
            <a
              href="mailto:info@cardealership.com"
              className="text-blue-500 hover:underline"
            >
              info@cardealership.com
            </a>
          </div>
          <div>
            <span className="block text-sm text-gray-500">{t("phone")}</span>
            <a href="tel:+1234567890" className="text-blue-500 hover:underline">
              +1 (234) 567-890
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactSection;
