import React, { ReactNode } from 'react';

export interface GoogleContactFormProps {
  children?: ReactNode;
  className?: string;
  verbose?: boolean;
}

export function GoogleContactForm({ children, className, verbose }: GoogleContactFormProps) {
  return (
    <div className={className} style={{ padding: '20px' }}>
      <p>Hello there! {verbose && 'Really nice to meet you!'}</p>
      <div>{children}</div>
      <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfpNEsXa1bGEMLtDDRDRxGkZotW_XdRUChk2pk4zmUKXJrSeQ/viewform?embedded=true" width="640" height="1564" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
    </div>
  );
}