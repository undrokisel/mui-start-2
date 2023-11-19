import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import React from 'react';

const GoodsItem = (props) => {
    const { name, price, setOrder, poster } = props;

    return (
        <Grid item justifyContent={'center'}
            xs={12}
            sm={6}
            md={4}
            lg={3}
        >
            <Card sx={{height: '100%', maxWidth: 345 }}>
                <CardMedia sx={{ height: 180 }}
                    image={`${poster}`}
                    title={'card'}
                    alt={'card'}
                    component="img"
                />
                <CardContent>
                    <Typography component={'h5'} variant="h6">
                        {name}
                    </Typography>
                    <Typography component="p" variant="body1">
                        Цена: {price} руб.
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button
                        variant="text"
                        onClick={() =>
                            setOrder({
                                id: props.id,
                                name: props.name,
                                price: props.price,
                            })
                        }
                    >
                        Купить
                    </Button>
                </CardActions>
            </Card>
        </Grid>
    );
};

export default GoodsItem;