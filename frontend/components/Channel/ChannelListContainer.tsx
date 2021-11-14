import { ChannelList, useChatContext } from "stream-chat-react";
import { Sidebar } from ".";
import CompanyHeader from "./CompanyHeader";

const ChannelListContainer = () => {
  return (
    <section className="channel-list__container">
      <Sidebar />
      <CompanyHeader />
    </section>
  );
};

export default ChannelListContainer;
