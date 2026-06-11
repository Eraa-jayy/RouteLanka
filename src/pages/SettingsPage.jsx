import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Settings as SettingsIcon, Save, Key, Bell, Palette } from 'lucide-react';
import { Card, Button, Input } from '../components/common';
import { DashboardLayout } from '../components/layout/DashboardLayout';
import { useAuth } from '../hooks/useContext';

export const SettingsPage = () => {
  const { user } = useAuth();
  const [saving, setSaving] = useState(false);
  const [profileData, setProfileData] = useState({
    fullName: user?.name || '',
    email: user?.email || '',
    company: user?.company || '',
    phone: '+91-98765-43210',
  });

  const [companyData, setCompanyData] = useState({
    registrationNumber: 'TRN-123456789',
    pan: 'AAABP1234C',
    gst: '18AABCU1234H1Z0',
    address: '123 Fleet Street, Bangalore, 560034',
    city: 'Bangalore',
    state: 'Karnataka',
  });

  const [notificationSettings, setNotificationSettings] = useState({
    emailNotifications: true,
    smsAlerts: true,
    pushNotifications: true,
    maintenanceReminders: true,
    bookingUpdates: true,
    financialReports: false,
  });

  const [themeSettings, setThemeSettings] = useState({
    theme: 'light',
    language: 'en',
    dateFormat: 'dd-mm-yyyy',
  });

  const handleSaveProfile = async () => {
    setSaving(true);
    setTimeout(() => {
      setSaving(false);
      alert('Profile updated successfully!');
    }, 1000);
  };

  const SettingSection = ({ icon: Icon, title, description, children }) => (
    <Card>
      <div className="flex items-start gap-4 mb-6 pb-6 border-b border-gray-200">
        <div className="p-3 bg-primary-100 rounded-lg">
          <Icon className="text-primary-600" size={24} />
        </div>
        <div>
          <h2 className="text-xl font-bold text-gray-900">{title}</h2>
          <p className="text-sm text-gray-600">{description}</p>
        </div>
      </div>
      {children}
    </Card>
  );

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Settings</h1>
            <p className="text-gray-600 mt-1">Manage your account and application preferences</p>
          </div>
        </motion.div>

        {/* Profile Settings */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <SettingSection
            icon={SettingsIcon}
            title="Profile Settings"
            description="Update your personal information"
          >
            <div className="space-y-4 mb-6">
              <div className="flex items-center gap-4">
                <img
                  src={user?.avatar}
                  alt={user?.name}
                  className="w-16 h-16 rounded-full"
                />
                <Button variant="secondary" size="sm">
                  Change Avatar
                </Button>
              </div>

              <Input
                label="Full Name"
                type="text"
                value={profileData.fullName}
                onChange={(e) => setProfileData({ ...profileData, fullName: e.target.value })}
              />

              <Input
                label="Email Address"
                type="email"
                value={profileData.email}
                onChange={(e) => setProfileData({ ...profileData, email: e.target.value })}
              />

              <Input
                label="Company Name"
                type="text"
                value={profileData.company}
                onChange={(e) => setProfileData({ ...profileData, company: e.target.value })}
              />

              <Input
                label="Phone Number"
                type="tel"
                value={profileData.phone}
                onChange={(e) => setProfileData({ ...profileData, phone: e.target.value })}
              />
            </div>

            <Button
              variant="primary"
              loading={saving}
              onClick={handleSaveProfile}
              className="flex items-center gap-2"
            >
              <Save size={16} /> Save Changes
            </Button>
          </SettingSection>
        </motion.div>

        {/* Company Settings */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <SettingSection
            icon={SettingsIcon}
            title="Company Settings"
            description="Manage your company information"
          >
            <div className="space-y-4 mb-6">
              <Input
                label="Business Registration Number"
                type="text"
                value={companyData.registrationNumber}
                onChange={(e) => setCompanyData({ ...companyData, registrationNumber: e.target.value })}
              />

              <Input
                label="PAN"
                type="text"
                value={companyData.pan}
                onChange={(e) => setCompanyData({ ...companyData, pan: e.target.value })}
              />

              <Input
                label="GST Number"
                type="text"
                value={companyData.gst}
                onChange={(e) => setCompanyData({ ...companyData, gst: e.target.value })}
              />

              <Input
                label="Address"
                type="text"
                value={companyData.address}
                onChange={(e) => setCompanyData({ ...companyData, address: e.target.value })}
              />

              <div className="grid grid-cols-2 gap-4">
                <Input
                  label="City"
                  type="text"
                  value={companyData.city}
                  onChange={(e) => setCompanyData({ ...companyData, city: e.target.value })}
                />
                <Input
                  label="State"
                  type="text"
                  value={companyData.state}
                  onChange={(e) => setCompanyData({ ...companyData, state: e.target.value })}
                />
              </div>
            </div>

            <Button variant="primary" className="flex items-center gap-2">
              <Save size={16} /> Save Company Info
            </Button>
          </SettingSection>
        </motion.div>

        {/* Notification Settings */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <SettingSection
            icon={Bell}
            title="Notification Settings"
            description="Control how you receive notifications"
          >
            <div className="space-y-4 mb-6">
              {Object.entries(notificationSettings).map(([key, value]) => (
                <div key={key} className="flex items-center justify-between">
                  <label className="text-gray-700 font-medium capitalize">
                    {key.replace(/([A-Z])/g, ' $1').trim()}
                  </label>
                  <input
                    type="checkbox"
                    checked={value}
                    onChange={(e) => setNotificationSettings({ ...notificationSettings, [key]: e.target.checked })}
                    className="w-5 h-5 rounded border-gray-300 text-primary-600 cursor-pointer"
                  />
                </div>
              ))}
            </div>

            <Button variant="primary" className="flex items-center gap-2">
              <Save size={16} /> Save Preferences
            </Button>
          </SettingSection>
        </motion.div>

        {/* Theme Settings */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <SettingSection
            icon={Palette}
            title="Appearance Settings"
            description="Customize the look and feel"
          >
            <div className="space-y-4 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Theme
                </label>
                <select
                  value={themeSettings.theme}
                  onChange={(e) => setThemeSettings({ ...themeSettings, theme: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                >
                  <option value="light">Light</option>
                  <option value="dark">Dark</option>
                  <option value="auto">Auto (System)</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Language
                </label>
                <select
                  value={themeSettings.language}
                  onChange={(e) => setThemeSettings({ ...themeSettings, language: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                >
                  <option value="en">English</option>
                  <option value="hi">Hindi</option>
                  <option value="kn">Kannada</option>
                  <option value="ta">Tamil</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Date Format
                </label>
                <select
                  value={themeSettings.dateFormat}
                  onChange={(e) => setThemeSettings({ ...themeSettings, dateFormat: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                >
                  <option value="dd-mm-yyyy">DD-MM-YYYY</option>
                  <option value="mm-dd-yyyy">MM-DD-YYYY</option>
                  <option value="yyyy-mm-dd">YYYY-MM-DD</option>
                </select>
              </div>
            </div>

            <Button variant="primary" className="flex items-center gap-2">
              <Save size={16} /> Save Preferences
            </Button>
          </SettingSection>
        </motion.div>

        {/* Security Settings */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <SettingSection
            icon={Key}
            title="Security Settings"
            description="Manage your account security"
          >
            <div className="space-y-4 mb-6">
              <div>
                <p className="text-gray-700 font-medium mb-2">Change Password</p>
                <p className="text-sm text-gray-600 mb-4">Update your password regularly to keep your account secure</p>
                <Button variant="outline">
                  Change Password
                </Button>
              </div>

              <div className="pt-4 border-t border-gray-200">
                <p className="text-gray-700 font-medium mb-2">Two-Factor Authentication</p>
                <p className="text-sm text-gray-600 mb-4">Add an extra layer of security to your account</p>
                <Button variant="outline">
                  Enable 2FA
                </Button>
              </div>

              <div className="pt-4 border-t border-gray-200">
                <p className="text-gray-700 font-medium mb-2">Active Sessions</p>
                <p className="text-sm text-gray-600 mb-4">View and manage your active sessions</p>
                <Button variant="outline">
                  View Sessions
                </Button>
              </div>
            </div>
          </SettingSection>
        </motion.div>
      </div>
    </DashboardLayout>
  );
};
