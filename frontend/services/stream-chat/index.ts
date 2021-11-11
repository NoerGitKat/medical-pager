import { StreamChat } from "stream-chat";

const chatClient = StreamChat.getInstance(
  process.env.STREAM_CHAT_API_KEY as string
);

export default chatClient;
