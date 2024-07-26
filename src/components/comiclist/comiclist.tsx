import Spinner from "@/components/spinner/spinner";
import { useComicPictures } from "@/hooks/useComicPicture";
import { Comics } from "@/modules/hero/hero.interface";
import "./comiclist.css";

export interface ComicListProps {
  comics: Comics;
}

export interface FullComic {
  name: string;
  url_picture: string;
}

const ComicList: React.FC<ComicListProps> = ({ comics }) => {
  const { loading, imageComics } = useComicPictures(comics);

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <div className="comic-list">
          <div className="comic-list-container">
            <h3>Comics</h3>
            <div className="comic-list-images">
              {imageComics.map((comic: FullComic) => {
                return (
                  <div className="comic-list-image" key={comic.name}>
                    <img src={comic.url_picture} alt={comic.name} />
                    <div className="comic-list-image-data">
                      <span>{comic.name}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ComicList;
