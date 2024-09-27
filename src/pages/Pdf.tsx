import { PdfViewer } from '@naverpay/react-pdf';
//import '@naverpay/react-pdf/index.css'

const PDF = () => {
  return <PdfViewer pdfUrl={`${process.env.NEXT_PUBLIC_R2_URL}/wakttu.pdf`} />;
};

export default PDF;
