import React from "react";
import "./Maps.css";

function Maps() {
  return (
    <div>
      <div className="maps">
        <h1>Locate Us!</h1>
        <b>
          <p>JustCo – Changi Airport Terminal 3 <br></br> Coworking & Office Space
          65 Airport Blvd., #03-37 Terminal 3, Singapore 819663</p>
        </b>
        <div className="GridMaps">
          <div className="grid1maps">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.7016930832274!2d103.98362127496583!3d1.3555804986315954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da3d509e1a9371%3A0x8fc4333abd410c31!2sJustCo%20%E2%80%93%20Changi%20Airport%20Terminal%203%20%7C%20Coworking%20%26%20Office%20Space!5e0!3m2!1sen!2ssg!4v1724223727606!5m2!1sen!2ssg"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Map 1"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Maps;