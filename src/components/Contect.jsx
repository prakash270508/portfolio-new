import React from "react";

export default function Contect() {
  return (
    <div class="section contact" id="contact" style={{ marginTop: "2vw" }}>
      <div id="map" class="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14643.78029088155!2d83.98006679307211!3d25.56208379213321!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3991c8a4e32aaf83%3A0xb2529e9a8132dd52!2sBuxar%2C%20Bihar!5e0!3m2!1sen!2sin!4v1622572402930!5m2!1sen!2sin"
          width={1513}
          height="700"
          loading="lazy"
        ></iframe>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-lg-8">
            <div class="contact-form-card">
              <h4 class="contact-title">Send a message</h4>
              <form action="https://formspree.io/f/mrgvwlyv" method="POST">
                <div class="form-group">
                  <input
                    class="form-control"
                    type="text"
                    placeholder="Name *"
                    name="name"
                    required
                  />
                </div>
                <div class="form-group">
                  <input
                    class="form-control"
                    type="email"
                    placeholder="Email *"
                    name="email"
                    required
                  />
                </div>
                <div class="form-group">
                  <textarea
                    class="form-control"
                    id=""
                    placeholder="Message *"
                    rows="7"
                    name="message"
                    required
                  ></textarea>
                </div>
                <div class="form-group ">
                  <button type="submit" class="form-control btn btn-primary">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="contact-info-card">
              <h4 class="contact-title">Get in touch</h4>
              <div class="row mb-2">
                <div class="col-1 pt-1 mr-1">
                  <i class="ti-mobile icon-md"></i>
                </div>
                <div class="col-10 ">
                  <h6 class="d-inline">
                    Phone : <br />{" "}
                    <span class="text-muted">+91 7079485607</span>
                  </h6>
                </div>
              </div>
              <div class="row mb-2">
                <div class="col-1 pt-1 mr-1">
                  <i class="ti-map-alt icon-md"></i>
                </div>
                <div class="col-10">
                  <h6 class="d-inline">
                    Address :<br />{" "}
                    <span class="text-muted">Buxar , Bihar (India)</span>
                  </h6>
                </div>
              </div>
              <div class="row mb-2">
                <div class="col-1 pt-1 mr-1">
                  <i class="ti-envelope icon-md"></i>
                </div>
                <div class="col-10">
                  <h6 class="d-inline">
                    Email :<br />{" "}
                    <span class="text-muted">priyprakashpandey@gmail.com</span>
                  </h6>
                </div>
              </div>
              <ul class="social-icons pt-4">
                <li class="social-item">
                  <a
                    class="social-link text-dark"
                    target="_blank"
                    href="https://twitter.com/PrakashP0508"
                  >
                    <i
                      class="ti-twitter"
                      title="twitter"
                      aria-hidden="true"
                    ></i>
                  </a>
                </li>
                <li class="social-item">
                  <a
                    class="social-link text-dark"
                    target="_blank"
                    href="https://www.linkedin.com/in/prakash-pandey-78313724a/"
                  >
                    <i
                      class="ti-linkedin"
                      title="linkedin"
                      aria-hidden="true"
                    ></i>
                  </a>
                </li>
                <li class="social-item">
                  <a
                    class="social-link text-dark"
                    target="_blank"
                    href="https://www.instagram.com/prakashpandey_0508/?next=%2F"
                  >
                    <i
                      class="ti-instagram"
                      title="instagram"
                      aria-hidden="true"
                    ></i>
                  </a>
                </li>
                <li class="social-item">
                  <a
                    class="social-link text-dark"
                    target="_blank"
                    href="https://github.com/prakash270508"
                  >
                    <i class="ti-github" title="github" aria-hidden="true"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
