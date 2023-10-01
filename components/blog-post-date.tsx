import { format, parseISO } from 'date-fns';

type PostDateProps = {
  dateString: string;
};

const PostDate: React.FC<PostDateProps> = ({ dateString }) => {
  if (!dateString) return null;

  const date = parseISO(dateString);
  return <time dateTime={dateString}>{format(date, 'LLLL	d, yyyy')}</time>;
};

export default PostDate;
