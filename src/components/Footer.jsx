export const Footer = () => {
  return (
    <footer className="footer p-10 bg-base-100 text-base-content border-t">
      <nav>
        <h6 className="footer-title">Resources</h6>
        <a className="link link-hover">Become A Member</a>
        <a className="link link-hover">Student Discounts</a>
        <a className="link link-hover">Send Us Feedback</a>
      </nav>
      <nav>
        <h6 className="footer-title">Help</h6>
        <a className="link link-hover">Get Help</a>
        <a className="link link-hover">Contact Us</a>
        <a className="link link-hover">Order Status</a>
        <a className="link link-hover">Payment Options</a>
      </nav>
      <nav>
        <h6 className="footer-title">Legal</h6>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </nav>
    </footer>
  );
};
