import Container from "@/components/common/Container";
import ClientProfile from "./_components/ClientProfile";

const ProfilePage = () => {
  return (
    <Container className="mx-auto max-w-3xl space-y-8">
              {/* Page Title */}
          <h1 className="text-3xl font-bold">My Profile</h1>
      <ClientProfile />
    </Container>
  );
};

export default ProfilePage;
