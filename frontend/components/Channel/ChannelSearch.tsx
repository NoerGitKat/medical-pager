import { useState, useEffect, SyntheticEvent } from "react";
import { useChatContext } from "stream-chat-react";
import Image from "next/image";

const ChannelSearch = () => {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);

  const getChannels = async (text: string) => {
    try {
    } catch (error) {
      setQuery("");
    }
  };

  const onSearch = (event: SyntheticEvent) => {
    event.preventDefault();

    const target = event.target as HTMLInputElement;

    setLoading(true);
    setQuery(target.value);
    getChannels(target.value);
  };

  const SearchIcon = "/icons/search-icon.png";
  return (
    <section className="channel-search__container">
      <div className="channel-search__input__wrapper">
        <div className="channel-search__input__icon">
          <Image src={SearchIcon} width="20" height="15" alt="" />
        </div>
        <input
          type="text"
          placeholder="Search"
          value={query}
          onChange={onSearch}
          className="channel-search__input__text"
        />
      </div>
    </section>
  );
};

export default ChannelSearch;
