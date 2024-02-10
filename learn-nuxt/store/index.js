import {fetchCartItems} from "~/api";

// constants
export const FETCH_CART_ITEMS = 'FETCH_CART_ITEMS';

export const state = () => ({
  cartItems: [],
});

export const mutations = {
  addCartItem(state, cartItem) {
    state.cartItems.push({
      ...cartItem,
      imageUrl: `${cartItem.imageUrl}?random=${Math.random()}`
    });
  },
  setCartItems(state, cartItems) {
    state.cartItems = cartItems;
  },
}

export const actions = {
  async [FETCH_CART_ITEMS]({commit}) {
    const {data} = await fetchCartItems();
    commit('setCartItems', data.map(item => ({
      ...item,
      imageUrl: `${item.imageUrl}?random=${Math.random()}`
    })));
    // return response;
  },
  // Nuxt App이 실행될 때 무조건 실행되도록 설계된 라이프 사이클
  async nuxtServiceInit(storeContext, nuxtContext) {
    const {data} = await fetchCartItems();
    storeContext.commit('setCartItems', data.map(item => ({
      ...item,
      imageUrl: `${item.imageUrl}?random=${Math.random()}`
    })));
  },
}
