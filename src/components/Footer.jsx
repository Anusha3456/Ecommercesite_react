import "./footer.css";


export default function Footer() {
  return (
    <div className="footer">
      <div className="links">
        <a href="#">FAQ</a>
        <a href="#">Help Center</a>
        <a href="#">Account</a>
        <a href="#">Media Center</a>
        <a href="#">Investor Relations</a>
        <a href="#">Jobs</a>
        <a href="#">Ways to Buy</a>
        <a href="#">Terms of Use</a>
        <a href="#">Privacy</a>
        <a href="#">Cookie Preferences</a>
        <a href="#">Corporate Information</a>
        <a href="#">Contact Us</a>
        <a href="#">Speed Test</a>
        <a href="#">Legal Notices</a>
      </div>

      <div className="newsletter">
        <center><input type="email" name="email" id="email" placeholder="Enter email" /></center>
        <button>Subscribe</button>
      </div>

      

      {/* Copyright */}
      <p className="copyright">© 2025 Your Company. All rights reserved.</p>
    </div>
  );
}
