import type { NextPage } from "next";
import { Chat } from "stream-chat-react";
import { ChannelContainer, ChannelListContainer } from "../components/Channel";
import chatClient from "../services/stream-chat";

const Home: NextPage = () => {
  return (
    <main className="app__wrapper">
      <Chat client={chatClient} theme="team light">
        <ChannelListContainer />
        <ChannelContainer />
      </Chat>
    </main>
  );
};

export default Home;
