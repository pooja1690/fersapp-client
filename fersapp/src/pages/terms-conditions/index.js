import React from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Container from "../form/container";

function TermsAndConditions() {
  return <Container heading={termsHeading} content={termsContent} />;
}

const termsHeading = <>Terms and Conditions</>;

const termsContent = (
  <Typography variant="body2" gutterBottom>
    Welcome to Google! Thanks for using our products and services (“Services”).
    The Services are provided by Google LLC (“Google”), located at 1600
    Amphitheatre Parkway, Mountain View, CA 94043, United States. By using our
    Services, you are agreeing to these terms. Please read them carefully. Our
    Services are very diverse, so sometimes additional terms or product
    requirements (including age requirements) may apply. Additional terms will
    be available with the relevant Services, and those additional terms become
    part of your agreement with us if you use those Services. Using our Services
    You must follow any policies made available to you within the Services.
    Don’t misuse our Services. For example, don’t interfere with our Services or
    try to access them using a method other than the interface and the
    instructions that we provide. You may use our Services only as permitted by
    law, including applicable export and re-export control laws and regulations.
    We may suspend or stop providing our Services to you if you do not comply
    with our terms or policies or if we are investigating suspected misconduct.
    Using our Services does not give you ownership of any intellectual property
    rights in our Services or the content you access. You may not use content
    from our Services unless you obtain permission from its owner or are
    otherwise permitted by law. These terms do not grant you the right to use
    any branding or logos used in our Services. Don’t remove, obscure, or alter
    any legal notices displayed in or along with our Services. Our Services
    display some content that is not Google’s. This content is the sole
    responsibility of the entity that makes it available. We may review content
    to determine whether it is illegal or violates our policies, and we may
    remove or refuse to display content that we reasonably believe violates our
    policies or the law. But that does not necessarily mean that we review
    content, so please don’t assume that we do. In connection with your use of
    the Services, we may send you service announcements, administrative
    messages, and other information. You may opt out of some of those
    communications. Some of our Services are available on mobile devices. Do not
    use such Services in a way that distracts you and prevents you from obeying
    traffic or safety laws. Your Google Account You may need a Google Account in
    order to use some of our Services. You may create your own Google Account,
    or your Google Account may be assigned to you by an administrator, such as
    your employer or educational institution. If you are using a Google Account
    assigned to you by an administrator, different or additional terms may apply
    and your administrator may be able to access or disable your account. To
    protect your Google Account, keep your password confidential. You are
    responsible for the activity that happens on or through your Google Account.
    Try not to reuse your Google Account password on third-party applications.
    If you learn of any unauthorized use of your password or Google Account,
    follow these instructions. Privacy and Copyright Protection Google’s privacy
    policies explain how we treat your personal data and protect your privacy
    when you use our Services. By using our Services, you agree that Google can
    use such data in accordance with our privacy policies. We respond to notices
    of alleged copyright infringement and terminate accounts of repeat
    infringers according to the process set out in the U.S. Digital Millennium
    Copyright Act. We provide information to help copyright holders manage their
    intellectual property online. If you think somebody is violating your
    copyrights and want to notify us, you can find information about submitting
    notices and Google’s policy about responding to notices in our Help Center.
  </Typography>
);

export default TermsAndConditions;
