import Feature from "./Feature";
import ChatIcon from "./FeatureIcons/ChatIcon";

// Icons
import CurrencyIcon from "./FeatureIcons/CurrencyIcon";
import TrophyIcon from "./FeatureIcons/TrophyIcon";
import UsersIcon from "./FeatureIcons/UsersIcon";

const features_data = [
  {
    title: "Connect",
    icon: <UsersIcon />,
    content:
      "Connect with others through messages and chat rooms, and make friends!",
  },
  {
    title: "Vibe Currency",
    icon: <CurrencyIcon />,
    content:
      "Earn Vibe Currency which can be used to buy items for your character!",
  },
  {
    title: "Earn Badges",
    icon: <TrophyIcon />,
    content:
      "Earn badges by completing daily activities, which in turn earn you VC.",
  },
  {
    title: "Earn Badges",
    icon: <ChatIcon />,
    content:
      "Earn badges by completing daily activities, which in turn earn you VC.",
  },
];

const Features = () => {
  return (
    <section className="grid grid-cols-3 gap-14">
      {features_data.map((feature, index) => {
        const { title, icon, content } = feature;
        return (
          <Feature key={index} title={title} icon={icon}>
            {content}
          </Feature>
        );
      })}
    </section>
  );
};

export default Features;
