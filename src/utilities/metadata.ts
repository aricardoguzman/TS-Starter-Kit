export const updateMetadata = ({ title, description, url, image, imageAlt }: any) => {
    if (title) {
        document.title = title;
        setMetaTag('property', 'og:title', title);
    }
    if (description) {
        setMetaTag('name', 'description', description);
        setMetaTag('property', 'og:description', description);
    }
    if (image) {
        setMetaTag('property', 'og:image', image);
    }
    if (imageAlt) {
        setMetaTag('property', 'og:image:alt', imageAlt);
    }
    url = url || window.location.href;
    setMetaTag('property', 'og:url', url);
};
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
export function setMetaTag(attrName: string, attrValue: string, content: any) {
    let element = document.head.querySelector(`meta[${attrName}="${attrValue}"]`);
    if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attrName, attrValue);
        document.head.appendChild(element);
    }
    element.setAttribute('content', content || '');
}