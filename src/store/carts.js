export default{
    state: {
   
        carts:[]
      },
      getters: {
        
        showCarts : (state) => state.carts,
        countCarts : (state) => state.carts.length ,
        
        addToCart: (state , getters) => (cart) =>{
            var exist = getters.showCarts.find(f=> f.id == cart.id);
            
            if(exist){
                exist.count++;
                return "exist";
            }else{
                state.carts.push(cart)
                return "done";
            }
        },
        removeCart:(state,getters) => (id) =>{
            state.carts = getters.showCarts.filter(f => f.id != id)
    
            return "done";
        },
        changeCount :(state,getters) => (id,symbole) => {
            var cart = getters.showCarts.find(f => f.id == id)
    
            if(symbole == '+'){
                cart.count++
            }else if(symbole == '-'){
                if(cart.count > 1){
                    cart.count--
                }
            }
        },
        finalOrder: (state , getters) => {
            const totalPrice = getters.showCarts.reduce((sum , cart) => sum + (cart.price * cart.count) , 0);
    
            const finalPrice = getters.showCarts.reduce((sum , cart) => sum + (cart.finalPrice * cart.count) , 0);
    
            const totoalDiscount = totalPrice - finalPrice;
    
            const prices = {
                totalPrice : totalPrice,
                totoalDiscount : totoalDiscount,
                finalPrice : finalPrice,
            }
    
            return prices
        },
        
      },
      mutations: {},
      actions: {},
}