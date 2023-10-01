import Image from 'next/image';

const AuthorAvatar: React.FC<{}> = () => (
  <div className="flex items-center">
    <div className="relative mr-4 h-12 w-12">
      <Image
        src={"https://source.unsplash.com/96x96/?face"}
        className="rounded-full"
        height={96}
        width={96}
        alt="Author name"
      />
    </div>
    <div className="text-xl font-bold">Author name</div>
  </div>
);

export default AuthorAvatar;
