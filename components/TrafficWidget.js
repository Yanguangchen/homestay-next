"use client";

import { useEffect, useState } from "react";
import style from "./traffic.module.css";

import { db } from "../lib/firebaseConfig";
import { doc, getDoc } from "firebase/firestore";

export default function TrafficWidget() {
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchUserData() {
      try {
        const start = performance.now();
        const userRef = doc(db, "MedTrustHub", "5thWeLmi7aMQMX7OTYB8");
        const userSnap = await getDoc(userRef);
        const end = performance.now();
        const ping = Math.round(end - start);

        if (userSnap.exists()) {
          const data = userSnap.data();
          setUserData({ ...data, _ping: ping });
        } else {
          console.log("No such document!");
        }
      } catch (err) {
        console.error("Failed to load user data", err);
        setError("Failed to load user data.");
      }
    }

    fetchUserData();

    // Live-update the ping every second
    const interval = setInterval(fetchUserData, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="wrap">
      <div className={style.status}>
        <span className={`${style.dot} ${error ? style.down : ""}`} aria-hidden="true" />
        {error ? (
          <span>{error}</span>
        ) : !userData ? (
          <span>Checking database…</span>
        ) : (
          <>
            <span>
              <strong>Database:</strong> {userData["Database Connection Status"]}
            </span>
            <span className={style.ping}>
              Google Firestore ping <b>{userData?._ping ?? "N/A"} ms</b>
            </span>
          </>
        )}
        <img src="/Assets/firebase.png" alt="Firebase" className={style.logo} />
      </div>
    </div>
  );
}
