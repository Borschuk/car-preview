import { useTranslation } from "react-i18next";
import CredentialCalculator from "../components/creditCalculator";
import PageTitle from "../components/pageTitle";

const Finance = () => {
  const { t } = useTranslation("finance");
  return (
    <>
      <PageTitle>{t("title")}</PageTitle>
      <CredentialCalculator />
    </>
  );
};

export default Finance;
