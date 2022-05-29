import React, { useState } from "react";
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import samplePDF from "./index.pdf";
export default function AllPages(props) {
  const [numPages, setNumPages] = useState(null);

  function onDocumentLoadSuccess({ numPages }) {
      console.log(numPages)
    setNumPages(numPages);
  }


  return (
    <Document
      file="http://www.pdf995.com/samples/pdf.pdf"
   
      onLoadSuccess={onDocumentLoadSuccess}
    >
      {Array.from(new Array(numPages), (el, index) => (
        <Page key={`page_${index + 1}`} pageNumber={index + 1} />
      ))}
    </Document>
  );
}
