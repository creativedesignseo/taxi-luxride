import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import ReactGA from 'react-ga4';

const TRACKING_ID = "G-RLJD3KBT0J";

/**
 * AnalyticsTracker Component
 * Initializes Google Analytics 4 and tracks page views on route changes.
 */
const AnalyticsTracker = () => {
  const location = useLocation();
  const [initialized, setInitialized] = useState(false);

  // Initialize GA4 once
  useEffect(() => {
    if (!window.location.href.includes("localhost")) {
      ReactGA.initialize(TRACKING_ID);
      setInitialized(true);
      console.log("GA4 Initialized");
    }
  }, []);

  // Track page views
  useEffect(() => {
    if (initialized) {
      ReactGA.send({ hitType: "pageview", page: location.pathname + location.search });
    }
  }, [initialized, location]);

  return null;
};

export default AnalyticsTracker;
