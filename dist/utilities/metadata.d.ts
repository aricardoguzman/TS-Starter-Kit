export declare const updateMetadata: ({ title, description, url, image, imageAlt }: any) => void;
/**
  Utility method to create or update the content of a meta tag based on an
  attribute name/value pair.

  Example (in your top level element or document, or in the router callback):

      import { setMetaTag } from 'pwa-helpers/metadata.js';

      setMetaTag('name', 'twitter:card', 'summary');
      
  This would create the following meta tag in the head of the document (or
  update the content attribute if a meta tag with name="twitter:card" exists):

      <meta name="twitter:card" content="summary">

*/
export declare function setMetaTag(attrName: string, attrValue: string, content: any): void;
//# sourceMappingURL=metadata.d.ts.map