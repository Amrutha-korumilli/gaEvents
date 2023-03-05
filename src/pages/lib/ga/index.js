export const pageview = (url) => {
    if (typeof window !== 'undefined') {
        window.gtag('config', process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS, {
            page_path: url,
          })
      }
    
  }
  
  // log specific events happening.
  export const useGAEventsTracker = (category = "Event category")=>{
    const trackEvent = (action = "action",label = "label")=>{
        window.gtag({category,action,label})
    }
    return trackEvent;
  }
  