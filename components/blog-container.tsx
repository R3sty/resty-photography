type BlogContainerProps = {
  children: React.ReactNode;
};

const BlogContainer: React.FC<BlogContainerProps> = ({ children }) => {
  return <div className="container mx-auto px-5">{children}</div>;
}

export default BlogContainer;
