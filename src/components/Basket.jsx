import { Divider, Drawer, List, ListItem, ListItemIcon, ListItemText, Typography } from "@mui/material"
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import BasketItem from "./BasketItem";

export const Basket = ({
    openDrawer, isDrawerOpen,
    order = [],
    removeFromOrder
}) => {

    return (
        <Drawer
            anchor={'right'}
            open={isDrawerOpen}
            onClose={() => openDrawer(false)}
        >
            <List sx={{ maxWidth: "400px" }}>
                <ListItem>
                    <ListItemIcon>
                        <ShoppingBasketIcon />
                    </ListItemIcon>
                    <ListItemText primary="Корзина" />
                </ListItem>
                <Divider />
                {!order.length
                    ? <ListItem>Корзина пуста</ListItem>
                    : (<>
                        {order.map((item, index) => (
                            <BasketItem
                                key={index}
                                {...item}
                                removeFromOrder={removeFromOrder}
                                index={index} />
                        )
                        )}
                        <Divider/>
                        <ListItem>
                            <Typography variant="h6" as="p">Общая стоимость: {
                                order.reduce((acc, item) => {
                                    return acc += item.price * item.quantity
                                }, 0)
                            } руб.</Typography>
                        </ListItem>

                    </>
                    )
                }
            </List>

        </Drawer>
    )
} 