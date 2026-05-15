export {}

declare global {
  interface Window {
    VANTA?: {
      DOTS: (options: Record<string, unknown>) => {
        destroy: () => void
      }
    }
  }
}