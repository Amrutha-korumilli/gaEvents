export const pageview = (url) => {
    if (typeof window !== 'undefined') {
        window.gtag('config', process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS, {
            page_path: url,
          })
      }
    
  }
  
  // log specific events happening.
  export const event = ({ action, category, label, value }) => {
    console.log("clicked")
      window.gtag("event", action, {
        event_category: category,
        event_label: label,
        value,
      });
    };
  