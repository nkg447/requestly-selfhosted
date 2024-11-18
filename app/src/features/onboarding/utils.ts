import PATHS from "config/constants/sub/paths";
import { shouldOverrideShouldShowOnboarding } from "SelfHostedUtils";
import { isEnvAutomation } from "utils/EnvUtils";

export const shouldShowOnboarding = () => {
  // never show onboarding
  if (shouldOverrideShouldShowOnboarding()) return false;
  if (
    isEnvAutomation() ||
    window.location.href.includes(PATHS.AUTH.SIGN_IN.RELATIVE) ||
    window.location.href.includes(PATHS.AUTH.SIGN_UP.RELATIVE) ||
    window.location.href.includes(PATHS.AUTH.DEKSTOP_SIGN_IN.RELATIVE) ||
    window.location.href.includes("/invite") ||
    window.location.href.includes(PATHS.AUTH.EMAIL_ACTION.RELATIVE) ||
    window.location.href.includes(PATHS.AUTH.EMAIL_LINK_SIGNIN.RELATIVE) ||
    window.location.href.includes(PATHS.SESSIONS.SAVED.RELATIVE) ||
    window.location.href.includes(PATHS.APPSUMO.RELATIVE) ||
    window.location.href.includes(PATHS.PRICING.RELATIVE)
  )
    return false;

  return true;
};
