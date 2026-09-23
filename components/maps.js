import React from "react";
import "./Maps.css";

function Maps() {
  return (
    <section className="maps-section">
      <div className="wrap">
        <div className="maps-head" data-reveal>
          <div>
            <p className="eyebrow">Locate us</p>
            <h2 className="section-title">Right where you land.</h2>
          </div>
          <p className="maps-address">
            JustCo – Changi Airport Terminal 3
            <br />
            Coworking &amp; Office Space, 65 Airport Blvd., #03-37 Terminal 3,
            Singapore 819663
          </p>
        </div>
        <div className="GridMaps" data-reveal>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.7016930832274!2d103.98362127496583!3d1.3555804986315954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da3d509e1a9371%3A0x8fc4333abd410c31!2sJustCo%20%E2%80%93%20Changi%20Airport%20Terminal%203%20%7C%20Coworking%20%26%20Office%20Space!5e0!3m2!1sen!2ssg!4v1724223727606!5m2!1sen!2ssg"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Map to our office at Changi Airport Terminal 3"
          ></iframe>
        </div>
      </div>
    </section>
  );
}

export default Maps;
