import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Settings as SettingsIcon,  
  Key, 
  Bell,  
  User, 
  Mail, 
  Building2, 
  Phone, 
  Fingerprint, 
  FileText, 
  MapPin, 
  Lock, 
  ShieldCheck, 
  Monitor,
  ArrowRight
} from 'lucide-react';
import { Card } from '../components/common';
import { DashboardLayout } from '../components/layout/DashboardLayout';
import { useAuth } from '../hooks/useContext';

export const SettingsPage = () => {
  const brandBlue = "#12348c";
  const brandRed = "#9F0712";

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

  const handleSaveProfile = async (e) => {
    if (e) e.preventDefault();
    setSaving(true);
    setTimeout(() => {
      setSaving(false);
      alert('Profile updated successfully!');
    }, 1000);
  };

  // Shared UI Classes from Dashboard Layout
  const inputClass = "w-full h-11 rounded-xl bg-slate-50 border border-slate-200 focus:border-[#2984D1] focus:bg-white focus:ring-4 focus:ring-[#2984D1]/10 outline-none transition-all pl-10 pr-4 text-slate-800 placeholder:text-slate-400 text-sm";
  const selectClass = "w-full h-11 rounded-xl bg-slate-50 border border-slate-200 focus:border-[#2984D1] focus:bg-white focus:ring-4 focus:ring-[#2984D1]/10 outline-none transition-all px-4 text-slate-800 text-sm appearance-none cursor-pointer";
  const labelClass = "block text-left text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1.5";

  // Reusable Component matching the premium Card/Blob style
  const SettingSection = ({ icon: Icon, title, description, children, delay }) => (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay }}
      className="relative"
    >
      <div className="absolute inset-0 z-0 overflow-hidden rounded-3xl pointer-events-none">
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-[#9F0712]/2 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-[#12348c]/5 rounded-full blur-3xl" />
      </div>

      <Card className="relative z-10 p-6 sm:p-8 rounded-3xl border border-slate-200 bg-white/75 backdrop-blur-2xl shadow-xl flex flex-col text-left">
        <div className="flex items-start gap-4 mb-6 pb-4 border-b border-slate-100">
          <div 
            className="w-12 h-12 rounded-xl flex items-center justify-center shadow-inner shrink-0"
            style={{ backgroundColor: `${brandBlue}0A` }}
          >
            <Icon style={{ color: brandBlue }} size={22} />
          </div>
          <div>
            <h2 className="text-xl font-extrabold text-slate-800">{title}</h2>
            <p className="text-xs text-slate-400 mt-0.5 font-medium">{description}</p>
          </div>
        </div>
        {children}
      </Card>
    </motion.div>
  );

  return (
    <DashboardLayout>
      <div className="space-y-8 bg-slate-50 min-h-screen p-1 text-slate-900 font-sans">
        
        {/* TOP HEADER SECTION */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <div className="flex flex-col gap-4 sm:flex-row sm:items-left sm:justify-between border-b border-slate-200/60 pb-6">
            <div>
              <motion.h1
                className="text-3xl font-black tracking-tight relative inline-block text-left"
                style={{ color: "#314158" }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                Settings
                <motion.span
                  className="absolute left-0 -bottom-1 h-[3px] rounded-full"
                  style={{ background: "#314158" }}
                  initial={{ width: 0, opacity: 0 }}
                  animate={{ width: "100%", opacity: 1 }}
                  transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
                />
                <motion.span
                  className="absolute left-0 -bottom-3.5 h-[2px] rounded-full"
                  style={{ background: "#9F0712" }}
                  initial={{ width: 0, opacity: 0 }}
                  animate={{ width: "70%", opacity: 1 }}
                  transition={{ duration: 0.7, delay: 0.7, ease: "easeOut" }}
                />
              </motion.h1>
              {/* <p className="text-xs text-slate-400 mt-4 font-medium">Manage your account and application preferences</p> */}
            </div>
          </div>
        </motion.div>

        {/* SETTINGS CONTENT GRID */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
          
          {/* Profile Settings */}
          <SettingSection
            icon={SettingsIcon}
            title="Profile Settings"
            description="Update your personal identification information"
            delay={0.05}
          >
            <form onSubmit={handleSaveProfile} className="space-y-5">
              <div className="flex items-center gap-4 mb-2 pb-2">
                <img
                  src={user?.avatar || "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"}
                  alt={user?.name}
                  className="w-14 h-14 rounded-2xl object-cover ring-4 ring-slate-100"
                />
                <button 
                  type="button" 
                  className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold rounded-xl text-xs transition-all duration-200 cursor-pointer"
                >
                  Change Avatar
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className={labelClass}>Full Name</label>
                  <div className="relative">
                    <User size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input
                      type="text"
                      value={profileData.fullName}
                      onChange={(e) => setProfileData({ ...profileData, fullName: e.target.value })}
                      className={inputClass}
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className={labelClass}>Email Address</label>
                  <div className="relative">
                    <Mail size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input
                      type="email"
                      value={profileData.email}
                      onChange={(e) => setProfileData({ ...profileData, email: e.target.value })}
                      className={inputClass}
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className={labelClass}>Company Name</label>
                  <div className="relative">
                    <Building2 size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input
                      type="text"
                      value={profileData.company}
                      onChange={(e) => setProfileData({ ...profileData, company: e.target.value })}
                      className={inputClass}
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className={labelClass}>Phone Number</label>
                  <div className="relative">
                    <Phone size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input
                      type="tel"
                      value={profileData.phone}
                      onChange={(e) => setProfileData({ ...profileData, phone: e.target.value })}
                      className={inputClass}
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={saving}
                  className="group relative h-11 px-6 rounded-xl overflow-hidden bg-gradient-to-r from-sky-500 to-cyan-500 hover:brightness-110 active:scale-[0.99] transition-all duration-200 shadow-md shadow-sky-500/10 font-bold text-white flex items-center justify-center gap-2 cursor-pointer text-sm"
                >
                  {saving ? "Saving Changes..." : "Save Changes"}
                  <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </form>
          </SettingSection>

          {/* Company Settings */}
          <SettingSection
            icon={Building2}
            title="Company Settings"
            description="Manage legal registration and logistics entities"
            delay={0.1}
          >
            <div className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className={labelClass}>Business Registration No</label>
                  <div className="relative">
                    <Fingerprint size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input
                      type="text"
                      value={companyData.registrationNumber}
                      onChange={(e) => setCompanyData({ ...companyData, registrationNumber: e.target.value })}
                      className={inputClass}
                    />
                  </div>
                </div>

                <div>
                  <label className={labelClass}>PAN Index</label>
                  <div className="relative">
                    <FileText size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input
                      type="text"
                      value={companyData.pan}
                      onChange={(e) => setCompanyData({ ...companyData, pan: e.target.value })}
                      className={inputClass}
                    />
                  </div>
                </div>

                <div className="md:col-span-2">
                  <div>
                    <label className={labelClass}>GST Number</label>
                    <div className="relative">
                      <FileText size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                      <input
                        type="text"
                        value={companyData.gst}
                        onChange={(e) => setCompanyData({ ...companyData, gst: e.target.value })}
                        className={inputClass}
                      />
                    </div>
                  </div>
                </div>

                <div className="md:col-span-2">
                  <div>
                    <label className={labelClass}>Terminal Address</label>
                    <div className="relative">
                      <MapPin size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                      <input
                        type="text"
                        value={companyData.address}
                        onChange={(e) => setCompanyData({ ...companyData, address: e.target.value })}
                        className={inputClass}
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className={labelClass}>City</label>
                  <div className="relative">
                    <MapPin size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input
                      type="text"
                      value={companyData.city}
                      onChange={(e) => setCompanyData({ ...companyData, city: e.target.value })}
                      className={inputClass}
                    />
                  </div>
                </div>

                <div>
                  <label className={labelClass}>State</label>
                  <div className="relative">
                    <MapPin size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input
                      type="text"
                      value={companyData.state}
                      onChange={(e) => setCompanyData({ ...companyData, state: e.target.value })}
                      className={inputClass}
                    />
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  className="group relative h-11 px-6 rounded-xl overflow-hidden bg-gradient-to-r from-sky-500 to-cyan-500 hover:brightness-110 active:scale-[0.99] transition-all duration-200 shadow-md shadow-sky-500/10 font-bold text-white flex items-center justify-center gap-2 cursor-pointer text-sm"
                >
                  <span>Save Company Info</span>
                  <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </div>
          </SettingSection>

          {/* Notification Settings */}
          <SettingSection
            icon={Bell}
            title="Notification Settings"
            description="Control routing rules and telemetry updates alert frequencies"
            delay={0.15}
          >
            <div className="space-y-4">
              <div className="divide-y divide-slate-100">
                {Object.entries(notificationSettings).map(([key, value]) => (
                  <div key={key} className="flex items-center justify-between py-3.5 first:pt-0 last:pb-0">
                    <label className="text-slate-700 text-sm font-semibold capitalize tracking-wide">
                      {key.replace(/([A-Z])/g, ' $1').trim()}
                    </label>
                    <div className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={value}
                        onChange={(e) => setNotificationSettings({ ...notificationSettings, [key]: e.target.checked })}
                        className="w-5 h-5 rounded border-slate-300 text-sky-500 focus:ring-sky-500/20 cursor-pointer accent-sky-600"
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-slate-100">
                <button
                  type="button"
                  className="group relative h-11 px-6 rounded-xl overflow-hidden bg-gradient-to-r from-sky-500 to-cyan-500 hover:brightness-110 active:scale-[0.99] transition-all duration-200 shadow-md shadow-sky-500/10 font-bold text-white flex items-center justify-center gap-2 cursor-pointer text-sm"
                >
                  <span>Save Preferences</span>
                  <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </div>
          </SettingSection>

          {/* Theme Settings */}
          {/* <SettingSection
            icon={Palette}
            title="Appearance Settings"
            description="Customize application interface and localization standards"
            delay={0.2}
          >
            <div className="space-y-5">
              <div className="grid grid-cols-1 gap-4 text-left">
                <div>
                  <label className={labelClass}>Visual Theme Configuration</label>
                  <div className="relative">
                    <select
                      value={themeSettings.theme}
                      onChange={(e) => setThemeSettings({ ...themeSettings, theme: e.target.value })}
                      className={selectClass}
                    >
                      <option value="light">Light Mode</option>
                      <option value="dark">Dark Mode</option>
                      <option value="auto">Auto (System Default)</option>
                    </select>
                    <Monitor size={15} className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                  </div>
                </div>

                <div>
                  <label className={labelClass}>Regional Language translation</label>
                  <div className="relative">
                    <select
                      value={themeSettings.language}
                      onChange={(e) => setThemeSettings({ ...themeSettings, language: e.target.value })}
                      className={selectClass}
                    >
                      <option value="en">English (US)</option>
                      <option value="hi">Hindi</option>
                      <option value="kn">Kannada</option>
                      <option value="ta">Tamil</option>
                    </select>
                    <Globe size={15} className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                  </div>
                </div>

                <div>
                  <label className={labelClass}>Timestamp Mapping Schema</label>
                  <div className="relative">
                    <select
                      value={themeSettings.dateFormat}
                      onChange={(e) => setThemeSettings({ ...themeSettings, dateFormat: e.target.value })}
                      className={selectClass}
                    >
                      <option value="dd-mm-yyyy">DD-MM-YYYY</option>
                      <option value="mm-dd-yyyy">MM-DD-YYYY</option>
                      <option value="yyyy-mm-dd">YYYY-MM-DD</option>
                    </select>
                    <Calendar size={15} className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  className="group relative h-11 px-6 rounded-xl overflow-hidden bg-gradient-to-r from-sky-500 to-cyan-500 hover:brightness-110 active:scale-[0.99] transition-all duration-200 shadow-md shadow-sky-500/10 font-bold text-white flex items-center justify-center gap-2 cursor-pointer text-sm"
                >
                  <span>Apply Parameters</span>
                  <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </div>
          </SettingSection> */}

          {/* Security Settings */}
          <div className="xl:col-span-2">
            <SettingSection
              icon={Key}
              title="Security Infrastructure Terminal"
              description="Manage active system session variations and terminal encryption authorization nodes"
              delay={0.25}
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-slate-800 font-bold mb-1.5 text-sm">
                      <Lock size={16} className="text-slate-400" />
                      <span>Passcode Index Variant</span>
                    </div>
                    <p className="text-xs text-slate-400 font-medium leading-relaxed mb-4">
                      Update security codes regularly to maintain infrastructure protection profiles.
                    </p>
                  </div>
                  <button type="button" className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-white border border-slate-200 text-slate-700 hover:text-white font-bold rounded-xl text-xs transition-all duration-200 hover:bg-[#12348c] hover:border-[#12348c] cursor-pointer shadow-2xs">
                    Change Password
                  </button>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-slate-800 font-bold mb-1.5 text-sm">
                      <ShieldCheck size={16} className="text-slate-400" />
                      <span>Two-Factor Core Node</span>
                    </div>
                    <p className="text-xs text-slate-400 font-medium leading-relaxed mb-4">
                      Add a secondary verification wrapper across credential entry sessions.
                    </p>
                  </div>
                  <button type="button" className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-white border border-slate-200 text-slate-700 hover:text-white font-bold rounded-xl text-xs transition-all duration-200 hover:bg-[#12348c] hover:border-[#12348c] cursor-pointer shadow-2xs">
                    Enable 2FA Node
                  </button>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-slate-800 font-bold mb-1.5 text-sm">
                      <Monitor size={16} className="text-slate-400" />
                      <span>Active Authorization Sessions</span>
                    </div>
                    <p className="text-xs text-slate-400 font-medium leading-relaxed mb-4">
                      Audit connection histories and actively block unfamiliar network device ports.
                    </p>
                  </div>
                  <button type="button" className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-white border border-slate-200 text-slate-700 hover:text-white font-bold rounded-xl text-xs transition-all duration-200 hover:bg-[#12348c] hover:border-[#12348c] cursor-pointer shadow-2xs">
                    View Live Links
                  </button>
                </div>
              </div>
            </SettingSection>
          </div>

        </div>
      </div>
    </DashboardLayout>
  );
};

export default SettingsPage;