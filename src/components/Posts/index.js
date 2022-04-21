import React, { useEffect, useState } from "react";
import { ErrorMessage, Loader, NoDataAvailableMessage } from "../../assets"
import { useDispatch, useSelector } from "react-redux";
import { getAllUserPosts } from "../../redux/actions";
import { Container, Button } from "@mui/material"
import { PostListing } from "./PostListing";
import { PostModal } from "./PostModal";
function Posts() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  let dispatch = useDispatch();
  let userPosts = useSelector((state) => state.userPosts)
  useEffect(() => {
    document.title = "My Posts || SPA"
    dispatch(getAllUserPosts(1))
  }, [dispatch])
  console.log("all posts::", userPosts.allPosts.length)

  return (
    <Container>
      <h4 className="heading">
        {"My Posts"}
      </h4>
      {
        userPosts?.allPostsLoading === true
        &&
        <Loader />
      }
      {
        userPosts?.allPostsFailure === true
        &&
        <ErrorMessage message={userPosts.allPostsError} />
      }
      <div>
        <Button className="post-btn " onClick={() => {
          handleOpen();
        }}
          variant="outlined">
          {"Add Post"}
        </Button>
      </div>

      {
        userPosts?.allPostsSuccess === true
        &&
        <React.Fragment>
          {
            userPosts.allPosts.length > 0
              ?
              <PostListing
                userPosts={userPosts.allPosts} />
              :
              <NoDataAvailableMessage message={"No Post Available"} />
          }
        </React.Fragment>

      }
      <PostModal
        open={open}
        handleClose={handleClose}
        handleOpen={handleOpen}
      />
    </Container>

  );
}
export default Posts;

