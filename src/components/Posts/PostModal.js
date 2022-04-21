import React, { useEffect } from "react";
import { Modal, Box, TextField, Button } from "@mui/material"
import { useForm } from "react-hook-form";
import { ErrorMessage, FieldError, Loader } from "../../assets";
import { useDispatch, useSelector } from "react-redux";
import { newPost } from "../../redux/actions";
import { request, USER_POSTS_REQUEST } from "../../redux/actions/utilities";
export function PostModal(props) {
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 600,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };
    return (
        <Modal
            open={props.open}
            onClose={props.handleClose}>
            <Box sx={style}>
                <PostModalForm
                    {...props} />
            </Box>
        </Modal>
    )
}

function PostModalForm(props) {
    const { register, handleSubmit, errors } = useForm();
    let dispatch = useDispatch();
    let userPost = useSelector((state) => state.userPosts)
    function addNewPost(data) {
        data = { ...data, userId: 1 }
        dispatch(newPost(data, props.handleClose))
    }
    useEffect(() => {
        dispatch(request(USER_POSTS_REQUEST.RESET_POST))
    }, [dispatch])
    return (
        <form onSubmit={handleSubmit(addNewPost)} className="txt-align-center">
            <h4 className="mb-4 text-align-center">
                {"New Post"}
            </h4>
            {
                userPost?.addPostFailure === true
                &&
                <ErrorMessage message={userPost.addPostError} />
            }
            <div>
                <TextField
                    sx={{ m: 1, width: '480px' }}
                    error={errors?.title ? true : false}
                    id="outlined-error-helper-text"
                    label="Title"
                    name="title"
                    variant="standard"
                    inputRef={register({ required: true })}
                />
                {
                    errors?.title
                    &&
                    <FieldError message={"Title is Missing."} />
                }
            </div>
            <div>
                <TextField
                    error={errors?.body ? true : false}
                    sx={{ m: 1, width: '480px' }}
                    id="outlined-multiline-flexible"
                    label="Description"
                    name="body"
                    multiline
                    maxRows={4}
                    variant="standard"
                    inputRef={register({ required: true })}
                />
                {
                    errors?.body
                    &&
                    <FieldError message={"Description is Missing."} />
                }
            </div>

            <div className="post-footer-btns">
                {
                    userPost?.addPostLoading === true
                        ?
                        <Loader />
                        :
                        <React.Fragment>
                            <Button type="submit"
                                variant="outlined">
                                {"Add Post"}
                            </Button>
                            <Button style={{ marginLeft: 5 }} type="button"
                                onClick={() => {
                                    props.handleClose();
                                }}
                                variant="outlined">
                                {"Cancel"}
                            </Button>
                        </React.Fragment>
                }

            </div>
        </form>
    )
}