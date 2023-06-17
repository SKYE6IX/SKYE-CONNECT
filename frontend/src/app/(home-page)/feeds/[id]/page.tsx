import SinglePostTemplate from '@/components/template/posts/SinglePostTemplate';

const Page = ({ params }: { params: { id: string } }) => {
  return <SinglePostTemplate post_id={params.id} />;
};

export default Page;
