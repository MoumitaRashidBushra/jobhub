import React from 'react';

const Footer = () => {
    return (

        <div className='bg-neutral text-neutral-content '>
            <footer className="footer lg:container lg:mx-auto px-5 lg:px-20 ">
                <div>
                    <span className="footer-title pt-12 ">JobHub</span>
                    <p className='pb-12'>There are many variations of passages <br /> of Lorem Ipsum , but the majority have <br /> suffered alteration in some form.</p>

                </div>

                <div>
                    <span className="footer-title pt-12 ">Company</span>
                    <a className="link link-hover">About Us</a>
                    <a className="link link-hover">Work</a>
                    <a className="link link-hover">Latest News</a>
                    <a className="link link-hover pb-12">Careers</a>
                </div>
                <div>
                    <span className="footer-title pt-12 ">Product</span>
                    <a className="link link-hover">Prototype</a>
                    <a className="link link-hover">Plans & Pricing</a>
                    <a className="link link-hover">Customers</a>
                    <a className="link link-hover pb-12">Integrations</a>
                </div>
                <div>
                    <span className="footer-title pt-12 " >Support</span>
                    <a className="link link-hover">Help Desk</a>
                    <a className="link link-hover">Sales</a>
                    <a className="link link-hover">Become a Partner</a>
                    <a className="link link-hover pb-12">Developers</a>
                </div>
                <div>
                    <span className="footer-title pt-12 ">Contact</span>
                    <a className="link link-hover">524 Broadway , NYC</a>
                    <a className="link link-hover pb-12">+1 777 - 978 - 5570</a>

                </div>

            </footer>
        </div>

    );
};

export default Footer;