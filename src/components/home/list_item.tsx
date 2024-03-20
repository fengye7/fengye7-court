import NewsItem from "@/pages/api/interface/model";

const ListItem: React.FC<NewsItem> = ({
  imageUrl,
  title,
  description,
  itUrl,
  date,
  pageView,
}) => {
  return (
    <>
      <style jsx>{`
        .card {
          max-width: 100%; /* 设置卡片最大宽度 */
          margin-bottom: 10px; /* 设置卡片之间的间距 */
        }
        .img-fluid {
          height: 200px; /* 设置图片高度 */
          width: 100%; /* 设置图片宽度 */
          object-fit: cover; /* 图片填充方式，cover表示尽量填充但不变形 */
        }
        .card-title {
          font-size: 1.5rem; /* 设置标题字体大小 */
          margin-bottom: 10px; /* 设置标题与描述之间的间距 */
        }
        .card-text {
          font-size: 1rem; /* 设置描述字体大小 */
        }
        .card-link {
          color: #5F1F98;
          text-decoration: none; /* 去除下划线 */
        }
        .page-view{
          color: #FB034C;
        }
      `}</style>
      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-4">
            <a href={itUrl}>
              <img
                src={imageUrl}
                className="img-fluid rounded-start"
                alt={title}
              />
            </a>
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <a href={itUrl} className="card-link"> {/* 使用card-link样式 */}
                <h5 className="card-title">{title}</h5>
              </a>
              <p className="card-text">{description}</p>
              {/* 添加日期和人气信息 */}
              <p>{date}</p>
              <p className="page-view">{pageView}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ListItem;
