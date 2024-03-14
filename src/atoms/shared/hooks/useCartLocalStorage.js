import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { getCart } from "../../store/model/selectors/cart/cartSelectors"

export const useCartLocalStorage = () => {
    const [cart, setCart] = useState([])
    const cartData = useSelector(getCart);

    useEffect(() =>{
        const savedProducts = localStorage.getItem('cart')

        if (savedProducts) {
            setCart(JSON.parse(savedProducts));
        }
    }, [])

    const sync = () => {
        localStorage.getItem('cart', JSON.stringify(cartData))
        setCart(cartData);
    }

    return {
        cart,
        sync
    };

}