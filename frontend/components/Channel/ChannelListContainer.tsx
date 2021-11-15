import { ChannelList, useChatContext } from "stream-chat-react";
import { Sidebar } from ".";
import ChannelSearch from "./ChannelSearch";
import CompanyHeader from "./CompanyHeader";

const ChannelListContainer = () => {
  return (
    <section className="channel-list__container">
      <Sidebar />
      <section className="channel-list__list__wrapper">
        <CompanyHeader />
        <ChannelSearch />
      </section>
    </section>
  );
};

export default ChannelListContainer;
