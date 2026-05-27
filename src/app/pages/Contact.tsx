import { useTranslation } from "react-i18next";
import ContactSection from "../components/contactSection";
import PageTitle from "../components/pageTitle";

const Contact = () => {
  const { t } = useTranslation("contacts");
  return (
    <>
      <PageTitle>{t("title")}</PageTitle>
      <ContactSection />
    </>
  );
};

export default Contact;
