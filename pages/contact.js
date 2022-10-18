import { Fragment } from "react";
import ContactForm from "../components/contact/contact-form";
import PageBreadcrumbs from "../components/layout/breadcrumb";
import { useRouter } from "next/router"
function ContactPage() {
    const router = useRouter();
    const path = router.asPath;
  return (
    <Fragment>
      <PageBreadcrumbs url={path} />
      <ContactForm />
    </Fragment>
  );
}

export default ContactPage;
