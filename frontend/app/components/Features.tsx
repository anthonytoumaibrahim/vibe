import Feature from "./Feature";

const features_data = [
  {
    title: "Create your Avatar",
    icon: "avatar.svg",
    content: "Create your 2D Character, and stand out within the community!",
  },
  {
    title: "AI Generator",
    icon: "ai.svg",
    content:
      "Tired of making your Avatar the old school way? Let an AI make it for you!",
  },
  {
    title: "Join Chat Rooms",
    icon: "chatroom.svg",
    content:
      "Join vibrant chat rooms and connect and have fun with other players!",
  },
  {
    title: "Become Premium",
    icon: "premium.svg",
    content:
      "Become a Premium member to gain access to exclusive Avatar items and features!",
  },
  {
    title: "Earn Badges",
    icon: "badges.svg",
    content:
      "Earn badges and show off your accomplishments, and earn in-game currency!",
  },
  {
    title: "Post Anything",
    icon: "post.svg",
    content:
      "Post anything you desire, from images, videos, to plain old text!",
  },
];

const Features = () => {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14">
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
