import type { NextPage } from "next";
import { Chat } from "stream-chat-react";
import { ChannelContainer, ChannelListContainer } from "../components/Channel";
import chatClient from "../services/stream-chat";
import styles from "../styles/Home.module.scss";

const Home: NextPage = () => {
  return (
    <main className={styles.container}>
      <Chat client={chatClient} theme="team light">
        <ChannelListContainer />
        <ChannelContainer />
      </Chat>
    </main>
  );
};

export default Home;
