function Footer() {
  return (
    <footer className="px-8 my-4 py-4">
      <div className="flex flex-row justify-between">
        <div>
          <h2 className="text-3xl font-bold">FinSuite</h2>
          <p className="text-gray-800 mt-2">
            Welcome to FinSuite, where financial <br></br>management meets
            simplicity and efficiency
          </p>
        </div>
        <ul>
          <h3 className="text-2xl mb-2">Company</h3>
          <li className="text-gray-800">Home</li>
          <li className="text-gray-800">About Us</li>
          <li className="text-gray-800">Affiliate Program</li>
          <li className="text-gray-800">Careers</li>
        </ul>
        <ul>
          <h3 className="text-2xl mb-2">Product</h3>
          <li className="text-gray-800">Overview</li>
          <li className="text-gray-800">Features</li>
          <li className="text-gray-800">Intergration</li>
          <li className="text-gray-800">Pricing</li>
        </ul>
        <ul>
          <h3 className="text-2xl mb-2">Resources</h3>
          <li className="text-gray-800">Blog</li>
          <li className="text-gray-800">Podcast</li>
          <li className="text-gray-800">Webinars</li>
          <li className="text-gray-800">Press</li>
        </ul>
      </div>
      <div className="flex flex-row justify-between mt-10 px-4 py-3 bg-gray-200 rounded-xl items-center text-center text-gray-800">
        <h4>Copyright - Gagan Suman</h4>
        <ul className="flex gap-8">
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
