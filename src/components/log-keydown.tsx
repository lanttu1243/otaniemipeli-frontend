import {useEffect} from "react";

function detectDeviceFromEvent(ev: KeyboardEvent): string {
  // Experimental, may be undefined on many browsers
  const firesTouch =
    (ev as any).sourceCapabilities?.firesTouchEvents === true;

  const hasTouch =
    typeof navigator !== "undefined" &&
    (navigator.maxTouchPoints > 0 || "ontouchstart" in window);

  const ua = typeof navigator !== "undefined" ? navigator.userAgent : "";
  const uaData = (navigator as any)?.userAgentData;
  const platform = uaData?.platform ?? navigator.platform ?? "unknown";

  let category: "mobile" | "tablet" | "desktop" | "unknown" = "unknown";
  if (/Android/i.test(ua)) {
    category = /Mobile/i.test(ua) ? "mobile" : "tablet";
  } else if (/iPhone/i.test(ua)) {
    category = "mobile";
  } else if (/iPad|iPadOS/i.test(ua)) {
    category = "tablet";
  } else if (/Macintosh|Windows|Linux|CrOS/i.test(ua)) {
    category = "desktop";
  }

  const loc =
    ev.location === 3
      ? "numpad"
      : ev.location === 1
        ? "left"
        : ev.location === 2
          ? "right"
          : "standard";

  return `${category} (${platform}); touch=${hasTouch ? "yes" : "no"}; firesTouch=${firesTouch ? "yes" : "no"}; keyboard=${loc}`;
}

export function useLogKeydown() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const onKeyDown = (ev: KeyboardEvent) => {
      const deviceInfo = detectDeviceFromEvent(ev);

      const payload = {
        type: "keydown",
        key: ev.key,
        code: ev.code,
        location: ev.location, // 0=standard,1=left,2=right,3=numpad
        repeat: ev.repeat,
        ctrl: ev.ctrlKey,
        alt: ev.altKey,
        shift: ev.shiftKey,
        meta: ev.metaKey,
        isComposing: ev.isComposing,
        isTrusted: ev.isTrusted,
        device: deviceInfo,
        ts: Date.now(),
      };

      console.log("[input]", payload);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);
}
