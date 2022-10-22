import { useEffect, useState } from "react";
import {
  getAlbum,
  getArtistTopTracks,
  getCurrentUserProfile,
  getCurrentUserTopTracks,
  init,
  searchAlbums,
  searchArtists,
  Track,
  TrackSimplified,
} from "spotify-web-sdk";
import { Flex, ThemeUIStyleObject } from "theme-ui";

import AlbumCover from "../AlbumCover";
import SearchInput from "./SearchInput";
import Container from "../Container";

import { Option } from "../../typings/options";
import OptionButton from "./OptionButton";

interface AlbumInfo {
  name: string;
  imageUrl: string;
  tracks: (Track | TrackSimplified)[];
}

const buttonGroupStyle: ThemeUIStyleObject = {
  flexDirection: "column",
  gap: ".25rem",
};

const containerStyle: ThemeUIStyleObject = {
  gap: "2rem",
  alignItems: "center",
};

const albumCoverContainerStyle: ThemeUIStyleObject = {
  alignItems: "center",
  flexDirection: "column",
  gap: "2rem",
  padding: "2rem",
};

const AlbumGenerator = () => {
  const [query, setQuery] = useState<string>("");
  const [albumInfo, setAlbumInfo] = useState<AlbumInfo>();
  const [option, setOption] = useState<Option>();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function initSpotifySDK() {
      init({ token: localStorage.getItem("spotifyToken") ?? "" });
    }

    initSpotifySDK();
  }, []);

  const searchData = async (option: Option) => {
    setLoading(true);
    setOption(option);

    if (option.startsWith("TOP")) {
      const topTracks = await getCurrentUserTopTracks({
        range:
          option === "TOP_SHORT"
            ? "short_term"
            : option === "TOP_MEDIUM"
            ? "medium_term"
            : "long_term",
      });

      const user = await getCurrentUserProfile();

      setAlbumInfo({
        name: user.displayName,
        imageUrl: user.images[0].url,
        tracks: topTracks.items,
      });
    } else if (option === "ALBUM") {
      const albums = await searchAlbums(query);
      const album = await getAlbum(albums.items[0].id);
      const allTracks = await album.getAllTracks();

      setAlbumInfo({
        name: album.name,
        imageUrl: album.imageUrl,
        tracks: allTracks,
      });
    } else {
      const artists = await searchArtists(query);
      const artist = artists.items[0];
      const topTracks = await getArtistTopTracks(artist.id, "from_token");

      setAlbumInfo({
        name: artist.name,
        imageUrl: artist.imageUrl,
        tracks: topTracks,
      });
    }

    setLoading(false);
  };

  return (
    <Container>
      <Flex sx={containerStyle}>
        <Flex sx={buttonGroupStyle}>
          <OptionButton
            option="ALBUM"
            handleClick={setOption}
            selectedOption={option}
          >
            Album version
          </OptionButton>
          <OptionButton
            option="ARTIST"
            handleClick={setOption}
            selectedOption={option}
          >
            Artist version
          </OptionButton>
          {(option === "ALBUM" || option === "ARTIST") && (
            <SearchInput
              query={query}
              setQuery={setQuery}
              option={option}
              searchData={searchData}
            />
          )}
          <OptionButton
            option="TOP_SHORT"
            handleClick={searchData}
            selectedOption={option}
          >
            Top tracks (short term) version
          </OptionButton>
          <OptionButton
            option="TOP_MEDIUM"
            handleClick={searchData}
            selectedOption={option}
          >
            Top tracks (medium term) version
          </OptionButton>
          <OptionButton
            option="TOP_LONG"
            handleClick={searchData}
            selectedOption={option}
          >
            Top tracks (long term) version
          </OptionButton>
        </Flex>
        <Flex sx={albumCoverContainerStyle}>
          <Flex sx={{ height: "480px", width: "480px" }}>
            <AlbumCover
              loading={loading}
              title={albumInfo?.name}
              trackList={albumInfo?.tracks.map((track) => track.name)}
              imageUrl={albumInfo?.imageUrl}
            />
          </Flex>
        </Flex>
      </Flex>
    </Container>
  );
};

export default AlbumGenerator;
