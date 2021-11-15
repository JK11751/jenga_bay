// INITIAL STATE
// --------------------
// --> initialState
// 
// FUNCTIONS
// --------------------
// --> getOptionsArray
// 
// ACTIONS
// --------------------
// --> addToCart
// --> removeFromCart
// --> updateCartItem
// --> removeStockItem
// 
// REDUCERS
// --------------------
// ------> cartItem
// ----> cart
// ------> stockItem
// ----> stock
// --> reducers
// 
// COMPONENTS
// --------------------
// ------> Header
// ----> HeaderContainer
// ----------> ShopItem
// --------> ShopItems
// ------> ShopItemsContainer
// ----> Shop
// ----------> AddItem
// --------> AddItemContainer
// ------> Item
// ----> ItemContainer
// ----------> CartItem
// --------> CartItems
// --------> Total
// --------> PayButton
// ------> Cart
// ----> CartContainer
// ----> NoMatch
// --> App

const { PropTypes } = React;
const { connect, Provider } = ReactRedux;
const {
  Router,
  Route,
  Link,
  IndexRoute,
  hashHistory
} = ReactRouter;

// INITIAL STATE
const initialState = {
  cart: [],
  stock: [
    {
      id: 0,
      name: 'TC 2017 LS',
      description: 'VC FlexLight Jersey with spot sublimated Team Canada 2017 logo, from our Team Canada Collection.',
      price: 34.95,
      count: 12,
      img: 'https://cdn.shopify.com/s/files/1/0340/2849/products/TC2017_LS_Mens_grande.jpg?v=1485541617',
    }, {
      id: 1,
      name: 'TC 2017 Shorts',
      description: 'VC FlexLight Shorts with spot sublimated Team Canada 2017 logo, from our Team Canada Collection.',
      price: 25.00,
      count: 7,
      img: 'https://cdn.shopify.com/s/files/1/0340/2849/products/TC2017_Shorts_White_grande.jpg?v=1485541580',
    }, {
      id: 2,
      name: 'TC 2016 Red SS',
      description: 'VC Ultimate\'s fully sublimated performance jersey, a replica of one of the two official dark jerseys of 2016 Team Canada teams! Sublimated jerseys are made with VC\'s FlexLight performance material – soft, lightweight and moisture wicking.',
      price: 74.00,
      count: 11,
      img: 'https://cdn.shopify.com/s/files/1/0340/2849/products/TC2016_red_SS_front_grande.jpg?v=1468602448',
    }, {
      id: 3,
      name: 'TC 2016 Dark SS',
      description: 'VC Ultimate\'s fully sublimated performance jersey, a replica of one of the two official dark jerseys of 2016 Team Canada teams! Sublimated jerseys are made with VC\'s FlexLight performance material – soft, lightweight and moisture wicking.',
      price: 35.99,
      count: 13,
      img: 'https://cdn.shopify.com/s/files/1/0340/2849/products/TC2016_SS_front_grande.jpg?v=1460557226',
    }, {
      id: 4,
      name: 'TC 2016 Light SS',
      description: 'Official replica of the 2016 Team Canada light playing jersey. VC spot sublimated jerseys are made with VC\'s FlexLight performance material – soft, lightweight and moisture wicking.',
      price: 35.99,
      count: 16,
      img: 'https://cdn.shopify.com/s/files/1/0340/2849/products/TCsample2_white_front_grande.jpg?v=1480111096',
    }, {
      id: 5,
      name: 'Goat Shorts',
      description: 'This just in... VC\'s NEW signature \'GOAT\' style athletic shorts now with pockets! Made with our FlexLight material.',
      price: 29.00,
      count: 4,
      img: 'https://cdn.shopify.com/s/files/1/0340/2849/products/MedGreyPockets_front_grande400x600_grande_888f95c1-0f4d-483f-938e-c686892a855a_grande.jpg?v=1454966549',
    }, {
      id: 6,
      name: 'Friction Gloves',
      description: 'This is the glove that started it all! Friction Gloves work great in every condition: dry, hot, rain, snow, you name it. They will help you maintain a firm grip on the disc whether you\'re catching or throwing. They eliminate slippage when the disc is wet, keep your hands warm in cold weather, and ease the sting of zippy throws. Whether your goal is to throw with more accuracy, catch tough discs, or just look fly, Frictions will help.  Frictions are not bulky or stiff like other gloves. They are tight fitting and, after a while, you\'ll forget they\'re even on!',
      price: 33.95,
      count: 18,
      img: 'https://cdn.shopify.com/s/files/1/0340/2849/products/Gloves_grande.jpg?v=1446586810',
    }, {
      id: 7,
      name: 'TC 2017 Trucker',
      description: 'Premium meshback cotton front trucker hat. Made by FlexFit, with the official embroidered patch of Team Canada 2017! 47% Cotton / 25% Polyester / 28% Nylon, contrast trucker mesh back, matching plastic snap, hard buckram, matching undervisor. One size fits all',
      price: 15.00,
      count: 15,
      img: 'https://cdn.shopify.com/s/files/1/0340/2849/products/TC2017_Hat_Snapback_BlackWhite_grande.jpg?v=1485538793',
    }, {
      id: 8,
      name: 'VC Discraft Disc',
      description: 'Discraft 175 gram Ultrastar disc, hot stamped with the original VC logo.',
      price: 14.00,
      count: 19,
      img: 'https://cdn.shopify.com/s/files/1/0340/2849/products/Disc_VC_OG_grande_grande_cc0c1695-4247-426a-bd6c-5821da4e42da_grande.png?v=1485469652',
    },
  ],
};


// FUNCTIONS
// getOptionsArray
const getOptionsArray = (count) => {
  const array = [];
  for (let i = 0; i < count; i++) {
    array.push(i + 1);
  }

  return array;
};

// ACTIONS
// addToCart
const addToCart = (id, count) => (
  {
    type: 'ADD_TO_CART',
    id,
    count,
  }
);

// removeFromCart
const removeFromCart = (id) => (
  {
    type: 'REMOVE_FROM_CART',
    id,
  }
);

// updateCartItem
const updateCartItem = (id, count) => (
  {
    type: 'UPDATE_CART_ITEM',
    id,
    count,
  }
);

// removeStockItem
const removeStockItem = (id, count) => (
  {
    type: 'REMOVE_STOCK_ITEM',
    id,
    count,
  }
);


// REDUCERS
// cartItem
const cartItem = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        id: action.id,
        count: action.count,
      };
    case 'REMOVE_FROM_CART':
      return state.id !== action.id;
    case 'UPDATE_CART_ITEM':
      if (state.id !== action.id) {
        return state;
      }

      return Object.assign(
        {},
        state,
        {
          count: action.count,
        }
      );
    default:
      return state;
  }
};

// cart
const cart = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return [
        ...state,
        cartItem(undefined, action),
      ];
    case 'REMOVE_FROM_CART':
      return state.filter(item => cartItem(item, action));
    case 'UPDATE_CART_ITEM':
      return state.map(item => cartItem(item, action));
    default:
      return state;
  }
};

// stockItem
const stockItem = (state, action) => {
  switch (action.type) {
    case 'REMOVE_STOCK_ITEM':
      if (state.id !== action.id) {
        return state;
      }

      return Object.assign(
        {},
        state,
        {
          count: state.count - action.count,
        }
      );
    default:
      return state;
  }
};

// stock
const stock = (state = [], action) => {
  switch (action.type) {
    case 'REMOVE_STOCK_ITEM':
      return state.map(item => stockItem(item, action));
    default:
      return state;
  }
};

// reducers
const reducers = Redux.combineReducers({
  cart,
  stock,
});


// COMPONENTS
// Header
const Header = ({ children, cartItems, backButton, cartButton }) => {
  const getBackButton = () => (
    <Link to='/' className='back-button'>
      &lt; Back to shop
    </Link>
  );

  const getCartButton = () => (
    <Link to='/cart' className='cart-button'>
      Cart ({cartItems})
    </Link>
  );

  return (
    <div className='shopping-cart-app'>
      <header className='header'>
        <div className='header-contents'>
          {backButton ? getBackButton() : ''}
          {cartButton ? getCartButton() : ''}
        </div>
      </header>
      <main className='main'>
        {children}
      </main>
    </div>
  );
};

Header.PropTypes = {
  cartItems: PropTypes.number.isRequired,
  backButton: PropTypes.bool.isRequired,
  cartButton: PropTypes.bool.isRequired,
};


// HeaderContainer
const showBackButton = (pathname) => (
  pathname !== '/' ? true : false
);

const showCartButton = (pathname) => (
  !pathname.includes('cart') ? true : false
);

const HeaderContainer = connect(
  (state, ownProps) => (
    {
      children: ownProps.children,
      cartItems: state.cart.length,
      backButton: showBackButton(ownProps.location.pathname),
    cartButton: showCartButton(ownProps.location.pathname),
    }
  )
)(Header);


// ShopItem
const ShopItem = ({ id, name, price, img }) => (
  <li className={'shop-item shop-item-' + id}>
    <Link to={'/item/' + id}>
      <div className='shop-item-container'>
        <img
          className='shop-item-image'
          src={img}
        />
        <h1 className='shop-item-name'>
          {name}
        </h1>
        <h2 className='shop-item-price'>
          ${price.toFixed(2)}
        </h2>
      </div>
    </Link>
  </li>
);

ShopItem.PropTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  img: PropTypes.string.isRequired,
};


// ShopItems
const ShopItems = ({ items }) => {
  if (!items.length) {
    return <p className='no-shop-items'>No items</p>;
  }

  return (
    <ul className='shop-item-list'>
      {items.map(item =>
        <ShopItem
          key={item.id}
          id={item.id}
          name={item.name}
          price={item.price}
          img={item.img}
        />
      )}
    </ul>
  );
};

ShopItems.PropTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    count: PropTypes.number.isRequired,
  }).isRequired).isRequired,
};


// ShopItemsContainer
const ShopItemsContainer = connect(
  (state) => (
    {
      items: state.stock,
    }
  )
)(ShopItems);


// Shop
const Shop = () => (
  <div className='shop'>
    <h1 className='main-header shop-header'>Shop</h1>
    <ShopItemsContainer />
  </div>
);


// AddItem
const AddItem = ({ id, count, onSubmit }) => {
  if (!count) {
    return (
      <p className='item-sold-out'>
        Sold out!
      </p>
    );
  }

  return (
    <form
      className='item-add-form'
      onSubmit={e => {
        e.preventDefault();
        onSubmit(e, id);
      }}
    >
      <span className='item-qty-label'>
        Qty:
      </span>
      <select className='item-qty'>
        {getOptionsArray(count).map(num =>
          <option
            key={num}
            value={num}
          >
            {num}
          </option>
        )}
      </select>
      <button
        className='item-add-button'
        type='submit'
      >
        Add to cart
      </button>
    </form>
  );
};

AddItem.PropTypes = {
  count: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
};


// AddItemContainer
const addItemGetSelectedValue = (e) => (
  e.target.getElementsByClassName('item-qty')[0].value
);

const AddItemContainer = connect(
  (state, ownProps) => (
    {
      id: ownProps.id,
      count: state.stock.find(item => item.id === ownProps.id).count,
      inCart: state.cart.some(item => item.id === ownProps.id),
    }
  ),
  null,
  (stateProps, dispatchProps, ownProps) => {
    const onSubmit = stateProps.inCart ? updateCartItem : addToCart;

    return Object.assign({}, ownProps, stateProps, dispatchProps, {
      onSubmit: (e, id) => {
        dispatchProps.dispatch(onSubmit(id, addItemGetSelectedValue(e)));
      },
    });
  }
)(AddItem);


// Item
const Item = ({ id, name, description, price, img }) => (
  <div className={'item item-' + id}>
    <img
      className='item-image'
      src={img}
    />
    <div className='item-details'>
      <h1 className='item-name'>
        {name}
      </h1>
      <h2 className='item-price'>
        ${price.toFixed(2)}
      </h2>
      <p className='item-desc'>
        {description}
      </p>
      <AddItemContainer id={id} />
    </div>
  </div>
);

Item.PropTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  img: PropTypes.string.isRequired,
};


// ItemContainer
const ItemContainer = connect(
  (state, ownProps) => (
    state.stock.find(item => String(item.id) === ownProps.params.id)
  )
)(Item);


// CartItem
const CartItem = (
  { id, name, price, img, count, stockCount, onQtyChange, onRemoveClick }
) => (
  <li className={'cart-item cart-item-' + id}>
    <Link
      to={'/item/' + id}
      className='cart-item-image-link'
    >
      <img
        className='cart-item-image'
        src={img}
      />
    </Link>
    <div className='cart-item-info'>
      <Link
        to={'/item/' + id}
        className='cart-item-name-link'
      >
        <h1 className='cart-item-name'>
          {name}
        </h1>
      </Link>
      <div className='cart-item-value'>
        <span className='cart-item-price'>
          ${price.toFixed(2)}
        </span>
        <span className='cart-item-qty'>
          Qty:
          <select
            className='cart-item-qty-select'
            value={count}
            onChange={(e) => onQtyChange(e, id)}
          >
            {getOptionsArray(stockCount).map(num =>
              <option
                key={num}
                value={num}
              >
                {num}
              </option>
            )}
          </select>
        </span>
      </div>
    </div>
    <a
      href="#"
      className='cart-item-delete'
      onClick={(e) => {
        onRemoveClick(e, id);
      }}
    >
      ×
    </a>
  </li>
);

CartItem.PropTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  img: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
  stockCount: PropTypes.number.isRequired,
  onQtyChange: PropTypes.func.isRequired,
  onRemoveClick: PropTypes.func.isRequired,
};


// CartItems
const CartItems = ({ cart, onQtyChange, onRemoveClick }) => {
  if (!cart.length) {
    return <p className='empty-cart'>Cart is empty</p>;
  }

  return (
    <ul className='cart-items'>
      {cart.map(item =>
        <CartItem
          key={item.id}
          id={item.id}
          name={item.name}
          price={item.price}
          img={item.img}
          count={item.count}
          stockCount={item.stockCount}
          onQtyChange={(e, id) => onQtyChange(e, id)}
          onRemoveClick={(e, id) => onRemoveClick(e, id)}
        />
      )}
    </ul>
  );
};

CartItems.PropTypes = {
  cart: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    img: PropTypes.string.isRequired,
    count: PropTypes.number.isRequired,
    stockCount: PropTypes.number.isRequired,
  }).isRequired).isRequired,
  onQtyChange: PropTypes.func.isRequired,
  onRemoveClick: PropTypes.func.isRequired,
};


// Total
const Total = ({ cart }) => (
  <div className='cart-total'>
    <span className='cart-total-label'>
      Total:
    </span>
    <span className='cart-total-value'>
      ${cart.length ? cart.reduce((acc, item) => (
        acc + item.price * item.count
      ), 0).toFixed(2) : Number(0).toFixed(2)}
    </span>
  </div>
);

Total.PropTypes = {
  cart: PropTypes.arrayOf(PropTypes.shape({
    price: PropTypes.number.isRequired,
    count: PropTypes.number.isRequired,
  }).isRequired).isRequired,
};


// PayButton
const PayButton = ({ onPayClick }) => (
  <button
    type='button'
    className='cart-pay-button'
    onClick={() => onPayClick()}
  >
    Pay now
  </button>
);

PayButton.PropTypes = {
  onPayClick: PropTypes.func.isRequired,
};


// Cart
const Cart = ({ cart, onQtyChange, onRemoveClick, onPayClick }) => (
  <div className='cart'>
    <h1 className='main-header cart-header'>My Cart</h1>
    <CartItems
      cart={cart}
      onQtyChange={onQtyChange}
      onRemoveClick={onRemoveClick}
    />
    <Total cart={cart} />
    <PayButton onPayClick={onPayClick} />
  </div>
);

Cart.PropTypes = {
  cart: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    img: PropTypes.string.isRequired,
    count: PropTypes.number.isRequired,
    stockCount: PropTypes.number.isRequired,
  }).isRequired).isRequired,
  onQtyChange: PropTypes.func.isRequired,
  onRemoveClick: PropTypes.func.isRequired,
  onPayClick: PropTypes.func.isRequired,
};


// CartContainer
const cartGetSelectedValue = (e) => (
  e.target.value
);

const CartContainer = connect(
  (state) => (
    {
      cart: state.cart.map(cartItem => {
        const item = state.stock.find(stockItem => cartItem.id === stockItem.id);
        return {
          id: cartItem.id,
          name: item.name,
          price: item.price,
          img: item.img,
          count: cartItem.count,
          stockCount: item.count,
        };
      }),
    }
  ),
  (dispatch) => (
    {
      onQtyChange: (e, id) => {
        dispatch(updateCartItem(id, cartGetSelectedValue(e)));
      },

      onRemoveClick: (e, id) => {
        e.preventDefault();
        dispatch(removeFromCart(id));
      },

      dispatch: (reducer) => dispatch(reducer),
    }
  ),
  (stateProps, dispatchProps, ownProps) => (
    Object.assign({}, ownProps, stateProps, dispatchProps, {
      onPayClick: () =>
        stateProps.cart.map(item => {
          dispatchProps.dispatch(removeStockItem(item.id, item.count));
          dispatchProps.dispatch(removeFromCart(item.id));
        }),
    })
  )
)(Cart);


// NoMatch
const NoMatch = () => (
  <p className='no-match'>
    Sorry, the page you are looking for does not exist.
    Click above to go back to the shop.
  </p>
);


// App
const App = () => (
  <Router history={hashHistory}>
    <Route path='/' component={HeaderContainer}>
      <IndexRoute component={Shop} />
      <Route path='item/:id' component={ItemContainer} />
      <Route path='cart' component={CartContainer} />
      <Route path='*' component={NoMatch} />
    </Route>
  </Router>
);

const store = Redux.createStore(reducers, initialState);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
