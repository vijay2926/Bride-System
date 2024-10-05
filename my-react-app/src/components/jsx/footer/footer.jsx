import React from 'react'
import logo from '../../images/logo/logo-light.svg'

function Footer() {
 
    return (
        <>
      <footer class="footer-area">
      <div class="bg-dark-300 pt-110">
        <div class="container">
       
          <div class="footer-newsletter pb-60 aos-init aos-animate" data-aos="fade-right" data-aos-duration="1000" data-aos-easing="linear">
            <div class="row justify-content-between row-gap-4">
              <div class="col-lg-6 col-xl-4">
                <div>
                  <a href="index-2.html" class="d-block mb-4">
                    <img src={logo} alt="" />
                  </a>
                  <p class="text-white">
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout the point of using lorem varius sit amet ipsum.
                  </p>
                </div>
              </div>
              <div class="col-lg-6 col-xl-6">
                <div class="d-flex flex-column justify-content-end">
                  <h3 class="text-white mb-3">Subscribe to Our Newsletter</h3>
                  <p class="footer-newsletter-desc mb-30">
                    We'll keep you updated with the best new jobs.
                  </p>
                  <form>
                    <div class="relative footer-newsletter-form d-flex align-items-center justify-content-between">
                      <input type="text" class="form-control shadow-none" placeholder="Enter your email address" />
                      <button class="footer-newsletter-btn">Subscribe</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
   
          <div class="footer-widgets py-60">
            <div class="row justify-content-between row-gap-4">
              <div class="col-md-6 col-xl-3 aos-init aos-animate" data-aos="fade-up" data-aos-duration="1000" data-aos-easing="linear">
                <div class="mb-5">
                  <h3 class="footer-widget-title fw-bold mb-4">Download App</h3>
                  <ul class="footer-info-widget p-0">
                    <li class="d-flex gap-3 align-items-center py-2 footer-info-widget-item">
                      <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.3497 15.9951C14.0086 15.9654 13.6674 15.9407 13.3263 15.9011C11.1211 15.654 9.07412 14.9472 7.19033 13.7708C5.2126 12.5351 3.61064 10.9237 2.39433 8.94161C1.41041 7.34507 0.762699 5.62496 0.441317 3.77634C0.302876 2.98054 0.233655 2.1798 0.223767 1.36917C0.213878 0.553599 0.75281 0 1.56863 0C2.49816 0 3.42275 0 4.35229 0C5.14338 0 5.67242 0.504171 5.6922 1.29503C5.71692 2.24405 5.85042 3.16837 6.13719 4.07291C6.29541 4.57708 6.19158 5.01205 5.85536 5.4223C5.40543 5.9759 4.99011 6.55422 4.56489 7.12759C4.54017 7.16219 4.53523 7.23633 4.555 7.27587C5.48454 9.05035 6.79973 10.4541 8.55002 11.4378C8.70824 11.5267 8.87141 11.6849 9.02468 11.675C9.17301 11.6651 9.31145 11.4872 9.45484 11.3834C9.95422 11.0077 10.4486 10.6222 10.948 10.2515C11.2595 10.0192 11.6106 9.95984 11.9863 10.0488C12.4659 10.1625 12.9406 10.3157 13.4251 10.3948C13.9097 10.4739 14.4091 10.4986 14.8986 10.5283C15.4375 10.5579 15.8528 10.7655 16.0951 11.2598C16.1495 11.3735 16.1791 11.502 16.2236 11.6256C16.2236 12.7179 16.2236 13.8103 16.2236 14.9076C16.1346 15.1053 16.0704 15.3179 15.9566 15.4958C15.7688 15.7924 15.4573 15.916 15.1309 16C14.8689 15.9951 14.6068 15.9951 14.3497 15.9951Z" fill="currentColor"></path>
                      </svg>
                      +(323) 750-1234
                    </li>
                    <li class="d-flex gap-3 align-items-center py-2 footer-info-widget-item">
                      <svg xmlns="http://www.w3.org/2000/svg" width="17" height="12" viewBox="0 0 17 12" fill="none">
                        <path d="M17.0001 10.6994C16.9513 10.846 16.9069 10.9882 16.8626 11.1215C15.1461 9.41089 13.4384 7.71363 11.7263 6.01192C13.4473 4.30132 15.1549 2.60405 16.8714 0.902344C16.9069 1.00898 16.9557 1.1556 17.0001 1.30222C17.0001 4.43461 17.0001 7.56701 17.0001 10.6994Z" fill="currentColor"></path>
                        <path d="M0.859375 0.125118C1.05897 0.0806868 1.23195 0.0406989 1.4005 0.00959711C1.45373 -0.00373221 1.51139 0.000710897 1.56461 0.000710897C6.18192 0.000710897 10.8037 0.000710897 15.421 0.005154C15.6472 0.005154 15.8734 0.0629144 16.0996 0.0940161C16.104 0.116232 16.104 0.134004 16.1085 0.15622C16.0685 0.196208 16.0286 0.240639 15.9887 0.280627C13.6512 2.63103 11.3182 4.98588 8.98069 7.33628C8.6569 7.66507 8.34198 7.66507 8.0182 7.34072C5.68071 4.98588 3.33879 2.63103 1.00131 0.276184C0.96139 0.236196 0.925907 0.196208 0.859375 0.125118Z" fill="currentColor"></path>
                        <path d="M10.9856 6.754C12.6977 8.45571 14.4009 10.1485 16.1396 11.8769C15.9356 11.9213 15.7715 11.9613 15.5985 11.9924C15.532 12.0058 15.4654 11.9969 15.3989 11.9969C10.7949 11.9969 6.19534 11.9969 1.59135 11.9969C1.3474 11.9969 1.11232 11.9747 0.872803 11.8502C2.58932 10.1441 4.29254 8.45127 6.00906 6.74512C6.0268 6.75845 6.06672 6.79843 6.11107 6.83842C6.51913 7.24719 6.92276 7.65595 7.33082 8.06472C8.01832 8.7534 8.97194 8.7534 9.65943 8.06472C10.1118 7.62041 10.5598 7.1761 10.9856 6.754Z" fill="currentColor"></path>
                        <path d="M0.114213 11.1218C0.0787293 10.9307 0.00332659 10.7263 0.00332659 10.522C-0.00110886 7.50954 -0.00110886 4.49711 0.00332659 1.48024C0.00332659 1.27586 0.0742938 1.07147 0.114213 0.875977C1.84404 2.59546 3.55169 4.29717 5.26821 6.00332C3.55612 7.70059 1.84847 9.39786 0.114213 11.1218Z" fill="currentColor"></path></svg>infoyourortencey@gmail.com
                    </li>
                    <li class="d-flex gap-3 align-items-center py-2 footer-info-widget-item">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="23" viewBox="0 0 16 23" fill="none">
                        <path d="M8.22365 23C8.0718 23 7.91995 23 7.7681 23C7.28825 22.8742 6.94204 22.6047 6.69908 22.1674C4.82222 18.7474 2.92713 15.3333 1.03812 11.9133C0.157396 10.3201 -0.164525 8.63099 0.0784345 6.82812C0.503613 3.7375 2.86032 1.06615 5.91553 0.275521C6.40145 0.14974 6.91167 0.0898438 7.40366 0C7.79847 0 8.19328 0 8.58809 0C8.91608 0.0479167 9.25015 0.0838542 9.57207 0.14974C13.1982 0.8625 15.9194 4.09089 15.9983 7.74453C16.0287 9.27786 15.64 10.6974 14.899 12.0391C13.0525 15.3573 11.212 18.6875 9.38378 22.0177C9.11652 22.5029 8.78245 22.8682 8.22365 23ZM8.00498 3.95312C6.20708 3.95312 4.73111 5.39661 4.72503 7.16953C4.71896 8.96042 6.18279 10.4219 7.99284 10.4219C9.79074 10.4219 11.2667 8.97838 11.2728 7.20547C11.2789 5.41458 9.80896 3.95312 8.00498 3.95312Z" fill="currentColor"></path></svg>374 A Tower, William Road Blvd <br />, Melbourne 2721,
                      IL, USA
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 class="footer-widget-title fw-bold mb-4">Download App</h3>
                  <div class="d-flex gap-3">
                    <a href="#">
                      <img src="assets/img/logo/play.svg" alt="" />
                    </a>
                    <a href="#">
                      <img src="assets/img/logo/appstore.svg" alt="" />
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-md-6 col-xl-3">
                <div data-aos="fade-up" data-aos-duration="1000" data-aos-easing="linear" class="aos-init aos-animate">
                  <h3 class="footer-widget-title fw-bold mb-4">Categories</h3>
                  <nav>
                    <ul class="footer-nav-list list-unstyled">
                      <li class="footer-nav-list-item py-1">
                        <a href="services.html" class="footer-nav-link d-flex gap-2 align-items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" width="13" height="10" viewBox="0 0 13 10" fill="none">
                            <path d="M8.57894 9L12.2456 5M12.2456 5L8.57894 0.999999M12.2456 5L1.24561 5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
                          </svg>
                          Graphics &amp; Design
                        </a>
                      </li>
                      <li class="footer-nav-list-item py-2">
                        <a href="services.html" class="footer-nav-link d-flex gap-2 align-items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" width="13" height="10" viewBox="0 0 13 10" fill="none">
                            <path d="M8.57894 9L12.2456 5M12.2456 5L8.57894 0.999999M12.2456 5L1.24561 5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
                          </svg>
                          Digital Marketing
                        </a>
                      </li>
                      <li class="footer-nav-list-item py-2">
                        <a href="services.html" class="footer-nav-link d-flex gap-2 align-items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" width="13" height="10" viewBox="0 0 13 10" fill="none">
                            <path d="M8.57894 9L12.2456 5M12.2456 5L8.57894 0.999999M12.2456 5L1.24561 5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
                          </svg>

                          Writing &amp; Translation
                        </a>
                      </li>
                      <li class="footer-nav-list-item py-2">
                        <a href="services.html" class="footer-nav-link d-flex gap-2 align-items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" width="13" height="10" viewBox="0 0 13 10" fill="none">
                            <path d="M8.57894 9L12.2456 5M12.2456 5L8.57894 0.999999M12.2456 5L1.24561 5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
                          </svg>
                          Video &amp; Animation
                        </a>
                      </li>
                      <li class="footer-nav-list-item py-2">
                        <a href="services.html" class="footer-nav-link d-flex gap-2 align-items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" width="13" height="10" viewBox="0 0 13 10" fill="none">
                            <path d="M8.57894 9L12.2456 5M12.2456 5L8.57894 0.999999M12.2456 5L1.24561 5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
                          </svg>
                          Music &amp; Audio
                        </a>
                      </li>
                      <li class="footer-nav-list-item py-2">
                        <a href="services.html" class="footer-nav-link d-flex gap-2 align-items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" width="13" height="10" viewBox="0 0 13 10" fill="none">
                            <path d="M8.57894 9L12.2456 5M12.2456 5L8.57894 0.999999M12.2456 5L1.24561 5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
                          </svg>
                          Fiverr Logo Maker
                        </a>
                      </li>
                      <li class="footer-nav-list-item py-2">
                        <a href="services.html" class="footer-nav-link d-flex gap-2 align-items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" width="13" height="10" viewBox="0 0 13 10" fill="none">
                            <path d="M8.57894 9L12.2456 5M12.2456 5L8.57894 0.999999M12.2456 5L1.24561 5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
                          </svg>
                          Programming &amp; Tech
                        </a>
                      </li>
                      <li class="footer-nav-list-item py-2">
                        <a href="services.html" class="footer-nav-link d-flex gap-2 align-items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" width="13" height="10" viewBox="0 0 13 10" fill="none">
                            <path d="M8.57894 9L12.2456 5M12.2456 5L8.57894 0.999999M12.2456 5L1.24561 5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
                          </svg>
                          Photography
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
              <div class="col-md-6 col-xl-3">
                <div data-aos="fade-up" data-aos-duration="1000" data-aos-easing="linear" class="aos-init aos-animate">
                  <h3 class="footer-widget-title fw-bold mb-4">About</h3>
                  <nav>
                    <ul class="footer-nav-list list-unstyled">
                      <li class="footer-nav-list-item py-1">
                        <a href="job-posts.html" class="footer-nav-link d-flex gap-2 align-items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" width="13" height="10" viewBox="0 0 13 10" fill="none">
                            <path d="M8.57894 9L12.2456 5M12.2456 5L8.57894 0.999999M12.2456 5L1.24561 5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
                          </svg>
                          Careers
                        </a>
                      </li>
                      <li class="footer-nav-list-item py-2">
                        <a href="blogs.html" class="footer-nav-link d-flex gap-2 align-items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" width="13" height="10" viewBox="0 0 13 10" fill="none">
                            <path d="M8.57894 9L12.2456 5M12.2456 5L8.57894 0.999999M12.2456 5L1.24561 5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
                          </svg>
                          Press &amp; News
                        </a>
                      </li>
                      <li class="footer-nav-list-item py-2">
                        <a href="price.html" class="footer-nav-link d-flex gap-2 align-items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" width="13" height="10" viewBox="0 0 13 10" fill="none">
                            <path d="M8.57894 9L12.2456 5M12.2456 5L8.57894 0.999999M12.2456 5L1.24561 5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
                          </svg>

                          Pricing Plan
                        </a>
                      </li>
                      <li class="footer-nav-list-item py-2">
                        <a href="privacy-policy.html" class="footer-nav-link d-flex gap-2 align-items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" width="13" height="10" viewBox="0 0 13 10" fill="none">
                            <path d="M8.57894 9L12.2456 5M12.2456 5L8.57894 0.999999M12.2456 5L1.24561 5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
                          </svg>
                          Privacy Policy
                        </a>
                      </li>
                      <li class="footer-nav-list-item py-2">
                        <a href="terms-conditions.html" class="footer-nav-link d-flex gap-2 align-items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" width="13" height="10" viewBox="0 0 13 10" fill="none">
                            <path d="M8.57894 9L12.2456 5M12.2456 5L8.57894 0.999999M12.2456 5L1.24561 5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
                          </svg>
                          Terms of Service
                        </a>
                      </li>
                      <li class="footer-nav-list-item py-2">
                        <a href="blogs.html" class="footer-nav-link d-flex gap-2 align-items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" width="13" height="10" viewBox="0 0 13 10" fill="none">
                            <path d="M8.57894 9L12.2456 5M12.2456 5L8.57894 0.999999M12.2456 5L1.24561 5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
                          </svg>
                          Blogs
                        </a>
                      </li>
                      <li class="footer-nav-list-item py-2">
                        <a href="faqs.html" class="footer-nav-link d-flex gap-2 align-items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" width="13" height="10" viewBox="0 0 13 10" fill="none">
                            <path d="M8.57894 9L12.2456 5M12.2456 5L8.57894 0.999999M12.2456 5L1.24561 5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
                          </svg>
                          FAQ's
                        </a>
                      </li>
                      <li class="footer-nav-list-item py-2">
                        <a href="contact.html" class="footer-nav-link d-flex gap-2 align-items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" width="13" height="10" viewBox="0 0 13 10" fill="none">
                            <path d="M8.57894 9L12.2456 5M12.2456 5L8.57894 0.999999M12.2456 5L1.24561 5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
                          </svg>
                          Contact
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
              <div class="col-md-6 col-xl-3">
                <div data-aos="fade-up" data-aos-duration="1000" data-aos-easing="linear" class="aos-init aos-animate">
                  <h3 class="footer-widget-title fw-bold mb-4">
                    Help &amp; Supports
                  </h3>
                  <nav>
                    <ul class="footer-nav-list list-unstyled">
                      <li class="footer-nav-list-item py-1">
                        <a href="contact.html" class="footer-nav-link d-flex gap-2 align-items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" width="13" height="10" viewBox="0 0 13 10" fill="none">
                            <path d="M8.57894 9L12.2456 5M12.2456 5L8.57894 0.999999M12.2456 5L1.24561 5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
                          </svg>
                          Help &amp; Support
                        </a>
                      </li>
                      <li class="footer-nav-list-item py-2">
                        <a href="privacy-policy.html" class="footer-nav-link d-flex gap-2 align-items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" width="13" height="10" viewBox="0 0 13 10" fill="none">
                            <path d="M8.57894 9L12.2456 5M12.2456 5L8.57894 0.999999M12.2456 5L1.24561 5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
                          </svg>
                          Trust &amp; Safety
                        </a>
                      </li>
                      <li class="footer-nav-list-item py-2">
                        <a href="freelancer-details.html" class="footer-nav-link d-flex gap-2 align-items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" width="13" height="10" viewBox="0 0 13 10" fill="none">
                            <path d="M8.57894 9L12.2456 5M12.2456 5L8.57894 0.999999M12.2456 5L1.24561 5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
                          </svg>

                          Selling on Work zones
                        </a>
                      </li>
                      <li class="footer-nav-list-item py-2">
                        <a href="buyer-details.html" class="footer-nav-link d-flex gap-2 align-items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" width="13" height="10" viewBox="0 0 13 10" fill="none">
                            <path d="M8.57894 9L12.2456 5M12.2456 5L8.57894 0.999999M12.2456 5L1.24561 5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
                          </svg>
                          Buying on Work zones
                        </a>
                      </li>
                      <li class="footer-nav-list-item py-2">
                        <a href="terms-conditions.html" class="footer-nav-link d-flex gap-2 align-items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" width="13" height="10" viewBox="0 0 13 10" fill="none">
                            <path d="M8.57894 9L12.2456 5M12.2456 5L8.57894 0.999999M12.2456 5L1.24561 5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
                          </svg>
                          Work zones Guides
                        </a>
                      </li>
                      <li class="footer-nav-list-item py-2">
                        <a href="freelancer-details.html" class="footer-nav-link d-flex gap-2 align-items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" width="13" height="10" viewBox="0 0 13 10" fill="none">
                            <path d="M8.57894 9L12.2456 5M12.2456 5L8.57894 0.999999M12.2456 5L1.24561 5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
                          </svg>
                          Workspace
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="footer-copyright py-4">
        <div class="container">
          <div class="row row-gap-4 justify-content-between">
            <div class="col-auto">
              <div>
                <p class="text-white">
                  Copyright @2023 All rights reserved
                  <a href="http://" class="text-white" target="_blank" rel="noopener noreferrer">
                    quomodotheme
                  </a>
                </p>
              </div>
            </div>
            <div class="col-auto">
              <div class="footer-social d-flex align-items-center gap-4">
                <a href="http://" class="footer-social-link" target="_blank" rel="noopener noreferrer">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 17.9895 4.3882 22.954 10.125 23.8542V15.4688H7.07812V12H10.125V9.35625C10.125 6.34875 11.9166 4.6875 14.6576 4.6875C15.9701 4.6875 17.3438 4.92188 17.3438 4.92188V7.875H15.8306C14.34 7.875 13.875 8.80008 13.875 9.75V12H17.2031L16.6711 15.4688H13.875V23.8542C19.6118 22.954 24 17.9895 24 12Z" fill="currentColor"></path>
                  </svg> </a><a href="http://" class="footer-social-link" target="_blank" rel="noopener noreferrer">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M12 0C5.37281 0 0 5.37281 0 12C0 18.6272 5.37281 24 12 24C18.6272 24 24 18.6272 24 12C24 5.37281 18.6272 0 12 0Z" fill="currentColor"></path>
                    <path d="M13.313 10.9143L18.45 4.94287H17.2327L12.7722 10.1278L9.20961 4.94287H5.10059L10.4879 12.7833L5.10059 19.0453H6.31797L11.0284 13.5699L14.7907 19.0453H18.8998L13.3127 10.9143H13.313ZM6.75661 5.85931H8.62643L17.2333 18.1705H15.3634L6.75661 5.85931Z" fill="#22323F"></path>
                  </svg> </a><a href="http://" class="footer-social-link" target="_blank" rel="noopener noreferrer">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M12 14.52C13.3917 14.52 14.52 13.3917 14.52 12C14.52 10.6082 13.3917 9.47998 12 9.47998C10.6082 9.47998 9.47998 10.6082 9.47998 12C9.47998 13.3917 10.6082 14.52 12 14.52Z" fill="currentColor"></path>
                    <path d="M12 0C5.37259 0 0 5.37259 0 12C0 18.6274 5.37259 24 12 24C18.6274 24 24 18.6274 24 12C24 5.37259 18.6274 0 12 0ZM19.414 15.0499C19.3564 16.1908 19.0358 17.3158 18.2044 18.1384C17.3649 18.9688 16.2346 19.2782 15.0827 19.3352H8.91734C7.76534 19.2782 6.63514 18.969 5.79566 18.1384C4.96421 17.3158 4.64366 16.1908 4.58606 15.0499V8.95008C4.64366 7.80922 4.96426 6.68419 5.79566 5.86157C6.63514 5.03117 7.76549 4.72176 8.91734 4.66478H15.0827C16.2347 4.72176 17.3649 5.03102 18.2043 5.86157C19.0358 6.68419 19.3563 7.80922 19.4139 8.95008L19.414 15.0499Z" fill="currentColor"></path>
                    <path d="M15.0047 6.05433C13.503 6.01314 10.4973 6.01314 8.99553 6.05433C8.21404 6.07578 7.3281 6.27033 6.7713 6.86505C6.19271 7.48324 5.97407 8.23012 5.95189 9.06565C5.91292 10.5321 5.95189 14.9337 5.95189 14.9337C5.97728 15.7692 6.19271 16.5162 6.7713 17.1344C7.3281 17.7293 8.21404 17.9236 8.99553 17.9451C10.4973 17.9863 13.503 17.9863 15.0047 17.9451C15.7862 17.9236 16.6722 17.7291 17.229 17.1344C17.8076 16.5162 18.0262 15.7693 18.0484 14.9337V9.06565C18.0262 8.23012 17.8076 7.48324 17.229 6.86505C16.672 6.27013 15.786 6.07578 15.0047 6.05433ZM11.9999 15.9057C11.2274 15.9057 10.4722 15.6766 9.82988 15.2474C9.18755 14.8182 8.6869 14.2082 8.39127 13.4945C8.09563 12.7807 8.01828 11.9954 8.16899 11.2377C8.31971 10.48 8.69172 9.78401 9.23798 9.23774C9.78425 8.69148 10.4802 8.31947 11.2379 8.16875C11.9956 8.01804 12.781 8.09539 13.4947 8.39103C14.2084 8.68666 14.8185 9.18731 15.2477 9.82964C15.6769 10.472 15.9059 11.2272 15.9059 11.9997C15.9059 13.0356 15.4944 14.0291 14.7619 14.7617C14.0294 15.4942 13.0359 15.9057 11.9999 15.9057ZM15.9225 8.89996C15.7681 8.89992 15.617 8.85407 15.4886 8.76821C15.3601 8.68235 15.26 8.56033 15.201 8.41758C15.1419 8.27483 15.1264 8.11776 15.1566 7.96624C15.1867 7.81471 15.2612 7.67553 15.3704 7.5663C15.4797 7.45706 15.6189 7.38268 15.7704 7.35255C15.9219 7.32243 16.079 7.33791 16.2217 7.39704C16.3645 7.45617 16.4865 7.5563 16.5723 7.68477C16.6581 7.81323 16.7039 7.96426 16.7039 8.11876C16.7039 8.22136 16.6837 8.32296 16.6445 8.41775C16.6052 8.51255 16.5476 8.59867 16.4751 8.67122C16.4025 8.74376 16.3164 8.8013 16.2216 8.84055C16.1268 8.87979 16.0252 8.89998 15.9225 8.89996Z" fill="currentColor"></path>
                  </svg> </a><a href="http://" class="footer-social-link" target="_blank" rel="noopener noreferrer">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M12 0C5.3736 0 0 5.3736 0 12C0 18.6264 5.3736 24 12 24C18.6264 24 24 18.6264 24 12C24 5.3736 18.6264 0 12 0ZM8.51294 18.1406H5.59039V9.34808H8.51294V18.1406ZM7.05176 8.14746H7.03271C6.052 8.14746 5.41772 7.47235 5.41772 6.6286C5.41772 5.76581 6.07141 5.10938 7.07117 5.10938C8.07092 5.10938 8.68616 5.76581 8.7052 6.6286C8.7052 7.47235 8.07092 8.14746 7.05176 8.14746ZM19.051 18.1406H16.1288V13.4368C16.1288 12.2547 15.7057 11.4485 14.6483 11.4485C13.8409 11.4485 13.3601 11.9923 13.1488 12.5173C13.0715 12.7051 13.0527 12.9677 13.0527 13.2305V18.1406H10.1303C10.1303 18.1406 10.1686 10.173 10.1303 9.34808H13.0527V10.593C13.441 9.9939 14.1359 9.14172 15.6865 9.14172C17.6093 9.14172 19.051 10.3984 19.051 13.099V18.1406Z" fill="currentColor"></path>
                  </svg> </a><a href="http://" class="footer-social-link" target="_blank" rel="noopener noreferrer">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M12 0C5.37188 0 0 5.37188 0 12C0 17.0859 3.16406 21.4266 7.62656 23.175C7.52344 22.2234 7.425 20.7703 7.66875 19.7344C7.88906 18.7969 9.075 13.7719 9.075 13.7719C9.075 13.7719 8.71406 13.0547 8.71406 11.9906C8.71406 10.3219 9.67969 9.075 10.8844 9.075C11.9062 9.075 12.4031 9.84375 12.4031 10.7672C12.4031 11.7984 11.7469 13.3359 11.4094 14.7609C11.1281 15.9562 12.0094 16.9313 13.1859 16.9313C15.3187 16.9313 16.9594 14.6812 16.9594 11.4375C16.9594 8.56406 14.8969 6.55313 11.9484 6.55313C8.53594 6.55313 6.52969 9.1125 6.52969 11.7609C6.52969 12.7922 6.92812 13.8984 7.425 14.4984C7.52344 14.6156 7.5375 14.7234 7.50937 14.8406C7.42031 15.2203 7.21406 16.0359 7.17656 16.2C7.125 16.4203 7.00313 16.4672 6.77344 16.3594C5.27344 15.6609 4.33594 13.4719 4.33594 11.7094C4.33594 7.92188 7.0875 4.44844 12.2625 4.44844C16.425 4.44844 19.6594 7.41563 19.6594 11.3813C19.6594 15.5156 17.0531 18.8438 13.4344 18.8438C12.2203 18.8438 11.0766 18.2109 10.6828 17.4656C10.6828 17.4656 10.0828 19.7578 9.9375 20.3203C9.66562 21.3609 8.93437 22.6688 8.44687 23.4656C9.57187 23.8125 10.7625 24 12 24C18.6281 24 24 18.6281 24 12C24 5.37188 18.6281 0 12 0Z" fill="currentColor"></path>
                  </svg> </a><a href="http://" class="footer-social-link" target="_blank" rel="noopener noreferrer">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M12.0001 0.5C9.15137 0.501478 6.39601 1.51046 4.22675 3.34652C2.05749 5.18259 0.615781 7.72601 0.159422 10.522C-0.296936 13.318 0.261805 16.1842 1.73575 18.6082C3.20969 21.0321 5.50272 22.8558 8.20481 23.753C8.80093 23.8636 9.02547 23.4941 9.02547 23.18C9.02547 22.8658 9.01355 21.955 9.00957 20.9592C5.67127 21.6804 4.96586 19.5505 4.96586 19.5505C4.4214 18.1674 3.63451 17.8039 3.63451 17.8039C2.54559 17.065 3.71599 17.0788 3.71599 17.0788C4.92215 17.1637 5.55603 18.3097 5.55603 18.3097C6.62508 20.1333 8.36377 19.6058 9.04733 19.2976C9.15463 18.5251 9.46661 17.9995 9.81038 17.7012C7.14371 17.4008 4.34192 16.3774 4.34192 11.8054C4.32539 10.6197 4.7679 9.47305 5.57789 8.60268C5.45469 8.30236 5.04336 7.08923 5.69512 5.44143C5.69512 5.44143 6.70258 5.12136 8.99568 6.66444C10.9625 6.12962 13.0377 6.12962 15.0046 6.66444C17.2957 5.12136 18.3012 5.44143 18.3012 5.44143C18.9549 7.08528 18.5436 8.29841 18.4204 8.60268C19.233 9.47319 19.6764 10.6218 19.6584 11.8094C19.6584 16.3912 16.8506 17.4008 14.18 17.6952C14.6092 18.0667 14.9927 18.7918 14.9927 19.9061C14.9927 21.5026 14.9788 22.7868 14.9788 23.18C14.9788 23.4981 15.1954 23.8695 15.8034 23.753C18.5058 22.8557 20.7991 21.0317 22.273 18.6073C23.7469 16.183 24.3054 13.3163 23.8485 10.5201C23.3916 7.7238 21.9492 5.18035 19.7792 3.34461C17.6092 1.50886 14.8532 0.500541 12.0041 0.5H12.0001Z" fill="currentColor"></path>
                    <path d="M8.02783 19.9752C8.02783 20.072 7.91656 20.155 7.77349 20.1569C7.63042 20.1589 7.51318 20.0799 7.51318 19.9831C7.51318 19.8863 7.62445 19.8033 7.76752 19.8013C7.91059 19.7993 8.02783 19.8764 8.02783 19.9752Z" fill="currentColor"></path>
                    <path d="M8.9419 19.8229C8.95978 19.9197 8.86042 20.0205 8.71735 20.0442C8.57428 20.0679 8.4491 20.0106 8.43121 19.9158C8.41333 19.8209 8.51666 19.7182 8.65576 19.6925C8.79485 19.6668 8.92401 19.7261 8.9419 19.8229Z" fill="currentColor"></path>
                    <path d="M7.04617 19.9079C7.01637 20.0008 6.88124 20.0423 6.74612 20.0027C6.611 19.9632 6.52158 19.8526 6.54741 19.7577C6.57325 19.6629 6.71036 19.6194 6.84747 19.6629C6.98457 19.7064 7.07201 19.8111 7.04617 19.9079Z" fill="currentColor"></path>
                    <path d="M6.14612 19.5207C6.08054 19.5939 5.94741 19.5741 5.83812 19.4753C5.72883 19.3765 5.70299 19.2422 5.76857 19.171C5.83414 19.0999 5.96727 19.1197 6.08054 19.2165C6.1938 19.3133 6.21566 19.4496 6.14612 19.5207Z" fill="currentColor"></path>
                    <path d="M5.50437 18.8568C5.43085 18.9082 5.30565 18.8568 5.2361 18.754C5.21687 18.7356 5.20158 18.7135 5.19113 18.6891C5.18068 18.6646 5.17529 18.6383 5.17529 18.6118C5.17529 18.5852 5.18068 18.5589 5.19113 18.5345C5.20158 18.5101 5.21687 18.488 5.2361 18.4695C5.30963 18.4201 5.43482 18.4695 5.50437 18.5703C5.57391 18.6711 5.5759 18.8054 5.50437 18.8568Z" fill="currentColor"></path>
                    <path d="M5.03123 18.1711C4.99008 18.1918 4.943 18.1975 4.89805 18.1874C4.8531 18.1773 4.81308 18.152 4.78483 18.1158C4.70734 18.0328 4.69143 17.9182 4.75104 17.8669C4.81066 17.8155 4.91797 17.8392 4.99546 17.9222C5.07296 18.0052 5.09084 18.1198 5.03123 18.1711Z" fill="currentColor"></path>
                    <path d="M4.54456 17.6321C4.51873 17.6914 4.42335 17.7092 4.34585 17.6677C4.26835 17.6262 4.21073 17.5491 4.23855 17.4879C4.26637 17.4266 4.35976 17.4108 4.43726 17.4523C4.51476 17.4938 4.57436 17.5729 4.54456 17.6321Z" fill="currentColor"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
        </>
    )
}

export { Footer } 