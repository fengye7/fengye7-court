const Sidebar: React.FC = () => {
  return (
    <>
      <head>
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
      </head>
      <div className="sidebar">
        <ul className="nav flex-column">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">
              音乐
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              个人作品
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              博客
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              统计分析
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
