import React from "react";
import "./ServiceMarquee.css";

const ServiceMarquee = () => {
  return (
    <section className="marquee-section">

      {/* First Marquee */}
      <div className="marquee">
        <div className="marquee-track">
          <div className="service-card">🌐<h3>Web Development</h3><p>Building responsive modern websites.</p></div>
          <div className="service-card">📱<h3>App Development</h3><p>Creating scalable mobile apps.</p></div>
          <div className="service-card">💻<h3>Full Stack Dev</h3><p>Frontend + Backend solutions.</p></div>
          <div className="service-card">🎨<h3>UI / UX Design</h3><p>Beautiful user interfaces.</p></div>
          <div className="service-card">🔗<h3>API Integration</h3><p>Seamless data connectivity.</p></div>
          <div className="service-card">☁️<h3>Cloud Deploy</h3><p>Deploy & scale apps.</p></div>

          {/* duplicated */}
          <div className="service-card">🌐<h3>Web Development</h3><p>Building responsive modern websites.</p></div>
          <div className="service-card">📱<h3>App Development</h3><p>Creating scalable mobile apps.</p></div>
          <div className="service-card">💻<h3>Full Stack Dev</h3><p>Frontend + Backend solutions.</p></div>
          <div className="service-card">🎨<h3>UI / UX Design</h3><p>Beautiful user interfaces.</p></div>
          <div className="service-card">🔗<h3>API Integration</h3><p>Seamless data connectivity.</p></div>
          <div className="service-card">☁️<h3>Cloud Deploy</h3><p>Deploy & scale apps.</p></div>
        </div>
      </div>

      {/* Second Marquee */}
      <div className="marquee reverse">
        <div className="marquee-track">
          <div className="service-card">🚀<h3>Performance</h3><p>Fast-loading apps.</p></div>
          <div className="service-card">🔒<h3>Security</h3><p>Safe development.</p></div>
          <div className="service-card">🧠<h3>AI Integration</h3><p>Smart automation.</p></div>
          <div className="service-card">⚙️<h3>Maintenance</h3><p>Smooth performance.</p></div>
          <div className="service-card">🌍<h3>SEO</h3><p>Boost visibility.</p></div>
          <div className="service-card">💬<h3>Support</h3><p>24/7 assistance.</p></div>

          {/* duplicated */}
          <div className="service-card">🚀<h3>Performance</h3><p>Fast-loading apps.</p></div>
          <div className="service-card">🔒<h3>Security</h3><p>Safe development.</p></div>
          <div className="service-card">🧠<h3>AI Integration</h3><p>Smart automation.</p></div>
          <div className="service-card">⚙️<h3>Maintenance</h3><p>Smooth performance.</p></div>
          <div className="service-card">🌍<h3>SEO</h3><p>Boost visibility.</p></div>
          <div className="service-card">💬<h3>Support</h3><p>24/7 assistance.</p></div>
        </div>
      </div>

      {/* Fades */}
      <div className="fade-left"></div>
      <div className="fade-right"></div>
       

       
      {/* Blur divider */}
      <div className="service-divider"></div>
       {/* Heading */}
      <div className="service-heading">
        <h2>My Services</h2>
        <p>I build high-quality digital products that help brands grow.</p>
      </div>
    </section>
  );
};

export default ServiceMarquee;
