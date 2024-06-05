import { Avatar } from "@mui/material";
import Button from "@mui/material/Button";
import Switch from "@mui/material/Switch";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from '@mui/material/InputLabel';
import FormControl from "@mui/material/FormControl";

function ProfilePage() {
  return (
    <div className="container xxs:pt-28 md:pt-24 px-4 md:px-6 lg:px-8 bg-gray-200 min-w-full min-h-screen pb-8">
      <h1 className="mb-8 text-3xl font-bold">Profile Settings</h1>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        
        <div className="rounded-lg bg-white p-6 shadow">
          <h2 className="mb-4 text-xl font-bold">Basic Information</h2>
          <div className="flex items-center space-x-4">
            <Avatar>
              <img src="images/2.jpg" alt="Travis Howard" />
            </Avatar>
            <div>
              <div className="text-lg font-medium">John Doe</div>
              <div className="text-gray-500">john@example.com</div>
            </div>
          </div>
          <div className="mt-6 space-y-4">
            <div>
              <FormControl sx={{ width: '100%' }}> 
                <InputLabel size="normal" focused>Name</InputLabel>
                <OutlinedInput label="Name" id="name" defaultValue="John Doe" />
              </FormControl> 
            </div>
            <div>
              <FormControl sx={{ width: '100%' }}> 
                <InputLabel size="normal" focused>Email</InputLabel>
                <OutlinedInput label="Email" id="email" type="email" defaultValue="john@example.com" disabled />
              </FormControl>
            </div>
            <Button variant="outlined" className="w-full">Update</Button>
          </div>
        </div>
        <div className="rounded-lg bg-white p-6 shadow">
          <h2 className="mb-4 text-xl font-bold">Change Password</h2>
          <div className="space-y-4">
            <div>
              <FormControl sx={{ width: '100%' }}>
                <InputLabel size="normal" focused>Current Password</InputLabel>
                <OutlinedInput label="Current Password" id="currentPassword" type="password" />
              </FormControl>
            </div>
            <div>
              <FormControl sx={{ width: '100%' }}>
                <InputLabel size="normal" focused>New Password</InputLabel>
                <OutlinedInput label="New Password" id="newPassword" type="password" />
              </FormControl>
            </div>
            <div>
              <FormControl sx={{ width: '100%' }}>
                <InputLabel size="normal" focused>Confirm Password</InputLabel>
                <OutlinedInput label="Confirm Password" id="confirmPassword" type="password" />
              </FormControl>
            </div>
            <Button variant="outlined" className="w-full">Update Password</Button>
          </div>
        </div>
        <div className="rounded-lg bg-white p-6 shadow">
          <h2 className="mb-4 text-xl font-bold">Notification Preferences ( Experimental )</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-lg font-medium">Email Notifications</div>
                <div className="text-gray-500">
                  Receive email updates about your account and activity.
                </div>
              </div>
              <Switch />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <div className="text-lg font-medium">Push Notifications</div>
                <div className="text-gray-500">Receive push notifications on your devices.</div>
              </div>
              <Switch />
            </div>
          </div>
        </div>
        <div className="rounded-lg bg-white p-6 shadow">
          <h2 className="mb-4 text-xl font-bold">Account Deletion</h2>
          <div className="space-y-4">
            <div>
              <div className="text-gray-500">
                Deleting your account is a permanent action and cannot be undone. All your data and account information
                will be permanently removed.
              </div>
            </div>
            <Button color="error" variant="outlined" className="w-full">
              Delete Account
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfilePage;
