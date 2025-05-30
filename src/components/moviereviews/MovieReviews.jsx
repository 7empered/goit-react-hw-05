import { useEffect, useState } from "react";
import style from "./MovieReviews.module.css";
import { useParams } from "react-router-dom";
import { fetchReviewsForMovie, fetchImgMoviePath } from "../../api/api";

const MovieReviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);
  const [loading, setLoading] = useState(false);

  const [reviewsImg, setReviewsImg] = useState(null);
  const [posterUrl, setPosterUrl] = useState(null);

  const defaultImg =
    "https://media.istockphoto.com/id/1016744004/vector/profile-placeholder-image-gray-silhouette-no-photo.jpg?s=612x612&w=0&k=20&c=mB6A9idhtEtsFXphs1WVwW_iPBt37S2kJp6VpPhFeoA=";

  useEffect(() => {
    async function fetchReviewsByMovie() {
      try {
        setLoading(true);

        const [detailsReviews, reviewsImgPath] = await Promise.all([
          fetchReviewsForMovie(movieId),
          fetchImgMoviePath(),
        ]);
        setReviews(detailsReviews.data.reviews.results);
        setReviewsImg(reviewsImgPath.data.images);
      } catch (error) {
        console.log(" error", error);
      } finally {
        setLoading(false);
      }
    }
    fetchReviewsByMovie();
  }, [movieId]);

  useEffect(() => {
    if (reviews) {
      const posterSize = "w200";
      const url = `${reviewsImg.secure_base_url}${posterSize}`;

      return setPosterUrl(url);
    }
  }, [reviews, reviewsImg]);

  return (
    <div className={style.container}>
      {loading ? (
        <strong>Loading posts...</strong>
      ) : (
        <ul className={style.list}>
          {reviews && reviews.length > 0 ? (
            reviews.map(({ id, author, author_details, content }) => {
              return (
                <li key={id} className={style.item}>
                  <h3 className={style.title}>{author}</h3>
                  <img
                    src={
                      author_details.avatar_path !== null
                        ? `${posterUrl}${author_details.avatar_path}`
                        : defaultImg
                    }
                    alt={author}
                    width={250}
                    className={style.img}
                  />
                  <p className={style.text}>{content}</p>
                </li>
              );
            })
          ) : (
            <strong>We don't have any reviews for this movie</strong>
          )}
        </ul>
      )}
    </div>
  );
};

export default MovieReviews;