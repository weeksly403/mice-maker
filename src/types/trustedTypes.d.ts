/**
 * Trusted Types API Type Definitions
 * Global type declarations for DOM XSS mitigation
 */

declare global {
  interface Window {
    trustedTypes?: {
      createPolicy: (
        name: string,
        policy: {
          createHTML?: (input: string) => string;
          createScript?: (input: string) => string;
          createScriptURL?: (input: string) => string;
        }
      ) => TrustedTypePolicy;
    };
  }

  interface TrustedTypePolicy {
    createHTML: (input: string) => TrustedHTML;
    createScript: (input: string) => TrustedScript;
    createScriptURL: (input: string) => TrustedScriptURL;
  }

  interface TrustedHTML {
    toString(): string;
  }

  interface TrustedScript {
    toString(): string;
  }

  interface TrustedScriptURL {
    toString(): string;
  }
}

export {};
