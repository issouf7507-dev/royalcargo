import { Feather } from "@expo/vector-icons";

export const icon: any = {
  index: (props: any) => <Feather name="home" size={26} {...props} />,
  explore: (props: any) => (
    <Feather name="align-justify" size={26} {...props} />
  ),
  explore2: (props: any) => <Feather name="play-circle" size={26} {...props} />,
  user: (props: any) => <Feather name="user" size={26} {...props} />,
};
