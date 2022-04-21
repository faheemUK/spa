import React from "react";
import { Grid, Paper } from "@mui/material"
export function PostListing({ userPosts }) {
    return (
        <Grid sx={{ flexGrow: 1 }} container spacing={2}>
            <Grid item xs={12}>
                <Grid container justifyContent="center" spacing={2}>
                    {
                        userPosts.map((post, index) => {
                            return (
                                <Grid key={index} item>
                                    <Paper
                                        sx={{
                                            height: 250,
                                            width: 350,
                                            backgroundColor: (theme) =>
                                                theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
                                        }}
                                    >
                                        <div className="post-parent">
                                            <h5 className="post-title">
                                                {post.title}
                                            </h5>
                                            <br />
                                            <h5 className="post-body">
                                                {post.body}
                                            </h5>
                                        </div>
                                    </Paper>
                                </Grid>
                            )
                        })
                    }
                </Grid>
            </Grid>
        </Grid>
    )
}