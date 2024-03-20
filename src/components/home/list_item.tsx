import NewsItem from "@/pages/api/interface/model";
import Link from "next/link";


const ListItem: React.FC<NewsItem> = ({
  imageUrl,
  title,
  description,
  itUrl
}) => {
  return (
    <div className="card mb-3">
      <div className="row g-0">
        <div className="col-md-4">
          <img src={imageUrl} className="img-fluid rounded-start" alt={title} />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListItem;