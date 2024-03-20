import NewsItem from "@/pages/api/interface/model";

const ListItem: React.FC<NewsItem> = ({
  imageUrl,
  title,
  description,
  itUrl,
}) => {
  return (
    <>
      <style></style>
      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-4">
            <a href={itUrl}>
              <img height="60" width="auto"
                src={imageUrl}
                className="img-fluid rounded-start"
                alt={title}
              />
            </a>
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <a href={itUrl}>
                <h5 className="card-title">{title}</h5>
              </a>
              <p className="card-text">{description}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ListItem;
