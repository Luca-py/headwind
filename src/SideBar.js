import { BsPlus, BsFillLightningFill, BsGearFill } from 'react-icons/bs'
import { FaFire, FaPoo } from 'react-icons/fa'
import useDarkMode from './hooks/useDarkMode';

const SideBar = () => {
    return(
        <div className="fixed top-0 left-0 h-screen w-16 m-0
                        flex flex-col shadow-lg
                        bg-white dark:bg-primary">
            <SideBarIcon icon={<FaFire size="28" />} />
            <SideBarIcon icon={<BsPlus size="32" />}/>
            <SideBarIcon icon={<BsFillLightningFill size="20" />}/>
            <SideBarIcon icon={<FaPoo size="20" />}/>
            <ThemeIcon />
        </div>
    );
};

const SideBarIcon = ({ icon, text = 'tooltip 💡' }) => (
    <div className="sidebar-icon group">
        {icon}

        <span className="sidebar-tooltip group-hover:scale-100">
            {text}
        </span>
    </div>
);

const ThemeIcon = () => {
    const [darkTheme, setDarkTheme] = useDarkMode();
    const handleMode = () => setDarkTheme(!darkTheme);
    return (
      <span onClick={handleMode}>
        {darkTheme ? (
          <SideBarIcon icon={<BsGearFill size="20" />} />
        ) : (
          <SideBarIcon icon={<BsGearFill size="20" />} />
        )}
      </span>
    );
  };

export default SideBar;