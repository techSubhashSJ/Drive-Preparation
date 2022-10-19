import * as SvgIconsComponent from "../components/icons";

export const getIconComponentByName = (name) => {
  const componentsMap = {
    facebook: SvgIconsComponent.Facebook,
    twitter: SvgIconsComponent.Twitter,
    youtube: SvgIconsComponent.Youtube,
    instagram: SvgIconsComponent.Instagram,
  };

  if (name in componentsMap) {
    const IconComponent = componentsMap[name];
    return <IconComponent />;
  } else {
    return null;
  }
};
