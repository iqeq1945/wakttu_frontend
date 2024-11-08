interface PDFViewerProps {
  url: string;
}

const PDFViewer = ({ url }: PDFViewerProps) => {
  return (
    <div style={{ width: '100%', height: '100vh' }}>
      <iframe src={url} width="100%" height="100%" style={{ border: 'none' }} />
    </div>
  );
};

export default PDFViewer;
