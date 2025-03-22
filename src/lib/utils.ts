// Simple utility to join class names without external dependencies
export function cn(...inputs: (string | undefined | null | false | 0)[]) {
    return inputs.filter(Boolean).join(" ")
  }
  
  