import Container from "@/components/common/Container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { getCurrentUser } from "@/lib/auth";
import dbConnect from "@/lib/dbConnect";
import { User } from "@/models/user.model";
import LogoutBtn from "./_components/LogoutBtn";

const ProfilePage = async () => {
  const session = await getCurrentUser();
  await dbConnect();

  const user = await User.findOne({ _id: session?.userId }).lean();

  return (
    <section className="py-12">
      <Container>
        <div className="mx-auto max-w-3xl space-y-8">
          {/* Page Title */}
          <h1 className="text-3xl font-bold">My Profile</h1>

          {/* Profile Card */}
          <div className="rounded-lg border bg-background p-6">
            <div className="flex items-start justify-between">
              <div>
                <h2 className="text-xl font-semibold">{user.name}</h2>
                <p className="text-sm text-muted-foreground">{user.email}</p>
              </div>

              <Badge variant="secondary" className="capitalize">
                {user.role}
              </Badge>
            </div>

            <div className="mt-6 space-y-4 text-sm">
              <div className="flex justify-between border-b pb-2">
                <span className="text-muted-foreground">User ID</span>
                <span className="font-mono text-xs">{user._id.toString()}</span>
              </div>

              <div className="flex justify-between border-b pb-2">
                <span className="text-muted-foreground">Account Created</span>
                <span>{new Date(user.createdAt).toLocaleDateString()}</span>
              </div>

              <div className="flex justify-between">
                <span className="text-muted-foreground">Last Updated</span>
                <span>{new Date(user.updatedAt).toLocaleDateString()}</span>
              </div>
            </div>

            {/* Actions */}
            <div className="mt-6 flex gap-3">
              <Button>Edit Profile</Button>
              <Button variant="outline">Change Password</Button>
              <LogoutBtn variant={"destructive"} />
            </div>
          </div>

          {/* Account Overview */}
          <div className="rounded-lg border bg-background p-6">
            <h3 className="mb-4 text-lg font-semibold">Account Overview</h3>

            <div className="grid grid-cols-2 gap-4 md:grid-cols-4 text-center">
              <div className="rounded-md bg-accent p-4">
                <p className="text-xl font-bold">0</p>
                <p className="text-sm text-muted-foreground">Orders</p>
              </div>

              <div className="rounded-md bg-accent p-4">
                <p className="text-xl font-bold">৳ 0</p>
                <p className="text-sm text-muted-foreground">Total Spent</p>
              </div>

              <div className="rounded-md bg-accent p-4">
                <p className="text-xl font-bold">0</p>
                <p className="text-sm text-muted-foreground">Active Orders</p>
              </div>

              <div className="rounded-md bg-accent p-4">
                <p className="text-xl font-bold">0</p>
                <p className="text-sm text-muted-foreground">Wishlist</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ProfilePage;
