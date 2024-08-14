import "./comiclist.scss";

export interface ComicListProps {
  comics: FullComic[];
}

export interface FullComic {
  name: string;
  url_picture: string;
}

const ComicList: React.FC<ComicListProps> = ({ comics }): JSX.Element => {
  return (
    <div className="ui-comic-list">
      {comics.map((comic: FullComic) => {
        const { name, url_picture } = comic;
        return (
          <div className="ui-comic-list__cover" key={name}>
            <img
              className="ui-comic-list__cover__image"
              src={url_picture}
              alt={name}
            />
            <span className="ui-comic-list__cover__title">{name}</span>
          </div>
        );
      })}
    </div>
  );
};

export default ComicList;
