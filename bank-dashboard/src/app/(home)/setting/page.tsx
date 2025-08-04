import { cookies } from 'next/headers';

// Components
import {
  EditProfileForm,
  PreferencesTab,
  SecurityTab,
} from '@/components/features';
import { Tabs } from '@/components/ui/Tabs';

// Services
import { getUserLoggedIn } from '@/services';

const SettingPage = async () => {
  const cookieStore = await cookies();
  const userId = cookieStore.get('userId')?.value || '';
  const token = cookieStore.get('token')?.value || '';
  const { data: user } = await getUserLoggedIn(token, userId);

  const TABS_DATA = [
    {
      value: 'editProfile',
      label: 'Edit Profile',
      content: <EditProfileForm user={user} token={token} />,
    },
    {
      value: 'preferences',
      label: 'Preferences',
      content: <PreferencesTab />,
    },
    {
      value: 'security',
      label: 'Security',
      content: <SecurityTab />,
    },
  ];

  return (
    <div className="py-5 px-6">
      <Tabs
        tabs={TABS_DATA}
        className="bg-card rounded-2xl p-10"
        extraStyle="gap-2 md:gap-10 pb-0"
      />
    </div>
  );
};

export default SettingPage;
