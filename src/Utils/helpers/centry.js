import * as Sentry from "@sentry/react"
import { BrowserTracing } from "@sentry/tracing"

const initSentry = () => {
  if (!process.env.NODE_ENV || process.env.NODE_ENV === "production") {
    Sentry.init({
      dsn: "https://6f2287394f284ddfa5d51f7d29284460@o1135082.ingest.sentry.io/6183624",
      integrations: [new BrowserTracing()],

      // Set tracesSampleRate to 1.0 to capture 100%
      // of transactions for performance monitoring.
      // We recommend adjusting this value in production
      tracesSampleRate: 1.0,
    })
  }
}

export default initSentry
