import { Link } from "react-router-dom";
import "./post.css";

export default function Post({img,post}) {
  const PF = "http://localhost:5000/images/";
  return (
    <div className="post">
     {post.photo && <img className="postImg" src={PF + post.photo} alt="" />}
      <div className="postInfo">
        <div className="postCats">
        {post.categories.map((c)=>
         <Link className="link" to="/posts?cat=Music">
              {c.name}
            </Link>
        )}
        <Link to={`/post/${post._id}`} className="link">
        {post.title}
        </Link>
          <span className="postCat">
            {/* <Link className="link" to="/posts?cat=Music">
              Music
            </Link> */}
          </span>
          <span className="postCat">
            {/* <Link className="link" to="/posts?cat=Music">
              Life
            </Link> */}
          </span>
        </div>
        <span className="postTitle">
          <Link to="/post/abc" className="link">
            {/* Lorem ipsum dolor sit amet */}
            {post.title}
          </Link>
        </span>
        <hr />
        <span className="postDate">
        {/* 1 hour ago */}
        {new Date(post.createdAt).toDateString()}
        </span>
      </div>
      <p className="postDesc">
        {/* Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
        officia architecto deserunt deleniti? Labore ipsum aspernatur magnam
        fugiat, reprehenderit praesentium blanditiis quos cupiditate ratione
        atque, exercitationem quibusdam, reiciendis odio laboriosam? */}
        {post.desc}
      </p>
    </div>
  );
}
