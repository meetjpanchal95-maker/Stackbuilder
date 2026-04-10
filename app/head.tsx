import { buildSiteJsonLd } from "@/lib/seo/json-ld";
import { defaultThemeMode, themeAttribute, themeStorageKey } from "@/app/theme/tokens";

const themeScript = `(function(){try{var storageKey='${themeStorageKey}';var attribute='${themeAttribute}';var fallback='${defaultThemeMode}';var stored=localStorage.getItem(storageKey);var resolved=stored||fallback;if(resolved!=='dark'&&resolved!=='light'){resolved='light';}document.documentElement.setAttribute(attribute,resolved);document.documentElement.style.colorScheme=resolved;}catch(error){document.documentElement.setAttribute('${themeAttribute}','light');document.documentElement.style.colorScheme='light';}})();`;

export default function Head() {
  return (
    <>
      <script id="theme-script" dangerouslySetInnerHTML={{ __html: themeScript }} />
      <script
        id="site-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(buildSiteJsonLd()),
        }}
      />
    </>
  );
}