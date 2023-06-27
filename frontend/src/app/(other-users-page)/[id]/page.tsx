import OtherUsersProfilePage from '@/components/template/dashboard/OtherUsersProfilePage';

const Page = ({ params }: { params: { id: string } }) => {
  return <OtherUsersProfilePage user_id={params.id} />;
};

export default Page;
