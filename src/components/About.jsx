import React from "react";

export default function About() {
  return (
    <div class="container-fluid">
      <div id="about" class="row about-section">
        <div class="col-lg-4 about-card">
          <h3 class="font-weight-light">Who am I ?</h3>
          <span class="line mb-5"></span>
          <h5 class="mb-3">A Web Developer / MERN Developer</h5>
          <p class="mt-20">
            An aspiring Full-Stack Web Developer with a strong interest in
            projects requiring conceptual and analytical thinking.
            Self-motivated and hardworking fresher seeking an opportunity to
            work in a challenging environment to prove my skills and utilize my
            knowledge & intelligence in the growth of the organization
          </p>
          <button class="btn btn-outline-danger">
            <i class="icon-down-circled2 "></i>
            <a
              href="http://res.cloudinary.com/dey09e5yr/image/upload/v1685623935/uploads/gn8s2lhvqolxs6nrks8z.jpg"
              download
              target="_blank"
            >
              {" "}
              Download My Cv
            </a>
          </button>
        </div>
        <div class="col-lg-4 about-card">
          <h3 class="font-weight-light">Personal Info</h3>
          <span class="line mb-5"></span>
          <ul class="mt40 info list-unstyled">
            <li>
              <span>Birthdate</span> : 05/08/2003
            </li>
            <li>
              <span>Email</span> : priyprakashpandey@gmail.com
            </li>
            <li>
              <span>Phone</span> : +91 7079485607
            </li>
            <li>
              <span>Address</span> : Buxar , Bihar (India)
            </li>
          </ul>
          <ul class="social-icons pt-3">
            <li class="social-item">
              <a
                class="social-link"
                target="_blank"
                href="https://twitter.com/PrakashP0508"
              >
                <i class="ti-twitter" title="twitter" aria-hidden="true"></i>
              </a>
            </li>
            <li class="social-item">
              <a
                class="social-link"
                target="_blank"
                href="https://www.linkedin.com/in/prakash-pandey-78313724a/"
              >
                <i class="ti-linkedin" title="linkedin" aria-hidden="true"></i>
              </a>
            </li>
            <li class="social-item">
              <a
                class="social-link"
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
                class="social-link"
                target="_blank"
                href="https://github.com/prakash270508"
              >
                <i class="ti-github" title="github" aria-hidden="true"></i>
              </a>
            </li>
          </ul>
        </div>
        <div class="col-lg-4 about-card">
          <h3 class="font-weight-light">My Expertise</h3>
          <span class="line mb-5"></span>
          <div class="row">
            <div class="col-1 text-danger pt-1">
              <i class="ti-paint-bucket icon-lg"></i>
            </div>
            <div class="col-10 ml-auto mr-3">
              <h6>Web Development</h6>
              <p class="subtitle">Develop a full stack website</p>
              <hr />
            </div>
          </div>
          <div class="row">
            <div class="col-1 text-danger pt-1">
              <i class="ti-widget icon-lg"></i>
            </div>
            <div class="col-10 ml-auto mr-3">
              <h6>UX Design</h6>
              <p class="subtitle">Design Websites </p>
              <hr />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
