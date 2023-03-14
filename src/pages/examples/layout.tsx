import { useEffect, useContext, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { MenuBar, Footer } from "../../com/Layout/MenuBar"

import { config } from "../../com/config";
import { ThemeContext } from "../../com/theme";

import HomeIcon from '@mui/icons-material/Home';
import SettingsIcon from '@mui/icons-material/Settings';
import ExploreIcon from '@mui/icons-material/Explore';
import FontDownloadIcon from '@mui/icons-material/FontDownload';
import KeyIcon from '@mui/icons-material/Key';
import LockIcon from '@mui/icons-material/Lock';

export const DolphinIcon = ({ className }) => {

  return (
    <svg version="1.2" viewBox="-351 153 256 256" fill="currentColor" stroke="currentColor" className={`w-6 h-6 ${ className }`}>
      <path d="M-95.4,158.1c-14-1.6-40.8,24.7-40.8,24.7c-6.7,7.3-7.5,6.2-7.5,6.2c-98.5-19.8-152,21.1-152,21.1
        c-8.1,3.6-13.3-9.5-13.3-9.5c0.4-6.4-3-3.1-3-3.1c-13.3,16.8-5.1,35.3-5.1,35.3c-31.9,49.7-26.1,101.4-26.1,101.4
        c2.1,11.5,5.6,19.4,9.8,27.9c3.4,6.9,10,12.3,12.3,14.1l3.3,22.4c1.1,2.6,3.6,3.5,6.2,2.9c6.3-2.1,11.2-35.5,11.2-35.5
        c3.8-4.8,15.2-40.8,15.2-40.8c0.5-4.1,9.9-2.3,9.9-2.3c19.4,1.9,31.6-8.5,31.6-8.5c4.9-5.6-1.2-5.9-1.2-5.9
        c-11.5,4.5-29.7-11.8-29.7-11.8c0.8-6.2,21.9-43,21.9-43c13.9-19.8,48-32.3,57.1-35.7c9.1-3.4,49.8-9.7,49.8-9.7
        c5.3,22.1,18.3,21.3,18.3,21.3c5.8,0.5,4.5-2.5,4.5-2.5c-4.2-2.9-2.1-9.3-2.1-9.3c1.3-3.6,2.2-10.3,2.6-13.9
        c-1.6-0.4-2.9-1.7-3.3-3.4c-0.6-2.5,1-5,3.4-5.6c1.3-0.3,2.6,0,3.7,0.7c5.9-5.4,8.6-16,8.6-16c1.9-9.4,12.6-17.8,12.6-17.8
        C-93.7,158.7-95.4,158.1-95.4,158.1z"/>
    </svg>
  );
}

export const WhaleIcon = ({ className }) => {

  return (
    <svg version="1.1" viewBox="0 0 256 256" fill="currentColor" stroke="currentColor" className={`w-6 h-6 ${ className }`}>
      <path d="M244.311,143.467c0,0-173.441,0-174.859,0c-19.77,0-35.7-15.792-35.7-35.562c0-9.787,3.938-18.648,10.299-25.116
        l23.137,23.137c13.4,13.4,35.129,13.4,48.529,0L80.401,70.609c-8.369-8.359-21.424-9.127-30.679-2.353
        c6.774-9.255,6.006-22.31-2.353-30.679L12.052,2.261c-13.4,13.4-13.4,35.129,0,48.529l20.646,20.646
        C13.569,88.302,2,110.218,2,134.192C2,187.073,58.297,230,128.024,230.571c0,0,0,23.167,0,23.167c0,0,11.076,0.246,20.38-7.489
        c7.036-5.85,11.127-14.865,11.127-24.017V193.7c12.721-3.013,33.219-9.816,49.386-26.603h7.827
        c-10.279,13.577-30.837,25.884-51.306,31.191v11.194c29.163-7.246,52.251-22.832,64.607-42.385h6.862
        c-12.829,22.625-38.595,40.633-71.47,48.46v6.675c0,1.516-0.098,3.003-0.276,4.47c43.931-9.698,78.056-36.773,88.414-70.751
        C255.466,149.739,250.799,143.467,244.311,143.467z M178.355,171.114h-4.874c-2.176,0-3.938-1.762-3.938-3.938
        c0-2.176,1.762-3.938,3.938-3.938h4.874c2.176,0,3.938,1.762,3.938,3.938C182.293,169.351,180.531,171.114,178.355,171.114z"/>
    </svg>
  );
}

export const TwitterIcon = ({ className }) => {

  return (
    <svg viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" className={`w-6 h-6 ${ className }`}>
      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
    </svg>
  );
}

export const DiscordIcon = ({ className }) => {

  return (
    <svg viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" className={`w-6 h-6 ${ className }`}>
      <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"/>
    </svg>
  );
}

export const Backdrop = ({
  show = false,
  onClick,
  children
}) => {

  return (
    <div className={`
      lg:z-0
      lg:opacity-0

      backdrop
      absolute
      flex
      w-full h-full
      bg-[rgba(0,0,0,0.6)]

      ${ show ? "z-[8]" : "z-0" } 
      ${ show ? "opacity-100" : "opacity-0" } 
      ${ onClick ? "cursor-pointer" : '' }
    `}
     onClick={ onClick }>
      { children }
    </div>
  );
}

export const MenuLink = ({
  href="/",
  className,
  children
}) => {

  const theme = useContext(ThemeContext);

  return (
    <Link href={ href } className={`
      menuItem
      cursor-pointer
      flex flex-row
      items-center
      px-4 py-2
      font-medium text-sm
      ${ theme.menuItem }
      ${ className }
      `}>
      { children }
    </Link>
  );
}

export const MenuCategory = ({
  className,
  children
}) => {

  const theme = useContext(ThemeContext);

  return (
    <div className={`
      flex flex-row
      items-center
      p-4
      uppercase font-medium
      text-xs
      ${ theme.menuCategory }
      ${ className }
      `}>
      { children }
    </div>
  );
}

export const Navigation = ({
  open = false,
  setOpen = null
}) => {

  const theme = useContext(ThemeContext);

  return (
    <>
    <Backdrop
      show={ open }
      onClick={ setOpen }
    />
      <div className={`
        lg:ml-0
        navigation
        z-[9]
        flex flex-col
        w-[280px] h-full
        overflow-x-none
        overflow-y-auto

        ${ open ? "ml-0" : "ml-[-280px]" }
        ${ theme.navigation }
        ${ theme.scrollbars } 
      `}>

      <MenuCategory>
        <img
          src={`/theme/${theme.logo}`}
          className={`w-[160px]`}
          alt='' />
      </MenuCategory>

      <MenuLink>
        <HomeIcon className={`mr-2`} />
        <span className={`text-white`}>Home</span>
      </MenuLink>

      <MenuLink>
        <ExploreIcon className={`mr-2`} />
        <span className={`text-white`}>Explore</span>
      </MenuLink>

      <MenuLink>
        <SettingsIcon className={`mr-2`} />
        <span className={`text-white`}>Settings</span>
      </MenuLink>

      <MenuCategory>
        Generators
      </MenuCategory>

      <MenuLink>
        <FontDownloadIcon className={`mr-2`} />
        <span className={`text-white`}>Ecco Text Generator</span>
      </MenuLink>

      <MenuLink>
        <KeyIcon className={`mr-2`}/>
        <span className={`text-white`}>Ecco Password Generator</span>
      </MenuLink>

      <MenuLink>
        <LockIcon className={`mr-2`}/>
        <span className={`text-white`}>Ecco 2 Password Generator</span>
      </MenuLink>

      <MenuCategory>
        Ecco the Dolphin
      </MenuCategory>

      <MenuLink>
        <DolphinIcon className={`mr-2`}/>
        <span className={`text-white`}>Ecco the Dolphin</span>
      </MenuLink>

      <MenuLink>
        <WhaleIcon className={`mr-2`}/>
        <span className={`text-white`}>Ecco the Dolphin PC</span>
      </MenuLink>

      <MenuLink>
        <DolphinIcon className={`mr-2 flip-h`}/>
        <span className={`text-white`}>Ecco 2: The Tides of Time</span>
      </MenuLink>

      <MenuLink>
        <WhaleIcon className={`mr-2 flip-h`}/>
        <span className={`text-white`}>Ecco Jr.</span>
      </MenuLink>

      <MenuCategory>
        Social
      </MenuCategory>

      <MenuLink>
        <TwitterIcon className={`mr-2`}/>
        <span className={`text-white`}>Founder's Twitter</span>
      </MenuLink>

      <MenuCategory>
        Partner's Social
      </MenuCategory>

      <MenuLink href="https://twitter.com/eccoonline">
        <TwitterIcon className={`mr-2`}/>
        <span className={`text-white`}>Ecco Online's Twitter</span>
      </MenuLink>

      <MenuLink href="">
        <DiscordIcon className={`mr-2`}/>
        <span className={`text-white`}>Ecco Online's Discord</span>
      </MenuLink>

      </div>
    </>
  );
}

export class t_hook {

  state;
  refresh;

  constructor() {

    this.state = "ready";
    this.refresh = null; 
  }
}

export class t_navigation extends t_hook {

  mobileView;
  matchMedia;

  visible;

  constructor() {

    super();

    this.mobileView = false;
    this.matchMedia = null;

    this.visible = false;
  }

  setOpen(open) {

    this.open = open;
    this.refresh();
  }

  toggle() {
    this.setOpen(!this.open);
  }

  enableMobileView(mobileView = true) {

    this.mobileView = mobileView;

    if (mobileView)
      this.setOpen(false);
    else
      this.setOpen(true);
  }

  mountMobileView() {

    if (this.matchMedia)
      return;

    const matchMedia = window.matchMedia("(min-width: 1024px");;
    const mediaQuery = event => this.enableMobileView(!event.matches);

    matchMedia.addEventListener("change", mediaQuery);

    this.matchMedia = matchMedia;
    this.enableMobileView(!matchMedia.matches);
  }

  set(params) {

    const { refresh } = params;
    this.refresh = refresh;
  }

  process() {

    switch (this.state) {

      case "ready": {

        this.mountMobileView();
        break;
      }
    }
  }
}

export const useNavigation = () => {

  const [ navigation ] = useState(new t_navigation());
  const [ serial, setSerial ] = useState(0);

  navigation.set({
    refresh: () => setSerial(serial + 1)
  });

  useEffect(() => {

    navigation.process();

  });

  return navigation;
}

export const Layout = () => {

  const theme = useContext(ThemeContext);
  const navigation = useNavigation();

  return (
    <div className={`
      background
      flex flex-row
      h-screen
      ${ theme.background }
    `}>

      <Navigation
        open={ navigation.open }
        setOpen={ () => navigation.setOpen() }
      />

      <div className={`
        ml-0 lg:ml-[280px]
        w-full lg:w-[calc(100%-280px)]
        absolute
        flex-1 flex flex-col
        h-full
      `}>
        <MenuBar toggleNav={ () => navigation.toggle() } />
        <div className={`flex-1 flex flex-col`}>
          
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default Layout;
