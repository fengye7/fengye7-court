import { fengye7BlogURL } from "@/closet/constants";

const Sidebar: React.FC = () => {
  return (
    <>
      <style>
        {`
            .sidebar {
              position: fixed;
              top: 6%;
              left: 0;
              width: 10%;
              height: 94%;
              background-color: #f1f1f1;
              padding: 20px;
              box-sizing: border-box;
              
            }
          .sidebar ul {
              list-style: none;
              padding: 0;
              margin: 0;
            }
          .sidebar ul li {
              padding: 10px 0;
              border-bottom: 1px solid #ccc;
            }
          .sidebar ul li:last-child {
              border-bottom: none;
            }
          .sidebar ul li a {
              display: block;
              padding: 5px 0;
              color: #666;
              text-decoration: none;
              font-size: 14px;
            }
          `}
      </style>
      <div className="sidebar">
        <ul className="nav flex-column">
          <li className="nav-item">
            <a className="nav-link" aria-current="page" href="/music">
              音乐
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" aria-current="page" href="#">
              个人作品
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" aria-current="page" href={fengye7BlogURL}>
              博客
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" aria-current="page" href="#">
              统计分析
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" aria-current="page" href="#">
              Fengye7's AI
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
