'use client';

import { Section, Cell, Image, List } from '@telegram-apps/telegram-ui';

import { Link } from '@/components/Link/Link';

import tonSvg from './_assets/ton.svg';

export default function Home() {

  //   // device maps
  // const iosDeviceMapping = new Map([
  //   ["320x480", "IPhone 4S, 4, 3GS, 3G, 1st gen"],
  //   ["320x568", "IPhone 5, SE 1st Gen,5C, 5S"],
  //   ["375x667", "IPhone SE 2nd Gen, 6, 6S, 7, 8"],
  //   ["375x812", "IPhone X, XS, 11 Pro, 12 Mini, 13 Mini"],
  //   ["390x844", "IPhone 13, 13 Pro, 12, 12 Pro"],
  //   ["414x736", "IPhone 8+"],
  //   ["414x896", "IPhone 11, XR, XS Max, 11 Pro Max"],
  //   ["428x926", "IPhone 13 Pro Max, 12 Pro Max"],
  //   ["476x847", "IPhone 7+, 6+, 6S+"],
  //   ["744x1133", "IPad Mini 6th Gen"],
  //   [
  //     "768x1024",
  //     "IPad Mini (5th Gen), IPad (1-6th Gen), iPad Pro (1st Gen 9.7), Ipad Mini (1-4), IPad Air(1-2)  ",
  //   ],
  //   ["810x1080", "IPad 7-9th Gen"],
  //   ["820x1180", "iPad Air (4th gen)"],
  //   ["834x1194", "iPad Pro (3-5th Gen 11)"],
  //   ["834x1112", "iPad Air (3rd gen), iPad Pro (2nd gen 10.5)"],
  //   ["1024x1366", "iPad Pro (1-5th Gen 12.9)"],
  // ]);

  // const desktopDeviceMapping = new Map([
  //   ["Win32", "Windows"],
  //   ["Linux", "Linux"],
  //   ["MacIntel", "Mac OS"],
  // ]);


  // // get device name for android
  // const getAndroidDeviceName = () => {
  //   const androidUserAgentString = window.navigator.userAgent.slice(window.navigator.userAgent.indexOf("Android"));
  //   const androidDeviceName = androidUserAgentString.slice(androidUserAgentString.indexOf("; ") + 1, androidUserAgentString.indexOf(")"));
  //   if (androidDeviceName) {
  //     return androidDeviceName.trim().split(" ")[0];
  //   }

  //   return "Android";
  // };

  // // get device name for ios
  // const getIosDeviceName = () => {
  //   const screenResolution = `${window.screen.width}x${window.screen.height}`;
  //   const device = iosDeviceMapping.get(screenResolution);
  //   if (device) {
  //     return device;
  //   }
  //   return "Iphone";
  // };


  // // get device name utility
  // function getDeviceName(): string {
  //   let device = "";
    
  //   // // check if mobile device
  //   // const isMobileDevice = window.navigator.userAgent
  //   //   .toLowerCase()
  //   //   .includes("mobi");

  //   // if (isMobileDevice) {
  //   //   if (window.navigator.userAgent.includes("Android")) {
  //   //     device = getAndroidDeviceName();
  //   //   } else {
  //       device = getIosDeviceName();
  //   //   }
  //   // } else {
  //   // }
    
  //   return device;
  // }

  // const a = getDeviceName()
  // alert(a)

  function getDeviceModelFromUserAgent() {
    const userAgent = navigator.userAgent.toLowerCase();

    if (userAgent.includes("iphone")) {
        return "iPhone";
    } else if (userAgent.includes("ipad")) {
        return "iPad";
    } else if (userAgent.includes("android")) {
        return "Android Device";
    } else {
        return "Unknown Device";
    }
}

// alert(getDeviceModelFromUserAgent());

  function detectiPhoneModel() {
    const { userAgent } = navigator;
    const isIOS = /iPhone|iPad|iPod/i.test(userAgent);
    const devicePixelRatio = window.devicePixelRatio || 1;
    const screen = {
        width: window.screen.width * devicePixelRatio,
        height: window.screen.height * devicePixelRatio
    };

    if (!isIOS) return 'Not an iPhone';

    // Check for specific iPhone models using screen resolution
    if (screen.width === 1125 && screen.height === 2436) {
        return 'iPhone X, XS, 11 Pro';
    } else if (screen.width === 1242 && screen.height === 2688) {
        return 'iPhone XS Max, 11 Pro Max';
    } else if (screen.width === 828 && screen.height === 1792) {
        return 'iPhone XR, 11';
    } else if (screen.width === 750 && screen.height === 1334) {
        return 'iPhone 6, 6S, 7, 8, SE (2nd generation)';
    } else if (screen.width === 1242 && screen.height === 2208) {
        return 'iPhone 6 Plus, 6S Plus, 7 Plus, 8 Plus';
    } else if (screen.width === 640 && screen.height === 1136) {
        return 'iPhone 5, 5S, 5C, SE (1st generation)';
    } else if (screen.width === 1170 && screen.height === 2532) {
        return 'iPhone 12, 12 Pro';
    } else if (screen.width === 1284 && screen.height === 2778) {
        return 'iPhone 12 Pro Max';
    } else if (screen.width === 1080 && screen.height === 2340) {
        return 'iPhone 12 mini';
    } else if (screen.width === 1170 && screen.height === 2532) {
        return 'iPhone 13, 13 Pro';
    } else if (screen.width === 1284 && screen.height === 2778) {
        return 'iPhone 13 Pro Max';
    } else if (screen.width === 1080 && screen.height === 2340) {
        return 'iPhone 13 mini';
    } else if (screen.width === 1170 && screen.height === 2532) {
        return 'iPhone 14, 14 Pro';
    } else if (screen.width === 1284 && screen.height === 2778) {
        return 'iPhone 14 Pro Max';
    } else if (screen.width === 1080 && screen.height === 2340) {
        return 'iPhone 14 mini';
    } else {
        return 'Unknown iPhone model';
    }
  }

  // Example of using this in a Telegram Mini App
  const deviceModel = detectiPhoneModel();

  // alert("device model" + deviceModel);

  function getWebGLRenderer() {
    // Create a canvas element
    const canvas = document.createElement('canvas');
    
    // Get the WebGL context
    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    
    // Check if the context is available
    if (gl) {
        // Get the WEBGL_debug_renderer_info extension
        const debugInfo = gl.getExtension('WEBGL_debug_renderer_info');
        
        // If the extension is available, get the renderer info
        if (debugInfo) {
            const renderer = gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL);
            return renderer;
        } else {
            return "WEBGL_debug_renderer_info not supported";
        }
    } else {
        return "WebGL not supported";
    }
  }

  // alert("canvas check webgl" + getWebGLRenderer());

  if (navigator.getBattery) {
    navigator.getBattery().then(function(battery) {
        // alert("Battery Level: " + battery.level * 100 + "%");
        // alert("Charging: " + (battery.charging ? "Yes" : "No"));
    });
}
  
  return (

    <List>
      <canvas id="myCanvas" width="200" height="100"></canvas>

      <Section
        header='Features'
        footer='You can use these pages to learn more about features, provided by Telegram Mini Apps and other useful projects'
      >
        <Link href='/ton-connect'>
          <Cell
            before={<Image src={tonSvg.src} style={{ backgroundColor: '#007AFF' }}/>}
            subtitle='Connect your TON wallet'
          >
            TON Connect
          </Cell>
        </Link>
      </Section>
      <Section
        header='Application Launch Data'
        footer='These pages help developer to learn more about current launch information'
      >
        <Link href='/init-data'>
          <Cell subtitle='User data, chat information, technical data'>Init Data</Cell>
        </Link>
        <Link href='/launch-params'>
          <Cell subtitle='Platform identifier, Mini Apps version, etc.'>Launch Parameters</Cell>
        </Link>
        <Link href='/theme-params'>
          <Cell subtitle='Telegram application palette information'>Theme Parameters</Cell>
        </Link>
      </Section>
    </List>
  );
}
