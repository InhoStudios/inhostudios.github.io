import { GALLERY_PAGES } from "~/typings/enums";
import { globalState, SERVER_ENDPOINT } from "~/utilities/globalState";
import { wrapAuthToken } from "./auth";
import { Image, ImageVersion } from "~/typings/measurements";

export async function queryVersionImages(
  image: Image,
  verified = false,
  gallery_type = GALLERY_PAGES.PUBLIC
): Promise<ImageVersion[]> {
  const versionBody = {
    case_id: image.case_id,
    gallery_type: gallery_type,
    language: globalState.language.code,
  };

  const versions = await fetch(`${SERVER_ENDPOINT}/image/versions`, {
    method: "POST",
    headers: await wrapAuthToken({ "Content-Type": "application/json" }),
    body: JSON.stringify(versionBody),
  })
    .then(res => res.json())
    .catch(err => console.log(err));

  if (versions) {
    for (let i = 0; i < versions.length; i++) {
      const img = versions[i];

      const imgBody = {
        image_id: img.image_id,
        version_number: img.version_number,
        gallery_type: gallery_type,
        language: globalState.language.code,
      };

      const image_url = await fetch(
        `${SERVER_ENDPOINT}/image/single${verified ? "?verified=true" : ""}`,
        {
          method: "POST",
          headers: await wrapAuthToken({ "Content-Type": "application/json" }),
          body: JSON.stringify(imgBody),
        }
      )
        .then(response => response.blob())
        .then(blob => URL.createObjectURL(blob))
        .catch(err => console.error(err));

      versions[i].url = image_url;
    }

    return versions;
  }

  return [];
}
