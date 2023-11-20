import { useState } from 'react';
import GoodsList from './GoodsList';
import Search from './Search';
import { goods } from '../data/goods';
import { Header } from './Header';
import { Container } from '@mui/material';
import { Basket } from './Basket';
import { Notification } from './Notification';

const App = () => {
    const [order, setOrder] = useState([]);
    const [search, setSearch] = useState('');
    const [products, setProducts] = useState(goods);
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [isSnackOpen, setIsSnackOpen] = useState(false);


    const handleChange = (e) => {
        if (!e.target.value) {
            setProducts(goods);
            setSearch('');
            return;
        }

        setSearch(e.target.value);
        setProducts(
            products.filter((good) =>
                good.name.toLowerCase().includes(e.target.value.toLowerCase())
            ))
    };

    const addToOrder = (goodsItem) => {
        let quantity = 1;

        const indexInOrder = order.findIndex(
            (item) => item.id === goodsItem.id
        );

        if (indexInOrder > -1) {
            quantity = order[indexInOrder].quantity + 1;

            setOrder(order.map((item) => {
                if (item.id !== goodsItem.id) return item;

                return {
                    id: item.id,
                    name: item.name,
                    price: item.price,
                    quantity,
                };
            }),
            );
        } else {
            setOrder([
                ...order,
                {
                    id: goodsItem.id,
                    name: goodsItem.name,
                    price: goodsItem.price,
                    quantity,
                },
            ],
            );
        }
        setIsSnackOpen(true)
    };

    const removeFromOrder = (goodId) => {
        setOrder(order.filter((item) => item.id !== goodId));
    };

    return (
        <Container>
            <Header
                order={order}
                openDrawer={() => setIsDrawerOpen(true)}
            />
            <Search
                value={search}
                onChange={handleChange}
            />
            <GoodsList
                goods={products}
                setOrder={addToOrder}
            />
            <Basket
                isDrawerOpen={isDrawerOpen}
                openDrawer={setIsDrawerOpen}
                order={order}
                removeFromOrder={removeFromOrder}
            />
            <Notification
                isSnackOpen={isSnackOpen}
                handleSnackClose={() => setIsSnackOpen(false)} />
        </Container>
    );
}

export default App;
