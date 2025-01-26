import { ProjectBody } from "../types";

export const ILDSGallery: ProjectBody = {
  title: "The ILDS Gallery",
  sections: [
    {
      title: "What is The Gallery?",
      body: `The ILDS Dermatology Gallery (henceforth referred to as "The Gallery") 
        serves as a visual companion to the ICD-11, and is a free and openly 
        accessible resource for dermatology images. It was
        built to address bias in both dermatology education and research.`,
    },
    {
      title: "Our goals",
      body: `The primary objective of the Gallery was to create a collection of
      various dermatology, and standardize their representation and data to both
      aid in educational settings, by demonstrating how different diagnoses may
      present in photographs, and in research settings, by creating a
      collection of standardized, diverse, and high quality images.`,
    },
    {
      imageURL: `${process.env.PUBLIC_URL}/portfolio/gallery/header.png`,
    },
    {
      body: `We strive to achieve our goals of quality, equity, and diversity
      through our review process, our commitment to international accessibility, and
      our connections through the ILDS to dermatological societies around the world.
      We use the leverage international standards to ensure that, no matter what
      language people are speaking, they can all access the same information in the same
      way. Our review process also means that all of our cases are reviewed by practicing
      dermatologists, to ensure that all submitted cases are of sufficient quality and
      have sufficient utility. We work closely with various stakeholders with different
      occupations, perspectives, and backgrounds to ensure everyone has a voice in this
      gallery. Finally, with our connection with the ILDS, we encourage and
      invite professionals from around the world to access and contribute to our collection.`,
    },
    {
      title: "Feature showcase",
      body: `The submission page is the main page for collecting cases, and is
      the primary focus of our first roll-out to the public. This page is built
      to support dermatologists in adding images and information related to different
      cases in the gallery. Images can be dragged and dropped and uploaded multiple at
      a time. Moreover, relavent demographic and case-related details are easily selected
      in one of the side panels.`,
      imageURL: `${process.env.PUBLIC_URL}/portfolio/gallery/submit.png`,
    },
    {
      body: `Once images have been submitted, they are then assigned and placed into
      a review queue, where a panel of appointed reviewers will look over each case
      and assess the quality of the images, the accuracy of the diagnoses, and the
      correctness of the metadata. The review process is a vital part for ensuring
      the quality of the cases that come through to the gallery.`,
    },
    {
      imageURL: `${process.env.PUBLIC_URL}/portfolio/gallery/review.png`,
    },
    {
      body: `After these cases are approved and published, they become visible on 
      the public gallery page. Attributions are given to the contributing dermatologists
      who submitted their images, and all of the relevant metadata is displayed in a
      simple, adaptive layout`,
    },
    {
      imageURL: `${process.env.PUBLIC_URL}/portfolio/gallery/scrolled.png`,
    },
    {
      body: `One of the perks of our gallery is the attribution of the contributors.
      Like in the publishing of academic journals, cases submitted to the gallery will
      have unique identifiers that represent a unique address to view each case. Contributors
      will have the opportunity to have their images cited in the same manner as well, 
      if their images are used in teaching or research contexts.`,
    },
    {
      imageURL: `${process.env.PUBLIC_URL}/portfolio/gallery/gallery.png`,
    },
    {
      title: "What's next for the gallery",
      body: `We are currently in our last phase of development before going live. The project
      is undergoing user testing, and we are doing our final security and privacy reviews to ensure
      that the gallery is not only open and equitable, but also secure—to protect the visitors and 
      of the gallery—and compliant to patient privacy laws and regulations.`,
    },
  ],
};
