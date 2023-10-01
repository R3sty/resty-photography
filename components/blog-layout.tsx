type BlogLayoutProps = {
  preview?: boolean;
  loading?: boolean;
  children: React.ReactNode;
};

const BlogLayout: React.FC<BlogLayoutProps> = ({ preview, loading, children }) => {
  return (
    <div className="min-h-screen">
      {/* <AlertBanner preview={preview} loading={loading} /> */}
      <main>{children}</main>
    </div>
  );
}

export default BlogLayout;
