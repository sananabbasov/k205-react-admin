import { TextField, OutlinedInput, InputAdornment, FormLabel, MenuItem, Button, Switch } from '@mui/material'
import React from 'react'

const CreateProduct = () => {
    return (
        <div className='container  my-5'>
            <div className="row">
                <div className="col-lg-8">
                    <div className="row">
                        <div className="col-lg-12">
                            <TextField fullWidth id="outlined-basic" label="Name" variant="outlined" />
                        </div>
                        <div className="col-lg-4 my-2">
                            <OutlinedInput
                                id="outlined-basic"
                                label="SKU"
                                endAdornment={<InputAdornment position="end">₼</InputAdornment>}
                                aria-describedby="outlined-basic"
                                variant="outlined"
                            />
                        </div>
                        <div className="col-lg-4 my-2">
                            <TextField fullWidth
                                id="outlined-select-currency"
                                select
                                label="Select"
                            >
                                <MenuItem >
                                    Telefon
                                </MenuItem>

                            </TextField>
                        </div>
                        <div className="col-lg-4 my-2">
                            <TextField fullWidth id="outlined-basic" label="SKU" variant="outlined" />
                        </div>

                        <div className="col-lg-12 my-2">
                            <TextField
                                fullWidth
                                id="outlined-multiline-static"
                                label="Summary"
                                multiline
                                rows={4}
                            />
                        </div>
                        <div className="col-lg-12 my-2">
                            <Button
                                fullWidth
                                variant="contained"
                                component="label"
                            >
                                Upload File
                                <input
                                    type="file"
                                    hidden
                                    multiple
                                />
                            </Button>

                            <div className="row">
                                <div className="col-lg-3 my-3">
                                    <div className="card">
                                        <img className='img-fluid' src='https://cdn.pixabay.com/photo/2022/06/20/20/21/raining-7274548_960_720.jpg' alt='' />
                                    </div>
                                </div>
                                <div className="col-lg-3 my-3">
                                    <div className="card">
                                        <img className='img-fluid' src='https://cdn.pixabay.com/photo/2022/06/20/20/21/raining-7274548_960_720.jpg' alt='' />
                                    </div>
                                </div>
                                <div className="col-lg-3 my-3">
                                    <div className="card">
                                        <img className='img-fluid' src='https://cdn.pixabay.com/photo/2022/06/20/20/21/raining-7274548_960_720.jpg' alt='' />
                                    </div>
                                </div>
                                <div className="col-lg-3 my-3">
                                    <div className="card">
                                        <img className='img-fluid' src='https://cdn.pixabay.com/photo/2022/06/20/20/21/raining-7274548_960_720.jpg' alt='' />
                                    </div>
                                </div>
                                <div className="col-lg-3 my-3">
                                    <div className="card">
                                        <img className='img-fluid' src='https://cdn.pixabay.com/photo/2022/06/20/20/21/raining-7274548_960_720.jpg' alt='' />
                                    </div>
                                </div>
                                <div className="col-lg-3 my-3">
                                    <div className="card">
                                        <img className='img-fluid' src='https://cdn.pixabay.com/photo/2022/06/20/20/21/raining-7274548_960_720.jpg' alt='' />
                                    </div>
                                </div>
                                <div className="col-lg-3 my-3">
                                    <div className="card">
                                        <img className='img-fluid' src='https://cdn.pixabay.com/photo/2022/06/20/20/21/raining-7274548_960_720.jpg' alt='' />
                                    </div>
                                </div>
                                <div className="col-lg-3 my-3">
                                    <div className="card">
                                        <img className='img-fluid' src='https://cdn.pixabay.com/photo/2022/06/20/20/21/raining-7274548_960_720.jpg' alt='' />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 my-2">
                            <Button
                                variant="contained"
                                component="label"
                                color='success'
                            >
                                Create
                            </Button>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="card mb-2">
                                <img className='img-fluid' src='https://cdn.pixabay.com/photo/2022/06/20/20/21/raining-7274548_960_720.jpg' alt='' />
                            </div>
                            <Button
                                fullWidth
                                variant="contained"
                                component="label"
                            >
                                Upload File
                                <input
                                    type="file"
                                    hidden
                                />
                            </Button>
                        </div>

                        <div className="col-lg-12">
                            <FormLabel component="legend"> Is slider
                                <Switch />
                            </FormLabel>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateProduct