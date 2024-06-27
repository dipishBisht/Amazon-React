import footerImage from "../assets/footer.png"
import './footer.css'

const Footer = () => {
    return (
        <footer className="flex flex-col justify-center items-center gap-16 bg-[#260a57] text-white pt-16" style={{ background: `linear-gradient(rgb(0, 0, 0,.1),rgb(0, 0, 0,.3),rgb(0, 0, 0,.6)),url(${footerImage}`, backgroundSize: "cover", backgroundPosition: "center" }}>
            <div className="footer-upper flex gap-12 px-5">
                <div className="footer-upper-top border-r-2 border-white flex flex-col gap-6 pr-7 py-1">
                    <h1 className="text-4xl text-[#04e0fd] font-bold">IT SOLUTIONS</h1>
                    <p className="max-w-[500px]">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea eveniet alias incidunt exercitationem vel sapiente exercitationem vel sapiente</p>
                    <ul className="flex gap-4">
                        <li className="cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
                        </li>
                        <li className="cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" /></svg>
                        </li>
                        <li className="cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
                        </li>
                        <li className="cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-youtube"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" /><path d="m10 15 5-3-5-3z" /></svg>
                        </li>
                    </ul>
                </div>
                <div className="footer-upper-bottom flex gap-10">
                    <div className="flex flex-col gap-3">
                        <h1 className="text-xl font-semibold">Quick Links</h1>
                        <ul className="footer-ul flex flex-col text-[#eee]">
                            <li>Home</li>
                            <li>About</li>
                            <li>Projects</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                    <div className="flex flex-col gap-3">
                        <h1 className="text-xl font-semibold">More Links</h1>
                        <ul className="footer-ul flex flex-col text-[#eee]">
                            <li>Services</li>
                            <li>Blog</li>
                            <li>Careers</li>
                            <li>Support</li>
                        </ul>
                    </div>
                    <div className="flex flex-col gap-3">
                        <h1 className="text-xl font-semibold">Resourses</h1>
                        <ul className="footer-ul flex flex-col text-[#eee]">
                            <li>FAQ</li>
                            <li>Privacy Policy</li>
                            <li>Terms of Service</li>
                            <li>Contact Us</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="footer-lower bg-[#9b5ae8] w-full">
                <p className="text-center py-4">Copyright &copy; 2024 IT Solutions All Rights Reserved.</p>
            </div>
        </footer>
    )
}

export default Footer