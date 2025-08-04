import { cookies } from 'next/headers';

// Components
import { EditProfileForm } from '@/components/features';

// Services
import { getUserLoggedIn } from '@/services';

const SettingPage = async () => {
  const cookieStore = await cookies();
  const userId = cookieStore.get('userId')?.value || '';
  const token = cookieStore.get('token')?.value || '';
  const { data: user } = await getUserLoggedIn(token, userId);

  return (
    <div className="py-5 px-6">
      <EditProfileForm user={user ?? undefined} token={token} />
    </div>
  );
};

export default SettingPage;
